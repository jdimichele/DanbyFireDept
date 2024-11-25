import { createStore } from 'vuex'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { db, timestamp } from '../firebase.js'
import { getDoc, doc, collection, setDoc } from 'firebase/firestore'

export default createStore({
  state() {
    return {
      user: {
        loggedIn: false,
        data: null
      },
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUsername: null,
      profileId: null,
      profileInitials: null,
      profileAdmin: null,
      blogPosts: [],
      applications: [],
      signRequests: [],
      newApplicationNotifications: false,
      lastCheckedTimestamp: null,
      aboutPhotoBucket: []
    }
  },
  mutations: {
    addApplication(state, payload) {
      state.applications.push(payload)
    },
    addSignRequest(state, payload) {
      state.signRequests.push(payload)
    },
    clearApplications(state) {
      state.applications = []
    },
    updateLastCheckedTimestamp(state, timestamp) {
      state.lastCheckedTimestamp = timestamp
    },
    setNewApplicationNotifications(state, value) {
      state.newApplicationNotifications = value
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id
      state.profileEmail = doc.data().email
      state.profileFirstName = doc.data().firstName
      state.profileLastName = doc.data().lastName
      state.profileUsername = doc.data().username
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join('') +
        state.profileLastName.match(/(\b\S)?/g).join('')
    },
    setUser(state, payload) {
      state.user = payload
    },
    updateUser(state, payload) {
      state.user = payload
    },
    setLoggedIn(state, payload) {
      state.user.loggedIn = payload
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload
    }
  },
  actions: {
    async getCurrentUser({ commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const dataBase = doc(db, 'users', user.id);
          const dbResults = await getDoc(dataBase);
          commit('setProfileInfo', dbResults)
          commit('setProfileInitials')

          const token = await user.getIdTokenResult()
          const admin = token.claims.admin
          commit('setProfileAdmin', admin)
        }
      })
    },

    async submitApplication({ commit }, data) {
      try {
        const dataBase = doc(collection(db, 'applications'));
        const applicationData = {
          appID: dataBase.id,
          date: timestamp(),
          name: `${data.firstName} ${data.lastName}`,
          address: data.address,
          email: data.emailAddress,
          phone: data.phoneNumber,
          pos: data.position
        }

        await setDoc(dataBase, applicationData)
        commit('addApplication', applicationData)

        return 'Application successfully sent, thank you!'
      } catch (error) {
        throw new Error('Application could not be sent to the server. Please try again later.')
      }
    },

    async submitSignRequest({ commit }, data) {
      try {
        const dataBase = doc(collection(db, 'house-signs'));
        const requestData = {
          appID: dataBase.id,
          data: timestamp(),
          name: `${data.firstName} ${data.lastName}`,
          email: data.emailAddress,
          phone: data.phoneNumber,
          address: data.homeAddress,
          direction: data.signDirection,
          numSigns: data.numberOfSigns,
          numPosts: data.numberOfPosts,
          mounting: data.mounting,
          paymentOption: data.paymentOption
        }

        await setDoc(dataBase, requestData);
        commit('addSignRequest', requestData)

        return 'House Sign Request submitted. A representative from DVFC will reach out to you soon.'
      } catch (error) {
        console.log(error);
        throw new Error('Sign request could not be sent to the server. Please try again later.')
      }
    },

    async checkForApplications({ commit, state }) {
      try {
        const applicationCollection = db.collection('applications')
        const querySnapshot = await applicationCollection.orderBy('date', 'desc').get()

        if (!querySnapshot.empty) {
          const latestApp = querySnapshot.docs[0].data()
          const latestRecordTimestamp = latestApp.date

          if (latestRecordTimestamp > state.lastCheckedTimestamp) {
            commit('updateLastCheckedTimestamp', latestRecordTimestamp)
            commit('setNewApplicationNotifications', true)
          } else {
            commit('setNewApplicationNotifications', false)
          }
        } else {
          commit('setNewApplicationNotifications', false)
        }
      } catch (error) {
        console.error('Error checking for new records:', error)
      }
    },

    async markNotificationsAsViewed({ commit }) {
      commit('setNewApplicationNotifications', false)
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    getAboutPhotos(state) {
      return state.aboutPhotoBucket
    }
  }
})

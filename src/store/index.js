import { createStore } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "../firebase.js";

export default createStore({
  state() {
    return {
      user: {
        loggedIn: false,
        data: null,
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
      newApplicationNotifications: false,
      lastCheckedTimestamp: null,
      aboutPhotoBucket: [],
    };
  },
  mutations: {
    addApplication(state, payload) {
      state.applications.push(payload);
    },
    clearApplications(state) {
      state.applications = [];
    },
    updateLastCheckedTimestamp(state, timestamp) {
      state.lastCheckedTimestamp = timestamp;
    },
    setNewApplicationNotifications(state, value) {
      state.newApplicationNotifications = value;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    setUser(state, payload) {
      state.user = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setLoggedIn(state, payload) {
      state.user.loggedIn = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }, user) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },

    async submitApplication(context, data) {
      try {
        const dataBase = db.collection("applications").doc();
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const applicationData = {
          appID: dataBase.id,
          date: timestamp,
          name: data.firstName + " " + data.lastName,
          email: data.emailAddress,
          phone: data.phoneNumber,
          pos: data.position,
        };

        await dataBase.set(applicationData);

        context.commit("addApplication", applicationData);

        return "Application successfully sent, thank you!";
      } catch (error) {
        throw new Error(
          "Application could not be sent to the server. Please try again later."
        );
      }
    },
    async checkForApplications({ commit, state }) {
      try {
        const applicationCollection = db.collection("applications");
        const querySnapshot = await applicationCollection
          .orderBy("date", "desc")
          .get();
        if (!querySnapshot.empty) {
          const latestApp = querySnapshot.docs[0].data();
          const latestRecordTimestamp = latestApp.date;
          if (latestRecordTimestamp > state.lastCheckedTimestamp) {
            commit("updateLastCheckedTimestamp", latestRecordTimestamp);

            commit("setNewApplicationNotifications", true);
          } else {
            commit("setNewApplicationNotifications", false);
          }
        } else {
          commit("setNewApplicationNotifications", false);
        }
      } catch (error) {
        console.error("Error checking for new records:", error);
      }
    },
    // async uploadNewPhotos(context, data){
    //   const dataBase = await db. collection("");
    // }

    async markNotificationsAsViewed({ commit }) {
      commit("setNewApplicationNotifications", false);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    getAboutPhotos(state) {
      return state.aboutPhotoBucket;
    },
  },
});

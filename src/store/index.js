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
    };
  },
  mutations: {
    addApplication(state, payload) {
      state.applications.push(payload);
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
        const dataBase = await db.collection("applications").doc();
        const timestamp = await Date.now();
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
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});

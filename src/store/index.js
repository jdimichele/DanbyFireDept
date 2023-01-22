import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { db } from "../firebase.js";

export default createStore({
  state() {
    return {
      user: null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUsername: null,
      profileId: null,
      profileInitials: null,
      profileAdmin: null,
    };
  },
  getters: {},
  mutations: {
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
    updateUser(state, payload) {
      state.user = payload;
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
  },
});

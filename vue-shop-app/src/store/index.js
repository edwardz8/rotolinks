import Vue from 'vue';
import Vuex from 'vuex';
import golfers from '../../golfers.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // golfer data
    golfers,
    // inCart
    currentLineup: [],
    currentGolfer: {},
  },
  getters: {
    // golfers
    getGolfers: state => state.golfers,
    getCurrentGolfer: state => state.currentGolfer,
    getCurrentLineup: state => state.currentLineup,
  },
  mutations: {
    // mutations are responsible for state changes
    /*   SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
      },
      setUser(state, val) {
        state.user = val;
      }, */
    SET_GOLFERS(state, val) {
      state.golfers = val
    },
    ADD_GOLFER_TO_LINEUP(state, golfer) {
      golfer.disablePlayer = true;
      state.currentLineup.unshift(golfer);
      if (state.currentLineup.length > 6) {
        state.currentLineup.length = 6
      }
    },
    REMOVE_FROM_LINEUP(state, index) {
      state.currentLineup.splice(index, 1);
    },
    CLEAR_LINEUP(state) {
      state.currentLineup = [];
    },
    CURRENT_GOLFER(state, golfer) {
      state.currentGolfer = golfer;
    }
  },
  actions: {
    // actions are responsible for when mutations are fired
    addGolferToLineup: (context, golfer) => {
      context.commit('ADD_GOLFER_TO_LINEUP', golfer, golfer.player_name);
    },
    currentGolfer: (context, golfer) => {
      context.commit('CURRENT_GOLFER', golfer, golfer.player_name);
    },
    removeGolfer: (context, index) => {
      context.commit('REMOVE_FROM_LINEUP', index);
    },
    clearLineup: (context, index) => [
      context.commit('CLEAR_LINEUP', index)
    ]
  },
});

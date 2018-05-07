
import Vuex from 'vuex';

const store = () => {
    return new Vuex.Store({
        state: {
            missionText: '',
            hustonOpen: false,
        },
        getters: {
            hustonText(state) {
                return state.missionText;
            },
            hustonOpen(state) {
                return state.hustonOpen;
            }
        },
        mutations: {
            SET_HUSTON_TEXT(state, text) {
                state.missionText = text;
            },
            CALL_TO_HUSTON(state, val) {
                state.hustonOpen = !!val;
            },
        },
        actions: {
            updateHustonText({ commit }, text) {
                commit('SET_HUSTON_TEXT', text);
            },
            callToHuston({ commit }, val) {
                commit('CALL_TO_HUSTON', val);
            }
        }
    });
};

export default store;

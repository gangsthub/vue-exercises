
import Vuex from 'vuex';

const store = () => {
    return new Vuex.Store({
        state: {
            hustonTopImage: '/images/astronaut.svg',
            missionText: '',
            hustonOpen: false,
            soloMissionPages: [],
        },
        getters: {
            hustonText(state) {
                return state.missionText;
            },
            hustonOpen(state) {
                return state.hustonOpen;
            },
            soloMissionPages(state) {
                return state.soloMissionPages;
            },
        },
        mutations: {
            SET_HUSTON_TEXT(state, text) {
                state.missionText = text;
            },
            CALL_TO_HUSTON(state, val) {
                state.hustonOpen = !!val;
            },
            EMPTY_SOLO_MISSION_PAGES(state) {
                state.soloMissionPages = [];
            },
            ADD_TO_WONT_SHOW_AGAIN_PAGES(state, page) {
                if (typeof page === 'string' && !state.soloMissionPages.includes(page)) {
                    state.soloMissionPages.push(page);
                }
            },
        },
        actions: {
            updateHustonText({ commit }, text) {
                commit('SET_HUSTON_TEXT', text);
            },
            callToHuston({ commit }, val) {
                commit('CALL_TO_HUSTON', val);
            },
            emptySoloMissionpages({ commit }) {
                commit('EMPTY_SOLO_MISSION_PAGES');
            },
            addToWontShowAgainPages({ commit }, page) {
                commit('ADD_TO_WONT_SHOW_AGAIN_PAGES', page);
            },
        },
    });
};

export default store;

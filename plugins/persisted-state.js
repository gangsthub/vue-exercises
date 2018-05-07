import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
    createPersistedState({
        key: 'Vuex',
        storage: window.sessionStorage
    })(store);
};

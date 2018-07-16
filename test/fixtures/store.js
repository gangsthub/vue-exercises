import Vuex from 'vuex';

let actions;
let storeInit;

actions = {
    updateHustonText: jest.fn(),
};
storeInit = () => new Vuex.Store({
    state: {},
    actions
});

export default storeInit;

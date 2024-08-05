import variables from '../../style/theme.module.scss';

const state = {
    theme: variables.theme,
};

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        localStorage.setItem('theme', value);
        // eslint-disable-next-line no-prototype-builtins
        if (state.hasOwnProperty(key)) {
            console.log(333, key, value);
            state[key] = value;
        }
    },
};

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};

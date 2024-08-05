import Vue from 'vue';
import Vuex from 'vuex';
import settings from './modules/settings.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        settings,
    },
});

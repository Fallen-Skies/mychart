import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		status: 200
	},
	mutations: {
		setstatus(state,params){
		    state.status = params;
		},
	},
	actions: {
		set_Setstatus({commit},params){
		    commit('setstatus',params)
		},
	},
	modules: {},
	getters: {
		getStatus: state => state.status
	}
});

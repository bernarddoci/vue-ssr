// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
	return new Vuex.Store({
		state: {
			items: ''
		},
		getters: {
			items: state => {
				return state.items
			}
		},
		mutations: {
			setItem: (state, payload) => {
				state.items = payload;
			}
		},
		actions: {
			getItems: ({ commit }) => {
				Vue.http.get('https://rest-api.trekandi.com/v1.0/car/get-by-id?car_spec_id=48')
					.then(res => {
						commit('setItem', res.data.result.car_brand.name)
					}, err => {
						console.log(err)
					})
			}
		}
	})
}

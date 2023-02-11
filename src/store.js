import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            city:'',
            cityWeather: null,
            filteredCities: [],
        }
    },
    mutations: {
        UPDATE_CITY: (state, data) => {
            state.city = data
        },
        UPDATE_CITY_WEATHER: (state, data) => {
            state.cityWeather = data
        }
    },
    actions: {
        SET_CITY({commit}, data) {
            commit('UPDATE_CITY', data)
        },
        SET_CITY_WEATHER({commit}, data) {
            commit('UPDATE_CITY_WEATHER', data)
        },

    },
    getters: {
        CITY(state) {
            return state.city
        },
        CITY_WEATHER(state) {
           return state.cityWeather
        }
    }
})

export default store
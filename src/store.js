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
        GET_WEATHER({commit}, city) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a037c87fc70dc90f55aeda70b13e314c`)
                .then(resp => resp.json())
                .then((resp) => {
                    console.log(resp)
                    commit('UPDATE_CITY_WEATHER', resp)
                })
                .catch((error) =>{
                    console.log(error)
                })
        }

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
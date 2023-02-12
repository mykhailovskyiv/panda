import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            city: '',
            cityWeather: null,
            filteredCities: [],
            favoriteCities: []
        }
    },
    mutations: {
        UPDATE_CITY: (state, data) => {
            state.city = data
        },
        UPDATE_CITY_WEATHER: (state, data) => {
            state.cityWeather = data
        },
        SET_TO_FAVORITE:(state, data) => {
            if (state.favoriteCities.length) {
                let alreadyExist = false
                state.favoriteCities.map(function (item){
                    if (item.city.name === data.city.name) {
                        alreadyExist = true

                    }
                })
                if (!alreadyExist) {
                    state.favoriteCities.push(data)
                }
            } else {
                state.favoriteCities.push(data)
            }

        },
        REMOVE_FROM_FAVORITE:(state, data) => {
            state.favoriteCities.splice(data, 1)
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
                    commit('UPDATE_CITY_WEATHER', resp)
                })
                .catch((error) =>{
                    console.log(error)
                })
        },
        GET_USER_LOCATION({commit, dispatch}) {
            fetch('https://ipinfo.io/json?token=f671587f415d65')
                .then(resp => resp.json())
                .then((resp) => {
                    commit('UPDATE_CITY', resp.city)
                    dispatch('GET_WEATHER',resp.city)
                })
                .catch((error) =>{
                    console.log(error)
                })
        },
        ADD_TO_FAVORITE({commit}, city) {
            commit('SET_TO_FAVORITE', city)
        },
        DELETE_FROM_FAVORITE({commit}, index) {
            commit('REMOVE_FROM_FAVORITE', index)
        }


    },
    getters: {
        CITY(state) {
            return state.city
        },
        CITY_WEATHER(state) {
           return state.cityWeather
        },
        FAVORITE_CITIES(state) {
            return state.favoriteCities
        }
    }
})

export default store
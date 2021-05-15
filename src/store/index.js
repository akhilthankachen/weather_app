import { createStore } from 'vuex'

export default createStore({
  state: {
    location: "",
    temp: 23,
    weather: "mostly cloudy"
  },
  mutations: {
    onInputText: (state,payload)=>{
      state.location = payload.target.value
    },
    clearSearch: (state)=>{
      state.location = ""
    }
  },
  actions: {
    onSearch(context){
      console.log(context.state.location)
      context.commit("clearSearch")
    }
  },
  modules: {
  },
  getters: {
    getSearchText: state=>state.location,
    getCurrentTemp: state=>state.temp,
    getCurrentWeather: state=>state.weather,
    getLowestTemp: ()=>{return {time: "7:00 AM", temp : 2}},
    getHighestTemp: ()=>{return {time: "2:00 PM", temp : 4}}
  }
})

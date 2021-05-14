import { createStore } from 'vuex'

export default createStore({
  state: {
    location: ""
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
    getSearchText: state=>state.location
  }
})

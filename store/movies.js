export const state = () => ({
   list:[],
   data:null,
   pagination :null,
 });
 
 export const getters ={
    getList(state){
       return state.list
    },
    getData(state){
       return state.data
    },
    getPagination(state){
       return state.pagination
    }
 }
 export const mutations = {
   setList(state, value) {
     state.list = value;
   },
   setData(state, value) {
     state.data = value
   },
   setPagination(state,value){
      state.pagination = value
   }
 };
 
 export const actions = {
     fetchList({ commit }){
         this.$axios.get(`${process.env.baseUrl}/discover/movie?api_key=${process.env.apiKey}`)
         .then((res) =>{
            const { page, total_pages, total_results, results } = res.data
            commit('setPagination', { page, total_pages, total_results, results })
            commit('setList',results)
         })
         .catch((error) =>{
            console.log(error)
         })
     },
     fetchData({ commit }, movieId){
        this.$axios.get(`${process.env.baseUrl}/movie/${movieId}?api_key=${process.env.apiKey}`)
      .then((res) =>{
         commit('setData',res.data)
      })
      .catch((error) =>{
         console.log(error)
      })
  }
 };
 
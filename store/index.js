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
     fetchList({ commit },timeWindow ){
         this.$axios.get(`/trending/movie/${timeWindow}`)
         .then((res) =>{
            const { page, total_pages, total_results, results } = res.data
            commit('setPagination', { page, total_pages, total_results, results })
            commit('setList',results)
         })
     },
     fetchData({ commit }, movieId){
        this.$axios.get(`/movie/${movieId}`)
      .then((res) =>{
         commit('setData',res.data)
      })
   }
 };
 
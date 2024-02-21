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
         this.$axios.get(`/trending/movie/`)
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
     },
     searchMovie({ commit }, query){
      this.$axios.get(t(`search/movie?query=${query}`))
      .then((res) =>{
         const { page, total_pages, total_results, results } = res.data
         commit('setPagination', { page, total_pages, total_results, results })
         commit('setList',results)
         this.route.push('/results')
      })
  },
 };
 
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: {
//         curGoods: {},
//         keyWord: '',
//         loadingIsShow: false,
//         loadingIsShowSuc: false
//     },
//     mutations: {
//         setCurGoods(state, newGoods) {
//             state.curGoods = newGoods;
//             localStorage.setItem('curGoods', JSON.stringify(newGoods));
//         },
//         setKeyWord(state, newWord) {
//             state.keyWord = newWord;
//         },
//         setLoadingIsShow(state, bool) {
//             state.loadingIsShow = bool;
//         },
//         setLoadingIsShowSuc(state, bool) {
//             state.loadingIsShowSuc = bool;
//         }
//     },
//     getters: {
//         getCurGoods(state) {
//             if (state.curGoods == {}) {
//                 return state.curGoods;
//             } else {
//                 return JSON.parse(localStorage.getItem('curGoods'));
//             }
//         },
//         getKeyWord(state) {
//             return state.keyWord;
//         },
//         getLoadingIsShow(state) {
//             return state.loadingIsShow;
//         },
//         getLoadingIsShowSuc(state) {
//             return state.loadingIsShowSuc;
//         }
//     }
// })


// export default store;
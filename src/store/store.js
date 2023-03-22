import {createStore} from "vuex";

export default createStore({
    state: {
        likes: 2,
    },
    getters: {
        doubleLike(state) {
            return state.likes * 2;
        }
    },
    mutations: {
        plusLike(state) {
            state.likes += 1;
        },
        minusLike(state) {
            state.likes -= 1;
        }
    },
    actions: {

    },
    modules: {
    },
})
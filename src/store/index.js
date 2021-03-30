import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1
  },
  mutations: {
    addCount (state, obj) {
      console.log(state, obj)
      state.count++;
    }
  },
  actions: {
    asyncAddCount (context, obj) {
      console.log(context, obj)
      context.commit("addCount", obj)
    }
  },
  modules: {},
});

export const moduleCounter = {
    namespaced:true,
    state: {
      count: 1,
    },
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
    },
  };

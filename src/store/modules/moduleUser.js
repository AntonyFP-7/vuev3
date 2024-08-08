const moduleUser = {
    namespaced: true,
    state: {
      nombre: "Antony",
      apellido: "flores paz",
    },
    getters: {
      sizeApellido(state) {
        return state.apellido.length;
      },
    },
    mutations: {
      changeName(state, nombre) {
        state.nombre = nombre;
      },
    },
    actions: {
      changeName({ commit, state }, name) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("actualizado");
            //context.commit("changeName", name);
            commit("changeName", name);
            //state.nombre
            //getters.sizeApellido
            resolve();
          }, 500);
        });
      },
      async confirmatiomnChangeName({ dispatch }, name) {
        await dispatch("changeName", name);
        console.log("actualizado en la bd");
      },
    },
  };

  export default moduleUser;
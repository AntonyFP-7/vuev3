<template lang="">
  <div>
    <h1>Bien venido a mi tienda</h1>
    <p>Mi nimbre es: {{ nombre }} {{ apellido }} {{ sizeApellido }}</p>
  </div>
  <div>
    <button @click="decrement()">Disminuir +</button>
    {{ count }}
    <button @click="increment()">Aumentar -</button>
  </div>
  <div>
    <form @submit.prevent="changeNameComponent()">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="name" />
      <button>Actualizar</button>
    </form>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
/* import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers("user"); */
export default {
  data() {
    return {
      name: "Antony",
    };
  },
  methods: {
    ...mapMutations("counter", ["decrement", "increment"]),
    ...mapActions("user", ["changeName", "confirmatiomnChangeName"]),
    changeNameComponent() {
      /* this.changeName(this.name).then(()=>{
        this.name = "";
      }); */
      this.confirmatiomnChangeName(this.name).then(() => {
        this.name = "";
      });
    },
    /*   changeName(name) {
      this.$store.dispatch("changeName", name);
    }, */
  },
  computed: {
    ...mapState("user", ["nombre", "apellido"]),
    ...mapState("counter", ["count"]),
    /*    ...mapState({
      nombre: (state) => state.user.nombre,
      apellido: (state) => {
        return state.user.nombre;
      },
      count: (state) => state.counter.count,
    }), */
    ...mapGetters("user", ["sizeApellido"]),
  },
};
</script>
<style lang=""></style>

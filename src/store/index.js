import { createStore } from "vuex";
import { moduleCounter } from "./modules/moduleCounter";
import moduleUser from "./modules/moduleUser";
export default createStore({
  state: {},
  modules: {
    // modules
    user: moduleUser,
    counter: moduleCounter,
  },
});

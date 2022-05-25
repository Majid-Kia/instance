import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { plans } from "./plans";
import { toast } from "./toast";
import { app } from "./app";

Vue.use(Vuex);

const store: StoreOptions<any> = {
  modules: {
    app,
    plans,
    toast,
  },
};

export default new Vuex.Store(store);

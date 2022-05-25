import { MutationTree } from "vuex";
import { ToastsState } from "./types";

export enum ToastsMutations {
  SET_TOAST = "setToast",
}

export const mutations: MutationTree<ToastsState> = {
  [ToastsMutations.SET_TOAST](state, payload) {
    state.color = payload.color;
    state.show = payload.show;
    state.text = payload.text;
    state.timeout = payload.timeout;
  },
};

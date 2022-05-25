import { ActionTree } from "vuex";
import { ToastsState } from "./types";

export enum ToastsActions {
  SHOW_TOAST = "showToast",
}

export const actions: ActionTree<ToastsState, any> = {
  [ToastsActions.SHOW_TOAST](payload) {
    console.log(payload);
  },
};

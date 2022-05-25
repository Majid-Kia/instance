import { Module } from "vuex";
import { ToastsState } from "./types";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: ToastsState = {
  color: "warning",
  show: false,
  text: "",
  timeout: 4000,
};

export const toast: Module<ToastsState, any> = {
  state,
  mutations,
  actions,
};

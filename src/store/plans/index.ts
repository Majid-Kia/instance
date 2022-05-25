import { Module } from "vuex";
import { PlansState } from "./types";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: PlansState = {
  all: [],
  loading: false,
};

export const plans: Module<PlansState, any> = {
  state,
  mutations,
  actions,
};

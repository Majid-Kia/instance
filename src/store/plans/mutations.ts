import { MutationTree } from "vuex";
import { PlansState } from "./types";

export enum PlansMutations {
  SET_PLANS = "setPlans",
  SET_PLANS_LOADING = "setPlansLoading",
}

export const mutations: MutationTree<PlansState> = {
  [PlansMutations.SET_PLANS](state, payload) {
    state.all = payload;
  },
  [PlansMutations.SET_PLANS_LOADING](state, payload) {
    state.loading = payload;
  },
};

import { plans } from "@/plugins/api";
import { ActionTree } from "vuex";
import { PlansMutations } from "./mutations";
import { PlansState } from "./types";

export enum PlansActions {
  GET_PLANS = "fetchPlans",
}

export const actions: ActionTree<PlansState, any> = {
  async [PlansActions.GET_PLANS]({ commit }) {
    commit(PlansMutations.SET_PLANS_LOADING, true);
    await plans
      .listPlansPlansGet()
      .then((res) => {
        commit(PlansMutations.SET_PLANS, res.data.plans);
      })
      .finally(() => {
        commit(PlansMutations.SET_PLANS_LOADING, false);
      });
  },
};

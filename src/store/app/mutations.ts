import { MutationTree } from "vuex";
import { AppState } from "./types";

export enum MutationApp {
  SET_CURRENT_REGION = "setCurrentRegion",
  SET_CURRENT_PLAN = "setCurrentPlan",
  SET_CURRENT_OS = "setCurrentOS",
  SET_HOST_NAME = "setHostName",
  SET_QUANTITY = "setQuantity",
  SET_IPV4 = "setIpv4",
  SET_SSH_KEY = "setSSHKey",
}

export const mutations: MutationTree<AppState> = {
  [MutationApp.SET_CURRENT_REGION](state, payload) {
    state.instances.currentRegion = payload;
  },
  [MutationApp.SET_CURRENT_PLAN](state, payload) {
    state.instances.currentPlan = payload;
  },
  [MutationApp.SET_CURRENT_OS](state, payload) {
    state.instances.currentOS = payload;
  },
  [MutationApp.SET_HOST_NAME](state, payload) {
    state.instances.hostName = payload;
  },
  [MutationApp.SET_QUANTITY](state, payload) {
    state.instances.quantity = payload;
  },
  [MutationApp.SET_IPV4](state, payload) {
    state.instances.ipv4 = payload;
  },
  [MutationApp.SET_SSH_KEY](state, payload) {
    state.instances.sshList = payload;
  },
};

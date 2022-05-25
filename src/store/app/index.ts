import { Module } from "vuex";
import { AppState } from "./types";
import { mutations } from "./mutations";

const state: AppState = {
  instances: {
    currentRegion: null,
    currentPlan: null,
    currentOS: null,
    sshList: null,
    hostName: "",
    ipv4: null,
    quantity: 1,
  },
};

export const app: Module<AppState, any> = {
  state,
  mutations,
};

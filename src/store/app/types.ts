export interface AppState {
  instances: {
    currentRegion: Object | null;
    currentPlan: Object | null;
    currentOS: Object | null;
    sshList: Object | null;
    hostName: string | null;
    ipv4: boolean | null;
    quantity: number | null;
  };
}

import { Configuration, PlansApi } from "@/api";

export const conf = new Configuration({
  basePath: process.env.VUE_APP_API,
});

const plans = new PlansApi(conf);

export { plans };

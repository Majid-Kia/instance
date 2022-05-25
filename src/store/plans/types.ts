import { PlanSchema } from "@/api";

export interface PlansState {
  all: PlanSchema[];
  loading: boolean;
}

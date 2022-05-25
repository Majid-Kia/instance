export interface ToastsState {
  show: boolean;
  color: "warning" | "error";
  text: string;
  timeout: number | 4000;
}

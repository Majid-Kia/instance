import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#f1f9fe",
        primary: "#2f3857",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        success: "#00CD82",
        error: "#b71c1c",
      },
    },
  },
});

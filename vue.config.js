const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/instance/",
  transpileDependencies: ["vuetify"],
});

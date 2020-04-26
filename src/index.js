import VueHexagonProgress from "./vue-hexagon-progress.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueHexagonProgress", VueHexagonProgress);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueHexagonProgress.install = install;

export default VueHexagonProgress;

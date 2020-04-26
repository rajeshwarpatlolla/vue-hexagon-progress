import VueHexagon from "./vue-hexagon.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueHexagon", VueHexagon);
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

VueHexagon.install = install;

export default VueHexagon;

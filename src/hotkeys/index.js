import { bindEvent, unbindEvent } from "./main";

const directive = (alias = {}) => ({
  bind: (el, binding) => bindEvent(el, binding, alias),
  componentUpdated(el, binding) {
    if (binding.value !== binding.oldValue) {
      unbindEvent(el);

      bindEvent(el, binding, alias);
    }
  },
  unbind: (el, binding) => unbindEvent(el, binding)
});

const plugin = {
  install(Vue, options = {}) {
    const { name, alias } = { name: "hotkeys", alias: {}, ...options };

    Vue.directive(name, directive(alias));
  },
  directive
};

export default plugin;

if (typeof window !== `undefined` && window.Vue) {
  window.Vue.use(plugin);
}

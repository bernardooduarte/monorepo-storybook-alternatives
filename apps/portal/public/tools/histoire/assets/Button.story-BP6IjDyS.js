import { ap as openBlock, aq as createElementBlock, ar as renderSlot, as as normalizeClass, at as defineComponent, au as resolveComponent, av as createBlock, aw as withCtx, ax as createVNode, ay as createTextVNode } from "./vendor-fM6oQU9V.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    variant: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass(["btn", $props.variant ?? "primary"])
    },
    [
      renderSlot(_ctx.$slots, "default", {}, void 0)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "../../packages/ui-vue/src/components/Button.vue";
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3e5f2d88"], ["__file", "C:/Instaladores/monorepo-storybook-alternatives/packages/ui-vue/src/components/Button.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get Button() {
      return Button;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Button" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], null, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createTextVNode(
                "Click me",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Instaladores/monorepo-storybook-alternatives/apps/histoire-vue/src/Button.story.vue"]]);
export {
  Button_story as default
};

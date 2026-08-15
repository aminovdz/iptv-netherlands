globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro } from './astro/server_CBvyUju7.mjs';
import { g as $$ } from './FloatingWhatsApp_7f_lhg-5.mjs';

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$ArrowLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowLeft;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-left", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m12 19-7-7 7-7"></path> <path d="M19 12H5"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/ArrowLeft.astro", void 0);

export { $$ArrowLeft as $ };

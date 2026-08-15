globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro } from './astro/server_CBvyUju7.mjs';
import { g as $$ } from './FloatingWhatsApp_7f_lhg-5.mjs';

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$AlertCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AlertCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-alert", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <line x1="12" x2="12" y1="8" y2="12"></line> <line x1="12" x2="12.01" y1="16" y2="16"></line> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/AlertCircle.astro", void 0);

export { $$AlertCircle as $ };

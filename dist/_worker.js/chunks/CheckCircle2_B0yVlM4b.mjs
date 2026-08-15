globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from './astro/server_CBvyUju7.mjs';
import { g as $$ } from './FloatingWhatsApp_7f_lhg-5.mjs';

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$CheckCircle2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CheckCircle2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="m9 12 2 2 4-4"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/CheckCircle2.astro", void 0);

export { $$CheckCircle2 as $ };

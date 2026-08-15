globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from './astro/server_CBvyUju7.mjs';
import { g as $$ } from './FloatingWhatsApp_7f_lhg-5.mjs';

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$Share2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Share2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "share-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="18" cy="5" r="3"></circle> <circle cx="6" cy="12" r="3"></circle> <circle cx="18" cy="19" r="3"></circle> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Share2.astro", void 0);

export { $$Share2 as $ };

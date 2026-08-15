globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from './astro/server_CBvyUju7.mjs';
import { g as $$ } from './FloatingWhatsApp_7f_lhg-5.mjs';

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$Clock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clock;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "clock", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 6v6l4 2"></path> <circle cx="12" cy="12" r="10"></circle> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Clock.astro", void 0);

export { $$Clock as $ };

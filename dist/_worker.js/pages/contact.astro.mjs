globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CBvyUju7.mjs';
import { $ as $$Layout, a as $$StickyHeader, d as $$FloatingWhatsApp, e as $$Footer } from '../chunks/FloatingWhatsApp_7f_lhg-5.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_CHfVc5m8.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact & Klantenservice 24/7", "description": "Neem 24/7 contact op met de klantenservice van IPTV Nederlandse via WhatsApp (+1 803 658 2620), Telegram of e-mail voor directe ondersteuning en activaties." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StickyHeader", $$StickyHeader, {})} ${maybeRenderHead()}<main class="pt-20"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </main> ${renderComponent($$result2, "FloatingWhatsApp", $$FloatingWhatsApp, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/contact.astro", void 0);

const $$file = "/Users/Mc/Documents/antigravity/IPTV netherlands/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

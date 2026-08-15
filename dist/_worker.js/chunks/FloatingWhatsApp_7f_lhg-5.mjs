globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, k as renderSlot, l as renderHead, u as unescapeHTML, r as renderComponent, m as maybeRenderHead, n as spreadAttributes } from './astro/server_CBvyUju7.mjs';
/* empty css                          */

const $$Astro$a = createAstro("https://iptvnederlandse.store");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title,
    description,
    image = "/og-image.webp",
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://iptvnederlandse.store"),
    type = "website"
  } = Astro2.props;
  const formattedTitle = title.includes("IPTV Nederlandse") ? title : `${title} | IPTV Nederlandse`;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#533483"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${formattedTitle}</title><meta name="title"${addAttribute(formattedTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name" content="IPTV Nederlandse"><meta property="og:title"${addAttribute(formattedTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.site || "https://iptvnederlandse.store"), "content")}><meta property="og:locale" content="nl_NL"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(formattedTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.site || "https://iptvnederlandse.store"), "content")}><!-- Preconnect to external resources if needed --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/components/BaseHead.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b;
const $$Astro$9 = createAstro("https://iptvnederlandse.store");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    image = "/og-image.webp",
    type = "website",
    schema
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://iptvnederlandse.store");
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://iptvnederlandse.store/#organization",
    "name": "IPTV Nederlandse",
    "url": "https://iptvnederlandse.store",
    "logo": "https://iptvnederlandse.store/favicon.svg",
    "description": "Premium IPTV met abonnement in Nederland. 4K/FHD streaming zonder haperingen met instant activatie en 24/7 ondersteuning.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+18036582620",
        "contactType": "customer service",
        "availableLanguage": ["Dutch", "English"],
        "url": "https://wa.me/18036582620"
      },
      {
        "@type": "ContactPoint",
        "email": "contact@iptvnederlandse.store",
        "contactType": "sales",
        "availableLanguage": ["Dutch", "English"]
      },
      {
        "@type": "ContactPoint",
        "email": "support@castvera.com",
        "contactType": "technical support",
        "availableLanguage": ["Dutch", "English"]
      }
    ],
    "sameAs": [
      "https://whatsapp.com/channel/0029VayVaLpD8SE3bf8wMY3v",
      "https://t.me/castvera_com"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://iptvnederlandse.store/#website",
    "url": "https://iptvnederlandse.store",
    "name": "IPTV Nederlandse",
    "description": "Beste IPTV met abonnement in Nederland - Direct IPTV Kopen",
    "publisher": {
      "@id": "https://iptvnederlandse.store/#organization"
    },
    "inLanguage": "nl-NL"
  };
  return renderTemplate(_b || (_b = __template$1(['<html lang="nl" class="scroll-smooth"> <head>', '<!-- Base Organization & Website Schema --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script><!-- Specific Page Schema if provided -->", "", `</head> <body class="bg-[#0a0a0f] text-[#f0f0f5] antialiased selection:bg-[#7c4ec2] selection:text-white min-h-screen flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"> `, " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, "canonicalURL": canonicalURL, "type": type }), unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(websiteSchema)), schema && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro("https://iptvnederlandse.store");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$7 = createAstro("https://iptvnederlandse.store");
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/ArrowRight.astro", void 0);

const $$Astro$6 = createAstro("https://iptvnederlandse.store");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$Astro$5 = createAstro("https://iptvnederlandse.store");
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Astro$4 = createAstro("https://iptvnederlandse.store");
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "menu", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 5h16"></path> <path d="M4 12h16"></path> <path d="M4 19h16"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Menu.astro", void 0);

const $$Astro$3 = createAstro("https://iptvnederlandse.store");
const $$MessageCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MessageCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-circle", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/MessageCircle.astro", void 0);

const $$Astro$2 = createAstro("https://iptvnederlandse.store");
const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "send", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Send.astro", void 0);

const $$Astro$1 = createAstro("https://iptvnederlandse.store");
const $$Tv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tv;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "tv", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m17 2-5 5-5-5"></path> <rect width="20" height="15" x="2" y="7" rx="2"></rect> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/Tv.astro", void 0);

const $$Astro = createAstro("https://iptvnederlandse.store");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/node_modules/lucide-astro/dist/X.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-20"> <!-- Brand Logo --> <a href="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#7c4ec2] rounded-lg p-1" aria-label="IPTV Nederlandse Homepage"> <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7c4ec2] to-[#e94560] p-0.5 flex items-center justify-center shadow-lg shadow-[#7c4ec2]/20 group-hover:scale-105 transition-transform duration-300"> <div class="w-full h-full bg-[#0a0a0f] rounded-[10px] flex items-center justify-center"> ', ' </div> </div> <div class="flex flex-col"> <span class="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">\nIPTV <span class="text-[#e94560]">Nederlandse</span> </span> <span class="text-[10px] font-semibold tracking-wider text-[#38bdf8] uppercase">#1 Premium Stream Hub</span> </div> </a> <!-- Desktop Navigation Links --> <nav class="hidden md:flex items-center gap-8" aria-label="Hoofdnavigatie"> <a href="/#pricing" class="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-[#e94560]">\nPrijzen\n</a> <a href="/#features" class="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-[#e94560]">\nVoordelen\n</a> <a href="/#process" class="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-[#e94560]">\nHoe Het Werkt\n</a> <a href="/#devices" class="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-[#e94560]">\nApparaten\n</a> <a href="/guides" class="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-[#e94560]">\nGidsen & Tips\n</a> <a href="/referral" class="text-sm font-medium text-[#38bdf8] hover:text-[#7dd3fc] transition-colors duration-200 focus:outline-none">\nReferral Bonus\n</a> <a href="/contact" class="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-[#e94560]">\nContact\n</a> </nav> <!-- Header CTA Action Button --> <div class="hidden lg:flex items-center gap-4"> <a href="/#pricing" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-bold text-xs uppercase tracking-wider group focus:outline-none focus:ring-2 focus:ring-[#e94560]" aria-label="Ga direct naar prijzen en activeer abonnement"> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7c4ec2] via-[#e94560] to-[#38bdf8] group-hover:scale-105 transition-transform duration-300"></span> <span class="relative px-5 py-2.5 transition-all ease-in duration-200 bg-[#0a0a0f] rounded-full group-hover:bg-opacity-0 text-white flex items-center gap-2">\nDirect Activeren\n', ' </span> </a> </div> <!-- Mobile Hamburger Button --> <div class="flex md:hidden"> <button id="mobile-menu-btn" type="button" class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#7c4ec2]" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open hoofdmenu"> ', " ", ' </button> </div> </div> </div> <!-- Mobile Drawer Menu --> <div id="mobile-menu" class="hidden md:hidden bg-[#0a0a0f]/95 border-b border-white/10 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-3"> <a href="/#pricing" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5">\nPrijzen & Pakketten\n</a> <a href="/#features" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5">\nWaarom Ons Kiezen\n</a> <a href="/#process" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5">\nHoe Het Werkt\n</a> <a href="/#devices" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5">\nOndersteunde Apparaten\n</a> <a href="/guides" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5">\nGidsen & Tips\n</a> <a href="/referral" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-[#38bdf8] hover:bg-white/5">\nReferral Beloningen\n</a> <a href="/contact" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5">\nContact & Support\n</a> <div class="pt-4 border-t border-white/10 flex flex-col gap-3"> <a href="/#pricing" class="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#7c4ec2] to-[#e94560] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#7c4ec2]/30">\nDirect IPTV Kopen & Activeren\n', " </a> </div> </div> </header> <script>\n  const menuBtn = document.getElementById('mobile-menu-btn');\n  const mobileMenu = document.getElementById('mobile-menu');\n  const iconOpen = document.getElementById('menu-icon-open');\n  const iconClose = document.getElementById('menu-icon-close');\n\n  if (menuBtn && mobileMenu) {\n    menuBtn.addEventListener('click', () => {\n      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';\n      menuBtn.setAttribute('aria-expanded', String(!isExpanded));\n      mobileMenu.classList.toggle('hidden');\n      iconOpen?.classList.toggle('hidden');\n      iconClose?.classList.toggle('hidden');\n    });\n\n    // Close menu when clicking on any link inside\n    mobileMenu.querySelectorAll('a').forEach(link => {\n      link.addEventListener('click', () => {\n        mobileMenu.classList.add('hidden');\n        menuBtn.setAttribute('aria-expanded', 'false');\n        iconOpen?.classList.remove('hidden');\n        iconClose?.classList.add('hidden');\n      });\n    });\n  }\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Tv", $$Tv, { "class": "w-6 h-6 text-[#d1b3ff] group-hover:text-[#e94560] transition-colors duration-300" }), renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-4 h-4 text-[#e94560] group-hover:text-white group-hover:translate-x-1 transition-all duration-200" }), renderComponent($$result, "Menu", $$Menu, { "id": "menu-icon-open", "class": "w-6 h-6 block" }), renderComponent($$result, "X", $$X, { "id": "menu-icon-close", "class": "w-6 h-6 hidden" }), renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-4 h-4" }));
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/components/StickyHeader.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const cities = [
    { name: "Amsterdam", slug: "amsterdam" },
    { name: "Rotterdam", slug: "rotterdam" },
    { name: "Den Haag", slug: "den-haag" },
    { name: "Utrecht", slug: "utrecht" },
    { name: "Eindhoven", slug: "eindhoven" },
    { name: "Groningen", slug: "groningen" },
    { name: "Tilburg", slug: "tilburg" },
    { name: "Almere", slug: "almere" },
    { name: "Breda", slug: "breda" },
    { name: "Nijmegen", slug: "nijmegen" }
  ];
  const comparisons = [
    { name: "IPTV Nederlandse vs IPTV Koning", path: "/compare/iptv-nederlandse-vs-iptv-koning" },
    { name: "IPTV Nederlandse vs IPTV Totaal Kopen", path: "/compare/iptv-nederlandse-vs-iptvtotaalkopen" },
    { name: "IPTV Nederlandse vs Koop IPTV", path: "/compare/iptv-nederlandse-vs-koop-iptv" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#07070b] border-t border-white/10 text-gray-400 text-sm relative overflow-hidden" role="contentinfo"> <!-- Ambient background glow --> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#7c4ec2]/5 rounded-full blur-3xl pointer-events-none"></div> <!-- Main Footer Content --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16"> <!-- Col 1: Brand & Bio --> <div class="lg:col-span-2 space-y-5"> <a href="/" class="flex items-center gap-3 group focus:outline-none" aria-label="IPTV Nederlandse Startpagina"> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c4ec2] to-[#e94560] p-0.5 flex items-center justify-center shadow-lg shadow-[#7c4ec2]/20"> <div class="w-full h-full bg-[#0a0a0f] rounded-[10px] flex items-center justify-center"> ${renderComponent($$result, "Tv", $$Tv, { "class": "w-5 h-5 text-[#d1b3ff]" })} </div> </div> <span class="text-xl font-extrabold text-white tracking-tight">
IPTV <span class="text-[#e94560]">Nederlandse</span> </span> </a> <p class="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
Dé toonaangevende specialist voor <strong>IPTV met abonnement</strong> in Nederland en België. Ervaar ultieme stabiliteit met onze anti-freeze servers, 4K beeldkwaliteit en 24/7 directe ondersteuning.
</p> <!-- Official Support Channels --> <div class="space-y-2.5 pt-2 text-xs"> <div class="flex items-center gap-2 text-gray-300"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-4 h-4 text-[#38bdf8] shrink-0" })} <span>Verkoop: <a href="mailto:contact@iptvnederlandse.store" class="hover:text-white transition-colors">contact@iptvnederlandse.store</a></span> </div> <div class="flex items-center gap-2 text-gray-300"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-4 h-4 text-[#38bdf8] shrink-0" })} <span>Support: <a href="mailto:support@castvera.com" class="hover:text-white transition-colors">support@castvera.com</a></span> </div> <div class="flex items-center gap-2 text-gray-300"> ${renderComponent($$result, "MessageCircle", $$MessageCircle, { "class": "w-4 h-4 text-emerald-400 shrink-0" })} <span>WhatsApp: <a href="https://wa.me/18036582620" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">+1 (803) 658-2620</a></span> </div> </div> <!-- Social Channels Buttons --> <div class="flex items-center gap-3 pt-3"> <a href="https://whatsapp.com/channel/0029VayVaLpD8SE3bf8wMY3v" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 transition-all flex items-center gap-1.5" aria-label="Volg ons WhatsApp Kanaal"> ${renderComponent($$result, "MessageCircle", $$MessageCircle, { "class": "w-3.5 h-3.5" })}
WhatsApp Kanaal
</a> <a href="https://t.me/castvera_com" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-sky-950/50 border border-sky-500/30 text-sky-300 text-xs font-semibold hover:bg-sky-900/60 transition-all flex items-center gap-1.5" aria-label="Word lid van ons Telegram Kanaal"> ${renderComponent($$result, "Send", $$Send, { "class": "w-3.5 h-3.5" })}
Telegram Kanaal
</a> </div> </div> <!-- Col 2: Navigation & Product --> <div class="space-y-4"> <span class="text-xs font-bold text-white uppercase tracking-wider block">Navigatie</span> <ul class="space-y-2.5 text-xs"> <li><a href="/#pricing" class="hover:text-white transition-colors">Prijzen & Pakketten</a></li> <li><a href="/#features" class="hover:text-white transition-colors">Anti-Freeze Voordelen</a></li> <li><a href="/#process" class="hover:text-white transition-colors">Hoe Het Werkt (5 Min)</a></li> <li><a href="/#devices" class="hover:text-white transition-colors">Ondersteunde Apparaten</a></li> <li><a href="/guides" class="hover:text-white transition-colors">Kennisbank & Gidsen</a></li> <li><a href="/referral" class="hover:text-[#38bdf8] font-semibold transition-colors">Referral Programma (Verdien Maanden)</a></li> <li><a href="/contact" class="hover:text-white transition-colors">Klantenservice</a></li> </ul> </div> <!-- Col 3: Local SEO Dutch Cities --> <div class="space-y-4"> <span class="text-xs font-bold text-white uppercase tracking-wider block flex items-center gap-1.5"> ${renderComponent($$result, "MapPin", $$MapPin, { "class": "w-3.5 h-3.5 text-[#e94560]" })}
Lokale Dekking
</span> <ul class="grid grid-cols-2 gap-x-2 gap-y-2 text-xs"> ${cities.map((city) => renderTemplate`<li> <a${addAttribute(`/locations/${city.slug}`, "href")} class="hover:text-white transition-colors flex items-center gap-1"> <span>•</span> <span>${city.name}</span> </a> </li>`)} </ul> </div> <!-- Col 4: Comparisons & Legal --> <div class="space-y-4"> <span class="text-xs font-bold text-white uppercase tracking-wider block">Vergelijkingen & Info</span> <ul class="space-y-2 text-xs"> ${comparisons.map((comp) => renderTemplate`<li> <a${addAttribute(comp.path, "href")} class="hover:text-white transition-colors"> ${comp.name} </a> </li>`)} </ul> <span class="text-xs font-bold text-white uppercase tracking-wider block pt-3">Juridisch & Beleid</span> <ul class="space-y-2 text-xs"> <li><a href="/privacy" class="hover:text-white transition-colors">Privacybeleid</a></li> <li><a href="/terms" class="hover:text-white transition-colors">Algemene Voorwaarden</a></li> <li> <a href="/refund" class="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"> <span>Retourbeleid (24 Uur)</span> </a> </li> <li><a href="/dmca" class="hover:text-white transition-colors">DMCA Beleid</a></li> <li><a href="/disclaimer" class="hover:text-white transition-colors">Disclaimer</a></li> </ul> </div> </div> <!-- National Coverage Interactive Box (Nederland & Vlaanderen) --> <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0"> ${renderComponent($$result, "MapPin", $$MapPin, { "class": "w-5 h-5 text-emerald-400" })} </div> <div> <span class="font-bold text-white block text-sm">Landelijke Dekking Nederland & België</span> <span>Geoptimaliseerde glasvezel- en DSL-routes voor Ziggo, KPN, Odido, Delta en Proximus.</span> </div> </div> <!-- Payment Icons Badges --> <div class="flex flex-wrap items-center justify-center gap-2"> <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-xs">
🇧🇪 Bancontact
</span> <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-xs">
💳 Visa / Mastercard
</span> <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#38bdf8] font-bold text-xs">
₿ Crypto (BTC / USDT)
</span> <span class="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs">
🔒 SSL Beveiligd
</span> </div> </div> <!-- Bottom Bar: Copyright & Compliance Notice --> <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center md:text-left"> <p>
© ${(/* @__PURE__ */ new Date()).getFullYear()} <strong>IPTV Nederlandse</strong> (iptvnederlandse.store). Alle rechten voorbehouden.
</p> <p class="max-w-md text-[11px] text-gray-500">
Disclaimer: Wij hosten of zenden zelf geen auteursrechtelijk beschermde streams uit. Deze dienst levert uitsluitend technische gateway- en middleware-toegangsfaciliteiten voor particuliere mediaspelers.
</p> </div> </div> </footer>`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/components/Footer.astro", void 0);

const $$FloatingWhatsApp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-6 right-6 z-50 flex items-center gap-3"> <!-- Interactive Chat Prompt Tooltip --> <div id="whatsapp-tooltip" class="hidden md:flex items-center gap-2 py-2 px-3.5 rounded-full glass-card-glow border border-emerald-500/30 text-xs font-semibold text-white shadow-xl animate-fade-in"> <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> <span>Direct hulp nodig? <strong>Chat met ons</strong></span> </div> <!-- WhatsApp Action Floating Button --> <a href="https://wa.me/18036582620?text=Hallo%20IPTV%20Nederlandse,%20ik%20heb%20een%20vraag%20over%20een%20IPTV%20met%20abonnement." target="_blank" rel="noopener noreferrer" class="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-900/50 hover:scale-110 active:scale-95 transition-all duration-300 relative group focus:outline-none focus:ring-4 focus:ring-emerald-500/50" aria-label="Start direct een chatgesprek op WhatsApp"> <!-- Ripple animation ring --> <span class="absolute inset-0 rounded-full bg-emerald-400 opacity-20 group-hover:animate-ping pointer-events-none"></span> <!-- WhatsApp Lucide Icon --> ${renderComponent($$result, "MessageCircle", $$MessageCircle, { "class": "w-7 h-7 fill-current" })} <!-- Online badge dot --> <span class="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-[#0a0a0f] rounded-full"></span> </a> </div>`;
}, "/Users/Mc/Documents/antigravity/IPTV netherlands/src/components/FloatingWhatsApp.astro", void 0);

export { $$Layout as $, $$StickyHeader as a, $$Tv as b, $$MessageCircle as c, $$FloatingWhatsApp as d, $$Footer as e, $$X as f, $$ as g, $$Mail as h, $$ArrowRight as i, $$MapPin as j, $$Send as k };

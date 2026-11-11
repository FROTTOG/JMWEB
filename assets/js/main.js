/* JMWEB.cz · v6 – jazyk, navigace, drobné interakce. Bez závislostí. */
(function () {
  'use strict';

  var d = document;
  var root = d.documentElement;
  var MAIL = 'janminarikcz@icloud.com';
  var STORAGE_KEY = 'jmweb-lang';

  function $(sel, ctx) { return (ctx || d).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || d).querySelectorAll(sel)); }

  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ------------------------------------------------------------------ *
   * 1) Překlady. Čeština je přímo v HTML, angličtina tady.
   * ------------------------------------------------------------------ */
  var EN = {
    'a11y.skip': 'Skip to content',
    'a11y.brand': 'JMWEB Jan Minařík – back to top',
    'a11y.nav': 'Main navigation',
    'a11y.lang': 'Language',
    'a11y.menuOpen': 'Open menu',
    'a11y.newTab': '(opens in a new tab)',

    'nav.services': 'Services',
    'nav.kavka': 'KAVKA e-shop',
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a free quote',

    'hero.status': 'Taking on new projects',
    'hero.t1': 'Websites',
    'hero.t2': '& e-shops',
    'hero.t3': 'built to fit.',
    'hero.lead': 'I design and build websites that look great, load fast and bring in customers. No templates – everything is made to measure for your goals.',
    'hero.cta1': 'Request a free quote',
    'hero.cta2': 'See my work',
    'hero.figTitle': 'Schematic drawing of a website on a desktop and on a phone',
    'hero.figUrl': 'yourcompany.com',
    'hero.figMobile': 'MOBILE – 390 px',
    'hero.screen': 'Your screen',
    'hero.fit': ' – a perfect fit',

    'legend.k1': 'Project',
    'legend.v1': 'your new website',
    'legend.k2': 'Template',
    'legend.v2': 'none',
    'legend.k3': 'Displays',
    'legend.v3': 'phone · tablet · desktop',
    'legend.k4': 'Scale',
    'legend.v4': 'made to measure',

    'principles.title': 'What I build on',
    'principles.1.t': 'Made to measure, no templates',
    'principles.1.p': 'I design every website from scratch around your goals and your brand.',
    'principles.2.t': 'Fast, clean code',
    'principles.2.p': 'A website that loads quickly and is easy to use.',
    'principles.3.t': 'Perfect on mobile too',
    'principles.3.p': 'I fine-tune the layout for phones, tablets and large monitors.',
    'principles.4.t': 'A clear price up front',
    'principles.4.p': 'A transparent quote with no hidden catches – free and with no obligation.',

    'services.title': 'What I can build for you.',
    'services.intro': 'From a simple company website to an online shop with its own admin. Always from the first design through development to launch and ongoing care.',
    'services.1.t': 'Custom websites',
    'services.1.p': 'Modern, fast and clear websites without generic templates – from a simple business-card site to a larger multi-page presentation.',
    'services.1.l1': 'Design tailored to your brand',
    'services.1.l2': 'Fast, clean code',
    'services.1.l3': 'Perfect display on mobile',
    'services.1.l4': 'Admin for your own edits (on request)',
    'services.1.l5': 'Basic SEO and analytics set-up',
    'services.1.cta': 'Request a website',
    'services.2.t': 'KAVKA e-shop',
    'services.2.p': 'My own e-shop solution with an admin, stock, carriers, coupons, invoices and QR payments. No dependence on someone else’s template.',
    'services.2.l1': 'Custom admin and editor',
    'services.2.l2': 'Stock and a smart cart',
    'services.2.l3': 'Zásilkovna and Balíkovna via API',
    'services.2.l4': 'Coupons and discount codes',
    'services.2.l5': 'Invoices, QR payments and accounting export',
    'services.2.cta': 'What KAVKA can do',
    'services.3.t': 'Optimisation & maintenance',
    'services.3.p': 'I’ll speed up your existing website and improve it so it works better and brings in more visitors. And I’ll keep looking after it.',
    'services.3.l1': 'Faster loading',
    'services.3.l2': 'Edits and improvements to your current site',
    'services.3.l3': 'Regular maintenance',
    'services.3.l4': 'New content as needed',
    'services.3.cta': 'Request improvements',

    'kavka.rail': 'E-shop',
    'kavka.kicker': 'My own e-shop solution',
    'kavka.lead': 'An online shop that adapts to your business – not the other way round. No dependence on someone else’s template, and features you will actually use.',
    'kavka.cta': 'I want my own e-shop',
    'kavka.flowTitle': 'The journey of an order',
    'kavka.flow.1.t': 'Cart',
    'kavka.flow.1.p': 'coupon or discount code',
    'kavka.flow.2.t': 'Delivery',
    'kavka.flow.3.t': 'Payment',
    'kavka.flow.3.p': 'by QR code',
    'kavka.flow.4.t': 'Invoice',
    'kavka.flow.4.p': 'issued automatically',
    'kavka.flow.5.t': 'Accounting',
    'kavka.flow.5.p': 'export, no retyping',
    'kavka.f1.t': 'Custom admin & editor',
    'kavka.f1.p': 'A clear admin system with its own editor for content, products and pages – no dependence on third-party templates.',
    'kavka.f2.t': 'Stock & cart',
    'kavka.f2.p': 'Real-time stock tracking, product variants and a fast cart with a clear checkout.',
    'kavka.f3.t': 'Zásilkovna & Balíkovna via API',
    'kavka.f3.p': 'Carriers connected via API, with pick-up point selection right in the cart.',
    'kavka.f4.t': 'Coupons & discount codes',
    'kavka.f4.p': 'Unlimited coupons and discount codes – percentage or fixed, with limits on validity and number of uses.',
    'kavka.f5.t': 'Accounting export',
    'kavka.f5.p': 'Export of orders and invoices for accounting software – easy hand-over to your accountant with no manual retyping.',
    'kavka.f6.t': 'Automatic invoices & QR payment',
    'kavka.f6.p': 'An invoice is generated automatically for every order, including a QR payment code – the customer can pay straight away.',

    'work.title': 'Websites for real businesses.',
    'work.intro': 'No concepts left in a drawer. These are websites that serve real businesses and their customers – plus one I’m working on right now.',
    'work.1.type': 'Company website · Construction',
    'work.1.desc': 'A modern presentation of a construction company with a focus on clear services, showcased projects and a contact form.',
    'work.2.type': 'One-page · Real estate',
    'work.2.desc': 'An advanced one-page website with an integrated catalogue and a well-thought-out contact form.',
    'work.3.type': 'Multi-page website · Construction',
    'work.3.desc': 'A professional multi-page website for construction work. It includes a references section and an interactive map showing the company’s seat.',
    'work.4.type': 'Catalogue · Handmade',
    'work.4.desc': 'A multi-page catalogue website presenting the custom production of original home decorations.',
    'work.5.type': 'Company website · Construction',
    'work.5.desc': 'A modern web presentation for a construction company. The project is currently in development.',
    'work.next.t': 'Your project',
    'work.next.type': 'The next one could be yours',
    'work.next.desc': 'Let’s create something that works and is a pleasure to use.',
    'work.next.cta': 'Write to me',

    'tag.multi': 'Multi-page website',
    'tag.portfolio': 'Projects',
    'tag.form': 'Form',
    'tag.one': 'One-page',
    'tag.catalog': 'Catalogue',
    'tag.contactForm': 'Contact form',
    'tag.refs': 'References',
    'tag.map': 'Interactive map',
    'tag.products': 'Product catalogue',
    'tag.inquiry': 'Enquiry form',
    'tag.wip': 'In development',
    'tag.corp': 'Company website',

    'process.title': 'How we’ll work together.',
    'process.intro': 'I value transparency and smooth communication. You don’t need to worry about your project – I’ll guide you through the whole process.',
    'process.1.t': 'Consultation & quote',
    'process.1.p': 'Together we define what your website needs. Then I put together a transparent quote with no hidden catches.',
    'process.2.t': 'Design',
    'process.2.p': 'Before I write the first line of code, I prepare an interactive visual design that matches your brand identity and goals.',
    'process.3.t': 'Development',
    'process.3.p': 'I turn the design into fast, clean code, set up the admin and make sure everything looks perfect on mobile too.',
    'process.4.t': 'Testing & launch',
    'process.4.p': 'We test the website thoroughly, connect analytics, take care of basic SEO and send it out into the world.',
    'process.after.t': 'And after launch?',
    'process.after.p': 'If you wish, I stay close by – for maintenance, changes and new content.',

    'faq.title': 'What people ask.',
    'faq.intro1': 'Didn’t find your answer here?',
    'faq.intro2': 'Write to me',
    'faq.intro3': ' – I’ll be happy to help.',
    'faq.1.q': 'How much does a website cost?',
    'faq.1.a': 'Every project is different, so I prepare the price to measure. After a short initial consultation you’ll get a specific quote from me – free and with no obligation.',
    'faq.2.q': 'How long does it take to build a website?',
    'faq.2.a': 'It depends on the complexity. A simple business-card website can be ready within a week. A larger multi-page website or an e-shop usually takes 2 to 4 weeks, depending on the scope and how ready your materials are.',
    'faq.3.q': 'What will you need from me?',
    'faq.3.a': 'At the start, a brief description of what you do and what the website should achieve is enough. If you have a logo, photos and texts, great. If not, I’ll help you find a suitable solution – such as copywriting or a logo touch-up.',
    'faq.4.q': 'Will I be able to edit the website myself?',
    'faq.4.a': 'Yes, if you wish. I’ll prepare a clear admin and show you how to change texts, photos or products – no programming knowledge needed.',
    'faq.5.q': 'What can the KAVKA e-shop do?',
    'faq.5.a': 'KAVKA is my own e-shop solution. It includes a custom admin system and editor, stock tracking, a cart and checkout, the Zásilkovna and Balíkovna carriers connected via API, coupons and discount codes, order export for accounting and automatic invoice generation including a QR payment code.',

    'contact.t1': 'Got an idea?',
    'contact.t2': 'Let’s build',
    'contact.t3': 'it together.',
    'contact.lead': 'Write me a few sentences about your project. I’ll get back to you and we’ll agree on the next step – the quote is free and with no obligation.',
    'contact.s1.k': 'Quote',
    'contact.s1.v': 'free, with no obligation',
    'contact.s2.k': 'Simple website',
    'contact.s2.v': 'ready in as little as a week',
    'contact.s3.k': 'Larger website or e-shop',
    'contact.s3.v': 'usually 2–4 weeks',
    'contact.s4.k': 'Area',
    'contact.s4.v': 'the whole Czech Republic',
    'contact.mailLabel': 'Write to me at',
    'contact.copy': 'Copy e-mail',
    'contact.quickLabel': 'Or start with a subject',
    'contact.q1': 'I want a new website',
    'contact.q2': 'I want a KAVKA e-shop',
    'contact.q3': 'I want to improve my current website',

    'footer.k1': 'Project',
    'footer.k2': 'Author',
    'footer.k3': 'Contents',
    'footer.v3': 'Websites · e-shops · maintenance',
    'footer.k4': 'Scale',
    'footer.k5': 'Version',
    'footer.top': 'Back to top'
  };

  /* Texty, které v HTML nejsou (vznikají až za běhu). */
  var UI = {
    cs: {
      title: 'JMWEB – weby a e-shopy na míru | Jan Minařík',
      description: 'Navrhuji a programuji weby a e-shopy na míru – rychlé, přehledné a perfektní i na mobilu. Žádné šablony. Vlastní e-shopové řešení KAVKA. Nabídka zdarma a nezávazně.',
      menuClose: 'Zavřít menu',
      copied: 'Zkopírováno',
      copiedLong: 'E-mail byl zkopírován do schránky.',
      copyFailed: 'Nepodařilo se zkopírovat',
      subject: {
        web: 'Poptávka: nový web',
        shop: 'Poptávka: e-shop KAVKA',
        care: 'Poptávka: úprava stávajícího webu'
      }
    },
    en: {
      title: 'JMWEB – custom websites & e-shops | Jan Minařík',
      description: 'I design and build custom websites and e-shops – fast, clear and perfect on mobile. No templates. My own KAVKA e-shop solution. Free, no-obligation quote.',
      menuClose: 'Close menu',
      copied: 'Copied',
      copiedLong: 'The e-mail address was copied to the clipboard.',
      copyFailed: 'Copying failed',
      subject: {
        web: 'Enquiry: new website',
        shop: 'Enquiry: KAVKA e-shop',
        care: 'Enquiry: improving an existing website'
      }
    }
  };

  var lang = 'cs';
  var textNodes = $$('[data-i18n]');
  var attrNodes = [];
  var CS = {};

  textNodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in CS)) { CS[key] = el.textContent; }
  });

  $$('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
      var parts = pair.split('=');
      if (parts.length !== 2) { return; }
      var attr = parts[0].trim();
      var key = parts[1].trim();
      if (!(key in CS)) { CS[key] = el.getAttribute(attr) || ''; }
      attrNodes.push({ el: el, attr: attr, key: key });
    });
  });

  function tr(key) {
    if (lang === 'en' && Object.prototype.hasOwnProperty.call(EN, key)) { return EN[key]; }
    return CS[key];
  }

  function ui(key) { return UI[lang][key]; }

  var metaDescription = $('meta[name="description"]');
  var langButtons = $$('.lang-btn');
  var afterLangChange = [];

  function applyLang(next) {
    lang = next === 'en' ? 'en' : 'cs';

    textNodes.forEach(function (el) {
      var value = tr(el.getAttribute('data-i18n'));
      if (typeof value === 'string' && el.textContent !== value) { el.textContent = value; }
    });

    attrNodes.forEach(function (item) {
      var value = tr(item.key);
      if (typeof value === 'string') { item.el.setAttribute(item.attr, value); }
    });

    root.lang = lang;
    d.title = ui('title');
    if (metaDescription) { metaDescription.setAttribute('content', ui('description')); }

    langButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    $$('[data-mail-topic]').forEach(function (a) {
      var subject = ui('subject')[a.getAttribute('data-mail-topic')];
      if (subject) { a.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject); }
    });

    afterLangChange.forEach(function (fn) { fn(); });
  }

  function rememberLang() {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* soukromý režim */ }
    try {
      var url = new URL(location.href);
      if (lang === 'en') { url.searchParams.set('lang', 'en'); } else { url.searchParams.delete('lang'); }
      history.replaceState(history.state, '', url.pathname + url.search + url.hash);
    } catch (e) { /* starší prohlížeč */ }
  }

  function initialLang() {
    try {
      var param = new URLSearchParams(location.search).get('lang');
      if (param === 'en' || param === 'cs') { return param; }
    } catch (e) { /* nic */ }
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'en') { return 'en'; }
    } catch (e) { /* nic */ }
    return 'cs';
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = btn.getAttribute('data-lang');
      if (next === lang) { return; }
      applyLang(next);
      rememberLang();
    });
  });

  /* ------------------------------------------------------------------ *
   * 2) Mobilní menu
   * ------------------------------------------------------------------ */
  var toggle = $('.menu-toggle');
  var nav = $('#nav');
  var pageParts = $$('main, .site-footer');

  function menuIsOpen() { return root.classList.contains('menu-open'); }

  function syncMenuLabel() {
    if (toggle) { toggle.setAttribute('aria-label', menuIsOpen() ? ui('menuClose') : tr('a11y.menuOpen')); }
  }

  function setMenu(open) {
    if (!toggle) { return; }
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    pageParts.forEach(function (el) {
      if (open) { el.setAttribute('inert', ''); } else { el.removeAttribute('inert'); }
    });
    syncMenuLabel();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () { setMenu(!menuIsOpen()); });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) { setMenu(false); }
    });

    var brand = $('.brand');
    if (brand) { brand.addEventListener('click', function () { setMenu(false); }); }

    d.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuIsOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });

    if (window.matchMedia) {
      var desktop = window.matchMedia('(min-width: 70em)');
      var onDesktop = function (event) { if (event.matches) { setMenu(false); } };
      if (desktop.addEventListener) { desktop.addEventListener('change', onDesktop); }
      else if (desktop.addListener) { desktop.addListener(onDesktop); }
    }

    afterLangChange.push(syncMenuLabel);
  }

  /* ------------------------------------------------------------------ *
   * 3) Zvýraznění aktuální sekce v navigaci
   * ------------------------------------------------------------------ */
  var hasIO = 'IntersectionObserver' in window;

  if (hasIO) {
    var navLinks = {};
    $$('.nav-list a[href^="#"]').forEach(function (a) { navLinks[a.getAttribute('href').slice(1)] = a; });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        Object.keys(navLinks).forEach(function (id) { navLinks[id].removeAttribute('aria-current'); });
        var active = navLinks[entry.target.id];
        if (active) { active.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-45% 0px -54% 0px', threshold: 0 });

    $$('main > section[id]').forEach(function (section) { spy.observe(section); });
  }

  /* ------------------------------------------------------------------ *
   * 4) Postupné zobrazování obsahu při posunu
   * ------------------------------------------------------------------ */
  if (hasIO && !reduceMotion) {
    var revealItems = $$('[data-reveal]');

    revealItems.forEach(function (el) {
      var siblings = Array.prototype.filter.call(el.parentNode.children, function (child) {
        return child.hasAttribute('data-reveal');
      });
      var index = siblings.indexOf(el) % 3;
      if (index > 0) { el.style.setProperty('--reveal-delay', (index * 80) + 'ms'); }
    });

    var revealer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });

    root.classList.add('reveal-on');
    revealItems.forEach(function (el) { revealer.observe(el); });
  }

  /* ------------------------------------------------------------------ *
   * 5) Dotazy (rozbalovací odpovědi)
   * ------------------------------------------------------------------ */
  $$('.faq-item').forEach(function (item) {
    var button = $('button', item);
    if (!button) { return; }
    button.addEventListener('click', function () {
      var open = !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
    });
  });

  /* ------------------------------------------------------------------ *
   * 6) „Na míru“: kóta pod nadpisem a pravítko s rozměrem obrazovky
   * ------------------------------------------------------------------ */
  var measure = $('#measure');
  var measureLabel = $('#measure-label');
  var screenSize = $('#screen-size');
  var rulerScale = $('#ruler-scale');

  function updateMeasure() {
    if (!measure || !measureLabel) { return; }
    var width = Math.round(measure.getBoundingClientRect().width);
    if (width > 0) { measureLabel.textContent = width + ' px'; }
  }

  function updateRuler() {
    var width = window.innerWidth || root.clientWidth;
    var height = window.innerHeight || root.clientHeight;
    if (screenSize) { screenSize.textContent = width + ' × ' + height + ' px'; }
    if (!rulerScale) { return; }
    var count = Math.floor((width - 30) / 100);
    if (rulerScale.childElementCount === count) { return; }
    var html = '';
    for (var i = 1; i <= count; i++) { html += '<span style="left:' + (i * 100) + 'px">' + (i * 100) + '</span>'; }
    rulerScale.innerHTML = html;
  }

  var ticking = false;
  function onResize() {
    if (ticking) { return; }
    ticking = true;
    (window.requestAnimationFrame || window.setTimeout)(function () {
      ticking = false;
      updateRuler();
      updateMeasure();
    });
  }

  window.addEventListener('resize', onResize, { passive: true });
  if (measure && 'ResizeObserver' in window) { new ResizeObserver(updateMeasure).observe(measure); }
  if (d.fonts && d.fonts.ready) { d.fonts.ready.then(updateMeasure); }
  afterLangChange.push(updateMeasure);

  /* ------------------------------------------------------------------ *
   * 7) Kopírování e-mailu
   * ------------------------------------------------------------------ */
  var copyButton = $('#copy-mail');
  var copyLabel = $('#copy-mail-label');
  var copyStatus = $('#copy-status');
  var copyTimer;

  function legacyCopy(text) {
    var area = d.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    d.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = d.execCommand('copy'); } catch (e) { ok = false; }
    d.body.removeChild(area);
    return ok;
  }

  function resetCopy() {
    if (!copyButton) { return; }
    clearTimeout(copyTimer);
    copyButton.classList.remove('is-done');
    if (copyLabel) { copyLabel.textContent = tr('contact.copy'); }
    if (copyStatus) { copyStatus.textContent = ''; }
  }

  function copied(ok) {
    copyButton.classList.toggle('is-done', ok);
    if (copyLabel) { copyLabel.textContent = ui(ok ? 'copied' : 'copyFailed'); }
    if (copyStatus) { copyStatus.textContent = ui(ok ? 'copiedLong' : 'copyFailed'); }
    clearTimeout(copyTimer);
    copyTimer = setTimeout(resetCopy, 2400);
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      var text = copyButton.getAttribute('data-mail') || MAIL;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { copied(true); }, function () { copied(legacyCopy(text)); });
      } else {
        copied(legacyCopy(text));
      }
    });
    afterLangChange.push(resetCopy);
  }

  /* ------------------------------------------------------------------ *
   * Start
   * ------------------------------------------------------------------ */
  applyLang(initialLang());
  root.classList.remove('lang-pending');
  updateRuler();
  updateMeasure();

  /* Offline režim – jen na ostrém webu, ne v náhledech a při vývoji. */
  var host = location.hostname;
  var isPreview = host === 'localhost' || host === '127.0.0.1' || /\.(e2b\.app|pages\.dev)$/.test(host);
  if ('serviceWorker' in navigator && location.protocol === 'https:' && !isPreview) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* web funguje i bez něj */ });
    });
  }
})();

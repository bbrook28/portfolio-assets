window.BB_CHROME={"header": "<a class=\"bb-skip\" href=\"#bb-main\">Skip to content</a>\n<header class=\"bb-header\" id=\"bbHeader\">\n  <div class=\"bb-header__inner\">\n    <a class=\"bb-brand\" href=\"/\"><b>Ben Brook</b><span>Level &amp; quest design</span></a>\n    <nav class=\"bb-nav\" aria-label=\"Main\">\n      <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n      <a href=\"/about\" data-path=\"/about\">About</a>\n      <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      <a class=\"bb-nav__res\" href=\"https://bbrook28.github.io/portfolio-assets/resume/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9</a>\n    </nav>\n    <button class=\"bb-burger\" type=\"button\" aria-label=\"Menu\" aria-expanded=\"false\" aria-controls=\"bbMobile\"><span></span><span></span></button>\n    <div class=\"bb-mobile\" id=\"bbMobile\">\n      <nav aria-label=\"Mobile\">\n        <a href=\"/\" data-path=\"/\">Home</a>\n        <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n        <a href=\"/about\" data-path=\"/about\">About</a>\n        <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      </nav>\n      <div class=\"bb-mobile__foot\">\n        <a href=\"https://bbrook28.github.io/portfolio-assets/resume/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io</a>\n        <a href=\"mailto:benbrookgames@gmail.com\">Email</a>\n      </div>\n    </div>\n  </div>\n</header>\n", "footer": "<footer class=\"bb-footer\">\n  <div class=\"bb-container\">\n    <a class=\"bb-footer__mail\" href=\"mailto:benbrookgames@gmail.com\">benbrookgames@gmail.com</a>\n    <div class=\"bb-footer__row\">\n      <span>\u00a9 <span data-bb-year>2026</span> Ben Brook \u00b7 Los Angeles</span>\n      <nav aria-label=\"Footer\">\n        <a href=\"/portfolio-1\">Work</a>\n        <a href=\"/about\">About</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io</a>\n        <a href=\"https://www.instagram.com/theoriginaldiabeto/\" target=\"_blank\" rel=\"noopener\">Instagram</a>\n      </nav>\n    </div>\n    <p class=\"bb-footer__legal\">Design documents, writing and site \u00a9 Ben Brook. Game art, footage and trademarks belong to their studios and publishers and are shown for portfolio purposes.</p>\n  </div>\n</footer>\n"};window.BB_UPDATED="November 2026";
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('bb-js');
  document.addEventListener('click', function (e) {
    var skip = e.target.closest && e.target.closest('.bb-skip');
    if (!skip) return;
    var pg = document.querySelector('.bb-page');
    if (!pg) return;
    e.preventDefault();
    pg.id = pg.id || 'bb-main';
    pg.setAttribute('tabindex', '-1');
    pg.focus({ preventScroll: true });
    pg.scrollIntoView();
  });
  var SELF = document.currentScript && document.currentScript.src;
  var APP_BASE = SELF && /\/app\/bb\.js(\?.*)?$/.test(SELF) ? SELF.replace(/bb\.js(\?.*)?$/, '') : null;
  if (APP_BASE && !window.BB_ASSET_BASE) window.BB_ASSET_BASE = APP_BASE.replace(/app\/$/, '');
  function assetUrl(key) {
    if (!key || /^(https?:)?\/\//.test(key) || key.indexOf('data:') === 0) return key;
    var map = window.BB_ASSETS || {};
    if (map[key]) return map[key];
    return (window.BB_ASSET_BASE || '') + key;
  }
  window.bbAsset = assetUrl;
  function resolveAssets(root) {
    var small = window.matchMedia('(max-width: 760px)').matches;
    root.querySelectorAll('[data-bb-src]').forEach(function (el) {
      var key = (small && el.getAttribute('data-bb-src-m')) || el.getAttribute('data-bb-src');
      if (el.tagName === 'IMG') {
        if (!el.hasAttribute('loading') && !el.closest('.bb-hero, .bb-pcard--feature')) el.setAttribute('loading', 'lazy');
        el.setAttribute('decoding', 'async');
      }
      el.setAttribute('src', assetUrl(key));
      el.removeAttribute('data-bb-src');
    });
    root.querySelectorAll('[data-bb-poster]').forEach(function (el) {
      el.setAttribute('poster', assetUrl(el.getAttribute('data-bb-poster')));
      el.removeAttribute('data-bb-poster');
    });
    root.querySelectorAll('[data-bb-href]').forEach(function (el) {
      el.setAttribute('href', assetUrl(el.getAttribute('data-bb-href')));
      el.removeAttribute('data-bb-href');
    });
  }
  function initHeader() {
    var header = document.querySelector('.bb-header');
    if (!header) return;
    var path = location.pathname.replace(/\/$/, '') || '/';
    header.querySelectorAll('a[data-path]').forEach(function (a) {
      var p = a.getAttribute('data-path');
      var match = p === '/' ? path === '/' : (path === p || path.indexOf(p + '/') === 0 ||
        (p === '/portfolio' && path.indexOf('/projects') === 0));
      if (match) { a.classList.add('is-active'); a.setAttribute('aria-current', 'page'); }
    });
    var burger = header.querySelector('.bb-burger');
    if (burger) {
      var setOpen = function (open) {
        document.documentElement.classList.toggle('bb-menu-open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      };
      burger.addEventListener('click', function () {
        setOpen(!document.documentElement.classList.contains('bb-menu-open'));
      });
      header.querySelectorAll('.bb-mobile a').forEach(function (a) {
        a.addEventListener('click', function () { setOpen(false); });
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
      window.addEventListener('resize', function () { if (window.innerWidth > 860) setOpen(false); });
    }
    var year = document.querySelector('[data-bb-year]');
    if (year) year.textContent = new Date().getFullYear();
  }
  var lb, lbImg, lbCap, lbItems = [], lbIndex = 0, lbReturn = null;
  function buildLightbox() {
    lb = document.createElement('div');
    lb.className = 'bb-lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Image viewer');
    lb.innerHTML = '<img alt=""><div class="bb-lightbox__cap"></div>' +
      '<button class="bb-lightbox__close" aria-label="Close">&times;</button>' +
      '<button class="bb-lightbox__prev" aria-label="Previous image">&#8592;</button>' +
      '<button class="bb-lightbox__next" aria-label="Next image">&#8594;</button>';
    document.body.appendChild(lb);
    lbImg = lb.querySelector('img');
    lbCap = lb.querySelector('.bb-lightbox__cap');
    lb.querySelector('.bb-lightbox__close').addEventListener('click', closeLightbox);
    lb.querySelector('.bb-lightbox__prev').addEventListener('click', function () { showLightbox(lbIndex - 1); });
    lb.querySelector('.bb-lightbox__next').addEventListener('click', function () { showLightbox(lbIndex + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
      if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
    });
    var sx = null;
    lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) showLightbox(lbIndex + (dx < 0 ? 1 : -1));
      sx = null;
    });
  }
  function itemImg(el) { return el.tagName === 'IMG' ? el : el.querySelector('img'); }
  function showLightbox(i) {
    if (!lbItems.length) return;
    lbIndex = (i + lbItems.length) % lbItems.length;
    var el = lbItems[lbIndex], img = itemImg(el);
    lbImg.src = el.getAttribute('data-bb-full') ? assetUrl(el.getAttribute('data-bb-full')) : img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    var fig = el.closest('figure');
    var cap = el.getAttribute('data-bb-caption') || (fig && fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent : img.alt);
    lbCap.textContent = cap || '';
    var multi = lbItems.length > 1;
    lb.querySelector('.bb-lightbox__prev').style.display = multi ? '' : 'none';
    lb.querySelector('.bb-lightbox__next').style.display = multi ? '' : 'none';
  }
  function openLightbox(el) {
    if (!lb) buildLightbox();
    var group = el.getAttribute('data-bb-lightbox') || '';
    lbItems = group
      ? Array.prototype.slice.call(document.querySelectorAll('[data-bb-lightbox="' + group + '"]'))
      : [el];
    lbReturn = document.activeElement;
    showLightbox(lbItems.indexOf(el));
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.bb-lightbox__close').focus();
  }
  function closeLightbox() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lbReturn) lbReturn.focus();
  }
  window.bbOpenLightbox = openLightbox;
  function initLightbox(root) {
    root.querySelectorAll('[data-bb-lightbox]').forEach(function (el) {
      if (!el.hasAttribute('tabindex') && el.tagName !== 'A' && el.tagName !== 'BUTTON') el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.addEventListener('click', function (e) { e.preventDefault(); openLightbox(el); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(el); }
      });
    });
  }
  function initCompare(root) {
    root.querySelectorAll('.bb-compare').forEach(function (c) {
      var input = c.querySelector('input[type=range]');
      if (!input) return;
      var set = function () { c.style.setProperty('--pos', input.value + '%'); };
      input.addEventListener('input', set);
      set();
    });
  }
  function initMore(root) {
    root.querySelectorAll('[data-bb-more]').forEach(function (box) {
      var btn = box.querySelector('.bb-more__toggle'), grid = box.querySelector('.bb-more__grid');
      var label = btn.textContent;
      box.setOpen = function (open) {
        grid.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.textContent = open ? 'Hide these projects' : label;
        box.classList.toggle('is-open', open);
        if (open) grid.querySelectorAll('.bb-reveal').forEach(function (el) { el.classList.add('is-in'); });
      };
      btn.addEventListener('click', function () { box.setOpen(grid.hidden); });
    });
  }
  function initFilter(root) {
    root.querySelectorAll('[data-bb-filter]').forEach(function (bar) {
      var grids = document.querySelectorAll(bar.getAttribute('data-bb-filter'));
      if (!grids.length) return;
      var buttons = bar.querySelectorAll('button[data-filter]');
      var apply = function (f) {
        buttons.forEach(function (b) {
          var on = b.getAttribute('data-filter') === f;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        grids.forEach(function (grid) {
          var shown = 0;
          grid.querySelectorAll('[data-tags]').forEach(function (card) {
            var tags = ' ' + card.getAttribute('data-tags') + ' ';
            var hide = f !== 'all' && tags.indexOf(' ' + f + ' ') === -1;
            card.classList.toggle('is-hidden', hide);
            if (!hide) shown++;
          });
          var more = grid.closest('[data-bb-more]');
          if (more && f !== 'all' && shown && more.setOpen) more.setOpen(true);
        });
      };
      buttons.forEach(function (b) {
        b.addEventListener('click', function () {
          apply(b.getAttribute('data-filter'));
          if (history.replaceState) history.replaceState(null, '', '#' + b.getAttribute('data-filter'));
        });
      });
      var initial = location.hash.slice(1);
      apply(bar.querySelector('button[data-filter="' + initial + '"]') ? initial : 'all');
    });
  }
  function initForms(root) {
    root.querySelectorAll('form[data-bb-ajax]').forEach(function (form) {
      var status = form.querySelector('.bb-form__status');
      form.addEventListener('submit', function (e) {
        if (!window.fetch) return;
        e.preventDefault();
        var btn = form.querySelector('[type=submit]');
        if (btn) btn.disabled = true;
        if (status) status.textContent = 'Sending…';
        fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
          .then(function (r) {
            if (!r.ok) throw new Error(r.status);
            form.reset();
            if (status) status.textContent = 'Thanks. Your message is on its way, and I\'ll reply soon.';
          })
          .catch(function () {
            if (status) status.textContent = 'Something went wrong. Please email me directly instead.';
          })
          .then(function () { if (btn) btn.disabled = false; });
      });
    });
  }
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  function store(key, val) {
    try {
      if (val === undefined) return window.sessionStorage.getItem(key);
      window.sessionStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  function initTabs(root) {
    (root || document).querySelectorAll('.bb-section--tabs').forEach(function (sec) {
      var bar = sec.querySelector('.bb-tabs__bar'), panels = sec.querySelectorAll(':scope > .bb-tab');
      if (!bar || bar.childElementCount) return;
      function show(i, focus) {
        panels.forEach(function (p, j) { p.hidden = j !== i; bar.children[j].setAttribute('aria-selected', j === i ? 'true' : 'false'); bar.children[j].tabIndex = j === i ? 0 : -1; });
        if (focus) bar.children[i].focus();
        panels[i].querySelectorAll('.bb-reveal, .bb-reveal-img').forEach(function (el) { el.classList.add('is-in', 'is-visible'); });
        window.dispatchEvent(new Event('resize'));
      }
      panels.forEach(function (p, i) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'bb-tabs__btn'; b.setAttribute('role', 'tab');
        b.textContent = p.getAttribute('data-tab');
        b.addEventListener('click', function () { show(i); });
        b.addEventListener('keydown', function (e) { var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) { e.preventDefault(); show((i + d + panels.length) % panels.length, true); } });
        bar.appendChild(b); p.setAttribute('role', 'tabpanel'); p._show = function () { show(i); };
      });
      var h = location.hash && sec.querySelector(location.hash.replace(/[^#\w-]/g, ''));
      var start = 0; panels.forEach(function (p, i) { if (h && (p === h || p.contains(h))) start = i; });
      show(start);
    });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-tab-go]'); if (!a) return;
    var p = [].find.call(document.querySelectorAll('.bb-tab'), function (t) { return t.getAttribute('data-tab') === a.getAttribute('data-tab-go'); });
    if (!p || !p._show) return; e.preventDefault(); p._show();
    var sec = p.closest('section'); window.scrollTo({ top: sec.getBoundingClientRect().top + scrollY - 40, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  function initQuietVideos(root) {
    root.querySelectorAll('video:not([controls])').forEach(function (v) {
      if (v.closest('.home-clip')) return;
      v.setAttribute('disablepictureinpicture', ''); v.setAttribute('disableremoteplayback', '');
      var poster = v.getAttribute('poster');
      if (poster) {
        var host = v.parentNode;
        host.style.backgroundImage = 'url("' + poster + '")';
        host.style.backgroundSize = 'cover'; host.style.backgroundPosition = 'center';
        v.removeAttribute('poster');
      }
      v.style.transition = 'opacity .6s ease'; v.style.opacity = '0';
      var t;
      v.addEventListener('playing', function () { clearTimeout(t); t = setTimeout(function () { v.style.opacity = '1'; }, 1000); });
      ['waiting', 'pause', 'stalled'].forEach(function (ev) { v.addEventListener(ev, function () { clearTimeout(t); v.style.opacity = '0'; }); });
    });
  }
  function initNoZoom(root) {
    root.querySelectorAll('[data-bp-toy], [data-buba-toy], [data-wm-toy]').forEach(function (el) {
      var last = 0;
      el.addEventListener('touchend', function (e) {
        var now = Date.now(), quick = now - last < 400;
        last = now;
        if (!quick || e.touches.length || e.target.closest('input[switch], label')) return;
        e.preventDefault();
        var t = e.target.closest('button, a');
        if (t) t.click();
      }, { passive: false });
    });
  }
  function initLive(root) {
    if (Date.now() < Date.UTC(2026, 10, 18, 19)) return;
    root.querySelectorAll('[data-bb-live]').forEach(function (el) { el.textContent = el.getAttribute('data-bb-live'); });
  }
  function init() {
    var root = document;
    var pg = document.querySelector('.bb-page'); if (pg && !pg.id) pg.id = 'bb-main';
    resolveAssets(root);
    initHeader();
    initLightbox(root);
    initCompare(root);
    initMore(root);
    initFilter(root);
    initForms(root);
    initLive(root);
    initNoZoom(root);
    initQuietVideos(root);
    (window.BB_COMPONENTS || []).forEach(function (fn) {
      try { fn(root, { asset: assetUrl, reduceMotion: reduceMotion }); } catch (err) { console.error(err); }
    });
    [initTabs, initUpdated].forEach(function (fn) {
      try { fn(root); } catch (err) { console.error(err); }
    });
  }
  var PROJECTS = ['fh', 'bs4', 'beh', 'twd', 'lst', 'sumo', 'zoe', 'bsi', 'buba', 'bp'];
  window.bbAchieve = function () {};
  function initUpdated() {
    var el = document.querySelector('[data-bb-updated]');
    if (el && window.BB_UPDATED) el.textContent = 'Updated ' + window.BB_UPDATED;
  }
  function addChrome() {
    var C = window.BB_CHROME;
    var tc = document.querySelector('meta[name="theme-color"]') || document.head.appendChild(document.createElement('meta'));
    tc.name = 'theme-color'; tc.content = '#100d0b';
    setTimeout(function () { tc.content = getComputedStyle(document.documentElement).getPropertyValue('--bb-bg').trim() || '#100d0b'; }, 600);
    if (!C) return;
    if (!document.querySelector('.bb-header') && C.header) document.body.insertAdjacentHTML('afterbegin', C.header);
    if (!document.querySelector('.bb-footer') && C.footer) {
      var main = document.querySelector('#page, main, .sqs-site-content') || document.body;
      (main.parentNode === document.documentElement ? document.body : main.parentNode).insertAdjacentHTML('beforeend', C.footer);
      if (!document.querySelector('.bb-footer')) document.body.insertAdjacentHTML('beforeend', C.footer);
    }
  }
  function runScripts(host) {
    var scripts = Array.prototype.slice.call(host.querySelectorAll('script'));
    scripts.forEach(function (old) {
      var type = (old.getAttribute('type') || '').toLowerCase();
      if (type && type.indexOf('javascript') === -1 && type !== 'module') return; // JSON data stays as is
      var s = document.createElement('script');
      Array.prototype.slice.call(old.attributes).forEach(function (a) { s.setAttribute(a.name, a.value); });
      s.textContent = old.textContent;
      old.parentNode.replaceChild(s, old);
    });
  }
  function loadStubs(done) {
    var stubs = Array.prototype.slice.call(document.querySelectorAll('[data-bb-page]')).filter(function (el) { return !el.querySelector('.bb-page'); });
    if (!stubs.length || !window.fetch) return done();
    var base = window.BB_APP_BASE || APP_BASE || ((window.BB_ASSET_BASE || '') + 'app/');
    var left = stubs.length;
    stubs.forEach(function (el) {
      fetch(base + 'pages/' + el.getAttribute('data-bb-page') + '.html', { cache: 'no-cache' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (html) { el.innerHTML = html; runScripts(el); })
        .catch(function (err) {
          console.error('Could not load page content', err);
          el.innerHTML = '<div class="bb-page"><section class="bb-section"><div class="bb-container"><p class="bb-lead">This page didn\u2019t load. Please refresh.</p></div></section></div>';
        })
        .then(function () { if (--left === 0) done(); });
    });
  }
  function boot() {
    addChrome();
    loadStubs(init);
  }
  window.BB_COMPONENTS = window.BB_COMPONENTS || [];
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

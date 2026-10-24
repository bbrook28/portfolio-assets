window.BB_CHROME={"header": "<header class=\"bb-header\" id=\"bbHeader\">\n  <div class=\"bb-header__inner\">\n    <a class=\"bb-brand\" href=\"/\">Ben Brook<em>.</em></a>\n    <nav class=\"bb-nav\" aria-label=\"Main\">\n      <a href=\"/\" data-path=\"/\">Home</a>\n      <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n      <a href=\"/about\" data-path=\"/about\">About</a>\n      <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      <a class=\"bb-btn\" href=\"https://static1.squarespace.com/static/6057c16ba8128169e9a3e74a/t/6966b1602c02954da9c36e05/1768337760290/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9</a>\n    </nav>\n    <button class=\"bb-burger\" type=\"button\" aria-label=\"Menu\" aria-expanded=\"false\" aria-controls=\"bbMobile\"><span></span><span></span></button>\n    <div class=\"bb-mobile\" id=\"bbMobile\">\n      <nav aria-label=\"Mobile\">\n        <a href=\"/\" data-path=\"/\">Home</a>\n        <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n        <a href=\"/about\" data-path=\"/about\">About</a>\n        <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      </nav>\n      <div class=\"bb-mobile__foot\">\n        <a href=\"https://static1.squarespace.com/static/6057c16ba8128169e9a3e74a/t/6966b1602c02954da9c36e05/1768337760290/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9 \u2197</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn \u2197</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io \u2197</a>\n        <a href=\"mailto:benbrookgames@gmail.com\">benbrookgames@gmail.com</a>\n      </div>\n    </div>\n  </div>\n</header>\n", "footer": "<footer class=\"bb-footer\">\n  <div class=\"bb-container\">\n    <div class=\"bb-footer__cta\">\n      <div>\n        <p class=\"bb-kicker\">Open to conversations</p>\n        <h2 class=\"bb-footer__big\">Let\u2019s build<br><em>worlds</em> together.</h2>\n        <a class=\"bb-footer__mail\" href=\"mailto:benbrookgames@gmail.com\">benbrookgames@gmail.com</a>\n      </div>\n      <a class=\"bb-btn\" href=\"/contact\">Get in touch <svg viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M4 12 12 4M5 4h7v7\"/></svg></a>\n    </div>\n    <div class=\"bb-footer__row\">\n      <span>\u00a9 <span data-bb-year>2026</span> Ben Brook \u00b7 Game &amp; Level Designer \u00b7 Los Angeles</span>\n      <nav aria-label=\"Footer\">\n        <a href=\"/portfolio-1\">Work</a>\n        <a href=\"/about\">About</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io</a>\n        <a href=\"https://www.instagram.com/theoriginaldiabeto/\" target=\"_blank\" rel=\"noopener\">Instagram</a>\n      </nav>\n      <span class=\"bb-footer__status\">Game Designer at Nexon America</span>\n    </div>\n  </div>\n</footer>\n"};
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('bb-js');
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
    root.querySelectorAll('[data-bb-src]').forEach(function (el) {
      el.setAttribute('src', assetUrl(el.getAttribute('data-bb-src')));
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
    var last = 0, ticking = false;
    function onScroll() {
      var y = window.pageYOffset;
      header.classList.toggle('is-scrolled', y > 24);
      var open = document.documentElement.classList.contains('bb-menu-open');
      header.classList.toggle('is-hidden', !open && y > last && y > 240);
      last = Math.max(0, y);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();
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
  function initReveal(root) {
    var els = root.querySelectorAll('.bb-reveal, .bb-reveal-img');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }
  function initParallax(root) {
    if (reduceMotion) return;
    var media = root.querySelectorAll('.bb-hero__media');
    if (!media.length) return;
    var ticking = false;
    function update() {
      var y = window.pageYOffset;
      media.forEach(function (m) {
        if (y < window.innerHeight * 1.2) m.style.transform = 'translate3d(0,' + (y * 0.22).toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }
  function initCounters(root) {
    var els = root.querySelectorAll('[data-bb-count]');
    if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, to = parseFloat(el.getAttribute('data-bb-count')), t0 = null;
        function step(t) {
          if (!t0) t0 = t;
          var p = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(to * e);
          if (p < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    els.forEach(function (el) { io.observe(el); });
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
  function initFilter(root) {
    root.querySelectorAll('[data-bb-filter]').forEach(function (bar) {
      var grid = document.querySelector(bar.getAttribute('data-bb-filter'));
      if (!grid) return;
      var buttons = bar.querySelectorAll('button[data-filter]');
      var apply = function (f) {
        buttons.forEach(function (b) {
          var on = b.getAttribute('data-filter') === f;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        grid.querySelectorAll('[data-tags]').forEach(function (card) {
          var tags = ' ' + card.getAttribute('data-tags') + ' ';
          card.classList.toggle('is-hidden', f !== 'all' && tags.indexOf(' ' + f + ' ') === -1);
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
            if (status) status.textContent = 'Thanks — your message is on its way. I’ll reply soon.';
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
  function initIntro() {
    if (reduceMotion) return;
    var curtain = document.createElement('div');
    curtain.className = 'bb-curtain';
    document.body.appendChild(curtain);
    if (!store('bb-intro') && document.querySelector('.bb-page')) {
      store('bb-intro', '1');
      var intro = document.createElement('div');
      intro.className = 'bb-intro';
      intro.setAttribute('aria-hidden', 'true');
      intro.innerHTML = '<div class="bb-intro__name"><span>Ben Brook<em>.</em></span></div><div class="bb-intro__line"></div>';
      document.body.appendChild(intro);
      setTimeout(function () { intro.classList.add('is-out'); }, 1250);
      setTimeout(function () { intro.remove(); }, 2100);
    } else {
      curtain.classList.add('is-boot');
    }
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== '_self') return;
      if (a.hasAttribute('download') || a.getAttribute('href').charAt(0) === '#') return;
      var url;
      try { url = new URL(a.href, location.href); } catch (err) { return; }
      if (url.origin !== location.origin || (url.pathname === location.pathname && url.hash)) return;
      if (!/^https?:$/.test(url.protocol) && url.protocol !== 'file:') return;
      e.preventDefault();
      curtain.classList.remove('is-boot');
      curtain.classList.add('is-in');
      setTimeout(function () { location.href = a.href; }, 420);
    });
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) curtain.classList.remove('is-in', 'is-boot');
    });
  }
  function initSplit(root) {
    if (reduceMotion) return;
    var heads = root.querySelectorAll('.bb-page .bb-display, .bb-page .bb-h1, .bb-page .bb-h2');
    heads.forEach(function (h) {
      if (h.closest('svg') || h.classList.contains('bb-words')) return;
      var i = 0;
      (function walk(node) {
        Array.prototype.slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var parts = n.textContent.split(/(\s+)/);
            var frag = document.createDocumentFragment();
            parts.forEach(function (p) {
              if (!p) return;
              if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
              var w = document.createElement('span'); w.className = 'bb-w';
              var inner = document.createElement('span'); inner.textContent = p; inner.style.setProperty('--i', i++);
              w.appendChild(inner); frag.appendChild(w);
            });
            n.parentNode.replaceChild(frag, n);
          } else if (n.nodeType === 1 && n.tagName !== 'BR') {
            walk(n);
          }
        });
      })(h);
      h.classList.add('bb-words');
      if (h.closest('.bb-hero')) {
        h.style.setProperty('--d0', '450ms');
        requestAnimationFrame(function () { requestAnimationFrame(function () { h.classList.add('is-in'); }); });
      }
    });
    if (!('IntersectionObserver' in window)) { heads.forEach(function (h) { h.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.2 });
    heads.forEach(function (h) { if (!h.classList.contains('is-in')) io.observe(h); });
  }
  function initProgress() {
    if (reduceMotion || !document.querySelector('.bb-page')) return;
    var bar = document.createElement('div');
    bar.className = 'bb-progress';
    document.body.appendChild(bar);
    var ticking = false;
    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty('--p', max > 0 ? Math.min(1, window.pageYOffset / max).toFixed(4) : 0);
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }
  function initLive(root) {
    if (Date.now() < Date.UTC(2026, 10, 18, 8)) return;
    root.querySelectorAll('[data-bb-live]').forEach(function (el) { el.textContent = el.getAttribute('data-bb-live'); });
  }
  function initTop() {
    if (!document.querySelector('.bb-page') || document.querySelector('.bb-top')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'bb-top'; b.setAttribute('aria-label', 'Back to top');
    b.innerHTML = '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22"/><circle class="bb-top__ring" cx="24" cy="24" r="22" pathLength="1"/><path d="M24 31V17M18 23l6-6 6 6"/></svg>';
    b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); });
    document.body.appendChild(b);
    var ticking = false;
    function update() {
      var y = window.pageYOffset, max = document.documentElement.scrollHeight - window.innerHeight;
      b.classList.toggle('is-on', y > window.innerHeight * 1.5 && !document.documentElement.classList.contains('bb-menu-open'));
      b.style.setProperty('--p', max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }
  function initMotes(root) {
    if (reduceMotion) return;
    root.querySelectorAll('.bb-hero').forEach(function (hero) {
      var c = document.createElement('canvas');
      c.className = 'bb-motes';
      c.setAttribute('aria-hidden', 'true');
      hero.appendChild(c);
      var ctx = c.getContext('2d');
      if (!ctx) return;
      var accent = getComputedStyle(hero.closest('.bb-page') || document.documentElement).getPropertyValue('--bb-accent').trim() || '#e8b06a';
      var dpr = Math.min(2, window.devicePixelRatio || 1), W, H, motes = [], running = false, raf;
      function size() {
        W = hero.clientWidth; H = hero.clientHeight;
        c.width = W * dpr; c.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var n = Math.round(Math.min(70, W * H / 26000));
        motes = [];
        for (var k = 0; k < n; k++) motes.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + .4, vx: (Math.random() - .5) * .12, vy: -(Math.random() * .25 + .05), a: Math.random() * .6 + .2, t: Math.random() * 6.28 });
      }
      function frame() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = accent;
        motes.forEach(function (m) {
          m.x += m.vx; m.y += m.vy; m.t += .01;
          if (m.y < -10) { m.y = H + 10; m.x = Math.random() * W; }
          if (m.x < -10) m.x = W + 10; else if (m.x > W + 10) m.x = -10;
          ctx.globalAlpha = m.a * (.55 + .45 * Math.sin(m.t));
          ctx.shadowColor = accent; ctx.shadowBlur = 8;
          ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, 6.283); ctx.fill();
        });
        raf = requestAnimationFrame(frame);
      }
      function start() { if (!running) { running = true; raf = requestAnimationFrame(frame); } }
      function stop() { running = false; cancelAnimationFrame(raf); }
      size();
      window.addEventListener('resize', size);
      new IntersectionObserver(function (en) { en[0].isIntersecting && !document.hidden ? start() : stop(); }).observe(hero);
      document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); });
    });
  }
  function initPointerFx(root) {
    if (!finePointer || reduceMotion) return;
    var ring = document.createElement('div');
    ring.className = 'bb-cursor';
    ring.innerHTML = '<span></span>';
    document.body.appendChild(ring);
    var label = ring.firstChild, x = -100, y = -100, rx = x, ry = y;
    document.addEventListener('mousemove', function (e) { x = e.clientX; y = e.clientY; ring.classList.add('is-on'); }, { passive: true });
    document.addEventListener('mouseleave', function () { ring.classList.remove('is-on'); });
    (function loop() {
      rx += (x - rx) * .2; ry += (y - ry) * .2;
      ring.style.transform = 'translate3d(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px,0)';
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', function (e) {
      var t = e.target.closest ? e.target : null;
      if (!t) return;
      var lab = t.closest('.bb-pcard') ? 'View' : t.closest('[data-bb-lightbox], .fh-mapx__img') ? 'Zoom' : t.closest('.bb-compare') ? 'Drag' : t.closest('.bb-next a') ? 'Next' : '';
      var link = t.closest('a, button, [role=button], [role=tab], input, select, textarea, label');
      ring.classList.toggle('is-label', !!lab);
      ring.classList.toggle('is-link', !lab && !!link);
      label.textContent = lab;
    });
    function relPos(el, e) {
      var r = el.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height };
    }
    root.querySelectorAll('.bb-btn, .bb-pcard__arrow, .bb-burger, .fh-mapx__nav button').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var p = relPos(el, e);
        el.style.transition = 'transform .15s linear';
        el.style.transform = 'translate(' + ((p.x - p.w / 2) * .18).toFixed(1) + 'px,' + ((p.y - p.h / 2) * .28).toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1)';
        el.style.transform = '';
      });
    });
    root.querySelectorAll('.bb-pcard').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var p = relPos(el, e);
        el.classList.add('is-hover');
        el.style.setProperty('--mx', p.x + 'px');
        el.style.setProperty('--my', p.y + 'px');
        el.style.transition = 'transform .12s linear, border-color .4s';
        el.style.transform = 'perspective(1100px) rotateX(' + ((.5 - p.y / p.h) * 5).toFixed(2) + 'deg) rotateY(' + ((p.x / p.w - .5) * 6).toFixed(2) + 'deg)';
      });
      el.addEventListener('mouseleave', function () {
        el.classList.remove('is-hover');
        el.style.transition = 'transform .7s cubic-bezier(.16,1,.3,1), border-color .4s';
        el.style.transform = '';
      });
    });
    root.querySelectorAll('.bb-card, .bb-press a, .fh-mob, .bb-stat, .fh-act, .twd-hap, .bs4-vault__doc').forEach(function (el) {
      el.classList.add('bb-fx-spot');
      el.addEventListener('mousemove', function (e) {
        var p = relPos(el, e);
        el.style.setProperty('--mx', p.x + 'px');
        el.style.setProperty('--my', p.y + 'px');
        el.classList.add('is-hover');
      });
      el.addEventListener('mouseleave', function () { el.classList.remove('is-hover'); });
    });
  }
  function initImageParallax(root) {
    if (reduceMotion) return;
    var frames = Array.prototype.slice.call(root.querySelectorAll('.bb-figure__frame')).filter(function (f) {
      var img = f.querySelector('img');
      return img && !f.closest('.bb-compare') && img.style.objectFit !== 'contain' && !f.style.background;
    });
    if (!frames.length) return;
    frames.forEach(function (f) { f.classList.add('bb-fx-px'); });
    var vis = new Set();
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (e) { e.isIntersecting ? vis.add(e.target) : vis.delete(e.target); });
      }, { rootMargin: '10% 0px' });
      frames.forEach(function (f) { io.observe(f); });
    }
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      vis.forEach(function (f) {
        var r = f.getBoundingClientRect();
        var t = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
        f.style.setProperty('--py', (t * -14).toFixed(1) + 'px');
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }
  function init() {
    var root = document;
    resolveAssets(root);
    initHeader();
    initReveal(root);
    initParallax(root);
    initCounters(root);
    initLightbox(root);
    initCompare(root);
    initFilter(root);
    initForms(root);
    initLive(root);
    (window.BB_COMPONENTS || []).forEach(function (fn) {
      try { fn(root, { asset: assetUrl, reduceMotion: reduceMotion }); } catch (err) { console.error(err); }
    });
    [initIntro, initProgress, initTop, initSplit, initMotes, initPointerFx, initImageParallax].forEach(function (fn) {
      try { fn(root); } catch (err) { console.error(err); }
    });
  }
  function addChrome() {
    var C = window.BB_CHROME;
    var tc = document.querySelector('meta[name="theme-color"]') || document.head.appendChild(document.createElement('meta'));
    tc.name = 'theme-color'; tc.content = '#09090b';
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

window.BB_CHROME={"header": "<header class=\"bb-header\" id=\"bbHeader\">\n  <div class=\"bb-header__inner\">\n    <a class=\"bb-brand\" href=\"/\">Ben Brook<em>.</em></a>\n    <nav class=\"bb-nav\" aria-label=\"Main\">\n      <a href=\"/\" data-path=\"/\">Home</a>\n      <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n      <a href=\"/about\" data-path=\"/about\">About</a>\n      <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      <a class=\"bb-btn\" href=\"https://bbrook28.github.io/portfolio-assets/resume/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9</a>\n    </nav>\n    <button class=\"bb-burger\" type=\"button\" aria-label=\"Menu\" aria-expanded=\"false\" aria-controls=\"bbMobile\"><span></span><span></span></button>\n    <div class=\"bb-mobile\" id=\"bbMobile\">\n      <nav aria-label=\"Mobile\">\n        <a href=\"/\" data-path=\"/\">Home</a>\n        <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n        <a href=\"/about\" data-path=\"/about\">About</a>\n        <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      </nav>\n      <div class=\"bb-mobile__foot\">\n        <a href=\"https://bbrook28.github.io/portfolio-assets/resume/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9 \u2197</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn \u2197</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io \u2197</a>\n        <a href=\"mailto:benbrookgames@gmail.com\">benbrookgames@gmail.com</a>\n      </div>\n    </div>\n  </div>\n</header>\n", "footer": "<footer class=\"bb-footer\">\n  <div class=\"bb-container\">\n    <div class=\"bb-footer__cta\">\n      <div>\n        <p class=\"bb-kicker\">Open to conversations</p>\n        <h2 class=\"bb-footer__big\">Let\u2019s build<br><em>worlds</em> together.</h2>\n        <a class=\"bb-footer__mail\" href=\"mailto:benbrookgames@gmail.com\">benbrookgames@gmail.com</a>\n      </div>\n      <a class=\"bb-btn\" href=\"/contact\">Get in touch <svg viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M4 12 12 4M5 4h7v7\"/></svg></a>\n    </div>\n    <div class=\"bb-footer__row\">\n      <span>\u00a9 <span data-bb-year>2026</span> Ben Brook \u00b7 Game &amp; Level Designer \u00b7 Los Angeles</span>\n      <nav aria-label=\"Footer\">\n        <a href=\"/portfolio-1\">Work</a>\n        <a href=\"/about\">About</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io</a>\n        <a href=\"https://www.instagram.com/theoriginaldiabeto/\" target=\"_blank\" rel=\"noopener\">Instagram</a>\n      </nav>\n      <span class=\"bb-footer__status\">Game Designer at Nexon America<span class=\"bb-footer__updated\" data-bb-updated></span></span>\n    </div>\n  </div>\n</footer>\n"};window.BB_UPDATED="October 2026";
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
    if (reduceMotion || window.matchMedia('(hover: none), (max-width: 760px)').matches) return;
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
    if (Date.now() < Date.UTC(2026, 10, 18, 8)) return;
    root.querySelectorAll('[data-bb-live]').forEach(function (el) { el.textContent = el.getAttribute('data-bb-live'); });
  }
  function initToc() {
    var page = document.querySelector('.bb-page');
    if (!page || document.querySelector('.bb-toc') || page.hasAttribute('data-bb-no-toc')) return;
    var items = [];
    page.querySelectorAll(':scope > section').forEach(function (sec, i) {
      var k = sec.querySelector('.bb-kicker'), h = sec.querySelector('.bb-h2');
      if (!k || !h || sec.classList.contains('bb-hero')) return;
      var parts = k.textContent.split('·'), label = sec.getAttribute('data-bb-toc') || parts[parts.length - 1].trim();
      if (!sec.id) sec.id = 'bb-s' + i;
      items.push({ sec: sec, label: label });
    });
    if (items.length < 4) return;
    var nav = document.createElement('nav');
    nav.className = 'bb-toc'; nav.setAttribute('aria-label', 'On this page');
    nav.innerHTML = '<button type="button" class="bb-toc__pill" aria-expanded="false"><span class="bb-toc__now"></span><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5"/></svg></button><ol></ol>';
    var ol = nav.querySelector('ol'), pill = nav.querySelector('.bb-toc__pill'), now = nav.querySelector('.bb-toc__now');
    items.forEach(function (it) {
      var li = document.createElement('li'), a = document.createElement('a');
      a.href = '#' + it.sec.id; a.innerHTML = '<span>' + it.label.replace(/</g, '&lt;') + '</span>';
      a.addEventListener('click', function (e) {
        e.preventDefault(); nav.classList.remove('is-open'); pill.setAttribute('aria-expanded', 'false');
        var y = it.sec.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
      li.appendChild(a); ol.appendChild(li); it.a = a;
    });
    pill.addEventListener('click', function () { var o = nav.classList.toggle('is-open'); pill.setAttribute('aria-expanded', o ? 'true' : 'false'); });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target)) { nav.classList.remove('is-open'); pill.setAttribute('aria-expanded', 'false'); } });
    document.body.appendChild(nav);
    var ticking = false;
    function update() {
      var mid = window.innerHeight * 0.35, cur = null;
      items.forEach(function (it) { if (it.sec.getBoundingClientRect().top < mid) cur = it; });
      items.forEach(function (it) { it.a.classList.toggle('is-active', it === cur); });
      now.textContent = cur ? cur.label : items[0].label;
      var last = items[items.length - 1].sec.getBoundingClientRect();
      nav.classList.toggle('is-on', !!cur && last.bottom > mid && !document.documentElement.classList.contains('bb-menu-open'));
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }
  function initCardPreview() {
    if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.querySelectorAll('.bb-pcard[data-bb-yt], .bb-pcard[data-bb-video]').forEach(function (card) {
      var timer, pv;
      card.addEventListener('mouseenter', function () {
        timer = setTimeout(function () {
          if (pv) { pv.remove(); pv = null; }
          pv = document.createElement('div'); pv.className = 'bb-pcard__pv';
          var yt = card.getAttribute('data-bb-yt');
          if (yt) {
            var f = document.createElement('iframe');
            f.src = 'https://www.youtube-nocookie.com/embed/' + yt + '?autoplay=1&mute=1&controls=0&loop=1&playlist=' + yt + '&start=' + (card.getAttribute('data-bb-start') || 0) + '&playsinline=1&modestbranding=1&rel=0&enablejsapi=1';
            f.allow = 'autoplay; encrypted-media'; f.tabIndex = -1; f.setAttribute('aria-hidden', 'true');
            f.addEventListener('load', function () { try { f.contentWindow.postMessage('{"event":"listening"}', '*'); } catch (e) {} });
            pv.appendChild(f);
            var onMsg = function (e) {
              if (!pv || e.source !== f.contentWindow) return;
              try { var d = JSON.parse(e.data); if (d.info && d.info.playerState === 1 && !pv._shown) { pv._shown = true; var box = pv; setTimeout(function () { if (pv === box) box.classList.add('is-on'); }, 2600); } } catch (err) {}
            };
            window.addEventListener('message', onMsg); pv._off = function () { window.removeEventListener('message', onMsg); };
          } else {
            var v = document.createElement('video');
            v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true; v.src = assetUrl(card.getAttribute('data-bb-video'));
            v.addEventListener('playing', function () { pv && pv.classList.add('is-on'); });
            pv.appendChild(v);
          }
          var im = card.querySelector('img'); if (im) im.parentNode.insertBefore(pv, im.nextSibling); else card.insertBefore(pv, card.firstChild);
        }, 350);
      });
      card.addEventListener('mouseleave', function () {
        clearTimeout(timer);
        if (!pv) return;
        var old = pv; pv = null; old.classList.remove('is-on'); if (old._off) old._off();
        setTimeout(function () { old.remove(); }, 400);
      });
    });
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
  var THEMES = {
    spores: { n: 80, cols: ['#b9e26f', '#b48cff', '#e3f5bf'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = init ? Math.random() * H : H + 10; p.r = Math.random() * 2.2 + .6; p.vx = 0; p.vy = -(Math.random() * .3 + .08); p.a = Math.random() * .6 + .3; }, move: function (p) { p.x += Math.sin(p.t * 1.3) * .25; }, draw: function (c, p) { c.shadowBlur = 10; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.fill(); } },
    bubbles: { n: 34, cols: ['#bfe6ff', '#d8b46a'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = init ? Math.random() * H : H + 20; p.r = Math.random() * 7 + 3; p.vy = -(Math.random() * .5 + .2); p.vx = 0; p.a = Math.random() * .35 + .4; }, move: function (p) { p.x += Math.sin(p.t * 2) * .35; }, draw: function (c, p) { c.shadowBlur = 6; c.lineWidth = 1.4; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.stroke(); c.beginPath(); c.arc(p.x - p.r * .35, p.y - p.r * .35, p.r * .22, 0, 6.283); c.fill(); } },
    snow: { n: 130, cols: ['#ffffff', '#dfe9f5'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = init ? Math.random() * H : -10; p.r = Math.random() * 3 + 1; p.vy = p.r * .25 + .25; p.vx = .25 + Math.random() * .2; p.a = Math.random() * .5 + .35; }, move: function (p) { p.x += Math.sin(p.t) * .3; }, draw: function (c, p) { c.shadowBlur = 4; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.fill(); } },
    ash: { n: 100, cols: ['#d8d1c6', '#b3aca2', '#d8d1c6', '#ff7a45', '#ff7a45'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = init ? Math.random() * H : -10; p.r = Math.random() * 2 + .6; p.vy = Math.random() * .35 + .12; p.vx = -.1 - Math.random() * .2; p.a = Math.random() * .5 + .25; p.rot = Math.random() * 6; }, move: function (p) { p.rot += .02; p.x += Math.sin(p.t) * .2; }, draw: function (c, p) { c.shadowBlur = p.col === '#ff7a45' ? 10 : 0; c.save(); c.translate(p.x, p.y); c.rotate(p.rot); c.fillRect(-p.r, -p.r * .6, p.r * 2, p.r * 1.2); c.restore(); } },
    dust: { n: 70, cols: ['#f1c27d'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = Math.random() * H; p.r = Math.random() * 1.4 + .3; p.vx = (Math.random() - .3) * .15; p.vy = (Math.random() - .5) * .08; p.a = Math.random() * .5 + .2; }, move: function () {}, draw: function (c, p) { c.shadowBlur = 6; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.fill(); } },
    blooms: { n: 26, cols: ['#ff7ad9', '#5fe3ef', '#ffd166'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = init ? Math.random() * H : H + 20; p.r = Math.random() * 5 + 4; p.vy = -(Math.random() * .3 + .12); p.vx = (Math.random() - .5) * .2; p.a = Math.random() * .4 + .35; p.rot = Math.random() * 6; p.heart = Math.random() < .35; }, move: function (p) { p.rot += .006; p.x += Math.sin(p.t) * .3; }, draw: function (c, p) {
      c.shadowBlur = 8; c.save(); c.translate(p.x, p.y); c.rotate(p.rot); c.beginPath();
      if (p.heart) { var r = p.r * .6; c.moveTo(0, r); c.bezierCurveTo(-r * 2, -r * .4, -r * .6, -r * 1.8, 0, -r * .5); c.bezierCurveTo(r * .6, -r * 1.8, r * 2, -r * .4, 0, r); }
      else { for (var k = 0; k < 5; k++) { c.moveTo(0, 0); c.ellipse(Math.cos(k * 1.2566) * p.r * .55, Math.sin(k * 1.2566) * p.r * .55, p.r * .5, p.r * .3, k * 1.2566, 0, 6.283); } }
      c.fill(); c.restore(); } },
    paper: { n: 24, cols: ['#f3ead8', '#e7b75f'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = init ? Math.random() * H : -20; p.r = Math.random() * 5 + 4; p.vy = Math.random() * .35 + .2; p.vx = (Math.random() - .5) * .3; p.a = Math.random() * .3 + .25; p.rot = Math.random() * 6; p.spin = (Math.random() - .5) * .03; }, move: function (p) { p.rot += p.spin; p.x += Math.sin(p.t * 1.5) * .5; }, draw: function (c, p) { c.shadowBlur = 0; c.save(); c.translate(p.x, p.y); c.rotate(p.rot); c.scale(1, Math.cos(p.t * 2) * .8 + .2); c.fillRect(-p.r, -p.r * .7, p.r * 2, p.r * 1.4); c.restore(); } },
    arcane: { n: 50, cols: ['#c78bff', '#f0d9ff', '#7fd6ff'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = Math.random() * H; p.r = Math.random() * 3 + 1.5; p.vx = (Math.random() - .5) * .1; p.vy = -(Math.random() * .1); p.a = Math.random() * .7 + .3; }, move: function () {}, draw: function (c, p) { var s = p.r * (.6 + .4 * Math.sin(p.t * 3)); c.shadowBlur = 12; c.beginPath(); c.moveTo(p.x, p.y - s * 2); c.quadraticCurveTo(p.x, p.y, p.x + s * 2, p.y); c.quadraticCurveTo(p.x, p.y, p.x, p.y + s * 2); c.quadraticCurveTo(p.x, p.y, p.x - s * 2, p.y); c.quadraticCurveTo(p.x, p.y, p.x, p.y - s * 2); c.fill(); } },
    embers: { n: 100, cols: ['#ff7a45', '#ffb347', '#ff3d2e'], spawn: function (p, W, H, init) { p.x = Math.random() * W; p.y = init ? Math.random() * H : H + 10; p.r = Math.random() * 2.4 + .8; p.vy = -(Math.random() * .7 + .3); p.vx = 0; p.a = Math.random() * .6 + .4; }, move: function (p) { p.x += Math.sin(p.t * 2.2) * .45; p.a *= .9992; }, draw: function (c, p) { c.shadowBlur = 12; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.fill(); } },
    magnet: { n: 60, cols: ['#4fb8ff', '#ff6b6b'], spawn: function (p, W, H, init) { p.y0 = Math.random() * H; p.x = init ? Math.random() * W : (p.col === '#4fb8ff' ? -10 : W + 10); p.y = p.y0; p.r = Math.random() * 1.6 + .6; p.vx = (p.col === '#4fb8ff' ? 1 : -1) * (Math.random() * .4 + .25); p.vy = 0; p.a = Math.random() * .6 + .3; p.amp = Math.random() * 30 + 10; }, move: function (p, W) { p.y = p.y0 + Math.sin(p.x / W * 6.283 + p.amp) * p.amp; }, draw: function (c, p) { c.shadowBlur = 10; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.fill(); } }
  };
  var PAGE_THEME = { fh: 'spores', nf: 'spores', bs4: 'bubbles', beh: 'snow', twd: 'ash', lst: 'dust', zoe: 'blooms', bsi: 'paper', wm: 'arcane', buba: 'embers', bp: 'magnet' };
  function initMotes(root) {
    if (reduceMotion) return;
    root.querySelectorAll('.bb-hero').forEach(function (hero) {
      var c = document.createElement('canvas');
      c.className = 'bb-motes';
      c.setAttribute('aria-hidden', 'true');
      hero.appendChild(c);
      var ctx = c.getContext('2d');
      if (!ctx) return;
      var page = hero.closest('.bb-page');
      var accent = getComputedStyle(page || document.documentElement).getPropertyValue('--bb-accent').trim() || '#e8b06a';
      var key = page && Object.keys(PAGE_THEME).filter(function (k) { return page.classList.contains(k); })[0];
      var th = THEMES[PAGE_THEME[key]] || { n: 70, cols: [accent], spawn: function (p, W, H) { p.x = Math.random() * W; p.y = Math.random() * H; p.r = Math.random() * 1.8 + .4; p.vx = (Math.random() - .5) * .12; p.vy = -(Math.random() * .25 + .05); p.a = Math.random() * .6 + .2; }, move: function () {}, draw: function (cx, p) { cx.shadowBlur = 8; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fill(); } };
      var dpr = Math.min(2, window.devicePixelRatio || 1), W, H, motes = [], running = false, raf;
      function spawn(p, init) { p.col = th.cols[Math.floor(Math.random() * th.cols.length)]; p.t = Math.random() * 6.28; th.spawn(p, W, H, init); return p; }
      function size() {
        var w = hero.clientWidth, h = hero.clientHeight;
        if (w === W && h === H) return;
        var keep = w === W && motes.length;
        W = w; H = h;
        c.width = W * dpr; c.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (keep) return;
        var n = Math.round(Math.min(th.n * 1.2, th.n * W * H / 800000 + 10));
        motes = [];
        for (var k = 0; k < n; k++) motes.push(spawn({}, true));
      }
      function frame() {
        ctx.clearRect(0, 0, W, H);
        motes.forEach(function (m) {
          m.x += m.vx; m.y += m.vy; m.t += .01;
          th.move(m, W, H);
          if (m.y < -30 || m.y > H + 30 || m.x < -30 || m.x > W + 30) spawn(m, false);
          ctx.globalAlpha = Math.max(0, m.a * (.6 + .4 * Math.sin(m.t)));
          ctx.fillStyle = ctx.strokeStyle = ctx.shadowColor = m.col;
          th.draw(ctx, m);
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
    initNoZoom(root);
    initQuietVideos(root);
    (window.BB_COMPONENTS || []).forEach(function (fn) {
      try { fn(root, { asset: assetUrl, reduceMotion: reduceMotion }); } catch (err) { console.error(err); }
    });
    [initIntro, initProgress, initTop, initToc, initCardPreview, initSplit, initMotes, initPointerFx, initImageParallax, initAchievements, initKonami, initUpdated].forEach(function (fn) {
      try { fn(root); } catch (err) { console.error(err); }
    });
  }
  var ACH = {
    grave: ['Grave Robber', 'Found Someone Else’s Grave on the Forgotten Hollow map.'],
    cartographer: ['Cartographer', 'Visited every map in Forgotten Hollow.'],
    joined: ['Joined Together', 'Solved all three Beepo & Pogo puzzles.'],
    boxed: ['Boxed In', 'Trapped Buba behind his own shells.'],
    completionist: ['Completionist', 'Visited every project page.'],
    konami: ['Old School', '↑↑↓↓←→←→BA. Respect.']
  };
  var PROJECTS = ['fh', 'bs4', 'beh', 'twd', 'lst', 'zoe', 'bsi', 'wm', 'buba', 'bp'];
  function store(k, v) {
    try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null'); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; }
  }
  var toastQ = [], toastBusy = false;
  function bbAchieve(id) {
    if (!ACH[id]) return;
    var got = store('bb-ach') || {};
    if (got[id]) return;
    got[id] = Date.now(); store('bb-ach', got);
    toastQ.push(id); if (!toastBusy) nextToast();
  }
  function nextToast() {
    var id = toastQ.shift();
    if (!id) { toastBusy = false; return; }
    toastBusy = true;
    var got = store('bb-ach') || {}, n = Object.keys(got).length, total = Object.keys(ACH).length;
    var t = document.createElement('div');
    t.className = 'bb-ach'; t.setAttribute('role', 'status');
    t.innerHTML = '<span class="bb-ach__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3h10v3h3v2a5 5 0 0 1-5 5h-.3A5 5 0 0 1 13 15.6V18h3v3H8v-3h3v-2.4A5 5 0 0 1 9.3 13H9a5 5 0 0 1-5-5V6h3zm0 5V8H6a3 3 0 0 0 1 2.2zm10 0v2.2A3 3 0 0 0 18 8z"/></svg></span>' +
      '<span class="bb-ach__text"><small>Achievement unlocked · ' + n + '/' + total + '</small><strong>' + ACH[id][0] + '</strong><span>' + ACH[id][1] + '</span></span>';
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('is-on'); });
    setTimeout(function () { t.classList.remove('is-on'); setTimeout(function () { t.remove(); nextToast(); }, 500); }, 4200);
  }
  window.bbAchieve = bbAchieve;
  function initAchievements() {
    var page = document.querySelector('.bb-page');
    if (!page) return;
    var key = PROJECTS.filter(function (k) { return page.classList.contains(k); })[0];
    if (!key) return;
    var seen = store('bb-seen') || {};
    seen[key] = 1; store('bb-seen', seen);
    if (PROJECTS.every(function (k) { return seen[k]; })) setTimeout(function () { bbAchieve('completionist'); }, 2500);
  }
  function initKonami() {
    var seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], pos = 0;
    document.addEventListener('keydown', function (e) {
      var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = k === seq[pos] ? pos + 1 : (k === seq[0] ? 1 : 0);
      if (pos < seq.length) return;
      pos = 0; bbAchieve('konami');
      if (reduceMotion) return;
      var page = document.querySelector('.bb-page'), key = page && Object.keys(PAGE_THEME).filter(function (c) { return page.classList.contains(c); })[0];
      var th = THEMES[PAGE_THEME[key]] || THEMES.spores;
      var cv = document.createElement('canvas'); cv.className = 'bb-konami'; cv.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cv);
      var ctx = cv.getContext('2d'), W = cv.width = innerWidth, H = cv.height = innerHeight, t0 = performance.now(), ps = [];
      for (var i = 0; i < 220; i++) { var q = { col: th.cols[i % th.cols.length], t: Math.random() * 6.28 }; th.spawn(q, W, H, true); q.vx *= 3; q.vy *= 3; ps.push(q); }
      (function frame(now) {
        var age = (now - t0) / 1000;
        ctx.clearRect(0, 0, W, H);
        ps.forEach(function (q) { q.x += q.vx; q.y += q.vy; q.t += .02; th.move(q, W, H); ctx.globalAlpha = Math.max(0, Math.min(1, q.a + .3) * Math.min(1, (6 - age) / 1.5)); ctx.fillStyle = ctx.strokeStyle = ctx.shadowColor = q.col; th.draw(ctx, q); });
        if (age < 6) requestAnimationFrame(frame); else cv.remove();
      })(t0);
    });
  }
  function initConsole() {
    try {
      console.log('%cBen Brook%c.', 'font: 28px Georgia, serif; color: #f2ede4', 'font: 28px Georgia, serif; color: #e0b072');
      console.log('%cHey, fellow dev 👋\nThis site is hand-built: a small design system and page components served from GitHub Pages into Squarespace.\nIf you’re hiring for level, quest or systems design, I’d love to talk: benbrookgames@gmail.com\n(Try ↑↑↓↓←→←→BA on a project page.)', 'font: 13px/1.6 system-ui, sans-serif; color: #b3aea5');
    } catch (e) {}
  }
  function initUpdated() {
    var el = document.querySelector('[data-bb-updated]');
    if (el && window.BB_UPDATED) el.textContent = 'Updated ' + window.BB_UPDATED;
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
    initConsole();
    addChrome();
    loadStubs(init);
  }
  window.BB_COMPONENTS = window.BB_COMPONENTS || [];
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

window.BB_CHROME={"header": "<a class=\"bb-skip\" href=\"#bb-main\">Skip to content</a>\n<header class=\"bb-header\" id=\"bbHeader\">\n  <div class=\"bb-header__inner\">\n    <a class=\"bb-brand\" href=\"/\"><b>Ben Brook</b><span>Level &amp; quest design</span></a>\n    <nav class=\"bb-nav\" aria-label=\"Main\">\n      <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n      <a href=\"/about\" data-path=\"/about\">About</a>\n      <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      <a class=\"bb-nav__res\" href=\"https://bbrook28.github.io/portfolio-assets/resume/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9</a>\n    </nav>\n    <button class=\"bb-burger\" type=\"button\" aria-label=\"Menu\" aria-expanded=\"false\" aria-controls=\"bbMobile\"><span></span><span></span></button>\n    <div class=\"bb-mobile\" id=\"bbMobile\">\n      <nav aria-label=\"Mobile\">\n        <a href=\"/\" data-path=\"/\">Home</a>\n        <a href=\"/portfolio-1\" data-path=\"/portfolio\">Work</a>\n        <a href=\"/about\" data-path=\"/about\">About</a>\n        <a href=\"/contact\" data-path=\"/contact\">Contact</a>\n      </nav>\n      <div class=\"bb-mobile__foot\">\n        <a href=\"https://bbrook28.github.io/portfolio-assets/resume/BenBrook_Resume.pdf\" target=\"_blank\" rel=\"noopener\">R\u00e9sum\u00e9</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io</a>\n        <a href=\"mailto:benbrookgames@gmail.com\">Email</a>\n      </div>\n    </div>\n  </div>\n</header>\n", "footer": "<footer class=\"bb-footer\">\n  <div class=\"bb-container\">\n    <a class=\"bb-footer__mail\" href=\"mailto:benbrookgames@gmail.com\">benbrookgames@gmail.com</a>\n    <div class=\"bb-footer__row\">\n      <span>\u00a9 <span data-bb-year>2026</span> Ben Brook \u00b7 Los Angeles</span>\n      <nav aria-label=\"Footer\">\n        <a href=\"/portfolio-1\">Work</a>\n        <a href=\"/about\">About</a>\n        <a href=\"https://www.linkedin.com/in/benbrook12/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"https://bbrook28.itch.io/\" target=\"_blank\" rel=\"noopener\">itch.io</a>\n        <a href=\"https://www.instagram.com/theoriginaldiabeto/\" target=\"_blank\" rel=\"noopener\">Instagram</a>\n      </nav>\n    </div>\n    <p class=\"bb-footer__legal\">Design documents, writing and site \u00a9 Ben Brook. Game art, footage and trademarks belong to their studios and publishers and are shown for portfolio purposes.</p>\n  </div>\n</footer>\n"};window.BB_UPDATED="November 2026";window.BB_ROUTES={"/":"home","/portfolio-1":"portfolio","/about":"about","/contact":"contact","/projects/maplestory-classic":"maplestory-classic","/projects/t-7xfc6":"bioshock-4","/projects/tbehemoth":"behemoth","/projects/the-walking-dead-saints-and-sinners-chapter-2":"twd-retribution","/projects/level-design-blockout-canceled-title":"lonestar","/projects/zoelie":"zoelie","/projects/game-design-pitch-deck":"bioshock-infinite-redux","/projects/sumo-scuffle":"sumo-scuffle","/projects/hell-my-name-is-bubba":"hell-my-name-is-buba","/projects/beepo":"beepo"};
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
  var finePtr = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  function initPins(root) {
    var plates = [];
    root.querySelectorAll('.bb-pin').forEach(function (pin) { var host = pin.parentNode; if (plates.indexOf(host) < 0) plates.push(host); });
    plates.forEach(function (host) {
      var pins = host.querySelectorAll('.bb-pin'), list = document.createElement('ol');
      list.className = 'bb-pinlist'; list.setAttribute('aria-hidden', 'true');
      pins.forEach(function (pin, k) {
        pin.querySelector('i').setAttribute('data-n', k + 1);
        var li = document.createElement('li'); li.innerHTML = '<b>' + (k + 1) + '</b><span></span>';
        li.lastChild.textContent = pin.textContent.trim(); list.appendChild(li);
      });
      var after = host.closest('.bb-hero__media, .bb-figure') || host;
      after.parentNode.insertBefore(list, after.nextSibling);
    });
    root.querySelectorAll('.bb-pin').forEach(function (pin, i) {
      var note = pin.textContent.trim();
      pin.style.setProperty('--i', i % 8);
      pin.setAttribute('role', 'button');
      pin.setAttribute('tabindex', '0');
      pin.setAttribute('aria-label', note);
      pin.setAttribute('aria-expanded', 'false');
      function toggle(e) {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        var open = !pin.classList.contains('is-open');
        pin.parentNode.querySelectorAll('.bb-pin.is-open').forEach(function (p) { p.classList.remove('is-open'); p.setAttribute('aria-expanded', 'false'); });
        pin.classList.toggle('is-open', open);
        pin.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
      pin.addEventListener('click', toggle);
      pin.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') toggle(e); });
    });
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.bb-pin')) return;
      document.querySelectorAll('.bb-pin.is-open').forEach(function (p) { p.classList.remove('is-open'); p.setAttribute('aria-expanded', 'false'); });
    });
  }
  function initRoutes(root) {
    root.querySelectorAll('[data-bb-route]').forEach(function (fig) {
      var pts = [].map.call(fig.querySelectorAll('.bb-pin'), function (p) {
        return [parseFloat(p.style.left), parseFloat(p.style.top)];
      }).filter(function (q) { return !isNaN(q[0]) && !isNaN(q[1]); });
      var order = (fig.getAttribute('data-bb-route') || '').split(',').map(Number).filter(function (n) { return !isNaN(n) && n < pts.length; });
      if (order.length > 1) pts = order.map(function (n) { return pts[n]; });
      if (pts.length < 2) return;
      var ns = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(ns, 'svg');
      var ar = (getComputedStyle(fig).getPropertyValue('--ar') || '16/9').split('/').map(parseFloat);
      var VW = 1000, VH = 1000 * (ar[1] || 9) / (ar[0] || 16);
      svg.setAttribute('class', 'bb-route'); svg.setAttribute('viewBox', '0 0 ' + VW + ' ' + VH.toFixed(1));
      svg.setAttribute('preserveAspectRatio', 'none'); svg.setAttribute('aria-hidden', 'true');
      var path = document.createElementNS(ns, 'path');
      path.setAttribute('d', pts.map(function (q, i) { return (i ? 'L' : 'M') + (q[0] * VW / 100).toFixed(1) + ' ' + (q[1] * VH / 100).toFixed(1); }).join(' '));
      path.setAttribute('pathLength', '1');
      svg.appendChild(path);
      fig.insertBefore(svg, fig.querySelector('.bb-pin'));
      if (!reduceMotion) requestAnimationFrame(function () { requestAnimationFrame(function () { svg.classList.add('is-drawn'); }); });
      else svg.classList.add('is-drawn', 'is-still');
    });
    var chart = root.querySelector('.fh-chart');
    if (chart && !reduceMotion && 'IntersectionObserver' in window) {
      chart.classList.add('bb-route-wait');
      var io = new IntersectionObserver(function (en) {
        if (!en[0].isIntersecting) return;
        io.disconnect();
        chart.querySelectorAll('.fh-chart__lines path').forEach(function (p, i) {
          p.setAttribute('pathLength', '1'); p.style.setProperty('--d', Math.min(i * 0.025, 0.7) + 's');
        });
        requestAnimationFrame(function () { chart.classList.add('bb-route-go'); });
      }, { threshold: 0.35 });
      io.observe(chart);
    }
  }
  function initPreviews(root) {
    if (!finePtr) return;
    root.querySelectorAll('.bb-index a[data-bb-preview], .bb-index a[data-bb-flip]').forEach(function (a) {
      var thumb = a.querySelector('.bb-index__thumb'); if (!thumb) return;
      var clip = a.getAttribute('data-bb-preview'), flip = (a.getAttribute('data-bb-flip') || '').split(',').filter(Boolean);
      var layer = null, timer = null, k = 0;
      function start() {
        if (!layer) {
          if (clip) {
            layer = document.createElement('video');
            layer.muted = true; layer.loop = true; layer.playsInline = true; layer.preload = 'auto';
            layer.setAttribute('muted', ''); layer.setAttribute('playsinline', ''); layer.setAttribute('aria-hidden', 'true');
            layer.src = assetUrl(clip);
          } else {
            layer = document.createElement('div');
            layer.innerHTML = flip.map(function (f) { return '<img alt="" src="' + assetUrl(f) + '">'; }).join('');
          }
          layer.className = 'bb-index__preview';
          thumb.appendChild(layer);
        }
        thumb.classList.add('is-previewing');
        if (clip) { var pr = layer.play(); if (pr && pr.catch) pr.catch(function () {}); }
        else if (!reduceMotion) {
          var imgs = layer.children; k = 0; imgs[0].classList.add('is-on');
          clearInterval(timer);
          timer = setInterval(function () { imgs[k].classList.remove('is-on'); k = (k + 1) % imgs.length; imgs[k].classList.add('is-on'); }, 850);
        } else layer.children[0].classList.add('is-on');
      }
      function stop() {
        thumb.classList.remove('is-previewing');
        clearInterval(timer);
        if (layer && clip) layer.pause();
      }
      a.addEventListener('mouseenter', start);
      a.addEventListener('mouseleave', stop);
      a.addEventListener('focus', start);
      a.addEventListener('blur', stop);
    });
  }
  function initReadout(root) {
    if (!finePtr) return;
    root.querySelectorAll('[data-bb-readout]').forEach(function (fig) {
      var img = fig.querySelector('img'); if (!img) return;
      var tag = document.createElement('span');
      tag.className = 'bb-readout'; tag.setAttribute('aria-hidden', 'true');
      fig.appendChild(tag);
      fig.addEventListener('pointermove', function (e) {
        var r = img.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        if (x < 0 || y < 0 || x > 1 || y > 1) { tag.classList.remove('is-on'); return; }
        var fr = fig.getBoundingClientRect();
        tag.textContent = 'X ' + Math.round(x * (img.naturalWidth || 1000)) + '  Y ' + Math.round(y * (img.naturalHeight || 1000));
        tag.style.transform = 'translate(' + (e.clientX - fr.left + 14) + 'px,' + (e.clientY - fr.top + 14) + 'px)';
        tag.classList.add('is-on');
      });
      fig.addEventListener('pointerleave', function () { tag.classList.remove('is-on'); });
    });
  }
  var PF = 'bb-pf:';
  function pageFor(href) {
    try {
      var u = new URL(href, location.href);
      if (u.origin !== location.origin) return null;
      var routes = window.BB_ROUTES || {};
      return routes[u.pathname.replace(/\/$/, '') || '/'] || null;
    } catch (e) { return null; }
  }
  function initPrefetch() {
    if (!window.fetch || !APP_BASE && !window.BB_APP_BASE) return;
    var base = window.BB_APP_BASE || APP_BASE, seen = {};
    function warm(e) {
      var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
      var name = pageFor(a.getAttribute('href')); if (!name || seen[name]) return;
      seen[name] = 1;
      fetch(base + 'pages/' + name + '.html', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.text() : null; })
        .then(function (t) { if (t) try { sessionStorage.setItem(PF + name, t); } catch (err) {} }).catch(function () {});
    }
    document.addEventListener('pointerover', warm, { passive: true });
    document.addEventListener('focusin', warm);
    document.addEventListener('touchstart', warm, { passive: true });
  }
  function takePrefetched(name) {
    try { var t = sessionStorage.getItem(PF + name); if (t) sessionStorage.removeItem(PF + name); return t; } catch (e) { return null; }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('.bb-index a, .bb-next a');
    if (!a || reduceMotion) return;
    var t = a.querySelector('.bb-index__title, strong');
    document.querySelectorAll('[style*="view-transition-name"]').forEach(function (n) { n.style.viewTransitionName = ''; });
    document.querySelectorAll('.bb-hero__inner > .bb-display, .bb-hero__inner > .bb-h1').forEach(function (h) { h.style.viewTransitionName = 'none'; });
    if (t) t.style.viewTransitionName = 'bb-title';
  });
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
    [initTabs, initUpdated, initPins, initRoutes, initPreviews, initReadout].forEach(function (fn) {
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
      var cached = takePrefetched(el.getAttribute('data-bb-page'));
      if (cached) { el.innerHTML = cached; runScripts(el); if (--left === 0) done(); return; }
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
    initPrefetch();
    loadStubs(init);
  }
  window.BB_COMPONENTS = window.BB_COMPONENTS || [];
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

/* Basbaya 360: 3D telefon standı (model-viewer) + katlanabilir stand renk galerisi */
(function () {
  var EN = location.pathname.indexOf('/en/') === 0;
  var T = EN ? {
    kick: '360° · Turn it around', h: 'See it from every angle',
    sub: 'Drag to rotate, pinch to zoom. On your phone, place it on your desk with “View in your room”.',
    aName: 'Phone & Tablet Stand', aDesc: 'Ribbed A-frame body, holds phones and tablets upright. The gap in the middle is for your charging cable.',
    bName: 'Foldable Desk Phone Stand', bDesc: 'Compact, portable and sturdy. On your desk, on the road, at camp.',
    color: 'Colour', buy: 'Buy on Trendyol →', ar: '📱 View in your room', hint: '↔ Drag to rotate',
    loading: 'Loading 3D model…', swipe: '↔ Swipe for colours',
    cA: ['Black', 'White', 'Navy', 'Orange', 'Green', 'Purple'], cB: ['Orange', 'Navy', 'Purple', 'Black', 'Green']
  } : {
    kick: '360° · Çevir, incele', h: 'Her açıdan inceleyin',
    sub: 'Sürükleyerek çevirin, iki parmakla yakınlaştırın. Telefonda “Odanda gör” ile masanızın üstünde görün.',
    aName: 'Telefon & Tablet Standı', aDesc: 'Çizgili yüzeyli, sağlam A-gövde. Telefonu ve tableti dik tutar; ortadaki boşluk şarj kablosu için.',
    bName: 'Katlanabilir Masaüstü Telefon Standı', bDesc: 'Kompakt, taşınabilir ve sağlam. Masada, yolda, kampta.',
    color: 'Renk', buy: "Trendyol'da satın al →", ar: '📱 Odanda gör', hint: '↔ Sürükle: çevir',
    loading: '3D model yükleniyor…', swipe: '↔ Kaydır: renkler',
    cA: ['Siyah', 'Beyaz', 'Lacivert', 'Turuncu', 'Yeşil', 'Mor'], cB: ['Turuncu', 'Lacivert', 'Mor', 'Siyah', 'Yeşil']
  };
  var HA = ['#202024', '#EEEDE8', '#1E3A8A', '#F27A1A', '#3E6B2A', '#6D2BB8'];
  var HB = ['#F27A1A', '#1E3A8A', '#6D2BB8', '#1B1B1F', '#3E6B2A'];
  var FB = ['turuncu', 'lacivert', 'mor', 'siyah', 'yesil'];
  var STORE = 'https://www.trendyol.com/magaza/basbaya-m-1345724';
  var FOLD = 'https://www.trendyol.com/pd/basbaya/katlanabilir-masaustu-telefon-standi-kompakt-tasinabilir-telefon-tutucu-p-1216290223';

  var css = '.b360{max-width:1240px;margin:0 auto;padding:24px 32px 72px;font-family:inherit;color:#0A1433}' +
    '.b360 .k{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;border:1px solid #DCE1EB;border-radius:999px;padding:7px 14px;background:#fff;color:#4A5578}' +
    '.b360 h2{font-size:clamp(28px,3.4vw,40px);line-height:1.1;margin:14px 0 8px;font-weight:700;letter-spacing:-.01em}' +
    '.b360 .s{margin:0 0 28px;font-size:17px;line-height:1.6;color:#4A5578;max-width:640px}' +
    '.b360 .g{display:grid;grid-template-columns:1fr 1fr;gap:24px}' +
    '.b360 .c{background:#fff;border:1px solid #DCE1EB;border-radius:28px;overflow:hidden;display:flex;flex-direction:column}' +
    '.b360 .v{position:relative;aspect-ratio:1/1;background:radial-gradient(circle at 50% 42%,#fff 0,#E9EDF4 72%)}' +
    '.b360 model-viewer{width:100%;height:100%;--poster-color:transparent;outline:none}' +
    '.b360 .ph{position:relative;aspect-ratio:1/1;background:#EDE9E3;overflow:hidden;touch-action:pan-y;cursor:ew-resize}' +
    '.b360 .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 20%;opacity:0;transition:opacity .45s;user-select:none;-webkit-user-drag:none}' +
    '.b360 .ph img.on{opacity:1}' +
    '.b360 .pill{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);background:rgba(10,20,51,.82);color:#fff;font-size:13px;font-weight:600;padding:7px 13px;border-radius:999px;white-space:nowrap;pointer-events:none;transition:opacity .5s}' +
    '.b360 .bd{position:absolute;top:14px;left:14px;background:#fff;border:1px solid #DCE1EB;font-size:12px;font-weight:700;padding:6px 10px;border-radius:999px;z-index:2}' +
    '.b360 .i{padding:22px 24px 26px;display:flex;flex-direction:column;gap:12px}' +
    '.b360 .n{font-size:21px;font-weight:700;margin:0}.b360 .d{font-size:15px;line-height:1.55;color:#4A5578;margin:0}' +
    '.b360 .l{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#4A5578}.b360 .l b{color:#0A1433;text-transform:none;letter-spacing:0;font-size:14px}' +
    '.b360 .sw{display:flex;gap:10px;flex-wrap:wrap}.b360 .sw button{width:34px;height:34px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1.5px #DCE1EB;cursor:pointer;padding:0}' +
    '.b360 .sw button.on{box-shadow:0 0 0 2.5px #0A1433}' +
    '.b360 .bt{display:flex;gap:10px;flex-wrap:wrap;margin-top:4px}' +
    '.b360 .ty{background:#F27A1A;color:#fff;font-weight:700;font-size:15px;border-radius:999px;padding:12px 20px;text-decoration:none}.b360 .ty:hover{background:#E0650A}' +
    '.b360 .ar{background:#fff;color:#0A1433;border:1.5px solid #0A1433;font:inherit;font-weight:700;font-size:15px;border-radius:999px;padding:11px 18px;cursor:pointer}' +
    '@media(max-width:860px){.b360{padding:8px 20px 56px}.b360 .g{grid-template-columns:1fr}}';

  function swatches(names, hex, cb) {
    var w = document.createElement('div'); w.className = 'sw';
    names.forEach(function (n, i) {
      var b = document.createElement('button'); b.type = 'button'; b.style.background = hex[i]; b.title = n; b.setAttribute('aria-label', n);
      b.onclick = function () { cb(i); }; w.appendChild(b);
    });
    return w;
  }

  function build() {
    var s = document.createElement('section'); s.className = 'b360'; s.id = 'urun-360';
    s.innerHTML = '<span class="k">' + T.kick + '</span><h2>' + T.h + '</h2><p class="s">' + T.sub + '</p><div class="g">' +
      '<div class="c"><div class="v"><span class="bd">3D · 360°</span>' +
      '<model-viewer src="/assets/models/telefon-standi.glb" alt="' + T.aName + '" camera-controls touch-action="pan-y" auto-rotate auto-rotate-delay="0" rotation-per-second="24deg" interaction-prompt="none" shadow-intensity="1" shadow-softness="0.9" exposure="1.1" environment-image="neutral" camera-orbit="55deg 68deg auto" ar ar-modes="webxr scene-viewer quick-look" loading="lazy">' +
      '<button slot="ar-button" style="display:none"></button></model-viewer><span class="pill">' + T.hint + '</span></div>' +
      '<div class="i"><p class="n">' + T.aName + '</p><p class="d">' + T.aDesc + '</p><div class="l">' + T.color + ' · <b class="cnA"></b></div><div class="swA"></div>' +
      '<div class="bt"><a class="ty" href="' + STORE + '" target="_blank" rel="noopener">' + T.buy + '</a><button type="button" class="ar">' + T.ar + '</button></div></div></div>' +
      '<div class="c"><div class="ph">' + FB.map(function (f, i) { return '<img src="/assets/img/katlanabilir-' + f + '.webp" alt="' + T.bName + ' – ' + T.cB[i] + '" loading="lazy"' + (i === 0 ? ' class="on"' : '') + '>'; }).join('') +
      '<span class="pill">' + T.swipe + '</span></div>' +
      '<div class="i"><p class="n">' + T.bName + '</p><p class="d">' + T.bDesc + '</p><div class="l">' + T.color + ' · <b class="cnB"></b></div><div class="swB"></div>' +
      '<div class="bt"><a class="ty" href="' + FOLD + '" target="_blank" rel="noopener">' + T.buy + '</a></div></div></div></div>';

    // 3D card
    var mv = s.querySelector('model-viewer'), ca = 0, swA = swatches(T.cA, HA, function (i) { ca = i; paintA(); });
    s.querySelector('.swA').replaceWith(swA);
    function paintA() {
      s.querySelector('.cnA').textContent = T.cA[ca];
      [].forEach.call(swA.children, function (b, k) { b.classList.toggle('on', k === ca); });
      try { if (mv.model) mv.model.materials.forEach(function (m) { m.pbrMetallicRoughness.setBaseColorFactor(HA[ca]); m.pbrMetallicRoughness.setRoughnessFactor(0.6); }); } catch (e) {}
    }
    mv.addEventListener('load', paintA); paintA();
    mv.addEventListener('camera-change', function (e) { if (e.detail && e.detail.source === 'user') s.querySelector('.v .pill').style.opacity = 0; });
    var arb = s.querySelector('.ar');
    arb.onclick = function () { if (mv.canActivateAR) mv.activateAR(); else { arb.textContent = EN ? 'Open on your phone for AR' : 'AR için telefondan açın'; setTimeout(function () { arb.textContent = T.ar; }, 2500); } };

    // colour gallery
    var im = s.querySelectorAll('.ph img'), cb = 0, swB = swatches(T.cB, HB, function (i) { go(i); });
    s.querySelector('.swB').replaceWith(swB);
    function go(i) {
      cb = (i + im.length) % im.length;
      [].forEach.call(im, function (x, k) { x.classList.toggle('on', k === cb); });
      [].forEach.call(swB.children, function (b, k) { b.classList.toggle('on', k === cb); });
      s.querySelector('.cnB').textContent = T.cB[cb];
    }
    go(0);
    var ph = s.querySelector('.ph'), x0 = null;
    ph.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
    window.addEventListener('pointerup', function (e) {
      if (x0 === null) return; var d = e.clientX - x0; x0 = null;
      if (Math.abs(d) > 30) { go(cb + (d < 0 ? 1 : -1)); ph.querySelector('.pill').style.opacity = 0; }
    });
    return s;
  }

  function mount() {
    if (document.getElementById('urun-360')) return true;
    var hs = document.querySelectorAll('h2'), anchor = null;
    for (var i = 0; i < hs.length; i++) {
      if (/Atölyemizden|Fresh from our workshop/i.test(hs[i].textContent)) { anchor = hs[i].closest('section'); break; }
    }
    if (!anchor) return false;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    if (!customElements.get('model-viewer')) {
      var sc = document.createElement('script'); sc.type = 'module';
      sc.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';
      document.head.appendChild(sc);
    }
    anchor.parentNode.insertBefore(build(), anchor.nextSibling);
    return true;
  }

  if (!/\/(basbaya-3d|en\/basbaya-3d)\/?$/.test(location.pathname)) return;
  if (!mount()) {
    var mo = new MutationObserver(function () { if (mount()) mo.disconnect(); });
    mo.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 15000);
  }
})();

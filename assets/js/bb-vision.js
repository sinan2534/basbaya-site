/* Basbaya – ücretsiz fotoğraf tanıma (MobileNet, müşterinin tarayıcısında çalışır; fotoğraf hiçbir yere gönderilmez). */
(function () {
  if (window.__bbMerge) return;
  try { var st = document.createElement('style'); st.textContent = '.bb-opt summary::-webkit-details-marker{display:none}.bb-opt .bb-opt-ic{transition:transform .2s}.bb-opt[open] .bb-opt-ic{transform:rotate(45deg)}'; document.head.appendChild(st); } catch (e) {}
  var TF = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js';
  var MN = 'https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.1/dist/mobilenet.min.js';
  var modelP = null;
  function script(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = src; s.async = true; s.crossOrigin = 'anonymous';
      s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  function loadModel() {
    if (!modelP) {
      modelP = script(TF).then(function () { return script(MN); })
        .then(function () { return window.mobilenet.load({ version: 2, alpha: 1.0 }); })
        .catch(function (e) { modelP = null; throw e; });
    }
    return modelP;
  }
  // Fotoğraf seçilince modeli arkada yüklemeye başla (arama butonuna basılana kadar hazır olsun)
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t && t.type === 'file' && t.closest && t.closest('form') && /image/.test(t.accept || 'image')) loadModel().catch(function () {});
  }, true);

  function blobImg(blob) {
    return new Promise(function (res, rej) {
      var u = URL.createObjectURL(blob), im = new Image();
      im.onload = function () { res(im); setTimeout(function () { URL.revokeObjectURL(u); }, 1000); };
      im.onerror = rej; im.src = u;
    });
  }
  var DOG = /retriever|terrier|spaniel|poodle|shepherd|hound|bulldog|collie|husky|pug|chihuahua|corgi|beagle|labrador|schnauzer|setter|pointer|mastiff|malamute|dalmatian|pinscher|sheepdog|pomeranian|maltese|shih-tzu|samoyed|chow|dachshund|boxer|rottweiler|doberman|dingo|basenji|papillon/;
  var CAT = /tabby|tiger cat|persian|siamese|egyptian cat|lynx/;
  var TR = { 'vacuum': 'süpürge', 'car': 'araba', 'cat': 'kedi', 'dog': 'köpek', 'flowerpot': 'saksı', 'pot': 'saksı', 'cup': 'bardak', 'mug': 'kupa', 'coffee mug': 'kupa',
    'headphone': 'kulaklık', 'phone': 'telefon', 'cellular telephone': 'telefon', 'airliner': 'uçak', 'warplane': 'uçak', 'airplane': 'uçak', 'helicopter': 'helikopter', 'ship': 'gemi', 'boat': 'tekne',
    'bicycle': 'bisiklet', 'motorcycle': 'motosiklet', 'lamp': 'lamba', 'table lamp': 'masa lambası', 'chair': 'sandalye', 'vase': 'vazo', 'candle': 'mum', 'clock': 'saat', 'watch': 'saat',
    'keyboard': 'klavye', 'mouse': 'fare', 'monitor': 'monitör', 'laptop': 'dizüstü bilgisayar', 'remote control': 'kumanda', 'joystick': 'oyun kolu', 'bottle': 'şişe', 'teapot': 'çaydanlık',
    'hair dryer': 'saç kurutma makinesi', 'hand blower': 'saç kurutma makinesi', 'toaster': 'tost makinesi', 'mixer': 'mikser', 'drone': 'drone', 'camera': 'kamera', 'bird': 'kuş', 'fish': 'balık',
    'turtle': 'kaplumbağa', 'frog': 'kurbağa', 'shark': 'köpekbalığı', 'whale': 'balina', 'bear': 'ayı', 'rabbit': 'tavşan', 'hare': 'tavşan', 'owl': 'baykuş', 'lion': 'aslan', 'tiger': 'kaplan',
    'elephant': 'fil', 'horse': 'at', 'dinosaur': 'dinozor', 'mushroom': 'mantar', 'flower': 'çiçek', 'cactus': 'kaktüs', 'plant': 'bitki', 'house': 'ev', 'castle': 'kale', 'robot': 'robot', 'mask': 'maske' };
  function best(className) {
    var parts = className.toLowerCase().split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var c = parts.join(' ');
    if (DOG.test(c)) return { term: parts.sort(function (a, b) { return b.length - a.length; })[0], short: 'dog', words: ['dog'] };
    if (CAT.test(c)) return { term: 'cat', short: 'cat', words: ['cat'] };
    var t = parts.slice().sort(function (a, b) { return b.length - a.length; })[0];
    var words = c.split(/[^a-z]+/).filter(function (w) { return w.length > 2; });
    var short = words.filter(function (w) { return TR[w]; })[0] || t.split(' ').slice(-1)[0];
    return { term: t, short: short, words: words };
  }
  function trName(v, en) {
    if (en) return v.term;
    var keys = [v.term, v.short].concat(v.words);
    for (var i = 0; i < keys.length; i++) if (TR[keys[i]]) return TR[keys[i]];
    return '“' + v.term + '”';
  }
  window.__bbClassify = function (blob) {
    return Promise.all([loadModel(), blobImg(blob)]).then(function (r) { return r[0].classify(r[1], 3); }).then(function (preds) {
      try { console.info('[bb-vision]', preds.map(function (p) { return p.className + ' ' + Math.round(p.probability * 100) + '%'; }).join(' | ')); } catch (x) {}
      if (!preds || !preds.length || preds[0].probability < 0.25) return null;
      var top = best(preds[0].className), all = [];
      preds.forEach(function (p) { if (p.probability >= 0.08) all = all.concat(best(p.className).words); });
      top.all = all; top.p = preds[0].probability;
      return top;
    });
  };

  var GENERIC = { stand: 1, holder: 1, figure: 1, attachment: 1, part: 1, print: 1, decor: 1, mount: 1, minimalist: 1, the: 1, and: 1, for: 1, box: 1, case: 1, cover: 1 };
  function matches(textTerms, v) {
    var tw = {};
    (textTerms || []).join(' ').toLowerCase().split(/[^a-z]+/).forEach(function (w) { if (w.length > 2 && !GENERIC[w]) tw[w] = 1; });
    return (v.all || v.words).some(function (w) { return tw[w] || tw[w.replace(/s$/, '')]; });
  }

  function ask(v, text, en) {
    return new Promise(function (resolve) {
      var btn = Array.prototype.find.call(document.querySelectorAll('button'), function (b) { return /Benzer modelleri bul|Find similar/i.test(b.textContent); });
      var host = btn ? btn.parentElement : document.body;
      var old = document.getElementById('bb-vask'); if (old) old.remove();
      var box = document.createElement('div'); box.id = 'bb-vask'; box.setAttribute('role', 'dialog');
      box.style.cssText = 'margin-top:14px;background:#FFFFFF;border:1.5px solid #0A1433;border-radius:20px;padding:18px 20px;display:flex;flex-direction:column;gap:12px;font:500 15px/1.5 Inter,system-ui,sans-serif;color:#0A1433;width:100%;box-sizing:border-box';
      var name = trName(v, en);
      var p = document.createElement('p'); p.style.margin = '0';
      p.innerHTML = en ? 'We see <b>' + name + '</b> in your photo, but you wrote <b>' + text.replace(/[<>&"]/g, '') + '</b>. What should we search for?'
                       : 'Fotoğrafta <b>' + name + '</b> görüyoruz ama <b>' + text.replace(/[<>&"]/g, '') + '</b> yazdın. Hangisine göre arayalım?';
      var row = document.createElement('div'); row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px';
      [['text', en ? 'What I wrote' : 'Yazdığıma göre'], ['photo', en ? 'The photo' : 'Fotoğrafa göre'], ['both', en ? 'Both' : 'İkisine de bak']].forEach(function (o, i) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = o[1];
        b.style.cssText = 'font:600 14px Inter,system-ui,sans-serif;border-radius:999px;padding:10px 16px;cursor:pointer;' + (i === 0 ? 'background:#0A1433;color:#fff;border:1.5px solid #0A1433' : 'background:#fff;color:#0A1433;border:1.5px solid #0A1433');
        b.onclick = function () { box.remove(); resolve(o[0]); };
        row.appendChild(b);
      });
      box.appendChild(p); box.appendChild(row); host.appendChild(box);
      box.scrollIntoView({ block: 'center', behavior: 'smooth' });
      setTimeout(function () { try { row.firstChild.focus({ preventScroll: true }); } catch (e) {} }, 300);
    });
  }

  function uniq(a) { var o = []; a.forEach(function (x) { x = (x || '').trim(); if (x && o.indexOf(x) === -1) o.push(x); }); return o.slice(0, 3); }

  // React bileşeni çağırır: metne göre bulunan sorguları (d) fotoğrafla birleştirir.
  window.__bbMerge = function (text, d, blob, lang) {
    var en = String(lang || '').indexOf('en') === 0;
    if (!blob) return Promise.resolve(null);
    var T = window.__bbLastTerms || [];
    var failed = false;
    return window.__bbClassify(blob).catch(function (e) { failed = true; try { console.warn('[bb-vision] model yüklenemedi', e); } catch (x) {} return null; }).then(function (v) {
      if (!v) {                                  // model yüklenemedi ya da fotoğraftan emin değil → sadece yazılana göre
        if (!d.queries.length) return null;
        return { d: d, src: en ? 'BASED ON YOUR TEXT' : 'YAZDIĞINA GÖRE',
          desc: failed
            ? (en ? '⚠️ Photo recognition could not load right now, so we searched by what you wrote.'
                  : '⚠️ Fotoğraf tanıma şu an yüklenemedi, yazdığına göre aradık.')
            : (en ? '📷 We couldn’t spot a familiar product in your photo, so we searched by what you wrote. For better results, upload a close-up photo of the product on its own.'
                  : '📷 Fotoğrafında tanıdık bir ürün bulamadık, yazdığına göre aradık. Daha iyi sonuç için ürünün tek başına, yakından çekilmiş bir fotoğrafını yükle.') };
      }
      var name = trName(v, en);
      var photoQ = [v.term + ' 3d print', v.short + ' 3d model', v.term];
      if (!text || !d.queries.length) {
        return { src: (en ? 'BASED ON YOUR PHOTO · ' : 'FOTOĞRAFINA GÖRE · ') + name.toLocaleUpperCase(en ? 'en' : 'tr'), d: { name: en ? 'Photo: ' + name : 'Fotoğraf: ' + name, queries: uniq(photoQ) } };
      }
      var ok = matches(T, v);
      var go = ok ? Promise.resolve('match') : ask(v, text, en);
      return go.then(function (mode) {
        if (mode === 'text') return null;
        if (mode === 'photo') return { src: (en ? 'BASED ON YOUR PHOTO · ' : 'FOTOĞRAFINA GÖRE · ') + name.toLocaleUpperCase(en ? 'en' : 'tr'), d: { name: en ? 'Photo: ' + name : 'Fotoğraf: ' + name, queries: uniq(photoQ) } };
        var q = mode === 'match' ? [d.queries[0], d.queries[1], v.term + ' 3d print'] : [T[0] ? v.short + ' ' + T[0] : v.term + ' 3d print', d.queries[0], v.term + ' 3d print'];
        return { src: en ? 'BASED ON YOUR TEXT AND PHOTO' : 'YAZDIĞINA VE FOTOĞRAFINA GÖRE', d: { name: d.name, queries: uniq(q) } };
      });
    });
  };
})();

/* Kişiye özel / hediye fikirleri için daha akıllı arama terimleri (ör. "baş harflerimiz ve tanıştığımız tarih"). */
(function () {
  if (window.__bbRefine) return;
  function has(o, list) { return list.some(function (k) { return o.indexOf(' ' + k) !== -1; }); }
  window.__bbRefine = function (o, x, g, m) {
    o = ' ' + String(o || '').toLowerCase() + ' ';
    var initials = has(o, ['baş harf', 'bas harf', 'harfler', 'harfimiz', 'initial', 'monogram']);
    var name = has(o, ['isim', 'ismi', 'adımız', 'adımı', 'adını', 'name']);
    var date = has(o, ['tarih', 'yıl ', 'date', 'year']);
    var personal = initials || name || date || has(o, ['kişiye özel', 'kisiye ozel', 'personali', 'custom']);
    if (!personal) return null;
    var couple = has(o, ['sevgili', 'tanıştı', 'tanisti', 'çift', 'eşim', 'esim', 'aşk', 'ask ', 'evlilik', 'nişan', 'couple', 'we met', 'love']);
    var occ = has(o, ['yıldönüm', 'yildonum', 'anniversary']) || (couple && date) ? 'anniversary'
      : has(o, ['doğum gün', 'dogum gun', 'birthday']) ? 'birthday'
      : has(o, ['düğün', 'dugun', 'nişan', 'wedding']) ? 'wedding'
      : has(o, ['anne', 'mother', 'mom ']) ? 'mothers day'
      : has(o, ['baba', 'father', 'dad ']) ? 'fathers day' : '';
    var gs = (g || []).join(' ');
    var deskish = /decor|desk/.test(gs) || has(o, ['masaüstü', 'masaustu', 'biblo', 'ornament', 'desk']);
    var obj = /keychain/.test(gs) ? 'keychain' : /lamp|light/.test(gs) ? 'lamp' : /frame/.test(gs) ? 'photo frame' : /box/.test(gs) ? 'box'
      : /bookmark/.test(gs) ? 'bookmark' : deskish ? 'desk sign' : /figure|sculpture/.test(gs) || m === 'figure' ? 'figure'
      : m === 'keychain' ? 'keychain' : 'desk sign';
    var what = (initials ? 'initials ' : name ? 'name ' : '') + (date ? (initials || name ? 'and date ' : 'date ') : '');
    var q = [];
    q.push(('personalized ' + (couple ? 'couple ' : '') + what + obj).replace(/\s+/g, ' ').trim());
    q.push(('custom ' + what + obj).replace(/\s+/g, ' ').trim());
    q.push(((occ ? occ + ' ' : couple ? 'couple ' : 'personalized ') + 'gift 3d print').trim());
    if ((x || []).length) q.splice(2, 0, x[0] + ' ' + obj);
    var out = []; q.forEach(function (s) { if (out.indexOf(s) === -1) out.push(s); });
    return out.slice(0, 3);
  };
})();

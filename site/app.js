/* How far a section must clear the fixed bar. The bar is 72 high on
   desktop and 64 on phone, and the section wants air above it either way.
   Was hardcoded to the phone value, so desktop anchors landed under it. */
function headerOffset() {
  var bar = document.querySelector('.page .nav');
  var h = bar ? Math.round(bar.getBoundingClientRect().height) : 64;
  return h + 24;
}

/* andskur. One responsive tree: no zoom, no canvas fitting. */
(function () {
  window.__AS = { mode: 'one', Z: 1, fit: function () {}, mq: '(min-width: 1000px)' };
  document.documentElement.className = 'as';
})();


(function () {
  var A = window.__AS;
  var startMode = A.mode;
  var Z = function () { return window.__AS.Z; };
  var VH = function () { return window.innerHeight / Z(); };
  window.addEventListener('resize', function () {});

  
  function runPhone() {
    (function () {
          var root = document.querySelector('.page');
          if (!root) { return; }
          var self = this;
          var reduce = false;
          try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

          var grain = root.querySelector('.grain');
          try {
            var gc = document.createElement('canvas');
            gc.width = 192; gc.height = 192;
            var g2 = gc.getContext('2d');
            var img = g2.createImageData(192, 192);
            var px = img.data;
            var seed = 11;
            var rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
            for (var i = 0; i < px.length; i += 4) { var v = 88 + Math.floor(rnd() * 80); var dk = v < 128; px[i] = px[i + 1] = px[i + 2] = dk ? 0 : 255; px[i + 3] = dk ? Math.round((128 - v) / 40 * 14) : Math.round((v - 128) / 40 * 3); }
            g2.putImageData(img, 0, 0);
            if (grain) { grain.style.backgroundImage = 'url(' + gc.toDataURL() + ')'; }
          } catch (e) {}

          var sc = root.querySelector('.stars');
          try {
            var _sb = sc.getBoundingClientRect();
      var SW = Math.max(320, Math.round(_sb.width) || 390);
      var SH = Math.max(600, Math.round(_sb.height) || 1400);
      sc.width = SW; sc.height = SH;
      var SN = Math.round(70 * Math.sqrt((SW * SH) / (390 * 1400)));
      var s2 = sc.getContext('2d');
            var sd = 29;
            var srnd = function () { sd = (sd * 48271) % 2147483647; return sd / 2147483647; };
            for (var k = 0; k < 70; k++) {
              var x = srnd() * 390, y = 10 + srnd() * 1380, r = 0.5 + srnd() * 0.7, a = 0.18 + srnd() * 0.42;
              var fade = SH * 0.57; if (y > fade) { a *= Math.max(0, 1 - (y - fade) / (SH - fade)); }
              if (a < 0.03) { continue; }
              if (k % 8 === 0) {
                var gr = s2.createRadialGradient(x, y, 0, x, y, 4);
                gr.addColorStop(0, 'rgba(232,240,248,' + (a * 0.5).toFixed(3) + ')');
                gr.addColorStop(1, 'rgba(232,240,248,0)');
                s2.fillStyle = gr; s2.beginPath(); s2.arc(x, y, 4, 0, Math.PI * 2); s2.fill();
              }
              s2.fillStyle = 'rgba(232,240,248,' + a.toFixed(3) + ')';
              s2.beginPath(); s2.arc(x, y, r, 0, Math.PI * 2); s2.fill();
            }
          } catch (e) {}

          var grad = window.__fxGrad || root.querySelector('#lightGrad');
          var flashes = root.querySelectorAll('.flare, .haloflash');
          var pulse = function () {
            root.classList.add('awake');
            for (var k = 0; k < flashes.length; k++) {
              flashes[k].classList.remove('go');
              void flashes[k].getBoundingClientRect();
              flashes[k].classList.add('go');
            }
          };
          if (reduce) { root.classList.add('awake'); root.classList.add('done'); }
          else {
            this._t1 = setTimeout(pulse, 4800);
            this._t2 = setTimeout(function () { root.classList.add('done'); }, 6400);
          }
          var hero = root.querySelector('.hero');
          var move = function (e) {
            if (!grad || !hero) { return; }
            var r = hero.getBoundingClientRect();
            if (e.clientY < r.top || e.clientY > r.bottom) { return; }
            var ux = ((e.clientX - r.left) / Z() - 85) / 220 * 1280;
            var uy = ((e.clientY - r.top) / Z() - 88) / 220 * 1280;
            grad.setAttribute('cx', ux.toFixed(2));
            grad.setAttribute('cy', uy.toFixed(2));
          };
          root.addEventListener('pointermove', move);
          root.addEventListener('pointerdown', move);

          var mbtn = root.querySelector('.mbtn');
          if (mbtn) {
            mbtn.addEventListener('click', function () {
              var open = root.classList.toggle('menu-open');
              mbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
          }
          var scrollable = function () { return document.documentElement.scrollHeight > window.innerHeight + 40; };
          var anchors = root.querySelectorAll('a[href^="#"]');
          for (var a2 = 0; a2 < anchors.length; a2++) {
            anchors[a2].addEventListener('click', function (ev) {
              var id = this.getAttribute('href').slice(1);
              root.classList.remove('menu-open');
              if (mbtn) { mbtn.setAttribute('aria-expanded', 'false'); }
              var el = id === 'top' ? document.querySelector('.page') : document.getElementById(id);
              if (!el) { return; }
              ev.preventDefault();
              if (!scrollable()) { return; }
              var r = el.getBoundingClientRect();
              var y = r.top + (window.scrollY || 0);
              var top = y - headerOffset();
              window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
            });
          }

          var revealables = root.querySelectorAll('.rv, .rvsec');
          if ('IntersectionObserver' in window && !reduce) {
            this._io = new IntersectionObserver(function (en) {
              for (var i = 0; i < en.length; i++) {
                if (!en[i].isIntersecting) { continue; }
                en[i].target.classList.add('on');
                self._io.unobserve(en[i].target);
              }
            }, { threshold: 0.12 });
            for (var r2 = 0; r2 < revealables.length; r2++) { this._io.observe(revealables[r2]); }
          } else {
            for (var r3 = 0; r3 < revealables.length; r3++) { revealables[r3].classList.add('on'); }
          }
  
    }).call({});
    (function () {
          var root = document.querySelector('.page');
          if (!root) { return; }
          var self = this;
          var reduce = false;
          try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
          var grain = root.querySelector('.grain');
          try {
            var gc = document.createElement('canvas');
            gc.width = 192; gc.height = 192;
            var g2 = gc.getContext('2d');
            var img = g2.createImageData(192, 192);
            var px = img.data;
            var seed = 11;
            var rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
            for (var i = 0; i < px.length; i += 4) { var v = 88 + Math.floor(rnd() * 80); var dk = v < 128; px[i] = px[i + 1] = px[i + 2] = dk ? 0 : 255; px[i + 3] = dk ? Math.round((128 - v) / 40 * 14) : Math.round((v - 128) / 40 * 3); }
            g2.putImageData(img, 0, 0);
            if (grain) { grain.style.backgroundImage = 'url(' + gc.toDataURL() + ')'; }
          } catch (e) {}
          var mbtn = root.querySelector('.mbtn');
          if (mbtn) {
            mbtn.addEventListener('click', function () {
              var open = root.classList.toggle('menu-open');
              mbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
          }
          var scrollable = function () { return document.documentElement.scrollHeight > window.innerHeight + 40; };
          var anchors = root.querySelectorAll('a[href^="#"]');
          for (var a2 = 0; a2 < anchors.length; a2++) {
            anchors[a2].addEventListener('click', function (ev) {
              var id = this.getAttribute('href').slice(1);
              root.classList.remove('menu-open');
              if (mbtn) { mbtn.setAttribute('aria-expanded', 'false'); }
              var el = id === 'top' ? document.querySelector('.page') : document.getElementById(id);
              if (!el) { return; }
              ev.preventDefault();
              if (!scrollable()) { return; }
              var r = el.getBoundingClientRect();
              window.scrollTo({ top: Math.max(0, r.top + (window.scrollY || 0) - headerOffset()), behavior: 'smooth' });
            });
          }
          var revealables = root.querySelectorAll('.rv, .rvsec');
          if ('IntersectionObserver' in window && !reduce) {
            this._io = new IntersectionObserver(function (en) {
              for (var i = 0; i < en.length; i++) {
                if (!en[i].isIntersecting) { continue; }
                en[i].target.classList.add('on');
                self._io.unobserve(en[i].target);
              }
            }, { threshold: 0.12 });
            for (var r2 = 0; r2 < revealables.length; r2++) { this._io.observe(revealables[r2]); }
          } else {
            for (var r3 = 0; r3 < revealables.length; r3++) { revealables[r3].classList.add('on'); }
          }
  
    }).call({});
  }

  var bez = function (x1, y1, x2, y2) {
    var cx = 3 * x1, bxx = 3 * (x2 - x1) - cx, ax = 1 - cx - bxx;
    var cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    return function (x) {
      if (x <= 0) { return 0; }
      if (x >= 1) { return 1; }
      var lo = 0, hi = 1, t = x;
      for (var i = 0; i < 22; i++) { t = (lo + hi) / 2; if (((ax * t + bxx) * t + cx) * t < x) { lo = t; } else { hi = t; } }
      return ((ay * t + by) * t + cy) * t;
    };
  };

  // WebGL: one full-canvas quad and a fragment shader. Returns null when WebGL or the shader is
  // unavailable, and the caller falls back.
  var GLSL_HEAD = [
    '#ifdef GL_FRAGMENT_PRECISION_HIGH',
    'precision highp float;',
    '#else',
    'precision mediump float;',
    '#endif',
    'uniform vec2 u_res; uniform float u_S;',
    'float Phi(float x){ x = clamp(x, -8.0, 8.0); return 1.0 / (1.0 + exp(-1.5976 * x - 0.070566 * x * x * x)); }',
    'void seg(int i, out vec2 A, out vec2 B){',
    '  if (i == 0) { A = vec2(360.0, 160.0); B = vec2(360.0, 1120.0); }',
    '  else if (i == 1) { A = vec2(920.0, 160.0); B = vec2(920.0, 1120.0); }',
    '  else if (i == 2) { A = vec2(360.0, 240.0); B = vec2(920.0, 640.0); }',
    '  else { A = vec2(360.0, 600.0); B = vec2(920.0, 1000.0); }',
    '}',
    'vec2 P(){ return vec2(gl_FragCoord.x, u_res.y - gl_FragCoord.y) / u_S; }'
  ].join('\n');

  // The carving: each stroke's blur is computed exactly (a Gaussian-blurred rectangle for square
  // and butt caps, a blurred capsule for the round head), with the canvas design's widths,
  // blurs, colours and layer order; strokes in one layer are joined as a union.
  var CARVE_FS = GLSL_HEAD + '\n' + [
    'uniform float u_cut[4]; uniform float u_ha[4]; uniform float u_hb[4]; uniform float u_cool[4]; uniform float u_hcool[4];',
    'float rectB(vec2 p, vec2 A, vec2 B, float a, float b, float h, float e, float sg){',
    '  vec2 d = B - A; float L = length(d); vec2 dir = d / L; vec2 nr = vec2(-dir.y, dir.x);',
    '  vec2 q = p - A; float u = dot(q, dir); float v = dot(q, nr);',
    '  float u0 = a * L - e; float u1 = b * L + e; float m = 3.5 * sg;',
    '  if (abs(v) > h + m || u < u0 - m || u > u1 + m) { return 0.0; }',
    '  return (Phi((u - u0) / sg) - Phi((u - u1) / sg)) * (Phi((v + h) / sg) - Phi((v - h) / sg));',
    '}',
    'float capB(vec2 p, vec2 A, vec2 B, float a, float b, float r, float sg){',
    '  vec2 d = B - A; vec2 P0 = A + d * a; vec2 pd = d * (b - a);',
    '  float tt = clamp(dot(p - P0, pd) / max(dot(pd, pd), 0.0001), 0.0, 1.0);',
    '  float dist = length(p - (P0 + pd * tt)) - r;',
    '  if (dist > 3.5 * sg) { return 0.0; }',
    '  return Phi(-dist / sg);',
    '}',
    'vec4 over(vec4 dst, vec3 c, float a){ return vec4(c * a + dst.rgb * (1.0 - a), a + dst.a * (1.0 - a)); }',
    'void main(){',
    '  vec2 p = P();',
    '  float k0 = 1.0; float k1 = 1.0; float k2 = 1.0; float k3 = 1.0; float k4 = 1.0;',
    '  for (int i = 0; i < 4; i++) {',
    '    vec2 A; vec2 B; seg(i, A, B);',
    '    float c = u_cut[i]; float own = i < 2 ? 1.0 : 0.0;',
    '    if (c > 0.0001) {',
    '      k0 *= 1.0 - rectB(p, A, B, 0.0, c, 85.0, 85.0, 36.0);',
    '      k1 *= 1.0 - rectB(p, A, B, 0.0, c, 60.0, 60.0 * own, 2.4);',
    '      if (u_cool[i] > 0.001) { k2 *= 1.0 - u_cool[i] * rectB(p, A, B, 0.0, c, 62.0, 62.0 * own, 4.4); }',
    '    }',
    '    float ha = u_ha[i]; float hb = u_hb[i];',
    '    if (hb - ha > 0.0001 && u_hcool[i] > 0.001) {',
    '      k3 *= 1.0 - u_hcool[i] * capB(p, A, B, ha, hb, 120.0, 36.0);',
    '      k4 *= 1.0 - u_hcool[i] * capB(p, A, B, ha, hb, 70.0, 4.4);',
    '    }',
    '  }',
    '  vec4 o = vec4(0.0);',
    '  o = over(o, vec3(0.5529, 0.7059, 0.8627), 1.0 - k0);',
    '  o = over(o, vec3(0.7373, 0.8314, 0.9176), 1.0 - k1);',
    '  o = over(o, vec3(1.0), 1.0 - k2);',
    '  o = over(o, vec3(0.5529, 0.7059, 0.8627), 0.6 * (1.0 - k3));',
    '  o = over(o, vec3(1.0), 1.0 - k4);',
    '  gl_FragColor = o;',
    '}'
  ].join('\n');

  // The light on the finished mark: the radial light and the specular sweep, clipped to the
  // mark's strokes, as the canvas design's SVG gradient, sweep stripe and mask.
  var LIGHT_FS = GLSL_HEAD + '\n' + [
    'uniform vec2 u_L; uniform float u_r; uniform float u_tx; uniform float u_spec;',
    'float sdR(vec2 p, vec2 A, vec2 B, float h, float e){',
    '  vec2 d = B - A; float L = length(d); vec2 dir = d / L; vec2 nr = vec2(-dir.y, dir.x);',
    '  vec2 q = p - A; vec2 w = abs(vec2(dot(q, dir) - L * 0.5, dot(q, nr))) - vec2(L * 0.5 + e, h);',
    '  return length(max(w, 0.0)) + min(max(w.x, w.y), 0.0);',
    '}',
    'void main(){',
    '  vec2 p = P();',
    '  float cov = 0.0;',
    '  for (int i = 0; i < 4; i++) {',
    '    vec2 A; vec2 B; seg(i, A, B);',
    '    float e = i < 2 ? 60.0 : 0.0;',
    '    cov = max(cov, clamp(0.5 - sdR(p, A, B, 60.0, e) * u_S, 0.0, 1.0));',
    '  }',
    '  if (cov <= 0.0) { gl_FragColor = vec4(0.0); return; }',
    '  float t = distance(p, u_L) / u_r;',
    '  vec3 c = vec3(0.5529, 0.7059, 0.8627); float a = 0.0;',
    '  if (t < 0.45) { float f = t / 0.45; c = mix(vec3(0.6588, 0.7804, 0.9098), c, f); a = mix(0.95, 0.35, f); }',
    '  else if (t < 1.0) { a = mix(0.35, 0.0, (t - 0.45) / 0.55); }',
    '  vec4 o = vec4(c * a, a);',
    '  if (u_spec > 0.5) {',
    '    float pr = dot(p - vec2(-800.0 + u_tx, 640.0), vec2(0.8, 0.6));',
    '    float s = 0.55 * max(0.0, 1.0 - abs(pr) / 500.0);',
    '    o = vec4(vec3(s) + o.rgb * (1.0 - s), s + o.a * (1.0 - s));',
    '  }',
    '  gl_FragColor = o * cov;',
    '}'
  ].join('\n');

  var makeGL = function (canvas, fsrc) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false });
    } catch (e) { gl = null; }
    if (!gl) { return null; }
    var sh = function (type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    var v = sh(gl.VERTEX_SHADER, 'attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }');
    var f = sh(gl.FRAGMENT_SHADER, fsrc);
    if (!v || !f) { return null; }
    var pr = gl.createProgram();
    gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { return null; }
    gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var U = {};
    return {
      gl: gl,
      u: function (n) { if (!(n in U)) { U[n] = gl.getUniformLocation(pr, n); } return U[n]; },
      draw: function () {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      },
      lose: function () { var x = gl.getExtension('WEBGL_lose_context'); if (x) { x.loseContext(); } }
    };
  };

  var fxSize = function (box) {
    return Math.max(64, Math.round(box * window.__AS.Z * Math.min(window.devicePixelRatio || 1, 2)));
  };

  // The light on the mark, drawn by the GPU. The board script keeps driving it through the same
  // three attributes it set on the SVG gradient; the SVG stays in place as the fallback.
  function lightFX(layer, box, spec) {
    if (!layer) { return; }
    var cvs = layer.querySelector('.runefx');
    if (!cvs) { return; }
    var px = fxSize(box);
    cvs.width = px; cvs.height = px;
    var g = makeGL(cvs, LIGHT_FS);
    if (!g) { cvs.parentNode.removeChild(cvs); return; }
    layer.classList.add('fxon');
    var st = { cx: 800, cy: 520, r: 520 }, T0 = performance.now(), queued = false, sweep = bez(.4, 0, .5, 1);
    var draw = function () {
      queued = false;
      var tau = (performance.now() - T0) / 1000, tx = 0;
      if (spec && tau >= 6.6) {
        var ph = ((tau - 6.6) % 9) / 9;
        tx = ph < .16 ? 2900 * sweep(ph / .16) : 2900;
      }
      var gl = g.gl;
      gl.uniform2f(g.u('u_res'), px, px);
      gl.uniform1f(g.u('u_S'), px / 1280);
      gl.uniform2f(g.u('u_L'), st.cx, st.cy);
      gl.uniform1f(g.u('u_r'), st.r);
      gl.uniform1f(g.u('u_tx'), tx);
      gl.uniform1f(g.u('u_spec'), spec ? 1 : 0);
      g.draw();
    };
    window.__fxGrad = {
      setAttribute: function (n, v) {
        st[n] = parseFloat(v);
        if (!queued) { queued = true; Promise.resolve().then(draw); }
      }
    };
    draw();
  }

  function carveIntro(wrap, box) {
    // The carving (0 to 4.8 s), frame by frame, with the canvas design's timings, easings,
    // widths, colours and blurs; at 4.8 s, under the flash, the static rune layers take over
    // and the canvas is dropped. The GPU draws it; without WebGL a 2D canvas with shadow blur
    // does, and without that the finished rune simply shows.
    if (!wrap) { return; }
    var cvs = wrap.querySelector('.carvecv');
    var gpu = null;
    var finish = function () {
      wrap.classList.remove('carving');
      if (gpu) { gpu.lose(); }
      if (cvs) { cvs.width = 0; cvs.height = 0; cvs.style.display = 'none'; }
    };
    var reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    if (reduce || !cvs) { finish(); return; }
    var px = fxSize(box);
    cvs.width = px; cvs.height = px;
    gpu = makeGL(cvs, CARVE_FS);
    var ctx = null;
    if (!gpu) {
      // a canvas that tried WebGL cannot switch to 2D: use a fresh one
      var fresh = cvs.cloneNode(false);
      cvs.parentNode.replaceChild(fresh, cvs);
      cvs = fresh;
      cvs.width = px; cvs.height = px;
      ctx = cvs.getContext ? cvs.getContext('2d') : null;
      if (!ctx) { finish(); return; }
    }
    var E = [bez(.6, 0, .9, .4), bez(.25, 0, .55, 1), bez(.15, .45, .3, 1)], EO = bez(0, 0, .58, 1);
    var STOP = [0, .24, .74, 1];
    var kf = function (p, v) {
      var k = p < .24 ? 0 : (p < .74 ? 1 : 2);
      return v[k] + (v[k + 1] - v[k]) * E[k]((p - STOP[k]) / (STOP[k + 1] - STOP[k]));
    };
    var CUT = [1, .9, .2, 0], HEAD = [.13, .03, -.67, -.87];
    // x1, y1, x2, y2, cap, cut start, cut length, head lead-in start, lead-in length, cool start
    var LN = [
      [360, 160, 360, 1120, 'square', .7, .85, .5, .2, 1.55],
      [920, 160, 920, 1120, 'square', 1.95, .85, 1.75, .2, 2.8],
      [360, 240, 920, 640, 'butt', 3.15, .65, 3, .15, 3.8],
      [360, 600, 920, 1000, 'butt', 4.1, .65, 3.95, .15, 4.75]
    ];
    var state = function (t) {
      var out = [];
      for (var i = 0; i < 4; i++) {
        var L = LN[i];
        var o = t < L[5] ? 1 : (t >= L[5] + L[6] ? 0 : kf((t - L[5]) / L[6], CUT));
        var h = t < L[7] ? .16 : (t < L[7] + L[8] ? .16 - .03 * EO((t - L[7]) / L[8]) : (t < L[5] + L[6] ? kf((t - L[5]) / L[6], HEAD) : -.87));
        out.push({
          cut: 1 - o, ha: Math.max(0, -h), hb: Math.min(1, .16 - h),
          cool: t < L[9] ? 1 : 1 - EO(Math.min(1, (t - L[9]) / .35)),
          hcool: t < L[9] ? 1 : 1 - EO(Math.min(1, (t - L[9]) / .3))
        });
      }
      return out;
    };
    var paint;
    if (gpu) {
      var A = { cut: new Float32Array(4), ha: new Float32Array(4), hb: new Float32Array(4), cool: new Float32Array(4), hcool: new Float32Array(4) };
      gpu.gl.uniform2f(gpu.u('u_res'), px, px);
      gpu.gl.uniform1f(gpu.u('u_S'), px / 1280);
      paint = function (st) {
        for (var i = 0; i < 4; i++) {
          A.cut[i] = st[i].cut; A.ha[i] = st[i].ha; A.hb[i] = st[i].hb; A.cool[i] = st[i].cool; A.hcool[i] = st[i].hcool;
        }
        var gl = gpu.gl;
        gl.uniform1fv(gpu.u('u_cut'), A.cut);
        gl.uniform1fv(gpu.u('u_ha'), A.ha);
        gl.uniform1fv(gpu.u('u_hb'), A.hb);
        gl.uniform1fv(gpu.u('u_cool'), A.cool);
        gl.uniform1fv(gpu.u('u_hcool'), A.hcool);
        gpu.draw();
      };
    } else {
      // Blur is a canvas shadow: strokes in the left half of a double-width buffer, their
      // shadow offset one width into the right half, which is what gets drawn.
      var mk = function (w) {
        var c = document.createElement('canvas');
        c.width = w * 2; c.height = w;
        return { c: c, x: c.getContext('2d'), w: w };
      };
      var full = mk(px), quarter = mk(Math.max(32, Math.round(px / 4)));
      var S = px / 1280;
      var layer = function (st, kind, width, colour, cap, blur, alpha, low) {
        var B = low ? quarter : full, bx = B.x, w = B.w, k = S * w / px;
        bx.shadowColor = 'transparent';
        bx.globalAlpha = 1;
        bx.clearRect(0, 0, w * 2, w);
        var any = false;
        for (var i = 0; i < 4; i++) {
          var L = LN[i], s = st[i];
          var a = kind === 'head' ? s.ha : 0, b = kind === 'head' ? s.hb : s.cut;
          var al = kind === 'hot' ? s.cool : (kind === 'head' ? s.hcool : 1);
          if (b - a < 1e-4 || al <= 0.001) { continue; }
          any = true;
          bx.globalAlpha = al;
          bx.lineCap = cap || L[4];
          bx.lineWidth = width * k;
          bx.strokeStyle = colour;
          bx.shadowColor = colour;
          bx.shadowBlur = 2 * blur * k;
          bx.shadowOffsetX = w;
          bx.shadowOffsetY = 0;
          bx.beginPath();
          bx.moveTo((L[0] + (L[2] - L[0]) * a) * k, (L[1] + (L[3] - L[1]) * a) * k);
          bx.lineTo((L[0] + (L[2] - L[0]) * b) * k, (L[1] + (L[3] - L[1]) * b) * k);
          bx.stroke();
        }
        if (!any) { return; }
        ctx.globalAlpha = alpha;
        ctx.drawImage(B.c, w, 0, w, w, 0, 0, px, px);
        ctx.globalAlpha = 1;
      };
      paint = function (st) {
        ctx.clearRect(0, 0, px, px);
        layer(st, 'cut', 170, '#8db4dc', 'square', 36, 1, true);
        layer(st, 'cut', 120, '#bcd4ea', null, 2.4, 1, false);
        layer(st, 'hot', 124, '#ffffff', null, 4.4, 1, false);
        layer(st, 'head', 240, '#8db4dc', 'round', 36, .6, true);
        layer(st, 'head', 140, '#ffffff', 'round', 4.4, 1, false);
      };
    }
    var t0 = null;
    var frame = function (ts) {
      if (t0 === null) { t0 = ts; }
      var t = (ts - t0) / 1000;
      if (t >= 4.8) { finish(); return; }
      paint(state(t));
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  function pauseOffscreen() {
    var secs = document.querySelectorAll('.sec');
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < secs.length; i++) { secs[i].classList.add('inview'); }
      return;
    }
    var io = new IntersectionObserver(function (en) {
      for (var i = 0; i < en.length; i++) { en[i].target.classList.toggle('inview', en[i].isIntersecting); }
    }, { rootMargin: '200px 0px' });
    for (var j = 0; j < secs.length; j++) { io.observe(secs[j]); }
  }

  function wireForms() {
    var forms = document.querySelectorAll('form[data-mail]');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function (ev) {
        ev.preventDefault();
        var f = this;
        if (f.company_site && f.company_site.value) { return; }
        var what = (f.decision && f.decision.value || '').trim();
        var from = (f.email && f.email.value || '').trim();
        var body = what + '\n\n' + from;
        window.location.href = 'mailto:a.skurlatov@gmail.com?subject=' +
          encodeURIComponent('Book a call') + '&body=' + encodeURIComponent(body);
      });
    }
  }

  var stack = document.querySelector('.page .stackwrap');
  var size = stack ? Math.round(stack.getBoundingClientRect().width) || 220 : 220;
  lightFX(document.querySelector('.page .l7'), size, size > 400);
  runPhone();
  carveIntro(stack, size);
  pauseOffscreen();
  wireForms();
})();

/* The first screen's exit. The rune flies to the header and hands over to
   the lockup's mark; the light rig and the text column clear out behind it.
   Measured from the live boxes, so it holds at any width. Desktop only,
   which is where it existed. */
(function () {
  var mq = window.matchMedia('(min-width: 1000px)');
  var hero = document.querySelector('.page .hero');
  var fly = document.querySelector('.page .fly');
  var lkFull = document.querySelector('.page .lk-full');
  var lkWord = document.querySelector('.page .lk-word');
  var dark = document.querySelector('.page .hero .dark');
  var lights = document.querySelector('.page .hero .lights, .page .hero .px');
  var shafts = document.querySelector('.page .hero .shafts');
  var col = document.querySelector('.page .hero .col');
  var cue = document.querySelector('.page .hero .cue, .page .hero .cuewrap, .page .hero .in.d6');
  if (!hero || !fly || !lkFull) { return; }
  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var baseX = 0, baseY = 0, targetX = 0, targetY = 0, S = 0.05, RANGE = 1, live = false;
  var clamp = function (v, a, b) { return v < a ? a : (v > b ? b : v); };

  function reset() {
    fly.style.transform = ''; fly.style.opacity = '';
    lkFull.style.opacity = ''; if (lkWord) { lkWord.style.opacity = ''; }
    if (dark) { dark.style.opacity = ''; }
    if (lights) { lights.style.opacity = ''; }
    if (shafts) { shafts.style.opacity = ''; shafts.style.transform = ''; }
    if (col) { col.style.transform = ''; col.style.opacity = ''; }
    if (cue) { cue.style.removeProperty('opacity'); cue.style.pointerEvents = ''; }
  }

  function measure() {
    live = mq.matches && !reduce;
    if (!live) { reset(); }
    var prev = fly.style.transform;
    fly.style.transform = 'none';
    var f = fly.getBoundingClientRect();
    fly.style.transform = prev;
    var sy = window.scrollY || 0;
    /* the light rig is anchored to the rune, not to a share of the viewport,
       so it stays on axis once the hero runs full bleed */
    var hr = hero.getBoundingClientRect();
    hero.style.setProperty('--rune-x', Math.round(f.left + f.width / 2 - hr.left) + 'px');
    hero.style.setProperty('--rune-y', Math.round(f.top + f.height / 2 - hr.top) + 'px');
    /* the rune's resting centre in document space: it scrolls, the header does not */
    baseX = f.left + f.width / 2;
    baseY = f.top + f.height / 2 + sy;
    var t = lkFull.getBoundingClientRect();
    /* the mark is the leading square of the lockup, and the header is fixed */
    targetX = t.left + t.height / 2;
    targetY = t.top + t.height / 2;
    S = t.height / Math.max(1, f.width);
    RANGE = Math.max(1, hr.height * 0.85);
  }

  function apply() {
    if (!live) { return; }
    var p = clamp((window.scrollY || 0) / RANGE, 0, 1);
    var e = p * p * (3 - 2 * p);
    var cross = clamp((e - 0.86) / 0.14, 0, 1);
    var sy = window.scrollY || 0;
    var tx = targetX - baseX;
    var ty = targetY - (baseY - sy);
    fly.style.transform = 'translate(' + (tx * e).toFixed(2) + 'px,' + (ty * e).toFixed(2) + 'px) scale(' + (1 - (1 - S) * e).toFixed(4) + ')';
    fly.style.opacity = (1 - cross).toFixed(3);
    lkFull.style.opacity = cross.toFixed(3);
    if (dark) { dark.style.opacity = (0.62 * e).toFixed(3); }
    if (lights) { lights.style.opacity = (1 - e).toFixed(3); }
    if (shafts) {
      shafts.style.opacity = (1 - e).toFixed(3);
      shafts.style.transform = 'scaleX(' + (1 - 0.92 * e).toFixed(3) + ')';
    }
    if (col) {
      col.style.transform = 'translateY(' + (-140 * e).toFixed(1) + 'px)';
      col.style.opacity = clamp(1 - e * 1.7, 0, 1).toFixed(3);
    }
    if (cue) {
      var co = clamp(1 - e * 5, 0, 1);
      /* important, or the first-screen entrance animation's fill keeps winning */
      cue.style.setProperty('opacity', co.toFixed(3), 'important');
      cue.style.pointerEvents = co < 0.05 ? 'none' : '';
    }
  }

  var ticking = false;
  function onScroll() {
    if (ticking) { return; }
    ticking = true;
    requestAnimationFrame(function () { apply(); ticking = false; });
  }
  measure(); apply();
  /* the hero's boxes move when the webfonts land, so aim again afterwards */
  window.addEventListener('load', function () { measure(); apply(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { measure(); apply(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { measure(); apply(); });
  if (mq.addEventListener) { mq.addEventListener('change', function () { measure(); apply(); }); }
})();

/* The desktop bar is transparent over the first screen and takes its veil
   once the page moves. Lived in runDesk() on the canvas; the phone bar was
   always veiled, so nothing carried it across. */
(function () {
  var page = document.querySelector('.page');
  if (!page) { return; }
  var on = null;
  function sync() {
    var next = (window.scrollY || 0) > 8;
    if (next !== on) { on = next; page.classList.toggle('scrolled', next); }
  }
  var ticking = false;
  sync();
  window.addEventListener('scroll', function () {
    if (ticking) { return; }
    ticking = true;
    requestAnimationFrame(function () { sync(); ticking = false; });
  }, { passive: true });
})();

/* Calendly, loaded on demand. The link is a real link: with no JavaScript,
   or if the script fails, it opens the booking page in a new tab. On click
   we load the widget once and hand the panel over to it instead. */
(function () {
  var link = document.querySelector('.page [data-calendly]');
  if (!link) { return; }
  var panel = link.closest('.cvis');
  var url = link.getAttribute('href');
  if (!panel || !url || url.indexOf('REPLACE-ME') > -1) { return; }

  /* the widget in the practice's own colours */
  function embedUrl() {
    var css = getComputedStyle(document.documentElement);
    var hex = function (name, fallback) {
      var v = (css.getPropertyValue(name) || '').trim().replace('#', '');
      return v || fallback;
    };
    var q = url.indexOf('?') > -1 ? '&' : '?';
    return url + q + 'hide_gdpr_banner=1' +
      /* the page already says whose call it is and that it runs 30 minutes,
         so Calendly's own event header is repetition that costs height */
      '&hide_event_type_details=1' +
      '&hide_landing_page_details=1' +
      '&background_color=' + hex('--bg', '17140f') +
      '&text_color=' + hex('--text', 'ede7db') +
      '&primary_color=' + hex('--accent', '8db4dc');
  }

  var loading = false;
  function load(cb) {
    if (window.Calendly) { cb(); return; }
    if (loading) { return; }
    loading = true;
    var s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    s.onload = function () { cb(); };
    s.onerror = function () { loading = false; panel.classList.remove('loading'); window.open(url, '_blank', 'noopener'); };
    document.head.appendChild(s);
  }

  var opened = false;
  function open() {
    if (opened) { return; }
    opened = true;
    panel.classList.add('loading');
    load(function () {
      panel.classList.remove('loading');
      panel.classList.add('booking');
      window.Calendly.initInlineWidget({ url: embedUrl(), parentElement: panel });
    });
  }

  link.addEventListener('click', function (ev) {
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button) { return; }
    ev.preventDefault();
    open();
  });

  /* Open it as the contact section comes within reach, so nobody has to press
     anything, without loading a third party for the many who never scroll
     this far. The button stays as the fallback when there is no observer. */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) { io.disconnect(); open(); return; }
      }
    }, { rootMargin: '600px 0px' });
    io.observe(panel);
  }
})();

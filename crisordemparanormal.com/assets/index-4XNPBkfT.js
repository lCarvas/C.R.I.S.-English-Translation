(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function id(t, e) {
  const n = Object.create(null),
    r = t.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const Me = {},
  bi = [],
  ln = () => {},
  S0 = () => !1,
  q0 = /^on[^a-z]/,
  ol = (t) => q0.test(t),
  sd = (t) => t.startsWith("onUpdate:"),
  We = Object.assign,
  od = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  x0 = Object.prototype.hasOwnProperty,
  Te = (t, e) => x0.call(t, e),
  ie = Array.isArray,
  Ei = (t) => ho(t) === "[object Map]",
  lg = (t) => ho(t) === "[object Set]",
  R0 = (t) => ho(t) === "[object RegExp]",
  de = (t) => typeof t == "function",
  Be = (t) => typeof t == "string",
  al = (t) => typeof t == "symbol",
  Ve = (t) => t !== null && typeof t == "object",
  cg = (t) => (Ve(t) || de(t)) && de(t.then) && de(t.catch),
  ug = Object.prototype.toString,
  ho = (t) => ug.call(t),
  P0 = (t) => ho(t).slice(8, -1),
  dg = (t) => ho(t) === "[object Object]",
  ad = (t) =>
    Be(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  la = id(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  ll = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  O0 = /-(\w)/g,
  dn = ll((t) => t.replace(O0, (e, n) => (n ? n.toUpperCase() : ""))),
  D0 = /\B([A-Z])/g,
  ri = ll((t) => t.replace(D0, "-$1").toLowerCase()),
  cl = ll((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  ca = ll((t) => (t ? `on${cl(t)}` : "")),
  Qr = (t, e) => !Object.is(t, e),
  Ti = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  Ta = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  nu = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  N0 = (t) => {
    const e = Be(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let Jh;
const ru = () =>
  Jh ||
  (Jh =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function cr(t) {
  if (ie(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = Be(r) ? V0(r) : cr(r);
      if (i) for (const s in i) e[s] = i[s];
    }
    return e;
  } else if (Be(t) || Ve(t)) return t;
}
const L0 = /;(?![^(]*\))/g,
  M0 = /:([^]+)/,
  $0 = /\/\*[^]*?\*\//g;
function V0(t) {
  const e = {};
  return (
    t
      .replace($0, "")
      .split(L0)
      .forEach((n) => {
        if (n) {
          const r = n.split(M0);
          r.length > 1 && (e[r[0].trim()] = r[1].trim());
        }
      }),
    e
  );
}
function Ne(t) {
  let e = "";
  if (Be(t)) e = t;
  else if (ie(t))
    for (let n = 0; n < t.length; n++) {
      const r = Ne(t[n]);
      r && (e += r + " ");
    }
  else if (Ve(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
function F0(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !Be(e) && (t.class = Ne(e)), n && (t.style = cr(n)), t;
}
const U0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  B0 = id(U0);
function hg(t) {
  return !!t || t === "";
}
const ur = (t) =>
    Be(t)
      ? t
      : t == null
      ? ""
      : ie(t) || (Ve(t) && (t.toString === ug || !de(t.toString)))
      ? JSON.stringify(t, fg, 2)
      : String(t),
  fg = (t, e) =>
    e && e.__v_isRef
      ? fg(t, e.value)
      : Ei(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [r, i]) => ((n[`${r} =>`] = i), n),
            {}
          ),
        }
      : lg(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : Ve(e) && !ie(e) && !dg(e)
      ? String(e)
      : e;
let Lt;
class j0 {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Lt),
      !e && Lt && (this.index = (Lt.scopes || (Lt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = Lt;
      try {
        return (Lt = this), e();
      } finally {
        Lt = n;
      }
    }
  }
  on() {
    Lt = this;
  }
  off() {
    Lt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function H0(t, e = Lt) {
  e && e.active && e.effects.push(t);
}
function pg() {
  return Lt;
}
function z0(t) {
  Lt && Lt.cleanups.push(t);
}
const ld = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  mg = (t) => (t.w & gr) > 0,
  gg = (t) => (t.n & gr) > 0,
  W0 = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= gr;
  },
  K0 = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        mg(i) && !gg(i) ? i.delete(t) : (e[n++] = i),
          (i.w &= ~gr),
          (i.n &= ~gr);
      }
      e.length = n;
    }
  },
  Ia = new WeakMap();
let gs = 0,
  gr = 1;
const iu = 30;
let Yt;
const jr = Symbol(""),
  su = Symbol("");
class cd {
  constructor(e, n = null, r) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      H0(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Yt,
      n = dr;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Yt),
        (Yt = this),
        (dr = !0),
        (gr = 1 << ++gs),
        gs <= iu ? W0(this) : Zh(this),
        this.fn()
      );
    } finally {
      gs <= iu && K0(this),
        (gr = 1 << --gs),
        (Yt = this.parent),
        (dr = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Yt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Zh(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Zh(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let dr = !0;
const vg = [];
function ts() {
  vg.push(dr), (dr = !1);
}
function ns() {
  const t = vg.pop();
  dr = t === void 0 ? !0 : t;
}
function Ot(t, e, n) {
  if (dr && Yt) {
    let r = Ia.get(t);
    r || Ia.set(t, (r = new Map()));
    let i = r.get(n);
    i || r.set(n, (i = ld())), yg(i);
  }
}
function yg(t, e) {
  let n = !1;
  gs <= iu ? gg(t) || ((t.n |= gr), (n = !mg(t))) : (n = !t.has(Yt)),
    n && (t.add(Yt), Yt.deps.push(t));
}
function En(t, e, n, r, i, s) {
  const o = Ia.get(t);
  if (!o) return;
  let a = [];
  if (e === "clear") a = [...o.values()];
  else if (n === "length" && ie(t)) {
    const l = Number(r);
    o.forEach((c, u) => {
      (u === "length" || (!al(u) && u >= l)) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(o.get(n)), e)) {
      case "add":
        ie(t)
          ? ad(n) && a.push(o.get("length"))
          : (a.push(o.get(jr)), Ei(t) && a.push(o.get(su)));
        break;
      case "delete":
        ie(t) || (a.push(o.get(jr)), Ei(t) && a.push(o.get(su)));
        break;
      case "set":
        Ei(t) && a.push(o.get(jr));
        break;
    }
  if (a.length === 1) a[0] && ou(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    ou(ld(l));
  }
}
function ou(t, e) {
  const n = ie(t) ? t : [...t];
  for (const r of n) r.computed && ef(r);
  for (const r of n) r.computed || ef(r);
}
function ef(t, e) {
  (t !== Yt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function G0(t, e) {
  var n;
  return (n = Ia.get(t)) == null ? void 0 : n.get(e);
}
const Q0 = id("__proto__,__v_isRef,__isVue"),
  _g = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(al)
  ),
  tf = Y0();
function Y0() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const r = be(this);
        for (let s = 0, o = this.length; s < o; s++) Ot(r, "get", s + "");
        const i = r[e](...n);
        return i === -1 || i === !1 ? r[e](...n.map(be)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        ts();
        const r = be(this)[e].apply(this, n);
        return ns(), r;
      };
    }),
    t
  );
}
function X0(t) {
  const e = be(this);
  return Ot(e, "has", t), e.hasOwnProperty(t);
}
class wg {
  constructor(e = !1, n = !1) {
    (this._isReadonly = e), (this._shallow = n);
  }
  get(e, n, r) {
    const i = this._isReadonly,
      s = this._shallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw" && r === (i ? (s ? ub : Ig) : s ? Tg : Eg).get(e))
      return e;
    const o = ie(e);
    if (!i) {
      if (o && Te(tf, n)) return Reflect.get(tf, n, r);
      if (n === "hasOwnProperty") return X0;
    }
    const a = Reflect.get(e, n, r);
    return (al(n) ? _g.has(n) : Q0(n)) || (i || Ot(e, "get", n), s)
      ? a
      : ot(a)
      ? o && ad(n)
        ? a
        : a.value
      : Ve(a)
      ? i
        ? Ag(a)
        : Ln(a)
      : a;
  }
}
class bg extends wg {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (Oi(s) && ot(s) && !ot(r)) return !1;
    if (
      !this._shallow &&
      (!Aa(r) && !Oi(r) && ((s = be(s)), (r = be(r))),
      !ie(e) && ot(s) && !ot(r))
    )
      return (s.value = r), !0;
    const o = ie(e) && ad(n) ? Number(n) < e.length : Te(e, n),
      a = Reflect.set(e, n, r, i);
    return (
      e === be(i) && (o ? Qr(r, s) && En(e, "set", n, r) : En(e, "add", n, r)),
      a
    );
  }
  deleteProperty(e, n) {
    const r = Te(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && r && En(e, "delete", n, void 0), i;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!al(n) || !_g.has(n)) && Ot(e, "has", n), r;
  }
  ownKeys(e) {
    return Ot(e, "iterate", ie(e) ? "length" : jr), Reflect.ownKeys(e);
  }
}
class J0 extends wg {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const Z0 = new bg(),
  eb = new J0(),
  tb = new bg(!0),
  ud = (t) => t,
  ul = (t) => Reflect.getPrototypeOf(t);
function Bo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = be(t),
    s = be(e);
  n || (Qr(e, s) && Ot(i, "get", e), Ot(i, "get", s));
  const { has: o } = ul(i),
    a = r ? ud : n ? fd : Fs;
  if (o.call(i, e)) return a(t.get(e));
  if (o.call(i, s)) return a(t.get(s));
  t !== i && t.get(e);
}
function jo(t, e = !1) {
  const n = this.__v_raw,
    r = be(n),
    i = be(t);
  return (
    e || (Qr(t, i) && Ot(r, "has", t), Ot(r, "has", i)),
    t === i ? n.has(t) : n.has(t) || n.has(i)
  );
}
function Ho(t, e = !1) {
  return (
    (t = t.__v_raw), !e && Ot(be(t), "iterate", jr), Reflect.get(t, "size", t)
  );
}
function nf(t) {
  t = be(t);
  const e = be(this);
  return ul(e).has.call(e, t) || (e.add(t), En(e, "add", t, t)), this;
}
function rf(t, e) {
  e = be(e);
  const n = be(this),
    { has: r, get: i } = ul(n);
  let s = r.call(n, t);
  s || ((t = be(t)), (s = r.call(n, t)));
  const o = i.call(n, t);
  return (
    n.set(t, e), s ? Qr(e, o) && En(n, "set", t, e) : En(n, "add", t, e), this
  );
}
function sf(t) {
  const e = be(this),
    { has: n, get: r } = ul(e);
  let i = n.call(e, t);
  i || ((t = be(t)), (i = n.call(e, t))), r && r.call(e, t);
  const s = e.delete(t);
  return i && En(e, "delete", t, void 0), s;
}
function of() {
  const t = be(this),
    e = t.size !== 0,
    n = t.clear();
  return e && En(t, "clear", void 0, void 0), n;
}
function zo(t, e) {
  return function (r, i) {
    const s = this,
      o = s.__v_raw,
      a = be(o),
      l = e ? ud : t ? fd : Fs;
    return (
      !t && Ot(a, "iterate", jr), o.forEach((c, u) => r.call(i, l(c), l(u), s))
    );
  };
}
function Wo(t, e, n) {
  return function (...r) {
    const i = this.__v_raw,
      s = be(i),
      o = Ei(s),
      a = t === "entries" || (t === Symbol.iterator && o),
      l = t === "keys" && o,
      c = i[t](...r),
      u = n ? ud : e ? fd : Fs;
    return (
      !e && Ot(s, "iterate", l ? su : jr),
      {
        next() {
          const { value: d, done: h } = c.next();
          return h
            ? { value: d, done: h }
            : { value: a ? [u(d[0]), u(d[1])] : u(d), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Kn(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function nb() {
  const t = {
      get(s) {
        return Bo(this, s);
      },
      get size() {
        return Ho(this);
      },
      has: jo,
      add: nf,
      set: rf,
      delete: sf,
      clear: of,
      forEach: zo(!1, !1),
    },
    e = {
      get(s) {
        return Bo(this, s, !1, !0);
      },
      get size() {
        return Ho(this);
      },
      has: jo,
      add: nf,
      set: rf,
      delete: sf,
      clear: of,
      forEach: zo(!1, !0),
    },
    n = {
      get(s) {
        return Bo(this, s, !0);
      },
      get size() {
        return Ho(this, !0);
      },
      has(s) {
        return jo.call(this, s, !0);
      },
      add: Kn("add"),
      set: Kn("set"),
      delete: Kn("delete"),
      clear: Kn("clear"),
      forEach: zo(!0, !1),
    },
    r = {
      get(s) {
        return Bo(this, s, !0, !0);
      },
      get size() {
        return Ho(this, !0);
      },
      has(s) {
        return jo.call(this, s, !0);
      },
      add: Kn("add"),
      set: Kn("set"),
      delete: Kn("delete"),
      clear: Kn("clear"),
      forEach: zo(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (t[s] = Wo(s, !1, !1)),
        (n[s] = Wo(s, !0, !1)),
        (e[s] = Wo(s, !1, !0)),
        (r[s] = Wo(s, !0, !0));
    }),
    [t, n, e, r]
  );
}
const [rb, ib, sb, ob] = nb();
function dd(t, e) {
  const n = e ? (t ? ob : sb) : t ? ib : rb;
  return (r, i, s) =>
    i === "__v_isReactive"
      ? !t
      : i === "__v_isReadonly"
      ? t
      : i === "__v_raw"
      ? r
      : Reflect.get(Te(n, i) && i in r ? n : r, i, s);
}
const ab = { get: dd(!1, !1) },
  lb = { get: dd(!1, !0) },
  cb = { get: dd(!0, !1) },
  Eg = new WeakMap(),
  Tg = new WeakMap(),
  Ig = new WeakMap(),
  ub = new WeakMap();
function db(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function hb(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : db(P0(t));
}
function Ln(t) {
  return Oi(t) ? t : hd(t, !1, Z0, ab, Eg);
}
function au(t) {
  return hd(t, !1, tb, lb, Tg);
}
function Ag(t) {
  return hd(t, !0, eb, cb, Ig);
}
function hd(t, e, n, r, i) {
  if (!Ve(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const s = i.get(t);
  if (s) return s;
  const o = hb(t);
  if (o === 0) return t;
  const a = new Proxy(t, o === 2 ? r : n);
  return i.set(t, a), a;
}
function Ii(t) {
  return Oi(t) ? Ii(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Oi(t) {
  return !!(t && t.__v_isReadonly);
}
function Aa(t) {
  return !!(t && t.__v_isShallow);
}
function Cg(t) {
  return Ii(t) || Oi(t);
}
function be(t) {
  const e = t && t.__v_raw;
  return e ? be(e) : t;
}
function kg(t) {
  return Ta(t, "__v_skip", !0), t;
}
const Fs = (t) => (Ve(t) ? Ln(t) : t),
  fd = (t) => (Ve(t) ? Ag(t) : t);
function Sg(t) {
  dr && Yt && ((t = be(t)), yg(t.dep || (t.dep = ld())));
}
function qg(t, e) {
  t = be(t);
  const n = t.dep;
  n && ou(n);
}
function ot(t) {
  return !!(t && t.__v_isRef === !0);
}
function ne(t) {
  return xg(t, !1);
}
function fb(t) {
  return xg(t, !0);
}
function xg(t, e) {
  return ot(t) ? t : new pb(t, e);
}
class pb {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : be(e)),
      (this._value = n ? e : Fs(e));
  }
  get value() {
    return Sg(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Aa(e) || Oi(e);
    (e = n ? e : be(e)),
      Qr(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : Fs(e)), qg(this));
  }
}
function Ye(t) {
  return ot(t) ? t.value : t;
}
const mb = {
  get: (t, e, n) => Ye(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return ot(i) && !ot(n) ? ((i.value = n), !0) : Reflect.set(t, e, n, r);
  },
};
function Rg(t) {
  return Ii(t) ? t : new Proxy(t, mb);
}
function gb(t) {
  const e = ie(t) ? new Array(t.length) : {};
  for (const n in t) e[n] = yb(t, n);
  return e;
}
class vb {
  constructor(e, n, r) {
    (this._object = e),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return G0(be(this._object), this._key);
  }
}
function yb(t, e, n) {
  const r = t[e];
  return ot(r) ? r : new vb(t, e, n);
}
class _b {
  constructor(e, n, r, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new cd(e, () => {
        this._dirty || ((this._dirty = !0), qg(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = r);
  }
  get value() {
    const e = be(this);
    return (
      Sg(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function wb(t, e, n = !1) {
  let r, i;
  const s = de(t);
  return (
    s ? ((r = t), (i = ln)) : ((r = t.get), (i = t.set)),
    new _b(r, i, s || !i, n)
  );
}
function hr(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    dl(s, e, n);
  }
  return i;
}
function jt(t, e, n, r) {
  if (de(t)) {
    const s = hr(t, e, n, r);
    return (
      s &&
        cg(s) &&
        s.catch((o) => {
          dl(o, e, n);
        }),
      s
    );
  }
  const i = [];
  for (let s = 0; s < t.length; s++) i.push(jt(t[s], e, n, r));
  return i;
}
function dl(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy,
      a = n;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](t, o, a) === !1) return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      hr(l, null, 10, [t, o, a]);
      return;
    }
  }
  bb(t, n, i, r);
}
function bb(t, e, n, r = !0) {
  console.error(t);
}
let Us = !1,
  lu = !1;
const pt = [];
let sn = 0;
const Ai = [];
let vn = null,
  Lr = 0;
const Pg = Promise.resolve();
let pd = null;
function ar(t) {
  const e = pd || Pg;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Eb(t) {
  let e = sn + 1,
    n = pt.length;
  for (; e < n; ) {
    const r = (e + n) >>> 1,
      i = pt[r],
      s = Bs(i);
    s < t || (s === t && i.pre) ? (e = r + 1) : (n = r);
  }
  return e;
}
function md(t) {
  (!pt.length || !pt.includes(t, Us && t.allowRecurse ? sn + 1 : sn)) &&
    (t.id == null ? pt.push(t) : pt.splice(Eb(t.id), 0, t), Og());
}
function Og() {
  !Us && !lu && ((lu = !0), (pd = Pg.then(Ng)));
}
function Tb(t) {
  const e = pt.indexOf(t);
  e > sn && pt.splice(e, 1);
}
function Ib(t) {
  ie(t)
    ? Ai.push(...t)
    : (!vn || !vn.includes(t, t.allowRecurse ? Lr + 1 : Lr)) && Ai.push(t),
    Og();
}
function af(t, e = Us ? sn + 1 : 0) {
  for (; e < pt.length; e++) {
    const n = pt[e];
    n && n.pre && (pt.splice(e, 1), e--, n());
  }
}
function Dg(t) {
  if (Ai.length) {
    const e = [...new Set(Ai)];
    if (((Ai.length = 0), vn)) {
      vn.push(...e);
      return;
    }
    for (vn = e, vn.sort((n, r) => Bs(n) - Bs(r)), Lr = 0; Lr < vn.length; Lr++)
      vn[Lr]();
    (vn = null), (Lr = 0);
  }
}
const Bs = (t) => (t.id == null ? 1 / 0 : t.id),
  Ab = (t, e) => {
    const n = Bs(t) - Bs(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Ng(t) {
  (lu = !1), (Us = !0), pt.sort(Ab);
  try {
    for (sn = 0; sn < pt.length; sn++) {
      const e = pt[sn];
      e && e.active !== !1 && hr(e, null, 14);
    }
  } finally {
    (sn = 0),
      (pt.length = 0),
      Dg(),
      (Us = !1),
      (pd = null),
      (pt.length || Ai.length) && Ng();
  }
}
function Cb(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Me;
  let i = n;
  const s = e.startsWith("update:"),
    o = s && e.slice(7);
  if (o && o in r) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: d, trim: h } = r[u] || Me;
    h && (i = n.map((f) => (Be(f) ? f.trim() : f))), d && (i = n.map(nu));
  }
  let a,
    l = r[(a = ca(e))] || r[(a = ca(dn(e)))];
  !l && s && (l = r[(a = ca(ri(e)))]), l && jt(l, t, 6, i);
  const c = r[a + "Once"];
  if (c) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    (t.emitted[a] = !0), jt(c, t, 6, i);
  }
}
function Lg(t, e, n = !1) {
  const r = e.emitsCache,
    i = r.get(t);
  if (i !== void 0) return i;
  const s = t.emits;
  let o = {},
    a = !1;
  if (!de(t)) {
    const l = (c) => {
      const u = Lg(c, e, !0);
      u && ((a = !0), We(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l);
  }
  return !s && !a
    ? (Ve(t) && r.set(t, null), null)
    : (ie(s) ? s.forEach((l) => (o[l] = null)) : We(o, s),
      Ve(t) && r.set(t, o),
      o);
}
function hl(t, e) {
  return !t || !ol(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      Te(t, e[0].toLowerCase() + e.slice(1)) || Te(t, ri(e)) || Te(t, e));
}
let at = null,
  fl = null;
function Ca(t) {
  const e = at;
  return (at = t), (fl = (t && t.type.__scopeId) || null), e;
}
function Mn(t) {
  fl = t;
}
function $n() {
  fl = null;
}
const Mg = (t) => je;
function je(t, e = at, n) {
  if (!e || t._n) return t;
  const r = (...i) => {
    r._d && bf(-1);
    const s = Ca(e);
    let o;
    try {
      o = t(...i);
    } finally {
      Ca(s), r._d && bf(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function wc(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: s,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: d,
    data: h,
    setupState: f,
    ctx: g,
    inheritAttrs: y,
  } = t;
  let _, T;
  const v = Ca(t);
  try {
    if (n.shapeFlag & 4) {
      const E = i || r,
        O = E;
      (_ = rn(u.call(O, E, d, s, f, h, g))), (T = l);
    } else {
      const E = e;
      (_ = rn(
        E.length > 1 ? E(s, { attrs: l, slots: a, emit: c }) : E(s, null)
      )),
        (T = e.props ? l : kb(l));
    }
  } catch (E) {
    (Cs.length = 0), dl(E, t, 1), (_ = me(Ht));
  }
  let k = _;
  if (T && y !== !1) {
    const E = Object.keys(T),
      { shapeFlag: O } = k;
    E.length && O & 7 && (o && E.some(sd) && (T = Sb(T, o)), (k = kn(k, T)));
  }
  return (
    n.dirs && ((k = kn(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (k.transition = n.transition),
    (_ = k),
    Ca(v),
    _
  );
}
const kb = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || ol(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  Sb = (t, e) => {
    const n = {};
    for (const r in t) (!sd(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
function qb(t, e, n) {
  const { props: r, children: i, component: s } = t,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? lf(r, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (o[h] !== r[h] && !hl(c, h)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? lf(r, o, c)
        : !0
      : !!o;
  return !1;
}
function lf(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !hl(n, s)) return !0;
  }
  return !1;
}
function xb({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const gd = "components",
  Rb = "directives";
function Cn(t, e) {
  return vd(gd, t, !0, e) || t;
}
const $g = Symbol.for("v-ndc");
function ka(t) {
  return Be(t) ? vd(gd, t, !1) || t : t || $g;
}
function XN(t) {
  return vd(Rb, t);
}
function vd(t, e, n = !0, r = !1) {
  const i = at || tt;
  if (i) {
    const s = i.type;
    if (t === gd) {
      const a = pu(s, !1);
      if (a && (a === e || a === dn(e) || a === cl(dn(e)))) return s;
    }
    const o = cf(i[t] || s[t], e) || cf(i.appContext[t], e);
    return !o && r ? s : o;
  }
}
function cf(t, e) {
  return t && (t[e] || t[dn(e)] || t[cl(dn(e))]);
}
const Vg = (t) => t.__isSuspense;
function Pb(t, e) {
  e && e.pendingBranch
    ? ie(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Ib(t);
}
function Ob(t, e) {
  return yd(t, null, { flush: "post" });
}
const Ko = {};
function ft(t, e, n) {
  return yd(t, e, n);
}
function yd(
  t,
  e,
  { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: o } = Me
) {
  var a;
  const l = pg() === ((a = tt) == null ? void 0 : a.scope) ? tt : null;
  let c,
    u = !1,
    d = !1;
  if (
    (ot(t)
      ? ((c = () => t.value), (u = Aa(t)))
      : Ii(t)
      ? ((c = () => t), (r = !0))
      : ie(t)
      ? ((d = !0),
        (u = t.some((E) => Ii(E) || Aa(E))),
        (c = () =>
          t.map((E) => {
            if (ot(E)) return E.value;
            if (Ii(E)) return $r(E);
            if (de(E)) return hr(E, l, 2);
          })))
      : de(t)
      ? e
        ? (c = () => hr(t, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return h && h(), jt(t, l, 3, [f]);
          })
      : (c = ln),
    e && r)
  ) {
    const E = c;
    c = () => $r(E());
  }
  let h,
    f = (E) => {
      h = v.onStop = () => {
        hr(E, l, 4), (h = v.onStop = void 0);
      };
    },
    g;
  if (Ws)
    if (
      ((f = ln),
      e ? n && jt(e, l, 3, [c(), d ? [] : void 0, f]) : c(),
      i === "sync")
    ) {
      const E = TE();
      g = E.__watcherHandles || (E.__watcherHandles = []);
    } else return ln;
  let y = d ? new Array(t.length).fill(Ko) : Ko;
  const _ = () => {
    if (v.active)
      if (e) {
        const E = v.run();
        (r || u || (d ? E.some((O, V) => Qr(O, y[V])) : Qr(E, y))) &&
          (h && h(),
          jt(e, l, 3, [E, y === Ko ? void 0 : d && y[0] === Ko ? [] : y, f]),
          (y = E));
      } else v.run();
  };
  _.allowRecurse = !!e;
  let T;
  i === "sync"
    ? (T = _)
    : i === "post"
    ? (T = () => rt(_, l && l.suspense))
    : ((_.pre = !0), l && (_.id = l.uid), (T = () => md(_)));
  const v = new cd(c, T);
  e
    ? n
      ? _()
      : (y = v.run())
    : i === "post"
    ? rt(v.run.bind(v), l && l.suspense)
    : v.run();
  const k = () => {
    v.stop(), l && l.scope && od(l.scope.effects, v);
  };
  return g && g.push(k), k;
}
function Db(t, e, n) {
  const r = this.proxy,
    i = Be(t) ? (t.includes(".") ? Fg(r, t) : () => r[t]) : t.bind(r, r);
  let s;
  de(e) ? (s = e) : ((s = e.handler), (n = e));
  const o = tt;
  $i(this);
  const a = yd(i, s.bind(r), n);
  return o ? $i(o) : Hr(), a;
}
function Fg(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
function $r(t, e) {
  if (!Ve(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), ot(t))) $r(t.value, e);
  else if (ie(t)) for (let n = 0; n < t.length; n++) $r(t[n], e);
  else if (lg(t) || Ei(t))
    t.forEach((n) => {
      $r(n, e);
    });
  else if (dg(t)) for (const n in t) $r(t[n], e);
  return t;
}
function uf(t, e) {
  const n = at;
  if (n === null) return t;
  const r = _l(n) || n.proxy,
    i = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [o, a, l, c = Me] = e[s];
    o &&
      (de(o) && (o = { mounted: o, updated: o }),
      o.deep && $r(a),
      i.push({
        dir: o,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return t;
}
function xr(t, e, n, r) {
  const i = t.dirs,
    s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[r];
    l && (ts(), jt(l, n, 8, [t.el, a, t, e]), ns());
  }
}
const er = Symbol("_leaveCb"),
  Go = Symbol("_enterCb");
function Ug() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    tn(() => {
      t.isMounted = !0;
    }),
    gl(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const Ut = [Function, Array],
  Bg = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ut,
    onEnter: Ut,
    onAfterEnter: Ut,
    onEnterCancelled: Ut,
    onBeforeLeave: Ut,
    onLeave: Ut,
    onAfterLeave: Ut,
    onLeaveCancelled: Ut,
    onBeforeAppear: Ut,
    onAppear: Ut,
    onAfterAppear: Ut,
    onAppearCancelled: Ut,
  },
  Nb = {
    name: "BaseTransition",
    props: Bg,
    setup(t, { slots: e }) {
      const n = fo(),
        r = Ug();
      let i;
      return () => {
        const s = e.default && _d(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const y of s)
            if (y.type !== Ht) {
              o = y;
              break;
            }
        }
        const a = be(t),
          { mode: l } = a;
        if (r.isLeaving) return bc(o);
        const c = df(o);
        if (!c) return bc(o);
        const u = js(c, a, r, n);
        Di(c, u);
        const d = n.subTree,
          h = d && df(d);
        let f = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const y = g();
          i === void 0 ? (i = y) : y !== i && ((i = y), (f = !0));
        }
        if (h && h.type !== Ht && (!rr(c, h) || f)) {
          const y = js(h, a, r, n);
          if ((Di(h, y), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (y.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              bc(o)
            );
          l === "in-out" &&
            c.type !== Ht &&
            (y.delayLeave = (_, T, v) => {
              const k = jg(r, h);
              (k[String(h.key)] = h),
                (_[er] = () => {
                  T(), (_[er] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = v);
            });
        }
        return o;
      };
    },
  },
  Lb = Nb;
function jg(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || ((r = Object.create(null)), n.set(e.type, r)), r;
}
function js(t, e, n, r) {
  const {
      appear: i,
      mode: s,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: f,
      onLeaveCancelled: g,
      onBeforeAppear: y,
      onAppear: _,
      onAfterAppear: T,
      onAppearCancelled: v,
    } = e,
    k = String(t.key),
    E = jg(n, t),
    O = (L, B) => {
      L && jt(L, r, 9, B);
    },
    V = (L, B) => {
      const ee = B[1];
      O(L, B),
        ie(L) ? L.every((fe) => fe.length <= 1) && ee() : L.length <= 1 && ee();
    },
    z = {
      mode: s,
      persisted: o,
      beforeEnter(L) {
        let B = a;
        if (!n.isMounted)
          if (i) B = y || a;
          else return;
        L[er] && L[er](!0);
        const ee = E[k];
        ee && rr(t, ee) && ee.el[er] && ee.el[er](), O(B, [L]);
      },
      enter(L) {
        let B = l,
          ee = c,
          fe = u;
        if (!n.isMounted)
          if (i) (B = _ || l), (ee = T || c), (fe = v || u);
          else return;
        let j = !1;
        const se = (L[Go] = (Ie) => {
          j ||
            ((j = !0),
            Ie ? O(fe, [L]) : O(ee, [L]),
            z.delayedLeave && z.delayedLeave(),
            (L[Go] = void 0));
        });
        B ? V(B, [L, se]) : se();
      },
      leave(L, B) {
        const ee = String(t.key);
        if ((L[Go] && L[Go](!0), n.isUnmounting)) return B();
        O(d, [L]);
        let fe = !1;
        const j = (L[er] = (se) => {
          fe ||
            ((fe = !0),
            B(),
            se ? O(g, [L]) : O(f, [L]),
            (L[er] = void 0),
            E[ee] === t && delete E[ee]);
        });
        (E[ee] = t), h ? V(h, [L, j]) : j();
      },
      clone(L) {
        return js(L, e, n, r);
      },
    };
  return z;
}
function bc(t) {
  if (pl(t)) return (t = kn(t)), (t.children = null), t;
}
function df(t) {
  return pl(t) ? (t.children ? t.children[0] : void 0) : t;
}
function Di(t, e) {
  t.shapeFlag & 6 && t.component
    ? Di(t.component.subTree, e)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function _d(t, e = !1, n) {
  let r = [],
    i = 0;
  for (let s = 0; s < t.length; s++) {
    let o = t[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === Ue
      ? (o.patchFlag & 128 && i++, (r = r.concat(_d(o.children, e, a))))
      : (e || o.type !== Ht) && r.push(a != null ? kn(o, { key: a }) : o);
  }
  if (i > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Ge(t, e) {
  return de(t) ? We({ name: t.name }, e, { setup: t }) : t;
}
const Ci = (t) => !!t.type.__asyncLoader,
  pl = (t) => t.type.__isKeepAlive,
  Mb = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(t, { slots: e }) {
      const n = fo(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const v = e.default && e.default();
          return v && v.length === 1 ? v[0] : v;
        };
      const i = new Map(),
        s = new Set();
      let o = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: d },
          },
        } = r,
        h = d("div");
      (r.activate = (v, k, E, O, V) => {
        const z = v.component;
        c(v, k, E, 0, a),
          l(z.vnode, v, k, E, z, a, O, v.slotScopeIds, V),
          rt(() => {
            (z.isDeactivated = !1), z.a && Ti(z.a);
            const L = v.props && v.props.onVnodeMounted;
            L && Bt(L, z.parent, v);
          }, a);
      }),
        (r.deactivate = (v) => {
          const k = v.component;
          c(v, h, null, 1, a),
            rt(() => {
              k.da && Ti(k.da);
              const E = v.props && v.props.onVnodeUnmounted;
              E && Bt(E, k.parent, v), (k.isDeactivated = !0);
            }, a);
        });
      function f(v) {
        Ec(v), u(v, n, a, !0);
      }
      function g(v) {
        i.forEach((k, E) => {
          const O = pu(k.type);
          O && (!v || !v(O)) && y(E);
        });
      }
      function y(v) {
        const k = i.get(v);
        !o || !rr(k, o) ? f(k) : o && Ec(o), i.delete(v), s.delete(v);
      }
      ft(
        () => [t.include, t.exclude],
        ([v, k]) => {
          v && g((E) => vs(v, E)), k && g((E) => !vs(k, E));
        },
        { flush: "post", deep: !0 }
      );
      let _ = null;
      const T = () => {
        _ != null && i.set(_, Tc(n.subTree));
      };
      return (
        tn(T),
        wd(T),
        gl(() => {
          i.forEach((v) => {
            const { subTree: k, suspense: E } = n,
              O = Tc(k);
            if (v.type === O.type && v.key === O.key) {
              Ec(O);
              const V = O.component.da;
              V && rt(V, E);
              return;
            }
            f(v);
          });
        }),
        () => {
          if (((_ = null), !e.default)) return null;
          const v = e.default(),
            k = v[0];
          if (v.length > 1) return (o = null), v;
          if (!zs(k) || (!(k.shapeFlag & 4) && !(k.shapeFlag & 128)))
            return (o = null), k;
          let E = Tc(k);
          const O = E.type,
            V = pu(Ci(E) ? E.type.__asyncResolved || {} : O),
            { include: z, exclude: L, max: B } = t;
          if ((z && (!V || !vs(z, V))) || (L && V && vs(L, V)))
            return (o = E), k;
          const ee = E.key == null ? O : E.key,
            fe = i.get(ee);
          return (
            E.el && ((E = kn(E)), k.shapeFlag & 128 && (k.ssContent = E)),
            (_ = ee),
            fe
              ? ((E.el = fe.el),
                (E.component = fe.component),
                E.transition && Di(E, E.transition),
                (E.shapeFlag |= 512),
                s.delete(ee),
                s.add(ee))
              : (s.add(ee),
                B && s.size > parseInt(B, 10) && y(s.values().next().value)),
            (E.shapeFlag |= 256),
            (o = E),
            Vg(k.type) ? k : E
          );
        }
      );
    },
  },
  Hg = Mb;
function vs(t, e) {
  return ie(t)
    ? t.some((n) => vs(n, e))
    : Be(t)
    ? t.split(",").includes(e)
    : R0(t)
    ? t.test(e)
    : !1;
}
function $b(t, e) {
  zg(t, "a", e);
}
function Vb(t, e) {
  zg(t, "da", e);
}
function zg(t, e, n = tt) {
  const r =
    t.__wdc ||
    (t.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return t();
    });
  if ((ml(e, r, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      pl(i.parent.vnode) && Fb(r, e, n, i), (i = i.parent);
  }
}
function Fb(t, e, n, r) {
  const i = ml(e, t, r, !0);
  rs(() => {
    od(r[e], i);
  }, n);
}
function Ec(t) {
  (t.shapeFlag &= -257), (t.shapeFlag &= -513);
}
function Tc(t) {
  return t.shapeFlag & 128 ? t.ssContent : t;
}
function ml(t, e, n = tt, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          if (n.isUnmounted) return;
          ts(), $i(n);
          const a = jt(e, n, t, o);
          return Hr(), ns(), a;
        });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const Vn =
    (t) =>
    (e, n = tt) =>
      (!Ws || t === "sp") && ml(t, (...r) => e(...r), n),
  Ub = Vn("bm"),
  tn = Vn("m"),
  Bb = Vn("bu"),
  wd = Vn("u"),
  gl = Vn("bum"),
  rs = Vn("um"),
  jb = Vn("sp"),
  Hb = Vn("rtg"),
  zb = Vn("rtc");
function Wb(t, e = tt) {
  ml("ec", t, e);
}
function Ni(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (ie(t) || Be(t)) {
    i = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      i[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let o = 0; o < t; o++) i[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (Ve(t))
    if (t[Symbol.iterator])
      i = Array.from(t, (o, a) => e(o, a, void 0, s && s[a]));
    else {
      const o = Object.keys(t);
      i = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        i[a] = e(t[c], c, a, s && s[a]);
      }
    }
  else i = [];
  return n && (n[r] = i), i;
}
function Kb(t, e) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (ie(r)) for (let i = 0; i < r.length; i++) t[r[i].name] = r[i].fn;
    else
      r &&
        (t[r.name] = r.key
          ? (...i) => {
              const s = r.fn(...i);
              return s && (s.key = r.key), s;
            }
          : r.fn);
  }
  return t;
}
function Li(t, e, n = {}, r, i) {
  if (at.isCE || (at.parent && Ci(at.parent) && at.parent.isCE))
    return e !== "default" && (n.name = e), me("slot", n, r && r());
  let s = t[e];
  s && s._c && (s._d = !1), R();
  const o = s && Wg(s(n)),
    a = xe(
      Ue,
      { key: n.key || (o && o.key) || `_${e}` },
      o || (r ? r() : []),
      o && t._ === 1 ? 64 : -2
    );
  return (
    !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    a
  );
}
function Wg(t) {
  return t.some((e) =>
    zs(e) ? !(e.type === Ht || (e.type === Ue && !Wg(e.children))) : !0
  )
    ? t
    : null;
}
function hf(t, e) {
  const n = {};
  for (const r in t) n[e && /[A-Z]/.test(r) ? `on:${r}` : ca(r)] = t[r];
  return n;
}
const cu = (t) => (t ? (iv(t) ? _l(t) || t.proxy : cu(t.parent)) : null),
  Is = We(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => cu(t.parent),
    $root: (t) => cu(t.root),
    $emit: (t) => t.emit,
    $options: (t) => bd(t),
    $forceUpdate: (t) => t.f || (t.f = () => md(t.update)),
    $nextTick: (t) => t.n || (t.n = ar.bind(t.proxy)),
    $watch: (t) => Db.bind(t),
  }),
  Ic = (t, e) => t !== Me && !t.__isScriptSetup && Te(t, e),
  Gb = {
    get({ _: t }, e) {
      const {
        ctx: n,
        setupState: r,
        data: i,
        props: s,
        accessCache: o,
        type: a,
        appContext: l,
      } = t;
      let c;
      if (e[0] !== "$") {
        const f = o[e];
        if (f !== void 0)
          switch (f) {
            case 1:
              return r[e];
            case 2:
              return i[e];
            case 4:
              return n[e];
            case 3:
              return s[e];
          }
        else {
          if (Ic(r, e)) return (o[e] = 1), r[e];
          if (i !== Me && Te(i, e)) return (o[e] = 2), i[e];
          if ((c = t.propsOptions[0]) && Te(c, e)) return (o[e] = 3), s[e];
          if (n !== Me && Te(n, e)) return (o[e] = 4), n[e];
          uu && (o[e] = 0);
        }
      }
      const u = Is[e];
      let d, h;
      if (u) return e === "$attrs" && Ot(t, "get", e), u(t);
      if ((d = a.__cssModules) && (d = d[e])) return d;
      if (n !== Me && Te(n, e)) return (o[e] = 4), n[e];
      if (((h = l.config.globalProperties), Te(h, e))) return h[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: i, ctx: s } = t;
      return Ic(i, e)
        ? ((i[e] = n), !0)
        : r !== Me && Te(r, e)
        ? ((r[e] = n), !0)
        : Te(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((s[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: r,
          appContext: i,
          propsOptions: s,
        },
      },
      o
    ) {
      let a;
      return (
        !!n[o] ||
        (t !== Me && Te(t, o)) ||
        Ic(e, o) ||
        ((a = s[0]) && Te(a, o)) ||
        Te(r, o) ||
        Te(Is, o) ||
        Te(i.config.globalProperties, o)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : Te(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
function ff(t) {
  return ie(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let uu = !0;
function Qb(t) {
  const e = bd(t),
    n = t.proxy,
    r = t.ctx;
  (uu = !1), e.beforeCreate && pf(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: f,
    updated: g,
    activated: y,
    deactivated: _,
    beforeDestroy: T,
    beforeUnmount: v,
    destroyed: k,
    unmounted: E,
    render: O,
    renderTracked: V,
    renderTriggered: z,
    errorCaptured: L,
    serverPrefetch: B,
    expose: ee,
    inheritAttrs: fe,
    components: j,
    directives: se,
    filters: Ie,
  } = e;
  if ((c && Yb(c, r, null), o))
    for (const Re in o) {
      const _e = o[Re];
      de(_e) && (r[Re] = _e.bind(n));
    }
  if (i) {
    const Re = i.call(n, n);
    Ve(Re) && (t.data = Ln(Re));
  }
  if (((uu = !0), s))
    for (const Re in s) {
      const _e = s[Re],
        kt = de(_e) ? _e.bind(n, n) : de(_e.get) ? _e.get.bind(n, n) : ln,
        Gt = !de(_e) && de(_e.set) ? _e.set.bind(n) : ln,
        Dt = ge({ get: kt, set: Gt });
      Object.defineProperty(r, Re, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (Qe) => (Dt.value = Qe),
      });
    }
  if (a) for (const Re in a) Kg(a[Re], r, n, Re);
  if (l) {
    const Re = de(l) ? l.call(n) : l;
    Reflect.ownKeys(Re).forEach((_e) => {
      ua(_e, Re[_e]);
    });
  }
  u && pf(u, t, "c");
  function De(Re, _e) {
    ie(_e) ? _e.forEach((kt) => Re(kt.bind(n))) : _e && Re(_e.bind(n));
  }
  if (
    (De(Ub, d),
    De(tn, h),
    De(Bb, f),
    De(wd, g),
    De($b, y),
    De(Vb, _),
    De(Wb, L),
    De(zb, V),
    De(Hb, z),
    De(gl, v),
    De(rs, E),
    De(jb, B),
    ie(ee))
  )
    if (ee.length) {
      const Re = t.exposed || (t.exposed = {});
      ee.forEach((_e) => {
        Object.defineProperty(Re, _e, {
          get: () => n[_e],
          set: (kt) => (n[_e] = kt),
        });
      });
    } else t.exposed || (t.exposed = {});
  O && t.render === ln && (t.render = O),
    fe != null && (t.inheritAttrs = fe),
    j && (t.components = j),
    se && (t.directives = se);
}
function Yb(t, e, n = ln) {
  ie(t) && (t = du(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Ve(i)
      ? "default" in i
        ? (s = Zt(i.from || r, i.default, !0))
        : (s = Zt(i.from || r))
      : (s = Zt(i)),
      ot(s)
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (o) => (s.value = o),
          })
        : (e[r] = s);
  }
}
function pf(t, e, n) {
  jt(ie(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Kg(t, e, n, r) {
  const i = r.includes(".") ? Fg(n, r) : () => n[r];
  if (Be(t)) {
    const s = e[t];
    de(s) && ft(i, s);
  } else if (de(t)) ft(i, t.bind(n));
  else if (Ve(t))
    if (ie(t)) t.forEach((s) => Kg(s, e, n, r));
    else {
      const s = de(t.handler) ? t.handler.bind(n) : e[t.handler];
      de(s) && ft(i, s, t);
    }
}
function bd(t) {
  const e = t.type,
    { mixins: n, extends: r } = e,
    {
      mixins: i,
      optionsCache: s,
      config: { optionMergeStrategies: o },
    } = t.appContext,
    a = s.get(e);
  let l;
  return (
    a
      ? (l = a)
      : !i.length && !n && !r
      ? (l = e)
      : ((l = {}), i.length && i.forEach((c) => Sa(l, c, o, !0)), Sa(l, e, o)),
    Ve(e) && s.set(e, l),
    l
  );
}
function Sa(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Sa(t, s, n, !0), i && i.forEach((o) => Sa(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const a = Xb[o] || (n && n[o]);
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const Xb = {
  data: mf,
  props: gf,
  emits: gf,
  methods: ys,
  computed: ys,
  beforeCreate: It,
  created: It,
  beforeMount: It,
  mounted: It,
  beforeUpdate: It,
  updated: It,
  beforeDestroy: It,
  beforeUnmount: It,
  destroyed: It,
  unmounted: It,
  activated: It,
  deactivated: It,
  errorCaptured: It,
  serverPrefetch: It,
  components: ys,
  directives: ys,
  watch: Zb,
  provide: mf,
  inject: Jb,
};
function mf(t, e) {
  return e
    ? t
      ? function () {
          return We(
            de(t) ? t.call(this, this) : t,
            de(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function Jb(t, e) {
  return ys(du(t), du(e));
}
function du(t) {
  if (ie(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function It(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ys(t, e) {
  return t ? We(Object.create(null), t, e) : e;
}
function gf(t, e) {
  return t
    ? ie(t) && ie(e)
      ? [...new Set([...t, ...e])]
      : We(Object.create(null), ff(t), ff(e ?? {}))
    : e;
}
function Zb(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = We(Object.create(null), t);
  for (const r in e) n[r] = It(t[r], e[r]);
  return n;
}
function Gg() {
  return {
    app: null,
    config: {
      isNativeTag: S0,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let eE = 0;
function tE(t, e) {
  return function (r, i = null) {
    de(r) || (r = We({}, r)), i != null && !Ve(i) && (i = null);
    const s = Gg(),
      o = new WeakSet();
    let a = !1;
    const l = (s.app = {
      _uid: eE++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: IE,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          o.has(c) ||
            (c && de(c.install)
              ? (o.add(c), c.install(l, ...u))
              : de(c) && (o.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((s.components[c] = u), l) : s.components[c];
      },
      directive(c, u) {
        return u ? ((s.directives[c] = u), l) : s.directives[c];
      },
      mount(c, u, d) {
        if (!a) {
          const h = me(r, i);
          return (
            (h.appContext = s),
            u && e ? e(h, c) : t(h, c, d),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            _l(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        a && (t(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (s.provides[c] = u), l;
      },
      runWithContext(c) {
        qa = l;
        try {
          return c();
        } finally {
          qa = null;
        }
      },
    });
    return l;
  };
}
let qa = null;
function ua(t, e) {
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    r === n && (n = tt.provides = Object.create(r)), (n[t] = e);
  }
}
function Zt(t, e, n = !1) {
  const r = tt || at;
  if (r || qa) {
    const i = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : qa._context.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && de(e) ? e.call(r && r.proxy) : e;
  }
}
function nE(t, e, n, r = !1) {
  const i = {},
    s = {};
  Ta(s, yl, 1), (t.propsDefaults = Object.create(null)), Qg(t, e, i, s);
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (t.props = r ? i : au(i)) : t.type.props ? (t.props = i) : (t.props = s),
    (t.attrs = s);
}
function rE(t, e, n, r) {
  const {
      props: i,
      attrs: s,
      vnode: { patchFlag: o },
    } = t,
    a = be(i),
    [l] = t.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (hl(t.emitsOptions, h)) continue;
        const f = e[h];
        if (l)
          if (Te(s, h)) f !== s[h] && ((s[h] = f), (c = !0));
          else {
            const g = dn(h);
            i[g] = hu(l, a, g, f, t, !1);
          }
        else f !== s[h] && ((s[h] = f), (c = !0));
      }
    }
  } else {
    Qg(t, e, i, s) && (c = !0);
    let u;
    for (const d in a)
      (!e || (!Te(e, d) && ((u = ri(d)) === d || !Te(e, u)))) &&
        (l
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (i[d] = hu(l, a, d, void 0, t, !0))
          : delete i[d]);
    if (s !== a)
      for (const d in s) (!e || !Te(e, d)) && (delete s[d], (c = !0));
  }
  c && En(t, "set", "$attrs");
}
function Qg(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (la(l)) continue;
      const c = e[l];
      let u;
      i && Te(i, (u = dn(l)))
        ? !s || !s.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : hl(t.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
    }
  if (s) {
    const l = be(n),
      c = a || Me;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = hu(i, l, d, c[d], t, !Te(c, d));
    }
  }
  return o;
}
function hu(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const a = Te(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && de(l)) {
        const { propsDefaults: c } = i;
        n in c ? (r = c[n]) : ($i(i), (r = c[n] = l.call(null, e)), Hr());
      } else r = l;
    }
    o[0] &&
      (s && !a ? (r = !1) : o[1] && (r === "" || r === ri(n)) && (r = !0));
  }
  return r;
}
function Yg(t, e, n = !1) {
  const r = e.propsCache,
    i = r.get(t);
  if (i) return i;
  const s = t.props,
    o = {},
    a = [];
  let l = !1;
  if (!de(t)) {
    const u = (d) => {
      l = !0;
      const [h, f] = Yg(d, e, !0);
      We(o, h), f && a.push(...f);
    };
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  if (!s && !l) return Ve(t) && r.set(t, bi), bi;
  if (ie(s))
    for (let u = 0; u < s.length; u++) {
      const d = dn(s[u]);
      vf(d) && (o[d] = Me);
    }
  else if (s)
    for (const u in s) {
      const d = dn(u);
      if (vf(d)) {
        const h = s[u],
          f = (o[d] = ie(h) || de(h) ? { type: h } : We({}, h));
        if (f) {
          const g = wf(Boolean, f.type),
            y = wf(String, f.type);
          (f[0] = g > -1),
            (f[1] = y < 0 || g < y),
            (g > -1 || Te(f, "default")) && a.push(d);
        }
      }
    }
  const c = [o, a];
  return Ve(t) && r.set(t, c), c;
}
function vf(t) {
  return t[0] !== "$";
}
function yf(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function _f(t, e) {
  return yf(t) === yf(e);
}
function wf(t, e) {
  return ie(e) ? e.findIndex((n) => _f(n, t)) : de(e) && _f(e, t) ? 0 : -1;
}
const Xg = (t) => t[0] === "_" || t === "$stable",
  Ed = (t) => (ie(t) ? t.map(rn) : [rn(t)]),
  iE = (t, e, n) => {
    if (e._n) return e;
    const r = je((...i) => Ed(e(...i)), n);
    return (r._c = !1), r;
  },
  Jg = (t, e, n) => {
    const r = t._ctx;
    for (const i in t) {
      if (Xg(i)) continue;
      const s = t[i];
      if (de(s)) e[i] = iE(i, s, r);
      else if (s != null) {
        const o = Ed(s);
        e[i] = () => o;
      }
    }
  },
  Zg = (t, e) => {
    const n = Ed(e);
    t.slots.default = () => n;
  },
  sE = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = be(e)), Ta(e, "_", n)) : Jg(e, (t.slots = {}));
    } else (t.slots = {}), e && Zg(t, e);
    Ta(t.slots, yl, 1);
  },
  oE = (t, e, n) => {
    const { vnode: r, slots: i } = t;
    let s = !0,
      o = Me;
    if (r.shapeFlag & 32) {
      const a = e._;
      a
        ? n && a === 1
          ? (s = !1)
          : (We(i, e), !n && a === 1 && delete i._)
        : ((s = !e.$stable), Jg(e, i)),
        (o = e);
    } else e && (Zg(t, e), (o = { default: 1 }));
    if (s) for (const a in i) !Xg(a) && o[a] == null && delete i[a];
  };
function fu(t, e, n, r, i = !1) {
  if (ie(t)) {
    t.forEach((h, f) => fu(h, e && (ie(e) ? e[f] : e), n, r, i));
    return;
  }
  if (Ci(r) && !i) return;
  const s = r.shapeFlag & 4 ? _l(r.component) || r.component.proxy : r.el,
    o = i ? null : s,
    { i: a, r: l } = t,
    c = e && e.r,
    u = a.refs === Me ? (a.refs = {}) : a.refs,
    d = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (Be(c)
        ? ((u[c] = null), Te(d, c) && (d[c] = null))
        : ot(c) && (c.value = null)),
    de(l))
  )
    hr(l, a, 12, [o, u]);
  else {
    const h = Be(l),
      f = ot(l);
    if (h || f) {
      const g = () => {
        if (t.f) {
          const y = h ? (Te(d, l) ? d[l] : u[l]) : l.value;
          i
            ? ie(y) && od(y, s)
            : ie(y)
            ? y.includes(s) || y.push(s)
            : h
            ? ((u[l] = [s]), Te(d, l) && (d[l] = u[l]))
            : ((l.value = [s]), t.k && (u[t.k] = l.value));
        } else
          h
            ? ((u[l] = o), Te(d, l) && (d[l] = o))
            : f && ((l.value = o), t.k && (u[t.k] = o));
      };
      o ? ((g.id = -1), rt(g, n)) : g();
    }
  }
}
const rt = Pb;
function aE(t) {
  return lE(t);
}
function lE(t, e) {
  const n = ru();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: i,
      patchProp: s,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: h,
      setScopeId: f = ln,
      insertStaticContent: g,
    } = t,
    y = (
      p,
      m,
      b,
      A = null,
      x = null,
      D = null,
      F = !1,
      M = null,
      U = !!m.dynamicChildren
    ) => {
      if (p === m) return;
      p && !rr(p, m) && ((A = I(p)), Qe(p, x, D, !0), (p = null)),
        m.patchFlag === -2 && ((U = !1), (m.dynamicChildren = null));
      const { type: P, ref: X, shapeFlag: K } = m;
      switch (P) {
        case vl:
          _(p, m, b, A);
          break;
        case Ht:
          T(p, m, b, A);
          break;
        case As:
          p == null && v(m, b, A, F);
          break;
        case Ue:
          j(p, m, b, A, x, D, F, M, U);
          break;
        default:
          K & 1
            ? O(p, m, b, A, x, D, F, M, U)
            : K & 6
            ? se(p, m, b, A, x, D, F, M, U)
            : (K & 64 || K & 128) && P.process(p, m, b, A, x, D, F, M, U, Y);
      }
      X != null && x && fu(X, p && p.ref, D, m || p, !m);
    },
    _ = (p, m, b, A) => {
      if (p == null) r((m.el = a(m.children)), b, A);
      else {
        const x = (m.el = p.el);
        m.children !== p.children && c(x, m.children);
      }
    },
    T = (p, m, b, A) => {
      p == null ? r((m.el = l(m.children || "")), b, A) : (m.el = p.el);
    },
    v = (p, m, b, A) => {
      [p.el, p.anchor] = g(p.children, m, b, A, p.el, p.anchor);
    },
    k = ({ el: p, anchor: m }, b, A) => {
      let x;
      for (; p && p !== m; ) (x = h(p)), r(p, b, A), (p = x);
      r(m, b, A);
    },
    E = ({ el: p, anchor: m }) => {
      let b;
      for (; p && p !== m; ) (b = h(p)), i(p), (p = b);
      i(m);
    },
    O = (p, m, b, A, x, D, F, M, U) => {
      (F = F || m.type === "svg"),
        p == null ? V(m, b, A, x, D, F, M, U) : B(p, m, x, D, F, M, U);
    },
    V = (p, m, b, A, x, D, F, M) => {
      let U, P;
      const { type: X, props: K, shapeFlag: J, transition: te, dirs: oe } = p;
      if (
        ((U = p.el = o(p.type, D, K && K.is, K)),
        J & 8
          ? u(U, p.children)
          : J & 16 &&
            L(p.children, U, null, A, x, D && X !== "foreignObject", F, M),
        oe && xr(p, null, A, "created"),
        z(U, p, p.scopeId, F, A),
        K)
      ) {
        for (const Ce in K)
          Ce !== "value" &&
            !la(Ce) &&
            s(U, Ce, null, K[Ce], D, p.children, A, x, W);
        "value" in K && s(U, "value", null, K.value),
          (P = K.onVnodeBeforeMount) && Bt(P, A, p);
      }
      oe && xr(p, null, A, "beforeMount");
      const ye = cE(x, te);
      ye && te.beforeEnter(U),
        r(U, m, b),
        ((P = K && K.onVnodeMounted) || ye || oe) &&
          rt(() => {
            P && Bt(P, A, p),
              ye && te.enter(U),
              oe && xr(p, null, A, "mounted");
          }, x);
    },
    z = (p, m, b, A, x) => {
      if ((b && f(p, b), A)) for (let D = 0; D < A.length; D++) f(p, A[D]);
      if (x) {
        let D = x.subTree;
        if (m === D) {
          const F = x.vnode;
          z(p, F, F.scopeId, F.slotScopeIds, x.parent);
        }
      }
    },
    L = (p, m, b, A, x, D, F, M, U = 0) => {
      for (let P = U; P < p.length; P++) {
        const X = (p[P] = M ? tr(p[P]) : rn(p[P]));
        y(null, X, m, b, A, x, D, F, M);
      }
    },
    B = (p, m, b, A, x, D, F) => {
      const M = (m.el = p.el);
      let { patchFlag: U, dynamicChildren: P, dirs: X } = m;
      U |= p.patchFlag & 16;
      const K = p.props || Me,
        J = m.props || Me;
      let te;
      b && Rr(b, !1),
        (te = J.onVnodeBeforeUpdate) && Bt(te, b, m, p),
        X && xr(m, p, b, "beforeUpdate"),
        b && Rr(b, !0);
      const oe = x && m.type !== "foreignObject";
      if (
        (P
          ? ee(p.dynamicChildren, P, M, b, A, oe, D)
          : F || _e(p, m, M, null, b, A, oe, D, !1),
        U > 0)
      ) {
        if (U & 16) fe(M, m, K, J, b, A, x);
        else if (
          (U & 2 && K.class !== J.class && s(M, "class", null, J.class, x),
          U & 4 && s(M, "style", K.style, J.style, x),
          U & 8)
        ) {
          const ye = m.dynamicProps;
          for (let Ce = 0; Ce < ye.length; Ce++) {
            const ke = ye[Ce],
              Nt = K[ke],
              Hn = J[ke];
            (Hn !== Nt || ke === "value") &&
              s(M, ke, Nt, Hn, x, p.children, b, A, W);
          }
        }
        U & 1 && p.children !== m.children && u(M, m.children);
      } else !F && P == null && fe(M, m, K, J, b, A, x);
      ((te = J.onVnodeUpdated) || X) &&
        rt(() => {
          te && Bt(te, b, m, p), X && xr(m, p, b, "updated");
        }, A);
    },
    ee = (p, m, b, A, x, D, F) => {
      for (let M = 0; M < m.length; M++) {
        const U = p[M],
          P = m[M],
          X =
            U.el && (U.type === Ue || !rr(U, P) || U.shapeFlag & 70)
              ? d(U.el)
              : b;
        y(U, P, X, null, A, x, D, F, !0);
      }
    },
    fe = (p, m, b, A, x, D, F) => {
      if (b !== A) {
        if (b !== Me)
          for (const M in b)
            !la(M) && !(M in A) && s(p, M, b[M], null, F, m.children, x, D, W);
        for (const M in A) {
          if (la(M)) continue;
          const U = A[M],
            P = b[M];
          U !== P && M !== "value" && s(p, M, P, U, F, m.children, x, D, W);
        }
        "value" in A && s(p, "value", b.value, A.value);
      }
    },
    j = (p, m, b, A, x, D, F, M, U) => {
      const P = (m.el = p ? p.el : a("")),
        X = (m.anchor = p ? p.anchor : a(""));
      let { patchFlag: K, dynamicChildren: J, slotScopeIds: te } = m;
      te && (M = M ? M.concat(te) : te),
        p == null
          ? (r(P, b, A), r(X, b, A), L(m.children, b, X, x, D, F, M, U))
          : K > 0 && K & 64 && J && p.dynamicChildren
          ? (ee(p.dynamicChildren, J, b, x, D, F, M),
            (m.key != null || (x && m === x.subTree)) && ev(p, m, !0))
          : _e(p, m, b, X, x, D, F, M, U);
    },
    se = (p, m, b, A, x, D, F, M, U) => {
      (m.slotScopeIds = M),
        p == null
          ? m.shapeFlag & 512
            ? x.ctx.activate(m, b, A, F, U)
            : Ie(m, b, A, x, D, F, U)
          : Et(p, m, U);
    },
    Ie = (p, m, b, A, x, D, F) => {
      const M = (p.component = gE(p, A, x));
      if ((pl(p) && (M.ctx.renderer = Y), vE(M), M.asyncDep)) {
        if ((x && x.registerDep(M, De), !p.el)) {
          const U = (M.subTree = me(Ht));
          T(null, U, m, b);
        }
        return;
      }
      De(M, p, m, b, x, D, F);
    },
    Et = (p, m, b) => {
      const A = (m.component = p.component);
      if (qb(p, m, b))
        if (A.asyncDep && !A.asyncResolved) {
          Re(A, m, b);
          return;
        } else (A.next = m), Tb(A.update), A.update();
      else (m.el = p.el), (A.vnode = m);
    },
    De = (p, m, b, A, x, D, F) => {
      const M = () => {
          if (p.isMounted) {
            let { next: X, bu: K, u: J, parent: te, vnode: oe } = p,
              ye = X,
              Ce;
            Rr(p, !1),
              X ? ((X.el = oe.el), Re(p, X, F)) : (X = oe),
              K && Ti(K),
              (Ce = X.props && X.props.onVnodeBeforeUpdate) &&
                Bt(Ce, te, X, oe),
              Rr(p, !0);
            const ke = wc(p),
              Nt = p.subTree;
            (p.subTree = ke),
              y(Nt, ke, d(Nt.el), I(Nt), p, x, D),
              (X.el = ke.el),
              ye === null && xb(p, ke.el),
              J && rt(J, x),
              (Ce = X.props && X.props.onVnodeUpdated) &&
                rt(() => Bt(Ce, te, X, oe), x);
          } else {
            let X;
            const { el: K, props: J } = m,
              { bm: te, m: oe, parent: ye } = p,
              Ce = Ci(m);
            if (
              (Rr(p, !1),
              te && Ti(te),
              !Ce && (X = J && J.onVnodeBeforeMount) && Bt(X, ye, m),
              Rr(p, !0),
              K && le)
            ) {
              const ke = () => {
                (p.subTree = wc(p)), le(K, p.subTree, p, x, null);
              };
              Ce
                ? m.type.__asyncLoader().then(() => !p.isUnmounted && ke())
                : ke();
            } else {
              const ke = (p.subTree = wc(p));
              y(null, ke, b, A, p, x, D), (m.el = ke.el);
            }
            if ((oe && rt(oe, x), !Ce && (X = J && J.onVnodeMounted))) {
              const ke = m;
              rt(() => Bt(X, ye, ke), x);
            }
            (m.shapeFlag & 256 ||
              (ye && Ci(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
              p.a &&
              rt(p.a, x),
              (p.isMounted = !0),
              (m = b = A = null);
          }
        },
        U = (p.effect = new cd(M, () => md(P), p.scope)),
        P = (p.update = () => U.run());
      (P.id = p.uid), Rr(p, !0), P();
    },
    Re = (p, m, b) => {
      m.component = p;
      const A = p.vnode.props;
      (p.vnode = m),
        (p.next = null),
        rE(p, m.props, A, b),
        oE(p, m.children, b),
        ts(),
        af(),
        ns();
    },
    _e = (p, m, b, A, x, D, F, M, U = !1) => {
      const P = p && p.children,
        X = p ? p.shapeFlag : 0,
        K = m.children,
        { patchFlag: J, shapeFlag: te } = m;
      if (J > 0) {
        if (J & 128) {
          Gt(P, K, b, A, x, D, F, M, U);
          return;
        } else if (J & 256) {
          kt(P, K, b, A, x, D, F, M, U);
          return;
        }
      }
      te & 8
        ? (X & 16 && W(P, x, D), K !== P && u(b, K))
        : X & 16
        ? te & 16
          ? Gt(P, K, b, A, x, D, F, M, U)
          : W(P, x, D, !0)
        : (X & 8 && u(b, ""), te & 16 && L(K, b, A, x, D, F, M, U));
    },
    kt = (p, m, b, A, x, D, F, M, U) => {
      (p = p || bi), (m = m || bi);
      const P = p.length,
        X = m.length,
        K = Math.min(P, X);
      let J;
      for (J = 0; J < K; J++) {
        const te = (m[J] = U ? tr(m[J]) : rn(m[J]));
        y(p[J], te, b, null, x, D, F, M, U);
      }
      P > X ? W(p, x, D, !0, !1, K) : L(m, b, A, x, D, F, M, U, K);
    },
    Gt = (p, m, b, A, x, D, F, M, U) => {
      let P = 0;
      const X = m.length;
      let K = p.length - 1,
        J = X - 1;
      for (; P <= K && P <= J; ) {
        const te = p[P],
          oe = (m[P] = U ? tr(m[P]) : rn(m[P]));
        if (rr(te, oe)) y(te, oe, b, null, x, D, F, M, U);
        else break;
        P++;
      }
      for (; P <= K && P <= J; ) {
        const te = p[K],
          oe = (m[J] = U ? tr(m[J]) : rn(m[J]));
        if (rr(te, oe)) y(te, oe, b, null, x, D, F, M, U);
        else break;
        K--, J--;
      }
      if (P > K) {
        if (P <= J) {
          const te = J + 1,
            oe = te < X ? m[te].el : A;
          for (; P <= J; )
            y(null, (m[P] = U ? tr(m[P]) : rn(m[P])), b, oe, x, D, F, M, U),
              P++;
        }
      } else if (P > J) for (; P <= K; ) Qe(p[P], x, D, !0), P++;
      else {
        const te = P,
          oe = P,
          ye = new Map();
        for (P = oe; P <= J; P++) {
          const Tt = (m[P] = U ? tr(m[P]) : rn(m[P]));
          Tt.key != null && ye.set(Tt.key, P);
        }
        let Ce,
          ke = 0;
        const Nt = J - oe + 1;
        let Hn = !1,
          Fo = 0;
        const Sr = new Array(Nt);
        for (P = 0; P < Nt; P++) Sr[P] = 0;
        for (P = te; P <= K; P++) {
          const Tt = p[P];
          if (ke >= Nt) {
            Qe(Tt, x, D, !0);
            continue;
          }
          let Ft;
          if (Tt.key != null) Ft = ye.get(Tt.key);
          else
            for (Ce = oe; Ce <= J; Ce++)
              if (Sr[Ce - oe] === 0 && rr(Tt, m[Ce])) {
                Ft = Ce;
                break;
              }
          Ft === void 0
            ? Qe(Tt, x, D, !0)
            : ((Sr[Ft - oe] = P + 1),
              Ft >= Fo ? (Fo = Ft) : (Hn = !0),
              y(Tt, m[Ft], b, null, x, D, F, M, U),
              ke++);
        }
        const qr = Hn ? uE(Sr) : bi;
        for (Ce = qr.length - 1, P = Nt - 1; P >= 0; P--) {
          const Tt = oe + P,
            Ft = m[Tt],
            Uo = Tt + 1 < X ? m[Tt + 1].el : A;
          Sr[P] === 0
            ? y(null, Ft, b, Uo, x, D, F, M, U)
            : Hn && (Ce < 0 || P !== qr[Ce] ? Dt(Ft, b, Uo, 2) : Ce--);
        }
      }
    },
    Dt = (p, m, b, A, x = null) => {
      const { el: D, type: F, transition: M, children: U, shapeFlag: P } = p;
      if (P & 6) {
        Dt(p.component.subTree, m, b, A);
        return;
      }
      if (P & 128) {
        p.suspense.move(m, b, A);
        return;
      }
      if (P & 64) {
        F.move(p, m, b, Y);
        return;
      }
      if (F === Ue) {
        r(D, m, b);
        for (let K = 0; K < U.length; K++) Dt(U[K], m, b, A);
        r(p.anchor, m, b);
        return;
      }
      if (F === As) {
        k(p, m, b);
        return;
      }
      if (A !== 2 && P & 1 && M)
        if (A === 0) M.beforeEnter(D), r(D, m, b), rt(() => M.enter(D), x);
        else {
          const { leave: K, delayLeave: J, afterLeave: te } = M,
            oe = () => r(D, m, b),
            ye = () => {
              K(D, () => {
                oe(), te && te();
              });
            };
          J ? J(D, oe, ye) : ye();
        }
      else r(D, m, b);
    },
    Qe = (p, m, b, A = !1, x = !1) => {
      const {
        type: D,
        props: F,
        ref: M,
        children: U,
        dynamicChildren: P,
        shapeFlag: X,
        patchFlag: K,
        dirs: J,
      } = p;
      if ((M != null && fu(M, null, b, p, !0), X & 256)) {
        m.ctx.deactivate(p);
        return;
      }
      const te = X & 1 && J,
        oe = !Ci(p);
      let ye;
      if ((oe && (ye = F && F.onVnodeBeforeUnmount) && Bt(ye, m, p), X & 6))
        S(p.component, b, A);
      else {
        if (X & 128) {
          p.suspense.unmount(b, A);
          return;
        }
        te && xr(p, null, m, "beforeUnmount"),
          X & 64
            ? p.type.remove(p, m, b, x, Y, A)
            : P && (D !== Ue || (K > 0 && K & 64))
            ? W(P, m, b, !1, !0)
            : ((D === Ue && K & 384) || (!x && X & 16)) && W(U, m, b),
          A && pn(p);
      }
      ((oe && (ye = F && F.onVnodeUnmounted)) || te) &&
        rt(() => {
          ye && Bt(ye, m, p), te && xr(p, null, m, "unmounted");
        }, b);
    },
    pn = (p) => {
      const { type: m, el: b, anchor: A, transition: x } = p;
      if (m === Ue) {
        kr(b, A);
        return;
      }
      if (m === As) {
        E(p);
        return;
      }
      const D = () => {
        i(b), x && !x.persisted && x.afterLeave && x.afterLeave();
      };
      if (p.shapeFlag & 1 && x && !x.persisted) {
        const { leave: F, delayLeave: M } = x,
          U = () => F(b, D);
        M ? M(p.el, D, U) : U();
      } else D();
    },
    kr = (p, m) => {
      let b;
      for (; p !== m; ) (b = h(p)), i(p), (p = b);
      i(m);
    },
    S = (p, m, b) => {
      const { bum: A, scope: x, update: D, subTree: F, um: M } = p;
      A && Ti(A),
        x.stop(),
        D && ((D.active = !1), Qe(F, p, m, b)),
        M && rt(M, m),
        rt(() => {
          p.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    W = (p, m, b, A = !1, x = !1, D = 0) => {
      for (let F = D; F < p.length; F++) Qe(p[F], m, b, A, x);
    },
    I = (p) =>
      p.shapeFlag & 6
        ? I(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : h(p.anchor || p.el),
    $ = (p, m, b) => {
      p == null
        ? m._vnode && Qe(m._vnode, null, null, !0)
        : y(m._vnode || null, p, m, null, null, null, b),
        af(),
        Dg(),
        (m._vnode = p);
    },
    Y = {
      p: y,
      um: Qe,
      m: Dt,
      r: pn,
      mt: Ie,
      mc: L,
      pc: _e,
      pbc: ee,
      n: I,
      o: t,
    };
  let Ae, le;
  return (
    e && ([Ae, le] = e(Y)), { render: $, hydrate: Ae, createApp: tE($, Ae) }
  );
}
function Rr({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function cE(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function ev(t, e, n = !1) {
  const r = t.children,
    i = e.children;
  if (ie(r) && ie(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[s] = tr(i[s])), (a.el = o.el)),
        n || ev(o, a)),
        a.type === vl && (a.el = o.el);
    }
}
function uE(t) {
  const e = t.slice(),
    n = [0];
  let r, i, s, o, a;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const c = t[r];
    if (c !== 0) {
      if (((i = n[n.length - 1]), t[i] < c)) {
        (e[r] = i), n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        (a = (s + o) >> 1), t[n[a]] < c ? (s = a + 1) : (o = a);
      c < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; ) (n[s] = o), (o = e[o]);
  return n;
}
const dE = (t) => t.__isTeleport,
  Ue = Symbol.for("v-fgt"),
  vl = Symbol.for("v-txt"),
  Ht = Symbol.for("v-cmt"),
  As = Symbol.for("v-stc"),
  Cs = [];
let Jt = null;
function R(t = !1) {
  Cs.push((Jt = t ? null : []));
}
function hE() {
  Cs.pop(), (Jt = Cs[Cs.length - 1] || null);
}
let Hs = 1;
function bf(t) {
  Hs += t;
}
function tv(t) {
  return (
    (t.dynamicChildren = Hs > 0 ? Jt || bi : null),
    hE(),
    Hs > 0 && Jt && Jt.push(t),
    t
  );
}
function H(t, e, n, r, i, s) {
  return tv(w(t, e, n, r, i, s, !0));
}
function xe(t, e, n, r, i) {
  return tv(me(t, e, n, r, i, !0));
}
function zs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function rr(t, e) {
  return t.type === e.type && t.key === e.key;
}
const yl = "__vInternal",
  nv = ({ key: t }) => t ?? null,
  da = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Be(t) || ot(t) || de(t)
        ? { i: at, r: t, k: e, f: !!n }
        : t
      : null
  );
function w(
  t,
  e = null,
  n = null,
  r = 0,
  i = null,
  s = t === Ue ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && nv(e),
    ref: e && da(e),
    scopeId: fl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: at,
  };
  return (
    a
      ? (Td(l, n), s & 128 && t.normalize(l))
      : n && (l.shapeFlag |= Be(n) ? 8 : 16),
    Hs > 0 &&
      !o &&
      Jt &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      Jt.push(l),
    l
  );
}
const me = fE;
function fE(t, e = null, n = null, r = 0, i = null, s = !1) {
  if (((!t || t === $g) && (t = Ht), zs(t))) {
    const a = kn(t, e, !0);
    return (
      n && Td(a, n),
      Hs > 0 &&
        !s &&
        Jt &&
        (a.shapeFlag & 6 ? (Jt[Jt.indexOf(t)] = a) : Jt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((bE(t) && (t = t.__vccOpts), e)) {
    e = rv(e);
    let { class: a, style: l } = e;
    a && !Be(a) && (e.class = Ne(a)),
      Ve(l) && (Cg(l) && !ie(l) && (l = We({}, l)), (e.style = cr(l)));
  }
  const o = Be(t) ? 1 : Vg(t) ? 128 : dE(t) ? 64 : Ve(t) ? 4 : de(t) ? 2 : 0;
  return w(t, e, n, r, i, o, s, !0);
}
function rv(t) {
  return t ? (Cg(t) || yl in t ? We({}, t) : t) : null;
}
function kn(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = t,
    a = e ? Mi(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && nv(a),
    ref:
      e && e.ref
        ? n && i
          ? ie(i)
            ? i.concat(da(e))
            : [i, da(e)]
          : da(e)
        : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Ue ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && kn(t.ssContent),
    ssFallback: t.ssFallback && kn(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function lt(t = " ", e = 0) {
  return me(vl, null, t, e);
}
function nn(t, e) {
  const n = me(As, null, t);
  return (n.staticCount = e), n;
}
function Oe(t = "", e = !1) {
  return e ? (R(), xe(Ht, null, t)) : me(Ht, null, t);
}
function rn(t) {
  return t == null || typeof t == "boolean"
    ? me(Ht)
    : ie(t)
    ? me(Ue, null, t.slice())
    : typeof t == "object"
    ? tr(t)
    : me(vl, null, String(t));
}
function tr(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : kn(t);
}
function Td(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null) e = null;
  else if (ie(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Td(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(yl in e)
        ? (e._ctx = at)
        : i === 3 &&
          at &&
          (at.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    de(e)
      ? ((e = { default: e, _ctx: at }), (n = 32))
      : ((e = String(e)), r & 64 ? ((n = 16), (e = [lt(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Mi(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = Ne([e.class, r.class]));
      else if (i === "style") e.style = cr([e.style, r.style]);
      else if (ol(i)) {
        const s = e[i],
          o = r[i];
        o &&
          s !== o &&
          !(ie(s) && s.includes(o)) &&
          (e[i] = s ? [].concat(s, o) : o);
      } else i !== "" && (e[i] = r[i]);
  }
  return e;
}
function Bt(t, e, n, r = null) {
  jt(t, e, 7, [n, r]);
}
const pE = Gg();
let mE = 0;
function gE(t, e, n) {
  const r = t.type,
    i = (e ? e.appContext : t.appContext) || pE,
    s = {
      uid: mE++,
      vnode: t,
      type: r,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new j0(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Yg(r, i),
      emitsOptions: Lg(r, i),
      emit: null,
      emitted: null,
      propsDefaults: Me,
      inheritAttrs: r.inheritAttrs,
      ctx: Me,
      data: Me,
      props: Me,
      attrs: Me,
      slots: Me,
      refs: Me,
      setupState: Me,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = e ? e.root : s),
    (s.emit = Cb.bind(null, s)),
    t.ce && t.ce(s),
    s
  );
}
let tt = null;
const fo = () => tt || at;
let Id,
  fi,
  Ef = "__VUE_INSTANCE_SETTERS__";
(fi = ru()[Ef]) || (fi = ru()[Ef] = []),
  fi.push((t) => (tt = t)),
  (Id = (t) => {
    fi.length > 1 ? fi.forEach((e) => e(t)) : fi[0](t);
  });
const $i = (t) => {
    Id(t), t.scope.on();
  },
  Hr = () => {
    tt && tt.scope.off(), Id(null);
  };
function iv(t) {
  return t.vnode.shapeFlag & 4;
}
let Ws = !1;
function vE(t, e = !1) {
  Ws = e;
  const { props: n, children: r } = t.vnode,
    i = iv(t);
  nE(t, n, i, e), sE(t, r);
  const s = i ? yE(t, e) : void 0;
  return (Ws = !1), s;
}
function yE(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = kg(new Proxy(t.ctx, Gb)));
  const { setup: r } = n;
  if (r) {
    const i = (t.setupContext = r.length > 1 ? wE(t) : null);
    $i(t), ts();
    const s = hr(r, t, 0, [t.props, i]);
    if ((ns(), Hr(), cg(s))) {
      if ((s.then(Hr, Hr), e))
        return s
          .then((o) => {
            Tf(t, o, e);
          })
          .catch((o) => {
            dl(o, t, 0);
          });
      t.asyncDep = s;
    } else Tf(t, s, e);
  } else sv(t, e);
}
function Tf(t, e, n) {
  de(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Ve(e) && (t.setupState = Rg(e)),
    sv(t, n);
}
let If;
function sv(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && If && !r.render) {
      const i = r.template || bd(t).template;
      if (i) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          c = We(We({ isCustomElement: s, delimiters: a }, o), l);
        r.render = If(i, c);
      }
    }
    t.render = r.render || ln;
  }
  {
    $i(t), ts();
    try {
      Qb(t);
    } finally {
      ns(), Hr();
    }
  }
}
function _E(t) {
  return (
    t.attrsProxy ||
    (t.attrsProxy = new Proxy(t.attrs, {
      get(e, n) {
        return Ot(t, "get", "$attrs"), e[n];
      },
    }))
  );
}
function wE(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return _E(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function _l(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(Rg(kg(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in Is) return Is[n](t);
        },
        has(e, n) {
          return n in e || n in Is;
        },
      }))
    );
}
function pu(t, e = !0) {
  return de(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function bE(t) {
  return de(t) && "__vccOpts" in t;
}
const ge = (t, e) => wb(t, e, Ws);
function wl(t, e, n) {
  const r = arguments.length;
  return r === 2
    ? Ve(e) && !ie(e)
      ? zs(e)
        ? me(t, null, [e])
        : me(t, e)
      : me(t, null, e)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && zs(n) && (n = [n]),
      me(t, e, n));
}
const EE = Symbol.for("v-scx"),
  TE = () => Zt(EE),
  IE = "3.3.9",
  AE = "http://www.w3.org/2000/svg",
  Mr = typeof document < "u" ? document : null,
  Af = Mr && Mr.createElement("template"),
  CE = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const i = e
        ? Mr.createElementNS(AE, t)
        : Mr.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          r &&
          r.multiple != null &&
          i.setAttribute("multiple", r.multiple),
        i
      );
    },
    createText: (t) => Mr.createTextNode(t),
    createComment: (t) => Mr.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Mr.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, r, i, s) {
      const o = n ? n.previousSibling : e.lastChild;
      if (i && (i === s || i.nextSibling))
        for (
          ;
          e.insertBefore(i.cloneNode(!0), n),
            !(i === s || !(i = i.nextSibling));

        );
      else {
        Af.innerHTML = r ? `<svg>${t}</svg>` : t;
        const a = Af.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        e.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  },
  Gn = "transition",
  hs = "animation",
  Vi = Symbol("_vtc"),
  vr = (t, { slots: e }) => wl(Lb, av(t), e);
vr.displayName = "Transition";
const ov = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  kE = (vr.props = We({}, Bg, ov)),
  Pr = (t, e = []) => {
    ie(t) ? t.forEach((n) => n(...e)) : t && t(...e);
  },
  Cf = (t) => (t ? (ie(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function av(t) {
  const e = {};
  for (const j in t) j in ov || (e[j] = t[j]);
  if (t.css === !1) return e;
  const {
      name: n = "v",
      type: r,
      duration: i,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = s,
      appearActiveClass: c = o,
      appearToClass: u = a,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: f = `${n}-leave-to`,
    } = t,
    g = SE(i),
    y = g && g[0],
    _ = g && g[1],
    {
      onBeforeEnter: T,
      onEnter: v,
      onEnterCancelled: k,
      onLeave: E,
      onLeaveCancelled: O,
      onBeforeAppear: V = T,
      onAppear: z = v,
      onAppearCancelled: L = k,
    } = e,
    B = (j, se, Ie) => {
      Xn(j, se ? u : a), Xn(j, se ? c : o), Ie && Ie();
    },
    ee = (j, se) => {
      (j._isLeaving = !1), Xn(j, d), Xn(j, f), Xn(j, h), se && se();
    },
    fe = (j) => (se, Ie) => {
      const Et = j ? z : v,
        De = () => B(se, j, Ie);
      Pr(Et, [se, De]),
        kf(() => {
          Xn(se, j ? l : s), gn(se, j ? u : a), Cf(Et) || Sf(se, r, y, De);
        });
    };
  return We(e, {
    onBeforeEnter(j) {
      Pr(T, [j]), gn(j, s), gn(j, o);
    },
    onBeforeAppear(j) {
      Pr(V, [j]), gn(j, l), gn(j, c);
    },
    onEnter: fe(!1),
    onAppear: fe(!0),
    onLeave(j, se) {
      j._isLeaving = !0;
      const Ie = () => ee(j, se);
      gn(j, d),
        cv(),
        gn(j, h),
        kf(() => {
          j._isLeaving && (Xn(j, d), gn(j, f), Cf(E) || Sf(j, r, _, Ie));
        }),
        Pr(E, [j, Ie]);
    },
    onEnterCancelled(j) {
      B(j, !1), Pr(k, [j]);
    },
    onAppearCancelled(j) {
      B(j, !0), Pr(L, [j]);
    },
    onLeaveCancelled(j) {
      ee(j), Pr(O, [j]);
    },
  });
}
function SE(t) {
  if (t == null) return null;
  if (Ve(t)) return [Ac(t.enter), Ac(t.leave)];
  {
    const e = Ac(t);
    return [e, e];
  }
}
function Ac(t) {
  return N0(t);
}
function gn(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)),
    (t[Vi] || (t[Vi] = new Set())).add(e);
}
function Xn(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const n = t[Vi];
  n && (n.delete(e), n.size || (t[Vi] = void 0));
}
function kf(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let qE = 0;
function Sf(t, e, n, r) {
  const i = (t._endId = ++qE),
    s = () => {
      i === t._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: o, timeout: a, propCount: l } = lv(t, e);
  if (!o) return r();
  const c = o + "end";
  let u = 0;
  const d = () => {
      t.removeEventListener(c, h), s();
    },
    h = (f) => {
      f.target === t && ++u >= l && d();
    };
  setTimeout(() => {
    u < l && d();
  }, a + 1),
    t.addEventListener(c, h);
}
function lv(t, e) {
  const n = window.getComputedStyle(t),
    r = (g) => (n[g] || "").split(", "),
    i = r(`${Gn}Delay`),
    s = r(`${Gn}Duration`),
    o = qf(i, s),
    a = r(`${hs}Delay`),
    l = r(`${hs}Duration`),
    c = qf(a, l);
  let u = null,
    d = 0,
    h = 0;
  e === Gn
    ? o > 0 && ((u = Gn), (d = o), (h = s.length))
    : e === hs
    ? c > 0 && ((u = hs), (d = c), (h = l.length))
    : ((d = Math.max(o, c)),
      (u = d > 0 ? (o > c ? Gn : hs) : null),
      (h = u ? (u === Gn ? s.length : l.length) : 0));
  const f =
    u === Gn && /\b(transform|all)(,|$)/.test(r(`${Gn}Property`).toString());
  return { type: u, timeout: d, propCount: h, hasTransform: f };
}
function qf(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, r) => xf(n) + xf(t[r])));
}
function xf(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function cv() {
  return document.body.offsetHeight;
}
function xE(t, e, n) {
  const r = t[Vi];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
const Ad = Symbol("_vod"),
  Rf = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t[Ad] = t.style.display === "none" ? "" : t.style.display),
        n && e ? n.beforeEnter(t) : fs(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: r }) {
      !e != !n &&
        (r
          ? e
            ? (r.beforeEnter(t), fs(t, !0), r.enter(t))
            : r.leave(t, () => {
                fs(t, !1);
              })
          : fs(t, e));
    },
    beforeUnmount(t, { value: e }) {
      fs(t, e);
    },
  };
function fs(t, e) {
  t.style.display = e ? t[Ad] : "none";
}
function RE(t, e, n) {
  const r = t.style,
    i = Be(n);
  if (n && !i) {
    if (e && !Be(e)) for (const s in e) n[s] == null && mu(r, s, "");
    for (const s in n) mu(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"),
      Ad in t && (r.display = s);
  }
}
const Pf = /\s*!important$/;
function mu(t, e, n) {
  if (ie(n)) n.forEach((r) => mu(t, e, r));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const r = PE(t, e);
    Pf.test(n)
      ? t.setProperty(ri(r), n.replace(Pf, ""), "important")
      : (t[r] = n);
  }
}
const Of = ["Webkit", "Moz", "ms"],
  Cc = {};
function PE(t, e) {
  const n = Cc[e];
  if (n) return n;
  let r = dn(e);
  if (r !== "filter" && r in t) return (Cc[e] = r);
  r = cl(r);
  for (let i = 0; i < Of.length; i++) {
    const s = Of[i] + r;
    if (s in t) return (Cc[e] = s);
  }
  return e;
}
const Df = "http://www.w3.org/1999/xlink";
function OE(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(Df, e.slice(6, e.length))
      : t.setAttributeNS(Df, e, n);
  else {
    const s = B0(e);
    n == null || (s && !hg(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, s ? "" : n);
  }
}
function DE(t, e, n, r, i, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    r && o(r, i, s), (t[e] = n ?? "");
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && !a.includes("-")) {
    t._value = n;
    const c = a === "OPTION" ? t.getAttribute("value") : t.value,
      u = n ?? "";
    c !== u && (t.value = u), n == null && t.removeAttribute(e);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean"
      ? (n = hg(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    t[e] = n;
  } catch {}
  l && t.removeAttribute(e);
}
function gi(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function NE(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const Nf = Symbol("_vei");
function LE(t, e, n, r, i = null) {
  const s = t[Nf] || (t[Nf] = {}),
    o = s[e];
  if (r && o) o.value = r;
  else {
    const [a, l] = ME(e);
    if (r) {
      const c = (s[e] = FE(r, i));
      gi(t, a, c, l);
    } else o && (NE(t, a, o, l), (s[e] = void 0));
  }
}
const Lf = /(?:Once|Passive|Capture)$/;
function ME(t) {
  let e;
  if (Lf.test(t)) {
    e = {};
    let r;
    for (; (r = t.match(Lf)); )
      (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : ri(t.slice(2)), e];
}
let kc = 0;
const $E = Promise.resolve(),
  VE = () => kc || ($E.then(() => (kc = 0)), (kc = Date.now()));
function FE(t, e) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    jt(UE(r, n.value), e, 5, [r]);
  };
  return (n.value = t), (n.attached = VE()), n;
}
function UE(t, e) {
  if (ie(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((r) => (i) => !i._stopped && r && r(i))
    );
  } else return e;
}
const Mf = /^on[a-z]/,
  BE = (t, e, n, r, i = !1, s, o, a, l) => {
    e === "class"
      ? xE(t, r, i)
      : e === "style"
      ? RE(t, n, r)
      : ol(e)
      ? sd(e) || LE(t, e, n, r, o)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : jE(t, e, r, i)
        )
      ? DE(t, e, r, s, o, a, l)
      : (e === "true-value"
          ? (t._trueValue = r)
          : e === "false-value" && (t._falseValue = r),
        OE(t, e, r, i));
  };
function jE(t, e, n, r) {
  return r
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && Mf.test(e) && de(n))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (Mf.test(e) && Be(n))
    ? !1
    : e in t;
}
function bl(t) {
  const e = fo();
  if (!e) return;
  const n = (e.ut = (i = t(e.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
      ).forEach((s) => vu(s, i));
    }),
    r = () => {
      const i = t(e.proxy);
      gu(e.subTree, i), n(i);
    };
  Ob(r),
    tn(() => {
      const i = new MutationObserver(r);
      i.observe(e.subTree.el.parentNode, { childList: !0 }),
        rs(() => i.disconnect());
    });
}
function gu(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    (t = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          gu(n.activeBranch, e);
        });
  }
  for (; t.component; ) t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el) vu(t.el, e);
  else if (t.type === Ue) t.children.forEach((n) => gu(n, e));
  else if (t.type === As) {
    let { el: n, anchor: r } = t;
    for (; n && (vu(n, e), n !== r); ) n = n.nextSibling;
  }
}
function vu(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    for (const r in e) n.setProperty(`--${r}`, e[r]);
  }
}
const uv = new WeakMap(),
  dv = new WeakMap(),
  xa = Symbol("_moveCb"),
  $f = Symbol("_enterCb"),
  hv = {
    name: "TransitionGroup",
    props: We({}, kE, { tag: String, moveClass: String }),
    setup(t, { slots: e }) {
      const n = fo(),
        r = Ug();
      let i, s;
      return (
        wd(() => {
          if (!i.length) return;
          const o = t.moveClass || `${t.name || "v"}-move`;
          if (!GE(i[0].el, n.vnode.el, o)) return;
          i.forEach(zE), i.forEach(WE);
          const a = i.filter(KE);
          cv(),
            a.forEach((l) => {
              const c = l.el,
                u = c.style;
              gn(c, o),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const d = (c[xa] = (h) => {
                (h && h.target !== c) ||
                  ((!h || /transform$/.test(h.propertyName)) &&
                    (c.removeEventListener("transitionend", d),
                    (c[xa] = null),
                    Xn(c, o)));
              });
              c.addEventListener("transitionend", d);
            });
        }),
        () => {
          const o = be(t),
            a = av(o);
          let l = o.tag || Ue;
          (i = s), (s = e.default ? _d(e.default()) : []);
          for (let c = 0; c < s.length; c++) {
            const u = s[c];
            u.key != null && Di(u, js(u, a, r, n));
          }
          if (i)
            for (let c = 0; c < i.length; c++) {
              const u = i[c];
              Di(u, js(u, a, r, n)), uv.set(u, u.el.getBoundingClientRect());
            }
          return me(l, null, s);
        }
      );
    },
  },
  HE = (t) => delete t.mode;
hv.props;
const JN = hv;
function zE(t) {
  const e = t.el;
  e[xa] && e[xa](), e[$f] && e[$f]();
}
function WE(t) {
  dv.set(t, t.el.getBoundingClientRect());
}
function KE(t) {
  const e = uv.get(t),
    n = dv.get(t),
    r = e.left - n.left,
    i = e.top - n.top;
  if (r || i) {
    const s = t.el.style;
    return (
      (s.transform = s.webkitTransform = `translate(${r}px,${i}px)`),
      (s.transitionDuration = "0s"),
      t
    );
  }
}
function GE(t, e, n) {
  const r = t.cloneNode(),
    i = t[Vi];
  i &&
    i.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = "none");
  const s = e.nodeType === 1 ? e : e.parentNode;
  s.appendChild(r);
  const { hasTransform: o } = lv(r);
  return s.removeChild(r), o;
}
const Vf = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return ie(e) ? (n) => Ti(e, n) : e;
};
function QE(t) {
  t.target.composing = !0;
}
function Ff(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const Sc = Symbol("_assign"),
  ZN = {
    created(t, { modifiers: { lazy: e, trim: n, number: r } }, i) {
      t[Sc] = Vf(i);
      const s = r || (i.props && i.props.type === "number");
      gi(t, e ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let a = t.value;
        n && (a = a.trim()), s && (a = nu(a)), t[Sc](a);
      }),
        n &&
          gi(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (gi(t, "compositionstart", QE),
          gi(t, "compositionend", Ff),
          gi(t, "change", Ff));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: n, trim: r, number: i } },
      s
    ) {
      if (((t[Sc] = Vf(s)), t.composing)) return;
      const o = i || t.type === "number" ? nu(t.value) : t.value,
        a = e ?? "";
      o !== a &&
        ((document.activeElement === t &&
          t.type !== "range" &&
          (n || (r && t.value.trim() === a))) ||
          (t.value = a));
    },
  },
  YE = ["ctrl", "shift", "alt", "meta"],
  XE = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => YE.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  an =
    (t, e) =>
    (n, ...r) => {
      for (let i = 0; i < e.length; i++) {
        const s = XE[e[i]];
        if (s && s(n, e)) return;
      }
      return t(n, ...r);
    },
  JE = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  fv = (t, e) => (n) => {
    if (!("key" in n)) return;
    const r = ri(n.key);
    if (e.some((i) => i === r || JE[i] === r)) return t(n);
  },
  ZE = We({ patchProp: BE }, CE);
let Uf;
function eT() {
  return Uf || (Uf = aE(ZE));
}
const pv = (...t) => {
  const e = eT().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (r) => {
      const i = tT(r);
      if (!i) return;
      const s = e._component;
      !de(s) && !s.render && !s.template && (s.template = i.innerHTML),
        (i.innerHTML = "");
      const o = n(i, !1, i instanceof SVGElement);
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function tT(t) {
  return Be(t) ? document.querySelector(t) : t;
}
var Bf;
const mv = typeof window < "u",
  nT = (t) => typeof t == "string",
  qc = () => {};
mv &&
  (Bf = window == null ? void 0 : window.navigator) != null &&
  Bf.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rT(t) {
  return typeof t == "function" ? t() : Ye(t);
}
function iT(t) {
  return t;
}
function sT(t) {
  return pg() ? (z0(t), !0) : !1;
}
function oT(t, e = !0) {
  fo() ? tn(t) : e ? t() : ar(t);
}
function _s(t) {
  var e;
  const n = rT(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Cd = mv ? window : void 0;
function yi(...t) {
  let e, n, r, i;
  if ((nT(t[0]) ? (([n, r, i] = t), (e = Cd)) : ([e, n, r, i] = t), !e))
    return qc;
  let s = qc;
  const o = ft(
      () => _s(e),
      (l) => {
        s(),
          l &&
            (l.addEventListener(n, r, i),
            (s = () => {
              l.removeEventListener(n, r, i), (s = qc);
            }));
      },
      { immediate: !0, flush: "post" }
    ),
    a = () => {
      o(), s();
    };
  return sT(a), a;
}
function Ra(t, e, n = {}) {
  const {
    window: r = Cd,
    ignore: i,
    capture: s = !0,
    detectIframe: o = !1,
  } = n;
  if (!r) return;
  const a = ne(!0);
  let l;
  const c = (h) => {
      r.clearTimeout(l);
      const f = _s(t),
        g = h.composedPath();
      !f ||
        f === h.target ||
        g.includes(f) ||
        !a.value ||
        (i &&
          i.length > 0 &&
          i.some((y) => {
            const _ = _s(y);
            return _ && (h.target === _ || g.includes(_));
          })) ||
        e(h);
    },
    u = [
      yi(r, "click", c, { passive: !0, capture: s }),
      yi(
        r,
        "pointerdown",
        (h) => {
          const f = _s(t);
          a.value = !!f && !h.composedPath().includes(f);
        },
        { passive: !0 }
      ),
      yi(
        r,
        "pointerup",
        (h) => {
          if (h.button === 0) {
            const f = h.composedPath();
            (h.composedPath = () => f), (l = r.setTimeout(() => c(h), 50));
          }
        },
        { passive: !0 }
      ),
      o &&
        yi(r, "blur", (h) => {
          var f;
          const g = _s(t);
          ((f = document.activeElement) == null ? void 0 : f.tagName) ===
            "IFRAME" &&
            !(g != null && g.contains(document.activeElement)) &&
            e(h);
        }),
    ].filter(Boolean);
  return () => u.forEach((h) => h());
}
const jf =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Hf = "__vueuse_ssr_handlers__";
jf[Hf] = jf[Hf] || {};
var zf;
(function (t) {
  (t.UP = "UP"),
    (t.RIGHT = "RIGHT"),
    (t.DOWN = "DOWN"),
    (t.LEFT = "LEFT"),
    (t.NONE = "NONE");
})(zf || (zf = {}));
var aT = Object.defineProperty,
  Wf = Object.getOwnPropertySymbols,
  lT = Object.prototype.hasOwnProperty,
  cT = Object.prototype.propertyIsEnumerable,
  Kf = (t, e, n) =>
    e in t
      ? aT(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  uT = (t, e) => {
    for (var n in e || (e = {})) lT.call(e, n) && Kf(t, n, e[n]);
    if (Wf) for (var n of Wf(e)) cT.call(e, n) && Kf(t, n, e[n]);
    return t;
  };
const dT = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
uT({ linear: iT }, dT);
function gv(t = {}) {
  const {
      window: e = Cd,
      initialWidth: n = 1 / 0,
      initialHeight: r = 1 / 0,
      listenOrientation: i = !0,
      includeScrollbar: s = !0,
    } = t,
    o = ne(n),
    a = ne(r),
    l = () => {
      e &&
        (s
          ? ((o.value = e.innerWidth), (a.value = e.innerHeight))
          : ((o.value = e.document.documentElement.clientWidth),
            (a.value = e.document.documentElement.clientHeight)));
    };
  return (
    l(),
    oT(l),
    yi("resize", l, { passive: !0 }),
    i && yi("orientationchange", l, { passive: !0 }),
    { width: o, height: a }
  );
}
/*!
 * vue-router v4.1.5
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const vi = typeof window < "u";
function hT(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module";
}
const Pe = Object.assign;
function xc(t, e) {
  const n = {};
  for (const r in e) {
    const i = e[r];
    n[r] = en(i) ? i.map(t) : t(i);
  }
  return n;
}
const ks = () => {},
  en = Array.isArray,
  fT = /\/$/,
  pT = (t) => t.replace(fT, "");
function Rc(t, e, n = "/") {
  let r,
    i = {},
    s = "",
    o = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = e.slice(0, l)),
      (s = e.slice(l + 1, a > -1 ? a : e.length)),
      (i = t(s))),
    a > -1 && ((r = r || e.slice(0, a)), (o = e.slice(a, e.length))),
    (r = yT(r ?? e, n)),
    { fullPath: r + (s && "?") + s + o, path: r, query: i, hash: o }
  );
}
function mT(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function Gf(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function gT(t, e, n) {
  const r = e.matched.length - 1,
    i = n.matched.length - 1;
  return (
    r > -1 &&
    r === i &&
    Fi(e.matched[r], n.matched[i]) &&
    vv(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  );
}
function Fi(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function vv(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!vT(t[n], e[n])) return !1;
  return !0;
}
function vT(t, e) {
  return en(t) ? Qf(t, e) : en(e) ? Qf(e, t) : t === e;
}
function Qf(t, e) {
  return en(e)
    ? t.length === e.length && t.every((n, r) => n === e[r])
    : t.length === 1 && t[0] === e;
}
function yT(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"),
    r = t.split("/");
  let i = n.length - 1,
    s,
    o;
  for (s = 0; s < r.length; s++)
    if (((o = r[s]), o !== "."))
      if (o === "..") i > 1 && i--;
      else break;
  return (
    n.slice(0, i).join("/") +
    "/" +
    r.slice(s - (s === r.length ? 1 : 0)).join("/")
  );
}
var Ks;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(Ks || (Ks = {}));
var Ss;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(Ss || (Ss = {}));
function _T(t) {
  if (!t)
    if (vi) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), pT(t);
}
const wT = /^[^#]+#/;
function bT(t, e) {
  return t.replace(wT, "#") + e;
}
function ET(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0),
  };
}
const El = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function TT(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      r = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    e = ET(i, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function Yf(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const yu = new Map();
function IT(t, e) {
  yu.set(t, e);
}
function AT(t) {
  const e = yu.get(t);
  return yu.delete(t), e;
}
let CT = () => location.protocol + "//" + location.host;
function yv(t, e) {
  const { pathname: n, search: r, hash: i } = e,
    s = t.indexOf("#");
  if (s > -1) {
    let a = i.includes(t.slice(s)) ? t.slice(s).length : 1,
      l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), Gf(l, "");
  }
  return Gf(n, t) + r + i;
}
function kT(t, e, n, r) {
  let i = [],
    s = [],
    o = null;
  const a = ({ state: h }) => {
    const f = yv(t, location),
      g = n.value,
      y = e.value;
    let _ = 0;
    if (h) {
      if (((n.value = f), (e.value = h), o && o === g)) {
        o = null;
        return;
      }
      _ = y ? h.position - y.position : 0;
    } else r(f);
    i.forEach((T) => {
      T(n.value, g, {
        delta: _,
        type: Ks.pop,
        direction: _ ? (_ > 0 ? Ss.forward : Ss.back) : Ss.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(h) {
    i.push(h);
    const f = () => {
      const g = i.indexOf(h);
      g > -1 && i.splice(g, 1);
    };
    return s.push(f), f;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(Pe({}, h.state, { scroll: El() }), "");
  }
  function d() {
    for (const h of s) h();
    (s = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u),
    { pauseListeners: l, listen: c, destroy: d }
  );
}
function Xf(t, e, n, r = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? El() : null,
  };
}
function ST(t) {
  const { history: e, location: n } = window,
    r = { value: yv(t, n) },
    i = { value: e.state };
  i.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(l, c, u) {
    const d = t.indexOf("#"),
      h =
        d > -1
          ? (n.host && document.querySelector("base") ? t : t.slice(d)) + l
          : CT() + t + l;
    try {
      e[u ? "replaceState" : "pushState"](c, "", h), (i.value = c);
    } catch (f) {
      console.error(f), n[u ? "replace" : "assign"](h);
    }
  }
  function o(l, c) {
    const u = Pe({}, e.state, Xf(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position,
    });
    s(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = Pe({}, i.value, e.state, { forward: l, scroll: El() });
    s(u.current, u, !0);
    const d = Pe({}, Xf(r.value, l, null), { position: u.position + 1 }, c);
    s(l, d, !1), (r.value = l);
  }
  return { location: r, state: i, push: a, replace: o };
}
function qT(t) {
  t = _T(t);
  const e = ST(t),
    n = kT(t, e.state, e.location, e.replace);
  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s);
  }
  const i = Pe(
    { location: "", base: t, go: r, createHref: bT.bind(null, t) },
    e,
    n
  );
  return (
    Object.defineProperty(i, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(i, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    i
  );
}
function xT(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function _v(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const Qn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  wv = Symbol("");
var Jf;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(Jf || (Jf = {}));
function Ui(t, e) {
  return Pe(new Error(), { type: t, [wv]: !0 }, e);
}
function mn(t, e) {
  return t instanceof Error && wv in t && (e == null || !!(t.type & e));
}
const Zf = "[^/]+?",
  RT = { sensitive: !1, strict: !1, start: !0, end: !0 },
  PT = /[.+*?^${}()[\]/\\]/g;
function OT(t, e) {
  const n = Pe({}, RT, e),
    r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const c of t) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (i += "/");
    for (let d = 0; d < c.length; d++) {
      const h = c[d];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        d || (i += "/"), (i += h.value.replace(PT, "\\$&")), (f += 40);
      else if (h.type === 1) {
        const { value: g, repeatable: y, optional: _, regexp: T } = h;
        s.push({ name: g, repeatable: y, optional: _ });
        const v = T || Zf;
        if (v !== Zf) {
          f += 10;
          try {
            new RegExp(`(${v})`);
          } catch (E) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${v}): ` + E.message
            );
          }
        }
        let k = y ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        d || (k = _ && c.length < 2 ? `(?:/${k})` : "/" + k),
          _ && (k += "?"),
          (i += k),
          (f += 20),
          _ && (f += -8),
          y && (f += -20),
          v === ".*" && (f += -50);
      }
      u.push(f);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += "/?"), n.end ? (i += "$") : n.strict && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o),
      d = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const f = u[h] || "",
        g = s[h - 1];
      d[g.name] = f && g.repeatable ? f.split("/") : f;
    }
    return d;
  }
  function l(c) {
    let u = "",
      d = !1;
    for (const h of t) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const f of h)
        if (f.type === 0) u += f.value;
        else if (f.type === 1) {
          const { value: g, repeatable: y, optional: _ } = f,
            T = g in c ? c[g] : "";
          if (en(T) && !y)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const v = en(T) ? T.join("/") : T;
          if (!v)
            if (_)
              h.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += v;
        }
    }
    return u || "/";
  }
  return { re: o, score: r, keys: s, parse: a, stringify: l };
}
function DT(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length; ) {
    const r = e[n] - t[n];
    if (r) return r;
    n++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
    ? e.length === 1 && e[0] === 80
      ? 1
      : -1
    : 0;
}
function NT(t, e) {
  let n = 0;
  const r = t.score,
    i = e.score;
  for (; n < r.length && n < i.length; ) {
    const s = DT(r[n], i[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (ep(r)) return 1;
    if (ep(i)) return -1;
  }
  return i.length - r.length;
}
function ep(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const LT = { type: 0, value: "" },
  MT = /[a-zA-Z0-9_]/;
function $T(t) {
  if (!t) return [[]];
  if (t === "/") return [[LT]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(f) {
    throw new Error(`ERR (${n})/"${c}": ${f}`);
  }
  let n = 0,
    r = n;
  const i = [];
  let s;
  function o() {
    s && i.push(s), (s = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function d() {
    c &&
      (n === 0
        ? s.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (l === "*" || l === "+") &&
            e(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : e("Invalid state to consume buffer"),
      (c = ""));
  }
  function h() {
    c += l;
  }
  for (; a < t.length; ) {
    if (((l = t[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && d(), o()) : l === ":" ? (d(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : MT.test(l)
          ? h()
          : (d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), d(), o(), i;
}
function VT(t, e, n) {
  const r = OT($T(t.path), n),
    i = Pe(r, { record: t, parent: e, children: [], alias: [] });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
}
function FT(t, e) {
  const n = [],
    r = new Map();
  e = rp({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(u) {
    return r.get(u);
  }
  function s(u, d, h) {
    const f = !h,
      g = UT(u);
    g.aliasOf = h && h.record;
    const y = rp(e, u),
      _ = [g];
    if ("alias" in u) {
      const k = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const E of k)
        _.push(
          Pe({}, g, {
            components: h ? h.record.components : g.components,
            path: E,
            aliasOf: h ? h.record : g,
          })
        );
    }
    let T, v;
    for (const k of _) {
      const { path: E } = k;
      if (d && E[0] !== "/") {
        const O = d.record.path,
          V = O[O.length - 1] === "/" ? "" : "/";
        k.path = d.record.path + (E && V + E);
      }
      if (
        ((T = VT(k, d, y)),
        h
          ? h.alias.push(T)
          : ((v = v || T),
            v !== T && v.alias.push(T),
            f && u.name && !np(T) && o(u.name)),
        g.children)
      ) {
        const O = g.children;
        for (let V = 0; V < O.length; V++) s(O[V], T, h && h.children[V]);
      }
      (h = h || T), l(T);
    }
    return v
      ? () => {
          o(v);
        }
      : ks;
  }
  function o(u) {
    if (_v(u)) {
      const d = r.get(u);
      d &&
        (r.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(o),
        d.alias.forEach(o));
    } else {
      const d = n.indexOf(u);
      d > -1 &&
        (n.splice(d, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(o),
        u.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let d = 0;
    for (
      ;
      d < n.length &&
      NT(u, n[d]) >= 0 &&
      (u.record.path !== n[d].record.path || !bv(u, n[d]));

    )
      d++;
    n.splice(d, 0, u), u.record.name && !np(u) && r.set(u.record.name, u);
  }
  function c(u, d) {
    let h,
      f = {},
      g,
      y;
    if ("name" in u && u.name) {
      if (((h = r.get(u.name)), !h)) throw Ui(1, { location: u });
      (y = h.record.name),
        (f = Pe(
          tp(
            d.params,
            h.keys.filter((v) => !v.optional).map((v) => v.name)
          ),
          u.params &&
            tp(
              u.params,
              h.keys.map((v) => v.name)
            )
        )),
        (g = h.stringify(f));
    } else if ("path" in u)
      (g = u.path),
        (h = n.find((v) => v.re.test(g))),
        h && ((f = h.parse(g)), (y = h.record.name));
    else {
      if (((h = d.name ? r.get(d.name) : n.find((v) => v.re.test(d.path))), !h))
        throw Ui(1, { location: u, currentLocation: d });
      (y = h.record.name),
        (f = Pe({}, d.params, u.params)),
        (g = h.stringify(f));
    }
    const _ = [];
    let T = h;
    for (; T; ) _.unshift(T.record), (T = T.parent);
    return { name: y, path: g, params: f, matched: _, meta: jT(_) };
  }
  return (
    t.forEach((u) => s(u)),
    {
      addRoute: s,
      resolve: c,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: i,
    }
  );
}
function tp(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n;
}
function UT(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: BT(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in t
        ? t.components || null
        : t.component && { default: t.component },
  };
}
function BT(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else for (const r in t.components) e[r] = typeof n == "boolean" ? n : n[r];
  return e;
}
function np(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function jT(t) {
  return t.reduce((e, n) => Pe(e, n.meta), {});
}
function rp(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n;
}
function bv(t, e) {
  return e.children.some((n) => n === t || bv(t, n));
}
const Ev = /#/g,
  HT = /&/g,
  zT = /\//g,
  WT = /=/g,
  KT = /\?/g,
  Tv = /\+/g,
  GT = /%5B/g,
  QT = /%5D/g,
  Iv = /%5E/g,
  YT = /%60/g,
  Av = /%7B/g,
  XT = /%7C/g,
  Cv = /%7D/g,
  JT = /%20/g;
function kd(t) {
  return encodeURI("" + t)
    .replace(XT, "|")
    .replace(GT, "[")
    .replace(QT, "]");
}
function ZT(t) {
  return kd(t).replace(Av, "{").replace(Cv, "}").replace(Iv, "^");
}
function _u(t) {
  return kd(t)
    .replace(Tv, "%2B")
    .replace(JT, "+")
    .replace(Ev, "%23")
    .replace(HT, "%26")
    .replace(YT, "`")
    .replace(Av, "{")
    .replace(Cv, "}")
    .replace(Iv, "^");
}
function eI(t) {
  return _u(t).replace(WT, "%3D");
}
function tI(t) {
  return kd(t).replace(Ev, "%23").replace(KT, "%3F");
}
function nI(t) {
  return t == null ? "" : tI(t).replace(zT, "%2F");
}
function Pa(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
function rI(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(Tv, " "),
      o = s.indexOf("="),
      a = Pa(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : Pa(s.slice(o + 1));
    if (a in e) {
      let c = e[a];
      en(c) || (c = e[a] = [c]), c.push(l);
    } else e[a] = l;
  }
  return e;
}
function ip(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (((n = eI(n)), r == null)) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (en(r) ? r.map((s) => s && _u(s)) : [r && _u(r)]).forEach((s) => {
      s !== void 0 &&
        ((e += (e.length ? "&" : "") + n), s != null && (e += "=" + s));
    });
  }
  return e;
}
function iI(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 &&
      (e[n] = en(r)
        ? r.map((i) => (i == null ? null : "" + i))
        : r == null
        ? r
        : "" + r);
  }
  return e;
}
const sI = Symbol(""),
  sp = Symbol(""),
  Tl = Symbol(""),
  Sd = Symbol(""),
  wu = Symbol("");
function ps() {
  let t = [];
  function e(r) {
    return (
      t.push(r),
      () => {
        const i = t.indexOf(r);
        i > -1 && t.splice(i, 1);
      }
    );
  }
  function n() {
    t = [];
  }
  return { add: e, list: () => t, reset: n };
}
function nr(t, e, n, r, i) {
  const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () =>
    new Promise((o, a) => {
      const l = (d) => {
          d === !1
            ? a(Ui(4, { from: n, to: e }))
            : d instanceof Error
            ? a(d)
            : xT(d)
            ? a(Ui(2, { from: e, to: d }))
            : (s &&
                r.enterCallbacks[i] === s &&
                typeof d == "function" &&
                s.push(d),
              o());
        },
        c = t.call(r && r.instances[i], e, n, l);
      let u = Promise.resolve(c);
      t.length < 3 && (u = u.then(l)), u.catch((d) => a(d));
    });
}
function Pc(t, e, n, r) {
  const i = [];
  for (const s of t)
    for (const o in s.components) {
      let a = s.components[o];
      if (!(e !== "beforeRouteEnter" && !s.instances[o]))
        if (oI(a)) {
          const c = (a.__vccOpts || a)[e];
          c && i.push(nr(c, n, r, s, o));
        } else {
          let l = a();
          i.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${s.path}"`)
                );
              const u = hT(c) ? c.default : c;
              s.components[o] = u;
              const h = (u.__vccOpts || u)[e];
              return h && nr(h, n, r, s, o)();
            })
          );
        }
    }
  return i;
}
function oI(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function op(t) {
  const e = Zt(Tl),
    n = Zt(Sd),
    r = ge(() => e.resolve(Ye(t.to))),
    i = ge(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const h = d.findIndex(Fi.bind(null, u));
      if (h > -1) return h;
      const f = ap(l[c - 2]);
      return c > 1 && ap(u) === f && d[d.length - 1].path !== f
        ? d.findIndex(Fi.bind(null, l[c - 2]))
        : h;
    }),
    s = ge(() => i.value > -1 && uI(n.params, r.value.params)),
    o = ge(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        vv(n.params, r.value.params)
    );
  function a(l = {}) {
    return cI(l)
      ? e[Ye(t.replace) ? "replace" : "push"](Ye(t.to)).catch(ks)
      : Promise.resolve();
  }
  return {
    route: r,
    href: ge(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
const aI = Ge({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: op,
    setup(t, { slots: e }) {
      const n = Ln(op(t)),
        { options: r } = Zt(Tl),
        i = ge(() => ({
          [lp(t.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [lp(
            t.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = e.default && e.default(n);
        return t.custom
          ? s
          : wl(
              "a",
              {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              s
            );
      };
    },
  }),
  lI = aI;
function cI(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function uI(t, e) {
  for (const n in e) {
    const r = e[n],
      i = t[n];
    if (typeof r == "string") {
      if (r !== i) return !1;
    } else if (!en(i) || i.length !== r.length || r.some((s, o) => s !== i[o]))
      return !1;
  }
  return !0;
}
function ap(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const lp = (t, e, n) => t ?? e ?? n,
  dI = Ge({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const r = Zt(wu),
        i = ge(() => t.route || r.value),
        s = Zt(sp, 0),
        o = ge(() => {
          let c = Ye(s);
          const { matched: u } = i.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        a = ge(() => i.value.matched[o.value]);
      ua(
        sp,
        ge(() => o.value + 1)
      ),
        ua(sI, a),
        ua(wu, i);
      const l = ne();
      return (
        ft(
          () => [l.value, a.value, t.name],
          ([c, u, d], [h, f, g]) => {
            u &&
              ((u.instances[d] = c),
              f &&
                f !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards),
                u.updateGuards.size || (u.updateGuards = f.updateGuards))),
              c &&
                u &&
                (!f || !Fi(u, f) || !h) &&
                (u.enterCallbacks[d] || []).forEach((y) => y(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = i.value,
            u = t.name,
            d = a.value,
            h = d && d.components[u];
          if (!h) return cp(n.default, { Component: h, route: c });
          const f = d.props[u],
            g = f
              ? f === !0
                ? c.params
                : typeof f == "function"
                ? f(c)
                : f
              : null,
            _ = wl(
              h,
              Pe({}, g, e, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (d.instances[u] = null);
                },
                ref: l,
              })
            );
          return cp(n.default, { Component: _, route: c }) || _;
        }
      );
    },
  });
function cp(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const hI = dI;
function fI(t) {
  const e = FT(t.routes, t),
    n = t.parseQuery || rI,
    r = t.stringifyQuery || ip,
    i = t.history,
    s = ps(),
    o = ps(),
    a = ps(),
    l = fb(Qn);
  let c = Qn;
  vi &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = xc.bind(null, (S) => "" + S),
    d = xc.bind(null, nI),
    h = xc.bind(null, Pa);
  function f(S, W) {
    let I, $;
    return (
      _v(S) ? ((I = e.getRecordMatcher(S)), ($ = W)) : ($ = S), e.addRoute($, I)
    );
  }
  function g(S) {
    const W = e.getRecordMatcher(S);
    W && e.removeRoute(W);
  }
  function y() {
    return e.getRoutes().map((S) => S.record);
  }
  function _(S) {
    return !!e.getRecordMatcher(S);
  }
  function T(S, W) {
    if (((W = Pe({}, W || l.value)), typeof S == "string")) {
      const p = Rc(n, S, W.path),
        m = e.resolve({ path: p.path }, W),
        b = i.createHref(p.fullPath);
      return Pe(p, m, {
        params: h(m.params),
        hash: Pa(p.hash),
        redirectedFrom: void 0,
        href: b,
      });
    }
    let I;
    if ("path" in S) I = Pe({}, S, { path: Rc(n, S.path, W.path).path });
    else {
      const p = Pe({}, S.params);
      for (const m in p) p[m] == null && delete p[m];
      (I = Pe({}, S, { params: d(S.params) })), (W.params = d(W.params));
    }
    const $ = e.resolve(I, W),
      Y = S.hash || "";
    $.params = u(h($.params));
    const Ae = mT(r, Pe({}, S, { hash: ZT(Y), path: $.path })),
      le = i.createHref(Ae);
    return Pe(
      { fullPath: Ae, hash: Y, query: r === ip ? iI(S.query) : S.query || {} },
      $,
      { redirectedFrom: void 0, href: le }
    );
  }
  function v(S) {
    return typeof S == "string" ? Rc(n, S, l.value.path) : Pe({}, S);
  }
  function k(S, W) {
    if (c !== S) return Ui(8, { from: W, to: S });
  }
  function E(S) {
    return z(S);
  }
  function O(S) {
    return E(Pe(v(S), { replace: !0 }));
  }
  function V(S) {
    const W = S.matched[S.matched.length - 1];
    if (W && W.redirect) {
      const { redirect: I } = W;
      let $ = typeof I == "function" ? I(S) : I;
      return (
        typeof $ == "string" &&
          (($ = $.includes("?") || $.includes("#") ? ($ = v($)) : { path: $ }),
          ($.params = {})),
        Pe(
          { query: S.query, hash: S.hash, params: "path" in $ ? {} : S.params },
          $
        )
      );
    }
  }
  function z(S, W) {
    const I = (c = T(S)),
      $ = l.value,
      Y = S.state,
      Ae = S.force,
      le = S.replace === !0,
      p = V(I);
    if (p)
      return z(
        Pe(v(p), {
          state: typeof p == "object" ? Pe({}, Y, p.state) : Y,
          force: Ae,
          replace: le,
        }),
        W || I
      );
    const m = I;
    m.redirectedFrom = W;
    let b;
    return (
      !Ae &&
        gT(r, $, I) &&
        ((b = Ui(16, { to: m, from: $ })), Gt($, $, !0, !1)),
      (b ? Promise.resolve(b) : B(m, $))
        .catch((A) => (mn(A) ? (mn(A, 2) ? A : kt(A)) : Re(A, m, $)))
        .then((A) => {
          if (A) {
            if (mn(A, 2))
              return z(
                Pe({ replace: le }, v(A.to), {
                  state: typeof A.to == "object" ? Pe({}, Y, A.to.state) : Y,
                  force: Ae,
                }),
                W || m
              );
          } else A = fe(m, $, !0, le, Y);
          return ee(m, $, A), A;
        })
    );
  }
  function L(S, W) {
    const I = k(S, W);
    return I ? Promise.reject(I) : Promise.resolve();
  }
  function B(S, W) {
    let I;
    const [$, Y, Ae] = pI(S, W);
    I = Pc($.reverse(), "beforeRouteLeave", S, W);
    for (const p of $)
      p.leaveGuards.forEach((m) => {
        I.push(nr(m, S, W));
      });
    const le = L.bind(null, S, W);
    return (
      I.push(le),
      pi(I)
        .then(() => {
          I = [];
          for (const p of s.list()) I.push(nr(p, S, W));
          return I.push(le), pi(I);
        })
        .then(() => {
          I = Pc(Y, "beforeRouteUpdate", S, W);
          for (const p of Y)
            p.updateGuards.forEach((m) => {
              I.push(nr(m, S, W));
            });
          return I.push(le), pi(I);
        })
        .then(() => {
          I = [];
          for (const p of S.matched)
            if (p.beforeEnter && !W.matched.includes(p))
              if (en(p.beforeEnter))
                for (const m of p.beforeEnter) I.push(nr(m, S, W));
              else I.push(nr(p.beforeEnter, S, W));
          return I.push(le), pi(I);
        })
        .then(
          () => (
            S.matched.forEach((p) => (p.enterCallbacks = {})),
            (I = Pc(Ae, "beforeRouteEnter", S, W)),
            I.push(le),
            pi(I)
          )
        )
        .then(() => {
          I = [];
          for (const p of o.list()) I.push(nr(p, S, W));
          return I.push(le), pi(I);
        })
        .catch((p) => (mn(p, 8) ? p : Promise.reject(p)))
    );
  }
  function ee(S, W, I) {
    for (const $ of a.list()) $(S, W, I);
  }
  function fe(S, W, I, $, Y) {
    const Ae = k(S, W);
    if (Ae) return Ae;
    const le = W === Qn,
      p = vi ? history.state : {};
    I &&
      ($ || le
        ? i.replace(S.fullPath, Pe({ scroll: le && p && p.scroll }, Y))
        : i.push(S.fullPath, Y)),
      (l.value = S),
      Gt(S, W, I, le),
      kt();
  }
  let j;
  function se() {
    j ||
      (j = i.listen((S, W, I) => {
        if (!kr.listening) return;
        const $ = T(S),
          Y = V($);
        if (Y) {
          z(Pe(Y, { replace: !0 }), $).catch(ks);
          return;
        }
        c = $;
        const Ae = l.value;
        vi && IT(Yf(Ae.fullPath, I.delta), El()),
          B($, Ae)
            .catch((le) =>
              mn(le, 12)
                ? le
                : mn(le, 2)
                ? (z(le.to, $)
                    .then((p) => {
                      mn(p, 20) &&
                        !I.delta &&
                        I.type === Ks.pop &&
                        i.go(-1, !1);
                    })
                    .catch(ks),
                  Promise.reject())
                : (I.delta && i.go(-I.delta, !1), Re(le, $, Ae))
            )
            .then((le) => {
              (le = le || fe($, Ae, !1)),
                le &&
                  (I.delta && !mn(le, 8)
                    ? i.go(-I.delta, !1)
                    : I.type === Ks.pop && mn(le, 20) && i.go(-1, !1)),
                ee($, Ae, le);
            })
            .catch(ks);
      }));
  }
  let Ie = ps(),
    Et = ps(),
    De;
  function Re(S, W, I) {
    kt(S);
    const $ = Et.list();
    return (
      $.length ? $.forEach((Y) => Y(S, W, I)) : console.error(S),
      Promise.reject(S)
    );
  }
  function _e() {
    return De && l.value !== Qn
      ? Promise.resolve()
      : new Promise((S, W) => {
          Ie.add([S, W]);
        });
  }
  function kt(S) {
    return (
      De ||
        ((De = !S),
        se(),
        Ie.list().forEach(([W, I]) => (S ? I(S) : W())),
        Ie.reset()),
      S
    );
  }
  function Gt(S, W, I, $) {
    const { scrollBehavior: Y } = t;
    if (!vi || !Y) return Promise.resolve();
    const Ae =
      (!I && AT(Yf(S.fullPath, 0))) ||
      (($ || !I) && history.state && history.state.scroll) ||
      null;
    return ar()
      .then(() => Y(S, W, Ae))
      .then((le) => le && TT(le))
      .catch((le) => Re(le, S, W));
  }
  const Dt = (S) => i.go(S);
  let Qe;
  const pn = new Set(),
    kr = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: g,
      hasRoute: _,
      getRoutes: y,
      resolve: T,
      options: t,
      push: E,
      replace: O,
      go: Dt,
      back: () => Dt(-1),
      forward: () => Dt(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: Et.add,
      isReady: _e,
      install(S) {
        const W = this;
        S.component("RouterLink", lI),
          S.component("RouterView", hI),
          (S.config.globalProperties.$router = W),
          Object.defineProperty(S.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ye(l),
          }),
          vi &&
            !Qe &&
            l.value === Qn &&
            ((Qe = !0), E(i.location).catch((Y) => {}));
        const I = {};
        for (const Y in Qn) I[Y] = ge(() => l.value[Y]);
        S.provide(Tl, W), S.provide(Sd, Ln(I)), S.provide(wu, l);
        const $ = S.unmount;
        pn.add(S),
          (S.unmount = function () {
            pn.delete(S),
              pn.size < 1 &&
                ((c = Qn),
                j && j(),
                (j = null),
                (l.value = Qn),
                (Qe = !1),
                (De = !1)),
              $();
          });
      },
    };
  return kr;
}
function pi(t) {
  return t.reduce((e, n) => e.then(() => n()), Promise.resolve());
}
function pI(t, e) {
  const n = [],
    r = [],
    i = [],
    s = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < s; o++) {
    const a = e.matched[o];
    a && (t.matched.find((c) => Fi(c, a)) ? r.push(a) : n.push(a));
    const l = t.matched[o];
    l && (e.matched.find((c) => Fi(c, l)) || i.push(l));
  }
  return [n, r, i];
}
function qd() {
  return Zt(Tl);
}
function is() {
  return Zt(Sd);
}
const kv = "/assets/cris-icon-CsAI_VB6.png",
  Sv = "/assets/cris-text-8MZ5Njur.png",
  qv =
    "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon%201'%3e%3cg%20id='Ellipse%2012'%3e%3ccircle%20cx='9.5'%20cy='8.5'%20r='5.5'%20fill='%23A347FF'%20fill-opacity='0.43'/%3e%3ccircle%20cx='9.5'%20cy='8.5'%20r='5.5'%20fill='url(%23paint0_linear_1577_1616)'%20fill-opacity='0.4'/%3e%3c/g%3e%3cpath%20id='Vector'%20d='M10.8965%209.75195C10.6807%209.37695%2010.2754%209.125%209.8125%209.125H9.1875C8.72461%209.125%208.31934%209.37695%208.10352%209.75195C8.44727%2010.1348%208.94531%2010.375%209.5%2010.375C10.0547%2010.375%2010.5527%2010.1338%2010.8965%209.75195ZM7%208.5C7%207.83696%207.26339%207.20107%207.73223%206.73223C8.20107%206.26339%208.83696%206%209.5%206C10.163%206%2010.7989%206.26339%2011.2678%206.73223C11.7366%207.20107%2012%207.83696%2012%208.5C12%209.16304%2011.7366%209.79893%2011.2678%2010.2678C10.7989%2010.7366%2010.163%2011%209.5%2011C8.83696%2011%208.20107%2010.7366%207.73223%2010.2678C7.26339%209.79893%207%209.16304%207%208.5ZM9.5%208.65625C9.68648%208.65625%209.86532%208.58217%209.99718%208.45031C10.129%208.31845%2010.2031%208.13961%2010.2031%207.95312C10.2031%207.76664%2010.129%207.5878%209.99718%207.45594C9.86532%207.32408%209.68648%207.25%209.5%207.25C9.31352%207.25%209.13468%207.32408%209.00282%207.45594C8.87095%207.5878%208.79688%207.76664%208.79688%207.95312C8.79688%208.13961%208.87095%208.31845%209.00282%208.45031C9.13468%208.58217%209.31352%208.65625%209.5%208.65625Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1577_1616'%20x1='12.5'%20y1='4'%20x2='4.5'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-opacity='0.72'/%3e%3cstop%20offset='1'%20stop-color='%235B28EB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  xv =
    "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon%201'%3e%3cg%20id='Ellipse%2011'%3e%3ccircle%20cx='9.5'%20cy='8.5'%20r='5.5'%20fill='%23A347FF'%20fill-opacity='0.43'/%3e%3ccircle%20cx='9.5'%20cy='8.5'%20r='5.5'%20fill='url(%23paint0_linear_1577_1622)'%20fill-opacity='0.4'/%3e%3c/g%3e%3cpath%20id='Vector'%20d='M9.4998%206C9.34177%206%209.21409%206.13965%209.21409%206.3125V6.5C8.56232%206.64453%208.07125%207.27539%208.07125%208.03125V8.21484C8.07125%208.67383%207.91679%209.11719%207.63822%209.46094L7.57215%209.54199C7.49715%209.63379%207.47929%209.76562%207.52483%209.87793C7.57036%209.99023%207.67304%2010.0625%207.78554%2010.0625H11.2141C11.3266%2010.0625%2011.4283%209.99023%2011.4748%209.87793C11.5212%209.76562%2011.5025%209.63379%2011.4275%209.54199L11.3614%209.46094C11.0828%209.11719%2010.9284%208.6748%2010.9284%208.21484V8.03125C10.9284%207.27539%2010.4373%206.64453%209.78551%206.5V6.3125C9.78551%206.13965%209.65784%206%209.4998%206ZM9.90426%2010.8174C10.0114%2010.7002%2010.0712%2010.541%2010.0712%2010.375H9.4998H8.92838C8.92838%2010.541%208.9882%2010.7002%209.09534%2010.8174C9.20249%2010.9346%209.34802%2011%209.4998%2011C9.65159%2011%209.79712%2010.9346%209.90426%2010.8174Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1577_1622'%20x1='12.5'%20y1='4'%20x2='4.5'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-opacity='0.72'/%3e%3cstop%20offset='1'%20stop-color='%235B28EB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  Rv =
    "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon%201'%3e%3cg%20id='Ellipse%2010'%3e%3ccircle%20cx='9.5'%20cy='8.5'%20r='5.5'%20fill='%23A347FF'%20fill-opacity='0.43'/%3e%3ccircle%20cx='9.5'%20cy='8.5'%20r='5.5'%20fill='url(%23paint0_linear_1577_1636)'%20fill-opacity='0.4'/%3e%3c/g%3e%3cpath%20id='Vector'%20d='M11.9084%208.75223C12.0305%208.61272%2012.0305%208.38616%2011.9084%208.24665L10.6584%206.81808C10.5363%206.67857%2010.3381%206.67857%2010.216%206.81808C10.0939%206.95759%2010.0939%207.18415%2010.216%207.32366L10.9328%208.14286H8.87509C8.70223%208.14286%208.56258%208.30246%208.56258%208.5C8.56258%208.69754%208.70223%208.85714%208.87509%208.85714H10.9328L10.216%209.67634C10.0939%209.81585%2010.0939%2010.0424%2010.216%2010.1819C10.3381%2010.3214%2010.5363%2010.3214%2010.6584%2010.1819L11.9084%208.75335V8.75223ZM8.56258%206.71429C8.73544%206.71429%208.87509%206.55469%208.87509%206.35714C8.87509%206.1596%208.73544%206%208.56258%206H7.93755C7.41994%206%207%206.47991%207%207.07143V9.92857C7%2010.5201%207.41994%2011%207.93755%2011H8.56258C8.73544%2011%208.87509%2010.8404%208.87509%2010.6429C8.87509%2010.4453%208.73544%2010.2857%208.56258%2010.2857H7.93755C7.76469%2010.2857%207.62503%2010.1261%207.62503%209.92857V7.07143C7.62503%206.87388%207.76469%206.71429%207.93755%206.71429H8.56258Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1577_1636'%20x1='12.5'%20y1='4'%20x2='4.5'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-opacity='0.72'/%3e%3cstop%20offset='1'%20stop-color='%235B28EB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pv = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  mI = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          l =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (l >> 10))),
          (e[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  Ov = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          l = i + 2 < t.length,
          c = l ? t[i + 2] : 0,
          u = s >> 2,
          d = ((s & 3) << 4) | (a >> 4);
        let h = ((a & 15) << 2) | (c >> 6),
          f = c & 63;
        l || ((f = 64), o || (h = 64)), r.push(n[u], n[d], n[h], n[f]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(Pv(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : mI(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const c = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const d = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || c == null || d == null))
          throw Error();
        const h = (s << 2) | (a >> 4);
        if ((r.push(h), c !== 64)) {
          const f = ((a << 4) & 240) | (c >> 2);
          if ((r.push(f), d !== 64)) {
            const g = ((c << 6) & 192) | d;
            r.push(g);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  },
  gI = function (t) {
    const e = Pv(t);
    return Ov.encodeByteArray(e, !0);
  },
  Dv = function (t) {
    return gI(t).replace(/\./g, "");
  },
  vI = function (t) {
    try {
      return Ov.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yI {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _t() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function _I() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())
  );
}
function wI() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function bI() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function EI() {
  const t = _t();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function TI() {
  return typeof indexedDB == "object";
}
function II() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const AI = "FirebaseError";
class Fn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = AI),
      Object.setPrototypeOf(this, Fn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, po.prototype.create);
  }
}
class po {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? CI(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new Fn(i, a, r);
  }
}
function CI(t, e) {
  return t.replace(kI, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const kI = /\{\$([^}]+)}/g;
function SI(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function Oa(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (up(s) && up(o)) {
      if (!Oa(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function up(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mo(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function qI(t, e) {
  const n = new xI(t, e);
  return n.subscribe.bind(n);
}
class xI {
  constructor(e, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    RI(e, ["next", "error", "complete"])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = Oc),
      i.error === void 0 && (i.error = Oc),
      i.complete === void 0 && (i.complete = Oc);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function RI(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == "function") return !0;
  return !1;
}
function Oc() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wt(t) {
  return t && t._delegate ? t._delegate : t;
}
class Yr {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PI {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new yI();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (DI(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Dr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = Dr) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Dr) {
    return this.instances.has(e);
  }
  getOptions(e = Dr) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: OI(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = Dr) {
    return this.component ? (this.component.multipleInstances ? e : Dr) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function OI(t) {
  return t === Dr ? void 0 : t;
}
function DI(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NI {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new PI(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Se;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(Se || (Se = {}));
const LI = {
    debug: Se.DEBUG,
    verbose: Se.VERBOSE,
    info: Se.INFO,
    warn: Se.WARN,
    error: Se.ERROR,
    silent: Se.SILENT,
  },
  MI = Se.INFO,
  $I = {
    [Se.DEBUG]: "log",
    [Se.VERBOSE]: "log",
    [Se.INFO]: "info",
    [Se.WARN]: "warn",
    [Se.ERROR]: "error",
  },
  VI = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = $I[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class xd {
  constructor(e) {
    (this.name = e),
      (this._logLevel = MI),
      (this._logHandler = VI),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in Se))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? LI[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, Se.DEBUG, ...e),
      this._logHandler(this, Se.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, Se.VERBOSE, ...e),
      this._logHandler(this, Se.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, Se.INFO, ...e),
      this._logHandler(this, Se.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, Se.WARN, ...e),
      this._logHandler(this, Se.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, Se.ERROR, ...e),
      this._logHandler(this, Se.ERROR, ...e);
  }
}
const FI = (t, e) => e.some((n) => t instanceof n);
let dp, hp;
function UI() {
  return (
    dp ||
    (dp = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function BI() {
  return (
    hp ||
    (hp = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Nv = new WeakMap(),
  bu = new WeakMap(),
  Lv = new WeakMap(),
  Dc = new WeakMap(),
  Rd = new WeakMap();
function jI(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(fr(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && Nv.set(n, t);
      })
      .catch(() => {}),
    Rd.set(e, t),
    e
  );
}
function HI(t) {
  if (bu.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  bu.set(t, e);
}
let Eu = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return bu.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || Lv.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return fr(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function zI(t) {
  Eu = t(Eu);
}
function WI(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Nc(this), e, ...n);
        return Lv.set(r, e.sort ? e.sort() : [e]), fr(r);
      }
    : BI().includes(t)
    ? function (...e) {
        return t.apply(Nc(this), e), fr(Nv.get(this));
      }
    : function (...e) {
        return fr(t.apply(Nc(this), e));
      };
}
function KI(t) {
  return typeof t == "function"
    ? WI(t)
    : (t instanceof IDBTransaction && HI(t),
      FI(t, UI()) ? new Proxy(t, Eu) : t);
}
function fr(t) {
  if (t instanceof IDBRequest) return jI(t);
  if (Dc.has(t)) return Dc.get(t);
  const e = KI(t);
  return e !== t && (Dc.set(t, e), Rd.set(e, t)), e;
}
const Nc = (t) => Rd.get(t);
function GI(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = fr(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(fr(o.result), l.oldVersion, l.newVersion, fr(o.transaction));
      }),
    n && o.addEventListener("blocked", () => n()),
    a
      .then((l) => {
        s && l.addEventListener("close", () => s()),
          i && l.addEventListener("versionchange", () => i());
      })
      .catch(() => {}),
    a
  );
}
const QI = ["get", "getKey", "getAll", "getAllKeys", "count"],
  YI = ["put", "add", "delete", "clear"],
  Lc = new Map();
function fp(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Lc.get(e)) return Lc.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = YI.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || QI.includes(n))
  )
    return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let c = l.store;
    return (
      r && (c = c.index(a.shift())),
      (await Promise.all([c[n](...a), i && l.done]))[0]
    );
  };
  return Lc.set(e, s), s;
}
zI((t) => ({
  ...t,
  get: (e, n, r) => fp(e, n) || t.get(e, n, r),
  has: (e, n) => !!fp(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XI {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (JI(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function JI(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Tu = "@firebase/app",
  pp = "0.7.33";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xr = new xd("@firebase/app"),
  ZI = "@firebase/app-compat",
  e1 = "@firebase/analytics-compat",
  t1 = "@firebase/analytics",
  n1 = "@firebase/app-check-compat",
  r1 = "@firebase/app-check",
  i1 = "@firebase/auth",
  s1 = "@firebase/auth-compat",
  o1 = "@firebase/database",
  a1 = "@firebase/database-compat",
  l1 = "@firebase/functions",
  c1 = "@firebase/functions-compat",
  u1 = "@firebase/installations",
  d1 = "@firebase/installations-compat",
  h1 = "@firebase/messaging",
  f1 = "@firebase/messaging-compat",
  p1 = "@firebase/performance",
  m1 = "@firebase/performance-compat",
  g1 = "@firebase/remote-config",
  v1 = "@firebase/remote-config-compat",
  y1 = "@firebase/storage",
  _1 = "@firebase/storage-compat",
  w1 = "@firebase/firestore",
  b1 = "@firebase/firestore-compat",
  E1 = "firebase",
  T1 = "9.10.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mv = "[DEFAULT]",
  I1 = {
    [Tu]: "fire-core",
    [ZI]: "fire-core-compat",
    [t1]: "fire-analytics",
    [e1]: "fire-analytics-compat",
    [r1]: "fire-app-check",
    [n1]: "fire-app-check-compat",
    [i1]: "fire-auth",
    [s1]: "fire-auth-compat",
    [o1]: "fire-rtdb",
    [a1]: "fire-rtdb-compat",
    [l1]: "fire-fn",
    [c1]: "fire-fn-compat",
    [u1]: "fire-iid",
    [d1]: "fire-iid-compat",
    [h1]: "fire-fcm",
    [f1]: "fire-fcm-compat",
    [p1]: "fire-perf",
    [m1]: "fire-perf-compat",
    [g1]: "fire-rc",
    [v1]: "fire-rc-compat",
    [y1]: "fire-gcs",
    [_1]: "fire-gcs-compat",
    [w1]: "fire-fst",
    [b1]: "fire-fst-compat",
    "fire-js": "fire-js",
    [E1]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Da = new Map(),
  Iu = new Map();
function A1(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Xr.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function Bi(t) {
  const e = t.name;
  if (Iu.has(e))
    return (
      Xr.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  Iu.set(e, t);
  for (const n of Da.values()) A1(n, t);
  return !0;
}
function Pd(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const C1 = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  Jr = new po("app", "Firebase", C1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k1 {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Yr("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Jr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const go = T1;
function S1(t, e = {}) {
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: Mv, automaticDataCollectionEnabled: !1 }, e),
    r = n.name;
  if (typeof r != "string" || !r)
    throw Jr.create("bad-app-name", { appName: String(r) });
  const i = Da.get(r);
  if (i) {
    if (Oa(t, i.options) && Oa(n, i.config)) return i;
    throw Jr.create("duplicate-app", { appName: r });
  }
  const s = new NI(r);
  for (const a of Iu.values()) s.addComponent(a);
  const o = new k1(t, n, s);
  return Da.set(r, o), o;
}
function $v(t = Mv) {
  const e = Da.get(t);
  if (!e) throw Jr.create("no-app", { appName: t });
  return e;
}
function pr(t, e, n) {
  var r;
  let i = (r = I1[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Xr.warn(a.join(" "));
    return;
  }
  Bi(new Yr(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const q1 = "firebase-heartbeat-database",
  x1 = 1,
  Gs = "firebase-heartbeat-store";
let Mc = null;
function Vv() {
  return (
    Mc ||
      (Mc = GI(q1, x1, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(Gs);
          }
        },
      }).catch((t) => {
        throw Jr.create("idb-open", { originalErrorMessage: t.message });
      })),
    Mc
  );
}
async function R1(t) {
  var e;
  try {
    return (await Vv()).transaction(Gs).objectStore(Gs).get(Fv(t));
  } catch (n) {
    if (n instanceof Fn) Xr.warn(n.message);
    else {
      const r = Jr.create("idb-get", {
        originalErrorMessage:
          (e = n) === null || e === void 0 ? void 0 : e.message,
      });
      Xr.warn(r.message);
    }
  }
}
async function mp(t, e) {
  var n;
  try {
    const i = (await Vv()).transaction(Gs, "readwrite");
    return await i.objectStore(Gs).put(e, Fv(t)), i.done;
  } catch (r) {
    if (r instanceof Fn) Xr.warn(r.message);
    else {
      const i = Jr.create("idb-set", {
        originalErrorMessage:
          (n = r) === null || n === void 0 ? void 0 : n.message,
      });
      Xr.warn(i.message);
    }
  }
}
function Fv(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const P1 = 1024,
  O1 = 30 * 24 * 60 * 60 * 1e3;
class D1 {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new L1(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = gp();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const s = new Date(i.date).valueOf();
            return Date.now() - s <= O1;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const e = gp(),
      { heartbeatsToSend: n, unsentEntries: r } = N1(
        this._heartbeatsCache.heartbeats
      ),
      i = Dv(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function gp() {
  return new Date().toISOString().substring(0, 10);
}
function N1(t, e = P1) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), vp(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), vp(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class L1 {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return TI()
      ? II()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await R1(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return mp(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return mp(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function vp(t) {
  return Dv(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M1(t) {
  Bi(new Yr("platform-logger", (e) => new XI(e), "PRIVATE")),
    Bi(new Yr("heartbeat", (e) => new D1(e), "PRIVATE")),
    pr(Tu, pp, t),
    pr(Tu, pp, "esm2017"),
    pr("fire-js", "");
}
M1("");
function Od(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function Uv() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const $1 = Uv,
  Bv = new po("auth", "Firebase", Uv());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yp = new xd("@firebase/auth");
function ha(t, ...e) {
  yp.logLevel <= Se.ERROR && yp.error(`Auth (${go}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hn(t, ...e) {
  throw Dd(t, ...e);
}
function cn(t, ...e) {
  return Dd(t, ...e);
}
function jv(t, e, n) {
  const r = Object.assign(Object.assign({}, $1()), { [e]: n });
  return new po("auth", "Firebase", r).create(e, { appName: t.name });
}
function V1(t, e, n) {
  const r = n;
  if (!(e instanceof r))
    throw (
      (r.name !== e.constructor.name && hn(t, "argument-error"),
      jv(
        t,
        "argument-error",
        `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function Dd(t, ...e) {
  if (typeof t != "string") {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return Bv.create(t, ...e);
}
function ce(t, e, ...n) {
  if (!t) throw Dd(e, ...n);
}
function _n(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw (ha(e), new Error(e));
}
function Sn(t, e) {
  t || _n(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _p = new Map();
function wn(t) {
  Sn(t instanceof Function, "Expected a class definition");
  let e = _p.get(t);
  return e
    ? (Sn(e instanceof t, "Instance stored in cache mismatched with class"), e)
    : ((e = new t()), _p.set(t, e), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F1(t, e) {
  const n = Pd(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Oa(s, e ?? {})) return i;
    hn(i, "already-initialized");
  }
  return n.initialize({ options: e });
}
function U1(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(wn);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap),
    t._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver
    );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Au() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
    ""
  );
}
function B1() {
  return wp() === "http:" || wp() === "https:";
}
function wp() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j1() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (B1() || wI() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function H1() {
  if (typeof navigator > "u") return null;
  const t = navigator;
  return (t.languages && t.languages[0]) || t.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vo {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      Sn(n > e, "Short delay should be less than long delay!"),
      (this.isMobile = _I() || bI());
  }
  get() {
    return j1()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nd(t, e) {
  Sn(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hv {
  static initialize(e, n, r) {
    (this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    _n(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    _n(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    _n(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const z1 = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "internal-error",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const W1 = new vo(3e4, 6e4);
function K1(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function Il(t, e, n, r, i = {}) {
  return zv(t, i, async () => {
    let s = {},
      o = {};
    r && (e === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = mo(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      t.languageCode && (l["X-Firebase-Locale"] = t.languageCode),
      Hv.fetch()(
        Wv(t, t.config.apiHost, n, a),
        Object.assign(
          { method: e, headers: l, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function zv(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, z1), e);
  try {
    const i = new Q1(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Qo(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Qo(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw Qo(t, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw Qo(t, "user-disabled", o);
      const u = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c) throw jv(t, u, c);
      hn(t, u);
    }
  } catch (i) {
    if (i instanceof Fn) throw i;
    hn(t, "network-request-failed");
  }
}
async function G1(t, e, n, r, i = {}) {
  const s = await Il(t, e, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      hn(t, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function Wv(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? Nd(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class Q1 {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(cn(this.auth, "network-request-failed")),
          W1.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Qo(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = cn(t, e, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Y1(t, e) {
  return Il(t, "POST", "/v1/accounts:delete", e);
}
async function X1(t, e) {
  return Il(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qs(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function J1(t, e = !1) {
  const n = wt(t),
    r = await n.getIdToken(e),
    i = Ld(r);
  ce(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: qs($c(i.auth_time)),
    issuedAtTime: qs($c(i.iat)),
    expirationTime: qs($c(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function $c(t) {
  return Number(t) * 1e3;
}
function Ld(t) {
  var e;
  const [n, r, i] = t.split(".");
  if (n === void 0 || r === void 0 || i === void 0)
    return ha("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const s = vI(r);
    return s
      ? JSON.parse(s)
      : (ha("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return (
      ha(
        "Caught error parsing JWT payload as JSON",
        (e = s) === null || e === void 0 ? void 0 : e.toString()
      ),
      null
    );
  }
}
function Z1(t) {
  const e = Ld(t);
  return (
    ce(e, "internal-error"),
    ce(typeof e.exp < "u", "internal-error"),
    ce(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Qs(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof Fn &&
        eA(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r)
    );
  }
}
function eA({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tA {
  constructor(e) {
    (this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var n;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    var e;
    try {
      await this.user.getIdToken(!0);
    } catch (n) {
      ((e = n) === null || e === void 0 ? void 0 : e.code) ===
        "auth/network-request-failed" && this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kv {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = qs(this.lastLoginAt)),
      (this.creationTime = qs(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Na(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await Qs(t, X1(n, { idToken: r }));
  ce(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? iA(s.providerUserInfo)
        : [],
    a = rA(t.providerData, o),
    l = t.isAnonymous,
    c = !(t.email && s.passwordHash) && !(a != null && a.length),
    u = l ? c : !1,
    d = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new Kv(s.createdAt, s.lastLoginAt),
      isAnonymous: u,
    };
  Object.assign(t, d);
}
async function nA(t) {
  const e = wt(t);
  await Na(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function rA(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function iA(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = Od(e, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sA(t, e) {
  const n = await zv(t, {}, async () => {
    const r = mo({ grant_type: "refresh_token", refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = Wv(t, i, "/v1/token", `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"),
      Hv.fetch()(o, { method: "POST", headers: a, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ys {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    ce(e.idToken, "internal-error"),
      ce(typeof e.idToken < "u", "internal-error"),
      ce(typeof e.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in e && typeof e.expiresIn < "u"
        ? Number(e.expiresIn)
        : Z1(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return (
      ce(!this.accessToken || this.refreshToken, e, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(e, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await sA(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new Ys();
    return (
      r &&
        (ce(typeof r == "string", "internal-error", { appName: e }),
        (o.refreshToken = r)),
      i &&
        (ce(typeof i == "string", "internal-error", { appName: e }),
        (o.accessToken = i)),
      s &&
        (ce(typeof s == "number", "internal-error", { appName: e }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new Ys(), this.toJSON());
  }
  _performRefresh() {
    return _n("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yn(t, e) {
  ce(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class zr {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = Od(e, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new tA(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Kv(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await Qs(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      ce(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return J1(this, e);
  }
  reload() {
    return nA(this);
  }
  _assign(e) {
    this !== e &&
      (ce(this.uid === e.uid, this.auth, "internal-error"),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    return new zr(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
  }
  _onReload(e) {
    ce(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await Na(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await Qs(this, Y1(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, n) {
    var r, i, s, o, a, l, c, u;
    const d = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      h = (i = n.email) !== null && i !== void 0 ? i : void 0,
      f = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      g = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      y = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      _ = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      T = (c = n.createdAt) !== null && c !== void 0 ? c : void 0,
      v = (u = n.lastLoginAt) !== null && u !== void 0 ? u : void 0,
      {
        uid: k,
        emailVerified: E,
        isAnonymous: O,
        providerData: V,
        stsTokenManager: z,
      } = n;
    ce(k && z, e, "internal-error");
    const L = Ys.fromJSON(this.name, z);
    ce(typeof k == "string", e, "internal-error"),
      Yn(d, e.name),
      Yn(h, e.name),
      ce(typeof E == "boolean", e, "internal-error"),
      ce(typeof O == "boolean", e, "internal-error"),
      Yn(f, e.name),
      Yn(g, e.name),
      Yn(y, e.name),
      Yn(_, e.name),
      Yn(T, e.name),
      Yn(v, e.name);
    const B = new zr({
      uid: k,
      auth: e,
      email: h,
      emailVerified: E,
      displayName: d,
      isAnonymous: O,
      photoURL: g,
      phoneNumber: f,
      tenantId: y,
      stsTokenManager: L,
      createdAt: T,
      lastLoginAt: v,
    });
    return (
      V &&
        Array.isArray(V) &&
        (B.providerData = V.map((ee) => Object.assign({}, ee))),
      _ && (B._redirectEventId = _),
      B
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new Ys();
    i.updateFromServerResponse(n);
    const s = new zr({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Na(s), s;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gv {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Gv.type = "NONE";
const bp = Gv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fa(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class ki {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = fa(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = fa("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? zr._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = "authUser") {
    if (!n.length) return new ki(wn(bp), e, r);
    const i = (
      await Promise.all(
        n.map(async (c) => {
          if (await c._isAvailable()) return c;
        })
      )
    ).filter((c) => c);
    let s = i[0] || wn(bp);
    const o = fa(r, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const u = await c._get(o);
        if (u) {
          const d = zr._fromJSON(e, u);
          c !== s && (a = d), (s = c);
          break;
        }
      } catch {}
    const l = i.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new ki(s, e, r)
      : ((s = l[0]),
        a && (await s._set(o, a.toJSON())),
        await Promise.all(
          n.map(async (c) => {
            if (c !== s)
              try {
                await c._remove(o);
              } catch {}
          })
        ),
        new ki(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ep(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Xv(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (Qv(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (Zv(e)) return "Blackberry";
  if (ey(e)) return "Webos";
  if (Md(e)) return "Safari";
  if ((e.includes("chrome/") || Yv(e)) && !e.includes("edge/")) return "Chrome";
  if (Jv(e)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Qv(t = _t()) {
  return /firefox\//i.test(t);
}
function Md(t = _t()) {
  const e = t.toLowerCase();
  return (
    e.includes("safari/") &&
    !e.includes("chrome/") &&
    !e.includes("crios/") &&
    !e.includes("android")
  );
}
function Yv(t = _t()) {
  return /crios\//i.test(t);
}
function Xv(t = _t()) {
  return /iemobile/i.test(t);
}
function Jv(t = _t()) {
  return /android/i.test(t);
}
function Zv(t = _t()) {
  return /blackberry/i.test(t);
}
function ey(t = _t()) {
  return /webos/i.test(t);
}
function Al(t = _t()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function oA(t = _t()) {
  var e;
  return (
    Al(t) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function aA() {
  return EI() && document.documentMode === 10;
}
function ty(t = _t()) {
  return Al(t) || Jv(t) || ey(t) || Zv(t) || /windows phone/i.test(t) || Xv(t);
}
function lA() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ny(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = Ep(_t());
      break;
    case "Worker":
      n = `${Ep(_t())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${go}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cA {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, n) {
    const r = (s) =>
      new Promise((o, a) => {
        try {
          const l = e(s);
          o(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    var n;
    if (this.auth.currentUser === e) return;
    const r = [];
    try {
      for (const i of this.queue) await i(e), i.onAbort && r.push(i.onAbort);
    } catch (i) {
      r.reverse();
      for (const s of r)
        try {
          s();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: (n = i) === null || n === void 0 ? void 0 : n.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uA {
  constructor(e, n, r) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.config = r),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Tp(this)),
      (this.idTokenSubscription = new Tp(this)),
      (this.beforeStateQueue = new cA(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Bv),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = r.sdkClientVersion);
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = wn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await ki.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUser(e) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        a = i == null ? void 0 : i._redirectEventId,
        l = await this.tryRedirectSignIn(e);
      (!o || o === a) && l != null && l.user && ((i = l.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      ce(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    var n;
    try {
      await Na(e);
    } catch (r) {
      if (
        ((n = r) === null || n === void 0 ? void 0 : n.code) !==
        "auth/network-request-failed"
      )
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = H1();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? wt(e) : null;
    return (
      n &&
        ce(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && ce(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(e) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(wn(e));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new po("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && wn(e)) || this._popupRedirectResolver;
      ce(n, this, "argument-error"),
        (this.redirectPersistenceManager = await ki.create(
          this,
          [wn(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === e
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n),
      o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return (
      ce(o, this, "internal-error"),
      o.then(() => s(this.currentUser)),
      typeof n == "function" ? e.addObserver(n, r, i) : e.addObserver(n)
    );
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return (
      ce(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = ny(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    return r && (n["X-Firebase-Client"] = r), n;
  }
}
function $d(t) {
  return wt(t);
}
class Tp {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = qI((n) => (this.observer = n)));
  }
  get next() {
    return (
      ce(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ry {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return _n("not implemented");
  }
  _getIdTokenResponse(e) {
    return _n("not implemented");
  }
  _linkToIdToken(e, n) {
    return _n("not implemented");
  }
  _getReauthenticationResolver(e) {
    return _n("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Si(t, e) {
  return G1(t, "POST", "/v1/accounts:signInWithIdp", K1(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dA = "http://localhost";
class Zr extends ry {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new Zr(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : hn("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = n,
      s = Od(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new Zr(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Si(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Si(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Si(e, n);
  }
  buildRequest() {
    const e = { requestUri: dA, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = mo(n));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vd {
  constructor(e) {
    (this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yo extends Vd {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ir extends yo {
  constructor() {
    super("facebook.com");
  }
  static credential(e) {
    return Zr._fromParams({
      providerId: ir.PROVIDER_ID,
      signInMethod: ir.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return ir.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return ir.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return ir.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
ir.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
ir.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mt extends yo {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(e, n) {
    return Zr._fromParams({
      providerId: Mt.PROVIDER_ID,
      signInMethod: Mt.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return Mt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Mt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return Mt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Mt.GOOGLE_SIGN_IN_METHOD = "google.com";
Mt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sr extends yo {
  constructor() {
    super("github.com");
  }
  static credential(e) {
    return Zr._fromParams({
      providerId: sr.PROVIDER_ID,
      signInMethod: sr.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return sr.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return sr.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return sr.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
sr.GITHUB_SIGN_IN_METHOD = "github.com";
sr.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class or extends yo {
  constructor() {
    super("twitter.com");
  }
  static credential(e, n) {
    return Zr._fromParams({
      providerId: or.PROVIDER_ID,
      signInMethod: or.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return or.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return or.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return or.credential(n, r);
    } catch {
      return null;
    }
  }
}
or.TWITTER_SIGN_IN_METHOD = "twitter.com";
or.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ji {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await zr._fromIdTokenResponse(e, r, i),
      o = Ip(r);
    return new ji({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = Ip(r);
    return new ji({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Ip(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class La extends Fn {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, La.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new La(e, n, r, i);
  }
}
function iy(t, e, n, r) {
  return (
    e === "reauthenticate"
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? La._fromErrorAndOperation(t, s, e, r)
      : s;
  });
}
async function hA(t, e, n = !1) {
  const r = await Qs(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return ji._forOperation(t, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function fA(t, e, n = !1) {
  var r;
  const { auth: i } = t,
    s = "reauthenticate";
  try {
    const o = await Qs(t, iy(i, s, e, t), n);
    ce(o.idToken, i, "internal-error");
    const a = Ld(o.idToken);
    ce(a, i, "internal-error");
    const { sub: l } = a;
    return ce(t.uid === l, i, "user-mismatch"), ji._forOperation(t, s, o);
  } catch (o) {
    throw (
      (((r = o) === null || r === void 0 ? void 0 : r.code) ===
        "auth/user-not-found" && hn(i, "user-mismatch"),
      o)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function pA(t, e, n = !1) {
  const r = "signIn",
    i = await iy(t, r, e),
    s = await ji._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
function ss(t, e, n, r) {
  return wt(t).onAuthStateChanged(e, n, r);
}
function sy(t) {
  return wt(t).signOut();
}
const Ma = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oy {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Ma, "1"),
          this.storage.removeItem(Ma),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mA() {
  const t = _t();
  return Md(t) || Al(t);
}
const gA = 1e3,
  vA = 10;
class ay extends oy {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = mA() && lA()),
      (this.fallbackToPolling = ty()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const r = e.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (e.newValue !== o)
        e.newValue !== null
          ? this.storage.setItem(r, e.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    aA() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, vA)
      : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: e, oldValue: n, newValue: r }),
            !0
          );
        });
      }, gA));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, n) {
    await super._set(e, n), (this.localCache[e] = JSON.stringify(n));
  }
  async _get(e) {
    const n = await super._get(e);
    return (this.localCache[e] = JSON.stringify(n)), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
ay.type = "LOCAL";
const yA = ay;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ly extends oy {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
ly.type = "SESSION";
const cy = ly;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _A(t) {
  return Promise.all(
    t.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cl {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new Cl(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const a = Array.from(o).map(async (c) => c(n.origin, s)),
      l = await _A(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: l,
    });
  }
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n);
  }
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Cl.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fd(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wA {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener("message", e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((a, l) => {
      const c = Fd("", 20);
      i.port1.start();
      const u = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(d) {
          const h = d;
          if (h.data.eventId === c)
            switch (h.data.status) {
              case "ack":
                clearTimeout(u),
                  (s = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), a(h.data.response);
                break;
              default:
                clearTimeout(u),
                  clearTimeout(s),
                  l(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: e, eventId: c, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function un() {
  return window;
}
function bA(t) {
  un().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uy() {
  return (
    typeof un().WorkerGlobalScope < "u" &&
    typeof un().importScripts == "function"
  );
}
async function EA() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function TA() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    t === void 0
      ? void 0
      : t.controller) || null
  );
}
function IA() {
  return uy() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dy = "firebaseLocalStorageDb",
  AA = 1,
  $a = "firebaseLocalStorage",
  hy = "fbase_key";
class _o {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function kl(t, e) {
  return t.transaction([$a], e ? "readwrite" : "readonly").objectStore($a);
}
function CA() {
  const t = indexedDB.deleteDatabase(dy);
  return new _o(t).toPromise();
}
function Cu() {
  const t = indexedDB.open(dy, AA);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const r = t.result;
        try {
          r.createObjectStore($a, { keyPath: hy });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener("success", async () => {
        const r = t.result;
        r.objectStoreNames.contains($a)
          ? e(r)
          : (r.close(), await CA(), e(await Cu()));
      });
  });
}
async function Ap(t, e, n) {
  const r = kl(t, !0).put({ [hy]: e, value: n });
  return new _o(r).toPromise();
}
async function kA(t, e) {
  const n = kl(t, !1).get(e),
    r = await new _o(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Cp(t, e) {
  const n = kl(t, !0).delete(e);
  return new _o(n).toPromise();
}
const SA = 800,
  qA = 3;
class fy {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Cu()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > qA) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return uy() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Cl._getInstance(IA())),
      this.receiver._subscribe("keyChanged", async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await EA()), !this.activeServiceWorker))
      return;
    this.sender = new wA(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        TA() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await Cu();
      return await Ap(e, Ma, "1"), await Cp(e, Ma), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Ap(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => kA(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Cp(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = kl(i, !1).getAll();
      return new _o(s).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: s } of e)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
          (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), SA));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
fy.type = "LOCAL";
const xA = fy;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function RA() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName("head")) === null || t === void 0
      ? void 0
      : t[0]) !== null && e !== void 0
    ? e
    : document;
}
function PA(t) {
  return new Promise((e, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", t),
      (r.onload = e),
      (r.onerror = (i) => {
        const s = cn("internal-error");
        (s.customData = i), n(s);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      RA().appendChild(r);
  });
}
function OA(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
new vo(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function py(t, e) {
  return e
    ? wn(e)
    : (ce(t._popupRedirectResolver, t, "argument-error"),
      t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ud extends ry {
  constructor(e) {
    super("custom", "custom"), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return Si(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Si(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Si(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (n.idToken = e), n;
  }
}
function DA(t) {
  return pA(t.auth, new Ud(t), t.bypassAuthState);
}
function NA(t) {
  const { auth: e, user: n } = t;
  return ce(n, e, "internal-error"), fA(n, new Ud(t), t.bypassAuthState);
}
async function LA(t) {
  const { auth: e, user: n } = t;
  return ce(n, e, "internal-error"), hA(n, new Ud(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class my {
  constructor(e, n, r, i, s = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: a,
    } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (c) {
      this.reject(c);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return DA;
      case "linkViaPopup":
      case "linkViaRedirect":
        return LA;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return NA;
      default:
        hn(this.auth, "internal-error");
    }
  }
  resolve(e) {
    Sn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    Sn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MA = new vo(2e3, 1e4);
async function Xs(t, e, n) {
  const r = $d(t);
  V1(t, e, Vd);
  const i = py(r, n);
  return new Vr(r, "signInViaPopup", e, i).executeNotNull();
}
class Vr extends my {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Vr.currentPopupAction && Vr.currentPopupAction.cancel(),
      (Vr.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return ce(e, this.auth, "internal-error"), e;
  }
  async onExecution() {
    Sn(this.filter.length === 1, "Popup operations only handle one event");
    const e = Fd();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(cn(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(cn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Vr.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(cn(this.auth, "popup-closed-by-user"));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(e, MA.get());
    };
    e();
  }
}
Vr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $A = "pendingRedirect",
  pa = new Map();
class VA extends my {
  constructor(e, n, r = !1) {
    super(
      e,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = pa.get(this.auth._key());
    if (!e) {
      try {
        const r = (await FA(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      pa.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        pa.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n) return (this.user = n), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function FA(t, e) {
  const n = jA(e),
    r = BA(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function UA(t, e) {
  pa.set(t._key(), e);
}
function BA(t) {
  return wn(t._redirectPersistence);
}
function jA(t) {
  return fa($A, t.config.apiKey, t.name);
}
async function HA(t, e, n = !1) {
  const r = $d(t),
    i = py(r, e),
    o = await new VA(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zA = 10 * 60 * 1e3;
class WA {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !KA(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !gy(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(cn(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= zA &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(kp(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(kp(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function kp(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((e) => e)
    .join("-");
}
function gy({ type: t, error: e }) {
  return (
    t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
  );
}
function KA(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return gy(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function GA(t, e = {}) {
  return Il(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const QA = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  YA = /^https?/;
async function XA(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await GA(t);
  for (const n of e)
    try {
      if (JA(n)) return;
    } catch {}
  hn(t, "unauthorized-domain");
}
function JA(t) {
  const e = Au(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            e.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!YA.test(n)) return !1;
  if (QA.test(t)) return r === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ZA = new vo(3e4, 6e4);
function Sp() {
  const t = un().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []),
        (t.H[e].L = t.H[e].L || []),
        (t.H[e].r = [...t.H[e].L]),
        t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function eC(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      Sp(),
        gapi.load("gapi.iframes", {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Sp(), n(cn(t, "network-request-failed"));
          },
          timeout: ZA.get(),
        });
    }
    if (
      !(
        (i = (r = un().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = un().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = OA("iframefcb");
      return (
        (un()[a] = () => {
          gapi.load ? o() : n(cn(t, "network-request-failed"));
        }),
        PA(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((ma = null), e);
  });
}
let ma = null;
function tC(t) {
  return (ma = ma || eC(t)), ma;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nC = new vo(5e3, 15e3),
  rC = "__/auth/iframe",
  iC = "emulator/auth/iframe",
  sC = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  oC = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function aC(t) {
  const e = t.config;
  ce(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? Nd(e, iC) : `https://${t.config.authDomain}/${rC}`,
    r = { apiKey: e.apiKey, appName: t.name, v: go },
    i = oC.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${mo(r).slice(1)}`;
}
async function lC(t) {
  const e = await tC(t),
    n = un().gapi;
  return (
    ce(n, t, "internal-error"),
    e.open(
      {
        where: document.body,
        url: aC(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: sC,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = cn(t, "network-request-failed"),
            a = un().setTimeout(() => {
              s(o);
            }, nC.get());
          function l() {
            un().clearTimeout(a), i(r);
          }
          r.ping(l).then(l, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cC = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  uC = 500,
  dC = 600,
  hC = "_blank",
  fC = "http://localhost";
class qp {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function pC(t, e, n, r = uC, i = dC) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, cC), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    c = _t().toLowerCase();
  n && (a = Yv(c) ? hC : n), Qv(c) && ((e = e || fC), (l.scrollbars = "yes"));
  const u = Object.entries(l).reduce((h, [f, g]) => `${h}${f}=${g},`, "");
  if (oA(c) && a !== "_self") return mC(e || "", a), new qp(null);
  const d = window.open(e || "", a, u);
  ce(d, t, "popup-blocked");
  try {
    d.focus();
  } catch {}
  return new qp(d);
}
function mC(t, e) {
  const n = document.createElement("a");
  (n.href = t), (n.target = e);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gC = "__/auth/handler",
  vC = "emulator/auth/handler";
function xp(t, e, n, r, i, s) {
  ce(t.config.authDomain, t, "auth-domain-config-required"),
    ce(t.config.apiKey, t, "invalid-api-key");
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: go,
    eventId: i,
  };
  if (e instanceof Vd) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ""),
      SI(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [l, c] of Object.entries(s || {})) o[l] = c;
  }
  if (e instanceof yo) {
    const l = e.getScopes().filter((c) => c !== "");
    l.length > 0 && (o.scopes = l.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
  return `${yC(t)}?${mo(a).slice(1)}`;
}
function yC({ config: t }) {
  return t.emulator ? Nd(t, vC) : `https://${t.authDomain}/${gC}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vc = "webStorageSupport";
class _C {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = cy),
      (this._completeRedirectFn = HA),
      (this._overrideRedirectResult = UA);
  }
  async _openPopup(e, n, r, i) {
    var s;
    Sn(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = xp(e, n, r, Au(), i);
    return pC(e, o, Fd());
  }
  async _openRedirect(e, n, r, i) {
    return (
      await this._originValidation(e),
      bA(xp(e, n, r, Au(), i)),
      new Promise(() => {})
    );
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (Sn(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const n = await lC(e),
      r = new WA(e);
    return (
      n.register(
        "authEvent",
        (i) => (
          ce(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      Vc,
      { type: Vc },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[Vc];
        o !== void 0 && n(!!o), hn(e, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = XA(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return ty() || Md() || Al();
  }
}
const wC = _C;
var Rp = "@firebase/auth",
  Pp = "0.20.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bC {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      var i;
      e(
        ((i = r) === null || i === void 0
          ? void 0
          : i.stsTokenManager.accessToken) || null
      );
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    ce(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function EC(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function TC(t) {
  Bi(
    new Yr(
      "auth",
      (e, { options: n }) => {
        const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("heartbeat"),
          { apiKey: s, authDomain: o } = r.options;
        return ((a, l) => {
          ce(s && !s.includes(":"), "invalid-api-key", { appName: a.name }),
            ce(!(o != null && o.includes(":")), "argument-error", {
              appName: a.name,
            });
          const c = {
              apiKey: s,
              authDomain: o,
              clientPlatform: t,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: ny(t),
            },
            u = new uA(a, l, c);
          return U1(u, n), u;
        })(r, i);
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider("auth-internal").initialize();
      })
  ),
    Bi(
      new Yr(
        "auth-internal",
        (e) => {
          const n = $d(e.getProvider("auth").getImmediate());
          return ((r) => new bC(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    pr(Rp, Pp, EC(t)),
    pr(Rp, Pp, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Un(t = $v()) {
  const e = Pd(t, "auth");
  return e.isInitialized()
    ? e.getImmediate()
    : F1(t, { popupRedirectResolver: wC, persistence: [xA, yA, cy] });
}
TC("Browser");
var IC =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Q,
  Bd = Bd || {},
  ae = IC || self;
function Va() {}
function Sl(t) {
  var e = typeof t;
  return (
    (e = e != "object" ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
    e == "array" || (e == "object" && typeof t.length == "number")
  );
}
function wo(t) {
  var e = typeof t;
  return (e == "object" && t != null) || e == "function";
}
function AC(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, Fc) && t[Fc]) || (t[Fc] = ++CC)
  );
}
var Fc = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  CC = 0;
function kC(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function SC(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), t.apply(e, i);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function gt(t, e, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (gt = kC)
      : (gt = SC),
    gt.apply(null, arguments)
  );
}
function Yo(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), t.apply(this, r);
  };
}
function dt(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.X = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.Vb = function (r, i, s) {
      for (
        var o = Array(arguments.length - 2), a = 2;
        a < arguments.length;
        a++
      )
        o[a - 2] = arguments[a];
      return e.prototype[i].apply(r, o);
    });
}
function br() {
  (this.s = this.s), (this.o = this.o);
}
var qC = 0;
br.prototype.s = !1;
br.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), qC != 0) && AC(this);
};
br.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const vy = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == "string")
        return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function jd(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function Op(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (Sl(r)) {
      const i = t.length || 0,
        s = r.length || 0;
      t.length = i + s;
      for (let o = 0; o < s; o++) t[i + o] = r[o];
    } else t.push(r);
  }
}
function vt(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
vt.prototype.h = function () {
  this.defaultPrevented = !0;
};
var xC = (function () {
  if (!ae.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
  try {
    ae.addEventListener("test", Va, e), ae.removeEventListener("test", Va, e);
  } catch {}
  return t;
})();
function Fa(t) {
  return /^[\s\xa0]*$/.test(t);
}
var Dp = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function Uc(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function ql() {
  var t = ae.navigator;
  return t && (t = t.userAgent) ? t : "";
}
function on(t) {
  return ql().indexOf(t) != -1;
}
function Hd(t) {
  return Hd[" "](t), t;
}
Hd[" "] = Va;
function RC(t) {
  var e = DC;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var PC = on("Opera"),
  Hi = on("Trident") || on("MSIE"),
  yy = on("Edge"),
  ku = yy || Hi,
  _y =
    on("Gecko") &&
    !(ql().toLowerCase().indexOf("webkit") != -1 && !on("Edge")) &&
    !(on("Trident") || on("MSIE")) &&
    !on("Edge"),
  OC = ql().toLowerCase().indexOf("webkit") != -1 && !on("Edge");
function wy() {
  var t = ae.document;
  return t ? t.documentMode : void 0;
}
var Ua;
e: {
  var Bc = "",
    jc = (function () {
      var t = ql();
      if (_y) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (yy) return /Edge\/([\d\.]+)/.exec(t);
      if (Hi) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (OC) return /WebKit\/(\S+)/.exec(t);
      if (PC) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((jc && (Bc = jc ? jc[1] : ""), Hi)) {
    var Hc = wy();
    if (Hc != null && Hc > parseFloat(Bc)) {
      Ua = String(Hc);
      break e;
    }
  }
  Ua = Bc;
}
var DC = {};
function NC() {
  return RC(function () {
    let t = 0;
    const e = Dp(String(Ua)).split("."),
      n = Dp("9").split("."),
      r = Math.max(e.length, n.length);
    for (let o = 0; t == 0 && o < r; o++) {
      var i = e[o] || "",
        s = n[o] || "";
      do {
        if (
          ((i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
          (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
          i[0].length == 0 && s[0].length == 0)
        )
          break;
        (t =
          Uc(
            i[1].length == 0 ? 0 : parseInt(i[1], 10),
            s[1].length == 0 ? 0 : parseInt(s[1], 10)
          ) ||
          Uc(i[2].length == 0, s[2].length == 0) ||
          Uc(i[2], s[2])),
          (i = i[3]),
          (s = s[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var Su;
if (ae.document && Hi) {
  var Np = wy();
  Su = Np || parseInt(Ua, 10) || void 0;
} else Su = void 0;
var LC = Su;
function Js(t, e) {
  if (
    (vt.call(this, t ? t.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    t)
  ) {
    var n = (this.type = t.type),
      r =
        t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : null;
    if (
      ((this.target = t.target || t.srcElement),
      (this.g = e),
      (e = t.relatedTarget))
    ) {
      if (_y) {
        e: {
          try {
            Hd(e.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (e = null);
      }
    } else
      n == "mouseover"
        ? (e = t.fromElement)
        : n == "mouseout" && (e = t.toElement);
    (this.relatedTarget = e),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
          (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ""),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        typeof t.pointerType == "string"
          ? t.pointerType
          : MC[t.pointerType] || ""),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Js.X.h.call(this);
  }
}
dt(Js, vt);
var MC = { 2: "touch", 3: "pen", 4: "mouse" };
Js.prototype.h = function () {
  Js.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var bo = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  $C = 0;
function VC(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ha = i),
    (this.key = ++$C),
    (this.ba = this.ea = !1);
}
function xl(t) {
  (t.ba = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.ha = null);
}
function zd(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function by(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const Lp =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function Ey(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < Lp.length; s++)
      (n = Lp[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function Rl(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
Rl.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = xu(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new VC(e, this.src, s, !!r, i)), (e.ea = n), t.push(e)),
    e
  );
};
function qu(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = vy(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (xl(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function xu(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.ba && s.listener == e && s.capture == !!n && s.ha == r) return i;
  }
  return -1;
}
var Wd = "closure_lm_" + ((1e6 * Math.random()) | 0),
  zc = {};
function Ty(t, e, n, r, i) {
  if (r && r.once) return Ay(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) Ty(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Qd(n)),
    t && t[bo] ? t.N(e, n, wo(r) ? !!r.capture : !!r, i) : Iy(t, e, n, !1, r, i)
  );
}
function Iy(t, e, n, r, i, s) {
  if (!e) throw Error("Invalid event type");
  var o = wo(i) ? !!i.capture : !!i,
    a = Gd(t);
  if ((a || (t[Wd] = a = new Rl(t)), (n = a.add(e, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = FC()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    xC || (i = o),
      i === void 0 && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(ky(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function FC() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = UC;
  return t;
}
function Ay(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) Ay(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Qd(n)),
    t && t[bo] ? t.O(e, n, wo(r) ? !!r.capture : !!r, i) : Iy(t, e, n, !0, r, i)
  );
}
function Cy(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) Cy(t, e[s], n, r, i);
  else
    (r = wo(r) ? !!r.capture : !!r),
      (n = Qd(n)),
      t && t[bo]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = xu(s, n, r, i)),
            -1 < n &&
              (xl(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = Gd(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = xu(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && Kd(n));
}
function Kd(t) {
  if (typeof t != "number" && t && !t.ba) {
    var e = t.src;
    if (e && e[bo]) qu(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(ky(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = Gd(e))
          ? (qu(n, t), n.h == 0 && ((n.src = null), (e[Wd] = null)))
          : xl(t);
    }
  }
}
function ky(t) {
  return t in zc ? zc[t] : (zc[t] = "on" + t);
}
function UC(t, e) {
  if (t.ba) t = !0;
  else {
    e = new Js(e, this);
    var n = t.listener,
      r = t.ha || t.src;
    t.ea && Kd(t), (t = n.call(r, e));
  }
  return t;
}
function Gd(t) {
  return (t = t[Wd]), t instanceof Rl ? t : null;
}
var Wc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Qd(t) {
  return typeof t == "function"
    ? t
    : (t[Wc] ||
        (t[Wc] = function (e) {
          return t.handleEvent(e);
        }),
      t[Wc]);
}
function nt() {
  br.call(this), (this.i = new Rl(this)), (this.P = this), (this.I = null);
}
dt(nt, br);
nt.prototype[bo] = !0;
nt.prototype.removeEventListener = function (t, e, n, r) {
  Cy(this, t, e, n, r);
};
function ct(t, e) {
  var n,
    r = t.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((t = t.P), (r = e.type || e), typeof e == "string")) e = new vt(e, t);
  else if (e instanceof vt) e.target = e.target || t;
  else {
    var i = e;
    (e = new vt(r, t)), Ey(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = Xo(o, r, !0, e) && i;
    }
  if (
    ((o = e.g = t), (i = Xo(o, r, !0, e) && i), (i = Xo(o, r, !1, e) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = Xo(o, r, !1, e) && i);
}
nt.prototype.M = function () {
  if ((nt.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) xl(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.I = null;
};
nt.prototype.N = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
nt.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function Xo(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        l = o.ha || o.src;
      o.ea && qu(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Yd = ae.JSON.stringify;
function BC() {
  var t = xy;
  let e = null;
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  );
}
class jC {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = Sy.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var Sy = new (class {
  constructor(t, e) {
    (this.i = t), (this.j = e), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return (
      0 < this.h
        ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
        : (t = this.i()),
      t
    );
  }
})(
  () => new HC(),
  (t) => t.reset()
);
class HC {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(e, n) {
    (this.h = e), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function zC(t) {
  ae.setTimeout(() => {
    throw t;
  }, 0);
}
function qy(t, e) {
  Ru || WC(), Pu || (Ru(), (Pu = !0)), xy.add(t, e);
}
var Ru;
function WC() {
  var t = ae.Promise.resolve(void 0);
  Ru = function () {
    t.then(KC);
  };
}
var Pu = !1,
  xy = new jC();
function KC() {
  for (var t; (t = BC()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      zC(n);
    }
    var e = Sy;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Pu = !1;
}
function Pl(t, e) {
  nt.call(this),
    (this.h = t || 1),
    (this.g = e || ae),
    (this.j = gt(this.kb, this)),
    (this.l = Date.now());
}
dt(Pl, nt);
Q = Pl.prototype;
Q.ca = !1;
Q.R = null;
Q.kb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        ct(this, "tick"),
        this.ca && (Xd(this), this.start()));
  }
};
Q.start = function () {
  (this.ca = !0),
    this.R ||
      ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Xd(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
Q.M = function () {
  Pl.X.M.call(this), Xd(this), delete this.g;
};
function Jd(t, e, n) {
  if (typeof t == "function") n && (t = gt(t, n));
  else if (t && typeof t.handleEvent == "function") t = gt(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : ae.setTimeout(t, e || 0);
}
function Ry(t) {
  t.g = Jd(() => {
    (t.g = null), t.i && ((t.i = !1), Ry(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class GC extends br {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : Ry(this);
  }
  M() {
    super.M(),
      this.g &&
        (ae.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function Zs(t) {
  br.call(this), (this.h = t), (this.g = {});
}
dt(Zs, br);
var Mp = [];
function Py(t, e, n, r) {
  Array.isArray(n) || (n && (Mp[0] = n.toString()), (n = Mp));
  for (var i = 0; i < n.length; i++) {
    var s = Ty(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function Oy(t) {
  zd(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && Kd(e);
    },
    t
  ),
    (t.g = {});
}
Zs.prototype.M = function () {
  Zs.X.M.call(this), Oy(this);
};
Zs.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Ol() {
  this.g = !0;
}
Ol.prototype.Aa = function () {
  this.g = !1;
};
function QC(t, e, n, r, i, s) {
  t.info(function () {
    if (t.g)
      if (s)
        for (var o = "", a = s.split("&"), l = 0; l < a.length; l++) {
          var c = a[l].split("=");
          if (1 < c.length) {
            var u = c[0];
            c = c[1];
            var d = u.split("_");
            o =
              2 <= d.length && d[1] == "type"
                ? o + (u + "=" + c + "&")
                : o + (u + "=redacted&");
          }
        }
      else o = null;
    else o = s;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function YC(t, e, n, r, i, s, o) {
  t.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      s +
      " " +
      o
    );
  });
}
function _i(t, e, n, r) {
  t.info(function () {
    return "XMLHTTP TEXT (" + e + "): " + JC(t, n) + (r ? " " + r : "");
  });
}
function XC(t, e) {
  t.info(function () {
    return "TIMEOUT: " + e;
  });
}
Ol.prototype.info = function () {};
function JC(t, e) {
  if (!t.g) return e;
  if (!e) return null;
  try {
    var n = JSON.parse(e);
    if (n) {
      for (t = 0; t < n.length; t++)
        if (Array.isArray(n[t])) {
          var r = n[t];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close")
                for (var o = 1; o < i.length; o++) i[o] = "";
            }
          }
        }
    }
    return Yd(n);
  } catch {
    return e;
  }
}
var ii = {},
  $p = null;
function Dl() {
  return ($p = $p || new nt());
}
ii.Oa = "serverreachability";
function Dy(t) {
  vt.call(this, ii.Oa, t);
}
dt(Dy, vt);
function eo(t) {
  const e = Dl();
  ct(e, new Dy(e));
}
ii.STAT_EVENT = "statevent";
function Ny(t, e) {
  vt.call(this, ii.STAT_EVENT, t), (this.stat = e);
}
dt(Ny, vt);
function At(t) {
  const e = Dl();
  ct(e, new Ny(e, t));
}
ii.Pa = "timingevent";
function Ly(t, e) {
  vt.call(this, ii.Pa, t), (this.size = e);
}
dt(Ly, vt);
function Eo(t, e) {
  if (typeof t != "function")
    throw Error("Fn must not be null and must be a function");
  return ae.setTimeout(function () {
    t();
  }, e);
}
var Nl = {
    NO_ERROR: 0,
    lb: 1,
    yb: 2,
    xb: 3,
    sb: 4,
    wb: 5,
    zb: 6,
    La: 7,
    TIMEOUT: 8,
    Cb: 9,
  },
  My = {
    qb: "complete",
    Mb: "success",
    Ma: "error",
    La: "abort",
    Eb: "ready",
    Fb: "readystatechange",
    TIMEOUT: "timeout",
    Ab: "incrementaldata",
    Db: "progress",
    tb: "downloadprogress",
    Ub: "uploadprogress",
  };
function Zd() {}
Zd.prototype.h = null;
function Vp(t) {
  return t.h || (t.h = t.i());
}
function $y() {}
var To = { OPEN: "a", pb: "b", Ma: "c", Bb: "d" };
function eh() {
  vt.call(this, "d");
}
dt(eh, vt);
function th() {
  vt.call(this, "c");
}
dt(th, vt);
var Ou;
function Ll() {}
dt(Ll, Zd);
Ll.prototype.g = function () {
  return new XMLHttpRequest();
};
Ll.prototype.i = function () {
  return {};
};
Ou = new Ll();
function Io(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = r || 1),
    (this.S = new Zs(this)),
    (this.O = ZC),
    (t = ku ? 125 : void 0),
    (this.T = new Pl(t)),
    (this.H = null),
    (this.i = !1),
    (this.s = this.A = this.v = this.K = this.F = this.V = this.B = null),
    (this.D = []),
    (this.g = null),
    (this.C = 0),
    (this.o = this.u = null),
    (this.Y = -1),
    (this.I = !1),
    (this.N = 0),
    (this.L = null),
    (this.$ = this.J = this.Z = this.P = !1),
    (this.h = new Vy());
}
function Vy() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var ZC = 45e3,
  Du = {},
  Ba = {};
Q = Io.prototype;
Q.setTimeout = function (t) {
  this.O = t;
};
function Nu(t, e, n) {
  (t.K = 1), (t.v = $l(qn(e))), (t.s = n), (t.P = !0), Fy(t, null);
}
function Fy(t, e) {
  (t.F = Date.now()), Ao(t), (t.A = qn(t.v));
  var n = t.A,
    r = t.U;
  Array.isArray(r) || (r = [String(r)]),
    Gy(n.i, "t", r),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new Vy()),
    (t.g = m_(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new GC(gt(t.Ka, t, t.g), t.N)),
    Py(t.S, t.g, "readystatechange", t.hb),
    (e = t.H ? by(t.H) : {}),
    t.s
      ? (t.u || (t.u = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = "GET"), t.g.da(t.A, t.u, null, e)),
    eo(),
    QC(t.j, t.u, t.A, t.m, t.U, t.s);
}
Q.hb = function (t) {
  t = t.target;
  const e = this.L;
  e && bn(t) == 3 ? e.l() : this.Ka(t);
};
Q.Ka = function (t) {
  try {
    if (t == this.g)
      e: {
        const u = bn(this.g);
        var e = this.g.Ea();
        const d = this.g.aa();
        if (
          !(3 > u) &&
          (u != 3 || ku || (this.g && (this.h.h || this.g.fa() || jp(this.g))))
        ) {
          this.I || u != 4 || e == 7 || (e == 8 || 0 >= d ? eo(3) : eo(2)),
            Ml(this);
          var n = this.g.aa();
          this.Y = n;
          t: if (Uy(this)) {
            var r = jp(this.g);
            t = "";
            var i = r.length,
              s = bn(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Fr(this), xs(this);
                var o = "";
                break t;
              }
              this.h.i = new ae.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0),
                (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            r.splice(0, i), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.fa();
          if (
            ((this.i = n == 200),
            YC(this.j, this.u, this.A, this.m, this.U, u, n),
            this.i)
          ) {
            if (this.Z && !this.J) {
              t: {
                if (this.g) {
                  var a,
                    l = this.g;
                  if (
                    (a = l.g
                      ? l.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !Fa(a)
                  ) {
                    var c = a;
                    break t;
                  }
                }
                c = null;
              }
              if ((n = c))
                _i(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.J = !0),
                  Lu(this, n);
              else {
                (this.i = !1), (this.o = 3), At(12), Fr(this), xs(this);
                break e;
              }
            }
            this.P
              ? (By(this, u, o),
                ku &&
                  this.i &&
                  u == 3 &&
                  (Py(this.S, this.T, "tick", this.gb), this.T.start()))
              : (_i(this.j, this.m, o, null), Lu(this, o)),
              u == 4 && Fr(this),
              this.i &&
                !this.I &&
                (u == 4 ? d_(this.l, this) : ((this.i = !1), Ao(this)));
          } else
            n == 400 && 0 < o.indexOf("Unknown SID")
              ? ((this.o = 3), At(12))
              : ((this.o = 0), At(13)),
              Fr(this),
              xs(this);
        }
      }
  } catch {
  } finally {
  }
};
function Uy(t) {
  return t.g ? t.u == "GET" && t.K != 2 && t.l.Da : !1;
}
function By(t, e, n) {
  let r = !0,
    i;
  for (; !t.I && t.C < n.length; )
    if (((i = ek(t, n)), i == Ba)) {
      e == 4 && ((t.o = 4), At(14), (r = !1)),
        _i(t.j, t.m, null, "[Incomplete Response]");
      break;
    } else if (i == Du) {
      (t.o = 4), At(15), _i(t.j, t.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else _i(t.j, t.m, i, null), Lu(t, i);
  Uy(t) && i != Ba && i != Du && ((t.h.g = ""), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), At(16), (r = !1)),
    (t.i = t.i && r),
    r
      ? 0 < n.length &&
        !t.$ &&
        ((t.$ = !0),
        (e = t.l),
        e.g == t &&
          e.$ &&
          !e.K &&
          (e.j.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length
          ),
          lh(e),
          (e.K = !0),
          At(11)))
      : (_i(t.j, t.m, n, "[Invalid Chunked Response]"), Fr(t), xs(t));
}
Q.gb = function () {
  if (this.g) {
    var t = bn(this.g),
      e = this.g.fa();
    this.C < e.length &&
      (Ml(this), By(this, t, e), this.i && t != 4 && Ao(this));
  }
};
function ek(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? Ba
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? Du
        : ((r += 1),
          r + n > e.length ? Ba : ((e = e.substr(r, n)), (t.C = r + n), e)));
}
Q.cancel = function () {
  (this.I = !0), Fr(this);
};
function Ao(t) {
  (t.V = Date.now() + t.O), jy(t, t.O);
}
function jy(t, e) {
  if (t.B != null) throw Error("WatchDog timer not null");
  t.B = Eo(gt(t.fb, t), e);
}
function Ml(t) {
  t.B && (ae.clearTimeout(t.B), (t.B = null));
}
Q.fb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (XC(this.j, this.A),
      this.K != 2 && (eo(), At(17)),
      Fr(this),
      (this.o = 2),
      xs(this))
    : jy(this, this.V - t);
};
function xs(t) {
  t.l.G == 0 || t.I || d_(t.l, t);
}
function Fr(t) {
  Ml(t);
  var e = t.L;
  e && typeof e.na == "function" && e.na(),
    (t.L = null),
    Xd(t.T),
    Oy(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function Lu(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || Mu(n.h, t))) {
      if (!t.J && Mu(n.h, t) && n.G == 3) {
        try {
          var r = n.Fa.g.parse(e);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.F + 3e3 < t.F) za(n), Ul(n);
                else break e;
              ah(n), At(18);
            }
          } else
            (n.Ba = i[1]),
              0 < n.Ba - n.T &&
                37500 > i[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = Eo(gt(n.bb, n), 6e3));
          if (1 >= Xy(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else Ur(n, 11);
      } else if (((t.J || n.g == t) && za(n), !Fa(e)))
        for (i = n.Fa.g.parse(e), e = 0; e < i.length; e++) {
          let c = i[e];
          if (((n.T = c[0]), (c = c[1]), n.G == 2))
            if (c[0] == "c") {
              (n.I = c[1]), (n.ka = c[2]);
              const u = c[3];
              u != null && ((n.ma = u), n.j.info("VER=" + n.ma));
              const d = c[4];
              d != null && ((n.Ca = d), n.j.info("SVER=" + n.Ca));
              const h = c[5];
              h != null &&
                typeof h == "number" &&
                0 < h &&
                ((r = 1.5 * h),
                (n.J = r),
                n.j.info("backChannelRequestTimeoutMs_=" + r)),
                (r = n);
              const f = t.g;
              if (f) {
                const g = f.g
                  ? f.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (g) {
                  var s = r.h;
                  s.g ||
                    (g.indexOf("spdy") == -1 &&
                      g.indexOf("quic") == -1 &&
                      g.indexOf("h2") == -1) ||
                    ((s.j = s.l),
                    (s.g = new Set()),
                    s.h && (nh(s, s.h), (s.h = null)));
                }
                if (r.D) {
                  const y = f.g
                    ? f.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  y && ((r.za = y), Fe(r.F, r.D, y));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ &&
                  ((n.P = Date.now() - t.F),
                  n.j.info("Handshake RTT: " + n.P + "ms")),
                (r = n);
              var o = t;
              if (((r.sa = p_(r, r.H ? r.ka : null, r.V)), o.J)) {
                Jy(r.h, o);
                var a = o,
                  l = r.J;
                l && a.setTimeout(l), a.B && (Ml(a), Ao(a)), (r.g = o);
              } else c_(r);
              0 < n.i.length && Bl(n);
            } else (c[0] != "stop" && c[0] != "close") || Ur(n, 7);
          else
            n.G == 3 &&
              (c[0] == "stop" || c[0] == "close"
                ? c[0] == "stop"
                  ? Ur(n, 7)
                  : oh(n)
                : c[0] != "noop" && n.l && n.l.wa(c),
              (n.A = 0));
        }
    }
    eo(4);
  } catch {}
}
function tk(t) {
  if (t.W && typeof t.W == "function") return t.W();
  if (
    (typeof Map < "u" && t instanceof Map) ||
    (typeof Set < "u" && t instanceof Set)
  )
    return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (Sl(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function nk(t) {
  if (t.oa && typeof t.oa == "function") return t.oa();
  if (!t.W || typeof t.W != "function") {
    if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < "u" && t instanceof Set)) {
      if (Sl(t) || typeof t == "string") {
        var e = [];
        t = t.length;
        for (var n = 0; n < t; n++) e.push(n);
        return e;
      }
      (e = []), (n = 0);
      for (const r in t) e[n++] = r;
      return e;
    }
  }
}
function Hy(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (Sl(t) || typeof t == "string")
    Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = nk(t), r = tk(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var zy = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function rk(t, e) {
  if (t) {
    t = t.split("&");
    for (var n = 0; n < t.length; n++) {
      var r = t[n].indexOf("="),
        i = null;
      if (0 <= r) {
        var s = t[n].substring(0, r);
        i = t[n].substring(r + 1);
      } else s = t[n];
      e(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function Wr(t, e) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    t instanceof Wr)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      ja(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      Ha(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new to();
    (n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      Fp(this, n),
      (this.o = t.o);
  } else
    t && (n = String(t).match(zy))
      ? ((this.h = !!e),
        ja(this, n[1] || "", !0),
        (this.s = ws(n[2] || "")),
        (this.g = ws(n[3] || "", !0)),
        Ha(this, n[4]),
        (this.l = ws(n[5] || "", !0)),
        Fp(this, n[6] || "", !0),
        (this.o = ws(n[7] || "")))
      : ((this.h = !!e), (this.i = new to(null, this.h)));
}
Wr.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(bs(e, Up, !0), ":");
  var n = this.g;
  return (
    (n || e == "file") &&
      (t.push("//"),
      (e = this.s) && t.push(bs(e, Up, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && t.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && t.push("/"),
      t.push(bs(n, n.charAt(0) == "/" ? ok : sk, !0))),
    (n = this.i.toString()) && t.push("?", n),
    (n = this.o) && t.push("#", bs(n, lk)),
    t.join("")
  );
};
function qn(t) {
  return new Wr(t);
}
function ja(t, e, n) {
  (t.j = n ? ws(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
}
function Ha(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.m = e;
  } else t.m = null;
}
function Fp(t, e, n) {
  e instanceof to
    ? ((t.i = e), ck(t.i, t.h))
    : (n || (e = bs(e, ak)), (t.i = new to(e, t.h)));
}
function Fe(t, e, n) {
  t.i.set(e, n);
}
function $l(t) {
  return (
    Fe(
      t,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    ),
    t
  );
}
function ws(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function bs(t, e, n) {
  return typeof t == "string"
    ? ((t = encodeURI(t).replace(e, ik)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function ik(t) {
  return (
    (t = t.charCodeAt(0)),
    "%" + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  );
}
var Up = /[#\/\?@]/g,
  sk = /[#\?:]/g,
  ok = /[#\?]/g,
  ak = /[#\?@]/g,
  lk = /#/g;
function to(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function Er(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      rk(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
Q = to.prototype;
Q.add = function (t, e) {
  Er(this), (this.i = null), (t = os(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Wy(t, e) {
  Er(t),
    (e = os(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function Ky(t, e) {
  return Er(t), (e = os(t, e)), t.g.has(e);
}
Q.forEach = function (t, e) {
  Er(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
Q.oa = function () {
  Er(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
Q.W = function (t) {
  Er(this);
  let e = [];
  if (typeof t == "string")
    Ky(this, t) && (e = e.concat(this.g.get(os(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
Q.set = function (t, e) {
  return (
    Er(this),
    (this.i = null),
    (t = os(this, t)),
    Ky(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
Q.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function Gy(t, e, n) {
  Wy(t, e),
    0 < n.length && ((t.i = null), t.g.set(os(t, e), jd(n)), (t.h += n.length));
}
Q.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const t = [],
    e = Array.from(this.g.keys());
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    const s = encodeURIComponent(String(r)),
      o = this.W(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), t.push(i);
    }
  }
  return (this.i = t.join("&"));
};
function os(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function ck(t, e) {
  e &&
    !t.j &&
    (Er(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Wy(this, r), Gy(this, i, n));
    }, t)),
    (t.j = e);
}
var uk = class {
  constructor(t, e) {
    (this.h = t), (this.g = e);
  }
};
function Qy(t) {
  (this.l = t || dk),
    ae.PerformanceNavigationTiming
      ? ((t = ae.performance.getEntriesByType("navigation")),
        (t =
          0 < t.length &&
          (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")))
      : (t = !!(ae.g && ae.g.Ga && ae.g.Ga() && ae.g.Ga().Zb)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var dk = 10;
function Yy(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function Xy(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function Mu(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function nh(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function Jy(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
Qy.prototype.cancel = function () {
  if (((this.i = Zy(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function Zy(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return jd(t.i);
}
function rh() {}
rh.prototype.stringify = function (t) {
  return ae.JSON.stringify(t, void 0);
};
rh.prototype.parse = function (t) {
  return ae.JSON.parse(t, void 0);
};
function hk() {
  this.g = new rh();
}
function fk(t, e, n) {
  const r = n || "";
  try {
    Hy(t, function (i, s) {
      let o = i;
      wo(i) && (o = Yd(i)), e.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function pk(t, e) {
  const n = new Ol();
  if (ae.Image) {
    const r = new Image();
    (r.onload = Yo(Jo, n, r, "TestLoadImage: loaded", !0, e)),
      (r.onerror = Yo(Jo, n, r, "TestLoadImage: error", !1, e)),
      (r.onabort = Yo(Jo, n, r, "TestLoadImage: abort", !1, e)),
      (r.ontimeout = Yo(Jo, n, r, "TestLoadImage: timeout", !1, e)),
      ae.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function Jo(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch {}
}
function Co(t) {
  (this.l = t.$b || null), (this.j = t.ib || !1);
}
dt(Co, Zd);
Co.prototype.g = function () {
  return new Vl(this.l, this.j);
};
Co.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function Vl(t, e) {
  nt.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = ih),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
dt(Vl, nt);
var ih = 0;
Q = Vl.prototype;
Q.open = function (t, e) {
  if (this.readyState != ih)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = t), (this.B = e), (this.readyState = 1), no(this);
};
Q.send = function (t) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const e = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  t && (e.body = t),
    (this.D || ae)
      .fetch(new Request(this.B, e))
      .then(this.Va.bind(this), this.ga.bind(this));
};
Q.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), ko(this)),
    (this.readyState = ih);
};
Q.Va = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      no(this)),
    this.g && ((this.readyState = 3), no(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      t.arrayBuffer().then(this.Ta.bind(this), this.ga.bind(this));
    else if (typeof ae.ReadableStream < "u" && "body" in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      e_(this);
    } else t.text().then(this.Ua.bind(this), this.ga.bind(this));
};
function e_(t) {
  t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t));
}
Q.Sa = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e);
    }
    t.done ? ko(this) : no(this), this.readyState == 3 && e_(this);
  }
};
Q.Ua = function (t) {
  this.g && ((this.response = this.responseText = t), ko(this));
};
Q.Ta = function (t) {
  this.g && ((this.response = t), ko(this));
};
Q.ga = function () {
  this.g && ko(this);
};
function ko(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), no(t);
}
Q.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
Q.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || "";
};
Q.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function no(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(Vl.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (t) {
    this.m = t ? "include" : "same-origin";
  },
});
var mk = ae.JSON.parse;
function Ke(t) {
  nt.call(this),
    (this.headers = new Map()),
    (this.u = t || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.H = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.F = this.v = this.D = !1),
    (this.B = 0),
    (this.A = null),
    (this.J = t_),
    (this.K = this.L = !1);
}
dt(Ke, nt);
var t_ = "",
  gk = /^https?$/i,
  vk = ["POST", "PUT"];
Q = Ke.prototype;
Q.da = function (t, e, n, r) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.H +
        "; newUri=" +
        t
    );
  (e = e ? e.toUpperCase() : "GET"),
    (this.H = t),
    (this.j = ""),
    (this.m = 0),
    (this.D = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : Ou.g()),
    (this.C = this.u ? Vp(this.u) : Vp(Ou)),
    (this.g.onreadystatechange = gt(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (s) {
    Bp(this, s);
    return;
  }
  if (((t = n || ""), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type")),
    (i = ae.FormData && t instanceof ae.FormData),
    !(0 <= vy(vk, e)) ||
      r ||
      i ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.J && (this.g.responseType = this.J),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    i_(this),
      0 < this.B &&
        ((this.K = yk(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = gt(this.qa, this)))
          : (this.A = Jd(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    Bp(this, s);
  }
};
function yk(t) {
  return Hi && NC() && typeof t.timeout == "number" && t.ontimeout !== void 0;
}
Q.qa = function () {
  typeof Bd < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    ct(this, "timeout"),
    this.abort(8));
};
function Bp(t, e) {
  (t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    n_(t),
    Fl(t);
}
function n_(t) {
  t.D || ((t.D = !0), ct(t, "complete"), ct(t, "error"));
}
Q.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    ct(this, "complete"),
    ct(this, "abort"),
    Fl(this));
};
Q.M = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Fl(this, !0)),
    Ke.X.M.call(this);
};
Q.Ha = function () {
  this.s || (this.F || this.v || this.l ? r_(this) : this.eb());
};
Q.eb = function () {
  r_(this);
};
function r_(t) {
  if (t.h && typeof Bd < "u" && (!t.C[1] || bn(t) != 4 || t.aa() != 2)) {
    if (t.v && bn(t) == 4) Jd(t.Ha, 0, t);
    else if ((ct(t, "readystatechange"), bn(t) == 4)) {
      t.h = !1;
      try {
        const a = t.aa();
        e: switch (a) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var e = !0;
            break e;
          default:
            e = !1;
        }
        var n;
        if (!(n = e)) {
          var r;
          if ((r = a === 0)) {
            var i = String(t.H).match(zy)[1] || null;
            if (!i && ae.self && ae.self.location) {
              var s = ae.self.location.protocol;
              i = s.substr(0, s.length - 1);
            }
            r = !gk.test(i ? i.toLowerCase() : "");
          }
          n = r;
        }
        if (n) ct(t, "complete"), ct(t, "success");
        else {
          t.m = 6;
          try {
            var o = 2 < bn(t) ? t.g.statusText : "";
          } catch {
            o = "";
          }
          (t.j = o + " [" + t.aa() + "]"), n_(t);
        }
      } finally {
        Fl(t);
      }
    }
  }
}
function Fl(t, e) {
  if (t.g) {
    i_(t);
    const n = t.g,
      r = t.C[0] ? Va : null;
    (t.g = null), (t.C = null), e || ct(t, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function i_(t) {
  t.g && t.K && (t.g.ontimeout = null),
    t.A && (ae.clearTimeout(t.A), (t.A = null));
}
function bn(t) {
  return t.g ? t.g.readyState : 0;
}
Q.aa = function () {
  try {
    return 2 < bn(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
Q.fa = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
Q.Ra = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), mk(e);
  }
};
function jp(t) {
  try {
    if (!t.g) return null;
    if ("response" in t.g) return t.g.response;
    switch (t.J) {
      case t_:
      case "text":
        return t.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
Q.Ea = function () {
  return this.m;
};
Q.Na = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function s_(t) {
  let e = "";
  return (
    zd(t, function (n, r) {
      (e += r),
        (e += ":"),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function sh(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = s_(n)),
    typeof t == "string"
      ? n != null && encodeURIComponent(String(n))
      : Fe(t, e, n));
}
function ms(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function o_(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new Ol()),
    (this.ka =
      this.sa =
      this.F =
      this.V =
      this.g =
      this.za =
      this.D =
      this.ia =
      this.o =
      this.S =
      this.s =
        null),
    (this.$a = this.U = 0),
    (this.Ya = ms("failFast", !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Wa = ms("baseRetryDelayMs", 5e3, t)),
    (this.ab = ms("retryDelaySeedMs", 1e4, t)),
    (this.Za = ms("forwardChannelMaxRetries", 2, t)),
    (this.ta = ms("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Yb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ""),
    (this.h = new Qy(t && t.concurrentRequestLimit)),
    (this.Fa = new hk()),
    (this.O = (t && t.fastHandshake) || !1),
    (this.N = (t && t.encodeInitMessageHeaders) || !1),
    this.O && this.N && (this.N = !1),
    (this.Xa = (t && t.Wb) || !1),
    t && t.Aa && this.j.Aa(),
    t && t.forceLongPolling && (this.Y = !1),
    (this.$ = (!this.O && this.Y && t && t.detectBufferingProxy) || !1),
    (this.ja = void 0),
    (this.P = 0),
    (this.K = !1),
    (this.la = this.B = null);
}
Q = o_.prototype;
Q.ma = 8;
Q.G = 1;
function oh(t) {
  if ((a_(t), t.G == 3)) {
    var e = t.U++,
      n = qn(t.F);
    Fe(n, "SID", t.I),
      Fe(n, "RID", e),
      Fe(n, "TYPE", "terminate"),
      So(t, n),
      (e = new Io(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = $l(qn(n))),
      (n = !1),
      ae.navigator &&
        ae.navigator.sendBeacon &&
        (n = ae.navigator.sendBeacon(e.v.toString(), "")),
      !n && ae.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = m_(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      Ao(e);
  }
  f_(t);
}
function Ul(t) {
  t.g && (lh(t), t.g.cancel(), (t.g = null));
}
function a_(t) {
  Ul(t),
    t.u && (ae.clearTimeout(t.u), (t.u = null)),
    za(t),
    t.h.cancel(),
    t.m && (typeof t.m == "number" && ae.clearTimeout(t.m), (t.m = null));
}
function Bl(t) {
  Yy(t.h) || t.m || ((t.m = !0), qy(t.Ja, t), (t.C = 0));
}
function _k(t, e) {
  return Xy(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Ya ? 0 : t.Za)
    ? !1
    : ((t.m = Eo(gt(t.Ja, t, e), h_(t, t.C))), t.C++, !0);
}
Q.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const i = new Io(this, this.j, t, void 0);
        let s = this.s;
        if (
          (this.S && (s ? ((s = by(s)), Ey(s, this.S)) : (s = this.S)),
          this.o !== null || this.N || ((i.H = s), (s = null)),
          this.O)
        )
          e: {
            for (var e = 0, n = 0; n < this.i.length; n++) {
              t: {
                var r = this.i[n];
                if (
                  "__data__" in r.g &&
                  ((r = r.g.__data__), typeof r == "string")
                ) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((e += r), 4096 < e)) {
                e = n;
                break e;
              }
              if (e === 4096 || n === this.i.length - 1) {
                e = n + 1;
                break e;
              }
            }
            e = 1e3;
          }
        else e = 1e3;
        (e = l_(this, i, e)),
          (n = qn(this.F)),
          Fe(n, "RID", t),
          Fe(n, "CVER", 22),
          this.D && Fe(n, "X-HTTP-Session-Id", this.D),
          So(this, n),
          s &&
            (this.N
              ? (e = "headers=" + encodeURIComponent(String(s_(s))) + "&" + e)
              : this.o && sh(n, this.o, s)),
          nh(this.h, i),
          this.Xa && Fe(n, "TYPE", "init"),
          this.O
            ? (Fe(n, "$req", e),
              Fe(n, "SID", "null"),
              (i.Z = !0),
              Nu(i, n, null))
            : Nu(i, n, e),
          (this.G = 2);
      }
    } else
      this.G == 3 &&
        (t ? Hp(this, t) : this.i.length == 0 || Yy(this.h) || Hp(this));
};
function Hp(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const r = qn(t.F);
  Fe(r, "SID", t.I),
    Fe(r, "RID", n),
    Fe(r, "AID", t.T),
    So(t, r),
    t.o && t.s && sh(r, t.o, t.s),
    (n = new Io(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = l_(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())
    ),
    nh(t.h, n),
    Nu(n, r, e);
}
function So(t, e) {
  t.ia &&
    zd(t.ia, function (n, r) {
      Fe(e, r, n);
    }),
    t.l &&
      Hy({}, function (n, r) {
        Fe(e, r, n);
      });
}
function l_(t, e, n) {
  n = Math.min(t.i.length, n);
  var r = t.l ? gt(t.l.Qa, t.l, t) : null;
  e: {
    var i = t.i;
    let s = -1;
    for (;;) {
      const o = ["count=" + n];
      s == -1
        ? 0 < n
          ? ((s = i[0].h), o.push("ofs=" + s))
          : (s = 0)
        : o.push("ofs=" + s);
      let a = !0;
      for (let l = 0; l < n; l++) {
        let c = i[l].h;
        const u = i[l].g;
        if (((c -= s), 0 > c)) (s = Math.max(0, i[l].h - 100)), (a = !1);
        else
          try {
            fk(u, o, "req" + c + "_");
          } catch {
            r && r(u);
          }
      }
      if (a) {
        r = o.join("&");
        break e;
      }
    }
  }
  return (t = t.i.splice(0, n)), (e.D = t), r;
}
function c_(t) {
  t.g || t.u || ((t.Z = 1), qy(t.Ia, t), (t.A = 0));
}
function ah(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.Z++, (t.u = Eo(gt(t.Ia, t), h_(t, t.A))), t.A++, !0);
}
Q.Ia = function () {
  if (
    ((this.u = null),
    u_(this),
    this.$ && !(this.K || this.g == null || 0 >= this.P))
  ) {
    var t = 2 * this.P;
    this.j.info("BP detection timer enabled: " + t),
      (this.B = Eo(gt(this.cb, this), t));
  }
};
Q.cb = function () {
  this.B &&
    ((this.B = null),
    this.j.info("BP detection timeout reached."),
    this.j.info("Buffering proxy detected and switch to long-polling!"),
    (this.L = !1),
    (this.K = !0),
    At(10),
    Ul(this),
    u_(this));
};
function lh(t) {
  t.B != null && (ae.clearTimeout(t.B), (t.B = null));
}
function u_(t) {
  (t.g = new Io(t, t.j, "rpc", t.Z)),
    t.o === null && (t.g.H = t.s),
    (t.g.N = 0);
  var e = qn(t.sa);
  Fe(e, "RID", "rpc"),
    Fe(e, "SID", t.I),
    Fe(e, "CI", t.L ? "0" : "1"),
    Fe(e, "AID", t.T),
    Fe(e, "TYPE", "xmlhttp"),
    So(t, e),
    t.o && t.s && sh(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = $l(qn(e))), (n.s = null), (n.P = !0), Fy(n, t);
}
Q.bb = function () {
  this.v != null && ((this.v = null), Ul(this), ah(this), At(19));
};
function za(t) {
  t.v != null && (ae.clearTimeout(t.v), (t.v = null));
}
function d_(t, e) {
  var n = null;
  if (t.g == e) {
    za(t), lh(t), (t.g = null);
    var r = 2;
  } else if (Mu(t.h, e)) (n = e.D), Jy(t.h, e), (r = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var i = t.C;
        (r = Dl()), ct(r, new Ly(r, n)), Bl(t);
      } else c_(t);
    else if (
      ((i = e.o),
      i == 3 ||
        (i == 0 && 0 < t.pa) ||
        !((r == 1 && _k(t, e)) || (r == 2 && ah(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), i)) {
        case 1:
          Ur(t, 5);
          break;
        case 4:
          Ur(t, 10);
          break;
        case 3:
          Ur(t, 6);
          break;
        default:
          Ur(t, 2);
      }
  }
}
function h_(t, e) {
  let n = t.Wa + Math.floor(Math.random() * t.ab);
  return t.l || (n *= 2), n * e;
}
function Ur(t, e) {
  if ((t.j.info("Error code " + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var r = gt(t.jb, t);
    n ||
      ((n = new Wr("//www.google.com/images/cleardot.gif")),
      (ae.location && ae.location.protocol == "http") || ja(n, "https"),
      $l(n)),
      pk(n.toString(), r);
  } else At(2);
  (t.G = 0), t.l && t.l.va(e), f_(t), a_(t);
}
Q.jb = function (t) {
  t
    ? (this.j.info("Successfully pinged google.com"), At(2))
    : (this.j.info("Failed to ping google.com"), At(1));
};
function f_(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = Zy(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (Op(t.la, e),
      Op(t.la, t.i),
      (t.h.i.length = 0),
      jd(t.i),
      (t.i.length = 0)),
      t.l.ua();
  }
}
function p_(t, e, n) {
  var r = n instanceof Wr ? qn(n) : new Wr(n, void 0);
  if (r.g != "") e && (r.g = e + "." + r.g), Ha(r, r.m);
  else {
    var i = ae.location;
    (r = i.protocol),
      (e = e ? e + "." + i.hostname : i.hostname),
      (i = +i.port);
    var s = new Wr(null, void 0);
    r && ja(s, r), e && (s.g = e), i && Ha(s, i), n && (s.l = n), (r = s);
  }
  return (
    (n = t.D),
    (e = t.za),
    n && e && Fe(r, n, e),
    Fe(r, "VER", t.ma),
    So(t, r),
    r
  );
}
function m_(t, e, n) {
  if (e && !t.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (e = n && t.Da && !t.ra ? new Ke(new Co({ ib: !0 })) : new Ke(t.ra)),
    (e.L = t.H),
    e
  );
}
function g_() {}
Q = g_.prototype;
Q.xa = function () {};
Q.wa = function () {};
Q.va = function () {};
Q.ua = function () {};
Q.Qa = function () {};
function Wa() {
  if (Hi && !(10 <= Number(LC)))
    throw Error("Environmental error: no available transport.");
}
Wa.prototype.g = function (t, e) {
  return new Vt(t, e);
};
function Vt(t, e) {
  nt.call(this),
    (this.g = new o_(e)),
    (this.l = t),
    (this.h = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t["X-Client-Protocol"] = "webchannel")
        : (t = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
        : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
    e &&
      e.ya &&
      (t
        ? (t["X-WebChannel-Client-Profile"] = e.ya)
        : (t = { "X-WebChannel-Client-Profile": e.ya })),
    (this.g.S = t),
    (t = e && e.Xb) && !Fa(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !Fa(e) &&
      ((this.g.D = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new as(this));
}
dt(Vt, nt);
Vt.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  At(0),
    (t.V = e),
    (t.ia = n || {}),
    (t.L = t.Y),
    (t.F = p_(t, null, t.V)),
    Bl(t);
};
Vt.prototype.close = function () {
  oh(this.g);
};
Vt.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == "string") {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Yd(t)), (t = n));
  e.i.push(new uk(e.$a++, t)), e.G == 3 && Bl(e);
};
Vt.prototype.M = function () {
  (this.g.l = null),
    delete this.j,
    oh(this.g),
    delete this.g,
    Vt.X.M.call(this);
};
function v_(t) {
  eh.call(this);
  var e = t.__sm__;
  if (e) {
    e: {
      for (const n in e) {
        t = n;
        break e;
      }
      t = void 0;
    }
    (this.i = t) && ((t = this.i), (e = e !== null && t in e ? e[t] : void 0)),
      (this.data = e);
  } else this.data = t;
}
dt(v_, eh);
function y_() {
  th.call(this), (this.status = 1);
}
dt(y_, th);
function as(t) {
  this.g = t;
}
dt(as, g_);
as.prototype.xa = function () {
  ct(this.g, "a");
};
as.prototype.wa = function (t) {
  ct(this.g, new v_(t));
};
as.prototype.va = function (t) {
  ct(this.g, new y_());
};
as.prototype.ua = function () {
  ct(this.g, "b");
};
Wa.prototype.createWebChannel = Wa.prototype.g;
Vt.prototype.send = Vt.prototype.u;
Vt.prototype.open = Vt.prototype.m;
Vt.prototype.close = Vt.prototype.close;
Nl.NO_ERROR = 0;
Nl.TIMEOUT = 8;
Nl.HTTP_ERROR = 6;
My.COMPLETE = "complete";
$y.EventType = To;
To.OPEN = "a";
To.CLOSE = "b";
To.ERROR = "c";
To.MESSAGE = "d";
nt.prototype.listen = nt.prototype.N;
Ke.prototype.listenOnce = Ke.prototype.O;
Ke.prototype.getLastError = Ke.prototype.Na;
Ke.prototype.getLastErrorCode = Ke.prototype.Ea;
Ke.prototype.getStatus = Ke.prototype.aa;
Ke.prototype.getResponseJson = Ke.prototype.Ra;
Ke.prototype.getResponseText = Ke.prototype.fa;
Ke.prototype.send = Ke.prototype.da;
var wk = function () {
    return new Wa();
  },
  bk = function () {
    return Dl();
  },
  Kc = Nl,
  Ek = My,
  Tk = ii,
  zp = {
    rb: 0,
    ub: 1,
    vb: 2,
    Ob: 3,
    Tb: 4,
    Qb: 5,
    Rb: 6,
    Pb: 7,
    Nb: 8,
    Sb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Lb: 12,
    Hb: 13,
    Ib: 14,
    Gb: 15,
    Jb: 16,
    Kb: 17,
    nb: 18,
    mb: 19,
    ob: 20,
  },
  Ik = Co,
  Zo = $y,
  Ak = Ke;
const Wp = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xt {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
(xt.UNAUTHENTICATED = new xt(null)),
  (xt.GOOGLE_CREDENTIALS = new xt("google-credentials-uid")),
  (xt.FIRST_PARTY = new xt("first-party-uid")),
  (xt.MOCK_USER = new xt("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ls = "9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ei = new xd("@firebase/firestore");
function Kp() {
  return ei.logLevel;
}
function Z(t, ...e) {
  if (ei.logLevel <= Se.DEBUG) {
    const n = e.map(ch);
    ei.debug(`Firestore (${ls}): ${t}`, ...n);
  }
}
function xn(t, ...e) {
  if (ei.logLevel <= Se.ERROR) {
    const n = e.map(ch);
    ei.error(`Firestore (${ls}): ${t}`, ...n);
  }
}
function Gp(t, ...e) {
  if (ei.logLevel <= Se.WARN) {
    const n = e.map(ch);
    ei.warn(`Firestore (${ls}): ${t}`, ...n);
  }
}
function ch(t) {
  if (typeof t == "string") return t;
  try {
    return (e = t), JSON.stringify(e);
  } catch {
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ue(t = "Unexpected state") {
  const e = `FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: ` + t;
  throw (xn(e), new Error(e));
}
function Le(t, e) {
  t || ue();
}
function he(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const q = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
let G = class extends Fn {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Tn = class {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ck = class {
    constructor(e, n) {
      (this.user = n),
        (this.type = "OAuth"),
        (this.headers = new Map()),
        this.headers.set("Authorization", `Bearer ${e}`);
    }
  },
  kk = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {}
    start(e, n) {
      e.enqueueRetryable(() => n(xt.UNAUTHENTICATED));
    }
    shutdown() {}
  },
  Sk = class {
    constructor(e) {
      (this.t = e),
        (this.currentUser = xt.UNAUTHENTICATED),
        (this.i = 0),
        (this.forceRefresh = !1),
        (this.auth = null);
    }
    start(e, n) {
      let r = this.i;
      const i = (l) =>
        this.i !== r ? ((r = this.i), n(l)) : Promise.resolve();
      let s = new Tn();
      this.o = () => {
        this.i++,
          (this.currentUser = this.u()),
          s.resolve(),
          (s = new Tn()),
          e.enqueueRetryable(() => i(this.currentUser));
      };
      const o = () => {
          const l = s;
          e.enqueueRetryable(async () => {
            await l.promise, await i(this.currentUser);
          });
        },
        a = (l) => {
          Z("FirebaseAuthCredentialsProvider", "Auth detected"),
            (this.auth = l),
            this.auth.addAuthTokenListener(this.o),
            o();
        };
      this.t.onInit((l) => a(l)),
        setTimeout(() => {
          if (!this.auth) {
            const l = this.t.getImmediate({ optional: !0 });
            l
              ? a(l)
              : (Z("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
                s.resolve(),
                (s = new Tn()));
          }
        }, 0),
        o();
    }
    getToken() {
      const e = this.i,
        n = this.forceRefresh;
      return (
        (this.forceRefresh = !1),
        this.auth
          ? this.auth
              .getToken(n)
              .then((r) =>
                this.i !== e
                  ? (Z(
                      "FirebaseAuthCredentialsProvider",
                      "getToken aborted due to token change."
                    ),
                    this.getToken())
                  : r
                  ? (Le(typeof r.accessToken == "string"),
                    new Ck(r.accessToken, this.currentUser))
                  : null
              )
          : Promise.resolve(null)
      );
    }
    invalidateToken() {
      this.forceRefresh = !0;
    }
    shutdown() {
      this.auth && this.auth.removeAuthTokenListener(this.o);
    }
    u() {
      const e = this.auth && this.auth.getUid();
      return Le(e === null || typeof e == "string"), new xt(e);
    }
  },
  qk = class {
    constructor(e, n, r, i) {
      (this.h = e),
        (this.l = n),
        (this.m = r),
        (this.g = i),
        (this.type = "FirstParty"),
        (this.user = xt.FIRST_PARTY),
        (this.p = new Map());
    }
    I() {
      return this.g
        ? this.g()
        : (Le(
            !(
              typeof this.h != "object" ||
              this.h === null ||
              !this.h.auth ||
              !this.h.auth.getAuthHeaderValueForFirstParty
            )
          ),
          this.h.auth.getAuthHeaderValueForFirstParty([]));
    }
    get headers() {
      this.p.set("X-Goog-AuthUser", this.l);
      const e = this.I();
      return (
        e && this.p.set("Authorization", e),
        this.m && this.p.set("X-Goog-Iam-Authorization-Token", this.m),
        this.p
      );
    }
  },
  xk = class {
    constructor(e, n, r, i) {
      (this.h = e), (this.l = n), (this.m = r), (this.g = i);
    }
    getToken() {
      return Promise.resolve(new qk(this.h, this.l, this.m, this.g));
    }
    start(e, n) {
      e.enqueueRetryable(() => n(xt.FIRST_PARTY));
    }
    shutdown() {}
    invalidateToken() {}
  },
  Rk = class {
    constructor(e) {
      (this.value = e),
        (this.type = "AppCheck"),
        (this.headers = new Map()),
        e &&
          e.length > 0 &&
          this.headers.set("x-firebase-appcheck", this.value);
    }
  };
class Pk {
  constructor(e) {
    (this.T = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.A = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        Z(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.A;
      return (
        (this.A = s.token),
        Z(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      Z("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.T.getImmediate({ optional: !0 });
          s
            ? i(s)
            : Z("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (Le(typeof n.token == "string"),
                  (this.A = n.token),
                  new Rk(n.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ok(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let __ = class {
  static R() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = Ok(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
};
function qe(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function zi(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xe {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new G(
        q.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new G(
        q.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (e < -62135596800)
      throw new G(q.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new G(q.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  static now() {
    return Xe.fromMillis(Date.now());
  }
  static fromDate(e) {
    return Xe.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new Xe(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? qe(this.nanoseconds, e.nanoseconds)
      : qe(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pe {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new pe(e);
  }
  static min() {
    return new pe(new Xe(0, 0));
  }
  static max() {
    return new pe(new Xe(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && ue(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && ue(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return ro.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof ro
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class $e extends ro {
  construct(e, n, r) {
    return new $e(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new G(
          q.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new $e(n);
  }
  static emptyPath() {
    return new $e([]);
  }
}
const Dk = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class mt extends ro {
  construct(e, n, r) {
    return new mt(e, n, r);
  }
  static isValidIdentifier(e) {
    return Dk.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          mt.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new mt(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new G(
          q.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = "");
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === "\\") {
        if (i + 1 === e.length)
          throw new G(
            q.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e
          );
        const l = e[i + 1];
        if (l !== "\\" && l !== "." && l !== "`")
          throw new G(
            q.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e
          );
        (r += l), (i += 2);
      } else
        a === "`"
          ? ((o = !o), i++)
          : a !== "." || o
          ? ((r += a), i++)
          : (s(), i++);
    }
    if ((s(), o))
      throw new G(q.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new mt(n);
  }
  static emptyPath() {
    return new mt([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class re {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new re($e.fromString(e));
  }
  static fromName(e) {
    return new re($e.fromString(e).popFirst(5));
  }
  static empty() {
    return new re($e.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && $e.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return $e.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new re(new $e(e.slice()));
  }
}
function Nk(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = pe.fromTimestamp(r === 1e9 ? new Xe(n + 1, 0) : new Xe(n, r));
  return new yr(i, re.empty(), e);
}
function Lk(t) {
  return new yr(t.readTime, t.key, -1);
}
class yr {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new yr(pe.min(), re.empty(), -1);
  }
  static max() {
    return new yr(pe.max(), re.empty(), -1);
  }
}
function Mk(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = re.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : qe(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $k =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class Vk {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function qo(t) {
  if (t.code !== q.FAILED_PRECONDITION || t.message !== $k) throw t;
  Z("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N {
  constructor(e) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && ue(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new N((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof N ? n : N.resolve(n);
    } catch (n) {
      return N.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : N.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : N.reject(n);
  }
  static resolve(e) {
    return new N((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new N((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new N((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      e.forEach((a) => {
        ++i,
          a.next(
            () => {
              ++s, o && s === i && n();
            },
            (l) => r(l)
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(e) {
    let n = N.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? N.resolve(i) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new N((r, i) => {
      const s = e.length,
        o = new Array(s);
      let a = 0;
      for (let l = 0; l < s; l++) {
        const c = l;
        n(e[c]).next(
          (u) => {
            (o[c] = u), ++a, a === s && r(o);
          },
          (u) => i(u)
        );
      }
    });
  }
  static doWhile(e, n) {
    return new N((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
function xo(t) {
  return t.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uh {
  constructor(e, n) {
    (this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ut(r)),
        (this.ct = (r) => n.writeSequenceNumber(r)));
  }
  ut(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return this.ct && this.ct(e), e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qp(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function si(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function w_(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ uh.at = -1;
class Ze {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || it.EMPTY);
  }
  insert(e, n) {
    return new Ze(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, it.BLACK, null, null)
    );
  }
  remove(e) {
    return new Ze(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, it.BLACK, null, null)
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new ea(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new ea(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new ea(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new ea(this.root, e, this.comparator, !0);
  }
}
class ea {
  constructor(e, n, r, i) {
    (this.isReverse = i), (this.nodeStack = []);
    let s = 1;
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class it {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? it.RED),
      (this.left = i ?? it.EMPTY),
      (this.right = s ?? it.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new it(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
          ? i.copy(null, n, null, null, null)
          : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return it.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      i = this;
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return it.EMPTY;
        (r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, it.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, it.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw ue();
    const e = this.left.check();
    if (e !== this.right.check()) throw ue();
    return e + (this.isRed() ? 0 : 1);
  }
}
(it.EMPTY = null), (it.RED = !0), (it.BLACK = !1);
it.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw ue();
  }
  get value() {
    throw ue();
  }
  get color() {
    throw ue();
  }
  get left() {
    throw ue();
  }
  get right() {
    throw ue();
  }
  copy(t, e, n, r, i) {
    return this;
  }
  insert(t, e, n) {
    return new it(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Je {
  constructor(e) {
    (this.comparator = e), (this.data = new Ze(this.comparator));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new Yp(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new Yp(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof Je) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const n = new Je(this.comparator);
    return (n.data = e), n;
  }
}
class Yp {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zt {
  constructor(e) {
    (this.fields = e), e.sort(mt.comparator);
  }
  static empty() {
    return new zt([]);
  }
  unionWith(e) {
    let n = new Je(mt.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new zt(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return zi(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ut {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = atob(e);
    return new ut(n);
  }
  static fromUint8Array(e) {
    const n = (function (r) {
      let i = "";
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(e);
    return new ut(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (e = this.binaryString), btoa(e);
    var e;
  }
  toUint8Array() {
    return (function (e) {
      const n = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
      return n;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return qe(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
ut.EMPTY_BYTE_STRING = new ut("");
const Fk = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function _r(t) {
  if ((Le(!!t), typeof t == "string")) {
    let e = 0;
    const n = Fk.exec(t);
    if ((Le(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: ze(t.seconds), nanos: ze(t.nanos) };
}
function ze(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function Wi(t) {
  return typeof t == "string" ? ut.fromBase64String(t) : ut.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b_(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function E_(t) {
  const e = t.mapValue.fields.__previous_value__;
  return b_(e) ? E_(e) : e;
}
function io(t) {
  const e = _r(t.mapValue.fields.__local_write_time__.timestampValue);
  return new Xe(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Uk = class {
    constructor(e, n, r, i, s, o, a, l) {
      (this.databaseId = e),
        (this.appId = n),
        (this.persistenceKey = r),
        (this.host = i),
        (this.ssl = s),
        (this.forceLongPolling = o),
        (this.autoDetectLongPolling = a),
        (this.useFetchStreams = l);
    }
  },
  T_ = class $u {
    constructor(e, n) {
      (this.projectId = e), (this.database = n || "(default)");
    }
    static empty() {
      return new $u("", "");
    }
    get isDefaultDatabase() {
      return this.database === "(default)";
    }
    isEqual(e) {
      return (
        e instanceof $u &&
        e.projectId === this.projectId &&
        e.database === this.database
      );
    }
  };
function jl(t) {
  return t == null;
}
function Ka(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function Bk(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Ka(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ta = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function ti(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
    ? 1
    : "integerValue" in t || "doubleValue" in t
    ? 2
    : "timestampValue" in t
    ? 3
    : "stringValue" in t
    ? 5
    : "bytesValue" in t
    ? 6
    : "referenceValue" in t
    ? 7
    : "geoPointValue" in t
    ? 8
    : "arrayValue" in t
    ? 9
    : "mapValue" in t
    ? b_(t)
      ? 4
      : jk(t)
      ? 9007199254740991
      : 10
    : ue();
}
function fn(t, e) {
  if (t === e) return !0;
  const n = ti(t);
  if (n !== ti(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return io(t).isEqual(io(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = _r(r.timestampValue),
          o = _r(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (r, i) {
        return Wi(r.bytesValue).isEqual(Wi(i.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (r, i) {
        return (
          ze(r.geoPointValue.latitude) === ze(i.geoPointValue.latitude) &&
          ze(r.geoPointValue.longitude) === ze(i.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (r, i) {
        if ("integerValue" in r && "integerValue" in i)
          return ze(r.integerValue) === ze(i.integerValue);
        if ("doubleValue" in r && "doubleValue" in i) {
          const s = ze(r.doubleValue),
            o = ze(i.doubleValue);
          return s === o ? Ka(s) === Ka(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return zi(t.arrayValue.values || [], e.arrayValue.values || [], fn);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (Qp(s) !== Qp(o)) return !1;
        for (const a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !fn(s[a], o[a])))
            return !1;
        return !0;
      })(t, e);
    default:
      return ue();
  }
}
function so(t, e) {
  return (t.values || []).find((n) => fn(n, e)) !== void 0;
}
function Ki(t, e) {
  if (t === e) return 0;
  const n = ti(t),
    r = ti(e);
  if (n !== r) return qe(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return qe(t.booleanValue, e.booleanValue);
    case 2:
      return (function (i, s) {
        const o = ze(i.integerValue || i.doubleValue),
          a = ze(s.integerValue || s.doubleValue);
        return o < a
          ? -1
          : o > a
          ? 1
          : o === a
          ? 0
          : isNaN(o)
          ? isNaN(a)
            ? 0
            : -1
          : 1;
      })(t, e);
    case 3:
      return Xp(t.timestampValue, e.timestampValue);
    case 4:
      return Xp(io(t), io(e));
    case 5:
      return qe(t.stringValue, e.stringValue);
    case 6:
      return (function (i, s) {
        const o = Wi(i),
          a = Wi(s);
        return o.compareTo(a);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (i, s) {
        const o = i.split("/"),
          a = s.split("/");
        for (let l = 0; l < o.length && l < a.length; l++) {
          const c = qe(o[l], a[l]);
          if (c !== 0) return c;
        }
        return qe(o.length, a.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, s) {
        const o = qe(ze(i.latitude), ze(s.latitude));
        return o !== 0 ? o : qe(ze(i.longitude), ze(s.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (i, s) {
        const o = i.values || [],
          a = s.values || [];
        for (let l = 0; l < o.length && l < a.length; ++l) {
          const c = Ki(o[l], a[l]);
          if (c) return c;
        }
        return qe(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === ta.mapValue && s === ta.mapValue) return 0;
        if (i === ta.mapValue) return 1;
        if (s === ta.mapValue) return -1;
        const o = i.fields || {},
          a = Object.keys(o),
          l = s.fields || {},
          c = Object.keys(l);
        a.sort(), c.sort();
        for (let u = 0; u < a.length && u < c.length; ++u) {
          const d = qe(a[u], c[u]);
          if (d !== 0) return d;
          const h = Ki(o[a[u]], l[c[u]]);
          if (h !== 0) return h;
        }
        return qe(a.length, c.length);
      })(t.mapValue, e.mapValue);
    default:
      throw ue();
  }
}
function Xp(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return qe(t, e);
  const n = _r(t),
    r = _r(e),
    i = qe(n.seconds, r.seconds);
  return i !== 0 ? i : qe(n.nanos, r.nanos);
}
function qi(t) {
  return Vu(t);
}
function Vu(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
    ? "" + t.booleanValue
    : "integerValue" in t
    ? "" + t.integerValue
    : "doubleValue" in t
    ? "" + t.doubleValue
    : "timestampValue" in t
    ? (function (r) {
        const i = _r(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : "stringValue" in t
    ? t.stringValue
    : "bytesValue" in t
    ? Wi(t.bytesValue).toBase64()
    : "referenceValue" in t
    ? ((n = t.referenceValue), re.fromName(n).toString())
    : "geoPointValue" in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : "arrayValue" in t
    ? (function (r) {
        let i = "[",
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ","), (i += Vu(o));
        return i + "]";
      })(t.arrayValue)
    : "mapValue" in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = "{",
          o = !0;
        for (const a of i)
          o ? (o = !1) : (s += ","), (s += `${a}:${Vu(r.fields[a])}`);
        return s + "}";
      })(t.mapValue)
    : ue();
  var e, n;
}
function Jp(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${
      t.database
    }/documents/${e.path.canonicalString()}`,
  };
}
function Fu(t) {
  return !!t && "integerValue" in t;
}
function dh(t) {
  return !!t && "arrayValue" in t;
}
function Zp(t) {
  return !!t && "nullValue" in t;
}
function em(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function ga(t) {
  return !!t && "mapValue" in t;
}
function Rs(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return si(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = Rs(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Rs(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function jk(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pt {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new Pt({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !ga(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Rs(n);
  }
  setAll(e) {
    let n = mt.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n);
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = Rs(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    ga(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return fn(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (ga(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    si(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new Pt(Rs(this.value));
  }
}
function I_(t) {
  const e = [];
  return (
    si(t.fields, (n, r) => {
      const i = new mt([n]);
      if (ga(r)) {
        const s = I_(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new zt(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class st {
  constructor(e, n, r, i, s, o) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.data = s),
      (this.documentState = o);
  }
  static newInvalidDocument(e) {
    return new st(e, 0, pe.min(), pe.min(), Pt.empty(), 0);
  }
  static newFoundDocument(e, n, r) {
    return new st(e, 1, n, pe.min(), r, 0);
  }
  static newNoDocument(e, n) {
    return new st(e, 2, n, pe.min(), Pt.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new st(e, 3, n, pe.min(), Pt.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = Pt.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Pt.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = pe.min()), this;
  }
  setReadTime(e) {
    return (this.readTime = e), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof st &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new st(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {documentType: ${this.documentType}}), {documentState: ${
      this.documentState
    }})`;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hk {
  constructor(e, n = null, r = [], i = [], s = null, o = null, a = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = a),
      (this.ht = null);
  }
}
function tm(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new Hk(t, e, n, r, i, s, o);
}
function hh(t) {
  const e = he(t);
  if (e.ht === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters
        .map((r) => {
          return (
            (i = r).field.canonicalString() + i.op.toString() + qi(i.value)
          );
          var i;
        })
        .join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(",")),
      jl(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => qi(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => qi(r)).join(","))),
      (e.ht = n);
  }
  return e.ht;
}
function zk(t) {
  let e = t.path.canonicalString();
  return (
    t.collectionGroup !== null &&
      (e += " collectionGroup=" + t.collectionGroup),
    t.filters.length > 0 &&
      (e += `, filters: [${t.filters
        .map((n) => {
          return `${(r = n).field.canonicalString()} ${r.op} ${qi(r.value)}`;
          var r;
        })
        .join(", ")}]`),
    jl(t.limit) || (e += ", limit: " + t.limit),
    t.orderBy.length > 0 &&
      (e += `, orderBy: [${t.orderBy
        .map((n) =>
          (function (r) {
            return `${r.field.canonicalString()} (${r.dir})`;
          })(n)
        )
        .join(", ")}]`),
    t.startAt &&
      ((e += ", startAt: "),
      (e += t.startAt.inclusive ? "b:" : "a:"),
      (e += t.startAt.position.map((n) => qi(n)).join(","))),
    t.endAt &&
      ((e += ", endAt: "),
      (e += t.endAt.inclusive ? "a:" : "b:"),
      (e += t.endAt.position.map((n) => qi(n)).join(","))),
    `Target(${e})`
  );
}
function fh(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let i = 0; i < t.orderBy.length; i++)
    if (!Zk(t.orderBy[i], e.orderBy[i])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let i = 0; i < t.filters.length; i++)
    if (
      ((n = t.filters[i]),
      (r = e.filters[i]),
      n.op !== r.op || !n.field.isEqual(r.field) || !fn(n.value, r.value))
    )
      return !1;
  var n, r;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!rm(t.startAt, e.startAt) &&
    rm(t.endAt, e.endAt)
  );
}
function Uu(t) {
  return (
    re.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
class Ct extends class {} {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.lt(e, n, r)
        : new Wk(e, n, r)
      : n === "array-contains"
      ? new Qk(e, r)
      : n === "in"
      ? new Yk(e, r)
      : n === "not-in"
      ? new Xk(e, r)
      : n === "array-contains-any"
      ? new Jk(e, r)
      : new Ct(e, n, r);
  }
  static lt(e, n, r) {
    return n === "in" ? new Kk(e, r) : new Gk(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.ft(Ki(n, this.value))
      : n !== null && ti(this.value) === ti(n) && this.ft(Ki(n, this.value));
  }
  ft(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return ue();
    }
  }
  dt() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
}
class Wk extends Ct {
  constructor(e, n, r) {
    super(e, n, r), (this.key = re.fromName(r.referenceValue));
  }
  matches(e) {
    const n = re.comparator(e.key, this.key);
    return this.ft(n);
  }
}
class Kk extends Ct {
  constructor(e, n) {
    super(e, "in", n), (this.keys = A_("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class Gk extends Ct {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = A_("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function A_(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => re.fromName(r.referenceValue));
}
class Qk extends Ct {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return dh(n) && so(n.arrayValue, this.value);
  }
}
class Yk extends Ct {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && so(this.value.arrayValue, n);
  }
}
class Xk extends Ct {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (so(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !so(this.value.arrayValue, n);
  }
}
class Jk extends Ct {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!dh(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => so(this.value.arrayValue, r))
    );
  }
}
class Ga {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
let Ps = class {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
};
function Zk(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
function nm(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = re.comparator(re.fromName(o.referenceValue), n.key))
        : (r = Ki(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function rm(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!fn(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ro {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    a = null,
    l = null
  ) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = l),
      (this._t = null),
      (this.wt = null),
      this.startAt,
      this.endAt;
  }
}
function eS(t, e, n, r, i, s, o, a) {
  return new Ro(t, e, n, r, i, s, o, a);
}
function Hl(t) {
  return new Ro(t);
}
function im(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function C_(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function k_(t) {
  for (const e of t.filters) if (e.dt()) return e.field;
  return null;
}
function S_(t) {
  return t.collectionGroup !== null;
}
function oo(t) {
  const e = he(t);
  if (e._t === null) {
    e._t = [];
    const n = k_(e),
      r = C_(e);
    if (n !== null && r === null)
      n.isKeyField() || e._t.push(new Ps(n)),
        e._t.push(new Ps(mt.keyField(), "asc"));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy)
        e._t.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : "asc";
        e._t.push(new Ps(mt.keyField(), s));
      }
    }
  }
  return e._t;
}
function Rn(t) {
  const e = he(t);
  if (!e.wt)
    if (e.limitType === "F")
      e.wt = tm(
        e.path,
        e.collectionGroup,
        oo(e),
        e.filters,
        e.limit,
        e.startAt,
        e.endAt
      );
    else {
      const n = [];
      for (const s of oo(e)) {
        const o = s.dir === "desc" ? "asc" : "desc";
        n.push(new Ps(s.field, o));
      }
      const r = e.endAt ? new Ga(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new Ga(e.startAt.position, e.startAt.inclusive) : null;
      e.wt = tm(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e.wt;
}
function Bu(t, e, n) {
  return new Ro(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  );
}
function zl(t, e) {
  return fh(Rn(t), Rn(e)) && t.limitType === e.limitType;
}
function q_(t) {
  return `${hh(Rn(t))}|lt:${t.limitType}`;
}
function ju(t) {
  return `Query(target=${zk(Rn(t))}; limitType=${t.limitType})`;
}
function ph(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, r) {
      const i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : re.isDocumentKey(n.path)
        ? n.path.isEqual(i)
        : n.path.isImmediateParentOf(i);
    })(t, e) &&
    (function (n, r) {
      for (const i of n.explicitOrderBy)
        if (!i.field.isKeyField() && r.data.field(i.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      for (const i of n.filters) if (!i.matches(r)) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      return !(
        (n.startAt &&
          !(function (i, s, o) {
            const a = nm(i, s, o);
            return i.inclusive ? a <= 0 : a < 0;
          })(n.startAt, oo(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const a = nm(i, s, o);
            return i.inclusive ? a >= 0 : a > 0;
          })(n.endAt, oo(n), r))
      );
    })(t, e)
  );
}
function tS(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function x_(t) {
  return (e, n) => {
    let r = !1;
    for (const i of oo(t)) {
      const s = nS(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function nS(t, e, n) {
  const r = t.field.isKeyField()
    ? re.comparator(e.key, n.key)
    : (function (i, s, o) {
        const a = s.data.field(i),
          l = o.data.field(i);
        return a !== null && l !== null ? Ki(a, l) : ue();
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return ue();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function R_(t, e) {
  if (t.gt) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Ka(e) ? "-0" : e };
}
function P_(t) {
  return { integerValue: "" + t };
}
function O_(t, e) {
  return Bk(e) ? P_(e) : R_(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wl {
  constructor() {
    this._ = void 0;
  }
}
function rS(t, e, n) {
  return t instanceof ao
    ? (function (r, i) {
        const s = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: r.seconds, nanos: r.nanoseconds },
            },
          },
        };
        return i && (s.fields.__previous_value__ = i), { mapValue: s };
      })(n, e)
    : t instanceof Gi
    ? N_(t, e)
    : t instanceof Qi
    ? L_(t, e)
    : (function (r, i) {
        const s = D_(r, i),
          o = sm(s) + sm(r.yt);
        return Fu(s) && Fu(r.yt) ? P_(o) : R_(r.It, o);
      })(t, e);
}
function iS(t, e, n) {
  return t instanceof Gi ? N_(t, e) : t instanceof Qi ? L_(t, e) : n;
}
function D_(t, e) {
  return t instanceof lo
    ? Fu((n = e)) ||
      (function (r) {
        return !!r && "doubleValue" in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class ao extends Wl {}
class Gi extends Wl {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function N_(t, e) {
  const n = M_(e);
  for (const r of t.elements) n.some((i) => fn(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class Qi extends Wl {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function L_(t, e) {
  let n = M_(e);
  for (const r of t.elements) n = n.filter((i) => !fn(i, r));
  return { arrayValue: { values: n } };
}
class lo extends Wl {
  constructor(e, n) {
    super(), (this.It = e), (this.yt = n);
  }
}
function sm(t) {
  return ze(t.integerValue || t.doubleValue);
}
function M_(t) {
  return dh(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kl {
  constructor(e, n) {
    (this.field = e), (this.transform = n);
  }
}
function sS(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof Gi && r instanceof Gi) ||
        (n instanceof Qi && r instanceof Qi)
        ? zi(n.elements, r.elements, fn)
        : n instanceof lo && r instanceof lo
        ? fn(n.yt, r.yt)
        : n instanceof ao && r instanceof ao;
    })(t.transform, e.transform)
  );
}
class oS {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class Wt {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Wt();
  }
  static exists(e) {
    return new Wt(void 0, e);
  }
  static updateTime(e) {
    return new Wt(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function va(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Gl {}
function $_(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new mh(t.key, Wt.none())
      : new Po(t.key, t.data, Wt.none());
  {
    const n = t.data,
      r = Pt.empty();
    let i = new Je(mt.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new Tr(t.key, r, new zt(i.toArray()), Wt.none());
  }
}
function aS(t, e, n) {
  t instanceof Po
    ? (function (r, i, s) {
        const o = r.value.clone(),
          a = am(r.fieldTransforms, i, s.transformResults);
        o.setAll(a),
          i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof Tr
    ? (function (r, i, s) {
        if (!va(r.precondition, i))
          return void i.convertToUnknownDocument(s.version);
        const o = am(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(V_(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function Os(t, e, n, r) {
  return t instanceof Po
    ? (function (i, s, o, a) {
        if (!va(i.precondition, s)) return o;
        const l = i.value.clone(),
          c = lm(i.fieldTransforms, a, s);
        return (
          l.setAll(c),
          s.convertToFoundDocument(s.version, l).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof Tr
    ? (function (i, s, o, a) {
        if (!va(i.precondition, s)) return o;
        const l = lm(i.fieldTransforms, a, s),
          c = s.data;
        return (
          c.setAll(V_(i)),
          c.setAll(l),
          s.convertToFoundDocument(s.version, c).setHasLocalMutations(),
          o === null
            ? null
            : o
                .unionWith(i.fieldMask.fields)
                .unionWith(i.fieldTransforms.map((u) => u.field))
        );
      })(t, e, n, r)
    : (function (i, s, o) {
        return va(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function lS(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = D_(r.transform, i || null);
    s != null && (n === null && (n = Pt.empty()), n.set(r.field, s));
  }
  return n || null;
}
function om(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (
        (n === void 0 && r === void 0) ||
        (!(!n || !r) && zi(n, r, (i, s) => sS(i, s)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class Po extends Gl {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class Tr extends Gl {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function V_(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function am(t, e, n) {
  const r = new Map();
  Le(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, iS(o, a, n[i]));
  }
  return r;
}
function lm(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, rS(s, o, e));
  }
  return r;
}
class mh extends Gl {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class cS extends Gl {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uS {
  constructor(e) {
    this.count = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var He, we;
function dS(t) {
  switch (t) {
    default:
      return ue();
    case q.CANCELLED:
    case q.UNKNOWN:
    case q.DEADLINE_EXCEEDED:
    case q.RESOURCE_EXHAUSTED:
    case q.INTERNAL:
    case q.UNAVAILABLE:
    case q.UNAUTHENTICATED:
      return !1;
    case q.INVALID_ARGUMENT:
    case q.NOT_FOUND:
    case q.ALREADY_EXISTS:
    case q.PERMISSION_DENIED:
    case q.FAILED_PRECONDITION:
    case q.ABORTED:
    case q.OUT_OF_RANGE:
    case q.UNIMPLEMENTED:
    case q.DATA_LOSS:
      return !0;
  }
}
function F_(t) {
  if (t === void 0) return xn("GRPC error has no .code"), q.UNKNOWN;
  switch (t) {
    case He.OK:
      return q.OK;
    case He.CANCELLED:
      return q.CANCELLED;
    case He.UNKNOWN:
      return q.UNKNOWN;
    case He.DEADLINE_EXCEEDED:
      return q.DEADLINE_EXCEEDED;
    case He.RESOURCE_EXHAUSTED:
      return q.RESOURCE_EXHAUSTED;
    case He.INTERNAL:
      return q.INTERNAL;
    case He.UNAVAILABLE:
      return q.UNAVAILABLE;
    case He.UNAUTHENTICATED:
      return q.UNAUTHENTICATED;
    case He.INVALID_ARGUMENT:
      return q.INVALID_ARGUMENT;
    case He.NOT_FOUND:
      return q.NOT_FOUND;
    case He.ALREADY_EXISTS:
      return q.ALREADY_EXISTS;
    case He.PERMISSION_DENIED:
      return q.PERMISSION_DENIED;
    case He.FAILED_PRECONDITION:
      return q.FAILED_PRECONDITION;
    case He.ABORTED:
      return q.ABORTED;
    case He.OUT_OF_RANGE:
      return q.OUT_OF_RANGE;
    case He.UNIMPLEMENTED:
      return q.UNIMPLEMENTED;
    case He.DATA_LOSS:
      return q.DATA_LOSS;
    default:
      return ue();
  }
}
((we = He || (He = {}))[(we.OK = 0)] = "OK"),
  (we[(we.CANCELLED = 1)] = "CANCELLED"),
  (we[(we.UNKNOWN = 2)] = "UNKNOWN"),
  (we[(we.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (we[(we.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (we[(we.NOT_FOUND = 5)] = "NOT_FOUND"),
  (we[(we.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (we[(we.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (we[(we.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (we[(we.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (we[(we.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (we[(we.ABORTED = 10)] = "ABORTED"),
  (we[(we.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (we[(we.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (we[(we.INTERNAL = 13)] = "INTERNAL"),
  (we[(we.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (we[(we.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cs {
  constructor(e, n) {
    (this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n]);
    i.push([e, n]), this.innerSize++;
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    si(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return w_(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hS = new Ze(re.comparator);
function Pn() {
  return hS;
}
const U_ = new Ze(re.comparator);
function Es(...t) {
  let e = U_;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function B_(t) {
  let e = U_;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function Br() {
  return Ds();
}
function j_() {
  return Ds();
}
function Ds() {
  return new cs(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const fS = new Ze(re.comparator),
  pS = new Je(re.comparator);
function ve(...t) {
  let e = pS;
  for (const n of t) e = e.add(n);
  return e;
}
const mS = new Je(qe);
function H_() {
  return mS;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ql {
  constructor(e, n, r, i, s) {
    (this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s);
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n) {
    const r = new Map();
    return (
      r.set(e, Oo.createSynthesizedTargetChangeForCurrentChange(e, n)),
      new Ql(pe.min(), r, H_(), Pn(), ve())
    );
  }
}
class Oo {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n) {
    return new Oo(ut.EMPTY_BYTE_STRING, n, ve(), ve(), ve());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ya {
  constructor(e, n, r, i) {
    (this.Tt = e), (this.removedTargetIds = n), (this.key = r), (this.Et = i);
  }
}
class z_ {
  constructor(e, n) {
    (this.targetId = e), (this.At = n);
  }
}
class W_ {
  constructor(e, n, r = ut.EMPTY_BYTE_STRING, i = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i);
  }
}
class cm {
  constructor() {
    (this.Rt = 0),
      (this.bt = dm()),
      (this.Pt = ut.EMPTY_BYTE_STRING),
      (this.vt = !1),
      (this.Vt = !0);
  }
  get current() {
    return this.vt;
  }
  get resumeToken() {
    return this.Pt;
  }
  get St() {
    return this.Rt !== 0;
  }
  get Dt() {
    return this.Vt;
  }
  Ct(e) {
    e.approximateByteSize() > 0 && ((this.Vt = !0), (this.Pt = e));
  }
  xt() {
    let e = ve(),
      n = ve(),
      r = ve();
    return (
      this.bt.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i);
            break;
          case 2:
            n = n.add(i);
            break;
          case 1:
            r = r.add(i);
            break;
          default:
            ue();
        }
      }),
      new Oo(this.Pt, this.vt, e, n, r)
    );
  }
  Nt() {
    (this.Vt = !1), (this.bt = dm());
  }
  kt(e, n) {
    (this.Vt = !0), (this.bt = this.bt.insert(e, n));
  }
  Mt(e) {
    (this.Vt = !0), (this.bt = this.bt.remove(e));
  }
  Ot() {
    this.Rt += 1;
  }
  Ft() {
    this.Rt -= 1;
  }
  $t() {
    (this.Vt = !0), (this.vt = !0);
  }
}
class gS {
  constructor(e) {
    (this.Bt = e),
      (this.Lt = new Map()),
      (this.Ut = Pn()),
      (this.qt = um()),
      (this.Kt = new Je(qe));
  }
  Gt(e) {
    for (const n of e.Tt)
      e.Et && e.Et.isFoundDocument()
        ? this.Qt(n, e.Et)
        : this.jt(n, e.key, e.Et);
    for (const n of e.removedTargetIds) this.jt(n, e.key, e.Et);
  }
  Wt(e) {
    this.forEachTarget(e, (n) => {
      const r = this.zt(n);
      switch (e.state) {
        case 0:
          this.Ht(n) && r.Ct(e.resumeToken);
          break;
        case 1:
          r.Ft(), r.St || r.Nt(), r.Ct(e.resumeToken);
          break;
        case 2:
          r.Ft(), r.St || this.removeTarget(n);
          break;
        case 3:
          this.Ht(n) && (r.$t(), r.Ct(e.resumeToken));
          break;
        case 4:
          this.Ht(n) && (this.Jt(n), r.Ct(e.resumeToken));
          break;
        default:
          ue();
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.Lt.forEach((r, i) => {
          this.Ht(i) && n(i);
        });
  }
  Yt(e) {
    const n = e.targetId,
      r = e.At.count,
      i = this.Xt(n);
    if (i) {
      const s = i.target;
      if (Uu(s))
        if (r === 0) {
          const o = new re(s.path);
          this.jt(n, o, st.newNoDocument(o, pe.min()));
        } else Le(r === 1);
      else this.Zt(n) !== r && (this.Jt(n), (this.Kt = this.Kt.add(n)));
    }
  }
  te(e) {
    const n = new Map();
    this.Lt.forEach((s, o) => {
      const a = this.Xt(o);
      if (a) {
        if (s.current && Uu(a.target)) {
          const l = new re(a.target.path);
          this.Ut.get(l) !== null ||
            this.ee(o, l) ||
            this.jt(o, l, st.newNoDocument(l, e));
        }
        s.Dt && (n.set(o, s.xt()), s.Nt());
      }
    });
    let r = ve();
    this.qt.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((l) => {
        const c = this.Xt(l);
        return !c || c.purpose === 2 || ((a = !1), !1);
      }),
        a && (r = r.add(s));
    }),
      this.Ut.forEach((s, o) => o.setReadTime(e));
    const i = new Ql(e, n, this.Kt, this.Ut, r);
    return (this.Ut = Pn()), (this.qt = um()), (this.Kt = new Je(qe)), i;
  }
  Qt(e, n) {
    if (!this.Ht(e)) return;
    const r = this.ee(e, n.key) ? 2 : 0;
    this.zt(e).kt(n.key, r),
      (this.Ut = this.Ut.insert(n.key, n)),
      (this.qt = this.qt.insert(n.key, this.ne(n.key).add(e)));
  }
  jt(e, n, r) {
    if (!this.Ht(e)) return;
    const i = this.zt(e);
    this.ee(e, n) ? i.kt(n, 1) : i.Mt(n),
      (this.qt = this.qt.insert(n, this.ne(n).delete(e))),
      r && (this.Ut = this.Ut.insert(n, r));
  }
  removeTarget(e) {
    this.Lt.delete(e);
  }
  Zt(e) {
    const n = this.zt(e).xt();
    return (
      this.Bt.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  Ot(e) {
    this.zt(e).Ot();
  }
  zt(e) {
    let n = this.Lt.get(e);
    return n || ((n = new cm()), this.Lt.set(e, n)), n;
  }
  ne(e) {
    let n = this.qt.get(e);
    return n || ((n = new Je(qe)), (this.qt = this.qt.insert(e, n))), n;
  }
  Ht(e) {
    const n = this.Xt(e) !== null;
    return n || Z("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  Xt(e) {
    const n = this.Lt.get(e);
    return n && n.St ? null : this.Bt.se(e);
  }
  Jt(e) {
    this.Lt.set(e, new cm()),
      this.Bt.getRemoteKeysForTarget(e).forEach((n) => {
        this.jt(e, n, null);
      });
  }
  ee(e, n) {
    return this.Bt.getRemoteKeysForTarget(e).has(n);
  }
}
function um() {
  return new Ze(re.comparator);
}
function dm() {
  return new Ze(re.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vS = { asc: "ASCENDING", desc: "DESCENDING" },
  yS = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  };
class _S {
  constructor(e, n) {
    (this.databaseId = e), (this.gt = n);
  }
}
function Qa(t, e) {
  return t.gt
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function K_(t, e) {
  return t.gt ? e.toBase64() : e.toUint8Array();
}
function wS(t, e) {
  return Qa(t, e.toTimestamp());
}
function In(t) {
  return (
    Le(!!t),
    pe.fromTimestamp(
      (function (e) {
        const n = _r(e);
        return new Xe(n.seconds, n.nanos);
      })(t)
    )
  );
}
function gh(t, e) {
  return (function (n) {
    return new $e(["projects", n.projectId, "databases", n.database]);
  })(t)
    .child("documents")
    .child(e)
    .canonicalString();
}
function G_(t) {
  const e = $e.fromString(t);
  return Le(X_(e)), e;
}
function Hu(t, e) {
  return gh(t.databaseId, e.path);
}
function Gc(t, e) {
  const n = G_(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new G(
      q.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new G(
      q.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database
    );
  return new re(Q_(n));
}
function zu(t, e) {
  return gh(t.databaseId, e);
}
function bS(t) {
  const e = G_(t);
  return e.length === 4 ? $e.emptyPath() : Q_(e);
}
function Wu(t) {
  return new $e([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function Q_(t) {
  return Le(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function hm(t, e, n) {
  return { name: Hu(t, e), fields: n.value.mapValue.fields };
}
function ES(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = (function (l) {
        return l === "NO_CHANGE"
          ? 0
          : l === "ADD"
          ? 1
          : l === "REMOVE"
          ? 2
          : l === "CURRENT"
          ? 3
          : l === "RESET"
          ? 4
          : ue();
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      s = (function (l, c) {
        return l.gt
          ? (Le(c === void 0 || typeof c == "string"),
            ut.fromBase64String(c || ""))
          : (Le(c === void 0 || c instanceof Uint8Array),
            ut.fromUint8Array(c || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (l) {
          const c = l.code === void 0 ? q.UNKNOWN : F_(l.code);
          return new G(c, l.message || "");
        })(o);
    n = new W_(r, i, s, a || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Gc(t, r.document.name),
      s = In(r.document.updateTime),
      o = new Pt({ mapValue: { fields: r.document.fields } }),
      a = st.newFoundDocument(i, s, o),
      l = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new ya(l, c, a.key, a);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Gc(t, r.document),
      s = r.readTime ? In(r.readTime) : pe.min(),
      o = st.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new ya([], a, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Gc(t, r.document),
      s = r.removedTargetIds || [];
    n = new ya([], s, i, null);
  } else {
    if (!("filter" in e)) return ue();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const i = r.count || 0,
        s = new uS(i),
        o = r.targetId;
      n = new z_(o, s);
    }
  }
  return n;
}
function TS(t, e) {
  let n;
  if (e instanceof Po) n = { update: hm(t, e.key, e.value) };
  else if (e instanceof mh) n = { delete: Hu(t, e.key) };
  else if (e instanceof Tr)
    n = { update: hm(t, e.key, e.data), updateMask: OS(e.fieldMask) };
  else {
    if (!(e instanceof cS)) return ue();
    n = { verify: Hu(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (i, s) {
          const o = s.transform;
          if (o instanceof ao)
            return {
              fieldPath: s.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (o instanceof Gi)
            return {
              fieldPath: s.field.canonicalString(),
              appendMissingElements: { values: o.elements },
            };
          if (o instanceof Qi)
            return {
              fieldPath: s.field.canonicalString(),
              removeAllFromArray: { values: o.elements },
            };
          if (o instanceof lo)
            return { fieldPath: s.field.canonicalString(), increment: o.yt };
          throw ue();
        })(0, r)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (r, i) {
        return i.updateTime !== void 0
          ? { updateTime: wS(r, i.updateTime) }
          : i.exists !== void 0
          ? { exists: i.exists }
          : ue();
      })(t, e.precondition)),
    n
  );
}
function IS(t, e) {
  return t && t.length > 0
    ? (Le(e !== void 0),
      t.map((n) =>
        (function (r, i) {
          let s = r.updateTime ? In(r.updateTime) : In(i);
          return (
            s.isEqual(pe.min()) && (s = In(i)),
            new oS(s, r.transformResults || [])
          );
        })(n, e)
      ))
    : [];
}
function AS(t, e) {
  return { documents: [zu(t, e.path)] };
}
function CS(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = zu(t, r)),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = zu(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (l) {
    if (l.length === 0) return;
    const c = l.map((u) =>
      (function (d) {
        if (d.op === "==") {
          if (em(d.value))
            return { unaryFilter: { field: mi(d.field), op: "IS_NAN" } };
          if (Zp(d.value))
            return { unaryFilter: { field: mi(d.field), op: "IS_NULL" } };
        } else if (d.op === "!=") {
          if (em(d.value))
            return { unaryFilter: { field: mi(d.field), op: "IS_NOT_NAN" } };
          if (Zp(d.value))
            return { unaryFilter: { field: mi(d.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: mi(d.field), op: xS(d.op), value: d.value },
        };
      })(u)
    );
    return c.length === 1
      ? c[0]
      : { compositeFilter: { op: "AND", filters: c } };
  })(e.filters);
  i && (n.structuredQuery.where = i);
  const s = (function (l) {
    if (l.length !== 0)
      return l.map((c) =>
        (function (u) {
          return { field: mi(u.field), direction: qS(u.dir) };
        })(c)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = (function (l, c) {
    return l.gt || jl(c) ? c : { value: c };
  })(t, e.limit);
  var a;
  return (
    o !== null && (n.structuredQuery.limit = o),
    e.startAt &&
      (n.structuredQuery.startAt = {
        before: (a = e.startAt).inclusive,
        values: a.position,
      }),
    e.endAt &&
      (n.structuredQuery.endAt = (function (l) {
        return { before: !l.inclusive, values: l.position };
      })(e.endAt)),
    n
  );
}
function kS(t) {
  let e = bS(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    Le(r === 1);
    const u = n.from[0];
    u.allDescendants ? (i = u.collectionId) : (e = e.child(u.collectionId));
  }
  let s = [];
  n.where && (s = Y_(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((u) =>
      (function (d) {
        return new Ps(
          wi(d.field),
          (function (h) {
            switch (h) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          })(d.direction)
        );
      })(u)
    ));
  let a = null;
  n.limit &&
    (a = (function (u) {
      let d;
      return (d = typeof u == "object" ? u.value : u), jl(d) ? null : d;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (u) {
      const d = !!u.before,
        h = u.values || [];
      return new Ga(h, d);
    })(n.startAt));
  let c = null;
  return (
    n.endAt &&
      (c = (function (u) {
        const d = !u.before,
          h = u.values || [];
        return new Ga(h, d);
      })(n.endAt)),
    eS(e, i, o, s, a, "F", l, c)
  );
}
function SS(t, e) {
  const n = (function (r, i) {
    switch (i) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return ue();
    }
  })(0, e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function Y_(t) {
  return t
    ? t.unaryFilter !== void 0
      ? [PS(t)]
      : t.fieldFilter !== void 0
      ? [RS(t)]
      : t.compositeFilter !== void 0
      ? t.compositeFilter.filters
          .map((e) => Y_(e))
          .reduce((e, n) => e.concat(n))
      : ue()
    : [];
}
function qS(t) {
  return vS[t];
}
function xS(t) {
  return yS[t];
}
function mi(t) {
  return { fieldPath: t.canonicalString() };
}
function wi(t) {
  return mt.fromServerFormat(t.fieldPath);
}
function RS(t) {
  return Ct.create(
    wi(t.fieldFilter.field),
    (function (e) {
      switch (e) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return ue();
      }
    })(t.fieldFilter.op),
    t.fieldFilter.value
  );
}
function PS(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      const e = wi(t.unaryFilter.field);
      return Ct.create(e, "==", { doubleValue: NaN });
    case "IS_NULL":
      const n = wi(t.unaryFilter.field);
      return Ct.create(n, "==", { nullValue: "NULL_VALUE" });
    case "IS_NOT_NAN":
      const r = wi(t.unaryFilter.field);
      return Ct.create(r, "!=", { doubleValue: NaN });
    case "IS_NOT_NULL":
      const i = wi(t.unaryFilter.field);
      return Ct.create(i, "!=", { nullValue: "NULL_VALUE" });
    default:
      return ue();
  }
}
function OS(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function X_(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class DS {
  constructor(e, n, r, i) {
    (this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && aS(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Os(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = Os(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = j_();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = $_(o, a);
        l !== null && r.set(i.key, l),
          o.isValidDocument() || o.convertToNoDocument(pe.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), ve());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      zi(this.mutations, e.mutations, (n, r) => om(n, r)) &&
      zi(this.baseMutations, e.baseMutations, (n, r) => om(n, r))
    );
  }
}
class vh {
  constructor(e, n, r, i) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(e, n, r) {
    Le(e.mutations.length === r.length);
    let i = fS;
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new vh(e, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NS {
  constructor(e, n) {
    (this.largestBatchId = e), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kr {
  constructor(
    e,
    n,
    r,
    i,
    s = pe.min(),
    o = pe.min(),
    a = ut.EMPTY_BYTE_STRING
  ) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a);
  }
  withSequenceNumber(e) {
    return new Kr(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken
    );
  }
  withResumeToken(e, n) {
    return new Kr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new Kr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LS {
  constructor(e) {
    this.re = e;
  }
}
function MS(t) {
  const e = kS({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? Bu(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $S {
  constructor() {
    this.Ye = new VS();
  }
  addToCollectionParentIndex(e, n) {
    return this.Ye.add(n), N.resolve();
  }
  getCollectionParents(e, n) {
    return N.resolve(this.Ye.getEntries(n));
  }
  addFieldIndex(e, n) {
    return N.resolve();
  }
  deleteFieldIndex(e, n) {
    return N.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return N.resolve(null);
  }
  getIndexType(e, n) {
    return N.resolve(0);
  }
  getFieldIndexes(e, n) {
    return N.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return N.resolve(null);
  }
  getMinOffset(e, n) {
    return N.resolve(yr.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return N.resolve(yr.min());
  }
  updateCollectionGroup(e, n, r) {
    return N.resolve();
  }
  updateIndexEntries(e, n) {
    return N.resolve();
  }
}
class VS {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new Je($e.comparator),
      s = !i.has(r);
    return (this.index[n] = i.add(r)), s;
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new Je($e.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yi {
  constructor(e) {
    this.bn = e;
  }
  next() {
    return (this.bn += 2), this.bn;
  }
  static Pn() {
    return new Yi(0);
  }
  static vn() {
    return new Yi(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FS {
  constructor() {
    (this.changes = new cs(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, st.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? N.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class US {
  constructor(e, n) {
    (this.overlayedDocument = e), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BS {
  constructor(e, n, r, i) {
    (this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i);
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.getBaseDocument(e, n, r)))
      .next((i) => (r !== null && Os(r.mutation, i, zt.empty(), Xe.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, ve()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = ve()) {
    const i = Br();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = Es();
        return (
          s.forEach((a, l) => {
            o = o.insert(a, l.overlayedDocument);
          }),
          o
        );
      })
    );
  }
  getOverlayedDocuments(e, n) {
    const r = Br();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, ve())
    );
  }
  populateOverlays(e, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, a) => {
          n.set(o, a);
        });
      })
    );
  }
  computeViews(e, n, r, i) {
    let s = Pn();
    const o = Ds(),
      a = Ds();
    return (
      n.forEach((l, c) => {
        const u = r.get(c.key);
        i.has(c.key) && (u === void 0 || u.mutation instanceof Tr)
          ? (s = s.insert(c.key, c))
          : u !== void 0 &&
            (o.set(c.key, u.mutation.getFieldMask()),
            Os(u.mutation, c, u.mutation.getFieldMask(), Xe.now()));
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((c, u) => o.set(c, u)),
          n.forEach((c, u) => {
            var d;
            return a.set(
              c,
              new US(u, (d = o.get(c)) !== null && d !== void 0 ? d : null)
            );
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Ds();
    let i = new Ze((o, a) => o - a),
      s = ve();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const c = n.get(l);
            if (c === null) return;
            let u = r.get(l) || zt.empty();
            (u = a.applyToLocalView(c, u)), r.set(l, u);
            const d = (i.get(a.batchId) || ve()).add(l);
            i = i.insert(a.batchId, d);
          });
      })
      .next(() => {
        const o = [],
          a = i.getReverseIterator();
        for (; a.hasNext(); ) {
          const l = a.getNext(),
            c = l.key,
            u = l.value,
            d = j_();
          u.forEach((h) => {
            if (!s.has(h)) {
              const f = $_(n.get(h), r.get(h));
              f !== null && d.set(h, f), (s = s.add(h));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, c, d));
        }
        return N.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r) {
    return (function (i) {
      return (
        re.isDocumentKey(i.path) &&
        i.collectionGroup === null &&
        i.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : S_(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r)
      : this.getDocumentsMatchingCollectionQuery(e, n, r);
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size
              )
            : N.resolve(Br());
        let a = -1,
          l = s;
        return o.next((c) =>
          N.forEach(
            c,
            (u, d) => (
              a < d.largestBatchId && (a = d.largestBatchId),
              s.get(u)
                ? N.resolve()
                : this.getBaseDocument(e, u, d).next((h) => {
                    l = l.insert(u, h);
                  })
            )
          )
            .next(() => this.populateOverlays(e, c, s))
            .next(() => this.computeViews(e, l, c, ve()))
            .next((u) => ({ batchId: a, changes: B_(u) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new re(n)).next((r) => {
      let i = Es();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = Es();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      N.forEach(o, (a) => {
        const l = (function (c, u) {
          return new Ro(
            u,
            null,
            c.explicitOrderBy.slice(),
            c.filters.slice(),
            c.limit,
            c.limitType,
            c.startAt,
            c.endAt
          );
        })(n, a.child(i));
        return this.getDocumentsMatchingCollectionQuery(e, l, r).next((c) => {
          c.forEach((u, d) => {
            s = s.insert(u, d);
          });
        });
      }).next(() => s)
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r) {
    let i;
    return this.remoteDocumentCache
      .getAllFromCollection(e, n.path, r)
      .next(
        (s) => (
          (i = s),
          this.documentOverlayCache.getOverlaysForCollection(
            e,
            n.path,
            r.largestBatchId
          )
        )
      )
      .next((s) => {
        s.forEach((a, l) => {
          const c = l.getKey();
          i.get(c) === null && (i = i.insert(c, st.newInvalidDocument(c)));
        });
        let o = Es();
        return (
          i.forEach((a, l) => {
            const c = s.get(a);
            c !== void 0 && Os(c.mutation, l, zt.empty(), Xe.now()),
              ph(n, l) && (o = o.insert(a, l));
          }),
          o
        );
      });
  }
  getBaseDocument(e, n, r) {
    return r === null || r.mutation.type === 1
      ? this.remoteDocumentCache.getEntry(e, n)
      : N.resolve(st.newInvalidDocument(n));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jS {
  constructor(e) {
    (this.It = e), (this.Zn = new Map()), (this.ts = new Map());
  }
  getBundleMetadata(e, n) {
    return N.resolve(this.Zn.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.Zn.set(n.id, {
        id: (r = n).id,
        version: r.version,
        createTime: In(r.createTime),
      }),
      N.resolve()
    );
  }
  getNamedQuery(e, n) {
    return N.resolve(this.ts.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.ts.set(
        n.name,
        (function (r) {
          return {
            name: r.name,
            query: MS(r.bundledQuery),
            readTime: In(r.readTime),
          };
        })(n)
      ),
      N.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HS {
  constructor() {
    (this.overlays = new Ze(re.comparator)), (this.es = new Map());
  }
  getOverlay(e, n) {
    return N.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = Br();
    return N.forEach(n, (i) =>
      this.getOverlay(e, i).next((s) => {
        s !== null && r.set(i, s);
      })
    ).next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.ue(e, n, s);
      }),
      N.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.es.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.es.delete(r)),
      N.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = Br(),
      s = n.length + 1,
      o = new re(n.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        c = l.getKey();
      if (!n.isPrefixOf(c.path)) break;
      c.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return N.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new Ze((c, u) => c - u);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const c = o.getNext().value;
      if (c.getKey().getCollectionGroup() === n && c.largestBatchId > r) {
        let u = s.get(c.largestBatchId);
        u === null && ((u = Br()), (s = s.insert(c.largestBatchId, u))),
          u.set(c.getKey(), c);
      }
    }
    const a = Br(),
      l = s.getIterator();
    for (
      ;
      l.hasNext() &&
      (l.getNext().value.forEach((c, u) => a.set(c, u)), !(a.size() >= i));

    );
    return N.resolve(a);
  }
  ue(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.es.get(i.largestBatchId).delete(r.key);
      this.es.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new NS(n, r));
    let s = this.es.get(n);
    s === void 0 && ((s = ve()), this.es.set(n, s)),
      this.es.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yh {
  constructor() {
    (this.ns = new Je(et.ss)), (this.rs = new Je(et.os));
  }
  isEmpty() {
    return this.ns.isEmpty();
  }
  addReference(e, n) {
    const r = new et(e, n);
    (this.ns = this.ns.add(r)), (this.rs = this.rs.add(r));
  }
  us(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.cs(new et(e, n));
  }
  hs(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  ls(e) {
    const n = new re(new $e([])),
      r = new et(n, e),
      i = new et(n, e + 1),
      s = [];
    return (
      this.rs.forEachInRange([r, i], (o) => {
        this.cs(o), s.push(o.key);
      }),
      s
    );
  }
  fs() {
    this.ns.forEach((e) => this.cs(e));
  }
  cs(e) {
    (this.ns = this.ns.delete(e)), (this.rs = this.rs.delete(e));
  }
  ds(e) {
    const n = new re(new $e([])),
      r = new et(n, e),
      i = new et(n, e + 1);
    let s = ve();
    return (
      this.rs.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new et(e, 0),
      r = this.ns.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class et {
  constructor(e, n) {
    (this.key = e), (this._s = n);
  }
  static ss(e, n) {
    return re.comparator(e.key, n.key) || qe(e._s, n._s);
  }
  static os(e, n) {
    return qe(e._s, n._s) || re.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zS {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.ws = 1),
      (this.gs = new Je(et.ss));
  }
  checkEmpty(e) {
    return N.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.ws;
    this.ws++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new DS(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.gs = this.gs.add(new et(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return N.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return N.resolve(this.ys(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.ps(r),
      s = i < 0 ? 0 : i;
    return N.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return N.resolve(this.mutationQueue.length === 0 ? -1 : this.ws - 1);
  }
  getAllMutationBatches(e) {
    return N.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new et(n, 0),
      i = new et(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.gs.forEachInRange([r, i], (o) => {
        const a = this.ys(o._s);
        s.push(a);
      }),
      N.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new Je(qe);
    return (
      n.forEach((i) => {
        const s = new et(i, 0),
          o = new et(i, Number.POSITIVE_INFINITY);
        this.gs.forEachInRange([s, o], (a) => {
          r = r.add(a._s);
        });
      }),
      N.resolve(this.Is(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    re.isDocumentKey(s) || (s = s.child(""));
    const o = new et(new re(s), 0);
    let a = new Je(qe);
    return (
      this.gs.forEachWhile((l) => {
        const c = l.key.path;
        return !!r.isPrefixOf(c) && (c.length === i && (a = a.add(l._s)), !0);
      }, o),
      N.resolve(this.Is(a))
    );
  }
  Is(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const i = this.ys(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    Le(this.Ts(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.gs;
    return N.forEach(n.mutations, (i) => {
      const s = new et(i.key, n.batchId);
      return (
        (r = r.delete(s)),
        this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      );
    }).next(() => {
      this.gs = r;
    });
  }
  An(e) {}
  containsKey(e, n) {
    const r = new et(n, 0),
      i = this.gs.firstAfterOrEqual(r);
    return N.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, N.resolve();
  }
  Ts(e, n) {
    return this.ps(e);
  }
  ps(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  ys(e) {
    const n = this.ps(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WS {
  constructor(e) {
    (this.Es = e), (this.docs = new Ze(re.comparator)), (this.size = 0);
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.Es(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return N.resolve(r ? r.document.mutableCopy() : st.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = Pn();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : st.newInvalidDocument(i)
        );
      }),
      N.resolve(r)
    );
  }
  getAllFromCollection(e, n, r) {
    let i = Pn();
    const s = new re(n.child("")),
      o = this.docs.getIteratorFrom(s);
    for (; o.hasNext(); ) {
      const {
        key: a,
        value: { document: l },
      } = o.getNext();
      if (!n.isPrefixOf(a.path)) break;
      a.path.length > n.length + 1 ||
        Mk(Lk(l), r) <= 0 ||
        (i = i.insert(l.key, l.mutableCopy()));
    }
    return N.resolve(i);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    ue();
  }
  As(e, n) {
    return N.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new KS(this);
  }
  getSize(e) {
    return N.resolve(this.size);
  }
}
class KS extends FS {
  constructor(e) {
    super(), (this.Yn = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.Yn.addEntry(e, i))
          : this.Yn.removeEntry(r);
      }),
      N.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.Yn.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.Yn.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GS {
  constructor(e) {
    (this.persistence = e),
      (this.Rs = new cs((n) => hh(n), fh)),
      (this.lastRemoteSnapshotVersion = pe.min()),
      (this.highestTargetId = 0),
      (this.bs = 0),
      (this.Ps = new yh()),
      (this.targetCount = 0),
      (this.vs = Yi.Pn());
  }
  forEachTarget(e, n) {
    return this.Rs.forEach((r, i) => n(i)), N.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return N.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return N.resolve(this.bs);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.vs.next()), N.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.bs && (this.bs = n),
      N.resolve()
    );
  }
  Dn(e) {
    this.Rs.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId &&
      ((this.vs = new Yi(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.bs && (this.bs = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.Dn(n), (this.targetCount += 1), N.resolve();
  }
  updateTargetData(e, n) {
    return this.Dn(n), N.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.Rs.delete(n.target),
      this.Ps.ls(n.targetId),
      (this.targetCount -= 1),
      N.resolve()
    );
  }
  removeTargets(e, n, r) {
    let i = 0;
    const s = [];
    return (
      this.Rs.forEach((o, a) => {
        a.sequenceNumber <= n &&
          r.get(a.targetId) === null &&
          (this.Rs.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
          i++);
      }),
      N.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return N.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.Rs.get(n) || null;
    return N.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Ps.us(n, r), N.resolve();
  }
  removeMatchingKeys(e, n, r) {
    this.Ps.hs(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o));
        }),
      N.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Ps.ls(n), N.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Ps.ds(n);
    return N.resolve(r);
  }
  containsKey(e, n) {
    return N.resolve(this.Ps.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QS {
  constructor(e, n) {
    (this.Vs = {}),
      (this.overlays = {}),
      (this.Ss = new uh(0)),
      (this.Ds = !1),
      (this.Ds = !0),
      (this.referenceDelegate = e(this)),
      (this.Cs = new GS(this)),
      (this.indexManager = new $S()),
      (this.remoteDocumentCache = (function (r) {
        return new WS(r);
      })((r) => this.referenceDelegate.xs(r))),
      (this.It = new LS(n)),
      (this.Ns = new jS(this.It));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.Ds = !1), Promise.resolve();
  }
  get started() {
    return this.Ds;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || ((n = new HS()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Vs[e.toKey()];
    return (
      r || ((r = new zS(n, this.referenceDelegate)), (this.Vs[e.toKey()] = r)),
      r
    );
  }
  getTargetCache() {
    return this.Cs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ns;
  }
  runTransaction(e, n, r) {
    Z("MemoryPersistence", "Starting transaction:", e);
    const i = new YS(this.Ss.next());
    return (
      this.referenceDelegate.ks(),
      r(i)
        .next((s) => this.referenceDelegate.Ms(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Os(e, n) {
    return N.or(Object.values(this.Vs).map((r) => () => r.containsKey(e, n)));
  }
}
class YS extends Vk {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class _h {
  constructor(e) {
    (this.persistence = e), (this.Fs = new yh()), (this.$s = null);
  }
  static Bs(e) {
    return new _h(e);
  }
  get Ls() {
    if (this.$s) return this.$s;
    throw ue();
  }
  addReference(e, n, r) {
    return (
      this.Fs.addReference(r, n), this.Ls.delete(r.toString()), N.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Fs.removeReference(r, n), this.Ls.add(r.toString()), N.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Ls.add(n.toString()), N.resolve();
  }
  removeTarget(e, n) {
    this.Fs.ls(n.targetId).forEach((i) => this.Ls.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Ls.add(s.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  ks() {
    this.$s = new Set();
  }
  Ms(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return N.forEach(this.Ls, (r) => {
      const i = re.fromPath(r);
      return this.Us(e, i).next((s) => {
        s || n.removeEntry(i, pe.min());
      });
    }).next(() => ((this.$s = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.Us(e, n).next((r) => {
      r ? this.Ls.delete(n.toString()) : this.Ls.add(n.toString());
    });
  }
  xs(e) {
    return 0;
  }
  Us(e, n) {
    return N.or([
      () => N.resolve(this.Fs.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Os(e, n),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wh {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.Si = r), (this.Di = i);
  }
  static Ci(e, n) {
    let r = ve(),
      i = ve();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new wh(e, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XS {
  constructor() {
    this.xi = !1;
  }
  initialize(e, n) {
    (this.Ni = e), (this.indexManager = n), (this.xi = !0);
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return this.ki(e, n)
      .next((s) => s || this.Mi(e, n, i, r))
      .next((s) => s || this.Oi(e, n));
  }
  ki(e, n) {
    if (im(n)) return N.resolve(null);
    let r = Rn(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = Bu(n, null, "F")), (r = Rn(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = ve(...s);
            return this.Ni.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const c = this.Fi(n, a);
                return this.$i(n, c, o, l.readTime)
                  ? this.ki(e, Bu(n, null, "F"))
                  : this.Bi(e, c, n, l);
              })
            );
          }))
    );
  }
  Mi(e, n, r, i) {
    return im(n) || i.isEqual(pe.min())
      ? this.Oi(e, n)
      : this.Ni.getDocuments(e, r).next((s) => {
          const o = this.Fi(n, s);
          return this.$i(n, o, r, i)
            ? this.Oi(e, n)
            : (Kp() <= Se.DEBUG &&
                Z(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  ju(n)
                ),
              this.Bi(e, o, n, Nk(i, -1)));
        });
  }
  Fi(e, n) {
    let r = new Je(x_(e));
    return (
      n.forEach((i, s) => {
        ph(e, s) && (r = r.add(s));
      }),
      r
    );
  }
  $i(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = e.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Oi(e, n) {
    return (
      Kp() <= Se.DEBUG &&
        Z("QueryEngine", "Using full collection scan to execute query:", ju(n)),
      this.Ni.getDocumentsMatchingQuery(e, n, yr.min())
    );
  }
  Bi(e, n, r, i) {
    return this.Ni.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JS {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Li = n),
      (this.It = i),
      (this.Ui = new Ze(qe)),
      (this.qi = new cs((s) => hh(s), fh)),
      (this.Ki = new Map()),
      (this.Gi = e.getRemoteDocumentCache()),
      (this.Cs = e.getTargetCache()),
      (this.Ns = e.getBundleCache()),
      this.Qi(r);
  }
  Qi(e) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new BS(
        this.Gi,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.Gi.setIndexManager(this.indexManager),
      this.Li.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.Ui)
    );
  }
}
function ZS(t, e, n, r) {
  return new JS(t, e, n, r);
}
async function J_(t, e) {
  const n = he(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let i;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n.Qi(e), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((s) => {
          const o = [],
            a = [];
          let l = ve();
          for (const c of i) {
            o.push(c.batchId);
            for (const u of c.mutations) l = l.add(u.key);
          }
          for (const c of s) {
            a.push(c.batchId);
            for (const u of c.mutations) l = l.add(u.key);
          }
          return n.localDocuments
            .getDocuments(r, l)
            .next((c) => ({ ji: c, removedBatchIds: o, addedBatchIds: a }));
        });
    }
  );
}
function eq(t, e) {
  const n = he(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      return (function (o, a, l, c) {
        const u = l.batch,
          d = u.keys();
        let h = N.resolve();
        return (
          d.forEach((f) => {
            h = h
              .next(() => c.getEntry(a, f))
              .next((g) => {
                const y = l.docVersions.get(f);
                Le(y !== null),
                  g.version.compareTo(y) < 0 &&
                    (u.applyToRemoteDocument(g, l),
                    g.isValidDocument() &&
                      (g.setReadTime(l.commitVersion), c.addEntry(g)));
              });
          }),
          h.next(() => o.mutationQueue.removeMutationBatch(a, u))
        );
      })(n, r, e, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (o) {
              let a = ve();
              for (let l = 0; l < o.mutationResults.length; ++l)
                o.mutationResults[l].transformResults.length > 0 &&
                  (a = a.add(o.batch.mutations[l].key));
              return a;
            })(e)
          )
        )
        .next(() => n.localDocuments.getDocuments(r, i));
    }
  );
}
function Z_(t) {
  const e = he(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.Cs.getLastRemoteSnapshotVersion(n)
  );
}
function tq(t, e) {
  const n = he(t),
    r = e.snapshotVersion;
  let i = n.Ui;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      const o = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      i = n.Ui;
      const a = [];
      e.targetChanges.forEach((u, d) => {
        const h = i.get(d);
        if (!h) return;
        a.push(
          n.Cs.removeMatchingKeys(s, u.removedDocuments, d).next(() =>
            n.Cs.addMatchingKeys(s, u.addedDocuments, d)
          )
        );
        let f = h.withSequenceNumber(s.currentSequenceNumber);
        e.targetMismatches.has(d)
          ? (f = f
              .withResumeToken(ut.EMPTY_BYTE_STRING, pe.min())
              .withLastLimboFreeSnapshotVersion(pe.min()))
          : u.resumeToken.approximateByteSize() > 0 &&
            (f = f.withResumeToken(u.resumeToken, r)),
          (i = i.insert(d, f)),
          (function (g, y, _) {
            return g.resumeToken.approximateByteSize() === 0 ||
              y.snapshotVersion.toMicroseconds() -
                g.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : _.addedDocuments.size +
                  _.modifiedDocuments.size +
                  _.removedDocuments.size >
                  0;
          })(h, f, u) && a.push(n.Cs.updateTargetData(s, f));
      });
      let l = Pn(),
        c = ve();
      if (
        (e.documentUpdates.forEach((u) => {
          e.resolvedLimboDocuments.has(u) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, u));
        }),
        a.push(
          nq(s, o, e.documentUpdates).next((u) => {
            (l = u.Wi), (c = u.zi);
          })
        ),
        !r.isEqual(pe.min()))
      ) {
        const u = n.Cs.getLastRemoteSnapshotVersion(s).next((d) =>
          n.Cs.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(u);
      }
      return N.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, c))
        .next(() => l);
    })
    .then((s) => ((n.Ui = i), s));
}
function nq(t, e, n) {
  let r = ve(),
    i = ve();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = Pn();
      return (
        n.forEach((a, l) => {
          const c = s.get(a);
          l.isFoundDocument() !== c.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(pe.min())
              ? (e.removeEntry(a, l.readTime), (o = o.insert(a, l)))
              : !c.isValidDocument() ||
                l.version.compareTo(c.version) > 0 ||
                (l.version.compareTo(c.version) === 0 && c.hasPendingWrites)
              ? (e.addEntry(l), (o = o.insert(a, l)))
              : Z(
                  "LocalStore",
                  "Ignoring outdated watch update for ",
                  a,
                  ". Current version:",
                  c.version,
                  " Watch version:",
                  l.version
                );
        }),
        { Wi: o, zi: i }
      );
    })
  );
}
function rq(t, e) {
  const n = he(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    )
  );
}
function iq(t, e) {
  const n = he(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.Cs.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), N.resolve(i))
          : n.Cs.allocateTargetId(r).next(
              (o) => (
                (i = new Kr(e, o, 0, r.currentSequenceNumber)),
                n.Cs.addTargetData(r, i).next(() => i)
              )
            )
      );
    })
    .then((r) => {
      const i = n.Ui.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.Ui = n.Ui.insert(r.targetId, r)), n.qi.set(e, r.targetId)),
        r
      );
    });
}
async function Ku(t, e, n) {
  const r = he(t),
    i = r.Ui.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!xo(o)) throw o;
    Z("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ui = r.Ui.remove(e)), r.qi.delete(i.target);
}
function fm(t, e, n) {
  const r = he(t);
  let i = pe.min(),
    s = ve();
  return r.persistence.runTransaction("Execute query", "readonly", (o) =>
    (function (a, l, c) {
      const u = he(a),
        d = u.qi.get(c);
      return d !== void 0 ? N.resolve(u.Ui.get(d)) : u.Cs.getTargetData(l, c);
    })(r, o, Rn(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Cs.getMatchingKeysForTargetId(o, a.targetId).next((l) => {
              s = l;
            })
          );
      })
      .next(() =>
        r.Li.getDocumentsMatchingQuery(o, e, n ? i : pe.min(), n ? s : ve())
      )
      .next((a) => (sq(r, tS(e), a), { documents: a, Hi: s }))
  );
}
function sq(t, e, n) {
  let r = pe.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Ki.set(e, r);
}
class pm {
  constructor() {
    this.activeTargetIds = H_();
  }
  er(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  nr(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  tr() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class oq {
  constructor() {
    (this.Lr = new pm()),
      (this.Ur = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.Lr.er(e), this.Ur[e] || "not-current";
  }
  updateQueryState(e, n, r) {
    this.Ur[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.Lr.nr(e);
  }
  isLocalQueryTarget(e) {
    return this.Lr.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Ur[e];
  }
  getAllActiveQueryTargets() {
    return this.Lr.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.Lr.activeTargetIds.has(e);
  }
  start() {
    return (this.Lr = new pm()), Promise.resolve();
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aq {
  qr(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mm {
  constructor() {
    (this.Kr = () => this.Gr()),
      (this.Qr = () => this.jr()),
      (this.Wr = []),
      this.zr();
  }
  qr(e) {
    this.Wr.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.Kr),
      window.removeEventListener("offline", this.Qr);
  }
  zr() {
    window.addEventListener("online", this.Kr),
      window.addEventListener("offline", this.Qr);
  }
  Gr() {
    Z("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.Wr) e(0);
  }
  jr() {
    Z("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.Wr) e(1);
  }
  static C() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lq = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cq {
  constructor(e) {
    (this.Hr = e.Hr), (this.Jr = e.Jr);
  }
  Yr(e) {
    this.Xr = e;
  }
  Zr(e) {
    this.eo = e;
  }
  onMessage(e) {
    this.no = e;
  }
  close() {
    this.Jr();
  }
  send(e) {
    this.Hr(e);
  }
  so() {
    this.Xr();
  }
  io(e) {
    this.eo(e);
  }
  ro(e) {
    this.no(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uq extends class {
  constructor(e) {
    (this.databaseInfo = e), (this.databaseId = e.databaseId);
    const n = e.ssl ? "https" : "http";
    (this.oo = n + "://" + e.host),
      (this.uo =
        "projects/" +
        this.databaseId.projectId +
        "/databases/" +
        this.databaseId.database +
        "/documents");
  }
  co(e, n, r, i, s) {
    const o = this.ao(e, n);
    Z("RestConnection", "Sending: ", o, r);
    const a = {};
    return (
      this.ho(a, i, s),
      this.lo(e, o, a, r).then(
        (l) => (Z("RestConnection", "Received: ", l), l),
        (l) => {
          throw (
            (Gp(
              "RestConnection",
              `${e} failed with error: `,
              l,
              "url: ",
              o,
              "request:",
              r
            ),
            l)
          );
        }
      )
    );
  }
  fo(e, n, r, i, s, o) {
    return this.co(e, n, r, i, s);
  }
  ho(e, n, r) {
    (e["X-Goog-Api-Client"] = "gl-js/ fire/" + ls),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  ao(e, n) {
    const r = lq[e];
    return `${this.oo}/v1/${n}:${r}`;
  }
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams);
  }
  lo(e, n, r, i) {
    return new Promise((s, o) => {
      const a = new Ak();
      a.listenOnce(Ek.COMPLETE, () => {
        try {
          switch (a.getLastErrorCode()) {
            case Kc.NO_ERROR:
              const c = a.getResponseJson();
              Z("Connection", "XHR received:", JSON.stringify(c)), s(c);
              break;
            case Kc.TIMEOUT:
              Z("Connection", 'RPC "' + e + '" timed out'),
                o(new G(q.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case Kc.HTTP_ERROR:
              const u = a.getStatus();
              if (
                (Z(
                  "Connection",
                  'RPC "' + e + '" failed with status:',
                  u,
                  "response text:",
                  a.getResponseText()
                ),
                u > 0)
              ) {
                const d = a.getResponseJson().error;
                if (d && d.status && d.message) {
                  const h = (function (f) {
                    const g = f.toLowerCase().replace(/_/g, "-");
                    return Object.values(q).indexOf(g) >= 0 ? g : q.UNKNOWN;
                  })(d.status);
                  o(new G(h, d.message));
                } else
                  o(
                    new G(
                      q.UNKNOWN,
                      "Server responded with status " + a.getStatus()
                    )
                  );
              } else o(new G(q.UNAVAILABLE, "Connection failed."));
              break;
            default:
              ue();
          }
        } finally {
          Z("Connection", 'RPC "' + e + '" completed.');
        }
      });
      const l = JSON.stringify(i);
      a.send(n, "POST", l, r, 15);
    });
  }
  _o(e, n, r) {
    const i = [
        this.oo,
        "/",
        "google.firestore.v1.Firestore",
        "/",
        e,
        "/channel",
      ],
      s = wk(),
      o = bk(),
      a = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      };
    this.useFetchStreams && (a.xmlHttpFactory = new Ik({})),
      this.ho(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const l = i.join("");
    Z("Connection", "Creating WebChannel: " + l, a);
    const c = s.createWebChannel(l, a);
    let u = !1,
      d = !1;
    const h = new cq({
        Hr: (g) => {
          d
            ? Z("Connection", "Not sending because WebChannel is closed:", g)
            : (u ||
                (Z("Connection", "Opening WebChannel transport."),
                c.open(),
                (u = !0)),
              Z("Connection", "WebChannel sending:", g),
              c.send(g));
        },
        Jr: () => c.close(),
      }),
      f = (g, y, _) => {
        g.listen(y, (T) => {
          try {
            _(T);
          } catch (v) {
            setTimeout(() => {
              throw v;
            }, 0);
          }
        });
      };
    return (
      f(c, Zo.EventType.OPEN, () => {
        d || Z("Connection", "WebChannel transport opened.");
      }),
      f(c, Zo.EventType.CLOSE, () => {
        d || ((d = !0), Z("Connection", "WebChannel transport closed"), h.io());
      }),
      f(c, Zo.EventType.ERROR, (g) => {
        d ||
          ((d = !0),
          Gp("Connection", "WebChannel transport errored:", g),
          h.io(new G(q.UNAVAILABLE, "The operation could not be completed")));
      }),
      f(c, Zo.EventType.MESSAGE, (g) => {
        var y;
        if (!d) {
          const _ = g.data[0];
          Le(!!_);
          const T = _,
            v =
              T.error ||
              ((y = T[0]) === null || y === void 0 ? void 0 : y.error);
          if (v) {
            Z("Connection", "WebChannel received error:", v);
            const k = v.status;
            let E = (function (V) {
                const z = He[V];
                if (z !== void 0) return F_(z);
              })(k),
              O = v.message;
            E === void 0 &&
              ((E = q.INTERNAL),
              (O =
                "Unknown error status: " + k + " with message " + v.message)),
              (d = !0),
              h.io(new G(E, O)),
              c.close();
          } else Z("Connection", "WebChannel received:", _), h.ro(_);
        }
      }),
      f(o, Tk.STAT_EVENT, (g) => {
        g.stat === zp.PROXY
          ? Z("Connection", "Detected buffering proxy")
          : g.stat === zp.NOPROXY &&
            Z("Connection", "Detected no buffering proxy");
      }),
      setTimeout(() => {
        h.so();
      }, 0),
      h
    );
  }
}
function Qc() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yl(t) {
  return new _S(t, !0);
}
class ew {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.Hs = e),
      (this.timerId = n),
      (this.wo = r),
      (this.mo = i),
      (this.yo = s),
      (this.po = 0),
      (this.Io = null),
      (this.To = Date.now()),
      this.reset();
  }
  reset() {
    this.po = 0;
  }
  Eo() {
    this.po = this.yo;
  }
  Ao(e) {
    this.cancel();
    const n = Math.floor(this.po + this.Ro()),
      r = Math.max(0, Date.now() - this.To),
      i = Math.max(0, n - r);
    i > 0 &&
      Z(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.Io = this.Hs.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.To = Date.now()), e())
      )),
      (this.po *= this.mo),
      this.po < this.wo && (this.po = this.wo),
      this.po > this.yo && (this.po = this.yo);
  }
  bo() {
    this.Io !== null && (this.Io.skipDelay(), (this.Io = null));
  }
  cancel() {
    this.Io !== null && (this.Io.cancel(), (this.Io = null));
  }
  Ro() {
    return (Math.random() - 0.5) * this.po;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tw {
  constructor(e, n, r, i, s, o, a, l) {
    (this.Hs = e),
      (this.Po = r),
      (this.vo = i),
      (this.Vo = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = l),
      (this.state = 0),
      (this.So = 0),
      (this.Do = null),
      (this.Co = null),
      (this.stream = null),
      (this.xo = new ew(e, n));
  }
  No() {
    return this.state === 1 || this.state === 5 || this.ko();
  }
  ko() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Mo();
  }
  async stop() {
    this.No() && (await this.close(0));
  }
  Oo() {
    (this.state = 0), this.xo.reset();
  }
  Fo() {
    this.ko() &&
      this.Do === null &&
      (this.Do = this.Hs.enqueueAfterDelay(this.Po, 6e4, () => this.$o()));
  }
  Bo(e) {
    this.Lo(), this.stream.send(e);
  }
  async $o() {
    if (this.ko()) return this.close(0);
  }
  Lo() {
    this.Do && (this.Do.cancel(), (this.Do = null));
  }
  Uo() {
    this.Co && (this.Co.cancel(), (this.Co = null));
  }
  async close(e, n) {
    this.Lo(),
      this.Uo(),
      this.xo.cancel(),
      this.So++,
      e !== 4
        ? this.xo.reset()
        : n && n.code === q.RESOURCE_EXHAUSTED
        ? (xn(n.toString()),
          xn("Using maximum backoff delay to prevent overloading the backend."),
          this.xo.Eo())
        : n &&
          n.code === q.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.qo(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.Zr(n);
  }
  qo() {}
  auth() {
    this.state = 1;
    const e = this.Ko(this.So),
      n = this.So;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.So === n && this.Go(r, i);
      },
      (r) => {
        e(() => {
          const i = new G(
            q.UNKNOWN,
            "Fetching auth token failed: " + r.message
          );
          return this.Qo(i);
        });
      }
    );
  }
  Go(e, n) {
    const r = this.Ko(this.So);
    (this.stream = this.jo(e, n)),
      this.stream.Yr(() => {
        r(
          () => (
            (this.state = 2),
            (this.Co = this.Hs.enqueueAfterDelay(
              this.vo,
              1e4,
              () => (this.ko() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Yr()
          )
        );
      }),
      this.stream.Zr((i) => {
        r(() => this.Qo(i));
      }),
      this.stream.onMessage((i) => {
        r(() => this.onMessage(i));
      });
  }
  Mo() {
    (this.state = 5),
      this.xo.Ao(async () => {
        (this.state = 0), this.start();
      });
  }
  Qo(e) {
    return (
      Z("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Ko(e) {
    return (n) => {
      this.Hs.enqueueAndForget(() =>
        this.So === e
          ? n()
          : (Z(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class dq extends tw {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.It = s);
  }
  jo(e, n) {
    return this.Vo._o("Listen", e, n);
  }
  onMessage(e) {
    this.xo.reset();
    const n = ES(this.It, e),
      r = (function (i) {
        if (!("targetChange" in i)) return pe.min();
        const s = i.targetChange;
        return s.targetIds && s.targetIds.length
          ? pe.min()
          : s.readTime
          ? In(s.readTime)
          : pe.min();
      })(e);
    return this.listener.Wo(n, r);
  }
  zo(e) {
    const n = {};
    (n.database = Wu(this.It)),
      (n.addTarget = (function (i, s) {
        let o;
        const a = s.target;
        return (
          (o = Uu(a) ? { documents: AS(i, a) } : { query: CS(i, a) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = K_(i, s.resumeToken))
            : s.snapshotVersion.compareTo(pe.min()) > 0 &&
              (o.readTime = Qa(i, s.snapshotVersion.toTimestamp())),
          o
        );
      })(this.It, e));
    const r = SS(this.It, e);
    r && (n.labels = r), this.Bo(n);
  }
  Ho(e) {
    const n = {};
    (n.database = Wu(this.It)), (n.removeTarget = e), this.Bo(n);
  }
}
class hq extends tw {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.It = s),
      (this.Jo = !1);
  }
  get Yo() {
    return this.Jo;
  }
  start() {
    (this.Jo = !1), (this.lastStreamToken = void 0), super.start();
  }
  qo() {
    this.Jo && this.Xo([]);
  }
  jo(e, n) {
    return this.Vo._o("Write", e, n);
  }
  onMessage(e) {
    if (
      (Le(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.Jo)
    ) {
      this.xo.reset();
      const n = IS(e.writeResults, e.commitTime),
        r = In(e.commitTime);
      return this.listener.Zo(r, n);
    }
    return (
      Le(!e.writeResults || e.writeResults.length === 0),
      (this.Jo = !0),
      this.listener.tu()
    );
  }
  eu() {
    const e = {};
    (e.database = Wu(this.It)), this.Bo(e);
  }
  Xo(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => TS(this.It, r)),
    };
    this.Bo(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fq extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.Vo = r),
      (this.It = i),
      (this.nu = !1);
  }
  su() {
    if (this.nu)
      throw new G(
        q.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  co(e, n, r) {
    return (
      this.su(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, s]) => this.Vo.co(e, n, r, i, s))
        .catch((i) => {
          throw i.name === "FirebaseError"
            ? (i.code === q.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new G(q.UNKNOWN, i.toString());
        })
    );
  }
  fo(e, n, r, i) {
    return (
      this.su(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.Vo.fo(e, n, r, s, o, i))
        .catch((s) => {
          throw s.name === "FirebaseError"
            ? (s.code === q.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new G(q.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.nu = !0;
  }
}
class pq {
  constructor(e, n) {
    (this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.iu = 0),
      (this.ru = null),
      (this.ou = !0);
  }
  uu() {
    this.iu === 0 &&
      (this.cu("Unknown"),
      (this.ru = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.ru = null),
          this.au("Backend didn't respond within 10 seconds."),
          this.cu("Offline"),
          Promise.resolve()
        )
      )));
  }
  hu(e) {
    this.state === "Online"
      ? this.cu("Unknown")
      : (this.iu++,
        this.iu >= 1 &&
          (this.lu(),
          this.au(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.cu("Offline")));
  }
  set(e) {
    this.lu(), (this.iu = 0), e === "Online" && (this.ou = !1), this.cu(e);
  }
  cu(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  au(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.ou ? (xn(n), (this.ou = !1)) : Z("OnlineStateTracker", n);
  }
  lu() {
    this.ru !== null && (this.ru.cancel(), (this.ru = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mq {
  constructor(e, n, r, i, s) {
    (this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.fu = []),
      (this.du = new Map()),
      (this._u = new Set()),
      (this.wu = []),
      (this.mu = s),
      this.mu.qr((o) => {
        r.enqueueAndForget(async () => {
          oi(this) &&
            (Z(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (a) {
              const l = he(a);
              l._u.add(4),
                await Do(l),
                l.gu.set("Unknown"),
                l._u.delete(4),
                await Xl(l);
            })(this));
        });
      }),
      (this.gu = new pq(r, i));
  }
}
async function Xl(t) {
  if (oi(t)) for (const e of t.wu) await e(!0);
}
async function Do(t) {
  for (const e of t.wu) await e(!1);
}
function nw(t, e) {
  const n = he(t);
  n.du.has(e.targetId) ||
    (n.du.set(e.targetId, e), Th(n) ? Eh(n) : us(n).ko() && bh(n, e));
}
function rw(t, e) {
  const n = he(t),
    r = us(n);
  n.du.delete(e),
    r.ko() && iw(n, e),
    n.du.size === 0 && (r.ko() ? r.Fo() : oi(n) && n.gu.set("Unknown"));
}
function bh(t, e) {
  t.yu.Ot(e.targetId), us(t).zo(e);
}
function iw(t, e) {
  t.yu.Ot(e), us(t).Ho(e);
}
function Eh(t) {
  (t.yu = new gS({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    se: (e) => t.du.get(e) || null,
  })),
    us(t).start(),
    t.gu.uu();
}
function Th(t) {
  return oi(t) && !us(t).No() && t.du.size > 0;
}
function oi(t) {
  return he(t)._u.size === 0;
}
function sw(t) {
  t.yu = void 0;
}
async function gq(t) {
  t.du.forEach((e, n) => {
    bh(t, e);
  });
}
async function vq(t, e) {
  sw(t), Th(t) ? (t.gu.hu(e), Eh(t)) : t.gu.set("Unknown");
}
async function yq(t, e, n) {
  if ((t.gu.set("Online"), e instanceof W_ && e.state === 2 && e.cause))
    try {
      await (async function (r, i) {
        const s = i.cause;
        for (const o of i.targetIds)
          r.du.has(o) &&
            (await r.remoteSyncer.rejectListen(o, s),
            r.du.delete(o),
            r.yu.removeTarget(o));
      })(t, e);
    } catch (r) {
      Z(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        r
      ),
        await Ya(t, r);
    }
  else if (
    (e instanceof ya ? t.yu.Gt(e) : e instanceof z_ ? t.yu.Yt(e) : t.yu.Wt(e),
    !n.isEqual(pe.min()))
  )
    try {
      const r = await Z_(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (i, s) {
          const o = i.yu.te(s);
          return (
            o.targetChanges.forEach((a, l) => {
              if (a.resumeToken.approximateByteSize() > 0) {
                const c = i.du.get(l);
                c && i.du.set(l, c.withResumeToken(a.resumeToken, s));
              }
            }),
            o.targetMismatches.forEach((a) => {
              const l = i.du.get(a);
              if (!l) return;
              i.du.set(
                a,
                l.withResumeToken(ut.EMPTY_BYTE_STRING, l.snapshotVersion)
              ),
                iw(i, a);
              const c = new Kr(l.target, a, 1, l.sequenceNumber);
              bh(i, c);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      Z("RemoteStore", "Failed to raise snapshot:", r), await Ya(t, r);
    }
}
async function Ya(t, e, n) {
  if (!xo(e)) throw e;
  t._u.add(1),
    await Do(t),
    t.gu.set("Offline"),
    n || (n = () => Z_(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      Z("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t._u.delete(1),
        await Xl(t);
    });
}
function ow(t, e) {
  return e().catch((n) => Ya(t, n, e));
}
async function Jl(t) {
  const e = he(t),
    n = wr(e);
  let r = e.fu.length > 0 ? e.fu[e.fu.length - 1].batchId : -1;
  for (; _q(e); )
    try {
      const i = await rq(e.localStore, r);
      if (i === null) {
        e.fu.length === 0 && n.Fo();
        break;
      }
      (r = i.batchId), wq(e, i);
    } catch (i) {
      await Ya(e, i);
    }
  aw(e) && lw(e);
}
function _q(t) {
  return oi(t) && t.fu.length < 10;
}
function wq(t, e) {
  t.fu.push(e);
  const n = wr(t);
  n.ko() && n.Yo && n.Xo(e.mutations);
}
function aw(t) {
  return oi(t) && !wr(t).No() && t.fu.length > 0;
}
function lw(t) {
  wr(t).start();
}
async function bq(t) {
  wr(t).eu();
}
async function Eq(t) {
  const e = wr(t);
  for (const n of t.fu) e.Xo(n.mutations);
}
async function Tq(t, e, n) {
  const r = t.fu.shift(),
    i = vh.from(r, e, n);
  await ow(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Jl(t);
}
async function Iq(t, e) {
  e &&
    wr(t).Yo &&
    (await (async function (n, r) {
      if (((i = r.code), dS(i) && i !== q.ABORTED)) {
        const s = n.fu.shift();
        wr(n).Oo(),
          await ow(n, () => n.remoteSyncer.rejectFailedWrite(s.batchId, r)),
          await Jl(n);
      }
      var i;
    })(t, e)),
    aw(t) && lw(t);
}
async function gm(t, e) {
  const n = he(t);
  n.asyncQueue.verifyOperationInProgress(),
    Z("RemoteStore", "RemoteStore received new credentials");
  const r = oi(n);
  n._u.add(3),
    await Do(n),
    r && n.gu.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n._u.delete(3),
    await Xl(n);
}
async function Aq(t, e) {
  const n = he(t);
  e
    ? (n._u.delete(2), await Xl(n))
    : e || (n._u.add(2), await Do(n), n.gu.set("Unknown"));
}
function us(t) {
  return (
    t.pu ||
      ((t.pu = (function (e, n, r) {
        const i = he(e);
        return (
          i.su(),
          new dq(n, i.Vo, i.authCredentials, i.appCheckCredentials, i.It, r)
        );
      })(t.datastore, t.asyncQueue, {
        Yr: gq.bind(null, t),
        Zr: vq.bind(null, t),
        Wo: yq.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.pu.Oo(), Th(t) ? Eh(t) : t.gu.set("Unknown"))
          : (await t.pu.stop(), sw(t));
      })),
    t.pu
  );
}
function wr(t) {
  return (
    t.Iu ||
      ((t.Iu = (function (e, n, r) {
        const i = he(e);
        return (
          i.su(),
          new hq(n, i.Vo, i.authCredentials, i.appCheckCredentials, i.It, r)
        );
      })(t.datastore, t.asyncQueue, {
        Yr: bq.bind(null, t),
        Zr: Iq.bind(null, t),
        tu: Eq.bind(null, t),
        Zo: Tq.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.Iu.Oo(), await Jl(t))
          : (await t.Iu.stop(),
            t.fu.length > 0 &&
              (Z(
                "RemoteStore",
                `Stopping write stream with ${t.fu.length} pending writes`
              ),
              (t.fu = [])));
      })),
    t.Iu
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ih {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new Tn()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new Ih(e, n, o, i, s);
    return a.start(r), a;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new G(q.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function Ah(t, e) {
  if ((xn("AsyncQueue", `${e}: ${t}`), xo(t)))
    return new G(q.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xi {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || re.comparator(n.key, r.key)
      : (n, r) => re.comparator(n.key, r.key)),
      (this.keyedMap = Es()),
      (this.sortedSet = new Ze(this.comparator));
  }
  static emptySet(e) {
    return new xi(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof xi) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new xi();
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vm {
  constructor() {
    this.Tu = new Ze(re.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.Tu.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.Tu = this.Tu.insert(n, e))
        : e.type === 3 && r.type !== 1
        ? (this.Tu = this.Tu.insert(n, { type: r.type, doc: e.doc }))
        : e.type === 2 && r.type === 2
        ? (this.Tu = this.Tu.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && r.type === 0
        ? (this.Tu = this.Tu.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && r.type === 0
        ? (this.Tu = this.Tu.remove(n))
        : e.type === 1 && r.type === 2
        ? (this.Tu = this.Tu.insert(n, { type: 1, doc: r.doc }))
        : e.type === 0 && r.type === 1
        ? (this.Tu = this.Tu.insert(n, { type: 2, doc: e.doc }))
        : ue()
      : (this.Tu = this.Tu.insert(n, e));
  }
  Eu() {
    const e = [];
    return (
      this.Tu.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class Xi {
  constructor(e, n, r, i, s, o, a, l) {
    (this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = l);
  }
  static fromInitialDocuments(e, n, r, i) {
    const s = [];
    return (
      n.forEach((o) => {
        s.push({ type: 0, doc: o });
      }),
      new Xi(e, n, xi.emptySet(n), s, r, i, !0, !1)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        zl(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cq {
  constructor() {
    (this.Au = void 0), (this.listeners = []);
  }
}
class kq {
  constructor() {
    (this.queries = new cs((e) => q_(e), zl)),
      (this.onlineState = "Unknown"),
      (this.Ru = new Set());
  }
}
async function Ch(t, e) {
  const n = he(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new Cq())), i))
    try {
      s.Au = await n.onListen(r);
    } catch (o) {
      const a = Ah(o, `Initialization of query '${ju(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s),
    s.listeners.push(e),
    e.bu(n.onlineState),
    s.Au && e.Pu(s.Au) && Sh(n);
}
async function kh(t, e) {
  const n = he(t),
    r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.listeners.indexOf(e);
    o >= 0 && (s.listeners.splice(o, 1), (i = s.listeners.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function Sq(t, e) {
  const n = he(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const a of o.listeners) a.Pu(i) && (r = !0);
      o.Au = i;
    }
  }
  r && Sh(n);
}
function qq(t, e, n) {
  const r = he(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function Sh(t) {
  t.Ru.forEach((e) => {
    e.next();
  });
}
class qh {
  constructor(e, n, r) {
    (this.query = e),
      (this.vu = n),
      (this.Vu = !1),
      (this.Su = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  Pu(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new Xi(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0
      );
    }
    let n = !1;
    return (
      this.Vu
        ? this.Du(e) && (this.vu.next(e), (n = !0))
        : this.Cu(e, this.onlineState) && (this.xu(e), (n = !0)),
      (this.Su = e),
      n
    );
  }
  onError(e) {
    this.vu.error(e);
  }
  bu(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.Su &&
        !this.Vu &&
        this.Cu(this.Su, e) &&
        (this.xu(this.Su), (n = !0)),
      n
    );
  }
  Cu(e, n) {
    if (!e.fromCache) return !0;
    const r = n !== "Offline";
    return (!this.options.Nu || !r) && (!e.docs.isEmpty() || n === "Offline");
  }
  Du(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Su && this.Su.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  xu(e) {
    (e = Xi.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache)),
      (this.Vu = !0),
      this.vu.next(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cw {
  constructor(e) {
    this.key = e;
  }
}
class uw {
  constructor(e) {
    this.key = e;
  }
}
class xq {
  constructor(e, n) {
    (this.query = e),
      (this.Lu = n),
      (this.Uu = null),
      (this.current = !1),
      (this.qu = ve()),
      (this.mutatedKeys = ve()),
      (this.Ku = x_(e)),
      (this.Gu = new xi(this.Ku));
  }
  get Qu() {
    return this.Lu;
  }
  ju(e, n) {
    const r = n ? n.Wu : new vm(),
      i = n ? n.Gu : this.Gu;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1;
    const l =
        this.query.limitType === "F" && i.size === this.query.limit
          ? i.last()
          : null,
      c =
        this.query.limitType === "L" && i.size === this.query.limit
          ? i.first()
          : null;
    if (
      (e.inorderTraversal((u, d) => {
        const h = i.get(u),
          f = ph(this.query, d) ? d : null,
          g = !!h && this.mutatedKeys.has(h.key),
          y =
            !!f &&
            (f.hasLocalMutations ||
              (this.mutatedKeys.has(f.key) && f.hasCommittedMutations));
        let _ = !1;
        h && f
          ? h.data.isEqual(f.data)
            ? g !== y && (r.track({ type: 3, doc: f }), (_ = !0))
            : this.zu(h, f) ||
              (r.track({ type: 2, doc: f }),
              (_ = !0),
              ((l && this.Ku(f, l) > 0) || (c && this.Ku(f, c) < 0)) &&
                (a = !0))
          : !h && f
          ? (r.track({ type: 0, doc: f }), (_ = !0))
          : h &&
            !f &&
            (r.track({ type: 1, doc: h }), (_ = !0), (l || c) && (a = !0)),
          _ &&
            (f
              ? ((o = o.add(f)), (s = y ? s.add(u) : s.delete(u)))
              : ((o = o.delete(u)), (s = s.delete(u))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const u = this.query.limitType === "F" ? o.last() : o.first();
        (o = o.delete(u.key)),
          (s = s.delete(u.key)),
          r.track({ type: 1, doc: u });
      }
    return { Gu: o, Wu: r, $i: a, mutatedKeys: s };
  }
  zu(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, r) {
    const i = this.Gu;
    (this.Gu = e.Gu), (this.mutatedKeys = e.mutatedKeys);
    const s = e.Wu.Eu();
    s.sort(
      (c, u) =>
        (function (d, h) {
          const f = (g) => {
            switch (g) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return ue();
            }
          };
          return f(d) - f(h);
        })(c.type, u.type) || this.Ku(c.doc, u.doc)
    ),
      this.Hu(r);
    const o = n ? this.Ju() : [],
      a = this.qu.size === 0 && this.current ? 1 : 0,
      l = a !== this.Uu;
    return (
      (this.Uu = a),
      s.length !== 0 || l
        ? {
            snapshot: new Xi(
              this.query,
              e.Gu,
              i,
              s,
              e.mutatedKeys,
              a === 0,
              l,
              !1
            ),
            Yu: o,
          }
        : { Yu: o }
    );
  }
  bu(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { Gu: this.Gu, Wu: new vm(), mutatedKeys: this.mutatedKeys, $i: !1 },
          !1
        ))
      : { Yu: [] };
  }
  Xu(e) {
    return (
      !this.Lu.has(e) && !!this.Gu.has(e) && !this.Gu.get(e).hasLocalMutations
    );
  }
  Hu(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Lu = this.Lu.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Lu = this.Lu.delete(n))),
      (this.current = e.current));
  }
  Ju() {
    if (!this.current) return [];
    const e = this.qu;
    (this.qu = ve()),
      this.Gu.forEach((r) => {
        this.Xu(r.key) && (this.qu = this.qu.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.qu.has(r) || n.push(new uw(r));
      }),
      this.qu.forEach((r) => {
        e.has(r) || n.push(new cw(r));
      }),
      n
    );
  }
  Zu(e) {
    (this.Lu = e.Hi), (this.qu = ve());
    const n = this.ju(e.documents);
    return this.applyChanges(n, !0);
  }
  tc() {
    return Xi.fromInitialDocuments(
      this.query,
      this.Gu,
      this.mutatedKeys,
      this.Uu === 0
    );
  }
}
class Rq {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class Pq {
  constructor(e) {
    (this.key = e), (this.ec = !1);
  }
}
class Oq {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.nc = {}),
      (this.sc = new cs((a) => q_(a), zl)),
      (this.ic = new Map()),
      (this.rc = new Set()),
      (this.oc = new Ze(re.comparator)),
      (this.uc = new Map()),
      (this.cc = new yh()),
      (this.ac = {}),
      (this.hc = new Map()),
      (this.lc = Yi.vn()),
      (this.onlineState = "Unknown"),
      (this.fc = void 0);
  }
  get isPrimaryClient() {
    return this.fc === !0;
  }
}
async function Dq(t, e) {
  const n = Hq(t);
  let r, i;
  const s = n.sc.get(e);
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.tc());
  else {
    const o = await iq(n.localStore, Rn(e));
    n.isPrimaryClient && nw(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId), (i = await Nq(n, e, r, a === "current"));
  }
  return i;
}
async function Nq(t, e, n, r) {
  t.dc = (u, d, h) =>
    (async function (f, g, y, _) {
      let T = g.view.ju(y);
      T.$i &&
        (T = await fm(f.localStore, g.query, !1).then(({ documents: E }) =>
          g.view.ju(E, T)
        ));
      const v = _ && _.targetChanges.get(g.targetId),
        k = g.view.applyChanges(T, f.isPrimaryClient, v);
      return _m(f, g.targetId, k.Yu), k.snapshot;
    })(t, u, d, h);
  const i = await fm(t.localStore, e, !0),
    s = new xq(e, i.Hi),
    o = s.ju(i.documents),
    a = Oo.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline"
    ),
    l = s.applyChanges(o, t.isPrimaryClient, a);
  _m(t, n, l.Yu);
  const c = new Rq(e, n, s);
  return (
    t.sc.set(e, c),
    t.ic.has(n) ? t.ic.get(n).push(e) : t.ic.set(n, [e]),
    l.snapshot
  );
}
async function Lq(t, e) {
  const n = he(t),
    r = n.sc.get(e),
    i = n.ic.get(r.targetId);
  if (i.length > 1)
    return (
      n.ic.set(
        r.targetId,
        i.filter((s) => !zl(s, e))
      ),
      void n.sc.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await Ku(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              rw(n.remoteStore, r.targetId),
              Gu(n, r.targetId);
          })
          .catch(qo)))
    : (Gu(n, r.targetId), await Ku(n.localStore, r.targetId, !0));
}
async function Mq(t, e, n) {
  const r = zq(t);
  try {
    const i = await (function (s, o) {
      const a = he(s),
        l = Xe.now(),
        c = o.reduce((h, f) => h.add(f.key), ve());
      let u, d;
      return a.persistence
        .runTransaction("Locally write mutations", "readwrite", (h) => {
          let f = Pn(),
            g = ve();
          return a.Gi.getEntries(h, c)
            .next((y) => {
              (f = y),
                f.forEach((_, T) => {
                  T.isValidDocument() || (g = g.add(_));
                });
            })
            .next(() => a.localDocuments.getOverlayedDocuments(h, f))
            .next((y) => {
              u = y;
              const _ = [];
              for (const T of o) {
                const v = lS(T, u.get(T.key).overlayedDocument);
                v != null &&
                  _.push(new Tr(T.key, v, I_(v.value.mapValue), Wt.exists(!0)));
              }
              return a.mutationQueue.addMutationBatch(h, l, _, o);
            })
            .next((y) => {
              d = y;
              const _ = y.applyToLocalDocumentSet(u, g);
              return a.documentOverlayCache.saveOverlays(h, y.batchId, _);
            });
        })
        .then(() => ({ batchId: d.batchId, changes: B_(u) }));
    })(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (s, o, a) {
        let l = s.ac[s.currentUser.toKey()];
        l || (l = new Ze(qe)),
          (l = l.insert(o, a)),
          (s.ac[s.currentUser.toKey()] = l);
      })(r, i.batchId, n),
      await No(r, i.changes),
      await Jl(r.remoteStore);
  } catch (i) {
    const s = Ah(i, "Failed to persist write");
    n.reject(s);
  }
}
async function dw(t, e) {
  const n = he(t);
  try {
    const r = await tq(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.uc.get(s);
      o &&
        (Le(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.ec = !0)
          : i.modifiedDocuments.size > 0
          ? Le(o.ec)
          : i.removedDocuments.size > 0 && (Le(o.ec), (o.ec = !1)));
    }),
      await No(n, r, e);
  } catch (r) {
    await qo(r);
  }
}
function ym(t, e, n) {
  const r = he(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.sc.forEach((s, o) => {
      const a = o.view.bu(e);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (s, o) {
        const a = he(s);
        a.onlineState = o;
        let l = !1;
        a.queries.forEach((c, u) => {
          for (const d of u.listeners) d.bu(o) && (l = !0);
        }),
          l && Sh(a);
      })(r.eventManager, e),
      i.length && r.nc.Wo(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function $q(t, e, n) {
  const r = he(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.uc.get(e),
    s = i && i.key;
  if (s) {
    let o = new Ze(re.comparator);
    o = o.insert(s, st.newNoDocument(s, pe.min()));
    const a = ve().add(s),
      l = new Ql(pe.min(), new Map(), new Je(qe), o, a);
    await dw(r, l), (r.oc = r.oc.remove(s)), r.uc.delete(e), xh(r);
  } else
    await Ku(r.localStore, e, !1)
      .then(() => Gu(r, e, n))
      .catch(qo);
}
async function Vq(t, e) {
  const n = he(t),
    r = e.batch.batchId;
  try {
    const i = await eq(n.localStore, e);
    fw(n, r, null),
      hw(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await No(n, i);
  } catch (i) {
    await qo(i);
  }
}
async function Fq(t, e, n) {
  const r = he(t);
  try {
    const i = await (function (s, o) {
      const a = he(s);
      return a.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (l) => {
          let c;
          return a.mutationQueue
            .lookupMutationBatch(l, o)
            .next(
              (u) => (
                Le(u !== null),
                (c = u.keys()),
                a.mutationQueue.removeMutationBatch(l, u)
              )
            )
            .next(() => a.mutationQueue.performConsistencyCheck(l))
            .next(() =>
              a.documentOverlayCache.removeOverlaysForBatchId(l, c, o)
            )
            .next(() =>
              a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l, c)
            )
            .next(() => a.localDocuments.getDocuments(l, c));
        }
      );
    })(r.localStore, e);
    fw(r, e, n),
      hw(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await No(r, i);
  } catch (i) {
    await qo(i);
  }
}
function hw(t, e) {
  (t.hc.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.hc.delete(e);
}
function fw(t, e, n) {
  const r = he(t);
  let i = r.ac[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.ac[r.currentUser.toKey()] = i);
  }
}
function Gu(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.ic.get(e)) t.sc.delete(r), n && t.nc._c(r, n);
  t.ic.delete(e),
    t.isPrimaryClient &&
      t.cc.ls(e).forEach((r) => {
        t.cc.containsKey(r) || pw(t, r);
      });
}
function pw(t, e) {
  t.rc.delete(e.path.canonicalString());
  const n = t.oc.get(e);
  n !== null &&
    (rw(t.remoteStore, n), (t.oc = t.oc.remove(e)), t.uc.delete(n), xh(t));
}
function _m(t, e, n) {
  for (const r of n)
    r instanceof cw
      ? (t.cc.addReference(r.key, e), Uq(t, r))
      : r instanceof uw
      ? (Z("SyncEngine", "Document no longer in limbo: " + r.key),
        t.cc.removeReference(r.key, e),
        t.cc.containsKey(r.key) || pw(t, r.key))
      : ue();
}
function Uq(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.oc.get(n) ||
    t.rc.has(r) ||
    (Z("SyncEngine", "New document in limbo: " + n), t.rc.add(r), xh(t));
}
function xh(t) {
  for (; t.rc.size > 0 && t.oc.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.rc.values().next().value;
    t.rc.delete(e);
    const n = new re($e.fromString(e)),
      r = t.lc.next();
    t.uc.set(r, new Pq(n)),
      (t.oc = t.oc.insert(n, r)),
      nw(t.remoteStore, new Kr(Rn(Hl(n.path)), r, 2, uh.at));
  }
}
async function No(t, e, n) {
  const r = he(t),
    i = [],
    s = [],
    o = [];
  r.sc.isEmpty() ||
    (r.sc.forEach((a, l) => {
      o.push(
        r.dc(l, e, n).then((c) => {
          if (c) {
            r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                l.targetId,
                c.fromCache ? "not-current" : "current"
              ),
              i.push(c);
            const u = wh.Ci(l.targetId, c);
            s.push(u);
          }
        })
      );
    }),
    await Promise.all(o),
    r.nc.Wo(i),
    await (async function (a, l) {
      const c = he(a);
      try {
        await c.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (u) =>
            N.forEach(l, (d) =>
              N.forEach(d.Si, (h) =>
                c.persistence.referenceDelegate.addReference(u, d.targetId, h)
              ).next(() =>
                N.forEach(d.Di, (h) =>
                  c.persistence.referenceDelegate.removeReference(
                    u,
                    d.targetId,
                    h
                  )
                )
              )
            )
        );
      } catch (u) {
        if (!xo(u)) throw u;
        Z("LocalStore", "Failed to update sequence numbers: " + u);
      }
      for (const u of l) {
        const d = u.targetId;
        if (!u.fromCache) {
          const h = c.Ui.get(d),
            f = h.snapshotVersion,
            g = h.withLastLimboFreeSnapshotVersion(f);
          c.Ui = c.Ui.insert(d, g);
        }
      }
    })(r.localStore, s));
}
async function Bq(t, e) {
  const n = he(t);
  if (!n.currentUser.isEqual(e)) {
    Z("SyncEngine", "User change. New user:", e.toKey());
    const r = await J_(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.hc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new G(q.CANCELLED, s));
          });
        }),
          i.hc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await No(n, r.ji);
  }
}
function jq(t, e) {
  const n = he(t),
    r = n.uc.get(e);
  if (r && r.ec) return ve().add(r.key);
  {
    let i = ve();
    const s = n.ic.get(e);
    if (!s) return i;
    for (const o of s) {
      const a = n.sc.get(o);
      i = i.unionWith(a.view.Qu);
    }
    return i;
  }
}
function Hq(t) {
  const e = he(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = dw.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = jq.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = $q.bind(null, e)),
    (e.nc.Wo = Sq.bind(null, e.eventManager)),
    (e.nc._c = qq.bind(null, e.eventManager)),
    e
  );
}
function zq(t) {
  const e = he(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = Vq.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = Fq.bind(null, e)),
    e
  );
}
class Wq {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.It = Yl(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.mc(e)),
      (this.persistence = this.gc(e)),
      await this.persistence.start(),
      (this.localStore = this.yc(e)),
      (this.gcScheduler = this.Ic(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Tc(e, this.localStore));
  }
  Ic(e, n) {
    return null;
  }
  Tc(e, n) {
    return null;
  }
  yc(e) {
    return ZS(this.persistence, new XS(), e.initialUser, this.It);
  }
  gc(e) {
    return new QS(_h.Bs, this.It);
  }
  mc(e) {
    return new oq();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class Kq {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        ym(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = Bq.bind(
        null,
        this.syncEngine
      )),
      await Aq(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new kq();
  }
  createDatastore(e) {
    const n = Yl(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new uq(i));
    var i;
    return (function (s, o, a, l) {
      return new fq(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (a) => ym(this.syncEngine, a, 0)),
      (o = mm.C() ? new mm() : new aq()),
      new mq(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, a, l, c) {
      const u = new Oq(r, i, s, o, a, l);
      return c && (u.fc = !0), u;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    );
  }
  terminate() {
    return (async function (e) {
      const n = he(e);
      Z("RemoteStore", "RemoteStore shutting down."),
        n._u.add(5),
        await Do(n),
        n.mu.shutdown(),
        n.gu.set("Unknown");
    })(this.remoteStore);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rh {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.Ac(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.Ac(this.observer.error, e)
      : xn("Uncaught Error in snapshot listener:", e);
  }
  Rc() {
    this.muted = !0;
  }
  Ac(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n);
      }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gq {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = xt.UNAUTHENTICATED),
      (this.clientId = __.R()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        Z("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          Z("FirestoreClient", "Received new app check token=", s),
          this.appCheckCredentialListener(s, this.user)
        )
      );
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new G(
        q.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Tn();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && (await this.onlineComponents.terminate()),
            this.offlineComponents &&
              (await this.offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = Ah(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function Qq(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    Z("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await J_(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function Yq(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await Xq(t);
  Z("FirestoreClient", "Initializing OnlineComponentProvider");
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => gm(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => gm(e.remoteStore, s)),
    (t.onlineComponents = e);
}
async function Xq(t) {
  return (
    t.offlineComponents ||
      (Z("FirestoreClient", "Using default OfflineComponentProvider"),
      await Qq(t, new Wq())),
    t.offlineComponents
  );
}
async function mw(t) {
  return (
    t.onlineComponents ||
      (Z("FirestoreClient", "Using default OnlineComponentProvider"),
      await Yq(t, new Kq())),
    t.onlineComponents
  );
}
function Jq(t) {
  return mw(t).then((e) => e.syncEngine);
}
async function Xa(t) {
  const e = await mw(t),
    n = e.eventManager;
  return (
    (n.onListen = Dq.bind(null, e.syncEngine)),
    (n.onUnlisten = Lq.bind(null, e.syncEngine)),
    n
  );
}
function Zq(t, e, n = {}) {
  const r = new Tn();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const c = new Rh({
            next: (d) => {
              s.enqueueAndForget(() => kh(i, u));
              const h = d.docs.has(o);
              !h && d.fromCache
                ? l.reject(
                    new G(
                      q.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : h && d.fromCache && a && a.source === "server"
                ? l.reject(
                    new G(
                      q.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : l.resolve(d);
            },
            error: (d) => l.reject(d),
          }),
          u = new qh(Hl(o.path), c, { includeMetadataChanges: !0, Nu: !0 });
        return Ch(i, u);
      })(await Xa(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
function ex(t, e, n = {}) {
  const r = new Tn();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const c = new Rh({
            next: (d) => {
              s.enqueueAndForget(() => kh(i, u)),
                d.fromCache && a.source === "server"
                  ? l.reject(
                      new G(
                        q.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : l.resolve(d);
            },
            error: (d) => l.reject(d),
          }),
          u = new qh(o, c, { includeMetadataChanges: !0, Nu: !0 });
        return Ch(i, u);
      })(await Xa(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
const wm = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gw(t, e, n) {
  if (!n)
    throw new G(
      q.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    );
}
function tx(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new G(q.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function bm(t) {
  if (!re.isDocumentKey(t))
    throw new G(
      q.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function Em(t) {
  if (re.isDocumentKey(t))
    throw new G(
      q.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function Zl(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (n) {
        return n.constructor ? n.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : ue();
}
function $t(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new G(
        q.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = Zl(t);
      throw new G(
        q.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tm {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new G(
          q.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new G(
          q.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling =
        !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      tx(
        "experimentalForceLongPolling",
        e.experimentalForceLongPolling,
        "experimentalAutoDetectLongPolling",
        e.experimentalAutoDetectLongPolling
      );
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ph {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new Tm({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new G(
        q.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new G(
        q.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new Tm(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new kk();
          switch (n.type) {
            case "gapi":
              const r = n.client;
              return new xk(
                r,
                n.sessionIndex || "0",
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case "provider":
              return n.client;
            default:
              throw new G(
                q.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (e) {
        const n = wm.get(e);
        n &&
          (Z("ComponentProvider", "Removing Datastore"),
          wm.delete(e),
          n.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yt {
  constructor(e, n, r) {
    (this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = e);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new mr(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new yt(this.firestore, e, this._key);
  }
}
class ds {
  constructor(e, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new ds(this.firestore, e, this._query);
  }
}
class mr extends ds {
  constructor(e, n, r) {
    super(e, n, Hl(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new yt(this.firestore, null, new re(e));
  }
  withConverter(e) {
    return new mr(this.firestore, e, this._path);
  }
}
function nx(t, e, ...n) {
  if (((t = wt(t)), gw("collection", "path", e), t instanceof Ph)) {
    const r = $e.fromString(e, ...n);
    return Em(r), new mr(t, null, r);
  }
  {
    if (!(t instanceof yt || t instanceof mr))
      throw new G(
        q.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child($e.fromString(e, ...n));
    return Em(r), new mr(t.firestore, null, r);
  }
}
function Kt(t, e, ...n) {
  if (
    ((t = wt(t)),
    arguments.length === 1 && (e = __.R()),
    gw("doc", "path", e),
    t instanceof Ph)
  ) {
    const r = $e.fromString(e, ...n);
    return bm(r), new yt(t, null, new re(r));
  }
  {
    if (!(t instanceof yt || t instanceof mr))
      throw new G(
        q.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child($e.fromString(e, ...n));
    return (
      bm(r),
      new yt(t.firestore, t instanceof mr ? t.converter : null, new re(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rx {
  constructor() {
    (this.$c = Promise.resolve()),
      (this.Bc = []),
      (this.Lc = !1),
      (this.Uc = []),
      (this.qc = null),
      (this.Kc = !1),
      (this.Gc = !1),
      (this.Qc = []),
      (this.xo = new ew(this, "async_queue_retry")),
      (this.jc = () => {
        const n = Qc();
        n &&
          Z("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.xo.bo();
      });
    const e = Qc();
    e &&
      typeof e.addEventListener == "function" &&
      e.addEventListener("visibilitychange", this.jc);
  }
  get isShuttingDown() {
    return this.Lc;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Wc(), this.zc(e);
  }
  enterRestrictedMode(e) {
    if (!this.Lc) {
      (this.Lc = !0), (this.Gc = e || !1);
      const n = Qc();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.jc);
    }
  }
  enqueue(e) {
    if ((this.Wc(), this.Lc)) return new Promise(() => {});
    const n = new Tn();
    return this.zc(() =>
      this.Lc && this.Gc
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Bc.push(e), this.Hc()));
  }
  async Hc() {
    if (this.Bc.length !== 0) {
      try {
        await this.Bc[0](), this.Bc.shift(), this.xo.reset();
      } catch (e) {
        if (!xo(e)) throw e;
        Z("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.Bc.length > 0 && this.xo.Ao(() => this.Hc());
    }
  }
  zc(e) {
    const n = this.$c.then(
      () => (
        (this.Kc = !0),
        e()
          .catch((r) => {
            (this.qc = r), (this.Kc = !1);
            const i = (function (s) {
              let o = s.message || "";
              return (
                s.stack &&
                  (o = s.stack.includes(s.message)
                    ? s.stack
                    : s.message +
                      `
` +
                      s.stack),
                o
              );
            })(r);
            throw (xn("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.Kc = !1), r))
      )
    );
    return (this.$c = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.Wc(), this.Qc.indexOf(e) > -1 && (n = 0);
    const i = Ih.createAndSchedule(this, e, n, r, (s) => this.Jc(s));
    return this.Uc.push(i), i;
  }
  Wc() {
    this.qc && ue();
  }
  verifyOperationInProgress() {}
  async Yc() {
    let e;
    do (e = this.$c), await e;
    while (e !== this.$c);
  }
  Xc(e) {
    for (const n of this.Uc) if (n.timerId === e) return !0;
    return !1;
  }
  Zc(e) {
    return this.Yc().then(() => {
      this.Uc.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.Uc)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.Yc();
    });
  }
  ta(e) {
    this.Qc.push(e);
  }
  Jc(e) {
    const n = this.Uc.indexOf(e);
    this.Uc.splice(n, 1);
  }
}
function Im(t) {
  return (function (e, n) {
    if (typeof e != "object" || e === null) return !1;
    const r = e;
    for (const i of n) if (i in r && typeof r[i] == "function") return !0;
    return !1;
  })(t, ["next", "error", "complete"]);
}
class On extends Ph {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = new rx()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || vw(this), this._firestoreClient.terminate();
  }
}
function Bn(t, e) {
  const n = typeof t == "object" ? t : $v(),
    r = typeof t == "string" ? t : e || "(default)";
  return Pd(n, "firestore").getImmediate({ identifier: r });
}
function ec(t) {
  return (
    t._firestoreClient || vw(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function vw(t) {
  var e;
  const n = t._freezeSettings(),
    r = (function (i, s, o, a) {
      return new Uk(
        i,
        s,
        o,
        a.host,
        a.ssl,
        a.experimentalForceLongPolling,
        a.experimentalAutoDetectLongPolling,
        a.useFetchStreams
      );
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "",
      t._persistenceKey,
      n
    );
  t._firestoreClient = new Gq(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    r
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new G(
          q.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new mt(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ji {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new Ji(ut.fromBase64String(e));
    } catch (n) {
      throw new G(
        q.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(e) {
    return new Ji(ut.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ai {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oh {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new G(
        q.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new G(
        q.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n
      );
    (this._lat = e), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return qe(this._lat, e._lat) || qe(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ix = /^__.*__$/;
class sx {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new Tr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new Po(e, this.data, n, this.fieldTransforms);
  }
}
class yw {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return new Tr(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function _w(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw ue();
  }
}
class nc {
  constructor(e, n, r, i, s, o) {
    (this.settings = e),
      (this.databaseId = n),
      (this.It = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.ea(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get na() {
    return this.settings.na;
  }
  sa(e) {
    return new nc(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.It,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  ia(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.sa({ path: r, ra: !1 });
    return i.oa(e), i;
  }
  ua(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.sa({ path: r, ra: !1 });
    return i.ea(), i;
  }
  ca(e) {
    return this.sa({ path: void 0, ra: !0 });
  }
  aa(e) {
    return Ja(
      e,
      this.settings.methodName,
      this.settings.ha || !1,
      this.path,
      this.settings.la
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  ea() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.oa(this.path.get(e));
  }
  oa(e) {
    if (e.length === 0) throw this.aa("Document fields must not be empty");
    if (_w(this.na) && ix.test(e))
      throw this.aa('Document fields cannot begin and end with "__"');
  }
}
class ox {
  constructor(e, n, r) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.It = r || Yl(e));
  }
  fa(e, n, r, i = !1) {
    return new nc(
      { na: e, methodName: n, la: r, path: mt.emptyPath(), ra: !1, ha: i },
      this.databaseId,
      this.It,
      this.ignoreUndefinedProperties
    );
  }
}
function rc(t) {
  const e = t._freezeSettings(),
    n = Yl(t._databaseId);
  return new ox(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function ww(t, e, n, r, i, s = {}) {
  const o = t.fa(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  Nh("Data must be an object, but it was:", o, r);
  const a = Ew(r, o);
  let l, c;
  if (s.merge) (l = new zt(o.fieldMask)), (c = o.fieldTransforms);
  else if (s.mergeFields) {
    const u = [];
    for (const d of s.mergeFields) {
      const h = Qu(e, d, n);
      if (!o.contains(h))
        throw new G(
          q.INVALID_ARGUMENT,
          `Field '${h}' is specified in your field mask but missing from your input data.`
        );
      Iw(u, h) || u.push(h);
    }
    (l = new zt(u)), (c = o.fieldTransforms.filter((d) => l.covers(d.field)));
  } else (l = null), (c = o.fieldTransforms);
  return new sx(new Pt(a), l, c);
}
class ic extends ai {
  _toFieldTransform(e) {
    if (e.na !== 2)
      throw e.na === 1
        ? e.aa(
            `${this._methodName}() can only appear at the top level of your update data`
          )
        : e.aa(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
          );
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof ic;
  }
}
function bw(t, e, n) {
  return new nc(
    { na: 3, la: e.settings.la, methodName: t._methodName, ra: n },
    e.databaseId,
    e.It,
    e.ignoreUndefinedProperties
  );
}
class Dh extends ai {
  _toFieldTransform(e) {
    return new Kl(e.path, new ao());
  }
  isEqual(e) {
    return e instanceof Dh;
  }
}
class ax extends ai {
  constructor(e, n) {
    super(e), (this.da = n);
  }
  _toFieldTransform(e) {
    const n = bw(this, e, !0),
      r = this.da.map((s) => li(s, n)),
      i = new Gi(r);
    return new Kl(e.path, i);
  }
  isEqual(e) {
    return this === e;
  }
}
class lx extends ai {
  constructor(e, n) {
    super(e), (this.da = n);
  }
  _toFieldTransform(e) {
    const n = bw(this, e, !0),
      r = this.da.map((s) => li(s, n)),
      i = new Qi(r);
    return new Kl(e.path, i);
  }
  isEqual(e) {
    return this === e;
  }
}
class cx extends ai {
  constructor(e, n) {
    super(e), (this._a = n);
  }
  _toFieldTransform(e) {
    const n = new lo(e.It, O_(e.It, this._a));
    return new Kl(e.path, n);
  }
  isEqual(e) {
    return this === e;
  }
}
function ux(t, e, n, r) {
  const i = t.fa(1, e, n);
  Nh("Data must be an object, but it was:", i, r);
  const s = [],
    o = Pt.empty();
  si(r, (l, c) => {
    const u = Lh(e, l, n);
    c = wt(c);
    const d = i.ua(u);
    if (c instanceof ic) s.push(u);
    else {
      const h = li(c, d);
      h != null && (s.push(u), o.set(u, h));
    }
  });
  const a = new zt(s);
  return new yw(o, a, i.fieldTransforms);
}
function dx(t, e, n, r, i, s) {
  const o = t.fa(1, e, n),
    a = [Qu(e, r, n)],
    l = [i];
  if (s.length % 2 != 0)
    throw new G(
      q.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let h = 0; h < s.length; h += 2) a.push(Qu(e, s[h])), l.push(s[h + 1]);
  const c = [],
    u = Pt.empty();
  for (let h = a.length - 1; h >= 0; --h)
    if (!Iw(c, a[h])) {
      const f = a[h];
      let g = l[h];
      g = wt(g);
      const y = o.ua(f);
      if (g instanceof ic) c.push(f);
      else {
        const _ = li(g, y);
        _ != null && (c.push(f), u.set(f, _));
      }
    }
  const d = new zt(c);
  return new yw(u, d, o.fieldTransforms);
}
function hx(t, e, n, r = !1) {
  return li(n, t.fa(r ? 4 : 3, e));
}
function li(t, e) {
  if (Tw((t = wt(t)))) return Nh("Unsupported field value:", e, t), Ew(t, e);
  if (t instanceof ai)
    return (
      (function (n, r) {
        if (!_w(r.na))
          throw r.aa(
            `${n._methodName}() can only be used with update() and set()`
          );
        if (!r.path)
          throw r.aa(
            `${n._methodName}() is not currently supported inside arrays`
          );
        const i = n._toFieldTransform(r);
        i && r.fieldTransforms.push(i);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.ra && e.na !== 4)
      throw e.aa("Nested arrays are not supported");
    return (function (n, r) {
      const i = [];
      let s = 0;
      for (const o of n) {
        let a = li(o, r.ca(s));
        a == null && (a = { nullValue: "NULL_VALUE" }), i.push(a), s++;
      }
      return { arrayValue: { values: i } };
    })(t, e);
  }
  return (function (n, r) {
    if ((n = wt(n)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof n == "number") return O_(r.It, n);
    if (typeof n == "boolean") return { booleanValue: n };
    if (typeof n == "string") return { stringValue: n };
    if (n instanceof Date) {
      const i = Xe.fromDate(n);
      return { timestampValue: Qa(r.It, i) };
    }
    if (n instanceof Xe) {
      const i = new Xe(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return { timestampValue: Qa(r.It, i) };
    }
    if (n instanceof Oh)
      return {
        geoPointValue: { latitude: n.latitude, longitude: n.longitude },
      };
    if (n instanceof Ji) return { bytesValue: K_(r.It, n._byteString) };
    if (n instanceof yt) {
      const i = r.databaseId,
        s = n.firestore._databaseId;
      if (!s.isEqual(i))
        throw r.aa(
          `Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`
        );
      return {
        referenceValue: gh(
          n.firestore._databaseId || r.databaseId,
          n._key.path
        ),
      };
    }
    throw r.aa(`Unsupported field value: ${Zl(n)}`);
  })(t, e);
}
function Ew(t, e) {
  const n = {};
  return (
    w_(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : si(t, (r, i) => {
          const s = li(i, e.ia(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function Tw(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof Xe ||
    t instanceof Oh ||
    t instanceof Ji ||
    t instanceof yt ||
    t instanceof ai
  );
}
function Nh(t, e, n) {
  if (
    !Tw(n) ||
    !(function (r) {
      return (
        typeof r == "object" &&
        r !== null &&
        (Object.getPrototypeOf(r) === Object.prototype ||
          Object.getPrototypeOf(r) === null)
      );
    })(n)
  ) {
    const r = Zl(n);
    throw r === "an object" ? e.aa(t + " a custom object") : e.aa(t + " " + r);
  }
}
function Qu(t, e, n) {
  if ((e = wt(e)) instanceof tc) return e._internalPath;
  if (typeof e == "string") return Lh(t, e);
  throw Ja("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const fx = new RegExp("[~\\*/\\[\\]]");
function Lh(t, e, n) {
  if (e.search(fx) >= 0)
    throw Ja(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new tc(...e.split("."))._internalPath;
  } catch {
    throw Ja(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function Ja(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += " (via `toFirestore()`)"), (a += ". ");
  let l = "";
  return (
    (s || o) &&
      ((l += " (found"),
      s && (l += ` in field ${r}`),
      o && (l += ` in document ${i}`),
      (l += ")")),
    new G(q.INVALID_ARGUMENT, a + t + l)
  );
}
function Iw(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Aw {
  constructor(e, n, r, i, s) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new yt(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new px(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(Mh("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class px extends Aw {
  data() {
    return super.data();
  }
}
function Mh(t, e) {
  return typeof e == "string"
    ? Lh(t, e)
    : e instanceof tc
    ? e._internalPath
    : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ts {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class Cw extends Aw {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new _a(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(Mh("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class _a extends Cw {
  data(e = {}) {
    return super.data(e);
  }
}
class kw {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new Ts(i.hasPendingWrites, i.fromCache)),
      (this.query = r);
  }
  get docs() {
    const e = [];
    return this.forEach((n) => e.push(n)), e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new _a(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new Ts(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new G(
        q.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (r, i) {
          if (r._snapshot.oldDocs.isEmpty()) {
            let s = 0;
            return r._snapshot.docChanges.map((o) => ({
              type: "added",
              doc: new _a(
                r._firestore,
                r._userDataWriter,
                o.doc.key,
                o.doc,
                new Ts(
                  r._snapshot.mutatedKeys.has(o.doc.key),
                  r._snapshot.fromCache
                ),
                r.query.converter
              ),
              oldIndex: -1,
              newIndex: s++,
            }));
          }
          {
            let s = r._snapshot.oldDocs;
            return r._snapshot.docChanges
              .filter((o) => i || o.type !== 3)
              .map((o) => {
                const a = new _a(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new Ts(
                    r._snapshot.mutatedKeys.has(o.doc.key),
                    r._snapshot.fromCache
                  ),
                  r.query.converter
                );
                let l = -1,
                  c = -1;
                return (
                  o.type !== 0 &&
                    ((l = s.indexOf(o.doc.key)), (s = s.delete(o.doc.key))),
                  o.type !== 1 &&
                    ((s = s.add(o.doc)), (c = s.indexOf(o.doc.key))),
                  { type: mx(o.type), doc: a, oldIndex: l, newIndex: c }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function mx(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return ue();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sw(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new G(
      q.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class gx {}
function vx(t, ...e) {
  for (const n of e) t = n._apply(t);
  return t;
}
class yx extends gx {
  constructor(e, n, r) {
    super(), (this.wa = e), (this.ma = n), (this.ga = r), (this.type = "where");
  }
  _apply(e) {
    const n = rc(e.firestore),
      r = (function (i, s, o, a, l, c, u) {
        let d;
        if (l.isKeyField()) {
          if (c === "array-contains" || c === "array-contains-any")
            throw new G(
              q.INVALID_ARGUMENT,
              `Invalid Query. You can't perform '${c}' queries on documentId().`
            );
          if (c === "in" || c === "not-in") {
            Cm(u, c);
            const f = [];
            for (const g of u) f.push(Am(a, i, g));
            d = { arrayValue: { values: f } };
          } else d = Am(a, i, u);
        } else
          (c !== "in" && c !== "not-in" && c !== "array-contains-any") ||
            Cm(u, c),
            (d = hx(o, s, u, c === "in" || c === "not-in"));
        const h = Ct.create(l, c, d);
        return (
          (function (f, g) {
            if (g.dt()) {
              const _ = k_(f);
              if (_ !== null && !_.isEqual(g.field))
                throw new G(
                  q.INVALID_ARGUMENT,
                  `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${g.field.toString()}'`
                );
              const T = C_(f);
              T !== null && wx(f, g.field, T);
            }
            const y = (function (_, T) {
              for (const v of _.filters) if (T.indexOf(v.op) >= 0) return v.op;
              return null;
            })(
              f,
              (function (_) {
                switch (_) {
                  case "!=":
                    return ["!=", "not-in"];
                  case "array-contains":
                    return ["array-contains", "array-contains-any", "not-in"];
                  case "in":
                    return ["array-contains-any", "in", "not-in"];
                  case "array-contains-any":
                    return [
                      "array-contains",
                      "array-contains-any",
                      "in",
                      "not-in",
                    ];
                  case "not-in":
                    return [
                      "array-contains",
                      "array-contains-any",
                      "in",
                      "not-in",
                      "!=",
                    ];
                  default:
                    return [];
                }
              })(g.op)
            );
            if (y !== null)
              throw y === g.op
                ? new G(
                    q.INVALID_ARGUMENT,
                    `Invalid query. You cannot use more than one '${g.op.toString()}' filter.`
                  )
                : new G(
                    q.INVALID_ARGUMENT,
                    `Invalid query. You cannot use '${g.op.toString()}' filters with '${y.toString()}' filters.`
                  );
          })(i, h),
          h
        );
      })(
        e._query,
        "where",
        n,
        e.firestore._databaseId,
        this.wa,
        this.ma,
        this.ga
      );
    return new ds(
      e.firestore,
      e.converter,
      (function (i, s) {
        const o = i.filters.concat([s]);
        return new Ro(
          i.path,
          i.collectionGroup,
          i.explicitOrderBy.slice(),
          o,
          i.limit,
          i.limitType,
          i.startAt,
          i.endAt
        );
      })(e._query, r)
    );
  }
}
function _x(t, e, n) {
  const r = e,
    i = Mh("where", t);
  return new yx(i, r, n);
}
function Am(t, e, n) {
  if (typeof (n = wt(n)) == "string") {
    if (n === "")
      throw new G(
        q.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
      );
    if (!S_(e) && n.indexOf("/") !== -1)
      throw new G(
        q.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
      );
    const r = e.path.child($e.fromString(n));
    if (!re.isDocumentKey(r))
      throw new G(
        q.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
      );
    return Jp(t, new re(r));
  }
  if (n instanceof yt) return Jp(t, n._key);
  throw new G(
    q.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zl(
      n
    )}.`
  );
}
function Cm(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new G(
      q.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
    );
  if (t.length > 10)
    throw new G(
      q.INVALID_ARGUMENT,
      `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`
    );
}
function wx(t, e, n) {
  if (!n.isEqual(e))
    throw new G(
      q.INVALID_ARGUMENT,
      `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`
    );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bx {
  convertValue(e, n = "none") {
    switch (ti(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ze(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Wi(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw ue();
    }
  }
  convertObject(e, n) {
    const r = {};
    return (
      si(e.fields, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new Oh(ze(e.latitude), ze(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = E_(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(io(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = _r(e);
    return new Xe(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = $e.fromString(e);
    Le(X_(r));
    const i = new T_(r.get(1), r.get(3)),
      s = new re(r.popFirst(5));
    return (
      i.isEqual(n) ||
        xn(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qw(t, e, n) {
  let r;
  return (
    (r = t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e),
    r
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xw(t) {
  t = $t(t, yt);
  const e = $t(t.firestore, On);
  return Zq(ec(e), t._key).then((n) => Rw(e, t, n));
}
class $h extends bx {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new Ji(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new yt(this.firestore, null, n);
  }
}
function Ex(t) {
  t = $t(t, ds);
  const e = $t(t.firestore, On),
    n = ec(e),
    r = new $h(e);
  return Sw(t._query), ex(n, t._query).then((i) => new kw(e, r, t, i));
}
function Tx(t, e, n) {
  t = $t(t, yt);
  const r = $t(t.firestore, On),
    i = qw(t.converter, e, n);
  return sc(r, [
    ww(rc(r), "setDoc", t._key, i, t.converter !== null, n).toMutation(
      t._key,
      Wt.none()
    ),
  ]);
}
function Lo(t, e, n, ...r) {
  t = $t(t, yt);
  const i = $t(t.firestore, On),
    s = rc(i);
  let o;
  return (
    (o =
      typeof (e = wt(e)) == "string" || e instanceof tc
        ? dx(s, "updateDoc", t._key, e, n, r)
        : ux(s, "updateDoc", t._key, e)),
    sc(i, [o.toMutation(t._key, Wt.exists(!0))])
  );
}
function dL(t) {
  return sc($t(t.firestore, On), [new mh(t._key, Wt.none())]);
}
function hL(t, e) {
  const n = $t(t.firestore, On),
    r = Kt(t),
    i = qw(t.converter, e);
  return sc(n, [
    ww(
      rc(t.firestore),
      "addDoc",
      r._key,
      i,
      t.converter !== null,
      {}
    ).toMutation(r._key, Wt.exists(!1)),
  ]).then(() => r);
}
function Vh(t, ...e) {
  var n, r, i;
  t = wt(t);
  let s = { includeMetadataChanges: !1 },
    o = 0;
  typeof e[o] != "object" || Im(e[o]) || ((s = e[o]), o++);
  const a = { includeMetadataChanges: s.includeMetadataChanges };
  if (Im(e[o])) {
    const d = e[o];
    (e[o] = (n = d.next) === null || n === void 0 ? void 0 : n.bind(d)),
      (e[o + 1] = (r = d.error) === null || r === void 0 ? void 0 : r.bind(d)),
      (e[o + 2] =
        (i = d.complete) === null || i === void 0 ? void 0 : i.bind(d));
  }
  let l, c, u;
  if (t instanceof yt)
    (c = $t(t.firestore, On)),
      (u = Hl(t._key.path)),
      (l = {
        next: (d) => {
          e[o] && e[o](Rw(c, t, d));
        },
        error: e[o + 1],
        complete: e[o + 2],
      });
  else {
    const d = $t(t, ds);
    (c = $t(d.firestore, On)), (u = d._query);
    const h = new $h(c);
    (l = {
      next: (f) => {
        e[o] && e[o](new kw(c, h, d, f));
      },
      error: e[o + 1],
      complete: e[o + 2],
    }),
      Sw(t._query);
  }
  return (function (d, h, f, g) {
    const y = new Rh(g),
      _ = new qh(h, y, f);
    return (
      d.asyncQueue.enqueueAndForget(async () => Ch(await Xa(d), _)),
      () => {
        y.Rc(), d.asyncQueue.enqueueAndForget(async () => kh(await Xa(d), _));
      }
    );
  })(ec(c), u, a, l);
}
function sc(t, e) {
  return (function (n, r) {
    const i = new Tn();
    return (
      n.asyncQueue.enqueueAndForget(async () => Mq(await Jq(n), r, i)),
      i.promise
    );
  })(ec(t), e);
}
function Rw(t, e, n) {
  const r = n.docs.get(e._key),
    i = new $h(t);
  return new Cw(
    t,
    i,
    e._key,
    r,
    new Ts(n.hasPendingWrites, n.fromCache),
    e.converter
  );
}
function fL() {
  return new Dh("serverTimestamp");
}
function Pw(...t) {
  return new ax("arrayUnion", t);
}
function pL(...t) {
  return new lx("arrayRemove", t);
}
function Ow(t) {
  return new cx("increment", t);
}
(function (t, e = !0) {
  (function (n) {
    ls = n;
  })(go),
    Bi(
      new Yr(
        "firestore",
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider("app").getImmediate(),
            o = new On(
              new Sk(n.getProvider("auth-internal")),
              new Pk(n.getProvider("app-check-internal")),
              (function (a, l) {
                if (
                  !Object.prototype.hasOwnProperty.apply(a.options, [
                    "projectId",
                  ])
                )
                  throw new G(
                    q.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new T_(a.options.projectId, l);
              })(s, r),
              s
            );
          return (
            (i = Object.assign({ useFetchStreams: e }, i)), o._setSettings(i), o
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    pr(Wp, "3.5.0", t),
    pr(Wp, "3.5.0", "esm2017");
})();
const Dw = {
    0: "",
    1: "mundano-no-text-banner-icon.png",
    2: "recruta-no-text-banner-icon.png",
    3: "operador-no-text-banner-icon.png",
    4: "agente-especial-no-text-banner-icon.png",
    5: "agente-de-elite-no-text-banner-icon.png",
    6: "parceiro-no-text-banner.webp",
    7: "equipe-no-text-banner.webp",
  },
  mL = {
    0: "Nenhuma",
    1: "Mundano",
    2: "Recruta",
    3: "Operador",
    4: "Agente Especial",
    5: "Agente de Elite",
    6: "Parceiro",
    7: "Equipe",
  },
  Rt = {
    mundano: "#FFFFFF",
    recruta: "#006BB8",
    operador: "#2EA802",
    agenteEspecial: "#BFB200",
    agenteElite: "#CF0078",
    parceiro: "#00cba8",
    equipe: "#7a1fa9",
  },
  oc = [
    "Marcas Fragmentadas está no CRIS!",
    "@ArquivosConfidenciais vazados no cris!",
    "O @CultodaCriacao chegou no CRIS!",
    "Novas armas chegaram no CRIS!",
    "A @TocaDosMonstros esta no CRIS!",
    "Criaturas invadem o CRIS!",
  ],
  ci = (t) => (Mn("data-v-9b8d1595"), (t = t()), $n(), t),
  Ix = { class: "header" },
  Ax = { class: "header-content" },
  Cx = ["onMouseup"],
  kx = ci(() =>
    w("img", { class: "cris-icon", src: kv, alt: "cris icon" }, null, -1)
  ),
  Sx = ci(() =>
    w("img", { class: "cris-text", src: Sv, alt: "cris logo" }, null, -1)
  ),
  qx = [kx, Sx],
  xx = { key: 0, class: "nav-container" },
  Rx = ci(() =>
    w(
      "a",
      {
        class: "nav-link",
        href: "https://www.catarse.me/crisordemparanormal",
        target: "_blank",
      },
      " Rank ",
      -1
    )
  ),
  Px = { key: 1 },
  Ox = { key: 0, class: "nav-end-container" },
  Dx = { key: 1, class: "nav-end-container" },
  Nx = ["src"],
  Lx = { id: "user-button", class: "profile-picture-container" },
  Mx = ["src"],
  $x = ci(() => w("div", { class: "header-line" }, null, -1)),
  Vx = { key: 0, class: "notification-number" },
  Fx = { class: "dropdown-buttons-container" },
  Ux = ci(() =>
    w("img", { class: "icon", src: qv, alt: "ver perfil" }, null, -1)
  ),
  Bx = ci(() =>
    w("img", { class: "icon", src: xv, alt: "notificações" }, null, -1)
  ),
  jx = { key: 0, class: "notification-number-button" },
  Hx = ci(() => w("img", { class: "icon", src: Rv, alt: "logout" }, null, -1)),
  zx = Ge({
    __name: "HeaderDesktopView",
    emits: ["handleOpenNotificationsModal"],
    setup(t, { emit: e }) {
      bl((V) => ({ "1772974e": E.value }));
      const n = Un(),
        r = Bn(),
        i = qd(),
        s = is(),
        o = ne(!1),
        a = ne(!0),
        l = ne(),
        c = ne(),
        u = ne(!1),
        d = ne(null);
      Ra(d, (V) => {
        (V.target && V.target.id === "user-button") || (u.value = !1);
      });
      const h = e,
        f = () => {
          const V = new Mt();
          V.setCustomParameters({ prompt: "select_account" }), Xs(n, V);
        },
        g = () => {
          l.value &&
            ((u.value = !1),
            i.push({ name: "user-profile", params: { id: l.value.uid } }));
        },
        y = () => {
          sy(n), (u.value = !1), i.push({ name: "home" });
        },
        _ = () => {
          (u.value = !1), h("handleOpenNotificationsModal");
        },
        T = (V) => {
          if (a.value) return;
          const z = new Mt();
          z.setCustomParameters({ prompt: "select_account" }),
            Xs(n, z).then(() => {
              i.push({ name: V });
            });
        },
        v = () => {
          const V = i.resolve({ name: "home" });
          window.open(V.href, "_blank");
        };
      tn(() => {
        ss(n, async (V) => {
          V
            ? ((o.value = !0),
              (c.value = Vh(Kt(r, "users", V.uid), (z) => {
                z.data() && (l.value = z.data());
              })))
            : (o.value = !1),
            (a.value = !1);
        });
      }),
        rs(() => {
          c.value && c.value();
        });
      const k = (V) => !!s.path.includes(V),
        E = ge(() => {
          if (l.value)
            return l.value.tier === 1
              ? Rt.mundano
              : l.value.tier === 2
              ? Rt.recruta
              : l.value.tier === 3
              ? Rt.operador
              : l.value.tier === 4
              ? Rt.agenteEspecial
              : l.value.tier === 5
              ? Rt.agenteElite
              : l.value.tier === 6
              ? Rt.parceiro
              : l.value.tier === 7
              ? Rt.equipe
              : "transparent";
        }),
        O = ge(() => {
          if (!l.value) return 0;
          let V = l.value.notifications;
          return V || (V = []), oc.length - V.length;
        });
      return (V, z) => {
        var B, ee;
        const L = Cn("router-link");
        return (
          R(),
          H(
            Ue,
            null,
            [
              w("div", Ix, [
                w("div", Ax, [
                  w(
                    "div",
                    {
                      class: "logo",
                      onClick:
                        z[0] ||
                        (z[0] = (fe) => V.$router.push({ name: "home" })),
                      onMouseup: an(v, ["middle"]),
                      onMousedown:
                        z[1] ||
                        (z[1] = an(() => {}, ["middle", "prevent", "stop"])),
                    },
                    qx,
                    40,
                    Cx
                  ),
                  a.value
                    ? Oe("", !0)
                    : (R(),
                      H("div", xx, [
                        o.value
                          ? (R(),
                            xe(
                              L,
                              {
                                key: 0,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": k("agente") },
                                ]),
                                to: { name: "character-list" },
                              },
                              { default: je(() => [lt(" Agents ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 1,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": k("agente") },
                                ]),
                                onClick:
                                  z[2] || (z[2] = (fe) => T("character-list")),
                              },
                              " Agents ",
                              2
                            )),
                        o.value
                          ? (R(),
                            xe(
                              L,
                              {
                                key: 2,
                                class: Ne([
                                  "nav-link",
                                  {
                                    "link-border": k("campanha") || k("escudo"),
                                  },
                                ]),
                                to: { name: "campaigns-list" },
                              },
                              { default: je(() => [lt(" Campaigns ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 3,
                                class: Ne([
                                  "nav-link",
                                  {
                                    "link-border": k("campanha") || k("escudo"),
                                  },
                                ]),
                                onClick:
                                  z[3] || (z[3] = (fe) => T("campaigns-list")),
                              },
                              " Campaigns ",
                              2
                            )),
                        o.value
                          ? (R(),
                            xe(
                              L,
                              {
                                key: 4,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": k("ameaca") },
                                ]),
                                to: { name: "creatures-list" },
                              },
                              { default: je(() => [lt(" Threats ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 5,
                                class: Ne([
                                  "nav-link",
                                  {
                                    "link-border": k("campanha") || k("escudo"),
                                  },
                                ]),
                                onClick:
                                  z[4] || (z[4] = (fe) => T("creatures-list")),
                              },
                              " Threats ",
                              2
                            )),
                        o.value
                          ? (R(),
                            xe(
                              L,
                              {
                                key: 6,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": k("homebrew") },
                                ]),
                                to: { name: "homebrews-list" },
                              },
                              { default: je(() => [lt(" Homebrew ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 7,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": k("homebrew") },
                                ]),
                                onClick:
                                  z[5] || (z[5] = (fe) => T("/homebrews")),
                              },
                              " Homebrew ",
                              2
                            )),
                        Rx,
                      ])),
                  a.value
                    ? Oe("", !0)
                    : (R(),
                      H("div", Px, [
                        o.value
                          ? (R(),
                            H("div", Dx, [
                              l.value
                                ? (R(),
                                  H(
                                    "button",
                                    {
                                      key: 0,
                                      id: "user-button",
                                      class: "user-button",
                                      onClick:
                                        z[6] ||
                                        (z[6] = (fe) => (u.value = !u.value)),
                                    },
                                    [
                                      l.value.tier > 0
                                        ? (R(),
                                          H(
                                            "img",
                                            {
                                              key: 0,
                                              id: "user-button",
                                              class: "tier-picture",
                                              src: `/img/${
                                                Ye(Dw)[l.value.tier]
                                              }`,
                                              alt: "banner",
                                            },
                                            null,
                                            8,
                                            Nx
                                          ))
                                        : Oe("", !0),
                                      w("div", Lx, [
                                        w(
                                          "img",
                                          {
                                            id: "user-button",
                                            class: "profile-picture",
                                            src:
                                              ((B = l.value) == null
                                                ? void 0
                                                : B.pictureURL) ||
                                              ((ee = Ye(n).currentUser) == null
                                                ? void 0
                                                : ee.photoURL) ||
                                              "../assets/blank-profile-picture.png",
                                            alt: "foto agente",
                                          },
                                          null,
                                          8,
                                          Mx
                                        ),
                                      ]),
                                    ]
                                  ))
                                : Oe("", !0),
                            ]))
                          : (R(),
                            H("div", Ox, [
                              w(
                                "button",
                                {
                                  class: "button-primary login-button",
                                  onClick: f,
                                },
                                " LOGIN "
                              ),
                            ])),
                      ])),
                ]),
              ]),
              $x,
              O.value > 0 ? (R(), H("div", Vx, ur(O.value), 1)) : Oe("", !0),
              me(
                vr,
                { name: "settings" },
                {
                  default: je(() => [
                    u.value
                      ? (R(),
                        H(
                          "div",
                          {
                            key: 0,
                            ref_key: "dropdown",
                            ref: d,
                            class: "dropdown-container",
                          },
                          [
                            w("div", Fx, [
                              w(
                                "div",
                                { class: "button-container", onClick: g },
                                [
                                  Ux,
                                  w(
                                    "button",
                                    {
                                      class:
                                        "button-naked dropdown-action-button",
                                      onClick: g,
                                    },
                                    " Ver Perfil "
                                  ),
                                ]
                              ),
                              w(
                                "div",
                                { class: "button-container", onClick: _ },
                                [
                                  Bx,
                                  w(
                                    "button",
                                    {
                                      class:
                                        "button-naked dropdown-action-button",
                                      onClick: _,
                                    },
                                    " Notificações "
                                  ),
                                  O.value > 0
                                    ? (R(), H("div", jx, ur(O.value), 1))
                                    : Oe("", !0),
                                ]
                              ),
                              w(
                                "div",
                                { class: "button-container", onClick: y },
                                [
                                  Hx,
                                  w(
                                    "button",
                                    {
                                      class:
                                        "button-naked dropdown-action-button",
                                      onClick: y,
                                    },
                                    " Desconectar "
                                  ),
                                ]
                              ),
                            ]),
                          ],
                          512
                        ))
                      : Oe("", !0),
                  ]),
                  _: 1,
                }
              ),
            ],
            64
          )
        );
      };
    },
  }),
  bt = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, i] of e) n[r] = i;
    return n;
  },
  Wx = bt(zx, [["__scopeId", "data-v-9b8d1595"]]),
  Kx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAWSURBVHgBY6AFYP4PBAewUoPbFMoBAE11OPW6yVcZAAAAAElFTkSuQmCC",
  ac =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012%2019%206.41z'/%3e%3c/svg%3e",
  Nw = "/assets/discord-icon-8DNfz9TA.png",
  Lw = "/assets/twitter-icon-aO3qts0R.png",
  Mw = "/assets/twitch-icon-BrV9MfMk.png",
  ui = (t) => (Mn("data-v-2d4e8205"), (t = t()), $n(), t),
  Gx = { key: 0, class: "header-closed" },
  Qx = ui(() =>
    w("img", { class: "open-header-img", src: Kx, alt: "fechar" }, null, -1)
  ),
  Yx = [Qx],
  Xx = { key: 0, class: "notification-number" },
  Jx = { class: "header" },
  Zx = { class: "header-row" },
  eR = ui(() => w("img", { src: ac, alt: "fechar" }, null, -1)),
  tR = [eR],
  nR = { key: 0 },
  rR = { key: 1 },
  iR = ["src"],
  sR = { id: "user-button", class: "profile-picture-container" },
  oR = ["src"],
  aR = { key: 1, class: "notification-number-button" },
  lR = { class: "dropdown-buttons-container" },
  cR = ui(() =>
    w("img", { class: "icon", src: qv, alt: "ver perfil" }, null, -1)
  ),
  uR = ui(() =>
    w("img", { class: "icon", src: xv, alt: "notificações" }, null, -1)
  ),
  dR = { key: 0, class: "notification-number-button-2" },
  hR = ui(() => w("img", { class: "icon", src: Rv, alt: "logout" }, null, -1)),
  fR = ui(() =>
    w("img", { class: "cris-icon", src: kv, alt: "cris icon" }, null, -1)
  ),
  pR = ui(() =>
    w("img", { class: "cris-text", src: Sv, alt: "cris logo" }, null, -1)
  ),
  mR = [fR, pR],
  gR = { key: 0, class: "nav-container" },
  vR = nn(
    '<div class="icon-links-container" data-v-2d4e8205><a class="link" href="https://discord.gg/c-r-i-s-ordem-paranormal-1024034430169395292" target="_blank" data-v-2d4e8205><img class="icon" src="' +
      Nw +
      '" alt="discord" data-v-2d4e8205></a><a class="link" href="https://twitter.com/CrisOrdemPrnml" target="_blank" data-v-2d4e8205><img class="icon" src="' +
      Lw +
      '" alt="twitter" data-v-2d4e8205></a><a class="link" href="https://www.twitch.tv/powered_by_soul" target="_blank" data-v-2d4e8205><img class="icon" src="' +
      Mw +
      '" alt="twitch" data-v-2d4e8205></a></div>',
    1
  ),
  yR = Ge({
    __name: "HeaderMobileView",
    emits: ["handleOpenNotificationsModal"],
    setup(t, { emit: e }) {
      bl((L) => ({ a5e3d274: V.value }));
      const n = Un(),
        r = Bn(),
        i = qd(),
        s = is(),
        o = ne(!1),
        a = ne(!0),
        l = ne(!1),
        c = ne(null),
        u = ne(),
        d = ne(),
        h = ne(!1),
        f = ne(null);
      Ra(f, (L) => {
        (L.target && L.target.id === "user-button") || (h.value = !1);
      });
      const g = e,
        y = () => {
          const L = new Mt();
          L.setCustomParameters({ prompt: "select_account" }), Xs(n, L);
        },
        _ = () => {
          var L;
          u.value &&
            ((h.value = !1),
            (l.value = !1),
            i.push({
              name: "user-profile",
              params: { id: (L = u.value) == null ? void 0 : L.uid },
            }));
        },
        T = () => {
          sy(n), (h.value = !1), (l.value = !1), i.push({ name: "home" });
        },
        v = () => {
          (h.value = !1), (l.value = !1), g("handleOpenNotificationsModal");
        },
        k = () => {
          (l.value = !1), i.push({ name: "home" });
        },
        E = (L) => {
          if (a.value) return;
          const B = new Mt();
          B.setCustomParameters({ prompt: "select_account" }),
            Xs(n, B).then(() => {
              (l.value = !l.value), i.push({ name: L });
            });
        };
      tn(() => {
        ss(n, async (L) => {
          L
            ? ((o.value = !0),
              (d.value = Vh(Kt(r, "users", L.uid), (B) => {
                B.data() && (u.value = B.data());
              })))
            : (o.value = !1),
            (a.value = !1);
        });
      }),
        rs(() => {
          d.value && d.value();
        }),
        Ra(c, () => (l.value = !l.value));
      const O = (L) => !!s.path.includes(L),
        V = ge(() => {
          if (u.value)
            return u.value.tier === 1
              ? Rt.mundano
              : u.value.tier === 2
              ? Rt.recruta
              : u.value.tier === 3
              ? Rt.operador
              : u.value.tier === 4
              ? Rt.agenteEspecial
              : u.value.tier === 5
              ? Rt.agenteElite
              : u.value.tier === 6
              ? Rt.parceiro
              : u.value.tier === 7
              ? Rt.equipe
              : "transparent";
        }),
        z = ge(() => {
          if (!u.value) return 0;
          let L = u.value.notifications;
          return L || (L = []), oc.length - L.length;
        });
      return (L, B) => {
        var fe, j;
        const ee = Cn("router-link");
        return l.value
          ? (R(),
            H(
              "div",
              { key: 1, ref_key: "menuRef", ref: c },
              [
                w("div", Jx, [
                  w("div", Zx, [
                    w(
                      "button",
                      {
                        class: "close-header-button button-naked",
                        onClick: B[1] || (B[1] = (se) => (l.value = !l.value)),
                      },
                      tR
                    ),
                    w("div", null, [
                      o.value
                        ? (R(),
                          H("div", rR, [
                            u.value
                              ? (R(),
                                H(
                                  "button",
                                  {
                                    key: 0,
                                    id: "user-button",
                                    class: "user-button",
                                    onClick:
                                      B[2] ||
                                      (B[2] = (se) => (h.value = !h.value)),
                                  },
                                  [
                                    u.value.tier > 0
                                      ? (R(),
                                        H(
                                          "img",
                                          {
                                            key: 0,
                                            id: "user-button",
                                            class: "tier-picture",
                                            src: `/img/${Ye(Dw)[u.value.tier]}`,
                                            alt: "banner",
                                          },
                                          null,
                                          8,
                                          iR
                                        ))
                                      : Oe("", !0),
                                    w("div", sR, [
                                      w(
                                        "img",
                                        {
                                          id: "user-button",
                                          class: "profile-picture",
                                          src:
                                            ((fe = u.value) == null
                                              ? void 0
                                              : fe.pictureURL) ||
                                            ((j = Ye(n).currentUser) == null
                                              ? void 0
                                              : j.photoURL) ||
                                            "../assets/blank-profile-picture.png",
                                          alt: "foto agente",
                                        },
                                        null,
                                        8,
                                        oR
                                      ),
                                    ]),
                                  ]
                                ))
                              : Oe("", !0),
                            l.value && z.value > 0
                              ? (R(), H("div", aR, ur(z.value), 1))
                              : Oe("", !0),
                            me(
                              vr,
                              { name: "settings" },
                              {
                                default: je(() => [
                                  h.value
                                    ? (R(),
                                      H(
                                        "div",
                                        {
                                          key: 0,
                                          ref_key: "dropdown",
                                          ref: f,
                                          class: "dropdown-container",
                                        },
                                        [
                                          w("div", lR, [
                                            w(
                                              "div",
                                              {
                                                class: "button-container",
                                                onClick: _,
                                              },
                                              [
                                                cR,
                                                w(
                                                  "button",
                                                  {
                                                    class:
                                                      "button-naked dropdown-action-button",
                                                    onClick: _,
                                                  },
                                                  " Ver Perfil "
                                                ),
                                              ]
                                            ),
                                            w(
                                              "div",
                                              {
                                                class: "button-container",
                                                onClick: v,
                                              },
                                              [
                                                uR,
                                                w(
                                                  "button",
                                                  {
                                                    class:
                                                      "button-naked dropdown-action-button",
                                                    onClick: v,
                                                  },
                                                  " Notificações "
                                                ),
                                                z.value > 0
                                                  ? (R(),
                                                    H(
                                                      "div",
                                                      dR,
                                                      ur(z.value),
                                                      1
                                                    ))
                                                  : Oe("", !0),
                                              ]
                                            ),
                                            w(
                                              "div",
                                              {
                                                class: "button-container",
                                                onClick: T,
                                              },
                                              [
                                                hR,
                                                w(
                                                  "button",
                                                  {
                                                    class:
                                                      "button-naked dropdown-action-button",
                                                    onClick: T,
                                                  },
                                                  " Desconectar "
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ],
                                        512
                                      ))
                                    : Oe("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                          ]))
                        : (R(),
                          H("div", nR, [
                            w(
                              "button",
                              {
                                class: "button-primary login-button",
                                onClick: y,
                              },
                              " LOGIN "
                            ),
                          ])),
                    ]),
                  ]),
                  w("div", { class: "logo", onClick: k }, mR),
                  a.value
                    ? Oe("", !0)
                    : (R(),
                      H("div", gR, [
                        o.value
                          ? (R(),
                            xe(
                              ee,
                              {
                                key: 0,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": O("agente") },
                                ]),
                                to: { name: "character-list" },
                                onClick:
                                  B[3] || (B[3] = (se) => (l.value = !l.value)),
                              },
                              { default: je(() => [lt(" Agents ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 1,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": O("agente") },
                                ]),
                                onClick:
                                  B[4] || (B[4] = (se) => E("character-list")),
                              },
                              " Agents ",
                              2
                            )),
                        o.value
                          ? (R(),
                            xe(
                              ee,
                              {
                                key: 2,
                                class: Ne([
                                  "nav-link",
                                  {
                                    "link-border": O("campanha") || O("escudo"),
                                  },
                                ]),
                                to: { name: "campaigns-list" },
                                onClick:
                                  B[5] || (B[5] = (se) => (l.value = !l.value)),
                              },
                              { default: je(() => [lt(" Campaigns ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 3,
                                class: Ne([
                                  "nav-link",
                                  {
                                    "link-border": O("campanha") || O("escudo"),
                                  },
                                ]),
                                onClick:
                                  B[6] || (B[6] = (se) => E("campaigns-list")),
                              },
                              " Campaigns ",
                              2
                            )),
                        o.value
                          ? (R(),
                            xe(
                              ee,
                              {
                                key: 4,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": O("ameaca") },
                                ]),
                                to: { name: "creatures-list" },
                                onClick:
                                  B[7] || (B[7] = (se) => (l.value = !l.value)),
                              },
                              { default: je(() => [lt(" Threats ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 5,
                                class: Ne([
                                  "nav-link",
                                  {
                                    "link-border": O("campanha") || O("escudo"),
                                  },
                                ]),
                                onClick:
                                  B[8] || (B[8] = (se) => E("creatures-list")),
                              },
                              " Threats ",
                              2
                            )),
                        o.value
                          ? (R(),
                            xe(
                              ee,
                              {
                                key: 6,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": O("homebrew") },
                                ]),
                                to: { name: "homebrews-list" },
                                onClick:
                                  B[9] || (B[9] = (se) => (l.value = !l.value)),
                              },
                              { default: je(() => [lt(" Homebrew ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (R(),
                            H(
                              "div",
                              {
                                key: 7,
                                class: Ne([
                                  "nav-link",
                                  { "link-border": O("homebrew") },
                                ]),
                                onClick:
                                  B[10] || (B[10] = (se) => E("homebrew-list")),
                              },
                              " Homebrew ",
                              2
                            )),
                        w(
                          "a",
                          {
                            class: "nav-link",
                            href: "https://www.catarse.me/crisordemparanormal",
                            target: "_blank",
                            onClick:
                              B[11] || (B[11] = (se) => (l.value = !l.value)),
                          },
                          " Rank "
                        ),
                      ])),
                  vR,
                ]),
              ],
              512
            ))
          : (R(),
            H("div", Gx, [
              w(
                "button",
                {
                  class: "open-header-button button-naked",
                  onClick: B[0] || (B[0] = (se) => (l.value = !l.value)),
                },
                Yx
              ),
              z.value > 0 ? (R(), H("div", Xx, ur(z.value), 1)) : Oe("", !0),
            ]));
      };
    },
  }),
  _R = bt(yR, [["__scopeId", "data-v-2d4e8205"]]),
  wR = "/assets/culto-da-criaca-update-T7_fJaPU.webp",
  bR = {},
  ER = { class: "notification-container" },
  TR = nn(
    '<div class="title" data-v-ef037860> O @CultodaCriacao chegou no CRIS! </div><div class="img-container" data-v-ef037860><a href="https://x.com/CrisOrdemPrnml/status/1828191374245798113" target="_blank" data-v-ef037860><img class="img" src="' +
      wR +
      '" alt="O Culto da Criação chegou no CRIS!" data-v-ef037860></a></div><div class="content" data-v-ef037860> Um novo culto está no CRIS! E com eles vem uma nova onda de criaturas para vocês enfrentarem! </div><div class="link" data-v-ef037860><a class="link" href="https://x.com/CrisOrdemPrnml/status/1828191374245798113" target="_blank" data-v-ef037860> Confira mais aqui! </a></div>',
    4
  ),
  IR = [TR];
function AR(t, e) {
  return R(), H("div", ER, IR);
}
const $w = bt(bR, [
    ["render", AR],
    ["__scopeId", "data-v-ef037860"],
  ]),
  CR = "/assets/novas-armas-update-hJoHQ5qQ.webp",
  kR = {},
  SR = { class: "notification-container" },
  qR = nn(
    '<div class="title" data-v-3807d2a8> Novas armas chegaram no CRIS! </div><div class="img-container" data-v-3807d2a8><a href="https://x.com/CrisOrdemPrnml/status/1827105984751317480" target="_blank" data-v-3807d2a8><img class="img" src="' +
      CR +
      '" alt="Novas armas chegaram no CRIS" data-v-3807d2a8></a></div><div class="content" data-v-3807d2a8> Chegou um carregamento inteiro de novas armas no CRIS para vocês estarem ainda mais preparados contra o Outro Lado! Entregues especialmente por @Duhgetsu e @VittoriHanzo Agora é as criaturas que irão sentir medo! </div><div class="link" data-v-3807d2a8><a class="link" href="https://x.com/CrisOrdemPrnml/status/1827105984751317480" target="_blank" data-v-3807d2a8> Veja mais aqui! </a></div>',
    4
  ),
  xR = [qR];
function RR(t, e) {
  return R(), H("div", SR, xR);
}
const Vw = bt(kR, [
    ["render", RR],
    ["__scopeId", "data-v-3807d2a8"],
  ]),
  PR = "/assets/toca-dos-monstros-no-cris-_HMaLMXq.webp",
  OR = {},
  DR = { class: "notification-container" },
  NR = nn(
    '<div class="title" data-v-bd0dbe70> A @TocaDosMonstros esta no CRIS! </div><div class="img-container" data-v-bd0dbe70><a href="https://x.com/CrisOrdemPrnml/status/1826042027274023302" target="_blank" data-v-bd0dbe70><img class="img" src="' +
      PR +
      '" alt="Toca dos Monstros no CRIS" data-v-bd0dbe70></a></div><div class="content" data-v-bd0dbe70> Novos conteúdos gratuitos foram adicionados no CRIS pela Toca dos Monstros! </div><div class="link" data-v-bd0dbe70><a class="link" href="https://x.com/CrisOrdemPrnml/status/1826042027274023302" target="_blank" data-v-bd0dbe70> Confira as novidades aqui! </a></div>',
    4
  ),
  LR = [NR];
function MR(t, e) {
  return R(), H("div", DR, LR);
}
const Fw = bt(OR, [
    ["render", MR],
    ["__scopeId", "data-v-bd0dbe70"],
  ]),
  $R = "/assets/criaturas-invadem-o-cris-BdE3EVQC.webp",
  VR = {},
  FR = { class: "notification-container" },
  UR = nn(
    '<div class="title" data-v-3d58565d> Novas funcionalidades! </div><div class="img-container" data-v-3d58565d><a href="https://x.com/CrisOrdemPrnml/status/1822074146169213164" target="_blank" data-v-3d58565d><img class="img" src="' +
      $R +
      '" alt="Criaturas invadem o CRIS!" data-v-3d58565d></a></div><div class="content" data-v-3d58565d> Criaturas invadem o CRIS! Chamando TODOS os agentes da Ordem! Uma nova onda de atualizações chegou! Além de funcionalidades para fichas de ameaça e combate em campanha, chegaram muitas metas do Catarse também! </div><div class="link" data-v-3d58565d><a class="link" href="https://x.com/CrisOrdemPrnml/status/1822074146169213164" target="_blank" data-v-3d58565d> Veja a lista completa aqui! </a></div>',
    4
  ),
  BR = [UR];
function jR(t, e) {
  return R(), H("div", FR, BR);
}
const Uw = bt(VR, [
    ["render", jR],
    ["__scopeId", "data-v-3d58565d"],
  ]),
  HR = "/assets/arquivos-confidenciais-update-hWnppyUw.webp",
  zR = {},
  WR = { class: "notification-container" },
  KR = nn(
    '<div class="title" data-v-64dcc992> @ArquivosConfidenciais vazados no cris! </div><div class="img-container" data-v-64dcc992><a href="https://x.com/CrisOrdemPrnml/status/1828578173543420176" target="_blank" data-v-64dcc992><img class="img" src="' +
      HR +
      '" alt="@ArquivosConfidenciais vazados no cris!" data-v-64dcc992></a></div><div class="content" data-v-64dcc992> Recentemente encontramos arquivos ultra secretos dentro do CRIS! O conteúdo deles ainda é um mistério. Por isso estamos convocando nosso melhores agentes para investigar! </div><div class="link" data-v-64dcc992><a class="link" href="https://x.com/CrisOrdemPrnml/status/1828578173543420176" target="_blank" data-v-64dcc992> Veja mais aqui! </a></div>',
    4
  ),
  GR = [KR];
function QR(t, e) {
  return R(), H("div", WR, GR);
}
const Bw = bt(zR, [
    ["render", QR],
    ["__scopeId", "data-v-64dcc992"],
  ]),
  YR = "/assets/marcas-fragmentadas-anuncio-4Vy1j3wT.webp",
  XR = {},
  JR = { class: "notification-container" },
  ZR = nn(
    '<div class="title" data-v-56c936c0> Marcas Fragmentadas está no CRIS! </div><div class="img-container" data-v-56c936c0><a href="https://x.com/CrisOrdemPrnml/status/1828935446199505368" target="_blank" data-v-56c936c0><img class="img" src="' +
      YR +
      '" alt="Marcas Fragmentadas está no CRIS!" data-v-56c936c0></a></div><div class="content" data-v-56c936c0> O suplemento feito de fã para fã chegou no CRIS! Idealizado por GGTonho, Bif e Sir Crazy trazendo muitos conteúdos novos para vocês utilizarem no site! </div><div class="link" data-v-56c936c0><a class="link" href="https://x.com/CrisOrdemPrnml/status/1828935446199505368" target="_blank" data-v-56c936c0> Veja mais aqui! </a></div>',
    4
  ),
  eP = [ZR];
function tP(t, e) {
  return R(), H("div", JR, eP);
}
const jw = bt(XR, [
    ["render", tP],
    ["__scopeId", "data-v-56c936c0"],
  ]),
  Hw = (t) => (Mn("data-v-9bb07e0f"), (t = t()), $n(), t),
  nP = { class: "notification-modal-content" },
  rP = { class: "notification-modal-header" },
  iP = Hw(() =>
    w("img", { class: "close-icon", src: ac, alt: "fechar" }, null, -1)
  ),
  sP = [iP],
  oP = { class: "notification-modal-body" },
  aP = { class: "notifications-container" },
  lP = Hw(() => w("div", { class: "title" }, " Novidades ", -1)),
  cP = { class: "notification-list" },
  uP = ["onClick"],
  dP = { key: 0, class: "notification-number" },
  hP = { class: "current-notification" },
  fP = Ge({
    __name: "DesktopNotifications",
    props: { user: {} },
    emits: ["handleCloseModal"],
    setup(t) {
      const e = t,
        n = ne(0),
        r = Un(),
        i = Bn(),
        s = [jw, Bw, $w, Vw, Fw, Uw],
        o = (l, c) => {
          r.currentUser &&
            ((n.value = c),
            Lo(Kt(i, "users", r.currentUser.uid), { notifications: Pw(l) }));
        },
        a = (l) =>
          e.user.notifications ? !e.user.notifications.includes(l) : !0;
      return (l, c) => (
        R(),
        H("div", nP, [
          w("div", rP, [
            w(
              "button",
              {
                class: "button-naked",
                onClick: c[0] || (c[0] = (u) => l.$emit("handleCloseModal")),
              },
              sP
            ),
          ]),
          w("div", oP, [
            w("div", aP, [
              lP,
              w("div", cP, [
                (R(!0),
                H(
                  Ue,
                  null,
                  Ni(
                    Ye(oc),
                    (u, d) => (
                      R(),
                      H("div", { key: d }, [
                        w(
                          "button",
                          {
                            class: "notification-button",
                            onClick: (h) => o(u, d),
                          },
                          [
                            lt(ur(u) + " ", 1),
                            a(u) ? (R(), H("div", dP)) : Oe("", !0),
                          ],
                          8,
                          uP
                        ),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ]),
            w("div", hP, [
              (R(), xe(Hg, null, [(R(), xe(ka(s[n.value])))], 1024)),
            ]),
          ]),
        ])
      );
    },
  }),
  pP = bt(fP, [["__scopeId", "data-v-9bb07e0f"]]),
  zw = (t) => (Mn("data-v-7f1d8d91"), (t = t()), $n(), t),
  mP = { class: "notification-modal-content" },
  gP = { class: "notification-modal-header" },
  vP = zw(() =>
    w("img", { class: "close-icon", src: ac, alt: "fechar" }, null, -1)
  ),
  yP = [vP],
  _P = { class: "notification-modal-body" },
  wP = zw(() => w("div", { class: "title" }, " Novidades ", -1)),
  bP = { key: 0, class: "notifications-container" },
  EP = { class: "notification-list" },
  TP = { class: "notification-list" },
  IP = ["onClick"],
  AP = { key: 0, class: "notification-number" },
  CP = { key: 1, class: "current-notification" },
  kP = Ge({
    __name: "MobileNotifications",
    props: { user: {} },
    emits: ["handleCloseModal"],
    setup(t) {
      const e = t,
        n = ne(!1),
        r = ne(0),
        i = Un(),
        s = Bn(),
        o = [jw, Bw, $w, Vw, Fw, Uw],
        a = (u, d) => {
          i.currentUser &&
            ((r.value = d),
            Lo(Kt(s, "users", i.currentUser.uid), { notifications: Pw(u) }));
        },
        l = (u, d) => {
          (n.value = !0), a(u, d);
        },
        c = (u) =>
          e.user.notifications ? !e.user.notifications.includes(u) : !0;
      return (u, d) => (
        R(),
        H("div", mP, [
          w("div", gP, [
            w(
              "button",
              {
                class: "button-naked",
                onClick: d[0] || (d[0] = (h) => u.$emit("handleCloseModal")),
              },
              yP
            ),
          ]),
          w("div", _P, [
            wP,
            n.value
              ? (R(),
                H("div", CP, [
                  w(
                    "button",
                    {
                      class: "button-secondary back-button",
                      onClick: d[1] || (d[1] = (h) => (n.value = !1)),
                    },
                    " Voltar "
                  ),
                  (R(), xe(Hg, null, [(R(), xe(ka(o[r.value])))], 1024)),
                ]))
              : (R(),
                H("div", bP, [
                  w("div", EP, [
                    w("div", TP, [
                      (R(!0),
                      H(
                        Ue,
                        null,
                        Ni(
                          Ye(oc),
                          (h, f) => (
                            R(),
                            H("div", { key: f }, [
                              w(
                                "button",
                                {
                                  class: "notification-button",
                                  onClick: (g) => l(h, f),
                                },
                                [
                                  lt(ur(h) + " ", 1),
                                  c(h) ? (R(), H("div", AP)) : Oe("", !0),
                                ],
                                8,
                                IP
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                ])),
          ]),
        ])
      );
    },
  }),
  SP = bt(kP, [["__scopeId", "data-v-7f1d8d91"]]),
  qP = { key: 0 },
  xP = { key: 1 },
  RP = { key: 0, class: "modal-container" },
  PP = { key: 2 },
  OP = { key: 0, class: "modal-container" },
  DP = Ge({
    __name: "HeaderView",
    setup(t) {
      const e = Un(),
        n = Bn(),
        r = is(),
        { width: i } = gv(),
        s = ge(() => r.path),
        o = ne(null),
        a = ne(!1),
        l = ne(),
        c = ne(),
        u = ge(
          () => !(s.value.includes("stream") || s.value.includes("invazores"))
        );
      Ra(o, () => h());
      const d = () => {
          (a.value = !0), document.body.classList.add("modal-open");
        },
        h = () => {
          (a.value = !1), document.body.classList.remove("modal-open");
        },
        f = ge(() => i.value > 1023);
      return (
        tn(() => {
          ss(e, async (g) => {
            g &&
              (c.value = Vh(Kt(n, "users", g.uid), (y) => {
                y.data() && (l.value = y.data());
              }));
          });
        }),
        rs(() => {
          c.value && c.value();
        }),
        (g, y) => (
          R(),
          H(
            Ue,
            null,
            [
              u.value
                ? (R(),
                  H("div", qP, [
                    Ye(i) >= 1023
                      ? (R(),
                        xe(Wx, { key: 0, onHandleOpenNotificationsModal: d }))
                      : (R(),
                        xe(_R, { key: 1, onHandleOpenNotificationsModal: d })),
                  ]))
                : Oe("", !0),
              f.value
                ? (R(),
                  H("div", xP, [
                    me(
                      vr,
                      { name: "modal-notification" },
                      {
                        default: je(() => [
                          a.value && l.value
                            ? (R(),
                              H("div", RP, [
                                me(
                                  pP,
                                  {
                                    ref_key: "modal",
                                    ref: o,
                                    user: l.value,
                                    onHandleCloseModal: h,
                                  },
                                  null,
                                  8,
                                  ["user"]
                                ),
                              ]))
                            : Oe("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                  ]))
                : (R(),
                  H("div", PP, [
                    me(
                      vr,
                      { name: "modal-notification" },
                      {
                        default: je(() => [
                          a.value && l.value
                            ? (R(),
                              H("div", OP, [
                                me(
                                  SP,
                                  {
                                    ref_key: "modal",
                                    ref: o,
                                    user: l.value,
                                    onHandleCloseModal: h,
                                  },
                                  null,
                                  8,
                                  ["user"]
                                ),
                              ]))
                            : Oe("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                  ])),
            ],
            64
          )
        )
      );
    },
  }),
  NP = bt(DP, [["__scopeId", "data-v-e6fc00d5"]]),
  LP = Ge({
    __name: "DividerView",
    props: { noMargin: Boolean, whiteColor: Boolean, offWhite: Boolean },
    setup(t) {
      bl((r) => ({ "63538b66": n.value }));
      const e = t,
        n = ge(() =>
          e.whiteColor
            ? "1px solid var(--color-white)"
            : e.offWhite
            ? "1px solid var(--color-off-white)"
            : "1px solid var(--color-primary)"
        );
      return (r, i) => (
        R(),
        H(
          "div",
          { class: Ne({ noMargin: t.noMargin, divider: !t.noMargin }) },
          null,
          2
        )
      );
    },
  }),
  MP = bt(LP, [["__scopeId", "data-v-04d06b17"]]),
  Fh = (t) => (Mn("data-v-bc1fff63"), (t = t()), $n(), t),
  $P = { key: 0, class: "footer-container" },
  VP = { class: "footer-wrapper" },
  FP = { class: "footer-links-container" },
  UP = { class: "footer-links-row" },
  BP = Fh(() =>
    w(
      "a",
      { class: "links", href: "https://jamboeditora.com.br", target: "_blank" },
      " Compre Ordem Paranormal ",
      -1
    )
  ),
  jP = { class: "footer-links-row" },
  HP = Fh(() =>
    w(
      "div",
      { class: "footer-links-row" },
      [
        w(
          "a",
          {
            class: "links",
            href: "https://www.twitch.tv/powered_by_soul",
            target: "_blank",
          },
          " Powered by Soul "
        ),
      ],
      -1
    )
  ),
  zP = nn(
    '<div class="icon-links-container" data-v-bc1fff63><a class="link" href="https://discord.gg/c-r-i-s-ordem-paranormal-1024034430169395292" target="_blank" data-v-bc1fff63><img class="icon" src="' +
      Nw +
      '" alt="discord" data-v-bc1fff63></a><a class="link" href="https://twitter.com/CrisOrdemPrnml" target="_blank" data-v-bc1fff63><img class="icon" src="' +
      Lw +
      '" alt="twitter" data-v-bc1fff63></a><a class="link" href="https://www.twitch.tv/powered_by_soul" target="_blank" data-v-bc1fff63><img class="icon" src="' +
      Mw +
      '" alt="twitch" data-v-bc1fff63></a></div>',
    1
  ),
  WP = Fh(() =>
    w(
      "div",
      { class: "footer-text-container" },
      [
        w(
          "div",
          { class: "footer-text" },
          " Ordem Paranormal é um produto da Jambô Editora e seus respectivos criadores, todos os direitos reservados. "
        ),
        w(
          "div",
          { class: "footer-text" },
          " C.R.I.S. - Ordem Paranormal is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC. "
        ),
      ],
      -1
    )
  ),
  KP = Ge({
    __name: "FooterView",
    setup(t) {
      bl((s) => ({ cb19ebc4: i.value }));
      const e = is(),
        n = ge(() => e.path),
        r = ge(
          () =>
            !(
              n.value.includes("/agente/stream/") ||
              n.value.includes("/agente/") ||
              n.value.includes("/escudo-do-mestre/") ||
              n.value.includes("invazores")
            )
        ),
        i = ge(() => (e.path === "/" ? "0" : "2rem"));
      return (s, o) => {
        const a = Cn("router-link");
        return r.value
          ? (R(),
            H("div", $P, [
              w("div", VP, [
                w("div", FP, [
                  w("div", UP, [
                    me(
                      a,
                      { class: "links", to: "/sobre-o-cris" },
                      { default: je(() => [lt(" Sobre o C.R.I.S. ")]), _: 1 }
                    ),
                    BP,
                  ]),
                  w("div", jP, [
                    me(
                      a,
                      { class: "links", to: "/creditos-e-contato" },
                      { default: je(() => [lt(" Entre em contato ")]), _: 1 }
                    ),
                    me(
                      a,
                      { class: "links", to: "/politica-de-privacidade" },
                      {
                        default: je(() => [lt(" Política de Privacidade ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  HP,
                ]),
                zP,
                me(MP, { "white-color": "", "no-margin": "", "off-white": "" }),
                WP,
              ]),
            ]))
          : Oe("", !0);
      };
    },
  }),
  GP = bt(KP, [["__scopeId", "data-v-bc1fff63"]]),
  QP = [
    {
      imgPath: "/img/cris/banner1.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
      adId: "cris",
    },
    {
      imgPath: "/img/cris/banner2.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
      adId: "cris",
    },
    {
      imgPath: "/img/cris/banner3.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
      adId: "cris",
    },
    {
      imgPath: "/img/cris/banner3.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
      adId: "cris",
    },
    {
      imgPath: "/img/cris/banner3.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
      adId: "cris",
    },
  ],
  YP = [
    {
      imgPath: "/img/invazores/banner1.webp",
      imgAlt: "Conheça o novo RPG Invazores",
      adLink: "https://www.catarse.me/toomanygoblins?ref=cris",
      adId: "invazores",
    },
    {
      imgPath: "/img/invazores/banner2.webp",
      imgAlt: "Conheça o novo RPG Invazores",
      adLink: "https://www.catarse.me/toomanygoblins?ref=cris",
      adId: "invazores",
    },
    {
      imgPath: "/img/invazores/banner3.webp",
      imgAlt: "Conheça o novo RPG Invazores",
      adLink: "https://www.catarse.me/toomanygoblins?ref=cris",
      adId: "invazores",
    },
    {
      imgPath: "/img/invazores/banner4.webp",
      imgAlt: "Conheça o novo RPG Invazores",
      adLink: "https://www.catarse.me/toomanygoblins?ref=cris",
      adId: "invazores",
    },
    {
      imgPath: "/img/invazores/banner1.webp",
      imgAlt: "Conheça o novo RPG Invazores",
      adLink: "https://www.catarse.me/toomanygoblins?ref=cris",
      adId: "invazores",
    },
  ],
  XP = [
    {
      imgPath: "/img/toca-dos-monstros/banner1.webp",
      imgAlt: "Conheça a Toca dos Monstros",
      adLink: "https://www.catarse.me/tocadosmonstros?ref=cris",
      adId: "tocaDosMonstros",
    },
    {
      imgPath: "/img/toca-dos-monstros/banner2.webp",
      imgAlt: "Conheça a Toca dos Monstros",
      adLink: "https://www.catarse.me/tocadosmonstros?ref=cris",
      adId: "tocaDosMonstros",
    },
    {
      imgPath: "/img/toca-dos-monstros/banner3.webp",
      imgAlt: "Conheça a Toca dos Monstros",
      adLink: "https://www.catarse.me/tocadosmonstros?ref=cris",
      adId: "tocaDosMonstros",
    },
    {
      imgPath: "/img/toca-dos-monstros/banner4.webp",
      imgAlt: "Conheça a Toca dos Monstros",
      adLink: "https://www.catarse.me/tocadosmonstros?ref=cris",
      adId: "tocaDosMonstros",
    },
    {
      imgPath: "/img/toca-dos-monstros/banner5.webp",
      imgAlt: "Conheça a Toca dos Monstros",
      adLink: "https://www.catarse.me/tocadosmonstros?ref=cris",
      adId: "tocaDosMonstros",
    },
  ],
  JP = [
    {
      imgPath: "/img/arquivos-confidenciais/banner1.webp",
      imgAlt: "Conheça os Arquivos Confidênciais",
      adLink: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
      adId: "arquivosConfidenciais",
    },
    {
      imgPath: "/img/arquivos-confidenciais/banner2.webp",
      imgAlt: "Conheça os Arquivos Confidênciais",
      adLink: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
      adId: "arquivosConfidenciais",
    },
    {
      imgPath: "/img/arquivos-confidenciais/banner3.webp",
      imgAlt: "Conheça os Arquivos Confidênciais",
      adLink: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
      adId: "arquivosConfidenciais",
    },
    {
      imgPath: "/img/arquivos-confidenciais/banner4.webp",
      imgAlt: "Conheça os Arquivos Confidênciais",
      adLink: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
      adId: "arquivosConfidenciais",
    },
    {
      imgPath: "/img/arquivos-confidenciais/banner5.webp",
      imgAlt: "Conheça os Arquivos Confidênciais",
      adLink: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
      adId: "arquivosConfidenciais",
    },
  ],
  gL = (t, e) =>
    t
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(new RegExp("\\p{Diacritic}", "gu"), "")
      .split(".")
      .join("")
      .trim()
      .includes(
        e
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(new RegExp("\\p{Diacritic}", "gu"), "")
          .split(".")
          .join("")
          .trim()
      ),
  Ww = (t) => {
    for (let e = t.length - 1; e > 0; e--) {
      const n = Math.floor(Math.random() * (e + 1)),
        r = t[e];
      (t[e] = t[n]), (t[n] = r);
    }
    return t;
  },
  Za = { 0: 0, I: 1, II: 2, III: 3, IV: 4 },
  Kw = ["0", "I", "II", "III", "IV"],
  vL = (t) => Kw[Za[t] + 1 > 4 ? 4 : Za[t] + 1],
  yL = (t) => Kw[Za[t] - 1 < 0 ? 0 : Za[t] - 1],
  ZP = { key: 0, class: "ads-container" },
  eO = { class: "ad-img-container scale-in-center" },
  tO = ["src", "alt"],
  nO = ["src"],
  rO = 9e3,
  iO = 27e5,
  sO = Ge({
    __name: "AdsComponent",
    setup(t) {
      const e = Bn(),
        n = ne(),
        r = is(),
        i = ge(() => r.path),
        s = ne([]),
        o = QP,
        a = XP,
        l = JP,
        c = YP,
        u = ne(0),
        d = ne(!1),
        h = ne(),
        f = async (E, O) => {
          var V;
          Lo(Kt(e, "ads", O), { clicks: Ow(1) }),
            (V = window.open(E, "_blank")) == null || V.focus();
        },
        g = () => (d.value = !0),
        y = () => {
          (d.value = !1), clearTimeout(h.value);
        },
        _ = () => {
          i.value.includes("invazores") || setTimeout(g, rO);
        },
        T = () => {
          i.value.includes("invazores") ||
            setTimeout(() => {
              u.value < s.value.length - 1 ? u.value++ : (u.value = 0),
                g(),
                T();
            }, iO);
        },
        v = ge(() => !!r.fullPath.includes("stream")),
        k = ge(() =>
          !n.value || n.value.turnAdsOff === void 0 ? !1 : !!n.value.turnAdsOff
        );
      return (
        ft(d, () => {
          i.value.includes("invazores") && (d.value = !1),
            d.value && (h.value = window.setTimeout(() => (d.value = !1), 6e4));
        }),
        tn(async () => {
          const E = ss(Un(), async (O) => {
            if (!O) return;
            const V = await xw(Kt(e, "users", O.uid));
            (n.value = V.data()), E();
          });
          (s.value = [...o, ...a, ...l, ...c]),
            (s.value = Ww(s.value)),
            _(),
            T();
        }),
        (E, O) =>
          d.value && !v.value && !k.value
            ? (R(),
              H("div", ZP, [
                w("div", eO, [
                  s.value[u.value].imgPath.includes("webp")
                    ? (R(),
                      H(
                        "img",
                        {
                          key: 0,
                          src: s.value[u.value].imgPath,
                          alt: s.value[u.value].imgAlt,
                          class: "ad-img",
                          onClick:
                            O[0] ||
                            (O[0] = (V) =>
                              f(
                                s.value[u.value].adLink,
                                s.value[u.value].adId
                              )),
                          onMouseup:
                            O[1] ||
                            (O[1] = an(
                              (V) =>
                                f(
                                  s.value[u.value].adLink,
                                  s.value[u.value].adId
                                ),
                              ["middle"]
                            )),
                          onMousedown:
                            O[2] ||
                            (O[2] = an(() => {}, [
                              "middle",
                              "prevent",
                              "stop",
                            ])),
                        },
                        null,
                        40,
                        tO
                      ))
                    : (R(),
                      H(
                        "video",
                        {
                          key: 1,
                          class: "ad-img",
                          autoplay: "",
                          muted: "",
                          loop: "",
                          onClick:
                            O[3] ||
                            (O[3] = (V) =>
                              f(
                                s.value[u.value].adLink,
                                s.value[u.value].adId
                              )),
                          onMouseup:
                            O[4] ||
                            (O[4] = an(
                              (V) =>
                                f(
                                  s.value[u.value].adLink,
                                  s.value[u.value].adId
                                ),
                              ["middle"]
                            )),
                          onMousedown:
                            O[5] ||
                            (O[5] = an(() => {}, [
                              "middle",
                              "prevent",
                              "stop",
                            ])),
                        },
                        [
                          w(
                            "source",
                            {
                              src: s.value[u.value].imgPath,
                              type: "video/mp4",
                            },
                            null,
                            8,
                            nO
                          ),
                        ],
                        32
                      )),
                  w("img", {
                    class: "close-icon",
                    src: ac,
                    alt: "fechar",
                    onClick: y,
                  }),
                ]),
              ]))
            : Oe("", !0)
      );
    },
  }),
  oO = bt(sO, [["__scopeId", "data-v-90242dbe"]]),
  aO = Ge({
    __name: "App",
    setup(t) {
      const e = is();
      return (n, r) => {
        const i = Cn("router-view");
        return (
          R(),
          H("div", null, [
            me(NP),
            w(
              "div",
              {
                class: Ne({
                  "main-content":
                    Ye(e).path !== "/" &&
                    !Ye(e).path.includes("agua-rica-stream") &&
                    !Ye(e).path.includes("invazores"),
                }),
              },
              [me(i)],
              2
            ),
            me(GP),
            me(oO),
          ])
        );
      };
    },
  }),
  lO = "modulepreload",
  cO = function (t) {
    return "/" + t;
  },
  km = {},
  C = function (e, n, r) {
    if (!n || n.length === 0) return e();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = cO(s)), s in km)) return;
        km[s] = !0;
        const o = s.endsWith(".css"),
          a = o ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let u = i.length - 1; u >= 0; u--) {
            const d = i[u];
            if (d.href === s && (!o || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${a}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = o ? "stylesheet" : lO),
          o || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = s),
          document.head.appendChild(c),
          o)
        )
          return new Promise((u, d) => {
            c.addEventListener("load", u),
              c.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${s}`))
              );
          });
      })
    )
      .then(() => e())
      .catch((s) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented))
          throw s;
      });
  },
  uO = "/assets/ficha-home-page-Vs9KQLhb.webp",
  dO = "/assets/agentes-home-page-t-tFgQyF.webp",
  hO = "/assets/escudo-do-mestre-home-page-8qU752rB.webp",
  fO = "/assets/homebrew-landing-page-cloVYFFS.webp",
  pO = "/assets/catarse-landing-page-goKyMiZk.webp",
  Gw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmDA4TLTg/rjdVAAACWElEQVR42u2aPS80YRSGdzcxJhrZZEOiVBD8gdWICI2ehkRCNhGJqJGIsJWOaMVqbKOkpbAJ/0CxQaWQ+IpifWycSzHVy85sYZ85bzjXL7jueybnPPNkEgnDMAzDMAzDMAzj50AqBfPzcHgIW1vQ0aHtFHMBa2v8w+0tZLPaXjEWcHPDN15eYHxc2y2eAuTykpqIwOKitl8MBeRyRCE7O0hTk7an2xKYmYH39/AWSiUkk9H2dFuCDA/D42N4CeUy0tWl7em2BPr64Po6vIS7O2RgQNvTbQmSyUCpFF7C6ytMTGh7ui0B34diMWIyCqyuQjKp7eqwhGQyCBnF7i7iedqujouYnrYNYRvCNkRQgmQycHoauSFkclLb020J+D7s7//xDZFKIRsb0RuiUPj9G0JyOahWw0vY3tZ2jKGEkRF4eqpdQKXS6C/JlHbg77S2JhIhrzoiiQRoGzoDlpeDoRfG+rq2o5vg4nlQKEQPwc1NSP2Hb+xPw5NOw/FxePBqFebmtD0dhe/sRC4uwsM/P8PoqLano/DZbHBlHsbVFfT2anu6CS9jY1CphB/+zs+R9nZtTzfhWViAj4/wJ39wAC0t2p6NDy6eB3t7f3fSy8lJ9KSfndX2dBS+3qR/eIChIW1PR+H7++tP+p4ebU834etO+rMzpK1N27PxwUkmYWUl+kxfLILva7s6KiCfj570+fyvvd1BmpuDfwFq8fYGU1Pajm4LwPdr3+jc38PgoLZfTCV8PeyUy9Ddre0VXwHiebC0BEdHwUVnOq3tZBiGYRiGYRiGYXzhE6jA4Atr/XGWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEyLTE0VDE5OjQ1OjU2KzAwOjAwB9J9BwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMi0xNFQxOTo0NTo1NiswMDowMHaPxbsAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMTItMTRUMTk6NDU6NTYrMDA6MDAhmuRkAAAAAElFTkSuQmCC",
  Qw = (t) => (Mn("data-v-fce1fb03"), (t = t()), $n(), t),
  mO = { class: "carousel-container" },
  gO = ["onMouseup"],
  vO = ["src"],
  yO = ["src"],
  _O = { key: 0, class: "carousel-navigation" },
  wO = Qw(() =>
    w("img", { class: "carousel-arrow-img invert-arrow", src: Gw }, null, -1)
  ),
  bO = [wO],
  EO = ["onClick"],
  TO = Qw(() => w("img", { class: "carousel-arrow-img", src: Gw }, null, -1)),
  IO = [TO],
  AO = Ge({
    __name: "CarouselView",
    setup(t) {
      const e = [
          {
            adImageDesktop: "/img/banner-invazores-landing-page-desktop.webp",
            adImageMobile: "/img/banner-invazores-landing-page-mobile.webp",
            adLink: "https://www.catarse.me/toomanygoblins?ref=cris",
            adId: "invazores",
          },
          {
            adImageDesktop:
              "/img/banner-arquivos-confidenciais-landing-page-desktop.webp",
            adImageMobile:
              "/img/banner-arquivos-confidenciais-landing-page-mobile.webp",
            adLink: "https://www.catarse.me/arquivosconfidenciais?ref=cris",
            adId: "arquivosConfidenciais",
          },
          {
            adImageDesktop: "/img/banner-toca-landing-page-desktop.webp",
            adImageMobile: "/img/banner-toca-landing-page-mobile.webp",
            adLink: "https://www.catarse.me/tocadosmonstros?ref=cris",
            adId: "tocaDosMonstros",
          },
        ],
        { width: n } = gv(),
        r = Bn(),
        i = ne(0),
        s = ne(Ww(e)),
        o = (c) => {
          c.preventDefault();
          const u = s.value[i.value];
          u.adId && Lo(Kt(r, "ads", u.adId), { clicks: Ow(1) }),
            window.open(u.adLink, "_blank");
        },
        a = () => {
          i.value === 0 ? (i.value = s.value.length - 1) : i.value--;
        },
        l = () => {
          i.value === s.value.length - 1 ? (i.value = 0) : i.value++;
        };
      return (c, u) => (
        R(),
        H(
          Ue,
          null,
          [
            w("div", mO, [
              w(
                "button",
                {
                  class: "carousel-button",
                  onClick: o,
                  onMouseup: an(o, ["middle"]),
                  onMousedown:
                    u[0] ||
                    (u[0] = an(() => {}, ["middle", "prevent", "stop"])),
                },
                [
                  Ye(n) >= 1023
                    ? (R(),
                      H(
                        "img",
                        {
                          key: 0,
                          class: "carousel-img",
                          src: s.value[i.value].adImageDesktop,
                          alt: "atualização",
                        },
                        null,
                        8,
                        vO
                      ))
                    : (R(),
                      H(
                        "img",
                        {
                          key: 1,
                          class: "carousel-img",
                          src: s.value[i.value].adImageMobile,
                          alt: "atualização",
                        },
                        null,
                        8,
                        yO
                      )),
                ],
                40,
                gO
              ),
            ]),
            Ye(n) >= 1023
              ? (R(),
                H("div", _O, [
                  w(
                    "button",
                    { class: "button-naked carousel-arrow-button", onClick: a },
                    bO
                  ),
                  (R(!0),
                  H(
                    Ue,
                    null,
                    Ni(
                      s.value,
                      (d, h) => (
                        R(),
                        H(
                          "div",
                          {
                            key: h,
                            class: Ne([
                              "carousel-circle",
                              { "current-carousel": h === i.value },
                            ]),
                            onClick: (f) => (i.value = h),
                          },
                          null,
                          10,
                          EO
                        )
                      )
                    ),
                    128
                  )),
                  w(
                    "button",
                    { class: "button-naked carousel-arrow-button", onClick: l },
                    IO
                  ),
                ]))
              : Oe("", !0),
          ],
          64
        )
      );
    },
  }),
  CO = bt(AO, [["__scopeId", "data-v-fce1fb03"]]),
  lc = (t) => (Mn("data-v-8db051aa"), (t = t()), $n(), t),
  kO = { class: "home-container" },
  SO = { class: "carousel-container" },
  qO = lc(() =>
    w(
      "div",
      { class: "title" },
      [lt(" Fichas "), w("span", { class: "underline" }, "Digitais")],
      -1
    )
  ),
  xO = lc(() =>
    w(
      "div",
      { class: "text" },
      [
        lt(
          " Acesso rápido e simplificado a todas as informações de sua ficha. Faça a rolagem de perícias, atributos e ataques com um "
        ),
        w("span", { class: "bold" }, "único clique"),
        lt(
          ". Concentre-se menos na matemática e foque no que realmente importa que é se divertir ao lado de seus amigos! "
        ),
      ],
      -1
    )
  ),
  RO = lc(() =>
    w(
      "div",
      { class: "img-container" },
      [w("img", { class: "img", src: uO, alt: "ficha-de-persoangem" })],
      -1
    )
  ),
  PO = nn(
    '<div class="content-column-container" data-v-8db051aa><div class="text-container" data-v-8db051aa><div class="title" data-v-8db051aa> Seus <span class="underline" data-v-8db051aa>agentes</span> em um só lugar! </div><div class="text" data-v-8db051aa> Liberte-se da preocupação de perder suas fichas! Tenha seus agentes <span class="bold" data-v-8db051aa>sempre prontos</span> para a próxima missão. Crie campanhas em frações de <span class="bold" data-v-8db051aa>segundos</span>. Adicione seus agentes para acessar suas fichas, resultados de dados e ferramentas exclusivas para te auxiliar. Chegou a hora de elevar o nível de sua campanha! </div></div><div class="img-container" data-v-8db051aa><img class="img" src="' +
      dO +
      '" alt="agentes" data-v-8db051aa></div></div><div class="content-column-container" data-v-8db051aa><div class="text-container" data-v-8db051aa><div class="title" data-v-8db051aa><span class="underline" data-v-8db051aa>Ferramentas</span> para o Mestre! </div><div class="text" data-v-8db051aa> Liberte-se da preocupação de perder suas fichas! Tenha seus agentes <span class="bold" data-v-8db051aa>sempre prontos</span> para a próxima missão. Crie campanhas em frações de <span class="bold" data-v-8db051aa>segundos</span>. Adicione seus agentes para acessar suas fichas, resultados de dados e ferramentas exclusivas para te auxiliar. Chegou a hora de elevar o nível de sua campanha! </div></div><div class="img-container" data-v-8db051aa><img class="img" src="' +
      hO +
      '" alt="escudo do mestre" data-v-8db051aa></div></div><div class="content-side-container" data-v-8db051aa><div class="text-container text-sided" data-v-8db051aa><div class="title" data-v-8db051aa><span class="underline" data-v-8db051aa>Homebrew</span></div><div class="text" data-v-8db051aa><span class="bold" data-v-8db051aa>Não precisa mais se preocupar</span> em ficar correndo atrás de cada ficha dos seus jogadores, no Escudo do Mestre tem <span class="bold" data-v-8db051aa>tudo o que você precisa.</span></div></div><div class="img-container" data-v-8db051aa><img class="img" src="' +
      fO +
      '" alt="homebrew" data-v-8db051aa></div></div>',
    3
  ),
  OO = nn(
    '<div class="title align-text-center" data-v-8db051aa><span class="underline" data-v-8db051aa>Torne-se um agente da Ordem</span></div><div class="text align-text-center" data-v-8db051aa> Já imaginou ter acesso <span class="bold" data-v-8db051aa>exclusivo</span> e <span class="bold" data-v-8db051aa>totalmente antecipado</span> a todas as novidades de nossa plataforma? Considere apoiar em nosso Catarse. </div>',
    2
  ),
  DO = lc(() =>
    w(
      "div",
      { class: "img-container" },
      [w("img", { class: "img", src: pO, alt: "catarse" })],
      -1
    )
  ),
  NO = Ge({
    __name: "HomeView",
    setup(t) {
      const e = Un(),
        n = qd(),
        r = ne(!1),
        i = Bn(),
        s = ne(!0),
        o = () => {
          const c = new Mt();
          c.setCustomParameters({ prompt: "select_account" }),
            Xs(e, c).then(async () => {
              var g;
              const u = [],
                d = nx(i, "characters"),
                h = vx(
                  d,
                  _x("uid", "==", (g = e.currentUser) == null ? void 0 : g.uid)
                ),
                f = await Ex(h);
              for (const y of f.docs) {
                const _ = y.data();
                (_.id = y.id), u.push(_);
              }
              u.length > 0
                ? n.push({ name: "character-list" })
                : n.push({ name: "character-creation" });
            });
        },
        a = () => {
          s.value || (r.value ? n.push({ name: "character-list" }) : o());
        },
        l = () => {
          s.value ||
            window.open("https://www.catarse.me/crisordemparanormal", "_blank");
        };
      return (
        tn(() => {
          ss(e, (c) => {
            c ? (r.value = !0) : (r.value = !1), (s.value = !1);
          });
        }),
        (c, u) => (
          R(),
          H("div", kO, [
            w("div", SO, [me(CO)]),
            w("div", { class: "home-margin" }, [
              w("div", { class: "content-side-container" }, [
                w("div", { class: "text-container text-sided" }, [
                  qO,
                  xO,
                  w("div", { class: "button-container" }, [
                    w(
                      "button",
                      { class: "home-button", onClick: a },
                      " Criar ficha "
                    ),
                  ]),
                ]),
                RO,
              ]),
              PO,
              w("div", { class: "content-column-container" }, [
                w("div", { class: "text-container no-margin-bottom" }, [
                  OO,
                  w(
                    "div",
                    { class: "button-container catarse-button-container" },
                    [
                      w(
                        "button",
                        { class: "home-button catarse-button", onClick: l },
                        " Quero Apoiar o C.R.I.S. "
                      ),
                    ]
                  ),
                ]),
                DO,
              ]),
            ]),
          ])
        )
      );
    },
  }),
  LO = bt(NO, [["__scopeId", "data-v-8db051aa"]]),
  Yw = fI({
    history: qT("/"),
    scrollBehavior() {
      return { top: 0 };
    },
    routes: [
      { path: "/", name: "home", component: LO },
      {
        path: "/login",
        name: "login-page",
        component: () =>
          C(() => import("./LoginPage-ZNk4-RM4.js"), __vite__mapDeps([0, 1])),
      },
      {
        path: "/agentes",
        name: "character-list",
        component: () =>
          C(
            () => import("./CharacterList-j30xQf0A.js"),
            __vite__mapDeps([
              2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanhas",
        name: "campaigns-list",
        component: () =>
          C(
            () => import("./CampaignsList-upO1l-Rc.js"),
            __vite__mapDeps([18, 3, 4, 11, 14, 19])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews",
        name: "homebrews-list",
        component: () =>
          C(
            () => import("./HomebrewList-CHgjgZSE.js"),
            __vite__mapDeps([
              20, 21, 22, 23, 24, 25, 26, 27, 5, 6, 3, 4, 14, 28, 29, 30, 31,
              15, 16, 32, 33, 34, 35, 36, 7, 8, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 10, 11, 48, 49, 50, 51, 52, 53,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/habilidade/:id",
        name: "homebrews-power",
        component: () =>
          C(
            () => import("./HomebrewPowerView-y9I-FtWl.js"),
            __vite__mapDeps([
              54, 3, 4, 24, 25, 26, 27, 55, 56, 14, 7, 8, 35, 57,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/ritual/:id",
        name: "homebrews-ritual",
        component: () =>
          C(
            () => import("./HomebrewRitualView-GJ6CQjQa.js"),
            __vite__mapDeps([
              58, 3, 4, 37, 25, 26, 38, 39, 55, 56, 14, 7, 8, 35, 59,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/item/:id",
        name: "homebrews-item",
        component: () =>
          C(
            () => import("./HomebrewItemView-zpthUmGN.js"),
            __vite__mapDeps([
              60, 3, 4, 55, 56, 42, 25, 26, 43, 44, 45, 14, 7, 8, 35, 61,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/ameacas/:id",
        name: "homebrews-creature",
        component: () =>
          C(
            () => import("./HomebrewCreatureView-UbmLP3vo.js"),
            __vite__mapDeps([
              62, 3, 4, 47, 10, 11, 48, 49, 55, 56, 14, 7, 8, 35, 63,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/perfil/:id",
        name: "user-profile",
        component: () =>
          C(
            () => import("./UserProfile-kxt2kC6r.js"),
            __vite__mapDeps([64, 3, 4, 28, 33, 34, 35, 30, 31, 65])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/criar-campanha",
        name: "campaign-create",
        component: () =>
          C(
            () => import("./CampaignCreate-x3hFabPX.js"),
            __vite__mapDeps([66, 28, 29, 3, 4, 30, 31, 7, 8, 14, 67])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/editar-campanha/:id",
        name: "campaign-edit",
        component: () =>
          C(
            () => import("./CampaignEdit-yJsV5B5t.js"),
            __vite__mapDeps([68, 28, 29, 3, 4, 30, 31, 14, 69])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:id",
        name: "campaign-page",
        component: () =>
          C(
            () => import("./CampaignPage-iqKoxFcX.js"),
            __vite__mapDeps([
              70, 3, 4, 9, 10, 11, 12, 13, 7, 8, 32, 33, 34, 35, 36, 21, 22, 55,
              56, 71, 72, 14, 73,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/entrar/:id",
        name: "campaign-join",
        component: () =>
          C(
            () => import("./CampaignJoin-vxL68SO4.js"),
            __vite__mapDeps([74, 3, 4, 14, 75])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/adicionar-agente/:id",
        name: "campaign-add-agent",
        component: () =>
          C(
            () => import("./CampaignAddAgent-QOtDxQOU.js"),
            __vite__mapDeps([76, 9, 10, 11, 12, 13, 3, 4, 5, 6, 14, 77])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:id/criar-combate",
        name: "campaign-create-combat",
        component: () =>
          C(
            () => import("./CreateCombat-04AfXOdM.js"),
            __vite__mapDeps([
              78, 79, 80, 81, 47, 10, 11, 48, 49, 21, 22, 5, 6, 28, 15, 16, 82,
              83, 35, 84,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:campaignId/combate/:combatId",
        name: "campaign-edit-combat",
        component: () =>
          C(
            () => import("./EditCombat-rXYe9Z53.js"),
            __vite__mapDeps([
              85, 79, 80, 81, 47, 10, 11, 48, 49, 21, 22, 5, 6, 28, 15, 16, 82,
              83, 35, 86,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/acesso-negado",
        name: "campaign-page-denied",
        component: () =>
          C(
            () => import("./CampaignPageDenied-WV02dZkF.js"),
            __vite__mapDeps([87, 88])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/escudo-do-mestre/:id",
        name: "master-screen",
        component: () =>
          C(
            () => import("./MasterScreen-19ik4Cxa.js"),
            __vite__mapDeps([
              89, 3, 4, 90, 38, 91, 92, 16, 93, 35, 25, 94, 21, 22, 30, 31, 71,
              72, 12, 95, 48, 43, 44, 28, 29, 15, 40, 41, 96, 37, 26, 39, 79,
              80, 81, 47, 10, 11, 49, 5, 6, 82, 83, 7, 8, 50, 51, 32, 33, 34,
              36, 52, 97,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/novo-agente",
        name: "character-creation",
        component: () =>
          C(
            () => import("./CharacterCreation-9hdjbs-D.js"),
            __vite__mapDeps([
              98, 15, 16, 93, 99, 24, 25, 26, 27, 100, 5, 6, 82, 83, 81, 7, 8,
              3, 4, 101, 92, 35, 14, 102,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/agente/:id",
        name: "character-sheet",
        component: () =>
          C(
            () => import("./CharacterSheet-WgEnpERp.js"),
            __vite__mapDeps([
              103, 33, 34, 7, 8, 90, 38, 91, 92, 16, 93, 35, 25, 94, 21, 22, 24,
              26, 27, 37, 39, 42, 43, 44, 45, 23, 5, 6, 3, 4, 14, 28, 29, 30,
              31, 15, 32, 36, 40, 41, 46, 99, 100, 81, 82, 83, 80, 51, 104,
            ])
          ),
        props: !0,
      },
      {
        path: "/creditos-e-contato",
        name: "contact",
        component: () =>
          C(
            () => import("./ContactView-zMSZODw3.js"),
            __vite__mapDeps([105, 106])
          ),
      },
      {
        path: "/agente/stream/:id",
        name: "character-stream",
        component: () =>
          C(
            () => import("./CharacterStream-0ZutkqdA.js"),
            __vite__mapDeps([107, 51, 101, 92, 35, 108])
          ),
      },
      {
        path: "/agente/despertados-stream/:id/:type",
        name: "character-despertados-stream",
        component: () =>
          C(
            () => import("./DespertadosStream--u6LiyMT.js"),
            __vite__mapDeps([109, 101, 92, 35, 110])
          ),
      },
      {
        path: "/agente/agua-rica-stream/:id",
        name: "character-agua-rica-stream",
        component: () =>
          C(
            () => import("./AguaRicaStream-CUFV9_-X.js"),
            __vite__mapDeps([111, 101, 92, 35, 112])
          ),
      },
      {
        path: "/agente/stream/pv/:id",
        name: "character-stream-pv",
        component: () =>
          C(
            () => import("./CharacterPv-s687d970.js"),
            __vite__mapDeps([113, 101, 92, 35, 114])
          ),
      },
      {
        path: "/agente/stream/san/:id",
        name: "character-stream-san",
        component: () =>
          C(
            () => import("./CharacterSan-0khcklF1.js"),
            __vite__mapDeps([115, 101, 92, 35, 116])
          ),
      },
      {
        path: "/agente/stream/pe/:id",
        name: "character-stream-pe",
        component: () =>
          C(
            () => import("./CharacterPe-9Cx7yn9y.js"),
            __vite__mapDeps([117, 101, 92, 35, 118])
          ),
      },
      {
        path: "/sobre-o-cris",
        name: "about-view",
        component: () =>
          C(
            () => import("./about-view-nKLbTGjN.js"),
            __vite__mapDeps([119, 120])
          ),
      },
      {
        path: "/politica-de-privacidade",
        name: "privacy-policy",
        component: () =>
          C(
            () => import("./privacy-policy-r-m7IJ5p.js"),
            __vite__mapDeps([121, 122])
          ),
      },
      {
        path: "/ameacas",
        name: "creatures-list",
        component: () =>
          C(
            () => import("./CreaturesList-gUKXzY38.js"),
            __vite__mapDeps([
              123, 79, 80, 81, 47, 10, 11, 48, 49, 21, 22, 14, 3, 4, 5, 6, 82,
              83, 124,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/ameaca/:id",
        name: "creature-sheet",
        component: () =>
          C(
            () => import("./CreatureSheet-N3sR_PS3.js"),
            __vite__mapDeps([
              125, 79, 80, 81, 95, 91, 48, 38, 25, 21, 22, 43, 44, 28, 29, 15,
              16, 40, 41, 35, 96, 3, 4, 126,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/despertados-dashboard",
        name: "despertados-dashboard",
        component: () =>
          C(
            () => import("./StreamDashboard-Rt9Jz2F9.js"),
            __vite__mapDeps([127, 128])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/invazores",
        name: "invazores",
        component: () =>
          C(
            () => import("./InvazoresView-WLTDbtjY.js"),
            __vite__mapDeps([129, 130])
          ),
      },
      {
        path: "/blog",
        name: "blog-view",
        component: () =>
          C(
            () => import("./blog-view-YqItn7gA.js"),
            __vite__mapDeps([131, 132, 133])
          ),
      },
      {
        path: "/blog/persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel",
        name: "persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel",
        component: () =>
          C(
            () =>
              import(
                "./persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel-p0uTiwxs.js"
              ),
            __vite__mapDeps([134, 132, 133])
          ),
      },
      {
        path: "/blog/the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto",
        name: "the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto",
        component: () =>
          C(
            () =>
              import(
                "./the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto-q6zmj-x_.js"
              ),
            __vite__mapDeps([135, 132, 133])
          ),
      },
      {
        path: "/blog/mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia",
        name: "mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia",
        component: () =>
          C(
            () =>
              import(
                "./mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia-lur2CGcM.js"
              ),
            __vite__mapDeps([136, 132, 133])
          ),
      },
      {
        path: "/blog/genshin-impact-uma-jornada-alem-dos-limites",
        name: "genshin-impact-uma-jornada-alem-dos-limites",
        component: () =>
          C(
            () =>
              import(
                "./genshin-impact-uma-jornada-alem-dos-limites-Bj-70HL-.js"
              ),
            __vite__mapDeps([137, 132, 133])
          ),
      },
      {
        path: "/blog/final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva",
        name: "final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva",
        component: () =>
          C(
            () =>
              import(
                "./final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva-CEdXLMb7.js"
              ),
            __vite__mapDeps([138, 132, 133])
          ),
      },
      {
        path: "/blog/elden-ring-a-jornada-epica-alem-das-expectativas",
        name: "elden-ring-a-jornada-epica-alem-das-expectativas",
        component: () =>
          C(
            () =>
              import(
                "./elden-ring-a-jornada-epica-alem-das-expectativas-9EMrwboP.js"
              ),
            __vite__mapDeps([139, 132, 133])
          ),
      },
      {
        path: "/blog/divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo",
        name: "divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo",
        component: () =>
          C(
            () =>
              import(
                "./divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo-yswGzWPS.js"
              ),
            __vite__mapDeps([140, 132, 133])
          ),
      },
      {
        path: "/blog/cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3",
        name: "cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3",
        component: () =>
          C(
            () =>
              import(
                "./cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3-tf7twfu4.js"
              ),
            __vite__mapDeps([141, 132, 133])
          ),
      },
      {
        path: "/blog/assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg",
        name: "assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg",
        component: () =>
          C(
            () =>
              import(
                "./assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg-fLGJ6Ged.js"
              ),
            __vite__mapDeps([142, 132, 133])
          ),
      },
      {
        path: "/blog/o-que-e-rpg-de-mesa",
        name: "o-que-e-rpg-de-mesa",
        component: () =>
          C(
            () => import("./o-que-e-rpg-de-mesa-YSTs0tXi.js"),
            __vite__mapDeps([143, 132, 133])
          ),
      },
      {
        path: "/blog/o-rpg-ordem-paranormal",
        name: "o-rpg-ordem-paranormal",
        component: () =>
          C(
            () => import("./o-rpg-ordem-paranormal-q-j490vS.js"),
            __vite__mapDeps([144, 132, 133])
          ),
      },
      {
        path: "/blog/o-rpg-tormenta20",
        name: "o-rpg-tormenta20",
        component: () =>
          C(
            () => import("./o-rpg-tormenta20-Co_6ZmXy.js"),
            __vite__mapDeps([145, 132, 133])
          ),
      },
      {
        path: "/blog/3d-e-t-a-porta-de-entrada-pro-rpg-brasileiro",
        name: "3d&t-a-porta-de-entrada-pro-rpg-brasileiro",
        component: () =>
          C(
            () =>
              import(
                "./3d_t-a-porta-de-entrada-pro-rpg-brasileiro-iO8c0yTN.js"
              ),
            __vite__mapDeps([146, 132, 133])
          ),
      },
      {
        path: "/blog/vampiro-a-mascara-perdura-ao-longo-das-decadas",
        name: "vampiro-a-mascara-perdura-ao-longo-das-decadas",
        component: () =>
          C(
            () =>
              import(
                "./vampiro-a-mascara-perdura-ao-longo-das-decadas-5eKKDKTB.js"
              ),
            __vite__mapDeps([147, 132, 133])
          ),
      },
      {
        path: "/blog/a-popularizacao-de-dungeons-e-dragons",
        name: "a-popularizacao-de-dungeons-&-dragons",
        component: () =>
          C(
            () => import("./a-popularizacao-de-dungeons-_-dragons-yKrclLNB.js"),
            __vite__mapDeps([148, 132, 133])
          ),
      },
      {
        path: "/blog/criando-personagens-memoraveis-em-rpg-de-mesa",
        name: "criando-personagens-memoraveis-em-rpg-de-mesa",
        component: () =>
          C(
            () =>
              import(
                "./criando-personagens-memoraveis-em-rpg-de-mesa-fFuAeJqC.js"
              ),
            __vite__mapDeps([149, 132, 133])
          ),
      },
      {
        path: "/blog/diferentes-estilos-de-mestres-em-rpg-de-mesa",
        name: "diferentes-estilos-de-mestres-em-rpg-de-mesa",
        component: () =>
          C(
            () =>
              import(
                "./diferentes-estilos-de-mestres-em-rpg-de-mesa-wbydZcKC.js"
              ),
            __vite__mapDeps([150, 132, 133])
          ),
      },
      {
        path: "/blog/historia-do-rpg-uma-viagem-pela-evolucao-do-genero",
        name: "historia-do-rpg-uma-viagem-pela-evolucao-do-genero",
        component: () =>
          C(
            () =>
              import(
                "./historia-do-rpg-uma-viagem-pela-evolucao-do-genero-fUSHWjOG.js"
              ),
            __vite__mapDeps([151, 132, 133])
          ),
      },
      {
        path: "/blog/gurps-o-rpg-generico",
        name: "gurps-o-rpg-generico",
        component: () =>
          C(
            () => import("./gurps-o-rpg-generico-b1P2gx5_.js"),
            __vite__mapDeps([152, 132, 133])
          ),
      },
      {
        path: "/blog/pathfinder-o-maior-rival-de-dungeons-e-dragons",
        name: "pathfinder-o-maior-rival-de-dungeons-&-dragons",
        component: () =>
          C(
            () =>
              import(
                "./pathfinder-o-maior-rival-de-dungeons-_-dragons-R0vrcbn_.js"
              ),
            __vite__mapDeps([153, 132, 133])
          ),
      },
      {
        path: "/blog/um-guia-completo-sobre-pathfinder",
        name: "um-guia-completo-sobre-pathfinder",
        component: () =>
          C(
            () => import("./um-guia-completo-sobre-pathfinder-_TBi2MqW.js"),
            __vite__mapDeps([154, 132, 133])
          ),
      },
      {
        path: "/blog/os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa",
        name: "os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa",
        component: () =>
          C(
            () =>
              import(
                "./os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa-yRMuZNxp.js"
              ),
            __vite__mapDeps([155, 132, 133])
          ),
      },
      {
        path: "/blog/fate-core-system-e-o-sistema-mais-facil-do-mundo",
        name: "fate-core-system-e-o-sistema-mais-facil-do-mundo",
        component: () =>
          C(
            () =>
              import(
                "./fate-core-system-e-o-sistema-mais-facil-do-mundo-7vdVKIlZ.js"
              ),
            __vite__mapDeps([156, 132, 133])
          ),
      },
      {
        path: "/blog/dicas-para-mestres-de-rpg",
        name: "dicas-para-mestres-de-rpg",
        component: () =>
          C(
            () => import("./dicas-para-mestres-de-rpg-KAn_t-fU.js"),
            __vite__mapDeps([157, 132, 133])
          ),
      },
      {
        path: "/blog/criando-um-mundo-de-rpg-personalizado",
        name: "criando-um-mundo-de-rpg-personalizado",
        component: () =>
          C(
            () => import("./criando-um-mundo-de-rpg-personalizado-61Wov6C-.js"),
            __vite__mapDeps([158, 132, 133])
          ),
      },
      {
        path: "/blog/a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico",
        name: "a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico",
        component: () =>
          C(
            () =>
              import(
                "./a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico-c-sa7nAs.js"
              ),
            __vite__mapDeps([159, 132, 133])
          ),
      },
      {
        path: "/blog/os-beneficios-do-rpg-para-a-vida-real",
        name: "os-beneficios-do-rpg-para-a-vida-real",
        component: () =>
          C(
            () => import("./os-beneficios-do-rpg-para-a-vida-real-a0IR6VZf.js"),
            __vite__mapDeps([160, 132, 133])
          ),
      },
      {
        path: "/blog/a-influencia-de-d-e-d-na-cultura-pop",
        name: "a-influencia-de-d&d-na-cultura-pop",
        component: () =>
          C(
            () => import("./a-influencia-de-d_d-na-cultura-pop-LSnxpJ-o.js"),
            __vite__mapDeps([161, 132, 133])
          ),
      },
      {
        path: "/blog/a-evolucao-das-mecanicas-de-rpg",
        name: "a-evolucao-das-mecanicas-de-rpg",
        component: () =>
          C(
            () => import("./a-evolucao-das-mecanicas-de-rpg-T-59NeDp.js"),
            __vite__mapDeps([162, 132, 133])
          ),
      },
      {
        path: "/blog/racas-e-classes-explorando-as-escolhas-de-personagem",
        name: "racas-e-classes-explorando-as-escolhas-de-personagem",
        component: () =>
          C(
            () =>
              import(
                "./racas-e-classes-explorando-as-escolhas-de-personagem-SjBFJDSg.js"
              ),
            __vite__mapDeps([163, 132, 133])
          ),
      },
      {
        path: "/blog/o-papel-do-mestre-na-narrativa-de-rpg",
        name: "o-papel-do-mestre-na-narrativa-de-rpg",
        component: () =>
          C(
            () => import("./o-papel-do-mestre-na-narrativa-de-rpg-3KwC6Hyb.js"),
            __vite__mapDeps([164, 132, 133])
          ),
      },
      {
        path: "/blog/mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron",
        name: "mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron",
        component: () =>
          C(
            () =>
              import(
                "./mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron-GDokbjtI.js"
              ),
            __vite__mapDeps([165, 132, 133])
          ),
      },
      {
        path: "/blog/o-impacto-da-arte-na-estetica-dos-rpgs",
        name: "o-impacto-da-arte-na-estetica-dos-rpgs",
        component: () =>
          C(
            () =>
              import("./o-impacto-da-arte-na-estetica-dos-rpgs-_tekumOu.js"),
            __vite__mapDeps([166, 132, 133])
          ),
      },
      {
        path: "/blog/a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg",
        name: "a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg",
        component: () =>
          C(
            () =>
              import(
                "./a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg-ZgASWISO.js"
              ),
            __vite__mapDeps([167, 132, 133])
          ),
      },
      {
        path: "/blog/mitos-e-lendas-folcloricas-no-mundo-dos-rpgs",
        name: "mitos-e-lendas-folcloricas-no-mundo-dos-rpgs",
        component: () =>
          C(
            () =>
              import(
                "./mitos-e-lendas-folcloricas-no-mundo-dos-rpgs-QjicP5p_.js"
              ),
            __vite__mapDeps([168, 132, 133])
          ),
      },
      {
        path: "/blog/o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa",
        name: "o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa",
        component: () =>
          C(
            () =>
              import(
                "./o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa-gvoXnLod.js"
              ),
            __vite__mapDeps([169, 132, 133])
          ),
      },
      {
        path: "/blog/rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval",
        name: "rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval",
        component: () =>
          C(
            () =>
              import(
                "./rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval-6TFpmOlW.js"
              ),
            __vite__mapDeps([170, 132, 133])
          ),
      },
      {
        path: "/blog/como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa",
        name: "como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa",
        component: () =>
          C(
            () =>
              import(
                "./como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa-LxkB3vEn.js"
              ),
            __vite__mapDeps([171, 132, 133])
          ),
      },
      {
        path: "/blog/descobrindo-o-mundo-do-rpg-savage-worlds",
        name: "descobrindo-o-mundo-do-rpg-savage-worlds",
        component: () =>
          C(
            () =>
              import("./descobrindo-o-mundo-do-rpg-savage-worlds-NCp5tsFU.js"),
            __vite__mapDeps([172, 132, 133])
          ),
      },
      {
        path: "/blog/explorando-os-subgeneros-do-rpg",
        name: "explorando-os-subgeneros-do-rpg",
        component: () =>
          C(
            () => import("./explorando-os-subgeneros-do-rpg-2I01Mbz7.js"),
            __vite__mapDeps([173, 132, 133])
          ),
      },
      {
        path: "/blog/baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores",
        name: "baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores",
        component: () =>
          C(
            () =>
              import(
                "./baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores-aK6izQjC.js"
              ),
            __vite__mapDeps([174, 132, 133])
          ),
      },
      {
        path: "/blog/descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world",
        name: "descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world",
        component: () =>
          C(
            () =>
              import(
                "./descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world-gyKewC49.js"
              ),
            __vite__mapDeps([175, 132, 133])
          ),
      },
      {
        path: "/blog/descobrindo-o-universo-do-rpg-world-of-darkness",
        name: "descobrindo-o-universo-do-rpg-world-of-darkness",
        component: () =>
          C(
            () =>
              import(
                "./descobrindo-o-universo-do-rpg-world-of-darkness-Pf5ptRNC.js"
              ),
            __vite__mapDeps([176, 132, 133])
          ),
      },
      {
        path: "/blog/e-dificil-comecar-a-jogar-rpg-de-mesa",
        name: "e-dificil-comecar-a-jogar-rpg-de-mesa",
        component: () =>
          C(
            () => import("./e-dificil-comecar-a-jogar-rpg-de-mesa-IuWtLWQk.js"),
            __vite__mapDeps([177, 132, 133])
          ),
      },
      {
        path: "/blog/a-importancia-da-cooperacao-em-jogos-de-rpg",
        name: "a-importancia-da-cooperacao-em-jogos-de-rpg",
        component: () =>
          C(
            () =>
              import(
                "./a-importancia-da-cooperacao-em-jogos-de-rpg-BMEbca5p.js"
              ),
            __vite__mapDeps([178, 132, 133])
          ),
      },
      {
        path: "/blog/criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo",
        name: "criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo",
        component: () =>
          C(
            () =>
              import(
                "./criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo-uQKCOs_q.js"
              ),
            __vite__mapDeps([179, 132, 133])
          ),
      },
      {
        path: "/blog/o-rpg-como-pilar-da-cultura-geek-e-nerd",
        name: "o-rpg-como-pilar-da-cultura-geek-e-nerd",
        component: () =>
          C(
            () =>
              import("./o-rpg-como-pilar-da-cultura-geek-e-nerd-1INcmFvV.js"),
            __vite__mapDeps([180, 132, 133])
          ),
      },
      {
        path: "/blog/criando-personagens-complexos-e-multidimensionais-no-rpg",
        name: "criando-personagens-complexos-e-multidimensionais-no-rpg",
        component: () =>
          C(
            () =>
              import(
                "./criando-personagens-complexos-e-multidimensionais-no-rpg-ri45Dgij.js"
              ),
            __vite__mapDeps([181, 132, 133])
          ),
      },
      {
        path: "/blog/a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa",
        name: "a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa",
        component: () =>
          C(
            () =>
              import(
                "./a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa-eEV_zdbH.js"
              ),
            __vite__mapDeps([182, 132, 133])
          ),
      },
      {
        path: "/blog/construindo-mundos-de-campanha-de-rpg-atrativos",
        name: "construindo-mundos-de-campanha-de-rpg-atrativos",
        component: () =>
          C(
            () =>
              import(
                "./construindo-mundos-de-campanha-de-rpg-atrativos-bM8JGr9s.js"
              ),
            __vite__mapDeps([183, 132, 133])
          ),
      },
      {
        path: "/blog/o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg",
        name: "o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg",
        component: () =>
          C(
            () =>
              import(
                "./o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg-m1qAwehf.js"
              ),
            __vite__mapDeps([184, 132, 133])
          ),
      },
      {
        path: "/blog/as-origens-e-a-evolucao-dos-dados-de-rpg",
        name: "as-origens-e-a-evolucao-dos-dados-de-rpg",
        component: () =>
          C(
            () =>
              import("./as-origens-e-a-evolucao-dos-dados-de-rpg-Aa_U4ckF.js"),
            __vite__mapDeps([185, 132, 133])
          ),
      },
      {
        path: "/blog/rpg-como-ferramenta-de-aprendizado",
        name: "rpg-como-ferramenta-de-aprendizado",
        component: () =>
          C(
            () => import("./rpg-como-ferramenta-de-aprendizado-sKOJTR11.js"),
            __vite__mapDeps([186, 132, 133])
          ),
      },
      {
        path: "/blog/inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg",
        name: "inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg",
        component: () =>
          C(
            () =>
              import(
                "./inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg-_BLu4zpD.js"
              ),
            __vite__mapDeps([187, 132, 133])
          ),
      },
      {
        path: "/blog/o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg",
        name: "o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg",
        component: () =>
          C(
            () =>
              import(
                "./o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg-SoWlbsUo.js"
              ),
            __vite__mapDeps([188, 132, 133])
          ),
      },
      {
        path: "/blog/rpgs-para-criancas-e-iniciantes",
        name: "rpgs-para-criancas-e-iniciantes",
        component: () =>
          C(
            () => import("./rpgs-para-criancas-e-iniciantes-fmFZe_w0.js"),
            __vite__mapDeps([189, 132, 133])
          ),
      },
      {
        path: "/blog/etica-e-responsabilidade-em-jogos-de-rpg",
        name: "etica-e-responsabilidade-em-jogos-de-rpg",
        component: () =>
          C(
            () =>
              import("./etica-e-responsabilidade-em-jogos-de-rpg-XL7s5ktY.js"),
            __vite__mapDeps([190, 132, 133])
          ),
      },
      {
        path: "/blog/o-uso-de-ferramentas-digitais-em-mesas-de-rpg",
        name: "o-uso-de-ferramentas-digitais-em-mesas-de-rpg",
        component: () =>
          C(
            () =>
              import(
                "./o-uso-de-ferramentas-digitais-em-mesas-de-rpg-LW85rdOS.js"
              ),
            __vite__mapDeps([191, 132, 133])
          ),
      },
      {
        path: "/blog/criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos",
        name: "criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos",
        component: () =>
          C(
            () =>
              import(
                "./criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos-GjM4-bPr.js"
              ),
            __vite__mapDeps([192, 132, 133])
          ),
      },
      {
        path: "/blog/a-influencia-das-artes-marciais-em-personagens-de-rpg",
        name: "a-influencia-das-artes-marciais-em-personagens-de-rpg",
        component: () =>
          C(
            () =>
              import(
                "./a-influencia-das-artes-marciais-em-personagens-de-rpg-nrvKFWL3.js"
              ),
            __vite__mapDeps([193, 132, 133])
          ),
      },
      {
        path: "/blog/a-diversidade-de-estilos-de-narrativa-em-rpg",
        name: "a-diversidade-de-estilos-de-narrativa-em-rpg",
        component: () =>
          C(
            () =>
              import(
                "./a-diversidade-de-estilos-de-narrativa-em-rpg-SCDu7fYM.js"
              ),
            __vite__mapDeps([194, 132, 133])
          ),
      },
      {
        path: "/blog/o-uso-terapeutico-dos-jogos-de-rpg",
        name: "o-uso-terapeutico-dos-jogos-de-rpg",
        component: () =>
          C(
            () => import("./o-uso-terapeutico-dos-jogos-de-rpg-phTPt_gn.js"),
            __vite__mapDeps([195, 132, 133])
          ),
      },
      {
        path: "/blog/diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos",
        name: "diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos",
        component: () =>
          C(
            () =>
              import(
                "./diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos-vGXgWdH_.js"
              ),
            __vite__mapDeps([196, 132, 133])
          ),
      },
      {
        path: "/blog/evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps",
        name: "evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps",
        component: () =>
          C(
            () =>
              import(
                "./evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps-tLOEOt9I.js"
              ),
            __vite__mapDeps([197, 132, 133])
          ),
      },
      {
        path: "/blog/influencia_da_mitologia_em_jogos_de_rpg",
        name: "influencia_da_mitologia_em_jogos_de_rpg",
        component: () =>
          C(
            () =>
              import("./influencia_da_mitologia_em_jogos_de_rpg-q-Saw7d7.js"),
            __vite__mapDeps([198, 132, 133])
          ),
      },
      {
        path: "/blog/rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois",
        name: "rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois",
        component: () =>
          C(
            () =>
              import(
                "./rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois-KlgvrG1D.js"
              ),
            __vite__mapDeps([199, 132, 133])
          ),
      },
      {
        path: "/blog/impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada",
        name: "impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada",
        component: () =>
          C(
            () =>
              import(
                "./impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada-_2FULGxr.js"
              ),
            __vite__mapDeps([200, 132, 133])
          ),
      },
      {
        path: "/blog/mundo_das_miniaturas_e_cenarios_personalizados",
        name: "mundo_das_miniaturas_e_cenarios_personalizados",
        component: () =>
          C(
            () =>
              import(
                "./mundo_das_miniaturas_e_cenarios_personalizados-KcbT6Toc.js"
              ),
            __vite__mapDeps([201, 132, 133])
          ),
      },
      {
        path: "/blog/evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis",
        name: "evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis",
        component: () =>
          C(
            () =>
              import(
                "./evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis-XCXtPgZa.js"
              ),
            __vite__mapDeps([202, 132, 133])
          ),
      },
      {
        path: "/blog/historia_e_a_evolucao_dos_larp_live_action_role_playing",
        name: "historia_e_a_evolucao_dos_larp_live_action_role_playing",
        component: () =>
          C(
            () =>
              import(
                "./historia_e_a_evolucao_dos_larp_live_action_role_playing-b82XeH2L.js"
              ),
            __vite__mapDeps([203, 132, 133])
          ),
      },
      {
        path: "/blog/jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg",
        name: "jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg",
        component: () =>
          C(
            () =>
              import(
                "./jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg-PtoYkxHG.js"
              ),
            __vite__mapDeps([204, 132, 133])
          ),
      },
      {
        path: "/blog/uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg",
        name: "uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg",
        component: () =>
          C(
            () =>
              import(
                "./uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg-HAYwWKvK.js"
              ),
            __vite__mapDeps([205, 132, 133])
          ),
      },
      {
        path: "/blog/mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas",
        name: "mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas",
        component: () =>
          C(
            () =>
              import(
                "./mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas-sDM7coym.js"
              ),
            __vite__mapDeps([206, 132, 133])
          ),
      },
      {
        path: "/blog/psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes",
        name: "psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes",
        component: () =>
          C(
            () =>
              import(
                "./psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes-TpPVfeBx.js"
              ),
            __vite__mapDeps([207, 132, 133])
          ),
      },
      {
        path: "/blog/papel_das_ferramentas_de_software_em_jogos_de_rpg",
        name: "papel_das_ferramentas_de_software_em_jogos_de_rpg",
        component: () =>
          C(
            () =>
              import(
                "./papel_das_ferramentas_de_software_em_jogos_de_rpg-sa8Remm0.js"
              ),
            __vite__mapDeps([208, 132, 133])
          ),
      },
      {
        path: "/blog/historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos",
        name: "historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos",
        component: () =>
          C(
            () =>
              import(
                "./historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos-BwHlFGrS.js"
              ),
            __vite__mapDeps([209, 132, 133])
          ),
      },
      {
        path: "/blog/explorando_a_cultura_do_cosplay_em_rpg",
        name: "explorando_a_cultura_do_cosplay_em_rpg",
        component: () =>
          C(
            () =>
              import("./explorando_a_cultura_do_cosplay_em_rpg-k3M8-582.js"),
            __vite__mapDeps([210, 132, 133])
          ),
      },
      {
        path: "/blog/rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico",
        name: "rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico",
        component: () =>
          C(
            () =>
              import(
                "./rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico-fIhAIOuo.js"
              ),
            __vite__mapDeps([211, 132, 133])
          ),
      },
      {
        path: "/blog/uso_de_simbologia_e_mitologia_em_rpgs",
        name: "uso_de_simbologia_e_mitologia_em_rpgs",
        component: () =>
          C(
            () => import("./uso_de_simbologia_e_mitologia_em_rpgs-0yKjvCAe.js"),
            __vite__mapDeps([212, 132, 133])
          ),
      },
      {
        path: "/blog/economia_nos_mundos_de_rpg_moedas_e_comercio",
        name: "economia_nos_mundos_de_rpg_moedas_e_comercio",
        component: () =>
          C(
            () =>
              import(
                "./economia_nos_mundos_de_rpg_moedas_e_comercio-Lgd_C57I.js"
              ),
            __vite__mapDeps([213, 132, 133])
          ),
      },
      {
        path: "/blog/importancia_da_diversidade_e_representacao_nos_jogos",
        name: "importancia_da_diversidade_e_representacao_nos_jogos",
        component: () =>
          C(
            () =>
              import(
                "./importancia_da_diversidade_e_representacao_nos_jogos-AZVnVmQi.js"
              ),
            __vite__mapDeps([214, 132, 133])
          ),
      },
      {
        path: "/blog/futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas",
        name: "futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas",
        component: () =>
          C(
            () =>
              import(
                "./futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas-fgE31Cp3.js"
              ),
            __vite__mapDeps([215, 132, 133])
          ),
      },
      {
        path: "/:catchAll(.*)*",
        name: "not-found",
        component: () =>
          C(
            () => import("./NotFoundView-suoWeQrJ.js"),
            __vite__mapDeps([216, 217])
          ),
      },
    ],
  }),
  MO = () =>
    new Promise((t, e) => {
      const n = ss(
        Un(),
        (r) => {
          n(), t(r);
        },
        e
      );
    });
Yw.beforeEach(async (t, e, n) => {
  var r;
  if (t.matched.some((i) => i.meta.requiresAuth))
    if (await MO()) {
      const i = Un(),
        s = Bn();
      if (!((r = i.currentUser) != null && r.uid)) return;
      const o = await xw(Kt(s, "users", i.currentUser.uid));
      if (o.data()) {
        const a = o.data();
        let l = !1;
        a.pictureURL === void 0 && ((a.pictureURL = ""), (l = !0)),
          a.pictureFullPath === void 0 && ((a.pictureFullPath = ""), (l = !0)),
          a.tier === void 0 && ((a.tier = 0), (l = !0)),
          a.donationAmount === void 0 && ((a.donationAmount = 0), (l = !0)),
          l && (await Lo(Kt(s, "users", i.currentUser.uid), a)),
          n();
      } else {
        const a = {
          name: i.currentUser.displayName || "",
          uid: i.currentUser.uid,
          campaignsId: [],
          publicProfile: !1,
          pictureURL: "",
          pictureFullPath: "",
          tier: 0,
          donationAmount: 0,
        };
        await Tx(Kt(s, "users", i.currentUser.uid), a), n();
      }
    } else n({ name: "login-page" });
  else n();
});
function Uh(t) {
  return (Uh =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(t);
}
function Sm(t, e, n, r, i, s, o) {
  try {
    var a = t[s](o),
      l = a.value;
  } catch (c) {
    return void n(c);
  }
  a.done ? e(l) : Promise.resolve(l).then(r, i);
}
function $O(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function Ri(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function qm(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function qt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? qm(Object(n), !0).forEach(function (r) {
          Ri(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : qm(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function Gr(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Yc(e);
    })(t) ||
    (function (e) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == "string") return Yc(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
          (r === "Object" && e.constructor && (r = e.constructor.name),
          r === "Map" || r === "Set")
        )
          return Array.from(e);
        if (
          r === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Yc(e, n);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Yc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var VO = function (t) {
    return (function (e, n) {
      return Gr(e.querySelectorAll(n) || []);
    })(
      t,
      'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  },
  xm = function (t) {
    return t == document.activeElement;
  },
  FO = (function () {
    function t() {
      (function (r, i) {
        if (!(r instanceof i))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this.root = null),
        (this.elements = []),
        (this.onKeyDown = this.onKeyDown.bind(this)),
        (this.enable = this.enable.bind(this)),
        (this.disable = this.disable.bind(this)),
        (this.firstElement = this.firstElement.bind(this)),
        (this.lastElement = this.lastElement.bind(this));
    }
    var e, n;
    return (
      (e = t),
      (n = [
        {
          key: "lastElement",
          value: function () {
            return this.elements[this.elements.length - 1] || null;
          },
        },
        {
          key: "firstElement",
          value: function () {
            return this.elements[0] || null;
          },
        },
        {
          key: "onKeyDown",
          value: function (r) {
            if (
              (function (i) {
                return i.key === "Tab" || i.keyCode === 9;
              })(r)
            ) {
              if (!r.shiftKey)
                return !document.activeElement || xm(this.lastElement())
                  ? (this.firstElement().focus(), void r.preventDefault())
                  : void 0;
              xm(this.firstElement()) &&
                (this.lastElement().focus(), r.preventDefault());
            }
          },
        },
        {
          key: "enabled",
          value: function () {
            return !!this.root;
          },
        },
        {
          key: "enable",
          value: function (r) {
            r &&
              ((this.root = r),
              (this.elements = VO(this.root)),
              this.root.addEventListener("keydown", this.onKeyDown));
          },
        },
        {
          key: "disable",
          value: function () {
            this.root.removeEventListener("keydown", this.onKeyDown),
              (this.root = null);
          },
        },
      ]) && $O(e.prototype, n),
      t
    );
  })(),
  Rm = function (t) {
    var e = t.targetTouches ? t.targetTouches[0] : t;
    return { x: e.clientX, y: e.clientY };
  },
  na = function (t, e, n) {
    return (
      typeof t != "number" && (t = Math.min(e, n) || e),
      typeof n != "number" && (n = Math.max(e, t)),
      Math.min(Math.max(e, t), n)
    );
  },
  Pm = function (t) {
    return (t && Number(t.replace(/px$/, ""))) || 0;
  },
  el = {
    down: { pc: "mousedown", m: "touchstart" },
    move: { pc: "mousemove", m: "touchmove" },
    up: { pc: "mouseup", m: "touchend" },
  },
  ra = function (t, e, n) {
    e && e.addEventListener(el[t].pc, n),
      e && e.addEventListener(el[t].m, n, { passive: !1 });
  },
  ia = function (t, e, n) {
    e && e.removeEventListener(el[t].pc, n),
      e && e.removeEventListener(el[t].m, n);
  },
  Bh = !1;
if (typeof window < "u") {
  var Om = {
    get passive() {
      Bh = !0;
    },
  };
  window.addEventListener("testPassive", null, Om),
    window.removeEventListener("testPassive", null, Om);
}
var Ns,
  Ls,
  Xw =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  lr = [],
  tl = !1,
  wa = 0,
  Dm = -1,
  UO = function (t, e) {
    var n = !1;
    return (
      (function (r) {
        for (var i = []; r; ) {
          if ((i.push(r), r.classList.contains("vfm"))) return i;
          r = r.parentElement;
        }
        return i;
      })(t).forEach(function (r) {
        (function (i) {
          if (!i || i.nodeType !== Node.ELEMENT_NODE) return !1;
          var s = window.getComputedStyle(i);
          return (
            ["auto", "scroll"].includes(s.overflowY) &&
            i.scrollHeight > i.clientHeight
          );
        })(r) &&
          (function (i, s) {
            return !(
              (i.scrollTop === 0 && s < 0) ||
              (i.scrollTop + i.clientHeight + s >= i.scrollHeight && s > 0)
            );
          })(r, e) &&
          (n = !0);
      }),
      n
    );
  },
  Jw = function (t) {
    return lr.some(function () {
      return UO(t, -wa);
    });
  },
  Yu = function (t) {
    var e = t || window.event;
    return (
      !!Jw(e.target) ||
      e.touches.length > 1 ||
      (e.preventDefault && e.preventDefault(), !1)
    );
  },
  BO = function (t, e) {
    if (t) {
      if (
        !lr.some(function (r) {
          return r.targetElement === t;
        })
      ) {
        var n = { targetElement: t, options: e || {} };
        (lr = [].concat(Gr(lr), [n])),
          Xw
            ? ((t.ontouchstart = function (r) {
                r.targetTouches.length === 1 &&
                  (Dm = r.targetTouches[0].clientY);
              }),
              (t.ontouchmove = function (r) {
                r.targetTouches.length === 1 &&
                  (function (i, s) {
                    (wa = i.targetTouches[0].clientY - Dm),
                      !Jw(i.target) &&
                        ((s && s.scrollTop === 0 && wa > 0) ||
                        ((function (o) {
                          return (
                            !!o &&
                            o.scrollHeight - o.scrollTop <= o.clientHeight
                          );
                        })(s) &&
                          wa < 0)
                          ? Yu(i)
                          : i.stopPropagation());
                  })(r, t);
              }),
              tl ||
                (document.addEventListener(
                  "touchmove",
                  Yu,
                  Bh ? { passive: !1 } : void 0
                ),
                (tl = !0)))
            : (function (r) {
                if (Ls === void 0) {
                  var i = !!r && r.reserveScrollBarGap === !0,
                    s =
                      window.innerWidth - document.documentElement.clientWidth;
                  if (i && s > 0) {
                    var o = parseInt(
                      getComputedStyle(document.body).getPropertyValue(
                        "padding-right"
                      ),
                      10
                    );
                    (Ls = document.body.style.paddingRight),
                      (document.body.style.paddingRight = "".concat(
                        o + s,
                        "px"
                      ));
                  }
                }
                Ns === void 0 &&
                  ((Ns = document.body.style.overflow),
                  (document.body.style.overflow = "hidden"));
              })(e);
      }
    } else
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
  },
  Xc = function (t) {
    t
      ? ((lr = lr.filter(function (e) {
          return e.targetElement !== t;
        })),
        Xw
          ? ((t.ontouchstart = null),
            (t.ontouchmove = null),
            tl &&
              lr.length === 0 &&
              (document.removeEventListener(
                "touchmove",
                Yu,
                Bh ? { passive: !1 } : void 0
              ),
              (tl = !1)))
          : lr.length ||
            (Ls !== void 0 &&
              ((document.body.style.paddingRight = Ls), (Ls = void 0)),
            Ns !== void 0 &&
              ((document.body.style.overflow = Ns), (Ns = void 0))))
      : console.error(
          "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
        );
  },
  sa = function () {},
  Nm = "enter",
  Lm = "entering",
  oa = "leave",
  Mm = "leavng",
  jO = {
    t: "ns-resize",
    tr: "nesw-resize",
    r: "ew-resize",
    br: "nwse-resize",
    b: "ns-resize",
    bl: "nesw-resize",
    l: "ew-resize",
    tl: "nwse-resize",
  },
  ba = {
    props: {
      name: { type: String, default: null },
      modelValue: { type: Boolean, default: !1 },
      ssr: { type: Boolean, default: !0 },
      classes: { type: [String, Object, Array], default: "" },
      overlayClass: { type: [String, Object, Array], default: "" },
      contentClass: { type: [String, Object, Array], default: "" },
      styles: {
        type: [Object, Array],
        default: function () {
          return {};
        },
      },
      overlayStyle: {
        type: [Object, Array],
        default: function () {
          return {};
        },
      },
      contentStyle: {
        type: [Object, Array],
        default: function () {
          return {};
        },
      },
      lockScroll: { type: Boolean, default: !0 },
      hideOverlay: { type: Boolean, default: !1 },
      clickToClose: { type: Boolean, default: !0 },
      escToClose: { type: Boolean, default: !1 },
      preventClick: { type: Boolean, default: !1 },
      attach: {
        type: null,
        default: !1,
        validator: function (t) {
          var e = Uh(t);
          return (
            e === "boolean" ||
            e === "string" ||
            t.nodeType === Node.ELEMENT_NODE
          );
        },
      },
      transition: { type: [String, Object], default: "vfm" },
      overlayTransition: { type: [String, Object], default: "vfm" },
      keepOverlay: { type: Boolean, default: !1 },
      zIndexAuto: { type: Boolean, default: !0 },
      zIndexBase: { type: [String, Number], default: 1e3 },
      zIndex: { type: [Boolean, String, Number], default: !1 },
      focusRetain: { type: Boolean, default: !0 },
      focusTrap: { type: Boolean, default: !1 },
      fitParent: { type: Boolean, default: !0 },
      drag: { type: Boolean, default: !1 },
      dragSelector: { type: String, default: "" },
      keepChangedStyle: { type: Boolean, default: !1 },
      resize: { type: Boolean, default: !1 },
      resizeDirections: {
        type: Array,
        default: function () {
          return ["t", "tr", "r", "br", "b", "bl", "l", "tl"];
        },
        validator: function (t) {
          return (
            ["t", "tr", "r", "br", "b", "bl", "l", "tl"].filter(function (e) {
              return t.indexOf(e) !== -1;
            }).length === t.length
          );
        },
      },
      minWidth: { type: Number, default: 0 },
      minHeight: { type: Number, default: 0 },
      maxWidth: { type: Number, default: 1 / 0 },
      maxHeight: { type: Number, default: 1 / 0 },
    },
    emits: [
      "update:modelValue",
      "click-outside",
      "before-open",
      "opened",
      "before-close",
      "closed",
      "_before-open",
      "_opened",
      "_closed",
      "drag:start",
      "drag:move",
      "drag:end",
      "resize:start",
      "resize:move",
      "resize:end",
    ],
    setup: function (t, e) {
      var n = e.emit,
        r = Symbol("vfm"),
        i = ne(null),
        s = ne(null),
        o = ne(null),
        a = ne(null),
        l = ne(null),
        c = ne(null),
        u = ne(null),
        d = new FO(),
        h = ne(!1),
        f = Ln({ modal: !1, overlay: !1, resize: !1 }),
        g = ne(null),
        y = ne(null),
        _ = ne(!1),
        T = ne({}),
        v = ne({}),
        k = ne(null),
        E = ne(null),
        O = sa,
        V = sa,
        z = ge(function () {
          return typeof t.overlayTransition == "string"
            ? { name: t.overlayTransition }
            : qt({}, t.overlayTransition);
        }),
        L = ge(function () {
          return typeof t.transition == "string"
            ? { name: t.transition }
            : qt({}, t.transition);
        }),
        B = ge(function () {
          return (t.hideOverlay || g.value === oa) && y.value === oa;
        }),
        ee = ge(function () {
          return t.zIndex === !1
            ? !!t.zIndexAuto && +t.zIndexBase + 2 * (u.value || 0)
            : t.zIndex;
        }),
        fe = ge(function () {
          return qt({}, ee.value !== !1 && { zIndex: ee.value });
        }),
        j = ge(function () {
          var I = [v.value];
          return (
            Array.isArray(t.contentStyle)
              ? I.push.apply(I, Gr(t.contentStyle))
              : I.push(t.contentStyle),
            I
          );
        });
      function se() {
        return {
          uid: r,
          props: t,
          emit: n,
          vfmContainer: s,
          vfmContent: o,
          vfmResize: a,
          vfmOverlayTransition: l,
          vfmTransition: c,
          getAttachElement: Re,
          modalStackIndex: u,
          visibility: f,
          handleLockScroll: De,
          $focusTrap: d,
          toggle: Dt,
          params: T,
        };
      }
      function Ie() {
        if (t.modelValue) {
          if (
            (n("_before-open", _e({ type: "_before-open" })),
            kt("before-open", !1))
          )
            return void V("show");
          var I = Re();
          if (I || t.attach === !1) {
            if (t.attach !== !1) {
              if (!i.value)
                return (
                  (h.value = !0),
                  void ar(function () {
                    Ie();
                  })
                );
              I.appendChild(i.value);
            }
            var $ = t.api.openedModals.findIndex(function (Y) {
              return Y.uid === r;
            });
            $ !== -1 && t.api.openedModals.splice($, 1),
              t.api.openedModals.push(se()),
              (u.value = t.api.openedModals.length - 1),
              De(),
              t.api.openedModals
                .filter(function (Y) {
                  return Y.uid !== r;
                })
                .forEach(function (Y, Ae) {
                  Y.getAttachElement() === I &&
                    ((Y.modalStackIndex.value = Ae),
                    !Y.props.keepOverlay && (Y.visibility.overlay = !1));
                }),
              (h.value = !0),
              (f.overlay = !0),
              (f.modal = !0);
          } else
            I !== !1 &&
              console.warn("Unable to locate target ".concat(t.attach));
        }
      }
      function Et() {
        var I = t.api.openedModals.findIndex(function (Y) {
          return Y.uid === r;
        });
        if (
          (I !== -1 && t.api.openedModals.splice(I, 1),
          t.api.openedModals.length > 0)
        ) {
          var $ = t.api.openedModals[t.api.openedModals.length - 1];
          $.props.focusTrap && $.$focusTrap.firstElement().focus(),
            ($.props.focusRetain || $.props.focusTrap) &&
              $.vfmContainer.value.focus(),
            !$.props.hideOverlay && ($.visibility.overlay = !0);
        }
        t.drag && kr(),
          t.resize && W(),
          (k.value = null),
          (f.overlay = !1),
          (f.modal = !1);
      }
      function De() {
        t.modelValue &&
          ar(function () {
            t.lockScroll
              ? BO(s.value, { reserveScrollBarGap: !0 })
              : Xc(s.value);
          });
      }
      function Re() {
        return (
          t.attach !== !1 &&
          (typeof t.attach == "string"
            ? !!window && window.document.querySelector(t.attach)
            : t.attach)
        );
      }
      function _e() {
        var I =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return qt({ ref: se() }, I);
      }
      function kt(I, $) {
        var Y = !1,
          Ae = _e({
            type: I,
            stop: function () {
              Y = !0;
            },
          });
        return (
          n(I, Ae),
          !!Y &&
            ((_.value = !0),
            ar(function () {
              n("update:modelValue", $);
            }),
            !0)
        );
      }
      function Gt(I, $, Y) {
        (k.value = "".concat($, ":").concat(Y)), n(k.value, I);
      }
      function Dt(I, $) {
        var Y = arguments;
        return new Promise(function (Ae, le) {
          (O = function (m) {
            Ae(m), (O = sa);
          }),
            (V = function (m) {
              le(m), (V = sa);
            });
          var p = typeof I == "boolean" ? I : !t.modelValue;
          p && Y.length === 2 && (T.value = $), n("update:modelValue", p);
        });
      }
      function Qe(I) {
        I.stopPropagation();
        var $,
          Y = "resize",
          Ae = "drag",
          le = I.target.getAttribute("direction");
        if (le) $ = Y;
        else {
          if (
            !(function (te, oe, ye) {
              return (
                ye === "" || Gr(oe.querySelectorAll(ye)).includes(te.target)
              );
            })(I, o.value, t.dragSelector)
          )
            return;
          $ = Ae;
        }
        Gt(I, $, "start");
        var p,
          m,
          b,
          A,
          x = Rm(I),
          D = s.value.getBoundingClientRect(),
          F = o.value.getBoundingClientRect(),
          M = window.getComputedStyle(o.value).position === "absolute",
          U = Pm(v.value.top),
          P = Pm(v.value.left),
          X = (function () {
            if (t.fitParent) {
              var te = {
                absolute: function () {
                  return {
                    minTop: 0,
                    minLeft: 0,
                    maxTop: D.height - F.height,
                    maxLeft: D.width - F.width,
                  };
                },
                relative: function () {
                  return {
                    minTop: U + D.top - F.top,
                    minLeft: P + D.left - F.left,
                    maxTop: U + D.bottom - F.bottom,
                    maxLeft: P + D.right - F.right,
                  };
                },
              };
              return M ? te.absolute() : te.relative();
            }
            return {};
          })(),
          K =
            $ === Y &&
            ((p = document.body),
            (m = "cursor"),
            (b = jO[le]),
            (A = p.style[m]),
            (p.style[m] = b),
            function () {
              p.style[m] = A;
            }),
          J = function (te) {
            te.stopPropagation(), Gt(te, $, "move");
            var oe,
              ye,
              Ce = Rm(te),
              ke = { x: Ce.x - x.x, y: Ce.y - x.y };
            $ === Y &&
              (ke = (function (Hn, Fo, Sr, qr, Tt) {
                var Ft = function (St) {
                    var Qt,
                      zn = Fo[St.axis];
                    zn = t.fitParent ? na(St.min, zn, St.max) : zn;
                    var Wn = na(St.minEdge, St.getEdge(zn), St.maxEdge);
                    return (
                      (zn = St.getOffsetAxis(Wn, Tt)),
                      Ri((Qt = {}), St.edgeName, Wn),
                      Ri(Qt, St.axis, zn),
                      Qt
                    );
                  },
                  Uo = function (St, Qt, zn, Wn) {
                    var Kh,
                      Gh = qr[Qt],
                      Qh = Sr[St] - qr[St],
                      Yh = (Kh = Qt).charAt(0).toUpperCase() + Kh.slice(1);
                    return {
                      axis: zn,
                      edgeName: Qt,
                      min: Wn ? Qh : -Gh,
                      max: Wn ? Gh : Qh,
                      minEdge: t["min".concat(Yh)],
                      maxEdge: t["max".concat(Yh)],
                      getEdge: function (_c) {
                        return qr[Qt] - _c * (Wn ? 1 : -1);
                      },
                      getOffsetAxis: function (_c, k0) {
                        var Xh = qr[Qt] - _c;
                        return k0 ? (Wn ? Xh : 0) : ((Wn ? 1 : -1) * Xh) / 2;
                      },
                    };
                  },
                  C0 = {
                    t: ["top", "height", "y", !0],
                    b: ["bottom", "height", "y", !1],
                    l: ["left", "width", "x", !0],
                    r: ["right", "width", "x", !1],
                  },
                  yc = { x: 0, y: 0 };
                return (
                  Hn.split("").forEach(function (St) {
                    var Qt = Uo.apply(void 0, Gr(C0[St]));
                    yc = qt(qt({}, yc), Ft(Qt));
                  }),
                  yc
                );
              })(le, ke, D, F, M)),
              M
                ? ((oe = F.top - D.top + ke.y), (ye = F.left - D.left + ke.x))
                : ((oe = U + ke.y), (ye = P + ke.x)),
              $ === Ae &&
                t.fitParent &&
                ((oe = na(X.minTop, oe, X.maxTop)),
                (ye = na(X.minLeft, ye, X.maxLeft)));
            var Nt = qt(
              qt(
                qt(
                  {
                    position: "relative",
                    top: oe + "px",
                    left: ye + "px",
                    margin: "unset",
                    touchAction: "none",
                  },
                  M && {
                    position: "absolute",
                    transform: "unset",
                    width: F.width + "px",
                    height: F.height + "px",
                  }
                ),
                ke.width && { width: ke.width + "px" }
              ),
              ke.height && { height: ke.height + "px" }
            );
            v.value = qt(qt({}, v.value), Nt);
          };
        ra("move", document, J),
          ra("up", document, function te(oe) {
            oe.stopPropagation(),
              $ === Y && K && K(),
              setTimeout(function () {
                Gt(oe, $, "end");
              }),
              ia("move", document, J),
              ia("up", document, te);
          });
      }
      function pn() {
        ra("down", o.value, Qe), (v.value.touchAction = "none");
      }
      function kr() {
        ia("down", o.value, Qe);
      }
      function S() {
        (f.resize = !0),
          ar(function () {
            ra("down", a.value, Qe);
          });
      }
      function W() {
        ia("down", a.value, Qe), (f.resize = !1);
      }
      return (
        ft(
          function () {
            return t.modelValue;
          },
          function (I) {
            if (_.value) _.value = !1;
            else if ((Ie(), !I)) {
              if (kt("before-close", !0)) return void V("hide");
              Et();
            }
          }
        ),
        ft(function () {
          return t.lockScroll;
        }, De),
        ft(
          function () {
            return t.hideOverlay;
          },
          function (I) {
            t.modelValue && !I && (f.overlay = !0);
          }
        ),
        ft(function () {
          return t.attach;
        }, Ie),
        ft(
          B,
          function (I) {
            I && ((h.value = !1), (s.value.style.display = "none"));
          },
          { flush: "post" }
        ),
        ft(
          function () {
            return t.drag;
          },
          function (I) {
            h.value && (I ? pn() : kr());
          }
        ),
        ft(
          function () {
            return t.resize;
          },
          function (I) {
            h.value && (I ? S() : W());
          }
        ),
        ft(
          function () {
            return t.keepChangedStyle;
          },
          function (I) {
            I || (v.value = {});
          }
        ),
        t.api.modals.push(se()),
        tn(function () {
          Ie();
        }),
        gl(function () {
          var I;
          Et(),
            t.lockScroll && s.value && Xc(s.value),
            i == null || (I = i.value) === null || I === void 0 || I.remove();
          var $ = t.api.modals.findIndex(function (Y) {
            return Y.uid === r;
          });
          t.api.modals.splice($, 1);
        }),
        {
          root: i,
          vfmContainer: s,
          vfmContent: o,
          vfmResize: a,
          vfmOverlayTransition: l,
          vfmTransition: c,
          computedOverlayTransition: z,
          computedTransition: L,
          visible: h,
          visibility: f,
          params: T,
          calculateZIndex: ee,
          bindStyle: fe,
          bindContentStyle: j,
          beforeOverlayEnter: function () {
            g.value = Lm;
          },
          afterOverlayEnter: function () {
            g.value = Nm;
          },
          beforeOverlayLeave: function () {
            g.value = Mm;
          },
          afterOverlayLeave: function () {
            g.value = oa;
          },
          beforeModalEnter: function () {
            y.value = Lm;
          },
          afterModalEnter: function () {
            (y.value = Nm),
              (t.focusRetain || t.focusTrap) && s.value.focus(),
              t.focusTrap && d.enable(s.value),
              t.drag && pn(),
              t.resize && S(),
              n("_opened"),
              n("opened", _e({ type: "opened" })),
              O("show");
          },
          beforeModalLeave: function () {
            (y.value = Mm), d.enabled() && d.disable();
          },
          afterModalLeave: function () {
            (y.value = oa),
              (u.value = null),
              t.lockScroll && Xc(s.value),
              t.keepChangedStyle || (v.value = {});
            var I = !1,
              $ = _e({
                type: "closed",
                stop: function () {
                  I = !0;
                },
              });
            n("_closed"), n("closed", $), O("hide"), I || (T.value = {});
          },
          onMousedown: function (I) {
            E.value = I == null ? void 0 : I.target;
          },
          onMouseupContainer: function () {
            E.value === s.value &&
              k.value !== "resize:move" &&
              (n("click-outside", _e({ type: "click-outside" })),
              t.clickToClose && n("update:modelValue", !1));
          },
          onEsc: function () {
            h.value && t.escToClose && n("update:modelValue", !1);
          },
        }
      );
    },
  },
  Jc = Mg();
Mn("data-v-2836fdb5");
var HO = {
  key: 0,
  ref: "vfmResize",
  class:
    "vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none",
};
$n();
var zO = Jc(function (t, e, n, r, i, s) {
  return n.ssr || r.visible
    ? uf(
        (R(),
        xe(
          "div",
          {
            key: 0,
            ref: "root",
            style: r.bindStyle,
            class: [
              "vfm vfm--inset",
              [
                n.attach === !1 ? "vfm--fixed" : "vfm--absolute",
                { "vfm--prevent-none": n.preventClick },
              ],
            ],
            onKeydown:
              e[4] ||
              (e[4] = fv(
                function () {
                  return r.onEsc && r.onEsc.apply(r, arguments);
                },
                ["esc"]
              )),
          },
          [
            me(
              vr,
              Mi(r.computedOverlayTransition, {
                onBeforeEnter: r.beforeOverlayEnter,
                onAfterEnter: r.afterOverlayEnter,
                onBeforeLeave: r.beforeOverlayLeave,
                onAfterLeave: r.afterOverlayLeave,
              }),
              {
                default: Jc(function () {
                  return [
                    !n.hideOverlay && r.visibility.overlay
                      ? (R(),
                        xe(
                          "div",
                          {
                            key: 0,
                            class: [
                              "vfm__overlay vfm--overlay vfm--absolute vfm--inset",
                              n.overlayClass,
                            ],
                            style: n.overlayStyle,
                          },
                          null,
                          6
                        ))
                      : Oe("v-if", !0),
                  ];
                }),
                _: 1,
              },
              16,
              ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]
            ),
            me(
              vr,
              Mi(r.computedTransition, {
                onBeforeEnter: r.beforeModalEnter,
                onAfterEnter: r.afterModalEnter,
                onBeforeLeave: r.beforeModalLeave,
                onAfterLeave: r.afterModalLeave,
              }),
              {
                default: Jc(function () {
                  return [
                    uf(
                      me(
                        "div",
                        {
                          ref: "vfmContainer",
                          class: [
                            "vfm__container vfm--absolute vfm--inset vfm--outline-none",
                            n.classes,
                          ],
                          style: n.styles,
                          "aria-expanded": r.visibility.modal.toString(),
                          role: "dialog",
                          "aria-modal": "true",
                          tabindex: "-1",
                          onMouseup:
                            e[2] ||
                            (e[2] = an(
                              function () {
                                return (
                                  r.onMouseupContainer &&
                                  r.onMouseupContainer.apply(r, arguments)
                                );
                              },
                              ["self"]
                            )),
                          onMousedown:
                            e[3] ||
                            (e[3] = an(
                              function () {
                                return (
                                  r.onMousedown &&
                                  r.onMousedown.apply(r, arguments)
                                );
                              },
                              ["self"]
                            )),
                        },
                        [
                          me(
                            "div",
                            {
                              ref: "vfmContent",
                              class: [
                                "vfm__content",
                                [
                                  n.contentClass,
                                  { "vfm--prevent-auto": n.preventClick },
                                ],
                              ],
                              style: r.bindContentStyle,
                              onMousedown:
                                e[1] ||
                                (e[1] = function (o) {
                                  return r.onMousedown(null);
                                }),
                            },
                            [
                              Li(t.$slots, "default", {
                                params: r.params,
                                close: function () {
                                  return t.$emit("update:modelValue", !1);
                                },
                              }),
                              r.visibility.resize && r.visibility.modal
                                ? (R(),
                                  xe(
                                    "div",
                                    HO,
                                    [
                                      (R(!0),
                                      xe(
                                        Ue,
                                        null,
                                        Ni(n.resizeDirections, function (o) {
                                          return (
                                            R(),
                                            xe(
                                              "div",
                                              {
                                                key: o,
                                                direction: o,
                                                class: [
                                                  "vfm--resize-".concat(o),
                                                  "vfm--absolute vfm--prevent-auto",
                                                ],
                                              },
                                              null,
                                              10,
                                              ["direction"]
                                            )
                                          );
                                        }),
                                        128
                                      )),
                                    ],
                                    512
                                  ))
                                : Oe("v-if", !0),
                            ],
                            38
                          ),
                        ],
                        46,
                        ["aria-expanded"]
                      ),
                      [[Rf, r.visibility.modal]]
                    ),
                  ];
                }),
                _: 3,
              },
              16,
              ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]
            ),
          ],
          38
        )),
        [[Rf, !n.ssr || r.visible]]
      )
    : Oe("v-if", !0);
});
(function (t, e) {
  e === void 0 && (e = {});
  var n = e.insertAt;
  if (t && typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0],
      i = document.createElement("style");
    (i.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = t)
        : i.appendChild(document.createTextNode(t));
  }
})(`
.vfm--fixed[data-v-2836fdb5] {
  position: fixed;
}
.vfm--absolute[data-v-2836fdb5] {
  position: absolute;
}
.vfm--inset[data-v-2836fdb5] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vfm--overlay[data-v-2836fdb5] {
  background-color: rgba(0, 0, 0, 0.5);
}
.vfm--prevent-none[data-v-2836fdb5] {
  pointer-events: none;
}
.vfm--prevent-auto[data-v-2836fdb5] {
  pointer-events: auto;
}
.vfm--outline-none[data-v-2836fdb5]:focus {
  outline: none;
}
.vfm-enter-active[data-v-2836fdb5],
.vfm-leave-active[data-v-2836fdb5] {
  transition: opacity 0.2s;
}
.vfm-enter-from[data-v-2836fdb5],
.vfm-leave-to[data-v-2836fdb5] {
  opacity: 0;
}
.vfm--touch-none[data-v-2836fdb5] {
  touch-action: none;
}
.vfm--select-none[data-v-2836fdb5] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vfm--resize-tr[data-v-2836fdb5],
.vfm--resize-br[data-v-2836fdb5],
.vfm--resize-bl[data-v-2836fdb5],
.vfm--resize-tl[data-v-2836fdb5] {
  width: 12px;
  height: 12px;
  z-index: 10;
}
.vfm--resize-t[data-v-2836fdb5] {
  top: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-tr[data-v-2836fdb5] {
  top: -6px;
  right: -6px;
  cursor: nesw-resize;
}
.vfm--resize-r[data-v-2836fdb5] {
  top: 0;
  right: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-br[data-v-2836fdb5] {
  bottom: -6px;
  right: -6px;
  cursor: nwse-resize;
}
.vfm--resize-b[data-v-2836fdb5] {
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-bl[data-v-2836fdb5] {
  bottom: -6px;
  left: -6px;
  cursor: nesw-resize;
}
.vfm--resize-l[data-v-2836fdb5] {
  top: 0;
  left: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-tl[data-v-2836fdb5] {
  top: -6px;
  left: -6px;
  cursor: nwse-resize;
}
`),
  (ba.render = zO),
  (ba.__scopeId = "data-v-2836fdb5"),
  (ba.__file = "lib/VueFinalModal.vue");
var Xu = {
    props: {},
    methods: {
      slice: function (t) {
        this.api.dynamicModals.splice(t, 1);
      },
      beforeOpen: function (t, e, n) {
        var r,
          i = this;
        return ((r = function* () {
          (t.ref.params.value = e.params),
            yield i.$nextTick(),
            yield i.$nextTick(),
            e.value || (i.slice(n), e.reject("show"));
        }),
        function () {
          var s = this,
            o = arguments;
          return new Promise(function (a, l) {
            var c = r.apply(s, o);
            function u(h) {
              Sm(c, a, l, u, d, "next", h);
            }
            function d(h) {
              Sm(c, a, l, u, d, "throw", h);
            }
            u(void 0);
          });
        })();
      },
      isString: function (t) {
        return typeof t == "string";
      },
    },
  },
  WO = { class: "modals-container" };
function $m(t, e) {
  var n = qt(qt({}, t), {}, { props: qt({}, t.props) });
  return (
    Object.assign(n.props, {
      api: {
        type: Object,
        default: function () {
          return e;
        },
      },
    }),
    n
  );
}
(Xu.render = function (t, e, n, r, i, s) {
  return (
    R(),
    xe("div", WO, [
      (R(!0),
      xe(
        Ue,
        null,
        Ni(t.api.dynamicModals, function (o, a) {
          return (
            R(),
            xe(
              ka(o.component),
              Mi(
                { key: o.id },
                o.bind,
                {
                  modelValue: o.value,
                  "onUpdate:modelValue": function (l) {
                    return (o.value = l);
                  },
                },
                hf(o.on),
                {
                  on_closed: function (l) {
                    return s.slice(a);
                  },
                  on_beforeOpen: function (l) {
                    return s.beforeOpen(l, o);
                  },
                  on_opened: o.opened,
                }
              ),
              Kb({ _: 2 }, [
                Ni(o.slots, function (l, c) {
                  return {
                    name: c,
                    fn: je(function () {
                      return [
                        Oe(" eslint-disable vue/no-v-html "),
                        s.isString(l)
                          ? (R(),
                            xe("div", { key: 0, innerHTML: l }, null, 8, [
                              "innerHTML",
                            ]))
                          : (R(),
                            xe(
                              ka(l.component),
                              Mi({ key: 1 }, l.bind, hf(l.on || {})),
                              null,
                              16
                            )),
                      ];
                    }),
                  };
                }),
              ]),
              1040,
              [
                "modelValue",
                "onUpdate:modelValue",
                "on_closed",
                "on_beforeOpen",
                "on_opened",
              ]
            )
          );
        }),
        128
      )),
    ])
  );
}),
  (Xu.__file = "lib/ModalsContainer.vue");
var Vm = 0,
  Zw = function () {
    var t,
      e,
      n =
        ((e = null),
        {
          show: function (r) {
            for (
              var i = this,
                s = arguments.length,
                o = new Array(s > 1 ? s - 1 : 0),
                a = 1;
              a < s;
              a++
            )
              o[a - 1] = arguments[a];
            switch (Uh(r)) {
              case "string":
                return this.toggle.apply(this, [r, !0].concat(o));
              case "object":
                return Promise.allSettled([
                  new Promise(function (l, c) {
                    var u = {
                      value: !0,
                      id: Symbol("dynamicModal"),
                      component: e,
                      bind: {},
                      slots: {},
                      on: {},
                      params: o[0],
                      reject: c,
                      opened: function () {
                        l("show");
                      },
                    };
                    i.dynamicModals.push(au(Object.assign(u, r)));
                  }),
                ]);
            }
          },
          hide: function () {
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return this.toggle(i, !1);
          },
          hideAll: function () {
            return this.hide.apply(
              this,
              Gr(
                this.openedModals.map(function (r) {
                  return r.props.name;
                })
              )
            );
          },
          toggle: function (r) {
            for (
              var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1;
              o < i;
              o++
            )
              s[o - 1] = arguments[o];
            var a = Array.isArray(r)
              ? this.get.apply(this, Gr(r))
              : this.get(r);
            return Promise.allSettled(
              a.map(function (l) {
                return l.toggle.apply(l, s);
              })
            );
          },
          get: function () {
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return this.modals.filter(function (o) {
              return i.includes(o.props.name);
            });
          },
          dynamicModals: au([]),
          openedModals: [],
          modals: [],
          _setDefaultModal: function (r) {
            e = r;
          },
        });
    return (
      Ri((t = {}), "$vfm", n),
      Ri(
        t,
        "VueFinalModal",
        (function (r) {
          var i = $m(ba, r);
          return r._setDefaultModal(i), i;
        })(n)
      ),
      Ri(
        t,
        "ModalsContainer",
        (function (r) {
          return $m(Xu, r);
        })(n)
      ),
      t
    );
  },
  cc = Zw();
cc.$vfm;
cc.VueFinalModal;
cc.ModalsContainer;
var e0 = function (t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = Vm === 0 ? cc : Zw(),
      r = n.$vfm,
      i = n.VueFinalModal,
      s = n.ModalsContainer;
    Vm += 1;
    var o = e.key || "$vfm",
      a = e.componentName || "VueFinalModal",
      l = e.dynamicContainerName || "ModalsContainer";
    Object.defineProperty(t.config.globalProperties, o, {
      get: function () {
        return r;
      },
    }),
      t.provide(o, r),
      t.component(a, i),
      t.component(l, s);
  },
  t0 = function (t) {
    return {
      install: function (e, n) {
        var r = Object.assign({}, t, n);
        e0(e, r);
      },
    };
  };
t0.install = e0;
var KO = {
  innerWidth(t) {
    if (t) {
      let e = t.offsetWidth,
        n = getComputedStyle(t);
      return (e += parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)), e;
    }
    return 0;
  },
  width(t) {
    if (t) {
      let e = t.offsetWidth,
        n = getComputedStyle(t);
      return (e -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)), e;
    }
    return 0;
  },
  getWindowScrollTop() {
    let t = document.documentElement;
    return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0);
  },
  getWindowScrollLeft() {
    let t = document.documentElement;
    return (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0);
  },
  getOuterWidth(t, e) {
    if (t) {
      let n = t.offsetWidth;
      if (e) {
        let r = getComputedStyle(t);
        n += parseFloat(r.marginLeft) + parseFloat(r.marginRight);
      }
      return n;
    }
    return 0;
  },
  getOuterHeight(t, e) {
    if (t) {
      let n = t.offsetHeight;
      if (e) {
        let r = getComputedStyle(t);
        n += parseFloat(r.marginTop) + parseFloat(r.marginBottom);
      }
      return n;
    }
    return 0;
  },
  getClientHeight(t, e) {
    if (t) {
      let n = t.clientHeight;
      if (e) {
        let r = getComputedStyle(t);
        n += parseFloat(r.marginTop) + parseFloat(r.marginBottom);
      }
      return n;
    }
    return 0;
  },
  getViewport() {
    let t = window,
      e = document,
      n = e.documentElement,
      r = e.getElementsByTagName("body")[0],
      i = t.innerWidth || n.clientWidth || r.clientWidth,
      s = t.innerHeight || n.clientHeight || r.clientHeight;
    return { width: i, height: s };
  },
  getOffset(t) {
    if (t) {
      let e = t.getBoundingClientRect();
      return {
        top:
          e.top +
          (window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0),
        left:
          e.left +
          (window.pageXOffset ||
            document.documentElement.scrollLeft ||
            document.body.scrollLeft ||
            0),
      };
    }
    return { top: "auto", left: "auto" };
  },
  index(t) {
    if (t) {
      let e = t.parentNode.childNodes,
        n = 0;
      for (let r = 0; r < e.length; r++) {
        if (e[r] === t) return n;
        e[r].nodeType === 1 && n++;
      }
    }
    return -1;
  },
  addMultipleClasses(t, e) {
    if (t && e)
      if (t.classList) {
        let n = e.split(" ");
        for (let r = 0; r < n.length; r++) t.classList.add(n[r]);
      } else {
        let n = e.split(" ");
        for (let r = 0; r < n.length; r++) t.className += " " + n[r];
      }
  },
  addClass(t, e) {
    t && e && (t.classList ? t.classList.add(e) : (t.className += " " + e));
  },
  removeClass(t, e) {
    t &&
      e &&
      (t.classList
        ? t.classList.remove(e)
        : (t.className = t.className.replace(
            new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
            " "
          )));
  },
  hasClass(t, e) {
    return t
      ? t.classList
        ? t.classList.contains(e)
        : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
      : !1;
  },
  find(t, e) {
    return this.isElement(t) ? t.querySelectorAll(e) : [];
  },
  findSingle(t, e) {
    return this.isElement(t) ? t.querySelector(e) : null;
  },
  getHeight(t) {
    if (t) {
      let e = t.offsetHeight,
        n = getComputedStyle(t);
      return (
        (e -=
          parseFloat(n.paddingTop) +
          parseFloat(n.paddingBottom) +
          parseFloat(n.borderTopWidth) +
          parseFloat(n.borderBottomWidth)),
        e
      );
    }
    return 0;
  },
  getWidth(t) {
    if (t) {
      let e = t.offsetWidth,
        n = getComputedStyle(t);
      return (
        (e -=
          parseFloat(n.paddingLeft) +
          parseFloat(n.paddingRight) +
          parseFloat(n.borderLeftWidth) +
          parseFloat(n.borderRightWidth)),
        e
      );
    }
    return 0;
  },
  absolutePosition(t, e) {
    if (t) {
      let n = t.offsetParent
          ? { width: t.offsetWidth, height: t.offsetHeight }
          : this.getHiddenElementDimensions(t),
        r = n.height,
        i = n.width,
        s = e.offsetHeight,
        o = e.offsetWidth,
        a = e.getBoundingClientRect(),
        l = this.getWindowScrollTop(),
        c = this.getWindowScrollLeft(),
        u = this.getViewport(),
        d,
        h;
      a.top + s + r > u.height
        ? ((d = a.top + l - r),
          (t.style.transformOrigin = "bottom"),
          d < 0 && (d = l))
        : ((d = s + a.top + l), (t.style.transformOrigin = "top")),
        a.left + i > u.width
          ? (h = Math.max(0, a.left + c + o - i))
          : (h = a.left + c),
        (t.style.top = d + "px"),
        (t.style.left = h + "px");
    }
  },
  relativePosition(t, e) {
    if (t) {
      let n = t.offsetParent
        ? { width: t.offsetWidth, height: t.offsetHeight }
        : this.getHiddenElementDimensions(t);
      const r = e.offsetHeight,
        i = e.getBoundingClientRect(),
        s = this.getViewport();
      let o, a;
      i.top + r + n.height > s.height
        ? ((o = -1 * n.height),
          (t.style.transformOrigin = "bottom"),
          i.top + o < 0 && (o = -1 * i.top))
        : ((o = r), (t.style.transformOrigin = "top")),
        n.width > s.width
          ? (a = i.left * -1)
          : i.left + n.width > s.width
          ? (a = (i.left + n.width - s.width) * -1)
          : (a = 0),
        (t.style.top = o + "px"),
        (t.style.left = a + "px");
    }
  },
  getParents(t, e = []) {
    return t.parentNode === null
      ? e
      : this.getParents(t.parentNode, e.concat([t.parentNode]));
  },
  getScrollableParents(t) {
    let e = [];
    if (t) {
      let n = this.getParents(t);
      const r = /(auto|scroll)/,
        i = (s) => {
          let o = window.getComputedStyle(s, null);
          return (
            r.test(o.getPropertyValue("overflow")) ||
            r.test(o.getPropertyValue("overflowX")) ||
            r.test(o.getPropertyValue("overflowY"))
          );
        };
      for (let s of n) {
        let o = s.nodeType === 1 && s.dataset.scrollselectors;
        if (o) {
          let a = o.split(",");
          for (let l of a) {
            let c = this.findSingle(s, l);
            c && i(c) && e.push(c);
          }
        }
        s.nodeType !== 9 && i(s) && e.push(s);
      }
    }
    return e;
  },
  getHiddenElementOuterHeight(t) {
    if (t) {
      (t.style.visibility = "hidden"), (t.style.display = "block");
      let e = t.offsetHeight;
      return (t.style.display = "none"), (t.style.visibility = "visible"), e;
    }
    return 0;
  },
  getHiddenElementOuterWidth(t) {
    if (t) {
      (t.style.visibility = "hidden"), (t.style.display = "block");
      let e = t.offsetWidth;
      return (t.style.display = "none"), (t.style.visibility = "visible"), e;
    }
    return 0;
  },
  getHiddenElementDimensions(t) {
    if (t) {
      let e = {};
      return (
        (t.style.visibility = "hidden"),
        (t.style.display = "block"),
        (e.width = t.offsetWidth),
        (e.height = t.offsetHeight),
        (t.style.display = "none"),
        (t.style.visibility = "visible"),
        e
      );
    }
    return 0;
  },
  fadeIn(t, e) {
    if (t) {
      t.style.opacity = 0;
      let n = +new Date(),
        r = 0,
        i = function () {
          (r = +t.style.opacity + (new Date().getTime() - n) / e),
            (t.style.opacity = r),
            (n = +new Date()),
            +r < 1 &&
              ((window.requestAnimationFrame && requestAnimationFrame(i)) ||
                setTimeout(i, 16));
        };
      i();
    }
  },
  fadeOut(t, e) {
    if (t) {
      let n = 1,
        r = 50,
        i = e,
        s = r / i,
        o = setInterval(() => {
          (n -= s),
            n <= 0 && ((n = 0), clearInterval(o)),
            (t.style.opacity = n);
        }, r);
    }
  },
  getUserAgent() {
    return navigator.userAgent;
  },
  appendChild(t, e) {
    if (this.isElement(e)) e.appendChild(t);
    else if (e.el && e.elElement) e.elElement.appendChild(t);
    else throw new Error("Cannot append " + e + " to " + t);
  },
  isElement(t) {
    return typeof HTMLElement == "object"
      ? t instanceof HTMLElement
      : t &&
          typeof t == "object" &&
          t !== null &&
          t.nodeType === 1 &&
          typeof t.nodeName == "string";
  },
  scrollInView(t, e) {
    let n = getComputedStyle(t).getPropertyValue("borderTopWidth"),
      r = n ? parseFloat(n) : 0,
      i = getComputedStyle(t).getPropertyValue("paddingTop"),
      s = i ? parseFloat(i) : 0,
      o = t.getBoundingClientRect(),
      l =
        e.getBoundingClientRect().top +
        document.body.scrollTop -
        (o.top + document.body.scrollTop) -
        r -
        s,
      c = t.scrollTop,
      u = t.clientHeight,
      d = this.getOuterHeight(e);
    l < 0 ? (t.scrollTop = c + l) : l + d > u && (t.scrollTop = c + l - u + d);
  },
  clearSelection() {
    if (window.getSelection)
      window.getSelection().empty
        ? window.getSelection().empty()
        : window.getSelection().removeAllRanges &&
          window.getSelection().rangeCount > 0 &&
          window.getSelection().getRangeAt(0).getClientRects().length > 0 &&
          window.getSelection().removeAllRanges();
    else if (document.selection && document.selection.empty)
      try {
        document.selection.empty();
      } catch {}
  },
  getSelection() {
    return window.getSelection
      ? window.getSelection().toString()
      : document.getSelection
      ? document.getSelection().toString()
      : document.selection
      ? document.selection.createRange().text
      : null;
  },
  calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    let t = document.createElement("div");
    (t.className = "p-scrollbar-measure"), document.body.appendChild(t);
    let e = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), (this.calculatedScrollbarWidth = e), e;
  },
  getBrowser() {
    if (!this.browser) {
      let t = this.resolveUserAgent();
      (this.browser = {}),
        t.browser &&
          ((this.browser[t.browser] = !0), (this.browser.version = t.version)),
        this.browser.chrome
          ? (this.browser.webkit = !0)
          : this.browser.webkit && (this.browser.safari = !0);
    }
    return this.browser;
  },
  resolveUserAgent() {
    let t = navigator.userAgent.toLowerCase(),
      e =
        /(chrome)[ ]([\w.]+)/.exec(t) ||
        /(webkit)[ ]([\w.]+)/.exec(t) ||
        /(opera)(?:.*version|)[ ]([\w.]+)/.exec(t) ||
        /(msie) ([\w.]+)/.exec(t) ||
        (t.indexOf("compatible") < 0 &&
          /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
        [];
    return { browser: e[1] || "", version: e[2] || "0" };
  },
  isVisible(t) {
    return t && t.offsetParent != null;
  },
  invokeElementMethod(t, e, n) {
    t[e].apply(t, n);
  },
  isExist(t) {
    return !!(t !== null && typeof t < "u" && t.nodeName && t.parentNode);
  },
  isClient() {
    return !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    );
  },
  focus(t, e) {
    t && document.activeElement !== t && t.focus(e);
  },
  isFocusableElement(t, e = "") {
    return this.isElement(t)
      ? t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`)
      : !1;
  },
  getFocusableElements(t, e = "") {
    let n = this.find(
        t,
        `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`
      ),
      r = [];
    for (let i of n)
      getComputedStyle(i).display != "none" &&
        getComputedStyle(i).visibility != "hidden" &&
        r.push(i);
    return r;
  },
  getFirstFocusableElement(t, e) {
    const n = this.getFocusableElements(t, e);
    return n.length > 0 ? n[0] : null;
  },
  getLastFocusableElement(t, e) {
    const n = this.getFocusableElements(t, e);
    return n.length > 0 ? n[n.length - 1] : null;
  },
  getNextFocusableElement(t, e, n) {
    const r = this.getFocusableElements(t, n),
      i = r.length > 0 ? r.findIndex((o) => o === e) : -1,
      s = i > -1 && r.length >= i + 1 ? i + 1 : -1;
    return s > -1 ? r[s] : null;
  },
  isClickable(t) {
    if (t) {
      const e = t.nodeName,
        n = t.parentElement && t.parentElement.nodeName;
      return (
        e === "INPUT" ||
        e === "TEXTAREA" ||
        e === "BUTTON" ||
        e === "A" ||
        n === "INPUT" ||
        n === "TEXTAREA" ||
        n === "BUTTON" ||
        n === "A" ||
        !!t.closest(".p-button, .p-checkbox, .p-radiobutton")
      );
    }
    return !1;
  },
  applyStyle(t, e) {
    if (typeof e == "string") t.style.cssText = e;
    else for (let n in e) t.style[n] = e[n];
  },
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  },
  isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  },
  exportCSV(t, e) {
    let n = new Blob([t], { type: "application/csv;charset=utf-8;" });
    if (window.navigator.msSaveOrOpenBlob)
      navigator.msSaveOrOpenBlob(n, e + ".csv");
    else {
      let r = document.createElement("a");
      r.download !== void 0
        ? (r.setAttribute("href", URL.createObjectURL(n)),
          r.setAttribute("download", e + ".csv"),
          (r.style.display = "none"),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r))
        : ((t = "data:text/csv;charset=utf-8," + t), window.open(encodeURI(t)));
    }
  },
};
const ht = {
    STARTS_WITH: "startsWith",
    CONTAINS: "contains",
    NOT_CONTAINS: "notContains",
    ENDS_WITH: "endsWith",
    EQUALS: "equals",
    NOT_EQUALS: "notEquals",
    IN: "in",
    LESS_THAN: "lt",
    LESS_THAN_OR_EQUAL_TO: "lte",
    GREATER_THAN: "gt",
    GREATER_THAN_OR_EQUAL_TO: "gte",
    BETWEEN: "between",
    DATE_IS: "dateIs",
    DATE_IS_NOT: "dateIsNot",
    DATE_BEFORE: "dateBefore",
    DATE_AFTER: "dateAfter",
  },
  Fm = {
    ripple: !1,
    inputStyle: "outlined",
    locale: {
      startsWith: "Starts with",
      contains: "Contains",
      notContains: "Not contains",
      endsWith: "Ends with",
      equals: "Equals",
      notEquals: "Not equals",
      noFilter: "No Filter",
      lt: "Less than",
      lte: "Less than or equal to",
      gt: "Greater than",
      gte: "Greater than or equal to",
      dateIs: "Date is",
      dateIsNot: "Date is not",
      dateBefore: "Date is before",
      dateAfter: "Date is after",
      clear: "Clear",
      apply: "Apply",
      matchAll: "Match All",
      matchAny: "Match Any",
      addRule: "Add Rule",
      removeRule: "Remove Rule",
      accept: "Yes",
      reject: "No",
      choose: "Choose",
      upload: "Upload",
      cancel: "Cancel",
      completed: "Completed",
      pending: "Pending",
      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      chooseYear: "Choose Year",
      chooseMonth: "Choose Month",
      chooseDate: "Choose Date",
      prevDecade: "Previous Decade",
      nextDecade: "Next Decade",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      prevHour: "Previous Hour",
      nextHour: "Next Hour",
      prevMinute: "Previous Minute",
      nextMinute: "Next Minute",
      prevSecond: "Previous Second",
      nextSecond: "Next Second",
      am: "am",
      pm: "pm",
      today: "Today",
      weekHeader: "Wk",
      firstDayOfWeek: 0,
      dateFormat: "mm/dd/yy",
      weak: "Weak",
      medium: "Medium",
      strong: "Strong",
      passwordPrompt: "Enter a password",
      emptyFilterMessage: "No results found",
      searchMessage: "{0} results are available",
      selectionMessage: "{0} items selected",
      emptySelectionMessage: "No selected item",
      emptySearchMessage: "No results found",
      emptyMessage: "No available options",
      aria: {
        trueLabel: "True",
        falseLabel: "False",
        nullLabel: "Not Selected",
        star: "1 star",
        stars: "{star} stars",
        selectAll: "All items selected",
        unselectAll: "All items unselected",
        close: "Close",
        previous: "Previous",
        next: "Next",
        navigation: "Navigation",
        scrollTop: "Scroll Top",
        moveTop: "Move Top",
        moveUp: "Move Up",
        moveDown: "Move Down",
        moveBottom: "Move Bottom",
        moveToTarget: "Move to Target",
        moveToSource: "Move to Source",
        moveAllToTarget: "Move All to Target",
        moveAllToSource: "Move All to Source",
        pageLabel: "{page}",
        firstPageLabel: "First Page",
        lastPageLabel: "Last Page",
        nextPageLabel: "Next Page",
        prevPageLabel: "Previous Page",
        rowsPerPageLabel: "Rows per page",
        jumpToPageDropdownLabel: "Jump to Page Dropdown",
        jumpToPageInputLabel: "Jump to Page Input",
        selectRow: "Row Selected",
        unselectRow: "Row Unselected",
        expandRow: "Row Expanded",
        collapseRow: "Row Collapsed",
        showFilterMenu: "Show Filter Menu",
        hideFilterMenu: "Hide Filter Menu",
        filterOperator: "Filter Operator",
        filterConstraint: "Filter Constraint",
        editRow: "Row Edit",
        saveEdit: "Save Edit",
        cancelEdit: "Cancel Edit",
        listView: "List View",
        gridView: "Grid View",
        slide: "Slide",
        slideNumber: "{slideNumber}",
        zoomImage: "Zoom Image",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        rotateRight: "Rotate Right",
        rotateLeft: "Rotate Left",
      },
    },
    filterMatchModeOptions: {
      text: [
        ht.STARTS_WITH,
        ht.CONTAINS,
        ht.NOT_CONTAINS,
        ht.ENDS_WITH,
        ht.EQUALS,
        ht.NOT_EQUALS,
      ],
      numeric: [
        ht.EQUALS,
        ht.NOT_EQUALS,
        ht.LESS_THAN,
        ht.LESS_THAN_OR_EQUAL_TO,
        ht.GREATER_THAN,
        ht.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [ht.DATE_IS, ht.DATE_IS_NOT, ht.DATE_BEFORE, ht.DATE_AFTER],
    },
    zIndex: { modal: 1100, overlay: 1e3, menu: 1e3, tooltip: 1100 },
  },
  GO = Symbol();
function QO(t, e, n, r) {
  const i = document.getElementById(n),
    s = i.cloneNode(!0),
    o = i.getAttribute("href").replace(t, e);
  s.setAttribute("id", n + "-clone"),
    s.setAttribute("href", o),
    s.addEventListener("load", () => {
      i.remove(), s.setAttribute("id", n), r && r();
    }),
    i.parentNode && i.parentNode.insertBefore(s, i.nextSibling);
}
var YO = {
  install: (t, e) => {
    let n = e ? { ...Fm, ...e } : { ...Fm };
    const r = { config: Ln(n), changeTheme: QO };
    (t.config.globalProperties.$primevue = r), t.provide(GO, r);
  },
};
const Um = (function () {
  try {
    return window.Quill;
  } catch {
    return null;
  }
})();
var n0 = {
  name: "Editor",
  emits: ["update:modelValue", "text-change", "selection-change", "load"],
  props: {
    modelValue: String,
    placeholder: String,
    readonly: Boolean,
    formats: Array,
    editorStyle: null,
    modules: null,
  },
  data() {
    return { reRenderColorKey: 0 };
  },
  quill: null,
  watch: {
    modelValue(t, e) {
      t !== e &&
        this.quill &&
        !this.quill.hasFocus() &&
        (this.reRenderColorKey++, this.renderValue(t));
    },
  },
  mounted() {
    const t = {
      modules: { toolbar: this.$refs.toolbarElement, ...this.modules },
      readOnly: this.readonly,
      theme: "snow",
      formats: this.formats,
      placeholder: this.placeholder,
    };
    Um
      ? ((this.quill = new Um(this.$refs.editorElement, t)),
        this.initQuill(),
        this.handleLoad())
      : C(
          () => import("./quill-OFcVbw76.js").then((e) => e.q),
          __vite__mapDeps([218, 16])
        )
          .then((e) => {
            e &&
              KO.isExist(this.$refs.editorElement) &&
              (e.default
                ? (this.quill = new e.default(this.$refs.editorElement, t))
                : (this.quill = new e(this.$refs.editorElement, t)),
              this.initQuill());
          })
          .then(() => {
            this.handleLoad();
          });
  },
  beforeUnmount() {
    this.quill = null;
  },
  methods: {
    renderValue(t) {
      this.quill &&
        (t
          ? this.quill.setContents(this.quill.clipboard.convert(t))
          : this.quill.setText(""));
    },
    initQuill() {
      this.renderValue(this.modelValue),
        this.quill.on("text-change", (t, e, n) => {
          if (n === "user") {
            let r = this.$refs.editorElement.children[0].innerHTML,
              i = this.quill.getText().trim();
            r === "<p><br></p>" && (r = ""),
              this.$emit("update:modelValue", r),
              this.$emit("text-change", {
                htmlValue: r,
                textValue: i,
                delta: t,
                source: n,
                instance: this.quill,
              });
          }
        }),
        this.quill.on("selection-change", (t, e, n) => {
          let r = this.$refs.editorElement.children[0].innerHTML,
            i = this.quill.getText().trim();
          this.$emit("selection-change", {
            htmlValue: r,
            textValue: i,
            range: t,
            oldRange: e,
            source: n,
            instance: this.quill,
          });
        });
    },
    handleLoad() {
      this.quill &&
        this.quill.getModule("toolbar") &&
        this.$emit("load", { instance: this.quill });
    },
  },
};
const XO = { class: "p-editor-container" },
  JO = { ref: "toolbarElement", class: "p-editor-toolbar" },
  ZO = w(
    "span",
    { class: "ql-formats" },
    [
      w("select", { class: "ql-header", defaultValue: "0" }, [
        w("option", { value: "1" }, "Heading"),
        w("option", { value: "2" }, "Subheading"),
        w("option", { value: "0" }, "Normal"),
      ]),
      w("select", { class: "ql-font" }, [
        w("option"),
        w("option", { value: "serif" }),
        w("option", { value: "monospace" }),
      ]),
    ],
    -1
  ),
  eD = w(
    "span",
    { class: "ql-formats" },
    [
      w("button", { class: "ql-bold", type: "button" }),
      w("button", { class: "ql-italic", type: "button" }),
      w("button", { class: "ql-underline", type: "button" }),
    ],
    -1
  ),
  tD = w("select", { class: "ql-color" }, null, -1),
  nD = w("select", { class: "ql-background" }, null, -1),
  rD = [tD, nD],
  iD = w(
    "span",
    { class: "ql-formats" },
    [
      w("button", { class: "ql-list", value: "ordered", type: "button" }),
      w("button", { class: "ql-list", value: "bullet", type: "button" }),
      w("select", { class: "ql-align" }, [
        w("option", { defaultValue: "" }),
        w("option", { value: "center" }),
        w("option", { value: "right" }),
        w("option", { value: "justify" }),
      ]),
    ],
    -1
  ),
  sD = nn(
    '<span class="ql-formats"><button class="ql-link" type="button"></button><button class="ql-image" type="button"></button><button class="ql-code-block" type="button"></button></span><span class="ql-formats"><button class="ql-clean" type="button"></button></span>',
    2
  );
function oD(t, e, n, r, i, s) {
  return (
    R(),
    H("div", XO, [
      w(
        "div",
        JO,
        [
          Li(t.$slots, "toolbar", {}, () => [
            ZO,
            eD,
            (R(),
            H("span", { key: i.reRenderColorKey, class: "ql-formats" }, rD)),
            iD,
            sD,
          ]),
        ],
        512
      ),
      w(
        "div",
        {
          ref: "editorElement",
          class: "p-editor-content",
          style: cr(n.editorStyle),
        },
        null,
        4
      ),
    ])
  );
}
function aD(t, e) {
  e === void 0 && (e = {});
  var n = e.insertAt;
  if (!(!t || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0],
      i = document.createElement("style");
    (i.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = t)
        : i.appendChild(document.createTextNode(t));
  }
}
var lD = `
/*!
 * Quill Editor v1.3.3
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
.ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
}
.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
}
.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
}
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`;
aD(lD);
n0.render = oD;
function jn(t) {
  return t.split("-")[0];
}
function Pi(t) {
  return t.split("-")[1];
}
function Mo(t) {
  return ["top", "bottom"].includes(jn(t)) ? "x" : "y";
}
function jh(t) {
  return t === "y" ? "height" : "width";
}
function Bm(t) {
  let { reference: e, floating: n, placement: r } = t;
  const i = e.x + e.width / 2 - n.width / 2,
    s = e.y + e.height / 2 - n.height / 2;
  let o;
  switch (jn(r)) {
    case "top":
      o = { x: i, y: e.y - n.height };
      break;
    case "bottom":
      o = { x: i, y: e.y + e.height };
      break;
    case "right":
      o = { x: e.x + e.width, y: s };
      break;
    case "left":
      o = { x: e.x - n.width, y: s };
      break;
    default:
      o = { x: e.x, y: e.y };
  }
  const a = Mo(r),
    l = jh(a);
  switch (Pi(r)) {
    case "start":
      o[a] = o[a] - (e[l] / 2 - n[l] / 2);
      break;
    case "end":
      o[a] = o[a] + (e[l] / 2 - n[l] / 2);
      break;
  }
  return o;
}
const cD = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: o,
  } = n;
  let a = await o.getElementRects({ reference: t, floating: e, strategy: i }),
    { x: l, y: c } = Bm({ ...a, placement: r }),
    u = r,
    d = {};
  for (let h = 0; h < s.length; h++) {
    const { name: f, fn: g } = s[h],
      {
        x: y,
        y: _,
        data: T,
        reset: v,
      } = await g({
        x: l,
        y: c,
        initialPlacement: r,
        placement: u,
        strategy: i,
        middlewareData: d,
        rects: a,
        platform: o,
        elements: { reference: t, floating: e },
      });
    if (((l = y ?? l), (c = _ ?? c), (d = { ...d, [f]: T ?? {} }), v)) {
      typeof v == "object" &&
        (v.placement && (u = v.placement),
        v.rects &&
          (a =
            v.rects === !0
              ? await o.getElementRects({
                  reference: t,
                  floating: e,
                  strategy: i,
                })
              : v.rects),
        ({ x: l, y: c } = Bm({ ...a, placement: u }))),
        (h = -1);
      continue;
    }
  }
  return { x: l, y: c, placement: u, strategy: i, middlewareData: d };
};
function uD(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function r0(t) {
  return typeof t != "number"
    ? uD(t)
    : { top: t, right: t, bottom: t, left: t };
}
function Ju(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
async function uc(t, e) {
  e === void 0 && (e = {});
  const { x: n, y: r, platform: i, rects: s, elements: o, strategy: a } = t,
    {
      boundary: l = "clippingParents",
      rootBoundary: c = "viewport",
      elementContext: u = "floating",
      altBoundary: d = !1,
      padding: h = 0,
    } = e,
    f = r0(h),
    y = o[d ? (u === "floating" ? "reference" : "floating") : u],
    _ = await i.getClippingClientRect({
      element: (await i.isElement(y))
        ? y
        : y.contextElement ||
          (await i.getDocumentElement({ element: o.floating })),
      boundary: l,
      rootBoundary: c,
    }),
    T = Ju(
      await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: u === "floating" ? { ...s.floating, x: n, y: r } : s.reference,
        offsetParent: await i.getOffsetParent({ element: o.floating }),
        strategy: a,
      })
    );
  return {
    top: _.top - T.top + f.top,
    bottom: T.bottom - _.bottom + f.bottom,
    left: _.left - T.left + f.left,
    right: T.right - _.right + f.right,
  };
}
const dD = Math.min,
  Nr = Math.max;
function Zu(t, e, n) {
  return Nr(t, dD(e, n));
}
const hD = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { element: n, padding: r = 0 } = t ?? {},
        { x: i, y: s, placement: o, rects: a, platform: l } = e;
      if (n == null) return {};
      const c = r0(r),
        u = { x: i, y: s },
        d = jn(o),
        h = Mo(d),
        f = jh(h),
        g = await l.getDimensions({ element: n }),
        y = h === "y" ? "top" : "left",
        _ = h === "y" ? "bottom" : "right",
        T = a.reference[f] + a.reference[h] - u[h] - a.floating[f],
        v = u[h] - a.reference[h],
        k = await l.getOffsetParent({ element: n }),
        E = k ? (h === "y" ? k.clientHeight || 0 : k.clientWidth || 0) : 0,
        O = T / 2 - v / 2,
        V = c[y],
        z = E - g[f] - c[_],
        L = E / 2 - g[f] / 2 + O,
        B = Zu(V, L, z);
      return { data: { [h]: B, centerOffset: L - B } };
    },
  }),
  fD = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => fD[e]);
}
function i0(t, e) {
  const n = Pi(t) === "start",
    r = Mo(t),
    i = jh(r);
  let s = r === "x" ? (n ? "right" : "left") : n ? "bottom" : "top";
  return (
    e.reference[i] > e.floating[i] && (s = nl(s)), { main: s, cross: nl(s) }
  );
}
const pD = { start: "end", end: "start" };
function ed(t) {
  return t.replace(/start|end/g, (e) => pD[e]);
}
const mD = ["top", "right", "bottom", "left"],
  gD = mD.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
function vD(t, e, n) {
  return (
    t
      ? [...n.filter((i) => Pi(i) === t), ...n.filter((i) => Pi(i) !== t)]
      : n.filter((i) => jn(i) === i)
  ).filter((i) => (t ? Pi(i) === t || (e ? ed(i) !== i : !1) : !0));
}
const yD = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "autoPlacement",
      options: t,
      async fn(e) {
        var n, r, i, s, o, a;
        const { x: l, y: c, rects: u, middlewareData: d, placement: h } = e,
          {
            alignment: f = null,
            allowedPlacements: g = gD,
            autoAlignment: y = !0,
            ..._
          } = t;
        if ((n = d.autoPlacement) != null && n.skip) return {};
        const T = vD(f, y, g),
          v = await uc(e, _),
          k =
            (r = (i = d.autoPlacement) == null ? void 0 : i.index) != null
              ? r
              : 0,
          E = T[k],
          { main: O, cross: V } = i0(E, u);
        if (h !== E) return { x: l, y: c, reset: { placement: T[0] } };
        const z = [v[jn(E)], v[O], v[V]],
          L = [
            ...((s = (o = d.autoPlacement) == null ? void 0 : o.overflows) !=
            null
              ? s
              : []),
            { placement: E, overflows: z },
          ],
          B = T[k + 1];
        if (B)
          return {
            data: { index: k + 1, overflows: L },
            reset: { placement: B },
          };
        const ee = L.slice().sort((j, se) => j.overflows[0] - se.overflows[0]),
          fe =
            (a = ee.find((j) => {
              let { overflows: se } = j;
              return se.every((Ie) => Ie <= 0);
            })) == null
              ? void 0
              : a.placement;
        return {
          data: { skip: !0 },
          reset: { placement: fe ?? ee[0].placement },
        };
      },
    }
  );
};
function _D(t) {
  const e = nl(t);
  return [ed(t), e, ed(e)];
}
const wD = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "flip",
      options: t,
      async fn(e) {
        var n, r;
        const {
          placement: i,
          middlewareData: s,
          rects: o,
          initialPlacement: a,
        } = e;
        if ((n = s.flip) != null && n.skip) return {};
        const {
            mainAxis: l = !0,
            crossAxis: c = !0,
            fallbackPlacements: u,
            fallbackStrategy: d = "bestFit",
            flipAlignment: h = !0,
            ...f
          } = t,
          g = jn(i),
          _ = u || (g === a || !h ? [nl(a)] : _D(a)),
          T = [a, ..._],
          v = await uc(e, f),
          k = [];
        let E = ((r = s.flip) == null ? void 0 : r.overflows) || [];
        if ((l && k.push(v[g]), c)) {
          const { main: L, cross: B } = i0(i, o);
          k.push(v[L], v[B]);
        }
        if (
          ((E = [...E, { placement: i, overflows: k }]),
          !k.every((L) => L <= 0))
        ) {
          var O, V;
          const L =
              ((O = (V = s.flip) == null ? void 0 : V.index) != null ? O : 0) +
              1,
            B = T[L];
          if (B)
            return {
              data: { index: L, overflows: E },
              reset: { placement: B },
            };
          let ee = "bottom";
          switch (d) {
            case "bestFit": {
              var z;
              const fe =
                (z = E.slice().sort(
                  (j, se) =>
                    j.overflows
                      .filter((Ie) => Ie > 0)
                      .reduce((Ie, Et) => Ie + Et, 0) -
                    se.overflows
                      .filter((Ie) => Ie > 0)
                      .reduce((Ie, Et) => Ie + Et, 0)
                )[0]) == null
                  ? void 0
                  : z.placement;
              fe && (ee = fe);
              break;
            }
            case "initialPlacement":
              ee = a;
              break;
          }
          return { data: { skip: !0 }, reset: { placement: ee } };
        }
        return {};
      },
    }
  );
};
function bD(t) {
  let { placement: e, rects: n, value: r } = t;
  const i = jn(e),
    s = ["left", "top"].includes(i) ? -1 : 1,
    o = typeof r == "function" ? r({ ...n, placement: e }) : r,
    { mainAxis: a, crossAxis: l } =
      typeof o == "number"
        ? { mainAxis: o, crossAxis: 0 }
        : { mainAxis: 0, crossAxis: 0, ...o };
  return Mo(i) === "x" ? { x: l, y: a * s } : { x: a * s, y: l };
}
const ED = function (t) {
  return (
    t === void 0 && (t = 0),
    {
      name: "offset",
      options: t,
      fn(e) {
        const { x: n, y: r, placement: i, rects: s } = e,
          o = bD({ placement: i, rects: s, value: t });
        return { x: n + o.x, y: r + o.y, data: o };
      },
    }
  );
};
function TD(t) {
  return t === "x" ? "y" : "x";
}
const ID = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: n, y: r, placement: i } = e,
            {
              mainAxis: s = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (_) => {
                  let { x: T, y: v } = _;
                  return { x: T, y: v };
                },
              },
              ...l
            } = t,
            c = { x: n, y: r },
            u = await uc(e, l),
            d = Mo(jn(i)),
            h = TD(d);
          let f = c[d],
            g = c[h];
          if (s) {
            const _ = d === "y" ? "top" : "left",
              T = d === "y" ? "bottom" : "right",
              v = f + u[_],
              k = f - u[T];
            f = Zu(v, f, k);
          }
          if (o) {
            const _ = h === "y" ? "top" : "left",
              T = h === "y" ? "bottom" : "right",
              v = g + u[_],
              k = g - u[T];
            g = Zu(v, g, k);
          }
          const y = a.fn({ ...e, [d]: f, [h]: g });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  AD = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          var n;
          const { placement: r, rects: i, middlewareData: s } = e,
            { apply: o, ...a } = t;
          if ((n = s.size) != null && n.skip) return {};
          const l = await uc(e, a),
            c = jn(r),
            u = Pi(r) === "end";
          let d, h;
          c === "top" || c === "bottom"
            ? ((d = c), (h = u ? "left" : "right"))
            : ((h = c), (d = u ? "top" : "bottom"));
          const f = Nr(l.left, 0),
            g = Nr(l.right, 0),
            y = Nr(l.top, 0),
            _ = Nr(l.bottom, 0),
            T = {
              height:
                i.floating.height -
                (["left", "right"].includes(r)
                  ? 2 * (y !== 0 || _ !== 0 ? y + _ : Nr(l.top, l.bottom))
                  : l[d]),
              width:
                i.floating.width -
                (["top", "bottom"].includes(r)
                  ? 2 * (f !== 0 || g !== 0 ? f + g : Nr(l.left, l.right))
                  : l[h]),
            };
          return (
            o == null || o({ ...T, ...i }),
            { data: { skip: !0 }, reset: { rects: !0 } }
          );
        },
      }
    );
  };
function Hh(t) {
  return (t == null ? void 0 : t.toString()) === "[object Window]";
}
function Ir(t) {
  if (t == null) return window;
  if (!Hh(t)) {
    const e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function dc(t) {
  return Ir(t).getComputedStyle(t);
}
function Dn(t) {
  return Hh(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function Nn(t) {
  return t instanceof Ir(t).HTMLElement;
}
function rl(t) {
  return t instanceof Ir(t).Element;
}
function CD(t) {
  return t instanceof Ir(t).Node;
}
function s0(t) {
  const e = Ir(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function hc(t) {
  const { overflow: e, overflowX: n, overflowY: r } = dc(t);
  return /auto|scroll|overlay|hidden/.test(e + r + n);
}
function kD(t) {
  return ["table", "td", "th"].includes(Dn(t));
}
function o0(t) {
  const e = navigator.userAgent.toLowerCase().includes("firefox"),
    n = dc(t);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    n.contain === "paint" ||
    ["transform", "perspective"].includes(n.willChange) ||
    (e && n.willChange === "filter") ||
    (e && (n.filter ? n.filter !== "none" : !1))
  );
}
const jm = Math.min,
  Ms = Math.max,
  il = Math.round;
function Zi(t, e) {
  e === void 0 && (e = !1);
  const n = t.getBoundingClientRect();
  let r = 1,
    i = 1;
  return (
    e &&
      Nn(t) &&
      ((r = (t.offsetWidth > 0 && il(n.width) / t.offsetWidth) || 1),
      (i = (t.offsetHeight > 0 && il(n.height) / t.offsetHeight) || 1)),
    {
      width: n.width / r,
      height: n.height / i,
      top: n.top / i,
      right: n.right / r,
      bottom: n.bottom / i,
      left: n.left / r,
      x: n.left / r,
      y: n.top / i,
    }
  );
}
function Ar(t) {
  return ((CD(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function fc(t) {
  return Hh(t)
    ? { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
    : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function a0(t) {
  return Zi(Ar(t)).left + fc(t).scrollLeft;
}
function SD(t) {
  const e = Zi(t);
  return il(e.width) !== t.offsetWidth || il(e.height) !== t.offsetHeight;
}
function qD(t, e, n) {
  const r = Nn(e),
    i = Ar(e),
    s = Zi(t, r && SD(e));
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || (!r && n !== "fixed"))
    if (((Dn(e) !== "body" || hc(i)) && (o = fc(e)), Nn(e))) {
      const l = Zi(e, !0);
      (a.x = l.x + e.clientLeft), (a.y = l.y + e.clientTop);
    } else i && (a.x = a0(i));
  return {
    x: s.left + o.scrollLeft - a.x,
    y: s.top + o.scrollTop - a.y,
    width: s.width,
    height: s.height,
  };
}
function pc(t) {
  return Dn(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (s0(t) ? t.host : null) || Ar(t);
}
function Hm(t) {
  return !Nn(t) || getComputedStyle(t).position === "fixed"
    ? null
    : t.offsetParent;
}
function xD(t) {
  let e = pc(t);
  for (; Nn(e) && !["html", "body"].includes(Dn(e)); ) {
    if (o0(e)) return e;
    e = e.parentNode;
  }
  return null;
}
function td(t) {
  const e = Ir(t);
  let n = Hm(t);
  for (; n && kD(n) && getComputedStyle(n).position === "static"; ) n = Hm(n);
  return n &&
    (Dn(n) === "html" ||
      (Dn(n) === "body" && getComputedStyle(n).position === "static" && !o0(n)))
    ? e
    : n || xD(t) || e;
}
function zm(t) {
  return { width: t.offsetWidth, height: t.offsetHeight };
}
function RD(t) {
  let { rect: e, offsetParent: n, strategy: r } = t;
  const i = Nn(n),
    s = Ar(n);
  if (n === s) return e;
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (
    (i || (!i && r !== "fixed")) &&
    ((Dn(n) !== "body" || hc(s)) && (o = fc(n)), Nn(n))
  ) {
    const l = Zi(n, !0);
    (a.x = l.x + n.clientLeft), (a.y = l.y + n.clientTop);
  }
  return { ...e, x: e.x - o.scrollLeft + a.x, y: e.y - o.scrollTop + a.y };
}
function PD(t) {
  const e = Ir(t),
    n = Ar(t),
    r = e.visualViewport;
  let i = n.clientWidth,
    s = n.clientHeight,
    o = 0,
    a = 0;
  return (
    r &&
      ((i = r.width),
      (s = r.height),
      Math.abs(e.innerWidth / r.scale - r.width) < 0.01 &&
        ((o = r.offsetLeft), (a = r.offsetTop))),
    { width: i, height: s, x: o, y: a }
  );
}
function OD(t) {
  var e;
  const n = Ar(t),
    r = fc(t),
    i = (e = t.ownerDocument) == null ? void 0 : e.body,
    s = Ms(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    o = Ms(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    );
  let a = -r.scrollLeft + a0(t);
  const l = -r.scrollTop;
  return (
    dc(i || n).direction === "rtl" &&
      (a += Ms(n.clientWidth, i ? i.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function l0(t) {
  return ["html", "body", "#document"].includes(Dn(t))
    ? t.ownerDocument.body
    : Nn(t) && hc(t)
    ? t
    : l0(pc(t));
}
function sl(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = l0(t),
    i = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
    s = Ir(r),
    o = i ? [s].concat(s.visualViewport || [], hc(r) ? r : []) : r,
    a = e.concat(o);
  return i ? a : a.concat(sl(pc(o)));
}
function DD(t, e) {
  const n = e.getRootNode == null ? void 0 : e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && s0(n)) {
    let r = e;
    do {
      if (r && t === r) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ND(t) {
  const e = Zi(t),
    n = e.top + t.clientTop,
    r = e.left + t.clientLeft;
  return {
    top: n,
    left: r,
    x: r,
    y: n,
    right: r + t.clientWidth,
    bottom: n + t.clientHeight,
    width: t.clientWidth,
    height: t.clientHeight,
  };
}
function Wm(t, e) {
  return e === "viewport" ? Ju(PD(t)) : rl(e) ? ND(e) : Ju(OD(Ar(t)));
}
function LD(t) {
  const e = sl(pc(t)),
    r = ["absolute", "fixed"].includes(dc(t).position) && Nn(t) ? td(t) : t;
  return rl(r) ? e.filter((i) => rl(i) && DD(i, r) && Dn(i) !== "body") : [];
}
function MD(t) {
  let { element: e, boundary: n, rootBoundary: r } = t;
  const s = [...(n === "clippingParents" ? LD(e) : [].concat(n)), r],
    o = s[0],
    a = s.reduce((l, c) => {
      const u = Wm(e, c);
      return (
        (l.top = Ms(u.top, l.top)),
        (l.right = jm(u.right, l.right)),
        (l.bottom = jm(u.bottom, l.bottom)),
        (l.left = Ms(u.left, l.left)),
        l
      );
    }, Wm(e, o));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
const $D = {
    getElementRects: (t) => {
      let { reference: e, floating: n, strategy: r } = t;
      return { reference: qD(e, td(n), r), floating: { ...zm(n), x: 0, y: 0 } };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: (t) => RD(t),
    getOffsetParent: (t) => {
      let { element: e } = t;
      return td(e);
    },
    isElement: (t) => rl(t),
    getDocumentElement: (t) => {
      let { element: e } = t;
      return Ar(e);
    },
    getClippingClientRect: (t) => MD(t),
    getDimensions: (t) => {
      let { element: e } = t;
      return zm(e);
    },
    getClientRects: (t) => {
      let { element: e } = t;
      return e.getClientRects();
    },
  },
  VD = (t, e, n) => cD(t, e, { platform: $D, ...n });
var FD = Object.defineProperty,
  UD = Object.defineProperties,
  BD = Object.getOwnPropertyDescriptors,
  Km = Object.getOwnPropertySymbols,
  jD = Object.prototype.hasOwnProperty,
  HD = Object.prototype.propertyIsEnumerable,
  Gm = (t, e, n) =>
    e in t
      ? FD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  yn = (t, e) => {
    for (var n in e || (e = {})) jD.call(e, n) && Gm(t, n, e[n]);
    if (Km) for (var n of Km(e)) HD.call(e, n) && Gm(t, n, e[n]);
    return t;
  },
  $o = (t, e) => UD(t, BD(e));
function c0(t, e) {
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      (typeof e[n] == "object" && t[n] ? c0(t[n], e[n]) : (t[n] = e[n]));
}
const An = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (t) => [...t, "click"],
      delay: { show: 200, hide: 0 },
      handleResize: !1,
      html: !1,
      loadingContent: "...",
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: !0,
      autoHide: !0,
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: { show: 0, hide: 400 },
    },
  },
};
function es(t, e) {
  let n = An.themes[t] || {},
    r;
  do
    (r = n[e]),
      typeof r > "u"
        ? n.$extend
          ? (n = An.themes[n.$extend] || {})
          : ((n = null), (r = An[e]))
        : (n = null);
  while (n);
  return r;
}
function zD(t) {
  const e = [t];
  let n = An.themes[t] || {};
  do
    n.$extend && !n.$resetCss
      ? (e.push(n.$extend), (n = An.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return e.map((r) => `v-popper--theme-${r}`);
}
function Qm(t) {
  const e = [t];
  let n = An.themes[t] || {};
  do
    n.$extend
      ? (e.push(n.$extend), (n = An.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return e;
}
let ni = !1;
if (typeof window < "u") {
  ni = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get() {
        ni = !0;
      },
    });
    window.addEventListener("test", null, t);
  } catch {}
}
let u0 = !1;
typeof window < "u" &&
  typeof navigator < "u" &&
  (u0 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const d0 = ["auto", "top", "bottom", "left", "right"].reduce(
    (t, e) => t.concat([e, `${e}-start`, `${e}-end`]),
    []
  ),
  Ym = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
  },
  Xm = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
  };
function Jm(t, e) {
  const n = t.indexOf(e);
  n !== -1 && t.splice(n, 1);
}
function Zc() {
  return new Promise((t) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(t);
    })
  );
}
const Xt = [];
let Or = null;
const Zm = {};
function eg(t) {
  let e = Zm[t];
  return e || (e = Zm[t] = []), e;
}
let nd = function () {};
typeof window < "u" && (nd = window.Element);
function Ee(t) {
  return function (e) {
    return es(e.theme, t);
  };
}
const eu = "__floating-vue__popper";
var h0 = () =>
  Ge({
    name: "VPopper",
    provide() {
      return { [eu]: { parentPopper: this } };
    },
    inject: { [eu]: { default: null } },
    props: {
      theme: { type: String, required: !0 },
      targetNodes: { type: Function, required: !0 },
      referenceNode: { type: Function, default: null },
      popperNode: { type: Function, required: !0 },
      shown: { type: Boolean, default: !1 },
      showGroup: { type: String, default: null },
      ariaId: { default: null },
      disabled: { type: Boolean, default: Ee("disabled") },
      positioningDisabled: {
        type: Boolean,
        default: Ee("positioningDisabled"),
      },
      placement: {
        type: String,
        default: Ee("placement"),
        validator: (t) => d0.includes(t),
      },
      delay: { type: [String, Number, Object], default: Ee("delay") },
      distance: { type: [Number, String], default: Ee("distance") },
      skidding: { type: [Number, String], default: Ee("skidding") },
      triggers: { type: Array, default: Ee("triggers") },
      showTriggers: { type: [Array, Function], default: Ee("showTriggers") },
      hideTriggers: { type: [Array, Function], default: Ee("hideTriggers") },
      popperTriggers: { type: Array, default: Ee("popperTriggers") },
      popperShowTriggers: {
        type: [Array, Function],
        default: Ee("popperShowTriggers"),
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: Ee("popperHideTriggers"),
      },
      container: {
        type: [String, Object, nd, Boolean],
        default: Ee("container"),
      },
      boundary: { type: [String, nd], default: Ee("boundary") },
      strategy: {
        type: String,
        validator: (t) => ["absolute", "fixed"].includes(t),
        default: Ee("strategy"),
      },
      autoHide: { type: [Boolean, Function], default: Ee("autoHide") },
      handleResize: { type: Boolean, default: Ee("handleResize") },
      instantMove: { type: Boolean, default: Ee("instantMove") },
      eagerMount: { type: Boolean, default: Ee("eagerMount") },
      popperClass: {
        type: [String, Array, Object],
        default: Ee("popperClass"),
      },
      computeTransformOrigin: {
        type: Boolean,
        default: Ee("computeTransformOrigin"),
      },
      autoMinSize: { type: Boolean, default: Ee("autoMinSize") },
      autoSize: { type: [Boolean, String], default: Ee("autoSize") },
      autoMaxSize: { type: Boolean, default: Ee("autoMaxSize") },
      autoBoundaryMaxSize: {
        type: Boolean,
        default: Ee("autoBoundaryMaxSize"),
      },
      preventOverflow: { type: Boolean, default: Ee("preventOverflow") },
      overflowPadding: {
        type: [Number, String],
        default: Ee("overflowPadding"),
      },
      arrowPadding: { type: [Number, String], default: Ee("arrowPadding") },
      arrowOverflow: { type: Boolean, default: Ee("arrowOverflow") },
      flip: { type: Boolean, default: Ee("flip") },
      shift: { type: Boolean, default: Ee("shift") },
      shiftCrossAxis: { type: Boolean, default: Ee("shiftCrossAxis") },
      noAutoFocus: { type: Boolean, default: Ee("noAutoFocus") },
    },
    emits: [
      "show",
      "hide",
      "update:shown",
      "apply-show",
      "apply-hide",
      "close-group",
      "close-directive",
      "auto-hide",
      "resize",
      "dispose",
    ],
    data() {
      return {
        isShown: !1,
        isMounted: !1,
        skipTransition: !1,
        classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
        result: {
          x: 0,
          y: 0,
          placement: "",
          strategy: this.strategy,
          arrow: { x: 0, y: 0, centerOffset: 0 },
          transformOrigin: null,
        },
        shownChildren: new Set(),
        lastAutoHide: !0,
      };
    },
    computed: {
      popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide:
            typeof this.autoHide == "function"
              ? this.lastAutoHide
              : this.autoHide,
          show: this.show,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: $o(yn({}, this.classes), { popperClass: this.popperClass }),
          result: this.positioningDisabled ? null : this.result,
          attrs: this.$attrs,
        };
      },
      parentPopper() {
        var t;
        return (t = this[eu]) == null ? void 0 : t.parentPopper;
      },
      hasPopperShowTriggerHover() {
        var t, e;
        return (
          ((t = this.popperTriggers) == null ? void 0 : t.includes("hover")) ||
          ((e = this.popperShowTriggers) == null ? void 0 : e.includes("hover"))
        );
      },
    },
    watch: yn(
      yn(
        {
          shown: "$_autoShowHide",
          disabled(t) {
            t ? this.dispose() : this.init();
          },
          async container() {
            this.isShown &&
              (this.$_ensureTeleport(), await this.$_computePosition());
          },
        },
        ["triggers", "positioningDisabled"].reduce(
          (t, e) => ((t[e] = "$_refreshListeners"), t),
          {}
        )
      ),
      [
        "placement",
        "distance",
        "skidding",
        "boundary",
        "strategy",
        "overflowPadding",
        "arrowPadding",
        "preventOverflow",
        "shift",
        "shiftCrossAxis",
        "flip",
      ].reduce((t, e) => ((t[e] = "$_computePosition"), t), {})
    ),
    created() {
      (this.$_isDisposed = !0),
        (this.randomId = `popper_${[Math.random(), Date.now()]
          .map((t) => t.toString(36).substring(2, 10))
          .join("_")}`),
        this.autoMinSize &&
          console.warn(
            '[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'
          ),
        this.autoMaxSize &&
          console.warn(
            "[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead."
          );
    },
    mounted() {
      this.init(), this.$_detachPopperNode();
    },
    activated() {
      this.$_autoShowHide();
    },
    deactivated() {
      this.hide();
    },
    beforeUnmount() {
      this.dispose();
    },
    methods: {
      show({ event: t = null, skipDelay: e = !1, force: n = !1 } = {}) {
        var r, i;
        ((r = this.parentPopper) != null &&
          r.lockedChild &&
          this.parentPopper.lockedChild !== this) ||
          ((this.$_pendingHide = !1),
          (n || !this.disabled) &&
            (((i = this.parentPopper) == null ? void 0 : i.lockedChild) ===
              this && (this.parentPopper.lockedChild = null),
            this.$_scheduleShow(t, e),
            this.$emit("show"),
            (this.$_showFrameLocked = !0),
            requestAnimationFrame(() => {
              this.$_showFrameLocked = !1;
            })),
          this.$emit("update:shown", !0));
      },
      hide({ event: t = null, skipDelay: e = !1 } = {}) {
        var n;
        if (!this.$_hideInProgress) {
          if (this.shownChildren.size > 0) {
            this.$_pendingHide = !0;
            return;
          }
          if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
            this.parentPopper &&
              ((this.parentPopper.lockedChild = this),
              clearTimeout(this.parentPopper.lockedChildTimer),
              (this.parentPopper.lockedChildTimer = setTimeout(() => {
                this.parentPopper.lockedChild === this &&
                  (this.parentPopper.lockedChild.hide({ skipDelay: e }),
                  (this.parentPopper.lockedChild = null));
              }, 1e3)));
            return;
          }
          ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this &&
            (this.parentPopper.lockedChild = null),
            (this.$_pendingHide = !1),
            this.$_scheduleHide(t, e),
            this.$emit("hide"),
            this.$emit("update:shown", !1);
        }
      },
      init() {
        var t, e;
        this.$_isDisposed &&
          ((this.$_isDisposed = !1),
          (this.isMounted = !1),
          (this.$_events = []),
          (this.$_preventShow = !1),
          (this.$_referenceNode =
            (e = (t = this.referenceNode) == null ? void 0 : t.call(this)) !=
            null
              ? e
              : this.$el),
          (this.$_targetNodes = this.targetNodes().filter(
            (n) => n.nodeType === n.ELEMENT_NODE
          )),
          (this.$_popperNode = this.popperNode()),
          (this.$_innerNode =
            this.$_popperNode.querySelector(".v-popper__inner")),
          (this.$_arrowNode = this.$_popperNode.querySelector(
            ".v-popper__arrow-container"
          )),
          this.$_swapTargetAttrs("title", "data-original-title"),
          this.$_detachPopperNode(),
          this.triggers.length && this.$_addEventListeners(),
          this.shown && this.show());
      },
      dispose() {
        this.$_isDisposed ||
          ((this.$_isDisposed = !0),
          this.$_removeEventListeners(),
          this.hide({ skipDelay: !0 }),
          this.$_detachPopperNode(),
          (this.isMounted = !1),
          (this.isShown = !1),
          this.$_updateParentShownChildren(!1),
          this.$_swapTargetAttrs("data-original-title", "title"),
          this.$emit("dispose"));
      },
      async onResize() {
        this.isShown && (await this.$_computePosition(), this.$emit("resize"));
      },
      async $_computePosition() {
        var t;
        if (this.$_isDisposed || this.positioningDisabled) return;
        const e = { strategy: this.strategy, middleware: [] };
        (this.distance || this.skidding) &&
          e.middleware.push(
            ED({ mainAxis: this.distance, crossAxis: this.skidding })
          );
        const n = this.placement.startsWith("auto");
        if (
          (n
            ? e.middleware.push(
                yD({
                  alignment:
                    (t = this.placement.split("-")[1]) != null ? t : "",
                })
              )
            : (e.placement = this.placement),
          this.preventOverflow &&
            (this.shift &&
              e.middleware.push(
                ID({
                  padding: this.overflowPadding,
                  boundary: this.boundary,
                  crossAxis: this.shiftCrossAxis,
                })
              ),
            !n &&
              this.flip &&
              e.middleware.push(
                wD({ padding: this.overflowPadding, boundary: this.boundary })
              )),
          e.middleware.push(
            hD({ element: this.$_arrowNode, padding: this.arrowPadding })
          ),
          this.arrowOverflow &&
            e.middleware.push({
              name: "arrowOverflow",
              fn: ({ placement: i, rects: s, middlewareData: o }) => {
                let a;
                const { centerOffset: l } = o.arrow;
                return (
                  i.startsWith("top") || i.startsWith("bottom")
                    ? (a = Math.abs(l) > s.reference.width / 2)
                    : (a = Math.abs(l) > s.reference.height / 2),
                  { data: { overflow: a } }
                );
              },
            }),
          this.autoMinSize || this.autoSize)
        ) {
          const i = this.autoSize
            ? this.autoSize
            : this.autoMinSize
            ? "min"
            : null;
          e.middleware.push({
            name: "autoSize",
            fn: ({ rects: s, placement: o, middlewareData: a }) => {
              var l;
              if ((l = a.autoSize) != null && l.skip) return {};
              let c, u;
              return (
                o.startsWith("top") || o.startsWith("bottom")
                  ? (c = s.reference.width)
                  : (u = s.reference.height),
                (this.$_innerNode.style[
                  i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"
                ] = c != null ? `${c}px` : null),
                (this.$_innerNode.style[
                  i === "min"
                    ? "minHeight"
                    : i === "max"
                    ? "maxHeight"
                    : "height"
                ] = u != null ? `${u}px` : null),
                { data: { skip: !0 }, reset: { rects: !0 } }
              );
            },
          });
        }
        (this.autoMaxSize || this.autoBoundaryMaxSize) &&
          ((this.$_innerNode.style.maxWidth = null),
          (this.$_innerNode.style.maxHeight = null),
          e.middleware.push(
            AD({
              boundary: this.boundary,
              padding: this.overflowPadding,
              apply: ({ width: i, height: s }) => {
                (this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null),
                  (this.$_innerNode.style.maxHeight =
                    s != null ? `${s}px` : null);
              },
            })
          ));
        const r = await VD(this.$_referenceNode, this.$_popperNode, e);
        Object.assign(this.result, {
          x: r.x,
          y: r.y,
          placement: r.placement,
          strategy: r.strategy,
          arrow: yn(
            yn({}, r.middlewareData.arrow),
            r.middlewareData.arrowOverflow
          ),
        });
      },
      $_scheduleShow(t = null, e = !1) {
        if (
          (this.$_updateParentShownChildren(!0),
          (this.$_hideInProgress = !1),
          clearTimeout(this.$_scheduleTimer),
          Or && this.instantMove && Or.instantMove && Or !== this.parentPopper)
        ) {
          Or.$_applyHide(!0), this.$_applyShow(!0);
          return;
        }
        e
          ? this.$_applyShow()
          : (this.$_scheduleTimer = setTimeout(
              this.$_applyShow.bind(this),
              this.$_computeDelay("show")
            ));
      },
      $_scheduleHide(t = null, e = !1) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        this.$_updateParentShownChildren(!1),
          (this.$_hideInProgress = !0),
          clearTimeout(this.$_scheduleTimer),
          this.isShown && (Or = this),
          e
            ? this.$_applyHide()
            : (this.$_scheduleTimer = setTimeout(
                this.$_applyHide.bind(this),
                this.$_computeDelay("hide")
              ));
      },
      $_computeDelay(t) {
        const e = this.delay;
        return parseInt((e && e[t]) || e || 0);
      },
      async $_applyShow(t = !1) {
        clearTimeout(this.$_disposeTimer),
          clearTimeout(this.$_scheduleTimer),
          (this.skipTransition = t),
          !this.isShown &&
            (this.$_ensureTeleport(),
            await Zc(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled ||
              this.$_registerEventListeners(
                [...sl(this.$_referenceNode), ...sl(this.$_popperNode)],
                "scroll",
                () => {
                  this.$_computePosition();
                }
              ));
      },
      async $_applyShowEffect() {
        if (this.$_hideInProgress) return;
        if (this.computeTransformOrigin) {
          const e = this.$_referenceNode.getBoundingClientRect(),
            n = this.$_popperNode.querySelector(".v-popper__wrapper"),
            r = n.parentNode.getBoundingClientRect(),
            i = e.x + e.width / 2 - (r.left + n.offsetLeft),
            s = e.y + e.height / 2 - (r.top + n.offsetTop);
          this.result.transformOrigin = `${i}px ${s}px`;
        }
        (this.isShown = !0),
          this.$_applyAttrsToTarget({
            "aria-describedby": this.popperId,
            "data-popper-shown": "",
          });
        const t = this.showGroup;
        if (t) {
          let e;
          for (let n = 0; n < Xt.length; n++)
            (e = Xt[n]),
              e.showGroup !== t && (e.hide(), e.$emit("close-group"));
        }
        Xt.push(this), document.body.classList.add("v-popper--some-open");
        for (const e of Qm(this.theme))
          eg(e).push(this),
            document.body.classList.add(`v-popper--some-open--${e}`);
        this.$emit("apply-show"),
          (this.classes.showFrom = !0),
          (this.classes.showTo = !1),
          (this.classes.hideFrom = !1),
          (this.classes.hideTo = !1),
          await Zc(),
          (this.classes.showFrom = !1),
          (this.classes.showTo = !0),
          this.noAutoFocus || this.$_popperNode.focus();
      },
      async $_applyHide(t = !1) {
        if (this.shownChildren.size > 0) {
          (this.$_pendingHide = !0), (this.$_hideInProgress = !1);
          return;
        }
        if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
        (this.skipTransition = t),
          Jm(Xt, this),
          Xt.length === 0 &&
            document.body.classList.remove("v-popper--some-open");
        for (const n of Qm(this.theme)) {
          const r = eg(n);
          Jm(r, this),
            r.length === 0 &&
              document.body.classList.remove(`v-popper--some-open--${n}`);
        }
        Or === this && (Or = null),
          (this.isShown = !1),
          this.$_applyAttrsToTarget({
            "aria-describedby": void 0,
            "data-popper-shown": void 0,
          }),
          clearTimeout(this.$_disposeTimer);
        const e = es(this.theme, "disposeTimeout");
        e !== null &&
          (this.$_disposeTimer = setTimeout(() => {
            this.$_popperNode &&
              (this.$_detachPopperNode(), (this.isMounted = !1));
          }, e)),
          this.$_removeEventListeners("scroll"),
          this.$emit("apply-hide"),
          (this.classes.showFrom = !1),
          (this.classes.showTo = !1),
          (this.classes.hideFrom = !0),
          (this.classes.hideTo = !1),
          await Zc(),
          (this.classes.hideFrom = !1),
          (this.classes.hideTo = !0);
      },
      $_autoShowHide() {
        this.shown ? this.show() : this.hide();
      },
      $_ensureTeleport() {
        if (this.$_isDisposed) return;
        let t = this.container;
        if (
          (typeof t == "string"
            ? (t = window.document.querySelector(t))
            : t === !1 && (t = this.$_targetNodes[0].parentNode),
          !t)
        )
          throw new Error("No container for popover: " + this.container);
        t.appendChild(this.$_popperNode), (this.isMounted = !0);
      },
      $_addEventListeners() {
        const t = (n) => {
          (this.isShown && !this.$_hideInProgress) ||
            ((n.usedByTooltip = !0),
            !this.$_preventShow && this.show({ event: n }));
        };
        this.$_registerTriggerListeners(
          this.$_targetNodes,
          Ym,
          this.triggers,
          this.showTriggers,
          t
        ),
          this.$_registerTriggerListeners(
            [this.$_popperNode],
            Ym,
            this.popperTriggers,
            this.popperShowTriggers,
            t
          );
        const e = (n) => {
          n.usedByTooltip || this.hide({ event: n });
        };
        this.$_registerTriggerListeners(
          this.$_targetNodes,
          Xm,
          this.triggers,
          this.hideTriggers,
          e
        ),
          this.$_registerTriggerListeners(
            [this.$_popperNode],
            Xm,
            this.popperTriggers,
            this.popperHideTriggers,
            e
          );
      },
      $_registerEventListeners(t, e, n) {
        this.$_events.push({ targetNodes: t, eventType: e, handler: n }),
          t.forEach((r) =>
            r.addEventListener(e, n, ni ? { passive: !0 } : void 0)
          );
      },
      $_registerTriggerListeners(t, e, n, r, i) {
        let s = n;
        r != null && (s = typeof r == "function" ? r(s) : r),
          s.forEach((o) => {
            const a = e[o];
            a && this.$_registerEventListeners(t, a, i);
          });
      },
      $_removeEventListeners(t) {
        const e = [];
        this.$_events.forEach((n) => {
          const { targetNodes: r, eventType: i, handler: s } = n;
          !t || t === i
            ? r.forEach((o) => o.removeEventListener(i, s))
            : e.push(n);
        }),
          (this.$_events = e);
      },
      $_refreshListeners() {
        this.$_isDisposed ||
          (this.$_removeEventListeners(), this.$_addEventListeners());
      },
      $_handleGlobalClose(t, e = !1) {
        this.$_showFrameLocked ||
          (this.hide({ event: t }),
          t.closePopover
            ? this.$emit("close-directive")
            : this.$emit("auto-hide"),
          e &&
            ((this.$_preventShow = !0),
            setTimeout(() => {
              this.$_preventShow = !1;
            }, 300)));
      },
      $_detachPopperNode() {
        this.$_popperNode.parentNode &&
          this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs(t, e) {
        for (const n of this.$_targetNodes) {
          const r = n.getAttribute(t);
          r && (n.removeAttribute(t), n.setAttribute(e, r));
        }
      },
      $_applyAttrsToTarget(t) {
        for (const e of this.$_targetNodes)
          for (const n in t) {
            const r = t[n];
            r == null ? e.removeAttribute(n) : e.setAttribute(n, r);
          }
      },
      $_updateParentShownChildren(t) {
        let e = this.parentPopper;
        for (; e; )
          t
            ? e.shownChildren.add(this.randomId)
            : (e.shownChildren.delete(this.randomId),
              e.$_pendingHide && e.hide()),
            (e = e.parentPopper);
      },
      $_isAimingPopper() {
        const t = this.$_referenceNode.getBoundingClientRect();
        if ($s >= t.left && $s <= t.right && Vs >= t.top && Vs <= t.bottom) {
          const e = this.$_popperNode.getBoundingClientRect(),
            n = $s - Jn,
            r = Vs - Zn,
            s =
              e.left +
              e.width / 2 -
              Jn +
              (e.top + e.height / 2) -
              Zn +
              e.width +
              e.height,
            o = Jn + n * s,
            a = Zn + r * s;
          return (
            aa(Jn, Zn, o, a, e.left, e.top, e.left, e.bottom) ||
            aa(Jn, Zn, o, a, e.left, e.top, e.right, e.top) ||
            aa(Jn, Zn, o, a, e.right, e.top, e.right, e.bottom) ||
            aa(Jn, Zn, o, a, e.left, e.bottom, e.right, e.bottom)
          );
        }
        return !1;
      },
    },
    render() {
      return this.$slots.default(this.slotData);
    },
  });
typeof document < "u" &&
  typeof window < "u" &&
  (u0
    ? (document.addEventListener(
        "touchstart",
        tg,
        ni ? { passive: !0, capture: !0 } : !0
      ),
      document.addEventListener(
        "touchend",
        KD,
        ni ? { passive: !0, capture: !0 } : !0
      ))
    : (window.addEventListener("mousedown", tg, !0),
      window.addEventListener("click", WD, !0)),
  window.addEventListener("resize", YD));
function tg(t) {
  for (let e = 0; e < Xt.length; e++) {
    const n = Xt[e];
    try {
      const r = n.popperNode();
      n.$_mouseDownContains = r.contains(t.target);
    } catch {}
  }
}
function WD(t) {
  f0(t);
}
function KD(t) {
  f0(t, !0);
}
function f0(t, e = !1) {
  const n = {};
  for (let r = Xt.length - 1; r >= 0; r--) {
    const i = Xt[r];
    try {
      const s = (i.$_containsGlobalTarget = GD(i, t));
      (i.$_pendingHide = !1),
        requestAnimationFrame(() => {
          if (((i.$_pendingHide = !1), !n[i.randomId] && ng(i, s, t))) {
            if (
              (i.$_handleGlobalClose(t, e),
              !t.closeAllPopover && t.closePopover && s)
            ) {
              let a = i.parentPopper;
              for (; a; ) (n[a.randomId] = !0), (a = a.parentPopper);
              return;
            }
            let o = i.parentPopper;
            for (; o && ng(o, o.$_containsGlobalTarget, t); ) {
              o.$_handleGlobalClose(t, e);
              o = o.parentPopper;
            }
          }
        });
    } catch {}
  }
}
function GD(t, e) {
  const n = t.popperNode();
  return t.$_mouseDownContains || n.contains(e.target);
}
function ng(t, e, n) {
  return n.closeAllPopover || (n.closePopover && e) || (QD(t, n) && !e);
}
function QD(t, e) {
  if (typeof t.autoHide == "function") {
    const n = t.autoHide(e);
    return (t.lastAutoHide = n), n;
  }
  return t.autoHide;
}
function YD(t) {
  for (let e = 0; e < Xt.length; e++) Xt[e].$_computePosition(t);
}
let Jn = 0,
  Zn = 0,
  $s = 0,
  Vs = 0;
typeof window < "u" &&
  window.addEventListener(
    "mousemove",
    (t) => {
      (Jn = $s), (Zn = Vs), ($s = t.clientX), (Vs = t.clientY);
    },
    ni ? { passive: !0 } : void 0
  );
function aa(t, e, n, r, i, s, o, a) {
  const l =
      ((o - i) * (e - s) - (a - s) * (t - i)) /
      ((a - s) * (n - t) - (o - i) * (r - e)),
    c =
      ((n - t) * (e - s) - (r - e) * (t - i)) /
      ((a - s) * (n - t) - (o - i) * (r - e));
  return l >= 0 && l <= 1 && c >= 0 && c <= 1;
}
var mc = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e) n[r] = i;
  return n;
};
const XD = { extends: h0() };
function JD(t, e, n, r, i, s) {
  return (
    R(),
    H(
      "div",
      {
        ref: "reference",
        class: Ne(["v-popper", { "v-popper--shown": t.slotData.isShown }]),
      },
      [Li(t.$slots, "default", F0(rv(t.slotData)))],
      2
    )
  );
}
var ZD = mc(XD, [["render", JD]]);
function eN() {
  var t = window.navigator.userAgent,
    e = t.indexOf("MSIE ");
  if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
  var n = t.indexOf("Trident/");
  if (n > 0) {
    var r = t.indexOf("rv:");
    return parseInt(t.substring(r + 3, t.indexOf(".", r)), 10);
  }
  var i = t.indexOf("Edge/");
  return i > 0 ? parseInt(t.substring(i + 5, t.indexOf(".", i)), 10) : -1;
}
let Ea;
function rd() {
  rd.init || ((rd.init = !0), (Ea = eN() !== -1));
}
var gc = {
  name: "ResizeObserver",
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ["notify"],
  mounted() {
    rd(),
      ar(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const t = document.createElement("object");
    (this._resizeObject = t),
      t.setAttribute("aria-hidden", "true"),
      t.setAttribute("tabindex", -1),
      (t.onload = this.addResizeHandlers),
      (t.type = "text/html"),
      Ea && this.$el.appendChild(t),
      (t.data = "about:blank"),
      Ea || this.$el.appendChild(t);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth),
        (this._h = this.$el.offsetHeight),
        this.emitSize());
    },
    emitSize() {
      this.$emit("notify", { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        "resize",
        this.compareAndNotify
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!Ea &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            "resize",
            this.compareAndNotify
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const tN = Mg();
Mn("data-v-b329ee4c");
const nN = { class: "resize-observer", tabindex: "-1" };
$n();
const rN = tN((t, e, n, r, i, s) => (R(), xe("div", nN)));
gc.render = rN;
gc.__scopeId = "data-v-b329ee4c";
gc.__file = "src/components/ResizeObserver.vue";
var p0 = (t = "theme") => ({
  computed: {
    themeClass() {
      return zD(this[t]);
    },
  },
});
const iN = Ge({
    name: "VPopperContent",
    components: { ResizeObserver: gc },
    mixins: [p0()],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object,
    },
    emits: ["hide", "resize"],
    methods: {
      toPx(t) {
        return t != null && !isNaN(t) ? `${t}px` : null;
      },
    },
  }),
  sN = ["id", "aria-hidden", "tabindex", "data-popper-placement"],
  oN = { ref: "inner", class: "v-popper__inner" },
  aN = w("div", { class: "v-popper__arrow-outer" }, null, -1),
  lN = w("div", { class: "v-popper__arrow-inner" }, null, -1),
  cN = [aN, lN];
function uN(t, e, n, r, i, s) {
  const o = Cn("ResizeObserver");
  return (
    R(),
    H(
      "div",
      {
        id: t.popperId,
        ref: "popover",
        class: Ne([
          "v-popper__popper",
          [
            t.themeClass,
            t.classes.popperClass,
            {
              "v-popper__popper--shown": t.shown,
              "v-popper__popper--hidden": !t.shown,
              "v-popper__popper--show-from": t.classes.showFrom,
              "v-popper__popper--show-to": t.classes.showTo,
              "v-popper__popper--hide-from": t.classes.hideFrom,
              "v-popper__popper--hide-to": t.classes.hideTo,
              "v-popper__popper--skip-transition": t.skipTransition,
              "v-popper__popper--arrow-overflow":
                t.result && t.result.arrow.overflow,
              "v-popper__popper--no-positioning": !t.result,
            },
          ],
        ]),
        style: cr(
          t.result
            ? {
                position: t.result.strategy,
                transform: `translate3d(${Math.round(
                  t.result.x
                )}px,${Math.round(t.result.y)}px,0)`,
              }
            : void 0
        ),
        "aria-hidden": t.shown ? "false" : "true",
        tabindex: t.autoHide ? 0 : void 0,
        "data-popper-placement": t.result ? t.result.placement : void 0,
        onKeyup:
          e[2] || (e[2] = fv((a) => t.autoHide && t.$emit("hide"), ["esc"])),
      },
      [
        w("div", {
          class: "v-popper__backdrop",
          onClick: e[0] || (e[0] = (a) => t.autoHide && t.$emit("hide")),
        }),
        w(
          "div",
          {
            class: "v-popper__wrapper",
            style: cr(
              t.result ? { transformOrigin: t.result.transformOrigin } : void 0
            ),
          },
          [
            w(
              "div",
              oN,
              [
                t.mounted
                  ? (R(),
                    H(
                      Ue,
                      { key: 0 },
                      [
                        w("div", null, [Li(t.$slots, "default")]),
                        t.handleResize
                          ? (R(),
                            xe(o, {
                              key: 0,
                              onNotify:
                                e[1] || (e[1] = (a) => t.$emit("resize", a)),
                            }))
                          : Oe("", !0),
                      ],
                      64
                    ))
                  : Oe("", !0),
              ],
              512
            ),
            w(
              "div",
              {
                ref: "arrow",
                class: "v-popper__arrow-container",
                style: cr(
                  t.result
                    ? {
                        left: t.toPx(t.result.arrow.x),
                        top: t.toPx(t.result.arrow.y),
                      }
                    : void 0
                ),
              },
              cN,
              4
            ),
          ],
          4
        ),
      ],
      46,
      sN
    )
  );
}
var m0 = mc(iN, [["render", uN]]),
  g0 = {
    methods: {
      show(...t) {
        return this.$refs.popper.show(...t);
      },
      hide(...t) {
        return this.$refs.popper.hide(...t);
      },
      dispose(...t) {
        return this.$refs.popper.dispose(...t);
      },
      onResize(...t) {
        return this.$refs.popper.onResize(...t);
      },
    },
  };
const dN = Ge({
  name: "VPopperWrapper",
  components: { Popper: ZD, PopperContent: m0 },
  mixins: [g0, p0("finalTheme")],
  props: { theme: { type: String, default: null } },
  computed: {
    finalTheme() {
      var t;
      return (t = this.theme) != null ? t : this.$options.vPopperTheme;
    },
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter(
        (t) => t !== this.$refs.popperContent.$el
      );
    },
  },
});
function hN(t, e, n, r, i, s) {
  const o = Cn("PopperContent"),
    a = Cn("Popper");
  return (
    R(),
    xe(
      a,
      {
        ref: "popper",
        theme: t.finalTheme,
        "target-nodes": t.getTargetNodes,
        "popper-node": () => t.$refs.popperContent.$el,
        class: Ne([t.themeClass]),
      },
      {
        default: je(
          ({
            popperId: l,
            isShown: c,
            shouldMountContent: u,
            skipTransition: d,
            autoHide: h,
            show: f,
            hide: g,
            handleResize: y,
            onResize: _,
            classes: T,
            result: v,
          }) => [
            Li(t.$slots, "default", { shown: c, show: f, hide: g }),
            me(
              o,
              {
                ref: "popperContent",
                "popper-id": l,
                theme: t.finalTheme,
                shown: c,
                mounted: u,
                "skip-transition": d,
                "auto-hide": h,
                "handle-resize": y,
                classes: T,
                result: v,
                onHide: g,
                onResize: _,
              },
              {
                default: je(() => [
                  Li(t.$slots, "popper", { shown: c, hide: g }),
                ]),
                _: 2,
              },
              1032,
              [
                "popper-id",
                "theme",
                "shown",
                "mounted",
                "skip-transition",
                "auto-hide",
                "handle-resize",
                "classes",
                "result",
                "onHide",
                "onResize",
              ]
            ),
          ]
        ),
        _: 3,
      },
      8,
      ["theme", "target-nodes", "popper-node", "class"]
    )
  );
}
var zh = mc(dN, [["render", hN]]);
const fN = Ge($o(yn({}, zh), { name: "VDropdown", vPopperTheme: "dropdown" })),
  pN = Ge($o(yn({}, zh), { name: "VMenu", vPopperTheme: "menu" })),
  mN = Ge($o(yn({}, zh), { name: "VTooltip", vPopperTheme: "tooltip" })),
  gN = Ge({
    name: "VTooltipDirective",
    components: { Popper: h0(), PopperContent: m0 },
    mixins: [g0],
    inheritAttrs: !1,
    props: {
      theme: { type: String, default: "tooltip" },
      html: { type: Boolean, default: (t) => es(t.theme, "html") },
      content: { type: [String, Number, Function], default: null },
      loadingContent: {
        type: String,
        default: (t) => es(t.theme, "loadingContent"),
      },
    },
    data() {
      return { asyncContent: null };
    },
    computed: {
      isContentAsync() {
        return typeof this.content == "function";
      },
      loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent() {
        return this.isContentAsync
          ? this.loading
            ? this.loadingContent
            : this.asyncContent
          : this.content;
      },
    },
    watch: {
      content: {
        handler() {
          this.fetchContent(!0);
        },
        immediate: !0,
      },
      async finalContent() {
        await this.$nextTick(), this.$refs.popper.onResize();
      },
    },
    created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent(t) {
        if (
          typeof this.content == "function" &&
          this.$_isShown &&
          (t || (!this.$_loading && this.asyncContent == null))
        ) {
          (this.asyncContent = null), (this.$_loading = !0);
          const e = ++this.$_fetchId,
            n = this.content(this);
          n.then ? n.then((r) => this.onResult(e, r)) : this.onResult(e, n);
        }
      },
      onResult(t, e) {
        t === this.$_fetchId &&
          ((this.$_loading = !1), (this.asyncContent = e));
      },
      onShow() {
        (this.$_isShown = !0), this.fetchContent();
      },
      onHide() {
        this.$_isShown = !1;
      },
    },
  }),
  vN = ["innerHTML"],
  yN = ["textContent"];
function _N(t, e, n, r, i, s) {
  const o = Cn("PopperContent"),
    a = Cn("Popper");
  return (
    R(),
    xe(
      a,
      Mi({ ref: "popper" }, t.$attrs, {
        theme: t.theme,
        "popper-node": () => t.$refs.popperContent.$el,
        onApplyShow: t.onShow,
        onApplyHide: t.onHide,
      }),
      {
        default: je(
          ({
            popperId: l,
            isShown: c,
            shouldMountContent: u,
            skipTransition: d,
            autoHide: h,
            hide: f,
            handleResize: g,
            onResize: y,
            classes: _,
            result: T,
          }) => [
            me(
              o,
              {
                ref: "popperContent",
                class: Ne({ "v-popper--tooltip-loading": t.loading }),
                "popper-id": l,
                theme: t.theme,
                shown: c,
                mounted: u,
                "skip-transition": d,
                "auto-hide": h,
                "handle-resize": g,
                classes: _,
                result: T,
                onHide: f,
                onResize: y,
              },
              {
                default: je(() => [
                  t.html
                    ? (R(),
                      H(
                        "div",
                        { key: 0, innerHTML: t.finalContent },
                        null,
                        8,
                        vN
                      ))
                    : (R(),
                      H(
                        "div",
                        { key: 1, textContent: ur(t.finalContent) },
                        null,
                        8,
                        yN
                      )),
                ]),
                _: 2,
              },
              1032,
              [
                "class",
                "popper-id",
                "theme",
                "shown",
                "mounted",
                "skip-transition",
                "auto-hide",
                "handle-resize",
                "classes",
                "result",
                "onHide",
                "onResize",
              ]
            ),
          ]
        ),
        _: 1,
      },
      16,
      ["theme", "popper-node", "onApplyShow", "onApplyHide"]
    )
  );
}
var wN = mc(gN, [["render", _N]]);
const v0 = "v-popper--has-tooltip";
function bN(t, e) {
  let n = t.placement;
  if (!n && e) for (const r of d0) e[r] && (n = r);
  return n || (n = es(t.theme || "tooltip", "placement")), n;
}
function y0(t, e, n) {
  let r;
  const i = typeof e;
  return (
    i === "string"
      ? (r = { content: e })
      : e && i === "object"
      ? (r = e)
      : (r = { content: !1 }),
    (r.placement = bN(r, n)),
    (r.targetNodes = () => [t]),
    (r.referenceNode = () => t),
    r
  );
}
let tu,
  co,
  EN = 0;
function TN() {
  if (tu) return;
  (co = ne([])),
    (tu = pv({
      name: "VTooltipDirectiveApp",
      setup() {
        return { directives: co };
      },
      render() {
        return this.directives.map((e) =>
          wl(
            wN,
            $o(yn({}, e.options), {
              shown: e.shown || e.options.shown,
              key: e.id,
            })
          )
        );
      },
      devtools: { hide: !0 },
    }));
  const t = document.createElement("div");
  document.body.appendChild(t), tu.mount(t);
}
function IN(t, e, n) {
  TN();
  const r = ne(y0(t, e, n)),
    i = ne(!1),
    s = { id: EN++, options: r, shown: i };
  return (
    co.value.push(s),
    t.classList && t.classList.add(v0),
    (t.$_popper = {
      options: r,
      item: s,
      show() {
        i.value = !0;
      },
      hide() {
        i.value = !1;
      },
    })
  );
}
function _0(t) {
  if (t.$_popper) {
    const e = co.value.indexOf(t.$_popper.item);
    e !== -1 && co.value.splice(e, 1),
      delete t.$_popper,
      delete t.$_popperOldShown,
      delete t.$_popperMountTarget;
  }
  t.classList && t.classList.remove(v0);
}
function rg(t, { value: e, modifiers: n }) {
  const r = y0(t, e, n);
  if (!r.content || es(r.theme || "tooltip", "disabled")) _0(t);
  else {
    let i;
    t.$_popper ? ((i = t.$_popper), (i.options.value = r)) : (i = IN(t, e, n)),
      typeof e.shown < "u" &&
        e.shown !== t.$_popperOldShown &&
        ((t.$_popperOldShown = e.shown), e.shown ? i.show() : i.hide());
  }
}
var AN = {
  beforeMount: rg,
  updated: rg,
  beforeUnmount(t) {
    _0(t);
  },
};
function ig(t) {
  t.addEventListener("click", w0),
    t.addEventListener("touchstart", b0, ni ? { passive: !0 } : !1);
}
function sg(t) {
  t.removeEventListener("click", w0),
    t.removeEventListener("touchstart", b0),
    t.removeEventListener("touchend", E0),
    t.removeEventListener("touchcancel", T0);
}
function w0(t) {
  const e = t.currentTarget;
  (t.closePopover = !e.$_vclosepopover_touch),
    (t.closeAllPopover =
      e.$_closePopoverModifiers && !!e.$_closePopoverModifiers.all);
}
function b0(t) {
  if (t.changedTouches.length === 1) {
    const e = t.currentTarget;
    e.$_vclosepopover_touch = !0;
    const n = t.changedTouches[0];
    (e.$_vclosepopover_touchPoint = n),
      e.addEventListener("touchend", E0),
      e.addEventListener("touchcancel", T0);
  }
}
function E0(t) {
  const e = t.currentTarget;
  if (((e.$_vclosepopover_touch = !1), t.changedTouches.length === 1)) {
    const n = t.changedTouches[0],
      r = e.$_vclosepopover_touchPoint;
    (t.closePopover =
      Math.abs(n.screenY - r.screenY) < 20 &&
      Math.abs(n.screenX - r.screenX) < 20),
      (t.closeAllPopover =
        e.$_closePopoverModifiers && !!e.$_closePopoverModifiers.all);
  }
}
function T0(t) {
  const e = t.currentTarget;
  e.$_vclosepopover_touch = !1;
}
var CN = {
  beforeMount(t, { value: e, modifiers: n }) {
    (t.$_closePopoverModifiers = n), (typeof e > "u" || e) && ig(t);
  },
  updated(t, { value: e, oldValue: n, modifiers: r }) {
    (t.$_closePopoverModifiers = r),
      e !== n && (typeof e > "u" || e ? ig(t) : sg(t));
  },
  beforeUnmount(t) {
    sg(t);
  },
};
function kN(t, e = {}) {
  t.$_vTooltipInstalled ||
    ((t.$_vTooltipInstalled = !0),
    c0(An, e),
    t.directive("tooltip", AN),
    t.directive("close-popper", CN),
    t.component("VTooltip", mN),
    t.component("VDropdown", fN),
    t.component("VMenu", pN));
}
const SN = { version: "2.0.0-beta.20", install: kN, options: An };
var qN = "firebase",
  xN = "9.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ pr(qN, xN, "app");
var vc = function () {
    return typeof document < "u" && typeof window < "u";
  },
  RN = function (e, n) {
    return new Promise(function (r, i) {
      var s = document.head || document.getElementsByTagName("head")[0],
        o = document.createElement("script");
      if (((o.async = !0), (o.src = e), (o.charset = "utf-8"), n)) {
        var a = document.createElement("link");
        (a.href = n), (a.rel = "preconnect"), s.appendChild(a);
      }
      s.appendChild(o), (o.onload = r), (o.onerror = i);
    });
  },
  PN = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Object.keys(n).forEach(function (r) {
      e[r] = n[r];
    });
  },
  I0 = Ln({
    property: null,
    isEnabled: !0,
    disableScriptLoader: !1,
    useDebugger: !1,
    globalObjectName: "gtag",
    dataLayerName: "dataLayer",
    resourceURL: "https://www.googletagmanager.com/gtag/js",
    preconnectOrigin: "https://www.googletagmanager.com",
    customResource: null,
    appName: null,
    appId: null,
    appVersion: null,
  }),
  Cr = function () {
    return gb(I0);
  },
  A0 = ge(function () {
    var t = Cr(),
      e = t.property;
    if (e.value)
      return Array.isArray(e.value)
        ? e.value.find(function (n) {
            return n.default === !0;
          }) || e.value[0]
        : e.value;
  }),
  ON = ge(function () {
    var t = Cr(),
      e = t.property;
    return !!(e.value && e.value.id !== null);
  }),
  uo = ge(function () {
    var t = Cr(),
      e = t.property;
    return Array.isArray(e.value) ? e.value : [e.value];
  }),
  DN = ge(function () {
    var t = Cr(),
      e = t.isEnabled,
      n = A0.value;
    return !!(n && n.id && e.value);
  }),
  Vo = function () {
    var t;
    if (vc()) {
      for (
        var e = Cr(),
          n = e.globalObjectName,
          r = e.useDebugger,
          i = arguments.length,
          s = new Array(i),
          o = 0;
        o < i;
        o++
      )
        s[o] = arguments[o];
      r.value && console.warn("[vue-gtag] Debugger:", s),
        (t = window)[n.value].apply(t, s);
    }
  },
  Wh = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    uo.value.forEach(function (r) {
      Vo.apply(void 0, ["config", r.id].concat(e));
    });
  },
  NN = function (t) {
    Wh({ custom_map: t });
  },
  LN = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    vc() &&
      uo.value.forEach(function (e) {
        window["ga-disable-".concat(e.id)] = t;
      });
  },
  di = function (t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = Object.assign({}, e);
    !n.send_to &&
      uo.value.length > 1 &&
      (n.send_to = uo.value.map(function (r) {
        return r.id;
      })),
      Vo("event", t, n);
  },
  MN = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    di.apply(void 0, ["exception"].concat(e));
  },
  $N = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    Wh.apply(void 0, ["linker"].concat(e));
  },
  VN = function (t) {
    var e = {};
    typeof t == "string"
      ? (e = { page_path: t, page_location: window.location.href })
      : (e = t),
      typeof e.send_page_view > "u" && (e.send_page_view = !0),
      di("page_view", e);
  },
  FN = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    di.apply(void 0, ["purchase"].concat(e));
  },
  UN = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    di.apply(void 0, ["refund"].concat(e));
  },
  BN = function () {
    for (
      var t = Cr(),
        e = t.appName,
        n = t.appId,
        r = t.appVersion,
        i = arguments.length,
        s = new Array(i),
        o = 0;
      o < i;
      o++
    )
      s[o] = arguments[o];
    var a = s[0],
      l = {};
    typeof a == "string" ? (l = { screen_name: a }) : (l = a),
      l.app_name == null && e.value != null && (l.app_name = e.value),
      l.app_id == null && n.value != null && (l.app_id = n.value),
      l.app_version == null && r.value != null && (l.app_version = r.value),
      di("screen_view", l);
  },
  jN = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    Vo.apply(void 0, ["set"].concat(e));
  },
  HN = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    di.apply(void 0, ["timing_complete"].concat(e));
  },
  zN = Object.freeze({
    __proto__: null,
    config: Wh,
    customMap: NN,
    disable: LN,
    event: di,
    exception: MN,
    linker: $N,
    pageview: VN,
    purchase: FN,
    query: Vo,
    refund: UN,
    screenview: BN,
    set: jN,
    time: HN,
  }),
  og = ne(!1),
  ag = ne(!1),
  WN = function () {
    var e = Cr(),
      n = e.disableScriptLoader,
      r = e.preconnectOrigin,
      i = e.resourceURL,
      s = e.dataLayerName;
    if (!(!vc() || !ON.value || ag.value)) {
      if (
        ((ag.value = !0),
        uo.value.forEach(function (a) {
          var l = Object.assign({ send_page_view: !1 }, a.params);
          Vo("config", a.id, l);
        }),
        n.value)
      ) {
        og.value = !0;
        return;
      }
      var o = ""
        .concat(i.value, "?id=")
        .concat(A0.value.id, "&l=")
        .concat(s.value);
      RN(o, r.value).then(function () {
        og.value = !0;
      });
    }
  },
  KN = function () {
    ft(
      function () {
        return DN.value;
      },
      function (e) {
        return e && WN();
      },
      { immediate: !0 }
    );
  },
  GN = function () {
    if (vc()) {
      var t = Cr(),
        e = t.globalObjectName,
        n = t.dataLayerName;
      window[e.value] == null &&
        ((window[n.value] = window[n.value] || []),
        (window[e.value] = function () {
          window[n.value].push(arguments);
        })),
        window[e.value]("js", new Date());
    }
  };
Ln({ template: null, useScreenview: !1, skipSamePath: !0 });
var QN = {
  install: function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    PN(I0, n), GN(), KN(), (e.config.globalProperties.$gtag = zN);
  },
};
const YN = {
  apiKey: "AIzaSyADXkE6U5j_hlSRxK3nfqyylmPXgUeGWsQ",
  authDomain: "cris-ordem-paranormal.firebaseapp.com",
  projectId: "cris-ordem-paranormal",
  storageBucket: "cris-ordem-paranormal.appspot.com",
  messagingSenderId: "713229784986",
  appId: "1:713229784986:web:8096a40ec5021bbbf18c23",
  measurementId: "G-XCBC726H4S",
};
S1(YN);
const hi = pv(aO);
hi.use(QN, { property: { id: "G-XCBC726H4S" } });
hi.use(Yw);
hi.use(YO);
hi.use(t0);
hi.use(SN);
hi.component("PEditor", n0);
hi.mount("#app");
export {
  rs as $,
  xw as A,
  _x as B,
  uf as C,
  ZN as D,
  fv as E,
  vx as F,
  Mt as G,
  lt as H,
  dL as I,
  ac as J,
  cr as K,
  Ye as L,
  Bn as M,
  Lo as N,
  pL as O,
  Kt as P,
  bl as Q,
  nx as R,
  is as S,
  vr as T,
  Rt as U,
  sy as V,
  mL as W,
  Dw as X,
  Pw as Y,
  Vh as Z,
  bt as _,
  w as a,
  Ra as a0,
  Ne as a1,
  Hg as a2,
  fo as a3,
  MP as a4,
  ka as a5,
  vL as a6,
  yL as a7,
  XN as a8,
  gv as a9,
  Gw as aa,
  C as ab,
  Li as ac,
  Rf as ad,
  Mi as ae,
  Bi as af,
  Yr as ag,
  pr as ah,
  wt as ai,
  Pd as aj,
  $v as ak,
  go as al,
  Fn as am,
  nn as an,
  Ow as ao,
  JN as ap,
  $n as b,
  H as c,
  Ge as d,
  tn as e,
  ge as f,
  Un as g,
  gL as h,
  Cn as i,
  an as j,
  me as k,
  Ex as l,
  Oe as m,
  Ue as n,
  R as o,
  Mn as p,
  Ni as q,
  ne as r,
  Xs as s,
  ur as t,
  qd as u,
  xe as v,
  ft as w,
  je as x,
  fL as y,
  hL as z,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/LoginPage-ZNk4-RM4.js",
      "assets/LoginPage-eaGdDaNQ.css",
      "assets/CharacterList-j30xQf0A.js",
      "assets/LoadingView-F-Df8Cc9.js",
      "assets/LoadingView-qh-7N428.css",
      "assets/SearchInput-meU_8poS.js",
      "assets/SearchInput-jPRLRlnv.css",
      "assets/ToastNotification-iln-U-Jv.js",
      "assets/ToastNotification-6ONUaJjV.css",
      "assets/CharacterCard-1NIKY8Bn.js",
      "assets/share-icon-J6b_MEIl.js",
      "assets/trash-icon-Dl18GMfa.js",
      "assets/exit-icon-7lL51GVi.js",
      "assets/CharacterCard-ocRKK6cr.css",
      "assets/firebase-fsM9W8Ok.js",
      "assets/lodash-gzw5KmHd.js",
      "assets/_commonjsHelpers-4gQjN7DL.js",
      "assets/CharacterList-vQbJMpxE.css",
      "assets/CampaignsList-upO1l-Rc.js",
      "assets/CampaignsList-tS6h-QvO.css",
      "assets/HomebrewList-CHgjgZSE.js",
      "assets/TabNav-J49e2lVX.js",
      "assets/TabNav-zYXLAqHR.css",
      "assets/HomebrewItems-M9AEA-p9.js",
      "assets/PowerCard-003Gc1fD.js",
      "assets/show-more-icon-VvUXKiHG.js",
      "assets/add-icon-fJ4uQHUZ.js",
      "assets/PowerCard-AtvhC0iw.css",
      "assets/default-FmxCqAN8.js",
      "assets/forms-8DDAOOVU.js",
      "assets/SwitchButtonBool-1o2dWmEl.js",
      "assets/SwitchButtonBool-VT84EvRG.css",
      "assets/PictureModal-90Aqw16Z.js",
      "assets/index.esm2017-V_2u4nEA.js",
      "assets/index-qLpZT18D.css",
      "assets/v4-cyCr5FZV.js",
      "assets/PictureModal-yAp0FYnC.css",
      "assets/RitualCard-RSc7FtyV.js",
      "assets/d20-icon-vaz1En3o.js",
      "assets/RitualCard-iFNGvJoI.css",
      "assets/DropdownSimple-F1EiZrON.js",
      "assets/DropdownSimple-ElMOUPOp.css",
      "assets/CursedItemCard-uZcUXQKe.js",
      "assets/CardSource-GPmQUP_4.js",
      "assets/CardSource-rIHZzoK9.css",
      "assets/CursedItemCard-9o2J_eqG.css",
      "assets/HomebrewItems-ZfmZOS3d.css",
      "assets/CreatureCard-7zsaomxO.js",
      "assets/creatureData-ozdxpDUT.js",
      "assets/CreatureCard-WoznS8aL.css",
      "assets/CreatureForm-mGjsbpuI.js",
      "assets/blank-profile-picture-wMh28flS.js",
      "assets/CreatureForm-c_ldYfwU.css",
      "assets/HomebrewList-eMZ2PHJC.css",
      "assets/HomebrewPowerView-y9I-FtWl.js",
      "assets/PlayerCard-1edvodgq.js",
      "assets/PlayerCard-mAVqW8Kc.css",
      "assets/HomebrewPowerView-oH1rxoLq.css",
      "assets/HomebrewRitualView-GJ6CQjQa.js",
      "assets/HomebrewRitualView-A5dhjcNK.css",
      "assets/HomebrewItemView-zpthUmGN.js",
      "assets/HomebrewItemView-xVelEn5u.css",
      "assets/HomebrewCreatureView-UbmLP3vo.js",
      "assets/HomebrewCreatureView-_m7VsP0t.css",
      "assets/UserProfile-kxt2kC6r.js",
      "assets/UserProfile-JwlY0uEO.css",
      "assets/CampaignCreate-x3hFabPX.js",
      "assets/CampaignCreate-ZGKciBb7.css",
      "assets/CampaignEdit-yJsV5B5t.js",
      "assets/CampaignEdit-g3a8pHRX.css",
      "assets/CampaignPage-iqKoxFcX.js",
      "assets/CombatCard-QmwknYws.js",
      "assets/CombatCard-2RYFPG_X.css",
      "assets/CampaignPage-yuweHY9U.css",
      "assets/CampaignJoin-vxL68SO4.js",
      "assets/CampaignJoin-Y3mQwTGd.css",
      "assets/CampaignAddAgent-QOtDxQOU.js",
      "assets/CampaignAddAgent-ak7wNOog.css",
      "assets/CreateCombat-04AfXOdM.js",
      "assets/creatures-7BKS8eWn.js",
      "assets/cultoDaCriacaoContent-BJ8GSvob.js",
      "assets/marcasFragmentadas-KD4kpdFJ.js",
      "assets/SourcesNavigation-XWNobkYr.js",
      "assets/SourcesNavigation-jTK-fNQX.css",
      "assets/CreateCombat-YNxYCjen.css",
      "assets/EditCombat-rXYe9Z53.js",
      "assets/EditCombat-yKOa2Dla.css",
      "assets/CampaignPageDenied-WV02dZkF.js",
      "assets/CampaignPageDenied-gbq2rXKF.css",
      "assets/MasterScreen-19ik4Cxa.js",
      "assets/ToastAttack-akyQOuGO.js",
      "assets/edit-icon-3vZQUsyW.js",
      "assets/characterAutomations-VjVSWhq1.js",
      "assets/attributes-pd1IMHTT.js",
      "assets/ToastAttack-Gof2N8fz.css",
      "assets/ActionModal-6xxUHEKk.js",
      "assets/ActionModal-rNMvofaK.css",
      "assets/MasterScreen-fzJs1KDn.css",
      "assets/CharacterCreation-9hdjbs-D.js",
      "assets/ClassCard-QX7-I8zM.js",
      "assets/ClassCard-Ns6rpgJn.css",
      "assets/characterCreationUtils-SAvFPrg8.js",
      "assets/CharacterCreation-ArZnJCil.css",
      "assets/CharacterSheet-WgEnpERp.js",
      "assets/CharacterSheet-yqRbvySH.css",
      "assets/ContactView-zMSZODw3.js",
      "assets/ContactView-8FCoscjA.css",
      "assets/CharacterStream-0ZutkqdA.js",
      "assets/CharacterStream-9tlGFTRM.css",
      "assets/DespertadosStream--u6LiyMT.js",
      "assets/DespertadosStream-K9tcQO7o.css",
      "assets/AguaRicaStream-CUFV9_-X.js",
      "assets/AguaRicaStream-mgLHcY_G.css",
      "assets/CharacterPv-s687d970.js",
      "assets/CharacterPv-T9RjlDJ-.css",
      "assets/CharacterSan-0khcklF1.js",
      "assets/CharacterSan-5FC5fBOx.css",
      "assets/CharacterPe-9Cx7yn9y.js",
      "assets/CharacterPe-Akcgawku.css",
      "assets/about-view-nKLbTGjN.js",
      "assets/about-view-iBvomE2y.css",
      "assets/privacy-policy-r-m7IJ5p.js",
      "assets/privacy-policy-K8p3o3Le.css",
      "assets/CreaturesList-gUKXzY38.js",
      "assets/CreaturesList-TTuwQHIY.css",
      "assets/CreatureSheet-N3sR_PS3.js",
      "assets/CreatureSheet-n4j9BMhI.css",
      "assets/StreamDashboard-Rt9Jz2F9.js",
      "assets/StreamDashboard-DjeFcF5w.css",
      "assets/InvazoresView-WLTDbtjY.js",
      "assets/InvazoresView-mamOAQzF.css",
      "assets/blog-view-YqItn7gA.js",
      "assets/BlogList-kwAbOchh.js",
      "assets/BlogList-vZBULAIh.css",
      "assets/persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel-p0uTiwxs.js",
      "assets/the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto-q6zmj-x_.js",
      "assets/mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia-lur2CGcM.js",
      "assets/genshin-impact-uma-jornada-alem-dos-limites-Bj-70HL-.js",
      "assets/final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva-CEdXLMb7.js",
      "assets/elden-ring-a-jornada-epica-alem-das-expectativas-9EMrwboP.js",
      "assets/divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo-yswGzWPS.js",
      "assets/cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3-tf7twfu4.js",
      "assets/assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg-fLGJ6Ged.js",
      "assets/o-que-e-rpg-de-mesa-YSTs0tXi.js",
      "assets/o-rpg-ordem-paranormal-q-j490vS.js",
      "assets/o-rpg-tormenta20-Co_6ZmXy.js",
      "assets/3d_t-a-porta-de-entrada-pro-rpg-brasileiro-iO8c0yTN.js",
      "assets/vampiro-a-mascara-perdura-ao-longo-das-decadas-5eKKDKTB.js",
      "assets/a-popularizacao-de-dungeons-_-dragons-yKrclLNB.js",
      "assets/criando-personagens-memoraveis-em-rpg-de-mesa-fFuAeJqC.js",
      "assets/diferentes-estilos-de-mestres-em-rpg-de-mesa-wbydZcKC.js",
      "assets/historia-do-rpg-uma-viagem-pela-evolucao-do-genero-fUSHWjOG.js",
      "assets/gurps-o-rpg-generico-b1P2gx5_.js",
      "assets/pathfinder-o-maior-rival-de-dungeons-_-dragons-R0vrcbn_.js",
      "assets/um-guia-completo-sobre-pathfinder-_TBi2MqW.js",
      "assets/os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa-yRMuZNxp.js",
      "assets/fate-core-system-e-o-sistema-mais-facil-do-mundo-7vdVKIlZ.js",
      "assets/dicas-para-mestres-de-rpg-KAn_t-fU.js",
      "assets/criando-um-mundo-de-rpg-personalizado-61Wov6C-.js",
      "assets/a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico-c-sa7nAs.js",
      "assets/os-beneficios-do-rpg-para-a-vida-real-a0IR6VZf.js",
      "assets/a-influencia-de-d_d-na-cultura-pop-LSnxpJ-o.js",
      "assets/a-evolucao-das-mecanicas-de-rpg-T-59NeDp.js",
      "assets/racas-e-classes-explorando-as-escolhas-de-personagem-SjBFJDSg.js",
      "assets/o-papel-do-mestre-na-narrativa-de-rpg-3KwC6Hyb.js",
      "assets/mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron-GDokbjtI.js",
      "assets/o-impacto-da-arte-na-estetica-dos-rpgs-_tekumOu.js",
      "assets/a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg-ZgASWISO.js",
      "assets/mitos-e-lendas-folcloricas-no-mundo-dos-rpgs-QjicP5p_.js",
      "assets/o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa-gvoXnLod.js",
      "assets/rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval-6TFpmOlW.js",
      "assets/como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa-LxkB3vEn.js",
      "assets/descobrindo-o-mundo-do-rpg-savage-worlds-NCp5tsFU.js",
      "assets/explorando-os-subgeneros-do-rpg-2I01Mbz7.js",
      "assets/baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores-aK6izQjC.js",
      "assets/descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world-gyKewC49.js",
      "assets/descobrindo-o-universo-do-rpg-world-of-darkness-Pf5ptRNC.js",
      "assets/e-dificil-comecar-a-jogar-rpg-de-mesa-IuWtLWQk.js",
      "assets/a-importancia-da-cooperacao-em-jogos-de-rpg-BMEbca5p.js",
      "assets/criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo-uQKCOs_q.js",
      "assets/o-rpg-como-pilar-da-cultura-geek-e-nerd-1INcmFvV.js",
      "assets/criando-personagens-complexos-e-multidimensionais-no-rpg-ri45Dgij.js",
      "assets/a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa-eEV_zdbH.js",
      "assets/construindo-mundos-de-campanha-de-rpg-atrativos-bM8JGr9s.js",
      "assets/o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg-m1qAwehf.js",
      "assets/as-origens-e-a-evolucao-dos-dados-de-rpg-Aa_U4ckF.js",
      "assets/rpg-como-ferramenta-de-aprendizado-sKOJTR11.js",
      "assets/inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg-_BLu4zpD.js",
      "assets/o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg-SoWlbsUo.js",
      "assets/rpgs-para-criancas-e-iniciantes-fmFZe_w0.js",
      "assets/etica-e-responsabilidade-em-jogos-de-rpg-XL7s5ktY.js",
      "assets/o-uso-de-ferramentas-digitais-em-mesas-de-rpg-LW85rdOS.js",
      "assets/criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos-GjM4-bPr.js",
      "assets/a-influencia-das-artes-marciais-em-personagens-de-rpg-nrvKFWL3.js",
      "assets/a-diversidade-de-estilos-de-narrativa-em-rpg-SCDu7fYM.js",
      "assets/o-uso-terapeutico-dos-jogos-de-rpg-phTPt_gn.js",
      "assets/diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos-vGXgWdH_.js",
      "assets/evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps-tLOEOt9I.js",
      "assets/influencia_da_mitologia_em_jogos_de_rpg-q-Saw7d7.js",
      "assets/rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois-KlgvrG1D.js",
      "assets/impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada-_2FULGxr.js",
      "assets/mundo_das_miniaturas_e_cenarios_personalizados-KcbT6Toc.js",
      "assets/evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis-XCXtPgZa.js",
      "assets/historia_e_a_evolucao_dos_larp_live_action_role_playing-b82XeH2L.js",
      "assets/jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg-PtoYkxHG.js",
      "assets/uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg-HAYwWKvK.js",
      "assets/mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas-sDM7coym.js",
      "assets/psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes-TpPVfeBx.js",
      "assets/papel_das_ferramentas_de_software_em_jogos_de_rpg-sa8Remm0.js",
      "assets/historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos-BwHlFGrS.js",
      "assets/explorando_a_cultura_do_cosplay_em_rpg-k3M8-582.js",
      "assets/rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico-fIhAIOuo.js",
      "assets/uso_de_simbologia_e_mitologia_em_rpgs-0yKjvCAe.js",
      "assets/economia_nos_mundos_de_rpg_moedas_e_comercio-Lgd_C57I.js",
      "assets/importancia_da_diversidade_e_representacao_nos_jogos-AZVnVmQi.js",
      "assets/futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas-fgE31Cp3.js",
      "assets/NotFoundView-suoWeQrJ.js",
      "assets/NotFoundView-imReMPlA.css",
      "assets/quill-OFcVbw76.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}

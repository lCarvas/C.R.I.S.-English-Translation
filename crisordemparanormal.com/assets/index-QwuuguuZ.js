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
function Qu(t, e) {
  const n = Object.create(null),
    r = t.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const Le = {},
  di = [],
  rn = () => {},
  Qw = () => !1,
  Yw = /^on[^a-z]/,
  Ya = (t) => Yw.test(t),
  Yu = (t) => t.startsWith("onUpdate:"),
  Ke = Object.assign,
  Xu = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Xw = Object.prototype.hasOwnProperty,
  _e = (t, e) => Xw.call(t, e),
  Z = Array.isArray,
  hi = (t) => Zs(t) === "[object Map]",
  Jm = (t) => Zs(t) === "[object Set]",
  Jw = (t) => Zs(t) === "[object RegExp]",
  le = (t) => typeof t == "function",
  Fe = (t) => typeof t == "string",
  Xa = (t) => typeof t == "symbol",
  $e = (t) => t !== null && typeof t == "object",
  Zm = (t) => ($e(t) || le(t)) && le(t.then) && le(t.catch),
  eg = Object.prototype.toString,
  Zs = (t) => eg.call(t),
  Zw = (t) => Zs(t).slice(8, -1),
  tg = (t) => Zs(t) === "[object Object]",
  Ju = (t) =>
    Fe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Zo = Qu(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ja = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  eb = /-(\w)/g,
  an = Ja((t) => t.replace(eb, (e, n) => (n ? n.toUpperCase() : ""))),
  tb = /\B([A-Z])/g,
  Qr = Ja((t) => t.replace(tb, "-$1").toLowerCase()),
  Za = Ja((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  ea = Ja((t) => (t ? `on${Za(t)}` : "")),
  Ur = (t, e) => !Object.is(t, e),
  fi = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  pa = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  zc = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  nb = (t) => {
    const e = Fe(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let Uh;
const Wc = () =>
  Uh ||
  (Uh =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function tr(t) {
  if (Z(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = Fe(r) ? ob(r) : tr(r);
      if (i) for (const s in i) e[s] = i[s];
    }
    return e;
  } else if (Fe(t) || $e(t)) return t;
}
const rb = /;(?![^(]*\))/g,
  ib = /:([^]+)/,
  sb = /\/\*[^]*?\*\//g;
function ob(t) {
  const e = {};
  return (
    t
      .replace(sb, "")
      .split(rb)
      .forEach((n) => {
        if (n) {
          const r = n.split(ib);
          r.length > 1 && (e[r[0].trim()] = r[1].trim());
        }
      }),
    e
  );
}
function Oe(t) {
  let e = "";
  if (Fe(t)) e = t;
  else if (Z(t))
    for (let n = 0; n < t.length; n++) {
      const r = Oe(t[n]);
      r && (e += r + " ");
    }
  else if ($e(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
function ab(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !Fe(e) && (t.class = Oe(e)), n && (t.style = tr(n)), t;
}
const lb =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  cb = Qu(lb);
function ng(t) {
  return !!t || t === "";
}
const ub = (t) =>
    Fe(t)
      ? t
      : t == null
      ? ""
      : Z(t) || ($e(t) && (t.toString === eg || !le(t.toString)))
      ? JSON.stringify(t, rg, 2)
      : String(t),
  rg = (t, e) =>
    e && e.__v_isRef
      ? rg(t, e.value)
      : hi(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [r, i]) => ((n[`${r} =>`] = i), n),
            {}
          ),
        }
      : Jm(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : $e(e) && !Z(e) && !tg(e)
      ? String(e)
      : e;
let Nt;
class db {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Nt),
      !e && Nt && (this.index = (Nt.scopes || (Nt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = Nt;
      try {
        return (Nt = this), e();
      } finally {
        Nt = n;
      }
    }
  }
  on() {
    Nt = this;
  }
  off() {
    Nt = this.parent;
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
function hb(t, e = Nt) {
  e && e.active && e.effects.push(t);
}
function ig() {
  return Nt;
}
function fb(t) {
  Nt && Nt.cleanups.push(t);
}
const Zu = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  sg = (t) => (t.w & ar) > 0,
  og = (t) => (t.n & ar) > 0,
  pb = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= ar;
  },
  mb = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        sg(i) && !og(i) ? i.delete(t) : (e[n++] = i),
          (i.w &= ~ar),
          (i.n &= ~ar);
      }
      e.length = n;
    }
  },
  ma = new WeakMap();
let ss = 0,
  ar = 1;
const Kc = 30;
let Gt;
const Dr = Symbol(""),
  Gc = Symbol("");
class ed {
  constructor(e, n = null, r) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      hb(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Gt,
      n = nr;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Gt),
        (Gt = this),
        (nr = !0),
        (ar = 1 << ++ss),
        ss <= Kc ? pb(this) : Bh(this),
        this.fn()
      );
    } finally {
      ss <= Kc && mb(this),
        (ar = 1 << --ss),
        (Gt = this.parent),
        (nr = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Gt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Bh(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Bh(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let nr = !0;
const ag = [];
function Bi() {
  ag.push(nr), (nr = !1);
}
function ji() {
  const t = ag.pop();
  nr = t === void 0 ? !0 : t;
}
function Pt(t, e, n) {
  if (nr && Gt) {
    let r = ma.get(t);
    r || ma.set(t, (r = new Map()));
    let i = r.get(n);
    i || r.set(n, (i = Zu())), lg(i);
  }
}
function lg(t, e) {
  let n = !1;
  ss <= Kc ? og(t) || ((t.n |= ar), (n = !sg(t))) : (n = !t.has(Gt)),
    n && (t.add(Gt), Gt.deps.push(t));
}
function yn(t, e, n, r, i, s) {
  const o = ma.get(t);
  if (!o) return;
  let a = [];
  if (e === "clear") a = [...o.values()];
  else if (n === "length" && Z(t)) {
    const l = Number(r);
    o.forEach((c, u) => {
      (u === "length" || (!Xa(u) && u >= l)) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(o.get(n)), e)) {
      case "add":
        Z(t)
          ? Ju(n) && a.push(o.get("length"))
          : (a.push(o.get(Dr)), hi(t) && a.push(o.get(Gc)));
        break;
      case "delete":
        Z(t) || (a.push(o.get(Dr)), hi(t) && a.push(o.get(Gc)));
        break;
      case "set":
        hi(t) && a.push(o.get(Dr));
        break;
    }
  if (a.length === 1) a[0] && Qc(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    Qc(Zu(l));
  }
}
function Qc(t, e) {
  const n = Z(t) ? t : [...t];
  for (const r of n) r.computed && jh(r);
  for (const r of n) r.computed || jh(r);
}
function jh(t, e) {
  (t !== Gt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function gb(t, e) {
  var n;
  return (n = ma.get(t)) == null ? void 0 : n.get(e);
}
const vb = Qu("__proto__,__v_isRef,__isVue"),
  cg = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(Xa)
  ),
  Hh = yb();
function yb() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const r = we(this);
        for (let s = 0, o = this.length; s < o; s++) Pt(r, "get", s + "");
        const i = r[e](...n);
        return i === -1 || i === !1 ? r[e](...n.map(we)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        Bi();
        const r = we(this)[e].apply(this, n);
        return ji(), r;
      };
    }),
    t
  );
}
function _b(t) {
  const e = we(this);
  return Pt(e, "has", t), e.hasOwnProperty(t);
}
class ug {
  constructor(e = !1, n = !1) {
    (this._isReadonly = e), (this._shallow = n);
  }
  get(e, n, r) {
    const i = this._isReadonly,
      s = this._shallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw" && r === (i ? (s ? Pb : pg) : s ? fg : hg).get(e))
      return e;
    const o = Z(e);
    if (!i) {
      if (o && _e(Hh, n)) return Reflect.get(Hh, n, r);
      if (n === "hasOwnProperty") return _b;
    }
    const a = Reflect.get(e, n, r);
    return (Xa(n) ? cg.has(n) : vb(n)) || (i || Pt(e, "get", n), s)
      ? a
      : it(a)
      ? o && Ju(n)
        ? a
        : a.value
      : $e(a)
      ? i
        ? mg(a)
        : Pn(a)
      : a;
  }
}
class dg extends ug {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (Ti(s) && it(s) && !it(r)) return !1;
    if (
      !this._shallow &&
      (!ga(r) && !Ti(r) && ((s = we(s)), (r = we(r))), !Z(e) && it(s) && !it(r))
    )
      return (s.value = r), !0;
    const o = Z(e) && Ju(n) ? Number(n) < e.length : _e(e, n),
      a = Reflect.set(e, n, r, i);
    return (
      e === we(i) && (o ? Ur(r, s) && yn(e, "set", n, r) : yn(e, "add", n, r)),
      a
    );
  }
  deleteProperty(e, n) {
    const r = _e(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && r && yn(e, "delete", n, void 0), i;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Xa(n) || !cg.has(n)) && Pt(e, "has", n), r;
  }
  ownKeys(e) {
    return Pt(e, "iterate", Z(e) ? "length" : Dr), Reflect.ownKeys(e);
  }
}
class wb extends ug {
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
const bb = new dg(),
  Eb = new wb(),
  Tb = new dg(!0),
  td = (t) => t,
  el = (t) => Reflect.getPrototypeOf(t);
function Oo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = we(t),
    s = we(e);
  n || (Ur(e, s) && Pt(i, "get", e), Pt(i, "get", s));
  const { has: o } = el(i),
    a = r ? td : n ? id : qs;
  if (o.call(i, e)) return a(t.get(e));
  if (o.call(i, s)) return a(t.get(s));
  t !== i && t.get(e);
}
function Do(t, e = !1) {
  const n = this.__v_raw,
    r = we(n),
    i = we(t);
  return (
    e || (Ur(t, i) && Pt(r, "has", t), Pt(r, "has", i)),
    t === i ? n.has(t) : n.has(t) || n.has(i)
  );
}
function No(t, e = !1) {
  return (
    (t = t.__v_raw), !e && Pt(we(t), "iterate", Dr), Reflect.get(t, "size", t)
  );
}
function zh(t) {
  t = we(t);
  const e = we(this);
  return el(e).has.call(e, t) || (e.add(t), yn(e, "add", t, t)), this;
}
function Wh(t, e) {
  e = we(e);
  const n = we(this),
    { has: r, get: i } = el(n);
  let s = r.call(n, t);
  s || ((t = we(t)), (s = r.call(n, t)));
  const o = i.call(n, t);
  return (
    n.set(t, e), s ? Ur(e, o) && yn(n, "set", t, e) : yn(n, "add", t, e), this
  );
}
function Kh(t) {
  const e = we(this),
    { has: n, get: r } = el(e);
  let i = n.call(e, t);
  i || ((t = we(t)), (i = n.call(e, t))), r && r.call(e, t);
  const s = e.delete(t);
  return i && yn(e, "delete", t, void 0), s;
}
function Gh() {
  const t = we(this),
    e = t.size !== 0,
    n = t.clear();
  return e && yn(t, "clear", void 0, void 0), n;
}
function Lo(t, e) {
  return function (r, i) {
    const s = this,
      o = s.__v_raw,
      a = we(o),
      l = e ? td : t ? id : qs;
    return (
      !t && Pt(a, "iterate", Dr), o.forEach((c, u) => r.call(i, l(c), l(u), s))
    );
  };
}
function Mo(t, e, n) {
  return function (...r) {
    const i = this.__v_raw,
      s = we(i),
      o = hi(s),
      a = t === "entries" || (t === Symbol.iterator && o),
      l = t === "keys" && o,
      c = i[t](...r),
      u = n ? td : e ? id : qs;
    return (
      !e && Pt(s, "iterate", l ? Gc : Dr),
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
function Vn(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Ib() {
  const t = {
      get(s) {
        return Oo(this, s);
      },
      get size() {
        return No(this);
      },
      has: Do,
      add: zh,
      set: Wh,
      delete: Kh,
      clear: Gh,
      forEach: Lo(!1, !1),
    },
    e = {
      get(s) {
        return Oo(this, s, !1, !0);
      },
      get size() {
        return No(this);
      },
      has: Do,
      add: zh,
      set: Wh,
      delete: Kh,
      clear: Gh,
      forEach: Lo(!1, !0),
    },
    n = {
      get(s) {
        return Oo(this, s, !0);
      },
      get size() {
        return No(this, !0);
      },
      has(s) {
        return Do.call(this, s, !0);
      },
      add: Vn("add"),
      set: Vn("set"),
      delete: Vn("delete"),
      clear: Vn("clear"),
      forEach: Lo(!0, !1),
    },
    r = {
      get(s) {
        return Oo(this, s, !0, !0);
      },
      get size() {
        return No(this, !0);
      },
      has(s) {
        return Do.call(this, s, !0);
      },
      add: Vn("add"),
      set: Vn("set"),
      delete: Vn("delete"),
      clear: Vn("clear"),
      forEach: Lo(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (t[s] = Mo(s, !1, !1)),
        (n[s] = Mo(s, !0, !1)),
        (e[s] = Mo(s, !1, !0)),
        (r[s] = Mo(s, !0, !0));
    }),
    [t, n, e, r]
  );
}
const [Ab, Sb, kb, Cb] = Ib();
function nd(t, e) {
  const n = e ? (t ? Cb : kb) : t ? Sb : Ab;
  return (r, i, s) =>
    i === "__v_isReactive"
      ? !t
      : i === "__v_isReadonly"
      ? t
      : i === "__v_raw"
      ? r
      : Reflect.get(_e(n, i) && i in r ? n : r, i, s);
}
const qb = { get: nd(!1, !1) },
  xb = { get: nd(!1, !0) },
  Rb = { get: nd(!0, !1) },
  hg = new WeakMap(),
  fg = new WeakMap(),
  pg = new WeakMap(),
  Pb = new WeakMap();
function Ob(t) {
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
function Db(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ob(Zw(t));
}
function Pn(t) {
  return Ti(t) ? t : rd(t, !1, bb, qb, hg);
}
function Yc(t) {
  return rd(t, !1, Tb, xb, fg);
}
function mg(t) {
  return rd(t, !0, Eb, Rb, pg);
}
function rd(t, e, n, r, i) {
  if (!$e(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const s = i.get(t);
  if (s) return s;
  const o = Db(t);
  if (o === 0) return t;
  const a = new Proxy(t, o === 2 ? r : n);
  return i.set(t, a), a;
}
function pi(t) {
  return Ti(t) ? pi(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ti(t) {
  return !!(t && t.__v_isReadonly);
}
function ga(t) {
  return !!(t && t.__v_isShallow);
}
function gg(t) {
  return pi(t) || Ti(t);
}
function we(t) {
  const e = t && t.__v_raw;
  return e ? we(e) : t;
}
function vg(t) {
  return pa(t, "__v_skip", !0), t;
}
const qs = (t) => ($e(t) ? Pn(t) : t),
  id = (t) => ($e(t) ? mg(t) : t);
function yg(t) {
  nr && Gt && ((t = we(t)), lg(t.dep || (t.dep = Zu())));
}
function _g(t, e) {
  t = we(t);
  const n = t.dep;
  n && Qc(n);
}
function it(t) {
  return !!(t && t.__v_isRef === !0);
}
function ue(t) {
  return wg(t, !1);
}
function Nb(t) {
  return wg(t, !0);
}
function wg(t, e) {
  return it(t) ? t : new Lb(t, e);
}
class Lb {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : we(e)),
      (this._value = n ? e : qs(e));
  }
  get value() {
    return yg(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || ga(e) || Ti(e);
    (e = n ? e : we(e)),
      Ur(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : qs(e)), _g(this));
  }
}
function Rt(t) {
  return it(t) ? t.value : t;
}
const Mb = {
  get: (t, e, n) => Rt(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return it(i) && !it(n) ? ((i.value = n), !0) : Reflect.set(t, e, n, r);
  },
};
function bg(t) {
  return pi(t) ? t : new Proxy(t, Mb);
}
function $b(t) {
  const e = Z(t) ? new Array(t.length) : {};
  for (const n in t) e[n] = Fb(t, n);
  return e;
}
class Vb {
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
    return gb(we(this._object), this._key);
  }
}
function Fb(t, e, n) {
  const r = t[e];
  return it(r) ? r : new Vb(t, e, n);
}
class Ub {
  constructor(e, n, r, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new ed(e, () => {
        this._dirty || ((this._dirty = !0), _g(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = r);
  }
  get value() {
    const e = we(this);
    return (
      yg(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function Bb(t, e, n = !1) {
  let r, i;
  const s = le(t);
  return (
    s ? ((r = t), (i = rn)) : ((r = t.get), (i = t.set)),
    new Ub(r, i, s || !i, n)
  );
}
function rr(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    tl(s, e, n);
  }
  return i;
}
function Bt(t, e, n, r) {
  if (le(t)) {
    const s = rr(t, e, n, r);
    return (
      s &&
        Zm(s) &&
        s.catch((o) => {
          tl(o, e, n);
        }),
      s
    );
  }
  const i = [];
  for (let s = 0; s < t.length; s++) i.push(Bt(t[s], e, n, r));
  return i;
}
function tl(t, e, n, r = !0) {
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
      rr(l, null, 10, [t, o, a]);
      return;
    }
  }
  jb(t, n, i, r);
}
function jb(t, e, n, r = !0) {
  console.error(t);
}
let xs = !1,
  Xc = !1;
const dt = [];
let en = 0;
const mi = [];
let fn = null,
  kr = 0;
const Eg = Promise.resolve();
let sd = null;
function Zn(t) {
  const e = sd || Eg;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Hb(t) {
  let e = en + 1,
    n = dt.length;
  for (; e < n; ) {
    const r = (e + n) >>> 1,
      i = dt[r],
      s = Rs(i);
    s < t || (s === t && i.pre) ? (e = r + 1) : (n = r);
  }
  return e;
}
function od(t) {
  (!dt.length || !dt.includes(t, xs && t.allowRecurse ? en + 1 : en)) &&
    (t.id == null ? dt.push(t) : dt.splice(Hb(t.id), 0, t), Tg());
}
function Tg() {
  !xs && !Xc && ((Xc = !0), (sd = Eg.then(Ag)));
}
function zb(t) {
  const e = dt.indexOf(t);
  e > en && dt.splice(e, 1);
}
function Wb(t) {
  Z(t)
    ? mi.push(...t)
    : (!fn || !fn.includes(t, t.allowRecurse ? kr + 1 : kr)) && mi.push(t),
    Tg();
}
function Qh(t, e = xs ? en + 1 : 0) {
  for (; e < dt.length; e++) {
    const n = dt[e];
    n && n.pre && (dt.splice(e, 1), e--, n());
  }
}
function Ig(t) {
  if (mi.length) {
    const e = [...new Set(mi)];
    if (((mi.length = 0), fn)) {
      fn.push(...e);
      return;
    }
    for (fn = e, fn.sort((n, r) => Rs(n) - Rs(r)), kr = 0; kr < fn.length; kr++)
      fn[kr]();
    (fn = null), (kr = 0);
  }
}
const Rs = (t) => (t.id == null ? 1 / 0 : t.id),
  Kb = (t, e) => {
    const n = Rs(t) - Rs(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Ag(t) {
  (Xc = !1), (xs = !0), dt.sort(Kb);
  try {
    for (en = 0; en < dt.length; en++) {
      const e = dt[en];
      e && e.active !== !1 && rr(e, null, 14);
    }
  } finally {
    (en = 0),
      (dt.length = 0),
      Ig(),
      (xs = !1),
      (sd = null),
      (dt.length || mi.length) && Ag();
  }
}
function Gb(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Le;
  let i = n;
  const s = e.startsWith("update:"),
    o = s && e.slice(7);
  if (o && o in r) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: d, trim: h } = r[u] || Le;
    h && (i = n.map((f) => (Fe(f) ? f.trim() : f))), d && (i = n.map(zc));
  }
  let a,
    l = r[(a = ea(e))] || r[(a = ea(an(e)))];
  !l && s && (l = r[(a = ea(Qr(e)))]), l && Bt(l, t, 6, i);
  const c = r[a + "Once"];
  if (c) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    (t.emitted[a] = !0), Bt(c, t, 6, i);
  }
}
function Sg(t, e, n = !1) {
  const r = e.emitsCache,
    i = r.get(t);
  if (i !== void 0) return i;
  const s = t.emits;
  let o = {},
    a = !1;
  if (!le(t)) {
    const l = (c) => {
      const u = Sg(c, e, !0);
      u && ((a = !0), Ke(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l);
  }
  return !s && !a
    ? ($e(t) && r.set(t, null), null)
    : (Z(s) ? s.forEach((l) => (o[l] = null)) : Ke(o, s),
      $e(t) && r.set(t, o),
      o);
}
function nl(t, e) {
  return !t || !Ya(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      _e(t, e[0].toLowerCase() + e.slice(1)) || _e(t, Qr(e)) || _e(t, e));
}
let st = null,
  rl = null;
function va(t) {
  const e = st;
  return (st = t), (rl = (t && t.type.__scopeId) || null), e;
}
function Hi(t) {
  rl = t;
}
function zi() {
  rl = null;
}
const kg = (t) => Xe;
function Xe(t, e = st, n) {
  if (!e || t._n) return t;
  const r = (...i) => {
    r._d && df(-1);
    const s = va(e);
    let o;
    try {
      o = t(...i);
    } finally {
      va(s), r._d && df(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function cc(t) {
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
  let _, w;
  const v = va(t);
  try {
    if (n.shapeFlag & 4) {
      const E = i || r,
        H = E;
      (_ = Zt(u.call(H, E, d, s, f, h, g))), (w = l);
    } else {
      const E = e;
      (_ = Zt(
        E.length > 1 ? E(s, { attrs: l, slots: a, emit: c }) : E(s, null)
      )),
        (w = e.props ? l : Qb(l));
    }
  } catch (E) {
    (ms.length = 0), tl(E, t, 1), (_ = qe(jt));
  }
  let k = _;
  if (w && y !== !1) {
    const E = Object.keys(w),
      { shapeFlag: H } = k;
    E.length && H & 7 && (o && E.some(Yu) && (w = Yb(w, o)), (k = Tn(k, w)));
  }
  return (
    n.dirs && ((k = Tn(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (k.transition = n.transition),
    (_ = k),
    va(v),
    _
  );
}
const Qb = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || Ya(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  Yb = (t, e) => {
    const n = {};
    for (const r in t) (!Yu(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
function Xb(t, e, n) {
  const { props: r, children: i, component: s } = t,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Yh(r, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (o[h] !== r[h] && !nl(c, h)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? Yh(r, o, c)
        : !0
      : !!o;
  return !1;
}
function Yh(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !nl(n, s)) return !0;
  }
  return !1;
}
function Jb({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const ad = "components",
  Zb = "directives";
function En(t, e) {
  return ld(ad, t, !0, e) || t;
}
const Cg = Symbol.for("v-ndc");
function Xh(t) {
  return Fe(t) ? ld(ad, t, !1) || t : t || Cg;
}
function FO(t) {
  return ld(Zb, t);
}
function ld(t, e, n = !0, r = !1) {
  const i = st || Ye;
  if (i) {
    const s = i.type;
    if (t === ad) {
      const a = su(s, !1);
      if (a && (a === e || a === an(e) || a === Za(an(e)))) return s;
    }
    const o = Jh(i[t] || s[t], e) || Jh(i.appContext[t], e);
    return !o && r ? s : o;
  }
}
function Jh(t, e) {
  return t && (t[e] || t[an(e)] || t[Za(an(e))]);
}
const qg = (t) => t.__isSuspense;
function e0(t, e) {
  e && e.pendingBranch
    ? Z(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Wb(t);
}
function t0(t, e) {
  return cd(t, null, { flush: "post" });
}
const $o = {};
function ut(t, e, n) {
  return cd(t, e, n);
}
function cd(
  t,
  e,
  { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: o } = Le
) {
  var a;
  const l = ig() === ((a = Ye) == null ? void 0 : a.scope) ? Ye : null;
  let c,
    u = !1,
    d = !1;
  if (
    (it(t)
      ? ((c = () => t.value), (u = ga(t)))
      : pi(t)
      ? ((c = () => t), (r = !0))
      : Z(t)
      ? ((d = !0),
        (u = t.some((E) => pi(E) || ga(E))),
        (c = () =>
          t.map((E) => {
            if (it(E)) return E.value;
            if (pi(E)) return qr(E);
            if (le(E)) return rr(E, l, 2);
          })))
      : le(t)
      ? e
        ? (c = () => rr(t, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return h && h(), Bt(t, l, 3, [f]);
          })
      : (c = rn),
    e && r)
  ) {
    const E = c;
    c = () => qr(E());
  }
  let h,
    f = (E) => {
      h = v.onStop = () => {
        rr(E, l, 4), (h = v.onStop = void 0);
      };
    },
    g;
  if (Ds)
    if (
      ((f = rn),
      e ? n && Bt(e, l, 3, [c(), d ? [] : void 0, f]) : c(),
      i === "sync")
    ) {
      const E = W0();
      g = E.__watcherHandles || (E.__watcherHandles = []);
    } else return rn;
  let y = d ? new Array(t.length).fill($o) : $o;
  const _ = () => {
    if (v.active)
      if (e) {
        const E = v.run();
        (r || u || (d ? E.some((H, z) => Ur(H, y[z])) : Ur(E, y))) &&
          (h && h(),
          Bt(e, l, 3, [E, y === $o ? void 0 : d && y[0] === $o ? [] : y, f]),
          (y = E));
      } else v.run();
  };
  _.allowRecurse = !!e;
  let w;
  i === "sync"
    ? (w = _)
    : i === "post"
    ? (w = () => et(_, l && l.suspense))
    : ((_.pre = !0), l && (_.id = l.uid), (w = () => od(_)));
  const v = new ed(c, w);
  e
    ? n
      ? _()
      : (y = v.run())
    : i === "post"
    ? et(v.run.bind(v), l && l.suspense)
    : v.run();
  const k = () => {
    v.stop(), l && l.scope && Xu(l.scope.effects, v);
  };
  return g && g.push(k), k;
}
function n0(t, e, n) {
  const r = this.proxy,
    i = Fe(t) ? (t.includes(".") ? xg(r, t) : () => r[t]) : t.bind(r, r);
  let s;
  le(e) ? (s = e) : ((s = e.handler), (n = e));
  const o = Ye;
  Si(this);
  const a = cd(i, s.bind(r), n);
  return o ? Si(o) : Nr(), a;
}
function xg(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
function qr(t, e) {
  if (!$e(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), it(t))) qr(t.value, e);
  else if (Z(t)) for (let n = 0; n < t.length; n++) qr(t[n], e);
  else if (Jm(t) || hi(t))
    t.forEach((n) => {
      qr(n, e);
    });
  else if (tg(t)) for (const n in t) qr(t[n], e);
  return t;
}
function Zh(t, e) {
  const n = st;
  if (n === null) return t;
  const r = ul(n) || n.proxy,
    i = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [o, a, l, c = Le] = e[s];
    o &&
      (le(o) && (o = { mounted: o, updated: o }),
      o.deep && qr(a),
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
function wr(t, e, n, r) {
  const i = t.dirs,
    s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[r];
    l && (Bi(), Bt(l, n, 8, [t.el, a, t, e]), ji());
  }
}
const Wn = Symbol("_leaveCb"),
  Vo = Symbol("_enterCb");
function r0() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    un(() => {
      t.isMounted = !0;
    }),
    ol(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const Ft = [Function, Array],
  Rg = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ft,
    onEnter: Ft,
    onAfterEnter: Ft,
    onEnterCancelled: Ft,
    onBeforeLeave: Ft,
    onLeave: Ft,
    onAfterLeave: Ft,
    onLeaveCancelled: Ft,
    onBeforeAppear: Ft,
    onAppear: Ft,
    onAfterAppear: Ft,
    onAppearCancelled: Ft,
  },
  i0 = {
    name: "BaseTransition",
    props: Rg,
    setup(t, { slots: e }) {
      const n = cl(),
        r = r0();
      let i;
      return () => {
        const s = e.default && Og(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const y of s)
            if (y.type !== jt) {
              o = y;
              break;
            }
        }
        const a = we(t),
          { mode: l } = a;
        if (r.isLeaving) return uc(o);
        const c = ef(o);
        if (!c) return uc(o);
        const u = Jc(c, a, r, n);
        ya(c, u);
        const d = n.subTree,
          h = d && ef(d);
        let f = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const y = g();
          i === void 0 ? (i = y) : y !== i && ((i = y), (f = !0));
        }
        if (h && h.type !== jt && (!Qn(c, h) || f)) {
          const y = Jc(h, a, r, n);
          if ((ya(h, y), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (y.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              uc(o)
            );
          l === "in-out" &&
            c.type !== jt &&
            (y.delayLeave = (_, w, v) => {
              const k = Pg(r, h);
              (k[String(h.key)] = h),
                (_[Wn] = () => {
                  w(), (_[Wn] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = v);
            });
        }
        return o;
      };
    },
  },
  s0 = i0;
function Pg(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || ((r = Object.create(null)), n.set(e.type, r)), r;
}
function Jc(t, e, n, r) {
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
      onAfterAppear: w,
      onAppearCancelled: v,
    } = e,
    k = String(t.key),
    E = Pg(n, t),
    H = (U, ne) => {
      U && Bt(U, r, 9, ne);
    },
    z = (U, ne) => {
      const ee = ne[1];
      H(U, ne),
        Z(U) ? U.every((Ie) => Ie.length <= 1) && ee() : U.length <= 1 && ee();
    },
    ae = {
      mode: s,
      persisted: o,
      beforeEnter(U) {
        let ne = a;
        if (!n.isMounted)
          if (i) ne = y || a;
          else return;
        U[Wn] && U[Wn](!0);
        const ee = E[k];
        ee && Qn(t, ee) && ee.el[Wn] && ee.el[Wn](), H(ne, [U]);
      },
      enter(U) {
        let ne = l,
          ee = c,
          Ie = u;
        if (!n.isMounted)
          if (i) (ne = _ || l), (ee = w || c), (Ie = v || u);
          else return;
        let V = !1;
        const pe = (U[Vo] = (be) => {
          V ||
            ((V = !0),
            be ? H(Ie, [U]) : H(ee, [U]),
            ae.delayedLeave && ae.delayedLeave(),
            (U[Vo] = void 0));
        });
        ne ? z(ne, [U, pe]) : pe();
      },
      leave(U, ne) {
        const ee = String(t.key);
        if ((U[Vo] && U[Vo](!0), n.isUnmounting)) return ne();
        H(d, [U]);
        let Ie = !1;
        const V = (U[Wn] = (pe) => {
          Ie ||
            ((Ie = !0),
            ne(),
            pe ? H(g, [U]) : H(f, [U]),
            (U[Wn] = void 0),
            E[ee] === t && delete E[ee]);
        });
        (E[ee] = t), h ? z(h, [U, V]) : V();
      },
      clone(U) {
        return Jc(U, e, n, r);
      },
    };
  return ae;
}
function uc(t) {
  if (il(t)) return (t = Tn(t)), (t.children = null), t;
}
function ef(t) {
  return il(t) ? (t.children ? t.children[0] : void 0) : t;
}
function ya(t, e) {
  t.shapeFlag & 6 && t.component
    ? ya(t.component.subTree, e)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function Og(t, e = !1, n) {
  let r = [],
    i = 0;
  for (let s = 0; s < t.length; s++) {
    let o = t[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === nt
      ? (o.patchFlag & 128 && i++, (r = r.concat(Og(o.children, e, a))))
      : (e || o.type !== jt) && r.push(a != null ? Tn(o, { key: a }) : o);
  }
  if (i > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Ze(t, e) {
  return le(t) ? Ke({ name: t.name }, e, { setup: t }) : t;
}
const gi = (t) => !!t.type.__asyncLoader,
  il = (t) => t.type.__isKeepAlive,
  o0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(t, { slots: e }) {
      const n = cl(),
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
      (r.activate = (v, k, E, H, z) => {
        const ae = v.component;
        c(v, k, E, 0, a),
          l(ae.vnode, v, k, E, ae, a, H, v.slotScopeIds, z),
          et(() => {
            (ae.isDeactivated = !1), ae.a && fi(ae.a);
            const U = v.props && v.props.onVnodeMounted;
            U && Ut(U, ae.parent, v);
          }, a);
      }),
        (r.deactivate = (v) => {
          const k = v.component;
          c(v, h, null, 1, a),
            et(() => {
              k.da && fi(k.da);
              const E = v.props && v.props.onVnodeUnmounted;
              E && Ut(E, k.parent, v), (k.isDeactivated = !0);
            }, a);
        });
      function f(v) {
        dc(v), u(v, n, a, !0);
      }
      function g(v) {
        i.forEach((k, E) => {
          const H = su(k.type);
          H && (!v || !v(H)) && y(E);
        });
      }
      function y(v) {
        const k = i.get(v);
        !o || !Qn(k, o) ? f(k) : o && dc(o), i.delete(v), s.delete(v);
      }
      ut(
        () => [t.include, t.exclude],
        ([v, k]) => {
          v && g((E) => os(v, E)), k && g((E) => !os(k, E));
        },
        { flush: "post", deep: !0 }
      );
      let _ = null;
      const w = () => {
        _ != null && i.set(_, hc(n.subTree));
      };
      return (
        un(w),
        Ng(w),
        ol(() => {
          i.forEach((v) => {
            const { subTree: k, suspense: E } = n,
              H = hc(k);
            if (v.type === H.type && v.key === H.key) {
              dc(H);
              const z = H.component.da;
              z && et(z, E);
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
          if (!Os(k) || (!(k.shapeFlag & 4) && !(k.shapeFlag & 128)))
            return (o = null), k;
          let E = hc(k);
          const H = E.type,
            z = su(gi(E) ? E.type.__asyncResolved || {} : H),
            { include: ae, exclude: U, max: ne } = t;
          if ((ae && (!z || !os(ae, z))) || (U && z && os(U, z)))
            return (o = E), k;
          const ee = E.key == null ? H : E.key,
            Ie = i.get(ee);
          return (
            E.el && ((E = Tn(E)), k.shapeFlag & 128 && (k.ssContent = E)),
            (_ = ee),
            Ie
              ? ((E.el = Ie.el),
                (E.component = Ie.component),
                E.transition && ya(E, E.transition),
                (E.shapeFlag |= 512),
                s.delete(ee),
                s.add(ee))
              : (s.add(ee),
                ne && s.size > parseInt(ne, 10) && y(s.values().next().value)),
            (E.shapeFlag |= 256),
            (o = E),
            qg(k.type) ? k : E
          );
        }
      );
    },
  },
  UO = o0;
function os(t, e) {
  return Z(t)
    ? t.some((n) => os(n, e))
    : Fe(t)
    ? t.split(",").includes(e)
    : Jw(t)
    ? t.test(e)
    : !1;
}
function a0(t, e) {
  Dg(t, "a", e);
}
function l0(t, e) {
  Dg(t, "da", e);
}
function Dg(t, e, n = Ye) {
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
  if ((sl(e, r, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      il(i.parent.vnode) && c0(r, e, n, i), (i = i.parent);
  }
}
function c0(t, e, n, r) {
  const i = sl(e, t, r, !0);
  eo(() => {
    Xu(r[e], i);
  }, n);
}
function dc(t) {
  (t.shapeFlag &= -257), (t.shapeFlag &= -513);
}
function hc(t) {
  return t.shapeFlag & 128 ? t.ssContent : t;
}
function sl(t, e, n = Ye, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          if (n.isUnmounted) return;
          Bi(), Si(n);
          const a = Bt(e, n, t, o);
          return Nr(), ji(), a;
        });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const On =
    (t) =>
    (e, n = Ye) =>
      (!Ds || t === "sp") && sl(t, (...r) => e(...r), n),
  u0 = On("bm"),
  un = On("m"),
  d0 = On("bu"),
  Ng = On("u"),
  ol = On("bum"),
  eo = On("um"),
  h0 = On("sp"),
  f0 = On("rtg"),
  p0 = On("rtc");
function m0(t, e = Ye) {
  sl("ec", t, e);
}
function Zc(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (Z(t) || Fe(t)) {
    i = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      i[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let o = 0; o < t; o++) i[o] = e(o + 1, o, void 0, s && s[o]);
  } else if ($e(t))
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
function g0(t, e) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Z(r)) for (let i = 0; i < r.length; i++) t[r[i].name] = r[i].fn;
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
function Ii(t, e, n = {}, r, i) {
  if (st.isCE || (st.parent && gi(st.parent) && st.parent.isCE))
    return e !== "default" && (n.name = e), qe("slot", n, r && r());
  let s = t[e];
  s && s._c && (s._d = !1), F();
  const o = s && Lg(s(n)),
    a = De(
      nt,
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
function Lg(t) {
  return t.some((e) =>
    Os(e) ? !(e.type === jt || (e.type === nt && !Lg(e.children))) : !0
  )
    ? t
    : null;
}
function tf(t, e) {
  const n = {};
  for (const r in t) n[e && /[A-Z]/.test(r) ? `on:${r}` : ea(r)] = t[r];
  return n;
}
const eu = (t) => (t ? (Gg(t) ? ul(t) || t.proxy : eu(t.parent)) : null),
  fs = Ke(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => eu(t.parent),
    $root: (t) => eu(t.root),
    $emit: (t) => t.emit,
    $options: (t) => ud(t),
    $forceUpdate: (t) => t.f || (t.f = () => od(t.update)),
    $nextTick: (t) => t.n || (t.n = Zn.bind(t.proxy)),
    $watch: (t) => n0.bind(t),
  }),
  fc = (t, e) => t !== Le && !t.__isScriptSetup && _e(t, e),
  v0 = {
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
          if (fc(r, e)) return (o[e] = 1), r[e];
          if (i !== Le && _e(i, e)) return (o[e] = 2), i[e];
          if ((c = t.propsOptions[0]) && _e(c, e)) return (o[e] = 3), s[e];
          if (n !== Le && _e(n, e)) return (o[e] = 4), n[e];
          tu && (o[e] = 0);
        }
      }
      const u = fs[e];
      let d, h;
      if (u) return e === "$attrs" && Pt(t, "get", e), u(t);
      if ((d = a.__cssModules) && (d = d[e])) return d;
      if (n !== Le && _e(n, e)) return (o[e] = 4), n[e];
      if (((h = l.config.globalProperties), _e(h, e))) return h[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: i, ctx: s } = t;
      return fc(i, e)
        ? ((i[e] = n), !0)
        : r !== Le && _e(r, e)
        ? ((r[e] = n), !0)
        : _e(t.props, e) || (e[0] === "$" && e.slice(1) in t)
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
        (t !== Le && _e(t, o)) ||
        fc(e, o) ||
        ((a = s[0]) && _e(a, o)) ||
        _e(r, o) ||
        _e(fs, o) ||
        _e(i.config.globalProperties, o)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : _e(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
function nf(t) {
  return Z(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let tu = !0;
function y0(t) {
  const e = ud(t),
    n = t.proxy,
    r = t.ctx;
  (tu = !1), e.beforeCreate && rf(e.beforeCreate, t, "bc");
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
    beforeDestroy: w,
    beforeUnmount: v,
    destroyed: k,
    unmounted: E,
    render: H,
    renderTracked: z,
    renderTriggered: ae,
    errorCaptured: U,
    serverPrefetch: ne,
    expose: ee,
    inheritAttrs: Ie,
    components: V,
    directives: pe,
    filters: be,
  } = e;
  if ((c && _0(c, r, null), o))
    for (const xe in o) {
      const ge = o[xe];
      le(ge) && (r[xe] = ge.bind(n));
    }
  if (i) {
    const xe = i.call(n, n);
    $e(xe) && (t.data = Pn(xe));
  }
  if (((tu = !0), s))
    for (const xe in s) {
      const ge = s[xe],
        At = le(ge) ? ge.bind(n, n) : le(ge.get) ? ge.get.bind(n, n) : rn,
        Wt = !le(ge) && le(ge.set) ? ge.set.bind(n) : rn,
        Ot = Te({ get: At, set: Wt });
      Object.defineProperty(r, xe, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (He) => (Ot.value = He),
      });
    }
  if (a) for (const xe in a) Mg(a[xe], r, n, xe);
  if (l) {
    const xe = le(l) ? l.call(n) : l;
    Reflect.ownKeys(xe).forEach((ge) => {
      ta(ge, xe[ge]);
    });
  }
  u && rf(u, t, "c");
  function Pe(xe, ge) {
    Z(ge) ? ge.forEach((At) => xe(At.bind(n))) : ge && xe(ge.bind(n));
  }
  if (
    (Pe(u0, d),
    Pe(un, h),
    Pe(d0, f),
    Pe(Ng, g),
    Pe(a0, y),
    Pe(l0, _),
    Pe(m0, U),
    Pe(p0, z),
    Pe(f0, ae),
    Pe(ol, v),
    Pe(eo, E),
    Pe(h0, ne),
    Z(ee))
  )
    if (ee.length) {
      const xe = t.exposed || (t.exposed = {});
      ee.forEach((ge) => {
        Object.defineProperty(xe, ge, {
          get: () => n[ge],
          set: (At) => (n[ge] = At),
        });
      });
    } else t.exposed || (t.exposed = {});
  H && t.render === rn && (t.render = H),
    Ie != null && (t.inheritAttrs = Ie),
    V && (t.components = V),
    pe && (t.directives = pe);
}
function _0(t, e, n = rn) {
  Z(t) && (t = nu(t));
  for (const r in t) {
    const i = t[r];
    let s;
    $e(i)
      ? "default" in i
        ? (s = Xt(i.from || r, i.default, !0))
        : (s = Xt(i.from || r))
      : (s = Xt(i)),
      it(s)
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (o) => (s.value = o),
          })
        : (e[r] = s);
  }
}
function rf(t, e, n) {
  Bt(Z(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Mg(t, e, n, r) {
  const i = r.includes(".") ? xg(n, r) : () => n[r];
  if (Fe(t)) {
    const s = e[t];
    le(s) && ut(i, s);
  } else if (le(t)) ut(i, t.bind(n));
  else if ($e(t))
    if (Z(t)) t.forEach((s) => Mg(s, e, n, r));
    else {
      const s = le(t.handler) ? t.handler.bind(n) : e[t.handler];
      le(s) && ut(i, s, t);
    }
}
function ud(t) {
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
      : ((l = {}), i.length && i.forEach((c) => _a(l, c, o, !0)), _a(l, e, o)),
    $e(e) && s.set(e, l),
    l
  );
}
function _a(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && _a(t, s, n, !0), i && i.forEach((o) => _a(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const a = w0[o] || (n && n[o]);
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const w0 = {
  data: sf,
  props: of,
  emits: of,
  methods: as,
  computed: as,
  beforeCreate: bt,
  created: bt,
  beforeMount: bt,
  mounted: bt,
  beforeUpdate: bt,
  updated: bt,
  beforeDestroy: bt,
  beforeUnmount: bt,
  destroyed: bt,
  unmounted: bt,
  activated: bt,
  deactivated: bt,
  errorCaptured: bt,
  serverPrefetch: bt,
  components: as,
  directives: as,
  watch: E0,
  provide: sf,
  inject: b0,
};
function sf(t, e) {
  return e
    ? t
      ? function () {
          return Ke(
            le(t) ? t.call(this, this) : t,
            le(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function b0(t, e) {
  return as(nu(t), nu(e));
}
function nu(t) {
  if (Z(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function bt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function as(t, e) {
  return t ? Ke(Object.create(null), t, e) : e;
}
function of(t, e) {
  return t
    ? Z(t) && Z(e)
      ? [...new Set([...t, ...e])]
      : Ke(Object.create(null), nf(t), nf(e ?? {}))
    : e;
}
function E0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ke(Object.create(null), t);
  for (const r in e) n[r] = bt(t[r], e[r]);
  return n;
}
function $g() {
  return {
    app: null,
    config: {
      isNativeTag: Qw,
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
let T0 = 0;
function I0(t, e) {
  return function (r, i = null) {
    le(r) || (r = Ke({}, r)), i != null && !$e(i) && (i = null);
    const s = $g(),
      o = new WeakSet();
    let a = !1;
    const l = (s.app = {
      _uid: T0++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: K0,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          o.has(c) ||
            (c && le(c.install)
              ? (o.add(c), c.install(l, ...u))
              : le(c) && (o.add(c), c(l, ...u))),
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
          const h = qe(r, i);
          return (
            (h.appContext = s),
            u && e ? e(h, c) : t(h, c, d),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            ul(h.component) || h.component.proxy
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
        wa = l;
        try {
          return c();
        } finally {
          wa = null;
        }
      },
    });
    return l;
  };
}
let wa = null;
function ta(t, e) {
  if (Ye) {
    let n = Ye.provides;
    const r = Ye.parent && Ye.parent.provides;
    r === n && (n = Ye.provides = Object.create(r)), (n[t] = e);
  }
}
function Xt(t, e, n = !1) {
  const r = Ye || st;
  if (r || wa) {
    const i = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : wa._context.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && le(e) ? e.call(r && r.proxy) : e;
  }
}
function A0(t, e, n, r = !1) {
  const i = {},
    s = {};
  pa(s, ll, 1), (t.propsDefaults = Object.create(null)), Vg(t, e, i, s);
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (t.props = r ? i : Yc(i)) : t.type.props ? (t.props = i) : (t.props = s),
    (t.attrs = s);
}
function S0(t, e, n, r) {
  const {
      props: i,
      attrs: s,
      vnode: { patchFlag: o },
    } = t,
    a = we(i),
    [l] = t.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (nl(t.emitsOptions, h)) continue;
        const f = e[h];
        if (l)
          if (_e(s, h)) f !== s[h] && ((s[h] = f), (c = !0));
          else {
            const g = an(h);
            i[g] = ru(l, a, g, f, t, !1);
          }
        else f !== s[h] && ((s[h] = f), (c = !0));
      }
    }
  } else {
    Vg(t, e, i, s) && (c = !0);
    let u;
    for (const d in a)
      (!e || (!_e(e, d) && ((u = Qr(d)) === d || !_e(e, u)))) &&
        (l
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (i[d] = ru(l, a, d, void 0, t, !0))
          : delete i[d]);
    if (s !== a)
      for (const d in s) (!e || !_e(e, d)) && (delete s[d], (c = !0));
  }
  c && yn(t, "set", "$attrs");
}
function Vg(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (Zo(l)) continue;
      const c = e[l];
      let u;
      i && _e(i, (u = an(l)))
        ? !s || !s.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : nl(t.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
    }
  if (s) {
    const l = we(n),
      c = a || Le;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = ru(i, l, d, c[d], t, !_e(c, d));
    }
  }
  return o;
}
function ru(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const a = _e(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && le(l)) {
        const { propsDefaults: c } = i;
        n in c ? (r = c[n]) : (Si(i), (r = c[n] = l.call(null, e)), Nr());
      } else r = l;
    }
    o[0] &&
      (s && !a ? (r = !1) : o[1] && (r === "" || r === Qr(n)) && (r = !0));
  }
  return r;
}
function Fg(t, e, n = !1) {
  const r = e.propsCache,
    i = r.get(t);
  if (i) return i;
  const s = t.props,
    o = {},
    a = [];
  let l = !1;
  if (!le(t)) {
    const u = (d) => {
      l = !0;
      const [h, f] = Fg(d, e, !0);
      Ke(o, h), f && a.push(...f);
    };
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  if (!s && !l) return $e(t) && r.set(t, di), di;
  if (Z(s))
    for (let u = 0; u < s.length; u++) {
      const d = an(s[u]);
      af(d) && (o[d] = Le);
    }
  else if (s)
    for (const u in s) {
      const d = an(u);
      if (af(d)) {
        const h = s[u],
          f = (o[d] = Z(h) || le(h) ? { type: h } : Ke({}, h));
        if (f) {
          const g = uf(Boolean, f.type),
            y = uf(String, f.type);
          (f[0] = g > -1),
            (f[1] = y < 0 || g < y),
            (g > -1 || _e(f, "default")) && a.push(d);
        }
      }
    }
  const c = [o, a];
  return $e(t) && r.set(t, c), c;
}
function af(t) {
  return t[0] !== "$";
}
function lf(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function cf(t, e) {
  return lf(t) === lf(e);
}
function uf(t, e) {
  return Z(e) ? e.findIndex((n) => cf(n, t)) : le(e) && cf(e, t) ? 0 : -1;
}
const Ug = (t) => t[0] === "_" || t === "$stable",
  dd = (t) => (Z(t) ? t.map(Zt) : [Zt(t)]),
  k0 = (t, e, n) => {
    if (e._n) return e;
    const r = Xe((...i) => dd(e(...i)), n);
    return (r._c = !1), r;
  },
  Bg = (t, e, n) => {
    const r = t._ctx;
    for (const i in t) {
      if (Ug(i)) continue;
      const s = t[i];
      if (le(s)) e[i] = k0(i, s, r);
      else if (s != null) {
        const o = dd(s);
        e[i] = () => o;
      }
    }
  },
  jg = (t, e) => {
    const n = dd(e);
    t.slots.default = () => n;
  },
  C0 = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = we(e)), pa(e, "_", n)) : Bg(e, (t.slots = {}));
    } else (t.slots = {}), e && jg(t, e);
    pa(t.slots, ll, 1);
  },
  q0 = (t, e, n) => {
    const { vnode: r, slots: i } = t;
    let s = !0,
      o = Le;
    if (r.shapeFlag & 32) {
      const a = e._;
      a
        ? n && a === 1
          ? (s = !1)
          : (Ke(i, e), !n && a === 1 && delete i._)
        : ((s = !e.$stable), Bg(e, i)),
        (o = e);
    } else e && (jg(t, e), (o = { default: 1 }));
    if (s) for (const a in i) !Ug(a) && o[a] == null && delete i[a];
  };
function iu(t, e, n, r, i = !1) {
  if (Z(t)) {
    t.forEach((h, f) => iu(h, e && (Z(e) ? e[f] : e), n, r, i));
    return;
  }
  if (gi(r) && !i) return;
  const s = r.shapeFlag & 4 ? ul(r.component) || r.component.proxy : r.el,
    o = i ? null : s,
    { i: a, r: l } = t,
    c = e && e.r,
    u = a.refs === Le ? (a.refs = {}) : a.refs,
    d = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (Fe(c)
        ? ((u[c] = null), _e(d, c) && (d[c] = null))
        : it(c) && (c.value = null)),
    le(l))
  )
    rr(l, a, 12, [o, u]);
  else {
    const h = Fe(l),
      f = it(l);
    if (h || f) {
      const g = () => {
        if (t.f) {
          const y = h ? (_e(d, l) ? d[l] : u[l]) : l.value;
          i
            ? Z(y) && Xu(y, s)
            : Z(y)
            ? y.includes(s) || y.push(s)
            : h
            ? ((u[l] = [s]), _e(d, l) && (d[l] = u[l]))
            : ((l.value = [s]), t.k && (u[t.k] = l.value));
        } else
          h
            ? ((u[l] = o), _e(d, l) && (d[l] = o))
            : f && ((l.value = o), t.k && (u[t.k] = o));
      };
      o ? ((g.id = -1), et(g, n)) : g();
    }
  }
}
const et = e0;
function x0(t) {
  return R0(t);
}
function R0(t, e) {
  const n = Wc();
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
      setScopeId: f = rn,
      insertStaticContent: g,
    } = t,
    y = (
      p,
      m,
      b,
      I = null,
      q = null,
      R = null,
      L = !1,
      D = null,
      M = !!m.dynamicChildren
    ) => {
      if (p === m) return;
      p && !Qn(p, m) && ((I = T(p)), He(p, q, R, !0), (p = null)),
        m.patchFlag === -2 && ((M = !1), (m.dynamicChildren = null));
      const { type: x, ref: G, shapeFlag: B } = m;
      switch (x) {
        case al:
          _(p, m, b, I);
          break;
        case jt:
          w(p, m, b, I);
          break;
        case ps:
          p == null && v(m, b, I, L);
          break;
        case nt:
          V(p, m, b, I, q, R, L, D, M);
          break;
        default:
          B & 1
            ? H(p, m, b, I, q, R, L, D, M)
            : B & 6
            ? pe(p, m, b, I, q, R, L, D, M)
            : (B & 64 || B & 128) && x.process(p, m, b, I, q, R, L, D, M, K);
      }
      G != null && q && iu(G, p && p.ref, R, m || p, !m);
    },
    _ = (p, m, b, I) => {
      if (p == null) r((m.el = a(m.children)), b, I);
      else {
        const q = (m.el = p.el);
        m.children !== p.children && c(q, m.children);
      }
    },
    w = (p, m, b, I) => {
      p == null ? r((m.el = l(m.children || "")), b, I) : (m.el = p.el);
    },
    v = (p, m, b, I) => {
      [p.el, p.anchor] = g(p.children, m, b, I, p.el, p.anchor);
    },
    k = ({ el: p, anchor: m }, b, I) => {
      let q;
      for (; p && p !== m; ) (q = h(p)), r(p, b, I), (p = q);
      r(m, b, I);
    },
    E = ({ el: p, anchor: m }) => {
      let b;
      for (; p && p !== m; ) (b = h(p)), i(p), (p = b);
      i(m);
    },
    H = (p, m, b, I, q, R, L, D, M) => {
      (L = L || m.type === "svg"),
        p == null ? z(m, b, I, q, R, L, D, M) : ne(p, m, q, R, L, D, M);
    },
    z = (p, m, b, I, q, R, L, D) => {
      let M, x;
      const { type: G, props: B, shapeFlag: Q, transition: X, dirs: te } = p;
      if (
        ((M = p.el = o(p.type, R, B && B.is, B)),
        Q & 8
          ? u(M, p.children)
          : Q & 16 &&
            U(p.children, M, null, I, q, R && G !== "foreignObject", L, D),
        te && wr(p, null, I, "created"),
        ae(M, p, p.scopeId, L, I),
        B)
      ) {
        for (const Ae in B)
          Ae !== "value" &&
            !Zo(Ae) &&
            s(M, Ae, null, B[Ae], R, p.children, I, q, $);
        "value" in B && s(M, "value", null, B.value),
          (x = B.onVnodeBeforeMount) && Ut(x, I, p);
      }
      te && wr(p, null, I, "beforeMount");
      const me = P0(q, X);
      me && X.beforeEnter(M),
        r(M, m, b),
        ((x = B && B.onVnodeMounted) || me || te) &&
          et(() => {
            x && Ut(x, I, p), me && X.enter(M), te && wr(p, null, I, "mounted");
          }, q);
    },
    ae = (p, m, b, I, q) => {
      if ((b && f(p, b), I)) for (let R = 0; R < I.length; R++) f(p, I[R]);
      if (q) {
        let R = q.subTree;
        if (m === R) {
          const L = q.vnode;
          ae(p, L, L.scopeId, L.slotScopeIds, q.parent);
        }
      }
    },
    U = (p, m, b, I, q, R, L, D, M = 0) => {
      for (let x = M; x < p.length; x++) {
        const G = (p[x] = D ? Kn(p[x]) : Zt(p[x]));
        y(null, G, m, b, I, q, R, L, D);
      }
    },
    ne = (p, m, b, I, q, R, L) => {
      const D = (m.el = p.el);
      let { patchFlag: M, dynamicChildren: x, dirs: G } = m;
      M |= p.patchFlag & 16;
      const B = p.props || Le,
        Q = m.props || Le;
      let X;
      b && br(b, !1),
        (X = Q.onVnodeBeforeUpdate) && Ut(X, b, m, p),
        G && wr(m, p, b, "beforeUpdate"),
        b && br(b, !0);
      const te = q && m.type !== "foreignObject";
      if (
        (x
          ? ee(p.dynamicChildren, x, D, b, I, te, R)
          : L || ge(p, m, D, null, b, I, te, R, !1),
        M > 0)
      ) {
        if (M & 16) Ie(D, m, B, Q, b, I, q);
        else if (
          (M & 2 && B.class !== Q.class && s(D, "class", null, Q.class, q),
          M & 4 && s(D, "style", B.style, Q.style, q),
          M & 8)
        ) {
          const me = m.dynamicProps;
          for (let Ae = 0; Ae < me.length; Ae++) {
            const Se = me[Ae],
              Dt = B[Se],
              Ln = Q[Se];
            (Ln !== Dt || Se === "value") &&
              s(D, Se, Dt, Ln, q, p.children, b, I, $);
          }
        }
        M & 1 && p.children !== m.children && u(D, m.children);
      } else !L && x == null && Ie(D, m, B, Q, b, I, q);
      ((X = Q.onVnodeUpdated) || G) &&
        et(() => {
          X && Ut(X, b, m, p), G && wr(m, p, b, "updated");
        }, I);
    },
    ee = (p, m, b, I, q, R, L) => {
      for (let D = 0; D < m.length; D++) {
        const M = p[D],
          x = m[D],
          G =
            M.el && (M.type === nt || !Qn(M, x) || M.shapeFlag & 70)
              ? d(M.el)
              : b;
        y(M, x, G, null, I, q, R, L, !0);
      }
    },
    Ie = (p, m, b, I, q, R, L) => {
      if (b !== I) {
        if (b !== Le)
          for (const D in b)
            !Zo(D) && !(D in I) && s(p, D, b[D], null, L, m.children, q, R, $);
        for (const D in I) {
          if (Zo(D)) continue;
          const M = I[D],
            x = b[D];
          M !== x && D !== "value" && s(p, D, x, M, L, m.children, q, R, $);
        }
        "value" in I && s(p, "value", b.value, I.value);
      }
    },
    V = (p, m, b, I, q, R, L, D, M) => {
      const x = (m.el = p ? p.el : a("")),
        G = (m.anchor = p ? p.anchor : a(""));
      let { patchFlag: B, dynamicChildren: Q, slotScopeIds: X } = m;
      X && (D = D ? D.concat(X) : X),
        p == null
          ? (r(x, b, I), r(G, b, I), U(m.children, b, G, q, R, L, D, M))
          : B > 0 && B & 64 && Q && p.dynamicChildren
          ? (ee(p.dynamicChildren, Q, b, q, R, L, D),
            (m.key != null || (q && m === q.subTree)) && Hg(p, m, !0))
          : ge(p, m, b, G, q, R, L, D, M);
    },
    pe = (p, m, b, I, q, R, L, D, M) => {
      (m.slotScopeIds = D),
        p == null
          ? m.shapeFlag & 512
            ? q.ctx.activate(m, b, I, L, M)
            : be(m, b, I, q, R, L, M)
          : _t(p, m, M);
    },
    be = (p, m, b, I, q, R, L) => {
      const D = (p.component = V0(p, I, q));
      if ((il(p) && (D.ctx.renderer = K), F0(D), D.asyncDep)) {
        if ((q && q.registerDep(D, Pe), !p.el)) {
          const M = (D.subTree = qe(jt));
          w(null, M, m, b);
        }
        return;
      }
      Pe(D, p, m, b, q, R, L);
    },
    _t = (p, m, b) => {
      const I = (m.component = p.component);
      if (Xb(p, m, b))
        if (I.asyncDep && !I.asyncResolved) {
          xe(I, m, b);
          return;
        } else (I.next = m), zb(I.update), I.update();
      else (m.el = p.el), (I.vnode = m);
    },
    Pe = (p, m, b, I, q, R, L) => {
      const D = () => {
          if (p.isMounted) {
            let { next: G, bu: B, u: Q, parent: X, vnode: te } = p,
              me = G,
              Ae;
            br(p, !1),
              G ? ((G.el = te.el), xe(p, G, L)) : (G = te),
              B && fi(B),
              (Ae = G.props && G.props.onVnodeBeforeUpdate) && Ut(Ae, X, G, te),
              br(p, !0);
            const Se = cc(p),
              Dt = p.subTree;
            (p.subTree = Se),
              y(Dt, Se, d(Dt.el), T(Dt), p, q, R),
              (G.el = Se.el),
              me === null && Jb(p, Se.el),
              Q && et(Q, q),
              (Ae = G.props && G.props.onVnodeUpdated) &&
                et(() => Ut(Ae, X, G, te), q);
          } else {
            let G;
            const { el: B, props: Q } = m,
              { bm: X, m: te, parent: me } = p,
              Ae = gi(m);
            if (
              (br(p, !1),
              X && fi(X),
              !Ae && (G = Q && Q.onVnodeBeforeMount) && Ut(G, me, m),
              br(p, !0),
              B && ie)
            ) {
              const Se = () => {
                (p.subTree = cc(p)), ie(B, p.subTree, p, q, null);
              };
              Ae
                ? m.type.__asyncLoader().then(() => !p.isUnmounted && Se())
                : Se();
            } else {
              const Se = (p.subTree = cc(p));
              y(null, Se, b, I, p, q, R), (m.el = Se.el);
            }
            if ((te && et(te, q), !Ae && (G = Q && Q.onVnodeMounted))) {
              const Se = m;
              et(() => Ut(G, me, Se), q);
            }
            (m.shapeFlag & 256 ||
              (me && gi(me.vnode) && me.vnode.shapeFlag & 256)) &&
              p.a &&
              et(p.a, q),
              (p.isMounted = !0),
              (m = b = I = null);
          }
        },
        M = (p.effect = new ed(D, () => od(x), p.scope)),
        x = (p.update = () => M.run());
      (x.id = p.uid), br(p, !0), x();
    },
    xe = (p, m, b) => {
      m.component = p;
      const I = p.vnode.props;
      (p.vnode = m),
        (p.next = null),
        S0(p, m.props, I, b),
        q0(p, m.children, b),
        Bi(),
        Qh(),
        ji();
    },
    ge = (p, m, b, I, q, R, L, D, M = !1) => {
      const x = p && p.children,
        G = p ? p.shapeFlag : 0,
        B = m.children,
        { patchFlag: Q, shapeFlag: X } = m;
      if (Q > 0) {
        if (Q & 128) {
          Wt(x, B, b, I, q, R, L, D, M);
          return;
        } else if (Q & 256) {
          At(x, B, b, I, q, R, L, D, M);
          return;
        }
      }
      X & 8
        ? (G & 16 && $(x, q, R), B !== x && u(b, B))
        : G & 16
        ? X & 16
          ? Wt(x, B, b, I, q, R, L, D, M)
          : $(x, q, R, !0)
        : (G & 8 && u(b, ""), X & 16 && U(B, b, I, q, R, L, D, M));
    },
    At = (p, m, b, I, q, R, L, D, M) => {
      (p = p || di), (m = m || di);
      const x = p.length,
        G = m.length,
        B = Math.min(x, G);
      let Q;
      for (Q = 0; Q < B; Q++) {
        const X = (m[Q] = M ? Kn(m[Q]) : Zt(m[Q]));
        y(p[Q], X, b, null, q, R, L, D, M);
      }
      x > G ? $(p, q, R, !0, !1, B) : U(m, b, I, q, R, L, D, M, B);
    },
    Wt = (p, m, b, I, q, R, L, D, M) => {
      let x = 0;
      const G = m.length;
      let B = p.length - 1,
        Q = G - 1;
      for (; x <= B && x <= Q; ) {
        const X = p[x],
          te = (m[x] = M ? Kn(m[x]) : Zt(m[x]));
        if (Qn(X, te)) y(X, te, b, null, q, R, L, D, M);
        else break;
        x++;
      }
      for (; x <= B && x <= Q; ) {
        const X = p[B],
          te = (m[Q] = M ? Kn(m[Q]) : Zt(m[Q]));
        if (Qn(X, te)) y(X, te, b, null, q, R, L, D, M);
        else break;
        B--, Q--;
      }
      if (x > B) {
        if (x <= Q) {
          const X = Q + 1,
            te = X < G ? m[X].el : I;
          for (; x <= Q; )
            y(null, (m[x] = M ? Kn(m[x]) : Zt(m[x])), b, te, q, R, L, D, M),
              x++;
        }
      } else if (x > Q) for (; x <= B; ) He(p[x], q, R, !0), x++;
      else {
        const X = x,
          te = x,
          me = new Map();
        for (x = te; x <= Q; x++) {
          const wt = (m[x] = M ? Kn(m[x]) : Zt(m[x]));
          wt.key != null && me.set(wt.key, x);
        }
        let Ae,
          Se = 0;
        const Dt = Q - te + 1;
        let Ln = !1,
          Ro = 0;
        const yr = new Array(Dt);
        for (x = 0; x < Dt; x++) yr[x] = 0;
        for (x = X; x <= B; x++) {
          const wt = p[x];
          if (Se >= Dt) {
            He(wt, q, R, !0);
            continue;
          }
          let Vt;
          if (wt.key != null) Vt = me.get(wt.key);
          else
            for (Ae = te; Ae <= Q; Ae++)
              if (yr[Ae - te] === 0 && Qn(wt, m[Ae])) {
                Vt = Ae;
                break;
              }
          Vt === void 0
            ? He(wt, q, R, !0)
            : ((yr[Vt - te] = x + 1),
              Vt >= Ro ? (Ro = Vt) : (Ln = !0),
              y(wt, m[Vt], b, null, q, R, L, D, M),
              Se++);
        }
        const _r = Ln ? O0(yr) : di;
        for (Ae = _r.length - 1, x = Dt - 1; x >= 0; x--) {
          const wt = te + x,
            Vt = m[wt],
            Po = wt + 1 < G ? m[wt + 1].el : I;
          yr[x] === 0
            ? y(null, Vt, b, Po, q, R, L, D, M)
            : Ln && (Ae < 0 || x !== _r[Ae] ? Ot(Vt, b, Po, 2) : Ae--);
        }
      }
    },
    Ot = (p, m, b, I, q = null) => {
      const { el: R, type: L, transition: D, children: M, shapeFlag: x } = p;
      if (x & 6) {
        Ot(p.component.subTree, m, b, I);
        return;
      }
      if (x & 128) {
        p.suspense.move(m, b, I);
        return;
      }
      if (x & 64) {
        L.move(p, m, b, K);
        return;
      }
      if (L === nt) {
        r(R, m, b);
        for (let B = 0; B < M.length; B++) Ot(M[B], m, b, I);
        r(p.anchor, m, b);
        return;
      }
      if (L === ps) {
        k(p, m, b);
        return;
      }
      if (I !== 2 && x & 1 && D)
        if (I === 0) D.beforeEnter(R), r(R, m, b), et(() => D.enter(R), q);
        else {
          const { leave: B, delayLeave: Q, afterLeave: X } = D,
            te = () => r(R, m, b),
            me = () => {
              B(R, () => {
                te(), X && X();
              });
            };
          Q ? Q(R, te, me) : me();
        }
      else r(R, m, b);
    },
    He = (p, m, b, I = !1, q = !1) => {
      const {
        type: R,
        props: L,
        ref: D,
        children: M,
        dynamicChildren: x,
        shapeFlag: G,
        patchFlag: B,
        dirs: Q,
      } = p;
      if ((D != null && iu(D, null, b, p, !0), G & 256)) {
        m.ctx.deactivate(p);
        return;
      }
      const X = G & 1 && Q,
        te = !gi(p);
      let me;
      if ((te && (me = L && L.onVnodeBeforeUnmount) && Ut(me, m, p), G & 6))
        S(p.component, b, I);
      else {
        if (G & 128) {
          p.suspense.unmount(b, I);
          return;
        }
        X && wr(p, null, m, "beforeUnmount"),
          G & 64
            ? p.type.remove(p, m, b, q, K, I)
            : x && (R !== nt || (B > 0 && B & 64))
            ? $(x, m, b, !1, !0)
            : ((R === nt && B & 384) || (!q && G & 16)) && $(M, m, b),
          I && dn(p);
      }
      ((te && (me = L && L.onVnodeUnmounted)) || X) &&
        et(() => {
          me && Ut(me, m, p), X && wr(p, null, m, "unmounted");
        }, b);
    },
    dn = (p) => {
      const { type: m, el: b, anchor: I, transition: q } = p;
      if (m === nt) {
        vr(b, I);
        return;
      }
      if (m === ps) {
        E(p);
        return;
      }
      const R = () => {
        i(b), q && !q.persisted && q.afterLeave && q.afterLeave();
      };
      if (p.shapeFlag & 1 && q && !q.persisted) {
        const { leave: L, delayLeave: D } = q,
          M = () => L(b, R);
        D ? D(p.el, R, M) : M();
      } else R();
    },
    vr = (p, m) => {
      let b;
      for (; p !== m; ) (b = h(p)), i(p), (p = b);
      i(m);
    },
    S = (p, m, b) => {
      const { bum: I, scope: q, update: R, subTree: L, um: D } = p;
      I && fi(I),
        q.stop(),
        R && ((R.active = !1), He(L, p, m, b)),
        D && et(D, m),
        et(() => {
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
    $ = (p, m, b, I = !1, q = !1, R = 0) => {
      for (let L = R; L < p.length; L++) He(p[L], m, b, I, q);
    },
    T = (p) =>
      p.shapeFlag & 6
        ? T(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : h(p.anchor || p.el),
    N = (p, m, b) => {
      p == null
        ? m._vnode && He(m._vnode, null, null, !0)
        : y(m._vnode || null, p, m, null, null, null, b),
        Qh(),
        Ig(),
        (m._vnode = p);
    },
    K = {
      p: y,
      um: He,
      m: Ot,
      r: dn,
      mt: be,
      mc: U,
      pc: ge,
      pbc: ee,
      n: T,
      o: t,
    };
  let Ee, ie;
  return (
    e && ([Ee, ie] = e(K)), { render: N, hydrate: Ee, createApp: I0(N, Ee) }
  );
}
function br({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function P0(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function Hg(t, e, n = !1) {
  const r = t.children,
    i = e.children;
  if (Z(r) && Z(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[s] = Kn(i[s])), (a.el = o.el)),
        n || Hg(o, a)),
        a.type === al && (a.el = o.el);
    }
}
function O0(t) {
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
const D0 = (t) => t.__isTeleport,
  nt = Symbol.for("v-fgt"),
  al = Symbol.for("v-txt"),
  jt = Symbol.for("v-cmt"),
  ps = Symbol.for("v-stc"),
  ms = [];
let Yt = null;
function F(t = !1) {
  ms.push((Yt = t ? null : []));
}
function N0() {
  ms.pop(), (Yt = ms[ms.length - 1] || null);
}
let Ps = 1;
function df(t) {
  Ps += t;
}
function zg(t) {
  return (
    (t.dynamicChildren = Ps > 0 ? Yt || di : null),
    N0(),
    Ps > 0 && Yt && Yt.push(t),
    t
  );
}
function de(t, e, n, r, i, s) {
  return zg(O(t, e, n, r, i, s, !0));
}
function De(t, e, n, r, i) {
  return zg(qe(t, e, n, r, i, !0));
}
function Os(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Qn(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ll = "__vInternal",
  Wg = ({ key: t }) => t ?? null,
  na = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Fe(t) || it(t) || le(t)
        ? { i: st, r: t, k: e, f: !!n }
        : t
      : null
  );
function O(
  t,
  e = null,
  n = null,
  r = 0,
  i = null,
  s = t === nt ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Wg(e),
    ref: e && na(e),
    scopeId: rl,
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
    ctx: st,
  };
  return (
    a
      ? (hd(l, n), s & 128 && t.normalize(l))
      : n && (l.shapeFlag |= Fe(n) ? 8 : 16),
    Ps > 0 &&
      !o &&
      Yt &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      Yt.push(l),
    l
  );
}
const qe = L0;
function L0(t, e = null, n = null, r = 0, i = null, s = !1) {
  if (((!t || t === Cg) && (t = jt), Os(t))) {
    const a = Tn(t, e, !0);
    return (
      n && hd(a, n),
      Ps > 0 &&
        !s &&
        Yt &&
        (a.shapeFlag & 6 ? (Yt[Yt.indexOf(t)] = a) : Yt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((H0(t) && (t = t.__vccOpts), e)) {
    e = Kg(e);
    let { class: a, style: l } = e;
    a && !Fe(a) && (e.class = Oe(a)),
      $e(l) && (gg(l) && !Z(l) && (l = Ke({}, l)), (e.style = tr(l)));
  }
  const o = Fe(t) ? 1 : qg(t) ? 128 : D0(t) ? 64 : $e(t) ? 4 : le(t) ? 2 : 0;
  return O(t, e, n, r, i, o, s, !0);
}
function Kg(t) {
  return t ? (gg(t) || ll in t ? Ke({}, t) : t) : null;
}
function Tn(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = t,
    a = e ? Ai(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && Wg(a),
    ref:
      e && e.ref ? (n && i ? (Z(i) ? i.concat(na(e)) : [i, na(e)]) : na(e)) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== nt ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Tn(t.ssContent),
    ssFallback: t.ssFallback && Tn(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function Et(t = " ", e = 0) {
  return qe(al, null, t, e);
}
function to(t, e) {
  const n = qe(ps, null, t);
  return (n.staticCount = e), n;
}
function ft(t = "", e = !1) {
  return e ? (F(), De(jt, null, t)) : qe(jt, null, t);
}
function Zt(t) {
  return t == null || typeof t == "boolean"
    ? qe(jt)
    : Z(t)
    ? qe(nt, null, t.slice())
    : typeof t == "object"
    ? Kn(t)
    : qe(al, null, String(t));
}
function Kn(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Tn(t);
}
function hd(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null) e = null;
  else if (Z(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), hd(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(ll in e)
        ? (e._ctx = st)
        : i === 3 &&
          st &&
          (st.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    le(e)
      ? ((e = { default: e, _ctx: st }), (n = 32))
      : ((e = String(e)), r & 64 ? ((n = 16), (e = [Et(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Ai(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = Oe([e.class, r.class]));
      else if (i === "style") e.style = tr([e.style, r.style]);
      else if (Ya(i)) {
        const s = e[i],
          o = r[i];
        o &&
          s !== o &&
          !(Z(s) && s.includes(o)) &&
          (e[i] = s ? [].concat(s, o) : o);
      } else i !== "" && (e[i] = r[i]);
  }
  return e;
}
function Ut(t, e, n, r = null) {
  Bt(t, e, 7, [n, r]);
}
const M0 = $g();
let $0 = 0;
function V0(t, e, n) {
  const r = t.type,
    i = (e ? e.appContext : t.appContext) || M0,
    s = {
      uid: $0++,
      vnode: t,
      type: r,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new db(!0),
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
      propsOptions: Fg(r, i),
      emitsOptions: Sg(r, i),
      emit: null,
      emitted: null,
      propsDefaults: Le,
      inheritAttrs: r.inheritAttrs,
      ctx: Le,
      data: Le,
      props: Le,
      attrs: Le,
      slots: Le,
      refs: Le,
      setupState: Le,
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
    (s.emit = Gb.bind(null, s)),
    t.ce && t.ce(s),
    s
  );
}
let Ye = null;
const cl = () => Ye || st;
let fd,
  ri,
  hf = "__VUE_INSTANCE_SETTERS__";
(ri = Wc()[hf]) || (ri = Wc()[hf] = []),
  ri.push((t) => (Ye = t)),
  (fd = (t) => {
    ri.length > 1 ? ri.forEach((e) => e(t)) : ri[0](t);
  });
const Si = (t) => {
    fd(t), t.scope.on();
  },
  Nr = () => {
    Ye && Ye.scope.off(), fd(null);
  };
function Gg(t) {
  return t.vnode.shapeFlag & 4;
}
let Ds = !1;
function F0(t, e = !1) {
  Ds = e;
  const { props: n, children: r } = t.vnode,
    i = Gg(t);
  A0(t, n, i, e), C0(t, r);
  const s = i ? U0(t, e) : void 0;
  return (Ds = !1), s;
}
function U0(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = vg(new Proxy(t.ctx, v0)));
  const { setup: r } = n;
  if (r) {
    const i = (t.setupContext = r.length > 1 ? j0(t) : null);
    Si(t), Bi();
    const s = rr(r, t, 0, [t.props, i]);
    if ((ji(), Nr(), Zm(s))) {
      if ((s.then(Nr, Nr), e))
        return s
          .then((o) => {
            ff(t, o, e);
          })
          .catch((o) => {
            tl(o, t, 0);
          });
      t.asyncDep = s;
    } else ff(t, s, e);
  } else Qg(t, e);
}
function ff(t, e, n) {
  le(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : $e(e) && (t.setupState = bg(e)),
    Qg(t, n);
}
let pf;
function Qg(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && pf && !r.render) {
      const i = r.template || ud(t).template;
      if (i) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          c = Ke(Ke({ isCustomElement: s, delimiters: a }, o), l);
        r.render = pf(i, c);
      }
    }
    t.render = r.render || rn;
  }
  {
    Si(t), Bi();
    try {
      y0(t);
    } finally {
      ji(), Nr();
    }
  }
}
function B0(t) {
  return (
    t.attrsProxy ||
    (t.attrsProxy = new Proxy(t.attrs, {
      get(e, n) {
        return Pt(t, "get", "$attrs"), e[n];
      },
    }))
  );
}
function j0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return B0(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function ul(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(bg(vg(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in fs) return fs[n](t);
        },
        has(e, n) {
          return n in e || n in fs;
        },
      }))
    );
}
function su(t, e = !0) {
  return le(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function H0(t) {
  return le(t) && "__vccOpts" in t;
}
const Te = (t, e) => Bb(t, e, Ds);
function dl(t, e, n) {
  const r = arguments.length;
  return r === 2
    ? $e(e) && !Z(e)
      ? Os(e)
        ? qe(t, null, [e])
        : qe(t, e)
      : qe(t, null, e)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Os(n) && (n = [n]),
      qe(t, e, n));
}
const z0 = Symbol.for("v-scx"),
  W0 = () => Xt(z0),
  K0 = "3.3.9",
  G0 = "http://www.w3.org/2000/svg",
  Cr = typeof document < "u" ? document : null,
  mf = Cr && Cr.createElement("template"),
  Q0 = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const i = e
        ? Cr.createElementNS(G0, t)
        : Cr.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          r &&
          r.multiple != null &&
          i.setAttribute("multiple", r.multiple),
        i
      );
    },
    createText: (t) => Cr.createTextNode(t),
    createComment: (t) => Cr.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Cr.querySelector(t),
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
        mf.innerHTML = r ? `<svg>${t}</svg>` : t;
        const a = mf.content;
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
  Fn = "transition",
  ts = "animation",
  Ns = Symbol("_vtc"),
  ba = (t, { slots: e }) => dl(s0, Y0(t), e);
ba.displayName = "Transition";
const Yg = {
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
};
ba.props = Ke({}, Rg, Yg);
const Er = (t, e = []) => {
    Z(t) ? t.forEach((n) => n(...e)) : t && t(...e);
  },
  gf = (t) => (t ? (Z(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function Y0(t) {
  const e = {};
  for (const V in t) V in Yg || (e[V] = t[V]);
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
    g = X0(i),
    y = g && g[0],
    _ = g && g[1],
    {
      onBeforeEnter: w,
      onEnter: v,
      onEnterCancelled: k,
      onLeave: E,
      onLeaveCancelled: H,
      onBeforeAppear: z = w,
      onAppear: ae = v,
      onAppearCancelled: U = k,
    } = e,
    ne = (V, pe, be) => {
      Tr(V, pe ? u : a), Tr(V, pe ? c : o), be && be();
    },
    ee = (V, pe) => {
      (V._isLeaving = !1), Tr(V, d), Tr(V, f), Tr(V, h), pe && pe();
    },
    Ie = (V) => (pe, be) => {
      const _t = V ? ae : v,
        Pe = () => ne(pe, V, be);
      Er(_t, [pe, Pe]),
        vf(() => {
          Tr(pe, V ? l : s), Un(pe, V ? u : a), gf(_t) || yf(pe, r, y, Pe);
        });
    };
  return Ke(e, {
    onBeforeEnter(V) {
      Er(w, [V]), Un(V, s), Un(V, o);
    },
    onBeforeAppear(V) {
      Er(z, [V]), Un(V, l), Un(V, c);
    },
    onEnter: Ie(!1),
    onAppear: Ie(!0),
    onLeave(V, pe) {
      V._isLeaving = !0;
      const be = () => ee(V, pe);
      Un(V, d),
        eE(),
        Un(V, h),
        vf(() => {
          V._isLeaving && (Tr(V, d), Un(V, f), gf(E) || yf(V, r, _, be));
        }),
        Er(E, [V, be]);
    },
    onEnterCancelled(V) {
      ne(V, !1), Er(k, [V]);
    },
    onAppearCancelled(V) {
      ne(V, !0), Er(U, [V]);
    },
    onLeaveCancelled(V) {
      ee(V), Er(H, [V]);
    },
  });
}
function X0(t) {
  if (t == null) return null;
  if ($e(t)) return [pc(t.enter), pc(t.leave)];
  {
    const e = pc(t);
    return [e, e];
  }
}
function pc(t) {
  return nb(t);
}
function Un(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)),
    (t[Ns] || (t[Ns] = new Set())).add(e);
}
function Tr(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const n = t[Ns];
  n && (n.delete(e), n.size || (t[Ns] = void 0));
}
function vf(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let J0 = 0;
function yf(t, e, n, r) {
  const i = (t._endId = ++J0),
    s = () => {
      i === t._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: o, timeout: a, propCount: l } = Z0(t, e);
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
function Z0(t, e) {
  const n = window.getComputedStyle(t),
    r = (g) => (n[g] || "").split(", "),
    i = r(`${Fn}Delay`),
    s = r(`${Fn}Duration`),
    o = _f(i, s),
    a = r(`${ts}Delay`),
    l = r(`${ts}Duration`),
    c = _f(a, l);
  let u = null,
    d = 0,
    h = 0;
  e === Fn
    ? o > 0 && ((u = Fn), (d = o), (h = s.length))
    : e === ts
    ? c > 0 && ((u = ts), (d = c), (h = l.length))
    : ((d = Math.max(o, c)),
      (u = d > 0 ? (o > c ? Fn : ts) : null),
      (h = u ? (u === Fn ? s.length : l.length) : 0));
  const f =
    u === Fn && /\b(transform|all)(,|$)/.test(r(`${Fn}Property`).toString());
  return { type: u, timeout: d, propCount: h, hasTransform: f };
}
function _f(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, r) => wf(n) + wf(t[r])));
}
function wf(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function eE() {
  return document.body.offsetHeight;
}
function tE(t, e, n) {
  const r = t[Ns];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
const pd = Symbol("_vod"),
  bf = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t[pd] = t.style.display === "none" ? "" : t.style.display),
        n && e ? n.beforeEnter(t) : ns(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: r }) {
      !e != !n &&
        (r
          ? e
            ? (r.beforeEnter(t), ns(t, !0), r.enter(t))
            : r.leave(t, () => {
                ns(t, !1);
              })
          : ns(t, e));
    },
    beforeUnmount(t, { value: e }) {
      ns(t, e);
    },
  };
function ns(t, e) {
  t.style.display = e ? t[pd] : "none";
}
function nE(t, e, n) {
  const r = t.style,
    i = Fe(n);
  if (n && !i) {
    if (e && !Fe(e)) for (const s in e) n[s] == null && ou(r, s, "");
    for (const s in n) ou(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"),
      pd in t && (r.display = s);
  }
}
const Ef = /\s*!important$/;
function ou(t, e, n) {
  if (Z(n)) n.forEach((r) => ou(t, e, r));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const r = rE(t, e);
    Ef.test(n)
      ? t.setProperty(Qr(r), n.replace(Ef, ""), "important")
      : (t[r] = n);
  }
}
const Tf = ["Webkit", "Moz", "ms"],
  mc = {};
function rE(t, e) {
  const n = mc[e];
  if (n) return n;
  let r = an(e);
  if (r !== "filter" && r in t) return (mc[e] = r);
  r = Za(r);
  for (let i = 0; i < Tf.length; i++) {
    const s = Tf[i] + r;
    if (s in t) return (mc[e] = s);
  }
  return e;
}
const If = "http://www.w3.org/1999/xlink";
function iE(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(If, e.slice(6, e.length))
      : t.setAttributeNS(If, e, n);
  else {
    const s = cb(e);
    n == null || (s && !ng(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, s ? "" : n);
  }
}
function sE(t, e, n, r, i, s, o) {
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
      ? (n = ng(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    t[e] = n;
  } catch {}
  l && t.removeAttribute(e);
}
function oi(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function oE(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const Af = Symbol("_vei");
function aE(t, e, n, r, i = null) {
  const s = t[Af] || (t[Af] = {}),
    o = s[e];
  if (r && o) o.value = r;
  else {
    const [a, l] = lE(e);
    if (r) {
      const c = (s[e] = dE(r, i));
      oi(t, a, c, l);
    } else o && (oE(t, a, o, l), (s[e] = void 0));
  }
}
const Sf = /(?:Once|Passive|Capture)$/;
function lE(t) {
  let e;
  if (Sf.test(t)) {
    e = {};
    let r;
    for (; (r = t.match(Sf)); )
      (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : Qr(t.slice(2)), e];
}
let gc = 0;
const cE = Promise.resolve(),
  uE = () => gc || (cE.then(() => (gc = 0)), (gc = Date.now()));
function dE(t, e) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Bt(hE(r, n.value), e, 5, [r]);
  };
  return (n.value = t), (n.attached = uE()), n;
}
function hE(t, e) {
  if (Z(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((r) => (i) => !i._stopped && r && r(i))
    );
  } else return e;
}
const kf = /^on[a-z]/,
  fE = (t, e, n, r, i = !1, s, o, a, l) => {
    e === "class"
      ? tE(t, r, i)
      : e === "style"
      ? nE(t, n, r)
      : Ya(e)
      ? Yu(e) || aE(t, e, n, r, o)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : pE(t, e, r, i)
        )
      ? sE(t, e, r, s, o, a, l)
      : (e === "true-value"
          ? (t._trueValue = r)
          : e === "false-value" && (t._falseValue = r),
        iE(t, e, r, i));
  };
function pE(t, e, n, r) {
  return r
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && kf.test(e) && le(n))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (kf.test(e) && Fe(n))
    ? !1
    : e in t;
}
function hl(t) {
  const e = cl();
  if (!e) return;
  const n = (e.ut = (i = t(e.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
      ).forEach((s) => lu(s, i));
    }),
    r = () => {
      const i = t(e.proxy);
      au(e.subTree, i), n(i);
    };
  t0(r),
    un(() => {
      const i = new MutationObserver(r);
      i.observe(e.subTree.el.parentNode, { childList: !0 }),
        eo(() => i.disconnect());
    });
}
function au(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    (t = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          au(n.activeBranch, e);
        });
  }
  for (; t.component; ) t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el) lu(t.el, e);
  else if (t.type === nt) t.children.forEach((n) => au(n, e));
  else if (t.type === ps) {
    let { el: n, anchor: r } = t;
    for (; n && (lu(n, e), n !== r); ) n = n.nextSibling;
  }
}
function lu(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    for (const r in e) n.setProperty(`--${r}`, e[r]);
  }
}
const Cf = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return Z(e) ? (n) => fi(e, n) : e;
};
function mE(t) {
  t.target.composing = !0;
}
function qf(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const vc = Symbol("_assign"),
  BO = {
    created(t, { modifiers: { lazy: e, trim: n, number: r } }, i) {
      t[vc] = Cf(i);
      const s = r || (i.props && i.props.type === "number");
      oi(t, e ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let a = t.value;
        n && (a = a.trim()), s && (a = zc(a)), t[vc](a);
      }),
        n &&
          oi(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (oi(t, "compositionstart", mE),
          oi(t, "compositionend", qf),
          oi(t, "change", qf));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: n, trim: r, number: i } },
      s
    ) {
      if (((t[vc] = Cf(s)), t.composing)) return;
      const o = i || t.type === "number" ? zc(t.value) : t.value,
        a = e ?? "";
      o !== a &&
        ((document.activeElement === t &&
          t.type !== "range" &&
          (n || (r && t.value.trim() === a))) ||
          (t.value = a));
    },
  },
  gE = ["ctrl", "shift", "alt", "meta"],
  vE = {
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
    exact: (t, e) => gE.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  nn =
    (t, e) =>
    (n, ...r) => {
      for (let i = 0; i < e.length; i++) {
        const s = vE[e[i]];
        if (s && s(n, e)) return;
      }
      return t(n, ...r);
    },
  yE = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Xg = (t, e) => (n) => {
    if (!("key" in n)) return;
    const r = Qr(n.key);
    if (e.some((i) => i === r || yE[i] === r)) return t(n);
  },
  _E = Ke({ patchProp: fE }, Q0);
let xf;
function wE() {
  return xf || (xf = x0(_E));
}
const Jg = (...t) => {
  const e = wE().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (r) => {
      const i = bE(r);
      if (!i) return;
      const s = e._component;
      !le(s) && !s.render && !s.template && (s.template = i.innerHTML),
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
function bE(t) {
  return Fe(t) ? document.querySelector(t) : t;
}
var Rf;
const Zg = typeof window < "u",
  EE = (t) => typeof t == "string",
  yc = () => {};
Zg &&
  (Rf = window == null ? void 0 : window.navigator) != null &&
  Rf.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function TE(t) {
  return typeof t == "function" ? t() : Rt(t);
}
function IE(t) {
  return t;
}
function AE(t) {
  return ig() ? (fb(t), !0) : !1;
}
function SE(t, e = !0) {
  cl() ? un(t) : e ? t() : Zn(t);
}
function ls(t) {
  var e;
  const n = TE(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const md = Zg ? window : void 0;
function li(...t) {
  let e, n, r, i;
  if ((EE(t[0]) ? (([n, r, i] = t), (e = md)) : ([e, n, r, i] = t), !e))
    return yc;
  let s = yc;
  const o = ut(
      () => ls(e),
      (l) => {
        s(),
          l &&
            (l.addEventListener(n, r, i),
            (s = () => {
              l.removeEventListener(n, r, i), (s = yc);
            }));
      },
      { immediate: !0, flush: "post" }
    ),
    a = () => {
      o(), s();
    };
  return AE(a), a;
}
function kE(t, e, n = {}) {
  const {
    window: r = md,
    ignore: i,
    capture: s = !0,
    detectIframe: o = !1,
  } = n;
  if (!r) return;
  const a = ue(!0);
  let l;
  const c = (h) => {
      r.clearTimeout(l);
      const f = ls(t),
        g = h.composedPath();
      !f ||
        f === h.target ||
        g.includes(f) ||
        !a.value ||
        (i &&
          i.length > 0 &&
          i.some((y) => {
            const _ = ls(y);
            return _ && (h.target === _ || g.includes(_));
          })) ||
        e(h);
    },
    u = [
      li(r, "click", c, { passive: !0, capture: s }),
      li(
        r,
        "pointerdown",
        (h) => {
          const f = ls(t);
          a.value = !!f && !h.composedPath().includes(f);
        },
        { passive: !0 }
      ),
      li(
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
        li(r, "blur", (h) => {
          var f;
          const g = ls(t);
          ((f = document.activeElement) == null ? void 0 : f.tagName) ===
            "IFRAME" &&
            !(g != null && g.contains(document.activeElement)) &&
            e(h);
        }),
    ].filter(Boolean);
  return () => u.forEach((h) => h());
}
const Pf =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Of = "__vueuse_ssr_handlers__";
Pf[Of] = Pf[Of] || {};
var Df;
(function (t) {
  (t.UP = "UP"),
    (t.RIGHT = "RIGHT"),
    (t.DOWN = "DOWN"),
    (t.LEFT = "LEFT"),
    (t.NONE = "NONE");
})(Df || (Df = {}));
var CE = Object.defineProperty,
  Nf = Object.getOwnPropertySymbols,
  qE = Object.prototype.hasOwnProperty,
  xE = Object.prototype.propertyIsEnumerable,
  Lf = (t, e, n) =>
    e in t
      ? CE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  RE = (t, e) => {
    for (var n in e || (e = {})) qE.call(e, n) && Lf(t, n, e[n]);
    if (Nf) for (var n of Nf(e)) xE.call(e, n) && Lf(t, n, e[n]);
    return t;
  };
const PE = {
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
RE({ linear: IE }, PE);
function ev(t = {}) {
  const {
      window: e = md,
      initialWidth: n = 1 / 0,
      initialHeight: r = 1 / 0,
      listenOrientation: i = !0,
      includeScrollbar: s = !0,
    } = t,
    o = ue(n),
    a = ue(r),
    l = () => {
      e &&
        (s
          ? ((o.value = e.innerWidth), (a.value = e.innerHeight))
          : ((o.value = e.document.documentElement.clientWidth),
            (a.value = e.document.documentElement.clientHeight)));
    };
  return (
    l(),
    SE(l),
    li("resize", l, { passive: !0 }),
    i && li("orientationchange", l, { passive: !0 }),
    { width: o, height: a }
  );
}
/*!
 * vue-router v4.1.5
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const ai = typeof window < "u";
function OE(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module";
}
const Re = Object.assign;
function _c(t, e) {
  const n = {};
  for (const r in e) {
    const i = e[r];
    n[r] = Jt(i) ? i.map(t) : t(i);
  }
  return n;
}
const gs = () => {},
  Jt = Array.isArray,
  DE = /\/$/,
  NE = (t) => t.replace(DE, "");
function wc(t, e, n = "/") {
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
    (r = VE(r ?? e, n)),
    { fullPath: r + (s && "?") + s + o, path: r, query: i, hash: o }
  );
}
function LE(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function Mf(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function ME(t, e, n) {
  const r = e.matched.length - 1,
    i = n.matched.length - 1;
  return (
    r > -1 &&
    r === i &&
    ki(e.matched[r], n.matched[i]) &&
    tv(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  );
}
function ki(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function tv(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!$E(t[n], e[n])) return !1;
  return !0;
}
function $E(t, e) {
  return Jt(t) ? $f(t, e) : Jt(e) ? $f(e, t) : t === e;
}
function $f(t, e) {
  return Jt(e)
    ? t.length === e.length && t.every((n, r) => n === e[r])
    : t.length === 1 && t[0] === e;
}
function VE(t, e) {
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
var Ls;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(Ls || (Ls = {}));
var vs;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(vs || (vs = {}));
function FE(t) {
  if (!t)
    if (ai) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), NE(t);
}
const UE = /^[^#]+#/;
function BE(t, e) {
  return t.replace(UE, "#") + e;
}
function jE(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0),
  };
}
const fl = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function HE(t) {
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
    e = jE(i, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function Vf(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const cu = new Map();
function zE(t, e) {
  cu.set(t, e);
}
function WE(t) {
  const e = cu.get(t);
  return cu.delete(t), e;
}
let KE = () => location.protocol + "//" + location.host;
function nv(t, e) {
  const { pathname: n, search: r, hash: i } = e,
    s = t.indexOf("#");
  if (s > -1) {
    let a = i.includes(t.slice(s)) ? t.slice(s).length : 1,
      l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), Mf(l, "");
  }
  return Mf(n, t) + r + i;
}
function GE(t, e, n, r) {
  let i = [],
    s = [],
    o = null;
  const a = ({ state: h }) => {
    const f = nv(t, location),
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
    i.forEach((w) => {
      w(n.value, g, {
        delta: _,
        type: Ls.pop,
        direction: _ ? (_ > 0 ? vs.forward : vs.back) : vs.unknown,
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
    h.state && h.replaceState(Re({}, h.state, { scroll: fl() }), "");
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
function Ff(t, e, n, r = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? fl() : null,
  };
}
function QE(t) {
  const { history: e, location: n } = window,
    r = { value: nv(t, n) },
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
          : KE() + t + l;
    try {
      e[u ? "replaceState" : "pushState"](c, "", h), (i.value = c);
    } catch (f) {
      console.error(f), n[u ? "replace" : "assign"](h);
    }
  }
  function o(l, c) {
    const u = Re({}, e.state, Ff(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position,
    });
    s(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = Re({}, i.value, e.state, { forward: l, scroll: fl() });
    s(u.current, u, !0);
    const d = Re({}, Ff(r.value, l, null), { position: u.position + 1 }, c);
    s(l, d, !1), (r.value = l);
  }
  return { location: r, state: i, push: a, replace: o };
}
function YE(t) {
  t = FE(t);
  const e = QE(t),
    n = GE(t, e.state, e.location, e.replace);
  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s);
  }
  const i = Re(
    { location: "", base: t, go: r, createHref: BE.bind(null, t) },
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
function XE(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function rv(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const Bn = {
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
  iv = Symbol("");
var Uf;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(Uf || (Uf = {}));
function Ci(t, e) {
  return Re(new Error(), { type: t, [iv]: !0 }, e);
}
function hn(t, e) {
  return t instanceof Error && iv in t && (e == null || !!(t.type & e));
}
const Bf = "[^/]+?",
  JE = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ZE = /[.+*?^${}()[\]/\\]/g;
function eT(t, e) {
  const n = Re({}, JE, e),
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
        d || (i += "/"), (i += h.value.replace(ZE, "\\$&")), (f += 40);
      else if (h.type === 1) {
        const { value: g, repeatable: y, optional: _, regexp: w } = h;
        s.push({ name: g, repeatable: y, optional: _ });
        const v = w || Bf;
        if (v !== Bf) {
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
            w = g in c ? c[g] : "";
          if (Jt(w) && !y)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const v = Jt(w) ? w.join("/") : w;
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
function tT(t, e) {
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
function nT(t, e) {
  let n = 0;
  const r = t.score,
    i = e.score;
  for (; n < r.length && n < i.length; ) {
    const s = tT(r[n], i[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (jf(r)) return 1;
    if (jf(i)) return -1;
  }
  return i.length - r.length;
}
function jf(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const rT = { type: 0, value: "" },
  iT = /[a-zA-Z0-9_]/;
function sT(t) {
  if (!t) return [[]];
  if (t === "/") return [[rT]];
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
          : iT.test(l)
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
function oT(t, e, n) {
  const r = eT(sT(t.path), n),
    i = Re(r, { record: t, parent: e, children: [], alias: [] });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
}
function aT(t, e) {
  const n = [],
    r = new Map();
  e = Wf({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(u) {
    return r.get(u);
  }
  function s(u, d, h) {
    const f = !h,
      g = lT(u);
    g.aliasOf = h && h.record;
    const y = Wf(e, u),
      _ = [g];
    if ("alias" in u) {
      const k = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const E of k)
        _.push(
          Re({}, g, {
            components: h ? h.record.components : g.components,
            path: E,
            aliasOf: h ? h.record : g,
          })
        );
    }
    let w, v;
    for (const k of _) {
      const { path: E } = k;
      if (d && E[0] !== "/") {
        const H = d.record.path,
          z = H[H.length - 1] === "/" ? "" : "/";
        k.path = d.record.path + (E && z + E);
      }
      if (
        ((w = oT(k, d, y)),
        h
          ? h.alias.push(w)
          : ((v = v || w),
            v !== w && v.alias.push(w),
            f && u.name && !zf(w) && o(u.name)),
        g.children)
      ) {
        const H = g.children;
        for (let z = 0; z < H.length; z++) s(H[z], w, h && h.children[z]);
      }
      (h = h || w), l(w);
    }
    return v
      ? () => {
          o(v);
        }
      : gs;
  }
  function o(u) {
    if (rv(u)) {
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
      nT(u, n[d]) >= 0 &&
      (u.record.path !== n[d].record.path || !sv(u, n[d]));

    )
      d++;
    n.splice(d, 0, u), u.record.name && !zf(u) && r.set(u.record.name, u);
  }
  function c(u, d) {
    let h,
      f = {},
      g,
      y;
    if ("name" in u && u.name) {
      if (((h = r.get(u.name)), !h)) throw Ci(1, { location: u });
      (y = h.record.name),
        (f = Re(
          Hf(
            d.params,
            h.keys.filter((v) => !v.optional).map((v) => v.name)
          ),
          u.params &&
            Hf(
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
        throw Ci(1, { location: u, currentLocation: d });
      (y = h.record.name),
        (f = Re({}, d.params, u.params)),
        (g = h.stringify(f));
    }
    const _ = [];
    let w = h;
    for (; w; ) _.unshift(w.record), (w = w.parent);
    return { name: y, path: g, params: f, matched: _, meta: uT(_) };
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
function Hf(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n;
}
function lT(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: cT(t),
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
function cT(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else for (const r in t.components) e[r] = typeof n == "boolean" ? n : n[r];
  return e;
}
function zf(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function uT(t) {
  return t.reduce((e, n) => Re(e, n.meta), {});
}
function Wf(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n;
}
function sv(t, e) {
  return e.children.some((n) => n === t || sv(t, n));
}
const ov = /#/g,
  dT = /&/g,
  hT = /\//g,
  fT = /=/g,
  pT = /\?/g,
  av = /\+/g,
  mT = /%5B/g,
  gT = /%5D/g,
  lv = /%5E/g,
  vT = /%60/g,
  cv = /%7B/g,
  yT = /%7C/g,
  uv = /%7D/g,
  _T = /%20/g;
function gd(t) {
  return encodeURI("" + t)
    .replace(yT, "|")
    .replace(mT, "[")
    .replace(gT, "]");
}
function wT(t) {
  return gd(t).replace(cv, "{").replace(uv, "}").replace(lv, "^");
}
function uu(t) {
  return gd(t)
    .replace(av, "%2B")
    .replace(_T, "+")
    .replace(ov, "%23")
    .replace(dT, "%26")
    .replace(vT, "`")
    .replace(cv, "{")
    .replace(uv, "}")
    .replace(lv, "^");
}
function bT(t) {
  return uu(t).replace(fT, "%3D");
}
function ET(t) {
  return gd(t).replace(ov, "%23").replace(pT, "%3F");
}
function TT(t) {
  return t == null ? "" : ET(t).replace(hT, "%2F");
}
function Ea(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
function IT(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(av, " "),
      o = s.indexOf("="),
      a = Ea(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : Ea(s.slice(o + 1));
    if (a in e) {
      let c = e[a];
      Jt(c) || (c = e[a] = [c]), c.push(l);
    } else e[a] = l;
  }
  return e;
}
function Kf(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (((n = bT(n)), r == null)) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (Jt(r) ? r.map((s) => s && uu(s)) : [r && uu(r)]).forEach((s) => {
      s !== void 0 &&
        ((e += (e.length ? "&" : "") + n), s != null && (e += "=" + s));
    });
  }
  return e;
}
function AT(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 &&
      (e[n] = Jt(r)
        ? r.map((i) => (i == null ? null : "" + i))
        : r == null
        ? r
        : "" + r);
  }
  return e;
}
const ST = Symbol(""),
  Gf = Symbol(""),
  pl = Symbol(""),
  vd = Symbol(""),
  du = Symbol("");
function rs() {
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
function Gn(t, e, n, r, i) {
  const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () =>
    new Promise((o, a) => {
      const l = (d) => {
          d === !1
            ? a(Ci(4, { from: n, to: e }))
            : d instanceof Error
            ? a(d)
            : XE(d)
            ? a(Ci(2, { from: e, to: d }))
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
function bc(t, e, n, r) {
  const i = [];
  for (const s of t)
    for (const o in s.components) {
      let a = s.components[o];
      if (!(e !== "beforeRouteEnter" && !s.instances[o]))
        if (kT(a)) {
          const c = (a.__vccOpts || a)[e];
          c && i.push(Gn(c, n, r, s, o));
        } else {
          let l = a();
          i.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${s.path}"`)
                );
              const u = OE(c) ? c.default : c;
              s.components[o] = u;
              const h = (u.__vccOpts || u)[e];
              return h && Gn(h, n, r, s, o)();
            })
          );
        }
    }
  return i;
}
function kT(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function Qf(t) {
  const e = Xt(pl),
    n = Xt(vd),
    r = Te(() => e.resolve(Rt(t.to))),
    i = Te(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const h = d.findIndex(ki.bind(null, u));
      if (h > -1) return h;
      const f = Yf(l[c - 2]);
      return c > 1 && Yf(u) === f && d[d.length - 1].path !== f
        ? d.findIndex(ki.bind(null, l[c - 2]))
        : h;
    }),
    s = Te(() => i.value > -1 && RT(n.params, r.value.params)),
    o = Te(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        tv(n.params, r.value.params)
    );
  function a(l = {}) {
    return xT(l)
      ? e[Rt(t.replace) ? "replace" : "push"](Rt(t.to)).catch(gs)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Te(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
const CT = Ze({
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
    useLink: Qf,
    setup(t, { slots: e }) {
      const n = Pn(Qf(t)),
        { options: r } = Xt(pl),
        i = Te(() => ({
          [Xf(t.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Xf(
            t.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = e.default && e.default(n);
        return t.custom
          ? s
          : dl(
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
  qT = CT;
function xT(t) {
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
function RT(t, e) {
  for (const n in e) {
    const r = e[n],
      i = t[n];
    if (typeof r == "string") {
      if (r !== i) return !1;
    } else if (!Jt(i) || i.length !== r.length || r.some((s, o) => s !== i[o]))
      return !1;
  }
  return !0;
}
function Yf(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const Xf = (t, e, n) => t ?? e ?? n,
  PT = Ze({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const r = Xt(du),
        i = Te(() => t.route || r.value),
        s = Xt(Gf, 0),
        o = Te(() => {
          let c = Rt(s);
          const { matched: u } = i.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        a = Te(() => i.value.matched[o.value]);
      ta(
        Gf,
        Te(() => o.value + 1)
      ),
        ta(ST, a),
        ta(du, i);
      const l = ue();
      return (
        ut(
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
                (!f || !ki(u, f) || !h) &&
                (u.enterCallbacks[d] || []).forEach((y) => y(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = i.value,
            u = t.name,
            d = a.value,
            h = d && d.components[u];
          if (!h) return Jf(n.default, { Component: h, route: c });
          const f = d.props[u],
            g = f
              ? f === !0
                ? c.params
                : typeof f == "function"
                ? f(c)
                : f
              : null,
            _ = dl(
              h,
              Re({}, g, e, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (d.instances[u] = null);
                },
                ref: l,
              })
            );
          return Jf(n.default, { Component: _, route: c }) || _;
        }
      );
    },
  });
function Jf(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const OT = PT;
function DT(t) {
  const e = aT(t.routes, t),
    n = t.parseQuery || IT,
    r = t.stringifyQuery || Kf,
    i = t.history,
    s = rs(),
    o = rs(),
    a = rs(),
    l = Nb(Bn);
  let c = Bn;
  ai &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = _c.bind(null, (S) => "" + S),
    d = _c.bind(null, TT),
    h = _c.bind(null, Ea);
  function f(S, $) {
    let T, N;
    return (
      rv(S) ? ((T = e.getRecordMatcher(S)), (N = $)) : (N = S), e.addRoute(N, T)
    );
  }
  function g(S) {
    const $ = e.getRecordMatcher(S);
    $ && e.removeRoute($);
  }
  function y() {
    return e.getRoutes().map((S) => S.record);
  }
  function _(S) {
    return !!e.getRecordMatcher(S);
  }
  function w(S, $) {
    if ((($ = Re({}, $ || l.value)), typeof S == "string")) {
      const p = wc(n, S, $.path),
        m = e.resolve({ path: p.path }, $),
        b = i.createHref(p.fullPath);
      return Re(p, m, {
        params: h(m.params),
        hash: Ea(p.hash),
        redirectedFrom: void 0,
        href: b,
      });
    }
    let T;
    if ("path" in S) T = Re({}, S, { path: wc(n, S.path, $.path).path });
    else {
      const p = Re({}, S.params);
      for (const m in p) p[m] == null && delete p[m];
      (T = Re({}, S, { params: d(S.params) })), ($.params = d($.params));
    }
    const N = e.resolve(T, $),
      K = S.hash || "";
    N.params = u(h(N.params));
    const Ee = LE(r, Re({}, S, { hash: wT(K), path: N.path })),
      ie = i.createHref(Ee);
    return Re(
      { fullPath: Ee, hash: K, query: r === Kf ? AT(S.query) : S.query || {} },
      N,
      { redirectedFrom: void 0, href: ie }
    );
  }
  function v(S) {
    return typeof S == "string" ? wc(n, S, l.value.path) : Re({}, S);
  }
  function k(S, $) {
    if (c !== S) return Ci(8, { from: $, to: S });
  }
  function E(S) {
    return ae(S);
  }
  function H(S) {
    return E(Re(v(S), { replace: !0 }));
  }
  function z(S) {
    const $ = S.matched[S.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: T } = $;
      let N = typeof T == "function" ? T(S) : T;
      return (
        typeof N == "string" &&
          ((N = N.includes("?") || N.includes("#") ? (N = v(N)) : { path: N }),
          (N.params = {})),
        Re(
          { query: S.query, hash: S.hash, params: "path" in N ? {} : S.params },
          N
        )
      );
    }
  }
  function ae(S, $) {
    const T = (c = w(S)),
      N = l.value,
      K = S.state,
      Ee = S.force,
      ie = S.replace === !0,
      p = z(T);
    if (p)
      return ae(
        Re(v(p), {
          state: typeof p == "object" ? Re({}, K, p.state) : K,
          force: Ee,
          replace: ie,
        }),
        $ || T
      );
    const m = T;
    m.redirectedFrom = $;
    let b;
    return (
      !Ee &&
        ME(r, N, T) &&
        ((b = Ci(16, { to: m, from: N })), Wt(N, N, !0, !1)),
      (b ? Promise.resolve(b) : ne(m, N))
        .catch((I) => (hn(I) ? (hn(I, 2) ? I : At(I)) : xe(I, m, N)))
        .then((I) => {
          if (I) {
            if (hn(I, 2))
              return ae(
                Re({ replace: ie }, v(I.to), {
                  state: typeof I.to == "object" ? Re({}, K, I.to.state) : K,
                  force: Ee,
                }),
                $ || m
              );
          } else I = Ie(m, N, !0, ie, K);
          return ee(m, N, I), I;
        })
    );
  }
  function U(S, $) {
    const T = k(S, $);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function ne(S, $) {
    let T;
    const [N, K, Ee] = NT(S, $);
    T = bc(N.reverse(), "beforeRouteLeave", S, $);
    for (const p of N)
      p.leaveGuards.forEach((m) => {
        T.push(Gn(m, S, $));
      });
    const ie = U.bind(null, S, $);
    return (
      T.push(ie),
      ii(T)
        .then(() => {
          T = [];
          for (const p of s.list()) T.push(Gn(p, S, $));
          return T.push(ie), ii(T);
        })
        .then(() => {
          T = bc(K, "beforeRouteUpdate", S, $);
          for (const p of K)
            p.updateGuards.forEach((m) => {
              T.push(Gn(m, S, $));
            });
          return T.push(ie), ii(T);
        })
        .then(() => {
          T = [];
          for (const p of S.matched)
            if (p.beforeEnter && !$.matched.includes(p))
              if (Jt(p.beforeEnter))
                for (const m of p.beforeEnter) T.push(Gn(m, S, $));
              else T.push(Gn(p.beforeEnter, S, $));
          return T.push(ie), ii(T);
        })
        .then(
          () => (
            S.matched.forEach((p) => (p.enterCallbacks = {})),
            (T = bc(Ee, "beforeRouteEnter", S, $)),
            T.push(ie),
            ii(T)
          )
        )
        .then(() => {
          T = [];
          for (const p of o.list()) T.push(Gn(p, S, $));
          return T.push(ie), ii(T);
        })
        .catch((p) => (hn(p, 8) ? p : Promise.reject(p)))
    );
  }
  function ee(S, $, T) {
    for (const N of a.list()) N(S, $, T);
  }
  function Ie(S, $, T, N, K) {
    const Ee = k(S, $);
    if (Ee) return Ee;
    const ie = $ === Bn,
      p = ai ? history.state : {};
    T &&
      (N || ie
        ? i.replace(S.fullPath, Re({ scroll: ie && p && p.scroll }, K))
        : i.push(S.fullPath, K)),
      (l.value = S),
      Wt(S, $, T, ie),
      At();
  }
  let V;
  function pe() {
    V ||
      (V = i.listen((S, $, T) => {
        if (!vr.listening) return;
        const N = w(S),
          K = z(N);
        if (K) {
          ae(Re(K, { replace: !0 }), N).catch(gs);
          return;
        }
        c = N;
        const Ee = l.value;
        ai && zE(Vf(Ee.fullPath, T.delta), fl()),
          ne(N, Ee)
            .catch((ie) =>
              hn(ie, 12)
                ? ie
                : hn(ie, 2)
                ? (ae(ie.to, N)
                    .then((p) => {
                      hn(p, 20) &&
                        !T.delta &&
                        T.type === Ls.pop &&
                        i.go(-1, !1);
                    })
                    .catch(gs),
                  Promise.reject())
                : (T.delta && i.go(-T.delta, !1), xe(ie, N, Ee))
            )
            .then((ie) => {
              (ie = ie || Ie(N, Ee, !1)),
                ie &&
                  (T.delta && !hn(ie, 8)
                    ? i.go(-T.delta, !1)
                    : T.type === Ls.pop && hn(ie, 20) && i.go(-1, !1)),
                ee(N, Ee, ie);
            })
            .catch(gs);
      }));
  }
  let be = rs(),
    _t = rs(),
    Pe;
  function xe(S, $, T) {
    At(S);
    const N = _t.list();
    return (
      N.length ? N.forEach((K) => K(S, $, T)) : console.error(S),
      Promise.reject(S)
    );
  }
  function ge() {
    return Pe && l.value !== Bn
      ? Promise.resolve()
      : new Promise((S, $) => {
          be.add([S, $]);
        });
  }
  function At(S) {
    return (
      Pe ||
        ((Pe = !S),
        pe(),
        be.list().forEach(([$, T]) => (S ? T(S) : $())),
        be.reset()),
      S
    );
  }
  function Wt(S, $, T, N) {
    const { scrollBehavior: K } = t;
    if (!ai || !K) return Promise.resolve();
    const Ee =
      (!T && WE(Vf(S.fullPath, 0))) ||
      ((N || !T) && history.state && history.state.scroll) ||
      null;
    return Zn()
      .then(() => K(S, $, Ee))
      .then((ie) => ie && HE(ie))
      .catch((ie) => xe(ie, S, $));
  }
  const Ot = (S) => i.go(S);
  let He;
  const dn = new Set(),
    vr = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: g,
      hasRoute: _,
      getRoutes: y,
      resolve: w,
      options: t,
      push: E,
      replace: H,
      go: Ot,
      back: () => Ot(-1),
      forward: () => Ot(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: _t.add,
      isReady: ge,
      install(S) {
        const $ = this;
        S.component("RouterLink", qT),
          S.component("RouterView", OT),
          (S.config.globalProperties.$router = $),
          Object.defineProperty(S.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Rt(l),
          }),
          ai &&
            !He &&
            l.value === Bn &&
            ((He = !0), E(i.location).catch((K) => {}));
        const T = {};
        for (const K in Bn) T[K] = Te(() => l.value[K]);
        S.provide(pl, $), S.provide(vd, Pn(T)), S.provide(du, l);
        const N = S.unmount;
        dn.add(S),
          (S.unmount = function () {
            dn.delete(S),
              dn.size < 1 &&
                ((c = Bn),
                V && V(),
                (V = null),
                (l.value = Bn),
                (He = !1),
                (Pe = !1)),
              N();
          });
      },
    };
  return vr;
}
function ii(t) {
  return t.reduce((e, n) => e.then(() => n()), Promise.resolve());
}
function NT(t, e) {
  const n = [],
    r = [],
    i = [],
    s = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < s; o++) {
    const a = e.matched[o];
    a && (t.matched.find((c) => ki(c, a)) ? r.push(a) : n.push(a));
    const l = t.matched[o];
    l && (e.matched.find((c) => ki(c, l)) || i.push(l));
  }
  return [n, r, i];
}
function yd() {
  return Xt(pl);
}
function Wi() {
  return Xt(vd);
}
const dv = "/assets/cris-pride-icon-Gl17-mq3.png",
  hv =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAA4CAYAAAAl63xKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjUSURBVHgB7VpdjBzFEa7qnv0745xsOcYYDinyAQrJGcmyFNskeXEUYYkIJ1F4yksID+QhSqIkjvLES4Tkl6AIKQ/5lZIoUaTIihQFI7AQWObHZwM2YATY/AqMAZu1fT7f3t5OF9V/s3vszO6x03cyUn+Wb2a6Z7t6qqu+rq5ugIiIiIiIiIiIiIiIiIiIiIiIiIiIiIgrHDio8uz1k99PajQlqvxQARB1AVDj+0RB0uD7OjfA5foqEmwlOLMX//DeZRgR9Mz4XqgogCr/99c68X0H5kHATEfCpbQKs50qXFR4fMfE2X/CiLjxjz/+2kJL3k7zDYAWf1Sr8dGbv/nVXhgRmzedWY8p/byGbaiJeagKe62LFtQSfW1DBe1zRSxwXevgfdN3/x9KIhlUKRC+S4C7U33P48WqJD3iKAQqfTVPZK6E1GxC47dQBkR7iLQU8s8ASnHTRgoLE7oaU6VAkvwzvzHyAHYo3QIkfwmKjVghNyte5eKRB3BhXozXkoU9aDRDxBpCc4+696DviL/AqIyvWl6by5d3AMGOD1+so7Iu30kInjVdALiGP3urGVCv8BBwnKAl8Fgd4ss5HjX+cNrOJetMf1y/AgrFMA3qkSFj2dr0uOAFvrS4ULd/Mz9fpSuNHwgIAjG4O6aa/McJwAdXHTy1e9UjJ++Qgn7HJoXGM9CoFNZAAGR65K9W6R68urNbrKU7WM4x0gJD6doBF/8pB00P+h+a1jpE8u59L311279e3PkVfj5kpGTeAEEwxA6UdUBHndQjVdkOG1UajtAcCmVh29MUYwgnt6NGS0GAxgCdfYZgETdyxTCyjIuuiAeSHT1LCpB5ZPeH2KPkEAbctc9+J8NuaSgfJOcxxtux5AfoQI/sP834OjJYyJNptYahPDAZ9oIWKLUHGgvt6m1BdE4ISvZaBtUlOLemreahLKjvxkDZLzc6Vya2gTAwkziGY2W09qXDusqi4vRhHtj3zdgZXeJzEABDB1BDx1ICF3vgVf998xhfjkFA2OjMxES57qDL9TvaZkQICsKMOMvzh44pE7DkL/rb++vx2++HZcBQNaBfOlDYuC8XjtGwsDKbASkYZ1MhaX86VLM7H0cvv75gCQMYRlOfEsZiPqnRTC92Oi5tT6n5a+aGEAFM210zbdGK6G0pHmhglwyhJp58eDW66RZz68mGeuXnQGn++qC/tLZ9EAMAsCK+ZzF4AJnMe+0o2OpzkMjs84uIFMwIi0BdCeXPBi4lRYY+rwAK7Yncw9DMEGRznKHPxQIF2JgDEcKQukq7NE2hPs52DE0m5gqgUCLlrdNkQJabQk3s3V0KLlKA8iV9QzsihFxE0whBgiJyCWLd3pURxPhcqGOaZYXhHhtT5MSiZCdiN8Bh1oHovBDLf5oOYhyF2oKV8cCh60CbeiRYkd6ATVMYY9FDKcXv1fvJRagStACmbMaLciLUUaCjUDNboUmehIo80OY8uNkK70b85Ts3P9GsS95e4m2mqtTbSXwv23q76e/3PX3Xn6AkhmdiyLspBjHUQbAM6acl83gLZD6Cft1tOlE6iHEe7JKv5T9MR6GpzTjauNbsQExBlpGErnvaiOIgBMASPRBWxAOzTKd/JvgPP21nq74WTFiHOiP0FP85khIchjLwBmDWgT1J2BFRv3zhPNRXP2BNTLhtB+zmyZG+zX+us4LC0esSUmlZN8IFawMkmaynC5yEUvfzfuuHXP4jtJtqegF4YmrjRz+Bslg0hxKUpdDnztzwIV8K+/WDW/bfyDImvLmEwhIyMd7/9JJ3edeB5A3Fmi/ZDqrDbuzQ0d2tZ85cvQrKwn6K3inG8v43HFaL3bQIBMJwD3SkbXXblTuza/LzlTHYlmju1+dkqqhkjQ7gA6dK7ki4DSy/H4jiBb3/4AIpfVBh04W0M8E1L0MpSCcM3JxUTqc3rXt5dX31+K4qzEGDg5REtqk9BwcOvb256QUR+A1fhBXbTkK3bYaf2HKpVuCbCsQ/UrAzM9eeb86rL3DVyAPos9Q+8jWoLbwFSr7Ld9e6+aqqsPMlKD2AaVcols/FiPraDUidfwthQy1B0P5co3MrVx3V9Z7HyC9kA/ngkjgRfYqkR6g1IJNvQAq0au09y5RhHJrc/pN2i80WpQp2QlkoL8oYRXlO87sRlpT7xscOno1SKeAif6AHuo1azPYkcsQieQLK7xT9jeer841JZiyEMS6o8j71TRtO4NZn+jes0Xm8Pbvli7SGjzCV3tk1IfwGFODe45vXX7hU2zjL97PtCjRVfWb/zkdf63tROAp1vFak0cldD9bmOuNfhIVxaM/qbetx9cGLE8/nv01uMZ9fi5BxdqG97Ltn3/o5MbdxbNUYVMeqIOvy0m2/vu1U0fsDB5C8vXh7EjR18es3/ELUTR+2dCnP7mPmHmo6O7YFEnoIJAl7TJB/dfKtTVxzOlcmuOxdr0o76nGQktCdGFKEk0ePXjO2dWv/GdT2HP5MIf1UpQkvy4QOgg5w8begEBwcKSrUaEs2tlMq9+u0YqI/XPIkB7AWijpvmjTzDpusuud7X37qjYTTEIrmrrMh2uBV2ez87L1JI7krxdTPTf/j4juL3l/KHNjTP9zB+tuB1GVxP4XoPhcdamLNNzCzOv5lWhP5styhPLJLpUy2hJNcc45/us6fe0rXtbfx9dG+RgQmHPPUzaLH0C7V83uVZlzN68pCD6RUz2pY14PsiCb/VZ1Kk5glrdiopRD0w5ST5lIo8ClAxyuFFMqDlnB/6i6lqn9XgQEYTKEKXmePmfZt22Nc1D3lRN35ka2+uWZDzpkYpBnu+rRZCrhoB9SFdoHEaXPax8yq/F4iz7H7Abv2+ctNeIwFXe/cE2QiJvJaIBKnufpw1mOgV/JlybNcO41ZopBO5rYnKi3SOrB915fcIE3WZAvSzhGrGUs2pA8NS0HCbzuSPT1lHQBfy9UA4Gm2lMOaO2yEUTZYi4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI+KziY6wqtT16i2tdAAAAAElFTkSuQmCC";
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
 */ const fv = function (t) {
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
  LT = function (t) {
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
  pv = {
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
        : this.encodeByteArray(fv(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : LT(this.decodeStringToByteArray(t, e));
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
  MT = function (t) {
    const e = fv(t);
    return pv.encodeByteArray(e, !0);
  },
  mv = function (t) {
    return MT(t).replace(/\./g, "");
  },
  $T = function (t) {
    try {
      return pv.decodeString(t, !0);
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
 */ class VT {
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
 */ function vt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function FT() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())
  );
}
function UT() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function BT() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function jT() {
  const t = vt();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function HT() {
  return typeof indexedDB == "object";
}
function zT() {
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
 */ const WT = "FirebaseError";
class Dn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = WT),
      Object.setPrototypeOf(this, Dn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, no.prototype.create);
  }
}
class no {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? KT(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new Dn(i, a, r);
  }
}
function KT(t, e) {
  return t.replace(GT, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const GT = /\{\$([^}]+)}/g;
function QT(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function Ta(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Zf(s) && Zf(o)) {
      if (!Ta(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Zf(t) {
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
 */ function ro(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function YT(t, e) {
  const n = new XT(t, e);
  return n.subscribe.bind(n);
}
class XT {
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
    JT(e, ["next", "error", "complete"])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = Ec),
      i.error === void 0 && (i.error = Ec),
      i.complete === void 0 && (i.complete = Ec);
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
function JT(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == "function") return !0;
  return !1;
}
function Ec() {}
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
 */ function yt(t) {
  return t && t._delegate ? t._delegate : t;
}
class Br {
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
 */ const Ar = "[DEFAULT]";
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
 */ class ZT {
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
      const r = new VT();
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
      if (tI(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Ar });
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
  clearInstance(e = Ar) {
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
  isInitialized(e = Ar) {
    return this.instances.has(e);
  }
  getOptions(e = Ar) {
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
        instanceIdentifier: eI(e),
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
  normalizeInstanceIdentifier(e = Ar) {
    return this.component ? (this.component.multipleInstances ? e : Ar) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function eI(t) {
  return t === Ar ? void 0 : t;
}
function tI(t) {
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
 */ class nI {
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
    const n = new ZT(e, this);
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
 */ var ke;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(ke || (ke = {}));
const rI = {
    debug: ke.DEBUG,
    verbose: ke.VERBOSE,
    info: ke.INFO,
    warn: ke.WARN,
    error: ke.ERROR,
    silent: ke.SILENT,
  },
  iI = ke.INFO,
  sI = {
    [ke.DEBUG]: "log",
    [ke.VERBOSE]: "log",
    [ke.INFO]: "info",
    [ke.WARN]: "warn",
    [ke.ERROR]: "error",
  },
  oI = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = sI[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class _d {
  constructor(e) {
    (this.name = e),
      (this._logLevel = iI),
      (this._logHandler = oI),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ke))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? rI[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, ke.DEBUG, ...e),
      this._logHandler(this, ke.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.VERBOSE, ...e),
      this._logHandler(this, ke.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.INFO, ...e),
      this._logHandler(this, ke.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.WARN, ...e),
      this._logHandler(this, ke.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.ERROR, ...e),
      this._logHandler(this, ke.ERROR, ...e);
  }
}
const aI = (t, e) => e.some((n) => t instanceof n);
let ep, tp;
function lI() {
  return (
    ep ||
    (ep = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function cI() {
  return (
    tp ||
    (tp = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const gv = new WeakMap(),
  hu = new WeakMap(),
  vv = new WeakMap(),
  Tc = new WeakMap(),
  wd = new WeakMap();
function uI(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(ir(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && gv.set(n, t);
      })
      .catch(() => {}),
    wd.set(e, t),
    e
  );
}
function dI(t) {
  if (hu.has(t)) return;
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
  hu.set(t, e);
}
let fu = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return hu.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || vv.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return ir(t[e]);
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
function hI(t) {
  fu = t(fu);
}
function fI(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Ic(this), e, ...n);
        return vv.set(r, e.sort ? e.sort() : [e]), ir(r);
      }
    : cI().includes(t)
    ? function (...e) {
        return t.apply(Ic(this), e), ir(gv.get(this));
      }
    : function (...e) {
        return ir(t.apply(Ic(this), e));
      };
}
function pI(t) {
  return typeof t == "function"
    ? fI(t)
    : (t instanceof IDBTransaction && dI(t),
      aI(t, lI()) ? new Proxy(t, fu) : t);
}
function ir(t) {
  if (t instanceof IDBRequest) return uI(t);
  if (Tc.has(t)) return Tc.get(t);
  const e = pI(t);
  return e !== t && (Tc.set(t, e), wd.set(e, t)), e;
}
const Ic = (t) => wd.get(t);
function mI(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = ir(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(ir(o.result), l.oldVersion, l.newVersion, ir(o.transaction));
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
const gI = ["get", "getKey", "getAll", "getAllKeys", "count"],
  vI = ["put", "add", "delete", "clear"],
  Ac = new Map();
function np(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Ac.get(e)) return Ac.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = vI.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || gI.includes(n))
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
  return Ac.set(e, s), s;
}
hI((t) => ({
  ...t,
  get: (e, n, r) => np(e, n) || t.get(e, n, r),
  has: (e, n) => !!np(e, n) || t.has(e, n),
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
 */ class yI {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (_I(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function _I(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const pu = "@firebase/app",
  rp = "0.7.33";
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
 */ const jr = new _d("@firebase/app"),
  wI = "@firebase/app-compat",
  bI = "@firebase/analytics-compat",
  EI = "@firebase/analytics",
  TI = "@firebase/app-check-compat",
  II = "@firebase/app-check",
  AI = "@firebase/auth",
  SI = "@firebase/auth-compat",
  kI = "@firebase/database",
  CI = "@firebase/database-compat",
  qI = "@firebase/functions",
  xI = "@firebase/functions-compat",
  RI = "@firebase/installations",
  PI = "@firebase/installations-compat",
  OI = "@firebase/messaging",
  DI = "@firebase/messaging-compat",
  NI = "@firebase/performance",
  LI = "@firebase/performance-compat",
  MI = "@firebase/remote-config",
  $I = "@firebase/remote-config-compat",
  VI = "@firebase/storage",
  FI = "@firebase/storage-compat",
  UI = "@firebase/firestore",
  BI = "@firebase/firestore-compat",
  jI = "firebase",
  HI = "9.10.0";
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
 */ const yv = "[DEFAULT]",
  zI = {
    [pu]: "fire-core",
    [wI]: "fire-core-compat",
    [EI]: "fire-analytics",
    [bI]: "fire-analytics-compat",
    [II]: "fire-app-check",
    [TI]: "fire-app-check-compat",
    [AI]: "fire-auth",
    [SI]: "fire-auth-compat",
    [kI]: "fire-rtdb",
    [CI]: "fire-rtdb-compat",
    [qI]: "fire-fn",
    [xI]: "fire-fn-compat",
    [RI]: "fire-iid",
    [PI]: "fire-iid-compat",
    [OI]: "fire-fcm",
    [DI]: "fire-fcm-compat",
    [NI]: "fire-perf",
    [LI]: "fire-perf-compat",
    [MI]: "fire-rc",
    [$I]: "fire-rc-compat",
    [VI]: "fire-gcs",
    [FI]: "fire-gcs-compat",
    [UI]: "fire-fst",
    [BI]: "fire-fst-compat",
    "fire-js": "fire-js",
    [jI]: "fire-js-all",
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
 */ const Ia = new Map(),
  mu = new Map();
function WI(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    jr.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function qi(t) {
  const e = t.name;
  if (mu.has(e))
    return (
      jr.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  mu.set(e, t);
  for (const n of Ia.values()) WI(n, t);
  return !0;
}
function bd(t, e) {
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
 */ const KI = {
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
  Hr = new no("app", "Firebase", KI);
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
 */ class GI {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Br("app", () => this, "PUBLIC"));
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
    if (this.isDeleted) throw Hr.create("app-deleted", { appName: this._name });
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
 */ const io = HI;
function QI(t, e = {}) {
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: yv, automaticDataCollectionEnabled: !1 }, e),
    r = n.name;
  if (typeof r != "string" || !r)
    throw Hr.create("bad-app-name", { appName: String(r) });
  const i = Ia.get(r);
  if (i) {
    if (Ta(t, i.options) && Ta(n, i.config)) return i;
    throw Hr.create("duplicate-app", { appName: r });
  }
  const s = new nI(r);
  for (const a of mu.values()) s.addComponent(a);
  const o = new GI(t, n, s);
  return Ia.set(r, o), o;
}
function _v(t = yv) {
  const e = Ia.get(t);
  if (!e) throw Hr.create("no-app", { appName: t });
  return e;
}
function sr(t, e, n) {
  var r;
  let i = (r = zI[t]) !== null && r !== void 0 ? r : t;
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
      jr.warn(a.join(" "));
    return;
  }
  qi(new Br(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
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
 */ const YI = "firebase-heartbeat-database",
  XI = 1,
  Ms = "firebase-heartbeat-store";
let Sc = null;
function wv() {
  return (
    Sc ||
      (Sc = mI(YI, XI, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(Ms);
          }
        },
      }).catch((t) => {
        throw Hr.create("idb-open", { originalErrorMessage: t.message });
      })),
    Sc
  );
}
async function JI(t) {
  var e;
  try {
    return (await wv()).transaction(Ms).objectStore(Ms).get(bv(t));
  } catch (n) {
    if (n instanceof Dn) jr.warn(n.message);
    else {
      const r = Hr.create("idb-get", {
        originalErrorMessage:
          (e = n) === null || e === void 0 ? void 0 : e.message,
      });
      jr.warn(r.message);
    }
  }
}
async function ip(t, e) {
  var n;
  try {
    const i = (await wv()).transaction(Ms, "readwrite");
    return await i.objectStore(Ms).put(e, bv(t)), i.done;
  } catch (r) {
    if (r instanceof Dn) jr.warn(r.message);
    else {
      const i = Hr.create("idb-set", {
        originalErrorMessage:
          (n = r) === null || n === void 0 ? void 0 : n.message,
      });
      jr.warn(i.message);
    }
  }
}
function bv(t) {
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
 */ const ZI = 1024,
  eA = 30 * 24 * 60 * 60 * 1e3;
class tA {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new rA(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = sp();
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
            return Date.now() - s <= eA;
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
    const e = sp(),
      { heartbeatsToSend: n, unsentEntries: r } = nA(
        this._heartbeatsCache.heartbeats
      ),
      i = mv(JSON.stringify({ version: 2, heartbeats: n }));
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
function sp() {
  return new Date().toISOString().substring(0, 10);
}
function nA(t, e = ZI) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), op(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), op(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class rA {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return HT()
      ? zT()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await JI(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ip(this.app, {
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
      return ip(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function op(t) {
  return mv(JSON.stringify({ version: 2, heartbeats: t })).length;
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
 */ function iA(t) {
  qi(new Br("platform-logger", (e) => new yI(e), "PRIVATE")),
    qi(new Br("heartbeat", (e) => new tA(e), "PRIVATE")),
    sr(pu, rp, t),
    sr(pu, rp, "esm2017"),
    sr("fire-js", "");
}
iA("");
function Ed(t, e) {
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
function Ev() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const sA = Ev,
  Tv = new no("auth", "Firebase", Ev());
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
 */ const ap = new _d("@firebase/auth");
function ra(t, ...e) {
  ap.logLevel <= ke.ERROR && ap.error(`Auth (${io}): ${t}`, ...e);
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
 */ function ln(t, ...e) {
  throw Td(t, ...e);
}
function sn(t, ...e) {
  return Td(t, ...e);
}
function Iv(t, e, n) {
  const r = Object.assign(Object.assign({}, sA()), { [e]: n });
  return new no("auth", "Firebase", r).create(e, { appName: t.name });
}
function oA(t, e, n) {
  const r = n;
  if (!(e instanceof r))
    throw (
      (r.name !== e.constructor.name && ln(t, "argument-error"),
      Iv(
        t,
        "argument-error",
        `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function Td(t, ...e) {
  if (typeof t != "string") {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return Tv.create(t, ...e);
}
function se(t, e, ...n) {
  if (!t) throw Td(e, ...n);
}
function mn(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw (ra(e), new Error(e));
}
function In(t, e) {
  t || mn(e);
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
 */ const lp = new Map();
function gn(t) {
  In(t instanceof Function, "Expected a class definition");
  let e = lp.get(t);
  return e
    ? (In(e instanceof t, "Instance stored in cache mismatched with class"), e)
    : ((e = new t()), lp.set(t, e), e);
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
 */ function aA(t, e) {
  const n = bd(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Ta(s, e ?? {})) return i;
    ln(i, "already-initialized");
  }
  return n.initialize({ options: e });
}
function lA(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(gn);
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
 */ function gu() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
    ""
  );
}
function cA() {
  return cp() === "http:" || cp() === "https:";
}
function cp() {
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
 */ function uA() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (cA() || UT() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function dA() {
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
 */ class so {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      In(n > e, "Short delay should be less than long delay!"),
      (this.isMobile = FT() || BT());
  }
  get() {
    return uA()
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
 */ function Id(t, e) {
  In(t.emulator, "Emulator should always be set here");
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
 */ class Av {
  static initialize(e, n, r) {
    (this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    mn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    mn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    mn(
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
 */ const hA = {
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
 */ const fA = new so(3e4, 6e4);
function pA(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function ml(t, e, n, r, i = {}) {
  return Sv(t, i, async () => {
    let s = {},
      o = {};
    r && (e === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = ro(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      t.languageCode && (l["X-Firebase-Locale"] = t.languageCode),
      Av.fetch()(
        kv(t, t.config.apiHost, n, a),
        Object.assign(
          { method: e, headers: l, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function Sv(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, hA), e);
  try {
    const i = new gA(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Fo(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Fo(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw Fo(t, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw Fo(t, "user-disabled", o);
      const u = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c) throw Iv(t, u, c);
      ln(t, u);
    }
  } catch (i) {
    if (i instanceof Dn) throw i;
    ln(t, "network-request-failed");
  }
}
async function mA(t, e, n, r, i = {}) {
  const s = await ml(t, e, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      ln(t, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function kv(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? Id(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class gA {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(sn(this.auth, "network-request-failed")),
          fA.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Fo(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = sn(t, e, r);
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
 */ async function vA(t, e) {
  return ml(t, "POST", "/v1/accounts:delete", e);
}
async function yA(t, e) {
  return ml(t, "POST", "/v1/accounts:lookup", e);
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
 */ function ys(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function _A(t, e = !1) {
  const n = yt(t),
    r = await n.getIdToken(e),
    i = Ad(r);
  se(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: ys(kc(i.auth_time)),
    issuedAtTime: ys(kc(i.iat)),
    expirationTime: ys(kc(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function kc(t) {
  return Number(t) * 1e3;
}
function Ad(t) {
  var e;
  const [n, r, i] = t.split(".");
  if (n === void 0 || r === void 0 || i === void 0)
    return ra("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const s = $T(r);
    return s
      ? JSON.parse(s)
      : (ra("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return (
      ra(
        "Caught error parsing JWT payload as JSON",
        (e = s) === null || e === void 0 ? void 0 : e.toString()
      ),
      null
    );
  }
}
function wA(t) {
  const e = Ad(t);
  return (
    se(e, "internal-error"),
    se(typeof e.exp < "u", "internal-error"),
    se(typeof e.iat < "u", "internal-error"),
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
 */ async function $s(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof Dn &&
        bA(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r)
    );
  }
}
function bA({ code: t }) {
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
 */ class EA {
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
 */ class Cv {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = ys(this.lastLoginAt)),
      (this.creationTime = ys(this.createdAt));
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
 */ async function Aa(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await $s(t, yA(n, { idToken: r }));
  se(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? AA(s.providerUserInfo)
        : [],
    a = IA(t.providerData, o),
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
      metadata: new Cv(s.createdAt, s.lastLoginAt),
      isAnonymous: u,
    };
  Object.assign(t, d);
}
async function TA(t) {
  const e = yt(t);
  await Aa(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function IA(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function AA(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = Ed(e, ["providerId"]);
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
 */ async function SA(t, e) {
  const n = await Sv(t, {}, async () => {
    const r = ro({ grant_type: "refresh_token", refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = kv(t, i, "/v1/token", `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"),
      Av.fetch()(o, { method: "POST", headers: a, body: r })
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
 */ class Vs {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    se(e.idToken, "internal-error"),
      se(typeof e.idToken < "u", "internal-error"),
      se(typeof e.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in e && typeof e.expiresIn < "u"
        ? Number(e.expiresIn)
        : wA(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return (
      se(!this.accessToken || this.refreshToken, e, "user-token-expired"),
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
    const { accessToken: r, refreshToken: i, expiresIn: s } = await SA(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new Vs();
    return (
      r &&
        (se(typeof r == "string", "internal-error", { appName: e }),
        (o.refreshToken = r)),
      i &&
        (se(typeof i == "string", "internal-error", { appName: e }),
        (o.accessToken = i)),
      s &&
        (se(typeof s == "number", "internal-error", { appName: e }),
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
    return Object.assign(new Vs(), this.toJSON());
  }
  _performRefresh() {
    return mn("not implemented");
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
 */ function jn(t, e) {
  se(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Lr {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = Ed(e, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new EA(this)),
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
      (this.metadata = new Cv(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await $s(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      se(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return _A(this, e);
  }
  reload() {
    return TA(this);
  }
  _assign(e) {
    this !== e &&
      (se(this.uid === e.uid, this.auth, "internal-error"),
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
    return new Lr(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
  }
  _onReload(e) {
    se(!this.reloadListener, this.auth, "internal-error"),
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
      n && (await Aa(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await $s(this, vA(this.auth, { idToken: e })),
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
      w = (c = n.createdAt) !== null && c !== void 0 ? c : void 0,
      v = (u = n.lastLoginAt) !== null && u !== void 0 ? u : void 0,
      {
        uid: k,
        emailVerified: E,
        isAnonymous: H,
        providerData: z,
        stsTokenManager: ae,
      } = n;
    se(k && ae, e, "internal-error");
    const U = Vs.fromJSON(this.name, ae);
    se(typeof k == "string", e, "internal-error"),
      jn(d, e.name),
      jn(h, e.name),
      se(typeof E == "boolean", e, "internal-error"),
      se(typeof H == "boolean", e, "internal-error"),
      jn(f, e.name),
      jn(g, e.name),
      jn(y, e.name),
      jn(_, e.name),
      jn(w, e.name),
      jn(v, e.name);
    const ne = new Lr({
      uid: k,
      auth: e,
      email: h,
      emailVerified: E,
      displayName: d,
      isAnonymous: H,
      photoURL: g,
      phoneNumber: f,
      tenantId: y,
      stsTokenManager: U,
      createdAt: w,
      lastLoginAt: v,
    });
    return (
      z &&
        Array.isArray(z) &&
        (ne.providerData = z.map((ee) => Object.assign({}, ee))),
      _ && (ne._redirectEventId = _),
      ne
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new Vs();
    i.updateFromServerResponse(n);
    const s = new Lr({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Aa(s), s;
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
 */ class qv {
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
qv.type = "NONE";
const up = qv;
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
 */ function ia(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class vi {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = ia(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = ia("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Lr._fromJSON(this.auth, e) : null;
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
    if (!n.length) return new vi(gn(up), e, r);
    const i = (
      await Promise.all(
        n.map(async (c) => {
          if (await c._isAvailable()) return c;
        })
      )
    ).filter((c) => c);
    let s = i[0] || gn(up);
    const o = ia(r, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const u = await c._get(o);
        if (u) {
          const d = Lr._fromJSON(e, u);
          c !== s && (a = d), (s = c);
          break;
        }
      } catch {}
    const l = i.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new vi(s, e, r)
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
        new vi(s, e, r));
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
 */ function dp(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Pv(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (xv(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (Dv(e)) return "Blackberry";
  if (Nv(e)) return "Webos";
  if (Sd(e)) return "Safari";
  if ((e.includes("chrome/") || Rv(e)) && !e.includes("edge/")) return "Chrome";
  if (Ov(e)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function xv(t = vt()) {
  return /firefox\//i.test(t);
}
function Sd(t = vt()) {
  const e = t.toLowerCase();
  return (
    e.includes("safari/") &&
    !e.includes("chrome/") &&
    !e.includes("crios/") &&
    !e.includes("android")
  );
}
function Rv(t = vt()) {
  return /crios\//i.test(t);
}
function Pv(t = vt()) {
  return /iemobile/i.test(t);
}
function Ov(t = vt()) {
  return /android/i.test(t);
}
function Dv(t = vt()) {
  return /blackberry/i.test(t);
}
function Nv(t = vt()) {
  return /webos/i.test(t);
}
function gl(t = vt()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function kA(t = vt()) {
  var e;
  return (
    gl(t) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function CA() {
  return jT() && document.documentMode === 10;
}
function Lv(t = vt()) {
  return gl(t) || Ov(t) || Nv(t) || Dv(t) || /windows phone/i.test(t) || Pv(t);
}
function qA() {
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
 */ function Mv(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = dp(vt());
      break;
    case "Worker":
      n = `${dp(vt())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${io}/${r}`;
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
 */ class xA {
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
 */ class RA {
  constructor(e, n, r) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.config = r),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new hp(this)),
      (this.idTokenSubscription = new hp(this)),
      (this.beforeStateQueue = new xA(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Tv),
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
      n && (this._popupRedirectResolver = gn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await vi.create(this, e)), !this._deleted)
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
      se(this._popupRedirectResolver, this, "argument-error"),
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
      await Aa(e);
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
    this.languageCode = dA();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? yt(e) : null;
    return (
      n &&
        se(
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
        e && se(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
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
      await this.assertedPersistence.setPersistence(gn(e));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new no("auth", "Firebase", e());
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
      const n = (e && gn(e)) || this._popupRedirectResolver;
      se(n, this, "argument-error"),
        (this.redirectPersistenceManager = await vi.create(
          this,
          [gn(n._redirectPersistence)],
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
      se(o, this, "internal-error"),
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
      se(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = Mv(
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
function kd(t) {
  return yt(t);
}
class hp {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = YT((n) => (this.observer = n)));
  }
  get next() {
    return (
      se(this.observer, this.auth, "internal-error"),
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
 */ class $v {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return mn("not implemented");
  }
  _getIdTokenResponse(e) {
    return mn("not implemented");
  }
  _linkToIdToken(e, n) {
    return mn("not implemented");
  }
  _getReauthenticationResolver(e) {
    return mn("not implemented");
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
 */ async function yi(t, e) {
  return mA(t, "POST", "/v1/accounts:signInWithIdp", pA(t, e));
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
 */ const PA = "http://localhost";
class zr extends $v {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new zr(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : ln("argument-error"),
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
      s = Ed(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new zr(r, i);
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
    return yi(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), yi(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), yi(e, n);
  }
  buildRequest() {
    const e = { requestUri: PA, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = ro(n));
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
 */ class Cd {
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
 */ class oo extends Cd {
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
 */ class Yn extends oo {
  constructor() {
    super("facebook.com");
  }
  static credential(e) {
    return zr._fromParams({
      providerId: Yn.PROVIDER_ID,
      signInMethod: Yn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Yn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Yn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return Yn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Yn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Yn.PROVIDER_ID = "facebook.com";
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
 */ class Lt extends oo {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(e, n) {
    return zr._fromParams({
      providerId: Lt.PROVIDER_ID,
      signInMethod: Lt.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return Lt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Lt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return Lt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Lt.GOOGLE_SIGN_IN_METHOD = "google.com";
Lt.PROVIDER_ID = "google.com";
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
 */ class Xn extends oo {
  constructor() {
    super("github.com");
  }
  static credential(e) {
    return zr._fromParams({
      providerId: Xn.PROVIDER_ID,
      signInMethod: Xn.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Xn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Xn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return Xn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Xn.GITHUB_SIGN_IN_METHOD = "github.com";
Xn.PROVIDER_ID = "github.com";
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
 */ class Jn extends oo {
  constructor() {
    super("twitter.com");
  }
  static credential(e, n) {
    return zr._fromParams({
      providerId: Jn.PROVIDER_ID,
      signInMethod: Jn.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return Jn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Jn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return Jn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Jn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Jn.PROVIDER_ID = "twitter.com";
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
 */ class xi {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await Lr._fromIdTokenResponse(e, r, i),
      o = fp(r);
    return new xi({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = fp(r);
    return new xi({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function fp(t) {
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
 */ class Sa extends Dn {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Sa.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Sa(e, n, r, i);
  }
}
function Vv(t, e, n, r) {
  return (
    e === "reauthenticate"
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? Sa._fromErrorAndOperation(t, s, e, r)
      : s;
  });
}
async function OA(t, e, n = !1) {
  const r = await $s(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return xi._forOperation(t, "link", r);
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
 */ async function DA(t, e, n = !1) {
  var r;
  const { auth: i } = t,
    s = "reauthenticate";
  try {
    const o = await $s(t, Vv(i, s, e, t), n);
    se(o.idToken, i, "internal-error");
    const a = Ad(o.idToken);
    se(a, i, "internal-error");
    const { sub: l } = a;
    return se(t.uid === l, i, "user-mismatch"), xi._forOperation(t, s, o);
  } catch (o) {
    throw (
      (((r = o) === null || r === void 0 ? void 0 : r.code) ===
        "auth/user-not-found" && ln(i, "user-mismatch"),
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
 */ async function NA(t, e, n = !1) {
  const r = "signIn",
    i = await Vv(t, r, e),
    s = await xi._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
function ao(t, e, n, r) {
  return yt(t).onAuthStateChanged(e, n, r);
}
function jO(t) {
  return yt(t).signOut();
}
const ka = "__sak";
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
 */ class Fv {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(ka, "1"),
          this.storage.removeItem(ka),
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
 */ function LA() {
  const t = vt();
  return Sd(t) || gl(t);
}
const MA = 1e3,
  $A = 10;
class Uv extends Fv {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = LA() && qA()),
      (this.fallbackToPolling = Lv()),
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
    CA() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, $A)
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
      }, MA));
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
Uv.type = "LOCAL";
const VA = Uv;
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
 */ class Bv extends Fv {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Bv.type = "SESSION";
const jv = Bv;
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
 */ function FA(t) {
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
 */ class vl {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new vl(e);
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
      l = await FA(a);
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
vl.receivers = [];
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
 */ function qd(t = "", e = 10) {
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
 */ class UA {
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
      const c = qd("", 20);
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
 */ function on() {
  return window;
}
function BA(t) {
  on().location.href = t;
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
 */ function Hv() {
  return (
    typeof on().WorkerGlobalScope < "u" &&
    typeof on().importScripts == "function"
  );
}
async function jA() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function HA() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    t === void 0
      ? void 0
      : t.controller) || null
  );
}
function zA() {
  return Hv() ? self : null;
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
 */ const zv = "firebaseLocalStorageDb",
  WA = 1,
  Ca = "firebaseLocalStorage",
  Wv = "fbase_key";
class lo {
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
function yl(t, e) {
  return t.transaction([Ca], e ? "readwrite" : "readonly").objectStore(Ca);
}
function KA() {
  const t = indexedDB.deleteDatabase(zv);
  return new lo(t).toPromise();
}
function vu() {
  const t = indexedDB.open(zv, WA);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const r = t.result;
        try {
          r.createObjectStore(Ca, { keyPath: Wv });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener("success", async () => {
        const r = t.result;
        r.objectStoreNames.contains(Ca)
          ? e(r)
          : (r.close(), await KA(), e(await vu()));
      });
  });
}
async function pp(t, e, n) {
  const r = yl(t, !0).put({ [Wv]: e, value: n });
  return new lo(r).toPromise();
}
async function GA(t, e) {
  const n = yl(t, !1).get(e),
    r = await new lo(n).toPromise();
  return r === void 0 ? null : r.value;
}
function mp(t, e) {
  const n = yl(t, !0).delete(e);
  return new lo(n).toPromise();
}
const QA = 800,
  YA = 3;
class Kv {
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
    return this.db ? this.db : ((this.db = await vu()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > YA) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Hv() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = vl._getInstance(zA())),
      this.receiver._subscribe("keyChanged", async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await jA()), !this.activeServiceWorker))
      return;
    this.sender = new UA(this.activeServiceWorker);
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
        HA() !== this.activeServiceWorker
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
      const e = await vu();
      return await pp(e, ka, "1"), await mp(e, ka), !0;
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
        await this._withRetries((r) => pp(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => GA(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => mp(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = yl(i, !1).getAll();
      return new lo(s).toPromise();
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
      (this.pollTimer = setInterval(async () => this._poll(), QA));
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
Kv.type = "LOCAL";
const XA = Kv;
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
 */ function JA() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName("head")) === null || t === void 0
      ? void 0
      : t[0]) !== null && e !== void 0
    ? e
    : document;
}
function ZA(t) {
  return new Promise((e, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", t),
      (r.onload = e),
      (r.onerror = (i) => {
        const s = sn("internal-error");
        (s.customData = i), n(s);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      JA().appendChild(r);
  });
}
function eS(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
new so(3e4, 6e4);
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
 */ function Gv(t, e) {
  return e
    ? gn(e)
    : (se(t._popupRedirectResolver, t, "argument-error"),
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
 */ class xd extends $v {
  constructor(e) {
    super("custom", "custom"), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return yi(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return yi(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return yi(e, this._buildIdpRequest());
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
function tS(t) {
  return NA(t.auth, new xd(t), t.bypassAuthState);
}
function nS(t) {
  const { auth: e, user: n } = t;
  return se(n, e, "internal-error"), DA(n, new xd(t), t.bypassAuthState);
}
async function rS(t) {
  const { auth: e, user: n } = t;
  return se(n, e, "internal-error"), OA(n, new xd(t), t.bypassAuthState);
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
 */ class Qv {
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
        return tS;
      case "linkViaPopup":
      case "linkViaRedirect":
        return rS;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return nS;
      default:
        ln(this.auth, "internal-error");
    }
  }
  resolve(e) {
    In(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    In(this.pendingPromise, "Pending promise was never set"),
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
 */ const iS = new so(2e3, 1e4);
async function Fs(t, e, n) {
  const r = kd(t);
  oA(t, e, Cd);
  const i = Gv(r, n);
  return new xr(r, "signInViaPopup", e, i).executeNotNull();
}
class xr extends Qv {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      xr.currentPopupAction && xr.currentPopupAction.cancel(),
      (xr.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return se(e, this.auth, "internal-error"), e;
  }
  async onExecution() {
    In(this.filter.length === 1, "Popup operations only handle one event");
    const e = qd();
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
        n || this.reject(sn(this.auth, "web-storage-unsupported"));
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
    this.reject(sn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (xr.currentPopupAction = null);
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
            this.reject(sn(this.auth, "popup-closed-by-user"));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(e, iS.get());
    };
    e();
  }
}
xr.currentPopupAction = null;
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
 */ const sS = "pendingRedirect",
  sa = new Map();
class oS extends Qv {
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
    let e = sa.get(this.auth._key());
    if (!e) {
      try {
        const r = (await aS(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      sa.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        sa.set(this.auth._key(), () => Promise.resolve(null)),
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
async function aS(t, e) {
  const n = uS(e),
    r = cS(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function lS(t, e) {
  sa.set(t._key(), e);
}
function cS(t) {
  return gn(t._redirectPersistence);
}
function uS(t) {
  return ia(sS, t.config.apiKey, t.name);
}
async function dS(t, e, n = !1) {
  const r = kd(t),
    i = Gv(r, e),
    o = await new oS(r, i, n).execute();
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
 */ const hS = 10 * 60 * 1e3;
class fS {
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
        !pS(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !Yv(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(sn(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= hS &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(gp(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(gp(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function gp(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((e) => e)
    .join("-");
}
function Yv({ type: t, error: e }) {
  return (
    t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
  );
}
function pS(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Yv(t);
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
 */ async function mS(t, e = {}) {
  return ml(t, "GET", "/v1/projects", e);
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
 */ const gS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  vS = /^https?/;
async function yS(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await mS(t);
  for (const n of e)
    try {
      if (_S(n)) return;
    } catch {}
  ln(t, "unauthorized-domain");
}
function _S(t) {
  const e = gu(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            e.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!vS.test(n)) return !1;
  if (gS.test(t)) return r === t;
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
 */ const wS = new so(3e4, 6e4);
function vp() {
  const t = on().___jsl;
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
function bS(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      vp(),
        gapi.load("gapi.iframes", {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            vp(), n(sn(t, "network-request-failed"));
          },
          timeout: wS.get(),
        });
    }
    if (
      !(
        (i = (r = on().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = on().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = eS("iframefcb");
      return (
        (on()[a] = () => {
          gapi.load ? o() : n(sn(t, "network-request-failed"));
        }),
        ZA(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((oa = null), e);
  });
}
let oa = null;
function ES(t) {
  return (oa = oa || bS(t)), oa;
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
 */ const TS = new so(5e3, 15e3),
  IS = "__/auth/iframe",
  AS = "emulator/auth/iframe",
  SS = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  kS = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function CS(t) {
  const e = t.config;
  se(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? Id(e, AS) : `https://${t.config.authDomain}/${IS}`,
    r = { apiKey: e.apiKey, appName: t.name, v: io },
    i = kS.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${ro(r).slice(1)}`;
}
async function qS(t) {
  const e = await ES(t),
    n = on().gapi;
  return (
    se(n, t, "internal-error"),
    e.open(
      {
        where: document.body,
        url: CS(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: SS,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = sn(t, "network-request-failed"),
            a = on().setTimeout(() => {
              s(o);
            }, TS.get());
          function l() {
            on().clearTimeout(a), i(r);
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
 */ const xS = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  RS = 500,
  PS = 600,
  OS = "_blank",
  DS = "http://localhost";
class yp {
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
function NS(t, e, n, r = RS, i = PS) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, xS), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    c = vt().toLowerCase();
  n && (a = Rv(c) ? OS : n), xv(c) && ((e = e || DS), (l.scrollbars = "yes"));
  const u = Object.entries(l).reduce((h, [f, g]) => `${h}${f}=${g},`, "");
  if (kA(c) && a !== "_self") return LS(e || "", a), new yp(null);
  const d = window.open(e || "", a, u);
  se(d, t, "popup-blocked");
  try {
    d.focus();
  } catch {}
  return new yp(d);
}
function LS(t, e) {
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
 */ const MS = "__/auth/handler",
  $S = "emulator/auth/handler";
function _p(t, e, n, r, i, s) {
  se(t.config.authDomain, t, "auth-domain-config-required"),
    se(t.config.apiKey, t, "invalid-api-key");
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: io,
    eventId: i,
  };
  if (e instanceof Cd) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ""),
      QT(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [l, c] of Object.entries(s || {})) o[l] = c;
  }
  if (e instanceof oo) {
    const l = e.getScopes().filter((c) => c !== "");
    l.length > 0 && (o.scopes = l.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
  return `${VS(t)}?${ro(a).slice(1)}`;
}
function VS({ config: t }) {
  return t.emulator ? Id(t, $S) : `https://${t.authDomain}/${MS}`;
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
 */ const Cc = "webStorageSupport";
class FS {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = jv),
      (this._completeRedirectFn = dS),
      (this._overrideRedirectResult = lS);
  }
  async _openPopup(e, n, r, i) {
    var s;
    In(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = _p(e, n, r, gu(), i);
    return NS(e, o, qd());
  }
  async _openRedirect(e, n, r, i) {
    return (
      await this._originValidation(e),
      BA(_p(e, n, r, gu(), i)),
      new Promise(() => {})
    );
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (In(s, "If manager is not set, promise should be"), s);
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
    const n = await qS(e),
      r = new fS(e);
    return (
      n.register(
        "authEvent",
        (i) => (
          se(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"),
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
      Cc,
      { type: Cc },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[Cc];
        o !== void 0 && n(!!o), ln(e, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = yS(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Lv() || Sd() || gl();
  }
}
const US = FS;
var wp = "@firebase/auth",
  bp = "0.20.7";
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
 */ class BS {
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
    se(
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
 */ function jS(t) {
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
function HS(t) {
  qi(
    new Br(
      "auth",
      (e, { options: n }) => {
        const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("heartbeat"),
          { apiKey: s, authDomain: o } = r.options;
        return ((a, l) => {
          se(s && !s.includes(":"), "invalid-api-key", { appName: a.name }),
            se(!(o != null && o.includes(":")), "argument-error", {
              appName: a.name,
            });
          const c = {
              apiKey: s,
              authDomain: o,
              clientPlatform: t,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: Mv(t),
            },
            u = new RA(a, l, c);
          return lA(u, n), u;
        })(r, i);
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider("auth-internal").initialize();
      })
  ),
    qi(
      new Br(
        "auth-internal",
        (e) => {
          const n = kd(e.getProvider("auth").getImmediate());
          return ((r) => new BS(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    sr(wp, bp, jS(t)),
    sr(wp, bp, "esm2017");
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
 */ function Ki(t = _v()) {
  const e = bd(t, "auth");
  return e.isInitialized()
    ? e.getImmediate()
    : aA(t, { popupRedirectResolver: US, persistence: [XA, VA, jv] });
}
HS("Browser");
var zS =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  W,
  Rd = Rd || {},
  re = zS || self;
function qa() {}
function _l(t) {
  var e = typeof t;
  return (
    (e = e != "object" ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
    e == "array" || (e == "object" && typeof t.length == "number")
  );
}
function co(t) {
  var e = typeof t;
  return (e == "object" && t != null) || e == "function";
}
function WS(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, qc) && t[qc]) || (t[qc] = ++KS)
  );
}
var qc = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  KS = 0;
function GS(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function QS(t, e, n) {
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
function pt(t, e, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (pt = GS)
      : (pt = QS),
    pt.apply(null, arguments)
  );
}
function Uo(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), t.apply(this, r);
  };
}
function lt(t, e) {
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
function dr() {
  (this.s = this.s), (this.o = this.o);
}
var YS = 0;
dr.prototype.s = !1;
dr.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), YS != 0) && WS(this);
};
dr.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const Xv = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == "string")
        return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function Pd(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function Ep(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (_l(r)) {
      const i = t.length || 0,
        s = r.length || 0;
      t.length = i + s;
      for (let o = 0; o < s; o++) t[i + o] = r[o];
    } else t.push(r);
  }
}
function mt(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
mt.prototype.h = function () {
  this.defaultPrevented = !0;
};
var XS = (function () {
  if (!re.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
  try {
    re.addEventListener("test", qa, e), re.removeEventListener("test", qa, e);
  } catch {}
  return t;
})();
function xa(t) {
  return /^[\s\xa0]*$/.test(t);
}
var Tp = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function xc(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function wl() {
  var t = re.navigator;
  return t && (t = t.userAgent) ? t : "";
}
function tn(t) {
  return wl().indexOf(t) != -1;
}
function Od(t) {
  return Od[" "](t), t;
}
Od[" "] = qa;
function JS(t) {
  var e = tk;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var ZS = tn("Opera"),
  Ri = tn("Trident") || tn("MSIE"),
  Jv = tn("Edge"),
  yu = Jv || Ri,
  Zv =
    tn("Gecko") &&
    !(wl().toLowerCase().indexOf("webkit") != -1 && !tn("Edge")) &&
    !(tn("Trident") || tn("MSIE")) &&
    !tn("Edge"),
  ek = wl().toLowerCase().indexOf("webkit") != -1 && !tn("Edge");
function ey() {
  var t = re.document;
  return t ? t.documentMode : void 0;
}
var Ra;
e: {
  var Rc = "",
    Pc = (function () {
      var t = wl();
      if (Zv) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (Jv) return /Edge\/([\d\.]+)/.exec(t);
      if (Ri) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (ek) return /WebKit\/(\S+)/.exec(t);
      if (ZS) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((Pc && (Rc = Pc ? Pc[1] : ""), Ri)) {
    var Oc = ey();
    if (Oc != null && Oc > parseFloat(Rc)) {
      Ra = String(Oc);
      break e;
    }
  }
  Ra = Rc;
}
var tk = {};
function nk() {
  return JS(function () {
    let t = 0;
    const e = Tp(String(Ra)).split("."),
      n = Tp("9").split("."),
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
          xc(
            i[1].length == 0 ? 0 : parseInt(i[1], 10),
            s[1].length == 0 ? 0 : parseInt(s[1], 10)
          ) ||
          xc(i[2].length == 0, s[2].length == 0) ||
          xc(i[2], s[2])),
          (i = i[3]),
          (s = s[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var _u;
if (re.document && Ri) {
  var Ip = ey();
  _u = Ip || parseInt(Ra, 10) || void 0;
} else _u = void 0;
var rk = _u;
function Us(t, e) {
  if (
    (mt.call(this, t ? t.type : ""),
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
      if (Zv) {
        e: {
          try {
            Od(e.nodeName);
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
          : ik[t.pointerType] || ""),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Us.X.h.call(this);
  }
}
lt(Us, mt);
var ik = { 2: "touch", 3: "pen", 4: "mouse" };
Us.prototype.h = function () {
  Us.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var uo = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  sk = 0;
function ok(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ha = i),
    (this.key = ++sk),
    (this.ba = this.ea = !1);
}
function bl(t) {
  (t.ba = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.ha = null);
}
function Dd(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function ty(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const Ap =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function ny(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < Ap.length; s++)
      (n = Ap[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function El(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
El.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = bu(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new ok(e, this.src, s, !!r, i)), (e.ea = n), t.push(e)),
    e
  );
};
function wu(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = Xv(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (bl(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function bu(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.ba && s.listener == e && s.capture == !!n && s.ha == r) return i;
  }
  return -1;
}
var Nd = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Dc = {};
function ry(t, e, n, r, i) {
  if (r && r.once) return sy(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) ry(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = $d(n)),
    t && t[uo] ? t.N(e, n, co(r) ? !!r.capture : !!r, i) : iy(t, e, n, !1, r, i)
  );
}
function iy(t, e, n, r, i, s) {
  if (!e) throw Error("Invalid event type");
  var o = co(i) ? !!i.capture : !!i,
    a = Md(t);
  if ((a || (t[Nd] = a = new El(t)), (n = a.add(e, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = ak()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    XS || (i = o),
      i === void 0 && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(ay(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function ak() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = lk;
  return t;
}
function sy(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) sy(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = $d(n)),
    t && t[uo] ? t.O(e, n, co(r) ? !!r.capture : !!r, i) : iy(t, e, n, !0, r, i)
  );
}
function oy(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) oy(t, e[s], n, r, i);
  else
    (r = co(r) ? !!r.capture : !!r),
      (n = $d(n)),
      t && t[uo]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = bu(s, n, r, i)),
            -1 < n &&
              (bl(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = Md(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = bu(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && Ld(n));
}
function Ld(t) {
  if (typeof t != "number" && t && !t.ba) {
    var e = t.src;
    if (e && e[uo]) wu(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(ay(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = Md(e))
          ? (wu(n, t), n.h == 0 && ((n.src = null), (e[Nd] = null)))
          : bl(t);
    }
  }
}
function ay(t) {
  return t in Dc ? Dc[t] : (Dc[t] = "on" + t);
}
function lk(t, e) {
  if (t.ba) t = !0;
  else {
    e = new Us(e, this);
    var n = t.listener,
      r = t.ha || t.src;
    t.ea && Ld(t), (t = n.call(r, e));
  }
  return t;
}
function Md(t) {
  return (t = t[Nd]), t instanceof El ? t : null;
}
var Nc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function $d(t) {
  return typeof t == "function"
    ? t
    : (t[Nc] ||
        (t[Nc] = function (e) {
          return t.handleEvent(e);
        }),
      t[Nc]);
}
function Je() {
  dr.call(this), (this.i = new El(this)), (this.P = this), (this.I = null);
}
lt(Je, dr);
Je.prototype[uo] = !0;
Je.prototype.removeEventListener = function (t, e, n, r) {
  oy(this, t, e, n, r);
};
function ot(t, e) {
  var n,
    r = t.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((t = t.P), (r = e.type || e), typeof e == "string")) e = new mt(e, t);
  else if (e instanceof mt) e.target = e.target || t;
  else {
    var i = e;
    (e = new mt(r, t)), ny(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = Bo(o, r, !0, e) && i;
    }
  if (
    ((o = e.g = t), (i = Bo(o, r, !0, e) && i), (i = Bo(o, r, !1, e) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = Bo(o, r, !1, e) && i);
}
Je.prototype.M = function () {
  if ((Je.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) bl(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.I = null;
};
Je.prototype.N = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
Je.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function Bo(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        l = o.ha || o.src;
      o.ea && wu(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Vd = re.JSON.stringify;
function ck() {
  var t = uy;
  let e = null;
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  );
}
class uk {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = ly.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var ly = new (class {
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
  () => new dk(),
  (t) => t.reset()
);
class dk {
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
function hk(t) {
  re.setTimeout(() => {
    throw t;
  }, 0);
}
function cy(t, e) {
  Eu || fk(), Tu || (Eu(), (Tu = !0)), uy.add(t, e);
}
var Eu;
function fk() {
  var t = re.Promise.resolve(void 0);
  Eu = function () {
    t.then(pk);
  };
}
var Tu = !1,
  uy = new uk();
function pk() {
  for (var t; (t = ck()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      hk(n);
    }
    var e = ly;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Tu = !1;
}
function Tl(t, e) {
  Je.call(this),
    (this.h = t || 1),
    (this.g = e || re),
    (this.j = pt(this.kb, this)),
    (this.l = Date.now());
}
lt(Tl, Je);
W = Tl.prototype;
W.ca = !1;
W.R = null;
W.kb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        ot(this, "tick"),
        this.ca && (Fd(this), this.start()));
  }
};
W.start = function () {
  (this.ca = !0),
    this.R ||
      ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Fd(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
W.M = function () {
  Tl.X.M.call(this), Fd(this), delete this.g;
};
function Ud(t, e, n) {
  if (typeof t == "function") n && (t = pt(t, n));
  else if (t && typeof t.handleEvent == "function") t = pt(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : re.setTimeout(t, e || 0);
}
function dy(t) {
  t.g = Ud(() => {
    (t.g = null), t.i && ((t.i = !1), dy(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class mk extends dr {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : dy(this);
  }
  M() {
    super.M(),
      this.g &&
        (re.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function Bs(t) {
  dr.call(this), (this.h = t), (this.g = {});
}
lt(Bs, dr);
var Sp = [];
function hy(t, e, n, r) {
  Array.isArray(n) || (n && (Sp[0] = n.toString()), (n = Sp));
  for (var i = 0; i < n.length; i++) {
    var s = ry(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function fy(t) {
  Dd(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && Ld(e);
    },
    t
  ),
    (t.g = {});
}
Bs.prototype.M = function () {
  Bs.X.M.call(this), fy(this);
};
Bs.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Il() {
  this.g = !0;
}
Il.prototype.Aa = function () {
  this.g = !1;
};
function gk(t, e, n, r, i, s) {
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
function vk(t, e, n, r, i, s, o) {
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
function ci(t, e, n, r) {
  t.info(function () {
    return "XMLHTTP TEXT (" + e + "): " + _k(t, n) + (r ? " " + r : "");
  });
}
function yk(t, e) {
  t.info(function () {
    return "TIMEOUT: " + e;
  });
}
Il.prototype.info = function () {};
function _k(t, e) {
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
    return Vd(n);
  } catch {
    return e;
  }
}
var Yr = {},
  kp = null;
function Al() {
  return (kp = kp || new Je());
}
Yr.Oa = "serverreachability";
function py(t) {
  mt.call(this, Yr.Oa, t);
}
lt(py, mt);
function js(t) {
  const e = Al();
  ot(e, new py(e));
}
Yr.STAT_EVENT = "statevent";
function my(t, e) {
  mt.call(this, Yr.STAT_EVENT, t), (this.stat = e);
}
lt(my, mt);
function Tt(t) {
  const e = Al();
  ot(e, new my(e, t));
}
Yr.Pa = "timingevent";
function gy(t, e) {
  mt.call(this, Yr.Pa, t), (this.size = e);
}
lt(gy, mt);
function ho(t, e) {
  if (typeof t != "function")
    throw Error("Fn must not be null and must be a function");
  return re.setTimeout(function () {
    t();
  }, e);
}
var Sl = {
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
  vy = {
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
function Bd() {}
Bd.prototype.h = null;
function Cp(t) {
  return t.h || (t.h = t.i());
}
function yy() {}
var fo = { OPEN: "a", pb: "b", Ma: "c", Bb: "d" };
function jd() {
  mt.call(this, "d");
}
lt(jd, mt);
function Hd() {
  mt.call(this, "c");
}
lt(Hd, mt);
var Iu;
function kl() {}
lt(kl, Bd);
kl.prototype.g = function () {
  return new XMLHttpRequest();
};
kl.prototype.i = function () {
  return {};
};
Iu = new kl();
function po(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = r || 1),
    (this.S = new Bs(this)),
    (this.O = wk),
    (t = yu ? 125 : void 0),
    (this.T = new Tl(t)),
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
    (this.h = new _y());
}
function _y() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var wk = 45e3,
  Au = {},
  Pa = {};
W = po.prototype;
W.setTimeout = function (t) {
  this.O = t;
};
function Su(t, e, n) {
  (t.K = 1), (t.v = ql(An(e))), (t.s = n), (t.P = !0), wy(t, null);
}
function wy(t, e) {
  (t.F = Date.now()), mo(t), (t.A = An(t.v));
  var n = t.A,
    r = t.U;
  Array.isArray(r) || (r = [String(r)]),
    Cy(n.i, "t", r),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new _y()),
    (t.g = Qy(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new mk(pt(t.Ka, t, t.g), t.N)),
    hy(t.S, t.g, "readystatechange", t.hb),
    (e = t.H ? ty(t.H) : {}),
    t.s
      ? (t.u || (t.u = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = "GET"), t.g.da(t.A, t.u, null, e)),
    js(),
    gk(t.j, t.u, t.A, t.m, t.U, t.s);
}
W.hb = function (t) {
  t = t.target;
  const e = this.L;
  e && vn(t) == 3 ? e.l() : this.Ka(t);
};
W.Ka = function (t) {
  try {
    if (t == this.g)
      e: {
        const u = vn(this.g);
        var e = this.g.Ea();
        const d = this.g.aa();
        if (
          !(3 > u) &&
          (u != 3 || yu || (this.g && (this.h.h || this.g.fa() || Pp(this.g))))
        ) {
          this.I || u != 4 || e == 7 || (e == 8 || 0 >= d ? js(3) : js(2)),
            Cl(this);
          var n = this.g.aa();
          this.Y = n;
          t: if (by(this)) {
            var r = Pp(this.g);
            t = "";
            var i = r.length,
              s = vn(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Rr(this), _s(this);
                var o = "";
                break t;
              }
              this.h.i = new re.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0),
                (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            r.splice(0, i), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.fa();
          if (
            ((this.i = n == 200),
            vk(this.j, this.u, this.A, this.m, this.U, u, n),
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
                    !xa(a)
                  ) {
                    var c = a;
                    break t;
                  }
                }
                c = null;
              }
              if ((n = c))
                ci(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.J = !0),
                  ku(this, n);
              else {
                (this.i = !1), (this.o = 3), Tt(12), Rr(this), _s(this);
                break e;
              }
            }
            this.P
              ? (Ey(this, u, o),
                yu &&
                  this.i &&
                  u == 3 &&
                  (hy(this.S, this.T, "tick", this.gb), this.T.start()))
              : (ci(this.j, this.m, o, null), ku(this, o)),
              u == 4 && Rr(this),
              this.i &&
                !this.I &&
                (u == 4 ? zy(this.l, this) : ((this.i = !1), mo(this)));
          } else
            n == 400 && 0 < o.indexOf("Unknown SID")
              ? ((this.o = 3), Tt(12))
              : ((this.o = 0), Tt(13)),
              Rr(this),
              _s(this);
        }
      }
  } catch {
  } finally {
  }
};
function by(t) {
  return t.g ? t.u == "GET" && t.K != 2 && t.l.Da : !1;
}
function Ey(t, e, n) {
  let r = !0,
    i;
  for (; !t.I && t.C < n.length; )
    if (((i = bk(t, n)), i == Pa)) {
      e == 4 && ((t.o = 4), Tt(14), (r = !1)),
        ci(t.j, t.m, null, "[Incomplete Response]");
      break;
    } else if (i == Au) {
      (t.o = 4), Tt(15), ci(t.j, t.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else ci(t.j, t.m, i, null), ku(t, i);
  by(t) && i != Pa && i != Au && ((t.h.g = ""), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), Tt(16), (r = !1)),
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
          Xd(e),
          (e.K = !0),
          Tt(11)))
      : (ci(t.j, t.m, n, "[Invalid Chunked Response]"), Rr(t), _s(t));
}
W.gb = function () {
  if (this.g) {
    var t = vn(this.g),
      e = this.g.fa();
    this.C < e.length &&
      (Cl(this), Ey(this, t, e), this.i && t != 4 && mo(this));
  }
};
function bk(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? Pa
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? Au
        : ((r += 1),
          r + n > e.length ? Pa : ((e = e.substr(r, n)), (t.C = r + n), e)));
}
W.cancel = function () {
  (this.I = !0), Rr(this);
};
function mo(t) {
  (t.V = Date.now() + t.O), Ty(t, t.O);
}
function Ty(t, e) {
  if (t.B != null) throw Error("WatchDog timer not null");
  t.B = ho(pt(t.fb, t), e);
}
function Cl(t) {
  t.B && (re.clearTimeout(t.B), (t.B = null));
}
W.fb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (yk(this.j, this.A),
      this.K != 2 && (js(), Tt(17)),
      Rr(this),
      (this.o = 2),
      _s(this))
    : Ty(this, this.V - t);
};
function _s(t) {
  t.l.G == 0 || t.I || zy(t.l, t);
}
function Rr(t) {
  Cl(t);
  var e = t.L;
  e && typeof e.na == "function" && e.na(),
    (t.L = null),
    Fd(t.T),
    fy(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function ku(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || Cu(n.h, t))) {
      if (!t.J && Cu(n.h, t) && n.G == 3) {
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
                if (n.g.F + 3e3 < t.F) Na(n), Pl(n);
                else break e;
              Yd(n), Tt(18);
            }
          } else
            (n.Ba = i[1]),
              0 < n.Ba - n.T &&
                37500 > i[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = ho(pt(n.bb, n), 6e3));
          if (1 >= Ry(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else Pr(n, 11);
      } else if (((t.J || n.g == t) && Na(n), !xa(e)))
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
                    s.h && (zd(s, s.h), (s.h = null)));
                }
                if (r.D) {
                  const y = f.g
                    ? f.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  y && ((r.za = y), Ve(r.F, r.D, y));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ &&
                  ((n.P = Date.now() - t.F),
                  n.j.info("Handshake RTT: " + n.P + "ms")),
                (r = n);
              var o = t;
              if (((r.sa = Gy(r, r.H ? r.ka : null, r.V)), o.J)) {
                Py(r.h, o);
                var a = o,
                  l = r.J;
                l && a.setTimeout(l), a.B && (Cl(a), mo(a)), (r.g = o);
              } else jy(r);
              0 < n.i.length && Ol(n);
            } else (c[0] != "stop" && c[0] != "close") || Pr(n, 7);
          else
            n.G == 3 &&
              (c[0] == "stop" || c[0] == "close"
                ? c[0] == "stop"
                  ? Pr(n, 7)
                  : Qd(n)
                : c[0] != "noop" && n.l && n.l.wa(c),
              (n.A = 0));
        }
    }
    js(4);
  } catch {}
}
function Ek(t) {
  if (t.W && typeof t.W == "function") return t.W();
  if (
    (typeof Map < "u" && t instanceof Map) ||
    (typeof Set < "u" && t instanceof Set)
  )
    return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (_l(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function Tk(t) {
  if (t.oa && typeof t.oa == "function") return t.oa();
  if (!t.W || typeof t.W != "function") {
    if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < "u" && t instanceof Set)) {
      if (_l(t) || typeof t == "string") {
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
function Iy(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (_l(t) || typeof t == "string")
    Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = Tk(t), r = Ek(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var Ay = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function Ik(t, e) {
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
function Mr(t, e) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    t instanceof Mr)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      Oa(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      Da(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new Hs();
    (n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      qp(this, n),
      (this.o = t.o);
  } else
    t && (n = String(t).match(Ay))
      ? ((this.h = !!e),
        Oa(this, n[1] || "", !0),
        (this.s = cs(n[2] || "")),
        (this.g = cs(n[3] || "", !0)),
        Da(this, n[4]),
        (this.l = cs(n[5] || "", !0)),
        qp(this, n[6] || "", !0),
        (this.o = cs(n[7] || "")))
      : ((this.h = !!e), (this.i = new Hs(null, this.h)));
}
Mr.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(us(e, xp, !0), ":");
  var n = this.g;
  return (
    (n || e == "file") &&
      (t.push("//"),
      (e = this.s) && t.push(us(e, xp, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && t.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && t.push("/"),
      t.push(us(n, n.charAt(0) == "/" ? kk : Sk, !0))),
    (n = this.i.toString()) && t.push("?", n),
    (n = this.o) && t.push("#", us(n, qk)),
    t.join("")
  );
};
function An(t) {
  return new Mr(t);
}
function Oa(t, e, n) {
  (t.j = n ? cs(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
}
function Da(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.m = e;
  } else t.m = null;
}
function qp(t, e, n) {
  e instanceof Hs
    ? ((t.i = e), xk(t.i, t.h))
    : (n || (e = us(e, Ck)), (t.i = new Hs(e, t.h)));
}
function Ve(t, e, n) {
  t.i.set(e, n);
}
function ql(t) {
  return (
    Ve(
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
function cs(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function us(t, e, n) {
  return typeof t == "string"
    ? ((t = encodeURI(t).replace(e, Ak)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function Ak(t) {
  return (
    (t = t.charCodeAt(0)),
    "%" + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  );
}
var xp = /[#\/\?@]/g,
  Sk = /[#\?:]/g,
  kk = /[#\?]/g,
  Ck = /[#\?@]/g,
  qk = /#/g;
function Hs(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function hr(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      Ik(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
W = Hs.prototype;
W.add = function (t, e) {
  hr(this), (this.i = null), (t = Gi(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Sy(t, e) {
  hr(t),
    (e = Gi(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function ky(t, e) {
  return hr(t), (e = Gi(t, e)), t.g.has(e);
}
W.forEach = function (t, e) {
  hr(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
W.oa = function () {
  hr(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
W.W = function (t) {
  hr(this);
  let e = [];
  if (typeof t == "string")
    ky(this, t) && (e = e.concat(this.g.get(Gi(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
W.set = function (t, e) {
  return (
    hr(this),
    (this.i = null),
    (t = Gi(this, t)),
    ky(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
W.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function Cy(t, e, n) {
  Sy(t, e),
    0 < n.length && ((t.i = null), t.g.set(Gi(t, e), Pd(n)), (t.h += n.length));
}
W.toString = function () {
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
function Gi(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function xk(t, e) {
  e &&
    !t.j &&
    (hr(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Sy(this, r), Cy(this, i, n));
    }, t)),
    (t.j = e);
}
var Rk = class {
  constructor(t, e) {
    (this.h = t), (this.g = e);
  }
};
function qy(t) {
  (this.l = t || Pk),
    re.PerformanceNavigationTiming
      ? ((t = re.performance.getEntriesByType("navigation")),
        (t =
          0 < t.length &&
          (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")))
      : (t = !!(re.g && re.g.Ga && re.g.Ga() && re.g.Ga().Zb)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var Pk = 10;
function xy(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function Ry(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function Cu(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function zd(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function Py(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
qy.prototype.cancel = function () {
  if (((this.i = Oy(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function Oy(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return Pd(t.i);
}
function Wd() {}
Wd.prototype.stringify = function (t) {
  return re.JSON.stringify(t, void 0);
};
Wd.prototype.parse = function (t) {
  return re.JSON.parse(t, void 0);
};
function Ok() {
  this.g = new Wd();
}
function Dk(t, e, n) {
  const r = n || "";
  try {
    Iy(t, function (i, s) {
      let o = i;
      co(i) && (o = Vd(i)), e.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function Nk(t, e) {
  const n = new Il();
  if (re.Image) {
    const r = new Image();
    (r.onload = Uo(jo, n, r, "TestLoadImage: loaded", !0, e)),
      (r.onerror = Uo(jo, n, r, "TestLoadImage: error", !1, e)),
      (r.onabort = Uo(jo, n, r, "TestLoadImage: abort", !1, e)),
      (r.ontimeout = Uo(jo, n, r, "TestLoadImage: timeout", !1, e)),
      re.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function jo(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch {}
}
function go(t) {
  (this.l = t.$b || null), (this.j = t.ib || !1);
}
lt(go, Bd);
go.prototype.g = function () {
  return new xl(this.l, this.j);
};
go.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function xl(t, e) {
  Je.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = Kd),
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
lt(xl, Je);
var Kd = 0;
W = xl.prototype;
W.open = function (t, e) {
  if (this.readyState != Kd)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = t), (this.B = e), (this.readyState = 1), zs(this);
};
W.send = function (t) {
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
    (this.D || re)
      .fetch(new Request(this.B, e))
      .then(this.Va.bind(this), this.ga.bind(this));
};
W.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), vo(this)),
    (this.readyState = Kd);
};
W.Va = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      zs(this)),
    this.g && ((this.readyState = 3), zs(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      t.arrayBuffer().then(this.Ta.bind(this), this.ga.bind(this));
    else if (typeof re.ReadableStream < "u" && "body" in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      Dy(this);
    } else t.text().then(this.Ua.bind(this), this.ga.bind(this));
};
function Dy(t) {
  t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t));
}
W.Sa = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e);
    }
    t.done ? vo(this) : zs(this), this.readyState == 3 && Dy(this);
  }
};
W.Ua = function (t) {
  this.g && ((this.response = this.responseText = t), vo(this));
};
W.Ta = function (t) {
  this.g && ((this.response = t), vo(this));
};
W.ga = function () {
  this.g && vo(this);
};
function vo(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), zs(t);
}
W.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
W.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || "";
};
W.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function zs(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(xl.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (t) {
    this.m = t ? "include" : "same-origin";
  },
});
var Lk = re.JSON.parse;
function je(t) {
  Je.call(this),
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
    (this.J = Ny),
    (this.K = this.L = !1);
}
lt(je, Je);
var Ny = "",
  Mk = /^https?$/i,
  $k = ["POST", "PUT"];
W = je.prototype;
W.da = function (t, e, n, r) {
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
    (this.g = this.u ? this.u.g() : Iu.g()),
    (this.C = this.u ? Cp(this.u) : Cp(Iu)),
    (this.g.onreadystatechange = pt(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (s) {
    Rp(this, s);
    return;
  }
  if (((t = n || ""), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type")),
    (i = re.FormData && t instanceof re.FormData),
    !(0 <= Xv($k, e)) ||
      r ||
      i ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.J && (this.g.responseType = this.J),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    $y(this),
      0 < this.B &&
        ((this.K = Vk(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = pt(this.qa, this)))
          : (this.A = Ud(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    Rp(this, s);
  }
};
function Vk(t) {
  return Ri && nk() && typeof t.timeout == "number" && t.ontimeout !== void 0;
}
W.qa = function () {
  typeof Rd < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    ot(this, "timeout"),
    this.abort(8));
};
function Rp(t, e) {
  (t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    Ly(t),
    Rl(t);
}
function Ly(t) {
  t.D || ((t.D = !0), ot(t, "complete"), ot(t, "error"));
}
W.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    ot(this, "complete"),
    ot(this, "abort"),
    Rl(this));
};
W.M = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Rl(this, !0)),
    je.X.M.call(this);
};
W.Ha = function () {
  this.s || (this.F || this.v || this.l ? My(this) : this.eb());
};
W.eb = function () {
  My(this);
};
function My(t) {
  if (t.h && typeof Rd < "u" && (!t.C[1] || vn(t) != 4 || t.aa() != 2)) {
    if (t.v && vn(t) == 4) Ud(t.Ha, 0, t);
    else if ((ot(t, "readystatechange"), vn(t) == 4)) {
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
            var i = String(t.H).match(Ay)[1] || null;
            if (!i && re.self && re.self.location) {
              var s = re.self.location.protocol;
              i = s.substr(0, s.length - 1);
            }
            r = !Mk.test(i ? i.toLowerCase() : "");
          }
          n = r;
        }
        if (n) ot(t, "complete"), ot(t, "success");
        else {
          t.m = 6;
          try {
            var o = 2 < vn(t) ? t.g.statusText : "";
          } catch {
            o = "";
          }
          (t.j = o + " [" + t.aa() + "]"), Ly(t);
        }
      } finally {
        Rl(t);
      }
    }
  }
}
function Rl(t, e) {
  if (t.g) {
    $y(t);
    const n = t.g,
      r = t.C[0] ? qa : null;
    (t.g = null), (t.C = null), e || ot(t, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function $y(t) {
  t.g && t.K && (t.g.ontimeout = null),
    t.A && (re.clearTimeout(t.A), (t.A = null));
}
function vn(t) {
  return t.g ? t.g.readyState : 0;
}
W.aa = function () {
  try {
    return 2 < vn(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
W.fa = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
W.Ra = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), Lk(e);
  }
};
function Pp(t) {
  try {
    if (!t.g) return null;
    if ("response" in t.g) return t.g.response;
    switch (t.J) {
      case Ny:
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
W.Ea = function () {
  return this.m;
};
W.Na = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function Vy(t) {
  let e = "";
  return (
    Dd(t, function (n, r) {
      (e += r),
        (e += ":"),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function Gd(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = Vy(n)),
    typeof t == "string"
      ? n != null && encodeURIComponent(String(n))
      : Ve(t, e, n));
}
function is(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function Fy(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new Il()),
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
    (this.Ya = is("failFast", !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Wa = is("baseRetryDelayMs", 5e3, t)),
    (this.ab = is("retryDelaySeedMs", 1e4, t)),
    (this.Za = is("forwardChannelMaxRetries", 2, t)),
    (this.ta = is("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Yb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ""),
    (this.h = new qy(t && t.concurrentRequestLimit)),
    (this.Fa = new Ok()),
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
W = Fy.prototype;
W.ma = 8;
W.G = 1;
function Qd(t) {
  if ((Uy(t), t.G == 3)) {
    var e = t.U++,
      n = An(t.F);
    Ve(n, "SID", t.I),
      Ve(n, "RID", e),
      Ve(n, "TYPE", "terminate"),
      yo(t, n),
      (e = new po(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = ql(An(n))),
      (n = !1),
      re.navigator &&
        re.navigator.sendBeacon &&
        (n = re.navigator.sendBeacon(e.v.toString(), "")),
      !n && re.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = Qy(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      mo(e);
  }
  Ky(t);
}
function Pl(t) {
  t.g && (Xd(t), t.g.cancel(), (t.g = null));
}
function Uy(t) {
  Pl(t),
    t.u && (re.clearTimeout(t.u), (t.u = null)),
    Na(t),
    t.h.cancel(),
    t.m && (typeof t.m == "number" && re.clearTimeout(t.m), (t.m = null));
}
function Ol(t) {
  xy(t.h) || t.m || ((t.m = !0), cy(t.Ja, t), (t.C = 0));
}
function Fk(t, e) {
  return Ry(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Ya ? 0 : t.Za)
    ? !1
    : ((t.m = ho(pt(t.Ja, t, e), Wy(t, t.C))), t.C++, !0);
}
W.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const i = new po(this, this.j, t, void 0);
        let s = this.s;
        if (
          (this.S && (s ? ((s = ty(s)), ny(s, this.S)) : (s = this.S)),
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
        (e = By(this, i, e)),
          (n = An(this.F)),
          Ve(n, "RID", t),
          Ve(n, "CVER", 22),
          this.D && Ve(n, "X-HTTP-Session-Id", this.D),
          yo(this, n),
          s &&
            (this.N
              ? (e = "headers=" + encodeURIComponent(String(Vy(s))) + "&" + e)
              : this.o && Gd(n, this.o, s)),
          zd(this.h, i),
          this.Xa && Ve(n, "TYPE", "init"),
          this.O
            ? (Ve(n, "$req", e),
              Ve(n, "SID", "null"),
              (i.Z = !0),
              Su(i, n, null))
            : Su(i, n, e),
          (this.G = 2);
      }
    } else
      this.G == 3 &&
        (t ? Op(this, t) : this.i.length == 0 || xy(this.h) || Op(this));
};
function Op(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const r = An(t.F);
  Ve(r, "SID", t.I),
    Ve(r, "RID", n),
    Ve(r, "AID", t.T),
    yo(t, r),
    t.o && t.s && Gd(r, t.o, t.s),
    (n = new po(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = By(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())
    ),
    zd(t.h, n),
    Su(n, r, e);
}
function yo(t, e) {
  t.ia &&
    Dd(t.ia, function (n, r) {
      Ve(e, r, n);
    }),
    t.l &&
      Iy({}, function (n, r) {
        Ve(e, r, n);
      });
}
function By(t, e, n) {
  n = Math.min(t.i.length, n);
  var r = t.l ? pt(t.l.Qa, t.l, t) : null;
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
            Dk(u, o, "req" + c + "_");
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
function jy(t) {
  t.g || t.u || ((t.Z = 1), cy(t.Ia, t), (t.A = 0));
}
function Yd(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.Z++, (t.u = ho(pt(t.Ia, t), Wy(t, t.A))), t.A++, !0);
}
W.Ia = function () {
  if (
    ((this.u = null),
    Hy(this),
    this.$ && !(this.K || this.g == null || 0 >= this.P))
  ) {
    var t = 2 * this.P;
    this.j.info("BP detection timer enabled: " + t),
      (this.B = ho(pt(this.cb, this), t));
  }
};
W.cb = function () {
  this.B &&
    ((this.B = null),
    this.j.info("BP detection timeout reached."),
    this.j.info("Buffering proxy detected and switch to long-polling!"),
    (this.L = !1),
    (this.K = !0),
    Tt(10),
    Pl(this),
    Hy(this));
};
function Xd(t) {
  t.B != null && (re.clearTimeout(t.B), (t.B = null));
}
function Hy(t) {
  (t.g = new po(t, t.j, "rpc", t.Z)),
    t.o === null && (t.g.H = t.s),
    (t.g.N = 0);
  var e = An(t.sa);
  Ve(e, "RID", "rpc"),
    Ve(e, "SID", t.I),
    Ve(e, "CI", t.L ? "0" : "1"),
    Ve(e, "AID", t.T),
    Ve(e, "TYPE", "xmlhttp"),
    yo(t, e),
    t.o && t.s && Gd(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = ql(An(e))), (n.s = null), (n.P = !0), wy(n, t);
}
W.bb = function () {
  this.v != null && ((this.v = null), Pl(this), Yd(this), Tt(19));
};
function Na(t) {
  t.v != null && (re.clearTimeout(t.v), (t.v = null));
}
function zy(t, e) {
  var n = null;
  if (t.g == e) {
    Na(t), Xd(t), (t.g = null);
    var r = 2;
  } else if (Cu(t.h, e)) (n = e.D), Py(t.h, e), (r = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var i = t.C;
        (r = Al()), ot(r, new gy(r, n)), Ol(t);
      } else jy(t);
    else if (
      ((i = e.o),
      i == 3 ||
        (i == 0 && 0 < t.pa) ||
        !((r == 1 && Fk(t, e)) || (r == 2 && Yd(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), i)) {
        case 1:
          Pr(t, 5);
          break;
        case 4:
          Pr(t, 10);
          break;
        case 3:
          Pr(t, 6);
          break;
        default:
          Pr(t, 2);
      }
  }
}
function Wy(t, e) {
  let n = t.Wa + Math.floor(Math.random() * t.ab);
  return t.l || (n *= 2), n * e;
}
function Pr(t, e) {
  if ((t.j.info("Error code " + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var r = pt(t.jb, t);
    n ||
      ((n = new Mr("//www.google.com/images/cleardot.gif")),
      (re.location && re.location.protocol == "http") || Oa(n, "https"),
      ql(n)),
      Nk(n.toString(), r);
  } else Tt(2);
  (t.G = 0), t.l && t.l.va(e), Ky(t), Uy(t);
}
W.jb = function (t) {
  t
    ? (this.j.info("Successfully pinged google.com"), Tt(2))
    : (this.j.info("Failed to ping google.com"), Tt(1));
};
function Ky(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = Oy(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (Ep(t.la, e),
      Ep(t.la, t.i),
      (t.h.i.length = 0),
      Pd(t.i),
      (t.i.length = 0)),
      t.l.ua();
  }
}
function Gy(t, e, n) {
  var r = n instanceof Mr ? An(n) : new Mr(n, void 0);
  if (r.g != "") e && (r.g = e + "." + r.g), Da(r, r.m);
  else {
    var i = re.location;
    (r = i.protocol),
      (e = e ? e + "." + i.hostname : i.hostname),
      (i = +i.port);
    var s = new Mr(null, void 0);
    r && Oa(s, r), e && (s.g = e), i && Da(s, i), n && (s.l = n), (r = s);
  }
  return (
    (n = t.D),
    (e = t.za),
    n && e && Ve(r, n, e),
    Ve(r, "VER", t.ma),
    yo(t, r),
    r
  );
}
function Qy(t, e, n) {
  if (e && !t.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (e = n && t.Da && !t.ra ? new je(new go({ ib: !0 })) : new je(t.ra)),
    (e.L = t.H),
    e
  );
}
function Yy() {}
W = Yy.prototype;
W.xa = function () {};
W.wa = function () {};
W.va = function () {};
W.ua = function () {};
W.Qa = function () {};
function La() {
  if (Ri && !(10 <= Number(rk)))
    throw Error("Environmental error: no available transport.");
}
La.prototype.g = function (t, e) {
  return new $t(t, e);
};
function $t(t, e) {
  Je.call(this),
    (this.g = new Fy(e)),
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
    (t = e && e.Xb) && !xa(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !xa(e) &&
      ((this.g.D = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new Qi(this));
}
lt($t, Je);
$t.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  Tt(0),
    (t.V = e),
    (t.ia = n || {}),
    (t.L = t.Y),
    (t.F = Gy(t, null, t.V)),
    Ol(t);
};
$t.prototype.close = function () {
  Qd(this.g);
};
$t.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == "string") {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Vd(t)), (t = n));
  e.i.push(new Rk(e.$a++, t)), e.G == 3 && Ol(e);
};
$t.prototype.M = function () {
  (this.g.l = null),
    delete this.j,
    Qd(this.g),
    delete this.g,
    $t.X.M.call(this);
};
function Xy(t) {
  jd.call(this);
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
lt(Xy, jd);
function Jy() {
  Hd.call(this), (this.status = 1);
}
lt(Jy, Hd);
function Qi(t) {
  this.g = t;
}
lt(Qi, Yy);
Qi.prototype.xa = function () {
  ot(this.g, "a");
};
Qi.prototype.wa = function (t) {
  ot(this.g, new Xy(t));
};
Qi.prototype.va = function (t) {
  ot(this.g, new Jy());
};
Qi.prototype.ua = function () {
  ot(this.g, "b");
};
La.prototype.createWebChannel = La.prototype.g;
$t.prototype.send = $t.prototype.u;
$t.prototype.open = $t.prototype.m;
$t.prototype.close = $t.prototype.close;
Sl.NO_ERROR = 0;
Sl.TIMEOUT = 8;
Sl.HTTP_ERROR = 6;
vy.COMPLETE = "complete";
yy.EventType = fo;
fo.OPEN = "a";
fo.CLOSE = "b";
fo.ERROR = "c";
fo.MESSAGE = "d";
Je.prototype.listen = Je.prototype.N;
je.prototype.listenOnce = je.prototype.O;
je.prototype.getLastError = je.prototype.Na;
je.prototype.getLastErrorCode = je.prototype.Ea;
je.prototype.getStatus = je.prototype.aa;
je.prototype.getResponseJson = je.prototype.Ra;
je.prototype.getResponseText = je.prototype.fa;
je.prototype.send = je.prototype.da;
var Uk = function () {
    return new La();
  },
  Bk = function () {
    return Al();
  },
  Lc = Sl,
  jk = vy,
  Hk = Yr,
  Dp = {
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
  zk = go,
  Ho = yy,
  Wk = je;
const Np = "@firebase/firestore";
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
 */ class Ct {
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
(Ct.UNAUTHENTICATED = new Ct(null)),
  (Ct.GOOGLE_CREDENTIALS = new Ct("google-credentials-uid")),
  (Ct.FIRST_PARTY = new Ct("first-party-uid")),
  (Ct.MOCK_USER = new Ct("mock-user"));
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
 */ let Yi = "9.10.0";
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
 */ const Wr = new _d("@firebase/firestore");
function Lp() {
  return Wr.logLevel;
}
function Y(t, ...e) {
  if (Wr.logLevel <= ke.DEBUG) {
    const n = e.map(Jd);
    Wr.debug(`Firestore (${Yi}): ${t}`, ...n);
  }
}
function Sn(t, ...e) {
  if (Wr.logLevel <= ke.ERROR) {
    const n = e.map(Jd);
    Wr.error(`Firestore (${Yi}): ${t}`, ...n);
  }
}
function Mp(t, ...e) {
  if (Wr.logLevel <= ke.WARN) {
    const n = e.map(Jd);
    Wr.warn(`Firestore (${Yi}): ${t}`, ...n);
  }
}
function Jd(t) {
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
 */ function oe(t = "Unexpected state") {
  const e = `FIRESTORE (${Yi}) INTERNAL ASSERTION FAILED: ` + t;
  throw (Sn(e), new Error(e));
}
function Ne(t, e) {
  t || oe();
}
function ce(t, e) {
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
 */ const C = {
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
let j = class extends Dn {
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
 */ let _n = class {
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
 */ let Kk = class {
    constructor(e, n) {
      (this.user = n),
        (this.type = "OAuth"),
        (this.headers = new Map()),
        this.headers.set("Authorization", `Bearer ${e}`);
    }
  },
  Gk = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {}
    start(e, n) {
      e.enqueueRetryable(() => n(Ct.UNAUTHENTICATED));
    }
    shutdown() {}
  },
  Qk = class {
    constructor(e) {
      (this.t = e),
        (this.currentUser = Ct.UNAUTHENTICATED),
        (this.i = 0),
        (this.forceRefresh = !1),
        (this.auth = null);
    }
    start(e, n) {
      let r = this.i;
      const i = (l) =>
        this.i !== r ? ((r = this.i), n(l)) : Promise.resolve();
      let s = new _n();
      this.o = () => {
        this.i++,
          (this.currentUser = this.u()),
          s.resolve(),
          (s = new _n()),
          e.enqueueRetryable(() => i(this.currentUser));
      };
      const o = () => {
          const l = s;
          e.enqueueRetryable(async () => {
            await l.promise, await i(this.currentUser);
          });
        },
        a = (l) => {
          Y("FirebaseAuthCredentialsProvider", "Auth detected"),
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
              : (Y("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
                s.resolve(),
                (s = new _n()));
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
                  ? (Y(
                      "FirebaseAuthCredentialsProvider",
                      "getToken aborted due to token change."
                    ),
                    this.getToken())
                  : r
                  ? (Ne(typeof r.accessToken == "string"),
                    new Kk(r.accessToken, this.currentUser))
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
      return Ne(e === null || typeof e == "string"), new Ct(e);
    }
  },
  Yk = class {
    constructor(e, n, r, i) {
      (this.h = e),
        (this.l = n),
        (this.m = r),
        (this.g = i),
        (this.type = "FirstParty"),
        (this.user = Ct.FIRST_PARTY),
        (this.p = new Map());
    }
    I() {
      return this.g
        ? this.g()
        : (Ne(
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
  Xk = class {
    constructor(e, n, r, i) {
      (this.h = e), (this.l = n), (this.m = r), (this.g = i);
    }
    getToken() {
      return Promise.resolve(new Yk(this.h, this.l, this.m, this.g));
    }
    start(e, n) {
      e.enqueueRetryable(() => n(Ct.FIRST_PARTY));
    }
    shutdown() {}
    invalidateToken() {}
  },
  Jk = class {
    constructor(e) {
      (this.value = e),
        (this.type = "AppCheck"),
        (this.headers = new Map()),
        e &&
          e.length > 0 &&
          this.headers.set("x-firebase-appcheck", this.value);
    }
  };
class Zk {
  constructor(e) {
    (this.T = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.A = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        Y(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.A;
      return (
        (this.A = s.token),
        Y(
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
      Y("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.T.getImmediate({ optional: !0 });
          s
            ? i(s)
            : Y("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
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
                ? (Ne(typeof n.token == "string"),
                  (this.A = n.token),
                  new Jk(n.token))
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
 */ function eC(t) {
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
 */ let Zy = class {
  static R() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = eC(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
};
function Ce(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Pi(t, e, n) {
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
 */ class ze {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new j(
        C.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new j(
        C.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (e < -62135596800)
      throw new j(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new j(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  static now() {
    return ze.fromMillis(Date.now());
  }
  static fromDate(e) {
    return ze.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new ze(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? Ce(this.nanoseconds, e.nanoseconds)
      : Ce(this.seconds, e.seconds);
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
 */ class he {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new he(e);
  }
  static min() {
    return new he(new ze(0, 0));
  }
  static max() {
    return new he(new ze(253402300799, 999999999));
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
 */ class Ws {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && oe(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && oe(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return Ws.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Ws
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
class Me extends Ws {
  construct(e, n, r) {
    return new Me(e, n, r);
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
        throw new j(
          C.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new Me(n);
  }
  static emptyPath() {
    return new Me([]);
  }
}
const tC = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ht extends Ws {
  construct(e, n, r) {
    return new ht(e, n, r);
  }
  static isValidIdentifier(e) {
    return tC.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          ht.isValidIdentifier(e) || (e = "`" + e + "`"),
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
    return new ht(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new j(
          C.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = "");
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === "\\") {
        if (i + 1 === e.length)
          throw new j(
            C.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e
          );
        const l = e[i + 1];
        if (l !== "\\" && l !== "." && l !== "`")
          throw new j(
            C.INVALID_ARGUMENT,
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
      throw new j(C.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new ht(n);
  }
  static emptyPath() {
    return new ht([]);
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
 */ class J {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new J(Me.fromString(e));
  }
  static fromName(e) {
    return new J(Me.fromString(e).popFirst(5));
  }
  static empty() {
    return new J(Me.emptyPath());
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
    return e !== null && Me.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return Me.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new J(new Me(e.slice()));
  }
}
function nC(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = he.fromTimestamp(r === 1e9 ? new ze(n + 1, 0) : new ze(n, r));
  return new lr(i, J.empty(), e);
}
function rC(t) {
  return new lr(t.readTime, t.key, -1);
}
class lr {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new lr(he.min(), J.empty(), -1);
  }
  static max() {
    return new lr(he.max(), J.empty(), -1);
  }
}
function iC(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = J.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : Ce(t.largestBatchId, e.largestBatchId));
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
 */ const sC =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class oC {
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
 */ async function _o(t) {
  if (t.code !== C.FAILED_PRECONDITION || t.message !== sC) throw t;
  Y("LocalStore", "Unexpectedly lost primary lease");
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
 */ class P {
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
      this.callbackAttached && oe(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new P((r, i) => {
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
      return n instanceof P ? n : P.resolve(n);
    } catch (n) {
      return P.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : P.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : P.reject(n);
  }
  static resolve(e) {
    return new P((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new P((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new P((n, r) => {
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
    let n = P.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? P.resolve(i) : r()));
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
    return new P((r, i) => {
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
    return new P((r, i) => {
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
function wo(t) {
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
 */ class Zd {
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
 */ function $p(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Xr(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function e_(t) {
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
 */ Zd.at = -1;
class Ge {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || tt.EMPTY);
  }
  insert(e, n) {
    return new Ge(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, tt.BLACK, null, null)
    );
  }
  remove(e) {
    return new Ge(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, tt.BLACK, null, null)
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
    return new zo(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new zo(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new zo(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new zo(this.root, e, this.comparator, !0);
  }
}
class zo {
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
class tt {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? tt.RED),
      (this.left = i ?? tt.EMPTY),
      (this.right = s ?? tt.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new tt(
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
    if (this.left.isEmpty()) return tt.EMPTY;
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
        if (i.right.isEmpty()) return tt.EMPTY;
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
    const e = this.copy(null, null, tt.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, tt.RED, this.left.right, null);
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
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw oe();
    const e = this.left.check();
    if (e !== this.right.check()) throw oe();
    return e + (this.isRed() ? 0 : 1);
  }
}
(tt.EMPTY = null), (tt.RED = !0), (tt.BLACK = !1);
tt.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw oe();
  }
  get value() {
    throw oe();
  }
  get color() {
    throw oe();
  }
  get left() {
    throw oe();
  }
  get right() {
    throw oe();
  }
  copy(t, e, n, r, i) {
    return this;
  }
  insert(t, e, n) {
    return new tt(t, e);
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
 */ class We {
  constructor(e) {
    (this.comparator = e), (this.data = new Ge(this.comparator));
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
    return new Vp(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new Vp(this.data.getIteratorFrom(e));
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
    if (!(e instanceof We) || this.size !== e.size) return !1;
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
    const n = new We(this.comparator);
    return (n.data = e), n;
  }
}
class Vp {
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
 */ class Ht {
  constructor(e) {
    (this.fields = e), e.sort(ht.comparator);
  }
  static empty() {
    return new Ht([]);
  }
  unionWith(e) {
    let n = new We(ht.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new Ht(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return Pi(this.fields, e.fields, (n, r) => n.isEqual(r));
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
 */ class at {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = atob(e);
    return new at(n);
  }
  static fromUint8Array(e) {
    const n = (function (r) {
      let i = "";
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(e);
    return new at(n);
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
    return Ce(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
at.EMPTY_BYTE_STRING = new at("");
const aC = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function cr(t) {
  if ((Ne(!!t), typeof t == "string")) {
    let e = 0;
    const n = aC.exec(t);
    if ((Ne(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: Be(t.seconds), nanos: Be(t.nanos) };
}
function Be(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function Oi(t) {
  return typeof t == "string" ? at.fromBase64String(t) : at.fromUint8Array(t);
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
 */ function t_(t) {
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
function n_(t) {
  const e = t.mapValue.fields.__previous_value__;
  return t_(e) ? n_(e) : e;
}
function Ks(t) {
  const e = cr(t.mapValue.fields.__local_write_time__.timestampValue);
  return new ze(e.seconds, e.nanos);
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
 */ let lC = class {
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
  r_ = class qu {
    constructor(e, n) {
      (this.projectId = e), (this.database = n || "(default)");
    }
    static empty() {
      return new qu("", "");
    }
    get isDefaultDatabase() {
      return this.database === "(default)";
    }
    isEqual(e) {
      return (
        e instanceof qu &&
        e.projectId === this.projectId &&
        e.database === this.database
      );
    }
  };
function Dl(t) {
  return t == null;
}
function Ma(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function cC(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Ma(t) &&
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
 */ const Wo = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function Kr(t) {
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
    ? t_(t)
      ? 4
      : uC(t)
      ? 9007199254740991
      : 10
    : oe();
}
function cn(t, e) {
  if (t === e) return !0;
  const n = Kr(t);
  if (n !== Kr(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Ks(t).isEqual(Ks(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = cr(r.timestampValue),
          o = cr(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (r, i) {
        return Oi(r.bytesValue).isEqual(Oi(i.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (r, i) {
        return (
          Be(r.geoPointValue.latitude) === Be(i.geoPointValue.latitude) &&
          Be(r.geoPointValue.longitude) === Be(i.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (r, i) {
        if ("integerValue" in r && "integerValue" in i)
          return Be(r.integerValue) === Be(i.integerValue);
        if ("doubleValue" in r && "doubleValue" in i) {
          const s = Be(r.doubleValue),
            o = Be(i.doubleValue);
          return s === o ? Ma(s) === Ma(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return Pi(t.arrayValue.values || [], e.arrayValue.values || [], cn);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if ($p(s) !== $p(o)) return !1;
        for (const a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !cn(s[a], o[a])))
            return !1;
        return !0;
      })(t, e);
    default:
      return oe();
  }
}
function Gs(t, e) {
  return (t.values || []).find((n) => cn(n, e)) !== void 0;
}
function Di(t, e) {
  if (t === e) return 0;
  const n = Kr(t),
    r = Kr(e);
  if (n !== r) return Ce(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Ce(t.booleanValue, e.booleanValue);
    case 2:
      return (function (i, s) {
        const o = Be(i.integerValue || i.doubleValue),
          a = Be(s.integerValue || s.doubleValue);
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
      return Fp(t.timestampValue, e.timestampValue);
    case 4:
      return Fp(Ks(t), Ks(e));
    case 5:
      return Ce(t.stringValue, e.stringValue);
    case 6:
      return (function (i, s) {
        const o = Oi(i),
          a = Oi(s);
        return o.compareTo(a);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (i, s) {
        const o = i.split("/"),
          a = s.split("/");
        for (let l = 0; l < o.length && l < a.length; l++) {
          const c = Ce(o[l], a[l]);
          if (c !== 0) return c;
        }
        return Ce(o.length, a.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, s) {
        const o = Ce(Be(i.latitude), Be(s.latitude));
        return o !== 0 ? o : Ce(Be(i.longitude), Be(s.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (i, s) {
        const o = i.values || [],
          a = s.values || [];
        for (let l = 0; l < o.length && l < a.length; ++l) {
          const c = Di(o[l], a[l]);
          if (c) return c;
        }
        return Ce(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === Wo.mapValue && s === Wo.mapValue) return 0;
        if (i === Wo.mapValue) return 1;
        if (s === Wo.mapValue) return -1;
        const o = i.fields || {},
          a = Object.keys(o),
          l = s.fields || {},
          c = Object.keys(l);
        a.sort(), c.sort();
        for (let u = 0; u < a.length && u < c.length; ++u) {
          const d = Ce(a[u], c[u]);
          if (d !== 0) return d;
          const h = Di(o[a[u]], l[c[u]]);
          if (h !== 0) return h;
        }
        return Ce(a.length, c.length);
      })(t.mapValue, e.mapValue);
    default:
      throw oe();
  }
}
function Fp(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return Ce(t, e);
  const n = cr(t),
    r = cr(e),
    i = Ce(n.seconds, r.seconds);
  return i !== 0 ? i : Ce(n.nanos, r.nanos);
}
function _i(t) {
  return xu(t);
}
function xu(t) {
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
        const i = cr(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : "stringValue" in t
    ? t.stringValue
    : "bytesValue" in t
    ? Oi(t.bytesValue).toBase64()
    : "referenceValue" in t
    ? ((n = t.referenceValue), J.fromName(n).toString())
    : "geoPointValue" in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : "arrayValue" in t
    ? (function (r) {
        let i = "[",
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ","), (i += xu(o));
        return i + "]";
      })(t.arrayValue)
    : "mapValue" in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = "{",
          o = !0;
        for (const a of i)
          o ? (o = !1) : (s += ","), (s += `${a}:${xu(r.fields[a])}`);
        return s + "}";
      })(t.mapValue)
    : oe();
  var e, n;
}
function Up(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${
      t.database
    }/documents/${e.path.canonicalString()}`,
  };
}
function Ru(t) {
  return !!t && "integerValue" in t;
}
function eh(t) {
  return !!t && "arrayValue" in t;
}
function Bp(t) {
  return !!t && "nullValue" in t;
}
function jp(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function aa(t) {
  return !!t && "mapValue" in t;
}
function ws(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return Xr(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = ws(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = ws(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function uC(t) {
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
 */ class xt {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new xt({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !aa(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = ws(n);
  }
  setAll(e) {
    let n = ht.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n);
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = ws(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    aa(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return cn(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (aa(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    Xr(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new xt(ws(this.value));
  }
}
function i_(t) {
  const e = [];
  return (
    Xr(t.fields, (n, r) => {
      const i = new ht([n]);
      if (aa(r)) {
        const s = i_(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new Ht(e)
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
 */ class rt {
  constructor(e, n, r, i, s, o) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.data = s),
      (this.documentState = o);
  }
  static newInvalidDocument(e) {
    return new rt(e, 0, he.min(), he.min(), xt.empty(), 0);
  }
  static newFoundDocument(e, n, r) {
    return new rt(e, 1, n, he.min(), r, 0);
  }
  static newNoDocument(e, n) {
    return new rt(e, 2, n, he.min(), xt.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new rt(e, 3, n, he.min(), xt.empty(), 2);
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
      (this.data = xt.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = xt.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = he.min()), this;
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
      e instanceof rt &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new rt(
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
 */ class dC {
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
function Hp(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new dC(t, e, n, r, i, s, o);
}
function th(t) {
  const e = ce(t);
  if (e.ht === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters
        .map((r) => {
          return (
            (i = r).field.canonicalString() + i.op.toString() + _i(i.value)
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
      Dl(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => _i(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => _i(r)).join(","))),
      (e.ht = n);
  }
  return e.ht;
}
function hC(t) {
  let e = t.path.canonicalString();
  return (
    t.collectionGroup !== null &&
      (e += " collectionGroup=" + t.collectionGroup),
    t.filters.length > 0 &&
      (e += `, filters: [${t.filters
        .map((n) => {
          return `${(r = n).field.canonicalString()} ${r.op} ${_i(r.value)}`;
          var r;
        })
        .join(", ")}]`),
    Dl(t.limit) || (e += ", limit: " + t.limit),
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
      (e += t.startAt.position.map((n) => _i(n)).join(","))),
    t.endAt &&
      ((e += ", endAt: "),
      (e += t.endAt.inclusive ? "a:" : "b:"),
      (e += t.endAt.position.map((n) => _i(n)).join(","))),
    `Target(${e})`
  );
}
function nh(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let i = 0; i < t.orderBy.length; i++)
    if (!wC(t.orderBy[i], e.orderBy[i])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let i = 0; i < t.filters.length; i++)
    if (
      ((n = t.filters[i]),
      (r = e.filters[i]),
      n.op !== r.op || !n.field.isEqual(r.field) || !cn(n.value, r.value))
    )
      return !1;
  var n, r;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!Wp(t.startAt, e.startAt) &&
    Wp(t.endAt, e.endAt)
  );
}
function Pu(t) {
  return (
    J.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
class It extends class {} {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.lt(e, n, r)
        : new fC(e, n, r)
      : n === "array-contains"
      ? new gC(e, r)
      : n === "in"
      ? new vC(e, r)
      : n === "not-in"
      ? new yC(e, r)
      : n === "array-contains-any"
      ? new _C(e, r)
      : new It(e, n, r);
  }
  static lt(e, n, r) {
    return n === "in" ? new pC(e, r) : new mC(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.ft(Di(n, this.value))
      : n !== null && Kr(this.value) === Kr(n) && this.ft(Di(n, this.value));
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
        return oe();
    }
  }
  dt() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
}
class fC extends It {
  constructor(e, n, r) {
    super(e, n, r), (this.key = J.fromName(r.referenceValue));
  }
  matches(e) {
    const n = J.comparator(e.key, this.key);
    return this.ft(n);
  }
}
class pC extends It {
  constructor(e, n) {
    super(e, "in", n), (this.keys = s_("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class mC extends It {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = s_("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function s_(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => J.fromName(r.referenceValue));
}
class gC extends It {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return eh(n) && Gs(n.arrayValue, this.value);
  }
}
class vC extends It {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Gs(this.value.arrayValue, n);
  }
}
class yC extends It {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (Gs(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !Gs(this.value.arrayValue, n);
  }
}
class _C extends It {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!eh(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Gs(this.value.arrayValue, r))
    );
  }
}
class $a {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
let bs = class {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
};
function wC(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
function zp(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = J.comparator(J.fromName(o.referenceValue), n.key))
        : (r = Di(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Wp(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!cn(t.position[n], e.position[n])) return !1;
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
 */ class bo {
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
function bC(t, e, n, r, i, s, o, a) {
  return new bo(t, e, n, r, i, s, o, a);
}
function Nl(t) {
  return new bo(t);
}
function Kp(t) {
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
function o_(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function a_(t) {
  for (const e of t.filters) if (e.dt()) return e.field;
  return null;
}
function l_(t) {
  return t.collectionGroup !== null;
}
function Qs(t) {
  const e = ce(t);
  if (e._t === null) {
    e._t = [];
    const n = a_(e),
      r = o_(e);
    if (n !== null && r === null)
      n.isKeyField() || e._t.push(new bs(n)),
        e._t.push(new bs(ht.keyField(), "asc"));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy)
        e._t.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : "asc";
        e._t.push(new bs(ht.keyField(), s));
      }
    }
  }
  return e._t;
}
function kn(t) {
  const e = ce(t);
  if (!e.wt)
    if (e.limitType === "F")
      e.wt = Hp(
        e.path,
        e.collectionGroup,
        Qs(e),
        e.filters,
        e.limit,
        e.startAt,
        e.endAt
      );
    else {
      const n = [];
      for (const s of Qs(e)) {
        const o = s.dir === "desc" ? "asc" : "desc";
        n.push(new bs(s.field, o));
      }
      const r = e.endAt ? new $a(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new $a(e.startAt.position, e.startAt.inclusive) : null;
      e.wt = Hp(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e.wt;
}
function Ou(t, e, n) {
  return new bo(
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
function Ll(t, e) {
  return nh(kn(t), kn(e)) && t.limitType === e.limitType;
}
function c_(t) {
  return `${th(kn(t))}|lt:${t.limitType}`;
}
function Du(t) {
  return `Query(target=${hC(kn(t))}; limitType=${t.limitType})`;
}
function rh(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, r) {
      const i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : J.isDocumentKey(n.path)
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
            const a = zp(i, s, o);
            return i.inclusive ? a <= 0 : a < 0;
          })(n.startAt, Qs(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const a = zp(i, s, o);
            return i.inclusive ? a >= 0 : a > 0;
          })(n.endAt, Qs(n), r))
      );
    })(t, e)
  );
}
function EC(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function u_(t) {
  return (e, n) => {
    let r = !1;
    for (const i of Qs(t)) {
      const s = TC(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function TC(t, e, n) {
  const r = t.field.isKeyField()
    ? J.comparator(e.key, n.key)
    : (function (i, s, o) {
        const a = s.data.field(i),
          l = o.data.field(i);
        return a !== null && l !== null ? Di(a, l) : oe();
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return oe();
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
 */ function d_(t, e) {
  if (t.gt) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Ma(e) ? "-0" : e };
}
function h_(t) {
  return { integerValue: "" + t };
}
function IC(t, e) {
  return cC(e) ? h_(e) : d_(t, e);
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
 */ class Ml {
  constructor() {
    this._ = void 0;
  }
}
function AC(t, e, n) {
  return t instanceof Ys
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
    : t instanceof Ni
    ? p_(t, e)
    : t instanceof Li
    ? m_(t, e)
    : (function (r, i) {
        const s = f_(r, i),
          o = Gp(s) + Gp(r.yt);
        return Ru(s) && Ru(r.yt) ? h_(o) : d_(r.It, o);
      })(t, e);
}
function SC(t, e, n) {
  return t instanceof Ni ? p_(t, e) : t instanceof Li ? m_(t, e) : n;
}
function f_(t, e) {
  return t instanceof Va
    ? Ru((n = e)) ||
      (function (r) {
        return !!r && "doubleValue" in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class Ys extends Ml {}
class Ni extends Ml {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function p_(t, e) {
  const n = g_(e);
  for (const r of t.elements) n.some((i) => cn(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class Li extends Ml {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function m_(t, e) {
  let n = g_(e);
  for (const r of t.elements) n = n.filter((i) => !cn(i, r));
  return { arrayValue: { values: n } };
}
class Va extends Ml {
  constructor(e, n) {
    super(), (this.It = e), (this.yt = n);
  }
}
function Gp(t) {
  return Be(t.integerValue || t.doubleValue);
}
function g_(t) {
  return eh(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
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
 */ class ih {
  constructor(e, n) {
    (this.field = e), (this.transform = n);
  }
}
function kC(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof Ni && r instanceof Ni) ||
        (n instanceof Li && r instanceof Li)
        ? Pi(n.elements, r.elements, cn)
        : n instanceof Va && r instanceof Va
        ? cn(n.yt, r.yt)
        : n instanceof Ys && r instanceof Ys;
    })(t.transform, e.transform)
  );
}
class CC {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class zt {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new zt();
  }
  static exists(e) {
    return new zt(void 0, e);
  }
  static updateTime(e) {
    return new zt(e);
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
function la(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class $l {}
function v_(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new sh(t.key, zt.none())
      : new Eo(t.key, t.data, zt.none());
  {
    const n = t.data,
      r = xt.empty();
    let i = new We(ht.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new fr(t.key, r, new Ht(i.toArray()), zt.none());
  }
}
function qC(t, e, n) {
  t instanceof Eo
    ? (function (r, i, s) {
        const o = r.value.clone(),
          a = Yp(r.fieldTransforms, i, s.transformResults);
        o.setAll(a),
          i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof fr
    ? (function (r, i, s) {
        if (!la(r.precondition, i))
          return void i.convertToUnknownDocument(s.version);
        const o = Yp(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(y_(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function Es(t, e, n, r) {
  return t instanceof Eo
    ? (function (i, s, o, a) {
        if (!la(i.precondition, s)) return o;
        const l = i.value.clone(),
          c = Xp(i.fieldTransforms, a, s);
        return (
          l.setAll(c),
          s.convertToFoundDocument(s.version, l).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof fr
    ? (function (i, s, o, a) {
        if (!la(i.precondition, s)) return o;
        const l = Xp(i.fieldTransforms, a, s),
          c = s.data;
        return (
          c.setAll(y_(i)),
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
        return la(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function xC(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = f_(r.transform, i || null);
    s != null && (n === null && (n = xt.empty()), n.set(r.field, s));
  }
  return n || null;
}
function Qp(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (
        (n === void 0 && r === void 0) ||
        (!(!n || !r) && Pi(n, r, (i, s) => kC(i, s)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class Eo extends $l {
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
class fr extends $l {
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
function y_(t) {
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
function Yp(t, e, n) {
  const r = new Map();
  Ne(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, SC(o, a, n[i]));
  }
  return r;
}
function Xp(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, AC(s, o, e));
  }
  return r;
}
class sh extends $l {
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
class RC extends $l {
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
 */ class PC {
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
 */ var Ue, ve;
function OC(t) {
  switch (t) {
    default:
      return oe();
    case C.CANCELLED:
    case C.UNKNOWN:
    case C.DEADLINE_EXCEEDED:
    case C.RESOURCE_EXHAUSTED:
    case C.INTERNAL:
    case C.UNAVAILABLE:
    case C.UNAUTHENTICATED:
      return !1;
    case C.INVALID_ARGUMENT:
    case C.NOT_FOUND:
    case C.ALREADY_EXISTS:
    case C.PERMISSION_DENIED:
    case C.FAILED_PRECONDITION:
    case C.ABORTED:
    case C.OUT_OF_RANGE:
    case C.UNIMPLEMENTED:
    case C.DATA_LOSS:
      return !0;
  }
}
function __(t) {
  if (t === void 0) return Sn("GRPC error has no .code"), C.UNKNOWN;
  switch (t) {
    case Ue.OK:
      return C.OK;
    case Ue.CANCELLED:
      return C.CANCELLED;
    case Ue.UNKNOWN:
      return C.UNKNOWN;
    case Ue.DEADLINE_EXCEEDED:
      return C.DEADLINE_EXCEEDED;
    case Ue.RESOURCE_EXHAUSTED:
      return C.RESOURCE_EXHAUSTED;
    case Ue.INTERNAL:
      return C.INTERNAL;
    case Ue.UNAVAILABLE:
      return C.UNAVAILABLE;
    case Ue.UNAUTHENTICATED:
      return C.UNAUTHENTICATED;
    case Ue.INVALID_ARGUMENT:
      return C.INVALID_ARGUMENT;
    case Ue.NOT_FOUND:
      return C.NOT_FOUND;
    case Ue.ALREADY_EXISTS:
      return C.ALREADY_EXISTS;
    case Ue.PERMISSION_DENIED:
      return C.PERMISSION_DENIED;
    case Ue.FAILED_PRECONDITION:
      return C.FAILED_PRECONDITION;
    case Ue.ABORTED:
      return C.ABORTED;
    case Ue.OUT_OF_RANGE:
      return C.OUT_OF_RANGE;
    case Ue.UNIMPLEMENTED:
      return C.UNIMPLEMENTED;
    case Ue.DATA_LOSS:
      return C.DATA_LOSS;
    default:
      return oe();
  }
}
((ve = Ue || (Ue = {}))[(ve.OK = 0)] = "OK"),
  (ve[(ve.CANCELLED = 1)] = "CANCELLED"),
  (ve[(ve.UNKNOWN = 2)] = "UNKNOWN"),
  (ve[(ve.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (ve[(ve.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (ve[(ve.NOT_FOUND = 5)] = "NOT_FOUND"),
  (ve[(ve.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (ve[(ve.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (ve[(ve.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (ve[(ve.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (ve[(ve.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (ve[(ve.ABORTED = 10)] = "ABORTED"),
  (ve[(ve.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (ve[(ve.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (ve[(ve.INTERNAL = 13)] = "INTERNAL"),
  (ve[(ve.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (ve[(ve.DATA_LOSS = 15)] = "DATA_LOSS");
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
 */ class Xi {
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
    Xr(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return e_(this.inner);
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
 */ const DC = new Ge(J.comparator);
function Cn() {
  return DC;
}
const w_ = new Ge(J.comparator);
function ds(...t) {
  let e = w_;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function b_(t) {
  let e = w_;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function Or() {
  return Ts();
}
function E_() {
  return Ts();
}
function Ts() {
  return new Xi(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const NC = new Ge(J.comparator),
  LC = new We(J.comparator);
function fe(...t) {
  let e = LC;
  for (const n of t) e = e.add(n);
  return e;
}
const MC = new We(Ce);
function T_() {
  return MC;
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
 */ class Vl {
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
      r.set(e, To.createSynthesizedTargetChangeForCurrentChange(e, n)),
      new Vl(he.min(), r, T_(), Cn(), fe())
    );
  }
}
class To {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n) {
    return new To(at.EMPTY_BYTE_STRING, n, fe(), fe(), fe());
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
 */ class ca {
  constructor(e, n, r, i) {
    (this.Tt = e), (this.removedTargetIds = n), (this.key = r), (this.Et = i);
  }
}
class I_ {
  constructor(e, n) {
    (this.targetId = e), (this.At = n);
  }
}
class A_ {
  constructor(e, n, r = at.EMPTY_BYTE_STRING, i = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i);
  }
}
class Jp {
  constructor() {
    (this.Rt = 0),
      (this.bt = em()),
      (this.Pt = at.EMPTY_BYTE_STRING),
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
    let e = fe(),
      n = fe(),
      r = fe();
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
            oe();
        }
      }),
      new To(this.Pt, this.vt, e, n, r)
    );
  }
  Nt() {
    (this.Vt = !1), (this.bt = em());
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
class $C {
  constructor(e) {
    (this.Bt = e),
      (this.Lt = new Map()),
      (this.Ut = Cn()),
      (this.qt = Zp()),
      (this.Kt = new We(Ce));
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
          oe();
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
      if (Pu(s))
        if (r === 0) {
          const o = new J(s.path);
          this.jt(n, o, rt.newNoDocument(o, he.min()));
        } else Ne(r === 1);
      else this.Zt(n) !== r && (this.Jt(n), (this.Kt = this.Kt.add(n)));
    }
  }
  te(e) {
    const n = new Map();
    this.Lt.forEach((s, o) => {
      const a = this.Xt(o);
      if (a) {
        if (s.current && Pu(a.target)) {
          const l = new J(a.target.path);
          this.Ut.get(l) !== null ||
            this.ee(o, l) ||
            this.jt(o, l, rt.newNoDocument(l, e));
        }
        s.Dt && (n.set(o, s.xt()), s.Nt());
      }
    });
    let r = fe();
    this.qt.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((l) => {
        const c = this.Xt(l);
        return !c || c.purpose === 2 || ((a = !1), !1);
      }),
        a && (r = r.add(s));
    }),
      this.Ut.forEach((s, o) => o.setReadTime(e));
    const i = new Vl(e, n, this.Kt, this.Ut, r);
    return (this.Ut = Cn()), (this.qt = Zp()), (this.Kt = new We(Ce)), i;
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
    return n || ((n = new Jp()), this.Lt.set(e, n)), n;
  }
  ne(e) {
    let n = this.qt.get(e);
    return n || ((n = new We(Ce)), (this.qt = this.qt.insert(e, n))), n;
  }
  Ht(e) {
    const n = this.Xt(e) !== null;
    return n || Y("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  Xt(e) {
    const n = this.Lt.get(e);
    return n && n.St ? null : this.Bt.se(e);
  }
  Jt(e) {
    this.Lt.set(e, new Jp()),
      this.Bt.getRemoteKeysForTarget(e).forEach((n) => {
        this.jt(e, n, null);
      });
  }
  ee(e, n) {
    return this.Bt.getRemoteKeysForTarget(e).has(n);
  }
}
function Zp() {
  return new Ge(J.comparator);
}
function em() {
  return new Ge(J.comparator);
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
 */ const VC = { asc: "ASCENDING", desc: "DESCENDING" },
  FC = {
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
class UC {
  constructor(e, n) {
    (this.databaseId = e), (this.gt = n);
  }
}
function Fa(t, e) {
  return t.gt
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function S_(t, e) {
  return t.gt ? e.toBase64() : e.toUint8Array();
}
function BC(t, e) {
  return Fa(t, e.toTimestamp());
}
function wn(t) {
  return (
    Ne(!!t),
    he.fromTimestamp(
      (function (e) {
        const n = cr(e);
        return new ze(n.seconds, n.nanos);
      })(t)
    )
  );
}
function oh(t, e) {
  return (function (n) {
    return new Me(["projects", n.projectId, "databases", n.database]);
  })(t)
    .child("documents")
    .child(e)
    .canonicalString();
}
function k_(t) {
  const e = Me.fromString(t);
  return Ne(x_(e)), e;
}
function Nu(t, e) {
  return oh(t.databaseId, e.path);
}
function Mc(t, e) {
  const n = k_(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new j(
      C.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new j(
      C.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database
    );
  return new J(C_(n));
}
function Lu(t, e) {
  return oh(t.databaseId, e);
}
function jC(t) {
  const e = k_(t);
  return e.length === 4 ? Me.emptyPath() : C_(e);
}
function Mu(t) {
  return new Me([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function C_(t) {
  return Ne(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function tm(t, e, n) {
  return { name: Nu(t, e), fields: n.value.mapValue.fields };
}
function HC(t, e) {
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
          : oe();
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      s = (function (l, c) {
        return l.gt
          ? (Ne(c === void 0 || typeof c == "string"),
            at.fromBase64String(c || ""))
          : (Ne(c === void 0 || c instanceof Uint8Array),
            at.fromUint8Array(c || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (l) {
          const c = l.code === void 0 ? C.UNKNOWN : __(l.code);
          return new j(c, l.message || "");
        })(o);
    n = new A_(r, i, s, a || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Mc(t, r.document.name),
      s = wn(r.document.updateTime),
      o = new xt({ mapValue: { fields: r.document.fields } }),
      a = rt.newFoundDocument(i, s, o),
      l = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new ca(l, c, a.key, a);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Mc(t, r.document),
      s = r.readTime ? wn(r.readTime) : he.min(),
      o = rt.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new ca([], a, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Mc(t, r.document),
      s = r.removedTargetIds || [];
    n = new ca([], s, i, null);
  } else {
    if (!("filter" in e)) return oe();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const i = r.count || 0,
        s = new PC(i),
        o = r.targetId;
      n = new I_(o, s);
    }
  }
  return n;
}
function zC(t, e) {
  let n;
  if (e instanceof Eo) n = { update: tm(t, e.key, e.value) };
  else if (e instanceof sh) n = { delete: Nu(t, e.key) };
  else if (e instanceof fr)
    n = { update: tm(t, e.key, e.data), updateMask: tq(e.fieldMask) };
  else {
    if (!(e instanceof RC)) return oe();
    n = { verify: Nu(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (i, s) {
          const o = s.transform;
          if (o instanceof Ys)
            return {
              fieldPath: s.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (o instanceof Ni)
            return {
              fieldPath: s.field.canonicalString(),
              appendMissingElements: { values: o.elements },
            };
          if (o instanceof Li)
            return {
              fieldPath: s.field.canonicalString(),
              removeAllFromArray: { values: o.elements },
            };
          if (o instanceof Va)
            return { fieldPath: s.field.canonicalString(), increment: o.yt };
          throw oe();
        })(0, r)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (r, i) {
        return i.updateTime !== void 0
          ? { updateTime: BC(r, i.updateTime) }
          : i.exists !== void 0
          ? { exists: i.exists }
          : oe();
      })(t, e.precondition)),
    n
  );
}
function WC(t, e) {
  return t && t.length > 0
    ? (Ne(e !== void 0),
      t.map((n) =>
        (function (r, i) {
          let s = r.updateTime ? wn(r.updateTime) : wn(i);
          return (
            s.isEqual(he.min()) && (s = wn(i)),
            new CC(s, r.transformResults || [])
          );
        })(n, e)
      ))
    : [];
}
function KC(t, e) {
  return { documents: [Lu(t, e.path)] };
}
function GC(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = Lu(t, r)),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = Lu(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (l) {
    if (l.length === 0) return;
    const c = l.map((u) =>
      (function (d) {
        if (d.op === "==") {
          if (jp(d.value))
            return { unaryFilter: { field: si(d.field), op: "IS_NAN" } };
          if (Bp(d.value))
            return { unaryFilter: { field: si(d.field), op: "IS_NULL" } };
        } else if (d.op === "!=") {
          if (jp(d.value))
            return { unaryFilter: { field: si(d.field), op: "IS_NOT_NAN" } };
          if (Bp(d.value))
            return { unaryFilter: { field: si(d.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: si(d.field), op: JC(d.op), value: d.value },
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
          return { field: si(u.field), direction: XC(u.dir) };
        })(c)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = (function (l, c) {
    return l.gt || Dl(c) ? c : { value: c };
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
function QC(t) {
  let e = jC(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    Ne(r === 1);
    const u = n.from[0];
    u.allDescendants ? (i = u.collectionId) : (e = e.child(u.collectionId));
  }
  let s = [];
  n.where && (s = q_(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((u) =>
      (function (d) {
        return new bs(
          ui(d.field),
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
      return (d = typeof u == "object" ? u.value : u), Dl(d) ? null : d;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (u) {
      const d = !!u.before,
        h = u.values || [];
      return new $a(h, d);
    })(n.startAt));
  let c = null;
  return (
    n.endAt &&
      (c = (function (u) {
        const d = !u.before,
          h = u.values || [];
        return new $a(h, d);
      })(n.endAt)),
    bC(e, i, o, s, a, "F", l, c)
  );
}
function YC(t, e) {
  const n = (function (r, i) {
    switch (i) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return oe();
    }
  })(0, e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function q_(t) {
  return t
    ? t.unaryFilter !== void 0
      ? [eq(t)]
      : t.fieldFilter !== void 0
      ? [ZC(t)]
      : t.compositeFilter !== void 0
      ? t.compositeFilter.filters
          .map((e) => q_(e))
          .reduce((e, n) => e.concat(n))
      : oe()
    : [];
}
function XC(t) {
  return VC[t];
}
function JC(t) {
  return FC[t];
}
function si(t) {
  return { fieldPath: t.canonicalString() };
}
function ui(t) {
  return ht.fromServerFormat(t.fieldPath);
}
function ZC(t) {
  return It.create(
    ui(t.fieldFilter.field),
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
          return oe();
      }
    })(t.fieldFilter.op),
    t.fieldFilter.value
  );
}
function eq(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      const e = ui(t.unaryFilter.field);
      return It.create(e, "==", { doubleValue: NaN });
    case "IS_NULL":
      const n = ui(t.unaryFilter.field);
      return It.create(n, "==", { nullValue: "NULL_VALUE" });
    case "IS_NOT_NAN":
      const r = ui(t.unaryFilter.field);
      return It.create(r, "!=", { doubleValue: NaN });
    case "IS_NOT_NULL":
      const i = ui(t.unaryFilter.field);
      return It.create(i, "!=", { nullValue: "NULL_VALUE" });
    default:
      return oe();
  }
}
function tq(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function x_(t) {
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
 */ class nq {
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
      s.key.isEqual(e.key) && qC(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Es(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = Es(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = E_();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = v_(o, a);
        l !== null && r.set(i.key, l),
          o.isValidDocument() || o.convertToNoDocument(he.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), fe());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Pi(this.mutations, e.mutations, (n, r) => Qp(n, r)) &&
      Pi(this.baseMutations, e.baseMutations, (n, r) => Qp(n, r))
    );
  }
}
class ah {
  constructor(e, n, r, i) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(e, n, r) {
    Ne(e.mutations.length === r.length);
    let i = NC;
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new ah(e, n, r, i);
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
 */ class rq {
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
 */ class $r {
  constructor(
    e,
    n,
    r,
    i,
    s = he.min(),
    o = he.min(),
    a = at.EMPTY_BYTE_STRING
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
    return new $r(
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
    return new $r(
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
    return new $r(
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
 */ class iq {
  constructor(e) {
    this.re = e;
  }
}
function sq(t) {
  const e = QC({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? Ou(e, e.limit, "L") : e;
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
 */ class oq {
  constructor() {
    this.Ye = new aq();
  }
  addToCollectionParentIndex(e, n) {
    return this.Ye.add(n), P.resolve();
  }
  getCollectionParents(e, n) {
    return P.resolve(this.Ye.getEntries(n));
  }
  addFieldIndex(e, n) {
    return P.resolve();
  }
  deleteFieldIndex(e, n) {
    return P.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return P.resolve(null);
  }
  getIndexType(e, n) {
    return P.resolve(0);
  }
  getFieldIndexes(e, n) {
    return P.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return P.resolve(null);
  }
  getMinOffset(e, n) {
    return P.resolve(lr.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return P.resolve(lr.min());
  }
  updateCollectionGroup(e, n, r) {
    return P.resolve();
  }
  updateIndexEntries(e, n) {
    return P.resolve();
  }
}
class aq {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new We(Me.comparator),
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
    return (this.index[e] || new We(Me.comparator)).toArray();
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
 */ class Mi {
  constructor(e) {
    this.bn = e;
  }
  next() {
    return (this.bn += 2), this.bn;
  }
  static Pn() {
    return new Mi(0);
  }
  static vn() {
    return new Mi(-1);
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
 */ class lq {
  constructor() {
    (this.changes = new Xi(
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
      this.changes.set(e, rt.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? P.resolve(r) : this.getFromCache(e, n);
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
 */ class cq {
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
 */ class uq {
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
      .next((i) => (r !== null && Es(r.mutation, i, Ht.empty(), ze.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, fe()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = fe()) {
    const i = Or();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = ds();
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
    const r = Or();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, fe())
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
    let s = Cn();
    const o = Ts(),
      a = Ts();
    return (
      n.forEach((l, c) => {
        const u = r.get(c.key);
        i.has(c.key) && (u === void 0 || u.mutation instanceof fr)
          ? (s = s.insert(c.key, c))
          : u !== void 0 &&
            (o.set(c.key, u.mutation.getFieldMask()),
            Es(u.mutation, c, u.mutation.getFieldMask(), ze.now()));
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((c, u) => o.set(c, u)),
          n.forEach((c, u) => {
            var d;
            return a.set(
              c,
              new cq(u, (d = o.get(c)) !== null && d !== void 0 ? d : null)
            );
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Ts();
    let i = new Ge((o, a) => o - a),
      s = fe();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const c = n.get(l);
            if (c === null) return;
            let u = r.get(l) || Ht.empty();
            (u = a.applyToLocalView(c, u)), r.set(l, u);
            const d = (i.get(a.batchId) || fe()).add(l);
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
            d = E_();
          u.forEach((h) => {
            if (!s.has(h)) {
              const f = v_(n.get(h), r.get(h));
              f !== null && d.set(h, f), (s = s.add(h));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, c, d));
        }
        return P.waitFor(o);
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
        J.isDocumentKey(i.path) &&
        i.collectionGroup === null &&
        i.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : l_(n)
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
            : P.resolve(Or());
        let a = -1,
          l = s;
        return o.next((c) =>
          P.forEach(
            c,
            (u, d) => (
              a < d.largestBatchId && (a = d.largestBatchId),
              s.get(u)
                ? P.resolve()
                : this.getBaseDocument(e, u, d).next((h) => {
                    l = l.insert(u, h);
                  })
            )
          )
            .next(() => this.populateOverlays(e, c, s))
            .next(() => this.computeViews(e, l, c, fe()))
            .next((u) => ({ batchId: a, changes: b_(u) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new J(n)).next((r) => {
      let i = ds();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = ds();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      P.forEach(o, (a) => {
        const l = (function (c, u) {
          return new bo(
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
          i.get(c) === null && (i = i.insert(c, rt.newInvalidDocument(c)));
        });
        let o = ds();
        return (
          i.forEach((a, l) => {
            const c = s.get(a);
            c !== void 0 && Es(c.mutation, l, Ht.empty(), ze.now()),
              rh(n, l) && (o = o.insert(a, l));
          }),
          o
        );
      });
  }
  getBaseDocument(e, n, r) {
    return r === null || r.mutation.type === 1
      ? this.remoteDocumentCache.getEntry(e, n)
      : P.resolve(rt.newInvalidDocument(n));
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
 */ class dq {
  constructor(e) {
    (this.It = e), (this.Zn = new Map()), (this.ts = new Map());
  }
  getBundleMetadata(e, n) {
    return P.resolve(this.Zn.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.Zn.set(n.id, {
        id: (r = n).id,
        version: r.version,
        createTime: wn(r.createTime),
      }),
      P.resolve()
    );
  }
  getNamedQuery(e, n) {
    return P.resolve(this.ts.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.ts.set(
        n.name,
        (function (r) {
          return {
            name: r.name,
            query: sq(r.bundledQuery),
            readTime: wn(r.readTime),
          };
        })(n)
      ),
      P.resolve()
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
 */ class hq {
  constructor() {
    (this.overlays = new Ge(J.comparator)), (this.es = new Map());
  }
  getOverlay(e, n) {
    return P.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = Or();
    return P.forEach(n, (i) =>
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
      P.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.es.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.es.delete(r)),
      P.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = Or(),
      s = n.length + 1,
      o = new J(n.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        c = l.getKey();
      if (!n.isPrefixOf(c.path)) break;
      c.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return P.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new Ge((c, u) => c - u);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const c = o.getNext().value;
      if (c.getKey().getCollectionGroup() === n && c.largestBatchId > r) {
        let u = s.get(c.largestBatchId);
        u === null && ((u = Or()), (s = s.insert(c.largestBatchId, u))),
          u.set(c.getKey(), c);
      }
    }
    const a = Or(),
      l = s.getIterator();
    for (
      ;
      l.hasNext() &&
      (l.getNext().value.forEach((c, u) => a.set(c, u)), !(a.size() >= i));

    );
    return P.resolve(a);
  }
  ue(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.es.get(i.largestBatchId).delete(r.key);
      this.es.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new rq(n, r));
    let s = this.es.get(n);
    s === void 0 && ((s = fe()), this.es.set(n, s)),
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
 */ class lh {
  constructor() {
    (this.ns = new We(Qe.ss)), (this.rs = new We(Qe.os));
  }
  isEmpty() {
    return this.ns.isEmpty();
  }
  addReference(e, n) {
    const r = new Qe(e, n);
    (this.ns = this.ns.add(r)), (this.rs = this.rs.add(r));
  }
  us(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.cs(new Qe(e, n));
  }
  hs(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  ls(e) {
    const n = new J(new Me([])),
      r = new Qe(n, e),
      i = new Qe(n, e + 1),
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
    const n = new J(new Me([])),
      r = new Qe(n, e),
      i = new Qe(n, e + 1);
    let s = fe();
    return (
      this.rs.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new Qe(e, 0),
      r = this.ns.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class Qe {
  constructor(e, n) {
    (this.key = e), (this._s = n);
  }
  static ss(e, n) {
    return J.comparator(e.key, n.key) || Ce(e._s, n._s);
  }
  static os(e, n) {
    return Ce(e._s, n._s) || J.comparator(e.key, n.key);
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
 */ class fq {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.ws = 1),
      (this.gs = new We(Qe.ss));
  }
  checkEmpty(e) {
    return P.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.ws;
    this.ws++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new nq(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.gs = this.gs.add(new Qe(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return P.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return P.resolve(this.ys(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.ps(r),
      s = i < 0 ? 0 : i;
    return P.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return P.resolve(this.mutationQueue.length === 0 ? -1 : this.ws - 1);
  }
  getAllMutationBatches(e) {
    return P.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new Qe(n, 0),
      i = new Qe(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.gs.forEachInRange([r, i], (o) => {
        const a = this.ys(o._s);
        s.push(a);
      }),
      P.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new We(Ce);
    return (
      n.forEach((i) => {
        const s = new Qe(i, 0),
          o = new Qe(i, Number.POSITIVE_INFINITY);
        this.gs.forEachInRange([s, o], (a) => {
          r = r.add(a._s);
        });
      }),
      P.resolve(this.Is(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    J.isDocumentKey(s) || (s = s.child(""));
    const o = new Qe(new J(s), 0);
    let a = new We(Ce);
    return (
      this.gs.forEachWhile((l) => {
        const c = l.key.path;
        return !!r.isPrefixOf(c) && (c.length === i && (a = a.add(l._s)), !0);
      }, o),
      P.resolve(this.Is(a))
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
    Ne(this.Ts(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.gs;
    return P.forEach(n.mutations, (i) => {
      const s = new Qe(i.key, n.batchId);
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
    const r = new Qe(n, 0),
      i = this.gs.firstAfterOrEqual(r);
    return P.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, P.resolve();
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
 */ class pq {
  constructor(e) {
    (this.Es = e), (this.docs = new Ge(J.comparator)), (this.size = 0);
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
    return P.resolve(r ? r.document.mutableCopy() : rt.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = Cn();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : rt.newInvalidDocument(i)
        );
      }),
      P.resolve(r)
    );
  }
  getAllFromCollection(e, n, r) {
    let i = Cn();
    const s = new J(n.child("")),
      o = this.docs.getIteratorFrom(s);
    for (; o.hasNext(); ) {
      const {
        key: a,
        value: { document: l },
      } = o.getNext();
      if (!n.isPrefixOf(a.path)) break;
      a.path.length > n.length + 1 ||
        iC(rC(l), r) <= 0 ||
        (i = i.insert(l.key, l.mutableCopy()));
    }
    return P.resolve(i);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    oe();
  }
  As(e, n) {
    return P.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new mq(this);
  }
  getSize(e) {
    return P.resolve(this.size);
  }
}
class mq extends lq {
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
      P.waitFor(n)
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
 */ class gq {
  constructor(e) {
    (this.persistence = e),
      (this.Rs = new Xi((n) => th(n), nh)),
      (this.lastRemoteSnapshotVersion = he.min()),
      (this.highestTargetId = 0),
      (this.bs = 0),
      (this.Ps = new lh()),
      (this.targetCount = 0),
      (this.vs = Mi.Pn());
  }
  forEachTarget(e, n) {
    return this.Rs.forEach((r, i) => n(i)), P.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return P.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return P.resolve(this.bs);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.vs.next()), P.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.bs && (this.bs = n),
      P.resolve()
    );
  }
  Dn(e) {
    this.Rs.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId &&
      ((this.vs = new Mi(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.bs && (this.bs = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.Dn(n), (this.targetCount += 1), P.resolve();
  }
  updateTargetData(e, n) {
    return this.Dn(n), P.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.Rs.delete(n.target),
      this.Ps.ls(n.targetId),
      (this.targetCount -= 1),
      P.resolve()
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
      P.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return P.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.Rs.get(n) || null;
    return P.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Ps.us(n, r), P.resolve();
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
      P.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Ps.ls(n), P.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Ps.ds(n);
    return P.resolve(r);
  }
  containsKey(e, n) {
    return P.resolve(this.Ps.containsKey(n));
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
 */ class vq {
  constructor(e, n) {
    (this.Vs = {}),
      (this.overlays = {}),
      (this.Ss = new Zd(0)),
      (this.Ds = !1),
      (this.Ds = !0),
      (this.referenceDelegate = e(this)),
      (this.Cs = new gq(this)),
      (this.indexManager = new oq()),
      (this.remoteDocumentCache = (function (r) {
        return new pq(r);
      })((r) => this.referenceDelegate.xs(r))),
      (this.It = new iq(n)),
      (this.Ns = new dq(this.It));
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
    return n || ((n = new hq()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Vs[e.toKey()];
    return (
      r || ((r = new fq(n, this.referenceDelegate)), (this.Vs[e.toKey()] = r)),
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
    Y("MemoryPersistence", "Starting transaction:", e);
    const i = new yq(this.Ss.next());
    return (
      this.referenceDelegate.ks(),
      r(i)
        .next((s) => this.referenceDelegate.Ms(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Os(e, n) {
    return P.or(Object.values(this.Vs).map((r) => () => r.containsKey(e, n)));
  }
}
class yq extends oC {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class ch {
  constructor(e) {
    (this.persistence = e), (this.Fs = new lh()), (this.$s = null);
  }
  static Bs(e) {
    return new ch(e);
  }
  get Ls() {
    if (this.$s) return this.$s;
    throw oe();
  }
  addReference(e, n, r) {
    return (
      this.Fs.addReference(r, n), this.Ls.delete(r.toString()), P.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Fs.removeReference(r, n), this.Ls.add(r.toString()), P.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Ls.add(n.toString()), P.resolve();
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
    return P.forEach(this.Ls, (r) => {
      const i = J.fromPath(r);
      return this.Us(e, i).next((s) => {
        s || n.removeEntry(i, he.min());
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
    return P.or([
      () => P.resolve(this.Fs.containsKey(n)),
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
 */ class uh {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.Si = r), (this.Di = i);
  }
  static Ci(e, n) {
    let r = fe(),
      i = fe();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new uh(e, n.fromCache, r, i);
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
 */ class _q {
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
    if (Kp(n)) return P.resolve(null);
    let r = kn(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = Ou(n, null, "F")), (r = kn(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = fe(...s);
            return this.Ni.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const c = this.Fi(n, a);
                return this.$i(n, c, o, l.readTime)
                  ? this.ki(e, Ou(n, null, "F"))
                  : this.Bi(e, c, n, l);
              })
            );
          }))
    );
  }
  Mi(e, n, r, i) {
    return Kp(n) || i.isEqual(he.min())
      ? this.Oi(e, n)
      : this.Ni.getDocuments(e, r).next((s) => {
          const o = this.Fi(n, s);
          return this.$i(n, o, r, i)
            ? this.Oi(e, n)
            : (Lp() <= ke.DEBUG &&
                Y(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  Du(n)
                ),
              this.Bi(e, o, n, nC(i, -1)));
        });
  }
  Fi(e, n) {
    let r = new We(u_(e));
    return (
      n.forEach((i, s) => {
        rh(e, s) && (r = r.add(s));
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
      Lp() <= ke.DEBUG &&
        Y("QueryEngine", "Using full collection scan to execute query:", Du(n)),
      this.Ni.getDocumentsMatchingQuery(e, n, lr.min())
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
 */ class wq {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Li = n),
      (this.It = i),
      (this.Ui = new Ge(Ce)),
      (this.qi = new Xi((s) => th(s), nh)),
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
      (this.localDocuments = new uq(
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
function bq(t, e, n, r) {
  return new wq(t, e, n, r);
}
async function R_(t, e) {
  const n = ce(t);
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
          let l = fe();
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
function Eq(t, e) {
  const n = ce(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      return (function (o, a, l, c) {
        const u = l.batch,
          d = u.keys();
        let h = P.resolve();
        return (
          d.forEach((f) => {
            h = h
              .next(() => c.getEntry(a, f))
              .next((g) => {
                const y = l.docVersions.get(f);
                Ne(y !== null),
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
              let a = fe();
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
function P_(t) {
  const e = ce(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.Cs.getLastRemoteSnapshotVersion(n)
  );
}
function Tq(t, e) {
  const n = ce(t),
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
              .withResumeToken(at.EMPTY_BYTE_STRING, he.min())
              .withLastLimboFreeSnapshotVersion(he.min()))
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
      let l = Cn(),
        c = fe();
      if (
        (e.documentUpdates.forEach((u) => {
          e.resolvedLimboDocuments.has(u) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, u));
        }),
        a.push(
          Iq(s, o, e.documentUpdates).next((u) => {
            (l = u.Wi), (c = u.zi);
          })
        ),
        !r.isEqual(he.min()))
      ) {
        const u = n.Cs.getLastRemoteSnapshotVersion(s).next((d) =>
          n.Cs.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(u);
      }
      return P.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, c))
        .next(() => l);
    })
    .then((s) => ((n.Ui = i), s));
}
function Iq(t, e, n) {
  let r = fe(),
    i = fe();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = Cn();
      return (
        n.forEach((a, l) => {
          const c = s.get(a);
          l.isFoundDocument() !== c.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(he.min())
              ? (e.removeEntry(a, l.readTime), (o = o.insert(a, l)))
              : !c.isValidDocument() ||
                l.version.compareTo(c.version) > 0 ||
                (l.version.compareTo(c.version) === 0 && c.hasPendingWrites)
              ? (e.addEntry(l), (o = o.insert(a, l)))
              : Y(
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
function Aq(t, e) {
  const n = ce(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    )
  );
}
function Sq(t, e) {
  const n = ce(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.Cs.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), P.resolve(i))
          : n.Cs.allocateTargetId(r).next(
              (o) => (
                (i = new $r(e, o, 0, r.currentSequenceNumber)),
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
async function $u(t, e, n) {
  const r = ce(t),
    i = r.Ui.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!wo(o)) throw o;
    Y("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ui = r.Ui.remove(e)), r.qi.delete(i.target);
}
function nm(t, e, n) {
  const r = ce(t);
  let i = he.min(),
    s = fe();
  return r.persistence.runTransaction("Execute query", "readonly", (o) =>
    (function (a, l, c) {
      const u = ce(a),
        d = u.qi.get(c);
      return d !== void 0 ? P.resolve(u.Ui.get(d)) : u.Cs.getTargetData(l, c);
    })(r, o, kn(e))
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
        r.Li.getDocumentsMatchingQuery(o, e, n ? i : he.min(), n ? s : fe())
      )
      .next((a) => (kq(r, EC(e), a), { documents: a, Hi: s }))
  );
}
function kq(t, e, n) {
  let r = he.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Ki.set(e, r);
}
class rm {
  constructor() {
    this.activeTargetIds = T_();
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
class Cq {
  constructor() {
    (this.Lr = new rm()),
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
    return (this.Lr = new rm()), Promise.resolve();
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
 */ class qq {
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
 */ class im {
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
    Y("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.Wr) e(0);
  }
  jr() {
    Y("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
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
 */ const xq = {
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
 */ class Rq {
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
 */ class Pq extends class {
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
    Y("RestConnection", "Sending: ", o, r);
    const a = {};
    return (
      this.ho(a, i, s),
      this.lo(e, o, a, r).then(
        (l) => (Y("RestConnection", "Received: ", l), l),
        (l) => {
          throw (
            (Mp(
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
    (e["X-Goog-Api-Client"] = "gl-js/ fire/" + Yi),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  ao(e, n) {
    const r = xq[e];
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
      const a = new Wk();
      a.listenOnce(jk.COMPLETE, () => {
        try {
          switch (a.getLastErrorCode()) {
            case Lc.NO_ERROR:
              const c = a.getResponseJson();
              Y("Connection", "XHR received:", JSON.stringify(c)), s(c);
              break;
            case Lc.TIMEOUT:
              Y("Connection", 'RPC "' + e + '" timed out'),
                o(new j(C.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case Lc.HTTP_ERROR:
              const u = a.getStatus();
              if (
                (Y(
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
                    return Object.values(C).indexOf(g) >= 0 ? g : C.UNKNOWN;
                  })(d.status);
                  o(new j(h, d.message));
                } else
                  o(
                    new j(
                      C.UNKNOWN,
                      "Server responded with status " + a.getStatus()
                    )
                  );
              } else o(new j(C.UNAVAILABLE, "Connection failed."));
              break;
            default:
              oe();
          }
        } finally {
          Y("Connection", 'RPC "' + e + '" completed.');
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
      s = Uk(),
      o = Bk(),
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
    this.useFetchStreams && (a.xmlHttpFactory = new zk({})),
      this.ho(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const l = i.join("");
    Y("Connection", "Creating WebChannel: " + l, a);
    const c = s.createWebChannel(l, a);
    let u = !1,
      d = !1;
    const h = new Rq({
        Hr: (g) => {
          d
            ? Y("Connection", "Not sending because WebChannel is closed:", g)
            : (u ||
                (Y("Connection", "Opening WebChannel transport."),
                c.open(),
                (u = !0)),
              Y("Connection", "WebChannel sending:", g),
              c.send(g));
        },
        Jr: () => c.close(),
      }),
      f = (g, y, _) => {
        g.listen(y, (w) => {
          try {
            _(w);
          } catch (v) {
            setTimeout(() => {
              throw v;
            }, 0);
          }
        });
      };
    return (
      f(c, Ho.EventType.OPEN, () => {
        d || Y("Connection", "WebChannel transport opened.");
      }),
      f(c, Ho.EventType.CLOSE, () => {
        d || ((d = !0), Y("Connection", "WebChannel transport closed"), h.io());
      }),
      f(c, Ho.EventType.ERROR, (g) => {
        d ||
          ((d = !0),
          Mp("Connection", "WebChannel transport errored:", g),
          h.io(new j(C.UNAVAILABLE, "The operation could not be completed")));
      }),
      f(c, Ho.EventType.MESSAGE, (g) => {
        var y;
        if (!d) {
          const _ = g.data[0];
          Ne(!!_);
          const w = _,
            v =
              w.error ||
              ((y = w[0]) === null || y === void 0 ? void 0 : y.error);
          if (v) {
            Y("Connection", "WebChannel received error:", v);
            const k = v.status;
            let E = (function (z) {
                const ae = Ue[z];
                if (ae !== void 0) return __(ae);
              })(k),
              H = v.message;
            E === void 0 &&
              ((E = C.INTERNAL),
              (H =
                "Unknown error status: " + k + " with message " + v.message)),
              (d = !0),
              h.io(new j(E, H)),
              c.close();
          } else Y("Connection", "WebChannel received:", _), h.ro(_);
        }
      }),
      f(o, Hk.STAT_EVENT, (g) => {
        g.stat === Dp.PROXY
          ? Y("Connection", "Detected buffering proxy")
          : g.stat === Dp.NOPROXY &&
            Y("Connection", "Detected no buffering proxy");
      }),
      setTimeout(() => {
        h.so();
      }, 0),
      h
    );
  }
}
function $c() {
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
 */ function Fl(t) {
  return new UC(t, !0);
}
class O_ {
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
      Y(
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
 */ class D_ {
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
      (this.xo = new O_(e, n));
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
        : n && n.code === C.RESOURCE_EXHAUSTED
        ? (Sn(n.toString()),
          Sn("Using maximum backoff delay to prevent overloading the backend."),
          this.xo.Eo())
        : n &&
          n.code === C.UNAUTHENTICATED &&
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
          const i = new j(
            C.UNKNOWN,
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
      Y("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Ko(e) {
    return (n) => {
      this.Hs.enqueueAndForget(() =>
        this.So === e
          ? n()
          : (Y(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class Oq extends D_ {
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
    const n = HC(this.It, e),
      r = (function (i) {
        if (!("targetChange" in i)) return he.min();
        const s = i.targetChange;
        return s.targetIds && s.targetIds.length
          ? he.min()
          : s.readTime
          ? wn(s.readTime)
          : he.min();
      })(e);
    return this.listener.Wo(n, r);
  }
  zo(e) {
    const n = {};
    (n.database = Mu(this.It)),
      (n.addTarget = (function (i, s) {
        let o;
        const a = s.target;
        return (
          (o = Pu(a) ? { documents: KC(i, a) } : { query: GC(i, a) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = S_(i, s.resumeToken))
            : s.snapshotVersion.compareTo(he.min()) > 0 &&
              (o.readTime = Fa(i, s.snapshotVersion.toTimestamp())),
          o
        );
      })(this.It, e));
    const r = YC(this.It, e);
    r && (n.labels = r), this.Bo(n);
  }
  Ho(e) {
    const n = {};
    (n.database = Mu(this.It)), (n.removeTarget = e), this.Bo(n);
  }
}
class Dq extends D_ {
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
      (Ne(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.Jo)
    ) {
      this.xo.reset();
      const n = WC(e.writeResults, e.commitTime),
        r = wn(e.commitTime);
      return this.listener.Zo(r, n);
    }
    return (
      Ne(!e.writeResults || e.writeResults.length === 0),
      (this.Jo = !0),
      this.listener.tu()
    );
  }
  eu() {
    const e = {};
    (e.database = Mu(this.It)), this.Bo(e);
  }
  Xo(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => zC(this.It, r)),
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
 */ class Nq extends class {} {
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
      throw new j(
        C.FAILED_PRECONDITION,
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
            ? (i.code === C.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new j(C.UNKNOWN, i.toString());
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
            ? (s.code === C.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new j(C.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.nu = !0;
  }
}
class Lq {
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
    this.ou ? (Sn(n), (this.ou = !1)) : Y("OnlineStateTracker", n);
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
 */ class Mq {
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
          Jr(this) &&
            (Y(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (a) {
              const l = ce(a);
              l._u.add(4),
                await Io(l),
                l.gu.set("Unknown"),
                l._u.delete(4),
                await Ul(l);
            })(this));
        });
      }),
      (this.gu = new Lq(r, i));
  }
}
async function Ul(t) {
  if (Jr(t)) for (const e of t.wu) await e(!0);
}
async function Io(t) {
  for (const e of t.wu) await e(!1);
}
function N_(t, e) {
  const n = ce(t);
  n.du.has(e.targetId) ||
    (n.du.set(e.targetId, e), fh(n) ? hh(n) : Ji(n).ko() && dh(n, e));
}
function L_(t, e) {
  const n = ce(t),
    r = Ji(n);
  n.du.delete(e),
    r.ko() && M_(n, e),
    n.du.size === 0 && (r.ko() ? r.Fo() : Jr(n) && n.gu.set("Unknown"));
}
function dh(t, e) {
  t.yu.Ot(e.targetId), Ji(t).zo(e);
}
function M_(t, e) {
  t.yu.Ot(e), Ji(t).Ho(e);
}
function hh(t) {
  (t.yu = new $C({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    se: (e) => t.du.get(e) || null,
  })),
    Ji(t).start(),
    t.gu.uu();
}
function fh(t) {
  return Jr(t) && !Ji(t).No() && t.du.size > 0;
}
function Jr(t) {
  return ce(t)._u.size === 0;
}
function $_(t) {
  t.yu = void 0;
}
async function $q(t) {
  t.du.forEach((e, n) => {
    dh(t, e);
  });
}
async function Vq(t, e) {
  $_(t), fh(t) ? (t.gu.hu(e), hh(t)) : t.gu.set("Unknown");
}
async function Fq(t, e, n) {
  if ((t.gu.set("Online"), e instanceof A_ && e.state === 2 && e.cause))
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
      Y(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        r
      ),
        await Ua(t, r);
    }
  else if (
    (e instanceof ca ? t.yu.Gt(e) : e instanceof I_ ? t.yu.Yt(e) : t.yu.Wt(e),
    !n.isEqual(he.min()))
  )
    try {
      const r = await P_(t.localStore);
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
                l.withResumeToken(at.EMPTY_BYTE_STRING, l.snapshotVersion)
              ),
                M_(i, a);
              const c = new $r(l.target, a, 1, l.sequenceNumber);
              dh(i, c);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      Y("RemoteStore", "Failed to raise snapshot:", r), await Ua(t, r);
    }
}
async function Ua(t, e, n) {
  if (!wo(e)) throw e;
  t._u.add(1),
    await Io(t),
    t.gu.set("Offline"),
    n || (n = () => P_(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      Y("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t._u.delete(1),
        await Ul(t);
    });
}
function V_(t, e) {
  return e().catch((n) => Ua(t, n, e));
}
async function Bl(t) {
  const e = ce(t),
    n = ur(e);
  let r = e.fu.length > 0 ? e.fu[e.fu.length - 1].batchId : -1;
  for (; Uq(e); )
    try {
      const i = await Aq(e.localStore, r);
      if (i === null) {
        e.fu.length === 0 && n.Fo();
        break;
      }
      (r = i.batchId), Bq(e, i);
    } catch (i) {
      await Ua(e, i);
    }
  F_(e) && U_(e);
}
function Uq(t) {
  return Jr(t) && t.fu.length < 10;
}
function Bq(t, e) {
  t.fu.push(e);
  const n = ur(t);
  n.ko() && n.Yo && n.Xo(e.mutations);
}
function F_(t) {
  return Jr(t) && !ur(t).No() && t.fu.length > 0;
}
function U_(t) {
  ur(t).start();
}
async function jq(t) {
  ur(t).eu();
}
async function Hq(t) {
  const e = ur(t);
  for (const n of t.fu) e.Xo(n.mutations);
}
async function zq(t, e, n) {
  const r = t.fu.shift(),
    i = ah.from(r, e, n);
  await V_(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Bl(t);
}
async function Wq(t, e) {
  e &&
    ur(t).Yo &&
    (await (async function (n, r) {
      if (((i = r.code), OC(i) && i !== C.ABORTED)) {
        const s = n.fu.shift();
        ur(n).Oo(),
          await V_(n, () => n.remoteSyncer.rejectFailedWrite(s.batchId, r)),
          await Bl(n);
      }
      var i;
    })(t, e)),
    F_(t) && U_(t);
}
async function sm(t, e) {
  const n = ce(t);
  n.asyncQueue.verifyOperationInProgress(),
    Y("RemoteStore", "RemoteStore received new credentials");
  const r = Jr(n);
  n._u.add(3),
    await Io(n),
    r && n.gu.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n._u.delete(3),
    await Ul(n);
}
async function Kq(t, e) {
  const n = ce(t);
  e
    ? (n._u.delete(2), await Ul(n))
    : e || (n._u.add(2), await Io(n), n.gu.set("Unknown"));
}
function Ji(t) {
  return (
    t.pu ||
      ((t.pu = (function (e, n, r) {
        const i = ce(e);
        return (
          i.su(),
          new Oq(n, i.Vo, i.authCredentials, i.appCheckCredentials, i.It, r)
        );
      })(t.datastore, t.asyncQueue, {
        Yr: $q.bind(null, t),
        Zr: Vq.bind(null, t),
        Wo: Fq.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.pu.Oo(), fh(t) ? hh(t) : t.gu.set("Unknown"))
          : (await t.pu.stop(), $_(t));
      })),
    t.pu
  );
}
function ur(t) {
  return (
    t.Iu ||
      ((t.Iu = (function (e, n, r) {
        const i = ce(e);
        return (
          i.su(),
          new Dq(n, i.Vo, i.authCredentials, i.appCheckCredentials, i.It, r)
        );
      })(t.datastore, t.asyncQueue, {
        Yr: jq.bind(null, t),
        Zr: Wq.bind(null, t),
        tu: Hq.bind(null, t),
        Zo: zq.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.Iu.Oo(), await Bl(t))
          : (await t.Iu.stop(),
            t.fu.length > 0 &&
              (Y(
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
 */ class ph {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new _n()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new ph(e, n, o, i, s);
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
        new j(C.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
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
function mh(t, e) {
  if ((Sn("AsyncQueue", `${e}: ${t}`), wo(t)))
    return new j(C.UNAVAILABLE, `${e}: ${t}`);
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
 */ class wi {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || J.comparator(n.key, r.key)
      : (n, r) => J.comparator(n.key, r.key)),
      (this.keyedMap = ds()),
      (this.sortedSet = new Ge(this.comparator));
  }
  static emptySet(e) {
    return new wi(e.comparator);
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
    if (!(e instanceof wi) || this.size !== e.size) return !1;
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
    const r = new wi();
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
 */ class om {
  constructor() {
    this.Tu = new Ge(J.comparator);
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
        : oe()
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
class $i {
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
      new $i(e, n, wi.emptySet(n), s, r, i, !0, !1)
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
        Ll(this.query, e.query) &&
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
 */ class Gq {
  constructor() {
    (this.Au = void 0), (this.listeners = []);
  }
}
class Qq {
  constructor() {
    (this.queries = new Xi((e) => c_(e), Ll)),
      (this.onlineState = "Unknown"),
      (this.Ru = new Set());
  }
}
async function gh(t, e) {
  const n = ce(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new Gq())), i))
    try {
      s.Au = await n.onListen(r);
    } catch (o) {
      const a = mh(o, `Initialization of query '${Du(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s),
    s.listeners.push(e),
    e.bu(n.onlineState),
    s.Au && e.Pu(s.Au) && yh(n);
}
async function vh(t, e) {
  const n = ce(t),
    r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.listeners.indexOf(e);
    o >= 0 && (s.listeners.splice(o, 1), (i = s.listeners.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function Yq(t, e) {
  const n = ce(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const a of o.listeners) a.Pu(i) && (r = !0);
      o.Au = i;
    }
  }
  r && yh(n);
}
function Xq(t, e, n) {
  const r = ce(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function yh(t) {
  t.Ru.forEach((e) => {
    e.next();
  });
}
class _h {
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
      e = new $i(
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
    (e = $i.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache)),
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
 */ class B_ {
  constructor(e) {
    this.key = e;
  }
}
class j_ {
  constructor(e) {
    this.key = e;
  }
}
class Jq {
  constructor(e, n) {
    (this.query = e),
      (this.Lu = n),
      (this.Uu = null),
      (this.current = !1),
      (this.qu = fe()),
      (this.mutatedKeys = fe()),
      (this.Ku = u_(e)),
      (this.Gu = new wi(this.Ku));
  }
  get Qu() {
    return this.Lu;
  }
  ju(e, n) {
    const r = n ? n.Wu : new om(),
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
          f = rh(this.query, d) ? d : null,
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
                return oe();
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
            snapshot: new $i(
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
          { Gu: this.Gu, Wu: new om(), mutatedKeys: this.mutatedKeys, $i: !1 },
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
    (this.qu = fe()),
      this.Gu.forEach((r) => {
        this.Xu(r.key) && (this.qu = this.qu.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.qu.has(r) || n.push(new j_(r));
      }),
      this.qu.forEach((r) => {
        e.has(r) || n.push(new B_(r));
      }),
      n
    );
  }
  Zu(e) {
    (this.Lu = e.Hi), (this.qu = fe());
    const n = this.ju(e.documents);
    return this.applyChanges(n, !0);
  }
  tc() {
    return $i.fromInitialDocuments(
      this.query,
      this.Gu,
      this.mutatedKeys,
      this.Uu === 0
    );
  }
}
class Zq {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class e1 {
  constructor(e) {
    (this.key = e), (this.ec = !1);
  }
}
class t1 {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.nc = {}),
      (this.sc = new Xi((a) => c_(a), Ll)),
      (this.ic = new Map()),
      (this.rc = new Set()),
      (this.oc = new Ge(J.comparator)),
      (this.uc = new Map()),
      (this.cc = new lh()),
      (this.ac = {}),
      (this.hc = new Map()),
      (this.lc = Mi.vn()),
      (this.onlineState = "Unknown"),
      (this.fc = void 0);
  }
  get isPrimaryClient() {
    return this.fc === !0;
  }
}
async function n1(t, e) {
  const n = h1(t);
  let r, i;
  const s = n.sc.get(e);
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.tc());
  else {
    const o = await Sq(n.localStore, kn(e));
    n.isPrimaryClient && N_(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId), (i = await r1(n, e, r, a === "current"));
  }
  return i;
}
async function r1(t, e, n, r) {
  t.dc = (u, d, h) =>
    (async function (f, g, y, _) {
      let w = g.view.ju(y);
      w.$i &&
        (w = await nm(f.localStore, g.query, !1).then(({ documents: E }) =>
          g.view.ju(E, w)
        ));
      const v = _ && _.targetChanges.get(g.targetId),
        k = g.view.applyChanges(w, f.isPrimaryClient, v);
      return lm(f, g.targetId, k.Yu), k.snapshot;
    })(t, u, d, h);
  const i = await nm(t.localStore, e, !0),
    s = new Jq(e, i.Hi),
    o = s.ju(i.documents),
    a = To.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline"
    ),
    l = s.applyChanges(o, t.isPrimaryClient, a);
  lm(t, n, l.Yu);
  const c = new Zq(e, n, s);
  return (
    t.sc.set(e, c),
    t.ic.has(n) ? t.ic.get(n).push(e) : t.ic.set(n, [e]),
    l.snapshot
  );
}
async function i1(t, e) {
  const n = ce(t),
    r = n.sc.get(e),
    i = n.ic.get(r.targetId);
  if (i.length > 1)
    return (
      n.ic.set(
        r.targetId,
        i.filter((s) => !Ll(s, e))
      ),
      void n.sc.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await $u(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              L_(n.remoteStore, r.targetId),
              Vu(n, r.targetId);
          })
          .catch(_o)))
    : (Vu(n, r.targetId), await $u(n.localStore, r.targetId, !0));
}
async function s1(t, e, n) {
  const r = f1(t);
  try {
    const i = await (function (s, o) {
      const a = ce(s),
        l = ze.now(),
        c = o.reduce((h, f) => h.add(f.key), fe());
      let u, d;
      return a.persistence
        .runTransaction("Locally write mutations", "readwrite", (h) => {
          let f = Cn(),
            g = fe();
          return a.Gi.getEntries(h, c)
            .next((y) => {
              (f = y),
                f.forEach((_, w) => {
                  w.isValidDocument() || (g = g.add(_));
                });
            })
            .next(() => a.localDocuments.getOverlayedDocuments(h, f))
            .next((y) => {
              u = y;
              const _ = [];
              for (const w of o) {
                const v = xC(w, u.get(w.key).overlayedDocument);
                v != null &&
                  _.push(new fr(w.key, v, i_(v.value.mapValue), zt.exists(!0)));
              }
              return a.mutationQueue.addMutationBatch(h, l, _, o);
            })
            .next((y) => {
              d = y;
              const _ = y.applyToLocalDocumentSet(u, g);
              return a.documentOverlayCache.saveOverlays(h, y.batchId, _);
            });
        })
        .then(() => ({ batchId: d.batchId, changes: b_(u) }));
    })(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (s, o, a) {
        let l = s.ac[s.currentUser.toKey()];
        l || (l = new Ge(Ce)),
          (l = l.insert(o, a)),
          (s.ac[s.currentUser.toKey()] = l);
      })(r, i.batchId, n),
      await Ao(r, i.changes),
      await Bl(r.remoteStore);
  } catch (i) {
    const s = mh(i, "Failed to persist write");
    n.reject(s);
  }
}
async function H_(t, e) {
  const n = ce(t);
  try {
    const r = await Tq(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.uc.get(s);
      o &&
        (Ne(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.ec = !0)
          : i.modifiedDocuments.size > 0
          ? Ne(o.ec)
          : i.removedDocuments.size > 0 && (Ne(o.ec), (o.ec = !1)));
    }),
      await Ao(n, r, e);
  } catch (r) {
    await _o(r);
  }
}
function am(t, e, n) {
  const r = ce(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.sc.forEach((s, o) => {
      const a = o.view.bu(e);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (s, o) {
        const a = ce(s);
        a.onlineState = o;
        let l = !1;
        a.queries.forEach((c, u) => {
          for (const d of u.listeners) d.bu(o) && (l = !0);
        }),
          l && yh(a);
      })(r.eventManager, e),
      i.length && r.nc.Wo(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function o1(t, e, n) {
  const r = ce(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.uc.get(e),
    s = i && i.key;
  if (s) {
    let o = new Ge(J.comparator);
    o = o.insert(s, rt.newNoDocument(s, he.min()));
    const a = fe().add(s),
      l = new Vl(he.min(), new Map(), new We(Ce), o, a);
    await H_(r, l), (r.oc = r.oc.remove(s)), r.uc.delete(e), wh(r);
  } else
    await $u(r.localStore, e, !1)
      .then(() => Vu(r, e, n))
      .catch(_o);
}
async function a1(t, e) {
  const n = ce(t),
    r = e.batch.batchId;
  try {
    const i = await Eq(n.localStore, e);
    W_(n, r, null),
      z_(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await Ao(n, i);
  } catch (i) {
    await _o(i);
  }
}
async function l1(t, e, n) {
  const r = ce(t);
  try {
    const i = await (function (s, o) {
      const a = ce(s);
      return a.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (l) => {
          let c;
          return a.mutationQueue
            .lookupMutationBatch(l, o)
            .next(
              (u) => (
                Ne(u !== null),
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
    W_(r, e, n),
      z_(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await Ao(r, i);
  } catch (i) {
    await _o(i);
  }
}
function z_(t, e) {
  (t.hc.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.hc.delete(e);
}
function W_(t, e, n) {
  const r = ce(t);
  let i = r.ac[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.ac[r.currentUser.toKey()] = i);
  }
}
function Vu(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.ic.get(e)) t.sc.delete(r), n && t.nc._c(r, n);
  t.ic.delete(e),
    t.isPrimaryClient &&
      t.cc.ls(e).forEach((r) => {
        t.cc.containsKey(r) || K_(t, r);
      });
}
function K_(t, e) {
  t.rc.delete(e.path.canonicalString());
  const n = t.oc.get(e);
  n !== null &&
    (L_(t.remoteStore, n), (t.oc = t.oc.remove(e)), t.uc.delete(n), wh(t));
}
function lm(t, e, n) {
  for (const r of n)
    r instanceof B_
      ? (t.cc.addReference(r.key, e), c1(t, r))
      : r instanceof j_
      ? (Y("SyncEngine", "Document no longer in limbo: " + r.key),
        t.cc.removeReference(r.key, e),
        t.cc.containsKey(r.key) || K_(t, r.key))
      : oe();
}
function c1(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.oc.get(n) ||
    t.rc.has(r) ||
    (Y("SyncEngine", "New document in limbo: " + n), t.rc.add(r), wh(t));
}
function wh(t) {
  for (; t.rc.size > 0 && t.oc.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.rc.values().next().value;
    t.rc.delete(e);
    const n = new J(Me.fromString(e)),
      r = t.lc.next();
    t.uc.set(r, new e1(n)),
      (t.oc = t.oc.insert(n, r)),
      N_(t.remoteStore, new $r(kn(Nl(n.path)), r, 2, Zd.at));
  }
}
async function Ao(t, e, n) {
  const r = ce(t),
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
            const u = uh.Ci(l.targetId, c);
            s.push(u);
          }
        })
      );
    }),
    await Promise.all(o),
    r.nc.Wo(i),
    await (async function (a, l) {
      const c = ce(a);
      try {
        await c.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (u) =>
            P.forEach(l, (d) =>
              P.forEach(d.Si, (h) =>
                c.persistence.referenceDelegate.addReference(u, d.targetId, h)
              ).next(() =>
                P.forEach(d.Di, (h) =>
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
        if (!wo(u)) throw u;
        Y("LocalStore", "Failed to update sequence numbers: " + u);
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
async function u1(t, e) {
  const n = ce(t);
  if (!n.currentUser.isEqual(e)) {
    Y("SyncEngine", "User change. New user:", e.toKey());
    const r = await R_(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.hc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new j(C.CANCELLED, s));
          });
        }),
          i.hc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await Ao(n, r.ji);
  }
}
function d1(t, e) {
  const n = ce(t),
    r = n.uc.get(e);
  if (r && r.ec) return fe().add(r.key);
  {
    let i = fe();
    const s = n.ic.get(e);
    if (!s) return i;
    for (const o of s) {
      const a = n.sc.get(o);
      i = i.unionWith(a.view.Qu);
    }
    return i;
  }
}
function h1(t) {
  const e = ce(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = H_.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = d1.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = o1.bind(null, e)),
    (e.nc.Wo = Yq.bind(null, e.eventManager)),
    (e.nc._c = Xq.bind(null, e.eventManager)),
    e
  );
}
function f1(t) {
  const e = ce(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = a1.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = l1.bind(null, e)),
    e
  );
}
class p1 {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.It = Fl(e.databaseInfo.databaseId)),
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
    return bq(this.persistence, new _q(), e.initialUser, this.It);
  }
  gc(e) {
    return new vq(ch.Bs, this.It);
  }
  mc(e) {
    return new Cq();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class m1 {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        am(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = u1.bind(
        null,
        this.syncEngine
      )),
      await Kq(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new Qq();
  }
  createDatastore(e) {
    const n = Fl(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new Pq(i));
    var i;
    return (function (s, o, a, l) {
      return new Nq(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (a) => am(this.syncEngine, a, 0)),
      (o = im.C() ? new im() : new qq()),
      new Mq(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, a, l, c) {
      const u = new t1(r, i, s, o, a, l);
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
      const n = ce(e);
      Y("RemoteStore", "RemoteStore shutting down."),
        n._u.add(5),
        await Io(n),
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
 */ class bh {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.Ac(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.Ac(this.observer.error, e)
      : Sn("Uncaught Error in snapshot listener:", e);
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
 */ class g1 {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = Ct.UNAUTHENTICATED),
      (this.clientId = Zy.R()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        Y("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          Y("FirestoreClient", "Received new app check token=", s),
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
      throw new j(
        C.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new _n();
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
          const r = mh(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function v1(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    Y("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await R_(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function y1(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await _1(t);
  Y("FirestoreClient", "Initializing OnlineComponentProvider");
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => sm(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => sm(e.remoteStore, s)),
    (t.onlineComponents = e);
}
async function _1(t) {
  return (
    t.offlineComponents ||
      (Y("FirestoreClient", "Using default OfflineComponentProvider"),
      await v1(t, new p1())),
    t.offlineComponents
  );
}
async function G_(t) {
  return (
    t.onlineComponents ||
      (Y("FirestoreClient", "Using default OnlineComponentProvider"),
      await y1(t, new m1())),
    t.onlineComponents
  );
}
function w1(t) {
  return G_(t).then((e) => e.syncEngine);
}
async function Ba(t) {
  const e = await G_(t),
    n = e.eventManager;
  return (
    (n.onListen = n1.bind(null, e.syncEngine)),
    (n.onUnlisten = i1.bind(null, e.syncEngine)),
    n
  );
}
function b1(t, e, n = {}) {
  const r = new _n();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const c = new bh({
            next: (d) => {
              s.enqueueAndForget(() => vh(i, u));
              const h = d.docs.has(o);
              !h && d.fromCache
                ? l.reject(
                    new j(
                      C.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : h && d.fromCache && a && a.source === "server"
                ? l.reject(
                    new j(
                      C.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : l.resolve(d);
            },
            error: (d) => l.reject(d),
          }),
          u = new _h(Nl(o.path), c, { includeMetadataChanges: !0, Nu: !0 });
        return gh(i, u);
      })(await Ba(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
function E1(t, e, n = {}) {
  const r = new _n();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const c = new bh({
            next: (d) => {
              s.enqueueAndForget(() => vh(i, u)),
                d.fromCache && a.source === "server"
                  ? l.reject(
                      new j(
                        C.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : l.resolve(d);
            },
            error: (d) => l.reject(d),
          }),
          u = new _h(o, c, { includeMetadataChanges: !0, Nu: !0 });
        return gh(i, u);
      })(await Ba(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
const cm = new Map();
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
 */ function Q_(t, e, n) {
  if (!n)
    throw new j(
      C.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    );
}
function T1(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new j(C.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function um(t) {
  if (!J.isDocumentKey(t))
    throw new j(
      C.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function dm(t) {
  if (J.isDocumentKey(t))
    throw new j(
      C.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function jl(t) {
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
  return typeof t == "function" ? "a function" : oe();
}
function Mt(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new j(
        C.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = jl(t);
      throw new j(
        C.INVALID_ARGUMENT,
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
 */ class hm {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new j(
          C.INVALID_ARGUMENT,
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
        throw new j(
          C.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling =
        !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      T1(
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
 */ class Eh {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new hm({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new j(
        C.FAILED_PRECONDITION,
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
      throw new j(
        C.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new hm(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new Gk();
          switch (n.type) {
            case "gapi":
              const r = n.client;
              return new Xk(
                r,
                n.sessionIndex || "0",
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case "provider":
              return n.client;
            default:
              throw new j(
                C.INVALID_ARGUMENT,
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
        const n = cm.get(e);
        n &&
          (Y("ComponentProvider", "Removing Datastore"),
          cm.delete(e),
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
 */ class gt {
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
    return new or(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new gt(this.firestore, e, this._key);
  }
}
class Zi {
  constructor(e, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new Zi(this.firestore, e, this._query);
  }
}
class or extends Zi {
  constructor(e, n, r) {
    super(e, n, Nl(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new gt(this.firestore, null, new J(e));
  }
  withConverter(e) {
    return new or(this.firestore, e, this._path);
  }
}
function I1(t, e, ...n) {
  if (((t = yt(t)), Q_("collection", "path", e), t instanceof Eh)) {
    const r = Me.fromString(e, ...n);
    return dm(r), new or(t, null, r);
  }
  {
    if (!(t instanceof gt || t instanceof or))
      throw new j(
        C.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(Me.fromString(e, ...n));
    return dm(r), new or(t.firestore, null, r);
  }
}
function Vr(t, e, ...n) {
  if (
    ((t = yt(t)),
    arguments.length === 1 && (e = Zy.R()),
    Q_("doc", "path", e),
    t instanceof Eh)
  ) {
    const r = Me.fromString(e, ...n);
    return um(r), new gt(t, null, new J(r));
  }
  {
    if (!(t instanceof gt || t instanceof or))
      throw new j(
        C.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(Me.fromString(e, ...n));
    return (
      um(r), new gt(t.firestore, t instanceof or ? t.converter : null, new J(r))
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
 */ class A1 {
  constructor() {
    (this.$c = Promise.resolve()),
      (this.Bc = []),
      (this.Lc = !1),
      (this.Uc = []),
      (this.qc = null),
      (this.Kc = !1),
      (this.Gc = !1),
      (this.Qc = []),
      (this.xo = new O_(this, "async_queue_retry")),
      (this.jc = () => {
        const n = $c();
        n &&
          Y("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.xo.bo();
      });
    const e = $c();
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
      const n = $c();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.jc);
    }
  }
  enqueue(e) {
    if ((this.Wc(), this.Lc)) return new Promise(() => {});
    const n = new _n();
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
        if (!wo(e)) throw e;
        Y("AsyncQueue", "Operation failed with retryable error: " + e);
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
            throw (Sn("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.Kc = !1), r))
      )
    );
    return (this.$c = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.Wc(), this.Qc.indexOf(e) > -1 && (n = 0);
    const i = ph.createAndSchedule(this, e, n, r, (s) => this.Jc(s));
    return this.Uc.push(i), i;
  }
  Wc() {
    this.qc && oe();
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
function fm(t) {
  return (function (e, n) {
    if (typeof e != "object" || e === null) return !1;
    const r = e;
    for (const i of n) if (i in r && typeof r[i] == "function") return !0;
    return !1;
  })(t, ["next", "error", "complete"]);
}
class qn extends Eh {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = new A1()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || Y_(this), this._firestoreClient.terminate();
  }
}
function So(t, e) {
  const n = typeof t == "object" ? t : _v(),
    r = typeof t == "string" ? t : e || "(default)";
  return bd(n, "firestore").getImmediate({ identifier: r });
}
function Hl(t) {
  return (
    t._firestoreClient || Y_(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function Y_(t) {
  var e;
  const n = t._freezeSettings(),
    r = (function (i, s, o, a) {
      return new lC(
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
  t._firestoreClient = new g1(
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
 */ class zl {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new j(
          C.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new ht(e);
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
 */ class Vi {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new Vi(at.fromBase64String(e));
    } catch (n) {
      throw new j(
        C.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(e) {
    return new Vi(at.fromUint8Array(e));
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
 */ class es {
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
 */ class Th {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new j(
        C.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new j(
        C.INVALID_ARGUMENT,
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
    return Ce(this._lat, e._lat) || Ce(this._long, e._long);
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
 */ const S1 = /^__.*__$/;
class k1 {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new fr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new Eo(e, this.data, n, this.fieldTransforms);
  }
}
class X_ {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return new fr(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function J_(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw oe();
  }
}
class Wl {
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
    return new Wl(
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
    return ja(
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
    if (J_(this.na) && S1.test(e))
      throw this.aa('Document fields cannot begin and end with "__"');
  }
}
class C1 {
  constructor(e, n, r) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.It = r || Fl(e));
  }
  fa(e, n, r, i = !1) {
    return new Wl(
      { na: e, methodName: n, la: r, path: ht.emptyPath(), ra: !1, ha: i },
      this.databaseId,
      this.It,
      this.ignoreUndefinedProperties
    );
  }
}
function Kl(t) {
  const e = t._freezeSettings(),
    n = Fl(t._databaseId);
  return new C1(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function Z_(t, e, n, r, i, s = {}) {
  const o = t.fa(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  Ah("Data must be an object, but it was:", o, r);
  const a = tw(r, o);
  let l, c;
  if (s.merge) (l = new Ht(o.fieldMask)), (c = o.fieldTransforms);
  else if (s.mergeFields) {
    const u = [];
    for (const d of s.mergeFields) {
      const h = Fu(e, d, n);
      if (!o.contains(h))
        throw new j(
          C.INVALID_ARGUMENT,
          `Field '${h}' is specified in your field mask but missing from your input data.`
        );
      rw(u, h) || u.push(h);
    }
    (l = new Ht(u)), (c = o.fieldTransforms.filter((d) => l.covers(d.field)));
  } else (l = null), (c = o.fieldTransforms);
  return new k1(new xt(a), l, c);
}
class Gl extends es {
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
    return e instanceof Gl;
  }
}
function ew(t, e, n) {
  return new Wl(
    { na: 3, la: e.settings.la, methodName: t._methodName, ra: n },
    e.databaseId,
    e.It,
    e.ignoreUndefinedProperties
  );
}
class Ih extends es {
  _toFieldTransform(e) {
    return new ih(e.path, new Ys());
  }
  isEqual(e) {
    return e instanceof Ih;
  }
}
class q1 extends es {
  constructor(e, n) {
    super(e), (this.da = n);
  }
  _toFieldTransform(e) {
    const n = ew(this, e, !0),
      r = this.da.map((s) => Zr(s, n)),
      i = new Ni(r);
    return new ih(e.path, i);
  }
  isEqual(e) {
    return this === e;
  }
}
class x1 extends es {
  constructor(e, n) {
    super(e), (this.da = n);
  }
  _toFieldTransform(e) {
    const n = ew(this, e, !0),
      r = this.da.map((s) => Zr(s, n)),
      i = new Li(r);
    return new ih(e.path, i);
  }
  isEqual(e) {
    return this === e;
  }
}
function R1(t, e, n, r) {
  const i = t.fa(1, e, n);
  Ah("Data must be an object, but it was:", i, r);
  const s = [],
    o = xt.empty();
  Xr(r, (l, c) => {
    const u = Sh(e, l, n);
    c = yt(c);
    const d = i.ua(u);
    if (c instanceof Gl) s.push(u);
    else {
      const h = Zr(c, d);
      h != null && (s.push(u), o.set(u, h));
    }
  });
  const a = new Ht(s);
  return new X_(o, a, i.fieldTransforms);
}
function P1(t, e, n, r, i, s) {
  const o = t.fa(1, e, n),
    a = [Fu(e, r, n)],
    l = [i];
  if (s.length % 2 != 0)
    throw new j(
      C.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let h = 0; h < s.length; h += 2) a.push(Fu(e, s[h])), l.push(s[h + 1]);
  const c = [],
    u = xt.empty();
  for (let h = a.length - 1; h >= 0; --h)
    if (!rw(c, a[h])) {
      const f = a[h];
      let g = l[h];
      g = yt(g);
      const y = o.ua(f);
      if (g instanceof Gl) c.push(f);
      else {
        const _ = Zr(g, y);
        _ != null && (c.push(f), u.set(f, _));
      }
    }
  const d = new Ht(c);
  return new X_(u, d, o.fieldTransforms);
}
function O1(t, e, n, r = !1) {
  return Zr(n, t.fa(r ? 4 : 3, e));
}
function Zr(t, e) {
  if (nw((t = yt(t)))) return Ah("Unsupported field value:", e, t), tw(t, e);
  if (t instanceof es)
    return (
      (function (n, r) {
        if (!J_(r.na))
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
        let a = Zr(o, r.ca(s));
        a == null && (a = { nullValue: "NULL_VALUE" }), i.push(a), s++;
      }
      return { arrayValue: { values: i } };
    })(t, e);
  }
  return (function (n, r) {
    if ((n = yt(n)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof n == "number") return IC(r.It, n);
    if (typeof n == "boolean") return { booleanValue: n };
    if (typeof n == "string") return { stringValue: n };
    if (n instanceof Date) {
      const i = ze.fromDate(n);
      return { timestampValue: Fa(r.It, i) };
    }
    if (n instanceof ze) {
      const i = new ze(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return { timestampValue: Fa(r.It, i) };
    }
    if (n instanceof Th)
      return {
        geoPointValue: { latitude: n.latitude, longitude: n.longitude },
      };
    if (n instanceof Vi) return { bytesValue: S_(r.It, n._byteString) };
    if (n instanceof gt) {
      const i = r.databaseId,
        s = n.firestore._databaseId;
      if (!s.isEqual(i))
        throw r.aa(
          `Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`
        );
      return {
        referenceValue: oh(
          n.firestore._databaseId || r.databaseId,
          n._key.path
        ),
      };
    }
    throw r.aa(`Unsupported field value: ${jl(n)}`);
  })(t, e);
}
function tw(t, e) {
  const n = {};
  return (
    e_(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Xr(t, (r, i) => {
          const s = Zr(i, e.ia(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function nw(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof ze ||
    t instanceof Th ||
    t instanceof Vi ||
    t instanceof gt ||
    t instanceof es
  );
}
function Ah(t, e, n) {
  if (
    !nw(n) ||
    !(function (r) {
      return (
        typeof r == "object" &&
        r !== null &&
        (Object.getPrototypeOf(r) === Object.prototype ||
          Object.getPrototypeOf(r) === null)
      );
    })(n)
  ) {
    const r = jl(n);
    throw r === "an object" ? e.aa(t + " a custom object") : e.aa(t + " " + r);
  }
}
function Fu(t, e, n) {
  if ((e = yt(e)) instanceof zl) return e._internalPath;
  if (typeof e == "string") return Sh(t, e);
  throw ja("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const D1 = new RegExp("[~\\*/\\[\\]]");
function Sh(t, e, n) {
  if (e.search(D1) >= 0)
    throw ja(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new zl(...e.split("."))._internalPath;
  } catch {
    throw ja(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function ja(t, e, n, r, i) {
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
    new j(C.INVALID_ARGUMENT, a + t + l)
  );
}
function rw(t, e) {
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
 */ class iw {
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
    return new gt(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new N1(
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
      const n = this._document.data.field(kh("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class N1 extends iw {
  data() {
    return super.data();
  }
}
function kh(t, e) {
  return typeof e == "string"
    ? Sh(t, e)
    : e instanceof zl
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
 */ class hs {
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
class sw extends iw {
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
        const n = new ua(
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
      const r = this._document.data.field(kh("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class ua extends sw {
  data(e = {}) {
    return super.data(e);
  }
}
class ow {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new hs(i.hasPendingWrites, i.fromCache)),
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
        new ua(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new hs(
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
      throw new j(
        C.INVALID_ARGUMENT,
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
              doc: new ua(
                r._firestore,
                r._userDataWriter,
                o.doc.key,
                o.doc,
                new hs(
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
                const a = new ua(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new hs(
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
                  { type: L1(o.type), doc: a, oldIndex: l, newIndex: c }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function L1(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return oe();
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
 */ function aw(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new j(
      C.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class M1 {}
function $1(t, ...e) {
  for (const n of e) t = n._apply(t);
  return t;
}
class V1 extends M1 {
  constructor(e, n, r) {
    super(), (this.wa = e), (this.ma = n), (this.ga = r), (this.type = "where");
  }
  _apply(e) {
    const n = Kl(e.firestore),
      r = (function (i, s, o, a, l, c, u) {
        let d;
        if (l.isKeyField()) {
          if (c === "array-contains" || c === "array-contains-any")
            throw new j(
              C.INVALID_ARGUMENT,
              `Invalid Query. You can't perform '${c}' queries on documentId().`
            );
          if (c === "in" || c === "not-in") {
            mm(u, c);
            const f = [];
            for (const g of u) f.push(pm(a, i, g));
            d = { arrayValue: { values: f } };
          } else d = pm(a, i, u);
        } else
          (c !== "in" && c !== "not-in" && c !== "array-contains-any") ||
            mm(u, c),
            (d = O1(o, s, u, c === "in" || c === "not-in"));
        const h = It.create(l, c, d);
        return (
          (function (f, g) {
            if (g.dt()) {
              const _ = a_(f);
              if (_ !== null && !_.isEqual(g.field))
                throw new j(
                  C.INVALID_ARGUMENT,
                  `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${g.field.toString()}'`
                );
              const w = o_(f);
              w !== null && U1(f, g.field, w);
            }
            const y = (function (_, w) {
              for (const v of _.filters) if (w.indexOf(v.op) >= 0) return v.op;
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
                ? new j(
                    C.INVALID_ARGUMENT,
                    `Invalid query. You cannot use more than one '${g.op.toString()}' filter.`
                  )
                : new j(
                    C.INVALID_ARGUMENT,
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
    return new Zi(
      e.firestore,
      e.converter,
      (function (i, s) {
        const o = i.filters.concat([s]);
        return new bo(
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
function F1(t, e, n) {
  const r = e,
    i = kh("where", t);
  return new V1(i, r, n);
}
function pm(t, e, n) {
  if (typeof (n = yt(n)) == "string") {
    if (n === "")
      throw new j(
        C.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
      );
    if (!l_(e) && n.indexOf("/") !== -1)
      throw new j(
        C.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
      );
    const r = e.path.child(Me.fromString(n));
    if (!J.isDocumentKey(r))
      throw new j(
        C.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
      );
    return Up(t, new J(r));
  }
  if (n instanceof gt) return Up(t, n._key);
  throw new j(
    C.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jl(
      n
    )}.`
  );
}
function mm(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new j(
      C.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
    );
  if (t.length > 10)
    throw new j(
      C.INVALID_ARGUMENT,
      `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`
    );
}
function U1(t, e, n) {
  if (!n.isEqual(e))
    throw new j(
      C.INVALID_ARGUMENT,
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
 */ class B1 {
  convertValue(e, n = "none") {
    switch (Kr(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return Be(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Oi(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw oe();
    }
  }
  convertObject(e, n) {
    const r = {};
    return (
      Xr(e.fields, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new Th(Be(e.latitude), Be(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = n_(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Ks(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = cr(e);
    return new ze(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = Me.fromString(e);
    Ne(x_(r));
    const i = new r_(r.get(1), r.get(3)),
      s = new J(r.popFirst(5));
    return (
      i.isEqual(n) ||
        Sn(
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
 */ function lw(t, e, n) {
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
 */ function cw(t) {
  t = Mt(t, gt);
  const e = Mt(t.firestore, qn);
  return b1(Hl(e), t._key).then((n) => dw(e, t, n));
}
class Ch extends B1 {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new Vi(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new gt(this.firestore, null, n);
  }
}
function j1(t) {
  t = Mt(t, Zi);
  const e = Mt(t.firestore, qn),
    n = Hl(e),
    r = new Ch(e);
  return aw(t._query), E1(n, t._query).then((i) => new ow(e, r, t, i));
}
function H1(t, e, n) {
  t = Mt(t, gt);
  const r = Mt(t.firestore, qn),
    i = lw(t.converter, e, n);
  return Ql(r, [
    Z_(Kl(r), "setDoc", t._key, i, t.converter !== null, n).toMutation(
      t._key,
      zt.none()
    ),
  ]);
}
function z1(t, e, n, ...r) {
  t = Mt(t, gt);
  const i = Mt(t.firestore, qn),
    s = Kl(i);
  let o;
  return (
    (o =
      typeof (e = yt(e)) == "string" || e instanceof zl
        ? P1(s, "updateDoc", t._key, e, n, r)
        : R1(s, "updateDoc", t._key, e)),
    Ql(i, [o.toMutation(t._key, zt.exists(!0))])
  );
}
function tD(t) {
  return Ql(Mt(t.firestore, qn), [new sh(t._key, zt.none())]);
}
function nD(t, e) {
  const n = Mt(t.firestore, qn),
    r = Vr(t),
    i = lw(t.converter, e);
  return Ql(n, [
    Z_(
      Kl(t.firestore),
      "addDoc",
      r._key,
      i,
      t.converter !== null,
      {}
    ).toMutation(r._key, zt.exists(!1)),
  ]).then(() => r);
}
function uw(t, ...e) {
  var n, r, i;
  t = yt(t);
  let s = { includeMetadataChanges: !1 },
    o = 0;
  typeof e[o] != "object" || fm(e[o]) || ((s = e[o]), o++);
  const a = { includeMetadataChanges: s.includeMetadataChanges };
  if (fm(e[o])) {
    const d = e[o];
    (e[o] = (n = d.next) === null || n === void 0 ? void 0 : n.bind(d)),
      (e[o + 1] = (r = d.error) === null || r === void 0 ? void 0 : r.bind(d)),
      (e[o + 2] =
        (i = d.complete) === null || i === void 0 ? void 0 : i.bind(d));
  }
  let l, c, u;
  if (t instanceof gt)
    (c = Mt(t.firestore, qn)),
      (u = Nl(t._key.path)),
      (l = {
        next: (d) => {
          e[o] && e[o](dw(c, t, d));
        },
        error: e[o + 1],
        complete: e[o + 2],
      });
  else {
    const d = Mt(t, Zi);
    (c = Mt(d.firestore, qn)), (u = d._query);
    const h = new Ch(c);
    (l = {
      next: (f) => {
        e[o] && e[o](new ow(c, h, d, f));
      },
      error: e[o + 1],
      complete: e[o + 2],
    }),
      aw(t._query);
  }
  return (function (d, h, f, g) {
    const y = new bh(g),
      _ = new _h(h, y, f);
    return (
      d.asyncQueue.enqueueAndForget(async () => gh(await Ba(d), _)),
      () => {
        y.Rc(), d.asyncQueue.enqueueAndForget(async () => vh(await Ba(d), _));
      }
    );
  })(Hl(c), u, a, l);
}
function Ql(t, e) {
  return (function (n, r) {
    const i = new _n();
    return (
      n.asyncQueue.enqueueAndForget(async () => s1(await w1(n), r, i)),
      i.promise
    );
  })(Hl(t), e);
}
function dw(t, e, n) {
  const r = n.docs.get(e._key),
    i = new Ch(t);
  return new sw(
    t,
    i,
    e._key,
    r,
    new hs(n.hasPendingWrites, n.fromCache),
    e.converter
  );
}
function rD() {
  return new Ih("serverTimestamp");
}
function iD(...t) {
  return new q1("arrayUnion", t);
}
function sD(...t) {
  return new x1("arrayRemove", t);
}
(function (t, e = !0) {
  (function (n) {
    Yi = n;
  })(io),
    qi(
      new Br(
        "firestore",
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider("app").getImmediate(),
            o = new qn(
              new Qk(n.getProvider("auth-internal")),
              new Zk(n.getProvider("app-check-internal")),
              (function (a, l) {
                if (
                  !Object.prototype.hasOwnProperty.apply(a.options, [
                    "projectId",
                  ])
                )
                  throw new j(
                    C.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new r_(a.options.projectId, l);
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
    sr(Np, "3.5.0", t),
    sr(Np, "3.5.0", "esm2017");
})();
const hw = {
    0: "",
    1: "mundano-no-text-banner-icon.png",
    2: "recruta-no-text-banner-icon.png",
    3: "operador-no-text-banner-icon.png",
    4: "agente-especial-no-text-banner-icon.png",
    5: "agente-de-elite-no-text-banner-icon.png",
    6: "parceiro-no-text-banner.webp",
    7: "equipe-no-text-banner.webp",
  },
  oD = {
    0: "Nenhuma",
    1: "Mundano",
    2: "Recruta",
    3: "Operador",
    4: "Agente Especial",
    5: "Agente de Elite",
    6: "Parceiro",
    7: "Equipe",
  },
  qt = {
    mundano: "#FFFFFF",
    recruta: "#006BB8",
    operador: "#2EA802",
    agenteEspecial: "#BFB200",
    agenteElite: "#CF0078",
    parceiro: "#00cba8",
    equipe: "#7a1fa9",
  },
  Yl = (t) => (Hi("data-v-16b984df"), (t = t()), zi(), t),
  W1 = { class: "header" },
  K1 = { class: "header-content" },
  G1 = ["onMouseup"],
  Q1 = Yl(() =>
    O("img", { class: "cris-icon", src: dv, alt: "cris icon" }, null, -1)
  ),
  Y1 = Yl(() =>
    O("img", { class: "cris-text", src: hv, alt: "cris logo" }, null, -1)
  ),
  X1 = [Q1, Y1],
  J1 = { key: 0, class: "nav-container" },
  Z1 = Yl(() =>
    O(
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
  ex = { key: 1 },
  tx = { key: 0, class: "nav-end-container" },
  nx = { key: 1, class: "nav-end-container" },
  rx = ["src"],
  ix = { class: "profile-picture-container" },
  sx = ["src"],
  ox = Yl(() => O("div", { class: "header-line" }, null, -1)),
  ax = Ze({
    __name: "HeaderDesktopView",
    setup(t) {
      hl((y) => ({ "141322c4": g.value }));
      const e = Ki(),
        n = So(),
        r = yd(),
        i = Wi(),
        s = ue(!1),
        o = ue(!0),
        a = ue(),
        l = ue(),
        c = () => {
          const y = new Lt();
          y.setCustomParameters({ prompt: "select_account" }), Fs(e, y);
        },
        u = () => {
          a.value &&
            r.push({ name: "user-profile", params: { id: a.value.uid } });
        },
        d = (y) => {
          if (o.value) return;
          const _ = new Lt();
          _.setCustomParameters({ prompt: "select_account" }),
            Fs(e, _).then(() => {
              r.push({ name: y });
            });
        },
        h = () => {
          const y = r.resolve({ name: "home" });
          window.open(y.href, "_blank");
        };
      un(() => {
        ao(e, async (y) => {
          y
            ? ((s.value = !0),
              (l.value = uw(Vr(n, "users", y.uid), (_) => {
                _.data() && (a.value = _.data());
              })))
            : (s.value = !1),
            (o.value = !1);
        });
      }),
        eo(() => {
          l.value && l.value();
        });
      const f = (y) => !!i.path.includes(y),
        g = Te(() => {
          if (a.value)
            return a.value.tier === 1
              ? qt.mundano
              : a.value.tier === 2
              ? qt.recruta
              : a.value.tier === 3
              ? qt.operador
              : a.value.tier === 4
              ? qt.agenteEspecial
              : a.value.tier === 5
              ? qt.agenteElite
              : a.value.tier === 6
              ? qt.parceiro
              : a.value.tier === 7
              ? qt.equipe
              : "transparent";
        });
      return (y, _) => {
        var v, k;
        const w = En("router-link");
        return (
          F(),
          de(
            nt,
            null,
            [
              O("div", W1, [
                O("div", K1, [
                  O(
                    "div",
                    {
                      class: "logo",
                      onClick:
                        _[0] ||
                        (_[0] = (E) => y.$router.push({ name: "home" })),
                      onMouseup: nn(h, ["middle"]),
                      onMousedown:
                        _[1] ||
                        (_[1] = nn(() => {}, ["middle", "prevent", "stop"])),
                    },
                    X1,
                    40,
                    G1
                  ),
                  o.value
                    ? ft("", !0)
                    : (F(),
                      de("div", J1, [
                        s.value
                          ? (F(),
                            De(
                              w,
                              {
                                key: 0,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": f("agente") },
                                ]),
                                to: { name: "character-list" },
                              },
                              { default: Xe(() => [Et(" Agents ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 1,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": f("agente") },
                                ]),
                                onClick:
                                  _[2] || (_[2] = (E) => d("character-list")),
                              },
                              " Agents ",
                              2
                            )),
                        s.value
                          ? (F(),
                            De(
                              w,
                              {
                                key: 2,
                                class: Oe([
                                  "nav-link",
                                  {
                                    "link-border": f("campanha") || f("escudo"),
                                  },
                                ]),
                                to: { name: "campaigns-list" },
                              },
                              { default: Xe(() => [Et(" Campaigns ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 3,
                                class: Oe([
                                  "nav-link",
                                  {
                                    "link-border": f("campanha") || f("escudo"),
                                  },
                                ]),
                                onClick:
                                  _[3] || (_[3] = (E) => d("campaigns-list")),
                              },
                              " Campaigns ",
                              2
                            )),
                        s.value
                          ? (F(),
                            De(
                              w,
                              {
                                key: 4,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": f("ameaca") },
                                ]),
                                to: { name: "creatures-list" },
                              },
                              { default: Xe(() => [Et(" Threats ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 5,
                                class: Oe([
                                  "nav-link",
                                  {
                                    "link-border": f("campanha") || f("escudo"),
                                  },
                                ]),
                                onClick:
                                  _[4] || (_[4] = (E) => d("creatures-list")),
                              },
                              " Threats ",
                              2
                            )),
                        s.value
                          ? (F(),
                            De(
                              w,
                              {
                                key: 6,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": f("homebrew") },
                                ]),
                                to: { name: "homebrews-list" },
                              },
                              { default: Xe(() => [Et(" Homebrew ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 7,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": f("homebrew") },
                                ]),
                                onClick:
                                  _[5] || (_[5] = (E) => d("/homebrews")),
                              },
                              " Homebrew ",
                              2
                            )),
                        Z1,
                      ])),
                  o.value
                    ? ft("", !0)
                    : (F(),
                      de("div", ex, [
                        s.value
                          ? (F(),
                            de("div", nx, [
                              a.value
                                ? (F(),
                                  de(
                                    "button",
                                    {
                                      key: 0,
                                      class: "user-button",
                                      onClick: u,
                                    },
                                    [
                                      a.value.tier > 0
                                        ? (F(),
                                          de(
                                            "img",
                                            {
                                              key: 0,
                                              class: "tier-picture",
                                              src: `/img/${
                                                Rt(hw)[a.value.tier]
                                              }`,
                                              alt: "banner",
                                            },
                                            null,
                                            8,
                                            rx
                                          ))
                                        : ft("", !0),
                                      O("div", ix, [
                                        O(
                                          "img",
                                          {
                                            class: "profile-picture",
                                            src:
                                              ((v = a.value) == null
                                                ? void 0
                                                : v.pictureURL) ||
                                              ((k = Rt(e).currentUser) == null
                                                ? void 0
                                                : k.photoURL) ||
                                              "../assets/blank-profile-picture.png",
                                            alt: "foto agente",
                                          },
                                          null,
                                          8,
                                          sx
                                        ),
                                      ]),
                                    ]
                                  ))
                                : ft("", !0),
                            ]))
                          : (F(),
                            de("div", tx, [
                              O(
                                "button",
                                {
                                  class: "button-primary login-button",
                                  onClick: c,
                                },
                                " LOGIN "
                              ),
                            ])),
                      ])),
                ]),
              ]),
              ox,
            ],
            64
          )
        );
      };
    },
  }),
  ei = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, i] of e) n[r] = i;
    return n;
  },
  lx = ei(ax, [["__scopeId", "data-v-16b984df"]]),
  cx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAWSURBVHgBY6AFYP4PBAewUoPbFMoBAE11OPW6yVcZAAAAAElFTkSuQmCC",
  fw =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012%2019%206.41z'/%3e%3c/svg%3e",
  pw = "/assets/discord-icon-8DNfz9TA.png",
  mw = "/assets/twitter-icon-aO3qts0R.png",
  gw = "/assets/twitch-icon-BrV9MfMk.png",
  ko = (t) => (Hi("data-v-6d62f3e2"), (t = t()), zi(), t),
  ux = { key: 0, class: "header-closed" },
  dx = ko(() =>
    O("img", { class: "open-header-img", src: cx, alt: "fechar" }, null, -1)
  ),
  hx = [dx],
  fx = { class: "header" },
  px = { class: "header-row" },
  mx = ko(() => O("img", { src: fw, alt: "fechar" }, null, -1)),
  gx = [mx],
  vx = { key: 0 },
  yx = { key: 1 },
  _x = ["src"],
  wx = { class: "profile-picture-container" },
  bx = ["src"],
  Ex = ko(() =>
    O("img", { class: "cris-icon", src: dv, alt: "cris icon" }, null, -1)
  ),
  Tx = ko(() =>
    O("img", { class: "cris-text", src: hv, alt: "cris logo" }, null, -1)
  ),
  Ix = [Ex, Tx],
  Ax = { key: 0, class: "nav-container" },
  Sx = to(
    '<div class="icon-links-container" data-v-6d62f3e2><a class="link" href="https://discord.gg/c-r-i-s-ordem-paranormal-1024034430169395292" target="_blank" data-v-6d62f3e2><img class="icon" src="' +
      pw +
      '" alt="discord" data-v-6d62f3e2></a><a class="link" href="https://twitter.com/CrisOrdemPrnml" target="_blank" data-v-6d62f3e2><img class="icon" src="' +
      mw +
      '" alt="twitter" data-v-6d62f3e2></a><a class="link" href="https://www.twitch.tv/powered_by_soul" target="_blank" data-v-6d62f3e2><img class="icon" src="' +
      gw +
      '" alt="twitch" data-v-6d62f3e2></a></div>',
    1
  ),
  kx = ko(() => O("div", { class: "header-line" }, null, -1)),
  Cx = Ze({
    __name: "HeaderMobileView",
    setup(t) {
      hl((w) => ({ ae9098f0: _.value }));
      const e = Ki(),
        n = So(),
        r = yd(),
        i = Wi(),
        s = ue(!1),
        o = ue(!0),
        a = ue(!1),
        l = ue(null),
        c = ue(),
        u = ue(),
        d = () => {
          const w = new Lt();
          w.setCustomParameters({ prompt: "select_account" }), Fs(e, w);
        },
        h = () => {
          var w;
          (a.value = !1),
            r.push({
              name: "user-profile",
              params: { id: (w = c.value) == null ? void 0 : w.uid },
            });
        },
        f = () => {
          (a.value = !1), r.push({ name: "home" });
        },
        g = (w) => {
          if (o.value) return;
          const v = new Lt();
          v.setCustomParameters({ prompt: "select_account" }),
            Fs(e, v).then(() => {
              (a.value = !a.value), r.push({ name: w });
            });
        };
      un(() => {
        ao(e, async (w) => {
          w
            ? ((s.value = !0),
              (u.value = uw(Vr(n, "users", w.uid), (v) => {
                v.data() && (c.value = v.data());
              })))
            : (s.value = !1),
            (o.value = !1);
        });
      }),
        eo(() => {
          u.value && u.value();
        }),
        kE(l, () => (a.value = !a.value));
      const y = (w) => !!i.path.includes(w),
        _ = Te(() => {
          if (c.value)
            return c.value.tier === 1
              ? qt.mundano
              : c.value.tier === 2
              ? qt.recruta
              : c.value.tier === 3
              ? qt.operador
              : c.value.tier === 4
              ? qt.agenteEspecial
              : c.value.tier === 5
              ? qt.agenteElite
              : c.value.tier === 6
              ? qt.parceiro
              : c.value.tier === 7
              ? qt.equipe
              : "transparent";
        });
      return (w, v) => {
        var E, H;
        const k = En("router-link");
        return a.value
          ? (F(),
            de(
              "div",
              { key: 1, ref_key: "menuRef", ref: l },
              [
                O("div", fx, [
                  O("div", px, [
                    O(
                      "button",
                      {
                        class: "close-header-button button-naked",
                        onClick: v[1] || (v[1] = (z) => (a.value = !a.value)),
                      },
                      gx
                    ),
                    O("div", null, [
                      s.value
                        ? (F(),
                          de("div", yx, [
                            c.value
                              ? (F(),
                                de(
                                  "button",
                                  { key: 0, class: "user-button", onClick: h },
                                  [
                                    c.value.tier > 0
                                      ? (F(),
                                        de(
                                          "img",
                                          {
                                            key: 0,
                                            class: "tier-picture",
                                            src: `/img/${Rt(hw)[c.value.tier]}`,
                                            alt: "banner",
                                          },
                                          null,
                                          8,
                                          _x
                                        ))
                                      : ft("", !0),
                                    O("div", wx, [
                                      O(
                                        "img",
                                        {
                                          class: "profile-picture",
                                          src:
                                            ((E = c.value) == null
                                              ? void 0
                                              : E.pictureURL) ||
                                            ((H = Rt(e).currentUser) == null
                                              ? void 0
                                              : H.photoURL) ||
                                            "../assets/blank-profile-picture.png",
                                          alt: "foto agente",
                                        },
                                        null,
                                        8,
                                        bx
                                      ),
                                    ]),
                                  ]
                                ))
                              : ft("", !0),
                          ]))
                        : (F(),
                          de("div", vx, [
                            O(
                              "button",
                              {
                                class: "button-primary login-button",
                                onClick: d,
                              },
                              " LOGIN "
                            ),
                          ])),
                    ]),
                  ]),
                  O("div", { class: "logo", onClick: f }, Ix),
                  o.value
                    ? ft("", !0)
                    : (F(),
                      de("div", Ax, [
                        s.value
                          ? (F(),
                            De(
                              k,
                              {
                                key: 0,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": y("agente") },
                                ]),
                                to: { name: "character-list" },
                                onClick:
                                  v[2] || (v[2] = (z) => (a.value = !a.value)),
                              },
                              { default: Xe(() => [Et(" Agents ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 1,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": y("agente") },
                                ]),
                                onClick:
                                  v[3] || (v[3] = (z) => g("character-list")),
                              },
                              " Agents ",
                              2
                            )),
                        s.value
                          ? (F(),
                            De(
                              k,
                              {
                                key: 2,
                                class: Oe([
                                  "nav-link",
                                  {
                                    "link-border": y("campanha") || y("escudo"),
                                  },
                                ]),
                                to: { name: "campaigns-list" },
                                onClick:
                                  v[4] || (v[4] = (z) => (a.value = !a.value)),
                              },
                              { default: Xe(() => [Et(" Campaigns ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 3,
                                class: Oe([
                                  "nav-link",
                                  {
                                    "link-border": y("campanha") || y("escudo"),
                                  },
                                ]),
                                onClick:
                                  v[5] || (v[5] = (z) => g("campaigns-list")),
                              },
                              " Campaigns ",
                              2
                            )),
                        s.value
                          ? (F(),
                            De(
                              k,
                              {
                                key: 4,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": y("ameaca") },
                                ]),
                                to: { name: "creatures-list" },
                                onClick:
                                  v[6] || (v[6] = (z) => (a.value = !a.value)),
                              },
                              { default: Xe(() => [Et(" Threats ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 5,
                                class: Oe([
                                  "nav-link",
                                  {
                                    "link-border": y("campanha") || y("escudo"),
                                  },
                                ]),
                                onClick:
                                  v[7] || (v[7] = (z) => g("creatures-list")),
                              },
                              " Threats ",
                              2
                            )),
                        s.value
                          ? (F(),
                            De(
                              k,
                              {
                                key: 6,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": y("homebrew") },
                                ]),
                                to: { name: "homebrews-list" },
                                onClick:
                                  v[8] || (v[8] = (z) => (a.value = !a.value)),
                              },
                              { default: Xe(() => [Et(" Homebrew ")]), _: 1 },
                              8,
                              ["class"]
                            ))
                          : (F(),
                            de(
                              "div",
                              {
                                key: 7,
                                class: Oe([
                                  "nav-link",
                                  { "link-border": y("homebrew") },
                                ]),
                                onClick:
                                  v[9] || (v[9] = (z) => g("homebrew-list")),
                              },
                              " Homebrew ",
                              2
                            )),
                        O(
                          "a",
                          {
                            class: "nav-link",
                            href: "https://www.catarse.me/crisordemparanormal",
                            target: "_blank",
                            onClick:
                              v[10] || (v[10] = (z) => (a.value = !a.value)),
                          },
                          " Rank "
                        ),
                      ])),
                  Sx,
                ]),
                kx,
              ],
              512
            ))
          : (F(),
            de("div", ux, [
              O(
                "button",
                {
                  class: "open-header-button button-naked",
                  onClick: v[0] || (v[0] = (z) => (a.value = !a.value)),
                },
                hx
              ),
            ]));
      };
    },
  }),
  qx = ei(Cx, [["__scopeId", "data-v-6d62f3e2"]]),
  xx = { key: 0 },
  Rx = Ze({
    __name: "HeaderView",
    setup(t) {
      const e = Wi(),
        { width: n } = ev(),
        r = Te(() => e.path),
        i = Te(() => !r.value.includes("stream"));
      return (s, o) =>
        i.value
          ? (F(),
            de("div", xx, [
              Rt(n) >= 1023
                ? (F(), De(lx, { key: 0 }))
                : (F(), De(qx, { key: 1 })),
            ]))
          : ft("", !0);
    },
  }),
  Px = Ze({
    __name: "DividerView",
    props: { noMargin: Boolean, whiteColor: Boolean, offWhite: Boolean },
    setup(t) {
      hl((r) => ({ "63538b66": n.value }));
      const e = t,
        n = Te(() =>
          e.whiteColor
            ? "1px solid var(--color-white)"
            : e.offWhite
            ? "1px solid var(--color-off-white)"
            : "1px solid var(--color-primary)"
        );
      return (r, i) => (
        F(),
        de(
          "div",
          { class: Oe({ noMargin: t.noMargin, divider: !t.noMargin }) },
          null,
          2
        )
      );
    },
  }),
  Ox = ei(Px, [["__scopeId", "data-v-04d06b17"]]),
  qh = (t) => (Hi("data-v-71981785"), (t = t()), zi(), t),
  Dx = { key: 0, class: "footer-container" },
  Nx = { class: "footer-wrapper" },
  Lx = { class: "footer-links-container" },
  Mx = { class: "footer-links-row" },
  $x = qh(() =>
    O(
      "a",
      { class: "links", href: "https://jamboeditora.com.br", target: "_blank" },
      " Compre Ordem Paranormal ",
      -1
    )
  ),
  Vx = { class: "footer-links-row" },
  Fx = qh(() =>
    O(
      "div",
      { class: "footer-links-row" },
      [
        O(
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
  Ux = to(
    '<div class="icon-links-container" data-v-71981785><a class="link" href="https://discord.gg/c-r-i-s-ordem-paranormal-1024034430169395292" target="_blank" data-v-71981785><img class="icon" src="' +
      pw +
      '" alt="discord" data-v-71981785></a><a class="link" href="https://twitter.com/CrisOrdemPrnml" target="_blank" data-v-71981785><img class="icon" src="' +
      mw +
      '" alt="twitter" data-v-71981785></a><a class="link" href="https://www.twitch.tv/powered_by_soul" target="_blank" data-v-71981785><img class="icon" src="' +
      gw +
      '" alt="twitch" data-v-71981785></a></div>',
    1
  ),
  Bx = qh(() =>
    O(
      "div",
      { class: "footer-text-container" },
      [
        O(
          "div",
          { class: "footer-text" },
          " Ordem Paranormal é um produto da Jambô Editora e seus respectivos criadores, todos os direitos reservados. "
        ),
        O(
          "div",
          { class: "footer-text" },
          " C.R.I.S. - Ordem Paranormal is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC. "
        ),
      ],
      -1
    )
  ),
  jx = Ze({
    __name: "FooterView",
    setup(t) {
      hl((s) => ({ ffe5d716: i.value }));
      const e = Wi(),
        n = Te(() => e.path),
        r = Te(
          () =>
            !(
              n.value.includes("/agente/stream/") ||
              n.value.includes("/agente/") ||
              n.value.includes("/escudo-do-mestre/")
            )
        ),
        i = Te(() => (e.path === "/" ? "0" : "2rem"));
      return (s, o) => {
        const a = En("router-link");
        return r.value
          ? (F(),
            de("div", Dx, [
              O("div", Nx, [
                O("div", Lx, [
                  O("div", Mx, [
                    qe(
                      a,
                      { class: "links", to: "/sobre-o-cris" },
                      { default: Xe(() => [Et(" Sobre o C.R.I.S. ")]), _: 1 }
                    ),
                    $x,
                  ]),
                  O("div", Vx, [
                    qe(
                      a,
                      { class: "links", to: "/creditos-e-contato" },
                      { default: Xe(() => [Et(" Entre em contato ")]), _: 1 }
                    ),
                    qe(
                      a,
                      { class: "links", to: "/politica-de-privacidade" },
                      {
                        default: Xe(() => [Et(" Política de Privacidade ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  Fx,
                ]),
                Ux,
                qe(Ox, { "white-color": "", "no-margin": "", "off-white": "" }),
                Bx,
              ]),
            ]))
          : ft("", !0);
      };
    },
  }),
  Hx = ei(jx, [["__scopeId", "data-v-71981785"]]),
  zx = [
    {
      imgPath: "/img/cris/banner1.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
    },
    {
      imgPath: "/img/cris/banner2.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
    },
    {
      imgPath: "/img/cris/banner3.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
    },
    {
      imgPath: "/img/cris/banner4.webp",
      imgAlt: "Apoie o CRIS",
      adLink: "https://www.catarse.me/crisordemparanormal",
    },
  ],
  aD = (t, e) =>
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
  gm = (t) => {
    for (let e = t.length - 1; e > 0; e--) {
      const n = Math.floor(Math.random() * (e + 1)),
        r = t[e];
      (t[e] = t[n]), (t[n] = r);
    }
    return t;
  },
  Wx = { key: 0, class: "ads-container" },
  Kx = { class: "ad-img-container scale-in-center" },
  Gx = ["src", "alt"],
  Qx = ["src"],
  Yx = 7e3,
  Xx = 27e5,
  Jx = Ze({
    __name: "AdsComponent",
    setup(t) {
      const e = So(),
        n = ue(),
        r = Wi(),
        i = ue([]),
        s = gm(zx),
        o = ue(0),
        a = ue(!1),
        l = ue(),
        c = (_) => {
          var w;
          return (w = window.open(_, "_blank")) == null ? void 0 : w.focus();
        },
        u = () => (a.value = !0),
        d = () => {
          (a.value = !1), clearTimeout(l.value);
        },
        h = () => setTimeout(u, Yx),
        f = () => {
          setTimeout(() => {
            o.value < i.value.length - 1 ? o.value++ : (o.value = 0), u(), f();
          }, Xx);
        },
        g = Te(() => !!r.fullPath.includes("stream")),
        y = Te(() => (n.value ? n.value.tier >= 1 : !1));
      return (
        ut(a, () => {
          a.value && (l.value = window.setTimeout(() => (a.value = !1), 6e4));
        }),
        un(async () => {
          const _ = ao(Ki(), async (w) => {
            if (!w) return;
            const v = await cw(Vr(e, "users", w.uid));
            (n.value = v.data()), _();
          });
          (i.value = [...s]), (i.value = gm(i.value)), h(), f();
        }),
        (_, w) =>
          a.value && !g.value && !y.value
            ? (F(),
              de("div", Wx, [
                O("div", Kx, [
                  i.value[o.value].imgPath.includes("webp")
                    ? (F(),
                      de(
                        "img",
                        {
                          key: 0,
                          src: i.value[o.value].imgPath,
                          alt: i.value[o.value].imgAlt,
                          class: "ad-img",
                          onClick:
                            w[0] || (w[0] = (v) => c(i.value[o.value].adLink)),
                          onMouseup:
                            w[1] ||
                            (w[1] = nn(
                              (v) => c(i.value[o.value].adLink),
                              ["middle"]
                            )),
                          onMousedown:
                            w[2] ||
                            (w[2] = nn(() => {}, [
                              "middle",
                              "prevent",
                              "stop",
                            ])),
                        },
                        null,
                        40,
                        Gx
                      ))
                    : (F(),
                      de(
                        "video",
                        {
                          key: 1,
                          class: "ad-img",
                          autoplay: "",
                          muted: "",
                          loop: "",
                          onClick:
                            w[3] || (w[3] = (v) => c(i.value[o.value].adLink)),
                          onMouseup:
                            w[4] ||
                            (w[4] = nn(
                              (v) => c(i.value[o.value].adLink),
                              ["middle"]
                            )),
                          onMousedown:
                            w[5] ||
                            (w[5] = nn(() => {}, [
                              "middle",
                              "prevent",
                              "stop",
                            ])),
                        },
                        [
                          O(
                            "source",
                            {
                              src: i.value[o.value].imgPath,
                              type: "video/mp4",
                            },
                            null,
                            8,
                            Qx
                          ),
                        ],
                        32
                      )),
                  O("img", {
                    class: "close-icon",
                    src: fw,
                    alt: "fechar",
                    onClick: d,
                  }),
                ]),
              ]))
            : ft("", !0)
      );
    },
  }),
  Zx = ei(Jx, [["__scopeId", "data-v-27a0ae13"]]),
  eR = Ze({
    __name: "App",
    setup(t) {
      const e = Wi();
      return (n, r) => {
        const i = En("router-view");
        return (
          F(),
          de("div", null, [
            qe(Rx),
            O(
              "div",
              { class: Oe({ "main-content": Rt(e).path !== "/" }) },
              [qe(i)],
              2
            ),
            qe(Hx),
            qe(Zx),
          ])
        );
      };
    },
  }),
  tR = "modulepreload",
  nR = function (t) {
    return "/" + t;
  },
  vm = {},
  A = function (e, n, r) {
    if (!n || n.length === 0) return e();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = nR(s)), s in vm)) return;
        vm[s] = !0;
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
          ((c.rel = o ? "stylesheet" : tR),
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
  rR = "/assets/ficha-home-page-Vs9KQLhb.webp",
  iR = "/assets/agentes-home-page-t-tFgQyF.webp",
  sR = "/assets/escudo-do-mestre-home-page-8qU752rB.webp",
  oR = "/assets/homebrew-landing-page-cloVYFFS.webp",
  aR = "/assets/catarse-landing-page-goKyMiZk.webp",
  lR = "/assets/banner-ameacas-landing-page-desktop-d-lq4fji.webp",
  cR = "/assets/banner-ameacas-landing-page-mobile-9vihHj8Y.webp",
  uR = { class: "carousel-container" },
  dR = ["onMouseup"],
  hR = {
    key: 0,
    class: "carousel-img",
    src: lR,
    alt: "ficha de ameaças catarse",
  },
  fR = {
    key: 1,
    class: "carousel-img",
    src: cR,
    alt: "ficha de ameaças catarse",
  },
  pR = Ze({
    __name: "CarouselView",
    setup(t) {
      const { width: e } = ev(),
        n = (r) => {
          r.preventDefault(),
            window.open("https://www.catarse.me/crisordemparanormal", "_blank");
        };
      return (r, i) => (
        F(),
        de("div", uR, [
          O(
            "button",
            {
              class: "carousel-button",
              onClick: n,
              onMouseup: nn(n, ["middle"]),
              onMousedown:
                i[0] || (i[0] = nn(() => {}, ["middle", "prevent", "stop"])),
            },
            [Rt(e) >= 1023 ? (F(), de("img", hR)) : (F(), de("img", fR))],
            40,
            dR
          ),
        ])
      );
    },
  }),
  mR = ei(pR, [["__scopeId", "data-v-f971e609"]]),
  Xl = (t) => (Hi("data-v-401833a1"), (t = t()), zi(), t),
  gR = { class: "home-container" },
  vR = { class: "carousel-container" },
  yR = Xl(() =>
    O(
      "div",
      { class: "title" },
      [Et(" Fichas "), O("span", { class: "underline" }, "Digitais")],
      -1
    )
  ),
  _R = Xl(() =>
    O(
      "div",
      { class: "text" },
      [
        Et(
          " Acesso rápido e simplificado a todas as informações de sua ficha. Faça a rolagem de perícias, atributos e ataques com um "
        ),
        O("span", { class: "bold" }, "único clique"),
        Et(
          ". Concentre-se menos na matemática e foque no que realmente importa que é se divertir ao lado de seus amigos! "
        ),
      ],
      -1
    )
  ),
  wR = Xl(() =>
    O(
      "div",
      { class: "img-container" },
      [O("img", { class: "img", src: rR, alt: "ficha-de-persoangem" })],
      -1
    )
  ),
  bR = to(
    '<div class="content-column-container" data-v-401833a1><div class="text-container" data-v-401833a1><div class="title" data-v-401833a1> Seus <span class="underline" data-v-401833a1>agentes</span> em um só lugar! </div><div class="text" data-v-401833a1> Liberte-se da preocupação de perder suas fichas! Tenha seus agentes <span class="bold" data-v-401833a1>sempre prontos</span> para a próxima missão. Crie campanhas em frações de <span class="bold" data-v-401833a1>segundos</span>. Adicione seus agentes para acessar suas fichas, resultados de dados e ferramentas exclusivas para te auxiliar. Chegou a hora de elevar o nível de sua campanha! </div></div><div class="img-container" data-v-401833a1><img class="img" src="' +
      iR +
      '" alt="agentes" data-v-401833a1></div></div><div class="content-column-container" data-v-401833a1><div class="text-container" data-v-401833a1><div class="title" data-v-401833a1><span class="underline" data-v-401833a1>Ferramentas</span> para o Mestre! </div><div class="text" data-v-401833a1> Liberte-se da preocupação de perder suas fichas! Tenha seus agentes <span class="bold" data-v-401833a1>sempre prontos</span> para a próxima missão. Crie campanhas em frações de <span class="bold" data-v-401833a1>segundos</span>. Adicione seus agentes para acessar suas fichas, resultados de dados e ferramentas exclusivas para te auxiliar. Chegou a hora de elevar o nível de sua campanha! </div></div><div class="img-container" data-v-401833a1><img class="img" src="' +
      sR +
      '" alt="escudo do mestre" data-v-401833a1></div></div><div class="content-side-container" data-v-401833a1><div class="text-container text-sided" data-v-401833a1><div class="title" data-v-401833a1><span class="underline" data-v-401833a1>Homebrew</span></div><div class="text" data-v-401833a1><span class="bold" data-v-401833a1>Não precisa mais se preocupar</span> em ficar correndo atrás de cada ficha dos seus jogadores, no Escudo do Mestre tem <span class="bold" data-v-401833a1>tudo o que você precisa.</span></div></div><div class="img-container" data-v-401833a1><img class="img" src="' +
      oR +
      '" alt="homebrew" data-v-401833a1></div></div>',
    3
  ),
  ER = to(
    '<div class="title align-text-center" data-v-401833a1><span class="underline" data-v-401833a1>Torne-se um agente da Ordem</span></div><div class="text align-text-center" data-v-401833a1> Já imaginou ter acesso <span class="bold" data-v-401833a1>exclusivo</span> e <span class="bold" data-v-401833a1>totalmente antecipado</span> a todas as novidades de nossa plataforma? Considere apoiar em nosso Catarse. </div>',
    2
  ),
  TR = Xl(() =>
    O(
      "div",
      { class: "img-container" },
      [O("img", { class: "img", src: aR, alt: "catarse" })],
      -1
    )
  ),
  IR = Ze({
    __name: "HomeView",
    setup(t) {
      const e = Ki(),
        n = yd(),
        r = ue(!1),
        i = So(),
        s = ue(!0),
        o = () => {
          const c = new Lt();
          c.setCustomParameters({ prompt: "select_account" }),
            Fs(e, c).then(async () => {
              var g;
              const u = [],
                d = I1(i, "characters"),
                h = $1(
                  d,
                  F1("uid", "==", (g = e.currentUser) == null ? void 0 : g.uid)
                ),
                f = await j1(h);
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
        un(() => {
          ao(e, (c) => {
            c ? (r.value = !0) : (r.value = !1), (s.value = !1);
          });
        }),
        (c, u) => (
          F(),
          de("div", gR, [
            O("div", vR, [qe(mR)]),
            O("div", { class: "home-margin" }, [
              O("div", { class: "content-side-container" }, [
                O("div", { class: "text-container text-sided" }, [
                  yR,
                  _R,
                  O("div", { class: "button-container" }, [
                    O(
                      "button",
                      { class: "home-button", onClick: a },
                      " Criar ficha "
                    ),
                  ]),
                ]),
                wR,
              ]),
              bR,
              O("div", { class: "content-column-container" }, [
                O("div", { class: "text-container no-margin-bottom" }, [
                  ER,
                  O(
                    "div",
                    { class: "button-container catarse-button-container" },
                    [
                      O(
                        "button",
                        { class: "home-button catarse-button", onClick: l },
                        " Quero Apoiar o C.R.I.S. "
                      ),
                    ]
                  ),
                ]),
                TR,
              ]),
            ]),
          ])
        )
      );
    },
  }),
  AR = ei(IR, [["__scopeId", "data-v-401833a1"]]),
  vw = DT({
    history: YE("/"),
    scrollBehavior() {
      return { top: 0 };
    },
    routes: [
      { path: "/", name: "home", component: AR },
      {
        path: "/login",
        name: "login-page",
        component: () =>
          A(() => import("./LoginPage-BjPvRQQq.js"), __vite__mapDeps([0, 1])),
      },
      {
        path: "/agentes",
        name: "character-list",
        component: () =>
          A(
            () => import("./CharacterList-mLeDrI_i.js"),
            __vite__mapDeps([
              2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanhas",
        name: "campaigns-list",
        component: () =>
          A(
            () => import("./CampaignsList-nYTMDNFM.js"),
            __vite__mapDeps([17, 3, 4, 11, 13, 18])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews",
        name: "homebrews-list",
        component: () =>
          A(
            () => import("./HomebrewList-Mje8Az37.js"),
            __vite__mapDeps([
              19, 20, 21, 22, 23, 24, 25, 26, 5, 6, 3, 4, 13, 27, 28, 14, 15, 7,
              8, 29, 30, 31, 32, 33, 34, 35, 36, 37, 10, 11, 38, 39, 40, 41, 42,
              43, 44, 45, 46, 47, 48, 49, 50,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/habilidade/:id",
        name: "homebrews-power",
        component: () =>
          A(
            () => import("./HomebrewPowerView-XWnemafQ.js"),
            __vite__mapDeps([
              51, 3, 4, 23, 24, 25, 26, 52, 53, 13, 7, 8, 47, 54,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/ritual/:id",
        name: "homebrews-ritual",
        component: () =>
          A(
            () => import("./HomebrewRitualView-rkWy8aPY.js"),
            __vite__mapDeps([
              55, 3, 4, 29, 24, 25, 30, 31, 52, 53, 13, 7, 8, 47, 56,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/item/:id",
        name: "homebrews-item",
        component: () =>
          A(
            () => import("./HomebrewItemView-78tfRPKx.js"),
            __vite__mapDeps([
              57, 3, 4, 52, 53, 34, 24, 25, 35, 13, 7, 8, 47, 58,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/ameacas/:id",
        name: "homebrews-creature",
        component: () =>
          A(
            () => import("./HomebrewCreatureView-exWCPjp-.js"),
            __vite__mapDeps([
              59, 3, 4, 37, 10, 11, 38, 39, 52, 53, 13, 7, 8, 40, 41, 47, 60,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/perfil/:id",
        name: "user-profile",
        component: () =>
          A(
            () => import("./UserProfile-226FsuYl.js"),
            __vite__mapDeps([61, 3, 4, 27, 45, 46, 47, 62])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/criar-campanha",
        name: "campaign-create",
        component: () =>
          A(
            () => import("./CampaignCreate-f6Pi6kpC.js"),
            __vite__mapDeps([63, 27, 28, 3, 4, 64, 65, 7, 8, 13, 66])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/editar-campanha/:id",
        name: "campaign-edit",
        component: () =>
          A(
            () => import("./CampaignEdit-9g9QJvYP.js"),
            __vite__mapDeps([67, 27, 28, 3, 4, 64, 65, 13, 68])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:id",
        name: "campaign-page",
        component: () =>
          A(
            () => import("./CampaignPage-Ke5mbbfm.js"),
            __vite__mapDeps([
              69, 3, 4, 9, 10, 11, 12, 7, 8, 44, 45, 46, 47, 48, 20, 21, 52, 53,
              70, 71, 13, 40, 41, 72,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/entrar/:id",
        name: "campaign-join",
        component: () =>
          A(
            () => import("./CampaignJoin-To_CylD3.js"),
            __vite__mapDeps([73, 3, 4, 13, 74])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/adicionar-agente/:id",
        name: "campaign-add-agent",
        component: () =>
          A(
            () => import("./CampaignAddAgent-JfOsIWE5.js"),
            __vite__mapDeps([75, 9, 10, 11, 12, 3, 4, 5, 6, 13, 76])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:id/criar-combate",
        name: "campaign-create-combat",
        component: () =>
          A(
            () => import("./CreateCombat-0ueabyto.js"),
            __vite__mapDeps([
              77, 78, 37, 10, 11, 38, 39, 20, 21, 5, 6, 27, 14, 15, 13, 47, 79,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:campaignId/combate/:combatId",
        name: "campaign-edit-combat",
        component: () =>
          A(
            () => import("./EditCombat-hCDKSEgz.js"),
            __vite__mapDeps([
              80, 78, 37, 10, 11, 38, 39, 20, 21, 5, 6, 27, 14, 15, 47, 81,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/acesso-negado",
        name: "campaign-page-denied",
        component: () =>
          A(
            () => import("./CampaignPageDenied-LYxsc9iY.js"),
            __vite__mapDeps([82, 83])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/escudo-do-mestre/:id",
        name: "master-screen",
        component: () =>
          A(
            () => import("./MasterScreen-VpIxz5wQ.js"),
            __vite__mapDeps([
              84, 3, 4, 85, 30, 86, 87, 24, 88, 15, 47, 89, 20, 21, 64, 65, 70,
              71, 90, 38, 27, 28, 14, 32, 33, 91, 13, 40, 41, 7, 8, 42, 43, 44,
              45, 46, 48, 49, 92,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/novo-agente",
        name: "character-creation",
        component: () =>
          A(
            () => import("./CharacterCreation-sNd9nRdt.js"),
            __vite__mapDeps([
              93, 14, 15, 87, 94, 23, 24, 25, 26, 95, 5, 6, 7, 8, 3, 4, 96, 88,
              47, 13, 97,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/agente/:id",
        name: "character-sheet",
        component: () =>
          A(
            () => import("./CharacterSheet-y15-A8Jr.js"),
            __vite__mapDeps([
              98, 45, 46, 7, 8, 85, 30, 86, 87, 24, 88, 15, 47, 89, 20, 21, 23,
              25, 26, 29, 31, 34, 35, 5, 6, 94, 95, 22, 3, 4, 13, 27, 28, 14,
              32, 33, 36, 64, 65, 43, 44, 48, 99,
            ])
          ),
        props: !0,
      },
      {
        path: "/creditos-e-contato",
        name: "contact",
        component: () =>
          A(
            () => import("./ContactView-GAX7a8fl.js"),
            __vite__mapDeps([100, 101])
          ),
      },
      {
        path: "/agente/stream/:id",
        name: "character-stream",
        component: () =>
          A(
            () => import("./CharacterStream-2L-69Nwj.js"),
            __vite__mapDeps([102, 43, 96, 88, 47, 103])
          ),
      },
      {
        path: "/agente/despertados-stream/:id/:type",
        name: "character-despertados-stream",
        component: () =>
          A(
            () => import("./DespertadosStream-yUjDXEhN.js"),
            __vite__mapDeps([104, 96, 88, 47, 105])
          ),
      },
      {
        path: "/agente/stream/pv/:id",
        name: "character-stream-pv",
        component: () =>
          A(
            () => import("./CharacterPv-BTiggV_M.js"),
            __vite__mapDeps([106, 96, 88, 47, 107])
          ),
      },
      {
        path: "/agente/stream/san/:id",
        name: "character-stream-san",
        component: () =>
          A(
            () => import("./CharacterSan-NqDX2lF2.js"),
            __vite__mapDeps([108, 96, 88, 47, 109])
          ),
      },
      {
        path: "/agente/stream/pe/:id",
        name: "character-stream-pe",
        component: () =>
          A(
            () => import("./CharacterPe-j4KN_Wv5.js"),
            __vite__mapDeps([110, 96, 88, 47, 111])
          ),
      },
      {
        path: "/sobre-o-cris",
        name: "about-view",
        component: () =>
          A(
            () => import("./about-view-PSIT5jAu.js"),
            __vite__mapDeps([112, 113])
          ),
      },
      {
        path: "/politica-de-privacidade",
        name: "privacy-policy",
        component: () =>
          A(
            () => import("./privacy-policy-2xqJzFFW.js"),
            __vite__mapDeps([114, 115])
          ),
      },
      {
        path: "/ameacas",
        name: "creatures-list",
        component: () =>
          A(
            () => import("./CreaturesList-1mnSDTWK.js"),
            __vite__mapDeps([
              116, 78, 37, 10, 11, 38, 39, 20, 21, 40, 41, 13, 3, 4, 117,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/ameaca/:id",
        name: "creature-sheet",
        component: () =>
          A(
            () => import("./CreatureSheet-Aq_QAh93.js"),
            __vite__mapDeps([
              118, 78, 90, 86, 38, 24, 30, 20, 21, 27, 28, 14, 15, 32, 33, 47,
              91, 3, 4, 13, 40, 41, 119,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/despertados-dashboard",
        name: "despertados-dashboard",
        component: () =>
          A(
            () => import("./StreamDashboard-J0nody--.js"),
            __vite__mapDeps([120, 121])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/blog",
        name: "blog-view",
        component: () =>
          A(
            () => import("./blog-view-yHPJ5Et7.js"),
            __vite__mapDeps([122, 123, 124])
          ),
      },
      {
        path: "/blog/persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel",
        name: "persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel",
        component: () =>
          A(
            () =>
              import(
                "./persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel-cka1qd3J.js"
              ),
            __vite__mapDeps([125, 123, 124])
          ),
      },
      {
        path: "/blog/the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto",
        name: "the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto",
        component: () =>
          A(
            () =>
              import(
                "./the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto-Tbc1Z9dM.js"
              ),
            __vite__mapDeps([126, 123, 124])
          ),
      },
      {
        path: "/blog/mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia",
        name: "mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia",
        component: () =>
          A(
            () =>
              import(
                "./mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia-1ffJyZDA.js"
              ),
            __vite__mapDeps([127, 123, 124])
          ),
      },
      {
        path: "/blog/genshin-impact-uma-jornada-alem-dos-limites",
        name: "genshin-impact-uma-jornada-alem-dos-limites",
        component: () =>
          A(
            () =>
              import(
                "./genshin-impact-uma-jornada-alem-dos-limites-kh1YkWMD.js"
              ),
            __vite__mapDeps([128, 123, 124])
          ),
      },
      {
        path: "/blog/final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva",
        name: "final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva",
        component: () =>
          A(
            () =>
              import(
                "./final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva-66zshr8C.js"
              ),
            __vite__mapDeps([129, 123, 124])
          ),
      },
      {
        path: "/blog/elden-ring-a-jornada-epica-alem-das-expectativas",
        name: "elden-ring-a-jornada-epica-alem-das-expectativas",
        component: () =>
          A(
            () =>
              import(
                "./elden-ring-a-jornada-epica-alem-das-expectativas-EYsztOtu.js"
              ),
            __vite__mapDeps([130, 123, 124])
          ),
      },
      {
        path: "/blog/divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo",
        name: "divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo",
        component: () =>
          A(
            () =>
              import(
                "./divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo-hg2xNG2M.js"
              ),
            __vite__mapDeps([131, 123, 124])
          ),
      },
      {
        path: "/blog/cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3",
        name: "cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3",
        component: () =>
          A(
            () =>
              import(
                "./cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3-BYxkINqs.js"
              ),
            __vite__mapDeps([132, 123, 124])
          ),
      },
      {
        path: "/blog/assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg",
        name: "assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg",
        component: () =>
          A(
            () =>
              import(
                "./assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg-BCjKwKd9.js"
              ),
            __vite__mapDeps([133, 123, 124])
          ),
      },
      {
        path: "/blog/o-que-e-rpg-de-mesa",
        name: "o-que-e-rpg-de-mesa",
        component: () =>
          A(
            () => import("./o-que-e-rpg-de-mesa-NHBY34rA.js"),
            __vite__mapDeps([134, 123, 124])
          ),
      },
      {
        path: "/blog/o-rpg-ordem-paranormal",
        name: "o-rpg-ordem-paranormal",
        component: () =>
          A(
            () => import("./o-rpg-ordem-paranormal-pbWMoYSA.js"),
            __vite__mapDeps([135, 123, 124])
          ),
      },
      {
        path: "/blog/o-rpg-tormenta20",
        name: "o-rpg-tormenta20",
        component: () =>
          A(
            () => import("./o-rpg-tormenta20-xByVeRrl.js"),
            __vite__mapDeps([136, 123, 124])
          ),
      },
      {
        path: "/blog/3d-e-t-a-porta-de-entrada-pro-rpg-brasileiro",
        name: "3d&t-a-porta-de-entrada-pro-rpg-brasileiro",
        component: () =>
          A(
            () =>
              import(
                "./3d_t-a-porta-de-entrada-pro-rpg-brasileiro-nLySNoFp.js"
              ),
            __vite__mapDeps([137, 123, 124])
          ),
      },
      {
        path: "/blog/vampiro-a-mascara-perdura-ao-longo-das-decadas",
        name: "vampiro-a-mascara-perdura-ao-longo-das-decadas",
        component: () =>
          A(
            () =>
              import(
                "./vampiro-a-mascara-perdura-ao-longo-das-decadas-V9zmMnet.js"
              ),
            __vite__mapDeps([138, 123, 124])
          ),
      },
      {
        path: "/blog/a-popularizacao-de-dungeons-e-dragons",
        name: "a-popularizacao-de-dungeons-&-dragons",
        component: () =>
          A(
            () => import("./a-popularizacao-de-dungeons-_-dragons-BerqUg-2.js"),
            __vite__mapDeps([139, 123, 124])
          ),
      },
      {
        path: "/blog/criando-personagens-memoraveis-em-rpg-de-mesa",
        name: "criando-personagens-memoraveis-em-rpg-de-mesa",
        component: () =>
          A(
            () =>
              import(
                "./criando-personagens-memoraveis-em-rpg-de-mesa-i60zEzcq.js"
              ),
            __vite__mapDeps([140, 123, 124])
          ),
      },
      {
        path: "/blog/diferentes-estilos-de-mestres-em-rpg-de-mesa",
        name: "diferentes-estilos-de-mestres-em-rpg-de-mesa",
        component: () =>
          A(
            () =>
              import(
                "./diferentes-estilos-de-mestres-em-rpg-de-mesa-xyJeF20v.js"
              ),
            __vite__mapDeps([141, 123, 124])
          ),
      },
      {
        path: "/blog/historia-do-rpg-uma-viagem-pela-evolucao-do-genero",
        name: "historia-do-rpg-uma-viagem-pela-evolucao-do-genero",
        component: () =>
          A(
            () =>
              import(
                "./historia-do-rpg-uma-viagem-pela-evolucao-do-genero-E0tpuosm.js"
              ),
            __vite__mapDeps([142, 123, 124])
          ),
      },
      {
        path: "/blog/gurps-o-rpg-generico",
        name: "gurps-o-rpg-generico",
        component: () =>
          A(
            () => import("./gurps-o-rpg-generico-D4-mJ8m9.js"),
            __vite__mapDeps([143, 123, 124])
          ),
      },
      {
        path: "/blog/pathfinder-o-maior-rival-de-dungeons-e-dragons",
        name: "pathfinder-o-maior-rival-de-dungeons-&-dragons",
        component: () =>
          A(
            () =>
              import(
                "./pathfinder-o-maior-rival-de-dungeons-_-dragons-JeiXgGDV.js"
              ),
            __vite__mapDeps([144, 123, 124])
          ),
      },
      {
        path: "/blog/um-guia-completo-sobre-pathfinder",
        name: "um-guia-completo-sobre-pathfinder",
        component: () =>
          A(
            () => import("./um-guia-completo-sobre-pathfinder-92KXR8bY.js"),
            __vite__mapDeps([145, 123, 124])
          ),
      },
      {
        path: "/blog/os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa",
        name: "os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa",
        component: () =>
          A(
            () =>
              import(
                "./os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa-v9hFRhkQ.js"
              ),
            __vite__mapDeps([146, 123, 124])
          ),
      },
      {
        path: "/blog/fate-core-system-e-o-sistema-mais-facil-do-mundo",
        name: "fate-core-system-e-o-sistema-mais-facil-do-mundo",
        component: () =>
          A(
            () =>
              import(
                "./fate-core-system-e-o-sistema-mais-facil-do-mundo-jHKvhpaY.js"
              ),
            __vite__mapDeps([147, 123, 124])
          ),
      },
      {
        path: "/blog/dicas-para-mestres-de-rpg",
        name: "dicas-para-mestres-de-rpg",
        component: () =>
          A(
            () => import("./dicas-para-mestres-de-rpg-nzmeoST6.js"),
            __vite__mapDeps([148, 123, 124])
          ),
      },
      {
        path: "/blog/criando-um-mundo-de-rpg-personalizado",
        name: "criando-um-mundo-de-rpg-personalizado",
        component: () =>
          A(
            () => import("./criando-um-mundo-de-rpg-personalizado-uz5NZna4.js"),
            __vite__mapDeps([149, 123, 124])
          ),
      },
      {
        path: "/blog/a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico",
        name: "a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico",
        component: () =>
          A(
            () =>
              import(
                "./a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico-UCtcTbvy.js"
              ),
            __vite__mapDeps([150, 123, 124])
          ),
      },
      {
        path: "/blog/os-beneficios-do-rpg-para-a-vida-real",
        name: "os-beneficios-do-rpg-para-a-vida-real",
        component: () =>
          A(
            () => import("./os-beneficios-do-rpg-para-a-vida-real-G4bAxKMQ.js"),
            __vite__mapDeps([151, 123, 124])
          ),
      },
      {
        path: "/blog/a-influencia-de-d-e-d-na-cultura-pop",
        name: "a-influencia-de-d&d-na-cultura-pop",
        component: () =>
          A(
            () => import("./a-influencia-de-d_d-na-cultura-pop-Fo2Pihmw.js"),
            __vite__mapDeps([152, 123, 124])
          ),
      },
      {
        path: "/blog/a-evolucao-das-mecanicas-de-rpg",
        name: "a-evolucao-das-mecanicas-de-rpg",
        component: () =>
          A(
            () => import("./a-evolucao-das-mecanicas-de-rpg--L3nOJJe.js"),
            __vite__mapDeps([153, 123, 124])
          ),
      },
      {
        path: "/blog/racas-e-classes-explorando-as-escolhas-de-personagem",
        name: "racas-e-classes-explorando-as-escolhas-de-personagem",
        component: () =>
          A(
            () =>
              import(
                "./racas-e-classes-explorando-as-escolhas-de-personagem-dP3SpVgJ.js"
              ),
            __vite__mapDeps([154, 123, 124])
          ),
      },
      {
        path: "/blog/o-papel-do-mestre-na-narrativa-de-rpg",
        name: "o-papel-do-mestre-na-narrativa-de-rpg",
        component: () =>
          A(
            () => import("./o-papel-do-mestre-na-narrativa-de-rpg-mCwjmX_F.js"),
            __vite__mapDeps([155, 123, 124])
          ),
      },
      {
        path: "/blog/mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron",
        name: "mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron",
        component: () =>
          A(
            () =>
              import(
                "./mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron-BVPhhOyh.js"
              ),
            __vite__mapDeps([156, 123, 124])
          ),
      },
      {
        path: "/blog/o-impacto-da-arte-na-estetica-dos-rpgs",
        name: "o-impacto-da-arte-na-estetica-dos-rpgs",
        component: () =>
          A(
            () =>
              import("./o-impacto-da-arte-na-estetica-dos-rpgs-m4R4kQwY.js"),
            __vite__mapDeps([157, 123, 124])
          ),
      },
      {
        path: "/blog/a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg",
        name: "a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg",
        component: () =>
          A(
            () =>
              import(
                "./a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg-nxp8GuKN.js"
              ),
            __vite__mapDeps([158, 123, 124])
          ),
      },
      {
        path: "/blog/mitos-e-lendas-folcloricas-no-mundo-dos-rpgs",
        name: "mitos-e-lendas-folcloricas-no-mundo-dos-rpgs",
        component: () =>
          A(
            () =>
              import(
                "./mitos-e-lendas-folcloricas-no-mundo-dos-rpgs-RMsjPsEV.js"
              ),
            __vite__mapDeps([159, 123, 124])
          ),
      },
      {
        path: "/blog/o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa",
        name: "o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa",
        component: () =>
          A(
            () =>
              import(
                "./o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa-rtgdhI72.js"
              ),
            __vite__mapDeps([160, 123, 124])
          ),
      },
      {
        path: "/blog/rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval",
        name: "rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval",
        component: () =>
          A(
            () =>
              import(
                "./rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval-HnWz8xrR.js"
              ),
            __vite__mapDeps([161, 123, 124])
          ),
      },
      {
        path: "/blog/como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa",
        name: "como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa",
        component: () =>
          A(
            () =>
              import(
                "./como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa-phucFPGC.js"
              ),
            __vite__mapDeps([162, 123, 124])
          ),
      },
      {
        path: "/blog/descobrindo-o-mundo-do-rpg-savage-worlds",
        name: "descobrindo-o-mundo-do-rpg-savage-worlds",
        component: () =>
          A(
            () =>
              import("./descobrindo-o-mundo-do-rpg-savage-worlds-8Y1J2Zyb.js"),
            __vite__mapDeps([163, 123, 124])
          ),
      },
      {
        path: "/blog/explorando-os-subgeneros-do-rpg",
        name: "explorando-os-subgeneros-do-rpg",
        component: () =>
          A(
            () => import("./explorando-os-subgeneros-do-rpg-qFPLlzoF.js"),
            __vite__mapDeps([164, 123, 124])
          ),
      },
      {
        path: "/blog/baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores",
        name: "baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores",
        component: () =>
          A(
            () =>
              import(
                "./baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores-h3d5gllZ.js"
              ),
            __vite__mapDeps([165, 123, 124])
          ),
      },
      {
        path: "/blog/descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world",
        name: "descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world",
        component: () =>
          A(
            () =>
              import(
                "./descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world-zNJIuA0S.js"
              ),
            __vite__mapDeps([166, 123, 124])
          ),
      },
      {
        path: "/blog/descobrindo-o-universo-do-rpg-world-of-darkness",
        name: "descobrindo-o-universo-do-rpg-world-of-darkness",
        component: () =>
          A(
            () =>
              import(
                "./descobrindo-o-universo-do-rpg-world-of-darkness-SnRkLAN7.js"
              ),
            __vite__mapDeps([167, 123, 124])
          ),
      },
      {
        path: "/blog/e-dificil-comecar-a-jogar-rpg-de-mesa",
        name: "e-dificil-comecar-a-jogar-rpg-de-mesa",
        component: () =>
          A(
            () => import("./e-dificil-comecar-a-jogar-rpg-de-mesa-sn0dn9tE.js"),
            __vite__mapDeps([168, 123, 124])
          ),
      },
      {
        path: "/blog/a-importancia-da-cooperacao-em-jogos-de-rpg",
        name: "a-importancia-da-cooperacao-em-jogos-de-rpg",
        component: () =>
          A(
            () =>
              import(
                "./a-importancia-da-cooperacao-em-jogos-de-rpg-U2IPHSon.js"
              ),
            __vite__mapDeps([169, 123, 124])
          ),
      },
      {
        path: "/blog/criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo",
        name: "criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo",
        component: () =>
          A(
            () =>
              import(
                "./criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo-Af_6G0uf.js"
              ),
            __vite__mapDeps([170, 123, 124])
          ),
      },
      {
        path: "/blog/o-rpg-como-pilar-da-cultura-geek-e-nerd",
        name: "o-rpg-como-pilar-da-cultura-geek-e-nerd",
        component: () =>
          A(
            () =>
              import("./o-rpg-como-pilar-da-cultura-geek-e-nerd-hGrJaSUT.js"),
            __vite__mapDeps([171, 123, 124])
          ),
      },
      {
        path: "/blog/criando-personagens-complexos-e-multidimensionais-no-rpg",
        name: "criando-personagens-complexos-e-multidimensionais-no-rpg",
        component: () =>
          A(
            () =>
              import(
                "./criando-personagens-complexos-e-multidimensionais-no-rpg-Ci6v5zPn.js"
              ),
            __vite__mapDeps([172, 123, 124])
          ),
      },
      {
        path: "/blog/a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa",
        name: "a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa",
        component: () =>
          A(
            () =>
              import(
                "./a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa-tOomubON.js"
              ),
            __vite__mapDeps([173, 123, 124])
          ),
      },
      {
        path: "/blog/construindo-mundos-de-campanha-de-rpg-atrativos",
        name: "construindo-mundos-de-campanha-de-rpg-atrativos",
        component: () =>
          A(
            () =>
              import(
                "./construindo-mundos-de-campanha-de-rpg-atrativos-42MxeFcA.js"
              ),
            __vite__mapDeps([174, 123, 124])
          ),
      },
      {
        path: "/blog/o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg",
        name: "o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg",
        component: () =>
          A(
            () =>
              import(
                "./o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg-4nPfWYCN.js"
              ),
            __vite__mapDeps([175, 123, 124])
          ),
      },
      {
        path: "/blog/as-origens-e-a-evolucao-dos-dados-de-rpg",
        name: "as-origens-e-a-evolucao-dos-dados-de-rpg",
        component: () =>
          A(
            () =>
              import("./as-origens-e-a-evolucao-dos-dados-de-rpg-yNJzGJbm.js"),
            __vite__mapDeps([176, 123, 124])
          ),
      },
      {
        path: "/blog/rpg-como-ferramenta-de-aprendizado",
        name: "rpg-como-ferramenta-de-aprendizado",
        component: () =>
          A(
            () => import("./rpg-como-ferramenta-de-aprendizado-cOlZNBio.js"),
            __vite__mapDeps([177, 123, 124])
          ),
      },
      {
        path: "/blog/inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg",
        name: "inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg",
        component: () =>
          A(
            () =>
              import(
                "./inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg-nqRvFvgJ.js"
              ),
            __vite__mapDeps([178, 123, 124])
          ),
      },
      {
        path: "/blog/o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg",
        name: "o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg",
        component: () =>
          A(
            () =>
              import(
                "./o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg-9yUYXBlZ.js"
              ),
            __vite__mapDeps([179, 123, 124])
          ),
      },
      {
        path: "/blog/rpgs-para-criancas-e-iniciantes",
        name: "rpgs-para-criancas-e-iniciantes",
        component: () =>
          A(
            () => import("./rpgs-para-criancas-e-iniciantes-QD_0I7ms.js"),
            __vite__mapDeps([180, 123, 124])
          ),
      },
      {
        path: "/blog/etica-e-responsabilidade-em-jogos-de-rpg",
        name: "etica-e-responsabilidade-em-jogos-de-rpg",
        component: () =>
          A(
            () =>
              import("./etica-e-responsabilidade-em-jogos-de-rpg-FZ3SypCA.js"),
            __vite__mapDeps([181, 123, 124])
          ),
      },
      {
        path: "/blog/o-uso-de-ferramentas-digitais-em-mesas-de-rpg",
        name: "o-uso-de-ferramentas-digitais-em-mesas-de-rpg",
        component: () =>
          A(
            () =>
              import(
                "./o-uso-de-ferramentas-digitais-em-mesas-de-rpg-OnDwuFJk.js"
              ),
            __vite__mapDeps([182, 123, 124])
          ),
      },
      {
        path: "/blog/criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos",
        name: "criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos",
        component: () =>
          A(
            () =>
              import(
                "./criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos-OuT1L0Et.js"
              ),
            __vite__mapDeps([183, 123, 124])
          ),
      },
      {
        path: "/blog/a-influencia-das-artes-marciais-em-personagens-de-rpg",
        name: "a-influencia-das-artes-marciais-em-personagens-de-rpg",
        component: () =>
          A(
            () =>
              import(
                "./a-influencia-das-artes-marciais-em-personagens-de-rpg-W-vO-1LM.js"
              ),
            __vite__mapDeps([184, 123, 124])
          ),
      },
      {
        path: "/blog/a-diversidade-de-estilos-de-narrativa-em-rpg",
        name: "a-diversidade-de-estilos-de-narrativa-em-rpg",
        component: () =>
          A(
            () =>
              import(
                "./a-diversidade-de-estilos-de-narrativa-em-rpg-KGOSzwV6.js"
              ),
            __vite__mapDeps([185, 123, 124])
          ),
      },
      {
        path: "/blog/o-uso-terapeutico-dos-jogos-de-rpg",
        name: "o-uso-terapeutico-dos-jogos-de-rpg",
        component: () =>
          A(
            () => import("./o-uso-terapeutico-dos-jogos-de-rpg-cBnOLOJw.js"),
            __vite__mapDeps([186, 123, 124])
          ),
      },
      {
        path: "/blog/diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos",
        name: "diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos",
        component: () =>
          A(
            () =>
              import(
                "./diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos-GY52adcA.js"
              ),
            __vite__mapDeps([187, 123, 124])
          ),
      },
      {
        path: "/blog/evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps",
        name: "evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps",
        component: () =>
          A(
            () =>
              import(
                "./evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps-TuMzYVvU.js"
              ),
            __vite__mapDeps([188, 123, 124])
          ),
      },
      {
        path: "/blog/influencia_da_mitologia_em_jogos_de_rpg",
        name: "influencia_da_mitologia_em_jogos_de_rpg",
        component: () =>
          A(
            () =>
              import("./influencia_da_mitologia_em_jogos_de_rpg-co40XcY_.js"),
            __vite__mapDeps([189, 123, 124])
          ),
      },
      {
        path: "/blog/rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois",
        name: "rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois",
        component: () =>
          A(
            () =>
              import(
                "./rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois-kjscO3Ca.js"
              ),
            __vite__mapDeps([190, 123, 124])
          ),
      },
      {
        path: "/blog/impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada",
        name: "impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada",
        component: () =>
          A(
            () =>
              import(
                "./impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada-t1FaoPjw.js"
              ),
            __vite__mapDeps([191, 123, 124])
          ),
      },
      {
        path: "/blog/mundo_das_miniaturas_e_cenarios_personalizados",
        name: "mundo_das_miniaturas_e_cenarios_personalizados",
        component: () =>
          A(
            () =>
              import(
                "./mundo_das_miniaturas_e_cenarios_personalizados-TJcHPFfO.js"
              ),
            __vite__mapDeps([192, 123, 124])
          ),
      },
      {
        path: "/blog/evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis",
        name: "evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis",
        component: () =>
          A(
            () =>
              import(
                "./evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis-pN5w3RJT.js"
              ),
            __vite__mapDeps([193, 123, 124])
          ),
      },
      {
        path: "/blog/historia_e_a_evolucao_dos_larp_live_action_role_playing",
        name: "historia_e_a_evolucao_dos_larp_live_action_role_playing",
        component: () =>
          A(
            () =>
              import(
                "./historia_e_a_evolucao_dos_larp_live_action_role_playing-tOwgWMwi.js"
              ),
            __vite__mapDeps([194, 123, 124])
          ),
      },
      {
        path: "/blog/jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg",
        name: "jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg",
        component: () =>
          A(
            () =>
              import(
                "./jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg-K5Cv3v_Z.js"
              ),
            __vite__mapDeps([195, 123, 124])
          ),
      },
      {
        path: "/blog/uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg",
        name: "uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg",
        component: () =>
          A(
            () =>
              import(
                "./uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg-GAD_5C_7.js"
              ),
            __vite__mapDeps([196, 123, 124])
          ),
      },
      {
        path: "/blog/mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas",
        name: "mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas",
        component: () =>
          A(
            () =>
              import(
                "./mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas-YT6DnQbA.js"
              ),
            __vite__mapDeps([197, 123, 124])
          ),
      },
      {
        path: "/blog/psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes",
        name: "psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes",
        component: () =>
          A(
            () =>
              import(
                "./psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes-AkR4iCJ0.js"
              ),
            __vite__mapDeps([198, 123, 124])
          ),
      },
      {
        path: "/blog/papel_das_ferramentas_de_software_em_jogos_de_rpg",
        name: "papel_das_ferramentas_de_software_em_jogos_de_rpg",
        component: () =>
          A(
            () =>
              import(
                "./papel_das_ferramentas_de_software_em_jogos_de_rpg-8ODLp3YE.js"
              ),
            __vite__mapDeps([199, 123, 124])
          ),
      },
      {
        path: "/blog/historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos",
        name: "historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos",
        component: () =>
          A(
            () =>
              import(
                "./historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos-6rxczAgk.js"
              ),
            __vite__mapDeps([200, 123, 124])
          ),
      },
      {
        path: "/blog/explorando_a_cultura_do_cosplay_em_rpg",
        name: "explorando_a_cultura_do_cosplay_em_rpg",
        component: () =>
          A(
            () =>
              import("./explorando_a_cultura_do_cosplay_em_rpg-U3vTIIdf.js"),
            __vite__mapDeps([201, 123, 124])
          ),
      },
      {
        path: "/blog/rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico",
        name: "rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico",
        component: () =>
          A(
            () =>
              import(
                "./rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico-iGvrxI_F.js"
              ),
            __vite__mapDeps([202, 123, 124])
          ),
      },
      {
        path: "/blog/uso_de_simbologia_e_mitologia_em_rpgs",
        name: "uso_de_simbologia_e_mitologia_em_rpgs",
        component: () =>
          A(
            () => import("./uso_de_simbologia_e_mitologia_em_rpgs-Tg9dfpRi.js"),
            __vite__mapDeps([203, 123, 124])
          ),
      },
      {
        path: "/blog/economia_nos_mundos_de_rpg_moedas_e_comercio",
        name: "economia_nos_mundos_de_rpg_moedas_e_comercio",
        component: () =>
          A(
            () =>
              import(
                "./economia_nos_mundos_de_rpg_moedas_e_comercio-TyM75wEM.js"
              ),
            __vite__mapDeps([204, 123, 124])
          ),
      },
      {
        path: "/blog/importancia_da_diversidade_e_representacao_nos_jogos",
        name: "importancia_da_diversidade_e_representacao_nos_jogos",
        component: () =>
          A(
            () =>
              import(
                "./importancia_da_diversidade_e_representacao_nos_jogos-SWMs5ZhL.js"
              ),
            __vite__mapDeps([205, 123, 124])
          ),
      },
      {
        path: "/blog/futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas",
        name: "futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas",
        component: () =>
          A(
            () =>
              import(
                "./futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas-CKjFitJF.js"
              ),
            __vite__mapDeps([206, 123, 124])
          ),
      },
      {
        path: "/:catchAll(.*)*",
        name: "not-found",
        component: () =>
          A(
            () => import("./NotFoundView-POraXySv.js"),
            __vite__mapDeps([207, 208])
          ),
      },
    ],
  }),
  SR = () =>
    new Promise((t, e) => {
      const n = ao(
        Ki(),
        (r) => {
          n(), t(r);
        },
        e
      );
    });
vw.beforeEach(async (t, e, n) => {
  var r;
  if (t.matched.some((i) => i.meta.requiresAuth))
    if (await SR()) {
      const i = Ki(),
        s = So();
      if (!((r = i.currentUser) != null && r.uid)) return;
      const o = await cw(Vr(s, "users", i.currentUser.uid));
      if (o.data()) {
        const a = o.data();
        let l = !1;
        a.pictureURL === void 0 && ((a.pictureURL = ""), (l = !0)),
          a.pictureFullPath === void 0 && ((a.pictureFullPath = ""), (l = !0)),
          a.tier === void 0 && ((a.tier = 0), (l = !0)),
          a.donationAmount === void 0 && ((a.donationAmount = 0), (l = !0)),
          l && (await z1(Vr(s, "users", i.currentUser.uid), a)),
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
        await H1(Vr(s, "users", i.currentUser.uid), a), n();
      }
    } else n({ name: "login-page" });
  else n();
});
function xh(t) {
  return (xh =
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
function ym(t, e, n, r, i, s, o) {
  try {
    var a = t[s](o),
      l = a.value;
  } catch (c) {
    return void n(c);
  }
  a.done ? e(l) : Promise.resolve(l).then(r, i);
}
function kR(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function bi(t, e, n) {
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
function _m(t, e) {
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
function kt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? _m(Object(n), !0).forEach(function (r) {
          bi(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : _m(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function Fr(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Vc(e);
    })(t) ||
    (function (e) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == "string") return Vc(e, n);
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
          return Vc(e, n);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Vc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var CR = function (t) {
    return (function (e, n) {
      return Fr(e.querySelectorAll(n) || []);
    })(
      t,
      'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  },
  wm = function (t) {
    return t == document.activeElement;
  },
  qR = (function () {
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
                return !document.activeElement || wm(this.lastElement())
                  ? (this.firstElement().focus(), void r.preventDefault())
                  : void 0;
              wm(this.firstElement()) &&
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
              (this.elements = CR(this.root)),
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
      ]) && kR(e.prototype, n),
      t
    );
  })(),
  bm = function (t) {
    var e = t.targetTouches ? t.targetTouches[0] : t;
    return { x: e.clientX, y: e.clientY };
  },
  Ko = function (t, e, n) {
    return (
      typeof t != "number" && (t = Math.min(e, n) || e),
      typeof n != "number" && (n = Math.max(e, t)),
      Math.min(Math.max(e, t), n)
    );
  },
  Em = function (t) {
    return (t && Number(t.replace(/px$/, ""))) || 0;
  },
  Ha = {
    down: { pc: "mousedown", m: "touchstart" },
    move: { pc: "mousemove", m: "touchmove" },
    up: { pc: "mouseup", m: "touchend" },
  },
  Go = function (t, e, n) {
    e && e.addEventListener(Ha[t].pc, n),
      e && e.addEventListener(Ha[t].m, n, { passive: !1 });
  },
  Qo = function (t, e, n) {
    e && e.removeEventListener(Ha[t].pc, n),
      e && e.removeEventListener(Ha[t].m, n);
  },
  Rh = !1;
if (typeof window < "u") {
  var Tm = {
    get passive() {
      Rh = !0;
    },
  };
  window.addEventListener("testPassive", null, Tm),
    window.removeEventListener("testPassive", null, Tm);
}
var Is,
  As,
  yw =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  er = [],
  za = !1,
  da = 0,
  Im = -1,
  xR = function (t, e) {
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
  _w = function (t) {
    return er.some(function () {
      return xR(t, -da);
    });
  },
  Uu = function (t) {
    var e = t || window.event;
    return (
      !!_w(e.target) ||
      e.touches.length > 1 ||
      (e.preventDefault && e.preventDefault(), !1)
    );
  },
  RR = function (t, e) {
    if (t) {
      if (
        !er.some(function (r) {
          return r.targetElement === t;
        })
      ) {
        var n = { targetElement: t, options: e || {} };
        (er = [].concat(Fr(er), [n])),
          yw
            ? ((t.ontouchstart = function (r) {
                r.targetTouches.length === 1 &&
                  (Im = r.targetTouches[0].clientY);
              }),
              (t.ontouchmove = function (r) {
                r.targetTouches.length === 1 &&
                  (function (i, s) {
                    (da = i.targetTouches[0].clientY - Im),
                      !_w(i.target) &&
                        ((s && s.scrollTop === 0 && da > 0) ||
                        ((function (o) {
                          return (
                            !!o &&
                            o.scrollHeight - o.scrollTop <= o.clientHeight
                          );
                        })(s) &&
                          da < 0)
                          ? Uu(i)
                          : i.stopPropagation());
                  })(r, t);
              }),
              za ||
                (document.addEventListener(
                  "touchmove",
                  Uu,
                  Rh ? { passive: !1 } : void 0
                ),
                (za = !0)))
            : (function (r) {
                if (As === void 0) {
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
                    (As = document.body.style.paddingRight),
                      (document.body.style.paddingRight = "".concat(
                        o + s,
                        "px"
                      ));
                  }
                }
                Is === void 0 &&
                  ((Is = document.body.style.overflow),
                  (document.body.style.overflow = "hidden"));
              })(e);
      }
    } else
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
  },
  Fc = function (t) {
    t
      ? ((er = er.filter(function (e) {
          return e.targetElement !== t;
        })),
        yw
          ? ((t.ontouchstart = null),
            (t.ontouchmove = null),
            za &&
              er.length === 0 &&
              (document.removeEventListener(
                "touchmove",
                Uu,
                Rh ? { passive: !1 } : void 0
              ),
              (za = !1)))
          : er.length ||
            (As !== void 0 &&
              ((document.body.style.paddingRight = As), (As = void 0)),
            Is !== void 0 &&
              ((document.body.style.overflow = Is), (Is = void 0))))
      : console.error(
          "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
        );
  },
  Yo = function () {},
  Am = "enter",
  Sm = "entering",
  Xo = "leave",
  km = "leavng",
  PR = {
    t: "ns-resize",
    tr: "nesw-resize",
    r: "ew-resize",
    br: "nwse-resize",
    b: "ns-resize",
    bl: "nesw-resize",
    l: "ew-resize",
    tl: "nwse-resize",
  },
  ha = {
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
          var e = xh(t);
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
        i = ue(null),
        s = ue(null),
        o = ue(null),
        a = ue(null),
        l = ue(null),
        c = ue(null),
        u = ue(null),
        d = new qR(),
        h = ue(!1),
        f = Pn({ modal: !1, overlay: !1, resize: !1 }),
        g = ue(null),
        y = ue(null),
        _ = ue(!1),
        w = ue({}),
        v = ue({}),
        k = ue(null),
        E = ue(null),
        H = Yo,
        z = Yo,
        ae = Te(function () {
          return typeof t.overlayTransition == "string"
            ? { name: t.overlayTransition }
            : kt({}, t.overlayTransition);
        }),
        U = Te(function () {
          return typeof t.transition == "string"
            ? { name: t.transition }
            : kt({}, t.transition);
        }),
        ne = Te(function () {
          return (t.hideOverlay || g.value === Xo) && y.value === Xo;
        }),
        ee = Te(function () {
          return t.zIndex === !1
            ? !!t.zIndexAuto && +t.zIndexBase + 2 * (u.value || 0)
            : t.zIndex;
        }),
        Ie = Te(function () {
          return kt({}, ee.value !== !1 && { zIndex: ee.value });
        }),
        V = Te(function () {
          var T = [v.value];
          return (
            Array.isArray(t.contentStyle)
              ? T.push.apply(T, Fr(t.contentStyle))
              : T.push(t.contentStyle),
            T
          );
        });
      function pe() {
        return {
          uid: r,
          props: t,
          emit: n,
          vfmContainer: s,
          vfmContent: o,
          vfmResize: a,
          vfmOverlayTransition: l,
          vfmTransition: c,
          getAttachElement: xe,
          modalStackIndex: u,
          visibility: f,
          handleLockScroll: Pe,
          $focusTrap: d,
          toggle: Ot,
          params: w,
        };
      }
      function be() {
        if (t.modelValue) {
          if (
            (n("_before-open", ge({ type: "_before-open" })),
            At("before-open", !1))
          )
            return void z("show");
          var T = xe();
          if (T || t.attach === !1) {
            if (t.attach !== !1) {
              if (!i.value)
                return (
                  (h.value = !0),
                  void Zn(function () {
                    be();
                  })
                );
              T.appendChild(i.value);
            }
            var N = t.api.openedModals.findIndex(function (K) {
              return K.uid === r;
            });
            N !== -1 && t.api.openedModals.splice(N, 1),
              t.api.openedModals.push(pe()),
              (u.value = t.api.openedModals.length - 1),
              Pe(),
              t.api.openedModals
                .filter(function (K) {
                  return K.uid !== r;
                })
                .forEach(function (K, Ee) {
                  K.getAttachElement() === T &&
                    ((K.modalStackIndex.value = Ee),
                    !K.props.keepOverlay && (K.visibility.overlay = !1));
                }),
              (h.value = !0),
              (f.overlay = !0),
              (f.modal = !0);
          } else
            T !== !1 &&
              console.warn("Unable to locate target ".concat(t.attach));
        }
      }
      function _t() {
        var T = t.api.openedModals.findIndex(function (K) {
          return K.uid === r;
        });
        if (
          (T !== -1 && t.api.openedModals.splice(T, 1),
          t.api.openedModals.length > 0)
        ) {
          var N = t.api.openedModals[t.api.openedModals.length - 1];
          N.props.focusTrap && N.$focusTrap.firstElement().focus(),
            (N.props.focusRetain || N.props.focusTrap) &&
              N.vfmContainer.value.focus(),
            !N.props.hideOverlay && (N.visibility.overlay = !0);
        }
        t.drag && vr(),
          t.resize && $(),
          (k.value = null),
          (f.overlay = !1),
          (f.modal = !1);
      }
      function Pe() {
        t.modelValue &&
          Zn(function () {
            t.lockScroll
              ? RR(s.value, { reserveScrollBarGap: !0 })
              : Fc(s.value);
          });
      }
      function xe() {
        return (
          t.attach !== !1 &&
          (typeof t.attach == "string"
            ? !!window && window.document.querySelector(t.attach)
            : t.attach)
        );
      }
      function ge() {
        var T =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return kt({ ref: pe() }, T);
      }
      function At(T, N) {
        var K = !1,
          Ee = ge({
            type: T,
            stop: function () {
              K = !0;
            },
          });
        return (
          n(T, Ee),
          !!K &&
            ((_.value = !0),
            Zn(function () {
              n("update:modelValue", N);
            }),
            !0)
        );
      }
      function Wt(T, N, K) {
        (k.value = "".concat(N, ":").concat(K)), n(k.value, T);
      }
      function Ot(T, N) {
        var K = arguments;
        return new Promise(function (Ee, ie) {
          (H = function (m) {
            Ee(m), (H = Yo);
          }),
            (z = function (m) {
              ie(m), (z = Yo);
            });
          var p = typeof T == "boolean" ? T : !t.modelValue;
          p && K.length === 2 && (w.value = N), n("update:modelValue", p);
        });
      }
      function He(T) {
        T.stopPropagation();
        var N,
          K = "resize",
          Ee = "drag",
          ie = T.target.getAttribute("direction");
        if (ie) N = K;
        else {
          if (
            !(function (X, te, me) {
              return (
                me === "" || Fr(te.querySelectorAll(me)).includes(X.target)
              );
            })(T, o.value, t.dragSelector)
          )
            return;
          N = Ee;
        }
        Wt(T, N, "start");
        var p,
          m,
          b,
          I,
          q = bm(T),
          R = s.value.getBoundingClientRect(),
          L = o.value.getBoundingClientRect(),
          D = window.getComputedStyle(o.value).position === "absolute",
          M = Em(v.value.top),
          x = Em(v.value.left),
          G = (function () {
            if (t.fitParent) {
              var X = {
                absolute: function () {
                  return {
                    minTop: 0,
                    minLeft: 0,
                    maxTop: R.height - L.height,
                    maxLeft: R.width - L.width,
                  };
                },
                relative: function () {
                  return {
                    minTop: M + R.top - L.top,
                    minLeft: x + R.left - L.left,
                    maxTop: M + R.bottom - L.bottom,
                    maxLeft: x + R.right - L.right,
                  };
                },
              };
              return D ? X.absolute() : X.relative();
            }
            return {};
          })(),
          B =
            N === K &&
            ((p = document.body),
            (m = "cursor"),
            (b = PR[ie]),
            (I = p.style[m]),
            (p.style[m] = b),
            function () {
              p.style[m] = I;
            }),
          Q = function (X) {
            X.stopPropagation(), Wt(X, N, "move");
            var te,
              me,
              Ae = bm(X),
              Se = { x: Ae.x - q.x, y: Ae.y - q.y };
            N === K &&
              (Se = (function (Ln, Ro, yr, _r, wt) {
                var Vt = function (St) {
                    var Kt,
                      Mn = Ro[St.axis];
                    Mn = t.fitParent ? Ko(St.min, Mn, St.max) : Mn;
                    var $n = Ko(St.minEdge, St.getEdge(Mn), St.maxEdge);
                    return (
                      (Mn = St.getOffsetAxis($n, wt)),
                      bi((Kt = {}), St.edgeName, $n),
                      bi(Kt, St.axis, Mn),
                      Kt
                    );
                  },
                  Po = function (St, Kt, Mn, $n) {
                    var Lh,
                      Mh = _r[Kt],
                      $h = yr[St] - _r[St],
                      Vh = (Lh = Kt).charAt(0).toUpperCase() + Lh.slice(1);
                    return {
                      axis: Mn,
                      edgeName: Kt,
                      min: $n ? $h : -Mh,
                      max: $n ? Mh : $h,
                      minEdge: t["min".concat(Vh)],
                      maxEdge: t["max".concat(Vh)],
                      getEdge: function (lc) {
                        return _r[Kt] - lc * ($n ? 1 : -1);
                      },
                      getOffsetAxis: function (lc, Gw) {
                        var Fh = _r[Kt] - lc;
                        return Gw ? ($n ? Fh : 0) : (($n ? 1 : -1) * Fh) / 2;
                      },
                    };
                  },
                  Kw = {
                    t: ["top", "height", "y", !0],
                    b: ["bottom", "height", "y", !1],
                    l: ["left", "width", "x", !0],
                    r: ["right", "width", "x", !1],
                  },
                  ac = { x: 0, y: 0 };
                return (
                  Ln.split("").forEach(function (St) {
                    var Kt = Po.apply(void 0, Fr(Kw[St]));
                    ac = kt(kt({}, ac), Vt(Kt));
                  }),
                  ac
                );
              })(ie, Se, R, L, D)),
              D
                ? ((te = L.top - R.top + Se.y), (me = L.left - R.left + Se.x))
                : ((te = M + Se.y), (me = x + Se.x)),
              N === Ee &&
                t.fitParent &&
                ((te = Ko(G.minTop, te, G.maxTop)),
                (me = Ko(G.minLeft, me, G.maxLeft)));
            var Dt = kt(
              kt(
                kt(
                  {
                    position: "relative",
                    top: te + "px",
                    left: me + "px",
                    margin: "unset",
                    touchAction: "none",
                  },
                  D && {
                    position: "absolute",
                    transform: "unset",
                    width: L.width + "px",
                    height: L.height + "px",
                  }
                ),
                Se.width && { width: Se.width + "px" }
              ),
              Se.height && { height: Se.height + "px" }
            );
            v.value = kt(kt({}, v.value), Dt);
          };
        Go("move", document, Q),
          Go("up", document, function X(te) {
            te.stopPropagation(),
              N === K && B && B(),
              setTimeout(function () {
                Wt(te, N, "end");
              }),
              Qo("move", document, Q),
              Qo("up", document, X);
          });
      }
      function dn() {
        Go("down", o.value, He), (v.value.touchAction = "none");
      }
      function vr() {
        Qo("down", o.value, He);
      }
      function S() {
        (f.resize = !0),
          Zn(function () {
            Go("down", a.value, He);
          });
      }
      function $() {
        Qo("down", a.value, He), (f.resize = !1);
      }
      return (
        ut(
          function () {
            return t.modelValue;
          },
          function (T) {
            if (_.value) _.value = !1;
            else if ((be(), !T)) {
              if (At("before-close", !0)) return void z("hide");
              _t();
            }
          }
        ),
        ut(function () {
          return t.lockScroll;
        }, Pe),
        ut(
          function () {
            return t.hideOverlay;
          },
          function (T) {
            t.modelValue && !T && (f.overlay = !0);
          }
        ),
        ut(function () {
          return t.attach;
        }, be),
        ut(
          ne,
          function (T) {
            T && ((h.value = !1), (s.value.style.display = "none"));
          },
          { flush: "post" }
        ),
        ut(
          function () {
            return t.drag;
          },
          function (T) {
            h.value && (T ? dn() : vr());
          }
        ),
        ut(
          function () {
            return t.resize;
          },
          function (T) {
            h.value && (T ? S() : $());
          }
        ),
        ut(
          function () {
            return t.keepChangedStyle;
          },
          function (T) {
            T || (v.value = {});
          }
        ),
        t.api.modals.push(pe()),
        un(function () {
          be();
        }),
        ol(function () {
          var T;
          _t(),
            t.lockScroll && s.value && Fc(s.value),
            i == null || (T = i.value) === null || T === void 0 || T.remove();
          var N = t.api.modals.findIndex(function (K) {
            return K.uid === r;
          });
          t.api.modals.splice(N, 1);
        }),
        {
          root: i,
          vfmContainer: s,
          vfmContent: o,
          vfmResize: a,
          vfmOverlayTransition: l,
          vfmTransition: c,
          computedOverlayTransition: ae,
          computedTransition: U,
          visible: h,
          visibility: f,
          params: w,
          calculateZIndex: ee,
          bindStyle: Ie,
          bindContentStyle: V,
          beforeOverlayEnter: function () {
            g.value = Sm;
          },
          afterOverlayEnter: function () {
            g.value = Am;
          },
          beforeOverlayLeave: function () {
            g.value = km;
          },
          afterOverlayLeave: function () {
            g.value = Xo;
          },
          beforeModalEnter: function () {
            y.value = Sm;
          },
          afterModalEnter: function () {
            (y.value = Am),
              (t.focusRetain || t.focusTrap) && s.value.focus(),
              t.focusTrap && d.enable(s.value),
              t.drag && dn(),
              t.resize && S(),
              n("_opened"),
              n("opened", ge({ type: "opened" })),
              H("show");
          },
          beforeModalLeave: function () {
            (y.value = km), d.enabled() && d.disable();
          },
          afterModalLeave: function () {
            (y.value = Xo),
              (u.value = null),
              t.lockScroll && Fc(s.value),
              t.keepChangedStyle || (v.value = {});
            var T = !1,
              N = ge({
                type: "closed",
                stop: function () {
                  T = !0;
                },
              });
            n("_closed"), n("closed", N), H("hide"), T || (w.value = {});
          },
          onMousedown: function (T) {
            E.value = T == null ? void 0 : T.target;
          },
          onMouseupContainer: function () {
            E.value === s.value &&
              k.value !== "resize:move" &&
              (n("click-outside", ge({ type: "click-outside" })),
              t.clickToClose && n("update:modelValue", !1));
          },
          onEsc: function () {
            h.value && t.escToClose && n("update:modelValue", !1);
          },
        }
      );
    },
  },
  Uc = kg();
Hi("data-v-2836fdb5");
var OR = {
  key: 0,
  ref: "vfmResize",
  class:
    "vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none",
};
zi();
var DR = Uc(function (t, e, n, r, i, s) {
  return n.ssr || r.visible
    ? Zh(
        (F(),
        De(
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
              (e[4] = Xg(
                function () {
                  return r.onEsc && r.onEsc.apply(r, arguments);
                },
                ["esc"]
              )),
          },
          [
            qe(
              ba,
              Ai(r.computedOverlayTransition, {
                onBeforeEnter: r.beforeOverlayEnter,
                onAfterEnter: r.afterOverlayEnter,
                onBeforeLeave: r.beforeOverlayLeave,
                onAfterLeave: r.afterOverlayLeave,
              }),
              {
                default: Uc(function () {
                  return [
                    !n.hideOverlay && r.visibility.overlay
                      ? (F(),
                        De(
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
                      : ft("v-if", !0),
                  ];
                }),
                _: 1,
              },
              16,
              ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]
            ),
            qe(
              ba,
              Ai(r.computedTransition, {
                onBeforeEnter: r.beforeModalEnter,
                onAfterEnter: r.afterModalEnter,
                onBeforeLeave: r.beforeModalLeave,
                onAfterLeave: r.afterModalLeave,
              }),
              {
                default: Uc(function () {
                  return [
                    Zh(
                      qe(
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
                            (e[2] = nn(
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
                            (e[3] = nn(
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
                          qe(
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
                              Ii(t.$slots, "default", {
                                params: r.params,
                                close: function () {
                                  return t.$emit("update:modelValue", !1);
                                },
                              }),
                              r.visibility.resize && r.visibility.modal
                                ? (F(),
                                  De(
                                    "div",
                                    OR,
                                    [
                                      (F(!0),
                                      De(
                                        nt,
                                        null,
                                        Zc(n.resizeDirections, function (o) {
                                          return (
                                            F(),
                                            De(
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
                                : ft("v-if", !0),
                            ],
                            38
                          ),
                        ],
                        46,
                        ["aria-expanded"]
                      ),
                      [[bf, r.visibility.modal]]
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
        [[bf, !n.ssr || r.visible]]
      )
    : ft("v-if", !0);
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
  (ha.render = DR),
  (ha.__scopeId = "data-v-2836fdb5"),
  (ha.__file = "lib/VueFinalModal.vue");
var Bu = {
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
              ym(c, a, l, u, d, "next", h);
            }
            function d(h) {
              ym(c, a, l, u, d, "throw", h);
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
  NR = { class: "modals-container" };
function Cm(t, e) {
  var n = kt(kt({}, t), {}, { props: kt({}, t.props) });
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
(Bu.render = function (t, e, n, r, i, s) {
  return (
    F(),
    De("div", NR, [
      (F(!0),
      De(
        nt,
        null,
        Zc(t.api.dynamicModals, function (o, a) {
          return (
            F(),
            De(
              Xh(o.component),
              Ai(
                { key: o.id },
                o.bind,
                {
                  modelValue: o.value,
                  "onUpdate:modelValue": function (l) {
                    return (o.value = l);
                  },
                },
                tf(o.on),
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
              g0({ _: 2 }, [
                Zc(o.slots, function (l, c) {
                  return {
                    name: c,
                    fn: Xe(function () {
                      return [
                        ft(" eslint-disable vue/no-v-html "),
                        s.isString(l)
                          ? (F(),
                            De("div", { key: 0, innerHTML: l }, null, 8, [
                              "innerHTML",
                            ]))
                          : (F(),
                            De(
                              Xh(l.component),
                              Ai({ key: 1 }, l.bind, tf(l.on || {})),
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
  (Bu.__file = "lib/ModalsContainer.vue");
var qm = 0,
  ww = function () {
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
            switch (xh(r)) {
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
                    i.dynamicModals.push(Yc(Object.assign(u, r)));
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
              Fr(
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
              ? this.get.apply(this, Fr(r))
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
          dynamicModals: Yc([]),
          openedModals: [],
          modals: [],
          _setDefaultModal: function (r) {
            e = r;
          },
        });
    return (
      bi((t = {}), "$vfm", n),
      bi(
        t,
        "VueFinalModal",
        (function (r) {
          var i = Cm(ha, r);
          return r._setDefaultModal(i), i;
        })(n)
      ),
      bi(
        t,
        "ModalsContainer",
        (function (r) {
          return Cm(Bu, r);
        })(n)
      ),
      t
    );
  },
  Jl = ww();
Jl.$vfm;
Jl.VueFinalModal;
Jl.ModalsContainer;
var bw = function (t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = qm === 0 ? Jl : ww(),
      r = n.$vfm,
      i = n.VueFinalModal,
      s = n.ModalsContainer;
    qm += 1;
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
  Ew = function (t) {
    return {
      install: function (e, n) {
        var r = Object.assign({}, t, n);
        bw(e, r);
      },
    };
  };
Ew.install = bw;
var LR = {
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
const ct = {
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
  xm = {
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
        ct.STARTS_WITH,
        ct.CONTAINS,
        ct.NOT_CONTAINS,
        ct.ENDS_WITH,
        ct.EQUALS,
        ct.NOT_EQUALS,
      ],
      numeric: [
        ct.EQUALS,
        ct.NOT_EQUALS,
        ct.LESS_THAN,
        ct.LESS_THAN_OR_EQUAL_TO,
        ct.GREATER_THAN,
        ct.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [ct.DATE_IS, ct.DATE_IS_NOT, ct.DATE_BEFORE, ct.DATE_AFTER],
    },
    zIndex: { modal: 1100, overlay: 1e3, menu: 1e3, tooltip: 1100 },
  },
  MR = Symbol();
function $R(t, e, n, r) {
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
var VR = {
  install: (t, e) => {
    let n = e ? { ...xm, ...e } : { ...xm };
    const r = { config: Pn(n), changeTheme: $R };
    (t.config.globalProperties.$primevue = r), t.provide(MR, r);
  },
};
const Rm = (function () {
  try {
    return window.Quill;
  } catch {
    return null;
  }
})();
var Tw = {
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
    Rm
      ? ((this.quill = new Rm(this.$refs.editorElement, t)),
        this.initQuill(),
        this.handleLoad())
      : A(
          () => import("./quill-OFcVbw76.js").then((e) => e.q),
          __vite__mapDeps([209, 15])
        )
          .then((e) => {
            e &&
              LR.isExist(this.$refs.editorElement) &&
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
const FR = { class: "p-editor-container" },
  UR = { ref: "toolbarElement", class: "p-editor-toolbar" },
  BR = O(
    "span",
    { class: "ql-formats" },
    [
      O("select", { class: "ql-header", defaultValue: "0" }, [
        O("option", { value: "1" }, "Heading"),
        O("option", { value: "2" }, "Subheading"),
        O("option", { value: "0" }, "Normal"),
      ]),
      O("select", { class: "ql-font" }, [
        O("option"),
        O("option", { value: "serif" }),
        O("option", { value: "monospace" }),
      ]),
    ],
    -1
  ),
  jR = O(
    "span",
    { class: "ql-formats" },
    [
      O("button", { class: "ql-bold", type: "button" }),
      O("button", { class: "ql-italic", type: "button" }),
      O("button", { class: "ql-underline", type: "button" }),
    ],
    -1
  ),
  HR = O("select", { class: "ql-color" }, null, -1),
  zR = O("select", { class: "ql-background" }, null, -1),
  WR = [HR, zR],
  KR = O(
    "span",
    { class: "ql-formats" },
    [
      O("button", { class: "ql-list", value: "ordered", type: "button" }),
      O("button", { class: "ql-list", value: "bullet", type: "button" }),
      O("select", { class: "ql-align" }, [
        O("option", { defaultValue: "" }),
        O("option", { value: "center" }),
        O("option", { value: "right" }),
        O("option", { value: "justify" }),
      ]),
    ],
    -1
  ),
  GR = to(
    '<span class="ql-formats"><button class="ql-link" type="button"></button><button class="ql-image" type="button"></button><button class="ql-code-block" type="button"></button></span><span class="ql-formats"><button class="ql-clean" type="button"></button></span>',
    2
  );
function QR(t, e, n, r, i, s) {
  return (
    F(),
    de("div", FR, [
      O(
        "div",
        UR,
        [
          Ii(t.$slots, "toolbar", {}, () => [
            BR,
            jR,
            (F(),
            de("span", { key: i.reRenderColorKey, class: "ql-formats" }, WR)),
            KR,
            GR,
          ]),
        ],
        512
      ),
      O(
        "div",
        {
          ref: "editorElement",
          class: "p-editor-content",
          style: tr(n.editorStyle),
        },
        null,
        4
      ),
    ])
  );
}
function YR(t, e) {
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
var XR = `
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
YR(XR);
Tw.render = QR;
function Nn(t) {
  return t.split("-")[0];
}
function Ei(t) {
  return t.split("-")[1];
}
function Co(t) {
  return ["top", "bottom"].includes(Nn(t)) ? "x" : "y";
}
function Ph(t) {
  return t === "y" ? "height" : "width";
}
function Pm(t) {
  let { reference: e, floating: n, placement: r } = t;
  const i = e.x + e.width / 2 - n.width / 2,
    s = e.y + e.height / 2 - n.height / 2;
  let o;
  switch (Nn(r)) {
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
  const a = Co(r),
    l = Ph(a);
  switch (Ei(r)) {
    case "start":
      o[a] = o[a] - (e[l] / 2 - n[l] / 2);
      break;
    case "end":
      o[a] = o[a] + (e[l] / 2 - n[l] / 2);
      break;
  }
  return o;
}
const JR = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: o,
  } = n;
  let a = await o.getElementRects({ reference: t, floating: e, strategy: i }),
    { x: l, y: c } = Pm({ ...a, placement: r }),
    u = r,
    d = {};
  for (let h = 0; h < s.length; h++) {
    const { name: f, fn: g } = s[h],
      {
        x: y,
        y: _,
        data: w,
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
    if (((l = y ?? l), (c = _ ?? c), (d = { ...d, [f]: w ?? {} }), v)) {
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
        ({ x: l, y: c } = Pm({ ...a, placement: u }))),
        (h = -1);
      continue;
    }
  }
  return { x: l, y: c, placement: u, strategy: i, middlewareData: d };
};
function ZR(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Iw(t) {
  return typeof t != "number"
    ? ZR(t)
    : { top: t, right: t, bottom: t, left: t };
}
function ju(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
async function Zl(t, e) {
  e === void 0 && (e = {});
  const { x: n, y: r, platform: i, rects: s, elements: o, strategy: a } = t,
    {
      boundary: l = "clippingParents",
      rootBoundary: c = "viewport",
      elementContext: u = "floating",
      altBoundary: d = !1,
      padding: h = 0,
    } = e,
    f = Iw(h),
    y = o[d ? (u === "floating" ? "reference" : "floating") : u],
    _ = await i.getClippingClientRect({
      element: (await i.isElement(y))
        ? y
        : y.contextElement ||
          (await i.getDocumentElement({ element: o.floating })),
      boundary: l,
      rootBoundary: c,
    }),
    w = ju(
      await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: u === "floating" ? { ...s.floating, x: n, y: r } : s.reference,
        offsetParent: await i.getOffsetParent({ element: o.floating }),
        strategy: a,
      })
    );
  return {
    top: _.top - w.top + f.top,
    bottom: w.bottom - _.bottom + f.bottom,
    left: _.left - w.left + f.left,
    right: w.right - _.right + f.right,
  };
}
const eP = Math.min,
  Sr = Math.max;
function Hu(t, e, n) {
  return Sr(t, eP(e, n));
}
const tP = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { element: n, padding: r = 0 } = t ?? {},
        { x: i, y: s, placement: o, rects: a, platform: l } = e;
      if (n == null) return {};
      const c = Iw(r),
        u = { x: i, y: s },
        d = Nn(o),
        h = Co(d),
        f = Ph(h),
        g = await l.getDimensions({ element: n }),
        y = h === "y" ? "top" : "left",
        _ = h === "y" ? "bottom" : "right",
        w = a.reference[f] + a.reference[h] - u[h] - a.floating[f],
        v = u[h] - a.reference[h],
        k = await l.getOffsetParent({ element: n }),
        E = k ? (h === "y" ? k.clientHeight || 0 : k.clientWidth || 0) : 0,
        H = w / 2 - v / 2,
        z = c[y],
        ae = E - g[f] - c[_],
        U = E / 2 - g[f] / 2 + H,
        ne = Hu(z, U, ae);
      return { data: { [h]: ne, centerOffset: U - ne } };
    },
  }),
  nP = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Wa(t) {
  return t.replace(/left|right|bottom|top/g, (e) => nP[e]);
}
function Aw(t, e) {
  const n = Ei(t) === "start",
    r = Co(t),
    i = Ph(r);
  let s = r === "x" ? (n ? "right" : "left") : n ? "bottom" : "top";
  return (
    e.reference[i] > e.floating[i] && (s = Wa(s)), { main: s, cross: Wa(s) }
  );
}
const rP = { start: "end", end: "start" };
function zu(t) {
  return t.replace(/start|end/g, (e) => rP[e]);
}
const iP = ["top", "right", "bottom", "left"],
  sP = iP.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
function oP(t, e, n) {
  return (
    t
      ? [...n.filter((i) => Ei(i) === t), ...n.filter((i) => Ei(i) !== t)]
      : n.filter((i) => Nn(i) === i)
  ).filter((i) => (t ? Ei(i) === t || (e ? zu(i) !== i : !1) : !0));
}
const aP = function (t) {
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
            allowedPlacements: g = sP,
            autoAlignment: y = !0,
            ..._
          } = t;
        if ((n = d.autoPlacement) != null && n.skip) return {};
        const w = oP(f, y, g),
          v = await Zl(e, _),
          k =
            (r = (i = d.autoPlacement) == null ? void 0 : i.index) != null
              ? r
              : 0,
          E = w[k],
          { main: H, cross: z } = Aw(E, u);
        if (h !== E) return { x: l, y: c, reset: { placement: w[0] } };
        const ae = [v[Nn(E)], v[H], v[z]],
          U = [
            ...((s = (o = d.autoPlacement) == null ? void 0 : o.overflows) !=
            null
              ? s
              : []),
            { placement: E, overflows: ae },
          ],
          ne = w[k + 1];
        if (ne)
          return {
            data: { index: k + 1, overflows: U },
            reset: { placement: ne },
          };
        const ee = U.slice().sort((V, pe) => V.overflows[0] - pe.overflows[0]),
          Ie =
            (a = ee.find((V) => {
              let { overflows: pe } = V;
              return pe.every((be) => be <= 0);
            })) == null
              ? void 0
              : a.placement;
        return {
          data: { skip: !0 },
          reset: { placement: Ie ?? ee[0].placement },
        };
      },
    }
  );
};
function lP(t) {
  const e = Wa(t);
  return [zu(t), e, zu(e)];
}
const cP = function (t) {
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
          g = Nn(i),
          _ = u || (g === a || !h ? [Wa(a)] : lP(a)),
          w = [a, ..._],
          v = await Zl(e, f),
          k = [];
        let E = ((r = s.flip) == null ? void 0 : r.overflows) || [];
        if ((l && k.push(v[g]), c)) {
          const { main: U, cross: ne } = Aw(i, o);
          k.push(v[U], v[ne]);
        }
        if (
          ((E = [...E, { placement: i, overflows: k }]),
          !k.every((U) => U <= 0))
        ) {
          var H, z;
          const U =
              ((H = (z = s.flip) == null ? void 0 : z.index) != null ? H : 0) +
              1,
            ne = w[U];
          if (ne)
            return {
              data: { index: U, overflows: E },
              reset: { placement: ne },
            };
          let ee = "bottom";
          switch (d) {
            case "bestFit": {
              var ae;
              const Ie =
                (ae = E.slice().sort(
                  (V, pe) =>
                    V.overflows
                      .filter((be) => be > 0)
                      .reduce((be, _t) => be + _t, 0) -
                    pe.overflows
                      .filter((be) => be > 0)
                      .reduce((be, _t) => be + _t, 0)
                )[0]) == null
                  ? void 0
                  : ae.placement;
              Ie && (ee = Ie);
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
function uP(t) {
  let { placement: e, rects: n, value: r } = t;
  const i = Nn(e),
    s = ["left", "top"].includes(i) ? -1 : 1,
    o = typeof r == "function" ? r({ ...n, placement: e }) : r,
    { mainAxis: a, crossAxis: l } =
      typeof o == "number"
        ? { mainAxis: o, crossAxis: 0 }
        : { mainAxis: 0, crossAxis: 0, ...o };
  return Co(i) === "x" ? { x: l, y: a * s } : { x: a * s, y: l };
}
const dP = function (t) {
  return (
    t === void 0 && (t = 0),
    {
      name: "offset",
      options: t,
      fn(e) {
        const { x: n, y: r, placement: i, rects: s } = e,
          o = uP({ placement: i, rects: s, value: t });
        return { x: n + o.x, y: r + o.y, data: o };
      },
    }
  );
};
function hP(t) {
  return t === "x" ? "y" : "x";
}
const fP = function (t) {
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
                  let { x: w, y: v } = _;
                  return { x: w, y: v };
                },
              },
              ...l
            } = t,
            c = { x: n, y: r },
            u = await Zl(e, l),
            d = Co(Nn(i)),
            h = hP(d);
          let f = c[d],
            g = c[h];
          if (s) {
            const _ = d === "y" ? "top" : "left",
              w = d === "y" ? "bottom" : "right",
              v = f + u[_],
              k = f - u[w];
            f = Hu(v, f, k);
          }
          if (o) {
            const _ = h === "y" ? "top" : "left",
              w = h === "y" ? "bottom" : "right",
              v = g + u[_],
              k = g - u[w];
            g = Hu(v, g, k);
          }
          const y = a.fn({ ...e, [d]: f, [h]: g });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  pP = function (t) {
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
          const l = await Zl(e, a),
            c = Nn(r),
            u = Ei(r) === "end";
          let d, h;
          c === "top" || c === "bottom"
            ? ((d = c), (h = u ? "left" : "right"))
            : ((h = c), (d = u ? "top" : "bottom"));
          const f = Sr(l.left, 0),
            g = Sr(l.right, 0),
            y = Sr(l.top, 0),
            _ = Sr(l.bottom, 0),
            w = {
              height:
                i.floating.height -
                (["left", "right"].includes(r)
                  ? 2 * (y !== 0 || _ !== 0 ? y + _ : Sr(l.top, l.bottom))
                  : l[d]),
              width:
                i.floating.width -
                (["top", "bottom"].includes(r)
                  ? 2 * (f !== 0 || g !== 0 ? f + g : Sr(l.left, l.right))
                  : l[h]),
            };
          return (
            o == null || o({ ...w, ...i }),
            { data: { skip: !0 }, reset: { rects: !0 } }
          );
        },
      }
    );
  };
function Oh(t) {
  return (t == null ? void 0 : t.toString()) === "[object Window]";
}
function pr(t) {
  if (t == null) return window;
  if (!Oh(t)) {
    const e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function ec(t) {
  return pr(t).getComputedStyle(t);
}
function xn(t) {
  return Oh(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function Rn(t) {
  return t instanceof pr(t).HTMLElement;
}
function Ka(t) {
  return t instanceof pr(t).Element;
}
function mP(t) {
  return t instanceof pr(t).Node;
}
function Sw(t) {
  const e = pr(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function tc(t) {
  const { overflow: e, overflowX: n, overflowY: r } = ec(t);
  return /auto|scroll|overlay|hidden/.test(e + r + n);
}
function gP(t) {
  return ["table", "td", "th"].includes(xn(t));
}
function kw(t) {
  const e = navigator.userAgent.toLowerCase().includes("firefox"),
    n = ec(t);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    n.contain === "paint" ||
    ["transform", "perspective"].includes(n.willChange) ||
    (e && n.willChange === "filter") ||
    (e && (n.filter ? n.filter !== "none" : !1))
  );
}
const Om = Math.min,
  Ss = Math.max,
  Ga = Math.round;
function Fi(t, e) {
  e === void 0 && (e = !1);
  const n = t.getBoundingClientRect();
  let r = 1,
    i = 1;
  return (
    e &&
      Rn(t) &&
      ((r = (t.offsetWidth > 0 && Ga(n.width) / t.offsetWidth) || 1),
      (i = (t.offsetHeight > 0 && Ga(n.height) / t.offsetHeight) || 1)),
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
function mr(t) {
  return ((mP(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function nc(t) {
  return Oh(t)
    ? { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
    : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function Cw(t) {
  return Fi(mr(t)).left + nc(t).scrollLeft;
}
function vP(t) {
  const e = Fi(t);
  return Ga(e.width) !== t.offsetWidth || Ga(e.height) !== t.offsetHeight;
}
function yP(t, e, n) {
  const r = Rn(e),
    i = mr(e),
    s = Fi(t, r && vP(e));
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || (!r && n !== "fixed"))
    if (((xn(e) !== "body" || tc(i)) && (o = nc(e)), Rn(e))) {
      const l = Fi(e, !0);
      (a.x = l.x + e.clientLeft), (a.y = l.y + e.clientTop);
    } else i && (a.x = Cw(i));
  return {
    x: s.left + o.scrollLeft - a.x,
    y: s.top + o.scrollTop - a.y,
    width: s.width,
    height: s.height,
  };
}
function rc(t) {
  return xn(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (Sw(t) ? t.host : null) || mr(t);
}
function Dm(t) {
  return !Rn(t) || getComputedStyle(t).position === "fixed"
    ? null
    : t.offsetParent;
}
function _P(t) {
  let e = rc(t);
  for (; Rn(e) && !["html", "body"].includes(xn(e)); ) {
    if (kw(e)) return e;
    e = e.parentNode;
  }
  return null;
}
function Wu(t) {
  const e = pr(t);
  let n = Dm(t);
  for (; n && gP(n) && getComputedStyle(n).position === "static"; ) n = Dm(n);
  return n &&
    (xn(n) === "html" ||
      (xn(n) === "body" && getComputedStyle(n).position === "static" && !kw(n)))
    ? e
    : n || _P(t) || e;
}
function Nm(t) {
  return { width: t.offsetWidth, height: t.offsetHeight };
}
function wP(t) {
  let { rect: e, offsetParent: n, strategy: r } = t;
  const i = Rn(n),
    s = mr(n);
  if (n === s) return e;
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (
    (i || (!i && r !== "fixed")) &&
    ((xn(n) !== "body" || tc(s)) && (o = nc(n)), Rn(n))
  ) {
    const l = Fi(n, !0);
    (a.x = l.x + n.clientLeft), (a.y = l.y + n.clientTop);
  }
  return { ...e, x: e.x - o.scrollLeft + a.x, y: e.y - o.scrollTop + a.y };
}
function bP(t) {
  const e = pr(t),
    n = mr(t),
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
function EP(t) {
  var e;
  const n = mr(t),
    r = nc(t),
    i = (e = t.ownerDocument) == null ? void 0 : e.body,
    s = Ss(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    o = Ss(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    );
  let a = -r.scrollLeft + Cw(t);
  const l = -r.scrollTop;
  return (
    ec(i || n).direction === "rtl" &&
      (a += Ss(n.clientWidth, i ? i.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function qw(t) {
  return ["html", "body", "#document"].includes(xn(t))
    ? t.ownerDocument.body
    : Rn(t) && tc(t)
    ? t
    : qw(rc(t));
}
function Qa(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = qw(t),
    i = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
    s = pr(r),
    o = i ? [s].concat(s.visualViewport || [], tc(r) ? r : []) : r,
    a = e.concat(o);
  return i ? a : a.concat(Qa(rc(o)));
}
function TP(t, e) {
  const n = e.getRootNode == null ? void 0 : e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && Sw(n)) {
    let r = e;
    do {
      if (r && t === r) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function IP(t) {
  const e = Fi(t),
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
function Lm(t, e) {
  return e === "viewport" ? ju(bP(t)) : Ka(e) ? IP(e) : ju(EP(mr(t)));
}
function AP(t) {
  const e = Qa(rc(t)),
    r = ["absolute", "fixed"].includes(ec(t).position) && Rn(t) ? Wu(t) : t;
  return Ka(r) ? e.filter((i) => Ka(i) && TP(i, r) && xn(i) !== "body") : [];
}
function SP(t) {
  let { element: e, boundary: n, rootBoundary: r } = t;
  const s = [...(n === "clippingParents" ? AP(e) : [].concat(n)), r],
    o = s[0],
    a = s.reduce((l, c) => {
      const u = Lm(e, c);
      return (
        (l.top = Ss(u.top, l.top)),
        (l.right = Om(u.right, l.right)),
        (l.bottom = Om(u.bottom, l.bottom)),
        (l.left = Ss(u.left, l.left)),
        l
      );
    }, Lm(e, o));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
const kP = {
    getElementRects: (t) => {
      let { reference: e, floating: n, strategy: r } = t;
      return { reference: yP(e, Wu(n), r), floating: { ...Nm(n), x: 0, y: 0 } };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: (t) => wP(t),
    getOffsetParent: (t) => {
      let { element: e } = t;
      return Wu(e);
    },
    isElement: (t) => Ka(t),
    getDocumentElement: (t) => {
      let { element: e } = t;
      return mr(e);
    },
    getClippingClientRect: (t) => SP(t),
    getDimensions: (t) => {
      let { element: e } = t;
      return Nm(e);
    },
    getClientRects: (t) => {
      let { element: e } = t;
      return e.getClientRects();
    },
  },
  CP = (t, e, n) => JR(t, e, { platform: kP, ...n });
var qP = Object.defineProperty,
  xP = Object.defineProperties,
  RP = Object.getOwnPropertyDescriptors,
  Mm = Object.getOwnPropertySymbols,
  PP = Object.prototype.hasOwnProperty,
  OP = Object.prototype.propertyIsEnumerable,
  $m = (t, e, n) =>
    e in t
      ? qP(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  pn = (t, e) => {
    for (var n in e || (e = {})) PP.call(e, n) && $m(t, n, e[n]);
    if (Mm) for (var n of Mm(e)) OP.call(e, n) && $m(t, n, e[n]);
    return t;
  },
  qo = (t, e) => xP(t, RP(e));
function xw(t, e) {
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      (typeof e[n] == "object" && t[n] ? xw(t[n], e[n]) : (t[n] = e[n]));
}
const bn = {
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
function Ui(t, e) {
  let n = bn.themes[t] || {},
    r;
  do
    (r = n[e]),
      typeof r > "u"
        ? n.$extend
          ? (n = bn.themes[n.$extend] || {})
          : ((n = null), (r = bn[e]))
        : (n = null);
  while (n);
  return r;
}
function DP(t) {
  const e = [t];
  let n = bn.themes[t] || {};
  do
    n.$extend && !n.$resetCss
      ? (e.push(n.$extend), (n = bn.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return e.map((r) => `v-popper--theme-${r}`);
}
function Vm(t) {
  const e = [t];
  let n = bn.themes[t] || {};
  do
    n.$extend
      ? (e.push(n.$extend), (n = bn.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return e;
}
let Gr = !1;
if (typeof window < "u") {
  Gr = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get() {
        Gr = !0;
      },
    });
    window.addEventListener("test", null, t);
  } catch {}
}
let Rw = !1;
typeof window < "u" &&
  typeof navigator < "u" &&
  (Rw = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Pw = ["auto", "top", "bottom", "left", "right"].reduce(
    (t, e) => t.concat([e, `${e}-start`, `${e}-end`]),
    []
  ),
  Fm = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
  },
  Um = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
  };
function Bm(t, e) {
  const n = t.indexOf(e);
  n !== -1 && t.splice(n, 1);
}
function Bc() {
  return new Promise((t) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(t);
    })
  );
}
const Qt = [];
let Ir = null;
const jm = {};
function Hm(t) {
  let e = jm[t];
  return e || (e = jm[t] = []), e;
}
let Ku = function () {};
typeof window < "u" && (Ku = window.Element);
function ye(t) {
  return function (e) {
    return Ui(e.theme, t);
  };
}
const jc = "__floating-vue__popper";
var Ow = () =>
  Ze({
    name: "VPopper",
    provide() {
      return { [jc]: { parentPopper: this } };
    },
    inject: { [jc]: { default: null } },
    props: {
      theme: { type: String, required: !0 },
      targetNodes: { type: Function, required: !0 },
      referenceNode: { type: Function, default: null },
      popperNode: { type: Function, required: !0 },
      shown: { type: Boolean, default: !1 },
      showGroup: { type: String, default: null },
      ariaId: { default: null },
      disabled: { type: Boolean, default: ye("disabled") },
      positioningDisabled: {
        type: Boolean,
        default: ye("positioningDisabled"),
      },
      placement: {
        type: String,
        default: ye("placement"),
        validator: (t) => Pw.includes(t),
      },
      delay: { type: [String, Number, Object], default: ye("delay") },
      distance: { type: [Number, String], default: ye("distance") },
      skidding: { type: [Number, String], default: ye("skidding") },
      triggers: { type: Array, default: ye("triggers") },
      showTriggers: { type: [Array, Function], default: ye("showTriggers") },
      hideTriggers: { type: [Array, Function], default: ye("hideTriggers") },
      popperTriggers: { type: Array, default: ye("popperTriggers") },
      popperShowTriggers: {
        type: [Array, Function],
        default: ye("popperShowTriggers"),
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: ye("popperHideTriggers"),
      },
      container: {
        type: [String, Object, Ku, Boolean],
        default: ye("container"),
      },
      boundary: { type: [String, Ku], default: ye("boundary") },
      strategy: {
        type: String,
        validator: (t) => ["absolute", "fixed"].includes(t),
        default: ye("strategy"),
      },
      autoHide: { type: [Boolean, Function], default: ye("autoHide") },
      handleResize: { type: Boolean, default: ye("handleResize") },
      instantMove: { type: Boolean, default: ye("instantMove") },
      eagerMount: { type: Boolean, default: ye("eagerMount") },
      popperClass: {
        type: [String, Array, Object],
        default: ye("popperClass"),
      },
      computeTransformOrigin: {
        type: Boolean,
        default: ye("computeTransformOrigin"),
      },
      autoMinSize: { type: Boolean, default: ye("autoMinSize") },
      autoSize: { type: [Boolean, String], default: ye("autoSize") },
      autoMaxSize: { type: Boolean, default: ye("autoMaxSize") },
      autoBoundaryMaxSize: {
        type: Boolean,
        default: ye("autoBoundaryMaxSize"),
      },
      preventOverflow: { type: Boolean, default: ye("preventOverflow") },
      overflowPadding: {
        type: [Number, String],
        default: ye("overflowPadding"),
      },
      arrowPadding: { type: [Number, String], default: ye("arrowPadding") },
      arrowOverflow: { type: Boolean, default: ye("arrowOverflow") },
      flip: { type: Boolean, default: ye("flip") },
      shift: { type: Boolean, default: ye("shift") },
      shiftCrossAxis: { type: Boolean, default: ye("shiftCrossAxis") },
      noAutoFocus: { type: Boolean, default: ye("noAutoFocus") },
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
          classes: qo(pn({}, this.classes), { popperClass: this.popperClass }),
          result: this.positioningDisabled ? null : this.result,
          attrs: this.$attrs,
        };
      },
      parentPopper() {
        var t;
        return (t = this[jc]) == null ? void 0 : t.parentPopper;
      },
      hasPopperShowTriggerHover() {
        var t, e;
        return (
          ((t = this.popperTriggers) == null ? void 0 : t.includes("hover")) ||
          ((e = this.popperShowTriggers) == null ? void 0 : e.includes("hover"))
        );
      },
    },
    watch: pn(
      pn(
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
            dP({ mainAxis: this.distance, crossAxis: this.skidding })
          );
        const n = this.placement.startsWith("auto");
        if (
          (n
            ? e.middleware.push(
                aP({
                  alignment:
                    (t = this.placement.split("-")[1]) != null ? t : "",
                })
              )
            : (e.placement = this.placement),
          this.preventOverflow &&
            (this.shift &&
              e.middleware.push(
                fP({
                  padding: this.overflowPadding,
                  boundary: this.boundary,
                  crossAxis: this.shiftCrossAxis,
                })
              ),
            !n &&
              this.flip &&
              e.middleware.push(
                cP({ padding: this.overflowPadding, boundary: this.boundary })
              )),
          e.middleware.push(
            tP({ element: this.$_arrowNode, padding: this.arrowPadding })
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
            pP({
              boundary: this.boundary,
              padding: this.overflowPadding,
              apply: ({ width: i, height: s }) => {
                (this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null),
                  (this.$_innerNode.style.maxHeight =
                    s != null ? `${s}px` : null);
              },
            })
          ));
        const r = await CP(this.$_referenceNode, this.$_popperNode, e);
        Object.assign(this.result, {
          x: r.x,
          y: r.y,
          placement: r.placement,
          strategy: r.strategy,
          arrow: pn(
            pn({}, r.middlewareData.arrow),
            r.middlewareData.arrowOverflow
          ),
        });
      },
      $_scheduleShow(t = null, e = !1) {
        if (
          (this.$_updateParentShownChildren(!0),
          (this.$_hideInProgress = !1),
          clearTimeout(this.$_scheduleTimer),
          Ir && this.instantMove && Ir.instantMove && Ir !== this.parentPopper)
        ) {
          Ir.$_applyHide(!0), this.$_applyShow(!0);
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
          this.isShown && (Ir = this),
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
            await Bc(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled ||
              this.$_registerEventListeners(
                [...Qa(this.$_referenceNode), ...Qa(this.$_popperNode)],
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
          for (let n = 0; n < Qt.length; n++)
            (e = Qt[n]),
              e.showGroup !== t && (e.hide(), e.$emit("close-group"));
        }
        Qt.push(this), document.body.classList.add("v-popper--some-open");
        for (const e of Vm(this.theme))
          Hm(e).push(this),
            document.body.classList.add(`v-popper--some-open--${e}`);
        this.$emit("apply-show"),
          (this.classes.showFrom = !0),
          (this.classes.showTo = !1),
          (this.classes.hideFrom = !1),
          (this.classes.hideTo = !1),
          await Bc(),
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
          Bm(Qt, this),
          Qt.length === 0 &&
            document.body.classList.remove("v-popper--some-open");
        for (const n of Vm(this.theme)) {
          const r = Hm(n);
          Bm(r, this),
            r.length === 0 &&
              document.body.classList.remove(`v-popper--some-open--${n}`);
        }
        Ir === this && (Ir = null),
          (this.isShown = !1),
          this.$_applyAttrsToTarget({
            "aria-describedby": void 0,
            "data-popper-shown": void 0,
          }),
          clearTimeout(this.$_disposeTimer);
        const e = Ui(this.theme, "disposeTimeout");
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
          await Bc(),
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
          Fm,
          this.triggers,
          this.showTriggers,
          t
        ),
          this.$_registerTriggerListeners(
            [this.$_popperNode],
            Fm,
            this.popperTriggers,
            this.popperShowTriggers,
            t
          );
        const e = (n) => {
          n.usedByTooltip || this.hide({ event: n });
        };
        this.$_registerTriggerListeners(
          this.$_targetNodes,
          Um,
          this.triggers,
          this.hideTriggers,
          e
        ),
          this.$_registerTriggerListeners(
            [this.$_popperNode],
            Um,
            this.popperTriggers,
            this.popperHideTriggers,
            e
          );
      },
      $_registerEventListeners(t, e, n) {
        this.$_events.push({ targetNodes: t, eventType: e, handler: n }),
          t.forEach((r) =>
            r.addEventListener(e, n, Gr ? { passive: !0 } : void 0)
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
        if (ks >= t.left && ks <= t.right && Cs >= t.top && Cs <= t.bottom) {
          const e = this.$_popperNode.getBoundingClientRect(),
            n = ks - Hn,
            r = Cs - zn,
            s =
              e.left +
              e.width / 2 -
              Hn +
              (e.top + e.height / 2) -
              zn +
              e.width +
              e.height,
            o = Hn + n * s,
            a = zn + r * s;
          return (
            Jo(Hn, zn, o, a, e.left, e.top, e.left, e.bottom) ||
            Jo(Hn, zn, o, a, e.left, e.top, e.right, e.top) ||
            Jo(Hn, zn, o, a, e.right, e.top, e.right, e.bottom) ||
            Jo(Hn, zn, o, a, e.left, e.bottom, e.right, e.bottom)
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
  (Rw
    ? (document.addEventListener(
        "touchstart",
        zm,
        Gr ? { passive: !0, capture: !0 } : !0
      ),
      document.addEventListener(
        "touchend",
        LP,
        Gr ? { passive: !0, capture: !0 } : !0
      ))
    : (window.addEventListener("mousedown", zm, !0),
      window.addEventListener("click", NP, !0)),
  window.addEventListener("resize", VP));
function zm(t) {
  for (let e = 0; e < Qt.length; e++) {
    const n = Qt[e];
    try {
      const r = n.popperNode();
      n.$_mouseDownContains = r.contains(t.target);
    } catch {}
  }
}
function NP(t) {
  Dw(t);
}
function LP(t) {
  Dw(t, !0);
}
function Dw(t, e = !1) {
  const n = {};
  for (let r = Qt.length - 1; r >= 0; r--) {
    const i = Qt[r];
    try {
      const s = (i.$_containsGlobalTarget = MP(i, t));
      (i.$_pendingHide = !1),
        requestAnimationFrame(() => {
          if (((i.$_pendingHide = !1), !n[i.randomId] && Wm(i, s, t))) {
            if (
              (i.$_handleGlobalClose(t, e),
              !t.closeAllPopover && t.closePopover && s)
            ) {
              let a = i.parentPopper;
              for (; a; ) (n[a.randomId] = !0), (a = a.parentPopper);
              return;
            }
            let o = i.parentPopper;
            for (; o && Wm(o, o.$_containsGlobalTarget, t); ) {
              o.$_handleGlobalClose(t, e);
              o = o.parentPopper;
            }
          }
        });
    } catch {}
  }
}
function MP(t, e) {
  const n = t.popperNode();
  return t.$_mouseDownContains || n.contains(e.target);
}
function Wm(t, e, n) {
  return n.closeAllPopover || (n.closePopover && e) || ($P(t, n) && !e);
}
function $P(t, e) {
  if (typeof t.autoHide == "function") {
    const n = t.autoHide(e);
    return (t.lastAutoHide = n), n;
  }
  return t.autoHide;
}
function VP(t) {
  for (let e = 0; e < Qt.length; e++) Qt[e].$_computePosition(t);
}
let Hn = 0,
  zn = 0,
  ks = 0,
  Cs = 0;
typeof window < "u" &&
  window.addEventListener(
    "mousemove",
    (t) => {
      (Hn = ks), (zn = Cs), (ks = t.clientX), (Cs = t.clientY);
    },
    Gr ? { passive: !0 } : void 0
  );
function Jo(t, e, n, r, i, s, o, a) {
  const l =
      ((o - i) * (e - s) - (a - s) * (t - i)) /
      ((a - s) * (n - t) - (o - i) * (r - e)),
    c =
      ((n - t) * (e - s) - (r - e) * (t - i)) /
      ((a - s) * (n - t) - (o - i) * (r - e));
  return l >= 0 && l <= 1 && c >= 0 && c <= 1;
}
var ic = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e) n[r] = i;
  return n;
};
const FP = { extends: Ow() };
function UP(t, e, n, r, i, s) {
  return (
    F(),
    de(
      "div",
      {
        ref: "reference",
        class: Oe(["v-popper", { "v-popper--shown": t.slotData.isShown }]),
      },
      [Ii(t.$slots, "default", ab(Kg(t.slotData)))],
      2
    )
  );
}
var BP = ic(FP, [["render", UP]]);
function jP() {
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
let fa;
function Gu() {
  Gu.init || ((Gu.init = !0), (fa = jP() !== -1));
}
var sc = {
  name: "ResizeObserver",
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ["notify"],
  mounted() {
    Gu(),
      Zn(() => {
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
      fa && this.$el.appendChild(t),
      (t.data = "about:blank"),
      fa || this.$el.appendChild(t);
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
        (!fa &&
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
const HP = kg();
Hi("data-v-b329ee4c");
const zP = { class: "resize-observer", tabindex: "-1" };
zi();
const WP = HP((t, e, n, r, i, s) => (F(), De("div", zP)));
sc.render = WP;
sc.__scopeId = "data-v-b329ee4c";
sc.__file = "src/components/ResizeObserver.vue";
var Nw = (t = "theme") => ({
  computed: {
    themeClass() {
      return DP(this[t]);
    },
  },
});
const KP = Ze({
    name: "VPopperContent",
    components: { ResizeObserver: sc },
    mixins: [Nw()],
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
  GP = ["id", "aria-hidden", "tabindex", "data-popper-placement"],
  QP = { ref: "inner", class: "v-popper__inner" },
  YP = O("div", { class: "v-popper__arrow-outer" }, null, -1),
  XP = O("div", { class: "v-popper__arrow-inner" }, null, -1),
  JP = [YP, XP];
function ZP(t, e, n, r, i, s) {
  const o = En("ResizeObserver");
  return (
    F(),
    de(
      "div",
      {
        id: t.popperId,
        ref: "popover",
        class: Oe([
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
        style: tr(
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
          e[2] || (e[2] = Xg((a) => t.autoHide && t.$emit("hide"), ["esc"])),
      },
      [
        O("div", {
          class: "v-popper__backdrop",
          onClick: e[0] || (e[0] = (a) => t.autoHide && t.$emit("hide")),
        }),
        O(
          "div",
          {
            class: "v-popper__wrapper",
            style: tr(
              t.result ? { transformOrigin: t.result.transformOrigin } : void 0
            ),
          },
          [
            O(
              "div",
              QP,
              [
                t.mounted
                  ? (F(),
                    de(
                      nt,
                      { key: 0 },
                      [
                        O("div", null, [Ii(t.$slots, "default")]),
                        t.handleResize
                          ? (F(),
                            De(o, {
                              key: 0,
                              onNotify:
                                e[1] || (e[1] = (a) => t.$emit("resize", a)),
                            }))
                          : ft("", !0),
                      ],
                      64
                    ))
                  : ft("", !0),
              ],
              512
            ),
            O(
              "div",
              {
                ref: "arrow",
                class: "v-popper__arrow-container",
                style: tr(
                  t.result
                    ? {
                        left: t.toPx(t.result.arrow.x),
                        top: t.toPx(t.result.arrow.y),
                      }
                    : void 0
                ),
              },
              JP,
              4
            ),
          ],
          4
        ),
      ],
      46,
      GP
    )
  );
}
var Lw = ic(KP, [["render", ZP]]),
  Mw = {
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
const eO = Ze({
  name: "VPopperWrapper",
  components: { Popper: BP, PopperContent: Lw },
  mixins: [Mw, Nw("finalTheme")],
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
function tO(t, e, n, r, i, s) {
  const o = En("PopperContent"),
    a = En("Popper");
  return (
    F(),
    De(
      a,
      {
        ref: "popper",
        theme: t.finalTheme,
        "target-nodes": t.getTargetNodes,
        "popper-node": () => t.$refs.popperContent.$el,
        class: Oe([t.themeClass]),
      },
      {
        default: Xe(
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
            classes: w,
            result: v,
          }) => [
            Ii(t.$slots, "default", { shown: c, show: f, hide: g }),
            qe(
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
                classes: w,
                result: v,
                onHide: g,
                onResize: _,
              },
              {
                default: Xe(() => [
                  Ii(t.$slots, "popper", { shown: c, hide: g }),
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
var Dh = ic(eO, [["render", tO]]);
const nO = Ze(qo(pn({}, Dh), { name: "VDropdown", vPopperTheme: "dropdown" })),
  rO = Ze(qo(pn({}, Dh), { name: "VMenu", vPopperTheme: "menu" })),
  iO = Ze(qo(pn({}, Dh), { name: "VTooltip", vPopperTheme: "tooltip" })),
  sO = Ze({
    name: "VTooltipDirective",
    components: { Popper: Ow(), PopperContent: Lw },
    mixins: [Mw],
    inheritAttrs: !1,
    props: {
      theme: { type: String, default: "tooltip" },
      html: { type: Boolean, default: (t) => Ui(t.theme, "html") },
      content: { type: [String, Number, Function], default: null },
      loadingContent: {
        type: String,
        default: (t) => Ui(t.theme, "loadingContent"),
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
  oO = ["innerHTML"],
  aO = ["textContent"];
function lO(t, e, n, r, i, s) {
  const o = En("PopperContent"),
    a = En("Popper");
  return (
    F(),
    De(
      a,
      Ai({ ref: "popper" }, t.$attrs, {
        theme: t.theme,
        "popper-node": () => t.$refs.popperContent.$el,
        onApplyShow: t.onShow,
        onApplyHide: t.onHide,
      }),
      {
        default: Xe(
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
            result: w,
          }) => [
            qe(
              o,
              {
                ref: "popperContent",
                class: Oe({ "v-popper--tooltip-loading": t.loading }),
                "popper-id": l,
                theme: t.theme,
                shown: c,
                mounted: u,
                "skip-transition": d,
                "auto-hide": h,
                "handle-resize": g,
                classes: _,
                result: w,
                onHide: f,
                onResize: y,
              },
              {
                default: Xe(() => [
                  t.html
                    ? (F(),
                      de(
                        "div",
                        { key: 0, innerHTML: t.finalContent },
                        null,
                        8,
                        oO
                      ))
                    : (F(),
                      de(
                        "div",
                        { key: 1, textContent: ub(t.finalContent) },
                        null,
                        8,
                        aO
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
var cO = ic(sO, [["render", lO]]);
const $w = "v-popper--has-tooltip";
function uO(t, e) {
  let n = t.placement;
  if (!n && e) for (const r of Pw) e[r] && (n = r);
  return n || (n = Ui(t.theme || "tooltip", "placement")), n;
}
function Vw(t, e, n) {
  let r;
  const i = typeof e;
  return (
    i === "string"
      ? (r = { content: e })
      : e && i === "object"
      ? (r = e)
      : (r = { content: !1 }),
    (r.placement = uO(r, n)),
    (r.targetNodes = () => [t]),
    (r.referenceNode = () => t),
    r
  );
}
let Hc,
  Xs,
  dO = 0;
function hO() {
  if (Hc) return;
  (Xs = ue([])),
    (Hc = Jg({
      name: "VTooltipDirectiveApp",
      setup() {
        return { directives: Xs };
      },
      render() {
        return this.directives.map((e) =>
          dl(
            cO,
            qo(pn({}, e.options), {
              shown: e.shown || e.options.shown,
              key: e.id,
            })
          )
        );
      },
      devtools: { hide: !0 },
    }));
  const t = document.createElement("div");
  document.body.appendChild(t), Hc.mount(t);
}
function fO(t, e, n) {
  hO();
  const r = ue(Vw(t, e, n)),
    i = ue(!1),
    s = { id: dO++, options: r, shown: i };
  return (
    Xs.value.push(s),
    t.classList && t.classList.add($w),
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
function Fw(t) {
  if (t.$_popper) {
    const e = Xs.value.indexOf(t.$_popper.item);
    e !== -1 && Xs.value.splice(e, 1),
      delete t.$_popper,
      delete t.$_popperOldShown,
      delete t.$_popperMountTarget;
  }
  t.classList && t.classList.remove($w);
}
function Km(t, { value: e, modifiers: n }) {
  const r = Vw(t, e, n);
  if (!r.content || Ui(r.theme || "tooltip", "disabled")) Fw(t);
  else {
    let i;
    t.$_popper ? ((i = t.$_popper), (i.options.value = r)) : (i = fO(t, e, n)),
      typeof e.shown < "u" &&
        e.shown !== t.$_popperOldShown &&
        ((t.$_popperOldShown = e.shown), e.shown ? i.show() : i.hide());
  }
}
var pO = {
  beforeMount: Km,
  updated: Km,
  beforeUnmount(t) {
    Fw(t);
  },
};
function Gm(t) {
  t.addEventListener("click", Uw),
    t.addEventListener("touchstart", Bw, Gr ? { passive: !0 } : !1);
}
function Qm(t) {
  t.removeEventListener("click", Uw),
    t.removeEventListener("touchstart", Bw),
    t.removeEventListener("touchend", jw),
    t.removeEventListener("touchcancel", Hw);
}
function Uw(t) {
  const e = t.currentTarget;
  (t.closePopover = !e.$_vclosepopover_touch),
    (t.closeAllPopover =
      e.$_closePopoverModifiers && !!e.$_closePopoverModifiers.all);
}
function Bw(t) {
  if (t.changedTouches.length === 1) {
    const e = t.currentTarget;
    e.$_vclosepopover_touch = !0;
    const n = t.changedTouches[0];
    (e.$_vclosepopover_touchPoint = n),
      e.addEventListener("touchend", jw),
      e.addEventListener("touchcancel", Hw);
  }
}
function jw(t) {
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
function Hw(t) {
  const e = t.currentTarget;
  e.$_vclosepopover_touch = !1;
}
var mO = {
  beforeMount(t, { value: e, modifiers: n }) {
    (t.$_closePopoverModifiers = n), (typeof e > "u" || e) && Gm(t);
  },
  updated(t, { value: e, oldValue: n, modifiers: r }) {
    (t.$_closePopoverModifiers = r),
      e !== n && (typeof e > "u" || e ? Gm(t) : Qm(t));
  },
  beforeUnmount(t) {
    Qm(t);
  },
};
function gO(t, e = {}) {
  t.$_vTooltipInstalled ||
    ((t.$_vTooltipInstalled = !0),
    xw(bn, e),
    t.directive("tooltip", pO),
    t.directive("close-popper", mO),
    t.component("VTooltip", iO),
    t.component("VDropdown", nO),
    t.component("VMenu", rO));
}
const vO = { version: "2.0.0-beta.20", install: gO, options: bn };
var yO = "firebase",
  _O = "9.10.0";
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
 */ sr(yO, _O, "app");
var oc = function () {
    return typeof document < "u" && typeof window < "u";
  },
  wO = function (e, n) {
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
  bO = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Object.keys(n).forEach(function (r) {
      e[r] = n[r];
    });
  },
  zw = Pn({
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
  gr = function () {
    return $b(zw);
  },
  Ww = Te(function () {
    var t = gr(),
      e = t.property;
    if (e.value)
      return Array.isArray(e.value)
        ? e.value.find(function (n) {
            return n.default === !0;
          }) || e.value[0]
        : e.value;
  }),
  EO = Te(function () {
    var t = gr(),
      e = t.property;
    return !!(e.value && e.value.id !== null);
  }),
  Js = Te(function () {
    var t = gr(),
      e = t.property;
    return Array.isArray(e.value) ? e.value : [e.value];
  }),
  TO = Te(function () {
    var t = gr(),
      e = t.isEnabled,
      n = Ww.value;
    return !!(n && n.id && e.value);
  }),
  xo = function () {
    var t;
    if (oc()) {
      for (
        var e = gr(),
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
  Nh = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    Js.value.forEach(function (r) {
      xo.apply(void 0, ["config", r.id].concat(e));
    });
  },
  IO = function (t) {
    Nh({ custom_map: t });
  },
  AO = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    oc() &&
      Js.value.forEach(function (e) {
        window["ga-disable-".concat(e.id)] = t;
      });
  },
  ti = function (t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = Object.assign({}, e);
    !n.send_to &&
      Js.value.length > 1 &&
      (n.send_to = Js.value.map(function (r) {
        return r.id;
      })),
      xo("event", t, n);
  },
  SO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ti.apply(void 0, ["exception"].concat(e));
  },
  kO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    Nh.apply(void 0, ["linker"].concat(e));
  },
  CO = function (t) {
    var e = {};
    typeof t == "string"
      ? (e = { page_path: t, page_location: window.location.href })
      : (e = t),
      typeof e.send_page_view > "u" && (e.send_page_view = !0),
      ti("page_view", e);
  },
  qO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ti.apply(void 0, ["purchase"].concat(e));
  },
  xO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ti.apply(void 0, ["refund"].concat(e));
  },
  RO = function () {
    for (
      var t = gr(),
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
      ti("screen_view", l);
  },
  PO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    xo.apply(void 0, ["set"].concat(e));
  },
  OO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ti.apply(void 0, ["timing_complete"].concat(e));
  },
  DO = Object.freeze({
    __proto__: null,
    config: Nh,
    customMap: IO,
    disable: AO,
    event: ti,
    exception: SO,
    linker: kO,
    pageview: CO,
    purchase: qO,
    query: xo,
    refund: xO,
    screenview: RO,
    set: PO,
    time: OO,
  }),
  Ym = ue(!1),
  Xm = ue(!1),
  NO = function () {
    var e = gr(),
      n = e.disableScriptLoader,
      r = e.preconnectOrigin,
      i = e.resourceURL,
      s = e.dataLayerName;
    if (!(!oc() || !EO.value || Xm.value)) {
      if (
        ((Xm.value = !0),
        Js.value.forEach(function (a) {
          var l = Object.assign({ send_page_view: !1 }, a.params);
          xo("config", a.id, l);
        }),
        n.value)
      ) {
        Ym.value = !0;
        return;
      }
      var o = ""
        .concat(i.value, "?id=")
        .concat(Ww.value.id, "&l=")
        .concat(s.value);
      wO(o, r.value).then(function () {
        Ym.value = !0;
      });
    }
  },
  LO = function () {
    ut(
      function () {
        return TO.value;
      },
      function (e) {
        return e && NO();
      },
      { immediate: !0 }
    );
  },
  MO = function () {
    if (oc()) {
      var t = gr(),
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
Pn({ template: null, useScreenview: !1, skipSamePath: !0 });
var $O = {
  install: function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    bO(zw, n), MO(), LO(), (e.config.globalProperties.$gtag = DO);
  },
};
const VO = {
  apiKey: "AIzaSyADXkE6U5j_hlSRxK3nfqyylmPXgUeGWsQ",
  authDomain: "cris-ordem-paranormal.firebaseapp.com",
  projectId: "cris-ordem-paranormal",
  storageBucket: "cris-ordem-paranormal.appspot.com",
  messagingSenderId: "713229784986",
  appId: "1:713229784986:web:8096a40ec5021bbbf18c23",
  measurementId: "G-XCBC726H4S",
};
QI(VO);
const ni = Jg(eR);
ni.use($O, { property: { id: "G-XCBC726H4S" } });
ni.use(vw);
ni.use(VR);
ni.use(Ew);
ni.use(vO);
ni.component("PEditor", Tw);
ni.mount("#app");
export {
  eo as $,
  cw as A,
  F1 as B,
  Zh as C,
  BO as D,
  Xg as E,
  $1 as F,
  Lt as G,
  Et as H,
  tD as I,
  fw as J,
  tr as K,
  Rt as L,
  So as M,
  z1 as N,
  sD as O,
  Vr as P,
  hl as Q,
  I1 as R,
  Wi as S,
  ba as T,
  qt as U,
  jO as V,
  oD as W,
  hw as X,
  iD as Y,
  uw as Z,
  ei as _,
  O as a,
  kE as a0,
  Oe as a1,
  UO as a2,
  cl as a3,
  Ox as a4,
  Xh as a5,
  FO as a6,
  ev as a7,
  A as a8,
  Ii as a9,
  bf as aa,
  Ai as ab,
  qi as ac,
  Br as ad,
  sr as ae,
  yt as af,
  bd as ag,
  _v as ah,
  io as ai,
  Dn as aj,
  to as ak,
  zi as b,
  de as c,
  Ze as d,
  un as e,
  Te as f,
  Ki as g,
  aD as h,
  En as i,
  nn as j,
  qe as k,
  j1 as l,
  ft as m,
  nt as n,
  F as o,
  Hi as p,
  Zc as q,
  ue as r,
  Fs as s,
  ub as t,
  yd as u,
  De as v,
  ut as w,
  Xe as x,
  rD as y,
  nD as z,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/LoginPage-BjPvRQQq.js",
      "assets/LoginPage-eaGdDaNQ.css",
      "assets/CharacterList-mLeDrI_i.js",
      "assets/LoadingView-BDyk9qee.js",
      "assets/LoadingView-qh-7N428.css",
      "assets/SearchInput-Vr9n0nUP.js",
      "assets/SearchInput-LEjlhuSA.css",
      "assets/ToastNotification-2J6AO8ev.js",
      "assets/ToastNotification-6ONUaJjV.css",
      "assets/CharacterCard-15p3vqPf.js",
      "assets/share-icon-J6b_MEIl.js",
      "assets/trash-icon-Dl18GMfa.js",
      "assets/CharacterCard-ocRKK6cr.css",
      "assets/firebase-UUb4pQvs.js",
      "assets/lodash-gzw5KmHd.js",
      "assets/_commonjsHelpers-4gQjN7DL.js",
      "assets/CharacterList-vQbJMpxE.css",
      "assets/CampaignsList-nYTMDNFM.js",
      "assets/CampaignsList-tS6h-QvO.css",
      "assets/HomebrewList-Mje8Az37.js",
      "assets/TabNav-0k8MUq4h.js",
      "assets/TabNav-jc4KxUmp.css",
      "assets/HomebrewItems-DnXyWwLV.js",
      "assets/PowerCard-beWm0GIY.js",
      "assets/show-more-icon-VvUXKiHG.js",
      "assets/add-icon-fJ4uQHUZ.js",
      "assets/PowerCard-AA6U07oe.css",
      "assets/default-tJ6A0c0K.js",
      "assets/forms-8DDAOOVU.js",
      "assets/RitualCard-888T3wVY.js",
      "assets/d20-icon-vaz1En3o.js",
      "assets/RitualCard-MgWXByHL.css",
      "assets/DropdownSimple-O-H8dkm7.js",
      "assets/DropdownSimple-Fkf-Qfr8.css",
      "assets/CursedItemCard-CUwaY77V.js",
      "assets/CursedItemCard-DTBlMZHo.css",
      "assets/HomebrewItems-I-A5x-iV.css",
      "assets/CreatureCard-s_WgZwXj.js",
      "assets/creatureData-ozdxpDUT.js",
      "assets/CreatureCard-nzzHNYFk.css",
      "assets/PrivateFeat-2NQL7iKE.js",
      "assets/PrivateFeat-Pey8Uhe4.css",
      "assets/CreatureForm-WPZOCJnR.js",
      "assets/blank-profile-picture-wMh28flS.js",
      "assets/PictureModal-TrL67c-c.js",
      "assets/index.esm2017-JfeAG2s4.js",
      "assets/index-qLpZT18D.css",
      "assets/v4-cyCr5FZV.js",
      "assets/PictureModal-AssPmdTr.css",
      "assets/CreatureForm-bbpK97JL.css",
      "assets/HomebrewList-0r_pnsCl.css",
      "assets/HomebrewPowerView-XWnemafQ.js",
      "assets/PlayerCard-u6avled0.js",
      "assets/PlayerCard-mAVqW8Kc.css",
      "assets/HomebrewPowerView-oH1rxoLq.css",
      "assets/HomebrewRitualView-rkWy8aPY.js",
      "assets/HomebrewRitualView-A5dhjcNK.css",
      "assets/HomebrewItemView-78tfRPKx.js",
      "assets/HomebrewItemView-xVelEn5u.css",
      "assets/HomebrewCreatureView-exWCPjp-.js",
      "assets/HomebrewCreatureView-p5Bsn7sU.css",
      "assets/UserProfile-226FsuYl.js",
      "assets/UserProfile-RRG_gr1x.css",
      "assets/CampaignCreate-f6Pi6kpC.js",
      "assets/SwitchButtonBool-SDRvIcMo.js",
      "assets/SwitchButtonBool-VT84EvRG.css",
      "assets/CampaignCreate-ZGKciBb7.css",
      "assets/CampaignEdit-9g9QJvYP.js",
      "assets/CampaignEdit-g3a8pHRX.css",
      "assets/CampaignPage-Ke5mbbfm.js",
      "assets/CombatCard-Gc3bqO4T.js",
      "assets/CombatCard-2RYFPG_X.css",
      "assets/CampaignPage-GT0JFdQ2.css",
      "assets/CampaignJoin-To_CylD3.js",
      "assets/CampaignJoin-Y3mQwTGd.css",
      "assets/CampaignAddAgent-JfOsIWE5.js",
      "assets/CampaignAddAgent-ak7wNOog.css",
      "assets/CreateCombat-0ueabyto.js",
      "assets/creatures-7Mdu5h-F.js",
      "assets/CreateCombat-Igabi-va.css",
      "assets/EditCombat-hCDKSEgz.js",
      "assets/EditCombat-hUNmCuzT.css",
      "assets/CampaignPageDenied-LYxsc9iY.js",
      "assets/CampaignPageDenied-gbq2rXKF.css",
      "assets/MasterScreen-VpIxz5wQ.js",
      "assets/ToastAttack-0kHZxpNW.js",
      "assets/edit-icon-u1vf_q3w.js",
      "assets/classes-pvy_AWKl.js",
      "assets/skins-kfsapBUO.js",
      "assets/ToastAttack-DnNypdEo.css",
      "assets/ActionModal-mT8AY3X3.js",
      "assets/ActionModal-8nZza8_f.css",
      "assets/MasterScreen-qLt3zFTs.css",
      "assets/CharacterCreation-sNd9nRdt.js",
      "assets/ClassCard-mGBOR1g7.js",
      "assets/ClassCard-Ns6rpgJn.css",
      "assets/characterCreationUtils-CNDBLINi.js",
      "assets/CharacterCreation-eMlbReMt.css",
      "assets/CharacterSheet-y15-A8Jr.js",
      "assets/CharacterSheet-S1X3VCex.css",
      "assets/ContactView-GAX7a8fl.js",
      "assets/ContactView-8FCoscjA.css",
      "assets/CharacterStream-2L-69Nwj.js",
      "assets/CharacterStream-9tlGFTRM.css",
      "assets/DespertadosStream-yUjDXEhN.js",
      "assets/DespertadosStream-K9tcQO7o.css",
      "assets/CharacterPv-BTiggV_M.js",
      "assets/CharacterPv-T9RjlDJ-.css",
      "assets/CharacterSan-NqDX2lF2.js",
      "assets/CharacterSan-5FC5fBOx.css",
      "assets/CharacterPe-j4KN_Wv5.js",
      "assets/CharacterPe-Akcgawku.css",
      "assets/about-view-PSIT5jAu.js",
      "assets/about-view-iBvomE2y.css",
      "assets/privacy-policy-2xqJzFFW.js",
      "assets/privacy-policy-K8p3o3Le.css",
      "assets/CreaturesList-1mnSDTWK.js",
      "assets/CreaturesList-lixsyVfi.css",
      "assets/CreatureSheet-Aq_QAh93.js",
      "assets/CreatureSheet-w9Qah64T.css",
      "assets/StreamDashboard-J0nody--.js",
      "assets/StreamDashboard-DjeFcF5w.css",
      "assets/blog-view-yHPJ5Et7.js",
      "assets/BlogList-NvmHi3AL.js",
      "assets/BlogList-vZBULAIh.css",
      "assets/persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel-cka1qd3J.js",
      "assets/the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto-Tbc1Z9dM.js",
      "assets/mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia-1ffJyZDA.js",
      "assets/genshin-impact-uma-jornada-alem-dos-limites-kh1YkWMD.js",
      "assets/final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva-66zshr8C.js",
      "assets/elden-ring-a-jornada-epica-alem-das-expectativas-EYsztOtu.js",
      "assets/divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo-hg2xNG2M.js",
      "assets/cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3-BYxkINqs.js",
      "assets/assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg-BCjKwKd9.js",
      "assets/o-que-e-rpg-de-mesa-NHBY34rA.js",
      "assets/o-rpg-ordem-paranormal-pbWMoYSA.js",
      "assets/o-rpg-tormenta20-xByVeRrl.js",
      "assets/3d_t-a-porta-de-entrada-pro-rpg-brasileiro-nLySNoFp.js",
      "assets/vampiro-a-mascara-perdura-ao-longo-das-decadas-V9zmMnet.js",
      "assets/a-popularizacao-de-dungeons-_-dragons-BerqUg-2.js",
      "assets/criando-personagens-memoraveis-em-rpg-de-mesa-i60zEzcq.js",
      "assets/diferentes-estilos-de-mestres-em-rpg-de-mesa-xyJeF20v.js",
      "assets/historia-do-rpg-uma-viagem-pela-evolucao-do-genero-E0tpuosm.js",
      "assets/gurps-o-rpg-generico-D4-mJ8m9.js",
      "assets/pathfinder-o-maior-rival-de-dungeons-_-dragons-JeiXgGDV.js",
      "assets/um-guia-completo-sobre-pathfinder-92KXR8bY.js",
      "assets/os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa-v9hFRhkQ.js",
      "assets/fate-core-system-e-o-sistema-mais-facil-do-mundo-jHKvhpaY.js",
      "assets/dicas-para-mestres-de-rpg-nzmeoST6.js",
      "assets/criando-um-mundo-de-rpg-personalizado-uz5NZna4.js",
      "assets/a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico-UCtcTbvy.js",
      "assets/os-beneficios-do-rpg-para-a-vida-real-G4bAxKMQ.js",
      "assets/a-influencia-de-d_d-na-cultura-pop-Fo2Pihmw.js",
      "assets/a-evolucao-das-mecanicas-de-rpg--L3nOJJe.js",
      "assets/racas-e-classes-explorando-as-escolhas-de-personagem-dP3SpVgJ.js",
      "assets/o-papel-do-mestre-na-narrativa-de-rpg-mCwjmX_F.js",
      "assets/mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron-BVPhhOyh.js",
      "assets/o-impacto-da-arte-na-estetica-dos-rpgs-m4R4kQwY.js",
      "assets/a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg-nxp8GuKN.js",
      "assets/mitos-e-lendas-folcloricas-no-mundo-dos-rpgs-RMsjPsEV.js",
      "assets/o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa-rtgdhI72.js",
      "assets/rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval-HnWz8xrR.js",
      "assets/como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa-phucFPGC.js",
      "assets/descobrindo-o-mundo-do-rpg-savage-worlds-8Y1J2Zyb.js",
      "assets/explorando-os-subgeneros-do-rpg-qFPLlzoF.js",
      "assets/baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores-h3d5gllZ.js",
      "assets/descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world-zNJIuA0S.js",
      "assets/descobrindo-o-universo-do-rpg-world-of-darkness-SnRkLAN7.js",
      "assets/e-dificil-comecar-a-jogar-rpg-de-mesa-sn0dn9tE.js",
      "assets/a-importancia-da-cooperacao-em-jogos-de-rpg-U2IPHSon.js",
      "assets/criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo-Af_6G0uf.js",
      "assets/o-rpg-como-pilar-da-cultura-geek-e-nerd-hGrJaSUT.js",
      "assets/criando-personagens-complexos-e-multidimensionais-no-rpg-Ci6v5zPn.js",
      "assets/a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa-tOomubON.js",
      "assets/construindo-mundos-de-campanha-de-rpg-atrativos-42MxeFcA.js",
      "assets/o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg-4nPfWYCN.js",
      "assets/as-origens-e-a-evolucao-dos-dados-de-rpg-yNJzGJbm.js",
      "assets/rpg-como-ferramenta-de-aprendizado-cOlZNBio.js",
      "assets/inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg-nqRvFvgJ.js",
      "assets/o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg-9yUYXBlZ.js",
      "assets/rpgs-para-criancas-e-iniciantes-QD_0I7ms.js",
      "assets/etica-e-responsabilidade-em-jogos-de-rpg-FZ3SypCA.js",
      "assets/o-uso-de-ferramentas-digitais-em-mesas-de-rpg-OnDwuFJk.js",
      "assets/criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos-OuT1L0Et.js",
      "assets/a-influencia-das-artes-marciais-em-personagens-de-rpg-W-vO-1LM.js",
      "assets/a-diversidade-de-estilos-de-narrativa-em-rpg-KGOSzwV6.js",
      "assets/o-uso-terapeutico-dos-jogos-de-rpg-cBnOLOJw.js",
      "assets/diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos-GY52adcA.js",
      "assets/evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps-TuMzYVvU.js",
      "assets/influencia_da_mitologia_em_jogos_de_rpg-co40XcY_.js",
      "assets/rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois-kjscO3Ca.js",
      "assets/impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada-t1FaoPjw.js",
      "assets/mundo_das_miniaturas_e_cenarios_personalizados-TJcHPFfO.js",
      "assets/evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis-pN5w3RJT.js",
      "assets/historia_e_a_evolucao_dos_larp_live_action_role_playing-tOwgWMwi.js",
      "assets/jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg-K5Cv3v_Z.js",
      "assets/uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg-GAD_5C_7.js",
      "assets/mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas-YT6DnQbA.js",
      "assets/psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes-AkR4iCJ0.js",
      "assets/papel_das_ferramentas_de_software_em_jogos_de_rpg-8ODLp3YE.js",
      "assets/historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos-6rxczAgk.js",
      "assets/explorando_a_cultura_do_cosplay_em_rpg-U3vTIIdf.js",
      "assets/rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico-iGvrxI_F.js",
      "assets/uso_de_simbologia_e_mitologia_em_rpgs-Tg9dfpRi.js",
      "assets/economia_nos_mundos_de_rpg_moedas_e_comercio-TyM75wEM.js",
      "assets/importancia_da_diversidade_e_representacao_nos_jogos-SWMs5ZhL.js",
      "assets/futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas-CKjFitJF.js",
      "assets/NotFoundView-POraXySv.js",
      "assets/NotFoundView-imReMPlA.css",
      "assets/quill-OFcVbw76.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}

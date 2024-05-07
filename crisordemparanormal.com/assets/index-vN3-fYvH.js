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
function Gu(t, e) {
  const n = Object.create(null),
    r = t.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const Ne = {},
  ui = [],
  rn = () => {},
  Hw = () => !1,
  zw = /^on[^a-z]/,
  Ga = (t) => zw.test(t),
  Qu = (t) => t.startsWith("onUpdate:"),
  Ke = Object.assign,
  Yu = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Ww = Object.prototype.hasOwnProperty,
  _e = (t, e) => Ww.call(t, e),
  J = Array.isArray,
  hi = (t) => Js(t) === "[object Map]",
  Ym = (t) => Js(t) === "[object Set]",
  Kw = (t) => Js(t) === "[object RegExp]",
  le = (t) => typeof t == "function",
  Ve = (t) => typeof t == "string",
  Qa = (t) => typeof t == "symbol",
  Me = (t) => t !== null && typeof t == "object",
  Xm = (t) => (Me(t) || le(t)) && le(t.then) && le(t.catch),
  Jm = Object.prototype.toString,
  Js = (t) => Jm.call(t),
  Gw = (t) => Js(t).slice(8, -1),
  Zm = (t) => Js(t) === "[object Object]",
  Xu = (t) =>
    Ve(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Yo = Gu(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ya = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  Qw = /-(\w)/g,
  an = Ya((t) => t.replace(Qw, (e, n) => (n ? n.toUpperCase() : ""))),
  Yw = /\B([A-Z])/g,
  Qr = Ya((t) => t.replace(Yw, "-$1").toLowerCase()),
  Xa = Ya((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Xo = Ya((t) => (t ? `on${Xa(t)}` : "")),
  Ur = (t, e) => !Object.is(t, e),
  di = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  ha = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  Hc = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  Xw = (t) => {
    const e = Ve(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let Bd;
const zc = () =>
  Bd ||
  (Bd =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function nr(t) {
  if (J(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = Ve(r) ? tb(r) : nr(r);
      if (i) for (const s in i) e[s] = i[s];
    }
    return e;
  } else if (Ve(t) || Me(t)) return t;
}
const Jw = /;(?![^(]*\))/g,
  Zw = /:([^]+)/,
  eb = /\/\*[^]*?\*\//g;
function tb(t) {
  const e = {};
  return (
    t
      .replace(eb, "")
      .split(Jw)
      .forEach((n) => {
        if (n) {
          const r = n.split(Zw);
          r.length > 1 && (e[r[0].trim()] = r[1].trim());
        }
      }),
    e
  );
}
function Pn(t) {
  let e = "";
  if (Ve(t)) e = t;
  else if (J(t))
    for (let n = 0; n < t.length; n++) {
      const r = Pn(t[n]);
      r && (e += r + " ");
    }
  else if (Me(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
function nb(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !Ve(e) && (t.class = Pn(e)), n && (t.style = nr(n)), t;
}
const rb =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ib = Gu(rb);
function eg(t) {
  return !!t || t === "";
}
const Ju = (t) =>
    Ve(t)
      ? t
      : t == null
      ? ""
      : J(t) || (Me(t) && (t.toString === Jm || !le(t.toString)))
      ? JSON.stringify(t, tg, 2)
      : String(t),
  tg = (t, e) =>
    e && e.__v_isRef
      ? tg(t, e.value)
      : hi(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [r, i]) => ((n[`${r} =>`] = i), n),
            {}
          ),
        }
      : Ym(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : Me(e) && !J(e) && !Zm(e)
      ? String(e)
      : e;
let Pt;
class sb {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Pt),
      !e && Pt && (this.index = (Pt.scopes || (Pt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = Pt;
      try {
        return (Pt = this), e();
      } finally {
        Pt = n;
      }
    }
  }
  on() {
    Pt = this;
  }
  off() {
    Pt = this.parent;
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
function ob(t, e = Pt) {
  e && e.active && e.effects.push(t);
}
function ng() {
  return Pt;
}
function ab(t) {
  Pt && Pt.cleanups.push(t);
}
const Zu = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  rg = (t) => (t.w & lr) > 0,
  ig = (t) => (t.n & lr) > 0,
  lb = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= lr;
  },
  cb = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        rg(i) && !ig(i) ? i.delete(t) : (e[n++] = i),
          (i.w &= ~lr),
          (i.n &= ~lr);
      }
      e.length = n;
    }
  },
  da = new WeakMap();
let is = 0,
  lr = 1;
const Wc = 30;
let Kt;
const Nr = Symbol(""),
  Kc = Symbol("");
class eh {
  constructor(e, n = null, r) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      ob(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Kt,
      n = rr;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Kt),
        (Kt = this),
        (rr = !0),
        (lr = 1 << ++is),
        is <= Wc ? lb(this) : jd(this),
        this.fn()
      );
    } finally {
      is <= Wc && cb(this),
        (lr = 1 << --is),
        (Kt = this.parent),
        (rr = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Kt === this
      ? (this.deferStop = !0)
      : this.active &&
        (jd(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function jd(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let rr = !0;
const sg = [];
function Bi() {
  sg.push(rr), (rr = !1);
}
function ji() {
  const t = sg.pop();
  rr = t === void 0 ? !0 : t;
}
function qt(t, e, n) {
  if (rr && Kt) {
    let r = da.get(t);
    r || da.set(t, (r = new Map()));
    let i = r.get(n);
    i || r.set(n, (i = Zu())), og(i);
  }
}
function og(t, e) {
  let n = !1;
  is <= Wc ? ig(t) || ((t.n |= lr), (n = !rg(t))) : (n = !t.has(Kt)),
    n && (t.add(Kt), Kt.deps.push(t));
}
function yn(t, e, n, r, i, s) {
  const o = da.get(t);
  if (!o) return;
  let a = [];
  if (e === "clear") a = [...o.values()];
  else if (n === "length" && J(t)) {
    const l = Number(r);
    o.forEach((c, u) => {
      (u === "length" || (!Qa(u) && u >= l)) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(o.get(n)), e)) {
      case "add":
        J(t)
          ? Xu(n) && a.push(o.get("length"))
          : (a.push(o.get(Nr)), hi(t) && a.push(o.get(Kc)));
        break;
      case "delete":
        J(t) || (a.push(o.get(Nr)), hi(t) && a.push(o.get(Kc)));
        break;
      case "set":
        hi(t) && a.push(o.get(Nr));
        break;
    }
  if (a.length === 1) a[0] && Gc(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    Gc(Zu(l));
  }
}
function Gc(t, e) {
  const n = J(t) ? t : [...t];
  for (const r of n) r.computed && Hd(r);
  for (const r of n) r.computed || Hd(r);
}
function Hd(t, e) {
  (t !== Kt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function ub(t, e) {
  var n;
  return (n = da.get(t)) == null ? void 0 : n.get(e);
}
const hb = Gu("__proto__,__v_isRef,__isVue"),
  ag = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(Qa)
  ),
  zd = db();
function db() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const r = we(this);
        for (let s = 0, o = this.length; s < o; s++) qt(r, "get", s + "");
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
function fb(t) {
  const e = we(this);
  return qt(e, "has", t), e.hasOwnProperty(t);
}
class lg {
  constructor(e = !1, n = !1) {
    (this._isReadonly = e), (this._shallow = n);
  }
  get(e, n, r) {
    const i = this._isReadonly,
      s = this._shallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw" && r === (i ? (s ? Sb : dg) : s ? hg : ug).get(e))
      return e;
    const o = J(e);
    if (!i) {
      if (o && _e(zd, n)) return Reflect.get(zd, n, r);
      if (n === "hasOwnProperty") return fb;
    }
    const a = Reflect.get(e, n, r);
    return (Qa(n) ? ag.has(n) : hb(n)) || (i || qt(e, "get", n), s)
      ? a
      : rt(a)
      ? o && Xu(n)
        ? a
        : a.value
      : Me(a)
      ? i
        ? fg(a)
        : On(a)
      : a;
  }
}
class cg extends lg {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (Ti(s) && rt(s) && !rt(r)) return !1;
    if (
      !this._shallow &&
      (!fa(r) && !Ti(r) && ((s = we(s)), (r = we(r))), !J(e) && rt(s) && !rt(r))
    )
      return (s.value = r), !0;
    const o = J(e) && Xu(n) ? Number(n) < e.length : _e(e, n),
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
    return (!Qa(n) || !ag.has(n)) && qt(e, "has", n), r;
  }
  ownKeys(e) {
    return qt(e, "iterate", J(e) ? "length" : Nr), Reflect.ownKeys(e);
  }
}
class pb extends lg {
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
const mb = new cg(),
  gb = new pb(),
  vb = new cg(!0),
  th = (t) => t,
  Ja = (t) => Reflect.getPrototypeOf(t);
function xo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = we(t),
    s = we(e);
  n || (Ur(e, s) && qt(i, "get", e), qt(i, "get", s));
  const { has: o } = Ja(i),
    a = r ? th : n ? ih : Cs;
  if (o.call(i, e)) return a(t.get(e));
  if (o.call(i, s)) return a(t.get(s));
  t !== i && t.get(e);
}
function Ro(t, e = !1) {
  const n = this.__v_raw,
    r = we(n),
    i = we(t);
  return (
    e || (Ur(t, i) && qt(r, "has", t), qt(r, "has", i)),
    t === i ? n.has(t) : n.has(t) || n.has(i)
  );
}
function Po(t, e = !1) {
  return (
    (t = t.__v_raw), !e && qt(we(t), "iterate", Nr), Reflect.get(t, "size", t)
  );
}
function Wd(t) {
  t = we(t);
  const e = we(this);
  return Ja(e).has.call(e, t) || (e.add(t), yn(e, "add", t, t)), this;
}
function Kd(t, e) {
  e = we(e);
  const n = we(this),
    { has: r, get: i } = Ja(n);
  let s = r.call(n, t);
  s || ((t = we(t)), (s = r.call(n, t)));
  const o = i.call(n, t);
  return (
    n.set(t, e), s ? Ur(e, o) && yn(n, "set", t, e) : yn(n, "add", t, e), this
  );
}
function Gd(t) {
  const e = we(this),
    { has: n, get: r } = Ja(e);
  let i = n.call(e, t);
  i || ((t = we(t)), (i = n.call(e, t))), r && r.call(e, t);
  const s = e.delete(t);
  return i && yn(e, "delete", t, void 0), s;
}
function Qd() {
  const t = we(this),
    e = t.size !== 0,
    n = t.clear();
  return e && yn(t, "clear", void 0, void 0), n;
}
function Oo(t, e) {
  return function (r, i) {
    const s = this,
      o = s.__v_raw,
      a = we(o),
      l = e ? th : t ? ih : Cs;
    return (
      !t && qt(a, "iterate", Nr), o.forEach((c, u) => r.call(i, l(c), l(u), s))
    );
  };
}
function Do(t, e, n) {
  return function (...r) {
    const i = this.__v_raw,
      s = we(i),
      o = hi(s),
      a = t === "entries" || (t === Symbol.iterator && o),
      l = t === "keys" && o,
      c = i[t](...r),
      u = n ? th : e ? ih : Cs;
    return (
      !e && qt(s, "iterate", l ? Kc : Nr),
      {
        next() {
          const { value: h, done: d } = c.next();
          return d
            ? { value: h, done: d }
            : { value: a ? [u(h[0]), u(h[1])] : u(h), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Fn(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function yb() {
  const t = {
      get(s) {
        return xo(this, s);
      },
      get size() {
        return Po(this);
      },
      has: Ro,
      add: Wd,
      set: Kd,
      delete: Gd,
      clear: Qd,
      forEach: Oo(!1, !1),
    },
    e = {
      get(s) {
        return xo(this, s, !1, !0);
      },
      get size() {
        return Po(this);
      },
      has: Ro,
      add: Wd,
      set: Kd,
      delete: Gd,
      clear: Qd,
      forEach: Oo(!1, !0),
    },
    n = {
      get(s) {
        return xo(this, s, !0);
      },
      get size() {
        return Po(this, !0);
      },
      has(s) {
        return Ro.call(this, s, !0);
      },
      add: Fn("add"),
      set: Fn("set"),
      delete: Fn("delete"),
      clear: Fn("clear"),
      forEach: Oo(!0, !1),
    },
    r = {
      get(s) {
        return xo(this, s, !0, !0);
      },
      get size() {
        return Po(this, !0);
      },
      has(s) {
        return Ro.call(this, s, !0);
      },
      add: Fn("add"),
      set: Fn("set"),
      delete: Fn("delete"),
      clear: Fn("clear"),
      forEach: Oo(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (t[s] = Do(s, !1, !1)),
        (n[s] = Do(s, !0, !1)),
        (e[s] = Do(s, !1, !0)),
        (r[s] = Do(s, !0, !0));
    }),
    [t, n, e, r]
  );
}
const [_b, wb, bb, Eb] = yb();
function nh(t, e) {
  const n = e ? (t ? Eb : bb) : t ? wb : _b;
  return (r, i, s) =>
    i === "__v_isReactive"
      ? !t
      : i === "__v_isReadonly"
      ? t
      : i === "__v_raw"
      ? r
      : Reflect.get(_e(n, i) && i in r ? n : r, i, s);
}
const Tb = { get: nh(!1, !1) },
  Ib = { get: nh(!1, !0) },
  Ab = { get: nh(!0, !1) },
  ug = new WeakMap(),
  hg = new WeakMap(),
  dg = new WeakMap(),
  Sb = new WeakMap();
function kb(t) {
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
function Cb(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : kb(Gw(t));
}
function On(t) {
  return Ti(t) ? t : rh(t, !1, mb, Tb, ug);
}
function Qc(t) {
  return rh(t, !1, vb, Ib, hg);
}
function fg(t) {
  return rh(t, !0, gb, Ab, dg);
}
function rh(t, e, n, r, i) {
  if (!Me(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const s = i.get(t);
  if (s) return s;
  const o = Cb(t);
  if (o === 0) return t;
  const a = new Proxy(t, o === 2 ? r : n);
  return i.set(t, a), a;
}
function fi(t) {
  return Ti(t) ? fi(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ti(t) {
  return !!(t && t.__v_isReadonly);
}
function fa(t) {
  return !!(t && t.__v_isShallow);
}
function pg(t) {
  return fi(t) || Ti(t);
}
function we(t) {
  const e = t && t.__v_raw;
  return e ? we(e) : t;
}
function mg(t) {
  return ha(t, "__v_skip", !0), t;
}
const Cs = (t) => (Me(t) ? On(t) : t),
  ih = (t) => (Me(t) ? fg(t) : t);
function gg(t) {
  rr && Kt && ((t = we(t)), og(t.dep || (t.dep = Zu())));
}
function vg(t, e) {
  t = we(t);
  const n = t.dep;
  n && Gc(n);
}
function rt(t) {
  return !!(t && t.__v_isRef === !0);
}
function ue(t) {
  return yg(t, !1);
}
function qb(t) {
  return yg(t, !0);
}
function yg(t, e) {
  return rt(t) ? t : new xb(t, e);
}
class xb {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : we(e)),
      (this._value = n ? e : Cs(e));
  }
  get value() {
    return gg(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || fa(e) || Ti(e);
    (e = n ? e : we(e)),
      Ur(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : Cs(e)), vg(this));
  }
}
function Ye(t) {
  return rt(t) ? t.value : t;
}
const Rb = {
  get: (t, e, n) => Ye(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return rt(i) && !rt(n) ? ((i.value = n), !0) : Reflect.set(t, e, n, r);
  },
};
function _g(t) {
  return fi(t) ? t : new Proxy(t, Rb);
}
function Pb(t) {
  const e = J(t) ? new Array(t.length) : {};
  for (const n in t) e[n] = Db(t, n);
  return e;
}
class Ob {
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
    return ub(we(this._object), this._key);
  }
}
function Db(t, e, n) {
  const r = t[e];
  return rt(r) ? r : new Ob(t, e, n);
}
class Nb {
  constructor(e, n, r, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new eh(e, () => {
        this._dirty || ((this._dirty = !0), vg(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = r);
  }
  get value() {
    const e = we(this);
    return (
      gg(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function Lb(t, e, n = !1) {
  let r, i;
  const s = le(t);
  return (
    s ? ((r = t), (i = rn)) : ((r = t.get), (i = t.set)),
    new Nb(r, i, s || !i, n)
  );
}
function ir(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    Za(s, e, n);
  }
  return i;
}
function Ut(t, e, n, r) {
  if (le(t)) {
    const s = ir(t, e, n, r);
    return (
      s &&
        Xm(s) &&
        s.catch((o) => {
          Za(o, e, n);
        }),
      s
    );
  }
  const i = [];
  for (let s = 0; s < t.length; s++) i.push(Ut(t[s], e, n, r));
  return i;
}
function Za(t, e, n, r = !0) {
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
      ir(l, null, 10, [t, o, a]);
      return;
    }
  }
  Mb(t, n, i, r);
}
function Mb(t, e, n, r = !0) {
  console.error(t);
}
let qs = !1,
  Yc = !1;
const dt = [];
let tn = 0;
const pi = [];
let fn = null,
  Cr = 0;
const wg = Promise.resolve();
let sh = null;
function er(t) {
  const e = sh || wg;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function $b(t) {
  let e = tn + 1,
    n = dt.length;
  for (; e < n; ) {
    const r = (e + n) >>> 1,
      i = dt[r],
      s = xs(i);
    s < t || (s === t && i.pre) ? (e = r + 1) : (n = r);
  }
  return e;
}
function oh(t) {
  (!dt.length || !dt.includes(t, qs && t.allowRecurse ? tn + 1 : tn)) &&
    (t.id == null ? dt.push(t) : dt.splice($b(t.id), 0, t), bg());
}
function bg() {
  !qs && !Yc && ((Yc = !0), (sh = wg.then(Tg)));
}
function Vb(t) {
  const e = dt.indexOf(t);
  e > tn && dt.splice(e, 1);
}
function Fb(t) {
  J(t)
    ? pi.push(...t)
    : (!fn || !fn.includes(t, t.allowRecurse ? Cr + 1 : Cr)) && pi.push(t),
    bg();
}
function Yd(t, e = qs ? tn + 1 : 0) {
  for (; e < dt.length; e++) {
    const n = dt[e];
    n && n.pre && (dt.splice(e, 1), e--, n());
  }
}
function Eg(t) {
  if (pi.length) {
    const e = [...new Set(pi)];
    if (((pi.length = 0), fn)) {
      fn.push(...e);
      return;
    }
    for (fn = e, fn.sort((n, r) => xs(n) - xs(r)), Cr = 0; Cr < fn.length; Cr++)
      fn[Cr]();
    (fn = null), (Cr = 0);
  }
}
const xs = (t) => (t.id == null ? 1 / 0 : t.id),
  Ub = (t, e) => {
    const n = xs(t) - xs(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Tg(t) {
  (Yc = !1), (qs = !0), dt.sort(Ub);
  try {
    for (tn = 0; tn < dt.length; tn++) {
      const e = dt[tn];
      e && e.active !== !1 && ir(e, null, 14);
    }
  } finally {
    (tn = 0),
      (dt.length = 0),
      Eg(),
      (qs = !1),
      (sh = null),
      (dt.length || pi.length) && Tg();
  }
}
function Bb(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Ne;
  let i = n;
  const s = e.startsWith("update:"),
    o = s && e.slice(7);
  if (o && o in r) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: h, trim: d } = r[u] || Ne;
    d && (i = n.map((f) => (Ve(f) ? f.trim() : f))), h && (i = n.map(Hc));
  }
  let a,
    l = r[(a = Xo(e))] || r[(a = Xo(an(e)))];
  !l && s && (l = r[(a = Xo(Qr(e)))]), l && Ut(l, t, 6, i);
  const c = r[a + "Once"];
  if (c) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    (t.emitted[a] = !0), Ut(c, t, 6, i);
  }
}
function Ig(t, e, n = !1) {
  const r = e.emitsCache,
    i = r.get(t);
  if (i !== void 0) return i;
  const s = t.emits;
  let o = {},
    a = !1;
  if (!le(t)) {
    const l = (c) => {
      const u = Ig(c, e, !0);
      u && ((a = !0), Ke(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l);
  }
  return !s && !a
    ? (Me(t) && r.set(t, null), null)
    : (J(s) ? s.forEach((l) => (o[l] = null)) : Ke(o, s),
      Me(t) && r.set(t, o),
      o);
}
function el(t, e) {
  return !t || !Ga(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      _e(t, e[0].toLowerCase() + e.slice(1)) || _e(t, Qr(e)) || _e(t, e));
}
let it = null,
  tl = null;
function pa(t) {
  const e = it;
  return (it = t), (tl = (t && t.type.__scopeId) || null), e;
}
function Hi(t) {
  tl = t;
}
function zi() {
  tl = null;
}
const Ag = (t) => Je;
function Je(t, e = it, n) {
  if (!e || t._n) return t;
  const r = (...i) => {
    r._d && hf(-1);
    const s = pa(e);
    let o;
    try {
      o = t(...i);
    } finally {
      pa(s), r._d && hf(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function ac(t) {
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
    renderCache: h,
    data: d,
    setupState: f,
    ctx: g,
    inheritAttrs: v,
  } = t;
  let _, b;
  const y = pa(t);
  try {
    if (n.shapeFlag & 4) {
      const A = i || r,
        H = A;
      (_ = en(u.call(H, A, h, s, f, d, g))), (b = l);
    } else {
      const A = e;
      (_ = en(
        A.length > 1 ? A(s, { attrs: l, slots: a, emit: c }) : A(s, null)
      )),
        (b = e.props ? l : jb(l));
    }
  } catch (A) {
    (ps.length = 0), Za(A, t, 1), (_ = xe(Bt));
  }
  let x = _;
  if (b && v !== !1) {
    const A = Object.keys(b),
      { shapeFlag: H } = x;
    A.length && H & 7 && (o && A.some(Qu) && (b = Hb(b, o)), (x = Tn(x, b)));
  }
  return (
    n.dirs && ((x = Tn(x)), (x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (x.transition = n.transition),
    (_ = x),
    pa(y),
    _
  );
}
const jb = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || Ga(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  Hb = (t, e) => {
    const n = {};
    for (const r in t) (!Qu(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
function zb(t, e, n) {
  const { props: r, children: i, component: s } = t,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Xd(r, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const d = u[h];
        if (o[d] !== r[d] && !el(c, d)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? Xd(r, o, c)
        : !0
      : !!o;
  return !1;
}
function Xd(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !el(n, s)) return !0;
  }
  return !1;
}
function Wb({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const ah = "components",
  Kb = "directives";
function En(t, e) {
  return lh(ah, t, !0, e) || t;
}
const Sg = Symbol.for("v-ndc");
function Jd(t) {
  return Ve(t) ? lh(ah, t, !1) || t : t || Sg;
}
function dD(t) {
  return lh(Kb, t);
}
function lh(t, e, n = !0, r = !1) {
  const i = it || Xe;
  if (i) {
    const s = i.type;
    if (t === ah) {
      const a = iu(s, !1);
      if (a && (a === e || a === an(e) || a === Xa(an(e)))) return s;
    }
    const o = Zd(i[t] || s[t], e) || Zd(i.appContext[t], e);
    return !o && r ? s : o;
  }
}
function Zd(t, e) {
  return t && (t[e] || t[an(e)] || t[Xa(an(e))]);
}
const kg = (t) => t.__isSuspense;
function Gb(t, e) {
  e && e.pendingBranch
    ? J(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Fb(t);
}
function Qb(t, e) {
  return ch(t, null, { flush: "post" });
}
const No = {};
function ut(t, e, n) {
  return ch(t, e, n);
}
function ch(
  t,
  e,
  { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: o } = Ne
) {
  var a;
  const l = ng() === ((a = Xe) == null ? void 0 : a.scope) ? Xe : null;
  let c,
    u = !1,
    h = !1;
  if (
    (rt(t)
      ? ((c = () => t.value), (u = fa(t)))
      : fi(t)
      ? ((c = () => t), (r = !0))
      : J(t)
      ? ((h = !0),
        (u = t.some((A) => fi(A) || fa(A))),
        (c = () =>
          t.map((A) => {
            if (rt(A)) return A.value;
            if (fi(A)) return xr(A);
            if (le(A)) return ir(A, l, 2);
          })))
      : le(t)
      ? e
        ? (c = () => ir(t, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return d && d(), Ut(t, l, 3, [f]);
          })
      : (c = rn),
    e && r)
  ) {
    const A = c;
    c = () => xr(A());
  }
  let d,
    f = (A) => {
      d = y.onStop = () => {
        ir(A, l, 4), (d = y.onStop = void 0);
      };
    },
    g;
  if (Os)
    if (
      ((f = rn),
      e ? n && Ut(e, l, 3, [c(), h ? [] : void 0, f]) : c(),
      i === "sync")
    ) {
      const A = F0();
      g = A.__watcherHandles || (A.__watcherHandles = []);
    } else return rn;
  let v = h ? new Array(t.length).fill(No) : No;
  const _ = () => {
    if (y.active)
      if (e) {
        const A = y.run();
        (r || u || (h ? A.some((H, Z) => Ur(H, v[Z])) : Ur(A, v))) &&
          (d && d(),
          Ut(e, l, 3, [A, v === No ? void 0 : h && v[0] === No ? [] : v, f]),
          (v = A));
      } else y.run();
  };
  _.allowRecurse = !!e;
  let b;
  i === "sync"
    ? (b = _)
    : i === "post"
    ? (b = () => et(_, l && l.suspense))
    : ((_.pre = !0), l && (_.id = l.uid), (b = () => oh(_)));
  const y = new eh(c, b);
  e
    ? n
      ? _()
      : (v = y.run())
    : i === "post"
    ? et(y.run.bind(y), l && l.suspense)
    : y.run();
  const x = () => {
    y.stop(), l && l.scope && Yu(l.scope.effects, y);
  };
  return g && g.push(x), x;
}
function Yb(t, e, n) {
  const r = this.proxy,
    i = Ve(t) ? (t.includes(".") ? Cg(r, t) : () => r[t]) : t.bind(r, r);
  let s;
  le(e) ? (s = e) : ((s = e.handler), (n = e));
  const o = Xe;
  Si(this);
  const a = ch(i, s.bind(r), n);
  return o ? Si(o) : Lr(), a;
}
function Cg(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
function xr(t, e) {
  if (!Me(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), rt(t))) xr(t.value, e);
  else if (J(t)) for (let n = 0; n < t.length; n++) xr(t[n], e);
  else if (Ym(t) || hi(t))
    t.forEach((n) => {
      xr(n, e);
    });
  else if (Zm(t)) for (const n in t) xr(t[n], e);
  return t;
}
function Jt(t, e) {
  const n = it;
  if (n === null) return t;
  const r = cl(n) || n.proxy,
    i = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [o, a, l, c = Ne] = e[s];
    o &&
      (le(o) && (o = { mounted: o, updated: o }),
      o.deep && xr(a),
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
function br(t, e, n, r) {
  const i = t.dirs,
    s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[r];
    l && (Bi(), Ut(l, n, 8, [t.el, a, t, e]), ji());
  }
}
const Kn = Symbol("_leaveCb"),
  Lo = Symbol("_enterCb");
function Xb() {
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
    il(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const $t = [Function, Array],
  qg = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: $t,
    onEnter: $t,
    onAfterEnter: $t,
    onEnterCancelled: $t,
    onBeforeLeave: $t,
    onLeave: $t,
    onAfterLeave: $t,
    onLeaveCancelled: $t,
    onBeforeAppear: $t,
    onAppear: $t,
    onAfterAppear: $t,
    onAppearCancelled: $t,
  },
  Jb = {
    name: "BaseTransition",
    props: qg,
    setup(t, { slots: e }) {
      const n = ll(),
        r = Xb();
      let i;
      return () => {
        const s = e.default && Rg(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const v of s)
            if (v.type !== Bt) {
              o = v;
              break;
            }
        }
        const a = we(t),
          { mode: l } = a;
        if (r.isLeaving) return lc(o);
        const c = ef(o);
        if (!c) return lc(o);
        const u = Xc(c, a, r, n);
        ma(c, u);
        const h = n.subTree,
          d = h && ef(h);
        let f = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const v = g();
          i === void 0 ? (i = v) : v !== i && ((i = v), (f = !0));
        }
        if (d && d.type !== Bt && (!Yn(c, d) || f)) {
          const v = Xc(d, a, r, n);
          if ((ma(d, v), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (v.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              lc(o)
            );
          l === "in-out" &&
            c.type !== Bt &&
            (v.delayLeave = (_, b, y) => {
              const x = xg(r, d);
              (x[String(d.key)] = d),
                (_[Kn] = () => {
                  b(), (_[Kn] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = y);
            });
        }
        return o;
      };
    },
  },
  Zb = Jb;
function xg(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || ((r = Object.create(null)), n.set(e.type, r)), r;
}
function Xc(t, e, n, r) {
  const {
      appear: i,
      mode: s,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: h,
      onLeave: d,
      onAfterLeave: f,
      onLeaveCancelled: g,
      onBeforeAppear: v,
      onAppear: _,
      onAfterAppear: b,
      onAppearCancelled: y,
    } = e,
    x = String(t.key),
    A = xg(n, t),
    H = (F, ne) => {
      F && Ut(F, r, 9, ne);
    },
    Z = (F, ne) => {
      const ee = ne[1];
      H(F, ne),
        J(F) ? F.every((Te) => Te.length <= 1) && ee() : F.length <= 1 && ee();
    },
    ae = {
      mode: s,
      persisted: o,
      beforeEnter(F) {
        let ne = a;
        if (!n.isMounted)
          if (i) ne = v || a;
          else return;
        F[Kn] && F[Kn](!0);
        const ee = A[x];
        ee && Yn(t, ee) && ee.el[Kn] && ee.el[Kn](), H(ne, [F]);
      },
      enter(F) {
        let ne = l,
          ee = c,
          Te = u;
        if (!n.isMounted)
          if (i) (ne = _ || l), (ee = b || c), (Te = y || u);
          else return;
        let V = !1;
        const pe = (F[Lo] = (be) => {
          V ||
            ((V = !0),
            be ? H(Te, [F]) : H(ee, [F]),
            ae.delayedLeave && ae.delayedLeave(),
            (F[Lo] = void 0));
        });
        ne ? Z(ne, [F, pe]) : pe();
      },
      leave(F, ne) {
        const ee = String(t.key);
        if ((F[Lo] && F[Lo](!0), n.isUnmounting)) return ne();
        H(h, [F]);
        let Te = !1;
        const V = (F[Kn] = (pe) => {
          Te ||
            ((Te = !0),
            ne(),
            pe ? H(g, [F]) : H(f, [F]),
            (F[Kn] = void 0),
            A[ee] === t && delete A[ee]);
        });
        (A[ee] = t), d ? Z(d, [F, V]) : V();
      },
      clone(F) {
        return Xc(F, e, n, r);
      },
    };
  return ae;
}
function lc(t) {
  if (nl(t)) return (t = Tn(t)), (t.children = null), t;
}
function ef(t) {
  return nl(t) ? (t.children ? t.children[0] : void 0) : t;
}
function ma(t, e) {
  t.shapeFlag & 6 && t.component
    ? ma(t.component.subTree, e)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function Rg(t, e = !1, n) {
  let r = [],
    i = 0;
  for (let s = 0; s < t.length; s++) {
    let o = t[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === ht
      ? (o.patchFlag & 128 && i++, (r = r.concat(Rg(o.children, e, a))))
      : (e || o.type !== Bt) && r.push(a != null ? Tn(o, { key: a }) : o);
  }
  if (i > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function at(t, e) {
  return le(t) ? Ke({ name: t.name }, e, { setup: t }) : t;
}
const mi = (t) => !!t.type.__asyncLoader,
  nl = (t) => t.type.__isKeepAlive,
  e0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(t, { slots: e }) {
      const n = ll(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const y = e.default && e.default();
          return y && y.length === 1 ? y[0] : y;
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
            o: { createElement: h },
          },
        } = r,
        d = h("div");
      (r.activate = (y, x, A, H, Z) => {
        const ae = y.component;
        c(y, x, A, 0, a),
          l(ae.vnode, y, x, A, ae, a, H, y.slotScopeIds, Z),
          et(() => {
            (ae.isDeactivated = !1), ae.a && di(ae.a);
            const F = y.props && y.props.onVnodeMounted;
            F && Vt(F, ae.parent, y);
          }, a);
      }),
        (r.deactivate = (y) => {
          const x = y.component;
          c(y, d, null, 1, a),
            et(() => {
              x.da && di(x.da);
              const A = y.props && y.props.onVnodeUnmounted;
              A && Vt(A, x.parent, y), (x.isDeactivated = !0);
            }, a);
        });
      function f(y) {
        cc(y), u(y, n, a, !0);
      }
      function g(y) {
        i.forEach((x, A) => {
          const H = iu(x.type);
          H && (!y || !y(H)) && v(A);
        });
      }
      function v(y) {
        const x = i.get(y);
        !o || !Yn(x, o) ? f(x) : o && cc(o), i.delete(y), s.delete(y);
      }
      ut(
        () => [t.include, t.exclude],
        ([y, x]) => {
          y && g((A) => ss(y, A)), x && g((A) => !ss(x, A));
        },
        { flush: "post", deep: !0 }
      );
      let _ = null;
      const b = () => {
        _ != null && i.set(_, uc(n.subTree));
      };
      return (
        un(b),
        Og(b),
        il(() => {
          i.forEach((y) => {
            const { subTree: x, suspense: A } = n,
              H = uc(x);
            if (y.type === H.type && y.key === H.key) {
              cc(H);
              const Z = H.component.da;
              Z && et(Z, A);
              return;
            }
            f(y);
          });
        }),
        () => {
          if (((_ = null), !e.default)) return null;
          const y = e.default(),
            x = y[0];
          if (y.length > 1) return (o = null), y;
          if (!Ps(x) || (!(x.shapeFlag & 4) && !(x.shapeFlag & 128)))
            return (o = null), x;
          let A = uc(x);
          const H = A.type,
            Z = iu(mi(A) ? A.type.__asyncResolved || {} : H),
            { include: ae, exclude: F, max: ne } = t;
          if ((ae && (!Z || !ss(ae, Z))) || (F && Z && ss(F, Z)))
            return (o = A), x;
          const ee = A.key == null ? H : A.key,
            Te = i.get(ee);
          return (
            A.el && ((A = Tn(A)), x.shapeFlag & 128 && (x.ssContent = A)),
            (_ = ee),
            Te
              ? ((A.el = Te.el),
                (A.component = Te.component),
                A.transition && ma(A, A.transition),
                (A.shapeFlag |= 512),
                s.delete(ee),
                s.add(ee))
              : (s.add(ee),
                ne && s.size > parseInt(ne, 10) && v(s.values().next().value)),
            (A.shapeFlag |= 256),
            (o = A),
            kg(x.type) ? x : A
          );
        }
      );
    },
  },
  fD = e0;
function ss(t, e) {
  return J(t)
    ? t.some((n) => ss(n, e))
    : Ve(t)
    ? t.split(",").includes(e)
    : Kw(t)
    ? t.test(e)
    : !1;
}
function t0(t, e) {
  Pg(t, "a", e);
}
function n0(t, e) {
  Pg(t, "da", e);
}
function Pg(t, e, n = Xe) {
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
  if ((rl(e, r, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      nl(i.parent.vnode) && r0(r, e, n, i), (i = i.parent);
  }
}
function r0(t, e, n, r) {
  const i = rl(e, t, r, !0);
  Zs(() => {
    Yu(r[e], i);
  }, n);
}
function cc(t) {
  (t.shapeFlag &= -257), (t.shapeFlag &= -513);
}
function uc(t) {
  return t.shapeFlag & 128 ? t.ssContent : t;
}
function rl(t, e, n = Xe, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          if (n.isUnmounted) return;
          Bi(), Si(n);
          const a = Ut(e, n, t, o);
          return Lr(), ji(), a;
        });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const Dn =
    (t) =>
    (e, n = Xe) =>
      (!Os || t === "sp") && rl(t, (...r) => e(...r), n),
  i0 = Dn("bm"),
  un = Dn("m"),
  s0 = Dn("bu"),
  Og = Dn("u"),
  il = Dn("bum"),
  Zs = Dn("um"),
  o0 = Dn("sp"),
  a0 = Dn("rtg"),
  l0 = Dn("rtc");
function c0(t, e = Xe) {
  rl("ec", t, e);
}
function Jc(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (J(t) || Ve(t)) {
    i = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      i[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let o = 0; o < t; o++) i[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (Me(t))
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
function u0(t, e) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (J(r)) for (let i = 0; i < r.length; i++) t[r[i].name] = r[i].fn;
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
  if (it.isCE || (it.parent && mi(it.parent) && it.parent.isCE))
    return e !== "default" && (n.name = e), xe("slot", n, r && r());
  let s = t[e];
  s && s._c && (s._d = !1), j();
  const o = s && Dg(s(n)),
    a = Oe(
      ht,
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
function Dg(t) {
  return t.some((e) =>
    Ps(e) ? !(e.type === Bt || (e.type === ht && !Dg(e.children))) : !0
  )
    ? t
    : null;
}
function tf(t, e) {
  const n = {};
  for (const r in t) n[e && /[A-Z]/.test(r) ? `on:${r}` : Xo(r)] = t[r];
  return n;
}
const Zc = (t) => (t ? (Wg(t) ? cl(t) || t.proxy : Zc(t.parent)) : null),
  ds = Ke(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Zc(t.parent),
    $root: (t) => Zc(t.root),
    $emit: (t) => t.emit,
    $options: (t) => uh(t),
    $forceUpdate: (t) => t.f || (t.f = () => oh(t.update)),
    $nextTick: (t) => t.n || (t.n = er.bind(t.proxy)),
    $watch: (t) => Yb.bind(t),
  }),
  hc = (t, e) => t !== Ne && !t.__isScriptSetup && _e(t, e),
  h0 = {
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
          if (hc(r, e)) return (o[e] = 1), r[e];
          if (i !== Ne && _e(i, e)) return (o[e] = 2), i[e];
          if ((c = t.propsOptions[0]) && _e(c, e)) return (o[e] = 3), s[e];
          if (n !== Ne && _e(n, e)) return (o[e] = 4), n[e];
          eu && (o[e] = 0);
        }
      }
      const u = ds[e];
      let h, d;
      if (u) return e === "$attrs" && qt(t, "get", e), u(t);
      if ((h = a.__cssModules) && (h = h[e])) return h;
      if (n !== Ne && _e(n, e)) return (o[e] = 4), n[e];
      if (((d = l.config.globalProperties), _e(d, e))) return d[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: i, ctx: s } = t;
      return hc(i, e)
        ? ((i[e] = n), !0)
        : r !== Ne && _e(r, e)
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
        (t !== Ne && _e(t, o)) ||
        hc(e, o) ||
        ((a = s[0]) && _e(a, o)) ||
        _e(r, o) ||
        _e(ds, o) ||
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
  return J(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let eu = !0;
function d0(t) {
  const e = uh(t),
    n = t.proxy,
    r = t.ctx;
  (eu = !1), e.beforeCreate && rf(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: h,
    mounted: d,
    beforeUpdate: f,
    updated: g,
    activated: v,
    deactivated: _,
    beforeDestroy: b,
    beforeUnmount: y,
    destroyed: x,
    unmounted: A,
    render: H,
    renderTracked: Z,
    renderTriggered: ae,
    errorCaptured: F,
    serverPrefetch: ne,
    expose: ee,
    inheritAttrs: Te,
    components: V,
    directives: pe,
    filters: be,
  } = e;
  if ((c && f0(c, r, null), o))
    for (const Ce in o) {
      const ge = o[Ce];
      le(ge) && (r[Ce] = ge.bind(n));
    }
  if (i) {
    const Ce = i.call(n, n);
    Me(Ce) && (t.data = On(Ce));
  }
  if (((eu = !0), s))
    for (const Ce in s) {
      const ge = s[Ce],
        It = le(ge) ? ge.bind(n, n) : le(ge.get) ? ge.get.bind(n, n) : rn,
        zt = !le(ge) && le(ge.set) ? ge.set.bind(n) : rn,
        xt = Re({ get: It, set: zt });
      Object.defineProperty(r, Ce, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (He) => (xt.value = He),
      });
    }
  if (a) for (const Ce in a) Ng(a[Ce], r, n, Ce);
  if (l) {
    const Ce = le(l) ? l.call(n) : l;
    Reflect.ownKeys(Ce).forEach((ge) => {
      Jo(ge, Ce[ge]);
    });
  }
  u && rf(u, t, "c");
  function Pe(Ce, ge) {
    J(ge) ? ge.forEach((It) => Ce(It.bind(n))) : ge && Ce(ge.bind(n));
  }
  if (
    (Pe(i0, h),
    Pe(un, d),
    Pe(s0, f),
    Pe(Og, g),
    Pe(t0, v),
    Pe(n0, _),
    Pe(c0, F),
    Pe(l0, Z),
    Pe(a0, ae),
    Pe(il, y),
    Pe(Zs, A),
    Pe(o0, ne),
    J(ee))
  )
    if (ee.length) {
      const Ce = t.exposed || (t.exposed = {});
      ee.forEach((ge) => {
        Object.defineProperty(Ce, ge, {
          get: () => n[ge],
          set: (It) => (n[ge] = It),
        });
      });
    } else t.exposed || (t.exposed = {});
  H && t.render === rn && (t.render = H),
    Te != null && (t.inheritAttrs = Te),
    V && (t.components = V),
    pe && (t.directives = pe);
}
function f0(t, e, n = rn) {
  J(t) && (t = tu(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Me(i)
      ? "default" in i
        ? (s = Yt(i.from || r, i.default, !0))
        : (s = Yt(i.from || r))
      : (s = Yt(i)),
      rt(s)
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
  Ut(J(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Ng(t, e, n, r) {
  const i = r.includes(".") ? Cg(n, r) : () => n[r];
  if (Ve(t)) {
    const s = e[t];
    le(s) && ut(i, s);
  } else if (le(t)) ut(i, t.bind(n));
  else if (Me(t))
    if (J(t)) t.forEach((s) => Ng(s, e, n, r));
    else {
      const s = le(t.handler) ? t.handler.bind(n) : e[t.handler];
      le(s) && ut(i, s, t);
    }
}
function uh(t) {
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
      : ((l = {}), i.length && i.forEach((c) => ga(l, c, o, !0)), ga(l, e, o)),
    Me(e) && s.set(e, l),
    l
  );
}
function ga(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && ga(t, s, n, !0), i && i.forEach((o) => ga(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const a = p0[o] || (n && n[o]);
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const p0 = {
  data: sf,
  props: of,
  emits: of,
  methods: os,
  computed: os,
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
  components: os,
  directives: os,
  watch: g0,
  provide: sf,
  inject: m0,
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
function m0(t, e) {
  return os(tu(t), tu(e));
}
function tu(t) {
  if (J(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function bt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function os(t, e) {
  return t ? Ke(Object.create(null), t, e) : e;
}
function of(t, e) {
  return t
    ? J(t) && J(e)
      ? [...new Set([...t, ...e])]
      : Ke(Object.create(null), nf(t), nf(e ?? {}))
    : e;
}
function g0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ke(Object.create(null), t);
  for (const r in e) n[r] = bt(t[r], e[r]);
  return n;
}
function Lg() {
  return {
    app: null,
    config: {
      isNativeTag: Hw,
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
let v0 = 0;
function y0(t, e) {
  return function (r, i = null) {
    le(r) || (r = Ke({}, r)), i != null && !Me(i) && (i = null);
    const s = Lg(),
      o = new WeakSet();
    let a = !1;
    const l = (s.app = {
      _uid: v0++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: U0,
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
      mount(c, u, h) {
        if (!a) {
          const d = xe(r, i);
          return (
            (d.appContext = s),
            u && e ? e(d, c) : t(d, c, h),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            cl(d.component) || d.component.proxy
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
        va = l;
        try {
          return c();
        } finally {
          va = null;
        }
      },
    });
    return l;
  };
}
let va = null;
function Jo(t, e) {
  if (Xe) {
    let n = Xe.provides;
    const r = Xe.parent && Xe.parent.provides;
    r === n && (n = Xe.provides = Object.create(r)), (n[t] = e);
  }
}
function Yt(t, e, n = !1) {
  const r = Xe || it;
  if (r || va) {
    const i = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : va._context.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && le(e) ? e.call(r && r.proxy) : e;
  }
}
function _0(t, e, n, r = !1) {
  const i = {},
    s = {};
  ha(s, ol, 1), (t.propsDefaults = Object.create(null)), Mg(t, e, i, s);
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (t.props = r ? i : Qc(i)) : t.type.props ? (t.props = i) : (t.props = s),
    (t.attrs = s);
}
function w0(t, e, n, r) {
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
      for (let h = 0; h < u.length; h++) {
        let d = u[h];
        if (el(t.emitsOptions, d)) continue;
        const f = e[d];
        if (l)
          if (_e(s, d)) f !== s[d] && ((s[d] = f), (c = !0));
          else {
            const g = an(d);
            i[g] = nu(l, a, g, f, t, !1);
          }
        else f !== s[d] && ((s[d] = f), (c = !0));
      }
    }
  } else {
    Mg(t, e, i, s) && (c = !0);
    let u;
    for (const h in a)
      (!e || (!_e(e, h) && ((u = Qr(h)) === h || !_e(e, u)))) &&
        (l
          ? n &&
            (n[h] !== void 0 || n[u] !== void 0) &&
            (i[h] = nu(l, a, h, void 0, t, !0))
          : delete i[h]);
    if (s !== a)
      for (const h in s) (!e || !_e(e, h)) && (delete s[h], (c = !0));
  }
  c && yn(t, "set", "$attrs");
}
function Mg(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (Yo(l)) continue;
      const c = e[l];
      let u;
      i && _e(i, (u = an(l)))
        ? !s || !s.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : el(t.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
    }
  if (s) {
    const l = we(n),
      c = a || Ne;
    for (let u = 0; u < s.length; u++) {
      const h = s[u];
      n[h] = nu(i, l, h, c[h], t, !_e(c, h));
    }
  }
  return o;
}
function nu(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const a = _e(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && le(l)) {
        const { propsDefaults: c } = i;
        n in c ? (r = c[n]) : (Si(i), (r = c[n] = l.call(null, e)), Lr());
      } else r = l;
    }
    o[0] &&
      (s && !a ? (r = !1) : o[1] && (r === "" || r === Qr(n)) && (r = !0));
  }
  return r;
}
function $g(t, e, n = !1) {
  const r = e.propsCache,
    i = r.get(t);
  if (i) return i;
  const s = t.props,
    o = {},
    a = [];
  let l = !1;
  if (!le(t)) {
    const u = (h) => {
      l = !0;
      const [d, f] = $g(h, e, !0);
      Ke(o, d), f && a.push(...f);
    };
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  if (!s && !l) return Me(t) && r.set(t, ui), ui;
  if (J(s))
    for (let u = 0; u < s.length; u++) {
      const h = an(s[u]);
      af(h) && (o[h] = Ne);
    }
  else if (s)
    for (const u in s) {
      const h = an(u);
      if (af(h)) {
        const d = s[u],
          f = (o[h] = J(d) || le(d) ? { type: d } : Ke({}, d));
        if (f) {
          const g = uf(Boolean, f.type),
            v = uf(String, f.type);
          (f[0] = g > -1),
            (f[1] = v < 0 || g < v),
            (g > -1 || _e(f, "default")) && a.push(h);
        }
      }
    }
  const c = [o, a];
  return Me(t) && r.set(t, c), c;
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
  return J(e) ? e.findIndex((n) => cf(n, t)) : le(e) && cf(e, t) ? 0 : -1;
}
const Vg = (t) => t[0] === "_" || t === "$stable",
  hh = (t) => (J(t) ? t.map(en) : [en(t)]),
  b0 = (t, e, n) => {
    if (e._n) return e;
    const r = Je((...i) => hh(e(...i)), n);
    return (r._c = !1), r;
  },
  Fg = (t, e, n) => {
    const r = t._ctx;
    for (const i in t) {
      if (Vg(i)) continue;
      const s = t[i];
      if (le(s)) e[i] = b0(i, s, r);
      else if (s != null) {
        const o = hh(s);
        e[i] = () => o;
      }
    }
  },
  Ug = (t, e) => {
    const n = hh(e);
    t.slots.default = () => n;
  },
  E0 = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = we(e)), ha(e, "_", n)) : Fg(e, (t.slots = {}));
    } else (t.slots = {}), e && Ug(t, e);
    ha(t.slots, ol, 1);
  },
  T0 = (t, e, n) => {
    const { vnode: r, slots: i } = t;
    let s = !0,
      o = Ne;
    if (r.shapeFlag & 32) {
      const a = e._;
      a
        ? n && a === 1
          ? (s = !1)
          : (Ke(i, e), !n && a === 1 && delete i._)
        : ((s = !e.$stable), Fg(e, i)),
        (o = e);
    } else e && (Ug(t, e), (o = { default: 1 }));
    if (s) for (const a in i) !Vg(a) && o[a] == null && delete i[a];
  };
function ru(t, e, n, r, i = !1) {
  if (J(t)) {
    t.forEach((d, f) => ru(d, e && (J(e) ? e[f] : e), n, r, i));
    return;
  }
  if (mi(r) && !i) return;
  const s = r.shapeFlag & 4 ? cl(r.component) || r.component.proxy : r.el,
    o = i ? null : s,
    { i: a, r: l } = t,
    c = e && e.r,
    u = a.refs === Ne ? (a.refs = {}) : a.refs,
    h = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (Ve(c)
        ? ((u[c] = null), _e(h, c) && (h[c] = null))
        : rt(c) && (c.value = null)),
    le(l))
  )
    ir(l, a, 12, [o, u]);
  else {
    const d = Ve(l),
      f = rt(l);
    if (d || f) {
      const g = () => {
        if (t.f) {
          const v = d ? (_e(h, l) ? h[l] : u[l]) : l.value;
          i
            ? J(v) && Yu(v, s)
            : J(v)
            ? v.includes(s) || v.push(s)
            : d
            ? ((u[l] = [s]), _e(h, l) && (h[l] = u[l]))
            : ((l.value = [s]), t.k && (u[t.k] = l.value));
        } else
          d
            ? ((u[l] = o), _e(h, l) && (h[l] = o))
            : f && ((l.value = o), t.k && (u[t.k] = o));
      };
      o ? ((g.id = -1), et(g, n)) : g();
    }
  }
}
const et = Gb;
function I0(t) {
  return A0(t);
}
function A0(t, e) {
  const n = zc();
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
      parentNode: h,
      nextSibling: d,
      setScopeId: f = rn,
      insertStaticContent: g,
    } = t,
    v = (
      p,
      m,
      w,
      T = null,
      q = null,
      P = null,
      L = !1,
      D = null,
      M = !!m.dynamicChildren
    ) => {
      if (p === m) return;
      p && !Yn(p, m) && ((T = E(p)), He(p, q, P, !0), (p = null)),
        m.patchFlag === -2 && ((M = !1), (m.dynamicChildren = null));
      const { type: R, ref: K, shapeFlag: U } = m;
      switch (R) {
        case sl:
          _(p, m, w, T);
          break;
        case Bt:
          b(p, m, w, T);
          break;
        case fs:
          p == null && y(m, w, T, L);
          break;
        case ht:
          V(p, m, w, T, q, P, L, D, M);
          break;
        default:
          U & 1
            ? H(p, m, w, T, q, P, L, D, M)
            : U & 6
            ? pe(p, m, w, T, q, P, L, D, M)
            : (U & 64 || U & 128) && R.process(p, m, w, T, q, P, L, D, M, W);
      }
      K != null && q && ru(K, p && p.ref, P, m || p, !m);
    },
    _ = (p, m, w, T) => {
      if (p == null) r((m.el = a(m.children)), w, T);
      else {
        const q = (m.el = p.el);
        m.children !== p.children && c(q, m.children);
      }
    },
    b = (p, m, w, T) => {
      p == null ? r((m.el = l(m.children || "")), w, T) : (m.el = p.el);
    },
    y = (p, m, w, T) => {
      [p.el, p.anchor] = g(p.children, m, w, T, p.el, p.anchor);
    },
    x = ({ el: p, anchor: m }, w, T) => {
      let q;
      for (; p && p !== m; ) (q = d(p)), r(p, w, T), (p = q);
      r(m, w, T);
    },
    A = ({ el: p, anchor: m }) => {
      let w;
      for (; p && p !== m; ) (w = d(p)), i(p), (p = w);
      i(m);
    },
    H = (p, m, w, T, q, P, L, D, M) => {
      (L = L || m.type === "svg"),
        p == null ? Z(m, w, T, q, P, L, D, M) : ne(p, m, q, P, L, D, M);
    },
    Z = (p, m, w, T, q, P, L, D) => {
      let M, R;
      const { type: K, props: U, shapeFlag: G, transition: Y, dirs: te } = p;
      if (
        ((M = p.el = o(p.type, P, U && U.is, U)),
        G & 8
          ? u(M, p.children)
          : G & 16 &&
            F(p.children, M, null, T, q, P && K !== "foreignObject", L, D),
        te && br(p, null, T, "created"),
        ae(M, p, p.scopeId, L, T),
        U)
      ) {
        for (const Ie in U)
          Ie !== "value" &&
            !Yo(Ie) &&
            s(M, Ie, null, U[Ie], P, p.children, T, q, $);
        "value" in U && s(M, "value", null, U.value),
          (R = U.onVnodeBeforeMount) && Vt(R, T, p);
      }
      te && br(p, null, T, "beforeMount");
      const me = S0(q, Y);
      me && Y.beforeEnter(M),
        r(M, m, w),
        ((R = U && U.onVnodeMounted) || me || te) &&
          et(() => {
            R && Vt(R, T, p), me && Y.enter(M), te && br(p, null, T, "mounted");
          }, q);
    },
    ae = (p, m, w, T, q) => {
      if ((w && f(p, w), T)) for (let P = 0; P < T.length; P++) f(p, T[P]);
      if (q) {
        let P = q.subTree;
        if (m === P) {
          const L = q.vnode;
          ae(p, L, L.scopeId, L.slotScopeIds, q.parent);
        }
      }
    },
    F = (p, m, w, T, q, P, L, D, M = 0) => {
      for (let R = M; R < p.length; R++) {
        const K = (p[R] = D ? Gn(p[R]) : en(p[R]));
        v(null, K, m, w, T, q, P, L, D);
      }
    },
    ne = (p, m, w, T, q, P, L) => {
      const D = (m.el = p.el);
      let { patchFlag: M, dynamicChildren: R, dirs: K } = m;
      M |= p.patchFlag & 16;
      const U = p.props || Ne,
        G = m.props || Ne;
      let Y;
      w && Er(w, !1),
        (Y = G.onVnodeBeforeUpdate) && Vt(Y, w, m, p),
        K && br(m, p, w, "beforeUpdate"),
        w && Er(w, !0);
      const te = q && m.type !== "foreignObject";
      if (
        (R
          ? ee(p.dynamicChildren, R, D, w, T, te, P)
          : L || ge(p, m, D, null, w, T, te, P, !1),
        M > 0)
      ) {
        if (M & 16) Te(D, m, U, G, w, T, q);
        else if (
          (M & 2 && U.class !== G.class && s(D, "class", null, G.class, q),
          M & 4 && s(D, "style", U.style, G.style, q),
          M & 8)
        ) {
          const me = m.dynamicProps;
          for (let Ie = 0; Ie < me.length; Ie++) {
            const Ae = me[Ie],
              Rt = U[Ae],
              Mn = G[Ae];
            (Mn !== Rt || Ae === "value") &&
              s(D, Ae, Rt, Mn, q, p.children, w, T, $);
          }
        }
        M & 1 && p.children !== m.children && u(D, m.children);
      } else !L && R == null && Te(D, m, U, G, w, T, q);
      ((Y = G.onVnodeUpdated) || K) &&
        et(() => {
          Y && Vt(Y, w, m, p), K && br(m, p, w, "updated");
        }, T);
    },
    ee = (p, m, w, T, q, P, L) => {
      for (let D = 0; D < m.length; D++) {
        const M = p[D],
          R = m[D],
          K =
            M.el && (M.type === ht || !Yn(M, R) || M.shapeFlag & 70)
              ? h(M.el)
              : w;
        v(M, R, K, null, T, q, P, L, !0);
      }
    },
    Te = (p, m, w, T, q, P, L) => {
      if (w !== T) {
        if (w !== Ne)
          for (const D in w)
            !Yo(D) && !(D in T) && s(p, D, w[D], null, L, m.children, q, P, $);
        for (const D in T) {
          if (Yo(D)) continue;
          const M = T[D],
            R = w[D];
          M !== R && D !== "value" && s(p, D, R, M, L, m.children, q, P, $);
        }
        "value" in T && s(p, "value", w.value, T.value);
      }
    },
    V = (p, m, w, T, q, P, L, D, M) => {
      const R = (m.el = p ? p.el : a("")),
        K = (m.anchor = p ? p.anchor : a(""));
      let { patchFlag: U, dynamicChildren: G, slotScopeIds: Y } = m;
      Y && (D = D ? D.concat(Y) : Y),
        p == null
          ? (r(R, w, T), r(K, w, T), F(m.children, w, K, q, P, L, D, M))
          : U > 0 && U & 64 && G && p.dynamicChildren
          ? (ee(p.dynamicChildren, G, w, q, P, L, D),
            (m.key != null || (q && m === q.subTree)) && Bg(p, m, !0))
          : ge(p, m, w, K, q, P, L, D, M);
    },
    pe = (p, m, w, T, q, P, L, D, M) => {
      (m.slotScopeIds = D),
        p == null
          ? m.shapeFlag & 512
            ? q.ctx.activate(m, w, T, L, M)
            : be(m, w, T, q, P, L, M)
          : _t(p, m, M);
    },
    be = (p, m, w, T, q, P, L) => {
      const D = (p.component = O0(p, T, q));
      if ((nl(p) && (D.ctx.renderer = W), D0(D), D.asyncDep)) {
        if ((q && q.registerDep(D, Pe), !p.el)) {
          const M = (D.subTree = xe(Bt));
          b(null, M, m, w);
        }
        return;
      }
      Pe(D, p, m, w, q, P, L);
    },
    _t = (p, m, w) => {
      const T = (m.component = p.component);
      if (zb(p, m, w))
        if (T.asyncDep && !T.asyncResolved) {
          Ce(T, m, w);
          return;
        } else (T.next = m), Vb(T.update), T.update();
      else (m.el = p.el), (T.vnode = m);
    },
    Pe = (p, m, w, T, q, P, L) => {
      const D = () => {
          if (p.isMounted) {
            let { next: K, bu: U, u: G, parent: Y, vnode: te } = p,
              me = K,
              Ie;
            Er(p, !1),
              K ? ((K.el = te.el), Ce(p, K, L)) : (K = te),
              U && di(U),
              (Ie = K.props && K.props.onVnodeBeforeUpdate) && Vt(Ie, Y, K, te),
              Er(p, !0);
            const Ae = ac(p),
              Rt = p.subTree;
            (p.subTree = Ae),
              v(Rt, Ae, h(Rt.el), E(Rt), p, q, P),
              (K.el = Ae.el),
              me === null && Wb(p, Ae.el),
              G && et(G, q),
              (Ie = K.props && K.props.onVnodeUpdated) &&
                et(() => Vt(Ie, Y, K, te), q);
          } else {
            let K;
            const { el: U, props: G } = m,
              { bm: Y, m: te, parent: me } = p,
              Ie = mi(m);
            if (
              (Er(p, !1),
              Y && di(Y),
              !Ie && (K = G && G.onVnodeBeforeMount) && Vt(K, me, m),
              Er(p, !0),
              U && ie)
            ) {
              const Ae = () => {
                (p.subTree = ac(p)), ie(U, p.subTree, p, q, null);
              };
              Ie
                ? m.type.__asyncLoader().then(() => !p.isUnmounted && Ae())
                : Ae();
            } else {
              const Ae = (p.subTree = ac(p));
              v(null, Ae, w, T, p, q, P), (m.el = Ae.el);
            }
            if ((te && et(te, q), !Ie && (K = G && G.onVnodeMounted))) {
              const Ae = m;
              et(() => Vt(K, me, Ae), q);
            }
            (m.shapeFlag & 256 ||
              (me && mi(me.vnode) && me.vnode.shapeFlag & 256)) &&
              p.a &&
              et(p.a, q),
              (p.isMounted = !0),
              (m = w = T = null);
          }
        },
        M = (p.effect = new eh(D, () => oh(R), p.scope)),
        R = (p.update = () => M.run());
      (R.id = p.uid), Er(p, !0), R();
    },
    Ce = (p, m, w) => {
      m.component = p;
      const T = p.vnode.props;
      (p.vnode = m),
        (p.next = null),
        w0(p, m.props, T, w),
        T0(p, m.children, w),
        Bi(),
        Yd(),
        ji();
    },
    ge = (p, m, w, T, q, P, L, D, M = !1) => {
      const R = p && p.children,
        K = p ? p.shapeFlag : 0,
        U = m.children,
        { patchFlag: G, shapeFlag: Y } = m;
      if (G > 0) {
        if (G & 128) {
          zt(R, U, w, T, q, P, L, D, M);
          return;
        } else if (G & 256) {
          It(R, U, w, T, q, P, L, D, M);
          return;
        }
      }
      Y & 8
        ? (K & 16 && $(R, q, P), U !== R && u(w, U))
        : K & 16
        ? Y & 16
          ? zt(R, U, w, T, q, P, L, D, M)
          : $(R, q, P, !0)
        : (K & 8 && u(w, ""), Y & 16 && F(U, w, T, q, P, L, D, M));
    },
    It = (p, m, w, T, q, P, L, D, M) => {
      (p = p || ui), (m = m || ui);
      const R = p.length,
        K = m.length,
        U = Math.min(R, K);
      let G;
      for (G = 0; G < U; G++) {
        const Y = (m[G] = M ? Gn(m[G]) : en(m[G]));
        v(p[G], Y, w, null, q, P, L, D, M);
      }
      R > K ? $(p, q, P, !0, !1, U) : F(m, w, T, q, P, L, D, M, U);
    },
    zt = (p, m, w, T, q, P, L, D, M) => {
      let R = 0;
      const K = m.length;
      let U = p.length - 1,
        G = K - 1;
      for (; R <= U && R <= G; ) {
        const Y = p[R],
          te = (m[R] = M ? Gn(m[R]) : en(m[R]));
        if (Yn(Y, te)) v(Y, te, w, null, q, P, L, D, M);
        else break;
        R++;
      }
      for (; R <= U && R <= G; ) {
        const Y = p[U],
          te = (m[G] = M ? Gn(m[G]) : en(m[G]));
        if (Yn(Y, te)) v(Y, te, w, null, q, P, L, D, M);
        else break;
        U--, G--;
      }
      if (R > U) {
        if (R <= G) {
          const Y = G + 1,
            te = Y < K ? m[Y].el : T;
          for (; R <= G; )
            v(null, (m[R] = M ? Gn(m[R]) : en(m[R])), w, te, q, P, L, D, M),
              R++;
        }
      } else if (R > G) for (; R <= U; ) He(p[R], q, P, !0), R++;
      else {
        const Y = R,
          te = R,
          me = new Map();
        for (R = te; R <= G; R++) {
          const wt = (m[R] = M ? Gn(m[R]) : en(m[R]));
          wt.key != null && me.set(wt.key, R);
        }
        let Ie,
          Ae = 0;
        const Rt = G - te + 1;
        let Mn = !1,
          Co = 0;
        const _r = new Array(Rt);
        for (R = 0; R < Rt; R++) _r[R] = 0;
        for (R = Y; R <= U; R++) {
          const wt = p[R];
          if (Ae >= Rt) {
            He(wt, q, P, !0);
            continue;
          }
          let Mt;
          if (wt.key != null) Mt = me.get(wt.key);
          else
            for (Ie = te; Ie <= G; Ie++)
              if (_r[Ie - te] === 0 && Yn(wt, m[Ie])) {
                Mt = Ie;
                break;
              }
          Mt === void 0
            ? He(wt, q, P, !0)
            : ((_r[Mt - te] = R + 1),
              Mt >= Co ? (Co = Mt) : (Mn = !0),
              v(wt, m[Mt], w, null, q, P, L, D, M),
              Ae++);
        }
        const wr = Mn ? k0(_r) : ui;
        for (Ie = wr.length - 1, R = Rt - 1; R >= 0; R--) {
          const wt = te + R,
            Mt = m[wt],
            qo = wt + 1 < K ? m[wt + 1].el : T;
          _r[R] === 0
            ? v(null, Mt, w, qo, q, P, L, D, M)
            : Mn && (Ie < 0 || R !== wr[Ie] ? xt(Mt, w, qo, 2) : Ie--);
        }
      }
    },
    xt = (p, m, w, T, q = null) => {
      const { el: P, type: L, transition: D, children: M, shapeFlag: R } = p;
      if (R & 6) {
        xt(p.component.subTree, m, w, T);
        return;
      }
      if (R & 128) {
        p.suspense.move(m, w, T);
        return;
      }
      if (R & 64) {
        L.move(p, m, w, W);
        return;
      }
      if (L === ht) {
        r(P, m, w);
        for (let U = 0; U < M.length; U++) xt(M[U], m, w, T);
        r(p.anchor, m, w);
        return;
      }
      if (L === fs) {
        x(p, m, w);
        return;
      }
      if (T !== 2 && R & 1 && D)
        if (T === 0) D.beforeEnter(P), r(P, m, w), et(() => D.enter(P), q);
        else {
          const { leave: U, delayLeave: G, afterLeave: Y } = D,
            te = () => r(P, m, w),
            me = () => {
              U(P, () => {
                te(), Y && Y();
              });
            };
          G ? G(P, te, me) : me();
        }
      else r(P, m, w);
    },
    He = (p, m, w, T = !1, q = !1) => {
      const {
        type: P,
        props: L,
        ref: D,
        children: M,
        dynamicChildren: R,
        shapeFlag: K,
        patchFlag: U,
        dirs: G,
      } = p;
      if ((D != null && ru(D, null, w, p, !0), K & 256)) {
        m.ctx.deactivate(p);
        return;
      }
      const Y = K & 1 && G,
        te = !mi(p);
      let me;
      if ((te && (me = L && L.onVnodeBeforeUnmount) && Vt(me, m, p), K & 6))
        k(p.component, w, T);
      else {
        if (K & 128) {
          p.suspense.unmount(w, T);
          return;
        }
        Y && br(p, null, m, "beforeUnmount"),
          K & 64
            ? p.type.remove(p, m, w, q, W, T)
            : R && (P !== ht || (U > 0 && U & 64))
            ? $(R, m, w, !1, !0)
            : ((P === ht && U & 384) || (!q && K & 16)) && $(M, m, w),
          T && hn(p);
      }
      ((te && (me = L && L.onVnodeUnmounted)) || Y) &&
        et(() => {
          me && Vt(me, m, p), Y && br(p, null, m, "unmounted");
        }, w);
    },
    hn = (p) => {
      const { type: m, el: w, anchor: T, transition: q } = p;
      if (m === ht) {
        yr(w, T);
        return;
      }
      if (m === fs) {
        A(p);
        return;
      }
      const P = () => {
        i(w), q && !q.persisted && q.afterLeave && q.afterLeave();
      };
      if (p.shapeFlag & 1 && q && !q.persisted) {
        const { leave: L, delayLeave: D } = q,
          M = () => L(w, P);
        D ? D(p.el, P, M) : M();
      } else P();
    },
    yr = (p, m) => {
      let w;
      for (; p !== m; ) (w = d(p)), i(p), (p = w);
      i(m);
    },
    k = (p, m, w) => {
      const { bum: T, scope: q, update: P, subTree: L, um: D } = p;
      T && di(T),
        q.stop(),
        P && ((P.active = !1), He(L, p, m, w)),
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
    $ = (p, m, w, T = !1, q = !1, P = 0) => {
      for (let L = P; L < p.length; L++) He(p[L], m, w, T, q);
    },
    E = (p) =>
      p.shapeFlag & 6
        ? E(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : d(p.anchor || p.el),
    N = (p, m, w) => {
      p == null
        ? m._vnode && He(m._vnode, null, null, !0)
        : v(m._vnode || null, p, m, null, null, null, w),
        Yd(),
        Eg(),
        (m._vnode = p);
    },
    W = {
      p: v,
      um: He,
      m: xt,
      r: hn,
      mt: be,
      mc: F,
      pc: ge,
      pbc: ee,
      n: E,
      o: t,
    };
  let Ee, ie;
  return (
    e && ([Ee, ie] = e(W)), { render: N, hydrate: Ee, createApp: y0(N, Ee) }
  );
}
function Er({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function S0(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function Bg(t, e, n = !1) {
  const r = t.children,
    i = e.children;
  if (J(r) && J(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[s] = Gn(i[s])), (a.el = o.el)),
        n || Bg(o, a)),
        a.type === sl && (a.el = o.el);
    }
}
function k0(t) {
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
const C0 = (t) => t.__isTeleport,
  ht = Symbol.for("v-fgt"),
  sl = Symbol.for("v-txt"),
  Bt = Symbol.for("v-cmt"),
  fs = Symbol.for("v-stc"),
  ps = [];
let Qt = null;
function j(t = !1) {
  ps.push((Qt = t ? null : []));
}
function q0() {
  ps.pop(), (Qt = ps[ps.length - 1] || null);
}
let Rs = 1;
function hf(t) {
  Rs += t;
}
function jg(t) {
  return (
    (t.dynamicChildren = Rs > 0 ? Qt || ui : null),
    q0(),
    Rs > 0 && Qt && Qt.push(t),
    t
  );
}
function de(t, e, n, r, i, s) {
  return jg(I(t, e, n, r, i, s, !0));
}
function Oe(t, e, n, r, i) {
  return jg(xe(t, e, n, r, i, !0));
}
function Ps(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Yn(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ol = "__vInternal",
  Hg = ({ key: t }) => t ?? null,
  Zo = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? Ve(t) || rt(t) || le(t)
        ? { i: it, r: t, k: e, f: !!n }
        : t
      : null
  );
function I(
  t,
  e = null,
  n = null,
  r = 0,
  i = null,
  s = t === ht ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Hg(e),
    ref: e && Zo(e),
    scopeId: tl,
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
    ctx: it,
  };
  return (
    a
      ? (dh(l, n), s & 128 && t.normalize(l))
      : n && (l.shapeFlag |= Ve(n) ? 8 : 16),
    Rs > 0 &&
      !o &&
      Qt &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      Qt.push(l),
    l
  );
}
const xe = x0;
function x0(t, e = null, n = null, r = 0, i = null, s = !1) {
  if (((!t || t === Sg) && (t = Bt), Ps(t))) {
    const a = Tn(t, e, !0);
    return (
      n && dh(a, n),
      Rs > 0 &&
        !s &&
        Qt &&
        (a.shapeFlag & 6 ? (Qt[Qt.indexOf(t)] = a) : Qt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if (($0(t) && (t = t.__vccOpts), e)) {
    e = zg(e);
    let { class: a, style: l } = e;
    a && !Ve(a) && (e.class = Pn(a)),
      Me(l) && (pg(l) && !J(l) && (l = Ke({}, l)), (e.style = nr(l)));
  }
  const o = Ve(t) ? 1 : kg(t) ? 128 : C0(t) ? 64 : Me(t) ? 4 : le(t) ? 2 : 0;
  return I(t, e, n, r, i, o, s, !0);
}
function zg(t) {
  return t ? (pg(t) || ol in t ? Ke({}, t) : t) : null;
}
function Tn(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = t,
    a = e ? Ai(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && Hg(a),
    ref:
      e && e.ref ? (n && i ? (J(i) ? i.concat(Zo(e)) : [i, Zo(e)]) : Zo(e)) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== ht ? (s === -1 ? 16 : s | 16) : s,
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
function Ft(t = " ", e = 0) {
  return xe(sl, null, t, e);
}
function al(t, e) {
  const n = xe(fs, null, t);
  return (n.staticCount = e), n;
}
function Fe(t = "", e = !1) {
  return e ? (j(), Oe(Bt, null, t)) : xe(Bt, null, t);
}
function en(t) {
  return t == null || typeof t == "boolean"
    ? xe(Bt)
    : J(t)
    ? xe(ht, null, t.slice())
    : typeof t == "object"
    ? Gn(t)
    : xe(sl, null, String(t));
}
function Gn(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Tn(t);
}
function dh(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null) e = null;
  else if (J(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), dh(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(ol in e)
        ? (e._ctx = it)
        : i === 3 &&
          it &&
          (it.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    le(e)
      ? ((e = { default: e, _ctx: it }), (n = 32))
      : ((e = String(e)), r & 64 ? ((n = 16), (e = [Ft(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Ai(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = Pn([e.class, r.class]));
      else if (i === "style") e.style = nr([e.style, r.style]);
      else if (Ga(i)) {
        const s = e[i],
          o = r[i];
        o &&
          s !== o &&
          !(J(s) && s.includes(o)) &&
          (e[i] = s ? [].concat(s, o) : o);
      } else i !== "" && (e[i] = r[i]);
  }
  return e;
}
function Vt(t, e, n, r = null) {
  Ut(t, e, 7, [n, r]);
}
const R0 = Lg();
let P0 = 0;
function O0(t, e, n) {
  const r = t.type,
    i = (e ? e.appContext : t.appContext) || R0,
    s = {
      uid: P0++,
      vnode: t,
      type: r,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new sb(!0),
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
      propsOptions: $g(r, i),
      emitsOptions: Ig(r, i),
      emit: null,
      emitted: null,
      propsDefaults: Ne,
      inheritAttrs: r.inheritAttrs,
      ctx: Ne,
      data: Ne,
      props: Ne,
      attrs: Ne,
      slots: Ne,
      refs: Ne,
      setupState: Ne,
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
    (s.emit = Bb.bind(null, s)),
    t.ce && t.ce(s),
    s
  );
}
let Xe = null;
const ll = () => Xe || it;
let fh,
  ni,
  df = "__VUE_INSTANCE_SETTERS__";
(ni = zc()[df]) || (ni = zc()[df] = []),
  ni.push((t) => (Xe = t)),
  (fh = (t) => {
    ni.length > 1 ? ni.forEach((e) => e(t)) : ni[0](t);
  });
const Si = (t) => {
    fh(t), t.scope.on();
  },
  Lr = () => {
    Xe && Xe.scope.off(), fh(null);
  };
function Wg(t) {
  return t.vnode.shapeFlag & 4;
}
let Os = !1;
function D0(t, e = !1) {
  Os = e;
  const { props: n, children: r } = t.vnode,
    i = Wg(t);
  _0(t, n, i, e), E0(t, r);
  const s = i ? N0(t, e) : void 0;
  return (Os = !1), s;
}
function N0(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = mg(new Proxy(t.ctx, h0)));
  const { setup: r } = n;
  if (r) {
    const i = (t.setupContext = r.length > 1 ? M0(t) : null);
    Si(t), Bi();
    const s = ir(r, t, 0, [t.props, i]);
    if ((ji(), Lr(), Xm(s))) {
      if ((s.then(Lr, Lr), e))
        return s
          .then((o) => {
            ff(t, o, e);
          })
          .catch((o) => {
            Za(o, t, 0);
          });
      t.asyncDep = s;
    } else ff(t, s, e);
  } else Kg(t, e);
}
function ff(t, e, n) {
  le(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Me(e) && (t.setupState = _g(e)),
    Kg(t, n);
}
let pf;
function Kg(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && pf && !r.render) {
      const i = r.template || uh(t).template;
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
      d0(t);
    } finally {
      ji(), Lr();
    }
  }
}
function L0(t) {
  return (
    t.attrsProxy ||
    (t.attrsProxy = new Proxy(t.attrs, {
      get(e, n) {
        return qt(t, "get", "$attrs"), e[n];
      },
    }))
  );
}
function M0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return L0(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function cl(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(_g(mg(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in ds) return ds[n](t);
        },
        has(e, n) {
          return n in e || n in ds;
        },
      }))
    );
}
function iu(t, e = !0) {
  return le(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function $0(t) {
  return le(t) && "__vccOpts" in t;
}
const Re = (t, e) => Lb(t, e, Os);
function ul(t, e, n) {
  const r = arguments.length;
  return r === 2
    ? Me(e) && !J(e)
      ? Ps(e)
        ? xe(t, null, [e])
        : xe(t, e)
      : xe(t, null, e)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Ps(n) && (n = [n]),
      xe(t, e, n));
}
const V0 = Symbol.for("v-scx"),
  F0 = () => Yt(V0),
  U0 = "3.3.9",
  B0 = "http://www.w3.org/2000/svg",
  qr = typeof document < "u" ? document : null,
  mf = qr && qr.createElement("template"),
  j0 = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const i = e
        ? qr.createElementNS(B0, t)
        : qr.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          r &&
          r.multiple != null &&
          i.setAttribute("multiple", r.multiple),
        i
      );
    },
    createText: (t) => qr.createTextNode(t),
    createComment: (t) => qr.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => qr.querySelector(t),
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
  Un = "transition",
  es = "animation",
  Ds = Symbol("_vtc"),
  ya = (t, { slots: e }) => ul(Zb, H0(t), e);
ya.displayName = "Transition";
const Gg = {
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
ya.props = Ke({}, qg, Gg);
const Tr = (t, e = []) => {
    J(t) ? t.forEach((n) => n(...e)) : t && t(...e);
  },
  gf = (t) => (t ? (J(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function H0(t) {
  const e = {};
  for (const V in t) V in Gg || (e[V] = t[V]);
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
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: f = `${n}-leave-to`,
    } = t,
    g = z0(i),
    v = g && g[0],
    _ = g && g[1],
    {
      onBeforeEnter: b,
      onEnter: y,
      onEnterCancelled: x,
      onLeave: A,
      onLeaveCancelled: H,
      onBeforeAppear: Z = b,
      onAppear: ae = y,
      onAppearCancelled: F = x,
    } = e,
    ne = (V, pe, be) => {
      Ir(V, pe ? u : a), Ir(V, pe ? c : o), be && be();
    },
    ee = (V, pe) => {
      (V._isLeaving = !1), Ir(V, h), Ir(V, f), Ir(V, d), pe && pe();
    },
    Te = (V) => (pe, be) => {
      const _t = V ? ae : y,
        Pe = () => ne(pe, V, be);
      Tr(_t, [pe, Pe]),
        vf(() => {
          Ir(pe, V ? l : s), Bn(pe, V ? u : a), gf(_t) || yf(pe, r, v, Pe);
        });
    };
  return Ke(e, {
    onBeforeEnter(V) {
      Tr(b, [V]), Bn(V, s), Bn(V, o);
    },
    onBeforeAppear(V) {
      Tr(Z, [V]), Bn(V, l), Bn(V, c);
    },
    onEnter: Te(!1),
    onAppear: Te(!0),
    onLeave(V, pe) {
      V._isLeaving = !0;
      const be = () => ee(V, pe);
      Bn(V, h),
        G0(),
        Bn(V, d),
        vf(() => {
          V._isLeaving && (Ir(V, h), Bn(V, f), gf(A) || yf(V, r, _, be));
        }),
        Tr(A, [V, be]);
    },
    onEnterCancelled(V) {
      ne(V, !1), Tr(x, [V]);
    },
    onAppearCancelled(V) {
      ne(V, !0), Tr(F, [V]);
    },
    onLeaveCancelled(V) {
      ee(V), Tr(H, [V]);
    },
  });
}
function z0(t) {
  if (t == null) return null;
  if (Me(t)) return [dc(t.enter), dc(t.leave)];
  {
    const e = dc(t);
    return [e, e];
  }
}
function dc(t) {
  return Xw(t);
}
function Bn(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)),
    (t[Ds] || (t[Ds] = new Set())).add(e);
}
function Ir(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const n = t[Ds];
  n && (n.delete(e), n.size || (t[Ds] = void 0));
}
function vf(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let W0 = 0;
function yf(t, e, n, r) {
  const i = (t._endId = ++W0),
    s = () => {
      i === t._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: o, timeout: a, propCount: l } = K0(t, e);
  if (!o) return r();
  const c = o + "end";
  let u = 0;
  const h = () => {
      t.removeEventListener(c, d), s();
    },
    d = (f) => {
      f.target === t && ++u >= l && h();
    };
  setTimeout(() => {
    u < l && h();
  }, a + 1),
    t.addEventListener(c, d);
}
function K0(t, e) {
  const n = window.getComputedStyle(t),
    r = (g) => (n[g] || "").split(", "),
    i = r(`${Un}Delay`),
    s = r(`${Un}Duration`),
    o = _f(i, s),
    a = r(`${es}Delay`),
    l = r(`${es}Duration`),
    c = _f(a, l);
  let u = null,
    h = 0,
    d = 0;
  e === Un
    ? o > 0 && ((u = Un), (h = o), (d = s.length))
    : e === es
    ? c > 0 && ((u = es), (h = c), (d = l.length))
    : ((h = Math.max(o, c)),
      (u = h > 0 ? (o > c ? Un : es) : null),
      (d = u ? (u === Un ? s.length : l.length) : 0));
  const f =
    u === Un && /\b(transform|all)(,|$)/.test(r(`${Un}Property`).toString());
  return { type: u, timeout: h, propCount: d, hasTransform: f };
}
function _f(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, r) => wf(n) + wf(t[r])));
}
function wf(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function G0() {
  return document.body.offsetHeight;
}
function Q0(t, e, n) {
  const r = t[Ds];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
const ph = Symbol("_vod"),
  Zt = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t[ph] = t.style.display === "none" ? "" : t.style.display),
        n && e ? n.beforeEnter(t) : ts(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: r }) {
      !e != !n &&
        (r
          ? e
            ? (r.beforeEnter(t), ts(t, !0), r.enter(t))
            : r.leave(t, () => {
                ts(t, !1);
              })
          : ts(t, e));
    },
    beforeUnmount(t, { value: e }) {
      ts(t, e);
    },
  };
function ts(t, e) {
  t.style.display = e ? t[ph] : "none";
}
function Y0(t, e, n) {
  const r = t.style,
    i = Ve(n);
  if (n && !i) {
    if (e && !Ve(e)) for (const s in e) n[s] == null && su(r, s, "");
    for (const s in n) su(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"),
      ph in t && (r.display = s);
  }
}
const bf = /\s*!important$/;
function su(t, e, n) {
  if (J(n)) n.forEach((r) => su(t, e, r));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const r = X0(t, e);
    bf.test(n)
      ? t.setProperty(Qr(r), n.replace(bf, ""), "important")
      : (t[r] = n);
  }
}
const Ef = ["Webkit", "Moz", "ms"],
  fc = {};
function X0(t, e) {
  const n = fc[e];
  if (n) return n;
  let r = an(e);
  if (r !== "filter" && r in t) return (fc[e] = r);
  r = Xa(r);
  for (let i = 0; i < Ef.length; i++) {
    const s = Ef[i] + r;
    if (s in t) return (fc[e] = s);
  }
  return e;
}
const Tf = "http://www.w3.org/1999/xlink";
function J0(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(Tf, e.slice(6, e.length))
      : t.setAttributeNS(Tf, e, n);
  else {
    const s = ib(e);
    n == null || (s && !eg(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, s ? "" : n);
  }
}
function Z0(t, e, n, r, i, s, o) {
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
      ? (n = eg(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    t[e] = n;
  } catch {}
  l && t.removeAttribute(e);
}
function si(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function eE(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const If = Symbol("_vei");
function tE(t, e, n, r, i = null) {
  const s = t[If] || (t[If] = {}),
    o = s[e];
  if (r && o) o.value = r;
  else {
    const [a, l] = nE(e);
    if (r) {
      const c = (s[e] = sE(r, i));
      si(t, a, c, l);
    } else o && (eE(t, a, o, l), (s[e] = void 0));
  }
}
const Af = /(?:Once|Passive|Capture)$/;
function nE(t) {
  let e;
  if (Af.test(t)) {
    e = {};
    let r;
    for (; (r = t.match(Af)); )
      (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : Qr(t.slice(2)), e];
}
let pc = 0;
const rE = Promise.resolve(),
  iE = () => pc || (rE.then(() => (pc = 0)), (pc = Date.now()));
function sE(t, e) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Ut(oE(r, n.value), e, 5, [r]);
  };
  return (n.value = t), (n.attached = iE()), n;
}
function oE(t, e) {
  if (J(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((r) => (i) => !i._stopped && r && r(i))
    );
  } else return e;
}
const Sf = /^on[a-z]/,
  aE = (t, e, n, r, i = !1, s, o, a, l) => {
    e === "class"
      ? Q0(t, r, i)
      : e === "style"
      ? Y0(t, n, r)
      : Ga(e)
      ? Qu(e) || tE(t, e, n, r, o)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : lE(t, e, r, i)
        )
      ? Z0(t, e, r, s, o, a, l)
      : (e === "true-value"
          ? (t._trueValue = r)
          : e === "false-value" && (t._falseValue = r),
        J0(t, e, r, i));
  };
function lE(t, e, n, r) {
  return r
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && Sf.test(e) && le(n))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (Sf.test(e) && Ve(n))
    ? !1
    : e in t;
}
function cE(t) {
  const e = ll();
  if (!e) return;
  const n = (e.ut = (i = t(e.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
      ).forEach((s) => au(s, i));
    }),
    r = () => {
      const i = t(e.proxy);
      ou(e.subTree, i), n(i);
    };
  Qb(r),
    un(() => {
      const i = new MutationObserver(r);
      i.observe(e.subTree.el.parentNode, { childList: !0 }),
        Zs(() => i.disconnect());
    });
}
function ou(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    (t = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          ou(n.activeBranch, e);
        });
  }
  for (; t.component; ) t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el) au(t.el, e);
  else if (t.type === ht) t.children.forEach((n) => ou(n, e));
  else if (t.type === fs) {
    let { el: n, anchor: r } = t;
    for (; n && (au(n, e), n !== r); ) n = n.nextSibling;
  }
}
function au(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    for (const r in e) n.setProperty(`--${r}`, e[r]);
  }
}
const kf = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return J(e) ? (n) => di(e, n) : e;
};
function uE(t) {
  t.target.composing = !0;
}
function Cf(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const mc = Symbol("_assign"),
  pD = {
    created(t, { modifiers: { lazy: e, trim: n, number: r } }, i) {
      t[mc] = kf(i);
      const s = r || (i.props && i.props.type === "number");
      si(t, e ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let a = t.value;
        n && (a = a.trim()), s && (a = Hc(a)), t[mc](a);
      }),
        n &&
          si(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (si(t, "compositionstart", uE),
          si(t, "compositionend", Cf),
          si(t, "change", Cf));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: n, trim: r, number: i } },
      s
    ) {
      if (((t[mc] = kf(s)), t.composing)) return;
      const o = i || t.type === "number" ? Hc(t.value) : t.value,
        a = e ?? "";
      o !== a &&
        ((document.activeElement === t &&
          t.type !== "range" &&
          (n || (r && t.value.trim() === a))) ||
          (t.value = a));
    },
  },
  hE = ["ctrl", "shift", "alt", "meta"],
  dE = {
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
    exact: (t, e) => hE.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  _a =
    (t, e) =>
    (n, ...r) => {
      for (let i = 0; i < e.length; i++) {
        const s = dE[e[i]];
        if (s && s(n, e)) return;
      }
      return t(n, ...r);
    },
  fE = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Qg = (t, e) => (n) => {
    if (!("key" in n)) return;
    const r = Qr(n.key);
    if (e.some((i) => i === r || fE[i] === r)) return t(n);
  },
  pE = Ke({ patchProp: aE }, j0);
let qf;
function mE() {
  return qf || (qf = I0(pE));
}
const Yg = (...t) => {
  const e = mE().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (r) => {
      const i = gE(r);
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
function gE(t) {
  return Ve(t) ? document.querySelector(t) : t;
}
var xf;
const Xg = typeof window < "u",
  vE = (t) => typeof t == "string",
  gc = () => {};
Xg &&
  (xf = window == null ? void 0 : window.navigator) != null &&
  xf.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function yE(t) {
  return typeof t == "function" ? t() : Ye(t);
}
function _E(t) {
  return t;
}
function wE(t) {
  return ng() ? (ab(t), !0) : !1;
}
function bE(t, e = !0) {
  ll() ? un(t) : e ? t() : er(t);
}
function as(t) {
  var e;
  const n = yE(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const mh = Xg ? window : void 0;
function ai(...t) {
  let e, n, r, i;
  if ((vE(t[0]) ? (([n, r, i] = t), (e = mh)) : ([e, n, r, i] = t), !e))
    return gc;
  let s = gc;
  const o = ut(
      () => as(e),
      (l) => {
        s(),
          l &&
            (l.addEventListener(n, r, i),
            (s = () => {
              l.removeEventListener(n, r, i), (s = gc);
            }));
      },
      { immediate: !0, flush: "post" }
    ),
    a = () => {
      o(), s();
    };
  return wE(a), a;
}
function EE(t, e, n = {}) {
  const {
    window: r = mh,
    ignore: i,
    capture: s = !0,
    detectIframe: o = !1,
  } = n;
  if (!r) return;
  const a = ue(!0);
  let l;
  const c = (d) => {
      r.clearTimeout(l);
      const f = as(t),
        g = d.composedPath();
      !f ||
        f === d.target ||
        g.includes(f) ||
        !a.value ||
        (i &&
          i.length > 0 &&
          i.some((v) => {
            const _ = as(v);
            return _ && (d.target === _ || g.includes(_));
          })) ||
        e(d);
    },
    u = [
      ai(r, "click", c, { passive: !0, capture: s }),
      ai(
        r,
        "pointerdown",
        (d) => {
          const f = as(t);
          a.value = !!f && !d.composedPath().includes(f);
        },
        { passive: !0 }
      ),
      ai(
        r,
        "pointerup",
        (d) => {
          if (d.button === 0) {
            const f = d.composedPath();
            (d.composedPath = () => f), (l = r.setTimeout(() => c(d), 50));
          }
        },
        { passive: !0 }
      ),
      o &&
        ai(r, "blur", (d) => {
          var f;
          const g = as(t);
          ((f = document.activeElement) == null ? void 0 : f.tagName) ===
            "IFRAME" &&
            !(g != null && g.contains(document.activeElement)) &&
            e(d);
        }),
    ].filter(Boolean);
  return () => u.forEach((d) => d());
}
const Rf =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Pf = "__vueuse_ssr_handlers__";
Rf[Pf] = Rf[Pf] || {};
var Of;
(function (t) {
  (t.UP = "UP"),
    (t.RIGHT = "RIGHT"),
    (t.DOWN = "DOWN"),
    (t.LEFT = "LEFT"),
    (t.NONE = "NONE");
})(Of || (Of = {}));
var TE = Object.defineProperty,
  Df = Object.getOwnPropertySymbols,
  IE = Object.prototype.hasOwnProperty,
  AE = Object.prototype.propertyIsEnumerable,
  Nf = (t, e, n) =>
    e in t
      ? TE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  SE = (t, e) => {
    for (var n in e || (e = {})) IE.call(e, n) && Nf(t, n, e[n]);
    if (Df) for (var n of Df(e)) AE.call(e, n) && Nf(t, n, e[n]);
    return t;
  };
const kE = {
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
SE({ linear: _E }, kE);
function Jg(t = {}) {
  const {
      window: e = mh,
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
    bE(l),
    ai("resize", l, { passive: !0 }),
    i && ai("orientationchange", l, { passive: !0 }),
    { width: o, height: a }
  );
}
/*!
 * vue-router v4.1.5
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const oi = typeof window < "u";
function CE(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module";
}
const qe = Object.assign;
function vc(t, e) {
  const n = {};
  for (const r in e) {
    const i = e[r];
    n[r] = Xt(i) ? i.map(t) : t(i);
  }
  return n;
}
const ms = () => {},
  Xt = Array.isArray,
  qE = /\/$/,
  xE = (t) => t.replace(qE, "");
function yc(t, e, n = "/") {
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
    (r = DE(r ?? e, n)),
    { fullPath: r + (s && "?") + s + o, path: r, query: i, hash: o }
  );
}
function RE(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function Lf(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function PE(t, e, n) {
  const r = e.matched.length - 1,
    i = n.matched.length - 1;
  return (
    r > -1 &&
    r === i &&
    ki(e.matched[r], n.matched[i]) &&
    Zg(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  );
}
function ki(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function Zg(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!OE(t[n], e[n])) return !1;
  return !0;
}
function OE(t, e) {
  return Xt(t) ? Mf(t, e) : Xt(e) ? Mf(e, t) : t === e;
}
function Mf(t, e) {
  return Xt(e)
    ? t.length === e.length && t.every((n, r) => n === e[r])
    : t.length === 1 && t[0] === e;
}
function DE(t, e) {
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
var Ns;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(Ns || (Ns = {}));
var gs;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(gs || (gs = {}));
function NE(t) {
  if (!t)
    if (oi) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), xE(t);
}
const LE = /^[^#]+#/;
function ME(t, e) {
  return t.replace(LE, "#") + e;
}
function $E(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0),
  };
}
const hl = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function VE(t) {
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
    e = $E(i, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function $f(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const lu = new Map();
function FE(t, e) {
  lu.set(t, e);
}
function UE(t) {
  const e = lu.get(t);
  return lu.delete(t), e;
}
let BE = () => location.protocol + "//" + location.host;
function ev(t, e) {
  const { pathname: n, search: r, hash: i } = e,
    s = t.indexOf("#");
  if (s > -1) {
    let a = i.includes(t.slice(s)) ? t.slice(s).length : 1,
      l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), Lf(l, "");
  }
  return Lf(n, t) + r + i;
}
function jE(t, e, n, r) {
  let i = [],
    s = [],
    o = null;
  const a = ({ state: d }) => {
    const f = ev(t, location),
      g = n.value,
      v = e.value;
    let _ = 0;
    if (d) {
      if (((n.value = f), (e.value = d), o && o === g)) {
        o = null;
        return;
      }
      _ = v ? d.position - v.position : 0;
    } else r(f);
    i.forEach((b) => {
      b(n.value, g, {
        delta: _,
        type: Ns.pop,
        direction: _ ? (_ > 0 ? gs.forward : gs.back) : gs.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(d) {
    i.push(d);
    const f = () => {
      const g = i.indexOf(d);
      g > -1 && i.splice(g, 1);
    };
    return s.push(f), f;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(qe({}, d.state, { scroll: hl() }), "");
  }
  function h() {
    for (const d of s) d();
    (s = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u),
    { pauseListeners: l, listen: c, destroy: h }
  );
}
function Vf(t, e, n, r = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? hl() : null,
  };
}
function HE(t) {
  const { history: e, location: n } = window,
    r = { value: ev(t, n) },
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
    const h = t.indexOf("#"),
      d =
        h > -1
          ? (n.host && document.querySelector("base") ? t : t.slice(h)) + l
          : BE() + t + l;
    try {
      e[u ? "replaceState" : "pushState"](c, "", d), (i.value = c);
    } catch (f) {
      console.error(f), n[u ? "replace" : "assign"](d);
    }
  }
  function o(l, c) {
    const u = qe({}, e.state, Vf(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position,
    });
    s(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = qe({}, i.value, e.state, { forward: l, scroll: hl() });
    s(u.current, u, !0);
    const h = qe({}, Vf(r.value, l, null), { position: u.position + 1 }, c);
    s(l, h, !1), (r.value = l);
  }
  return { location: r, state: i, push: a, replace: o };
}
function zE(t) {
  t = NE(t);
  const e = HE(t),
    n = jE(t, e.state, e.location, e.replace);
  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s);
  }
  const i = qe(
    { location: "", base: t, go: r, createHref: ME.bind(null, t) },
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
function WE(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function tv(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const jn = {
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
  nv = Symbol("");
var Ff;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(Ff || (Ff = {}));
function Ci(t, e) {
  return qe(new Error(), { type: t, [nv]: !0 }, e);
}
function dn(t, e) {
  return t instanceof Error && nv in t && (e == null || !!(t.type & e));
}
const Uf = "[^/]+?",
  KE = { sensitive: !1, strict: !1, start: !0, end: !0 },
  GE = /[.+*?^${}()[\]/\\]/g;
function QE(t, e) {
  const n = qe({}, KE, e),
    r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const c of t) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (i += "/");
    for (let h = 0; h < c.length; h++) {
      const d = c[h];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        h || (i += "/"), (i += d.value.replace(GE, "\\$&")), (f += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: v, optional: _, regexp: b } = d;
        s.push({ name: g, repeatable: v, optional: _ });
        const y = b || Uf;
        if (y !== Uf) {
          f += 10;
          try {
            new RegExp(`(${y})`);
          } catch (A) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${y}): ` + A.message
            );
          }
        }
        let x = v ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        h || (x = _ && c.length < 2 ? `(?:/${x})` : "/" + x),
          _ && (x += "?"),
          (i += x),
          (f += 20),
          _ && (f += -8),
          v && (f += -20),
          y === ".*" && (f += -50);
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
      h = {};
    if (!u) return null;
    for (let d = 1; d < u.length; d++) {
      const f = u[d] || "",
        g = s[d - 1];
      h[g.name] = f && g.repeatable ? f.split("/") : f;
    }
    return h;
  }
  function l(c) {
    let u = "",
      h = !1;
    for (const d of t) {
      (!h || !u.endsWith("/")) && (u += "/"), (h = !1);
      for (const f of d)
        if (f.type === 0) u += f.value;
        else if (f.type === 1) {
          const { value: g, repeatable: v, optional: _ } = f,
            b = g in c ? c[g] : "";
          if (Xt(b) && !v)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const y = Xt(b) ? b.join("/") : b;
          if (!y)
            if (_)
              d.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += y;
        }
    }
    return u || "/";
  }
  return { re: o, score: r, keys: s, parse: a, stringify: l };
}
function YE(t, e) {
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
function XE(t, e) {
  let n = 0;
  const r = t.score,
    i = e.score;
  for (; n < r.length && n < i.length; ) {
    const s = YE(r[n], i[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Bf(r)) return 1;
    if (Bf(i)) return -1;
  }
  return i.length - r.length;
}
function Bf(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const JE = { type: 0, value: "" },
  ZE = /[a-zA-Z0-9_]/;
function eT(t) {
  if (!t) return [[]];
  if (t === "/") return [[JE]];
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
  function h() {
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
  function d() {
    c += l;
  }
  for (; a < t.length; ) {
    if (((l = t[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && h(), o()) : l === ":" ? (h(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : ZE.test(l)
          ? d()
          : (h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), h(), o(), i;
}
function tT(t, e, n) {
  const r = QE(eT(t.path), n),
    i = qe(r, { record: t, parent: e, children: [], alias: [] });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
}
function nT(t, e) {
  const n = [],
    r = new Map();
  e = zf({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(u) {
    return r.get(u);
  }
  function s(u, h, d) {
    const f = !d,
      g = rT(u);
    g.aliasOf = d && d.record;
    const v = zf(e, u),
      _ = [g];
    if ("alias" in u) {
      const x = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const A of x)
        _.push(
          qe({}, g, {
            components: d ? d.record.components : g.components,
            path: A,
            aliasOf: d ? d.record : g,
          })
        );
    }
    let b, y;
    for (const x of _) {
      const { path: A } = x;
      if (h && A[0] !== "/") {
        const H = h.record.path,
          Z = H[H.length - 1] === "/" ? "" : "/";
        x.path = h.record.path + (A && Z + A);
      }
      if (
        ((b = tT(x, h, v)),
        d
          ? d.alias.push(b)
          : ((y = y || b),
            y !== b && y.alias.push(b),
            f && u.name && !Hf(b) && o(u.name)),
        g.children)
      ) {
        const H = g.children;
        for (let Z = 0; Z < H.length; Z++) s(H[Z], b, d && d.children[Z]);
      }
      (d = d || b), l(b);
    }
    return y
      ? () => {
          o(y);
        }
      : ms;
  }
  function o(u) {
    if (tv(u)) {
      const h = r.get(u);
      h &&
        (r.delete(u),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(o),
        h.alias.forEach(o));
    } else {
      const h = n.indexOf(u);
      h > -1 &&
        (n.splice(h, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(o),
        u.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let h = 0;
    for (
      ;
      h < n.length &&
      XE(u, n[h]) >= 0 &&
      (u.record.path !== n[h].record.path || !rv(u, n[h]));

    )
      h++;
    n.splice(h, 0, u), u.record.name && !Hf(u) && r.set(u.record.name, u);
  }
  function c(u, h) {
    let d,
      f = {},
      g,
      v;
    if ("name" in u && u.name) {
      if (((d = r.get(u.name)), !d)) throw Ci(1, { location: u });
      (v = d.record.name),
        (f = qe(
          jf(
            h.params,
            d.keys.filter((y) => !y.optional).map((y) => y.name)
          ),
          u.params &&
            jf(
              u.params,
              d.keys.map((y) => y.name)
            )
        )),
        (g = d.stringify(f));
    } else if ("path" in u)
      (g = u.path),
        (d = n.find((y) => y.re.test(g))),
        d && ((f = d.parse(g)), (v = d.record.name));
    else {
      if (((d = h.name ? r.get(h.name) : n.find((y) => y.re.test(h.path))), !d))
        throw Ci(1, { location: u, currentLocation: h });
      (v = d.record.name),
        (f = qe({}, h.params, u.params)),
        (g = d.stringify(f));
    }
    const _ = [];
    let b = d;
    for (; b; ) _.unshift(b.record), (b = b.parent);
    return { name: v, path: g, params: f, matched: _, meta: sT(_) };
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
function jf(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n;
}
function rT(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: iT(t),
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
function iT(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else for (const r in t.components) e[r] = typeof n == "boolean" ? n : n[r];
  return e;
}
function Hf(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function sT(t) {
  return t.reduce((e, n) => qe(e, n.meta), {});
}
function zf(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n;
}
function rv(t, e) {
  return e.children.some((n) => n === t || rv(t, n));
}
const iv = /#/g,
  oT = /&/g,
  aT = /\//g,
  lT = /=/g,
  cT = /\?/g,
  sv = /\+/g,
  uT = /%5B/g,
  hT = /%5D/g,
  ov = /%5E/g,
  dT = /%60/g,
  av = /%7B/g,
  fT = /%7C/g,
  lv = /%7D/g,
  pT = /%20/g;
function gh(t) {
  return encodeURI("" + t)
    .replace(fT, "|")
    .replace(uT, "[")
    .replace(hT, "]");
}
function mT(t) {
  return gh(t).replace(av, "{").replace(lv, "}").replace(ov, "^");
}
function cu(t) {
  return gh(t)
    .replace(sv, "%2B")
    .replace(pT, "+")
    .replace(iv, "%23")
    .replace(oT, "%26")
    .replace(dT, "`")
    .replace(av, "{")
    .replace(lv, "}")
    .replace(ov, "^");
}
function gT(t) {
  return cu(t).replace(lT, "%3D");
}
function vT(t) {
  return gh(t).replace(iv, "%23").replace(cT, "%3F");
}
function yT(t) {
  return t == null ? "" : vT(t).replace(aT, "%2F");
}
function wa(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
function _T(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(sv, " "),
      o = s.indexOf("="),
      a = wa(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : wa(s.slice(o + 1));
    if (a in e) {
      let c = e[a];
      Xt(c) || (c = e[a] = [c]), c.push(l);
    } else e[a] = l;
  }
  return e;
}
function Wf(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (((n = gT(n)), r == null)) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (Xt(r) ? r.map((s) => s && cu(s)) : [r && cu(r)]).forEach((s) => {
      s !== void 0 &&
        ((e += (e.length ? "&" : "") + n), s != null && (e += "=" + s));
    });
  }
  return e;
}
function wT(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 &&
      (e[n] = Xt(r)
        ? r.map((i) => (i == null ? null : "" + i))
        : r == null
        ? r
        : "" + r);
  }
  return e;
}
const bT = Symbol(""),
  Kf = Symbol(""),
  dl = Symbol(""),
  vh = Symbol(""),
  uu = Symbol("");
function ns() {
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
function Qn(t, e, n, r, i) {
  const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () =>
    new Promise((o, a) => {
      const l = (h) => {
          h === !1
            ? a(Ci(4, { from: n, to: e }))
            : h instanceof Error
            ? a(h)
            : WE(h)
            ? a(Ci(2, { from: e, to: h }))
            : (s &&
                r.enterCallbacks[i] === s &&
                typeof h == "function" &&
                s.push(h),
              o());
        },
        c = t.call(r && r.instances[i], e, n, l);
      let u = Promise.resolve(c);
      t.length < 3 && (u = u.then(l)), u.catch((h) => a(h));
    });
}
function _c(t, e, n, r) {
  const i = [];
  for (const s of t)
    for (const o in s.components) {
      let a = s.components[o];
      if (!(e !== "beforeRouteEnter" && !s.instances[o]))
        if (ET(a)) {
          const c = (a.__vccOpts || a)[e];
          c && i.push(Qn(c, n, r, s, o));
        } else {
          let l = a();
          i.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${s.path}"`)
                );
              const u = CE(c) ? c.default : c;
              s.components[o] = u;
              const d = (u.__vccOpts || u)[e];
              return d && Qn(d, n, r, s, o)();
            })
          );
        }
    }
  return i;
}
function ET(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function Gf(t) {
  const e = Yt(dl),
    n = Yt(vh),
    r = Re(() => e.resolve(Ye(t.to))),
    i = Re(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        h = n.matched;
      if (!u || !h.length) return -1;
      const d = h.findIndex(ki.bind(null, u));
      if (d > -1) return d;
      const f = Qf(l[c - 2]);
      return c > 1 && Qf(u) === f && h[h.length - 1].path !== f
        ? h.findIndex(ki.bind(null, l[c - 2]))
        : d;
    }),
    s = Re(() => i.value > -1 && ST(n.params, r.value.params)),
    o = Re(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Zg(n.params, r.value.params)
    );
  function a(l = {}) {
    return AT(l)
      ? e[Ye(t.replace) ? "replace" : "push"](Ye(t.to)).catch(ms)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Re(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
const TT = at({
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
    useLink: Gf,
    setup(t, { slots: e }) {
      const n = On(Gf(t)),
        { options: r } = Yt(dl),
        i = Re(() => ({
          [Yf(t.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Yf(
            t.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = e.default && e.default(n);
        return t.custom
          ? s
          : ul(
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
  IT = TT;
function AT(t) {
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
function ST(t, e) {
  for (const n in e) {
    const r = e[n],
      i = t[n];
    if (typeof r == "string") {
      if (r !== i) return !1;
    } else if (!Xt(i) || i.length !== r.length || r.some((s, o) => s !== i[o]))
      return !1;
  }
  return !0;
}
function Qf(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const Yf = (t, e, n) => t ?? e ?? n,
  kT = at({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const r = Yt(uu),
        i = Re(() => t.route || r.value),
        s = Yt(Kf, 0),
        o = Re(() => {
          let c = Ye(s);
          const { matched: u } = i.value;
          let h;
          for (; (h = u[c]) && !h.components; ) c++;
          return c;
        }),
        a = Re(() => i.value.matched[o.value]);
      Jo(
        Kf,
        Re(() => o.value + 1)
      ),
        Jo(bT, a),
        Jo(uu, i);
      const l = ue();
      return (
        ut(
          () => [l.value, a.value, t.name],
          ([c, u, h], [d, f, g]) => {
            u &&
              ((u.instances[h] = c),
              f &&
                f !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards),
                u.updateGuards.size || (u.updateGuards = f.updateGuards))),
              c &&
                u &&
                (!f || !ki(u, f) || !d) &&
                (u.enterCallbacks[h] || []).forEach((v) => v(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = i.value,
            u = t.name,
            h = a.value,
            d = h && h.components[u];
          if (!d) return Xf(n.default, { Component: d, route: c });
          const f = h.props[u],
            g = f
              ? f === !0
                ? c.params
                : typeof f == "function"
                ? f(c)
                : f
              : null,
            _ = ul(
              d,
              qe({}, g, e, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (h.instances[u] = null);
                },
                ref: l,
              })
            );
          return Xf(n.default, { Component: _, route: c }) || _;
        }
      );
    },
  });
function Xf(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const CT = kT;
function qT(t) {
  const e = nT(t.routes, t),
    n = t.parseQuery || _T,
    r = t.stringifyQuery || Wf,
    i = t.history,
    s = ns(),
    o = ns(),
    a = ns(),
    l = qb(jn);
  let c = jn;
  oi &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = vc.bind(null, (k) => "" + k),
    h = vc.bind(null, yT),
    d = vc.bind(null, wa);
  function f(k, $) {
    let E, N;
    return (
      tv(k) ? ((E = e.getRecordMatcher(k)), (N = $)) : (N = k), e.addRoute(N, E)
    );
  }
  function g(k) {
    const $ = e.getRecordMatcher(k);
    $ && e.removeRoute($);
  }
  function v() {
    return e.getRoutes().map((k) => k.record);
  }
  function _(k) {
    return !!e.getRecordMatcher(k);
  }
  function b(k, $) {
    if ((($ = qe({}, $ || l.value)), typeof k == "string")) {
      const p = yc(n, k, $.path),
        m = e.resolve({ path: p.path }, $),
        w = i.createHref(p.fullPath);
      return qe(p, m, {
        params: d(m.params),
        hash: wa(p.hash),
        redirectedFrom: void 0,
        href: w,
      });
    }
    let E;
    if ("path" in k) E = qe({}, k, { path: yc(n, k.path, $.path).path });
    else {
      const p = qe({}, k.params);
      for (const m in p) p[m] == null && delete p[m];
      (E = qe({}, k, { params: h(k.params) })), ($.params = h($.params));
    }
    const N = e.resolve(E, $),
      W = k.hash || "";
    N.params = u(d(N.params));
    const Ee = RE(r, qe({}, k, { hash: mT(W), path: N.path })),
      ie = i.createHref(Ee);
    return qe(
      { fullPath: Ee, hash: W, query: r === Wf ? wT(k.query) : k.query || {} },
      N,
      { redirectedFrom: void 0, href: ie }
    );
  }
  function y(k) {
    return typeof k == "string" ? yc(n, k, l.value.path) : qe({}, k);
  }
  function x(k, $) {
    if (c !== k) return Ci(8, { from: $, to: k });
  }
  function A(k) {
    return ae(k);
  }
  function H(k) {
    return A(qe(y(k), { replace: !0 }));
  }
  function Z(k) {
    const $ = k.matched[k.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: E } = $;
      let N = typeof E == "function" ? E(k) : E;
      return (
        typeof N == "string" &&
          ((N = N.includes("?") || N.includes("#") ? (N = y(N)) : { path: N }),
          (N.params = {})),
        qe(
          { query: k.query, hash: k.hash, params: "path" in N ? {} : k.params },
          N
        )
      );
    }
  }
  function ae(k, $) {
    const E = (c = b(k)),
      N = l.value,
      W = k.state,
      Ee = k.force,
      ie = k.replace === !0,
      p = Z(E);
    if (p)
      return ae(
        qe(y(p), {
          state: typeof p == "object" ? qe({}, W, p.state) : W,
          force: Ee,
          replace: ie,
        }),
        $ || E
      );
    const m = E;
    m.redirectedFrom = $;
    let w;
    return (
      !Ee &&
        PE(r, N, E) &&
        ((w = Ci(16, { to: m, from: N })), zt(N, N, !0, !1)),
      (w ? Promise.resolve(w) : ne(m, N))
        .catch((T) => (dn(T) ? (dn(T, 2) ? T : It(T)) : Ce(T, m, N)))
        .then((T) => {
          if (T) {
            if (dn(T, 2))
              return ae(
                qe({ replace: ie }, y(T.to), {
                  state: typeof T.to == "object" ? qe({}, W, T.to.state) : W,
                  force: Ee,
                }),
                $ || m
              );
          } else T = Te(m, N, !0, ie, W);
          return ee(m, N, T), T;
        })
    );
  }
  function F(k, $) {
    const E = x(k, $);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function ne(k, $) {
    let E;
    const [N, W, Ee] = xT(k, $);
    E = _c(N.reverse(), "beforeRouteLeave", k, $);
    for (const p of N)
      p.leaveGuards.forEach((m) => {
        E.push(Qn(m, k, $));
      });
    const ie = F.bind(null, k, $);
    return (
      E.push(ie),
      ri(E)
        .then(() => {
          E = [];
          for (const p of s.list()) E.push(Qn(p, k, $));
          return E.push(ie), ri(E);
        })
        .then(() => {
          E = _c(W, "beforeRouteUpdate", k, $);
          for (const p of W)
            p.updateGuards.forEach((m) => {
              E.push(Qn(m, k, $));
            });
          return E.push(ie), ri(E);
        })
        .then(() => {
          E = [];
          for (const p of k.matched)
            if (p.beforeEnter && !$.matched.includes(p))
              if (Xt(p.beforeEnter))
                for (const m of p.beforeEnter) E.push(Qn(m, k, $));
              else E.push(Qn(p.beforeEnter, k, $));
          return E.push(ie), ri(E);
        })
        .then(
          () => (
            k.matched.forEach((p) => (p.enterCallbacks = {})),
            (E = _c(Ee, "beforeRouteEnter", k, $)),
            E.push(ie),
            ri(E)
          )
        )
        .then(() => {
          E = [];
          for (const p of o.list()) E.push(Qn(p, k, $));
          return E.push(ie), ri(E);
        })
        .catch((p) => (dn(p, 8) ? p : Promise.reject(p)))
    );
  }
  function ee(k, $, E) {
    for (const N of a.list()) N(k, $, E);
  }
  function Te(k, $, E, N, W) {
    const Ee = x(k, $);
    if (Ee) return Ee;
    const ie = $ === jn,
      p = oi ? history.state : {};
    E &&
      (N || ie
        ? i.replace(k.fullPath, qe({ scroll: ie && p && p.scroll }, W))
        : i.push(k.fullPath, W)),
      (l.value = k),
      zt(k, $, E, ie),
      It();
  }
  let V;
  function pe() {
    V ||
      (V = i.listen((k, $, E) => {
        if (!yr.listening) return;
        const N = b(k),
          W = Z(N);
        if (W) {
          ae(qe(W, { replace: !0 }), N).catch(ms);
          return;
        }
        c = N;
        const Ee = l.value;
        oi && FE($f(Ee.fullPath, E.delta), hl()),
          ne(N, Ee)
            .catch((ie) =>
              dn(ie, 12)
                ? ie
                : dn(ie, 2)
                ? (ae(ie.to, N)
                    .then((p) => {
                      dn(p, 20) &&
                        !E.delta &&
                        E.type === Ns.pop &&
                        i.go(-1, !1);
                    })
                    .catch(ms),
                  Promise.reject())
                : (E.delta && i.go(-E.delta, !1), Ce(ie, N, Ee))
            )
            .then((ie) => {
              (ie = ie || Te(N, Ee, !1)),
                ie &&
                  (E.delta && !dn(ie, 8)
                    ? i.go(-E.delta, !1)
                    : E.type === Ns.pop && dn(ie, 20) && i.go(-1, !1)),
                ee(N, Ee, ie);
            })
            .catch(ms);
      }));
  }
  let be = ns(),
    _t = ns(),
    Pe;
  function Ce(k, $, E) {
    It(k);
    const N = _t.list();
    return (
      N.length ? N.forEach((W) => W(k, $, E)) : console.error(k),
      Promise.reject(k)
    );
  }
  function ge() {
    return Pe && l.value !== jn
      ? Promise.resolve()
      : new Promise((k, $) => {
          be.add([k, $]);
        });
  }
  function It(k) {
    return (
      Pe ||
        ((Pe = !k),
        pe(),
        be.list().forEach(([$, E]) => (k ? E(k) : $())),
        be.reset()),
      k
    );
  }
  function zt(k, $, E, N) {
    const { scrollBehavior: W } = t;
    if (!oi || !W) return Promise.resolve();
    const Ee =
      (!E && UE($f(k.fullPath, 0))) ||
      ((N || !E) && history.state && history.state.scroll) ||
      null;
    return er()
      .then(() => W(k, $, Ee))
      .then((ie) => ie && VE(ie))
      .catch((ie) => Ce(ie, k, $));
  }
  const xt = (k) => i.go(k);
  let He;
  const hn = new Set(),
    yr = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: g,
      hasRoute: _,
      getRoutes: v,
      resolve: b,
      options: t,
      push: A,
      replace: H,
      go: xt,
      back: () => xt(-1),
      forward: () => xt(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: _t.add,
      isReady: ge,
      install(k) {
        const $ = this;
        k.component("RouterLink", IT),
          k.component("RouterView", CT),
          (k.config.globalProperties.$router = $),
          Object.defineProperty(k.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ye(l),
          }),
          oi &&
            !He &&
            l.value === jn &&
            ((He = !0), A(i.location).catch((W) => {}));
        const E = {};
        for (const W in jn) E[W] = Re(() => l.value[W]);
        k.provide(dl, $), k.provide(vh, On(E)), k.provide(uu, l);
        const N = k.unmount;
        hn.add(k),
          (k.unmount = function () {
            hn.delete(k),
              hn.size < 1 &&
                ((c = jn),
                V && V(),
                (V = null),
                (l.value = jn),
                (He = !1),
                (Pe = !1)),
              N();
          });
      },
    };
  return yr;
}
function ri(t) {
  return t.reduce((e, n) => e.then(() => n()), Promise.resolve());
}
function xT(t, e) {
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
function yh() {
  return Yt(dl);
}
function _h() {
  return Yt(vh);
}
const cv = "/assets/cris-icon-CsAI_VB6.png",
  uv = "/assets/cris-text-8MZ5Njur.png",
  RT = "/assets/discord-icon-8DNfz9TA.png",
  PT = "/assets/twitter-icon-aO3qts0R.png",
  OT = "/assets/twitch-icon-BrV9MfMk.png";
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
 */ const hv = function (t) {
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
  DT = function (t) {
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
  dv = {
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
          h = ((s & 3) << 4) | (a >> 4);
        let d = ((a & 15) << 2) | (c >> 6),
          f = c & 63;
        l || ((f = 64), o || (d = 64)), r.push(n[u], n[h], n[d], n[f]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(hv(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : DT(this.decodeStringToByteArray(t, e));
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
        const h = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || c == null || h == null))
          throw Error();
        const d = (s << 2) | (a >> 4);
        if ((r.push(d), c !== 64)) {
          const f = ((a << 4) & 240) | (c >> 2);
          if ((r.push(f), h !== 64)) {
            const g = ((c << 6) & 192) | h;
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
  NT = function (t) {
    const e = hv(t);
    return dv.encodeByteArray(e, !0);
  },
  fv = function (t) {
    return NT(t).replace(/\./g, "");
  },
  LT = function (t) {
    try {
      return dv.decodeString(t, !0);
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
 */ class MT {
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
function $T() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())
  );
}
function VT() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function FT() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function UT() {
  const t = vt();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function BT() {
  return typeof indexedDB == "object";
}
function jT() {
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
 */ const HT = "FirebaseError";
class Nn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = HT),
      Object.setPrototypeOf(this, Nn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, eo.prototype.create);
  }
}
class eo {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? zT(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new Nn(i, a, r);
  }
}
function zT(t, e) {
  return t.replace(WT, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const WT = /\{\$([^}]+)}/g;
function KT(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function ba(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Jf(s) && Jf(o)) {
      if (!ba(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Jf(t) {
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
 */ function to(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function GT(t, e) {
  const n = new QT(t, e);
  return n.subscribe.bind(n);
}
class QT {
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
    YT(e, ["next", "error", "complete"])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = wc),
      i.error === void 0 && (i.error = wc),
      i.complete === void 0 && (i.complete = wc);
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
function YT(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == "function") return !0;
  return !1;
}
function wc() {}
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
 */ const Sr = "[DEFAULT]";
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
 */ class XT {
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
      const r = new MT();
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
      if (ZT(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Sr });
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
  clearInstance(e = Sr) {
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
  isInitialized(e = Sr) {
    return this.instances.has(e);
  }
  getOptions(e = Sr) {
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
        instanceIdentifier: JT(e),
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
  normalizeInstanceIdentifier(e = Sr) {
    return this.component ? (this.component.multipleInstances ? e : Sr) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function JT(t) {
  return t === Sr ? void 0 : t;
}
function ZT(t) {
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
 */ class eI {
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
    const n = new XT(e, this);
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
const tI = {
    debug: Se.DEBUG,
    verbose: Se.VERBOSE,
    info: Se.INFO,
    warn: Se.WARN,
    error: Se.ERROR,
    silent: Se.SILENT,
  },
  nI = Se.INFO,
  rI = {
    [Se.DEBUG]: "log",
    [Se.VERBOSE]: "log",
    [Se.INFO]: "info",
    [Se.WARN]: "warn",
    [Se.ERROR]: "error",
  },
  iI = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = rI[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class wh {
  constructor(e) {
    (this.name = e),
      (this._logLevel = nI),
      (this._logHandler = iI),
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
    this._logLevel = typeof e == "string" ? tI[e] : e;
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
const sI = (t, e) => e.some((n) => t instanceof n);
let Zf, ep;
function oI() {
  return (
    Zf ||
    (Zf = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function aI() {
  return (
    ep ||
    (ep = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const pv = new WeakMap(),
  hu = new WeakMap(),
  mv = new WeakMap(),
  bc = new WeakMap(),
  bh = new WeakMap();
function lI(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(sr(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && pv.set(n, t);
      })
      .catch(() => {}),
    bh.set(e, t),
    e
  );
}
function cI(t) {
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
let du = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return hu.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || mv.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return sr(t[e]);
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
function uI(t) {
  du = t(du);
}
function hI(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Ec(this), e, ...n);
        return mv.set(r, e.sort ? e.sort() : [e]), sr(r);
      }
    : aI().includes(t)
    ? function (...e) {
        return t.apply(Ec(this), e), sr(pv.get(this));
      }
    : function (...e) {
        return sr(t.apply(Ec(this), e));
      };
}
function dI(t) {
  return typeof t == "function"
    ? hI(t)
    : (t instanceof IDBTransaction && cI(t),
      sI(t, oI()) ? new Proxy(t, du) : t);
}
function sr(t) {
  if (t instanceof IDBRequest) return lI(t);
  if (bc.has(t)) return bc.get(t);
  const e = dI(t);
  return e !== t && (bc.set(t, e), bh.set(e, t)), e;
}
const Ec = (t) => bh.get(t);
function fI(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = sr(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(sr(o.result), l.oldVersion, l.newVersion, sr(o.transaction));
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
const pI = ["get", "getKey", "getAll", "getAllKeys", "count"],
  mI = ["put", "add", "delete", "clear"],
  Tc = new Map();
function tp(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Tc.get(e)) return Tc.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = mI.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || pI.includes(n))
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
  return Tc.set(e, s), s;
}
uI((t) => ({
  ...t,
  get: (e, n, r) => tp(e, n) || t.get(e, n, r),
  has: (e, n) => !!tp(e, n) || t.has(e, n),
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
 */ class gI {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (vI(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function vI(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const fu = "@firebase/app",
  np = "0.7.33";
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
 */ const jr = new wh("@firebase/app"),
  yI = "@firebase/app-compat",
  _I = "@firebase/analytics-compat",
  wI = "@firebase/analytics",
  bI = "@firebase/app-check-compat",
  EI = "@firebase/app-check",
  TI = "@firebase/auth",
  II = "@firebase/auth-compat",
  AI = "@firebase/database",
  SI = "@firebase/database-compat",
  kI = "@firebase/functions",
  CI = "@firebase/functions-compat",
  qI = "@firebase/installations",
  xI = "@firebase/installations-compat",
  RI = "@firebase/messaging",
  PI = "@firebase/messaging-compat",
  OI = "@firebase/performance",
  DI = "@firebase/performance-compat",
  NI = "@firebase/remote-config",
  LI = "@firebase/remote-config-compat",
  MI = "@firebase/storage",
  $I = "@firebase/storage-compat",
  VI = "@firebase/firestore",
  FI = "@firebase/firestore-compat",
  UI = "firebase",
  BI = "9.10.0";
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
 */ const gv = "[DEFAULT]",
  jI = {
    [fu]: "fire-core",
    [yI]: "fire-core-compat",
    [wI]: "fire-analytics",
    [_I]: "fire-analytics-compat",
    [EI]: "fire-app-check",
    [bI]: "fire-app-check-compat",
    [TI]: "fire-auth",
    [II]: "fire-auth-compat",
    [AI]: "fire-rtdb",
    [SI]: "fire-rtdb-compat",
    [kI]: "fire-fn",
    [CI]: "fire-fn-compat",
    [qI]: "fire-iid",
    [xI]: "fire-iid-compat",
    [RI]: "fire-fcm",
    [PI]: "fire-fcm-compat",
    [OI]: "fire-perf",
    [DI]: "fire-perf-compat",
    [NI]: "fire-rc",
    [LI]: "fire-rc-compat",
    [MI]: "fire-gcs",
    [$I]: "fire-gcs-compat",
    [VI]: "fire-fst",
    [FI]: "fire-fst-compat",
    "fire-js": "fire-js",
    [UI]: "fire-js-all",
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
 */ const Ea = new Map(),
  pu = new Map();
function HI(t, e) {
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
  if (pu.has(e))
    return (
      jr.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  pu.set(e, t);
  for (const n of Ea.values()) HI(n, t);
  return !0;
}
function Eh(t, e) {
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
 */ const zI = {
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
  Hr = new eo("app", "Firebase", zI);
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
 */ class WI {
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
 */ const no = BI;
function KI(t, e = {}) {
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: gv, automaticDataCollectionEnabled: !1 }, e),
    r = n.name;
  if (typeof r != "string" || !r)
    throw Hr.create("bad-app-name", { appName: String(r) });
  const i = Ea.get(r);
  if (i) {
    if (ba(t, i.options) && ba(n, i.config)) return i;
    throw Hr.create("duplicate-app", { appName: r });
  }
  const s = new eI(r);
  for (const a of pu.values()) s.addComponent(a);
  const o = new WI(t, n, s);
  return Ea.set(r, o), o;
}
function vv(t = gv) {
  const e = Ea.get(t);
  if (!e) throw Hr.create("no-app", { appName: t });
  return e;
}
function or(t, e, n) {
  var r;
  let i = (r = jI[t]) !== null && r !== void 0 ? r : t;
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
 */ const GI = "firebase-heartbeat-database",
  QI = 1,
  Ls = "firebase-heartbeat-store";
let Ic = null;
function yv() {
  return (
    Ic ||
      (Ic = fI(GI, QI, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(Ls);
          }
        },
      }).catch((t) => {
        throw Hr.create("idb-open", { originalErrorMessage: t.message });
      })),
    Ic
  );
}
async function YI(t) {
  var e;
  try {
    return (await yv()).transaction(Ls).objectStore(Ls).get(_v(t));
  } catch (n) {
    if (n instanceof Nn) jr.warn(n.message);
    else {
      const r = Hr.create("idb-get", {
        originalErrorMessage:
          (e = n) === null || e === void 0 ? void 0 : e.message,
      });
      jr.warn(r.message);
    }
  }
}
async function rp(t, e) {
  var n;
  try {
    const i = (await yv()).transaction(Ls, "readwrite");
    return await i.objectStore(Ls).put(e, _v(t)), i.done;
  } catch (r) {
    if (r instanceof Nn) jr.warn(r.message);
    else {
      const i = Hr.create("idb-set", {
        originalErrorMessage:
          (n = r) === null || n === void 0 ? void 0 : n.message,
      });
      jr.warn(i.message);
    }
  }
}
function _v(t) {
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
 */ const XI = 1024,
  JI = 30 * 24 * 60 * 60 * 1e3;
class ZI {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new tA(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = ip();
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
            return Date.now() - s <= JI;
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
    const e = ip(),
      { heartbeatsToSend: n, unsentEntries: r } = eA(
        this._heartbeatsCache.heartbeats
      ),
      i = fv(JSON.stringify({ version: 2, heartbeats: n }));
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
function ip() {
  return new Date().toISOString().substring(0, 10);
}
function eA(t, e = XI) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), sp(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), sp(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class tA {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return BT()
      ? jT()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await YI(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return rp(this.app, {
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
      return rp(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function sp(t) {
  return fv(JSON.stringify({ version: 2, heartbeats: t })).length;
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
 */ function nA(t) {
  qi(new Br("platform-logger", (e) => new gI(e), "PRIVATE")),
    qi(new Br("heartbeat", (e) => new ZI(e), "PRIVATE")),
    or(fu, np, t),
    or(fu, np, "esm2017"),
    or("fire-js", "");
}
nA("");
function Th(t, e) {
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
function wv() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const rA = wv,
  bv = new eo("auth", "Firebase", wv());
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
 */ const op = new wh("@firebase/auth");
function ea(t, ...e) {
  op.logLevel <= Se.ERROR && op.error(`Auth (${no}): ${t}`, ...e);
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
  throw Ih(t, ...e);
}
function sn(t, ...e) {
  return Ih(t, ...e);
}
function Ev(t, e, n) {
  const r = Object.assign(Object.assign({}, rA()), { [e]: n });
  return new eo("auth", "Firebase", r).create(e, { appName: t.name });
}
function iA(t, e, n) {
  const r = n;
  if (!(e instanceof r))
    throw (
      (r.name !== e.constructor.name && ln(t, "argument-error"),
      Ev(
        t,
        "argument-error",
        `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function Ih(t, ...e) {
  if (typeof t != "string") {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return bv.create(t, ...e);
}
function se(t, e, ...n) {
  if (!t) throw Ih(e, ...n);
}
function mn(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw (ea(e), new Error(e));
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
 */ const ap = new Map();
function gn(t) {
  In(t instanceof Function, "Expected a class definition");
  let e = ap.get(t);
  return e
    ? (In(e instanceof t, "Instance stored in cache mismatched with class"), e)
    : ((e = new t()), ap.set(t, e), e);
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
 */ function sA(t, e) {
  const n = Eh(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (ba(s, e ?? {})) return i;
    ln(i, "already-initialized");
  }
  return n.initialize({ options: e });
}
function oA(t, e) {
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
 */ function mu() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
    ""
  );
}
function aA() {
  return lp() === "http:" || lp() === "https:";
}
function lp() {
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
 */ function lA() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (aA() || VT() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function cA() {
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
 */ class ro {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      In(n > e, "Short delay should be less than long delay!"),
      (this.isMobile = $T() || FT());
  }
  get() {
    return lA()
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
 */ function Ah(t, e) {
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
 */ class Tv {
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
 */ const uA = {
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
 */ const hA = new ro(3e4, 6e4);
function dA(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function fl(t, e, n, r, i = {}) {
  return Iv(t, i, async () => {
    let s = {},
      o = {};
    r && (e === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = to(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      t.languageCode && (l["X-Firebase-Locale"] = t.languageCode),
      Tv.fetch()(
        Av(t, t.config.apiHost, n, a),
        Object.assign(
          { method: e, headers: l, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function Iv(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, uA), e);
  try {
    const i = new pA(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Mo(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Mo(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw Mo(t, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw Mo(t, "user-disabled", o);
      const u = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c) throw Ev(t, u, c);
      ln(t, u);
    }
  } catch (i) {
    if (i instanceof Nn) throw i;
    ln(t, "network-request-failed");
  }
}
async function fA(t, e, n, r, i = {}) {
  const s = await fl(t, e, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      ln(t, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function Av(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? Ah(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class pA {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(sn(this.auth, "network-request-failed")),
          hA.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Mo(t, e, n) {
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
 */ async function mA(t, e) {
  return fl(t, "POST", "/v1/accounts:delete", e);
}
async function gA(t, e) {
  return fl(t, "POST", "/v1/accounts:lookup", e);
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
 */ function vs(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function vA(t, e = !1) {
  const n = yt(t),
    r = await n.getIdToken(e),
    i = Sh(r);
  se(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: vs(Ac(i.auth_time)),
    issuedAtTime: vs(Ac(i.iat)),
    expirationTime: vs(Ac(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function Ac(t) {
  return Number(t) * 1e3;
}
function Sh(t) {
  var e;
  const [n, r, i] = t.split(".");
  if (n === void 0 || r === void 0 || i === void 0)
    return ea("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const s = LT(r);
    return s
      ? JSON.parse(s)
      : (ea("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return (
      ea(
        "Caught error parsing JWT payload as JSON",
        (e = s) === null || e === void 0 ? void 0 : e.toString()
      ),
      null
    );
  }
}
function yA(t) {
  const e = Sh(t);
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
 */ async function Ms(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof Nn &&
        _A(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r)
    );
  }
}
function _A({ code: t }) {
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
 */ class wA {
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
 */ class Sv {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = vs(this.lastLoginAt)),
      (this.creationTime = vs(this.createdAt));
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
 */ async function Ta(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await Ms(t, gA(n, { idToken: r }));
  se(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? TA(s.providerUserInfo)
        : [],
    a = EA(t.providerData, o),
    l = t.isAnonymous,
    c = !(t.email && s.passwordHash) && !(a != null && a.length),
    u = l ? c : !1,
    h = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new Sv(s.createdAt, s.lastLoginAt),
      isAnonymous: u,
    };
  Object.assign(t, h);
}
async function bA(t) {
  const e = yt(t);
  await Ta(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function EA(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function TA(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = Th(e, ["providerId"]);
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
 */ async function IA(t, e) {
  const n = await Iv(t, {}, async () => {
    const r = to({ grant_type: "refresh_token", refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = Av(t, i, "/v1/token", `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"),
      Tv.fetch()(o, { method: "POST", headers: a, body: r })
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
 */ class $s {
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
        : yA(e.idToken);
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
    const { accessToken: r, refreshToken: i, expiresIn: s } = await IA(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new $s();
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
    return Object.assign(new $s(), this.toJSON());
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
 */ function Hn(t, e) {
  se(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Mr {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = Th(e, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new wA(this)),
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
      (this.metadata = new Sv(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await Ms(this, this.stsTokenManager.getToken(this.auth, e));
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
    return vA(this, e);
  }
  reload() {
    return bA(this);
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
    return new Mr(
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
      n && (await Ta(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await Ms(this, mA(this.auth, { idToken: e })),
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
    const h = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      d = (i = n.email) !== null && i !== void 0 ? i : void 0,
      f = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      g = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      v = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      _ = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      b = (c = n.createdAt) !== null && c !== void 0 ? c : void 0,
      y = (u = n.lastLoginAt) !== null && u !== void 0 ? u : void 0,
      {
        uid: x,
        emailVerified: A,
        isAnonymous: H,
        providerData: Z,
        stsTokenManager: ae,
      } = n;
    se(x && ae, e, "internal-error");
    const F = $s.fromJSON(this.name, ae);
    se(typeof x == "string", e, "internal-error"),
      Hn(h, e.name),
      Hn(d, e.name),
      se(typeof A == "boolean", e, "internal-error"),
      se(typeof H == "boolean", e, "internal-error"),
      Hn(f, e.name),
      Hn(g, e.name),
      Hn(v, e.name),
      Hn(_, e.name),
      Hn(b, e.name),
      Hn(y, e.name);
    const ne = new Mr({
      uid: x,
      auth: e,
      email: d,
      emailVerified: A,
      displayName: h,
      isAnonymous: H,
      photoURL: g,
      phoneNumber: f,
      tenantId: v,
      stsTokenManager: F,
      createdAt: b,
      lastLoginAt: y,
    });
    return (
      Z &&
        Array.isArray(Z) &&
        (ne.providerData = Z.map((ee) => Object.assign({}, ee))),
      _ && (ne._redirectEventId = _),
      ne
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new $s();
    i.updateFromServerResponse(n);
    const s = new Mr({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Ta(s), s;
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
 */ class kv {
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
kv.type = "NONE";
const cp = kv;
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
 */ function ta(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class gi {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = ta(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = ta("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Mr._fromJSON(this.auth, e) : null;
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
    if (!n.length) return new gi(gn(cp), e, r);
    const i = (
      await Promise.all(
        n.map(async (c) => {
          if (await c._isAvailable()) return c;
        })
      )
    ).filter((c) => c);
    let s = i[0] || gn(cp);
    const o = ta(r, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const u = await c._get(o);
        if (u) {
          const h = Mr._fromJSON(e, u);
          c !== s && (a = h), (s = c);
          break;
        }
      } catch {}
    const l = i.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new gi(s, e, r)
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
        new gi(s, e, r));
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
 */ function up(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (xv(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (Cv(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (Pv(e)) return "Blackberry";
  if (Ov(e)) return "Webos";
  if (kh(e)) return "Safari";
  if ((e.includes("chrome/") || qv(e)) && !e.includes("edge/")) return "Chrome";
  if (Rv(e)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Cv(t = vt()) {
  return /firefox\//i.test(t);
}
function kh(t = vt()) {
  const e = t.toLowerCase();
  return (
    e.includes("safari/") &&
    !e.includes("chrome/") &&
    !e.includes("crios/") &&
    !e.includes("android")
  );
}
function qv(t = vt()) {
  return /crios\//i.test(t);
}
function xv(t = vt()) {
  return /iemobile/i.test(t);
}
function Rv(t = vt()) {
  return /android/i.test(t);
}
function Pv(t = vt()) {
  return /blackberry/i.test(t);
}
function Ov(t = vt()) {
  return /webos/i.test(t);
}
function pl(t = vt()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function AA(t = vt()) {
  var e;
  return (
    pl(t) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function SA() {
  return UT() && document.documentMode === 10;
}
function Dv(t = vt()) {
  return pl(t) || Rv(t) || Ov(t) || Pv(t) || /windows phone/i.test(t) || xv(t);
}
function kA() {
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
 */ function Nv(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = up(vt());
      break;
    case "Worker":
      n = `${up(vt())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${no}/${r}`;
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
 */ class CA {
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
 */ class qA {
  constructor(e, n, r) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.config = r),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new hp(this)),
      (this.idTokenSubscription = new hp(this)),
      (this.beforeStateQueue = new CA(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = bv),
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
          ((this.persistenceManager = await gi.create(this, e)), !this._deleted)
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
      await Ta(e);
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
    this.languageCode = cA();
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
    this._errorFactory = new eo("auth", "Firebase", e());
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
        (this.redirectPersistenceManager = await gi.create(
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
      (this.clientVersion = Nv(
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
function Ch(t) {
  return yt(t);
}
class hp {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = GT((n) => (this.observer = n)));
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
 */ class Lv {
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
 */ async function vi(t, e) {
  return fA(t, "POST", "/v1/accounts:signInWithIdp", dA(t, e));
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
 */ const xA = "http://localhost";
class zr extends Lv {
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
      s = Th(n, ["providerId", "signInMethod"]);
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
    return vi(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), vi(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), vi(e, n);
  }
  buildRequest() {
    const e = { requestUri: xA, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = to(n));
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
 */ class qh {
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
 */ class io extends qh {
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
 */ class Xn extends io {
  constructor() {
    super("facebook.com");
  }
  static credential(e) {
    return zr._fromParams({
      providerId: Xn.PROVIDER_ID,
      signInMethod: Xn.FACEBOOK_SIGN_IN_METHOD,
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
Xn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Xn.PROVIDER_ID = "facebook.com";
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
 */ class Ot extends io {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(e, n) {
    return zr._fromParams({
      providerId: Ot.PROVIDER_ID,
      signInMethod: Ot.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return Ot.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Ot.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return Ot.credential(n, r);
    } catch {
      return null;
    }
  }
}
Ot.GOOGLE_SIGN_IN_METHOD = "google.com";
Ot.PROVIDER_ID = "google.com";
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
 */ class Jn extends io {
  constructor() {
    super("github.com");
  }
  static credential(e) {
    return zr._fromParams({
      providerId: Jn.PROVIDER_ID,
      signInMethod: Jn.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Jn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Jn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return Jn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Jn.GITHUB_SIGN_IN_METHOD = "github.com";
Jn.PROVIDER_ID = "github.com";
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
 */ class Zn extends io {
  constructor() {
    super("twitter.com");
  }
  static credential(e, n) {
    return zr._fromParams({
      providerId: Zn.PROVIDER_ID,
      signInMethod: Zn.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return Zn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Zn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return Zn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Zn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Zn.PROVIDER_ID = "twitter.com";
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
    const s = await Mr._fromIdTokenResponse(e, r, i),
      o = dp(r);
    return new xi({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = dp(r);
    return new xi({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function dp(t) {
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
 */ class Ia extends Nn {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Ia.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Ia(e, n, r, i);
  }
}
function Mv(t, e, n, r) {
  return (
    e === "reauthenticate"
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? Ia._fromErrorAndOperation(t, s, e, r)
      : s;
  });
}
async function RA(t, e, n = !1) {
  const r = await Ms(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
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
 */ async function PA(t, e, n = !1) {
  var r;
  const { auth: i } = t,
    s = "reauthenticate";
  try {
    const o = await Ms(t, Mv(i, s, e, t), n);
    se(o.idToken, i, "internal-error");
    const a = Sh(o.idToken);
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
 */ async function OA(t, e, n = !1) {
  const r = "signIn",
    i = await Mv(t, r, e),
    s = await xi._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
function ml(t, e, n, r) {
  return yt(t).onAuthStateChanged(e, n, r);
}
function mD(t) {
  return yt(t).signOut();
}
const Aa = "__sak";
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
 */ class $v {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Aa, "1"),
          this.storage.removeItem(Aa),
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
 */ function DA() {
  const t = vt();
  return kh(t) || pl(t);
}
const NA = 1e3,
  LA = 10;
class Vv extends $v {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = DA() && kA()),
      (this.fallbackToPolling = Dv()),
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
    SA() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, LA)
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
      }, NA));
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
Vv.type = "LOCAL";
const MA = Vv;
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
 */ class Fv extends $v {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Fv.type = "SESSION";
const Uv = Fv;
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
 */ function $A(t) {
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
 */ class gl {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new gl(e);
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
      l = await $A(a);
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
gl.receivers = [];
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
 */ function xh(t = "", e = 10) {
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
 */ class VA {
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
      const c = xh("", 20);
      i.port1.start();
      const u = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(h) {
          const d = h;
          if (d.data.eventId === c)
            switch (d.data.status) {
              case "ack":
                clearTimeout(u),
                  (s = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), a(d.data.response);
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
function FA(t) {
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
 */ function Bv() {
  return (
    typeof on().WorkerGlobalScope < "u" &&
    typeof on().importScripts == "function"
  );
}
async function UA() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function BA() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    t === void 0
      ? void 0
      : t.controller) || null
  );
}
function jA() {
  return Bv() ? self : null;
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
 */ const jv = "firebaseLocalStorageDb",
  HA = 1,
  Sa = "firebaseLocalStorage",
  Hv = "fbase_key";
class so {
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
function vl(t, e) {
  return t.transaction([Sa], e ? "readwrite" : "readonly").objectStore(Sa);
}
function zA() {
  const t = indexedDB.deleteDatabase(jv);
  return new so(t).toPromise();
}
function gu() {
  const t = indexedDB.open(jv, HA);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const r = t.result;
        try {
          r.createObjectStore(Sa, { keyPath: Hv });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener("success", async () => {
        const r = t.result;
        r.objectStoreNames.contains(Sa)
          ? e(r)
          : (r.close(), await zA(), e(await gu()));
      });
  });
}
async function fp(t, e, n) {
  const r = vl(t, !0).put({ [Hv]: e, value: n });
  return new so(r).toPromise();
}
async function WA(t, e) {
  const n = vl(t, !1).get(e),
    r = await new so(n).toPromise();
  return r === void 0 ? null : r.value;
}
function pp(t, e) {
  const n = vl(t, !0).delete(e);
  return new so(n).toPromise();
}
const KA = 800,
  GA = 3;
class zv {
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
    return this.db ? this.db : ((this.db = await gu()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > GA) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Bv() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = gl._getInstance(jA())),
      this.receiver._subscribe("keyChanged", async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await UA()), !this.activeServiceWorker))
      return;
    this.sender = new VA(this.activeServiceWorker);
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
        BA() !== this.activeServiceWorker
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
      const e = await gu();
      return await fp(e, Aa, "1"), await pp(e, Aa), !0;
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
        await this._withRetries((r) => fp(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => WA(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => pp(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = vl(i, !1).getAll();
      return new so(s).toPromise();
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
      (this.pollTimer = setInterval(async () => this._poll(), KA));
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
zv.type = "LOCAL";
const QA = zv;
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
 */ function YA() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName("head")) === null || t === void 0
      ? void 0
      : t[0]) !== null && e !== void 0
    ? e
    : document;
}
function XA(t) {
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
      YA().appendChild(r);
  });
}
function JA(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
new ro(3e4, 6e4);
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
 */ function Wv(t, e) {
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
 */ class Rh extends Lv {
  constructor(e) {
    super("custom", "custom"), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return vi(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return vi(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return vi(e, this._buildIdpRequest());
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
function ZA(t) {
  return OA(t.auth, new Rh(t), t.bypassAuthState);
}
function eS(t) {
  const { auth: e, user: n } = t;
  return se(n, e, "internal-error"), PA(n, new Rh(t), t.bypassAuthState);
}
async function tS(t) {
  const { auth: e, user: n } = t;
  return se(n, e, "internal-error"), RA(n, new Rh(t), t.bypassAuthState);
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
        return ZA;
      case "linkViaPopup":
      case "linkViaRedirect":
        return tS;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return eS;
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
 */ const nS = new ro(2e3, 1e4);
async function Vs(t, e, n) {
  const r = Ch(t);
  iA(t, e, qh);
  const i = Wv(r, n);
  return new Rr(r, "signInViaPopup", e, i).executeNotNull();
}
class Rr extends Kv {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Rr.currentPopupAction && Rr.currentPopupAction.cancel(),
      (Rr.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return se(e, this.auth, "internal-error"), e;
  }
  async onExecution() {
    In(this.filter.length === 1, "Popup operations only handle one event");
    const e = xh();
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
      (Rr.currentPopupAction = null);
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
      this.pollId = window.setTimeout(e, nS.get());
    };
    e();
  }
}
Rr.currentPopupAction = null;
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
 */ const rS = "pendingRedirect",
  na = new Map();
class iS extends Kv {
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
    let e = na.get(this.auth._key());
    if (!e) {
      try {
        const r = (await sS(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      na.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        na.set(this.auth._key(), () => Promise.resolve(null)),
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
async function sS(t, e) {
  const n = lS(e),
    r = aS(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function oS(t, e) {
  na.set(t._key(), e);
}
function aS(t) {
  return gn(t._redirectPersistence);
}
function lS(t) {
  return ta(rS, t.config.apiKey, t.name);
}
async function cS(t, e, n = !1) {
  const r = Ch(t),
    i = Wv(r, e),
    o = await new iS(r, i, n).execute();
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
 */ const uS = 10 * 60 * 1e3;
class hS {
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
        !dS(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !Gv(e)) {
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
      Date.now() - this.lastProcessedEventTime >= uS &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(mp(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(mp(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function mp(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((e) => e)
    .join("-");
}
function Gv({ type: t, error: e }) {
  return (
    t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
  );
}
function dS(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Gv(t);
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
 */ async function fS(t, e = {}) {
  return fl(t, "GET", "/v1/projects", e);
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
 */ const pS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  mS = /^https?/;
async function gS(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await fS(t);
  for (const n of e)
    try {
      if (vS(n)) return;
    } catch {}
  ln(t, "unauthorized-domain");
}
function vS(t) {
  const e = mu(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            e.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!mS.test(n)) return !1;
  if (pS.test(t)) return r === t;
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
 */ const yS = new ro(3e4, 6e4);
function gp() {
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
function _S(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      gp(),
        gapi.load("gapi.iframes", {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            gp(), n(sn(t, "network-request-failed"));
          },
          timeout: yS.get(),
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
      const a = JA("iframefcb");
      return (
        (on()[a] = () => {
          gapi.load ? o() : n(sn(t, "network-request-failed"));
        }),
        XA(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((ra = null), e);
  });
}
let ra = null;
function wS(t) {
  return (ra = ra || _S(t)), ra;
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
 */ const bS = new ro(5e3, 15e3),
  ES = "__/auth/iframe",
  TS = "emulator/auth/iframe",
  IS = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  AS = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function SS(t) {
  const e = t.config;
  se(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? Ah(e, TS) : `https://${t.config.authDomain}/${ES}`,
    r = { apiKey: e.apiKey, appName: t.name, v: no },
    i = AS.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${to(r).slice(1)}`;
}
async function kS(t) {
  const e = await wS(t),
    n = on().gapi;
  return (
    se(n, t, "internal-error"),
    e.open(
      {
        where: document.body,
        url: SS(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: IS,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = sn(t, "network-request-failed"),
            a = on().setTimeout(() => {
              s(o);
            }, bS.get());
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
 */ const CS = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  qS = 500,
  xS = 600,
  RS = "_blank",
  PS = "http://localhost";
class vp {
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
function OS(t, e, n, r = qS, i = xS) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, CS), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    c = vt().toLowerCase();
  n && (a = qv(c) ? RS : n), Cv(c) && ((e = e || PS), (l.scrollbars = "yes"));
  const u = Object.entries(l).reduce((d, [f, g]) => `${d}${f}=${g},`, "");
  if (AA(c) && a !== "_self") return DS(e || "", a), new vp(null);
  const h = window.open(e || "", a, u);
  se(h, t, "popup-blocked");
  try {
    h.focus();
  } catch {}
  return new vp(h);
}
function DS(t, e) {
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
 */ const NS = "__/auth/handler",
  LS = "emulator/auth/handler";
function yp(t, e, n, r, i, s) {
  se(t.config.authDomain, t, "auth-domain-config-required"),
    se(t.config.apiKey, t, "invalid-api-key");
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: no,
    eventId: i,
  };
  if (e instanceof qh) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ""),
      KT(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [l, c] of Object.entries(s || {})) o[l] = c;
  }
  if (e instanceof io) {
    const l = e.getScopes().filter((c) => c !== "");
    l.length > 0 && (o.scopes = l.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
  return `${MS(t)}?${to(a).slice(1)}`;
}
function MS({ config: t }) {
  return t.emulator ? Ah(t, LS) : `https://${t.authDomain}/${NS}`;
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
 */ const Sc = "webStorageSupport";
class $S {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Uv),
      (this._completeRedirectFn = cS),
      (this._overrideRedirectResult = oS);
  }
  async _openPopup(e, n, r, i) {
    var s;
    In(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = yp(e, n, r, mu(), i);
    return OS(e, o, xh());
  }
  async _openRedirect(e, n, r, i) {
    return (
      await this._originValidation(e),
      FA(yp(e, n, r, mu(), i)),
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
    const n = await kS(e),
      r = new hS(e);
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
      Sc,
      { type: Sc },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[Sc];
        o !== void 0 && n(!!o), ln(e, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = gS(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Dv() || kh() || pl();
  }
}
const VS = $S;
var _p = "@firebase/auth",
  wp = "0.20.7";
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
 */ class FS {
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
 */ function US(t) {
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
function BS(t) {
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
              sdkClientVersion: Nv(t),
            },
            u = new qA(a, l, c);
          return oA(u, n), u;
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
          const n = Ch(e.getProvider("auth").getImmediate());
          return ((r) => new FS(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    or(_p, wp, US(t)),
    or(_p, wp, "esm2017");
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
 */ function oo(t = vv()) {
  const e = Eh(t, "auth");
  return e.isInitialized()
    ? e.getImmediate()
    : sA(t, { popupRedirectResolver: VS, persistence: [QA, MA, Uv] });
}
BS("Browser");
var jS =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  z,
  Ph = Ph || {},
  re = jS || self;
function ka() {}
function yl(t) {
  var e = typeof t;
  return (
    (e = e != "object" ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
    e == "array" || (e == "object" && typeof t.length == "number")
  );
}
function ao(t) {
  var e = typeof t;
  return (e == "object" && t != null) || e == "function";
}
function HS(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, kc) && t[kc]) || (t[kc] = ++zS)
  );
}
var kc = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  zS = 0;
function WS(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function KS(t, e, n) {
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
      ? (pt = WS)
      : (pt = KS),
    pt.apply(null, arguments)
  );
}
function $o(t, e) {
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
var GS = 0;
dr.prototype.s = !1;
dr.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), GS != 0) && HS(this);
};
dr.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const Qv = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == "string")
        return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function Oh(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function bp(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (yl(r)) {
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
var QS = (function () {
  if (!re.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
  try {
    re.addEventListener("test", ka, e), re.removeEventListener("test", ka, e);
  } catch {}
  return t;
})();
function Ca(t) {
  return /^[\s\xa0]*$/.test(t);
}
var Ep = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function Cc(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function _l() {
  var t = re.navigator;
  return t && (t = t.userAgent) ? t : "";
}
function nn(t) {
  return _l().indexOf(t) != -1;
}
function Dh(t) {
  return Dh[" "](t), t;
}
Dh[" "] = ka;
function YS(t) {
  var e = ZS;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var XS = nn("Opera"),
  Ri = nn("Trident") || nn("MSIE"),
  Yv = nn("Edge"),
  vu = Yv || Ri,
  Xv =
    nn("Gecko") &&
    !(_l().toLowerCase().indexOf("webkit") != -1 && !nn("Edge")) &&
    !(nn("Trident") || nn("MSIE")) &&
    !nn("Edge"),
  JS = _l().toLowerCase().indexOf("webkit") != -1 && !nn("Edge");
function Jv() {
  var t = re.document;
  return t ? t.documentMode : void 0;
}
var qa;
e: {
  var qc = "",
    xc = (function () {
      var t = _l();
      if (Xv) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (Yv) return /Edge\/([\d\.]+)/.exec(t);
      if (Ri) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (JS) return /WebKit\/(\S+)/.exec(t);
      if (XS) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((xc && (qc = xc ? xc[1] : ""), Ri)) {
    var Rc = Jv();
    if (Rc != null && Rc > parseFloat(qc)) {
      qa = String(Rc);
      break e;
    }
  }
  qa = qc;
}
var ZS = {};
function ek() {
  return YS(function () {
    let t = 0;
    const e = Ep(String(qa)).split("."),
      n = Ep("9").split("."),
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
          Cc(
            i[1].length == 0 ? 0 : parseInt(i[1], 10),
            s[1].length == 0 ? 0 : parseInt(s[1], 10)
          ) ||
          Cc(i[2].length == 0, s[2].length == 0) ||
          Cc(i[2], s[2])),
          (i = i[3]),
          (s = s[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var yu;
if (re.document && Ri) {
  var Tp = Jv();
  yu = Tp || parseInt(qa, 10) || void 0;
} else yu = void 0;
var tk = yu;
function Fs(t, e) {
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
      if (Xv) {
        e: {
          try {
            Dh(e.nodeName);
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
          : nk[t.pointerType] || ""),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Fs.X.h.call(this);
  }
}
lt(Fs, mt);
var nk = { 2: "touch", 3: "pen", 4: "mouse" };
Fs.prototype.h = function () {
  Fs.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var lo = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  rk = 0;
function ik(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ha = i),
    (this.key = ++rk),
    (this.ba = this.ea = !1);
}
function wl(t) {
  (t.ba = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.ha = null);
}
function Nh(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function Zv(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const Ip =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function ey(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < Ip.length; s++)
      (n = Ip[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function bl(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
bl.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = wu(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new ik(e, this.src, s, !!r, i)), (e.ea = n), t.push(e)),
    e
  );
};
function _u(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = Qv(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (wl(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function wu(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.ba && s.listener == e && s.capture == !!n && s.ha == r) return i;
  }
  return -1;
}
var Lh = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Pc = {};
function ty(t, e, n, r, i) {
  if (r && r.once) return ry(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) ty(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Vh(n)),
    t && t[lo] ? t.N(e, n, ao(r) ? !!r.capture : !!r, i) : ny(t, e, n, !1, r, i)
  );
}
function ny(t, e, n, r, i, s) {
  if (!e) throw Error("Invalid event type");
  var o = ao(i) ? !!i.capture : !!i,
    a = $h(t);
  if ((a || (t[Lh] = a = new bl(t)), (n = a.add(e, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = sk()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    QS || (i = o),
      i === void 0 && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(sy(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function sk() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = ok;
  return t;
}
function ry(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) ry(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Vh(n)),
    t && t[lo] ? t.O(e, n, ao(r) ? !!r.capture : !!r, i) : ny(t, e, n, !0, r, i)
  );
}
function iy(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) iy(t, e[s], n, r, i);
  else
    (r = ao(r) ? !!r.capture : !!r),
      (n = Vh(n)),
      t && t[lo]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = wu(s, n, r, i)),
            -1 < n &&
              (wl(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = $h(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = wu(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && Mh(n));
}
function Mh(t) {
  if (typeof t != "number" && t && !t.ba) {
    var e = t.src;
    if (e && e[lo]) _u(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(sy(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = $h(e))
          ? (_u(n, t), n.h == 0 && ((n.src = null), (e[Lh] = null)))
          : wl(t);
    }
  }
}
function sy(t) {
  return t in Pc ? Pc[t] : (Pc[t] = "on" + t);
}
function ok(t, e) {
  if (t.ba) t = !0;
  else {
    e = new Fs(e, this);
    var n = t.listener,
      r = t.ha || t.src;
    t.ea && Mh(t), (t = n.call(r, e));
  }
  return t;
}
function $h(t) {
  return (t = t[Lh]), t instanceof bl ? t : null;
}
var Oc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Vh(t) {
  return typeof t == "function"
    ? t
    : (t[Oc] ||
        (t[Oc] = function (e) {
          return t.handleEvent(e);
        }),
      t[Oc]);
}
function Ze() {
  dr.call(this), (this.i = new bl(this)), (this.P = this), (this.I = null);
}
lt(Ze, dr);
Ze.prototype[lo] = !0;
Ze.prototype.removeEventListener = function (t, e, n, r) {
  iy(this, t, e, n, r);
};
function st(t, e) {
  var n,
    r = t.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((t = t.P), (r = e.type || e), typeof e == "string")) e = new mt(e, t);
  else if (e instanceof mt) e.target = e.target || t;
  else {
    var i = e;
    (e = new mt(r, t)), ey(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = Vo(o, r, !0, e) && i;
    }
  if (
    ((o = e.g = t), (i = Vo(o, r, !0, e) && i), (i = Vo(o, r, !1, e) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = Vo(o, r, !1, e) && i);
}
Ze.prototype.M = function () {
  if ((Ze.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) wl(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.I = null;
};
Ze.prototype.N = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
Ze.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function Vo(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        l = o.ha || o.src;
      o.ea && _u(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Fh = re.JSON.stringify;
function ak() {
  var t = ly;
  let e = null;
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  );
}
class lk {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = oy.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var oy = new (class {
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
  () => new ck(),
  (t) => t.reset()
);
class ck {
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
function uk(t) {
  re.setTimeout(() => {
    throw t;
  }, 0);
}
function ay(t, e) {
  bu || hk(), Eu || (bu(), (Eu = !0)), ly.add(t, e);
}
var bu;
function hk() {
  var t = re.Promise.resolve(void 0);
  bu = function () {
    t.then(dk);
  };
}
var Eu = !1,
  ly = new lk();
function dk() {
  for (var t; (t = ak()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      uk(n);
    }
    var e = oy;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Eu = !1;
}
function El(t, e) {
  Ze.call(this),
    (this.h = t || 1),
    (this.g = e || re),
    (this.j = pt(this.kb, this)),
    (this.l = Date.now());
}
lt(El, Ze);
z = El.prototype;
z.ca = !1;
z.R = null;
z.kb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        st(this, "tick"),
        this.ca && (Uh(this), this.start()));
  }
};
z.start = function () {
  (this.ca = !0),
    this.R ||
      ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Uh(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
z.M = function () {
  El.X.M.call(this), Uh(this), delete this.g;
};
function Bh(t, e, n) {
  if (typeof t == "function") n && (t = pt(t, n));
  else if (t && typeof t.handleEvent == "function") t = pt(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : re.setTimeout(t, e || 0);
}
function cy(t) {
  t.g = Bh(() => {
    (t.g = null), t.i && ((t.i = !1), cy(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class fk extends dr {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : cy(this);
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
function Us(t) {
  dr.call(this), (this.h = t), (this.g = {});
}
lt(Us, dr);
var Ap = [];
function uy(t, e, n, r) {
  Array.isArray(n) || (n && (Ap[0] = n.toString()), (n = Ap));
  for (var i = 0; i < n.length; i++) {
    var s = ty(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function hy(t) {
  Nh(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && Mh(e);
    },
    t
  ),
    (t.g = {});
}
Us.prototype.M = function () {
  Us.X.M.call(this), hy(this);
};
Us.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Tl() {
  this.g = !0;
}
Tl.prototype.Aa = function () {
  this.g = !1;
};
function pk(t, e, n, r, i, s) {
  t.info(function () {
    if (t.g)
      if (s)
        for (var o = "", a = s.split("&"), l = 0; l < a.length; l++) {
          var c = a[l].split("=");
          if (1 < c.length) {
            var u = c[0];
            c = c[1];
            var h = u.split("_");
            o =
              2 <= h.length && h[1] == "type"
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
function mk(t, e, n, r, i, s, o) {
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
function li(t, e, n, r) {
  t.info(function () {
    return "XMLHTTP TEXT (" + e + "): " + vk(t, n) + (r ? " " + r : "");
  });
}
function gk(t, e) {
  t.info(function () {
    return "TIMEOUT: " + e;
  });
}
Tl.prototype.info = function () {};
function vk(t, e) {
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
    return Fh(n);
  } catch {
    return e;
  }
}
var Yr = {},
  Sp = null;
function Il() {
  return (Sp = Sp || new Ze());
}
Yr.Oa = "serverreachability";
function dy(t) {
  mt.call(this, Yr.Oa, t);
}
lt(dy, mt);
function Bs(t) {
  const e = Il();
  st(e, new dy(e));
}
Yr.STAT_EVENT = "statevent";
function fy(t, e) {
  mt.call(this, Yr.STAT_EVENT, t), (this.stat = e);
}
lt(fy, mt);
function Et(t) {
  const e = Il();
  st(e, new fy(e, t));
}
Yr.Pa = "timingevent";
function py(t, e) {
  mt.call(this, Yr.Pa, t), (this.size = e);
}
lt(py, mt);
function co(t, e) {
  if (typeof t != "function")
    throw Error("Fn must not be null and must be a function");
  return re.setTimeout(function () {
    t();
  }, e);
}
var Al = {
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
  my = {
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
function jh() {}
jh.prototype.h = null;
function kp(t) {
  return t.h || (t.h = t.i());
}
function gy() {}
var uo = { OPEN: "a", pb: "b", Ma: "c", Bb: "d" };
function Hh() {
  mt.call(this, "d");
}
lt(Hh, mt);
function zh() {
  mt.call(this, "c");
}
lt(zh, mt);
var Tu;
function Sl() {}
lt(Sl, jh);
Sl.prototype.g = function () {
  return new XMLHttpRequest();
};
Sl.prototype.i = function () {
  return {};
};
Tu = new Sl();
function ho(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = r || 1),
    (this.S = new Us(this)),
    (this.O = yk),
    (t = vu ? 125 : void 0),
    (this.T = new El(t)),
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
    (this.h = new vy());
}
function vy() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var yk = 45e3,
  Iu = {},
  xa = {};
z = ho.prototype;
z.setTimeout = function (t) {
  this.O = t;
};
function Au(t, e, n) {
  (t.K = 1), (t.v = Cl(An(e))), (t.s = n), (t.P = !0), yy(t, null);
}
function yy(t, e) {
  (t.F = Date.now()), fo(t), (t.A = An(t.v));
  var n = t.A,
    r = t.U;
  Array.isArray(r) || (r = [String(r)]),
    Sy(n.i, "t", r),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new vy()),
    (t.g = Ky(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new fk(pt(t.Ka, t, t.g), t.N)),
    uy(t.S, t.g, "readystatechange", t.hb),
    (e = t.H ? Zv(t.H) : {}),
    t.s
      ? (t.u || (t.u = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = "GET"), t.g.da(t.A, t.u, null, e)),
    Bs(),
    pk(t.j, t.u, t.A, t.m, t.U, t.s);
}
z.hb = function (t) {
  t = t.target;
  const e = this.L;
  e && vn(t) == 3 ? e.l() : this.Ka(t);
};
z.Ka = function (t) {
  try {
    if (t == this.g)
      e: {
        const u = vn(this.g);
        var e = this.g.Ea();
        const h = this.g.aa();
        if (
          !(3 > u) &&
          (u != 3 || vu || (this.g && (this.h.h || this.g.fa() || Rp(this.g))))
        ) {
          this.I || u != 4 || e == 7 || (e == 8 || 0 >= h ? Bs(3) : Bs(2)),
            kl(this);
          var n = this.g.aa();
          this.Y = n;
          t: if (_y(this)) {
            var r = Rp(this.g);
            t = "";
            var i = r.length,
              s = vn(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Pr(this), ys(this);
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
            mk(this.j, this.u, this.A, this.m, this.U, u, n),
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
                    !Ca(a)
                  ) {
                    var c = a;
                    break t;
                  }
                }
                c = null;
              }
              if ((n = c))
                li(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.J = !0),
                  Su(this, n);
              else {
                (this.i = !1), (this.o = 3), Et(12), Pr(this), ys(this);
                break e;
              }
            }
            this.P
              ? (wy(this, u, o),
                vu &&
                  this.i &&
                  u == 3 &&
                  (uy(this.S, this.T, "tick", this.gb), this.T.start()))
              : (li(this.j, this.m, o, null), Su(this, o)),
              u == 4 && Pr(this),
              this.i &&
                !this.I &&
                (u == 4 ? jy(this.l, this) : ((this.i = !1), fo(this)));
          } else
            n == 400 && 0 < o.indexOf("Unknown SID")
              ? ((this.o = 3), Et(12))
              : ((this.o = 0), Et(13)),
              Pr(this),
              ys(this);
        }
      }
  } catch {
  } finally {
  }
};
function _y(t) {
  return t.g ? t.u == "GET" && t.K != 2 && t.l.Da : !1;
}
function wy(t, e, n) {
  let r = !0,
    i;
  for (; !t.I && t.C < n.length; )
    if (((i = _k(t, n)), i == xa)) {
      e == 4 && ((t.o = 4), Et(14), (r = !1)),
        li(t.j, t.m, null, "[Incomplete Response]");
      break;
    } else if (i == Iu) {
      (t.o = 4), Et(15), li(t.j, t.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else li(t.j, t.m, i, null), Su(t, i);
  _y(t) && i != xa && i != Iu && ((t.h.g = ""), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), Et(16), (r = !1)),
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
          Jh(e),
          (e.K = !0),
          Et(11)))
      : (li(t.j, t.m, n, "[Invalid Chunked Response]"), Pr(t), ys(t));
}
z.gb = function () {
  if (this.g) {
    var t = vn(this.g),
      e = this.g.fa();
    this.C < e.length &&
      (kl(this), wy(this, t, e), this.i && t != 4 && fo(this));
  }
};
function _k(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? xa
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? Iu
        : ((r += 1),
          r + n > e.length ? xa : ((e = e.substr(r, n)), (t.C = r + n), e)));
}
z.cancel = function () {
  (this.I = !0), Pr(this);
};
function fo(t) {
  (t.V = Date.now() + t.O), by(t, t.O);
}
function by(t, e) {
  if (t.B != null) throw Error("WatchDog timer not null");
  t.B = co(pt(t.fb, t), e);
}
function kl(t) {
  t.B && (re.clearTimeout(t.B), (t.B = null));
}
z.fb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (gk(this.j, this.A),
      this.K != 2 && (Bs(), Et(17)),
      Pr(this),
      (this.o = 2),
      ys(this))
    : by(this, this.V - t);
};
function ys(t) {
  t.l.G == 0 || t.I || jy(t.l, t);
}
function Pr(t) {
  kl(t);
  var e = t.L;
  e && typeof e.na == "function" && e.na(),
    (t.L = null),
    Uh(t.T),
    hy(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function Su(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || ku(n.h, t))) {
      if (!t.J && ku(n.h, t) && n.G == 3) {
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
                if (n.g.F + 3e3 < t.F) Oa(n), Rl(n);
                else break e;
              Xh(n), Et(18);
            }
          } else
            (n.Ba = i[1]),
              0 < n.Ba - n.T &&
                37500 > i[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = co(pt(n.bb, n), 6e3));
          if (1 >= qy(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else Or(n, 11);
      } else if (((t.J || n.g == t) && Oa(n), !Ca(e)))
        for (i = n.Fa.g.parse(e), e = 0; e < i.length; e++) {
          let c = i[e];
          if (((n.T = c[0]), (c = c[1]), n.G == 2))
            if (c[0] == "c") {
              (n.I = c[1]), (n.ka = c[2]);
              const u = c[3];
              u != null && ((n.ma = u), n.j.info("VER=" + n.ma));
              const h = c[4];
              h != null && ((n.Ca = h), n.j.info("SVER=" + n.Ca));
              const d = c[5];
              d != null &&
                typeof d == "number" &&
                0 < d &&
                ((r = 1.5 * d),
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
                    s.h && (Wh(s, s.h), (s.h = null)));
                }
                if (r.D) {
                  const v = f.g
                    ? f.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  v && ((r.za = v), $e(r.F, r.D, v));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ &&
                  ((n.P = Date.now() - t.F),
                  n.j.info("Handshake RTT: " + n.P + "ms")),
                (r = n);
              var o = t;
              if (((r.sa = Wy(r, r.H ? r.ka : null, r.V)), o.J)) {
                xy(r.h, o);
                var a = o,
                  l = r.J;
                l && a.setTimeout(l), a.B && (kl(a), fo(a)), (r.g = o);
              } else Uy(r);
              0 < n.i.length && Pl(n);
            } else (c[0] != "stop" && c[0] != "close") || Or(n, 7);
          else
            n.G == 3 &&
              (c[0] == "stop" || c[0] == "close"
                ? c[0] == "stop"
                  ? Or(n, 7)
                  : Yh(n)
                : c[0] != "noop" && n.l && n.l.wa(c),
              (n.A = 0));
        }
    }
    Bs(4);
  } catch {}
}
function wk(t) {
  if (t.W && typeof t.W == "function") return t.W();
  if (
    (typeof Map < "u" && t instanceof Map) ||
    (typeof Set < "u" && t instanceof Set)
  )
    return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (yl(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function bk(t) {
  if (t.oa && typeof t.oa == "function") return t.oa();
  if (!t.W || typeof t.W != "function") {
    if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < "u" && t instanceof Set)) {
      if (yl(t) || typeof t == "string") {
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
function Ey(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (yl(t) || typeof t == "string")
    Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = bk(t), r = wk(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var Ty = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function Ek(t, e) {
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
function $r(t, e) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    t instanceof $r)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      Ra(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      Pa(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new js();
    (n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      Cp(this, n),
      (this.o = t.o);
  } else
    t && (n = String(t).match(Ty))
      ? ((this.h = !!e),
        Ra(this, n[1] || "", !0),
        (this.s = ls(n[2] || "")),
        (this.g = ls(n[3] || "", !0)),
        Pa(this, n[4]),
        (this.l = ls(n[5] || "", !0)),
        Cp(this, n[6] || "", !0),
        (this.o = ls(n[7] || "")))
      : ((this.h = !!e), (this.i = new js(null, this.h)));
}
$r.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(cs(e, qp, !0), ":");
  var n = this.g;
  return (
    (n || e == "file") &&
      (t.push("//"),
      (e = this.s) && t.push(cs(e, qp, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && t.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && t.push("/"),
      t.push(cs(n, n.charAt(0) == "/" ? Ak : Ik, !0))),
    (n = this.i.toString()) && t.push("?", n),
    (n = this.o) && t.push("#", cs(n, kk)),
    t.join("")
  );
};
function An(t) {
  return new $r(t);
}
function Ra(t, e, n) {
  (t.j = n ? ls(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
}
function Pa(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.m = e;
  } else t.m = null;
}
function Cp(t, e, n) {
  e instanceof js
    ? ((t.i = e), Ck(t.i, t.h))
    : (n || (e = cs(e, Sk)), (t.i = new js(e, t.h)));
}
function $e(t, e, n) {
  t.i.set(e, n);
}
function Cl(t) {
  return (
    $e(
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
function ls(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function cs(t, e, n) {
  return typeof t == "string"
    ? ((t = encodeURI(t).replace(e, Tk)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function Tk(t) {
  return (
    (t = t.charCodeAt(0)),
    "%" + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  );
}
var qp = /[#\/\?@]/g,
  Ik = /[#\?:]/g,
  Ak = /[#\?]/g,
  Sk = /[#\?@]/g,
  kk = /#/g;
function js(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function fr(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      Ek(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
z = js.prototype;
z.add = function (t, e) {
  fr(this), (this.i = null), (t = Wi(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Iy(t, e) {
  fr(t),
    (e = Wi(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function Ay(t, e) {
  return fr(t), (e = Wi(t, e)), t.g.has(e);
}
z.forEach = function (t, e) {
  fr(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
z.oa = function () {
  fr(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
z.W = function (t) {
  fr(this);
  let e = [];
  if (typeof t == "string")
    Ay(this, t) && (e = e.concat(this.g.get(Wi(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
z.set = function (t, e) {
  return (
    fr(this),
    (this.i = null),
    (t = Wi(this, t)),
    Ay(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
z.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function Sy(t, e, n) {
  Iy(t, e),
    0 < n.length && ((t.i = null), t.g.set(Wi(t, e), Oh(n)), (t.h += n.length));
}
z.toString = function () {
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
function Wi(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function Ck(t, e) {
  e &&
    !t.j &&
    (fr(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Iy(this, r), Sy(this, i, n));
    }, t)),
    (t.j = e);
}
var qk = class {
  constructor(t, e) {
    (this.h = t), (this.g = e);
  }
};
function ky(t) {
  (this.l = t || xk),
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
var xk = 10;
function Cy(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function qy(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function ku(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function Wh(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function xy(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
ky.prototype.cancel = function () {
  if (((this.i = Ry(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function Ry(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return Oh(t.i);
}
function Kh() {}
Kh.prototype.stringify = function (t) {
  return re.JSON.stringify(t, void 0);
};
Kh.prototype.parse = function (t) {
  return re.JSON.parse(t, void 0);
};
function Rk() {
  this.g = new Kh();
}
function Pk(t, e, n) {
  const r = n || "";
  try {
    Ey(t, function (i, s) {
      let o = i;
      ao(i) && (o = Fh(i)), e.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function Ok(t, e) {
  const n = new Tl();
  if (re.Image) {
    const r = new Image();
    (r.onload = $o(Fo, n, r, "TestLoadImage: loaded", !0, e)),
      (r.onerror = $o(Fo, n, r, "TestLoadImage: error", !1, e)),
      (r.onabort = $o(Fo, n, r, "TestLoadImage: abort", !1, e)),
      (r.ontimeout = $o(Fo, n, r, "TestLoadImage: timeout", !1, e)),
      re.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function Fo(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch {}
}
function po(t) {
  (this.l = t.$b || null), (this.j = t.ib || !1);
}
lt(po, jh);
po.prototype.g = function () {
  return new ql(this.l, this.j);
};
po.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function ql(t, e) {
  Ze.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = Gh),
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
lt(ql, Ze);
var Gh = 0;
z = ql.prototype;
z.open = function (t, e) {
  if (this.readyState != Gh)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = t), (this.B = e), (this.readyState = 1), Hs(this);
};
z.send = function (t) {
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
z.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), mo(this)),
    (this.readyState = Gh);
};
z.Va = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      Hs(this)),
    this.g && ((this.readyState = 3), Hs(this), this.g))
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
      Py(this);
    } else t.text().then(this.Ua.bind(this), this.ga.bind(this));
};
function Py(t) {
  t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t));
}
z.Sa = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e);
    }
    t.done ? mo(this) : Hs(this), this.readyState == 3 && Py(this);
  }
};
z.Ua = function (t) {
  this.g && ((this.response = this.responseText = t), mo(this));
};
z.Ta = function (t) {
  this.g && ((this.response = t), mo(this));
};
z.ga = function () {
  this.g && mo(this);
};
function mo(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Hs(t);
}
z.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
z.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || "";
};
z.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function Hs(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(ql.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (t) {
    this.m = t ? "include" : "same-origin";
  },
});
var Dk = re.JSON.parse;
function je(t) {
  Ze.call(this),
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
    (this.J = Oy),
    (this.K = this.L = !1);
}
lt(je, Ze);
var Oy = "",
  Nk = /^https?$/i,
  Lk = ["POST", "PUT"];
z = je.prototype;
z.da = function (t, e, n, r) {
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
    (this.g = this.u ? this.u.g() : Tu.g()),
    (this.C = this.u ? kp(this.u) : kp(Tu)),
    (this.g.onreadystatechange = pt(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (s) {
    xp(this, s);
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
    !(0 <= Qv(Lk, e)) ||
      r ||
      i ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.J && (this.g.responseType = this.J),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    Ly(this),
      0 < this.B &&
        ((this.K = Mk(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = pt(this.qa, this)))
          : (this.A = Bh(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    xp(this, s);
  }
};
function Mk(t) {
  return Ri && ek() && typeof t.timeout == "number" && t.ontimeout !== void 0;
}
z.qa = function () {
  typeof Ph < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    st(this, "timeout"),
    this.abort(8));
};
function xp(t, e) {
  (t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    Dy(t),
    xl(t);
}
function Dy(t) {
  t.D || ((t.D = !0), st(t, "complete"), st(t, "error"));
}
z.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    st(this, "complete"),
    st(this, "abort"),
    xl(this));
};
z.M = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    xl(this, !0)),
    je.X.M.call(this);
};
z.Ha = function () {
  this.s || (this.F || this.v || this.l ? Ny(this) : this.eb());
};
z.eb = function () {
  Ny(this);
};
function Ny(t) {
  if (t.h && typeof Ph < "u" && (!t.C[1] || vn(t) != 4 || t.aa() != 2)) {
    if (t.v && vn(t) == 4) Bh(t.Ha, 0, t);
    else if ((st(t, "readystatechange"), vn(t) == 4)) {
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
            var i = String(t.H).match(Ty)[1] || null;
            if (!i && re.self && re.self.location) {
              var s = re.self.location.protocol;
              i = s.substr(0, s.length - 1);
            }
            r = !Nk.test(i ? i.toLowerCase() : "");
          }
          n = r;
        }
        if (n) st(t, "complete"), st(t, "success");
        else {
          t.m = 6;
          try {
            var o = 2 < vn(t) ? t.g.statusText : "";
          } catch {
            o = "";
          }
          (t.j = o + " [" + t.aa() + "]"), Dy(t);
        }
      } finally {
        xl(t);
      }
    }
  }
}
function xl(t, e) {
  if (t.g) {
    Ly(t);
    const n = t.g,
      r = t.C[0] ? ka : null;
    (t.g = null), (t.C = null), e || st(t, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function Ly(t) {
  t.g && t.K && (t.g.ontimeout = null),
    t.A && (re.clearTimeout(t.A), (t.A = null));
}
function vn(t) {
  return t.g ? t.g.readyState : 0;
}
z.aa = function () {
  try {
    return 2 < vn(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
z.fa = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
z.Ra = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), Dk(e);
  }
};
function Rp(t) {
  try {
    if (!t.g) return null;
    if ("response" in t.g) return t.g.response;
    switch (t.J) {
      case Oy:
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
z.Ea = function () {
  return this.m;
};
z.Na = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function My(t) {
  let e = "";
  return (
    Nh(t, function (n, r) {
      (e += r),
        (e += ":"),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function Qh(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = My(n)),
    typeof t == "string"
      ? n != null && encodeURIComponent(String(n))
      : $e(t, e, n));
}
function rs(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function $y(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new Tl()),
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
    (this.Ya = rs("failFast", !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Wa = rs("baseRetryDelayMs", 5e3, t)),
    (this.ab = rs("retryDelaySeedMs", 1e4, t)),
    (this.Za = rs("forwardChannelMaxRetries", 2, t)),
    (this.ta = rs("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Yb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ""),
    (this.h = new ky(t && t.concurrentRequestLimit)),
    (this.Fa = new Rk()),
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
z = $y.prototype;
z.ma = 8;
z.G = 1;
function Yh(t) {
  if ((Vy(t), t.G == 3)) {
    var e = t.U++,
      n = An(t.F);
    $e(n, "SID", t.I),
      $e(n, "RID", e),
      $e(n, "TYPE", "terminate"),
      go(t, n),
      (e = new ho(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = Cl(An(n))),
      (n = !1),
      re.navigator &&
        re.navigator.sendBeacon &&
        (n = re.navigator.sendBeacon(e.v.toString(), "")),
      !n && re.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = Ky(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      fo(e);
  }
  zy(t);
}
function Rl(t) {
  t.g && (Jh(t), t.g.cancel(), (t.g = null));
}
function Vy(t) {
  Rl(t),
    t.u && (re.clearTimeout(t.u), (t.u = null)),
    Oa(t),
    t.h.cancel(),
    t.m && (typeof t.m == "number" && re.clearTimeout(t.m), (t.m = null));
}
function Pl(t) {
  Cy(t.h) || t.m || ((t.m = !0), ay(t.Ja, t), (t.C = 0));
}
function $k(t, e) {
  return qy(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Ya ? 0 : t.Za)
    ? !1
    : ((t.m = co(pt(t.Ja, t, e), Hy(t, t.C))), t.C++, !0);
}
z.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const i = new ho(this, this.j, t, void 0);
        let s = this.s;
        if (
          (this.S && (s ? ((s = Zv(s)), ey(s, this.S)) : (s = this.S)),
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
        (e = Fy(this, i, e)),
          (n = An(this.F)),
          $e(n, "RID", t),
          $e(n, "CVER", 22),
          this.D && $e(n, "X-HTTP-Session-Id", this.D),
          go(this, n),
          s &&
            (this.N
              ? (e = "headers=" + encodeURIComponent(String(My(s))) + "&" + e)
              : this.o && Qh(n, this.o, s)),
          Wh(this.h, i),
          this.Xa && $e(n, "TYPE", "init"),
          this.O
            ? ($e(n, "$req", e),
              $e(n, "SID", "null"),
              (i.Z = !0),
              Au(i, n, null))
            : Au(i, n, e),
          (this.G = 2);
      }
    } else
      this.G == 3 &&
        (t ? Pp(this, t) : this.i.length == 0 || Cy(this.h) || Pp(this));
};
function Pp(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const r = An(t.F);
  $e(r, "SID", t.I),
    $e(r, "RID", n),
    $e(r, "AID", t.T),
    go(t, r),
    t.o && t.s && Qh(r, t.o, t.s),
    (n = new ho(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = Fy(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())
    ),
    Wh(t.h, n),
    Au(n, r, e);
}
function go(t, e) {
  t.ia &&
    Nh(t.ia, function (n, r) {
      $e(e, r, n);
    }),
    t.l &&
      Ey({}, function (n, r) {
        $e(e, r, n);
      });
}
function Fy(t, e, n) {
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
            Pk(u, o, "req" + c + "_");
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
function Uy(t) {
  t.g || t.u || ((t.Z = 1), ay(t.Ia, t), (t.A = 0));
}
function Xh(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.Z++, (t.u = co(pt(t.Ia, t), Hy(t, t.A))), t.A++, !0);
}
z.Ia = function () {
  if (
    ((this.u = null),
    By(this),
    this.$ && !(this.K || this.g == null || 0 >= this.P))
  ) {
    var t = 2 * this.P;
    this.j.info("BP detection timer enabled: " + t),
      (this.B = co(pt(this.cb, this), t));
  }
};
z.cb = function () {
  this.B &&
    ((this.B = null),
    this.j.info("BP detection timeout reached."),
    this.j.info("Buffering proxy detected and switch to long-polling!"),
    (this.L = !1),
    (this.K = !0),
    Et(10),
    Rl(this),
    By(this));
};
function Jh(t) {
  t.B != null && (re.clearTimeout(t.B), (t.B = null));
}
function By(t) {
  (t.g = new ho(t, t.j, "rpc", t.Z)),
    t.o === null && (t.g.H = t.s),
    (t.g.N = 0);
  var e = An(t.sa);
  $e(e, "RID", "rpc"),
    $e(e, "SID", t.I),
    $e(e, "CI", t.L ? "0" : "1"),
    $e(e, "AID", t.T),
    $e(e, "TYPE", "xmlhttp"),
    go(t, e),
    t.o && t.s && Qh(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = Cl(An(e))), (n.s = null), (n.P = !0), yy(n, t);
}
z.bb = function () {
  this.v != null && ((this.v = null), Rl(this), Xh(this), Et(19));
};
function Oa(t) {
  t.v != null && (re.clearTimeout(t.v), (t.v = null));
}
function jy(t, e) {
  var n = null;
  if (t.g == e) {
    Oa(t), Jh(t), (t.g = null);
    var r = 2;
  } else if (ku(t.h, e)) (n = e.D), xy(t.h, e), (r = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var i = t.C;
        (r = Il()), st(r, new py(r, n)), Pl(t);
      } else Uy(t);
    else if (
      ((i = e.o),
      i == 3 ||
        (i == 0 && 0 < t.pa) ||
        !((r == 1 && $k(t, e)) || (r == 2 && Xh(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), i)) {
        case 1:
          Or(t, 5);
          break;
        case 4:
          Or(t, 10);
          break;
        case 3:
          Or(t, 6);
          break;
        default:
          Or(t, 2);
      }
  }
}
function Hy(t, e) {
  let n = t.Wa + Math.floor(Math.random() * t.ab);
  return t.l || (n *= 2), n * e;
}
function Or(t, e) {
  if ((t.j.info("Error code " + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var r = pt(t.jb, t);
    n ||
      ((n = new $r("//www.google.com/images/cleardot.gif")),
      (re.location && re.location.protocol == "http") || Ra(n, "https"),
      Cl(n)),
      Ok(n.toString(), r);
  } else Et(2);
  (t.G = 0), t.l && t.l.va(e), zy(t), Vy(t);
}
z.jb = function (t) {
  t
    ? (this.j.info("Successfully pinged google.com"), Et(2))
    : (this.j.info("Failed to ping google.com"), Et(1));
};
function zy(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = Ry(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (bp(t.la, e),
      bp(t.la, t.i),
      (t.h.i.length = 0),
      Oh(t.i),
      (t.i.length = 0)),
      t.l.ua();
  }
}
function Wy(t, e, n) {
  var r = n instanceof $r ? An(n) : new $r(n, void 0);
  if (r.g != "") e && (r.g = e + "." + r.g), Pa(r, r.m);
  else {
    var i = re.location;
    (r = i.protocol),
      (e = e ? e + "." + i.hostname : i.hostname),
      (i = +i.port);
    var s = new $r(null, void 0);
    r && Ra(s, r), e && (s.g = e), i && Pa(s, i), n && (s.l = n), (r = s);
  }
  return (
    (n = t.D),
    (e = t.za),
    n && e && $e(r, n, e),
    $e(r, "VER", t.ma),
    go(t, r),
    r
  );
}
function Ky(t, e, n) {
  if (e && !t.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (e = n && t.Da && !t.ra ? new je(new po({ ib: !0 })) : new je(t.ra)),
    (e.L = t.H),
    e
  );
}
function Gy() {}
z = Gy.prototype;
z.xa = function () {};
z.wa = function () {};
z.va = function () {};
z.ua = function () {};
z.Qa = function () {};
function Da() {
  if (Ri && !(10 <= Number(tk)))
    throw Error("Environmental error: no available transport.");
}
Da.prototype.g = function (t, e) {
  return new Nt(t, e);
};
function Nt(t, e) {
  Ze.call(this),
    (this.g = new $y(e)),
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
    (t = e && e.Xb) && !Ca(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !Ca(e) &&
      ((this.g.D = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new Ki(this));
}
lt(Nt, Ze);
Nt.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  Et(0),
    (t.V = e),
    (t.ia = n || {}),
    (t.L = t.Y),
    (t.F = Wy(t, null, t.V)),
    Pl(t);
};
Nt.prototype.close = function () {
  Yh(this.g);
};
Nt.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == "string") {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Fh(t)), (t = n));
  e.i.push(new qk(e.$a++, t)), e.G == 3 && Pl(e);
};
Nt.prototype.M = function () {
  (this.g.l = null),
    delete this.j,
    Yh(this.g),
    delete this.g,
    Nt.X.M.call(this);
};
function Qy(t) {
  Hh.call(this);
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
lt(Qy, Hh);
function Yy() {
  zh.call(this), (this.status = 1);
}
lt(Yy, zh);
function Ki(t) {
  this.g = t;
}
lt(Ki, Gy);
Ki.prototype.xa = function () {
  st(this.g, "a");
};
Ki.prototype.wa = function (t) {
  st(this.g, new Qy(t));
};
Ki.prototype.va = function (t) {
  st(this.g, new Yy());
};
Ki.prototype.ua = function () {
  st(this.g, "b");
};
Da.prototype.createWebChannel = Da.prototype.g;
Nt.prototype.send = Nt.prototype.u;
Nt.prototype.open = Nt.prototype.m;
Nt.prototype.close = Nt.prototype.close;
Al.NO_ERROR = 0;
Al.TIMEOUT = 8;
Al.HTTP_ERROR = 6;
my.COMPLETE = "complete";
gy.EventType = uo;
uo.OPEN = "a";
uo.CLOSE = "b";
uo.ERROR = "c";
uo.MESSAGE = "d";
Ze.prototype.listen = Ze.prototype.N;
je.prototype.listenOnce = je.prototype.O;
je.prototype.getLastError = je.prototype.Na;
je.prototype.getLastErrorCode = je.prototype.Ea;
je.prototype.getStatus = je.prototype.aa;
je.prototype.getResponseJson = je.prototype.Ra;
je.prototype.getResponseText = je.prototype.fa;
je.prototype.send = je.prototype.da;
var Vk = function () {
    return new Da();
  },
  Fk = function () {
    return Il();
  },
  Dc = Al,
  Uk = my,
  Bk = Yr,
  Op = {
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
  jk = po,
  Uo = gy,
  Hk = je;
const Dp = "@firebase/firestore";
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
 */ class kt {
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
(kt.UNAUTHENTICATED = new kt(null)),
  (kt.GOOGLE_CREDENTIALS = new kt("google-credentials-uid")),
  (kt.FIRST_PARTY = new kt("first-party-uid")),
  (kt.MOCK_USER = new kt("mock-user"));
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
 */ let Gi = "9.10.0";
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
 */ const Wr = new wh("@firebase/firestore");
function Np() {
  return Wr.logLevel;
}
function Q(t, ...e) {
  if (Wr.logLevel <= Se.DEBUG) {
    const n = e.map(Zh);
    Wr.debug(`Firestore (${Gi}): ${t}`, ...n);
  }
}
function Sn(t, ...e) {
  if (Wr.logLevel <= Se.ERROR) {
    const n = e.map(Zh);
    Wr.error(`Firestore (${Gi}): ${t}`, ...n);
  }
}
function Lp(t, ...e) {
  if (Wr.logLevel <= Se.WARN) {
    const n = e.map(Zh);
    Wr.warn(`Firestore (${Gi}): ${t}`, ...n);
  }
}
function Zh(t) {
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
  const e = `FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: ` + t;
  throw (Sn(e), new Error(e));
}
function De(t, e) {
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
let B = class extends Nn {
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
 */ let zk = class {
    constructor(e, n) {
      (this.user = n),
        (this.type = "OAuth"),
        (this.headers = new Map()),
        this.headers.set("Authorization", `Bearer ${e}`);
    }
  },
  Wk = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {}
    start(e, n) {
      e.enqueueRetryable(() => n(kt.UNAUTHENTICATED));
    }
    shutdown() {}
  },
  Kk = class {
    constructor(e) {
      (this.t = e),
        (this.currentUser = kt.UNAUTHENTICATED),
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
          Q("FirebaseAuthCredentialsProvider", "Auth detected"),
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
              : (Q("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
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
                  ? (Q(
                      "FirebaseAuthCredentialsProvider",
                      "getToken aborted due to token change."
                    ),
                    this.getToken())
                  : r
                  ? (De(typeof r.accessToken == "string"),
                    new zk(r.accessToken, this.currentUser))
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
      return De(e === null || typeof e == "string"), new kt(e);
    }
  },
  Gk = class {
    constructor(e, n, r, i) {
      (this.h = e),
        (this.l = n),
        (this.m = r),
        (this.g = i),
        (this.type = "FirstParty"),
        (this.user = kt.FIRST_PARTY),
        (this.p = new Map());
    }
    I() {
      return this.g
        ? this.g()
        : (De(
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
  Qk = class {
    constructor(e, n, r, i) {
      (this.h = e), (this.l = n), (this.m = r), (this.g = i);
    }
    getToken() {
      return Promise.resolve(new Gk(this.h, this.l, this.m, this.g));
    }
    start(e, n) {
      e.enqueueRetryable(() => n(kt.FIRST_PARTY));
    }
    shutdown() {}
    invalidateToken() {}
  },
  Yk = class {
    constructor(e) {
      (this.value = e),
        (this.type = "AppCheck"),
        (this.headers = new Map()),
        e &&
          e.length > 0 &&
          this.headers.set("x-firebase-appcheck", this.value);
    }
  };
class Xk {
  constructor(e) {
    (this.T = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.A = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        Q(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.A;
      return (
        (this.A = s.token),
        Q(
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
      Q("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.T.getImmediate({ optional: !0 });
          s
            ? i(s)
            : Q("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
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
                ? (De(typeof n.token == "string"),
                  (this.A = n.token),
                  new Yk(n.token))
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
 */ function Jk(t) {
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
 */ let Xy = class {
  static R() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = Jk(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
};
function ke(t, e) {
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
      throw new B(
        C.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new B(
        C.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (e < -62135596800)
      throw new B(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new B(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
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
      ? ke(this.nanoseconds, e.nanoseconds)
      : ke(this.seconds, e.seconds);
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
 */ class zs {
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
    return zs.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof zs
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
class Le extends zs {
  construct(e, n, r) {
    return new Le(e, n, r);
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
        throw new B(
          C.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new Le(n);
  }
  static emptyPath() {
    return new Le([]);
  }
}
const Zk = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ft extends zs {
  construct(e, n, r) {
    return new ft(e, n, r);
  }
  static isValidIdentifier(e) {
    return Zk.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          ft.isValidIdentifier(e) || (e = "`" + e + "`"),
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
    return new ft(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new B(
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
          throw new B(
            C.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e
          );
        const l = e[i + 1];
        if (l !== "\\" && l !== "." && l !== "`")
          throw new B(
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
      throw new B(C.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new ft(n);
  }
  static emptyPath() {
    return new ft([]);
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
 */ class X {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new X(Le.fromString(e));
  }
  static fromName(e) {
    return new X(Le.fromString(e).popFirst(5));
  }
  static empty() {
    return new X(Le.emptyPath());
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
    return e !== null && Le.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return Le.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new X(new Le(e.slice()));
  }
}
function eC(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = he.fromTimestamp(r === 1e9 ? new ze(n + 1, 0) : new ze(n, r));
  return new cr(i, X.empty(), e);
}
function tC(t) {
  return new cr(t.readTime, t.key, -1);
}
class cr {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new cr(he.min(), X.empty(), -1);
  }
  static max() {
    return new cr(he.max(), X.empty(), -1);
  }
}
function nC(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = X.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : ke(t.largestBatchId, e.largestBatchId));
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
 */ const rC =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class iC {
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
 */ async function vo(t) {
  if (t.code !== C.FAILED_PRECONDITION || t.message !== rC) throw t;
  Q("LocalStore", "Unexpectedly lost primary lease");
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
 */ class O {
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
        : new O((r, i) => {
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
      return n instanceof O ? n : O.resolve(n);
    } catch (n) {
      return O.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : O.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : O.reject(n);
  }
  static resolve(e) {
    return new O((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new O((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new O((n, r) => {
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
    let n = O.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? O.resolve(i) : r()));
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
    return new O((r, i) => {
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
    return new O((r, i) => {
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
function yo(t) {
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
 */ class ed {
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
 */ function Mp(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Xr(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function Jy(t) {
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
 */ ed.at = -1;
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
    return new Bo(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new Bo(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new Bo(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new Bo(this.root, e, this.comparator, !0);
  }
}
class Bo {
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
    return new $p(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new $p(this.data.getIteratorFrom(e));
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
class $p {
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
 */ class jt {
  constructor(e) {
    (this.fields = e), e.sort(ft.comparator);
  }
  static empty() {
    return new jt([]);
  }
  unionWith(e) {
    let n = new We(ft.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new jt(n.toArray());
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
 */ class ot {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = atob(e);
    return new ot(n);
  }
  static fromUint8Array(e) {
    const n = (function (r) {
      let i = "";
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(e);
    return new ot(n);
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
    return ke(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
ot.EMPTY_BYTE_STRING = new ot("");
const sC = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function ur(t) {
  if ((De(!!t), typeof t == "string")) {
    let e = 0;
    const n = sC.exec(t);
    if ((De(!!n), n[1])) {
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
  return typeof t == "string" ? ot.fromBase64String(t) : ot.fromUint8Array(t);
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
 */ function Zy(t) {
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
function e_(t) {
  const e = t.mapValue.fields.__previous_value__;
  return Zy(e) ? e_(e) : e;
}
function Ws(t) {
  const e = ur(t.mapValue.fields.__local_write_time__.timestampValue);
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
 */ let oC = class {
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
  t_ = class Cu {
    constructor(e, n) {
      (this.projectId = e), (this.database = n || "(default)");
    }
    static empty() {
      return new Cu("", "");
    }
    get isDefaultDatabase() {
      return this.database === "(default)";
    }
    isEqual(e) {
      return (
        e instanceof Cu &&
        e.projectId === this.projectId &&
        e.database === this.database
      );
    }
  };
function Ol(t) {
  return t == null;
}
function Na(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function aC(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Na(t) &&
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
 */ const jo = {
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
    ? Zy(t)
      ? 4
      : lC(t)
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
      return Ws(t).isEqual(Ws(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = ur(r.timestampValue),
          o = ur(i.timestampValue);
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
          return s === o ? Na(s) === Na(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return Pi(t.arrayValue.values || [], e.arrayValue.values || [], cn);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (Mp(s) !== Mp(o)) return !1;
        for (const a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !cn(s[a], o[a])))
            return !1;
        return !0;
      })(t, e);
    default:
      return oe();
  }
}
function Ks(t, e) {
  return (t.values || []).find((n) => cn(n, e)) !== void 0;
}
function Di(t, e) {
  if (t === e) return 0;
  const n = Kr(t),
    r = Kr(e);
  if (n !== r) return ke(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return ke(t.booleanValue, e.booleanValue);
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
      return Vp(t.timestampValue, e.timestampValue);
    case 4:
      return Vp(Ws(t), Ws(e));
    case 5:
      return ke(t.stringValue, e.stringValue);
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
          const c = ke(o[l], a[l]);
          if (c !== 0) return c;
        }
        return ke(o.length, a.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, s) {
        const o = ke(Be(i.latitude), Be(s.latitude));
        return o !== 0 ? o : ke(Be(i.longitude), Be(s.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (i, s) {
        const o = i.values || [],
          a = s.values || [];
        for (let l = 0; l < o.length && l < a.length; ++l) {
          const c = Di(o[l], a[l]);
          if (c) return c;
        }
        return ke(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === jo.mapValue && s === jo.mapValue) return 0;
        if (i === jo.mapValue) return 1;
        if (s === jo.mapValue) return -1;
        const o = i.fields || {},
          a = Object.keys(o),
          l = s.fields || {},
          c = Object.keys(l);
        a.sort(), c.sort();
        for (let u = 0; u < a.length && u < c.length; ++u) {
          const h = ke(a[u], c[u]);
          if (h !== 0) return h;
          const d = Di(o[a[u]], l[c[u]]);
          if (d !== 0) return d;
        }
        return ke(a.length, c.length);
      })(t.mapValue, e.mapValue);
    default:
      throw oe();
  }
}
function Vp(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return ke(t, e);
  const n = ur(t),
    r = ur(e),
    i = ke(n.seconds, r.seconds);
  return i !== 0 ? i : ke(n.nanos, r.nanos);
}
function yi(t) {
  return qu(t);
}
function qu(t) {
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
        const i = ur(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : "stringValue" in t
    ? t.stringValue
    : "bytesValue" in t
    ? Oi(t.bytesValue).toBase64()
    : "referenceValue" in t
    ? ((n = t.referenceValue), X.fromName(n).toString())
    : "geoPointValue" in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : "arrayValue" in t
    ? (function (r) {
        let i = "[",
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ","), (i += qu(o));
        return i + "]";
      })(t.arrayValue)
    : "mapValue" in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = "{",
          o = !0;
        for (const a of i)
          o ? (o = !1) : (s += ","), (s += `${a}:${qu(r.fields[a])}`);
        return s + "}";
      })(t.mapValue)
    : oe();
  var e, n;
}
function Fp(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${
      t.database
    }/documents/${e.path.canonicalString()}`,
  };
}
function xu(t) {
  return !!t && "integerValue" in t;
}
function td(t) {
  return !!t && "arrayValue" in t;
}
function Up(t) {
  return !!t && "nullValue" in t;
}
function Bp(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function ia(t) {
  return !!t && "mapValue" in t;
}
function _s(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return Xr(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = _s(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = _s(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function lC(t) {
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
 */ class Ct {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new Ct({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !ia(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = _s(n);
  }
  setAll(e) {
    let n = ft.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n);
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = _s(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    ia(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return cn(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (ia(i) && i.mapValue.fields) ||
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
    return new Ct(_s(this.value));
  }
}
function n_(t) {
  const e = [];
  return (
    Xr(t.fields, (n, r) => {
      const i = new ft([n]);
      if (ia(r)) {
        const s = n_(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new jt(e)
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
 */ class nt {
  constructor(e, n, r, i, s, o) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.data = s),
      (this.documentState = o);
  }
  static newInvalidDocument(e) {
    return new nt(e, 0, he.min(), he.min(), Ct.empty(), 0);
  }
  static newFoundDocument(e, n, r) {
    return new nt(e, 1, n, he.min(), r, 0);
  }
  static newNoDocument(e, n) {
    return new nt(e, 2, n, he.min(), Ct.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new nt(e, 3, n, he.min(), Ct.empty(), 2);
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
      (this.data = Ct.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Ct.empty()),
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
      e instanceof nt &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new nt(
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
 */ class cC {
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
function jp(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new cC(t, e, n, r, i, s, o);
}
function nd(t) {
  const e = ce(t);
  if (e.ht === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters
        .map((r) => {
          return (
            (i = r).field.canonicalString() + i.op.toString() + yi(i.value)
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
      Ol(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => yi(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => yi(r)).join(","))),
      (e.ht = n);
  }
  return e.ht;
}
function uC(t) {
  let e = t.path.canonicalString();
  return (
    t.collectionGroup !== null &&
      (e += " collectionGroup=" + t.collectionGroup),
    t.filters.length > 0 &&
      (e += `, filters: [${t.filters
        .map((n) => {
          return `${(r = n).field.canonicalString()} ${r.op} ${yi(r.value)}`;
          var r;
        })
        .join(", ")}]`),
    Ol(t.limit) || (e += ", limit: " + t.limit),
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
      (e += t.startAt.position.map((n) => yi(n)).join(","))),
    t.endAt &&
      ((e += ", endAt: "),
      (e += t.endAt.inclusive ? "a:" : "b:"),
      (e += t.endAt.position.map((n) => yi(n)).join(","))),
    `Target(${e})`
  );
}
function rd(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let i = 0; i < t.orderBy.length; i++)
    if (!yC(t.orderBy[i], e.orderBy[i])) return !1;
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
    !!zp(t.startAt, e.startAt) &&
    zp(t.endAt, e.endAt)
  );
}
function Ru(t) {
  return (
    X.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
class Tt extends class {} {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.lt(e, n, r)
        : new hC(e, n, r)
      : n === "array-contains"
      ? new pC(e, r)
      : n === "in"
      ? new mC(e, r)
      : n === "not-in"
      ? new gC(e, r)
      : n === "array-contains-any"
      ? new vC(e, r)
      : new Tt(e, n, r);
  }
  static lt(e, n, r) {
    return n === "in" ? new dC(e, r) : new fC(e, r);
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
class hC extends Tt {
  constructor(e, n, r) {
    super(e, n, r), (this.key = X.fromName(r.referenceValue));
  }
  matches(e) {
    const n = X.comparator(e.key, this.key);
    return this.ft(n);
  }
}
class dC extends Tt {
  constructor(e, n) {
    super(e, "in", n), (this.keys = r_("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class fC extends Tt {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = r_("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function r_(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => X.fromName(r.referenceValue));
}
class pC extends Tt {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return td(n) && Ks(n.arrayValue, this.value);
  }
}
class mC extends Tt {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Ks(this.value.arrayValue, n);
  }
}
class gC extends Tt {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (Ks(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !Ks(this.value.arrayValue, n);
  }
}
class vC extends Tt {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!td(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Ks(this.value.arrayValue, r))
    );
  }
}
class La {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
let ws = class {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
};
function yC(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
function Hp(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = X.comparator(X.fromName(o.referenceValue), n.key))
        : (r = Di(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function zp(t, e) {
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
 */ class _o {
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
function _C(t, e, n, r, i, s, o, a) {
  return new _o(t, e, n, r, i, s, o, a);
}
function Dl(t) {
  return new _o(t);
}
function Wp(t) {
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
function i_(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function s_(t) {
  for (const e of t.filters) if (e.dt()) return e.field;
  return null;
}
function o_(t) {
  return t.collectionGroup !== null;
}
function Gs(t) {
  const e = ce(t);
  if (e._t === null) {
    e._t = [];
    const n = s_(e),
      r = i_(e);
    if (n !== null && r === null)
      n.isKeyField() || e._t.push(new ws(n)),
        e._t.push(new ws(ft.keyField(), "asc"));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy)
        e._t.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : "asc";
        e._t.push(new ws(ft.keyField(), s));
      }
    }
  }
  return e._t;
}
function kn(t) {
  const e = ce(t);
  if (!e.wt)
    if (e.limitType === "F")
      e.wt = jp(
        e.path,
        e.collectionGroup,
        Gs(e),
        e.filters,
        e.limit,
        e.startAt,
        e.endAt
      );
    else {
      const n = [];
      for (const s of Gs(e)) {
        const o = s.dir === "desc" ? "asc" : "desc";
        n.push(new ws(s.field, o));
      }
      const r = e.endAt ? new La(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new La(e.startAt.position, e.startAt.inclusive) : null;
      e.wt = jp(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e.wt;
}
function Pu(t, e, n) {
  return new _o(
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
function Nl(t, e) {
  return rd(kn(t), kn(e)) && t.limitType === e.limitType;
}
function a_(t) {
  return `${nd(kn(t))}|lt:${t.limitType}`;
}
function Ou(t) {
  return `Query(target=${uC(kn(t))}; limitType=${t.limitType})`;
}
function id(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, r) {
      const i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : X.isDocumentKey(n.path)
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
            const a = Hp(i, s, o);
            return i.inclusive ? a <= 0 : a < 0;
          })(n.startAt, Gs(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const a = Hp(i, s, o);
            return i.inclusive ? a >= 0 : a > 0;
          })(n.endAt, Gs(n), r))
      );
    })(t, e)
  );
}
function wC(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function l_(t) {
  return (e, n) => {
    let r = !1;
    for (const i of Gs(t)) {
      const s = bC(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function bC(t, e, n) {
  const r = t.field.isKeyField()
    ? X.comparator(e.key, n.key)
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
 */ function c_(t, e) {
  if (t.gt) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Na(e) ? "-0" : e };
}
function u_(t) {
  return { integerValue: "" + t };
}
function EC(t, e) {
  return aC(e) ? u_(e) : c_(t, e);
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
 */ class Ll {
  constructor() {
    this._ = void 0;
  }
}
function TC(t, e, n) {
  return t instanceof Qs
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
    ? d_(t, e)
    : t instanceof Li
    ? f_(t, e)
    : (function (r, i) {
        const s = h_(r, i),
          o = Kp(s) + Kp(r.yt);
        return xu(s) && xu(r.yt) ? u_(o) : c_(r.It, o);
      })(t, e);
}
function IC(t, e, n) {
  return t instanceof Ni ? d_(t, e) : t instanceof Li ? f_(t, e) : n;
}
function h_(t, e) {
  return t instanceof Ma
    ? xu((n = e)) ||
      (function (r) {
        return !!r && "doubleValue" in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class Qs extends Ll {}
class Ni extends Ll {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function d_(t, e) {
  const n = p_(e);
  for (const r of t.elements) n.some((i) => cn(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class Li extends Ll {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function f_(t, e) {
  let n = p_(e);
  for (const r of t.elements) n = n.filter((i) => !cn(i, r));
  return { arrayValue: { values: n } };
}
class Ma extends Ll {
  constructor(e, n) {
    super(), (this.It = e), (this.yt = n);
  }
}
function Kp(t) {
  return Be(t.integerValue || t.doubleValue);
}
function p_(t) {
  return td(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
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
 */ class sd {
  constructor(e, n) {
    (this.field = e), (this.transform = n);
  }
}
function AC(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof Ni && r instanceof Ni) ||
        (n instanceof Li && r instanceof Li)
        ? Pi(n.elements, r.elements, cn)
        : n instanceof Ma && r instanceof Ma
        ? cn(n.yt, r.yt)
        : n instanceof Qs && r instanceof Qs;
    })(t.transform, e.transform)
  );
}
class SC {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class Ht {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Ht();
  }
  static exists(e) {
    return new Ht(void 0, e);
  }
  static updateTime(e) {
    return new Ht(e);
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
function sa(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Ml {}
function m_(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new od(t.key, Ht.none())
      : new wo(t.key, t.data, Ht.none());
  {
    const n = t.data,
      r = Ct.empty();
    let i = new We(ft.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new pr(t.key, r, new jt(i.toArray()), Ht.none());
  }
}
function kC(t, e, n) {
  t instanceof wo
    ? (function (r, i, s) {
        const o = r.value.clone(),
          a = Qp(r.fieldTransforms, i, s.transformResults);
        o.setAll(a),
          i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof pr
    ? (function (r, i, s) {
        if (!sa(r.precondition, i))
          return void i.convertToUnknownDocument(s.version);
        const o = Qp(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(g_(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function bs(t, e, n, r) {
  return t instanceof wo
    ? (function (i, s, o, a) {
        if (!sa(i.precondition, s)) return o;
        const l = i.value.clone(),
          c = Yp(i.fieldTransforms, a, s);
        return (
          l.setAll(c),
          s.convertToFoundDocument(s.version, l).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof pr
    ? (function (i, s, o, a) {
        if (!sa(i.precondition, s)) return o;
        const l = Yp(i.fieldTransforms, a, s),
          c = s.data;
        return (
          c.setAll(g_(i)),
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
        return sa(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function CC(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = h_(r.transform, i || null);
    s != null && (n === null && (n = Ct.empty()), n.set(r.field, s));
  }
  return n || null;
}
function Gp(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (
        (n === void 0 && r === void 0) ||
        (!(!n || !r) && Pi(n, r, (i, s) => AC(i, s)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class wo extends Ml {
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
class pr extends Ml {
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
function g_(t) {
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
function Qp(t, e, n) {
  const r = new Map();
  De(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, IC(o, a, n[i]));
  }
  return r;
}
function Yp(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, TC(s, o, e));
  }
  return r;
}
class od extends Ml {
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
class qC extends Ml {
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
 */ class xC {
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
function RC(t) {
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
function v_(t) {
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
 */ class Qi {
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
    return Jy(this.inner);
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
 */ const PC = new Ge(X.comparator);
function Cn() {
  return PC;
}
const y_ = new Ge(X.comparator);
function us(...t) {
  let e = y_;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function __(t) {
  let e = y_;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function Dr() {
  return Es();
}
function w_() {
  return Es();
}
function Es() {
  return new Qi(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const OC = new Ge(X.comparator),
  DC = new We(X.comparator);
function fe(...t) {
  let e = DC;
  for (const n of t) e = e.add(n);
  return e;
}
const NC = new We(ke);
function b_() {
  return NC;
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
 */ class $l {
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
      r.set(e, bo.createSynthesizedTargetChangeForCurrentChange(e, n)),
      new $l(he.min(), r, b_(), Cn(), fe())
    );
  }
}
class bo {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n) {
    return new bo(ot.EMPTY_BYTE_STRING, n, fe(), fe(), fe());
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
 */ class oa {
  constructor(e, n, r, i) {
    (this.Tt = e), (this.removedTargetIds = n), (this.key = r), (this.Et = i);
  }
}
class E_ {
  constructor(e, n) {
    (this.targetId = e), (this.At = n);
  }
}
class T_ {
  constructor(e, n, r = ot.EMPTY_BYTE_STRING, i = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i);
  }
}
class Xp {
  constructor() {
    (this.Rt = 0),
      (this.bt = Zp()),
      (this.Pt = ot.EMPTY_BYTE_STRING),
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
      new bo(this.Pt, this.vt, e, n, r)
    );
  }
  Nt() {
    (this.Vt = !1), (this.bt = Zp());
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
class LC {
  constructor(e) {
    (this.Bt = e),
      (this.Lt = new Map()),
      (this.Ut = Cn()),
      (this.qt = Jp()),
      (this.Kt = new We(ke));
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
      if (Ru(s))
        if (r === 0) {
          const o = new X(s.path);
          this.jt(n, o, nt.newNoDocument(o, he.min()));
        } else De(r === 1);
      else this.Zt(n) !== r && (this.Jt(n), (this.Kt = this.Kt.add(n)));
    }
  }
  te(e) {
    const n = new Map();
    this.Lt.forEach((s, o) => {
      const a = this.Xt(o);
      if (a) {
        if (s.current && Ru(a.target)) {
          const l = new X(a.target.path);
          this.Ut.get(l) !== null ||
            this.ee(o, l) ||
            this.jt(o, l, nt.newNoDocument(l, e));
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
    const i = new $l(e, n, this.Kt, this.Ut, r);
    return (this.Ut = Cn()), (this.qt = Jp()), (this.Kt = new We(ke)), i;
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
    return n || ((n = new Xp()), this.Lt.set(e, n)), n;
  }
  ne(e) {
    let n = this.qt.get(e);
    return n || ((n = new We(ke)), (this.qt = this.qt.insert(e, n))), n;
  }
  Ht(e) {
    const n = this.Xt(e) !== null;
    return n || Q("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  Xt(e) {
    const n = this.Lt.get(e);
    return n && n.St ? null : this.Bt.se(e);
  }
  Jt(e) {
    this.Lt.set(e, new Xp()),
      this.Bt.getRemoteKeysForTarget(e).forEach((n) => {
        this.jt(e, n, null);
      });
  }
  ee(e, n) {
    return this.Bt.getRemoteKeysForTarget(e).has(n);
  }
}
function Jp() {
  return new Ge(X.comparator);
}
function Zp() {
  return new Ge(X.comparator);
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
 */ const MC = { asc: "ASCENDING", desc: "DESCENDING" },
  $C = {
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
class VC {
  constructor(e, n) {
    (this.databaseId = e), (this.gt = n);
  }
}
function $a(t, e) {
  return t.gt
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function I_(t, e) {
  return t.gt ? e.toBase64() : e.toUint8Array();
}
function FC(t, e) {
  return $a(t, e.toTimestamp());
}
function wn(t) {
  return (
    De(!!t),
    he.fromTimestamp(
      (function (e) {
        const n = ur(e);
        return new ze(n.seconds, n.nanos);
      })(t)
    )
  );
}
function ad(t, e) {
  return (function (n) {
    return new Le(["projects", n.projectId, "databases", n.database]);
  })(t)
    .child("documents")
    .child(e)
    .canonicalString();
}
function A_(t) {
  const e = Le.fromString(t);
  return De(C_(e)), e;
}
function Du(t, e) {
  return ad(t.databaseId, e.path);
}
function Nc(t, e) {
  const n = A_(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new B(
      C.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new B(
      C.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database
    );
  return new X(S_(n));
}
function Nu(t, e) {
  return ad(t.databaseId, e);
}
function UC(t) {
  const e = A_(t);
  return e.length === 4 ? Le.emptyPath() : S_(e);
}
function Lu(t) {
  return new Le([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function S_(t) {
  return De(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function em(t, e, n) {
  return { name: Du(t, e), fields: n.value.mapValue.fields };
}
function BC(t, e) {
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
          ? (De(c === void 0 || typeof c == "string"),
            ot.fromBase64String(c || ""))
          : (De(c === void 0 || c instanceof Uint8Array),
            ot.fromUint8Array(c || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (l) {
          const c = l.code === void 0 ? C.UNKNOWN : v_(l.code);
          return new B(c, l.message || "");
        })(o);
    n = new T_(r, i, s, a || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Nc(t, r.document.name),
      s = wn(r.document.updateTime),
      o = new Ct({ mapValue: { fields: r.document.fields } }),
      a = nt.newFoundDocument(i, s, o),
      l = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new oa(l, c, a.key, a);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Nc(t, r.document),
      s = r.readTime ? wn(r.readTime) : he.min(),
      o = nt.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new oa([], a, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Nc(t, r.document),
      s = r.removedTargetIds || [];
    n = new oa([], s, i, null);
  } else {
    if (!("filter" in e)) return oe();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const i = r.count || 0,
        s = new xC(i),
        o = r.targetId;
      n = new E_(o, s);
    }
  }
  return n;
}
function jC(t, e) {
  let n;
  if (e instanceof wo) n = { update: em(t, e.key, e.value) };
  else if (e instanceof od) n = { delete: Du(t, e.key) };
  else if (e instanceof pr)
    n = { update: em(t, e.key, e.data), updateMask: ZC(e.fieldMask) };
  else {
    if (!(e instanceof qC)) return oe();
    n = { verify: Du(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (i, s) {
          const o = s.transform;
          if (o instanceof Qs)
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
          if (o instanceof Ma)
            return { fieldPath: s.field.canonicalString(), increment: o.yt };
          throw oe();
        })(0, r)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (r, i) {
        return i.updateTime !== void 0
          ? { updateTime: FC(r, i.updateTime) }
          : i.exists !== void 0
          ? { exists: i.exists }
          : oe();
      })(t, e.precondition)),
    n
  );
}
function HC(t, e) {
  return t && t.length > 0
    ? (De(e !== void 0),
      t.map((n) =>
        (function (r, i) {
          let s = r.updateTime ? wn(r.updateTime) : wn(i);
          return (
            s.isEqual(he.min()) && (s = wn(i)),
            new SC(s, r.transformResults || [])
          );
        })(n, e)
      ))
    : [];
}
function zC(t, e) {
  return { documents: [Nu(t, e.path)] };
}
function WC(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = Nu(t, r)),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = Nu(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (l) {
    if (l.length === 0) return;
    const c = l.map((u) =>
      (function (h) {
        if (h.op === "==") {
          if (Bp(h.value))
            return { unaryFilter: { field: ii(h.field), op: "IS_NAN" } };
          if (Up(h.value))
            return { unaryFilter: { field: ii(h.field), op: "IS_NULL" } };
        } else if (h.op === "!=") {
          if (Bp(h.value))
            return { unaryFilter: { field: ii(h.field), op: "IS_NOT_NAN" } };
          if (Up(h.value))
            return { unaryFilter: { field: ii(h.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: ii(h.field), op: YC(h.op), value: h.value },
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
          return { field: ii(u.field), direction: QC(u.dir) };
        })(c)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = (function (l, c) {
    return l.gt || Ol(c) ? c : { value: c };
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
function KC(t) {
  let e = UC(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    De(r === 1);
    const u = n.from[0];
    u.allDescendants ? (i = u.collectionId) : (e = e.child(u.collectionId));
  }
  let s = [];
  n.where && (s = k_(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((u) =>
      (function (h) {
        return new ws(
          ci(h.field),
          (function (d) {
            switch (d) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          })(h.direction)
        );
      })(u)
    ));
  let a = null;
  n.limit &&
    (a = (function (u) {
      let h;
      return (h = typeof u == "object" ? u.value : u), Ol(h) ? null : h;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (u) {
      const h = !!u.before,
        d = u.values || [];
      return new La(d, h);
    })(n.startAt));
  let c = null;
  return (
    n.endAt &&
      (c = (function (u) {
        const h = !u.before,
          d = u.values || [];
        return new La(d, h);
      })(n.endAt)),
    _C(e, i, o, s, a, "F", l, c)
  );
}
function GC(t, e) {
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
function k_(t) {
  return t
    ? t.unaryFilter !== void 0
      ? [JC(t)]
      : t.fieldFilter !== void 0
      ? [XC(t)]
      : t.compositeFilter !== void 0
      ? t.compositeFilter.filters
          .map((e) => k_(e))
          .reduce((e, n) => e.concat(n))
      : oe()
    : [];
}
function QC(t) {
  return MC[t];
}
function YC(t) {
  return $C[t];
}
function ii(t) {
  return { fieldPath: t.canonicalString() };
}
function ci(t) {
  return ft.fromServerFormat(t.fieldPath);
}
function XC(t) {
  return Tt.create(
    ci(t.fieldFilter.field),
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
function JC(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      const e = ci(t.unaryFilter.field);
      return Tt.create(e, "==", { doubleValue: NaN });
    case "IS_NULL":
      const n = ci(t.unaryFilter.field);
      return Tt.create(n, "==", { nullValue: "NULL_VALUE" });
    case "IS_NOT_NAN":
      const r = ci(t.unaryFilter.field);
      return Tt.create(r, "!=", { doubleValue: NaN });
    case "IS_NOT_NULL":
      const i = ci(t.unaryFilter.field);
      return Tt.create(i, "!=", { nullValue: "NULL_VALUE" });
    default:
      return oe();
  }
}
function ZC(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function C_(t) {
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
 */ class eq {
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
      s.key.isEqual(e.key) && kC(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = bs(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = bs(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = w_();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = m_(o, a);
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
      Pi(this.mutations, e.mutations, (n, r) => Gp(n, r)) &&
      Pi(this.baseMutations, e.baseMutations, (n, r) => Gp(n, r))
    );
  }
}
class ld {
  constructor(e, n, r, i) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(e, n, r) {
    De(e.mutations.length === r.length);
    let i = OC;
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new ld(e, n, r, i);
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
 */ class tq {
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
 */ class Vr {
  constructor(
    e,
    n,
    r,
    i,
    s = he.min(),
    o = he.min(),
    a = ot.EMPTY_BYTE_STRING
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
    return new Vr(
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
    return new Vr(
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
    return new Vr(
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
 */ class nq {
  constructor(e) {
    this.re = e;
  }
}
function rq(t) {
  const e = KC({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? Pu(e, e.limit, "L") : e;
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
 */ class iq {
  constructor() {
    this.Ye = new sq();
  }
  addToCollectionParentIndex(e, n) {
    return this.Ye.add(n), O.resolve();
  }
  getCollectionParents(e, n) {
    return O.resolve(this.Ye.getEntries(n));
  }
  addFieldIndex(e, n) {
    return O.resolve();
  }
  deleteFieldIndex(e, n) {
    return O.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return O.resolve(null);
  }
  getIndexType(e, n) {
    return O.resolve(0);
  }
  getFieldIndexes(e, n) {
    return O.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return O.resolve(null);
  }
  getMinOffset(e, n) {
    return O.resolve(cr.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return O.resolve(cr.min());
  }
  updateCollectionGroup(e, n, r) {
    return O.resolve();
  }
  updateIndexEntries(e, n) {
    return O.resolve();
  }
}
class sq {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new We(Le.comparator),
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
    return (this.index[e] || new We(Le.comparator)).toArray();
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
 */ class oq {
  constructor() {
    (this.changes = new Qi(
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
      this.changes.set(e, nt.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? O.resolve(r) : this.getFromCache(e, n);
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
 */ class aq {
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
 */ class lq {
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
      .next((i) => (r !== null && bs(r.mutation, i, jt.empty(), ze.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, fe()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = fe()) {
    const i = Dr();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = us();
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
    const r = Dr();
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
    const o = Es(),
      a = Es();
    return (
      n.forEach((l, c) => {
        const u = r.get(c.key);
        i.has(c.key) && (u === void 0 || u.mutation instanceof pr)
          ? (s = s.insert(c.key, c))
          : u !== void 0 &&
            (o.set(c.key, u.mutation.getFieldMask()),
            bs(u.mutation, c, u.mutation.getFieldMask(), ze.now()));
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((c, u) => o.set(c, u)),
          n.forEach((c, u) => {
            var h;
            return a.set(
              c,
              new aq(u, (h = o.get(c)) !== null && h !== void 0 ? h : null)
            );
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Es();
    let i = new Ge((o, a) => o - a),
      s = fe();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const c = n.get(l);
            if (c === null) return;
            let u = r.get(l) || jt.empty();
            (u = a.applyToLocalView(c, u)), r.set(l, u);
            const h = (i.get(a.batchId) || fe()).add(l);
            i = i.insert(a.batchId, h);
          });
      })
      .next(() => {
        const o = [],
          a = i.getReverseIterator();
        for (; a.hasNext(); ) {
          const l = a.getNext(),
            c = l.key,
            u = l.value,
            h = w_();
          u.forEach((d) => {
            if (!s.has(d)) {
              const f = m_(n.get(d), r.get(d));
              f !== null && h.set(d, f), (s = s.add(d));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, c, h));
        }
        return O.waitFor(o);
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
        X.isDocumentKey(i.path) &&
        i.collectionGroup === null &&
        i.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : o_(n)
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
            : O.resolve(Dr());
        let a = -1,
          l = s;
        return o.next((c) =>
          O.forEach(
            c,
            (u, h) => (
              a < h.largestBatchId && (a = h.largestBatchId),
              s.get(u)
                ? O.resolve()
                : this.getBaseDocument(e, u, h).next((d) => {
                    l = l.insert(u, d);
                  })
            )
          )
            .next(() => this.populateOverlays(e, c, s))
            .next(() => this.computeViews(e, l, c, fe()))
            .next((u) => ({ batchId: a, changes: __(u) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new X(n)).next((r) => {
      let i = us();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = us();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      O.forEach(o, (a) => {
        const l = (function (c, u) {
          return new _o(
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
          c.forEach((u, h) => {
            s = s.insert(u, h);
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
          i.get(c) === null && (i = i.insert(c, nt.newInvalidDocument(c)));
        });
        let o = us();
        return (
          i.forEach((a, l) => {
            const c = s.get(a);
            c !== void 0 && bs(c.mutation, l, jt.empty(), ze.now()),
              id(n, l) && (o = o.insert(a, l));
          }),
          o
        );
      });
  }
  getBaseDocument(e, n, r) {
    return r === null || r.mutation.type === 1
      ? this.remoteDocumentCache.getEntry(e, n)
      : O.resolve(nt.newInvalidDocument(n));
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
 */ class cq {
  constructor(e) {
    (this.It = e), (this.Zn = new Map()), (this.ts = new Map());
  }
  getBundleMetadata(e, n) {
    return O.resolve(this.Zn.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.Zn.set(n.id, {
        id: (r = n).id,
        version: r.version,
        createTime: wn(r.createTime),
      }),
      O.resolve()
    );
  }
  getNamedQuery(e, n) {
    return O.resolve(this.ts.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.ts.set(
        n.name,
        (function (r) {
          return {
            name: r.name,
            query: rq(r.bundledQuery),
            readTime: wn(r.readTime),
          };
        })(n)
      ),
      O.resolve()
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
 */ class uq {
  constructor() {
    (this.overlays = new Ge(X.comparator)), (this.es = new Map());
  }
  getOverlay(e, n) {
    return O.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = Dr();
    return O.forEach(n, (i) =>
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
      O.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.es.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.es.delete(r)),
      O.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = Dr(),
      s = n.length + 1,
      o = new X(n.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        c = l.getKey();
      if (!n.isPrefixOf(c.path)) break;
      c.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return O.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new Ge((c, u) => c - u);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const c = o.getNext().value;
      if (c.getKey().getCollectionGroup() === n && c.largestBatchId > r) {
        let u = s.get(c.largestBatchId);
        u === null && ((u = Dr()), (s = s.insert(c.largestBatchId, u))),
          u.set(c.getKey(), c);
      }
    }
    const a = Dr(),
      l = s.getIterator();
    for (
      ;
      l.hasNext() &&
      (l.getNext().value.forEach((c, u) => a.set(c, u)), !(a.size() >= i));

    );
    return O.resolve(a);
  }
  ue(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.es.get(i.largestBatchId).delete(r.key);
      this.es.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new tq(n, r));
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
 */ class cd {
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
    const n = new X(new Le([])),
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
    const n = new X(new Le([])),
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
    return X.comparator(e.key, n.key) || ke(e._s, n._s);
  }
  static os(e, n) {
    return ke(e._s, n._s) || X.comparator(e.key, n.key);
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
 */ class hq {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.ws = 1),
      (this.gs = new We(Qe.ss));
  }
  checkEmpty(e) {
    return O.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.ws;
    this.ws++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new eq(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.gs = this.gs.add(new Qe(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return O.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return O.resolve(this.ys(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.ps(r),
      s = i < 0 ? 0 : i;
    return O.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return O.resolve(this.mutationQueue.length === 0 ? -1 : this.ws - 1);
  }
  getAllMutationBatches(e) {
    return O.resolve(this.mutationQueue.slice());
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
      O.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new We(ke);
    return (
      n.forEach((i) => {
        const s = new Qe(i, 0),
          o = new Qe(i, Number.POSITIVE_INFINITY);
        this.gs.forEachInRange([s, o], (a) => {
          r = r.add(a._s);
        });
      }),
      O.resolve(this.Is(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    X.isDocumentKey(s) || (s = s.child(""));
    const o = new Qe(new X(s), 0);
    let a = new We(ke);
    return (
      this.gs.forEachWhile((l) => {
        const c = l.key.path;
        return !!r.isPrefixOf(c) && (c.length === i && (a = a.add(l._s)), !0);
      }, o),
      O.resolve(this.Is(a))
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
    De(this.Ts(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.gs;
    return O.forEach(n.mutations, (i) => {
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
    return O.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, O.resolve();
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
 */ class dq {
  constructor(e) {
    (this.Es = e), (this.docs = new Ge(X.comparator)), (this.size = 0);
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
    return O.resolve(r ? r.document.mutableCopy() : nt.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = Cn();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : nt.newInvalidDocument(i)
        );
      }),
      O.resolve(r)
    );
  }
  getAllFromCollection(e, n, r) {
    let i = Cn();
    const s = new X(n.child("")),
      o = this.docs.getIteratorFrom(s);
    for (; o.hasNext(); ) {
      const {
        key: a,
        value: { document: l },
      } = o.getNext();
      if (!n.isPrefixOf(a.path)) break;
      a.path.length > n.length + 1 ||
        nC(tC(l), r) <= 0 ||
        (i = i.insert(l.key, l.mutableCopy()));
    }
    return O.resolve(i);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    oe();
  }
  As(e, n) {
    return O.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new fq(this);
  }
  getSize(e) {
    return O.resolve(this.size);
  }
}
class fq extends oq {
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
      O.waitFor(n)
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
 */ class pq {
  constructor(e) {
    (this.persistence = e),
      (this.Rs = new Qi((n) => nd(n), rd)),
      (this.lastRemoteSnapshotVersion = he.min()),
      (this.highestTargetId = 0),
      (this.bs = 0),
      (this.Ps = new cd()),
      (this.targetCount = 0),
      (this.vs = Mi.Pn());
  }
  forEachTarget(e, n) {
    return this.Rs.forEach((r, i) => n(i)), O.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return O.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return O.resolve(this.bs);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.vs.next()), O.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.bs && (this.bs = n),
      O.resolve()
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
    return this.Dn(n), (this.targetCount += 1), O.resolve();
  }
  updateTargetData(e, n) {
    return this.Dn(n), O.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.Rs.delete(n.target),
      this.Ps.ls(n.targetId),
      (this.targetCount -= 1),
      O.resolve()
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
      O.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return O.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.Rs.get(n) || null;
    return O.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Ps.us(n, r), O.resolve();
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
      O.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Ps.ls(n), O.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Ps.ds(n);
    return O.resolve(r);
  }
  containsKey(e, n) {
    return O.resolve(this.Ps.containsKey(n));
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
  constructor(e, n) {
    (this.Vs = {}),
      (this.overlays = {}),
      (this.Ss = new ed(0)),
      (this.Ds = !1),
      (this.Ds = !0),
      (this.referenceDelegate = e(this)),
      (this.Cs = new pq(this)),
      (this.indexManager = new iq()),
      (this.remoteDocumentCache = (function (r) {
        return new dq(r);
      })((r) => this.referenceDelegate.xs(r))),
      (this.It = new nq(n)),
      (this.Ns = new cq(this.It));
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
    return n || ((n = new uq()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Vs[e.toKey()];
    return (
      r || ((r = new hq(n, this.referenceDelegate)), (this.Vs[e.toKey()] = r)),
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
    Q("MemoryPersistence", "Starting transaction:", e);
    const i = new gq(this.Ss.next());
    return (
      this.referenceDelegate.ks(),
      r(i)
        .next((s) => this.referenceDelegate.Ms(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Os(e, n) {
    return O.or(Object.values(this.Vs).map((r) => () => r.containsKey(e, n)));
  }
}
class gq extends iC {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class ud {
  constructor(e) {
    (this.persistence = e), (this.Fs = new cd()), (this.$s = null);
  }
  static Bs(e) {
    return new ud(e);
  }
  get Ls() {
    if (this.$s) return this.$s;
    throw oe();
  }
  addReference(e, n, r) {
    return (
      this.Fs.addReference(r, n), this.Ls.delete(r.toString()), O.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Fs.removeReference(r, n), this.Ls.add(r.toString()), O.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Ls.add(n.toString()), O.resolve();
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
    return O.forEach(this.Ls, (r) => {
      const i = X.fromPath(r);
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
    return O.or([
      () => O.resolve(this.Fs.containsKey(n)),
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
 */ class hd {
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
    return new hd(e, n.fromCache, r, i);
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
 */ class vq {
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
    if (Wp(n)) return O.resolve(null);
    let r = kn(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = Pu(n, null, "F")), (r = kn(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = fe(...s);
            return this.Ni.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const c = this.Fi(n, a);
                return this.$i(n, c, o, l.readTime)
                  ? this.ki(e, Pu(n, null, "F"))
                  : this.Bi(e, c, n, l);
              })
            );
          }))
    );
  }
  Mi(e, n, r, i) {
    return Wp(n) || i.isEqual(he.min())
      ? this.Oi(e, n)
      : this.Ni.getDocuments(e, r).next((s) => {
          const o = this.Fi(n, s);
          return this.$i(n, o, r, i)
            ? this.Oi(e, n)
            : (Np() <= Se.DEBUG &&
                Q(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  Ou(n)
                ),
              this.Bi(e, o, n, eC(i, -1)));
        });
  }
  Fi(e, n) {
    let r = new We(l_(e));
    return (
      n.forEach((i, s) => {
        id(e, s) && (r = r.add(s));
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
      Np() <= Se.DEBUG &&
        Q("QueryEngine", "Using full collection scan to execute query:", Ou(n)),
      this.Ni.getDocumentsMatchingQuery(e, n, cr.min())
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
 */ class yq {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Li = n),
      (this.It = i),
      (this.Ui = new Ge(ke)),
      (this.qi = new Qi((s) => nd(s), rd)),
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
      (this.localDocuments = new lq(
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
function _q(t, e, n, r) {
  return new yq(t, e, n, r);
}
async function q_(t, e) {
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
function wq(t, e) {
  const n = ce(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      return (function (o, a, l, c) {
        const u = l.batch,
          h = u.keys();
        let d = O.resolve();
        return (
          h.forEach((f) => {
            d = d
              .next(() => c.getEntry(a, f))
              .next((g) => {
                const v = l.docVersions.get(f);
                De(v !== null),
                  g.version.compareTo(v) < 0 &&
                    (u.applyToRemoteDocument(g, l),
                    g.isValidDocument() &&
                      (g.setReadTime(l.commitVersion), c.addEntry(g)));
              });
          }),
          d.next(() => o.mutationQueue.removeMutationBatch(a, u))
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
function x_(t) {
  const e = ce(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.Cs.getLastRemoteSnapshotVersion(n)
  );
}
function bq(t, e) {
  const n = ce(t),
    r = e.snapshotVersion;
  let i = n.Ui;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      const o = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      i = n.Ui;
      const a = [];
      e.targetChanges.forEach((u, h) => {
        const d = i.get(h);
        if (!d) return;
        a.push(
          n.Cs.removeMatchingKeys(s, u.removedDocuments, h).next(() =>
            n.Cs.addMatchingKeys(s, u.addedDocuments, h)
          )
        );
        let f = d.withSequenceNumber(s.currentSequenceNumber);
        e.targetMismatches.has(h)
          ? (f = f
              .withResumeToken(ot.EMPTY_BYTE_STRING, he.min())
              .withLastLimboFreeSnapshotVersion(he.min()))
          : u.resumeToken.approximateByteSize() > 0 &&
            (f = f.withResumeToken(u.resumeToken, r)),
          (i = i.insert(h, f)),
          (function (g, v, _) {
            return g.resumeToken.approximateByteSize() === 0 ||
              v.snapshotVersion.toMicroseconds() -
                g.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : _.addedDocuments.size +
                  _.modifiedDocuments.size +
                  _.removedDocuments.size >
                  0;
          })(d, f, u) && a.push(n.Cs.updateTargetData(s, f));
      });
      let l = Cn(),
        c = fe();
      if (
        (e.documentUpdates.forEach((u) => {
          e.resolvedLimboDocuments.has(u) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, u));
        }),
        a.push(
          Eq(s, o, e.documentUpdates).next((u) => {
            (l = u.Wi), (c = u.zi);
          })
        ),
        !r.isEqual(he.min()))
      ) {
        const u = n.Cs.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Cs.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(u);
      }
      return O.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, c))
        .next(() => l);
    })
    .then((s) => ((n.Ui = i), s));
}
function Eq(t, e, n) {
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
              : Q(
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
function Tq(t, e) {
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
function Iq(t, e) {
  const n = ce(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.Cs.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), O.resolve(i))
          : n.Cs.allocateTargetId(r).next(
              (o) => (
                (i = new Vr(e, o, 0, r.currentSequenceNumber)),
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
async function Mu(t, e, n) {
  const r = ce(t),
    i = r.Ui.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!yo(o)) throw o;
    Q("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ui = r.Ui.remove(e)), r.qi.delete(i.target);
}
function tm(t, e, n) {
  const r = ce(t);
  let i = he.min(),
    s = fe();
  return r.persistence.runTransaction("Execute query", "readonly", (o) =>
    (function (a, l, c) {
      const u = ce(a),
        h = u.qi.get(c);
      return h !== void 0 ? O.resolve(u.Ui.get(h)) : u.Cs.getTargetData(l, c);
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
      .next((a) => (Aq(r, wC(e), a), { documents: a, Hi: s }))
  );
}
function Aq(t, e, n) {
  let r = he.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Ki.set(e, r);
}
class nm {
  constructor() {
    this.activeTargetIds = b_();
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
class Sq {
  constructor() {
    (this.Lr = new nm()),
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
    return (this.Lr = new nm()), Promise.resolve();
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
 */ class kq {
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
 */ class rm {
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
    Q("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.Wr) e(0);
  }
  jr() {
    Q("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
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
 */ const Cq = {
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
 */ class qq {
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
 */ class xq extends class {
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
    Q("RestConnection", "Sending: ", o, r);
    const a = {};
    return (
      this.ho(a, i, s),
      this.lo(e, o, a, r).then(
        (l) => (Q("RestConnection", "Received: ", l), l),
        (l) => {
          throw (
            (Lp(
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
    (e["X-Goog-Api-Client"] = "gl-js/ fire/" + Gi),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  ao(e, n) {
    const r = Cq[e];
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
      const a = new Hk();
      a.listenOnce(Uk.COMPLETE, () => {
        try {
          switch (a.getLastErrorCode()) {
            case Dc.NO_ERROR:
              const c = a.getResponseJson();
              Q("Connection", "XHR received:", JSON.stringify(c)), s(c);
              break;
            case Dc.TIMEOUT:
              Q("Connection", 'RPC "' + e + '" timed out'),
                o(new B(C.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case Dc.HTTP_ERROR:
              const u = a.getStatus();
              if (
                (Q(
                  "Connection",
                  'RPC "' + e + '" failed with status:',
                  u,
                  "response text:",
                  a.getResponseText()
                ),
                u > 0)
              ) {
                const h = a.getResponseJson().error;
                if (h && h.status && h.message) {
                  const d = (function (f) {
                    const g = f.toLowerCase().replace(/_/g, "-");
                    return Object.values(C).indexOf(g) >= 0 ? g : C.UNKNOWN;
                  })(h.status);
                  o(new B(d, h.message));
                } else
                  o(
                    new B(
                      C.UNKNOWN,
                      "Server responded with status " + a.getStatus()
                    )
                  );
              } else o(new B(C.UNAVAILABLE, "Connection failed."));
              break;
            default:
              oe();
          }
        } finally {
          Q("Connection", 'RPC "' + e + '" completed.');
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
      s = Vk(),
      o = Fk(),
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
    this.useFetchStreams && (a.xmlHttpFactory = new jk({})),
      this.ho(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const l = i.join("");
    Q("Connection", "Creating WebChannel: " + l, a);
    const c = s.createWebChannel(l, a);
    let u = !1,
      h = !1;
    const d = new qq({
        Hr: (g) => {
          h
            ? Q("Connection", "Not sending because WebChannel is closed:", g)
            : (u ||
                (Q("Connection", "Opening WebChannel transport."),
                c.open(),
                (u = !0)),
              Q("Connection", "WebChannel sending:", g),
              c.send(g));
        },
        Jr: () => c.close(),
      }),
      f = (g, v, _) => {
        g.listen(v, (b) => {
          try {
            _(b);
          } catch (y) {
            setTimeout(() => {
              throw y;
            }, 0);
          }
        });
      };
    return (
      f(c, Uo.EventType.OPEN, () => {
        h || Q("Connection", "WebChannel transport opened.");
      }),
      f(c, Uo.EventType.CLOSE, () => {
        h || ((h = !0), Q("Connection", "WebChannel transport closed"), d.io());
      }),
      f(c, Uo.EventType.ERROR, (g) => {
        h ||
          ((h = !0),
          Lp("Connection", "WebChannel transport errored:", g),
          d.io(new B(C.UNAVAILABLE, "The operation could not be completed")));
      }),
      f(c, Uo.EventType.MESSAGE, (g) => {
        var v;
        if (!h) {
          const _ = g.data[0];
          De(!!_);
          const b = _,
            y =
              b.error ||
              ((v = b[0]) === null || v === void 0 ? void 0 : v.error);
          if (y) {
            Q("Connection", "WebChannel received error:", y);
            const x = y.status;
            let A = (function (Z) {
                const ae = Ue[Z];
                if (ae !== void 0) return v_(ae);
              })(x),
              H = y.message;
            A === void 0 &&
              ((A = C.INTERNAL),
              (H =
                "Unknown error status: " + x + " with message " + y.message)),
              (h = !0),
              d.io(new B(A, H)),
              c.close();
          } else Q("Connection", "WebChannel received:", _), d.ro(_);
        }
      }),
      f(o, Bk.STAT_EVENT, (g) => {
        g.stat === Op.PROXY
          ? Q("Connection", "Detected buffering proxy")
          : g.stat === Op.NOPROXY &&
            Q("Connection", "Detected no buffering proxy");
      }),
      setTimeout(() => {
        d.so();
      }, 0),
      d
    );
  }
}
function Lc() {
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
 */ function Vl(t) {
  return new VC(t, !0);
}
class R_ {
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
      Q(
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
 */ class P_ {
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
      (this.xo = new R_(e, n));
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
          const i = new B(
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
      Q("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Ko(e) {
    return (n) => {
      this.Hs.enqueueAndForget(() =>
        this.So === e
          ? n()
          : (Q(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class Rq extends P_ {
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
    const n = BC(this.It, e),
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
    (n.database = Lu(this.It)),
      (n.addTarget = (function (i, s) {
        let o;
        const a = s.target;
        return (
          (o = Ru(a) ? { documents: zC(i, a) } : { query: WC(i, a) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = I_(i, s.resumeToken))
            : s.snapshotVersion.compareTo(he.min()) > 0 &&
              (o.readTime = $a(i, s.snapshotVersion.toTimestamp())),
          o
        );
      })(this.It, e));
    const r = GC(this.It, e);
    r && (n.labels = r), this.Bo(n);
  }
  Ho(e) {
    const n = {};
    (n.database = Lu(this.It)), (n.removeTarget = e), this.Bo(n);
  }
}
class Pq extends P_ {
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
      (De(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.Jo)
    ) {
      this.xo.reset();
      const n = HC(e.writeResults, e.commitTime),
        r = wn(e.commitTime);
      return this.listener.Zo(r, n);
    }
    return (
      De(!e.writeResults || e.writeResults.length === 0),
      (this.Jo = !0),
      this.listener.tu()
    );
  }
  eu() {
    const e = {};
    (e.database = Lu(this.It)), this.Bo(e);
  }
  Xo(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => jC(this.It, r)),
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
 */ class Oq extends class {} {
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
      throw new B(
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
            : new B(C.UNKNOWN, i.toString());
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
            : new B(C.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.nu = !0;
  }
}
class Dq {
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
    this.ou ? (Sn(n), (this.ou = !1)) : Q("OnlineStateTracker", n);
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
 */ class Nq {
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
            (Q(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (a) {
              const l = ce(a);
              l._u.add(4),
                await Eo(l),
                l.gu.set("Unknown"),
                l._u.delete(4),
                await Fl(l);
            })(this));
        });
      }),
      (this.gu = new Dq(r, i));
  }
}
async function Fl(t) {
  if (Jr(t)) for (const e of t.wu) await e(!0);
}
async function Eo(t) {
  for (const e of t.wu) await e(!1);
}
function O_(t, e) {
  const n = ce(t);
  n.du.has(e.targetId) ||
    (n.du.set(e.targetId, e), pd(n) ? fd(n) : Yi(n).ko() && dd(n, e));
}
function D_(t, e) {
  const n = ce(t),
    r = Yi(n);
  n.du.delete(e),
    r.ko() && N_(n, e),
    n.du.size === 0 && (r.ko() ? r.Fo() : Jr(n) && n.gu.set("Unknown"));
}
function dd(t, e) {
  t.yu.Ot(e.targetId), Yi(t).zo(e);
}
function N_(t, e) {
  t.yu.Ot(e), Yi(t).Ho(e);
}
function fd(t) {
  (t.yu = new LC({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    se: (e) => t.du.get(e) || null,
  })),
    Yi(t).start(),
    t.gu.uu();
}
function pd(t) {
  return Jr(t) && !Yi(t).No() && t.du.size > 0;
}
function Jr(t) {
  return ce(t)._u.size === 0;
}
function L_(t) {
  t.yu = void 0;
}
async function Lq(t) {
  t.du.forEach((e, n) => {
    dd(t, e);
  });
}
async function Mq(t, e) {
  L_(t), pd(t) ? (t.gu.hu(e), fd(t)) : t.gu.set("Unknown");
}
async function $q(t, e, n) {
  if ((t.gu.set("Online"), e instanceof T_ && e.state === 2 && e.cause))
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
      Q(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        r
      ),
        await Va(t, r);
    }
  else if (
    (e instanceof oa ? t.yu.Gt(e) : e instanceof E_ ? t.yu.Yt(e) : t.yu.Wt(e),
    !n.isEqual(he.min()))
  )
    try {
      const r = await x_(t.localStore);
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
                l.withResumeToken(ot.EMPTY_BYTE_STRING, l.snapshotVersion)
              ),
                N_(i, a);
              const c = new Vr(l.target, a, 1, l.sequenceNumber);
              dd(i, c);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      Q("RemoteStore", "Failed to raise snapshot:", r), await Va(t, r);
    }
}
async function Va(t, e, n) {
  if (!yo(e)) throw e;
  t._u.add(1),
    await Eo(t),
    t.gu.set("Offline"),
    n || (n = () => x_(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      Q("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t._u.delete(1),
        await Fl(t);
    });
}
function M_(t, e) {
  return e().catch((n) => Va(t, n, e));
}
async function Ul(t) {
  const e = ce(t),
    n = hr(e);
  let r = e.fu.length > 0 ? e.fu[e.fu.length - 1].batchId : -1;
  for (; Vq(e); )
    try {
      const i = await Tq(e.localStore, r);
      if (i === null) {
        e.fu.length === 0 && n.Fo();
        break;
      }
      (r = i.batchId), Fq(e, i);
    } catch (i) {
      await Va(e, i);
    }
  $_(e) && V_(e);
}
function Vq(t) {
  return Jr(t) && t.fu.length < 10;
}
function Fq(t, e) {
  t.fu.push(e);
  const n = hr(t);
  n.ko() && n.Yo && n.Xo(e.mutations);
}
function $_(t) {
  return Jr(t) && !hr(t).No() && t.fu.length > 0;
}
function V_(t) {
  hr(t).start();
}
async function Uq(t) {
  hr(t).eu();
}
async function Bq(t) {
  const e = hr(t);
  for (const n of t.fu) e.Xo(n.mutations);
}
async function jq(t, e, n) {
  const r = t.fu.shift(),
    i = ld.from(r, e, n);
  await M_(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Ul(t);
}
async function Hq(t, e) {
  e &&
    hr(t).Yo &&
    (await (async function (n, r) {
      if (((i = r.code), RC(i) && i !== C.ABORTED)) {
        const s = n.fu.shift();
        hr(n).Oo(),
          await M_(n, () => n.remoteSyncer.rejectFailedWrite(s.batchId, r)),
          await Ul(n);
      }
      var i;
    })(t, e)),
    $_(t) && V_(t);
}
async function im(t, e) {
  const n = ce(t);
  n.asyncQueue.verifyOperationInProgress(),
    Q("RemoteStore", "RemoteStore received new credentials");
  const r = Jr(n);
  n._u.add(3),
    await Eo(n),
    r && n.gu.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n._u.delete(3),
    await Fl(n);
}
async function zq(t, e) {
  const n = ce(t);
  e
    ? (n._u.delete(2), await Fl(n))
    : e || (n._u.add(2), await Eo(n), n.gu.set("Unknown"));
}
function Yi(t) {
  return (
    t.pu ||
      ((t.pu = (function (e, n, r) {
        const i = ce(e);
        return (
          i.su(),
          new Rq(n, i.Vo, i.authCredentials, i.appCheckCredentials, i.It, r)
        );
      })(t.datastore, t.asyncQueue, {
        Yr: Lq.bind(null, t),
        Zr: Mq.bind(null, t),
        Wo: $q.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.pu.Oo(), pd(t) ? fd(t) : t.gu.set("Unknown"))
          : (await t.pu.stop(), L_(t));
      })),
    t.pu
  );
}
function hr(t) {
  return (
    t.Iu ||
      ((t.Iu = (function (e, n, r) {
        const i = ce(e);
        return (
          i.su(),
          new Pq(n, i.Vo, i.authCredentials, i.appCheckCredentials, i.It, r)
        );
      })(t.datastore, t.asyncQueue, {
        Yr: Uq.bind(null, t),
        Zr: Hq.bind(null, t),
        tu: Bq.bind(null, t),
        Zo: jq.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.Iu.Oo(), await Ul(t))
          : (await t.Iu.stop(),
            t.fu.length > 0 &&
              (Q(
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
 */ class md {
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
      a = new md(e, n, o, i, s);
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
        new B(C.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
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
function gd(t, e) {
  if ((Sn("AsyncQueue", `${e}: ${t}`), yo(t)))
    return new B(C.UNAVAILABLE, `${e}: ${t}`);
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
 */ class _i {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || X.comparator(n.key, r.key)
      : (n, r) => X.comparator(n.key, r.key)),
      (this.keyedMap = us()),
      (this.sortedSet = new Ge(this.comparator));
  }
  static emptySet(e) {
    return new _i(e.comparator);
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
    if (!(e instanceof _i) || this.size !== e.size) return !1;
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
    const r = new _i();
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
 */ class sm {
  constructor() {
    this.Tu = new Ge(X.comparator);
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
      new $i(e, n, _i.emptySet(n), s, r, i, !0, !1)
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
        Nl(this.query, e.query) &&
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
 */ class Wq {
  constructor() {
    (this.Au = void 0), (this.listeners = []);
  }
}
class Kq {
  constructor() {
    (this.queries = new Qi((e) => a_(e), Nl)),
      (this.onlineState = "Unknown"),
      (this.Ru = new Set());
  }
}
async function vd(t, e) {
  const n = ce(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new Wq())), i))
    try {
      s.Au = await n.onListen(r);
    } catch (o) {
      const a = gd(o, `Initialization of query '${Ou(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s),
    s.listeners.push(e),
    e.bu(n.onlineState),
    s.Au && e.Pu(s.Au) && _d(n);
}
async function yd(t, e) {
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
function Gq(t, e) {
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
  r && _d(n);
}
function Qq(t, e, n) {
  const r = ce(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function _d(t) {
  t.Ru.forEach((e) => {
    e.next();
  });
}
class wd {
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
 */ class F_ {
  constructor(e) {
    this.key = e;
  }
}
class U_ {
  constructor(e) {
    this.key = e;
  }
}
class Yq {
  constructor(e, n) {
    (this.query = e),
      (this.Lu = n),
      (this.Uu = null),
      (this.current = !1),
      (this.qu = fe()),
      (this.mutatedKeys = fe()),
      (this.Ku = l_(e)),
      (this.Gu = new _i(this.Ku));
  }
  get Qu() {
    return this.Lu;
  }
  ju(e, n) {
    const r = n ? n.Wu : new sm(),
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
      (e.inorderTraversal((u, h) => {
        const d = i.get(u),
          f = id(this.query, h) ? h : null,
          g = !!d && this.mutatedKeys.has(d.key),
          v =
            !!f &&
            (f.hasLocalMutations ||
              (this.mutatedKeys.has(f.key) && f.hasCommittedMutations));
        let _ = !1;
        d && f
          ? d.data.isEqual(f.data)
            ? g !== v && (r.track({ type: 3, doc: f }), (_ = !0))
            : this.zu(d, f) ||
              (r.track({ type: 2, doc: f }),
              (_ = !0),
              ((l && this.Ku(f, l) > 0) || (c && this.Ku(f, c) < 0)) &&
                (a = !0))
          : !d && f
          ? (r.track({ type: 0, doc: f }), (_ = !0))
          : d &&
            !f &&
            (r.track({ type: 1, doc: d }), (_ = !0), (l || c) && (a = !0)),
          _ &&
            (f
              ? ((o = o.add(f)), (s = v ? s.add(u) : s.delete(u)))
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
        (function (h, d) {
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
          return f(h) - f(d);
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
          { Gu: this.Gu, Wu: new sm(), mutatedKeys: this.mutatedKeys, $i: !1 },
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
        this.qu.has(r) || n.push(new U_(r));
      }),
      this.qu.forEach((r) => {
        e.has(r) || n.push(new F_(r));
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
class Xq {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class Jq {
  constructor(e) {
    (this.key = e), (this.ec = !1);
  }
}
class Zq {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.nc = {}),
      (this.sc = new Qi((a) => a_(a), Nl)),
      (this.ic = new Map()),
      (this.rc = new Set()),
      (this.oc = new Ge(X.comparator)),
      (this.uc = new Map()),
      (this.cc = new cd()),
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
async function e1(t, e) {
  const n = u1(t);
  let r, i;
  const s = n.sc.get(e);
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.tc());
  else {
    const o = await Iq(n.localStore, kn(e));
    n.isPrimaryClient && O_(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId), (i = await t1(n, e, r, a === "current"));
  }
  return i;
}
async function t1(t, e, n, r) {
  t.dc = (u, h, d) =>
    (async function (f, g, v, _) {
      let b = g.view.ju(v);
      b.$i &&
        (b = await tm(f.localStore, g.query, !1).then(({ documents: A }) =>
          g.view.ju(A, b)
        ));
      const y = _ && _.targetChanges.get(g.targetId),
        x = g.view.applyChanges(b, f.isPrimaryClient, y);
      return am(f, g.targetId, x.Yu), x.snapshot;
    })(t, u, h, d);
  const i = await tm(t.localStore, e, !0),
    s = new Yq(e, i.Hi),
    o = s.ju(i.documents),
    a = bo.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline"
    ),
    l = s.applyChanges(o, t.isPrimaryClient, a);
  am(t, n, l.Yu);
  const c = new Xq(e, n, s);
  return (
    t.sc.set(e, c),
    t.ic.has(n) ? t.ic.get(n).push(e) : t.ic.set(n, [e]),
    l.snapshot
  );
}
async function n1(t, e) {
  const n = ce(t),
    r = n.sc.get(e),
    i = n.ic.get(r.targetId);
  if (i.length > 1)
    return (
      n.ic.set(
        r.targetId,
        i.filter((s) => !Nl(s, e))
      ),
      void n.sc.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await Mu(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              D_(n.remoteStore, r.targetId),
              $u(n, r.targetId);
          })
          .catch(vo)))
    : ($u(n, r.targetId), await Mu(n.localStore, r.targetId, !0));
}
async function r1(t, e, n) {
  const r = h1(t);
  try {
    const i = await (function (s, o) {
      const a = ce(s),
        l = ze.now(),
        c = o.reduce((d, f) => d.add(f.key), fe());
      let u, h;
      return a.persistence
        .runTransaction("Locally write mutations", "readwrite", (d) => {
          let f = Cn(),
            g = fe();
          return a.Gi.getEntries(d, c)
            .next((v) => {
              (f = v),
                f.forEach((_, b) => {
                  b.isValidDocument() || (g = g.add(_));
                });
            })
            .next(() => a.localDocuments.getOverlayedDocuments(d, f))
            .next((v) => {
              u = v;
              const _ = [];
              for (const b of o) {
                const y = CC(b, u.get(b.key).overlayedDocument);
                y != null &&
                  _.push(new pr(b.key, y, n_(y.value.mapValue), Ht.exists(!0)));
              }
              return a.mutationQueue.addMutationBatch(d, l, _, o);
            })
            .next((v) => {
              h = v;
              const _ = v.applyToLocalDocumentSet(u, g);
              return a.documentOverlayCache.saveOverlays(d, v.batchId, _);
            });
        })
        .then(() => ({ batchId: h.batchId, changes: __(u) }));
    })(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (s, o, a) {
        let l = s.ac[s.currentUser.toKey()];
        l || (l = new Ge(ke)),
          (l = l.insert(o, a)),
          (s.ac[s.currentUser.toKey()] = l);
      })(r, i.batchId, n),
      await To(r, i.changes),
      await Ul(r.remoteStore);
  } catch (i) {
    const s = gd(i, "Failed to persist write");
    n.reject(s);
  }
}
async function B_(t, e) {
  const n = ce(t);
  try {
    const r = await bq(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.uc.get(s);
      o &&
        (De(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.ec = !0)
          : i.modifiedDocuments.size > 0
          ? De(o.ec)
          : i.removedDocuments.size > 0 && (De(o.ec), (o.ec = !1)));
    }),
      await To(n, r, e);
  } catch (r) {
    await vo(r);
  }
}
function om(t, e, n) {
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
          for (const h of u.listeners) h.bu(o) && (l = !0);
        }),
          l && _d(a);
      })(r.eventManager, e),
      i.length && r.nc.Wo(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function i1(t, e, n) {
  const r = ce(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.uc.get(e),
    s = i && i.key;
  if (s) {
    let o = new Ge(X.comparator);
    o = o.insert(s, nt.newNoDocument(s, he.min()));
    const a = fe().add(s),
      l = new $l(he.min(), new Map(), new We(ke), o, a);
    await B_(r, l), (r.oc = r.oc.remove(s)), r.uc.delete(e), bd(r);
  } else
    await Mu(r.localStore, e, !1)
      .then(() => $u(r, e, n))
      .catch(vo);
}
async function s1(t, e) {
  const n = ce(t),
    r = e.batch.batchId;
  try {
    const i = await wq(n.localStore, e);
    H_(n, r, null),
      j_(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await To(n, i);
  } catch (i) {
    await vo(i);
  }
}
async function o1(t, e, n) {
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
                De(u !== null),
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
    H_(r, e, n),
      j_(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await To(r, i);
  } catch (i) {
    await vo(i);
  }
}
function j_(t, e) {
  (t.hc.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.hc.delete(e);
}
function H_(t, e, n) {
  const r = ce(t);
  let i = r.ac[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.ac[r.currentUser.toKey()] = i);
  }
}
function $u(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.ic.get(e)) t.sc.delete(r), n && t.nc._c(r, n);
  t.ic.delete(e),
    t.isPrimaryClient &&
      t.cc.ls(e).forEach((r) => {
        t.cc.containsKey(r) || z_(t, r);
      });
}
function z_(t, e) {
  t.rc.delete(e.path.canonicalString());
  const n = t.oc.get(e);
  n !== null &&
    (D_(t.remoteStore, n), (t.oc = t.oc.remove(e)), t.uc.delete(n), bd(t));
}
function am(t, e, n) {
  for (const r of n)
    r instanceof F_
      ? (t.cc.addReference(r.key, e), a1(t, r))
      : r instanceof U_
      ? (Q("SyncEngine", "Document no longer in limbo: " + r.key),
        t.cc.removeReference(r.key, e),
        t.cc.containsKey(r.key) || z_(t, r.key))
      : oe();
}
function a1(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.oc.get(n) ||
    t.rc.has(r) ||
    (Q("SyncEngine", "New document in limbo: " + n), t.rc.add(r), bd(t));
}
function bd(t) {
  for (; t.rc.size > 0 && t.oc.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.rc.values().next().value;
    t.rc.delete(e);
    const n = new X(Le.fromString(e)),
      r = t.lc.next();
    t.uc.set(r, new Jq(n)),
      (t.oc = t.oc.insert(n, r)),
      O_(t.remoteStore, new Vr(kn(Dl(n.path)), r, 2, ed.at));
  }
}
async function To(t, e, n) {
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
            const u = hd.Ci(l.targetId, c);
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
            O.forEach(l, (h) =>
              O.forEach(h.Si, (d) =>
                c.persistence.referenceDelegate.addReference(u, h.targetId, d)
              ).next(() =>
                O.forEach(h.Di, (d) =>
                  c.persistence.referenceDelegate.removeReference(
                    u,
                    h.targetId,
                    d
                  )
                )
              )
            )
        );
      } catch (u) {
        if (!yo(u)) throw u;
        Q("LocalStore", "Failed to update sequence numbers: " + u);
      }
      for (const u of l) {
        const h = u.targetId;
        if (!u.fromCache) {
          const d = c.Ui.get(h),
            f = d.snapshotVersion,
            g = d.withLastLimboFreeSnapshotVersion(f);
          c.Ui = c.Ui.insert(h, g);
        }
      }
    })(r.localStore, s));
}
async function l1(t, e) {
  const n = ce(t);
  if (!n.currentUser.isEqual(e)) {
    Q("SyncEngine", "User change. New user:", e.toKey());
    const r = await q_(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.hc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new B(C.CANCELLED, s));
          });
        }),
          i.hc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await To(n, r.ji);
  }
}
function c1(t, e) {
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
function u1(t) {
  const e = ce(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = B_.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = c1.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = i1.bind(null, e)),
    (e.nc.Wo = Gq.bind(null, e.eventManager)),
    (e.nc._c = Qq.bind(null, e.eventManager)),
    e
  );
}
function h1(t) {
  const e = ce(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = s1.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = o1.bind(null, e)),
    e
  );
}
class d1 {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.It = Vl(e.databaseInfo.databaseId)),
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
    return _q(this.persistence, new vq(), e.initialUser, this.It);
  }
  gc(e) {
    return new mq(ud.Bs, this.It);
  }
  mc(e) {
    return new Sq();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class f1 {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        om(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = l1.bind(
        null,
        this.syncEngine
      )),
      await zq(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new Kq();
  }
  createDatastore(e) {
    const n = Vl(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new xq(i));
    var i;
    return (function (s, o, a, l) {
      return new Oq(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (a) => om(this.syncEngine, a, 0)),
      (o = rm.C() ? new rm() : new kq()),
      new Nq(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, a, l, c) {
      const u = new Zq(r, i, s, o, a, l);
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
      Q("RemoteStore", "RemoteStore shutting down."),
        n._u.add(5),
        await Eo(n),
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
 */ class Ed {
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
 */ class p1 {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = kt.UNAUTHENTICATED),
      (this.clientId = Xy.R()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        Q("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          Q("FirestoreClient", "Received new app check token=", s),
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
      throw new B(
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
          const r = gd(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function m1(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    Q("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await q_(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function g1(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await v1(t);
  Q("FirestoreClient", "Initializing OnlineComponentProvider");
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => im(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => im(e.remoteStore, s)),
    (t.onlineComponents = e);
}
async function v1(t) {
  return (
    t.offlineComponents ||
      (Q("FirestoreClient", "Using default OfflineComponentProvider"),
      await m1(t, new d1())),
    t.offlineComponents
  );
}
async function W_(t) {
  return (
    t.onlineComponents ||
      (Q("FirestoreClient", "Using default OnlineComponentProvider"),
      await g1(t, new f1())),
    t.onlineComponents
  );
}
function y1(t) {
  return W_(t).then((e) => e.syncEngine);
}
async function Fa(t) {
  const e = await W_(t),
    n = e.eventManager;
  return (
    (n.onListen = e1.bind(null, e.syncEngine)),
    (n.onUnlisten = n1.bind(null, e.syncEngine)),
    n
  );
}
function _1(t, e, n = {}) {
  const r = new _n();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const c = new Ed({
            next: (h) => {
              s.enqueueAndForget(() => yd(i, u));
              const d = h.docs.has(o);
              !d && h.fromCache
                ? l.reject(
                    new B(
                      C.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : d && h.fromCache && a && a.source === "server"
                ? l.reject(
                    new B(
                      C.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : l.resolve(h);
            },
            error: (h) => l.reject(h),
          }),
          u = new wd(Dl(o.path), c, { includeMetadataChanges: !0, Nu: !0 });
        return vd(i, u);
      })(await Fa(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
function w1(t, e, n = {}) {
  const r = new _n();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const c = new Ed({
            next: (h) => {
              s.enqueueAndForget(() => yd(i, u)),
                h.fromCache && a.source === "server"
                  ? l.reject(
                      new B(
                        C.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : l.resolve(h);
            },
            error: (h) => l.reject(h),
          }),
          u = new wd(o, c, { includeMetadataChanges: !0, Nu: !0 });
        return vd(i, u);
      })(await Fa(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
const lm = new Map();
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
 */ function K_(t, e, n) {
  if (!n)
    throw new B(
      C.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    );
}
function b1(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new B(C.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function cm(t) {
  if (!X.isDocumentKey(t))
    throw new B(
      C.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function um(t) {
  if (X.isDocumentKey(t))
    throw new B(
      C.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function Bl(t) {
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
function Dt(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new B(
        C.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = Bl(t);
      throw new B(
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
        throw new B(
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
        throw new B(
          C.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling =
        !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      b1(
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
 */ class Td {
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
      throw new B(
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
      throw new B(
        C.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new hm(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new Wk();
          switch (n.type) {
            case "gapi":
              const r = n.client;
              return new Qk(
                r,
                n.sessionIndex || "0",
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case "provider":
              return n.client;
            default:
              throw new B(
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
        const n = lm.get(e);
        n &&
          (Q("ComponentProvider", "Removing Datastore"),
          lm.delete(e),
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
    return new ar(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new gt(this.firestore, e, this._key);
  }
}
class Xi {
  constructor(e, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new Xi(this.firestore, e, this._query);
  }
}
class ar extends Xi {
  constructor(e, n, r) {
    super(e, n, Dl(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new gt(this.firestore, null, new X(e));
  }
  withConverter(e) {
    return new ar(this.firestore, e, this._path);
  }
}
function E1(t, e, ...n) {
  if (((t = yt(t)), K_("collection", "path", e), t instanceof Td)) {
    const r = Le.fromString(e, ...n);
    return um(r), new ar(t, null, r);
  }
  {
    if (!(t instanceof gt || t instanceof ar))
      throw new B(
        C.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(Le.fromString(e, ...n));
    return um(r), new ar(t.firestore, null, r);
  }
}
function wi(t, e, ...n) {
  if (
    ((t = yt(t)),
    arguments.length === 1 && (e = Xy.R()),
    K_("doc", "path", e),
    t instanceof Td)
  ) {
    const r = Le.fromString(e, ...n);
    return cm(r), new gt(t, null, new X(r));
  }
  {
    if (!(t instanceof gt || t instanceof ar))
      throw new B(
        C.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(Le.fromString(e, ...n));
    return (
      cm(r), new gt(t.firestore, t instanceof ar ? t.converter : null, new X(r))
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
 */ class T1 {
  constructor() {
    (this.$c = Promise.resolve()),
      (this.Bc = []),
      (this.Lc = !1),
      (this.Uc = []),
      (this.qc = null),
      (this.Kc = !1),
      (this.Gc = !1),
      (this.Qc = []),
      (this.xo = new R_(this, "async_queue_retry")),
      (this.jc = () => {
        const n = Lc();
        n &&
          Q("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.xo.bo();
      });
    const e = Lc();
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
      const n = Lc();
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
        if (!yo(e)) throw e;
        Q("AsyncQueue", "Operation failed with retryable error: " + e);
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
    const i = md.createAndSchedule(this, e, n, r, (s) => this.Jc(s));
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
function dm(t) {
  return (function (e, n) {
    if (typeof e != "object" || e === null) return !1;
    const r = e;
    for (const i of n) if (i in r && typeof r[i] == "function") return !0;
    return !1;
  })(t, ["next", "error", "complete"]);
}
class qn extends Td {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = new T1()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || G_(this), this._firestoreClient.terminate();
  }
}
function jl(t, e) {
  const n = typeof t == "object" ? t : vv(),
    r = typeof t == "string" ? t : e || "(default)";
  return Eh(n, "firestore").getImmediate({ identifier: r });
}
function Hl(t) {
  return (
    t._firestoreClient || G_(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function G_(t) {
  var e;
  const n = t._freezeSettings(),
    r = (function (i, s, o, a) {
      return new oC(
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
  t._firestoreClient = new p1(
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
        throw new B(
          C.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new ft(e);
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
      return new Vi(ot.fromBase64String(e));
    } catch (n) {
      throw new B(
        C.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(e) {
    return new Vi(ot.fromUint8Array(e));
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
 */ class Ji {
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
 */ class Id {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new B(
        C.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new B(
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
    return ke(this._lat, e._lat) || ke(this._long, e._long);
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
 */ const I1 = /^__.*__$/;
class A1 {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new pr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new wo(e, this.data, n, this.fieldTransforms);
  }
}
class Q_ {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return new pr(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function Y_(t) {
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
    return Ua(
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
    if (Y_(this.na) && I1.test(e))
      throw this.aa('Document fields cannot begin and end with "__"');
  }
}
class S1 {
  constructor(e, n, r) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.It = r || Vl(e));
  }
  fa(e, n, r, i = !1) {
    return new Wl(
      { na: e, methodName: n, la: r, path: ft.emptyPath(), ra: !1, ha: i },
      this.databaseId,
      this.It,
      this.ignoreUndefinedProperties
    );
  }
}
function Kl(t) {
  const e = t._freezeSettings(),
    n = Vl(t._databaseId);
  return new S1(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function X_(t, e, n, r, i, s = {}) {
  const o = t.fa(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  Sd("Data must be an object, but it was:", o, r);
  const a = Z_(r, o);
  let l, c;
  if (s.merge) (l = new jt(o.fieldMask)), (c = o.fieldTransforms);
  else if (s.mergeFields) {
    const u = [];
    for (const h of s.mergeFields) {
      const d = Vu(e, h, n);
      if (!o.contains(d))
        throw new B(
          C.INVALID_ARGUMENT,
          `Field '${d}' is specified in your field mask but missing from your input data.`
        );
      tw(u, d) || u.push(d);
    }
    (l = new jt(u)), (c = o.fieldTransforms.filter((h) => l.covers(h.field)));
  } else (l = null), (c = o.fieldTransforms);
  return new A1(new Ct(a), l, c);
}
class Gl extends Ji {
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
function J_(t, e, n) {
  return new Wl(
    { na: 3, la: e.settings.la, methodName: t._methodName, ra: n },
    e.databaseId,
    e.It,
    e.ignoreUndefinedProperties
  );
}
class Ad extends Ji {
  _toFieldTransform(e) {
    return new sd(e.path, new Qs());
  }
  isEqual(e) {
    return e instanceof Ad;
  }
}
class k1 extends Ji {
  constructor(e, n) {
    super(e), (this.da = n);
  }
  _toFieldTransform(e) {
    const n = J_(this, e, !0),
      r = this.da.map((s) => Zr(s, n)),
      i = new Ni(r);
    return new sd(e.path, i);
  }
  isEqual(e) {
    return this === e;
  }
}
class C1 extends Ji {
  constructor(e, n) {
    super(e), (this.da = n);
  }
  _toFieldTransform(e) {
    const n = J_(this, e, !0),
      r = this.da.map((s) => Zr(s, n)),
      i = new Li(r);
    return new sd(e.path, i);
  }
  isEqual(e) {
    return this === e;
  }
}
function q1(t, e, n, r) {
  const i = t.fa(1, e, n);
  Sd("Data must be an object, but it was:", i, r);
  const s = [],
    o = Ct.empty();
  Xr(r, (l, c) => {
    const u = kd(e, l, n);
    c = yt(c);
    const h = i.ua(u);
    if (c instanceof Gl) s.push(u);
    else {
      const d = Zr(c, h);
      d != null && (s.push(u), o.set(u, d));
    }
  });
  const a = new jt(s);
  return new Q_(o, a, i.fieldTransforms);
}
function x1(t, e, n, r, i, s) {
  const o = t.fa(1, e, n),
    a = [Vu(e, r, n)],
    l = [i];
  if (s.length % 2 != 0)
    throw new B(
      C.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let d = 0; d < s.length; d += 2) a.push(Vu(e, s[d])), l.push(s[d + 1]);
  const c = [],
    u = Ct.empty();
  for (let d = a.length - 1; d >= 0; --d)
    if (!tw(c, a[d])) {
      const f = a[d];
      let g = l[d];
      g = yt(g);
      const v = o.ua(f);
      if (g instanceof Gl) c.push(f);
      else {
        const _ = Zr(g, v);
        _ != null && (c.push(f), u.set(f, _));
      }
    }
  const h = new jt(c);
  return new Q_(u, h, o.fieldTransforms);
}
function R1(t, e, n, r = !1) {
  return Zr(n, t.fa(r ? 4 : 3, e));
}
function Zr(t, e) {
  if (ew((t = yt(t)))) return Sd("Unsupported field value:", e, t), Z_(t, e);
  if (t instanceof Ji)
    return (
      (function (n, r) {
        if (!Y_(r.na))
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
    if (typeof n == "number") return EC(r.It, n);
    if (typeof n == "boolean") return { booleanValue: n };
    if (typeof n == "string") return { stringValue: n };
    if (n instanceof Date) {
      const i = ze.fromDate(n);
      return { timestampValue: $a(r.It, i) };
    }
    if (n instanceof ze) {
      const i = new ze(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return { timestampValue: $a(r.It, i) };
    }
    if (n instanceof Id)
      return {
        geoPointValue: { latitude: n.latitude, longitude: n.longitude },
      };
    if (n instanceof Vi) return { bytesValue: I_(r.It, n._byteString) };
    if (n instanceof gt) {
      const i = r.databaseId,
        s = n.firestore._databaseId;
      if (!s.isEqual(i))
        throw r.aa(
          `Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`
        );
      return {
        referenceValue: ad(
          n.firestore._databaseId || r.databaseId,
          n._key.path
        ),
      };
    }
    throw r.aa(`Unsupported field value: ${Bl(n)}`);
  })(t, e);
}
function Z_(t, e) {
  const n = {};
  return (
    Jy(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Xr(t, (r, i) => {
          const s = Zr(i, e.ia(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function ew(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof ze ||
    t instanceof Id ||
    t instanceof Vi ||
    t instanceof gt ||
    t instanceof Ji
  );
}
function Sd(t, e, n) {
  if (
    !ew(n) ||
    !(function (r) {
      return (
        typeof r == "object" &&
        r !== null &&
        (Object.getPrototypeOf(r) === Object.prototype ||
          Object.getPrototypeOf(r) === null)
      );
    })(n)
  ) {
    const r = Bl(n);
    throw r === "an object" ? e.aa(t + " a custom object") : e.aa(t + " " + r);
  }
}
function Vu(t, e, n) {
  if ((e = yt(e)) instanceof zl) return e._internalPath;
  if (typeof e == "string") return kd(t, e);
  throw Ua("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const P1 = new RegExp("[~\\*/\\[\\]]");
function kd(t, e, n) {
  if (e.search(P1) >= 0)
    throw Ua(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new zl(...e.split("."))._internalPath;
  } catch {
    throw Ua(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function Ua(t, e, n, r, i) {
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
    new B(C.INVALID_ARGUMENT, a + t + l)
  );
}
function tw(t, e) {
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
 */ class nw {
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
        const e = new O1(
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
      const n = this._document.data.field(Cd("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class O1 extends nw {
  data() {
    return super.data();
  }
}
function Cd(t, e) {
  return typeof e == "string"
    ? kd(t, e)
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
class rw extends nw {
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
        const n = new aa(
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
      const r = this._document.data.field(Cd("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class aa extends rw {
  data(e = {}) {
    return super.data(e);
  }
}
class iw {
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
        new aa(
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
      throw new B(
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
              doc: new aa(
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
                const a = new aa(
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
                  { type: D1(o.type), doc: a, oldIndex: l, newIndex: c }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function D1(t) {
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
 */ function sw(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new B(
      C.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class N1 {}
function L1(t, ...e) {
  for (const n of e) t = n._apply(t);
  return t;
}
class M1 extends N1 {
  constructor(e, n, r) {
    super(), (this.wa = e), (this.ma = n), (this.ga = r), (this.type = "where");
  }
  _apply(e) {
    const n = Kl(e.firestore),
      r = (function (i, s, o, a, l, c, u) {
        let h;
        if (l.isKeyField()) {
          if (c === "array-contains" || c === "array-contains-any")
            throw new B(
              C.INVALID_ARGUMENT,
              `Invalid Query. You can't perform '${c}' queries on documentId().`
            );
          if (c === "in" || c === "not-in") {
            pm(u, c);
            const f = [];
            for (const g of u) f.push(fm(a, i, g));
            h = { arrayValue: { values: f } };
          } else h = fm(a, i, u);
        } else
          (c !== "in" && c !== "not-in" && c !== "array-contains-any") ||
            pm(u, c),
            (h = R1(o, s, u, c === "in" || c === "not-in"));
        const d = Tt.create(l, c, h);
        return (
          (function (f, g) {
            if (g.dt()) {
              const _ = s_(f);
              if (_ !== null && !_.isEqual(g.field))
                throw new B(
                  C.INVALID_ARGUMENT,
                  `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${g.field.toString()}'`
                );
              const b = i_(f);
              b !== null && V1(f, g.field, b);
            }
            const v = (function (_, b) {
              for (const y of _.filters) if (b.indexOf(y.op) >= 0) return y.op;
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
            if (v !== null)
              throw v === g.op
                ? new B(
                    C.INVALID_ARGUMENT,
                    `Invalid query. You cannot use more than one '${g.op.toString()}' filter.`
                  )
                : new B(
                    C.INVALID_ARGUMENT,
                    `Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`
                  );
          })(i, d),
          d
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
    return new Xi(
      e.firestore,
      e.converter,
      (function (i, s) {
        const o = i.filters.concat([s]);
        return new _o(
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
function $1(t, e, n) {
  const r = e,
    i = Cd("where", t);
  return new M1(i, r, n);
}
function fm(t, e, n) {
  if (typeof (n = yt(n)) == "string") {
    if (n === "")
      throw new B(
        C.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
      );
    if (!o_(e) && n.indexOf("/") !== -1)
      throw new B(
        C.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
      );
    const r = e.path.child(Le.fromString(n));
    if (!X.isDocumentKey(r))
      throw new B(
        C.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
      );
    return Fp(t, new X(r));
  }
  if (n instanceof gt) return Fp(t, n._key);
  throw new B(
    C.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bl(
      n
    )}.`
  );
}
function pm(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new B(
      C.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
    );
  if (t.length > 10)
    throw new B(
      C.INVALID_ARGUMENT,
      `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`
    );
}
function V1(t, e, n) {
  if (!n.isEqual(e))
    throw new B(
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
 */ class F1 {
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
    return new Id(Be(e.latitude), Be(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = e_(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Ws(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = ur(e);
    return new ze(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = Le.fromString(e);
    De(C_(r));
    const i = new t_(r.get(1), r.get(3)),
      s = new X(r.popFirst(5));
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
 */ function ow(t, e, n) {
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
 */ function U1(t) {
  t = Dt(t, gt);
  const e = Dt(t.firestore, qn);
  return _1(Hl(e), t._key).then((n) => lw(e, t, n));
}
class qd extends F1 {
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
function B1(t) {
  t = Dt(t, Xi);
  const e = Dt(t.firestore, qn),
    n = Hl(e),
    r = new qd(e);
  return sw(t._query), w1(n, t._query).then((i) => new iw(e, r, t, i));
}
function j1(t, e, n) {
  t = Dt(t, gt);
  const r = Dt(t.firestore, qn),
    i = ow(t.converter, e, n);
  return Ql(r, [
    X_(Kl(r), "setDoc", t._key, i, t.converter !== null, n).toMutation(
      t._key,
      Ht.none()
    ),
  ]);
}
function H1(t, e, n, ...r) {
  t = Dt(t, gt);
  const i = Dt(t.firestore, qn),
    s = Kl(i);
  let o;
  return (
    (o =
      typeof (e = yt(e)) == "string" || e instanceof zl
        ? x1(s, "updateDoc", t._key, e, n, r)
        : q1(s, "updateDoc", t._key, e)),
    Ql(i, [o.toMutation(t._key, Ht.exists(!0))])
  );
}
function kD(t) {
  return Ql(Dt(t.firestore, qn), [new od(t._key, Ht.none())]);
}
function CD(t, e) {
  const n = Dt(t.firestore, qn),
    r = wi(t),
    i = ow(t.converter, e);
  return Ql(n, [
    X_(
      Kl(t.firestore),
      "addDoc",
      r._key,
      i,
      t.converter !== null,
      {}
    ).toMutation(r._key, Ht.exists(!1)),
  ]).then(() => r);
}
function aw(t, ...e) {
  var n, r, i;
  t = yt(t);
  let s = { includeMetadataChanges: !1 },
    o = 0;
  typeof e[o] != "object" || dm(e[o]) || ((s = e[o]), o++);
  const a = { includeMetadataChanges: s.includeMetadataChanges };
  if (dm(e[o])) {
    const h = e[o];
    (e[o] = (n = h.next) === null || n === void 0 ? void 0 : n.bind(h)),
      (e[o + 1] = (r = h.error) === null || r === void 0 ? void 0 : r.bind(h)),
      (e[o + 2] =
        (i = h.complete) === null || i === void 0 ? void 0 : i.bind(h));
  }
  let l, c, u;
  if (t instanceof gt)
    (c = Dt(t.firestore, qn)),
      (u = Dl(t._key.path)),
      (l = {
        next: (h) => {
          e[o] && e[o](lw(c, t, h));
        },
        error: e[o + 1],
        complete: e[o + 2],
      });
  else {
    const h = Dt(t, Xi);
    (c = Dt(h.firestore, qn)), (u = h._query);
    const d = new qd(c);
    (l = {
      next: (f) => {
        e[o] && e[o](new iw(c, d, h, f));
      },
      error: e[o + 1],
      complete: e[o + 2],
    }),
      sw(t._query);
  }
  return (function (h, d, f, g) {
    const v = new Ed(g),
      _ = new wd(d, v, f);
    return (
      h.asyncQueue.enqueueAndForget(async () => vd(await Fa(h), _)),
      () => {
        v.Rc(), h.asyncQueue.enqueueAndForget(async () => yd(await Fa(h), _));
      }
    );
  })(Hl(c), u, a, l);
}
function Ql(t, e) {
  return (function (n, r) {
    const i = new _n();
    return (
      n.asyncQueue.enqueueAndForget(async () => r1(await y1(n), r, i)),
      i.promise
    );
  })(Hl(t), e);
}
function lw(t, e, n) {
  const r = n.docs.get(e._key),
    i = new qd(t);
  return new rw(
    t,
    i,
    e._key,
    r,
    new hs(n.hasPendingWrites, n.fromCache),
    e.converter
  );
}
function qD() {
  return new Ad("serverTimestamp");
}
function xD(...t) {
  return new k1("arrayUnion", t);
}
function RD(...t) {
  return new C1("arrayRemove", t);
}
(function (t, e = !0) {
  (function (n) {
    Gi = n;
  })(no),
    qi(
      new Br(
        "firestore",
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider("app").getImmediate(),
            o = new qn(
              new Kk(n.getProvider("auth-internal")),
              new Xk(n.getProvider("app-check-internal")),
              (function (a, l) {
                if (
                  !Object.prototype.hasOwnProperty.apply(a.options, [
                    "projectId",
                  ])
                )
                  throw new B(
                    C.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new t_(a.options.projectId, l);
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
    or(Dp, "3.5.0", t),
    or(Dp, "3.5.0", "esm2017");
})();
const cw = {
    0: "",
    1: "mundano-no-text-banner-icon.png",
    2: "recruta-no-text-banner-icon.png",
    3: "operador-no-text-banner-icon.png",
    4: "agente-especial-no-text-banner-icon.png",
    5: "agente-de-elite-no-text-banner-icon.png",
  },
  PD = {
    0: "Nenhuma",
    1: "Mundano",
    2: "Recruta",
    3: "Operador",
    4: "Agente Especial",
    5: "Agente de Elite",
  },
  uw = (t) => (Hi("data-v-69179e4e"), (t = t()), zi(), t),
  z1 = { class: "header" },
  W1 = { class: "header-content" },
  K1 = ["onMouseup"],
  G1 = uw(() =>
    I("img", { class: "cris-icon", src: cv, alt: "cris icon" }, null, -1)
  ),
  Q1 = uw(() =>
    I("img", { class: "cris-text", src: uv, alt: "cris logo" }, null, -1)
  ),
  Y1 = [G1, Q1],
  X1 = { key: 0, class: "nav-container" },
  J1 = al(
    '<a href="https://www.catarse.me/crisordemparanormal" target="_blank" data-v-69179e4e><h3 class="agents-login" data-v-69179e4e> Patente </h3></a><div class="icons-container" data-v-69179e4e><a class="discord-link" href="https://discord.gg/gqqpj6xK" target="_blank" data-v-69179e4e><img class="icon" src="' +
      RT +
      '" alt="discord" data-v-69179e4e></a><a class="discord-link" href="https://twitter.com/CrisOrdemPrnml" target="_blank" data-v-69179e4e><img class="icon-twitter" src="' +
      PT +
      '" alt="twitter" data-v-69179e4e></a><a class="discord-link" href="https://www.twitch.tv/powered_by_soul" target="_blank" data-v-69179e4e><img class="icon-twitch" src="' +
      OT +
      '" alt="twitch" data-v-69179e4e></a></div>',
    2
  ),
  Z1 = { key: 1 },
  ex = { key: 0 },
  tx = { key: 1 },
  nx = { key: 0, class: "user-container" },
  rx = ["src"],
  ix = { key: 1, class: "profile-picture-container" },
  sx = ["src"],
  ox = { class: "user-name" },
  ax = at({
    __name: "HeaderDesktopView",
    setup(t) {
      const e = oo(),
        n = jl(),
        r = yh(),
        i = ue(!1),
        s = ue(!0),
        o = ue(),
        a = ue(),
        l = () => {
          const d = new Ot();
          d.setCustomParameters({ prompt: "select_account" }), Vs(e, d);
        },
        c = () => {
          o.value &&
            r.push({ name: "user-profile", params: { id: o.value.uid } });
        },
        u = (d) => {
          if (s.value) return;
          const f = new Ot();
          f.setCustomParameters({ prompt: "select_account" }),
            Vs(e, f).then(() => {
              r.push({ name: d });
            });
        },
        h = () => {
          const d = r.resolve({ name: "home" });
          window.open(d.href, "_blank");
        };
      return (
        un(() => {
          ml(e, async (d) => {
            d
              ? ((i.value = !0),
                (a.value = aw(wi(n, "users", d.uid), (f) => {
                  f.data() && (o.value = f.data());
                })))
              : (i.value = !1),
              (s.value = !1);
          });
        }),
        Zs(() => {
          a.value && a.value();
        }),
        (d, f) => {
          var v, _;
          const g = En("router-link");
          return (
            j(),
            de("div", z1, [
              I("div", W1, [
                I(
                  "div",
                  {
                    class: "logo",
                    onClick:
                      f[0] || (f[0] = (b) => d.$router.push({ name: "home" })),
                    onMouseup: _a(h, ["middle"]),
                  },
                  Y1,
                  40,
                  K1
                ),
                s.value
                  ? Fe("", !0)
                  : (j(),
                    de("div", X1, [
                      i.value
                        ? (j(),
                          Oe(
                            g,
                            { key: 0, to: { name: "character-list" } },
                            { default: Je(() => [Ft(" Agents ")]), _: 1 }
                          ))
                        : (j(),
                          de(
                            "h3",
                            {
                              key: 1,
                              class: "agents-login",
                              onClick:
                                f[1] || (f[1] = (b) => u("character-list")),
                            },
                            " Agents "
                          )),
                      i.value
                        ? (j(),
                          Oe(
                            g,
                            { key: 2, to: { name: "campaigns-list" } },
                            { default: Je(() => [Ft(" Campaigns ")]), _: 1 }
                          ))
                        : Fe("", !0),
                      i.value
                        ? (j(),
                          Oe(
                            g,
                            { key: 3, to: { name: "creatures-list" } },
                            { default: Je(() => [Ft(" Threats ")]), _: 1 }
                          ))
                        : (j(),
                          de(
                            "h3",
                            {
                              key: 4,
                              class: "agents-login",
                              onClick:
                                f[2] || (f[2] = (b) => u("campaigns-list")),
                            },
                            " Campaigns "
                          )),
                      i.value
                        ? (j(),
                          Oe(
                            g,
                            { key: 5, to: { name: "homebrews-list" } },
                            { default: Je(() => [Ft(" Homebrew ")]), _: 1 }
                          ))
                        : (j(),
                          de(
                            "h3",
                            {
                              key: 6,
                              class: "agents-login",
                              onClick:
                                f[3] || (f[3] = (b) => u("homebrew-list")),
                            },
                            " Homebrew "
                          )),
                      J1,
                    ])),
                s.value
                  ? Fe("", !0)
                  : (j(),
                    de("div", Z1, [
                      i.value
                        ? (j(),
                          de("div", tx, [
                            o.value
                              ? (j(),
                                de("div", nx, [
                                  o.value.tier > 0
                                    ? (j(),
                                      de(
                                        "img",
                                        {
                                          key: 0,
                                          class: "tier-picture",
                                          src: `/img/${Ye(cw)[o.value.tier]}`,
                                          alt: "banner",
                                        },
                                        null,
                                        8,
                                        rx
                                      ))
                                    : Fe("", !0),
                                  (v = o.value) != null && v.pictureURL
                                    ? (j(),
                                      de("div", ix, [
                                        I(
                                          "img",
                                          {
                                            class: "profile-picture",
                                            src: o.value.pictureURL,
                                            alt: "foto agente",
                                          },
                                          null,
                                          8,
                                          sx
                                        ),
                                      ]))
                                    : Fe("", !0),
                                  I("div", null, [
                                    I(
                                      "h3",
                                      ox,
                                      Ju(
                                        (_ = o.value) == null ? void 0 : _.name
                                      ),
                                      1
                                    ),
                                    I(
                                      "button",
                                      { class: "login-button", onClick: c },
                                      " Profile "
                                    ),
                                  ]),
                                ]))
                              : Fe("", !0),
                          ]))
                        : (j(),
                          de("div", ex, [
                            I(
                              "button",
                              { class: "login-button", onClick: l },
                              " LOGIN "
                            ),
                          ])),
                    ])),
              ]),
            ])
          );
        }
      );
    },
  }),
  Zi = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, i] of e) n[r] = i;
    return n;
  },
  lx = Zi(ax, [["__scopeId", "data-v-69179e4e"]]),
  cx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAWSURBVHgBY6AFYP4PBAewUoPbFMoBAE11OPW6yVcZAAAAAElFTkSuQmCC",
  hw =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012%2019%206.41z'/%3e%3c/svg%3e",
  Io = (t) => (Hi("data-v-e2ec479c"), (t = t()), zi(), t),
  ux = { key: 0, class: "header-closed" },
  hx = Io(() =>
    I("img", { class: "open-header-img", src: cx, alt: "fechar" }, null, -1)
  ),
  dx = [hx],
  fx = Io(() => I("img", { src: hw, alt: "fechar" }, null, -1)),
  px = [fx],
  mx = Io(() =>
    I("img", { class: "cris-icon", src: cv, alt: "cris icon" }, null, -1)
  ),
  gx = Io(() =>
    I("img", { class: "cris-text", src: uv, alt: "cris logo" }, null, -1)
  ),
  vx = [mx, gx],
  yx = { key: 0 },
  _x = { key: 0 },
  wx = { key: 1 },
  bx = { key: 0, class: "user-container" },
  Ex = ["src"],
  Tx = { key: 1, class: "profile-picture-container" },
  Ix = ["src"],
  Ax = { class: "user-name" },
  Sx = { key: 1, class: "nav-container" },
  kx = Io(() => I("h3", { class: "agents-login" }, " Rank ", -1)),
  Cx = [kx],
  qx = al(
    '<div class="discord-link" data-v-e2ec479c><a href="https://discord.gg/gqqpj6xK" target="_blank" data-v-e2ec479c> Discord </a></div><div class="discord-link" data-v-e2ec479c><a href="https://twitter.com/CrisOrdemPrnml" target="_blank" data-v-e2ec479c> Twitter </a></div><div class="discord-link" data-v-e2ec479c><a href="https://www.twitch.tv/powered_by_soul" target="_blank" data-v-e2ec479c> Twitch </a></div>',
    3
  ),
  xx = at({
    __name: "HeaderMobileView",
    setup(t) {
      const e = oo(),
        n = jl(),
        r = yh(),
        i = ue(!1),
        s = ue(!0),
        o = ue(!1),
        a = ue(null),
        l = ue(),
        c = ue(),
        u = () => {
          const g = new Ot();
          g.setCustomParameters({ prompt: "select_account" }), Vs(e, g);
        },
        h = () => {
          var g;
          (o.value = !1),
            r.push({
              name: "user-profile",
              params: { id: (g = l.value) == null ? void 0 : g.uid },
            });
        },
        d = () => {
          (o.value = !1), r.push({ name: "home" });
        },
        f = (g) => {
          if (s.value) return;
          const v = new Ot();
          v.setCustomParameters({ prompt: "select_account" }),
            Vs(e, v).then(() => {
              (o.value = !o.value), r.push({ name: g });
            });
        };
      return (
        un(() => {
          ml(e, async (g) => {
            g
              ? ((i.value = !0),
                (c.value = aw(wi(n, "users", g.uid), (v) => {
                  v.data() && (l.value = v.data());
                })))
              : (i.value = !1),
              (s.value = !1);
          });
        }),
        Zs(() => {
          c.value && c.value();
        }),
        EE(a, () => (o.value = !o.value)),
        (g, v) => {
          var b;
          const _ = En("router-link");
          return o.value
            ? (j(),
              de(
                "div",
                { key: 1, ref_key: "menuRef", ref: a, class: "header" },
                [
                  I(
                    "button",
                    {
                      class: "close-header-button button-naked",
                      onClick: v[1] || (v[1] = (y) => (o.value = !o.value)),
                    },
                    px
                  ),
                  I("div", { class: "logo", onClick: d }, vx),
                  s.value
                    ? Fe("", !0)
                    : (j(),
                      de("div", yx, [
                        i.value
                          ? (j(),
                            de("div", wx, [
                              l.value
                                ? (j(),
                                  de("div", bx, [
                                    l.value.tier > 0
                                      ? (j(),
                                        de(
                                          "img",
                                          {
                                            key: 0,
                                            class: "tier-picture",
                                            src: `/img/${Ye(cw)[l.value.tier]}`,
                                            alt: "banner",
                                          },
                                          null,
                                          8,
                                          Ex
                                        ))
                                      : Fe("", !0),
                                    l.value.pictureURL
                                      ? (j(),
                                        de("div", Tx, [
                                          I(
                                            "img",
                                            {
                                              class: "profile-picture",
                                              src: l.value.pictureURL,
                                              alt: "foto agente",
                                            },
                                            null,
                                            8,
                                            Ix
                                          ),
                                        ]))
                                      : Fe("", !0),
                                    I("div", null, [
                                      I(
                                        "h3",
                                        Ax,
                                        Ju(
                                          (b = l.value) == null
                                            ? void 0
                                            : b.name
                                        ),
                                        1
                                      ),
                                      I(
                                        "button",
                                        { class: "login-button", onClick: h },
                                        " Ver Perfil "
                                      ),
                                    ]),
                                  ]))
                                : Fe("", !0),
                            ]))
                          : (j(),
                            de("div", _x, [
                              I(
                                "button",
                                { class: "login-button", onClick: u },
                                " LOGIN "
                              ),
                            ])),
                      ])),
                  s.value
                    ? Fe("", !0)
                    : (j(),
                      de("div", Sx, [
                        i.value
                          ? (j(),
                            Oe(
                              _,
                              {
                                key: 0,
                                class: "link",
                                to: { name: "character-list" },
                                onClick:
                                  v[2] || (v[2] = (y) => (o.value = !o.value)),
                              },
                              { default: Je(() => [Ft(" Agents ")]), _: 1 }
                            ))
                          : (j(),
                            de(
                              "h3",
                              {
                                key: 1,
                                class: "agents-login",
                                onClick:
                                  v[3] || (v[3] = (y) => f("character-list")),
                              },
                              " Agents "
                            )),
                        i.value
                          ? (j(),
                            Oe(
                              _,
                              {
                                key: 2,
                                class: "link",
                                to: { name: "campaigns-list" },
                                onClick:
                                  v[4] || (v[4] = (y) => (o.value = !o.value)),
                              },
                              { default: Je(() => [Ft(" Campaigns ")]), _: 1 }
                            ))
                          : Fe("", !0),
                        i.value
                          ? (j(),
                            Oe(
                              _,
                              {
                                key: 3,
                                class: "link",
                                to: { name: "creatures-list" },
                                onClick:
                                  v[5] || (v[5] = (y) => (o.value = !o.value)),
                              },
                              { default: Je(() => [Ft(" Threats ")]), _: 1 }
                            ))
                          : (j(),
                            de(
                              "h3",
                              {
                                key: 4,
                                class: "agents-login",
                                onClick:
                                  v[6] || (v[6] = (y) => f("campaigns-list")),
                              },
                              " Campaigns "
                            )),
                        i.value
                          ? (j(),
                            Oe(
                              _,
                              {
                                key: 5,
                                class: "link",
                                to: { name: "homebrews-list" },
                                onClick:
                                  v[7] || (v[7] = (y) => (o.value = !o.value)),
                              },
                              { default: Je(() => [Ft(" Homebrew ")]), _: 1 }
                            ))
                          : (j(),
                            de(
                              "h3",
                              {
                                key: 6,
                                class: "agents-login",
                                onClick:
                                  v[8] || (v[8] = (y) => f("homebrew-list")),
                              },
                              " Homebrew "
                            )),
                        I(
                          "a",
                          {
                            class: "outer-link",
                            href: "https://www.catarse.me/crisordemparanormal",
                            target: "_blank",
                            onClick:
                              v[9] || (v[9] = (y) => (o.value = !o.value)),
                          },
                          Cx
                        ),
                        qx,
                      ])),
                ],
                512
              ))
            : (j(),
              de("div", ux, [
                I(
                  "button",
                  {
                    class: "open-header-button button-naked",
                    onClick: v[0] || (v[0] = (y) => (o.value = !o.value)),
                  },
                  dx
                ),
              ]));
        }
      );
    },
  }),
  Rx = Zi(xx, [["__scopeId", "data-v-e2ec479c"]]),
  Px = { key: 0 },
  Ox = at({
    __name: "HeaderView",
    setup(t) {
      const e = _h(),
        { width: n } = Jg(),
        r = Re(() => e.path),
        i = Re(() => !r.value.includes("/agente/stream/"));
      return (s, o) =>
        i.value
          ? (j(),
            de("div", Px, [
              Ye(n) >= 1023
                ? (j(), Oe(lx, { key: 0 }))
                : (j(), Oe(Rx, { key: 1 })),
            ]))
          : Fe("", !0);
    },
  }),
  Dx = at({
    __name: "DividerView",
    props: { noMargin: Boolean, whiteColor: Boolean },
    setup(t) {
      cE((r) => ({ a469e230: n.value }));
      const e = t,
        n = Re(() =>
          e.whiteColor
            ? "1px solid var(--color-white)"
            : "1px solid var(--color-primary)"
        );
      return (r, i) => (
        j(),
        de(
          "div",
          { class: Pn({ noMargin: t.noMargin, divider: !t.noMargin }) },
          null,
          2
        )
      );
    },
  }),
  Nx = Zi(Dx, [["__scopeId", "data-v-4b31a08d"]]),
  xd = (t) => (Hi("data-v-9643cc4a"), (t = t()), zi(), t),
  Lx = { key: 0, class: "footer-container" },
  Mx = { class: "footer-wrapper" },
  $x = { class: "footer-links-container" },
  Vx = { class: "footer-links-row" },
  Fx = xd(() =>
    I(
      "a",
      { class: "links", href: "https://jamboeditora.com.br", target: "_blank" },
      " Compre Ordem Paranormal ",
      -1
    )
  ),
  Ux = { class: "footer-links-row" },
  Bx = xd(() =>
    I(
      "div",
      { class: "footer-links-row" },
      [
        I(
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
  jx = xd(() =>
    I(
      "div",
      { class: "footer-text-container" },
      [
        I(
          "div",
          { class: "footer-text" },
          " Ordem Paranormal é um produto da Jambô Editora e seus respectivos criadores, todos os direitos reservados. "
        ),
        I(
          "div",
          { class: "footer-text" },
          " C.R.I.S. - Ordem Paranormal is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC. "
        ),
      ],
      -1
    )
  ),
  Hx = at({
    __name: "FooterView",
    setup(t) {
      const e = _h(),
        n = Re(() => e.path),
        r = Re(
          () =>
            !(
              n.value.includes("/agente/stream/") ||
              n.value.includes("/agente/") ||
              n.value.includes("/escudo-do-mestre/")
            )
        );
      return (i, s) => {
        const o = En("router-link");
        return r.value
          ? (j(),
            de("div", Lx, [
              I("div", Mx, [
                I("div", $x, [
                  I("div", Vx, [
                    xe(
                      o,
                      { class: "links", to: "/sobre-o-cris" },
                      { default: Je(() => [Ft(" Sobre o C.R.I.S. ")]), _: 1 }
                    ),
                    Fx,
                  ]),
                  I("div", Ux, [
                    xe(
                      o,
                      { class: "links", to: "/creditos-e-contato" },
                      { default: Je(() => [Ft(" Entre em contato ")]), _: 1 }
                    ),
                    xe(
                      o,
                      { class: "links", to: "/politica-de-privacidade" },
                      {
                        default: Je(() => [Ft(" Política de Privacidade ")]),
                        _: 1,
                      }
                    ),
                  ]),
                  Bx,
                ]),
                xe(Nx, { "white-color": "", "no-margin": "" }),
                jx,
              ]),
            ]))
          : Fe("", !0);
      };
    },
  }),
  zx = Zi(Hx, [["__scopeId", "data-v-9643cc4a"]]),
  Wx = [
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
  Kx = [
    {
      imgPath: "/img/brutal-rpg/banner1.webp",
      imgAlt: "Apoie o Brutal RPG",
      adLink: "https://www.catarse.me/brutalRPG",
    },
    {
      imgPath: "/img/brutal-rpg/banner2.webp",
      imgAlt: "Apoie o Brutal RPG",
      adLink: "https://www.catarse.me/brutalRPG",
    },
    {
      imgPath: "/img/brutal-rpg/banner3.webp",
      imgAlt: "Apoie o Brutal RPG",
      adLink: "https://www.catarse.me/brutalRPG",
    },
    {
      imgPath: "/img/brutal-rpg/banner4.webp",
      imgAlt: "Apoie o Brutal RPG",
      adLink: "https://www.catarse.me/brutalRPG",
    },
    {
      imgPath: "/img/brutal-rpg/banner5.webp",
      imgAlt: "Apoie o Brutal RPG",
      adLink: "https://www.twitch.tv/nossamesa",
    },
  ],
  OD = (t, e) =>
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
  Mc = (t) => {
    for (let e = t.length - 1; e > 0; e--) {
      const n = Math.floor(Math.random() * (e + 1)),
        r = t[e];
      (t[e] = t[n]), (t[n] = r);
    }
    return t;
  },
  Gx = { key: 0, class: "ads-container" },
  Qx = { class: "ad-img-container scale-in-center" },
  Yx = ["src", "alt"],
  Xx = 9e3,
  Jx = 27e5,
  Zx = at({
    __name: "AdsComponent",
    setup(t) {
      const e = _h(),
        n = ue([]),
        r = Mc(Wx),
        i = Mc(Kx),
        s = ue(0),
        o = ue(!1),
        a = ue(),
        l = (g) => {
          var v;
          return (v = window.open(g, "_blank")) == null ? void 0 : v.focus();
        },
        c = () => (o.value = !0),
        u = () => {
          (o.value = !1), clearTimeout(a.value);
        },
        h = () => setTimeout(c, Xx),
        d = () => {
          setTimeout(() => {
            s.value < n.value.length - 1 ? s.value++ : (s.value = 0), c(), d();
          }, Jx);
        },
        f = Re(() => !!e.fullPath.includes("/stream/"));
      return (
        ut(o, () => {
          o.value && (a.value = window.setTimeout(() => (o.value = !1), 6e4));
        }),
        un(async () => {
          (n.value = [...r, ...i]),
            (n.value = Mc(n.value)),
            n.value.unshift(r[0]),
            h(),
            d();
        }),
        (g, v) =>
          o.value && !f.value
            ? (j(),
              de("div", Gx, [
                I("div", Qx, [
                  I(
                    "img",
                    {
                      src: n.value[s.value].imgPath,
                      alt: n.value[s.value].imgAlt,
                      class: "ad-img",
                      onClick:
                        v[0] || (v[0] = (_) => l(n.value[s.value].adLink)),
                    },
                    null,
                    8,
                    Yx
                  ),
                  I("img", {
                    class: "close-icon",
                    src: hw,
                    alt: "fechar",
                    onClick: u,
                  }),
                ]),
              ]))
            : Fe("", !0)
      );
    },
  }),
  eR = Zi(Zx, [["__scopeId", "data-v-6a2c8e1d"]]),
  tR = { class: "main-content" },
  nR = at({
    __name: "App",
    setup(t) {
      return (e, n) => {
        const r = En("router-view");
        return (
          j(), de("div", null, [xe(Ox), I("div", tR, [xe(r)]), xe(zx), xe(eR)])
        );
      };
    },
  }),
  rR = "modulepreload",
  iR = function (t) {
    return "/" + t;
  },
  mm = {},
  S = function (e, n, r) {
    if (!n || n.length === 0) return e();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = iR(s)), s in mm)) return;
        mm[s] = !0;
        const o = s.endsWith(".css"),
          a = o ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let u = i.length - 1; u >= 0; u--) {
            const h = i[u];
            if (h.href === s && (!o || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${a}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = o ? "stylesheet" : rR),
          o || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = s),
          document.head.appendChild(c),
          o)
        )
          return new Promise((u, h) => {
            c.addEventListener("load", u),
              c.addEventListener("error", () =>
                h(new Error(`Unable to preload CSS for ${s}`))
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
  sR = "/img/logotipo-cris-icon.webp",
  oR = "/img/ficha-de-agente.webp",
  aR = "/img/ficha-de-agente-mobile.webp",
  lR = "/img/agentes-lista.webp",
  cR = "/img/agentes-lista-mobile.webp",
  uR = "/img/campanha.webp",
  hR = "/img/campanha-mobile.webp",
  dR = "/img/escudo-do-mestre.webp",
  fR = "/img/escudo-do-mestre-mobile.webp",
  pR = "/img/homebrew-lista.webp",
  mR = "/img/catarse-banners.webp",
  Lt = (t) => (Hi("data-v-36a2ac07"), (t = t()), zi(), t),
  gR = { class: "home-container" },
  vR = Lt(() =>
    I(
      "div",
      null,
      [I("img", { class: "logotipo-cris", src: sR, alt: "logotipo" })],
      -1
    )
  ),
  yR = Lt(() =>
    I(
      "div",
      { class: "logo-text-container" },
      [
        I(
          "div",
          { class: "logo-subtitle" },
          " Complete platform to play "
        ),
        I("h1", { class: "logo-title" }, " Ordem Paranormal "),
      ],
      -1
    )
  ),
  _R = Lt(() => I("div", { class: "divider" }, null, -1)),
  wR = { class: "content-container" },
  bR = Lt(() =>
    I(
      "div",
      { class: "text-container" },
      [
        I("h2", { class: "content-title" }, " Digital Character Sheet "),
        I(
          "p",
          { class: "content-text" },
          " With all the information you need in a simple and quick manner. Use your skills, attributes and attacks with a single click. When the time to play comes, you only need to worry about your immersion "
        ),
      ],
      -1
    )
  ),
  ER = { class: "content-img" },
  TR = { class: "ficha-de-agente-img", src: oR, alt: "ficha-de-agente" },
  IR = { class: "ficha-de-agente-img", src: aR, alt: "ficha-de-agente" },
  AR = Lt(() => I("div", { class: "divider" }, null, -1)),
  SR = { class: "content-container-reverse" },
  kR = Lt(() =>
    I(
      "div",
      { class: "text-container" },
      [
        I("h2", { class: "content-title" }, " All your agents on a single place "),
        I(
          "p",
          { class: "content-text" },
          " Never worry about losing a character sheet, all of your agents are always here ready for their next mission "
        ),
      ],
      -1
    )
  ),
  CR = { class: "content-img" },
  qR = { class: "agentes-lista-img", src: lR, alt: "agentes-lista" },
  xR = { class: "agentes-lista-img", src: cR, alt: "agentes-lista" },
  RR = Lt(() => I("div", { class: "divider" }, null, -1)),
  PR = { class: "content-container" },
  OR = Lt(() =>
    I(
      "div",
      { class: "text-container" },
      [
        I("h2", { class: "content-title" }, " Participate in missions "),
        I(
          "p",
          { class: "content-text" },
          " Bring your players together in a campaign and add your agents to have access to their sheets, dice results and other useful tools "
        ),
      ],
      -1
    )
  ),
  DR = { class: "content-img" },
  NR = { class: "campanha-img", src: uR, alt: "campanha" },
  LR = { class: "campanha-img", src: hR, alt: "campanha" },
  MR = Lt(() => I("div", { class: "divider" }, null, -1)),
  $R = { class: "content-container-reverse" },
  VR = Lt(() =>
    I(
      "div",
      { class: "text-container" },
      [
        I("h2", { class: "content-title" }, " DM Screen "),
        I(
          "p",
          { class: "content-text" },
          " You don't need to worry about checking all of your players sheets anymore, the DM Screen has everything you need "
        ),
      ],
      -1
    )
  ),
  FR = { class: "content-img" },
  UR = { class: "escudo-do-mestre-img", src: dR, alt: "escudo-do-mestre" },
  BR = { class: "escudo-do-mestre-img", src: fR, alt: "escudo-do-mestre" },
  jR = al(
    '<div class="divider" data-v-36a2ac07></div><div class="content-container" data-v-36a2ac07><div class="text-container" data-v-36a2ac07><h2 class="content-title" data-v-36a2ac07> Create your homebrew </h2><p class="content-text" data-v-36a2ac07> Create your own abilities, rituals and items to add to your character sheets and to share with the community </p></div><div class="content-img" data-v-36a2ac07><img class="homebrew-lista-img" src="' +
      pR +
      '" alt="homebrew-lista" data-v-36a2ac07></div></div><div class="divider" data-v-36a2ac07></div>',
    3
  ),
  HR = { class: "catarse-container" },
  zR = { class: "catarse-text-container" },
  WR = Lt(() =>
    I("h2", { class: "content-title" }, " Join the Ordo ", -1)
  ),
  KR = Lt(() =>
    I(
      "p",
      { class: "content-text" },
      " Support C.R.I.S. and receive exclusive benefits! ",
      -1
    )
  ),
  GR = ["onMouseup"],
  QR = Lt(() =>
    I(
      "div",
      { class: "content-img" },
      [
        I("img", {
          class: "catarse-banners-img",
          src: mR,
          alt: "catarse-banners",
        }),
      ],
      -1
    )
  ),
  YR = at({
    __name: "HomeView",
    setup(t) {
      const e = oo(),
        n = yh(),
        r = ue(!1),
        i = jl(),
        { width: s } = Jg(),
        o = ue(!0),
        a = () => {
          const u = new Ot();
          u.setCustomParameters({ prompt: "select_account" }),
            Vs(e, u).then(async () => {
              var v;
              const h = [],
                d = E1(i, "characters"),
                f = L1(
                  d,
                  $1("uid", "==", (v = e.currentUser) == null ? void 0 : v.uid)
                ),
                g = await B1(f);
              for (const _ of g.docs) {
                const b = _.data();
                (b.id = _.id), h.push(b);
              }
              h.length > 0
                ? n.push({ name: "character-list" })
                : n.push({ name: "character-creation" });
            });
        },
        l = () => {
          o.value || (r.value ? n.push({ name: "character-list" }) : a());
        },
        c = () => {
          o.value ||
            window.open("https://www.catarse.me/crisordemparanormal", "_blank");
        };
      return (
        un(() => {
          ml(e, (u) => {
            u ? (r.value = !0) : (r.value = !1), (o.value = !1);
          });
        }),
        (u, h) => (
          j(),
          de("div", gR, [
            I("div", { class: "logotipo-container" }, [
              vR,
              yR,
              I("div", null, [
                I(
                  "button",
                  { class: "home-button button-primary", onClick: l },
                  " JOIN "
                ),
              ]),
            ]),
            _R,
            I("div", wR, [
              bR,
              I("div", ER, [
                Jt(I("img", TR, null, 512), [[Zt, Ye(s) >= 1023]]),
                Jt(I("img", IR, null, 512), [[Zt, Ye(s) < 1023]]),
              ]),
            ]),
            AR,
            I("div", SR, [
              kR,
              I("div", CR, [
                Jt(I("img", qR, null, 512), [[Zt, Ye(s) >= 1023]]),
                Jt(I("img", xR, null, 512), [[Zt, Ye(s) < 1023]]),
              ]),
            ]),
            RR,
            I("div", PR, [
              OR,
              I("div", DR, [
                Jt(I("img", NR, null, 512), [[Zt, Ye(s) >= 1023]]),
                Jt(I("img", LR, null, 512), [[Zt, Ye(s) < 1023]]),
              ]),
            ]),
            MR,
            I("div", $R, [
              VR,
              I("div", FR, [
                Jt(I("img", UR, null, 512), [[Zt, Ye(s) >= 1023]]),
                Jt(I("img", BR, null, 512), [[Zt, Ye(s) < 1023]]),
              ]),
            ]),
            jR,
            I("div", HR, [
              I("div", zR, [
                WR,
                KR,
                I(
                  "button",
                  {
                    class: "home-button button-primary catarse-button",
                    onClick: c,
                    onMouseup: _a(c, ["middle"]),
                  },
                  " Ver mais ",
                  40,
                  GR
                ),
              ]),
              QR,
            ]),
          ])
        )
      );
    },
  }),
  XR = Zi(YR, [["__scopeId", "data-v-36a2ac07"]]),
  dw = qT({
    history: zE("/"),
    routes: [
      { path: "/", name: "home", component: XR },
      {
        path: "/login",
        name: "login-page",
        component: () =>
          S(() => import("./LoginPage-GHNlnIyP.js"), __vite__mapDeps([0, 1])),
      },
      {
        path: "/agentes",
        name: "character-list",
        component: () =>
          S(
            () => import("./CharacterList-xmTRxDS7.js"),
            __vite__mapDeps([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanhas",
        name: "campaigns-list",
        component: () =>
          S(
            () => import("./CampaignsList-Qn1CHpAV.js"),
            __vite__mapDeps([14, 3, 4, 12, 15])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews",
        name: "homebrews-list",
        component: () =>
          S(
            () => import("./HomebrewList-WlF-OW5v.js"),
            __vite__mapDeps([
              16, 17, 18, 19, 20, 21, 22, 23, 5, 6, 3, 4, 12, 24, 25, 26, 27, 7,
              8, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/habilidade/:id",
        name: "homebrews-power",
        component: () =>
          S(
            () => import("./HomebrewPowerView-ehqrMGKG.js"),
            __vite__mapDeps([
              50, 3, 4, 20, 21, 22, 23, 51, 52, 53, 12, 7, 8, 46, 54,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/ritual/:id",
        name: "homebrews-ritual",
        component: () =>
          S(
            () => import("./HomebrewRitualView-tEajIrFt.js"),
            __vite__mapDeps([
              55, 3, 4, 28, 21, 22, 29, 30, 51, 52, 53, 12, 7, 8, 46, 56,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/item/:id",
        name: "homebrews-item",
        component: () =>
          S(
            () => import("./HomebrewItemView-sIAMyr5q.js"),
            __vite__mapDeps([
              57, 3, 4, 51, 52, 53, 33, 21, 22, 34, 12, 7, 8, 46, 58,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/homebrews/ameacas/:id",
        name: "homebrews-creature",
        component: () =>
          S(
            () => import("./HomebrewCreatureView-fwixu1XN.js"),
            __vite__mapDeps([
              59, 3, 4, 36, 21, 22, 37, 51, 52, 53, 12, 7, 8, 38, 39, 46, 60,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/perfil/:id",
        name: "user-profile",
        component: () =>
          S(
            () => import("./UserProfile-1vHZAVpv.js"),
            __vite__mapDeps([61, 41, 3, 4, 24, 44, 45, 46, 52, 62])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/criar-campanha",
        name: "campaign-create",
        component: () =>
          S(
            () => import("./CampaignCreate-z1iPWZXp.js"),
            __vite__mapDeps([63, 24, 25, 3, 4, 64, 65, 7, 8, 12, 66])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/editar-campanha/:id",
        name: "campaign-edit",
        component: () =>
          S(
            () => import("./CampaignEdit-QjcJkoRb.js"),
            __vite__mapDeps([67, 24, 25, 3, 4, 64, 65, 12, 68])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:id",
        name: "campaign-page",
        component: () =>
          S(
            () => import("./CampaignPage-oHl7Ojxy.js"),
            __vite__mapDeps([
              69, 3, 4, 9, 10, 11, 7, 8, 43, 44, 45, 46, 47, 17, 18, 51, 52, 53,
              70, 71, 12, 38, 39, 72,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/entrar/:id",
        name: "campaign-join",
        component: () =>
          S(
            () => import("./CampaignJoin-b36K6QCQ.js"),
            __vite__mapDeps([73, 3, 4, 12, 74])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/adicionar-agente/:id",
        name: "campaign-add-agent",
        component: () =>
          S(
            () => import("./CampaignAddAgent-D6TdBbav.js"),
            __vite__mapDeps([75, 9, 10, 11, 3, 4, 5, 6, 12, 76])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:id/criar-combate",
        name: "campaign-create-combat",
        component: () =>
          S(
            () => import("./CreateCombat-qsntCBxv.js"),
            __vite__mapDeps([
              77, 78, 36, 21, 22, 37, 17, 18, 5, 6, 24, 26, 27, 12, 46, 79,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/:campaignId/combate/:combatId",
        name: "campaign-edit-combat",
        component: () =>
          S(
            () => import("./EditCombat-Pgj4CfzA.js"),
            __vite__mapDeps([
              80, 78, 36, 21, 22, 37, 17, 18, 5, 6, 24, 26, 27, 46, 81,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/campanha/acesso-negado",
        name: "campaign-page-denied",
        component: () =>
          S(
            () => import("./CampaignPageDenied--M0U7YQS.js"),
            __vite__mapDeps([82, 83])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/escudo-do-mestre/:id",
        name: "master-screen",
        component: () =>
          S(
            () => import("./MasterScreen-RtS0zIxs.js"),
            __vite__mapDeps([
              84, 3, 4, 85, 29, 86, 87, 21, 88, 27, 46, 89, 17, 18, 64, 65, 70,
              71, 26, 90, 42, 24, 25, 31, 32, 91, 12, 38, 39, 7, 8, 40, 41, 43,
              44, 45, 47, 48, 92,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/novo-agente",
        name: "character-creation",
        component: () =>
          S(
            () => import("./CharacterCreation-U5qvSGAZ.js"),
            __vite__mapDeps([
              93, 26, 27, 87, 94, 20, 21, 22, 23, 95, 5, 6, 7, 8, 3, 4, 96, 88,
              46, 12, 97,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/agente/:id",
        name: "character-sheet",
        component: () =>
          S(
            () => import("./CharacterSheet-TvYbpJnF.js"),
            __vite__mapDeps([
              98, 44, 45, 7, 8, 85, 29, 86, 87, 21, 88, 27, 46, 89, 17, 18, 20,
              22, 23, 28, 30, 33, 34, 5, 6, 94, 95, 19, 3, 4, 12, 24, 25, 26,
              31, 32, 35, 64, 65, 10, 41, 43, 47, 99,
            ])
          ),
        props: !0,
      },
      {
        path: "/creditos-e-contato",
        name: "contact",
        component: () =>
          S(
            () => import("./ContactView-2x1jiRpL.js"),
            __vite__mapDeps([100, 101])
          ),
      },
      {
        path: "/agente/stream/:id",
        name: "character-stream",
        component: () =>
          S(
            () => import("./CharacterStream-Ooc0wLb5.js"),
            __vite__mapDeps([102, 41, 96, 88, 46, 103])
          ),
      },
      {
        path: "/agente/stream/pv/:id",
        name: "character-stream-pv",
        component: () =>
          S(
            () => import("./CharacterPv-9oD3vsLZ.js"),
            __vite__mapDeps([104, 96, 88, 46, 105])
          ),
      },
      {
        path: "/agente/stream/san/:id",
        name: "character-stream-san",
        component: () =>
          S(
            () => import("./CharacterSan-I0RYLM5e.js"),
            __vite__mapDeps([106, 96, 88, 46, 107])
          ),
      },
      {
        path: "/agente/stream/pe/:id",
        name: "character-stream-pe",
        component: () =>
          S(
            () => import("./CharacterPe-OQNePq29.js"),
            __vite__mapDeps([108, 96, 88, 46, 109])
          ),
      },
      {
        path: "/sobre-o-cris",
        name: "about-view",
        component: () =>
          S(
            () => import("./about-view-I9yxpQoz.js"),
            __vite__mapDeps([110, 111])
          ),
      },
      {
        path: "/politica-de-privacidade",
        name: "privacy-policy",
        component: () =>
          S(
            () => import("./privacy-policy-md6r9oHw.js"),
            __vite__mapDeps([112, 113])
          ),
      },
      {
        path: "/ameacas",
        name: "creatures-list",
        component: () =>
          S(
            () => import("./CreaturesList-3x9HKaDn.js"),
            __vite__mapDeps([
              114, 78, 36, 21, 22, 37, 17, 18, 38, 39, 12, 3, 4, 115,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/ameaca/:id",
        name: "creature-sheet",
        component: () =>
          S(
            () => import("./CreatureSheet-zdjRPf0M.js"),
            __vite__mapDeps([
              116, 78, 90, 86, 42, 21, 29, 17, 18, 24, 25, 26, 27, 31, 32, 46,
              91, 3, 4, 12, 38, 39, 117,
            ])
          ),
        meta: { requiresAuth: !0 },
      },
      {
        path: "/blog",
        name: "blog-view",
        component: () =>
          S(
            () => import("./blog-view-y3qIoxGN.js"),
            __vite__mapDeps([118, 119, 120])
          ),
      },
      {
        path: "/blog/persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel",
        name: "persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel",
        component: () =>
          S(
            () =>
              import(
                "./persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel-tgiuMGFH.js"
              ),
            __vite__mapDeps([121, 119, 120])
          ),
      },
      {
        path: "/blog/the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto",
        name: "the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto",
        component: () =>
          S(
            () =>
              import(
                "./the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto-U1ZIUEr8.js"
              ),
            __vite__mapDeps([122, 119, 120])
          ),
      },
      {
        path: "/blog/mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia",
        name: "mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia",
        component: () =>
          S(
            () =>
              import(
                "./mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia-LPkaCcgN.js"
              ),
            __vite__mapDeps([123, 119, 120])
          ),
      },
      {
        path: "/blog/genshin-impact-uma-jornada-alem-dos-limites",
        name: "genshin-impact-uma-jornada-alem-dos-limites",
        component: () =>
          S(
            () =>
              import(
                "./genshin-impact-uma-jornada-alem-dos-limites-E9FDJ20R.js"
              ),
            __vite__mapDeps([124, 119, 120])
          ),
      },
      {
        path: "/blog/final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva",
        name: "final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva",
        component: () =>
          S(
            () =>
              import(
                "./final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva-zFTT1fnm.js"
              ),
            __vite__mapDeps([125, 119, 120])
          ),
      },
      {
        path: "/blog/elden-ring-a-jornada-epica-alem-das-expectativas",
        name: "elden-ring-a-jornada-epica-alem-das-expectativas",
        component: () =>
          S(
            () =>
              import(
                "./elden-ring-a-jornada-epica-alem-das-expectativas-nYyktuYe.js"
              ),
            __vite__mapDeps([126, 119, 120])
          ),
      },
      {
        path: "/blog/divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo",
        name: "divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo",
        component: () =>
          S(
            () =>
              import(
                "./divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo-udZReaBC.js"
              ),
            __vite__mapDeps([127, 119, 120])
          ),
      },
      {
        path: "/blog/cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3",
        name: "cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3",
        component: () =>
          S(
            () =>
              import(
                "./cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3-GRaV75rz.js"
              ),
            __vite__mapDeps([128, 119, 120])
          ),
      },
      {
        path: "/blog/assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg",
        name: "assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg",
        component: () =>
          S(
            () =>
              import(
                "./assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg-fN700V8s.js"
              ),
            __vite__mapDeps([129, 119, 120])
          ),
      },
      {
        path: "/blog/o-que-e-rpg-de-mesa",
        name: "o-que-e-rpg-de-mesa",
        component: () =>
          S(
            () => import("./o-que-e-rpg-de-mesa-0AYjJjnw.js"),
            __vite__mapDeps([130, 119, 120])
          ),
      },
      {
        path: "/blog/o-rpg-ordem-paranormal",
        name: "o-rpg-ordem-paranormal",
        component: () =>
          S(
            () => import("./o-rpg-ordem-paranormal-9WZWM7DN.js"),
            __vite__mapDeps([131, 119, 120])
          ),
      },
      {
        path: "/blog/o-rpg-tormenta20",
        name: "o-rpg-tormenta20",
        component: () =>
          S(
            () => import("./o-rpg-tormenta20-uerJxTR3.js"),
            __vite__mapDeps([132, 119, 120])
          ),
      },
      {
        path: "/blog/3d-e-t-a-porta-de-entrada-pro-rpg-brasileiro",
        name: "3d&t-a-porta-de-entrada-pro-rpg-brasileiro",
        component: () =>
          S(
            () =>
              import(
                "./3d_t-a-porta-de-entrada-pro-rpg-brasileiro-bSMRfokK.js"
              ),
            __vite__mapDeps([133, 119, 120])
          ),
      },
      {
        path: "/blog/vampiro-a-mascara-perdura-ao-longo-das-decadas",
        name: "vampiro-a-mascara-perdura-ao-longo-das-decadas",
        component: () =>
          S(
            () =>
              import(
                "./vampiro-a-mascara-perdura-ao-longo-das-decadas-NksDyr38.js"
              ),
            __vite__mapDeps([134, 119, 120])
          ),
      },
      {
        path: "/blog/a-popularizacao-de-dungeons-e-dragons",
        name: "a-popularizacao-de-dungeons-&-dragons",
        component: () =>
          S(
            () => import("./a-popularizacao-de-dungeons-_-dragons-2MqfIe5C.js"),
            __vite__mapDeps([135, 119, 120])
          ),
      },
      {
        path: "/blog/criando-personagens-memoraveis-em-rpg-de-mesa",
        name: "criando-personagens-memoraveis-em-rpg-de-mesa",
        component: () =>
          S(
            () =>
              import(
                "./criando-personagens-memoraveis-em-rpg-de-mesa-KZ4tw5Mz.js"
              ),
            __vite__mapDeps([136, 119, 120])
          ),
      },
      {
        path: "/blog/diferentes-estilos-de-mestres-em-rpg-de-mesa",
        name: "diferentes-estilos-de-mestres-em-rpg-de-mesa",
        component: () =>
          S(
            () =>
              import(
                "./diferentes-estilos-de-mestres-em-rpg-de-mesa-Xy3HQDA-.js"
              ),
            __vite__mapDeps([137, 119, 120])
          ),
      },
      {
        path: "/blog/historia-do-rpg-uma-viagem-pela-evolucao-do-genero",
        name: "historia-do-rpg-uma-viagem-pela-evolucao-do-genero",
        component: () =>
          S(
            () =>
              import(
                "./historia-do-rpg-uma-viagem-pela-evolucao-do-genero-15KKvcFH.js"
              ),
            __vite__mapDeps([138, 119, 120])
          ),
      },
      {
        path: "/blog/gurps-o-rpg-generico",
        name: "gurps-o-rpg-generico",
        component: () =>
          S(
            () => import("./gurps-o-rpg-generico-vB2FXXj2.js"),
            __vite__mapDeps([139, 119, 120])
          ),
      },
      {
        path: "/blog/pathfinder-o-maior-rival-de-dungeons-e-dragons",
        name: "pathfinder-o-maior-rival-de-dungeons-&-dragons",
        component: () =>
          S(
            () =>
              import(
                "./pathfinder-o-maior-rival-de-dungeons-_-dragons-OOdWt8kI.js"
              ),
            __vite__mapDeps([140, 119, 120])
          ),
      },
      {
        path: "/blog/um-guia-completo-sobre-pathfinder",
        name: "um-guia-completo-sobre-pathfinder",
        component: () =>
          S(
            () => import("./um-guia-completo-sobre-pathfinder-f_RyH2xR.js"),
            __vite__mapDeps([141, 119, 120])
          ),
      },
      {
        path: "/blog/os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa",
        name: "os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa",
        component: () =>
          S(
            () =>
              import(
                "./os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa-sYceu5OU.js"
              ),
            __vite__mapDeps([142, 119, 120])
          ),
      },
      {
        path: "/blog/fate-core-system-e-o-sistema-mais-facil-do-mundo",
        name: "fate-core-system-e-o-sistema-mais-facil-do-mundo",
        component: () =>
          S(
            () =>
              import(
                "./fate-core-system-e-o-sistema-mais-facil-do-mundo-7iSCarR3.js"
              ),
            __vite__mapDeps([143, 119, 120])
          ),
      },
      {
        path: "/blog/dicas-para-mestres-de-rpg",
        name: "dicas-para-mestres-de-rpg",
        component: () =>
          S(
            () => import("./dicas-para-mestres-de-rpg-633ZKhYb.js"),
            __vite__mapDeps([144, 119, 120])
          ),
      },
      {
        path: "/blog/criando-um-mundo-de-rpg-personalizado",
        name: "criando-um-mundo-de-rpg-personalizado",
        component: () =>
          S(
            () => import("./criando-um-mundo-de-rpg-personalizado-eTdJukUL.js"),
            __vite__mapDeps([145, 119, 120])
          ),
      },
      {
        path: "/blog/a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico",
        name: "a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico",
        component: () =>
          S(
            () =>
              import(
                "./a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico-XoQVfNxL.js"
              ),
            __vite__mapDeps([146, 119, 120])
          ),
      },
      {
        path: "/blog/os-beneficios-do-rpg-para-a-vida-real",
        name: "os-beneficios-do-rpg-para-a-vida-real",
        component: () =>
          S(
            () => import("./os-beneficios-do-rpg-para-a-vida-real-WruCkeXx.js"),
            __vite__mapDeps([147, 119, 120])
          ),
      },
      {
        path: "/blog/a-influencia-de-d-e-d-na-cultura-pop",
        name: "a-influencia-de-d&d-na-cultura-pop",
        component: () =>
          S(
            () => import("./a-influencia-de-d_d-na-cultura-pop-D4NDOGer.js"),
            __vite__mapDeps([148, 119, 120])
          ),
      },
      {
        path: "/blog/a-evolucao-das-mecanicas-de-rpg",
        name: "a-evolucao-das-mecanicas-de-rpg",
        component: () =>
          S(
            () => import("./a-evolucao-das-mecanicas-de-rpg-4N9MogmT.js"),
            __vite__mapDeps([149, 119, 120])
          ),
      },
      {
        path: "/blog/racas-e-classes-explorando-as-escolhas-de-personagem",
        name: "racas-e-classes-explorando-as-escolhas-de-personagem",
        component: () =>
          S(
            () =>
              import(
                "./racas-e-classes-explorando-as-escolhas-de-personagem-X8epRuID.js"
              ),
            __vite__mapDeps([150, 119, 120])
          ),
      },
      {
        path: "/blog/o-papel-do-mestre-na-narrativa-de-rpg",
        name: "o-papel-do-mestre-na-narrativa-de-rpg",
        component: () =>
          S(
            () => import("./o-papel-do-mestre-na-narrativa-de-rpg-xRi2cV5T.js"),
            __vite__mapDeps([151, 119, 120])
          ),
      },
      {
        path: "/blog/mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron",
        name: "mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron",
        component: () =>
          S(
            () =>
              import(
                "./mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron-MwtOdtaH.js"
              ),
            __vite__mapDeps([152, 119, 120])
          ),
      },
      {
        path: "/blog/o-impacto-da-arte-na-estetica-dos-rpgs",
        name: "o-impacto-da-arte-na-estetica-dos-rpgs",
        component: () =>
          S(
            () =>
              import("./o-impacto-da-arte-na-estetica-dos-rpgs-WAKJHBB_.js"),
            __vite__mapDeps([153, 119, 120])
          ),
      },
      {
        path: "/blog/a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg",
        name: "a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg",
        component: () =>
          S(
            () =>
              import(
                "./a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg-nSHCpyOm.js"
              ),
            __vite__mapDeps([154, 119, 120])
          ),
      },
      {
        path: "/blog/mitos-e-lendas-folcloricas-no-mundo-dos-rpgs",
        name: "mitos-e-lendas-folcloricas-no-mundo-dos-rpgs",
        component: () =>
          S(
            () =>
              import(
                "./mitos-e-lendas-folcloricas-no-mundo-dos-rpgs-NZTm8y9a.js"
              ),
            __vite__mapDeps([155, 119, 120])
          ),
      },
      {
        path: "/blog/o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa",
        name: "o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa",
        component: () =>
          S(
            () =>
              import(
                "./o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa-DwbylJHo.js"
              ),
            __vite__mapDeps([156, 119, 120])
          ),
      },
      {
        path: "/blog/rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval",
        name: "rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval",
        component: () =>
          S(
            () =>
              import(
                "./rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval-1DibTVLh.js"
              ),
            __vite__mapDeps([157, 119, 120])
          ),
      },
      {
        path: "/blog/como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa",
        name: "como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa",
        component: () =>
          S(
            () =>
              import(
                "./como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa-h4gboKgo.js"
              ),
            __vite__mapDeps([158, 119, 120])
          ),
      },
      {
        path: "/blog/descobrindo-o-mundo-do-rpg-savage-worlds",
        name: "descobrindo-o-mundo-do-rpg-savage-worlds",
        component: () =>
          S(
            () =>
              import("./descobrindo-o-mundo-do-rpg-savage-worlds-wWfhEZwm.js"),
            __vite__mapDeps([159, 119, 120])
          ),
      },
      {
        path: "/blog/explorando-os-subgeneros-do-rpg",
        name: "explorando-os-subgeneros-do-rpg",
        component: () =>
          S(
            () => import("./explorando-os-subgeneros-do-rpg-RLgq_ftB.js"),
            __vite__mapDeps([160, 119, 120])
          ),
      },
      {
        path: "/blog/baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores",
        name: "baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores",
        component: () =>
          S(
            () =>
              import(
                "./baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores-_piKGvYN.js"
              ),
            __vite__mapDeps([161, 119, 120])
          ),
      },
      {
        path: "/blog/descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world",
        name: "descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world",
        component: () =>
          S(
            () =>
              import(
                "./descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world-GkxxwkUI.js"
              ),
            __vite__mapDeps([162, 119, 120])
          ),
      },
      {
        path: "/blog/descobrindo-o-universo-do-rpg-world-of-darkness",
        name: "descobrindo-o-universo-do-rpg-world-of-darkness",
        component: () =>
          S(
            () =>
              import(
                "./descobrindo-o-universo-do-rpg-world-of-darkness-nVjzIJBY.js"
              ),
            __vite__mapDeps([163, 119, 120])
          ),
      },
      {
        path: "/blog/e-dificil-comecar-a-jogar-rpg-de-mesa",
        name: "e-dificil-comecar-a-jogar-rpg-de-mesa",
        component: () =>
          S(
            () => import("./e-dificil-comecar-a-jogar-rpg-de-mesa-a4Xu-FjV.js"),
            __vite__mapDeps([164, 119, 120])
          ),
      },
      {
        path: "/blog/a-importancia-da-cooperacao-em-jogos-de-rpg",
        name: "a-importancia-da-cooperacao-em-jogos-de-rpg",
        component: () =>
          S(
            () =>
              import(
                "./a-importancia-da-cooperacao-em-jogos-de-rpg-mSfJpLdC.js"
              ),
            __vite__mapDeps([165, 119, 120])
          ),
      },
      {
        path: "/blog/criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo",
        name: "criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo",
        component: () =>
          S(
            () =>
              import(
                "./criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo-XGdGGrLX.js"
              ),
            __vite__mapDeps([166, 119, 120])
          ),
      },
      {
        path: "/blog/o-rpg-como-pilar-da-cultura-geek-e-nerd",
        name: "o-rpg-como-pilar-da-cultura-geek-e-nerd",
        component: () =>
          S(
            () =>
              import("./o-rpg-como-pilar-da-cultura-geek-e-nerd-dOm5Y_6p.js"),
            __vite__mapDeps([167, 119, 120])
          ),
      },
      {
        path: "/blog/criando-personagens-complexos-e-multidimensionais-no-rpg",
        name: "criando-personagens-complexos-e-multidimensionais-no-rpg",
        component: () =>
          S(
            () =>
              import(
                "./criando-personagens-complexos-e-multidimensionais-no-rpg-2JvaBd5X.js"
              ),
            __vite__mapDeps([168, 119, 120])
          ),
      },
      {
        path: "/blog/a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa",
        name: "a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa",
        component: () =>
          S(
            () =>
              import(
                "./a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa-SrZC2f8R.js"
              ),
            __vite__mapDeps([169, 119, 120])
          ),
      },
      {
        path: "/blog/construindo-mundos-de-campanha-de-rpg-atrativos",
        name: "construindo-mundos-de-campanha-de-rpg-atrativos",
        component: () =>
          S(
            () =>
              import(
                "./construindo-mundos-de-campanha-de-rpg-atrativos-ps7cj0IL.js"
              ),
            __vite__mapDeps([170, 119, 120])
          ),
      },
      {
        path: "/blog/o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg",
        name: "o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg",
        component: () =>
          S(
            () =>
              import(
                "./o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg-Er9IiiBy.js"
              ),
            __vite__mapDeps([171, 119, 120])
          ),
      },
      {
        path: "/blog/as-origens-e-a-evolucao-dos-dados-de-rpg",
        name: "as-origens-e-a-evolucao-dos-dados-de-rpg",
        component: () =>
          S(
            () =>
              import("./as-origens-e-a-evolucao-dos-dados-de-rpg-B7aLnW_x.js"),
            __vite__mapDeps([172, 119, 120])
          ),
      },
      {
        path: "/blog/rpg-como-ferramenta-de-aprendizado",
        name: "rpg-como-ferramenta-de-aprendizado",
        component: () =>
          S(
            () => import("./rpg-como-ferramenta-de-aprendizado-UVKQGUFS.js"),
            __vite__mapDeps([173, 119, 120])
          ),
      },
      {
        path: "/blog/inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg",
        name: "inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg",
        component: () =>
          S(
            () =>
              import(
                "./inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg-ugrZ0TRi.js"
              ),
            __vite__mapDeps([174, 119, 120])
          ),
      },
      {
        path: "/blog/o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg",
        name: "o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg",
        component: () =>
          S(
            () =>
              import(
                "./o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg-fc8TOYxf.js"
              ),
            __vite__mapDeps([175, 119, 120])
          ),
      },
      {
        path: "/blog/rpgs-para-criancas-e-iniciantes",
        name: "rpgs-para-criancas-e-iniciantes",
        component: () =>
          S(
            () => import("./rpgs-para-criancas-e-iniciantes-42Vx9ZsM.js"),
            __vite__mapDeps([176, 119, 120])
          ),
      },
      {
        path: "/blog/etica-e-responsabilidade-em-jogos-de-rpg",
        name: "etica-e-responsabilidade-em-jogos-de-rpg",
        component: () =>
          S(
            () =>
              import("./etica-e-responsabilidade-em-jogos-de-rpg-fVr-JFW9.js"),
            __vite__mapDeps([177, 119, 120])
          ),
      },
      {
        path: "/blog/o-uso-de-ferramentas-digitais-em-mesas-de-rpg",
        name: "o-uso-de-ferramentas-digitais-em-mesas-de-rpg",
        component: () =>
          S(
            () =>
              import(
                "./o-uso-de-ferramentas-digitais-em-mesas-de-rpg-GkiM-pfA.js"
              ),
            __vite__mapDeps([178, 119, 120])
          ),
      },
      {
        path: "/blog/criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos",
        name: "criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos",
        component: () =>
          S(
            () =>
              import(
                "./criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos-EAd-PCxs.js"
              ),
            __vite__mapDeps([179, 119, 120])
          ),
      },
      {
        path: "/blog/a-influencia-das-artes-marciais-em-personagens-de-rpg",
        name: "a-influencia-das-artes-marciais-em-personagens-de-rpg",
        component: () =>
          S(
            () =>
              import(
                "./a-influencia-das-artes-marciais-em-personagens-de-rpg-jcApAcKD.js"
              ),
            __vite__mapDeps([180, 119, 120])
          ),
      },
      {
        path: "/blog/a-diversidade-de-estilos-de-narrativa-em-rpg",
        name: "a-diversidade-de-estilos-de-narrativa-em-rpg",
        component: () =>
          S(
            () =>
              import(
                "./a-diversidade-de-estilos-de-narrativa-em-rpg-DBSfLN7B.js"
              ),
            __vite__mapDeps([181, 119, 120])
          ),
      },
      {
        path: "/blog/o-uso-terapeutico-dos-jogos-de-rpg",
        name: "o-uso-terapeutico-dos-jogos-de-rpg",
        component: () =>
          S(
            () => import("./o-uso-terapeutico-dos-jogos-de-rpg--mPg_4I8.js"),
            __vite__mapDeps([182, 119, 120])
          ),
      },
      {
        path: "/blog/diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos",
        name: "diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos",
        component: () =>
          S(
            () =>
              import(
                "./diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos-AC3uxvkx.js"
              ),
            __vite__mapDeps([183, 119, 120])
          ),
      },
      {
        path: "/blog/evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps",
        name: "evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps",
        component: () =>
          S(
            () =>
              import(
                "./evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps-uIAgNzXb.js"
              ),
            __vite__mapDeps([184, 119, 120])
          ),
      },
      {
        path: "/blog/influencia_da_mitologia_em_jogos_de_rpg",
        name: "influencia_da_mitologia_em_jogos_de_rpg",
        component: () =>
          S(
            () =>
              import("./influencia_da_mitologia_em_jogos_de_rpg-rGGgsnnd.js"),
            __vite__mapDeps([185, 119, 120])
          ),
      },
      {
        path: "/blog/rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois",
        name: "rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois",
        component: () =>
          S(
            () =>
              import(
                "./rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois-4rLa24me.js"
              ),
            __vite__mapDeps([186, 119, 120])
          ),
      },
      {
        path: "/blog/impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada",
        name: "impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada",
        component: () =>
          S(
            () =>
              import(
                "./impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada-RbTBvOLR.js"
              ),
            __vite__mapDeps([187, 119, 120])
          ),
      },
      {
        path: "/blog/mundo_das_miniaturas_e_cenarios_personalizados",
        name: "mundo_das_miniaturas_e_cenarios_personalizados",
        component: () =>
          S(
            () =>
              import(
                "./mundo_das_miniaturas_e_cenarios_personalizados-bS8CZgw1.js"
              ),
            __vite__mapDeps([188, 119, 120])
          ),
      },
      {
        path: "/blog/evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis",
        name: "evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis",
        component: () =>
          S(
            () =>
              import(
                "./evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis-AnhBJnNJ.js"
              ),
            __vite__mapDeps([189, 119, 120])
          ),
      },
      {
        path: "/blog/historia_e_a_evolucao_dos_larp_live_action_role_playing",
        name: "historia_e_a_evolucao_dos_larp_live_action_role_playing",
        component: () =>
          S(
            () =>
              import(
                "./historia_e_a_evolucao_dos_larp_live_action_role_playing-MWNfZDaV.js"
              ),
            __vite__mapDeps([190, 119, 120])
          ),
      },
      {
        path: "/blog/jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg",
        name: "jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg",
        component: () =>
          S(
            () =>
              import(
                "./jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg-5MArXUjv.js"
              ),
            __vite__mapDeps([191, 119, 120])
          ),
      },
      {
        path: "/blog/uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg",
        name: "uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg",
        component: () =>
          S(
            () =>
              import(
                "./uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg-mMWi5gWU.js"
              ),
            __vite__mapDeps([192, 119, 120])
          ),
      },
      {
        path: "/blog/mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas",
        name: "mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas",
        component: () =>
          S(
            () =>
              import(
                "./mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas-NO6IF1IC.js"
              ),
            __vite__mapDeps([193, 119, 120])
          ),
      },
      {
        path: "/blog/psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes",
        name: "psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes",
        component: () =>
          S(
            () =>
              import(
                "./psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes-xZQ16l_A.js"
              ),
            __vite__mapDeps([194, 119, 120])
          ),
      },
      {
        path: "/blog/papel_das_ferramentas_de_software_em_jogos_de_rpg",
        name: "papel_das_ferramentas_de_software_em_jogos_de_rpg",
        component: () =>
          S(
            () =>
              import(
                "./papel_das_ferramentas_de_software_em_jogos_de_rpg-IEEWhR-C.js"
              ),
            __vite__mapDeps([195, 119, 120])
          ),
      },
      {
        path: "/blog/historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos",
        name: "historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos",
        component: () =>
          S(
            () =>
              import(
                "./historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos-IBLq9ZLQ.js"
              ),
            __vite__mapDeps([196, 119, 120])
          ),
      },
      {
        path: "/blog/explorando_a_cultura_do_cosplay_em_rpg",
        name: "explorando_a_cultura_do_cosplay_em_rpg",
        component: () =>
          S(
            () =>
              import("./explorando_a_cultura_do_cosplay_em_rpg-Is1HrrNF.js"),
            __vite__mapDeps([197, 119, 120])
          ),
      },
      {
        path: "/blog/rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico",
        name: "rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico",
        component: () =>
          S(
            () =>
              import(
                "./rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico-A5akqFHl.js"
              ),
            __vite__mapDeps([198, 119, 120])
          ),
      },
      {
        path: "/blog/uso_de_simbologia_e_mitologia_em_rpgs",
        name: "uso_de_simbologia_e_mitologia_em_rpgs",
        component: () =>
          S(
            () => import("./uso_de_simbologia_e_mitologia_em_rpgs-Nvcf6_DQ.js"),
            __vite__mapDeps([199, 119, 120])
          ),
      },
      {
        path: "/blog/economia_nos_mundos_de_rpg_moedas_e_comercio",
        name: "economia_nos_mundos_de_rpg_moedas_e_comercio",
        component: () =>
          S(
            () =>
              import(
                "./economia_nos_mundos_de_rpg_moedas_e_comercio-LnlNkKA8.js"
              ),
            __vite__mapDeps([200, 119, 120])
          ),
      },
      {
        path: "/blog/importancia_da_diversidade_e_representacao_nos_jogos",
        name: "importancia_da_diversidade_e_representacao_nos_jogos",
        component: () =>
          S(
            () =>
              import(
                "./importancia_da_diversidade_e_representacao_nos_jogos-AtmGZwoM.js"
              ),
            __vite__mapDeps([201, 119, 120])
          ),
      },
      {
        path: "/blog/futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas",
        name: "futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas",
        component: () =>
          S(
            () =>
              import(
                "./futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas-vwvX3wlx.js"
              ),
            __vite__mapDeps([202, 119, 120])
          ),
      },
      {
        path: "/:catchAll(.*)*",
        name: "not-found",
        component: () =>
          S(
            () => import("./NotFoundView-Pb3MR9ZR.js"),
            __vite__mapDeps([203, 204])
          ),
      },
    ],
  }),
  JR = () =>
    new Promise((t, e) => {
      const n = ml(
        oo(),
        (r) => {
          n(), t(r);
        },
        e
      );
    });
dw.beforeEach(async (t, e, n) => {
  var r;
  if (t.matched.some((i) => i.meta.requiresAuth))
    if (await JR()) {
      const i = oo(),
        s = jl();
      if (!((r = i.currentUser) != null && r.uid)) return;
      const o = await U1(wi(s, "users", i.currentUser.uid));
      if (o.data()) {
        const a = o.data();
        let l = !1;
        a.pictureURL === void 0 && ((a.pictureURL = ""), (l = !0)),
          a.pictureFullPath === void 0 && ((a.pictureFullPath = ""), (l = !0)),
          a.tier === void 0 && ((a.tier = 0), (l = !0)),
          a.donationAmount === void 0 && ((a.donationAmount = 0), (l = !0)),
          l && (await H1(wi(s, "users", i.currentUser.uid), a)),
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
        await j1(wi(s, "users", i.currentUser.uid), a), n();
      }
    } else n({ name: "login-page" });
  else n();
});
function Rd(t) {
  return (Rd =
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
function gm(t, e, n, r, i, s, o) {
  try {
    var a = t[s](o),
      l = a.value;
  } catch (c) {
    return void n(c);
  }
  a.done ? e(l) : Promise.resolve(l).then(r, i);
}
function ZR(t, e) {
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
function vm(t, e) {
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
function St(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? vm(Object(n), !0).forEach(function (r) {
          bi(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : vm(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function Fr(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return $c(e);
    })(t) ||
    (function (e) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e);
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == "string") return $c(e, n);
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
          return $c(e, n);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function $c(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var eP = function (t) {
    return (function (e, n) {
      return Fr(e.querySelectorAll(n) || []);
    })(
      t,
      'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  },
  ym = function (t) {
    return t == document.activeElement;
  },
  tP = (function () {
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
                return !document.activeElement || ym(this.lastElement())
                  ? (this.firstElement().focus(), void r.preventDefault())
                  : void 0;
              ym(this.firstElement()) &&
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
              (this.elements = eP(this.root)),
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
      ]) && ZR(e.prototype, n),
      t
    );
  })(),
  _m = function (t) {
    var e = t.targetTouches ? t.targetTouches[0] : t;
    return { x: e.clientX, y: e.clientY };
  },
  Ho = function (t, e, n) {
    return (
      typeof t != "number" && (t = Math.min(e, n) || e),
      typeof n != "number" && (n = Math.max(e, t)),
      Math.min(Math.max(e, t), n)
    );
  },
  wm = function (t) {
    return (t && Number(t.replace(/px$/, ""))) || 0;
  },
  Ba = {
    down: { pc: "mousedown", m: "touchstart" },
    move: { pc: "mousemove", m: "touchmove" },
    up: { pc: "mouseup", m: "touchend" },
  },
  zo = function (t, e, n) {
    e && e.addEventListener(Ba[t].pc, n),
      e && e.addEventListener(Ba[t].m, n, { passive: !1 });
  },
  Wo = function (t, e, n) {
    e && e.removeEventListener(Ba[t].pc, n),
      e && e.removeEventListener(Ba[t].m, n);
  },
  Pd = !1;
if (typeof window < "u") {
  var bm = {
    get passive() {
      Pd = !0;
    },
  };
  window.addEventListener("testPassive", null, bm),
    window.removeEventListener("testPassive", null, bm);
}
var Ts,
  Is,
  fw =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  tr = [],
  ja = !1,
  la = 0,
  Em = -1,
  nP = function (t, e) {
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
  pw = function (t) {
    return tr.some(function () {
      return nP(t, -la);
    });
  },
  Fu = function (t) {
    var e = t || window.event;
    return (
      !!pw(e.target) ||
      e.touches.length > 1 ||
      (e.preventDefault && e.preventDefault(), !1)
    );
  },
  rP = function (t, e) {
    if (t) {
      if (
        !tr.some(function (r) {
          return r.targetElement === t;
        })
      ) {
        var n = { targetElement: t, options: e || {} };
        (tr = [].concat(Fr(tr), [n])),
          fw
            ? ((t.ontouchstart = function (r) {
                r.targetTouches.length === 1 &&
                  (Em = r.targetTouches[0].clientY);
              }),
              (t.ontouchmove = function (r) {
                r.targetTouches.length === 1 &&
                  (function (i, s) {
                    (la = i.targetTouches[0].clientY - Em),
                      !pw(i.target) &&
                        ((s && s.scrollTop === 0 && la > 0) ||
                        ((function (o) {
                          return (
                            !!o &&
                            o.scrollHeight - o.scrollTop <= o.clientHeight
                          );
                        })(s) &&
                          la < 0)
                          ? Fu(i)
                          : i.stopPropagation());
                  })(r, t);
              }),
              ja ||
                (document.addEventListener(
                  "touchmove",
                  Fu,
                  Pd ? { passive: !1 } : void 0
                ),
                (ja = !0)))
            : (function (r) {
                if (Is === void 0) {
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
                    (Is = document.body.style.paddingRight),
                      (document.body.style.paddingRight = "".concat(
                        o + s,
                        "px"
                      ));
                  }
                }
                Ts === void 0 &&
                  ((Ts = document.body.style.overflow),
                  (document.body.style.overflow = "hidden"));
              })(e);
      }
    } else
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
  },
  Vc = function (t) {
    t
      ? ((tr = tr.filter(function (e) {
          return e.targetElement !== t;
        })),
        fw
          ? ((t.ontouchstart = null),
            (t.ontouchmove = null),
            ja &&
              tr.length === 0 &&
              (document.removeEventListener(
                "touchmove",
                Fu,
                Pd ? { passive: !1 } : void 0
              ),
              (ja = !1)))
          : tr.length ||
            (Is !== void 0 &&
              ((document.body.style.paddingRight = Is), (Is = void 0)),
            Ts !== void 0 &&
              ((document.body.style.overflow = Ts), (Ts = void 0))))
      : console.error(
          "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
        );
  },
  Ko = function () {},
  Tm = "enter",
  Im = "entering",
  Go = "leave",
  Am = "leavng",
  iP = {
    t: "ns-resize",
    tr: "nesw-resize",
    r: "ew-resize",
    br: "nwse-resize",
    b: "ns-resize",
    bl: "nesw-resize",
    l: "ew-resize",
    tl: "nwse-resize",
  },
  ca = {
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
          var e = Rd(t);
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
        h = new tP(),
        d = ue(!1),
        f = On({ modal: !1, overlay: !1, resize: !1 }),
        g = ue(null),
        v = ue(null),
        _ = ue(!1),
        b = ue({}),
        y = ue({}),
        x = ue(null),
        A = ue(null),
        H = Ko,
        Z = Ko,
        ae = Re(function () {
          return typeof t.overlayTransition == "string"
            ? { name: t.overlayTransition }
            : St({}, t.overlayTransition);
        }),
        F = Re(function () {
          return typeof t.transition == "string"
            ? { name: t.transition }
            : St({}, t.transition);
        }),
        ne = Re(function () {
          return (t.hideOverlay || g.value === Go) && v.value === Go;
        }),
        ee = Re(function () {
          return t.zIndex === !1
            ? !!t.zIndexAuto && +t.zIndexBase + 2 * (u.value || 0)
            : t.zIndex;
        }),
        Te = Re(function () {
          return St({}, ee.value !== !1 && { zIndex: ee.value });
        }),
        V = Re(function () {
          var E = [y.value];
          return (
            Array.isArray(t.contentStyle)
              ? E.push.apply(E, Fr(t.contentStyle))
              : E.push(t.contentStyle),
            E
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
          getAttachElement: Ce,
          modalStackIndex: u,
          visibility: f,
          handleLockScroll: Pe,
          $focusTrap: h,
          toggle: xt,
          params: b,
        };
      }
      function be() {
        if (t.modelValue) {
          if (
            (n("_before-open", ge({ type: "_before-open" })),
            It("before-open", !1))
          )
            return void Z("show");
          var E = Ce();
          if (E || t.attach === !1) {
            if (t.attach !== !1) {
              if (!i.value)
                return (
                  (d.value = !0),
                  void er(function () {
                    be();
                  })
                );
              E.appendChild(i.value);
            }
            var N = t.api.openedModals.findIndex(function (W) {
              return W.uid === r;
            });
            N !== -1 && t.api.openedModals.splice(N, 1),
              t.api.openedModals.push(pe()),
              (u.value = t.api.openedModals.length - 1),
              Pe(),
              t.api.openedModals
                .filter(function (W) {
                  return W.uid !== r;
                })
                .forEach(function (W, Ee) {
                  W.getAttachElement() === E &&
                    ((W.modalStackIndex.value = Ee),
                    !W.props.keepOverlay && (W.visibility.overlay = !1));
                }),
              (d.value = !0),
              (f.overlay = !0),
              (f.modal = !0);
          } else
            E !== !1 &&
              console.warn("Unable to locate target ".concat(t.attach));
        }
      }
      function _t() {
        var E = t.api.openedModals.findIndex(function (W) {
          return W.uid === r;
        });
        if (
          (E !== -1 && t.api.openedModals.splice(E, 1),
          t.api.openedModals.length > 0)
        ) {
          var N = t.api.openedModals[t.api.openedModals.length - 1];
          N.props.focusTrap && N.$focusTrap.firstElement().focus(),
            (N.props.focusRetain || N.props.focusTrap) &&
              N.vfmContainer.value.focus(),
            !N.props.hideOverlay && (N.visibility.overlay = !0);
        }
        t.drag && yr(),
          t.resize && $(),
          (x.value = null),
          (f.overlay = !1),
          (f.modal = !1);
      }
      function Pe() {
        t.modelValue &&
          er(function () {
            t.lockScroll
              ? rP(s.value, { reserveScrollBarGap: !0 })
              : Vc(s.value);
          });
      }
      function Ce() {
        return (
          t.attach !== !1 &&
          (typeof t.attach == "string"
            ? !!window && window.document.querySelector(t.attach)
            : t.attach)
        );
      }
      function ge() {
        var E =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return St({ ref: pe() }, E);
      }
      function It(E, N) {
        var W = !1,
          Ee = ge({
            type: E,
            stop: function () {
              W = !0;
            },
          });
        return (
          n(E, Ee),
          !!W &&
            ((_.value = !0),
            er(function () {
              n("update:modelValue", N);
            }),
            !0)
        );
      }
      function zt(E, N, W) {
        (x.value = "".concat(N, ":").concat(W)), n(x.value, E);
      }
      function xt(E, N) {
        var W = arguments;
        return new Promise(function (Ee, ie) {
          (H = function (m) {
            Ee(m), (H = Ko);
          }),
            (Z = function (m) {
              ie(m), (Z = Ko);
            });
          var p = typeof E == "boolean" ? E : !t.modelValue;
          p && W.length === 2 && (b.value = N), n("update:modelValue", p);
        });
      }
      function He(E) {
        E.stopPropagation();
        var N,
          W = "resize",
          Ee = "drag",
          ie = E.target.getAttribute("direction");
        if (ie) N = W;
        else {
          if (
            !(function (Y, te, me) {
              return (
                me === "" || Fr(te.querySelectorAll(me)).includes(Y.target)
              );
            })(E, o.value, t.dragSelector)
          )
            return;
          N = Ee;
        }
        zt(E, N, "start");
        var p,
          m,
          w,
          T,
          q = _m(E),
          P = s.value.getBoundingClientRect(),
          L = o.value.getBoundingClientRect(),
          D = window.getComputedStyle(o.value).position === "absolute",
          M = wm(y.value.top),
          R = wm(y.value.left),
          K = (function () {
            if (t.fitParent) {
              var Y = {
                absolute: function () {
                  return {
                    minTop: 0,
                    minLeft: 0,
                    maxTop: P.height - L.height,
                    maxLeft: P.width - L.width,
                  };
                },
                relative: function () {
                  return {
                    minTop: M + P.top - L.top,
                    minLeft: R + P.left - L.left,
                    maxTop: M + P.bottom - L.bottom,
                    maxLeft: R + P.right - L.right,
                  };
                },
              };
              return D ? Y.absolute() : Y.relative();
            }
            return {};
          })(),
          U =
            N === W &&
            ((p = document.body),
            (m = "cursor"),
            (w = iP[ie]),
            (T = p.style[m]),
            (p.style[m] = w),
            function () {
              p.style[m] = T;
            }),
          G = function (Y) {
            Y.stopPropagation(), zt(Y, N, "move");
            var te,
              me,
              Ie = _m(Y),
              Ae = { x: Ie.x - q.x, y: Ie.y - q.y };
            N === W &&
              (Ae = (function (Mn, Co, _r, wr, wt) {
                var Mt = function (At) {
                    var Wt,
                      $n = Co[At.axis];
                    $n = t.fitParent ? Ho(At.min, $n, At.max) : $n;
                    var Vn = Ho(At.minEdge, At.getEdge($n), At.maxEdge);
                    return (
                      ($n = At.getOffsetAxis(Vn, wt)),
                      bi((Wt = {}), At.edgeName, Vn),
                      bi(Wt, At.axis, $n),
                      Wt
                    );
                  },
                  qo = function (At, Wt, $n, Vn) {
                    var Md,
                      $d = wr[Wt],
                      Vd = _r[At] - wr[At],
                      Fd = (Md = Wt).charAt(0).toUpperCase() + Md.slice(1);
                    return {
                      axis: $n,
                      edgeName: Wt,
                      min: Vn ? Vd : -$d,
                      max: Vn ? $d : Vd,
                      minEdge: t["min".concat(Fd)],
                      maxEdge: t["max".concat(Fd)],
                      getEdge: function (oc) {
                        return wr[Wt] - oc * (Vn ? 1 : -1);
                      },
                      getOffsetAxis: function (oc, jw) {
                        var Ud = wr[Wt] - oc;
                        return jw ? (Vn ? Ud : 0) : ((Vn ? 1 : -1) * Ud) / 2;
                      },
                    };
                  },
                  Bw = {
                    t: ["top", "height", "y", !0],
                    b: ["bottom", "height", "y", !1],
                    l: ["left", "width", "x", !0],
                    r: ["right", "width", "x", !1],
                  },
                  sc = { x: 0, y: 0 };
                return (
                  Mn.split("").forEach(function (At) {
                    var Wt = qo.apply(void 0, Fr(Bw[At]));
                    sc = St(St({}, sc), Mt(Wt));
                  }),
                  sc
                );
              })(ie, Ae, P, L, D)),
              D
                ? ((te = L.top - P.top + Ae.y), (me = L.left - P.left + Ae.x))
                : ((te = M + Ae.y), (me = R + Ae.x)),
              N === Ee &&
                t.fitParent &&
                ((te = Ho(K.minTop, te, K.maxTop)),
                (me = Ho(K.minLeft, me, K.maxLeft)));
            var Rt = St(
              St(
                St(
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
                Ae.width && { width: Ae.width + "px" }
              ),
              Ae.height && { height: Ae.height + "px" }
            );
            y.value = St(St({}, y.value), Rt);
          };
        zo("move", document, G),
          zo("up", document, function Y(te) {
            te.stopPropagation(),
              N === W && U && U(),
              setTimeout(function () {
                zt(te, N, "end");
              }),
              Wo("move", document, G),
              Wo("up", document, Y);
          });
      }
      function hn() {
        zo("down", o.value, He), (y.value.touchAction = "none");
      }
      function yr() {
        Wo("down", o.value, He);
      }
      function k() {
        (f.resize = !0),
          er(function () {
            zo("down", a.value, He);
          });
      }
      function $() {
        Wo("down", a.value, He), (f.resize = !1);
      }
      return (
        ut(
          function () {
            return t.modelValue;
          },
          function (E) {
            if (_.value) _.value = !1;
            else if ((be(), !E)) {
              if (It("before-close", !0)) return void Z("hide");
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
          function (E) {
            t.modelValue && !E && (f.overlay = !0);
          }
        ),
        ut(function () {
          return t.attach;
        }, be),
        ut(
          ne,
          function (E) {
            E && ((d.value = !1), (s.value.style.display = "none"));
          },
          { flush: "post" }
        ),
        ut(
          function () {
            return t.drag;
          },
          function (E) {
            d.value && (E ? hn() : yr());
          }
        ),
        ut(
          function () {
            return t.resize;
          },
          function (E) {
            d.value && (E ? k() : $());
          }
        ),
        ut(
          function () {
            return t.keepChangedStyle;
          },
          function (E) {
            E || (y.value = {});
          }
        ),
        t.api.modals.push(pe()),
        un(function () {
          be();
        }),
        il(function () {
          var E;
          _t(),
            t.lockScroll && s.value && Vc(s.value),
            i == null || (E = i.value) === null || E === void 0 || E.remove();
          var N = t.api.modals.findIndex(function (W) {
            return W.uid === r;
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
          computedTransition: F,
          visible: d,
          visibility: f,
          params: b,
          calculateZIndex: ee,
          bindStyle: Te,
          bindContentStyle: V,
          beforeOverlayEnter: function () {
            g.value = Im;
          },
          afterOverlayEnter: function () {
            g.value = Tm;
          },
          beforeOverlayLeave: function () {
            g.value = Am;
          },
          afterOverlayLeave: function () {
            g.value = Go;
          },
          beforeModalEnter: function () {
            v.value = Im;
          },
          afterModalEnter: function () {
            (v.value = Tm),
              (t.focusRetain || t.focusTrap) && s.value.focus(),
              t.focusTrap && h.enable(s.value),
              t.drag && hn(),
              t.resize && k(),
              n("_opened"),
              n("opened", ge({ type: "opened" })),
              H("show");
          },
          beforeModalLeave: function () {
            (v.value = Am), h.enabled() && h.disable();
          },
          afterModalLeave: function () {
            (v.value = Go),
              (u.value = null),
              t.lockScroll && Vc(s.value),
              t.keepChangedStyle || (y.value = {});
            var E = !1,
              N = ge({
                type: "closed",
                stop: function () {
                  E = !0;
                },
              });
            n("_closed"), n("closed", N), H("hide"), E || (b.value = {});
          },
          onMousedown: function (E) {
            A.value = E == null ? void 0 : E.target;
          },
          onMouseupContainer: function () {
            A.value === s.value &&
              x.value !== "resize:move" &&
              (n("click-outside", ge({ type: "click-outside" })),
              t.clickToClose && n("update:modelValue", !1));
          },
          onEsc: function () {
            d.value && t.escToClose && n("update:modelValue", !1);
          },
        }
      );
    },
  },
  Fc = Ag();
Hi("data-v-2836fdb5");
var sP = {
  key: 0,
  ref: "vfmResize",
  class:
    "vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none",
};
zi();
var oP = Fc(function (t, e, n, r, i, s) {
  return n.ssr || r.visible
    ? Jt(
        (j(),
        Oe(
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
              (e[4] = Qg(
                function () {
                  return r.onEsc && r.onEsc.apply(r, arguments);
                },
                ["esc"]
              )),
          },
          [
            xe(
              ya,
              Ai(r.computedOverlayTransition, {
                onBeforeEnter: r.beforeOverlayEnter,
                onAfterEnter: r.afterOverlayEnter,
                onBeforeLeave: r.beforeOverlayLeave,
                onAfterLeave: r.afterOverlayLeave,
              }),
              {
                default: Fc(function () {
                  return [
                    !n.hideOverlay && r.visibility.overlay
                      ? (j(),
                        Oe(
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
                      : Fe("v-if", !0),
                  ];
                }),
                _: 1,
              },
              16,
              ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]
            ),
            xe(
              ya,
              Ai(r.computedTransition, {
                onBeforeEnter: r.beforeModalEnter,
                onAfterEnter: r.afterModalEnter,
                onBeforeLeave: r.beforeModalLeave,
                onAfterLeave: r.afterModalLeave,
              }),
              {
                default: Fc(function () {
                  return [
                    Jt(
                      xe(
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
                            (e[2] = _a(
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
                            (e[3] = _a(
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
                          xe(
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
                                ? (j(),
                                  Oe(
                                    "div",
                                    sP,
                                    [
                                      (j(!0),
                                      Oe(
                                        ht,
                                        null,
                                        Jc(n.resizeDirections, function (o) {
                                          return (
                                            j(),
                                            Oe(
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
                                : Fe("v-if", !0),
                            ],
                            38
                          ),
                        ],
                        46,
                        ["aria-expanded"]
                      ),
                      [[Zt, r.visibility.modal]]
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
        [[Zt, !n.ssr || r.visible]]
      )
    : Fe("v-if", !0);
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
  (ca.render = oP),
  (ca.__scopeId = "data-v-2836fdb5"),
  (ca.__file = "lib/VueFinalModal.vue");
var Uu = {
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
            function u(d) {
              gm(c, a, l, u, h, "next", d);
            }
            function h(d) {
              gm(c, a, l, u, h, "throw", d);
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
  aP = { class: "modals-container" };
function Sm(t, e) {
  var n = St(St({}, t), {}, { props: St({}, t.props) });
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
(Uu.render = function (t, e, n, r, i, s) {
  return (
    j(),
    Oe("div", aP, [
      (j(!0),
      Oe(
        ht,
        null,
        Jc(t.api.dynamicModals, function (o, a) {
          return (
            j(),
            Oe(
              Jd(o.component),
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
              u0({ _: 2 }, [
                Jc(o.slots, function (l, c) {
                  return {
                    name: c,
                    fn: Je(function () {
                      return [
                        Fe(" eslint-disable vue/no-v-html "),
                        s.isString(l)
                          ? (j(),
                            Oe("div", { key: 0, innerHTML: l }, null, 8, [
                              "innerHTML",
                            ]))
                          : (j(),
                            Oe(
                              Jd(l.component),
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
  (Uu.__file = "lib/ModalsContainer.vue");
var km = 0,
  mw = function () {
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
            switch (Rd(r)) {
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
                    i.dynamicModals.push(Qc(Object.assign(u, r)));
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
          dynamicModals: Qc([]),
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
          var i = Sm(ca, r);
          return r._setDefaultModal(i), i;
        })(n)
      ),
      bi(
        t,
        "ModalsContainer",
        (function (r) {
          return Sm(Uu, r);
        })(n)
      ),
      t
    );
  },
  Yl = mw();
Yl.$vfm;
Yl.VueFinalModal;
Yl.ModalsContainer;
var gw = function (t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = km === 0 ? Yl : mw(),
      r = n.$vfm,
      i = n.VueFinalModal,
      s = n.ModalsContainer;
    km += 1;
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
  vw = function (t) {
    return {
      install: function (e, n) {
        var r = Object.assign({}, t, n);
        gw(e, r);
      },
    };
  };
vw.install = gw;
var lP = {
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
        h,
        d;
      a.top + s + r > u.height
        ? ((h = a.top + l - r),
          (t.style.transformOrigin = "bottom"),
          h < 0 && (h = l))
        : ((h = s + a.top + l), (t.style.transformOrigin = "top")),
        a.left + i > u.width
          ? (d = Math.max(0, a.left + c + o - i))
          : (d = a.left + c),
        (t.style.top = h + "px"),
        (t.style.left = d + "px");
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
      h = this.getOuterHeight(e);
    l < 0 ? (t.scrollTop = c + l) : l + h > u && (t.scrollTop = c + l - u + h);
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
  Cm = {
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
  cP = Symbol();
function uP(t, e, n, r) {
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
var hP = {
  install: (t, e) => {
    let n = e ? { ...Cm, ...e } : { ...Cm };
    const r = { config: On(n), changeTheme: uP };
    (t.config.globalProperties.$primevue = r), t.provide(cP, r);
  },
};
const qm = (function () {
  try {
    return window.Quill;
  } catch {
    return null;
  }
})();
var yw = {
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
    qm
      ? ((this.quill = new qm(this.$refs.editorElement, t)),
        this.initQuill(),
        this.handleLoad())
      : S(
          () => import("./quill-OFcVbw76.js").then((e) => e.q),
          __vite__mapDeps([205, 27])
        )
          .then((e) => {
            e &&
              lP.isExist(this.$refs.editorElement) &&
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
const dP = { class: "p-editor-container" },
  fP = { ref: "toolbarElement", class: "p-editor-toolbar" },
  pP = I(
    "span",
    { class: "ql-formats" },
    [
      I("select", { class: "ql-header", defaultValue: "0" }, [
        I("option", { value: "1" }, "Heading"),
        I("option", { value: "2" }, "Subheading"),
        I("option", { value: "0" }, "Normal"),
      ]),
      I("select", { class: "ql-font" }, [
        I("option"),
        I("option", { value: "serif" }),
        I("option", { value: "monospace" }),
      ]),
    ],
    -1
  ),
  mP = I(
    "span",
    { class: "ql-formats" },
    [
      I("button", { class: "ql-bold", type: "button" }),
      I("button", { class: "ql-italic", type: "button" }),
      I("button", { class: "ql-underline", type: "button" }),
    ],
    -1
  ),
  gP = I("select", { class: "ql-color" }, null, -1),
  vP = I("select", { class: "ql-background" }, null, -1),
  yP = [gP, vP],
  _P = I(
    "span",
    { class: "ql-formats" },
    [
      I("button", { class: "ql-list", value: "ordered", type: "button" }),
      I("button", { class: "ql-list", value: "bullet", type: "button" }),
      I("select", { class: "ql-align" }, [
        I("option", { defaultValue: "" }),
        I("option", { value: "center" }),
        I("option", { value: "right" }),
        I("option", { value: "justify" }),
      ]),
    ],
    -1
  ),
  wP = al(
    '<span class="ql-formats"><button class="ql-link" type="button"></button><button class="ql-image" type="button"></button><button class="ql-code-block" type="button"></button></span><span class="ql-formats"><button class="ql-clean" type="button"></button></span>',
    2
  );
function bP(t, e, n, r, i, s) {
  return (
    j(),
    de("div", dP, [
      I(
        "div",
        fP,
        [
          Ii(t.$slots, "toolbar", {}, () => [
            pP,
            mP,
            (j(),
            de("span", { key: i.reRenderColorKey, class: "ql-formats" }, yP)),
            _P,
            wP,
          ]),
        ],
        512
      ),
      I(
        "div",
        {
          ref: "editorElement",
          class: "p-editor-content",
          style: nr(n.editorStyle),
        },
        null,
        4
      ),
    ])
  );
}
function EP(t, e) {
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
var TP = `
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
EP(TP);
yw.render = bP;
function Ln(t) {
  return t.split("-")[0];
}
function Ei(t) {
  return t.split("-")[1];
}
function Ao(t) {
  return ["top", "bottom"].includes(Ln(t)) ? "x" : "y";
}
function Od(t) {
  return t === "y" ? "height" : "width";
}
function xm(t) {
  let { reference: e, floating: n, placement: r } = t;
  const i = e.x + e.width / 2 - n.width / 2,
    s = e.y + e.height / 2 - n.height / 2;
  let o;
  switch (Ln(r)) {
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
  const a = Ao(r),
    l = Od(a);
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
const IP = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: o,
  } = n;
  let a = await o.getElementRects({ reference: t, floating: e, strategy: i }),
    { x: l, y: c } = xm({ ...a, placement: r }),
    u = r,
    h = {};
  for (let d = 0; d < s.length; d++) {
    const { name: f, fn: g } = s[d],
      {
        x: v,
        y: _,
        data: b,
        reset: y,
      } = await g({
        x: l,
        y: c,
        initialPlacement: r,
        placement: u,
        strategy: i,
        middlewareData: h,
        rects: a,
        platform: o,
        elements: { reference: t, floating: e },
      });
    if (((l = v ?? l), (c = _ ?? c), (h = { ...h, [f]: b ?? {} }), y)) {
      typeof y == "object" &&
        (y.placement && (u = y.placement),
        y.rects &&
          (a =
            y.rects === !0
              ? await o.getElementRects({
                  reference: t,
                  floating: e,
                  strategy: i,
                })
              : y.rects),
        ({ x: l, y: c } = xm({ ...a, placement: u }))),
        (d = -1);
      continue;
    }
  }
  return { x: l, y: c, placement: u, strategy: i, middlewareData: h };
};
function AP(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function _w(t) {
  return typeof t != "number"
    ? AP(t)
    : { top: t, right: t, bottom: t, left: t };
}
function Bu(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
async function Xl(t, e) {
  e === void 0 && (e = {});
  const { x: n, y: r, platform: i, rects: s, elements: o, strategy: a } = t,
    {
      boundary: l = "clippingParents",
      rootBoundary: c = "viewport",
      elementContext: u = "floating",
      altBoundary: h = !1,
      padding: d = 0,
    } = e,
    f = _w(d),
    v = o[h ? (u === "floating" ? "reference" : "floating") : u],
    _ = await i.getClippingClientRect({
      element: (await i.isElement(v))
        ? v
        : v.contextElement ||
          (await i.getDocumentElement({ element: o.floating })),
      boundary: l,
      rootBoundary: c,
    }),
    b = Bu(
      await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: u === "floating" ? { ...s.floating, x: n, y: r } : s.reference,
        offsetParent: await i.getOffsetParent({ element: o.floating }),
        strategy: a,
      })
    );
  return {
    top: _.top - b.top + f.top,
    bottom: b.bottom - _.bottom + f.bottom,
    left: _.left - b.left + f.left,
    right: b.right - _.right + f.right,
  };
}
const SP = Math.min,
  kr = Math.max;
function ju(t, e, n) {
  return kr(t, SP(e, n));
}
const kP = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { element: n, padding: r = 0 } = t ?? {},
        { x: i, y: s, placement: o, rects: a, platform: l } = e;
      if (n == null) return {};
      const c = _w(r),
        u = { x: i, y: s },
        h = Ln(o),
        d = Ao(h),
        f = Od(d),
        g = await l.getDimensions({ element: n }),
        v = d === "y" ? "top" : "left",
        _ = d === "y" ? "bottom" : "right",
        b = a.reference[f] + a.reference[d] - u[d] - a.floating[f],
        y = u[d] - a.reference[d],
        x = await l.getOffsetParent({ element: n }),
        A = x ? (d === "y" ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
        H = b / 2 - y / 2,
        Z = c[v],
        ae = A - g[f] - c[_],
        F = A / 2 - g[f] / 2 + H,
        ne = ju(Z, F, ae);
      return { data: { [d]: ne, centerOffset: F - ne } };
    },
  }),
  CP = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ha(t) {
  return t.replace(/left|right|bottom|top/g, (e) => CP[e]);
}
function ww(t, e) {
  const n = Ei(t) === "start",
    r = Ao(t),
    i = Od(r);
  let s = r === "x" ? (n ? "right" : "left") : n ? "bottom" : "top";
  return (
    e.reference[i] > e.floating[i] && (s = Ha(s)), { main: s, cross: Ha(s) }
  );
}
const qP = { start: "end", end: "start" };
function Hu(t) {
  return t.replace(/start|end/g, (e) => qP[e]);
}
const xP = ["top", "right", "bottom", "left"],
  RP = xP.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
function PP(t, e, n) {
  return (
    t
      ? [...n.filter((i) => Ei(i) === t), ...n.filter((i) => Ei(i) !== t)]
      : n.filter((i) => Ln(i) === i)
  ).filter((i) => (t ? Ei(i) === t || (e ? Hu(i) !== i : !1) : !0));
}
const OP = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "autoPlacement",
      options: t,
      async fn(e) {
        var n, r, i, s, o, a;
        const { x: l, y: c, rects: u, middlewareData: h, placement: d } = e,
          {
            alignment: f = null,
            allowedPlacements: g = RP,
            autoAlignment: v = !0,
            ..._
          } = t;
        if ((n = h.autoPlacement) != null && n.skip) return {};
        const b = PP(f, v, g),
          y = await Xl(e, _),
          x =
            (r = (i = h.autoPlacement) == null ? void 0 : i.index) != null
              ? r
              : 0,
          A = b[x],
          { main: H, cross: Z } = ww(A, u);
        if (d !== A) return { x: l, y: c, reset: { placement: b[0] } };
        const ae = [y[Ln(A)], y[H], y[Z]],
          F = [
            ...((s = (o = h.autoPlacement) == null ? void 0 : o.overflows) !=
            null
              ? s
              : []),
            { placement: A, overflows: ae },
          ],
          ne = b[x + 1];
        if (ne)
          return {
            data: { index: x + 1, overflows: F },
            reset: { placement: ne },
          };
        const ee = F.slice().sort((V, pe) => V.overflows[0] - pe.overflows[0]),
          Te =
            (a = ee.find((V) => {
              let { overflows: pe } = V;
              return pe.every((be) => be <= 0);
            })) == null
              ? void 0
              : a.placement;
        return {
          data: { skip: !0 },
          reset: { placement: Te ?? ee[0].placement },
        };
      },
    }
  );
};
function DP(t) {
  const e = Ha(t);
  return [Hu(t), e, Hu(e)];
}
const NP = function (t) {
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
            fallbackStrategy: h = "bestFit",
            flipAlignment: d = !0,
            ...f
          } = t,
          g = Ln(i),
          _ = u || (g === a || !d ? [Ha(a)] : DP(a)),
          b = [a, ..._],
          y = await Xl(e, f),
          x = [];
        let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
        if ((l && x.push(y[g]), c)) {
          const { main: F, cross: ne } = ww(i, o);
          x.push(y[F], y[ne]);
        }
        if (
          ((A = [...A, { placement: i, overflows: x }]),
          !x.every((F) => F <= 0))
        ) {
          var H, Z;
          const F =
              ((H = (Z = s.flip) == null ? void 0 : Z.index) != null ? H : 0) +
              1,
            ne = b[F];
          if (ne)
            return {
              data: { index: F, overflows: A },
              reset: { placement: ne },
            };
          let ee = "bottom";
          switch (h) {
            case "bestFit": {
              var ae;
              const Te =
                (ae = A.slice().sort(
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
              Te && (ee = Te);
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
function LP(t) {
  let { placement: e, rects: n, value: r } = t;
  const i = Ln(e),
    s = ["left", "top"].includes(i) ? -1 : 1,
    o = typeof r == "function" ? r({ ...n, placement: e }) : r,
    { mainAxis: a, crossAxis: l } =
      typeof o == "number"
        ? { mainAxis: o, crossAxis: 0 }
        : { mainAxis: 0, crossAxis: 0, ...o };
  return Ao(i) === "x" ? { x: l, y: a * s } : { x: a * s, y: l };
}
const MP = function (t) {
  return (
    t === void 0 && (t = 0),
    {
      name: "offset",
      options: t,
      fn(e) {
        const { x: n, y: r, placement: i, rects: s } = e,
          o = LP({ placement: i, rects: s, value: t });
        return { x: n + o.x, y: r + o.y, data: o };
      },
    }
  );
};
function $P(t) {
  return t === "x" ? "y" : "x";
}
const VP = function (t) {
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
                  let { x: b, y } = _;
                  return { x: b, y };
                },
              },
              ...l
            } = t,
            c = { x: n, y: r },
            u = await Xl(e, l),
            h = Ao(Ln(i)),
            d = $P(h);
          let f = c[h],
            g = c[d];
          if (s) {
            const _ = h === "y" ? "top" : "left",
              b = h === "y" ? "bottom" : "right",
              y = f + u[_],
              x = f - u[b];
            f = ju(y, f, x);
          }
          if (o) {
            const _ = d === "y" ? "top" : "left",
              b = d === "y" ? "bottom" : "right",
              y = g + u[_],
              x = g - u[b];
            g = ju(y, g, x);
          }
          const v = a.fn({ ...e, [h]: f, [d]: g });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  },
  FP = function (t) {
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
          const l = await Xl(e, a),
            c = Ln(r),
            u = Ei(r) === "end";
          let h, d;
          c === "top" || c === "bottom"
            ? ((h = c), (d = u ? "left" : "right"))
            : ((d = c), (h = u ? "top" : "bottom"));
          const f = kr(l.left, 0),
            g = kr(l.right, 0),
            v = kr(l.top, 0),
            _ = kr(l.bottom, 0),
            b = {
              height:
                i.floating.height -
                (["left", "right"].includes(r)
                  ? 2 * (v !== 0 || _ !== 0 ? v + _ : kr(l.top, l.bottom))
                  : l[h]),
              width:
                i.floating.width -
                (["top", "bottom"].includes(r)
                  ? 2 * (f !== 0 || g !== 0 ? f + g : kr(l.left, l.right))
                  : l[d]),
            };
          return (
            o == null || o({ ...b, ...i }),
            { data: { skip: !0 }, reset: { rects: !0 } }
          );
        },
      }
    );
  };
function Dd(t) {
  return (t == null ? void 0 : t.toString()) === "[object Window]";
}
function mr(t) {
  if (t == null) return window;
  if (!Dd(t)) {
    const e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function Jl(t) {
  return mr(t).getComputedStyle(t);
}
function xn(t) {
  return Dd(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function Rn(t) {
  return t instanceof mr(t).HTMLElement;
}
function za(t) {
  return t instanceof mr(t).Element;
}
function UP(t) {
  return t instanceof mr(t).Node;
}
function bw(t) {
  const e = mr(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Zl(t) {
  const { overflow: e, overflowX: n, overflowY: r } = Jl(t);
  return /auto|scroll|overlay|hidden/.test(e + r + n);
}
function BP(t) {
  return ["table", "td", "th"].includes(xn(t));
}
function Ew(t) {
  const e = navigator.userAgent.toLowerCase().includes("firefox"),
    n = Jl(t);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    n.contain === "paint" ||
    ["transform", "perspective"].includes(n.willChange) ||
    (e && n.willChange === "filter") ||
    (e && (n.filter ? n.filter !== "none" : !1))
  );
}
const Rm = Math.min,
  As = Math.max,
  Wa = Math.round;
function Fi(t, e) {
  e === void 0 && (e = !1);
  const n = t.getBoundingClientRect();
  let r = 1,
    i = 1;
  return (
    e &&
      Rn(t) &&
      ((r = (t.offsetWidth > 0 && Wa(n.width) / t.offsetWidth) || 1),
      (i = (t.offsetHeight > 0 && Wa(n.height) / t.offsetHeight) || 1)),
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
function gr(t) {
  return ((UP(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function ec(t) {
  return Dd(t)
    ? { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
    : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function Tw(t) {
  return Fi(gr(t)).left + ec(t).scrollLeft;
}
function jP(t) {
  const e = Fi(t);
  return Wa(e.width) !== t.offsetWidth || Wa(e.height) !== t.offsetHeight;
}
function HP(t, e, n) {
  const r = Rn(e),
    i = gr(e),
    s = Fi(t, r && jP(e));
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || (!r && n !== "fixed"))
    if (((xn(e) !== "body" || Zl(i)) && (o = ec(e)), Rn(e))) {
      const l = Fi(e, !0);
      (a.x = l.x + e.clientLeft), (a.y = l.y + e.clientTop);
    } else i && (a.x = Tw(i));
  return {
    x: s.left + o.scrollLeft - a.x,
    y: s.top + o.scrollTop - a.y,
    width: s.width,
    height: s.height,
  };
}
function tc(t) {
  return xn(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (bw(t) ? t.host : null) || gr(t);
}
function Pm(t) {
  return !Rn(t) || getComputedStyle(t).position === "fixed"
    ? null
    : t.offsetParent;
}
function zP(t) {
  let e = tc(t);
  for (; Rn(e) && !["html", "body"].includes(xn(e)); ) {
    if (Ew(e)) return e;
    e = e.parentNode;
  }
  return null;
}
function zu(t) {
  const e = mr(t);
  let n = Pm(t);
  for (; n && BP(n) && getComputedStyle(n).position === "static"; ) n = Pm(n);
  return n &&
    (xn(n) === "html" ||
      (xn(n) === "body" && getComputedStyle(n).position === "static" && !Ew(n)))
    ? e
    : n || zP(t) || e;
}
function Om(t) {
  return { width: t.offsetWidth, height: t.offsetHeight };
}
function WP(t) {
  let { rect: e, offsetParent: n, strategy: r } = t;
  const i = Rn(n),
    s = gr(n);
  if (n === s) return e;
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (
    (i || (!i && r !== "fixed")) &&
    ((xn(n) !== "body" || Zl(s)) && (o = ec(n)), Rn(n))
  ) {
    const l = Fi(n, !0);
    (a.x = l.x + n.clientLeft), (a.y = l.y + n.clientTop);
  }
  return { ...e, x: e.x - o.scrollLeft + a.x, y: e.y - o.scrollTop + a.y };
}
function KP(t) {
  const e = mr(t),
    n = gr(t),
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
function GP(t) {
  var e;
  const n = gr(t),
    r = ec(t),
    i = (e = t.ownerDocument) == null ? void 0 : e.body,
    s = As(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    o = As(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    );
  let a = -r.scrollLeft + Tw(t);
  const l = -r.scrollTop;
  return (
    Jl(i || n).direction === "rtl" &&
      (a += As(n.clientWidth, i ? i.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function Iw(t) {
  return ["html", "body", "#document"].includes(xn(t))
    ? t.ownerDocument.body
    : Rn(t) && Zl(t)
    ? t
    : Iw(tc(t));
}
function Ka(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = Iw(t),
    i = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
    s = mr(r),
    o = i ? [s].concat(s.visualViewport || [], Zl(r) ? r : []) : r,
    a = e.concat(o);
  return i ? a : a.concat(Ka(tc(o)));
}
function QP(t, e) {
  const n = e.getRootNode == null ? void 0 : e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && bw(n)) {
    let r = e;
    do {
      if (r && t === r) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function YP(t) {
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
function Dm(t, e) {
  return e === "viewport" ? Bu(KP(t)) : za(e) ? YP(e) : Bu(GP(gr(t)));
}
function XP(t) {
  const e = Ka(tc(t)),
    r = ["absolute", "fixed"].includes(Jl(t).position) && Rn(t) ? zu(t) : t;
  return za(r) ? e.filter((i) => za(i) && QP(i, r) && xn(i) !== "body") : [];
}
function JP(t) {
  let { element: e, boundary: n, rootBoundary: r } = t;
  const s = [...(n === "clippingParents" ? XP(e) : [].concat(n)), r],
    o = s[0],
    a = s.reduce((l, c) => {
      const u = Dm(e, c);
      return (
        (l.top = As(u.top, l.top)),
        (l.right = Rm(u.right, l.right)),
        (l.bottom = Rm(u.bottom, l.bottom)),
        (l.left = As(u.left, l.left)),
        l
      );
    }, Dm(e, o));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
const ZP = {
    getElementRects: (t) => {
      let { reference: e, floating: n, strategy: r } = t;
      return { reference: HP(e, zu(n), r), floating: { ...Om(n), x: 0, y: 0 } };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: (t) => WP(t),
    getOffsetParent: (t) => {
      let { element: e } = t;
      return zu(e);
    },
    isElement: (t) => za(t),
    getDocumentElement: (t) => {
      let { element: e } = t;
      return gr(e);
    },
    getClippingClientRect: (t) => JP(t),
    getDimensions: (t) => {
      let { element: e } = t;
      return Om(e);
    },
    getClientRects: (t) => {
      let { element: e } = t;
      return e.getClientRects();
    },
  },
  eO = (t, e, n) => IP(t, e, { platform: ZP, ...n });
var tO = Object.defineProperty,
  nO = Object.defineProperties,
  rO = Object.getOwnPropertyDescriptors,
  Nm = Object.getOwnPropertySymbols,
  iO = Object.prototype.hasOwnProperty,
  sO = Object.prototype.propertyIsEnumerable,
  Lm = (t, e, n) =>
    e in t
      ? tO(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  pn = (t, e) => {
    for (var n in e || (e = {})) iO.call(e, n) && Lm(t, n, e[n]);
    if (Nm) for (var n of Nm(e)) sO.call(e, n) && Lm(t, n, e[n]);
    return t;
  },
  So = (t, e) => nO(t, rO(e));
function Aw(t, e) {
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      (typeof e[n] == "object" && t[n] ? Aw(t[n], e[n]) : (t[n] = e[n]));
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
function oO(t) {
  const e = [t];
  let n = bn.themes[t] || {};
  do
    n.$extend && !n.$resetCss
      ? (e.push(n.$extend), (n = bn.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return e.map((r) => `v-popper--theme-${r}`);
}
function Mm(t) {
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
let Sw = !1;
typeof window < "u" &&
  typeof navigator < "u" &&
  (Sw = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const kw = ["auto", "top", "bottom", "left", "right"].reduce(
    (t, e) => t.concat([e, `${e}-start`, `${e}-end`]),
    []
  ),
  $m = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
  },
  Vm = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
  };
function Fm(t, e) {
  const n = t.indexOf(e);
  n !== -1 && t.splice(n, 1);
}
function Uc() {
  return new Promise((t) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(t);
    })
  );
}
const Gt = [];
let Ar = null;
const Um = {};
function Bm(t) {
  let e = Um[t];
  return e || (e = Um[t] = []), e;
}
let Wu = function () {};
typeof window < "u" && (Wu = window.Element);
function ye(t) {
  return function (e) {
    return Ui(e.theme, t);
  };
}
const Bc = "__floating-vue__popper";
var Cw = () =>
  at({
    name: "VPopper",
    provide() {
      return { [Bc]: { parentPopper: this } };
    },
    inject: { [Bc]: { default: null } },
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
        validator: (t) => kw.includes(t),
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
        type: [String, Object, Wu, Boolean],
        default: ye("container"),
      },
      boundary: { type: [String, Wu], default: ye("boundary") },
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
          classes: So(pn({}, this.classes), { popperClass: this.popperClass }),
          result: this.positioningDisabled ? null : this.result,
          attrs: this.$attrs,
        };
      },
      parentPopper() {
        var t;
        return (t = this[Bc]) == null ? void 0 : t.parentPopper;
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
            MP({ mainAxis: this.distance, crossAxis: this.skidding })
          );
        const n = this.placement.startsWith("auto");
        if (
          (n
            ? e.middleware.push(
                OP({
                  alignment:
                    (t = this.placement.split("-")[1]) != null ? t : "",
                })
              )
            : (e.placement = this.placement),
          this.preventOverflow &&
            (this.shift &&
              e.middleware.push(
                VP({
                  padding: this.overflowPadding,
                  boundary: this.boundary,
                  crossAxis: this.shiftCrossAxis,
                })
              ),
            !n &&
              this.flip &&
              e.middleware.push(
                NP({ padding: this.overflowPadding, boundary: this.boundary })
              )),
          e.middleware.push(
            kP({ element: this.$_arrowNode, padding: this.arrowPadding })
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
            FP({
              boundary: this.boundary,
              padding: this.overflowPadding,
              apply: ({ width: i, height: s }) => {
                (this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null),
                  (this.$_innerNode.style.maxHeight =
                    s != null ? `${s}px` : null);
              },
            })
          ));
        const r = await eO(this.$_referenceNode, this.$_popperNode, e);
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
          Ar && this.instantMove && Ar.instantMove && Ar !== this.parentPopper)
        ) {
          Ar.$_applyHide(!0), this.$_applyShow(!0);
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
          this.isShown && (Ar = this),
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
            await Uc(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled ||
              this.$_registerEventListeners(
                [...Ka(this.$_referenceNode), ...Ka(this.$_popperNode)],
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
          for (let n = 0; n < Gt.length; n++)
            (e = Gt[n]),
              e.showGroup !== t && (e.hide(), e.$emit("close-group"));
        }
        Gt.push(this), document.body.classList.add("v-popper--some-open");
        for (const e of Mm(this.theme))
          Bm(e).push(this),
            document.body.classList.add(`v-popper--some-open--${e}`);
        this.$emit("apply-show"),
          (this.classes.showFrom = !0),
          (this.classes.showTo = !1),
          (this.classes.hideFrom = !1),
          (this.classes.hideTo = !1),
          await Uc(),
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
          Fm(Gt, this),
          Gt.length === 0 &&
            document.body.classList.remove("v-popper--some-open");
        for (const n of Mm(this.theme)) {
          const r = Bm(n);
          Fm(r, this),
            r.length === 0 &&
              document.body.classList.remove(`v-popper--some-open--${n}`);
        }
        Ar === this && (Ar = null),
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
          await Uc(),
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
          $m,
          this.triggers,
          this.showTriggers,
          t
        ),
          this.$_registerTriggerListeners(
            [this.$_popperNode],
            $m,
            this.popperTriggers,
            this.popperShowTriggers,
            t
          );
        const e = (n) => {
          n.usedByTooltip || this.hide({ event: n });
        };
        this.$_registerTriggerListeners(
          this.$_targetNodes,
          Vm,
          this.triggers,
          this.hideTriggers,
          e
        ),
          this.$_registerTriggerListeners(
            [this.$_popperNode],
            Vm,
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
        if (Ss >= t.left && Ss <= t.right && ks >= t.top && ks <= t.bottom) {
          const e = this.$_popperNode.getBoundingClientRect(),
            n = Ss - zn,
            r = ks - Wn,
            s =
              e.left +
              e.width / 2 -
              zn +
              (e.top + e.height / 2) -
              Wn +
              e.width +
              e.height,
            o = zn + n * s,
            a = Wn + r * s;
          return (
            Qo(zn, Wn, o, a, e.left, e.top, e.left, e.bottom) ||
            Qo(zn, Wn, o, a, e.left, e.top, e.right, e.top) ||
            Qo(zn, Wn, o, a, e.right, e.top, e.right, e.bottom) ||
            Qo(zn, Wn, o, a, e.left, e.bottom, e.right, e.bottom)
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
  (Sw
    ? (document.addEventListener(
        "touchstart",
        jm,
        Gr ? { passive: !0, capture: !0 } : !0
      ),
      document.addEventListener(
        "touchend",
        lO,
        Gr ? { passive: !0, capture: !0 } : !0
      ))
    : (window.addEventListener("mousedown", jm, !0),
      window.addEventListener("click", aO, !0)),
  window.addEventListener("resize", hO));
function jm(t) {
  for (let e = 0; e < Gt.length; e++) {
    const n = Gt[e];
    try {
      const r = n.popperNode();
      n.$_mouseDownContains = r.contains(t.target);
    } catch {}
  }
}
function aO(t) {
  qw(t);
}
function lO(t) {
  qw(t, !0);
}
function qw(t, e = !1) {
  const n = {};
  for (let r = Gt.length - 1; r >= 0; r--) {
    const i = Gt[r];
    try {
      const s = (i.$_containsGlobalTarget = cO(i, t));
      (i.$_pendingHide = !1),
        requestAnimationFrame(() => {
          if (((i.$_pendingHide = !1), !n[i.randomId] && Hm(i, s, t))) {
            if (
              (i.$_handleGlobalClose(t, e),
              !t.closeAllPopover && t.closePopover && s)
            ) {
              let a = i.parentPopper;
              for (; a; ) (n[a.randomId] = !0), (a = a.parentPopper);
              return;
            }
            let o = i.parentPopper;
            for (; o && Hm(o, o.$_containsGlobalTarget, t); ) {
              o.$_handleGlobalClose(t, e);
              o = o.parentPopper;
            }
          }
        });
    } catch {}
  }
}
function cO(t, e) {
  const n = t.popperNode();
  return t.$_mouseDownContains || n.contains(e.target);
}
function Hm(t, e, n) {
  return n.closeAllPopover || (n.closePopover && e) || (uO(t, n) && !e);
}
function uO(t, e) {
  if (typeof t.autoHide == "function") {
    const n = t.autoHide(e);
    return (t.lastAutoHide = n), n;
  }
  return t.autoHide;
}
function hO(t) {
  for (let e = 0; e < Gt.length; e++) Gt[e].$_computePosition(t);
}
let zn = 0,
  Wn = 0,
  Ss = 0,
  ks = 0;
typeof window < "u" &&
  window.addEventListener(
    "mousemove",
    (t) => {
      (zn = Ss), (Wn = ks), (Ss = t.clientX), (ks = t.clientY);
    },
    Gr ? { passive: !0 } : void 0
  );
function Qo(t, e, n, r, i, s, o, a) {
  const l =
      ((o - i) * (e - s) - (a - s) * (t - i)) /
      ((a - s) * (n - t) - (o - i) * (r - e)),
    c =
      ((n - t) * (e - s) - (r - e) * (t - i)) /
      ((a - s) * (n - t) - (o - i) * (r - e));
  return l >= 0 && l <= 1 && c >= 0 && c <= 1;
}
var nc = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e) n[r] = i;
  return n;
};
const dO = { extends: Cw() };
function fO(t, e, n, r, i, s) {
  return (
    j(),
    de(
      "div",
      {
        ref: "reference",
        class: Pn(["v-popper", { "v-popper--shown": t.slotData.isShown }]),
      },
      [Ii(t.$slots, "default", nb(zg(t.slotData)))],
      2
    )
  );
}
var pO = nc(dO, [["render", fO]]);
function mO() {
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
let ua;
function Ku() {
  Ku.init || ((Ku.init = !0), (ua = mO() !== -1));
}
var rc = {
  name: "ResizeObserver",
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ["notify"],
  mounted() {
    Ku(),
      er(() => {
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
      ua && this.$el.appendChild(t),
      (t.data = "about:blank"),
      ua || this.$el.appendChild(t);
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
        (!ua &&
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
const gO = Ag();
Hi("data-v-b329ee4c");
const vO = { class: "resize-observer", tabindex: "-1" };
zi();
const yO = gO((t, e, n, r, i, s) => (j(), Oe("div", vO)));
rc.render = yO;
rc.__scopeId = "data-v-b329ee4c";
rc.__file = "src/components/ResizeObserver.vue";
var xw = (t = "theme") => ({
  computed: {
    themeClass() {
      return oO(this[t]);
    },
  },
});
const _O = at({
    name: "VPopperContent",
    components: { ResizeObserver: rc },
    mixins: [xw()],
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
  wO = ["id", "aria-hidden", "tabindex", "data-popper-placement"],
  bO = { ref: "inner", class: "v-popper__inner" },
  EO = I("div", { class: "v-popper__arrow-outer" }, null, -1),
  TO = I("div", { class: "v-popper__arrow-inner" }, null, -1),
  IO = [EO, TO];
function AO(t, e, n, r, i, s) {
  const o = En("ResizeObserver");
  return (
    j(),
    de(
      "div",
      {
        id: t.popperId,
        ref: "popover",
        class: Pn([
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
        style: nr(
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
          e[2] || (e[2] = Qg((a) => t.autoHide && t.$emit("hide"), ["esc"])),
      },
      [
        I("div", {
          class: "v-popper__backdrop",
          onClick: e[0] || (e[0] = (a) => t.autoHide && t.$emit("hide")),
        }),
        I(
          "div",
          {
            class: "v-popper__wrapper",
            style: nr(
              t.result ? { transformOrigin: t.result.transformOrigin } : void 0
            ),
          },
          [
            I(
              "div",
              bO,
              [
                t.mounted
                  ? (j(),
                    de(
                      ht,
                      { key: 0 },
                      [
                        I("div", null, [Ii(t.$slots, "default")]),
                        t.handleResize
                          ? (j(),
                            Oe(o, {
                              key: 0,
                              onNotify:
                                e[1] || (e[1] = (a) => t.$emit("resize", a)),
                            }))
                          : Fe("", !0),
                      ],
                      64
                    ))
                  : Fe("", !0),
              ],
              512
            ),
            I(
              "div",
              {
                ref: "arrow",
                class: "v-popper__arrow-container",
                style: nr(
                  t.result
                    ? {
                        left: t.toPx(t.result.arrow.x),
                        top: t.toPx(t.result.arrow.y),
                      }
                    : void 0
                ),
              },
              IO,
              4
            ),
          ],
          4
        ),
      ],
      46,
      wO
    )
  );
}
var Rw = nc(_O, [["render", AO]]),
  Pw = {
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
const SO = at({
  name: "VPopperWrapper",
  components: { Popper: pO, PopperContent: Rw },
  mixins: [Pw, xw("finalTheme")],
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
function kO(t, e, n, r, i, s) {
  const o = En("PopperContent"),
    a = En("Popper");
  return (
    j(),
    Oe(
      a,
      {
        ref: "popper",
        theme: t.finalTheme,
        "target-nodes": t.getTargetNodes,
        "popper-node": () => t.$refs.popperContent.$el,
        class: Pn([t.themeClass]),
      },
      {
        default: Je(
          ({
            popperId: l,
            isShown: c,
            shouldMountContent: u,
            skipTransition: h,
            autoHide: d,
            show: f,
            hide: g,
            handleResize: v,
            onResize: _,
            classes: b,
            result: y,
          }) => [
            Ii(t.$slots, "default", { shown: c, show: f, hide: g }),
            xe(
              o,
              {
                ref: "popperContent",
                "popper-id": l,
                theme: t.finalTheme,
                shown: c,
                mounted: u,
                "skip-transition": h,
                "auto-hide": d,
                "handle-resize": v,
                classes: b,
                result: y,
                onHide: g,
                onResize: _,
              },
              {
                default: Je(() => [
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
var Nd = nc(SO, [["render", kO]]);
const CO = at(So(pn({}, Nd), { name: "VDropdown", vPopperTheme: "dropdown" })),
  qO = at(So(pn({}, Nd), { name: "VMenu", vPopperTheme: "menu" })),
  xO = at(So(pn({}, Nd), { name: "VTooltip", vPopperTheme: "tooltip" })),
  RO = at({
    name: "VTooltipDirective",
    components: { Popper: Cw(), PopperContent: Rw },
    mixins: [Pw],
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
  PO = ["innerHTML"],
  OO = ["textContent"];
function DO(t, e, n, r, i, s) {
  const o = En("PopperContent"),
    a = En("Popper");
  return (
    j(),
    Oe(
      a,
      Ai({ ref: "popper" }, t.$attrs, {
        theme: t.theme,
        "popper-node": () => t.$refs.popperContent.$el,
        onApplyShow: t.onShow,
        onApplyHide: t.onHide,
      }),
      {
        default: Je(
          ({
            popperId: l,
            isShown: c,
            shouldMountContent: u,
            skipTransition: h,
            autoHide: d,
            hide: f,
            handleResize: g,
            onResize: v,
            classes: _,
            result: b,
          }) => [
            xe(
              o,
              {
                ref: "popperContent",
                class: Pn({ "v-popper--tooltip-loading": t.loading }),
                "popper-id": l,
                theme: t.theme,
                shown: c,
                mounted: u,
                "skip-transition": h,
                "auto-hide": d,
                "handle-resize": g,
                classes: _,
                result: b,
                onHide: f,
                onResize: v,
              },
              {
                default: Je(() => [
                  t.html
                    ? (j(),
                      de(
                        "div",
                        { key: 0, innerHTML: t.finalContent },
                        null,
                        8,
                        PO
                      ))
                    : (j(),
                      de(
                        "div",
                        { key: 1, textContent: Ju(t.finalContent) },
                        null,
                        8,
                        OO
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
var NO = nc(RO, [["render", DO]]);
const Ow = "v-popper--has-tooltip";
function LO(t, e) {
  let n = t.placement;
  if (!n && e) for (const r of kw) e[r] && (n = r);
  return n || (n = Ui(t.theme || "tooltip", "placement")), n;
}
function Dw(t, e, n) {
  let r;
  const i = typeof e;
  return (
    i === "string"
      ? (r = { content: e })
      : e && i === "object"
      ? (r = e)
      : (r = { content: !1 }),
    (r.placement = LO(r, n)),
    (r.targetNodes = () => [t]),
    (r.referenceNode = () => t),
    r
  );
}
let jc,
  Ys,
  MO = 0;
function $O() {
  if (jc) return;
  (Ys = ue([])),
    (jc = Yg({
      name: "VTooltipDirectiveApp",
      setup() {
        return { directives: Ys };
      },
      render() {
        return this.directives.map((e) =>
          ul(
            NO,
            So(pn({}, e.options), {
              shown: e.shown || e.options.shown,
              key: e.id,
            })
          )
        );
      },
      devtools: { hide: !0 },
    }));
  const t = document.createElement("div");
  document.body.appendChild(t), jc.mount(t);
}
function VO(t, e, n) {
  $O();
  const r = ue(Dw(t, e, n)),
    i = ue(!1),
    s = { id: MO++, options: r, shown: i };
  return (
    Ys.value.push(s),
    t.classList && t.classList.add(Ow),
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
function Nw(t) {
  if (t.$_popper) {
    const e = Ys.value.indexOf(t.$_popper.item);
    e !== -1 && Ys.value.splice(e, 1),
      delete t.$_popper,
      delete t.$_popperOldShown,
      delete t.$_popperMountTarget;
  }
  t.classList && t.classList.remove(Ow);
}
function zm(t, { value: e, modifiers: n }) {
  const r = Dw(t, e, n);
  if (!r.content || Ui(r.theme || "tooltip", "disabled")) Nw(t);
  else {
    let i;
    t.$_popper ? ((i = t.$_popper), (i.options.value = r)) : (i = VO(t, e, n)),
      typeof e.shown < "u" &&
        e.shown !== t.$_popperOldShown &&
        ((t.$_popperOldShown = e.shown), e.shown ? i.show() : i.hide());
  }
}
var FO = {
  beforeMount: zm,
  updated: zm,
  beforeUnmount(t) {
    Nw(t);
  },
};
function Wm(t) {
  t.addEventListener("click", Lw),
    t.addEventListener("touchstart", Mw, Gr ? { passive: !0 } : !1);
}
function Km(t) {
  t.removeEventListener("click", Lw),
    t.removeEventListener("touchstart", Mw),
    t.removeEventListener("touchend", $w),
    t.removeEventListener("touchcancel", Vw);
}
function Lw(t) {
  const e = t.currentTarget;
  (t.closePopover = !e.$_vclosepopover_touch),
    (t.closeAllPopover =
      e.$_closePopoverModifiers && !!e.$_closePopoverModifiers.all);
}
function Mw(t) {
  if (t.changedTouches.length === 1) {
    const e = t.currentTarget;
    e.$_vclosepopover_touch = !0;
    const n = t.changedTouches[0];
    (e.$_vclosepopover_touchPoint = n),
      e.addEventListener("touchend", $w),
      e.addEventListener("touchcancel", Vw);
  }
}
function $w(t) {
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
function Vw(t) {
  const e = t.currentTarget;
  e.$_vclosepopover_touch = !1;
}
var UO = {
  beforeMount(t, { value: e, modifiers: n }) {
    (t.$_closePopoverModifiers = n), (typeof e > "u" || e) && Wm(t);
  },
  updated(t, { value: e, oldValue: n, modifiers: r }) {
    (t.$_closePopoverModifiers = r),
      e !== n && (typeof e > "u" || e ? Wm(t) : Km(t));
  },
  beforeUnmount(t) {
    Km(t);
  },
};
function BO(t, e = {}) {
  t.$_vTooltipInstalled ||
    ((t.$_vTooltipInstalled = !0),
    Aw(bn, e),
    t.directive("tooltip", FO),
    t.directive("close-popper", UO),
    t.component("VTooltip", xO),
    t.component("VDropdown", CO),
    t.component("VMenu", qO));
}
const jO = { version: "2.0.0-beta.20", install: BO, options: bn };
var HO = "firebase",
  zO = "9.10.0";
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
 */ or(HO, zO, "app");
var ic = function () {
    return typeof document < "u" && typeof window < "u";
  },
  WO = function (e, n) {
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
  KO = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Object.keys(n).forEach(function (r) {
      e[r] = n[r];
    });
  },
  Fw = On({
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
  vr = function () {
    return Pb(Fw);
  },
  Uw = Re(function () {
    var t = vr(),
      e = t.property;
    if (e.value)
      return Array.isArray(e.value)
        ? e.value.find(function (n) {
            return n.default === !0;
          }) || e.value[0]
        : e.value;
  }),
  GO = Re(function () {
    var t = vr(),
      e = t.property;
    return !!(e.value && e.value.id !== null);
  }),
  Xs = Re(function () {
    var t = vr(),
      e = t.property;
    return Array.isArray(e.value) ? e.value : [e.value];
  }),
  QO = Re(function () {
    var t = vr(),
      e = t.isEnabled,
      n = Uw.value;
    return !!(n && n.id && e.value);
  }),
  ko = function () {
    var t;
    if (ic()) {
      for (
        var e = vr(),
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
  Ld = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    Xs.value.forEach(function (r) {
      ko.apply(void 0, ["config", r.id].concat(e));
    });
  },
  YO = function (t) {
    Ld({ custom_map: t });
  },
  XO = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    ic() &&
      Xs.value.forEach(function (e) {
        window["ga-disable-".concat(e.id)] = t;
      });
  },
  ei = function (t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = Object.assign({}, e);
    !n.send_to &&
      Xs.value.length > 1 &&
      (n.send_to = Xs.value.map(function (r) {
        return r.id;
      })),
      ko("event", t, n);
  },
  JO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ei.apply(void 0, ["exception"].concat(e));
  },
  ZO = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    Ld.apply(void 0, ["linker"].concat(e));
  },
  eD = function (t) {
    var e = {};
    typeof t == "string"
      ? (e = { page_path: t, page_location: window.location.href })
      : (e = t),
      typeof e.send_page_view > "u" && (e.send_page_view = !0),
      ei("page_view", e);
  },
  tD = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ei.apply(void 0, ["purchase"].concat(e));
  },
  nD = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ei.apply(void 0, ["refund"].concat(e));
  },
  rD = function () {
    for (
      var t = vr(),
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
      ei("screen_view", l);
  },
  iD = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ko.apply(void 0, ["set"].concat(e));
  },
  sD = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    ei.apply(void 0, ["timing_complete"].concat(e));
  },
  oD = Object.freeze({
    __proto__: null,
    config: Ld,
    customMap: YO,
    disable: XO,
    event: ei,
    exception: JO,
    linker: ZO,
    pageview: eD,
    purchase: tD,
    query: ko,
    refund: nD,
    screenview: rD,
    set: iD,
    time: sD,
  }),
  Gm = ue(!1),
  Qm = ue(!1),
  aD = function () {
    var e = vr(),
      n = e.disableScriptLoader,
      r = e.preconnectOrigin,
      i = e.resourceURL,
      s = e.dataLayerName;
    if (!(!ic() || !GO.value || Qm.value)) {
      if (
        ((Qm.value = !0),
        Xs.value.forEach(function (a) {
          var l = Object.assign({ send_page_view: !1 }, a.params);
          ko("config", a.id, l);
        }),
        n.value)
      ) {
        Gm.value = !0;
        return;
      }
      var o = ""
        .concat(i.value, "?id=")
        .concat(Uw.value.id, "&l=")
        .concat(s.value);
      WO(o, r.value).then(function () {
        Gm.value = !0;
      });
    }
  },
  lD = function () {
    ut(
      function () {
        return QO.value;
      },
      function (e) {
        return e && aD();
      },
      { immediate: !0 }
    );
  },
  cD = function () {
    if (ic()) {
      var t = vr(),
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
On({ template: null, useScreenview: !1, skipSamePath: !0 });
var uD = {
  install: function (e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    KO(Fw, n), cD(), lD(), (e.config.globalProperties.$gtag = oD);
  },
};
const hD = {
  apiKey: "AIzaSyADXkE6U5j_hlSRxK3nfqyylmPXgUeGWsQ",
  authDomain: "cris-ordem-paranormal.firebaseapp.com",
  projectId: "cris-ordem-paranormal",
  storageBucket: "cris-ordem-paranormal.appspot.com",
  messagingSenderId: "713229784986",
  appId: "1:713229784986:web:8096a40ec5021bbbf18c23",
  measurementId: "G-XCBC726H4S",
};
KI(hD);
const ti = Yg(nR);
ti.use(uD, { property: { id: "G-XCBC726H4S" } });
ti.use(dw);
ti.use(hP);
ti.use(vw);
ti.use(jO);
ti.component("PEditor", yw);
ti.mount("#app");
export {
  Zs as $,
  Oe as A,
  $1 as B,
  Ft as C,
  kD as D,
  hw as E,
  L1 as F,
  Ot as G,
  U1 as H,
  Nx as I,
  Pn as J,
  Ye as K,
  H1 as L,
  jl as M,
  RD as N,
  cE as O,
  wi as P,
  CD as Q,
  E1 as R,
  _h as S,
  ya as T,
  mD as U,
  PD as V,
  cw as W,
  qD as X,
  xD as Y,
  aw as Z,
  Zi as _,
  I as a,
  fD as a0,
  ll as a1,
  Jd as a2,
  dD as a3,
  EE as a4,
  S as a5,
  Ii as a6,
  Zt as a7,
  Ai as a8,
  qi as a9,
  Br as aa,
  or as ab,
  yt as ac,
  Eh as ad,
  vv as ae,
  no as af,
  Nn as ag,
  al as ah,
  Jg as ai,
  zi as b,
  de as c,
  at as d,
  un as e,
  Re as f,
  oo as g,
  OD as h,
  En as i,
  _a as j,
  xe as k,
  B1 as l,
  Fe as m,
  ht as n,
  j as o,
  Hi as p,
  Jc as q,
  ue as r,
  Vs as s,
  Ju as t,
  yh as u,
  Je as v,
  ut as w,
  Jt as x,
  pD as y,
  Qg as z,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/LoginPage-GHNlnIyP.js",
      "assets/LoginPage-eaGdDaNQ.css",
      "assets/CharacterList-xmTRxDS7.js",
      "assets/LoadingView-k_Tp0sm7.js",
      "assets/LoadingView-qh-7N428.css",
      "assets/SearchInput-Dta_mKRd.js",
      "assets/SearchInput-LEjlhuSA.css",
      "assets/ToastNotification-qKJt4qAM.js",
      "assets/ToastNotification-yhyaH9rC.css",
      "assets/CharacterCard-DyYettMc.js",
      "assets/open-in-new-icon-p91krxL-.js",
      "assets/CharacterCard-9d6BWOZG.css",
      "assets/firebase-0yyb2Old.js",
      "assets/CharacterList-Fw_kB2IC.css",
      "assets/CampaignsList-Qn1CHpAV.js",
      "assets/CampaignsList-vV8BsU8v.css",
      "assets/HomebrewList-WlF-OW5v.js",
      "assets/TabNav-p4cAvo-x.js",
      "assets/TabNav-EPczaBrR.css",
      "assets/HomebrewItems-6-Ib_y8F.js",
      "assets/PowerCard-sUX7e4OG.js",
      "assets/show-more-icon-VvUXKiHG.js",
      "assets/add-icon-fJ4uQHUZ.js",
      "assets/PowerCard-eSGA7CKx.css",
      "assets/default-tJ6A0c0K.js",
      "assets/forms-8DDAOOVU.js",
      "assets/lodash-gzw5KmHd.js",
      "assets/_commonjsHelpers-4gQjN7DL.js",
      "assets/RitualCard-YH3J2Aqe.js",
      "assets/d20-icon-vaz1En3o.js",
      "assets/RitualCard-YjXbv06p.css",
      "assets/DropdownSimple-8bCJNp2Z.js",
      "assets/DropdownSimple-Fkf-Qfr8.css",
      "assets/CursedItemCard-N61tB9t5.js",
      "assets/CursedItemCard-cVIajowH.css",
      "assets/HomebrewItems-JmmT6SZc.css",
      "assets/CreatureCard-3jHgev5R.js",
      "assets/CreatureCard-ANgcNO-8.css",
      "assets/PrivateFeat-yFE7JtwT.js",
      "assets/PrivateFeat-Pey8Uhe4.css",
      "assets/CreatureForm-wgOj711w.js",
      "assets/blank-profile-picture-wMh28flS.js",
      "assets/creatureData-jLpja1fz.js",
      "assets/PictureModal-gf9J8dUZ.js",
      "assets/index.esm2017-Gxd8XF9H.js",
      "assets/index-qLpZT18D.css",
      "assets/v4-cyCr5FZV.js",
      "assets/PictureModal-5QuNTWi8.css",
      "assets/CreatureForm-3BoYeYRW.css",
      "assets/HomebrewList-0r_pnsCl.css",
      "assets/HomebrewPowerView-ehqrMGKG.js",
      "assets/PlayerCard-6Pq9W0xF.js",
      "assets/colors-NalZ6sWE.js",
      "assets/PlayerCard-uyIvYeuE.css",
      "assets/HomebrewPowerView-oH1rxoLq.css",
      "assets/HomebrewRitualView-tEajIrFt.js",
      "assets/HomebrewRitualView-A5dhjcNK.css",
      "assets/HomebrewItemView-sIAMyr5q.js",
      "assets/HomebrewItemView-xVelEn5u.css",
      "assets/HomebrewCreatureView-fwixu1XN.js",
      "assets/HomebrewCreatureView-p5Bsn7sU.css",
      "assets/UserProfile-1vHZAVpv.js",
      "assets/UserProfile-nBvv8kym.css",
      "assets/CampaignCreate-z1iPWZXp.js",
      "assets/SwitchButtonBool-J5cfaQa_.js",
      "assets/SwitchButtonBool-VT84EvRG.css",
      "assets/CampaignCreate-ZGKciBb7.css",
      "assets/CampaignEdit-QjcJkoRb.js",
      "assets/CampaignEdit-g3a8pHRX.css",
      "assets/CampaignPage-oHl7Ojxy.js",
      "assets/CombatCard-lAnt3YWC.js",
      "assets/CombatCard-B8Jbf4SW.css",
      "assets/CampaignPage-rxEkD6sn.css",
      "assets/CampaignJoin-b36K6QCQ.js",
      "assets/CampaignJoin-Y3mQwTGd.css",
      "assets/CampaignAddAgent-D6TdBbav.js",
      "assets/CampaignAddAgent-ak7wNOog.css",
      "assets/CreateCombat-qsntCBxv.js",
      "assets/creatures-uHc55fi5.js",
      "assets/CreateCombat-NQ3F2-l1.css",
      "assets/EditCombat-Pgj4CfzA.js",
      "assets/EditCombat-hUNmCuzT.css",
      "assets/CampaignPageDenied--M0U7YQS.js",
      "assets/CampaignPageDenied-gbq2rXKF.css",
      "assets/MasterScreen-RtS0zIxs.js",
      "assets/characterSheetUtils-wyz_PEO6.js",
      "assets/edit-icon-u1vf_q3w.js",
      "assets/classes-pvy_AWKl.js",
      "assets/skills-siTAQjCS.js",
      "assets/characterSheetUtils-ssRZxcFI.css",
      "assets/ActionModal-_QJGvj7-.js",
      "assets/ActionModal-LJbZcYkK.css",
      "assets/MasterScreen-Ofo4qbMp.css",
      "assets/CharacterCreation-U5qvSGAZ.js",
      "assets/ClassCard-jEKQK4J4.js",
      "assets/ClassCard-P-qZoCAy.css",
      "assets/characterCreationUtils-0TvngL5F.js",
      "assets/CharacterCreation-4pL9CAsF.css",
      "assets/CharacterSheet-TvYbpJnF.js",
      "assets/CharacterSheet-1q9thr-Y.css",
      "assets/ContactView-2x1jiRpL.js",
      "assets/ContactView-8FCoscjA.css",
      "assets/CharacterStream-Ooc0wLb5.js",
      "assets/CharacterStream-9tlGFTRM.css",
      "assets/CharacterPv-9oD3vsLZ.js",
      "assets/CharacterPv-T9RjlDJ-.css",
      "assets/CharacterSan-I0RYLM5e.js",
      "assets/CharacterSan-5FC5fBOx.css",
      "assets/CharacterPe-OQNePq29.js",
      "assets/CharacterPe-Akcgawku.css",
      "assets/about-view-I9yxpQoz.js",
      "assets/about-view-iBvomE2y.css",
      "assets/privacy-policy-md6r9oHw.js",
      "assets/privacy-policy-K8p3o3Le.css",
      "assets/CreaturesList-3x9HKaDn.js",
      "assets/CreaturesList-xmF7rmQs.css",
      "assets/CreatureSheet-zdjRPf0M.js",
      "assets/CreatureSheet-GQHIuiph.css",
      "assets/blog-view-y3qIoxGN.js",
      "assets/BlogList-8Erl-PnI.js",
      "assets/BlogList-vZBULAIh.css",
      "assets/persona-5-strikers-a-continuacao-eletrizante-de-uma-jornada-inesquecivel-tgiuMGFH.js",
      "assets/the-witcher-3-wild-hunt-um-rpg-de-acao-com-uma-narrativa-rica-e-um-vasto-mundo-aberto-U1ZIUEr8.js",
      "assets/mass-effect-legendary-edition-uma-jornada-remasterizada-pelos-confins-da-galaxia-LPkaCcgN.js",
      "assets/genshin-impact-uma-jornada-alem-dos-limites-E9FDJ20R.js",
      "assets/final-fantasy-xiv-uma-odisseia-virtual-com-comunidade-forte-e-narrativa-imersiva-zFTT1fnm.js",
      "assets/elden-ring-a-jornada-epica-alem-das-expectativas-nYyktuYe.js",
      "assets/divinity-original-sin-2-desbravando-os-mundos-magicos-do-rpg-tatico-cooperativo-udZReaBC.js",
      "assets/cyberpunk-2077-um-rpg-de-acao-futurista-dos-criadores-de-the-witcher-3-GRaV75rz.js",
      "assets/assassins-creed-valhalla-a-fusao-magnifica-entre-acao-e-rpg-fN700V8s.js",
      "assets/o-que-e-rpg-de-mesa-0AYjJjnw.js",
      "assets/o-rpg-ordem-paranormal-9WZWM7DN.js",
      "assets/o-rpg-tormenta20-uerJxTR3.js",
      "assets/3d_t-a-porta-de-entrada-pro-rpg-brasileiro-bSMRfokK.js",
      "assets/vampiro-a-mascara-perdura-ao-longo-das-decadas-NksDyr38.js",
      "assets/a-popularizacao-de-dungeons-_-dragons-2MqfIe5C.js",
      "assets/criando-personagens-memoraveis-em-rpg-de-mesa-KZ4tw5Mz.js",
      "assets/diferentes-estilos-de-mestres-em-rpg-de-mesa-Xy3HQDA-.js",
      "assets/historia-do-rpg-uma-viagem-pela-evolucao-do-genero-15KKvcFH.js",
      "assets/gurps-o-rpg-generico-vB2FXXj2.js",
      "assets/pathfinder-o-maior-rival-de-dungeons-_-dragons-OOdWt8kI.js",
      "assets/um-guia-completo-sobre-pathfinder-f_RyH2xR.js",
      "assets/os-sistemas-mais-faceis-e-mais-dificeis-de-rpg-de-mesa-sYceu5OU.js",
      "assets/fate-core-system-e-o-sistema-mais-facil-do-mundo-7iSCarR3.js",
      "assets/dicas-para-mestres-de-rpg-633ZKhYb.js",
      "assets/criando-um-mundo-de-rpg-personalizado-eTdJukUL.js",
      "assets/a-psicologia-do-rpg-influencias-na-tomada-de-decisoes-criatividade-e-pensamento-estrategico-XoQVfNxL.js",
      "assets/os-beneficios-do-rpg-para-a-vida-real-WruCkeXx.js",
      "assets/a-influencia-de-d_d-na-cultura-pop-D4NDOGer.js",
      "assets/a-evolucao-das-mecanicas-de-rpg-4N9MogmT.js",
      "assets/racas-e-classes-explorando-as-escolhas-de-personagem-X8epRuID.js",
      "assets/o-papel-do-mestre-na-narrativa-de-rpg-xRi2cV5T.js",
      "assets/mundos-de-campanhas-de-rpg-famosos-forgotten-realms-greyhawk-eberron-MwtOdtaH.js",
      "assets/o-impacto-da-arte-na-estetica-dos-rpgs-WAKJHBB_.js",
      "assets/a-psicologia-por-tras-das-escolhas-de-personagens-de-rpg-nSHCpyOm.js",
      "assets/mitos-e-lendas-folcloricas-no-mundo-dos-rpgs-NZTm8y9a.js",
      "assets/o-uso-de-suplementos-e-modulos-de-aventuras-no-rpg-de-mesa-DwbylJHo.js",
      "assets/rpgs-alem-do-medieval-fantastico-explorando-rpgs-que-fogem-do-cenario-medieval-1DibTVLh.js",
      "assets/como-criar-encontros-e-desafios-equilibrados-rpg-de-mesa-h4gboKgo.js",
      "assets/descobrindo-o-mundo-do-rpg-savage-worlds-wWfhEZwm.js",
      "assets/explorando-os-subgeneros-do-rpg-RLgq_ftB.js",
      "assets/baldurs-gate-3-o-sucesso-que-esta-encantando-os-jogadores-_piKGvYN.js",
      "assets/descobrindo-as-qualidades-e-diferencas-do-rpg-apocalypse-world-GkxxwkUI.js",
      "assets/descobrindo-o-universo-do-rpg-world-of-darkness-nVjzIJBY.js",
      "assets/e-dificil-comecar-a-jogar-rpg-de-mesa-a4Xu-FjV.js",
      "assets/a-importancia-da-cooperacao-em-jogos-de-rpg-mSfJpLdC.js",
      "assets/criando-e-mantendo-uma-campanha-de-rpg-de-longo-prazo-XGdGGrLX.js",
      "assets/o-rpg-como-pilar-da-cultura-geek-e-nerd-dOm5Y_6p.js",
      "assets/criando-personagens-complexos-e-multidimensionais-no-rpg-2JvaBd5X.js",
      "assets/a-psicologia-da-imersao-em-jogos-de-rpg-de-mesa-SrZC2f8R.js",
      "assets/construindo-mundos-de-campanha-de-rpg-atrativos-ps7cj0IL.js",
      "assets/o-papel-da-musica-e-da-trilha-sonora-em-jogos-de-rpg-Er9IiiBy.js",
      "assets/as-origens-e-a-evolucao-dos-dados-de-rpg-B7aLnW_x.js",
      "assets/rpg-como-ferramenta-de-aprendizado-UVKQGUFS.js",
      "assets/inclusao-de-elementos-da-cultura-pop-em-campanhas-de-rpg-ugrZ0TRi.js",
      "assets/o-impacto-dos-livros-de-aventura-oficiais-em-campanhas-de-rpg-fc8TOYxf.js",
      "assets/rpgs-para-criancas-e-iniciantes-42Vx9ZsM.js",
      "assets/etica-e-responsabilidade-em-jogos-de-rpg-fVr-JFW9.js",
      "assets/o-uso-de-ferramentas-digitais-em-mesas-de-rpg-GkiM-pfA.js",
      "assets/criando-e-jogando-em-cenarios-de-rpg-pos-apocalipticos-EAd-PCxs.js",
      "assets/a-influencia-das-artes-marciais-em-personagens-de-rpg-jcApAcKD.js",
      "assets/a-diversidade-de-estilos-de-narrativa-em-rpg-DBSfLN7B.js",
      "assets/o-uso-terapeutico-dos-jogos-de-rpg--mPg_4I8.js",
      "assets/diferenca_entre_rpgs_de_mesa_e_rpgs_eletronicos-AC3uxvkx.js",
      "assets/evolucao_das_mecanicas_de_rpg_de_gygax_a_gurps-uIAgNzXb.js",
      "assets/influencia_da_mitologia_em_jogos_de_rpg-rGGgsnnd.js",
      "assets/rgps_de_super_herois_explorando_os_poderes_e_desafios_um_guia_sobre_como_jogar_rpgs_de_super_herois-4rLa24me.js",
      "assets/impacto_da_tecnologia_rpgs_de_realidade_virtual_e_aumentada-RbTBvOLR.js",
      "assets/mundo_das_miniaturas_e_cenarios_personalizados-bS8CZgw1.js",
      "assets/evolucao_do_rpg_mobile_jogos_de_rpg_para_dispositivos_moveis-AnhBJnNJ.js",
      "assets/historia_e_a_evolucao_dos_larp_live_action_role_playing-MWNfZDaV.js",
      "assets/jogos_de_rpg_e_empreendedorismo_criando_e_publicando_seu_proprio_rpg-5MArXUjv.js",
      "assets/uso_de_enigmas_e_quebra_cabecas_em_campanhas_de_rpg-mMWi5gWU.js",
      "assets/mundos_de_rpg_baseados_em_literatura_classica_cenarios_de_sherlock_holmes_ou_alice_no_pais_das_maravilhas-NO6IF1IC.js",
      "assets/psicologia_dos_viloes_em_rpg_criando_antagonistas_cativantes-xZQ16l_A.js",
      "assets/papel_das_ferramentas_de_software_em_jogos_de_rpg-IEEWhR-C.js",
      "assets/historia_de_sucesso_no_mundo_dos_rpgs_de_jogadores_a_autores_de_jogos-IBLq9ZLQ.js",
      "assets/explorando_a_cultura_do_cosplay_em_rpg-Is1HrrNF.js",
      "assets/rpgs_de_construcao_de_imperios_explorando_o_aspecto_estrategico-A5akqFHl.js",
      "assets/uso_de_simbologia_e_mitologia_em_rpgs-Nvcf6_DQ.js",
      "assets/economia_nos_mundos_de_rpg_moedas_e_comercio-LnlNkKA8.js",
      "assets/importancia_da_diversidade_e_representacao_nos_jogos-AtmGZwoM.js",
      "assets/futuro_dos_jogos_em_nuvem_streaming_plataformas_de_assinaturas-vwvX3wlx.js",
      "assets/NotFoundView-Pb3MR9ZR.js",
      "assets/NotFoundView-imReMPlA.css",
      "assets/quill-OFcVbw76.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}

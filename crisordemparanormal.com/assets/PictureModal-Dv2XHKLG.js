import {
  d as dt,
  r as Pe,
  o as Ie,
  c as ke,
  a as ue,
  k as gt,
  v as Ve,
  L as Ke,
  H as Ze,
  p as pt,
  b as vt,
  J as mt,
  _ as bt,
} from "./index-G0kqgsTS.js";
import {
  g as At,
  f as Xe,
  r as wt,
  u as yt,
  a as Ut,
} from "./index.esm2017-FN2KD4VC.js";
import { L as _t } from "./LoadingView-KgVPmtmJ.js";
import { v as Ct } from "./v4-cyCr5FZV.js";
function Ft(R, x) {
  return (
    x.forEach(function (H) {
      H &&
        typeof H != "string" &&
        !Array.isArray(H) &&
        Object.keys(H).forEach(function (h) {
          if (h !== "default" && !(h in R)) {
            var e = Object.getOwnPropertyDescriptor(H, h);
            Object.defineProperty(
              R,
              h,
              e.get
                ? e
                : {
                    enumerable: !0,
                    get: function () {
                      return H[h];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(R)
  );
}
function Je(R, x) {
  return new Promise(function (H, h) {
    let e;
    return It(R).then(function (t) {
      try {
        return (
          (e = t),
          H(new Blob([x.slice(0, 2), e, x.slice(2)], { type: "image/jpeg" }))
        );
      } catch (l) {
        return h(l);
      }
    }, h);
  });
}
const It = (R) =>
  new Promise((x, H) => {
    const h = new FileReader();
    h.addEventListener("load", ({ target: { result: e } }) => {
      const t = new DataView(e);
      let l = 0;
      if (t.getUint16(l) !== 65496) return H("not a valid JPEG");
      for (l += 2; ; ) {
        const f = t.getUint16(l);
        if (f === 65498) break;
        const p = t.getUint16(l + 2);
        if (f === 65505 && t.getUint32(l + 4) === 1165519206) {
          const A = l + 10;
          let r;
          switch (t.getUint16(A)) {
            case 18761:
              r = !0;
              break;
            case 19789:
              r = !1;
              break;
            default:
              return H("TIFF header contains invalid endian");
          }
          if (t.getUint16(A + 2, r) !== 42)
            return H("TIFF header contains invalid version");
          const i = t.getUint32(A + 4, r),
            n = A + i + 2 + 12 * t.getUint16(A + i, r);
          for (let o = A + i + 2; o < n; o += 12)
            if (t.getUint16(o, r) == 274) {
              if (t.getUint16(o + 2, r) !== 3)
                return H("Orientation data type is invalid");
              if (t.getUint32(o + 4, r) !== 1)
                return H("Orientation data count is invalid");
              t.setUint16(o + 8, 1, r);
              break;
            }
          return x(e.slice(l, l + 2 + p));
        }
        l += 2 + p;
      }
      return x(new Blob());
    }),
      h.readAsArrayBuffer(R);
  });
var Oe = {},
  Et = {
    get exports() {
      return Oe;
    },
    set exports(R) {
      Oe = R;
    },
  };
(function (R) {
  var x,
    H,
    h = {};
  (Et.exports = h),
    (h.parse = function (e, t) {
      for (
        var l = h.bin.readUshort,
          f = h.bin.readUint,
          p = 0,
          A = {},
          r = new Uint8Array(e),
          i = r.length - 4;
        f(r, i) != 101010256;

      )
        i--;
      (p = i), (p += 4);
      var n = l(r, (p += 4));
      l(r, (p += 2));
      var o = f(r, (p += 2)),
        d = f(r, (p += 4));
      (p += 4), (p = d);
      for (var U = 0; U < n; U++) {
        f(r, p),
          (p += 4),
          (p += 4),
          (p += 4),
          f(r, (p += 4)),
          (o = f(r, (p += 4)));
        var I = f(r, (p += 4)),
          b = l(r, (p += 4)),
          O = l(r, p + 2),
          k = l(r, p + 4);
        p += 6;
        var E = f(r, (p += 8));
        (p += 4), (p += b + O + k), h._readLocal(r, E, A, o, I, t);
      }
      return A;
    }),
    (h._readLocal = function (e, t, l, f, p, A) {
      var r = h.bin.readUshort,
        i = h.bin.readUint;
      i(e, t), r(e, (t += 4)), r(e, (t += 2));
      var n = r(e, (t += 2));
      i(e, (t += 2)), i(e, (t += 4)), (t += 4);
      var o = r(e, (t += 8)),
        d = r(e, (t += 2));
      t += 2;
      var U = h.bin.readUTF8(e, t, o);
      if (((t += o), (t += d), A)) l[U] = { size: p, csize: f };
      else {
        var I = new Uint8Array(e.buffer, t);
        if (n == 0) l[U] = new Uint8Array(I.buffer.slice(t, t + f));
        else {
          if (n != 8) throw "unknown compression method: " + n;
          var b = new Uint8Array(p);
          h.inflateRaw(I, b), (l[U] = b);
        }
      }
    }),
    (h.inflateRaw = function (e, t) {
      return h.F.inflate(e, t);
    }),
    (h.inflate = function (e, t) {
      return (
        e[0],
        e[1],
        h.inflateRaw(
          new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 6),
          t
        )
      );
    }),
    (h.deflate = function (e, t) {
      t == null && (t = { level: 6 });
      var l = 0,
        f = new Uint8Array(50 + Math.floor(1.1 * e.length));
      (f[l] = 120),
        (f[l + 1] = 156),
        (l += 2),
        (l = h.F.deflateRaw(e, f, l, t.level));
      var p = h.adler(e, 0, e.length);
      return (
        (f[l + 0] = (p >>> 24) & 255),
        (f[l + 1] = (p >>> 16) & 255),
        (f[l + 2] = (p >>> 8) & 255),
        (f[l + 3] = (p >>> 0) & 255),
        new Uint8Array(f.buffer, 0, l + 4)
      );
    }),
    (h.deflateRaw = function (e, t) {
      t == null && (t = { level: 6 });
      var l = new Uint8Array(50 + Math.floor(1.1 * e.length)),
        f = h.F.deflateRaw(e, l, f, t.level);
      return new Uint8Array(l.buffer, 0, f);
    }),
    (h.encode = function (e, t) {
      t == null && (t = !1);
      var l = 0,
        f = h.bin.writeUint,
        p = h.bin.writeUshort,
        A = {};
      for (var r in e) {
        var i = !h._noNeed(r) && !t,
          n = e[r],
          o = h.crc.crc(n, 0, n.length);
        A[r] = {
          cpr: i,
          usize: n.length,
          crc: o,
          file: i ? h.deflateRaw(n) : n,
        };
      }
      for (var r in A) l += A[r].file.length + 30 + 46 + 2 * h.bin.sizeUTF8(r);
      l += 22;
      var d = new Uint8Array(l),
        U = 0,
        I = [];
      for (var r in A) {
        var b = A[r];
        I.push(U), (U = h._writeHeader(d, U, r, b, 0));
      }
      var O = 0,
        k = U;
      for (var r in A)
        (b = A[r]), I.push(U), (U = h._writeHeader(d, U, r, b, 1, I[O++]));
      var E = U - k;
      return (
        f(d, U, 101010256),
        (U += 4),
        p(d, (U += 4), O),
        p(d, (U += 2), O),
        f(d, (U += 2), E),
        f(d, (U += 4), k),
        (U += 4),
        (U += 2),
        d.buffer
      );
    }),
    (h._noNeed = function (e) {
      var t = e.split(".").pop().toLowerCase();
      return "png,jpg,jpeg,zip".indexOf(t) != -1;
    }),
    (h._writeHeader = function (e, t, l, f, p, A) {
      var r = h.bin.writeUint,
        i = h.bin.writeUshort,
        n = f.file;
      return (
        r(e, t, p == 0 ? 67324752 : 33639248),
        (t += 4),
        p == 1 && (t += 2),
        i(e, t, 20),
        i(e, (t += 2), 0),
        i(e, (t += 2), f.cpr ? 8 : 0),
        r(e, (t += 2), 0),
        r(e, (t += 4), f.crc),
        r(e, (t += 4), n.length),
        r(e, (t += 4), f.usize),
        i(e, (t += 4), h.bin.sizeUTF8(l)),
        i(e, (t += 2), 0),
        (t += 2),
        p == 1 && ((t += 2), (t += 2), r(e, (t += 6), A), (t += 4)),
        (t += h.bin.writeUTF8(e, t, l)),
        p == 0 && (e.set(n, t), (t += n.length)),
        t
      );
    }),
    (h.crc = {
      table: (function () {
        for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
          for (var l = t, f = 0; f < 8; f++)
            1 & l ? (l = 3988292384 ^ (l >>> 1)) : (l >>>= 1);
          e[t] = l;
        }
        return e;
      })(),
      update: function (e, t, l, f) {
        for (var p = 0; p < f; p++)
          e = h.crc.table[255 & (e ^ t[l + p])] ^ (e >>> 8);
        return e;
      },
      crc: function (e, t, l) {
        return 4294967295 ^ h.crc.update(4294967295, e, t, l);
      },
    }),
    (h.adler = function (e, t, l) {
      for (var f = 1, p = 0, A = t, r = t + l; A < r; ) {
        for (var i = Math.min(A + 5552, r); A < i; ) p += f += e[A++];
        (f %= 65521), (p %= 65521);
      }
      return (p << 16) | f;
    }),
    (h.bin = {
      readUshort: function (e, t) {
        return e[t] | (e[t + 1] << 8);
      },
      writeUshort: function (e, t, l) {
        (e[t] = 255 & l), (e[t + 1] = (l >> 8) & 255);
      },
      readUint: function (e, t) {
        return (
          16777216 * e[t + 3] + ((e[t + 2] << 16) | (e[t + 1] << 8) | e[t])
        );
      },
      writeUint: function (e, t, l) {
        (e[t] = 255 & l),
          (e[t + 1] = (l >> 8) & 255),
          (e[t + 2] = (l >> 16) & 255),
          (e[t + 3] = (l >> 24) & 255);
      },
      readASCII: function (e, t, l) {
        for (var f = "", p = 0; p < l; p++) f += String.fromCharCode(e[t + p]);
        return f;
      },
      writeASCII: function (e, t, l) {
        for (var f = 0; f < l.length; f++) e[t + f] = l.charCodeAt(f);
      },
      pad: function (e) {
        return e.length < 2 ? "0" + e : e;
      },
      readUTF8: function (e, t, l) {
        for (var f, p = "", A = 0; A < l; A++)
          p += "%" + h.bin.pad(e[t + A].toString(16));
        try {
          f = decodeURIComponent(p);
        } catch {
          return h.bin.readASCII(e, t, l);
        }
        return f;
      },
      writeUTF8: function (e, t, l) {
        for (var f = l.length, p = 0, A = 0; A < f; A++) {
          var r = l.charCodeAt(A);
          if (!(4294967168 & r)) (e[t + p] = r), p++;
          else if (!(4294965248 & r))
            (e[t + p] = 192 | (r >> 6)),
              (e[t + p + 1] = 128 | ((r >> 0) & 63)),
              (p += 2);
          else if (!(4294901760 & r))
            (e[t + p] = 224 | (r >> 12)),
              (e[t + p + 1] = 128 | ((r >> 6) & 63)),
              (e[t + p + 2] = 128 | ((r >> 0) & 63)),
              (p += 3);
          else {
            if (4292870144 & r) throw "e";
            (e[t + p] = 240 | (r >> 18)),
              (e[t + p + 1] = 128 | ((r >> 12) & 63)),
              (e[t + p + 2] = 128 | ((r >> 6) & 63)),
              (e[t + p + 3] = 128 | ((r >> 0) & 63)),
              (p += 4);
          }
        }
        return p;
      },
      sizeUTF8: function (e) {
        for (var t = e.length, l = 0, f = 0; f < t; f++) {
          var p = e.charCodeAt(f);
          if (!(4294967168 & p)) l++;
          else if (!(4294965248 & p)) l += 2;
          else if (!(4294901760 & p)) l += 3;
          else {
            if (4292870144 & p) throw "e";
            l += 4;
          }
        }
        return l;
      },
    }),
    (h.F = {}),
    (h.F.deflateRaw = function (e, t, l, f) {
      var p = [
          [0, 0, 0, 0, 0],
          [4, 4, 8, 4, 0],
          [4, 5, 16, 8, 0],
          [4, 6, 16, 16, 0],
          [4, 10, 16, 32, 0],
          [8, 16, 32, 32, 0],
          [8, 16, 128, 128, 0],
          [8, 32, 128, 256, 0],
          [32, 128, 258, 1024, 1],
          [32, 258, 258, 4096, 1],
        ][f],
        A = h.F.U,
        r = h.F._goodIndex;
      h.F._hash;
      var i = h.F._putsE,
        n = 0,
        o = l << 3,
        d = 0,
        U = e.length;
      if (f == 0) {
        for (; n < U; )
          i(t, o, n + (y = Math.min(65535, U - n)) == U ? 1 : 0),
            (o = h.F._copyExact(e, n, y, t, o + 8)),
            (n += y);
        return o >>> 3;
      }
      var I = A.lits,
        b = A.strt,
        O = A.prev,
        k = 0,
        E = 0,
        L = 0,
        g = 0,
        S = 0,
        c = 0;
      for (U > 2 && (b[(c = h.F._hash(e, 0))] = 0), n = 0; n < U; n++) {
        if (((S = c), n + 1 < U - 2)) {
          c = h.F._hash(e, n + 1);
          var s = (n + 1) & 32767;
          (O[s] = b[c]), (b[c] = s);
        }
        if (d <= n) {
          (k > 14e3 || E > 26697) &&
            U - n > 100 &&
            (d < n && ((I[k] = n - d), (k += 2), (d = n)),
            (o = h.F._writeBlock(
              n == U - 1 || d == U ? 1 : 0,
              I,
              k,
              g,
              e,
              L,
              n - L,
              t,
              o
            )),
            (k = E = g = 0),
            (L = n));
          var m = 0;
          n < U - 2 &&
            (m = h.F._bestMatch(e, n, O, S, Math.min(p[2], U - n), p[3]));
          var y = m >>> 16,
            w = 65535 & m;
          if (m != 0) {
            w = 65535 & m;
            var _ = r((y = m >>> 16), A.of0);
            A.lhst[257 + _]++;
            var v = r(w, A.df0);
            A.dhst[v]++,
              (g += A.exb[_] + A.dxb[v]),
              (I[k] = (y << 23) | (n - d)),
              (I[k + 1] = (w << 16) | (_ << 8) | v),
              (k += 2),
              (d = n + y);
          } else A.lhst[e[n]]++;
          E++;
        }
      }
      for (
        (L == n && e.length != 0) ||
        (d < n && ((I[k] = n - d), (k += 2), (d = n)),
        (o = h.F._writeBlock(1, I, k, g, e, L, n - L, t, o)),
        (k = 0),
        (E = 0),
        (k = E = g = 0),
        (L = n));
        7 & o;

      )
        o++;
      return o >>> 3;
    }),
    (h.F._bestMatch = function (e, t, l, f, p, A) {
      var r = 32767 & t,
        i = l[r],
        n = (r - i + 32768) & 32767;
      if (i == r || f != h.F._hash(e, t - n)) return 0;
      for (
        var o = 0, d = 0, U = Math.min(32767, t);
        n <= U && --A != 0 && i != r;

      ) {
        if (o == 0 || e[t + o] == e[t + o - n]) {
          var I = h.F._howLong(e, t, n);
          if (I > o) {
            if (((d = n), (o = I) >= p)) break;
            n + 2 < I && (I = n + 2);
            for (var b = 0, O = 0; O < I - 2; O++) {
              var k = (t - n + O + 32768) & 32767,
                E = (k - l[k] + 32768) & 32767;
              E > b && ((b = E), (i = k));
            }
          }
        }
        n += ((r = i) - (i = l[r]) + 32768) & 32767;
      }
      return (o << 16) | d;
    }),
    (h.F._howLong = function (e, t, l) {
      if (
        e[t] != e[t - l] ||
        e[t + 1] != e[t + 1 - l] ||
        e[t + 2] != e[t + 2 - l]
      )
        return 0;
      var f = t,
        p = Math.min(e.length, t + 258);
      for (t += 3; t < p && e[t] == e[t - l]; ) t++;
      return t - f;
    }),
    (h.F._hash = function (e, t) {
      return (((e[t] << 8) | e[t + 1]) + (e[t + 2] << 4)) & 65535;
    }),
    (h.saved = 0),
    (h.F._writeBlock = function (e, t, l, f, p, A, r, i, n) {
      var o,
        d,
        U,
        I,
        b,
        O,
        k,
        E,
        L,
        g = h.F.U,
        S = h.F._putsF,
        c = h.F._putsE;
      g.lhst[256]++,
        (d = (o = h.F.getTrees())[0]),
        (U = o[1]),
        (I = o[2]),
        (b = o[3]),
        (O = o[4]),
        (k = o[5]),
        (E = o[6]),
        (L = o[7]);
      var s = 32 + ((n + 3) & 7 ? 8 - ((n + 3) & 7) : 0) + (r << 3),
        m = f + h.F.contSize(g.fltree, g.lhst) + h.F.contSize(g.fdtree, g.dhst),
        y = f + h.F.contSize(g.ltree, g.lhst) + h.F.contSize(g.dtree, g.dhst);
      y +=
        14 +
        3 * k +
        h.F.contSize(g.itree, g.ihst) +
        (2 * g.ihst[16] + 3 * g.ihst[17] + 7 * g.ihst[18]);
      for (var w = 0; w < 286; w++) g.lhst[w] = 0;
      for (w = 0; w < 30; w++) g.dhst[w] = 0;
      for (w = 0; w < 19; w++) g.ihst[w] = 0;
      var _ = s < m && s < y ? 0 : m < y ? 1 : 2;
      if ((S(i, n, e), S(i, n + 1, _), (n += 3), _ == 0)) {
        for (; 7 & n; ) n++;
        n = h.F._copyExact(p, A, r, i, n);
      } else {
        var v, F;
        if ((_ == 1 && ((v = g.fltree), (F = g.fdtree)), _ == 2)) {
          h.F.makeCodes(g.ltree, d),
            h.F.revCodes(g.ltree, d),
            h.F.makeCodes(g.dtree, U),
            h.F.revCodes(g.dtree, U),
            h.F.makeCodes(g.itree, I),
            h.F.revCodes(g.itree, I),
            (v = g.ltree),
            (F = g.dtree),
            c(i, n, b - 257),
            c(i, (n += 5), O - 1),
            c(i, (n += 5), k - 4),
            (n += 4);
          for (var u = 0; u < k; u++)
            c(i, n + 3 * u, g.itree[1 + (g.ordr[u] << 1)]);
          (n += 3 * k),
            (n = h.F._codeTiny(E, g.itree, i, n)),
            (n = h.F._codeTiny(L, g.itree, i, n));
        }
        for (var a = A, T = 0; T < l; T += 2) {
          for (var C = t[T], P = C >>> 23, N = a + (8388607 & C); a < N; )
            n = h.F._writeLit(p[a++], v, i, n);
          if (P != 0) {
            var B = t[T + 1],
              z = B >> 16,
              D = (B >> 8) & 255,
              M = 255 & B;
            c(i, (n = h.F._writeLit(257 + D, v, i, n)), P - g.of0[D]),
              (n += g.exb[D]),
              S(i, (n = h.F._writeLit(M, F, i, n)), z - g.df0[M]),
              (n += g.dxb[M]),
              (a += P);
          }
        }
        n = h.F._writeLit(256, v, i, n);
      }
      return n;
    }),
    (h.F._copyExact = function (e, t, l, f, p) {
      var A = p >>> 3;
      return (
        (f[A] = l),
        (f[A + 1] = l >>> 8),
        (f[A + 2] = 255 - f[A]),
        (f[A + 3] = 255 - f[A + 1]),
        (A += 4),
        f.set(new Uint8Array(e.buffer, t, l), A),
        p + ((l + 4) << 3)
      );
    }),
    (h.F.getTrees = function () {
      for (
        var e = h.F.U,
          t = h.F._hufTree(e.lhst, e.ltree, 15),
          l = h.F._hufTree(e.dhst, e.dtree, 15),
          f = [],
          p = h.F._lenCodes(e.ltree, f),
          A = [],
          r = h.F._lenCodes(e.dtree, A),
          i = 0;
        i < f.length;
        i += 2
      )
        e.ihst[f[i]]++;
      for (i = 0; i < A.length; i += 2) e.ihst[A[i]]++;
      for (
        var n = h.F._hufTree(e.ihst, e.itree, 7), o = 19;
        o > 4 && e.itree[1 + (e.ordr[o - 1] << 1)] == 0;

      )
        o--;
      return [t, l, n, p, r, o, f, A];
    }),
    (h.F.getSecond = function (e) {
      for (var t = [], l = 0; l < e.length; l += 2) t.push(e[l + 1]);
      return t;
    }),
    (h.F.nonZero = function (e) {
      for (var t = "", l = 0; l < e.length; l += 2)
        e[l + 1] != 0 && (t += (l >> 1) + ",");
      return t;
    }),
    (h.F.contSize = function (e, t) {
      for (var l = 0, f = 0; f < t.length; f++) l += t[f] * e[1 + (f << 1)];
      return l;
    }),
    (h.F._codeTiny = function (e, t, l, f) {
      for (var p = 0; p < e.length; p += 2) {
        var A = e[p],
          r = e[p + 1];
        f = h.F._writeLit(A, t, l, f);
        var i = A == 16 ? 2 : A == 17 ? 3 : 7;
        A > 15 && (h.F._putsE(l, f, r, i), (f += i));
      }
      return f;
    }),
    (h.F._lenCodes = function (e, t) {
      for (var l = e.length; l != 2 && e[l - 1] == 0; ) l -= 2;
      for (var f = 0; f < l; f += 2) {
        var p = e[f + 1],
          A = f + 3 < l ? e[f + 3] : -1,
          r = f + 5 < l ? e[f + 5] : -1,
          i = f == 0 ? -1 : e[f - 1];
        if (p == 0 && A == p && r == p) {
          for (var n = f + 5; n + 2 < l && e[n + 2] == p; ) n += 2;
          (o = Math.min((n + 1 - f) >>> 1, 138)) < 11
            ? t.push(17, o - 3)
            : t.push(18, o - 11),
            (f += 2 * o - 2);
        } else if (p == i && A == p && r == p) {
          for (n = f + 5; n + 2 < l && e[n + 2] == p; ) n += 2;
          var o = Math.min((n + 1 - f) >>> 1, 6);
          t.push(16, o - 3), (f += 2 * o - 2);
        } else t.push(p, 0);
      }
      return l >>> 1;
    }),
    (h.F._hufTree = function (e, t, l) {
      var f = [],
        p = e.length,
        A = t.length,
        r = 0;
      for (r = 0; r < A; r += 2) (t[r] = 0), (t[r + 1] = 0);
      for (r = 0; r < p; r++) e[r] != 0 && f.push({ lit: r, f: e[r] });
      var i = f.length,
        n = f.slice(0);
      if (i == 0) return 0;
      if (i == 1) {
        var o = f[0].lit;
        return (
          (n = o == 0 ? 1 : 0), (t[1 + (o << 1)] = 1), (t[1 + (n << 1)] = 1), 1
        );
      }
      f.sort(function (E, L) {
        return E.f - L.f;
      });
      var d = f[0],
        U = f[1],
        I = 0,
        b = 1,
        O = 2;
      for (f[0] = { lit: -1, f: d.f + U.f, l: d, r: U, d: 0 }; b != i - 1; )
        (d = I != b && (O == i || f[I].f < f[O].f) ? f[I++] : f[O++]),
          (U = I != b && (O == i || f[I].f < f[O].f) ? f[I++] : f[O++]),
          (f[b++] = { lit: -1, f: d.f + U.f, l: d, r: U });
      var k = h.F.setDepth(f[b - 1], 0);
      for (k > l && (h.F.restrictDepth(n, l, k), (k = l)), r = 0; r < i; r++)
        t[1 + (n[r].lit << 1)] = n[r].d;
      return k;
    }),
    (h.F.setDepth = function (e, t) {
      return e.lit != -1
        ? ((e.d = t), t)
        : Math.max(h.F.setDepth(e.l, t + 1), h.F.setDepth(e.r, t + 1));
    }),
    (h.F.restrictDepth = function (e, t, l) {
      var f = 0,
        p = 1 << (l - t),
        A = 0;
      for (
        e.sort(function (i, n) {
          return n.d == i.d ? i.f - n.f : n.d - i.d;
        }),
          f = 0;
        f < e.length && e[f].d > t;
        f++
      ) {
        var r = e[f].d;
        (e[f].d = t), (A += p - (1 << (l - r)));
      }
      for (A >>>= l - t; A > 0; )
        (r = e[f].d) < t ? (e[f].d++, (A -= 1 << (t - r - 1))) : f++;
      for (; f >= 0; f--) e[f].d == t && A < 0 && (e[f].d--, A++);
      A != 0 && console.log("debt left");
    }),
    (h.F._goodIndex = function (e, t) {
      var l = 0;
      return (
        t[16 | l] <= e && (l |= 16),
        t[8 | l] <= e && (l |= 8),
        t[4 | l] <= e && (l |= 4),
        t[2 | l] <= e && (l |= 2),
        t[1 | l] <= e && (l |= 1),
        l
      );
    }),
    (h.F._writeLit = function (e, t, l, f) {
      return h.F._putsF(l, f, t[e << 1]), f + t[1 + (e << 1)];
    }),
    (h.F.inflate = function (e, t) {
      var l = Uint8Array;
      if (e[0] == 3 && e[1] == 0) return t || new l(0);
      var f = h.F,
        p = f._bitsF,
        A = f._bitsE,
        r = f._decodeTiny,
        i = f.makeCodes,
        n = f.codes2map,
        o = f._get17,
        d = f.U,
        U = t == null;
      U && (t = new l((e.length >>> 2) << 3));
      for (
        var I, b, O = 0, k = 0, E = 0, L = 0, g = 0, S = 0, c = 0, s = 0, m = 0;
        O == 0;

      )
        if (((O = p(e, m, 1)), (k = p(e, m + 1, 2)), (m += 3), k != 0)) {
          if (
            (U && (t = h.F._check(t, s + (1 << 17))),
            k == 1 && ((I = d.flmap), (b = d.fdmap), (S = 511), (c = 31)),
            k == 2)
          ) {
            (E = A(e, m, 5) + 257),
              (L = A(e, m + 5, 5) + 1),
              (g = A(e, m + 10, 4) + 4),
              (m += 14);
            for (var y = 0; y < 38; y += 2)
              (d.itree[y] = 0), (d.itree[y + 1] = 0);
            var w = 1;
            for (y = 0; y < g; y++) {
              var _ = A(e, m + 3 * y, 3);
              (d.itree[1 + (d.ordr[y] << 1)] = _), _ > w && (w = _);
            }
            (m += 3 * g),
              i(d.itree, w),
              n(d.itree, w, d.imap),
              (I = d.lmap),
              (b = d.dmap),
              (m = r(d.imap, (1 << w) - 1, E + L, e, m, d.ttree));
            var v = f._copyOut(d.ttree, 0, E, d.ltree);
            S = (1 << v) - 1;
            var F = f._copyOut(d.ttree, E, L, d.dtree);
            (c = (1 << F) - 1),
              i(d.ltree, v),
              n(d.ltree, v, I),
              i(d.dtree, F),
              n(d.dtree, F, b);
          }
          for (;;) {
            var u = I[o(e, m) & S];
            m += 15 & u;
            var a = u >>> 4;
            if (!(a >>> 8)) t[s++] = a;
            else {
              if (a == 256) break;
              var T = s + a - 254;
              if (a > 264) {
                var C = d.ldef[a - 257];
                (T = s + (C >>> 3) + A(e, m, 7 & C)), (m += 7 & C);
              }
              var P = b[o(e, m) & c];
              m += 15 & P;
              var N = P >>> 4,
                B = d.ddef[N],
                z = (B >>> 4) + p(e, m, 15 & B);
              for (
                m += 15 & B, U && (t = h.F._check(t, s + (1 << 17)));
                s < T;

              )
                (t[s] = t[s++ - z]),
                  (t[s] = t[s++ - z]),
                  (t[s] = t[s++ - z]),
                  (t[s] = t[s++ - z]);
              s = T;
            }
          }
        } else {
          7 & m && (m += 8 - (7 & m));
          var D = 4 + (m >>> 3),
            M = e[D - 4] | (e[D - 3] << 8);
          U && (t = h.F._check(t, s + M)),
            t.set(new l(e.buffer, e.byteOffset + D, M), s),
            (m = (D + M) << 3),
            (s += M);
        }
      return t.length == s ? t : t.slice(0, s);
    }),
    (h.F._check = function (e, t) {
      var l = e.length;
      if (t <= l) return e;
      var f = new Uint8Array(Math.max(l << 1, t));
      return f.set(e, 0), f;
    }),
    (h.F._decodeTiny = function (e, t, l, f, p, A) {
      for (var r = h.F._bitsE, i = h.F._get17, n = 0; n < l; ) {
        var o = e[i(f, p) & t];
        p += 15 & o;
        var d = o >>> 4;
        if (d <= 15) (A[n] = d), n++;
        else {
          var U = 0,
            I = 0;
          d == 16
            ? ((I = 3 + r(f, p, 2)), (p += 2), (U = A[n - 1]))
            : d == 17
            ? ((I = 3 + r(f, p, 3)), (p += 3))
            : d == 18 && ((I = 11 + r(f, p, 7)), (p += 7));
          for (var b = n + I; n < b; ) (A[n] = U), n++;
        }
      }
      return p;
    }),
    (h.F._copyOut = function (e, t, l, f) {
      for (var p = 0, A = 0, r = f.length >>> 1; A < l; ) {
        var i = e[A + t];
        (f[A << 1] = 0), (f[1 + (A << 1)] = i), i > p && (p = i), A++;
      }
      for (; A < r; ) (f[A << 1] = 0), (f[1 + (A << 1)] = 0), A++;
      return p;
    }),
    (h.F.makeCodes = function (e, t) {
      for (
        var l, f, p, A, r = h.F.U, i = e.length, n = r.bl_count, o = 0;
        o <= t;
        o++
      )
        n[o] = 0;
      for (o = 1; o < i; o += 2) n[e[o]]++;
      var d = r.next_code;
      for (l = 0, n[0] = 0, f = 1; f <= t; f++)
        (l = (l + n[f - 1]) << 1), (d[f] = l);
      for (p = 0; p < i; p += 2) (A = e[p + 1]) != 0 && ((e[p] = d[A]), d[A]++);
    }),
    (h.F.codes2map = function (e, t, l) {
      for (var f = e.length, p = h.F.U.rev15, A = 0; A < f; A += 2)
        if (e[A + 1] != 0)
          for (
            var r = A >> 1,
              i = e[A + 1],
              n = (r << 4) | i,
              o = t - i,
              d = e[A] << o,
              U = d + (1 << o);
            d != U;

          )
            (l[p[d] >>> (15 - t)] = n), d++;
    }),
    (h.F.revCodes = function (e, t) {
      for (var l = h.F.U.rev15, f = 15 - t, p = 0; p < e.length; p += 2) {
        var A = e[p] << (t - e[p + 1]);
        e[p] = l[A] >>> f;
      }
    }),
    (h.F._putsE = function (e, t, l) {
      l <<= 7 & t;
      var f = t >>> 3;
      (e[f] |= l), (e[f + 1] |= l >>> 8);
    }),
    (h.F._putsF = function (e, t, l) {
      l <<= 7 & t;
      var f = t >>> 3;
      (e[f] |= l), (e[f + 1] |= l >>> 8), (e[f + 2] |= l >>> 16);
    }),
    (h.F._bitsE = function (e, t, l) {
      return (
        ((e[t >>> 3] | (e[1 + (t >>> 3)] << 8)) >>> (7 & t)) & ((1 << l) - 1)
      );
    }),
    (h.F._bitsF = function (e, t, l) {
      return (
        ((e[t >>> 3] | (e[1 + (t >>> 3)] << 8) | (e[2 + (t >>> 3)] << 16)) >>>
          (7 & t)) &
        ((1 << l) - 1)
      );
    }),
    (h.F._get17 = function (e, t) {
      return (
        (e[t >>> 3] | (e[1 + (t >>> 3)] << 8) | (e[2 + (t >>> 3)] << 16)) >>>
        (7 & t)
      );
    }),
    (h.F._get25 = function (e, t) {
      return (
        (e[t >>> 3] |
          (e[1 + (t >>> 3)] << 8) |
          (e[2 + (t >>> 3)] << 16) |
          (e[3 + (t >>> 3)] << 24)) >>>
        (7 & t)
      );
    }),
    (h.F.U =
      ((x = Uint16Array),
      (H = Uint32Array),
      {
        next_code: new x(16),
        bl_count: new x(16),
        ordr: [
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ],
        of0: [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999,
        ],
        exb: [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ],
        ldef: new x(32),
        df0: [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 65535, 65535,
        ],
        dxb: [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ],
        ddef: new H(32),
        flmap: new x(512),
        fltree: [],
        fdmap: new x(32),
        fdtree: [],
        lmap: new x(32768),
        ltree: [],
        ttree: [],
        dmap: new x(32768),
        dtree: [],
        imap: new x(512),
        itree: [],
        rev15: new x(32768),
        lhst: new H(286),
        dhst: new H(30),
        ihst: new H(19),
        lits: new H(15e3),
        strt: new x(65536),
        prev: new x(32768),
      })),
    (function () {
      for (var e = h.F.U, t = 0; t < 32768; t++) {
        var l = t;
        (l =
          ((4278255360 &
            (l =
              ((4042322160 &
                (l =
                  ((3435973836 &
                    (l =
                      ((2863311530 & l) >>> 1) | ((1431655765 & l) << 1))) >>>
                    2) |
                  ((858993459 & l) << 2))) >>>
                4) |
              ((252645135 & l) << 4))) >>>
            8) |
          ((16711935 & l) << 8)),
          (e.rev15[t] = ((l >>> 16) | (l << 16)) >>> 17);
      }
      function f(p, A, r) {
        for (; A-- != 0; ) p.push(0, r);
      }
      for (t = 0; t < 32; t++)
        (e.ldef[t] = (e.of0[t] << 3) | e.exb[t]),
          (e.ddef[t] = (e.df0[t] << 4) | e.dxb[t]);
      f(e.fltree, 144, 8),
        f(e.fltree, 112, 9),
        f(e.fltree, 24, 7),
        f(e.fltree, 8, 8),
        h.F.makeCodes(e.fltree, 9),
        h.F.codes2map(e.fltree, 9, e.flmap),
        h.F.revCodes(e.fltree, 9),
        f(e.fdtree, 32, 5),
        h.F.makeCodes(e.fdtree, 5),
        h.F.codes2map(e.fdtree, 5, e.fdmap),
        h.F.revCodes(e.fdtree, 5),
        f(e.itree, 19, 0),
        f(e.ltree, 286, 0),
        f(e.dtree, 30, 0),
        f(e.ttree, 320, 0);
    })();
})();
var Mt = Ft({ __proto__: null, default: Oe }, [Oe]);
const de = (function () {
  var R = {
    nextZero(r, i) {
      for (; r[i] != 0; ) i++;
      return i;
    },
    readUshort: (r, i) => (r[i] << 8) | r[i + 1],
    writeUshort(r, i, n) {
      (r[i] = (n >> 8) & 255), (r[i + 1] = 255 & n);
    },
    readUint: (r, i) =>
      16777216 * r[i] + ((r[i + 1] << 16) | (r[i + 2] << 8) | r[i + 3]),
    writeUint(r, i, n) {
      (r[i] = (n >> 24) & 255),
        (r[i + 1] = (n >> 16) & 255),
        (r[i + 2] = (n >> 8) & 255),
        (r[i + 3] = 255 & n);
    },
    readASCII(r, i, n) {
      let o = "";
      for (let d = 0; d < n; d++) o += String.fromCharCode(r[i + d]);
      return o;
    },
    writeASCII(r, i, n) {
      for (let o = 0; o < n.length; o++) r[i + o] = n.charCodeAt(o);
    },
    readBytes(r, i, n) {
      const o = [];
      for (let d = 0; d < n; d++) o.push(r[i + d]);
      return o;
    },
    pad: (r) => (r.length < 2 ? `0${r}` : r),
    readUTF8(r, i, n) {
      let o,
        d = "";
      for (let U = 0; U < n; U++) d += `%${R.pad(r[i + U].toString(16))}`;
      try {
        o = decodeURIComponent(d);
      } catch {
        return R.readASCII(r, i, n);
      }
      return o;
    },
  };
  function x(r, i, n, o) {
    const d = i * n,
      U = t(o),
      I = Math.ceil((i * U) / 8),
      b = new Uint8Array(4 * d),
      O = new Uint32Array(b.buffer),
      { ctype: k } = o,
      { depth: E } = o,
      L = R.readUshort;
    if (k == 6) {
      const C = d << 2;
      if (E == 8)
        for (var g = 0; g < C; g += 4)
          (b[g] = r[g]),
            (b[g + 1] = r[g + 1]),
            (b[g + 2] = r[g + 2]),
            (b[g + 3] = r[g + 3]);
      if (E == 16) for (g = 0; g < C; g++) b[g] = r[g << 1];
    } else if (k == 2) {
      const C = o.tabs.tRNS;
      if (C == null) {
        if (E == 8)
          for (g = 0; g < d; g++) {
            var S = 3 * g;
            O[g] = (255 << 24) | (r[S + 2] << 16) | (r[S + 1] << 8) | r[S];
          }
        if (E == 16)
          for (g = 0; g < d; g++)
            (S = 6 * g),
              (O[g] = (255 << 24) | (r[S + 4] << 16) | (r[S + 2] << 8) | r[S]);
      } else {
        var c = C[0];
        const P = C[1],
          N = C[2];
        if (E == 8)
          for (g = 0; g < d; g++) {
            var s = g << 2;
            (S = 3 * g),
              (O[g] = (255 << 24) | (r[S + 2] << 16) | (r[S + 1] << 8) | r[S]),
              r[S] == c && r[S + 1] == P && r[S + 2] == N && (b[s + 3] = 0);
          }
        if (E == 16)
          for (g = 0; g < d; g++)
            (s = g << 2),
              (S = 6 * g),
              (O[g] = (255 << 24) | (r[S + 4] << 16) | (r[S + 2] << 8) | r[S]),
              L(r, S) == c &&
                L(r, S + 2) == P &&
                L(r, S + 4) == N &&
                (b[s + 3] = 0);
      }
    } else if (k == 3) {
      const C = o.tabs.PLTE,
        P = o.tabs.tRNS,
        N = P ? P.length : 0;
      if (E == 1)
        for (var m = 0; m < n; m++) {
          var y = m * I,
            w = m * i;
          for (g = 0; g < i; g++) {
            s = (w + g) << 2;
            var _ = 3 * (v = (r[y + (g >> 3)] >> (7 - ((7 & g) << 0))) & 1);
            (b[s] = C[_]),
              (b[s + 1] = C[_ + 1]),
              (b[s + 2] = C[_ + 2]),
              (b[s + 3] = v < N ? P[v] : 255);
          }
        }
      if (E == 2)
        for (m = 0; m < n; m++)
          for (y = m * I, w = m * i, g = 0; g < i; g++)
            (s = (w + g) << 2),
              (_ = 3 * (v = (r[y + (g >> 2)] >> (6 - ((3 & g) << 1))) & 3)),
              (b[s] = C[_]),
              (b[s + 1] = C[_ + 1]),
              (b[s + 2] = C[_ + 2]),
              (b[s + 3] = v < N ? P[v] : 255);
      if (E == 4)
        for (m = 0; m < n; m++)
          for (y = m * I, w = m * i, g = 0; g < i; g++)
            (s = (w + g) << 2),
              (_ = 3 * (v = (r[y + (g >> 1)] >> (4 - ((1 & g) << 2))) & 15)),
              (b[s] = C[_]),
              (b[s + 1] = C[_ + 1]),
              (b[s + 2] = C[_ + 2]),
              (b[s + 3] = v < N ? P[v] : 255);
      if (E == 8)
        for (g = 0; g < d; g++) {
          var v;
          (s = g << 2),
            (_ = 3 * (v = r[g])),
            (b[s] = C[_]),
            (b[s + 1] = C[_ + 1]),
            (b[s + 2] = C[_ + 2]),
            (b[s + 3] = v < N ? P[v] : 255);
        }
    } else if (k == 4) {
      if (E == 8)
        for (g = 0; g < d; g++) {
          s = g << 2;
          var F = r[(u = g << 1)];
          (b[s] = F), (b[s + 1] = F), (b[s + 2] = F), (b[s + 3] = r[u + 1]);
        }
      if (E == 16)
        for (g = 0; g < d; g++) {
          var u;
          (s = g << 2),
            (F = r[(u = g << 2)]),
            (b[s] = F),
            (b[s + 1] = F),
            (b[s + 2] = F),
            (b[s + 3] = r[u + 2]);
        }
    } else if (k == 0)
      for (c = o.tabs.tRNS ? o.tabs.tRNS : -1, m = 0; m < n; m++) {
        const C = m * I,
          P = m * i;
        if (E == 1)
          for (var a = 0; a < i; a++) {
            var T =
              (F = 255 * ((r[C + (a >>> 3)] >>> (7 - (7 & a))) & 1)) == 255 * c
                ? 0
                : 255;
            O[P + a] = (T << 24) | (F << 16) | (F << 8) | F;
          }
        else if (E == 2)
          for (a = 0; a < i; a++)
            (T =
              (F = 85 * ((r[C + (a >>> 2)] >>> (6 - ((3 & a) << 1))) & 3)) ==
              85 * c
                ? 0
                : 255),
              (O[P + a] = (T << 24) | (F << 16) | (F << 8) | F);
        else if (E == 4)
          for (a = 0; a < i; a++)
            (T =
              (F = 17 * ((r[C + (a >>> 1)] >>> (4 - ((1 & a) << 2))) & 15)) ==
              17 * c
                ? 0
                : 255),
              (O[P + a] = (T << 24) | (F << 16) | (F << 8) | F);
        else if (E == 8)
          for (a = 0; a < i; a++)
            (T = (F = r[C + a]) == c ? 0 : 255),
              (O[P + a] = (T << 24) | (F << 16) | (F << 8) | F);
        else if (E == 16)
          for (a = 0; a < i; a++)
            (F = r[C + (a << 1)]),
              (T = L(r, C + (a << 1)) == c ? 0 : 255),
              (O[P + a] = (T << 24) | (F << 16) | (F << 8) | F);
      }
    return b;
  }
  function H(r, i, n, o) {
    const d = t(r),
      U = Math.ceil((n * d) / 8),
      I = new Uint8Array((U + 1 + r.interlace) * o);
    return (
      (i = r.tabs.CgBI ? e(i, I) : h(i, I)),
      r.interlace == 0
        ? (i = l(i, r, 0, n, o))
        : r.interlace == 1 &&
          (i = (function (O, k) {
            const E = k.width,
              L = k.height,
              g = t(k),
              S = g >> 3,
              c = Math.ceil((E * g) / 8),
              s = new Uint8Array(L * c);
            let m = 0;
            const y = [0, 0, 4, 0, 2, 0, 1],
              w = [0, 4, 0, 2, 0, 1, 0],
              _ = [8, 8, 8, 4, 4, 2, 2],
              v = [8, 8, 4, 4, 2, 2, 1];
            let F = 0;
            for (; F < 7; ) {
              const a = _[F],
                T = v[F];
              let C = 0,
                P = 0,
                N = y[F];
              for (; N < L; ) (N += a), P++;
              let B = w[F];
              for (; B < E; ) (B += T), C++;
              const z = Math.ceil((C * g) / 8);
              l(O, k, m, C, P);
              let D = 0,
                M = y[F];
              for (; M < L; ) {
                let Q = w[F],
                  V = (m + D * z) << 3;
                for (; Q < E; ) {
                  var u;
                  if (
                    (g == 1 &&
                      ((u = ((u = O[V >> 3]) >> (7 - (7 & V))) & 1),
                      (s[M * c + (Q >> 3)] |= u << (7 - ((7 & Q) << 0)))),
                    g == 2 &&
                      ((u = ((u = O[V >> 3]) >> (6 - (7 & V))) & 3),
                      (s[M * c + (Q >> 2)] |= u << (6 - ((3 & Q) << 1)))),
                    g == 4 &&
                      ((u = ((u = O[V >> 3]) >> (4 - (7 & V))) & 15),
                      (s[M * c + (Q >> 1)] |= u << (4 - ((1 & Q) << 2)))),
                    g >= 8)
                  ) {
                    const j = M * c + Q * S;
                    for (let W = 0; W < S; W++) s[j + W] = O[(V >> 3) + W];
                  }
                  (V += g), (Q += T);
                }
                D++, (M += a);
              }
              C * P != 0 && (m += P * (1 + z)), (F += 1);
            }
            return s;
          })(i, r)),
      i
    );
  }
  function h(r, i) {
    return e(new Uint8Array(r.buffer, 2, r.length - 6), i);
  }
  var e = (function () {
    const r = { H: {} };
    return (
      (r.H.N = function (i, n) {
        const o = Uint8Array;
        let d,
          U,
          I = 0,
          b = 0,
          O = 0,
          k = 0,
          E = 0,
          L = 0,
          g = 0,
          S = 0,
          c = 0;
        if (i[0] == 3 && i[1] == 0) return n || new o(0);
        const s = r.H,
          m = s.b,
          y = s.e,
          w = s.R,
          _ = s.n,
          v = s.A,
          F = s.Z,
          u = s.m,
          a = n == null;
        for (a && (n = new o((i.length >>> 2) << 5)); I == 0; )
          if (((I = m(i, c, 1)), (b = m(i, c + 1, 2)), (c += 3), b != 0)) {
            if (
              (a && (n = r.H.W(n, S + (1 << 17))),
              b == 1 && ((d = u.J), (U = u.h), (L = 511), (g = 31)),
              b == 2)
            ) {
              (O = y(i, c, 5) + 257),
                (k = y(i, c + 5, 5) + 1),
                (E = y(i, c + 10, 4) + 4),
                (c += 14);
              let C = 1;
              for (var T = 0; T < 38; T += 2) (u.Q[T] = 0), (u.Q[T + 1] = 0);
              for (T = 0; T < E; T++) {
                const B = y(i, c + 3 * T, 3);
                (u.Q[1 + (u.X[T] << 1)] = B), B > C && (C = B);
              }
              (c += 3 * E),
                _(u.Q, C),
                v(u.Q, C, u.u),
                (d = u.w),
                (U = u.d),
                (c = w(u.u, (1 << C) - 1, O + k, i, c, u.v));
              const P = s.V(u.v, 0, O, u.C);
              L = (1 << P) - 1;
              const N = s.V(u.v, O, k, u.D);
              (g = (1 << N) - 1),
                _(u.C, P),
                v(u.C, P, d),
                _(u.D, N),
                v(u.D, N, U);
            }
            for (;;) {
              const C = d[F(i, c) & L];
              c += 15 & C;
              const P = C >>> 4;
              if (!(P >>> 8)) n[S++] = P;
              else {
                if (P == 256) break;
                {
                  let N = S + P - 254;
                  if (P > 264) {
                    const Q = u.q[P - 257];
                    (N = S + (Q >>> 3) + y(i, c, 7 & Q)), (c += 7 & Q);
                  }
                  const B = U[F(i, c) & g];
                  c += 15 & B;
                  const z = B >>> 4,
                    D = u.c[z],
                    M = (D >>> 4) + m(i, c, 15 & D);
                  for (c += 15 & D; S < N; )
                    (n[S] = n[S++ - M]),
                      (n[S] = n[S++ - M]),
                      (n[S] = n[S++ - M]),
                      (n[S] = n[S++ - M]);
                  S = N;
                }
              }
            }
          } else {
            7 & c && (c += 8 - (7 & c));
            const C = 4 + (c >>> 3),
              P = i[C - 4] | (i[C - 3] << 8);
            a && (n = r.H.W(n, S + P)),
              n.set(new o(i.buffer, i.byteOffset + C, P), S),
              (c = (C + P) << 3),
              (S += P);
          }
        return n.length == S ? n : n.slice(0, S);
      }),
      (r.H.W = function (i, n) {
        const o = i.length;
        if (n <= o) return i;
        const d = new Uint8Array(o << 1);
        return d.set(i, 0), d;
      }),
      (r.H.R = function (i, n, o, d, U, I) {
        const b = r.H.e,
          O = r.H.Z;
        let k = 0;
        for (; k < o; ) {
          const E = i[O(d, U) & n];
          U += 15 & E;
          const L = E >>> 4;
          if (L <= 15) (I[k] = L), k++;
          else {
            let g = 0,
              S = 0;
            L == 16
              ? ((S = 3 + b(d, U, 2)), (U += 2), (g = I[k - 1]))
              : L == 17
              ? ((S = 3 + b(d, U, 3)), (U += 3))
              : L == 18 && ((S = 11 + b(d, U, 7)), (U += 7));
            const c = k + S;
            for (; k < c; ) (I[k] = g), k++;
          }
        }
        return U;
      }),
      (r.H.V = function (i, n, o, d) {
        let U = 0,
          I = 0;
        const b = d.length >>> 1;
        for (; I < o; ) {
          const O = i[I + n];
          (d[I << 1] = 0), (d[1 + (I << 1)] = O), O > U && (U = O), I++;
        }
        for (; I < b; ) (d[I << 1] = 0), (d[1 + (I << 1)] = 0), I++;
        return U;
      }),
      (r.H.n = function (i, n) {
        const o = r.H.m,
          d = i.length;
        let U, I, b, O;
        const k = o.j;
        for (var E = 0; E <= n; E++) k[E] = 0;
        for (E = 1; E < d; E += 2) k[i[E]]++;
        const L = o.K;
        for (U = 0, k[0] = 0, I = 1; I <= n; I++)
          (U = (U + k[I - 1]) << 1), (L[I] = U);
        for (b = 0; b < d; b += 2)
          (O = i[b + 1]), O != 0 && ((i[b] = L[O]), L[O]++);
      }),
      (r.H.A = function (i, n, o) {
        const d = i.length,
          U = r.H.m.r;
        for (let I = 0; I < d; I += 2)
          if (i[I + 1] != 0) {
            const b = I >> 1,
              O = i[I + 1],
              k = (b << 4) | O,
              E = n - O;
            let L = i[I] << E;
            const g = L + (1 << E);
            for (; L != g; ) (o[U[L] >>> (15 - n)] = k), L++;
          }
      }),
      (r.H.l = function (i, n) {
        const o = r.H.m.r,
          d = 15 - n;
        for (let U = 0; U < i.length; U += 2) {
          const I = i[U] << (n - i[U + 1]);
          i[U] = o[I] >>> d;
        }
      }),
      (r.H.M = function (i, n, o) {
        o <<= 7 & n;
        const d = n >>> 3;
        (i[d] |= o), (i[d + 1] |= o >>> 8);
      }),
      (r.H.I = function (i, n, o) {
        o <<= 7 & n;
        const d = n >>> 3;
        (i[d] |= o), (i[d + 1] |= o >>> 8), (i[d + 2] |= o >>> 16);
      }),
      (r.H.e = function (i, n, o) {
        return (
          ((i[n >>> 3] | (i[1 + (n >>> 3)] << 8)) >>> (7 & n)) & ((1 << o) - 1)
        );
      }),
      (r.H.b = function (i, n, o) {
        return (
          ((i[n >>> 3] | (i[1 + (n >>> 3)] << 8) | (i[2 + (n >>> 3)] << 16)) >>>
            (7 & n)) &
          ((1 << o) - 1)
        );
      }),
      (r.H.Z = function (i, n) {
        return (
          (i[n >>> 3] | (i[1 + (n >>> 3)] << 8) | (i[2 + (n >>> 3)] << 16)) >>>
          (7 & n)
        );
      }),
      (r.H.i = function (i, n) {
        return (
          (i[n >>> 3] |
            (i[1 + (n >>> 3)] << 8) |
            (i[2 + (n >>> 3)] << 16) |
            (i[3 + (n >>> 3)] << 24)) >>>
          (7 & n)
        );
      }),
      (r.H.m = (function () {
        const i = Uint16Array,
          n = Uint32Array;
        return {
          K: new i(16),
          j: new i(16),
          X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
          S: [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
            59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999,
          ],
          T: [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
            4, 5, 5, 5, 5, 0, 0, 0, 0,
          ],
          q: new i(32),
          p: [
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
            513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
            24577, 65535, 65535,
          ],
          z: [
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
            10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
          ],
          c: new n(32),
          J: new i(512),
          _: [],
          h: new i(32),
          $: [],
          w: new i(32768),
          C: [],
          v: [],
          d: new i(32768),
          D: [],
          u: new i(512),
          Q: [],
          r: new i(32768),
          s: new n(286),
          Y: new n(30),
          a: new n(19),
          t: new n(15e3),
          k: new i(65536),
          g: new i(32768),
        };
      })()),
      (function () {
        const i = r.H.m;
        for (var n = 0; n < 32768; n++) {
          let d = n;
          (d = ((2863311530 & d) >>> 1) | ((1431655765 & d) << 1)),
            (d = ((3435973836 & d) >>> 2) | ((858993459 & d) << 2)),
            (d = ((4042322160 & d) >>> 4) | ((252645135 & d) << 4)),
            (d = ((4278255360 & d) >>> 8) | ((16711935 & d) << 8)),
            (i.r[n] = ((d >>> 16) | (d << 16)) >>> 17);
        }
        function o(d, U, I) {
          for (; U-- != 0; ) d.push(0, I);
        }
        for (n = 0; n < 32; n++)
          (i.q[n] = (i.S[n] << 3) | i.T[n]), (i.c[n] = (i.p[n] << 4) | i.z[n]);
        o(i._, 144, 8),
          o(i._, 112, 9),
          o(i._, 24, 7),
          o(i._, 8, 8),
          r.H.n(i._, 9),
          r.H.A(i._, 9, i.J),
          r.H.l(i._, 9),
          o(i.$, 32, 5),
          r.H.n(i.$, 5),
          r.H.A(i.$, 5, i.h),
          r.H.l(i.$, 5),
          o(i.Q, 19, 0),
          o(i.C, 286, 0),
          o(i.D, 30, 0),
          o(i.v, 320, 0);
      })(),
      r.H.N
    );
  })();
  function t(r) {
    return [1, null, 3, 1, 2, null, 4][r.ctype] * r.depth;
  }
  function l(r, i, n, o, d) {
    let U = t(i);
    const I = Math.ceil((o * U) / 8);
    let b, O;
    U = Math.ceil(U / 8);
    let k = r[n],
      E = 0;
    if ((k > 1 && (r[n] = [0, 0, 1][k - 2]), k == 3))
      for (E = U; E < I; E++)
        r[E + 1] = (r[E + 1] + (r[E + 1 - U] >>> 1)) & 255;
    for (let L = 0; L < d; L++)
      if (((b = n + L * I), (O = b + L + 1), (k = r[O - 1]), (E = 0), k == 0))
        for (; E < I; E++) r[b + E] = r[O + E];
      else if (k == 1) {
        for (; E < U; E++) r[b + E] = r[O + E];
        for (; E < I; E++) r[b + E] = r[O + E] + r[b + E - U];
      } else if (k == 2) for (; E < I; E++) r[b + E] = r[O + E] + r[b + E - I];
      else if (k == 3) {
        for (; E < U; E++) r[b + E] = r[O + E] + (r[b + E - I] >>> 1);
        for (; E < I; E++)
          r[b + E] = r[O + E] + ((r[b + E - I] + r[b + E - U]) >>> 1);
      } else {
        for (; E < U; E++) r[b + E] = r[O + E] + f(0, r[b + E - I], 0);
        for (; E < I; E++)
          r[b + E] = r[O + E] + f(r[b + E - U], r[b + E - I], r[b + E - U - I]);
      }
    return r;
  }
  function f(r, i, n) {
    const o = r + i - n,
      d = o - r,
      U = o - i,
      I = o - n;
    return d * d <= U * U && d * d <= I * I ? r : U * U <= I * I ? i : n;
  }
  function p(r, i, n) {
    (n.width = R.readUint(r, i)),
      (i += 4),
      (n.height = R.readUint(r, i)),
      (i += 4),
      (n.depth = r[i]),
      i++,
      (n.ctype = r[i]),
      i++,
      (n.compress = r[i]),
      i++,
      (n.filter = r[i]),
      i++,
      (n.interlace = r[i]),
      i++;
  }
  function A(r, i, n, o, d, U, I, b, O) {
    const k = Math.min(i, d),
      E = Math.min(n, U);
    let L = 0,
      g = 0;
    for (let F = 0; F < E; F++)
      for (let u = 0; u < k; u++)
        if (
          (I >= 0 && b >= 0
            ? ((L = (F * i + u) << 2), (g = ((b + F) * d + I + u) << 2))
            : ((L = ((-b + F) * i - I + u) << 2), (g = (F * d + u) << 2)),
          O == 0)
        )
          (o[g] = r[L]),
            (o[g + 1] = r[L + 1]),
            (o[g + 2] = r[L + 2]),
            (o[g + 3] = r[L + 3]);
        else if (O == 1) {
          var S = r[L + 3] * 0.00392156862745098,
            c = r[L] * S,
            s = r[L + 1] * S,
            m = r[L + 2] * S,
            y = o[g + 3] * (1 / 255),
            w = o[g] * y,
            _ = o[g + 1] * y,
            v = o[g + 2] * y;
          const a = 1 - S,
            T = S + y * a,
            C = T == 0 ? 0 : 1 / T;
          (o[g + 3] = 255 * T),
            (o[g + 0] = (c + w * a) * C),
            (o[g + 1] = (s + _ * a) * C),
            (o[g + 2] = (m + v * a) * C);
        } else if (O == 2)
          (S = r[L + 3]),
            (c = r[L]),
            (s = r[L + 1]),
            (m = r[L + 2]),
            (y = o[g + 3]),
            (w = o[g]),
            (_ = o[g + 1]),
            (v = o[g + 2]),
            S == y && c == w && s == _ && m == v
              ? ((o[g] = 0), (o[g + 1] = 0), (o[g + 2] = 0), (o[g + 3] = 0))
              : ((o[g] = c), (o[g + 1] = s), (o[g + 2] = m), (o[g + 3] = S));
        else if (O == 3) {
          if (
            ((S = r[L + 3]),
            (c = r[L]),
            (s = r[L + 1]),
            (m = r[L + 2]),
            (y = o[g + 3]),
            (w = o[g]),
            (_ = o[g + 1]),
            (v = o[g + 2]),
            S == y && c == w && s == _ && m == v)
          )
            continue;
          if (S < 220 && y > 20) return !1;
        }
    return !0;
  }
  return {
    decode: function (i) {
      const n = new Uint8Array(i);
      let o = 8;
      const d = R,
        U = d.readUshort,
        I = d.readUint,
        b = { tabs: {}, frames: [] },
        O = new Uint8Array(n.length);
      let k,
        E = 0,
        L = 0;
      const g = [137, 80, 78, 71, 13, 10, 26, 10];
      for (var S = 0; S < 8; S++)
        if (n[S] != g[S]) throw "The input is not a PNG file!";
      for (; o < n.length; ) {
        const F = d.readUint(n, o);
        o += 4;
        const u = d.readASCII(n, o, 4);
        if (((o += 4), u == "IHDR")) p(n, o, b);
        else if (u == "iCCP") {
          for (var c = o; n[c] != 0; ) c++;
          d.readASCII(n, o, c - o), n[c + 1];
          const a = n.slice(c + 2, o + F);
          let T = null;
          try {
            T = h(a);
          } catch {
            T = e(a);
          }
          b.tabs[u] = T;
        } else if (u == "CgBI") b.tabs[u] = n.slice(o, o + 4);
        else if (u == "IDAT") {
          for (S = 0; S < F; S++) O[E + S] = n[o + S];
          E += F;
        } else if (u == "acTL")
          (b.tabs[u] = { num_frames: I(n, o), num_plays: I(n, o + 4) }),
            (k = new Uint8Array(n.length));
        else if (u == "fcTL") {
          L != 0 &&
            (((v = b.frames[b.frames.length - 1]).data = H(
              b,
              k.slice(0, L),
              v.rect.width,
              v.rect.height
            )),
            (L = 0));
          const a = {
            x: I(n, o + 12),
            y: I(n, o + 16),
            width: I(n, o + 4),
            height: I(n, o + 8),
          };
          let T = U(n, o + 22);
          T = U(n, o + 20) / (T == 0 ? 100 : T);
          const C = {
            rect: a,
            delay: Math.round(1e3 * T),
            dispose: n[o + 24],
            blend: n[o + 25],
          };
          b.frames.push(C);
        } else if (u == "fdAT") {
          for (S = 0; S < F - 4; S++) k[L + S] = n[o + S + 4];
          L += F - 4;
        } else if (u == "pHYs")
          b.tabs[u] = [d.readUint(n, o), d.readUint(n, o + 4), n[o + 8]];
        else if (u == "cHRM")
          for (b.tabs[u] = [], S = 0; S < 8; S++)
            b.tabs[u].push(d.readUint(n, o + 4 * S));
        else if (u == "tEXt" || u == "zTXt") {
          b.tabs[u] == null && (b.tabs[u] = {});
          var s = d.nextZero(n, o),
            m = d.readASCII(n, o, s - o),
            y = o + F - s - 1;
          if (u == "tEXt") _ = d.readASCII(n, s + 1, y);
          else {
            var w = h(n.slice(s + 2, s + 2 + y));
            _ = d.readUTF8(w, 0, w.length);
          }
          b.tabs[u][m] = _;
        } else if (u == "iTXt") {
          b.tabs[u] == null && (b.tabs[u] = {}),
            (s = 0),
            (c = o),
            (s = d.nextZero(n, c)),
            (m = d.readASCII(n, c, s - c));
          const a = n[(c = s + 1)];
          var _;
          n[c + 1],
            (c += 2),
            (s = d.nextZero(n, c)),
            d.readASCII(n, c, s - c),
            (c = s + 1),
            (s = d.nextZero(n, c)),
            d.readUTF8(n, c, s - c),
            (y = F - ((c = s + 1) - o)),
            a == 0
              ? (_ = d.readUTF8(n, c, y))
              : ((w = h(n.slice(c, c + y))), (_ = d.readUTF8(w, 0, w.length))),
            (b.tabs[u][m] = _);
        } else if (u == "PLTE") b.tabs[u] = d.readBytes(n, o, F);
        else if (u == "hIST") {
          const a = b.tabs.PLTE.length / 3;
          for (b.tabs[u] = [], S = 0; S < a; S++)
            b.tabs[u].push(U(n, o + 2 * S));
        } else if (u == "tRNS")
          b.ctype == 3
            ? (b.tabs[u] = d.readBytes(n, o, F))
            : b.ctype == 0
            ? (b.tabs[u] = U(n, o))
            : b.ctype == 2 && (b.tabs[u] = [U(n, o), U(n, o + 2), U(n, o + 4)]);
        else if (u == "gAMA") b.tabs[u] = d.readUint(n, o) / 1e5;
        else if (u == "sRGB") b.tabs[u] = n[o];
        else if (u == "bKGD")
          b.ctype == 0 || b.ctype == 4
            ? (b.tabs[u] = [U(n, o)])
            : b.ctype == 2 || b.ctype == 6
            ? (b.tabs[u] = [U(n, o), U(n, o + 2), U(n, o + 4)])
            : b.ctype == 3 && (b.tabs[u] = n[o]);
        else if (u == "IEND") break;
        (o += F), d.readUint(n, o), (o += 4);
      }
      var v;
      return (
        L != 0 &&
          ((v = b.frames[b.frames.length - 1]).data = H(
            b,
            k.slice(0, L),
            v.rect.width,
            v.rect.height
          )),
        (b.data = H(b, O, b.width, b.height)),
        delete b.compress,
        delete b.interlace,
        delete b.filter,
        b
      );
    },
    toRGBA8: function (i) {
      const n = i.width,
        o = i.height;
      if (i.tabs.acTL == null) return [x(i.data, n, o, i).buffer];
      const d = [];
      i.frames[0].data == null && (i.frames[0].data = i.data);
      const U = n * o * 4,
        I = new Uint8Array(U),
        b = new Uint8Array(U),
        O = new Uint8Array(U);
      for (let E = 0; E < i.frames.length; E++) {
        const L = i.frames[E],
          g = L.rect.x,
          S = L.rect.y,
          c = L.rect.width,
          s = L.rect.height,
          m = x(L.data, c, s, i);
        if (E != 0) for (var k = 0; k < U; k++) O[k] = I[k];
        if (
          (L.blend == 0
            ? A(m, c, s, I, n, o, g, S, 0)
            : L.blend == 1 && A(m, c, s, I, n, o, g, S, 1),
          d.push(I.buffer.slice(0)),
          L.dispose != 0)
        ) {
          if (L.dispose == 1) A(b, c, s, I, n, o, g, S, 0);
          else if (L.dispose == 2) for (k = 0; k < U; k++) I[k] = O[k];
        }
      }
      return d;
    },
    _paeth: f,
    _copyTile: A,
    _bin: R,
  };
})();
(function () {
  const { _copyTile: R } = de,
    { _bin: x } = de,
    H = de._paeth;
  var h = {
    table: (function () {
      const c = new Uint32Array(256);
      for (let s = 0; s < 256; s++) {
        let m = s;
        for (let y = 0; y < 8; y++)
          1 & m ? (m = 3988292384 ^ (m >>> 1)) : (m >>>= 1);
        c[s] = m;
      }
      return c;
    })(),
    update(c, s, m, y) {
      for (let w = 0; w < y; w++) c = h.table[255 & (c ^ s[m + w])] ^ (c >>> 8);
      return c;
    },
    crc: (c, s, m) => 4294967295 ^ h.update(4294967295, c, s, m),
  };
  function e(c, s, m, y) {
    (s[m] += (c[0] * y) >> 4),
      (s[m + 1] += (c[1] * y) >> 4),
      (s[m + 2] += (c[2] * y) >> 4),
      (s[m + 3] += (c[3] * y) >> 4);
  }
  function t(c) {
    return Math.max(0, Math.min(255, c));
  }
  function l(c, s) {
    const m = c[0] - s[0],
      y = c[1] - s[1],
      w = c[2] - s[2],
      _ = c[3] - s[3];
    return m * m + y * y + w * w + _ * _;
  }
  function f(c, s, m, y, w, _, v) {
    v == null && (v = 1);
    const F = y.length,
      u = [];
    for (var a = 0; a < F; a++) {
      const M = y[a];
      u.push([
        (M >>> 0) & 255,
        (M >>> 8) & 255,
        (M >>> 16) & 255,
        (M >>> 24) & 255,
      ]);
    }
    for (a = 0; a < F; a++) {
      let M = 4294967295;
      for (var T = 0, C = 0; C < F; C++) {
        var P = l(u[a], u[C]);
        C != a && P < M && ((M = P), (T = C));
      }
    }
    const N = new Uint32Array(w.buffer),
      B = new Int16Array(s * m * 4),
      z = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    for (a = 0; a < z.length; a++) z[a] = 255 * ((z[a] + 0.5) / 16 - 0.5);
    for (let M = 0; M < m; M++)
      for (let Q = 0; Q < s; Q++) {
        var D;
        (a = 4 * (M * s + Q)),
          v != 2
            ? (D = [
                t(c[a] + B[a]),
                t(c[a + 1] + B[a + 1]),
                t(c[a + 2] + B[a + 2]),
                t(c[a + 3] + B[a + 3]),
              ])
            : ((P = z[4 * (3 & M) + (3 & Q)]),
              (D = [
                t(c[a] + P),
                t(c[a + 1] + P),
                t(c[a + 2] + P),
                t(c[a + 3] + P),
              ])),
          (T = 0);
        let V = 16777215;
        for (C = 0; C < F; C++) {
          const $ = l(D, u[C]);
          $ < V && ((V = $), (T = C));
        }
        const j = u[T],
          W = [D[0] - j[0], D[1] - j[1], D[2] - j[2], D[3] - j[3]];
        v == 1 &&
          (Q != s - 1 && e(W, B, a + 4, 7),
          M != m - 1 &&
            (Q != 0 && e(W, B, a + 4 * s - 4, 3),
            e(W, B, a + 4 * s, 5),
            Q != s - 1 && e(W, B, a + 4 * s + 4, 1))),
          (_[a >> 2] = T),
          (N[a >> 2] = y[T]);
      }
  }
  function p(c, s, m, y, w) {
    w == null && (w = {});
    const { crc: _ } = h,
      v = x.writeUint,
      F = x.writeUshort,
      u = x.writeASCII;
    let a = 8;
    const T = c.frames.length > 1;
    let C,
      P = !1,
      N = 33 + (T ? 20 : 0);
    if (
      (w.sRGB != null && (N += 13),
      w.pHYs != null && (N += 21),
      w.iCCP != null && ((C = pako.deflate(w.iCCP)), (N += 21 + C.length + 4)),
      c.ctype == 3)
    ) {
      for (var B = c.plte.length, z = 0; z < B; z++)
        c.plte[z] >>> 24 != 255 && (P = !0);
      N += 8 + 3 * B + 4 + (P ? 8 + 1 * B + 4 : 0);
    }
    for (var D = 0; D < c.frames.length; D++)
      T && (N += 38),
        (N += (j = c.frames[D]).cimg.length + 12),
        D != 0 && (N += 4);
    N += 12;
    const M = new Uint8Array(N),
      Q = [137, 80, 78, 71, 13, 10, 26, 10];
    for (z = 0; z < 8; z++) M[z] = Q[z];
    if (
      (v(M, a, 13),
      (a += 4),
      u(M, a, "IHDR"),
      (a += 4),
      v(M, a, s),
      (a += 4),
      v(M, a, m),
      (a += 4),
      (M[a] = c.depth),
      a++,
      (M[a] = c.ctype),
      a++,
      (M[a] = 0),
      a++,
      (M[a] = 0),
      a++,
      (M[a] = 0),
      a++,
      v(M, a, _(M, a - 17, 17)),
      (a += 4),
      w.sRGB != null &&
        (v(M, a, 1),
        (a += 4),
        u(M, a, "sRGB"),
        (a += 4),
        (M[a] = w.sRGB),
        a++,
        v(M, a, _(M, a - 5, 5)),
        (a += 4)),
      w.iCCP != null)
    ) {
      const W = 13 + C.length;
      v(M, a, W),
        (a += 4),
        u(M, a, "iCCP"),
        (a += 4),
        u(M, a, "ICC profile"),
        (a += 11),
        (a += 2),
        M.set(C, a),
        (a += C.length),
        v(M, a, _(M, a - (W + 4), W + 4)),
        (a += 4);
    }
    if (
      (w.pHYs != null &&
        (v(M, a, 9),
        (a += 4),
        u(M, a, "pHYs"),
        (a += 4),
        v(M, a, w.pHYs[0]),
        (a += 4),
        v(M, a, w.pHYs[1]),
        (a += 4),
        (M[a] = w.pHYs[2]),
        a++,
        v(M, a, _(M, a - 13, 13)),
        (a += 4)),
      T &&
        (v(M, a, 8),
        (a += 4),
        u(M, a, "acTL"),
        (a += 4),
        v(M, a, c.frames.length),
        (a += 4),
        v(M, a, w.loop != null ? w.loop : 0),
        (a += 4),
        v(M, a, _(M, a - 12, 12)),
        (a += 4)),
      c.ctype == 3)
    ) {
      for (
        v(M, a, 3 * (B = c.plte.length)),
          a += 4,
          u(M, a, "PLTE"),
          a += 4,
          z = 0;
        z < B;
        z++
      ) {
        const W = 3 * z,
          $ = c.plte[z],
          X = 255 & $,
          ee = ($ >>> 8) & 255,
          ye = ($ >>> 16) & 255;
        (M[a + W + 0] = X), (M[a + W + 1] = ee), (M[a + W + 2] = ye);
      }
      if (
        ((a += 3 * B), v(M, a, _(M, a - 3 * B - 4, 3 * B + 4)), (a += 4), P)
      ) {
        for (v(M, a, B), a += 4, u(M, a, "tRNS"), a += 4, z = 0; z < B; z++)
          M[a + z] = (c.plte[z] >>> 24) & 255;
        (a += B), v(M, a, _(M, a - B - 4, B + 4)), (a += 4);
      }
    }
    let V = 0;
    for (D = 0; D < c.frames.length; D++) {
      var j = c.frames[D];
      T &&
        (v(M, a, 26),
        (a += 4),
        u(M, a, "fcTL"),
        (a += 4),
        v(M, a, V++),
        (a += 4),
        v(M, a, j.rect.width),
        (a += 4),
        v(M, a, j.rect.height),
        (a += 4),
        v(M, a, j.rect.x),
        (a += 4),
        v(M, a, j.rect.y),
        (a += 4),
        F(M, a, y[D]),
        (a += 2),
        F(M, a, 1e3),
        (a += 2),
        (M[a] = j.dispose),
        a++,
        (M[a] = j.blend),
        a++,
        v(M, a, _(M, a - 30, 30)),
        (a += 4));
      const W = j.cimg;
      v(M, a, (B = W.length) + (D == 0 ? 0 : 4)), (a += 4);
      const $ = a;
      u(M, a, D == 0 ? "IDAT" : "fdAT"),
        (a += 4),
        D != 0 && (v(M, a, V++), (a += 4)),
        M.set(W, a),
        (a += B),
        v(M, a, _(M, $, a - $)),
        (a += 4);
    }
    return (
      v(M, a, 0),
      (a += 4),
      u(M, a, "IEND"),
      (a += 4),
      v(M, a, _(M, a - 4, 4)),
      (a += 4),
      M.buffer
    );
  }
  function A(c, s, m) {
    for (let y = 0; y < c.frames.length; y++) {
      const w = c.frames[y];
      w.rect.width;
      const _ = w.rect.height,
        v = new Uint8Array(_ * w.bpl + _);
      w.cimg = o(w.img, _, w.bpp, w.bpl, v, s, m);
    }
  }
  function r(c, s, m, y, w) {
    const _ = w[0],
      v = w[1],
      F = w[2],
      u = w[3],
      a = w[4],
      T = w[5];
    let C = 6,
      P = 8,
      N = 255;
    for (var B = 0; B < c.length; B++) {
      const ne = new Uint8Array(c[B]);
      for (var z = ne.length, D = 0; D < z; D += 4) N &= ne[D + 3];
    }
    const M = N != 255,
      Q = (function (K, q, te, oe, Y, se) {
        const J = [];
        for (var G = 0; G < K.length; G++) {
          const ae = new Uint8Array(K[G]),
            he = new Uint32Array(ae.buffer);
          var le;
          let ce = 0,
            me = 0,
            pe = q,
            _e = te,
            Ne = oe ? 1 : 0;
          if (G != 0) {
            const ut = se || oe || G == 1 || J[G - 2].dispose != 0 ? 1 : 2;
            let Qe = 0,
              qe = 1e9;
            for (let Se = 0; Se < ut; Se++) {
              var be = new Uint8Array(K[G - 1 - Se]);
              const ht = new Uint32Array(K[G - 1 - Se]);
              let Ae = q,
                we = te,
                Me = -1,
                xe = -1;
              for (let Ce = 0; Ce < te; Ce++)
                for (let Fe = 0; Fe < q; Fe++)
                  he[(re = Ce * q + Fe)] != ht[re] &&
                    (Fe < Ae && (Ae = Fe),
                    Fe > Me && (Me = Fe),
                    Ce < we && (we = Ce),
                    Ce > xe && (xe = Ce));
              Me == -1 && (Ae = we = Me = xe = 0),
                Y && ((1 & Ae) == 1 && Ae--, (1 & we) == 1 && we--);
              const Ge = (Me - Ae + 1) * (xe - we + 1);
              Ge < qe &&
                ((qe = Ge),
                (Qe = Se),
                (ce = Ae),
                (me = we),
                (pe = Me - Ae + 1),
                (_e = xe - we + 1));
            }
            (be = new Uint8Array(K[G - 1 - Qe])),
              Qe == 1 && (J[G - 1].dispose = 2),
              (le = new Uint8Array(pe * _e * 4)),
              R(be, q, te, le, pe, _e, -ce, -me, 0),
              (Ne = R(ae, q, te, le, pe, _e, -ce, -me, 3) ? 1 : 0),
              Ne == 1
                ? n(ae, q, te, le, { x: ce, y: me, width: pe, height: _e })
                : R(ae, q, te, le, pe, _e, -ce, -me, 0);
          } else le = ae.slice(0);
          J.push({
            rect: { x: ce, y: me, width: pe, height: _e },
            img: le,
            blend: Ne,
            dispose: 0,
          });
        }
        if (oe)
          for (G = 0; G < J.length; G++) {
            if ((Ue = J[G]).blend == 1) continue;
            const ae = Ue.rect,
              he = J[G - 1].rect,
              ce = Math.min(ae.x, he.x),
              me = Math.min(ae.y, he.y),
              pe = {
                x: ce,
                y: me,
                width: Math.max(ae.x + ae.width, he.x + he.width) - ce,
                height: Math.max(ae.y + ae.height, he.y + he.height) - me,
              };
            (J[G - 1].dispose = 1),
              G - 1 != 0 && i(K, q, te, J, G - 1, pe, Y),
              i(K, q, te, J, G, pe, Y);
          }
        let Te = 0;
        if (K.length != 1)
          for (var re = 0; re < J.length; re++) {
            var Ue;
            Te += (Ue = J[re]).rect.width * Ue.rect.height;
          }
        return J;
      })(c, s, m, _, v, F),
      V = {},
      j = [],
      W = [];
    if (y != 0) {
      const ne = [];
      for (D = 0; D < Q.length; D++) ne.push(Q[D].img.buffer);
      const K = (function (Y) {
          let se = 0;
          for (var J = 0; J < Y.length; J++) se += Y[J].byteLength;
          const G = new Uint8Array(se);
          let le = 0;
          for (J = 0; J < Y.length; J++) {
            const be = new Uint8Array(Y[J]),
              Te = be.length;
            for (let re = 0; re < Te; re += 4) {
              let Ue = be[re],
                ae = be[re + 1],
                he = be[re + 2];
              const ce = be[re + 3];
              ce == 0 && (Ue = ae = he = 0),
                (G[le + re] = Ue),
                (G[le + re + 1] = ae),
                (G[le + re + 2] = he),
                (G[le + re + 3] = ce);
            }
            le += Te;
          }
          return G.buffer;
        })(ne),
        q = U(K, y);
      for (D = 0; D < q.plte.length; D++) j.push(q.plte[D].est.rgba);
      let te = 0;
      for (D = 0; D < Q.length; D++) {
        const oe = (X = Q[D]).img.length;
        var $ = new Uint8Array(q.inds.buffer, te >> 2, oe >> 2);
        W.push($);
        const Y = new Uint8Array(q.abuf, te, oe);
        T && f(X.img, X.rect.width, X.rect.height, j, Y, $),
          X.img.set(Y),
          (te += oe);
      }
    } else
      for (B = 0; B < Q.length; B++) {
        var X = Q[B];
        const ne = new Uint32Array(X.img.buffer);
        var ee = X.rect.width;
        for (
          z = ne.length, $ = new Uint8Array(z), W.push($), D = 0;
          D < z;
          D++
        ) {
          const K = ne[D];
          if (D != 0 && K == ne[D - 1]) $[D] = $[D - 1];
          else if (D > ee && K == ne[D - ee]) $[D] = $[D - ee];
          else {
            let q = V[K];
            if (
              q == null &&
              ((V[K] = q = j.length), j.push(K), j.length >= 300)
            )
              break;
            $[D] = q;
          }
        }
      }
    const ye = j.length;
    for (
      ye <= 256 &&
        a == 0 &&
        ((P = ye <= 2 ? 1 : ye <= 4 ? 2 : ye <= 16 ? 4 : 8),
        (P = Math.max(P, u))),
        B = 0;
      B < Q.length;
      B++
    ) {
      (X = Q[B]).rect.x, X.rect.y, (ee = X.rect.width);
      const ne = X.rect.height;
      let K = X.img;
      new Uint32Array(K.buffer);
      let q = 4 * ee,
        te = 4;
      if (ye <= 256 && a == 0) {
        q = Math.ceil((P * ee) / 8);
        var ge = new Uint8Array(q * ne);
        const oe = W[B];
        for (let Y = 0; Y < ne; Y++) {
          D = Y * q;
          const se = Y * ee;
          if (P == 8) for (var Z = 0; Z < ee; Z++) ge[D + Z] = oe[se + Z];
          else if (P == 4)
            for (Z = 0; Z < ee; Z++)
              ge[D + (Z >> 1)] |= oe[se + Z] << (4 - 4 * (1 & Z));
          else if (P == 2)
            for (Z = 0; Z < ee; Z++)
              ge[D + (Z >> 2)] |= oe[se + Z] << (6 - 2 * (3 & Z));
          else if (P == 1)
            for (Z = 0; Z < ee; Z++)
              ge[D + (Z >> 3)] |= oe[se + Z] << (7 - 1 * (7 & Z));
        }
        (K = ge), (C = 3), (te = 1);
      } else if (M == 0 && Q.length == 1) {
        ge = new Uint8Array(ee * ne * 3);
        const oe = ee * ne;
        for (D = 0; D < oe; D++) {
          const Y = 3 * D,
            se = 4 * D;
          (ge[Y] = K[se]), (ge[Y + 1] = K[se + 1]), (ge[Y + 2] = K[se + 2]);
        }
        (K = ge), (C = 2), (te = 3), (q = 3 * ee);
      }
      (X.img = K), (X.bpl = q), (X.bpp = te);
    }
    return { ctype: C, depth: P, plte: j, frames: Q };
  }
  function i(c, s, m, y, w, _, v) {
    const F = Uint8Array,
      u = Uint32Array,
      a = new F(c[w - 1]),
      T = new u(c[w - 1]),
      C = w + 1 < c.length ? new F(c[w + 1]) : null,
      P = new F(c[w]),
      N = new u(P.buffer);
    let B = s,
      z = m,
      D = -1,
      M = -1;
    for (let V = 0; V < _.height; V++)
      for (let j = 0; j < _.width; j++) {
        const W = _.x + j,
          $ = _.y + V,
          X = $ * s + W,
          ee = N[X];
        ee == 0 ||
          (y[w - 1].dispose == 0 &&
            T[X] == ee &&
            (C == null || C[4 * X + 3] != 0)) ||
          (W < B && (B = W),
          W > D && (D = W),
          $ < z && (z = $),
          $ > M && (M = $));
      }
    D == -1 && (B = z = D = M = 0),
      v && ((1 & B) == 1 && B--, (1 & z) == 1 && z--),
      (_ = { x: B, y: z, width: D - B + 1, height: M - z + 1 });
    const Q = y[w];
    (Q.rect = _),
      (Q.blend = 1),
      (Q.img = new Uint8Array(_.width * _.height * 4)),
      y[w - 1].dispose == 0
        ? (R(a, s, m, Q.img, _.width, _.height, -_.x, -_.y, 0),
          n(P, s, m, Q.img, _))
        : R(P, s, m, Q.img, _.width, _.height, -_.x, -_.y, 0);
  }
  function n(c, s, m, y, w) {
    R(c, s, m, y, w.width, w.height, -w.x, -w.y, 2);
  }
  function o(c, s, m, y, w, _, v) {
    const F = [];
    let u,
      a = [0, 1, 2, 3, 4];
    _ != -1 ? (a = [_]) : (s * y > 5e5 || m == 1) && (a = [0]),
      v && (u = { level: 0 });
    const T = Mt;
    for (var C = 0; C < a.length; C++) {
      for (let B = 0; B < s; B++) d(w, c, B, y, m, a[C]);
      F.push(T.deflate(w, u));
    }
    let P,
      N = 1e9;
    for (C = 0; C < F.length; C++)
      F[C].length < N && ((P = C), (N = F[C].length));
    return F[P];
  }
  function d(c, s, m, y, w, _) {
    const v = m * y;
    let F = v + m;
    if (((c[F] = _), F++, _ == 0))
      if (y < 500) for (var u = 0; u < y; u++) c[F + u] = s[v + u];
      else c.set(new Uint8Array(s.buffer, v, y), F);
    else if (_ == 1) {
      for (u = 0; u < w; u++) c[F + u] = s[v + u];
      for (u = w; u < y; u++) c[F + u] = (s[v + u] - s[v + u - w] + 256) & 255;
    } else if (m == 0) {
      for (u = 0; u < w; u++) c[F + u] = s[v + u];
      if (_ == 2) for (u = w; u < y; u++) c[F + u] = s[v + u];
      if (_ == 3)
        for (u = w; u < y; u++)
          c[F + u] = (s[v + u] - (s[v + u - w] >> 1) + 256) & 255;
      if (_ == 4)
        for (u = w; u < y; u++)
          c[F + u] = (s[v + u] - H(s[v + u - w], 0, 0) + 256) & 255;
    } else {
      if (_ == 2)
        for (u = 0; u < y; u++)
          c[F + u] = (s[v + u] + 256 - s[v + u - y]) & 255;
      if (_ == 3) {
        for (u = 0; u < w; u++)
          c[F + u] = (s[v + u] + 256 - (s[v + u - y] >> 1)) & 255;
        for (u = w; u < y; u++)
          c[F + u] =
            (s[v + u] + 256 - ((s[v + u - y] + s[v + u - w]) >> 1)) & 255;
      }
      if (_ == 4) {
        for (u = 0; u < w; u++)
          c[F + u] = (s[v + u] + 256 - H(0, s[v + u - y], 0)) & 255;
        for (u = w; u < y; u++)
          c[F + u] =
            (s[v + u] + 256 - H(s[v + u - w], s[v + u - y], s[v + u - w - y])) &
            255;
      }
    }
  }
  function U(c, s) {
    const m = new Uint8Array(c),
      y = m.slice(0),
      w = new Uint32Array(y.buffer),
      _ = I(y, s),
      v = _[0],
      F = _[1],
      u = m.length,
      a = new Uint8Array(u >> 2);
    let T;
    if (m.length < 2e7)
      for (var C = 0; C < u; C += 4)
        (T = b(
          v,
          (P = m[C] * (1 / 255)),
          (N = m[C + 1] * (1 / 255)),
          (B = m[C + 2] * (1 / 255)),
          (z = m[C + 3] * (1 / 255))
        )),
          (a[C >> 2] = T.ind),
          (w[C >> 2] = T.est.rgba);
    else
      for (C = 0; C < u; C += 4) {
        var P = m[C] * 0.00392156862745098,
          N = m[C + 1] * (1 / 255),
          B = m[C + 2] * (1 / 255),
          z = m[C + 3] * (1 / 255);
        for (T = v; T.left; ) T = O(T.est, P, N, B, z) <= 0 ? T.left : T.right;
        (a[C >> 2] = T.ind), (w[C >> 2] = T.est.rgba);
      }
    return { abuf: y.buffer, inds: a, plte: F };
  }
  function I(c, s, m) {
    m == null && (m = 1e-4);
    const y = new Uint32Array(c.buffer),
      w = {
        i0: 0,
        i1: c.length,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null,
      };
    (w.bst = L(c, w.i0, w.i1)), (w.est = g(w.bst));
    const _ = [w];
    for (; _.length < s; ) {
      let F = 0,
        u = 0;
      for (var v = 0; v < _.length; v++)
        _[v].est.L > F && ((F = _[v].est.L), (u = v));
      if (F < m) break;
      const a = _[u],
        T = k(c, y, a.i0, a.i1, a.est.e, a.est.eMq255);
      if (a.i0 >= T || a.i1 <= T) {
        a.est.L = 0;
        continue;
      }
      const C = {
        i0: a.i0,
        i1: T,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null,
      };
      (C.bst = L(c, C.i0, C.i1)), (C.est = g(C.bst));
      const P = {
        i0: T,
        i1: a.i1,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null,
      };
      for (P.bst = { R: [], m: [], N: a.bst.N - C.bst.N }, v = 0; v < 16; v++)
        P.bst.R[v] = a.bst.R[v] - C.bst.R[v];
      for (v = 0; v < 4; v++) P.bst.m[v] = a.bst.m[v] - C.bst.m[v];
      (P.est = g(P.bst)), (a.left = C), (a.right = P), (_[u] = C), _.push(P);
    }
    for (_.sort((F, u) => u.bst.N - F.bst.N), v = 0; v < _.length; v++)
      _[v].ind = v;
    return [w, _];
  }
  function b(c, s, m, y, w) {
    if (c.left == null)
      return (
        (c.tdst = (function (C, P, N, B, z) {
          const D = P - C[0],
            M = N - C[1],
            Q = B - C[2],
            V = z - C[3];
          return D * D + M * M + Q * Q + V * V;
        })(c.est.q, s, m, y, w)),
        c
      );
    const _ = O(c.est, s, m, y, w);
    let v = c.left,
      F = c.right;
    _ > 0 && ((v = c.right), (F = c.left));
    const u = b(v, s, m, y, w);
    if (u.tdst <= _ * _) return u;
    const a = b(F, s, m, y, w);
    return a.tdst < u.tdst ? a : u;
  }
  function O(c, s, m, y, w) {
    const { e: _ } = c;
    return _[0] * s + _[1] * m + _[2] * y + _[3] * w - c.eMq;
  }
  function k(c, s, m, y, w, _) {
    for (y -= 4; m < y; ) {
      for (; E(c, m, w) <= _; ) m += 4;
      for (; E(c, y, w) > _; ) y -= 4;
      if (m >= y) break;
      const v = s[m >> 2];
      (s[m >> 2] = s[y >> 2]), (s[y >> 2] = v), (m += 4), (y -= 4);
    }
    for (; E(c, m, w) > _; ) m -= 4;
    return m + 4;
  }
  function E(c, s, m) {
    return c[s] * m[0] + c[s + 1] * m[1] + c[s + 2] * m[2] + c[s + 3] * m[3];
  }
  function L(c, s, m) {
    const y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      w = [0, 0, 0, 0],
      _ = (m - s) >> 2;
    for (let v = s; v < m; v += 4) {
      const F = c[v] * 0.00392156862745098,
        u = c[v + 1] * (1 / 255),
        a = c[v + 2] * (1 / 255),
        T = c[v + 3] * (1 / 255);
      (w[0] += F),
        (w[1] += u),
        (w[2] += a),
        (w[3] += T),
        (y[0] += F * F),
        (y[1] += F * u),
        (y[2] += F * a),
        (y[3] += F * T),
        (y[5] += u * u),
        (y[6] += u * a),
        (y[7] += u * T),
        (y[10] += a * a),
        (y[11] += a * T),
        (y[15] += T * T);
    }
    return (
      (y[4] = y[1]),
      (y[8] = y[2]),
      (y[9] = y[6]),
      (y[12] = y[3]),
      (y[13] = y[7]),
      (y[14] = y[11]),
      { R: y, m: w, N: _ }
    );
  }
  function g(c) {
    const { R: s } = c,
      { m } = c,
      { N: y } = c,
      w = m[0],
      _ = m[1],
      v = m[2],
      F = m[3],
      u = y == 0 ? 0 : 1 / y,
      a = [
        s[0] - w * w * u,
        s[1] - w * _ * u,
        s[2] - w * v * u,
        s[3] - w * F * u,
        s[4] - _ * w * u,
        s[5] - _ * _ * u,
        s[6] - _ * v * u,
        s[7] - _ * F * u,
        s[8] - v * w * u,
        s[9] - v * _ * u,
        s[10] - v * v * u,
        s[11] - v * F * u,
        s[12] - F * w * u,
        s[13] - F * _ * u,
        s[14] - F * v * u,
        s[15] - F * F * u,
      ],
      T = a,
      C = S;
    let P = [Math.random(), Math.random(), Math.random(), Math.random()],
      N = 0,
      B = 0;
    if (y != 0)
      for (
        let D = 0;
        D < 16 &&
        ((P = C.multVec(T, P)),
        (B = Math.sqrt(C.dot(P, P))),
        (P = C.sml(1 / B, P)),
        !(D != 0 && Math.abs(B - N) < 1e-9));
        D++
      )
        N = B;
    const z = [w * u, _ * u, v * u, F * u];
    return {
      Cov: a,
      q: z,
      e: P,
      L: N,
      eMq255: C.dot(C.sml(255, z), P),
      eMq: C.dot(P, z),
      rgba:
        ((Math.round(255 * z[3]) << 24) |
          (Math.round(255 * z[2]) << 16) |
          (Math.round(255 * z[1]) << 8) |
          (Math.round(255 * z[0]) << 0)) >>>
        0,
    };
  }
  var S = {
    multVec: (c, s) => [
      c[0] * s[0] + c[1] * s[1] + c[2] * s[2] + c[3] * s[3],
      c[4] * s[0] + c[5] * s[1] + c[6] * s[2] + c[7] * s[3],
      c[8] * s[0] + c[9] * s[1] + c[10] * s[2] + c[11] * s[3],
      c[12] * s[0] + c[13] * s[1] + c[14] * s[2] + c[15] * s[3],
    ],
    dot: (c, s) => c[0] * s[0] + c[1] * s[1] + c[2] * s[2] + c[3] * s[3],
    sml: (c, s) => [c * s[0], c * s[1], c * s[2], c * s[3]],
  };
  (de.encode = function (s, m, y, w, _, v, F) {
    w == null && (w = 0), F == null && (F = !1);
    const u = r(s, m, y, w, [!1, !1, !1, 0, F, !1]);
    return A(u, -1), p(u, m, y, _, v);
  }),
    (de.encodeLL = function (s, m, y, w, _, v, F, u) {
      const a = {
          ctype: 0 + (w == 1 ? 0 : 2) + (_ == 0 ? 0 : 4),
          depth: v,
          frames: [],
        },
        T = (w + _) * v,
        C = T * m;
      for (let P = 0; P < s.length; P++)
        a.frames.push({
          rect: { x: 0, y: 0, width: m, height: y },
          img: new Uint8Array(s[P]),
          blend: 0,
          dispose: 1,
          bpp: Math.ceil(T / 8),
          bpl: Math.ceil(C / 8),
        });
      return A(a, 0, !0), p(a, m, y, F, u);
    }),
    (de.encode.compress = r),
    (de.encode.dither = f),
    (de.quantize = U),
    (de.quantize.getKDtree = I),
    (de.quantize.getNearest = b);
})();
const et = {
  toArrayBuffer(R, x) {
    const H = R.width,
      h = R.height,
      e = H << 2,
      t = R.getContext("2d").getImageData(0, 0, H, h),
      l = new Uint32Array(t.data.buffer),
      f = ((32 * H + 31) / 32) << 2,
      p = f * h,
      A = 122 + p,
      r = new ArrayBuffer(A),
      i = new DataView(r),
      n = 1 << 20;
    let o,
      d,
      U,
      I,
      b = n,
      O = 0,
      k = 0,
      E = 0;
    function L(c) {
      i.setUint16(k, c, !0), (k += 2);
    }
    function g(c) {
      i.setUint32(k, c, !0), (k += 4);
    }
    function S(c) {
      k += c;
    }
    L(19778),
      g(A),
      S(4),
      g(122),
      g(108),
      g(H),
      g(-h >>> 0),
      L(1),
      L(32),
      g(3),
      g(p),
      g(2835),
      g(2835),
      S(8),
      g(16711680),
      g(65280),
      g(255),
      g(4278190080),
      g(1466527264),
      (function c() {
        for (; O < h && b > 0; ) {
          for (I = 122 + O * f, o = 0; o < e; )
            b--,
              (d = l[E++]),
              (U = d >>> 24),
              i.setUint32(I + o, (d << 8) | U),
              (o += 4);
          O++;
        }
        E < l.length ? ((b = n), setTimeout(c, et._dly)) : x(r);
      })();
  },
  toBlob(R, x) {
    this.toArrayBuffer(R, (H) => {
      x(new Blob([H], { type: "image/bmp" }));
    });
  },
  _dly: 9,
};
var fe = {
    CHROME: "CHROME",
    FIREFOX: "FIREFOX",
    DESKTOP_SAFARI: "DESKTOP_SAFARI",
    IE: "IE",
    IOS: "IOS",
    ETC: "ETC",
  },
  Rt = {
    [fe.CHROME]: 16384,
    [fe.FIREFOX]: 11180,
    [fe.DESKTOP_SAFARI]: 16384,
    [fe.IE]: 8192,
    [fe.IOS]: 4096,
    [fe.ETC]: 8192,
  };
const je = typeof window < "u",
  tt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
  He =
    je &&
    window.cordova &&
    window.cordova.require &&
    window.cordova.require("cordova/modulemapper"),
  St =
    (je || tt) &&
    ((He && He.getOriginalSymbol(window, "File")) ||
      (typeof File < "u" && File)),
  nt =
    (je || tt) &&
    ((He && He.getOriginalSymbol(window, "FileReader")) ||
      (typeof FileReader < "u" && FileReader));
function $e(R, x, H = Date.now()) {
  return new Promise((h) => {
    const e = R.split(","),
      t = e[0].match(/:(.*?);/)[1],
      l = globalThis.atob(e[1]);
    let f = l.length;
    const p = new Uint8Array(f);
    for (; f--; ) p[f] = l.charCodeAt(f);
    const A = new Blob([p], { type: t });
    (A.name = x), (A.lastModified = H), h(A);
  });
}
function rt(R) {
  return new Promise((x, H) => {
    const h = new nt();
    (h.onload = () => x(h.result)),
      (h.onerror = (e) => H(e)),
      h.readAsDataURL(R);
  });
}
function it(R) {
  return new Promise((x, H) => {
    const h = new Image();
    (h.onload = () => x(h)), (h.onerror = (e) => H(e)), (h.src = R);
  });
}
function Ee() {
  if (Ee.cachedResult !== void 0) return Ee.cachedResult;
  let R = fe.ETC;
  const { userAgent: x } = navigator;
  return (
    /Chrom(e|ium)/i.test(x)
      ? (R = fe.CHROME)
      : /iP(ad|od|hone)/i.test(x) && /WebKit/i.test(x)
      ? (R = fe.IOS)
      : /Safari/i.test(x)
      ? (R = fe.DESKTOP_SAFARI)
      : /Firefox/i.test(x)
      ? (R = fe.FIREFOX)
      : (/MSIE/i.test(x) || document.documentMode) && (R = fe.IE),
    (Ee.cachedResult = R),
    Ee.cachedResult
  );
}
function ot(R, x) {
  const H = Ee(),
    h = Rt[H];
  let e = R,
    t = x,
    l = e * t;
  const f = e > t ? t / e : e / t;
  for (; l > h * h; ) {
    const p = (h + e) / 2,
      A = (h + t) / 2;
    p < A ? ((t = A), (e = A * f)) : ((t = p * f), (e = p)), (l = e * t);
  }
  return { width: e, height: t };
}
function ze(R, x) {
  let H, h;
  try {
    if (((H = new OffscreenCanvas(R, x)), (h = H.getContext("2d")), h === null))
      throw new Error("getContext of OffscreenCanvas returns null");
  } catch {
    (H = document.createElement("canvas")), (h = H.getContext("2d"));
  }
  return (H.width = R), (H.height = x), [H, h];
}
function at(R, x) {
  const { width: H, height: h } = ot(R.width, R.height),
    [e, t] = ze(H, h);
  return (
    x &&
      /jpe?g/.test(x) &&
      ((t.fillStyle = "white"), t.fillRect(0, 0, e.width, e.height)),
    t.drawImage(R, 0, 0, e.width, e.height),
    e
  );
}
function Le() {
  return (
    Le.cachedResult !== void 0 ||
      (Le.cachedResult =
        [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod",
        ].includes(navigator.platform) ||
        (navigator.userAgent.includes("Mac") &&
          typeof document < "u" &&
          "ontouchend" in document)),
    Le.cachedResult
  );
}
function De(R, x = {}) {
  return new Promise(function (H, h) {
    let e, t;
    var l = function () {
        try {
          return (t = at(e, x.fileType || R.type)), H([e, t]);
        } catch (p) {
          return h(p);
        }
      },
      f = function (p) {
        try {
          var A = function (r) {
            try {
              throw r;
            } catch (i) {
              return h(i);
            }
          };
          try {
            let r;
            return rt(R).then(function (i) {
              try {
                return (
                  (r = i),
                  it(r).then(function (n) {
                    try {
                      return (
                        (e = n),
                        (function () {
                          try {
                            return l();
                          } catch (o) {
                            return h(o);
                          }
                        })()
                      );
                    } catch (o) {
                      return A(o);
                    }
                  }, A)
                );
              } catch (n) {
                return A(n);
              }
            }, A);
          } catch (r) {
            A(r);
          }
        } catch (r) {
          return h(r);
        }
      };
    try {
      if (Le() || [fe.DESKTOP_SAFARI, fe.MOBILE_SAFARI].includes(Ee()))
        throw new Error("Skip createImageBitmap on IOS and Safari");
      return createImageBitmap(R).then(function (p) {
        try {
          return (e = p), l();
        } catch {
          return f();
        }
      }, f);
    } catch {
      f();
    }
  });
}
function Be(R, x, H, h, e = 1) {
  return new Promise(function (t, l) {
    let f;
    if (x === "image/png") {
      let A, r, i;
      return (
        (A = R.getContext("2d")),
        ({ data: r } = A.getImageData(0, 0, R.width, R.height)),
        (i = de.encode([r.buffer], R.width, R.height, 4096 * e)),
        (f = new Blob([i], { type: x })),
        (f.name = H),
        (f.lastModified = h),
        p.call(this)
      );
    }
    {
      let A = function () {
        return p.call(this);
      };
      if (x === "image/bmp")
        return new Promise((r) => et.toBlob(R, r)).then(
          function (r) {
            try {
              return (f = r), (f.name = H), (f.lastModified = h), A.call(this);
            } catch (i) {
              return l(i);
            }
          }.bind(this),
          l
        );
      {
        let r = function () {
          return A.call(this);
        };
        if (
          typeof OffscreenCanvas == "function" &&
          R instanceof OffscreenCanvas
        )
          return R.convertToBlob({ type: x, quality: e }).then(
            function (i) {
              try {
                return (
                  (f = i), (f.name = H), (f.lastModified = h), r.call(this)
                );
              } catch (n) {
                return l(n);
              }
            }.bind(this),
            l
          );
        {
          let i;
          return (
            (i = R.toDataURL(x, e)),
            $e(i, H, h).then(
              function (n) {
                try {
                  return (f = n), r.call(this);
                } catch (o) {
                  return l(o);
                }
              }.bind(this),
              l
            )
          );
        }
      }
    }
    function p() {
      return t(f);
    }
  });
}
function ve(R) {
  (R.width = 0), (R.height = 0);
}
function Re() {
  return new Promise(function (R, x) {
    let H, h, e, t;
    return Re.cachedResult !== void 0
      ? R(Re.cachedResult)
      : $e(
          "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==",
          "test.jpg",
          Date.now()
        ).then(function (l) {
          try {
            return (
              (H = l),
              De(H).then(function (f) {
                try {
                  return (
                    (h = f[1]),
                    Be(h, H.type, H.name, H.lastModified).then(function (p) {
                      try {
                        return (
                          (e = p),
                          ve(h),
                          De(e).then(function (A) {
                            try {
                              return (
                                (t = A[0]),
                                (Re.cachedResult =
                                  t.width === 1 && t.height === 2),
                                R(Re.cachedResult)
                              );
                            } catch (r) {
                              return x(r);
                            }
                          }, x)
                        );
                      } catch (A) {
                        return x(A);
                      }
                    }, x)
                  );
                } catch (p) {
                  return x(p);
                }
              }, x)
            );
          } catch (f) {
            return x(f);
          }
        }, x);
  });
}
function ft(R) {
  return new Promise((x, H) => {
    const h = new nt();
    (h.onload = (e) => {
      const t = new DataView(e.target.result);
      if (t.getUint16(0, !1) != 65496) return x(-2);
      const l = t.byteLength;
      let f = 2;
      for (; f < l; ) {
        if (t.getUint16(f + 2, !1) <= 8) return x(-1);
        const p = t.getUint16(f, !1);
        if (((f += 2), p == 65505)) {
          if (t.getUint32((f += 2), !1) != 1165519206) return x(-1);
          const A = t.getUint16((f += 6), !1) == 18761;
          f += t.getUint32(f + 4, A);
          const r = t.getUint16(f, A);
          f += 2;
          for (let i = 0; i < r; i++)
            if (t.getUint16(f + 12 * i, A) == 274)
              return x(t.getUint16(f + 12 * i + 8, A));
        } else {
          if ((65280 & p) != 65280) break;
          f += t.getUint16(f, !1);
        }
      }
      return x(-1);
    }),
      (h.onerror = (e) => H(e)),
      h.readAsArrayBuffer(R);
  });
}
function st(R, x) {
  const { width: H } = R,
    { height: h } = R,
    { maxWidthOrHeight: e } = x;
  let t,
    l = R;
  return (
    isFinite(e) &&
      (H > e || h > e) &&
      (([l, t] = ze(H, h)),
      H > h
        ? ((l.width = e), (l.height = (h / H) * e))
        : ((l.width = (H / h) * e), (l.height = e)),
      t.drawImage(R, 0, 0, l.width, l.height),
      ve(R)),
    l
  );
}
function lt(R, x) {
  const { width: H } = R,
    { height: h } = R,
    [e, t] = ze(H, h);
  switch (
    (x > 4 && x < 9
      ? ((e.width = h), (e.height = H))
      : ((e.width = H), (e.height = h)),
    x)
  ) {
    case 2:
      t.transform(-1, 0, 0, 1, H, 0);
      break;
    case 3:
      t.transform(-1, 0, 0, -1, H, h);
      break;
    case 4:
      t.transform(1, 0, 0, -1, 0, h);
      break;
    case 5:
      t.transform(0, 1, 1, 0, 0, 0);
      break;
    case 6:
      t.transform(0, 1, -1, 0, h, 0);
      break;
    case 7:
      t.transform(0, -1, -1, 0, h, H);
      break;
    case 8:
      t.transform(0, -1, 1, 0, 0, H);
  }
  return t.drawImage(R, 0, 0, H, h), ve(R), e;
}
function Ye(R, x, H = 0) {
  return new Promise(function (h, e) {
    let t, l, f, p, A, r, i, n, o, d, U, I, b, O, k, E, L, g, S, c;
    function s(y = 5) {
      if (x.signal && x.signal.aborted) throw x.signal.reason;
      (t += y), x.onProgress(Math.min(t, 100));
    }
    function m(y) {
      if (x.signal && x.signal.aborted) throw x.signal.reason;
      (t = Math.min(Math.max(y, t), 100)), x.onProgress(t);
    }
    return (
      (t = H),
      (l = x.maxIteration || 10),
      (f = 1024 * x.maxSizeMB * 1024),
      s(),
      De(R, x).then(
        function (y) {
          try {
            return (
              ([, p] = y),
              s(),
              (A = st(p, x)),
              s(),
              new Promise(function (w, _) {
                var v;
                if (!(v = x.exifOrientation))
                  return ft(R).then(
                    function (u) {
                      try {
                        return (v = u), F.call(this);
                      } catch (a) {
                        return _(a);
                      }
                    }.bind(this),
                    _
                  );
                function F() {
                  return w(v);
                }
                return F.call(this);
              }).then(
                function (w) {
                  try {
                    return (
                      (r = w),
                      s(),
                      Re().then(
                        function (_) {
                          try {
                            return (
                              (i = _ ? A : lt(A, r)),
                              s(),
                              (n = x.initialQuality || 1),
                              (o = x.fileType || R.type),
                              Be(i, o, R.name, R.lastModified, n).then(
                                function (v) {
                                  try {
                                    {
                                      let u = function () {
                                          if (l-- && (k > f || k > b)) {
                                            let T, C;
                                            return (
                                              (T = c
                                                ? 0.95 * S.width
                                                : S.width),
                                              (C = c
                                                ? 0.95 * S.height
                                                : S.height),
                                              ([L, g] = ze(T, C)),
                                              g.drawImage(S, 0, 0, T, C),
                                              (n *=
                                                o === "image/png"
                                                  ? 0.85
                                                  : 0.95),
                                              Be(
                                                L,
                                                o,
                                                R.name,
                                                R.lastModified,
                                                n
                                              ).then(function (P) {
                                                try {
                                                  return (
                                                    (E = P),
                                                    ve(S),
                                                    (S = L),
                                                    (k = E.size),
                                                    m(
                                                      Math.min(
                                                        99,
                                                        Math.floor(
                                                          ((O - k) / (O - f)) *
                                                            100
                                                        )
                                                      )
                                                    ),
                                                    u
                                                  );
                                                } catch (N) {
                                                  return e(N);
                                                }
                                              }, e)
                                            );
                                          }
                                          return [1];
                                        },
                                        a = function () {
                                          return (
                                            ve(S),
                                            ve(L),
                                            ve(A),
                                            ve(i),
                                            ve(p),
                                            m(100),
                                            h(E)
                                          );
                                        };
                                      if (
                                        ((d = v),
                                        s(),
                                        (U = d.size > f),
                                        (I = d.size > R.size),
                                        !U && !I)
                                      )
                                        return m(100), h(d);
                                      var F;
                                      return (
                                        (b = R.size),
                                        (O = d.size),
                                        (k = O),
                                        (S = i),
                                        (c = !x.alwaysKeepResolution && U),
                                        (F = function (T) {
                                          for (; T; ) {
                                            if (T.then)
                                              return void T.then(F, e);
                                            try {
                                              if (T.pop) {
                                                if (T.length)
                                                  return T.pop()
                                                    ? a.call(this)
                                                    : T;
                                                T = u;
                                              } else T = T.call(this);
                                            } catch (C) {
                                              return e(C);
                                            }
                                          }
                                        }.bind(this))(u)
                                      );
                                    }
                                  } catch (u) {
                                    return e(u);
                                  }
                                }.bind(this),
                                e
                              )
                            );
                          } catch (v) {
                            return e(v);
                          }
                        }.bind(this),
                        e
                      )
                    );
                  } catch (_) {
                    return e(_);
                  }
                }.bind(this),
                e
              )
            );
          } catch (w) {
            return e(w);
          }
        }.bind(this),
        e
      )
    );
  });
}
const xt = `
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;
let We;
function kt(R, x) {
  return new Promise((H, h) => {
    We ||
      (We = (function (l) {
        const f = [];
        return (
          typeof l == "function" ? f.push(`(${l})()`) : f.push(l),
          URL.createObjectURL(new Blob(f))
        );
      })(xt));
    const e = new Worker(We);
    e.addEventListener("message", function (l) {
      if (x.signal && x.signal.aborted) e.terminate();
      else if (l.data.progress === void 0) {
        if (l.data.error) return h(new Error(l.data.error)), void e.terminate();
        H(l.data.file), e.terminate();
      } else x.onProgress(l.data.progress);
    }),
      e.addEventListener("error", h),
      x.signal &&
        x.signal.addEventListener("abort", () => {
          h(x.signal.reason), e.terminate();
        }),
      e.postMessage({
        file: R,
        imageCompressionLibUrl: x.libURL,
        options: { ...x, onProgress: void 0, signal: void 0 },
      });
  });
}
function ie(R, x) {
  return new Promise(function (H, h) {
    let e, t, l, f, p, A;
    if (
      ((e = { ...x }),
      (l = 0),
      ({ onProgress: f } = e),
      (e.maxSizeMB = e.maxSizeMB || Number.POSITIVE_INFINITY),
      (p = typeof e.useWebWorker != "boolean" || e.useWebWorker),
      delete e.useWebWorker,
      (e.onProgress = (o) => {
        (l = o), typeof f == "function" && f(l);
      }),
      !(R instanceof Blob || R instanceof St))
    )
      return h(new Error("The file given is not an instance of Blob or File"));
    if (!/^image/.test(R.type))
      return h(new Error("The file given is not an image"));
    if (
      ((A =
        typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope),
      !p || typeof Worker != "function" || A)
    )
      return Ye(R, e).then(
        function (o) {
          try {
            return (t = o), n.call(this);
          } catch (d) {
            return h(d);
          }
        }.bind(this),
        h
      );
    var r = function () {
        try {
          return n.call(this);
        } catch (o) {
          return h(o);
        }
      }.bind(this),
      i = function (o) {
        try {
          return Ye(R, e).then(function (d) {
            try {
              return (t = d), r();
            } catch (U) {
              return h(U);
            }
          }, h);
        } catch (d) {
          return h(d);
        }
      };
    try {
      return (
        (e.libURL =
          e.libURL ||
          "https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js"),
        kt(R, e).then(function (o) {
          try {
            return (t = o), r();
          } catch {
            return i();
          }
        }, i)
      );
    } catch {
      i();
    }
    function n() {
      try {
        (t.name = R.name), (t.lastModified = R.lastModified);
      } catch {}
      try {
        e.preserveExif &&
          R.type === "image/jpeg" &&
          (!e.fileType || (e.fileType && e.fileType === R.type)) &&
          (t = Je(R, t));
      } catch {}
      return H(t);
    }
  });
}
(ie.getDataUrlFromFile = rt),
  (ie.getFilefromDataUrl = $e),
  (ie.loadImage = it),
  (ie.drawImageInCanvas = at),
  (ie.drawFileInCanvas = De),
  (ie.canvasToFile = Be),
  (ie.getExifOrientation = ft),
  (ie.handleMaxWidthOrHeight = st),
  (ie.followExifOrientation = lt),
  (ie.cleanupCanvasMemory = ve),
  (ie.isAutoOrientationInBrowser = Re),
  (ie.approximateBelowMaximumCanvasSizeOfBrowser = ot),
  (ie.copyExifWithoutOrientation = Je),
  (ie.getBrowserName = Ee),
  (ie.version = "2.0.2");
const ct = (R) => (pt("data-v-f92477c4"), (R = R()), vt(), R),
  Tt = { class: "modal-content modal-width" },
  Pt = { class: "modal-header" },
  Lt = ct(() => ue("h2", null, " Image ", -1)),
  Ot = ct(() =>
    ue("img", { class: "close-icon", src: mt, alt: "fechar" }, null, -1)
  ),
  Ht = [Ot],
  Dt = { class: "modal-body" },
  Bt = { key: 0, class: "loading-container" },
  zt = { key: 1 },
  Nt = { key: 0 },
  Qt = { class: "preview-img-container" },
  Wt = { class: "buttons-container" },
  jt = { key: 1, class: "select-button-container" },
  $t = dt({
    __name: "PictureModal",
    props: { isCampaign: { type: Boolean } },
    emits: ["handleCloseModal", "handleUpdatePicture"],
    setup(R, { emit: x }) {
      const H = x,
        h = At(),
        e = Pe(),
        t = Pe(),
        l = Pe(),
        f = Pe(!1),
        p = (n) => {
          const o = n.target.files;
          o && o[0] && (e.value = URL.createObjectURL(o[0]));
        },
        A = ({ canvas: n }) => {
          n.toBlob((o) => (t.value = o));
        },
        r = (n, o) => {
          (e.value = null),
            (t.value = null),
            (l.value = null),
            (f.value = !1),
            H("handleUpdatePicture", n, o);
        },
        i = async () => {
          f.value = !0;
          const n = {
              maxSizeMB: 0.6,
              maxWidthOrHeight: 1920,
              useWebWorker: !0,
              fileType: "image/webp",
            },
            o = await ie(t.value, n),
            d = wt(h, `images/${Ct()}`);
          yt(d, o).then(async (U) => {
            const I = await Ut(U.ref);
            r(I, U.metadata.fullPath);
          });
        };
      return (n, o) => (
        Ie(),
        ke("div", Tt, [
          ue("div", Pt, [
            Lt,
            ue(
              "button",
              { onClick: o[0] || (o[0] = (d) => n.$emit("handleCloseModal")) },
              Ht
            ),
          ]),
          ue("div", Dt, [
            f.value
              ? (Ie(), ke("div", Bt, [gt(_t)]))
              : (Ie(),
                ke("div", zt, [
                  e.value
                    ? (Ie(),
                      ke("div", Nt, [
                        ue("div", Qt, [
                          n.isCampaign
                            ? (Ie(),
                              Ve(
                                Ke(Xe),
                                {
                                  key: 1,
                                  class: "cropper cropper-img",
                                  src: e.value,
                                  "stencil-props": { aspectRatio: 16 / 9 },
                                  onChange: A,
                                },
                                null,
                                8,
                                ["src"]
                              ))
                            : (Ie(),
                              Ve(
                                Ke(Xe),
                                {
                                  key: 0,
                                  class: "cropper cropper-img",
                                  src: e.value,
                                  "stencil-props": { aspectRatio: 1 / 1 },
                                  onChange: A,
                                },
                                null,
                                8,
                                ["src"]
                              )),
                        ]),
                        ue("div", Wt, [
                          ue(
                            "button",
                            {
                              class: "button-naked",
                              onClick: o[1] || (o[1] = (d) => l.value.click()),
                            },
                            [
                              Ze(" Choose a different image "),
                              ue(
                                "input",
                                {
                                  ref_key: "imgFileInput",
                                  ref: l,
                                  type: "file",
                                  class: "input-file",
                                  accept: "image/png, image/jpeg",
                                  onChange: p,
                                },
                                null,
                                544
                              ),
                            ]
                          ),
                          ue(
                            "button",
                            {
                              class: "button-primary confirm-button",
                              onClick: i,
                            },
                            " Confirm "
                          ),
                        ]),
                      ]))
                    : (Ie(),
                      ke("div", jt, [
                        ue(
                          "button",
                          {
                            class: "button-primary",
                            onClick: o[2] || (o[2] = (d) => l.value.click()),
                          },
                          [
                            Ze(" Select Image "),
                            ue(
                              "input",
                              {
                                ref_key: "imgFileInput",
                                ref: l,
                                type: "file",
                                class: "input-file",
                                accept: "image/png, image/jpeg",
                                onChange: p,
                              },
                              null,
                              544
                            ),
                          ]
                        ),
                      ])),
                ])),
          ]),
        ])
      );
    },
  }),
  Zt = bt($t, [["__scopeId", "data-v-f92477c4"]]);
export { Zt as P };

import {
  d as B,
  r as v,
  o as l,
  c as i,
  a,
  k as g,
  L as C,
  H as S,
  p as N,
  b as O,
  J as F,
  _ as V,
  Q as D,
  g as E,
  M as T,
  u as j,
  e as H,
  A as q,
  P as k,
  f as G,
  U as p,
  i as J,
  v as Q,
  m as W,
  t as X,
  x as z,
  V as K,
  N as R,
  W as Y,
  X as Z,
} from "./index-y5xotY6D.js";
import { L as M } from "./LoadingView-ZLD11fC3.js";
import { u as ee } from "./default-FmxCqAN8.js";
import {
  g as te,
  f as ae,
  r as A,
  u as se,
  a as oe,
  d as ne,
} from "./index.esm2017-19TQrQvn.js";
import { v as le } from "./v4-cyCr5FZV.js";
import { S as ie } from "./SwitchButtonBool-naxJtuad.js";
const x = (n) => (N("data-v-97ad44b7"), (n = n()), O(), n),
  re = { class: "modal-content modal-width" },
  ue = { class: "modal-header" },
  ce = x(() => a("h2", null, " Profile Picture ", -1)),
  de = x(() =>
    a("img", { class: "close-icon", src: F, alt: "fechar" }, null, -1)
  ),
  pe = [de],
  ve = { class: "modal-body" },
  fe = { key: 0, class: "loading-container" },
  me = { key: 1 },
  _e = { key: 0 },
  he = { class: "preview-img-container" },
  ge = { class: "buttons-container" },
  be = { key: 1, class: "select-button-container" },
  Ue = B({
    __name: "UserPictureModal",
    props: { user: {} },
    emits: ["handleCloseModal", "handleUpdatePicture"],
    setup(n, { emit: f }) {
      const u = n,
        b = f,
        t = te(),
        c = v(),
        o = v(),
        d = v(),
        m = v(!1),
        U = (s) => {
          const e = s.target.files;
          e && e[0] && (c.value = URL.createObjectURL(e[0]));
        },
        y = ({ canvas: s }) => {
          s.toBlob((e) => (o.value = e));
        },
        _ = (s, e) => {
          (c.value = null),
            (o.value = null),
            (d.value = null),
            (m.value = !1),
            b("handleUpdatePicture", s, e);
        },
        P = () => {
          m.value = !0;
          const s = A(t, `images/${le()}`);
          se(s, o.value).then(async (e) => {
            const r = await oe(e.ref);
            if (u.user.pictureURL !== "") {
              const h = A(t, u.user.pictureFullPath);
              h
                ? ne(h).then(() => {
                    _(r, e.metadata.fullPath);
                  })
                : _(r, e.metadata.fullPath);
            } else _(r, e.metadata.fullPath);
          });
        };
      return (s, e) => (
        l(),
        i("div", re, [
          a("div", ue, [
            ce,
            a(
              "button",
              { onClick: e[0] || (e[0] = (r) => s.$emit("handleCloseModal")) },
              pe
            ),
          ]),
          a("div", ve, [
            m.value
              ? (l(), i("div", fe, [g(M)]))
              : (l(),
                i("div", me, [
                  c.value
                    ? (l(),
                      i("div", _e, [
                        a("div", he, [
                          g(
                            C(ae),
                            {
                              class: "cropper cropper-img",
                              src: c.value,
                              "stencil-props": { aspectRatio: 1 / 1 },
                              onChange: y,
                            },
                            null,
                            8,
                            ["src"]
                          ),
                        ]),
                        a("div", ge, [
                          a(
                            "button",
                            {
                              class: "button-naked",
                              onClick: e[1] || (e[1] = (r) => d.value.click()),
                            },
                            [
                              S(" Choose a different image "),
                              a(
                                "input",
                                {
                                  ref_key: "imgFileInput",
                                  ref: d,
                                  type: "file",
                                  class: "input-file",
                                  accept: "image/png, image/jpeg",
                                  onChange: U,
                                },
                                null,
                                544
                              ),
                            ]
                          ),
                          a(
                            "button",
                            {
                              class: "button-primary confirm-button",
                              onClick: P,
                            },
                            " Confirm "
                          ),
                        ]),
                      ]))
                    : (l(),
                      i("div", be, [
                        a(
                          "button",
                          {
                            class: "button-primary",
                            onClick: e[2] || (e[2] = (r) => d.value.click()),
                          },
                          [
                            S(" Select Image "),
                            a(
                              "input",
                              {
                                ref_key: "imgFileInput",
                                ref: d,
                                type: "file",
                                class: "input-file",
                                accept: "image/png, image/jpeg",
                                onChange: U,
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
  ke = V(Ue, [["__scopeId", "data-v-97ad44b7"]]),
  w = (n) => (N("data-v-b79fa5b6"), (n = n()), O(), n),
  Ce = { key: 0 },
  ye = { class: "button-container" },
  Pe = { class: "user-profile-container" },
  $e = { class: "user-profile-card" },
  Re = { class: "profile-picture-container" },
  we = ["src"],
  Le = { class: "user-profile-info-container" },
  Ie = { class: "user-profile-info" },
  Se = w(() => a("div", { class: "label" }, " Name ", -1)),
  Ae = ["value"],
  Be = w(() => a("div", { class: "tier-label" }, " Rank ", -1)),
  Ne = { class: "tier-value" },
  Oe = { key: 0, class: "user-profile-tier-container" },
  Ve = ["src"],
  Me = { key: 1, class: "user-profile-button-container" },
  xe = w(() =>
    a(
      "a",
      { href: "https://www.catarse.me/crisordemparanormal", target: "_blank" },
      [a("button", { class: "button-primary" }, " Add Rank ")],
      -1
    )
  ),
  Fe = [xe],
  De = { key: 1 },
  Ee = B({
    __name: "UserProfile",
    setup(n) {
      D((s) => ({ b684e6fe: m.value }));
      const f = E(),
        u = T(),
        b = j(),
        t = v(ee),
        c = v(!0),
        o = v(!1),
        d = ["SHOW ADS", "HIDE ADS"];
      H(async () => {
        var e;
        if (!((e = f.currentUser) != null && e.uid)) {
          b.push({ name: "login-page" });
          return;
        }
        const s = await q(k(u, "users", f.currentUser.uid));
        (t.value = s.data()), (c.value = !1);
      });
      const m = G(() =>
          t.value.tier === 0
            ? "var(--color-off-white)"
            : t.value.tier === 1
            ? p.mundano
            : t.value.tier === 2
            ? p.recruta
            : t.value.tier === 3
            ? p.operador
            : t.value.tier === 4
            ? p.agenteEspecial
            : t.value.tier === 5
            ? p.agenteElite
            : t.value.tier === 6
            ? p.parceiro
            : t.value.tier === 7
            ? p.equipe
            : "var(--color-off-white)"
        ),
        U = () => {
          K(f), b.push({ name: "home" });
        },
        y = (s) => {
          let e = s.target.value;
          e &&
            e !== t.value.name &&
            (e.length > 32 && (e = e.substring(0, 32)),
            (t.value.name = e),
            R(k(u, "users", t.value.uid), { name: t.value.name }));
        },
        _ = (s, e) => {
          t.value &&
            ((t.value.pictureURL = s),
            (t.value.pictureFullPath = e),
            R(k(u, "users", t.value.uid), {
              pictureURL: t.value.pictureURL,
              pictureFullPath: t.value.pictureFullPath,
            }),
            (o.value = !1));
        },
        P = (s) => {
          t.value &&
            ((t.value.turnAdsOff = s),
            R(k(u, "users", t.value.uid), { turnAdsOff: s }));
        };
      return (s, e) => {
        var h, L, I;
        const r = J("vue-final-modal");
        return c.value
          ? (l(), i("div", De, [g(M, { "page-loading": "" })]))
          : (l(),
            i("div", Ce, [
              a("div", ye, [
                t.value.tier >= 3
                  ? (l(),
                    Q(
                      ie,
                      {
                        key: 0,
                        value: t.value.turnAdsOff || !1,
                        options: d,
                        onHandleChange: P,
                      },
                      null,
                      8,
                      ["value"]
                    ))
                  : W("", !0),
                a(
                  "button",
                  { class: "button-primary", onClick: U },
                  " LOG OUT "
                ),
              ]),
              a("div", Pe, [
                a("div", $e, [
                  a("div", Re, [
                    a(
                      "button",
                      {
                        class: "button-naked",
                        onClick: e[0] || (e[0] = ($) => (o.value = !o.value)),
                      },
                      [
                        a("div", null, [
                          a(
                            "img",
                            {
                              class: "profile-picture",
                              src:
                                ((h = t.value) == null
                                  ? void 0
                                  : h.pictureURL) ||
                                ((L = C(f).currentUser) == null
                                  ? void 0
                                  : L.photoURL) ||
                                "../assets/blank-profile-picture.png",
                              alt: "foto agente",
                            },
                            null,
                            8,
                            we
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  a("div", Le, [
                    a("div", Ie, [
                      Se,
                      a(
                        "input",
                        {
                          value: t.value.name,
                          type: "text",
                          class: "input-primary small-mobile dark",
                          onBlur: y,
                        },
                        null,
                        40,
                        Ae
                      ),
                      Be,
                      a("div", Ne, X(C(Y)[t.value.tier]), 1),
                    ]),
                  ]),
                  ((I = t.value) == null ? void 0 : I.tier) > 0
                    ? (l(),
                      i("div", Oe, [
                        a(
                          "img",
                          {
                            class: "tier-picture",
                            src: `/img/${C(Z)[t.value.tier]}`,
                            alt: "banner",
                          },
                          null,
                          8,
                          Ve
                        ),
                      ]))
                    : (l(), i("div", Me, Fe)),
                ]),
                g(
                  r,
                  {
                    modelValue: o.value,
                    "onUpdate:modelValue":
                      e[2] || (e[2] = ($) => (o.value = $)),
                    classes: "modal-container",
                  },
                  {
                    default: z(() => [
                      g(
                        ke,
                        {
                          user: t.value,
                          onHandleCloseModal:
                            e[1] || (e[1] = ($) => (o.value = !o.value)),
                          onHandleUpdatePicture: _,
                        },
                        null,
                        8,
                        ["user"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
              ]),
            ]));
      };
    },
  }),
  Qe = V(Ee, [["__scopeId", "data-v-b79fa5b6"]]);
export { Qe as default };

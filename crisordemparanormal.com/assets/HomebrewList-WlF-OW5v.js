import { T as de } from "./TabNav-p4cAvo-x.js";
import {
  C as ce,
  H as me,
  a as ve,
  b as he,
} from "./HomebrewItems-6-Ib_y8F.js";
import {
  d as H,
  O as _e,
  g as E,
  M as S,
  r as l,
  e as j,
  R as k,
  F as A,
  B as L,
  l as I,
  f as W,
  h as we,
  o as e,
  c as t,
  a as T,
  t as P,
  K as be,
  k as u,
  m as b,
  n as pe,
  q as Ce,
  D as fe,
  P as z,
  _ as x,
  w as ye,
  v as He,
  A as y,
  T as ke,
  Q as ge,
  L as $e,
} from "./index-vN3-fYvH.js";
import { C as Ae } from "./CreatureCard-3jHgev5R.js";
import { S as Le } from "./SearchInput-Dta_mKRd.js";
import { L as U } from "./LoadingView-k_Tp0sm7.js";
import { H as B, g as N, b as Ie } from "./firebase-0yyb2Old.js";
import { P as Te } from "./PrivateFeat-yFE7JtwT.js";
import { C as G } from "./CreatureForm-wgOj711w.js";
import { T as Ee } from "./ToastNotification-qKJt4qAM.js";
import "./PowerCard-sUX7e4OG.js";
import "./show-more-icon-VvUXKiHG.js";
import "./add-icon-fJ4uQHUZ.js";
import "./default-tJ6A0c0K.js";
import "./forms-8DDAOOVU.js";
import "./lodash-gzw5KmHd.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./RitualCard-YH3J2Aqe.js";
import "./d20-icon-vaz1En3o.js";
import "./DropdownSimple-8bCJNp2Z.js";
import "./CursedItemCard-N61tB9t5.js";
import "./blank-profile-picture-wMh28flS.js";
import "./creatureData-jLpja1fz.js";
import "./PictureModal-gf9J8dUZ.js";
import "./index.esm2017-Gxd8XF9H.js";
import "./v4-cyCr5FZV.js";
const Ue = { key: 0 },
  Pe = { key: 0 },
  Be = { key: 0 },
  Se = { class: "header-container" },
  xe = { key: 0 },
  Ne = { key: 1 },
  De = ["disabled"],
  Me = { key: 0, class: "search-container" },
  Re = { key: 1, class: "class-abilities-content" },
  Ve = { key: 2 },
  qe = { key: 0, class: "no-content" },
  Fe = { key: 1, class: "no-content" },
  Oe = { key: 1 },
  Qe = { key: 1 },
  Ke = { key: 1 },
  We = H({
    __name: "HomebrewCreaturesList",
    props: { homebrewList: Boolean },
    emits: ["handleAddCreature", "handleEditCreature", "handleCreateCreature"],
    setup(h, { emit: _ }) {
      _e((c) => ({ "31e9342b": Y.value }));
      const v = h,
        r = _,
        o = E(),
        a = S(),
        n = l(!0),
        s = l([]),
        d = l(""),
        i = l(!1),
        m = l(""),
        p = l(),
        C = l(0),
        g = l(!0),
        $ = l(0),
        J = (c) => r("handleAddCreature", c),
        X = (c) => r("handleEditCreature", c);
      j(async () => {
        var V, q, F, O;
        if (!o.currentUser) return;
        const c = k(a, "homebrewRituals"),
          w = A(
            c,
            L("uid", "==", (V = o.currentUser) == null ? void 0 : V.uid)
          ),
          f = await I(w),
          ae = k(a, "homebrewItems"),
          se = A(
            ae,
            L("uid", "==", (q = o.currentUser) == null ? void 0 : q.uid)
          ),
          re = await I(se),
          oe = k(a, "homebrewPowers"),
          ne = A(
            oe,
            L("uid", "==", (F = o.currentUser) == null ? void 0 : F.uid)
          ),
          ie = await I(ne),
          le = k(a, "homebrewCreatures"),
          ue = A(
            le,
            L("uid", "==", (O = o.currentUser) == null ? void 0 : O.uid)
          ),
          M = await I(ue);
        (C.value =
          re.docs.length + ie.docs.length + f.docs.length + M.docs.length),
          C.value >= B && (g.value = !1);
        const R = [];
        for (const Q of M.docs) {
          const K = Q.data();
          (K.id = Q.id), R.push(K);
        }
        (s.value = R), ($.value = await N(o.currentUser.uid)), (n.value = !1);
      });
      const Y = W(() => (v.homebrewList ? "0" : "0.5rem")),
        D = W(() =>
          s.value
            ? s.value
                .filter((c) => we(c.name, d.value))
                .sort((c, w) => c.name.localeCompare(w.name))
            : []
        ),
        Z = (c) => {
          (m.value = c),
            (i.value = !0),
            (p.value = s.value.findIndex((w) => w.id === m.value));
        },
        ee = () => {
          (m.value = ""), (i.value = !1), (p.value = void 0);
        },
        te = () => {
          fe(z(a, "homebrewCreatures", m.value)),
            s.value.splice(p.value, 1),
            (m.value = ""),
            (i.value = !1),
            (p.value = void 0),
            C.value--,
            C.value < B ? (g.value = !0) : (g.value = !1);
        };
      return (c, w) =>
        n.value
          ? (e(), t("div", Ke, [u(U)]))
          : (e(),
            t("div", Ue, [
              $.value >= 3
                ? (e(),
                  t("div", Pe, [
                    i.value
                      ? (e(),
                        t("div", Oe, [
                          u(
                            ce,
                            {
                              name: s.value[p.value].name,
                              onHandleCancel: ee,
                              onHandleConfirm: te,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : (e(),
                        t("div", Be, [
                          T("div", Se, [
                            $.value < 4
                              ? (e(),
                                t(
                                  "h3",
                                  xe,
                                  " Homebrew " + P(C.value) + "/" + P(be(B)),
                                  1
                                ))
                              : (e(),
                                t("h3", Ne, " Homebrew " + P(C.value), 1)),
                            T(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !g.value && $.value < 4,
                                onClick:
                                  w[0] ||
                                  (w[0] = (f) =>
                                    c.$emit("handleCreateCreature")),
                              },
                              " Add New ",
                              8,
                              De
                            ),
                          ]),
                          s.value.length > 0
                            ? (e(),
                              t("div", Me, [
                                u(
                                  Le,
                                  {
                                    value: d.value,
                                    dark: !h.homebrewList,
                                    onUpdate:
                                      w[1] || (w[1] = (f) => (d.value = f)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : b("", !0),
                          D.value.length > 0
                            ? (e(),
                              t("div", Re, [
                                (e(!0),
                                t(
                                  pe,
                                  null,
                                  Ce(
                                    D.value,
                                    (f) => (
                                      e(),
                                      t(
                                        "div",
                                        {
                                          key: f.id,
                                          class: "class-abilitie-card",
                                        },
                                        [
                                          u(
                                            Ae,
                                            {
                                              creature: f,
                                              "can-use": "",
                                              "can-share": "",
                                              onHandleDelete: Z,
                                              onHandleAdd: J,
                                              onHandleEdit: X,
                                            },
                                            null,
                                            8,
                                            ["creature"]
                                          ),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]))
                            : (e(),
                              t("div", Ve, [
                                s.value.length > 0
                                  ? (e(),
                                    t("div", qe, " No threat found "))
                                  : (e(),
                                    t(
                                      "div",
                                      Fe,
                                      " You have yet to create new threats "
                                    )),
                              ])),
                        ])),
                  ]))
                : (e(), t("div", Qe, [u(Te)])),
            ]));
    },
  }),
  je = x(We, [["__scopeId", "data-v-0c7f4afe"]]),
  ze = { key: 0 },
  Ge = { key: 1 },
  Je = H({
    __name: "HomebrewCreaturesCreate",
    props: { homebrewList: Boolean },
    emits: ["handleClose"],
    setup(h, { emit: _ }) {
      const v = _,
        r = E(),
        o = S(),
        a = l(!1),
        n = l({ message: "", type: "error", alive: !1, timeout: 0 }),
        s = async (i) => {
          var p;
          if (!r.currentUser) return;
          if (
            ((a.value = !0),
            (await N((p = r.currentUser) == null ? void 0 : p.uid)) < 4 &&
              !(await Ie(r.currentUser.uid)))
          ) {
            (a.value = !1),
              (n.value.message = "Homebrew limit reached"),
              (n.value.alive = !0);
            return;
          }
          (i.uid = r.currentUser.uid),
            await ge(k(o, "homebrewCreatures"), i),
            (a.value = !1),
            v("handleClose");
        };
      ye(
        () => n.value.alive,
        () => {
          n.value.alive === !0 &&
            (n.value.timeout = window.setTimeout(
              () => (n.value.alive = !1),
              3e3
            ));
        }
      );
      const d = () => {
        (n.value.alive = !1), clearTimeout(n.value.timeout);
      };
      return (i, m) =>
        a.value
          ? (e(), t("div", Ge, [u(U)]))
          : (e(),
            t("div", ze, [
              u(G, {
                "add-mode": "",
                onHandleEdit: s,
                onHandleClose: m[0] || (m[0] = (p) => i.$emit("handleClose")),
              }),
              u(
                ke,
                { name: "toast" },
                {
                  default: He(() => [
                    n.value.alive
                      ? (e(),
                        y(
                          Ee,
                          {
                            key: 0,
                            toast: n.value,
                            type: n.value.type,
                            onDismiss: d,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : b("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  Xe = { key: 0 },
  Ye = { key: 1 },
  Ze = H({
    __name: "HomebrewCreaturesEdit",
    props: { creature: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditCreatureSheet"],
    setup(h, { emit: _ }) {
      const v = _,
        r = E(),
        o = S(),
        a = l(!1),
        n = async (s) => {
          r.currentUser &&
            ((a.value = !0),
            await $e(z(o, "homebrewCreatures", s.id), s),
            (a.value = !1),
            v("handleClose"));
        };
      return (s, d) =>
        a.value
          ? (e(), t("div", Ye, [u(U)]))
          : (e(),
            t("div", Xe, [
              u(
                G,
                {
                  creature: s.creature,
                  onHandleEdit: n,
                  onHandleClose: d[0] || (d[0] = (i) => s.$emit("handleClose")),
                },
                null,
                8,
                ["creature"]
              ),
            ]));
    },
  }),
  et = { class: "class-abilities-container" },
  tt = { key: 0 },
  at = { key: 1 },
  st = { key: 2 },
  rt = { key: 0 },
  ot = H({
    __name: "HomebrewCreatures",
    props: { homebrewList: Boolean },
    emits: ["handleAddCreature"],
    setup(h, { emit: _ }) {
      const v = _,
        r = l(),
        o = l("list"),
        a = { list: "list", create: "create", edit: "edit" },
        n = (d) => v("handleAddCreature", d),
        s = (d) => {
          (r.value = d), (o.value = a.edit);
        };
      return (d, i) => (
        e(),
        t("div", et, [
          o.value === a.list
            ? (e(),
              t("div", tt, [
                u(
                  je,
                  {
                    "homebrew-list": h.homebrewList,
                    onHandleAddCreature: n,
                    onHandleEditCreature: s,
                    onHandleCreateCreature:
                      i[0] || (i[0] = (m) => (o.value = a.create)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : b("", !0),
          o.value === a.create
            ? (e(),
              t("div", at, [
                u(
                  Je,
                  {
                    "homebrew-list": h.homebrewList,
                    onHandleClose: i[1] || (i[1] = (m) => (o.value = a.list)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : b("", !0),
          o.value === a.edit
            ? (e(),
              t("div", st, [
                r.value
                  ? (e(),
                    t("div", rt, [
                      u(
                        Ze,
                        {
                          creature: r.value,
                          "homebrew-list": h.homebrewList,
                          onHandleClose:
                            i[2] || (i[2] = (m) => (o.value = a.list)),
                        },
                        null,
                        8,
                        ["creature", "homebrew-list"]
                      ),
                    ]))
                  : b("", !0),
              ]))
            : b("", !0),
        ])
      );
    },
  }),
  nt = x(ot, [["__scopeId", "data-v-203c4723"]]),
  it = { key: 0, class: "container" },
  lt = { class: "homebrew-page" },
  ut = { class: "tab-nav-container" },
  dt = { key: 1 },
  ct = H({
    __name: "MyHomebrewList",
    setup(h) {
      const _ = [
          { label: "ABILITIES", value: 0 },
          { label: "RITUALS", value: 1 },
          { label: "ITEMS", value: 2 },
          { label: "THREATS", value: 3 },
        ],
        v = E(),
        r = l(0),
        o = l(0),
        a = l(!0),
        n = (s) => (r.value = s);
      return (
        j(async () => {
          var s;
          v.currentUser &&
            ((o.value = await N((s = v.currentUser) == null ? void 0 : s.uid)),
            (a.value = !1));
        }),
        (s, d) =>
          a.value
            ? (e(), t("div", dt, [u(U, { "page-loading": "" })]))
            : (e(),
              t("div", it, [
                T("div", lt, [
                  T("div", ut, [
                    u(
                      de,
                      {
                        "tab-options": _,
                        "current-tab": r.value,
                        onHandleNavigation: n,
                      },
                      null,
                      8,
                      ["current-tab"]
                    ),
                  ]),
                  r.value === 0
                    ? (e(), y(me, { key: 0, "homebrew-list": "" }))
                    : b("", !0),
                  r.value === 1
                    ? (e(), y(ve, { key: 1, "homebrew-list": "" }))
                    : b("", !0),
                  r.value === 2
                    ? (e(), y(he, { key: 2, "homebrew-list": "" }))
                    : b("", !0),
                  r.value === 3
                    ? (e(), y(nt, { key: 3, "homebrew-list": "" }))
                    : b("", !0),
                ]),
              ]))
      );
    },
  }),
  mt = x(ct, [["__scopeId", "data-v-f1fa1eae"]]),
  Rt = H({
    __name: "HomebrewList",
    setup(h) {
      return (_, v) => (e(), y(mt));
    },
  });
export { Rt as default };

import { T as de } from "./TabNav-0k8MUq4h.js";
import {
  C as ce,
  H as me,
  a as ve,
  b as he,
} from "./HomebrewItems-DnXyWwLV.js";
import {
  d as H,
  Q as _e,
  g as E,
  M as B,
  r as l,
  e as j,
  R as k,
  F as A,
  B as I,
  l as L,
  f as W,
  h as we,
  o as e,
  c as t,
  a as T,
  t as P,
  L as be,
  k as u,
  m as b,
  n as pe,
  q as Ce,
  I as fe,
  P as G,
  _ as N,
  w as ye,
  x as He,
  v as y,
  T as ke,
  z as ge,
  N as $e,
} from "./index-QwuuguuZ.js";
import { C as Ae } from "./CreatureCard-s_WgZwXj.js";
import { S as Ie } from "./SearchInput-Vr9n0nUP.js";
import { L as U } from "./LoadingView-BDyk9qee.js";
import { H as x, g as S, b as Le } from "./firebase-UUb4pQvs.js";
import { P as Te } from "./PrivateFeat-2NQL7iKE.js";
import { C as J } from "./CreatureForm-WPZOCJnR.js";
import { T as Ee } from "./ToastNotification-2J6AO8ev.js";
import "./PowerCard-beWm0GIY.js";
import "./show-more-icon-VvUXKiHG.js";
import "./add-icon-fJ4uQHUZ.js";
import "./default-tJ6A0c0K.js";
import "./forms-8DDAOOVU.js";
import "./lodash-gzw5KmHd.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./RitualCard-888T3wVY.js";
import "./d20-icon-vaz1En3o.js";
import "./DropdownSimple-O-H8dkm7.js";
import "./CursedItemCard-CUwaY77V.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./creatureData-ozdxpDUT.js";
import "./blank-profile-picture-wMh28flS.js";
import "./PictureModal-TrL67c-c.js";
import "./index.esm2017-JfeAG2s4.js";
import "./v4-cyCr5FZV.js";
const Ue = { key: 0 },
  Pe = { key: 0 },
  xe = { key: 0 },
  Be = { class: "header-container" },
  Ne = { key: 0 },
  Se = { key: 1 },
  De = ["disabled"],
  Me = { key: 0, class: "search-container" },
  Re = { key: 1, class: "class-abilities-content" },
  Ve = { key: 2 },
  qe = { key: 0, class: "no-content" },
  Fe = { key: 1, class: "no-content" },
  Oe = { key: 1 },
  Qe = { key: 1 },
  ze = { key: 1 },
  We = H({
    __name: "HomebrewCreaturesList",
    props: { homebrewList: Boolean },
    emits: ["handleAddCreature", "handleEditCreature", "handleCreateCreature"],
    setup(h, { emit: _ }) {
      _e((c) => ({ "31e9342b": Y.value }));
      const v = h,
        r = _,
        o = E(),
        a = B(),
        n = l(!0),
        s = l([]),
        d = l(""),
        i = l(!1),
        m = l(""),
        p = l(),
        C = l(0),
        g = l(!0),
        $ = l(0),
        K = (c) => r("handleAddCreature", c),
        X = (c) => r("handleEditCreature", c);
      j(async () => {
        var V, q, F, O;
        if (!o.currentUser) return;
        const c = k(a, "homebrewRituals"),
          w = A(
            c,
            I("uid", "==", (V = o.currentUser) == null ? void 0 : V.uid)
          ),
          f = await L(w),
          ae = k(a, "homebrewItems"),
          se = A(
            ae,
            I("uid", "==", (q = o.currentUser) == null ? void 0 : q.uid)
          ),
          re = await L(se),
          oe = k(a, "homebrewPowers"),
          ne = A(
            oe,
            I("uid", "==", (F = o.currentUser) == null ? void 0 : F.uid)
          ),
          ie = await L(ne),
          le = k(a, "homebrewCreatures"),
          ue = A(
            le,
            I("uid", "==", (O = o.currentUser) == null ? void 0 : O.uid)
          ),
          M = await L(ue);
        (C.value =
          re.docs.length + ie.docs.length + f.docs.length + M.docs.length),
          C.value >= x && (g.value = !1);
        const R = [];
        for (const Q of M.docs) {
          const z = Q.data();
          (z.id = Q.id), R.push(z);
        }
        (s.value = R), ($.value = await S(o.currentUser.uid)), (n.value = !1);
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
          fe(G(a, "homebrewCreatures", m.value)),
            s.value.splice(p.value, 1),
            (m.value = ""),
            (i.value = !1),
            (p.value = void 0),
            C.value--,
            C.value < x ? (g.value = !0) : (g.value = !1);
        };
      return (c, w) =>
        n.value
          ? (e(), t("div", ze, [u(U)]))
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
                        t("div", xe, [
                          T("div", Be, [
                            $.value < 4
                              ? (e(),
                                t(
                                  "h3",
                                  Ne,
                                  " Homebrew " + P(C.value) + "/" + P(be(x)),
                                  1
                                ))
                              : (e(),
                                t("h3", Se, " Homebrew " + P(C.value), 1)),
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
                                  Ie,
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
                                              onHandleAdd: K,
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
  je = N(We, [["__scopeId", "data-v-0c7f4afe"]]),
  Ge = { key: 0 },
  Je = { key: 1 },
  Ke = H({
    __name: "HomebrewCreaturesCreate",
    props: { homebrewList: Boolean },
    emits: ["handleClose"],
    setup(h, { emit: _ }) {
      const v = _,
        r = E(),
        o = B(),
        a = l(!1),
        n = l({ message: "", type: "error", alive: !1, timeout: 0 }),
        s = async (i) => {
          var p;
          if (!r.currentUser) return;
          if (
            ((a.value = !0),
            (await S((p = r.currentUser) == null ? void 0 : p.uid)) < 4 &&
              !(await Le(r.currentUser.uid)))
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
          ? (e(), t("div", Je, [u(U)]))
          : (e(),
            t("div", Ge, [
              u(J, {
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
        o = B(),
        a = l(!1),
        n = async (s) => {
          r.currentUser &&
            ((a.value = !0),
            await $e(G(o, "homebrewCreatures", s.id), s),
            (a.value = !1),
            v("handleClose"));
        };
      return (s, d) =>
        a.value
          ? (e(), t("div", Ye, [u(U)]))
          : (e(),
            t("div", Xe, [
              u(
                J,
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
                  Ke,
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
  nt = N(ot, [["__scopeId", "data-v-203c4723"]]),
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
            ((o.value = await S((s = v.currentUser) == null ? void 0 : s.uid)),
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
  mt = N(ct, [["__scopeId", "data-v-f1fa1eae"]]),
  qt = H({
    __name: "HomebrewList",
    setup(h) {
      return (_, v) => (e(), y(mt));
    },
  });
export { qt as default };

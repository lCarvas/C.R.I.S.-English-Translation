import { T as de } from "./TabNav-02yrV6SQ.js";
import {
  C as ce,
  H as me,
  a as ve,
  b as he,
} from "./HomebrewItems-B4V-c5O4.js";
import {
  d as H,
  Q as _e,
  g as T,
  M as N,
  r as l,
  e as j,
  R as k,
  F as $,
  B as A,
  l as I,
  f as W,
  h as pe,
  o as e,
  c as s,
  a as L,
  t as x,
  L as we,
  k as c,
  m as w,
  n as be,
  q as Ce,
  I as fe,
  P as G,
  _ as S,
  w as ye,
  x as He,
  v as y,
  T as ke,
  z as ge,
  N as $e,
} from "./index-zHTPDNNN.js";
import { C as Ae } from "./CreatureCard-GFAmHv5O.js";
import { S as Ie } from "./SearchInput-noFEAZsq.js";
import { L as E } from "./LoadingView-1IRnYVDG.js";
import { H as B, g as P, b as Le } from "./firebase-E9rrJROo.js";
import { C as J } from "./CreatureForm-V58UiJWt.js";
import { T as Te } from "./ToastNotification-zJyrOyEq.js";
import "./PowerCard-vQpPz3em.js";
import "./show-more-icon-VvUXKiHG.js";
import "./add-icon-fJ4uQHUZ.js";
import "./default-FmxCqAN8.js";
import "./forms-8DDAOOVU.js";
import "./SwitchButtonBool-etrheqHp.js";
import "./lodash-gzw5KmHd.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./PictureModal-tMBR_y6C.js";
import "./index.esm2017-tfIAIMr4.js";
import "./v4-cyCr5FZV.js";
import "./RitualCard-M75cbSgv.js";
import "./d20-icon-vaz1En3o.js";
import "./DropdownSimple-n6ql1xHs.js";
import "./CursedItemCard-8kPqmZKR.js";
import "./CardSource-B8Pq3XUj.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./creatureData-ozdxpDUT.js";
import "./blank-profile-picture-wMh28flS.js";
const Ee = { key: 0 },
  Ue = { key: 0 },
  xe = { class: "header-container" },
  Be = { key: 0 },
  Ne = { key: 1 },
  Se = ["disabled"],
  Pe = { key: 0, class: "search-container" },
  De = { key: 1, class: "class-abilities-content" },
  Me = { key: 2 },
  Re = { key: 0, class: "no-content" },
  Ve = { key: 1, class: "no-content" },
  qe = { key: 1 },
  Fe = { key: 1 },
  ze = H({
    __name: "HomebrewCreaturesList",
    props: { homebrewList: Boolean },
    emits: ["handleAddCreature", "handleEditCreature", "handleCreateCreature"],
    setup(h, { emit: _ }) {
      _e((d) => ({ f0d60ed6: Y.value }));
      const v = h,
        r = _,
        o = T(),
        t = N(),
        n = l(!0),
        a = l([]),
        u = l(""),
        i = l(!1),
        m = l(""),
        b = l(),
        C = l(0),
        g = l(!0),
        U = l(0),
        K = (d) => r("handleAddCreature", d),
        X = (d) => r("handleEditCreature", d);
      j(async () => {
        var V, q, F, z;
        if (!o.currentUser) return;
        const d = k(t, "homebrewRituals"),
          p = $(
            d,
            A("uid", "==", (V = o.currentUser) == null ? void 0 : V.uid)
          ),
          f = await I(p),
          ae = k(t, "homebrewItems"),
          se = $(
            ae,
            A("uid", "==", (q = o.currentUser) == null ? void 0 : q.uid)
          ),
          re = await I(se),
          oe = k(t, "homebrewPowers"),
          ne = $(
            oe,
            A("uid", "==", (F = o.currentUser) == null ? void 0 : F.uid)
          ),
          ie = await I(ne),
          le = k(t, "homebrewCreatures"),
          ue = $(
            le,
            A("uid", "==", (z = o.currentUser) == null ? void 0 : z.uid)
          ),
          M = await I(ue);
        (C.value =
          re.docs.length + ie.docs.length + f.docs.length + M.docs.length),
          C.value >= B && (g.value = !1);
        const R = [];
        for (const O of M.docs) {
          const Q = O.data();
          (Q.id = O.id), R.push(Q);
        }
        (a.value = R), (U.value = await P(o.currentUser.uid)), (n.value = !1);
      });
      const Y = W(() => (v.homebrewList ? "0" : "0.5rem")),
        D = W(() =>
          a.value
            ? a.value
                .filter((d) => pe(d.name, u.value))
                .sort((d, p) => d.name.localeCompare(p.name))
            : []
        ),
        Z = (d) => {
          (m.value = d),
            (i.value = !0),
            (b.value = a.value.findIndex((p) => p.id === m.value));
        },
        ee = () => {
          (m.value = ""), (i.value = !1), (b.value = void 0);
        },
        te = () => {
          fe(G(t, "homebrewCreatures", m.value)),
            a.value.splice(b.value, 1),
            (m.value = ""),
            (i.value = !1),
            (b.value = void 0),
            C.value--,
            C.value < B ? (g.value = !0) : (g.value = !1);
        };
      return (d, p) =>
        n.value
          ? (e(), s("div", Fe, [c(E)]))
          : (e(),
            s("div", Ee, [
              i.value
                ? (e(),
                  s("div", qe, [
                    c(
                      ce,
                      {
                        name: a.value[b.value].name,
                        onHandleCancel: ee,
                        onHandleConfirm: te,
                      },
                      null,
                      8,
                      ["name"]
                    ),
                  ]))
                : (e(),
                  s("div", Ue, [
                    L("div", xe, [
                      U.value < 4
                        ? (e(),
                          s(
                            "h3",
                            Be,
                            " Homebrew " + x(C.value) + "/" + x(we(B)),
                            1
                          ))
                        : (e(), s("h3", Ne, " Homebrew " + x(C.value), 1)),
                      L(
                        "button",
                        {
                          class: "button-primary new-button",
                          disabled: !g.value && U.value < 4,
                          onClick:
                            p[0] ||
                            (p[0] = (f) => d.$emit("handleCreateCreature")),
                        },
                        " Add New ",
                        8,
                        Se
                      ),
                    ]),
                    a.value.length > 0
                      ? (e(),
                        s("div", Pe, [
                          c(
                            Ie,
                            {
                              value: u.value,
                              dark: !h.homebrewList,
                              onUpdate: p[1] || (p[1] = (f) => (u.value = f)),
                            },
                            null,
                            8,
                            ["value", "dark"]
                          ),
                        ]))
                      : w("", !0),
                    D.value.length > 0
                      ? (e(),
                        s("div", De, [
                          (e(!0),
                          s(
                            be,
                            null,
                            Ce(
                              D.value,
                              (f) => (
                                e(),
                                s(
                                  "div",
                                  { key: f.id, class: "class-abilitie-card" },
                                  [
                                    c(
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
                        s("div", Me, [
                          a.value.length > 0
                            ? (e(), s("div", Re, " No threat found "))
                            : (e(),
                              s(
                                "div",
                                Ve,
                                " You have yet to create a new threat "
                              )),
                        ])),
                  ])),
            ]));
    },
  }),
  Oe = S(ze, [["__scopeId", "data-v-dfc422f7"]]),
  Qe = { key: 0 },
  We = { key: 1 },
  je = H({
    __name: "HomebrewCreaturesCreate",
    props: { homebrewList: Boolean },
    emits: ["handleClose"],
    setup(h, { emit: _ }) {
      const v = _,
        r = T(),
        o = N(),
        t = l(!1),
        n = l({ message: "", type: "error", alive: !1, timeout: 0 }),
        a = async (i) => {
          var b;
          if (!r.currentUser) return;
          if (
            ((t.value = !0),
            (await P((b = r.currentUser) == null ? void 0 : b.uid)) < 4 &&
              !(await Le(r.currentUser.uid)))
          ) {
            (t.value = !1),
              (n.value.message = "Homebrew limit reached"),
              (n.value.alive = !0);
            return;
          }
          (i.uid = r.currentUser.uid),
            await ge(k(o, "homebrewCreatures"), i),
            (t.value = !1),
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
      const u = () => {
        (n.value.alive = !1), clearTimeout(n.value.timeout);
      };
      return (i, m) =>
        t.value
          ? (e(), s("div", We, [c(E)]))
          : (e(),
            s("div", Qe, [
              c(J, {
                "add-mode": "",
                onHandleEdit: a,
                onHandleClose: m[0] || (m[0] = (b) => i.$emit("handleClose")),
              }),
              c(
                ke,
                { name: "toast" },
                {
                  default: He(() => [
                    n.value.alive
                      ? (e(),
                        y(
                          Te,
                          {
                            key: 0,
                            toast: n.value,
                            type: n.value.type,
                            onDismiss: u,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : w("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  Ge = { key: 0 },
  Je = { key: 1 },
  Ke = H({
    __name: "HomebrewCreaturesEdit",
    props: { creature: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditCreatureSheet"],
    setup(h, { emit: _ }) {
      const v = _,
        r = T(),
        o = N(),
        t = l(!1),
        n = async (a) => {
          r.currentUser &&
            ((t.value = !0),
            await $e(G(o, "homebrewCreatures", a.id), a),
            (t.value = !1),
            v("handleClose"));
        };
      return (a, u) =>
        t.value
          ? (e(), s("div", Je, [c(E)]))
          : (e(),
            s("div", Ge, [
              c(
                J,
                {
                  creature: a.creature,
                  onHandleEdit: n,
                  onHandleClose: u[0] || (u[0] = (i) => a.$emit("handleClose")),
                },
                null,
                8,
                ["creature"]
              ),
            ]));
    },
  }),
  Xe = { class: "class-abilities-container" },
  Ye = { key: 0 },
  Ze = { key: 1 },
  et = { key: 2 },
  tt = { key: 0 },
  at = H({
    __name: "HomebrewCreatures",
    props: { homebrewList: Boolean },
    emits: ["handleAddCreature"],
    setup(h, { emit: _ }) {
      const v = _,
        r = l(),
        o = l("list"),
        t = { list: "list", create: "create", edit: "edit" },
        n = (u) => v("handleAddCreature", u),
        a = (u) => {
          (r.value = u), (o.value = t.edit);
        };
      return (u, i) => (
        e(),
        s("div", Xe, [
          o.value === t.list
            ? (e(),
              s("div", Ye, [
                c(
                  Oe,
                  {
                    "homebrew-list": h.homebrewList,
                    onHandleAddCreature: n,
                    onHandleEditCreature: a,
                    onHandleCreateCreature:
                      i[0] || (i[0] = (m) => (o.value = t.create)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : w("", !0),
          o.value === t.create
            ? (e(),
              s("div", Ze, [
                c(
                  je,
                  {
                    "homebrew-list": h.homebrewList,
                    onHandleClose: i[1] || (i[1] = (m) => (o.value = t.list)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : w("", !0),
          o.value === t.edit
            ? (e(),
              s("div", et, [
                r.value
                  ? (e(),
                    s("div", tt, [
                      c(
                        Ke,
                        {
                          creature: r.value,
                          "homebrew-list": h.homebrewList,
                          onHandleClose:
                            i[2] || (i[2] = (m) => (o.value = t.list)),
                        },
                        null,
                        8,
                        ["creature", "homebrew-list"]
                      ),
                    ]))
                  : w("", !0),
              ]))
            : w("", !0),
        ])
      );
    },
  }),
  st = S(at, [["__scopeId", "data-v-203c4723"]]),
  rt = { key: 0, class: "container" },
  ot = { class: "homebrew-page" },
  nt = { class: "tab-nav-container" },
  it = { key: 1 },
  lt = H({
    __name: "MyHomebrewList",
    setup(h) {
      const _ = [
          { label: "THREATS", value: 0 },
          { label: "ABILITIES", value: 1 },
          { label: "RITUALS", value: 2 },
          { label: "ITEMS", value: 3 },
        ],
        v = T(),
        r = l(0),
        o = l(0),
        t = l(!0),
        n = (a) => (r.value = a);
      return (
        j(async () => {
          var a;
          v.currentUser &&
            ((o.value = await P((a = v.currentUser) == null ? void 0 : a.uid)),
            (t.value = !1));
        }),
        (a, u) =>
          t.value
            ? (e(), s("div", it, [c(E, { "page-loading": "" })]))
            : (e(),
              s("div", rt, [
                L("div", ot, [
                  L("div", nt, [
                    c(
                      de,
                      {
                        "tab-options": _,
                        "current-tab": r.value,
                        "font-size-big": "",
                        onHandleNavigation: n,
                      },
                      null,
                      8,
                      ["current-tab"]
                    ),
                  ]),
                  r.value === 0
                    ? (e(), y(st, { key: 0, "homebrew-list": "" }))
                    : w("", !0),
                  r.value === 1
                    ? (e(), y(me, { key: 1, "homebrew-list": "" }))
                    : w("", !0),
                  r.value === 2
                    ? (e(), y(ve, { key: 2, "homebrew-list": "" }))
                    : w("", !0),
                  r.value === 3
                    ? (e(), y(he, { key: 3, "homebrew-list": "" }))
                    : w("", !0),
                ]),
              ]))
      );
    },
  }),
  ut = S(lt, [["__scopeId", "data-v-5a13ca15"]]),
  Rt = H({
    __name: "HomebrewList",
    setup(h) {
      return (_, v) => (e(), y(ut));
    },
  });
export { Rt as default };

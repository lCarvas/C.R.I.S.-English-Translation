import {
  c as S,
  A as y,
  K as T,
  E as w,
  D as k,
  B as N,
  F as B,
  R as D,
  T as L,
} from "./creatures-D2g61G-L.js";
import { c as x } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { C as E } from "./CreatureCard-BE80EGup.js";
import { T as F } from "./TabNav-j_803Ij7.js";
import {
  d as I,
  g as M,
  r as s,
  e as V,
  f as b,
  h as U,
  o as u,
  c,
  a as n,
  k as m,
  v as A,
  m as H,
  n as R,
  q as z,
  p as K,
  b as j,
  H as C,
  _ as q,
} from "./index-4umHKyHu.js";
import { g as O } from "./firebase-L_tEBjIs.js";
import { L as G } from "./LoadingView-kkrh3aH3.js";
import { b as l } from "./creatureData-ozdxpDUT.js";
import { S as J } from "./SearchInput-5qWSH1_X.js";
import { S as Q } from "./SourcesNavigation-hkMXy3yw.js";
import { m as W } from "./marcasFragmentadas-oZlJGZUl.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
const X = (i) => (K("data-v-d718b6bb"), (i = i()), j(), i),
  Y = { key: 0 },
  Z = X(() =>
    n(
      "div",
      { class: "info-container" },
      [
        C(" This page is for information consultation of the sheets. "),
        n("br"),
        C(
          "To use the sheet in game, you need to go to the campaign page, create an encounter and add the sheet to the encounter. "
        ),
      ],
      -1
    )
  ),
  $ = { class: "creatures-list-container" },
  aa = { class: "tab-nav-container" },
  ea = { class: "creature-cards-container" },
  ra = { key: 1 },
  oa = I({
    __name: "CreaturesList",
    setup(i) {
      const g = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
        ],
        v = M(),
        f = s(!0),
        h = s(0),
        a = s(0),
        d = s(""),
        e = s("ordemParanormal"),
        p = s([]);
      V(async () => {
        v.currentUser &&
          ((h.value = await O(v.currentUser.uid)),
          (p.value = await W()),
          (f.value = !1));
      });
      const _ = b(() => {
          let r = [];
          return (
            e.value === "ordemParanormal" && a.value === 0 && (r = y),
            e.value === "ordemParanormal" && a.value === 1 && (r = T),
            e.value === "ordemParanormal" && a.value === 2 && (r = w),
            e.value === "ordemParanormal" && a.value === 3 && (r = k),
            e.value === "ordemParanormal" && a.value === 4 && (r = N),
            e.value === "ordemParanormal" && a.value === 5 && (r = B),
            e.value === "ordemParanormal" && a.value === 6 && (r = D),
            e.value === "tocaDosMonstros" && (r = L),
            e.value === "cultoDaCriacao" && (r = x),
            e.value === "marcasFragmentadas" && (r = p.value),
            e.value === "comunidade" &&
              (r = S.sort((o, t) => o.name.localeCompare(t.name))),
            r.filter((o) => U(o.name, d.value))
          );
        }),
        P = b(() =>
          a.value === 1
            ? l.conhecimento.color
            : a.value === 2
            ? l.energia.color
            : a.value === 3
            ? l.morte.color
            : a.value === 4
            ? l.sangue.color
            : a.value === 5
            ? l.medo.color
            : a.value === 6
            ? l.realidade.color
            : "var(--color-primary)"
        );
      return (r, o) =>
        f.value
          ? (u(), c("div", ra, [m(G)]))
          : (u(),
            c("div", Y, [
              Z,
              n("div", $, [
                m(
                  Q,
                  {
                    "current-source": e.value,
                    "show-toca-dos-monstros": "",
                    "show-culto-da-criacao": "",
                    "show-marcas-fragmentadas": "",
                    "show-comunidade": "",
                    onHandleChangeCurrentSource:
                      o[0] || (o[0] = (t) => (e.value = t)),
                  },
                  null,
                  8,
                  ["current-source"]
                ),
                n("div", aa, [
                  e.value === "ordemParanormal"
                    ? (u(),
                      A(
                        F,
                        {
                          key: 0,
                          "current-tab": a.value,
                          "tab-options": g,
                          "alt-color": P.value,
                          "font-size-big": "",
                          onHandleNavigation:
                            o[1] || (o[1] = (t) => (a.value = t)),
                        },
                        null,
                        8,
                        ["current-tab", "alt-color"]
                      ))
                    : H("", !0),
                  m(
                    J,
                    {
                      value: d.value,
                      onUpdate: o[2] || (o[2] = (t) => (d.value = t)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]),
                n("div", ea, [
                  (u(!0),
                  c(
                    R,
                    null,
                    z(
                      _.value,
                      (t) => (
                        u(),
                        c("div", { key: t.id, class: "align-creatures" }, [
                          m(E, { creature: t, "is-default": "" }, null, 8, [
                            "creature",
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]));
    },
  }),
  Ca = q(oa, [["__scopeId", "data-v-d718b6bb"]]);
export { Ca as default };

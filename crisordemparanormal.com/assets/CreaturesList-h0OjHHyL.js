import {
  c as P,
  A as S,
  K as y,
  E as T,
  D as k,
  B as w,
  F as N,
  R as B,
  T as D,
} from "./creatures-3PDYyihL.js";
import { c as L } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { C as x } from "./CreatureCard-CSL04LIH.js";
import { T as E } from "./TabNav-hmTs2qVs.js";
import {
  d as F,
  g as I,
  r as l,
  e as M,
  f as p,
  h as V,
  o as u,
  c,
  a as n,
  k as m,
  v as U,
  m as A,
  n as H,
  q as R,
  p as z,
  b as K,
  H as C,
  _ as j,
} from "./index-y5xotY6D.js";
import { g as q } from "./firebase-EbSNH8SK.js";
import { L as O } from "./LoadingView-ZLD11fC3.js";
import { b as s } from "./creatureData-ozdxpDUT.js";
import { S as G } from "./SearchInput-3Ri4XWJo.js";
import { S as J } from "./SourcesNavigation-yVGJmsen.js";
import { m as Q } from "./marcasFragmentadas-KD4kpdFJ.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
const W = (i) => (z("data-v-ac855a96"), (i = i()), K(), i),
  X = { key: 0 },
  Y = W(() =>
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
  Z = { class: "creatures-list-container" },
  $ = { class: "tab-nav-container" },
  aa = { class: "creature-cards-container" },
  ea = { key: 1 },
  ra = F({
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
        v = I(),
        f = l(!0),
        b = l(0),
        a = l(0),
        d = l(""),
        e = l("ordemParanormal");
      M(async () => {
        v.currentUser &&
          ((b.value = await q(v.currentUser.uid)), (f.value = !1));
      });
      const h = p(() => {
          let r = [];
          return (
            e.value === "ordemParanormal" && a.value === 0 && (r = S),
            e.value === "ordemParanormal" && a.value === 1 && (r = y),
            e.value === "ordemParanormal" && a.value === 2 && (r = T),
            e.value === "ordemParanormal" && a.value === 3 && (r = k),
            e.value === "ordemParanormal" && a.value === 4 && (r = w),
            e.value === "ordemParanormal" && a.value === 5 && (r = N),
            e.value === "ordemParanormal" && a.value === 6 && (r = B),
            e.value === "tocaDosMonstros" && (r = D),
            e.value === "cultoDaCriacao" && (r = L),
            e.value === "marcasFragmentadas" && (r = Q),
            e.value === "comunidade" &&
              (r = P.sort((o, t) => o.name.localeCompare(t.name))),
            r.filter((o) => V(o.name, d.value))
          );
        }),
        _ = p(() =>
          a.value === 1
            ? s.conhecimento.color
            : a.value === 2
            ? s.energia.color
            : a.value === 3
            ? s.morte.color
            : a.value === 4
            ? s.sangue.color
            : a.value === 5
            ? s.medo.color
            : a.value === 6
            ? s.realidade.color
            : "var(--color-primary)"
        );
      return (r, o) =>
        f.value
          ? (u(), c("div", ea, [m(O)]))
          : (u(),
            c("div", X, [
              Y,
              n("div", Z, [
                m(
                  J,
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
                n("div", $, [
                  e.value === "ordemParanormal"
                    ? (u(),
                      U(
                        E,
                        {
                          key: 0,
                          "current-tab": a.value,
                          "tab-options": g,
                          "alt-color": _.value,
                          "font-size-big": "",
                          onHandleNavigation:
                            o[1] || (o[1] = (t) => (a.value = t)),
                        },
                        null,
                        8,
                        ["current-tab", "alt-color"]
                      ))
                    : A("", !0),
                  m(
                    G,
                    {
                      value: d.value,
                      onUpdate: o[2] || (o[2] = (t) => (d.value = t)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]),
                n("div", aa, [
                  (u(!0),
                  c(
                    H,
                    null,
                    R(
                      h.value,
                      (t) => (
                        u(),
                        c("div", { key: t.id, class: "align-creatures" }, [
                          m(x, { creature: t, "is-default": "" }, null, 8, [
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
  Ca = j(ra, [["__scopeId", "data-v-ac855a96"]]);
export { Ca as default };

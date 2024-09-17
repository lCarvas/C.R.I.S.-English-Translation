import {
  A as P,
  K as S,
  E as y,
  D as T,
  B as k,
  F as w,
  R as N,
  T as B,
  c as D,
} from "./creatures-7BKS8eWn.js";
import { c as L } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { C as x } from "./CreatureCard-7zsaomxO.js";
import { T as E } from "./TabNav-J49e2lVX.js";
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
} from "./index-4XNPBkfT.js";
import { g as q } from "./firebase-fsM9W8Ok.js";
import { L as O } from "./LoadingView-F-Df8Cc9.js";
import { b as s } from "./creatureData-ozdxpDUT.js";
import { S as G } from "./SearchInput-meU_8poS.js";
import { S as J } from "./SourcesNavigation-XWNobkYr.js";
import { m as Q } from "./marcasFragmentadas-KD4kpdFJ.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
const W = (i) => (z("data-v-9acb32e9"), (i = i()), K(), i),
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
            e.value === "ordemParanormal" && a.value === 0 && (r = P),
            e.value === "ordemParanormal" && a.value === 1 && (r = S),
            e.value === "ordemParanormal" && a.value === 2 && (r = y),
            e.value === "ordemParanormal" && a.value === 3 && (r = T),
            e.value === "ordemParanormal" && a.value === 4 && (r = k),
            e.value === "ordemParanormal" && a.value === 5 && (r = w),
            e.value === "ordemParanormal" && a.value === 6 && (r = N),
            e.value === "tocaDosMonstros" && (r = B),
            e.value === "cultoDaCriacao" && (r = L),
            e.value === "marcasFragmentadas" && (r = Q),
            e.value === "comunidade" && (r = D),
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
  Ca = j(ra, [["__scopeId", "data-v-9acb32e9"]]);
export { Ca as default };

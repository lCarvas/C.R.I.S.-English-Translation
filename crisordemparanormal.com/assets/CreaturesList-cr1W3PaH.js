import {
  c as S,
  A as y,
  K as T,
  E as k,
  D as N,
  B,
  F as D,
  R as L,
  T as x,
} from "./creatures-6PobCC31.js";
import { c as E } from "./cultoDaCriacaoContent-lXBbI8k2.js";
import { C as F } from "./CreatureCard-5_-LWzyE.js";
import { T as I } from "./TabNav-GB7V06r-.js";
import {
  d as M,
  g as V,
  r as s,
  e as U,
  f as C,
  h as A,
  o as u,
  c,
  a as n,
  k as m,
  v as H,
  m as R,
  n as z,
  q as K,
  p as j,
  b as q,
  H as h,
  _ as G,
} from "./index-fqOV2Os2.js";
import { g as O } from "./firebase-lVLc_m94.js";
import { L as J } from "./LoadingView-H3Q1po81.js";
import { c as l } from "./creatureData-R8saWVyd.js";
import { S as Q } from "./SearchInput-n9LbYIZb.js";
import { S as W } from "./SourcesNavigation-okweyYJS.js";
import { m as X } from "./marcasFragmentadas-ZyBgiAnp.js";
import { g as Y } from "./parceitosData-pYeB3vP6.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./lodash-gzw5KmHd.js";
import "./_commonjsHelpers-4gQjN7DL.js";
const Z = (i) => (j("data-v-caf23d7a"), (i = i()), q(), i),
  $ = { key: 0 },
  aa = Z(() =>
    n(
      "div",
      { class: "info-container" },
      [
        h(" This page is for information consultation of the sheets. "),
        n("br"),
        h(
          "To use the sheet in game, you need to go to the campaign page, create an encounter and add the sheet to the encounter. "
        ),
      ],
      -1
    )
  ),
  ea = { class: "creatures-list-container" },
  ra = { class: "tab-nav-container" },
  oa = { class: "creature-cards-container" },
  ta = { key: 1 },
  sa = M({
    __name: "CreaturesList",
    setup(i) {
      const b = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
        ],
        v = V(),
        f = s(!0),
        _ = s(0),
        a = s(0),
        d = s(""),
        e = s("ordemParanormal"),
        p = s([]),
        g = s([]);
      U(async () => {
        v.currentUser &&
          ((_.value = await O(v.currentUser.uid)),
          (p.value = await X()),
          (g.value = await Y()),
          (f.value = !1));
      });
      const P = C(() => {
          let r = [];
          return (
            e.value === "ordemParanormal" && a.value === 0 && (r = y),
            e.value === "ordemParanormal" && a.value === 1 && (r = T),
            e.value === "ordemParanormal" && a.value === 2 && (r = k),
            e.value === "ordemParanormal" && a.value === 3 && (r = N),
            e.value === "ordemParanormal" && a.value === 4 && (r = B),
            e.value === "ordemParanormal" && a.value === 5 && (r = D),
            e.value === "ordemParanormal" && a.value === 6 && (r = L),
            e.value === "tocaDosMonstros" && (r = x),
            e.value === "cultoDaCriacao" && (r = E),
            e.value === "marcasFragmentadas" && (r = p.value),
            e.value === "grimorioParanormal" && (r = g.value),
            e.value === "comunidade" &&
              (r = S.sort((o, t) => o.name.localeCompare(t.name))),
            r.filter((o) => A(o.name, d.value))
          );
        }),
        w = C(() =>
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
          ? (u(), c("div", ta, [m(J)]))
          : (u(),
            c("div", $, [
              aa,
              n("div", ea, [
                m(
                  W,
                  {
                    "current-source": e.value,
                    "show-toca-dos-monstros": "",
                    "show-culto-da-criacao": "",
                    "show-marcas-fragmentadas": "",
                    "show-grimorio-paranormal": "",
                    "show-comunidade": "",
                    onHandleChangeCurrentSource:
                      o[0] || (o[0] = (t) => (e.value = t)),
                  },
                  null,
                  8,
                  ["current-source"]
                ),
                n("div", ra, [
                  e.value === "ordemParanormal"
                    ? (u(),
                      H(
                        I,
                        {
                          key: 0,
                          "current-tab": a.value,
                          "tab-options": b,
                          "alt-color": w.value,
                          "font-size-big": "",
                          onHandleNavigation:
                            o[1] || (o[1] = (t) => (a.value = t)),
                        },
                        null,
                        8,
                        ["current-tab", "alt-color"]
                      ))
                    : R("", !0),
                  m(
                    Q,
                    {
                      value: d.value,
                      onUpdate: o[2] || (o[2] = (t) => (d.value = t)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]),
                n("div", oa, [
                  (u(!0),
                  c(
                    z,
                    null,
                    K(
                      P.value,
                      (t) => (
                        u(),
                        c("div", { key: t.id, class: "align-creatures" }, [
                          m(F, { creature: t }, null, 8, ["creature"]),
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
  wa = G(sa, [["__scopeId", "data-v-caf23d7a"]]);
export { wa as default };

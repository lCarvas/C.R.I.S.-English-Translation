import {
  K as m,
  E as _,
  D as f,
  B as p,
  F as b,
  R as C,
  A as g,
} from "./creatures-uHc55fi5.js";
import { C as h } from "./CreatureCard-bJ3JZ-tD.js";
import { T as k } from "./TabNav-cxdIuInn.js";
import { P as y } from "./PrivateFeat-2T9otaZW.js";
import {
  d as L,
  g as T,
  r as o,
  e as B,
  f as E,
  o as a,
  c as r,
  a as n,
  k as s,
  n as F,
  q as N,
  _ as P,
} from "./index-sE6ml22p.js";
import { g as w } from "./firebase-lKn9MVSr.js";
import { L as x } from "./LoadingView-ZyngFh7H.js";
import "./show-more-icon-VvUXKiHG.js";
import "./add-icon-fJ4uQHUZ.js";
const A = { key: 0 },
  M = { key: 0 },
  R = { class: "creatures-list-container" },
  U = { class: "tab-nav-container" },
  V = { class: "creature-cards-container" },
  D = { key: 1 },
  K = { key: 1 },
  q = L({
    __name: "CreaturesList",
    setup(z) {
      const d = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
        ],
        u = T(),
        i = o(!0),
        l = o(0),
        e = o(0);
      B(async () => {
        u.currentUser &&
          ((l.value = await w(u.currentUser.uid)), (i.value = !1));
      });
      const v = E(() =>
        e.value === 1
          ? m
          : e.value === 2
          ? _
          : e.value === 3
          ? f
          : e.value === 4
          ? p
          : e.value === 5
          ? b
          : e.value === 6
          ? C
          : g
      );
      return (H, c) =>
        i.value
          ? (a(), r("div", K, [s(x)]))
          : (a(),
            r("div", A, [
              l.value >= 3
                ? (a(),
                  r("div", M, [
                    n("div", R, [
                      n("div", U, [
                        s(
                          k,
                          {
                            "current-tab": e.value,
                            "tab-options": d,
                            "font-size-big": "",
                            onHandleNavigation:
                              c[0] || (c[0] = (t) => (e.value = t)),
                          },
                          null,
                          8,
                          ["current-tab"]
                        ),
                      ]),
                      n("div", V, [
                        (a(!0),
                        r(
                          F,
                          null,
                          N(
                            v.value,
                            (t) => (
                              a(),
                              r("div", { key: t.id }, [
                                s(
                                  h,
                                  { creature: t, "is-default": "" },
                                  null,
                                  8,
                                  ["creature"]
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : (a(), r("div", D, [s(y)])),
            ]));
    },
  }),
  Y = P(q, [["__scopeId", "data-v-851caa60"]]);
export { Y as default };

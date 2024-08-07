import {
  K as p,
  E as b,
  D as g,
  B as C,
  F as h,
  R as y,
  A as k,
} from "./creatures-7Mdu5h-F.js";
import { C as L } from "./CreatureCard-Cvk49v0O.js";
import { T } from "./TabNav-BeBvdktQ.js";
import { P as B } from "./PrivateFeat-mx45qQCY.js";
import {
  d as E,
  g as F,
  r as u,
  e as N,
  f as v,
  o as r,
  c as a,
  a as l,
  k as s,
  n as P,
  q as w,
  _ as x,
} from "./index-G0kqgsTS.js";
import { g as A } from "./firebase-IQne05Px.js";
import { L as M } from "./LoadingView-KgVPmtmJ.js";
import { b as t } from "./creatureData-ozdxpDUT.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
const R = { key: 0 },
  U = { key: 0 },
  V = { class: "creatures-list-container" },
  D = { class: "tab-nav-container" },
  K = { class: "creature-cards-container" },
  S = { key: 1 },
  q = { key: 1 },
  z = E({
    __name: "CreaturesList",
    setup(H) {
      const m = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
        ],
        n = F(),
        i = u(!0),
        c = u(0),
        e = u(0);
      N(async () => {
        n.currentUser &&
          ((c.value = await A(n.currentUser.uid)), (i.value = !1));
      });
      const f = v(() =>
          e.value === 1
            ? p
            : e.value === 2
            ? b
            : e.value === 3
            ? g
            : e.value === 4
            ? C
            : e.value === 5
            ? h
            : e.value === 6
            ? y
            : k
        ),
        _ = v(() =>
          e.value === 1
            ? t.conhecimento.color
            : e.value === 2
            ? t.energia.color
            : e.value === 3
            ? t.morte.color
            : e.value === 4
            ? t.sangue.color
            : e.value === 5
            ? t.medo.color
            : e.value === 6
            ? t.realidade.color
            : "var(--color-primary)"
        );
      return (I, d) =>
        i.value
          ? (r(), a("div", q, [s(M)]))
          : (r(),
            a("div", R, [
              c.value >= 3
                ? (r(),
                  a("div", U, [
                    l("div", V, [
                      l("div", D, [
                        s(
                          T,
                          {
                            "current-tab": e.value,
                            "tab-options": m,
                            "alt-color": _.value,
                            "font-size-big": "",
                            onHandleNavigation:
                              d[0] || (d[0] = (o) => (e.value = o)),
                          },
                          null,
                          8,
                          ["current-tab", "alt-color"]
                        ),
                      ]),
                      l("div", K, [
                        (r(!0),
                        a(
                          P,
                          null,
                          w(
                            f.value,
                            (o) => (
                              r(),
                              a(
                                "div",
                                { key: o.id, class: "align-creatures" },
                                [
                                  s(
                                    L,
                                    { creature: o, "is-default": "" },
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
                      ]),
                    ]),
                  ]))
                : (r(), a("div", S, [s(B)])),
            ]));
    },
  }),
  ee = x(z, [["__scopeId", "data-v-72f695cf"]]);
export { ee as default };

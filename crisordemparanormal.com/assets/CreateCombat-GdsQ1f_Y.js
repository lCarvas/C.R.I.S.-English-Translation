import {
  d as H,
  g as V,
  M as U,
  u as L,
  S as q,
  r as n,
  f as K,
  h as O,
  e as Q,
  R as Y,
  F as j,
  B as z,
  l as G,
  o as u,
  c,
  a as e,
  C as J,
  D as W,
  t as X,
  k as d,
  m as Z,
  n as T,
  q as N,
  N as $,
  Y as aa,
  P as ea,
  p as sa,
  b as ta,
  _ as ra,
} from "./index-_IEBVZw3.js";
import {
  A as oa,
  K as la,
  E as na,
  D as ua,
  B as ca,
  F as da,
  R as ia,
  T as ma,
  c as va,
} from "./creatures-3PDYyihL.js";
import { m as pa } from "./marcasFragmentadas-KD4kpdFJ.js";
import { c as ha } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { C as R } from "./CreatureCard-8Sqn0pTB.js";
import { T as _a } from "./TabNav-8NoDP55z.js";
import { S as ba } from "./SearchInput-8jvDJspv.js";
import { a as _ } from "./default-FmxCqAN8.js";
import { l as b, _ as fa } from "./lodash-gzw5KmHd.js";
import { S as Ca } from "./SourcesNavigation-rmg9bvek.js";
import { v as k } from "./v4-cyCr5FZV.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./creatureData-ozdxpDUT.js";
import "./_commonjsHelpers-4gQjN7DL.js";
const h = (i) => (sa("data-v-377bac41"), (i = i()), ta(), i),
  ga = { class: "create-combat-container" },
  wa = { class: "combat-header-container" },
  Sa = { class: "create-combat-header" },
  Da = ["disabled"],
  ya = ["disabled"],
  Pa = { class: "combat-info-row" },
  Ta = { class: "input-container" },
  Na = h(() => e("div", { class: "label" }, " Name* ", -1)),
  Ra = { class: "vd-container" },
  ka = h(() => e("div", { class: "vd-label" }, " Total DV ", -1)),
  xa = { class: "vd-value" },
  Ma = { class: "combat-lists-container" },
  Aa = { class: "creatures-list" },
  Ba = { class: "creatures-list-header" },
  Fa = h(() =>
    e("div", { class: "creatures-title" }, " Threat List ", -1)
  ),
  Ia = { key: 0, class: "tab-nav-container" },
  Ea = { class: "creature-cards-container creatures-card-mobile" },
  Ha = { class: "creatures-list-add" },
  Va = h(() =>
    e("div", { class: "creatures-title-add" }, " Selected Threats ", -1)
  ),
  Ua = { class: "creature-cards-container-add creatures-card-mobile" },
  La = H({
    __name: "CreateCombat",
    setup(i) {
      const x = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
          { label: "Homebrew", value: 7 },
        ],
        f = V(),
        C = U(),
        g = L(),
        m = q().params.id,
        v = n(!0),
        t = n(b.cloneDeep(_)),
        l = n(0),
        p = n(""),
        w = n(),
        r = n("ordemParanormal"),
        M = K(() => {
          let a = [];
          return (
            r.value === "ordemParanormal" && l.value === 0 && (a = oa),
            r.value === "ordemParanormal" && l.value === 1 && (a = la),
            r.value === "ordemParanormal" && l.value === 2 && (a = na),
            r.value === "ordemParanormal" && l.value === 3 && (a = ua),
            r.value === "ordemParanormal" && l.value === 4 && (a = ca),
            r.value === "ordemParanormal" && l.value === 5 && (a = da),
            r.value === "ordemParanormal" && l.value === 6 && (a = ia),
            r.value === "ordemParanormal" &&
              l.value === 7 &&
              (a = w.value || []),
            r.value === "tocaDosMonstros" && (a = ma),
            r.value === "cultoDaCriacao" && (a = ha),
            r.value === "marcasFragmentadas" && (a = pa),
            r.value === "comunidade" && (a = va),
            a.filter((s) => O(s.name, p.value))
          );
        });
      Q(async () => {
        var D;
        if (!f.currentUser) return;
        const a = Y(C, "homebrewCreatures"),
          s = j(
            a,
            z("uid", "==", (D = f.currentUser) == null ? void 0 : D.uid)
          ),
          o = await G(s),
          S = [];
        for (const y of o.docs) {
          const P = y.data();
          (P.id = y.id), S.push(P);
        }
        (w.value = S), (v.value = !1);
      });
      const A = (a) => {
          (l.value = a), (p.value = "");
        },
        B = () => {
          (t.value = b.cloneDeep(_)),
            g.push({ name: "campaign-page", params: { id: m } });
        },
        F = async () => {
          t.value.name !== "" &&
            m &&
            ((v.value = !0),
            (t.value.id = k()),
            await $(ea(C, "campaigns", m), { combats: aa(t.value) }),
            (t.value = b.cloneDeep(_)),
            g.push({ name: "campaign-page", params: { id: m } }));
        },
        I = (a) => {
          const s = fa.cloneDeep(a);
          (s.id = k()), (t.value.vdTotal += s.vd), t.value.creatures.push(s);
        },
        E = (a) => {
          const s = t.value.creatures.findIndex((o) => o.id === a);
          (t.value.vdTotal -= t.value.creatures[s].vd),
            t.value.creatures.splice(s, 1);
        };
      return (a, s) => (
        u(),
        c("div", ga, [
          e("div", wa, [
            e("div", Sa, [
              e(
                "button",
                { class: "button-secondary", disabled: v.value, onClick: B },
                " Quit without saving ",
                8,
                Da
              ),
              e(
                "button",
                {
                  class: "button-primary",
                  disabled: v.value || t.value.name === "",
                  onClick: F,
                },
                " Save ",
                8,
                ya
              ),
            ]),
            e("div", Pa, [
              e("div", Ta, [
                Na,
                J(
                  e(
                    "input",
                    {
                      "onUpdate:modelValue":
                        s[0] || (s[0] = (o) => (t.value.name = o)),
                      class: "input-primary name-input",
                    },
                    null,
                    512
                  ),
                  [[W, t.value.name]]
                ),
              ]),
              e("div", Ra, [ka, e("div", xa, X(t.value.vdTotal), 1)]),
            ]),
          ]),
          e("div", Ma, [
            e("div", Aa, [
              d(
                Ca,
                {
                  "current-source": r.value,
                  "show-toca-dos-monstros": "",
                  "show-culto-da-criacao": "",
                  "show-marcas-fragmentadas": "",
                  "show-comunidade": "",
                  onHandleChangeCurrentSource:
                    s[1] || (s[1] = (o) => (r.value = o)),
                },
                null,
                8,
                ["current-source"]
              ),
              e("div", Ba, [
                Fa,
                d(
                  ba,
                  {
                    value: p.value,
                    small: "",
                    onUpdate: s[2] || (s[2] = (o) => (p.value = o)),
                  },
                  null,
                  8,
                  ["value"]
                ),
                r.value === "ordemParanormal"
                  ? (u(),
                    c("div", Ia, [
                      d(
                        _a,
                        {
                          "current-tab": l.value,
                          "tab-options": x,
                          onHandleNavigation: A,
                        },
                        null,
                        8,
                        ["current-tab"]
                      ),
                    ]))
                  : Z("", !0),
              ]),
              e("div", Ea, [
                (u(!0),
                c(
                  T,
                  null,
                  N(
                    M.value,
                    (o) => (
                      u(),
                      c("div", { key: o.id }, [
                        d(
                          R,
                          {
                            creature: o,
                            "is-default": "",
                            "can-add": "",
                            onHandleAdd: I,
                          },
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
            e("div", Ha, [
              Va,
              e("div", Ua, [
                (u(!0),
                c(
                  T,
                  null,
                  N(
                    t.value.creatures,
                    (o) => (
                      u(),
                      c("div", { key: o.id }, [
                        d(
                          R,
                          {
                            creature: o,
                            "is-default": "",
                            "can-remove": "",
                            onHandleRemove: E,
                          },
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
          ]),
        ])
      );
    },
  }),
  te = ra(La, [["__scopeId", "data-v-377bac41"]]);
export { te as default };

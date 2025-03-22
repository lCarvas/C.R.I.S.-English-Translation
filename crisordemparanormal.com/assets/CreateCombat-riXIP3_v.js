import {
  d as V,
  g as U,
  M as L,
  u as q,
  S as K,
  r as n,
  f as O,
  h as Q,
  e as Y,
  R as j,
  F as z,
  B as G,
  l as J,
  o as u,
  c,
  a as e,
  C as W,
  D as X,
  t as Z,
  k as i,
  m as $,
  n as N,
  q as R,
  N as aa,
  Y as ea,
  P as sa,
  p as ta,
  b as ra,
  _ as oa,
} from "./index-4umHKyHu.js";
import {
  A as la,
  K as na,
  E as ua,
  D as ca,
  B as ia,
  F as da,
  R as ma,
  T as va,
  c as pa,
} from "./creatures-D2g61G-L.js";
import { m as ha } from "./marcasFragmentadas-oZlJGZUl.js";
import { c as _a } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { C as k } from "./CreatureCard-BE80EGup.js";
import { T as ba } from "./TabNav-j_803Ij7.js";
import { S as fa } from "./SearchInput-5qWSH1_X.js";
import { a as _ } from "./default-FmxCqAN8.js";
import { l as b, _ as Ca } from "./lodash-gzw5KmHd.js";
import { S as ga } from "./SourcesNavigation-hkMXy3yw.js";
import { v as x } from "./v4-cyCr5FZV.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./creatureData-ozdxpDUT.js";
import "./_commonjsHelpers-4gQjN7DL.js";
const h = (d) => (ta("data-v-2427c350"), (d = d()), ra(), d),
  wa = { class: "create-combat-container" },
  Sa = { class: "combat-header-container" },
  Da = { class: "create-combat-header" },
  ya = ["disabled"],
  Pa = ["disabled"],
  Ta = { class: "combat-info-row" },
  Na = { class: "input-container" },
  Ra = h(() => e("div", { class: "label" }, " Name* ", -1)),
  ka = { class: "vd-container" },
  xa = h(() => e("div", { class: "vd-label" }, " Total DV ", -1)),
  Ma = { class: "vd-value" },
  Aa = { class: "combat-lists-container" },
  Ba = { class: "creatures-list" },
  Fa = { class: "creatures-list-header" },
  Ia = h(() =>
    e("div", { class: "creatures-title" }, " Threat List ", -1)
  ),
  Ea = { key: 0, class: "tab-nav-container" },
  Ha = { class: "creature-cards-container creatures-card-mobile" },
  Va = { class: "creatures-list-add" },
  Ua = h(() =>
    e("div", { class: "creatures-title-add" }, " Selected Threats ", -1)
  ),
  La = { class: "creature-cards-container-add creatures-card-mobile" },
  qa = V({
    __name: "CreateCombat",
    setup(d) {
      const M = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
          { label: "Homebrew", value: 7 },
        ],
        f = U(),
        C = L(),
        g = q(),
        m = K().params.id,
        v = n(!0),
        t = n(b.cloneDeep(_)),
        l = n(0),
        p = n(""),
        w = n(),
        r = n("ordemParanormal"),
        S = n([]),
        A = O(() => {
          let a = [];
          return (
            r.value === "ordemParanormal" && l.value === 0 && (a = la),
            r.value === "ordemParanormal" && l.value === 1 && (a = na),
            r.value === "ordemParanormal" && l.value === 2 && (a = ua),
            r.value === "ordemParanormal" && l.value === 3 && (a = ca),
            r.value === "ordemParanormal" && l.value === 4 && (a = ia),
            r.value === "ordemParanormal" && l.value === 5 && (a = da),
            r.value === "ordemParanormal" && l.value === 6 && (a = ma),
            r.value === "ordemParanormal" &&
              l.value === 7 &&
              (a = w.value || []),
            r.value === "tocaDosMonstros" && (a = va),
            r.value === "cultoDaCriacao" && (a = _a),
            r.value === "marcasFragmentadas" && (a = S.value),
            r.value === "comunidade" && (a = pa),
            a.filter((s) => Q(s.name, p.value))
          );
        });
      Y(async () => {
        var y;
        if (!f.currentUser) return;
        const a = j(C, "homebrewCreatures"),
          s = z(
            a,
            G("uid", "==", (y = f.currentUser) == null ? void 0 : y.uid)
          ),
          o = await J(s),
          D = [];
        for (const P of o.docs) {
          const T = P.data();
          (T.id = P.id), D.push(T);
        }
        (w.value = D), (S.value = await ha()), (v.value = !1);
      });
      const B = (a) => {
          (l.value = a), (p.value = "");
        },
        F = () => {
          (t.value = b.cloneDeep(_)),
            g.push({ name: "campaign-page", params: { id: m } });
        },
        I = async () => {
          t.value.name !== "" &&
            m &&
            ((v.value = !0),
            (t.value.id = x()),
            await aa(sa(C, "campaigns", m), { combats: ea(t.value) }),
            (t.value = b.cloneDeep(_)),
            g.push({ name: "campaign-page", params: { id: m } }));
        },
        E = (a) => {
          const s = Ca.cloneDeep(a);
          (s.id = x()), (t.value.vdTotal += s.vd), t.value.creatures.push(s);
        },
        H = (a) => {
          const s = t.value.creatures.findIndex((o) => o.id === a);
          (t.value.vdTotal -= t.value.creatures[s].vd),
            t.value.creatures.splice(s, 1);
        };
      return (a, s) => (
        u(),
        c("div", wa, [
          e("div", Sa, [
            e("div", Da, [
              e(
                "button",
                { class: "button-secondary", disabled: v.value, onClick: F },
                " Quit without saving ",
                8,
                ya
              ),
              e(
                "button",
                {
                  class: "button-primary",
                  disabled: v.value || t.value.name === "",
                  onClick: I,
                },
                " Save ",
                8,
                Pa
              ),
            ]),
            e("div", Ta, [
              e("div", Na, [
                Ra,
                W(
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
                  [[X, t.value.name]]
                ),
              ]),
              e("div", ka, [xa, e("div", Ma, Z(t.value.vdTotal), 1)]),
            ]),
          ]),
          e("div", Aa, [
            e("div", Ba, [
              i(
                ga,
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
              e("div", Fa, [
                Ia,
                i(
                  fa,
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
                    c("div", Ea, [
                      i(
                        ba,
                        {
                          "current-tab": l.value,
                          "tab-options": M,
                          onHandleNavigation: B,
                        },
                        null,
                        8,
                        ["current-tab"]
                      ),
                    ]))
                  : $("", !0),
              ]),
              e("div", Ha, [
                (u(!0),
                c(
                  N,
                  null,
                  R(
                    A.value,
                    (o) => (
                      u(),
                      c("div", { key: o.id }, [
                        i(
                          k,
                          {
                            creature: o,
                            "is-default": "",
                            "can-add": "",
                            onHandleAdd: E,
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
            e("div", Va, [
              Ua,
              e("div", La, [
                (u(!0),
                c(
                  N,
                  null,
                  R(
                    t.value.creatures,
                    (o) => (
                      u(),
                      c("div", { key: o.id }, [
                        i(
                          k,
                          {
                            creature: o,
                            "is-default": "",
                            "can-remove": "",
                            onHandleRemove: H,
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
  re = oa(qa, [["__scopeId", "data-v-2427c350"]]);
export { re as default };

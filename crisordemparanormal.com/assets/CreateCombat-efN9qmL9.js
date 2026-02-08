import {
  d as U,
  g as L,
  M as q,
  u as K,
  S as G,
  r as n,
  f as O,
  h as Q,
  e as Y,
  R as j,
  F as z,
  B as J,
  l as W,
  o as u,
  c,
  a as e,
  C as X,
  D as Z,
  t as $,
  k as i,
  m as aa,
  n as R,
  q as k,
  N as ea,
  Y as ra,
  P as sa,
  p as ta,
  b as oa,
  _ as la,
} from "./index-fqOV2Os2.js";
import {
  A as na,
  K as ua,
  E as ca,
  D as ia,
  B as da,
  F as ma,
  R as va,
  T as pa,
  c as ha,
} from "./creatures-6PobCC31.js";
import { m as _a } from "./marcasFragmentadas-ZyBgiAnp.js";
import { c as ba } from "./cultoDaCriacaoContent-lXBbI8k2.js";
import { C as x } from "./CreatureCard-5_-LWzyE.js";
import { T as fa } from "./TabNav-GB7V06r-.js";
import { S as Ca } from "./SearchInput-n9LbYIZb.js";
import { a as _ } from "./default-s9aktn1T.js";
import { l as b, _ as ga } from "./lodash-gzw5KmHd.js";
import { S as wa } from "./SourcesNavigation-okweyYJS.js";
import { g as Pa } from "./parceitosData-pYeB3vP6.js";
import { v as M } from "./v4-cyCr5FZV.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./creatureData-R8saWVyd.js";
import "./_commonjsHelpers-4gQjN7DL.js";
const h = (d) => (ta("data-v-db524039"), (d = d()), oa(), d),
  Sa = { class: "create-combat-container" },
  Da = { class: "combat-header-container" },
  ya = { class: "create-combat-header" },
  Ta = ["disabled"],
  Na = ["disabled"],
  Ra = { class: "combat-info-row" },
  ka = { class: "input-container" },
  xa = h(() => e("div", { class: "label" }, " Name* ", -1)),
  Ma = { class: "vd-container" },
  Aa = h(() => e("div", { class: "vd-label" }, " Total DV ", -1)),
  Ba = { class: "vd-value" },
  Fa = { class: "combat-lists-container" },
  Ia = { class: "creatures-list" },
  Ea = { class: "creatures-list-header" },
  Ha = h(() =>
    e("div", { class: "creatures-title" }, " Threat List ", -1)
  ),
  Va = { key: 0, class: "tab-nav-container" },
  Ua = { class: "creature-cards-container creatures-card-mobile" },
  La = { class: "creatures-list-add" },
  qa = h(() =>
    e("div", { class: "creatures-title-add" }, " Selected Threats ", -1)
  ),
  Ka = { class: "creature-cards-container-add creatures-card-mobile" },
  Ga = U({
    __name: "CreateCombat",
    setup(d) {
      const A = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
          { label: "Homebrew", value: 7 },
        ],
        f = L(),
        C = q(),
        g = K(),
        m = G().params.id,
        v = n(!0),
        s = n(b.cloneDeep(_)),
        l = n(0),
        p = n(""),
        w = n(),
        t = n("ordemParanormal"),
        P = n([]),
        S = n([]),
        B = O(() => {
          let a = [];
          return (
            t.value === "ordemParanormal" && l.value === 0 && (a = na),
            t.value === "ordemParanormal" && l.value === 1 && (a = ua),
            t.value === "ordemParanormal" && l.value === 2 && (a = ca),
            t.value === "ordemParanormal" && l.value === 3 && (a = ia),
            t.value === "ordemParanormal" && l.value === 4 && (a = da),
            t.value === "ordemParanormal" && l.value === 5 && (a = ma),
            t.value === "ordemParanormal" && l.value === 6 && (a = va),
            t.value === "ordemParanormal" &&
              l.value === 7 &&
              (a = w.value || []),
            t.value === "tocaDosMonstros" && (a = pa),
            t.value === "cultoDaCriacao" && (a = ba),
            t.value === "marcasFragmentadas" && (a = P.value),
            t.value === "grimorioParanormal" && (a = S.value),
            t.value === "comunidade" && (a = ha),
            a.filter((r) => Q(r.name, p.value))
          );
        });
      Y(async () => {
        var y;
        if (!f.currentUser) return;
        const a = j(C, "homebrewCreatures"),
          r = z(
            a,
            J("uid", "==", (y = f.currentUser) == null ? void 0 : y.uid)
          ),
          o = await W(r),
          D = [];
        for (const T of o.docs) {
          const N = T.data();
          (N.id = T.id), D.push(N);
        }
        (w.value = D),
          (P.value = await _a()),
          (S.value = await Pa()),
          (v.value = !1);
      });
      const F = (a) => {
          (l.value = a), (p.value = "");
        },
        I = () => {
          (s.value = b.cloneDeep(_)),
            g.push({ name: "campaign-page", params: { id: m } });
        },
        E = async () => {
          s.value.name !== "" &&
            m &&
            ((v.value = !0),
            (s.value.id = M()),
            await ea(sa(C, "campaigns", m), { combats: ra(s.value) }),
            (s.value = b.cloneDeep(_)),
            g.push({ name: "campaign-page", params: { id: m } }));
        },
        H = (a) => {
          const r = ga.cloneDeep(a);
          (r.id = M()), (s.value.vdTotal += r.vd), s.value.creatures.push(r);
        },
        V = (a) => {
          const r = s.value.creatures.findIndex((o) => o.id === a);
          (s.value.vdTotal -= s.value.creatures[r].vd),
            s.value.creatures.splice(r, 1);
        };
      return (a, r) => (
        u(),
        c("div", Sa, [
          e("div", Da, [
            e("div", ya, [
              e(
                "button",
                { class: "button-secondary", disabled: v.value, onClick: I },
                " Quit without saving ",
                8,
                Ta
              ),
              e(
                "button",
                {
                  class: "button-primary",
                  disabled: v.value || s.value.name === "",
                  onClick: E,
                },
                " Save ",
                8,
                Na
              ),
            ]),
            e("div", Ra, [
              e("div", ka, [
                xa,
                X(
                  e(
                    "input",
                    {
                      "onUpdate:modelValue":
                        r[0] || (r[0] = (o) => (s.value.name = o)),
                      class: "input-primary name-input",
                    },
                    null,
                    512
                  ),
                  [[Z, s.value.name]]
                ),
              ]),
              e("div", Ma, [Aa, e("div", Ba, $(s.value.vdTotal), 1)]),
            ]),
          ]),
          e("div", Fa, [
            e("div", Ia, [
              i(
                wa,
                {
                  "current-source": t.value,
                  "show-toca-dos-monstros": "",
                  "show-culto-da-criacao": "",
                  "show-marcas-fragmentadas": "",
                  "show-comunidade": "",
                  "show-grimorio-paranormal": "",
                  onHandleChangeCurrentSource:
                    r[1] || (r[1] = (o) => (t.value = o)),
                },
                null,
                8,
                ["current-source"]
              ),
              e("div", Ea, [
                Ha,
                i(
                  Ca,
                  {
                    value: p.value,
                    small: "",
                    onUpdate: r[2] || (r[2] = (o) => (p.value = o)),
                  },
                  null,
                  8,
                  ["value"]
                ),
                t.value === "ordemParanormal"
                  ? (u(),
                    c("div", Va, [
                      i(
                        fa,
                        {
                          "current-tab": l.value,
                          "tab-options": A,
                          onHandleNavigation: F,
                        },
                        null,
                        8,
                        ["current-tab"]
                      ),
                    ]))
                  : aa("", !0),
              ]),
              e("div", Ua, [
                (u(!0),
                c(
                  R,
                  null,
                  k(
                    B.value,
                    (o) => (
                      u(),
                      c("div", { key: o.id }, [
                        i(
                          x,
                          { creature: o, "can-add": "", onHandleAdd: H },
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
            e("div", La, [
              qa,
              e("div", Ka, [
                (u(!0),
                c(
                  R,
                  null,
                  k(
                    s.value.creatures,
                    (o) => (
                      u(),
                      c("div", { key: o.id }, [
                        i(
                          x,
                          {
                            creature: o,
                            "can-remove": "",
                            "stop-sheet": "",
                            onHandleRemove: V,
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
  ne = la(Ga, [["__scopeId", "data-v-db524039"]]);
export { ne as default };

import {
  d as R,
  Q as Z,
  f as U,
  o as s,
  c as o,
  a as e,
  p as M,
  b as P,
  aa as x,
  _ as w,
  m,
  t as u,
  K as ie,
  k as y,
  n as A,
  H,
  q as V,
  L as z,
  r as q,
  a1 as le,
  j as X,
  x as ee,
  T as de,
  a4 as ce,
  v as O,
  i as ue,
  C as B,
  D as E,
  a3 as me,
  J as ve,
} from "./index-soWtg56j.js";
import { _ as te, a as pe } from "./edit-icon-3vZQUsyW.js";
import { b as $, d as _e, c as he, a as be } from "./creatureData-ozdxpDUT.js";
import { _ as ae } from "./d20-icon-vaz1En3o.js";
import { _ as $e } from "./show-more-icon-VvUXKiHG.js";
import { T as ne } from "./TabNav-Vghvkjaf.js";
import { C as fe } from "./CardSource-BmFlmtci.js";
import { h as Q } from "./default-FmxCqAN8.js";
import { i as ge } from "./forms-8DDAOOVU.js";
import { _ as G, l as F } from "./lodash-gzw5KmHd.js";
import { D as J } from "./DropdownSimple-0amtt2-f.js";
import { v as K } from "./v4-cyCr5FZV.js";
const D = (l) => (M("data-v-ed0d7802"), (l = l()), P(), l),
  ye = { class: "info-bar" },
  ke = D(() => e("div", { class: "info-bar-fill" }, null, -1)),
  Ce = { class: "info-bar-components" },
  Ae = { class: "buttons-container" },
  Ve = ["disabled"],
  Re = D(() =>
    e("img", { class: "invert-icon", src: te, alt: "diminuir" }, null, -1)
  ),
  we = [Re],
  Be = ["disabled"],
  Ee = D(() =>
    e("img", { class: "invert-icon", src: x, alt: "diminuir" }, null, -1)
  ),
  Se = [Ee],
  Me = { class: "inputs-container" },
  Pe = ["disabled", "value"],
  Te = D(() => e("div", { class: "input-divider" }, " / ", -1)),
  Ie = ["disabled", "value"],
  Ue = { class: "buttons-container" },
  De = ["disabled"],
  He = D(() => e("img", { src: x, alt: "aumentar" }, null, -1)),
  Ne = [He],
  Le = ["disabled"],
  Fe = D(() => e("img", { src: te, alt: "aumentar" }, null, -1)),
  Oe = [Fe],
  qe = R({
    __name: "CreaturePvBar",
    props: { maxValue: {}, currentValue: {}, disabled: { type: Boolean } },
    emits: ["handleChangePvField", "handleChangePv"],
    setup(l, { emit: t }) {
      Z((i) => ({ "7dd26672": c.value, "7ba469ac": r.value }));
      const _ = l,
        d = t,
        r = U(() => {
          const i = Math.floor((_.currentValue / _.maxValue) * 100);
          return i > 100 ? "100%" : i < 0 ? "0%" : `${i}%`;
        }),
        c = U(() =>
          Math.floor((_.currentValue / _.maxValue) * 100) <= 50
            ? "#621A1A"
            : "#B22222"
        ),
        n = (i, p) => {
          d("handleChangePvField", i.target.valueAsNumber, p);
        },
        a = (i) => {
          d("handleChangePv", i);
        };
      return (i, p) => (
        s(),
        o("div", ye, [
          ke,
          e("div", Ce, [
            e("div", Ae, [
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: i.disabled,
                  onClick: p[0] || (p[0] = (g) => a(i.currentValue - 5)),
                },
                we,
                8,
                Ve
              ),
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: i.disabled,
                  onClick: p[1] || (p[1] = (g) => a(i.currentValue - 1)),
                },
                Se,
                8,
                Be
              ),
            ]),
            e("div", Me, [
              e(
                "input",
                {
                  type: "number",
                  class: "info-bar-input left-input",
                  disabled: i.disabled,
                  value: i.currentValue,
                  onBlur: p[2] || (p[2] = (g) => n(g, "current")),
                },
                null,
                40,
                Pe
              ),
              Te,
              e(
                "input",
                {
                  type: "number",
                  class: "info-bar-input",
                  disabled: i.disabled,
                  value: i.maxValue,
                  onBlur: p[3] || (p[3] = (g) => n(g, "max")),
                },
                null,
                40,
                Ie
              ),
            ]),
            e("div", Ue, [
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: i.disabled,
                  onClick: p[4] || (p[4] = (g) => a(i.currentValue + 1)),
                },
                Ne,
                8,
                De
              ),
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: i.disabled,
                  onClick: p[5] || (p[5] = (g) => a(i.currentValue + 5)),
                },
                Oe,
                8,
                Le
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  ze = w(qe, [["__scopeId", "data-v-ed0d7802"]]),
  Qe = (l) => (M("data-v-b662adad"), (l = l()), P(), l),
  Ge = { key: 0, class: "img-container" },
  Je = ["src"],
  Ke = { class: "header-content" },
  We = { class: "edit-row" },
  Xe = Qe(() =>
    e("img", { class: "edit-icon", src: pe, alt: "editar" }, null, -1)
  ),
  je = [Xe],
  Ye = { class: "info-row" },
  Ze = { class: "name" },
  xe = { class: "vd" },
  et = { class: "info" },
  tt = { class: "pv-container" },
  at = R({
    __name: "CreatureHeader",
    props: {
      creature: {},
      disabled: { type: Boolean },
      noEditButton: { type: Boolean },
    },
    emits: ["handleChangePvField", "handleChangePv", "handleEditCreature"],
    setup(l) {
      const t = l,
        _ = U(() =>
          t.creature.name.toLocaleLowerCase() === "máscara do desespero"
            ? $.magistrada.banner
            : t.creature.name.toLocaleLowerCase() === "anfitrião"
            ? $.anfitriao.banner
            : t.creature.name.toLocaleLowerCase() === "o deus da morte"
            ? $.deus.banner
            : t.creature.name.toLocaleLowerCase() === "o diabo"
            ? $.diabo.banner
            : t.creature.name.toLocaleLowerCase() === "degolificada"
            ? $.degolificada.banner
            : t.creature.element === "conhecimento"
            ? $.conhecimento.banner
            : t.creature.element === "energia"
            ? $.energia.banner
            : t.creature.element === "medo"
            ? $.medo.banner
            : t.creature.element === "morte"
            ? $.morte.banner
            : t.creature.element === "sangue"
            ? $.sangue.banner
            : t.creature.element === "nenhum"
            ? $.realidade.banner
            : $.realidade.banner
        );
      return (d, r) => (
        s(),
        o(
          A,
          null,
          [
            e(
              "div",
              {
                class: "creature-header-container",
                style: ie({
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 77.37%, #111 97.89%), url(${_.value})`,
                }),
              },
              [
                d.creature.sheetPictureURL
                  ? (s(),
                    o("div", Ge, [
                      e(
                        "img",
                        {
                          class: "creature-picture",
                          src: d.creature.sheetPictureURL,
                          alt: "foto ameaça",
                        },
                        null,
                        8,
                        Je
                      ),
                    ]))
                  : m("", !0),
                e("div", Ke, [
                  e("div", We, [
                    d.noEditButton
                      ? m("", !0)
                      : (s(),
                        o(
                          "button",
                          {
                            key: 0,
                            class: "edit-button",
                            onClick:
                              r[0] ||
                              (r[0] = (c) => d.$emit("handleEditCreature")),
                          },
                          je
                        )),
                  ]),
                  e("div", Ye, [
                    e("div", Ze, u(d.creature.name), 1),
                    e("div", xe, " VD: " + u(d.creature.vd), 1),
                    e(
                      "div",
                      et,
                      u(d.creature.creatureType) +
                        " - " +
                        u(d.creature.creatureSize),
                      1
                    ),
                  ]),
                ]),
              ],
              4
            ),
            e("div", tt, [
              y(
                ze,
                {
                  "current-value": d.creature.pvCurrent,
                  "max-value": d.creature.pvMax,
                  disabled: d.noEditButton || !1,
                  onHandleChangePvField:
                    r[1] ||
                    (r[1] = (c, n) => d.$emit("handleChangePvField", c, n)),
                  onHandleChangePv:
                    r[2] || (r[2] = (c) => d.$emit("handleChangePv", c)),
                },
                null,
                8,
                ["current-value", "max-value", "disabled"]
              ),
            ]),
          ],
          64
        )
      );
    },
  }),
  nt = w(at, [["__scopeId", "data-v-b662adad"]]),
  st = (l) => (M("data-v-cbb6bbea"), (l = l()), P(), l),
  ot = { class: "creature-skill-container" },
  rt = { class: "creature-skill-button" },
  it = { class: "skill-name" },
  lt = { class: "value-container" },
  dt = { class: "skill-number" },
  ct = { key: 0 },
  ut = st(() =>
    e("img", { src: ae, alt: "rolar", class: "dice-img" }, null, -1)
  ),
  mt = R({
    __name: "CreatureSkill",
    props: { name: {}, rollNumber: {}, rollBonus: {} },
    setup(l) {
      return (t, _) => (
        s(),
        o("div", ot, [
          e("button", rt, [
            e("div", it, u(t.name), 1),
            e("div", lt, [
              e("div", dt, [
                H(u(t.rollNumber) + "d20", 1),
                t.rollBonus
                  ? (s(), o("span", ct, "+" + u(t.rollBonus), 1))
                  : m("", !0),
              ]),
              ut,
            ]),
          ]),
        ])
      );
    },
  }),
  j = w(mt, [["__scopeId", "data-v-cbb6bbea"]]),
  T = (l) => (M("data-v-d87a5501"), (l = l()), P(), l),
  vt = { class: "att-container" },
  pt = ["onClick"],
  _t = { class: "att-label" },
  ht = { class: "att-value" },
  bt = { class: "row-container" },
  $t = { class: "column-container" },
  ft = T(() => e("div", { class: "data-title" }, " Defense ", -1)),
  gt = { class: "data-value" },
  yt = { class: "column-container" },
  kt = T(() => e("div", { class: "data-title" }, " Speed ", -1)),
  Ct = { class: "data-value" },
  At = { key: 0 },
  Vt = { class: "content-container" },
  Rt = T(() =>
    e("div", { class: "container-title align-center" }, " Skills ", -1)
  ),
  wt = { key: 0, class: "content-container" },
  Bt = T(() => e("div", { class: "container-title" }, " Senses ", -1)),
  Et = { class: "value-label" },
  St = { key: 1, class: "content-container" },
  Mt = T(() =>
    e("div", { class: "container-title" }, " Secondaary Elements ", -1)
  ),
  Pt = { class: "value-label" },
  Tt = { key: 2, class: "content-container" },
  It = T(() => e("div", { class: "container-title" }, " Immunities ", -1)),
  Ut = { key: 0, class: "value-label" },
  Dt = { key: 1, class: "value-label" },
  Ht = { key: 3, class: "content-container" },
  Nt = T(() => e("div", { class: "container-title" }, " Resistances ", -1)),
  Lt = { key: 0, class: "res" },
  Ft = { class: "value-label" },
  Ot = { class: "value-label" },
  qt = { key: 4, class: "content-container" },
  zt = T(() =>
    e("div", { class: "container-title" }, " Vulnerabilities ", -1)
  ),
  Qt = { class: "value-label" },
  Gt = R({
    __name: "CreatureStats",
    props: { creature: {} },
    emits: ["handleRollAttr", "handleRollSkill"],
    setup(l) {
      const t = l,
        _ = U(
          () =>
            !!(
              (t.creature.resistencias.balistico &&
                t.creature.resistencias.balistico > 0) ||
              (t.creature.resistencias.conhecimento &&
                t.creature.resistencias.conhecimento > 0) ||
              (t.creature.resistencias.corte &&
                t.creature.resistencias.corte > 0) ||
              (t.creature.resistencias.dano &&
                t.creature.resistencias.dano > 0) ||
              (t.creature.resistencias.eletricidade &&
                t.creature.resistencias.eletricidade > 0) ||
              (t.creature.resistencias.energia &&
                t.creature.resistencias.energia > 0) ||
              (t.creature.resistencias.fogo &&
                t.creature.resistencias.fogo > 0) ||
              (t.creature.resistencias.frio &&
                t.creature.resistencias.frio > 0) ||
              (t.creature.resistencias.impacto &&
                t.creature.resistencias.impacto > 0) ||
              (t.creature.resistencias.medo &&
                t.creature.resistencias.medo > 0) ||
              (t.creature.resistencias.mental &&
                t.creature.resistencias.mental > 0) ||
              (t.creature.resistencias.morte &&
                t.creature.resistencias.morte > 0) ||
              (t.creature.resistencias.perfuracao &&
                t.creature.resistencias.perfuracao > 0) ||
              (t.creature.resistencias.quimico &&
                t.creature.resistencias.quimico > 0) ||
              (t.creature.resistencias.sangue &&
                t.creature.resistencias.sangue > 0)
            )
        ),
        d = {
          AGI: "Agility",
          FOR: "Strength",
          INT: "Intellect",
          PRE: "Presence",
          VIG: "Vigor",
        };
      return (r, c) => (
        s(),
        o("div", null, [
          e("div", vt, [
            (s(!0),
            o(
              A,
              null,
              V(
                z(_e),
                (n) => (
                  s(),
                  o(
                    "div",
                    {
                      key: n.key,
                      class: "att",
                      onClick: (a) =>
                        r.$emit(
                          "handleRollAttr",
                          r.creature.attributes[n.key],
                          d[n.label],
                          r.creature.name
                        ),
                    },
                    [
                      e("div", _t, u(n.label), 1),
                      e("button", ht, u(r.creature.attributes[n.key]), 1),
                    ],
                    8,
                    pt
                  )
                )
              ),
              128
            )),
          ]),
          e("div", bt, [
            e("div", $t, [ft, e("div", gt, u(r.creature.defense), 1)]),
            e("div", yt, [
              kt,
              e(
                "div",
                Ct,
                u(r.creature.movement) +
                  "m / " +
                  u(r.creature.movement / 1.5) +
                  "q ",
                1
              ),
              r.creature.altMovements
                ? (s(),
                  o("div", At, [
                    (s(!0),
                    o(
                      A,
                      null,
                      V(
                        r.creature.altMovements,
                        (n) => (
                          s(),
                          o(
                            "div",
                            { key: n.title, class: "alt-mov-value" },
                            u(n.title) +
                              " " +
                              u(n.value) +
                              "m / " +
                              u(n.value / 1.5) +
                              "q ",
                            1
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : m("", !0),
            ]),
          ]),
          e("div", Vt, [
            Rt,
            (s(!0),
            o(
              A,
              null,
              V(
                z(he),
                (n) => (
                  s(),
                  o("div", { key: n.key }, [
                    y(
                      j,
                      {
                        name: n.label,
                        "roll-number": r.creature.skills[n.key].rollNumber,
                        "roll-bonus": r.creature.skills[n.key].rollBonus,
                        onClick: (a) =>
                          r.$emit(
                            "handleRollSkill",
                            r.creature.skills[n.key].rollNumber,
                            r.creature.skills[n.key].rollBonus || 0,
                            n.label,
                            r.creature.name
                          ),
                      },
                      null,
                      8,
                      ["name", "roll-number", "roll-bonus", "onClick"]
                    ),
                  ])
                )
              ),
              128
            )),
            (s(!0),
            o(
              A,
              null,
              V(
                r.creature.extraSkills,
                (n) => (
                  s(),
                  o("div", { key: n.id }, [
                    y(
                      j,
                      {
                        name: n.name,
                        "roll-number": n.rollNumber,
                        "roll-bonus": n.rollBonus,
                        onClick: (a) =>
                          r.$emit(
                            "handleRollSkill",
                            n.rollNumber,
                            n.rollBonus || 0,
                            n.name,
                            r.creature.name
                          ),
                      },
                      null,
                      8,
                      ["name", "roll-number", "roll-bonus", "onClick"]
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
          r.creature.perceptionType
            ? (s(),
              o("div", wt, [Bt, e("div", Et, u(r.creature.perceptionType), 1)]))
            : m("", !0),
          r.creature.secondaryElements &&
          r.creature.secondaryElements.length > 0
            ? (s(),
              o("div", St, [
                Mt,
                e(
                  "div",
                  Pt,
                  u(
                    r.creature.secondaryElements
                      .toString()
                      .split(",")
                      .join(" - ")
                  ),
                  1
                ),
              ]))
            : m("", !0),
          r.creature.imunidades.length > 0 || r.creature.imunidadesAditional
            ? (s(),
              o("div", Tt, [
                It,
                r.creature.imunidades
                  ? (s(),
                    o(
                      "div",
                      Ut,
                      u(
                        r.creature.imunidades.toString().split(",").join(" - ")
                      ),
                      1
                    ))
                  : m("", !0),
                r.creature.imunidadesAditional
                  ? (s(), o("div", Dt, u(r.creature.imunidadesAditional), 1))
                  : m("", !0),
              ]))
            : m("", !0),
          _.value
            ? (s(),
              o("div", Ht, [
                Nt,
                (s(!0),
                o(
                  A,
                  null,
                  V(
                    z(be),
                    (n) => (
                      s(),
                      o("div", { key: n.key }, [
                        r.creature.resistencias[n.key]
                          ? (s(),
                            o("div", Lt, [
                              e("div", Ft, u(n.label) + ": ", 1),
                              e(
                                "div",
                                Ot,
                                u(r.creature.resistencias[n.key]),
                                1
                              ),
                            ]))
                          : m("", !0),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : m("", !0),
          r.creature.vulnerabilidades.length > 0
            ? (s(),
              o("div", qt, [
                zt,
                e(
                  "div",
                  Qt,
                  u(
                    r.creature.vulnerabilidades
                      .toString()
                      .split(",")
                      .join(" - ")
                  ),
                  1
                ),
              ]))
            : m("", !0),
        ])
      );
    },
  }),
  Jt = w(Gt, [["__scopeId", "data-v-d87a5501"]]),
  N = (l) => (M("data-v-8578a5ea"), (l = l()), P(), l),
  Kt = { class: "card" },
  Wt = N(() => e("img", { src: $e, alt: "ver mais" }, null, -1)),
  Xt = [Wt],
  jt = { class: "title" },
  Yt = { key: 0 },
  Zt = { key: 0 },
  xt = { class: "content" },
  ea = { key: 0, class: "content-container" },
  ta = { class: "content-row" },
  aa = { key: 0, class: "attack-name" },
  na = { class: "value-small" },
  sa = { key: 1, class: "value-small" },
  oa = { class: "attack-value-container" },
  ra = N(() => e("strong", null, "To Hit:", -1)),
  ia = { key: 0 },
  la = { class: "attack-value-container" },
  da = N(() => e("strong", null, "Damage:", -1)),
  ca = { class: "damage-values-container" },
  ua = { key: 0 },
  ma = { key: 0, class: "attack-value-container row" },
  va = N(() => e("strong", null, "Critical:", -1)),
  pa = { key: 0 },
  _a = { key: 1 },
  ha = { key: 2 },
  ba = ["onClick"],
  $a = N(() => e("img", { src: ae, alt: "rolar" }, null, -1)),
  fa = [$a],
  ga = { class: "content-container" },
  ya = ["innerHTML"],
  ka = { key: 1, class: "card-footer" },
  Ca = R({
    __name: "ActionCard",
    props: { action: {}, disabled: { type: Boolean } },
    emits: ["handleAttack", "handleRemoveAction", "handleEditAction"],
    setup(l) {
      const t = q(!1),
        _ = (d) => d.charAt(0).toUpperCase() + d.slice(1);
      return (d, r) => (
        s(),
        o("div", Kt, [
          e(
            "div",
            {
              class: "header",
              onClick:
                r[1] || (r[1] = X((c) => (t.value = !t.value), ["stop"])),
            },
            [
              e(
                "button",
                {
                  class: le(["show-more", { rotate: t.value }]),
                  onClick:
                    r[0] || (r[0] = X((c) => (t.value = !t.value), ["stop"])),
                },
                Xt,
                2
              ),
              e("h3", jt, [
                d.action.type
                  ? (s(),
                    o(
                      "span",
                      Yt,
                      u(d.action.type.toLocaleUpperCase()) + " - ",
                      1
                    ))
                  : m("", !0),
                H(u(d.action.name), 1),
              ]),
            ]
          ),
          y(
            de,
            { name: "card", mode: "out-in" },
            {
              default: ee(() => [
                t.value
                  ? (s(),
                    o("div", Zt, [
                      y(ce),
                      e("div", xt, [
                        d.action.attacks
                          ? (s(),
                            o("div", ea, [
                              (s(!0),
                              o(
                                A,
                                null,
                                V(
                                  d.action.attacks,
                                  (c) => (
                                    s(),
                                    o("div", { key: c.id, class: "action" }, [
                                      e("div", null, [
                                        e("div", ta, [
                                          c.name
                                            ? (s(), o("div", aa, u(c.name), 1))
                                            : m("", !0),
                                          e("div", na, u(c.range), 1),
                                          c.numberOfAttacks > 1
                                            ? (s(),
                                              o(
                                                "div",
                                                sa,
                                                u(c.numberOfAttacks) + "x ",
                                                1
                                              ))
                                            : m("", !0),
                                        ]),
                                        e("div", null, [
                                          e("div", oa, [
                                            ra,
                                            H(" " + u(c.rollNumber) + "d20", 1),
                                            c.rollBonus
                                              ? (s(),
                                                o(
                                                  "span",
                                                  ia,
                                                  "+" + u(c.rollBonus),
                                                  1
                                                ))
                                              : m("", !0),
                                          ]),
                                          e("div", la, [
                                            da,
                                            e("div", ca, [
                                              (s(!0),
                                              o(
                                                A,
                                                null,
                                                V(
                                                  c.damage,
                                                  (n) => (
                                                    s(),
                                                    o(
                                                      "div",
                                                      {
                                                        key: n.id,
                                                        class: "damage-string",
                                                      },
                                                      [
                                                        H(u(n.value), 1),
                                                        n.damageType !== "-"
                                                          ? (s(),
                                                            o(
                                                              "span",
                                                              ua,
                                                              u(
                                                                _(n.damageType)
                                                              ),
                                                              1
                                                            ))
                                                          : m("", !0),
                                                      ]
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                            ]),
                                          ]),
                                          (c.criticalRange < 20 &&
                                            c.criticalMult > 2) ||
                                          c.criticalRange < 20 ||
                                          c.criticalMult > 2
                                            ? (s(),
                                              o("div", ma, [
                                                va,
                                                c.criticalRange < 20 &&
                                                c.criticalMult > 2
                                                  ? (s(),
                                                    o(
                                                      "span",
                                                      pa,
                                                      u(c.criticalRange) +
                                                        "/x" +
                                                        u(c.criticalMult),
                                                      1
                                                    ))
                                                  : c.criticalRange < 20
                                                  ? (s(),
                                                    o(
                                                      "span",
                                                      _a,
                                                      u(c.criticalRange),
                                                      1
                                                    ))
                                                  : c.criticalMult > 2
                                                  ? (s(),
                                                    o(
                                                      "span",
                                                      ha,
                                                      "x" + u(c.criticalMult),
                                                      1
                                                    ))
                                                  : m("", !0),
                                              ]))
                                            : m("", !0),
                                        ]),
                                      ]),
                                      e("div", null, [
                                        e(
                                          "button",
                                          {
                                            class: "roll-button",
                                            onClick: (n) =>
                                              d.$emit("handleAttack", c),
                                          },
                                          fa,
                                          8,
                                          ba
                                        ),
                                      ]),
                                    ])
                                  )
                                ),
                                128
                              )),
                            ]))
                          : m("", !0),
                        e("div", ga, [
                          d.action.description
                            ? (s(),
                              o(
                                "div",
                                {
                                  key: 0,
                                  class: "sheet-content",
                                  innerHTML: d.action.description,
                                },
                                null,
                                8,
                                ya
                              ))
                            : m("", !0),
                        ]),
                        d.disabled
                          ? m("", !0)
                          : (s(),
                            o("div", ka, [
                              e(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick:
                                    r[2] ||
                                    (r[2] = (c) =>
                                      d.$emit(
                                        "handleRemoveAction",
                                        d.action.id
                                      )),
                                },
                                " Remove "
                              ),
                              e(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick:
                                    r[3] ||
                                    (r[3] = (c) =>
                                      d.$emit("handleEditAction", d.action.id)),
                                },
                                " Edit "
                              ),
                            ])),
                      ]),
                    ]))
                  : m("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  Y = w(Ca, [["__scopeId", "data-v-8578a5ea"]]),
  Aa = (l) => (M("data-v-a1e5daed"), (l = l()), P(), l),
  Va = { key: 0, class: "presenca-perturbadora-container" },
  Ra = Aa(() =>
    e(
      "div",
      { class: "presenca-perturbadora-label" },
      " Disturbing Presence ",
      -1
    )
  ),
  wa = { class: "presenca-perturbadora-button" },
  Ba = { key: 0 },
  Ea = { class: "tab-nav-container" },
  Sa = { key: 0 },
  Ma = { key: 1 },
  Pa = { key: 1, class: "cards-container" },
  Ta = { key: 2, class: "cards-container" },
  Ia = R({
    __name: "CreatureCombat",
    props: { creature: {}, disabled: { type: Boolean } },
    emits: [
      "handleAttack",
      "handleAdd",
      "handleRemoveAction",
      "handleEditAction",
    ],
    setup(l, { emit: t }) {
      const _ = t,
        d = [
          { label: "Actions", value: 0 },
          { label: "Powers", value: 1 },
        ],
        r = q(0),
        c = (a) => (r.value = a),
        n = () => {
          const a = r.value === 0 ? "actions" : "powers";
          _("handleAdd", a);
        };
      return (a, i) => {
        var p, g;
        return (
          s(),
          o("div", null, [
            a.creature.presencaPerturbadora.dt
              ? (s(),
                o("div", Va, [
                  Ra,
                  e("button", wa, [
                    e(
                      "div",
                      null,
                      " DT " +
                        u(
                          (p = a.creature.presencaPerturbadora) == null
                            ? void 0
                            : p.dt
                        ) +
                        " - " +
                        u(
                          (g = a.creature.presencaPerturbadora) == null
                            ? void 0
                            : g.dice
                        ) +
                        " mental ",
                      1
                    ),
                    a.creature.presencaPerturbadora.nex
                      ? (s(),
                        o(
                          "div",
                          Ba,
                          " EXP " +
                            u(a.creature.presencaPerturbadora.nex) +
                            "%+ is immune ",
                          1
                        ))
                      : m("", !0),
                  ]),
                ]))
              : m("", !0),
            e("div", Ea, [
              y(
                ne,
                {
                  "tab-options": d,
                  "current-tab": r.value,
                  "font-size-medium": "",
                  secondary: "",
                  onHandleNavigation: c,
                },
                null,
                8,
                ["current-tab"]
              ),
              a.disabled
                ? m("", !0)
                : (s(),
                  o(
                    "button",
                    { key: 0, class: "button-secondary", onClick: n },
                    [
                      r.value === 0
                        ? (s(), o("span", Sa, " New Action "))
                        : (s(), o("span", Ma, " New Power ")),
                    ]
                  )),
            ]),
            r.value === 0
              ? (s(),
                o("div", Pa, [
                  (s(!0),
                  o(
                    A,
                    null,
                    V(
                      a.creature.actions,
                      (S) => (
                        s(),
                        o("div", { key: S.id }, [
                          y(
                            Y,
                            {
                              action: S,
                              disabled: a.disabled,
                              onHandleAttack:
                                i[0] ||
                                (i[0] = (C) => a.$emit("handleAttack", C)),
                              onHandleRemoveAction:
                                i[1] ||
                                (i[1] = (C) =>
                                  a.$emit("handleRemoveAction", C, "actions")),
                              onHandleEditAction:
                                i[2] ||
                                (i[2] = (C) =>
                                  a.$emit("handleEditAction", C, "Ação")),
                            },
                            null,
                            8,
                            ["action", "disabled"]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]))
              : m("", !0),
            r.value === 1
              ? (s(),
                o("div", Ta, [
                  (s(!0),
                  o(
                    A,
                    null,
                    V(
                      a.creature.powers,
                      (S) => (
                        s(),
                        o("div", { key: S.id }, [
                          y(
                            Y,
                            {
                              action: S,
                              disabled: a.disabled,
                              onHandleAttack:
                                i[3] ||
                                (i[3] = (C) => a.$emit("handleAttack", C)),
                              onHandleRemoveAction:
                                i[4] ||
                                (i[4] = (C) =>
                                  a.$emit("handleRemoveAction", C, "powers")),
                              onHandleEditAction:
                                i[5] ||
                                (i[5] = (C) =>
                                  a.$emit("handleEditAction", C, "Poder")),
                            },
                            null,
                            8,
                            ["action", "disabled"]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]))
              : m("", !0),
          ])
        );
      };
    },
  }),
  Ua = w(Ia, [["__scopeId", "data-v-a1e5daed"]]),
  Da = { class: "creature-image-container" },
  Ha = ["src"],
  Na = R({
    __name: "CreatureImage",
    props: { creature: {} },
    setup(l) {
      return (t, _) => (
        s(),
        o("div", Da, [
          t.creature.fullPictureURL
            ? (s(),
              o(
                "img",
                {
                  key: 0,
                  class: "creature-picture",
                  src: t.creature.fullPictureURL,
                  alt: "foto ameaça",
                },
                null,
                8,
                Ha
              ))
            : m("", !0),
        ])
      );
    },
  }),
  La = w(Na, [["__scopeId", "data-v-e3c1635c"]]),
  Fa = (l) => (M("data-v-357bb59f"), (l = l()), P(), l),
  Oa = { class: "creature-description-container" },
  qa = ["innerHTML"],
  za = { key: 1 },
  Qa = Fa(() =>
    e("div", { class: "creature-enigma-do-medo-label" }, " Enigma of Fear ", -1)
  ),
  Ga = ["innerHTML"],
  Ja = R({
    __name: "CreatureDescription",
    props: { creature: {} },
    setup(l) {
      return (t, _) => (
        s(),
        o("div", Oa, [
          t.creature.source
            ? (s(),
              O(
                fe,
                {
                  key: 0,
                  label: t.creature.source.label,
                  "ad-label": t.creature.source.adLabel,
                  link: t.creature.source.link,
                  extra: t.creature.source.extra,
                },
                null,
                8,
                ["label", "ad-label", "link", "extra"]
              ))
            : m("", !0),
          y(La, { creature: t.creature }, null, 8, ["creature"]),
          e(
            "div",
            { class: "description", innerHTML: t.creature.description },
            null,
            8,
            qa
          ),
          t.creature.enigmaDoMedo
            ? (s(),
              o("div", za, [
                Qa,
                e(
                  "div",
                  { class: "description", innerHTML: t.creature.enigmaDoMedo },
                  null,
                  8,
                  Ga
                ),
              ]))
            : m("", !0),
        ])
      );
    },
  }),
  Ka = w(Ja, [["__scopeId", "data-v-357bb59f"]]),
  Wa = { class: "creature-sheet-container" },
  Xa = { class: "sheet-padding" },
  ja = { class: "tab-nav-container" },
  Ya = { class: "creature-sheet-content-container" },
  Za = R({
    __name: "CreatureSheet",
    props: {
      creature: {},
      disabled: { type: Boolean },
      noEditButton: { type: Boolean },
    },
    emits: [
      "handleRollAttribute",
      "handleAttack",
      "handleAdd",
      "handleChangePvField",
      "handleChangePv",
      "handleRemoveAction",
      "handleEditCreature",
      "handleEditCreatureAction",
      "handleRollSkill",
    ],
    setup(l) {
      Z((n) => ({ "7c4de83b": c.value }));
      const t = l,
        _ = [
          { label: "STATUS", value: 0 },
          { label: "COMBAT", value: 1 },
          { label: "DESCRIPTION", value: 2 },
        ],
        d = q(0),
        r = (n) => (d.value = n),
        c = U(() =>
          t.creature.element === "conhecimento"
            ? $.conhecimento.color
            : t.creature.element === "energia"
            ? $.energia.color
            : t.creature.element === "medo"
            ? $.medo.color
            : t.creature.element === "morte"
            ? $.morte.color
            : t.creature.element === "sangue"
            ? $.sangue.color
            : t.creature.element === "nenhum"
            ? $.realidade.color
            : $.realidade.color
        );
      return (n, a) => (
        s(),
        o("div", Wa, [
          y(
            nt,
            {
              creature: n.creature,
              disabled: n.disabled,
              "no-edit-button": n.noEditButton,
              onHandleChangePvField:
                a[0] ||
                (a[0] = (i, p) =>
                  n.$emit("handleChangePvField", n.creature, i, p)),
              onHandleChangePv:
                a[1] ||
                (a[1] = (i) => n.$emit("handleChangePv", n.creature, i)),
              onHandleEditCreature:
                a[2] ||
                (a[2] = (i) => n.$emit("handleEditCreature", n.creature)),
            },
            null,
            8,
            ["creature", "disabled", "no-edit-button"]
          ),
          e("div", Xa, [
            e("div", ja, [
              y(
                ne,
                {
                  "tab-options": _,
                  "current-tab": d.value,
                  "alt-color": c.value,
                  "no-gap": "",
                  onHandleNavigation: r,
                },
                null,
                8,
                ["current-tab", "alt-color"]
              ),
            ]),
            e("div", Ya, [
              d.value === 0
                ? (s(),
                  O(
                    Jt,
                    {
                      key: 0,
                      creature: n.creature,
                      onHandleRollAttr:
                        a[3] ||
                        (a[3] = (i, p, g) =>
                          n.$emit("handleRollAttribute", i, p, g)),
                      onHandleRollSkill:
                        a[4] ||
                        (a[4] = (i, p, g, S) =>
                          n.$emit("handleRollSkill", i, p, g, S)),
                    },
                    null,
                    8,
                    ["creature"]
                  ))
                : m("", !0),
              d.value === 1
                ? (s(),
                  O(
                    Ua,
                    {
                      key: 1,
                      creature: n.creature,
                      disabled: n.disabled,
                      onHandleAttack:
                        a[5] ||
                        (a[5] = (i) => n.$emit("handleAttack", n.creature, i)),
                      onHandleAdd:
                        a[6] ||
                        (a[6] = (i) => n.$emit("handleAdd", n.creature, i)),
                      onHandleRemoveAction:
                        a[7] ||
                        (a[7] = (i, p) =>
                          n.$emit("handleRemoveAction", n.creature, i, p)),
                      onHandleEditAction:
                        a[8] ||
                        (a[8] = (i, p) =>
                          n.$emit(
                            "handleEditCreatureAction",
                            n.creature,
                            i,
                            p
                          )),
                    },
                    null,
                    8,
                    ["creature", "disabled"]
                  ))
                : m("", !0),
              d.value === 2
                ? (s(),
                  O(Ka, { key: 2, creature: n.creature }, null, 8, [
                    "creature",
                  ]))
                : m("", !0),
            ]),
          ]),
        ])
      );
    },
  }),
  As = w(Za, [["__scopeId", "data-v-2c1362e8"]]),
  f = (l) => (M("data-v-eb3cf59b"), (l = l()), P(), l),
  xa = { class: "form-container" },
  en = { class: "input-container" },
  tn = f(() => e("div", { class: "label" }, " Name* ", -1)),
  an = { key: 0, class: "input-row" },
  nn = { class: "input-container" },
  sn = f(() => e("div", { class: "label" }, " Type* ", -1)),
  on = f(() => e("div", { class: "title" }, " Attacks ", -1)),
  rn = { key: 1 },
  ln = { class: "input-row" },
  dn = { class: "input-container" },
  cn = f(() => e("div", { class: "label" }, " Name ", -1)),
  un = ["onUpdate:modelValue"],
  mn = { class: "button-remove-container" },
  vn = ["onClick"],
  pn = { class: "input-row" },
  _n = { class: "input-container" },
  hn = f(() => e("div", { class: "label" }, " Range* ", -1)),
  bn = ["onUpdate:modelValue"],
  $n = { class: "input-container" },
  fn = f(() => e("div", { class: "label" }, " Number of Attacks* ", -1)),
  gn = ["onUpdate:modelValue"],
  yn = { class: "input-row" },
  kn = { class: "input-container" },
  Cn = f(() => e("div", { class: "label" }, " Dice* ", -1)),
  An = ["onUpdate:modelValue"],
  Vn = { class: "input-container" },
  Rn = f(() => e("div", { class: "label" }, " Bonus ", -1)),
  wn = ["onUpdate:modelValue"],
  Bn = { class: "input-container" },
  En = f(() => e("div", { class: "label" }, " Critical* ", -1)),
  Sn = ["onUpdate:modelValue"],
  Mn = { class: "input-container" },
  Pn = f(() => e("div", { class: "label" }, " Multiplier* ", -1)),
  Tn = ["onUpdate:modelValue"],
  In = { class: "input-row" },
  Un = { class: "input-container" },
  Dn = f(() => e("div", { class: "label" }, " Damage* ", -1)),
  Hn = ["onUpdate:modelValue"],
  Nn = { class: "input-container" },
  Ln = f(() => e("div", { class: "label" }, " Type* ", -1)),
  Fn = { class: "title-container" },
  On = f(() => e("div", { class: "title" }, " Extra dice ", -1)),
  qn = ["onClick"],
  zn = { key: 0 },
  Qn = { class: "input-row" },
  Gn = { class: "input-container" },
  Jn = f(() => e("div", { class: "label" }, " Damage* ", -1)),
  Kn = ["onUpdate:modelValue"],
  Wn = { class: "input-container" },
  Xn = f(() => e("div", { class: "label" }, " Type* ", -1)),
  jn = { class: "button-remove-container" },
  Yn = ["onClick"],
  Zn = { class: "editor-container" },
  xn = f(() =>
    e(
      "div",
      { class: "label" },
      [
        H(" Description"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  es = f(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  ts = { class: "buttons-container" },
  as = ["disabled"],
  ns = R({
    __name: "ActionForm",
    props: {
      action: { type: Object, default: Q },
      isAction: Boolean,
      addMode: Boolean,
    },
    emits: ["handleClose", "handleEdit"],
    setup(l, { emit: t }) {
      const _ = l,
        d = t,
        r = ["standard", "movement", "complete", "free", "reation"],
        c = [
            "Ballistic",
            "Bludgeoning",
            "Blood",
            "Chemical",
            "Cold",
            "Death",
            "Electricity",
            "Energy",
            "Fire",
            "Knowledge",
            "Mental",
            "Piercing",
            "Slashing",
        ],
        n = me(),
        a = q(G.cloneDeep(_.action)),
        i = U(() => {
          if (!a.value.name) return !0;
          if (a.value.attacks)
            for (const h of a.value.attacks) {
              if (
                !h.range ||
                !h.numberOfAttacks ||
                !h.rollNumber ||
                !h.criticalRange ||
                !h.criticalMult
              )
                return !0;
              for (const k of h.damage) if (!k.value) return !0;
            }
          if (a.value.tests)
            for (const h of a.value.tests) {
              if (!h.dt) return !0;
              if (h.damage) {
                for (const k of h.damage) if (!k.value) return !0;
              }
            }
          if (a.value.macros) {
            for (const h of a.value.macros) if (!h.value) return !0;
          }
          if (a.value.automaticDamage) {
            for (const h of a.value.automaticDamage) if (!h.value) return !0;
          }
          return !1;
        }),
        p = () => {
          F.isArray(a.value.attacks) || (a.value.attacks = []),
            a.value.attacks.push({
              id: K(),
              name: "New attack",
              numberOfAttacks: 1,
              range: "Melee",
              rollNumber: 1,
              criticalMult: 2,
              criticalRange: 20,
              damage: [{ id: K(), value: "1d6", damageType: "ballistic" }],
            });
        },
        g = (h) => {
          F.isArray(a.value.attacks) &&
            a.value.attacks.splice(
              a.value.attacks.findIndex((k) => k.id === h),
              1
            );
        },
        S = (h) => {
          F.isArray(a.value.attacks) &&
            a.value.attacks[h].damage.push({
              id: K(),
              value: "1d6",
              damageType: "ballistic",
            });
        },
        C = (h, k) => {
          F.isArray(a.value.attacks) && a.value.attacks[h].damage.splice(k, 1);
        },
        se = () => {
          var h;
          (a.value = G.clone(Q)),
            d("handleClose"),
            (h = n == null ? void 0 : n.proxy) == null || h.$forceUpdate();
        },
        oe = () => {
          var h;
          i.value ||
            (ge(a.value),
            d("handleEdit", a.value),
            (a.value = G.cloneDeep(Q)),
            (h = n == null ? void 0 : n.proxy) == null || h.$forceUpdate());
        };
      return (h, k) => {
        const re = ue("p-editor");
        return (
          s(),
          o(
            A,
            null,
            [
              e("div", xa, [
                e("div", en, [
                  tn,
                  B(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          k[0] || (k[0] = (v) => (a.value.name = v)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[E, a.value.name]]
                  ),
                ]),
                l.isAction
                  ? (s(),
                    o("div", an, [
                      e("div", nn, [
                        sn,
                        y(
                          J,
                          {
                            value: a.value.type,
                            options: r,
                            width: "7.5rem",
                            "content-width": "7.5rem",
                            "form-input": "",
                            onUpdateValue:
                              k[1] || (k[1] = (v) => (a.value.type = v)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]))
                  : m("", !0),
                e("div", { class: "title-container" }, [
                  on,
                  e(
                    "button",
                    { class: "button-primary", onClick: p },
                    " Add "
                  ),
                ]),
                a.value.attacks && a.value.attacks.length > 0
                  ? (s(),
                    o("div", rn, [
                      (s(!0),
                      o(
                        A,
                        null,
                        V(
                          a.value.attacks,
                          (v, W) => (
                            s(),
                            o(
                              "div",
                              { key: v.id, class: "extra-damage-container" },
                              [
                                e("div", ln, [
                                  e("div", dn, [
                                    cn,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.name = b),
                                          type: "text",
                                          class: "input-primary dark",
                                        },
                                        null,
                                        8,
                                        un
                                      ),
                                      [[E, v.name]]
                                    ),
                                  ]),
                                  e("div", mn, [
                                    e(
                                      "button",
                                      {
                                        class: "button-secondary",
                                        onClick: (b) => g(v.id),
                                      },
                                      " Remove ",
                                      8,
                                      vn
                                    ),
                                  ]),
                                ]),
                                e("div", pn, [
                                  e("div", _n, [
                                    hn,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.range = b),
                                          type: "text",
                                          class: "input-primary dark",
                                        },
                                        null,
                                        8,
                                        bn
                                      ),
                                      [[E, v.range]]
                                    ),
                                  ]),
                                  e("div", $n, [
                                    fn,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.numberOfAttacks = b),
                                          type: "number",
                                          class: "input-primary dark small",
                                        },
                                        null,
                                        8,
                                        gn
                                      ),
                                      [[E, v.numberOfAttacks]]
                                    ),
                                  ]),
                                ]),
                                e("div", yn, [
                                  e("div", kn, [
                                    Cn,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.rollNumber = b),
                                          type: "number",
                                          class: "input-primary dark small",
                                        },
                                        null,
                                        8,
                                        An
                                      ),
                                      [[E, v.rollNumber]]
                                    ),
                                  ]),
                                  e("div", Vn, [
                                    Rn,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.rollBonus = b),
                                          type: "number",
                                          class: "input-primary dark small",
                                        },
                                        null,
                                        8,
                                        wn
                                      ),
                                      [[E, v.rollBonus]]
                                    ),
                                  ]),
                                  e("div", Bn, [
                                    En,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.criticalRange = b),
                                          type: "number",
                                          class:
                                            "input-primary dark small input-align-center",
                                        },
                                        null,
                                        8,
                                        Sn
                                      ),
                                      [[E, v.criticalRange]]
                                    ),
                                  ]),
                                  e("div", Mn, [
                                    Pn,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.criticalMult = b),
                                          type: "number",
                                          class:
                                            "input-primary dark small input-align-center",
                                        },
                                        null,
                                        8,
                                        Tn
                                      ),
                                      [[E, v.criticalMult]]
                                    ),
                                  ]),
                                ]),
                                e("div", In, [
                                  e("div", Un, [
                                    Dn,
                                    B(
                                      e(
                                        "input",
                                        {
                                          "onUpdate:modelValue": (b) =>
                                            (v.damage[0].value = b),
                                          type: "text",
                                          class: "input-primary dark",
                                        },
                                        null,
                                        8,
                                        Hn
                                      ),
                                      [[E, v.damage[0].value]]
                                    ),
                                  ]),
                                  e("div", Nn, [
                                    Ln,
                                    y(
                                      J,
                                      {
                                        value: v.damage[0].damageType,
                                        options: c,
                                        width: "7.5rem",
                                        "content-width": "7.5rem",
                                        "form-input": "",
                                        onUpdateValue: (b) =>
                                          (v.damage[0].damageType = b),
                                      },
                                      null,
                                      8,
                                      ["value", "onUpdateValue"]
                                    ),
                                  ]),
                                ]),
                                e("div", Fn, [
                                  On,
                                  e(
                                    "button",
                                    {
                                      class: "button-primary",
                                      onClick: (b) => S(W),
                                    },
                                    " Add ",
                                    8,
                                    qn
                                  ),
                                ]),
                                (s(!0),
                                o(
                                  A,
                                  null,
                                  V(
                                    v.damage,
                                    (b, I) => (
                                      s(),
                                      o(
                                        "div",
                                        {
                                          key: b.id,
                                          class: "added-damage-card",
                                        },
                                        [
                                          I !== 0
                                            ? (s(),
                                              o("div", zn, [
                                                e("div", Qn, [
                                                  e("div", Gn, [
                                                    Jn,
                                                    B(
                                                      e(
                                                        "input",
                                                        {
                                                          "onUpdate:modelValue":
                                                            (L) =>
                                                              (v.damage[
                                                                I
                                                              ].value = L),
                                                          type: "text",
                                                          class:
                                                            "input-primary dark",
                                                        },
                                                        null,
                                                        8,
                                                        Kn
                                                      ),
                                                      [[E, v.damage[I].value]]
                                                    ),
                                                  ]),
                                                  e("div", Wn, [
                                                    Xn,
                                                    y(
                                                      J,
                                                      {
                                                        value:
                                                          v.damage[I]
                                                            .damageType,
                                                        options: c,
                                                        width: "7.5rem",
                                                        "content-width":
                                                          "7.5rem",
                                                        "form-input": "",
                                                        onUpdateValue: (L) =>
                                                          (v.damage[
                                                            I
                                                          ].damageType = L),
                                                      },
                                                      null,
                                                      8,
                                                      ["value", "onUpdateValue"]
                                                    ),
                                                  ]),
                                                  e("div", jn, [
                                                    e(
                                                      "button",
                                                      {
                                                        class:
                                                          "button-secondary",
                                                        onClick: (L) => C(W, I),
                                                      },
                                                      " Remove ",
                                                      8,
                                                      Yn
                                                    ),
                                                  ]),
                                                ]),
                                              ]))
                                            : m("", !0),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : m("", !0),
                e("div", Zn, [
                  xn,
                  y(
                    re,
                    {
                      modelValue: a.value.description,
                      "onUpdate:modelValue":
                        k[2] || (k[2] = (v) => (a.value.description = v)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: ee(() => [es]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                ]),
              ]),
              e("div", ts, [
                e(
                  "button",
                  { class: "button-cancel", onClick: se },
                  " Cancel "
                ),
                e(
                  "button",
                  {
                    class: "button-primary big",
                    disabled: i.value,
                    onClick: oe,
                  },
                  u(_.addMode ? "Add" : "Edit"),
                  9,
                  as
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  }),
  ss = w(ns, [["__scopeId", "data-v-eb3cf59b"]]),
  os = (l) => (M("data-v-1599fc5d"), (l = l()), P(), l),
  rs = { class: "modal-content modal-width" },
  is = { class: "modal-header" },
  ls = os(() =>
    e("img", { class: "close-icon", src: ve, alt: "fechar" }, null, -1)
  ),
  ds = [ls],
  cs = { class: "modal-body modal-height" },
  us = R({
    __name: "ActionModal",
    props: { action: {}, title: {} },
    emits: ["handleEditAction", "handleCloseModal"],
    setup(l) {
      return (t, _) => (
        s(),
        o("div", rs, [
          e("div", is, [
            e("h2", null, u(t.title), 1),
            e(
              "button",
              { onClick: _[0] || (_[0] = (d) => t.$emit("handleCloseModal")) },
              ds
            ),
          ]),
          e("div", cs, [
            y(
              ss,
              {
                action: t.action,
                onHandleEdit:
                  _[1] || (_[1] = (d) => t.$emit("handleEditAction", d)),
                onHandleClose:
                  _[2] || (_[2] = (d) => t.$emit("handleCloseModal")),
              },
              null,
              8,
              ["action"]
            ),
          ]),
        ])
      );
    },
  }),
  Vs = w(us, [["__scopeId", "data-v-1599fc5d"]]);
export { Vs as A, As as C };

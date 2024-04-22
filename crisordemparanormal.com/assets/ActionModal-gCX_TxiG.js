import { _ as Y, a as Z, b as se } from "./edit-icon-u1vf_q3w.js";
import {
  d as R,
  O as ne,
  f as N,
  o as s,
  c as n,
  a as e,
  p as E,
  b as M,
  _ as S,
  m,
  t as d,
  k as g,
  C as B,
  n as C,
  q as V,
  K as q,
  r as L,
  J as oe,
  j as K,
  v as x,
  T as ie,
  I as re,
  A as O,
  i as le,
  x as T,
  y as w,
  E as de,
} from "./index-R0omtfCh.js";
import { b as ue, c as ce, a as me } from "./creatureData-jLpja1fz.js";
import { _ as ve } from "./show-more-icon-VvUXKiHG.js";
import { _ as pe } from "./d20-icon-vaz1En3o.js";
import { T as ee } from "./TabNav-i5pnIhG4.js";
import { h as z } from "./default-tJ6A0c0K.js";
import { i as _e } from "./forms-8DDAOOVU.js";
import { _ as G, l as F } from "./lodash-gzw5KmHd.js";
import { D as Q } from "./DropdownSimple-MAVPy8cy.js";
import { v as W } from "./v4-cyCr5FZV.js";
const U = (l) => (E("data-v-ed0d7802"), (l = l()), M(), l),
  he = { class: "info-bar" },
  be = U(() => e("div", { class: "info-bar-fill" }, null, -1)),
  $e = { class: "info-bar-components" },
  fe = { class: "buttons-container" },
  ye = ["disabled"],
  ge = U(() =>
    e("img", { class: "invert-icon", src: Y, alt: "diminuir" }, null, -1)
  ),
  ke = [ge],
  Ce = ["disabled"],
  Ae = U(() =>
    e("img", { class: "invert-icon", src: Z, alt: "diminuir" }, null, -1)
  ),
  Ve = [Ae],
  Re = { class: "inputs-container" },
  Se = ["disabled", "value"],
  Te = U(() => e("div", { class: "input-divider" }, " / ", -1)),
  we = ["disabled", "value"],
  Ee = { class: "buttons-container" },
  Me = ["disabled"],
  Pe = U(() => e("img", { src: Z, alt: "aumentar" }, null, -1)),
  Ie = [Pe],
  Ue = ["disabled"],
  Be = U(() => e("img", { src: Y, alt: "aumentar" }, null, -1)),
  Ne = [Be],
  De = R({
    __name: "CreaturePvBar",
    props: { maxValue: {}, currentValue: {}, disabled: { type: Boolean } },
    emits: ["handleChangePvField", "handleChangePv"],
    setup(l, { emit: t }) {
      ne((r) => ({ "7dd26672": c.value, "7ba469ac": o.value }));
      const p = l,
        u = t,
        o = N(() => {
          const r = Math.floor((p.currentValue / p.maxValue) * 100);
          return r > 100 ? "100%" : r < 0 ? "0%" : `${r}%`;
        }),
        c = N(() =>
          Math.floor((p.currentValue / p.maxValue) * 100) <= 50
            ? "#621A1A"
            : "#B22222"
        ),
        a = (r, v) => {
          u("handleChangePvField", r.target.valueAsNumber, v);
        },
        i = (r) => {
          u("handleChangePv", r);
        };
      return (r, v) => (
        s(),
        n("div", he, [
          be,
          e("div", $e, [
            e("div", fe, [
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: r.disabled,
                  onClick: v[0] || (v[0] = (h) => i(r.currentValue - 5)),
                },
                ke,
                8,
                ye
              ),
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: r.disabled,
                  onClick: v[1] || (v[1] = (h) => i(r.currentValue - 1)),
                },
                Ve,
                8,
                Ce
              ),
            ]),
            e("div", Re, [
              e(
                "input",
                {
                  type: "number",
                  class: "info-bar-input left-input",
                  disabled: r.disabled,
                  value: r.currentValue,
                  onBlur: v[2] || (v[2] = (h) => a(h, "current")),
                },
                null,
                40,
                Se
              ),
              Te,
              e(
                "input",
                {
                  type: "number",
                  class: "info-bar-input",
                  disabled: r.disabled,
                  value: r.maxValue,
                  onBlur: v[3] || (v[3] = (h) => a(h, "max")),
                },
                null,
                40,
                we
              ),
            ]),
            e("div", Ee, [
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: r.disabled,
                  onClick: v[4] || (v[4] = (h) => i(r.currentValue + 1)),
                },
                Ie,
                8,
                Me
              ),
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: r.disabled,
                  onClick: v[5] || (v[5] = (h) => i(r.currentValue + 5)),
                },
                Ne,
                8,
                Ue
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  He = S(De, [["__scopeId", "data-v-ed0d7802"]]),
  Oe = (l) => (E("data-v-ba9956c7"), (l = l()), M(), l),
  Fe = { class: "creature-header-container" },
  Le = { key: 0 },
  qe = ["src"],
  ze = { class: "info-container" },
  Ge = { class: "info-row header-row" },
  Qe = { class: "data-container" },
  We = { class: "info-column" },
  Je = ["title"],
  Ke = { class: "info-text" },
  Xe = { key: 0, class: "creature-element" },
  je = { key: 1, class: "creature-element" },
  Ye = { class: "info-row" },
  Ze = { class: "info-text" },
  xe = { key: 0, class: "edit-container" },
  et = Oe(() =>
    e("img", { class: "edit-icon", src: se, alt: "editar" }, null, -1)
  ),
  tt = [et],
  at = { class: "pv-container" },
  st = R({
    __name: "CreatureHeader",
    props: { creature: {}, disabled: { type: Boolean } },
    emits: ["handleChangePvField", "handleChangePv", "handleEditCreature"],
    setup(l) {
      return (t, p) => (
        s(),
        n("div", Fe, [
          e("div", null, [
            t.creature.sheetPictureURL
              ? (s(),
                n("div", Le, [
                  e(
                    "img",
                    {
                      class: "creature-picture",
                      src: t.creature.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    qe
                  ),
                ]))
              : m("", !0),
          ]),
          e("div", ze, [
            e("div", Ge, [
              e("div", Qe, [
                e("div", We, [
                  e(
                    "div",
                    { class: "creature-name", title: t.creature.name },
                    d(t.creature.name),
                    9,
                    Je
                  ),
                  e("div", Ke, " VD " + d(t.creature.vd), 1),
                  t.creature.element !== "nenhum"
                    ? (s(), n("div", Xe, d(t.creature.element), 1))
                    : m("", !0),
                  t.creature.secondaryElements
                    ? (s(),
                      n(
                        "div",
                        je,
                        d(
                          t.creature.secondaryElements
                            .toString()
                            .split(",")
                            .join(" - ")
                        ),
                        1
                      ))
                    : m("", !0),
                  e("div", Ye, [
                    e(
                      "div",
                      Ze,
                      d(t.creature.creatureType) +
                        " - " +
                        d(t.creature.creatureSize),
                      1
                    ),
                  ]),
                ]),
              ]),
              t.disabled
                ? m("", !0)
                : (s(),
                  n("div", xe, [
                    e(
                      "button",
                      {
                        class: "edit-button",
                        onClick:
                          p[0] || (p[0] = (u) => t.$emit("handleEditCreature")),
                      },
                      tt
                    ),
                  ])),
            ]),
            e("div", at, [
              g(
                He,
                {
                  "current-value": t.creature.pvCurrent,
                  "max-value": t.creature.pvMax,
                  disabled: !1,
                  onHandleChangePvField:
                    p[1] ||
                    (p[1] = (u, o) => t.$emit("handleChangePvField", u, o)),
                  onHandleChangePv:
                    p[2] || (p[2] = (u) => t.$emit("handleChangePv", u)),
                },
                null,
                8,
                ["current-value", "max-value"]
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  nt = S(st, [["__scopeId", "data-v-ba9956c7"]]),
  ot = { class: "creature-skill-container" },
  it = { class: "creature-skill-button" },
  rt = { class: "skill-name" },
  lt = { class: "skill-number" },
  dt = { key: 0 },
  ut = R({
    __name: "CreatureSkill",
    props: { name: {}, rollNumber: {}, rollBonus: {} },
    setup(l) {
      return (t, p) => (
        s(),
        n("div", ot, [
          e("button", it, [
            e("div", rt, d(t.name), 1),
            e("div", lt, [
              B(d(t.rollNumber) + "d20", 1),
              t.rollBonus
                ? (s(), n("span", dt, "+" + d(t.rollBonus), 1))
                : m("", !0),
            ]),
          ]),
        ])
      );
    },
  }),
  X = S(ut, [["__scopeId", "data-v-0e68fdff"]]),
  P = (l) => (E("data-v-fb6b7cb5"), (l = l()), M(), l),
  ct = { class: "att-container" },
  mt = ["onClick"],
  vt = { class: "att-label" },
  pt = { class: "att-value" },
  _t = { class: "row-container" },
  ht = { class: "column-container" },
  bt = P(() => e("div", { class: "data-title" }, " Defesa ", -1)),
  $t = { class: "data-value" },
  ft = { class: "column-container" },
  yt = P(() => e("div", { class: "data-title" }, " Deslocamento ", -1)),
  gt = { class: "data-value" },
  kt = { key: 0 },
  Ct = { key: 0, class: "column-container" },
  At = P(() => e("div", { class: "data-title" }, " Sentidos ", -1)),
  Vt = { class: "perception-value" },
  Rt = { class: "content-container" },
  St = P(() => e("div", { class: "container-title" }, " Perícias ", -1)),
  Tt = { key: 0, class: "content-container" },
  wt = P(() => e("div", { class: "container-title" }, " Imunidades ", -1)),
  Et = { key: 0, class: "value-label" },
  Mt = { key: 1, class: "value-label" },
  Pt = { key: 1, class: "content-container" },
  It = P(() => e("div", { class: "container-title" }, " Resistências ", -1)),
  Ut = { key: 0, class: "res" },
  Bt = { class: "value-label" },
  Nt = { class: "value-label" },
  Dt = { key: 2, class: "content-container" },
  Ht = P(() =>
    e("div", { class: "container-title" }, " Vulnerabilidades ", -1)
  ),
  Ot = { class: "value-label" },
  Ft = R({
    __name: "CreatureStats",
    props: { creature: {} },
    emits: ["handleRollAttr", "handleRollSkill"],
    setup(l) {
      const t = l,
        p = N(
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
        u = {
          AGI: "Agilidade",
          FOR: "Força",
          INT: "Intelecto",
          PRE: "Presença",
          VIG: "Vigor",
        };
      return (o, c) => (
        s(),
        n("div", null, [
          e("div", ct, [
            (s(!0),
            n(
              C,
              null,
              V(
                q(ue),
                (a) => (
                  s(),
                  n(
                    "div",
                    {
                      key: a.key,
                      class: "att",
                      onClick: (i) =>
                        o.$emit(
                          "handleRollAttr",
                          o.creature.attributes[a.key],
                          u[a.label],
                          o.creature.name
                        ),
                    },
                    [
                      e("div", vt, d(a.label), 1),
                      e("button", pt, d(o.creature.attributes[a.key]), 1),
                    ],
                    8,
                    mt
                  )
                )
              ),
              128
            )),
          ]),
          e("div", _t, [
            e("div", ht, [bt, e("div", $t, d(o.creature.defense), 1)]),
            e("div", ft, [
              yt,
              e(
                "div",
                gt,
                d(o.creature.movement) +
                  "m / " +
                  d(o.creature.movement / 1.5) +
                  "q ",
                1
              ),
              o.creature.altMovements
                ? (s(),
                  n("div", kt, [
                    (s(!0),
                    n(
                      C,
                      null,
                      V(
                        o.creature.altMovements,
                        (a) => (
                          s(),
                          n(
                            "div",
                            { key: a.title, class: "alt-mov-value" },
                            d(a.title) +
                              " " +
                              d(a.value) +
                              "m / " +
                              d(a.value / 1.5) +
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
            o.creature.perceptionType
              ? (s(),
                n("div", Ct, [
                  At,
                  e("div", Vt, d(o.creature.perceptionType), 1),
                ]))
              : m("", !0),
          ]),
          e("div", Rt, [
            St,
            (s(!0),
            n(
              C,
              null,
              V(
                q(ce),
                (a) => (
                  s(),
                  n("div", { key: a.key }, [
                    g(
                      X,
                      {
                        name: a.label,
                        "roll-number": o.creature.skills[a.key].rollNumber,
                        "roll-bonus": o.creature.skills[a.key].rollBonus,
                        onClick: (i) =>
                          o.$emit(
                            "handleRollSkill",
                            o.creature.skills[a.key].rollNumber,
                            o.creature.skills[a.key].rollBonus || 0,
                            a.label,
                            o.creature.name
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
            n(
              C,
              null,
              V(
                o.creature.extraSkills,
                (a) => (
                  s(),
                  n("div", { key: a.id }, [
                    g(
                      X,
                      {
                        name: a.name,
                        "roll-number": a.rollNumber,
                        "roll-bonus": a.rollBonus,
                        onClick: (i) =>
                          o.$emit(
                            "handleRollSkill",
                            a.rollNumber,
                            a.rollBonus || 0,
                            a.name,
                            o.creature.name
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
          o.creature.imunidades.length > 0 || o.creature.imunidadesAditional
            ? (s(),
              n("div", Tt, [
                wt,
                o.creature.imunidades
                  ? (s(),
                    n(
                      "div",
                      Et,
                      d(
                        o.creature.imunidades.toString().split(",").join(" - ")
                      ),
                      1
                    ))
                  : m("", !0),
                o.creature.imunidadesAditional
                  ? (s(), n("div", Mt, d(o.creature.imunidadesAditional), 1))
                  : m("", !0),
              ]))
            : m("", !0),
          p.value
            ? (s(),
              n("div", Pt, [
                It,
                (s(!0),
                n(
                  C,
                  null,
                  V(
                    q(me),
                    (a) => (
                      s(),
                      n("div", { key: a.key }, [
                        o.creature.resistencias[a.key]
                          ? (s(),
                            n("div", Ut, [
                              e("div", Bt, d(a.label) + ": ", 1),
                              e(
                                "div",
                                Nt,
                                d(o.creature.resistencias[a.key]),
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
          o.creature.vulnerabilidades.length > 0
            ? (s(),
              n("div", Dt, [
                Ht,
                e(
                  "div",
                  Ot,
                  d(
                    o.creature.vulnerabilidades
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
  Lt = S(Ft, [["__scopeId", "data-v-fb6b7cb5"]]),
  D = (l) => (E("data-v-3f390d97"), (l = l()), M(), l),
  qt = { class: "card" },
  zt = D(() => e("img", { src: ve, alt: "ver mais" }, null, -1)),
  Gt = [zt],
  Qt = { class: "title" },
  Wt = { key: 0 },
  Jt = { key: 0 },
  Kt = { class: "content" },
  Xt = { key: 0, class: "content-container" },
  jt = { class: "content-row" },
  Yt = { key: 0, class: "attack-name" },
  Zt = { class: "value-small" },
  xt = { key: 1, class: "value-small" },
  ea = { class: "attack-value-container" },
  ta = D(() => e("strong", null, "Teste:", -1)),
  aa = { key: 0 },
  sa = { class: "attack-value-container row" },
  na = D(() => e("strong", null, "Dano:", -1)),
  oa = { key: 0 },
  ia = { key: 0, class: "attack-value-container row" },
  ra = D(() => e("strong", null, "Crítico:", -1)),
  la = { key: 0 },
  da = { key: 1 },
  ua = { key: 2 },
  ca = ["onClick"],
  ma = D(() => e("img", { src: pe, alt: "rolar" }, null, -1)),
  va = [ma],
  pa = { class: "content-container" },
  _a = ["innerHTML"],
  ha = { key: 1, class: "card-footer" },
  ba = R({
    __name: "ActionCard",
    props: { action: {}, disabled: { type: Boolean } },
    emits: ["handleAttack", "handleRemoveAction", "handleEditAction"],
    setup(l) {
      const t = L(!1),
        p = (u) => u.charAt(0).toUpperCase() + u.slice(1);
      return (u, o) => (
        s(),
        n("div", qt, [
          e(
            "div",
            {
              class: "header",
              onClick:
                o[1] || (o[1] = K((c) => (t.value = !t.value), ["stop"])),
            },
            [
              e(
                "button",
                {
                  class: oe(["show-more", { rotate: t.value }]),
                  onClick:
                    o[0] || (o[0] = K((c) => (t.value = !t.value), ["stop"])),
                },
                Gt,
                2
              ),
              e("h3", Qt, [
                u.action.type
                  ? (s(),
                    n(
                      "span",
                      Wt,
                      d(u.action.type.toLocaleUpperCase()) + " - ",
                      1
                    ))
                  : m("", !0),
                B(d(u.action.name), 1),
              ]),
            ]
          ),
          g(
            ie,
            { name: "card", mode: "out-in" },
            {
              default: x(() => [
                t.value
                  ? (s(),
                    n("div", Jt, [
                      g(re),
                      e("div", Kt, [
                        u.action.attacks
                          ? (s(),
                            n("div", Xt, [
                              (s(!0),
                              n(
                                C,
                                null,
                                V(
                                  u.action.attacks,
                                  (c) => (
                                    s(),
                                    n("div", { key: c.id, class: "action" }, [
                                      e("div", null, [
                                        e("div", jt, [
                                          c.name
                                            ? (s(), n("div", Yt, d(c.name), 1))
                                            : m("", !0),
                                          e("div", Zt, d(c.range), 1),
                                          c.numberOfAttacks > 1
                                            ? (s(),
                                              n(
                                                "div",
                                                xt,
                                                d(c.numberOfAttacks) + "x ",
                                                1
                                              ))
                                            : m("", !0),
                                        ]),
                                        e("div", null, [
                                          e("div", ea, [
                                            ta,
                                            B(" " + d(c.rollNumber) + "d20", 1),
                                            c.rollNumber
                                              ? (s(),
                                                n(
                                                  "span",
                                                  aa,
                                                  "+" + d(c.rollBonus),
                                                  1
                                                ))
                                              : m("", !0),
                                          ]),
                                          e("div", sa, [
                                            na,
                                            (s(!0),
                                            n(
                                              C,
                                              null,
                                              V(
                                                c.damage,
                                                (a) => (
                                                  s(),
                                                  n(
                                                    "div",
                                                    {
                                                      key: a.id,
                                                      class: "damage-string",
                                                    },
                                                    [
                                                      B(d(a.value), 1),
                                                      a.damageType !== "-"
                                                        ? (s(),
                                                          n(
                                                            "span",
                                                            oa,
                                                            d(p(a.damageType)),
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
                                          (c.criticalRange < 20 &&
                                            c.criticalMult > 2) ||
                                          c.criticalRange < 20 ||
                                          c.criticalMult > 2
                                            ? (s(),
                                              n("div", ia, [
                                                ra,
                                                c.criticalRange < 20 &&
                                                c.criticalMult > 2
                                                  ? (s(),
                                                    n(
                                                      "span",
                                                      la,
                                                      d(c.criticalRange) +
                                                        "/x" +
                                                        d(c.criticalMult),
                                                      1
                                                    ))
                                                  : c.criticalRange < 20
                                                  ? (s(),
                                                    n(
                                                      "span",
                                                      da,
                                                      d(c.criticalRange),
                                                      1
                                                    ))
                                                  : c.criticalMult > 2
                                                  ? (s(),
                                                    n(
                                                      "span",
                                                      ua,
                                                      "x" + d(c.criticalMult),
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
                                            onClick: (a) =>
                                              u.$emit("handleAttack", c),
                                          },
                                          va,
                                          8,
                                          ca
                                        ),
                                      ]),
                                    ])
                                  )
                                ),
                                128
                              )),
                            ]))
                          : m("", !0),
                        e("div", pa, [
                          u.action.description
                            ? (s(),
                              n(
                                "div",
                                {
                                  key: 0,
                                  class: "sheet-content",
                                  innerHTML: u.action.description,
                                },
                                null,
                                8,
                                _a
                              ))
                            : m("", !0),
                        ]),
                        u.disabled
                          ? m("", !0)
                          : (s(),
                            n("div", ha, [
                              e(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick:
                                    o[2] ||
                                    (o[2] = (c) =>
                                      u.$emit(
                                        "handleRemoveAction",
                                        u.action.id
                                      )),
                                },
                                " Remover "
                              ),
                              e(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick:
                                    o[3] ||
                                    (o[3] = (c) =>
                                      u.$emit("handleEditAction", u.action.id)),
                                },
                                " Editar "
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
  j = S(ba, [["__scopeId", "data-v-3f390d97"]]),
  $a = (l) => (E("data-v-a1e5daed"), (l = l()), M(), l),
  fa = { key: 0, class: "presenca-perturbadora-container" },
  ya = $a(() =>
    e(
      "div",
      { class: "presenca-perturbadora-label" },
      " Presença Perturbadora ",
      -1
    )
  ),
  ga = { class: "presenca-perturbadora-button" },
  ka = { key: 0 },
  Ca = { class: "tab-nav-container" },
  Aa = { key: 0 },
  Va = { key: 1 },
  Ra = { key: 1, class: "cards-container" },
  Sa = { key: 2, class: "cards-container" },
  Ta = R({
    __name: "CreatureCombat",
    props: { creature: {}, disabled: { type: Boolean } },
    emits: [
      "handleAttack",
      "handleAdd",
      "handleRemoveAction",
      "handleEditAction",
    ],
    setup(l, { emit: t }) {
      const p = t,
        u = [
          { label: "Ações", value: 0 },
          { label: "Poderes", value: 1 },
        ],
        o = L(0),
        c = (i) => (o.value = i),
        a = () => {
          const i = o.value === 0 ? "actions" : "powers";
          p("handleAdd", i);
        };
      return (i, r) => {
        var v, h;
        return (
          s(),
          n("div", null, [
            i.creature.presencaPerturbadora.dt
              ? (s(),
                n("div", fa, [
                  ya,
                  e("button", ga, [
                    e(
                      "div",
                      null,
                      " DT " +
                        d(
                          (v = i.creature.presencaPerturbadora) == null
                            ? void 0
                            : v.dt
                        ) +
                        " - " +
                        d(
                          (h = i.creature.presencaPerturbadora) == null
                            ? void 0
                            : h.dice
                        ) +
                        " mental ",
                      1
                    ),
                    i.creature.presencaPerturbadora.nex
                      ? (s(),
                        n(
                          "div",
                          ka,
                          " NEX " +
                            d(i.creature.presencaPerturbadora.nex) +
                            "%+ é imune ",
                          1
                        ))
                      : m("", !0),
                  ]),
                ]))
              : m("", !0),
            e("div", Ca, [
              g(
                ee,
                {
                  "tab-options": u,
                  "current-tab": o.value,
                  "font-size-medium": "",
                  secondary: "",
                  onHandleNavigation: c,
                },
                null,
                8,
                ["current-tab"]
              ),
              i.disabled
                ? m("", !0)
                : (s(),
                  n(
                    "button",
                    { key: 0, class: "button-secondary", onClick: a },
                    [
                      o.value === 0
                        ? (s(), n("span", Aa, " Nova Ação "))
                        : (s(), n("span", Va, " Novo Poder ")),
                    ]
                  )),
            ]),
            o.value === 0
              ? (s(),
                n("div", Ra, [
                  (s(!0),
                  n(
                    C,
                    null,
                    V(
                      i.creature.actions,
                      (A) => (
                        s(),
                        n("div", { key: A.id }, [
                          g(
                            j,
                            {
                              action: A,
                              disabled: i.disabled,
                              onHandleAttack:
                                r[0] ||
                                (r[0] = (y) => i.$emit("handleAttack", y)),
                              onHandleRemoveAction:
                                r[1] ||
                                (r[1] = (y) =>
                                  i.$emit("handleRemoveAction", y, "actions")),
                              onHandleEditAction:
                                r[2] ||
                                (r[2] = (y) =>
                                  i.$emit("handleEditAction", y, "Ação")),
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
            o.value === 1
              ? (s(),
                n("div", Sa, [
                  (s(!0),
                  n(
                    C,
                    null,
                    V(
                      i.creature.powers,
                      (A) => (
                        s(),
                        n("div", { key: A.id }, [
                          g(
                            j,
                            {
                              action: A,
                              disabled: i.disabled,
                              onHandleAttack:
                                r[3] ||
                                (r[3] = (y) => i.$emit("handleAttack", y)),
                              onHandleRemoveAction:
                                r[4] ||
                                (r[4] = (y) =>
                                  i.$emit("handleRemoveAction", y, "powers")),
                              onHandleEditAction:
                                r[5] ||
                                (r[5] = (y) =>
                                  i.$emit("handleEditAction", y, "Poder")),
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
  wa = S(Ta, [["__scopeId", "data-v-a1e5daed"]]),
  Ea = (l) => (E("data-v-aff36078"), (l = l()), M(), l),
  Ma = { class: "creature-description-container" },
  Pa = ["innerHTML"],
  Ia = { key: 0 },
  Ua = Ea(() =>
    e("div", { class: "creature-enigma-do-medo-label" }, " Enigma do Medo ", -1)
  ),
  Ba = ["innerHTML"],
  Na = R({
    __name: "CreatureDescription",
    props: { creature: {} },
    setup(l) {
      return (t, p) => (
        s(),
        n("div", Ma, [
          e("div", { innerHTML: t.creature.description }, null, 8, Pa),
          t.creature.enigmaDoMedo
            ? (s(),
              n("div", Ia, [
                Ua,
                e("div", { innerHTML: t.creature.enigmaDoMedo }, null, 8, Ba),
              ]))
            : m("", !0),
        ])
      );
    },
  }),
  Da = S(Na, [["__scopeId", "data-v-aff36078"]]),
  Ha = { class: "creature-image-container" },
  Oa = ["src"],
  Fa = R({
    __name: "CreatureImage",
    props: { creature: {} },
    setup(l) {
      return (t, p) => (
        s(),
        n("div", Ha, [
          t.creature.fullPictureURL
            ? (s(),
              n(
                "img",
                {
                  key: 0,
                  class: "creature-picture",
                  src: t.creature.fullPictureURL,
                  alt: "foto ameaça",
                },
                null,
                8,
                Oa
              ))
            : m("", !0),
        ])
      );
    },
  }),
  La = S(Fa, [["__scopeId", "data-v-e3c1635c"]]),
  qa = { class: "creature-sheet-container" },
  za = { class: "tab-nav-container" },
  Ga = { class: "creature-sheet-content-container" },
  Qa = R({
    __name: "CreatureSheet",
    props: { creature: {}, disabled: { type: Boolean } },
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
      const t = l,
        p = [
          { label: "STATUS", value: 0 },
          { label: "COMBATE", value: 1 },
          { label: "DESCRIÇÃO", value: 2 },
          { label: "IMAGEM", value: 3 },
        ],
        u = [
          { label: "STATUS", value: 0 },
          { label: "COMBATE", value: 1 },
          { label: "DESCRIÇÃO", value: 2 },
        ],
        o = L(0),
        c = N(() => (t.creature.fullPictureURL ? p : u)),
        a = (i) => (o.value = i);
      return (i, r) => (
        s(),
        n("div", qa, [
          g(
            nt,
            {
              creature: i.creature,
              disabled: i.disabled,
              onHandleChangePvField:
                r[0] ||
                (r[0] = (v, h) =>
                  i.$emit("handleChangePvField", i.creature, v, h)),
              onHandleChangePv:
                r[1] ||
                (r[1] = (v) => i.$emit("handleChangePv", i.creature, v)),
              onHandleEditCreature:
                r[2] ||
                (r[2] = (v) => i.$emit("handleEditCreature", i.creature)),
            },
            null,
            8,
            ["creature", "disabled"]
          ),
          e("div", za, [
            g(
              ee,
              {
                "tab-options": c.value,
                "current-tab": o.value,
                onHandleNavigation: a,
              },
              null,
              8,
              ["tab-options", "current-tab"]
            ),
          ]),
          e("div", Ga, [
            o.value === 0
              ? (s(),
                O(
                  Lt,
                  {
                    key: 0,
                    creature: i.creature,
                    onHandleRollAttr:
                      r[3] ||
                      (r[3] = (v, h, A) =>
                        i.$emit("handleRollAttribute", v, h, A)),
                    onHandleRollSkill:
                      r[4] ||
                      (r[4] = (v, h, A, y) =>
                        i.$emit("handleRollSkill", v, h, A, y)),
                  },
                  null,
                  8,
                  ["creature"]
                ))
              : m("", !0),
            o.value === 1
              ? (s(),
                O(
                  wa,
                  {
                    key: 1,
                    creature: i.creature,
                    disabled: i.disabled,
                    onHandleAttack:
                      r[5] ||
                      (r[5] = (v) => i.$emit("handleAttack", i.creature, v)),
                    onHandleAdd:
                      r[6] ||
                      (r[6] = (v) => i.$emit("handleAdd", i.creature, v)),
                    onHandleRemoveAction:
                      r[7] ||
                      (r[7] = (v, h) =>
                        i.$emit("handleRemoveAction", i.creature, v, h)),
                    onHandleEditAction:
                      r[8] ||
                      (r[8] = (v, h) =>
                        i.$emit("handleEditCreatureAction", i.creature, v, h)),
                  },
                  null,
                  8,
                  ["creature", "disabled"]
                ))
              : m("", !0),
            o.value === 2
              ? (s(),
                O(Da, { key: 2, creature: i.creature }, null, 8, ["creature"]))
              : m("", !0),
            o.value === 3
              ? (s(),
                O(La, { key: 3, creature: i.creature }, null, 8, ["creature"]))
              : m("", !0),
          ]),
        ])
      );
    },
  }),
  _n = S(Qa, [["__scopeId", "data-v-e3917099"]]),
  f = (l) => (E("data-v-f0b56557"), (l = l()), M(), l),
  Wa = { class: "form-container" },
  Ja = { class: "input-container" },
  Ka = f(() => e("div", { class: "label" }, " Nome* ", -1)),
  Xa = { key: 0, class: "input-row" },
  ja = { class: "input-container" },
  Ya = f(() => e("div", { class: "label" }, " Tipo* ", -1)),
  Za = f(() => e("div", { class: "title" }, " Ataques ", -1)),
  xa = { class: "input-row" },
  es = { class: "input-container" },
  ts = f(() => e("div", { class: "label" }, " Nome ", -1)),
  as = ["onUpdate:modelValue"],
  ss = { class: "button-remove-container" },
  ns = ["onClick"],
  os = { class: "input-row" },
  is = { class: "input-container" },
  rs = f(() => e("div", { class: "label" }, " Alcance* ", -1)),
  ls = ["onUpdate:modelValue"],
  ds = { class: "input-container" },
  us = f(() => e("div", { class: "label" }, " Quantidade de ataques* ", -1)),
  cs = ["onUpdate:modelValue"],
  ms = { class: "input-row" },
  vs = { class: "input-container" },
  ps = f(() => e("div", { class: "label" }, " Dados* ", -1)),
  _s = ["onUpdate:modelValue"],
  hs = { class: "input-container" },
  bs = f(() => e("div", { class: "label" }, " Bônus ", -1)),
  $s = ["onUpdate:modelValue"],
  fs = { class: "input-container" },
  ys = f(() => e("div", { class: "label" }, " Crítico* ", -1)),
  gs = ["onUpdate:modelValue"],
  ks = { class: "input-container" },
  Cs = f(() => e("div", { class: "label" }, " Multiplicador* ", -1)),
  As = ["onUpdate:modelValue"],
  Vs = { class: "input-row" },
  Rs = { class: "input-container" },
  Ss = f(() => e("div", { class: "label" }, " Dano* ", -1)),
  Ts = ["onUpdate:modelValue"],
  ws = { class: "input-container" },
  Es = f(() => e("div", { class: "label" }, " Tipo* ", -1)),
  Ms = { class: "title-container" },
  Ps = f(() => e("div", { class: "title" }, " Danos adicionais ", -1)),
  Is = ["onClick"],
  Us = { key: 0 },
  Bs = { class: "input-row" },
  Ns = { class: "input-container" },
  Ds = f(() => e("div", { class: "label" }, " Dano* ", -1)),
  Hs = ["onUpdate:modelValue"],
  Os = { class: "input-container" },
  Fs = f(() => e("div", { class: "label" }, " Tipo* ", -1)),
  Ls = { class: "button-remove-container" },
  qs = ["onClick"],
  zs = { class: "editor-container" },
  Gs = f(() =>
    e(
      "div",
      { class: "label" },
      [
        B(" Descrição"),
        e("span", null, " (utilize negrito para aplicar a cor roxo)"),
      ],
      -1
    )
  ),
  Qs = f(() =>
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
  Ws = { class: "buttons-container" },
  Js = ["disabled"],
  Ks = R({
    __name: "ActionForm",
    props: {
      action: { type: Object, default: z },
      isAction: Boolean,
      addMode: Boolean,
    },
    emits: ["handleClose", "handleEdit"],
    setup(l, { emit: t }) {
      const p = l,
        u = t,
        o = ["padrão", "movimento", "completa", "livre", "reação"],
        c = [
          "Balístico",
          "Conhecimento",
          "Corte",
          "Eletricidade",
          "Energia",
          "Fogo",
          "Frio",
          "Impacto",
          "Mental",
          "Morte",
          "Perfuração",
          "Sangue",
          "Químico",
        ],
        a = L(G.cloneDeep(p.action)),
        i = N(() => {
          if (!a.value.name) return !0;
          if (a.value.attacks)
            for (const b of a.value.attacks) {
              if (
                !b.range ||
                !b.numberOfAttacks ||
                !b.rollNumber ||
                !b.criticalRange ||
                !b.criticalMult
              )
                return !0;
              for (const k of b.damage) if (!k.value) return !0;
            }
          if (a.value.tests)
            for (const b of a.value.tests) {
              if (!b.dt) return !0;
              if (b.damage) {
                for (const k of b.damage) if (!k.value) return !0;
              }
            }
          if (a.value.macros) {
            for (const b of a.value.macros) if (!b.value) return !0;
          }
          if (a.value.automaticDamage) {
            for (const b of a.value.automaticDamage) if (!b.value) return !0;
          }
          return !1;
        }),
        r = () => {
          F.isArray(a.value.attacks) || (a.value.attacks = []),
            a.value.attacks.push({
              id: W(),
              name: "Novo ataque",
              numberOfAttacks: 1,
              range: "Corpo a corpo",
              rollNumber: 1,
              criticalMult: 2,
              criticalRange: 20,
              damage: [{ id: W(), value: "1d6", damageType: "balístico" }],
            });
        },
        v = (b) => {
          F.isArray(a.value.attacks) &&
            a.value.attacks.splice(
              a.value.attacks.findIndex((k) => k.id === b),
              1
            );
        },
        h = (b) => {
          F.isArray(a.value.attacks) &&
            a.value.attacks[b].damage.push({
              id: W(),
              value: "1d6",
              damageType: "balístico",
            });
        },
        A = (b, k) => {
          F.isArray(a.value.attacks) && a.value.attacks[b].damage.splice(k, 1);
        },
        y = () => {
          (a.value = G.clone(z)), u("handleClose");
        },
        te = () => {
          i.value ||
            (_e(a.value), u("handleEdit", a.value), (a.value = G.cloneDeep(z)));
        };
      return (b, k) => {
        const ae = le("p-editor");
        return (
          s(),
          n(
            C,
            null,
            [
              e("div", Wa, [
                e("div", Ja, [
                  Ka,
                  T(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          k[0] || (k[0] = (_) => (a.value.name = _)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[w, a.value.name]]
                  ),
                ]),
                l.isAction
                  ? (s(),
                    n("div", Xa, [
                      e("div", ja, [
                        Ya,
                        g(
                          Q,
                          {
                            value: a.value.type,
                            options: o,
                            width: "7.5rem",
                            "content-width": "7.5rem",
                            "form-input": "",
                            onUpdateValue:
                              k[1] || (k[1] = (_) => (a.value.type = _)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]))
                  : m("", !0),
                e("div", { class: "title-container" }, [
                  Za,
                  e(
                    "button",
                    { class: "button-secondary", onClick: r },
                    " Adicionar "
                  ),
                ]),
                (s(!0),
                n(
                  C,
                  null,
                  V(
                    a.value.attacks,
                    (_, J) => (
                      s(),
                      n("div", { key: _.id }, [
                        e("div", xa, [
                          e("div", es, [
                            ts,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) => (_.name = $),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                as
                              ),
                              [[w, _.name]]
                            ),
                          ]),
                          e("div", ss, [
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: ($) => v(_.id),
                              },
                              " Remover ",
                              8,
                              ns
                            ),
                          ]),
                        ]),
                        e("div", os, [
                          e("div", is, [
                            rs,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) => (_.range = $),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                ls
                              ),
                              [[w, _.range]]
                            ),
                          ]),
                          e("div", ds, [
                            us,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (_.numberOfAttacks = $),
                                  type: "number",
                                  class: "input-primary dark small",
                                },
                                null,
                                8,
                                cs
                              ),
                              [[w, _.numberOfAttacks]]
                            ),
                          ]),
                        ]),
                        e("div", ms, [
                          e("div", vs, [
                            ps,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (_.rollNumber = $),
                                  type: "number",
                                  class: "input-primary dark small",
                                },
                                null,
                                8,
                                _s
                              ),
                              [[w, _.rollNumber]]
                            ),
                          ]),
                          e("div", hs, [
                            bs,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (_.rollBonus = $),
                                  type: "number",
                                  class: "input-primary dark small",
                                },
                                null,
                                8,
                                $s
                              ),
                              [[w, _.rollBonus]]
                            ),
                          ]),
                          e("div", fs, [
                            ys,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (_.criticalRange = $),
                                  type: "number",
                                  class:
                                    "input-primary dark small input-align-center",
                                },
                                null,
                                8,
                                gs
                              ),
                              [[w, _.criticalRange]]
                            ),
                          ]),
                          e("div", ks, [
                            Cs,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (_.criticalMult = $),
                                  type: "number",
                                  class:
                                    "input-primary dark small input-align-center",
                                },
                                null,
                                8,
                                As
                              ),
                              [[w, _.criticalMult]]
                            ),
                          ]),
                        ]),
                        e("div", Vs, [
                          e("div", Rs, [
                            Ss,
                            T(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (_.damage[0].value = $),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                Ts
                              ),
                              [[w, _.damage[0].value]]
                            ),
                          ]),
                          e("div", ws, [
                            Es,
                            g(
                              Q,
                              {
                                value: _.damage[0].damageType,
                                options: c,
                                width: "7.5rem",
                                "content-width": "7.5rem",
                                "form-input": "",
                                onUpdateValue: ($) =>
                                  (_.damage[0].damageType = $),
                              },
                              null,
                              8,
                              ["value", "onUpdateValue"]
                            ),
                          ]),
                        ]),
                        e("div", Ms, [
                          Ps,
                          e(
                            "button",
                            { class: "button-secondary", onClick: ($) => h(J) },
                            " Adicionar ",
                            8,
                            Is
                          ),
                        ]),
                        (s(!0),
                        n(
                          C,
                          null,
                          V(
                            _.damage,
                            ($, I) => (
                              s(),
                              n("div", { key: $.id }, [
                                I !== 0
                                  ? (s(),
                                    n("div", Us, [
                                      e("div", Bs, [
                                        e("div", Ns, [
                                          Ds,
                                          T(
                                            e(
                                              "input",
                                              {
                                                "onUpdate:modelValue": (H) =>
                                                  (_.damage[I].value = H),
                                                type: "text",
                                                class: "input-primary dark",
                                              },
                                              null,
                                              8,
                                              Hs
                                            ),
                                            [[w, _.damage[I].value]]
                                          ),
                                        ]),
                                        e("div", Os, [
                                          Fs,
                                          g(
                                            Q,
                                            {
                                              value: _.damage[I].damageType,
                                              options: c,
                                              width: "7.5rem",
                                              "content-width": "7.5rem",
                                              "form-input": "",
                                              onUpdateValue: (H) =>
                                                (_.damage[I].damageType = H),
                                            },
                                            null,
                                            8,
                                            ["value", "onUpdateValue"]
                                          ),
                                        ]),
                                        e("div", Ls, [
                                          e(
                                            "button",
                                            {
                                              class: "button-secondary",
                                              onClick: (H) => A(J, I),
                                            },
                                            " Remover ",
                                            8,
                                            qs
                                          ),
                                        ]),
                                      ]),
                                    ]))
                                  : m("", !0),
                              ])
                            )
                          ),
                          128
                        )),
                      ])
                    )
                  ),
                  128
                )),
                e("div", zs, [
                  Gs,
                  g(
                    ae,
                    {
                      modelValue: a.value.description,
                      "onUpdate:modelValue":
                        k[2] || (k[2] = (_) => (a.value.description = _)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: x(() => [Qs]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                ]),
              ]),
              e("div", Ws, [
                e(
                  "button",
                  { class: "button-cancel", onClick: y },
                  " Cancelar "
                ),
                e(
                  "button",
                  {
                    class: "button-primary big",
                    disabled: i.value,
                    onClick: te,
                  },
                  d(p.addMode ? "Adicionar" : "Editar"),
                  9,
                  Js
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  }),
  Xs = S(Ks, [["__scopeId", "data-v-f0b56557"]]),
  js = (l) => (E("data-v-1599fc5d"), (l = l()), M(), l),
  Ys = { class: "modal-content modal-width" },
  Zs = { class: "modal-header" },
  xs = js(() =>
    e("img", { class: "close-icon", src: de, alt: "fechar" }, null, -1)
  ),
  en = [xs],
  tn = { class: "modal-body modal-height" },
  an = R({
    __name: "ActionModal",
    props: { action: {}, title: {} },
    emits: ["handleEditAction", "handleCloseModal"],
    setup(l) {
      return (t, p) => (
        s(),
        n("div", Ys, [
          e("div", Zs, [
            e("h2", null, d(t.title), 1),
            e(
              "button",
              { onClick: p[0] || (p[0] = (u) => t.$emit("handleCloseModal")) },
              en
            ),
          ]),
          e("div", tn, [
            g(
              Xs,
              {
                action: t.action,
                onHandleEdit:
                  p[1] || (p[1] = (u) => t.$emit("handleEditAction", u)),
                onHandleClose:
                  p[2] || (p[2] = (u) => t.$emit("handleCloseModal")),
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
  hn = S(an, [["__scopeId", "data-v-1599fc5d"]]);
export { hn as A, _n as C };

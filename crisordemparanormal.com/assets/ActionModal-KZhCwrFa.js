import {
  d as w,
  Q as x,
  f as I,
  o as a,
  c as n,
  a as e,
  p as M,
  b as T,
  _ as B,
  m as v,
  t as c,
  K as re,
  k,
  n as V,
  H as N,
  q as R,
  L as G,
  r as q,
  a1 as ie,
  j as Y,
  x as ee,
  T as le,
  a4 as de,
  v as F,
  i as ue,
  C as E,
  D as S,
  a3 as ce,
  J as me,
} from "./index-CCe7Lu-B.js";
import { _ as te, a as ae, b as ve } from "./edit-icon-u1vf_q3w.js";
import { b as f, d as pe, c as _e, a as he } from "./creatureData-ozdxpDUT.js";
import { _ as be } from "./show-more-icon-VvUXKiHG.js";
import { _ as $e } from "./d20-icon-vaz1En3o.js";
import { T as ne } from "./TabNav-4AlT8nGd.js";
import { h as Q } from "./default-dSfWXGfL.js";
import { i as fe } from "./forms-8DDAOOVU.js";
import { _ as W, l as O } from "./lodash-gzw5KmHd.js";
import { D as J } from "./DropdownSimple-1_2dpnbs.js";
import { v as K } from "./v4-cyCr5FZV.js";
const D = (l) => (M("data-v-ed0d7802"), (l = l()), T(), l),
  ge = { class: "info-bar" },
  ye = D(() => e("div", { class: "info-bar-fill" }, null, -1)),
  Ce = { class: "info-bar-components" },
  ke = { class: "buttons-container" },
  Ae = ["disabled"],
  Ve = D(() =>
    e("img", { class: "invert-icon", src: te, alt: "diminuir" }, null, -1)
  ),
  Re = [Ve],
  we = ["disabled"],
  Be = D(() =>
    e("img", { class: "invert-icon", src: ae, alt: "diminuir" }, null, -1)
  ),
  Ee = [Be],
  Se = { class: "inputs-container" },
  Me = ["disabled", "value"],
  Te = D(() => e("div", { class: "input-divider" }, " / ", -1)),
  Ie = ["disabled", "value"],
  Pe = { class: "buttons-container" },
  Ue = ["disabled"],
  De = D(() => e("img", { src: ae, alt: "aumentar" }, null, -1)),
  Ne = [De],
  He = ["disabled"],
  Le = D(() => e("img", { src: te, alt: "aumentar" }, null, -1)),
  Fe = [Le],
  Oe = w({
    __name: "CreaturePvBar",
    props: { maxValue: {}, currentValue: {}, disabled: { type: Boolean } },
    emits: ["handleChangePvField", "handleChangePv"],
    setup(l, { emit: t }) {
      x((s) => ({ "7dd26672": u.value, "7ba469ac": o.value }));
      const h = l,
        d = t,
        o = I(() => {
          const s = Math.floor((h.currentValue / h.maxValue) * 100);
          return s > 100 ? "100%" : s < 0 ? "0%" : `${s}%`;
        }),
        u = I(() =>
          Math.floor((h.currentValue / h.maxValue) * 100) <= 50
            ? "#621A1A"
            : "#B22222"
        ),
        i = (s, m) => {
          d("handleChangePvField", s.target.valueAsNumber, m);
        },
        r = (s) => {
          d("handleChangePv", s);
        };
      return (s, m) => (
        a(),
        n("div", ge, [
          ye,
          e("div", Ce, [
            e("div", ke, [
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: s.disabled,
                  onClick: m[0] || (m[0] = (_) => r(s.currentValue - 5)),
                },
                Re,
                8,
                Ae
              ),
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: s.disabled,
                  onClick: m[1] || (m[1] = (_) => r(s.currentValue - 1)),
                },
                Ee,
                8,
                we
              ),
            ]),
            e("div", Se, [
              e(
                "input",
                {
                  type: "number",
                  class: "info-bar-input left-input",
                  disabled: s.disabled,
                  value: s.currentValue,
                  onBlur: m[2] || (m[2] = (_) => i(_, "current")),
                },
                null,
                40,
                Me
              ),
              Te,
              e(
                "input",
                {
                  type: "number",
                  class: "info-bar-input",
                  disabled: s.disabled,
                  value: s.maxValue,
                  onBlur: m[3] || (m[3] = (_) => i(_, "max")),
                },
                null,
                40,
                Ie
              ),
            ]),
            e("div", Pe, [
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: s.disabled,
                  onClick: m[4] || (m[4] = (_) => r(s.currentValue + 1)),
                },
                Ne,
                8,
                Ue
              ),
              e(
                "button",
                {
                  class: "info-bar-button button-naked",
                  disabled: s.disabled,
                  onClick: m[5] || (m[5] = (_) => r(s.currentValue + 5)),
                },
                Fe,
                8,
                He
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  qe = B(Oe, [["__scopeId", "data-v-ed0d7802"]]),
  ze = (l) => (M("data-v-b662adad"), (l = l()), T(), l),
  Ge = { key: 0, class: "img-container" },
  Qe = ["src"],
  We = { class: "header-content" },
  Je = { class: "edit-row" },
  Ke = ze(() =>
    e("img", { class: "edit-icon", src: ve, alt: "editar" }, null, -1)
  ),
  Xe = [Ke],
  Ye = { class: "info-row" },
  Ze = { class: "name" },
  je = { class: "vd" },
  xe = { class: "info" },
  et = { class: "pv-container" },
  tt = w({
    __name: "CreatureHeader",
    props: {
      creature: {},
      disabled: { type: Boolean },
      noEditButton: { type: Boolean },
    },
    emits: ["handleChangePvField", "handleChangePv", "handleEditCreature"],
    setup(l) {
      const t = l,
        h = I(() =>
          t.creature.name.toLocaleLowerCase() === "máscara do desespero"
            ? f.magistrada.banner
            : t.creature.name.toLocaleLowerCase() === "anfitrião"
            ? f.anfitriao.banner
            : t.creature.name.toLocaleLowerCase() === "o deus da morte"
            ? f.deus.banner
            : t.creature.name.toLocaleLowerCase() === "o diabo"
            ? f.diabo.banner
            : t.creature.name.toLocaleLowerCase() === "degolificada"
            ? f.degolificada.banner
            : t.creature.element === "conhecimento"
            ? f.conhecimento.banner
            : t.creature.element === "energia"
            ? f.energia.banner
            : t.creature.element === "medo"
            ? f.medo.banner
            : t.creature.element === "morte"
            ? f.morte.banner
            : t.creature.element === "sangue"
            ? f.sangue.banner
            : t.creature.element === "nenhum"
            ? f.realidade.banner
            : f.realidade.banner
        );
      return (d, o) => (
        a(),
        n(
          V,
          null,
          [
            e(
              "div",
              {
                class: "creature-header-container",
                style: re({
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 77.37%, #111 97.89%), url(${h.value})`,
                }),
              },
              [
                d.creature.sheetPictureURL
                  ? (a(),
                    n("div", Ge, [
                      e(
                        "img",
                        {
                          class: "creature-picture",
                          src: d.creature.sheetPictureURL,
                          alt: "foto ameaça",
                        },
                        null,
                        8,
                        Qe
                      ),
                    ]))
                  : v("", !0),
                e("div", We, [
                  e("div", Je, [
                    d.noEditButton
                      ? v("", !0)
                      : (a(),
                        n(
                          "button",
                          {
                            key: 0,
                            class: "edit-button",
                            onClick:
                              o[0] ||
                              (o[0] = (u) => d.$emit("handleEditCreature")),
                          },
                          Xe
                        )),
                  ]),
                  e("div", Ye, [
                    e("div", Ze, c(d.creature.name), 1),
                    e("div", je, " VD: " + c(d.creature.vd), 1),
                    e(
                      "div",
                      xe,
                      c(d.creature.creatureType) +
                        " - " +
                        c(d.creature.creatureSize),
                      1
                    ),
                  ]),
                ]),
              ],
              4
            ),
            e("div", et, [
              k(
                qe,
                {
                  "current-value": d.creature.pvCurrent,
                  "max-value": d.creature.pvMax,
                  disabled: d.noEditButton || !1,
                  onHandleChangePvField:
                    o[1] ||
                    (o[1] = (u, i) => d.$emit("handleChangePvField", u, i)),
                  onHandleChangePv:
                    o[2] || (o[2] = (u) => d.$emit("handleChangePv", u)),
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
  at = B(tt, [["__scopeId", "data-v-b662adad"]]),
  nt = { class: "creature-skill-container" },
  st = { class: "creature-skill-button" },
  ot = { class: "skill-name" },
  rt = { class: "skill-number" },
  it = { key: 0 },
  lt = w({
    __name: "CreatureSkill",
    props: { name: {}, rollNumber: {}, rollBonus: {} },
    setup(l) {
      return (t, h) => (
        a(),
        n("div", nt, [
          e("button", st, [
            e("div", ot, c(t.name), 1),
            e("div", rt, [
              N(c(t.rollNumber) + "d20", 1),
              t.rollBonus
                ? (a(), n("span", it, "+" + c(t.rollBonus), 1))
                : v("", !0),
            ]),
          ]),
        ])
      );
    },
  }),
  Z = B(lt, [["__scopeId", "data-v-0e68fdff"]]),
  P = (l) => (M("data-v-fb6b7cb5"), (l = l()), T(), l),
  dt = { class: "att-container" },
  ut = ["onClick"],
  ct = { class: "att-label" },
  mt = { class: "att-value" },
  vt = { class: "row-container" },
  pt = { class: "column-container" },
  _t = P(() => e("div", { class: "data-title" }, " Defense ", -1)),
  ht = { class: "data-value" },
  bt = { class: "column-container" },
  $t = P(() => e("div", { class: "data-title" }, " Movement ", -1)),
  ft = { class: "data-value" },
  gt = { key: 0 },
  yt = { key: 0, class: "column-container" },
  Ct = P(() => e("div", { class: "data-title" }, " Senses ", -1)),
  kt = { class: "perception-value" },
  At = { class: "content-container" },
  Vt = P(() => e("div", { class: "container-title" }, " Skills ", -1)),
  Rt = { key: 0, class: "content-container" },
  wt = P(() => e("div", { class: "container-title" }, " Immunities ", -1)),
  Bt = { key: 0, class: "value-label" },
  Et = { key: 1, class: "value-label" },
  St = { key: 1, class: "content-container" },
  Mt = P(() => e("div", { class: "container-title" }, " Resistances ", -1)),
  Tt = { key: 0, class: "res" },
  It = { class: "value-label" },
  Pt = { class: "value-label" },
  Ut = { key: 2, class: "content-container" },
  Dt = P(() =>
    e("div", { class: "container-title" }, " Vulnerabilities ", -1)
  ),
  Nt = { class: "value-label" },
  Ht = w({
    __name: "CreatureStats",
    props: { creature: {} },
    emits: ["handleRollAttr", "handleRollSkill"],
    setup(l) {
      const t = l,
        h = I(
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
      return (o, u) => (
        a(),
        n("div", null, [
          e("div", dt, [
            (a(!0),
            n(
              V,
              null,
              R(
                G(pe),
                (i) => (
                  a(),
                  n(
                    "div",
                    {
                      key: i.key,
                      class: "att",
                      onClick: (r) =>
                        o.$emit(
                          "handleRollAttr",
                          o.creature.attributes[i.key],
                          d[i.label],
                          o.creature.name
                        ),
                    },
                    [
                      e("div", ct, c(i.label), 1),
                      e("button", mt, c(o.creature.attributes[i.key]), 1),
                    ],
                    8,
                    ut
                  )
                )
              ),
              128
            )),
          ]),
          e("div", vt, [
            e("div", pt, [_t, e("div", ht, c(o.creature.defense), 1)]),
            e("div", bt, [
              $t,
              e(
                "div",
                ft,
                c(o.creature.movement) +
                  "m / " +
                  c(o.creature.movement / 1.5) +
                  "q ",
                1
              ),
              o.creature.altMovements
                ? (a(),
                  n("div", gt, [
                    (a(!0),
                    n(
                      V,
                      null,
                      R(
                        o.creature.altMovements,
                        (i) => (
                          a(),
                          n(
                            "div",
                            { key: i.title, class: "alt-mov-value" },
                            c(i.title) +
                              " " +
                              c(i.value) +
                              "m / " +
                              c(i.value / 1.5) +
                              "q ",
                            1
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : v("", !0),
            ]),
            o.creature.perceptionType
              ? (a(),
                n("div", yt, [
                  Ct,
                  e("div", kt, c(o.creature.perceptionType), 1),
                ]))
              : v("", !0),
          ]),
          e("div", At, [
            Vt,
            (a(!0),
            n(
              V,
              null,
              R(
                G(_e),
                (i) => (
                  a(),
                  n("div", { key: i.key }, [
                    k(
                      Z,
                      {
                        name: i.label,
                        "roll-number": o.creature.skills[i.key].rollNumber,
                        "roll-bonus": o.creature.skills[i.key].rollBonus,
                        onClick: (r) =>
                          o.$emit(
                            "handleRollSkill",
                            o.creature.skills[i.key].rollNumber,
                            o.creature.skills[i.key].rollBonus || 0,
                            i.label,
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
            (a(!0),
            n(
              V,
              null,
              R(
                o.creature.extraSkills,
                (i) => (
                  a(),
                  n("div", { key: i.id }, [
                    k(
                      Z,
                      {
                        name: i.name,
                        "roll-number": i.rollNumber,
                        "roll-bonus": i.rollBonus,
                        onClick: (r) =>
                          o.$emit(
                            "handleRollSkill",
                            i.rollNumber,
                            i.rollBonus || 0,
                            i.name,
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
            ? (a(),
              n("div", Rt, [
                wt,
                o.creature.imunidades
                  ? (a(),
                    n(
                      "div",
                      Bt,
                      c(
                        o.creature.imunidades.toString().split(",").join(" - ")
                      ),
                      1
                    ))
                  : v("", !0),
                o.creature.imunidadesAditional
                  ? (a(), n("div", Et, c(o.creature.imunidadesAditional), 1))
                  : v("", !0),
              ]))
            : v("", !0),
          h.value
            ? (a(),
              n("div", St, [
                Mt,
                (a(!0),
                n(
                  V,
                  null,
                  R(
                    G(he),
                    (i) => (
                      a(),
                      n("div", { key: i.key }, [
                        o.creature.resistencias[i.key]
                          ? (a(),
                            n("div", Tt, [
                              e("div", It, c(i.label) + ": ", 1),
                              e(
                                "div",
                                Pt,
                                c(o.creature.resistencias[i.key]),
                                1
                              ),
                            ]))
                          : v("", !0),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : v("", !0),
          o.creature.vulnerabilidades.length > 0
            ? (a(),
              n("div", Ut, [
                Dt,
                e(
                  "div",
                  Nt,
                  c(
                    o.creature.vulnerabilidades
                      .toString()
                      .split(",")
                      .join(" - ")
                  ),
                  1
                ),
              ]))
            : v("", !0),
        ])
      );
    },
  }),
  Lt = B(Ht, [["__scopeId", "data-v-fb6b7cb5"]]),
  H = (l) => (M("data-v-aeba01a3"), (l = l()), T(), l),
  Ft = { class: "card" },
  Ot = H(() => e("img", { src: be, alt: "ver mais" }, null, -1)),
  qt = [Ot],
  zt = { class: "title" },
  Gt = { key: 0 },
  Qt = { key: 0 },
  Wt = { class: "content" },
  Jt = { key: 0, class: "content-container" },
  Kt = { class: "content-row" },
  Xt = { key: 0, class: "attack-name" },
  Yt = { class: "value-small" },
  Zt = { key: 1, class: "value-small" },
  jt = { class: "attack-value-container" },
  xt = H(() => e("strong", null, "To Hit:", -1)),
  ea = { key: 0 },
  ta = { class: "attack-value-container row" },
  aa = H(() => e("strong", null, "Damage:", -1)),
  na = { key: 0 },
  sa = { key: 0, class: "attack-value-container row" },
  oa = H(() => e("strong", null, "Critical:", -1)),
  ra = { key: 0 },
  ia = { key: 1 },
  la = { key: 2 },
  da = ["onClick"],
  ua = H(() => e("img", { src: $e, alt: "rolar" }, null, -1)),
  ca = [ua],
  ma = { class: "content-container" },
  va = ["innerHTML"],
  pa = { key: 1, class: "card-footer" },
  _a = w({
    __name: "ActionCard",
    props: { action: {}, disabled: { type: Boolean } },
    emits: ["handleAttack", "handleRemoveAction", "handleEditAction"],
    setup(l) {
      const t = q(!1),
        h = (d) => d.charAt(0).toUpperCase() + d.slice(1);
      return (d, o) => (
        a(),
        n("div", Ft, [
          e(
            "div",
            {
              class: "header",
              onClick:
                o[1] || (o[1] = Y((u) => (t.value = !t.value), ["stop"])),
            },
            [
              e(
                "button",
                {
                  class: ie(["show-more", { rotate: t.value }]),
                  onClick:
                    o[0] || (o[0] = Y((u) => (t.value = !t.value), ["stop"])),
                },
                qt,
                2
              ),
              e("h3", zt, [
                d.action.type
                  ? (a(),
                    n(
                      "span",
                      Gt,
                      c(d.action.type.toLocaleUpperCase()) + " - ",
                      1
                    ))
                  : v("", !0),
                N(c(d.action.name), 1),
              ]),
            ]
          ),
          k(
            le,
            { name: "card", mode: "out-in" },
            {
              default: ee(() => [
                t.value
                  ? (a(),
                    n("div", Qt, [
                      k(de),
                      e("div", Wt, [
                        d.action.attacks
                          ? (a(),
                            n("div", Jt, [
                              (a(!0),
                              n(
                                V,
                                null,
                                R(
                                  d.action.attacks,
                                  (u) => (
                                    a(),
                                    n("div", { key: u.id, class: "action" }, [
                                      e("div", null, [
                                        e("div", Kt, [
                                          u.name
                                            ? (a(), n("div", Xt, c(u.name), 1))
                                            : v("", !0),
                                          e("div", Yt, c(u.range), 1),
                                          u.numberOfAttacks > 1
                                            ? (a(),
                                              n(
                                                "div",
                                                Zt,
                                                c(u.numberOfAttacks) + "x ",
                                                1
                                              ))
                                            : v("", !0),
                                        ]),
                                        e("div", null, [
                                          e("div", jt, [
                                            xt,
                                            N(" " + c(u.rollNumber) + "d20", 1),
                                            u.rollBonus
                                              ? (a(),
                                                n(
                                                  "span",
                                                  ea,
                                                  "+" + c(u.rollBonus),
                                                  1
                                                ))
                                              : v("", !0),
                                          ]),
                                          e("div", ta, [
                                            aa,
                                            (a(!0),
                                            n(
                                              V,
                                              null,
                                              R(
                                                u.damage,
                                                (i) => (
                                                  a(),
                                                  n(
                                                    "div",
                                                    {
                                                      key: i.id,
                                                      class: "damage-string",
                                                    },
                                                    [
                                                      N(c(i.value), 1),
                                                      i.damageType !== "-"
                                                        ? (a(),
                                                          n(
                                                            "span",
                                                            na,
                                                            c(h(i.damageType)),
                                                            1
                                                          ))
                                                        : v("", !0),
                                                    ]
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                          (u.criticalRange < 20 &&
                                            u.criticalMult > 2) ||
                                          u.criticalRange < 20 ||
                                          u.criticalMult > 2
                                            ? (a(),
                                              n("div", sa, [
                                                oa,
                                                u.criticalRange < 20 &&
                                                u.criticalMult > 2
                                                  ? (a(),
                                                    n(
                                                      "span",
                                                      ra,
                                                      c(u.criticalRange) +
                                                        "/x" +
                                                        c(u.criticalMult),
                                                      1
                                                    ))
                                                  : u.criticalRange < 20
                                                  ? (a(),
                                                    n(
                                                      "span",
                                                      ia,
                                                      c(u.criticalRange),
                                                      1
                                                    ))
                                                  : u.criticalMult > 2
                                                  ? (a(),
                                                    n(
                                                      "span",
                                                      la,
                                                      "x" + c(u.criticalMult),
                                                      1
                                                    ))
                                                  : v("", !0),
                                              ]))
                                            : v("", !0),
                                        ]),
                                      ]),
                                      e("div", null, [
                                        e(
                                          "button",
                                          {
                                            class: "roll-button",
                                            onClick: (i) =>
                                              d.$emit("handleAttack", u),
                                          },
                                          ca,
                                          8,
                                          da
                                        ),
                                      ]),
                                    ])
                                  )
                                ),
                                128
                              )),
                            ]))
                          : v("", !0),
                        e("div", ma, [
                          d.action.description
                            ? (a(),
                              n(
                                "div",
                                {
                                  key: 0,
                                  class: "sheet-content",
                                  innerHTML: d.action.description,
                                },
                                null,
                                8,
                                va
                              ))
                            : v("", !0),
                        ]),
                        d.disabled
                          ? v("", !0)
                          : (a(),
                            n("div", pa, [
                              e(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick:
                                    o[2] ||
                                    (o[2] = (u) =>
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
                                    o[3] ||
                                    (o[3] = (u) =>
                                      d.$emit("handleEditAction", d.action.id)),
                                },
                                " Edit "
                              ),
                            ])),
                      ]),
                    ]))
                  : v("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  j = B(_a, [["__scopeId", "data-v-aeba01a3"]]),
  ha = (l) => (M("data-v-a1e5daed"), (l = l()), T(), l),
  ba = { key: 0, class: "presenca-perturbadora-container" },
  $a = ha(() =>
    e(
      "div",
      { class: "presenca-perturbadora-label" },
      " Disturbing Presence ",
      -1
    )
  ),
  fa = { class: "presenca-perturbadora-button" },
  ga = { key: 0 },
  ya = { class: "tab-nav-container" },
  Ca = { key: 0 },
  ka = { key: 1 },
  Aa = { key: 1, class: "cards-container" },
  Va = { key: 2, class: "cards-container" },
  Ra = w({
    __name: "CreatureCombat",
    props: { creature: {}, disabled: { type: Boolean } },
    emits: [
      "handleAttack",
      "handleAdd",
      "handleRemoveAction",
      "handleEditAction",
    ],
    setup(l, { emit: t }) {
      const h = t,
        d = [
          { label: "Actions", value: 0 },
          { label: "Powers", value: 1 },
        ],
        o = q(0),
        u = (r) => (o.value = r),
        i = () => {
          const r = o.value === 0 ? "actions" : "powers";
          h("handleAdd", r);
        };
      return (r, s) => {
        var m, _;
        return (
          a(),
          n("div", null, [
            r.creature.presencaPerturbadora.dt
              ? (a(),
                n("div", ba, [
                  $a,
                  e("button", fa, [
                    e(
                      "div",
                      null,
                      " DT " +
                        c(
                          (m = r.creature.presencaPerturbadora) == null
                            ? void 0
                            : m.dt
                        ) +
                        " - " +
                        c(
                          (_ = r.creature.presencaPerturbadora) == null
                            ? void 0
                            : _.dice
                        ) +
                        " mental ",
                      1
                    ),
                    r.creature.presencaPerturbadora.nex
                      ? (a(),
                        n(
                          "div",
                          ga,
                          " NEX " +
                            c(r.creature.presencaPerturbadora.nex) +
                            "%+ is immune ",
                          1
                        ))
                      : v("", !0),
                  ]),
                ]))
              : v("", !0),
            e("div", ya, [
              k(
                ne,
                {
                  "tab-options": d,
                  "current-tab": o.value,
                  "font-size-medium": "",
                  secondary: "",
                  onHandleNavigation: u,
                },
                null,
                8,
                ["current-tab"]
              ),
              r.disabled
                ? v("", !0)
                : (a(),
                  n(
                    "button",
                    { key: 0, class: "button-secondary", onClick: i },
                    [
                      o.value === 0
                        ? (a(), n("span", Ca, " New Action "))
                        : (a(), n("span", ka, " New Power ")),
                    ]
                  )),
            ]),
            o.value === 0
              ? (a(),
                n("div", Aa, [
                  (a(!0),
                  n(
                    V,
                    null,
                    R(
                      r.creature.actions,
                      (g) => (
                        a(),
                        n("div", { key: g.id }, [
                          k(
                            j,
                            {
                              action: g,
                              disabled: r.disabled,
                              onHandleAttack:
                                s[0] ||
                                (s[0] = (y) => r.$emit("handleAttack", y)),
                              onHandleRemoveAction:
                                s[1] ||
                                (s[1] = (y) =>
                                  r.$emit("handleRemoveAction", y, "actions")),
                              onHandleEditAction:
                                s[2] ||
                                (s[2] = (y) =>
                                  r.$emit("handleEditAction", y, "Action")),
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
              : v("", !0),
            o.value === 1
              ? (a(),
                n("div", Va, [
                  (a(!0),
                  n(
                    V,
                    null,
                    R(
                      r.creature.powers,
                      (g) => (
                        a(),
                        n("div", { key: g.id }, [
                          k(
                            j,
                            {
                              action: g,
                              disabled: r.disabled,
                              onHandleAttack:
                                s[3] ||
                                (s[3] = (y) => r.$emit("handleAttack", y)),
                              onHandleRemoveAction:
                                s[4] ||
                                (s[4] = (y) =>
                                  r.$emit("handleRemoveAction", y, "powers")),
                              onHandleEditAction:
                                s[5] ||
                                (s[5] = (y) =>
                                  r.$emit("handleEditAction", y, "Power")),
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
              : v("", !0),
          ])
        );
      };
    },
  }),
  wa = B(Ra, [["__scopeId", "data-v-a1e5daed"]]),
  Ba = (l) => (M("data-v-3a1766c2"), (l = l()), T(), l),
  Ea = { class: "creature-description-container" },
  Sa = ["innerHTML"],
  Ma = { key: 0 },
  Ta = Ba(() =>
    e("div", { class: "creature-enigma-do-medo-label" }, " Enigma of Fear ", -1)
  ),
  Ia = ["innerHTML"],
  Pa = w({
    __name: "CreatureDescription",
    props: { creature: {} },
    setup(l) {
      return (t, h) => (
        a(),
        n("div", Ea, [
          e(
            "div",
            { class: "description", innerHTML: t.creature.description },
            null,
            8,
            Sa
          ),
          t.creature.enigmaDoMedo
            ? (a(),
              n("div", Ma, [
                Ta,
                e(
                  "div",
                  { class: "description", innerHTML: t.creature.enigmaDoMedo },
                  null,
                  8,
                  Ia
                ),
              ]))
            : v("", !0),
        ])
      );
    },
  }),
  Ua = B(Pa, [["__scopeId", "data-v-3a1766c2"]]),
  Da = { class: "creature-image-container" },
  Na = ["src"],
  Ha = w({
    __name: "CreatureImage",
    props: { creature: {} },
    setup(l) {
      return (t, h) => (
        a(),
        n("div", Da, [
          t.creature.fullPictureURL
            ? (a(),
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
                Na
              ))
            : v("", !0),
        ])
      );
    },
  }),
  La = B(Ha, [["__scopeId", "data-v-e3c1635c"]]),
  Fa = { class: "creature-sheet-container" },
  Oa = { class: "sheet-padding" },
  qa = { class: "tab-nav-container" },
  za = { class: "creature-sheet-content-container" },
  Ga = w({
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
      x((s) => ({ "23ff60f3": r.value }));
      const t = l,
        h = [
          { label: "STATUS", value: 0 },
          { label: "COMBAT", value: 1 },
          { label: "DESCRIPTION", value: 2 },
          { label: "IMAGE", value: 3 },
        ],
        d = [
          { label: "STATUS", value: 0 },
          { label: "COMBAT", value: 1 },
          { label: "DESCRIPTION", value: 2 },
        ],
        o = q(0),
        u = I(() => (t.creature.fullPictureURL ? h : d)),
        i = (s) => (o.value = s),
        r = I(() =>
          t.creature.element === "conhecimento"
            ? f.conhecimento.color
            : t.creature.element === "energia"
            ? f.energia.color
            : t.creature.element === "medo"
            ? f.medo.color
            : t.creature.element === "morte"
            ? f.morte.color
            : t.creature.element === "sangue"
            ? f.sangue.color
            : t.creature.element === "nenhum"
            ? f.realidade.color
            : f.realidade.color
        );
      return (s, m) => (
        a(),
        n("div", Fa, [
          k(
            at,
            {
              creature: s.creature,
              disabled: s.disabled,
              "no-edit-button": s.noEditButton,
              onHandleChangePvField:
                m[0] ||
                (m[0] = (_, g) =>
                  s.$emit("handleChangePvField", s.creature, _, g)),
              onHandleChangePv:
                m[1] ||
                (m[1] = (_) => s.$emit("handleChangePv", s.creature, _)),
              onHandleEditCreature:
                m[2] ||
                (m[2] = (_) => s.$emit("handleEditCreature", s.creature)),
            },
            null,
            8,
            ["creature", "disabled", "no-edit-button"]
          ),
          e("div", Oa, [
            e("div", qa, [
              k(
                ne,
                {
                  "tab-options": u.value,
                  "current-tab": o.value,
                  "alt-color": r.value,
                  onHandleNavigation: i,
                },
                null,
                8,
                ["tab-options", "current-tab", "alt-color"]
              ),
            ]),
            e("div", za, [
              o.value === 0
                ? (a(),
                  F(
                    Lt,
                    {
                      key: 0,
                      creature: s.creature,
                      onHandleRollAttr:
                        m[3] ||
                        (m[3] = (_, g, y) =>
                          s.$emit("handleRollAttribute", _, g, y)),
                      onHandleRollSkill:
                        m[4] ||
                        (m[4] = (_, g, y, z) =>
                          s.$emit("handleRollSkill", _, g, y, z)),
                    },
                    null,
                    8,
                    ["creature"]
                  ))
                : v("", !0),
              o.value === 1
                ? (a(),
                  F(
                    wa,
                    {
                      key: 1,
                      creature: s.creature,
                      disabled: s.disabled,
                      onHandleAttack:
                        m[5] ||
                        (m[5] = (_) => s.$emit("handleAttack", s.creature, _)),
                      onHandleAdd:
                        m[6] ||
                        (m[6] = (_) => s.$emit("handleAdd", s.creature, _)),
                      onHandleRemoveAction:
                        m[7] ||
                        (m[7] = (_, g) =>
                          s.$emit("handleRemoveAction", s.creature, _, g)),
                      onHandleEditAction:
                        m[8] ||
                        (m[8] = (_, g) =>
                          s.$emit(
                            "handleEditCreatureAction",
                            s.creature,
                            _,
                            g
                          )),
                    },
                    null,
                    8,
                    ["creature", "disabled"]
                  ))
                : v("", !0),
              o.value === 2
                ? (a(),
                  F(Ua, { key: 2, creature: s.creature }, null, 8, [
                    "creature",
                  ]))
                : v("", !0),
              o.value === 3
                ? (a(),
                  F(La, { key: 3, creature: s.creature }, null, 8, [
                    "creature",
                  ]))
                : v("", !0),
            ]),
          ]),
        ])
      );
    },
  }),
  ps = B(Ga, [["__scopeId", "data-v-cb526c34"]]),
  C = (l) => (M("data-v-acaf131f"), (l = l()), T(), l),
  Qa = { class: "form-container" },
  Wa = { class: "input-container" },
  Ja = C(() => e("div", { class: "label" }, " Name* ", -1)),
  Ka = { key: 0, class: "input-row" },
  Xa = { class: "input-container" },
  Ya = C(() => e("div", { class: "label" }, " Type* ", -1)),
  Za = C(() => e("div", { class: "title" }, " Attacks ", -1)),
  ja = { class: "input-row" },
  xa = { class: "input-container" },
  en = C(() => e("div", { class: "label" }, " Name ", -1)),
  tn = ["onUpdate:modelValue"],
  an = { class: "button-remove-container" },
  nn = ["onClick"],
  sn = { class: "input-row" },
  on = { class: "input-container" },
  rn = C(() => e("div", { class: "label" }, " Range* ", -1)),
  ln = ["onUpdate:modelValue"],
  dn = { class: "input-container" },
  un = C(() => e("div", { class: "label" }, " Number of attacks* ", -1)),
  cn = ["onUpdate:modelValue"],
  mn = { class: "input-row" },
  vn = { class: "input-container" },
  pn = C(() => e("div", { class: "label" }, " Dice* ", -1)),
  _n = ["onUpdate:modelValue"],
  hn = { class: "input-container" },
  bn = C(() => e("div", { class: "label" }, " Bonus ", -1)),
  $n = ["onUpdate:modelValue"],
  fn = { class: "input-container" },
  gn = C(() => e("div", { class: "label" }, " Critical* ", -1)),
  yn = ["onUpdate:modelValue"],
  Cn = { class: "input-container" },
  kn = C(() => e("div", { class: "label" }, " Multiplier* ", -1)),
  An = ["onUpdate:modelValue"],
  Vn = { class: "input-row" },
  Rn = { class: "input-container" },
  wn = C(() => e("div", { class: "label" }, " Damage* ", -1)),
  Bn = ["onUpdate:modelValue"],
  En = { class: "input-container" },
  Sn = C(() => e("div", { class: "label" }, " Type* ", -1)),
  Mn = { class: "title-container" },
  Tn = C(() => e("div", { class: "title" }, " Additional damage ", -1)),
  In = ["onClick"],
  Pn = { key: 0 },
  Un = { class: "input-row" },
  Dn = { class: "input-container" },
  Nn = C(() => e("div", { class: "label" }, " Damage* ", -1)),
  Hn = ["onUpdate:modelValue"],
  Ln = { class: "input-container" },
  Fn = C(() => e("div", { class: "label" }, " Type* ", -1)),
  On = { class: "button-remove-container" },
  qn = ["onClick"],
  zn = { class: "editor-container" },
  Gn = C(() =>
    e(
      "div",
      { class: "label" },
      [
        N(" Descrição"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Qn = C(() =>
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
  Wn = { class: "buttons-container" },
  Jn = ["disabled"],
  Kn = w({
    __name: "ActionForm",
    props: {
      action: { type: Object, default: Q },
      isAction: Boolean,
      addMode: Boolean,
    },
    emits: ["handleClose", "handleEdit"],
    setup(l, { emit: t }) {
      const h = l,
        d = t,
        o = ["standard", "movement", "complete", "free", "reation"],
        u = [
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
        i = ce(),
        r = q(W.cloneDeep(h.action)),
        s = I(() => {
          if (!r.value.name) return !0;
          if (r.value.attacks)
            for (const b of r.value.attacks) {
              if (
                !b.range ||
                !b.numberOfAttacks ||
                !b.rollNumber ||
                !b.criticalRange ||
                !b.criticalMult
              )
                return !0;
              for (const A of b.damage) if (!A.value) return !0;
            }
          if (r.value.tests)
            for (const b of r.value.tests) {
              if (!b.dt) return !0;
              if (b.damage) {
                for (const A of b.damage) if (!A.value) return !0;
              }
            }
          if (r.value.macros) {
            for (const b of r.value.macros) if (!b.value) return !0;
          }
          if (r.value.automaticDamage) {
            for (const b of r.value.automaticDamage) if (!b.value) return !0;
          }
          return !1;
        }),
        m = () => {
          O.isArray(r.value.attacks) || (r.value.attacks = []),
            r.value.attacks.push({
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
        _ = (b) => {
          O.isArray(r.value.attacks) &&
            r.value.attacks.splice(
              r.value.attacks.findIndex((A) => A.id === b),
              1
            );
        },
        g = (b) => {
          O.isArray(r.value.attacks) &&
            r.value.attacks[b].damage.push({
              id: K(),
              value: "1d6",
              damageType: "ballistic",
            });
        },
        y = (b, A) => {
          O.isArray(r.value.attacks) && r.value.attacks[b].damage.splice(A, 1);
        },
        z = () => {
          var b;
          (r.value = W.clone(Q)),
            d("handleClose"),
            (b = i == null ? void 0 : i.proxy) == null || b.$forceUpdate();
        },
        se = () => {
          var b;
          s.value ||
            (fe(r.value),
            d("handleEdit", r.value),
            (r.value = W.cloneDeep(Q)),
            (b = i == null ? void 0 : i.proxy) == null || b.$forceUpdate());
        };
      return (b, A) => {
        const oe = ue("p-editor");
        return (
          a(),
          n(
            V,
            null,
            [
              e("div", Qa, [
                e("div", Wa, [
                  Ja,
                  E(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          A[0] || (A[0] = (p) => (r.value.name = p)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[S, r.value.name]]
                  ),
                ]),
                l.isAction
                  ? (a(),
                    n("div", Ka, [
                      e("div", Xa, [
                        Ya,
                        k(
                          J,
                          {
                            value: r.value.type,
                            options: o,
                            width: "7.5rem",
                            "content-width": "7.5rem",
                            "form-input": "",
                            onUpdateValue:
                              A[1] || (A[1] = (p) => (r.value.type = p)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                    ]))
                  : v("", !0),
                e("div", { class: "title-container" }, [
                  Za,
                  e(
                    "button",
                    { class: "button-secondary", onClick: m },
                    " Add "
                  ),
                ]),
                (a(!0),
                n(
                  V,
                  null,
                  R(
                    r.value.attacks,
                    (p, X) => (
                      a(),
                      n("div", { key: p.id }, [
                        e("div", ja, [
                          e("div", xa, [
                            en,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) => (p.name = $),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                tn
                              ),
                              [[S, p.name]]
                            ),
                          ]),
                          e("div", an, [
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: ($) => _(p.id),
                              },
                              " Remover ",
                              8,
                              nn
                            ),
                          ]),
                        ]),
                        e("div", sn, [
                          e("div", on, [
                            rn,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) => (p.range = $),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                ln
                              ),
                              [[S, p.range]]
                            ),
                          ]),
                          e("div", dn, [
                            un,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (p.numberOfAttacks = $),
                                  type: "number",
                                  class: "input-primary dark small",
                                },
                                null,
                                8,
                                cn
                              ),
                              [[S, p.numberOfAttacks]]
                            ),
                          ]),
                        ]),
                        e("div", mn, [
                          e("div", vn, [
                            pn,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (p.rollNumber = $),
                                  type: "number",
                                  class: "input-primary dark small",
                                },
                                null,
                                8,
                                _n
                              ),
                              [[S, p.rollNumber]]
                            ),
                          ]),
                          e("div", hn, [
                            bn,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (p.rollBonus = $),
                                  type: "number",
                                  class: "input-primary dark small",
                                },
                                null,
                                8,
                                $n
                              ),
                              [[S, p.rollBonus]]
                            ),
                          ]),
                          e("div", fn, [
                            gn,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (p.criticalRange = $),
                                  type: "number",
                                  class:
                                    "input-primary dark small input-align-center",
                                },
                                null,
                                8,
                                yn
                              ),
                              [[S, p.criticalRange]]
                            ),
                          ]),
                          e("div", Cn, [
                            kn,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (p.criticalMult = $),
                                  type: "number",
                                  class:
                                    "input-primary dark small input-align-center",
                                },
                                null,
                                8,
                                An
                              ),
                              [[S, p.criticalMult]]
                            ),
                          ]),
                        ]),
                        e("div", Vn, [
                          e("div", Rn, [
                            wn,
                            E(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": ($) =>
                                    (p.damage[0].value = $),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                Bn
                              ),
                              [[S, p.damage[0].value]]
                            ),
                          ]),
                          e("div", En, [
                            Sn,
                            k(
                              J,
                              {
                                value: p.damage[0].damageType,
                                options: u,
                                width: "7.5rem",
                                "content-width": "7.5rem",
                                "form-input": "",
                                onUpdateValue: ($) =>
                                  (p.damage[0].damageType = $),
                              },
                              null,
                              8,
                              ["value", "onUpdateValue"]
                            ),
                          ]),
                        ]),
                        e("div", Mn, [
                          Tn,
                          e(
                            "button",
                            { class: "button-secondary", onClick: ($) => g(X) },
                            " Adicionar ",
                            8,
                            In
                          ),
                        ]),
                        (a(!0),
                        n(
                          V,
                          null,
                          R(
                            p.damage,
                            ($, U) => (
                              a(),
                              n("div", { key: $.id }, [
                                U !== 0
                                  ? (a(),
                                    n("div", Pn, [
                                      e("div", Un, [
                                        e("div", Dn, [
                                          Nn,
                                          E(
                                            e(
                                              "input",
                                              {
                                                "onUpdate:modelValue": (L) =>
                                                  (p.damage[U].value = L),
                                                type: "text",
                                                class: "input-primary dark",
                                              },
                                              null,
                                              8,
                                              Hn
                                            ),
                                            [[S, p.damage[U].value]]
                                          ),
                                        ]),
                                        e("div", Ln, [
                                          Fn,
                                          k(
                                            J,
                                            {
                                              value: p.damage[U].damageType,
                                              options: u,
                                              width: "7.5rem",
                                              "content-width": "7.5rem",
                                              "form-input": "",
                                              onUpdateValue: (L) =>
                                                (p.damage[U].damageType = L),
                                            },
                                            null,
                                            8,
                                            ["value", "onUpdateValue"]
                                          ),
                                        ]),
                                        e("div", On, [
                                          e(
                                            "button",
                                            {
                                              class: "button-secondary",
                                              onClick: (L) => y(X, U),
                                            },
                                            " Remove ",
                                            8,
                                            qn
                                          ),
                                        ]),
                                      ]),
                                    ]))
                                  : v("", !0),
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
                e("div", zn, [
                  Gn,
                  k(
                    oe,
                    {
                      modelValue: r.value.description,
                      "onUpdate:modelValue":
                        A[2] || (A[2] = (p) => (r.value.description = p)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: ee(() => [Qn]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                ]),
              ]),
              e("div", Wn, [
                e(
                  "button",
                  { class: "button-cancel", onClick: z },
                  " Cancel "
                ),
                e(
                  "button",
                  {
                    class: "button-primary big",
                    disabled: s.value,
                    onClick: se,
                  },
                  c(h.addMode ? "Add" : "Edit"),
                  9,
                  Jn
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  }),
  Xn = B(Kn, [["__scopeId", "data-v-acaf131f"]]),
  Yn = (l) => (M("data-v-1599fc5d"), (l = l()), T(), l),
  Zn = { class: "modal-content modal-width" },
  jn = { class: "modal-header" },
  xn = Yn(() =>
    e("img", { class: "close-icon", src: me, alt: "fechar" }, null, -1)
  ),
  es = [xn],
  ts = { class: "modal-body modal-height" },
  as = w({
    __name: "ActionModal",
    props: { action: {}, title: {} },
    emits: ["handleEditAction", "handleCloseModal"],
    setup(l) {
      return (t, h) => (
        a(),
        n("div", Zn, [
          e("div", jn, [
            e("h2", null, c(t.title), 1),
            e(
              "button",
              { onClick: h[0] || (h[0] = (d) => t.$emit("handleCloseModal")) },
              es
            ),
          ]),
          e("div", ts, [
            k(
              Xn,
              {
                action: t.action,
                onHandleEdit:
                  h[1] || (h[1] = (d) => t.$emit("handleEditAction", d)),
                onHandleClose:
                  h[2] || (h[2] = (d) => t.$emit("handleCloseModal")),
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
  _s = B(as, [["__scopeId", "data-v-1599fc5d"]]);
export { _s as A, ps as C };

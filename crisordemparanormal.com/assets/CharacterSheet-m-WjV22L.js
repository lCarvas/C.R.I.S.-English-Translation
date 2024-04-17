import {
  d as D,
  O as Pe,
  r as E,
  f as Q,
  e as Ae,
  a3 as It,
  o as t,
  c as s,
  a as e,
  t as O,
  x as le,
  C as ne,
  p as z,
  b as H,
  E as oe,
  _ as T,
  a4 as ko,
  J as Z,
  n as x,
  q as W,
  A as L,
  K as Y,
  k as A,
  a1 as xe,
  m as q,
  h as X,
  y as Ce,
  z as kt,
  a2 as Me,
  a0 as Ne,
  i as ua,
  v as Ee,
  j as St,
  g as So,
  M as _t,
  S as Pt,
  u as Mt,
  H as Ze,
  P as ie,
  L as ea,
  Z as aa,
  $ as Rt,
  w as be,
  T as oa,
  R as ho,
  F as Dt,
  B as Tt,
  l as Vt,
  X as wt,
  Q as Ot,
} from "./index-ElewQora.js";
import {
  g as zt,
  r as fo,
  b as Ht,
  u as jt,
  a as Ut,
} from "./index.esm2017-eixK2nk7.js";
import { T as xt } from "./ToastNotification-hBxLzeBG.js";
import {
  I as ta,
  n as Nt,
  A as Lt,
  F as Le,
  a as Bt,
  u as Ft,
  p as Qt,
  C as Wt,
  d as Gt,
  e as Xt,
  g as bo,
  h as Kt,
  i as Jt,
  j as Yt,
  k as Zt,
  l as es,
  f as sa,
  c as na,
  m as Co,
  o as as,
  q as os,
  s as ts,
  t as ss,
  v as ns,
  w as rs,
  x as ds,
  b as is,
  r as ls,
  y as us,
  T as cs,
  z as ms,
  B as ps,
  E as vs,
  G as gs,
  H as hs,
} from "./characterSheetUtils--OygJlD6.js";
import { _ as ca } from "./d20-icon-vaz1En3o.js";
import { T as ve } from "./TabNav-FORHjCxA.js";
import { P as Be } from "./PowerCard-oUvxzsKl.js";
import { R as _o } from "./RitualCard-QI9sBeGg.js";
import {
  W as Po,
  P as Mo,
  M as Ro,
  C as Do,
} from "./CursedItemCard-Pc4r8MnH.js";
import { c as He } from "./classes-7dZTyOHx.js";
import { S as Ie } from "./SearchInput-TT7Ja29B.js";
import { b as fs, c as bs } from "./ClassCard-6BehAAgu.js";
import {
  H as Cs,
  b as As,
  a as qs,
  A as To,
  R as Vo,
  W as wo,
  P as Oo,
  M as ia,
  c as zo,
} from "./HomebrewItems-ppRZVe5V.js";
import {
  d as _e,
  p as Ho,
  r as jo,
  w as ys,
  e as $s,
  f as Es,
  m as Is,
  g as ks,
} from "./default-tJ6A0c0K.js";
import { b as Ss } from "./forms-8DDAOOVU.js";
import { _ as je, l as Ao } from "./lodash-gzw5KmHd.js";
import { D as $e } from "./DropdownSimple-9v_7fx_Z.js";
import { v as Ue } from "./v4-cyCr5FZV.js";
import { S as ra } from "./SwitchButtonBool-a_BUmB1Y.js";
import { a as _s, _ as Uo } from "./open-in-new-icon-p91krxL-.js";
import { _ as Re } from "./blank-profile-picture-wMh28flS.js";
import { P as xo } from "./PictureModal-Pcl5r-fT.js";
import { L as Ps } from "./LoadingView-u5ob3P7_.js";
import { g as Ms, C as Rs } from "./firebase-zz3jnYNo.js";
import "./edit-icon-u1vf_q3w.js";
import "./show-more-icon-VvUXKiHG.js";
import "./skills-7ALlyuj2.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./add-icon-fJ4uQHUZ.js";
const De = (a) => (z("data-v-161d82d2"), (a = a()), H(), a),
  Ds = { class: "toast" },
  Ts = { class: "toast-content" },
  Vs = De(() =>
    e("img", { class: "toast-icon", src: ca, alt: "d20" }, null, -1)
  ),
  ws = { class: "text" },
  Os = { class: "title" },
  zs = { class: "result" },
  Hs = { class: "attack-container" },
  js = De(() => e("h4", null, "ATTACK", -1)),
  Us = De(() => e("div", { class: "divider" }, null, -1)),
  xs = { class: "damage-container" },
  Ns = De(() => e("h4", null, "DAMAGE", -1)),
  Ls = De(() => e("img", { src: oe, alt: "fechar" }, null, -1)),
  Bs = [Ls],
  Fs = "#5cb85c",
  Qs = "#d9534f",
  Ws = "#fff",
  Gs = D({
    __name: "ToastAttack",
    props: { toast: {} },
    emits: ["dismiss"],
    setup(a) {
      Pe((l) => ({ f546cb76: g.value }));
      const b = a,
        v = E(window.innerWidth),
        g = Q(() =>
          b.toast.critical === 1 ? Fs : b.toast.critical === -1 ? Qs : Ws
        );
      return (
        Ae(() => {
          window.addEventListener("resize", () => {
            v.value = window.innerWidth;
          });
        }),
        (l, p) => {
          const c = It("tooltip");
          return (
            t(),
            s(
              "div",
              {
                class: "toast-wrapper",
                onClick:
                  p[1] ||
                  (p[1] = (m) =>
                    v.value >= 1023 ? l.$emit("dismiss") : void 0),
              },
              [
                e("div", Ds, [
                  e("div", Ts, [
                    Vs,
                    e("div", ws, [
                      e("h3", Os, O(l.toast.title), 1),
                      e("div", zs, [
                        e("div", Hs, [
                          le(
                            (t(),
                            s("h3", null, [ne(O(l.toast.totalAttack), 1)])),
                            [
                              [
                                c,
                                {
                                  content: `${l.toast.attackTooltip} = ${l.toast.attackRollTooltip}`,
                                  triggers: ["hover", "click"],
                                },
                              ],
                            ]
                          ),
                          js,
                        ]),
                        Us,
                        e("div", xs, [
                          le(
                            (t(),
                            s("h3", null, [ne(O(l.toast.totalDamage), 1)])),
                            [
                              [
                                c,
                                {
                                  content: `${l.toast.damageTooltip} | ${l.toast.criticalTooltip} = ${l.toast.damageRollTooltip}`,
                                  triggers: ["hover", "click"],
                                },
                              ],
                            ]
                          ),
                          Ns,
                        ]),
                      ]),
                    ]),
                    e(
                      "button",
                      {
                        class: "close-icon",
                        onClick: p[0] || (p[0] = (m) => l.$emit("dismiss")),
                      },
                      Bs
                    ),
                  ]),
                ]),
              ]
            )
          );
        }
      );
    },
  }),
  Xs = T(Gs, [["__scopeId", "data-v-161d82d2"]]),
  Ks = "/assets/shield-icon-FCvc8PM4.png",
  Js = { class: "sheet-subtitle" },
  Ys = { class: "dropdown-button-container" },
  Zs = ["onClick"],
  en = D({
    __name: "SheetDropdown",
    props: {
      title: { type: String, required: !0 },
      buttonWidth: { type: String, default: "3.25rem" },
      value: { type: String, required: !0 },
      options: { type: Array, required: !0 },
      bold: Boolean,
      disabled: Boolean,
      mobileView: Boolean,
    },
    emits: ["updateValue"],
    setup(a, { emit: b }) {
      Pe((i) => ({ "35fdf62f": a.buttonWidth }));
      const v = a,
        g = b,
        l = E(null),
        p = E(!1);
      ko(l, () => (p.value = !1));
      const c = () => {
          v.disabled || (p.value = !p.value);
        },
        m = (i) => {
          (p.value = !1), g("updateValue", i);
        };
      return (i, r) => (
        t(),
        s(
          "div",
          {
            ref_key: "dropdown",
            ref: l,
            class: Z([
              a.mobileView ? "dropdown-container-mobile" : "dropdown-container",
            ]),
          },
          [
            e("h4", Js, O(a.title), 1),
            e("div", Ys, [
              e(
                "button",
                {
                  class: Z([
                    "dropdown-button",
                    { bold: a.bold, disabled: a.disabled },
                  ]),
                  onClick: c,
                },
                O(a.value),
                3
              ),
              e(
                "div",
                {
                  class: Z([
                    "dropdown-content",
                    { "dropdown-content-active": p.value },
                  ]),
                },
                [
                  (t(!0),
                  s(
                    x,
                    null,
                    W(
                      a.options,
                      (o, u) => (
                        t(),
                        s("div", { key: u }, [
                          e(
                            "button",
                            {
                              class: Z([
                                "dropdown-content-button",
                                { bold: a.bold },
                              ]),
                              onClick: (C) => m(o),
                            },
                            O(o),
                            11,
                            Zs
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ],
                2
              ),
            ]),
          ],
          2
        )
      );
    },
  }),
  la = T(en, [["__scopeId", "data-v-69e3d76a"]]),
  K = (a) => (z("data-v-de62832b"), (a = a()), H(), a),
  an = { class: "info-view" },
  on = { class: "info-row" },
  tn = { class: "nex-container" },
  sn = { key: 1, class: "mundano-nex-container" },
  nn = K(() => e("h4", { class: "sheet-subtitle" }, " EXP ", -1)),
  rn = { class: "pe-container" },
  dn = { class: "pe" },
  ln = ["disabled", "value"],
  un = K(() => e("h4", null, "EP / TURN", -1)),
  cn = { class: "desl-container" },
  mn = K(() => e("h3", null, "MOV", -1)),
  pn = { class: "desl-input-container" },
  vn = ["disabled", "value"],
  gn = K(() => e("h4", null, "m /", -1)),
  hn = ["disabled", "value"],
  fn = K(() => e("h4", null, "sq", -1)),
  bn = { class: "info-bar-wrapper" },
  Cn = { class: "info-row" },
  An = { class: "defense-container" },
  qn = { class: "defense-img-container" },
  yn = K(() =>
    e("img", { class: "defense-img", src: Ks, alt: "defense" }, null, -1)
  ),
  $n = { class: "defense-value" },
  En = { class: "defense-content" },
  In = K(() =>
    e(
      "div",
      { class: "defense-text" },
      [e("h3", null, "DEFENSE"), e("h4", null, "= 10 + AGI + ")],
      -1
    )
  ),
  kn = { class: "defense-input" },
  Sn = ["disabled", "value"],
  _n = K(() => e("h5", null, "Equip.", -1)),
  Pn = K(() => e("h4", { class: "defense-plus" }, " + ", -1)),
  Mn = { class: "defense-input" },
  Rn = ["disabled", "value"],
  Dn = K(() => e("h5", null, "Other.", -1)),
  Tn = { class: "other-defenses-container" },
  Vn = { class: "other-defense-div" },
  wn = K(() => e("div", { class: "other-defense-label" }, " BLOCK DR ", -1)),
  On = ["disabled", "value"],
  zn = { class: "other-defense-div" },
  Hn = K(() => e("div", { class: "other-defense-label" }, " DODGE ", -1)),
  jn = ["disabled", "value"],
  Un = { class: "info-line" },
  xn = K(() => e("h3", null, "ARMOR", -1)),
  Nn = ["disabled", "value"],
  Ln = { class: "info-line" },
  Bn = K(() => e("h3", null, "RESISTENCES", -1)),
  Fn = ["disabled", "value"],
  Qn = { class: "info-line" },
  Wn = K(() => e("h3", null, "PROFICIENCIES", -1)),
  Gn = ["disabled", "value"],
  Xn = D({
    __name: "InfoView",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleChangeCharText",
      "handleChangeCharNumber",
      "handleChangeCharDropdown",
      "handleChangeMovementInSquares",
      "handleChangeCharNumberButton",
      "handleChangeCharMark",
      "handleChangeMarkModeToTrue",
      "handleMarkHeal",
      "handleOpenModalAddClass",
    ],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = xe(),
        p = Q(() =>
          v.character.movement === 0 ? 0 : v.character.movement / 1.5
        ),
        c = Q(() => {
          const r =
            10 +
            v.character.attributes.dex +
            v.character.protectionDefense +
            v.character.bonusDefense;
          return r > 0 ? r : 0;
        }),
        m = (r, o) => {
          var u;
          g("handleChangeCharNumber", { e: r, key: o }),
            (u = l == null ? void 0 : l.proxy) == null || u.$forceUpdate();
        },
        i = (r) => {
          var o;
          g("handleChangeMovementInSquares", r),
            (o = l == null ? void 0 : l.proxy) == null || o.$forceUpdate();
        };
      return (r, o) => (
        t(),
        s("div", an, [
          e("div", on, [
            e("div", tn, [
              r.character.statsClass !== "Mundane"
                ? (t(),
                  L(
                    la,
                    {
                      key: 0,
                      title: "EXP",
                      disabled: r.disabledSheet,
                      value: r.character.nex,
                      options: Y(Nt),
                      bold: "",
                      onUpdateValue:
                        o[0] ||
                        (o[0] = (u) =>
                          r.$emit("handleChangeCharDropdown", {
                            value: u,
                            key: "nex",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "options"]
                  ))
                : (t(),
                  s("div", sn, [
                    nn,
                    e(
                      "button",
                      {
                        class: "mundano-nex-button",
                        onClick:
                          o[1] ||
                          (o[1] = (u) => r.$emit("handleOpenModalAddClass")),
                      },
                      " 0% "
                    ),
                  ])),
              e("div", rn, [
                e("div", dn, [
                  e(
                    "input",
                    {
                      class: "sheet-input pe-input",
                      type: "number",
                      disabled: r.disabledSheet,
                      value: r.character.peTurn,
                      onBlur: o[2] || (o[2] = (u) => m(u, "peTurn")),
                    },
                    null,
                    40,
                    ln
                  ),
                ]),
                un,
              ]),
            ]),
            e("div", cn, [
              mn,
              e("div", pn, [
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: r.character.movement,
                    onBlur: o[3] || (o[3] = (u) => m(u, "movement")),
                  },
                  null,
                  40,
                  vn
                ),
                gn,
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: p.value,
                    onBlur: i,
                  },
                  null,
                  40,
                  hn
                ),
                fn,
              ]),
            ]),
          ]),
          e("div", bn, [
            A(
              ta,
              {
                type: "pv",
                "max-value": r.character.maxPv,
                "current-value": r.character.currentPv,
                marks: r.character.deathMarks,
                "mark-mode": r.character.deathMode,
                "disabled-sheet": r.disabledSheet,
                onHandleChangeCharNumber: o[4] || (o[4] = (u, C) => m(u, C)),
                onHandleChangeCharNumberButton:
                  o[5] ||
                  (o[5] = (u, C) =>
                    r.$emit("handleChangeCharNumberButton", u, C)),
                onHandleChangeCharMark:
                  o[6] ||
                  (o[6] = (u, C) => r.$emit("handleChangeCharMark", u, C)),
                onHandleChangeMarkModeToTrue:
                  o[7] ||
                  (o[7] = (u) => r.$emit("handleChangeMarkModeToTrue", u)),
                onHandleMarkHeal:
                  o[8] || (o[8] = (u) => r.$emit("handleMarkHeal", u)),
              },
              null,
              8,
              [
                "max-value",
                "current-value",
                "marks",
                "mark-mode",
                "disabled-sheet",
              ]
            ),
            A(
              ta,
              {
                type: "san",
                character: r.character,
                "max-value": r.character.maxSan,
                "current-value": r.character.currentSan,
                marks: r.character.madnessMarks,
                "mark-mode": r.character.madnessMode,
                "disabled-sheet": r.disabledSheet,
                onHandleChangeCharNumber: o[9] || (o[9] = (u, C) => m(u, C)),
                onHandleChangeCharNumberButton:
                  o[10] ||
                  (o[10] = (u, C) =>
                    r.$emit("handleChangeCharNumberButton", u, C)),
                onHandleChangeCharMark:
                  o[11] ||
                  (o[11] = (u, C) => r.$emit("handleChangeCharMark", u, C)),
                onHandleChangeMarkModeToTrue:
                  o[12] ||
                  (o[12] = (u) => r.$emit("handleChangeMarkModeToTrue", u)),
                onHandleMarkHeal:
                  o[13] || (o[13] = (u) => r.$emit("handleMarkHeal", u)),
              },
              null,
              8,
              [
                "character",
                "max-value",
                "current-value",
                "marks",
                "mark-mode",
                "disabled-sheet",
              ]
            ),
            A(
              ta,
              {
                type: "pe",
                character: r.character,
                "max-value": r.character.maxPe,
                "current-value": r.character.currentPe,
                "disabled-sheet": r.disabledSheet,
                onHandleChangeCharNumber: o[14] || (o[14] = (u, C) => m(u, C)),
                onHandleChangeCharNumberButton:
                  o[15] ||
                  (o[15] = (u, C) =>
                    r.$emit("handleChangeCharNumberButton", u, C)),
              },
              null,
              8,
              ["character", "max-value", "current-value", "disabled-sheet"]
            ),
          ]),
          e("div", Cn, [
            e("div", An, [
              e("div", qn, [yn, e("div", $n, [e("h3", null, O(c.value), 1)])]),
              e("div", En, [
                In,
                e("div", kn, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: r.disabledSheet,
                      value: r.character.protectionDefense,
                      onBlur:
                        o[16] || (o[16] = (u) => m(u, "protectionDefense")),
                    },
                    null,
                    40,
                    Sn
                  ),
                  _n,
                ]),
                Pn,
                e("div", Mn, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: r.disabledSheet,
                      value: r.character.bonusDefense,
                      onBlur: o[17] || (o[17] = (u) => m(u, "bonusDefense")),
                    },
                    null,
                    40,
                    Rn
                  ),
                  Dn,
                ]),
              ]),
            ]),
            e("div", Tn, [
              e("div", Vn, [
                wn,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: r.character.block,
                    onBlur: o[18] || (o[18] = (u) => m(u, "block")),
                  },
                  null,
                  40,
                  On
                ),
              ]),
              e("div", zn, [
                Hn,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: r.character.evade,
                    onBlur: o[19] || (o[19] = (u) => m(u, "evade")),
                  },
                  null,
                  40,
                  jn
                ),
              ]),
            ]),
          ]),
          e("div", Un, [
            xn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: r.disabledSheet,
                value: r.character.currentProtection,
                onBlur:
                  o[20] ||
                  (o[20] = (u) =>
                    r.$emit("handleChangeCharText", {
                      e: u,
                      key: "currentProtection",
                    })),
              },
              null,
              40,
              Nn
            ),
          ]),
          e("div", Ln, [
            Bn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: r.disabledSheet,
                value: r.character.resistances,
                onBlur:
                  o[21] ||
                  (o[21] = (u) =>
                    r.$emit("handleChangeCharText", {
                      e: u,
                      key: "resistances",
                    })),
              },
              null,
              40,
              Fn
            ),
          ]),
          e("div", Qn, [
            Wn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: r.disabledSheet,
                value: r.character.proficiencies,
                onBlur:
                  o[22] ||
                  (o[22] = (u) =>
                    r.$emit("handleChangeCharText", {
                      e: u,
                      key: "proficiencies",
                    })),
              },
              null,
              40,
              Gn
            ),
          ]),
        ])
      );
    },
  }),
  Kn = T(Xn, [["__scopeId", "data-v-de62832b"]]),
  Jn = { class: "sheet-stats-container" },
  Yn = D({
    __name: "SheetStats",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleChangeCharText",
      "handleChangeCharNumber",
      "handleChangeAttribute",
      "handleChangeCharDropdown",
      "handleChangeMovementInSquares",
      "handleRollAttribute",
      "handleChangeCharNumberButton",
      "handleChangeCharMark",
      "handleChangeMarkModeToTrue",
      "handleMarkHeal",
      "handleOpenModalAddClass",
    ],
    setup(a, { emit: b }) {
      const v = b,
        g = (l) => {
          v("handleRollAttribute", l);
        };
      return (l, p) => (
        t(),
        s("div", Jn, [
          A(
            Lt,
            {
              character: l.character,
              "disabled-sheet": l.disabledSheet,
              onHandleChangeAttribute:
                p[0] || (p[0] = (c) => l.$emit("handleChangeAttribute", c)),
              onHandleRollAttribute: g,
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
          A(
            Kn,
            {
              character: l.character,
              "disabled-sheet": l.disabledSheet,
              onHandleChangeCharText:
                p[1] || (p[1] = (c) => l.$emit("handleChangeCharText", c)),
              onHandleChangeCharNumber:
                p[2] || (p[2] = (c) => l.$emit("handleChangeCharNumber", c)),
              onHandleChangeCharDropdown:
                p[3] || (p[3] = (c) => l.$emit("handleChangeCharDropdown", c)),
              onHandleChangeMovementInSquares:
                p[4] ||
                (p[4] = (c) => l.$emit("handleChangeMovementInSquares", c)),
              onHandleChangeCharNumberButton:
                p[5] ||
                (p[5] = (c, m) =>
                  l.$emit("handleChangeCharNumberButton", c, m)),
              onHandleChangeCharMark:
                p[6] ||
                (p[6] = (c, m) => l.$emit("handleChangeCharMark", c, m)),
              onHandleChangeMarkModeToTrue:
                p[7] ||
                (p[7] = (c) => l.$emit("handleChangeMarkModeToTrue", c)),
              onHandleMarkHeal:
                p[8] || (p[8] = (c) => l.$emit("handleMarkHeal", c)),
              onHandleOpenModalAddClass:
                p[9] || (p[9] = (c) => l.$emit("handleOpenModalAddClass")),
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
        ])
      );
    },
  }),
  qo = T(Yn, [["__scopeId", "data-v-6c164bbf"]]),
  Zn = { class: "dropdown-button-container" },
  er = { key: 0, class: "span" },
  ar = ["disabled"],
  or = { key: 1, class: "span" },
  tr = ["onClick"],
  sr = D({
    __name: "SkillsDropdown",
    props: {
      value: { type: String, required: !0 },
      options: { type: Array, required: !0 },
      color: { type: String, required: !0 },
      up: Boolean,
      underline: Boolean,
      disabled: Boolean,
    },
    emits: ["updateValue"],
    setup(a, { emit: b }) {
      Pe((i) => ({ "2c89ebb8": a.color }));
      const v = a,
        g = b,
        l = E(null),
        p = E(!1);
      ko(l, () => (p.value = !1));
      const c = () => {
          v.disabled || (p.value = !p.value);
        },
        m = (i) => {
          (p.value = !1), g("updateValue", i);
        };
      return (i, r) => (
        t(),
        s(
          "div",
          { ref_key: "dropdown", ref: l },
          [
            e("div", Zn, [
              a.underline ? q("", !0) : (t(), s("span", er, "(")),
              e(
                "button",
                {
                  class: Z([
                    "dropdown-button",
                    { "dropdown-underline": a.underline, disabled: a.disabled },
                  ]),
                  disabled: a.disabled,
                  onClick: c,
                },
                O(a.value),
                11,
                ar
              ),
              a.underline ? q("", !0) : (t(), s("span", or, ")")),
              e(
                "div",
                {
                  class: Z([
                    "dropdown-content",
                    [
                      { "dropdown-content-active": p.value },
                      a.up ? "dropdown-position-up" : "dropdown-position-down",
                    ],
                  ]),
                },
                [
                  (t(!0),
                  s(
                    x,
                    null,
                    W(
                      a.options,
                      (o, u) => (
                        t(),
                        s("div", { key: u }, [
                          e(
                            "button",
                            {
                              class: "dropdown-content-button",
                              onClick: (C) => m(o),
                            },
                            O(o),
                            9,
                            tr
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ],
                2
              ),
            ]),
          ],
          512
        )
      );
    },
  }),
  ze = T(sr, [["__scopeId", "data-v-7777a8ec"]]),
  ma = (a) => (z("data-v-05af1f88"), (a = a()), H(), a),
  nr = { class: "small" },
  rr = ma(() => e("img", { src: ca, alt: "rolar" }, null, -1)),
  dr = [rr],
  ir = { key: 0 },
  lr = { key: 1 },
  ur = { key: 0 },
  cr = { key: 1 },
  mr = { class: "skill-bonus" },
  pr = ma(() => e("span", null, "( ", -1)),
  vr = ma(() => e("span", null, " )", -1)),
  gr = { key: 2 },
  hr = { key: 3 },
  fr = { class: "input-container" },
  br = ["disabled", "value"],
  Cr = D({
    __name: "SkillCard",
    props: {
      skill: { type: Object, required: !0 },
      index: { type: Number, required: !0 },
      length: { type: Number, required: !0 },
      disabledSheet: { type: Boolean, required: !0 },
    },
    emits: [
      "handleOpenSkillModal",
      "handleChangeSkillOtherBonus",
      "handleChangeSkillDropdown",
      "handleRollSkill",
    ],
    setup(a, { emit: b }) {
      Pe((C) => ({ "45097c96": i.value }));
      const v = a,
        g = b,
        l = ["AGI", "FOR", "INT", "PRE", "VIG"],
        p = ["0", "5", "10", "15"],
        c = { trained: "#3d8b40", veteran: "#0a69b7", expert: "#b36b00" },
        m = xe(),
        i = Q(() =>
          v.skill.trainingDegree === "5"
            ? c.trained
            : v.skill.trainingDegree === "10"
            ? c.veteran
            : v.skill.trainingDegree === "15"
            ? c.expert
            : "#fff"
        ),
        r = () => {
          g("handleOpenSkillModal", v.skill);
        },
        o = (C, _, M) => {
          g("handleChangeSkillDropdown", { value: C, skillName: _, key: M });
        },
        u = (C, _) => {
          var f;
          const M = C.target.valueAsNumber;
          g("handleChangeSkillOtherBonus", { value: M, skillName: _ }),
            (f = m == null ? void 0 : m.proxy) == null || f.$forceUpdate();
        };
      return (C, _) => (
        t(),
        s(
          x,
          null,
          [
            e("td", nr, [
              e(
                "button",
                {
                  class: Z(["roll-button", { disabled: a.disabledSheet }]),
                  onClick:
                    _[0] || (_[0] = (M) => C.$emit("handleRollSkill", a.skill)),
                },
                dr,
                2
              ),
            ]),
            e(
              "td",
              { class: Z({ disabled: a.disabledSheet }) },
              [
                e(
                  "button",
                  {
                    class: Z([
                      "naked-button left",
                      { disabled: a.disabledSheet },
                    ]),
                    onClick: r,
                  },
                  [
                    ne(O(a.skill.name), 1),
                    a.skill.onlyTrained ? (t(), s("span", ir, "*")) : q("", !0),
                    a.skill.loadPenalty ? (t(), s("span", lr, "+")) : q("", !0),
                  ],
                  2
                ),
              ],
              2
            ),
            a.index > a.length - 7
              ? (t(),
                s("td", ur, [
                  A(
                    ze,
                    {
                      value: a.skill.attribute,
                      options: l,
                      color: i.value,
                      disabled: a.disabledSheet,
                      up: "",
                      onUpdateValue:
                        _[1] || (_[1] = (M) => o(M, a.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (t(),
                s("td", cr, [
                  A(
                    ze,
                    {
                      value: a.skill.attribute,
                      options: l,
                      color: i.value,
                      disabled: a.disabledSheet,
                      onUpdateValue:
                        _[2] || (_[2] = (M) => o(M, a.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [e("h3", mr, [pr, ne(O(a.skill.bonus), 1), vr])]),
            a.index > a.length - 7
              ? (t(),
                s("td", gr, [
                  A(
                    ze,
                    {
                      value: a.skill.trainingDegree,
                      options: p,
                      color: i.value,
                      disabled: a.disabledSheet,
                      underline: "",
                      up: "",
                      onUpdateValue:
                        _[3] ||
                        (_[3] = (M) => o(M, a.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (t(),
                s("td", hr, [
                  A(
                    ze,
                    {
                      value: a.skill.trainingDegree,
                      options: p,
                      color: i.value,
                      disabled: a.disabledSheet,
                      underline: "",
                      onUpdateValue:
                        _[4] ||
                        (_[4] = (M) => o(M, a.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [
              e("div", fr, [
                e(
                  "input",
                  {
                    type: "number",
                    class: "underline-input",
                    disabled: a.disabledSheet,
                    value: a.skill.otherBonus,
                    onBlur: _[5] || (_[5] = (M) => u(M, a.skill.name)),
                  },
                  null,
                  40,
                  br
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  }),
  Ar = T(Cr, [["__scopeId", "data-v-05af1f88"]]),
  pa = (a) => (z("data-v-f2b17d30"), (a = a()), H(), a),
  qr = { class: "skills-container" },
  yr = pa(() => e("h1", { class: "skills-title" }, " SKILLS ", -1)),
  $r = { class: "skills-table" },
  Er = pa(() =>
    e(
      "thead",
      null,
      [
        e("tr", null, [
          e("th", { class: "small" }),
          e("th", { class: "left" }, " SKILL "),
          e("th", null, "DICCE"),
          e("th", null, "BONUS"),
          e("th", null, "Trainment"),
          e("th", null, "Other"),
        ]),
      ],
      -1
    )
  ),
  Ir = pa(() =>
    e(
      "h4",
      { class: "table-caption" },
      [
        ne(" + "),
        e("i", null, "Overburden penalty."),
        ne(" * "),
        e("i", null, "Only if trained."),
      ],
      -1
    )
  ),
  kr = D({
    __name: "SkillsView",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenSkillModal",
      "handleChangeSkillOtherBonus",
      "handleChangeSkillDropdown",
      "handleRollSkill",
    ],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = (c) => {
          v.disabledSheet || g("handleOpenSkillModal", c);
        },
        p = (c) => {
          v.disabledSheet || g("handleRollSkill", c);
        };
      return (c, m) => (
        t(),
        s("div", qr, [
          yr,
          e("table", $r, [
            Er,
            e("tbody", null, [
              (t(!0),
              s(
                x,
                null,
                W(
                  c.character.skills,
                  (i, r) => (
                    t(),
                    s("tr", { key: i.name }, [
                      A(
                        Ar,
                        {
                          skill: i,
                          index: r,
                          length: c.character.skills.length,
                          "disabled-sheet": c.disabledSheet,
                          onHandleOpenSkillModal: l,
                          onHandleChangeSkillDropdown:
                            m[0] ||
                            (m[0] = (o) =>
                              c.$emit("handleChangeSkillDropdown", o)),
                          onHandleChangeSkillOtherBonus:
                            m[1] ||
                            (m[1] = (o) =>
                              c.$emit("handleChangeSkillOtherBonus", o)),
                          onHandleRollSkill: p,
                        },
                        null,
                        8,
                        ["skill", "index", "length", "disabled-sheet"]
                      ),
                    ])
                  )
                ),
                128
              )),
            ]),
          ]),
          Ir,
        ])
      );
    },
  }),
  yo = T(kr, [["__scopeId", "data-v-f2b17d30"]]),
  va = (a) => (z("data-v-f08c1d1d"), (a = a()), H(), a),
  Sr = { class: "tab" },
  _r = { key: 0 },
  Pr = { class: "roll-dices-container" },
  Mr = ["disabled", "onKeyup"],
  Rr = ["disabled"],
  Dr = va(() =>
    e("img", { class: "dice-icon", src: ca, alt: "rolar" }, null, -1)
  ),
  Tr = [Dr],
  Vr = { key: 2 },
  wr = { key: 0 },
  Or = { key: 1, class: "no-content" },
  zr = va(() => e("h3", null, "No attack found", -1)),
  Hr = [zr],
  jr = { key: 3, class: "no-content" },
  Ur = va(() => e("h3", null, "You have yet to add attacks", -1)),
  xr = [Ur],
  Nr = D({
    __name: "AttacksTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = E(""),
        p = E(""),
        c = () => {
          v.disabledSheet || (g("handleRollDices", l.value), (l.value = ""));
        },
        m = (r) => {
          v.disabledSheet || g("handleRollAttack", r);
        },
        i = Q(() => [...v.character.attacks].filter((o) => X(o.name, p.value)));
      return (r, o) => (
        t(),
        s("div", Sr, [
          r.character.attacks.length > 0
            ? (t(),
              s("div", _r, [
                A(
                  Le,
                  {
                    value: p.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: o[0] || (o[0] = (u) => (p.value = u)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          e("div", Pr, [
            le(
              e(
                "input",
                {
                  "onUpdate:modelValue": o[1] || (o[1] = (u) => (l.value = u)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: r.disabledSheet,
                  onKeyup: kt(c, ["enter"]),
                },
                null,
                40,
                Mr
              ),
              [[Ce, l.value]]
            ),
            e(
              "button",
              {
                class: Z(["dice-button", { disabled: r.disabledSheet }]),
                disabled: r.disabledSheet,
                onClick: c,
              },
              Tr,
              10,
              Rr
            ),
          ]),
          r.disabledSheet
            ? q("", !0)
            : (t(),
              s(
                "button",
                {
                  key: 1,
                  class: "button-secondary add-button",
                  onClick:
                    o[2] || (o[2] = (u) => r.$emit("handleOpenAddAttack")),
                },
                " Novo Ataque "
              )),
          r.character.attacks.length > 0
            ? (t(),
              s("div", Vr, [
                i.value.length > 0
                  ? (t(),
                    s("div", wr, [
                      (t(!0),
                      s(
                        x,
                        null,
                        W(
                          i.value,
                          (u) => (
                            t(),
                            s("div", { key: u.id, class: "align-card" }, [
                              A(
                                Bt,
                                {
                                  id: u.id,
                                  attack: u,
                                  disabled: r.disabledSheet,
                                  onHandleRemoveAttack:
                                    o[3] ||
                                    (o[3] = (C) =>
                                      r.$emit("handleRemoveAttack", C)),
                                  onHandleEdit: (C) =>
                                    r.$emit("handleEditAttack", C),
                                  onHandleRollAttack: m,
                                },
                                null,
                                8,
                                ["id", "attack", "disabled", "onHandleEdit"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : (t(), s("div", Or, Hr)),
              ]))
            : (t(), s("div", jr, xr)),
        ])
      );
    },
  }),
  No = T(Nr, [["__scopeId", "data-v-f08c1d1d"]]),
  Lo = (a) => (z("data-v-79ae51ca"), (a = a()), H(), a),
  Lr = { class: "tab" },
  Br = { class: "tab-header" },
  Fr = { key: 0 },
  Qr = { key: 1, class: "sheet-cards-container" },
  Wr = { key: 0 },
  Gr = { key: 1, class: "no-content" },
  Xr = Lo(() => e("h3", null, "Nenhuma habilidade encontrada", -1)),
  Kr = [Xr],
  Jr = { key: 2, class: "no-content" },
  Yr = Lo(() => e("h3", null, "Você ainda não possui habilidades", -1)),
  Zr = [Yr],
  ed = D({
    __name: "AbilitiesTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenAbilitiesModal",
      "handleRemovePower",
      "handleEditPower",
      "handleOpenAddPower",
    ],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = E(""),
        p = Q(() =>
          [...v.character.powers]
            .filter((i) => X(i.name, l.value))
            .sort((i, r) => i.name.localeCompare(r.name))
        ),
        c = (m) => g("handleEditPower", m);
      return (m, i) => (
        t(),
        s("div", Lr, [
          e("div", Br, [
            m.character.powers.length > 0
              ? (t(),
                s("div", Fr, [
                  A(
                    Le,
                    {
                      value: l.value,
                      placeholder: "Filter Abilities",
                      onUpdate: i[0] || (i[0] = (r) => (l.value = r)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : q("", !0),
            m.disabledSheet
              ? q("", !0)
              : (t(),
                s(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      i[1] ||
                      (i[1] = (r) => m.$emit("handleOpenAbilitiesModal")),
                  },
                  " Adicionar "
                )),
          ]),
          m.disabledSheet
            ? q("", !0)
            : (t(),
              s(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    i[2] || (i[2] = (r) => m.$emit("handleOpenAddPower")),
                },
                " Nova Habilidade "
              )),
          m.character.powers.length > 0
            ? (t(),
              s("div", Qr, [
                p.value.length > 0
                  ? (t(),
                    s("div", Wr, [
                      (t(!0),
                      s(
                        x,
                        null,
                        W(
                          p.value,
                          (r) => (
                            t(),
                            s("div", { key: r.id, class: "sheet-card-list" }, [
                              A(
                                Be,
                                {
                                  id: r.id,
                                  power: r,
                                  disabled: m.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    i[3] ||
                                    (i[3] = (o) =>
                                      m.$emit("handleRemovePower", o)),
                                  onHandleEdit: c,
                                },
                                null,
                                8,
                                ["id", "power", "disabled"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : (t(), s("div", Gr, Kr)),
              ]))
            : (t(), s("div", Jr, Zr)),
        ])
      );
    },
  }),
  Bo = T(ed, [["__scopeId", "data-v-79ae51ca"]]),
  ga = (a) => (z("data-v-d3cb0405"), (a = a()), H(), a),
  ad = { class: "tab" },
  od = { class: "tab-header" },
  td = { key: 0 },
  sd = { class: "ritual-dc-wrapper" },
  nd = { class: "ritual-dc-container" },
  rd = ga(() => e("h4", { class: "sheet-subtitle" }, " DT DE RITUAIS ", -1)),
  dd = ["disabled", "value"],
  id = { key: 1, class: "sheet-cards-container" },
  ld = { key: 0 },
  ud = { key: 1, class: "no-content" },
  cd = ga(() => e("h3", null, "Nenhum ritual encontrado", -1)),
  md = [cd],
  pd = { key: 2, class: "no-content" },
  vd = ga(() => e("h3", null, "Você ainda não possui rituais", -1)),
  gd = [vd],
  hd = D({
    __name: "RitualsTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenRitualsModal",
      "handleRemoveRitual",
      "handleChangeRitualDc",
      "handleEditRitual",
      "handleRollRitual",
      "handleOpenAddRitual",
    ],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = xe(),
        p = E(""),
        c = Q(() =>
          [...v.character.rituals]
            .filter((u) => X(u.name, p.value))
            .sort((u, C) => u.name.localeCompare(C.name))
        ),
        m = (o) => {
          var u;
          g("handleChangeRitualDc", o),
            (u = l == null ? void 0 : l.proxy) == null || u.$forceUpdate();
        },
        i = (o) => g("handleEditRitual", o),
        r = (o, u) => {
          g("handleRollRitual", o, u);
        };
      return (o, u) => (
        t(),
        s("div", ad, [
          e("div", od, [
            o.character.rituals.length > 0
              ? (t(),
                s("div", td, [
                  A(
                    Le,
                    {
                      value: p.value,
                      placeholder: "Filter rituals",
                      onUpdate: u[0] || (u[0] = (C) => (p.value = C)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : q("", !0),
            o.disabledSheet
              ? q("", !0)
              : (t(),
                s(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      u[1] || (u[1] = (C) => o.$emit("handleOpenRitualsModal")),
                  },
                  " Adicionar "
                )),
          ]),
          e("div", sd, [
            e("div", nd, [
              rd,
              e(
                "input",
                {
                  type: "number",
                  class: "sheet-input sheet-input-size",
                  disabled: o.disabledSheet,
                  value: o.character.ritualsDc,
                  onBlur: m,
                },
                null,
                40,
                dd
              ),
            ]),
          ]),
          o.disabledSheet
            ? q("", !0)
            : (t(),
              s(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    u[2] || (u[2] = (C) => o.$emit("handleOpenAddRitual")),
                },
                " Novo Ritual "
              )),
          o.character.rituals.length > 0
            ? (t(),
              s("div", id, [
                c.value.length > 0
                  ? (t(),
                    s("div", ld, [
                      (t(!0),
                      s(
                        x,
                        null,
                        W(
                          c.value,
                          (C) => (
                            t(),
                            s("div", { key: C.id, class: "sheet-card-list" }, [
                              A(
                                _o,
                                {
                                  id: C.id,
                                  ritual: C,
                                  disabled: o.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    u[3] ||
                                    (u[3] = (_) =>
                                      o.$emit("handleRemoveRitual", _)),
                                  onHandleEdit: i,
                                  onHandleRollRitual: r,
                                },
                                null,
                                8,
                                ["id", "ritual", "disabled"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : (t(), s("div", ud, md)),
              ]))
            : (t(), s("div", pd, gd)),
        ])
      );
    },
  }),
  Fo = T(hd, [["__scopeId", "data-v-d3cb0405"]]),
  ue = (a) => (z("data-v-d9d5c266"), (a = a()), H(), a),
  fd = { class: "tab" },
  bd = { class: "tab-header" },
  Cd = { key: 0 },
  Ad = { class: "inventory-info-container" },
  qd = { class: "inventory-row" },
  yd = { class: "input-container" },
  $d = ue(() =>
    e("h4", { class: "sheet-subtitle" }, " PONTOS DE PRESTÍGIO ", -1)
  ),
  Ed = ["disabled", "value"],
  Id = { class: "inventory-row" },
  kd = { key: 0 },
  Sd = { class: "input-container" },
  _d = ue(() => e("h4", { class: "sheet-subtitle" }, " LIMITE DE ITENS ", -1)),
  Pd = ["disabled", "value"],
  Md = ["disabled", "value"],
  Rd = ["disabled", "value"],
  Dd = ["disabled", "value"],
  Td = { key: 1 },
  Vd = { class: "input-container" },
  wd = ue(() => e("h4", { class: "sheet-subtitle" }, " LIMITE DE ITENS ", -1)),
  Od = { class: "mobile-input-container-row" },
  zd = ["disabled", "value"],
  Hd = ["disabled", "value"],
  jd = ["disabled", "value"],
  Ud = ["disabled", "value"],
  xd = { class: "inventory-row" },
  Nd = { key: 0 },
  Ld = { class: "input-container" },
  Bd = ue(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " NO INVENTÁRIO ", -1)
  ),
  Fd = { class: "sheet-div" },
  Qd = { class: "sheet-div" },
  Wd = { class: "sheet-div" },
  Gd = { class: "sheet-div" },
  Xd = { key: 1 },
  Kd = { class: "input-container" },
  Jd = ue(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " NO INVENTÁRIO ", -1)
  ),
  Yd = { class: "mobile-input-container-row" },
  Zd = { class: "sheet-div" },
  ei = { class: "sheet-div" },
  ai = { class: "sheet-div" },
  oi = { class: "sheet-div" },
  ti = { class: "inventory-row" },
  si = { key: 0 },
  ni = { class: "input-container" },
  ri = ue(() => e("h4", { class: "sheet-subtitle" }, " CARGA MÁX. ", -1)),
  di = ["disabled", "value"],
  ii = ["disabled", "value"],
  li = { key: 1 },
  ui = ue(() =>
    e(
      "h4",
      { class: "sheet-subtitle mobile-sheet-subtitle" },
      " CARGA MÁX. ",
      -1
    )
  ),
  ci = { class: "mobile-input-container-row" },
  mi = ["disabled", "value"],
  pi = ["disabled", "value"],
  vi = { class: "open-add-buttons-container" },
  gi = { key: 0, class: "open-add-title" },
  hi = { key: 0, class: "sheet-cards-container" },
  fi = { key: 0 },
  bi = { key: 0 },
  Ci = { key: 1 },
  Ai = { key: 2 },
  qi = { key: 3 },
  yi = { key: 1, class: "no-content" },
  $i = ue(() => e("h3", null, "Nenhum item encontrado", -1)),
  Ei = [$i],
  Ii = { key: 1, class: "no-content" },
  ki = ue(() => e("h3", null, "Você ainda não possui itens", -1)),
  Si = [ki],
  _i = D({
    __name: "InventoryTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenItemsModal",
      "handleRemoveItem",
      "handleEquipItem",
      "handleChangeInventoryNumber",
      "handleChangeItemsLimit",
      "handleChangeInventoryDropdown",
      "handleEditItem",
      "handleOpenAddWeapon",
      "handleOpenAddAmmunition",
      "handleOpenAddProtection",
      "handleOpenAddMisc",
      "handleOpenAddCursedItem",
    ],
    setup(a, { emit: b }) {
      Pe((f) => ({ "53e467a2": o.value }));
      const v = a,
        g = b,
        l = [
          "Mundane",
          "Recruta",
          "Operador",
          "Agente especial",
          "Oficial de operações",
          "Agente de elite",
        ],
        p = ["Baixo", "Médio", "Alto", "Ilimitado"],
        c = xe(),
        m = E(""),
        i = E(window.innerWidth),
        r = Q(() =>
          [...v.character.inventory]
            .filter((y) => X(y.name, m.value))
            .sort((y, R) => y.name.localeCompare(R.name))
        ),
        o = Q(() =>
          v.character.currentLoad > v.character.maxLoad * 2
            ? "#d9534f"
            : v.character.currentLoad > v.character.maxLoad
            ? "#ff8c00"
            : "#fff"
        ),
        u = Q(() =>
          v.character.currentLoad < 0 ? 0 : v.character.currentLoad
        ),
        C = (f) => g("handleEditItem", f),
        _ = (f, y) => {
          var N;
          const R = f.target.valueAsNumber;
          g("handleChangeItemsLimit", { value: R, key: y }),
            (N = c == null ? void 0 : c.proxy) == null || N.$forceUpdate();
        },
        M = (f, y) => {
          var N;
          const R = f.target.valueAsNumber;
          g("handleChangeInventoryNumber", { value: R, key: y }),
            (N = c == null ? void 0 : c.proxy) == null || N.$forceUpdate();
        };
      return (
        Ae(() => {
          window.addEventListener("resize", () => {
            i.value = window.innerWidth;
          });
        }),
        (f, y) => {
          var R, N, ge, n, k, $, w, he;
          return (
            t(),
            s("div", fd, [
              e("div", bd, [
                f.character.inventory.length > 0
                  ? (t(),
                    s("div", Cd, [
                      A(
                        Le,
                        {
                          value: m.value,
                          placeholder: "Filter items",
                          onUpdate: y[0] || (y[0] = (I) => (m.value = I)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]))
                  : q("", !0),
                f.disabledSheet
                  ? q("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 1,
                        class: "button-primary add-button",
                        onClick:
                          y[1] ||
                          (y[1] = (I) => f.$emit("handleOpenItemsModal")),
                      },
                      " Adicionar "
                    )),
              ]),
              e("div", Ad, [
                e("div", qd, [
                  e("div", yd, [
                    $d,
                    e(
                      "input",
                      {
                        type: "number",
                        class: "sheet-input sheet-input-size",
                        disabled: f.disabledSheet,
                        value: f.character.prestigePoints,
                        onBlur: y[2] || (y[2] = (I) => M(I, "prestigePoints")),
                      },
                      null,
                      40,
                      Ed
                    ),
                  ]),
                  A(
                    la,
                    {
                      title: "PATENTE",
                      disabled: f.disabledSheet,
                      value: f.character.patent,
                      "button-width": "10rem",
                      options: l,
                      "mobile-view": i.value < 1023,
                      onUpdateValue:
                        y[3] ||
                        (y[3] = (I) =>
                          f.$emit("handleChangeInventoryDropdown", {
                            value: I,
                            key: "patent",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "mobile-view"]
                  ),
                ]),
                e("div", Id, [
                  i.value >= 1023
                    ? (t(),
                      s("div", kd, [
                        e("div", Sd, [
                          _d,
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "I",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.I,
                              onBlur: y[4] || (y[4] = (I) => _(I, "I")),
                            },
                            null,
                            40,
                            Pd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "II",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.II,
                              onBlur: y[5] || (y[5] = (I) => _(I, "II")),
                            },
                            null,
                            40,
                            Md
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "III",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.III,
                              onBlur: y[6] || (y[6] = (I) => _(I, "III")),
                            },
                            null,
                            40,
                            Rd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "IV",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.IV,
                              onBlur: y[7] || (y[7] = (I) => _(I, "IV")),
                            },
                            null,
                            40,
                            Dd
                          ),
                        ]),
                      ]))
                    : (t(),
                      s("div", Td, [
                        e("div", Vd, [
                          wd,
                          e("div", Od, [
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "I",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.I,
                                onBlur: y[8] || (y[8] = (I) => _(I, "I")),
                              },
                              null,
                              40,
                              zd
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "II",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.II,
                                onBlur: y[9] || (y[9] = (I) => _(I, "II")),
                              },
                              null,
                              40,
                              Hd
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "III",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.III,
                                onBlur: y[10] || (y[10] = (I) => _(I, "III")),
                              },
                              null,
                              40,
                              jd
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "IV",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.IV,
                                onBlur: y[11] || (y[11] = (I) => _(I, "IV")),
                              },
                              null,
                              40,
                              Ud
                            ),
                          ]),
                        ]),
                      ])),
                ]),
                e("div", xd, [
                  i.value >= 1023
                    ? (t(),
                      s("div", Nd, [
                        e("div", Ld, [
                          Bd,
                          e(
                            "div",
                            Fd,
                            O(
                              ((R = f.character.currentItemsLimit) == null
                                ? void 0
                                : R.I) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Qd,
                            O(
                              ((N = f.character.currentItemsLimit) == null
                                ? void 0
                                : N.II) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Wd,
                            O(
                              ((ge = f.character.currentItemsLimit) == null
                                ? void 0
                                : ge.III) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Gd,
                            O(
                              ((n = f.character.currentItemsLimit) == null
                                ? void 0
                                : n.IV) || "0"
                            ),
                            1
                          ),
                        ]),
                      ]))
                    : (t(),
                      s("div", Xd, [
                        e("div", Kd, [
                          Jd,
                          e("div", Yd, [
                            e(
                              "div",
                              Zd,
                              O(
                                ((k = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : k.I) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              ei,
                              O(
                                (($ = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : $.II) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              ai,
                              O(
                                ((w = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : w.III) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              oi,
                              O(
                                ((he = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : he.IV) || "0"
                              ),
                              1
                            ),
                          ]),
                        ]),
                      ])),
                ]),
                e("div", ti, [
                  A(
                    la,
                    {
                      title: "LIMITE DE CRÉDITO",
                      disabled: f.disabledSheet,
                      value: f.character.creditsLimit,
                      "button-width": "6rem",
                      options: p,
                      "mobile-view": i.value < 1023,
                      onUpdateValue:
                        y[12] ||
                        (y[12] = (I) =>
                          f.$emit("handleChangeInventoryDropdown", {
                            value: I,
                            key: "creditsLimit",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "mobile-view"]
                  ),
                  i.value >= 1023
                    ? (t(),
                      s("div", si, [
                        e("div", ni, [
                          ri,
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: f.disabledSheet,
                              value: u.value,
                              onBlur:
                                y[13] || (y[13] = (I) => M(I, "currentLoad")),
                            },
                            null,
                            40,
                            di
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              disabled: f.disabledSheet,
                              value: f.character.maxLoad,
                              onBlur: y[14] || (y[14] = (I) => M(I, "maxLoad")),
                            },
                            null,
                            40,
                            ii
                          ),
                        ]),
                      ]))
                    : (t(),
                      s("div", li, [
                        ui,
                        e("div", ci, [
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: f.disabledSheet,
                              value: u.value,
                              onBlur:
                                y[15] || (y[15] = (I) => M(I, "currentLoad")),
                            },
                            null,
                            40,
                            mi
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              disabled: f.disabledSheet,
                              value: f.character.maxLoad,
                              onBlur: y[16] || (y[16] = (I) => M(I, "maxLoad")),
                            },
                            null,
                            40,
                            pi
                          ),
                        ]),
                      ])),
                ]),
              ]),
              e("div", vi, [
                f.disabledSheet ? q("", !0) : (t(), s("div", gi, " NOVO ")),
                f.disabledSheet
                  ? q("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 1,
                        class: "button-secondary",
                        onClick:
                          y[17] ||
                          (y[17] = (I) => f.$emit("handleOpenAddWeapon")),
                      },
                      " Arma "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 2,
                        class: "button-secondary",
                        onClick:
                          y[18] ||
                          (y[18] = (I) => f.$emit("handleOpenAddAmmunition")),
                      },
                      " Munição "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 3,
                        class: "button-secondary",
                        onClick:
                          y[19] ||
                          (y[19] = (I) => f.$emit("handleOpenAddProtection")),
                      },
                      " Proteção "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 4,
                        class: "button-secondary",
                        onClick:
                          y[20] ||
                          (y[20] = (I) => f.$emit("handleOpenAddMisc")),
                      },
                      " Geral "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 5,
                        class: "button-secondary",
                        onClick:
                          y[21] ||
                          (y[21] = (I) => f.$emit("handleOpenAddCursedItem")),
                      },
                      " Item Amald. "
                    )),
              ]),
              f.character.inventory.length > 0
                ? (t(),
                  s("div", hi, [
                    r.value.length > 0
                      ? (t(),
                        s("div", fi, [
                          (t(!0),
                          s(
                            x,
                            null,
                            W(
                              r.value,
                              (I) => (
                                t(),
                                s(
                                  "div",
                                  { key: I.id, class: "sheet-card-list" },
                                  [
                                    I.itemType === "weapon"
                                      ? (t(),
                                        s("div", bi, [
                                          A(
                                            Po,
                                            {
                                              id: I.id,
                                              weapon: I,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[22] ||
                                                (y[22] = (J) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    J.id
                                                  )),
                                              onHandleEquip:
                                                y[23] ||
                                                (y[23] = (J) =>
                                                  f.$emit(
                                                    "handleEquipItem",
                                                    J
                                                  )),
                                              onHandleEdit: C,
                                            },
                                            null,
                                            8,
                                            ["id", "weapon", "disabled"]
                                          ),
                                        ]))
                                      : q("", !0),
                                    I.itemType === "protection"
                                      ? (t(),
                                        s("div", Ci, [
                                          A(
                                            Mo,
                                            {
                                              id: I.id,
                                              protection: I,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[24] ||
                                                (y[24] = (J) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    J.id
                                                  )),
                                              onHandleEquip:
                                                y[25] ||
                                                (y[25] = (J) =>
                                                  f.$emit(
                                                    "handleEquipItem",
                                                    J
                                                  )),
                                              onHandleEdit: C,
                                            },
                                            null,
                                            8,
                                            ["id", "protection", "disabled"]
                                          ),
                                        ]))
                                      : q("", !0),
                                    I.itemType === "misc" ||
                                    I.itemType === "ammunition"
                                      ? (t(),
                                        s("div", Ai, [
                                          A(
                                            Ro,
                                            {
                                              id: I.id,
                                              misc: I,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[26] ||
                                                (y[26] = (J) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    J.id
                                                  )),
                                              onHandleEdit: C,
                                            },
                                            null,
                                            8,
                                            ["id", "misc", "disabled"]
                                          ),
                                        ]))
                                      : q("", !0),
                                    I.itemType === "cursedItem"
                                      ? (t(),
                                        s("div", qi, [
                                          A(
                                            Do,
                                            {
                                              id: I.id,
                                              "cursed-item": I,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[27] ||
                                                (y[27] = (J) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    J.id
                                                  )),
                                              onHandleEdit: C,
                                            },
                                            null,
                                            8,
                                            ["id", "cursed-item", "disabled"]
                                          ),
                                        ]))
                                      : q("", !0),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (t(), s("div", yi, Ei)),
                  ]))
                : (t(), s("div", Ii, Si)),
            ])
          );
        }
      );
    },
  }),
  Qo = T(_i, [["__scopeId", "data-v-d9d5c266"]]),
  Pi = { class: "tab" },
  Mi = { class: "textarea-container" },
  Ri = ["disabled", "placeholder", "value", "onBlur"],
  Di = D({
    __name: "DescriptionTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeDescription"],
    setup(a, { emit: b }) {
      const v = b,
        g = (p, c) => {
          const m = { value: p.target.value, key: c };
          v("handleChangeDescription", m);
        },
        l = [
          {
            title: "Anotações",
            key: "anotation",
            placeholder: "Anotações pessoais do agente...",
          },
          {
            title: "Aparência",
            key: "physical",
            placeholder: "Nome, gênero, idade, descrição física...",
          },
          {
            title: "Personalidade",
            key: "personal",
            placeholder: "Traços marcantes, opiniões, ideais...",
          },
          {
            title: "Histórico",
            key: "history",
            placeholder:
              "Infância, relação com a família, contato com o Paranormal, eventos bons e ruins...",
          },
          {
            title: "Objetivo",
            key: "goal",
            placeholder:
              "Por que ele faz parte da Ordem? Porque luta contra o Outro Lado?",
          },
        ];
      return (p, c) => (
        t(),
        s("div", Pi, [
          (t(),
          s(
            x,
            null,
            W(l, (m) =>
              e("div", { key: m.title }, [
                e("div", Mi, [
                  e("h3", null, O(m.title), 1),
                  e(
                    "textarea",
                    {
                      class: "textarea description-tab-size",
                      rows: "5",
                      disabled: p.disabledSheet,
                      placeholder: m.placeholder,
                      value: p.character.description[m.key],
                      onBlur: (i) => g(i, m.key),
                    },
                    `\r
        `,
                    40,
                    Ri
                  ),
                ]),
              ])
            ),
            64
          )),
        ])
      );
    },
  }),
  Wo = T(Di, [["__scopeId", "data-v-c2fd2df6"]]),
  Ti = { class: "sheet-tab-container" },
  Vi = { class: "tab-nav-container" },
  wi = D({
    __name: "SheetTabView",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenAbilitiesModal",
      "handleOpenRitualsModal",
      "handleOpenItemsModal",
      "handleOpenAddAttack",
      "handleEditAttack",
      "handleRemoveAttack",
      "handleRemovePower",
      "handleRemoveRitual",
      "handleRemoveItem",
      "handleEquipItem",
      "handleChangeAttackText",
      "handleChangeAttackNumber",
      "handleChangeAttackDropdown",
      "handleChangeDescription",
      "handleChangeInventoryNumber",
      "handleChangeItemsLimit",
      "handleChangeInventoryDropdown",
      "handleRollDices",
      "handleRollAttack",
      "handleChangeRitualDc",
      "handleEditPower",
      "handleEditRitual",
      "handleEditItem",
      "handleRollRitual",
      "handleOpenAddPower",
      "handleOpenAddRitual",
      "handleOpenAddWeapon",
      "handleOpenAddAmmunition",
      "handleOpenAddProtection",
      "handleOpenAddMisc",
      "handleOpenAddCursedItem",
    ],
    setup(a, { emit: b }) {
      const v = b,
        g = [
          { label: "COMBAT", value: 0 },
          { label: "ABILITIES", value: 1 },
          { label: "RITUALS", value: 2 },
          { label: "INVENTORY", value: 3 },
          { label: "DESCRIPTION", value: 4 },
        ],
        l = [No, Bo, Fo, Qo, Wo],
        p = E(0),
        c = (k) => (p.value = k),
        m = (k) => v("handleChangeAttackText", k),
        i = (k) => v("handleChangeAttackNumber", k),
        r = (k) => v("handleChangeAttackDropdown", k),
        o = (k) => v("handleChangeDescription", k),
        u = (k) => v("handleChangeInventoryNumber", k),
        C = (k) => v("handleChangeItemsLimit", k),
        _ = (k) => v("handleChangeInventoryDropdown", k),
        M = (k) => v("handleRollAttack", k),
        f = (k) => v("handleChangeRitualDc", k),
        y = (k) => v("handleEditPower", k),
        R = (k) => v("handleEditRitual", k),
        N = (k) => v("handleEditAttack", k),
        ge = (k) => v("handleEditItem", k),
        n = (k, $) => v("handleRollRitual", k, $);
      return (k, $) => (
        t(),
        s("div", Ti, [
          e("div", Vi, [
            A(
              ve,
              {
                "tab-options": g,
                "current-tab": p.value,
                "no-gap": "",
                onHandleNavigation: c,
              },
              null,
              8,
              ["current-tab"]
            ),
          ]),
          (t(),
          L(
            Ne,
            null,
            [
              (t(),
              L(
                Me(l[p.value]),
                {
                  character: k.character,
                  "disabled-sheet": k.disabledSheet,
                  onHandleOpenAbilitiesModal:
                    $[0] || ($[0] = (w) => k.$emit("handleOpenAbilitiesModal")),
                  onHandleOpenRitualsModal:
                    $[1] || ($[1] = (w) => k.$emit("handleOpenRitualsModal")),
                  onHandleOpenItemsModal:
                    $[2] || ($[2] = (w) => k.$emit("handleOpenItemsModal")),
                  onHandleOpenAddAttack:
                    $[3] || ($[3] = (w) => k.$emit("handleOpenAddAttack")),
                  onHandleOpenAddPower:
                    $[4] || ($[4] = (w) => k.$emit("handleOpenAddPower")),
                  onHandleOpenAddRitual:
                    $[5] || ($[5] = (w) => k.$emit("handleOpenAddRitual")),
                  onHandleOpenAddWeapon:
                    $[6] || ($[6] = (w) => k.$emit("handleOpenAddWeapon")),
                  onHandleOpenAddProtection:
                    $[7] || ($[7] = (w) => k.$emit("handleOpenAddProtection")),
                  onHandleOpenAddAmmunition:
                    $[8] || ($[8] = (w) => k.$emit("handleOpenAddAmmunition")),
                  onHandleOpenAddMisc:
                    $[9] || ($[9] = (w) => k.$emit("handleOpenAddMisc")),
                  onHandleOpenAddCursedItem:
                    $[10] ||
                    ($[10] = (w) => k.$emit("handleOpenAddCursedItem")),
                  onHandleRemoveAttack:
                    $[11] || ($[11] = (w) => k.$emit("handleRemoveAttack", w)),
                  onHandleEditAttack: N,
                  onHandleEditPower: y,
                  onHandleEditRitual: R,
                  onHandleEditItem: ge,
                  onHandleRemovePower:
                    $[12] || ($[12] = (w) => k.$emit("handleRemovePower", w)),
                  onHandleRemoveRitual:
                    $[13] || ($[13] = (w) => k.$emit("handleRemoveRitual", w)),
                  onHandleRemoveItem:
                    $[14] || ($[14] = (w) => k.$emit("handleRemoveItem", w)),
                  onHandleEquipItem:
                    $[15] || ($[15] = (w) => k.$emit("handleEquipItem", w)),
                  onHandleChangeAttackText: m,
                  onHandleChangeAttackNumber: i,
                  onHandleChangeAttackDropdown: r,
                  onHandleChangeDescription: o,
                  onHandleChangeInventoryNumber: u,
                  onHandleChangeItemsLimit: C,
                  onHandleChangeInventoryDropdown: _,
                  onHandleRollDices:
                    $[16] || ($[16] = (w) => k.$emit("handleRollDices", w)),
                  onHandleRollAttack: M,
                  onHandleChangeRitualDc: f,
                  onHandleRollRitual: n,
                },
                null,
                40,
                ["character", "disabled-sheet"]
              )),
            ],
            1024
          )),
        ])
      );
    },
  }),
  Oi = T(wi, [["__scopeId", "data-v-ff57a115"]]),
  zi = { class: "switch-container" },
  Hi = ["onClick"],
  ji = D({
    __name: "SwitchButton",
    props: {
      value: { type: Number, required: !0 },
      options: { type: Array, required: !0 },
    },
    emits: ["handleNavigation"],
    setup(a) {
      return (b, v) => (
        t(),
        s("div", zi, [
          (t(!0),
          s(
            x,
            null,
            W(
              a.options,
              (g) => (
                t(),
                s(
                  "button",
                  {
                    key: g.value,
                    class: Z([
                      "switch-button",
                      { active: g.value === a.value },
                    ]),
                    onClick: (l) => b.$emit("handleNavigation", g.value),
                  },
                  O(g.label),
                  11,
                  Hi
                )
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  ha = T(ji, [["__scopeId", "data-v-9be4a122"]]),
  Ui = { class: "class-abilities-container" },
  xi = { key: 0, class: "search-container" },
  Ni = { key: 1, class: "class-abilities-content" },
  Li = D({
    __name: "ClassAbilities",
    props: { classValue: {} },
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = E([]),
        p = E([]),
        c = E([]),
        m = E(0),
        i = E(""),
        r = (u) => g("handleAddPower", u);
      Ae(() => {
        c.value.push({ label: `Poderes de ${v.classValue.name}`, value: 0 }),
          v.classValue.paths.forEach((u, C) => {
            c.value.push({ label: u.name, value: C + 1 }), p.value.push(u);
          });
        for (const u of v.classValue.abilities) l.value.push(u);
        for (const u of v.classValue.powers) l.value.push(u);
      });
      const o = Q(() =>
        l.value
          ? m.value === 0
            ? l.value
                .filter((u) => X(u.name, i.value))
                .sort((u, C) => u.name.localeCompare(C.name))
            : p.value[m.value - 1].abilities
          : []
      );
      return (u, C) => (
        t(),
        s("div", Ui, [
          A(
            ve,
            {
              "current-tab": m.value,
              "tab-options": c.value,
              secondary: "",
              onHandleNavigation: C[0] || (C[0] = (_) => (m.value = _)),
            },
            null,
            8,
            ["current-tab", "tab-options"]
          ),
          m.value === 0
            ? (t(),
              s("div", xi, [
                A(
                  Ie,
                  {
                    value: i.value,
                    dark: "",
                    onUpdate: C[1] || (C[1] = (_) => (i.value = _)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          o.value.length > 0
            ? (t(),
              s("div", Ni, [
                (t(!0),
                s(
                  x,
                  null,
                  W(
                    o.value,
                    (_) => (
                      t(),
                      s("div", { key: _.name, class: "class-abilitie-card" }, [
                        A(Be, { power: _, onHandleAdd: r }, null, 8, ["power"]),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : q("", !0),
        ])
      );
    },
  }),
  da = T(Li, [["__scopeId", "data-v-bb507b22"]]),
  Bi = { class: "class-abilities-container" },
  Fi = { class: "search-container" },
  Qi = { class: "class-abilities-content" },
  Wi = D({
    __name: "BackgroundPower",
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const v = b,
        g = (m) => v("handleAddPower", m),
        l = E([]),
        p = E("");
      Ae(() => {
        for (const m of fs) l.value.push(m.power);
      });
      const c = Q(() =>
        l.value
          .filter((m) => X(m.name, p.value))
          .sort((m, i) => m.name.localeCompare(i.name))
      );
      return (m, i) => (
        t(),
        s("div", Bi, [
          e("div", Fi, [
            A(
              Ie,
              {
                value: p.value,
                dark: "",
                onUpdate: i[0] || (i[0] = (r) => (p.value = r)),
              },
              null,
              8,
              ["value"]
            ),
          ]),
          e("div", Qi, [
            (t(!0),
            s(
              x,
              null,
              W(
                c.value,
                (r) => (
                  t(),
                  s("div", { key: r.name, class: "class-abilitie-card" }, [
                    A(Be, { power: r, onHandleAdd: g }, null, 8, ["power"]),
                  ])
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  }),
  Gi = T(Wi, [["__scopeId", "data-v-5db4501a"]]),
  Xi = [
    {
      name: "Aprender Ritual",
      element: "Varia",
      description:
        "<p>Através de uma conexão com as memórias de ocultistas do passado e os segredos das entidades, você aprende e pode conjurar um ritual de 1º círculo à sua escolha. Além disso, você pode substituir um ritual que já conhece por outro. A partir de 45% de NEX, quando escolhe este poder, você aprende um ritual de até 2º círculo e, a partir de 75% de NEX, aprende um ritual de até 3º círculo. Você pode escolher esse poder quantas vezes quiser, mas está sujeito ao limite de rituais conhecidos. <em>Este poder conta como um poder do elemento do ritual escolhido.</em></p>",
    },
    {
      name: "Resistir a <Elemento>",
      element: "Varia",
      description:
        "<p>Escolha entre Conhecimento, Energia, Morte ou Sangue. Você recebe resistência 10 contra esse elemento. <em>Este poder conta como um poder do elemento escolhido.</em></p><p><span>Afinidade:</span> aumenta a resistência para 20.</p>",
    },
    {
      name: "Expansão de Conhecimento",
      element: "Conhecimento",
      description:
        "<p>Você se conecta com o Conhecimento do Outro Lado, rompendo os limites de sua compreensão. Você aprende um poder de classe que não pertença à sua classe (caso o poder possua pré-requisitos, você precisa preenchê-los). <em>Pré-requisito:</em> Conhecimento 1.</p><p><span>Afinidade:</span> você aprende um segundo poder de classe que não pertença à sua classe.</p>",
    },
    {
      name: "Percepção Paranormal",
      element: "Conhecimento",
      description:
        "<p>O Conhecimento sussurra em sua mente. Em cenas de investigação, sempre que fizer um teste para procurar pistas, você pode rolar novamente um dado com resultado menor que 10. Você deve aceitar a segunda rolagem, mesmo que seja menor que a primeira.</p><p><span>Afinidade:</span> você pode rolar novamente até dois dados com resultado menor que 10.</p>",
    },
    {
      name: "Precognição",
      element: "Conhecimento",
      description:
        "<p>Você possui um “sexto sentido” que o avisa do perigo antes que ele aconteça. Você recebe +2 em Defesa e em testes de resistência. <em>Pré-requisito:</em> Conhecimento 1.</p><p><span>Afinidade:</span> você fica imune à condição desprevenido.</p>",
    },
    {
      name: "Sensitivo",
      element: "Conhecimento",
      description:
        "<p>Você consegue sentir as emoções e intenções de outros personagens, como medo, raiva ou malícia, recebendo +5 em testes de Diplomacia, Intimidação e Intuição.</p><p><span>Afinidade:</span> quando você faz um teste oposto usando uma dessas perícias, o oponente sofre –1d20.</p>",
    },
    {
      name: "Visão do Oculto",
      element: "Conhecimento",
      description:
        "<p>Você não enxerga mais pelos olhos, mas sim pela percepção do Conhecimento em sua mente. Você recebe +5 em testes de Percepção e enxerga no escuro.</p><p><span>Afinidade:</span> você ignora camuflagem.</p>",
    },
    {
      name: "Afortunado",
      element: "Energia",
      description:
        "<p>A Energia considera resultados medíocres entediantes. Uma vez por rolagem, você pode rolar novamente um resultado 1 em qualquer dado que não seja d20.</p><p><span>Afinidade:</span> além disso, uma vez por teste, você pode rolar novamente um resultado 1 em d20.</p>",
    },
    {
      name: "Campo Protetor",
      element: "Energia",
      description:
        "<p>Você consegue gerar um campo de Energia que o protege de perigos. Quando usa a ação esquiva, você pode gastar 1 PE para receber +5 em Defesa. <em>Pré-requisito:</em> Energia 1.</p><p><span>Afinidade:</span> quando usa este poder, você também recebe +5 em Reflexo e, até o início de seu próximo turno, se passar em um teste de Reflexo que reduziria o dano à metade, em vez disso não sofre nenhum dano.</p>",
    },
    {
      name: "Causalidade Fortuita",
      element: "Energia",
      description:
        "<p>A Energia o conduz rumo à descobertas. Em cenas de investigação, a DT para procurar pistas diminui em -5 para você até você encontrar uma pista.</p><p><span>Afinidade:</span> a DT para procurar pistas sempre diminui em –5 para você.</p>",
    },
    {
      name: "Golpe de Sorte",
      element: "Energia",
      description:
        "<p>Seus ataques recebem +1 na margem de ameaça. <em>Pré-requisito:</em> Energia 1.</p><p><span>Afinidade:</span> seus ataques recebem +1 no multiplicador de crítico.</p>",
    },
    {
      name: "Manipular Entropia",
      element: "Energia",
      description:
        "<p>Nada diverte mais a Energia do que a possibilidade de um desastre ainda maior. Você pode gastar 2 PE para fazer um alvo em alcance curto (exceto você mesmo) rolar novamente um dos dados em um teste de perícia. <em>Pré-requisito:</em> Energia 1.</p><p><span>Afinidade:</span> o alvo rola novamente todos os dados que você escolher.</p>",
    },
    {
      name: "Encarar a Morte",
      element: "Morte",
      description:
        "<p>Sua conexão com a Morte faz com que você não hesite em situações de perigo. Durante cenas de ação, seu limite de gasto de PE aumenta em +1 (isso não afeta a DT de seus efeitos).</p><p><span>Afinidade:</span> durante cenas de ação, seu limite de gasto de PE aumenta em +2 (para um total de +3).</p>",
    },
    {
      name: "Escapar da Morte",
      element: "Morte",
      description:
        "<p>A Morte tem um interesse especial em sua caminhada. Uma vez por cena, quando receber dano que o deixaria com 0 PV, você fica com 1 PV. Não funciona em caso de dano massivo. <em>Pré-requisito:</em> Morte 1.</p><p><span>Afinidade:</span> em vez do normal, você evita completamente o dano. Em caso de dano massivo, você fica com 1 PV.</p>",
    },
    {
      name: "Potencial Aprimorado",
      element: "Morte",
      description:
        "<p>A Morte lhe concede potencial latente de momentos roubados de outro lugar. Você recebe +1 ponto de esforço por NEX. Quando sobe de NEX, os PE que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder em NEX 30%, recebe 6 PE. Quando subir para NEX 35%, recebe +1 PE adicional, e assim por diante.</p><p><span>Afinidade:</span> você recebe +1 PE adicional por NEX (para um total de +2 PE por NEX).</p>",
    },
    {
      name: "Potencial Reaproveitado",
      element: "Morte",
      description:
        "<p>Você absorve os momentos desperdiçados de outros seres. Uma vez por rodada, quando passa num teste de resistência, você ganha 2 PE temporários cumulativos. Os pontos desaparecem no final da cena.</p><p><span>Afinidade:</span> você ganha 3 PE temporários, em vez de 2.</p>",
    },
    {
      name: "Surto Temporal",
      element: "Morte",
      description:
        "<p>A sua percepção temporal se torna distorcida e espiralizada, fazendo com que a noção de passagem do tempo nunca mais seja a mesma para você. Uma vez por cena, durante seu turno, você pode gastar 3 PE para realizar uma ação padrão adicional. <em>Pré-requisito:</em> Morte 2.</p><p><span>Afinidade:</span> em vez de uma vez por cena, você pode usar este poder uma vez por turno.</p>",
    },
    {
      name: "Anatomia Insana",
      element: "Sangue",
      description:
        "<p>O seu corpo é transfigurado e parece desenvolver um instinto próprio separado da sua consciência. Você tem 50% de chance (resultado par em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. <em>Pré-requisito:</em> Sangue 2.</p><p><span>Afinidade:</span> você é imune aos efeitos de acertos críticos e ataques furtivos.</p>",
    },
    {
      name: "Arma de Sangue",
      element: "Sangue",
      description:
        "<p>O Sangue devora parte de seu corpo e se manifesta como parte de você. Você pode gastar uma ação de movimento e 2 PE para produzir garras, chifres ou uma lâmina de sangue cristalizado que brota de seu antebraço. Qualquer que seja sua escolha, é considerada uma arma simples leve que você não precisa empunhar e causa 1d6 pontos de dano de Sangue. Uma vez por turno, quando você usa a ação agredir, pode gastar 1 PE para fazer um ataque adicional com essa arma. A arma dura até o final da cena, e então se desfaz numa poça de sangue coagulado.</p><p><span>Afinidade:</span> a arma se torna permanentemente parte de você e causa 1d10 pontos de dano de Sangue.</p>",
    },
    {
      name: "Sangue de Ferro",
      element: "Sangue",
      description:
        "<p>O seu sangue flui de forma paranormal e agressiva, concedendo vigor não natural. Você recebe +2 pontos de vida por NEX. Quando sobe de NEX, os PV que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder em NEX 50%, recebe 20 PV. Quando subir para NEX 55%, recebe +2 PV, e assim por diante.</p><p><span>Afinidade:</span> você recebe +5 em Fortitude e se torna imune a venenos e doenças.</p>",
    },
    {
      name: "Sangue Fervente",
      element: "Sangue",
      description:
        "<p>A intensidade da dor desperta em você sentimentos bestiais e prazerosos que você nem imaginava que existiam. Enquanto estiver machucado, você recebe +1 em Agilidade ou Força, à sua escolha (escolha sempre que este efeito for ativado). <em>Pré-requisito:</em> Sangue 2.</p><p><span>Afinidade:</span> o bônus que você recebe em Agilidade ou Força aumenta para +2.</p>",
    },
    {
      name: "Sangue Vivo",
      element: "Sangue",
      description:
        "<p>A carnificina não pode parar, o Sangue precisa continuar fluindo. Na primeira vez que ficar machucado durante uma cena, você recebe cura acelerada 2. Esse efeito nunca cura você acima da metade dos PV máximos (ou seja, você nunca deixa de estar machucado) e termina no fim da cena ou caso você perca a condição machucado. <em>Pré-requisito:</em> Sangue 1.</p><p><span>Afinidade:</span> a cura acelerada aumenta para 5.</p>",
    },
  ],
  Ki = { class: "class-abilities-container" },
  Ji = { key: 0, class: "class-abilities-content" },
  Yi = D({
    __name: "ParanormalPowers",
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const v = b,
        g = [
          { label: "Conhecimento", value: 0 },
          { label: "Energia", value: 1 },
          { label: "Morte", value: 2 },
          { label: "Sangue", value: 3 },
          { label: "Varia", value: 4 },
        ],
        l = E(0),
        p = (m) => v("handleAddPower", m),
        c = Q(() => Xi.filter((m) => m.element === g[l.value].label));
      return (m, i) => (
        t(),
        s("div", Ki, [
          A(
            ve,
            {
              "current-tab": l.value,
              "tab-options": g,
              secondary: "",
              onHandleNavigation: i[0] || (i[0] = (r) => (l.value = r)),
            },
            null,
            8,
            ["current-tab"]
          ),
          c.value.length > 0
            ? (t(),
              s("div", Ji, [
                (t(!0),
                s(
                  x,
                  null,
                  W(
                    c.value,
                    (r) => (
                      t(),
                      s("div", { key: r.name, class: "class-abilitie-card" }, [
                        A(Be, { power: r, onHandleAdd: p }, null, 8, ["power"]),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : q("", !0),
        ])
      );
    },
  }),
  Zi = T(Yi, [["__scopeId", "data-v-05246a49"]]),
  el = { class: "abilities-modal-content" },
  al = { key: 0 },
  ol = { key: 1 },
  tl = { key: 2 },
  sl = { key: 3 },
  nl = { key: 4 },
  rl = D({
    __name: "AbilitiesModalContent",
    props: { character: {} },
    emits: ["handleCloseModal", "handleAddPower"],
    setup(a, { emit: b }) {
      const v = b,
        g = [
          { label: "Combatente", value: 0 },
          { label: "Especialista", value: 1 },
          { label: "Ocultista", value: 2 },
          { label: "Origens", value: 3 },
          { label: "Poderes Paranormais", value: 4 },
        ],
        l = E(0),
        p = (m) => (l.value = m),
        c = (m) => v("handleAddPower", m);
      return (m, i) => (
        t(),
        s("div", el, [
          A(
            ve,
            { "current-tab": l.value, "tab-options": g, onHandleNavigation: p },
            null,
            8,
            ["current-tab"]
          ),
          l.value === 0
            ? (t(),
              s("div", al, [
                A(
                  da,
                  { "class-value": Y(He)[0], onHandleAddPower: c },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          l.value === 1
            ? (t(),
              s("div", ol, [
                A(
                  da,
                  { "class-value": Y(He)[1], onHandleAddPower: c },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          l.value === 2
            ? (t(),
              s("div", tl, [
                A(
                  da,
                  { "class-value": Y(He)[2], onHandleAddPower: c },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          l.value === 3
            ? (t(), s("div", sl, [A(Gi, { onHandleAddPower: c })]))
            : q("", !0),
          l.value === 4
            ? (t(), s("div", nl, [A(Zi, { onHandleAddPower: c })]))
            : q("", !0),
        ])
      );
    },
  }),
  dl = T(rl, [["__scopeId", "data-v-84328ffc"]]),
  Go = (a) => (z("data-v-7388a7f6"), (a = a()), H(), a),
  il = { class: "modal-content modal-width" },
  ll = { class: "modal-header" },
  ul = Go(() => e("h2", null, "Adicionar Habilidades", -1)),
  cl = Go(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  ml = [cl],
  pl = { class: "modal-body modal-height" },
  vl = D({
    __name: "AbilitiesModal",
    props: { character: {} },
    emits: ["handleAddPower", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        g = [dl, Cs],
        l = [
          { label: "Habilidades", value: 0 },
          { label: "Minhas Habilidades", value: 1 },
        ],
        p = E(0),
        c = (i) => (p.value = i),
        m = (i) => v("handleAddPower", i);
      return (i, r) => (
        t(),
        s("div", il, [
          e("div", ll, [
            ul,
            e(
              "button",
              { onClick: r[0] || (r[0] = (o) => i.$emit("handleCloseModal")) },
              ml
            ),
          ]),
          e("div", pl, [
            A(
              ha,
              { value: p.value, options: l, onHandleNavigation: c },
              null,
              8,
              ["value"]
            ),
            (t(),
            L(
              Ne,
              null,
              [
                (t(),
                L(
                  Me(g[p.value]),
                  { character: i.character, onHandleAddPower: m },
                  null,
                  40,
                  ["character"]
                )),
              ],
              1024
            )),
          ]),
        ])
      );
    },
  }),
  gl = T(vl, [["__scopeId", "data-v-7388a7f6"]]),
  G = [
    {
      name: "Balas Curtas",
      category: "0",
      slots: 1,
      tag: "Munições",
      itemType: "ammunition",
      description:
        "<p>Munição básica, usada em pistolas, revólveres e submetralhadoras. Um pacote de balas curtas dura duas cenas.</p>",
    },
    {
      name: "Balas Longas",
      category: "I",
      slots: 1,
      tag: "Munições",
      itemType: "ammunition",
      description:
        "<p>Maior e mais potente, esta munição é usada em fuzis e metralhadoras. Um pacote de balas longas dura uma cena.</p>",
    },
    {
      name: "Cartuchos",
      category: "I",
      slots: 1,
      tag: "Munições",
      itemType: "ammunition",
      description:
        "<p>Usados em espingardas, esses cartuchos são carregados com esferas de chumbo. Um pacote de cartuchos dura uma cena.</p>",
    },
    {
      name: "Combustível",
      category: "I",
      slots: 1,
      tag: "Munições",
      itemType: "ammunition",
      description:
        "<p>Um tanque de combustível para lança-chamas. Dura uma cena.</p>",
    },
    {
      name: "Flechas",
      category: "0",
      slots: 1,
      tag: "Munições",
      itemType: "ammunition",
      description:
        "<p>Usadas em arcos e bestas, flechas podem ser reaproveitadas após cada combate. Por isso, um pacote de flechas dura uma missão inteira.</p>",
    },
    {
      name: "Foguete",
      category: "I",
      slots: 1,
      tag: "Munições",
      itemType: "ammunition",
      description:
        "<p>Disparado por bazucas. Ao contrário de outras munições, cada foguete dura um único disparo, não uma cena. Para fazer vários ataques, você precisará carregar vários foguetes.</p>",
    },
  ],
  hl = [
    {
      name: "Coronhada",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Leve",
      damage: "1d4",
      secondaryDamage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "-",
      slots: 0,
      itemType: "weapon",
      description:
        "<p>Você pode usar uma arma de fogo como uma arma corpo a corpo. O dano é 1d4 para armas de fogo leves e de uma mão (como pistolas) e 1d6 para armas de fogo de duas mãos (como fuzis).</p>",
    },
    {
      name: "Faca",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Leve",
      damage: "1d4",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Corte",
      range: "Curto",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma lâmina longa e afiada, como uma navalha, uma faca de churrasco ou uma faca militar (facas de cozinha pequenas causam apenas 1d3 pontos de dano). É uma arma ágil e pode ser arremessada.</p>",
    },
    {
      name: "Martelo",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Leve",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Esta ferramenta comum pode ser usada como arma na falta de opções melhores.</p>",
    },
    {
      name: "Punhal",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Leve",
      damage: "1d4",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Perfuração",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma faca de lâmina longa e pontiaguda, usada por cultistas em seus rituais. É uma arma ágil.</p>",
    },
    {
      name: "Bastão",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "1d6",
      secondaryDamage: "1d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Um cilindro de madeira maciça. Pode ser um taco de beisebol, um cacetete da polícia, uma tonfa ou apenas uma clava envolta em pregos ou arame farpado. Você pode empunhar um bastão com uma mão (dano 1d6) ou com as duas (dano 1d8).</p>",
    },
    {
      name: "Machete",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Corte",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma lâmina longa, muito usada como ferramenta para abrir trilhas.</p>",
    },
    {
      name: "Lança",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Perfuração",
      range: "Curto",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma haste de madeira com uma ponta metálica afiada, a lança é uma arma arcaica, mas usada ainda hoje por artistas marciais. Pode ser arremessada.</p>",
    },
    {
      name: "Cajado",
      proficiencie: "Armas Simples",
      type: "Corpo a Corpo",
      handling: "Duas Mãos",
      damage: "1d6",
      secondaryDamage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "0",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Um cabo de madeira ou barra de ferro longo. Inclui cajado o bo usado em artes marciais. É uma arma ágil. Além disso, pode ser usado com Combater com Duas Armas (e poderes similares) para fazer ataques adicionais, como se fosse uma arma de uma mão e uma arma leve.</p>",
    },
    {
      name: "Arco",
      proficiencie: "Armas Simples",
      type: "Arma de Disparo",
      handling: "Duas Mãos",
      damage: "1d6",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Perfuração",
      range: "Médio",
      category: "0",
      slots: 2,
      ammunitionName: G[4].name,
      itemType: "weapon",
      description: "<p>Um arco e flecha comum, próprio para tiro ao alvo.</p>",
    },
    {
      name: "Besta",
      proficiencie: "Armas Simples",
      type: "Arma de Disparo",
      handling: "Duas Mãos",
      damage: "1d8",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Perfuração",
      range: "Médio",
      category: "0",
      slots: 2,
      ammunitionName: G[4].name,
      itemType: "weapon",
      description:
        "<p>Esta arma da antiguidade exige uma ação de movimento para ser recarregada a cada disparo.</p>",
    },
    {
      name: "Pistola",
      proficiencie: "Armas Simples",
      type: "Arma de Fogo",
      handling: "Leve",
      damage: "1d12",
      criticalMult: 2,
      criticalRange: 18,
      damageType: "Balístico",
      range: "Curto",
      category: "I",
      slots: 1,
      ammunitionName: G[0].name,
      itemType: "weapon",
      description:
        "<p>Uma arma de mão comum entre policiais e militares por ser facilmente recarregável.</p>",
    },
    {
      name: "Revólver",
      proficiencie: "Armas Simples",
      type: "Arma de Fogo",
      handling: "Leve",
      damage: "2d6",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Balístico",
      range: "Curto",
      category: "I",
      slots: 1,
      ammunitionName: G[0].name,
      itemType: "weapon",
      description:
        "<p>A arma de fogo mais comum, e uma das mais confiáveis.</p>",
    },
    {
      name: "Fuzil de Caça",
      proficiencie: "Armas Simples",
      type: "Arma de Fogo",
      handling: "Duas Mãos",
      damage: "2d8",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Balístico",
      range: "Médio",
      category: "I",
      slots: 2,
      ammunitionName: G[1].name,
      itemType: "weapon",
      description:
        "<p>Esta arma de fogo é bastante popular entre fazendeiros, caçadores e atiradores esportistas.</p>",
    },
    {
      name: "Machadinha",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Leve",
      damage: "1d6",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Corte",
      range: "Curto",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Ferramenta útil para cortar madeira, pode ser facilmente encontrada em canteiros de obras e fazendas. Pode ser arremessada.</p>",
    },
    {
      name: "Nunchaku",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Leve",
      damage: "1d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Dois bastões curtos de madeira ligados por uma corrente. É uma arma ágil.</p>",
    },
    {
      name: "Corrente",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "1d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Um pedaço de corrente grossa pode ser usado como uma arma bastante efetiva. A corrente fornece +2 em testes para desarmar e derrubar.</p>",
    },
    {
      name: "Espada",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "1d8",
      secondaryDamage: "1d10",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma arma medieval, como uma espada longa dos cavaleiros europeus ou uma cimitarra sarracena. Você pode empunhar uma espada com uma mão (dano 1d8) ou com as duas (dano 1d10).</p>",
    },
    {
      name: "Florete",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 18,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Esta espada de lâmina fina e comprida é usada por esgrimistas.É uma arma ágil.</p>",
    },
    {
      name: "Machado",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "1d8",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma ferramenta importante para lenhadores e bombeiros, um machado pode causar ferimentos terríveis.</p>",
    },
    {
      name: "Maça",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Uma Mão",
      damage: "2d4",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Bastão com uma cabeça metálica cheia de protuberâncias.</p>",
    },
    {
      name: "Acha",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Duas Mãos",
      damage: "1d12",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Um machado grande e pesado, usado no corte de árvores largas.</p>",
    },
    {
      name: "Gadanho",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Duas Mãos",
      damage: "2d4",
      criticalMult: 4,
      criticalRange: 20,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Uma ferramenta agrícola, o gadanho é uma versão maior da foice, para uso com as duas mãos. Foi criada para ceifar cereais, mas também pode ceifar vidas.</p>",
    },
    {
      name: "Katana",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Duas Mãos",
      damage: "1d10",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Originária do Japão, esta espada longa e levemente curvada transcendeu os séculos. É uma arma ágil. Se você for veterano em Luta pode usá-la como uma arma de uma mão.</p>",
    },
    {
      name: "Marreta",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Duas Mãos",
      damage: "3d4",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Normalmente usada para demolir paredes, também pode ser usada para demolir pessoas. Use estas estatísticas para outras ferramentas de construção civil, como picaretas.</p>",
    },
    {
      name: "Montante",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Duas Mãos",
      damage: "2d6",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Enorme e pesada, esta espada de 1,5m de comprimento foi uma das armas mais poderosas em seu tempo.</p>",
    },
    {
      name: "Motosserra",
      proficiencie: "Armas Táticas",
      type: "Corpo a Corpo",
      handling: "Duas Mãos",
      damage: "3d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Corte",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Uma ferramenta motorizada capaz de causar ferimentos profundos; sempre que rolar um 6 em um dado de dano com uma motosserra, role um dado de dano adicional. Apesar de potente, esta arma é muito desajeitada e impõe uma penalidade de -1d20 nos seus testes de ataque. Ligar uma motosserra gasta uma ação de movimento.</p>",
    },
    {
      name: "Arco Composto",
      proficiencie: "Armas Táticas",
      type: "Arma de Disparo",
      handling: "Duas Mãos",
      damage: "1d10",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Perfuração",
      range: "Médio",
      category: "I",
      slots: 2,
      ammunitionName: G[4].name,
      itemType: "weapon",
      description:
        "<p>Este arco moderno usa materiais de alta tensão e um sistema de roldanas para gerar mais pressão. Ao contrário de outras armas de disparo, permite que você aplique seu valor de Força às rolagens de dano.</p>",
    },
    {
      name: "Balestra",
      proficiencie: "Armas Táticas",
      type: "Arma de Disparo",
      handling: "Duas Mãos",
      damage: "1d12",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Perfuração",
      range: "Médio",
      category: "I",
      slots: 2,
      ammunitionName: G[4].name,
      itemType: "weapon",
      description:
        "<p>Uma besta pesada, capaz de disparos poderosos. Exige uma ação de movimento para ser recarregada a cada disparo.</p>",
    },
    {
      name: "Submetralhadora",
      proficiencie: "Armas Táticas",
      type: "Arma de Fogo",
      handling: "Uma Mão",
      damage: "2d6",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Balístico",
      range: "Curto",
      category: "I",
      slots: 1,
      ammunitionName: G[0].name,
      itemType: "weapon",
      description:
        "<p>Esta arma de fogo automática pode ser empunhada com apenas uma mão.</p>",
    },
    {
      name: "Espingarda",
      proficiencie: "Armas Táticas",
      type: "Arma de Fogo",
      handling: "Duas Mãos",
      damage: "4d6",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Balístico",
      range: "Curto",
      category: "I",
      slots: 2,
      ammunitionName: G[2].name,
      itemType: "weapon",
      description:
        "<p>Arma de fogo longa e com cano liso. A espingarda causa apenas metade do dano em alcance médio ou maior.</p>",
    },
    {
      name: "Fuzil de Assalto",
      proficiencie: "Armas Táticas",
      type: "Arma de Fogo",
      handling: "Duas Mãos",
      damage: "2d10",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Balístico",
      range: "Médio",
      category: "II",
      slots: 2,
      ammunitionName: G[1].name,
      itemType: "weapon",
      description:
        "<p>A arma de fogo padrão da maioria dos exércitos modernos. É uma arma automática.</p>",
    },
    {
      name: "Fuzil de Precisão",
      proficiencie: "Armas Táticas",
      type: "Arma de Fogo",
      handling: "Duas Mãos",
      damage: "2d10",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Balístico",
      range: "Longo",
      category: "III",
      slots: 2,
      ammunitionName: G[1].name,
      itemType: "weapon",
      description:
        "<p>Esta arma de fogo de uso militar é projetada para disparos longos e precisos. Se for veterano em Pontaria e mirar com um fuzil de precisão, você recebe +5 na margem de ameaça de seu ataque.</p>",
    },
    {
      name: "Bazuca",
      proficiencie: "Armas Pesadas",
      type: "Arma de Fogo",
      handling: "Duas Mãos",
      damage: "10d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Impacto",
      range: "Médio",
      category: "III",
      slots: 2,
      ammunitionName: G[5].name,
      itemType: "weapon",
      description:
        "<p>Este lança-foguetes foi concebido como uma arma anti-tanques, mas também se mostrou eficaz contra criaturas. A bazuca causa seu dano no alvo atingido e em todos os seres num raio de 3m; esses seres (mas não o alvo atingido diretamente) têm direito a um teste de Reflexos (DT Agi) para reduzir o dano à metade. Você pode disparar o foguete num ponto qualquer em alcance médio, em vez de num ser específico; nesse caso, não precisa rolar ataque e não tem chance de errar (mas também não acerta nenhum ser diretamente). A bazuca exige uma ação de movimento para ser recarregada a cada disparo.</p>",
    },
    {
      name: "Lança-chamas",
      proficiencie: "Armas Pesadas",
      type: "Arma de Fogo",
      handling: "Duas Mãos",
      damage: "6d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Fogo",
      range: "Curto",
      category: "III",
      slots: 2,
      ammunitionName: G[3].name,
      itemType: "weapon",
      description:
        "<p>Equipamento militar que esguicha líquido inflamável incandescente. Um lança-chamas atinge todos os seres em uma linha de 1,5m de largura com alcance curto, mas não alcança além disso. Faça um único teste de ataque e compare o resultado com a Defesa de todos os seres na área. Além de sofrer dano, seres atingidos ficam em chamas.</p>",
    },
    {
      name: "Metralhadora",
      proficiencie: "Armas Pesadas",
      type: "Arma de Fogo",
      handling: "Duas Mãos",
      damage: "2d12",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Balístico",
      range: "Médio",
      category: "II",
      slots: 2,
      ammunitionName: G[1].name,
      itemType: "weapon",
      description:
        "<p>Uma arma de fogo pesada, de uso militar. Para atacar com uma metralhadora, você precisa ter Força 4 ou maior ou gastar uma ação de movimento para apoiá-la em seu tripé ou suporte apropriado; caso contrário, sofre –5 em seus ataques. Uma metralhadora é uma arma automática.</p>",
    },
  ],
  fl = [
    {
      name: "Proteção Leve",
      defense: 5,
      category: "I",
      slots: 2,
      itemType: "protection",
      description:
        "<p>Jaqueta de couro pesada ou um colete de kevlar. Essa proteção é tipicamente usada por seguranças e policiais.</p>",
    },
    {
      name: "Proteção Pesada",
      defense: 10,
      category: "II",
      slots: 5,
      itemType: "protection",
      description:
        "<p>Equipamento usado por forças especiais da polícia e pelo exército. Consiste de capacete, ombreiras, joelheiras e caneleiras, além de um colete com várias camadas de kevlar. Fornece resistência a balístico, corte, impacto e perfuração 2. No entanto, por ser desconfortável e volumosa, impõe –5 em testes de perícias que sofrem penalidade de carga.</p>",
    },
    {
      name: "Escudo",
      defense: 2,
      category: "I",
      slots: 2,
      itemType: "protection",
      description:
        "<p>Um escudo medieval ou moderno, como aqueles usados por tropas de choque. Para efeitos de proficiência, conta como proteção pesada. Precisa ser empunhado em uma mão e fornece Defesa +2.</p>",
    },
  ],
  bl = [
    {
      name: "Kit de Perícia",
      tag: "Acessórios",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um conjunto de ferramentas necessárias para algumas perícias ou usos de perícias. Sem o kit, você sofre –5 no teste. Existe um kit de perícia para cada perícia que exige este item.</p>",
    },
    {
      name: "Utensílio",
      tag: "Acessórios",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um item comum que tenha uma utilidade específica, como um canivete, uma lupa, um smartphone ou um notebook. Um utensílio concede +2 em um teste de uma perícia a sua escolha (exceto Luta e Pontaria), definida quando o item é adquirido. Por exemplo, um smartphone pode ser usado para acessar a internet e fornecer bônus em Ciências, enquanto um notebook pode ser preparado para invadir sistemas e fornecer bônus em Tecnologia. Você pode inventar itens menos realistas, como um “detector de mentiras portátil” que fornece +2 em Intuição, mas o mestre tem a palavra final se o utensílio é apropriado ou não. Utensílios sempre ocupam 1 espaço e precisam ser empunhados para que o bônus seja aplicado.</p>",
    },
    {
      name: "Vestimenta",
      tag: "Acessórios",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Uma peça de vestuário que fornece um bônus em uma perícia específica (exceto Luta ou Pontaria). Por exemplo, um par de botas militares pode fornecer +2 em Atletismo, enquanto um terno ou vestido elegante pode fornecer +2 em Diplomacia. Assim como utensílios, o benefício de cada vestimenta deve ser aprovado pelo mestre. Você pode receber os bônus de no máximo duas vestimentas ao mesmo tempo. Vestir ou despir uma vestimenta é uma ação completa.</p>",
    },
    {
      name: "Granada de Atordoamento",
      tag: "Explosivos",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Também chamadas de flash-bang, por criarem um estouro barulhento e luminoso. Seres na área ficam atordoados por 1 rodada (Fortitude DT Agi reduz para ofuscado e surdo por uma rodada).</p>",
    },
    {
      name: "Granada de Fragmentação",
      tag: "Explosivos",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Espalha fragmentos perfurantes. Seres na área sofrem 8d6 pontos de dano de perfuração (Reflexos DT Agi reduz à metade).</p>",
    },
    {
      name: "Granada de Fumaça",
      tag: "Explosivos",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Produz uma fumaça espessa e escura. Seres na área ficam cegos e sob camuflagem total. A fumaça dura 2 rodadas.</p>",
    },
    {
      name: "Granada Incendiária",
      tag: "Explosivos",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Espalha labaredas incandescentes. Seres na área sofrem 6d6 pontos de dano de fogo e ficam em chamas (Reflexos DT Agi reduz o dano à metade e evita a condição em chamas).</p>",
    },
    {
      name: "Mina Antipessoal",
      tag: "Explosivos",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta mina é ativada por controle remoto. Se você estiver a até alcance longo dela, pode gastar uma ação padrão para detoná-la. Ao explodir, a mina dispara centenas de bolas de aço em um cone de 6m, causando 12d6 pontos de dano de perfuração em todos os seres na área (Reflexos DT Int reduz à metade). Você define a direção do cone quando posiciona a mina no chão. Instalar a mina exige uma ação completa e um teste de Tática contra DT 15. Caso falhe, você gasta a mina, mas ela não funciona. Encontrar uma mina instalada exige um teste de Percepção (DT igual ao resultado do seu teste para instalá-la).</p>",
    },
    {
      name: "Algemas",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Algemas. Um par de algemas de aço. Para prender uma pessoa que não esteja indefesa você precisa empunhar a algema, agarrar a pessoa e então vencer um novo teste de agarrar contra ela. Você pode prender os dois pulsos da pessoa (–5 em testes que exijam o uso das mãos, impede conjuração) ou um dos pulsos dela em um objeto imóvel adjacente, caso haja, para impedir que ela se mova. Escapar das algemas exige um teste de Acrobacia contra DT 30 (ou ter as chaves...).</p>",
    },
    {
      name: "Arpéu",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um gancho de aço amarrado na ponta de uma corda para se fixar em muros, janelas, parapeitos de prédios... Prender um arpéu exige um teste de Pontaria (DT 15). Subir um muro com a ajuda de uma corda fornece +5 no teste de Atletismo.</p>",
    },
    {
      name: "Bandoleira",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um cinto com bolsos e alças. Uma vez por rodada, você pode sacar ou guardar um item em seu inventário como uma ação livre.</p>",
    },
    {
      name: "Binóculos",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Estes binóculos militares fornecem +5 em testes de Percepção para observar coisas distantes.</p>",
    },
    {
      name: "Bloqueador de Sinal",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este dispositivo compacto emite ondas que “poluem” a frequência de rádio usada por celulares, impedindo que qualquer aparelho desse tipo em alcance médio se conecte.</p>",
    },
    {
      name: "Cicatrizante",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um spray contendo um remédio com potente efeito cicatrizante. Você pode gastar uma ação padrão e este item para curar 2d8+2 PV em você ou em um ser adjacente.</p>",
    },
    {
      name: "Corda",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um rolo com 10 metros de corda resistente. Possui diversas utilidades: pode ajudar a descer um buraco ou prédio (+5 em testes de Atletismo nessas situações), amarrar pessoas inconscientes etc.</p>",
    },
    {
      name: "Equipamento de Sobrevivência",
      tag: "Itens Operacionais",
      category: "0",
      slots: 2,
      itemType: "misc",
      description:
        "<p>Uma mochila com saco de dormir, panelas, GPS e outros itens úteis para sobreviver no mato. Fornece +5 em testes de Sobrevivência para acampar e orientar-se e permite que você faça esses testes sem treinamento.</p>",
    },
    {
      name: "Lanterna Tática",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Ilumina lugares escuros. Além disso, você pode gastar uma ação de movimento para mirar a luz nos olhos de um ser em alcance curto. Ele fica ofuscado por 1 rodada, mas imune à lanterna pelo resto da cena.</p>",
    },
    {
      name: "Máscara de Gás",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Uma máscara com filtro que cobre o rosto inteiro. Fornece +10 em testes de Fortitude contra efeitos que dependam de respiração.</p>",
    },
    {
      name: "Mochila Militar",
      tag: "Itens Operacionais",
      category: "I",
      slots: -2,
      itemType: "misc",
      description:
        "<p>Uma mochila leve e de alta qualidade. Ela não usa nenhum espaço e aumenta sua capacidade de carga em 2 espaços.</p>",
    },
    {
      name: "Óculos de Visão Térmica",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Estes óculos eliminam a penalidade em testes por camuflagem.</p>",
    },
    {
      name: "Pé de Cabra",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta barra de ferro fornece +5 em testes de Força para arrombar portas. Pode ser usada em combate como um bastão.</p>",
    },
    {
      name: "Pistola de Dardos",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta arma dispara dardos com um poderoso sonífero. Para disparar em um ser, faça um ataque à distância contra ele. Se acertá-lo, ele fica inconsciente até o fim da cena (Fortitude DT Agi reduz para desprevenida e lenta por uma rodada). A pistola vem com 2 dardos. Uma caixa adicional com 2 dardos é um item de categoria 0 que ocupa 1 espaço.</p>",
    },
    {
      name: "Pistola Sinalizadora",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta pistola dispara um sinalizador luminoso, útil para chamar outras pessoas para sua localização. Pode ser usada uma vez como uma arma de disparo leve com alcance curto que causa 2d6 pontos de dano de fogo. A pistola vem com 2 cargas. Uma caixa adicional com 2 cargas é um item de categoria 0 que ocupa 1 espaço.</p>",
    },
    {
      name: "Soqueira",
      tag: "Itens Operacionais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta peça de metal e usada entre os dedos e permite socos mais perigosos — fornece +1 em rolagens de dano desarmado. Uma soqueira pode receber modificações e maldições de armas corpo a corpo e aplica os efeitos delas em seus ataques desarmados.</p>",
    },
    {
      name: "Spray de Pimenta",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este spray dispara um composto químico que causa dor e lacrimejo. Você pode gastar uma ação padrão para atingir um ser adjacente. O ser fica cego por 1d4 rodadas (Fortitude DT Agi evita). A carga do spray dura dois usos.</p>",
    },
    {
      name: "Taser",
      tag: "Itens Operacionais",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um dispositivo de eletrochoque capaz de atordoar ou até incapacitar um alvo. Você pode gastar uma ação padrão para atingir um ser adjacente. O alvo sofre 1d6 pontos de dano de eletricidade e fica atordoado por uma rodada (Fortitude DT Agi evita). A bateria do taser dura dois usos.</p>",
    },
    {
      name: "Traje Hazmat",
      tag: "Itens Operacionais",
      category: "I",
      slots: 2,
      itemType: "misc",
      description:
        "<p>Uma roupa impermeável e que cobre o corpo inteiro, usada para impedir o contato do usuário com materiais tóxicos. Fornece +5 em testes de resistência contra efeitos ambientais e resistência a químico 10.</p>",
    },
    {
      name: "Amarras de (Elemento)",
      tag: "Itens Paranormais",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Cordas ou correntes feitas de um elemento Paranormal específico. As amarras são preparadas para imobilizar criaturas do Outro Lado que sejam vulneráveis ao elemento que as compõem e podem ser usadas de duas formas.</p><p><span>Armadilha.</span> Você gasta as amarras, uma ação completa e 2 PE e prepara uma armadilha de 3x3m. Uma criatura que atravesse o espaço pela primeira vez em seu turno precisa fazer um teste de de Reflexos (DT Int); se falhar, fica imóvel até o final da cena. Mesmo se passar, considera o espaço ocupado pela armadilha como terreno difícil.</p><p><span>Laçar.</span> Você gasta uma ação padrão e 1 PE e escolhe uma criatura em alcance curto. Se falhar num teste de Vontade (DT Agi), a criatura fica paralisada até o início de seu próximo turno, quando pode repetir o teste. Manter a criatura enlaçada requer o gasto de 1 PE por rodada.</p>",
    },
    {
      name: "Câmera de Aura Paranormal",
      tag: "Itens Paranormais",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta câmera amaldiçoada com Energia possui sigilos de Conhecimento para capturar auras paranormais. Tirar uma foto gasta uma ação padrão e 1 PE. As fotos são instantâneas e revelam a presença de auras paranormais em pessoas e objetos. As auras são da cor associada ao elemento.</p>",
    },
    {
      name: "Componentes Ritualísticos de (Elemento)",
      tag: "Itens Paranormais",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um conjunto de objetos utilizados em rituais de um elemento entre Sangue, Morte, Conhecimento ou Energia (não existem componentes ritualísticos de Medo). Componentes ritualísticos são necessários para a conjuração de rituais do elemento em questão.</p><p><span>Energia:</span> eletricidade, dispositivos tecnológicos (celulares, computadores etc.), circuitos eletrônicos, fontes de calor e luz, pilhas, baterias, cabos de cobre e prata, pólvora, moedas, dados, ímãs...</p><p><span>Sangue:</span> órgãos, carne, sangue, animais vivos (para sacrifício), navalhas, agulhas, arame farpado, correntes, metal enferrujado, fluídos corporais...</p><p><span>Morte:</span> ossos, dentes, cinzas, fios de cabelo, cristais pretos, relógios, galhos secos, folhas secas, plantas mortas, raízes, areia, poeira, Lodo...</p><p><span>Conhecimento:</span> escrituras, papéis, livros, pergaminhos, pedras preciosas, ouro, cordas, tecido, cristais brancos, vidro, máscaras, instrumentos de escrita (lápis, caneta, tinta, giz etc.)...</p>",
    },
    {
      name: "Emissor de Pulsos Paranormais",
      tag: "Itens Paranormais",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta pequena caixa coberta de sigilos foi desenvolvida para servir como uma “isca” de criaturas paranormais. Ativar a caixa gasta uma ação completa e 1 PE. A caixa emite um pulso de um elemento definido pelo ativador, que atrai criaturas do mesmo elemento e afasta criaturas do elemento oposto. As criaturas afetadas têm direito a um teste de Vontade (DT Pre) para evitar o efeito.</p>",
    },
    {
      name: "Escuta de Ruídos Paranormais",
      tag: "Itens Paranormais",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este microfone funciona como um aparato espião, com a diferença que consegue captar ruídos paranormais. Ativar a escuta gasta uma ação completa e 2 PE e faz com que ela grave ruídos por até 24 horas. Ouvir a escuta fornece +5 em testes de Ocultismo para identificar criatura.</p>",
    },
    {
      name: "Medidor de Estabilidade da Membrana",
      tag: "Itens Paranormais",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um dispositivo complexo, composto por diversos medidores — de temperatura, campo magnético, dilatação temporal... Um agente treinado em Ocultismo pode usar o medidor para avaliar o estado da Membrana em uma área, o que indica a chance de uma entidade se manifestar nela. Um ambiente com valores racionais e constantes ao longo de algumas horas dificilmente originará uma criatura ou manifestação perigosa. Porém, se as leituras apresentarem dados inexplicáveis ou com grandes variações, o lugar poderá conter uma entidade. Apesar de ser um bom indicativo, o medidor não fornece respostas definitivas, já que um ambiente com a Membrana danificada ainda pode não ter sido afetado por manifestações, assim como um lugar com a Membrana protegida por conter uma criatura poderosa vinda de outro lugar.</p>",
    },
    {
      name: "Scanner de Manifestação Paranormal de (Elemento)",
      tag: "Itens Paranormais",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este item é composto por um dispositivo conectado a pequenos objetos amaldiçoados de uma entidade específica e adornado com uma série de sigilos. Ativar o scanner é uma ação padrão. Quando ativado, o scanner consome 1 PE por rodada do usuário, que sempre sabe a direção de todas as manifestações paranormais ativas (rituais, criaturas, itens amaldiçoados etc.) do elemento escolhido em alcance longo. Se o elemento principal de uma criatura for outro, mas ela tiver como complemento o elemento escolhido do scanner, também será detectada.</p>",
    },
  ],
  Cl = [
    {
      name: "Coração Pulsante",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um coração humano banhado em sangue, pulsando como se ainda estivesse dentro de um corpo.</em> Se estiver empunhando o <em>coração pulsante</em> e sofrer dano, você pode gastar uma reação para espremer o item e reduzir esse dano pela metade. Sempre que usa o coração, você deve fazer um teste de Fortitude (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, o item é destruído. Como o coração continua pulsando incessantemente com Sangue, qualquer compartimento em que estiver deve ser drenado uma vez por dia, caso contrário o Sangue poderá escorrer e danificar outros objetos com os quais entrar em contato.</p>",
    },
    {
      name: "Coroa de Espinhos",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma coroa, colar ou pulseira feita de um material que lembra os espinhos de uma roseira banhados em sangue.</em> Uma vez por rodada, você pode usar uma reação para transformar qualquer dano mental que fosse sofrer em dano de Sangue, mas não consegue mais recuperar sanidade por descanso enquanto estiver vestindo o item. É preciso vestir o item por uma semana para ativar seus efeitos.</p>",
    },
    {
      name: "Faixas da Vidência",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma faixa de tecido, geralmente preto, com pequenos símbolos de Morte gravados em suas bordas.</em> O usuário é considerado cego para alvos além do alcance médio. No entanto, a faixa distorce a percepção temporal do usuário dentro do alcance, fazendo com que enxergue os eventos fora da linha do tempo. Contra efeitos em alcance médio, o usuário nunca fica desprevinido, recebe +10 em testes de resistência e recebe +10 na Defesa quando esquiva. Além disso, uma vez por cena de investigação, pode gastar 2 PE para ter um vislumbre do passado que auxilia a ação de procurar pistas, fornecendo +5 para o teste.</p>",
    },
    {
      name: "Frasco de Vitalidade",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este pequeno recipiente de vidro possui uma tampa de metal gravada com um selo de Sangue.</em> Você pode gastar 1 minuto e sofrer até 20 pontos de dano para encher o <em>frasco</em> com seu próprio sangue. Enquanto estiver no recipiente, seu sangue se mantém fresco. Você pode gastar uma ação padrão para beber o conteúdo do frasco e recuperar a mesma quantidade de PV que armazenou nele, mas deve passar em um teste de Fortitude (DT 20) para não ficar enjoado por uma rodada.</p>",
    },
    {
      name: "Pérola de Sangue",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma esfera de aproximadamente 2cm de diâmetro, lisa e reluzente como uma pérola, mas de cor vermelho-vivo.</em> Você pode gastar uma ação de movimento para forçar a <em>pérola de sangue</em> contra a sua pele e absorvê-la, recebendo uma injeção de adrenalina que fornece +5 em testes de Agilidade, Força e Vigor e testes baseados nesses atributos até o final da cena. Ao final da cena, você precisa fazer um teste de Fortitude (DT 20). Se falhar, fica fatigado até o final do dia. Se falhar por 5 ou mais, sofre uma parada cardíaca e fica morrendo. Se morrer dessa forma, você se torna uma criatura de sangue de VD similar ao seu NEX, à escolha do mestre.</p>",
    },
    {
      name: "Punhos Enraivecidos",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de soqueiras feitas de um metal vermelho vivo e gravado com vários símbolos de Sangue.</em> Seus ataques desarmados passam a causar 1d8 pontos de dano de Sangue. Sempre que acerta um ataque desarmado, pode fazer outro ataque desarmado contra o mesmo alvo, pagando 2 PE por cada ataque já realizado no turno. Ou seja, pode fazer o primeiro ataque extra gastando 2 PE, um segundo ataque extra gastando mais 4 PE e assim por diante, até errar um ataque ou não ter mais pontos de esforço.</p>",
    },
    {
      name: "Seringa de Transfiguração",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Esta seringa é feita de um material estranho e de aparência orgânica, cheio de veias pulsantes.</em> Você pode gastar uma ação padrão para sugar o sangue de um alvo adjacente e encher a seringa (se o alvo não for voluntário, você precisa acertá-lo com um ataque corpo a corpo). Se houver sangue na seringa, você pode gastar uma ação padrão para injetá-lo em qualquer outra pessoa adjacente, que terá sua aparência transfigurada para a do dono do sangue, como se estivesse sob efeito do ritual <em>Distorcer Aparência</em>, com duração aumentada para um dia. Quando o efeito acabar, o alvo deve rolar 1d6. Em um resultado 1, o processo de voltar à sua aparência é especialmente traumático, danificando seus músculos e órgãos e fazendo com que ele perca 1 PV permanentemente.</p>",
    },
    {
      name: "Amarras Mortais",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de correntes de ferro negro que se enrolam nos antebraços do usuário como um bracelete.</em> Uma vez por rodada, você pode gastar uma ação padrão e 2 PE para usar a manobra agarrar contra um alvo Grande ou menor em alcance curto, recebendo +10 em seu teste oposto. Você também pode usar uma ação de movimento para puxar um alvo agarrado para perto, deixando-o adjacente.</p>",
    },
    {
      name: "Casaco de Lodo",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um sobretudo preto fosco que tem uma cor inexplicavelmente opaca, como se absorvesse a luz completamente.</em> Essa vestimenta é na verdade feita de Lodo ativo, protegendo o usuário contra ataques ao amortecer o impacto deles. O usuário recebe resistência a corte, impacto, Morte e perfuração 5, mas se torna vulnerável a dano balístico e de Energia.</p>",
    },
    {
      name: "Coletora",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este punhal possui a lâmina completamente negra e a empunhadura em espiral.</em> Você pode gastar uma ação completa para apunhalar uma pessoa que esteja morrendo. Ao fazer isso, você mata o alvo e a <em>Coletora</em> absorve os resquícios do tempo de vida dela, armazenando 1d8 PE. O punhal pode armazenar um total de 20 PE, que você pode usar como se fossem seus desde que esteja portando a adaga a pelo menos uma semana. Enquanto portar a adaga, você é acometido por pesadelos sobre o sofrimento final de suas vítimas e sempre tem condições de descanso ruins, independentemente de onde ou como descansar.</p>",
    },
    {
      name: "Crânio Espiral",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um crânio envelhecido, apodrecido e distorcido em um formato espiral. Lodo escorre de seus olhos vazios, como lágrimas negras.</em> Uma vez por rodada, se estiver empunhando o <em>crânio</em>, você pode gastar uma ação livre para ativá-lo. Quando faz isso, você recebe uma ação padrão adicional na rodada. Sempre que usa o <em>crânio</em>, você deve fazer um teste de Vontade (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, você recebe os benefícios do item, mas envelhece 1d4 anos e não pode mais usá-lo nesse dia.</p>",
    },
    {
      name: "Frasco de Lodo",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um pequeno frasco contendo lodo de Morte.</em> Aplicar o conteúdo do frasco em um ferimento é uma ação padrão. Se aplicado em um ferimento recente (sofrido até uma rodada atrás) o lodo recupera 6d8+20 pontos de vida. Caso a ferida seja anterior à rodada passada, role um dado: em um resultado par, o lodo recupera 3d8+10 PV; em um resultado ímpar, a ferida infecciona, causando 3d8+10 pontos de dano de Morte. O frasco possui lodo para uma única ativação.</p>",
    },
    {
      name: "Vislumbre do Fim",
      element: "Morte",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de óculos escuros repleto de símbolos e espirais em sua armação metálica.</em>  Você pode gastar uma ação de movimento para se concentrar em um ser que esteja vendo e obter informações sobre a morte dele. Em pessoas comuns, essa informação se traduz em um contador de tempo, que pode se alterar conforme as ações de um marcado modificam seu futuro. Em Marcados ou criaturas, essas informações se traduzem na informação de qual é o pior valor de resistência do alvo (entre Fortitude, Reflexos ou Vontade) e de quaisquer vulnerabilidades que o alvo possua.</p>",
    },
    {
      name: "Anéis do Elo Mental",
      element: "Conhecimento",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de anéis dourados, cada um contendo um dos símbolos do ritual Ligação Telepática.</em>  Os anéis devem ser usados por duas pessoas por 24h para serem ativados. Após esse período, os dois são conectados por um ritual de <em>Invadir Mente</em> (ligação telepática) que dura enquanto estiverem usando os anéis. Enquanto a ligação estiver ativa, as duas pessoas fazem testes de Vontade usando a melhor quantidade de dados e bônus entre as duas. Porém, qualquer dano mental sofrido por uma delas será sofrido pela outra (ou seja, se numa rodada ambas sofrerem 10 pontos de dano mental, cada uma irá perder 20 pontos de sanidade) e qualquer condição mental ou de medo que afetar uma delas automaticamente afetará a outra.</p>",
    },
    {
      name: "Lanterna Reveladora",
      element: "Conhecimento",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma lanterna dourada decorada com sigilos do Outro Lado.</em> Ativar a lanterna gasta uma ação padrão e 1 PE. Ela fica ligada por uma cena e emite luz com as propriedades do ritual <em>Terceiro Olho</em>. A luz da <em>lanterna</em> incomoda criaturas de Sangue. Se elas foram iluminadas pela luz dela, irão atacá-lo em detrimento de quaisquer outros alvos na mesma categoria de alcance.</p>",
    },
    {
      name: "Máscara das Pessoas nas Sombras",
      element: "Conhecimento",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p>Principal ferramenta e marca registrada da Seita das Máscaras, esse item quando usado por alguém que não pertence à Seita ainda carrega grande poder. O usuário recebe resistência a Conhecimento 10 e pode gastar uma ação de movimento e 2 PE para “entrar” em uma sombra adjacente e se transportar instantaneamente para outra sombra que possa ver em alcance médio. Vestir a <em>Máscara</em> é como assinar um acordo e pode ter consequências severas se seu portador despertar o interesse da mente única das Máscaras...</p>",
    },
    {
      name: "Munição Jurada",
      element: "Conhecimento",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma bala de arma de fogo com um sigilo gravado.</em> O usuário pode fazer um ritual de uma hora para vincular essa munição a um ser que conheça. Se usada contra esse ser, a bala fornece +10 no teste de ataque, dobra a margem de ameaça da arma e causa +6d12 pontos de dano de Conhecimento. Possuir uma <em>munição juramentada</em> deixa o usuário obcecado em abater seu alvo, impondo –2 em Defesa e em testes de ataque contra quaisquer outros alvos.</p>",
    },
    {
      name: "Peitoral da Segunda Chance",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um dispositivo que pode ser vestido como um pequeno colete que pode ser prendido ao redor do peito, contendo uma peça central em cima do coração formada por um amontoado de partes eletrônicas seguradas por fios metálicos entrelaçados, passando por baixo dos braços e levando até um fecho na parte das costas.</em> Se você for reduzido a 0 pontos de vida, o colete automaticamente gastará 5 PE seus para reanimá-lo com 4d10 PV através de um surto de Energia por todo o seu corpo. A reanimação falha se você não tiver PE suficiente. Cada vez que o item é ativado, existe uma chance (1 em 1d10) da descarga energética ser forte demais e matá-lo instantaneamente, transformando seu corpo e equipamento em plasma de Energia pura (exceto pelo colete).</p>",
    },
    {
      name: "Pergaminho da Pertinácia",
      element: "Conhecimento",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um pergaminho amarelado e antigo. Mesmo enrolado, é possível vislumbrar sigilos dourados brilhando na parte interior.</em> Você pode gastar uma ação padrão para encarar os sigilos do Outro Lado inscritos no pergaminho, recebendo 5 PE temporários até o fim da cena. Sempre que usa este item, você deve fazer um teste de Ocultismo (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, o <em>pergaminho</em> se desfaz.</p>",
    },
    {
      name: "Arcabuz dos Moretti",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma arma muito antiga, reminiscente do século XV, mas que de alguma forma ainda se mantém funcionando perfeitamente, apesar das rachaduras que cercam toda a superfície do objeto e emitem uma suave luz rosada do interior de suas fissuras. Em seu cabo de madeira está gravado um selo contendo a letra M.</em> O <em>arcabuz</em> é uma arma simples, de fogo e de uma mão que fornece +2 em testes de ataque. Sempre que dispara esta arma, o usuário deve rolar 1d6 junto com o teste de ataque. O resultado do d6 define qual o dano da arma nesse disparo: 1) 2d4, 2) 2d6, 3) 2d8, 4) 2d10, 5) 2d12, 6) 2d20. A arma tem alcance curto, crítico x3 e não precisa de munição.</p>",
    },
    {
      name: "Bateria Reversa",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma pequena bateria elétrica repleta de sigilos paranormais.</em> Você pode gastar uma ação padrão e 2 PE para fazer a bateria absorver a carga de qualquer dispositivo eletrônico em alcance curto — celular, notebook ou mesmo um automóvel —, fazendo-o ficar automaticamente descarregado. Se a bateria estiver cheia, você pode gastar uma ação padrão para transferir a carga dela para um dispositivo eletrônico descarregado em alcance curto, que é instantaneamente reenergizado. Sempre que usa a <em>bateria</em>, você deve fazer um teste de Ocultismo (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, ela explode, causando 12d6 pontos de dano de Energia em todos os seres a até 3 metros.</p>",
    },
    {
      name: "Relógio de Arnaldo",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um relógio de ouro, meio manchado e com um aspecto levemente queimado no exterior. Ao abrir, é possível enxergar a foto de um homem de barba e óculos ao lado de uma criança simpática, também segurando um relógio de ouro.</em> Uma vez por rodada, você pode gastar 1 PE para rolar novamente qualquer dado com o resultado 1. O custo para usar o <em>relógio</em> aumenta em +1 para cada vez que for ativado no mesmo dia.</p>",
    },
    {
      name: "Talismã da Sorte",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma figa, moeda, pé de coelho ou qualquer outro badulaque modificado por um ritual.</em> Sempre que você estiver vestindo o talismã e sofrer dano, pode gastar uma reação e 3 PE para rolar 1d4. Em um resultado 2 ou 3, você evita completamente o dano. Em um resultado 4, você evita o dano, mas o talismã queima e vira cinzas. Por fim, em um resultado 1, a sorte se reverte em azar: em vez de evitar o dano, você sofre o dobro do dano que sofreria e o talismã queima e vira cinzas.</p>",
    },
    {
      name: "Teclado de Conexão Neural",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um teclado USB coberto de glifos de Energia.</em> Sempre que você plugar o <em>teclado</em> a um computador (uma ação de movimento), o item irá gerar ondas eletromagnéticas que enviam os sinais do sistema diretamente para as sinapses de seu cérebro, efetivamente conectando a sua mente com a máquina. Você pode usar o computador sem nenhum impedimento tecnológico ou de idioma, recebe +10 em testes para hackear e gasta metade do tempo normal para localizar arquivos. Porém, devido ao estresse que seu cérebro sofre por se conectar diretamente a um sistema digital, você sofre 1d6 pontos de dano mental por rodada que usar o <em>teclado</em>.</p>",
    },
    {
      name: "Tela do Pesadelo",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este dispositivo com tela (celular, tablet, TV...) contém diversos sigilos minúsculos em suas bordas.</em> Você pode gastar uma ação padrão e 2 PE para ativar a <em>tela</em>. A próxima pessoa que tocá-la verá uma imagem horrível saindo da tela e avançando contra ela. A imagem é apenas uma ilusão, mas os traumas que ela causa são reais! A pessoa deve fazer um teste de Vontade (DT determinada pelo usuário da tela +5). Se falhar, fica atordoada, sofre 4d6 pontos de dano mental e precisa repetir o teste na próxima rodada. O efeito continua até a pessoa passar no teste ou enlouquecer (ou outra pessoa destruir a <em>tela</em>). Uma vez que gere esse efeito, a <em>tela</em> fica inerte até você ativá-la novamente.</p>",
    },
    {
      name: "Veículo Energizado",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p>O motor deste veículo foi modificado paranormalmente para não precisar de combustível. Além disso, um motorista pode gastar uma reação e fazer um teste de Pilotagem (DT 25) para fazer o carro e seus ocupantes assumirem uma forma de energia pura por um instante, suficiente para evitar colidir com um objeto, atravessando-o como se fossem incorpóreos.</p>",
    },
    {
      name: "Jaqueta de Veríssimo",
      element: "Medo",
      itemType: "cursedItem",
      category: "IV",
      slots: 1,
      description:
        "<p><em>Uma jaqueta de estilo aviador feita de couro marrom com a gola forrada de pele branca.</em> Esta vestimenta de aparência comum já foi usada por vários agentes importantes e experientes da Ordem, e presenciou inúmeras batalhas e sacrifícios. Ao longo de sua história, a <em>jaqueta</em> foi passada de um agente para o outro como presente ou herança diversas vezes. Você recebe resistência a dano paranormal 15. Além disso, sempre que um aliado adjacente for sofrer dano de qualquer tipo, você pode gastar uma reação e 2 PE para se tornar o alvo do dano no lugar. Este é um item único (apenas um agente pode escolhê-la) de categoria IV.</p>",
    },
    {
      name: "Dedo Decepado",
      element: "Varia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este item grotesco é um dedo decepado e seco de alguém com alto nível de exposição paranormal.</em> Você recebe um poder paranormal que o dono do dedo possuía. O elemento do poder define o elemento da maldição. Sempre que usar as ações dormir ou relaxar em um interlúdio, role 1d4. Em um resultado 1, você é assombrado por memórias do dono do dedo e não recupera nenhum PV, PE ou sanidade. Além disso, ser visto usando esse item causa uma penalidade de –10 em testes de Diplomacia e pode causar reações severas de NPCs, a critério do mestre. Você precisa vestir o item por uma semana para que seu efeito comece a funcionar.</p>",
    },
    {
      name: "Selos Paranormais",
      element: "Varia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um conjunto de sigilos gravados em um objeto pequeno, como um pergaminho, moeda, pedra preciosa, osso humano...</em> Cada selo contém um ritual. Para ativar um selo, você deve empunhá-lo e ler os sigilos em voz alta. Isso exige uma ação padrão ou a ação necessária para conjurar o ritual, o que for maior. Você também deve conhecer o ritual inscrito nele ou passar em um teste de Ocultismo (DT 20 + custo em PE do ritual).</p><p>Quando o selo é ativado, o ritual é conjurado e o selo se desfaz em cinzas. Você sofre os efeitos das regras “O Custo do Paranormal” e “Invocando o Medo”, caso aplicáveis, e toma quaisquer decisões exigidas pelo ritual, como se o tivesse conjurado você mesmo. Caso conheça o ritual, você pode aplicar quaisquer habilidades que possua que se aplicariam aos seus próprios rituais, e pode usar versões avançadas dele, pagando o custo adicional em pontos de esforço (e apenas o custo adicional). Você não precisa de componentes ritualísticos para ativar um selo, o que o torna um objeto bastante útil para ocultistas em certas situações.</p><p>A categoria de um selo é igual ao círculo do ritual contido nele: categoria I para rituais de 1º círculo, categoria II para rituais de 2º círculo, e assim por diante.</p>",
    },
  ],
  Al = { class: "class-abilities-container" },
  ql = { key: 0, class: "search-container" },
  yl = { key: 1, class: "search-container" },
  $l = { key: 2, class: "search-container" },
  El = { key: 3, class: "class-abilities-content" },
  Il = { key: 0 },
  kl = { key: 1 },
  Sl = { key: 2 },
  _l = { key: 3 },
  Pl = D({
    __name: "InventoryModalContent",
    emits: ["handleAddItem", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        g = [
          { label: "Armas", value: 0 },
          { label: "Munições", value: 1 },
          { label: "Proteções", value: 2 },
          { label: "Geral", value: 3 },
          { label: "Itens Amaldiçoados", value: 4 },
        ],
        l = E(0),
        p = E(""),
        c = E(""),
        m = E(""),
        i = (o) => v("handleAddItem", o),
        r = Q(() =>
          l.value === 0
            ? hl
                .filter((o) => X(o.name, p.value))
                .sort((o, u) => o.name.localeCompare(u.name))
            : l.value === 1
            ? G.sort((o, u) => o.name.localeCompare(u.name))
            : l.value === 2
            ? fl.sort((o, u) => o.name.localeCompare(u.name))
            : l.value === 3
            ? bl
                .filter((o) => X(o.name, c.value))
                .sort((o, u) => o.name.localeCompare(u.name))
            : l.value === 4
            ? Cl.filter((o) => X(o.name, m.value)).sort((o, u) =>
                o.name.localeCompare(u.name)
              )
            : []
        );
      return (o, u) => (
        t(),
        s("div", Al, [
          A(
            ve,
            {
              "current-tab": l.value,
              "tab-options": g,
              onHandleNavigation: u[0] || (u[0] = (C) => (l.value = C)),
            },
            null,
            8,
            ["current-tab"]
          ),
          l.value === 0
            ? (t(),
              s("div", ql, [
                A(
                  Ie,
                  {
                    value: p.value,
                    dark: "",
                    onUpdate: u[1] || (u[1] = (C) => (p.value = C)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          l.value === 3
            ? (t(),
              s("div", yl, [
                A(
                  Ie,
                  {
                    value: c.value,
                    dark: "",
                    onUpdate: u[2] || (u[2] = (C) => (c.value = C)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          l.value === 4
            ? (t(),
              s("div", $l, [
                A(
                  Ie,
                  {
                    value: m.value,
                    dark: "",
                    onUpdate: u[3] || (u[3] = (C) => (m.value = C)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          r.value.length > 0
            ? (t(),
              s("div", El, [
                (t(!0),
                s(
                  x,
                  null,
                  W(
                    r.value,
                    (C) => (
                      t(),
                      s("div", { key: C.name, class: "class-abilitie-card" }, [
                        C.itemType === "weapon"
                          ? (t(),
                            s("div", Il, [
                              A(Po, { weapon: C, onHandleAdd: i }, null, 8, [
                                "weapon",
                              ]),
                            ]))
                          : q("", !0),
                        C.itemType === "protection"
                          ? (t(),
                            s("div", kl, [
                              A(
                                Mo,
                                { protection: C, onHandleAdd: i },
                                null,
                                8,
                                ["protection"]
                              ),
                            ]))
                          : q("", !0),
                        C.itemType === "misc" || C.itemType === "ammunition"
                          ? (t(),
                            s("div", Sl, [
                              A(Ro, { misc: C, onHandleAdd: i }, null, 8, [
                                "misc",
                              ]),
                            ]))
                          : q("", !0),
                        C.itemType === "cursedItem"
                          ? (t(),
                            s("div", _l, [
                              A(
                                Do,
                                { "cursed-item": C, onHandleAdd: i },
                                null,
                                8,
                                ["cursed-item"]
                              ),
                            ]))
                          : q("", !0),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : q("", !0),
        ])
      );
    },
  }),
  Ml = T(Pl, [["__scopeId", "data-v-66867a8f"]]),
  Xo = (a) => (z("data-v-8e793024"), (a = a()), H(), a),
  Rl = { class: "modal-content modal-width" },
  Dl = { class: "modal-header" },
  Tl = Xo(() => e("h2", null, "Adicionar Itens", -1)),
  Vl = Xo(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  wl = [Vl],
  Ol = { class: "modal-body modal-height" },
  zl = D({
    __name: "InventoryModal",
    props: { character: {} },
    emits: ["handleAddItem", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        g = [Ml, As],
        l = [
          { label: "Itens", value: 0 },
          { label: "Meus Itens", value: 1 },
        ],
        p = E(0),
        c = (i) => (p.value = i),
        m = (i) => v("handleAddItem", i);
      return (i, r) => (
        t(),
        s("div", Rl, [
          e("div", Dl, [
            Tl,
            e(
              "button",
              { onClick: r[0] || (r[0] = (o) => i.$emit("handleCloseModal")) },
              wl
            ),
          ]),
          e("div", Ol, [
            A(
              ha,
              { value: p.value, options: l, onHandleNavigation: c },
              null,
              8,
              ["value"]
            ),
            (t(),
            L(
              Ne,
              null,
              [
                (t(),
                L(
                  Me(g[p.value]),
                  { character: i.character, onHandleAddItem: m },
                  null,
                  40,
                  ["character"]
                )),
              ],
              1024
            )),
          ]),
        ])
      );
    },
  }),
  Hl = T(zl, [["__scopeId", "data-v-8e793024"]]),
  Se = [
    {
      name: "Alterar Destino",
      circle: "4",
      element: "Energia",
      execution: "reação",
      range: "pessoal",
      target: "você",
      duration: "instantânea",
      description:
        "<p>Você vislumbra seu futuro próximo, analisando milhões de possibilidades e escolhendo a melhor. Você recebe +15 em um teste de resistência ou na Defesa contra um ataque.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alcance para “curto” e o alvo para “um aliado à sua escolha”.</p>",
    },
    {
      name: "Alterar Memória",
      circle: "3",
      element: "Conhecimento",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa",
      duration: "instantânea",
      save: "Vontade anula",
      normalDice: "1d4",
      description:
        "<p>Você invade a mente do alvo e altera ou apaga suas memórias de até uma hora atrás. Se escolher alterar as memórias, você pode mudar detalhes de eventos recentes, como a identidade de alguém encontrado ou o endereço de um lugar visitado, mas não reescrever completamente esses eventos. O alvo recupera suas memórias após 1d4 dias.</p><p><strong>Verdadeiro (+4 PE):</strong> você pode alterar ou apagar memórias de até 24 horas atrás. Requer 4º círculo.</p>",
    },
    {
      name: "Amaldiçoar Arma",
      circle: "1",
      element: "Varia",
      execution: "padrão",
      range: "toque",
      target: "1 arma corpo a corpo ou pacote de munição",
      duration: "cena",
      description:
        "<p>Quando aprender este ritual, escolha um elemento entre Conhecimento, Energia, Morte e Sangue. Este ritual passa a ser do elemento escolhido. Você imbui a arma ou munições com o elemento, fazendo com que causem +1d6 de dano do tipo do elemento.</p><p><strong>Discente (+2 PE):</strong> muda o bônus de dano para +2d6. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o bônus de dano para +4d6. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Amaldiçoar Tecnologia",
      circle: "1",
      element: "Energy",
      execution: "padrão",
      range: "toque",
      target: "1 acessório ou arma de fogo",
      duration: "cena",
      description:
        "<p>Você imbui o alvo com Energia, fazendo-o funcionar acima de sua capacidade. O item recebe uma modificação a sua escolha.</p><p><strong>Discente (+2 PE):</strong> muda para duas modificações. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda para três modificações. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Âncora Temporal",
      circle: "3",
      element: "Death",
      execution: "padrão",
      range: "Short",
      target: "1 ser",
      duration: "cena",
      save: "Vontade parcial",
      description:
        "<p>Uma aura espiralada surge sobre o alvo. No início de cada turno dele, ele deve fazer um teste de Vontade. Se falhar, não poderá se deslocar naquele turno (ele ainda pode agir, só não pode se deslocar). Se o alvo passar nesse teste dois turnos seguidos o efeito termina.</p><p><strong>Verdadeiro (+4 PE):</strong> muda o alvo para “seres à sua escolha”. Requer 4º círculo.</p>",
    },
    {
      name: "Aprimorar Físico",
      circle: "2",
      element: "Blood",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "cena",
      description:
        "<p>O alvo tem seus músculos tonificados e seus ligamentos reforçados, recebendo +1 em Agilidade ou Força, à escolha dele.</p><p><strong>Discente (+3 PE):</strong> muda o bônus para +2. Requer 3º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o bônus para +3. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Aprimorar Mente",
      circle: "2",
      element: "Knowledge",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "cena",
      description:
        "<p>O alvo tem sua mente energizada por fagulhos do Conhecimento. Ele recebe +1 em Intelecto ou Presença, à escolha dele (esse aumento não fornece PE ou perícias treinadas).</p><p><strong>Discente (+3 PE):</strong> muda o bônus para +2. Requer 3º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o bônus para +3. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Arma Atroz",
      circle: "1",
      element: "Blood",
      execution: "padrão",
      range: "toque",
      target: "1 arma corpo a corpo",
      duration: "sustentada",
      description:
        "<p>A arma é recoberta por veias carmesim e passa a exalar uma aura de violência. Ela fornece +2 em testes de ataque e +1 na margem de ameaça.</p><p><strong>Discente (+2 PE):</strong> muda o bônus para +5 em testes de ataque. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o bônus para +5 em testes de ataque e +2 na margem de ameaça e no multiplicador de crítico. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Armadura de Sangue",
      circle: "1",
      element: "Blood",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      description:
        "<p>Seu sangue escorre para fora do corpo, cobrindo-o sob a forma de uma carapaça que fornece +5 em Defesa. Esse bônus é cumulativo com outros rituais, mas não com bônus fornecido por equipamento.</p><p><strong>Discente (+5 PE):</strong> muda o efeito para “fornece +10 na Defesa e resistência a balístico, corte, impacto e perfuração 5”. Requer 3º círculo.</p><p><strong>Verdadeiro (+9 PE):</strong> muda o efeito para “fornece +15 na Defesa e resistência a balístico, corte, impacto e perfuração 10”. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Barganha Insana",
      circle: "3",
      element: "Death",
      execution: "completa",
      range: "pessoal",
      target: "você",
      duration: "instantânea",
      description:
        "<p>Você contata a entidade da Morte e entrega a ela parte de sua própria percepção temporal da Realidade, em troca da restauração plena de sua saúde. Você recupera todos os pontos de vida e pontos de energia, e elimina quaisquer condições negativas que o estejam afetando. Porém, no final da cena, perde 1d4 pontos de Sanidade permanentemente. Além disso, cada vez que conjura este ritual, sua pele adquire uma tonalidade mais acizentada e seu sangue fica mais escuro. Alguns ocultistas temem que múltiplos usos tenham como efeito colateral transforma-lo em um luzídio, embora ninguém saiba exatamente quantas conjurações seriam necessárias para completar essa transformação.</p>",
    },
    {
      name: "Canalizar o Medo",
      circle: "4",
      element: "Fear",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa",
      duration: "permanente até ser descarregada",
      description:
        "<p>Você transfere parte de seu poder para outra pessoa. Escolha um ritual de até 3º círculo que você conheça; o alvo pode conjurar este ritual em sua forma básica uma vez, sem pagar seu custo em PE (mas pode usar formas avançadas gastando seus próprios PE para isso). Até o ritual transferido ser conjurado, seus PE máximos diminuem em um valor igual ao custo dele.</p>",
    },
    {
      name: "Capturar o Coração",
      circle: "4",
      element: "Blood",
      execution: "padrão",
      range: "short",
      target: "1 pessoa",
      duration: "cena",
      save: "Vontade parcial",
      description:
        "<p>Você desperta uma paixão doentia e obcecada por você no alvo, que passa a querar agradá-lo a todo custo, mesmo que para isso precise ficar contra seus amigos. No início de cada turno do alvo ele deve fazer um teste de Vontade. Se falhar, age de forma a ajudá-lo na melhor de suas capacidades naquele turno. Se o alvo passar nesse teste dois turnos seguidos o efeito termina.</p>",
    },
    {
      name: "Chamas do Caos",
      circle: "2",
      element: "Energy",
      execution: "padrão",
      range: "Short",
      target: "veja texto",
      duration: "cena",
      normalDice: "1d6",
      discenteDice: "4d6",
      verdadeiroDice: "8d6",
      description:
        "<p>Você manipula o calor e o fogo. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Chamejar:</strong> o alvo é uma arma corpo a corpo. Ela causa +1d6 pontos de dano de fogo.</p><p><strong>Esquentar:</strong> o alvo é um objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer ser que o esteja empunhando ou vestindo. A critério do mestre, o objeto ou o ser pode pegar fogo. Um ser pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito do ritual.</p><p><strong>Extinguir:</strong> o alvo é uma chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, seres têm camuflagem.</p><p><strong>Modelar:</strong> o alvo é uma chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por um ser, ela causa 3d6 pontos de dano de fogo nele. Um ser só pode sofrer dano dessa maneira uma vez por rodada.</p><p><strong>Discente (+3 PE):</strong> muda a duração para sustentada e adiciona “Resistência: Reflexos reduz à metade”. Em vez do normal, uma vez por rodada você pode gastar uma ação de movimento para projetar uma labareda, num alvo em alcance curto. O alvo sofre 4d6 pontos de dano de Energia (Reflexos reduz à metade).</p><p><strong>Verdadeiro (+ 7 PE):</strong> como discente, mas muda o dano para 8d6. Requer 3º círculo.</p>",
    },
    {
      name: "Cicatrização",
      circle: "1",
      element: "Death",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      normalDice: "3d8+3",
      discenteDice: "5d8+5",
      verdadeiroDice: "7d8+7",
      description:
        "<p>Você acelera o tempo ao redor das feridas do alvo, que cicatrizam instantaneamente. O alvo recupera 3d8+3 PV, mas envelhece 1 ano automaticamente.</p><p><strong>Discente (+2 PE):</strong> aumenta a cura para 5d8+5 PV. Requer 2º círculo.</p><p><strong>Verdadeiro (+9 PE):</strong> muda o alcance para “curto”, o alvo para “seres escolhidos” e aumenta a cura para 7d8+7 PV. Requer 4º círculo e afinidade com Morte.</p>",
    },
    {
      name: "Cinerária",
      circle: "1",
      element: "Fear",
      execution: "padrão",
      range: "Short",
      area: "nuvem de 6m de raio",
      duration: "cena",
      description:
        "<p>Você manifesta uma névoa carregada de essência paranormal. Rituais conjurados dentro da névoa têm sua DT aumentada em +5.</p><p><strong>Discente (+2 PE):</strong> além do normal, rituais conjurados dentro da névoa custam –2 PE.</p><p><strong>Verdadeiro (+5 PE):</strong> além do normal, rituais conjurados dentro da névoa causam dano maximizado.</p>",
    },
    {
      name: "Coincidência Forçada",
      circle: "1",
      element: "Energy",
      execution: "padrão",
      range: "Short",
      target: "1 ser",
      duration: "cena",
      description:
        "<p>Você manipula os caminhos do caos para que o alvo tenha mais sorte. O alvo recebe +2 em testes de perícias.</p><p><strong>Discente (+2 PE):</strong> muda o alvo para aliados à sua escolha. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alvo para aliados à sua escolha e o bônus para +5. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Compreensão Paranormal",
      circle: "1",
      element: "Knowledge",
      execution: "padrão",
      range: "toque",
      target: "1 ser ou objeto",
      duration: "cena",
      save: "Vontade anula",
      description:
        "<p>O ritual confere a você compreensão sobrenatural da linguagem. Se tocar um objeto contendo informação (ou livro, um dispositivo com uma gravação...), você entende as palavras mesmo que não conheça seu idioma, contanto que se trate de um idioma humano (não funciona com símbolos ou sigilos paranormais). Se tocar uma pessoa, pode se comunicar com ela como se falassem um idioma em comum. Se tocar um ser não inteligente, como um animal, pode perceber seus sentimentos básicos, como medo ou felicidade. Um alvo involuntário tem direito a um teste de Vontade.</p><p><strong>Discente (+2 PE):</strong> muda o alcance para “curto” e o alvo para “alvos escolhidos”. Você pode entender todos os alvos afetados. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alcance para “pessoal” e o alvo para “você”. Em vez do normal, você pode falar, entender e escrever qualquer idioma humano. Requer 3º círculo.</p>",
    },
    {
      name: "Conhecendo o Medo",
      circle: "4",
      element: "Fear",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa",
      duration: "cena",
      save: "Vontade parcial",
      normalDice: "10d6",
      description:
        "<p>Você manifesta medo absoluto na mente do alvo. Se ele falhar no teste de resistência, a Sanidade dele é reduzida a 0 e ele fica enlouquecendo. Se ele passar, sofre 10d6 pontos de dano mental e fica apavorado por 1 rodada. Uma pessoa que fique insana pelo efeito deste ritual se transforma em uma criatura Paranormal à critério do mestre.</p>",
    },
    {
      name: "Contenção Fantasmagórica",
      circle: "2",
      element: "Energy",
      execution: "padrão",
      range: "Medium",
      target: "1 ser",
      duration: "cena",
      save: "Reflexos anula",
      description:
        "<p>Três laços de Energia surgem do chão e se enroscam no alvo, deixando-o agarrado. O alvo pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (DT do ritual). Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a DT. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a Energia. Se todos os laços forem destruídos, o ritual é dissipado. Por serem feitos de Energia, os laços afetam criaturas incorpóreas.</p><p><strong>Discente (+3 PE):</strong> aumenta o número de laços para 6, e você pode escolher o alvo de cada laço, com um mínimo de dois laços por alvo. Requer 3º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> como discente, e cada laço destruído libera uma onda de choque que causa 2d6+2 pontos de dano de Energia no alvo agarrado. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Consumir Manancial",
      circle: "1",
      element: "Death",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "instantânea",
      normalDice: "3d6",
      discenteDice: "6d6",
      verdadeiroDice: "3d6",
      description:
        "<p>Você suga uma pequena porção do tempo de vida de plantas, insetos e até mesmo do solo ao redor, gerando lodo e recebendo 3d6 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.</p><p><strong>Discente (+2 PE):</strong> muda os PV temporários recebidos para 6d6. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alvo para “área: esfera com 6m de raio centrada em você” e a resistência para “Fortitude reduz à metade”. Em vez do normal, você suga energia de todos os seres vivos na área, causando 3d6 pontos de dano de Morte em cada um e recebendo PV temporários iguais ao dano total causado até o final da cena. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Contato Paranormal",
      circle: "3",
      element: "Knowledge",
      execution: "completa",
      range: "pessoal",
      target: "você",
      duration: "1 dia",
      description:
        "<p>Você barganha com a entidade de Conhecimento para que o auxilie durante o dia, em troca de se alimentar de sua Sanidade. Quando o ritual é conjurado, você recebe seis d6. Sempre que fizer um teste de perícia, você pode gastar um desses d6, rolá-lo e adicionar o resultado no teste. No entanto, essa ajuda tem um preço: sempre que rolar um 6 no dado, a entidade toma 2 pontos de Sanidade de você. Se você ficar sem dados ou chegar a Sanidade 0, o ritual acaba.</p><p><strong>Discente (+4 PE):</strong> muda os dados de auxílio para d8. Sempre que rolar um 8 num desses dados, a entidade toma 3 pontos de sua Sanidade. Requer 4º círculo.</p><p><strong>Verdadeiro (+9 PE):</strong> muda os dados de auxílio para d12. Sempre que rolar um 12 num desses dados, a entidade toma 5 pontos de sua Sanidade. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Controle Mental",
      circle: "4",
      element: "Knowledge",
      execution: "padrão",
      range: "Medium",
      target: "1 pessoa ou animal",
      duration: "sustentada",
      save: "Vontade parcial",
      description:
        "<p>Você domina a mente do alvo, que obedece todos os seus comandos, exceto ordens suicidas. Um alvo tem direito a um teste de Vontade no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam pasmos por 1 rodada.</p><p><strong>Discente (+5 PE):</strong> muda o alvo para até cinco pessoas ou animais.</p><p><strong>Verdadeiro (+10 PE):</strong> muda o alvo para até dez pessoas ou animais. Requer afinidade com Conhecimento.</p>",
    },
    {
      name: "Convocação Instantânea",
      circle: "3",
      element: "Energy",
      execution: "padrão",
      range: "ilimitado",
      target: "1 objeto de até 2 espaços",
      duration: "instantânea",
      save: "Vontade anula",
      description:
        "<p>Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com o símbolo do ritual e pode ocupar no máximo 2 espaços. Se o objeto estiver sendo empunhado por outra pessoa, ela pode fazer um teste de Vontade para negar o efeito, mas você saberá onde o objeto está e quem o está carregando (ou sua aparência, caso não conheça a pessoa). Por até 1h depois da convocação, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes.</p><p><strong>Discente (+4 PE):</strong> muda o alvo para um objeto de até 10 espaços.</p><p><strong>Verdadeiro (+9 PE):</strong> muda o alvo para “1 recipiente Médio (como uma mala ou caixote), com itens que somem até 10 espaços” e a duração para “permanente”. Em vez do normal, você encanta o recipiente para mantê-lo escondido no Outro Lado. Você pode convocar o recipiente para um espaço livre adjacente, ou de volta para o esconderijo paranormal, como uma ação padrão. Para isso, você deve ter em mãos uma miniatura do objeto, que funciona como um utensílio de categoria II. Quando conjura esta versão do ritual, você perde 1 PE permanentemente.</p>",
    },
    {
      name: "Convocar o Algoz",
      circle: "4",
      element: "Death",
      execution: "padrão",
      range: "1,5m",
      target: "1 pessoa",
      duration: "sustentada",
      save: "Vontade parcial, Fortitude parcial",
      normalDice: "6d6",
      description:
        "<p>Usando os medos subconscientes do alvo, você manipula a espiral da Morte para criar uma imagem daquilo que ele mais teme. Apenas a própria vítima vê o algoz com nitidez; outros seres presentes (incluindo você) enxergam apenas um vulto sombrio. O algoz surge adjacente a você. No fim de cada turno seu, ele flutua 12m em direção à vítima. Se o algoz terminar o turno em alcance curto da vítima, ela deve fazer um teste de Vontade; se falhar, ficará abalada. Se o algoz terminar o turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se falhar, sofre um colapso e fica com 0 PV. Se passar, sofre 6d6 pontos de dano de Morte (este dano não pode reduzir o alvo a menos de 1 PV). O algoz persegue o alvo implacavelmente, mesmo além do alcance do ritual. Ele é incorpóreo e imune a dano e só desaparece se deixar o alvo morrendo ou se for dissipado.</p>",
    },
    {
      name: "Corpo Adaptado",
      circle: "1",
      element: "Blood",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa ou animal",
      duration: "cena",
      save: "Vontade parcial, Fortitude parcial",
      description:
        "<p>Este ritual modifica a biologia do alvo para permitir a sobrevivência em ambientes hostis. O alvo fica imune a calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.</p><p><strong>Discente (+2 PE):</strong> muda a duração para 1 dia.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alcance para “curto” e o alvo para “pessoas ou animais escolhidos”.</p>",
    },
    {
      name: "Decadência",
      circle: "1",
      element: "Death",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      save: "Fortitude reduz à metade",
      normalDice: "2d8+2",
      discenteDice: "3d8+3",
      verdadeiroDice: "8d8+8",
      description:
        "<p>Espirais de trevas envolvem sua mão e definham o alvo, que sofre 2d8+2 pontos de dano de Morte.</p><p><strong>Discente (+2 PE):</strong> muda a resistência para “nenhuma” e o dano para 3d8+3. Como parte da execução do ritual, você transfere as espirais para uma arma e faz um ataque corpo a corpo contra o alvo com esta arma. Se acertar, causa o dano da arma e do ritual, somados.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alcance para “pessoal” o alvo para “área: explosão com 6m de raio” e o dano para 8d8+8. As espirais afetam todos os seres na área. Requer 3º círculo.</p>",
    },
    {
      name: "Definhar",
      circle: "1",
      element: "Death",
      execution: "padrão",
      range: "Short",
      target: "1 ser",
      duration: "cena",
      save: "Fortitude parcial",
      description:
        "<p>Você dispara uma lufada de cinzas que drena as forças do alvo. A alvo fica fatigado. Se passar no teste de resistência, em vez disso fica vulnerável.</p><p><strong>Discente (+2 PE):</strong> em vez do normal, o alvo fica exausto. Se passar na resistência, fica fatigado. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> como discente, mas muda o alvo para “até 5 seres”. Requer 3º círculo e afinidade com Morte.</p>",
    },
    {
      name: "Deflagração de Energia",
      circle: "4",
      element: "Energy",
      execution: "completa",
      range: "pessoal",
      area: "explosão de 15m de raio",
      save: "Fortitude parcial",
      normalDice: "3d10",
      description:
        "<p>Você acumula uma quantidade imensa de Energia, então a libera em uma explosão intensa, como uma estrela em plena terra. Todos na área sofrem 3d10 x 10 pontos de dano de Energia e todos os itens tecnológicos (armas de fogo, acessórios e utensílios) param de funcionar (em termos de regras, estão quebrados). Você não é afetado pela explosão. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens voltam a funcionar após 1d4 rodadas.</p><p><strong>Verdadeiro (+5 PE):</strong> afeta apenas alvos a sua escolha.</p>",
    },
    {
      name: "Desacelerar Impacto",
      circle: "2",
      element: "Death",
      execution: "reação",
      range: "curto",
      target: "1 ser ou objetos somando até 10 espaços",
      duration: "até chegar ao solo ou cena, o que vier primeiro",
      description:
        "<p>O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano. Como conjurar este ritual é uma reação, você pode conjurá-lo rápido o bastante para salvar a si ou um aliado de quedas inesperadas. Se o alvo for um projétil — como um disparo de arma ou um objeto largado do alto de um prédio —, o ritual faz com que ele cause metade do dano normal, devido à lentidão.Este ritual só funciona em alvos em queda livre ou similar; não pode frear um golpe de faca ou o mergulho rasante de um atacante voador.</p><p><strong>Discente (+3 PE):</strong> aumenta o total de alvos para seres ou objetos somando até 100 espaços.</p>",
    },
    {
      name: "Descarnar",
      circle: "2",
      element: "Blood",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      save: "Fortitude parcial",
      normalDice: "6d8",
      discenteDice: "10d8",
      description:
        "<p>Este ritual cruel faz com que lacerações se manifestem na pele e órgãos do alvo, que sofre 6d8 pontos de dano (metade corte, metade Sangue) e fica com uma hemorragia severa. No início de cada turno dele, o alvo deve fazer um teste de Fortitude. Se falhar, sofre 2d8 pontos de dano de Sangue. Se passar nesse teste dois turnos seguidos, a hemorragia é estancada. Alvos que passem no teste de resistência inicial sofrem metade do dano e não ficam com hemorragia.</p><p><strong>Discente (+3 PE):</strong> muda o dano direto para 10d8 e o dano da hemorragia para 4d8. Requer 3º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o alvo para você e a duração para sustentada. Enquanto o ritual durar, seus ataques corpo a corpo causam 4d8 pontos de dano de Sangue adicional e deixam o alvo com hemorragia automaticamente (como no efeito básico do ritual). O alvo ainda tem direito a um teste de Fortitude no início de seus turnos. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Detecção de Ameaças",
      circle: "2",
      element: "Knowledge",
      execution: "padrão",
      range: "pessoal",
      area: "esfera de 18m de raio",
      duration: "cena",
      description:
        "<p>Você recebe uma percepção aguçada sobre perigos à sua volta. Quando um ser hostil ou armadilha entra na área do efeito, você tem uma sensação de perigo e pode gastar uma ação de movimento para fazer um teste de Percepção (DT 20). Se passar, sabe a direção e distância do perigo.</p><p><strong>Discente (+3 PE):</strong> além do normal, você não fica desprevenido contra perigos detectados e recebe +5 em testes de resistência contra armadilhas. Requer 3º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda a duração para “1 dia” e concede os mesmos benefícios de discente. Requer 4º círculo.</p>",
    },
    {
      name: "Dissonância Acústica",
      circle: "2",
      element: "Energy",
      execution: "padrão",
      range: "Medium",
      area: "esfera com 6m de raio",
      duration: "sustentada",
      description:
        "<p>Você manipula a vibração do ar, criando uma área de dissonância sonora. Enquanto estiverem na área, todos os seres ficam surdos. Essa dissonância também impede que seres dentro da área conjurem rituais.</p><p><strong>Discente (+1 PE):</strong> muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio. Se conjurar o ritual num objeto de um ser involuntário, ele tem direito a um teste de Vontade para anulá-la.</p><p><strong>Verdadeiro (+3 PE):</strong> muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas seres dentro da área podem falar, ouvir e conjurar rituais normalmente. Requer 3º círculo.</p>",
    },
    {
      name: "Dissipar Ritual",
      circle: "3",
      element: "Fear",
      execution: "padrão",
      range: "médio",
      area: "1 ser ou objeto, ou esfera com 3m de raio",
      duration: "instantânea",
      description:
        "<p>Você dissipa rituais ativos, como se a duração deles tivesse acabado. Efeitos de rituais instantâneos não podem ser dissipados (não se pode dissipar uma área de Paradoxo depois que já causou dano...). Faça um teste de Ocultismo; você anula quaisquer rituais ativos no alvo ou na área com DT igual ou menor que o resultado do teste. Você pode conjurar esse ritual em um item amaldiçoado para que se torne um item mundano (perdendo seus poderes) por um dia. Se o item estiver em posse de alguém, seu usuário pode fazer um teste de Vontade para negar o efeito.</p>",
    },
    {
      name: "Distorcer Aparência",
      circle: "1",
      element: "Blood",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      save: "Vontade desacredita",
      description:
        "<p>Você modifica sua aparência física para se transformar em outra pessoa. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz, impressão digital, córnea etc. Você recebe +10 em testes de Enganação para disfarce, mas não recebe habilidades da nova forma nem modifica suas demais estatísticas.</p><p><strong>Discente (+2 PE):</strong> muda o alcance para “curto” e o alvo para “1 ser”. Um alvo involuntária pode anular o efeito com um teste de Vontade.</p><p><strong>Verdadeiro (+5 PE):</strong> como em Discente, mas muda o alvo para “seres escolhidos”. Requer 3º círculo.</p>",
    },
    {
      name: "Distorção Temporal",
      circle: "4",
      element: "Death",
      execution: "padrão",
      range: "pessoal",
      target: "veja texto",
      duration: "veja texto",
      description:
        "<p>Este poderoso ritual distorce o fluxo de tempo em relação a você, criando um pequeno bolsão temporal que dura 3 rodadas. Durante este tempo, você pode agir livremente, mas não pode se deslocar do lugar nem interagir com seres e objetos. Da mesma forma, efeitos contínuos não o afetam, e quaisquer efeitos que você iniciar não afetarão a área ao seu redor. Efeitos de área e com duração maior que este efeito vão agir normalmente quando o bolsão temporal acabar.</p>",
    },
    {
      name: "Eco Espiral",
      circle: "2",
      element: "Death",
      execution: "padrão",
      range: "Short",
      target: "1 ser",
      duration: "2 rodadas",
      save: "Fortitude reduz à metade",
      description:
        "<p>Você manifesta em suas mãos uma pequena cópia do alvo feita de cinzas. No início do próximo turno após conjurar este ritual, você precisa gastar uma ação padrão para se concentrar nele; caso contrário, ele se dissipa sem efeito. No início do segundo turno, você precisa gastar uma ação padrão para descarregá-lo. Se fizer isso, a cópia explode e o alvo sofre dano de Morte igual a quantidade de dano que sofreu na rodada em que você se concentrou (Fortitude reduz à metade). Se não fizer, o ritual se dissipa sem efeito.</p><p><strong>Discente (+3 PE):</strong> muda o alvo para “até 5 seres”.</p><p><strong>Verdadeiro (+7 PE):</strong> muda a duração para “até 3 rodadas”, permitindo que você se concentre nas duas primeiras e descarregue na terceira. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Eletrocussão",
      circle: "1",
      element: "Energy",
      execution: "padrão",
      range: "curto",
      target: "1 ser ou objeto",
      duration: "instantânea",
      save: "Fortitude parcial",
      normalDice: "3d6",
      discenteDice: "6d6",
      verdadeiroDice: "8d6",
      description:
        "<p>Você manifesta e dispara uma corrente elétrica contra o alvo, que sofre 3d6 pontos de dano de eletricidade e fica vulnerável por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Se usado contra objetos eletrônicos, este ritual causa o dobro de dano e ignora resistência.</p><p><strong>Discente (+2 PE):</strong> muda o alvo para “área: linha de 30m”. Você dispara um poderoso raio que causa 6d6 pontos de dano de Energia em todos os seres e objetos livres na área. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda a área para “alvos escolhidos”. Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 8d6 pontos de dano de Energia em cada. Requer 3º círculo.</p>",
    },
    {
      name: "Embaralhar",
      circle: "1",
      element: "Energy",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      description:
        "<p>Você cria três cópias ilusórias que se parecem com hologramas extremamente realistas. As cópias ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem é o verdadeiro. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante sofre as penalidades normais por não enxergar).</p><p><strong>Discente (+2 PE):</strong> muda o número de cópias para 5 (e o bônus na Defesa para +10). Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o número de cópias para 8 (e o bônus na Defesa para +16). Além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. O ser que destruiu a cópia fica ofuscada por uma rodada. Requer 3º círculo.</p>",
    },
    {
      name: "Enfeitiçar",
      circle: "1",
      element: "Knowledge",
      execution: "padrão",
      range: "curto",
      target: "1 pessoa",
      duration: "cena",
      save: "Vontade anula",
      description:
        "<p>Este ritual torna o alvo prestativo. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe um bônus de +10 em testes de Diplomacia com ele. Um alvo hostil ou que esteja envolvido em combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, o efeito é dissipado e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre)</p><p><strong>Discente (+2 PE):</strong> em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir que o alvo atire em seu companheiro, por exemplo, dissipa o efeito. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, o efeito termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que o policial prenda a próxima pessoa de casaco verde que ele encontrar. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> afeta todos os alvos dentro do alcance. Requer 3º círculo.</p>",
    },
    {
      name: "Esconder dos Olhos",
      circle: "2",
      element: "Knowledge",
      execution: "livre",
      range: "pessoal",
      target: "você",
      duration: "1 rodada",
      description:
        "<p>Você fica invisível, incluindo seu equipamento, recebendo camuflagem total e +15 em testes de Furtividade. Como o normal, seres que não possam vê-lo ficam desprevenidos contra seus ataques.</p><p>O efeito termina se você faz um ataque ou usa uma habilidade hostil. Ações contra objetos livres não dissipam Esconder dos Olhos (você pode tocar ou apanhar objetos que não estejam sendo segurados por outros seres). Causar dano indiretamente — por exemplo, preparar explosivos para detonar mais tarde — não é considerado um ataque.</p><p>Objetos soltos voltam a ser visíveis e objetos apanhados por você ficam invisíveis. Uma luz transportada nunca fica invisível (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível.</p><p><strong>Discente (+3 PE):</strong> muda a duração para “sustentada”. Em vez do normal, você gera uma esfera de invisibilidade. Você e todos os aliados a até 3m de você se tornam invisíveis, como no efeito normal do ritual (ainda ficam visíveis caso façam uma ação hostil). A esfera se move juntamente com você; qualquer coisa que saia da esfera fica visível. Requer 3º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> muda a execução para “ação padrão”, o alcance para “toque”, o alvo para “1 ser” e a duração para “sustentada”. O efeito não é dissipado caso o alvo faça um ataque ou ação hostil. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Espirais da Perdição",
      circle: "1",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      target: "1 ser",
      duration: "cena",
      description:
        "<p>Espirais surgem no corpo do alvo, tornando seus movimentos lentos. O alvo sofre –1d20 em testes de ataque.</p><p><strong>Discente (+2 PE):</strong> muda a penalidade para –2d20. Requer 2º círculo.</p><p><strong>Verdadeiro (+8 PE):</strong> muda a penalidade para -2d20. e o alvo para “seres escolhidos”. Requer 3º círculo.</p>",
    },
    {
      name: "Ferver Sangue",
      circle: "3",
      element: "Sangue",
      execution: "padrão",
      range: "curto",
      target: "1 ser",
      duration: "sustentada",
      save: "Fortitude parcial",
      normalDice: "4d8",
      description:
        "<p>O sangue do alvo aquece até entrar em ebulição. Quando o ritual é conjurado, e no início de cada turno do alvo, ele deve fazer um teste de Fortitude. Se falhar, sofre 4d8 pontos de dano de Sangue e fica fraco; se passar, sofre metade do dano e não fica fraco neste turno. Se o alvo passar nesse teste dois turnos seguidos o efeito termina.</p><p><strong>Verdadeiro (+4 PE):</strong> muda o alvo para “seres escolhidos”. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Fim Inevitável",
      circle: "4",
      element: "Morte",
      execution: "completa",
      range: "extremo",
      effect: "buraco negro com 1,5m de diâmetro",
      duration: "4 rodadas",
      save: "Fortitude parcial",
      description:
        "<p>Você cria um vácuo em um espaço desocupado a sua escolha, capaz de sugar tudo nas proximidades. No início de cada um de seus quatro turnos seguintes, todos os seres a até 90m do vácuo, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do vácuo. Objetos soltos também são puxados. Seres podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +5 em seus testes de resistência. Seres e objetos que iniciem seu turno tocando o vácuo temporal sofrem 100 pontos de dano de Morte por rodada.</p><p><strong>Discente (+5 PE):</strong> muda a duração para “5 rodadas” e o efeito para que você não seja afetado. Requer afinidade.</p><p><strong>Verdadeiro (+10 PE):</strong> muda a duração para “6 rodadas” e o efeito para que seres escolhidos dentro do alcance não sejam afetados. Requer afinidade.</p>",
    },
    {
      name: "Flagelo de Sangue",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa",
      duration: "cena",
      save: "Fortitude parcial",
      normalDice: "10d6",
      description:
        "<p>Você toca uma pessoa, gravando uma marca escarificada no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “siga-me” ou “não saia desta sala”. A cada rodada que o alvo desobedecer a ordem, a marca inflige uma dor excruciante, que causa 10d6 pontos de dano de Sangue e deixa o alvo enjoado pela rodada (Fortitude reduz o dano à metade e evita a condição). Se o alvo passar nesse teste dois turnos seguidos a marca desaparece.</p><p><strong>Discente (+3 PE):</strong> muda o alvo para “1 ser (exceto criaturas de Sangue)”. Requer 3º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> como Discente, e muda a duração para “1 dia”. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Forma Monstruosa",
      circle: "3",
      element: "Sangue",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      description:
        "<p>Seu corpo e sua mente se transformam, assumindo uma forma monstruosa que combina suas características com as de uma criatura de Sangue; suas roupas e proteção se mesclam à sua carne, transformando-se em uma couraça, e quaisquer objetos em suas mãos se fundem aos seus braços, transformando-se em garras afiadas e pontiagudas. Todo seu equipamento se funde à nova forma, ficando inacessível, mas quaisquer bônus por equipamento se mantém. Seu tamanho muda para Grande e você recebe +5 em testes de ataque e rolagens de dano corpo a corpo e 30 PV temporários. Enquanto estiver transformado, sua mente é tomada por fúria selvagem; você não pode falar nem conjurar rituais e a cada rodada deve atacar o ser mais próximo possível (aliado ou inimigo). Se não houver um ser em alcance de ataque, você deve se deslocar em direção ao ser mais próximo da melhor forma possível. Se o ser mais próximo for um aliado, você pode fazer um teste de Vontade (DT igual à do ritual). Se passar, neste turno você pode escolher qual ser atacar.</p><p><strong>Discente (+3 PE):</strong> além do normal, você recebe imunidade a atordoamento, fadiga, sangramento, sono e veneno. Requer 3º círculo.</p><p><strong>Verdadeiro (+9 PE):</strong> muda os bônus em testes de ataque e rolagens de dano para +10 e os PV temporários para 50. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Fortalecimento Sensorial",
      circle: "1",
      element: "Sangue",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      description:
        "<p>Você potencializa seus sentidos, recebendo +1d20 em Investigação, Luta, Percepção e Pontaria.</p><p><strong>Discente (+2 PE):</strong> além do normal, seus inimigos sofrem –1d20 em testes de ataque contra você. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> além do normal, você apura seus sentidos para perceber qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexo. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Hemofagia",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      save: "Fortitude reduz à metade",
      normalDice: "6d6",
      verdadeiroDice: "4d6",
      description:
        "<p>Você arranca o sangue do corpo do alvo através de pele dele, causando 6d6 pontos de dano de Sangue. Você então absorve esse sangue, recuperando pontos de vida iguais à metade do dano causado.</p><p><strong>Discente (+3 PE):</strong> muda a resistência para “nenhuma”. Como parte da execução do ritual, você pode usar uma arma em vez das mãos para fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e do ritual, recuperando pontos de vida em quantidade igual à metade do dano total causado.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o alcance para “pessoal”, o alvo para “você” e a duração para “cena”. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 ser e causar 4d6 pontos de dano de Sangue. Você recupera pontos de vida iguais à metade do dano causado. Requer 4º círculo.</p>",
    },
    {
      name: "Inexistir",
      circle: "4",
      element: "Conhecimento",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      save: "Vontade parcial",
      normalDice: "10d12+10",
      discenteDice: "15d12+15",
      verdadeiroDice: "20d12+20",
      description:
        "<p>Este é um ritual extremamente cruel, que já condenou grandes agentes da Ordem ao oblívio. Você toca o alvo com a intenção de apagá-lo completamente da existência, a mente e o corpo do alvo são reescritos e desmantelados da existência. O alvo começa a levitar a poucos centímetros do chão e textos narrando todos os momentos de sua vida surgem e brilham por cima de sua pele, até que a existência dele começa a ser destruída de dentro, causando 10d12+10 pontos de dano de Conhecimento. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano e fica debilitado por uma rodada. Independentemente do resultado do teste de resistência, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente apagado, não restando absolutamente nenhum traço de sua existência.</p><p><strong>Discente (+5 PE):</strong> muda o dano para 15d12+15 e o dano resistido para 3d12.</p><p><strong>Verdadeiro (+10 PE):</strong> muda o dano para 20d12+20 e o dano resistido para 4d12. Requer afinidade.</p>",
    },
    {
      name: "Invadir Mente",
      circle: "2",
      element: "Conhecimento",
      execution: "padrão",
      range: "médio ou toque",
      target: "1 ser ou 2 pessoas voluntárias",
      duration: "instantânea ou 1 dia",
      save: "Vontade parcial ou nenhuma",
      normalDice: "6d6",
      discenteDice: "10d6",
      verdadeiroDice: "10d6",
      description:
        '<p>Quando conjura este ritual, você gera um dos efeitos a seguir, a sua escolha: <em>rajada mental</em> (usa os primeiros parâmetros do cabeçalho acima) ou <em>ligação telepática</em> (usa os segundos parâmetros).</p><p><em>Rajada Mental:</em> você infecta a mente do alvo com o Conhecimento proibido do Outro Lado, dilacerando o cérebro dele. O alvo sofre 6d6 pontos de dano de Conhecimento e fica atordoado por uma rodada. Se passar no teste de Vontade, sofre metade do dano e não fica atordoado. Um mesmo alvo só pode ficar atordoado por este ritual uma vez por cena.</p><p><em>Ligação Telepática:</em> você cria um elo mental entre duas pessoas (você pode ser uma delas), que podem se comunicar independente da distância pela duração do ritual (1 dia).</p><p><strong>Discente (+3 PE):</strong> se escolhar <em>rajada mental</em>, aumenta o dano para 10d6. Se escolher <em>ligação telepática</em>, em vez do normal, você cria um elo mental que permite que você veja e ouça pelos sentidos do alvo, gastando uma ação de movimento para se concentrar. Um alvo involuntário pode fazer um teste de Vontade para suprimir o ritual por uma hora. Requer 3º círculo.</p><p><strong>Verdadeiro (+ 7 PE):</strong> se escolher <em>rajada mental</em>, aumenta o dano para 10d6 e muda o alvo para todos os "seres escolhidos". Se escolher <em>ligação telepática</em>, você pode criar um vínculo mental entre até 5 pessoas. Requer 4º círculo.</p>',
    },
    {
      name: "Invólucro de Carne",
      circle: "4",
      element: "Sangue",
      execution: "padrão",
      range: "curto",
      effect: "1 clone seu",
      duration: "cena",
      description:
        "<p>Você manifesta uma poça de sangue no chão, de onde emerge uma cópia sua. Ela é idêntica em aparência e capacidades (em termos de jogo, tem as mesmas estatísticas) e surge com uma cópia de todo equipamento mundano que você estiver carregando. A cópia não tem consciência (valor de Intelecto e Presença nulos) e não age sem que você dê uma ordem. Você pode gastar uma ação de movimento para dar uma ordem à cópia, como “lute contra aquele ser”. No final de cada um de seus turnos, a cópia segue a ordem da melhor maneira possível, mas ainda é incapaz de tomar decisões sozinha e acatará qualquer ordem perigosa sem hesitar, mesmo que leve à sua destruição.Alternativamente, no início de seu turno, você pode controlar ativamente a cópia. Se fizer isso, você entra num transe temporário e assume o controle da cópia como se fosse seu corpo, usando os sentidos dela. Qualquer ser que interagir com a cópia tem direito a um teste de Percepção (DT do ritual) para perceber que é uma cópia. A cópia se desfaz em uma poça de sangue coagulado se chegar a 0 PV ou sair do alcance.</p>",
    },
    {
      name: "Lâmina do Medo",
      circle: "4",
      element: "Medo",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      save: "Fortitude parcial",
      normalDice: "10d8",
      description:
        "<p>Você manifesta uma lâmina impossível, que pode ser descrita apenas como uma “fenda na Realidade”, com a qual golpeia um alvo adjacente. Se o alvo falhar no teste de Fortitude, seus PV são reduzidos a 0 e ele fica morrendo; se passar, sofre 10d8 pontos de dano de Medo (ignora todas as resistências) e fica apavorado por uma rodada. Se uma pessoa ficar morrendo pela Lâmina do Medo e sobreviver, o ferimento causado pelo ritual passa a se transformar constantemente, jamais cicatrizando e fazendo com que a pessoa passe a viver em dor constante. Aprender este ritual requer um poder de trilha específico.</p>",
    },
    {
      name: "Localização",
      circle: "2",
      element: "Conhecimento",
      execution: "padrão",
      range: "pessoal",
      area: "círculo com 90m de raio",
      duration: "cena",
      description:
        "<p>Esta ritual pode encontrar uma pessoa ou objeto a sua escolha. Você pode pensar em termos gerais (“um policial”, “algo de metal”) ou específicos (“A delegada Joana”, “uma pistola”). O ritual indica a direção e distância da pessoa ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (“a chave do armazém 4 no porto”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja parecida com a verdade, o ritual falha, mas você gasta os PE mesmo assim. Este ritual pode ser bloqueado por uma fina camada de chumbo.</p><p><strong>Discente (+3 PE):</strong> muda o alcance para “toque”, o alvo para “1 pessoa” e a duração para “1 hora”. Em vez do normal, a pessoa tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, o ritual pode ser usado para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma caverna (mas não para encontrar a localização de uma pessoa ou objeto; funciona apenas em relação a lugares). Caso a pessoa demore mais de uma hora para percorrer o caminho, o conhecimento se perde.</p><p><strong>Verdadeiro (+7 PE):</strong> aumenta a área para círculo de 1km de raio. Requer 4º círculo.</p>",
    },
    {
      name: "Luz",
      circle: "1",
      element: "Energia",
      execution: "padrão",
      range: "curto",
      target: "1 objeto",
      duration: "cena",
      save: "Vontade anula",
      description:
        "<p>O alvo emite luz de cores alternadas e brilhantes (mas não produz calor) em uma área com 9m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se o alvo for um objeto em posse de uma pessoa involuntária, ela tem direito a um teste de Vontade para anular o efeito.</p><p><strong>Discente (+2 PE):</strong> muda o alcance para longo e o efeito para 4 esferas brilhantes. Cria esferas flutuantes de pura luz com 10cm de diâmetro, que você pode posicionar onde quiser dentro do alcance. Você pode enviar uma esfera à frente, outra para trás, outra para cima e manter uma perto de você, por exemplo. Uma vez por rodada, você pode mover as esferas com uma ação livre. Cada esfera ilumina uma área de 6m de raio, mas não produz calor. Se uma esfera ocupar o espaço de um ser, ele fica ofuscado e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> a luz é cálida como a do sol. Dentro da área seus aliados recebem +1d20 em testes de Vontade, e seus inimigos ficam ofuscados. Requer 3º círculo.</p>",
    },
    {
      name: "Medo Tangível",
      circle: "4",
      element: "Medo",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      description:
        "<p>O ritual transforma seu corpo em uma manifestação do Medo, tornando-o imune a efeitos mundanos. Você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de doenças e venenos, e não sofre dano adicional por acertos críticos e ataques furtivos. Além disso, dano do tipo balístico, corte, impacto ou perfuração não podem reduzir seu total de pontos de vida abaixo de 1, tornando-o virtualmente imortal contra efeitos mundanos.</p>",
    },
    {
      name: "Mergulho Mental",
      circle: "3",
      element: "Conhecimento",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa",
      duration: "sustentada",
      save: "Vontade parcial",
      description:
        "<p>Você mergulha nos pensamentos do alvo, para descobrir informações sobre ele. Durante o mergulho, você fica desprevenido. No início de cada turno seu que estiver sustentando o efeito e tocando o alvo, ele deve fazer um teste de Vontade. Se falhar, deve responder uma pergunta sua que possa ser respondida com “sim” ou “não”, sendo incapaz de mentir. O que você descobre depende das suas perguntas e do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação.</p><p><strong>Verdadeiro (+4 PE):</strong> muda a execução para 1 dia, o alcance para ilimitado e adiciona como componente ritualístico uma cuba de ouro cheia d’água e uma máscara (acessório de categoria II). Você pode realizar o mergulho mental à distância, submergindo seu rosto mascarado na água enquanto mentaliza o alvo. Para que esse ritual funcione, você precisa ter alguma informação sobre o alvo, como nome completo, e um objeto pessoal ou fotografia. Requer 4º círculo.</p>",
    },
    {
      name: "Miasma Entrópico",
      circle: "2",
      element: "Morte",
      execution: "padrão",
      range: "médio",
      area: "nuvem com 6m de raio",
      duration: "instantânea",
      save: "Fortitude parcial ",
      normalDice: "4d8",
      discenteDice: "6d8",
      description:
        "<p>Cria uma explosão de emanações tóxicas. Seres na área sofrem 4d8 pontos de dano químico e ficam enjoados por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoados.</p><p><strong>Discente (+3 PE):</strong> muda o dano para 6d8 de Morte.</p><p><strong>Verdadeiro (+7 PE):</strong> muda a duração para 3 rodadas. Um ser que inicie seu turno dentro da área sofre o dano novamente. Requer 3º círculo.</p>",
    },
    {
      name: "Nuvem de Cinzas",
      circle: "1",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      effect: "nuvem com 6m de raio e 6m de altura",
      duration: "cena",
      description:
        "<p>Uma nuvem de fuligem espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — seres a até 1,5m têm camuflagem e seres a partir de 3m têm camuflagem total. Um vento forte dispersa a nuvem em 4 rodadas e um vendaval a dispersa em 1 rodada. A nuvem não funciona sob a água. </p><p><strong>Discente (+2 PE):</strong> você pode escolher seres no alcance ao conjurar o ritual; eles enxergam através do efeito. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> além do normal, a nuvem fica espessa, quase sólida. Qualquer ser dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque. Requer 3º círculo.</p>",
    },
    {
      name: "Ódio Incontrolável",
      circle: "1",
      element: "Sangue",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa",
      duration: "cena",
      description:
        "<p>O alvo entra em um frenesi, aumentando sua agressividade e capacidade de luta. Ele recebe +2 em testes de ataque e rolagens de dano corpo a corpo e resistência a balístico, corte, impacto e perfuração 5. Enquanto o efeito durar, o alvo não pode fazer nenhuma ação que exige calma e concentração (como usar a perícia Furtividade ou conjurar rituais), e deve sempre atacar um alvo em sua rodada, mesmo que seja um aliado se ele for o único a seu alcance.</p><p><strong>Discente (+2 PE):</strong> além do normal, sempre que o alvo usar a ação agredir, pode fazer um ataque corpo a corpo adicional contra o mesmo alvo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o bônus de ataque e dano para +5 e o alvo passa a sofrer apenas metade do dano dos tipos balístico, corte, impacto e perfuração. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Ouvir os Sussurros",
      circle: "1",
      element: "Conhecimento",
      execution: "completa",
      range: "pessoal",
      target: "você",
      duration: "instantânea",
      description:
        "<p>O ritual conecta você com os sussurros, memórias ecoadas pelo Outro Lado, que você pode consultar para receber conhecimento proibido em relação a uma ação que tomará em breve. Ao usar este ritual, faça uma pergunta sobre um evento que você está prestes a fazer (na mesma cena) que possa ser respondida com “sim” ou “não”. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, o ritual funciona e você recebe sua resposta, que pode ser “sim”, “não” ou “sim e não”</p><p>Com um resultado 1, o ritual falha e oferece o resultado “não”. Não há como saber se esse resultado foi dado porque o ritual falhou ou não. Lançar este ritual múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado.</p><p>Por exemplo, você está prestes a entrar em um prédio que pode ser o esconderijo de um cultista. Se você perguntar para os sussurros se o cultista está mesmo nesse local, a resposta pode ser “sim” (ele está no prédio), “não” (ele não está no prédio) ou “sim e não” (ele está no prédio, mas usou um ritual para se esconder seu corpo físico em uma dimensão do Outro Lado...). Isso é útil para saber se você deve (ou não) gastar recursos para um possível combate.</p><p><strong>Discente (+2 PE):</strong> muda a execução para 1 minuto. Em vez do normal, você pode consultar os ecos fazendo uma pergunta sobre um evento que poderá acontecer até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 2º círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> muda a execução para 10 minutos e a duração para 5 rodadas. Em vez do normal, você consulta os ecos, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “ninguém sabe”. O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “ninguém sabe”. Requer 3º círculo.</p>",
    },
    {
      name: "Paradoxo",
      circle: "2",
      element: "Morte",
      execution: "padrão",
      range: "médio",
      area: "esfera com 6m de raio",
      duration: "instantânea",
      save: "Fortitude reduz à metade",
      normalDice: "6d6",
      discenteDice: "4d6",
      verdadeiroDice: "13d6",
      description:
        "<p>O ritual cria uma poderosa implosão de distorção temporal contraditória, causando 6d6 pontos de dano de Morte em todos os seres na área.</p><p><strong>Discente (+3 PE):</strong> muda a área para “efeito: esfera com tamanho Médio” e a duração para cena. Em vez do normal, cria uma esfera de emanações espirais sibilantes com 1,5m de diâmetro que causa 4d6 pontos de dano de Morte a qualquer ser no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Um ser só pode sofrer dano da esfera uma vez por rodada.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o dano para 13d6. Seres reduzidos a 0 PV pelo dano do Paradoxo devem fazer um teste de Fortitude. Se falharam, são reduzidas a cinzas (morrem imediatamente). Requer 4º círculo.</p>",
    },
    {
      name: "Perturbação",
      circle: "1",
      element: "Conhecimento",
      execution: "padrão",
      range: "curto",
      target: "1 pessoa",
      duration: "1 rodada",
      save: "Vontade (anula)",
      discenteDice: "3d8",
      description:
        "<p>Você dá uma ordem que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer à ordem em seu próprio turno da melhor maneira possível. Escolha um dos efeitos.</p><p><strong>Fuja:</strong> O alvo gasta seu turno tentando se afastar de você (usando todas as suas ações).</p><p><strong>Largue:</strong> O alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou).</p><p><strong>Pare:</strong> O alvo fica pasmo (não pode realizar ações, só reações).</p><p><strong>Sente-se:</strong> Com uma ação livre, o alvo se senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno.</p><p><strong>Venha:</strong> O alvo gasta seu turno se aproximando de você (usando todas as suas ações).</p><p><strong>Discente (+2 PE):</strong> muda o alvo para “1 ser” e adiciona o seguinte comando: “Sofra. O alvo é acometido de dor aguda, sofrendo 3d8 de dano de Conhecimento e ficando abalado por uma rodada”.</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alvo para “até 5 seres” ou adiciona o seguinte comando: “Ataque. O alvo deve fazer a ação agredir contra um outro alvo a sua escolha em alcance médio, com todas as suas capacidades”. Requer 3º círculo e afinidade.</p>",
    },
    {
      name: "Poeira da Podridão",
      circle: "3",
      element: "Morte",
      execution: "padrão",
      range: "médio",
      area: "nuvem com 6m de raio",
      duration: "sustentada",
      save: "Fortitude",
      normalDice: "4d8",
      verdadeiroDice: "4d8+16",
      description:
        "<p>Você manifesta uma nuvem de poeira que apodrece os seres na área. Ao conjurar a ritual, e no início de cada um de seus turnos, seres e objetos na área sofrem 4d8 pontos de dano de Morte (Fortitude reduz à metade). Alvos que falharem no teste também não podem recuperar PV de nenhuma forma por uma rodada.</p><p><strong>Verdadeiro (+4 PE):</strong> muda o dano para 4d8+16.</p>",
    },
    {
      name: "Polarização Caótica",
      circle: "1",
      element: "Energia",
      execution: "padrão",
      range: "curto",
      target: "você",
      duration: "sustentada",
      save: "Vontade anula",
      description:
        "<p>Você gera uma aura magnética sobrenatural. Escolha um dos efeitos a seguir.</p><p><strong>Atrair:</strong> você pode usar uma ação de movimento para puxar um objeto metálico de espaço 2 ou menor dentro do alcance. Se o objeto estiver livre, voa para suas mãos (caso tenha mãos livres para apanhá-lo) ou para seus pés.</p><p><strong>Repelir:</strong> você repele objetos de espaço 2 ou menor (o que envolve quase todos os projéteis e armas de arremesso), recebendo resistência a balístico, corte, impacto e perfuração 5.</p><p><strong>Discente (+2 PE):</strong> nesta versão a energia magnética é expelida de uma única vez e arremessa até 10 objetos, ou um total de 10 espaços, o que for menor. Os objetos devem estar a até 3m uns dos outros. Objetos arremessados podem atingir seres em seu caminho, causando de 1 ponto de dano de impacto por espaço (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por espaço (objetos duros, pontudos ou afiados). Seres atingidos têm direito a um teste de Reflexos para reduzir o dano à metade. Seres dentro da capacidade de carga do efeito podem ser arremessadas, mas têm direito a um teste de Vontade para evitar o efeito (em si mesmos ou em objetos que estejam segurando). Um ser arremessado contra uma superfície sólida sofre 1d6 pontos de dano de impacto para cada 3m que “voou” no deslocamento (incluindo outros seres; nesse caso, ambos sofrem o dano).</p><p><strong>Verdadeiro (+5 PE):</strong> muda o alcance para médio. Você pode usar uma ação de movimento para fazer com que a força magnética levite e mova um ser ou objeto de espaço 10 ou menor por até 9m em qualquer direção dentro do alcance. Um ser pode anular o efeito sobre ele, ou sobre um objeto que possua, passando num teste de Vontade. O alvo cai no chão se sair do alcance ou o efeito terminar.</p>",
    },
    {
      name: "Possessão",
      circle: "4",
      element: "Conhecimento",
      execution: "padrão",
      range: "longo",
      target: "1 pessoa viva ou morta",
      duration: "1 dia",
      save: "Vontade anula",
      description:
        "<p>Você projeta sua consciência no corpo de uma pessoa viva ou morta. Enquanto possuir o alvo, você assume o controle total do corpo dele (se o alvo estiver vivo, a consciência dele troca de lugar com a sua, ficando inerte dentro do seu corpo desacordado). Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos (Agilidade, Força e Vigor) e deslocamento do alvo. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a este ritual por um dia. Caso qualquer um dos envolvidos no ritual morra, a mente sobrevivente ficará permanentemente presa no corpo novo, a não ser que use o ritual novamente para voltar a seu corpo antigo. Retornar para o seu corpo voluntariamente é uma ação livre.</p>",
    },
    {
      name: "Presença do Medo",
      circle: "4",
      element: "Medo",
      execution: "padrão",
      range: "pessoal",
      area: "emanação de 9m de raio",
      duration: "sustentada",
      normalDice: "5d8+5d8",
      description:
        "<p>Você se torna um receptáculo para o Medo puro, emanando ondas de pavor e ruína. Alvos dentro da área no momento da conjuração ou no início de cada um de seus turnos são acometidos por sofrimento intenso e sofrem 5d8 de dano mental e 5d8 de dano de Medo (Vontade reduz ambos à metade). Alvos que falharem no teste ficam atordoados por uma rodada (este efeito funciona apenas uma vez por cena).</p>",
    },
    {
      name: "Proteção contra Rituais",
      circle: "2",
      element: "Medo",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "cena",
      description:
        "<p>Você canaliza uma aura de Medo puro, que protege o alvo contra efeitos paranormais. O alvo recebe resistência a paranormal 5 e +5 em testes de resistência contra rituais e habilidades de criaturas paranormais.</p><p><strong>Discente (+3 PE):</strong> muda o alvo para “até 5 seres tocados”. Requer 3º círculo.</p><p><strong>Verdadeiro(+6 PE):</strong> muda o alvo para “até 5 seres tocados”, a resistência a dano para 10 e o bônus em testes de resistência para +10. Requer 4º círculo.</p>",
    },
    {
      name: "Purgatório",
      circle: "3",
      element: "Sangue",
      execution: "padrão",
      range: "curto",
      target: "área de 6m de raio",
      duration: "sustentada",
      save: "Fortitude parcial ",
      normalDice: "6d6",
      description:
        "<p>Você faz brotar uma poça de sangue pegajoso na área afetada. Inimigos na área se tornam vulneráveis a dano balístico, de corte, de impacto e de perfuração. Um alvo que tente sair da área é acometido de uma dor terrível; sofre 6d6 pontos de dano de Sangue e deve fazer um teste de Fortitude. Se passar, consegue sair. Se falhar, a dor faz com que não consiga se mover e perca a ação de movimento.</p>",
    },
    {
      name: "Rejeitar Névoa",
      circle: "2",
      element: "Medo",
      execution: "padrão",
      range: "curto",
      area: "nuvem de 6m de raio",
      duration: "cena",
      description:
        "<p>Você manifesta um leve redemoinho de névoa que se movimenta suavemente dentro da área. Rituais conjurados dentro da área têm seu custo aumentado em +2 PE por círculo e sua execução aumentada em um passo (de livre para movimento, de movimento para padrão, de padrão para completa, de completa para duas rodadas). <em>Rejeitar a Névoa</em> anula os efeitos de <em>Cinerária</em>, a menos que o conjurador de <em>Cinerária</em> use uma ação completa por rodada para manter o ritual ativo, neutralizando o efeito dos dois rituais.</p><p><strong>Discente (+2 PE):</strong> além do normal, a DT de testes de resistência contra rituais realizados na área diminui em –5.</p><p><strong>Verdadeiro (+ 5 PE):</strong> como discente, e o dano causado dentro da névoa por rituais é sempre mínimo.</p>",
    },
    {
      name: "Salto Fantasma",
      circle: "3",
      element: "Energia",
      execution: "padrão",
      range: "médio",
      target: "você",
      duration: "instantânea",
      description:
        "<p>Seu corpo se transforma momentaneamente em Energia pura e viaja até outro ponto. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo, desde que já tenha observado o local de alguma forma (pessoalmente, por fotografia, por vídeo...). Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportado, você não pode agir pelo resto do seu turno. Este ritual não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.</p><p><strong>Discente (+2 PE):</strong> muda a execução para reação. Em vez do normal, você salta para um espaço adjacente (1,5m), recebendo +10 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo.</p><p><strong>Verdadeiro (+4 PE):</strong> muda o alcance para longo e o alvo para você e até dois outros seres voluntários que você esteja tocando.</p>",
    },
    {
      name: "Sopro do Caos",
      circle: "2",
      element: "Energia",
      execution: "padrão",
      range: "médio",
      area: "varia",
      duration: "sustentada",
      save: "veja texto",
      description:
        "<p>Você altera os movimentos de massas de ar de forma caótica. Ao conjurar o ritual, escolha um dos efeitos abaixo.</p><p><strong>Ascender:</strong> cria uma corrente de ar ascendente capaz de erguer do chão um ser ou objeto Médio, fazendo o alvo flutuar para cima e para baixo conforme sua vontade. Você pode gastar uma ação de movimento para subir ou descer o alvo até 6m por rodada, até um máximo de 30m de altura. Você não pode mover o alvo horizontalmente — mas o alvo pode, por exemplo, escalar uma colina ou se apoiar no teto para mover-se lateralmente (com metade de seu deslocamento normal). Um ser levitando fica vulnerável. Alvos involuntários têm direito a um teste de Fortitude no início de cada um de seus turnos para encerrar o efeito. Derrubar um alvo flutuando (simplesmente parando a corrente de ar) causa o dano normal de queda, mas um alvo que passe no teste pode “nadar” para o chão contra a corrente. Você pode usar essa opção para fazer uma manobra derrubar contra um alvo voador dentro do alcance, usando Ocultismo em vez de Luta.</p><p><strong>Sopro:</strong> cria uma lufada de vento a partir de suas mãos, que empurra qualquer alvo Médio ou menor, em um cone de 4,5m — faça uma manobra empurrar usando Ocultismo em vez de Luta, usando uma mesma rolagem sua para todos os alvos. A lufada de vento também faz qualquer coisa que um vento forte e súbito faria, como levantar pó, dispersar vapores, apagar chamas, espalhar papéis ou mover uma embarcação. Manter o sopro ativo exige uma ação padrão no seu turno.</p><p><strong>Vento:</strong> cria uma área de vento forte dentro do alcance. Se conjurada numa área que já esteja com algum efeito de vento, aumenta esse efeito em um passo. Manter o vento ativo requer uma ação de movimento. Você também pode usar essa opção para reduzir os efeitos de vento em uma área.</p><p><strong>Discente (+3 PE):</strong> passa a afetar alvos Grandes.</p><p><strong>Verdadeiro (+9 PE):</strong> passa a afetar alvos Enormes.</p>",
    },
    {
      name: "Tecer Ilusão",
      circle: "1",
      element: "Conhecimento",
      execution: "padrão",
      range: "médio",
      effect: "ilusão que se estende a até 4 cubos de 1,5m",
      duration: "cena",
      save: "Vontade desacredita",
      verdadeiroDice: "6d6",
      description:
        "<p>Este ritual cria uma ilusão visual (uma pessoa, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). O ritual cria apenas imagens ou sons simples, com volume equivalente à voz de uma pessoa para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Seres e objetos atravessam uma ilusão sem sofrer dano, mas o ritual pode, por exemplo, esconder uma armadilha ou emboscada. A ilusão é dissipada se você sair do alcance.</p><p><strong>Discente (+2 PE):</strong> muda o efeito para até 8 cubos de 1,5m e a duração para sustentada. Você pode criar ilusões de imagem e sons combinados, e pode criar sons complexos, odores e sensações térmicas. Também pode criar sensações táteis, como texturas; objetos ainda atravessam a ilusão, mas seres não conseguem atravessá-la sem passar em um teste de Vontade. A cada rodada, você pode usar uma ação livre para mover a imagem ou alterar o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. A ilusão ainda é incapaz de causar ou sofrer dano. Quando você para de sustentar o ritual, a imagem ou som persistem por mais uma rodada antes do ritual se dissipar. Requer 2º círculo.</p><p><strong>Verdadeiro (+ 5 PE):</strong> você cria a ilusão de um perigo mortal. Quando o ritual é conjurado, e no início de cada um de seus turnos, um alvo interagindo com a ilusão deve fazer um teste de Vontade; se falhar, acredita que a ilusão é real e sofre 6d6 pontos de dano de Conhecimento. O alvo racionaliza o efeito sempre que falha no teste (por exemplo, acredita que o mesmo teto pode cair sobre ele várias vezes). Se um alvo passar em dois testes de Vontade seguidos, o efeito é anulado para ele. Requer 3º círculo.</p>",
    },
    {
      name: "Tela de Ruído",
      circle: "2",
      element: "Energia",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      description:
        "<p>Este ritual cria uma película de energia que recobre seu corpo e absorve energia cinética. Você recebe 30 PV temporários, mas apenas contra dano balístico, de corte, de impacto ou de perfuração.</p><p>Alternativamente, você pode conjurar este ritual como uma reação quando sofrer dano, recebendo resistência 15 apenas contra esse dano.</p><p><strong>Discente (+3 PE):</strong> aumenta os PV temporário para 60 e a resistência para 30.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o alcance para curto e o alvo para 1 ser ou objeto Enorme ou menor. Em vez do normal, cria uma esfera imóvel e tremeluzente com o tamanho do alvo e centrada nele. Nenhum ser, objeto ou efeito de dano pode passar pela esfera, embora seres possam respirar normalmente dentro dela. O alvo tem direito a um teste de Reflexo para evitar ser aprisionado. Requer 4º círculo.</p>",
    },
    {
      name: "Teletransporte",
      circle: "4",
      element: "Energia",
      execution: "padrão",
      range: "toque",
      target: "até 5 seres voluntários",
      duration: "instantânea",
      description:
        "<p>O ritual transforma o corpo e equipamento dos alvos em energia pura e os faz reaparecer num lugar a sua escolha a até 1.000km. Quando conjura este ritual, você precisa fazer um teste de Ocultismo, com DT definida pelo seu conhecimento sobre o destino.</p><p><strong>DT 25.</strong> Um lugar que você visita com frequência.</p><p><strong>DT 30.</strong> Um lugar que você já visitou pelo menos uma vez.</p><p><strong>DT 35.</strong> Um lugar que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá.</p><p>Você não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para “o local onde Júlia está presa” se nunca esteve lá nem falou com alguém que esteve.</p><p>Se passar no teste, os alvos chegam ao lugar desejado. Se falhar, você chega em um lugar parecido,mas errado ou distante (até 1d10 x 10 km). Se você falhar por 5 ou mais, o ritual falha, mas você gasta PE normalmente e fica atordoado por 1d4 rodadas.</p><p><strong>Verdadeiro (+5 PE):</strong> pode se teletransportar para qualquer local na Terra.</p>",
    },
    {
      name: "Tentáculos de Lodo",
      circle: "3",
      element: "Morte",
      execution: "padrão",
      range: "médio",
      area: "círculo com 6m de raio",
      duration: "cena",
      normalDice: "4d6",
      verdadeiroDice: "6d6",
      description:
        "<p>Uma fenda sombria se abre no chão, de onde surgem tentáculos feitos de lodo da Morte. Ao conjurar o ritual e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando Ocultismo em vez de Luta) contra cada alvo na área. Se você vencer, o ser é agarrado; se já estava agarrado, é esmagado, sofrendo 4d6 pontos de dano (metade impacto, metade Morte). A área do ritual conta como terreno difícil. Os tentáculos são imunes a dano.</p><p><strong>Verdadeiro (+5 PE):</strong> aumenta o raio da área para 9m e aumenta o dano dos tentáculos para 6d6.</p>",
    },
    {
      name: "Terceiro Olho",
      circle: "1",
      element: "Conhecimento",
      execution: "padrão",
      range: "pessoal",
      target: "você",
      duration: "cena",
      description:
        "<p>Seus olhos se enchem de sigilos e você passa a enxergar auras paranormais em alcance longo. Rituais, itens amaldiçoados e criaturas emitem auras. Você sabe o elemento da aura e seu poder aproximado — rituais de 1º círculo e criaturas de VD até 80 emitem uma aura fraca; rituais de 2º e 3º círculos e criaturas de VD entre 81 e 280 emitem uma aura moderada, e rituais de 4º círculo e criaturas de VD 281 ou maior emitem uma aura poderosa.</p><p>Além disso, você pode gastar uma ação de movimento para descobrir se um ser que possa ver em alcance médio tem poderes paranormais ou se é capaz de conjurar rituais e de quais elementos.</p><p><strong>Discente (+2 PE):</strong> muda a duração para 1 dia.</p><p><strong>Verdadeiro (+5 PE):</strong> também pode enxergar objetos e seres invisíveis, que aparecem como formas translúcidas.</p>",
    },
    {
      name: "Transfigurar Água",
      circle: "3",
      element: "Energia",
      execution: "padrão",
      range: "longo",
      area: "esfera com 30m de raio",
      duration: "cena",
      save: "veja texto",
      normalDice: "5d8",
      verdadeiroDice: "10d8",
      description:
        "<p>Você canaliza Energia sobre um corpo de água, para que ele adquira movimentos e comportamentos paranormais e caóticos. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Congelar:</strong> toda a água mundana na área é congelada. Seres nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num teste de Atletismo (DT igual a do ritual).</p><p><strong>Derreter:</strong> gelo mundano na área vira água e o ritual termina. A critério do mestre, isso pode criar terreno difícil.</p><p><strong>Enchente:</strong> eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para “alvo: uma embarcação”. O alvo recebe +6m em seu deslocamento pela duração do efeito.</p><p><strong>Evaporar:</strong> toda a água e gelo mundano na área evaporam instantaneamente e o ritual termina. Qualquer ser vivo na área sofre 5d8 de dano de Energia (Fortitude reduz à metade). Criaturas de Morte sofrem o dobro desse dano.</p><p><strong>Partir:</strong> diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d’água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d’água profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com DT igual à do ritual permite ao piloto livrar a embarcação).</p><p><strong>Verdadeiro (+5 PE):</strong> aumenta o deslocamento de enchente para +12m e o dano de evaporar para 10d8.</p>",
    },
    {
      name: "Transfigurar Terra",
      circle: "3",
      element: "Energia",
      execution: "padrão",
      range: "longo",
      area: "9 cubos com 1,5m de lado",
      duration: "instantânea",
      save: "veja texto",
      normalDice: "10d6",
      description:
        "<p>Você imbui terra, pedra, lama, argila ou areia na área com Energia, gerando efeitos sobrenaturais e caóticos. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Amolecer:</strong> se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto aos seres na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente.</p><p><strong>Modelar:</strong> pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em um martelo, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).</p><p><strong>Solidificar:</strong> transforma lama ou areia em terra ou pedra. Seres com os pés na superfície ficam agarrados. Eles podem se soltar com uma ação padrão e um teste de Atletismo (DT igual a do ritual).</p><p><strong>Discente (+3 PE):</strong> muda a área para 15 cubos com 1,5m de lado.</p><p><strong>Verdadeiro (+7 PE):</strong> também afeta todos os tipos de minerais e metais. Requer 4º círculo.</p>",
    },
    {
      name: "Transfusão Vital",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "instantânea",
      description:
        "<p>Você toca no alvo e transfere sua própria energia vital para ele, podendo sofrer até 30 pontos de dano de Sangue para que o alvo recupere a mesma quantidade em PV. Você não pode ficar com menos de 1 PV por causa desse ritual.</p><p><strong>Discente (+3 PE):</strong> Você pode transferir até 50 pontos de vida. Requer 3º círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> Você pode transferir até 100 pontos de vida. Requer 4º círculo.</p>",
    },
    {
      name: "Velocidade Mortal",
      circle: "2",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      target: "1 ser",
      duration: "sustentada",
      description:
        "<p>Você distorce a passagem do tempo ao redor do alvo, tornando-o extremamente veloz. O alvo pode realizar uma ação de movimento adicional por turno. Esta ação não pode ser usada para conjurar rituais.</p><p><strong>Discente (+3 PE):</strong> em vez de uma ação de movimento, o alvo recebe uma ação padrão adicional por turno.</p><p><strong>Verdadeiro (+7 PE):</strong> muda o alvo para “alvos escolhidos”. Requer 4º círculo e afinidade.</p>",
    },
    {
      name: "Vidência",
      circle: "3",
      element: "Conhecimento",
      execution: "completa",
      range: "ilimitado",
      target: "1 ser",
      duration: "5 rodadas",
      save: "Vontade anula",
      description:
        "<p>Através de uma superfície reflexiva, como um espelho ou mesmo uma TV desligada, você pode ver e ouvir um ser escolhido e seus arredores (cerca de 6m em qualquer direção). O alvo pode estar a qualquer distância, mas tem direito a um teste de resistência no início de cada um de seus turnos para impedir a Vidência naquele turno. Se o alvo passar em dois testes seguidos, o ritual é encerrado e o alvo fica imune a ele por uma semana. Para esse ritual funcionar, você precisa ter alguma informação sobre o alvo, como seu nome ou uma foto. Dependendo do conhecimento que você tiver dele, o alvo recebe bônus ou penalidades em seu teste de resistência.</p><p><strong>Você sabe o mínimo sobre o alvo:</strong> +10</p><p><strong>Você possui algumas informações sobre o alvo (idade, profissão...) ou já o viu pessoalmente:</strong> +5</p><p><strong>Você conhece bem o alvo:</strong> -0</p><p><strong>Você tem um pertence pessoal ou roupa do alvo:</strong> -5</p><p><strong>Você tem uma parte do corpo do alvo(unhas, cabelos...):</strong> -10</p>",
    },
    {
      name: "Vínculo de Sangue",
      circle: "4",
      element: "Sangue",
      execution: "padrão",
      range: "curto",
      target: "1 ser",
      duration: "cena",
      save: "Fortitude anula",
      description:
        "<p>Você manifesta um símbolo de Sangue no seu corpo e no corpo do alvo. Sempre que você sofrer dano, o alvo deve fazer um teste de Fortitude. Se ele falhar, você sofre apenas metade do dano e ele sofre a metade restante.Você pode conjurar o ritual com efeito inverso, fazendo com que você receba metade de todo o dano que o alvo receberia. Alvos voluntários não precisam fazer testes de resistência.</p>",
    },
    {
      name: "Vomitar Pestes",
      circle: "3",
      element: "Sangue",
      execution: "padrão",
      range: "médio",
      effect: "1 enxame Grande (quadrado de 3m)",
      duration: "sustentada",
      save: "Reflexos reduz à metade",
      normalDice: "5d12",
      description:
        "<p>Você vomita um enxame de pequenas criaturas de Sangue, que surge em um ponto adjacente a sua escolha. O enxame pode passar pelo espaço de outros seres e não impede que outros seres entrem no espaço dele. No final de cada um de seus turnos, o enxame causa 5d12 pontos de dano de sangue a qualquer ser no espaço dele (Reflexos reduz à metade). Você pode gastar uma ação de movimento para mover o enxame com deslocamento de 12m.</p><p><strong>Discente (+2 PE):</strong> além do normal, um alvo que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dele). O alvo pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar. Se você mover o enxame, o alvo fica livre.</p><p><strong>Verdadeiro (+5 PE):</strong> o enxame vira Enorme (cubo de 6m de lado) e ganha deslocamento de voo 18m.</p>",
    },
    {
      name: "Zerar Entropia",
      circle: "3",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      target: "1 pessoa",
      duration: "cena",
      save: "Vontade parcial",
      description:
        '<p>Você zera completamente a entropia do alvo em relação ao ambiente, deixando-o paralisado. Se passar na resistência, em vez disso fica lento. No início de cada um de seus turnos, o alvo pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, encerra o efeito.</p><p><strong>Discente (+4 PE):</strong> muda o alvo para "1 ser". Requer 4º círculo.</p><p><strong>Verdadeiro (+11 PE):</strong> muda o alvo para "seres escolhidos". Requer 4º círculo.</p>',
    },
  ],
  jl = { class: "rituals-modal-content" },
  Ul = { class: "class-rituals-container" },
  xl = { class: "secondary-tab-container" },
  Nl = { class: "search-container" },
  Ll = { key: 0, class: "class-rituals-content" },
  Bl = D({
    __name: "RitualsModalContent",
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        g = [
          { label: "Todos", value: 0 },
          { label: "Conhecimento", value: 1 },
          { label: "Energia", value: 2 },
          { label: "Morte", value: 3 },
          { label: "Sangue", value: 4 },
          { label: "Medo", value: 5 },
          { label: "Varia", value: 6 },
        ],
        l = [
          { label: "Todos", circle: "-", value: 0 },
          { label: "1º Círculo", circle: "1", value: 1 },
          { label: "2º Círculo", circle: "2", value: 2 },
          { label: "3º Círculo", circle: "3", value: 3 },
          { label: "4º Círculo", circle: "4", value: 4 },
        ],
        p = E(0),
        c = E(0),
        m = E(""),
        i = (o) => v("handleAddRitual", o),
        r = Q(() =>
          p.value === 0
            ? c.value === 0
              ? Se.filter((o) => X(o.name, m.value)).sort((o, u) =>
                  o.name.localeCompare(u.name)
                )
              : Se.filter((o) => o.circle === l[c.value].circle)
                  .filter((o) => X(o.name, m.value))
                  .sort((o, u) => o.name.localeCompare(u.name))
            : c.value === 0
            ? p.value === 0
              ? Se.filter((o) => X(o.name, m.value)).sort((o, u) =>
                  o.name.localeCompare(u.name)
                )
              : Se.filter((o) => o.element === g[p.value].label)
                  .filter((o) => X(o.name, m.value))
                  .sort((o, u) => o.name.localeCompare(u.name))
            : Se.filter((o) => o.element === g[p.value].label)
                .filter((o) => X(o.name, m.value))
                .filter((o) => o.circle === l[c.value].circle)
                .filter((o) => X(o.name, m.value))
        );
      return (o, u) => (
        t(),
        s("div", jl, [
          e("div", Ul, [
            A(
              ve,
              {
                "current-tab": p.value,
                "tab-options": g,
                onHandleNavigation: u[0] || (u[0] = (C) => (p.value = C)),
              },
              null,
              8,
              ["current-tab"]
            ),
            e("div", xl, [
              A(
                ve,
                {
                  "current-tab": c.value,
                  "tab-options": l,
                  secondary: "",
                  onHandleNavigation: u[1] || (u[1] = (C) => (c.value = C)),
                },
                null,
                8,
                ["current-tab"]
              ),
            ]),
            e("div", Nl, [
              A(
                Ie,
                {
                  value: m.value,
                  dark: "",
                  onUpdate: u[2] || (u[2] = (C) => (m.value = C)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            r.value.length > 0
              ? (t(),
                s("div", Ll, [
                  (t(!0),
                  s(
                    x,
                    null,
                    W(
                      r.value,
                      (C) => (
                        t(),
                        s("div", { key: C.name, class: "class-rituals-card" }, [
                          A(_o, { ritual: C, onHandleAdd: i }, null, 8, [
                            "ritual",
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]))
              : q("", !0),
          ]),
        ])
      );
    },
  }),
  Fl = T(Bl, [["__scopeId", "data-v-46739282"]]),
  Ko = (a) => (z("data-v-13a40b03"), (a = a()), H(), a),
  Ql = { class: "modal-content modal-width" },
  Wl = { class: "modal-header" },
  Gl = Ko(() => e("h2", null, "Adicionar Rituais", -1)),
  Xl = Ko(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Kl = [Xl],
  Jl = { class: "modal-body modal-height" },
  Yl = D({
    __name: "RitualsModal",
    props: { character: {} },
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        g = [Fl, qs],
        l = [
          { label: "Rituais", value: 0 },
          { label: "Meus Rituais", value: 1 },
        ],
        p = E(0),
        c = (i) => (p.value = i),
        m = (i) => v("handleAddRitual", i);
      return (i, r) => (
        t(),
        s("div", Ql, [
          e("div", Wl, [
            Gl,
            e(
              "button",
              { onClick: r[0] || (r[0] = (o) => i.$emit("handleCloseModal")) },
              Kl
            ),
          ]),
          e("div", Jl, [
            A(
              ha,
              { value: p.value, options: l, onHandleNavigation: c },
              null,
              8,
              ["value"]
            ),
            (t(),
            L(
              Ne,
              null,
              [
                (t(),
                L(
                  Me(g[p.value]),
                  { character: i.character, onHandleAddRitual: m },
                  null,
                  40,
                  ["character"]
                )),
              ],
              1024
            )),
          ]),
        ])
      );
    },
  }),
  Zl = T(Yl, [["__scopeId", "data-v-13a40b03"]]),
  eu = (a) => (z("data-v-0d3ccc6e"), (a = a()), H(), a),
  au = { class: "modal-content modal-width" },
  ou = { class: "modal-header" },
  tu = eu(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  su = [tu],
  nu = { class: "modal-body" },
  ru = ["innerHTML"],
  du = D({
    __name: "SkillModal",
    props: { skill: {} },
    emits: ["handleCloseModal"],
    setup(a) {
      return (b, v) => (
        t(),
        s("div", au, [
          e("div", ou, [
            e("h2", null, O(b.skill.name), 1),
            e(
              "button",
              { onClick: v[0] || (v[0] = (g) => b.$emit("handleCloseModal")) },
              su
            ),
          ]),
          e("div", nu, [
            e("div", { innerHTML: b.skill.description }, null, 8, ru),
          ]),
        ])
      );
    },
  }),
  iu = T(du, [["__scopeId", "data-v-0d3ccc6e"]]),
  ee = (a) => (z("data-v-1356c67e"), (a = a()), H(), a),
  lu = { class: "form-container" },
  uu = { class: "input-container" },
  cu = ee(() => e("div", { class: "label" }, " Nome* ", -1)),
  mu = { class: "input-row" },
  pu = { class: "input-container" },
  vu = ee(() => e("div", { class: "label" }, " Dano* ", -1)),
  gu = { class: "input-container" },
  hu = ee(() => e("div", { class: "label" }, " Crítico* ", -1)),
  fu = { class: "input-container" },
  bu = ee(() => e("div", { class: "label" }, " Multiplicador* ", -1)),
  Cu = { class: "input-row" },
  Au = { class: "input-container" },
  qu = ee(() => e("div", { class: "label" }, " Ataque Bônus ", -1)),
  yu = { class: "input-container" },
  $u = ee(() => e("div", { class: "label" }, " Tipo de Dano ", -1)),
  Eu = { class: "input-row" },
  Iu = { class: "input-container" },
  ku = ee(() => e("div", { class: "label" }, " Alcance ", -1)),
  Su = { class: "input-container" },
  _u = ee(() => e("div", { class: "label" }, " Perícia ", -1)),
  Pu = { class: "input-container" },
  Mu = ee(() => e("div", { class: "label" }, " Atributo Dano ", -1)),
  Ru = { class: "title-container" },
  Du = ee(() => e("div", { class: "title" }, " Dano extra ", -1)),
  Tu = { class: "input-row" },
  Vu = { class: "input-container" },
  wu = ee(() => e("div", { class: "label" }, " Dano* ", -1)),
  Ou = ["onUpdate:modelValue"],
  zu = { class: "input-container" },
  Hu = ee(() => e("div", { class: "label" }, " Tipo* ", -1)),
  ju = { class: "button-remove-container" },
  Uu = ["onClick"],
  xu = ee(() =>
    e(
      "div",
      { class: "label" },
      [
        ne(" Anotações"),
        e("span", null, " (utilize negrito para aplicar a cor roxo)"),
      ],
      -1
    )
  ),
  Nu = ee(() =>
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
  Lu = { class: "buttons-container" },
  Bu = ["disabled"],
  Fu = D({
    __name: "AttackForm",
    props: { attack: { type: Object, default: _e }, addMode: Boolean },
    emits: ["handleClose", "handleEditAttack"],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = [
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
        p = ["-", "Curto", "Médio", "Longo", "Extremo", "Ilimitado"],
        c = [
          "Luta",
          "Pontaria",
          "Ocultismo",
          "Enganação",
          "Artes",
          "Tecnologia",
        ],
        m = ["Nenhum", "Agilidade", "Força", "Intelecto", "Presença", "Vigor"],
        i = E(je.clone(v.attack)),
        r = Q(
          () =>
            i.value.name === "" ||
            i.value.damage === "" ||
            i.value.criticalRange.toString() === "" ||
            i.value.criticalMult.toString() === ""
        ),
        o = () => {
          Ao.isArray(i.value.aditionalDamage) || (i.value.aditionalDamage = []),
            i.value.aditionalDamage.push({
              id: Ue(),
              value: "1d6",
              damageType: "Balístico",
            });
        },
        u = (M) => {
          if (!Ao.isArray(i.value.aditionalDamage)) return;
          const f = i.value.aditionalDamage.findIndex((y) => y.id === M);
          i.value.aditionalDamage.splice(f, 1);
        },
        C = () => {
          (i.value = je.clone(_e)), g("handleClose");
        },
        _ = () => {
          if (r.value) return;
          Ss(i.value);
          const M = { attack: i.value };
          g("handleEditAttack", M), (i.value = je.clone(_e));
        };
      return (M, f) => {
        const y = ua("p-editor");
        return (
          t(),
          s(
            x,
            null,
            [
              e("div", lu, [
                e("div", uu, [
                  cu,
                  le(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          f[0] || (f[0] = (R) => (i.value.name = R)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[Ce, i.value.name]]
                  ),
                ]),
                e("div", mu, [
                  e("div", pu, [
                    vu,
                    le(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[1] || (f[1] = (R) => (i.value.damage = R)),
                          type: "text",
                          class: "input-primary dark dropdown-sized",
                        },
                        null,
                        512
                      ),
                      [[Ce, i.value.damage]]
                    ),
                  ]),
                  e("div", gu, [
                    hu,
                    le(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[2] || (f[2] = (R) => (i.value.criticalRange = R)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[Ce, i.value.criticalRange]]
                    ),
                  ]),
                  e("div", fu, [
                    bu,
                    le(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[3] || (f[3] = (R) => (i.value.criticalMult = R)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[Ce, i.value.criticalMult]]
                    ),
                  ]),
                ]),
                e("div", Cu, [
                  e("div", Au, [
                    qu,
                    le(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[4] || (f[4] = (R) => (i.value.attackBonus = R)),
                          type: "number",
                          class: "input-primary dark dropdown-sized",
                        },
                        null,
                        512
                      ),
                      [[Ce, i.value.attackBonus]]
                    ),
                  ]),
                  e("div", yu, [
                    $u,
                    A(
                      $e,
                      {
                        value: i.value.damageType,
                        options: l,
                        width: "7.5rem",
                        "content-width": "7.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[5] || (f[5] = (R) => (i.value.damageType = R)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", Eu, [
                  e("div", Iu, [
                    ku,
                    A(
                      $e,
                      {
                        value: i.value.range,
                        options: p,
                        width: "6.5rem",
                        "content-width": "6.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[6] || (f[6] = (R) => (i.value.range = R)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Su, [
                    _u,
                    A(
                      $e,
                      {
                        value: i.value.skillUsed,
                        options: c,
                        width: "6.5rem",
                        "content-width": "6.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[7] || (f[7] = (R) => (i.value.skillUsed = R)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Pu, [
                    Mu,
                    A(
                      $e,
                      {
                        value: i.value.damageAttribute,
                        options: m,
                        width: "7.5rem",
                        "content-width": "7.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[8] || (f[8] = (R) => (i.value.damageAttribute = R)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", Ru, [
                  Du,
                  e(
                    "button",
                    {
                      class: "button-secondary",
                      onClick: f[9] || (f[9] = (R) => o()),
                    },
                    " Adicionar "
                  ),
                ]),
                (t(!0),
                s(
                  x,
                  null,
                  W(
                    i.value.aditionalDamage,
                    (R) => (
                      t(),
                      s("div", { key: R.id }, [
                        e("div", Tu, [
                          e("div", Vu, [
                            wu,
                            le(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": (N) => (R.value = N),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                Ou
                              ),
                              [[Ce, R.value]]
                            ),
                          ]),
                          e("div", zu, [
                            Hu,
                            A(
                              $e,
                              {
                                value: R.damageType,
                                options: l,
                                width: "7.5rem",
                                "content-width": "7.5rem",
                                "form-input": "",
                                onUpdateValue: (N) => (R.damageType = N),
                              },
                              null,
                              8,
                              ["value", "onUpdateValue"]
                            ),
                          ]),
                          e("div", ju, [
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: (N) => u(R.id),
                              },
                              " Remover ",
                              8,
                              Uu
                            ),
                          ]),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
                xu,
                A(
                  y,
                  {
                    modelValue: i.value.description,
                    "onUpdate:modelValue":
                      f[10] || (f[10] = (R) => (i.value.description = R)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: Ee(() => [Nu]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", Lu, [
                e(
                  "button",
                  { class: "button-cancel", onClick: C },
                  " Cancelar "
                ),
                e(
                  "button",
                  {
                    class: "button-primary big",
                    disabled: r.value,
                    onClick: _,
                  },
                  O(v.addMode ? "Adicionar" : "Editar"),
                  9,
                  Bu
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  }),
  Jo = T(Fu, [["__scopeId", "data-v-1356c67e"]]),
  Yo = (a) => (z("data-v-6ad99d7a"), (a = a()), H(), a),
  Qu = { class: "modal-content modal-width" },
  Wu = { class: "modal-header" },
  Gu = Yo(() => e("h2", null, "Editar", -1)),
  Xu = Yo(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Ku = [Xu],
  Ju = { class: "modal-body modal-height" },
  Yu = { key: 0 },
  Zu = { key: 1 },
  ec = { key: 2 },
  ac = { key: 3 },
  oc = { key: 0 },
  tc = { key: 1 },
  sc = { key: 2 },
  nc = { key: 3 },
  rc = D({
    __name: "EditModal",
    props: {
      currentEditOption: { type: Number, required: !0 },
      editPower: { type: Object, default: Ho },
      editRitual: { type: Object, default: jo },
      editItem: { type: Object, required: !0 },
      editAttack: { type: Object, default: _e },
    },
    emits: [
      "handleCloseModal",
      "handleEditPowerSheet",
      "handleEditRitualSheet",
      "handleEditItemSheet",
      "handleEditAttackSheet",
    ],
    setup(a, { emit: b }) {
      const v = b,
        g = { power: 0, ritual: 1, item: 2, attack: 3 },
        l = (i) => v("handleEditPowerSheet", i.power),
        p = (i) => v("handleEditRitualSheet", i.ritual),
        c = (i) => v("handleEditItemSheet", i.item),
        m = (i) => v("handleEditAttackSheet", i.attack);
      return (i, r) => (
        t(),
        s("div", Qu, [
          e("div", Wu, [
            Gu,
            e(
              "button",
              { onClick: r[0] || (r[0] = (o) => i.$emit("handleCloseModal")) },
              Ku
            ),
          ]),
          e("div", Ju, [
            a.currentEditOption === g.power
              ? (t(),
                s("div", Yu, [
                  A(
                    To,
                    {
                      power: a.editPower,
                      edit: "",
                      sheet: "",
                      onHandleEditPower: l,
                      onHandleClose:
                        r[1] || (r[1] = (o) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === g.ritual
              ? (t(),
                s("div", Zu, [
                  A(
                    Vo,
                    {
                      ritual: a.editRitual,
                      edit: "",
                      sheet: "",
                      onHandleEditRitual: p,
                      onHandleClose:
                        r[2] || (r[2] = (o) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === g.attack
              ? (t(),
                s("div", ec, [
                  A(
                    Jo,
                    {
                      attack: a.editAttack,
                      onHandleEditAttack: m,
                      onHandleClose:
                        r[3] || (r[3] = (o) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === g.item
              ? (t(),
                s("div", ac, [
                  a.editItem.itemType === "weapon"
                    ? (t(),
                      s("div", oc, [
                        A(
                          wo,
                          {
                            weapon: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditWeapon: c,
                            onHandleClose:
                              r[4] ||
                              (r[4] = (o) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["weapon"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "protection"
                    ? (t(),
                      s("div", tc, [
                        A(
                          Oo,
                          {
                            protection: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditProtection: c,
                            onHandleClose:
                              r[5] ||
                              (r[5] = (o) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["protection"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "misc" ||
                  a.editItem.itemType === "ammunition"
                    ? (t(),
                      s("div", sc, [
                        A(
                          ia,
                          {
                            misc: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditMisc: c,
                            onHandleClose:
                              r[6] ||
                              (r[6] = (o) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["misc"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "cursedItem"
                    ? (t(),
                      s("div", nc, [
                        A(
                          zo,
                          {
                            "cursed-item": a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditCursedItem: c,
                            onHandleClose:
                              r[7] ||
                              (r[7] = (o) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["cursed-item"]
                        ),
                      ]))
                    : q("", !0),
                ]))
              : q("", !0),
          ]),
        ])
      );
    },
  }),
  dc = T(rc, [["__scopeId", "data-v-6ad99d7a"]]),
  Fe = (a) => (z("data-v-6cd98f8c"), (a = a()), H(), a),
  ic = { key: 0, class: "row" },
  lc = Fe(() =>
    e("div", { class: "label" }, " Classe para cálculo de atributos ", -1)
  ),
  uc = { class: "row" },
  cc = Fe(() =>
    e(
      "div",
      { class: "label" },
      [
        ne(" Ficha privada "),
        e(
          "div",
          { class: "label-obs" },
          " Apenas você e o mestre da campanha poderão visualizar a ficha. A ficha ainda aparece no Escudo do Mestre para outros jogadores "
        ),
      ],
      -1
    )
  ),
  mc = { class: "row" },
  pc = Fe(() =>
    e(
      "div",
      { class: "label" },
      " Permitir que o Mestre da campanha edite minha ficha ",
      -1
    )
  ),
  vc = { class: "row" },
  gc = Fe(() =>
    e(
      "div",
      { class: "label" },
      [
        ne(" Permitir que qualquer pessoa edite minha ficha "),
        e(
          "div",
          { class: "label-obs" },
          " Atenção: com essa opção ligada qualquer pessoa pode editar sua ficha. É recomendado deixar essa opção ligada por apenas um curto período de tempo "
        ),
      ],
      -1
    )
  ),
  hc = D({
    __name: "SheetConfig",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleChangeStatsClass", "handleChangeEditPermissions"],
    setup(a, { emit: b }) {
      const v = b,
        g = ["DESLIGADO", "LIGADO"],
        l = ["Combatente", "Especialista", "Ocultista"],
        p = (m) => {
          v("handleChangeStatsClass", m);
        },
        c = (m, i) => {
          v("handleChangeEditPermissions", m, i);
        };
      return (m, i) => (
        t(),
        s(
          x,
          null,
          [
            a.character.statsClass !== "Mundane"
              ? (t(),
                s("div", ic, [
                  lc,
                  A(
                    $e,
                    {
                      value: a.character.statsClass,
                      options: l,
                      width: "7.5rem",
                      "content-width": "7.5rem",
                      "form-input": "",
                      onUpdateValue: p,
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : q("", !0),
            e("div", uc, [
              cc,
              A(
                ra,
                {
                  value: a.character.private,
                  options: g,
                  onHandleChange: i[0] || (i[0] = (r) => c("private", r)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", mc, [
              pc,
              A(
                ra,
                {
                  value: a.character.canDMEdit,
                  options: g,
                  onHandleChange: i[1] || (i[1] = (r) => c("canDMEdit", r)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", vc, [
              gc,
              A(
                ra,
                {
                  value: a.character.canAnyoneEdit,
                  options: g,
                  onHandleChange: i[2] || (i[2] = (r) => c("canAnyoneEdit", r)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
          ],
          64
        )
      );
    },
  }),
  fc = T(hc, [["__scopeId", "data-v-6cd98f8c"]]),
  te = (a) => (z("data-v-b60fbd74"), (a = a()), H(), a),
  bc = { class: "row" },
  Cc = ["onMouseup"],
  Ac = te(() => e("img", { src: _s }, null, -1)),
  qc = te(() =>
    e(
      "div",
      { class: "link-eg" },
      " É recomendado colocar uma resoluçaõ de 3400x1200 no OBS. Podendo ser ajustado de acordo com a necessidade. ",
      -1
    )
  ),
  yc = { class: "row" },
  $c = te(() =>
    e("div", { class: "label" }, " Cor do resultado dos dados ", -1)
  ),
  Ec = ["value"],
  Ic = { class: "row" },
  kc = te(() =>
    e("div", { class: "label" }, " Cor da borda do resultado dos dados ", -1)
  ),
  Sc = ["value"],
  _c = { class: "row" },
  Pc = te(() =>
    e("div", { class: "label" }, " Imagem de agente machucado ", -1)
  ),
  Mc = { key: 0 },
  Rc = ["src"],
  Dc = { key: 1 },
  Tc = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Re, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Vc = [Tc],
  wc = { class: "row" },
  Oc = te(() =>
    e("div", { class: "label" }, " Imagem de agente morrendo ", -1)
  ),
  zc = { key: 0 },
  Hc = ["src"],
  jc = { key: 1 },
  Uc = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Re, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  xc = [Uc],
  Nc = { class: "row" },
  Lc = te(() =>
    e("div", { class: "label" }, " Imagem de agente perturbado ", -1)
  ),
  Bc = { key: 0 },
  Fc = ["src"],
  Qc = { key: 1 },
  Wc = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Re, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Gc = [Wc],
  Xc = { class: "row" },
  Kc = te(() =>
    e("div", { class: "label" }, " Imagem de agente enlouquecendo ", -1)
  ),
  Jc = { key: 0 },
  Yc = ["src"],
  Zc = { key: 1 },
  em = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Re, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  am = [em],
  om = { key: 0 },
  tm = D({
    __name: "StreamConfig",
    props: { character: { type: Object, required: !0 } },
    emits: [
      "handleUpdateAlternativePicture",
      "handleChangeCharResultDiceColor",
      "handleChangeCharResultDiceBorderColor",
    ],
    setup(a, { emit: b }) {
      const v = a,
        g = b,
        l = E(!1),
        p = E(),
        c = (r) => {
          (p.value = r), (l.value = !l.value);
        },
        m = (r, o) => {
          (l.value = !l.value),
            g("handleUpdateAlternativePicture", p.value, r, o);
        },
        i = () => {
          window.open(
            "https://crisordemparanormal.com/agente/stream/" + v.character.id
          );
        };
      return (r, o) => {
        const u = ua("vue-final-modal");
        return (
          t(),
          s(
            x,
            null,
            [
              e("div", bc, [
                e(
                  "div",
                  { class: "link", onClick: i, onMouseup: St(i, ["middle"]) },
                  [ne(" Acessar portrait do OBS "), Ac],
                  40,
                  Cc
                ),
                qc,
              ]),
              e("div", yc, [
                $c,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: a.character.resultDiceColor || "#fff",
                    onBlur:
                      o[0] ||
                      (o[0] = (C) =>
                        r.$emit("handleChangeCharResultDiceColor", C)),
                  },
                  null,
                  40,
                  Ec
                ),
              ]),
              e("div", Ic, [
                kc,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: a.character.resultDiceBorderColor || "#A347FF",
                    onBlur:
                      o[1] ||
                      (o[1] = (C) =>
                        r.$emit("handleChangeCharResultDiceBorderColor", C)),
                  },
                  null,
                  40,
                  Sc
                ),
              ]),
              e("div", _c, [
                Pc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[2] || (o[2] = (C) => c("hurt")),
                  },
                  [
                    a.character.sheetPictureHurtURL
                      ? (t(),
                        s("div", Mc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureHurtURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Rc
                          ),
                        ]))
                      : (t(), s("div", Dc, Vc)),
                  ]
                ),
              ]),
              e("div", wc, [
                Oc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[3] || (o[3] = (C) => c("dying")),
                  },
                  [
                    a.character.sheetPictureDyingURL
                      ? (t(),
                        s("div", zc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureDyingURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Hc
                          ),
                        ]))
                      : (t(), s("div", jc, xc)),
                  ]
                ),
              ]),
              e("div", Nc, [
                Lc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[4] || (o[4] = (C) => c("disturbed")),
                  },
                  [
                    a.character.sheetPictureDisturbedURL
                      ? (t(),
                        s("div", Bc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureDisturbedURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Fc
                          ),
                        ]))
                      : (t(), s("div", Qc, Gc)),
                  ]
                ),
              ]),
              e("div", Xc, [
                Kc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[5] || (o[5] = (C) => c("crazy")),
                  },
                  [
                    a.character.sheetPictureCrazyURL
                      ? (t(),
                        s("div", Jc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureCrazyURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Yc
                          ),
                        ]))
                      : (t(), s("div", Zc, am)),
                  ]
                ),
              ]),
              l.value
                ? (t(),
                  s("div", om, [
                    A(
                      u,
                      {
                        modelValue: l.value,
                        "onUpdate:modelValue":
                          o[7] || (o[7] = (C) => (l.value = C)),
                        classes: "modal-container",
                      },
                      {
                        default: Ee(() => [
                          A(xo, {
                            onHandleCloseModal:
                              o[6] || (o[6] = (C) => (l.value = !l.value)),
                            onHandleUpdatePicture: m,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : q("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  sm = T(tm, [["__scopeId", "data-v-b60fbd74"]]),
  Zo = (a) => (z("data-v-78a9772d"), (a = a()), H(), a),
  nm = { class: "modal-content modal-width" },
  rm = { class: "modal-header" },
  dm = Zo(() => e("h2", null, "Configurações", -1)),
  im = Zo(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  lm = [im],
  um = { class: "modal-body modal-height" },
  cm = { key: 0, class: "content-container" },
  mm = { key: 1, class: "content-container" },
  pm = D({
    __name: "ConfigModal",
    props: { character: { type: Object, required: !0 } },
    emits: [
      "handleChangeStatsClass",
      "handleCloseModal",
      "handleUpdateAlternativePicture",
      "handleChangeCharResultDiceColor",
      "handleChangeCharResultDiceBorderColor",
      "handleChangeEditPermissions",
    ],
    setup(a, { emit: b }) {
      const v = b,
        g = [
          { label: "Ficha", value: 0 },
          { label: "Stream", value: 1 },
        ],
        l = E(0),
        p = (i) => {
          v("handleChangeStatsClass", i);
        },
        c = (i, r, o) => {
          v("handleUpdateAlternativePicture", i, r, o);
        },
        m = (i, r) => {
          v("handleChangeEditPermissions", i, r);
        };
      return (i, r) => (
        t(),
        s("div", nm, [
          e("div", rm, [
            dm,
            e(
              "button",
              { onClick: r[0] || (r[0] = (o) => i.$emit("handleCloseModal")) },
              lm
            ),
          ]),
          e("div", um, [
            A(
              ve,
              {
                "current-tab": l.value,
                "tab-options": g,
                onHandleNavigation: r[1] || (r[1] = (o) => (l.value = o)),
              },
              null,
              8,
              ["current-tab"]
            ),
            l.value === 0
              ? (t(),
                s("div", cm, [
                  A(
                    fc,
                    {
                      character: a.character,
                      onHandleChangeStatsClass: p,
                      onHandleChangeEditPermissions: m,
                    },
                    null,
                    8,
                    ["character"]
                  ),
                ]))
              : q("", !0),
            l.value === 1
              ? (t(),
                s("div", mm, [
                  A(
                    sm,
                    {
                      character: a.character,
                      onHandleUpdateAlternativePicture: c,
                      onHandleChangeCharResultDiceColor:
                        r[2] ||
                        (r[2] = (o) =>
                          i.$emit("handleChangeCharResultDiceColor", o)),
                      onHandleChangeCharResultDiceBorderColor:
                        r[3] ||
                        (r[3] = (o) =>
                          i.$emit("handleChangeCharResultDiceBorderColor", o)),
                    },
                    null,
                    8,
                    ["character"]
                  ),
                ]))
              : q("", !0),
          ]),
        ])
      );
    },
  }),
  vm = T(pm, [["__scopeId", "data-v-78a9772d"]]),
  fa = (a) => (z("data-v-e8d7dd12"), (a = a()), H(), a),
  gm = { class: "modal-content modal-width" },
  hm = { class: "modal-header" },
  fm = fa(() => e("h2", null, "Escolher nova classe", -1)),
  bm = fa(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Cm = [bm],
  Am = { class: "modal-body modal-height" },
  qm = { class: "content-container" },
  ym = fa(() =>
    e(
      "div",
      { class: "add-class-description" },
      " Para aumentar seu NEX, escolha uma nova classe ",
      -1
    )
  ),
  $m = { class: "classes-container" },
  Em = { class: "classes-flex" },
  Im = D({
    __name: "AddClassModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal", "handleAddClass"],
    setup(a, { emit: b }) {
      const v = b,
        g = (l) => v("handleAddClass", l);
      return (l, p) => (
        t(),
        s("div", gm, [
          e("div", hm, [
            fm,
            e(
              "button",
              { onClick: p[0] || (p[0] = (c) => l.$emit("handleCloseModal")) },
              Cm
            ),
          ]),
          e("div", Am, [
            e("div", qm, [
              ym,
              e("div", $m, [
                e("div", Em, [
                  (t(!0),
                  s(
                    x,
                    null,
                    W(
                      Y(He),
                      (c) => (
                        t(),
                        s("div", { key: c.name }, [
                          A(
                            bs,
                            { "char-class": c, onHandleAddClass: g },
                            null,
                            8,
                            ["char-class"]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  km = T(Im, [["__scopeId", "data-v-e8d7dd12"]]),
  Sm = (a) => (z("data-v-be964fd1"), (a = a()), H(), a),
  _m = { class: "modal-content modal-width" },
  Pm = { class: "modal-header" },
  Mm = Sm(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Rm = [Mm],
  Dm = { class: "modal-body modal-height" },
  Tm = { key: 0 },
  Vm = { key: 1 },
  wm = { key: 2 },
  Om = { key: 3 },
  zm = { key: 4 },
  Hm = { key: 5 },
  jm = { key: 6 },
  Um = { key: 7 },
  xm = D({
    __name: "AddModal",
    props: { currentAddOption: { type: Number, required: !0 } },
    emits: [
      "handleCloseModal",
      "handleAddAttack",
      "handleAddPower",
      "handleAddRitual",
      "handleAddItem",
    ],
    setup(a, { emit: b }) {
      const v = b,
        g = {
          attack: 0,
          power: 1,
          ritual: 2,
          weapon: 3,
          ammunition: 4,
          protection: 5,
          misc: 6,
          cursedItem: 7,
        },
        l = [
          "Novo Ataque",
          "Nova Habilidade",
          "Novo Ritual",
          "Nova Arma",
          "Nova Munição",
          "Nova Proteção",
          "Novo Item",
          "Novo Item Amaldiçoado",
        ],
        p = (r) => v("handleAddAttack", r.attack),
        c = (r) => v("handleAddPower", r.power),
        m = (r) => v("handleAddRitual", r.ritual),
        i = (r) => v("handleAddItem", r.item);
      return (r, o) => (
        t(),
        s("div", _m, [
          e("div", Pm, [
            e("h2", null, O(l[a.currentAddOption]), 1),
            e(
              "button",
              { onClick: o[0] || (o[0] = (u) => r.$emit("handleCloseModal")) },
              Rm
            ),
          ]),
          e("div", Dm, [
            a.currentAddOption === g.attack
              ? (t(),
                s("div", Tm, [
                  A(
                    Jo,
                    {
                      attack: Y(_e),
                      "add-mode": "",
                      onHandleEditAttack: p,
                      onHandleClose:
                        o[1] || (o[1] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === g.power
              ? (t(),
                s("div", Vm, [
                  A(
                    To,
                    {
                      power: Y(Ho),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditPower: c,
                      onHandleClose:
                        o[2] || (o[2] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === g.ritual
              ? (t(),
                s("div", wm, [
                  A(
                    Vo,
                    {
                      ritual: Y(jo),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditRitual: m,
                      onHandleClose:
                        o[3] || (o[3] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === g.weapon
              ? (t(),
                s("div", Om, [
                  A(
                    wo,
                    {
                      weapon: Y(ys),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditWeapon: i,
                      onHandleClose:
                        o[4] || (o[4] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["weapon"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === g.ammunition
              ? (t(),
                s("div", zm, [
                  A(
                    ia,
                    {
                      misc: Y($s),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: i,
                      onHandleClose:
                        o[5] || (o[5] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === g.protection
              ? (t(),
                s("div", Hm, [
                  A(
                    Oo,
                    {
                      protection: Y(Es),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditProtection: i,
                      onHandleClose:
                        o[6] || (o[6] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["protection"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === g.misc
              ? (t(),
                s("div", jm, [
                  A(
                    ia,
                    {
                      misc: Y(Is),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: i,
                      onHandleClose:
                        o[7] || (o[7] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === g.cursedItem
              ? (t(),
                s("div", Um, [
                  A(
                    zo,
                    {
                      "cursed-item": Y(ks),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditCursedItem: i,
                      onHandleClose:
                        o[8] || (o[8] = (u) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["cursed-item"]
                  ),
                ]))
              : q("", !0),
          ]),
        ])
      );
    },
  }),
  Nm = T(xm, [["__scopeId", "data-v-be964fd1"]]),
  ba = (a) => (z("data-v-15adeee7"), (a = a()), H(), a),
  Lm = { class: "modal-content modal-width" },
  Bm = { class: "modal-header" },
  Fm = ba(() => e("h2", null, "Compartilhar", -1)),
  Qm = ba(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Wm = [Qm],
  Gm = ba(() =>
    e("div", { class: "label" }, " Link para compartilhar agente ", -1)
  ),
  Xm = D({
    __name: "ShareModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal"],
    setup(a) {
      const v = "https://crisordemparanormal.com/agente/" + a.character.id;
      return (g, l) => (
        t(),
        s("div", Lm, [
          e("div", Bm, [
            Fm,
            e(
              "button",
              { onClick: l[0] || (l[0] = (p) => g.$emit("handleCloseModal")) },
              Wm
            ),
          ]),
          e("div", { class: "modal-body modal-height" }, [
            e("div", { class: "share-container" }, [
              Gm,
              e("div", { class: "value" }, O(v)),
            ]),
          ]),
        ])
      );
    },
  }),
  Km = T(Xm, [["__scopeId", "data-v-15adeee7"]]),
  Jm =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAnUlEQVQ4jd3QsQ2CYBRF4X8A2QArE0ZgDyqXYA1bJ6BmABtqtrAzFtIREkuaz8pEBZGEWOjp3ss9ybsvhD9GrNRolOJ58daddoaiRCUWq1CORfAwXbAOIQRrXL4gTJ3khY+lx4QZb30+aQaLBBu5g6Mrzg5ym/diqn5tBWrpWDzTo1PYSqysJLYKHXrZUDhhLxrsIzucRptMsVz4SW5d6iOF5C1O7AAAAABJRU5ErkJggg==",
  et =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABIUlEQVQ4y8XTvS6DARTG8YOEpWNJ8HbFgM0g4ipsBjfRxAV0MnakW5OquIKmw8vUiIWkl9DkrcnuY/gZ0E+kDYlnPDn/5JznPCfiH6ToU8XJgFoPqE0G3GLXPm6/b5qRajqwqOwVect4VbboQFNqZhg40tez84gIl14GqkeD7TkZKtpIrfXqG65x5wyZXB8ooWs+wrZZibqurrrEnM0ICx5Q6gOHntCyEiHx2BvjURJhRQtPDgeH2tFBNUIdDYlEA/UIVXTsjPp0jJMIGQoREQrIIpzgeNzY6YApR/pY+sbqhEsP2Lo1Yuus7QjzusO2vh/u1D2urPfqa1K0VUYONxKNFxcREc49fxONL8K3JP9j+MbivWf3x3j/7oGmfdE/1huxmbTYvNt7qgAAAABJRU5ErkJggg==",
  Te = (a) => (z("data-v-4cd2147d"), (a = a()), H(), a),
  Ym = { class: "sheet-tools-container" },
  Zm = { key: 0 },
  ep = { key: 0 },
  ap = { key: 0, class: "added-info" },
  op = { key: 1 },
  tp = Te(() => e("img", { src: Jm, alt: "adicionar" }, null, -1)),
  sp = [tp],
  np = { key: 1, class: "sheet-tools-mobile-container" },
  rp = { key: 0, class: "sheet-tools-buttons-container" },
  dp = Te(() => e("img", { src: Uo, alt: "compartilhar" }, null, -1)),
  ip = [dp],
  lp = Te(() => e("img", { src: et, alt: "configurações" }, null, -1)),
  up = [lp],
  cp = { key: 1, class: "share-mobile-container" },
  mp = Te(() => e("img", { src: Uo, alt: "compartilhar" }, null, -1)),
  pp = [mp],
  vp = Te(() => e("img", { src: et, alt: "configurações" }, null, -1)),
  gp = [vp],
  hp = D({
    __name: "SheetTools",
    props: { disabledSheet: Boolean, charAdded: Boolean },
    emits: [
      "handleShareSheet",
      "handleAddAgent",
      "handleOpenConfig",
      "handleOpenShareModal",
    ],
    setup(a, { emit: b }) {
      const v = b,
        g = So(),
        l = E(window.innerWidth),
        p = () => {
          v("handleShareSheet");
        },
        c = () => {
          v("handleAddAgent");
        };
      return (
        Ae(() => {
          window.addEventListener("resize", () => {
            l.value = window.innerWidth;
          });
        }),
        (m, i) => (
          t(),
          s("div", Ym, [
            a.disabledSheet
              ? (t(),
                s("div", Zm, [
                  Y(g).currentUser
                    ? (t(),
                      s("div", ep, [
                        a.charAdded
                          ? (t(),
                            s("div", ap, " Agente adicionado a sua coleção! "))
                          : (t(),
                            s("div", op, [
                              e(
                                "button",
                                {
                                  class: "button-naked share-button",
                                  onClick: c,
                                },
                                sp
                              ),
                            ])),
                      ]))
                    : q("", !0),
                ]))
              : (t(),
                s("div", np, [
                  l.value >= 1023
                    ? (t(),
                      s("div", rp, [
                        e(
                          "button",
                          { class: "button-naked share-button", onClick: p },
                          ip
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[0] ||
                              (i[0] = (r) => m.$emit("handleOpenConfig")),
                          },
                          up
                        ),
                      ]))
                    : (t(),
                      s("div", cp, [
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[1] ||
                              (i[1] = (r) => m.$emit("handleOpenShareModal")),
                          },
                          pp
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[2] ||
                              (i[2] = (r) => m.$emit("handleOpenConfig")),
                          },
                          gp
                        ),
                      ])),
                ])),
          ])
        )
      );
    },
  }),
  $o = T(hp, [["__scopeId", "data-v-4cd2147d"]]),
  Qe = (a) => (z("data-v-552e0b49"), (a = a()), H(), a),
  fp = { class: "sheet-header-container" },
  bp = { class: "profile-picture-container" },
  Cp = ["disabled"],
  Ap = { key: 0 },
  qp = ["src"],
  yp = { key: 1 },
  $p = { class: "header-info-container" },
  Ep = { class: "header-info-row" },
  Ip = { class: "info-line" },
  kp = Qe(() => e("h3", null, "PERSONAGEM", -1)),
  Sp = ["disabled", "value"],
  _p = { class: "info-line" },
  Pp = Qe(() => e("h3", null, "JOGADOR", -1)),
  Mp = ["disabled", "value"],
  Rp = { class: "header-info-row" },
  Dp = { class: "info-line" },
  Tp = Qe(() => e("h3", null, "ORIGEM", -1)),
  Vp = ["disabled", "value"],
  wp = { class: "info-line" },
  Op = Qe(() => e("h3", null, "CLASSE", -1)),
  zp = ["disabled", "value"],
  Hp = D({
    __name: "SheetHeader",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeCharHeaderText", "handleOpenChangePictureModal"],
    setup(a) {
      return (b, v) => (
        t(),
        s("div", fp, [
          e("div", bp, [
            e(
              "button",
              {
                class: "button-naked",
                disabled: b.disabledSheet,
                onClick:
                  v[0] ||
                  (v[0] = (g) => b.$emit("handleOpenChangePictureModal")),
              },
              [
                b.character.sheetPictureURL
                  ? (t(),
                    s("div", Ap, [
                      e(
                        "img",
                        {
                          class: Z([
                            "profile-picture",
                            { "disabled-picture": b.disabledSheet },
                          ]),
                          src: b.character.sheetPictureURL,
                          alt: "foto agente",
                        },
                        null,
                        10,
                        qp
                      ),
                    ]))
                  : (t(),
                    s("div", yp, [
                      e(
                        "img",
                        {
                          class: Z([
                            "profile-picture",
                            { "disabled-picture": b.disabledSheet },
                          ]),
                          src: Re,
                          alt: "foto agente em branco",
                        },
                        null,
                        2
                      ),
                    ])),
              ],
              8,
              Cp
            ),
          ]),
          e("div", $p, [
            e("div", Ep, [
              e("div", Ip, [
                kp,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: b.disabledSheet,
                    value: b.character.name,
                    onBlur:
                      v[1] ||
                      (v[1] = (g) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: g,
                          key: "name",
                        })),
                  },
                  null,
                  40,
                  Sp
                ),
              ]),
              e("div", _p, [
                Pp,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: b.disabledSheet,
                    value: b.character.player,
                    onBlur:
                      v[2] ||
                      (v[2] = (g) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: g,
                          key: "player",
                        })),
                  },
                  null,
                  40,
                  Mp
                ),
              ]),
            ]),
            e("div", Rp, [
              e("div", Dp, [
                Tp,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: b.disabledSheet,
                    value: b.character.backgroundName,
                    onBlur:
                      v[3] ||
                      (v[3] = (g) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: g,
                          key: "backgroundName",
                        })),
                  },
                  null,
                  40,
                  Vp
                ),
              ]),
              e("div", wp, [
                Op,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: b.disabledSheet,
                    value: b.character.className,
                    onBlur:
                      v[4] ||
                      (v[4] = (g) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: g,
                          key: "className",
                        })),
                  },
                  null,
                  40,
                  zp
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Eo = T(Hp, [["__scopeId", "data-v-552e0b49"]]),
  at =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAYElEQVQ4y9WTwQmAQAwEtzvtwHIsVfDKUDM+T0FJIqfgvmfIPjbSJ6Gj4KXQV2EikrkKK7gtODBsD4W7Lu2EX1ey6wvthXSllMDAEh+fgYuf5m0AjPEHyuFSEpeS+MvZAZYijOCBAmQvAAAAAElFTkSuQmCC",
  ot = (a) => (z("data-v-0ff44915"), (a = a()), H(), a),
  jp = { class: "campaign-log-container" },
  Up = ot(() => e("img", { src: at, alt: "log" }, null, -1)),
  xp = [Up],
  Np = ot(() => e("div", { class: "campaign-label" }, " Campaign: ", -1)),
  Lp = { class: "campaign-title" },
  Bp = D({
    __name: "SheetCampaign",
    props: { campaign: {}, campaignLog: {}, disabledSheet: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(a) {
      const b = a,
        g = "https://crisordemparanormal.com/" + "campanha/" + b.campaign.id,
        l = E(window.innerWidth);
      Ae(() => {
        window.addEventListener("resize", () => {
          l.value = window.innerWidth;
        });
      });
      const p = () => {
        b.disabledSheet || window.open(g, "_blank");
      };
      return (c, m) => {
        var i;
        return (
          t(),
          s("div", jp, [
            l.value >= 1023
              ? (t(),
                s(
                  "button",
                  {
                    key: 0,
                    class: "campaign-log-button",
                    onClick:
                      m[0] || (m[0] = (r) => c.$emit("handleOpenCampaignLog")),
                  },
                  xp
                ))
              : q("", !0),
            e(
              "a",
              {
                class: Z([
                  "campaign-nav-link",
                  { "campaign-nav-link-disabled": c.disabledSheet },
                ]),
                onClick: p,
              },
              [
                Np,
                e("div", Lp, O((i = c.campaign) == null ? void 0 : i.name), 1),
              ],
              2
            ),
          ])
        );
      };
    },
  }),
  Io = T(Bp, [["__scopeId", "data-v-0ff44915"]]),
  Fp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAHUlEQVQ4y2NgGEbgPxTgYw92DaOhNBpKQyeUaAYAFbUe8L2r+g4AAAAASUVORK5CYII=",
  tt = (a) => (z("data-v-b0056160"), (a = a()), H(), a),
  Qp = tt(() =>
    e("img", { class: "apps-img", src: Fp, alt: "fechar" }, null, -1)
  ),
  Wp = [Qp],
  Gp = tt(() =>
    e("img", { class: "apps-img", src: oe, alt: "fechar" }, null, -1)
  ),
  Xp = [Gp],
  Kp = { class: "apps-options" },
  Jp = ["onClick"],
  Yp = D({
    __name: "SheetMobileNav",
    emits: ["handleMobileNav"],
    setup(a) {
      const b = E(!1),
        v = [
          "INFORMAÇÕES",
          "DESCRIÇÃO",
          "ATRIBUTOS",
          "PERÍCIAS",
          "COMBATE",
          "INVENTÁRIO",
          "HABILIDADES",
          "RITUAIS",
        ];
      return (g, l) => (
        t(),
        s(
          x,
          null,
          [
            b.value
              ? (t(),
                s(
                  "button",
                  {
                    key: 1,
                    class: "apps-button button-naked",
                    onClick: l[1] || (l[1] = (p) => (b.value = !b.value)),
                  },
                  Xp
                ))
              : (t(),
                s(
                  "button",
                  {
                    key: 0,
                    class: "apps-button button-naked",
                    onClick: l[0] || (l[0] = (p) => (b.value = !b.value)),
                  },
                  Wp
                )),
            b.value
              ? (t(),
                s(
                  "div",
                  {
                    key: 2,
                    class: "apps-container",
                    onClick: l[2] || (l[2] = (p) => (b.value = !b.value)),
                  },
                  [
                    e("div", Kp, [
                      (t(),
                      s(
                        x,
                        null,
                        W(v, (p, c) =>
                          e("div", { key: c }, [
                            e(
                              "button",
                              {
                                class: "nav-option-button",
                                onClick: (m) => g.$emit("handleMobileNav", c),
                              },
                              O(p),
                              9,
                              Jp
                            ),
                          ])
                        ),
                        64
                      )),
                    ]),
                  ]
                ))
              : q("", !0),
          ],
          64
        )
      );
    },
  }),
  Zp = T(Yp, [["__scopeId", "data-v-b0056160"]]),
  st = (a) => (z("data-v-f968449f"), (a = a()), H(), a),
  ev = st(() => e("img", { src: at, alt: "log" }, null, -1)),
  av = [ev],
  ov = st(() => e("img", { src: oe, alt: "close-log" }, null, -1)),
  tv = [ov],
  sv = D({
    __name: "SheetLogButtonMobile",
    props: { campaignLogOpen: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(a) {
      return (b, v) =>
        b.campaignLogOpen
          ? (t(),
            s(
              "button",
              {
                key: 1,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  v[1] || (v[1] = (g) => b.$emit("handleOpenCampaignLog")),
              },
              tv
            ))
          : (t(),
            s(
              "button",
              {
                key: 0,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  v[0] || (v[0] = (g) => b.$emit("handleOpenCampaignLog")),
              },
              av
            ));
    },
  }),
  nv = T(sv, [["__scopeId", "data-v-f968449f"]]),
  rv = (a) => (z("data-v-51d27b7c"), (a = a()), H(), a),
  dv = { key: 0 },
  iv = { key: 0, class: "private-sheet" },
  lv = rv(() => e("h1", null, "Ficha privada", -1)),
  uv = { key: 1 },
  cv = { key: 0 },
  mv = { class: "sheet-wrapper" },
  pv = { class: "sheet-header" },
  vv = { class: "character-sheet" },
  gv = { class: "sheet-stats" },
  hv = { class: "sheet-skills" },
  fv = { class: "sheet-tab" },
  bv = { key: 1 },
  Cv = { key: 0, class: "mobile-container" },
  Av = { key: 1, class: "mobile-container" },
  qv = { key: 2, class: "mobile-container" },
  yv = { key: 3, class: "mobile-container" },
  $v = { key: 4, class: "mobile-container" },
  Ev = { key: 5, class: "mobile-container" },
  Iv = { key: 6, class: "mobile-container" },
  kv = { key: 7, class: "mobile-container" },
  Sv = { key: 2 },
  _v = { key: 1 },
  Pv = D({
    __name: "CharacterSheet",
    setup(a) {
      const { play: b } = Ft(Gt),
        v = [gl, Hl, Zl, iu, dc, xo, vm, Km, km, Nm],
        g = {
          abilities: 0,
          inventory: 1,
          rituals: 2,
          skill: 3,
          edit: 4,
          picture: 5,
          config: 6,
          share: 7,
          addClass: 8,
          addModal: 9,
        },
        l = { power: 0, ritual: 1, item: 2, attack: 3 },
        p = {
          attack: 0,
          power: 1,
          ritual: 2,
          weapon: 3,
          ammunition: 4,
          protection: 5,
          misc: 6,
          cursedItem: 7,
        },
        c = So(),
        m = _t(),
        i = zt(),
        r = Pt(),
        o = Mt(),
        u = r.params.id,
        C = E(0),
        _ = E(!0),
        M = E(),
        f = E(),
        y = E(),
        R = E(),
        N = E(),
        ge = E(),
        n = E(Xt),
        k = E(0),
        $ = E(!0),
        w = E(!1),
        he = E(!1),
        I = E(!1),
        J = E(window.innerWidth),
        se = E(0),
        We = E(),
        qe = E(),
        j = E({ message: "", type: "", alive: !1, timeout: 0 }),
        fe = E({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        Ve = E({
          title: "",
          totalAttack: 0,
          totalDamage: 0,
          critical: 0,
          attackTooltip: "",
          damageTooltip: "",
          criticalTooltip: "",
          attackRollTooltip: "",
          damageRollTooltip: "",
          alive: !1,
        }),
        B = E(!1),
        F = E(0),
        ke = E(0),
        Ca = E(0),
        Aa = E();
      Ae(async () => {
        var S;
        window.addEventListener("resize", () => {
          J.value = window.innerWidth;
        });
        const d = await Ze(ie(m, "characters", u));
        d.data() || o.push({ name: "not-found" }),
          c.currentUser &&
            (k.value = await Ms((S = c.currentUser) == null ? void 0 : S.uid)),
          (n.value = d.data()),
          (n.value.id = d == null ? void 0 : d.id);
        let h = !1;
        if (
          (n.value.campaignDocId === void 0 &&
            ((n.value.campaignDocId = ""), (h = !0)),
          !n.value.currentItemsLimit)
        ) {
          const V = { I: 0, II: 0, III: 0, IV: 0 };
          (n.value.currentItemsLimit = V), (h = !0);
        }
        if (
          (n.value.peTurn || ((n.value.peTurn = Qt[n.value.nex]), (h = !0)),
          n.value.deathMarks === void 0 &&
            ((n.value.deathMarks = [!1, !1, !1]),
            (n.value.madnessMarks = [!1, !1, !1]),
            (n.value.deathMode = !1),
            (n.value.madnessMode = !1),
            (h = !0)),
          n.value.sheetPictureURL ||
            ((n.value.sheetPictureURL = ""),
            (n.value.sheetPictureFullPath = ""),
            (h = !0)),
          n.value.campaignDocId === void 0 &&
            ((n.value.campaignDocId = ""), (h = !0)),
          n.value.statsClass ||
            (n.value.className === "Combatente" ||
            n.value.className === "Especialista" ||
            n.value.className === "Ocultista"
              ? (n.value.statsClass = n.value.className)
              : (n.value.statsClass = "Combatente"),
            (h = !0)),
          n.value.description.anotation ||
            ((n.value.description.anotation = ""), (h = !0)),
          n.value.canDMEdit === void 0 && ((n.value.canDMEdit = !0), (h = !0)),
          n.value.canAnyoneEdit === void 0 &&
            ((n.value.canAnyoneEdit = !1), (h = !0)),
          n.value.private === void 0 && ((n.value.private = !1), (h = !0)),
          (n.value.block === void 0 || n.value.block === null) &&
            ((n.value.block = n.value.skills[9].bonus), (h = !0)),
          (n.value.evade === void 0 || n.value.evade === null) &&
            ((n.value.evade =
              10 +
              n.value.attributes.dex +
              n.value.protectionDefense +
              n.value.bonusDefense +
              n.value.skills[22].bonus),
            (h = !0)),
          n.value.resistencias === void 0 &&
            ((n.value.resistencias = {}), (h = !0)),
          n.value.imunidades === void 0 &&
            ((n.value.imunidades = []), (h = !0)),
          n.value.vulnerabilidades === void 0 &&
            ((n.value.vulnerabilidades = []), (h = !0)),
          h && (await ea(ie(m, "characters", n.value.id), n.value)),
          n.value.campaignDocId)
        ) {
          const V = await Ze(ie(m, "campaigns", n.value.campaignDocId));
          V.data() &&
            ((M.value = V.data()),
            (M.value.id = V.id),
            (qe.value = aa(
              ie(m, "campaignLogs", M.value.campaignLogId),
              (U) => {
                U.data() &&
                  ((f.value = U.data()),
                  (f.value.id = U.id),
                  C.value < 2 && C.value++);
              }
            )));
        }
        We.value = aa(ie(m, "characters", u), (V) => {
          var U, re, de, ye;
          V.data() || o.push({ name: "not-found" }),
            (n.value = V.data()),
            (n.value.id = V == null ? void 0 : V.id),
            n.value.canAnyoneEdit ? ($.value = !1) : ($.value = !0),
            n.value.uid !==
              ((U = c == null ? void 0 : c.currentUser) == null
                ? void 0
                : U.uid) && (n.value.private ? (w.value = !0) : (w.value = !1)),
            n.value.campaignDocId &&
              M.value &&
              M.value.uid ===
                ((re = c == null ? void 0 : c.currentUser) == null
                  ? void 0
                  : re.uid) &&
              ((w.value = !1),
              n.value.canDMEdit ? ($.value = !1) : ($.value = !0)),
            n.value.uid ===
              ((de = c == null ? void 0 : c.currentUser) == null
                ? void 0
                : de.uid) && ((w.value = !1), ($.value = !1)),
            ((ye = c == null ? void 0 : c.currentUser) != null && ye.uid) ||
              ($.value = !0),
            C.value < 2 && C.value++;
        });
      }),
        Rt(() => {
          We.value && We.value(), qe.value && qe.value();
        }),
        be(C, () => {
          n.value &&
            _.value !== !1 &&
            (n.value.campaignDocId
              ? C.value >= 2 && (_.value = !1)
              : C.value >= 1 && (_.value = !1));
        }),
        be(
          () => n.value.campaignDocId,
          async () => {
            if (n.value && !_.value)
              if (n.value.campaignDocId === "")
                (M.value = void 0), (f.value = void 0), qe.value && qe.value();
              else {
                const d = await Ze(ie(m, "campaigns", n.value.campaignDocId));
                d.data() &&
                  ((M.value = d.data()),
                  (qe.value = aa(
                    ie(m, "campaignLogs", M.value.campaignLogId),
                    (h) => {
                      h.data() && ((f.value = h.data()), (f.value.id = h.id));
                    }
                  )));
              }
          }
        );
      const P = () => {
          $.value || ea(ie(m, "characters", n.value.id), n.value);
        },
        we = () => {
          (j.value.alive = !1), clearTimeout(j.value.timeout);
        },
        ce = () => (fe.value.alive = !1),
        me = () => (Ve.value.alive = !1),
        Ge = (d, h) => {
          ce(),
            me(),
            (d.message = `${h} adicionado`),
            (d.type = "info"),
            (d.alive = !0);
        },
        Oe = (d) => {
          ce(),
            me(),
            (d.message = "Valor incorreto nos dados"),
            (d.type = "error"),
            (d.alive = !0);
        },
        Xe = (d, h, S, V, U) => {
          we(),
            me(),
            (d.title = h),
            (d.total = S),
            (d.output = V),
            (d.notation = U),
            vo(d, "roll"),
            go(d, "roll"),
            I.value || (d.alive = !0);
        },
        nt = (d, h, S, V, U, re, de, ye, $t, Et) => {
          we(),
            ce(),
            (d.title = h),
            (d.totalAttack = S),
            (d.totalDamage = V),
            (d.critical = U),
            (d.attackTooltip = re),
            (d.damageTooltip = de),
            (d.attackRollTooltip = ye),
            (d.damageRollTooltip = $t),
            (d.criticalTooltip = Et),
            vo(d, "attackRoll"),
            go(d, "attackRoll"),
            I.value || (d.alive = !0);
        },
        qa = (d) => {
          const h = d.e.target.value;
          (n.value[d.key] = h.trim()), P();
        },
        ya = (d) => {
          const h = d.e.target.value;
          (n.value[d.key] = h.trim()), P();
        },
        $a = (d) => {
          const h = d.e.target.valueAsNumber;
          bo(n.value, h, d.key), P();
        },
        Ea = (d, h) => {
          bo(n.value, d, h), P();
        },
        Ia = (d) => {
          const h = d.e.target.valueAsNumber;
          Kt(n.value, h, d.key), P();
        },
        ka = (d) => {
          const h = n.value.nex;
          (n.value[d.key] = d.value), Jt(n.value, h), P();
        },
        Sa = (d) => {
          const h = d.target.valueAsNumber;
          Yt(n.value, h), P();
        },
        _a = (d) => {
          try {
            const h = Zt[d],
              S = es(n.value, d),
              V = sa(S.output),
              U = na(S.output);
            Xe(fe.value, h, S.total, V, U), b();
          } catch {
            Oe(j.value);
          }
        },
        Pa = (d, h) => {
          d === "pv" && (n.value.deathMarks[h] = !n.value.deathMarks[h]),
            d === "san" && (n.value.madnessMarks[h] = !n.value.madnessMarks[h]),
            P();
        },
        Ma = (d) => {
          d === "pv" && (n.value.deathMode = !0),
            d === "san" && (n.value.madnessMode = !0),
            P();
        },
        Ra = (d) => {
          d === "pv" &&
            ((n.value.deathMarks = [!1, !1, !1]),
            (n.value.deathMode = !1),
            n.value.currentPv === 0 && (n.value.currentPv = 1)),
            d === "san" &&
              ((n.value.madnessMarks = [!1, !1, !1]),
              (n.value.madnessMode = !1),
              n.value.currentSan === 0 && (n.value.currentSan = 1)),
            P();
        },
        Da = () => {
          (F.value = g.addClass), (B.value = !0);
        },
        Ta = (d) => {
          (Aa.value = d), (F.value = g.skill), (B.value = !0);
        },
        Va = () => {
          (F.value = g.config), (B.value = !0);
        },
        rt = () => {
          (F.value = g.share), (B.value = !0);
        },
        wa = (d) => {
          const h = n.value.skills.findIndex((S) => S.name === d.skillName);
          (n.value.skills[h][d.key] = d.value), Co(n.value, d.skillName), P();
        },
        Oa = (d) => {
          as(n.value, d.value, d.skillName), Co(n.value, d.skillName), P();
        },
        za = (d) => {
          try {
            const h = d.name,
              S = os(n.value, d),
              V = sa(S.output),
              U = na(S.output);
            Xe(fe.value, h, S.total, V, U), b();
          } catch {
            Oe(j.value);
          }
        },
        Ha = () => {
          (F.value = g.abilities), (B.value = !0);
        },
        ja = () => {
          (F.value = g.rituals), (B.value = !0);
        },
        Ua = () => {
          (F.value = g.inventory), (B.value = !0);
        },
        xa = () => {
          (F.value = g.picture), (B.value = !0);
        },
        dt = (d) => {
          (d.id = Ue()), n.value.attacks.push(d), P(), ae();
        },
        Na = (d) => {
          ts(n.value, d), P();
        },
        Ke = (d) => {
          const h = n.value.powers.findIndex((S) => S.id === d);
          h !== -1 && (n.value.powers.splice(h, 1), P());
        },
        La = (d) => {
          const h = n.value.rituals.findIndex((S) => S.id === d);
          n.value.rituals.splice(h, 1), P();
        },
        Ba = (d) => {
          ss(n.value, d), P();
        },
        Fa = (d) => {
          ns(n.value, d), P();
        },
        Qa = (d) => {
          (n.value.description[d.key] = d.value), P();
        },
        Wa = (d) => {
          (n.value[d.key] = d.value), P();
        },
        Ga = (d) => {
          rs(n.value, d.value, d.key), P();
        },
        Xa = (d) => {
          ds(n.value, d.value, d.key), P();
        },
        Je = (d, h = "Resultado", S = !1) => {
          try {
            const V = h,
              U = is(d),
              re = sa(U.output),
              de = na(U.output);
            (fe.value.defaultColor = S), Xe(fe.value, V, U.total, re, de), b();
          } catch {
            Oe(j.value);
          }
        },
        Ka = (d) => {
          try {
            const h = ls(n.value, d);
            nt(
              Ve.value,
              d.name,
              h.attackTotal,
              h.damageTotal,
              h.critical,
              h.attackInfo,
              h.damageInfo,
              h.attackRollInfo,
              h.damageRollInfo,
              h.criticalInfo
            ),
              b();
          } catch {
            Oe(j.value);
          }
        },
        Ja = (d, h) => {
          h && Je(h, d, !0);
        },
        Ya = (d) => {
          const h = d.target.valueAsNumber;
          us(n.value, h), P();
        },
        it = (d) => {
          ms(n.value, d),
            Ge(j.value, d.name),
            P(),
            F.value === g.addModal && ae();
        },
        lt = (d) => {
          ps(n.value, d),
            Ge(j.value, d.name),
            P(),
            F.value === g.addModal && ae();
        },
        ut = (d) => {
          vs(n.value, d),
            Ge(j.value, d.name),
            P(),
            F.value === g.addModal && ae();
        },
        ct = (d, h) => {
          (n.value.sheetPictureURL = d),
            (n.value.sheetPictureFullPath = h),
            P(),
            ae();
        },
        mt = (d, h, S) => {
          d === "hurt" &&
            ((n.value.sheetPictureHurtURL = h),
            (n.value.sheetPictureHurtFullPathL = S),
            P()),
            d === "dying" &&
              ((n.value.sheetPictureDyingURL = h),
              (n.value.sheetPictureDyingFullPathL = S),
              P()),
            d === "disturbed" &&
              ((n.value.sheetPictureDisturbedURL = h),
              (n.value.sheetPictureDisturbedFullPathL = S),
              P()),
            d === "crazy" &&
              ((n.value.sheetPictureCrazyURL = h),
              (n.value.sheetPictureCrazyFullPathL = S),
              P());
        },
        pt = (d) => {
          const h = d.target.value;
          (n.value.resultDiceColor = h), P();
        },
        vt = (d) => {
          const h = d.target.value;
          (n.value.resultDiceBorderColor = h), P();
        },
        gt = (d, h) => {
          (n.value[d] = h), P();
        },
        ht = (d) => {
          (n.value.statsClass = d), P();
        },
        pe = (d) => {
          (F.value = g.addModal), (Ca.value = d), (B.value = !0);
        },
        Za = () => pe(p.attack),
        eo = () => pe(p.power),
        ao = () => pe(p.ritual),
        oo = () => pe(p.weapon),
        to = () => pe(p.ammunition),
        so = () => pe(p.protection),
        no = () => pe(p.misc),
        ro = () => pe(p.cursedItem),
        io = (d) => {
          (F.value = g.edit),
            (ke.value = l.attack),
            (B.value = !0),
            (y.value = d);
        },
        lo = (d) => {
          (F.value = g.edit),
            (ke.value = l.power),
            (B.value = !0),
            (R.value = d);
        },
        uo = (d) => {
          (F.value = g.edit),
            (ke.value = l.ritual),
            (B.value = !0),
            (N.value = d);
        },
        co = (d) => {
          (F.value = g.edit),
            (ke.value = l.item),
            (B.value = !0),
            (ge.value = d);
        },
        ft = (d) => {
          const h = n.value.attacks.findIndex((S) => S.id === d.id);
          (n.value.attacks[h] = d), P(), ae();
        },
        bt = (d) => {
          const h = n.value.powers.findIndex((S) => S.id === d.id);
          (n.value.powers[h] = d), P(), ae();
        },
        Ct = (d) => {
          const h = n.value.rituals.findIndex((S) => S.id === d.id);
          (n.value.rituals[h] = d), P(), ae();
        },
        At = (d) => {
          gs(n.value, d), P(), ae();
        },
        qt = (d) => {
          hs(n.value, d),
            n.value.mundanoRemoveSkill && Ke(n.value.mundanoRemoveSkill),
            P(),
            ae();
        },
        ae = () => (B.value = !1),
        mo = async () => {
          await navigator.clipboard.writeText(
            "https://crisordemparanormal.com/agente/" + n.value.id
          ),
            ce(),
            me(),
            (j.value.message = "Link copiado"),
            (j.value.type = "info"),
            (j.value.alive = !0);
        },
        po = async () => {
          var h, S;
          if (!((h = c.currentUser) != null && h.email) || he.value) return;
          if (k.value < 3) {
            const V = ho(m, "characters"),
              U = Dt(
                V,
                Tt("uid", "==", (S = c.currentUser) == null ? void 0 : S.uid)
              );
            if ((await Vt(U)).size >= Rs) {
              ce(),
                me(),
                (j.value.message = "Limite de agentes atingido!"),
                (j.value.type = "error"),
                (j.value.alive = !0);
              return;
            }
          }
          he.value = !0;
          const d = je.cloneDeep(n.value);
          if (
            ((d.uid = c.currentUser.uid),
            (d.timestamp = wt()),
            (d.campaignDocId = ""),
            (d.id = ""),
            n.value.sheetPictureURL !== "")
          ) {
            const V = fo(i, `images/${Ue()}`),
              U = fo(i, n.value.sheetPictureFullPath),
              re = await Ht(U);
            jt(V, re).then(async (de) => {
              const ye = await Ut(de.ref);
              (d.sheetPictureURL = ye),
                (d.sheetPictureFullPath = de.metadata.fullPath);
            });
          }
          await Ot(ho(m, "characters"), d),
            ce(),
            me(),
            (j.value.message = "Agente adicionado!"),
            (j.value.type = "info"),
            (j.value.alive = !0);
        },
        vo = (d, h) => {
          const S = [];
          if (h === "roll") {
            const V = d.total;
            S.push(V);
          }
          if (h === "attackRoll") {
            const V = d.totalAttack,
              U = d.totalDamage;
            S.push(V), S.push(U);
          }
          (n.value.lastDiceResult = S), (n.value.didDiceRoll = Ue()), P();
        },
        go = (d, h) => {
          if (!M.value || !f.value) return;
          const S = {
            sender: n.value.name,
            timestamp: new Date().getTime(),
            content: d,
            contentType: h,
          };
          f.value.campaignLogMessages.push(S),
            f.value.campaignLogMessages.length > 200 &&
              f.value.campaignLogMessages.shift(),
            ea(ie(m, "campaignLogs", f.value.id), f.value);
        },
        Ye = () => {
          we(), ce(), me(), (I.value = !I.value);
        };
      be(
        () => n.value.skills[9].bonus,
        (d, h) => {
          if (n.value.block === null) return;
          const S = Math.abs(d - h);
          d > h ? (n.value.block += S) : (n.value.block -= S),
            n.value.block < 0 && (n.value.block = 0),
            n.value.block > 999 && (n.value.block = 999),
            P();
        }
      );
      const yt = Q(() => {
        const d =
          10 +
          n.value.attributes.dex +
          n.value.protectionDefense +
          n.value.bonusDefense;
        return d > 0 ? d : 0;
      });
      return (
        be(
          () => n.value.skills[22].bonus,
          (d, h) => {
            if (n.value.evade === null) return;
            const S = Math.abs(d - h);
            d > h ? (n.value.evade += S) : (n.value.evade -= S),
              n.value.evade < 0 && (n.value.evade = 0),
              n.value.evade > 999 && (n.value.evade = 999),
              P();
          }
        ),
        be(yt, (d, h) => {
          if (n.value.evade === null) return;
          const S = Math.abs(d - h);
          d > h ? (n.value.evade += S) : (n.value.evade -= S),
            n.value.evade < 0 && (n.value.evade = 0),
            n.value.evade > 999 && (n.value.evade = 999),
            P();
        }),
        be(
          () => j.value.alive,
          () => {
            j.value.alive === !0 &&
              (j.value.timeout = window.setTimeout(
                () => (j.value.alive = !1),
                3e3
              ));
          }
        ),
        be($, () => {
          ae();
        }),
        (d, h) => {
          const S = ua("vue-final-modal");
          return (
            t(),
            s("div", null, [
              _.value
                ? (t(), s("div", _v, [A(Ps, { "page-loading": "" })]))
                : (t(),
                  s("div", dv, [
                    w.value
                      ? (t(),
                        s("div", iv, [
                          lv,
                          e(
                            "button",
                            {
                              class: "button-primary",
                              onClick:
                                h[0] || (h[0] = (V) => d.$router.push("/")),
                            },
                            " Voltar "
                          ),
                        ]))
                      : (t(),
                        s("div", uv, [
                          J.value >= 1023
                            ? (t(),
                              s("div", cv, [
                                e("div", mv, [
                                  e("div", pv, [
                                    A(
                                      Eo,
                                      {
                                        character: n.value,
                                        "disabled-sheet": $.value,
                                        onHandleChangeCharHeaderText: qa,
                                        onHandleOpenChangePictureModal: xa,
                                      },
                                      null,
                                      8,
                                      ["character", "disabled-sheet"]
                                    ),
                                    M.value
                                      ? (t(),
                                        L(
                                          Io,
                                          {
                                            key: 0,
                                            "disabled-sheet": $.value,
                                            campaign: M.value,
                                            "campaign-log": f.value,
                                            onHandleOpenCampaignLog: Ye,
                                          },
                                          null,
                                          8,
                                          [
                                            "disabled-sheet",
                                            "campaign",
                                            "campaign-log",
                                          ]
                                        ))
                                      : q("", !0),
                                    A(
                                      $o,
                                      {
                                        character: n.value,
                                        "disabled-sheet": $.value,
                                        "char-added": he.value,
                                        onHandleShareSheet: mo,
                                        onHandleAddAgent: po,
                                        onHandleOpenConfig: Va,
                                      },
                                      null,
                                      8,
                                      [
                                        "character",
                                        "disabled-sheet",
                                        "char-added",
                                      ]
                                    ),
                                  ]),
                                  e("div", vv, [
                                    e("div", gv, [
                                      A(
                                        qo,
                                        {
                                          character: n.value,
                                          "disabled-sheet": $.value,
                                          onHandleChangeCharText: ya,
                                          onHandleChangeCharNumber: $a,
                                          onHandleChangeCharNumberButton: Ea,
                                          onHandleChangeAttribute: Ia,
                                          onHandleChangeCharDropdown: ka,
                                          onHandleChangeMovementInSquares: Sa,
                                          onHandleRollAttribute: _a,
                                          onHandleChangeCharMark: Pa,
                                          onHandleChangeMarkModeToTrue: Ma,
                                          onHandleMarkHeal: Ra,
                                          onHandleOpenModalAddClass: Da,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                    e("div", hv, [
                                      A(
                                        yo,
                                        {
                                          character: n.value,
                                          "disabled-sheet": $.value,
                                          onHandleOpenSkillModal: Ta,
                                          onHandleChangeSkillDropdown: wa,
                                          onHandleChangeSkillOtherBonus: Oa,
                                          onHandleRollSkill: za,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                    e("div", fv, [
                                      A(
                                        Oi,
                                        {
                                          character: n.value,
                                          "disabled-sheet": $.value,
                                          onHandleOpenAbilitiesModal: Ha,
                                          onHandleOpenRitualsModal: ja,
                                          onHandleOpenItemsModal: Ua,
                                          onHandleOpenAddAttack: Za,
                                          onHandleOpenAddPower: eo,
                                          onHandleOpenAddRitual: ao,
                                          onHandleOpenAddWeapon: oo,
                                          onHandleOpenAddAmmunition: to,
                                          onHandleOpenAddProtection: so,
                                          onHandleOpenAddMisc: no,
                                          onHandleOpenAddCursedItem: ro,
                                          onHandleRemoveAttack: Na,
                                          onHandleEditAttack: io,
                                          onHandleRemovePower: Ke,
                                          onHandleEditPower: lo,
                                          onHandleEditRitual: uo,
                                          onHandleEditItem: co,
                                          onHandleRemoveRitual: La,
                                          onHandleRemoveItem: Ba,
                                          onHandleEquipItem: Fa,
                                          onHandleChangeDescription: Qa,
                                          onHandleChangeInventoryDropdown: Wa,
                                          onHandleChangeInventoryNumber: Ga,
                                          onHandleChangeItemsLimit: Xa,
                                          onHandleRollDices: Je,
                                          onHandleRollAttack: Ka,
                                          onHandleChangeRitualDc: Ya,
                                          onHandleRollRitual: Ja,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]))
                            : (t(),
                              s("div", bv, [
                                e("div", null, [
                                  A(Zp, {
                                    onHandleMobileNav:
                                      h[1] || (h[1] = (V) => (se.value = V)),
                                  }),
                                  se.value === 0
                                    ? (t(),
                                      s("div", Cv, [
                                        A(
                                          $o,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            "char-added": he.value,
                                            onHandleShareSheet: mo,
                                            onHandleAddAgent: po,
                                            onHandleOpenConfig: Va,
                                            onHandleOpenShareModal: rt,
                                          },
                                          null,
                                          8,
                                          [
                                            "character",
                                            "disabled-sheet",
                                            "char-added",
                                          ]
                                        ),
                                        A(
                                          Eo,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            onHandleChangeCharHeaderText: qa,
                                            onHandleOpenChangePictureModal: xa,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                        M.value
                                          ? (t(),
                                            L(
                                              Io,
                                              {
                                                key: 0,
                                                "disabled-sheet": $.value,
                                                campaign: M.value,
                                                "campaign-log": f.value,
                                                onHandleOpenCampaignLog: Ye,
                                              },
                                              null,
                                              8,
                                              [
                                                "disabled-sheet",
                                                "campaign",
                                                "campaign-log",
                                              ]
                                            ))
                                          : q("", !0),
                                      ]))
                                    : q("", !0),
                                  se.value === 1
                                    ? (t(),
                                      s("div", Av, [
                                        A(
                                          Wo,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            onHandleChangeDescription: Qa,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 2
                                    ? (t(),
                                      s("div", qv, [
                                        A(
                                          qo,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            onHandleChangeCharText: ya,
                                            onHandleChangeCharNumber: $a,
                                            onHandleChangeCharNumberButton: Ea,
                                            onHandleChangeAttribute: Ia,
                                            onHandleChangeCharDropdown: ka,
                                            onHandleChangeMovementInSquares: Sa,
                                            onHandleRollAttribute: _a,
                                            onHandleChangeCharMark: Pa,
                                            onHandleChangeMarkModeToTrue: Ma,
                                            onHandleMarkHeal: Ra,
                                            onHandleOpenModalAddClass: Da,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 3
                                    ? (t(),
                                      s("div", yv, [
                                        A(
                                          yo,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            onHandleOpenSkillModal: Ta,
                                            onHandleChangeSkillDropdown: wa,
                                            onHandleChangeSkillOtherBonus: Oa,
                                            onHandleRollSkill: za,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 4
                                    ? (t(),
                                      s("div", $v, [
                                        A(
                                          No,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            onHandleOpenAddAttack: Za,
                                            onHandleEditAttack: io,
                                            onHandleRemoveAttack: Na,
                                            onHandleRollAttack: Ka,
                                            onHandleRollDices: Je,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 5
                                    ? (t(),
                                      s("div", Ev, [
                                        A(
                                          Qo,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            onHandleChangeInventoryDropdown: Wa,
                                            onHandleChangeInventoryNumber: Ga,
                                            onHandleChangeItemsLimit: Xa,
                                            onHandleEditItem: co,
                                            onHandleEquipItem: Fa,
                                            onHandleOpenItemsModal: Ua,
                                            onHandleRemoveItem: Ba,
                                            onHandleOpenAddWeapon: oo,
                                            onHandleOpenAddAmmunition: to,
                                            onHandleOpenAddProtection: so,
                                            onHandleOpenAddMisc: no,
                                            onHandleOpenAddCursedItem: ro,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 6
                                    ? (t(),
                                      s("div", Iv, [
                                        se.value === 6
                                          ? (t(),
                                            L(
                                              Bo,
                                              {
                                                key: 0,
                                                character: n.value,
                                                "disabled-sheet": $.value,
                                                onHandleEditPower: lo,
                                                onHandleOpenAddPower: eo,
                                                onHandleOpenAbilitiesModal: Ha,
                                                onHandleRemovePower: Ke,
                                              },
                                              null,
                                              8,
                                              ["character", "disabled-sheet"]
                                            ))
                                          : q("", !0),
                                      ]))
                                    : q("", !0),
                                  se.value === 7
                                    ? (t(),
                                      s("div", kv, [
                                        A(
                                          Fo,
                                          {
                                            character: n.value,
                                            "disabled-sheet": $.value,
                                            onHandleChangeRitualDc: Ya,
                                            onHandleEditRitual: uo,
                                            onHandleOpenRitualsModal: ja,
                                            onHandleOpenAddRitual: ao,
                                            onHandleRemoveRitual: La,
                                            onHandleRollRitual: Ja,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  M.value
                                    ? (t(),
                                      L(
                                        nv,
                                        {
                                          key: 8,
                                          "campaign-log-open": I.value,
                                          onHandleOpenCampaignLog: Ye,
                                        },
                                        null,
                                        8,
                                        ["campaign-log-open"]
                                      ))
                                    : q("", !0),
                                ]),
                              ])),
                          B.value
                            ? (t(),
                              s("div", Sv, [
                                A(
                                  S,
                                  {
                                    modelValue: B.value,
                                    "onUpdate:modelValue":
                                      h[2] || (h[2] = (V) => (B.value = V)),
                                    classes: "modal-container",
                                  },
                                  {
                                    default: Ee(() => [
                                      (t(),
                                      L(
                                        Me(v[F.value]),
                                        {
                                          "current-edit-option": ke.value,
                                          "current-add-option": Ca.value,
                                          character: n.value,
                                          skill: Aa.value,
                                          "edit-power": R.value,
                                          "edit-ritual": N.value,
                                          "edit-item": ge.value,
                                          "edit-attack": y.value,
                                          onHandleEditAttackSheet: ft,
                                          onHandleEditPowerSheet: bt,
                                          onHandleEditRitualSheet: Ct,
                                          onHandleEditItemSheet: At,
                                          onHandleAddAttack: dt,
                                          onHandleAddPower: it,
                                          onHandleAddRitual: lt,
                                          onHandleAddItem: ut,
                                          onHandleCloseModal: ae,
                                          onHandleUpdatePicture: ct,
                                          onHandleChangeStatsClass: ht,
                                          onHandleUpdateAlternativePicture: mt,
                                          onHandleChangeCharResultDiceColor: pt,
                                          onHandleChangeCharResultDiceBorderColor:
                                            vt,
                                          onHandleChangeEditPermissions: gt,
                                          onHandleAddClass: qt,
                                        },
                                        null,
                                        40,
                                        [
                                          "current-edit-option",
                                          "current-add-option",
                                          "character",
                                          "skill",
                                          "edit-power",
                                          "edit-ritual",
                                          "edit-item",
                                          "edit-attack",
                                        ]
                                      )),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue"]
                                ),
                              ]))
                            : q("", !0),
                          A(
                            oa,
                            { name: "toast" },
                            {
                              default: Ee(() => [
                                j.value.alive
                                  ? (t(),
                                    L(
                                      xt,
                                      { key: 0, toast: j.value, onDismiss: we },
                                      null,
                                      8,
                                      ["toast"]
                                    ))
                                  : q("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                          A(
                            oa,
                            { name: "toast" },
                            {
                              default: Ee(() => [
                                fe.value.alive
                                  ? (t(),
                                    L(
                                      cs,
                                      {
                                        key: 0,
                                        toast: fe.value,
                                        onDismiss: ce,
                                      },
                                      null,
                                      8,
                                      ["toast"]
                                    ))
                                  : q("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                          A(
                            oa,
                            { name: "toast" },
                            {
                              default: Ee(() => [
                                Ve.value.alive
                                  ? (t(),
                                    L(
                                      Xs,
                                      {
                                        key: 0,
                                        toast: Ve.value,
                                        onDismiss: me,
                                      },
                                      null,
                                      8,
                                      ["toast"]
                                    ))
                                  : q("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                          I.value
                            ? (t(),
                              L(
                                Wt,
                                {
                                  key: 3,
                                  "campaign-log": f.value,
                                  onHandleCloseCampaignLog:
                                    h[3] || (h[3] = () => (I.value = !1)),
                                },
                                null,
                                8,
                                ["campaign-log"]
                              ))
                            : q("", !0),
                        ])),
                  ])),
            ])
          );
        }
      );
    },
  }),
  ng = T(Pv, [["__scopeId", "data-v-51d27b7c"]]);
export { ng as default };

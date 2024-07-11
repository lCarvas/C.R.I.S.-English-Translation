import {
  d as R,
  Q as Ue,
  r as $,
  a0 as _o,
  o,
  c as n,
  a as e,
  t as H,
  a1 as J,
  n as j,
  q as L,
  _ as V,
  f as X,
  v as N,
  L as G,
  k as C,
  p as w,
  b as z,
  a3 as xe,
  m as q,
  H as me,
  h as K,
  C as be,
  D as Ae,
  E as Mt,
  e as Ee,
  a5 as Pe,
  a2 as Ne,
  J as oe,
  i as ca,
  x as ke,
  j as fo,
  g as Po,
  M as Dt,
  S as Rt,
  u as Vt,
  A as Ze,
  P as de,
  N as ea,
  Z as aa,
  $ as Tt,
  w as fe,
  T as oa,
  R as bo,
  F as Ot,
  B as wt,
  l as zt,
  y as Ht,
  z as jt,
} from "./index-CCe7Lu-B.js";
import {
  g as Ut,
  r as Ao,
  b as xt,
  u as Nt,
  a as Lt,
} from "./index.esm2017-xnObGOUN.js";
import { T as Bt } from "./ToastNotification-mRGv3sEv.js";
import {
  I as ta,
  n as Ft,
  A as Qt,
  F as Le,
  a as Gt,
  u as Xt,
  p as Wt,
  C as Kt,
  d as Jt,
  g as Yt,
  h as Co,
  i as Zt,
  j as es,
  k as as,
  l as os,
  m as ts,
  f as sa,
  e as na,
  o as qo,
  q as ss,
  s as ns,
  t as rs,
  v as ds,
  w as is,
  x as ls,
  y as us,
  c as cs,
  r as ms,
  z as ps,
  T as vs,
  b as hs,
  B as gs,
  E as fs,
  G as bs,
  H as As,
  J as Cs,
} from "./ToastAttack-BamNNyhq.js";
import { _ as Mo } from "./d20-icon-vaz1En3o.js";
import { T as pe } from "./TabNav-4AlT8nGd.js";
import { P as Be } from "./PowerCard-39z67vzg.js";
import { R as Do } from "./RitualCard-fptzTflG.js";
import {
  W as Ro,
  P as Vo,
  M as To,
  C as Oo,
} from "./CursedItemCard-m1uI5mCe.js";
import { c as ze } from "./classes-wb0vVaNi.js";
import { S as $e } from "./SearchInput-03fdP_9g.js";
import { b as qs, c as ys } from "./ClassCard-yfYyNGje.js";
import {
  H as ks,
  b as $s,
  a as Es,
  A as wo,
  R as zo,
  W as Ho,
  P as jo,
  M as la,
  c as Uo,
} from "./HomebrewItems-TgSS7jOC.js";
import {
  d as _e,
  p as xo,
  r as No,
  w as Is,
  e as Ss,
  f as _s,
  m as Ps,
  g as Ms,
} from "./default-dSfWXGfL.js";
import { b as Ds } from "./forms-8DDAOOVU.js";
import { _ as He, l as yo } from "./lodash-gzw5KmHd.js";
import { D as ye } from "./DropdownSimple-1_2dpnbs.js";
import { v as je } from "./v4-cyCr5FZV.js";
import { S as ra } from "./SwitchButtonBool-v6yCMwuV.js";
import { _ as Me } from "./blank-profile-picture-wMh28flS.js";
import { P as Lo } from "./PictureModal-aYibvNls.js";
import { L as Rs } from "./LoadingView-QvHCpB6F.js";
import { s as Bo, e as Vs, o as Ts } from "./skins-kfsapBUO.js";
import { g as Os, C as ws } from "./firebase-gLqIXTO_.js";
import "./edit-icon-u1vf_q3w.js";
import "./show-more-icon-VvUXKiHG.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./add-icon-fJ4uQHUZ.js";
const zs = "/assets/shield-icon-FCvc8PM4.png",
  Hs = { class: "sheet-subtitle" },
  js = { class: "dropdown-button-container" },
  Us = ["onClick"],
  xs = R({
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
      Ue((i) => ({ "35fdf62f": a.buttonWidth }));
      const v = a,
        h = b,
        u = $(null),
        p = $(!1);
      _o(u, () => (p.value = !1));
      const l = () => {
          v.disabled || (p.value = !p.value);
        },
        m = (i) => {
          (p.value = !1), h("updateValue", i);
        };
      return (i, d) => (
        o(),
        n(
          "div",
          {
            ref_key: "dropdown",
            ref: u,
            class: J([
              a.mobileView ? "dropdown-container-mobile" : "dropdown-container",
            ]),
          },
          [
            e("h4", Hs, H(a.title), 1),
            e("div", js, [
              e(
                "button",
                {
                  class: J([
                    "dropdown-button",
                    { bold: a.bold, disabled: a.disabled },
                  ]),
                  onClick: l,
                },
                H(a.value),
                3
              ),
              e(
                "div",
                {
                  class: J([
                    "dropdown-content",
                    { "dropdown-content-active": p.value },
                  ]),
                },
                [
                  (o(!0),
                  n(
                    j,
                    null,
                    L(
                      a.options,
                      (t, c) => (
                        o(),
                        n("div", { key: c }, [
                          e(
                            "button",
                            {
                              class: J([
                                "dropdown-content-button",
                                { bold: a.bold },
                              ]),
                              onClick: (A) => m(t),
                            },
                            H(t),
                            11,
                            Us
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
  ua = V(xs, [["__scopeId", "data-v-69e3d76a"]]),
  Y = (a) => (w("data-v-de62832b"), (a = a()), z(), a),
  Ns = { class: "info-view" },
  Ls = { class: "info-row" },
  Bs = { class: "nex-container" },
  Fs = { key: 1, class: "mundano-nex-container" },
  Qs = Y(() => e("h4", { class: "sheet-subtitle" }, " EXP ", -1)),
  Gs = { class: "pe-container" },
  Xs = { class: "pe" },
  Ws = ["disabled", "value"],
  Ks = Y(() => e("h4", null, "EP / TURN", -1)),
  Js = { class: "desl-container" },
  Ys = Y(() => e("h3", null, "MOV", -1)),
  Zs = { class: "desl-input-container" },
  en = ["disabled", "value"],
  an = Y(() => e("h4", null, "m /", -1)),
  on = ["disabled", "value"],
  tn = Y(() => e("h4", null, "sq", -1)),
  sn = { class: "info-bar-wrapper" },
  nn = { class: "info-row" },
  rn = { class: "defense-container" },
  dn = { class: "defense-img-container" },
  ln = Y(() =>
    e("img", { class: "defense-img", src: zs, alt: "defense" }, null, -1)
  ),
  un = { class: "defense-value" },
  cn = { class: "defense-content" },
  mn = Y(() =>
    e(
      "div",
      { class: "defense-text" },
      [e("h3", null, "DEFENSE"), e("h4", null, "= 10 + AGI + ")],
      -1
    )
  ),
  pn = { class: "defense-input" },
  vn = ["disabled", "value"],
  hn = Y(() => e("h5", null, "Equip.", -1)),
  gn = Y(() => e("h4", { class: "defense-plus" }, " + ", -1)),
  fn = { class: "defense-input" },
  bn = ["disabled", "value"],
  An = Y(() => e("h5", null, "Outros.", -1)),
  Cn = { class: "other-defenses-container" },
  qn = { class: "other-defense-div" },
  yn = Y(() => e("div", { class: "other-defense-label" }, " BLOCK DR ", -1)),
  kn = ["disabled", "value"],
  $n = { class: "other-defense-div" },
  En = Y(() => e("div", { class: "other-defense-label" }, " DODGE ", -1)),
  In = ["disabled", "value"],
  Sn = { class: "info-line" },
  _n = Y(() => e("h3", null, "ARMOR", -1)),
  Pn = ["disabled", "value"],
  Mn = { class: "info-line" },
  Dn = Y(() => e("h3", null, "RESISTENCES", -1)),
  Rn = ["disabled", "value"],
  Vn = { class: "info-line" },
  Tn = Y(() => e("h3", null, "PROFICIENCIES", -1)),
  On = ["disabled", "value"],
  wn = R({
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
        h = b,
        u = xe(),
        p = X(() =>
          v.character.movement === 0 ? 0 : v.character.movement / 1.5
        ),
        l = X(() => {
          const d =
            10 +
            v.character.attributes.dex +
            v.character.protectionDefense +
            v.character.bonusDefense;
          return d > 0 ? d : 0;
        }),
        m = (d, t) => {
          var c;
          h("handleChangeCharNumber", { e: d, key: t }),
            (c = u == null ? void 0 : u.proxy) == null || c.$forceUpdate();
        },
        i = (d) => {
          var t;
          h("handleChangeMovementInSquares", d),
            (t = u == null ? void 0 : u.proxy) == null || t.$forceUpdate();
        };
      return (d, t) => (
        o(),
        n("div", Ns, [
          e("div", Ls, [
            e("div", Bs, [
              d.character.statsClass !== "Mundane"
                ? (o(),
                  N(
                    ua,
                    {
                      key: 0,
                      title: "EXP",
                      disabled: d.disabledSheet,
                      value: d.character.nex,
                      options: G(Ft),
                      bold: "",
                      onUpdateValue:
                        t[0] ||
                        (t[0] = (c) =>
                          d.$emit("handleChangeCharDropdown", {
                            value: c,
                            key: "nex",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "options"]
                  ))
                : (o(),
                  n("div", Fs, [
                    Qs,
                    e(
                      "button",
                      {
                        class: "mundano-nex-button",
                        onClick:
                          t[1] ||
                          (t[1] = (c) => d.$emit("handleOpenModalAddClass")),
                      },
                      " 0% "
                    ),
                  ])),
              e("div", Gs, [
                e("div", Xs, [
                  e(
                    "input",
                    {
                      class: "sheet-input pe-input",
                      type: "number",
                      disabled: d.disabledSheet,
                      value: d.character.peTurn,
                      onBlur: t[2] || (t[2] = (c) => m(c, "peTurn")),
                    },
                    null,
                    40,
                    Ws
                  ),
                ]),
                Ks,
              ]),
            ]),
            e("div", Js, [
              Ys,
              e("div", Zs, [
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: d.disabledSheet,
                    value: d.character.movement,
                    onBlur: t[3] || (t[3] = (c) => m(c, "movement")),
                  },
                  null,
                  40,
                  en
                ),
                an,
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: d.disabledSheet,
                    value: p.value,
                    onBlur: i,
                  },
                  null,
                  40,
                  on
                ),
                tn,
              ]),
            ]),
          ]),
          e("div", sn, [
            C(
              ta,
              {
                type: "pv",
                "max-value": d.character.maxPv,
                "current-value": d.character.currentPv,
                marks: d.character.deathMarks,
                "mark-mode": d.character.deathMode,
                "disabled-sheet": d.disabledSheet,
                onHandleChangeCharNumber: t[4] || (t[4] = (c, A) => m(c, A)),
                onHandleChangeCharNumberButton:
                  t[5] ||
                  (t[5] = (c, A) =>
                    d.$emit("handleChangeCharNumberButton", c, A)),
                onHandleChangeCharMark:
                  t[6] ||
                  (t[6] = (c, A) => d.$emit("handleChangeCharMark", c, A)),
                onHandleChangeMarkModeToTrue:
                  t[7] ||
                  (t[7] = (c) => d.$emit("handleChangeMarkModeToTrue", c)),
                onHandleMarkHeal:
                  t[8] || (t[8] = (c) => d.$emit("handleMarkHeal", c)),
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
            C(
              ta,
              {
                type: "san",
                character: d.character,
                "max-value": d.character.maxSan,
                "current-value": d.character.currentSan,
                marks: d.character.madnessMarks,
                "mark-mode": d.character.madnessMode,
                "disabled-sheet": d.disabledSheet,
                onHandleChangeCharNumber: t[9] || (t[9] = (c, A) => m(c, A)),
                onHandleChangeCharNumberButton:
                  t[10] ||
                  (t[10] = (c, A) =>
                    d.$emit("handleChangeCharNumberButton", c, A)),
                onHandleChangeCharMark:
                  t[11] ||
                  (t[11] = (c, A) => d.$emit("handleChangeCharMark", c, A)),
                onHandleChangeMarkModeToTrue:
                  t[12] ||
                  (t[12] = (c) => d.$emit("handleChangeMarkModeToTrue", c)),
                onHandleMarkHeal:
                  t[13] || (t[13] = (c) => d.$emit("handleMarkHeal", c)),
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
            C(
              ta,
              {
                type: "pe",
                character: d.character,
                "max-value": d.character.maxPe,
                "current-value": d.character.currentPe,
                "disabled-sheet": d.disabledSheet,
                onHandleChangeCharNumber: t[14] || (t[14] = (c, A) => m(c, A)),
                onHandleChangeCharNumberButton:
                  t[15] ||
                  (t[15] = (c, A) =>
                    d.$emit("handleChangeCharNumberButton", c, A)),
              },
              null,
              8,
              ["character", "max-value", "current-value", "disabled-sheet"]
            ),
          ]),
          e("div", nn, [
            e("div", rn, [
              e("div", dn, [ln, e("div", un, [e("h3", null, H(l.value), 1)])]),
              e("div", cn, [
                mn,
                e("div", pn, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: d.disabledSheet,
                      value: d.character.protectionDefense,
                      onBlur:
                        t[16] || (t[16] = (c) => m(c, "protectionDefense")),
                    },
                    null,
                    40,
                    vn
                  ),
                  hn,
                ]),
                gn,
                e("div", fn, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: d.disabledSheet,
                      value: d.character.bonusDefense,
                      onBlur: t[17] || (t[17] = (c) => m(c, "bonusDefense")),
                    },
                    null,
                    40,
                    bn
                  ),
                  An,
                ]),
              ]),
            ]),
            e("div", Cn, [
              e("div", qn, [
                yn,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: d.disabledSheet,
                    value: d.character.block,
                    onBlur: t[18] || (t[18] = (c) => m(c, "block")),
                  },
                  null,
                  40,
                  kn
                ),
              ]),
              e("div", $n, [
                En,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: d.disabledSheet,
                    value: d.character.evade,
                    onBlur: t[19] || (t[19] = (c) => m(c, "evade")),
                  },
                  null,
                  40,
                  In
                ),
              ]),
            ]),
          ]),
          e("div", Sn, [
            _n,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: d.disabledSheet,
                value: d.character.currentProtection,
                onBlur:
                  t[20] ||
                  (t[20] = (c) =>
                    d.$emit("handleChangeCharText", {
                      e: c,
                      key: "currentProtection",
                    })),
              },
              null,
              40,
              Pn
            ),
          ]),
          e("div", Mn, [
            Dn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: d.disabledSheet,
                value: d.character.resistances,
                onBlur:
                  t[21] ||
                  (t[21] = (c) =>
                    d.$emit("handleChangeCharText", {
                      e: c,
                      key: "resistances",
                    })),
              },
              null,
              40,
              Rn
            ),
          ]),
          e("div", Vn, [
            Tn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: d.disabledSheet,
                value: d.character.proficiencies,
                onBlur:
                  t[22] ||
                  (t[22] = (c) =>
                    d.$emit("handleChangeCharText", {
                      e: c,
                      key: "proficiencies",
                    })),
              },
              null,
              40,
              On
            ),
          ]),
        ])
      );
    },
  }),
  zn = V(wn, [["__scopeId", "data-v-de62832b"]]),
  Hn = { class: "sheet-stats-container" },
  jn = R({
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
        h = (u) => {
          v("handleRollAttribute", u);
        };
      return (u, p) => (
        o(),
        n("div", Hn, [
          C(
            Qt,
            {
              character: u.character,
              "disabled-sheet": u.disabledSheet,
              onHandleChangeAttribute:
                p[0] || (p[0] = (l) => u.$emit("handleChangeAttribute", l)),
              onHandleRollAttribute: h,
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
          C(
            zn,
            {
              character: u.character,
              "disabled-sheet": u.disabledSheet,
              onHandleChangeCharText:
                p[1] || (p[1] = (l) => u.$emit("handleChangeCharText", l)),
              onHandleChangeCharNumber:
                p[2] || (p[2] = (l) => u.$emit("handleChangeCharNumber", l)),
              onHandleChangeCharDropdown:
                p[3] || (p[3] = (l) => u.$emit("handleChangeCharDropdown", l)),
              onHandleChangeMovementInSquares:
                p[4] ||
                (p[4] = (l) => u.$emit("handleChangeMovementInSquares", l)),
              onHandleChangeCharNumberButton:
                p[5] ||
                (p[5] = (l, m) =>
                  u.$emit("handleChangeCharNumberButton", l, m)),
              onHandleChangeCharMark:
                p[6] ||
                (p[6] = (l, m) => u.$emit("handleChangeCharMark", l, m)),
              onHandleChangeMarkModeToTrue:
                p[7] ||
                (p[7] = (l) => u.$emit("handleChangeMarkModeToTrue", l)),
              onHandleMarkHeal:
                p[8] || (p[8] = (l) => u.$emit("handleMarkHeal", l)),
              onHandleOpenModalAddClass:
                p[9] || (p[9] = (l) => u.$emit("handleOpenModalAddClass")),
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
        ])
      );
    },
  }),
  ko = V(jn, [["__scopeId", "data-v-6c164bbf"]]),
  Un = { class: "dropdown-button-container" },
  xn = { key: 0, class: "span" },
  Nn = ["disabled"],
  Ln = { key: 1, class: "span" },
  Bn = ["onClick"],
  Fn = R({
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
      Ue((i) => ({ "2c89ebb8": a.color }));
      const v = a,
        h = b,
        u = $(null),
        p = $(!1);
      _o(u, () => (p.value = !1));
      const l = () => {
          v.disabled || (p.value = !p.value);
        },
        m = (i) => {
          (p.value = !1), h("updateValue", i);
        };
      return (i, d) => (
        o(),
        n(
          "div",
          { ref_key: "dropdown", ref: u },
          [
            e("div", Un, [
              a.underline ? q("", !0) : (o(), n("span", xn, "(")),
              e(
                "button",
                {
                  class: J([
                    "dropdown-button",
                    { "dropdown-underline": a.underline, disabled: a.disabled },
                  ]),
                  disabled: a.disabled,
                  onClick: l,
                },
                H(a.value),
                11,
                Nn
              ),
              a.underline ? q("", !0) : (o(), n("span", Ln, ")")),
              e(
                "div",
                {
                  class: J([
                    "dropdown-content",
                    [
                      { "dropdown-content-active": p.value },
                      a.up ? "dropdown-position-up" : "dropdown-position-down",
                    ],
                  ]),
                },
                [
                  (o(!0),
                  n(
                    j,
                    null,
                    L(
                      a.options,
                      (t, c) => (
                        o(),
                        n("div", { key: c }, [
                          e(
                            "button",
                            {
                              class: "dropdown-content-button",
                              onClick: (A) => m(t),
                            },
                            H(t),
                            9,
                            Bn
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
  we = V(Fn, [["__scopeId", "data-v-7777a8ec"]]),
  ma = (a) => (w("data-v-05af1f88"), (a = a()), z(), a),
  Qn = { class: "small" },
  Gn = ma(() => e("img", { src: Mo, alt: "rolar" }, null, -1)),
  Xn = [Gn],
  Wn = { key: 0 },
  Kn = { key: 1 },
  Jn = { key: 0 },
  Yn = { key: 1 },
  Zn = { class: "skill-bonus" },
  er = ma(() => e("span", null, "( ", -1)),
  ar = ma(() => e("span", null, " )", -1)),
  or = { key: 2 },
  tr = { key: 3 },
  sr = { class: "input-container" },
  nr = ["disabled", "value"],
  rr = R({
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
      Ue((A) => ({ "45097c96": i.value }));
      const v = a,
        h = b,
        u = ["AGI", "STR", "INT", "PRE", "VIG"],
        p = ["0", "5", "10", "15"],
        l = { trained: "#3d8b40", veteran: "#0a69b7", expert: "#b36b00" },
        m = xe(),
        i = X(() =>
          v.skill.trainingDegree === "5"
            ? l.trained
            : v.skill.trainingDegree === "10"
            ? l.veteran
            : v.skill.trainingDegree === "15"
            ? l.expert
            : "#fff"
        ),
        d = () => {
          h("handleOpenSkillModal", v.skill);
        },
        t = (A, P, M) => {
          h("handleChangeSkillDropdown", { value: A, skillName: P, key: M });
        },
        c = (A, P) => {
          var f;
          const M = A.target.valueAsNumber;
          h("handleChangeSkillOtherBonus", { value: M, skillName: P }),
            (f = m == null ? void 0 : m.proxy) == null || f.$forceUpdate();
        };
      return (A, P) => (
        o(),
        n(
          j,
          null,
          [
            e("td", Qn, [
              e(
                "button",
                {
                  class: J(["roll-button", { disabled: a.disabledSheet }]),
                  onClick:
                    P[0] || (P[0] = (M) => A.$emit("handleRollSkill", a.skill)),
                },
                Xn,
                2
              ),
            ]),
            e(
              "td",
              { class: J({ disabled: a.disabledSheet }) },
              [
                e(
                  "button",
                  {
                    class: J([
                      "naked-button left",
                      { disabled: a.disabledSheet },
                    ]),
                    onClick: d,
                  },
                  [
                    me(H(a.skill.name), 1),
                    a.skill.onlyTrained ? (o(), n("span", Wn, "*")) : q("", !0),
                    a.skill.loadPenalty ? (o(), n("span", Kn, "+")) : q("", !0),
                  ],
                  2
                ),
              ],
              2
            ),
            a.index > a.length - 7
              ? (o(),
                n("td", Jn, [
                  C(
                    we,
                    {
                      value: a.skill.attribute,
                      options: u,
                      color: i.value,
                      disabled: a.disabledSheet,
                      up: "",
                      onUpdateValue:
                        P[1] || (P[1] = (M) => t(M, a.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (o(),
                n("td", Yn, [
                  C(
                    we,
                    {
                      value: a.skill.attribute,
                      options: u,
                      color: i.value,
                      disabled: a.disabledSheet,
                      onUpdateValue:
                        P[2] || (P[2] = (M) => t(M, a.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [e("h3", Zn, [er, me(H(a.skill.bonus), 1), ar])]),
            a.index > a.length - 7
              ? (o(),
                n("td", or, [
                  C(
                    we,
                    {
                      value: a.skill.trainingDegree,
                      options: p,
                      color: i.value,
                      disabled: a.disabledSheet,
                      underline: "",
                      up: "",
                      onUpdateValue:
                        P[3] ||
                        (P[3] = (M) => t(M, a.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (o(),
                n("td", tr, [
                  C(
                    we,
                    {
                      value: a.skill.trainingDegree,
                      options: p,
                      color: i.value,
                      disabled: a.disabledSheet,
                      underline: "",
                      onUpdateValue:
                        P[4] ||
                        (P[4] = (M) => t(M, a.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [
              e("div", sr, [
                e(
                  "input",
                  {
                    type: "number",
                    class: "underline-input",
                    disabled: a.disabledSheet,
                    value: a.skill.otherBonus,
                    onBlur: P[5] || (P[5] = (M) => c(M, a.skill.name)),
                  },
                  null,
                  40,
                  nr
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  }),
  dr = V(rr, [["__scopeId", "data-v-05af1f88"]]),
  pa = (a) => (w("data-v-f2b17d30"), (a = a()), z(), a),
  ir = { class: "skills-container" },
  lr = pa(() => e("h1", { class: "skills-title" }, " SKILLS ", -1)),
  ur = { class: "skills-table" },
  cr = pa(() =>
    e(
      "thead",
      null,
      [
        e("tr", null, [
          e("th", { class: "small" }),
          e("th", { class: "left" }, " SKILL "),
          e("th", null, "DICE"),
          e("th", null, "BONUS"),
          e("th", null, "Trainment"),
          e("th", null, "Other"),
        ]),
      ],
      -1
    )
  ),
  mr = pa(() =>
    e(
      "h4",
      { class: "table-caption" },
      [
        me(" + "),
        e("i", null, "Overburden penalty."),
        me(" * "),
        e("i", null, "Only if trained."),
      ],
      -1
    )
  ),
  pr = R({
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
        h = b,
        u = (l) => {
          v.disabledSheet || h("handleOpenSkillModal", l);
        },
        p = (l) => {
          v.disabledSheet || h("handleRollSkill", l);
        };
      return (l, m) => (
        o(),
        n("div", ir, [
          lr,
          e("table", ur, [
            cr,
            e("tbody", null, [
              (o(!0),
              n(
                j,
                null,
                L(
                  l.character.skills,
                  (i, d) => (
                    o(),
                    n("tr", { key: i.name }, [
                      C(
                        dr,
                        {
                          skill: i,
                          index: d,
                          length: l.character.skills.length,
                          "disabled-sheet": l.disabledSheet,
                          onHandleOpenSkillModal: u,
                          onHandleChangeSkillDropdown:
                            m[0] ||
                            (m[0] = (t) =>
                              l.$emit("handleChangeSkillDropdown", t)),
                          onHandleChangeSkillOtherBonus:
                            m[1] ||
                            (m[1] = (t) =>
                              l.$emit("handleChangeSkillOtherBonus", t)),
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
          mr,
        ])
      );
    },
  }),
  $o = V(pr, [["__scopeId", "data-v-f2b17d30"]]),
  va = (a) => (w("data-v-f08c1d1d"), (a = a()), z(), a),
  vr = { class: "tab" },
  hr = { key: 0 },
  gr = { class: "roll-dices-container" },
  fr = ["disabled", "onKeyup"],
  br = ["disabled"],
  Ar = va(() =>
    e("img", { class: "dice-icon", src: Mo, alt: "rolar" }, null, -1)
  ),
  Cr = [Ar],
  qr = { key: 2 },
  yr = { key: 0 },
  kr = { key: 1, class: "no-content" },
  $r = va(() => e("h3", null, "No attack found", -1)),
  Er = [$r],
  Ir = { key: 3, class: "no-content" },
  Sr = va(() => e("h3", null, "You have yet to add attacks", -1)),
  _r = [Sr],
  Pr = R({
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
        h = b,
        u = $(""),
        p = $(""),
        l = () => {
          v.disabledSheet || (h("handleRollDices", u.value), (u.value = ""));
        },
        m = (d) => {
          v.disabledSheet || h("handleRollAttack", d);
        },
        i = X(() => [...v.character.attacks].filter((t) => K(t.name, p.value)));
      return (d, t) => (
        o(),
        n("div", vr, [
          d.character.attacks.length > 0
            ? (o(),
              n("div", hr, [
                C(
                  Le,
                  {
                    value: p.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: t[0] || (t[0] = (c) => (p.value = c)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          e("div", gr, [
            be(
              e(
                "input",
                {
                  "onUpdate:modelValue": t[1] || (t[1] = (c) => (u.value = c)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: d.disabledSheet,
                  onKeyup: Mt(l, ["enter"]),
                },
                null,
                40,
                fr
              ),
              [[Ae, u.value]]
            ),
            e(
              "button",
              {
                class: J(["dice-button", { disabled: d.disabledSheet }]),
                disabled: d.disabledSheet,
                onClick: l,
              },
              Cr,
              10,
              br
            ),
          ]),
          d.disabledSheet
            ? q("", !0)
            : (o(),
              n(
                "button",
                {
                  key: 1,
                  class: "button-secondary add-button",
                  onClick:
                    t[2] || (t[2] = (c) => d.$emit("handleOpenAddAttack")),
                },
                " New Attack "
              )),
          d.character.attacks.length > 0
            ? (o(),
              n("div", qr, [
                i.value.length > 0
                  ? (o(),
                    n("div", yr, [
                      (o(!0),
                      n(
                        j,
                        null,
                        L(
                          i.value,
                          (c) => (
                            o(),
                            n("div", { key: c.id, class: "align-card" }, [
                              C(
                                Gt,
                                {
                                  id: c.id,
                                  attack: c,
                                  disabled: d.disabledSheet,
                                  onHandleRemoveAttack:
                                    t[3] ||
                                    (t[3] = (A) =>
                                      d.$emit("handleRemoveAttack", A)),
                                  onHandleEdit: (A) =>
                                    d.$emit("handleEditAttack", A),
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
                  : (o(), n("div", kr, Er)),
              ]))
            : (o(), n("div", Ir, _r)),
        ])
      );
    },
  }),
  Fo = V(Pr, [["__scopeId", "data-v-f08c1d1d"]]),
  Qo = (a) => (w("data-v-79ae51ca"), (a = a()), z(), a),
  Mr = { class: "tab" },
  Dr = { class: "tab-header" },
  Rr = { key: 0 },
  Vr = { key: 1, class: "sheet-cards-container" },
  Tr = { key: 0 },
  Or = { key: 1, class: "no-content" },
  wr = Qo(() => e("h3", null, "No abilities found", -1)),
  zr = [wr],
  Hr = { key: 2, class: "no-content" },
  jr = Qo(() => e("h3", null, "You have yet to add an ability", -1)),
  Ur = [jr],
  xr = R({
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
        h = b,
        u = $(""),
        p = X(() =>
          [...v.character.powers]
            .filter((i) => K(i.name, u.value))
            .sort((i, d) => i.name.localeCompare(d.name))
        ),
        l = (m) => h("handleEditPower", m);
      return (m, i) => (
        o(),
        n("div", Mr, [
          e("div", Dr, [
            m.character.powers.length > 0
              ? (o(),
                n("div", Rr, [
                  C(
                    Le,
                    {
                      value: u.value,
                      placeholder: "Filter Abilities",
                      onUpdate: i[0] || (i[0] = (d) => (u.value = d)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : q("", !0),
            m.disabledSheet
              ? q("", !0)
              : (o(),
                n(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      i[1] ||
                      (i[1] = (d) => m.$emit("handleOpenAbilitiesModal")),
                  },
                  " Add New "
                )),
          ]),
          m.disabledSheet
            ? q("", !0)
            : (o(),
              n(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    i[2] || (i[2] = (d) => m.$emit("handleOpenAddPower")),
                },
                " New Ability "
              )),
          m.character.powers.length > 0
            ? (o(),
              n("div", Vr, [
                p.value.length > 0
                  ? (o(),
                    n("div", Tr, [
                      (o(!0),
                      n(
                        j,
                        null,
                        L(
                          p.value,
                          (d) => (
                            o(),
                            n("div", { key: d.id, class: "sheet-card-list" }, [
                              C(
                                Be,
                                {
                                  id: d.id,
                                  power: d,
                                  disabled: m.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    i[3] ||
                                    (i[3] = (t) =>
                                      m.$emit("handleRemovePower", t)),
                                  onHandleEdit: l,
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
                  : (o(), n("div", Or, zr)),
              ]))
            : (o(), n("div", Hr, Ur)),
        ])
      );
    },
  }),
  Go = V(xr, [["__scopeId", "data-v-79ae51ca"]]),
  ha = (a) => (w("data-v-d3cb0405"), (a = a()), z(), a),
  Nr = { class: "tab" },
  Lr = { class: "tab-header" },
  Br = { key: 0 },
  Fr = { class: "ritual-dc-wrapper" },
  Qr = { class: "ritual-dc-container" },
  Gr = ha(() => e("h4", { class: "sheet-subtitle" }, " RITUAL DC ", -1)),
  Xr = ["disabled", "value"],
  Wr = { key: 1, class: "sheet-cards-container" },
  Kr = { key: 0 },
  Jr = { key: 1, class: "no-content" },
  Yr = ha(() => e("h3", null, "No ritual found", -1)),
  Zr = [Yr],
  ed = { key: 2, class: "no-content" },
  ad = ha(() => e("h3", null, "You have yet to add a ritual", -1)),
  od = [ad],
  td = R({
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
        h = b,
        u = xe(),
        p = $(""),
        l = X(() =>
          [...v.character.rituals]
            .filter((c) => K(c.name, p.value))
            .sort((c, A) => c.name.localeCompare(A.name))
        ),
        m = (t) => {
          var c;
          h("handleChangeRitualDc", t),
            (c = u == null ? void 0 : u.proxy) == null || c.$forceUpdate();
        },
        i = (t) => h("handleEditRitual", t),
        d = (t, c) => {
          h("handleRollRitual", t, c);
        };
      return (t, c) => (
        o(),
        n("div", Nr, [
          e("div", Lr, [
            t.character.rituals.length > 0
              ? (o(),
                n("div", Br, [
                  C(
                    Le,
                    {
                      value: p.value,
                      placeholder: "Filter rituals",
                      onUpdate: c[0] || (c[0] = (A) => (p.value = A)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : q("", !0),
            t.disabledSheet
              ? q("", !0)
              : (o(),
                n(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      c[1] || (c[1] = (A) => t.$emit("handleOpenRitualsModal")),
                  },
                  " Add New "
                )),
          ]),
          e("div", Fr, [
            e("div", Qr, [
              Gr,
              e(
                "input",
                {
                  type: "number",
                  class: "sheet-input sheet-input-size",
                  disabled: t.disabledSheet,
                  value: t.character.ritualsDc,
                  onBlur: m,
                },
                null,
                40,
                Xr
              ),
            ]),
          ]),
          t.disabledSheet
            ? q("", !0)
            : (o(),
              n(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    c[2] || (c[2] = (A) => t.$emit("handleOpenAddRitual")),
                },
                " New Ritual "
              )),
          t.character.rituals.length > 0
            ? (o(),
              n("div", Wr, [
                l.value.length > 0
                  ? (o(),
                    n("div", Kr, [
                      (o(!0),
                      n(
                        j,
                        null,
                        L(
                          l.value,
                          (A) => (
                            o(),
                            n("div", { key: A.id, class: "sheet-card-list" }, [
                              C(
                                Do,
                                {
                                  id: A.id,
                                  ritual: A,
                                  disabled: t.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    c[3] ||
                                    (c[3] = (P) =>
                                      t.$emit("handleRemoveRitual", P)),
                                  onHandleEdit: i,
                                  onHandleRollRitual: d,
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
                  : (o(), n("div", Jr, Zr)),
              ]))
            : (o(), n("div", ed, od)),
        ])
      );
    },
  }),
  Xo = V(td, [["__scopeId", "data-v-d3cb0405"]]),
  ie = (a) => (w("data-v-d9d5c266"), (a = a()), z(), a),
  sd = { class: "tab" },
  nd = { class: "tab-header" },
  rd = { key: 0 },
  dd = { class: "inventory-info-container" },
  id = { class: "inventory-row" },
  ld = { class: "input-container" },
  ud = ie(() =>
    e("h4", { class: "sheet-subtitle" }, " PRESTIGE POINTS ", -1)
  ),
  cd = ["disabled", "value"],
  md = { class: "inventory-row" },
  pd = { key: 0 },
  vd = { class: "input-container" },
  hd = ie(() => e("h4", { class: "sheet-subtitle" }, " ITEM LIMIT ", -1)),
  gd = ["disabled", "value"],
  fd = ["disabled", "value"],
  bd = ["disabled", "value"],
  Ad = ["disabled", "value"],
  Cd = { key: 1 },
  qd = { class: "input-container" },
  yd = ie(() => e("h4", { class: "sheet-subtitle" }, " ITEM LIMIT ", -1)),
  kd = { class: "mobile-input-container-row" },
  $d = ["disabled", "value"],
  Ed = ["disabled", "value"],
  Id = ["disabled", "value"],
  Sd = ["disabled", "value"],
  _d = { class: "inventory-row" },
  Pd = { key: 0 },
  Md = { class: "input-container" },
  Dd = ie(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " IN INVENTORY ", -1)
  ),
  Rd = { class: "sheet-div" },
  Vd = { class: "sheet-div" },
  Td = { class: "sheet-div" },
  Od = { class: "sheet-div" },
  wd = { key: 1 },
  zd = { class: "input-container" },
  Hd = ie(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " IN INVENTORY ", -1)
  ),
  jd = { class: "mobile-input-container-row" },
  Ud = { class: "sheet-div" },
  xd = { class: "sheet-div" },
  Nd = { class: "sheet-div" },
  Ld = { class: "sheet-div" },
  Bd = { class: "inventory-row" },
  Fd = { key: 0 },
  Qd = { class: "input-container" },
  Gd = ie(() => e("h4", { class: "sheet-subtitle" }, " MAX LOAD ", -1)),
  Xd = ["disabled", "value"],
  Wd = ["disabled", "value"],
  Kd = { key: 1 },
  Jd = ie(() =>
    e(
      "h4",
      { class: "sheet-subtitle mobile-sheet-subtitle" },
      " MAX LOAD ",
      -1
    )
  ),
  Yd = { class: "mobile-input-container-row" },
  Zd = ["disabled", "value"],
  ei = ["disabled", "value"],
  ai = { class: "open-add-buttons-container" },
  oi = { key: 0, class: "open-add-title" },
  ti = { key: 0, class: "sheet-cards-container" },
  si = { key: 0 },
  ni = { key: 0 },
  ri = { key: 1 },
  di = { key: 2 },
  ii = { key: 3 },
  li = { key: 1, class: "no-content" },
  ui = ie(() => e("h3", null, "No item found", -1)),
  ci = [ui],
  mi = { key: 1, class: "no-content" },
  pi = ie(() => e("h3", null, "You have yet to add an item", -1)),
  vi = [pi],
  hi = R({
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
      Ue((f) => ({ "53e467a2": t.value }));
      const v = a,
        h = b,
        u = [
          "Mundane",
          "Recruit",
          "Operator",
          "Special Agent",
          "Operation Captain",
          "Elite Agent",
        ],
        p = ["Low", "Medium", "High", "Unlimited"],
        l = xe(),
        m = $(""),
        i = $(window.innerWidth),
        d = X(() =>
          [...v.character.inventory]
            .filter((y) => K(y.name, m.value))
            .sort((y, D) => y.name.localeCompare(D.name))
        ),
        t = X(() =>
          v.character.currentLoad > v.character.maxLoad * 2
            ? "#d9534f"
            : v.character.currentLoad > v.character.maxLoad
            ? "#ff8c00"
            : "#fff"
        ),
        c = X(() =>
          v.character.currentLoad < 0 ? 0 : v.character.currentLoad
        ),
        A = (f) => h("handleEditItem", f),
        P = (f, y) => {
          var B;
          const D = f.target.valueAsNumber;
          h("handleChangeItemsLimit", { value: D, key: y }),
            (B = l == null ? void 0 : l.proxy) == null || B.$forceUpdate();
        },
        M = (f, y) => {
          var B;
          const D = f.target.valueAsNumber;
          h("handleChangeInventoryNumber", { value: D, key: y }),
            (B = l == null ? void 0 : l.proxy) == null || B.$forceUpdate();
        };
      return (
        Ee(() => {
          window.addEventListener("resize", () => {
            i.value = window.innerWidth;
          });
        }),
        (f, y) => {
          var D, B, ve, s, I, k, O, he;
          return (
            o(),
            n("div", sd, [
              e("div", nd, [
                f.character.inventory.length > 0
                  ? (o(),
                    n("div", rd, [
                      C(
                        Le,
                        {
                          value: m.value,
                          placeholder: "Filter items",
                          onUpdate: y[0] || (y[0] = (E) => (m.value = E)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]))
                  : q("", !0),
                f.disabledSheet
                  ? q("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 1,
                        class: "button-primary add-button",
                        onClick:
                          y[1] ||
                          (y[1] = (E) => f.$emit("handleOpenItemsModal")),
                      },
                      " Add New "
                    )),
              ]),
              e("div", dd, [
                e("div", id, [
                  e("div", ld, [
                    ud,
                    e(
                      "input",
                      {
                        type: "number",
                        class: "sheet-input sheet-input-size",
                        disabled: f.disabledSheet,
                        value: f.character.prestigePoints,
                        onBlur: y[2] || (y[2] = (E) => M(E, "prestigePoints")),
                      },
                      null,
                      40,
                      cd
                    ),
                  ]),
                  C(
                    ua,
                    {
                      title: "RANK",
                      disabled: f.disabledSheet,
                      value: f.character.patent,
                      "button-width": "10rem",
                      options: u,
                      "mobile-view": i.value < 1023,
                      onUpdateValue:
                        y[3] ||
                        (y[3] = (E) =>
                          f.$emit("handleChangeInventoryDropdown", {
                            value: E,
                            key: "patent",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "mobile-view"]
                  ),
                ]),
                e("div", md, [
                  i.value >= 1023
                    ? (o(),
                      n("div", pd, [
                        e("div", vd, [
                          hd,
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "I",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.I,
                              onBlur: y[4] || (y[4] = (E) => P(E, "I")),
                            },
                            null,
                            40,
                            gd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "II",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.II,
                              onBlur: y[5] || (y[5] = (E) => P(E, "II")),
                            },
                            null,
                            40,
                            fd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "III",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.III,
                              onBlur: y[6] || (y[6] = (E) => P(E, "III")),
                            },
                            null,
                            40,
                            bd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "IV",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.IV,
                              onBlur: y[7] || (y[7] = (E) => P(E, "IV")),
                            },
                            null,
                            40,
                            Ad
                          ),
                        ]),
                      ]))
                    : (o(),
                      n("div", Cd, [
                        e("div", qd, [
                          yd,
                          e("div", kd, [
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "I",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.I,
                                onBlur: y[8] || (y[8] = (E) => P(E, "I")),
                              },
                              null,
                              40,
                              $d
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "II",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.II,
                                onBlur: y[9] || (y[9] = (E) => P(E, "II")),
                              },
                              null,
                              40,
                              Ed
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "III",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.III,
                                onBlur: y[10] || (y[10] = (E) => P(E, "III")),
                              },
                              null,
                              40,
                              Id
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "IV",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.IV,
                                onBlur: y[11] || (y[11] = (E) => P(E, "IV")),
                              },
                              null,
                              40,
                              Sd
                            ),
                          ]),
                        ]),
                      ])),
                ]),
                e("div", _d, [
                  i.value >= 1023
                    ? (o(),
                      n("div", Pd, [
                        e("div", Md, [
                          Dd,
                          e(
                            "div",
                            Rd,
                            H(
                              ((D = f.character.currentItemsLimit) == null
                                ? void 0
                                : D.I) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Vd,
                            H(
                              ((B = f.character.currentItemsLimit) == null
                                ? void 0
                                : B.II) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Td,
                            H(
                              ((ve = f.character.currentItemsLimit) == null
                                ? void 0
                                : ve.III) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Od,
                            H(
                              ((s = f.character.currentItemsLimit) == null
                                ? void 0
                                : s.IV) || "0"
                            ),
                            1
                          ),
                        ]),
                      ]))
                    : (o(),
                      n("div", wd, [
                        e("div", zd, [
                          Hd,
                          e("div", jd, [
                            e(
                              "div",
                              Ud,
                              H(
                                ((I = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : I.I) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              xd,
                              H(
                                ((k = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : k.II) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              Nd,
                              H(
                                ((O = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : O.III) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              Ld,
                              H(
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
                e("div", Bd, [
                  C(
                    ua,
                    {
                      title: "CREDIT LIMIT",
                      disabled: f.disabledSheet,
                      value: f.character.creditsLimit,
                      "button-width": "6rem",
                      options: p,
                      "mobile-view": i.value < 1023,
                      onUpdateValue:
                        y[12] ||
                        (y[12] = (E) =>
                          f.$emit("handleChangeInventoryDropdown", {
                            value: E,
                            key: "creditsLimit",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "mobile-view"]
                  ),
                  i.value >= 1023
                    ? (o(),
                      n("div", Fd, [
                        e("div", Qd, [
                          Gd,
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: f.disabledSheet,
                              value: c.value,
                              onBlur:
                                y[13] || (y[13] = (E) => M(E, "currentLoad")),
                            },
                            null,
                            40,
                            Xd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              disabled: f.disabledSheet,
                              value: f.character.maxLoad,
                              onBlur: y[14] || (y[14] = (E) => M(E, "maxLoad")),
                            },
                            null,
                            40,
                            Wd
                          ),
                        ]),
                      ]))
                    : (o(),
                      n("div", Kd, [
                        Jd,
                        e("div", Yd, [
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: f.disabledSheet,
                              value: c.value,
                              onBlur:
                                y[15] || (y[15] = (E) => M(E, "currentLoad")),
                            },
                            null,
                            40,
                            Zd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              disabled: f.disabledSheet,
                              value: f.character.maxLoad,
                              onBlur: y[16] || (y[16] = (E) => M(E, "maxLoad")),
                            },
                            null,
                            40,
                            ei
                          ),
                        ]),
                      ])),
                ]),
              ]),
              e("div", ai, [
                f.disabledSheet ? q("", !0) : (o(), n("div", oi, " NEW ")),
                f.disabledSheet
                  ? q("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 1,
                        class: "button-secondary",
                        onClick:
                          y[17] ||
                          (y[17] = (E) => f.$emit("handleOpenAddWeapon")),
                      },
                      " Weapon "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 2,
                        class: "button-secondary",
                        onClick:
                          y[18] ||
                          (y[18] = (E) => f.$emit("handleOpenAddAmmunition")),
                      },
                      " Ammo "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 3,
                        class: "button-secondary",
                        onClick:
                          y[19] ||
                          (y[19] = (E) => f.$emit("handleOpenAddProtection")),
                      },
                      " Armor "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 4,
                        class: "button-secondary",
                        onClick:
                          y[20] ||
                          (y[20] = (E) => f.$emit("handleOpenAddMisc")),
                      },
                      " General "
                    )),
                f.disabledSheet
                  ? q("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 5,
                        class: "button-secondary",
                        onClick:
                          y[21] ||
                          (y[21] = (E) => f.$emit("handleOpenAddCursedItem")),
                      },
                      " Cursed Item "
                    )),
              ]),
              f.character.inventory.length > 0
                ? (o(),
                  n("div", ti, [
                    d.value.length > 0
                      ? (o(),
                        n("div", si, [
                          (o(!0),
                          n(
                            j,
                            null,
                            L(
                              d.value,
                              (E) => (
                                o(),
                                n(
                                  "div",
                                  { key: E.id, class: "sheet-card-list" },
                                  [
                                    E.itemType === "weapon"
                                      ? (o(),
                                        n("div", ni, [
                                          C(
                                            Ro,
                                            {
                                              id: E.id,
                                              weapon: E,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[22] ||
                                                (y[22] = (Z) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEquip:
                                                y[23] ||
                                                (y[23] = (Z) =>
                                                  f.$emit(
                                                    "handleEquipItem",
                                                    Z
                                                  )),
                                              onHandleEdit: A,
                                            },
                                            null,
                                            8,
                                            ["id", "weapon", "disabled"]
                                          ),
                                        ]))
                                      : q("", !0),
                                    E.itemType === "protection"
                                      ? (o(),
                                        n("div", ri, [
                                          C(
                                            Vo,
                                            {
                                              id: E.id,
                                              protection: E,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[24] ||
                                                (y[24] = (Z) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEquip:
                                                y[25] ||
                                                (y[25] = (Z) =>
                                                  f.$emit(
                                                    "handleEquipItem",
                                                    Z
                                                  )),
                                              onHandleEdit: A,
                                            },
                                            null,
                                            8,
                                            ["id", "protection", "disabled"]
                                          ),
                                        ]))
                                      : q("", !0),
                                    E.itemType === "misc" ||
                                    E.itemType === "ammunition"
                                      ? (o(),
                                        n("div", di, [
                                          C(
                                            To,
                                            {
                                              id: E.id,
                                              misc: E,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[26] ||
                                                (y[26] = (Z) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEdit: A,
                                            },
                                            null,
                                            8,
                                            ["id", "misc", "disabled"]
                                          ),
                                        ]))
                                      : q("", !0),
                                    E.itemType === "cursedItem"
                                      ? (o(),
                                        n("div", ii, [
                                          C(
                                            Oo,
                                            {
                                              id: E.id,
                                              "cursed-item": E,
                                              disabled: f.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[27] ||
                                                (y[27] = (Z) =>
                                                  f.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEdit: A,
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
                      : (o(), n("div", li, ci)),
                  ]))
                : (o(), n("div", mi, vi)),
            ])
          );
        }
      );
    },
  }),
  Wo = V(hi, [["__scopeId", "data-v-d9d5c266"]]),
  gi = { class: "tab" },
  fi = { class: "textarea-container" },
  bi = ["disabled", "placeholder", "value", "onBlur"],
  Ai = R({
    __name: "DescriptionTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeDescription"],
    setup(a, { emit: b }) {
      const v = b,
        h = (p, l) => {
          const m = { value: p.target.value, key: l };
          v("handleChangeDescription", m);
        },
        u = [
          {
            title: "Notes",
            key: "anotation",
            placeholder: "Personal Notes...",
          },
          {
            title: "Appearance",
            key: "physical",
            placeholder: "Name, gender, age, physical description...",
          },
          {
            title: "Personality",
            key: "personal",
            placeholder: "Striking features, opinions, ideals...",
          },
          {
            title: "History",
            key: "history",
            placeholder:
              "Childhood, family relations, Paranormal contact, good and bad events...",
          },
          {
            title: "Objetive",
            key: "goal",
            placeholder:
              "Why did the agent join the Order? Why do they fight against the Other Side?",
          },
        ];
      return (p, l) => (
        o(),
        n("div", gi, [
          (o(),
          n(
            j,
            null,
            L(u, (m) =>
              e("div", { key: m.title }, [
                e("div", fi, [
                  e("h3", null, H(m.title), 1),
                  e(
                    "textarea",
                    {
                      class: "textarea description-tab-size",
                      rows: "5",
                      disabled: p.disabledSheet,
                      placeholder: m.placeholder,
                      value: p.character.description[m.key],
                      onBlur: (i) => h(i, m.key),
                    },
                    `\r
        `,
                    40,
                    bi
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
  Ko = V(Ai, [["__scopeId", "data-v-c2fd2df6"]]),
  Ci = { class: "sheet-tab-container" },
  qi = { class: "tab-nav-container" },
  yi = R({
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
        h = [
          { label: "COMBAT", value: 0 },
          { label: "ABILITIES", value: 1 },
          { label: "RITUALS", value: 2 },
          { label: "INVENTORY", value: 3 },
          { label: "DESCRIPTION", value: 4 },
        ],
        u = [Fo, Go, Xo, Wo, Ko],
        p = $(0),
        l = (I) => (p.value = I),
        m = (I) => v("handleChangeAttackText", I),
        i = (I) => v("handleChangeAttackNumber", I),
        d = (I) => v("handleChangeAttackDropdown", I),
        t = (I) => v("handleChangeDescription", I),
        c = (I) => v("handleChangeInventoryNumber", I),
        A = (I) => v("handleChangeItemsLimit", I),
        P = (I) => v("handleChangeInventoryDropdown", I),
        M = (I) => v("handleRollAttack", I),
        f = (I) => v("handleChangeRitualDc", I),
        y = (I) => v("handleEditPower", I),
        D = (I) => v("handleEditRitual", I),
        B = (I) => v("handleEditAttack", I),
        ve = (I) => v("handleEditItem", I),
        s = (I, k) => v("handleRollRitual", I, k);
      return (I, k) => (
        o(),
        n("div", Ci, [
          e("div", qi, [
            C(
              pe,
              {
                "tab-options": h,
                "current-tab": p.value,
                "no-gap": "",
                onHandleNavigation: l,
              },
              null,
              8,
              ["current-tab"]
            ),
          ]),
          (o(),
          N(
            Ne,
            null,
            [
              (o(),
              N(
                Pe(u[p.value]),
                {
                  character: I.character,
                  "disabled-sheet": I.disabledSheet,
                  onHandleOpenAbilitiesModal:
                    k[0] || (k[0] = (O) => I.$emit("handleOpenAbilitiesModal")),
                  onHandleOpenRitualsModal:
                    k[1] || (k[1] = (O) => I.$emit("handleOpenRitualsModal")),
                  onHandleOpenItemsModal:
                    k[2] || (k[2] = (O) => I.$emit("handleOpenItemsModal")),
                  onHandleOpenAddAttack:
                    k[3] || (k[3] = (O) => I.$emit("handleOpenAddAttack")),
                  onHandleOpenAddPower:
                    k[4] || (k[4] = (O) => I.$emit("handleOpenAddPower")),
                  onHandleOpenAddRitual:
                    k[5] || (k[5] = (O) => I.$emit("handleOpenAddRitual")),
                  onHandleOpenAddWeapon:
                    k[6] || (k[6] = (O) => I.$emit("handleOpenAddWeapon")),
                  onHandleOpenAddProtection:
                    k[7] || (k[7] = (O) => I.$emit("handleOpenAddProtection")),
                  onHandleOpenAddAmmunition:
                    k[8] || (k[8] = (O) => I.$emit("handleOpenAddAmmunition")),
                  onHandleOpenAddMisc:
                    k[9] || (k[9] = (O) => I.$emit("handleOpenAddMisc")),
                  onHandleOpenAddCursedItem:
                    k[10] ||
                    (k[10] = (O) => I.$emit("handleOpenAddCursedItem")),
                  onHandleRemoveAttack:
                    k[11] || (k[11] = (O) => I.$emit("handleRemoveAttack", O)),
                  onHandleEditAttack: B,
                  onHandleEditPower: y,
                  onHandleEditRitual: D,
                  onHandleEditItem: ve,
                  onHandleRemovePower:
                    k[12] || (k[12] = (O) => I.$emit("handleRemovePower", O)),
                  onHandleRemoveRitual:
                    k[13] || (k[13] = (O) => I.$emit("handleRemoveRitual", O)),
                  onHandleRemoveItem:
                    k[14] || (k[14] = (O) => I.$emit("handleRemoveItem", O)),
                  onHandleEquipItem:
                    k[15] || (k[15] = (O) => I.$emit("handleEquipItem", O)),
                  onHandleChangeAttackText: m,
                  onHandleChangeAttackNumber: i,
                  onHandleChangeAttackDropdown: d,
                  onHandleChangeDescription: t,
                  onHandleChangeInventoryNumber: c,
                  onHandleChangeItemsLimit: A,
                  onHandleChangeInventoryDropdown: P,
                  onHandleRollDices:
                    k[16] || (k[16] = (O) => I.$emit("handleRollDices", O)),
                  onHandleRollAttack: M,
                  onHandleChangeRitualDc: f,
                  onHandleRollRitual: s,
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
  ki = V(yi, [["__scopeId", "data-v-ff57a115"]]),
  $i = { class: "switch-container" },
  Ei = ["onClick"],
  Ii = R({
    __name: "SwitchButton",
    props: {
      value: { type: Number, required: !0 },
      options: { type: Array, required: !0 },
    },
    emits: ["handleNavigation"],
    setup(a) {
      return (b, v) => (
        o(),
        n("div", $i, [
          (o(!0),
          n(
            j,
            null,
            L(
              a.options,
              (h) => (
                o(),
                n(
                  "button",
                  {
                    key: h.value,
                    class: J([
                      "switch-button",
                      { active: h.value === a.value },
                    ]),
                    onClick: (u) => b.$emit("handleNavigation", h.value),
                  },
                  H(h.label),
                  11,
                  Ei
                )
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  ga = V(Ii, [["__scopeId", "data-v-9be4a122"]]),
  Si = { class: "class-abilities-container" },
  _i = { key: 0, class: "search-container" },
  Pi = { key: 1, class: "class-abilities-content" },
  Mi = R({
    __name: "ClassAbilities",
    props: { classValue: {} },
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const v = a,
        h = b,
        u = $([]),
        p = $([]),
        l = $([]),
        m = $(0),
        i = $(""),
        d = (c) => h("handleAddPower", c);
      Ee(() => {
        l.value.push({ label: `${v.classValue.name} Powers`, value: 0 }),
          v.classValue.paths.forEach((c, A) => {
            l.value.push({ label: c.name, value: A + 1 }), p.value.push(c);
          });
        for (const c of v.classValue.abilities) u.value.push(c);
        for (const c of v.classValue.powers) u.value.push(c);
      });
      const t = X(() =>
        u.value
          ? m.value === 0
            ? u.value
                .filter((c) => K(c.name, i.value))
                .sort((c, A) => c.name.localeCompare(A.name))
            : p.value[m.value - 1].abilities
          : []
      );
      return (c, A) => (
        o(),
        n("div", Si, [
          C(
            pe,
            {
              "current-tab": m.value,
              "tab-options": l.value,
              secondary: "",
              onHandleNavigation: A[0] || (A[0] = (P) => (m.value = P)),
            },
            null,
            8,
            ["current-tab", "tab-options"]
          ),
          m.value === 0
            ? (o(),
              n("div", _i, [
                C(
                  $e,
                  {
                    value: i.value,
                    dark: "",
                    onUpdate: A[1] || (A[1] = (P) => (i.value = P)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          t.value.length > 0
            ? (o(),
              n("div", Pi, [
                (o(!0),
                n(
                  j,
                  null,
                  L(
                    t.value,
                    (P) => (
                      o(),
                      n("div", { key: P.name, class: "class-abilitie-card" }, [
                        C(Be, { power: P, onHandleAdd: d }, null, 8, ["power"]),
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
  da = V(Mi, [["__scopeId", "data-v-bb507b22"]]),
  Di = { class: "class-abilities-container" },
  Ri = { class: "search-container" },
  Vi = { class: "class-abilities-content" },
  Ti = R({
    __name: "BackgroundPower",
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const v = b,
        h = (m) => v("handleAddPower", m),
        u = $([]),
        p = $("");
      Ee(() => {
        for (const m of qs) u.value.push(m.power);
      });
      const l = X(() =>
        u.value
          .filter((m) => K(m.name, p.value))
          .sort((m, i) => m.name.localeCompare(i.name))
      );
      return (m, i) => (
        o(),
        n("div", Di, [
          e("div", Ri, [
            C(
              $e,
              {
                value: p.value,
                dark: "",
                onUpdate: i[0] || (i[0] = (d) => (p.value = d)),
              },
              null,
              8,
              ["value"]
            ),
          ]),
          e("div", Vi, [
            (o(!0),
            n(
              j,
              null,
              L(
                l.value,
                (d) => (
                  o(),
                  n("div", { key: d.name, class: "class-abilitie-card" }, [
                    C(Be, { power: d, onHandleAdd: h }, null, 8, ["power"]),
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
  Oi = V(Ti, [["__scopeId", "data-v-5db4501a"]]),
  wi = [
    {
      name: "Aprender Ritual",
      element: "Varies",
      description:
        "<p>Através de uma conexão com as memórias de ocultistas do passado e os segredos das entidades, você aprende e pode conjurar um ritual de 1º circle à sua escolha. Além disso, você pode substituir um ritual que já conhece por outro. A partir de 45% de NEX, quando escolhe este poder, você aprende um ritual de até 2nd circle e, a partir de 75% de NEX, aprende um ritual de até 3rd circle. Você pode escolher esse poder quantas vezes quiser, mas está sujeito ao limite de rituais conhecidos. <em>Este poder conta como um poder do elemento do ritual escolhido.</em></p>",
          },
    {
      name: "Resistir a <Elemento>",
      element: "Varies",
      description:
        "<p>Escolha entre Knowledge, Energy, Death ou Blood. Você recebe resistência 10 contra esse elemento. <em>Este poder conta como um poder do elemento escolhido.</em></p><p><span>Afinidade:</span> aumenta a resistência para 20.</p>",
          },
    {
      name: "Expansão de Conhecimento",
      element: "Knowledge",
      description:
        "<p>Você se conecta com o Conhecimento do Outro Lado, rompendo os limites de sua compreensão. Você aprende um poder de classe que não pertença à sua classe (caso o poder possua pré-requisitos, você precisa preenchê-los). <em>Pré-requisito:</em> Knowledge 1.</p><p><span>Afinidade:</span> você aprende um segundo poder de classe que não pertença à sua classe.</p>",
          },
    {
      name: "Percepção Paranormal",
      element: "Knowledge",
      description:
        "<p>O Conhecimento sussurra em sua mente. Em cenas de investigação, sempre que fizer um teste para procurar pistas, você pode rolar novamente um dado com resultado menor que 10. Você deve aceitar a segunda rolagem, mesmo que seja menor que a primeira.</p><p><span>Afinidade:</span> você pode rolar novamente até dois dados com resultado menor que 10.</p>",
          },
    {
      name: "Precognição",
      element: "Knowledge",
      description:
        "<p>Você possui um “sexto sentido” que o avisa do perigo antes que ele aconteça. Você recebe +2 em Defesa e em testes de resistência. <em>Pré-requisito:</em> Knowledge 1.</p><p><span>Afinidade:</span> você fica imune à condição desprevenido.</p>",
          },
    {
      name: "Sensitivo",
      element: "Knowledge",
      description:
        "<p>Você consegue sentir as emoções e intenções de outros personagens, como medo, raiva ou malícia, recebendo +5 em testes de Diplomacia, Intimidação e Intuição.</p><p><span>Afinidade:</span> quando você faz um teste oposto usando uma dessas perícias, o oponente sofre –1d20.</p>",
          },
    {
      name: "Visão do Oculto",
      element: "Knowledge",
      description:
        "<p>Você não enxerga mais pelos olhos, mas sim pela percepção do Conhecimento em sua mente. Você recebe +5 em testes de Percepção e enxerga no escuro.</p><p><span>Afinidade:</span> você ignora camuflagem.</p>",
          },
    {
      name: "Afortunado",
      element: "Energy",
      description:
        "<p>A Energy considera resultados medíocres entediantes. Uma vez por rolagem, você pode rolar novamente um resultado 1 em qualquer dado que não seja d20.</p><p><span>Afinidade:</span> além disso, uma vez por teste, você pode rolar novamente um resultado 1 em d20.</p>",
          },
    {
      name: "Campo Protetor",
      element: "Energy",
      description:
        "<p>Você consegue gerar um campo de Energy que o protege de perigos. Quando usa a ação esquiva, você pode gastar 1 EP para receber +5 em Defesa. <em>Pré-requisito:</em> Energy 1.</p><p><span>Afinidade:</span> quando usa este poder, você também recebe +5 em Reflexo e, até o início de seu próximo turno, se passar em um teste de Reflexo que reduziria o dano à metade, em vez disso não sofre nenhum dano.</p>",
          },
    {
      name: "Causalidade Fortuita",
      element: "Energy",
      description:
        "<p>A Energy o conduz rumo à descobertas. Em cenas de investigação, a DT para procurar pistas diminui em -5 para você até você encontrar uma pista.</p><p><span>Afinidade:</span> a DT para procurar pistas sempre diminui em –5 para você.</p>",
          },
    {
      name: "Golpe de Sorte",
      element: "Energy",
      description:
        "<p>Seus ataques recebem +1 na margem de ameaça. <em>Pré-requisito:</em> Energy 1.</p><p><span>Afinidade:</span> seus ataques recebem +1 no multiplicador de crítico.</p>",
          },
    {
      name: "Manipular Entropia",
      element: "Energy",
      description:
        "<p>Nada diverte mais a Energy do que a possibilidade de um desastre ainda maior. Você pode gastar 2 EP para fazer um alvo em alcance curto (exceto você mesmo) rolar novamente um dos dados em um teste de perícia. <em>Pré-requisito:</em> Energy 1.</p><p><span>Afinidade:</span> o alvo rola novamente todos os dados que você escolher.</p>",
          },
    {
      name: "Encarar a Death",
      element: "Death",
      description:
        "<p>Sua conexão com a Death faz com que você não hesite em situações de perigo. Durante cenas de ação, seu limite de gasto de EP aumenta em +1 (isso não afeta a DT de seus efeitos).</p><p><span>Afinidade:</span> durante cenas de ação, seu limite de gasto de EP aumenta em +2 (para um total de +3).</p>",
          },
    {
      name: "Escapar da Death",
      element: "Death",
      description:
        "<p>A Death tem um interesse especial em sua caminhada. Uma vez por cena, quando receber dano que o deixaria com 0 PV, você fica com 1 PV. Não funciona em caso de dano massivo. <em>Pré-requisito:</em> Death 1.</p><p><span>Afinidade:</span> em vez do normal, você evita completamente o dano. Em caso de dano massivo, você fica com 1 PV.</p>",
          },
    {
      name: "Potencial Aprimorado",
      element: "Death",
      description:
        "<p>A Death lhe concede potencial latente de momentos roubados de outro lugar. Você recebe +1 ponto de esforço por NEX. Quando sobe de NEX, os EP que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder em NEX 30%, recebe 6 EP. Quando subir para NEX 35%, recebe +1 EP adicional, e assim por diante.</p><p><span>Afinidade:</span> você recebe +1 EP adicional por NEX (para um total de +2 EP por NEX).</p>",
          },
    {
      name: "Potencial Reaproveitado",
      element: "Death",
      description:
        "<p>Você absorve os momentos desperdiçados de outros seres. Uma vez por rodada, quando passa num teste de resistência, você ganha 2 EP temporários cumulativos. Os pontos desaparecem no final da cena.</p><p><span>Afinidade:</span> você ganha 3 EP temporários, em vez de 2.</p>",
          },
    {
      name: "Surto Temporal",
      element: "Death",
      description:
        "<p>A sua percepção temporal se torna distorcida e espiralizada, fazendo com que a noção de passagem do tempo nunca mais seja a mesma para você. Uma vez por cena, durante seu turno, você pode gastar 3 EP para realizar uma ação padrão adicional. <em>Pré-requisito:</em> Death 2.</p><p><span>Afinidade:</span> em vez de uma vez por cena, você pode usar este poder uma vez por turno.</p>",
          },
    {
      name: "Anatomia Insana",
      element: "Blood",
      description:
        "<p>O seu corpo é transfigurado e parece desenvolver um instinto próprio separado da sua consciência. Você tem 50% de chance (resultado par em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. <em>Pré-requisito:</em> Blood 2.</p><p><span>Afinidade:</span> você é imune aos efeitos de acertos críticos e ataques furtivos.</p>",
          },
    {
      name: "Arma de Blood",
      element: "Blood",
      description:
        "<p>O Blood devora parte de seu corpo e se manifesta como parte de você. Você pode gastar uma ação de movimento e 2 EP para produzir garras, chifres ou uma lâmina de sangue cristalizado que brota de seu antebraço. Qualquer que seja sua escolha, é considerada uma arma simples leve que você não precisa empunhar e causa 1d6 pontos de dano de Blood. Uma vez por turno, quando você usa a ação agredir, pode gastar 1 EP para fazer um ataque adicional com essa arma. A arma dura até o final da cena, e então se desfaz numa poça de sangue coagulado.</p><p><span>Afinidade:</span> a arma se torna permanentemente parte de você e causa 1d10 pontos de dano de Blood.</p>",
          },
    {
      name: "Blood de Ferro",
      element: "Blood",
      description:
        "<p>O seu sangue flui de forma paranormal e agressiva, concedendo vigor não natural. Você recebe +2 pontos de vida por NEX. Quando sobe de NEX, os PV que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder em NEX 50%, recebe 20 PV. Quando subir para NEX 55%, recebe +2 PV, e assim por diante.</p><p><span>Afinidade:</span> você recebe +5 em Fortitude e se torna imune a venenos e doenças.</p>",
          },
    {
      name: "Blood Fervente",
      element: "Blood",
      description:
        "<p>A intensidade da dor desperta em você sentimentos bestiais e prazerosos que você nem imaginava que existiam. Enquanto estiver machucado, você recebe +1 em Agilidade ou Força, à sua escolha (escolha sempre que este efeito for ativado). <em>Pré-requisito:</em> Blood 2.</p><p><span>Afinidade:</span> o bônus que você recebe em Agilidade ou Força aumenta para +2.</p>",
          },
    {
      name: "Blood Vivo",
      element: "Blood",
      description:
        "<p>A carnificina não pode parar, o Blood precisa continuar fluindo. Na primeira vez que ficar machucado durante uma cena, você recebe cura acelerada 2. Esse efeito nunca cura você acima da metade dos PV máximos (ou seja, você nunca deixa de estar machucado) e termina no fim da cena ou caso você perca a condição machucado. <em>Pré-requisito:</em> Blood 1.</p><p><span>Afinidade:</span> a cura acelerada aumenta para 5.</p>",
          },
  ],
  zi = { class: "class-abilities-container" },
  Hi = { key: 0, class: "class-abilities-content" },
  ji = R({
    __name: "ParanormalPowers",
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const v = b,
        h = [
          { label: "Knowledge", value: 0 },
          { label: "Energy", value: 1 },
          { label: "Death", value: 2 },
          { label: "Blood", value: 3 },
          { label: "Varies", value: 4 },
        ],
        u = $(0),
        p = (m) => v("handleAddPower", m),
        l = X(() => wi.filter((m) => m.element === h[u.value].label));
      return (m, i) => (
        o(),
        n("div", zi, [
          C(
            pe,
            {
              "current-tab": u.value,
              "tab-options": h,
              secondary: "",
              onHandleNavigation: i[0] || (i[0] = (d) => (u.value = d)),
            },
            null,
            8,
            ["current-tab"]
          ),
          l.value.length > 0
            ? (o(),
              n("div", Hi, [
                (o(!0),
                n(
                  j,
                  null,
                  L(
                    l.value,
                    (d) => (
                      o(),
                      n("div", { key: d.name, class: "class-abilitie-card" }, [
                        C(Be, { power: d, onHandleAdd: p }, null, 8, ["power"]),
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
  Ui = V(ji, [["__scopeId", "data-v-05246a49"]]),
  xi = { class: "abilities-modal-content" },
  Ni = { key: 0 },
  Li = { key: 1 },
  Bi = { key: 2 },
  Fi = { key: 3 },
  Qi = { key: 4 },
  Gi = R({
    __name: "AbilitiesModalContent",
    props: { character: {} },
    emits: ["handleCloseModal", "handleAddPower"],
    setup(a, { emit: b }) {
      const v = b,
        h = [
          { label: "Combatant", value: 0 },
          { label: "Specialist", value: 1 },
          { label: "Occultist", value: 2 },
          { label: "Backgrounds", value: 3 },
          { label: "Paranormal Powers", value: 4 },
        ],
        u = $(0),
        p = (m) => (u.value = m),
        l = (m) => v("handleAddPower", m);
      return (m, i) => (
        o(),
        n("div", xi, [
          C(
            pe,
            { "current-tab": u.value, "tab-options": h, onHandleNavigation: p },
            null,
            8,
            ["current-tab"]
          ),
          u.value === 0
            ? (o(),
              n("div", Ni, [
                C(
                  da,
                  { "class-value": G(ze)[0], onHandleAddPower: l },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          u.value === 1
            ? (o(),
              n("div", Li, [
                C(
                  da,
                  { "class-value": G(ze)[1], onHandleAddPower: l },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          u.value === 2
            ? (o(),
              n("div", Bi, [
                C(
                  da,
                  { "class-value": G(ze)[2], onHandleAddPower: l },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          u.value === 3
            ? (o(), n("div", Fi, [C(Oi, { onHandleAddPower: l })]))
            : q("", !0),
          u.value === 4
            ? (o(), n("div", Qi, [C(Ui, { onHandleAddPower: l })]))
            : q("", !0),
        ])
      );
    },
  }),
  Xi = V(Gi, [["__scopeId", "data-v-84328ffc"]]),
  Jo = (a) => (w("data-v-7388a7f6"), (a = a()), z(), a),
  Wi = { class: "modal-content modal-width" },
  Ki = { class: "modal-header" },
  Ji = Jo(() => e("h2", null, "Add Abilities", -1)),
  Yi = Jo(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Zi = [Yi],
  el = { class: "modal-body modal-height" },
  al = R({
    __name: "AbilitiesModal",
    props: { character: {} },
    emits: ["handleAddPower", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        h = [Xi, ks],
        u = [
          { label: "Abilities", value: 0 },
          { label: "My Abilities", value: 1 },
        ],
        p = $(0),
        l = (i) => (p.value = i),
        m = (i) => v("handleAddPower", i);
      return (i, d) => (
        o(),
        n("div", Wi, [
          e("div", Ki, [
            Ji,
            e(
              "button",
              { onClick: d[0] || (d[0] = (t) => i.$emit("handleCloseModal")) },
              Zi
            ),
          ]),
          e("div", el, [
            C(
              ga,
              { value: p.value, options: u, onHandleNavigation: l },
              null,
              8,
              ["value"]
            ),
            (o(),
            N(
              Ne,
              null,
              [
                (o(),
                N(
                  Pe(h[p.value]),
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
  ol = V(al, [["__scopeId", "data-v-7388a7f6"]]),
  W = [
    {
      name: "Short Bullets",
      category: "0",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Munição básica, usada em pistolas, revólveres e submetralhadoras. Um pacote de balas curtas dura duas cenas.</p>",
    },
    {
      name: "Long Bullets",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Maior e mais potente, esta munição é usada em fuzis e metralhadoras. Um pacote de balas longas dura uma cena.</p>",
    },
    {
      name: "Shells",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Usados em espingardas, esses cartuchos são carregados com esferas de chumbo. Um pacote de cartuchos dura uma cena.</p>",
    },
    {
      name: "Fuel",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Um tanque de combustível para lança-chamas. Dura uma cena.</p>",
    },
    {
      name: "Arrows",
      category: "0",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Usadas em arcos e bestas, flechas podem ser reaproveitadas após cada combate. Por isso, um pacote de flechas dura uma missão inteira.</p>",
    },
    {
      name: "Rocket",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Disparado por bazucas. Ao contrário de outras munições, cada foguete dura um único disparo, não uma cena. Para fazer vários ataques, você precisará carregar vários foguetes.</p>",
    },
  ],
  tl = [
    {
      name: "Buttstroke",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "Light",
      damage: "1d4",
      secondaryDamage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "-",
      slots: 0,
      itemType: "weapon",
      description:
        "<p>Você pode usar uma arma de fogo como uma arma corpo a corpo. O dano é 1d4 para armas de fogo leves e de uma mão (como pistolas) e 1d6 para armas de fogo de duas mãos (como fuzis).</p>",
    },
    {
      name: "Knife",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "Light",
      damage: "1d4",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Slashing",
      range: "Short",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma lâmina longa e afiada, como uma navalha, uma faca de churrasco ou uma faca militar (facas de cozinha pequenas causam apenas 1d3 pontos de dano). É uma arma ágil e pode ser arremessada.</p>",
    },
    {
      name: "Hammer",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "Light",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Esta ferramenta comum pode ser usada como arma na falta de opções melhores.</p>",
    },
    {
      name: "Dagger",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "Light",
      damage: "1d4",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Piercing",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma faca de lâmina longa e pontiaguda, usada por cultistas em seus rituais. É uma arma ágil.</p>",
    },
    {
      name: "Bat",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "1d6",
      secondaryDamage: "1d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Um cilindro de madeira maciça. Pode ser um taco de beisebol, um cacetete da polícia, uma tonfa ou apenas uma clava envolta em pregos ou arame farpado. Você pode empunhar um bastão com uma mão (dano 1d6) ou com as duas (dano 1d8).</p>",
    },
    {
      name: "Machete",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Slashing",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma lâmina longa, muito usada como ferramenta para abrir trilhas.</p>",
    },
    {
      name: "Spear",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Piercing",
      range: "Short",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma haste de madeira com uma ponta metálica afiada, a lança é uma arma arcaica, mas usada ainda hoje por artistas marciais. Pode ser arremessada.</p>",
    },
    {
      name: "Staff",
      proficiencie: "Simple Weapons",
      type: "Melee",
      handling: "Two Handed",
      damage: "1d6",
      secondaryDamage: "1d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "0",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Um cabo de madeira ou barra de ferro longo. Inclui cajado o bo usado em artes marciais. É uma arma ágil. Além disso, pode ser usado com Combater com Duas Armas (e poderes similares) para fazer ataques adicionais, como se fosse uma arma de uma mão e uma arma leve.</p>",
    },
    {
      name: "Bow",
      proficiencie: "Simple Weapons",
      type: "Arrow Based",
      handling: "Two Handed",
      damage: "1d6",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Piercing",
      range: "Medium",
      category: "0",
      slots: 2,
      ammunitionName: W[4].name,
      itemType: "weapon",
      description: "<p>Um arco e flecha comum, próprio para tiro ao alvo.</p>",
    },
    {
      name: "Crossbow",
      proficiencie: "Simple Weapons",
      type: "Arrow Based",
      handling: "Two Handed",
      damage: "1d8",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Piercing",
      range: "Medium",
      category: "0",
      slots: 2,
      ammunitionName: W[4].name,
      itemType: "weapon",
      description:
        "<p>Esta arma da antiguidade exige uma ação de movimento para ser recarregada a cada disparo.</p>",
    },
    {
      name: "Pistol",
      proficiencie: "Simple Weapons",
      type: "Firearm",
      handling: "Light",
      damage: "1d12",
      criticalMult: 2,
      criticalRange: 18,
      damageType: "Ballistic",
      range: "Short",
      category: "I",
      slots: 1,
      ammunitionName: W[0].name,
      itemType: "weapon",
      description:
        "<p>Uma arma de mão comum entre policiais e militares por ser facilmente recarregável.</p>",
    },
    {
      name: "Revolver",
      proficiencie: "Simple Weapons",
      type: "Firearm",
      handling: "Light",
      damage: "2d6",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Ballistic",
      range: "Short",
      category: "I",
      slots: 1,
      ammunitionName: W[0].name,
      itemType: "weapon",
      description:
        "<p>A arma de fogo mais comum, e uma das mais confiáveis.</p>",
    },
    {
      name: "Hunting Rifle",
      proficiencie: "Simple Weapons",
      type: "Firearm",
      handling: "Two Handed",
      damage: "2d8",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Ballistic",
      range: "Medium",
      category: "I",
      slots: 2,
      ammunitionName: W[1].name,
      itemType: "weapon",
      description:
        "<p>Esta arma de fogo é bastante popular entre fazendeiros, caçadores e atiradores esportistas.</p>",
    },
    {
      name: "Hatchet",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Light",
      damage: "1d6",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Slashing",
      range: "Short",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Ferramenta útil para cortar madeira, pode ser facilmente encontrada em canteiros de obras e fazendas. Pode ser arremessada.</p>",
    },
    {
      name: "Nunchaku",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Light",
      damage: "1d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Dois bastões curtos de madeira ligados por uma corrente. É uma arma ágil.</p>",
    },
    {
      name: "Chain",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "1d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "0",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Um pedaço de corrente grossa pode ser usado como uma arma bastante efetiva. A corrente fornece +2 em testes para desarmar e derrubar.</p>",
    },
    {
      name: "Sword",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "1d8",
      secondaryDamage: "1d10",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma arma medieval, como uma espada longa dos cavaleiros europeus ou uma cimitarra sarracena. Você pode empunhar uma espada com uma mão (dano 1d8) ou com as duas (dano 1d10).</p>",
    },
    {
      name: "Rapier",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "1d6",
      criticalMult: 2,
      criticalRange: 18,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Esta espada de lâmina fina e comprida é usada por esgrimistas.É uma arma ágil.</p>",
    },
    {
      name: "Axe",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "1d8",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Uma ferramenta importante para lenhadores e bombeiros, um machado pode causar ferimentos terríveis.</p>",
    },
    {
      name: "Mace",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "One Handed",
      damage: "2d4",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "I",
      slots: 1,
      itemType: "weapon",
      description:
        "<p>Bastão com uma cabeça metálica cheia de protuberâncias.</p>",
    },
    {
      name: "Poleaxe",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Two Handed",
      damage: "1d12",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Um machado grande e pesado, usado no corte de árvores largas.</p>",
    },
    {
      name: "Scythe",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Two Handed",
      damage: "2d4",
      criticalMult: 4,
      criticalRange: 20,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Uma ferramenta agrícola, o gadanho é uma versão maior da foice, para uso com as duas mãos. Foi criada para ceifar cereais, mas também pode ceifar vidas.</p>",
    },
    {
      name: "Katana",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Two Handed",
      damage: "1d10",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Originária do Japão, esta espada longa e levemente curvada transcendeu os séculos. É uma arma ágil. Se você for veterano em Luta pode usá-la como uma arma de uma mão.</p>",
    },
    {
      name: "Sledgehammer",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Two Handed",
      damage: "3d4",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Normalmente usada para demolir paredes, também pode ser usada para demolir pessoas. Use estas estatísticas para outras ferramentas de construção civil, como picaretas.</p>",
    },
    {
      name: "Longsword",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Two Handed",
      damage: "2d6",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Enorme e pesada, esta espada de 1,5m de comprimento foi uma das armas mais poderosas em seu tempo.</p>",
    },
    {
      name: "Chainsaw",
      proficiencie: "Tactical Weapons",
      type: "Melee",
      handling: "Two Handed",
      damage: "3d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Slashing",
      range: "-",
      category: "I",
      slots: 2,
      itemType: "weapon",
      description:
        "<p>Uma ferramenta motorizada capaz de causar ferimentos profundos; sempre que rolar um 6 em um dado de dano com uma motosserra, role um dado de dano adicional. Apesar de potente, esta arma é muito desajeitada e impõe uma penalidade de -1d20 nos seus testes de ataque. Ligar uma motosserra gasta uma ação de movimento.</p>",
    },
    {
      name: "Compound Bow",
      proficiencie: "Tactical Weapons",
      type: "Arrow Based",
      handling: "Two Handed",
      damage: "1d10",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Piercing",
      range: "Medium",
      category: "I",
      slots: 2,
      ammunitionName: W[4].name,
      itemType: "weapon",
      description:
        "<p>Este arco moderno usa materiais de alta tensão e um sistema de roldanas para gerar mais pressão. Ao contrário de outras armas de disparo, permite que você aplique seu valor de Força às rolagens de dano.</p>",
    },
    {
      name: "Crossbow",
      proficiencie: "Tactical Weapons",
      type: "Arrow Based",
      handling: "Two Handed",
      damage: "1d12",
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Piercing",
      range: "Medium",
      category: "I",
      slots: 2,
      ammunitionName: W[4].name,
      itemType: "weapon",
      description:
        "<p>Uma besta pesada, capaz de disparos poderosos. Exige uma ação de movimento para ser recarregada a cada disparo.</p>",
    },
    {
      name: "Sub machine gun",
      proficiencie: "Tactical Weapons",
      type: "Firearm",
      handling: "One Handed",
      damage: "2d6",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Ballistic",
      range: "Short",
      category: "I",
      slots: 1,
      ammunitionName: W[0].name,
      itemType: "weapon",
      description:
        "<p>Esta arma de fogo automática pode ser empunhada com apenas uma mão.</p>",
    },
    {
      name: "Shotgun",
      proficiencie: "Tactical Weapons",
      type: "Firearm",
      handling: "Two Handed",
      damage: "4d6",
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Ballistic",
      range: "Short",
      category: "I",
      slots: 2,
      ammunitionName: W[2].name,
      itemType: "weapon",
      description:
        "<p>Arma de fogo longa e com cano liso. A espingarda causa apenas metade do dano em alcance médio ou maior.</p>",
    },
    {
      name: "Assault Rifle",
      proficiencie: "Tactical Weapons",
      type: "Firearm",
      handling: "Two Handed",
      damage: "2d10",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Ballistic",
      range: "Medium",
      category: "II",
      slots: 2,
      ammunitionName: W[1].name,
      itemType: "weapon",
      description:
        "<p>A arma de fogo padrão da maioria dos exércitos modernos. É uma arma automática.</p>",
    },
    {
      name: "Sniper Rifle",
      proficiencie: "Tactical Weapons",
      type: "Firearm",
      handling: "Two Handed",
      damage: "2d10",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Ballistic",
      range: "Long",
      category: "III",
      slots: 2,
      ammunitionName: W[1].name,
      itemType: "weapon",
      description:
        "<p>Esta arma de fogo de uso militar é projetada para disparos longos e precisos. Se for veterano em Pontaria e mirar com um fuzil de precisão, você recebe +5 na margem de ameaça de seu ataque.</p>",
    },
    {
      name: "Rocket Launcher",
      proficiencie: "Heavy Weapons",
      type: "Firearm",
      handling: "Two Handed",
      damage: "10d8",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Bludgeoning",
      range: "Medium",
      category: "III",
      slots: 2,
      ammunitionName: W[5].name,
      itemType: "weapon",
      description:
        "<p>Este lança-foguetes foi concebido como uma arma anti-tanques, mas também se mostrou eficaz contra criaturas. A bazuca causa seu dano no alvo atingido e em todos os seres num raio de 3m; esses seres (mas não o alvo atingido diretamente) têm direito a um teste de Reflexos (DT Agi) para reduzir o dano à metade. Você pode disparar o foguete num ponto qualquer em alcance médio, em vez de num ser específico; nesse caso, não precisa rolar ataque e não tem chance de errar (mas também não acerta nenhum ser diretamente). A bazuca exige uma ação de movimento para ser recarregada a cada disparo.</p>",
    },
    {
      name: "Flamethrower",
      proficiencie: "Heavy Weapons",
      type: "Firearm",
      handling: "Two Handed",
      damage: "6d6",
      criticalMult: 2,
      criticalRange: 20,
      damageType: "Fire",
      range: "Short",
      category: "III",
      slots: 2,
      ammunitionName: W[3].name,
      itemType: "weapon",
      description:
        "<p>Equipamento militar que esguicha líquido inflamável incandescente. Um lança-chamas atinge todos os seres em uma linha de 1,5m de largura com alcance curto, mas não alcança além disso. Faça um único teste de ataque e compare o resultado com a Defesa de todos os seres na área. Além de sofrer dano, seres atingidos ficam em chamas.</p>",
    },
    {
      name: "Machine gun",
      proficiencie: "Heavy Weapons",
      type: "Firearm",
      handling: "Two Handed",
      damage: "2d12",
      criticalMult: 3,
      criticalRange: 19,
      damageType: "Ballistic",
      range: "Medium",
      category: "II",
      slots: 2,
      ammunitionName: W[1].name,
      itemType: "weapon",
      description:
        "<p>Uma arma de fogo pesada, de uso militar. Para atacar com uma metralhadora, você precisa ter Força 4 ou maior ou gastar uma ação de movimento para apoiá-la em seu tripé ou suporte apropriado; caso contrário, sofre –5 em seus ataques. Uma metralhadora é uma arma automática.</p>",
    },
  ],
  sl = [
    {
      name: "Light Armor",
      defense: 5,
      category: "I",
      slots: 2,
      itemType: "protection",
      description:
        "<p>Jaqueta de couro pesada ou um colete de kevlar. Essa proteção é tipicamente usada por seguranças e policiais.</p>",
    },
    {
      name: "Heavy Armor",
      defense: 10,
      category: "II",
      slots: 5,
      itemType: "protection",
      description:
        "<p>Equipamento usado por forças especiais da polícia e pelo exército. Consiste de capacete, ombreiras, joelheiras e caneleiras, além de um colete com várias camadas de kevlar. Fornece resistência a balístico, corte, impacto e perfuração 2. No entanto, por ser desconfortável e volumosa, impõe –5 em testes de perícias que sofrem penalidade de carga.</p>",
    },
    {
      name: "Shield",
      defense: 2,
      category: "I",
      slots: 2,
      itemType: "protection",
      description:
        "<p>Um escudo medieval ou moderno, como aqueles usados por tropas de choque. Para efeitos de proficiência, conta como proteção pesada. Precisa ser empunhado em uma mão e fornece Defesa +2.</p>",
    },
  ],
  nl = [
    {
      name: "Skill Kit",
      tag: "Accessories",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um conjunto de ferramentas necessárias para algumas perícias ou usos de perícias. Sem o kit, você sofre –5 no teste. Existe um kit de perícia para cada perícia que exige este item.</p>",
    },
    {
      name: "Utensil",
      tag: "Accessories",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um item comum que tenha uma utilidade específica, como um canivete, uma lupa, um smartphone ou um notebook. Um utensílio concede +2 em um teste de uma perícia a sua escolha (exceto Luta e Pontaria), definida quando o item é adquirido. Por exemplo, um smartphone pode ser usado para acessar a internet e fornecer bônus em Ciências, enquanto um notebook pode ser preparado para invadir sistemas e fornecer bônus em Tecnologia. Você pode inventar itens menos realistas, como um “detector de mentiras portátil” que fornece +2 em Intuição, mas o mestre tem a palavra final se o utensílio é apropriado ou não. Utensílios sempre ocupam 1 espaço e precisam ser empunhados para que o bônus seja aplicado.</p>",
    },
    {
      name: "Vestment",
      tag: "Accessories",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Uma peça de vestuário que fornece um bônus em uma perícia específica (exceto Luta ou Pontaria). Por exemplo, um par de botas militares pode fornecer +2 em Atletismo, enquanto um terno ou vestido elegante pode fornecer +2 em Diplomacia. Assim como utensílios, o benefício de cada vestimenta deve ser aprovado pelo mestre. Você pode receber os bônus de no máximo duas vestimentas ao mesmo tempo. Vestir ou despir uma vestimenta é uma ação completa.</p>",
    },
    {
      name: "Stun Grenade",
      tag: "Explosives",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Também chamadas de flash-bang, por criarem um estouro barulhento e luminoso. Seres na área ficam atordoados por 1 rodada (Fortitude DT Agi reduz para ofuscado e surdo por uma rodada).</p>",
    },
    {
      name: "Frag Grenade",
      tag: "Explosives",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Espalha fragmentos perfurantes. Seres na área sofrem 8d6 pontos de dano de perfuração (Reflexos DT Agi reduz à metade).</p>",
    },
    {
      name: "Smoke Grenade",
      tag: "Explosives",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Produz uma fumaça espessa e escura. Seres na área ficam cegos e sob camuflagem total. A fumaça dura 2 rodadas.</p>",
    },
    {
      name: "Incendiary Grenade",
      tag: "Explosives",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Para usar uma granada, você precisa empunhá-la e então gastar uma ação padrão para arremessá-la em um ponto à sua escolha em alcance médio. A granada afeta um raio de 6m a partir do ponto de impacto. O efeito que ela causa varia conforme o tipo de granada.</p><p>Espalha labaredas incandescentes. Seres na área sofrem 6d6 pontos de dano de fogo e ficam em chamas (Reflexos DT Agi reduz o dano à metade e evita a condição em chamas).</p>",
    },
    {
      name: "Antipersonnel mine",
      tag: "Explosives",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta mina é ativada por controle remoto. Se você estiver a até alcance longo dela, pode gastar uma ação padrão para detoná-la. Ao explodir, a mina dispara centenas de bolas de aço em um cone de 6m, causando 12d6 pontos de dano de perfuração em todos os seres na área (Reflexos DT Int reduz à metade). Você define a direção do cone quando posiciona a mina no chão. Instalar a mina exige uma ação completa e um teste de Tática contra DT 15. Caso falhe, você gasta a mina, mas ela não funciona. Encontrar uma mina instalada exige um teste de Percepção (DT igual ao resultado do seu teste para instalá-la).</p>",
    },
    {
      name: "Handcuffs",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Algemas. Um par de algemas de aço. Para prender uma pessoa que não esteja indefesa você precisa empunhar a algema, agarrar a pessoa e então vencer um novo teste de agarrar contra ela. Você pode prender os dois pulsos da pessoa (–5 em testes que exijam o uso das mãos, impede conjuração) ou um dos pulsos dela em um objeto imóvel adjacente, caso haja, para impedir que ela se mova. Escapar das algemas exige um teste de Acrobacia contra DT 30 (ou ter as chaves...).</p>",
    },
    {
      name: "Grappling hook",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um gancho de aço amarrado na ponta de uma corda para se fixar em muros, janelas, parapeitos de prédios... Prender um arpéu exige um teste de Pontaria (DT 15). Subir um muro com a ajuda de uma corda fornece +5 no teste de Atletismo.</p>",
    },
    {
      name: "Bandolier",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um cinto com bolsos e alças. Uma vez por rodada, você pode sacar ou guardar um item em seu inventário como uma ação livre.</p>",
    },
    {
      name: "Binoculars",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Estes binóculos militares fornecem +5 em testes de Percepção para observar coisas distantes.</p>",
    },
    {
      name: "Signal Jammer",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este dispositivo compacto emite ondas que “poluem” a frequência de rádio usada por celulares, impedindo que qualquer aparelho desse tipo em alcance médio se conecte.</p>",
    },
    {
      name: "Healing ointement",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um spray contendo um remédio com potente efeito cicatrizante. Você pode gastar uma ação padrão e este item para curar 2d8+2 PV em você ou em um ser adjacente.</p>",
    },
    {
      name: "Rope",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um rolo com 10 metros de corda resistente. Possui diversas utilidades: pode ajudar a descer um buraco ou prédio (+5 em testes de Atletismo nessas situações), amarrar pessoas inconscientes etc.</p>",
    },
    {
      name: "Survival Equipment",
      tag: "Operational Items",
      category: "0",
      slots: 2,
      itemType: "misc",
      description:
        "<p>Uma mochila com saco de dormir, panelas, GPS e outros itens úteis para sobreviver no mato. Fornece +5 em testes de Sobrevivência para acampar e orientar-se e permite que você faça esses testes sem treinamento.</p>",
    },
    {
      name: "Tactical flashlight",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Ilumina lugares escuros. Além disso, você pode gastar uma ação de movimento para mirar a luz nos olhos de um ser em alcance curto. Ele fica ofuscado por 1 rodada, mas imune à lanterna pelo resto da cena.</p>",
    },
    {
      name: "Gas Mask",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Uma máscara com filtro que cobre o rosto inteiro. Fornece +10 em testes de Fortitude contra efeitos que dependam de respiração.</p>",
    },
    {
      name: "Military backpack",
      tag: "Operational Items",
      category: "I",
      slots: -2,
      itemType: "misc",
      description:
        "<p>Uma mochila leve e de alta qualidade. Ela não usa nenhum espaço e aumenta sua capacidade de carga em 2 espaços.</p>",
    },
    {
      name: "Thermal Vision goggles",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Estes óculos eliminam a penalidade em testes por camuflagem.</p>",
    },
    {
      name: "Crowbar",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta barra de ferro fornece +5 em testes de Força para arrombar portas. Pode ser usada em combate como um bastão.</p>",
    },
    {
      name: "Dart Gun",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta arma dispara dardos com um poderoso sonífero. Para disparar em um ser, faça um ataque à distância contra ele. Se acertá-lo, ele fica inconsciente até o fim da cena (Fortitude DT Agi reduz para desprevenida e lenta por uma rodada). A pistola vem com 2 dardos. Uma caixa adicional com 2 dardos é um item de categoria 0 que ocupa 1 espaço.</p>",
    },
    {
      name: "Flare Gun",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta pistola dispara um sinalizador luminoso, útil para chamar outras pessoas para sua localização. Pode ser usada uma vez como uma arma de disparo leve com alcance curto que causa 2d6 pontos de dano de fogo. A pistola vem com 2 cargas. Uma caixa adicional com 2 cargas é um item de categoria 0 que ocupa 1 espaço.</p>",
    },
    {
      name: "Brass knuckles",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta peça de metal e usada entre os dedos e permite socos mais perigosos — fornece +1 em rolagens de dano desarmado. Uma soqueira pode receber modificações e maldições de armas corpo a corpo e aplica os efeitos delas em seus ataques desarmados.</p>",
    },
    {
      name: "Pepper Spray",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este spray dispara um composto químico que causa dor e lacrimejo. Você pode gastar uma ação padrão para atingir um ser adjacente. O ser fica cego por 1d4 rodadas (Fortitude DT Agi evita). A carga do spray dura dois usos.</p>",
    },
    {
      name: "Tazer",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um dispositivo de eletrochoque capaz de atordoar ou até incapacitar um alvo. Você pode gastar uma ação padrão para atingir um ser adjacente. O alvo sofre 1d6 pontos de dano de eletricidade e fica atordoado por uma rodada (Fortitude DT Agi evita). A bateria do taser dura dois usos.</p>",
    },
    {
      name: "Hazmat Suit",
      tag: "Operational Items",
      category: "I",
      slots: 2,
      itemType: "misc",
      description:
        "<p>Uma roupa impermeável e que cobre o corpo inteiro, usada para impedir o contato do usuário com materiais tóxicos. Fornece +5 em testes de resistência contra efeitos ambientais e resistência a químico 10.</p>",
    },
    {
      name: "(Element) Lashes",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Cordas ou correntes feitas de um elemento Paranormal específico. As amarras são preparadas para imobilizar criaturas do Outro Lado que sejam vulneráveis ao elemento que as compõem e podem ser usadas de duas formas.</p><p><span>Armadilha.</span> Você gasta as amarras, uma ação completa e 2 EP e prepara uma armadilha de 3x3m. Uma criatura que atravesse o espaço pela primeira vez em seu turno precisa fazer um teste de de Reflexos (DT Int); se falhar, fica imóvel até o final da cena. Mesmo se passar, considera o espaço ocupado pela armadilha como terreno difícil.</p><p><span>Laçar.</span> Você gasta uma ação padrão e 1 EP e escolhe uma criatura em alcance curto. Se falhar num teste de Vontade (DT Agi), a criatura fica paralisada até o início de seu próximo turno, quando pode repetir o teste. Manter a criatura enlaçada requer o gasto de 1 EP por rodada.</p>",
    },
    {
      name: "Paranormal Aura Camera",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta câmera amaldiçoada com Energia possui sigilos de Conhecimento para capturar auras paranormais. Tirar uma foto gasta uma ação padrão e 1 EP. As fotos são instantâneas e revelam a presença de auras paranormais em pessoas e objetos. As auras são da cor associada ao elemento.</p>",
    },
    {
      name: "(Element) Ritualistic Components",
      tag: "Paranormal Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um conjunto de objetos utilizados em rituais de um elemento entre Sangue, Morte, Conhecimento ou Energia (não existem componentes ritualísticos de Medo). Componentes ritualísticos são necessários para a conjuração de rituais do elemento em questão.</p><p><span>Energia:</span> eletricidade, dispositivos tecnológicos (celulares, computadores etc.), circuitos eletrônicos, fontes de calor e luz, pilhas, baterias, cabos de cobre e prata, pólvora, moedas, dados, ímãs...</p><p><span>Sangue:</span> órgãos, carne, sangue, animais vivos (para sacrifício), navalhas, agulhas, arame farpado, correntes, metal enferrujado, fluídos corporais...</p><p><span>Morte:</span> ossos, dentes, cinzas, fios de cabelo, cristais pretos, relógios, galhos secos, folhas secas, plantas mortas, raízes, areia, poeira, Lodo...</p><p><span>Conhecimento:</span> escrituras, papéis, livros, pergaminhos, pedras preciosas, ouro, cordas, tecido, cristais brancos, vidro, máscaras, instrumentos de escrita (lápis, caneta, tinta, giz etc.)...</p>",
    },
    {
      name: "Paranormal Pulse Emitter",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Esta pequena caixa coberta de sigilos foi desenvolvida para servir como uma “isca” de criaturas paranormais. Ativar a caixa gasta uma ação completa e 1 EP. A caixa emite um pulso de um elemento definido pelo ativador, que atrai criaturas do mesmo elemento e afasta criaturas do elemento oposto. As criaturas afetadas têm direito a um teste de Vontade (DT Pre) para evitar o efeito.</p>",
    },
    {
      name: "Paranormal Noises Wiretap",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este microfone funciona como um aparato espião, com a diferença que consegue captar ruídos paranormais. Ativar a escuta gasta uma ação completa e 2 EP e faz com que ela grave ruídos por até 24 horas. Ouvir a escuta fornece +5 em testes de Ocultismo para identificar criatura.</p>",
    },
    {
      name: "Membrane Stability Meter",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Um dispositivo complexo, composto por diversos medidores — de temperatura, campo magnético, dilatação temporal... Um agente treinado em Ocultismo pode usar o medidor para avaliar o estado da Membrana em uma área, o que indica a chance de uma entidade se manifestar nela. Um ambiente com valores racionais e constantes ao longo de algumas horas dificilmente originará uma criatura ou manifestação perigosa. Porém, se as leituras apresentarem dados inexplicáveis ou com grandes variações, o lugar poderá conter uma entidade. Apesar de ser um bom indicativo, o medidor não fornece respostas definitivas, já que um ambiente com a Membrana danificada ainda pode não ter sido afetado por manifestações, assim como um lugar com a Membrana protegida por conter uma criatura poderosa vinda de outro lugar.</p>",
    },
    {
      name: "(Element) Paranormal Manifestation Scanner",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Este item é composto por um dispositivo conectado a pequenos objetos amaldiçoados de uma entidade específica e adornado com uma série de sigilos. Ativar o scanner é uma ação padrão. Quando ativado, o scanner consome 1 EP por rodada do usuário, que sempre sabe a direção de todas as manifestações paranormais ativas (rituais, criaturas, itens amaldiçoados etc.) do elemento escolhido em alcance longo. Se o elemento principal de uma criatura for outro, mas ela tiver como complemento o elemento escolhido do scanner, também será detectada.</p>",
    },
  ],
  rl = [
    {
      name: "Coração Pulsante",
      element: "Blood",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um coração humano banhado em sangue, pulsando como se ainda estivesse dentro de um corpo.</em> Se estiver empunhando o <em>coração pulsante</em> e sofrer dano, você pode gastar uma reação para espremer o item e reduzir esse dano pela metade. Sempre que usa o coração, você deve fazer um teste de Fortitude (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, o item é destruído. Como o coração continua pulsando incessantemente com Blood, qualquer compartimento em que estiver deve ser drenado uma vez por dia, caso contrário o Blood poderá escorrer e danificar outros objetos com os quais entrar em contato.</p>",
    },
    {
      name: "Coroa de Espinhos",
      element: "Blood",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma coroa, colar ou pulseira feita de um material que lembra os espinhos de uma roseira banhados em sangue.</em> Uma vez por rodada, você pode usar uma reação para transformar qualquer dano mental que fosse sofrer em dano de Blood, mas não consegue mais recuperar sanidade por descanso enquanto estiver vestindo o item. É preciso vestir o item por uma semana para ativar seus efeitos.</p>",
    },
    {
      name: "Faixas da Vidência",
      element: "Death",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma faixa de tecido, geralmente preto, com pequenos símbolos de Death gravados em suas bordas.</em> O usuário é considerado cego para alvos além do alcance médio. No entanto, a faixa distorce a percepção temporal do usuário dentro do alcance, fazendo com que enxergue os eventos fora da linha do tempo. Contra efeitos em alcance médio, o usuário nunca fica desprevinido, recebe +10 em testes de resistência e recebe +10 na Defesa quando esquiva. Além disso, uma vez por cena de investigação, pode gastar 2 EP para ter um vislumbre do passado que auxilia a ação de procurar pistas, fornecendo +5 para o teste.</p>",
    },
    {
      name: "Frasco de Vitalidade",
      element: "Blood",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este pequeno recipiente de vidro possui uma tampa de metal gravada com um selo de Blood.</em> Você pode gastar 1 minuto e sofrer até 20 pontos de dano para encher o <em>frasco</em> com seu próprio sangue. Enquanto estiver no recipiente, seu sangue se mantém fresco. Você pode gastar uma ação padrão para beber o conteúdo do frasco e recuperar a mesma quantidade de PV que armazenou nele, mas deve passar em um teste de Fortitude (DT 20) para não ficar enjoado por uma rodada.</p>",
    },
    {
      name: "Pérola de Sangue",
      element: "Blood",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma esfera de aproximadamente 2cm de diâmetro, lisa e reluzente como uma pérola, mas de cor vermelho-vivo.</em> Você pode gastar uma ação de movimento para forçar a <em>pérola de sangue</em> contra a sua pele e absorvê-la, recebendo uma injeção de adrenalina que fornece +5 em testes de Agilidade, Força e Vigor e testes baseados nesses atributos até o final da cena. Ao final da cena, você precisa fazer um teste de Fortitude (DT 20). Se falhar, fica fatigado até o final do dia. Se falhar por 5 ou mais, sofre uma parada cardíaca e fica morrendo. Se morrer dessa forma, você se torna uma criatura de sangue de VD similar ao seu NEX, à escolha do mestre.</p>",
    },
    {
      name: "Punhos Enraivecidos",
      element: "Blood",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de soqueiras feitas de um metal vermelho vivo e gravado com vários símbolos de Blood.</em> Seus ataques desarmados passam a causar 1d8 pontos de dano de Blood. Sempre que acerta um ataque desarmado, pode fazer outro ataque desarmado contra o mesmo alvo, pagando 2 EP por cada ataque já realizado no turno. Ou seja, pode fazer o primeiro ataque extra gastando 2 EP, um segundo ataque extra gastando mais 4 EP e assim por diante, até errar um ataque ou não ter mais pontos de esforço.</p>",
    },
    {
      name: "Seringa de Transfiguração",
      element: "Blood",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Esta seringa é feita de um material estranho e de aparência orgânica, cheio de veias pulsantes.</em> Você pode gastar uma ação padrão para sugar o sangue de um alvo adjacente e encher a seringa (se o alvo não for voluntário, você precisa acertá-lo com um ataque corpo a corpo). Se houver sangue na seringa, você pode gastar uma ação padrão para injetá-lo em qualquer outra pessoa adjacente, que terá sua aparência transfigurada para a do dono do sangue, como se estivesse sob efeito do ritual <em>Distorcer Aparência</em>, com duração aumentada para um dia. Quando o efeito acabar, o alvo deve rolar 1d6. Em um resultado 1, o processo de voltar à sua aparência é especialmente traumático, danificando seus músculos e órgãos e fazendo com que ele perca 1 PV permanentemente.</p>",
    },
    {
      name: "Amarras Mortais",
      element: "Death",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de correntes de ferro negro que se enrolam nos antebraços do usuário como um bracelete.</em> Uma vez por rodada, você pode gastar uma ação padrão e 2 EP para usar a manobra agarrar contra um alvo Grande ou menor em alcance curto, recebendo +10 em seu teste oposto. Você também pode usar uma ação de movimento para puxar um alvo agarrado para perto, deixando-o adjacente.</p>",
    },
    {
      name: "Casaco de Lodo",
      element: "Death",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um sobretudo preto fosco que tem uma cor inexplicavelmente opaca, como se absorvesse a luz completamente.</em> Essa vestimenta é na verdade feita de Lodo ativo, protegendo o usuário contra ataques ao amortecer o impacto deles. O usuário recebe resistência a corte, impacto, Death e perfuração 5, mas se torna vulnerável a dano balístico e de Energy.</p>",
    },
    {
      name: "Coletora",
      element: "Death",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este punhal possui a lâmina completamente negra e a empunhadura em espiral.</em> Você pode gastar uma ação completa para apunhalar uma pessoa que esteja morrendo. Ao fazer isso, você mata o alvo e a <em>Coletora</em> absorve os resquícios do tempo de vida dela, armazenando 1d8 EP. O punhal pode armazenar um total de 20 EP, que você pode usar como se fossem seus desde que esteja portando a adaga a pelo menos uma semana. Enquanto portar a adaga, você é acometido por pesadelos sobre o sofrimento final de suas vítimas e sempre tem condições de descanso ruins, independentemente de onde ou como descansar.</p>",
    },
    {
      name: "Crânio Espiral",
      element: "Death",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um crânio envelhecido, apodrecido e distorcido em um formato espiral. Lodo escorre de seus olhos vazios, como lágrimas negras.</em> Uma vez por rodada, se estiver empunhando o <em>crânio</em>, você pode gastar uma ação livre para ativá-lo. Quando faz isso, você recebe uma ação padrão adicional na rodada. Sempre que usa o <em>crânio</em>, você deve fazer um teste de Vontade (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, você recebe os benefícios do item, mas envelhece 1d4 anos e não pode mais usá-lo nesse dia.</p>",
    },
    {
      name: "Frasco de Lodo",
      element: "Death",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um pequeno frasco contendo lodo de Death.</em> Aplicar o conteúdo do frasco em um ferimento é uma ação padrão. Se aplicado em um ferimento recente (sofrido até uma rodada atrás) o lodo recupera 6d8+20 pontos de vida. Caso a ferida seja anterior à rodada passada, role um dado: em um resultado par, o lodo recupera 3d8+10 PV; em um resultado ímpar, a ferida infecciona, causando 3d8+10 pontos de dano de Death. O frasco possui lodo para uma única ativação.</p>",
    },
    {
      name: "Vislumbre do Fim",
      element: "Death",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de óculos escuros repleto de símbolos e espirais em sua armação metálica.</em>  Você pode gastar uma ação de movimento para se concentrar em um ser que esteja vendo e obter informações sobre a morte dele. Em pessoas comuns, essa informação se traduz em um contador de tempo, que pode se alterar conforme as ações de um marcado modificam seu futuro. Em Marcados ou criaturas, essas informações se traduzem na informação de qual é o pior valor de resistência do alvo (entre Fortitude, Reflexos ou Vontade) e de quaisquer vulnerabilidades que o alvo possua.</p>",
    },
    {
      name: "Anéis do Elo Mental",
      element: "Knowledge",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um par de anéis dourados, cada um contendo um dos símbolos do ritual Ligação Telepática.</em>  Os anéis devem ser usados por duas pessoas por 24h para serem ativados. Após esse período, os dois são conectados por um ritual de <em>Invadir Mente</em> (ligação telepática) que dura enquanto estiverem usando os anéis. Enquanto a ligação estiver ativa, as duas pessoas fazem testes de Vontade usando a melhor quantidade de dados e bônus entre as duas. Porém, qualquer dano mental sofrido por uma delas será sofrido pela outra (ou seja, se numa rodada ambas sofrerem 10 pontos de dano mental, cada uma irá perder 20 pontos de sanidade) e qualquer condição mental ou de medo que afetar uma delas automaticamente afetará a outra.</p>",
    },
    {
      name: "Lanterna Reveladora",
      element: "Knowledge",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma lanterna dourada decorada com sigilos do Outro Lado.</em> Ativar a lanterna gasta uma ação padrão e 1 EP. Ela fica ligada por uma cena e emite luz com as propriedades do ritual <em>Terceiro Olho</em>. A luz da <em>lanterna</em> incomoda criaturas de Blood. Se elas foram iluminadas pela luz dela, irão atacá-lo em detrimento de quaisquer outros alvos na mesma categoria de alcance.</p>",
    },
    {
      name: "Máscara das Pessoas nas Sombras",
      element: "Knowledge",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p>Principal ferramenta e marca registrada da Seita das Máscaras, esse item quando usado por alguém que não pertence à Seita ainda carrega grande poder. O usuário recebe resistência a Knowledge 10 e pode gastar uma ação de movimento e 2 EP para “entrar” em uma sombra adjacente e se transportar instantaneamente para outra sombra que possa ver em alcance médio. Vestir a <em>Máscara</em> é como assinar um acordo e pode ter consequências severas se seu portador despertar o interesse da mente única das Máscaras...</p>",
    },
    {
      name: "Munição Jurada",
      element: "Knowledge",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma bala de arma de fogo com um sigilo gravado.</em> O usuário pode fazer um ritual de uma hora para vincular essa munição a um ser que conheça. Se usada contra esse ser, a bala fornece +10 no teste de ataque, dobra a margem de ameaça da arma e causa +6d12 pontos de dano de Knowledge. Possuir uma <em>munição juramentada</em> deixa o usuário obcecado em abater seu alvo, impondo –2 em Defesa e em testes de ataque contra quaisquer outros alvos.</p>",
    },
    {
      name: "Peitoral da Segunda Chance",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um dispositivo que pode ser vestido como um pequeno colete que pode ser prendido ao redor do peito, contendo uma peça central em cima do coração formada por um amontoado de partes eletrônicas seguradas por fios metálicos entrelaçados, passando por baixo dos braços e levando até um fecho na parte das costas.</em> Se você for reduzido a 0 pontos de vida, o colete automaticamente gastará 5 EP seus para reanimá-lo com 4d10 PV através de um surto de Energy por todo o seu corpo. A reanimação falha se você não tiver EP suficiente. Cada vez que o item é ativado, existe uma chance (1 em 1d10) da descarga energética ser forte demais e matá-lo instantaneamente, transformando seu corpo e equipamento em plasma de Energy pura (exceto pelo colete).</p>",
    },
    {
      name: "Pergaminho da Pertinácia",
      element: "Knowledge",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um pergaminho amarelado e antigo. Mesmo enrolado, é possível vislumbrar sigilos dourados brilhando na parte interior.</em> Você pode gastar uma ação padrão para encarar os sigilos do Outro Lado inscritos no pergaminho, recebendo 5 EP temporários até o fim da cena. Sempre que usa este item, você deve fazer um teste de Ocultismo (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, o <em>pergaminho</em> se desfaz.</p>",
    },
    {
      name: "Arcabuz dos Moretti",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma arma muito antiga, reminiscente do século XV, mas que de alguma forma ainda se mantém funcionando perfeitamente, apesar das rachaduras que cercam toda a superfície do objeto e emitem uma suave luz rosada do interior de suas fissuras. Em seu cabo de madeira está gravado um selo contendo a letra M.</em> O <em>arcabuz</em> é uma arma simples, de fogo e de uma mão que fornece +2 em testes de ataque. Sempre que dispara esta arma, o usuário deve rolar 1d6 junto com o teste de ataque. O resultado do d6 define qual o dano da arma nesse disparo: 1) 2d4, 2) 2d6, 3) 2d8, 4) 2d10, 5) 2d12, 6) 2d20. A arma tem alcance curto, crítico x3 e não precisa de munição.</p>",
    },
    {
      name: "Bateria Reversa",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma pequena bateria elétrica repleta de sigilos paranormais.</em> Você pode gastar uma ação padrão e 2 EP para fazer a bateria absorver a carga de qualquer dispositivo eletrônico em alcance curto — celular, notebook ou mesmo um automóvel —, fazendo-o ficar automaticamente descarregado. Se a bateria estiver cheia, você pode gastar uma ação padrão para transferir a carga dela para um dispositivo eletrônico descarregado em alcance curto, que é instantaneamente reenergizado. Sempre que usa a <em>bateria</em>, você deve fazer um teste de Ocultismo (DT 15 + 5 por uso adicional no mesmo dia). Se falhar, ela explode, causando 12d6 pontos de dano de Energy em todos os seres a até 3 metros.</p>",
    },
    {
      name: "Relógio de Arnaldo",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um relógio de ouro, meio manchado e com um aspecto levemente queimado no exterior. Ao abrir, é possível enxergar a foto de um homem de barba e óculos ao lado de uma criança simpática, também segurando um relógio de ouro.</em> Uma vez por rodada, você pode gastar 1 EP para rolar novamente qualquer dado com o resultado 1. O custo para usar o <em>relógio</em> aumenta em +1 para cada vez que for ativado no mesmo dia.</p>",
    },
    {
      name: "Talismã da Sorte",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Uma figa, moeda, pé de coelho ou qualquer outro badulaque modificado por um ritual.</em> Sempre que você estiver vestindo o talismã e sofrer dano, pode gastar uma reação e 3 EP para rolar 1d4. Em um resultado 2 ou 3, você evita completamente o dano. Em um resultado 4, você evita o dano, mas o talismã queima e vira cinzas. Por fim, em um resultado 1, a sorte se reverte em azar: em vez de evitar o dano, você sofre o dobro do dano que sofreria e o talismã queima e vira cinzas.</p>",
    },
    {
      name: "Teclado de Conexão Neural",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um teclado USB coberto de glifos de Energy.</em> Sempre que você plugar o <em>teclado</em> a um computador (uma ação de movimento), o item irá gerar ondas eletromagnéticas que enviam os sinais do sistema diretamente para as sinapses de seu cérebro, efetivamente conectando a sua mente com a máquina. Você pode usar o computador sem nenhum impedimento tecnológico ou de idioma, recebe +10 em testes para hackear e gasta metade do tempo normal para localizar arquivos. Porém, devido ao estresse que seu cérebro sofre por se conectar diretamente a um sistema digital, você sofre 1d6 pontos de dano mental por rodada que usar o <em>teclado</em>.</p>",
    },
    {
      name: "Tela do Pesadelo",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este dispositivo com tela (celular, tablet, TV...) contém diversos sigilos minúsculos em suas bordas.</em> Você pode gastar uma ação padrão e 2 EP para ativar a <em>tela</em>. A próxima pessoa que tocá-la verá uma imagem horrível saindo da tela e avançando contra ela. A imagem é apenas uma ilusão, mas os traumas que ela causa são reais! A pessoa deve fazer um teste de Vontade (DT determinada pelo usuário da tela +5). Se falhar, fica atordoada, sofre 4d6 pontos de dano mental e precisa repetir o teste na próxima rodada. O efeito continua até a pessoa passar no teste ou enlouquecer (ou outra pessoa destruir a <em>tela</em>). Uma vez que gere esse efeito, a <em>tela</em> fica inerte até você ativá-la novamente.</p>",
    },
    {
      name: "Veículo Energizado",
      element: "Energy",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p>O motor deste veículo foi modificado paranormalmente para não precisar de combustível. Além disso, um motorista pode gastar uma reação e fazer um teste de Pilotagem (DT 25) para fazer o carro e seus ocupantes assumirem uma forma de energia pura por um instante, suficiente para evitar colidir com um objeto, atravessando-o como se fossem incorpóreos.</p>",
    },
    {
      name: "Jaqueta de Veríssimo",
      element: "Fear",
      itemType: "cursedItem",
      category: "IV",
      slots: 1,
      description:
        "<p><em>Uma jaqueta de estilo aviador feita de couro marrom com a gola forrada de pele branca.</em> Esta vestimenta de aparência comum já foi usada por vários agentes importantes e experientes da Ordem, e presenciou inúmeras batalhas e sacrifícios. Ao longo de sua história, a <em>jaqueta</em> foi passada de um agente para o outro como presente ou herança diversas vezes. Você recebe resistência a dano paranormal 15. Além disso, sempre que um aliado adjacente for sofrer dano de qualquer tipo, você pode gastar uma reação e 2 EP para se tornar o alvo do dano no lugar. Este é um item único (apenas um agente pode escolhê-la) de categoria IV.</p>",
    },
    {
      name: "Dedo Decepado",
      element: "Varies",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Este item grotesco é um dedo decepado e seco de alguém com alto nível de exposição paranormal.</em> Você recebe um poder paranormal que o dono do dedo possuía. O elemento do poder define o elemento da maldição. Sempre que usar as ações dormir ou relaxar em um interlúdio, role 1d4. Em um resultado 1, você é assombrado por memórias do dono do dedo e não recupera nenhum PV, EP ou sanidade. Além disso, ser visto usando esse item causa uma penalidade de –10 em testes de Diplomacia e pode causar reações severas de NPCs, a critério do mestre. Você precisa vestir o item por uma semana para que seu efeito comece a funcionar.</p>",
    },
    {
      name: "Selos Paranormais",
      element: "Varies",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      description:
        "<p><em>Um conjunto de sigilos gravados em um objeto pequeno, como um pergaminho, moeda, pedra preciosa, osso humano...</em> Cada selo contém um ritual. Para ativar um selo, você deve empunhá-lo e ler os sigilos em voz alta. Isso exige uma ação padrão ou a ação necessária para conjurar o ritual, o que for maior. Você também deve conhecer o ritual inscrito nele ou passar em um teste de Ocultismo (DT 20 + custo em EP do ritual).</p><p>Quando o selo é ativado, o ritual é conjurado e o selo se desfaz em cinzas. Você sofre os efeitos das regras “O Custo do Paranormal” e “Invocando o Medo”, caso aplicáveis, e toma quaisquer decisões exigidas pelo ritual, como se o tivesse conjurado você mesmo. Caso conheça o ritual, você pode aplicar quaisquer habilidades que possua que se aplicariam aos seus próprios rituais, e pode usar versões avançadas dele, pagando o custo adicional em pontos de esforço (e apenas o custo adicional). Você não precisa de componentes ritualísticos para ativar um selo, o que o torna um objeto bastante útil para ocultistas em certas situações.</p><p>A categoria de um selo é igual ao circle do ritual contido nele: categoria I para rituais de 1º circle, categoria II para rituais de 2nd circle, e assim por diante.</p>",
    },
  ],
  dl = { class: "class-abilities-container" },
  il = { key: 0, class: "search-container" },
  ll = { key: 1, class: "search-container" },
  ul = { key: 2, class: "search-container" },
  cl = { key: 3, class: "class-abilities-content" },
  ml = { key: 0 },
  pl = { key: 1 },
  vl = { key: 2 },
  hl = { key: 3 },
  gl = R({
    __name: "InventoryModalContent",
    emits: ["handleAddItem", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        h = [
          { label: "Weapons", value: 0 },
          { label: "Ammo", value: 1 },
          { label: "Armor", value: 2 },
          { label: "General", value: 3 },
          { label: "Cursed Items", value: 4 },
        ],
        u = $(0),
        p = $(""),
        l = $(""),
        m = $(""),
        i = (t) => v("handleAddItem", t),
        d = X(() =>
          u.value === 0
            ? tl
                .filter((t) => K(t.name, p.value))
                .sort((t, c) => t.name.localeCompare(c.name))
            : u.value === 1
            ? W.sort((t, c) => t.name.localeCompare(c.name))
            : u.value === 2
            ? sl.sort((t, c) => t.name.localeCompare(c.name))
            : u.value === 3
            ? nl
                .filter((t) => K(t.name, l.value))
                .sort((t, c) => t.name.localeCompare(c.name))
            : u.value === 4
            ? rl
                .filter((t) => K(t.name, m.value))
                .sort((t, c) => t.name.localeCompare(c.name))
            : []
        );
      return (t, c) => (
        o(),
        n("div", dl, [
          C(
            pe,
            {
              "current-tab": u.value,
              "tab-options": h,
              onHandleNavigation: c[0] || (c[0] = (A) => (u.value = A)),
            },
            null,
            8,
            ["current-tab"]
          ),
          u.value === 0
            ? (o(),
              n("div", il, [
                C(
                  $e,
                  {
                    value: p.value,
                    dark: "",
                    onUpdate: c[1] || (c[1] = (A) => (p.value = A)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          u.value === 3
            ? (o(),
              n("div", ll, [
                C(
                  $e,
                  {
                    value: l.value,
                    dark: "",
                    onUpdate: c[2] || (c[2] = (A) => (l.value = A)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          u.value === 4
            ? (o(),
              n("div", ul, [
                C(
                  $e,
                  {
                    value: m.value,
                    dark: "",
                    onUpdate: c[3] || (c[3] = (A) => (m.value = A)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          d.value.length > 0
            ? (o(),
              n("div", cl, [
                (o(!0),
                n(
                  j,
                  null,
                  L(
                    d.value,
                    (A) => (
                      o(),
                      n("div", { key: A.name, class: "class-abilitie-card" }, [
                        A.itemType === "weapon"
                          ? (o(),
                            n("div", ml, [
                              C(Ro, { weapon: A, onHandleAdd: i }, null, 8, [
                                "weapon",
                              ]),
                            ]))
                          : q("", !0),
                        A.itemType === "protection"
                          ? (o(),
                            n("div", pl, [
                              C(
                                Vo,
                                { protection: A, onHandleAdd: i },
                                null,
                                8,
                                ["protection"]
                              ),
                            ]))
                          : q("", !0),
                        A.itemType === "misc" || A.itemType === "ammunition"
                          ? (o(),
                            n("div", vl, [
                              C(To, { misc: A, onHandleAdd: i }, null, 8, [
                                "misc",
                              ]),
                            ]))
                          : q("", !0),
                        A.itemType === "cursedItem"
                          ? (o(),
                            n("div", hl, [
                              C(
                                Oo,
                                { "cursed-item": A, onHandleAdd: i },
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
  fl = V(gl, [["__scopeId", "data-v-66867a8f"]]),
  Yo = (a) => (w("data-v-8e793024"), (a = a()), z(), a),
  bl = { class: "modal-content modal-width" },
  Al = { class: "modal-header" },
  Cl = Yo(() => e("h2", null, "Add Items", -1)),
  ql = Yo(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  yl = [ql],
  kl = { class: "modal-body modal-height" },
  $l = R({
    __name: "InventoryModal",
    props: { character: {} },
    emits: ["handleAddItem", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        h = [fl, $s],
        u = [
          { label: "Items", value: 0 },
          { label: "My Items", value: 1 },
        ],
        p = $(0),
        l = (i) => (p.value = i),
        m = (i) => v("handleAddItem", i);
      return (i, d) => (
        o(),
        n("div", bl, [
          e("div", Al, [
            Cl,
            e(
              "button",
              { onClick: d[0] || (d[0] = (t) => i.$emit("handleCloseModal")) },
              yl
            ),
          ]),
          e("div", kl, [
            C(
              ga,
              { value: p.value, options: u, onHandleNavigation: l },
              null,
              8,
              ["value"]
            ),
            (o(),
            N(
              Ne,
              null,
              [
                (o(),
                N(
                  Pe(h[p.value]),
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
  El = V($l, [["__scopeId", "data-v-8e793024"]]),
  Se = [
    {
      name: "Alterar Destino",
      circle: "4",
      element: "Energy",
      execution: "reaction",
      range: "personal",
      target: "yourself",
      duration: "instantaneous",
      description:
        "<p>Você vislumbra seu futuro próximo, analisando milhões de possibilidades e escolhendo a melhor. Você recebe +15 em um teste de resistência ou na Defesa contra um ataque.</p><p><strong>True (+5 EP):</strong> muda o alcance para “curto” e o alvo para “um aliado à sua escolha”.</p>",
    },
    {
      name: "Alter Memories",
      circle: "3",
      element: "Knowledge",
      execution: "standard",
      range: "touch",
      target: "1 person",
      duration: "instantaneous",
      save: "Will nullyfies",
      normalDice: "1d4",
      description:
        "<p>Você invade a mente do alvo e altera ou apaga suas memórias de até uma hora atrás. Se escolher alterar as memórias, você pode mudar detalhes de eventos recentes, como a identidade de alguém encontrado ou o endereço de um lugar visitado, mas não reescrever completamente esses eventos. O alvo recupera suas memórias após 1d4 dias.</p><p><strong>True (+4 EP):</strong> você pode alterar ou apagar memórias de até 24 horas atrás. Requires 4th circle.</p>",
    },
    {
      name: "Curse Weapon",
      circle: "1",
      element: "Varies",
      execution: "standard",
      range: "touch",
      target: "1 melee weapon or ammo pack",
      duration: "scene",
      description:
        "<p>Upon learning this ritual, choose an element between Knowledge, Energy, Death e Blood. This ritual is now of the chosen element. You imbue the weapon or ammo with the element, causing them to deal +1d6 damage of the element's type.</p><p><strong>Advanced (+2 EP):</strong> changes the damage bonus to +2d6. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the damage bonus to +4d6. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Curse Technology",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "touch",
      target: "1 accessory or firearm",
      duration: "scene",
      description:
        "<p>You imbue the target with Energy, making it work beyond its capacity. Them item receives a modification of your choice.</p><p><strong>Advanced (+2 EP):</strong> changes to two modifications. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes to three modifications. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Temporal Anchor",
      circle: "3",
      element: "Death",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "scene",
      save: "Will reduces partially",
      description:
        "<p>Uma aura espiralada surge sobre o alvo. No início de cada turno dele, ele deve fazer um teste de Vontade. Se falhar, não poderá se deslocar naquele turno (ele ainda pode agir, só não pode se deslocar). Se o alvo passar nesse teste dois turnos seguidos o efeito termina.</p><p><strong>True (+4 EP):</strong> muda o alvo para “seres à sua escolha”. Requires 4th circle.</p>",
    },
    {
      name: "Enhance Physique",
      circle: "2",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "scene",
      description:
        "<p>O alvo tem seus músculos tonificados e seus ligamentos reforçados, recebendo +1 em Agilidade ou Força, à escolha dele.</p><p><strong>Advanced (+3 EP):</strong> muda o bônus para +2. Requires 3rd circle.</p><p><strong>True (+7 EP):</strong> muda o bônus para +3. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Enhance Mind",
      circle: "2",
      element: "Knowledge",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "scene",
      description:
        "<p>O alvo tem sua mente energizada por fagulhos do Knowledge. Ele recebe +1 em Intelecto ou Presença, à escolha dele (esse aumento não fornece EP ou perícias treinadas).</p><p><strong>Advanced (+3 EP):</strong> muda o bônus para +2. Requires 3rd circle.</p><p><strong>True (+7 EP):</strong> muda o bônus para +3. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Atrocious Weapon",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 melee weapon",
      duration: "sustained",
      description:
        "<p>The weapon is covered by crimson veins and exhales an aura of violence. It gives +2 on attack rols and +1 on threat margin.</p><p><strong>Advanced (+2 EP):</strong> changes the attack roll bonus to +5. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the attack roll bonus to +5 and the threat margin and critital multiplier to +2. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Blood Armor",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      description:
        "<p>Your blood flows out of your body, covering it in the form of a shell that provides +5 Defense. This bonus is cumulative with other rituals, but not with bonuses provided by equipment.</p><p><strong>Advanced (+5 EP):</strong> changes the effect to “provides +10 Defense and resistance to ballistic, slashing, impact and piercing damage 5”. Requires 3rd circle.</p><p><strong>True (+9 EP):</strong> changes the effect to “provides +15 Defense and resistance to ballistic, slashing, impact and piercing damage 10”. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Insane Bargain",
      circle: "3",
      element: "Death",
      execution: "complete",
      range: "personal",
      target: "yourself",
      duration: "instantaneous",
      description:
        "<p>Você contata a entidade da Death e entrega a ela parte de sua própria percepção temporal da Realidade, em troca da restauração plena de sua saúde. Você recupera todos os pontos de vida e pontos de energia, e elimina quaisquer condições negativas que o estejam afetando. Porém, no final da cena, perde 1d4 pontos de Sanidade permanentemente. Além disso, cada vez que conjura este ritual, sua pele adquire uma tonalidade mais acizentada e seu sangue fica mais escuro. Alguns ocultistas temem que múltiplos usos tenham como efeito colateral transforma-lo em um luzídio, embora ninguém saiba exatamente quantas conjurações seriam necessárias para completar essa transformação.</p>",
    },
    {
      name: "Channel the Fear",
      circle: "4",
      element: "Fear",
      execution: "standard",
      range: "touch",
      target: "1 person",
      duration: "permanent until discharged",
      description:
        "<p>Você transfere parte de seu poder para outra pessoa. Escolha um ritual de até 3rd circle que você conheça; o alvo pode conjurar este ritual em sua forma básica uma vez, sem pagar seu custo em EP (mas pode usar formas avançadas gastando seus próprios EP para isso). Até o ritual transferido ser conjurado, seus EP máximos diminuem em um valor igual ao custo dele.</p>",
    },
    {
      name: "Capture the Heart",
      circle: "4",
      element: "Blood",
      execution: "standard",
      range: "short",
      target: "1 person",
      duration: "scene",
      save: "Will reduces partially",
      description:
        "<p>Você desperta uma paixão doentia e obcecada por você no alvo, que passa a querar agradá-lo a todo custo, mesmo que para isso precise ficar contra seus amigos. No início de cada turno do alvo ele deve fazer um teste de Vontade. Se falhar, age de forma a ajudá-lo na melhor de suas capacidades naquele turno. Se o alvo passar nesse teste dois turnos seguidos o efeito termina.</p>",
    },
    {
      name: "Flames of Chaos",
      circle: "2",
      element: "Energy",
      execution: "standard",
      range: "short",
      target: "see description",
      duration: "scene",
      normalDice: "1d6",
      discenteDice: "4d6",
      verdadeiroDice: "8d6",
      description:
        "<p>Você manipula o calor e o fogo. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Chamejar:</strong> o alvo é uma arma corpo a corpo. Ela causa +1d6 pontos de dano de fogo.</p><p><strong>Esquentar:</strong> o alvo é um objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer ser que o esteja empunhando ou vestindo. A critério do mestre, o objeto ou o ser pode pegar fogo. Um ser pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito do ritual.</p><p><strong>Extinguir:</strong> o alvo é uma chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, seres têm camuflagem.</p><p><strong>Modelar:</strong> o alvo é uma chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por um ser, ela causa 3d6 pontos de dano de fogo nele. Um ser só pode sofrer dano dessa maneira uma vez por rodada.</p><p><strong>Advanced (+3 EP):</strong> muda a duração para sustentada e adiciona “Resistência: Reflexos reduz à metade”. Em vez do normal, uma vez por rodada você pode gastar uma ação de movimento para projetar uma labareda, num alvo em alcance curto. O alvo sofre 4d6 pontos de dano de Energy (Reflexos reduz à metade).</p><p><strong>True (+ 7 EP):</strong> como discente, mas muda o dano para 8d6. Requires 3rd circle.</p>",
    },
    {
      name: "Cicatrization",
      circle: "1",
      element: "Death",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "instantaneous",
      normalDice: "3d8+3",
      discenteDice: "5d8+5",
      verdadeiroDice: "7d8+7",
      description:
        "<p>You speed up time around the target's wounds, which heal instantly. The target recovers 3d8+3 HP, but ages 1 year automatically.</p><p><strong>Advanced (+2 EP):</strong> increases healing to 5d8+5 HP. Requires 2nd circle.</p><p><strong>True (+9 EP):</strong> changes range to “short”, target to “chosen beings” and increases healing to 7d8+7 HP. Requires 4th circle and afinity with Death.</p>",
    },
    {
      name: "Cineraria",
      circle: "1",
      element: "Fear",
      execution: "standard",
      range: "short",
      area: "cloud with 6m radius",
      duration: "scene",
      description:
        "<p>You manifest a mist charged with paranormal essence. Rituals cast within the mist have their DC increased by +5.</p><p><strong>Advanced (+2 EP):</strong> in addition to normal, rituals cast within the mist cost –2 EP.</p><p><strong>True (+5 EP):</strong> in addition to normal, rituals cast within the mist deal maximized damage.</p>",
    },
    {
      name: "Forced Coincidence",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "scene",
      description:
        "<p>You manipulate the paths of chaos so that the target has better luck. The target gets +2 on skill checks.</p><p><strong>Advanced (+2 EP):</strong> changes the target to chosen allies. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the target chosen allies and the bonus to +5. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Paranormal Understanding",
      circle: "1",
      element: "Knowledge",
      execution: "standard",
      range: "touch",
      target: "1 being or object",
      duration: "scene",
      save: "Will nullyfies",
      description:
        "<p>O ritual confere a você compreensão sobrenatural da linguagem. Se tocar um objeto contendo informação (ou livro, um dispositivo com uma gravação...), você entende as palavras mesmo que não conheça seu idioma, contanto que se trate de um idioma humano (não funciona com símbolos ou sigilos paranormais). Se tocar uma pessoa, pode se comunicar com ela como se falassem um idioma em comum. Se tocar um ser não inteligente, como um animal, pode perceber seus sentimentos básicos, como medo ou felicidade. Um alvo involuntário tem direito a um teste de Vontade.</p><p><strong>Advanced (+2 EP):</strong> muda o alcance para “curto” e o alvo para “alvos escolhidos”. Você pode entender todos os alvos afetados. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> muda o alcance para “pessoal” e o alvo para “você”. Em vez do normal, você pode falar, entender e escrever qualquer idioma humano. Requires 3rd circle.</p>",
    },
    {
      name: "Knowing Fear",
      circle: "4",
      element: "Fear",
      execution: "standard",
      range: "touch",
      target: "1 person",
      duration: "scene",
      save: "Will reduces partially",
      normalDice: "10d6",
      description:
        "<p>Você manifesta medo absoluto na mente do alvo. Se ele falhar no teste de resistência, a Sanidade dele é reduzida a 0 e ele fica enlouquecendo. Se ele passar, sofre 10d6 pontos de dano mental e fica apavorado por 1 rodada. Uma pessoa que fique insana pelo efeito deste ritual se transforma em uma criatura Paranormal à critério do mestre.</p>",
    },
    {
      name: "Ghostly Containment",
      circle: "2",
      element: "Energy",
      execution: "standard",
      range: "Medium",
      target: "1 being",
      duration: "scene",
      save: "Reflexes nullyfies",
      description:
        "<p>Três laços de Energy surgem do chão e se enroscam no alvo, deixando-o agarrado. O alvo pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (DT do ritual). Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a DT. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a Energy. Se todos os laços forem destruídos, o ritual é dissipado. Por serem feitos de Energy, os laços afetam criaturas incorpóreas.</p><p><strong>Advanced (+3 EP):</strong> aumenta o número de laços para 6, e você pode escolher o alvo de cada laço, com um mínimo de dois laços por alvo. Requires 3rd circle.</p><p><strong>True (+5 EP):</strong> como discente, e cada laço destruído libera uma onda de choque que causa 2d6+2 pontos de dano de Energy no alvo agarrado. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Consume Wellspring",
      circle: "1",
      element: "Death",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "instantaneous",
      normalDice: "3d6",
      discenteDice: "6d6",
      verdadeiroDice: "3d6",
      description:
        "<p>Você suga uma pequena porção do tempo de vida de plantas, insetos e até mesmo do solo ao redor, gerando lodo e recebendo 3d6 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.</p><p><strong>Advanced (+2 EP):</strong> muda os PV temporários recebidos para 6d6. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> muda o alvo para “área: esfera com 6m de raio centrada em você” e a resistência para “Fortitude reduz à metade”. Em vez do normal, você suga energia de todos os seres vivos na área, causando 3d6 pontos de dano de Death em cada um e recebendo PV temporários iguais ao dano total causado até o final da cena. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Paranormal Contactl",
      circle: "3",
      element: "Knowledge",
      execution: "complete",
      range: "personal",
      target: "yourself",
      duration: "1 day",
      description:
        "<p>Você barganha com a entidade de Knowledge para que o auxilie durante o dia, em troca de se alimentar de sua Sanidade. Quando o ritual é conjurado, você recebe seis d6. Sempre que fizer um teste de perícia, você pode gastar um desses d6, rolá-lo e adicionar o resultado no teste. No entanto, essa ajuda tem um preço: sempre que rolar um 6 no dado, a entidade toma 2 pontos de Sanidade de você. Se você ficar sem dados ou chegar a Sanidade 0, o ritual acaba.</p><p><strong>Advanced (+4 EP):</strong> muda os dados de auxílio para d8. Sempre que rolar um 8 num desses dados, a entidade toma 3 pontos de sua Sanidade. Requires 4th circle.</p><p><strong>True (+9 EP):</strong> muda os dados de auxílio para d12. Sempre que rolar um 12 num desses dados, a entidade toma 5 pontos de sua Sanidade. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Mind control",
      circle: "4",
      element: "Knowledge",
      execution: "standard",
      range: "Medium",
      target: "1 person or animal",
      duration: "sustained",
      save: "Will reduces partially",
      description:
        "<p>Você domina a mente do alvo, que obedece todos os seus comandos, exceto ordens suicidas. Um alvo tem direito a um teste de Vontade no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam pasmos por 1 rodada.</p><p><strong>Advanced (+5 EP):</strong> muda o alvo para até cinco pessoas ou animais.</p><p><strong>True (+10 EP):</strong> muda o alvo para até dez pessoas ou animais. Requires afinity with Knowledge.</p>",
    },
    {
      name: "Instantaneous Summon",
      circle: "3",
      element: "Energy",
      execution: "standard",
      range: "unlimited",
      target: "1 object up to 2 spaces",
      duration: "instantaneous",
      save: "Will nullyfies",
      description:
        "<p>Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com o símbolo do ritual e pode ocupar no máximo 2 espaços. Se o objeto estiver sendo empunhado por outra pessoa, ela pode fazer um teste de Vontade para negar o efeito, mas você saberá onde o objeto está e quem o está carregando (ou sua aparência, caso não conheça a pessoa). Por até 1h depois da convocação, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes.</p><p><strong>Advanced (+4 EP):</strong> muda o alvo para um objeto de até 10 espaços.</p><p><strong>True (+9 EP):</strong> muda o alvo para “1 recipiente Médio (como uma mala ou caixote), com itens que somem até 10 espaços” e a duração para “permanente”. Em vez do normal, você encanta o recipiente para mantê-lo escondido no Outro Lado. Você pode convocar o recipiente para um espaço livre adjacente, ou de volta para o esconderijo paranormal, como uma ação padrão. Para isso, você deve ter em mãos uma miniatura do objeto, que funciona como um utensílio de categoria II. Quando conjura esta versão do ritual, você perde 1 EP permanentemente.</p>",
    },
    {
      name: "Summon Tormentor",
      circle: "4",
      element: "Death",
      execution: "standard",
      range: "1,5m",
      target: "1 person",
      duration: "sustained",
      save: "Will parcial, Fortitude reduces partially",
      normalDice: "6d6",
      description:
        "<p>Usando os medos subconscientes do alvo, você manipula a espiral da Death para criar uma imagem daquilo que ele mais teme. Apenas a própria vítima vê o algoz com nitidez; outros seres presentes (incluindo você) enxergam apenas um vulto sombrio. O algoz surge adjacente a você. No fim de cada turno seu, ele flutua 12m em direção à vítima. Se o algoz terminar o turno em alcance curto da vítima, ela deve fazer um teste de Vontade; se falhar, ficará abalada. Se o algoz terminar o turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se falhar, sofre um colapso e fica com 0 PV. Se passar, sofre 6d6 pontos de dano de Death (este dano não pode reduzir o alvo a menos de 1 PV). O algoz persegue o alvo implacavelmente, mesmo além do alcance do ritual. Ele é incorpóreo e imune a dano e só desaparece se deixar o alvo morrendo ou se for dissipado.</p>",
    },
    {
      name: "Adapted Body",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 person or animal",
      duration: "scene",
      save: "Will parcial, Fortitude reduces partially",
      description:
        "<p>Este ritual modifica a biologia do alvo para permitir a sobrevivência em ambientes hostis. O alvo fica imune a calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.</p><p><strong>Advanced (+2 EP):</strong> muda a duração para 1 dia.</p><p><strong>True (+5 EP):</strong> muda o alcance para “curto” e o alvo para “pessoas ou animais escolhidos”.</p>",
    },
    {
      name: "Decadence",
      circle: "1",
      element: "Death",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "instantaneous",
      save: "Fortitude halves",
      normalDice: "2d8+2",
      discenteDice: "3d8+3",
      verdadeiroDice: "8d8+8",
      description:
        "<p>Espirais de trevas envolvem sua mão e definham o alvo, que sofre 2d8+2 pontos de dano de Death.</p><p><strong>Advanced (+2 EP):</strong> muda a resistência para “nenhuma” e o dano para 3d8+3. Como parte da execução do ritual, você transfere as espirais para uma arma e faz um ataque corpo a corpo contra o alvo com esta arma. Se acertar, causa o dano da arma e do ritual, somados.</p><p><strong>True (+5 EP):</strong> muda o alcance para “pessoal” o alvo para “área: explosão com 6m de raio” e o dano para 8d8+8. As espirais afetam todos os seres na área. Requires 3rd circle.</p>",
    },
    {
      name: "Languish",
      circle: "1",
      element: "Death",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "scene",
      save: "Fortitude reduces partially",
      description:
        "<p>Você dispara uma lufada de cinzas que drena as forças do alvo. A alvo fica fatigado. Se passar no teste de resistência, em vez disso fica vulnerável.</p><p><strong>Advanced (+2 EP):</strong> em vez do normal, o alvo fica exausto. Se passar na resistência, fica fatigado. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> como discente, mas muda o alvo para “até 5 seres”. Requires 3rd circle and afinity with Death.</p>",
    },
    {
      name: "Energy Deflagration",
      circle: "4",
      element: "Energy",
      execution: "complete",
      range: "personal",
      area: "15m radius explosion",
      save: "Fortitude reduces partially",
      normalDice: "3d10",
      description:
        "<p>Você acumula uma quantidade imensa de Energy, então a libera em uma explosão intensa, como uma estrela em plena terra. Todos na área sofrem 3d10 x 10 pontos de dano de Energy e todos os itens tecnológicos (armas de fogo, acessórios e utensílios) param de funcionar (em termos de regras, estão quebrados). Você não é afetado pela explosão. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens voltam a funcionar após 1d4 rodadas.</p><p><strong>True (+5 EP):</strong> afeta apenas alvos a sua escolha.</p>",
    },
    {
      name: "Slow Down Impact",
      circle: "2",
      element: "Death",
      execution: "reaction",
      range: "short",
      target: "1 being or objects totalling 10 spaces",
      duration: "até chegar ao solo ou cena, o que vier primeiro",
      description:
        "<p>O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano. Como conjurar este ritual é uma reação, você pode conjurá-lo rápido o bastante para salvar a si ou um aliado de quedas inesperadas. Se o alvo for um projétil — como um disparo de arma ou um objeto largado do alto de um prédio —, o ritual faz com que ele cause metade do dano normal, devido à lentidão.Este ritual só funciona em alvos em queda livre ou similar; não pode frear um golpe de faca ou o mergulho rasante de um atacante voador.</p><p><strong>Advanced (+3 EP):</strong> aumenta o total de alvos para seres ou objetos somando até 100 espaços.</p>",
    },
    {
      name: "Deflesh",
      circle: "2",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "instantaneous",
      save: "Fortitude reduces partially",
      normalDice: "6d8",
      discenteDice: "10d8",
      description:
        "<p>Este ritual cruel faz com que lacerações se manifestem na pele e órgãos do alvo, que sofre 6d8 pontos de dano (metade corte, metade Blood) e fica com uma hemorragia severa. No início de cada turno dele, o alvo deve fazer um teste de Fortitude. Se falhar, sofre 2d8 pontos de dano de Blood. Se passar nesse teste dois turnos seguidos, a hemorragia é estancada. Alvos que passem no teste de resistência inicial sofrem metade do dano e não ficam com hemorragia.</p><p><strong>Advanced (+3 EP):</strong> muda o dano direto para 10d8 e o dano da hemorragia para 4d8. Requires 3rd circle.</p><p><strong>True (+7 EP):</strong> muda o alvo para você e a duração para sustentada. Enquanto o ritual durar, seus ataques corpo a corpo causam 4d8 pontos de dano de Blood adicional e deixam o alvo com hemorragia automaticamente (como no efeito básico do ritual). O alvo ainda tem direito a um teste de Fortitude no início de seus turnos. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Threat Detection",
      circle: "2",
      element: "Knowledge",
      execution: "standard",
      range: "personal",
      area: "sphere with 18m radius",
      duration: "scene",
      description:
        "<p>Você recebe uma percepção aguçada sobre perigos à sua volta. Quando um ser hostil ou armadilha entra na área do efeito, você tem uma sensação de perigo e pode gastar uma ação de movimento para fazer um teste de Percepção (DT 20). Se passar, sabe a direção e distância do perigo.</p><p><strong>Advanced (+3 EP):</strong> além do normal, você não fica desprevenido contra perigos detectados e recebe +5 em testes de resistência contra armadilhas. Requires 3rd circle.</p><p><strong>True (+5 EP):</strong> muda a duração para “1 dia” e concede os mesmos benefícios de discente. Requires 4th circle.</p>",
    },
    {
      name: "Acoustic Dissonance",
      circle: "2",
      element: "Energy",
      execution: "standard",
      range: "Medium",
      area: "sphere with 6m radius",
      duration: "sustained",
      description:
        "<p>Você manipula a vibração do ar, criando uma área de dissonância sonora. Enquanto estiverem na área, todos os seres ficam surdos. Essa dissonância também impede que seres dentro da área conjurem rituais.</p><p><strong>Advanced (+1 EP):</strong> muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio. Se conjurar o ritual num objeto de um ser involuntário, ele tem direito a um teste de Vontade para anulá-la.</p><p><strong>True (+3 EP):</strong> muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas seres dentro da área podem falar, ouvir e conjurar rituais normalmente. Requires 3rd circle.</p>",
    },
    {
      name: "Dispel Ritual",
      circle: "3",
      element: "Fear",
      execution: "standard",
      range: "medium",
      area: "1 being or object, or a sphere with 3m radius",
      duration: "instantaneous",
      description:
        "<p>Você dissipa rituais ativos, como se a duração deles tivesse acabado. Efeitos de rituais instantâneos não podem ser dissipados (não se pode dissipar uma área de Paradoxo depois que já causou dano...). Faça um teste de Ocultismo; você anula quaisquer rituais ativos no alvo ou na área com DT igual ou menor que o resultado do teste. Você pode conjurar esse ritual em um item amaldiçoado para que se torne um item mundano (perdendo seus poderes) por um dia. Se o item estiver em posse de alguém, seu usuário pode fazer um teste de Vontade para negar o efeito.</p>",
    },
    {
      name: "Distort Appearance",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      save: "Will disbelieves",
      description:
        "<p>Você modifica sua aparência física para se transformar em outra pessoa. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz, impressão digital, córnea etc. Você recebe +10 em testes de Enganação para disfarce, mas não recebe habilidades da nova forma nem modifica suas demais estatísticas.</p><p><strong>Advanced (+2 EP):</strong> muda o alcance para “curto” e o alvo para “1 ser”. Um alvo involuntária pode anular o efeito com um teste de Vontade.</p><p><strong>True (+5 EP):</strong> como em Advanced, mas muda o alvo para “seres escolhidos”. Requires 3rd circle.</p>",
    },
    {
      name: "Time Distortion",
      circle: "4",
      element: "Death",
      execution: "standard",
      range: "personal",
      target: "see description",
      duration: "see description",
      description:
        "<p>Este poderoso ritual distorce o fluxo de tempo em relação a você, criando um pequeno bolsão temporal que dura 3 rodadas. Durante este tempo, você pode agir livremente, mas não pode se deslocar do lugar nem interagir com seres e objetos. Da mesma forma, efeitos contínuos não o afetam, e quaisquer efeitos que você iniciar não afetarão a área ao seu redor. Efeitos de área e com duração maior que este efeito vão agir normalmente quando o bolsão temporal acabar.</p>",
    },
    {
      name: "Spiral Echo",
      circle: "2",
      element: "Death",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "2 rodadas",
      save: "Fortitude halves",
      description:
        "<p>Você manifesta em suas mãos uma pequena cópia do alvo feita de cinzas. No início do próximo turno após conjurar este ritual, você precisa gastar uma ação padrão para se concentrar nele; caso contrário, ele se dissipa sem efeito. No início do segundo turno, você precisa gastar uma ação padrão para descarregá-lo. Se fizer isso, a cópia explode e o alvo sofre dano de Death igual a quantidade de dano que sofreu na rodada em que você se concentrou (Fortitude reduz à metade). Se não fizer, o ritual se dissipa sem efeito.</p><p><strong>Advanced (+3 EP):</strong> muda o alvo para “até 5 seres”.</p><p><strong>True (+7 EP):</strong> muda a duração para “até 3 rodadas”, permitindo que você se concentre nas duas primeiras e descarregue na terceira. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Electrocution",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "short",
      target: "1 ser ou objeto",
      duration: "instantaneous",
      save: "Fortitude reduces partially",
      normalDice: "3d6",
      discenteDice: "6d6",
      verdadeiroDice: "8d6",
      description:
        "<p>Você manifesta e dispara uma corrente elétrica contra o alvo, que sofre 3d6 pontos de dano de eletricidade e fica vulnerável por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Se usado contra objetos eletrônicos, este ritual causa o dobro de dano e ignora resistência.</p><p><strong>Advanced (+2 EP):</strong> muda o alvo para “área: linha de 30m”. Você dispara um poderoso raio que causa 6d6 pontos de dano de Energy em todos os seres e objetos livres na área. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> muda a área para “alvos escolhidos”. Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 8d6 pontos de dano de Energy em cada. Requires 3rd circle.</p>",
    },
    {
      name: "Shuffle",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      description:
        "<p>Você cria três cópias ilusórias que se parecem com hologramas extremamente realistas. As cópias ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem é o verdadeiro. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante sofre as penalidades normais por não enxergar).</p><p><strong>Advanced (+2 EP):</strong> muda o número de cópias para 5 (e o bônus na Defesa para +10). Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> muda o número de cópias para 8 (e o bônus na Defesa para +16). Além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. O ser que destruiu a cópia fica ofuscada por uma rodada. Requires 3rd circle.</p>",
    },
    {
      name: "Bewitch",
      circle: "1",
      element: "Knowledge",
      execution: "standard",
      range: "short",
      target: "1 person",
      duration: "scene",
      save: "Will nullyfies",
      description:
        "<p>Este ritual torna o alvo prestativo. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe um bônus de +10 em testes de Diplomacia com ele. Um alvo hostil ou que esteja envolvido em combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, o efeito é dissipado e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre)</p><p><strong>Advanced (+2 EP):</strong> em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir que o alvo atire em seu companheiro, por exemplo, dissipa o efeito. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, o efeito termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que o policial prenda a próxima pessoa de casaco verde que ele encontrar. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> afeta todos os alvos dentro do alcance. Requires 3rd circle.</p>",
    },
    {
      name: "Hide from Eyesight",
      circle: "2",
      element: "Knowledge",
      execution: "livre",
      range: "personal",
      target: "yourself",
      duration: "1 rodada",
      description:
        "<p>Você fica invisível, incluindo seu equipamento, recebendo camuflagem total e +15 em testes de Furtividade. Como o normal, seres que não possam vê-lo ficam desprevenidos contra seus ataques.</p><p>O efeito termina se você faz um ataque ou usa uma habilidade hostil. Ações contra objetos livres não dissipam Esconder dos Olhos (você pode tocar ou apanhar objetos que não estejam sendo segurados por outros seres). Causar dano indiretamente — por exemplo, preparar explosivos para detonar mais tarde — não é considerado um ataque.</p><p>Objetos soltos voltam a ser visíveis e objetos apanhados por você ficam invisíveis. Uma luz transportada nunca fica invisível (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível.</p><p><strong>Advanced (+3 EP):</strong> muda a duração para “sustentada”. Em vez do normal, você gera uma esfera de invisibilidade. Você e todos os aliados a até 3m de você se tornam invisíveis, como no efeito normal do ritual (ainda ficam visíveis caso façam uma ação hostil). A esfera se move juntamente com você; qualquer coisa que saia da esfera fica visível. Requires 3rd circle.</p><p><strong>True (+7 EP):</strong> muda a execução para “ação padrão”, o alcance para “toque”, o alvo para “1 ser” e a duração para “sustentada”. O efeito não é dissipado caso o alvo faça um ataque ou ação hostil. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Spirals of Perdition",
      circle: "1",
      element: "Death",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "scene",
      description:
        "<p>Espirais surgem no corpo do alvo, tornando seus movimentos lentos. O alvo sofre –1d20 em testes de ataque.</p><p><strong>Advanced (+2 EP):</strong> muda a penalidade para –2d20. Requires 2nd circle.</p><p><strong>True (+8 EP):</strong> muda a penalidade para -2d20. e o alvo para “seres escolhidos”. Requires 3rd circle.</p>",
    },
    {
      name: "Boil Blood",
      circle: "3",
      element: "Blood",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "sustained",
      save: "Fortitude reduces partially",
      normalDice: "4d8",
      description:
        "<p>O sangue do alvo aquece até entrar em ebulição. Quando o ritual é conjurado, e no início de cada turno do alvo, ele deve fazer um teste de Fortitude. Se falhar, sofre 4d8 pontos de dano de Blood e fica fraco; se passar, sofre metade do dano e não fica fraco neste turno. Se o alvo passar nesse teste dois turnos seguidos o efeito termina.</p><p><strong>True (+4 EP):</strong> muda o alvo para “seres escolhidos”. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Inevitable End",
      circle: "4",
      element: "Death",
      execution: "complete",
      range: "extreme",
      effect: "buraco negro com 1,5m de diâmetro",
      duration: "4 rodadas",
      save: "Fortitude reduces partially",
      description:
        "<p>Você cria um vácuo em um espaço desocupado a sua escolha, capaz de sugar tudo nas proximidades. No início de cada um de seus quatro turnos seguintes, todos os seres a até 90m do vácuo, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do vácuo. Objetos soltos também são puxados. Seres podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +5 em seus testes de resistência. Seres e objetos que iniciem seu turno tocando o vácuo temporal sofrem 100 pontos de dano de Death por rodada.</p><p><strong>Advanced (+5 EP):</strong> muda a duração para “5 rodadas” e o efeito para que você não seja afetado. Requires afinity.</p><p><strong>True (+10 EP):</strong> muda a duração para “6 rodadas” e o efeito para que seres escolhidos dentro do alcance não sejam afetados. Requires afinity.</p>",
    },
    {
      name: "Scourge of Blood",
      circle: "2",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 person",
      duration: "scene",
      save: "Fortitude reduces partially",
      normalDice: "10d6",
      description:
        "<p>Você toca uma pessoa, gravando uma marca escarificada no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “siga-me” ou “não saia desta sala”. A cada rodada que o alvo desobedecer a ordem, a marca inflige uma dor excruciante, que causa 10d6 pontos de dano de Blood e deixa o alvo enjoado pela rodada (Fortitude reduz o dano à metade e evita a condição). Se o alvo passar nesse teste dois turnos seguidos a marca desaparece.</p><p><strong>Advanced (+3 EP):</strong> muda o alvo para “1 ser (exceto criaturas de Blood)”. Requires 3rd circle.</p><p><strong>True (+7 EP):</strong> como Advanced, e muda a duração para “1 dia”. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Monstrous Form",
      circle: "3",
      element: "Blood",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      description:
        "<p>Seu corpo e sua mente se transformam, assumindo uma forma monstruosa que combina suas características com as de uma criatura de Blood; suas roupas e proteção se mesclam à sua carne, transformando-se em uma couraça, e quaisquer objetos em suas mãos se fundem aos seus braços, transformando-se em garras afiadas e pontiagudas. Todo seu equipamento se funde à nova forma, ficando inacessível, mas quaisquer bônus por equipamento se mantém. Seu tamanho muda para Grande e você recebe +5 em testes de ataque e rolagens de dano corpo a corpo e 30 PV temporários. Enquanto estiver transformado, sua mente é tomada por fúria selvagem; você não pode falar nem conjurar rituais e a cada rodada deve atacar o ser mais próximo possível (aliado ou inimigo). Se não houver um ser em alcance de ataque, você deve se deslocar em direção ao ser mais próximo da melhor forma possível. Se o ser mais próximo for um aliado, você pode fazer um teste de Vontade (DT igual à do ritual). Se passar, neste turno você pode escolher qual ser atacar.</p><p><strong>Advanced (+3 EP):</strong> além do normal, você recebe imunidade a atordoamento, fadiga, sangramento, sono e veneno. Requires 3rd circle.</p><p><strong>True (+9 EP):</strong> muda os bônus em testes de ataque e rolagens de dano para +10 e os PV temporários para 50. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Sensory Strengthening",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      description:
        "<p>Você potencializa seus sentidos, recebendo +1d20 em Investigação, Luta, Percepção e Pontaria.</p><p><strong>Advanced (+2 EP):</strong> além do normal, seus inimigos sofrem –1d20 em testes de ataque contra você. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> além do normal, você apura seus sentidos para perceber qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexo. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Hemophagy",
      circle: "2",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "instantaneous",
      save: "Fortitude halves",
      normalDice: "6d6",
      verdadeiroDice: "4d6",
      description:
        "<p>Você arranca o sangue do corpo do alvo através de pele dele, causando 6d6 pontos de dano de Blood. Você então absorve esse sangue, recuperando pontos de vida iguais à metade do dano causado.</p><p><strong>Advanced (+3 EP):</strong> muda a resistência para “nenhuma”. Como parte da execução do ritual, você pode usar uma arma em vez das mãos para fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e do ritual, recuperando pontos de vida em quantidade igual à metade do dano total causado.</p><p><strong>True (+7 EP):</strong> muda o alcance para “pessoal”, o alvo para “você” e a duração para “cena”. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 ser e causar 4d6 pontos de dano de Blood. Você recupera pontos de vida iguais à metade do dano causado. Requires 4th circle.</p>",
    },
    {
      name: "Remove Existance",
      circle: "4",
      element: "Knowledge",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "instantaneous",
      save: "Will reduces partially",
      normalDice: "10d12+10",
      discenteDice: "15d12+15",
      verdadeiroDice: "20d12+20",
      description:
        "<p>Este é um ritual extremamente cruel, que já condenou grandes agentes da Ordem ao oblívio. Você toca o alvo com a intenção de apagá-lo completamente da existência, a mente e o corpo do alvo são reescritos e desmantelados da existência. O alvo começa a levitar a poucos centímetros do chão e textos narrando todos os momentos de sua vida surgem e brilham por cima de sua pele, até que a existência dele começa a ser destruída de dentro, causando 10d12+10 pontos de dano de Knowledge. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano e fica debilitado por uma rodada. Independentemente do resultado do teste de resistência, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente apagado, não restando absolutamente nenhum traço de sua existência.</p><p><strong>Advanced (+5 EP):</strong> muda o dano para 15d12+15 e o dano resistido para 3d12.</p><p><strong>True (+10 EP):</strong> muda o dano para 20d12+20 e o dano resistido para 4d12. Requires afinity.</p>",
    },
    {
      name: "Invade Mind",
      circle: "2",
      element: "Knowledge",
      execution: "standard",
      range: "médio ou toque",
      target: "1 ser ou 2 pessoas voluntárias",
      duration: "instantânea ou 1 dia",
      save: "Will parcial ou nenhuma",
      normalDice: "6d6",
      discenteDice: "10d6",
      verdadeiroDice: "10d6",
      description:
        '<p>Quando conjura este ritual, você gera um dos efeitos a seguir, a sua escolha: <em>rajada mental</em> (usa os primeiros parâmetros do cabeçalho acima) ou <em>ligação telepática</em> (usa os segundos parâmetros).</p><p><em>Rajada Mental:</em> você infecta a mente do alvo com o Knowledge proibido do Outro Lado, dilacerando o cérebro dele. O alvo sofre 6d6 pontos de dano de Knowledge e fica atordoado por uma rodada. Se passar no teste de Vontade, sofre metade do dano e não fica atordoado. Um mesmo alvo só pode ficar atordoado por este ritual uma vez por cena.</p><p><em>Ligação Telepática:</em> você cria um elo mental entre duas pessoas (você pode ser uma delas), que podem se comunicar independente da distância pela duração do ritual (1 dia).</p><p><strong>Advanced (+3 EP):</strong> se escolhar <em>rajada mental</em>, aumenta o dano para 10d6. Se escolher <em>ligação telepática</em>, em vez do normal, você cria um elo mental que permite que você veja e ouça pelos sentidos do alvo, gastando uma ação de movimento para se concentrar. Um alvo involuntário pode fazer um teste de Vontade para suprimir o ritual por uma hora. Requires 3rd circle.</p><p><strong>True (+ 7 EP):</strong> se escolher <em>rajada mental</em>, aumenta o dano para 10d6 e muda o alvo para todos os "seres escolhidos". Se escolher <em>ligação telepática</em>, você pode criar um vínculo mental entre até 5 pessoas. Requires 4th circle.</p>',
    },
    {
      name: "Meat Casing",
      circle: "4",
      element: "Blood",
      execution: "standard",
      range: "short",
      effect: "1 clone seu",
      duration: "scene",
      description:
        "<p>Você manifesta uma poça de sangue no chão, de onde emerge uma cópia sua. Ela é idêntica em aparência e capacidades (em termos de jogo, tem as mesmas estatísticas) e surge com uma cópia de todo equipamento mundano que você estiver carregando. A cópia não tem consciência (valor de Intelecto e Presença nulos) e não age sem que você dê uma ordem. Você pode gastar uma ação de movimento para dar uma ordem à cópia, como “lute contra aquele ser”. No final de cada um de seus turnos, a cópia segue a ordem da melhor maneira possível, mas ainda é incapaz de tomar decisões sozinha e acatará qualquer ordem perigosa sem hesitar, mesmo que leve à sua destruição.Alternativamente, no início de seu turno, você pode controlar ativamente a cópia. Se fizer isso, você entra num transe temporário e assume o controle da cópia como se fosse seu corpo, usando os sentidos dela. Qualquer ser que interagir com a cópia tem direito a um teste de Percepção (DT do ritual) para perceber que é uma cópia. A cópia se desfaz em uma poça de sangue coagulado se chegar a 0 PV ou sair do alcance.</p>",
    },
    {
      name: "Blade of Fear",
      circle: "4",
      element: "Fear",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "instantaneous",
      save: "Fortitude reduces partially",
      normalDice: "10d8",
      description:
        "<p>Você manifesta uma lâmina impossível, que pode ser descrita apenas como uma “fenda na Realidade”, com a qual golpeia um alvo adjacente. Se o alvo falhar no teste de Fortitude, seus PV são reduzidos a 0 e ele fica morrendo; se passar, sofre 10d8 pontos de dano de Fear (ignora todas as resistências) e fica apavorado por uma rodada. Se uma pessoa ficar morrendo pela Lâmina do Fear e sobreviver, o ferimento causado pelo ritual passa a se transformar constantemente, jamais cicatrizando e fazendo com que a pessoa passe a viver em dor constante. Aprender este ritual requer um poder de trilha específico.</p>",
    },
    {
      name: "Location",
      circle: "2",
      element: "Knowledge",
      execution: "standard",
      range: "personal",
      area: "circle com 90m de raio",
      duration: "scene",
      description:
        "<p>Esta ritual pode encontrar uma pessoa ou objeto a sua escolha. Você pode pensar em termos gerais (“um policial”, “algo de metal”) ou específicos (“A delegada Joana”, “uma pistola”). O ritual indica a direção e distância da pessoa ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (“a chave do armazém 4 no porto”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja parecida com a verdade, o ritual falha, mas você gasta os EP mesmo assim. Este ritual pode ser bloqueado por uma fina camada de chumbo.</p><p><strong>Advanced (+3 EP):</strong> muda o alcance para “toque”, o alvo para “1 pessoa” e a duração para “1 hora”. Em vez do normal, a pessoa tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, o ritual pode ser usado para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma caverna (mas não para encontrar a localização de uma pessoa ou objeto; funciona apenas em relação a lugares). Caso a pessoa demore mais de uma hora para percorrer o caminho, o conhecimento se perde.</p><p><strong>True (+7 EP):</strong> aumenta a área para circle de 1km de raio. Requires 4th circle.</p>",
    },
    {
      name: "Light",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "short",
      target: "1 objeto",
      duration: "scene",
      save: "Will nullyfies",
      description:
        "<p>O alvo emite luz de cores alternadas e brilhantes (mas não produz calor) em uma área com 9m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se o alvo for um objeto em posse de uma pessoa involuntária, ela tem direito a um teste de Vontade para anular o efeito.</p><p><strong>Advanced (+2 EP):</strong> muda o alcance para longo e o efeito para 4 esferas brilhantes. Cria esferas flutuantes de pura luz com 10cm de diâmetro, que você pode posicionar onde quiser dentro do alcance. Você pode enviar uma esfera à frente, outra para trás, outra para cima e manter uma perto de você, por exemplo. Uma vez por rodada, você pode mover as esferas com uma ação livre. Cada esfera ilumina uma área de 6m de raio, mas não produz calor. Se uma esfera ocupar o espaço de um ser, ele fica ofuscado e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> a luz é cálida como a do sol. Dentro da área seus aliados recebem +1d20 em testes de Vontade, e seus inimigos ficam ofuscados. Requires 3rd circle.</p>",
    },
    {
      name: "Tangible Fear",
      circle: "4",
      element: "Fear",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      description:
        "<p>O ritual transforma seu corpo em uma manifestação do Fear, tornando-o imune a efeitos mundanos. Você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de doenças e venenos, e não sofre dano adicional por acertos críticos e ataques furtivos. Além disso, dano do tipo balístico, corte, impacto ou perfuração não podem reduzir seu total de pontos de vida abaixo de 1, tornando-o virtualmente imortal contra efeitos mundanos.</p>",
    },
    {
      name: "Mental Dive",
      circle: "3",
      element: "Knowledge",
      execution: "standard",
      range: "touch",
      target: "1 person",
      duration: "sustained",
      save: "Will reduces partially",
      description:
        "<p>Você mergulha nos pensamentos do alvo, para descobrir informações sobre ele. Durante o mergulho, você fica desprevenido. No início de cada turno seu que estiver sustentando o efeito e tocando o alvo, ele deve fazer um teste de Vontade. Se falhar, deve responder uma pergunta sua que possa ser respondida com “sim” ou “não”, sendo incapaz de mentir. O que você descobre depende das suas perguntas e do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação.</p><p><strong>True (+4 EP):</strong> muda a execução para 1 dia, o alcance para ilimitado e adiciona como componente ritualístico uma cuba de ouro cheia d’água e uma máscara (acessório de categoria II). Você pode realizar o mergulho mental à distância, submergindo seu rosto mascarado na água enquanto mentaliza o alvo. Para que esse ritual funcione, você precisa ter alguma informação sobre o alvo, como nome completo, e um objeto pessoal ou fotografia. Requires 4th circle.</p>",
    },
    {
      name: "Entropic Miasma",
      circle: "2",
      element: "Death",
      execution: "standard",
      range: "medium",
      area: "nuvem com 6m de raio",
      duration: "instantaneous",
      save: "Fortitude parcial ",
      normalDice: "4d8",
      discenteDice: "6d8",
      description:
        "<p>Cria uma explosão de emanações tóxicas. Seres na área sofrem 4d8 pontos de dano químico e ficam enjoados por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoados.</p><p><strong>Advanced (+3 EP):</strong> muda o dano para 6d8 de Death.</p><p><strong>True (+7 EP):</strong> muda a duração para 3 rodadas. Um ser que inicie seu turno dentro da área sofre o dano novamente. Requires 3rd circle.</p>",
    },
    {
      name: "Ash Cloud",
      circle: "1",
      element: "Death",
      execution: "standard",
      range: "short",
      effect: "nuvem com 6m de raio e 6m de altura",
      duration: "scene",
      description:
        "<p>Uma nuvem de fuligem espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — seres a até 1,5m têm camuflagem e seres a partir de 3m têm camuflagem total. Um vento forte dispersa a nuvem em 4 rodadas e um vendaval a dispersa em 1 rodada. A nuvem não funciona sob a água. </p><p><strong>Advanced (+2 EP):</strong> você pode escolher seres no alcance ao conjurar o ritual; eles enxergam através do efeito. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> além do normal, a nuvem fica espessa, quase sólida. Qualquer ser dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque. Requires 3rd circle.</p>",
    },
    {
      name: "Uncontrollable Hatred",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 person",
      duration: "scene",
      description:
        "<p>O alvo entra em um frenesi, aumentando sua agressividade e capacidade de luta. Ele recebe +2 em testes de ataque e rolagens de dano corpo a corpo e resistência a balístico, corte, impacto e perfuração 5. Enquanto o efeito durar, o alvo não pode fazer nenhuma ação que exige calma e concentração (como usar a perícia Furtividade ou conjurar rituais), e deve sempre atacar um alvo em sua rodada, mesmo que seja um aliado se ele for o único a seu alcance.</p><p><strong>Advanced (+2 EP):</strong> além do normal, sempre que o alvo usar a ação agredir, pode fazer um ataque corpo a corpo adicional contra o mesmo alvo.</p><p><strong>True (+5 EP):</strong> muda o bônus de ataque e dano para +5 e o alvo passa a sofrer apenas metade do dano dos tipos balístico, corte, impacto e perfuração. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Hear the Whispers",
      circle: "1",
      element: "Knowledge",
      execution: "complete",
      range: "personal",
      target: "yourself",
      duration: "instantaneous",
      description:
        "<p>O ritual conecta você com os sussurros, memórias ecoadas pelo Outro Lado, que você pode consultar para receber conhecimento proibido em relação a uma ação que tomará em breve. Ao usar este ritual, faça uma pergunta sobre um evento que você está prestes a fazer (na mesma cena) que possa ser respondida com “sim” ou “não”. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, o ritual funciona e você recebe sua resposta, que pode ser “sim”, “não” ou “sim e não”</p><p>Com um resultado 1, o ritual falha e oferece o resultado “não”. Não há como saber se esse resultado foi dado porque o ritual falhou ou não. Lançar este ritual múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado.</p><p>Por exemplo, você está prestes a entrar em um prédio que pode ser o esconderijo de um cultista. Se você perguntar para os sussurros se o cultista está mesmo nesse local, a resposta pode ser “sim” (ele está no prédio), “não” (ele não está no prédio) ou “sim e não” (ele está no prédio, mas usou um ritual para se esconder seu corpo físico em uma dimensão do Outro Lado...). Isso é útil para saber se você deve (ou não) gastar recursos para um possível combate.</p><p><strong>Advanced (+2 EP):</strong> muda a execução para 1 minuto. Em vez do normal, você pode consultar os ecos fazendo uma pergunta sobre um evento que poderá acontecer até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> muda a execução para 10 minutos e a duração para 5 rodadas. Em vez do normal, você consulta os ecos, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “ninguém sabe”. O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “ninguém sabe”. Requires 3rd circle.</p>",
    },
    {
      name: "Paradox",
      circle: "2",
      element: "Death",
      execution: "standard",
      range: "medium",
      area: "esfera com 6m de raio",
      duration: "instantaneous",
      save: "Fortitude halves",
      normalDice: "6d6",
      discenteDice: "4d6",
      verdadeiroDice: "13d6",
      description:
        "<p>O ritual cria uma poderosa implosão de distorção temporal contraditória, causando 6d6 pontos de dano de Death em todos os seres na área.</p><p><strong>Advanced (+3 EP):</strong> muda a área para “efeito: esfera com tamanho Médio” e a duração para cena. Em vez do normal, cria uma esfera de emanações espirais sibilantes com 1,5m de diâmetro que causa 4d6 pontos de dano de Death a qualquer ser no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Um ser só pode sofrer dano da esfera uma vez por rodada.</p><p><strong>True (+7 EP):</strong> muda o dano para 13d6. Seres reduzidos a 0 PV pelo dano do Paradoxo devem fazer um teste de Fortitude. Se falharam, são reduzidas a cinzas (morrem imediatamente). Requires 4th circle.</p>",
    },
    {
      name: "Disturbance",
      circle: "1",
      element: "Knowledge",
      execution: "standard",
      range: "short",
      target: "1 person",
      duration: "1 rodada",
      save: "Will (anula)",
      discenteDice: "3d8",
      description:
        "<p>Você dá uma ordem que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer à ordem em seu próprio turno da melhor maneira possível. Escolha um dos efeitos.</p><p><strong>Fuja:</strong> O alvo gasta seu turno tentando se afastar de você (usando todas as suas ações).</p><p><strong>Largue:</strong> O alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou).</p><p><strong>Pare:</strong> O alvo fica pasmo (não pode realizar ações, só reações).</p><p><strong>Sente-se:</strong> Com uma ação livre, o alvo se senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno.</p><p><strong>Venha:</strong> O alvo gasta seu turno se aproximando de você (usando todas as suas ações).</p><p><strong>Advanced (+2 EP):</strong> muda o alvo para “1 ser” e adiciona o seguinte comando: “Sofra. O alvo é acometido de dor aguda, sofrendo 3d8 de dano de Knowledge e ficando abalado por uma rodada”.</p><p><strong>True (+5 EP):</strong> muda o alvo para “até 5 seres” ou adiciona o seguinte comando: “Ataque. O alvo deve fazer a ação agredir contra um outro alvo a sua escolha em alcance médio, com todas as suas capacidades”. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Dust of Rotting",
      circle: "3",
      element: "Death",
      execution: "standard",
      range: "medium",
      area: "nuvem com 6m de raio",
      duration: "sustained",
      save: "Fortitude",
      normalDice: "4d8",
      verdadeiroDice: "4d8+16",
      description:
        "<p>Você manifesta uma nuvem de poeira que apodrece os seres na área. Ao conjurar a ritual, e no início de cada um de seus turnos, seres e objetos na área sofrem 4d8 pontos de dano de Death (Fortitude reduz à metade). Alvos que falharem no teste também não podem recuperar PV de nenhuma forma por uma rodada.</p><p><strong>True (+4 EP):</strong> muda o dano para 4d8+16.</p>",
    },
    {
      name: "Chaotic Polarization",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "short",
      target: "yourself",
      duration: "sustained",
      save: "Will nullyfies",
      description:
        "<p>Você gera uma aura magnética sobrenatural. Escolha um dos efeitos a seguir.</p><p><strong>Atrair:</strong> você pode usar uma ação de movimento para puxar um objeto metálico de espaço 2 ou menor dentro do alcance. Se o objeto estiver livre, voa para suas mãos (caso tenha mãos livres para apanhá-lo) ou para seus pés.</p><p><strong>Repelir:</strong> você repele objetos de espaço 2 ou menor (o que envolve quase todos os projéteis e armas de arremesso), recebendo resistência a balístico, corte, impacto e perfuração 5.</p><p><strong>Advanced (+2 EP):</strong> nesta versão a energia magnética é expelida de uma única vez e arremessa até 10 objetos, ou um total de 10 espaços, o que for menor. Os objetos devem estar a até 3m uns dos outros. Objetos arremessados podem atingir seres em seu caminho, causando de 1 ponto de dano de impacto por espaço (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por espaço (objetos duros, pontudos ou afiados). Seres atingidos têm direito a um teste de Reflexos para reduzir o dano à metade. Seres dentro da capacidade de carga do efeito podem ser arremessadas, mas têm direito a um teste de Vontade para evitar o efeito (em si mesmos ou em objetos que estejam segurando). Um ser arremessado contra uma superfície sólida sofre 1d6 pontos de dano de impacto para cada 3m que “voou” no deslocamento (incluindo outros seres; nesse caso, ambos sofrem o dano).</p><p><strong>True (+5 EP):</strong> muda o alcance para médio. Você pode usar uma ação de movimento para fazer com que a força magnética levite e mova um ser ou objeto de espaço 10 ou menor por até 9m em qualquer direção dentro do alcance. Um ser pode anular o efeito sobre ele, ou sobre um objeto que possua, passando num teste de Vontade. O alvo cai no chão se sair do alcance ou o efeito terminar.</p>",
    },
    {
      name: "Possession",
      circle: "4",
      element: "Knowledge",
      execution: "standard",
      range: "long",
      target: "1 pessoa viva ou morta",
      duration: "1 dia",
      save: "Will nullyfies",
      description:
        "<p>Você projeta sua consciência no corpo de uma pessoa viva ou morta. Enquanto possuir o alvo, você assume o controle total do corpo dele (se o alvo estiver vivo, a consciência dele troca de lugar com a sua, ficando inerte dentro do seu corpo desacordado). Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos (Agilidade, Força e Vigor) e deslocamento do alvo. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a este ritual por um dia. Caso qualquer um dos envolvidos no ritual morra, a mente sobrevivente ficará permanentemente presa no corpo novo, a não ser que use o ritual novamente para voltar a seu corpo antigo. Retornar para o seu corpo voluntariamente é uma ação livre.</p>",
    },
    {
      name: "Presence of Medo",
      circle: "4",
      element: "Fear",
      execution: "standard",
      range: "personal",
      area: "emanação de 9m de raio",
      duration: "sustained",
      normalDice: "5d8+5d8",
      description:
        "<p>Você se torna um receptáculo para o Fear puro, emanando ondas de pavor e ruína. Alvos dentro da área no momento da conjuração ou no início de cada um de seus turnos são acometidos por sofrimento intenso e sofrem 5d8 de dano mental e 5d8 de dano de Fear (Vontade reduz ambos à metade). Alvos que falharem no teste ficam atordoados por uma rodada (este efeito funciona apenas uma vez por cena).</p>",
    },
    {
      name: "Protection from Rituals",
      circle: "2",
      element: "Fear",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "scene",
      description:
        "<p>Você canaliza uma aura de Fear puro, que protege o alvo contra efeitos paranormais. O alvo recebe resistência a paranormal 5 e +5 em testes de resistência contra rituais e habilidades de criaturas paranormais.</p><p><strong>Advanced (+3 EP):</strong> muda o alvo para “até 5 seres tocados”. Requires 3rd circle.</p><p><strong>True(+6 EP):</strong> muda o alvo para “até 5 seres tocados”, a resistência a dano para 10 e o bônus em testes de resistência para +10. Requires 4th circle.</p>",
    },
    {
      name: "Purgatory",
      circle: "3",
      element: "Blood",
      execution: "standard",
      range: "short",
      target: "área de 6m de raio",
      duration: "sustained",
      save: "Fortitude parcial ",
      normalDice: "6d6",
      description:
        "<p>Você faz brotar uma poça de sangue pegajoso na área afetada. Inimigos na área se tornam vulneráveis a dano balístico, de corte, de impacto e de perfuração. Um alvo que tente sair da área é acometido de uma dor terrível; sofre 6d6 pontos de dano de Blood e deve fazer um teste de Fortitude. Se passar, consegue sair. Se falhar, a dor faz com que não consiga se mover e perca a ação de movimento.</p>",
    },
    {
      name: "Reject Fog",
      circle: "2",
      element: "Fear",
      execution: "standard",
      range: "short",
      area: "nuvem de 6m de raio",
      duration: "scene",
      description:
        "<p>Você manifesta um leve redemoinho de névoa que se movimenta suavemente dentro da área. Rituais conjurados dentro da área têm seu custo aumentado em +2 EP por circle e sua execução aumentada em um passo (de livre para movimento, de movimento para padrão, de padrão para completa, de completa para duas rodadas). <em>Rejeitar a Névoa</em> anula os efeitos de <em>Cinerária</em>, a menos que o conjurador de <em>Cinerária</em> use uma ação completa por rodada para manter o ritual ativo, neutralizando o efeito dos dois rituais.</p><p><strong>Advanced (+2 EP):</strong> além do normal, a DT de testes de resistência contra rituais realizados na área diminui em –5.</p><p><strong>True (+ 5 EP):</strong> como discente, e o dano causado dentro da névoa por rituais é sempre mínimo.</p>",
    },
    {
      name: "Ghost Leap",
      circle: "3",
      element: "Energy",
      execution: "standard",
      range: "medium",
      target: "yourself",
      duration: "instantaneous",
      description:
        "<p>Seu corpo se transforma momentaneamente em Energy pura e viaja até outro ponto. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo, desde que já tenha observado o local de alguma forma (pessoalmente, por fotografia, por vídeo...). Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportado, você não pode agir pelo resto do seu turno. Este ritual não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.</p><p><strong>Advanced (+2 EP):</strong> muda a execução para reação. Em vez do normal, você salta para um espaço adjacente (1,5m), recebendo +10 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo.</p><p><strong>True (+4 EP):</strong> muda o alcance para longo e o alvo para você e até dois outros seres voluntários que você esteja tocando.</p>",
    },
    {
      name: "Chaos Breath",
      circle: "2",
      element: "Energy",
      execution: "standard",
      range: "medium",
      area: "varies",
      duration: "sustained",
      save: "veja texto",
      description:
        "<p>Você altera os movimentos de massas de ar de forma caótica. Ao conjurar o ritual, escolha um dos efeitos abaixo.</p><p><strong>Ascender:</strong> cria uma corrente de ar ascendente capaz de erguer do chão um ser ou objeto Médio, fazendo o alvo flutuar para cima e para baixo conforme sua vontade. Você pode gastar uma ação de movimento para subir ou descer o alvo até 6m por rodada, até um máximo de 30m de altura. Você não pode mover o alvo horizontalmente — mas o alvo pode, por exemplo, escalar uma colina ou se apoiar no teto para mover-se lateralmente (com metade de seu deslocamento normal). Um ser levitando fica vulnerável. Alvos involuntários têm direito a um teste de Fortitude no início de cada um de seus turnos para encerrar o efeito. Derrubar um alvo flutuando (simplesmente parando a corrente de ar) causa o dano normal de queda, mas um alvo que passe no teste pode “nadar” para o chão contra a corrente. Você pode usar essa opção para fazer uma manobra derrubar contra um alvo voador dentro do alcance, usando Ocultismo em vez de Luta.</p><p><strong>Sopro:</strong> cria uma lufada de vento a partir de suas mãos, que empurra qualquer alvo Médio ou menor, em um cone de 4,5m — faça uma manobra empurrar usando Ocultismo em vez de Luta, usando uma mesma rolagem sua para todos os alvos. A lufada de vento também faz qualquer coisa que um vento forte e súbito faria, como levantar pó, dispersar vapores, apagar chamas, espalhar papéis ou mover uma embarcação. Manter o sopro ativo exige uma ação padrão no seu turno.</p><p><strong>Vento:</strong> cria uma área de vento forte dentro do alcance. Se conjurada numa área que já esteja com algum efeito de vento, aumenta esse efeito em um passo. Manter o vento ativo requer uma ação de movimento. Você também pode usar essa opção para reduzir os efeitos de vento em uma área.</p><p><strong>Advanced (+3 EP):</strong> passa a afetar alvos Grandes.</p><p><strong>True (+9 EP):</strong> passa a afetar alvos Enormes.</p>",
    },
    {
      name: "Weave Illusion",
      circle: "1",
      element: "Knowledge",
      execution: "standard",
      range: "medium",
      effect: "illusion that extends to up to 4 1.5m cubes",
      duration: "scene",
      save: "Will disbelieves",
      verdadeiroDice: "6d6",
      description:
        "<p>Este ritual cria uma ilusão visual (uma pessoa, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). O ritual cria apenas imagens ou sons simples, com volume equivalente à voz de uma pessoa para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Seres e objetos atravessam uma ilusão sem sofrer dano, mas o ritual pode, por exemplo, esconder uma armadilha ou emboscada. A ilusão é dissipada se você sair do alcance.</p><p><strong>Advanced (+2 EP):</strong> muda o efeito para até 8 cubos de 1,5m e a duração para sustentada. Você pode criar ilusões de imagem e sons combinados, e pode criar sons complexos, odores e sensações térmicas. Também pode criar sensações táteis, como texturas; objetos ainda atravessam a ilusão, mas seres não conseguem atravessá-la sem passar em um teste de Vontade. A cada rodada, você pode usar uma ação livre para mover a imagem ou alterar o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. A ilusão ainda é incapaz de causar ou sofrer dano. Quando você para de sustentar o ritual, a imagem ou som persistem por mais uma rodada antes do ritual se dissipar. Requires 2nd circle.</p><p><strong>True (+ 5 EP):</strong> você cria a ilusão de um perigo mortal. Quando o ritual é conjurado, e no início de cada um de seus turnos, um alvo interagindo com a ilusão deve fazer um teste de Vontade; se falhar, acredita que a ilusão é real e sofre 6d6 pontos de dano de Knowledge. O alvo racionaliza o efeito sempre que falha no teste (por exemplo, acredita que o mesmo teto pode cair sobre ele várias vezes). Se um alvo passar em dois testes de Vontade seguidos, o efeito é anulado para ele. Requires 3rd circle.</p>",
    },
    {
      name: "Noise Screen",
      circle: "2",
      element: "Energy",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      description:
        "<p>Este ritual cria uma película de energia que recobre seu corpo e absorve energia cinética. Você recebe 30 PV temporários, mas apenas contra dano balístico, de corte, de impacto ou de perfuração.</p><p>Alternativamente, você pode conjurar este ritual como uma reação quando sofrer dano, recebendo resistência 15 apenas contra esse dano.</p><p><strong>Advanced (+3 EP):</strong> aumenta os PV temporário para 60 e a resistência para 30.</p><p><strong>True (+7 EP):</strong> muda o alcance para curto e o alvo para 1 ser ou objeto Enorme ou menor. Em vez do normal, cria uma esfera imóvel e tremeluzente com o tamanho do alvo e centrada nele. Nenhum ser, objeto ou efeito de dano pode passar pela esfera, embora seres possam respirar normalmente dentro dela. O alvo tem direito a um teste de Reflexo para evitar ser aprisionado. Requires 4th circle.</p>",
    },
    {
      name: "Teleportation",
      circle: "4",
      element: "Energy",
      execution: "standard",
      range: "touch",
      target: "up to 5 volunteers",
      duration: "instantaneous",
      description:
        "<p>O ritual transforma o corpo e equipamento dos alvos em energia pura e os faz reaparecer num lugar a sua escolha a até 1.000km. Quando conjura este ritual, você precisa fazer um teste de Ocultismo, com DT definida pelo seu conhecimento sobre o destino.</p><p><strong>DT 25.</strong> Um lugar que você visita com frequência.</p><p><strong>DT 30.</strong> Um lugar que você já visitou pelo menos uma vez.</p><p><strong>DT 35.</strong> Um lugar que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá.</p><p>Você não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para “o local onde Júlia está presa” se nunca esteve lá nem falou com alguém que esteve.</p><p>Se passar no teste, os alvos chegam ao lugar desejado. Se falhar, você chega em um lugar parecido,mas errado ou distante (até 1d10 x 10 km). Se você falhar por 5 ou mais, o ritual falha, mas você gasta EP normalmente e fica atordoado por 1d4 rodadas.</p><p><strong>True (+5 EP):</strong> pode se teletransportar para qualquer local na Terra.</p>",
    },
    {
      name: "Sludge Tentacles",
      circle: "3",
      element: "Death",
      execution: "standard",
      range: "medium",
      area: "circle with 6m radius",
      duration: "scene",
      normalDice: "4d6",
      verdadeiroDice: "6d6",
      description:
        "<p>Uma fenda sombria se abre no chão, de onde surgem tentáculos feitos de lodo da Death. Ao conjurar o ritual e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando Ocultismo em vez de Luta) contra cada alvo na área. Se você vencer, o ser é agarrado; se já estava agarrado, é esmagado, sofrendo 4d6 pontos de dano (metade impacto, metade Death). A área do ritual conta como terreno difícil. Os tentáculos são imunes a dano.</p><p><strong>True (+5 EP):</strong> aumenta o raio da área para 9m e aumenta o dano dos tentáculos para 6d6.</p>",
    },
    {
      name: "Third Eye",
      circle: "1",
      element: "Knowledge",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      description:
        "<p>Seus olhos se enchem de sigilos e você passa a enxergar auras paranormais em alcance longo. Rituais, itens amaldiçoados e criaturas emitem auras. Você sabe o elemento da aura e seu poder aproximado — rituais de 1º circle e criaturas de VD até 80 emitem uma aura fraca; rituais de 2nd e 3rd círculos e criaturas de VD entre 81 e 280 emitem uma aura moderada, e rituais de 4th circle e criaturas de VD 281 ou maior emitem uma aura poderosa.</p><p>Além disso, você pode gastar uma ação de movimento para descobrir se um ser que possa ver em alcance médio tem poderes paranormais ou se é capaz de conjurar rituais e de quais elementos.</p><p><strong>Advanced (+2 EP):</strong> muda a duração para 1 dia.</p><p><strong>True (+5 EP):</strong> também pode enxergar objetos e seres invisíveis, que aparecem como formas translúcidas.</p>",
    },
    {
      name: "Transfigure Water",
      circle: "3",
      element: "Energy",
      execution: "standard",
      range: "long",
      area: "sphere with 30m radius",
      duration: "scene",
      save: "veja texto",
      normalDice: "5d8",
      verdadeiroDice: "10d8",
      description:
        "<p>Você canaliza Energy sobre um corpo de água, para que ele adquira movimentos e comportamentos paranormais e caóticos. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Congelar:</strong> toda a água mundana na área é congelada. Seres nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num teste de Atletismo (DT igual a do ritual).</p><p><strong>Derreter:</strong> gelo mundano na área vira água e o ritual termina. A critério do mestre, isso pode criar terreno difícil.</p><p><strong>Enchente:</strong> eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para “alvo: uma embarcação”. O alvo recebe +6m em seu deslocamento pela duração do efeito.</p><p><strong>Evaporar:</strong> toda a água e gelo mundano na área evaporam instantaneamente e o ritual termina. Qualquer ser vivo na área sofre 5d8 de dano de Energy (Fortitude reduz à metade). Criaturas de Death sofrem o dobro desse dano.</p><p><strong>Partir:</strong> diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d’água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d’água profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com DT igual à do ritual permite ao piloto livrar a embarcação).</p><p><strong>True (+5 EP):</strong> aumenta o deslocamento de enchente para +12m e o dano de evaporar para 10d8.</p>",
    },
    {
      name: "Transfigure Earth",
      circle: "3",
      element: "Energy",
      execution: "standard",
      range: "long",
      area: "9 cubes with 1.5m sides",
      duration: "instantaneous",
      save: "veja texto",
      normalDice: "10d6",
      description:
        "<p>Você imbui terra, pedra, lama, argila ou areia na área com Energy, gerando efeitos sobrenaturais e caóticos. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Amolecer:</strong> se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto aos seres na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente.</p><p><strong>Modelar:</strong> pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em um martelo, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).</p><p><strong>Solidificar:</strong> transforma lama ou areia em terra ou pedra. Seres com os pés na superfície ficam agarrados. Eles podem se soltar com uma ação padrão e um teste de Atletismo (DT igual a do ritual).</p><p><strong>Advanced (+3 EP):</strong> muda a área para 15 cubos com 1,5m de lado.</p><p><strong>True (+7 EP):</strong> também afeta todos os tipos de minerais e metais. Requires 4th circle.</p>",
    },
    {
      name: "Vital Transfusion",
      circle: "2",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 being",
      duration: "instantaneous",
      description:
        "<p>Você toca no alvo e transfere sua própria energia vital para ele, podendo sofrer até 30 pontos de dano de Blood para que o alvo recupere a mesma quantidade em PV. Você não pode ficar com menos de 1 PV por causa desse ritual.</p><p><strong>Advanced (+3 EP):</strong> Você pode transferir até 50 pontos de vida. Requires 3rd circle.</p><p><strong>True (+7 EP):</strong> Você pode transferir até 100 pontos de vida. Requires 4th circle.</p>",
    },
    {
      name: "Deadly Speed",
      circle: "2",
      element: "Death",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "sustained",
      description:
        "<p>Você distorce a passagem do tempo ao redor do alvo, tornando-o extremamente veloz. O alvo pode realizar uma ação de movimento adicional por turno. Esta ação não pode ser usada para conjurar rituais.</p><p><strong>Advanced (+3 EP):</strong> em vez de uma ação de movimento, o alvo recebe uma ação padrão adicional por turno.</p><p><strong>True (+7 EP):</strong> muda o alvo para “alvos escolhidos”. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Clairvoyance",
      circle: "3",
      element: "Knowledge",
      execution: "complete",
      range: "unlimited",
      target: "1 being",
      duration: "5 rounds",
      save: "Will nullyfies",
      description:
        "<p>Através de uma superfície reflexiva, como um espelho ou mesmo uma TV desligada, você pode ver e ouvir um ser escolhido e seus arredores (cerca de 6m em qualquer direção). O alvo pode estar a qualquer distância, mas tem direito a um teste de resistência no início de cada um de seus turnos para impedir a Vidência naquele turno. Se o alvo passar em dois testes seguidos, o ritual é encerrado e o alvo fica imune a ele por uma semana. Para esse ritual funcionar, você precisa ter alguma informação sobre o alvo, como seu nome ou uma foto. Dependendo do conhecimento que você tiver dele, o alvo recebe bônus ou penalidades em seu teste de resistência.</p><p><strong>Você sabe o mínimo sobre o alvo:</strong> +10</p><p><strong>Você possui algumas informações sobre o alvo (idade, profissão...) ou já o viu pessoalmente:</strong> +5</p><p><strong>Você conhece bem o alvo:</strong> -0</p><p><strong>Você tem um pertence pessoal ou roupa do alvo:</strong> -5</p><p><strong>Você tem uma parte do corpo do alvo(unhas, cabelos...):</strong> -10</p>",
    },
    {
      name: "Blood Link",
      circle: "4",
      element: "Blood",
      execution: "standard",
      range: "short",
      target: "1 being",
      duration: "scene",
      save: "Fortitude nullyfies",
      description:
        "<p>Você manifesta um símbolo de Blood no seu corpo e no corpo do alvo. Sempre que você sofrer dano, o alvo deve fazer um teste de Fortitude. Se ele falhar, você sofre apenas metade do dano e ele sofre a metade restante.Você pode conjurar o ritual com efeito inverso, fazendo com que você receba metade de todo o dano que o alvo receberia. Alvos voluntários não precisam fazer testes de resistência.</p>",
    },
    {
      name: "Spew Pests",
      circle: "3",
      element: "Blood",
      execution: "standard",
      range: "medium",
      effect: "1 Large swarm (3m square)",
      duration: "sustained",
      save: "Reflexes halves",
      normalDice: "5d12",
      description:
        "<p>Você vomita um enxame de pequenas criaturas de Blood, que surge em um ponto adjacente a sua escolha. O enxame pode passar pelo espaço de outros seres e não impede que outros seres entrem no espaço dele. No final de cada um de seus turnos, o enxame causa 5d12 pontos de dano de sangue a qualquer ser no espaço dele (Reflexos reduz à metade). Você pode gastar uma ação de movimento para mover o enxame com deslocamento de 12m.</p><p><strong>Advanced (+2 EP):</strong> além do normal, um alvo que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dele). O alvo pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar. Se você mover o enxame, o alvo fica livre.</p><p><strong>True (+5 EP):</strong> o enxame vira Enorme (cubo de 6m de lado) e ganha deslocamento de voo 18m.</p>",
    },
    {
      name: "Reset Entropy",
      circle: "3",
      element: "Death",
      execution: "standard",
      range: "short",
      target: "1 person",
      duration: "scene",
      save: "Will reduces partially",
      description:
        '<p>Você zera completamente a entropia do alvo em relação ao ambiente, deixando-o paralisado. Se passar na resistência, em vez disso fica lento. No início de cada um de seus turnos, o alvo pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, encerra o efeito.</p><p><strong>Advanced (+4 EP):</strong> muda o alvo para "1 ser". Requires 4th circle.</p><p><strong>True (+11 EP):</strong> muda o alvo para "seres escolhidos". Requires 4th circle.</p>',
    },
  ],
  Il = { class: "rituals-modal-content" },
  Sl = { class: "class-rituals-container" },
  _l = { class: "secondary-tab-container" },
  Pl = { class: "search-container" },
  Ml = { key: 0, class: "class-rituals-content" },
  Dl = R({
    __name: "RitualsModalContent",
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        h = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Varies", value: 6 },
        ],
        u = [
          { label: "All", circle: "-", value: 0 },
          { label: "1st Circle", circle: "1", value: 1 },
          { label: "2nd Circle", circle: "2", value: 2 },
          { label: "3rd Circle", circle: "3", value: 3 },
          { label: "4th Circle", circle: "4", value: 4 },
        ],
        p = $(0),
        l = $(0),
        m = $(""),
        i = (t) => v("handleAddRitual", t),
        d = X(() =>
          p.value === 0
            ? l.value === 0
              ? Se.filter((t) => K(t.name, m.value)).sort((t, c) =>
                  t.name.localeCompare(c.name)
                )
              : Se.filter((t) => t.circle === u[l.value].circle)
                  .filter((t) => K(t.name, m.value))
                  .sort((t, c) => t.name.localeCompare(c.name))
            : l.value === 0
            ? p.value === 0
              ? Se.filter((t) => K(t.name, m.value)).sort((t, c) =>
                  t.name.localeCompare(c.name)
                )
              : Se.filter((t) => t.element === h[p.value].label)
                  .filter((t) => K(t.name, m.value))
                  .sort((t, c) => t.name.localeCompare(c.name))
            : Se.filter((t) => t.element === h[p.value].label)
                .filter((t) => K(t.name, m.value))
                .filter((t) => t.circle === u[l.value].circle)
                .filter((t) => K(t.name, m.value))
        );
      return (t, c) => (
        o(),
        n("div", Il, [
          e("div", Sl, [
            C(
              pe,
              {
                "current-tab": p.value,
                "tab-options": h,
                onHandleNavigation: c[0] || (c[0] = (A) => (p.value = A)),
              },
              null,
              8,
              ["current-tab"]
            ),
            e("div", _l, [
              C(
                pe,
                {
                  "current-tab": l.value,
                  "tab-options": u,
                  secondary: "",
                  onHandleNavigation: c[1] || (c[1] = (A) => (l.value = A)),
                },
                null,
                8,
                ["current-tab"]
              ),
            ]),
            e("div", Pl, [
              C(
                $e,
                {
                  value: m.value,
                  dark: "",
                  onUpdate: c[2] || (c[2] = (A) => (m.value = A)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            d.value.length > 0
              ? (o(),
                n("div", Ml, [
                  (o(!0),
                  n(
                    j,
                    null,
                    L(
                      d.value,
                      (A) => (
                        o(),
                        n("div", { key: A.name, class: "class-rituals-card" }, [
                          C(Do, { ritual: A, onHandleAdd: i }, null, 8, [
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
  Rl = V(Dl, [["__scopeId", "data-v-46739282"]]),
  Zo = (a) => (w("data-v-13a40b03"), (a = a()), z(), a),
  Vl = { class: "modal-content modal-width" },
  Tl = { class: "modal-header" },
  Ol = Zo(() => e("h2", null, "Add Rituals", -1)),
  wl = Zo(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  zl = [wl],
  Hl = { class: "modal-body modal-height" },
  jl = R({
    __name: "RitualsModal",
    props: { character: {} },
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        h = [Rl, Es],
        u = [
          { label: "Rituals", value: 0 },
          { label: "My Rituals", value: 1 },
        ],
        p = $(0),
        l = (i) => (p.value = i),
        m = (i) => v("handleAddRitual", i);
      return (i, d) => (
        o(),
        n("div", Vl, [
          e("div", Tl, [
            Ol,
            e(
              "button",
              { onClick: d[0] || (d[0] = (t) => i.$emit("handleCloseModal")) },
              zl
            ),
          ]),
          e("div", Hl, [
            C(
              ga,
              { value: p.value, options: u, onHandleNavigation: l },
              null,
              8,
              ["value"]
            ),
            (o(),
            N(
              Ne,
              null,
              [
                (o(),
                N(
                  Pe(h[p.value]),
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
  Ul = V(jl, [["__scopeId", "data-v-13a40b03"]]),
  xl = (a) => (w("data-v-25deaea6"), (a = a()), z(), a),
  Nl = { class: "modal-content modal-width" },
  Ll = { class: "modal-header" },
  Bl = xl(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Fl = [Bl],
  Ql = { class: "modal-body" },
  Gl = ["innerHTML"],
  Xl = R({
    __name: "SkillModal",
    props: { skill: {} },
    emits: ["handleCloseModal"],
    setup(a) {
      return (b, v) => (
        o(),
        n("div", Nl, [
          e("div", Ll, [
            e("h2", null, H(b.skill.name), 1),
            e(
              "button",
              { onClick: v[0] || (v[0] = (h) => b.$emit("handleCloseModal")) },
              Fl
            ),
          ]),
          e("div", Ql, [
            e(
              "div",
              { class: "description", innerHTML: b.skill.description },
              null,
              8,
              Gl
            ),
          ]),
        ])
      );
    },
  }),
  Wl = V(Xl, [["__scopeId", "data-v-25deaea6"]]),
  ee = (a) => (w("data-v-ad846a05"), (a = a()), z(), a),
  Kl = { class: "form-container" },
  Jl = { class: "input-container" },
  Yl = ee(() => e("div", { class: "label" }, " Name* ", -1)),
  Zl = { class: "input-row" },
  eu = { class: "input-container" },
  au = ee(() => e("div", { class: "label" }, " Damage* ", -1)),
  ou = { class: "input-container" },
  tu = ee(() => e("div", { class: "label" }, " Critical* ", -1)),
  su = { class: "input-container" },
  nu = ee(() => e("div", { class: "label" }, " Multiplier* ", -1)),
  ru = { class: "input-row" },
  du = { class: "input-container" },
  iu = ee(() => e("div", { class: "label" }, " Attack Bonus ", -1)),
  lu = { class: "input-container" },
  uu = ee(() => e("div", { class: "label" }, " Damage Type ", -1)),
  cu = { class: "input-row" },
  mu = { class: "input-container" },
  pu = ee(() => e("div", { class: "label" }, " Range ", -1)),
  vu = { class: "input-container" },
  hu = ee(() => e("div", { class: "label" }, " Skill ", -1)),
  gu = { class: "input-container" },
  fu = ee(() => e("div", { class: "label" }, " Damage Attribute ", -1)),
  bu = { class: "title-container" },
  Au = ee(() => e("div", { class: "title" }, " Extra ", -1)),
  Cu = { class: "input-row" },
  qu = { class: "input-container" },
  yu = ee(() => e("div", { class: "label" }, " Damage* ", -1)),
  ku = ["onUpdate:modelValue"],
  $u = { class: "input-container" },
  Eu = ee(() => e("div", { class: "label" }, " Type* ", -1)),
  Iu = { class: "button-remove-container" },
  Su = ["onClick"],
  _u = ee(() =>
    e(
      "div",
      { class: "label" },
      [
        me(" Notes"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Pu = ee(() =>
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
  Mu = { class: "buttons-container" },
  Du = ["disabled"],
  Ru = R({
    __name: "AttackForm",
    props: { attack: { type: Object, default: _e }, addMode: Boolean },
    emits: ["handleClose", "handleEditAttack"],
    setup(a, { emit: b }) {
      const v = a,
        h = b,
        u = [
          "Ballistic",
          "Blood",
          "Bludgeoning",
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
        p = ["-", "Short", "Medium", "Long", "Extreme", "Unlimited"],
        l = [
          "Fighting",
          "Marksmanship",
          "Occultism",
          "Deception",
          "Arts",
          "Technology",
        ],
        m = ["None", "Agility", "Strength", "Intellect", "Presence", "Vigor"],
        i = $(He.clone(v.attack)),
        d = X(
          () =>
            i.value.name === "" ||
            i.value.damage === "" ||
            i.value.criticalRange.toString() === "" ||
            i.value.criticalMult.toString() === ""
        ),
        t = () => {
          yo.isArray(i.value.aditionalDamage) || (i.value.aditionalDamage = []),
            i.value.aditionalDamage.push({
              id: je(),
              value: "1d6",
              damageType: "Ballistic",
            });
        },
        c = (M) => {
          if (!yo.isArray(i.value.aditionalDamage)) return;
          const f = i.value.aditionalDamage.findIndex((y) => y.id === M);
          i.value.aditionalDamage.splice(f, 1);
        },
        A = () => {
          (i.value = He.clone(_e)), h("handleClose");
        },
        P = () => {
          if (d.value) return;
          Ds(i.value);
          const M = { attack: i.value };
          h("handleEditAttack", M), (i.value = He.clone(_e));
        };
      return (M, f) => {
        const y = ca("p-editor");
        return (
          o(),
          n(
            j,
            null,
            [
              e("div", Kl, [
                e("div", Jl, [
                  Yl,
                  be(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          f[0] || (f[0] = (D) => (i.value.name = D)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[Ae, i.value.name]]
                  ),
                ]),
                e("div", Zl, [
                  e("div", eu, [
                    au,
                    be(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[1] || (f[1] = (D) => (i.value.damage = D)),
                          type: "text",
                          class: "input-primary dark dropdown-sized",
                        },
                        null,
                        512
                      ),
                      [[Ae, i.value.damage]]
                    ),
                  ]),
                  e("div", ou, [
                    tu,
                    be(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[2] || (f[2] = (D) => (i.value.criticalRange = D)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[Ae, i.value.criticalRange]]
                    ),
                  ]),
                  e("div", su, [
                    nu,
                    be(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[3] || (f[3] = (D) => (i.value.criticalMult = D)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[Ae, i.value.criticalMult]]
                    ),
                  ]),
                ]),
                e("div", ru, [
                  e("div", du, [
                    iu,
                    be(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[4] || (f[4] = (D) => (i.value.attackBonus = D)),
                          type: "number",
                          class: "input-primary dark dropdown-sized",
                        },
                        null,
                        512
                      ),
                      [[Ae, i.value.attackBonus]]
                    ),
                  ]),
                  e("div", lu, [
                    uu,
                    C(
                      ye,
                      {
                        value: i.value.damageType,
                        options: u,
                        width: "7.5rem",
                        "content-width": "7.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[5] || (f[5] = (D) => (i.value.damageType = D)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", cu, [
                  e("div", mu, [
                    pu,
                    C(
                      ye,
                      {
                        value: i.value.range,
                        options: p,
                        width: "6.5rem",
                        "content-width": "6.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[6] || (f[6] = (D) => (i.value.range = D)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", vu, [
                    hu,
                    C(
                      ye,
                      {
                        value: i.value.skillUsed,
                        options: l,
                        width: "6.5rem",
                        "content-width": "6.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[7] || (f[7] = (D) => (i.value.skillUsed = D)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", gu, [
                    fu,
                    C(
                      ye,
                      {
                        value: i.value.damageAttribute,
                        options: m,
                        width: "7.5rem",
                        "content-width": "7.5rem",
                        "form-input": "",
                        onUpdateValue:
                          f[8] || (f[8] = (D) => (i.value.damageAttribute = D)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", bu, [
                  Au,
                  e(
                    "button",
                    {
                      class: "button-secondary",
                      onClick: f[9] || (f[9] = (D) => t()),
                    },
                    " Add "
                  ),
                ]),
                (o(!0),
                n(
                  j,
                  null,
                  L(
                    i.value.aditionalDamage,
                    (D) => (
                      o(),
                      n("div", { key: D.id }, [
                        e("div", Cu, [
                          e("div", qu, [
                            yu,
                            be(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": (B) => (D.value = B),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                ku
                              ),
                              [[Ae, D.value]]
                            ),
                          ]),
                          e("div", $u, [
                            Eu,
                            C(
                              ye,
                              {
                                value: D.damageType,
                                options: u,
                                width: "7.5rem",
                                "content-width": "7.5rem",
                                "form-input": "",
                                onUpdateValue: (B) => (D.damageType = B),
                              },
                              null,
                              8,
                              ["value", "onUpdateValue"]
                            ),
                          ]),
                          e("div", Iu, [
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: (B) => c(D.id),
                              },
                              " Remove ",
                              8,
                              Su
                            ),
                          ]),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
                _u,
                C(
                  y,
                  {
                    modelValue: i.value.description,
                    "onUpdate:modelValue":
                      f[10] || (f[10] = (D) => (i.value.description = D)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: ke(() => [Pu]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", Mu, [
                e(
                  "button",
                  { class: "button-cancel", onClick: A },
                  " Cancel "
                ),
                e(
                  "button",
                  {
                    class: "button-primary big",
                    disabled: d.value,
                    onClick: P,
                  },
                  H(v.addMode ? "Add" : "Edit"),
                  9,
                  Du
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  }),
  et = V(Ru, [["__scopeId", "data-v-ad846a05"]]),
  at = (a) => (w("data-v-6ad99d7a"), (a = a()), z(), a),
  Vu = { class: "modal-content modal-width" },
  Tu = { class: "modal-header" },
  Ou = at(() => e("h2", null, "Editar", -1)),
  wu = at(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  zu = [wu],
  Hu = { class: "modal-body modal-height" },
  ju = { key: 0 },
  Uu = { key: 1 },
  xu = { key: 2 },
  Nu = { key: 3 },
  Lu = { key: 0 },
  Bu = { key: 1 },
  Fu = { key: 2 },
  Qu = { key: 3 },
  Gu = R({
    __name: "EditModal",
    props: {
      currentEditOption: { type: Number, required: !0 },
      editPower: { type: Object, default: xo },
      editRitual: { type: Object, default: No },
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
        h = { power: 0, ritual: 1, item: 2, attack: 3 },
        u = (i) => v("handleEditPowerSheet", i.power),
        p = (i) => v("handleEditRitualSheet", i.ritual),
        l = (i) => v("handleEditItemSheet", i.item),
        m = (i) => v("handleEditAttackSheet", i.attack);
      return (i, d) => (
        o(),
        n("div", Vu, [
          e("div", Tu, [
            Ou,
            e(
              "button",
              { onClick: d[0] || (d[0] = (t) => i.$emit("handleCloseModal")) },
              zu
            ),
          ]),
          e("div", Hu, [
            a.currentEditOption === h.power
              ? (o(),
                n("div", ju, [
                  C(
                    wo,
                    {
                      power: a.editPower,
                      edit: "",
                      sheet: "",
                      onHandleEditPower: u,
                      onHandleClose:
                        d[1] || (d[1] = (t) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === h.ritual
              ? (o(),
                n("div", Uu, [
                  C(
                    zo,
                    {
                      ritual: a.editRitual,
                      edit: "",
                      sheet: "",
                      onHandleEditRitual: p,
                      onHandleClose:
                        d[2] || (d[2] = (t) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === h.attack
              ? (o(),
                n("div", xu, [
                  C(
                    et,
                    {
                      attack: a.editAttack,
                      onHandleEditAttack: m,
                      onHandleClose:
                        d[3] || (d[3] = (t) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === h.item
              ? (o(),
                n("div", Nu, [
                  a.editItem.itemType === "weapon"
                    ? (o(),
                      n("div", Lu, [
                        C(
                          Ho,
                          {
                            weapon: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditWeapon: l,
                            onHandleClose:
                              d[4] ||
                              (d[4] = (t) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["weapon"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "protection"
                    ? (o(),
                      n("div", Bu, [
                        C(
                          jo,
                          {
                            protection: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditProtection: l,
                            onHandleClose:
                              d[5] ||
                              (d[5] = (t) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["protection"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "misc" ||
                  a.editItem.itemType === "ammunition"
                    ? (o(),
                      n("div", Fu, [
                        C(
                          la,
                          {
                            misc: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditMisc: l,
                            onHandleClose:
                              d[6] ||
                              (d[6] = (t) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["misc"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "cursedItem"
                    ? (o(),
                      n("div", Qu, [
                        C(
                          Uo,
                          {
                            "cursed-item": a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditCursedItem: l,
                            onHandleClose:
                              d[7] ||
                              (d[7] = (t) => i.$emit("handleCloseModal")),
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
  Xu = V(Gu, [["__scopeId", "data-v-6ad99d7a"]]),
  Fe = (a) => (w("data-v-6cd98f8c"), (a = a()), z(), a),
  Wu = { key: 0, class: "row" },
  Ku = Fe(() =>
    e("div", { class: "label" }, " Class for attribute calculation ", -1)
  ),
  Ju = { class: "row" },
  Yu = Fe(() =>
    e(
      "div",
      { class: "label" },
      [
        me(" Private sheet "),
        e(
          "div",
          { class: "label-obs" },
          " Only you and the DM can see the character sheet. Other players can still see it in the DM Screen "
        ),
      ],
      -1
    )
  ),
  Zu = { class: "row" },
  ec = Fe(() =>
    e(
      "div",
      { class: "label" },
      " Allow the campaign DM to edit my character sheet ",
      -1
    )
  ),
  ac = { class: "row" },
  oc = Fe(() =>
    e(
      "div",
      { class: "label" },
      [
        me(" Allow anyone to edit my character sheet "),
        e(
          "div",
          { class: "label-obs" },
          " Warning: when this option is on anyone can edit your sheet. It is not recommended to leave this option on for a long time "
        ),
      ],
      -1
    )
  ),
  tc = R({
    __name: "SheetConfig",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleChangeStatsClass", "handleChangeEditPermissions"],
    setup(a, { emit: b }) {
      const v = b,
        h = ["DESLIGADO", "LIGADO"],
        u = ["Combatente", "Especialista", "Ocultista"],
        p = (m) => {
          v("handleChangeStatsClass", m);
        },
        l = (m, i) => {
          v("handleChangeEditPermissions", m, i);
        };
      return (m, i) => (
        o(),
        n(
          j,
          null,
          [
            a.character.statsClass !== "Mundane"
              ? (o(),
                n("div", Wu, [
                  Ku,
                  C(
                    ye,
                    {
                      value: a.character.statsClass,
                      options: u,
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
            e("div", Ju, [
              Yu,
              C(
                ra,
                {
                  value: a.character.private,
                  options: h,
                  onHandleChange: i[0] || (i[0] = (d) => l("private", d)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", Zu, [
              ec,
              C(
                ra,
                {
                  value: a.character.canDMEdit,
                  options: h,
                  onHandleChange: i[1] || (i[1] = (d) => l("canDMEdit", d)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", ac, [
              oc,
              C(
                ra,
                {
                  value: a.character.canAnyoneEdit,
                  options: h,
                  onHandleChange: i[2] || (i[2] = (d) => l("canAnyoneEdit", d)),
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
  sc = V(tc, [["__scopeId", "data-v-6cd98f8c"]]),
  nc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAcklEQVR4Ae2VsRGAIBTFmMDOnXQ8Z2MDGCQ22JLjXmNBepJ7NL8ssQFuoDOhDJgwCzSELDBYXH0CNQ+4vMYBkZ9ZQOT2XgIuTwIuFySQyyXg8uCLRJ4GgMPl+YJH5FngWyLuLOD8KNDIadHBETpwlc0KLy8akHGKumHqAAAAAElFTkSuQmCC",
  te = (a) => (w("data-v-87004152"), (a = a()), z(), a),
  rc = { class: "row" },
  dc = ["onMouseup"],
  ic = te(() => e("img", { src: nc }, null, -1)),
  lc = te(() =>
    e(
      "div",
      { class: "link-eg" },
      " For OBS a resolution of 3400x1200 is recommended. It can be adjusted as needed. ",
      -1
    )
  ),
  uc = { class: "row" },
  cc = te(() =>
    e("div", { class: "label" }, " Color of dice results ", -1)
  ),
  mc = ["value"],
  pc = { class: "row" },
  vc = te(() =>
    e("div", { class: "label" }, " Border color of dice results ", -1)
  ),
  hc = ["value"],
  gc = { class: "row" },
  fc = te(() =>
    e("div", { class: "label" }, " Injured agent picture ", -1)
  ),
  bc = { key: 0 },
  Ac = ["src"],
  Cc = { key: 1 },
  qc = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Me, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  yc = [qc],
  kc = { class: "row" },
  $c = te(() =>
    e("div", { class: "label" }, " Dying agent picture ", -1)
  ),
  Ec = { key: 0 },
  Ic = ["src"],
  Sc = { key: 1 },
  _c = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Me, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Pc = [_c],
  Mc = { class: "row" },
  Dc = te(() =>
    e("div", { class: "label" }, " Disturbed agent pictured ", -1)
  ),
  Rc = { key: 0 },
  Vc = ["src"],
  Tc = { key: 1 },
  Oc = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Me, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  wc = [Oc],
  zc = { class: "row" },
  Hc = te(() =>
    e("div", { class: "label" }, " Going Crazy agent picture ", -1)
  ),
  jc = { key: 0 },
  Uc = ["src"],
  xc = { key: 1 },
  Nc = te(() =>
    e(
      "img",
      { class: "profile-picture", src: Me, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Lc = [Nc],
  Bc = { key: 0 },
  Fc = R({
    __name: "StreamConfig",
    props: { character: { type: Object, required: !0 } },
    emits: [
      "handleUpdateAlternativePicture",
      "handleChangeCharResultDiceColor",
      "handleChangeCharResultDiceBorderColor",
    ],
    setup(a, { emit: b }) {
      const v = a,
        h = b,
        u = $(!1),
        p = $(),
        l = (d) => {
          (p.value = d), (u.value = !u.value);
        },
        m = (d, t) => {
          (u.value = !u.value),
            h("handleUpdateAlternativePicture", p.value, d, t);
        },
        i = () => {
          window.open(
            "https://crisordemparanormal.com/agente/stream/" + v.character.id
          );
        };
      return (d, t) => {
        const c = ca("vue-final-modal");
        return (
          o(),
          n(
            j,
            null,
            [
              e("div", rc, [
                e(
                  "div",
                  {
                    class: "link",
                    onClick: i,
                    onMouseup: fo(i, ["middle"]),
                    onMousedown:
                      t[0] ||
                      (t[0] = fo(() => {}, ["middle", "prevent", "stop"])),
                  },
                  [me(" Access OBS portrait "), ic],
                  40,
                  dc
                ),
                lc,
              ]),
              e("div", uc, [
                cc,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: a.character.resultDiceColor || "#fff",
                    onBlur:
                      t[1] ||
                      (t[1] = (A) =>
                        d.$emit("handleChangeCharResultDiceColor", A)),
                  },
                  null,
                  40,
                  mc
                ),
              ]),
              e("div", pc, [
                vc,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: a.character.resultDiceBorderColor || "#A347FF",
                    onBlur:
                      t[2] ||
                      (t[2] = (A) =>
                        d.$emit("handleChangeCharResultDiceBorderColor", A)),
                  },
                  null,
                  40,
                  hc
                ),
              ]),
              e("div", gc, [
                fc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: t[3] || (t[3] = (A) => l("hurt")),
                  },
                  [
                    a.character.sheetPictureHurtURL
                      ? (o(),
                        n("div", bc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureHurtURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Ac
                          ),
                        ]))
                      : (o(), n("div", Cc, yc)),
                  ]
                ),
              ]),
              e("div", kc, [
                $c,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: t[4] || (t[4] = (A) => l("dying")),
                  },
                  [
                    a.character.sheetPictureDyingURL
                      ? (o(),
                        n("div", Ec, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureDyingURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Ic
                          ),
                        ]))
                      : (o(), n("div", Sc, Pc)),
                  ]
                ),
              ]),
              e("div", Mc, [
                Dc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: t[5] || (t[5] = (A) => l("disturbed")),
                  },
                  [
                    a.character.sheetPictureDisturbedURL
                      ? (o(),
                        n("div", Rc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureDisturbedURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Vc
                          ),
                        ]))
                      : (o(), n("div", Tc, wc)),
                  ]
                ),
              ]),
              e("div", zc, [
                Hc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: t[6] || (t[6] = (A) => l("crazy")),
                  },
                  [
                    a.character.sheetPictureCrazyURL
                      ? (o(),
                        n("div", jc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureCrazyURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Uc
                          ),
                        ]))
                      : (o(), n("div", xc, Lc)),
                  ]
                ),
              ]),
              u.value
                ? (o(),
                  n("div", Bc, [
                    C(
                      c,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          t[8] || (t[8] = (A) => (u.value = A)),
                        classes: "modal-container",
                      },
                      {
                        default: ke(() => [
                          C(Lo, {
                            onHandleCloseModal:
                              t[7] || (t[7] = (A) => (u.value = !u.value)),
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
  Qc = V(Fc, [["__scopeId", "data-v-87004152"]]),
  ot = (a) => (w("data-v-78a9772d"), (a = a()), z(), a),
  Gc = { class: "modal-content modal-width" },
  Xc = { class: "modal-header" },
  Wc = ot(() => e("h2", null, "Config", -1)),
  Kc = ot(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Jc = [Kc],
  Yc = { class: "modal-body modal-height" },
  Zc = { key: 0, class: "content-container" },
  em = { key: 1, class: "content-container" },
  am = R({
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
        h = [
          { label: "Sheet", value: 0 },
          { label: "Stream", value: 1 },
        ],
        u = $(0),
        p = (i) => {
          v("handleChangeStatsClass", i);
        },
        l = (i, d, t) => {
          v("handleUpdateAlternativePicture", i, d, t);
        },
        m = (i, d) => {
          v("handleChangeEditPermissions", i, d);
        };
      return (i, d) => (
        o(),
        n("div", Gc, [
          e("div", Xc, [
            Wc,
            e(
              "button",
              { onClick: d[0] || (d[0] = (t) => i.$emit("handleCloseModal")) },
              Jc
            ),
          ]),
          e("div", Yc, [
            C(
              pe,
              {
                "current-tab": u.value,
                "tab-options": h,
                onHandleNavigation: d[1] || (d[1] = (t) => (u.value = t)),
              },
              null,
              8,
              ["current-tab"]
            ),
            u.value === 0
              ? (o(),
                n("div", Zc, [
                  C(
                    sc,
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
            u.value === 1
              ? (o(),
                n("div", em, [
                  C(
                    Qc,
                    {
                      character: a.character,
                      onHandleUpdateAlternativePicture: l,
                      onHandleChangeCharResultDiceColor:
                        d[2] ||
                        (d[2] = (t) =>
                          i.$emit("handleChangeCharResultDiceColor", t)),
                      onHandleChangeCharResultDiceBorderColor:
                        d[3] ||
                        (d[3] = (t) =>
                          i.$emit("handleChangeCharResultDiceBorderColor", t)),
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
  om = V(am, [["__scopeId", "data-v-78a9772d"]]),
  fa = (a) => (w("data-v-e8d7dd12"), (a = a()), z(), a),
  tm = { class: "modal-content modal-width" },
  sm = { class: "modal-header" },
  nm = fa(() => e("h2", null, "Choose new class", -1)),
  rm = fa(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  dm = [rm],
  im = { class: "modal-body modal-height" },
  lm = { class: "content-container" },
  um = fa(() =>
    e(
      "div",
      { class: "add-class-description" },
      " To increase your EXP, choose a new class ",
      -1
    )
  ),
  cm = { class: "classes-container" },
  mm = { class: "classes-flex" },
  pm = R({
    __name: "AddClassModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal", "handleAddClass"],
    setup(a, { emit: b }) {
      const v = b,
        h = (u) => v("handleAddClass", u);
      return (u, p) => (
        o(),
        n("div", tm, [
          e("div", sm, [
            nm,
            e(
              "button",
              { onClick: p[0] || (p[0] = (l) => u.$emit("handleCloseModal")) },
              dm
            ),
          ]),
          e("div", im, [
            e("div", lm, [
              um,
              e("div", cm, [
                e("div", mm, [
                  (o(!0),
                  n(
                    j,
                    null,
                    L(
                      G(ze),
                      (l) => (
                        o(),
                        n("div", { key: l.name }, [
                          C(
                            ys,
                            { "char-class": l, onHandleAddClass: h },
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
  vm = V(pm, [["__scopeId", "data-v-e8d7dd12"]]),
  hm = (a) => (w("data-v-be964fd1"), (a = a()), z(), a),
  gm = { class: "modal-content modal-width" },
  fm = { class: "modal-header" },
  bm = hm(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Am = [bm],
  Cm = { class: "modal-body modal-height" },
  qm = { key: 0 },
  ym = { key: 1 },
  km = { key: 2 },
  $m = { key: 3 },
  Em = { key: 4 },
  Im = { key: 5 },
  Sm = { key: 6 },
  _m = { key: 7 },
  Pm = R({
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
        h = {
          attack: 0,
          power: 1,
          ritual: 2,
          weapon: 3,
          ammunition: 4,
          protection: 5,
          misc: 6,
          cursedItem: 7,
        },
        u = [
          "New Attack",
          "New Ability",
          "New Ritual",
          "New Weapon",
          "New Ammo",
          "New Armor",
          "New Item",
          "New Cursed Item",
        ],
        p = (d) => v("handleAddAttack", d.attack),
        l = (d) => v("handleAddPower", d.power),
        m = (d) => v("handleAddRitual", d.ritual),
        i = (d) => v("handleAddItem", d.item);
      return (d, t) => (
        o(),
        n("div", gm, [
          e("div", fm, [
            e("h2", null, H(u[a.currentAddOption]), 1),
            e(
              "button",
              { onClick: t[0] || (t[0] = (c) => d.$emit("handleCloseModal")) },
              Am
            ),
          ]),
          e("div", Cm, [
            a.currentAddOption === h.attack
              ? (o(),
                n("div", qm, [
                  C(
                    et,
                    {
                      attack: G(_e),
                      "add-mode": "",
                      onHandleEditAttack: p,
                      onHandleClose:
                        t[1] || (t[1] = (c) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === h.power
              ? (o(),
                n("div", ym, [
                  C(
                    wo,
                    {
                      power: G(xo),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditPower: l,
                      onHandleClose:
                        t[2] || (t[2] = (c) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === h.ritual
              ? (o(),
                n("div", km, [
                  C(
                    zo,
                    {
                      ritual: G(No),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditRitual: m,
                      onHandleClose:
                        t[3] || (t[3] = (c) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === h.weapon
              ? (o(),
                n("div", $m, [
                  C(
                    Ho,
                    {
                      weapon: G(Is),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditWeapon: i,
                      onHandleClose:
                        t[4] || (t[4] = (c) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["weapon"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === h.ammunition
              ? (o(),
                n("div", Em, [
                  C(
                    la,
                    {
                      misc: G(Ss),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: i,
                      onHandleClose:
                        t[5] || (t[5] = (c) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === h.protection
              ? (o(),
                n("div", Im, [
                  C(
                    jo,
                    {
                      protection: G(_s),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditProtection: i,
                      onHandleClose:
                        t[6] || (t[6] = (c) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["protection"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === h.misc
              ? (o(),
                n("div", Sm, [
                  C(
                    la,
                    {
                      misc: G(Ps),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: i,
                      onHandleClose:
                        t[7] || (t[7] = (c) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === h.cursedItem
              ? (o(),
                n("div", _m, [
                  C(
                    Uo,
                    {
                      "cursed-item": G(Ms),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditCursedItem: i,
                      onHandleClose:
                        t[8] || (t[8] = (c) => d.$emit("handleCloseModal")),
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
  Mm = V(Pm, [["__scopeId", "data-v-be964fd1"]]),
  ba = (a) => (w("data-v-15adeee7"), (a = a()), z(), a),
  Dm = { class: "modal-content modal-width" },
  Rm = { class: "modal-header" },
  Vm = ba(() => e("h2", null, "Compartilhar", -1)),
  Tm = ba(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Om = [Tm],
  wm = ba(() =>
    e("div", { class: "label" }, " Link to share agent ", -1)
  ),
  zm = R({
    __name: "ShareModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal"],
    setup(a) {
      const v = "https://crisordemparanormal.com/agente/" + a.character.id;
      return (h, u) => (
        o(),
        n("div", Dm, [
          e("div", Rm, [
            Vm,
            e(
              "button",
              { onClick: u[0] || (u[0] = (p) => h.$emit("handleCloseModal")) },
              Om
            ),
          ]),
          e("div", { class: "modal-body modal-height" }, [
            e("div", { class: "share-container" }, [
              wm,
              e("div", { class: "value" }, H(v)),
            ]),
          ]),
        ])
      );
    },
  }),
  Hm = V(zm, [["__scopeId", "data-v-15adeee7"]]),
  jm =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAnUlEQVQ4jd3QsQ2CYBRF4X8A2QArE0ZgDyqXYA1bJ6BmABtqtrAzFtIREkuaz8pEBZGEWOjp3ss9ybsvhD9GrNRolOJ58daddoaiRCUWq1CORfAwXbAOIQRrXL4gTJ3khY+lx4QZb30+aQaLBBu5g6Mrzg5ym/diqn5tBWrpWDzTo1PYSqysJLYKHXrZUDhhLxrsIzucRptMsVz4SW5d6iOF5C1O7AAAAABJRU5ErkJggg==",
  tt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABm0lEQVRYw+2VsUqCYRSGj4M26eIgpoGLdQUaQeRsdA/WLDoVdAviNajw34CL5NSqv+HgKi1N1SCCNTno09DXx69WBJ5vCHy3s7yP/3fe8yqy078XEar0eeedPlUi2vYpRgQ1IqX761ftPxF6X0GF71TRA/jGskuaNF0z+XqAN2N5ICLCgZne9ABTpwByTJw9EQmaLMDJkglzzYyftG1MKTK2ZktaDBUPjSydgJlPXoQIZXoKVUGUGnNr/kyJkF4cQ5R4tuZzakQ12rFHmYgIeXuxAB2ymu04pMXSTmOK+u34pRnXhN20IyxoknDXjhNybttx6rp+FQHOn8j5kn+P6c3WMf3DoZ1rfMV6VRwzCCDvOBRtEeKSl0DZ1YnpQ2LUA3X9ypViXVvIoY0uwAMnIiKc0sDHp8mZBuSCx8BfpkdrJRQeexoxuLU3vylP57H28QLxXVVBayMnPBnLe4444t5MDb2l94xlRkSEjJkGeoCvA0yKiJDUBzSMZZs4cdr6T1RwumQRETxHMbWAvTWExqFtQM5oKlbFTur6AEfWlu1Qg1zXAAAAAElFTkSuQmCC",
  st =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABIUlEQVQ4y8XTvS6DARTG8YOEpWNJ8HbFgM0g4ipsBjfRxAV0MnakW5OquIKmw8vUiIWkl9DkrcnuY/gZ0E+kDYlnPDn/5JznPCfiH6ToU8XJgFoPqE0G3GLXPm6/b5qRajqwqOwVect4VbboQFNqZhg40tez84gIl14GqkeD7TkZKtpIrfXqG65x5wyZXB8ooWs+wrZZibqurrrEnM0ICx5Q6gOHntCyEiHx2BvjURJhRQtPDgeH2tFBNUIdDYlEA/UIVXTsjPp0jJMIGQoREQrIIpzgeNzY6YApR/pY+sbqhEsP2Lo1Yuus7QjzusO2vh/u1D2urPfqa1K0VUYONxKNFxcREc49fxONL8K3JP9j+MbivWf3x3j/7oGmfdE/1huxmbTYvNt7qgAAAABJRU5ErkJggg==",
  De = (a) => (w("data-v-60e2e1d5"), (a = a()), z(), a),
  Um = { class: "sheet-tools-container" },
  xm = { key: 0 },
  Nm = { key: 0 },
  Lm = { key: 0, class: "added-info" },
  Bm = { key: 1 },
  Fm = De(() => e("img", { src: jm, alt: "adicionar" }, null, -1)),
  Qm = [Fm],
  Gm = { key: 1, class: "sheet-tools-mobile-container" },
  Xm = { key: 0, class: "sheet-tools-buttons-container" },
  Wm = De(() => e("img", { src: tt, alt: "compartilhar" }, null, -1)),
  Km = [Wm],
  Jm = De(() => e("img", { src: st, alt: "configurações" }, null, -1)),
  Ym = [Jm],
  Zm = { key: 1, class: "share-mobile-container" },
  ep = De(() => e("img", { src: tt, alt: "compartilhar" }, null, -1)),
  ap = [ep],
  op = De(() => e("img", { src: st, alt: "configurações" }, null, -1)),
  tp = [op],
  sp = R({
    __name: "SheetTools",
    props: { disabledSheet: Boolean, charAdded: Boolean },
    emits: [
      "handleShareSheet",
      "handleAddAgent",
      "handleOpenConfig",
      "handleOpenShareModal",
      "handleOpenSkinsModal",
    ],
    setup(a, { emit: b }) {
      const v = b,
        h = Po(),
        u = $(window.innerWidth),
        p = () => {
          v("handleShareSheet");
        },
        l = () => {
          v("handleAddAgent");
        };
      return (
        Ee(() => {
          window.addEventListener("resize", () => {
            u.value = window.innerWidth;
          });
        }),
        (m, i) => (
          o(),
          n("div", Um, [
            a.disabledSheet
              ? (o(),
                n("div", xm, [
                  G(h).currentUser
                    ? (o(),
                      n("div", Nm, [
                        a.charAdded
                          ? (o(),
                            n("div", Lm, " Agent added to your coletion! "))
                          : (o(),
                            n("div", Bm, [
                              e(
                                "button",
                                {
                                  class: "button-naked share-button",
                                  onClick: l,
                                },
                                Qm
                              ),
                            ])),
                      ]))
                    : q("", !0),
                ]))
              : (o(),
                n("div", Gm, [
                  u.value >= 1023
                    ? (o(),
                      n("div", Xm, [
                        e(
                          "button",
                          {
                            class: "customize-button",
                            onClick:
                              i[0] ||
                              (i[0] = (d) => m.$emit("handleOpenSkinsModal")),
                          },
                          " Customization "
                        ),
                        e(
                          "button",
                          { class: "button-naked share-button", onClick: p },
                          Km
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[1] ||
                              (i[1] = (d) => m.$emit("handleOpenConfig")),
                          },
                          Ym
                        ),
                      ]))
                    : (o(),
                      n("div", Zm, [
                        e(
                          "button",
                          {
                            class: "customize-button",
                            onClick:
                              i[2] ||
                              (i[2] = (d) => m.$emit("handleOpenSkinsModal")),
                          },
                          " Customization "
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[3] ||
                              (i[3] = (d) => m.$emit("handleOpenShareModal")),
                          },
                          ap
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[4] ||
                              (i[4] = (d) => m.$emit("handleOpenConfig")),
                          },
                          tp
                        ),
                      ])),
                ])),
          ])
        )
      );
    },
  }),
  Eo = V(sp, [["__scopeId", "data-v-60e2e1d5"]]),
  Qe = (a) => (w("data-v-552e0b49"), (a = a()), z(), a),
  np = { class: "sheet-header-container" },
  rp = { class: "profile-picture-container" },
  dp = ["disabled"],
  ip = { key: 0 },
  lp = ["src"],
  up = { key: 1 },
  cp = { class: "header-info-container" },
  mp = { class: "header-info-row" },
  pp = { class: "info-line" },
  vp = Qe(() => e("h3", null, "CHARACTER", -1)),
  hp = ["disabled", "value"],
  gp = { class: "info-line" },
  fp = Qe(() => e("h3", null, "PLAYER", -1)),
  bp = ["disabled", "value"],
  Ap = { class: "header-info-row" },
  Cp = { class: "info-line" },
  qp = Qe(() => e("h3", null, "BACKGROUND", -1)),
  yp = ["disabled", "value"],
  kp = { class: "info-line" },
  $p = Qe(() => e("h3", null, "CLASS", -1)),
  Ep = ["disabled", "value"],
  Ip = R({
    __name: "SheetHeader",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeCharHeaderText", "handleOpenChangePictureModal"],
    setup(a) {
      return (b, v) => (
        o(),
        n("div", np, [
          e("div", rp, [
            e(
              "button",
              {
                class: "button-naked",
                disabled: b.disabledSheet,
                onClick:
                  v[0] ||
                  (v[0] = (h) => b.$emit("handleOpenChangePictureModal")),
              },
              [
                b.character.sheetPictureURL
                  ? (o(),
                    n("div", ip, [
                      e(
                        "img",
                        {
                          class: J([
                            "profile-picture",
                            { "disabled-picture": b.disabledSheet },
                          ]),
                          src: b.character.sheetPictureURL,
                          alt: "foto agente",
                        },
                        null,
                        10,
                        lp
                      ),
                    ]))
                  : (o(),
                    n("div", up, [
                      e(
                        "img",
                        {
                          class: J([
                            "profile-picture",
                            { "disabled-picture": b.disabledSheet },
                          ]),
                          src: Me,
                          alt: "foto agente em branco",
                        },
                        null,
                        2
                      ),
                    ])),
              ],
              8,
              dp
            ),
          ]),
          e("div", cp, [
            e("div", mp, [
              e("div", pp, [
                vp,
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
                      (v[1] = (h) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: h,
                          key: "name",
                        })),
                  },
                  null,
                  40,
                  hp
                ),
              ]),
              e("div", gp, [
                fp,
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
                      (v[2] = (h) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: h,
                          key: "player",
                        })),
                  },
                  null,
                  40,
                  bp
                ),
              ]),
            ]),
            e("div", Ap, [
              e("div", Cp, [
                qp,
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
                      (v[3] = (h) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: h,
                          key: "backgroundName",
                        })),
                  },
                  null,
                  40,
                  yp
                ),
              ]),
              e("div", kp, [
                $p,
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
                      (v[4] = (h) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: h,
                          key: "className",
                        })),
                  },
                  null,
                  40,
                  Ep
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Io = V(Ip, [["__scopeId", "data-v-552e0b49"]]),
  nt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAYElEQVQ4y9WTwQmAQAwEtzvtwHIsVfDKUDM+T0FJIqfgvmfIPjbSJ6Gj4KXQV2EikrkKK7gtODBsD4W7Lu2EX1ey6wvthXSllMDAEh+fgYuf5m0AjPEHyuFSEpeS+MvZAZYijOCBAmQvAAAAAElFTkSuQmCC",
  rt = (a) => (w("data-v-92e1679a"), (a = a()), z(), a),
  Sp = { class: "campaign-log-container" },
  _p = rt(() => e("img", { src: nt, alt: "log" }, null, -1)),
  Pp = [_p],
  Mp = rt(() => e("div", { class: "campaign-label" }, " Campaign: ", -1)),
  Dp = { class: "campaign-title" },
  Rp = R({
    __name: "SheetCampaign",
    props: { campaign: {}, campaignLog: {}, disabledSheet: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(a) {
      const b = a,
        h = "https://crisordemparanormal.com/" + "campanha/" + b.campaign.id,
        u = $(window.innerWidth);
      Ee(() => {
        window.addEventListener("resize", () => {
          u.value = window.innerWidth;
        });
      });
      const p = () => {
        b.disabledSheet || window.open(h, "_blank");
      };
      return (l, m) => {
        var i;
        return (
          o(),
          n("div", Sp, [
            u.value >= 1023
              ? (o(),
                n(
                  "button",
                  {
                    key: 0,
                    class: "campaign-log-button",
                    onClick:
                      m[0] || (m[0] = (d) => l.$emit("handleOpenCampaignLog")),
                  },
                  Pp
                ))
              : q("", !0),
            e(
              "a",
              {
                class: J([
                  "campaign-nav-link",
                  { "campaign-nav-link-disabled": l.disabledSheet },
                ]),
                onClick: p,
              },
              [
                Mp,
                e("div", Dp, H((i = l.campaign) == null ? void 0 : i.name), 1),
              ],
              2
            ),
          ])
        );
      };
    },
  }),
  So = V(Rp, [["__scopeId", "data-v-92e1679a"]]),
  Vp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAHUlEQVQ4y2NgGEbgPxTgYw92DaOhNBpKQyeUaAYAFbUe8L2r+g4AAAAASUVORK5CYII=",
  dt = (a) => (w("data-v-b0056160"), (a = a()), z(), a),
  Tp = dt(() =>
    e("img", { class: "apps-img", src: Vp, alt: "fechar" }, null, -1)
  ),
  Op = [Tp],
  wp = dt(() =>
    e("img", { class: "apps-img", src: oe, alt: "fechar" }, null, -1)
  ),
  zp = [wp],
  Hp = { class: "apps-options" },
  jp = ["onClick"],
  Up = R({
    __name: "SheetMobileNav",
    emits: ["handleMobileNav"],
    setup(a) {
      const b = $(!1),
        v = [
          "INFORMATIONS",
          "DESCRIPTION",
          "ATTRIBUTES",
          "SKILLS",
          "COMBAT",
          "INVENTORY",
          "ABILITIES",
          "RITUALS",
        ];
      return (h, u) => (
        o(),
        n(
          j,
          null,
          [
            b.value
              ? (o(),
                n(
                  "button",
                  {
                    key: 1,
                    class: "apps-button button-naked",
                    onClick: u[1] || (u[1] = (p) => (b.value = !b.value)),
                  },
                  zp
                ))
              : (o(),
                n(
                  "button",
                  {
                    key: 0,
                    class: "apps-button button-naked",
                    onClick: u[0] || (u[0] = (p) => (b.value = !b.value)),
                  },
                  Op
                )),
            b.value
              ? (o(),
                n(
                  "div",
                  {
                    key: 2,
                    class: "apps-container",
                    onClick: u[2] || (u[2] = (p) => (b.value = !b.value)),
                  },
                  [
                    e("div", Hp, [
                      (o(),
                      n(
                        j,
                        null,
                        L(v, (p, l) =>
                          e("div", { key: l }, [
                            e(
                              "button",
                              {
                                class: "nav-option-button",
                                onClick: (m) => h.$emit("handleMobileNav", l),
                              },
                              H(p),
                              9,
                              jp
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
  xp = V(Up, [["__scopeId", "data-v-b0056160"]]),
  it = (a) => (w("data-v-f968449f"), (a = a()), z(), a),
  Np = it(() => e("img", { src: nt, alt: "log" }, null, -1)),
  Lp = [Np],
  Bp = it(() => e("img", { src: oe, alt: "close-log" }, null, -1)),
  Fp = [Bp],
  Qp = R({
    __name: "SheetLogButtonMobile",
    props: { campaignLogOpen: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(a) {
      return (b, v) =>
        b.campaignLogOpen
          ? (o(),
            n(
              "button",
              {
                key: 1,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  v[1] || (v[1] = (h) => b.$emit("handleOpenCampaignLog")),
              },
              Fp
            ))
          : (o(),
            n(
              "button",
              {
                key: 0,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  v[0] || (v[0] = (h) => b.$emit("handleOpenCampaignLog")),
              },
              Lp
            ));
    },
  }),
  Gp = V(Qp, [["__scopeId", "data-v-f968449f"]]),
  Xp = { class: "skin-img-container" },
  Wp = ["src", "alt"],
  Kp = { class: "label" },
  Jp = R({
    __name: "SkinOption",
    props: { character: {}, skinDice: {} },
    setup(a) {
      const b = a,
        v = X(() =>
          b.character.skinDice
            ? b.character.skinDice.label === b.skinDice.label
            : !1
        );
      return (h, u) => (
        o(),
        n(
          "div",
          { class: J(["skin-option-container", { "skin-selected": v.value }]) },
          [
            e("div", Xp, [
              e(
                "img",
                {
                  src: h.skinDice.img,
                  alt: h.skinDice.label,
                  class: "skin-img",
                },
                null,
                8,
                Wp
              ),
            ]),
            e("div", Kp, H(h.skinDice.label), 1),
          ],
          2
        )
      );
    },
  }),
  ia = V(Jp, [["__scopeId", "data-v-694b426f"]]),
  Re = (a) => (w("data-v-8e69620b"), (a = a()), z(), a),
  Yp = { class: "modal-content modal-width" },
  Zp = { class: "modal-header" },
  ev = Re(() => e("h2", null, "Skins de Dados", -1)),
  av = Re(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  ov = [av],
  tv = { class: "modal-body modal-height" },
  sv = { class: "skins-container" },
  nv = Re(() => e("div", { class: "skins-title" }, " Colors ", -1)),
  rv = { class: "skins-options" },
  dv = { class: "skins-container" },
  iv = Re(() => e("div", { class: "skins-title" }, " Elements ", -1)),
  lv = { class: "skins-options" },
  uv = { class: "skins-container" },
  cv = Re(() => e("div", { class: "skins-title" }, " Pride ", -1)),
  mv = { class: "skins-options" },
  pv = R({
    __name: "SkinsModal",
    props: { character: {} },
    emits: ["handleChangeDiceSkin", "handleCloseModal"],
    setup(a, { emit: b }) {
      const v = b,
        h = (u) => v("handleChangeDiceSkin", u);
      return (u, p) => (
        o(),
        n("div", Yp, [
          e("div", Zp, [
            ev,
            e(
              "button",
              { onClick: p[0] || (p[0] = (l) => u.$emit("handleCloseModal")) },
              ov
            ),
          ]),
          e("div", tv, [
            e("div", sv, [
              nv,
              e("div", rv, [
                (o(!0),
                n(
                  j,
                  null,
                  L(
                    G(Bo),
                    (l) => (
                      o(),
                      N(
                        ia,
                        {
                          key: l.label,
                          "skin-dice": l,
                          character: u.character,
                          onClick: (m) => h(l),
                        },
                        null,
                        8,
                        ["skin-dice", "character", "onClick"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            e("div", dv, [
              iv,
              e("div", lv, [
                (o(!0),
                n(
                  j,
                  null,
                  L(
                    G(Vs),
                    (l) => (
                      o(),
                      N(
                        ia,
                        {
                          key: l.label,
                          "skin-dice": l,
                          character: u.character,
                          onClick: (m) => h(l),
                        },
                        null,
                        8,
                        ["skin-dice", "character", "onClick"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            e("div", uv, [
              cv,
              e("div", mv, [
                (o(!0),
                n(
                  j,
                  null,
                  L(
                    G(Ts),
                    (l) => (
                      o(),
                      N(
                        ia,
                        {
                          key: l.label,
                          "skin-dice": l,
                          character: u.character,
                          onClick: (m) => h(l),
                        },
                        null,
                        8,
                        ["skin-dice", "character", "onClick"]
                      )
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
  vv = V(pv, [["__scopeId", "data-v-8e69620b"]]),
  hv = (a) => (w("data-v-1d71ccb1"), (a = a()), z(), a),
  gv = { key: 0 },
  fv = { key: 0, class: "private-sheet" },
  bv = hv(() => e("h1", null, "Private sheet", -1)),
  Av = { key: 1 },
  Cv = { key: 0 },
  qv = { class: "sheet-wrapper" },
  yv = { class: "sheet-header" },
  kv = { class: "character-sheet" },
  $v = { class: "sheet-stats" },
  Ev = { class: "sheet-skills" },
  Iv = { class: "sheet-tab" },
  Sv = { key: 1 },
  _v = { key: 0, class: "mobile-container" },
  Pv = { key: 1, class: "mobile-container" },
  Mv = { key: 2, class: "mobile-container" },
  Dv = { key: 3, class: "mobile-container" },
  Rv = { key: 4, class: "mobile-container" },
  Vv = { key: 5, class: "mobile-container" },
  Tv = { key: 6, class: "mobile-container" },
  Ov = { key: 7, class: "mobile-container" },
  wv = { key: 2 },
  zv = { key: 1 },
  Hv = R({
    __name: "CharacterSheet",
    setup(a) {
      const { play: b } = Xt(Jt),
        v = [ol, El, Ul, Wl, Xu, Lo, om, Hm, vm, Mm, vv],
        h = {
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
          skins: 10,
        },
        u = { power: 0, ritual: 1, item: 2, attack: 3 },
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
        l = Po(),
        m = Dt(),
        i = Ut(),
        d = Rt(),
        t = Vt(),
        c = d.params.id,
        A = $(0),
        P = $(!0),
        M = $(),
        f = $(),
        y = $(),
        D = $(),
        B = $(),
        ve = $(),
        s = $(Yt),
        I = $(0),
        k = $(!0),
        O = $(!1),
        he = $(!1),
        E = $(!1),
        Z = $(window.innerWidth),
        se = $(0),
        Ge = $(),
        Ce = $(),
        U = $({ message: "", type: "", alive: !1, timeout: 0 }),
        ge = $({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        Ve = $({
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
        F = $(!1),
        Q = $(0),
        Ie = $(0),
        Aa = $(0),
        Ca = $();
      Ee(async () => {
        var S;
        window.addEventListener("resize", () => {
          Z.value = window.innerWidth;
        });
        const r = await Ze(de(m, "characters", c));
        r.data() || t.push({ name: "not-found" }),
          l.currentUser &&
            (I.value = await Os((S = l.currentUser) == null ? void 0 : S.uid)),
          (s.value = r.data()),
          (s.value.id = r == null ? void 0 : r.id);
        let g = !1;
        if (
          (s.value.campaignDocId === void 0 &&
            ((s.value.campaignDocId = ""), (g = !0)),
          !s.value.currentItemsLimit)
        ) {
          const T = { I: 0, II: 0, III: 0, IV: 0 };
          (s.value.currentItemsLimit = T), (g = !0);
        }
        if (
          (s.value.peTurn || ((s.value.peTurn = Wt[s.value.nex]), (g = !0)),
          s.value.deathMarks === void 0 &&
            ((s.value.deathMarks = [!1, !1, !1]),
            (s.value.madnessMarks = [!1, !1, !1]),
            (s.value.deathMode = !1),
            (s.value.madnessMode = !1),
            (g = !0)),
          s.value.sheetPictureURL ||
            ((s.value.sheetPictureURL = ""),
            (s.value.sheetPictureFullPath = ""),
            (g = !0)),
          s.value.campaignDocId === void 0 &&
            ((s.value.campaignDocId = ""), (g = !0)),
          s.value.statsClass ||
            (s.value.className === "Combatant" ||
            s.value.className === "Specialist" ||
            s.value.className === "Occultist"
              ? (s.value.statsClass = s.value.className)
              : (s.value.statsClass = "Combatant"),
            (g = !0)),
          s.value.description.anotation ||
            ((s.value.description.anotation = ""), (g = !0)),
          s.value.canDMEdit === void 0 && ((s.value.canDMEdit = !0), (g = !0)),
          s.value.canAnyoneEdit === void 0 &&
            ((s.value.canAnyoneEdit = !1), (g = !0)),
          s.value.private === void 0 && ((s.value.private = !1), (g = !0)),
          (s.value.block === void 0 || s.value.block === null) &&
            ((s.value.block = s.value.skills[9].bonus), (g = !0)),
          (s.value.evade === void 0 || s.value.evade === null) &&
            ((s.value.evade =
              10 +
              s.value.attributes.dex +
              s.value.protectionDefense +
              s.value.bonusDefense +
              s.value.skills[20].bonus),
            (g = !0)),
          s.value.resistencias === void 0 &&
            ((s.value.resistencias = {}), (g = !0)),
          s.value.imunidades === void 0 &&
            ((s.value.imunidades = []), (g = !0)),
          s.value.vulnerabilidades === void 0 &&
            ((s.value.vulnerabilidades = []), (g = !0)),
          s.value.skinDice === void 0 && (s.value.skinDice = Bo[0]),
          g && (await ea(de(m, "characters", s.value.id), s.value)),
          s.value.campaignDocId)
        ) {
          const T = await Ze(de(m, "campaigns", s.value.campaignDocId));
          T.data() &&
            ((M.value = T.data()),
            (M.value.id = T.id),
            (Ce.value = aa(
              de(m, "campaignLogs", M.value.campaignLogId),
              (x) => {
                x.data() &&
                  ((f.value = x.data()),
                  (f.value.id = x.id),
                  A.value < 2 && A.value++);
              }
            )));
        }
        Ge.value = aa(de(m, "characters", c), (T) => {
          var x, ne, re, qe;
          T.data() || t.push({ name: "not-found" }),
            (s.value = T.data()),
            (s.value.id = T == null ? void 0 : T.id),
            s.value.canAnyoneEdit ? (k.value = !1) : (k.value = !0),
            s.value.uid !==
              ((x = l == null ? void 0 : l.currentUser) == null
                ? void 0
                : x.uid) && (s.value.private ? (O.value = !0) : (O.value = !1)),
            s.value.campaignDocId &&
              M.value &&
              M.value.uid ===
                ((ne = l == null ? void 0 : l.currentUser) == null
                  ? void 0
                  : ne.uid) &&
              ((O.value = !1),
              s.value.canDMEdit ? (k.value = !1) : (k.value = !0)),
            s.value.uid ===
              ((re = l == null ? void 0 : l.currentUser) == null
                ? void 0
                : re.uid) && ((O.value = !1), (k.value = !1)),
            ((qe = l == null ? void 0 : l.currentUser) != null && qe.uid) ||
              (k.value = !0),
            A.value < 2 && A.value++;
        });
      }),
        Tt(() => {
          Ge.value && Ge.value(), Ce.value && Ce.value();
        }),
        fe(A, () => {
          s.value &&
            P.value !== !1 &&
            (s.value.campaignDocId
              ? A.value >= 2 && (P.value = !1)
              : A.value >= 1 && (P.value = !1));
        }),
        fe(
          () => s.value.campaignDocId,
          async () => {
            if (s.value && !P.value)
              if (s.value.campaignDocId === "")
                (M.value = void 0), (f.value = void 0), Ce.value && Ce.value();
              else {
                const r = await Ze(de(m, "campaigns", s.value.campaignDocId));
                r.data() &&
                  ((M.value = r.data()),
                  (Ce.value = aa(
                    de(m, "campaignLogs", M.value.campaignLogId),
                    (g) => {
                      g.data() && ((f.value = g.data()), (f.value.id = g.id));
                    }
                  )));
              }
          }
        );
      const _ = () => {
          k.value || ea(de(m, "characters", s.value.id), s.value);
        },
        Te = () => {
          (U.value.alive = !1), clearTimeout(U.value.timeout);
        },
        le = () => (ge.value.alive = !1),
        ue = () => (Ve.value.alive = !1),
        Xe = (r, g) => {
          le(),
            ue(),
            (r.message = `${h} added`),
            (r.type = "info"),
            (r.alive = !0);
        },
        Oe = (r) => {
          le(),
            ue(),
            (r.message = "Incorrect value on dice"),
            (r.type = "error"),
            (r.alive = !0);
        },
        We = (r, g, S, T, x) => {
          Te(),
            ue(),
            (r.title = g),
            (r.total = S),
            (r.output = T),
            (r.notation = x),
            (r.skinDice = s.value.skinDice),
            ho(r, "roll"),
            go(r, "roll"),
            E.value || (r.alive = !0);
        },
        lt = (r, g, S, T, x, ne, re, qe, _t, Pt) => {
          Te(),
            le(),
            (r.title = g),
            (r.totalAttack = S),
            (r.totalDamage = T),
            (r.critical = x),
            (r.attackTooltip = ne),
            (r.damageTooltip = re),
            (r.attackRollTooltip = qe),
            (r.damageRollTooltip = _t),
            (r.criticalTooltip = Pt),
            (r.skinDice = s.value.skinDice),
            ho(r, "attackRoll"),
            go(r, "attackRoll"),
            E.value || (r.alive = !0);
        },
        qa = (r) => {
          const g = r.e.target.value;
          (s.value[r.key] = g.trim()), _();
        },
        ya = (r) => {
          const g = r.e.target.value;
          (s.value[r.key] = g.trim()), _();
        },
        ka = (r) => {
          const g = r.e.target.valueAsNumber;
          Co(s.value, g, r.key), _();
        },
        $a = (r, g) => {
          Co(s.value, r, g), _();
        },
        Ea = (r) => {
          const g = r.e.target.valueAsNumber;
          Zt(s.value, g, r.key), _();
        },
        Ia = (r) => {
          const g = s.value.nex;
          (s.value[r.key] = r.value), es(s.value, g), _();
        },
        Sa = (r) => {
          const g = r.target.valueAsNumber;
          as(s.value, g), _();
        },
        _a = (r) => {
          try {
            const g = os[r],
              S = ts(s.value, r),
              T = sa(S.output),
              x = na(S.output);
            We(ge.value, g, S.total, T, x), b();
          } catch {
            Oe(U.value);
          }
        },
        Pa = (r, g) => {
          r === "pv" && (s.value.deathMarks[g] = !s.value.deathMarks[g]),
            r === "san" && (s.value.madnessMarks[g] = !s.value.madnessMarks[g]),
            _();
        },
        Ma = (r) => {
          r === "pv" && (s.value.deathMode = !0),
            r === "san" && (s.value.madnessMode = !0),
            _();
        },
        Da = (r) => {
          r === "pv" &&
            ((s.value.deathMarks = [!1, !1, !1]),
            (s.value.deathMode = !1),
            s.value.currentPv === 0 && (s.value.currentPv = 1)),
            r === "san" &&
              ((s.value.madnessMarks = [!1, !1, !1]),
              (s.value.madnessMode = !1),
              s.value.currentSan === 0 && (s.value.currentSan = 1)),
            _();
        },
        Ra = () => {
          (Q.value = h.addClass), (F.value = !0);
        },
        Va = (r) => {
          (Ca.value = r), (Q.value = h.skill), (F.value = !0);
        },
        Ta = () => {
          (Q.value = h.config), (F.value = !0);
        },
        ut = () => {
          (Q.value = h.share), (F.value = !0);
        },
        Oa = (r) => {
          const g = s.value.skills.findIndex((S) => S.name === r.skillName);
          (s.value.skills[g][r.key] = r.value), qo(s.value, r.skillName), _();
        },
        wa = (r) => {
          ss(s.value, r.value, r.skillName), qo(s.value, r.skillName), _();
        },
        za = (r) => {
          try {
            const g = r.name,
              S = ns(s.value, r),
              T = sa(S.output),
              x = na(S.output);
            We(ge.value, g, S.total, T, x), b();
          } catch {
            Oe(U.value);
          }
        },
        Ha = () => {
          (Q.value = h.abilities), (F.value = !0);
        },
        ja = () => {
          (Q.value = h.skins), (F.value = !0);
        },
        Ua = () => {
          (Q.value = h.rituals), (F.value = !0);
        },
        xa = () => {
          (Q.value = h.inventory), (F.value = !0);
        },
        Na = () => {
          (Q.value = h.picture), (F.value = !0);
        },
        ct = (r) => {
          (r.id = je()), s.value.attacks.push(r), _(), ae();
        },
        La = (r) => {
          rs(s.value, r), _();
        },
        Ke = (r) => {
          const g = s.value.powers.findIndex((S) => S.id === r);
          g !== -1 && (s.value.powers.splice(g, 1), _());
        },
        Ba = (r) => {
          const g = s.value.rituals.findIndex((S) => S.id === r);
          s.value.rituals.splice(g, 1), _();
        },
        Fa = (r) => {
          ds(s.value, r), _();
        },
        Qa = (r) => {
          is(s.value, r), _();
        },
        Ga = (r) => {
          (s.value.description[r.key] = r.value), _();
        },
        Xa = (r) => {
          (s.value[r.key] = r.value), _();
        },
        Wa = (r) => {
          ls(s.value, r.value, r.key), _();
        },
        Ka = (r) => {
          us(s.value, r.value, r.key), _();
        },
        Je = (r = "1d20", g = "Result", S = !1) => {
          try {
            const T = g,
              x = cs(r || "1d20"),
              ne = sa(x.output),
              re = na(x.output);
            (ge.value.defaultColor = S), We(ge.value, T, x.total, ne, re), b();
          } catch {
            Oe(U.value);
          }
        },
        Ja = (r) => {
          try {
            const g = ms(s.value, r);
            lt(
              Ve.value,
              r.name,
              g.attackTotal,
              g.damageTotal,
              g.critical,
              g.attackInfo,
              g.damageInfo,
              g.attackRollInfo,
              g.damageRollInfo,
              g.criticalInfo
            ),
              b();
          } catch {
            Oe(U.value);
          }
        },
        Ya = (r, g) => {
          g && Je(g, r, !0);
        },
        Za = (r) => {
          const g = r.target.valueAsNumber;
          ps(s.value, g), _();
        },
        mt = (r) => {
          gs(s.value, r),
            Xe(U.value, r.name),
            _(),
            Q.value === h.addModal && ae();
        },
        pt = (r) => {
          fs(s.value, r),
            Xe(U.value, r.name),
            _(),
            Q.value === h.addModal && ae();
        },
        vt = (r) => {
          bs(s.value, r),
            Xe(U.value, r.name),
            _(),
            Q.value === h.addModal && ae();
        },
        ht = (r, g) => {
          (s.value.sheetPictureURL = r),
            (s.value.sheetPictureFullPath = g),
            _(),
            ae();
        },
        gt = (r, g, S) => {
          r === "hurt" &&
            ((s.value.sheetPictureHurtURL = g),
            (s.value.sheetPictureHurtFullPathL = S),
            _()),
            r === "dying" &&
              ((s.value.sheetPictureDyingURL = g),
              (s.value.sheetPictureDyingFullPathL = S),
              _()),
            r === "disturbed" &&
              ((s.value.sheetPictureDisturbedURL = g),
              (s.value.sheetPictureDisturbedFullPathL = S),
              _()),
            r === "crazy" &&
              ((s.value.sheetPictureCrazyURL = g),
              (s.value.sheetPictureCrazyFullPathL = S),
              _());
        },
        ft = (r) => {
          const g = r.target.value;
          (s.value.resultDiceColor = g), _();
        },
        bt = (r) => {
          const g = r.target.value;
          (s.value.resultDiceBorderColor = g), _();
        },
        At = (r, g) => {
          (s.value[r] = g), _();
        },
        Ct = (r) => {
          (s.value.skinDice = r), _();
        },
        qt = (r) => {
          (s.value.statsClass = r), _();
        },
        ce = (r) => {
          (Q.value = h.addModal), (Aa.value = r), (F.value = !0);
        },
        eo = () => ce(p.attack),
        ao = () => ce(p.power),
        oo = () => ce(p.ritual),
        to = () => ce(p.weapon),
        so = () => ce(p.ammunition),
        no = () => ce(p.protection),
        ro = () => ce(p.misc),
        io = () => ce(p.cursedItem),
        lo = (r) => {
          (Q.value = h.edit),
            (Ie.value = u.attack),
            (F.value = !0),
            (y.value = r);
        },
        uo = (r) => {
          (Q.value = h.edit),
            (Ie.value = u.power),
            (F.value = !0),
            (D.value = r);
        },
        co = (r) => {
          (Q.value = h.edit),
            (Ie.value = u.ritual),
            (F.value = !0),
            (B.value = r);
        },
        mo = (r) => {
          (Q.value = h.edit),
            (Ie.value = u.item),
            (F.value = !0),
            (ve.value = r);
        },
        yt = (r) => {
          const g = s.value.attacks.findIndex((S) => S.id === r.id);
          (s.value.attacks[g] = r), _(), ae();
        },
        kt = (r) => {
          const g = s.value.powers.findIndex((S) => S.id === r.id);
          (s.value.powers[g] = r), _(), ae();
        },
        $t = (r) => {
          const g = s.value.rituals.findIndex((S) => S.id === r.id);
          (s.value.rituals[g] = r), _(), ae();
        },
        Et = (r) => {
          As(s.value, r), _(), ae();
        },
        It = (r) => {
          Cs(s.value, r),
            s.value.mundanoRemoveSkill && Ke(s.value.mundanoRemoveSkill),
            _(),
            ae();
        },
        ae = () => (F.value = !1),
        po = async () => {
          await navigator.clipboard.writeText(
            "https://crisordemparanormal.com/agente/" + s.value.id
          ),
            le(),
            ue(),
            (U.value.message = "Link copied"),
            (U.value.type = "info"),
            (U.value.alive = !0);
        },
        vo = async () => {
          var g, S;
          if (!((g = l.currentUser) != null && g.email) || he.value) return;
          if (I.value < 3) {
            const T = bo(m, "characters"),
              x = Ot(
                T,
                wt("uid", "==", (S = l.currentUser) == null ? void 0 : S.uid)
              );
            if ((await zt(x)).size >= ws) {
              le(),
                ue(),
                (U.value.message = "Agent limit reached!"),
                (U.value.type = "error"),
                (U.value.alive = !0);
              return;
            }
          }
          he.value = !0;
          const r = He.cloneDeep(s.value);
          if (
            ((r.uid = l.currentUser.uid),
            (r.timestamp = Ht()),
            (r.campaignDocId = ""),
            (r.id = ""),
            s.value.sheetPictureURL !== "")
          ) {
            const T = Ao(i, `images/${je()}`),
              x = Ao(i, s.value.sheetPictureFullPath),
              ne = await xt(x);
            Nt(T, ne).then(async (re) => {
              const qe = await Lt(re.ref);
              (r.sheetPictureURL = qe),
                (r.sheetPictureFullPath = re.metadata.fullPath);
            });
          }
          await jt(bo(m, "characters"), r),
            le(),
            ue(),
            (U.value.message = "Agent addded!"),
            (U.value.type = "info"),
            (U.value.alive = !0);
        },
        ho = (r, g) => {
          const S = [];
          if (g === "roll") {
            const T = r.total;
            S.push(T);
          }
          if (g === "attackRoll") {
            const T = r.totalAttack,
              x = r.totalDamage;
            S.push(T), S.push(x);
          }
          (s.value.lastDiceResult = S), (s.value.didDiceRoll = je()), _();
        },
        go = (r, g) => {
          if (!M.value || !f.value) return;
          const S = {
            sender: s.value.name,
            timestamp: new Date().getTime(),
            content: r,
            contentType: g,
          };
          f.value.campaignLogMessages.push(S),
            f.value.campaignLogMessages.length > 200 &&
              f.value.campaignLogMessages.shift(),
            ea(de(m, "campaignLogs", f.value.id), f.value);
        },
        Ye = () => {
          Te(), le(), ue(), (E.value = !E.value);
        };
      fe(
        () => s.value.skills[9].bonus,
        (r, g) => {
          if (s.value.block === null) return;
          const S = Math.abs(r - g);
          r > g ? (s.value.block += S) : (s.value.block -= S),
            s.value.block < 0 && (s.value.block = 0),
            s.value.block > 999 && (s.value.block = 999),
            _();
        }
      );
      const St = X(() => {
        const r =
          10 +
          s.value.attributes.dex +
          s.value.protectionDefense +
          s.value.bonusDefense;
        return r > 0 ? r : 0;
      });
      return (
        fe(
          () => s.value.skills[20].bonus,
          (r, g) => {
            if (s.value.evade === null) return;
            const S = Math.abs(r - g);
            r > g ? (s.value.evade += S) : (s.value.evade -= S),
              s.value.evade < 0 && (s.value.evade = 0),
              s.value.evade > 999 && (s.value.evade = 999),
              _();
          }
        ),
        fe(St, (r, g) => {
          if (s.value.evade === null) return;
          const S = Math.abs(r - g);
          r > g ? (s.value.evade += S) : (s.value.evade -= S),
            s.value.evade < 0 && (s.value.evade = 0),
            s.value.evade > 999 && (s.value.evade = 999),
            _();
        }),
        fe(
          () => U.value.alive,
          () => {
            U.value.alive === !0 &&
              (U.value.timeout = window.setTimeout(
                () => (U.value.alive = !1),
                3e3
              ));
          }
        ),
        fe(k, () => {
          ae();
        }),
        (r, g) => {
          const S = ca("vue-final-modal");
          return (
            o(),
            n("div", null, [
              P.value
                ? (o(), n("div", zv, [C(Rs, { "page-loading": "" })]))
                : (o(),
                  n("div", gv, [
                    O.value
                      ? (o(),
                        n("div", fv, [
                          bv,
                          e(
                            "button",
                            {
                              class: "button-primary",
                              onClick:
                                g[0] || (g[0] = (T) => r.$router.push("/")),
                            },
                            " Voltar "
                          ),
                        ]))
                      : (o(),
                        n("div", Av, [
                          Z.value >= 1023
                            ? (o(),
                              n("div", Cv, [
                                e("div", qv, [
                                  e("div", yv, [
                                    C(
                                      Io,
                                      {
                                        character: s.value,
                                        "disabled-sheet": k.value,
                                        onHandleChangeCharHeaderText: qa,
                                        onHandleOpenChangePictureModal: Na,
                                      },
                                      null,
                                      8,
                                      ["character", "disabled-sheet"]
                                    ),
                                    M.value
                                      ? (o(),
                                        N(
                                          So,
                                          {
                                            key: 0,
                                            "disabled-sheet": k.value,
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
                                    C(
                                      Eo,
                                      {
                                        character: s.value,
                                        "disabled-sheet": k.value,
                                        "char-added": he.value,
                                        onHandleShareSheet: po,
                                        onHandleAddAgent: vo,
                                        onHandleOpenConfig: Ta,
                                        onHandleOpenSkinsModal: ja,
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
                                  e("div", kv, [
                                    e("div", $v, [
                                      C(
                                        ko,
                                        {
                                          character: s.value,
                                          "disabled-sheet": k.value,
                                          onHandleChangeCharText: ya,
                                          onHandleChangeCharNumber: ka,
                                          onHandleChangeCharNumberButton: $a,
                                          onHandleChangeAttribute: Ea,
                                          onHandleChangeCharDropdown: Ia,
                                          onHandleChangeMovementInSquares: Sa,
                                          onHandleRollAttribute: _a,
                                          onHandleChangeCharMark: Pa,
                                          onHandleChangeMarkModeToTrue: Ma,
                                          onHandleMarkHeal: Da,
                                          onHandleOpenModalAddClass: Ra,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                    e("div", Ev, [
                                      C(
                                        $o,
                                        {
                                          character: s.value,
                                          "disabled-sheet": k.value,
                                          onHandleOpenSkillModal: Va,
                                          onHandleChangeSkillDropdown: Oa,
                                          onHandleChangeSkillOtherBonus: wa,
                                          onHandleRollSkill: za,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                    e("div", Iv, [
                                      C(
                                        ki,
                                        {
                                          character: s.value,
                                          "disabled-sheet": k.value,
                                          onHandleOpenAbilitiesModal: Ha,
                                          onHandleOpenRitualsModal: Ua,
                                          onHandleOpenItemsModal: xa,
                                          onHandleOpenAddAttack: eo,
                                          onHandleOpenAddPower: ao,
                                          onHandleOpenAddRitual: oo,
                                          onHandleOpenAddWeapon: to,
                                          onHandleOpenAddAmmunition: so,
                                          onHandleOpenAddProtection: no,
                                          onHandleOpenAddMisc: ro,
                                          onHandleOpenAddCursedItem: io,
                                          onHandleRemoveAttack: La,
                                          onHandleEditAttack: lo,
                                          onHandleRemovePower: Ke,
                                          onHandleEditPower: uo,
                                          onHandleEditRitual: co,
                                          onHandleEditItem: mo,
                                          onHandleRemoveRitual: Ba,
                                          onHandleRemoveItem: Fa,
                                          onHandleEquipItem: Qa,
                                          onHandleChangeDescription: Ga,
                                          onHandleChangeInventoryDropdown: Xa,
                                          onHandleChangeInventoryNumber: Wa,
                                          onHandleChangeItemsLimit: Ka,
                                          onHandleRollDices: Je,
                                          onHandleRollAttack: Ja,
                                          onHandleChangeRitualDc: Za,
                                          onHandleRollRitual: Ya,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]))
                            : (o(),
                              n("div", Sv, [
                                e("div", null, [
                                  C(xp, {
                                    onHandleMobileNav:
                                      g[1] || (g[1] = (T) => (se.value = T)),
                                  }),
                                  se.value === 0
                                    ? (o(),
                                      n("div", _v, [
                                        C(
                                          Eo,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            "char-added": he.value,
                                            onHandleShareSheet: po,
                                            onHandleAddAgent: vo,
                                            onHandleOpenConfig: Ta,
                                            onHandleOpenShareModal: ut,
                                            onHandleOpenSkinsModal: ja,
                                          },
                                          null,
                                          8,
                                          [
                                            "character",
                                            "disabled-sheet",
                                            "char-added",
                                          ]
                                        ),
                                        C(
                                          Io,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeCharHeaderText: qa,
                                            onHandleOpenChangePictureModal: Na,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                        M.value
                                          ? (o(),
                                            N(
                                              So,
                                              {
                                                key: 0,
                                                "disabled-sheet": k.value,
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
                                    ? (o(),
                                      n("div", Pv, [
                                        C(
                                          Ko,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeDescription: Ga,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 2
                                    ? (o(),
                                      n("div", Mv, [
                                        C(
                                          ko,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeCharText: ya,
                                            onHandleChangeCharNumber: ka,
                                            onHandleChangeCharNumberButton: $a,
                                            onHandleChangeAttribute: Ea,
                                            onHandleChangeCharDropdown: Ia,
                                            onHandleChangeMovementInSquares: Sa,
                                            onHandleRollAttribute: _a,
                                            onHandleChangeCharMark: Pa,
                                            onHandleChangeMarkModeToTrue: Ma,
                                            onHandleMarkHeal: Da,
                                            onHandleOpenModalAddClass: Ra,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 3
                                    ? (o(),
                                      n("div", Dv, [
                                        C(
                                          $o,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            onHandleOpenSkillModal: Va,
                                            onHandleChangeSkillDropdown: Oa,
                                            onHandleChangeSkillOtherBonus: wa,
                                            onHandleRollSkill: za,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 4
                                    ? (o(),
                                      n("div", Rv, [
                                        C(
                                          Fo,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            onHandleOpenAddAttack: eo,
                                            onHandleEditAttack: lo,
                                            onHandleRemoveAttack: La,
                                            onHandleRollAttack: Ja,
                                            onHandleRollDices: Je,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 5
                                    ? (o(),
                                      n("div", Vv, [
                                        C(
                                          Wo,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeInventoryDropdown: Xa,
                                            onHandleChangeInventoryNumber: Wa,
                                            onHandleChangeItemsLimit: Ka,
                                            onHandleEditItem: mo,
                                            onHandleEquipItem: Qa,
                                            onHandleOpenItemsModal: xa,
                                            onHandleRemoveItem: Fa,
                                            onHandleOpenAddWeapon: to,
                                            onHandleOpenAddAmmunition: so,
                                            onHandleOpenAddProtection: no,
                                            onHandleOpenAddMisc: ro,
                                            onHandleOpenAddCursedItem: io,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  se.value === 6
                                    ? (o(),
                                      n("div", Tv, [
                                        se.value === 6
                                          ? (o(),
                                            N(
                                              Go,
                                              {
                                                key: 0,
                                                character: s.value,
                                                "disabled-sheet": k.value,
                                                onHandleEditPower: uo,
                                                onHandleOpenAddPower: ao,
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
                                    ? (o(),
                                      n("div", Ov, [
                                        C(
                                          Xo,
                                          {
                                            character: s.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeRitualDc: Za,
                                            onHandleEditRitual: co,
                                            onHandleOpenRitualsModal: Ua,
                                            onHandleOpenAddRitual: oo,
                                            onHandleRemoveRitual: Ba,
                                            onHandleRollRitual: Ya,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  M.value
                                    ? (o(),
                                      N(
                                        Gp,
                                        {
                                          key: 8,
                                          "campaign-log-open": E.value,
                                          onHandleOpenCampaignLog: Ye,
                                        },
                                        null,
                                        8,
                                        ["campaign-log-open"]
                                      ))
                                    : q("", !0),
                                ]),
                              ])),
                          F.value
                            ? (o(),
                              n("div", wv, [
                                C(
                                  S,
                                  {
                                    modelValue: F.value,
                                    "onUpdate:modelValue":
                                      g[2] || (g[2] = (T) => (F.value = T)),
                                    classes: "modal-container",
                                  },
                                  {
                                    default: ke(() => [
                                      (o(),
                                      N(
                                        Pe(v[Q.value]),
                                        {
                                          "current-edit-option": Ie.value,
                                          "current-add-option": Aa.value,
                                          character: s.value,
                                          skill: Ca.value,
                                          "edit-power": D.value,
                                          "edit-ritual": B.value,
                                          "edit-item": ve.value,
                                          "edit-attack": y.value,
                                          onHandleEditAttackSheet: yt,
                                          onHandleEditPowerSheet: kt,
                                          onHandleEditRitualSheet: $t,
                                          onHandleEditItemSheet: Et,
                                          onHandleAddAttack: ct,
                                          onHandleAddPower: mt,
                                          onHandleAddRitual: pt,
                                          onHandleAddItem: vt,
                                          onHandleCloseModal: ae,
                                          onHandleUpdatePicture: ht,
                                          onHandleChangeStatsClass: qt,
                                          onHandleUpdateAlternativePicture: gt,
                                          onHandleChangeCharResultDiceColor: ft,
                                          onHandleChangeCharResultDiceBorderColor:
                                            bt,
                                          onHandleChangeEditPermissions: At,
                                          onHandleAddClass: It,
                                          onHandleChangeDiceSkin: Ct,
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
                          C(
                            oa,
                            { name: "toast" },
                            {
                              default: ke(() => [
                                U.value.alive
                                  ? (o(),
                                    N(
                                      Bt,
                                      { key: 0, toast: U.value, onDismiss: Te },
                                      null,
                                      8,
                                      ["toast"]
                                    ))
                                  : q("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                          C(
                            oa,
                            { name: "toast" },
                            {
                              default: ke(() => [
                                ge.value.alive
                                  ? (o(),
                                    N(
                                      vs,
                                      {
                                        key: 0,
                                        toast: ge.value,
                                        onDismiss: le,
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
                          C(
                            oa,
                            { name: "toast" },
                            {
                              default: ke(() => [
                                Ve.value.alive
                                  ? (o(),
                                    N(
                                      hs,
                                      {
                                        key: 0,
                                        toast: Ve.value,
                                        onDismiss: ue,
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
                          E.value
                            ? (o(),
                              N(
                                Kt,
                                {
                                  key: 3,
                                  "campaign-log": f.value,
                                  onHandleCloseCampaignLog:
                                    g[3] || (g[3] = () => (E.value = !1)),
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
  ph = V(Hv, [["__scopeId", "data-v-1d71ccb1"]]);
export { ph as default };

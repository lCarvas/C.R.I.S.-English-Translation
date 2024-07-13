import {
  d as T,
  Q as Ne,
  r as $,
  a0 as Mo,
  o as s,
  c as r,
  a as e,
  t as w,
  a1 as Y,
  L,
  n as U,
  q as B,
  _ as V,
  f as X,
  v as x,
  m as q,
  k as C,
  p as H,
  b as j,
  a3 as xe,
  H as me,
  h as J,
  C as be,
  D as Ae,
  E as Rt,
  e as Ee,
  a5 as _e,
  a2 as Be,
  J as te,
  i as ma,
  x as ke,
  j as bo,
  g as _o,
  M as Tt,
  S as Vt,
  u as Ot,
  A as ea,
  P as de,
  N as aa,
  Z as oa,
  $ as wt,
  w as fe,
  T as ta,
  R as Ao,
  F as zt,
  B as Ht,
  l as jt,
  y as Ut,
  z as Nt,
} from "./index-sgISCpYv.js";
import {
  g as xt,
  r as Co,
  b as Bt,
  u as Lt,
  a as Ft,
} from "./index.esm2017-x1dhUp5d.js";
import { T as Qt } from "./ToastNotification-RIbSpF9b.js";
import {
  n as la,
  I as ze,
  g as Gt,
  A as Xt,
  F as Le,
  a as Wt,
  u as Kt,
  p as Jt,
  C as Yt,
  d as Zt,
  h as es,
  i as qo,
  j as as,
  k as os,
  l as ts,
  m as ss,
  o as ns,
  f as sa,
  e as na,
  q as yo,
  s as rs,
  t as ds,
  v as is,
  w as ls,
  x as us,
  y as cs,
  z as ms,
  c as ps,
  r as vs,
  B as hs,
  T as gs,
  b as fs,
  E as bs,
  G as As,
  H as Cs,
  J as qs,
  K as ys,
} from "./ToastAttack-UfRjEh-0.js";
import { _ as Do } from "./d20-icon-vaz1En3o.js";
import { T as pe } from "./TabNav-J-G_CLvo.js";
import { P as Fe } from "./PowerCard-5ucuwjr1.js";
import { R as Ro } from "./RitualCard-Mdj2ju1t.js";
import {
  W as To,
  P as Vo,
  M as Oo,
  C as wo,
} from "./CursedItemCard-FWdRiU-r.js";
import { c as Pe } from "./attributes-pd1IMHTT.js";
import { S as $e } from "./SearchInput-6iu8S-fG.js";
import { b as ks, c as $s } from "./ClassCard-X4m-3aG6.js";
import {
  H as Es,
  b as Ss,
  a as Is,
  A as zo,
  R as Ho,
  W as jo,
  P as Uo,
  M as ua,
  c as No,
} from "./HomebrewItems-3lQ9yI6z.js";
import {
  d as Me,
  p as xo,
  r as Bo,
  w as Ps,
  e as Ms,
  f as _s,
  m as Ds,
  g as Rs,
} from "./default-dSfWXGfL.js";
import { b as Ts } from "./forms-8DDAOOVU.js";
import { _ as je, l as ko } from "./lodash-gzw5KmHd.js";
import { D as ye } from "./DropdownSimple-nUwB4ryP.js";
import { v as Ue } from "./v4-cyCr5FZV.js";
import { S as ra } from "./SwitchButtonBool-9_VU2YCl.js";
import { _ as De } from "./blank-profile-picture-wMh28flS.js";
import { P as Lo } from "./PictureModal-CldhdeXT.js";
import { L as Vs } from "./LoadingView-CeRplIIf.js";
import { s as Fo, e as Os, o as ws } from "./skins-DFWuoMc3.js";
import { g as zs, C as Hs } from "./firebase-y1XG5P2D.js";
import "./edit-icon-u1vf_q3w.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./show-more-icon-VvUXKiHG.js";
import "./add-icon-fJ4uQHUZ.js";
const js = "/assets/ordem-paranormal-toggle-dP8B_BsS.webp",
  Us = "/assets/sobrevivendo-ao-horror-toggle-ZstI-LrC.webp",
  Ns = "/assets/shield-icon-FCvc8PM4.png",
  xs = { class: "sheet-subtitle" },
  Bs = { class: "dropdown-button-container" },
  Ls = ["onClick"],
  Fs = T({
    __name: "SheetDropdown",
    props: {
      title: { type: String, required: !0 },
      buttonWidth: { type: String, default: "3.25rem" },
      value: { type: String, required: !0 },
      options: { type: Array, required: !0 },
      bold: Boolean,
      disabled: Boolean,
      mobileView: Boolean,
      isSobrevivendoAoHorror: Boolean,
    },
    emits: ["updateValue"],
    setup(a, { emit: b }) {
      Ne((i) => ({ "2d3dd721": a.buttonWidth }));
      const h = a,
        v = b,
        c = $(null),
        p = $(!1);
      Mo(c, () => (p.value = !1));
      const u = () => {
          h.disabled || (p.value = !p.value);
        },
        m = (i) => {
          (p.value = !1), v("updateValue", i);
        };
      return (i, n) => (
        s(),
        r(
          "div",
          {
            ref_key: "dropdown",
            ref: c,
            class: Y([
              a.mobileView ? "dropdown-container-mobile" : "dropdown-container",
            ]),
          },
          [
            e("h4", xs, w(a.title), 1),
            e("div", Bs, [
              e(
                "button",
                {
                  class: Y([
                    "dropdown-button",
                    { bold: a.bold, disabled: a.disabled },
                  ]),
                  onClick: u,
                },
                w(a.isSobrevivendoAoHorror ? L(la)[a.value] : a.value),
                3
              ),
              e(
                "div",
                {
                  class: Y([
                    "dropdown-content",
                    { "dropdown-content-active": p.value },
                  ]),
                },
                [
                  (s(!0),
                  r(
                    U,
                    null,
                    B(
                      a.options,
                      (o, l) => (
                        s(),
                        r("div", { key: l }, [
                          e(
                            "button",
                            {
                              class: Y([
                                "dropdown-content-button",
                                { bold: a.bold },
                              ]),
                              onClick: (A) => m(o),
                            },
                            w(a.isSobrevivendoAoHorror ? L(la)[o] : o),
                            11,
                            Ls
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
  ca = V(Fs, [["__scopeId", "data-v-c7dc5afd"]]),
  W = (a) => (H("data-v-829b3fda"), (a = a()), j(), a),
  Qs = { class: "info-view" },
  Gs = W(() =>
    e(
      "img",
      {
        class: "toggle-button-img",
        src: js,
        alt: "Alterar versão da ficha",
        rel: "preload",
      },
      null,
      -1
    )
  ),
  Xs = [Gs],
  Ws = W(() =>
    e(
      "img",
      {
        class: "toggle-button-img",
        src: Us,
        alt: "Alterar versão da ficha",
        rel: "preload",
      },
      null,
      -1
    )
  ),
  Ks = [Ws],
  Js = { class: "info-row1" },
  Ys = { class: "nex-container" },
  Zs = { key: 1, class: "mundano-nex-container" },
  en = { class: "sheet-subtitle" },
  an = { key: 2, class: "pe-container" },
  on = { class: "pe" },
  tn = ["disabled", "value"],
  sn = W(() => e("h4", { class: "alt-nex" }, " EXP ", -1)),
  nn = { class: "pe-container" },
  rn = { class: "pe" },
  dn = ["disabled", "value"],
  ln = { class: "desl-container" },
  un = { class: "desl-input-container" },
  cn = ["disabled", "value"],
  mn = W(() => e("h4", null, "m /", -1)),
  pn = ["disabled", "value"],
  vn = W(() => e("h4", null, "sq", -1)),
  hn = W(() => e("h3", null, "SPEED", -1)),
  gn = { class: "info-bar-wrapper" },
  fn = { class: "info-row" },
  bn = { class: "defense-container" },
  An = { class: "defense-img-container" },
  Cn = W(() =>
    e("img", { class: "defense-img", src: Ns, alt: "defense" }, null, -1)
  ),
  qn = { class: "defense-value" },
  yn = { class: "defense-content" },
  kn = W(() =>
    e(
      "div",
      { class: "defense-text" },
      [e("h3", null, "DEFENSE"), e("h4", null, "= 10 + AGI + ")],
      -1
    )
  ),
  $n = { class: "defense-input" },
  En = ["disabled", "value"],
  Sn = W(() => e("h5", null, "Equip.", -1)),
  In = W(() => e("h4", { class: "defense-plus" }, " + ", -1)),
  Pn = { class: "defense-input" },
  Mn = ["disabled", "value"],
  _n = W(() => e("h5", null, "Outros.", -1)),
  Dn = { class: "other-defenses-container" },
  Rn = { class: "other-defense-div" },
  Tn = W(() => e("div", { class: "other-defense-label" }, " BLOCK DR ", -1)),
  Vn = ["disabled", "value"],
  On = { class: "other-defense-div" },
  wn = W(() => e("div", { class: "other-defense-label" }, " DODGE ", -1)),
  zn = ["disabled", "value"],
  Hn = { class: "info-line" },
  jn = W(() => e("h3", null, "ARMOR", -1)),
  Un = ["disabled", "value"],
  Nn = { class: "info-line" },
  xn = W(() => e("h3", null, "RESISTENCES", -1)),
  Bn = ["disabled", "value"],
  Ln = { class: "info-line" },
  Fn = W(() => e("h3", null, "PROFICIENCIES", -1)),
  Qn = ["disabled", "value"],
  Gn = T({
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
      "handleChangeSobrevivendoAoHorror",
    ],
    setup(a, { emit: b }) {
      const h = a,
        v = b,
        c = xe(),
        p = X(() =>
          h.character.movement === 0 ? 0 : h.character.movement / 1.5
        ),
        u = X(() => {
          const n =
            10 +
            h.character.attributes.dex +
            h.character.protectionDefense +
            h.character.bonusDefense;
          return n > 0 ? n : 0;
        }),
        m = (n, o) => {
          var l;
          v("handleChangeCharNumber", { e: n, key: o }),
            (l = c == null ? void 0 : c.proxy) == null || l.$forceUpdate();
        },
        i = (n) => {
          var o;
          v("handleChangeMovementInSquares", n),
            (o = c == null ? void 0 : c.proxy) == null || o.$forceUpdate();
        };
      return (n, o) => (
        s(),
        r("div", Qs, [
          n.character.isSobrevivendoAoHorror
            ? (s(),
              r(
                "div",
                {
                  key: 1,
                  class: "toggle-button-container",
                  onClick:
                    o[1] ||
                    (o[1] = (l) => v("handleChangeSobrevivendoAoHorror")),
                },
                Ks
              ))
            : (s(),
              r(
                "div",
                {
                  key: 0,
                  class: "toggle-button-container",
                  onClick:
                    o[0] ||
                    (o[0] = (l) => v("handleChangeSobrevivendoAoHorror")),
                },
                Xs
              )),
          e("div", Js, [
            e("div", Ys, [
              n.character.statsClass !== "Mundane"
                ? (s(),
                  x(
                    ca,
                    {
                      key: 0,
                      title: n.character.isSobrevivendoAoHorror
                        ? "LEVEL"
                        : "PEX",
                      disabled: n.disabledSheet,
                      value: n.character.nex,
                      options: L(Gt),
                      "is-sobrevivendo-ao-horror":
                        n.character.isSobrevivendoAoHorror,
                      bold: "",
                      onUpdateValue:
                        o[2] ||
                        (o[2] = (l) =>
                          n.$emit("handleChangeCharDropdown", {
                            value: l,
                            key: "nex",
                          })),
                    },
                    null,
                    8,
                    [
                      "title",
                      "disabled",
                      "value",
                      "options",
                      "is-sobrevivendo-ao-horror",
                    ]
                  ))
                : (s(),
                  r("div", Zs, [
                    e(
                      "h4",
                      en,
                      w(n.character.isSobrevivendoAoHorror ? "LEVEL" : "PEX"),
                      1
                    ),
                    e(
                      "button",
                      {
                        class: "mundano-nex-button",
                        onClick:
                          o[3] ||
                          (o[3] = (l) => n.$emit("handleOpenModalAddClass")),
                      },
                      w(n.character.isSobrevivendoAoHorror ? "0" : "0%"),
                      1
                    ),
                  ])),
              n.character.isSobrevivendoAoHorror
                ? (s(),
                  r("div", an, [
                    e("div", on, [
                      e(
                        "input",
                        {
                          class: "sheet-input pe-input",
                          type: "text",
                          disabled: n.disabledSheet,
                          value: n.character.nexString,
                          onBlur:
                            o[4] ||
                            (o[4] = (l) =>
                              n.$emit("handleChangeCharText", {
                                e: l,
                                key: "nexString",
                              })),
                        },
                        null,
                        40,
                        tn
                      ),
                    ]),
                    sn,
                  ]))
                : q("", !0),
              e("div", nn, [
                e("div", rn, [
                  e(
                    "input",
                    {
                      class: "sheet-input pe-input",
                      type: "number",
                      disabled: n.disabledSheet,
                      value: n.character.peTurn,
                      onBlur: o[5] || (o[5] = (l) => m(l, "peTurn")),
                    },
                    null,
                    40,
                    dn
                  ),
                ]),
                e(
                  "h4",
                  null,
                  w(
                    n.character.isSobrevivendoAoHorror
                      ? "DP / TURN"
                      : "EP / TURN"
                  ),
                  1
                ),
              ]),
            ]),
            e("div", ln, [
              e("div", un, [
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: n.disabledSheet,
                    value: n.character.movement,
                    onBlur: o[6] || (o[6] = (l) => m(l, "movement")),
                  },
                  null,
                  40,
                  cn
                ),
                mn,
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: n.disabledSheet,
                    value: p.value,
                    onBlur: i,
                  },
                  null,
                  40,
                  pn
                ),
                vn,
              ]),
              hn,
            ]),
          ]),
          e("div", gn, [
            C(
              ze,
              {
                type: "pv",
                "max-value": n.character.maxPv,
                "current-value": n.character.currentPv,
                marks: n.character.deathMarks,
                "mark-mode": n.character.deathMode,
                "disabled-sheet": n.disabledSheet,
                onHandleChangeCharNumber: o[7] || (o[7] = (l, A) => m(l, A)),
                onHandleChangeCharNumberButton:
                  o[8] ||
                  (o[8] = (l, A) =>
                    n.$emit("handleChangeCharNumberButton", l, A)),
                onHandleChangeCharMark:
                  o[9] ||
                  (o[9] = (l, A) => n.$emit("handleChangeCharMark", l, A)),
                onHandleChangeMarkModeToTrue:
                  o[10] ||
                  (o[10] = (l) => n.$emit("handleChangeMarkModeToTrue", l)),
                onHandleMarkHeal:
                  o[11] || (o[11] = (l) => n.$emit("handleMarkHeal", l)),
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
            n.character.isSobrevivendoAoHorror
              ? q("", !0)
              : (s(),
                x(
                  ze,
                  {
                    key: 0,
                    type: "san",
                    character: n.character,
                    "max-value": n.character.maxSan,
                    "current-value": n.character.currentSan,
                    marks: n.character.madnessMarks,
                    "mark-mode": n.character.madnessMode,
                    "disabled-sheet": n.disabledSheet,
                    onHandleChangeCharNumber:
                      o[12] || (o[12] = (l, A) => m(l, A)),
                    onHandleChangeCharNumberButton:
                      o[13] ||
                      (o[13] = (l, A) =>
                        n.$emit("handleChangeCharNumberButton", l, A)),
                    onHandleChangeCharMark:
                      o[14] ||
                      (o[14] = (l, A) => n.$emit("handleChangeCharMark", l, A)),
                    onHandleChangeMarkModeToTrue:
                      o[15] ||
                      (o[15] = (l) => n.$emit("handleChangeMarkModeToTrue", l)),
                    onHandleMarkHeal:
                      o[16] || (o[16] = (l) => n.$emit("handleMarkHeal", l)),
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
                )),
            n.character.isSobrevivendoAoHorror
              ? q("", !0)
              : (s(),
                x(
                  ze,
                  {
                    key: 1,
                    type: "pe",
                    character: n.character,
                    "max-value": n.character.maxPe,
                    "current-value": n.character.currentPe,
                    "disabled-sheet": n.disabledSheet,
                    onHandleChangeCharNumber:
                      o[17] || (o[17] = (l, A) => m(l, A)),
                    onHandleChangeCharNumberButton:
                      o[18] ||
                      (o[18] = (l, A) =>
                        n.$emit("handleChangeCharNumberButton", l, A)),
                  },
                  null,
                  8,
                  ["character", "max-value", "current-value", "disabled-sheet"]
                )),
            n.character.isSobrevivendoAoHorror
              ? (s(),
                x(
                  ze,
                  {
                    key: 2,
                    type: "pd",
                    character: n.character,
                    "max-value": n.character.maxPd,
                    "current-value": n.character.currentPd,
                    marks: n.character.pdMarks,
                    "mark-mode": n.character.pdMode,
                    "disabled-sheet": n.disabledSheet,
                    onHandleChangeCharNumber:
                      o[19] || (o[19] = (l, A) => m(l, A)),
                    onHandleChangeCharNumberButton:
                      o[20] ||
                      (o[20] = (l, A) =>
                        n.$emit("handleChangeCharNumberButton", l, A)),
                    onHandleChangeCharMark:
                      o[21] ||
                      (o[21] = (l, A) => n.$emit("handleChangeCharMark", l, A)),
                    onHandleChangeMarkModeToTrue:
                      o[22] ||
                      (o[22] = (l) => n.$emit("handleChangeMarkModeToTrue", l)),
                    onHandleMarkHeal:
                      o[23] || (o[23] = (l) => n.$emit("handleMarkHeal", l)),
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
                ))
              : q("", !0),
          ]),
          e("div", fn, [
            e("div", bn, [
              e("div", An, [Cn, e("div", qn, [e("h3", null, w(u.value), 1)])]),
              e("div", yn, [
                kn,
                e("div", $n, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: n.disabledSheet,
                      value: n.character.protectionDefense,
                      onBlur:
                        o[24] || (o[24] = (l) => m(l, "protectionDefense")),
                    },
                    null,
                    40,
                    En
                  ),
                  Sn,
                ]),
                In,
                e("div", Pn, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: n.disabledSheet,
                      value: n.character.bonusDefense,
                      onBlur: o[25] || (o[25] = (l) => m(l, "bonusDefense")),
                    },
                    null,
                    40,
                    Mn
                  ),
                  _n,
                ]),
              ]),
            ]),
            e("div", Dn, [
              e("div", Rn, [
                Tn,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: n.disabledSheet,
                    value: n.character.block,
                    onBlur: o[26] || (o[26] = (l) => m(l, "block")),
                  },
                  null,
                  40,
                  Vn
                ),
              ]),
              e("div", On, [
                wn,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: n.disabledSheet,
                    value: n.character.evade,
                    onBlur: o[27] || (o[27] = (l) => m(l, "evade")),
                  },
                  null,
                  40,
                  zn
                ),
              ]),
            ]),
          ]),
          e("div", Hn, [
            jn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: n.disabledSheet,
                value: n.character.currentProtection,
                onBlur:
                  o[28] ||
                  (o[28] = (l) =>
                    n.$emit("handleChangeCharText", {
                      e: l,
                      key: "currentProtection",
                    })),
              },
              null,
              40,
              Un
            ),
          ]),
          e("div", Nn, [
            xn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: n.disabledSheet,
                value: n.character.resistances,
                onBlur:
                  o[29] ||
                  (o[29] = (l) =>
                    n.$emit("handleChangeCharText", {
                      e: l,
                      key: "resistances",
                    })),
              },
              null,
              40,
              Bn
            ),
          ]),
          e("div", Ln, [
            Fn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: n.disabledSheet,
                value: n.character.proficiencies,
                onBlur:
                  o[30] ||
                  (o[30] = (l) =>
                    n.$emit("handleChangeCharText", {
                      e: l,
                      key: "proficiencies",
                    })),
              },
              null,
              40,
              Qn
            ),
          ]),
        ])
      );
    },
  }),
  Xn = V(Gn, [["__scopeId", "data-v-829b3fda"]]),
  Wn = { class: "sheet-stats-container" },
  Kn = T({
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
      "handleChangeSobrevivendoAoHorror",
    ],
    setup(a, { emit: b }) {
      const h = b,
        v = (c) => {
          h("handleRollAttribute", c);
        };
      return (c, p) => (
        s(),
        r("div", Wn, [
          C(
            Xt,
            {
              character: c.character,
              "disabled-sheet": c.disabledSheet,
              onHandleChangeAttribute:
                p[0] || (p[0] = (u) => c.$emit("handleChangeAttribute", u)),
              onHandleRollAttribute: v,
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
          C(
            Xn,
            {
              character: c.character,
              "disabled-sheet": c.disabledSheet,
              onHandleChangeSobrevivendoAoHorror:
                p[1] ||
                (p[1] = (u) => c.$emit("handleChangeSobrevivendoAoHorror")),
              onHandleChangeCharText:
                p[2] || (p[2] = (u) => c.$emit("handleChangeCharText", u)),
              onHandleChangeCharNumber:
                p[3] || (p[3] = (u) => c.$emit("handleChangeCharNumber", u)),
              onHandleChangeCharDropdown:
                p[4] || (p[4] = (u) => c.$emit("handleChangeCharDropdown", u)),
              onHandleChangeMovementInSquares:
                p[5] ||
                (p[5] = (u) => c.$emit("handleChangeMovementInSquares", u)),
              onHandleChangeCharNumberButton:
                p[6] ||
                (p[6] = (u, m) =>
                  c.$emit("handleChangeCharNumberButton", u, m)),
              onHandleChangeCharMark:
                p[7] ||
                (p[7] = (u, m) => c.$emit("handleChangeCharMark", u, m)),
              onHandleChangeMarkModeToTrue:
                p[8] ||
                (p[8] = (u) => c.$emit("handleChangeMarkModeToTrue", u)),
              onHandleMarkHeal:
                p[9] || (p[9] = (u) => c.$emit("handleMarkHeal", u)),
              onHandleOpenModalAddClass:
                p[10] || (p[10] = (u) => c.$emit("handleOpenModalAddClass")),
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
        ])
      );
    },
  }),
  $o = V(Kn, [["__scopeId", "data-v-4b3943e4"]]),
  Jn = { class: "dropdown-button-container" },
  Yn = { key: 0, class: "span" },
  Zn = ["disabled"],
  er = { key: 1, class: "span" },
  ar = ["onClick"],
  or = T({
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
      Ne((i) => ({ "2c89ebb8": a.color }));
      const h = a,
        v = b,
        c = $(null),
        p = $(!1);
      Mo(c, () => (p.value = !1));
      const u = () => {
          h.disabled || (p.value = !p.value);
        },
        m = (i) => {
          (p.value = !1), v("updateValue", i);
        };
      return (i, n) => (
        s(),
        r(
          "div",
          { ref_key: "dropdown", ref: c },
          [
            e("div", Jn, [
              a.underline ? q("", !0) : (s(), r("span", Yn, "(")),
              e(
                "button",
                {
                  class: Y([
                    "dropdown-button",
                    { "dropdown-underline": a.underline, disabled: a.disabled },
                  ]),
                  disabled: a.disabled,
                  onClick: u,
                },
                w(a.value),
                11,
                Zn
              ),
              a.underline ? q("", !0) : (s(), r("span", er, ")")),
              e(
                "div",
                {
                  class: Y([
                    "dropdown-content",
                    [
                      { "dropdown-content-active": p.value },
                      a.up ? "dropdown-position-up" : "dropdown-position-down",
                    ],
                  ]),
                },
                [
                  (s(!0),
                  r(
                    U,
                    null,
                    B(
                      a.options,
                      (o, l) => (
                        s(),
                        r("div", { key: l }, [
                          e(
                            "button",
                            {
                              class: "dropdown-content-button",
                              onClick: (A) => m(o),
                            },
                            w(o),
                            9,
                            ar
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
  He = V(or, [["__scopeId", "data-v-7777a8ec"]]),
  pa = (a) => (H("data-v-05af1f88"), (a = a()), j(), a),
  tr = { class: "small" },
  sr = pa(() => e("img", { src: Do, alt: "rolar" }, null, -1)),
  nr = [sr],
  rr = { key: 0 },
  dr = { key: 1 },
  ir = { key: 0 },
  lr = { key: 1 },
  ur = { class: "skill-bonus" },
  cr = pa(() => e("span", null, "( ", -1)),
  mr = pa(() => e("span", null, " )", -1)),
  pr = { key: 2 },
  vr = { key: 3 },
  hr = { class: "input-container" },
  gr = ["disabled", "value"],
  fr = T({
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
      Ne((A) => ({ "45097c96": i.value }));
      const h = a,
        v = b,
        c = ["AGI", "STR", "INT", "PRE", "VIG"],
        p = ["0", "5", "10", "15"],
        u = { trained: "#3d8b40", veteran: "#0a69b7", expert: "#b36b00" },
        m = xe(),
        i = X(() =>
          h.skill.trainingDegree === "5"
            ? u.trained
            : h.skill.trainingDegree === "10"
            ? u.veteran
            : h.skill.trainingDegree === "15"
            ? u.expert
            : "#fff"
        ),
        n = () => {
          v("handleOpenSkillModal", h.skill);
        },
        o = (A, M, _) => {
          v("handleChangeSkillDropdown", { value: A, skillName: M, key: _ });
        },
        l = (A, M) => {
          var f;
          const _ = A.target.valueAsNumber;
          v("handleChangeSkillOtherBonus", { value: _, skillName: M }),
            (f = m == null ? void 0 : m.proxy) == null || f.$forceUpdate();
        };
      return (A, M) => (
        s(),
        r(
          U,
          null,
          [
            e("td", tr, [
              e(
                "button",
                {
                  class: Y(["roll-button", { disabled: a.disabledSheet }]),
                  onClick:
                    M[0] || (M[0] = (_) => A.$emit("handleRollSkill", a.skill)),
                },
                nr,
                2
              ),
            ]),
            e(
              "td",
              { class: Y({ disabled: a.disabledSheet }) },
              [
                e(
                  "button",
                  {
                    class: Y([
                      "naked-button left",
                      { disabled: a.disabledSheet },
                    ]),
                    onClick: n,
                  },
                  [
                    me(w(a.skill.name), 1),
                    a.skill.onlyTrained ? (s(), r("span", rr, "*")) : q("", !0),
                    a.skill.loadPenalty ? (s(), r("span", dr, "+")) : q("", !0),
                  ],
                  2
                ),
              ],
              2
            ),
            a.index > a.length - 7
              ? (s(),
                r("td", ir, [
                  C(
                    He,
                    {
                      value: a.skill.attribute,
                      options: c,
                      color: i.value,
                      disabled: a.disabledSheet,
                      up: "",
                      onUpdateValue:
                        M[1] || (M[1] = (_) => o(_, a.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (s(),
                r("td", lr, [
                  C(
                    He,
                    {
                      value: a.skill.attribute,
                      options: c,
                      color: i.value,
                      disabled: a.disabledSheet,
                      onUpdateValue:
                        M[2] || (M[2] = (_) => o(_, a.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [e("h3", ur, [cr, me(w(a.skill.bonus), 1), mr])]),
            a.index > a.length - 7
              ? (s(),
                r("td", pr, [
                  C(
                    He,
                    {
                      value: a.skill.trainingDegree,
                      options: p,
                      color: i.value,
                      disabled: a.disabledSheet,
                      underline: "",
                      up: "",
                      onUpdateValue:
                        M[3] ||
                        (M[3] = (_) => o(_, a.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (s(),
                r("td", vr, [
                  C(
                    He,
                    {
                      value: a.skill.trainingDegree,
                      options: p,
                      color: i.value,
                      disabled: a.disabledSheet,
                      underline: "",
                      onUpdateValue:
                        M[4] ||
                        (M[4] = (_) => o(_, a.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [
              e("div", hr, [
                e(
                  "input",
                  {
                    type: "number",
                    class: "underline-input",
                    disabled: a.disabledSheet,
                    value: a.skill.otherBonus,
                    onBlur: M[5] || (M[5] = (_) => l(_, a.skill.name)),
                  },
                  null,
                  40,
                  gr
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  }),
  br = V(fr, [["__scopeId", "data-v-05af1f88"]]),
  va = (a) => (H("data-v-f2b17d30"), (a = a()), j(), a),
  Ar = { class: "skills-container" },
  Cr = va(() => e("h1", { class: "skills-title" }, " SKILLS ", -1)),
  qr = { class: "skills-table" },
  yr = va(() =>
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
  kr = va(() =>
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
  $r = T({
    __name: "SkillsView",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenSkillModal",
      "handleChangeSkillOtherBonus",
      "handleChangeSkillDropdown",
      "handleRollSkill",
    ],
    setup(a, { emit: b }) {
      const h = a,
        v = b,
        c = (u) => {
          h.disabledSheet || v("handleOpenSkillModal", u);
        },
        p = (u) => {
          h.disabledSheet || v("handleRollSkill", u);
        };
      return (u, m) => (
        s(),
        r("div", Ar, [
          Cr,
          e("table", qr, [
            yr,
            e("tbody", null, [
              (s(!0),
              r(
                U,
                null,
                B(
                  u.character.skills,
                  (i, n) => (
                    s(),
                    r("tr", { key: i.name }, [
                      C(
                        br,
                        {
                          skill: i,
                          index: n,
                          length: u.character.skills.length,
                          "disabled-sheet": u.disabledSheet,
                          onHandleOpenSkillModal: c,
                          onHandleChangeSkillDropdown:
                            m[0] ||
                            (m[0] = (o) =>
                              u.$emit("handleChangeSkillDropdown", o)),
                          onHandleChangeSkillOtherBonus:
                            m[1] ||
                            (m[1] = (o) =>
                              u.$emit("handleChangeSkillOtherBonus", o)),
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
          kr,
        ])
      );
    },
  }),
  Eo = V($r, [["__scopeId", "data-v-f2b17d30"]]),
  ha = (a) => (H("data-v-f08c1d1d"), (a = a()), j(), a),
  Er = { class: "tab" },
  Sr = { key: 0 },
  Ir = { class: "roll-dices-container" },
  Pr = ["disabled", "onKeyup"],
  Mr = ["disabled"],
  _r = ha(() =>
    e("img", { class: "dice-icon", src: Do, alt: "rolar" }, null, -1)
  ),
  Dr = [_r],
  Rr = { key: 2 },
  Tr = { key: 0 },
  Vr = { key: 1, class: "no-content" },
  Or = ha(() => e("h3", null, "No attack found", -1)),
  wr = [Or],
  zr = { key: 3, class: "no-content" },
  Hr = ha(() => e("h3", null, "You have yet to add attacks", -1)),
  jr = [Hr],
  Ur = T({
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
      const h = a,
        v = b,
        c = $(""),
        p = $(""),
        u = () => {
          h.disabledSheet || (v("handleRollDices", c.value), (c.value = ""));
        },
        m = (n) => {
          h.disabledSheet || v("handleRollAttack", n);
        },
        i = X(() => [...h.character.attacks].filter((o) => J(o.name, p.value)));
      return (n, o) => (
        s(),
        r("div", Er, [
          n.character.attacks.length > 0
            ? (s(),
              r("div", Sr, [
                C(
                  Le,
                  {
                    value: p.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: o[0] || (o[0] = (l) => (p.value = l)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          e("div", Ir, [
            be(
              e(
                "input",
                {
                  "onUpdate:modelValue": o[1] || (o[1] = (l) => (c.value = l)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: n.disabledSheet,
                  onKeyup: Rt(u, ["enter"]),
                },
                null,
                40,
                Pr
              ),
              [[Ae, c.value]]
            ),
            e(
              "button",
              {
                class: Y(["dice-button", { disabled: n.disabledSheet }]),
                disabled: n.disabledSheet,
                onClick: u,
              },
              Dr,
              10,
              Mr
            ),
          ]),
          n.disabledSheet
            ? q("", !0)
            : (s(),
              r(
                "button",
                {
                  key: 1,
                  class: "button-secondary add-button",
                  onClick:
                    o[2] || (o[2] = (l) => n.$emit("handleOpenAddAttack")),
                },
                " New Attack "
              )),
          n.character.attacks.length > 0
            ? (s(),
              r("div", Rr, [
                i.value.length > 0
                  ? (s(),
                    r("div", Tr, [
                      (s(!0),
                      r(
                        U,
                        null,
                        B(
                          i.value,
                          (l) => (
                            s(),
                            r("div", { key: l.id, class: "align-card" }, [
                              C(
                                Wt,
                                {
                                  id: l.id,
                                  attack: l,
                                  disabled: n.disabledSheet,
                                  onHandleRemoveAttack:
                                    o[3] ||
                                    (o[3] = (A) =>
                                      n.$emit("handleRemoveAttack", A)),
                                  onHandleEdit: (A) =>
                                    n.$emit("handleEditAttack", A),
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
                  : (s(), r("div", Vr, wr)),
              ]))
            : (s(), r("div", zr, jr)),
        ])
      );
    },
  }),
  Qo = V(Ur, [["__scopeId", "data-v-f08c1d1d"]]),
  Go = (a) => (H("data-v-79ae51ca"), (a = a()), j(), a),
  Nr = { class: "tab" },
  xr = { class: "tab-header" },
  Br = { key: 0 },
  Lr = { key: 1, class: "sheet-cards-container" },
  Fr = { key: 0 },
  Qr = { key: 1, class: "no-content" },
  Gr = Go(() => e("h3", null, "No abilities found", -1)),
  Xr = [Gr],
  Wr = { key: 2, class: "no-content" },
  Kr = Go(() => e("h3", null, "You have yet to add an ability", -1)),
  Jr = [Kr],
  Yr = T({
    __name: "AbilitiesTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenAbilitiesModal",
      "handleRemovePower",
      "handleEditPower",
      "handleOpenAddPower",
    ],
    setup(a, { emit: b }) {
      const h = a,
        v = b,
        c = $(""),
        p = X(() =>
          [...h.character.powers]
            .filter((i) => J(i.name, c.value))
            .sort((i, n) => i.name.localeCompare(n.name))
        ),
        u = (m) => v("handleEditPower", m);
      return (m, i) => (
        s(),
        r("div", Nr, [
          e("div", xr, [
            m.character.powers.length > 0
              ? (s(),
                r("div", Br, [
                  C(
                    Le,
                    {
                      value: c.value,
                      placeholder: "Filter Abilities",
                      onUpdate: i[0] || (i[0] = (n) => (c.value = n)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : q("", !0),
            m.disabledSheet
              ? q("", !0)
              : (s(),
                r(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      i[1] ||
                      (i[1] = (n) => m.$emit("handleOpenAbilitiesModal")),
                  },
                  " Add New "
                )),
          ]),
          m.disabledSheet
            ? q("", !0)
            : (s(),
              r(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    i[2] || (i[2] = (n) => m.$emit("handleOpenAddPower")),
                },
                " New Ability "
              )),
          m.character.powers.length > 0
            ? (s(),
              r("div", Lr, [
                p.value.length > 0
                  ? (s(),
                    r("div", Fr, [
                      (s(!0),
                      r(
                        U,
                        null,
                        B(
                          p.value,
                          (n) => (
                            s(),
                            r("div", { key: n.id, class: "sheet-card-list" }, [
                              C(
                                Fe,
                                {
                                  id: n.id,
                                  power: n,
                                  disabled: m.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    i[3] ||
                                    (i[3] = (o) =>
                                      m.$emit("handleRemovePower", o)),
                                  onHandleEdit: u,
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
                  : (s(), r("div", Qr, Xr)),
              ]))
            : (s(), r("div", Wr, Jr)),
        ])
      );
    },
  }),
  Xo = V(Yr, [["__scopeId", "data-v-79ae51ca"]]),
  ga = (a) => (H("data-v-d3cb0405"), (a = a()), j(), a),
  Zr = { class: "tab" },
  ed = { class: "tab-header" },
  ad = { key: 0 },
  od = { class: "ritual-dc-wrapper" },
  td = { class: "ritual-dc-container" },
  sd = ga(() => e("h4", { class: "sheet-subtitle" }, " RITUAL DC ", -1)),
  nd = ["disabled", "value"],
  rd = { key: 1, class: "sheet-cards-container" },
  dd = { key: 0 },
  id = { key: 1, class: "no-content" },
  ld = ga(() => e("h3", null, "No ritual found", -1)),
  ud = [ld],
  cd = { key: 2, class: "no-content" },
  md = ga(() => e("h3", null, "You have yet to add a ritual", -1)),
  pd = [md],
  vd = T({
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
      const h = a,
        v = b,
        c = xe(),
        p = $(""),
        u = X(() =>
          [...h.character.rituals]
            .filter((l) => J(l.name, p.value))
            .sort((l, A) => l.name.localeCompare(A.name))
        ),
        m = (o) => {
          var l;
          v("handleChangeRitualDc", o),
            (l = c == null ? void 0 : c.proxy) == null || l.$forceUpdate();
        },
        i = (o) => v("handleEditRitual", o),
        n = (o, l) => {
          v("handleRollRitual", o, l);
        };
      return (o, l) => (
        s(),
        r("div", Zr, [
          e("div", ed, [
            o.character.rituals.length > 0
              ? (s(),
                r("div", ad, [
                  C(
                    Le,
                    {
                      value: p.value,
                      placeholder: "Filter rituals",
                      onUpdate: l[0] || (l[0] = (A) => (p.value = A)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : q("", !0),
            o.disabledSheet
              ? q("", !0)
              : (s(),
                r(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      l[1] || (l[1] = (A) => o.$emit("handleOpenRitualsModal")),
                  },
                  " Add New "
                )),
          ]),
          e("div", od, [
            e("div", td, [
              sd,
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
                nd
              ),
            ]),
          ]),
          o.disabledSheet
            ? q("", !0)
            : (s(),
              r(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    l[2] || (l[2] = (A) => o.$emit("handleOpenAddRitual")),
                },
                " New Ritual "
              )),
          o.character.rituals.length > 0
            ? (s(),
              r("div", rd, [
                u.value.length > 0
                  ? (s(),
                    r("div", dd, [
                      (s(!0),
                      r(
                        U,
                        null,
                        B(
                          u.value,
                          (A) => (
                            s(),
                            r("div", { key: A.id, class: "sheet-card-list" }, [
                              C(
                                Ro,
                                {
                                  id: A.id,
                                  ritual: A,
                                  disabled: o.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    l[3] ||
                                    (l[3] = (M) =>
                                      o.$emit("handleRemoveRitual", M)),
                                  onHandleEdit: i,
                                  onHandleRollRitual: n,
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
                  : (s(), r("div", id, ud)),
              ]))
            : (s(), r("div", cd, pd)),
        ])
      );
    },
  }),
  Wo = V(vd, [["__scopeId", "data-v-d3cb0405"]]),
  ie = (a) => (H("data-v-d9d5c266"), (a = a()), j(), a),
  hd = { class: "tab" },
  gd = { class: "tab-header" },
  fd = { key: 0 },
  bd = { class: "inventory-info-container" },
  Ad = { class: "inventory-row" },
  Cd = { class: "input-container" },
  qd = ie(() =>
    e("h4", { class: "sheet-subtitle" }, " PRESTIGE POINTS ", -1)
  ),
  yd = ["disabled", "value"],
  kd = { class: "inventory-row" },
  $d = { key: 0 },
  Ed = { class: "input-container" },
  Sd = ie(() => e("h4", { class: "sheet-subtitle" }, " ITEM LIMIT ", -1)),
  Id = ["disabled", "value"],
  Pd = ["disabled", "value"],
  Md = ["disabled", "value"],
  _d = ["disabled", "value"],
  Dd = { key: 1 },
  Rd = { class: "input-container" },
  Td = ie(() => e("h4", { class: "sheet-subtitle" }, " ITEM LIMIT ", -1)),
  Vd = { class: "mobile-input-container-row" },
  Od = ["disabled", "value"],
  wd = ["disabled", "value"],
  zd = ["disabled", "value"],
  Hd = ["disabled", "value"],
  jd = { class: "inventory-row" },
  Ud = { key: 0 },
  Nd = { class: "input-container" },
  xd = ie(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " IN INVENTORY ", -1)
  ),
  Bd = { class: "sheet-div" },
  Ld = { class: "sheet-div" },
  Fd = { class: "sheet-div" },
  Qd = { class: "sheet-div" },
  Gd = { key: 1 },
  Xd = { class: "input-container" },
  Wd = ie(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " IN INVENTORY ", -1)
  ),
  Kd = { class: "mobile-input-container-row" },
  Jd = { class: "sheet-div" },
  Yd = { class: "sheet-div" },
  Zd = { class: "sheet-div" },
  ei = { class: "sheet-div" },
  ai = { class: "inventory-row" },
  oi = { key: 0 },
  ti = { class: "input-container" },
  si = ie(() => e("h4", { class: "sheet-subtitle" }, " MAX LOAD. ", -1)),
  ni = ["disabled", "value"],
  ri = ["disabled", "value"],
  di = { key: 1 },
  ii = ie(() =>
    e(
      "h4",
      { class: "sheet-subtitle mobile-sheet-subtitle" },
      " MAX LOAD ",
      -1
    )
  ),
  li = { class: "mobile-input-container-row" },
  ui = ["disabled", "value"],
  ci = ["disabled", "value"],
  mi = { class: "open-add-buttons-container" },
  pi = { key: 0, class: "open-add-title" },
  vi = { key: 0, class: "sheet-cards-container" },
  hi = { key: 0 },
  gi = { key: 0 },
  fi = { key: 1 },
  bi = { key: 2 },
  Ai = { key: 3 },
  Ci = { key: 1, class: "no-content" },
  qi = ie(() => e("h3", null, "No item found", -1)),
  yi = [qi],
  ki = { key: 1, class: "no-content" },
  $i = ie(() => e("h3", null, "You have yet to add an item", -1)),
  Ei = [$i],
  Si = T({
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
      Ne((f) => ({ "53e467a2": o.value }));
      const h = a,
        v = b,
        c = [
          "Mundane",
          "Recruit",
          "Operator",
          "Special Agent",
          "Operation Captain",
          "Elite Agent",
        ],
        p = ["Low", "Medium", "High", "Unlimited"],
        u = xe(),
        m = $(""),
        i = $(window.innerWidth),
        n = X(() =>
          [...h.character.inventory]
            .filter((y) => J(y.name, m.value))
            .sort((y, D) => y.name.localeCompare(D.name))
        ),
        o = X(() =>
          h.character.currentLoad > h.character.maxLoad * 2
            ? "#d9534f"
            : h.character.currentLoad > h.character.maxLoad
            ? "#ff8c00"
            : "#fff"
        ),
        l = X(() =>
          h.character.currentLoad < 0 ? 0 : h.character.currentLoad
        ),
        A = (f) => v("handleEditItem", f),
        M = (f, y) => {
          var F;
          const D = f.target.valueAsNumber;
          v("handleChangeItemsLimit", { value: D, key: y }),
            (F = u == null ? void 0 : u.proxy) == null || F.$forceUpdate();
        },
        _ = (f, y) => {
          var F;
          const D = f.target.valueAsNumber;
          v("handleChangeInventoryNumber", { value: D, key: y }),
            (F = u == null ? void 0 : u.proxy) == null || F.$forceUpdate();
        };
      return (
        Ee(() => {
          window.addEventListener("resize", () => {
            i.value = window.innerWidth;
          });
        }),
        (f, y) => {
          var D, F, ve, t, S, k, O, he;
          return (
            s(),
            r("div", hd, [
              e("div", gd, [
                f.character.inventory.length > 0
                  ? (s(),
                    r("div", fd, [
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
                  : (s(),
                    r(
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
              e("div", bd, [
                e("div", Ad, [
                  e("div", Cd, [
                    qd,
                    e(
                      "input",
                      {
                        type: "number",
                        class: "sheet-input sheet-input-size",
                        disabled: f.disabledSheet,
                        value: f.character.prestigePoints,
                        onBlur: y[2] || (y[2] = (E) => _(E, "prestigePoints")),
                      },
                      null,
                      40,
                      yd
                    ),
                  ]),
                  C(
                    ca,
                    {
                      title: "RANK",
                      disabled: f.disabledSheet,
                      value: f.character.patent,
                      "button-width": "10rem",
                      options: c,
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
                e("div", kd, [
                  i.value >= 1023
                    ? (s(),
                      r("div", $d, [
                        e("div", Ed, [
                          Sd,
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "I",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.I,
                              onBlur: y[4] || (y[4] = (E) => M(E, "I")),
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
                              placeholder: "II",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.II,
                              onBlur: y[5] || (y[5] = (E) => M(E, "II")),
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
                              placeholder: "III",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.III,
                              onBlur: y[6] || (y[6] = (E) => M(E, "III")),
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
                              placeholder: "IV",
                              disabled: f.disabledSheet,
                              value: f.character.itemsLimit.IV,
                              onBlur: y[7] || (y[7] = (E) => M(E, "IV")),
                            },
                            null,
                            40,
                            _d
                          ),
                        ]),
                      ]))
                    : (s(),
                      r("div", Dd, [
                        e("div", Rd, [
                          Td,
                          e("div", Vd, [
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "I",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.I,
                                onBlur: y[8] || (y[8] = (E) => M(E, "I")),
                              },
                              null,
                              40,
                              Od
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "II",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.II,
                                onBlur: y[9] || (y[9] = (E) => M(E, "II")),
                              },
                              null,
                              40,
                              wd
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "III",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.III,
                                onBlur: y[10] || (y[10] = (E) => M(E, "III")),
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
                                placeholder: "IV",
                                disabled: f.disabledSheet,
                                value: f.character.itemsLimit.IV,
                                onBlur: y[11] || (y[11] = (E) => M(E, "IV")),
                              },
                              null,
                              40,
                              Hd
                            ),
                          ]),
                        ]),
                      ])),
                ]),
                e("div", jd, [
                  i.value >= 1023
                    ? (s(),
                      r("div", Ud, [
                        e("div", Nd, [
                          xd,
                          e(
                            "div",
                            Bd,
                            w(
                              ((D = f.character.currentItemsLimit) == null
                                ? void 0
                                : D.I) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Ld,
                            w(
                              ((F = f.character.currentItemsLimit) == null
                                ? void 0
                                : F.II) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Fd,
                            w(
                              ((ve = f.character.currentItemsLimit) == null
                                ? void 0
                                : ve.III) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            Qd,
                            w(
                              ((t = f.character.currentItemsLimit) == null
                                ? void 0
                                : t.IV) || "0"
                            ),
                            1
                          ),
                        ]),
                      ]))
                    : (s(),
                      r("div", Gd, [
                        e("div", Xd, [
                          Wd,
                          e("div", Kd, [
                            e(
                              "div",
                              Jd,
                              w(
                                ((S = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : S.I) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              Yd,
                              w(
                                ((k = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : k.II) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              Zd,
                              w(
                                ((O = f.character.currentItemsLimit) == null
                                  ? void 0
                                  : O.III) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              ei,
                              w(
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
                e("div", ai, [
                  C(
                    ca,
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
                    ? (s(),
                      r("div", oi, [
                        e("div", ti, [
                          si,
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: f.disabledSheet,
                              value: l.value,
                              onBlur:
                                y[13] || (y[13] = (E) => _(E, "currentLoad")),
                            },
                            null,
                            40,
                            ni
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              disabled: f.disabledSheet,
                              value: f.character.maxLoad,
                              onBlur: y[14] || (y[14] = (E) => _(E, "maxLoad")),
                            },
                            null,
                            40,
                            ri
                          ),
                        ]),
                      ]))
                    : (s(),
                      r("div", di, [
                        ii,
                        e("div", li, [
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: f.disabledSheet,
                              value: l.value,
                              onBlur:
                                y[15] || (y[15] = (E) => _(E, "currentLoad")),
                            },
                            null,
                            40,
                            ui
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              disabled: f.disabledSheet,
                              value: f.character.maxLoad,
                              onBlur: y[16] || (y[16] = (E) => _(E, "maxLoad")),
                            },
                            null,
                            40,
                            ci
                          ),
                        ]),
                      ])),
                ]),
              ]),
              e("div", mi, [
                f.disabledSheet ? q("", !0) : (s(), r("div", pi, " NEW ")),
                f.disabledSheet
                  ? q("", !0)
                  : (s(),
                    r(
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
                  : (s(),
                    r(
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
                  : (s(),
                    r(
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
                  : (s(),
                    r(
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
                  : (s(),
                    r(
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
                ? (s(),
                  r("div", vi, [
                    n.value.length > 0
                      ? (s(),
                        r("div", hi, [
                          (s(!0),
                          r(
                            U,
                            null,
                            B(
                              n.value,
                              (E) => (
                                s(),
                                r(
                                  "div",
                                  { key: E.id, class: "sheet-card-list" },
                                  [
                                    E.itemType === "weapon"
                                      ? (s(),
                                        r("div", gi, [
                                          C(
                                            To,
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
                                      ? (s(),
                                        r("div", fi, [
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
                                      ? (s(),
                                        r("div", bi, [
                                          C(
                                            Oo,
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
                                      ? (s(),
                                        r("div", Ai, [
                                          C(
                                            wo,
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
                      : (s(), r("div", Ci, yi)),
                  ]))
                : (s(), r("div", ki, Ei)),
            ])
          );
        }
      );
    },
  }),
  Ko = V(Si, [["__scopeId", "data-v-d9d5c266"]]),
  Ii = { class: "tab" },
  Pi = { class: "textarea-container" },
  Mi = ["disabled", "placeholder", "value", "onBlur"],
  _i = T({
    __name: "DescriptionTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeDescription"],
    setup(a, { emit: b }) {
      const h = b,
        v = (p, u) => {
          const m = { value: p.target.value, key: u };
          h("handleChangeDescription", m);
        },
        c = [
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
      return (p, u) => (
        s(),
        r("div", Ii, [
          (s(),
          r(
            U,
            null,
            B(c, (m) =>
              e("div", { key: m.title }, [
                e("div", Pi, [
                  e("h3", null, w(m.title), 1),
                  e(
                    "textarea",
                    {
                      class: "textarea description-tab-size",
                      rows: "5",
                      disabled: p.disabledSheet,
                      placeholder: m.placeholder,
                      value: p.character.description[m.key],
                      onBlur: (i) => v(i, m.key),
                    },
                    `\r
        `,
                    40,
                    Mi
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
  Jo = V(_i, [["__scopeId", "data-v-c2fd2df6"]]),
  Di = { class: "sheet-tab-container" },
  Ri = { class: "tab-nav-container" },
  Ti = T({
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
      const h = b,
        v = [
          { label: "COMBAT", value: 0 },
          { label: "ABILITIES", value: 1 },
          { label: "RITUALS", value: 2 },
          { label: "INVENTORY", value: 3 },
          { label: "DESCRIPTION", value: 4 },
        ],
        c = [Qo, Xo, Wo, Ko, Jo],
        p = $(0),
        u = (S) => (p.value = S),
        m = (S) => h("handleChangeAttackText", S),
        i = (S) => h("handleChangeAttackNumber", S),
        n = (S) => h("handleChangeAttackDropdown", S),
        o = (S) => h("handleChangeDescription", S),
        l = (S) => h("handleChangeInventoryNumber", S),
        A = (S) => h("handleChangeItemsLimit", S),
        M = (S) => h("handleChangeInventoryDropdown", S),
        _ = (S) => h("handleRollAttack", S),
        f = (S) => h("handleChangeRitualDc", S),
        y = (S) => h("handleEditPower", S),
        D = (S) => h("handleEditRitual", S),
        F = (S) => h("handleEditAttack", S),
        ve = (S) => h("handleEditItem", S),
        t = (S, k) => h("handleRollRitual", S, k);
      return (S, k) => (
        s(),
        r("div", Di, [
          e("div", Ri, [
            C(
              pe,
              {
                "tab-options": v,
                "current-tab": p.value,
                "no-gap": "",
                onHandleNavigation: u,
              },
              null,
              8,
              ["current-tab"]
            ),
          ]),
          (s(),
          x(
            Be,
            null,
            [
              (s(),
              x(
                _e(c[p.value]),
                {
                  character: S.character,
                  "disabled-sheet": S.disabledSheet,
                  onHandleOpenAbilitiesModal:
                    k[0] || (k[0] = (O) => S.$emit("handleOpenAbilitiesModal")),
                  onHandleOpenRitualsModal:
                    k[1] || (k[1] = (O) => S.$emit("handleOpenRitualsModal")),
                  onHandleOpenItemsModal:
                    k[2] || (k[2] = (O) => S.$emit("handleOpenItemsModal")),
                  onHandleOpenAddAttack:
                    k[3] || (k[3] = (O) => S.$emit("handleOpenAddAttack")),
                  onHandleOpenAddPower:
                    k[4] || (k[4] = (O) => S.$emit("handleOpenAddPower")),
                  onHandleOpenAddRitual:
                    k[5] || (k[5] = (O) => S.$emit("handleOpenAddRitual")),
                  onHandleOpenAddWeapon:
                    k[6] || (k[6] = (O) => S.$emit("handleOpenAddWeapon")),
                  onHandleOpenAddProtection:
                    k[7] || (k[7] = (O) => S.$emit("handleOpenAddProtection")),
                  onHandleOpenAddAmmunition:
                    k[8] || (k[8] = (O) => S.$emit("handleOpenAddAmmunition")),
                  onHandleOpenAddMisc:
                    k[9] || (k[9] = (O) => S.$emit("handleOpenAddMisc")),
                  onHandleOpenAddCursedItem:
                    k[10] ||
                    (k[10] = (O) => S.$emit("handleOpenAddCursedItem")),
                  onHandleRemoveAttack:
                    k[11] || (k[11] = (O) => S.$emit("handleRemoveAttack", O)),
                  onHandleEditAttack: F,
                  onHandleEditPower: y,
                  onHandleEditRitual: D,
                  onHandleEditItem: ve,
                  onHandleRemovePower:
                    k[12] || (k[12] = (O) => S.$emit("handleRemovePower", O)),
                  onHandleRemoveRitual:
                    k[13] || (k[13] = (O) => S.$emit("handleRemoveRitual", O)),
                  onHandleRemoveItem:
                    k[14] || (k[14] = (O) => S.$emit("handleRemoveItem", O)),
                  onHandleEquipItem:
                    k[15] || (k[15] = (O) => S.$emit("handleEquipItem", O)),
                  onHandleChangeAttackText: m,
                  onHandleChangeAttackNumber: i,
                  onHandleChangeAttackDropdown: n,
                  onHandleChangeDescription: o,
                  onHandleChangeInventoryNumber: l,
                  onHandleChangeItemsLimit: A,
                  onHandleChangeInventoryDropdown: M,
                  onHandleRollDices:
                    k[16] || (k[16] = (O) => S.$emit("handleRollDices", O)),
                  onHandleRollAttack: _,
                  onHandleChangeRitualDc: f,
                  onHandleRollRitual: t,
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
  Vi = V(Ti, [["__scopeId", "data-v-ff57a115"]]),
  Oi = { class: "switch-container" },
  wi = ["onClick"],
  zi = T({
    __name: "SwitchButton",
    props: {
      value: { type: Number, required: !0 },
      options: { type: Array, required: !0 },
    },
    emits: ["handleNavigation"],
    setup(a) {
      return (b, h) => (
        s(),
        r("div", Oi, [
          (s(!0),
          r(
            U,
            null,
            B(
              a.options,
              (v) => (
                s(),
                r(
                  "button",
                  {
                    key: v.value,
                    class: Y([
                      "switch-button",
                      { active: v.value === a.value },
                    ]),
                    onClick: (c) => b.$emit("handleNavigation", v.value),
                  },
                  w(v.label),
                  11,
                  wi
                )
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  fa = V(zi, [["__scopeId", "data-v-9be4a122"]]),
  Hi = { class: "class-abilities-container" },
  ji = { key: 0, class: "search-container" },
  Ui = { key: 1, class: "class-abilities-content" },
  Ni = T({
    __name: "ClassAbilities",
    props: { classValue: {} },
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const h = a,
        v = b,
        c = $([]),
        p = $([]),
        u = $([]),
        m = $(0),
        i = $(""),
        n = (l) => v("handleAddPower", l);
      Ee(() => {
        u.value.push({ label: `Poderes de ${h.classValue.name}`, value: 0 }),
          h.classValue.paths.forEach((l, A) => {
            u.value.push({ label: l.name, value: A + 1 }), p.value.push(l);
          });
        for (const l of h.classValue.abilities) c.value.push(l);
        for (const l of h.classValue.powers) c.value.push(l);
      });
      const o = X(() =>
        c.value
          ? m.value === 0
            ? c.value
                .filter((l) => J(l.name, i.value))
                .sort((l, A) => l.name.localeCompare(A.name))
            : p.value[m.value - 1].abilities
          : []
      );
      return (l, A) => (
        s(),
        r("div", Hi, [
          C(
            pe,
            {
              "current-tab": m.value,
              "tab-options": u.value,
              secondary: "",
              onHandleNavigation: A[0] || (A[0] = (M) => (m.value = M)),
            },
            null,
            8,
            ["current-tab", "tab-options"]
          ),
          m.value === 0
            ? (s(),
              r("div", ji, [
                C(
                  $e,
                  {
                    value: i.value,
                    dark: "",
                    onUpdate: A[1] || (A[1] = (M) => (i.value = M)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          o.value.length > 0
            ? (s(),
              r("div", Ui, [
                (s(!0),
                r(
                  U,
                  null,
                  B(
                    o.value,
                    (M) => (
                      s(),
                      r("div", { key: M.name, class: "class-abilitie-card" }, [
                        C(Fe, { power: M, onHandleAdd: n }, null, 8, ["power"]),
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
  da = V(Ni, [["__scopeId", "data-v-bb507b22"]]),
  xi = { class: "class-abilities-container" },
  Bi = { class: "search-container" },
  Li = { class: "class-abilities-content" },
  Fi = T({
    __name: "BackgroundPower",
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const h = b,
        v = (m) => h("handleAddPower", m),
        c = $([]),
        p = $("");
      Ee(() => {
        for (const m of ks) c.value.push(m.power);
      });
      const u = X(() =>
        c.value
          .filter((m) => J(m.name, p.value))
          .sort((m, i) => m.name.localeCompare(i.name))
      );
      return (m, i) => (
        s(),
        r("div", xi, [
          e("div", Bi, [
            C(
              $e,
              {
                value: p.value,
                dark: "",
                onUpdate: i[0] || (i[0] = (n) => (p.value = n)),
              },
              null,
              8,
              ["value"]
            ),
          ]),
          e("div", Li, [
            (s(!0),
            r(
              U,
              null,
              B(
                u.value,
                (n) => (
                  s(),
                  r("div", { key: n.name, class: "class-abilitie-card" }, [
                    C(Fe, { power: n, onHandleAdd: v }, null, 8, ["power"]),
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
  Qi = V(Fi, [["__scopeId", "data-v-5db4501a"]]),
  Gi = [
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
  Xi = { class: "class-abilities-container" },
  Wi = { key: 0, class: "class-abilities-content" },
  Ki = T({
    __name: "ParanormalPowers",
    emits: ["handleAddPower"],
    setup(a, { emit: b }) {
      const h = b,
        v = [
          { label: "Knowledge", value: 0 },
          { label: "Energy", value: 1 },
          { label: "Death", value: 2 },
          { label: "Blood", value: 3 },
          { label: "Varies", value: 4 },
        ],
        c = $(0),
        p = (m) => h("handleAddPower", m),
        u = X(() => Gi.filter((m) => m.element === v[c.value].label));
      return (m, i) => (
        s(),
        r("div", Xi, [
          C(
            pe,
            {
              "current-tab": c.value,
              "tab-options": v,
              secondary: "",
              onHandleNavigation: i[0] || (i[0] = (n) => (c.value = n)),
            },
            null,
            8,
            ["current-tab"]
          ),
          u.value.length > 0
            ? (s(),
              r("div", Wi, [
                (s(!0),
                r(
                  U,
                  null,
                  B(
                    u.value,
                    (n) => (
                      s(),
                      r("div", { key: n.name, class: "class-abilitie-card" }, [
                        C(Fe, { power: n, onHandleAdd: p }, null, 8, ["power"]),
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
  Ji = V(Ki, [["__scopeId", "data-v-05246a49"]]),
  Yi = { class: "abilities-modal-content" },
  Zi = { key: 0 },
  el = { key: 1 },
  al = { key: 2 },
  ol = { key: 3 },
  tl = { key: 4 },
  sl = T({
    __name: "AbilitiesModalContent",
    props: { character: {} },
    emits: ["handleCloseModal", "handleAddPower"],
    setup(a, { emit: b }) {
      const h = b,
        v = [
          { label: "Combatant", value: 0 },
          { label: "Specialist", value: 1 },
          { label: "Occultist", value: 2 },
          { label: "Backgrounds", value: 3 },
          { label: "Paranormal Powers", value: 4 },
        ],
        c = $(0),
        p = (m) => (c.value = m),
        u = (m) => h("handleAddPower", m);
      return (m, i) => (
        s(),
        r("div", Yi, [
          C(
            pe,
            { "current-tab": c.value, "tab-options": v, onHandleNavigation: p },
            null,
            8,
            ["current-tab"]
          ),
          c.value === 0
            ? (s(),
              r("div", Zi, [
                C(
                  da,
                  { "class-value": L(Pe)[0], onHandleAddPower: u },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          c.value === 1
            ? (s(),
              r("div", el, [
                C(
                  da,
                  { "class-value": L(Pe)[1], onHandleAddPower: u },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          c.value === 2
            ? (s(),
              r("div", al, [
                C(
                  da,
                  { "class-value": L(Pe)[2], onHandleAddPower: u },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : q("", !0),
          c.value === 3
            ? (s(), r("div", ol, [C(Qi, { onHandleAddPower: u })]))
            : q("", !0),
          c.value === 4
            ? (s(), r("div", tl, [C(Ji, { onHandleAddPower: u })]))
            : q("", !0),
        ])
      );
    },
  }),
  nl = V(sl, [["__scopeId", "data-v-84328ffc"]]),
  Yo = (a) => (H("data-v-7388a7f6"), (a = a()), j(), a),
  rl = { class: "modal-content modal-width" },
  dl = { class: "modal-header" },
  il = Yo(() => e("h2", null, "Add Abilities", -1)),
  ll = Yo(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  ul = [ll],
  cl = { class: "modal-body modal-height" },
  ml = T({
    __name: "AbilitiesModal",
    props: { character: {} },
    emits: ["handleAddPower", "handleCloseModal"],
    setup(a, { emit: b }) {
      const h = b,
        v = [nl, Es],
        c = [
          { label: "Abilities", value: 0 },
          { label: "My Abilities", value: 1 },
        ],
        p = $(0),
        u = (i) => (p.value = i),
        m = (i) => h("handleAddPower", i);
      return (i, n) => (
        s(),
        r("div", rl, [
          e("div", dl, [
            il,
            e(
              "button",
              { onClick: n[0] || (n[0] = (o) => i.$emit("handleCloseModal")) },
              ul
            ),
          ]),
          e("div", cl, [
            C(
              fa,
              { value: p.value, options: c, onHandleNavigation: u },
              null,
              8,
              ["value"]
            ),
            (s(),
            x(
              Be,
              null,
              [
                (s(),
                x(
                  _e(v[p.value]),
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
  pl = V(ml, [["__scopeId", "data-v-7388a7f6"]]),
  K = [
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
  vl = [
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
      ammunitionName: K[4].name,
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
      ammunitionName: K[4].name,
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
      ammunitionName: K[0].name,
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
      ammunitionName: K[0].name,
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
      ammunitionName: K[1].name,
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
      ammunitionName: K[4].name,
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
      ammunitionName: K[4].name,
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
      ammunitionName: K[0].name,
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
      ammunitionName: K[2].name,
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
      ammunitionName: K[1].name,
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
      ammunitionName: K[1].name,
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
      ammunitionName: K[5].name,
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
      ammunitionName: K[3].name,
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
      ammunitionName: K[1].name,
      itemType: "weapon",
      description:
        "<p>Uma arma de fogo pesada, de uso militar. Para atacar com uma metralhadora, você precisa ter Força 4 ou maior ou gastar uma ação de movimento para apoiá-la em seu tripé ou suporte apropriado; caso contrário, sofre –5 em seus ataques. Uma metralhadora é uma arma automática.</p>",
    },
  ],
  hl = [
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
  gl = [
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
  fl = [
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
  bl = { class: "class-abilities-container" },
  Al = { key: 0, class: "search-container" },
  Cl = { key: 1, class: "search-container" },
  ql = { key: 2, class: "search-container" },
  yl = { key: 3, class: "class-abilities-content" },
  kl = { key: 0 },
  $l = { key: 1 },
  El = { key: 2 },
  Sl = { key: 3 },
  Il = T({
    __name: "InventoryModalContent",
    emits: ["handleAddItem", "handleCloseModal"],
    setup(a, { emit: b }) {
      const h = b,
        v = [
          { label: "Weapons", value: 0 },
          { label: "Ammo", value: 1 },
          { label: "Armor", value: 2 },
          { label: "General", value: 3 },
          { label: "Cursed Items", value: 4 },
        ],
        c = $(0),
        p = $(""),
        u = $(""),
        m = $(""),
        i = (o) => h("handleAddItem", o),
        n = X(() =>
          c.value === 0
            ? vl
                .filter((o) => J(o.name, p.value))
                .sort((o, l) => o.name.localeCompare(l.name))
            : c.value === 1
            ? K.sort((o, l) => o.name.localeCompare(l.name))
            : c.value === 2
            ? hl.sort((o, l) => o.name.localeCompare(l.name))
            : c.value === 3
            ? gl
                .filter((o) => J(o.name, u.value))
                .sort((o, l) => o.name.localeCompare(l.name))
            : c.value === 4
            ? fl
                .filter((o) => J(o.name, m.value))
                .sort((o, l) => o.name.localeCompare(l.name))
            : []
        );
      return (o, l) => (
        s(),
        r("div", bl, [
          C(
            pe,
            {
              "current-tab": c.value,
              "tab-options": v,
              onHandleNavigation: l[0] || (l[0] = (A) => (c.value = A)),
            },
            null,
            8,
            ["current-tab"]
          ),
          c.value === 0
            ? (s(),
              r("div", Al, [
                C(
                  $e,
                  {
                    value: p.value,
                    dark: "",
                    onUpdate: l[1] || (l[1] = (A) => (p.value = A)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          c.value === 3
            ? (s(),
              r("div", Cl, [
                C(
                  $e,
                  {
                    value: u.value,
                    dark: "",
                    onUpdate: l[2] || (l[2] = (A) => (u.value = A)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          c.value === 4
            ? (s(),
              r("div", ql, [
                C(
                  $e,
                  {
                    value: m.value,
                    dark: "",
                    onUpdate: l[3] || (l[3] = (A) => (m.value = A)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : q("", !0),
          n.value.length > 0
            ? (s(),
              r("div", yl, [
                (s(!0),
                r(
                  U,
                  null,
                  B(
                    n.value,
                    (A) => (
                      s(),
                      r("div", { key: A.name, class: "class-abilitie-card" }, [
                        A.itemType === "weapon"
                          ? (s(),
                            r("div", kl, [
                              C(To, { weapon: A, onHandleAdd: i }, null, 8, [
                                "weapon",
                              ]),
                            ]))
                          : q("", !0),
                        A.itemType === "protection"
                          ? (s(),
                            r("div", $l, [
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
                          ? (s(),
                            r("div", El, [
                              C(Oo, { misc: A, onHandleAdd: i }, null, 8, [
                                "misc",
                              ]),
                            ]))
                          : q("", !0),
                        A.itemType === "cursedItem"
                          ? (s(),
                            r("div", Sl, [
                              C(
                                wo,
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
  Pl = V(Il, [["__scopeId", "data-v-66867a8f"]]),
  Zo = (a) => (H("data-v-8e793024"), (a = a()), j(), a),
  Ml = { class: "modal-content modal-width" },
  _l = { class: "modal-header" },
  Dl = Zo(() => e("h2", null, "Add Items", -1)),
  Rl = Zo(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  Tl = [Rl],
  Vl = { class: "modal-body modal-height" },
  Ol = T({
    __name: "InventoryModal",
    props: { character: {} },
    emits: ["handleAddItem", "handleCloseModal"],
    setup(a, { emit: b }) {
      const h = b,
        v = [Pl, Ss],
        c = [
          { label: "Items", value: 0 },
          { label: "My Items", value: 1 },
        ],
        p = $(0),
        u = (i) => (p.value = i),
        m = (i) => h("handleAddItem", i);
      return (i, n) => (
        s(),
        r("div", Ml, [
          e("div", _l, [
            Dl,
            e(
              "button",
              { onClick: n[0] || (n[0] = (o) => i.$emit("handleCloseModal")) },
              Tl
            ),
          ]),
          e("div", Vl, [
            C(
              fa,
              { value: p.value, options: c, onHandleNavigation: u },
              null,
              8,
              ["value"]
            ),
            (s(),
            x(
              Be,
              null,
              [
                (s(),
                x(
                  _e(v[p.value]),
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
  wl = V(Ol, [["__scopeId", "data-v-8e793024"]]),
  Ie = [
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
  zl = { class: "rituals-modal-content" },
  Hl = { class: "class-rituals-container" },
  jl = { class: "secondary-tab-container" },
  Ul = { class: "search-container" },
  Nl = { key: 0, class: "class-rituals-content" },
  xl = T({
    __name: "RitualsModalContent",
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(a, { emit: b }) {
      const h = b,
        v = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Varies", value: 6 },
        ],
        c = [
          { label: "All", circle: "-", value: 0 },
          { label: "1st Circle", circle: "1", value: 1 },
          { label: "2nd Circle", circle: "2", value: 2 },
          { label: "3rd Circle", circle: "3", value: 3 },
          { label: "4th Circle", circle: "4", value: 4 },
        ],
        p = $(0),
        u = $(0),
        m = $(""),
        i = (o) => h("handleAddRitual", o),
        n = X(() =>
          p.value === 0
            ? u.value === 0
              ? Ie.filter((o) => J(o.name, m.value)).sort((o, l) =>
                  o.name.localeCompare(l.name)
                )
              : Ie.filter((o) => o.circle === c[u.value].circle)
                  .filter((o) => J(o.name, m.value))
                  .sort((o, l) => o.name.localeCompare(l.name))
            : u.value === 0
            ? p.value === 0
              ? Ie.filter((o) => J(o.name, m.value)).sort((o, l) =>
                  o.name.localeCompare(l.name)
                )
              : Ie.filter((o) => o.element === v[p.value].label)
                  .filter((o) => J(o.name, m.value))
                  .sort((o, l) => o.name.localeCompare(l.name))
            : Ie.filter((o) => o.element === v[p.value].label)
                .filter((o) => J(o.name, m.value))
                .filter((o) => o.circle === c[u.value].circle)
                .filter((o) => J(o.name, m.value))
        );
      return (o, l) => (
        s(),
        r("div", zl, [
          e("div", Hl, [
            C(
              pe,
              {
                "current-tab": p.value,
                "tab-options": v,
                onHandleNavigation: l[0] || (l[0] = (A) => (p.value = A)),
              },
              null,
              8,
              ["current-tab"]
            ),
            e("div", jl, [
              C(
                pe,
                {
                  "current-tab": u.value,
                  "tab-options": c,
                  secondary: "",
                  onHandleNavigation: l[1] || (l[1] = (A) => (u.value = A)),
                },
                null,
                8,
                ["current-tab"]
              ),
            ]),
            e("div", Ul, [
              C(
                $e,
                {
                  value: m.value,
                  dark: "",
                  onUpdate: l[2] || (l[2] = (A) => (m.value = A)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            n.value.length > 0
              ? (s(),
                r("div", Nl, [
                  (s(!0),
                  r(
                    U,
                    null,
                    B(
                      n.value,
                      (A) => (
                        s(),
                        r("div", { key: A.name, class: "class-rituals-card" }, [
                          C(Ro, { ritual: A, onHandleAdd: i }, null, 8, [
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
  Bl = V(xl, [["__scopeId", "data-v-46739282"]]),
  et = (a) => (H("data-v-13a40b03"), (a = a()), j(), a),
  Ll = { class: "modal-content modal-width" },
  Fl = { class: "modal-header" },
  Ql = et(() => e("h2", null, "Add Rituals", -1)),
  Gl = et(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  Xl = [Gl],
  Wl = { class: "modal-body modal-height" },
  Kl = T({
    __name: "RitualsModal",
    props: { character: {} },
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(a, { emit: b }) {
      const h = b,
        v = [Bl, Is],
        c = [
          { label: "Rituals", value: 0 },
          { label: "My Rituals", value: 1 },
        ],
        p = $(0),
        u = (i) => (p.value = i),
        m = (i) => h("handleAddRitual", i);
      return (i, n) => (
        s(),
        r("div", Ll, [
          e("div", Fl, [
            Ql,
            e(
              "button",
              { onClick: n[0] || (n[0] = (o) => i.$emit("handleCloseModal")) },
              Xl
            ),
          ]),
          e("div", Wl, [
            C(
              fa,
              { value: p.value, options: c, onHandleNavigation: u },
              null,
              8,
              ["value"]
            ),
            (s(),
            x(
              Be,
              null,
              [
                (s(),
                x(
                  _e(v[p.value]),
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
  Jl = V(Kl, [["__scopeId", "data-v-13a40b03"]]),
  Yl = (a) => (H("data-v-25deaea6"), (a = a()), j(), a),
  Zl = { class: "modal-content modal-width" },
  eu = { class: "modal-header" },
  au = Yl(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  ou = [au],
  tu = { class: "modal-body" },
  su = ["innerHTML"],
  nu = T({
    __name: "SkillModal",
    props: { skill: {} },
    emits: ["handleCloseModal"],
    setup(a) {
      return (b, h) => (
        s(),
        r("div", Zl, [
          e("div", eu, [
            e("h2", null, w(b.skill.name), 1),
            e(
              "button",
              { onClick: h[0] || (h[0] = (v) => b.$emit("handleCloseModal")) },
              ou
            ),
          ]),
          e("div", tu, [
            e(
              "div",
              { class: "description", innerHTML: b.skill.description },
              null,
              8,
              su
            ),
          ]),
        ])
      );
    },
  }),
  ru = V(nu, [["__scopeId", "data-v-25deaea6"]]),
  ae = (a) => (H("data-v-ad846a05"), (a = a()), j(), a),
  du = { class: "form-container" },
  iu = { class: "input-container" },
  lu = ae(() => e("div", { class: "label" }, " Name* ", -1)),
  uu = { class: "input-row" },
  cu = { class: "input-container" },
  mu = ae(() => e("div", { class: "label" }, " Damage* ", -1)),
  pu = { class: "input-container" },
  vu = ae(() => e("div", { class: "label" }, " Critical* ", -1)),
  hu = { class: "input-container" },
  gu = ae(() => e("div", { class: "label" }, " Multiplier* ", -1)),
  fu = { class: "input-row" },
  bu = { class: "input-container" },
  Au = ae(() => e("div", { class: "label" }, " Attack Bonus ", -1)),
  Cu = { class: "input-container" },
  qu = ae(() => e("div", { class: "label" }, " Damage Type ", -1)),
  yu = { class: "input-row" },
  ku = { class: "input-container" },
  $u = ae(() => e("div", { class: "label" }, " Range ", -1)),
  Eu = { class: "input-container" },
  Su = ae(() => e("div", { class: "label" }, " Skill ", -1)),
  Iu = { class: "input-container" },
  Pu = ae(() => e("div", { class: "label" }, " Damage Attribute ", -1)),
  Mu = { class: "title-container" },
  _u = ae(() => e("div", { class: "title" }, " Extra ", -1)),
  Du = { class: "input-row" },
  Ru = { class: "input-container" },
  Tu = ae(() => e("div", { class: "label" }, " Damage* ", -1)),
  Vu = ["onUpdate:modelValue"],
  Ou = { class: "input-container" },
  wu = ae(() => e("div", { class: "label" }, " Type* ", -1)),
  zu = { class: "button-remove-container" },
  Hu = ["onClick"],
  ju = ae(() =>
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
  Uu = ae(() =>
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
  Nu = { class: "buttons-container" },
  xu = ["disabled"],
  Bu = T({
    __name: "AttackForm",
    props: { attack: { type: Object, default: Me }, addMode: Boolean },
    emits: ["handleClose", "handleEditAttack"],
    setup(a, { emit: b }) {
      const h = a,
        v = b,
        c = [
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
        u = [
          "Fighting",
          "Marksmanship",
          "Occultism",
          "Deception",
          "Arts",
          "Technology",
        ],
        m = ["None", "Agility", "Strength", "Intellect", "Presence", "Vigor"],
        i = $(je.clone(h.attack)),
        n = X(
          () =>
            i.value.name === "" ||
            i.value.damage === "" ||
            i.value.criticalRange.toString() === "" ||
            i.value.criticalMult.toString() === ""
        ),
        o = () => {
          ko.isArray(i.value.aditionalDamage) || (i.value.aditionalDamage = []),
            i.value.aditionalDamage.push({
              id: Ue(),
              value: "1d6",
              damageType: "Ballistic",
            });
        },
        l = (_) => {
          if (!ko.isArray(i.value.aditionalDamage)) return;
          const f = i.value.aditionalDamage.findIndex((y) => y.id === _);
          i.value.aditionalDamage.splice(f, 1);
        },
        A = () => {
          (i.value = je.clone(Me)), v("handleClose");
        },
        M = () => {
          if (n.value) return;
          Ts(i.value);
          const _ = { attack: i.value };
          v("handleEditAttack", _), (i.value = je.clone(Me));
        };
      return (_, f) => {
        const y = ma("p-editor");
        return (
          s(),
          r(
            U,
            null,
            [
              e("div", du, [
                e("div", iu, [
                  lu,
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
                e("div", uu, [
                  e("div", cu, [
                    mu,
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
                  e("div", pu, [
                    vu,
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
                  e("div", hu, [
                    gu,
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
                e("div", fu, [
                  e("div", bu, [
                    Au,
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
                  e("div", Cu, [
                    qu,
                    C(
                      ye,
                      {
                        value: i.value.damageType,
                        options: c,
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
                e("div", yu, [
                  e("div", ku, [
                    $u,
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
                  e("div", Eu, [
                    Su,
                    C(
                      ye,
                      {
                        value: i.value.skillUsed,
                        options: u,
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
                  e("div", Iu, [
                    Pu,
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
                e("div", Mu, [
                  _u,
                  e(
                    "button",
                    {
                      class: "button-secondary",
                      onClick: f[9] || (f[9] = (D) => o()),
                    },
                    " Add "
                  ),
                ]),
                (s(!0),
                r(
                  U,
                  null,
                  B(
                    i.value.aditionalDamage,
                    (D) => (
                      s(),
                      r("div", { key: D.id }, [
                        e("div", Du, [
                          e("div", Ru, [
                            Tu,
                            be(
                              e(
                                "input",
                                {
                                  "onUpdate:modelValue": (F) => (D.value = F),
                                  type: "text",
                                  class: "input-primary dark",
                                },
                                null,
                                8,
                                Vu
                              ),
                              [[Ae, D.value]]
                            ),
                          ]),
                          e("div", Ou, [
                            wu,
                            C(
                              ye,
                              {
                                value: D.damageType,
                                options: c,
                                width: "7.5rem",
                                "content-width": "7.5rem",
                                "form-input": "",
                                onUpdateValue: (F) => (D.damageType = F),
                              },
                              null,
                              8,
                              ["value", "onUpdateValue"]
                            ),
                          ]),
                          e("div", zu, [
                            e(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: (F) => l(D.id),
                              },
                              " Remove ",
                              8,
                              Hu
                            ),
                          ]),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
                ju,
                C(
                  y,
                  {
                    modelValue: i.value.description,
                    "onUpdate:modelValue":
                      f[10] || (f[10] = (D) => (i.value.description = D)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: ke(() => [Uu]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", Nu, [
                e(
                  "button",
                  { class: "button-cancel", onClick: A },
                  " Cancel "
                ),
                e(
                  "button",
                  {
                    class: "button-primary big",
                    disabled: n.value,
                    onClick: M,
                  },
                  w(h.addMode ? "Add" : "Edit"),
                  9,
                  xu
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  }),
  at = V(Bu, [["__scopeId", "data-v-ad846a05"]]),
  ot = (a) => (H("data-v-6ad99d7a"), (a = a()), j(), a),
  Lu = { class: "modal-content modal-width" },
  Fu = { class: "modal-header" },
  Qu = ot(() => e("h2", null, "Editar", -1)),
  Gu = ot(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  Xu = [Gu],
  Wu = { class: "modal-body modal-height" },
  Ku = { key: 0 },
  Ju = { key: 1 },
  Yu = { key: 2 },
  Zu = { key: 3 },
  ec = { key: 0 },
  ac = { key: 1 },
  oc = { key: 2 },
  tc = { key: 3 },
  sc = T({
    __name: "EditModal",
    props: {
      currentEditOption: { type: Number, required: !0 },
      editPower: { type: Object, default: xo },
      editRitual: { type: Object, default: Bo },
      editItem: { type: Object, required: !0 },
      editAttack: { type: Object, default: Me },
    },
    emits: [
      "handleCloseModal",
      "handleEditPowerSheet",
      "handleEditRitualSheet",
      "handleEditItemSheet",
      "handleEditAttackSheet",
    ],
    setup(a, { emit: b }) {
      const h = b,
        v = { power: 0, ritual: 1, item: 2, attack: 3 },
        c = (i) => h("handleEditPowerSheet", i.power),
        p = (i) => h("handleEditRitualSheet", i.ritual),
        u = (i) => h("handleEditItemSheet", i.item),
        m = (i) => h("handleEditAttackSheet", i.attack);
      return (i, n) => (
        s(),
        r("div", Lu, [
          e("div", Fu, [
            Qu,
            e(
              "button",
              { onClick: n[0] || (n[0] = (o) => i.$emit("handleCloseModal")) },
              Xu
            ),
          ]),
          e("div", Wu, [
            a.currentEditOption === v.power
              ? (s(),
                r("div", Ku, [
                  C(
                    zo,
                    {
                      power: a.editPower,
                      edit: "",
                      sheet: "",
                      onHandleEditPower: c,
                      onHandleClose:
                        n[1] || (n[1] = (o) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === v.ritual
              ? (s(),
                r("div", Ju, [
                  C(
                    Ho,
                    {
                      ritual: a.editRitual,
                      edit: "",
                      sheet: "",
                      onHandleEditRitual: p,
                      onHandleClose:
                        n[2] || (n[2] = (o) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === v.attack
              ? (s(),
                r("div", Yu, [
                  C(
                    at,
                    {
                      attack: a.editAttack,
                      onHandleEditAttack: m,
                      onHandleClose:
                        n[3] || (n[3] = (o) => i.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : q("", !0),
            a.currentEditOption === v.item
              ? (s(),
                r("div", Zu, [
                  a.editItem.itemType === "weapon"
                    ? (s(),
                      r("div", ec, [
                        C(
                          jo,
                          {
                            weapon: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditWeapon: u,
                            onHandleClose:
                              n[4] ||
                              (n[4] = (o) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["weapon"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "protection"
                    ? (s(),
                      r("div", ac, [
                        C(
                          Uo,
                          {
                            protection: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditProtection: u,
                            onHandleClose:
                              n[5] ||
                              (n[5] = (o) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["protection"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "misc" ||
                  a.editItem.itemType === "ammunition"
                    ? (s(),
                      r("div", oc, [
                        C(
                          ua,
                          {
                            misc: a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditMisc: u,
                            onHandleClose:
                              n[6] ||
                              (n[6] = (o) => i.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["misc"]
                        ),
                      ]))
                    : q("", !0),
                  a.editItem.itemType === "cursedItem"
                    ? (s(),
                      r("div", tc, [
                        C(
                          No,
                          {
                            "cursed-item": a.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditCursedItem: u,
                            onHandleClose:
                              n[7] ||
                              (n[7] = (o) => i.$emit("handleCloseModal")),
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
  nc = V(sc, [["__scopeId", "data-v-6ad99d7a"]]),
  Qe = (a) => (H("data-v-6cd98f8c"), (a = a()), j(), a),
  rc = { key: 0, class: "row" },
  dc = Qe(() =>
    e("div", { class: "label" }, " Class for attribute calculation ", -1)
  ),
  ic = { class: "row" },
  lc = Qe(() =>
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
  uc = { class: "row" },
  cc = Qe(() =>
    e(
      "div",
      { class: "label" },
      " Allow the campaign DM to edit my character sheet ",
      -1
    )
  ),
  mc = { class: "row" },
  pc = Qe(() =>
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
  vc = T({
    __name: "SheetConfig",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleChangeStatsClass", "handleChangeEditPermissions"],
    setup(a, { emit: b }) {
      const h = b,
        v = ["OFF", "ON"],
        c = ["Combatant", "Specialist", "Occultist"],
        p = (m) => {
          h("handleChangeStatsClass", m);
        },
        u = (m, i) => {
          h("handleChangeEditPermissions", m, i);
        };
      return (m, i) => (
        s(),
        r(
          U,
          null,
          [
            a.character.statsClass !== "Mundane"
              ? (s(),
                r("div", rc, [
                  dc,
                  C(
                    ye,
                    {
                      value: a.character.statsClass,
                      options: c,
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
            e("div", ic, [
              lc,
              C(
                ra,
                {
                  value: a.character.private,
                  options: v,
                  onHandleChange: i[0] || (i[0] = (n) => u("private", n)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", uc, [
              cc,
              C(
                ra,
                {
                  value: a.character.canDMEdit,
                  options: v,
                  onHandleChange: i[1] || (i[1] = (n) => u("canDMEdit", n)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", mc, [
              pc,
              C(
                ra,
                {
                  value: a.character.canAnyoneEdit,
                  options: v,
                  onHandleChange: i[2] || (i[2] = (n) => u("canAnyoneEdit", n)),
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
  hc = V(vc, [["__scopeId", "data-v-6cd98f8c"]]),
  gc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAcklEQVR4Ae2VsRGAIBTFmMDOnXQ8Z2MDGCQ22JLjXmNBepJ7NL8ssQFuoDOhDJgwCzSELDBYXH0CNQ+4vMYBkZ9ZQOT2XgIuTwIuFySQyyXg8uCLRJ4GgMPl+YJH5FngWyLuLOD8KNDIadHBETpwlc0KLy8akHGKumHqAAAAAElFTkSuQmCC",
  se = (a) => (H("data-v-87004152"), (a = a()), j(), a),
  fc = { class: "row" },
  bc = ["onMouseup"],
  Ac = se(() => e("img", { src: gc }, null, -1)),
  Cc = se(() =>
    e(
      "div",
      { class: "link-eg" },
      " For OBS a resolution of 3400x1200 is recommended. It can be adjusted as needed. ",
      -1
    )
  ),
  qc = { class: "row" },
  yc = se(() =>
    e("div", { class: "label" }, " Color of dice results ", -1)
  ),
  kc = ["value"],
  $c = { class: "row" },
  Ec = se(() =>
    e("div", { class: "label" }, " Border color of dice results ", -1)
  ),
  Sc = ["value"],
  Ic = { class: "row" },
  Pc = se(() =>
    e("div", { class: "label" }, " Injured agent picture ", -1)
  ),
  Mc = { key: 0 },
  _c = ["src"],
  Dc = { key: 1 },
  Rc = se(() =>
    e(
      "img",
      { class: "profile-picture", src: De, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Tc = [Rc],
  Vc = { class: "row" },
  Oc = se(() =>
    e("div", { class: "label" }, " Dying agent picture ", -1)
  ),
  wc = { key: 0 },
  zc = ["src"],
  Hc = { key: 1 },
  jc = se(() =>
    e(
      "img",
      { class: "profile-picture", src: De, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Uc = [jc],
  Nc = { class: "row" },
  xc = se(() =>
    e("div", { class: "label" }, " Disturbed agent pictured ", -1)
  ),
  Bc = { key: 0 },
  Lc = ["src"],
  Fc = { key: 1 },
  Qc = se(() =>
    e(
      "img",
      { class: "profile-picture", src: De, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Gc = [Qc],
  Xc = { class: "row" },
  Wc = se(() =>
    e("div", { class: "label" }, " Going Crazy agent picture ", -1)
  ),
  Kc = { key: 0 },
  Jc = ["src"],
  Yc = { key: 1 },
  Zc = se(() =>
    e(
      "img",
      { class: "profile-picture", src: De, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  em = [Zc],
  am = { key: 0 },
  om = T({
    __name: "StreamConfig",
    props: { character: { type: Object, required: !0 } },
    emits: [
      "handleUpdateAlternativePicture",
      "handleChangeCharResultDiceColor",
      "handleChangeCharResultDiceBorderColor",
    ],
    setup(a, { emit: b }) {
      const h = a,
        v = b,
        c = $(!1),
        p = $(),
        u = (n) => {
          (p.value = n), (c.value = !c.value);
        },
        m = (n, o) => {
          (c.value = !c.value),
            v("handleUpdateAlternativePicture", p.value, n, o);
        },
        i = () => {
          window.open(
            "https://crisordemparanormal.com/agente/stream/" + h.character.id
          );
        };
      return (n, o) => {
        const l = ma("vue-final-modal");
        return (
          s(),
          r(
            U,
            null,
            [
              e("div", fc, [
                e(
                  "div",
                  {
                    class: "link",
                    onClick: i,
                    onMouseup: bo(i, ["middle"]),
                    onMousedown:
                      o[0] ||
                      (o[0] = bo(() => {}, ["middle", "prevent", "stop"])),
                  },
                  [me(" Access OBS portrait "), Ac],
                  40,
                  bc
                ),
                Cc,
              ]),
              e("div", qc, [
                yc,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: a.character.resultDiceColor || "#fff",
                    onBlur:
                      o[1] ||
                      (o[1] = (A) =>
                        n.$emit("handleChangeCharResultDiceColor", A)),
                  },
                  null,
                  40,
                  kc
                ),
              ]),
              e("div", $c, [
                Ec,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: a.character.resultDiceBorderColor || "#A347FF",
                    onBlur:
                      o[2] ||
                      (o[2] = (A) =>
                        n.$emit("handleChangeCharResultDiceBorderColor", A)),
                  },
                  null,
                  40,
                  Sc
                ),
              ]),
              e("div", Ic, [
                Pc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[3] || (o[3] = (A) => u("hurt")),
                  },
                  [
                    a.character.sheetPictureHurtURL
                      ? (s(),
                        r("div", Mc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureHurtURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            _c
                          ),
                        ]))
                      : (s(), r("div", Dc, Tc)),
                  ]
                ),
              ]),
              e("div", Vc, [
                Oc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[4] || (o[4] = (A) => u("dying")),
                  },
                  [
                    a.character.sheetPictureDyingURL
                      ? (s(),
                        r("div", wc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureDyingURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            zc
                          ),
                        ]))
                      : (s(), r("div", Hc, Uc)),
                  ]
                ),
              ]),
              e("div", Nc, [
                xc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[5] || (o[5] = (A) => u("disturbed")),
                  },
                  [
                    a.character.sheetPictureDisturbedURL
                      ? (s(),
                        r("div", Bc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureDisturbedURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Lc
                          ),
                        ]))
                      : (s(), r("div", Fc, Gc)),
                  ]
                ),
              ]),
              e("div", Xc, [
                Wc,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: o[6] || (o[6] = (A) => u("crazy")),
                  },
                  [
                    a.character.sheetPictureCrazyURL
                      ? (s(),
                        r("div", Kc, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: a.character.sheetPictureCrazyURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Jc
                          ),
                        ]))
                      : (s(), r("div", Yc, em)),
                  ]
                ),
              ]),
              c.value
                ? (s(),
                  r("div", am, [
                    C(
                      l,
                      {
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          o[8] || (o[8] = (A) => (c.value = A)),
                        classes: "modal-container",
                      },
                      {
                        default: ke(() => [
                          C(Lo, {
                            onHandleCloseModal:
                              o[7] || (o[7] = (A) => (c.value = !c.value)),
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
  tm = V(om, [["__scopeId", "data-v-87004152"]]),
  tt = (a) => (H("data-v-78a9772d"), (a = a()), j(), a),
  sm = { class: "modal-content modal-width" },
  nm = { class: "modal-header" },
  rm = tt(() => e("h2", null, "Config", -1)),
  dm = tt(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  im = [dm],
  lm = { class: "modal-body modal-height" },
  um = { key: 0, class: "content-container" },
  cm = { key: 1, class: "content-container" },
  mm = T({
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
      const h = b,
        v = [
          { label: "Sheet", value: 0 },
          { label: "Stream", value: 1 },
        ],
        c = $(0),
        p = (i) => {
          h("handleChangeStatsClass", i);
        },
        u = (i, n, o) => {
          h("handleUpdateAlternativePicture", i, n, o);
        },
        m = (i, n) => {
          h("handleChangeEditPermissions", i, n);
        };
      return (i, n) => (
        s(),
        r("div", sm, [
          e("div", nm, [
            rm,
            e(
              "button",
              { onClick: n[0] || (n[0] = (o) => i.$emit("handleCloseModal")) },
              im
            ),
          ]),
          e("div", lm, [
            C(
              pe,
              {
                "current-tab": c.value,
                "tab-options": v,
                onHandleNavigation: n[1] || (n[1] = (o) => (c.value = o)),
              },
              null,
              8,
              ["current-tab"]
            ),
            c.value === 0
              ? (s(),
                r("div", um, [
                  C(
                    hc,
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
            c.value === 1
              ? (s(),
                r("div", cm, [
                  C(
                    tm,
                    {
                      character: a.character,
                      onHandleUpdateAlternativePicture: u,
                      onHandleChangeCharResultDiceColor:
                        n[2] ||
                        (n[2] = (o) =>
                          i.$emit("handleChangeCharResultDiceColor", o)),
                      onHandleChangeCharResultDiceBorderColor:
                        n[3] ||
                        (n[3] = (o) =>
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
  pm = V(mm, [["__scopeId", "data-v-78a9772d"]]),
  st = (a) => (H("data-v-2b669bfc"), (a = a()), j(), a),
  vm = { class: "modal-content modal-width" },
  hm = { class: "modal-header" },
  gm = st(() => e("h2", null, "Choose new class", -1)),
  fm = st(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  bm = [fm],
  Am = { class: "modal-body modal-height" },
  Cm = { class: "content-container" },
  qm = { class: "add-class-description" },
  ym = { class: "classes-container" },
  km = { class: "classes-flex" },
  $m = T({
    __name: "AddClassModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal", "handleAddClass"],
    setup(a, { emit: b }) {
      const h = b,
        v = (c) => h("handleAddClass", c);
      return (c, p) => (
        s(),
        r("div", vm, [
          e("div", hm, [
            gm,
            e(
              "button",
              { onClick: p[0] || (p[0] = (u) => c.$emit("handleCloseModal")) },
              bm
            ),
          ]),
          e("div", Am, [
            e("div", Cm, [
              e(
                "div",
                qm,
                " To increase your " +
                  w(a.character.isSobrevivendoAoHorror ? "level" : "PEX") +
                  ", choose a new class ",
                1
              ),
              e("div", ym, [
                e("div", km, [
                  (s(!0),
                  r(
                    U,
                    null,
                    B(
                      L(Pe),
                      (u) => (
                        s(),
                        r("div", { key: u.name }, [
                          C(
                            $s,
                            { "char-class": u, onHandleAddClass: v },
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
  Em = V($m, [["__scopeId", "data-v-2b669bfc"]]),
  Sm = (a) => (H("data-v-be964fd1"), (a = a()), j(), a),
  Im = { class: "modal-content modal-width" },
  Pm = { class: "modal-header" },
  Mm = Sm(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  _m = [Mm],
  Dm = { class: "modal-body modal-height" },
  Rm = { key: 0 },
  Tm = { key: 1 },
  Vm = { key: 2 },
  Om = { key: 3 },
  wm = { key: 4 },
  zm = { key: 5 },
  Hm = { key: 6 },
  jm = { key: 7 },
  Um = T({
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
      const h = b,
        v = {
          attack: 0,
          power: 1,
          ritual: 2,
          weapon: 3,
          ammunition: 4,
          protection: 5,
          misc: 6,
          cursedItem: 7,
        },
        c = [
          "New Attack",
          "New Ability",
          "New Ritual",
          "New Weapon",
          "New Ammo",
          "New Armor",
          "New Item",
          "New Cursed Item",
        ],
        p = (n) => h("handleAddAttack", n.attack),
        u = (n) => h("handleAddPower", n.power),
        m = (n) => h("handleAddRitual", n.ritual),
        i = (n) => h("handleAddItem", n.item);
      return (n, o) => (
        s(),
        r("div", Im, [
          e("div", Pm, [
            e("h2", null, w(c[a.currentAddOption]), 1),
            e(
              "button",
              { onClick: o[0] || (o[0] = (l) => n.$emit("handleCloseModal")) },
              _m
            ),
          ]),
          e("div", Dm, [
            a.currentAddOption === v.attack
              ? (s(),
                r("div", Rm, [
                  C(
                    at,
                    {
                      attack: L(Me),
                      "add-mode": "",
                      onHandleEditAttack: p,
                      onHandleClose:
                        o[1] || (o[1] = (l) => n.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === v.power
              ? (s(),
                r("div", Tm, [
                  C(
                    zo,
                    {
                      power: L(xo),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditPower: u,
                      onHandleClose:
                        o[2] || (o[2] = (l) => n.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === v.ritual
              ? (s(),
                r("div", Vm, [
                  C(
                    Ho,
                    {
                      ritual: L(Bo),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditRitual: m,
                      onHandleClose:
                        o[3] || (o[3] = (l) => n.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === v.weapon
              ? (s(),
                r("div", Om, [
                  C(
                    jo,
                    {
                      weapon: L(Ps),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditWeapon: i,
                      onHandleClose:
                        o[4] || (o[4] = (l) => n.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["weapon"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === v.ammunition
              ? (s(),
                r("div", wm, [
                  C(
                    ua,
                    {
                      misc: L(Ms),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: i,
                      onHandleClose:
                        o[5] || (o[5] = (l) => n.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === v.protection
              ? (s(),
                r("div", zm, [
                  C(
                    Uo,
                    {
                      protection: L(_s),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditProtection: i,
                      onHandleClose:
                        o[6] || (o[6] = (l) => n.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["protection"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === v.misc
              ? (s(),
                r("div", Hm, [
                  C(
                    ua,
                    {
                      misc: L(Ds),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: i,
                      onHandleClose:
                        o[7] || (o[7] = (l) => n.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : q("", !0),
            a.currentAddOption === v.cursedItem
              ? (s(),
                r("div", jm, [
                  C(
                    No,
                    {
                      "cursed-item": L(Rs),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditCursedItem: i,
                      onHandleClose:
                        o[8] || (o[8] = (l) => n.$emit("handleCloseModal")),
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
  Nm = V(Um, [["__scopeId", "data-v-be964fd1"]]),
  ba = (a) => (H("data-v-15adeee7"), (a = a()), j(), a),
  xm = { class: "modal-content modal-width" },
  Bm = { class: "modal-header" },
  Lm = ba(() => e("h2", null, "Compartilhar", -1)),
  Fm = ba(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  Qm = [Fm],
  Gm = ba(() =>
    e("div", { class: "label" }, " Link to share agent ", -1)
  ),
  Xm = T({
    __name: "ShareModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal"],
    setup(a) {
      const h = "https://crisordemparanormal.com/agente/" + a.character.id;
      return (v, c) => (
        s(),
        r("div", xm, [
          e("div", Bm, [
            Lm,
            e(
              "button",
              { onClick: c[0] || (c[0] = (p) => v.$emit("handleCloseModal")) },
              Qm
            ),
          ]),
          e("div", { class: "modal-body modal-height" }, [
            e("div", { class: "share-container" }, [
              Gm,
              e("div", { class: "value" }, w(h)),
            ]),
          ]),
        ])
      );
    },
  }),
  Wm = V(Xm, [["__scopeId", "data-v-15adeee7"]]),
  Km =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAnUlEQVQ4jd3QsQ2CYBRF4X8A2QArE0ZgDyqXYA1bJ6BmABtqtrAzFtIREkuaz8pEBZGEWOjp3ss9ybsvhD9GrNRolOJ58daddoaiRCUWq1CORfAwXbAOIQRrXL4gTJ3khY+lx4QZb30+aQaLBBu5g6Mrzg5ym/diqn5tBWrpWDzTo1PYSqysJLYKHXrZUDhhLxrsIzucRptMsVz4SW5d6iOF5C1O7AAAAABJRU5ErkJggg==",
  nt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABm0lEQVRYw+2VsUqCYRSGj4M26eIgpoGLdQUaQeRsdA/WLDoVdAviNajw34CL5NSqv+HgKi1N1SCCNTno09DXx69WBJ5vCHy3s7yP/3fe8yqy078XEar0eeedPlUi2vYpRgQ1IqX761ftPxF6X0GF71TRA/jGskuaNF0z+XqAN2N5ICLCgZne9ABTpwByTJw9EQmaLMDJkglzzYyftG1MKTK2ZktaDBUPjSydgJlPXoQIZXoKVUGUGnNr/kyJkF4cQ5R4tuZzakQ12rFHmYgIeXuxAB2ymu04pMXSTmOK+u34pRnXhN20IyxoknDXjhNybttx6rp+FQHOn8j5kn+P6c3WMf3DoZ1rfMV6VRwzCCDvOBRtEeKSl0DZ1YnpQ2LUA3X9ypViXVvIoY0uwAMnIiKc0sDHp8mZBuSCx8BfpkdrJRQeexoxuLU3vylP57H28QLxXVVBayMnPBnLe4444t5MDb2l94xlRkSEjJkGeoCvA0yKiJDUBzSMZZs4cdr6T1RwumQRETxHMbWAvTWExqFtQM5oKlbFTur6AEfWlu1Qg1zXAAAAAElFTkSuQmCC",
  rt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABIUlEQVQ4y8XTvS6DARTG8YOEpWNJ8HbFgM0g4ipsBjfRxAV0MnakW5OquIKmw8vUiIWkl9DkrcnuY/gZ0E+kDYlnPDn/5JznPCfiH6ToU8XJgFoPqE0G3GLXPm6/b5qRajqwqOwVect4VbboQFNqZhg40tez84gIl14GqkeD7TkZKtpIrfXqG65x5wyZXB8ooWs+wrZZibqurrrEnM0ICx5Q6gOHntCyEiHx2BvjURJhRQtPDgeH2tFBNUIdDYlEA/UIVXTsjPp0jJMIGQoREQrIIpzgeNzY6YApR/pY+sbqhEsP2Lo1Yuus7QjzusO2vh/u1D2urPfqa1K0VUYONxKNFxcREc49fxONL8K3JP9j+MbivWf3x3j/7oGmfdE/1huxmbTYvNt7qgAAAABJRU5ErkJggg==",
  Re = (a) => (H("data-v-60e2e1d5"), (a = a()), j(), a),
  Jm = { class: "sheet-tools-container" },
  Ym = { key: 0 },
  Zm = { key: 0 },
  ep = { key: 0, class: "added-info" },
  ap = { key: 1 },
  op = Re(() => e("img", { src: Km, alt: "adicionar" }, null, -1)),
  tp = [op],
  sp = { key: 1, class: "sheet-tools-mobile-container" },
  np = { key: 0, class: "sheet-tools-buttons-container" },
  rp = Re(() => e("img", { src: nt, alt: "compartilhar" }, null, -1)),
  dp = [rp],
  ip = Re(() => e("img", { src: rt, alt: "configurações" }, null, -1)),
  lp = [ip],
  up = { key: 1, class: "share-mobile-container" },
  cp = Re(() => e("img", { src: nt, alt: "compartilhar" }, null, -1)),
  mp = [cp],
  pp = Re(() => e("img", { src: rt, alt: "configurações" }, null, -1)),
  vp = [pp],
  hp = T({
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
      const h = b,
        v = _o(),
        c = $(window.innerWidth),
        p = () => {
          h("handleShareSheet");
        },
        u = () => {
          h("handleAddAgent");
        };
      return (
        Ee(() => {
          window.addEventListener("resize", () => {
            c.value = window.innerWidth;
          });
        }),
        (m, i) => (
          s(),
          r("div", Jm, [
            a.disabledSheet
              ? (s(),
                r("div", Ym, [
                  L(v).currentUser
                    ? (s(),
                      r("div", Zm, [
                        a.charAdded
                          ? (s(),
                            r("div", ep, " Agent added to your coletion! "))
                          : (s(),
                            r("div", ap, [
                              e(
                                "button",
                                {
                                  class: "button-naked share-button",
                                  onClick: u,
                                },
                                tp
                              ),
                            ])),
                      ]))
                    : q("", !0),
                ]))
              : (s(),
                r("div", sp, [
                  c.value >= 1023
                    ? (s(),
                      r("div", np, [
                        e(
                          "button",
                          {
                            class: "customize-button",
                            onClick:
                              i[0] ||
                              (i[0] = (n) => m.$emit("handleOpenSkinsModal")),
                          },
                          " Customization "
                        ),
                        e(
                          "button",
                          { class: "button-naked share-button", onClick: p },
                          dp
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[1] ||
                              (i[1] = (n) => m.$emit("handleOpenConfig")),
                          },
                          lp
                        ),
                      ]))
                    : (s(),
                      r("div", up, [
                        e(
                          "button",
                          {
                            class: "customize-button",
                            onClick:
                              i[2] ||
                              (i[2] = (n) => m.$emit("handleOpenSkinsModal")),
                          },
                          " Customization "
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[3] ||
                              (i[3] = (n) => m.$emit("handleOpenShareModal")),
                          },
                          mp
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              i[4] ||
                              (i[4] = (n) => m.$emit("handleOpenConfig")),
                          },
                          vp
                        ),
                      ])),
                ])),
          ])
        )
      );
    },
  }),
  So = V(hp, [["__scopeId", "data-v-60e2e1d5"]]),
  Ge = (a) => (H("data-v-552e0b49"), (a = a()), j(), a),
  gp = { class: "sheet-header-container" },
  fp = { class: "profile-picture-container" },
  bp = ["disabled"],
  Ap = { key: 0 },
  Cp = ["src"],
  qp = { key: 1 },
  yp = { class: "header-info-container" },
  kp = { class: "header-info-row" },
  $p = { class: "info-line" },
  Ep = Ge(() => e("h3", null, "CHARACTER", -1)),
  Sp = ["disabled", "value"],
  Ip = { class: "info-line" },
  Pp = Ge(() => e("h3", null, "PLAYER", -1)),
  Mp = ["disabled", "value"],
  _p = { class: "header-info-row" },
  Dp = { class: "info-line" },
  Rp = Ge(() => e("h3", null, "BACKGROUND", -1)),
  Tp = ["disabled", "value"],
  Vp = { class: "info-line" },
  Op = Ge(() => e("h3", null, "CLASS", -1)),
  wp = ["disabled", "value"],
  zp = T({
    __name: "SheetHeader",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeCharHeaderText", "handleOpenChangePictureModal"],
    setup(a) {
      return (b, h) => (
        s(),
        r("div", gp, [
          e("div", fp, [
            e(
              "button",
              {
                class: "button-naked",
                disabled: b.disabledSheet,
                onClick:
                  h[0] ||
                  (h[0] = (v) => b.$emit("handleOpenChangePictureModal")),
              },
              [
                b.character.sheetPictureURL
                  ? (s(),
                    r("div", Ap, [
                      e(
                        "img",
                        {
                          class: Y([
                            "profile-picture",
                            { "disabled-picture": b.disabledSheet },
                          ]),
                          src: b.character.sheetPictureURL,
                          alt: "foto agente",
                        },
                        null,
                        10,
                        Cp
                      ),
                    ]))
                  : (s(),
                    r("div", qp, [
                      e(
                        "img",
                        {
                          class: Y([
                            "profile-picture",
                            { "disabled-picture": b.disabledSheet },
                          ]),
                          src: De,
                          alt: "foto agente em branco",
                        },
                        null,
                        2
                      ),
                    ])),
              ],
              8,
              bp
            ),
          ]),
          e("div", yp, [
            e("div", kp, [
              e("div", $p, [
                Ep,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: b.disabledSheet,
                    value: b.character.name,
                    onBlur:
                      h[1] ||
                      (h[1] = (v) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "name",
                        })),
                  },
                  null,
                  40,
                  Sp
                ),
              ]),
              e("div", Ip, [
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
                      h[2] ||
                      (h[2] = (v) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "player",
                        })),
                  },
                  null,
                  40,
                  Mp
                ),
              ]),
            ]),
            e("div", _p, [
              e("div", Dp, [
                Rp,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: b.disabledSheet,
                    value: b.character.backgroundName,
                    onBlur:
                      h[3] ||
                      (h[3] = (v) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "backgroundName",
                        })),
                  },
                  null,
                  40,
                  Tp
                ),
              ]),
              e("div", Vp, [
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
                      h[4] ||
                      (h[4] = (v) =>
                        b.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "className",
                        })),
                  },
                  null,
                  40,
                  wp
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Io = V(zp, [["__scopeId", "data-v-552e0b49"]]),
  dt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAYElEQVQ4y9WTwQmAQAwEtzvtwHIsVfDKUDM+T0FJIqfgvmfIPjbSJ6Gj4KXQV2EikrkKK7gtODBsD4W7Lu2EX1ey6wvthXSllMDAEh+fgYuf5m0AjPEHyuFSEpeS+MvZAZYijOCBAmQvAAAAAElFTkSuQmCC",
  it = (a) => (H("data-v-92e1679a"), (a = a()), j(), a),
  Hp = { class: "campaign-log-container" },
  jp = it(() => e("img", { src: dt, alt: "log" }, null, -1)),
  Up = [jp],
  Np = it(() => e("div", { class: "campaign-label" }, " Campaign: ", -1)),
  xp = { class: "campaign-title" },
  Bp = T({
    __name: "SheetCampaign",
    props: { campaign: {}, campaignLog: {}, disabledSheet: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(a) {
      const b = a,
        v = "https://crisordemparanormal.com/" + "campanha/" + b.campaign.id,
        c = $(window.innerWidth);
      Ee(() => {
        window.addEventListener("resize", () => {
          c.value = window.innerWidth;
        });
      });
      const p = () => {
        b.disabledSheet || window.open(v, "_blank");
      };
      return (u, m) => {
        var i;
        return (
          s(),
          r("div", Hp, [
            c.value >= 1023
              ? (s(),
                r(
                  "button",
                  {
                    key: 0,
                    class: "campaign-log-button",
                    onClick:
                      m[0] || (m[0] = (n) => u.$emit("handleOpenCampaignLog")),
                  },
                  Up
                ))
              : q("", !0),
            e(
              "a",
              {
                class: Y([
                  "campaign-nav-link",
                  { "campaign-nav-link-disabled": u.disabledSheet },
                ]),
                onClick: p,
              },
              [
                Np,
                e("div", xp, w((i = u.campaign) == null ? void 0 : i.name), 1),
              ],
              2
            ),
          ])
        );
      };
    },
  }),
  Po = V(Bp, [["__scopeId", "data-v-92e1679a"]]),
  Lp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAHUlEQVQ4y2NgGEbgPxTgYw92DaOhNBpKQyeUaAYAFbUe8L2r+g4AAAAASUVORK5CYII=",
  lt = (a) => (H("data-v-b0056160"), (a = a()), j(), a),
  Fp = lt(() =>
    e("img", { class: "apps-img", src: Lp, alt: "fechar" }, null, -1)
  ),
  Qp = [Fp],
  Gp = lt(() =>
    e("img", { class: "apps-img", src: te, alt: "fechar" }, null, -1)
  ),
  Xp = [Gp],
  Wp = { class: "apps-options" },
  Kp = ["onClick"],
  Jp = T({
    __name: "SheetMobileNav",
    emits: ["handleMobileNav"],
    setup(a) {
      const b = $(!1),
        h = [
          "INFORMATIONS",
          "DESCRIPTION",
          "ATTRIBUTES",
          "SKILLS",
          "COMBAT",
          "INVENTORY",
          "ABILITIES",
          "RITUALS",
        ];
      return (v, c) => (
        s(),
        r(
          U,
          null,
          [
            b.value
              ? (s(),
                r(
                  "button",
                  {
                    key: 1,
                    class: "apps-button button-naked",
                    onClick: c[1] || (c[1] = (p) => (b.value = !b.value)),
                  },
                  Xp
                ))
              : (s(),
                r(
                  "button",
                  {
                    key: 0,
                    class: "apps-button button-naked",
                    onClick: c[0] || (c[0] = (p) => (b.value = !b.value)),
                  },
                  Qp
                )),
            b.value
              ? (s(),
                r(
                  "div",
                  {
                    key: 2,
                    class: "apps-container",
                    onClick: c[2] || (c[2] = (p) => (b.value = !b.value)),
                  },
                  [
                    e("div", Wp, [
                      (s(),
                      r(
                        U,
                        null,
                        B(h, (p, u) =>
                          e("div", { key: u }, [
                            e(
                              "button",
                              {
                                class: "nav-option-button",
                                onClick: (m) => v.$emit("handleMobileNav", u),
                              },
                              w(p),
                              9,
                              Kp
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
  Yp = V(Jp, [["__scopeId", "data-v-b0056160"]]),
  ut = (a) => (H("data-v-f968449f"), (a = a()), j(), a),
  Zp = ut(() => e("img", { src: dt, alt: "log" }, null, -1)),
  ev = [Zp],
  av = ut(() => e("img", { src: te, alt: "close-log" }, null, -1)),
  ov = [av],
  tv = T({
    __name: "SheetLogButtonMobile",
    props: { campaignLogOpen: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(a) {
      return (b, h) =>
        b.campaignLogOpen
          ? (s(),
            r(
              "button",
              {
                key: 1,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  h[1] || (h[1] = (v) => b.$emit("handleOpenCampaignLog")),
              },
              ov
            ))
          : (s(),
            r(
              "button",
              {
                key: 0,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  h[0] || (h[0] = (v) => b.$emit("handleOpenCampaignLog")),
              },
              ev
            ));
    },
  }),
  sv = V(tv, [["__scopeId", "data-v-f968449f"]]),
  nv = { class: "skin-img-container" },
  rv = ["src", "alt"],
  dv = { class: "label" },
  iv = T({
    __name: "SkinOption",
    props: { character: {}, skinDice: {} },
    setup(a) {
      const b = a,
        h = X(() =>
          b.character.skinDice
            ? b.character.skinDice.label === b.skinDice.label
            : !1
        );
      return (v, c) => (
        s(),
        r(
          "div",
          { class: Y(["skin-option-container", { "skin-selected": h.value }]) },
          [
            e("div", nv, [
              e(
                "img",
                {
                  src: v.skinDice.img,
                  alt: v.skinDice.label,
                  class: "skin-img",
                },
                null,
                8,
                rv
              ),
            ]),
            e("div", dv, w(v.skinDice.label), 1),
          ],
          2
        )
      );
    },
  }),
  ia = V(iv, [["__scopeId", "data-v-694b426f"]]),
  Te = (a) => (H("data-v-8e69620b"), (a = a()), j(), a),
  lv = { class: "modal-content modal-width" },
  uv = { class: "modal-header" },
  cv = Te(() => e("h2", null, "Skins de Dados", -1)),
  mv = Te(() =>
    e("img", { class: "close-icon", src: te, alt: "fechar" }, null, -1)
  ),
  pv = [mv],
  vv = { class: "modal-body modal-height" },
  hv = { class: "skins-container" },
  gv = Te(() => e("div", { class: "skins-title" }, " Colors ", -1)),
  fv = { class: "skins-options" },
  bv = { class: "skins-container" },
  Av = Te(() => e("div", { class: "skins-title" }, " Elements ", -1)),
  Cv = { class: "skins-options" },
  qv = { class: "skins-container" },
  yv = Te(() => e("div", { class: "skins-title" }, " Pride ", -1)),
  kv = { class: "skins-options" },
  $v = T({
    __name: "SkinsModal",
    props: { character: {} },
    emits: ["handleChangeDiceSkin", "handleCloseModal"],
    setup(a, { emit: b }) {
      const h = b,
        v = (c) => h("handleChangeDiceSkin", c);
      return (c, p) => (
        s(),
        r("div", lv, [
          e("div", uv, [
            cv,
            e(
              "button",
              { onClick: p[0] || (p[0] = (u) => c.$emit("handleCloseModal")) },
              pv
            ),
          ]),
          e("div", vv, [
            e("div", hv, [
              gv,
              e("div", fv, [
                (s(!0),
                r(
                  U,
                  null,
                  B(
                    L(Fo),
                    (u) => (
                      s(),
                      x(
                        ia,
                        {
                          key: u.label,
                          "skin-dice": u,
                          character: c.character,
                          onClick: (m) => v(u),
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
            e("div", bv, [
              Av,
              e("div", Cv, [
                (s(!0),
                r(
                  U,
                  null,
                  B(
                    L(Os),
                    (u) => (
                      s(),
                      x(
                        ia,
                        {
                          key: u.label,
                          "skin-dice": u,
                          character: c.character,
                          onClick: (m) => v(u),
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
            e("div", qv, [
              yv,
              e("div", kv, [
                (s(!0),
                r(
                  U,
                  null,
                  B(
                    L(ws),
                    (u) => (
                      s(),
                      x(
                        ia,
                        {
                          key: u.label,
                          "skin-dice": u,
                          character: c.character,
                          onClick: (m) => v(u),
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
  Ev = V($v, [["__scopeId", "data-v-8e69620b"]]),
  Sv = (a) => (H("data-v-1cb432dd"), (a = a()), j(), a),
  Iv = { key: 0 },
  Pv = { key: 0, class: "private-sheet" },
  Mv = Sv(() => e("h1", null, "Private sheet", -1)),
  _v = { key: 1 },
  Dv = { key: 0 },
  Rv = { class: "sheet-wrapper" },
  Tv = { class: "sheet-header" },
  Vv = { class: "character-sheet" },
  Ov = { class: "sheet-stats" },
  wv = { class: "sheet-skills" },
  zv = { class: "sheet-tab" },
  Hv = { key: 1 },
  jv = { key: 0, class: "mobile-container" },
  Uv = { key: 1, class: "mobile-container" },
  Nv = { key: 2, class: "mobile-container" },
  xv = { key: 3, class: "mobile-container" },
  Bv = { key: 4, class: "mobile-container" },
  Lv = { key: 5, class: "mobile-container" },
  Fv = { key: 6, class: "mobile-container" },
  Qv = { key: 7, class: "mobile-container" },
  Gv = { key: 2 },
  Xv = { key: 1 },
  Wv = T({
    __name: "CharacterSheet",
    setup(a) {
      const { play: b } = Kt(Zt),
        h = [pl, wl, Jl, ru, nc, Lo, pm, Wm, Em, Nm, Ev],
        v = {
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
        c = { power: 0, ritual: 1, item: 2, attack: 3 },
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
        u = _o(),
        m = Tt(),
        i = xt(),
        n = Vt(),
        o = Ot(),
        l = n.params.id,
        A = $(0),
        M = $(!0),
        _ = $(),
        f = $(),
        y = $(),
        D = $(),
        F = $(),
        ve = $(),
        t = $(es),
        S = $(0),
        k = $(!0),
        O = $(!1),
        he = $(!1),
        E = $(!1),
        Z = $(window.innerWidth),
        ne = $(0),
        Xe = $(),
        Ce = $(),
        N = $({ message: "", type: "", alive: !1, timeout: 0 }),
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
        Q = $(!1),
        G = $(0),
        Se = $(0),
        Aa = $(0),
        Ca = $();
      Ee(async () => {
        var I;
        window.addEventListener("resize", () => {
          Z.value = window.innerWidth;
        });
        const d = await ea(de(m, "characters", l));
        d.data() || o.push({ name: "not-found" }),
          u.currentUser &&
            (S.value = await zs((I = u.currentUser) == null ? void 0 : I.uid)),
          (t.value = d.data()),
          (t.value.id = d == null ? void 0 : d.id);
        let g = !1;
        if (
          (t.value.campaignDocId === void 0 &&
            ((t.value.campaignDocId = ""), (g = !0)),
          !t.value.currentItemsLimit)
        ) {
          const R = { I: 0, II: 0, III: 0, IV: 0 };
          (t.value.currentItemsLimit = R), (g = !0);
        }
        if (
          (t.value.peTurn || ((t.value.peTurn = Jt[t.value.nex]), (g = !0)),
          t.value.deathMarks === void 0 &&
            ((t.value.deathMarks = [!1, !1, !1]),
            (t.value.madnessMarks = [!1, !1, !1]),
            (t.value.deathMode = !1),
            (t.value.madnessMode = !1),
            (g = !0)),
          t.value.sheetPictureURL ||
            ((t.value.sheetPictureURL = ""),
            (t.value.sheetPictureFullPath = ""),
            (g = !0)),
          t.value.campaignDocId === void 0 &&
            ((t.value.campaignDocId = ""), (g = !0)),
          t.value.statsClass ||
            (t.value.className === "Combatant" ||
            t.value.className === "Specialist" ||
            t.value.className === "Occultist"
              ? (t.value.statsClass = t.value.className)
              : (t.value.statsClass = "Combatant"),
            (g = !0)),
          t.value.description.anotation ||
            ((t.value.description.anotation = ""), (g = !0)),
          t.value.canDMEdit === void 0 && ((t.value.canDMEdit = !0), (g = !0)),
          t.value.canAnyoneEdit === void 0 &&
            ((t.value.canAnyoneEdit = !1), (g = !0)),
          t.value.private === void 0 && ((t.value.private = !1), (g = !0)),
          (t.value.block === void 0 || t.value.block === null) &&
            ((t.value.block = t.value.skills[9].bonus), (g = !0)),
          (t.value.evade === void 0 || t.value.evade === null) &&
            ((t.value.evade =
              10 +
              t.value.attributes.dex +
              t.value.protectionDefense +
              t.value.bonusDefense +
              t.value.skills[22].bonus),
            (g = !0)),
          t.value.resistencias === void 0 &&
            ((t.value.resistencias = {}), (g = !0)),
          t.value.imunidades === void 0 &&
            ((t.value.imunidades = []), (g = !0)),
          t.value.vulnerabilidades === void 0 &&
            ((t.value.vulnerabilidades = []), (g = !0)),
          t.value.skinDice === void 0 && (t.value.skinDice = Fo[0]),
          t.value.maxPd === void 0)
        ) {
          if (t.value.statsClass === "Mundane")
            (t.value.maxPd = 4 + t.value.attributes.pre),
              (t.value.currentPd = 2);
          else {
            const R = Pe.find((ee) => ee.name === t.value.statsClass);
            if (!R) return;
            (t.value.maxPd = R.initialPd + t.value.attributes.pre),
              (t.value.currentPd = t.value.maxPd);
            const z = la[t.value.nex];
            if (z >= 2) {
              const ee = (R.levelPd + t.value.attributes.pre) * (z - 1);
              (t.value.maxPd += ee), (t.value.currentPd += ee);
            }
          }
          g = !0;
        }
        if (
          (t.value.nexString === void 0 &&
            ((t.value.nexString = t.value.nex.toString()),
            t.value.statsClass === "Mundane" && (t.value.nexString = "0%"),
            (g = !0)),
          t.value.pdMode === void 0 && ((t.value.pdMode = !1), (g = !0)),
          t.value.pdMarks === void 0 &&
            ((t.value.pdMarks = [!1, !1, !1]), (g = !0)),
          g && (await aa(de(m, "characters", t.value.id), t.value)),
          t.value.campaignDocId)
        ) {
          const R = await ea(de(m, "campaigns", t.value.campaignDocId));
          R.data() &&
            ((_.value = R.data()),
            (_.value.id = R.id),
            (Ce.value = oa(
              de(m, "campaignLogs", _.value.campaignLogId),
              (z) => {
                z.data() &&
                  ((f.value = z.data()),
                  (f.value.id = z.id),
                  A.value < 2 && A.value++);
              }
            )));
        }
        Xe.value = oa(de(m, "characters", l), (R) => {
          var z, ee, re, qe;
          R.data() || o.push({ name: "not-found" }),
            (t.value = R.data()),
            (t.value.id = R == null ? void 0 : R.id),
            t.value.canAnyoneEdit ? (k.value = !1) : (k.value = !0),
            t.value.uid !==
              ((z = u == null ? void 0 : u.currentUser) == null
                ? void 0
                : z.uid) && (t.value.private ? (O.value = !0) : (O.value = !1)),
            t.value.campaignDocId &&
              _.value &&
              _.value.uid ===
                ((ee = u == null ? void 0 : u.currentUser) == null
                  ? void 0
                  : ee.uid) &&
              ((O.value = !1),
              t.value.canDMEdit ? (k.value = !1) : (k.value = !0)),
            t.value.uid ===
              ((re = u == null ? void 0 : u.currentUser) == null
                ? void 0
                : re.uid) && ((O.value = !1), (k.value = !1)),
            ((qe = u == null ? void 0 : u.currentUser) != null && qe.uid) ||
              (k.value = !0),
            A.value < 2 && A.value++;
        });
      }),
        wt(() => {
          Xe.value && Xe.value(), Ce.value && Ce.value();
        }),
        fe(A, () => {
          t.value &&
            M.value !== !1 &&
            (t.value.campaignDocId
              ? A.value >= 2 && (M.value = !1)
              : A.value >= 1 && (M.value = !1));
        }),
        fe(
          () => t.value.campaignDocId,
          async () => {
            if (t.value && !M.value)
              if (t.value.campaignDocId === "")
                (_.value = void 0), (f.value = void 0), Ce.value && Ce.value();
              else {
                const d = await ea(de(m, "campaigns", t.value.campaignDocId));
                d.data() &&
                  ((_.value = d.data()),
                  (Ce.value = oa(
                    de(m, "campaignLogs", _.value.campaignLogId),
                    (g) => {
                      g.data() && ((f.value = g.data()), (f.value.id = g.id));
                    }
                  )));
              }
          }
        );
      const P = () => {
          k.value || aa(de(m, "characters", t.value.id), t.value);
        },
        Oe = () => {
          (N.value.alive = !1), clearTimeout(N.value.timeout);
        },
        le = () => (ge.value.alive = !1),
        ue = () => (Ve.value.alive = !1),
        We = (d, g) => {
          le(),
            ue(),
            (d.message = `${g} added`),
            (d.type = "info"),
            (d.alive = !0);
        },
        we = (d) => {
          le(),
            ue(),
            (d.message = "Incorrect value on dice"),
            (d.type = "error"),
            (d.alive = !0);
        },
        Ke = (d, g, I, R, z) => {
          Oe(),
            ue(),
            (d.title = g),
            (d.total = I),
            (d.output = R),
            (d.notation = z),
            (d.skinDice = t.value.skinDice),
            ho(d, "roll"),
            go(d, "roll"),
            E.value || (d.alive = !0);
        },
        ct = (d, g, I, R, z, ee, re, qe, _t, Dt) => {
          Oe(),
            le(),
            (d.title = g),
            (d.totalAttack = I),
            (d.totalDamage = R),
            (d.critical = z),
            (d.attackTooltip = ee),
            (d.damageTooltip = re),
            (d.attackRollTooltip = qe),
            (d.damageRollTooltip = _t),
            (d.criticalTooltip = Dt),
            (d.skinDice = t.value.skinDice),
            ho(d, "attackRoll"),
            go(d, "attackRoll"),
            E.value || (d.alive = !0);
        },
        qa = (d) => {
          const g = d.e.target.value;
          (t.value[d.key] = g.trim()), P();
        },
        ya = (d) => {
          const g = d.e.target.value;
          (t.value[d.key] = g.trim()), P();
        },
        ka = (d) => {
          const g = d.e.target.valueAsNumber;
          qo(t.value, g, d.key), P();
        },
        $a = (d, g) => {
          qo(t.value, d, g), P();
        },
        Ea = (d) => {
          const g = d.e.target.valueAsNumber;
          as(t.value, g, d.key), P();
        },
        Sa = (d) => {
          const g = t.value.nex;
          (t.value[d.key] = d.value), os(t.value, g), P();
        },
        Ia = (d) => {
          const g = d.target.valueAsNumber;
          ts(t.value, g), P();
        },
        Pa = (d) => {
          try {
            const g = ss[d],
              I = ns(t.value, d),
              R = sa(I.output),
              z = na(I.output);
            Ke(ge.value, g, I.total, R, z), b();
          } catch {
            we(N.value);
          }
        },
        Ma = (d, g) => {
          d === "pv" && (t.value.deathMarks[g] = !t.value.deathMarks[g]),
            d === "san" && (t.value.madnessMarks[g] = !t.value.madnessMarks[g]),
            d === "pd" && (t.value.pdMarks[g] = !t.value.pdMarks[g]),
            P();
        },
        _a = (d) => {
          d === "pv" && (t.value.deathMode = !0),
            d === "san" && (t.value.madnessMode = !0),
            d === "pd" && (t.value.pdMode = !0),
            P();
        },
        Da = (d) => {
          d === "pv" &&
            ((t.value.deathMarks = [!1, !1, !1]),
            (t.value.deathMode = !1),
            t.value.currentPv === 0 && (t.value.currentPv = 1)),
            d === "san" &&
              ((t.value.madnessMarks = [!1, !1, !1]),
              (t.value.madnessMode = !1),
              t.value.currentSan === 0 && (t.value.currentSan = 1)),
            d === "pd" &&
              ((t.value.pdMarks = [!1, !1, !1]),
              (t.value.pdMode = !1),
              t.value.currentPd === 0 && (t.value.currentPd = 1)),
            P();
        },
        Ra = () => {
          (G.value = v.addClass), (Q.value = !0);
        },
        Ta = (d) => {
          (Ca.value = d), (G.value = v.skill), (Q.value = !0);
        },
        Va = () => {
          (G.value = v.config), (Q.value = !0);
        },
        mt = () => {
          (G.value = v.share), (Q.value = !0);
        },
        Oa = (d) => {
          const g = t.value.skills.findIndex((I) => I.name === d.skillName);
          (t.value.skills[g][d.key] = d.value), yo(t.value, d.skillName), P();
        },
        wa = (d) => {
          rs(t.value, d.value, d.skillName), yo(t.value, d.skillName), P();
        },
        za = (d) => {
          try {
            const g = d.name,
              I = ds(t.value, d),
              R = sa(I.output),
              z = na(I.output);
            Ke(ge.value, g, I.total, R, z), b();
          } catch {
            we(N.value);
          }
        },
        Ha = () => {
          (G.value = v.abilities), (Q.value = !0);
        },
        ja = () => {
          (G.value = v.skins), (Q.value = !0);
        },
        Ua = () => {
          (G.value = v.rituals), (Q.value = !0);
        },
        Na = () => {
          (G.value = v.inventory), (Q.value = !0);
        },
        xa = () => {
          (G.value = v.picture), (Q.value = !0);
        },
        pt = (d) => {
          (d.id = Ue()), t.value.attacks.push(d), P(), oe();
        },
        Ba = (d) => {
          is(t.value, d), P();
        },
        Je = (d) => {
          const g = t.value.powers.findIndex((I) => I.id === d);
          g !== -1 && (t.value.powers.splice(g, 1), P());
        },
        La = (d) => {
          const g = t.value.rituals.findIndex((I) => I.id === d);
          t.value.rituals.splice(g, 1), P();
        },
        Fa = (d) => {
          ls(t.value, d), P();
        },
        Qa = (d) => {
          us(t.value, d), P();
        },
        Ga = (d) => {
          (t.value.description[d.key] = d.value), P();
        },
        Xa = (d) => {
          (t.value[d.key] = d.value), P();
        },
        Wa = (d) => {
          cs(t.value, d.value, d.key), P();
        },
        Ka = (d) => {
          ms(t.value, d.value, d.key), P();
        },
        Ye = (d = "1d20", g = "Resultado", I = !1) => {
          try {
            const R = g,
              z = ps(d || "1d20"),
              ee = sa(z.output),
              re = na(z.output);
            (ge.value.defaultColor = I), Ke(ge.value, R, z.total, ee, re), b();
          } catch {
            we(N.value);
          }
        },
        Ja = (d) => {
          try {
            const g = vs(t.value, d);
            ct(
              Ve.value,
              d.name,
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
            we(N.value);
          }
        },
        Ya = (d, g) => {
          g && Ye(g, d, !0);
        },
        Za = (d) => {
          const g = d.target.valueAsNumber;
          hs(t.value, g), P();
        },
        vt = (d) => {
          bs(t.value, d),
            We(N.value, d.name),
            P(),
            G.value === v.addModal && oe();
        },
        ht = (d) => {
          As(t.value, d),
            We(N.value, d.name),
            P(),
            G.value === v.addModal && oe();
        },
        gt = (d) => {
          Cs(t.value, d),
            We(N.value, d.name),
            P(),
            G.value === v.addModal && oe();
        },
        ft = (d, g) => {
          (t.value.sheetPictureURL = d),
            (t.value.sheetPictureFullPath = g),
            P(),
            oe();
        },
        bt = (d, g, I) => {
          d === "hurt" &&
            ((t.value.sheetPictureHurtURL = g),
            (t.value.sheetPictureHurtFullPathL = I),
            P()),
            d === "dying" &&
              ((t.value.sheetPictureDyingURL = g),
              (t.value.sheetPictureDyingFullPathL = I),
              P()),
            d === "disturbed" &&
              ((t.value.sheetPictureDisturbedURL = g),
              (t.value.sheetPictureDisturbedFullPathL = I),
              P()),
            d === "crazy" &&
              ((t.value.sheetPictureCrazyURL = g),
              (t.value.sheetPictureCrazyFullPathL = I),
              P());
        },
        At = (d) => {
          const g = d.target.value;
          (t.value.resultDiceColor = g), P();
        },
        Ct = (d) => {
          const g = d.target.value;
          (t.value.resultDiceBorderColor = g), P();
        },
        qt = (d, g) => {
          (t.value[d] = g), P();
        },
        yt = (d) => {
          (t.value.skinDice = d), P();
        },
        kt = (d) => {
          (t.value.statsClass = d), P();
        },
        ce = (d) => {
          (G.value = v.addModal), (Aa.value = d), (Q.value = !0);
        },
        eo = () => ce(p.attack),
        ao = () => ce(p.power),
        oo = () => ce(p.ritual),
        to = () => ce(p.weapon),
        so = () => ce(p.ammunition),
        no = () => ce(p.protection),
        ro = () => ce(p.misc),
        io = () => ce(p.cursedItem),
        lo = (d) => {
          (G.value = v.edit),
            (Se.value = c.attack),
            (Q.value = !0),
            (y.value = d);
        },
        uo = (d) => {
          (G.value = v.edit),
            (Se.value = c.power),
            (Q.value = !0),
            (D.value = d);
        },
        co = (d) => {
          (G.value = v.edit),
            (Se.value = c.ritual),
            (Q.value = !0),
            (F.value = d);
        },
        mo = (d) => {
          (G.value = v.edit),
            (Se.value = c.item),
            (Q.value = !0),
            (ve.value = d);
        },
        $t = (d) => {
          const g = t.value.attacks.findIndex((I) => I.id === d.id);
          (t.value.attacks[g] = d), P(), oe();
        },
        Et = (d) => {
          const g = t.value.powers.findIndex((I) => I.id === d.id);
          (t.value.powers[g] = d), P(), oe();
        },
        St = (d) => {
          const g = t.value.rituals.findIndex((I) => I.id === d.id);
          (t.value.rituals[g] = d), P(), oe();
        },
        It = (d) => {
          qs(t.value, d), P(), oe();
        },
        Pt = (d) => {
          ys(t.value, d),
            t.value.mundanoRemoveSkill && Je(t.value.mundanoRemoveSkill),
            P(),
            oe();
        },
        oe = () => (Q.value = !1),
        po = async () => {
          await navigator.clipboard.writeText(
            "https://crisordemparanormal.com/agente/" + t.value.id
          ),
            le(),
            ue(),
            (N.value.message = "Link copied"),
            (N.value.type = "info"),
            (N.value.alive = !0);
        },
        vo = async () => {
          var g, I;
          if (!((g = u.currentUser) != null && g.email) || he.value) return;
          if (S.value < 3) {
            const R = Ao(m, "characters"),
              z = zt(
                R,
                Ht("uid", "==", (I = u.currentUser) == null ? void 0 : I.uid)
              );
            if ((await jt(z)).size >= Hs) {
              le(),
                ue(),
                (N.value.message = "Agent limit reached!"),
                (N.value.type = "error"),
                (N.value.alive = !0);
              return;
            }
          }
          he.value = !0;
          const d = je.cloneDeep(t.value);
          if (
            ((d.uid = u.currentUser.uid),
            (d.timestamp = Ut()),
            (d.campaignDocId = ""),
            (d.id = ""),
            t.value.sheetPictureURL !== "")
          ) {
            const R = Co(i, `images/${Ue()}`),
              z = Co(i, t.value.sheetPictureFullPath),
              ee = await Bt(z);
            Lt(R, ee).then(async (re) => {
              const qe = await Ft(re.ref);
              (d.sheetPictureURL = qe),
                (d.sheetPictureFullPath = re.metadata.fullPath);
            });
          }
          await Nt(Ao(m, "characters"), d),
            le(),
            ue(),
            (N.value.message = "Agent addded!"),
            (N.value.type = "info"),
            (N.value.alive = !0);
        },
        ho = (d, g) => {
          const I = [];
          if (g === "roll") {
            const R = d.total;
            I.push(R);
          }
          if (g === "attackRoll") {
            const R = d.totalAttack,
              z = d.totalDamage;
            I.push(R), I.push(z);
          }
          (t.value.lastDiceResult = I), (t.value.didDiceRoll = Ue()), P();
        },
        go = (d, g) => {
          if (!_.value || !f.value) return;
          const I = {
            sender: t.value.name,
            timestamp: new Date().getTime(),
            content: d,
            contentType: g,
          };
          f.value.campaignLogMessages.push(I),
            f.value.campaignLogMessages.length > 200 &&
              f.value.campaignLogMessages.shift(),
            aa(de(m, "campaignLogs", f.value.id), f.value);
        },
        Ze = () => {
          Oe(), le(), ue(), (E.value = !E.value);
        },
        fo = () => {
          (t.value.isSobrevivendoAoHorror = !t.value.isSobrevivendoAoHorror),
            P();
        };
      fe(
        () => t.value.skills[9].bonus,
        (d, g) => {
          if (t.value.block === null) return;
          const I = Math.abs(d - g);
          d > g ? (t.value.block += I) : (t.value.block -= I),
            t.value.block < 0 && (t.value.block = 0),
            t.value.block > 999 && (t.value.block = 999),
            P();
        }
      );
      const Mt = X(() => {
        const d =
          10 +
          t.value.attributes.dex +
          t.value.protectionDefense +
          t.value.bonusDefense;
        return d > 0 ? d : 0;
      });
      return (
        fe(
          () => t.value.skills[22].bonus,
          (d, g) => {
            if (t.value.evade === null) return;
            const I = Math.abs(d - g);
            d > g ? (t.value.evade += I) : (t.value.evade -= I),
              t.value.evade < 0 && (t.value.evade = 0),
              t.value.evade > 999 && (t.value.evade = 999),
              P();
          }
        ),
        fe(Mt, (d, g) => {
          if (t.value.evade === null) return;
          const I = Math.abs(d - g);
          d > g ? (t.value.evade += I) : (t.value.evade -= I),
            t.value.evade < 0 && (t.value.evade = 0),
            t.value.evade > 999 && (t.value.evade = 999),
            P();
        }),
        fe(
          () => N.value.alive,
          () => {
            N.value.alive === !0 &&
              (N.value.timeout = window.setTimeout(
                () => (N.value.alive = !1),
                3e3
              ));
          }
        ),
        fe(k, () => {
          oe();
        }),
        (d, g) => {
          const I = ma("vue-final-modal");
          return (
            s(),
            r("div", null, [
              M.value
                ? (s(), r("div", Xv, [C(Vs, { "page-loading": "" })]))
                : (s(),
                  r("div", Iv, [
                    O.value
                      ? (s(),
                        r("div", Pv, [
                          Mv,
                          e(
                            "button",
                            {
                              class: "button-primary",
                              onClick:
                                g[0] || (g[0] = (R) => d.$router.push("/")),
                            },
                            " Return "
                          ),
                        ]))
                      : (s(),
                        r("div", _v, [
                          Z.value >= 1023
                            ? (s(),
                              r("div", Dv, [
                                e("div", Rv, [
                                  e("div", Tv, [
                                    C(
                                      Io,
                                      {
                                        character: t.value,
                                        "disabled-sheet": k.value,
                                        onHandleChangeCharHeaderText: qa,
                                        onHandleOpenChangePictureModal: xa,
                                      },
                                      null,
                                      8,
                                      ["character", "disabled-sheet"]
                                    ),
                                    _.value
                                      ? (s(),
                                        x(
                                          Po,
                                          {
                                            key: 0,
                                            "disabled-sheet": k.value,
                                            campaign: _.value,
                                            "campaign-log": f.value,
                                            onHandleOpenCampaignLog: Ze,
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
                                      So,
                                      {
                                        character: t.value,
                                        "disabled-sheet": k.value,
                                        "char-added": he.value,
                                        onHandleShareSheet: po,
                                        onHandleAddAgent: vo,
                                        onHandleOpenConfig: Va,
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
                                  e("div", Vv, [
                                    e("div", Ov, [
                                      C(
                                        $o,
                                        {
                                          character: t.value,
                                          "disabled-sheet": k.value,
                                          onHandleChangeSobrevivendoAoHorror:
                                            fo,
                                          onHandleChangeCharText: ya,
                                          onHandleChangeCharNumber: ka,
                                          onHandleChangeCharNumberButton: $a,
                                          onHandleChangeAttribute: Ea,
                                          onHandleChangeCharDropdown: Sa,
                                          onHandleChangeMovementInSquares: Ia,
                                          onHandleRollAttribute: Pa,
                                          onHandleChangeCharMark: Ma,
                                          onHandleChangeMarkModeToTrue: _a,
                                          onHandleMarkHeal: Da,
                                          onHandleOpenModalAddClass: Ra,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                    e("div", wv, [
                                      C(
                                        Eo,
                                        {
                                          character: t.value,
                                          "disabled-sheet": k.value,
                                          onHandleOpenSkillModal: Ta,
                                          onHandleChangeSkillDropdown: Oa,
                                          onHandleChangeSkillOtherBonus: wa,
                                          onHandleRollSkill: za,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]),
                                    e("div", zv, [
                                      C(
                                        Vi,
                                        {
                                          character: t.value,
                                          "disabled-sheet": k.value,
                                          onHandleOpenAbilitiesModal: Ha,
                                          onHandleOpenRitualsModal: Ua,
                                          onHandleOpenItemsModal: Na,
                                          onHandleOpenAddAttack: eo,
                                          onHandleOpenAddPower: ao,
                                          onHandleOpenAddRitual: oo,
                                          onHandleOpenAddWeapon: to,
                                          onHandleOpenAddAmmunition: so,
                                          onHandleOpenAddProtection: no,
                                          onHandleOpenAddMisc: ro,
                                          onHandleOpenAddCursedItem: io,
                                          onHandleRemoveAttack: Ba,
                                          onHandleEditAttack: lo,
                                          onHandleRemovePower: Je,
                                          onHandleEditPower: uo,
                                          onHandleEditRitual: co,
                                          onHandleEditItem: mo,
                                          onHandleRemoveRitual: La,
                                          onHandleRemoveItem: Fa,
                                          onHandleEquipItem: Qa,
                                          onHandleChangeDescription: Ga,
                                          onHandleChangeInventoryDropdown: Xa,
                                          onHandleChangeInventoryNumber: Wa,
                                          onHandleChangeItemsLimit: Ka,
                                          onHandleRollDices: Ye,
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
                            : (s(),
                              r("div", Hv, [
                                e("div", null, [
                                  C(Yp, {
                                    onHandleMobileNav:
                                      g[1] || (g[1] = (R) => (ne.value = R)),
                                  }),
                                  ne.value === 0
                                    ? (s(),
                                      r("div", jv, [
                                        C(
                                          So,
                                          {
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            "char-added": he.value,
                                            onHandleShareSheet: po,
                                            onHandleAddAgent: vo,
                                            onHandleOpenConfig: Va,
                                            onHandleOpenShareModal: mt,
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
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeCharHeaderText: qa,
                                            onHandleOpenChangePictureModal: xa,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                        _.value
                                          ? (s(),
                                            x(
                                              Po,
                                              {
                                                key: 0,
                                                "disabled-sheet": k.value,
                                                campaign: _.value,
                                                "campaign-log": f.value,
                                                onHandleOpenCampaignLog: Ze,
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
                                  ne.value === 1
                                    ? (s(),
                                      r("div", Uv, [
                                        C(
                                          Jo,
                                          {
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeDescription: Ga,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  ne.value === 2
                                    ? (s(),
                                      r("div", Nv, [
                                        C(
                                          $o,
                                          {
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeSobrevivendoAoHorror:
                                              fo,
                                            onHandleChangeCharText: ya,
                                            onHandleChangeCharNumber: ka,
                                            onHandleChangeCharNumberButton: $a,
                                            onHandleChangeAttribute: Ea,
                                            onHandleChangeCharDropdown: Sa,
                                            onHandleChangeMovementInSquares: Ia,
                                            onHandleRollAttribute: Pa,
                                            onHandleChangeCharMark: Ma,
                                            onHandleChangeMarkModeToTrue: _a,
                                            onHandleMarkHeal: Da,
                                            onHandleOpenModalAddClass: Ra,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  ne.value === 3
                                    ? (s(),
                                      r("div", xv, [
                                        C(
                                          Eo,
                                          {
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            onHandleOpenSkillModal: Ta,
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
                                  ne.value === 4
                                    ? (s(),
                                      r("div", Bv, [
                                        C(
                                          Qo,
                                          {
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            onHandleOpenAddAttack: eo,
                                            onHandleEditAttack: lo,
                                            onHandleRemoveAttack: Ba,
                                            onHandleRollAttack: Ja,
                                            onHandleRollDices: Ye,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  ne.value === 5
                                    ? (s(),
                                      r("div", Lv, [
                                        C(
                                          Ko,
                                          {
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeInventoryDropdown: Xa,
                                            onHandleChangeInventoryNumber: Wa,
                                            onHandleChangeItemsLimit: Ka,
                                            onHandleEditItem: mo,
                                            onHandleEquipItem: Qa,
                                            onHandleOpenItemsModal: Na,
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
                                  ne.value === 6
                                    ? (s(),
                                      r("div", Fv, [
                                        ne.value === 6
                                          ? (s(),
                                            x(
                                              Xo,
                                              {
                                                key: 0,
                                                character: t.value,
                                                "disabled-sheet": k.value,
                                                onHandleEditPower: uo,
                                                onHandleOpenAddPower: ao,
                                                onHandleOpenAbilitiesModal: Ha,
                                                onHandleRemovePower: Je,
                                              },
                                              null,
                                              8,
                                              ["character", "disabled-sheet"]
                                            ))
                                          : q("", !0),
                                      ]))
                                    : q("", !0),
                                  ne.value === 7
                                    ? (s(),
                                      r("div", Qv, [
                                        C(
                                          Wo,
                                          {
                                            character: t.value,
                                            "disabled-sheet": k.value,
                                            onHandleChangeRitualDc: Za,
                                            onHandleEditRitual: co,
                                            onHandleOpenRitualsModal: Ua,
                                            onHandleOpenAddRitual: oo,
                                            onHandleRemoveRitual: La,
                                            onHandleRollRitual: Ya,
                                          },
                                          null,
                                          8,
                                          ["character", "disabled-sheet"]
                                        ),
                                      ]))
                                    : q("", !0),
                                  _.value
                                    ? (s(),
                                      x(
                                        sv,
                                        {
                                          key: 8,
                                          "campaign-log-open": E.value,
                                          onHandleOpenCampaignLog: Ze,
                                        },
                                        null,
                                        8,
                                        ["campaign-log-open"]
                                      ))
                                    : q("", !0),
                                ]),
                              ])),
                          Q.value
                            ? (s(),
                              r("div", Gv, [
                                C(
                                  I,
                                  {
                                    modelValue: Q.value,
                                    "onUpdate:modelValue":
                                      g[2] || (g[2] = (R) => (Q.value = R)),
                                    classes: "modal-container",
                                  },
                                  {
                                    default: ke(() => [
                                      (s(),
                                      x(
                                        _e(h[G.value]),
                                        {
                                          "current-edit-option": Se.value,
                                          "current-add-option": Aa.value,
                                          character: t.value,
                                          skill: Ca.value,
                                          "edit-power": D.value,
                                          "edit-ritual": F.value,
                                          "edit-item": ve.value,
                                          "edit-attack": y.value,
                                          onHandleEditAttackSheet: $t,
                                          onHandleEditPowerSheet: Et,
                                          onHandleEditRitualSheet: St,
                                          onHandleEditItemSheet: It,
                                          onHandleAddAttack: pt,
                                          onHandleAddPower: vt,
                                          onHandleAddRitual: ht,
                                          onHandleAddItem: gt,
                                          onHandleCloseModal: oe,
                                          onHandleUpdatePicture: ft,
                                          onHandleChangeStatsClass: kt,
                                          onHandleUpdateAlternativePicture: bt,
                                          onHandleChangeCharResultDiceColor: At,
                                          onHandleChangeCharResultDiceBorderColor:
                                            Ct,
                                          onHandleChangeEditPermissions: qt,
                                          onHandleAddClass: Pt,
                                          onHandleChangeDiceSkin: yt,
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
                            ta,
                            { name: "toast" },
                            {
                              default: ke(() => [
                                N.value.alive
                                  ? (s(),
                                    x(
                                      Qt,
                                      { key: 0, toast: N.value, onDismiss: Oe },
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
                            ta,
                            { name: "toast" },
                            {
                              default: ke(() => [
                                ge.value.alive
                                  ? (s(),
                                    x(
                                      gs,
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
                            ta,
                            { name: "toast" },
                            {
                              default: ke(() => [
                                Ve.value.alive
                                  ? (s(),
                                    x(
                                      fs,
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
                            ? (s(),
                              x(
                                Yt,
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
  $h = V(Wv, [["__scopeId", "data-v-1cb432dd"]]);
export { $h as default };

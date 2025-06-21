import {
  d as T,
  Q as Re,
  r as E,
  a1 as zo,
  o as t,
  c as s,
  a as e,
  t as U,
  a2 as ae,
  L as F,
  n as j,
  q as G,
  _ as V,
  f as N,
  v as z,
  m as C,
  k as A,
  p as L,
  b as H,
  a3 as Be,
  H as ne,
  h as K,
  C as qe,
  D as Ce,
  E as Ht,
  e as ue,
  a5 as ga,
  a6 as ke,
  J as oe,
  i as Ne,
  x as Ae,
  j as yo,
  g as _o,
  S as Oo,
  M as xt,
  u as jt,
  A as ta,
  P as le,
  N as ra,
  $ as sa,
  a0 as Ft,
  w as be,
  T as na,
  R as Po,
  F as Nt,
  B as Bt,
  l as Qt,
  y as Gt,
  z as Xt,
} from "./index-t0mq17pV.js";
import {
  g as Wt,
  r as Eo,
  b as Kt,
  u as Jt,
  a as Yt,
} from "./index.esm2017-LS-LQ1N8.js";
import { T as Zt } from "./ToastNotification-4wp0r3IV.js";
import {
  n as ca,
  I as He,
  g as er,
  A as ar,
  F as Qe,
  a as or,
  p as tr,
  C as rr,
  h as sr,
  c as So,
  i as nr,
  u as ir,
  j as dr,
  k as lr,
  l as ur,
  f as ia,
  e as da,
  m as ko,
  o as cr,
  q as mr,
  s as pr,
  t as gr,
  v as vr,
  w as hr,
  x as fr,
  y as br,
  d as qr,
  r as Cr,
  z as Ar,
  T as yr,
  b as Pr,
  B as Er,
  D as Sr,
  E as kr,
  G as Rr,
  H as wr,
} from "./ToastAttack-8Z2---o2.js";
import { _ as Uo } from "./d20-icon-vaz1En3o.js";
import { T as ve } from "./TabNav-bhLeyoEJ.js";
import { P as Ge } from "./PowerCard-qp2pfb03.js";
import { R as Lo } from "./RitualCard-mpDhD8kx.js";
import {
  W as Ho,
  P as xo,
  M as jo,
  C as Fo,
} from "./CursedItemCard-4FOvT2jI.js";
import {
  S as va,
  H as Ir,
  b as Mr,
  a as $r,
  _ as Dr,
  A as No,
  R as Bo,
  W as Qo,
  P as Go,
  M as ma,
  c as Xo,
} from "./HomebrewItems-59zNXv_F.js";
import { c as Me } from "./attributes-I0efBVjK.js";
import { S as ye } from "./SearchInput-JwrnRX4j.js";
import { b as Tr, c as Vr } from "./ClassCard-DF8jE_xA.js";
import { c as zr, d as _r } from "./marcasFragmentadas-_RuPgcFI.js";
import { a as Or, b as Ur, c as Lr } from "./parceitosData-_Ek6zqzz.js";
import { S as ha } from "./SourcesNavigation-xVQcEwa1.js";
import { a as Hr, b as xr } from "./cultoDaCriacaoContent-lXBbI8k2.js";
import {
  h as $e,
  p as Wo,
  r as Ko,
  w as jr,
  e as Fr,
  b as Nr,
  m as Br,
  d as Qr,
} from "./default-s9aktn1T.js";
import { i as Gr } from "./forms-elmqtkmr.js";
import { _ as je, l as Ro } from "./lodash-gzw5KmHd.js";
import { D as Se } from "./DropdownSimple-zxeRj9hV.js";
import { P as fa } from "./PictureModal-KjvpKroR.js";
import { v as Fe } from "./v4-cyCr5FZV.js";
import { S as De } from "./SwitchButtonBool-R2SsgvuJ.js";
import { _ as Te } from "./blank-profile-picture-wMh28flS.js";
import { L as Xr } from "./LoadingView-_iqLshHh.js";
import {
  s as Jo,
  e as Wr,
  o as Kr,
  c as Jr,
} from "./characterAutomations-VjVSWhq1.js";
import { u as Yr, d as Zr } from "./dice-roll-pki3JKwp.js";
import { g as es, C as as } from "./firebase-7sah6mo2.js";
import "./edit-icon-3vZQUsyW.js";
import "./show-more-icon-VvUXKiHG.js";
import "./add-icon-fJ4uQHUZ.js";
import "./CardSource-eJp3pM5O.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./browser-image-compression-9kymdGFS.js";
const os = "/assets/sobrevivendo-ao-horror-off-7JypCJnD.webp",
  ts = "/assets/sobrevivendo-ao-horror-on-553JUvpA.webp",
  rs = "/assets/shield-icon-FCvc8PM4.png",
  ss = { class: "sheet-subtitle" },
  ns = { class: "dropdown-button-container" },
  is = ["onClick"],
  ds = T({
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
    setup(o, { emit: q }) {
      Re((d) => ({ "2d3dd721": o.buttonWidth }));
      const l = o,
        v = q,
        m = E(null),
        g = E(!1);
      zo(m, () => (g.value = !1));
      const u = () => {
          l.disabled || (g.value = !g.value);
        },
        c = (d) => {
          (g.value = !1), v("updateValue", d);
        };
      return (d, r) => (
        t(),
        s(
          "div",
          {
            ref_key: "dropdown",
            ref: m,
            class: ae([
              o.mobileView ? "dropdown-container-mobile" : "dropdown-container",
            ]),
          },
          [
            e("h4", ss, U(o.title), 1),
            e("div", ns, [
              e(
                "button",
                {
                  class: ae([
                    "dropdown-button",
                    { bold: o.bold, disabled: o.disabled },
                  ]),
                  onClick: u,
                },
                U(o.isSobrevivendoAoHorror ? F(ca)[o.value] : o.value),
                3
              ),
              e(
                "div",
                {
                  class: ae([
                    "dropdown-content",
                    { "dropdown-content-active": g.value },
                  ]),
                },
                [
                  (t(!0),
                  s(
                    j,
                    null,
                    G(
                      o.options,
                      (i, p) => (
                        t(),
                        s("div", { key: p }, [
                          e(
                            "button",
                            {
                              class: ae([
                                "dropdown-content-button",
                                { bold: o.bold },
                              ]),
                              onClick: (f) => c(i),
                            },
                            U(o.isSobrevivendoAoHorror ? F(ca)[i] : i),
                            11,
                            is
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
  pa = V(ds, [["__scopeId", "data-v-c7dc5afd"]]),
  J = (o) => (L("data-v-80dedc69"), (o = o()), H(), o),
  ls = { class: "info-view" },
  us = J(() =>
    e(
      "img",
      {
        class: "toggle-button-img",
        src: os,
        alt: "Alterar versão da ficha",
        rel: "preload",
      },
      null,
      -1
    )
  ),
  cs = [us],
  ms = J(() =>
    e(
      "img",
      {
        class: "toggle-button-img",
        src: ts,
        alt: "Alterar versão da ficha",
        rel: "preload",
      },
      null,
      -1
    )
  ),
  ps = [ms],
  gs = { class: "info-row1" },
  vs = { class: "nex-container" },
  hs = { key: 1, class: "mundano-nex-container" },
  fs = { class: "sheet-subtitle" },
  bs = { key: 2, class: "pe-container" },
  qs = { class: "pe" },
  Cs = ["disabled", "value"],
  As = J(() => e("h4", { class: "alt-nex" }, " EXP ", -1)),
  ys = { class: "pe-container" },
  Ps = { class: "pe" },
  Es = ["disabled", "value"],
  Ss = { class: "desl-container" },
  ks = { class: "desl-input-container" },
  Rs = ["disabled", "value"],
  ws = J(() => e("h4", null, "m /", -1)),
  Is = ["disabled", "value"],
  Ms = J(() => e("h4", null, "q", -1)),
  $s = J(() => e("h3", null, "SPEED", -1)),
  Ds = { class: "info-bar-wrapper" },
  Ts = { class: "info-row" },
  Vs = { class: "defense-container" },
  zs = { class: "defense-img-container" },
  _s = J(() =>
    e("img", { class: "defense-img", src: rs, alt: "defense" }, null, -1)
  ),
  Os = { class: "defense-value" },
  Us = { class: "defense-content" },
  Ls = J(() =>
    e(
      "div",
      { class: "defense-text" },
      [e("h3", null, "DEFENSE"), e("h4", null, "= 10 + AGI + ")],
      -1
    )
  ),
  Hs = { class: "defense-input" },
  xs = ["disabled", "value"],
  js = J(() => e("h5", null, "Equip.", -1)),
  Fs = J(() => e("h4", { class: "defense-plus" }, " + ", -1)),
  Ns = { class: "defense-input" },
  Bs = ["disabled", "value"],
  Qs = J(() => e("h5", null, "Other", -1)),
  Gs = { class: "other-defenses-container" },
  Xs = { class: "other-defense-div" },
  Ws = J(() => e("div", { class: "other-defense-label" }, " BLOCK DR ", -1)),
  Ks = ["disabled", "value"],
  Js = { class: "other-defense-div" },
  Ys = J(() => e("div", { class: "other-defense-label" }, " DODGE ", -1)),
  Zs = ["disabled", "value"],
  en = { class: "info-line" },
  an = J(() => e("h3", null, "ARMOR", -1)),
  on = ["disabled", "value"],
  tn = { class: "info-line" },
  rn = J(() => e("h3", null, "RESISTANCES", -1)),
  sn = ["disabled", "value"],
  nn = { class: "info-line" },
  dn = J(() => e("h3", null, "PROFICIENCIES", -1)),
  ln = ["disabled", "value"],
  un = T({
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
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = Be(),
        g = N(() =>
          l.character.movement === 0 ? 0 : l.character.movement / 1.5
        ),
        u = N(() => {
          const r =
            10 +
            l.character.attributes.dex +
            l.character.protectionDefense +
            l.character.bonusDefense;
          return r > 0 ? r : 0;
        }),
        c = (r, i) => {
          var p;
          v("handleChangeCharNumber", { e: r, key: i }),
            (p = m == null ? void 0 : m.proxy) == null || p.$forceUpdate();
        },
        d = (r) => {
          var i;
          v("handleChangeMovementInSquares", r),
            (i = m == null ? void 0 : m.proxy) == null || i.$forceUpdate();
        };
      return (r, i) => (
        t(),
        s("div", ls, [
          !r.character.isNexLevelOn && !r.character.isPdOn
            ? (t(),
              s(
                "div",
                {
                  key: 0,
                  class: "toggle-button-container",
                  onClick:
                    i[0] ||
                    (i[0] = (p) => v("handleChangeSobrevivendoAoHorror")),
                },
                cs
              ))
            : (t(),
              s(
                "div",
                {
                  key: 1,
                  class: "toggle-button-container",
                  onClick:
                    i[1] ||
                    (i[1] = (p) => v("handleChangeSobrevivendoAoHorror")),
                },
                ps
              )),
          e("div", gs, [
            e("div", vs, [
              r.character.statsClass !== "Mundane"
                ? (t(),
                  z(
                    pa,
                    {
                      key: 0,
                      title: r.character.isNexLevelOn ? "LEVEL" : "EXP",
                      disabled: r.disabledSheet,
                      value: r.character.nex,
                      options: F(er),
                      "is-sobrevivendo-ao-horror": r.character.isNexLevelOn,
                      bold: "",
                      onUpdateValue:
                        i[2] ||
                        (i[2] = (p) =>
                          r.$emit("handleChangeCharDropdown", {
                            value: p,
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
                : (t(),
                  s("div", hs, [
                    e(
                      "h4",
                      fs,
                      U(r.character.isNexLevelOn ? "LEVEL" : "EXP"),
                      1
                    ),
                    e(
                      "button",
                      {
                        class: "mundano-nex-button",
                        onClick:
                          i[3] ||
                          (i[3] = (p) => r.$emit("handleOpenModalAddClass")),
                      },
                      U(r.character.isNexLevelOn ? "0" : "0%"),
                      1
                    ),
                  ])),
              r.character.isNexLevelOn
                ? (t(),
                  s("div", bs, [
                    e("div", qs, [
                      e(
                        "input",
                        {
                          class: "sheet-input pe-input",
                          type: "text",
                          disabled: r.disabledSheet,
                          value: r.character.nexString,
                          onBlur:
                            i[4] ||
                            (i[4] = (p) =>
                              r.$emit("handleChangeCharText", {
                                e: p,
                                key: "nexString",
                              })),
                        },
                        null,
                        40,
                        Cs
                      ),
                    ]),
                    As,
                  ]))
                : C("", !0),
              e("div", ys, [
                e("div", Ps, [
                  e(
                    "input",
                    {
                      class: "sheet-input pe-input",
                      type: "number",
                      disabled: r.disabledSheet,
                      value: r.character.peTurn,
                      onBlur: i[5] || (i[5] = (p) => c(p, "peTurn")),
                    },
                    null,
                    40,
                    Es
                  ),
                ]),
                e(
                  "h4",
                  null,
                  U(r.character.isPdOn ? "DP / TURN" : "EP / TURN"),
                  1
                ),
              ]),
            ]),
            e("div", Ss, [
              e("div", ks, [
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: r.character.movement,
                    onBlur: i[6] || (i[6] = (p) => c(p, "movement")),
                  },
                  null,
                  40,
                  Rs
                ),
                ws,
                e(
                  "input",
                  {
                    class: "sheet-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: g.value,
                    onBlur: d,
                  },
                  null,
                  40,
                  Is
                ),
                Ms,
              ]),
              $s,
            ]),
          ]),
          e("div", Ds, [
            A(
              He,
              {
                type: "pv",
                "max-value": r.character.maxPv,
                "current-value": r.character.currentPv,
                marks: r.character.deathMarks,
                "mark-mode": r.character.deathMode,
                "disabled-sheet": r.disabledSheet,
                onHandleChangeCharNumber: i[7] || (i[7] = (p, f) => c(p, f)),
                onHandleChangeCharNumberButton:
                  i[8] ||
                  (i[8] = (p, f) =>
                    r.$emit("handleChangeCharNumberButton", p, f)),
                onHandleChangeCharMark:
                  i[9] ||
                  (i[9] = (p, f) => r.$emit("handleChangeCharMark", p, f)),
                onHandleChangeMarkModeToTrue:
                  i[10] ||
                  (i[10] = (p) => r.$emit("handleChangeMarkModeToTrue", p)),
                onHandleMarkHeal:
                  i[11] || (i[11] = (p) => r.$emit("handleMarkHeal", p)),
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
            r.character.isPdOn
              ? C("", !0)
              : (t(),
                z(
                  He,
                  {
                    key: 0,
                    type: "san",
                    character: r.character,
                    "max-value": r.character.maxSan,
                    "current-value": r.character.currentSan,
                    marks: r.character.madnessMarks,
                    "mark-mode": r.character.madnessMode,
                    "disabled-sheet": r.disabledSheet,
                    onHandleChangeCharNumber:
                      i[12] || (i[12] = (p, f) => c(p, f)),
                    onHandleChangeCharNumberButton:
                      i[13] ||
                      (i[13] = (p, f) =>
                        r.$emit("handleChangeCharNumberButton", p, f)),
                    onHandleChangeCharMark:
                      i[14] ||
                      (i[14] = (p, f) => r.$emit("handleChangeCharMark", p, f)),
                    onHandleChangeMarkModeToTrue:
                      i[15] ||
                      (i[15] = (p) => r.$emit("handleChangeMarkModeToTrue", p)),
                    onHandleMarkHeal:
                      i[16] || (i[16] = (p) => r.$emit("handleMarkHeal", p)),
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
            r.character.isPdOn
              ? C("", !0)
              : (t(),
                z(
                  He,
                  {
                    key: 1,
                    type: "pe",
                    character: r.character,
                    "max-value": r.character.maxPe,
                    "current-value": r.character.currentPe,
                    "disabled-sheet": r.disabledSheet,
                    onHandleChangeCharNumber:
                      i[17] || (i[17] = (p, f) => c(p, f)),
                    onHandleChangeCharNumberButton:
                      i[18] ||
                      (i[18] = (p, f) =>
                        r.$emit("handleChangeCharNumberButton", p, f)),
                  },
                  null,
                  8,
                  ["character", "max-value", "current-value", "disabled-sheet"]
                )),
            r.character.isPdOn
              ? (t(),
                z(
                  He,
                  {
                    key: 2,
                    type: "pd",
                    character: r.character,
                    "max-value": r.character.maxPd,
                    "current-value": r.character.currentPd,
                    marks: r.character.pdMarks,
                    "mark-mode": r.character.pdMode,
                    "disabled-sheet": r.disabledSheet,
                    onHandleChangeCharNumber:
                      i[19] || (i[19] = (p, f) => c(p, f)),
                    onHandleChangeCharNumberButton:
                      i[20] ||
                      (i[20] = (p, f) =>
                        r.$emit("handleChangeCharNumberButton", p, f)),
                    onHandleChangeCharMark:
                      i[21] ||
                      (i[21] = (p, f) => r.$emit("handleChangeCharMark", p, f)),
                    onHandleChangeMarkModeToTrue:
                      i[22] ||
                      (i[22] = (p) => r.$emit("handleChangeMarkModeToTrue", p)),
                    onHandleMarkHeal:
                      i[23] || (i[23] = (p) => r.$emit("handleMarkHeal", p)),
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
              : C("", !0),
          ]),
          e("div", Ts, [
            e("div", Vs, [
              e("div", zs, [_s, e("div", Os, [e("h3", null, U(u.value), 1)])]),
              e("div", Us, [
                Ls,
                e("div", Hs, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: r.disabledSheet,
                      value: r.character.protectionDefense,
                      onBlur:
                        i[24] || (i[24] = (p) => c(p, "protectionDefense")),
                    },
                    null,
                    40,
                    xs
                  ),
                  js,
                ]),
                Fs,
                e("div", Ns, [
                  e(
                    "input",
                    {
                      class: "sheet-input",
                      type: "number",
                      disabled: r.disabledSheet,
                      value: r.character.bonusDefense,
                      onBlur: i[25] || (i[25] = (p) => c(p, "bonusDefense")),
                    },
                    null,
                    40,
                    Bs
                  ),
                  Qs,
                ]),
              ]),
            ]),
            e("div", Gs, [
              e("div", Xs, [
                Ws,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: r.character.block,
                    onBlur: i[26] || (i[26] = (p) => c(p, "block")),
                  },
                  null,
                  40,
                  Ks
                ),
              ]),
              e("div", Js, [
                Ys,
                e(
                  "input",
                  {
                    class: "sheet-input underline-input",
                    type: "number",
                    disabled: r.disabledSheet,
                    value: r.character.evade,
                    onBlur: i[27] || (i[27] = (p) => c(p, "evade")),
                  },
                  null,
                  40,
                  Zs
                ),
              ]),
            ]),
          ]),
          e("div", en, [
            an,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: r.disabledSheet,
                value: r.character.currentProtection,
                onBlur:
                  i[28] ||
                  (i[28] = (p) =>
                    r.$emit("handleChangeCharText", {
                      e: p,
                      key: "currentProtection",
                    })),
              },
              null,
              40,
              on
            ),
          ]),
          e("div", tn, [
            rn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: r.disabledSheet,
                value: r.character.resistances,
                onBlur:
                  i[29] ||
                  (i[29] = (p) =>
                    r.$emit("handleChangeCharText", {
                      e: p,
                      key: "resistances",
                    })),
              },
              null,
              40,
              sn
            ),
          ]),
          e("div", nn, [
            dn,
            e(
              "input",
              {
                class: "sheet-input",
                type: "text",
                disabled: r.disabledSheet,
                value: r.character.proficiencies,
                onBlur:
                  i[30] ||
                  (i[30] = (p) =>
                    r.$emit("handleChangeCharText", {
                      e: p,
                      key: "proficiencies",
                    })),
              },
              null,
              40,
              ln
            ),
          ]),
        ])
      );
    },
  }),
  cn = V(un, [["__scopeId", "data-v-80dedc69"]]),
  mn = { class: "sheet-stats-container" },
  pn = T({
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
    setup(o, { emit: q }) {
      const l = q,
        v = (m) => {
          l("handleRollAttribute", m);
        };
      return (m, g) => (
        t(),
        s("div", mn, [
          A(
            ar,
            {
              character: m.character,
              "disabled-sheet": m.disabledSheet,
              onHandleChangeAttribute:
                g[0] || (g[0] = (u) => m.$emit("handleChangeAttribute", u)),
              onHandleRollAttribute: v,
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
          A(
            cn,
            {
              character: m.character,
              "disabled-sheet": m.disabledSheet,
              onHandleChangeSobrevivendoAoHorror:
                g[1] ||
                (g[1] = (u) => m.$emit("handleChangeSobrevivendoAoHorror")),
              onHandleChangeCharText:
                g[2] || (g[2] = (u) => m.$emit("handleChangeCharText", u)),
              onHandleChangeCharNumber:
                g[3] || (g[3] = (u) => m.$emit("handleChangeCharNumber", u)),
              onHandleChangeCharDropdown:
                g[4] || (g[4] = (u) => m.$emit("handleChangeCharDropdown", u)),
              onHandleChangeMovementInSquares:
                g[5] ||
                (g[5] = (u) => m.$emit("handleChangeMovementInSquares", u)),
              onHandleChangeCharNumberButton:
                g[6] ||
                (g[6] = (u, c) =>
                  m.$emit("handleChangeCharNumberButton", u, c)),
              onHandleChangeCharMark:
                g[7] ||
                (g[7] = (u, c) => m.$emit("handleChangeCharMark", u, c)),
              onHandleChangeMarkModeToTrue:
                g[8] ||
                (g[8] = (u) => m.$emit("handleChangeMarkModeToTrue", u)),
              onHandleMarkHeal:
                g[9] || (g[9] = (u) => m.$emit("handleMarkHeal", u)),
              onHandleOpenModalAddClass:
                g[10] || (g[10] = (u) => m.$emit("handleOpenModalAddClass")),
            },
            null,
            8,
            ["character", "disabled-sheet"]
          ),
        ])
      );
    },
  }),
  wo = V(pn, [["__scopeId", "data-v-4b3943e4"]]),
  gn = { class: "dropdown-button-container" },
  vn = { key: 0, class: "span" },
  hn = ["disabled"],
  fn = { key: 1, class: "span" },
  bn = ["onClick"],
  qn = T({
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
    setup(o, { emit: q }) {
      Re((d) => ({ "2c89ebb8": o.color }));
      const l = o,
        v = q,
        m = E(null),
        g = E(!1);
      zo(m, () => (g.value = !1));
      const u = () => {
          l.disabled || (g.value = !g.value);
        },
        c = (d) => {
          (g.value = !1), v("updateValue", d);
        };
      return (d, r) => (
        t(),
        s(
          "div",
          { ref_key: "dropdown", ref: m },
          [
            e("div", gn, [
              o.underline ? C("", !0) : (t(), s("span", vn, "(")),
              e(
                "button",
                {
                  class: ae([
                    "dropdown-button",
                    { "dropdown-underline": o.underline, disabled: o.disabled },
                  ]),
                  disabled: o.disabled,
                  onClick: u,
                },
                U(o.value),
                11,
                hn
              ),
              o.underline ? C("", !0) : (t(), s("span", fn, ")")),
              e(
                "div",
                {
                  class: ae([
                    "dropdown-content",
                    [
                      { "dropdown-content-active": g.value },
                      o.up ? "dropdown-position-up" : "dropdown-position-down",
                    ],
                  ]),
                },
                [
                  (t(!0),
                  s(
                    j,
                    null,
                    G(
                      o.options,
                      (i, p) => (
                        t(),
                        s("div", { key: p }, [
                          e(
                            "button",
                            {
                              class: "dropdown-content-button",
                              onClick: (f) => c(i),
                            },
                            U(i),
                            9,
                            bn
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
  xe = V(qn, [["__scopeId", "data-v-7777a8ec"]]),
  ba = (o) => (L("data-v-05af1f88"), (o = o()), H(), o),
  Cn = { class: "small" },
  An = ba(() => e("img", { src: Uo, alt: "rolar" }, null, -1)),
  yn = [An],
  Pn = { key: 0 },
  En = { key: 1 },
  Sn = { key: 0 },
  kn = { key: 1 },
  Rn = { class: "skill-bonus" },
  wn = ba(() => e("span", null, "( ", -1)),
  In = ba(() => e("span", null, " )", -1)),
  Mn = { key: 2 },
  $n = { key: 3 },
  Dn = { class: "input-container" },
  Tn = ["disabled", "value"],
  Vn = T({
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
    setup(o, { emit: q }) {
      Re((f) => ({ "45097c96": d.value }));
      const l = o,
        v = q,
        m = ["AGI", "STR", "INT", "PRE", "VIG"],
        g = ["0", "5", "10", "15"],
        u = { trained: "#3d8b40", veteran: "#0a69b7", expert: "#b36b00" },
        c = Be(),
        d = N(() =>
          l.skill.trainingDegree === "5"
            ? u.trained
            : l.skill.trainingDegree === "10"
            ? u.veteran
            : l.skill.trainingDegree === "15"
            ? u.expert
            : "#fff"
        ),
        r = () => {
          v("handleOpenSkillModal", l.skill);
        },
        i = (f, S, P) => {
          v("handleChangeSkillDropdown", { value: f, skillName: S, key: P });
        },
        p = (f, S) => {
          var b;
          const P = f.target.valueAsNumber;
          v("handleChangeSkillOtherBonus", { value: P, skillName: S }),
            (b = c == null ? void 0 : c.proxy) == null || b.$forceUpdate();
        };
      return (f, S) => (
        t(),
        s(
          j,
          null,
          [
            e("td", Cn, [
              e(
                "button",
                {
                  class: ae(["roll-button", { disabled: o.disabledSheet }]),
                  onClick:
                    S[0] || (S[0] = (P) => f.$emit("handleRollSkill", o.skill)),
                },
                yn,
                2
              ),
            ]),
            e(
              "td",
              { class: ae({ disabled: o.disabledSheet }) },
              [
                e(
                  "button",
                  {
                    class: ae([
                      "naked-button left",
                      { disabled: o.disabledSheet },
                    ]),
                    onClick: r,
                  },
                  [
                    ne(U(o.skill.name), 1),
                    o.skill.onlyTrained ? (t(), s("span", Pn, "*")) : C("", !0),
                    o.skill.loadPenalty ? (t(), s("span", En, "+")) : C("", !0),
                  ],
                  2
                ),
              ],
              2
            ),
            o.index > o.length - 7
              ? (t(),
                s("td", Sn, [
                  A(
                    xe,
                    {
                      value: o.skill.attribute,
                      options: m,
                      color: d.value,
                      disabled: o.disabledSheet,
                      up: "",
                      onUpdateValue:
                        S[1] || (S[1] = (P) => i(P, o.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (t(),
                s("td", kn, [
                  A(
                    xe,
                    {
                      value: o.skill.attribute,
                      options: m,
                      color: d.value,
                      disabled: o.disabledSheet,
                      onUpdateValue:
                        S[2] || (S[2] = (P) => i(P, o.skill.name, "attribute")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [e("h3", Rn, [wn, ne(U(o.skill.bonus), 1), In])]),
            o.index > o.length - 7
              ? (t(),
                s("td", Mn, [
                  A(
                    xe,
                    {
                      value: o.skill.trainingDegree,
                      options: g,
                      color: d.value,
                      disabled: o.disabledSheet,
                      underline: "",
                      up: "",
                      onUpdateValue:
                        S[3] ||
                        (S[3] = (P) => i(P, o.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ]))
              : (t(),
                s("td", $n, [
                  A(
                    xe,
                    {
                      value: o.skill.trainingDegree,
                      options: g,
                      color: d.value,
                      disabled: o.disabledSheet,
                      underline: "",
                      onUpdateValue:
                        S[4] ||
                        (S[4] = (P) => i(P, o.skill.name, "trainingDegree")),
                    },
                    null,
                    8,
                    ["value", "color", "disabled"]
                  ),
                ])),
            e("td", null, [
              e("div", Dn, [
                e(
                  "input",
                  {
                    type: "number",
                    class: "underline-input",
                    disabled: o.disabledSheet,
                    value: o.skill.otherBonus,
                    onBlur: S[5] || (S[5] = (P) => p(P, o.skill.name)),
                  },
                  null,
                  40,
                  Tn
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  }),
  zn = V(Vn, [["__scopeId", "data-v-05af1f88"]]),
  qa = (o) => (L("data-v-f2b17d30"), (o = o()), H(), o),
  _n = { class: "skills-container" },
  On = qa(() => e("h1", { class: "skills-title" }, " SKILLS ", -1)),
  Un = { class: "skills-table" },
  Ln = qa(() =>
    e(
      "thead",
      null,
      [
        e("tr", null, [
          e("th", { class: "small" }),
          e("th", { class: "left" }, " SKILL "),
          e("th", null, "DICE"),
          e("th", null, "BONUS"),
          e("th", null, "Training"),
          e("th", null, "Other"),
        ]),
      ],
      -1
    )
  ),
  Hn = qa(() =>
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
  xn = T({
    __name: "SkillsView",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenSkillModal",
      "handleChangeSkillOtherBonus",
      "handleChangeSkillDropdown",
      "handleRollSkill",
    ],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = (u) => {
          l.disabledSheet || v("handleOpenSkillModal", u);
        },
        g = (u) => {
          l.disabledSheet || v("handleRollSkill", u);
        };
      return (u, c) => (
        t(),
        s("div", _n, [
          On,
          e("table", Un, [
            Ln,
            e("tbody", null, [
              (t(!0),
              s(
                j,
                null,
                G(
                  u.character.skills,
                  (d, r) => (
                    t(),
                    s("tr", { key: d.name }, [
                      A(
                        zn,
                        {
                          skill: d,
                          index: r,
                          length: u.character.skills.length,
                          "disabled-sheet": u.disabledSheet,
                          onHandleOpenSkillModal: m,
                          onHandleChangeSkillDropdown:
                            c[0] ||
                            (c[0] = (i) =>
                              u.$emit("handleChangeSkillDropdown", i)),
                          onHandleChangeSkillOtherBonus:
                            c[1] ||
                            (c[1] = (i) =>
                              u.$emit("handleChangeSkillOtherBonus", i)),
                          onHandleRollSkill: g,
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
          Hn,
        ])
      );
    },
  }),
  Io = V(xn, [["__scopeId", "data-v-f2b17d30"]]),
  Ca = (o) => (L("data-v-f08c1d1d"), (o = o()), H(), o),
  jn = { class: "tab" },
  Fn = { key: 0 },
  Nn = { class: "roll-dices-container" },
  Bn = ["disabled", "onKeyup"],
  Qn = ["disabled"],
  Gn = Ca(() =>
    e("img", { class: "dice-icon", src: Uo, alt: "rolar" }, null, -1)
  ),
  Xn = [Gn],
  Wn = { key: 2 },
  Kn = { key: 0 },
  Jn = { key: 1, class: "no-content" },
  Yn = Ca(() => e("h3", null, "No attack found", -1)),
  Zn = [Yn],
  ei = { key: 3, class: "no-content" },
  ai = Ca(() => e("h3", null, "You have yet to add an attack", -1)),
  oi = [ai],
  ti = T({
    __name: "AttacksTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = E(""),
        g = E(""),
        u = () => {
          l.disabledSheet || (v("handleRollDices", m.value), (m.value = ""));
        },
        c = (r) => {
          l.disabledSheet || v("handleRollAttack", r);
        },
        d = N(() => [...l.character.attacks].filter((i) => K(i.name, g.value)));
      return (r, i) => (
        t(),
        s("div", jn, [
          r.character.attacks.length > 0
            ? (t(),
              s("div", Fn, [
                A(
                  Qe,
                  {
                    value: g.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: i[0] || (i[0] = (p) => (g.value = p)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          e("div", Nn, [
            qe(
              e(
                "input",
                {
                  "onUpdate:modelValue": i[1] || (i[1] = (p) => (m.value = p)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: r.disabledSheet,
                  onKeyup: Ht(u, ["enter"]),
                },
                null,
                40,
                Bn
              ),
              [[Ce, m.value]]
            ),
            e(
              "button",
              {
                class: ae(["dice-button", { disabled: r.disabledSheet }]),
                disabled: r.disabledSheet,
                onClick: u,
              },
              Xn,
              10,
              Qn
            ),
          ]),
          r.disabledSheet
            ? C("", !0)
            : (t(),
              s(
                "button",
                {
                  key: 1,
                  class: "button-secondary add-button",
                  onClick:
                    i[2] || (i[2] = (p) => r.$emit("handleOpenAddAttack")),
                },
                " New Attack "
              )),
          r.character.attacks.length > 0
            ? (t(),
              s("div", Wn, [
                d.value.length > 0
                  ? (t(),
                    s("div", Kn, [
                      (t(!0),
                      s(
                        j,
                        null,
                        G(
                          d.value,
                          (p) => (
                            t(),
                            s("div", { key: p.id, class: "align-card" }, [
                              A(
                                or,
                                {
                                  id: p.id,
                                  attack: p,
                                  disabled: r.disabledSheet,
                                  onHandleRemoveAttack:
                                    i[3] ||
                                    (i[3] = (f) =>
                                      r.$emit("handleRemoveAttack", f)),
                                  onHandleEdit: (f) =>
                                    r.$emit("handleEditAttack", f),
                                  onHandleRollAttack: c,
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
                  : (t(), s("div", Jn, Zn)),
              ]))
            : (t(), s("div", ei, oi)),
        ])
      );
    },
  }),
  Yo = V(ti, [["__scopeId", "data-v-f08c1d1d"]]),
  Zo = (o) => (L("data-v-79ae51ca"), (o = o()), H(), o),
  ri = { class: "tab" },
  si = { class: "tab-header" },
  ni = { key: 0 },
  ii = { key: 1, class: "sheet-cards-container" },
  di = { key: 0 },
  li = { key: 1, class: "no-content" },
  ui = Zo(() => e("h3", null, "No abilities found", -1)),
  ci = [ui],
  mi = { key: 2, class: "no-content" },
  pi = Zo(() => e("h3", null, "You have yet to add an ability", -1)),
  gi = [pi],
  vi = T({
    __name: "AbilitiesTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: [
      "handleOpenAbilitiesModal",
      "handleRemovePower",
      "handleEditPower",
      "handleOpenAddPower",
    ],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = E(""),
        g = N(() =>
          [...l.character.powers]
            .filter((d) => K(d.name, m.value))
            .sort((d, r) => d.name.localeCompare(r.name))
        ),
        u = (c) => v("handleEditPower", c);
      return (c, d) => (
        t(),
        s("div", ri, [
          e("div", si, [
            c.character.powers.length > 0
              ? (t(),
                s("div", ni, [
                  A(
                    Qe,
                    {
                      value: m.value,
                      placeholder: "Filter Abilities",
                      onUpdate: d[0] || (d[0] = (r) => (m.value = r)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : C("", !0),
            c.disabledSheet
              ? C("", !0)
              : (t(),
                s(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      d[1] ||
                      (d[1] = (r) => c.$emit("handleOpenAbilitiesModal")),
                  },
                  " Add New "
                )),
          ]),
          c.disabledSheet
            ? C("", !0)
            : (t(),
              s(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    d[2] || (d[2] = (r) => c.$emit("handleOpenAddPower")),
                },
                " New Ability "
              )),
          c.character.powers.length > 0
            ? (t(),
              s("div", ii, [
                g.value.length > 0
                  ? (t(),
                    s("div", di, [
                      (t(!0),
                      s(
                        j,
                        null,
                        G(
                          g.value,
                          (r) => (
                            t(),
                            s("div", { key: r.id, class: "sheet-card-list" }, [
                              A(
                                Ge,
                                {
                                  id: r.id,
                                  power: r,
                                  disabled: c.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    d[3] ||
                                    (d[3] = (i) =>
                                      c.$emit("handleRemovePower", i)),
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
                  : (t(), s("div", li, ci)),
              ]))
            : (t(), s("div", mi, gi)),
        ])
      );
    },
  }),
  et = V(vi, [["__scopeId", "data-v-79ae51ca"]]),
  Aa = (o) => (L("data-v-d3cb0405"), (o = o()), H(), o),
  hi = { class: "tab" },
  fi = { class: "tab-header" },
  bi = { key: 0 },
  qi = { class: "ritual-dc-wrapper" },
  Ci = { class: "ritual-dc-container" },
  Ai = Aa(() => e("h4", { class: "sheet-subtitle" }, " RITUAL DC ", -1)),
  yi = ["disabled", "value"],
  Pi = { key: 1, class: "sheet-cards-container" },
  Ei = { key: 0 },
  Si = { key: 1, class: "no-content" },
  ki = Aa(() => e("h3", null, "No ritual found", -1)),
  Ri = [ki],
  wi = { key: 2, class: "no-content" },
  Ii = Aa(() => e("h3", null, "You have yet to add a ritual", -1)),
  Mi = [Ii],
  $i = T({
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
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = Be(),
        g = E(""),
        u = N(() =>
          [...l.character.rituals]
            .filter((p) => K(p.name, g.value))
            .sort((p, f) => p.name.localeCompare(f.name))
        ),
        c = (i) => {
          var p;
          v("handleChangeRitualDc", i),
            (p = m == null ? void 0 : m.proxy) == null || p.$forceUpdate();
        },
        d = (i) => v("handleEditRitual", i),
        r = (i, p) => {
          v("handleRollRitual", i, p);
        };
      return (i, p) => (
        t(),
        s("div", hi, [
          e("div", fi, [
            i.character.rituals.length > 0
              ? (t(),
                s("div", bi, [
                  A(
                    Qe,
                    {
                      value: g.value,
                      placeholder: "Filter rituals",
                      onUpdate: p[0] || (p[0] = (f) => (g.value = f)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : C("", !0),
            i.disabledSheet
              ? C("", !0)
              : (t(),
                s(
                  "button",
                  {
                    key: 1,
                    class: "button-primary add-button",
                    onClick:
                      p[1] || (p[1] = (f) => i.$emit("handleOpenRitualsModal")),
                  },
                  " Add New "
                )),
          ]),
          e("div", qi, [
            e("div", Ci, [
              Ai,
              e(
                "input",
                {
                  type: "number",
                  class: "sheet-input sheet-input-size",
                  disabled: i.disabledSheet,
                  value: i.character.ritualsDc,
                  onBlur: c,
                },
                null,
                40,
                yi
              ),
            ]),
          ]),
          i.disabledSheet
            ? C("", !0)
            : (t(),
              s(
                "button",
                {
                  key: 0,
                  class: "button-secondary add-new-button",
                  onClick:
                    p[2] || (p[2] = (f) => i.$emit("handleOpenAddRitual")),
                },
                " New Ritual "
              )),
          i.character.rituals.length > 0
            ? (t(),
              s("div", Pi, [
                u.value.length > 0
                  ? (t(),
                    s("div", Ei, [
                      (t(!0),
                      s(
                        j,
                        null,
                        G(
                          u.value,
                          (f) => (
                            t(),
                            s("div", { key: f.id, class: "sheet-card-list" }, [
                              A(
                                Lo,
                                {
                                  id: f.id,
                                  ritual: f,
                                  disabled: i.disabledSheet,
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRemove:
                                    p[3] ||
                                    (p[3] = (S) =>
                                      i.$emit("handleRemoveRitual", S)),
                                  onHandleEdit: d,
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
                  : (t(), s("div", Si, Ri)),
              ]))
            : (t(), s("div", wi, Mi)),
        ])
      );
    },
  }),
  at = V($i, [["__scopeId", "data-v-d3cb0405"]]),
  ce = (o) => (L("data-v-d9d5c266"), (o = o()), H(), o),
  Di = { class: "tab" },
  Ti = { class: "tab-header" },
  Vi = { key: 0 },
  zi = { class: "inventory-info-container" },
  _i = { class: "inventory-row" },
  Oi = { class: "input-container" },
  Ui = ce(() => e("h4", { class: "sheet-subtitle" }, " PRESTIGE POINTS ", -1)),
  Li = ["disabled", "value"],
  Hi = { class: "inventory-row" },
  xi = { key: 0 },
  ji = { class: "input-container" },
  Fi = ce(() => e("h4", { class: "sheet-subtitle" }, " ITEM LIMIT ", -1)),
  Ni = ["disabled", "value"],
  Bi = ["disabled", "value"],
  Qi = ["disabled", "value"],
  Gi = ["disabled", "value"],
  Xi = { key: 1 },
  Wi = { class: "input-container" },
  Ki = ce(() => e("h4", { class: "sheet-subtitle" }, " ITEM LIMIT ", -1)),
  Ji = { class: "mobile-input-container-row" },
  Yi = ["disabled", "value"],
  Zi = ["disabled", "value"],
  ed = ["disabled", "value"],
  ad = ["disabled", "value"],
  od = { class: "inventory-row" },
  td = { key: 0 },
  rd = { class: "input-container" },
  sd = ce(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " IN INVENTORY ", -1)
  ),
  nd = { class: "sheet-div" },
  id = { class: "sheet-div" },
  dd = { class: "sheet-div" },
  ld = { class: "sheet-div" },
  ud = { key: 1 },
  cd = { class: "input-container" },
  md = ce(() =>
    e("h4", { class: "sheet-subtitle width-to-align" }, " IN INVENTORY ", -1)
  ),
  pd = { class: "mobile-input-container-row" },
  gd = { class: "sheet-div" },
  vd = { class: "sheet-div" },
  hd = { class: "sheet-div" },
  fd = { class: "sheet-div" },
  bd = { class: "inventory-row" },
  qd = { key: 0 },
  Cd = { class: "input-container" },
  Ad = ce(() => e("h4", { class: "sheet-subtitle" }, " MAX LOAD ", -1)),
  yd = ["disabled", "value"],
  Pd = ["disabled", "value"],
  Ed = { key: 1 },
  Sd = ce(() =>
    e(
      "h4",
      { class: "sheet-subtitle mobile-sheet-subtitle" },
      " MAX LOAD ",
      -1
    )
  ),
  kd = { class: "mobile-input-container-row" },
  Rd = ["disabled", "value"],
  wd = ["disabled", "value"],
  Id = { class: "open-add-buttons-container" },
  Md = { key: 0, class: "open-add-title" },
  $d = { key: 0, class: "sheet-cards-container" },
  Dd = { key: 0 },
  Td = { key: 0 },
  Vd = { key: 1 },
  zd = { key: 2 },
  _d = { key: 3 },
  Od = { key: 1, class: "no-content" },
  Ud = ce(() => e("h3", null, "No item found", -1)),
  Ld = [Ud],
  Hd = { key: 1, class: "no-content" },
  xd = ce(() => e("h3", null, "You have yet to add an item", -1)),
  jd = [xd],
  Fd = T({
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
    setup(o, { emit: q }) {
      Re((b) => ({ "53e467a2": i.value }));
      const l = o,
        v = q,
        m = [
          "Mundane",
          "Recruit",
          "Operator",
          "Special Agent",
          "Operation Captain",
          "Elite Agent",
        ],
        g = ["Low", "Medium", "High", "Unlimited"],
        u = Be(),
        c = E(""),
        d = E(window.innerWidth),
        r = N(() =>
          [...l.character.inventory]
            .filter((y) => K(y.name, c.value))
            .sort((y, $) => y.name.localeCompare($.name))
        ),
        i = N(() =>
          l.character.currentLoad > l.character.maxLoad * 2
            ? "#d9534f"
            : l.character.currentLoad > l.character.maxLoad
            ? "#ff8c00"
            : "#fff"
        ),
        p = N(() =>
          l.character.currentLoad < 0 ? 0 : l.character.currentLoad
        ),
        f = (b) => v("handleEditItem", b),
        S = (b, y) => {
          var X;
          const $ = b.target.valueAsNumber;
          v("handleChangeItemsLimit", { value: $, key: y }),
            (X = u == null ? void 0 : u.proxy) == null || X.$forceUpdate();
        },
        P = (b, y) => {
          var X;
          const $ = b.target.valueAsNumber;
          v("handleChangeInventoryNumber", { value: $, key: y }),
            (X = u == null ? void 0 : u.proxy) == null || X.$forceUpdate();
        };
      return (
        ue(() => {
          window.addEventListener("resize", () => {
            d.value = window.innerWidth;
          });
        }),
        (b, y) => {
          var $, X, ie, a, R, k, _, he;
          return (
            t(),
            s("div", Di, [
              e("div", Ti, [
                b.character.inventory.length > 0
                  ? (t(),
                    s("div", Vi, [
                      A(
                        Qe,
                        {
                          value: c.value,
                          placeholder: "Filter items",
                          onUpdate: y[0] || (y[0] = (w) => (c.value = w)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]))
                  : C("", !0),
                b.disabledSheet
                  ? C("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 1,
                        class: "button-primary add-button",
                        onClick:
                          y[1] ||
                          (y[1] = (w) => b.$emit("handleOpenItemsModal")),
                      },
                      " Add New "
                    )),
              ]),
              e("div", zi, [
                e("div", _i, [
                  e("div", Oi, [
                    Ui,
                    e(
                      "input",
                      {
                        type: "number",
                        class: "sheet-input sheet-input-size",
                        disabled: b.disabledSheet,
                        value: b.character.prestigePoints,
                        onBlur: y[2] || (y[2] = (w) => P(w, "prestigePoints")),
                      },
                      null,
                      40,
                      Li
                    ),
                  ]),
                  A(
                    pa,
                    {
                      title: "RANK",
                      disabled: b.disabledSheet,
                      value: b.character.patent,
                      "button-width": "10rem",
                      options: m,
                      "mobile-view": d.value < 1023,
                      onUpdateValue:
                        y[3] ||
                        (y[3] = (w) =>
                          b.$emit("handleChangeInventoryDropdown", {
                            value: w,
                            key: "patent",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "mobile-view"]
                  ),
                ]),
                e("div", Hi, [
                  d.value >= 1023
                    ? (t(),
                      s("div", xi, [
                        e("div", ji, [
                          Fi,
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "I",
                              disabled: b.disabledSheet,
                              value: b.character.itemsLimit.I,
                              onBlur: y[4] || (y[4] = (w) => S(w, "I")),
                            },
                            null,
                            40,
                            Ni
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "II",
                              disabled: b.disabledSheet,
                              value: b.character.itemsLimit.II,
                              onBlur: y[5] || (y[5] = (w) => S(w, "II")),
                            },
                            null,
                            40,
                            Bi
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "III",
                              disabled: b.disabledSheet,
                              value: b.character.itemsLimit.III,
                              onBlur: y[6] || (y[6] = (w) => S(w, "III")),
                            },
                            null,
                            40,
                            Qi
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              placeholder: "IV",
                              disabled: b.disabledSheet,
                              value: b.character.itemsLimit.IV,
                              onBlur: y[7] || (y[7] = (w) => S(w, "IV")),
                            },
                            null,
                            40,
                            Gi
                          ),
                        ]),
                      ]))
                    : (t(),
                      s("div", Xi, [
                        e("div", Wi, [
                          Ki,
                          e("div", Ji, [
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "I",
                                disabled: b.disabledSheet,
                                value: b.character.itemsLimit.I,
                                onBlur: y[8] || (y[8] = (w) => S(w, "I")),
                              },
                              null,
                              40,
                              Yi
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "II",
                                disabled: b.disabledSheet,
                                value: b.character.itemsLimit.II,
                                onBlur: y[9] || (y[9] = (w) => S(w, "II")),
                              },
                              null,
                              40,
                              Zi
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "III",
                                disabled: b.disabledSheet,
                                value: b.character.itemsLimit.III,
                                onBlur: y[10] || (y[10] = (w) => S(w, "III")),
                              },
                              null,
                              40,
                              ed
                            ),
                            e(
                              "input",
                              {
                                type: "number",
                                class: "sheet-input sheet-input-size",
                                placeholder: "IV",
                                disabled: b.disabledSheet,
                                value: b.character.itemsLimit.IV,
                                onBlur: y[11] || (y[11] = (w) => S(w, "IV")),
                              },
                              null,
                              40,
                              ad
                            ),
                          ]),
                        ]),
                      ])),
                ]),
                e("div", od, [
                  d.value >= 1023
                    ? (t(),
                      s("div", td, [
                        e("div", rd, [
                          sd,
                          e(
                            "div",
                            nd,
                            U(
                              (($ = b.character.currentItemsLimit) == null
                                ? void 0
                                : $.I) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            id,
                            U(
                              ((X = b.character.currentItemsLimit) == null
                                ? void 0
                                : X.II) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            dd,
                            U(
                              ((ie = b.character.currentItemsLimit) == null
                                ? void 0
                                : ie.III) || "0"
                            ),
                            1
                          ),
                          e(
                            "div",
                            ld,
                            U(
                              ((a = b.character.currentItemsLimit) == null
                                ? void 0
                                : a.IV) || "0"
                            ),
                            1
                          ),
                        ]),
                      ]))
                    : (t(),
                      s("div", ud, [
                        e("div", cd, [
                          md,
                          e("div", pd, [
                            e(
                              "div",
                              gd,
                              U(
                                ((R = b.character.currentItemsLimit) == null
                                  ? void 0
                                  : R.I) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              vd,
                              U(
                                ((k = b.character.currentItemsLimit) == null
                                  ? void 0
                                  : k.II) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              hd,
                              U(
                                ((_ = b.character.currentItemsLimit) == null
                                  ? void 0
                                  : _.III) || "0"
                              ),
                              1
                            ),
                            e(
                              "div",
                              fd,
                              U(
                                ((he = b.character.currentItemsLimit) == null
                                  ? void 0
                                  : he.IV) || "0"
                              ),
                              1
                            ),
                          ]),
                        ]),
                      ])),
                ]),
                e("div", bd, [
                  A(
                    pa,
                    {
                      title: "CREDIT LIMIT",
                      disabled: b.disabledSheet,
                      value: b.character.creditsLimit,
                      "button-width": "6rem",
                      options: g,
                      "mobile-view": d.value < 1023,
                      onUpdateValue:
                        y[12] ||
                        (y[12] = (w) =>
                          b.$emit("handleChangeInventoryDropdown", {
                            value: w,
                            key: "creditsLimit",
                          })),
                    },
                    null,
                    8,
                    ["disabled", "value", "mobile-view"]
                  ),
                  d.value >= 1023
                    ? (t(),
                      s("div", qd, [
                        e("div", Cd, [
                          Ad,
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: b.disabledSheet,
                              value: p.value,
                              onBlur:
                                y[13] || (y[13] = (w) => P(w, "currentLoad")),
                            },
                            null,
                            40,
                            yd
                          ),
                          e(
                            "input",
                            {
                              type: "number",
                              class: "sheet-input sheet-input-size",
                              disabled: b.disabledSheet,
                              value: b.character.maxLoad,
                              onBlur: y[14] || (y[14] = (w) => P(w, "maxLoad")),
                            },
                            null,
                            40,
                            Pd
                          ),
                        ]),
                      ]))
                    : (t(),
                      s("div", Ed, [
                        Sd,
                        e("div", kd, [
                          e(
                            "input",
                            {
                              type: "number",
                              class:
                                "sheet-input sheet-input-size current-load-color",
                              disabled: b.disabledSheet,
                              value: p.value,
                              onBlur:
                                y[15] || (y[15] = (w) => P(w, "currentLoad")),
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
                              disabled: b.disabledSheet,
                              value: b.character.maxLoad,
                              onBlur: y[16] || (y[16] = (w) => P(w, "maxLoad")),
                            },
                            null,
                            40,
                            wd
                          ),
                        ]),
                      ])),
                ]),
              ]),
              e("div", Id, [
                b.disabledSheet ? C("", !0) : (t(), s("div", Md, " NEW ")),
                b.disabledSheet
                  ? C("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 1,
                        class: "button-secondary",
                        onClick:
                          y[17] ||
                          (y[17] = (w) => b.$emit("handleOpenAddWeapon")),
                      },
                      " Weapon "
                    )),
                b.disabledSheet
                  ? C("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 2,
                        class: "button-secondary",
                        onClick:
                          y[18] ||
                          (y[18] = (w) => b.$emit("handleOpenAddAmmunition")),
                      },
                      " Ammo "
                    )),
                b.disabledSheet
                  ? C("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 3,
                        class: "button-secondary",
                        onClick:
                          y[19] ||
                          (y[19] = (w) => b.$emit("handleOpenAddProtection")),
                      },
                      " Armor "
                    )),
                b.disabledSheet
                  ? C("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 4,
                        class: "button-secondary",
                        onClick:
                          y[20] ||
                          (y[20] = (w) => b.$emit("handleOpenAddMisc")),
                      },
                      " General "
                    )),
                b.disabledSheet
                  ? C("", !0)
                  : (t(),
                    s(
                      "button",
                      {
                        key: 5,
                        class: "button-secondary",
                        onClick:
                          y[21] ||
                          (y[21] = (w) => b.$emit("handleOpenAddCursedItem")),
                      },
                      " Cursed Item "
                    )),
              ]),
              b.character.inventory.length > 0
                ? (t(),
                  s("div", $d, [
                    r.value.length > 0
                      ? (t(),
                        s("div", Dd, [
                          (t(!0),
                          s(
                            j,
                            null,
                            G(
                              r.value,
                              (w) => (
                                t(),
                                s(
                                  "div",
                                  { key: w.id, class: "sheet-card-list" },
                                  [
                                    w.itemType === "weapon"
                                      ? (t(),
                                        s("div", Td, [
                                          A(
                                            Ho,
                                            {
                                              id: w.id,
                                              weapon: w,
                                              disabled: b.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[22] ||
                                                (y[22] = (Z) =>
                                                  b.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEquip:
                                                y[23] ||
                                                (y[23] = (Z) =>
                                                  b.$emit(
                                                    "handleEquipItem",
                                                    Z
                                                  )),
                                              onHandleEdit: f,
                                            },
                                            null,
                                            8,
                                            ["id", "weapon", "disabled"]
                                          ),
                                        ]))
                                      : C("", !0),
                                    w.itemType === "protection"
                                      ? (t(),
                                        s("div", Vd, [
                                          A(
                                            xo,
                                            {
                                              id: w.id,
                                              protection: w,
                                              disabled: b.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[24] ||
                                                (y[24] = (Z) =>
                                                  b.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEquip:
                                                y[25] ||
                                                (y[25] = (Z) =>
                                                  b.$emit(
                                                    "handleEquipItem",
                                                    Z
                                                  )),
                                              onHandleEdit: f,
                                            },
                                            null,
                                            8,
                                            ["id", "protection", "disabled"]
                                          ),
                                        ]))
                                      : C("", !0),
                                    w.itemType === "misc" ||
                                    w.itemType === "ammunition"
                                      ? (t(),
                                        s("div", zd, [
                                          A(
                                            jo,
                                            {
                                              id: w.id,
                                              misc: w,
                                              disabled: b.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[26] ||
                                                (y[26] = (Z) =>
                                                  b.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEdit: f,
                                            },
                                            null,
                                            8,
                                            ["id", "misc", "disabled"]
                                          ),
                                        ]))
                                      : C("", !0),
                                    w.itemType === "cursedItem"
                                      ? (t(),
                                        s("div", _d, [
                                          A(
                                            Fo,
                                            {
                                              id: w.id,
                                              "cursed-item": w,
                                              disabled: b.disabledSheet,
                                              "only-show": "",
                                              sheet: "",
                                              onHandleRemove:
                                                y[27] ||
                                                (y[27] = (Z) =>
                                                  b.$emit(
                                                    "handleRemoveItem",
                                                    Z.id
                                                  )),
                                              onHandleEdit: f,
                                            },
                                            null,
                                            8,
                                            ["id", "cursed-item", "disabled"]
                                          ),
                                        ]))
                                      : C("", !0),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (t(), s("div", Od, Ld)),
                  ]))
                : (t(), s("div", Hd, jd)),
            ])
          );
        }
      );
    },
  }),
  ot = V(Fd, [["__scopeId", "data-v-d9d5c266"]]),
  Nd = { class: "tab" },
  Bd = { class: "textarea-container" },
  Qd = ["disabled", "placeholder", "value", "onBlur"],
  Gd = T({
    __name: "DescriptionTab",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeDescription"],
    setup(o, { emit: q }) {
      const l = q,
        v = (g, u) => {
          const c = { value: g.target.value, key: u };
          l("handleChangeDescription", c);
        },
        m = [
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
            title: "Objective",
            key: "goal",
            placeholder:
              "Why did the agent join the Order? Why do they fight against the Other Side?",
          },
        ];
      return (g, u) => (
        t(),
        s("div", Nd, [
          (t(),
          s(
            j,
            null,
            G(m, (c) =>
              e("div", { key: c.title }, [
                e("div", Bd, [
                  e("h3", null, U(c.title), 1),
                  e(
                    "textarea",
                    {
                      class: "textarea description-tab-size",
                      rows: "5",
                      disabled: g.disabledSheet,
                      placeholder: c.placeholder,
                      value: g.character.description[c.key],
                      onBlur: (d) => v(d, c.key),
                    },
                    `\r
        `,
                    40,
                    Qd
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
  tt = V(Gd, [["__scopeId", "data-v-c2fd2df6"]]),
  Xd = { class: "sheet-tab-container" },
  Wd = { class: "tab-nav-container" },
  Kd = T({
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
    setup(o, { emit: q }) {
      const l = q,
        v = [
          { label: "COMBAT", value: 0 },
          { label: "ABILITIES", value: 1 },
          { label: "RITUALS", value: 2 },
          { label: "INVENTORY", value: 3 },
          { label: "DESCRIPTION", value: 4 },
        ],
        m = [Yo, et, at, ot, tt],
        g = E(0),
        u = (R) => (g.value = R),
        c = (R) => l("handleChangeAttackText", R),
        d = (R) => l("handleChangeAttackNumber", R),
        r = (R) => l("handleChangeAttackDropdown", R),
        i = (R) => l("handleChangeDescription", R),
        p = (R) => l("handleChangeInventoryNumber", R),
        f = (R) => l("handleChangeItemsLimit", R),
        S = (R) => l("handleChangeInventoryDropdown", R),
        P = (R) => l("handleRollAttack", R),
        b = (R) => l("handleChangeRitualDc", R),
        y = (R) => l("handleEditPower", R),
        $ = (R) => l("handleEditRitual", R),
        X = (R) => l("handleEditAttack", R),
        ie = (R) => l("handleEditItem", R),
        a = (R, k) => l("handleRollRitual", R, k);
      return (R, k) => (
        t(),
        s("div", Xd, [
          e("div", Wd, [
            A(
              ve,
              {
                "tab-options": v,
                "current-tab": g.value,
                "no-gap": "",
                onHandleNavigation: u,
              },
              null,
              8,
              ["current-tab"]
            ),
          ]),
          (t(),
          z(
            ke,
            null,
            [
              (t(),
              z(
                ga(m[g.value]),
                {
                  character: R.character,
                  "disabled-sheet": R.disabledSheet,
                  onHandleOpenAbilitiesModal:
                    k[0] || (k[0] = (_) => R.$emit("handleOpenAbilitiesModal")),
                  onHandleOpenRitualsModal:
                    k[1] || (k[1] = (_) => R.$emit("handleOpenRitualsModal")),
                  onHandleOpenItemsModal:
                    k[2] || (k[2] = (_) => R.$emit("handleOpenItemsModal")),
                  onHandleOpenAddAttack:
                    k[3] || (k[3] = (_) => R.$emit("handleOpenAddAttack")),
                  onHandleOpenAddPower:
                    k[4] || (k[4] = (_) => R.$emit("handleOpenAddPower")),
                  onHandleOpenAddRitual:
                    k[5] || (k[5] = (_) => R.$emit("handleOpenAddRitual")),
                  onHandleOpenAddWeapon:
                    k[6] || (k[6] = (_) => R.$emit("handleOpenAddWeapon")),
                  onHandleOpenAddProtection:
                    k[7] || (k[7] = (_) => R.$emit("handleOpenAddProtection")),
                  onHandleOpenAddAmmunition:
                    k[8] || (k[8] = (_) => R.$emit("handleOpenAddAmmunition")),
                  onHandleOpenAddMisc:
                    k[9] || (k[9] = (_) => R.$emit("handleOpenAddMisc")),
                  onHandleOpenAddCursedItem:
                    k[10] ||
                    (k[10] = (_) => R.$emit("handleOpenAddCursedItem")),
                  onHandleRemoveAttack:
                    k[11] || (k[11] = (_) => R.$emit("handleRemoveAttack", _)),
                  onHandleEditAttack: X,
                  onHandleEditPower: y,
                  onHandleEditRitual: $,
                  onHandleEditItem: ie,
                  onHandleRemovePower:
                    k[12] || (k[12] = (_) => R.$emit("handleRemovePower", _)),
                  onHandleRemoveRitual:
                    k[13] || (k[13] = (_) => R.$emit("handleRemoveRitual", _)),
                  onHandleRemoveItem:
                    k[14] || (k[14] = (_) => R.$emit("handleRemoveItem", _)),
                  onHandleEquipItem:
                    k[15] || (k[15] = (_) => R.$emit("handleEquipItem", _)),
                  onHandleChangeAttackText: c,
                  onHandleChangeAttackNumber: d,
                  onHandleChangeAttackDropdown: r,
                  onHandleChangeDescription: i,
                  onHandleChangeInventoryNumber: p,
                  onHandleChangeItemsLimit: f,
                  onHandleChangeInventoryDropdown: S,
                  onHandleRollDices:
                    k[16] || (k[16] = (_) => R.$emit("handleRollDices", _)),
                  onHandleRollAttack: P,
                  onHandleChangeRitualDc: b,
                  onHandleRollRitual: a,
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
  Jd = V(Kd, [["__scopeId", "data-v-ff57a115"]]),
  Yd = { class: "class-abilities-container" },
  Zd = { key: 0, class: "search-container" },
  el = { key: 1, class: "class-abilities-content" },
  al = T({
    __name: "ClassAbilities",
    props: { classValue: {} },
    emits: ["handleAddPower"],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = E([]),
        g = E([]),
        u = E([]),
        c = E(0),
        d = E(""),
        r = (p) => v("handleAddPower", p);
      ue(() => {
        u.value.push({ label: `${l.classValue.name} Powers`, value: 0 }),
          l.classValue.paths.forEach((p, f) => {
            u.value.push({ label: p.name, value: f + 1 }), g.value.push(p);
          });
        for (const p of l.classValue.abilities) m.value.push(p);
        for (const p of l.classValue.powers) m.value.push(p);
      });
      const i = N(() =>
        m.value
          ? c.value === 0
            ? m.value
                .filter((p) => K(p.name, d.value))
                .sort((p, f) => p.name.localeCompare(f.name))
            : g.value[c.value - 1].abilities
          : []
      );
      return (p, f) => (
        t(),
        s("div", Yd, [
          A(
            ve,
            {
              "current-tab": c.value,
              "tab-options": u.value,
              secondary: "",
              onHandleNavigation: f[0] || (f[0] = (S) => (c.value = S)),
            },
            null,
            8,
            ["current-tab", "tab-options"]
          ),
          c.value === 0
            ? (t(),
              s("div", Zd, [
                A(
                  ye,
                  {
                    value: d.value,
                    dark: "",
                    onUpdate: f[1] || (f[1] = (S) => (d.value = S)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          i.value.length > 0
            ? (t(),
              s("div", el, [
                (t(!0),
                s(
                  j,
                  null,
                  G(
                    i.value,
                    (S) => (
                      t(),
                      s("div", { key: S.name, class: "class-abilitie-card" }, [
                        A(Ge, { power: S, onHandleAdd: r }, null, 8, ["power"]),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : C("", !0),
        ])
      );
    },
  }),
  la = V(al, [["__scopeId", "data-v-bb507b22"]]),
  ol = { class: "class-abilities-container" },
  tl = { class: "search-container" },
  rl = { class: "class-abilities-content" },
  sl = T({
    __name: "BackgroundPower",
    emits: ["handleAddPower"],
    setup(o, { emit: q }) {
      const l = q,
        v = (c) => l("handleAddPower", c),
        m = E([]),
        g = E("");
      ue(() => {
        for (const c of Tr) m.value.push(c.power);
      });
      const u = N(() =>
        m.value
          .filter((c) => K(c.name, g.value))
          .sort((c, d) => c.name.localeCompare(d.name))
      );
      return (c, d) => (
        t(),
        s("div", ol, [
          e("div", tl, [
            A(
              ye,
              {
                value: g.value,
                dark: "",
                onUpdate: d[0] || (d[0] = (r) => (g.value = r)),
              },
              null,
              8,
              ["value"]
            ),
          ]),
          e("div", rl, [
            (t(!0),
            s(
              j,
              null,
              G(
                u.value,
                (r) => (
                  t(),
                  s("div", { key: r.name, class: "class-abilitie-card" }, [
                    A(Ge, { power: r, onHandleAdd: v }, null, 8, ["power"]),
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
  nl = V(sl, [["__scopeId", "data-v-5db4501a"]]),
  il = [
    {
      name: "Aprender Ritual",
      element: "Varies",
      description:
        "<p>Através de uma conexão com as memórias de ocultistas do passado e os segredos das entidades, você aprende e pode conjurar um ritual de 1º círculo à sua escolha. Além disso, você pode substituir um ritual que já conhece por outro. A partir de 45% de NEX, quando escolhe este poder, você aprende um ritual de até 2º círculo e, a partir de 75% de NEX, aprende um ritual de até 3º círculo. Você pode escolher esse poder quantas vezes quiser, mas está sujeito ao limite de rituais conhecidos. <em>Este poder conta como um poder do elemento do ritual escolhido.</em></p>",
      hasAutomation: !1,
    },
    {
      name: "Resistir a <Elemento>",
      element: "Varies",
      description:
        "<p>Escolha entre Conhecimento, Energia, Morte ou Sangue. Você recebe resistência 10 contra esse elemento. <em>Este poder conta como um poder do elemento escolhido.</em></p><p><span>Afinidade:</span> aumenta a resistência para 20.</p>",
      hasAutomation: !1,
    },
    {
      name: "Expansão de Conhecimento",
      element: "Knowledge",
      description:
        "<p>Você se conecta com o Conhecimento do Outro Lado, rompendo os limites de sua compreensão. Você aprende um poder de classe que não pertença à sua classe (caso o poder possua pré-requisitos, você precisa preenchê-los). <em>Pré-requisito:</em> Conhecimento 1.</p><p><span>Afinidade:</span> você aprende um segundo poder de classe que não pertença à sua classe.</p>",
      hasAutomation: !1,
    },
    {
      name: "Percepção Paranormal",
      element: "Knowledge",
      description:
        "<p>O Conhecimento sussurra em sua mente. Em cenas de investigação, sempre que fizer um teste para procurar pistas, você pode rolar novamente um dado com resultado menor que 10. Você deve aceitar a segunda rolagem, mesmo que seja menor que a primeira.</p><p><span>Afinidade:</span> você pode rolar novamente até dois dados com resultado menor que 10.</p>",
      hasAutomation: !1,
    },
    {
      name: "Precognição",
      element: "Knowledge",
      description:
        "<p>Você possui um “sexto sentido” que o avisa do perigo antes que ele aconteça. Você recebe +2 em Defesa e em testes de resistência. <em>Pré-requisito:</em> Conhecimento 1.</p><p><span>Afinidade:</span> você fica imune à condição desprevenido.</p>",
      hasAutomation: !1,
    },
    {
      name: "Sensitivo",
      element: "Knowledge",
      description:
        "<p>Você consegue sentir as emoções e intenções de outros personagens, como medo, raiva ou malícia, recebendo +5 em testes de Diplomacia, Intimidação e Intuição.</p><p><span>Afinidade:</span> quando você faz um teste oposto usando uma dessas perícias, o oponente sofre –1d20.</p>",
      hasAutomation: !1,
    },
    {
      name: "Visão do Oculto",
      element: "Knowledge",
      description:
        "<p>Você não enxerga mais pelos olhos, mas sim pela percepção do Conhecimento em sua mente. Você recebe +5 em testes de Percepção e enxerga no escuro.</p><p><span>Afinidade:</span> você ignora camuflagem.</p>",
      hasAutomation: !1,
    },
    {
      name: "Afortunado",
      element: "Energy",
      description:
        "<p>A Energia considera resultados medíocres entediantes. Uma vez por rolagem, você pode rolar novamente um resultado 1 em qualquer dado que não seja d20.</p><p><span>Afinidade:</span> além disso, uma vez por teste, você pode rolar novamente um resultado 1 em d20.</p>",
      hasAutomation: !1,
    },
    {
      name: "Campo Protetor",
      element: "Energy",
      description:
        "<p>Você consegue gerar um campo de Energia que o protege de perigos. Quando usa a ação esquiva, você pode gastar 1 PE para receber +5 em Defesa. <em>Pré-requisito:</em> Energia 1.</p><p><span>Afinidade:</span> quando usa este poder, você também recebe +5 em Reflexo e, até o início de seu próximo turno, se passar em um teste de Reflexo que reduziria o dano à metade, em vez disso não sofre nenhum dano.</p>",
      hasAutomation: !1,
    },
    {
      name: "Causalidade Fortuita",
      element: "Energy",
      description:
        "<p>A Energia o conduz rumo à descobertas. Em cenas de investigação, a DT para procurar pistas diminui em -5 para você até você encontrar uma pista.</p><p><span>Afinidade:</span> a DT para procurar pistas sempre diminui em –5 para você.</p>",
      hasAutomation: !1,
    },
    {
      name: "Golpe de Sorte",
      element: "Energy",
      description:
        "<p>Seus ataques recebem +1 na margem de ameaça. <em>Pré-requisito:</em> Energia 1.</p><p><span>Afinidade:</span> seus ataques recebem +1 no multiplicador de crítico.</p>",
      hasAutomation: !1,
    },
    {
      name: "Manipular Entropia",
      element: "Energy",
      description:
        "<p>Nada diverte mais a Energia do que a possibilidade de um desastre ainda maior. Você pode gastar 2 PE para fazer um alvo em alcance curto (exceto você mesmo) rolar novamente um dos dados em um teste de perícia. <em>Pré-requisito:</em> Energia 1.</p><p><span>Afinidade:</span> o alvo rola novamente todos os dados que você escolher.</p>",
      hasAutomation: !1,
    },
    {
      name: "Encarar a Morte",
      element: "Death",
      description:
        "<p>Sua conexão com a Morte faz com que você não hesite em situações de perigo. Durante cenas de ação, seu limite de gasto de PE aumenta em +1 (isso não afeta a DT de seus efeitos).</p><p><span>Afinidade:</span> durante cenas de ação, seu limite de gasto de PE aumenta em +2 (para um total de +3).</p>",
      hasAutomation: !1,
    },
    {
      name: "Escapar da Morte",
      element: "Death",
      description:
        "<p>A Morte tem um interesse especial em sua caminhada. Uma vez por cena, quando receber dano que o deixaria com 0 PV, você fica com 1 PV. Não funciona em caso de dano massivo. <em>Pré-requisito:</em> Morte 1.</p><p><span>Afinidade:</span> em vez do normal, você evita completamente o dano. Em caso de dano massivo, você fica com 1 PV.</p>",
      hasAutomation: !1,
    },
    {
      name: "Potencial Aprimorado",
      element: "Death",
      description:
        "<p>A Morte lhe concede potencial latente de momentos roubados de outro lugar. Você recebe +1 ponto de esforço por NEX. Quando sobe de NEX, os PE que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder em NEX 30%, recebe 6 PE. Quando subir para NEX 35%, recebe +1 PE adicional, e assim por diante.</p><p><span>Afinidade:</span> você recebe +1 PE adicional por NEX (para um total de +2 PE por NEX).</p>",
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "potencial-aprimorado",
    },
    {
      name: "Potencial Reaproveitado",
      element: "Death",
      description:
        "<p>Você absorve os momentos desperdiçados de outros seres. Uma vez por rodada, quando passa num teste de resistência, você ganha 2 PE temporários cumulativos. Os pontos desaparecem no final da cena.</p><p><span>Afinidade:</span> você ganha 3 PE temporários, em vez de 2.</p>",
      hasAutomation: !1,
    },
    {
      name: "Surto Temporal",
      element: "Death",
      description:
        "<p>A sua percepção temporal se torna distorcida e espiralizada, fazendo com que a noção de passagem do tempo nunca mais seja a mesma para você. Uma vez por cena, durante seu turno, você pode gastar 3 PE para realizar uma ação padrão adicional. <em>Pré-requisito:</em> Morte 2.</p><p><span>Afinidade:</span> em vez de uma vez por cena, você pode usar este poder uma vez por turno.</p>",
      hasAutomation: !1,
    },
    {
      name: "Anatomia Insana",
      element: "Blood",
      description:
        "<p>O seu corpo é transfigurado e parece desenvolver um instinto próprio separado da sua consciência. Você tem 50% de chance (resultado par em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. <em>Pré-requisito:</em> Sangue 2.</p><p><span>Afinidade:</span> você é imune aos efeitos de acertos críticos e ataques furtivos.</p>",
      hasAutomation: !1,
    },
    {
      name: "Arma de Sangue",
      element: "Blood",
      description:
        "<p>O Sangue devora parte de seu corpo e se manifesta como parte de você. Você pode gastar uma ação de movimento e 2 PE para produzir garras, chifres ou uma lâmina de sangue cristalizado que brota de seu antebraço. Qualquer que seja sua escolha, é considerada uma arma simples leve que você não precisa empunhar e causa 1d6 pontos de dano de Sangue. Uma vez por turno, quando você usa a ação agredir, pode gastar 1 PE para fazer um ataque adicional com essa arma. A arma dura até o final da cena, e então se desfaz numa poça de sangue coagulado.</p><p><span>Afinidade:</span> a arma se torna permanentemente parte de você e causa 1d10 pontos de dano de Sangue.</p>",
      hasAutomation: !1,
    },
    {
      name: "Sangue de Ferro",
      element: "Blood",
      description:
        "<p>O seu sangue flui de forma paranormal e agressiva, concedendo vigor não natural. Você recebe +2 pontos de vida por NEX. Quando sobe de NEX, os PV que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder em NEX 50%, recebe 20 PV. Quando subir para NEX 55%, recebe +2 PV, e assim por diante.</p><p><span>Afinidade:</span> você recebe +5 em Fortitude e se torna imune a venenos e doenças.</p>",
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "sangue-de-ferro",
    },
    {
      name: "Sangue Fervente",
      element: "Blood",
      description:
        "<p>A intensidade da dor desperta em você sentimentos bestiais e prazerosos que você nem imaginava que existiam. Enquanto estiver machucado, você recebe +1 em Agilidade ou Força, à sua escolha (escolha sempre que este efeito for ativado). <em>Pré-requisito:</em> Sangue 2.</p><p><span>Afinidade:</span> o bônus que você recebe em Agilidade ou Força aumenta para +2.</p>",
      hasAutomation: !1,
    },
    {
      name: "Sangue Vivo",
      element: "Blood",
      description:
        "<p>A carnificina não pode parar, o Sangue precisa continuar fluindo. Na primeira vez que ficar machucado durante uma cena, você recebe cura acelerada 2. Esse efeito nunca cura você acima da metade dos PV máximos (ou seja, você nunca deixa de estar machucado) e termina no fim da cena ou caso você perca a condição machucado. <em>Pré-requisito:</em> Sangue 1.</p><p><span>Afinidade:</span> a cura acelerada aumenta para 5.</p>",
      hasAutomation: !1,
    },
  ],
  dl = [
    {
      name: "Revelar Verdade",
      circle: "3",
      element: "Conhecimento",
      execution: "Padrão",
      range: "Curto",
      target: "1 Pessoa",
      duration: "Instantânea",
      save: "Vontade Parcial",
      pictureURL: "/img/rituals/revelar-verdade.webp",
      pictureFullPath: "/img/rituals/revelar-verdade.webp",
      description:
        "<p>Você queima uma página de uma história de terror. A fumaça do fogo se direciona a um alvo em alcance curto e o faz enxergar amigos e família que lhe contam verdades dolorosas. Caso o alvo falhe no teste de resistência, sofre 2d8 de dano Mental, fica Paralisado (“Ordem Paranormal RPG”, página 311) por 1d3 Rodadas e Desorientado (página 25) pelo resto da cena. Se passar, ele não tem as visões mas sofre metade do dano Mental e fica Desorientado por 1d4 rodadas. O alvo pode repetir o teste de resistência enquanto estiver paralisado para voltar a se mover e parar as visões. Caso ele falhe em todos os testes de resistência, as visões serão dissipadas com o fim das condições do ritual.</p><p><strong>Verdadeiro (+4 PE):</strong> Você queima um livro de terror, o alvo são seres escolhidos no alcance e o dano em Mental é aplicado sempre que o alvo falhar no teste de resistência. Os seus PE totais são reduzidos em 1. Requer Afinidade.</p>",
    },
    {
      name: "Círculo do Desespero",
      circle: "2",
      element: "Conhecimento",
      execution: "1 Minuto",
      range: "Toque",
      area: "Um círculo de 4,5m de raio",
      duration: "Cena",
      save: "Veja o texto",
      pictureURL: "/img/rituals/circulo-do-desespero.webp",
      pictureFullPath: "/img/rituals/circulo-do-desespero.webp",
      description:
        "<p>Você desenha o símbolo do ritual em um círculo de 4,5m de raio. Quando concluir o desenho ele desaparecerá e o próximo ser que pisar nessa área ativará o efeito do ritual. Todos na área do desenho serão envoltos em correntes, ficarão Agarrados e sofrerão 2d8 pontos de dano mental. A cada rodada, os seres que falharem na Resistência permanecem presos, sofrendo 2d8 pontos de dano mental no início de cada um dos seus turnos. Se for bem-sucedido, o ser é solto pelas correntes mesmo estando dentro do círculo.</p><p><strong>Discente (+3 PE):</strong> O dano mental muda de 2d8 para 4d8. Requer 3° círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> O raio do círculo aumenta para 9m e os alvos ficam Esmorecidos (“Ordem Paranormal”, página 311). até o fim da Cena, mesmo que escapem da condição Agarrado. Requer Afinidade e 4° círculo.</p>",
    },
    {
      name: "Bloquear Saber",
      circle: "2",
      element: "Conhecimento",
      execution: "Padrão",
      range: "Curto",
      target: "1 Ser",
      duration: "Cena",
      save: "Vontade Anula",
      pictureURL: "/img/rituals/bloquear-saber.webp",
      pictureFullPath: "/img/rituals/bloquear-saber.webp",
      description:
        "<p>Você deve ter em mãos um cadeado com o símbolo do ritual marcado. Ao se concentrar nele e escolher um alvo, os dois terão informações bloqueadas de suas mentes. Pode ser um nível de treinamento em perícia (dando penalidade de -5 nos testes), o conhecimento de um ritual, a proficiência em um tipo de arma ou até mesmo uma senha. Você escolhe o que bloqueará do alvo e vice-versa. Caso seja escolhida uma informação ou conhecimento que os dois possuem, os dois o terão bloqueado obrigatoriamente. Nesta ocasião, se você tiver escolhido essa informação, o alvo não poderá escolher o que bloquear de você e vice-versa. Quando o efeito do ritual é ativado, uma chave dourada surge e tranca o cadeado. Caso seja destrancado, o ritual será dissipado, do contrário, dura até o fim da cena.</p><p><strong>Discente (+3 PE):</strong> Você bloqueia 2 informações de uma vez, e tem 2 informações de escolha do alvo bloqueadas. Requer 3° círculo.</p><p><strong>Verdadeiro (+6 PE):</strong> Você bloqueia uma informação do alvo e o efeito reverso não te afeta. Requer 3° círculo e Afinidade.</p>",
    },
    {
      name: "Ver História",
      circle: "1",
      element: "Conhecimento",
      execution: "Padrão",
      range: "Toque",
      target: "1 Objeto",
      duration: "Instantânea",
      pictureURL: "/img/rituals/ver-historia.webp",
      pictureFullPath: "/img/rituals/ver-historia.webp",
      description:
        "<p>Você desenha o símbolo deste ritual em um objeto, e sigilos do Outro Lado cobrem sua superfície completamente, brilhando em dourado junto com o símbolo. A luz vinda do objeto projeta uma cena importante do passado dele, mas só você consegue vê-la. Você pode fazer testes para investigá-la caso o ritual seja feito em uma cena de Interlúdio.</p><p><strong>Discente (+2 PE):</strong> Você pode escolher quem vê a cena, e todos podem fazer testes para investigá-la em cenas de Interlúdio.</p><p><strong>Verdadeiros (+9 PE):</strong> A duração muda de Instantânea para Cena. Até o fim da cena, o objeto projeta os momentos mais importantes nos quais estava presente. Todos que você escolher podem fazer teste para investigar até o fim da cena. Requer 4° círculo e Afinidade.</p>",
    },
    {
      name: "Escudo Aquático",
      circle: "3",
      element: "Energia",
      execution: "Padrão",
      range: "Médio",
      target: "1 Ser",
      duration: "Sustentada",
      pictureURL: "/img/rituals/escudo-aquatico.webp",
      pictureFullPath: "/img/rituals/escudo-aquatico.webp",
      description:
        "<p>Você quebra um pequeno recipiente cilíndrico com água e gera um domo de água ao redor de um alvo. Toda a área num raio de 3m do alvo é coberta por ele. Qualquer ataque à distância, projétil ou ser, tem a sua velocidade reduzida à metade ao passar pela barreira. Todo efeito que cause dano e tente atravessá-la terão o dano reduzido pela metade contra todos os seres dentro do domo. Ele é considerado terreno difícil para todos que tentam atravessá-lo. Qualquer dano de Fogo, Eletricidade ou de Energia que tente atravessar o domo é absorvido. Caso ele seja afetado por dano em área que cause 80 pontos de dano ou mais de uma vez só, será dissipado.</p><p><strong>Verdadeiro (+4 PE):</strong> Qualquer ser que tenta entrar no domo precisa testar Atletismo (DT do ritual) para conseguir passar. Esse é considerado um teste de resistência para bônus e penalidades. O dano necessário para dissipar o domo aumenta para 100.</p>",
    },
    {
      name: "Ressecar",
      circle: "2",
      element: "Energia",
      execution: "Padrão",
      range: "Curto",
      target: "1 Ser",
      duration: "Cena",
      save: "Fortitude Anula",
      pictureURL: "/img/rituals/ressecar.webp",
      pictureFullPath: "/img/rituals/ressecar.webp",
      description:
        "<p>Você resseca um alvo, retirando parte da água em seu corpo. Para utilizar esse ritual é necessário um recipiente com água vinda de mares, lagos, oceanos, etc. A água presente no recipiente irá cercar o alvo e atrair os líquidos do corpo para si. O Alvo fica Exausto e Alquebrado (“Ordem Paranormal RPG”, páginas 310 e 311) caso falhe na resistência.</p><p><strong>Discente (+3 PE):</strong> A água congela ao sair do alvo, tornando-se dezenas de lascas de gelo. É possível lançá-las em um ser que esteja a alcance médio do alvo ao gastar uma ação de movimento. O ser atingido sofrerá 2d10 de dano de Perfuração e 2d10 de dano de Frio. Passando em um teste de Reflexos, o dano pode ser reduzido pela metade.</p><p><strong>Verdadeiro (+9 PE):</strong> O alcance muda para médio e o alvo para seres escolhidos. Você retira a água do corpo de diversos alvos e envia as lascas de gelo a um único alvo. Esse alvo tem direito a um teste de Reflexos (DT do ritual) para anular o efeito. Caso falhe, as células do corpo dele serão preenchidas com água, causando rompimento. O alvo sofre 1d10 de dano de Sangue e perde 1,5 metros de deslocamento até o fim da cena para cada ser de tamanho médio ou maior que sofreu o primeiro efeito do ritual. Após o fim da primeira rodada nesse estado, ele deve fazer um teste de Fortitude (DT do ritual +5), caso falhe fica Enjoado (“Ordem Paranormal RPG”, página 310) pela Cena.</p>",
    },
    {
      name: "Afogar",
      circle: "2",
      element: "Energia",
      execution: "Padrão",
      range: "Curto",
      target: "1 Ser",
      duration: "Sustentada",
      save: "Fortitude (ver descrição)",
      pictureURL: "/img/rituals/afogar.webp",
      pictureFullPath: "/img/rituals/afogar.webp",
      description:
        "<p>Você mergulha o cadáver de um pequeno ser (insetos, ratos, etc) em água. Enquanto mantém o olhar focado num alvo, você cria uma enorme bolha de água ao redor da cabeça dele, causando Asfixiado (“Ordem Paranormal RPG”, página 310). Caso falhe no teste de resistência, o tempo que ele pode prender a respiração é ignorado. Enquanto o conjurador sustenta o ritual, ele deve manter a sua Concentração (“Ordem Paranormal RPG”, página 119). A bolha irá permanecer na cabeça do alvo independentemente de sua locomoção. Seres capazes de respirar embaixo d’água são imunes a esse efeito.</p><p><strong>Discente (+3 PE):</strong> O alvo muda para seres escolhidos. Cada pessoa afetada pelo ritual adiciona 1 PE ao gasto total.</p><p><strong>Verdadeiro (+7 PE):</strong> Assim como Discente, mas a água preenche o corpo do alvo a cada rodada. A DT para resistir à condição Asfixiado aumenta de +5 para +10 a cada teste. Requer Afinidade (“Ordem Paranormal RPG”, página 110) e 3° círculo.</p>",
    },
    {
      name: "Cegar",
      circle: "1",
      element: "Energia",
      execution: "Padrão",
      range: "Médio",
      target: "Seres no alcance",
      duration: "Cena",
      save: "Reflexos Anula",
      pictureURL: "/img/rituals/cegar.webp",
      pictureFullPath: "/img/rituals/cegar.webp",
      description:
        "<p>Caso esteja em um local com acesso à luz solar ou qualquer iluminação que a simule, você pode utilizar um litro de água que esteja em alcance curto (em locais muito úmidos é possível utilizar a umidade do ar) para refratar a luz solar milhões de vezes, criando um intenso arco-íris. Todos dentro do alcance que falharem ficarão sob efeito da condição Cego até o fim da cena. Criaturas incapazes de enxergar não são afetadas por esse ritual.</p><p><strong>Discente (+2 PE):</strong> Você e os seus aliados não são afetados pelo ritual.</p><p><strong>Verdadeiro (+5 PE):</strong> Assim como o Discente, mas o alcance aumenta para longo e as criaturas são afetadas mesmo que não enxerguem. Requer 3° círculo.</p>",
    },
    {
      name: "Encontro Anacrônico",
      circle: "1",
      element: "Morte",
      execution: "completa",
      range: "toque",
      target: "Um cadáver e uma pessoa",
      duration: "sustained",
      pictureURL: "/img/rituals/encontro-anacronico.webp",
      pictureFullPath: "/img/rituals/encontro-anacronico.webp",
      description:
        "<p>Você deve manter contato físico direto com um cadáver (como por exemplo, segurar o braço do finado com a mão nua) e voltar os ponteiros de um relógio analógico. Enquanto isso, um aliado deve despejar cinzas humanas sobre o corpo morto. No início da próxima rodada, o cadáver irá retornar à vida e poderá responder perguntas para as quais ele saberia as respostas, incluindo como morreu. Em uma cena de ação, a cada 2 turnos que o ritual estiver sendo sustentado, os dois presentes perderão 1d10 de PV. Caso seja usado fora de combate, a penalidade é aplicada a cada 10 segundos.</p><p><strong>Discente (+2 PE):</strong> Você pode conjurar o ritual sozinho, porém a perda de PV muda de 1D10 para 2d8. Requer 2° círculo.</p>",
    },
    {
      name: "Continuidade Retroativa",
      circle: "2",
      element: "Morte",
      execution: "movimento",
      range: "pessoal",
      target: "você",
      duration: "instantaneous",
      pictureURL: "/img/rituals/continuidade-retroativa.webp",
      pictureFullPath: "/img/rituals/continuidade-retroativa.webp",
      description:
        "<p>Você quebra um osso humano e despeja cinzas em um relógio analógico de pulso com o vidro quebrado. As partes do osso e as cinzas formam novos ponteiros que se movem em sentido anti-horário e marcam o momento exato de sua última ação neste turno (desconsiderando a conjuração do ritual). Você pode tentar refazê-la para alcançar um melhor desempenho. Caso ela envolva um teste, você receberá +1d20 nele. Se envolver que alvos tenham que realizar testes, eles recebem -1d20. A ação de movimento utilizada para conjurar o ritual ainda deve ser gasta para manter a ordem dos eventos na linha do tempo.</p><p><strong>Discente (+3 PE):</strong> O bônus do ritual muda de +1d20 para +2d20 e a penalidade de alvos muda de -1d20 para -2d20. Requer 3° círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> O bônus muda para +2d20 e a penalidade para -2d20. Além disso, a DT do seu teste diminui em 2 e a dos alvos aumenta em 2. Requer 4° círculo e afinidade.</p>",
    },
    {
      name: "Memento Mori",
      circle: "2",
      element: "Morte",
      execution: "padrão",
      range: "toque",
      target: "1 objeto",
      duration: "instantaneous",
      pictureURL: "/img/rituals/memento-mori.webp",
      pictureFullPath: "/img/rituals/memento-mori.webp",
      description:
        "<p>Você pode reviver os últimos momentos de uma pessoa morta. Para isso é preciso um objeto importante do falecido, cinzas, e um peão. Você deve afundar o objeto nas cinzas e rodar o peão. Durante o processo, você fica Indefeso (“Ordem Paranormal RPG”, página 311) e tem sua mente tomada por pensamentos e sensações que não são suas. Quando o ritual acabar, o peão pára e você sofre uma perda de PV igual à metade do dano que causou a morte da pessoa. Se a morte tenha sido por causas naturais, você sofre 2d12 de dano de Morte e envelhece 1 ano. Só é possível usar esse ritual uma vez por objeto.</p><p><strong>Verdadeiro (+3 PE):</strong> Você vê também as duas últimas pessoas a tocarem no objeto antes de você. O dano é reduzido de 2d12 para 1d6 e, em casos de morte natural, para 1d8. Requer afinidade e 3° círculo.</p>",
    },
    {
      name: "Tormenta Cinérea",
      circle: "3",
      element: "Morte",
      execution: "padrão",
      range: "toque",
      target: "1 ser",
      duration: "sustained",
      save: "Vontade anula",
      pictureURL: "/img/rituals/tormenta-cinerea.webp",
      pictureFullPath: "/img/rituals/tormenta-cinerea.webp",
      description:
        "<p>Você assopra cinzas humanas no rosto de um alvo enquanto mentaliza um labirinto. Caso o alvo falhe ao resistir, ele verá o mundo como um labirinto cheio de inimigos e obstáculos no caminho e ficará Confuso (“Ordem Para- normal RPG”, página 310) até o início de seu próximo turno. Enquanto o ritual for susten- tado, o alvo deve refazer o teste de Vontade no início de cada rodada e, a cada falha, receberá novamente a condição Confuso. Enquanto sustentar esse ritual, você deve manter sua Concentração, sendo necessário realizar testes. Com dois sucessos, o ritual será dissipado.</p><p><strong>Discente (+4 PE):</strong> Não precisa de teste de Concentração para sustentar e a rolagem para Confuso muda de 1d6 para 1d6-1. Se o resultado for zero, o efeito é o de 1.</p><p><strong>Verdadeiro (+9 PE):</strong> O alcance muda para curto, o alvo para seres escolhidos e o custo para sustentar passa a ser 3 PE no início dos turnos. Requer 4° círculo e afinidade.</p>",
    },
    {
      name: "Visita ao Estige",
      circle: "3",
      element: "Morte",
      execution: "padrão",
      range: "curto",
      target: "1 pessoa",
      duration: "sustained",
      save: "Vontade anula",
      pictureURL: "/img/rituals/visita-ao-estige.webp",
      pictureFullPath: "/img/rituals/visita-ao-estige.webp",
      description:
        "<p>Você espalha cinzas ao redor de um alvo para formar um círculo completo. O círculo se fecha em um domo e prende o alvo em um transe espaço-temporal. Ele não conseguirá ver ou ouvir nada além de sombras e vozes incompreensíveis de todos os lugares e épocas. De fora, o alvo e o domo são intangíveis, como uma projeção astral. Com esse ritual, só efei- tos paranormais conseguem atingir o alvo. Enquanto sustentar esse ritual, você deve manter sua Concentração, sendo necessário realizar testes. Ao fim do ritual, o domo se des- faz, o alvo volta ao normal e deve fazer um teste de resistência. Caso falhe, fica Confuso até o fim da cena e perde 1d12 de Sanidade para cada rodada que passou no domo. Se passar, o dano Mental por rodada é 1d6.</p><p><strong>Verdadeiro (+4 PE):</strong> O dano Mental por rodada muda de 1d12 para 2d8 caso falhe, de 1d6 para 1d8 caso passe e para sustentar o ritual não é preciso manter a sua Concen- tração. Requer 4° círculo e afinidade.</p>",
    },
    {
      name: "Devorar Sentimento",
      circle: "1",
      element: "Sangue",
      execution: "movimento",
      range: "toque",
      target: "Uma adaga ou punhal",
      duration: "instantaneous",
      save: "Fortitude anula",
      pictureURL: "/img/rituals/devorar-sentimento.webp",
      pictureFullPath: "/img/rituals/devorar-sentimento.webp",
      description:
        "<p>Você mastiga um pedaço de carne crua enquanto empunha uma Adaga ou um Punhal. O sangue presente na carne percorre seu interior até sair por sua mão, envolvendo a lâmina da arma. Na próxima vez que acertar um ataque com ela, o alvo fica Desorientado por 1 rodada. Além disso, se o ataque for um acerto crítico, você rouba 1d4 PE dele.</p><p><strong>Discente (+2 PE):</strong> A duração da condição e a quantidade de PEs roubados aumentam de 1d4 para 1d6. Requer 3° círculo.</p><p><strong>Verdadeiro (+5 PE):</strong> A execução do ritual muda para padrão, o alvo para uma criatura e a duração para cena. Em vez do normal, sempre que você acertar um ataque neste alvo, ele ficará Desorientado por 1 rodada. Caso o ataque seja um crítico, você recupera 1 PE. Requer 3° círculo e Afinidade.</p>",
    },
    {
      name: "Agonia Controlada",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "médio",
      target: "1 ser",
      duration: "instantaneous",
      save: "Fortitude reduz à metade",
      pictureURL: "/img/rituals/agonia-controlada.webp",
      pictureFullPath: "/img/rituals/agonia-controlada.webp",
      description:
        "<p>Você abre uma ferida de no mínimo 10cm no próprio corpo, perdendo 1d10 PV. Seu sangue se lança na direção de um alvo a sua escolha e gruda em sua pele, transpassando qualquer material no caminho, e inflige dor extrema. Ele sofre 5d10 de dano, metade de Sangue e metade Mental. Qualquer ser que tocar o sangue sofrerá os efeitos do ritual. O líquido se desfaz ao fim da cena.</p><p><strong>Discente (+3 PE):</strong> Você perde 2d6 PV, e o dano no alvo é 6d12. Requer 3° círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> O alvo também sofre efeitos do ritual caso algum ser toque o sangue. Requer 4° círculo e Afinidade.</p>",
    },
    {
      name: "Amaldiçoar Ventre",
      circle: "2",
      element: "Sangue",
      execution: "padrão",
      range: "toque",
      target: "1 pessoa",
      duration: "instantaneous",
      save: "Vontade",
      pictureURL: "/img/rituals/amaldicoar-ventre.webp",
      pictureFullPath: "/img/rituals/amaldicoar-ventre.webp",
      description:
        '<p>Por meio de uma “preparação” que causa o máximo possível de desconforto e sofrimento a uma grávida, seu feto é aos poucos corrompido pelo Paranormal e sofre mutações que causam dores terríveis até o dia do parto. A cada semana que durar essa “preparação”, ela deve fazer um teste de Vontade (DT 20). Se falhar, fica Exausta e não é capaz de recuperar PV, PE ou SAN na ação de interlúdio Relaxar (“Ordem Paranormal RPG”, página 93).</p><p>Ao fim da gravidez, o alvo faz um teste de Vontade (DT do ritual). Para cada semana (no máximo oito, equivalente a dois meses) em que esteve sob “preparação”, a DT aumenta em 1. A partir de oito semanas, a DT do teste aumenta em 1 por mês em que a grávida esteve sob “preparação”. Caso a vítima comece a ser preparada logo após a fecundação, o modificador é +15.</p><p>Caso o alvo passe no teste, o Paranormal adormecerá na criança, evitando os efeitos do ritual. Porém, é possível que ele desperte novamente no futuro: se esse filho interagir diretamente com o Paranormal mais uma vez, ele corre o risco de tornar-se uma criatura de Sangue. Quanto mais velho for o indivíduo, mais forte será essa criatura:</p><p>Com até 10 anos: Zumbi de Sangue (“Or- dem Paranormal RPG”, página 202); Entre 10 e 25 anos: Zumbi de Sangue Bestial (“Ordem Paranormal RPG”, página 203); Com mais de 25 anos: Titã de Sangue (“Ordem Paranormal RPG”, página 201); Esse gatilho só é ativado ao atingir 5% de NEX. Essa transformação acontece gradualmente, ao longo de um mês.</p><p>Se o alvo falhar no teste, o bebê nascerá como um Raquítico. O parto é ainda mais doloroso que o normal e causa sofrimento inimaginável. Para determinar seu destino, é preciso rolar 1d10 na tabela abaixo.</p><p><strong>Discente (+3 PE):</strong> A criança nasce como um Carnífice em vez de um Raquítico. O dado para decidir o destino da gestante muda de 1d6 para 1d6+2. Requer 3° círculo.</p><p><strong>Verdadeiro (+7 PE):</strong> A criança nasce como um Bicéfalo em vez de um Raquítico. O dado para decidir o destino da gestante muda de 1d6 para 1d6+4. Requer 4° círculo.</p><p>Efeitos do Ritual na Gestante: 1 - Sobrevive normalmente. 2 - Fica Sangrando. 3 - Fica Sangrando, porém, sofre 2d6 de dano em vez de 1d6. 4 ou 5 - Entra em Morrendo. 6 ou 7 - Entra em Morrendo faltando apenas uma rodada para morrer. 8 ou 9 - Morre e se torna um Zumbi de Sangue em 1d4+1 rodadas. 10 - Morre e se torna um Zumbi de Sangue Bestial em 1d4+2 rodadas.</p><p><em>"Este é o ritual mais grotesco com o qual já me deparei. Só as mais cruéis, sujas e deturpadas mentes cogitam usá-lo. São pessoas deste tipo que a Ordem tem o prazer de exterminar."</em></p>',
    },
    {
      name: "Empatia Sanguínea",
      circle: "3",
      element: "Sangue",
      execution: "completa",
      range: "toque",
      target: "1 aliado",
      duration: "1d3+3 rodadas",
      pictureURL: "/img/rituals/empatia-sanguinea.webp",
      pictureFullPath: "/img/rituals/empatia-sanguinea.webp",
      description:
        "<p>Você corta a sua mão e a de um aliado e os dois perdem 1d4 PV. Ao apertarem as mãos, é criada uma ligação de sangue. Todo bônus e penalidade sofrido por um nas próximas 1d3+3 rodadas afeta o outro. Mesmo com o fim da duração do ritual, os bônus e penalidades seguem sua duração padrão. Em caso de dano Mental, o valor total é dividido igualmente entre ambos os personagens.</p><p><strong>Verdadeiro (+4 PE):</strong> O ritual dura enquanto sustentado. Requer 4° círculo e Afinidade.</p>",
    },
    {
      name: "Sangue Latejante",
      circle: "3",
      element: "Sangue",
      execution: "padrão",
      range: "pessoal",
      target: "Emanação de 3 metros de raio",
      duration: "instantaneous",
      save: "Fortitude reduz à metade",
      pictureURL: "/img/rituals/sangue-latejante.webp",
      pictureFullPath: "/img/rituals/sangue-latejante.webp",
      description:
        "<p>Com um frasco de sangue nas mãos, você se concentra em todas as criaturas em um raio de 3m. Em seguida, despeja o sangue, misticamente fervido, sobre seu próprio corpo. Todas as criaturas nas quais se concentrou que estiverem dentro do raio sofrem 1d12 pontos de dano Químico para cada dano que a criatura já tenha sofrido desde o início do seu turno na rodada passada. Por exemplo, se desde o início do seu turno na rodada passada até o turno onde está conjurando este ritual, a criatura foi atingida e sofreu dano de 1 ritual e 2 ataques, ela sofrerá 3d12 pontos de dano.</p><p><strong>Verdadeiro (+4 PE):</strong> Aliados não sofrem os efeitos do ritual e o dano muda de 1d12 para 2d6. Requer Afinidade.</p>",
    },
  ],
  ll = [
    {
      name: "Cabeça Petrificante",
      element: "Conhecimento",
      itemType: "cursedItem",
      category: "III",
      slots: 2,
      pictureURL: "/img/items/cabeca-petrificante.webp",
      pictureFullPath: "/img/items/cabeca-petrificante.webp",
      description:
        "<p>Depois de ser derrotada, a Medusa passa a se decompor até que reste apenas seu esqueleto. Seu crânio, no entanto, continua conservado e não mostra sinais de decomposição, como se estivesse preso no tempo, quando a criatura ainda era viva. Ele emite um brilho hipnotizante e intenso, mas não causa efeitos a menos que alguém assim o deseje.</p><p>A Cabeça Petrificante é um item amaldiço- ado especial de Morte, de categoria III, peso 2 e fornece +5 em testes de Diplomacia para Persuadir. Com uma ação padrão e 2 PE, você pode acordá-la e mostrá-la a um ser, que ficará Petrificado (Reflexos DT Pre+10 evita) enquan- to ela estiver em seu campo de visão, mas pode fazer um teste de Vontade (DT igual a anterior) em seu turno para se livrar da condição.</p><p>No entanto, se a Medusa passar 2 cenas sem pretificar ninguém, seu portador deve fazer um teste de Reflexos (DT Pre+5) no início de cada cena subsequente. Se falhar, ele encara a Cabeça de frente e fica Petrificado até que receba ajuda.</p>",
    },
    {
      name: "Corvus Post Mortem",
      element: "Medo",
      itemType: "cursedItem",
      category: "-",
      slots: 0,
      pictureURL: "/img/items/corvus-post-mortem.webp",
      pictureFullPath: "/img/items/corvus-post-mortem.webp",
      description:
        "<p>Após ter sua ampulheta destruída, o Memento Mori desaparece, e um remanescente de sua existência ressurge para aquele que foi alvo de sua perseguição na forma de um corvo decrépito. Ele voa ao seu redor, propondo uma troca mais justa sobre a sua vida e o tempo que lhe resta, cabe a você decidir se a oferta vale a pena.</p><p>O corvo funciona como um Aliado (Ordem Paranormal RPG, página 171) e fornece resistência a dano de Morte 5. Ao enfrentar uma criatura que tenha Morte como elemento principal, você pode escolher envelhecer 1d3+2 anos para evitar que a ameaça te ataque por 1d4+2 rodadas. Se a criatura tiver Morte como elemento secundário, pode escolher envelhecer a mesma quantia para que todo dano que ela lhe causar seja reduzido na metade por 1d3+1 rodadas. Além disso, com uma ação completa, você afasta o corvo e ele fornece seus efeitos para outro personagem durante a cena, retornando a você quando ela acabar.</p>",
    },
    {
      name: "Esqueleto Escondido",
      element: "Medo",
      itemType: "cursedItem",
      category: "II",
      slots: 2,
      pictureURL: "/img/items/esqueleto-escondido.webp",
      pictureFullPath: "/img/items/esqueleto-escondido.webp",
      description:
        "<p>Após destruir o misterioso caixão de pedra do Sepultado, um corpo esquelético parcial se revela em seu interior, composto por diversos braços alongados. Ele é um item amaldiçoado especial de Morte de peso 2.</p><p>Ao deixar o esqueleto em um local ou dentro de algo, ele se encolhe e fica automaticamente furtivo. Quando alguém fica adjacente à sua posição, ele avança e se abraça no alvo (Reflexos DT Agi +5 evita). Enquanto preso, o ser fica Enredado e, após 2 rodadas sendo segurado, Abalado. É possível soltar-se do esqueleto gastando uma ação padrão e vencendo um teste de luta contra ele (teste 3d20+5). Ao se livrar, o artefato rasteja rapidamente de volta para seu dono.</p><p>Carregar restos mortais tomados pelo Paranormal pode ser uma faca de dois gumes. Se o esqueleto não capturar ninguém por 1 dia inteiro, ele passa a ter 10% de chance (resultado 1 em um d10) por rodada de atacar o seu portador.</p>",
    },
    {
      name: "Véu Mesogleio",
      element: "Energia",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      pictureURL: "/img/items/veu-mesogleio.webp",
      pictureFullPath: "/img/items/veu-mesogleio.webp",
      description:
        "<p>Ao matar o Profundo, seu corpo começa a se contorcer e enrugar, diminuindo até o tamanho de uma pessoa comum. Ao investigá-lo, um estranho capuz verde e gelatinoso, cheio de nervos vermelhos e parcialmente translúcido pode ser aproveitado de seus restos.</p><p>Ele é um item amaldiçoado especial de Energia que precisa ser vestido. O Véu Mesogleio fornece resistência a Energia 10, +5 em Atletismo para nadar e duas rodadas adicionais para prender a respiração enquanto você estiver submerso em água.</p><p>Ao sofrer dano de Energia ou Eletricidade, você pode gastar 3 PE para que a pele condutora do Véu acumule as descargas elétricas, liberando-as como uma pequena onda de choque de alcance curto que deixa seres dentro dela Atordoados e aparelhos eletrônicos inutilizados por 1 rodada.</p>",
    },
  ],
  ul = [
    {
      name: "Carne Maleável",
      element: "Sangue",
      description:
        "<p>Após se desfazer por completo, o Derretido deixa para trás um pequeno pedaço de sua carne. Ao tocá-la, ela penetra poros e cria bolhas e manchas até que suas articulações tornem-se extremamente dinâmicas. Você pode passar por lugares menores sem dificuldades como se fosse um ser de tamanho pequeno e, caso tenha um membro decepado (ou se estiver usando a regra opcional de Desmembramentos do Guia Con- fidencial Vol. III: Submundo Ocultista), pode gastar uma ação padrão para colocá-lo de volta desde que o tenha perdido a até 2 rodadas.</p><p>Além disso, com uma ação de movimento e 1 PE você pode consumir parte de uma criatura de Sangue morta na mesma cena, recuperando PV iguais a 1d8+1 por ponto de Vigor da ameaça (apenas 1 uso por criatura). Esta recompensa é um Poder Paranormal de Sangue.</p>",
      hasAutomation: !1,
    },
    {
      name: "Comportamento Insectoide",
      element: "Sangue",
      description:
        "<p>Ao matar a Mescla, ela vira-se em direção a quem desferiu o golpe fatal e cospe uma saliva misturada com sangue, infectando o alvo e provocando alterações biológicas em seu organismo. Você recebe +1d20 em Reflexos, resistência a dano Químico 5 e +5 em testes de resistência que tenham como penalidade a condição Enjoado ou de Fadiga. Contudo, a cada semana, você deve fazer um teste de Fortitude (DT 20 +2 por teste anterior). Se falhar três vezes seguidas, uma Mescla eclode de dentro da sua barriga, o matando instantaneamente. Se conseguir três sucessos nesse teste, consegue assimilar a “Mescla incubada”, aumentando sua resistência a dano Químico para 10 e não correndo risco algum. Esta recompensa é um Poder Paranormal de Sangue.</p>",
      hasAutomation: !1,
    },
    {
      name: "Corpo Congelado",
      element: "Energia",
      description:
        "<p>Quando finalmente começa a se dissipar, o Uivar abraça o ser que provocou seu fim e transfere sua essência, congelando seus órgãos, pensamentos e a própria alma, até que se torne um receptáculo do frio indomável. Você adquire resistência a dano de frio 10 e não sofre penalidades por terreno difícil em neve, mas recebe vulnerabilidade a dano de fogo. Além disso, pode gastar 4 PE e uma ação completa para transformar chuva em granizo (e vice-versa) em um raio de alcance médio por 1d4+2 rodadas. Esta recompensa é um Poder Paranormal de Energia.</p>",
      hasAutomation: !1,
    },
    {
      name: "Dom da Verdadeira Arte",
      element: "Sangue e Morte",
      description:
        "<p>Mesmo dando o golpe final e matando o Amigo Imaginário, o barulho de seu sino ainda reverbera em sua mente, e isso muda sua percepção do mundo, pessoas e, especialmente, da arte. Esse som te inspira de uma forma misteriosa, despertando uma aptidão artística que parecia estar dormente dentro de você. Mas seria ela um talento escondido em seu âmago, ou algo implantado pelo Outro Lado para usá-lo como um instrumento de sua manifestação?</p><p>Você pode gastar uma ação de interlúdio, 3 PE e um componente ritualístico de Morte ou Sangue para criar uma obra de arte, como uma pintura, escultura, texto ou qualquer outra forma de expressão, que possui influências paranormais. A peça é um item amaldiçoado de Morte ou Sangue (conforme o componente usado) que ocupa 1 espaço e possui categoria 0. Um ser que observar a obra por 1 minuto deve fazer um teste de Vontade (DT Pre + seu bônus de treinamento em Ocultismo). Se passar, fica imune aos efeitos da obra até o fim da cena. Se falhar, deve rolar 1d3:</p><p>1 - não pode se afastar por conta própria além de alcance curto do item por 3 rodadas. 2 - perde um turno tentando destruir a arte. 3 - realiza um ataque contra si mesmo ou o ser mais próximo.</p><p>Ao atingir NEX 85%, sua conexão com a arte fica ainda maior e você pode fazer pessoas “entrarem” em suas obras (seguindo a habilidade Quadros do Amigo Imaginário), havendo chances de a criatura ser invocada com elas. Esta recompensa é um poder de Sangue e Morte.</p>",
      hasAutomation: !1,
    },
    {
      name: "Esquecimento Existencial",
      element: "Conhecimento",
      description:
        "<p>Quando o rascunho é derrotado, o ser responsável pelo seu fim passa a sentir-se estranho, deslocado do mundo. Memórias são esquecidas, pessoas ao seu redor não se lembram de momentos que viveram juntos. Ideias que não são ouvidas por ninguém desaparecem, descartadas em um canto isolado da mente. E nesse lugar, um vazio repleto de tudo cresce, em um emaranhado de rabiscos que deveriam ou não ser lembrados, mas que agora se mostram impossíveis. No fim, esses rabiscos são apenas uma coisa: você.</p><p>Uma vez por cena, você pode gastar uma ação completa e 5 PE para ser esquecido da realidade por 1d6+Pre rodadas. Durante o período, você fica incorpóreo, inaudível, invisível e não pode realizar ações. Criaturas de Conhecimento que estiverem em uma área de alcance Médio podem percebê-lo, mas perdem 2d10 Pontos de Vida por rodada enquanto olharem em sua direção.</p><p>Ao retornar, você perde 6d6 pontos de Sanidade, e personagens em alcance Médio devem fazer um teste de Vontade (DT Pre). Se falharem, esquecem uma memória aleatória sobre você até o fim da missão. Você não consegue usar este poder em lugares iluminados. Se ficar com 0 de Sanidade graças a este poder, se torna um Rascunho. Esta recompensa é um Poder Paranormal de Conhecimento.</p>",
      hasAutomation: !1,
    },
    {
      name: "Istinto da Mata",
      element: "Sangue",
      description:
        "<p>Ao desferir o golpe fatal no Quibungo, ele abocanha o ser que o atacou (ou o mais próximo) com sua mandíbula antes de cair morto. Ao fazer isso, seus dentes cravados no alvo causam uma alteração em seu sangue, o aproximando da bestialidade que a criatura possuía em sua essência.</p><p>Você se adapta mais facilmente a ambientes selvagens, recebendo +5 em Furtividade e Sobrevivência quando estiver em matas fechadas. Além disso, ao encontrar um animal, ele deve fazer um teste de Vontade (DT Pre+5) contra você. Se ele falhar, não irá te atacar até o fim da cena. Se a ameaça falhar por 5 ou mais, fica Apavorada. Esta recompensa é um Poder Paranormal de Sangue.</p>",
      hasAutomation: !1,
    },
    {
      name: "Lembranças Inquietantes",
      element: "Energia",
      description:
        "<p>Depois de derrotado, o Espectro agarra quem o golpeou por último, gritando em sofrimento enquanto suas chamas apagam, tão intenso quanto a primeira vez que morreu. Você passa a escutar a voz da criatura para sempre, ecoando memórias que não te pertencem.</p><p>Você pode gastar 4 PE e uma ação de movimento para deixar as vozes do Espectro te possuírem, tendo todas as suas perícias substituídas pelas da ficha da criatura. Enquanto possuído, você sofre dano Mental por rodada igual a 1d10 (+1 para cada 40 de VD da Espectro) e não consegue usar rituais ou poderes paranormais.</p><p>Ao escolher encerrar a possessão, suas perícias voltam ao normal, mas você fica Alquebrado por 1 rodada. Se sofrer dano usando este poder, o Espectro sai do seu corpo, encerrando o efeito e causando dano Mental igual a 2d6+limite de PE do personagem. Caso o Espectro seja alguém importante para o personagem (a critério do mestre), a perda de Sanidade por rodada durante o efeito muda para 1d4 (ao invés de 1d10).</p><p>Se a criatura possuiu a mesma Marca que o personagem, o custo diminui em 1 PE. Esta recompensa é um Poder Paranormal de Energia.</p>",
      hasAutomation: !1,
    },
    {
      name: "Resiliência Inabalável",
      element: "Conhecimento",
      description:
        "<p>Após superar a Melancolia, um sentimento de entusiasmo surge dentro de sua mente, apagando as memórias corrosivas criadas pela criatura, o libertando das correntes que limitavam e deterioravam a sua existência. Ao fazer um teste de Vontade para resistir a um efeito de Medo, você pode gastar 1 PE para receber +5 nele e, se tiver sucesso, uma confiança admirável desperta em você, fazendo com que o custo de seus rituais e habilidades diminua em 1 PE por um número de rodadas igual a sua Presença.</p><p>Além disso, você percebe mais facilmente quando algo está tentando controlar seus sentimentos e decisões, recebendo +10 contra rituais ou efeitos paranormais que envolvam controle mental, como obedecer ordens ou realizar ideias contra a sua própria vontade. Esta recompensa é um Poder Paranormal de Conhecimento.</p>",
      hasAutomation: !1,
    },
  ],
  cl = { class: "class-abilities-container" },
  ml = { key: 1, class: "class-abilities-content" },
  pl = T({
    __name: "ParanormalPowers",
    props: { currentSource: {} },
    emits: ["handleAddPower"],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = [
          { label: "Knowledge", value: 0 },
          { label: "Energy", value: 1 },
          { label: "Death", value: 2 },
          { label: "Blood", value: 3 },
          { label: "Varies", value: 4 },
        ],
        g = E(0),
        u = E([]);
      ue(async () => {
        u.value = await Or();
      });
      const c = (r) => v("handleAddPower", r),
        d = N(() =>
          l.currentSource === "arquivosConfidenciais"
            ? ul
            : l.currentSource === "marcasFragmentadas"
            ? zr
            : l.currentSource === "grimorioParanormal"
            ? u.value
            : il.filter((r) => r.element === m[g.value].label)
        );
      return (r, i) => (
        t(),
        s("div", cl, [
          r.currentSource === "ordemParanormal"
            ? (t(),
              z(
                ve,
                {
                  key: 0,
                  "current-tab": g.value,
                  "tab-options": m,
                  secondary: "",
                  onHandleNavigation: i[0] || (i[0] = (p) => (g.value = p)),
                },
                null,
                8,
                ["current-tab"]
              ))
            : C("", !0),
          d.value.length > 0
            ? (t(),
              s("div", ml, [
                (t(!0),
                s(
                  j,
                  null,
                  G(
                    d.value,
                    (p) => (
                      t(),
                      s("div", { key: p.name, class: "class-abilitie-card" }, [
                        A(Ge, { power: p, onHandleAdd: c }, null, 8, ["power"]),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : C("", !0),
        ])
      );
    },
  }),
  Mo = V(pl, [["__scopeId", "data-v-49dcdce3"]]),
  gl = { class: "abilities-modal-content" },
  vl = { key: 1 },
  hl = { key: 2 },
  fl = { key: 3 },
  bl = { key: 4 },
  ql = { key: 5 },
  Cl = { key: 6 },
  Al = T({
    __name: "AbilitiesModalContent",
    props: { currentSource: {} },
    emits: ["handleCloseModal", "handleAddPower"],
    setup(o, { emit: q }) {
      const l = q,
        v = [
          { label: "Combatant", value: 0 },
          { label: "Specialist", value: 1 },
          { label: "Occultist", value: 2 },
          { label: "Backgrounds", value: 3 },
          { label: "Paranormal Powers", value: 4 },
        ],
        m = E(0),
        g = (c) => (m.value = c),
        u = (c) => l("handleAddPower", c);
      return (c, d) => (
        t(),
        s("div", gl, [
          c.currentSource === "ordemParanormal"
            ? (t(),
              z(
                ve,
                {
                  key: 0,
                  "current-tab": m.value,
                  "tab-options": v,
                  onHandleNavigation: g,
                },
                null,
                8,
                ["current-tab"]
              ))
            : C("", !0),
          c.currentSource === "ordemParanormal" && m.value === 0
            ? (t(),
              s("div", vl, [
                A(
                  la,
                  { "class-value": F(Me)[0], onHandleAddPower: u },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : C("", !0),
          c.currentSource === "ordemParanormal" && m.value === 1
            ? (t(),
              s("div", hl, [
                A(
                  la,
                  { "class-value": F(Me)[1], onHandleAddPower: u },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : C("", !0),
          c.currentSource === "ordemParanormal" && m.value === 2
            ? (t(),
              s("div", fl, [
                A(
                  la,
                  { "class-value": F(Me)[2], onHandleAddPower: u },
                  null,
                  8,
                  ["class-value"]
                ),
              ]))
            : C("", !0),
          c.currentSource === "ordemParanormal" && m.value === 3
            ? (t(), s("div", bl, [A(nl, { onHandleAddPower: u })]))
            : C("", !0),
          c.currentSource === "ordemParanormal" && m.value === 4
            ? (t(),
              s("div", ql, [
                A(
                  Mo,
                  { "current-source": c.currentSource, onHandleAddPower: u },
                  null,
                  8,
                  ["current-source"]
                ),
              ]))
            : C("", !0),
          c.currentSource !== "ordemParanormal"
            ? (t(),
              s("div", Cl, [
                A(
                  Mo,
                  { "current-source": c.currentSource, onHandleAddPower: u },
                  null,
                  8,
                  ["current-source"]
                ),
              ]))
            : C("", !0),
        ])
      );
    },
  }),
  yl = V(Al, [["__scopeId", "data-v-bbaf9fc1"]]),
  rt = (o) => (L("data-v-3494da5b"), (o = o()), H(), o),
  Pl = { class: "modal-content modal-width" },
  El = { class: "modal-header" },
  Sl = rt(() => e("h2", null, "Add Abilities", -1)),
  kl = rt(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Rl = [kl],
  wl = { class: "modal-body modal-height" },
  Il = T({
    __name: "AbilitiesModal",
    props: { character: {} },
    emits: ["handleAddPower", "handleCloseModal"],
    setup(o, { emit: q }) {
      const l = q,
        v = [yl, Ir],
        m = [
          { label: "Abilities", value: 0 },
          { label: "My Abilities", value: 1 },
        ],
        g = E(0),
        u = E("ordemParanormal"),
        c = (r) => (g.value = r),
        d = (r) => l("handleAddPower", r);
      return (r, i) => (
        t(),
        s("div", Pl, [
          e("div", El, [
            Sl,
            e(
              "button",
              { onClick: i[0] || (i[0] = (p) => r.$emit("handleCloseModal")) },
              Rl
            ),
          ]),
          e("div", wl, [
            A(
              ha,
              {
                "current-source": u.value,
                "show-arquivos-confidenciais": "",
                "show-marcas-fragmentadas": "",
                "show-grimorio-paranormal": "",
                onHandleChangeCurrentSource:
                  i[1] || (i[1] = (p) => (u.value = p)),
              },
              null,
              8,
              ["current-source"]
            ),
            u.value === "ordemParanormal"
              ? (t(),
                z(
                  va,
                  { key: 0, value: g.value, options: m, onHandleNavigation: c },
                  null,
                  8,
                  ["value"]
                ))
              : C("", !0),
            (t(),
            z(
              ke,
              null,
              [
                (t(),
                z(
                  ga(v[g.value]),
                  {
                    character: r.character,
                    "current-source": u.value,
                    onHandleAddPower: d,
                  },
                  null,
                  40,
                  ["character", "current-source"]
                )),
              ],
              1024
            )),
          ]),
        ])
      );
    },
  }),
  Ml = V(Il, [["__scopeId", "data-v-3494da5b"]]),
  W = [
    {
      name: "Short Bullets",
      category: "0",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Basic ammunition, used in pistols, revolvers and submachine guns. A pack of short bullets lasts for two scenes.</p>",
    },
    {
      name: "Long Bullets",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Larger and more powerful, this ammunition is used in rifles and machine guns. A pack of long bullets lasts for one scene.</p>",
    },
    {
      name: "Cartridges",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Used in shotguns, these cartridges are loaded with lead pellets. One cartridge pack lasts for one scene.</p>",
    },
    {
      name: "Fuel",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description: "<p>A flamethrower fuel tank. Lasts for one scene.</p>",
    },
    {
      name: "Arrows",
      category: "0",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Used in bows and crossbows, arrows can be reused after each fight. Therefore, a pack of arrows lasts an entire mission.</p>",
    },
    {
      name: "Rocket",
      category: "I",
      slots: 1,
      tag: "Ammo",
      itemType: "ammunition",
      description:
        "<p>Shot by bazookas. Unlike other ammunition, each rocket lasts for a single shot, not a scene. To make multiple attacks, you will need to carry multiple rockets.</p>",
    },
  ],
  $l = [
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
        "<p>You can use a firearm as a melee weapon. The damage is 1d4 for light and one-handed firearms (such as pistols) and 1d6 for two-handed firearms (such as rifles).</p>",
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
        "<p>A long, sharp blade, such as a straight razor, barbecue knife, or military knife (small kitchen knives only do 1d3 points of damage). It is an agile weapon and can be thrown.</p>",
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
        "<p>This common tool can be used as a weapon in the absence of better options.</p>",
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
        "<p>A knife with a long, pointed blade, used by cultists in their rituals. It's an agile weapon.</p>",
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
        "<p>A solid wood cylinder. It could be a baseball bat, a police baton, a tonfa or just a club wrapped in nails or barbed wire. You can wield a bat with one hand (1d6 damage) or both (1d8 damage).</p>",
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
        "<p>A long blade, often used as a tool for opening trails.</p>",
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
        "<p>A wooden shaft with a sharp metal tip, the spear is an archaic weapon, but still used today by martial artists. Can be thrown.</p>",
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
        "<p>A long wooden rod or iron bar. Includes the bō used in martial arts. It's an agile weapon. Additionally, it can be used with Two-Weapon Fighting (and similar powers) to make additional attacks, as if it were a one-handed weapon and a light weapon.</p>",
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
      description:
        "<p>A common bow and arrow, suitable for target shooting.</p>",
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
        "<p>This ancient weapon requires a movement action to reload with each shot.</p>",
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
        "<p>A common handgun among police and military personnel as it is easily reloadable.</p>",
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
        "<p>The most common firearm, and one of the most reliable.</p>",
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
        "<p>This firearm is very popular among farmers, hunters and sports shooters.</p>",
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
        "<p>Two short wooden sticks linked by a chain. It is an agile weapon.</p>",
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
        "<p>A piece of thick chain can be used as a very effective weapon. The chain provides +2 on disarm and knockdown checks.</p>",
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
        "<p>A medieval weapon, such as a European knight's longsword or a Saracen scimitar. You can wield a sword with one hand (1d8 damage) or with both hands (1d10 damage).</p>",
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
        "<p>This sword with a thin and long blade is used by fencers. It is an agile weapon.</p>",
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
        "<p>An important tool for lumberjacks and firefighters, an axe can cause terrible injuries.</p>",
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
      description: "<p>Stick with a metallic head full of protuberances.</p>",
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
        "<p>A large, heavy axe, used in cutting down large trees.</p>",
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
        "<p>An agricultural tool, used with both hands. It was created to harvest grain, but it can also harvest lives.</p>",
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
        "<p>Originated in Japan, this long, gently curved sword has transcended the centuries. It's an agile weapon. If you are Veteran in Fighting you can use it as a one-handed weapon.</p>",
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
        "<p>Typically used to demolish walls, it can also be used to demolish people. Use these statistics for other construction tools, such as pickaxes.</p>",
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
        "<p>Huge and heavy, this 1.5m long sword was one of the most powerful weapons of its time.</p>",
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
        "<p>A motorized tool capable of causing deep injuries; whenever you roll a 6 on a chainsaw damage die, roll an additional damage die. Despite being powerful, this weapon is very clumsy and imposes a -1d20 penalty on your attack rolls. Starting a chainsaw takes one movement action.</p>",
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
        "<p>This modern bow uses high tension materials and a pulley system to generate more pressure. Unlike other arrow-based weapons, it allows you to apply your Strength value to damage rolls.</p>",
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
        "<p>A heavy crossbow, capable of powerful shots. Requires a movement action to be reloaded after each shot.</p>",
    },
    {
      name: "Submachine gun",
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
        "<p>This automatic firearm can be wielded with just one hand.</p>",
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
        "<p>Long firearm with smooth barrel. The shotgun only deals half damage at medium range or greater.</p>",
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
        "<p>The standard firearm of most modern armies. It's an automatic weapon.</p>",
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
        "<p>This military-grade firearm is designed for long, accurate shots. If you are a Veteran in Marksmanship and aim with your sniper rifle, you receive +5 to the threat range of your attack.</p>",
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
        "<p>This rocket launcher was designed as an anti-tank weapon, but has also proven effective against creatures. The bazooka deals damage to the target it hits and to all beings within a 3m radius; these beings (but not the target directly hit) are entitled to a Reflexes saving throw (DC Agi) to reduce the damage by half. You can fire the rocket at any point in medium range, instead of at a specific being; In this case, you don't need to roll an attack and have no chance of missing (but you also don't hit any being directly). The bazooka requires a movement action to reload after each shot.</p>",
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
        "<p>Military equipment that sprays incandescent flammable liquid. A flamethrower hits all beings in a 1.5m wide line within short range, but does not reach beyond that. Make a single attack roll and compare the result to the Defense of all beings in the area. In addition to taking damage, beings hit become On Fire.</p>",
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
        "<p>A heavy firearm, for military use. To attack with a machine gun, you must have Strength 4 or greater or spend a movement action to rest it on its tripod or appropriate support; otherwise, you suffer –5 to your attacks. A machine gun is an automatic weapon.</p>",
    },
  ],
  Dl = [
    {
      name: "Light Armor",
      defense: 5,
      category: "I",
      slots: 2,
      itemType: "protection",
      description:
        "<p>Heavy leather jacket or a kevlar vest. This protection is typically used by security guards and police officers.</p>",
    },
    {
      name: "Heavy Armor",
      defense: 10,
      category: "II",
      slots: 5,
      itemType: "protection",
      description:
        "<p>Equipment used by police special forces and the army. It consists of a helmet, shoulder pads, knee pads and shin pads, as well as a vest with several layers of Kevlar. Provides resistance to ballistic, slashing, impact and piercing damage 2. However, because it is uncomfortable and bulky, it imposes –5 on skill checks that suffer from overburden penalty.</p>",
    },
    {
      name: "Shield",
      defense: 2,
      category: "I",
      slots: 2,
      itemType: "protection",
      description:
        "<p>A medieval or modern shield, such as those used by storm troops. For proficiency purposes, it counts as heavy armor. Needs to be wielded in one hand and provides Defense +2.</p>",
    },
  ],
  Tl = [
    {
      name: "Skill Kit",
      tag: "Accessories",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A set of tools needed for some skills or skill uses. Without the kit, you suffer –5 on the check. There is a skill kit for each skill that requires this item.</p>",
    },
    {
      name: "Utensil",
      tag: "Accessories",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A common item that has a specific use, such as a pocket knife, a magnifying glass, a smartphone or a notebook. A utensil grants +2 on a skill check of your choice (except Fighting and Marksmanship), defined when the item is acquired. For example, a smartphone can be used to access the internet and provide bonuses in Sciences, while a notebook can be prepared to hack systems and provide bonuses in Technology. You can create less realistic items, like a “portable lie detector” that provides +2 Insight, but the GM has the final say on whether the tool is appropriate or not. Utensils always take up 1 space and need to be wielded for the bonus to be applied.</p>",
    },
    {
      name: "Vestment",
      tag: "Accessories",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A piece of clothing that provides a bonus to a specific skill (except Fighting or Marksmanship). For example, a pair of military boots might provide +2 Athletics, while an elegant suit or dress might provide +2 Diplomacy. Just like utensils, the benefit of each vestment must be approved by the master. You can receive bonuses from a maximum of two vestment at the same time. Putting on or taking off a vestment takes a complete action.</p>",
    },
    {
      name: "Stun Grenade",
      tag: "Explosives",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>To use a grenade, you must wield it and then spend a standard action to throw it at a point of your choice within medium range. The grenade affects a 6m radius from the point of impact. The effect it causes varies depending on the type of grenade.</p><p>Also called flash-bang, as they create a loud and bright explosion. Beings in the area are Stunned for 1 round (Fortitude DC Agi reduces to Obfuscated and Deafened for one round).</p>",
    },
    {
      name: "Frag Grenade",
      tag: "Explosives",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>To use a grenade, you must wield it and then spend a standard action to throw it at a point of your choice within medium range. The grenade affects a 6m radius from the point of impact. The effect it causes varies depending on the type of grenade.</p><p>Spreads piercing fragments. Beings in the area take 8d6 points of piercing damage (Reflex DC Agi halves the damage).</p>",
    },
    {
      name: "Smoke Grenade",
      tag: "Explosives",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>To use a grenade, you must wield it and then spend a standard action to throw it at a point of your choice within medium range. The grenade affects a 6m radius from the point of impact. The effect it causes varies depending on the type of grenade.</p><p>It produces thick, dark smoke. Beings in the area are Blinded and under Total Camouflage. The smoke lasts for 2 rounds.</p>",
    },
    {
      name: "Incendiary Grenade",
      tag: "Explosives",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>To use a grenade, you must wield it and then spend a standard action to throw it at a point of your choice within medium range. The grenade affects a 6m radius from the point of impact. The effect it causes varies depending on the type of grenade.</p><p>Spreads incandescent flames. Beings in the area take 6d6 points of fire damage and become On Fire (Reflexes DC Agi halves the damage and prevents the On Fire condition).</p>",
    },
    {
      name: "Antipersonnel mine",
      tag: "Explosives",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This mine is activated by remote control. If you are within long range of it, you can spend a standard action to detonate it. When exploding, the mine fires hundreds of steel balls in a 6m cone, dealing 12d6 points of piercing damage to all beings in the area (Reflexes DC Int halves the damage). You set the direction of the cone when you place the mine on the ground. Installing the mine requires a full action and a Tactics check against DC 15. If you fail, you spend the mine, but it doesn't work. Finding a deployed mine requires a Perception check (DC equal to the result of your check to deploy it).</p>",
    },
    {
      name: "Handcuffs",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A pair of steel handcuffs. To arrest a person who is not Defenseless you need to wield the handcuffs, Restrain the person and then win a new Restrain check against them. You can bind both of the person's wrists (–5 on checks that require use of the hands, prevents casting) or one of their wrists to an adjacent immovable object, if there is one, to prevent them from moving. Escaping the handcuffs requires an Acrobatics check against DC 30 (or having the keys...).</p>",
    },
    {
      name: "Grappling hook",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A steel hook tied to the end of a rope to attach to walls, windows, building parapets... Attaching a grapnel requires a Marksmanship test (DC 15). Climbing a wall with the help of a rope provides +5 to the Athletics check.</p>",
    },
    {
      name: "Bandolier",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A belt with pockets and straps. Once per round, you may draw or put away an item in your inventory as a free action.</p>",
    },
    {
      name: "Binoculars",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>These military binoculars provide +5 on Perception checks to observe distant things.</p>",
    },
    {
      name: "Signal Jammer",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This compact device emits waves that “pollute” the radio frequency used by cell phones, preventing any device of this type within medium range from connecting.</p>",
    },
    {
      name: "Healing ointement",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A spray containing a medicine with a powerful healing effect. You can spend a standard action and this item to heal yourself or an adjacent being for 2d8+2 HP.</p>",
    },
    {
      name: "Rope",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A roll of 10 meters of strong rope. It has several uses: it can help descend a hole or building (+5 on Athletics checks in these situations), tie up unconscious people, etc.</p>",
    },
    {
      name: "Survival Equipment",
      tag: "Operational Items",
      category: "0",
      slots: 2,
      itemType: "misc",
      description:
        "<p>A backpack with a sleeping bag, pans, GPS and other useful items for surviving in the bush. Provides +5 to Survival checks for camping and orienteering and allows you to make these checks without training.</p>",
    },
    {
      name: "Tactical flashlight",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Lights up dark places. Additionally, you can spend a movement action to shine light into the eyes of a being at short range. He is Obfuscated for 1 round, but immune to the flashlight for the rest of the scene.</p>",
    },
    {
      name: "Gas Mask",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A mask with a filter that covers the entire face. Provides +10 to Fortitude saving throws against effects that rely on breathing.</p>",
    },
    {
      name: "Military backpack",
      tag: "Operational Items",
      category: "I",
      slots: -2,
      itemType: "misc",
      description:
        "<p>A lightweight, high-quality backpack. It uses no space and increases your carrying capacity by 2 spaces.</p>",
    },
    {
      name: "Thermal Vision goggles",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>These glasses eliminate the penalty on checks for camouflage.</p>",
    },
    {
      name: "Crowbar",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This iron bar provides +5 on Strength checks to break down doors. Can be used in combat as a bat.</p>",
    },
    {
      name: "Dart Gun",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This weapon fires darts with a powerful soporific. To shoot a being, make a ranged attack against it. If you hit it, it is unconscious until the end of the scene (Fortitude DC Agi reduces it to Off-Guard and Slow for one round). The pistol comes with 2 darts. An additional box with 2 darts is a category 0 item that takes up 1 space.</p>",
    },
    {
      name: "Flare Gun",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This pistol fires a flare, useful for calling others to your location. Can be used once as a short-range, light firearm that deals 2d6 points of fire damage. The pistol comes with 2 charges. An additional box with 2 charges is a category 0 item that takes up 1 space.</p>",
    },
    {
      name: "Brass knuckles",
      tag: "Operational Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This metal piece is worn between the fingers and allows for more dangerous punches — it provides +1 to unarmed damage rolls. A brass knuckle can receive modifications and curses for melee weapons and apply their effects to your unarmed attacks.</p>",
    },
    {
      name: "Pepper Spray",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This spray shoots a chemical compound that causes pain and tearing. You can spend a standard action to target an adjacent being. The being is Blinded for 1d4 rounds (Fortitude DC Agi avoids the condition). The spray lasts for two uses.</p>",
    },
    {
      name: "Tazer",
      tag: "Operational Items",
      category: "I",
      slots: 1,
      itemType: "misc",
      description:
        "<p>An electroshock device capable of stunning or even incapacitating a target. You can spend a standard action to target an adjacent being. The target takes 1d6 points of electricity damage and is Stunned for one round (Fortitude DC Agi prevents the condition). The taser battery lasts for two uses.</p>",
    },
    {
      name: "Hazmat Suit",
      tag: "Operational Items",
      category: "I",
      slots: 2,
      itemType: "misc",
      description:
        "<p>A waterproof, full-body clothing used to prevent the user from coming into contact with toxic materials. Provides +5 on saving throws against environmental effects and resistance to chemical damage 10.</p>",
    },
    {
      name: "(Element) Lashes",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>Ropes or chains made from a specific Paranormal element. The lashes are prepared to immobilize creatures of the Other Side that are vulnerable to the element that composes them and can be used in two ways.</p><p><span>Trap.</span> You spend the lashes, a complete action and 2 EP and prepare a 3x3m trap. A creature that passes through the trapped space for the first time on its turn must make a Reflexes check (DC Int); if it fails, it remains Immobilized until the end of the scene. Even if it passes, it considers the space occupied by the trap to be difficult terrain.</p><p><span>Lasso.</span> You spend a standard action and 1 EP and choose a creature within short range. If it fails on a Will savin throw (DC Agi), the creature is Paralyzed until the start of its next turn, when it can repeat the test. Keeping the creature ensnared requires spending 1 EP per round.</p>",
    },
    {
      name: "Paranormal Aura Camera",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This Energy cursed camera has Knowledge sigils to capture paranormal auras. Taking a photo costs a standard action and 1 EP. The photos are instantaneous and reveal the presence of paranormal auras in people and objects. Auras are the color associated with the element.</p>",
    },
    {
      name: "(Element) Ritualistic Components",
      tag: "Paranormal Items",
      category: "0",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A set of objects used in rituals of a chosen element between Blood, Death, Knowledge or Energy (there are no ritual components of Fear). Ritualistic components are necessary for the conjuration of rituals of the element in question.</p><p><span>Energy:</span> electricity, technological devices (cell phones, computers, etc.), electronic circuits, heat and light sources, cells, batteries, copper and silver cables, gunpowder, coins, dice, magnets...</p><p><span>Blood:</span> organs, meat, blood, live animals (for sacrifice), razors, needles, barbed wire, chains, rusty metal, bodily fluids...</p><p><span>Death:</span> bones, teeth, ashes, strands of hair, black crystals, watches, dry twigs , dry leaves, dead plants, roots, sand, dust, mud...</p><p><span>Knowledge:</span> scriptures, papers, books, parchments, precious stones, gold, ropes, cloth, white crystals, glass, masks, writing instruments (pencil, pen, ink, chalk, etc.)...</p>",
    },
    {
      name: "Paranormal Pulse Emitter",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This small box covered in sigils was designed to serve as a “bait” for paranormal creatures. Activating the box takes a full action and 1 EP. The box emits a pulse of an element defined by the activator, which attracts creatures of the same element and drives away creatures of the opposite element. Affected creatures are allowed a Will saving throw (DC Pre) to avoid the effect.</p>",
    },
    {
      name: "Paranormal Noises Wiretap",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This microphone works like a spy device, with the difference being that it can capture paranormal noises. Activating spends a full action and 2 EP and causes it to record noise for up to 24 hours. Listening provides +5 on Occultism checks to identify the creature.</p>",
    },
    {
      name: "Membrane Stability Meter",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>A complex device, composed of several meters — temperature, magnetic field, temporal dilation... An agent trained in Occultism can use the meter to assess the state of the Membrane in an area, which indicates the chance of an entity manifesting itself in it . An environment with rational and constant values ​​over a few hours is unlikely to give rise to a dangerous creature or manifestation. However, if the readings present inexplicable data or with large variations, the place may contain an entity. Despite being a good indication, the meter does not provide definitive answers, as an environment with a damaged Membrane may still not have been affected by manifestations, just as a place with a protected Membrane may contain a powerful creature from elsewhere.</p>",
    },
    {
      name: "(Element) Paranormal Manifestation Scanner",
      tag: "Paranormal Items",
      category: "II",
      slots: 1,
      itemType: "misc",
      description:
        "<p>This item is comprised of a device connected to small cursed objects belonging to a specific entity and adorned with a series of sigils. Activating the scanner is a standard action. When activated, the scanner consumes 1 EP per round from the user, who always knows the direction of all active paranormal manifestations (rituals, creatures, cursed items, etc.) of the chosen element within long range. If a creature's main element is another, but it has the scanner's chosen element as a complement, it will also be detected.</p>",
    },
  ],
  Vl = [
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
        "<p><em>Um conjunto de sigilos gravados em um objeto pequeno, como um pergaminho, moeda, pedra preciosa, osso humano...</em> Cada selo contém um ritual. Para ativar um selo, você deve empunhá-lo e ler os sigilos em voz alta. Isso exige uma ação padrão ou a ação necessária para conjurar o ritual, o que for maior. Você também deve conhecer o ritual inscrito nele ou passar em um teste de Ocultismo (DT 20 + custo em PE do ritual).</p><p>Quando o selo é ativado, o ritual é conjurado e o selo se desfaz em cinzas. Você sofre os efeitos das regras “O Custo do Paranormal” e “Invocando o Medo”, caso aplicáveis, e toma quaisquer decisões exigidas pelo ritual, como se o tivesse conjurado você mesmo. Caso conheça o ritual, você pode aplicar quaisquer habilidades que possua que se aplicariam aos seus próprios rituais, e pode usar versões avançadas dele, pagando o custo adicional em pontos de esforço (e apenas o custo adicional). Você não precisa de componentes ritualísticos para ativar um selo, o que o torna um objeto bastante útil para ocultistas em certas situações.</p><p>A categoria de um selo é igual ao círculo do ritual contido nele: categoria I para rituais de 1º círculo, categoria II para rituais de 2º círculo, e assim por diante.</p>",
    },
  ],
  zl = [
    {
      name: "Cálice do Discernimento",
      element: "Energia",
      itemType: "cursedItem",
      category: "III",
      slots: 1,
      pictureURL: "/img/items/calice-do-discernimento.webp",
      description:
        "<p>Um cálice impossível, cheio de um líquido viscoso, translúcido e esverdeado. É impossível derramar o líquido ou troca-lo de recipiente, sendo a única opção bebê-lo.</p><p>Beber do cálice gasta uma ação padrão. Faça um teste de Vontade DT 25, em caso de sucesso, o ser ganha 2d20 em testes de INT e +10 em ocultismo pelas próximas 1d8+2 horas, além de recuperar 1d8+8 PE. Caso falhe, o ser ganha 3d20 em testes de INT, +15 em ocultismo pelas próximas 1d6+2 horas e recupera 2d8+8 PE, porém, perde 2d12+10 de sanidade e adquire as condições Confuso e Fraco.</p><p>Este é um item de Categoria III e só pode ser usado 3 vezes antes do cálice se esvaziar por completo.</p>",
    },
    {
      name: "Galhada Carmesin",
      element: "Sangue",
      itemType: "cursedItem",
      category: "II",
      slots: 1,
      pictureURL: "/img/items/galhada-carmesin.webp",
      description:
        "<p>O pedaço quebrado da galhada defeituosa de um Wendigo, suas pontas tem um aspecto cristalizado, e ele parece nunca parar de crescer, mesmo que esteja separado do corpo da criatura.</p><p>Ter a Galhada Carmesin em seu inventário lhe concede +3 de resistência a danos do tipo Balístico, Corte, Impacto, e Perfurante, porém recebe 1d6+2 de dano extra de fogo e energia. Inicialmente tem carga 1 e a cada 24 horas a galhada cresce aumentando em +1. O seu tamanho não pode ser reduzido, tentar resultará na destruição do mesmo.</p><p>Este é um item de Categoria II.</p>",
    },
  ],
  _l = [
    {
      name: "Frack'tur",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d6",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "1d8" }],
      criticalMult: 2,
      criticalRange: 19,
      damageType: "Corte",
      range: "-",
      category: "IV",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/fracktur.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        "<p>Uma montante forjada de um material indestrutível; nada na nossa realidade é capaz de sequer arranhar sua lâmina. Mas algo conseguiu, deixando seus vestígios marcados nos reflexos da espada. Encarar esta relíquia por alguns segundos é o suficiente para a sua mente ser assolada por um turbilhão de informações, revelando segredos de algo que não pode, e não deve ser decifrado.</p><p>[Reflexão Profunda] [Reação]. Qualquer pessoa que veja a lâmina desta arma pela primeira vez, sofre 8d8 de dano mental. Criaturas também são afetadas mas sofrem 8d8 de dano de medo (vontade reduz à metade). Personagens que possuem afinidade com Conhecimento reduzem o dano mental pela metade. Criaturas de Sangue são imunes ao reflexo.</p>",
    },
    {
      name: "Rios de Lodo",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d4",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "10" }],
      criticalMult: 3,
      criticalRange: 20,
      damageType: "Corte",
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/rios-de-lodo.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Uma lâmina com uma aura gananciosa, e soberba, como se possuísse vontade própria. Seus desejos sombrios são passados para o portador. "Consumir, arruinar, destruir, devorar, matar..."</p><p>Efeito. "Sede por morte". Converte sangue e carne em lodo, curando o portador em metade de todo dano causado. (Não funciona em seres incorpóreos).</p>',
    },
    {
      name: "Diabreth",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d4",
      aditionalDamage: [{ id: "0", damageType: "Sangue", value: "4" }],
      criticalMult: 4,
      criticalRange: 20,
      damageType: "Corte",
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/diabreth.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Obitida ao derrotar e cortar o braço de uma criatura que só aparece no Halloween. A existência dessa foice macabra é muito complexa, ela parece estar sempre em conflito consigo mesma, ao mesmo tempo que periodicamente tenta ser consumida pelas espirais da Morte, ela se regenera pelo desejo do Sangue, o Medo é a única força que permite esses elementos coexistir. Os portadores dessa arma ao passar do tempo, começam a ficar com uma aparência esquelética, alongada e com um olhar cada vez mais insano, e adquirem uma dependência doentia por açúcar. Essa arma emite luz própria.</p><p>Efeito. "Gostosuras/Travessuras". Você pode gastar 5 PE por cena, para criar 5 "Doces macabros" em sua mão, você pode tanto alimentar a foice com os doces aumentando o dano em 1d4 de Morte/Doce ou se curar em 2d4 de PV/Doce. Se alguém além do portador ingerir esse doce sofre 2d4 de dano de Morte.</p><p>Efeito do Medo. "Glicobsessão". Essa arma modifica lentamente o corpo do portador. Ao ingerir 10 Doces Macabros: Adquire permanentemente vício em doces, ao ficar mais de 24h sem consumir açúcar, reduz 50% do PV máximo, até saciar o vício. Ao ingerir 25 Doces Macabros: O Portador fica com um aspecto esquelético e com membros alongados, ganha +1 de Vigor e +5 de resistência paranormal. Ao ingerir 50 Doces Macabros: Seus olhos ficam amarelos e brilhantes você se torna resistente a Morte e Sangue mas recebe vulnerabilidade a Energia.</p>',
    },
    {
      name: "Acácia",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d10",
      damageType: "Energia",
      criticalMult: 2,
      criticalRange: 19,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/acacia.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Uma lâmina que já foi um símbolo de morte, portada por um Guerreiro mascarado. Foi utilizada para dar um fim a um confronto caótico. Por mais que o dono não tivesse ligação com Energia, ele foi capaz de finalizar o seu inimigo com ataques que pareciam cortar o próprio espaço-tempo. A cada corte era possível enxergar petáladas de acácia sendo absorvidas pela lâmina. "O nome disso... É Liberdade!"</p><p>Efeito. Seus cortes com essa arma precedem um rastro de petálas de acácia, que infligem 1d8 de dano de Energia. (+1d8 para cada 2 PE gastos).</p>',
    },
    {
      name: "Strega Mortale",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d4",
      damageType: "Corte",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "1d4" }],
      criticalMult: 2,
      criticalRange: 19,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/strega-mortale.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Uma adaga que foi amaldiçoada com Morte, por um dos ocultistas mais formidáveis da Ordem. Com seus estudos (e muita transcendência) ele foi capaz de compreender mais o elemento ao qual ele possui afinidade. Essa adaga tem o poder de regressar seu próprio campo temporal, sempre que fere alguém. Ela nunca fica desgastada, e retorna para a mão do dono em uma fração de segundo após ser arremessada.</p><p>Efeito. "Stregoneria". Ao ferir um alvo, recupera 2 PE do usuário (4 PE p/ crítico). E também, se for arremessada, volta à mão do personagem se ele possuir afinidade com o elemento Morte.</p>',
    },
    {
      name: "Garra Diabral",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d4",
      damageType: "Corte",
      aditionalDamage: [{ id: "0", damageType: "Sangue", value: "2d4" }],
      criticalMult: 4,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/garra-diabral.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Criada pelo próprio Diabo em seu ápice de fúria enquanto travava uma intensa batalha. Se adapta ao braço do portador, mas utilizar ela em todo o seu potencial tem um preço que é pago em Sangue. Causa muita dor ao braço de quem estiver, infinitas mordidas que fervem.</p><p>Efeito. "Infusão Sanguínea". O usuário ao perfurar um inimigo com as garras, pode infligir 1d10 dano de Sangue, mas paga metade desse dano em PV e também incha as veias do alvo, causando Paralisia. (Afinidade com Sangue anula a perda de PV)(+1d10 p/ cada 10% NEX).</p>',
    },
    {
      name: "Bestial",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d12",
      damageType: "Impacto e Perfurante",
      aditionalDamage: [{ id: "0", damageType: "Sangue", value: "1d8" }],
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/bestial.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Durante uma guerra houveram muitas tentativas desesperadas para selar o poder brutal dessa arma. Mas o Conhecimento não pode superar o descontrole fervente do Sangue. Contudo os esforços não foram completamente em vão, grande parte do poder dessa arma foi aprisionado.</p><p>Efeito. "Sucumbir ao ódio". Se o usuário conseguir desfazer o selamento, a arma revela seu verdadeiro poder. Ativa "Arma Atroz: Verdadeiro" e da ao portador "Armadura de Sangue" e "Ódio Incontrolável" permanentemente.</p>',
    },
    {
      name: "Seis",
      proficiencie: "-",
      type: "Arma de Fogo",
      handling: "-",
      damage: "2d6",
      damageType: "Balístico",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "1d6" }],
      criticalMult: 3,
      criticalRange: 19,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      ammunitionName: W[0].name,
      pictureURL: "/img/items/seis.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Um revolver modificado pelo Caos da Energia contido pela irreverência do Conhecimento. Encontrada numa missão da Ordo Realitas, para exterminar criaturas parasitoides conhecidas como "Alheios". Estudos indicam que ela possui a capacidade de ferir não só o corpo mas também a mente de quem for atingido pelas suas balas.</p><p>Efeito. [Colheira mental] [Custo: 2 PE] [Alcance: Longo]. O usuário pode disparar uma bala da Conhecimento que não causa dano, e apaga as últimas 24 horas de memória do alvo. Se o alvo possuir mais de 15% de NEX, o disparo não surte efeito. (+1 PE para cada 12 horas adicionais).</p>',
    },
    {
      name: "Parasita do Abismo",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Corte",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "1" }],
      criticalMult: 2,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/parasita-do-abismo.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Uma criatura de Morte que mora em uma concha. Encontrada por um mergulhador no fundo do oceano pacífico, parecia se alimentar da vida marinha fazendo tudo a sua volta perecer, ao mesmo tempo que cresce em tamanho e fome. Os limites para o potencial dessa criatura ainda são desconhecidos.</p><p>Efeito. "Fome Abissal". Ao finalizar qualquer ser vivo, devore-o e aumenta o bônus de dano de Morte em +1 permanentemente. (A cada +10 de dano, +1 de espaço e -5 de PV máximo).</p>',
    },
    {
      name: "Revisiter",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Medo",
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/revisiter.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Uma adaga que introduz a mente do usuário em uma viagem. Você não está preparado, ninguém está. Volte ao futuro, avance para o passado, sem sequer suplicar à morte. Saber sem sequer sussurrar ao conhecimento.</p><p>Efeito. "Observar". Role 5d20, sofra o total em PV e Sanidade. Você pode vivenciar uma cena do passado, ou perguntar ao do futuro (Ao mestre, que é obrigado a responder). Se o usuário zerar a sanidade dessa forma, adquire "Teleofobia" permanente, perdendo dois pontos de sanidade sempre que planejar algo, ou usar a ação "mirar".</p>',
    },
    {
      name: "Ruinosa",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "3d4",
      damageType: "Cortante",
      criticalMult: 4,
      criticalRange: 20,
      range: "-",
      category: "III",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/ruinosa.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        "<p>Uma foice triplha amaldiçoada com Conhecimento, que foi infectada pelo Sangue. Sigilos reforçados são o que sustentam a sua forma primorosa, mas a frenesi do Sangue não pode ser contida por muito tempo.</p><p>[Ruína] [Custo: 2 PE/Sigilo]. Ao atacar com essa foice, pode gastar 2 PE para deixar sigilos de Conhecimento no alvo, que podem acumular em até 3x. Você pode consumir qualquer quantidade de sigilos ao golpear uma criatura. 1 sigilo: +1d4 de dano de Sangue. 2 sigilos: +2d8 de dano de Sangue. 3 sigilos: +3d10 de dano de Sangue.</p>",
    },
    {
      name: "Demoportal",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "-",
      damageType: "-",
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "III",
      slots: 1,
      itemType: "misc",
      pictureURL: "/img/items/demoportal.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Agindo como um caçador solitário, "Demogorgon" possui a capacidade de abrir portais para a nossa dimnensão. Ao ter sido derrotado, sua cabeça, por entrar em contato com o caos presente na realidade, se tornou uma espécie de fenda portátil para outras dimensões. Felizmente... nada grande deve conseguir atravessar.</p><p>[Raios Invertidos] [Ação: Reação]. Ao entrar em combate com este artefato em posse, automaticamente raios serão disparados no inimigo mais próximo, causando 2d8 de dano de Energia e aplicando a condição "vulnerável" (-5 na Defesa) por uma rodada. Um novo raio é disparado no início de cada turno. (Este objeto é considerado um componente ritualístico para rituias de Energia e Sangue).</p>',
    },
    {
      name: "Presas de Kharr",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d4",
      damageType: "Perfurante",
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "III",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/presas-de-kharr.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Certa vez, pela inevitabilidade do caos, um meteoro desceu sobre uma civilização já afetada pela relíquida de Morte. Na cratera, formou-se um vasto logo, preenchido por um lodo verde que ficou conhecido como "Miasma". Este evento catalisou uma segunda transformação em todas as criaturas previamente alteradas pela Entropia. Entre elas, a imponente serpente espiralada "Kharr" que adotou o lago como sua morada e assumiu o controle de toda a civilização ao redor.</p><p>[Miasma de Kharr] [Alvo: 1 Ser] [Alcance: Toque]. O portador pode conjurar sem custo de PE a forma normal do ritual [Miasma Entrópico] mas o alvo se torna: "1 Ser", e o alance: "Toque".</p><p>Ao transcender com este punhal o personagem pode aprender o ritual [Miasma Entrópico]. Se feito isso, a arma perde suas propriedades paranormais.</p>',
    },
    {
      name: "Vendetta",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      secondaryDamage: "1d10",
      damageType: "Cortante",
      criticalMult: 2,
      criticalRange: 19,
      range: "-",
      category: "IV",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/vendetta.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Uma espada que carrega os pesares de uma família subitamente aniquilada. Em meio a um mar de tristezas e arrependimentos, apenas um sentimento ecoava acima de todos: o mais puro ódio.</p><p>[Vingativa] [Reação] [Alcance: Curto]. Ao presenciar um ataque que tenha causado dano a aliados na última rodada, esta espada causará 1d8 de dano de Sangue adicional para cada 10 PV perdidos no total. Caso um aliado entre no estado "morrendo", esta arma se torna [Lancinante] até o fim da cena. O dano adicional é perdido após um ataque bem-sucedido.</p>',
    },
    {
      name: "Demon Duo",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Flamejante", value: "1d6" }],
      criticalMult: 2,
      criticalRange: 19,
      range: "-",
      category: "III",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/demon-duo.webp",
      source: {
        label: "Vittori Hanzo",
        link: "https://x.com/VittoriHanzo",
        adLabel: "vittoriHanzo",
      },
      description:
        '<p>Um par de cimitarras imbuídas com Energia nas formas de fogo e vento. Mais leves do que aparentam, permitem ao portador entrar rapidamente em um estado de conservação de energia, desferindo ataques frenéticos até que o fenômeno se dissipe ou seja interrompido.</p><p>[Million Slash] [Ação: Livre] [Custo: x2 PE]. Após usar "Combater com Duas Armas" da classe Combatente, sempre que acertar um ataque o portador pode realizar outro, pagando 2 PE para cada ataque já realizado no turno. Ou seja, pode fazer o primeiro ataque extra gastando 2 PE e se acertar pode fazer um segundo ataque extra gastando mais 4 PE e assim por diante, até errar ou acabar os PE.</p>',
    },
  ],
  Ol = [
    {
      name: "Corta-Membranas",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Medo", value: "10" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/corta-membranas.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada negra, simples e misteriosa. Pessoas que já utilizaram essa espada relatam sentir o paranormal com mais frequência e força.</p><p>Efeito. Permite que o portador conjure rituais de até 3º círculo em membrana estável.</p>",
    },
    {
      name: "Osso da Língua",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "1d6" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/ossos-da-lingua.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Uma espada amedrontadora feita de ossos, sua guarda-mão é uma caveira com a boca aberta em agonia de onde sai a lâmina negra capaz de amaldiçoar qualquer um que seja atingido.</p><p>Ao atacar, o portador pode gastar 2 de PE para inflingir a condição "Debilitado" no alvo.</p>',
    },
    {
      name: "Frascolâmina",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Energia", value: "10" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 0.5,
      itemType: "weapon",
      pictureURL: "/img/items/frascolamina.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Aparenta ser apenas um frasco com algum líquido roxo dentro, porém, quando ativa se revela um espectro em forma de lâmina.</p><p>Efeito. Garante ao portador +10 de resistência contra dano de Energia.</p>",
    },
    {
      name: "Geoativa",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d4",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "1d10" }],
      criticalMult: 3,
      criticalRange: 19,
      range: "-",
      category: "-",
      slots: 0.5,
      itemType: "weapon",
      pictureURL: "/img/items/geoativa.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Um punhal aparentemente rústico, mas a cada ataque, mais brilhante fica. Aos que tem tempo de olhar pode-se perceber que sua lâmina vibra anseiando o próximo ataque.</p><p>Efeito. A cada ataque diminui em 1 a margem de ameaça nesta cena. (Ex: no terceiro ataque dessa arma, a margem de ameaça é 17).</p>",
    },
    {
      name: "Dracopacto",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d10",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Sangue", value: "1d10" }],
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/dracopacto.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma lâmina forjada pelo sopro de alguma criatura paranormal misteriosa. Não se tem quase nenhum registro dessa criatura além de seu nome escrito na própria espada.</p><p>Efeito. Garante ao portador +10 de resistência contra dano de Sangue.</p>",
    },
    {
      name: "Conciliadora",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "10" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/conciliadora.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Uma lâmina prismática, quase hipnótica, que dá ao portador a calma necessária em momentos de tensão</p><p>Efeito. Concede ao portador o Poder Paranormal "Sensitivo".</p>',
    },
    {
      name: "Esmaga-Kraken",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Energia", value: "10" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/esmaga-kraken.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Um florete que tem sua lâmina em volta de um Kraken que funciona como guarda-mão. Alguns ataques soltam raios-tentáculos que abraçam os alvos.</p><p>Efeito. Ao atacar, o portador pode gastar 2 de PE para aflingir a condição "Paralisia" no alvo.</p>',
    },
    {
      name: "3 Sóis",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "10" }],
      criticalMult: 2,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 4,
      itemType: "weapon",
      pictureURL: "/img/items/3-sois.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>A espada mais espalhafatosa de todas realidades, poucos inimigos encontraram coragem para desafiá-la. Menos ainda são os que sobrevivem depois disso.</p><p>Efeito. Ao atacar, o portador pode gastar 3 de PE para inflingir a condição "Cego" no alvo por 1d6 turnos.</p>',
    },
    {
      name: "Necroafetiva",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "5" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/necroafetiva.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada com as lâminas negras, aproximar os ouvidos dela te faz escutar sussurros do outro lado.</p><p>Efeito. Para cada ser morto na cena, concede 1d20 de dano de Morte até o fim da cena.</p>",
    },
    {
      name: "Quebra-Reinados",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "1d10" }],
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/quebra-reinados.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada real que carrega consigo toda imponência de um rei. E nada passa pelo rei.</p><p>Garente ao portador +10 de resistência contra dano de Conhecimento.</p>",
    },
    {
      name: "Pena da Fênix",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d6",
      damageType: "Cortante",
      aditionalDamage: [
        { id: "0", damageType: "Sangue", value: "1d6" },
        { id: "1", damageType: "Fogo", value: "5" },
      ],
      criticalMult: 2,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/pena-da-fenix.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Essa espada nunca fica fria, com sua lâmina sempre morna ou fervente. Seus adornos lembram a criatura mitológica Fênix.</p><p>Se for o turno do portador e ele estar na condição "Morrendo", a sua espada faz um teste de d20 com DT 10 para recuperar o portador com 1d20 de PV.</p>',
    },
    {
      name: "Vazio-Crescente",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d10",
      damageType: "Cortante",
      criticalMult: 3,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 0.5,
      itemType: "weapon",
      pictureURL: "/img/items/vazio-crescente.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Um punhal com lâmina curva, estranhamente ao olhar pra essa lâmina você sente que todas as coisas existentes no mundo são só uma fração ínfima do vazio colossal do universo.</p><p>Efeito. Ao atacar, o portador pode gastar 1 de PE para regenerar 1d10 de SAN.</p>",
    },
    {
      name: "Vidabreve",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "1d8" }],
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 0.5,
      itemType: "weapon",
      pictureURL: "/img/items/vidabreve.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Parabéns, já é seu aniversário de novo! Levar um golpe dessa espada faz a sua vida passar velozmente diante de seus olhos, literalmente.</p><p>Efeito. Ao atacar, o portador dessa arma pode gastar 2 de PE para aumentar a idade do alvo em 1d8.</p>",
    },
    {
      name: "Parte-Galáxias",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d10",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Energia", value: "5" }],
      criticalMult: 4,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/parte-galaxias.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>O universo é gigantesco, pra que números tão pequenos?</p><p>O teste de ataque dessa arma, permite que uma vez por turno você rerole dados com valores menores que 5.</p>",
    },
    {
      name: "Ruído das Entidades",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Varia", value: "1d20" }],
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/ruido-das-entidades.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada forjada com a essência de todas entidades do Outro Lado.</p><p>Efeito. A cada ataque, rola 1d4 para determinar qual o tipo de dano bônus. 1 - Morte; 2 - Conhecimento; 3 - Sangue; 4 - Energia</p>",
    },
    {
      name: "Lodo Etéreo",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "1d10" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/lodo-etereo.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>A Lâmina pútrida desta espada parece conter a própria mote em sua essência.</p><p>Efeito. O portador desta arma recebe +10 de resistência do tipo Morte.</p>",
    },
    {
      name: "Bordo Escarlate",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Sangue", value: "5" }],
      criticalMult: 2,
      criticalRange: 17,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/bordo-escarlate.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada com folhas de bordo, essas folhas tem prpriedades de cura misteriosas ao tocar ferimentos que só acendem ao usuário quando ataca.</p><p>Efeito. Ao atacar, o portador pode gastar 1 de PE para regenerar 1d10 de PV.</p>",
    },
    {
      name: "Angulâmina",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d10",
      damageType: "Cortante",
      criticalMult: 2,
      criticalRange: 19,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/angulamina.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Essa arma possui algumas formas levitando em sua volta que tem poder explosivo.</p><p>Efeito. O portador pode gastar 2 de PE para arremessar uma forma geométrica explosiva. Utilize 1d4 para definir qual explosivo será utilizado. 1 - Atordoamento; 2 - Fragmentação; 3 - Fumaça; 4 - Incendiária.</p>",
    },
    {
      name: "Sede de Morte",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d10",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "1d10" }],
      criticalMult: 2,
      criticalRange: 19,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/sede-de-morte.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Uma arma de lâmina negra que anseia a próxima vítima, entornada de musgo e morte.</p><p>Efeito. Após atacar, caso deixe o alvo com menos de 10 PV, ignora a condição "Morrendo" e executa o alvo instantaneamente.</p>',
    },
    {
      name: "Estilha-Alvo",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "1d6" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/estilha-alvo.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma lâmina de espelho quebrada, que possui fragmentos levitando em sua volta. Você sente que a qualquer momento todos cacos de vidro podem voar em sua direção.</p><p>Efeito. Ao atacar, o portador pode gastar 2 de PE para estilhaçar parte da arma dando +1d20 de dano de Perfuração em área e alcance Médio.</p>",
    },
    {
      name: "Ressoar Estridente",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Energia", value: "1d10" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/ressoar-estridente.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Uma espada que ao ser empunhada exibe suas cordas de energia. Todos em volta conseguem ouvir o rugido alto de suas vibrações, porém apenas o alvo dessa espada consegue ouvir seu verdadeiro potencial, podendo causar surdez.</p><p>Efeito. O portador ganha a habilidade de tocar a espada, e pode gastar 2 de PE para tocar o som da espada e inflingir a condição "Surdo" no alvo.</p>',
    },
    {
      name: "Tordenv Aer",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Energia", value: "1d10" }],
      criticalMult: 2,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 3,
      itemType: "weapon",
      pictureURL: "/img/items/tordenv-aer.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>A arma possui embuída em sua lâmina os poderes e relâmpagos de Thor.</p><p>Efeito. O bônus de Energia pode se extender para até 3 seres em alcance médio do alvo. O portador escolhe quais seres, podendo não escolher nenhum.</p>",
    },
    {
      name: "Primeira Estrela",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d10",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Conhecimento", value: "10" }],
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 2,
      itemType: "weapon",
      pictureURL: "/img/items/primeira-estrela.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Essa espada parece que possui uma vontade de se destacar, o portador sente a necessidade de entrar para história.</p><p>Efeito. O portador dessa arma sempre tem iniciativa 1 e começa as batalhas.</p>",
    },
    {
      name: "Ira Ancestral",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Morte", value: "1d6" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 3,
      itemType: "weapon",
      pictureURL: "/img/items/ira-ancestral.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Essa lâmina decadente possui caracteristicas de esqueleto, ao mesmo tempo que parece muito antiga e pouco perigosa, passa um sentimento de angustia e prepotência enorme.</p><p>Efeito. O portador dessa arma não sofre desvantagem de idade e não tem limite para entrar no estado "Morrendo".</p>',
    },
    {
      name: "Sem-Escape",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Sangue", value: "1d6" }],
      criticalMult: 3,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/sem-escape.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada que pode se contorcer para alcançar inimigos distantes e corta-los antes que fujam.</p><p>Efeito. Essa espada tem o alcance de 6 metros e não precisa ficar corpo a corpo com o alvo.</p>",
    },
    {
      name: "Tiranogume",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Sangue", value: "1d6" }],
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 3,
      itemType: "weapon",
      pictureURL: "/img/items/tiranogume.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada monstruosa, feita de músculo, veias e sangue. Sua estrutura colossal amedronta qualquer um e faz um estardalhaço a cada golpe.</p><p>Efeito. Ao atacar, o portador pode gastar 1 de PE para dar +1d20 de dano de Sangue em todos os seres em 3 metros do alvo.</p>",
    },
    {
      name: "Magmadaga",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d4",
      damageType: "Cortante",
      aditionalDamage: [
        { id: "0", damageType: "Sangue", value: "1d6" },
        { id: "1", damageType: "Fogo", value: "5" },
      ],
      criticalMult: 3,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 0.5,
      itemType: "weapon",
      pictureURL: "/img/items/magmadaga.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        '<p>Essa lâmina parece um vulcão ativo, olhar para ela te dá a sensação de que pode entrar em erupção a qualquer momento.</p><p>Efeito. Ao atacar, o portador pode gastar 2 de PE para inflingir a condição "Em chamas" no alvo.</p>',
    },
    {
      name: "Pulso Estático",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d6",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Energia", value: "2d6" }],
      criticalMult: 2,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 0.5,
      itemType: "weapon",
      pictureURL: "/img/items/pulso-estatico.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma adaga que flerta com a razão da realidade, ela tem o prazer de causar o caos na ordem das coisas.</p><p>Efeito. Ao jogar os dados de energia faz um teste com 1d20 e DT 15, no sucesso, os dados de dano bônus ao invés de se somarem, se multiplicam.</p>",
    },
    {
      name: "Insanigladius",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "2d8",
      damageType: "Cortante",
      aditionalDamage: [{ id: "0", damageType: "Impacto", value: "1d6" }],
      criticalMult: 2,
      criticalRange: 18,
      range: "-",
      category: "-",
      slots: 3,
      itemType: "weapon",
      pictureURL: "/img/items/insanigladius.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Essa espada gigante parece ter um pacto muito forte com o portador, parece que ela entende seus medos e angustias e luta lado a lado para qualquer um que esteja denegrindo suas emoções.</p><p>Efeito. O portador recebe 1d6 de Impacto para cada 5 pontos de sanidade pedidos do seu total. (Ex: Um jogador que esta com SAN 10/20 vai rodar 3d6 de Impacto).</p>",
    },
    {
      name: "Guarda Heróica",
      proficiencie: "-",
      type: "-",
      handling: "-",
      damage: "1d8",
      damageType: "Cortante",
      criticalMult: 2,
      criticalRange: 20,
      range: "-",
      category: "-",
      slots: 1,
      itemType: "weapon",
      pictureURL: "/img/items/guarda-heroica.webp",
      source: {
        label: "Duhgetsu",
        link: "https://x.com/Duhgetsu",
        adLabel: "duhgetsu",
      },
      description:
        "<p>Uma espada forjada para proteger seu mestre, sua aura atribui ao portador um escudo protetor.</p><p>Efeito. O portador fica imune a Dano Massivo, e ganha +5 em testes de Bloqueio.</p>",
    },
  ],
  Ul = { class: "class-abilities-container" },
  Ll = { key: 1, class: "search-container" },
  Hl = { key: 2, class: "search-container" },
  xl = { key: 3, class: "search-container" },
  jl = { key: 4, class: "search-container" },
  Fl = { key: 5, class: "class-abilities-content" },
  Nl = { key: 0 },
  Bl = { key: 1 },
  Ql = { key: 2 },
  Gl = { key: 3 },
  Xl = T({
    __name: "InventoryModalContent",
    props: { currentSource: {} },
    emits: ["handleAddItem", "handleCloseModal"],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = [
          { label: "Weapons", value: 0 },
          { label: "Ammo", value: 1 },
          { label: "Armor", value: 2 },
          { label: "General", value: 3 },
          { label: "Cursed Items", value: 4 },
        ],
        g = E(0),
        u = E(""),
        c = E(""),
        d = E(""),
        r = E(""),
        i = E([..._l, ...Ol]),
        p = E([]);
      ue(async () => {
        p.value = await Ur();
      });
      const f = (P) => v("handleAddItem", P),
        S = N(() =>
          l.currentSource === "ordemParanormal" && g.value === 0
            ? $l
                .filter((P) => K(P.name, u.value))
                .sort((P, b) => P.name.localeCompare(b.name))
            : l.currentSource === "ordemParanormal" && g.value === 1
            ? W.sort((P, b) => P.name.localeCompare(b.name))
            : l.currentSource === "ordemParanormal" && g.value === 2
            ? Dl.sort((P, b) => P.name.localeCompare(b.name))
            : l.currentSource === "ordemParanormal" && g.value === 3
            ? Tl.filter((P) => K(P.name, c.value)).sort((P, b) =>
                P.name.localeCompare(b.name)
              )
            : l.currentSource === "ordemParanormal" && g.value === 4
            ? Vl.filter((P) => K(P.name, d.value)).sort((P, b) =>
                P.name.localeCompare(b.name)
              )
            : l.currentSource === "tocaDosMonstros"
            ? zl.sort((P, b) => P.name.localeCompare(b.name))
            : l.currentSource === "cultoDaCriacao"
            ? Hr.sort((P, b) => P.name.localeCompare(b.name))
            : l.currentSource === "arquivosConfidenciais"
            ? ll.sort((P, b) => P.name.localeCompare(b.name))
            : l.currentSource === "grimorioParanormal"
            ? p.value
            : l.currentSource === "comunidade"
            ? i.value
                .filter((P) => K(P.name, r.value))
                .sort((P, b) => P.name.localeCompare(b.name))
            : []
        );
      return (P, b) => (
        t(),
        s("div", Ul, [
          P.currentSource === "ordemParanormal"
            ? (t(),
              z(
                ve,
                {
                  key: 0,
                  "current-tab": g.value,
                  "tab-options": m,
                  onHandleNavigation: b[0] || (b[0] = (y) => (g.value = y)),
                },
                null,
                8,
                ["current-tab"]
              ))
            : C("", !0),
          P.currentSource === "ordemParanormal" && g.value === 0
            ? (t(),
              s("div", Ll, [
                A(
                  ye,
                  {
                    value: u.value,
                    dark: "",
                    onUpdate: b[1] || (b[1] = (y) => (u.value = y)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          P.currentSource === "ordemParanormal" && g.value === 3
            ? (t(),
              s("div", Hl, [
                A(
                  ye,
                  {
                    value: c.value,
                    dark: "",
                    onUpdate: b[2] || (b[2] = (y) => (c.value = y)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          P.currentSource === "ordemParanormal" && g.value === 4
            ? (t(),
              s("div", xl, [
                A(
                  ye,
                  {
                    value: d.value,
                    dark: "",
                    onUpdate: b[3] || (b[3] = (y) => (d.value = y)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          P.currentSource === "comunidade"
            ? (t(),
              s("div", jl, [
                A(
                  ye,
                  {
                    value: r.value,
                    dark: "",
                    onUpdate: b[4] || (b[4] = (y) => (r.value = y)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          S.value.length > 0
            ? (t(),
              s("div", Fl, [
                (t(!0),
                s(
                  j,
                  null,
                  G(
                    S.value,
                    (y) => (
                      t(),
                      s("div", { key: y.name, class: "class-abilitie-card" }, [
                        y.itemType === "weapon"
                          ? (t(),
                            s("div", Nl, [
                              A(Ho, { weapon: y, onHandleAdd: f }, null, 8, [
                                "weapon",
                              ]),
                            ]))
                          : C("", !0),
                        y.itemType === "protection"
                          ? (t(),
                            s("div", Bl, [
                              A(
                                xo,
                                { protection: y, onHandleAdd: f },
                                null,
                                8,
                                ["protection"]
                              ),
                            ]))
                          : C("", !0),
                        y.itemType === "misc" || y.itemType === "ammunition"
                          ? (t(),
                            s("div", Ql, [
                              A(jo, { misc: y, onHandleAdd: f }, null, 8, [
                                "misc",
                              ]),
                            ]))
                          : C("", !0),
                        y.itemType === "cursedItem"
                          ? (t(),
                            s("div", Gl, [
                              A(
                                Fo,
                                { "cursed-item": y, onHandleAdd: f },
                                null,
                                8,
                                ["cursed-item"]
                              ),
                            ]))
                          : C("", !0),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : C("", !0),
        ])
      );
    },
  }),
  Wl = V(Xl, [["__scopeId", "data-v-b68bb4af"]]),
  st = (o) => (L("data-v-f632863c"), (o = o()), H(), o),
  Kl = { class: "modal-content modal-width" },
  Jl = { class: "modal-header" },
  Yl = st(() => e("h2", null, "Add Items", -1)),
  Zl = st(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  eu = [Zl],
  au = { class: "modal-body modal-height" },
  ou = T({
    __name: "InventoryModal",
    props: { character: {} },
    emits: ["handleAddItem", "handleCloseModal"],
    setup(o, { emit: q }) {
      const l = q,
        v = [
          { label: "Items", value: 0 },
          { label: "My Items", value: 1 },
        ],
        m = E(0),
        g = E("ordemParanormal"),
        u = (d) => (m.value = d),
        c = (d) => l("handleAddItem", d);
      return (d, r) => (
        t(),
        s("div", Kl, [
          e("div", Jl, [
            Yl,
            e(
              "button",
              { onClick: r[0] || (r[0] = (i) => d.$emit("handleCloseModal")) },
              eu
            ),
          ]),
          e("div", au, [
            A(
              ha,
              {
                "current-source": g.value,
                "show-toca-dos-monstros": "",
                "show-comunidade": "",
                "show-culto-da-criacao": "",
                "show-arquivos-confidenciais": "",
                "show-grimorio-paranormal": "",
                onHandleChangeCurrentSource:
                  r[1] || (r[1] = (i) => (g.value = i)),
              },
              null,
              8,
              ["current-source"]
            ),
            g.value === "ordemParanormal"
              ? (t(),
                z(
                  va,
                  { key: 0, value: m.value, options: v, onHandleNavigation: u },
                  null,
                  8,
                  ["value"]
                ))
              : C("", !0),
            (t(),
            z(
              ke,
              null,
              [
                m.value === 0
                  ? (t(),
                    z(
                      Wl,
                      { key: 0, "current-source": g.value, onHandleAddItem: c },
                      null,
                      8,
                      ["current-source"]
                    ))
                  : C("", !0),
              ],
              1024
            )),
            (t(),
            z(
              ke,
              null,
              [
                m.value === 1
                  ? (t(), z(Mr, { key: 0, onHandleAddItem: c }))
                  : C("", !0),
              ],
              1024
            )),
          ]),
        ])
      );
    },
  }),
  tu = V(ou, [["__scopeId", "data-v-f632863c"]]),
  Ie = [
    {
      name: "Alterar Destino",
      circle: "4",
      element: "Energy",
      execution: "reaction",
      range: "personal",
      target: "yourself",
      duration: "instantaneous",
      pictureURL: "/img/rituals/alterar-destino.webp",
      pictureFullPath: "/img/rituals/alterar-destino.webp",
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
      pictureURL: "/img/rituals/alterar-memoria.webp",
      pictureFullPath: "/img/rituals/alterar-memoria.webp",
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
      pictureURL: "/img/rituals/amaldicoar-arma.webp",
      pictureFullPath: "/img/rituals/amaldicoar-arma.webp",
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
      pictureURL: "/img/rituals/amaldicoar-tecnologia.webp",
      pictureFullPath: "/img/rituals/amaldicoar-tecnologia.webp",
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
      pictureURL: "/img/rituals/ancora-temporal.webp",
      pictureFullPath: "/img/rituals/ancora-temporal.webp",
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
      pictureURL: "/img/rituals/aprimorar-fisico.webp",
      pictureFullPath: "/img/rituals/aprimorar-fisico.webp",
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
      pictureURL: "/img/rituals/aprimorar-mente.webp",
      pictureFullPath: "/img/rituals/aprimorar-mente.webp",
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
      pictureURL: "/img/rituals/arma-atroz.webp",
      pictureFullPath: "/img/rituals/arma-atroz.webp",
      description:
        "<p>The weapon is covered by crimson veins and exhales an aura of violence. It gives +2 on attack rolls and +1 on threat range.</p><p><strong>Advanced (+2 EP):</strong> changes the attack roll bonus to +5. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the attack roll bonus to +5 and the threat range and critital multiplier to +2. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Blood Armor",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      pictureURL: "/img/rituals/armadura-de-sangue.webp",
      pictureFullPath: "/img/rituals/armadura-de-sangue.webp",
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
      pictureURL: "/img/rituals/canalizar-o-medo.webp",
      pictureFullPath: "/img/rituals/canalizar-o-medo.webp",
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
      pictureURL: "/img/rituals/capturar-o-coracao.webp",
      pictureFullPath: "/img/rituals/capturar-o-coracao.webp",
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
      pictureURL: "/img/rituals/chamas-do-caos.webp",
      pictureFullPath: "/img/rituals/chamas-do-caos.webp",
      description:
        "<p>Você manipula o calor e o fogo. Ao conjurar o ritual, escolha um dos seguintes efeitos.</p><p><strong>Chamejar:</strong> o alvo é uma arma corpo a corpo. Ela causa +1d6 pontos de dano de fogo.</p><p><strong>Esquentar:</strong> o alvo é um objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer ser que o esteja empunhando ou vestindo. A critério do mestre, o objeto ou o ser pode pegar fogo. Um ser pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito do ritual.</p><p><strong>Extinguir:</strong> o alvo é uma chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, seres têm camuflagem.</p><p><strong>Modelar:</strong> o alvo é uma chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por um ser, ela causa 3d6 pontos de dano de fogo nele. Um ser só pode sofrer dano dessa maneira uma vez por rodada.</p><p><strong>Discente (+3 PE):</strong> muda a duração para sustentada e adiciona “Resistência: Reflexos reduz à metade”. Em vez do normal, uma vez por rodada você pode gastar uma ação de movimento para projetar uma labareda, num alvo em alcance curto. O alvo sofre 4d6 pontos de dano de Energia (Reflexos reduz à metade).</p><p><strong>Verdadeiro (+ 7 PE):</strong> como discente, mas muda o dano para 8d6. Requer 3º círculo.</p>",
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
      pictureURL: "/img/rituals/cicatrizacao.webp",
      pictureFullPath: "/img/rituals/cicatrizacao.webp",
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
      pictureURL: "/img/rituals/cineraria.webp",
      pictureFullPath: "/img/rituals/cineraria.webp",
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
      pictureURL: "/img/rituals/coincidencia-forcada.webp",
      pictureFullPath: "/img/rituals/coincidencia-forcada.webp",
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
      pictureURL: "/img/rituals/compreensao-paranormal.webp",
      pictureFullPath: "/img/rituals/compreensao-paranormal.webp",
      description:
        "<p>The ritual gives you supernatural understanding of language. If you touch an object containing information (or book, a device with a recording...), you understand the words even if you don't know their language, as long as it is a human language (does not work with paranormal symbols or sigils). If you touch a person, you can communicate with them as if you spoke a common language. If you touch a non-intelligent being, such as an animal, you can perceive its basic feelings, such as fear or happiness. An unwilling target is entitled to a Will saving throw.</p><p><strong>Advanced (+2 EP):</strong> changes the range to “short” and the target to “chosen targets”. You can understand all affected targets. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the range to “personal” and the target to “you”. Instead of normal, you can speak, understand and write any human language. Requires 3rd circle.</p>",
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
      pictureURL: "/img/rituals/conhecendo-o-medo.webp",
      pictureFullPath: "/img/rituals/conhecendo-o-medo.webp",
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
      pictureURL: "/img/rituals/contencao-fantasmagorica.webp",
      pictureFullPath: "/img/rituals/contencao-fantasmagorica.webp",
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
      pictureURL: "/img/rituals/consumir-manancial.webp",
      pictureFullPath: "/img/rituals/consumir-manancial.webp",
      description:
        "<p>You suck out a small portion of the lifespan of plants, insects, and even the surrounding soil, generating sludge and gaining 3d6 temporary hit points. Temporary HP disappears at the end of the scene.</p><p><strong>Advanced (+2 EP):</strong> changes temporary HP gained to 6d6. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the target to “area: sphere with 6m radius centered on you” and the saving throw to “Fortitude halves”. Instead of normal, you suck energy from all living things in the area, dealing 3d6 points of Death damage to each one and gaining temporary HP equal to the total damage dealt until the end of the scene. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Paranormal Contactl",
      circle: "3",
      element: "Knowledge",
      execution: "complete",
      range: "personal",
      target: "yourself",
      duration: "1 day",
      pictureURL: "/img/rituals/contato-paranormal.webp",
      pictureFullPath: "/img/rituals/contato-paranormal.webp",
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
      pictureURL: "/img/rituals/controle-mental.webp",
      pictureFullPath: "/img/rituals/controle-mental.webp",
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
      pictureURL: "/img/rituals/convocacao-instantanea.webp",
      pictureFullPath: "/img/rituals/convocacao-instantanea.webp",
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
      save: "Will reduces partially, Fortitude reduces partially",
      pictureURL: "/img/rituals/corpo-adaptado.webp",
      pictureFullPath: "/img/rituals/corpo-adaptado.webp",
      description:
        "<p>This ritual modifies the target's biology to allow survival in hostile environments. The target is immune to extreme heat and cold, can breathe underwater if it breathes air (or vice versa), and does not suffocate in dense smoke.</p><p><strong>Advanced (+2 EP):</strong> changes the duration to 1 day.</p><p><strong>True (+5 EP):</strong> changes the range to “short” and the target to “chosen people or animals”.</p>",
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
      pictureURL: "/img/rituals/decadencia.webp",
      pictureFullPath: "/img/rituals/decadencia.webp",
      description:
        "<p>Spirals of darkness envelop your hand and wither the target, who takes 2d8+2 points of Death damage.</p><p><strong>Advanced (+2 EP):</strong> changes saving throw to “none” and damage to 3d8+3. As part of performing the ritual, you transfer the spirals to a weapon and make a melee attack against the target with this weapon. If you hit, you deal damage from the weapon and the ritual, combined.</p><p><strong>True (+5 EP):</strong> changes the range to “personal”, the target to “area: explosion with 6m radius” and the damage to 8d8+8. The spirals affect all beings in the area. Requires 3rd circle.</p>",
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
      pictureURL: "/img/rituals/definhar.webp",
      pictureFullPath: "/img/rituals/definhar.webp",
      description:
        "<p>You shoot a puff of ash that drains the target's strength. The target becomes Fatigued. If they pass the saving throw, they become vulnerable instead.</p><p><strong>Advanced (+2 EP):</strong> instead of normal, the target becomes Exhausted. If they pass the saving throw, they become fatigued. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> as in Advanced, but changes the target to “up to 5 beings”. Requires 3rd circle and afinity with Death.</p>",
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
      pictureURL: "/img/rituals/deflagracao-de-energia.webp",
      pictureFullPath: "/img/rituals/deflagracao-de-energia.webp",
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
      pictureURL: "/img/rituals/desacelerar-impacto.webp",
      pictureFullPath: "/img/rituals/desacelerar-impacto.webp",
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
      pictureURL: "/img/rituals/descarnar.webp",
      pictureFullPath: "/img/rituals/descarnar.webp",
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
      pictureURL: "/img/rituals/dissonancia-acustica.webp",
      pictureFullPath: "/img/rituals/dissonancia-acustica.webp",
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
      pictureURL: "/img/rituals/distorcer-aparencia.webp",
      pictureFullPath: "/img/rituals/distorcer-aparencia.webp",
      description:
        "<p>You modify your physical appearance to transform into someone else. This includes height, weight, skin tone, hair color, voice tone, fingerprint, cornea, etc. You receive +10 on Deception checks for Disguise (see Deception skill), but you do not gain abilities from the new form or modify your other stats.</p><p><strong>Advanced (+2 EP):</strong> changes the range to “short” and the target to “1 being”. An unwilling target can negate the effect with a Will saving throw.</p><p><strong>True (+5 EP):</strong> as in Advanced, but changes the target to “chosen beings”. Requires 3rd circle.</p>",
    },
    {
      name: "Time Distortion",
      circle: "4",
      element: "Death",
      execution: "standard",
      range: "personal",
      target: "see description",
      duration: "see description",
      pictureURL: "/img/rituals/distorcao-temporal.webp",
      pictureFullPath: "/img/rituals/distorcao-temporal.webp",
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
      pictureURL: "/img/rituals/eco-espiral.webp",
      pictureFullPath: "/img/rituals/eco-espiral.webp",
      description:
        "<p>Você manifesta em suas mãos uma pequena cópia do alvo feita de cinzas. No início do próximo turno após conjurar este ritual, você precisa gastar uma ação padrão para se concentrar nele; caso contrário, ele se dissipa sem efeito. No início do segundo turno, você precisa gastar uma ação padrão para descarregá-lo. Se fizer isso, a cópia explode e o alvo sofre dano de Death igual a quantidade de dano que sofreu na rodada em que você se concentrou (Fortitude reduz à metade). Se não fizer, o ritual se dissipa sem efeito.</p><p><strong>Advanced (+3 EP):</strong> muda o alvo para “até 5 seres”.</p><p><strong>True (+7 EP):</strong> muda a duração para “até 3 rodadas”, permitindo que você se concentre nas duas primeiras e descarregue na terceira. Requires 4th circle and afinity.</p>",
    },
    {
      name: "Electrocution",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "short",
      target: "1 being or object",
      duration: "instantaneous",
      save: "Fortitude reduces partially",
      normalDice: "3d6",
      discenteDice: "6d6",
      verdadeiroDice: "8d6",
      pictureURL: "/img/rituals/eletrocussao.webp",
      pictureFullPath: "/img/rituals/eletrocussao.webp",
      description:
        "<p>You manifest and shoot an electrical current at the target, who takes 3d6 points of electricity damage and becomes Vulnerable for one round. If they pass the saving throw, they only take half damage and avoid the condition. If used against electronic objects, this ritual deals double damage and ignores resistances.</p><p><strong>Advanced (+2 EP):</strong> changes the target to “area: 30m line”. You fire a powerful beam that deals 6d6 Energy damage to all beings and non-grabbed objects in the area. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the area to “chosen targets”. Instead of normal, you fire multiple bolts of lightning, one at each chosen target, dealing 8d6 points of Energy damage to each target.. Requires 3rd circle.</p>",
    },
    {
      name: "Shuffle",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      pictureURL: "/img/rituals/embaralhar.webp",
      pictureFullPath: "/img/rituals/embaralhar.webp",
      description:
        "<p>You create three illusory copies that look like extremely realistic holograms. The copies surround you and imitate your actions, making it difficult for an enemy to know who the real one is. You gain +6 Defense. Each time an attack against you misses, one of the copies disappears and the bonus to Defense decreases by 2. An opponent must see the copies to be confused. If you are invisible, or the attacker closes their eyes, you do not receive the bonus (but the attacker suffers the normal penalties for being unable to see).</p><p><strong>Advanced (+2 EP):</strong> changes the number of copies to 5 (and the Defense bonus to +10). Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes the number of copies to 8 (and the Defense bonus to +16). In addition to normal, every time a copy is destroyed, it emits a flash of light. The being that destroyed the copy becomes Obfuscated for one round. Requires 3rd circle.</p>",
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
      pictureURL: "/img/rituals/enfeiticar.webp",
      pictureFullPath: "/img/rituals/enfeiticar.webp",
      description:
        "<p>This ritual makes the target helpful. They are not under your control, but perceive your words and actions in the most favorable way possible. You receive a +10 bonus on Diplomacy checks against them. A hostile target or target that is engaged in combat receives +5 on their saving throw. If you or your allies take any hostile action against the target, the effect is dispelled and the target returns to the attitude it had before (or worsened, according to the GM)</p><p><strong>Advanced (+2 EP):</strong> instead of normal, you suggest an action to the target and they comply. The suggestion must be made in a way that appears acceptable, at the GM's discretion. Asking the target to shoot their companion, for example, dispels the effect. Suggesting a guard to take a little rest so that you and your allies can get past them is acceptable. When the target takes the action, the effect ends. You can set a specific condition for the suggestion: for example, that the police officer arrests the next person in a green coat they see. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> affects all targets within range. Requires 3rd circle.</p>",
    },
    {
      name: "Hide from Eyesight",
      circle: "2",
      element: "Knowledge",
      execution: "free",
      range: "personal",
      target: "yourself",
      duration: "1 rodada",
      pictureURL: "/img/rituals/esconder-os-olhos.webp",
      pictureFullPath: "/img/rituals/esconder-os-olhos.webp",
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
      pictureURL: "/img/rituals/espirais-da-perdicao.webp",
      pictureFullPath: "/img/rituals/espirais-da-perdicao.webp",
      description:
        "<p>Spirals appear on the target's body, slowing their movements. The target receives a –1d20 penalty on attack rolls.</p><p><strong>Advanced (+2 EP):</strong> changes the penalty to –2d20. Requires 2nd circle.</p><p><strong>True (+8 EP):</strong> changes the penalty to -2d20. and the target to “chosen beings”. Requires 3rd circle.</p>",
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
      pictureURL: "/img/rituals/ferver-sangue.webp",
      pictureFullPath: "/img/rituals/ferver-sangue.webp",
      description:
        "<p>O sangue do alvo aquece até entrar em ebulição. Quando o ritual é conjurado, e no início de cada turno do alvo, ele deve fazer um teste de Fortitude. Se falhar, sofre 4d8 pontos de dano de Sangue e fica fraco; se passar, sofre metade do dano e não fica fraco neste turno. Se o alvo passar nesse teste dois turnos seguidos o efeito termina.</p><p><strong>Verdadeiro (+4 PE):</strong> muda o alvo para “seres escolhidos”. Requer 4º círculo e afinidade.</p>",
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
      pictureURL: "/img/rituals/fim-inevitavel.webp",
      pictureFullPath: "/img/rituals/fim-inevitavel.webp",
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
      pictureURL: "/img/rituals/flagelo-de-sangue.webp",
      pictureFullPath: "/img/rituals/flagelo-de-sangue.webp",
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
      pictureURL: "/img/rituals/forma-monstruosa.webp",
      pictureFullPath: "/img/rituals/forma-monstruosa.webp",
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
      pictureURL: "/img/rituals/fortalecimento-sensorial.webp",
      pictureFullPath: "/img/rituals/fortalecimento-sensorial.webp",
      description:
        "<p>You enhance your senses, gaining +1d20 in Investigation, Fighting, Perception and Marksmanship.</p><p><strong>Advanced (+2 EP):</strong> in addition to normal, your enemies suffer –1d20 on attack rolls against you. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> in addition to normal, you sharpen your senses to perceive any danger or threat. You are immune to Surprised and Off-Guard conditions and gain +10 to Defense and Reflexes. Requires 4th circle and afinity.</p>",
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
      pictureURL: "/img/rituals/hemofagia.webp",
      pictureFullPath: "/img/rituals/hemofagia.webp",
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
      pictureURL: "/img/rituals/inexistir.webp",
      pictureFullPath: "/img/rituals/inexistir.webp",
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
      pictureURL: "/img/rituals/invadir-mente.webp",
      pictureFullPath: "/img/rituals/invadir-mente.webp",
      description:
        '<p>Quando conjura este ritual, você gera um dos efeitos a seguir, a sua escolha: <em>rajada mental</em> (usa os primeiros parâmetros do cabeçalho acima) ou <em>ligação telepática</em> (usa os segundos parâmetros).</p><p><em>Rajada Mental:</em> você infecta a mente do alvo com o Conhecimento proibido do Outro Lado, dilacerando o cérebro dele. O alvo sofre 6d6 pontos de dano de Conhecimento e fica atordoado por uma rodada. Se passar no teste de Vontade, sofre metade do dano e não fica atordoado. Um mesmo alvo só pode ficar atordoado por este ritual uma vez por cena.</p><p><em>Ligação Telepática:</em> você cria um elo mental entre duas pessoas (você pode ser uma delas), que podem se comunicar independente da distância pela duração do ritual (1 dia).</p><p><strong>Discente (+3 PE):</strong> se escolhar <em>rajada mental</em>, aumenta o dano para 10d6. Se escolher <em>ligação telepática</em>, em vez do normal, você cria um elo mental que permite que você veja e ouça pelos sentidos do alvo, gastando uma ação de movimento para se concentrar. Um alvo involuntário pode fazer um teste de Vontade para suprimir o ritual por uma hora. Requer 3º círculo.</p><p><strong>Verdadeiro (+ 7 PE):</strong> se escolher <em>rajada mental</em>, aumenta o dano para 10d6 e muda o alvo para todos os "seres escolhidos". Se escolher <em>ligação telepática</em>, você pode criar um vínculo mental entre até 5 pessoas. Requer 4º círculo.</p>',
    },
    {
      name: "Meat Casing",
      circle: "4",
      element: "Blood",
      execution: "standard",
      range: "short",
      effect: "1 clone seu",
      duration: "scene",
      pictureURL: "/img/rituals/involucro-de-carne.webp",
      pictureFullPath: "/img/rituals/involucro-de-carne.webp",
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
      pictureURL: "/img/rituals/lamina-do-medo.webp",
      pictureFullPath: "/img/rituals/lamina-do-medo.webp",
      description:
        "<p>Você manifesta uma lâmina impossível, que pode ser descrita apenas como uma “fenda na Realidade”, com a qual golpeia um alvo adjacente. Se o alvo falhar no teste de Fortitude, seus PV são reduzidos a 0 e ele fica morrendo; se passar, sofre 10d8 pontos de dano de Fear (ignora todas as resistências) e fica apavorado por uma rodada. Se uma pessoa ficar morrendo pela Lâmina do Fear e sobreviver, o ferimento causado pelo ritual passa a se transformar constantemente, jamais cicatrizando e fazendo com que a pessoa passe a viver em dor constante. Aprender este ritual requer um poder de trilha específico.</p>",
    },
    {
      name: "Locate",
      circle: "2",
      element: "Knowledge",
      execution: "standard",
      range: "personal",
      area: "circle com 90m de raio",
      duration: "scene",
      pictureURL: "/img/rituals/localizacao.webp",
      pictureFullPath: "/img/rituals/localizacao.webp",
      description:
        "<p>Esta ritual pode encontrar uma pessoa ou objeto a sua escolha. Você pode pensar em termos gerais (“um policial”, “algo de metal”) ou específicos (“A delegada Joana”, “uma pistola”). O ritual indica a direção e distância da pessoa ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (“a chave do armazém 4 no porto”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja parecida com a verdade, o ritual falha, mas você gasta os EP mesmo assim. Este ritual pode ser bloqueado por uma fina camada de chumbo.</p><p><strong>Advanced (+3 EP):</strong> muda o alcance para “toque”, o alvo para “1 pessoa” e a duração para “1 hora”. Em vez do normal, a pessoa tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, o ritual pode ser usado para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma caverna (mas não para encontrar a localização de uma pessoa ou objeto; funciona apenas em relação a lugares). Caso a pessoa demore mais de uma hora para percorrer o caminho, o conhecimento se perde.</p><p><strong>True (+7 EP):</strong> aumenta a área para circle de 1km de raio. Requires 4th circle.</p>",
    },
    {
      name: "Light",
      circle: "1",
      element: "Energy",
      execution: "standard",
      range: "short",
      target: "1 object",
      duration: "scene",
      save: "Will nullyfies",
      pictureURL: "/img/rituals/luz.webp",
      pictureFullPath: "/img/rituals/luz.webp",
      description:
        "<p>The target emits bright, alternating-colored light (but does not produce heat) in a 9m radius area. The object can be stored (in a pocket, for example) to stop the light, which will come back on if the object is revealed. If the target is an object in the possession of an unwilling person, that person is entitled to a Will saving throw to negate the effect.</p><p><strong>Advanced (+2 EP):</strong> changes the range to long and the effect to 4 glowing spheres. It creates floating spheres of pure light 10cm in diameter, which you can position wherever you want within range. You can send one sphere forward, one backward, one upward, and keep one close to you, for example. Once per round, you can move the spheres as a free action. Each sphere illuminates an area of ​​6m radius, but does not produce heat. If a sphere occupies the space of a being, it becomes Obfuscated and its silhouette can be seen clearly (it does not receive camouflage due to darkness or invisibility). Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> the light is warm like the sun. Inside the area, your allies receive +1d20 on Will checks, and your enemies are Obfuscated. Requires 3rd circle.</p>",
    },
    {
      name: "Tangible Fear",
      circle: "4",
      element: "Fear",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      pictureURL: "/img/rituals/medo-tangivel.webp",
      pictureFullPath: "/img/rituals/medo-tangivel.webp",
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
      pictureURL: "/img/rituals/mergulho-mental.webp",
      pictureFullPath: "/img/rituals/mergulho-mental.webp",
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
      pictureURL: "/img/rituals/miasma-entropico.webp",
      pictureFullPath: "/img/rituals/miasma-entropico.webp",
      description:
        "<p>Cria uma explosão de emanações tóxicas. Seres na área sofrem 4d8 pontos de dano químico e ficam enjoados por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoados.</p><p><strong>Advanced (+3 EP):</strong> muda o dano para 6d8 de Death.</p><p><strong>True (+7 EP):</strong> muda a duração para 3 rodadas. Um ser que inicie seu turno dentro da área sofre o dano novamente. Requires 3rd circle.</p>",
    },
    {
      name: "Ash Cloud",
      circle: "1",
      element: "Death",
      execution: "standard",
      range: "short",
      effect: "cloud with a radius and height of 6m",
      duration: "scene",
      pictureURL: "/img/rituals/nuvem-de-cinzas.webp",
      pictureFullPath: "/img/rituals/nuvem-de-cinzas.webp",
      description:
        "<p>A cloud of thick soot rises from a point of your choosing, obscuring all vision — from 1.5m onwards being have camouflage and from 3m onwards beings have total camouflage. A strong wind disperses the cloud in 4 rounds and a gale disperses it in 1 round. The cloud doesn't work above water. </p><p><strong>Advanced (+2 EP):</strong> you can choose beings in range when you cast the ritual; they see through the effect. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> in addition to normal, the cloud becomes thick, almost solid. Any being within it has its speed reduced to 3m (regardless of its normal speed) and suffers –2 on attack rolls.. Requires 3rd circle.</p>",
    },
    {
      name: "Uncontrollable Hatred",
      circle: "1",
      element: "Blood",
      execution: "standard",
      range: "touch",
      target: "1 person",
      duration: "scene",
      pictureURL: "/img/rituals/odio-incontrolavel.webp",
      pictureFullPath: "/img/rituals/odio-incontrolavel.webp",
      description:
        "<p>The target goes into a frenzy, increasing its aggression and fighting ability. He gains +2 on attack rolls and melee damage rolls and resistance to ballistic, slashing, bludgeoning, and piercing damage 5. While the effect lasts, the target cannot take any action that requires calm and concentration (such as using the Stealth skill or cast rituals), and must always attack a target in its round, even if it is an ally if it is the only being within reach.</p><p><strong>Advanced (+2 EP):</strong> In addition to normal, whenever the target uses the attack action, it can make an additional melee attack against the same target.</p><p><strong>True (+5 EP):</strong> changes the attack and damage bonus to +5 and the target now takes only half damage from ballistic, slashing, bludgeoning and piercing attacks. Requires 3rd circle and afinity.</p>",
    },
    {
      name: "Hear the Whispers",
      circle: "1",
      element: "Knowledge",
      execution: "complete",
      range: "personal",
      target: "yourself",
      duration: "instantaneous",
      pictureURL: "/img/rituals/ouvir-os-sussurros.webp",
      pictureFullPath: "/img/rituals/ouvir-os-sussurros.webp",
      description:
        "<p>The ritual connects you with the whispers, memories echoed from the Other Side, which you can consult to receive forbidden knowledge regarding an action you will soon take. When using this ritual, ask a question about an event you are about to do (in the same scene) that can be answered with “yes” or “no”. The DM rolls 1d6 in secret; on a result of 2 to 6, the ritual works and you receive your answer, which can be “yes”, “no” or “yes and no”</p><p>On a result of 1, the ritual fails and returns a “no” result. There is no way of knowing whether this result was given because the ritual failed or not. Launching this ritual multiple times on the same target always generates the first result.</p><p>For example, you are about to enter a building that could be a cultist's hideout. If you ask the whispers if the cultist is really there, the answer may be “yes” (they are in the building), “no” (they are not in the building) or “yes and no” (they are in the building, but used a ritual to hide their physical body in a dimension on the Other Side...). This is useful to know whether you should (or should not) spend resources for a possible fight.</p><p><strong>Advanced (+2 EP):</strong> changes the casting time to 1 minute. Instead of normal, you can query the echoes by asking a question about an event that could happen up to one day in the future. The GM rolls the chance of failure; on a result of 2 to 6, you receive an answer, from a simple sentence to a prophecy or riddle. In general, this use offers clues, indicating a path to be taken to discover the answer you are looking for. On failure you receive no response. Requires 2nd circle.</p><p><strong>True (+5 EP):</strong> changes casting time to 10 minutes and duration to 5 rounds. Instead of normal, you consult the echoes, being able to ask one question per round, as long as it can be answered with “yes”, “no” or “no one knows”. The GM rolls the chance of failure for each question. In case of failure, the answer is also “no one knows”. Requires 3rd circle.</p>",
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
      pictureURL: "/img/rituals/paradoxo.webp",
      pictureFullPath: "/img/rituals/paradoxo.webp",
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
      duration: "1 round",
      save: "Will (anula)",
      discenteDice: "3d8",
      pictureURL: "/img/rituals/perturbacao.webp",
      pictureFullPath: "/img/rituals/perturbacao.webp",
      description:
        "<p>You give an order that the target must be able to hear (but need not understand). If they fail the saving throw, they must obey the order on their own turn to the best of their ability. Choose one of the effects.</p><p><strong>Run:</strong> The target spends its turn trying to move away from you (using all of its actions).</p><p><strong>Let Go:</strong> The target drops any items it is holding and cannot pick them up again until the start of their next turn. As this is a free action, they can still perform other actions (except pick up what they dropped).</p><p><strong>Stop:</strong> The target is Astonished (cannot perform actions, only reactions).</p><p><strong>Sit:</strong> As a free action, the target sits down on the ground (if they were hanging or flying, they drop to the ground). They can take other actions, but not get up until the start of their next turn.</p><p><strong>Come:</strong> The target spends its turn approaching you (using all of their actions).</p><p><strong>Advanced (+2 EP):</strong> changes the target to “1 being” and adds the following command: “Suffer. The target is struck with acute pain, taking 3d8 Knowledge damage and becoming Shaken for one round.”.</p><p><strong>True (+5 EP):</strong> change the target to “up to 5 beings” or add the following command: “Attack. The target must perform the Attack action to attack another target of its choice within medium range, with all its capabilities.”. Requires 3rd circle and afinity.</p>",
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
      pictureURL: "/img/rituals/polarizacao-caotica.webp",
      pictureFullPath: "/img/rituals/polarizacao-caotica.webp",
      description:
        "<p>You generate a supernatural magnetic aura. Choose one of the effects below.</p><p><strong>Attract:</strong> you can use a movement action to pull a space 2 or smaller metal object within range. If the object is not being held, it flies to your hands (if you have free hands to pick it up) or to your feet.</p><p><strong>Repel:</strong> you repel objects of space 2 or smaller (which involves almost all projectiles and thrown weapons), gaining resistance to ballistic, cutting, bludgeoning, and piercing damage 5.</p><p><strong>Advanced (+2 EP):</strong> in this version, the magnetic energy is expelled at once and throws up to 10 objects, or a total of 10 spaces, whichever is smaller. Objects must be within 3m of each other. Thrown objects can hit beings in their path, dealing from 1 point of impact damage per space (soft, or blunt objects) to 1d6 points of impact damage per space (hard, pointed, or sharp objects). Beings hit are entitled to a Reflexes saving throw to reduce the damage by half. Beings within the effect's carrying capacity can be thrown, but are entitled to a Will saving throw to avoid the effect (on themselves or on objects they are holding). A being thrown against a solid surface suffers 1d6 points of impact damage for every 3m they “flew” in travel (including other beings; in this case, both suffer damage).</p><p><strong>True (+5 EP):</strong> changes the range to medium. You can use a movement action to cause magnetic force to levitate and move a being or object of space 10 or smaller up to 9m in any direction within range. A being can nullify the effect on them, or on an object they possess, by passing a Will saving throw. The target falls to the ground if they move out of range or the effect ends.</p>",
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
      pictureURL: "/img/rituals/possessao.webp",
      pictureFullPath: "/img/rituals/possessao.webp",
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
      pictureURL: "/img/rituals/presenca-do-medo.webp",
      pictureFullPath: "/img/rituals/presenca-do-medo.webp",
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
      pictureURL: "/img/rituals/protecao-contra-rituais.webp",
      pictureFullPath: "/img/rituals/protecao-contra-rituais.webp",
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
      pictureURL: "/img/rituals/purgatorio.webp",
      pictureFullPath: "/img/rituals/purgatorio.webp",
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
      pictureURL: "/img/rituals/rejeitar-nevoa.webp",
      pictureFullPath: "/img/rituals/rejeitar-nevoa.webp",
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
      pictureURL: "/img/rituals/salto-fantasma.webp",
      pictureFullPath: "/img/rituals/salto-fantasma.webp",
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
      pictureURL: "/img/rituals/sopro-do-caos.webp",
      pictureFullPath: "/img/rituals/sopro-do-caos.webp",
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
      pictureURL: "/img/rituals/tecer-ilusao.webp",
      pictureFullPath: "/img/rituals/tecer-ilusao.webp",
      description:
        "<p>This ritual creates a visual illusion (a person, a wall...) or sound (a cry for help, a frightening howl...). The ritual creates only simple images or sounds, with a volume equivalent to a person's voice for each 1.5m cube in the effect. It is not possible to create smells, textures or temperatures, nor complex sounds, such as music or dialogue. Beings and objects pass through an illusion without suffering damage, but the ritual can, for example, hide a trap or ambush. The illusion is dispelled if you move out of range.</p><p><strong>Advanced (+2 EP):</strong> changes the effect to up to 8 1.5m cubes and the duration to sustained. You can create illusions of combined images and sounds, and you can create complex sounds, smells, and thermal sensations. It can also create tactile sensations, such as textures; Objects still pass through the illusion, but beings cannot pass through it without passing a Will saving throw. Each round, you can use a free action to move the image or change the sound, such as increasing the volume or making it appear to move away or closer, while still within the limits of the effect. You can, for example, create the illusion of a ghost walking around the room, controlling its movements. The illusion is still unable to cause or suffer damage. When you stop sustaining the ritual, the image or sound persists for one more round before the ritual dissipates. Requires 2nd circle.</p><p><strong>True (+ 5 EP):</strong> you create the illusion of mortal danger. When the ritual is cast, and at the start of each of its turns, a target interacting with the illusion must make a Will saving throw; If they fail, they believe the illusion is real and take 6d6 Knowledge damage. The target rationalizes the effect whenever they fail the check (for example, they believes the same ceiling could fall on them multiple times). If a target succeeds two Will saves in a row, the effect is nullified for them.. Requires 3rd circle.</p>",
    },
    {
      name: "Noise Screen",
      circle: "2",
      element: "Energy",
      execution: "standard",
      range: "personal",
      target: "yourself",
      duration: "scene",
      pictureURL: "/img/rituals/tela-de-ruido.webp",
      pictureFullPath: "/img/rituals/tela-de-ruido.webp",
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
      pictureURL: "/img/rituals/teletransporte.webp",
      pictureFullPath: "/img/rituals/teletransporte.webp",
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
      pictureURL: "/img/rituals/tentaculos-de-lodo.webp",
      pictureFullPath: "/img/rituals/tentaculos-de-lodo.webp",
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
      pictureURL: "/img/rituals/terceiro-olho.webp",
      pictureFullPath: "/img/rituals/terceiro-olho.webp",
      description:
        "<p>Your eyes fill with sigils and you begin to see paranormal auras at long range. Rituals, cursed items, and creatures emit auras. You know the element of the aura and its approximate power — 1st circle rituals and creatures with DV up to 80 emit a weak aura; 2nd and 3rd circle rituals and creatures with DV 81 and 280 emit a moderate aura, and 4th circle rituals and creatures with DV 281 or greater emit a powerful aura </p><p>In addition, you can spend one movement action to discover whether a being that you can see at medium range has paranormal powers or is capable of casting rituals and from which elements.</p><p><strong>Advanced (+2 EP):</strong> changes duration to 1 day.</p><p><strong>True (+5 EP):</strong> can also see invisible objects and beings, which appear as translucent forms.</p>",
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
      pictureURL: "/img/rituals/transfigurar-agua.webp",
      pictureFullPath: "/img/rituals/transfigurar-agua.webp",
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
      pictureURL: "/img/rituals/transfusao-vital.webp",
      pictureFullPath: "/img/rituals/transfusao-vital.webp",
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
      pictureURL: "/img/rituals/velocidade-mortal.webp",
      pictureFullPath: "/img/rituals/velocidade-mortal.webp",
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
      pictureURL: "/img/rituals/videncia.webp",
      pictureFullPath: "/img/rituals/videncia.webp",
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
      pictureURL: "/img/rituals/vinculo-de-sangue.webp",
      pictureFullPath: "/img/rituals/vinculo-de-sangue.webp",
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
      pictureURL: "/img/rituals/vomitar-pestes.webp",
      pictureFullPath: "/img/rituals/vomitar-pestes.webp",
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
      pictureURL: "/img/rituals/zerar-entropia.webp",
      pictureFullPath: "/img/rituals/zerar-entropia.webp",
      description:
        '<p>Você zera completamente a entropia do alvo em relação ao ambiente, deixando-o paralisado. Se passar na resistência, em vez disso fica lento. No início de cada um de seus turnos, o alvo pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, encerra o efeito.</p><p><strong>Advanced (+4 EP):</strong> muda o alvo para "1 ser". Requires 4th circle.</p><p><strong>True (+11 EP):</strong> muda o alvo para "seres escolhidos". Requires 4th circle.</p>',
    },
  ],
  ru = { class: "rituals-modal-content" },
  su = { class: "class-rituals-container" },
  nu = { class: "secondary-tab-container" },
  iu = { key: 1, class: "search-container" },
  du = { key: 2, class: "class-rituals-content" },
  lu = T({
    __name: "RitualsModalContent",
    props: { currentSource: {} },
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Varies", value: 6 },
        ],
        g = [
          { label: "All", circle: "-", value: 0 },
          { label: "1st Circle", circle: "1", value: 1 },
          { label: "2nd Circle", circle: "2", value: 2 },
          { label: "3rd Circle", circle: "3", value: 3 },
          { label: "4th Circle", circle: "4", value: 4 },
        ],
        u = E(0),
        c = E(0),
        d = E(""),
        r = E([]);
      ue(async () => {
        r.value = await Lr();
      });
      const i = (f) => v("handleAddRitual", f),
        p = N(() =>
          l.currentSource === "cultoDaCriacao"
            ? xr.sort((f, S) => f.name.localeCompare(S.name))
            : l.currentSource === "arquivosConfidenciais"
            ? dl.sort((f, S) => f.name.localeCompare(S.name))
            : l.currentSource === "marcasFragmentadas"
            ? _r.sort((f, S) => f.name.localeCompare(S.name))
            : l.currentSource === "grimorioParanormal"
            ? r.value
            : u.value === 0
            ? c.value === 0
              ? Ie.filter((f) => K(f.name, d.value)).sort((f, S) =>
                  f.name.localeCompare(S.name)
                )
              : Ie.filter((f) => f.circle === g[c.value].circle)
                  .filter((f) => K(f.name, d.value))
                  .sort((f, S) => f.name.localeCompare(S.name))
            : c.value === 0
            ? u.value === 0
              ? Ie.filter((f) => K(f.name, d.value)).sort((f, S) =>
                  f.name.localeCompare(S.name)
                )
              : Ie.filter((f) => f.element === m[u.value].label)
                  .filter((f) => K(f.name, d.value))
                  .sort((f, S) => f.name.localeCompare(S.name))
            : Ie.filter((f) => f.element === m[u.value].label)
                .filter((f) => K(f.name, d.value))
                .filter((f) => f.circle === g[c.value].circle)
                .filter((f) => K(f.name, d.value))
        );
      return (f, S) => (
        t(),
        s("div", ru, [
          e("div", su, [
            f.currentSource === "ordemParanormal"
              ? (t(),
                z(
                  ve,
                  {
                    key: 0,
                    "current-tab": u.value,
                    "tab-options": m,
                    onHandleNavigation: S[0] || (S[0] = (P) => (u.value = P)),
                  },
                  null,
                  8,
                  ["current-tab"]
                ))
              : C("", !0),
            e("div", nu, [
              f.currentSource === "ordemParanormal"
                ? (t(),
                  z(
                    ve,
                    {
                      key: 0,
                      "current-tab": c.value,
                      "tab-options": g,
                      secondary: "",
                      onHandleNavigation: S[1] || (S[1] = (P) => (c.value = P)),
                    },
                    null,
                    8,
                    ["current-tab"]
                  ))
                : C("", !0),
            ]),
            f.currentSource === "ordemParanormal"
              ? (t(),
                s("div", iu, [
                  A(
                    ye,
                    {
                      value: d.value,
                      dark: "",
                      onUpdate: S[2] || (S[2] = (P) => (d.value = P)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : C("", !0),
            p.value.length > 0
              ? (t(),
                s("div", du, [
                  (t(!0),
                  s(
                    j,
                    null,
                    G(
                      p.value,
                      (P) => (
                        t(),
                        s("div", { key: P.name, class: "class-rituals-card" }, [
                          A(Lo, { ritual: P, onHandleAdd: i }, null, 8, [
                            "ritual",
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]))
              : C("", !0),
          ]),
        ])
      );
    },
  }),
  uu = V(lu, [["__scopeId", "data-v-f0c93785"]]),
  nt = (o) => (L("data-v-bd59e041"), (o = o()), H(), o),
  cu = { class: "modal-content modal-width" },
  mu = { class: "modal-header" },
  pu = nt(() => e("h2", null, "Add Rituals", -1)),
  gu = nt(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  vu = [gu],
  hu = { class: "modal-body modal-height" },
  fu = T({
    __name: "RitualsModal",
    props: { character: {} },
    emits: ["handleAddRitual", "handleCloseModal"],
    setup(o, { emit: q }) {
      const l = q,
        v = [
          { label: "Rituals", value: 0 },
          { label: "My Rituals", value: 1 },
        ],
        m = E(0),
        g = E("ordemParanormal"),
        u = (d) => (m.value = d),
        c = (d) => l("handleAddRitual", d);
      return (d, r) => (
        t(),
        s("div", cu, [
          e("div", mu, [
            pu,
            e(
              "button",
              { onClick: r[0] || (r[0] = (i) => d.$emit("handleCloseModal")) },
              vu
            ),
          ]),
          e("div", hu, [
            A(
              ha,
              {
                "current-source": g.value,
                "show-culto-da-criacao": "",
                "show-arquivos-confidenciais": "",
                "show-marcas-fragmentadas": "",
                "show-grimorio-paranormal": "",
                onHandleChangeCurrentSource:
                  r[1] || (r[1] = (i) => (g.value = i)),
              },
              null,
              8,
              ["current-source"]
            ),
            g.value === "ordemParanormal"
              ? (t(),
                z(
                  va,
                  { key: 0, value: m.value, options: v, onHandleNavigation: u },
                  null,
                  8,
                  ["value"]
                ))
              : C("", !0),
            (t(),
            z(
              ke,
              null,
              [
                m.value === 0
                  ? (t(),
                    z(
                      uu,
                      {
                        key: 0,
                        "current-source": g.value,
                        onHandleAddRitual: c,
                      },
                      null,
                      8,
                      ["current-source"]
                    ))
                  : C("", !0),
              ],
              1024
            )),
            (t(),
            z(
              ke,
              null,
              [
                m.value === 1
                  ? (t(), z($r, { key: 0, onHandleAddRitual: c }))
                  : C("", !0),
              ],
              1024
            )),
          ]),
        ])
      );
    },
  }),
  bu = V(fu, [["__scopeId", "data-v-bd59e041"]]),
  qu = (o) => (L("data-v-25deaea6"), (o = o()), H(), o),
  Cu = { class: "modal-content modal-width" },
  Au = { class: "modal-header" },
  yu = qu(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Pu = [yu],
  Eu = { class: "modal-body" },
  Su = ["innerHTML"],
  ku = T({
    __name: "SkillModal",
    props: { skill: {} },
    emits: ["handleCloseModal"],
    setup(o) {
      return (q, l) => (
        t(),
        s("div", Cu, [
          e("div", Au, [
            e("h2", null, U(q.skill.name), 1),
            e(
              "button",
              { onClick: l[0] || (l[0] = (v) => q.$emit("handleCloseModal")) },
              Pu
            ),
          ]),
          e("div", Eu, [
            e(
              "div",
              { class: "description", innerHTML: q.skill.description },
              null,
              8,
              Su
            ),
          ]),
        ])
      );
    },
  }),
  Ru = V(ku, [["__scopeId", "data-v-25deaea6"]]),
  Y = (o) => (L("data-v-8f535d56"), (o = o()), H(), o),
  wu = { class: "form-container" },
  Iu = { class: "input-container" },
  Mu = Y(() => e("div", { class: "label" }, " Name* ", -1)),
  $u = { class: "input-row" },
  Du = { class: "input-container" },
  Tu = Y(() => e("div", { class: "label" }, " Damage* ", -1)),
  Vu = { class: "input-container" },
  zu = Y(() => e("div", { class: "label" }, " Critical* ", -1)),
  _u = { class: "input-container" },
  Ou = Y(() => e("div", { class: "label" }, " Multiplier* ", -1)),
  Uu = { class: "input-row" },
  Lu = { class: "input-container" },
  Hu = Y(() => e("div", { class: "label" }, " Ataque Bonus ", -1)),
  xu = { class: "input-container" },
  ju = Y(() => e("div", { class: "label" }, " Damage Type ", -1)),
  Fu = { class: "input-row" },
  Nu = { class: "input-container" },
  Bu = Y(() => e("div", { class: "label" }, " Range ", -1)),
  Qu = { class: "input-container" },
  Gu = Y(() => e("div", { class: "label" }, " Skill ", -1)),
  Xu = { class: "input-container" },
  Wu = Y(() => e("div", { class: "label" }, " Damage Attribute ", -1)),
  Ku = { class: "title-container" },
  Ju = Y(() => e("div", { class: "title" }, " Extra damage: ", -1)),
  Yu = { key: 0, class: "extra-damage-container" },
  Zu = { class: "input-row extra-damage-row" },
  ec = { class: "input-row" },
  ac = { class: "input-container" },
  oc = Y(() => e("div", { class: "label" }, " Damage* ", -1)),
  tc = ["onUpdate:modelValue"],
  rc = { class: "input-container" },
  sc = Y(() => e("div", { class: "label" }, " Type* ", -1)),
  nc = { class: "button-remove-container" },
  ic = ["onClick"],
  dc = { class: "row" },
  lc = Y(() => e("div", { class: "label" }, " Image ", -1)),
  uc = { key: 0 },
  cc = ["src"],
  mc = { key: 1 },
  pc = Y(() =>
    e(
      "img",
      { class: "picture", src: Dr, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  gc = [pc],
  vc = Y(() =>
    e(
      "div",
      { class: "label" },
      [ne(" Notes"), e("span", null, " (use bold to color the text purple)")],
      -1
    )
  ),
  hc = Y(() =>
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
  fc = { class: "buttons-container" },
  bc = ["disabled"],
  qc = { key: 0 },
  Cc = T({
    __name: "AttackForm",
    props: { attack: { type: Object, default: $e }, addMode: Boolean },
    emits: ["handleClose", "handleEditAttack"],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = [
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
        g = ["-", "Short", "Medium", "Long", "Extreme", "Unlimited"],
        u = [
          "Fighting",
          "Marksmanship",
          "Occultism",
          "Deception",
          "Arts",
          "Technoloy",
        ],
        c = ["None", "Agility", "Strength", "Intellect", "Presence", "Vigor"],
        d = E(je.clone(l.attack)),
        r = E(!1),
        i = N(
          () =>
            d.value.name === "" ||
            d.value.damage === "" ||
            d.value.criticalRange.toString() === "" ||
            d.value.criticalMult.toString() === ""
        ),
        p = () => {
          Ro.isArray(d.value.aditionalDamage) || (d.value.aditionalDamage = []),
            d.value.aditionalDamage.push({
              id: Fe(),
              value: "1d6",
              damageType: "Ballistic",
            });
        },
        f = (y) => {
          if (!Ro.isArray(d.value.aditionalDamage)) return;
          const $ = d.value.aditionalDamage.findIndex((X) => X.id === y);
          d.value.aditionalDamage.splice($, 1);
        },
        S = () => {
          (d.value = je.clone($e)), v("handleClose");
        },
        P = () => {
          if (i.value) return;
          Gr(d.value);
          const y = { attack: d.value };
          v("handleEditAttack", y), (d.value = je.clone($e));
        },
        b = (y, $) => {
          i.value ||
            ((d.value.pictureURL = y),
            (d.value.pictureFullPath = $),
            (r.value = !1));
        };
      return (y, $) => {
        const X = Ne("p-editor"),
          ie = Ne("vue-final-modal");
        return (
          t(),
          s(
            j,
            null,
            [
              e("div", wu, [
                e("div", Iu, [
                  Mu,
                  qe(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          $[0] || ($[0] = (a) => (d.value.name = a)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[Ce, d.value.name]]
                  ),
                ]),
                e("div", $u, [
                  e("div", Du, [
                    Tu,
                    qe(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            $[1] || ($[1] = (a) => (d.value.damage = a)),
                          type: "text",
                          class: "input-primary dark dropdown-sized",
                        },
                        null,
                        512
                      ),
                      [[Ce, d.value.damage]]
                    ),
                  ]),
                  e("div", Vu, [
                    zu,
                    qe(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            $[2] || ($[2] = (a) => (d.value.criticalRange = a)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[Ce, d.value.criticalRange]]
                    ),
                  ]),
                  e("div", _u, [
                    Ou,
                    qe(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            $[3] || ($[3] = (a) => (d.value.criticalMult = a)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[Ce, d.value.criticalMult]]
                    ),
                  ]),
                ]),
                e("div", Uu, [
                  e("div", Lu, [
                    Hu,
                    qe(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            $[4] || ($[4] = (a) => (d.value.attackBonus = a)),
                          type: "number",
                          class: "input-primary dark dropdown-sized",
                        },
                        null,
                        512
                      ),
                      [[Ce, d.value.attackBonus]]
                    ),
                  ]),
                  e("div", xu, [
                    ju,
                    A(
                      Se,
                      {
                        value: d.value.damageType,
                        options: m,
                        width: "7.5rem",
                        "content-width": "7.5rem",
                        "form-input": "",
                        onUpdateValue:
                          $[5] || ($[5] = (a) => (d.value.damageType = a)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", Fu, [
                  e("div", Nu, [
                    Bu,
                    A(
                      Se,
                      {
                        value: d.value.range,
                        options: g,
                        width: "6.5rem",
                        "content-width": "6.5rem",
                        "form-input": "",
                        onUpdateValue:
                          $[6] || ($[6] = (a) => (d.value.range = a)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Qu, [
                    Gu,
                    A(
                      Se,
                      {
                        value: d.value.skillUsed,
                        options: u,
                        width: "6.5rem",
                        "content-width": "6.5rem",
                        "form-input": "",
                        onUpdateValue:
                          $[7] || ($[7] = (a) => (d.value.skillUsed = a)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Xu, [
                    Wu,
                    A(
                      Se,
                      {
                        value: d.value.damageAttribute,
                        options: c,
                        width: "7.5rem",
                        "content-width": "7.5rem",
                        "form-input": "",
                        onUpdateValue:
                          $[8] || ($[8] = (a) => (d.value.damageAttribute = a)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", Ku, [
                  Ju,
                  e(
                    "button",
                    {
                      class: "button-primary",
                      onClick: $[9] || ($[9] = (a) => p()),
                    },
                    " Add New "
                  ),
                ]),
                d.value.aditionalDamage && d.value.aditionalDamage.length > 0
                  ? (t(),
                    s("div", Yu, [
                      (t(!0),
                      s(
                        j,
                        null,
                        G(
                          d.value.aditionalDamage,
                          (a) => (
                            t(),
                            s(
                              "div",
                              { key: a.id, class: "extra-damage-card" },
                              [
                                e("div", Zu, [
                                  e("div", ec, [
                                    e("div", ac, [
                                      oc,
                                      qe(
                                        e(
                                          "input",
                                          {
                                            "onUpdate:modelValue": (R) =>
                                              (a.value = R),
                                            type: "text",
                                            class: "input-primary dark",
                                          },
                                          null,
                                          8,
                                          tc
                                        ),
                                        [[Ce, a.value]]
                                      ),
                                    ]),
                                    e("div", rc, [
                                      sc,
                                      A(
                                        Se,
                                        {
                                          value: a.damageType,
                                          options: m,
                                          width: "7.5rem",
                                          "content-width": "7.5rem",
                                          "form-input": "",
                                          onUpdateValue: (R) =>
                                            (a.damageType = R),
                                        },
                                        null,
                                        8,
                                        ["value", "onUpdateValue"]
                                      ),
                                    ]),
                                  ]),
                                  e("div", nc, [
                                    e(
                                      "button",
                                      {
                                        class: "button-primary",
                                        onClick: (R) => f(a.id),
                                      },
                                      " Remove ",
                                      8,
                                      ic
                                    ),
                                  ]),
                                ]),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : C("", !0),
                e("div", dc, [
                  lc,
                  e(
                    "button",
                    {
                      class: "button-naked",
                      onClick: $[10] || ($[10] = (a) => (r.value = !0)),
                    },
                    [
                      d.value.pictureURL
                        ? (t(),
                          s("div", uc, [
                            e(
                              "img",
                              {
                                class: "picture",
                                src: d.value.pictureURL,
                                alt: "foto agente",
                              },
                              null,
                              8,
                              cc
                            ),
                          ]))
                        : (t(), s("div", mc, gc)),
                    ]
                  ),
                ]),
                vc,
                A(
                  X,
                  {
                    modelValue: d.value.description,
                    "onUpdate:modelValue":
                      $[11] || ($[11] = (a) => (d.value.description = a)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: Ae(() => [hc]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", fc, [
                e("button", { class: "button-cancel", onClick: S }, " Cancel "),
                e(
                  "button",
                  {
                    class: "button-primary big",
                    disabled: i.value,
                    onClick: P,
                  },
                  U(l.addMode ? "Add" : "Edit"),
                  9,
                  bc
                ),
              ]),
              r.value
                ? (t(),
                  s("div", qc, [
                    A(
                      ie,
                      {
                        modelValue: r.value,
                        "onUpdate:modelValue":
                          $[13] || ($[13] = (a) => (r.value = a)),
                        classes: "modal-container",
                      },
                      {
                        default: Ae(() => [
                          A(fa, {
                            "is-free-style": "",
                            onHandleCloseModal:
                              $[12] || ($[12] = (a) => (r.value = !r.value)),
                            onHandleUpdatePicture: b,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : C("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  it = V(Cc, [["__scopeId", "data-v-8f535d56"]]),
  dt = (o) => (L("data-v-6ad99d7a"), (o = o()), H(), o),
  Ac = { class: "modal-content modal-width" },
  yc = { class: "modal-header" },
  Pc = dt(() => e("h2", null, "Edit", -1)),
  Ec = dt(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Sc = [Ec],
  kc = { class: "modal-body modal-height" },
  Rc = { key: 0 },
  wc = { key: 1 },
  Ic = { key: 2 },
  Mc = { key: 3 },
  $c = { key: 0 },
  Dc = { key: 1 },
  Tc = { key: 2 },
  Vc = { key: 3 },
  zc = T({
    __name: "EditModal",
    props: {
      currentEditOption: { type: Number, required: !0 },
      editPower: { type: Object, default: Wo },
      editRitual: { type: Object, default: Ko },
      editItem: { type: Object, required: !0 },
      editAttack: { type: Object, default: $e },
    },
    emits: [
      "handleCloseModal",
      "handleEditPowerSheet",
      "handleEditRitualSheet",
      "handleEditItemSheet",
      "handleEditAttackSheet",
    ],
    setup(o, { emit: q }) {
      const l = q,
        v = { power: 0, ritual: 1, item: 2, attack: 3 },
        m = (d) => l("handleEditPowerSheet", d.power),
        g = (d) => l("handleEditRitualSheet", d.ritual),
        u = (d) => l("handleEditItemSheet", d.item),
        c = (d) => l("handleEditAttackSheet", d.attack);
      return (d, r) => (
        t(),
        s("div", Ac, [
          e("div", yc, [
            Pc,
            e(
              "button",
              { onClick: r[0] || (r[0] = (i) => d.$emit("handleCloseModal")) },
              Sc
            ),
          ]),
          e("div", kc, [
            o.currentEditOption === v.power
              ? (t(),
                s("div", Rc, [
                  A(
                    No,
                    {
                      power: o.editPower,
                      edit: "",
                      sheet: "",
                      onHandleEditPower: m,
                      onHandleClose:
                        r[1] || (r[1] = (i) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : C("", !0),
            o.currentEditOption === v.ritual
              ? (t(),
                s("div", wc, [
                  A(
                    Bo,
                    {
                      ritual: o.editRitual,
                      edit: "",
                      sheet: "",
                      onHandleEditRitual: g,
                      onHandleClose:
                        r[2] || (r[2] = (i) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : C("", !0),
            o.currentEditOption === v.attack
              ? (t(),
                s("div", Ic, [
                  A(
                    it,
                    {
                      attack: o.editAttack,
                      onHandleEditAttack: c,
                      onHandleClose:
                        r[3] || (r[3] = (i) => d.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : C("", !0),
            o.currentEditOption === v.item
              ? (t(),
                s("div", Mc, [
                  o.editItem.itemType === "weapon"
                    ? (t(),
                      s("div", $c, [
                        A(
                          Qo,
                          {
                            weapon: o.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditWeapon: u,
                            onHandleClose:
                              r[4] ||
                              (r[4] = (i) => d.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["weapon"]
                        ),
                      ]))
                    : C("", !0),
                  o.editItem.itemType === "protection"
                    ? (t(),
                      s("div", Dc, [
                        A(
                          Go,
                          {
                            protection: o.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditProtection: u,
                            onHandleClose:
                              r[5] ||
                              (r[5] = (i) => d.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["protection"]
                        ),
                      ]))
                    : C("", !0),
                  o.editItem.itemType === "misc" ||
                  o.editItem.itemType === "ammunition"
                    ? (t(),
                      s("div", Tc, [
                        A(
                          ma,
                          {
                            misc: o.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditMisc: u,
                            onHandleClose:
                              r[6] ||
                              (r[6] = (i) => d.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["misc"]
                        ),
                      ]))
                    : C("", !0),
                  o.editItem.itemType === "cursedItem"
                    ? (t(),
                      s("div", Vc, [
                        A(
                          Xo,
                          {
                            "cursed-item": o.editItem,
                            edit: "",
                            sheet: "",
                            onHandleEditCursedItem: u,
                            onHandleClose:
                              r[7] ||
                              (r[7] = (i) => d.$emit("handleCloseModal")),
                          },
                          null,
                          8,
                          ["cursed-item"]
                        ),
                      ]))
                    : C("", !0),
                ]))
              : C("", !0),
          ]),
        ])
      );
    },
  }),
  _c = V(zc, [["__scopeId", "data-v-6ad99d7a"]]),
  Xe = (o) => (L("data-v-6cd98f8c"), (o = o()), H(), o),
  Oc = { key: 0, class: "row" },
  Uc = Xe(() =>
    e("div", { class: "label" }, " Class for attribute calculation ", -1)
  ),
  Lc = { class: "row" },
  Hc = Xe(() =>
    e(
      "div",
      { class: "label" },
      [
        ne(" Private sheet "),
        e(
          "div",
          { class: "label-obs" },
          " Apenas você e o mestre da campanha poderão visualizar a ficha. A ficha ainda aparece no Escudo do Mestre para outros jogadores "
        ),
      ],
      -1
    )
  ),
  xc = { class: "row" },
  jc = Xe(() =>
    e(
      "div",
      { class: "label" },
      " Allow the campaign GM to edit my character sheet ",
      -1
    )
  ),
  Fc = { class: "row" },
  Nc = Xe(() =>
    e(
      "div",
      { class: "label" },
      [
        ne(" Allow anyone to edit my character sheet "),
        e(
          "div",
          { class: "label-obs" },
          " Warning: when this option is on anyone can edit your sheet. It is not recommended to leave this option on for a long time "
        ),
      ],
      -1
    )
  ),
  Bc = T({
    __name: "SheetConfig",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleChangeStatsClass", "handleChangeEditPermissions"],
    setup(o, { emit: q }) {
      const l = q,
        v = ["OFF", "ON"],
        m = ["Combatant", "Specialist", "Occultist"],
        g = (c) => {
          l("handleChangeStatsClass", c);
        },
        u = (c, d) => {
          l("handleChangeEditPermissions", c, d);
        };
      return (c, d) => (
        t(),
        s(
          j,
          null,
          [
            o.character.statsClass !== "Mundane"
              ? (t(),
                s("div", Oc, [
                  Uc,
                  A(
                    Se,
                    {
                      value: o.character.statsClass,
                      options: m,
                      width: "7.5rem",
                      "content-width": "7.5rem",
                      "form-input": "",
                      onUpdateValue: g,
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]))
              : C("", !0),
            e("div", Lc, [
              Hc,
              A(
                De,
                {
                  value: o.character.private,
                  options: v,
                  onHandleChange: d[0] || (d[0] = (r) => u("private", r)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", xc, [
              jc,
              A(
                De,
                {
                  value: o.character.canDMEdit,
                  options: v,
                  onHandleChange: d[1] || (d[1] = (r) => u("canDMEdit", r)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", Fc, [
              Nc,
              A(
                De,
                {
                  value: o.character.canAnyoneEdit,
                  options: v,
                  onHandleChange: d[2] || (d[2] = (r) => u("canAnyoneEdit", r)),
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
  Qc = V(Bc, [["__scopeId", "data-v-6cd98f8c"]]),
  Gc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAcklEQVR4Ae2VsRGAIBTFmMDOnXQ8Z2MDGCQ22JLjXmNBepJ7NL8ssQFuoDOhDJgwCzSELDBYXH0CNQ+4vMYBkZ9ZQOT2XgIuTwIuFySQyyXg8uCLRJ4GgMPl+YJH5FngWyLuLOD8KNDIadHBETpwlc0KLy8akHGKumHqAAAAAElFTkSuQmCC",
  re = (o) => (L("data-v-87004152"), (o = o()), H(), o),
  Xc = { class: "row" },
  Wc = ["onMouseup"],
  Kc = re(() => e("img", { src: Gc }, null, -1)),
  Jc = re(() =>
    e(
      "div",
      { class: "link-eg" },
      " For OBS a resolution of 3400x1200 is recommended. It can be adjusted as needed. ",
      -1
    )
  ),
  Yc = { class: "row" },
  Zc = re(() => e("div", { class: "label" }, " Color of dice results ", -1)),
  em = ["value"],
  am = { class: "row" },
  om = re(() =>
    e("div", { class: "label" }, " Border color of dice results ", -1)
  ),
  tm = ["value"],
  rm = { class: "row" },
  sm = re(() => e("div", { class: "label" }, " Injured agent picture ", -1)),
  nm = { key: 0 },
  im = ["src"],
  dm = { key: 1 },
  lm = re(() =>
    e(
      "img",
      { class: "profile-picture", src: Te, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  um = [lm],
  cm = { class: "row" },
  mm = re(() => e("div", { class: "label" }, " Dying agent picture ", -1)),
  pm = { key: 0 },
  gm = ["src"],
  vm = { key: 1 },
  hm = re(() =>
    e(
      "img",
      { class: "profile-picture", src: Te, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  fm = [hm],
  bm = { class: "row" },
  qm = re(() => e("div", { class: "label" }, " Disturbed agent picture ", -1)),
  Cm = { key: 0 },
  Am = ["src"],
  ym = { key: 1 },
  Pm = re(() =>
    e(
      "img",
      { class: "profile-picture", src: Te, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Em = [Pm],
  Sm = { class: "row" },
  km = re(() =>
    e("div", { class: "label" }, " Going Crazy agent picture ", -1)
  ),
  Rm = { key: 0 },
  wm = ["src"],
  Im = { key: 1 },
  Mm = re(() =>
    e(
      "img",
      { class: "profile-picture", src: Te, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  $m = [Mm],
  Dm = { key: 0 },
  Tm = T({
    __name: "StreamConfig",
    props: { character: { type: Object, required: !0 } },
    emits: [
      "handleUpdateAlternativePicture",
      "handleChangeCharResultDiceColor",
      "handleChangeCharResultDiceBorderColor",
    ],
    setup(o, { emit: q }) {
      const l = o,
        v = q,
        m = E(!1),
        g = E(),
        u = (r) => {
          (g.value = r), (m.value = !m.value);
        },
        c = (r, i) => {
          (m.value = !m.value),
            v("handleUpdateAlternativePicture", g.value, r, i);
        },
        d = () => {
          window.open(
            "https://crisordemparanormal.com/agente/stream/" + l.character.id
          );
        };
      return (r, i) => {
        const p = Ne("vue-final-modal");
        return (
          t(),
          s(
            j,
            null,
            [
              e("div", Xc, [
                e(
                  "div",
                  {
                    class: "link",
                    onClick: d,
                    onMouseup: yo(d, ["middle"]),
                    onMousedown:
                      i[0] ||
                      (i[0] = yo(() => {}, ["middle", "prevent", "stop"])),
                  },
                  [ne(" Access OBS portrait "), Kc],
                  40,
                  Wc
                ),
                Jc,
              ]),
              e("div", Yc, [
                Zc,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: o.character.resultDiceColor || "#fff",
                    onBlur:
                      i[1] ||
                      (i[1] = (f) =>
                        r.$emit("handleChangeCharResultDiceColor", f)),
                  },
                  null,
                  40,
                  em
                ),
              ]),
              e("div", am, [
                om,
                e(
                  "input",
                  {
                    type: "text",
                    class: "input-primary dark",
                    value: o.character.resultDiceBorderColor || "#A347FF",
                    onBlur:
                      i[2] ||
                      (i[2] = (f) =>
                        r.$emit("handleChangeCharResultDiceBorderColor", f)),
                  },
                  null,
                  40,
                  tm
                ),
              ]),
              e("div", rm, [
                sm,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: i[3] || (i[3] = (f) => u("hurt")),
                  },
                  [
                    o.character.sheetPictureHurtURL
                      ? (t(),
                        s("div", nm, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: o.character.sheetPictureHurtURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            im
                          ),
                        ]))
                      : (t(), s("div", dm, um)),
                  ]
                ),
              ]),
              e("div", cm, [
                mm,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: i[4] || (i[4] = (f) => u("dying")),
                  },
                  [
                    o.character.sheetPictureDyingURL
                      ? (t(),
                        s("div", pm, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: o.character.sheetPictureDyingURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            gm
                          ),
                        ]))
                      : (t(), s("div", vm, fm)),
                  ]
                ),
              ]),
              e("div", bm, [
                qm,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: i[5] || (i[5] = (f) => u("disturbed")),
                  },
                  [
                    o.character.sheetPictureDisturbedURL
                      ? (t(),
                        s("div", Cm, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: o.character.sheetPictureDisturbedURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Am
                          ),
                        ]))
                      : (t(), s("div", ym, Em)),
                  ]
                ),
              ]),
              e("div", Sm, [
                km,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: i[6] || (i[6] = (f) => u("crazy")),
                  },
                  [
                    o.character.sheetPictureCrazyURL
                      ? (t(),
                        s("div", Rm, [
                          e(
                            "img",
                            {
                              class: "profile-picture",
                              src: o.character.sheetPictureCrazyURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            wm
                          ),
                        ]))
                      : (t(), s("div", Im, $m)),
                  ]
                ),
              ]),
              m.value
                ? (t(),
                  s("div", Dm, [
                    A(
                      p,
                      {
                        modelValue: m.value,
                        "onUpdate:modelValue":
                          i[8] || (i[8] = (f) => (m.value = f)),
                        classes: "modal-container",
                      },
                      {
                        default: Ae(() => [
                          A(fa, {
                            onHandleCloseModal:
                              i[7] || (i[7] = (f) => (m.value = !m.value)),
                            onHandleUpdatePicture: c,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : C("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  Vm = V(Tm, [["__scopeId", "data-v-87004152"]]),
  lt = (o) => (L("data-v-78a9772d"), (o = o()), H(), o),
  zm = { class: "modal-content modal-width" },
  _m = { class: "modal-header" },
  Om = lt(() => e("h2", null, "Settings", -1)),
  Um = lt(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Lm = [Um],
  Hm = { class: "modal-body modal-height" },
  xm = { key: 0, class: "content-container" },
  jm = { key: 1, class: "content-container" },
  Fm = T({
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
    setup(o, { emit: q }) {
      const l = q,
        v = [
          { label: "Sheet", value: 0 },
          { label: "Stream", value: 1 },
        ],
        m = E(0),
        g = (d) => {
          l("handleChangeStatsClass", d);
        },
        u = (d, r, i) => {
          l("handleUpdateAlternativePicture", d, r, i);
        },
        c = (d, r) => {
          l("handleChangeEditPermissions", d, r);
        };
      return (d, r) => (
        t(),
        s("div", zm, [
          e("div", _m, [
            Om,
            e(
              "button",
              { onClick: r[0] || (r[0] = (i) => d.$emit("handleCloseModal")) },
              Lm
            ),
          ]),
          e("div", Hm, [
            A(
              ve,
              {
                "current-tab": m.value,
                "tab-options": v,
                onHandleNavigation: r[1] || (r[1] = (i) => (m.value = i)),
              },
              null,
              8,
              ["current-tab"]
            ),
            m.value === 0
              ? (t(),
                s("div", xm, [
                  A(
                    Qc,
                    {
                      character: o.character,
                      onHandleChangeStatsClass: g,
                      onHandleChangeEditPermissions: c,
                    },
                    null,
                    8,
                    ["character"]
                  ),
                ]))
              : C("", !0),
            m.value === 1
              ? (t(),
                s("div", jm, [
                  A(
                    Vm,
                    {
                      character: o.character,
                      onHandleUpdateAlternativePicture: u,
                      onHandleChangeCharResultDiceColor:
                        r[2] ||
                        (r[2] = (i) =>
                          d.$emit("handleChangeCharResultDiceColor", i)),
                      onHandleChangeCharResultDiceBorderColor:
                        r[3] ||
                        (r[3] = (i) =>
                          d.$emit("handleChangeCharResultDiceBorderColor", i)),
                    },
                    null,
                    8,
                    ["character"]
                  ),
                ]))
              : C("", !0),
          ]),
        ])
      );
    },
  }),
  Nm = V(Fm, [["__scopeId", "data-v-78a9772d"]]),
  ut = (o) => (L("data-v-2b669bfc"), (o = o()), H(), o),
  Bm = { class: "modal-content modal-width" },
  Qm = { class: "modal-header" },
  Gm = ut(() => e("h2", null, "Choose new class", -1)),
  Xm = ut(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Wm = [Xm],
  Km = { class: "modal-body modal-height" },
  Jm = { class: "content-container" },
  Ym = { class: "add-class-description" },
  Zm = { class: "classes-container" },
  ep = { class: "classes-flex" },
  ap = T({
    __name: "AddClassModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal", "handleAddClass"],
    setup(o, { emit: q }) {
      const l = q,
        v = (m) => l("handleAddClass", m);
      return (m, g) => (
        t(),
        s("div", Bm, [
          e("div", Qm, [
            Gm,
            e(
              "button",
              { onClick: g[0] || (g[0] = (u) => m.$emit("handleCloseModal")) },
              Wm
            ),
          ]),
          e("div", Km, [
            e("div", Jm, [
              e(
                "div",
                Ym,
                " To increase your " +
                  U(o.character.isSobrevivendoAoHorror ? "level" : "EXP") +
                  ", choose a new class ",
                1
              ),
              e("div", Zm, [
                e("div", ep, [
                  (t(!0),
                  s(
                    j,
                    null,
                    G(
                      F(Me),
                      (u) => (
                        t(),
                        s("div", { key: u.name }, [
                          A(
                            Vr,
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
  op = V(ap, [["__scopeId", "data-v-2b669bfc"]]),
  tp = (o) => (L("data-v-be964fd1"), (o = o()), H(), o),
  rp = { class: "modal-content modal-width" },
  sp = { class: "modal-header" },
  np = tp(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  ip = [np],
  dp = { class: "modal-body modal-height" },
  lp = { key: 0 },
  up = { key: 1 },
  cp = { key: 2 },
  mp = { key: 3 },
  pp = { key: 4 },
  gp = { key: 5 },
  vp = { key: 6 },
  hp = { key: 7 },
  fp = T({
    __name: "AddModal",
    props: { currentAddOption: { type: Number, required: !0 } },
    emits: [
      "handleCloseModal",
      "handleAddAttack",
      "handleAddPower",
      "handleAddRitual",
      "handleAddItem",
    ],
    setup(o, { emit: q }) {
      const l = q,
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
        m = [
          "New Attack",
          "New Ability",
          "New Ritual",
          "New Weapon",
          "New Ammo",
          "New Armor",
          "New Item",
          "New Cursed Item",
        ],
        g = (r) => l("handleAddAttack", r.attack),
        u = (r) => l("handleAddPower", r.power),
        c = (r) => l("handleAddRitual", r.ritual),
        d = (r) => l("handleAddItem", r.item);
      return (r, i) => (
        t(),
        s("div", rp, [
          e("div", sp, [
            e("h2", null, U(m[o.currentAddOption]), 1),
            e(
              "button",
              { onClick: i[0] || (i[0] = (p) => r.$emit("handleCloseModal")) },
              ip
            ),
          ]),
          e("div", dp, [
            o.currentAddOption === v.attack
              ? (t(),
                s("div", lp, [
                  A(
                    it,
                    {
                      attack: F($e),
                      "add-mode": "",
                      onHandleEditAttack: g,
                      onHandleClose:
                        i[1] || (i[1] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["attack"]
                  ),
                ]))
              : C("", !0),
            o.currentAddOption === v.power
              ? (t(),
                s("div", up, [
                  A(
                    No,
                    {
                      power: F(Wo),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditPower: u,
                      onHandleClose:
                        i[2] || (i[2] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["power"]
                  ),
                ]))
              : C("", !0),
            o.currentAddOption === v.ritual
              ? (t(),
                s("div", cp, [
                  A(
                    Bo,
                    {
                      ritual: F(Ko),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditRitual: c,
                      onHandleClose:
                        i[3] || (i[3] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["ritual"]
                  ),
                ]))
              : C("", !0),
            o.currentAddOption === v.weapon
              ? (t(),
                s("div", mp, [
                  A(
                    Qo,
                    {
                      weapon: F(jr),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditWeapon: d,
                      onHandleClose:
                        i[4] || (i[4] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["weapon"]
                  ),
                ]))
              : C("", !0),
            o.currentAddOption === v.ammunition
              ? (t(),
                s("div", pp, [
                  A(
                    ma,
                    {
                      misc: F(Fr),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: d,
                      onHandleClose:
                        i[5] || (i[5] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : C("", !0),
            o.currentAddOption === v.protection
              ? (t(),
                s("div", gp, [
                  A(
                    Go,
                    {
                      protection: F(Nr),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditProtection: d,
                      onHandleClose:
                        i[6] || (i[6] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["protection"]
                  ),
                ]))
              : C("", !0),
            o.currentAddOption === v.misc
              ? (t(),
                s("div", vp, [
                  A(
                    ma,
                    {
                      misc: F(Br),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditMisc: d,
                      onHandleClose:
                        i[7] || (i[7] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["misc"]
                  ),
                ]))
              : C("", !0),
            o.currentAddOption === v.cursedItem
              ? (t(),
                s("div", hp, [
                  A(
                    Xo,
                    {
                      "cursed-item": F(Qr),
                      edit: "",
                      sheet: "",
                      "add-mode": "",
                      onHandleEditCursedItem: d,
                      onHandleClose:
                        i[8] || (i[8] = (p) => r.$emit("handleCloseModal")),
                    },
                    null,
                    8,
                    ["cursed-item"]
                  ),
                ]))
              : C("", !0),
          ]),
        ])
      );
    },
  }),
  bp = V(fp, [["__scopeId", "data-v-be964fd1"]]),
  ya = (o) => (L("data-v-15adeee7"), (o = o()), H(), o),
  qp = { class: "modal-content modal-width" },
  Cp = { class: "modal-header" },
  Ap = ya(() => e("h2", null, "Share", -1)),
  yp = ya(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Pp = [yp],
  Ep = ya(() => e("div", { class: "label" }, " Link to share agent ", -1)),
  Sp = T({
    __name: "ShareModal",
    props: { character: { type: Object, required: !0 } },
    emits: ["handleCloseModal"],
    setup(o) {
      const l = "https://crisordemparanormal.com/agente/" + o.character.id;
      return (v, m) => (
        t(),
        s("div", qp, [
          e("div", Cp, [
            Ap,
            e(
              "button",
              { onClick: m[0] || (m[0] = (g) => v.$emit("handleCloseModal")) },
              Pp
            ),
          ]),
          e("div", { class: "modal-body modal-height" }, [
            e("div", { class: "share-container" }, [
              Ep,
              e("div", { class: "value" }, U(l)),
            ]),
          ]),
        ])
      );
    },
  }),
  kp = V(Sp, [["__scopeId", "data-v-15adeee7"]]),
  Rp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAnUlEQVQ4jd3QsQ2CYBRF4X8A2QArE0ZgDyqXYA1bJ6BmABtqtrAzFtIREkuaz8pEBZGEWOjp3ss9ybsvhD9GrNRolOJ58daddoaiRCUWq1CORfAwXbAOIQRrXL4gTJ3khY+lx4QZb30+aQaLBBu5g6Mrzg5ym/diqn5tBWrpWDzTo1PYSqysJLYKHXrZUDhhLxrsIzucRptMsVz4SW5d6iOF5C1O7AAAAABJRU5ErkJggg==",
  ct =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABm0lEQVRYw+2VsUqCYRSGj4M26eIgpoGLdQUaQeRsdA/WLDoVdAviNajw34CL5NSqv+HgKi1N1SCCNTno09DXx69WBJ5vCHy3s7yP/3fe8yqy078XEar0eeedPlUi2vYpRgQ1IqX761ftPxF6X0GF71TRA/jGskuaNF0z+XqAN2N5ICLCgZne9ABTpwByTJw9EQmaLMDJkglzzYyftG1MKTK2ZktaDBUPjSydgJlPXoQIZXoKVUGUGnNr/kyJkF4cQ5R4tuZzakQ12rFHmYgIeXuxAB2ymu04pMXSTmOK+u34pRnXhN20IyxoknDXjhNybttx6rp+FQHOn8j5kn+P6c3WMf3DoZ1rfMV6VRwzCCDvOBRtEeKSl0DZ1YnpQ2LUA3X9ypViXVvIoY0uwAMnIiKc0sDHp8mZBuSCx8BfpkdrJRQeexoxuLU3vylP57H28QLxXVVBayMnPBnLe4444t5MDb2l94xlRkSEjJkGeoCvA0yKiJDUBzSMZZs4cdr6T1RwumQRETxHMbWAvTWExqFtQM5oKlbFTur6AEfWlu1Qg1zXAAAAAElFTkSuQmCC",
  mt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABIUlEQVQ4y8XTvS6DARTG8YOEpWNJ8HbFgM0g4ipsBjfRxAV0MnakW5OquIKmw8vUiIWkl9DkrcnuY/gZ0E+kDYlnPDn/5JznPCfiH6ToU8XJgFoPqE0G3GLXPm6/b5qRajqwqOwVect4VbboQFNqZhg40tez84gIl14GqkeD7TkZKtpIrfXqG65x5wyZXB8ooWs+wrZZibqurrrEnM0ICx5Q6gOHntCyEiHx2BvjURJhRQtPDgeH2tFBNUIdDYlEA/UIVXTsjPp0jJMIGQoREQrIIpzgeNzY6YApR/pY+sbqhEsP2Lo1Yuus7QjzusO2vh/u1D2urPfqa1K0VUYONxKNFxcREc49fxONL8K3JP9j+MbivWf3x3j/7oGmfdE/1huxmbTYvNt7qgAAAABJRU5ErkJggg==",
  Ve = (o) => (L("data-v-60e2e1d5"), (o = o()), H(), o),
  wp = { class: "sheet-tools-container" },
  Ip = { key: 0 },
  Mp = { key: 0 },
  $p = { key: 0, class: "added-info" },
  Dp = { key: 1 },
  Tp = Ve(() => e("img", { src: Rp, alt: "adicionar" }, null, -1)),
  Vp = [Tp],
  zp = { key: 1, class: "sheet-tools-mobile-container" },
  _p = { key: 0, class: "sheet-tools-buttons-container" },
  Op = Ve(() => e("img", { src: ct, alt: "compartilhar" }, null, -1)),
  Up = [Op],
  Lp = Ve(() => e("img", { src: mt, alt: "configurações" }, null, -1)),
  Hp = [Lp],
  xp = { key: 1, class: "share-mobile-container" },
  jp = Ve(() => e("img", { src: ct, alt: "compartilhar" }, null, -1)),
  Fp = [jp],
  Np = Ve(() => e("img", { src: mt, alt: "configurações" }, null, -1)),
  Bp = [Np],
  Qp = T({
    __name: "SheetTools",
    props: { disabledSheet: Boolean, charAdded: Boolean },
    emits: [
      "handleShareSheet",
      "handleAddAgent",
      "handleOpenConfig",
      "handleOpenShareModal",
      "handleOpenSkinsModal",
    ],
    setup(o, { emit: q }) {
      const l = q,
        v = _o(),
        m = E(window.innerWidth),
        g = () => {
          l("handleShareSheet");
        },
        u = () => {
          l("handleAddAgent");
        };
      return (
        ue(() => {
          window.addEventListener("resize", () => {
            m.value = window.innerWidth;
          });
        }),
        (c, d) => (
          t(),
          s("div", wp, [
            o.disabledSheet
              ? (t(),
                s("div", Ip, [
                  F(v).currentUser
                    ? (t(),
                      s("div", Mp, [
                        o.charAdded
                          ? (t(),
                            s("div", $p, " Agent saved to your collection! "))
                          : (t(),
                            s("div", Dp, [
                              e(
                                "button",
                                {
                                  class: "button-naked share-button",
                                  onClick: u,
                                },
                                Vp
                              ),
                            ])),
                      ]))
                    : C("", !0),
                ]))
              : (t(),
                s("div", zp, [
                  m.value >= 1023
                    ? (t(),
                      s("div", _p, [
                        e(
                          "button",
                          {
                            class: "customize-button",
                            onClick:
                              d[0] ||
                              (d[0] = (r) => c.$emit("handleOpenSkinsModal")),
                          },
                          " Customization "
                        ),
                        e(
                          "button",
                          { class: "button-naked share-button", onClick: g },
                          Up
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              d[1] ||
                              (d[1] = (r) => c.$emit("handleOpenConfig")),
                          },
                          Hp
                        ),
                      ]))
                    : (t(),
                      s("div", xp, [
                        e(
                          "button",
                          {
                            class: "customize-button",
                            onClick:
                              d[2] ||
                              (d[2] = (r) => c.$emit("handleOpenSkinsModal")),
                          },
                          " Customization "
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              d[3] ||
                              (d[3] = (r) => c.$emit("handleOpenShareModal")),
                          },
                          Fp
                        ),
                        e(
                          "button",
                          {
                            class: "button-naked share-button",
                            onClick:
                              d[4] ||
                              (d[4] = (r) => c.$emit("handleOpenConfig")),
                          },
                          Bp
                        ),
                      ])),
                ])),
          ])
        )
      );
    },
  }),
  $o = V(Qp, [["__scopeId", "data-v-60e2e1d5"]]),
  We = (o) => (L("data-v-552e0b49"), (o = o()), H(), o),
  Gp = { class: "sheet-header-container" },
  Xp = { class: "profile-picture-container" },
  Wp = ["disabled"],
  Kp = { key: 0 },
  Jp = ["src"],
  Yp = { key: 1 },
  Zp = { class: "header-info-container" },
  eg = { class: "header-info-row" },
  ag = { class: "info-line" },
  og = We(() => e("h3", null, "CHARACTER", -1)),
  tg = ["disabled", "value"],
  rg = { class: "info-line" },
  sg = We(() => e("h3", null, "PLAYER", -1)),
  ng = ["disabled", "value"],
  ig = { class: "header-info-row" },
  dg = { class: "info-line" },
  lg = We(() => e("h3", null, "BACKGROUND", -1)),
  ug = ["disabled", "value"],
  cg = { class: "info-line" },
  mg = We(() => e("h3", null, "CLASS", -1)),
  pg = ["disabled", "value"],
  gg = T({
    __name: "SheetHeader",
    props: { character: {}, disabledSheet: { type: Boolean } },
    emits: ["handleChangeCharHeaderText", "handleOpenChangePictureModal"],
    setup(o) {
      return (q, l) => (
        t(),
        s("div", Gp, [
          e("div", Xp, [
            e(
              "button",
              {
                class: "button-naked",
                disabled: q.disabledSheet,
                onClick:
                  l[0] ||
                  (l[0] = (v) => q.$emit("handleOpenChangePictureModal")),
              },
              [
                q.character.sheetPictureURL
                  ? (t(),
                    s("div", Kp, [
                      e(
                        "img",
                        {
                          class: ae([
                            "profile-picture",
                            { "disabled-picture": q.disabledSheet },
                          ]),
                          src: q.character.sheetPictureURL,
                          alt: "foto agente",
                        },
                        null,
                        10,
                        Jp
                      ),
                    ]))
                  : (t(),
                    s("div", Yp, [
                      e(
                        "img",
                        {
                          class: ae([
                            "profile-picture",
                            { "disabled-picture": q.disabledSheet },
                          ]),
                          src: Te,
                          alt: "foto agente em branco",
                        },
                        null,
                        2
                      ),
                    ])),
              ],
              8,
              Wp
            ),
          ]),
          e("div", Zp, [
            e("div", eg, [
              e("div", ag, [
                og,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: q.disabledSheet,
                    value: q.character.name,
                    onBlur:
                      l[1] ||
                      (l[1] = (v) =>
                        q.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "name",
                        })),
                  },
                  null,
                  40,
                  tg
                ),
              ]),
              e("div", rg, [
                sg,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: q.disabledSheet,
                    value: q.character.player,
                    onBlur:
                      l[2] ||
                      (l[2] = (v) =>
                        q.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "player",
                        })),
                  },
                  null,
                  40,
                  ng
                ),
              ]),
            ]),
            e("div", ig, [
              e("div", dg, [
                lg,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: q.disabledSheet,
                    value: q.character.backgroundName,
                    onBlur:
                      l[3] ||
                      (l[3] = (v) =>
                        q.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "backgroundName",
                        })),
                  },
                  null,
                  40,
                  ug
                ),
              ]),
              e("div", cg, [
                mg,
                e(
                  "input",
                  {
                    type: "text",
                    class: "sheet-input",
                    autocomplete: "nope",
                    disabled: q.disabledSheet,
                    value: q.character.className,
                    onBlur:
                      l[4] ||
                      (l[4] = (v) =>
                        q.$emit("handleChangeCharHeaderText", {
                          e: v,
                          key: "className",
                        })),
                  },
                  null,
                  40,
                  pg
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Do = V(gg, [["__scopeId", "data-v-552e0b49"]]),
  pt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAYElEQVQ4y9WTwQmAQAwEtzvtwHIsVfDKUDM+T0FJIqfgvmfIPjbSJ6Gj4KXQV2EikrkKK7gtODBsD4W7Lu2EX1ey6wvthXSllMDAEh+fgYuf5m0AjPEHyuFSEpeS+MvZAZYijOCBAmQvAAAAAElFTkSuQmCC",
  gt = (o) => (L("data-v-92e1679a"), (o = o()), H(), o),
  vg = { class: "campaign-log-container" },
  hg = gt(() => e("img", { src: pt, alt: "log" }, null, -1)),
  fg = [hg],
  bg = gt(() => e("div", { class: "campaign-label" }, " Campaign: ", -1)),
  qg = { class: "campaign-title" },
  Cg = T({
    __name: "SheetCampaign",
    props: { campaign: {}, campaignLog: {}, disabledSheet: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(o) {
      const q = o,
        v = "https://crisordemparanormal.com/" + "campanha/" + q.campaign.id,
        m = E(window.innerWidth);
      ue(() => {
        window.addEventListener("resize", () => {
          m.value = window.innerWidth;
        });
      });
      const g = () => {
        q.disabledSheet || window.open(v, "_blank");
      };
      return (u, c) => {
        var d;
        return (
          t(),
          s("div", vg, [
            m.value >= 1023
              ? (t(),
                s(
                  "button",
                  {
                    key: 0,
                    class: "campaign-log-button",
                    onClick:
                      c[0] || (c[0] = (r) => u.$emit("handleOpenCampaignLog")),
                  },
                  fg
                ))
              : C("", !0),
            e(
              "a",
              {
                class: ae([
                  "campaign-nav-link",
                  { "campaign-nav-link-disabled": u.disabledSheet },
                ]),
                onClick: g,
              },
              [
                bg,
                e("div", qg, U((d = u.campaign) == null ? void 0 : d.name), 1),
              ],
              2
            ),
          ])
        );
      };
    },
  }),
  To = V(Cg, [["__scopeId", "data-v-92e1679a"]]),
  Ag =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAHUlEQVQ4y2NgGEbgPxTgYw92DaOhNBpKQyeUaAYAFbUe8L2r+g4AAAAASUVORK5CYII=",
  vt = (o) => (L("data-v-5b13c98a"), (o = o()), H(), o),
  yg = vt(() =>
    e("img", { class: "apps-img", src: Ag, alt: "fechar" }, null, -1)
  ),
  Pg = [yg],
  Eg = vt(() =>
    e("img", { class: "apps-img", src: oe, alt: "fechar" }, null, -1)
  ),
  Sg = [Eg],
  kg = { class: "apps-options" },
  Rg = ["onClick"],
  wg = T({
    __name: "SheetMobileNav",
    props: { vtt: { type: Boolean } },
    emits: ["handleMobileNav"],
    setup(o) {
      Re((u) => ({ "6493c1e2": m.value, df9ceb3e: g.value }));
      const q = o,
        l = E(!1),
        v = [
          "INFORMATIONS",
          "DESCRIPTION",
          "ATTRIBUTES",
          "SKILLS",
          "COMBAT",
          "INVENTORY",
          "ABILITIES",
          "RITUALS",
        ],
        m = N(() => (q.vtt ? "7rem" : "1rem")),
        g = N(() => (q.vtt ? "6rem" : "0"));
      return (u, c) => (
        t(),
        s(
          j,
          null,
          [
            l.value
              ? (t(),
                s(
                  "button",
                  {
                    key: 1,
                    class: "apps-button button-naked",
                    onClick: c[1] || (c[1] = (d) => (l.value = !l.value)),
                  },
                  Sg
                ))
              : (t(),
                s(
                  "button",
                  {
                    key: 0,
                    class: "apps-button button-naked",
                    onClick: c[0] || (c[0] = (d) => (l.value = !l.value)),
                  },
                  Pg
                )),
            l.value
              ? (t(),
                s(
                  "div",
                  {
                    key: 2,
                    class: "apps-container",
                    onClick: c[2] || (c[2] = (d) => (l.value = !l.value)),
                  },
                  [
                    e("div", kg, [
                      (t(),
                      s(
                        j,
                        null,
                        G(v, (d, r) =>
                          e("div", { key: r }, [
                            e(
                              "button",
                              {
                                class: "nav-option-button",
                                onClick: (i) => u.$emit("handleMobileNav", r),
                              },
                              U(d),
                              9,
                              Rg
                            ),
                          ])
                        ),
                        64
                      )),
                    ]),
                  ]
                ))
              : C("", !0),
          ],
          64
        )
      );
    },
  }),
  Ig = V(wg, [["__scopeId", "data-v-5b13c98a"]]),
  ht = (o) => (L("data-v-f968449f"), (o = o()), H(), o),
  Mg = ht(() => e("img", { src: pt, alt: "log" }, null, -1)),
  $g = [Mg],
  Dg = ht(() => e("img", { src: oe, alt: "close-log" }, null, -1)),
  Tg = [Dg],
  Vg = T({
    __name: "SheetLogButtonMobile",
    props: { campaignLogOpen: { type: Boolean } },
    emits: ["handleOpenCampaignLog"],
    setup(o) {
      return (q, l) =>
        q.campaignLogOpen
          ? (t(),
            s(
              "button",
              {
                key: 1,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  l[1] || (l[1] = (v) => q.$emit("handleOpenCampaignLog")),
              },
              Tg
            ))
          : (t(),
            s(
              "button",
              {
                key: 0,
                class: "campaign-log-button-mobile button-naked",
                onClick:
                  l[0] || (l[0] = (v) => q.$emit("handleOpenCampaignLog")),
              },
              $g
            ));
    },
  }),
  zg = V(Vg, [["__scopeId", "data-v-f968449f"]]),
  _g = { class: "skin-img-container" },
  Og = ["src", "alt"],
  Ug = { class: "label" },
  Lg = T({
    __name: "SkinOption",
    props: { character: {}, skinDice: {} },
    setup(o) {
      const q = o,
        l = N(() =>
          q.character.skinDice
            ? q.character.skinDice.label === q.skinDice.label
            : !1
        );
      return (v, m) => (
        t(),
        s(
          "div",
          {
            class: ae(["skin-option-container", { "skin-selected": l.value }]),
          },
          [
            e("div", _g, [
              e(
                "img",
                {
                  src: v.skinDice.img,
                  alt: v.skinDice.label,
                  class: "skin-img",
                },
                null,
                8,
                Og
              ),
            ]),
            e("div", Ug, U(v.skinDice.label), 1),
          ],
          2
        )
      );
    },
  }),
  ua = V(Lg, [["__scopeId", "data-v-694b426f"]]),
  ze = (o) => (L("data-v-8e69620b"), (o = o()), H(), o),
  Hg = { class: "modal-content modal-width" },
  xg = { class: "modal-header" },
  jg = ze(() => e("h2", null, "Dice Skins", -1)),
  Fg = ze(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  Ng = [Fg],
  Bg = { class: "modal-body modal-height" },
  Qg = { class: "skins-container" },
  Gg = ze(() => e("div", { class: "skins-title" }, " Colors ", -1)),
  Xg = { class: "skins-options" },
  Wg = { class: "skins-container" },
  Kg = ze(() => e("div", { class: "skins-title" }, " Elements ", -1)),
  Jg = { class: "skins-options" },
  Yg = { class: "skins-container" },
  Zg = ze(() => e("div", { class: "skins-title" }, " Pride ", -1)),
  ev = { class: "skins-options" },
  av = T({
    __name: "SkinsModal",
    props: { character: {} },
    emits: ["handleChangeDiceSkin", "handleCloseModal"],
    setup(o, { emit: q }) {
      const l = q,
        v = (m) => l("handleChangeDiceSkin", m);
      return (m, g) => (
        t(),
        s("div", Hg, [
          e("div", xg, [
            jg,
            e(
              "button",
              { onClick: g[0] || (g[0] = (u) => m.$emit("handleCloseModal")) },
              Ng
            ),
          ]),
          e("div", Bg, [
            e("div", Qg, [
              Gg,
              e("div", Xg, [
                (t(!0),
                s(
                  j,
                  null,
                  G(
                    F(Jo),
                    (u) => (
                      t(),
                      z(
                        ua,
                        {
                          key: u.label,
                          "skin-dice": u,
                          character: m.character,
                          onClick: (c) => v(u),
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
            e("div", Wg, [
              Kg,
              e("div", Jg, [
                (t(!0),
                s(
                  j,
                  null,
                  G(
                    F(Wr),
                    (u) => (
                      t(),
                      z(
                        ua,
                        {
                          key: u.label,
                          "skin-dice": u,
                          character: m.character,
                          onClick: (c) => v(u),
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
            e("div", Yg, [
              Zg,
              e("div", ev, [
                (t(!0),
                s(
                  j,
                  null,
                  G(
                    F(Kr),
                    (u) => (
                      t(),
                      z(
                        ua,
                        {
                          key: u.label,
                          "skin-dice": u,
                          character: m.character,
                          onClick: (c) => v(u),
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
  ov = V(av, [["__scopeId", "data-v-8e69620b"]]),
  Ke = (o) => (L("data-v-2266640b"), (o = o()), H(), o),
  tv = { class: "modal-content modal-width" },
  rv = { class: "modal-header" },
  sv = Ke(() => e("h2", null, "Optional rules - Sobrevivendo ao Horror", -1)),
  nv = Ke(() =>
    e("img", { class: "close-icon", src: oe, alt: "fechar" }, null, -1)
  ),
  iv = [nv],
  dv = { class: "modal-body modal-height" },
  lv = { class: "row" },
  uv = Ke(() =>
    e(
      "div",
      { class: "label" },
      [
        ne(" PEX & Experience "),
        e(
          "div",
          { class: "label-obs" },
          " Replaces EXP for seperate Level and EXP "
        ),
      ],
      -1
    )
  ),
  cv = { class: "row" },
  mv = Ke(() =>
    e(
      "div",
      { class: "label" },
      [
        ne(" Playing without Sanity "),
        e(
          "div",
          { class: "label-obs" },
          " Replaces the Sanity and Effort bars with the Determination bar "
        ),
      ],
      -1
    )
  ),
  pv = T({
    __name: "SobrevivendoAoHorrorModal",
    props: { character: {} },
    emits: ["handleChangeBooleanValue", "handleCloseModal"],
    setup(o) {
      const q = ["OFF", "ON"];
      return (l, v) => (
        t(),
        s("div", tv, [
          e("div", rv, [
            sv,
            e(
              "button",
              { onClick: v[0] || (v[0] = (m) => l.$emit("handleCloseModal")) },
              iv
            ),
          ]),
          e("div", dv, [
            e("div", lv, [
              uv,
              A(
                De,
                {
                  value: l.character.isNexLevelOn,
                  options: q,
                  onHandleChange:
                    v[1] ||
                    (v[1] = (m) =>
                      l.$emit("handleChangeBooleanValue", "isNexLevelOn", m)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", cv, [
              mv,
              A(
                De,
                {
                  value: l.character.isPdOn,
                  options: q,
                  onHandleChange:
                    v[2] ||
                    (v[2] = (m) =>
                      l.$emit("handleChangeBooleanValue", "isPdOn", m)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  gv = V(pv, [["__scopeId", "data-v-2266640b"]]),
  vv = { class: "autography-container" },
  hv = { key: 0, class: "autography-content" },
  fv = { key: 1, class: "autography-content" },
  bv = "Ghh98jAHMr6AK3bGXmxC",
  qv = "cEIZX1gy8MiqlOQSZQwu",
  Cv = T({
    __name: "SheetAutography",
    setup(o) {
      const l = Oo().params.id;
      return (v, m) => (
        t(),
        s("div", vv, [
          F(l) === bv
            ? (t(),
              s(
                "div",
                hv,
                " Para Vitin, obrigado por todo o carinho com o meu trabalho! <3 De Soul. "
              ))
            : C("", !0),
          F(l) === qv
            ? (t(),
              s(
                "div",
                fv,
                " Para Amy, minha Asa Esquerda que sempre me apoiou! <3 De Soul. "
              ))
            : C("", !0),
        ])
      );
    },
  }),
  Vo = V(Cv, [["__scopeId", "data-v-d8f2dc5c"]]),
  Av = (o) => (L("data-v-a8da6011"), (o = o()), H(), o),
  yv = { key: 0 },
  Pv = { key: 0, class: "private-sheet" },
  Ev = Av(() => e("h1", null, "Private sheet", -1)),
  Sv = { key: 1 },
  kv = { key: 0 },
  Rv = { class: "sheet-wrapper" },
  wv = { class: "sheet-header" },
  Iv = { class: "character-sheet" },
  Mv = { class: "sheet-stats" },
  $v = { class: "sheet-skills" },
  Dv = { class: "sheet-tab" },
  Tv = { key: 1 },
  Vv = { key: 0, class: "mobile-container" },
  zv = { key: 1, class: "mobile-container" },
  _v = { key: 2, class: "mobile-container" },
  Ov = { key: 3, class: "mobile-container" },
  Uv = { key: 4, class: "mobile-container" },
  Lv = { key: 5, class: "mobile-container" },
  Hv = { key: 6, class: "mobile-container" },
  xv = { key: 7, class: "mobile-container" },
  jv = { key: 2 },
  Fv = { key: 1 },
  Nv = T({
    __name: "CharacterSheet",
    props: { vtt: { type: Boolean }, characterId: {} },
    setup(o) {
      Re((n) => ({ a61b3618: Ot.value }));
      const { play: q } = Yr(Zr),
        l = [Ml, tu, bu, Ru, _c, fa, Nm, kp, op, bp, ov, gv],
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
          sobrevivendoAoHorror: 11,
        },
        m = { power: 0, ritual: 1, item: 2, attack: 3 },
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
        u = _o(),
        c = xt(),
        d = Wt(),
        r = Oo(),
        i = jt();
      let p = r.params.id;
      const f = E(0),
        S = E(!0),
        P = E(),
        b = E(),
        y = E(),
        $ = E(),
        X = E(),
        ie = E(),
        a = E(sr),
        R = E(0),
        k = E(!0),
        _ = E(!1),
        he = E(!1),
        w = E(!1),
        Z = E(window.innerWidth),
        se = E(0),
        Je = E(),
        Pe = E(),
        x = E({ message: "", type: "", alive: !1, timeout: 0 }),
        fe = E({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        _e = E({
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
        Q = E(0),
        we = E(0),
        Pa = E(0),
        Ea = E(),
        Oe = o;
      ue(async () => {
        var I;
        window.addEventListener("resize", () => {
          Z.value = window.innerWidth;
        }),
          Oe.vtt && Oe.characterId && (p = Oe.characterId);
        const n = await ta(le(c, "characters", p));
        n.data() || i.push({ name: "not-found" }),
          u.currentUser &&
            (R.value = await es((I = u.currentUser) == null ? void 0 : I.uid)),
          (a.value = n.data()),
          (a.value.id = n == null ? void 0 : n.id);
        let h = !1;
        if (
          (a.value.campaignDocId === void 0 &&
            ((a.value.campaignDocId = ""), (h = !0)),
          !a.value.currentItemsLimit)
        ) {
          const M = { I: 0, II: 0, III: 0, IV: 0 };
          (a.value.currentItemsLimit = M), (h = !0);
        }
        if (
          (a.value.peTurn || ((a.value.peTurn = tr[a.value.nex]), (h = !0)),
          a.value.deathMarks === void 0 &&
            ((a.value.deathMarks = [!1, !1, !1]),
            (a.value.madnessMarks = [!1, !1, !1]),
            (a.value.deathMode = !1),
            (a.value.madnessMode = !1),
            (h = !0)),
          a.value.sheetPictureURL ||
            ((a.value.sheetPictureURL = ""),
            (a.value.sheetPictureFullPath = ""),
            (h = !0)),
          a.value.campaignDocId === void 0 &&
            ((a.value.campaignDocId = ""), (h = !0)),
          a.value.statsClass ||
            (a.value.className === "Combatant" ||
            a.value.className === "Specialist" ||
            a.value.className === "Occultist"
              ? (a.value.statsClass = a.value.className)
              : (a.value.statsClass = "Combatant"),
            (h = !0)),
          a.value.description.anotation ||
            ((a.value.description.anotation = ""), (h = !0)),
          a.value.canDMEdit === void 0 && ((a.value.canDMEdit = !0), (h = !0)),
          a.value.canAnyoneEdit === void 0 &&
            ((a.value.canAnyoneEdit = !1), (h = !0)),
          a.value.private === void 0 && ((a.value.private = !1), (h = !0)),
          (a.value.block === void 0 || a.value.block === null) &&
            ((a.value.block = a.value.skills[9].bonus), (h = !0)),
          (a.value.evade === void 0 || a.value.evade === null) &&
            ((a.value.evade =
              10 +
              a.value.attributes.dex +
              a.value.protectionDefense +
              a.value.bonusDefense +
              a.value.skills[20].bonus),
            (h = !0)),
          a.value.resistencias === void 0 &&
            ((a.value.resistencias = {}), (h = !0)),
          a.value.imunidades === void 0 &&
            ((a.value.imunidades = []), (h = !0)),
          a.value.vulnerabilidades === void 0 &&
            ((a.value.vulnerabilidades = []), (h = !0)),
          a.value.skinDice === void 0 && (a.value.skinDice = Jo[0]),
          a.value.maxPd === void 0)
        ) {
          if (a.value.statsClass === "Mundane")
            (a.value.maxPd = 4 + a.value.attributes.pre),
              (a.value.currentPd = 2);
          else {
            const M = Me.find((ee) => ee.name === a.value.statsClass);
            if (!M) return;
            (a.value.maxPd = M.initialPd + a.value.attributes.pre),
              (a.value.currentPd = a.value.maxPd);
            const O = ca[a.value.nex];
            if (O >= 2) {
              const ee = (M.levelPd + a.value.attributes.pre) * (O - 1);
              (a.value.maxPd += ee), (a.value.currentPd += ee);
            }
          }
          h = !0;
        }
        if (
          (a.value.nexString === void 0 &&
            ((a.value.nexString = a.value.nex.toString()),
            a.value.statsClass === "Mundane" && (a.value.nexString = "0%"),
            (h = !0)),
          a.value.pdMode === void 0 && ((a.value.pdMode = !1), (h = !0)),
          a.value.pdMarks === void 0 &&
            ((a.value.pdMarks = [!1, !1, !1]), (h = !0)),
          a.value.isNexLevelOn === void 0 &&
            ((a.value.isNexLevelOn = !1), (a.value.isPdOn = !1), (h = !0)),
          h && (await ra(le(c, "characters", a.value.id), a.value)),
          a.value.campaignDocId)
        ) {
          const M = await ta(le(c, "campaigns", a.value.campaignDocId));
          M.data() &&
            ((P.value = M.data()),
            (P.value.id = M.id),
            (Pe.value = sa(
              le(c, "campaignLogs", P.value.campaignLogId),
              (O) => {
                O.data() &&
                  ((b.value = O.data()),
                  (b.value.id = O.id),
                  f.value < 2 && f.value++);
              }
            )));
        }
        Je.value = sa(le(c, "characters", p), (M) => {
          var O, ee, de, Ee;
          M.data() || i.push({ name: "not-found" }),
            (a.value = M.data()),
            (a.value.id = M == null ? void 0 : M.id),
            a.value.canAnyoneEdit ? (k.value = !1) : (k.value = !0),
            a.value.uid !==
              ((O = u == null ? void 0 : u.currentUser) == null
                ? void 0
                : O.uid) && (a.value.private ? (_.value = !0) : (_.value = !1)),
            a.value.campaignDocId &&
              P.value &&
              P.value.uid ===
                ((ee = u == null ? void 0 : u.currentUser) == null
                  ? void 0
                  : ee.uid) &&
              ((_.value = !1),
              a.value.canDMEdit ? (k.value = !1) : (k.value = !0)),
            a.value.uid ===
              ((de = u == null ? void 0 : u.currentUser) == null
                ? void 0
                : de.uid) && ((_.value = !1), (k.value = !1)),
            ((Ee = u == null ? void 0 : u.currentUser) != null && Ee.uid) ||
              (k.value = !0),
            f.value < 2 && f.value++;
        });
      }),
        Ft(() => {
          Je.value && Je.value(), Pe.value && Pe.value();
        }),
        be(f, () => {
          a.value &&
            S.value !== !1 &&
            (a.value.campaignDocId
              ? f.value >= 2 && (S.value = !1)
              : f.value >= 1 && (S.value = !1));
        }),
        be(
          () => a.value.campaignDocId,
          async () => {
            if (a.value && !S.value)
              if (a.value.campaignDocId === "")
                (P.value = void 0), (b.value = void 0), Pe.value && Pe.value();
              else {
                const n = await ta(le(c, "campaigns", a.value.campaignDocId));
                n.data() &&
                  ((P.value = n.data()),
                  (Pe.value = sa(
                    le(c, "campaignLogs", P.value.campaignLogId),
                    (h) => {
                      h.data() && ((b.value = h.data()), (b.value.id = h.id));
                    }
                  )));
              }
          }
        );
      const D = () => {
          k.value || ra(le(c, "characters", a.value.id), a.value);
        },
        Ue = () => {
          (x.value.alive = !1), clearTimeout(x.value.timeout);
        },
        me = () => (fe.value.alive = !1),
        pe = () => (_e.value.alive = !1),
        Ye = (n, h) => {
          me(),
            pe(),
            (n.message = `${h} added`),
            (n.type = "info"),
            (n.alive = !0);
        },
        Le = (n) => {
          me(),
            pe(),
            (n.message = "Invalid dice"),
            (n.type = "error"),
            (n.alive = !0);
        },
        Ze = (n, h, I, M, O) => {
          Ue(),
            pe(),
            (n.title = h),
            (n.total = I),
            (n.output = M),
            (n.notation = O),
            (n.skinDice = a.value.skinDice),
            Co(n, "roll"),
            Ao(n, "roll"),
            w.value || (n.alive = !0);
        },
        ft = (n, h, I, M, O, ee, de, Ee, Ut, Lt) => {
          Ue(),
            me(),
            (n.title = h),
            (n.totalAttack = I),
            (n.totalDamage = M),
            (n.critical = O),
            (n.attackTooltip = ee),
            (n.damageTooltip = de),
            (n.attackRollTooltip = Ee),
            (n.damageRollTooltip = Ut),
            (n.criticalTooltip = Lt),
            (n.skinDice = a.value.skinDice),
            Co(n, "attackRoll"),
            Ao(n, "attackRoll"),
            w.value || (n.alive = !0);
        },
        Sa = (n) => {
          const h = n.e.target.value;
          (a.value[n.key] = h.trim()), D();
        },
        ka = (n) => {
          const h = n.e.target.value;
          (a.value[n.key] = h.trim()), D();
        },
        Ra = (n) => {
          const h = n.e.target.valueAsNumber;
          So(a.value, h, n.key), D();
        },
        wa = (n, h) => {
          So(a.value, n, h), D();
        },
        Ia = (n) => {
          const h = n.e.target.valueAsNumber;
          nr(a.value, h, n.key), D();
        },
        Ma = (n) => {
          const h = a.value.nex;
          (a.value[n.key] = n.value), ir(a.value, h), D();
        },
        $a = (n) => {
          const h = n.target.valueAsNumber;
          dr(a.value, h), D();
        },
        Da = (n) => {
          try {
            const h = lr[n],
              I = ur(a.value, n),
              M = ia(I.output),
              O = da(I.output);
            Ze(fe.value, h, I.total, M, O), q();
          } catch {
            Le(x.value);
          }
        },
        Ta = (n, h) => {
          n === "pv" && (a.value.deathMarks[h] = !a.value.deathMarks[h]),
            n === "san" && (a.value.madnessMarks[h] = !a.value.madnessMarks[h]),
            n === "pd" && (a.value.pdMarks[h] = !a.value.pdMarks[h]),
            D();
        },
        Va = (n) => {
          n === "pv" && (a.value.deathMode = !0),
            n === "san" && (a.value.madnessMode = !0),
            n === "pd" && (a.value.pdMode = !0),
            D();
        },
        za = (n) => {
          n === "pv" &&
            ((a.value.deathMarks = [!1, !1, !1]),
            (a.value.deathMode = !1),
            a.value.currentPv === 0 && (a.value.currentPv = 1)),
            n === "san" &&
              ((a.value.madnessMarks = [!1, !1, !1]),
              (a.value.madnessMode = !1),
              a.value.currentSan === 0 && (a.value.currentSan = 1)),
            n === "pd" &&
              ((a.value.pdMarks = [!1, !1, !1]),
              (a.value.pdMode = !1),
              a.value.currentPd === 0 && (a.value.currentPd = 1)),
            D();
        },
        _a = () => {
          (Q.value = v.addClass), (B.value = !0);
        },
        Oa = (n) => {
          (Ea.value = n), (Q.value = v.skill), (B.value = !0);
        },
        Ua = () => {
          (Q.value = v.config), (B.value = !0);
        },
        bt = () => {
          (Q.value = v.share), (B.value = !0);
        },
        La = (n) => {
          const h = a.value.skills.findIndex((I) => I.name === n.skillName);
          (a.value.skills[h][n.key] = n.value), ko(a.value, n.skillName), D();
        },
        Ha = (n) => {
          cr(a.value, n.value, n.skillName), ko(a.value, n.skillName), D();
        },
        xa = (n) => {
          try {
            const h = n.name,
              I = mr(a.value, n),
              M = ia(I.output),
              O = da(I.output);
            Ze(fe.value, h, I.total, M, O), q();
          } catch {
            Le(x.value);
          }
        },
        ja = () => {
          (Q.value = v.abilities), (B.value = !0);
        },
        Fa = () => {
          (Q.value = v.skins), (B.value = !0);
        },
        Na = () => {
          (Q.value = v.sobrevivendoAoHorror), (B.value = !0);
        },
        Ba = () => {
          (Q.value = v.rituals), (B.value = !0);
        },
        Qa = () => {
          (Q.value = v.inventory), (B.value = !0);
        },
        Ga = () => {
          (Q.value = v.picture), (B.value = !0);
        },
        qt = (n) => {
          (n.id = Fe()), a.value.attacks.push(n), D(), te();
        },
        Xa = (n) => {
          pr(a.value, n), D();
        },
        ea = (n) => {
          gr(a.value, n), D();
        },
        Wa = (n) => {
          const h = a.value.rituals.findIndex((I) => I.id === n);
          a.value.rituals.splice(h, 1), D();
        },
        Ka = (n) => {
          vr(a.value, n), D();
        },
        Ja = (n) => {
          hr(a.value, n), D();
        },
        Ya = (n) => {
          (a.value.description[n.key] = n.value), D();
        },
        Za = (n) => {
          (a.value[n.key] = n.value), D();
        },
        eo = (n) => {
          fr(a.value, n.value, n.key), D();
        },
        ao = (n) => {
          br(a.value, n.value, n.key), D();
        },
        aa = (n = "1d20", h = "Resultado", I = !1) => {
          try {
            const M = h,
              O = qr(n || "1d20"),
              ee = ia(O.output),
              de = da(O.output);
            (fe.value.defaultColor = I), Ze(fe.value, M, O.total, ee, de), q();
          } catch {
            Le(x.value);
          }
        },
        oo = (n) => {
          try {
            const h = Cr(a.value, n);
            ft(
              _e.value,
              n.name,
              h.attackTotal,
              h.damageTotal,
              h.critical,
              h.attackInfo,
              h.damageInfo,
              h.attackRollInfo,
              h.damageRollInfo,
              h.criticalInfo
            ),
              q();
          } catch {
            Le(x.value);
          }
        },
        to = (n, h) => {
          h && aa(h, n, !0);
        },
        ro = (n) => {
          const h = n.target.valueAsNumber;
          Ar(a.value, h), D();
        },
        Ct = (n) => {
          Er(a.value, n),
            Ye(x.value, n.name),
            D(),
            Q.value === v.addModal && te();
        },
        At = (n) => {
          Sr(a.value, n),
            Ye(x.value, n.name),
            D(),
            Q.value === v.addModal && te();
        },
        yt = (n) => {
          kr(a.value, n),
            Ye(x.value, n.name),
            D(),
            Q.value === v.addModal && te();
        },
        Pt = (n, h) => {
          (a.value.sheetPictureURL = n),
            (a.value.sheetPictureFullPath = h),
            D(),
            te();
        },
        Et = (n, h, I) => {
          n === "hurt" &&
            ((a.value.sheetPictureHurtURL = h),
            (a.value.sheetPictureHurtFullPathL = I),
            D()),
            n === "dying" &&
              ((a.value.sheetPictureDyingURL = h),
              (a.value.sheetPictureDyingFullPathL = I),
              D()),
            n === "disturbed" &&
              ((a.value.sheetPictureDisturbedURL = h),
              (a.value.sheetPictureDisturbedFullPathL = I),
              D()),
            n === "crazy" &&
              ((a.value.sheetPictureCrazyURL = h),
              (a.value.sheetPictureCrazyFullPathL = I),
              D());
        },
        St = (n) => {
          const h = n.target.value;
          (a.value.resultDiceColor = h), D();
        },
        kt = (n) => {
          const h = n.target.value;
          (a.value.resultDiceBorderColor = h), D();
        },
        Rt = (n, h) => {
          (a.value[n] = h), D();
        },
        wt = (n) => {
          (a.value.skinDice = n), D();
        },
        It = (n) => {
          (a.value.statsClass = n), D();
        },
        ge = (n) => {
          (Q.value = v.addModal), (Pa.value = n), (B.value = !0);
        },
        so = () => ge(g.attack),
        no = () => ge(g.power),
        io = () => ge(g.ritual),
        lo = () => ge(g.weapon),
        uo = () => ge(g.ammunition),
        co = () => ge(g.protection),
        mo = () => ge(g.misc),
        po = () => ge(g.cursedItem),
        go = (n) => {
          (Q.value = v.edit),
            (we.value = m.attack),
            (B.value = !0),
            (y.value = n);
        },
        vo = (n) => {
          (Q.value = v.edit),
            (we.value = m.power),
            (B.value = !0),
            ($.value = n);
        },
        ho = (n) => {
          (Q.value = v.edit),
            (we.value = m.ritual),
            (B.value = !0),
            (X.value = n);
        },
        fo = (n) => {
          (Q.value = v.edit),
            (we.value = m.item),
            (B.value = !0),
            (ie.value = n);
        },
        Mt = (n) => {
          const h = a.value.attacks.findIndex((I) => I.id === n.id);
          (a.value.attacks[h] = n), D(), te();
        },
        $t = (n) => {
          const h = a.value.powers.findIndex((I) => I.id === n.id);
          if (
            a.value.powers[h].hasAutomation &&
            a.value.powers[h].isAutomationOn !== n.isAutomationOn
          ) {
            const M = Jr.find((O) => O.id === n.automationId);
            if (n.isAutomationOn) {
              if (!(M != null && M.onAdd)) return;
              M.onAdd(a.value);
            } else {
              if (!(M != null && M.onRemove)) return;
              M.onRemove(a.value);
            }
          }
          (a.value.powers[h] = n), D(), te();
        },
        Dt = (n) => {
          const h = a.value.rituals.findIndex((I) => I.id === n.id);
          (a.value.rituals[h] = n), D(), te();
        },
        Tt = (n) => {
          Rr(a.value, n), D(), te();
        },
        Vt = (n) => {
          wr(a.value, n),
            a.value.mundanoRemoveSkill && ea(a.value.mundanoRemoveSkill),
            D(),
            te();
        },
        te = () => (B.value = !1),
        bo = async () => {
          await navigator.clipboard.writeText(
            "https://crisordemparanormal.com/agente/" + a.value.id
          ),
            me(),
            pe(),
            (x.value.message = "Link copied"),
            (x.value.type = "info"),
            (x.value.alive = !0);
        },
        qo = async () => {
          var h, I;
          if (!((h = u.currentUser) != null && h.email) || he.value) return;
          if (R.value < 3) {
            const M = Po(c, "characters"),
              O = Nt(
                M,
                Bt("uid", "==", (I = u.currentUser) == null ? void 0 : I.uid)
              );
            if ((await Qt(O)).size >= as) {
              me(),
                pe(),
                (x.value.message = "Agent limit reached!"),
                (x.value.type = "error"),
                (x.value.alive = !0);
              return;
            }
          }
          he.value = !0;
          const n = je.cloneDeep(a.value);
          if (
            ((n.uid = u.currentUser.uid),
            (n.timestamp = Gt()),
            (n.campaignDocId = ""),
            (n.id = ""),
            a.value.sheetPictureURL !== "")
          ) {
            const M = Eo(d, `images/${Fe()}`),
              O = Eo(d, a.value.sheetPictureFullPath),
              ee = await Kt(O);
            Jt(M, ee).then(async (de) => {
              const Ee = await Yt(de.ref);
              (n.sheetPictureURL = Ee),
                (n.sheetPictureFullPath = de.metadata.fullPath);
            });
          }
          await Xt(Po(c, "characters"), n),
            me(),
            pe(),
            (x.value.message = "Agent added!"),
            (x.value.type = "info"),
            (x.value.alive = !0);
        },
        Co = (n, h) => {
          const I = [];
          if (h === "roll") {
            const M = n.total;
            I.push(M);
          }
          if (h === "attackRoll") {
            const M = n.totalAttack,
              O = n.totalDamage;
            I.push(M), I.push(O);
          }
          (a.value.lastDiceResult = I), (a.value.didDiceRoll = Fe()), D();
        },
        Ao = (n, h) => {
          if (!P.value || !b.value) return;
          const I = {
            sender: a.value.name,
            timestamp: new Date().getTime(),
            content: n,
            contentType: h,
          };
          b.value.campaignLogMessages.push(I),
            b.value.campaignLogMessages.length > 200 &&
              b.value.campaignLogMessages.shift(),
            ra(le(c, "campaignLogs", b.value.id), b.value);
        },
        oa = () => {
          Ue(), me(), pe(), (w.value = !w.value);
        },
        zt = (n, h) => {
          (a.value[n] = h), D();
        };
      be(
        () => a.value.skills[9].bonus,
        (n, h) => {
          if (a.value.block === null) return;
          const I = Math.abs(n - h);
          n > h ? (a.value.block += I) : (a.value.block -= I),
            a.value.block < 0 && (a.value.block = 0),
            a.value.block > 999 && (a.value.block = 999),
            D();
        }
      );
      const _t = N(() => {
        const n =
          10 +
          a.value.attributes.dex +
          a.value.protectionDefense +
          a.value.bonusDefense;
        return n > 0 ? n : 0;
      });
      be(
        () => a.value.skills[20].bonus,
        (n, h) => {
          if (a.value.evade === null) return;
          const I = Math.abs(n - h);
          n > h ? (a.value.evade += I) : (a.value.evade -= I),
            a.value.evade < 0 && (a.value.evade = 0),
            a.value.evade > 999 && (a.value.evade = 999),
            D();
        }
      ),
        be(_t, (n, h) => {
          if (a.value.evade === null) return;
          const I = Math.abs(n - h);
          n > h ? (a.value.evade += I) : (a.value.evade -= I),
            a.value.evade < 0 && (a.value.evade = 0),
            a.value.evade > 999 && (a.value.evade = 999),
            D();
        }),
        be(
          () => x.value.alive,
          () => {
            x.value.alive === !0 &&
              (x.value.timeout = window.setTimeout(
                () => (x.value.alive = !1),
                3e3
              ));
          }
        ),
        be(k, () => {
          te();
        });
      const Ot = N(() => (Oe.vtt ? "102px" : "0"));
      return (n, h) => {
        const I = Ne("vue-final-modal");
        return (
          t(),
          s("div", null, [
            S.value
              ? (t(), s("div", Fv, [A(Xr, { "page-loading": "" })]))
              : (t(),
                s("div", yv, [
                  _.value
                    ? (t(),
                      s("div", Pv, [
                        Ev,
                        e(
                          "button",
                          {
                            class: "button-primary",
                            onClick:
                              h[0] || (h[0] = (M) => n.$router.push("/")),
                          },
                          " Return "
                        ),
                      ]))
                    : (t(),
                      s("div", Sv, [
                        Z.value >= 1023
                          ? (t(),
                            s("div", kv, [
                              e("div", Rv, [
                                A(Vo),
                                e("div", wv, [
                                  A(
                                    Do,
                                    {
                                      character: a.value,
                                      "disabled-sheet": k.value,
                                      onHandleChangeCharHeaderText: Sa,
                                      onHandleOpenChangePictureModal: Ga,
                                    },
                                    null,
                                    8,
                                    ["character", "disabled-sheet"]
                                  ),
                                  P.value
                                    ? (t(),
                                      z(
                                        To,
                                        {
                                          key: 0,
                                          "disabled-sheet": k.value,
                                          campaign: P.value,
                                          "campaign-log": b.value,
                                          onHandleOpenCampaignLog: oa,
                                        },
                                        null,
                                        8,
                                        [
                                          "disabled-sheet",
                                          "campaign",
                                          "campaign-log",
                                        ]
                                      ))
                                    : C("", !0),
                                  A(
                                    $o,
                                    {
                                      character: a.value,
                                      "disabled-sheet": k.value,
                                      "char-added": he.value,
                                      onHandleShareSheet: bo,
                                      onHandleAddAgent: qo,
                                      onHandleOpenConfig: Ua,
                                      onHandleOpenSkinsModal: Fa,
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
                                e("div", Iv, [
                                  e("div", Mv, [
                                    A(
                                      wo,
                                      {
                                        character: a.value,
                                        "disabled-sheet": k.value,
                                        onHandleChangeSobrevivendoAoHorror: Na,
                                        onHandleChangeCharText: ka,
                                        onHandleChangeCharNumber: Ra,
                                        onHandleChangeCharNumberButton: wa,
                                        onHandleChangeAttribute: Ia,
                                        onHandleChangeCharDropdown: Ma,
                                        onHandleChangeMovementInSquares: $a,
                                        onHandleRollAttribute: Da,
                                        onHandleChangeCharMark: Ta,
                                        onHandleChangeMarkModeToTrue: Va,
                                        onHandleMarkHeal: za,
                                        onHandleOpenModalAddClass: _a,
                                      },
                                      null,
                                      8,
                                      ["character", "disabled-sheet"]
                                    ),
                                  ]),
                                  e("div", $v, [
                                    A(
                                      Io,
                                      {
                                        character: a.value,
                                        "disabled-sheet": k.value,
                                        onHandleOpenSkillModal: Oa,
                                        onHandleChangeSkillDropdown: La,
                                        onHandleChangeSkillOtherBonus: Ha,
                                        onHandleRollSkill: xa,
                                      },
                                      null,
                                      8,
                                      ["character", "disabled-sheet"]
                                    ),
                                  ]),
                                  e("div", Dv, [
                                    A(
                                      Jd,
                                      {
                                        character: a.value,
                                        "disabled-sheet": k.value,
                                        onHandleOpenAbilitiesModal: ja,
                                        onHandleOpenRitualsModal: Ba,
                                        onHandleOpenItemsModal: Qa,
                                        onHandleOpenAddAttack: so,
                                        onHandleOpenAddPower: no,
                                        onHandleOpenAddRitual: io,
                                        onHandleOpenAddWeapon: lo,
                                        onHandleOpenAddAmmunition: uo,
                                        onHandleOpenAddProtection: co,
                                        onHandleOpenAddMisc: mo,
                                        onHandleOpenAddCursedItem: po,
                                        onHandleRemoveAttack: Xa,
                                        onHandleEditAttack: go,
                                        onHandleRemovePower: ea,
                                        onHandleEditPower: vo,
                                        onHandleEditRitual: ho,
                                        onHandleEditItem: fo,
                                        onHandleRemoveRitual: Wa,
                                        onHandleRemoveItem: Ka,
                                        onHandleEquipItem: Ja,
                                        onHandleChangeDescription: Ya,
                                        onHandleChangeInventoryDropdown: Za,
                                        onHandleChangeInventoryNumber: eo,
                                        onHandleChangeItemsLimit: ao,
                                        onHandleRollDices: aa,
                                        onHandleRollAttack: oo,
                                        onHandleChangeRitualDc: ro,
                                        onHandleRollRitual: to,
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
                            s("div", Tv, [
                              e("div", null, [
                                A(
                                  Ig,
                                  {
                                    vtt: n.vtt,
                                    onHandleMobileNav:
                                      h[1] || (h[1] = (M) => (se.value = M)),
                                  },
                                  null,
                                  8,
                                  ["vtt"]
                                ),
                                se.value === 0
                                  ? (t(),
                                    s("div", Vv, [
                                      A(Vo),
                                      A(
                                        $o,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          "char-added": he.value,
                                          onHandleShareSheet: bo,
                                          onHandleAddAgent: qo,
                                          onHandleOpenConfig: Ua,
                                          onHandleOpenShareModal: bt,
                                          onHandleOpenSkinsModal: Fa,
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
                                        Do,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          onHandleChangeCharHeaderText: Sa,
                                          onHandleOpenChangePictureModal: Ga,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                      P.value
                                        ? (t(),
                                          z(
                                            To,
                                            {
                                              key: 0,
                                              "disabled-sheet": k.value,
                                              campaign: P.value,
                                              "campaign-log": b.value,
                                              onHandleOpenCampaignLog: oa,
                                            },
                                            null,
                                            8,
                                            [
                                              "disabled-sheet",
                                              "campaign",
                                              "campaign-log",
                                            ]
                                          ))
                                        : C("", !0),
                                    ]))
                                  : C("", !0),
                                se.value === 1
                                  ? (t(),
                                    s("div", zv, [
                                      A(
                                        tt,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          onHandleChangeDescription: Ya,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]))
                                  : C("", !0),
                                se.value === 2
                                  ? (t(),
                                    s("div", _v, [
                                      A(
                                        wo,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          onHandleChangeSobrevivendoAoHorror:
                                            Na,
                                          onHandleChangeCharText: ka,
                                          onHandleChangeCharNumber: Ra,
                                          onHandleChangeCharNumberButton: wa,
                                          onHandleChangeAttribute: Ia,
                                          onHandleChangeCharDropdown: Ma,
                                          onHandleChangeMovementInSquares: $a,
                                          onHandleRollAttribute: Da,
                                          onHandleChangeCharMark: Ta,
                                          onHandleChangeMarkModeToTrue: Va,
                                          onHandleMarkHeal: za,
                                          onHandleOpenModalAddClass: _a,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]))
                                  : C("", !0),
                                se.value === 3
                                  ? (t(),
                                    s("div", Ov, [
                                      A(
                                        Io,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          onHandleOpenSkillModal: Oa,
                                          onHandleChangeSkillDropdown: La,
                                          onHandleChangeSkillOtherBonus: Ha,
                                          onHandleRollSkill: xa,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]))
                                  : C("", !0),
                                se.value === 4
                                  ? (t(),
                                    s("div", Uv, [
                                      A(
                                        Yo,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          onHandleOpenAddAttack: so,
                                          onHandleEditAttack: go,
                                          onHandleRemoveAttack: Xa,
                                          onHandleRollAttack: oo,
                                          onHandleRollDices: aa,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]))
                                  : C("", !0),
                                se.value === 5
                                  ? (t(),
                                    s("div", Lv, [
                                      A(
                                        ot,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          onHandleChangeInventoryDropdown: Za,
                                          onHandleChangeInventoryNumber: eo,
                                          onHandleChangeItemsLimit: ao,
                                          onHandleEditItem: fo,
                                          onHandleEquipItem: Ja,
                                          onHandleOpenItemsModal: Qa,
                                          onHandleRemoveItem: Ka,
                                          onHandleOpenAddWeapon: lo,
                                          onHandleOpenAddAmmunition: uo,
                                          onHandleOpenAddProtection: co,
                                          onHandleOpenAddMisc: mo,
                                          onHandleOpenAddCursedItem: po,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]))
                                  : C("", !0),
                                se.value === 6
                                  ? (t(),
                                    s("div", Hv, [
                                      se.value === 6
                                        ? (t(),
                                          z(
                                            et,
                                            {
                                              key: 0,
                                              character: a.value,
                                              "disabled-sheet": k.value,
                                              onHandleEditPower: vo,
                                              onHandleOpenAddPower: no,
                                              onHandleOpenAbilitiesModal: ja,
                                              onHandleRemovePower: ea,
                                            },
                                            null,
                                            8,
                                            ["character", "disabled-sheet"]
                                          ))
                                        : C("", !0),
                                    ]))
                                  : C("", !0),
                                se.value === 7
                                  ? (t(),
                                    s("div", xv, [
                                      A(
                                        at,
                                        {
                                          character: a.value,
                                          "disabled-sheet": k.value,
                                          onHandleChangeRitualDc: ro,
                                          onHandleEditRitual: ho,
                                          onHandleOpenRitualsModal: Ba,
                                          onHandleOpenAddRitual: io,
                                          onHandleRemoveRitual: Wa,
                                          onHandleRollRitual: to,
                                        },
                                        null,
                                        8,
                                        ["character", "disabled-sheet"]
                                      ),
                                    ]))
                                  : C("", !0),
                                P.value && !n.vtt
                                  ? (t(),
                                    z(
                                      zg,
                                      {
                                        key: 8,
                                        "campaign-log-open": w.value,
                                        onHandleOpenCampaignLog: oa,
                                      },
                                      null,
                                      8,
                                      ["campaign-log-open"]
                                    ))
                                  : C("", !0),
                              ]),
                            ])),
                        B.value
                          ? (t(),
                            s("div", jv, [
                              A(
                                I,
                                {
                                  modelValue: B.value,
                                  "onUpdate:modelValue":
                                    h[2] || (h[2] = (M) => (B.value = M)),
                                  classes: "modal-container",
                                },
                                {
                                  default: Ae(() => [
                                    (t(),
                                    z(
                                      ga(l[Q.value]),
                                      {
                                        "current-edit-option": we.value,
                                        "current-add-option": Pa.value,
                                        character: a.value,
                                        skill: Ea.value,
                                        "edit-power": $.value,
                                        "edit-ritual": X.value,
                                        "edit-item": ie.value,
                                        "edit-attack": y.value,
                                        onHandleEditAttackSheet: Mt,
                                        onHandleEditPowerSheet: $t,
                                        onHandleEditRitualSheet: Dt,
                                        onHandleEditItemSheet: Tt,
                                        onHandleAddAttack: qt,
                                        onHandleAddPower: Ct,
                                        onHandleAddRitual: At,
                                        onHandleAddItem: yt,
                                        onHandleCloseModal: te,
                                        onHandleUpdatePicture: Pt,
                                        onHandleChangeStatsClass: It,
                                        onHandleUpdateAlternativePicture: Et,
                                        onHandleChangeCharResultDiceColor: St,
                                        onHandleChangeCharResultDiceBorderColor:
                                          kt,
                                        onHandleChangeEditPermissions: Rt,
                                        onHandleAddClass: Vt,
                                        onHandleChangeDiceSkin: wt,
                                        onHandleChangeBooleanValue: zt,
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
                          : C("", !0),
                        A(
                          na,
                          { name: "toast" },
                          {
                            default: Ae(() => [
                              x.value.alive
                                ? (t(),
                                  z(
                                    Zt,
                                    { key: 0, toast: x.value, onDismiss: Ue },
                                    null,
                                    8,
                                    ["toast"]
                                  ))
                                : C("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        A(
                          na,
                          { name: "toast" },
                          {
                            default: Ae(() => [
                              fe.value.alive
                                ? (t(),
                                  z(
                                    yr,
                                    { key: 0, toast: fe.value, onDismiss: me },
                                    null,
                                    8,
                                    ["toast"]
                                  ))
                                : C("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        A(
                          na,
                          { name: "toast" },
                          {
                            default: Ae(() => [
                              _e.value.alive
                                ? (t(),
                                  z(
                                    Pr,
                                    { key: 0, toast: _e.value, onDismiss: pe },
                                    null,
                                    8,
                                    ["toast"]
                                  ))
                                : C("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        w.value
                          ? (t(),
                            z(
                              rr,
                              {
                                key: 3,
                                "campaign-log": b.value,
                                onHandleCloseCampaignLog:
                                  h[3] || (h[3] = () => (w.value = !1)),
                              },
                              null,
                              8,
                              ["campaign-log"]
                            ))
                          : C("", !0),
                      ])),
                ])),
          ])
        );
      };
    },
  }),
  kh = V(Nv, [["__scopeId", "data-v-a8da6011"]]);
export { kh as default };

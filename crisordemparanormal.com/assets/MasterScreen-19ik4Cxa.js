import {
  d as V,
  f as Y,
  o as t,
  c as o,
  a as e,
  m as C,
  t as A,
  H as Ta,
  L as he,
  k as T,
  v as M,
  p as K,
  b as j,
  _ as U,
  M as be,
  n as W,
  q as x,
  N as G,
  P as B,
  r as H,
  C as Fe,
  D as qe,
  E as Ge,
  J as Me,
  g as Ke,
  a1 as le,
  h as je,
  e as Fa,
  R as qa,
  F as Ga,
  B as Ka,
  l as ot,
  i as ja,
  x as oe,
  K as st,
  u as rt,
  S as lt,
  A as it,
  Z as Ve,
  $ as ct,
  w as Ae,
  a2 as z,
  T as Ue,
} from "./index-4XNPBkfT.js";
import { L as ut } from "./LoadingView-F-Df8Cc9.js";
import {
  I as te,
  n as dt,
  A as vt,
  F as Qa,
  a as mt,
  c as Pa,
  u as ht,
  C as wa,
  d as pt,
  r as bt,
  T as ft,
  b as _t,
  e as gt,
  f as Ct,
  g as $t,
  D as me,
} from "./ToastAttack-akyQOuGO.js";
import { T as De } from "./TabNav-J49e2lVX.js";
import { S as pe } from "./SwitchButtonBool-1o2dWmEl.js";
import { _ as He } from "./d20-icon-vaz1En3o.js";
import { C as kt } from "./CombatCard-QmwknYws.js";
import { _ as St } from "./exit-icon-7lL51GVi.js";
import { C as Rt, A as yt } from "./ActionModal-6xxUHEKk.js";
import { R as It } from "./RitualCard-RSc7FtyV.js";
import {
  A as At,
  K as Dt,
  E as Mt,
  D as Ht,
  B as Tt,
  F as Pt,
  R as wt,
  T as Nt,
  c as Et,
} from "./creatures-7BKS8eWn.js";
import { c as Ot } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { m as Bt } from "./marcasFragmentadas-KD4kpdFJ.js";
import { C as Vt } from "./CreatureCard-7zsaomxO.js";
import { S as Ut } from "./SearchInput-meU_8poS.js";
import { S as Lt } from "./SourcesNavigation-XWNobkYr.js";
import { T as Ft } from "./ToastNotification-iln-U-Jv.js";
import { C as qt } from "./CreatureForm-mGjsbpuI.js";
import { s as Na } from "./characterAutomations-VjVSWhq1.js";
import { v as Le } from "./v4-cyCr5FZV.js";
import "./edit-icon-3vZQUsyW.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./attributes-pd1IMHTT.js";
import "./show-more-icon-VvUXKiHG.js";
import "./creatureData-ozdxpDUT.js";
import "./CardSource-GPmQUP_4.js";
import "./default-FmxCqAN8.js";
import "./forms-8DDAOOVU.js";
import "./lodash-gzw5KmHd.js";
import "./DropdownSimple-F1EiZrON.js";
import "./add-icon-fJ4uQHUZ.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./blank-profile-picture-wMh28flS.js";
import "./PictureModal-90Aqw16Z.js";
import "./index.esm2017-V_2u4nEA.js";
const ee = (v) => (K("data-v-df2547a9"), (v = v()), j(), v),
  Gt = { class: "char-status-card-container" },
  Kt = { class: "header" },
  jt = { key: 0 },
  Qt = ["src"],
  zt = { key: 0, class: "agent-name" },
  Wt = { key: 1, class: "agent-name" },
  Xt = { class: "basic-info" },
  Jt = { class: "basic-info" },
  Zt = { key: 2, class: "basic-combat-info" },
  Yt = { key: 0 },
  xt = { key: 1 },
  en = { key: 3, class: "basic-combat-info" },
  an = { key: 0 },
  tn = { key: 1 },
  nn = { class: "attributes-container" },
  on = { class: "combat-info" },
  sn = ee(() => e("div", null, "AGI", -1)),
  rn = { class: "combat-info-value" },
  ln = { class: "combat-info" },
  cn = ee(() => e("div", null, "STR", -1)),
  un = { class: "combat-info-value" },
  dn = { class: "combat-info" },
  vn = ee(() => e("div", null, "INT", -1)),
  mn = { class: "combat-info-value" },
  hn = { class: "combat-info" },
  pn = ee(() => e("div", null, "PRE", -1)),
  bn = { class: "combat-info-value" },
  fn = { class: "combat-info" },
  _n = ee(() => e("div", null, "VIG", -1)),
  gn = { class: "combat-info-value" },
  Cn = { class: "bars-container" },
  $n = { class: "combat-info-container-first" },
  kn = { class: "combat-info-row" },
  Sn = ee(() => e("div", null, "EP/TURN: ", -1)),
  Rn = { class: "combat-info-value" },
  yn = { class: "combat-info-row" },
  In = ee(() => e("div", null, "SPD: ", -1)),
  An = { class: "combat-info-value" },
  Dn = { class: "combat-info-container" },
  Mn = { class: "combat-info" },
  Hn = ee(() => e("div", null, "DEFESE", -1)),
  Tn = { class: "combat-info-value" },
  Pn = { class: "combat-info" },
  wn = ee(() => e("div", null, "BLOCK DR", -1)),
  Nn = { class: "combat-info-value" },
  En = { class: "combat-info" },
  On = ee(() => e("div", null, "DODGE", -1)),
  Bn = { class: "combat-info-value" },
  Vn = V({
    __name: "CharStatusCard",
    props: { character: {} },
    setup(v) {
      const R = v,
        $ = "https://crisordemparanormal.com/" + "agente/" + R.character.id,
        h = Y(() =>
          R.character.movement === 0 ? 0 : R.character.movement / 1.5
        ),
        f = Y(() => {
          const u =
            10 +
            R.character.attributes.dex +
            R.character.protectionDefense +
            R.character.bonusDefense;
          return u > 0 ? u : 0;
        }),
        l = Y(() => R.character.skills[9].bonus),
        d = Y(() => R.character.skills[20].bonus + f.value);
      return (u, I) => (
        t(),
        o("div", Gt, [
          e("div", Kt, [
            u.character.sheetPictureURL
              ? (t(),
                o("div", jt, [
                  e(
                    "img",
                    {
                      class: "card-img",
                      src: u.character.sheetPictureURL,
                      alt: "foto agente",
                    },
                    null,
                    8,
                    Qt
                  ),
                ]))
              : C("", !0),
            e("div", null, [
              u.character.name !== ""
                ? (t(), o("div", zt, A(u.character.name), 1))
                : (t(), o("div", Wt, " [Sem nome] ")),
              e("div", Xt, A(u.character.className), 1),
              e("div", Jt, A(u.character.backgroundName), 1),
              u.character.isNexLevelOn
                ? (t(),
                  o("div", en, [
                    Ta(" NÍVEL: "),
                    u.character.statsClass !== "Mundane"
                      ? (t(), o("span", an, A(he(dt)[u.character.nex]), 1))
                      : (t(), o("span", tn, "0")),
                  ]))
                : (t(),
                  o("div", Zt, [
                    Ta(" NEX: "),
                    u.character.statsClass !== "Mundane"
                      ? (t(), o("span", Yt, A(u.character.nex), 1))
                      : (t(), o("span", xt, "0%")),
                  ])),
            ]),
          ]),
          e("div", nn, [
            e("div", on, [sn, e("div", rn, A(u.character.attributes.dex), 1)]),
            e("div", ln, [cn, e("div", un, A(u.character.attributes.str), 1)]),
            e("div", dn, [vn, e("div", mn, A(u.character.attributes.int), 1)]),
            e("div", hn, [pn, e("div", bn, A(u.character.attributes.pre), 1)]),
            e("div", fn, [_n, e("div", gn, A(u.character.attributes.con), 1)]),
          ]),
          e("div", Cn, [
            T(
              te,
              {
                type: "pv",
                "disabled-sheet": "",
                "master-screen": "",
                "max-value": u.character.maxPv,
                "current-value": u.character.currentPv,
                marks: u.character.deathMarks,
                "mark-mode": u.character.deathMode,
              },
              null,
              8,
              ["max-value", "current-value", "marks", "mark-mode"]
            ),
            u.character.isPdOn
              ? C("", !0)
              : (t(),
                M(
                  te,
                  {
                    key: 0,
                    type: "san",
                    "disabled-sheet": "",
                    "master-screen": "",
                    "max-value": u.character.maxSan,
                    "current-value": u.character.currentSan,
                    marks: u.character.madnessMarks,
                    "mark-mode": u.character.madnessMode,
                  },
                  null,
                  8,
                  ["max-value", "current-value", "marks", "mark-mode"]
                )),
            u.character.isPdOn
              ? C("", !0)
              : (t(),
                M(
                  te,
                  {
                    key: 1,
                    type: "pe",
                    "disabled-sheet": "",
                    "master-screen": "",
                    "max-value": u.character.maxPe,
                    "current-value": u.character.currentPe,
                  },
                  null,
                  8,
                  ["max-value", "current-value"]
                )),
            u.character.isPdOn
              ? (t(),
                M(
                  te,
                  {
                    key: 2,
                    type: "pd",
                    "disabled-sheet": "",
                    "master-screen": "",
                    "max-value": u.character.maxPd,
                    "current-value": u.character.currentPd,
                    marks: u.character.pdMarks,
                    "mark-mode": u.character.pdMode,
                  },
                  null,
                  8,
                  ["max-value", "current-value", "marks", "mark-mode"]
                ))
              : C("", !0),
          ]),
          e("div", $n, [
            e("div", kn, [Sn, e("span", Rn, A(u.character.peTurn), 1)]),
            e("div", yn, [
              In,
              e(
                "span",
                An,
                A(u.character.movement) + "m / " + A(h.value) + "sq ",
                1
              ),
            ]),
          ]),
          e("div", Dn, [
            e("div", Mn, [Hn, e("div", Tn, A(f.value), 1)]),
            e("div", Pn, [
              wn,
              e("div", Nn, A(u.character.block || l.value), 1),
            ]),
            e("div", En, [
              On,
              e("div", Bn, A(u.character.evade || d.value), 1),
            ]),
          ]),
          e("div", { class: "footer" }, [
            e(
              "a",
              { class: "sheet-link", href: $, target: "_blank" },
              " Sheet "
            ),
          ]),
        ])
      );
    },
  }),
  Un = U(Vn, [["__scopeId", "data-v-df2547a9"]]),
  Qe = (v) => (K("data-v-f22e148b"), (v = v()), j(), v),
  Ln = { key: 0, class: "master-screen-chars-button-container" },
  Fn = { class: "row" },
  qn = Qe(() =>
    e("div", { class: "label" }, " Hide agents for players ", -1)
  ),
  Gn = { key: 1 },
  Kn = { key: 0, class: "master-screen-chars-container" },
  jn = { key: 1, class: "no-chars-message" },
  Qn = Qe(() => e("h3", null, "There are no agents on this campaign", -1)),
  zn = [Qn],
  Wn = { key: 2, class: "no-chars-message" },
  Xn = Qe(() => e("h3", null, "Agents hidden by the GM", -1)),
  Jn = [Xn],
  Zn = V({
    __name: "MasterScreenChars",
    props: { characters: {}, campaign: {}, isDm: { type: Boolean } },
    setup(v) {
      const R = v,
        i = ["OFF", "ON"],
        $ = be(),
        h = (f) => {
          G(B($, "campaigns", R.campaign.id), { agentsPrivate: f });
        };
      return (f, l) => (
        t(),
        o(
          W,
          null,
          [
            f.isDm
              ? (t(),
                o("div", Ln, [
                  e("div", Fn, [
                    qn,
                    T(
                      pe,
                      {
                        value: f.campaign.agentsPrivate || !1,
                        options: i,
                        onHandleChange: h,
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]))
              : C("", !0),
            !f.campaign.agentsPrivate || f.isDm
              ? (t(),
                o("div", Gn, [
                  f.characters.length > 0
                    ? (t(),
                      o("div", Kn, [
                        (t(!0),
                        o(
                          W,
                          null,
                          x(
                            f.characters,
                            (d) => (
                              t(),
                              o("div", { key: d.id }, [
                                T(Un, { character: d }, null, 8, ["character"]),
                              ])
                            )
                          ),
                          128
                        )),
                      ]))
                    : (t(), o("div", jn, zn)),
                ]))
              : (t(), o("div", Wn, Jn)),
          ],
          64
        )
      );
    },
  }),
  Ea = U(Zn, [["__scopeId", "data-v-f22e148b"]]),
  ze = (v) => (K("data-v-91a251a9"), (v = v()), j(), v),
  Yn = { class: "add-dices-button-container" },
  xn = { class: "input-container" },
  eo = { class: "roll-dices-container" },
  ao = ["onKeyup"],
  to = ze(() =>
    e("img", { class: "dice-icon", src: He, alt: "rolar" }, null, -1)
  ),
  no = [to],
  oo = { class: "master-macro-container" },
  so = { class: "master-macro" },
  ro = { class: "master-macro-inputs-container" },
  lo = ["value", "onBlur"],
  io = ["value", "onBlur"],
  co = { class: "master-macro-card-buttons-container" },
  uo = ["onClick"],
  vo = ze(() =>
    e("img", { class: "close-icon", src: Me, alt: "fechar" }, null, -1)
  ),
  mo = [vo],
  ho = ["onClick"],
  po = ze(() =>
    e("img", { class: "dice-icon", src: He, alt: "rolar" }, null, -1)
  ),
  bo = [po],
  fo = V({
    __name: "MasterDices",
    props: { dmPrivateDice: { type: Boolean }, campaign: {} },
    emits: [
      "handleRollMasterDices",
      "handleChangeDmPrivateDice",
      "handleAddDiceMacro",
      "handleRemoveDiceMacro",
      "handleChangeDiceMacro",
      "handleRollDiceMacro",
    ],
    setup(v, { emit: R }) {
      const i = R,
        $ = H(""),
        h = () => {
          i("handleRollMasterDices", $.value), ($.value = "");
        },
        f = ["PUBLIC", "PRIVATE"];
      return (l, d) => (
        t(),
        o(
          W,
          null,
          [
            e("div", Yn, [
              e(
                "button",
                {
                  class: "button-primary",
                  onClick:
                    d[0] || (d[0] = (u) => l.$emit("handleAddDiceMacro")),
                },
                " Add Dice "
              ),
            ]),
            e("div", xn, [
              e("div", eo, [
                Fe(
                  e(
                    "input",
                    {
                      "onUpdate:modelValue":
                        d[1] || (d[1] = (u) => ($.value = u)),
                      type: "text",
                      class: "roll-dice-input",
                      placeholder: "Roll dice",
                      onKeyup: Ge(h, ["enter"]),
                    },
                    null,
                    40,
                    ao
                  ),
                  [[qe, $.value]]
                ),
                e("button", { class: "dice-button", onClick: h }, no),
              ]),
              T(
                pe,
                {
                  value: l.dmPrivateDice,
                  options: f,
                  onHandleChange:
                    d[2] ||
                    (d[2] = (u) => l.$emit("handleChangeDmPrivateDice", u)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", oo, [
              (t(!0),
              o(
                W,
                null,
                x(
                  l.campaign.masterMacros,
                  (u, I) => (
                    t(),
                    o("div", { key: I, class: "master-macro-card" }, [
                      e("div", so, [
                        e("div", ro, [
                          e(
                            "input",
                            {
                              value: u.title,
                              type: "text",
                              class: "master-macro-input-title",
                              placeholder: "Nome",
                              onBlur: (s) =>
                                l.$emit("handleChangeDiceMacro", s, "title", I),
                            },
                            null,
                            40,
                            lo
                          ),
                          e(
                            "input",
                            {
                              value: u.value,
                              type: "text",
                              class: "master-macro-input",
                              placeholder: "Valor",
                              onBlur: (s) =>
                                l.$emit("handleChangeDiceMacro", s, "value", I),
                            },
                            null,
                            40,
                            io
                          ),
                        ]),
                        e("div", co, [
                          e(
                            "button",
                            {
                              class: "close-button",
                              onClick: (s) =>
                                l.$emit("handleRemoveDiceMacro", I),
                            },
                            mo,
                            8,
                            uo
                          ),
                          e(
                            "button",
                            {
                              class: "dice-button",
                              onClick: (s) => l.$emit("handleRollDiceMacro", I),
                            },
                            bo,
                            8,
                            ho
                          ),
                        ]),
                      ]),
                    ])
                  )
                ),
                128
              )),
            ]),
          ],
          64
        )
      );
    },
  }),
  Oa = U(fo, [["__scopeId", "data-v-91a251a9"]]),
  za = (v) => (K("data-v-56becebc"), (v = v()), j(), v),
  _o = { class: "initiative-order-container" },
  go = { class: "initiative-header" },
  Co = { class: "haeder-info" },
  $o = za(() => e("div", { class: "header-title" }, " Iniciativa ", -1)),
  ko = { class: "header-value" },
  So = { key: 0, class: "header-buttons" },
  Ro = ["disabled"],
  yo = { class: "initiative-card-container" },
  Io = ["onClick"],
  Ao = { key: 0, class: "profile-picture-container" },
  Do = ["src"],
  Mo = { key: 1, class: "profile-picture-placeholder" },
  Ho = { class: "card-info-container" },
  To = { class: "card-name" },
  Po = { class: "card-info-row" },
  wo = { key: 0, class: "card-life" },
  No = { key: 0 },
  Eo = { key: 1 },
  Oo = { key: 1, class: "card-life" },
  Bo = { key: 0 },
  Vo = { key: 1 },
  Uo = { key: 2, class: "card-pd" },
  Lo = { key: 0 },
  Fo = { key: 1 },
  qo = { key: 3, class: "card-sanity" },
  Go = { key: 0 },
  Ko = { key: 1 },
  jo = { key: 4, class: "card-effort" },
  Qo = { key: 0 },
  zo = { key: 1 },
  Wo = { class: "actions-container" },
  Xo = { class: "exit-button-container" },
  Jo = ["onClick"],
  Zo = za(() =>
    e("img", { class: "exit-icon", src: St, alt: "sair" }, null, -1)
  ),
  Yo = [Zo],
  xo = { class: "initiative-container" },
  es = ["value", "disabled", "onBlur"],
  as = V({
    __name: "InitiativeOrder",
    props: {
      currentCombat: {},
      characters: {},
      isDm: { type: Boolean },
      campaign: {},
    },
    emits: [
      "handleSelectSheet",
      "handleChangeInitiative",
      "handleRemoveFromCombat",
      "handleNextTurn",
      "handleBackTurn",
    ],
    setup(v, { emit: R }) {
      const i = v,
        $ = R,
        h = Ke(),
        f = Y(() => {
          const s = i.characters.concat(i.currentCombat.creatures);
          return (
            s.sort(
              (c, _) => (
                c.initiativeValue || (c.initiativeValue = 0),
                _.initiativeValue || (_.initiativeValue = 0),
                _.initiativeValue - c.initiativeValue
              )
            ),
            s
          );
        }),
        l = (s, c) => {
          const _ = s.target.valueAsNumber;
          $("handleChangeInitiative", _, c);
        },
        d = (s) => {
          if (i.isDm) {
            $("handleSelectSheet", s);
            return;
          }
          h.currentUser &&
            h.currentUser.uid ===
              i.characters[i.characters.findIndex((c) => c.id === s)].uid &&
            $("handleSelectSheet", s);
        },
        u = (s, c) => {
          s.vd &&
            i.currentCombat.currentTurn !== void 0 &&
            (c < i.currentCombat.currentTurn &&
              $("handleBackTurn", f.value.length),
            $("handleRemoveFromCombat", s.id));
        },
        I = (s) => {
          var c;
          return !(
            ((c = h.currentUser) == null ? void 0 : c.uid) === s.uid || i.isDm
          );
        };
      return (s, c) => (
        t(),
        o("div", _o, [
          e("div", go, [
            e("div", Co, [
              $o,
              e(
                "div",
                ko,
                " Rodada Atual: " + A(s.currentCombat.currentRound),
                1
              ),
            ]),
            s.isDm
              ? (t(),
                o("div", So, [
                  e(
                    "button",
                    {
                      class: "button-secondary header-button",
                      disabled:
                        s.currentCombat.currentRound === 0 &&
                        s.currentCombat.currentTurn === 0,
                      onClick:
                        c[0] ||
                        (c[0] = (_) =>
                          s.$emit("handleBackTurn", f.value.length)),
                    },
                    " Voltar Turno ",
                    8,
                    Ro
                  ),
                  e(
                    "button",
                    {
                      class: "button-primary header-button",
                      onClick:
                        c[1] ||
                        (c[1] = (_) =>
                          s.$emit("handleNextTurn", f.value.length)),
                    },
                    " Próximo turno "
                  ),
                ]))
              : C("", !0),
          ]),
          e("div", yo, [
            (t(!0),
            o(
              W,
              null,
              x(f.value, (_, m) => {
                var y, k, N, b;
                return (
                  t(),
                  o("div", { key: _.id }, [
                    e(
                      "div",
                      {
                        class: le([
                          "order-card",
                          { "current-turn": s.currentCombat.currentTurn === m },
                        ]),
                        onClick: (a) => d(_.id || ""),
                      },
                      [
                        _.sheetPictureURL
                          ? (t(),
                            o("div", Ao, [
                              e(
                                "img",
                                {
                                  class: "profile-picture",
                                  src: _.sheetPictureURL,
                                  alt: "foto agente",
                                },
                                null,
                                8,
                                Do
                              ),
                            ]))
                          : (t(), o("div", Mo)),
                        e("div", Ho, [
                          e("div", To, A(_.name), 1),
                          e("div", Po, [
                            _.pvMax
                              ? (t(),
                                o("div", wo, [
                                  s.campaign.combatPrivateCreatureValues &&
                                  !s.isDm
                                    ? (t(), o("div", No, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        Eo,
                                        A(_.pvCurrent) + " / " + A(_.pvMax),
                                        1
                                      )),
                                ]))
                              : C("", !0),
                            _.maxPv
                              ? (t(),
                                o("div", Oo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((y = he(h).currentUser) == null
                                      ? void 0
                                      : y.uid)
                                    ? (t(), o("div", Bo, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        Vo,
                                        A(_.currentPv) + " / " + A(_.maxPv),
                                        1
                                      )),
                                ]))
                              : C("", !0),
                            _.maxPd && _.isPdOn
                              ? (t(),
                                o("div", Uo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((k = he(h).currentUser) == null
                                      ? void 0
                                      : k.uid)
                                    ? (t(), o("div", Lo, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        Fo,
                                        A(_.currentPd) + " / " + A(_.maxPd),
                                        1
                                      )),
                                ]))
                              : C("", !0),
                            _.maxSan && !_.isPdOn
                              ? (t(),
                                o("div", qo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((N = he(h).currentUser) == null
                                      ? void 0
                                      : N.uid)
                                    ? (t(), o("div", Go, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        Ko,
                                        A(_.currentSan) + " / " + A(_.maxSan),
                                        1
                                      )),
                                ]))
                              : C("", !0),
                            _.maxPe && !_.isPdOn
                              ? (t(),
                                o("div", jo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((b = he(h).currentUser) == null
                                      ? void 0
                                      : b.uid)
                                    ? (t(), o("div", Qo, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        zo,
                                        A(_.currentPe) + " / " + A(_.maxPe),
                                        1
                                      )),
                                ]))
                              : C("", !0),
                          ]),
                        ]),
                        e("div", Wo, [
                          e("div", Xo, [
                            _.vd && s.isDm
                              ? (t(),
                                o(
                                  "button",
                                  {
                                    key: 0,
                                    class: "button-naked exit-button",
                                    onClick: (a) => u(_, m),
                                  },
                                  Yo,
                                  8,
                                  Jo
                                ))
                              : C("", !0),
                          ]),
                          e("div", xo, [
                            e(
                              "input",
                              {
                                value: _.initiativeValue,
                                type: "number",
                                class: "sheet-input initiative-input",
                                disabled: I(_),
                                onBlur: (a) => l(a, _.id || ""),
                              },
                              null,
                              40,
                              es
                            ),
                          ]),
                        ]),
                      ],
                      10,
                      Io
                    ),
                  ])
                );
              }),
              128
            )),
          ]),
        ])
      );
    },
  }),
  ts = U(as, [["__scopeId", "data-v-56becebc"]]),
  ns = { class: "character-header-container" },
  os = { key: 0 },
  ss = ["src"],
  rs = { class: "info-container" },
  ls = { class: "info-row header-row" },
  is = { class: "data-container" },
  cs = { class: "info-column" },
  us = ["title"],
  ds = { class: "info-row" },
  vs = { class: "info-text" },
  ms = V({
    __name: "CharacterCombatSheetHeader",
    props: { character: {} },
    setup(v) {
      return (R, i) => (
        t(),
        o("div", ns, [
          e("div", null, [
            R.character.sheetPictureURL
              ? (t(),
                o("div", os, [
                  e(
                    "img",
                    {
                      class: "character-picture",
                      src: R.character.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    ss
                  ),
                ]))
              : C("", !0),
          ]),
          e("div", rs, [
            e("div", ls, [
              e("div", is, [
                e("div", cs, [
                  e(
                    "div",
                    { class: "character-name", title: R.character.name },
                    A(R.character.name),
                    9,
                    us
                  ),
                  e("div", ds, [
                    e(
                      "div",
                      vs,
                      A(R.character.className) +
                        " - EXP: " +
                        A(R.character.nex),
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  hs = U(ms, [["__scopeId", "data-v-56c4788c"]]),
  Te = (v) => (K("data-v-33fe2145"), (v = v()), j(), v),
  ps = { class: "stats-row" },
  bs = { class: "stats-container" },
  fs = Te(() => e("div", { class: "stats-label" }, " DEFENSE ", -1)),
  _s = { class: "stats-value" },
  gs = { class: "stats-container" },
  Cs = Te(() => e("div", { class: "stats-label" }, " BLOCK DR ", -1)),
  $s = { class: "stats-value" },
  ks = { class: "stats-row" },
  Ss = { class: "stats-container" },
  Rs = Te(() => e("div", { class: "stats-label" }, " DODGE ", -1)),
  ys = { class: "stats-value" },
  Is = { class: "stats-container" },
  As = Te(() => e("div", { class: "stats-label" }, " SPEED ", -1)),
  Ds = { class: "stats-value" },
  Ms = V({
    __name: "CharacterCombatSheetStats",
    props: { character: {} },
    emits: ["handleRollAttribute"],
    setup(v) {
      const R = v,
        i = Y(() => {
          const h =
            10 +
            R.character.attributes.dex +
            R.character.protectionDefense +
            R.character.bonusDefense;
          return h > 0 ? h : 0;
        }),
        $ = Y(() =>
          R.character.movement === 0 ? 0 : R.character.movement / 1.5
        );
      return (h, f) => (
        t(),
        o(
          W,
          null,
          [
            T(
              vt,
              {
                character: h.character,
                "disabled-sheet": !1,
                "combat-sheet": "",
                onHandleRollAttribute:
                  f[0] || (f[0] = (l) => h.$emit("handleRollAttribute", l)),
              },
              null,
              8,
              ["character"]
            ),
            e("div", ps, [
              e("div", bs, [fs, e("div", _s, A(i.value), 1)]),
              e("div", gs, [Cs, e("div", $s, A(h.character.block), 1)]),
            ]),
            e("div", ks, [
              e("div", Ss, [Rs, e("div", ys, A(h.character.evade), 1)]),
              e("div", Is, [
                As,
                e(
                  "div",
                  Ds,
                  A(h.character.movement) + "m /" + A($.value) + "sq ",
                  1
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  }),
  Hs = U(Ms, [["__scopeId", "data-v-33fe2145"]]),
  We = (v) => (K("data-v-2dfa24dc"), (v = v()), j(), v),
  Ts = { class: "character-combat-container" },
  Ps = { key: 0 },
  ws = { class: "roll-dices-container" },
  Ns = ["onKeyup"],
  Es = We(() =>
    e("img", { class: "dice-icon", src: He, alt: "rolar" }, null, -1)
  ),
  Os = [Es],
  Bs = { key: 1 },
  Vs = { key: 0 },
  Us = { key: 1, class: "no-content" },
  Ls = We(() => e("h3", null, "No attack found", -1)),
  Fs = [Ls],
  qs = { key: 2, class: "no-content" },
  Gs = We(() => e("h3", null, "You have no attacks", -1)),
  Ks = [Gs],
  js = V({
    __name: "CharacterCombatSheetCombat",
    props: { character: {} },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(v, { emit: R }) {
      const i = v,
        $ = R,
        h = H(""),
        f = H(""),
        l = () => {
          $("handleRollDices", h.value, "Result", i.character.skinDice),
            (h.value = "");
        },
        d = (I) => {
          $("handleRollAttack", I);
        },
        u = Y(() =>
          [...i.character.attacks].filter((s) => je(s.name, f.value))
        );
      return (I, s) => (
        t(),
        o("div", Ts, [
          I.character.attacks.length > 0
            ? (t(),
              o("div", Ps, [
                T(
                  Qa,
                  {
                    value: f.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: s[0] || (s[0] = (c) => (f.value = c)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          e("div", ws, [
            Fe(
              e(
                "input",
                {
                  "onUpdate:modelValue": s[1] || (s[1] = (c) => (h.value = c)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: !1,
                  onKeyup: Ge(l, ["enter"]),
                },
                null,
                40,
                Ns
              ),
              [[qe, h.value]]
            ),
            e(
              "button",
              {
                class: le(["dice-button", { disabled: !1 }]),
                disabled: !1,
                onClick: l,
              },
              Os
            ),
          ]),
          I.character.attacks.length > 0
            ? (t(),
              o("div", Bs, [
                u.value.length > 0
                  ? (t(),
                    o("div", Vs, [
                      (t(!0),
                      o(
                        W,
                        null,
                        x(
                          u.value,
                          (c) => (
                            t(),
                            o("div", { key: c.id, class: "align-card" }, [
                              T(
                                mt,
                                {
                                  id: c.id,
                                  attack: c,
                                  "disabled-edit": "",
                                  onHandleRemoveAttack:
                                    s[2] ||
                                    (s[2] = (_) =>
                                      I.$emit("handleRemoveAttack", _)),
                                  onHandleEdit: (_) =>
                                    I.$emit("handleEditAttack", _),
                                  onHandleRollAttack: d,
                                },
                                null,
                                8,
                                ["id", "attack", "onHandleEdit"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : (t(), o("div", Us, Fs)),
              ]))
            : (t(), o("div", qs, Ks)),
        ])
      );
    },
  }),
  Qs = U(js, [["__scopeId", "data-v-2dfa24dc"]]),
  Xe = (v) => (K("data-v-163db047"), (v = v()), j(), v),
  zs = { class: "character-combat-container" },
  Ws = { key: 0 },
  Xs = { class: "roll-dices-container" },
  Js = ["onKeyup"],
  Zs = Xe(() =>
    e("img", { class: "dice-icon", src: He, alt: "rolar" }, null, -1)
  ),
  Ys = [Zs],
  xs = { key: 1 },
  er = { key: 0 },
  ar = { key: 1, class: "no-content" },
  tr = Xe(() => e("h3", null, "No ritual found", -1)),
  nr = [tr],
  or = { key: 2, class: "no-content" },
  sr = Xe(() => e("h3", null, "You have yet to add a ritual", -1)),
  rr = [sr],
  lr = V({
    __name: "CharacterCombatSheetRituals",
    props: { character: {} },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(v, { emit: R }) {
      const i = v,
        $ = R,
        h = H(""),
        f = H(""),
        l = () => {
          $("handleRollDices", h.value, "Result", i.character.skinDice),
            (h.value = "");
        },
        d = (I, s) => {
          $("handleRollDices", s, I, i.character.skinDice), (h.value = "");
        },
        u = Y(() =>
          [...i.character.rituals].filter((s) => je(s.name, f.value))
        );
      return (I, s) => (
        t(),
        o("div", zs, [
          I.character.rituals.length > 0
            ? (t(),
              o("div", Ws, [
                T(
                  Qa,
                  {
                    value: f.value,
                    width: "100%",
                    placeholder: "Filter rituals",
                    onUpdate: s[0] || (s[0] = (c) => (f.value = c)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : C("", !0),
          e("div", Xs, [
            Fe(
              e(
                "input",
                {
                  "onUpdate:modelValue": s[1] || (s[1] = (c) => (h.value = c)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: !1,
                  onKeyup: Ge(l, ["enter"]),
                },
                null,
                40,
                Js
              ),
              [[qe, h.value]]
            ),
            e(
              "button",
              {
                class: le(["dice-button", { disabled: !1 }]),
                disabled: !1,
                onClick: l,
              },
              Ys
            ),
          ]),
          I.character.rituals.length > 0
            ? (t(),
              o("div", xs, [
                u.value.length > 0
                  ? (t(),
                    o("div", er, [
                      (t(!0),
                      o(
                        W,
                        null,
                        x(
                          u.value,
                          (c) => (
                            t(),
                            o("div", { key: c.id, class: "align-card" }, [
                              T(
                                It,
                                {
                                  id: c.id,
                                  ritual: c,
                                  "disabled-edit": "",
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRollRitual:
                                    s[2] || (s[2] = (_, m) => d(_, m)),
                                },
                                null,
                                8,
                                ["id", "ritual"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : (t(), o("div", ar, nr)),
              ]))
            : (t(), o("div", or, rr)),
        ])
      );
    },
  }),
  ir = U(lr, [["__scopeId", "data-v-163db047"]]),
  cr = { class: "character-sheet-container" },
  ur = { class: "character-sheet-padding" },
  dr = { class: "info-bar-wrapper" },
  vr = { class: "tab-nav-container" },
  mr = { class: "character-sheet-content-container" },
  hr = V({
    __name: "CharacterCombatSheet",
    props: { character: {} },
    emits: ["handleRollAttribute", "handleRollDices", "handleRollAttack"],
    setup(v, { emit: R }) {
      const i = v,
        $ = R,
        h = [
          { label: "ATTRIBUTES", value: 0 },
          { label: "ENCOUNTER", value: 1 },
          { label: "RITUALS", value: 2 },
        ],
        f = {
          str: "Strength",
          dex: "Agility",
          int: "Intellect",
          pre: "Presence",
          con: "Vigor",
        },
        l = be(),
        d = H(1),
        u = (b) => (d.value = b),
        I = (b) => {
          $(
            "handleRollAttribute",
            i.character.attributes[b],
            f[b],
            i.character.name,
            i.character.skinDice
          );
        },
        s = (b, a, F) => {
          $("handleRollDices", b, a, i.character.name, F);
        },
        c = (b) => {
          $("handleRollAttack", i.character, b);
        },
        _ = (b, a) => {
          const F = b.target.valueAsNumber;
          Pa(i.character, F, a),
            G(B(l, "characters", i.character.id), i.character);
        },
        m = (b, a) => {
          Pa(i.character, b, a),
            G(B(l, "characters", i.character.id), i.character);
        },
        y = (b, a) => {
          b === "pv" &&
            (i.character.deathMarks[a] = !i.character.deathMarks[a]),
            b === "san" &&
              (i.character.madnessMarks[a] = !i.character.madnessMarks[a]),
            b === "pd" && (i.character.pdMarks[a] = !i.character.pdMarks[a]),
            G(B(l, "characters", i.character.id), i.character);
        },
        k = (b) => {
          b === "pv" && (i.character.deathMode = !0),
            b === "san" && (i.character.madnessMode = !0),
            b === "pd" && (i.character.pdMode = !0),
            G(B(l, "characters", i.character.id), i.character);
        },
        N = (b) => {
          b === "pv" &&
            ((i.character.deathMarks = [!1, !1, !1]),
            (i.character.deathMode = !1),
            i.character.currentPv === 0 && (i.character.currentPv = 1)),
            b === "san" &&
              ((i.character.madnessMarks = [!1, !1, !1]),
              (i.character.madnessMode = !1),
              i.character.currentSan === 0 && (i.character.currentSan = 1)),
            b === "pd" &&
              ((i.character.pdMarks = [!1, !1, !1]),
              (i.character.pdMode = !1),
              i.character.currentPd === 0 && (i.character.currentPd = 1)),
            G(B(l, "characters", i.character.id), i.character);
        };
      return (b, a) => (
        t(),
        o("div", cr, [
          T(hs, { character: b.character }, null, 8, ["character"]),
          e("div", ur, [
            e("div", dr, [
              T(
                te,
                {
                  type: "pv",
                  "max-value": b.character.maxPv,
                  "current-value": b.character.currentPv,
                  marks: b.character.deathMarks,
                  "mark-mode": b.character.deathMode,
                  "combat-sheet": "",
                  onHandleChangeCharNumber: _,
                  onHandleChangeCharNumberButton: m,
                  onHandleChangeCharMark: y,
                  onHandleChangeMarkModeToTrue: k,
                  onHandleMarkHeal: N,
                },
                null,
                8,
                ["max-value", "current-value", "marks", "mark-mode"]
              ),
              b.character.isPdOn
                ? C("", !0)
                : (t(),
                  M(
                    te,
                    {
                      key: 0,
                      type: "san",
                      character: b.character,
                      "max-value": b.character.maxSan,
                      "current-value": b.character.currentSan,
                      marks: b.character.madnessMarks,
                      "mark-mode": b.character.madnessMode,
                      "combat-sheet": "",
                      onHandleChangeCharNumber: _,
                      onHandleChangeCharNumberButton: m,
                      onHandleChangeCharMark: y,
                      onHandleChangeMarkModeToTrue: k,
                      onHandleMarkHeal: N,
                    },
                    null,
                    8,
                    [
                      "character",
                      "max-value",
                      "current-value",
                      "marks",
                      "mark-mode",
                    ]
                  )),
              b.character.isPdOn
                ? C("", !0)
                : (t(),
                  M(
                    te,
                    {
                      key: 1,
                      type: "pe",
                      character: b.character,
                      "max-value": b.character.maxPe,
                      "current-value": b.character.currentPe,
                      "combat-sheet": "",
                      onHandleChangeCharNumber: _,
                      onHandleChangeCharNumberButton: m,
                      onHandleChangeCharMark: y,
                      onHandleChangeMarkModeToTrue: k,
                      onHandleMarkHeal: N,
                    },
                    null,
                    8,
                    ["character", "max-value", "current-value"]
                  )),
              b.character.isPdOn
                ? (t(),
                  M(
                    te,
                    {
                      key: 2,
                      type: "pd",
                      character: b.character,
                      "max-value": b.character.maxPe,
                      "current-value": b.character.currentPe,
                      "combat-sheet": "",
                      onHandleChangeCharNumber: _,
                      onHandleChangeCharNumberButton: m,
                      onHandleChangeCharMark: y,
                      onHandleChangeMarkModeToTrue: k,
                      onHandleMarkHeal: N,
                    },
                    null,
                    8,
                    ["character", "max-value", "current-value"]
                  ))
                : C("", !0),
            ]),
            e("div", vr, [
              T(
                De,
                {
                  "tab-options": h,
                  "current-tab": d.value,
                  onHandleNavigation: u,
                },
                null,
                8,
                ["current-tab"]
              ),
            ]),
            e("div", mr, [
              d.value === 0
                ? (t(),
                  M(
                    Hs,
                    {
                      key: 0,
                      character: b.character,
                      onHandleRollAttribute: I,
                    },
                    null,
                    8,
                    ["character"]
                  ))
                : C("", !0),
              d.value === 1
                ? (t(),
                  M(
                    Qs,
                    {
                      key: 1,
                      character: b.character,
                      onHandleRollDices: s,
                      onHandleRollAttack: c,
                    },
                    null,
                    8,
                    ["character"]
                  ))
                : C("", !0),
              d.value === 2
                ? (t(),
                  M(
                    ir,
                    { key: 2, character: b.character, onHandleRollDices: s },
                    null,
                    8,
                    ["character"]
                  ))
                : C("", !0),
            ]),
          ]),
        ])
      );
    },
  }),
  pr = U(hr, [["__scopeId", "data-v-f74165c5"]]),
  Je = (v) => (K("data-v-f6689ec4"), (v = v()), j(), v),
  br = { class: "modal-content modal-width" },
  fr = { class: "modal-header" },
  _r = Je(() => e("h2", null, "Add", -1)),
  gr = Je(() =>
    e("img", { class: "close-icon", src: Me, alt: "fechar" }, null, -1)
  ),
  Cr = [gr],
  $r = { class: "modal-body modal-height" },
  kr = { class: "creatures-list" },
  Sr = { class: "creatures-list-header" },
  Rr = Je(() =>
    e("div", { class: "creatures-title" }, " Threat List ", -1)
  ),
  yr = { key: 0, class: "tab-nav-container" },
  Ir = { class: "creature-cards-container creatures-card-mobile" },
  Ar = V({
    __name: "AddCreatureModal",
    emits: ["handleAddToCombat", "handleCloseModal"],
    setup(v, { emit: R }) {
      const i = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Reality", value: 6 },
          { label: "Homebrew", value: 7 },
        ],
        $ = R,
        h = Ke(),
        f = be(),
        l = H(0),
        d = H(""),
        u = H(),
        I = H("ordemParanormal");
      Fa(async () => {
        var b;
        if (!h.currentUser) return;
        const m = qa(f, "homebrewCreatures"),
          y = Ga(
            m,
            Ka("uid", "==", (b = h.currentUser) == null ? void 0 : b.uid)
          ),
          k = await ot(y),
          N = [];
        for (const a of k.docs) {
          const F = a.data();
          (F.id = a.id), N.push(F);
        }
        u.value = N;
      });
      const s = Y(() => {
          let m = [];
          return (
            I.value === "ordemParanormal" && l.value === 0 && (m = At),
            I.value === "ordemParanormal" && l.value === 1 && (m = Dt),
            I.value === "ordemParanormal" && l.value === 2 && (m = Mt),
            I.value === "ordemParanormal" && l.value === 3 && (m = Ht),
            I.value === "ordemParanormal" && l.value === 4 && (m = Tt),
            I.value === "ordemParanormal" && l.value === 5 && (m = Pt),
            I.value === "ordemParanormal" && l.value === 6 && (m = wt),
            I.value === "ordemParanormal" &&
              l.value === 7 &&
              (m = u.value || []),
            I.value === "tocaDosMonstros" && (m = Nt),
            I.value === "cultoDaCriacao" && (m = Ot),
            I.value === "marcasFragmentadas" && (m = Bt),
            I.value === "comunidade" && (m = Et),
            m.filter((y) => je(y.name, d.value))
          );
        }),
        c = (m) => {
          (l.value = m), (d.value = "");
        },
        _ = (m) => {
          $("handleAddToCombat", m), $("handleCloseModal");
        };
      return (m, y) => (
        t(),
        o("div", br, [
          e("div", fr, [
            _r,
            e(
              "button",
              { onClick: y[0] || (y[0] = (k) => m.$emit("handleCloseModal")) },
              Cr
            ),
          ]),
          e("div", $r, [
            e("div", kr, [
              T(
                Lt,
                {
                  "current-source": I.value,
                  "show-toca-dos-monstros": "",
                  "show-culto-da-criacao": "",
                  "show-marcas-fragmentadas": "",
                  "show-comunidade": "",
                  onHandleChangeCurrentSource:
                    y[1] || (y[1] = (k) => (I.value = k)),
                },
                null,
                8,
                ["current-source"]
              ),
              e("div", Sr, [
                Rr,
                T(
                  Ut,
                  {
                    value: d.value,
                    small: "",
                    onUpdate: y[2] || (y[2] = (k) => (d.value = k)),
                  },
                  null,
                  8,
                  ["value"]
                ),
                I.value === "ordemParanormal"
                  ? (t(),
                    o("div", yr, [
                      T(
                        De,
                        {
                          "current-tab": l.value,
                          "tab-options": i,
                          onHandleNavigation: c,
                        },
                        null,
                        8,
                        ["current-tab"]
                      ),
                    ]))
                  : C("", !0),
              ]),
              e("div", Ir, [
                (t(!0),
                o(
                  W,
                  null,
                  x(
                    s.value,
                    (k) => (
                      t(),
                      o("div", { key: k.id }, [
                        T(
                          Vt,
                          {
                            creature: k,
                            "is-default": "",
                            "can-add": "",
                            onHandleAdd: (N) => _(k),
                          },
                          null,
                          8,
                          ["creature", "onHandleAdd"]
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
  Dr = U(Ar, [["__scopeId", "data-v-f6689ec4"]]),
  fe = (v) => (K("data-v-c0f6d99e"), (v = v()), j(), v),
  Mr = { class: "modal-content modal-width" },
  Hr = { class: "modal-header" },
  Tr = fe(() => e("h2", null, "Settings", -1)),
  Pr = fe(() =>
    e("img", { class: "close-icon", src: Me, alt: "fechar" }, null, -1)
  ),
  wr = [Pr],
  Nr = { class: "modal-body modal-height" },
  Er = { class: "row" },
  Or = fe(() => e("div", { class: "label" }, " Hide threat HP ", -1)),
  Br = { class: "row" },
  Vr = fe(() =>
    e("div", { class: "label" }, " Hide agent attributes ", -1)
  ),
  Ur = { class: "row" },
  Lr = fe(() =>
    e("div", { class: "label" }, " Hide threat dice rolls ", -1)
  ),
  Fr = V({
    __name: "ConfigModal",
    props: { campaign: { type: Object, required: !0 } },
    emits: ["handleCloseModal"],
    setup(v) {
      const R = v,
        i = ["OFF", "ON"],
        $ = be(),
        h = (d) => {
          G(B($, "campaigns", R.campaign.id), {
            combatPrivateCreatureValues: d,
          });
        },
        f = (d) => {
          G(B($, "campaigns", R.campaign.id), {
            combatPrivateCharacterValues: d,
          });
        },
        l = (d) => {
          G(B($, "campaigns", R.campaign.id), { combatPrivateCreatureDice: d });
        };
      return (d, u) => (
        t(),
        o("div", Mr, [
          e("div", Hr, [
            Tr,
            e(
              "button",
              { onClick: u[0] || (u[0] = (I) => d.$emit("handleCloseModal")) },
              wr
            ),
          ]),
          e("div", Nr, [
            e("div", Er, [
              Or,
              T(
                pe,
                {
                  value: v.campaign.combatPrivateCreatureValues || !1,
                  options: i,
                  onHandleChange: h,
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", Br, [
              Vr,
              T(
                pe,
                {
                  value: v.campaign.combatPrivateCharacterValues || !1,
                  options: i,
                  onHandleChange: f,
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", Ur, [
              Lr,
              T(
                pe,
                {
                  value: v.campaign.combatPrivateCreatureDice || !1,
                  options: i,
                  onHandleChange: l,
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
  qr = U(Fr, [["__scopeId", "data-v-c0f6d99e"]]),
  Wa = (v) => (K("data-v-3c94ce09"), (v = v()), j(), v),
  Gr = { class: "master-combats-container" },
  Kr = { key: 0, class: "combat-container" },
  jr = { class: "combat-header" },
  Qr = { class: "combat-name-container" },
  zr = { class: "combat-name" },
  Wr = { class: "combat-header-buttons" },
  Xr = { class: "combat-content-container" },
  Jr = { class: "initiative-container" },
  Zr = { class: "combat-sheet-container" },
  Yr = { key: 0 },
  xr = { key: 0 },
  el = { key: 1 },
  al = { key: 1, class: "no-sheet-text" },
  tl = { key: 0 },
  nl = { key: 1 },
  ol = { key: 1 },
  sl = { key: 0 },
  rl = { key: 0, class: "cards-container" },
  ll = { key: 1, class: "no-dm-combat" },
  il = Wa(() =>
    e(
      "h2",
      null,
      'You have not created any encounter. To create and encounter return to the campaign page on the "encounters" menu',
      -1
    )
  ),
  cl = [il],
  ul = { key: 1, class: "no-dm-combat" },
  dl = Wa(() =>
    e("h2", null, "Encounters started by the GM will show up here", -1)
  ),
  vl = [dl],
  ml = V({
    __name: "MasterCombats",
    props: { campaign: {}, characters: {}, isDm: { type: Boolean } },
    emits: [
      "handleStartCombat",
      "handleFinishCombat",
      "handleRollAttr",
      "handleRollDices",
      "handleRollCharacterAttack",
      "handleRollCreatureAttack",
      "handleAddCreatureCard",
      "handleChangeCreaturePvField",
      "handleChangeCreaturePv",
      "handleRemoveAction",
      "handleEditCreature",
      "handleEditCreatureAction",
      "handleChangeInitiative",
      "handleRollCreatureSkill",
      "handleRemoveFromCombat",
      "handleAddToCombat",
      "handleNextTurn",
      "handleBackTurn",
    ],
    setup(v, { emit: R }) {
      const i = v,
        $ = R,
        h = H(),
        f = H(!1),
        l = H(!1),
        d = () => {
          (h.value = void 0), $("handleFinishCombat");
        },
        u = (s) => {
          if (
            !i.campaign.combats ||
            i.campaign.currentCombat === void 0 ||
            i.campaign.currentCombat < 0
          )
            return;
          if (i.campaign.combats[i.campaign.currentCombat].creatures) {
            const _ = i.campaign.combats[
              i.campaign.currentCombat
            ].creatures.findIndex((m) => m.id === s);
            _ > -1 && (h.value = { index: _, type: "creature" });
          }
          const c = i.characters.findIndex((_) => _.id === s);
          c > -1 && (h.value = { index: c, type: "character" });
        },
        I = Y(
          () =>
            !(
              !i.campaign.combats ||
              i.campaign.currentCombat === void 0 ||
              i.campaign.currentCombat < 0
            )
        );
      return (s, c) => {
        const _ = ja("vue-final-modal");
        return (
          t(),
          o("div", Gr, [
            s.campaign.combats &&
            s.campaign.currentCombat !== void 0 &&
            s.campaign.currentCombat > -1 &&
            I.value
              ? (t(),
                o("div", Kr, [
                  e("div", jr, [
                    e("div", Qr, [
                      e(
                        "div",
                        zr,
                        A(s.campaign.combats[s.campaign.currentCombat].name),
                        1
                      ),
                    ]),
                    e("div", Wr, [
                      s.isDm
                        ? (t(),
                          o(
                            "button",
                            {
                              key: 0,
                              class: "button-secondary",
                              onClick: c[0] || (c[0] = (m) => (l.value = !0)),
                            },
                            " Settings "
                          ))
                        : C("", !0),
                      s.isDm
                        ? (t(),
                          o(
                            "button",
                            { key: 1, class: "button-secondary", onClick: d },
                            " Finish "
                          ))
                        : C("", !0),
                      s.isDm
                        ? (t(),
                          o(
                            "button",
                            {
                              key: 2,
                              class: "button-primary",
                              onClick: c[1] || (c[1] = (m) => (f.value = !0)),
                            },
                            " Add New "
                          ))
                        : C("", !0),
                    ]),
                  ]),
                  e("div", Xr, [
                    e("div", Jr, [
                      T(
                        ts,
                        {
                          characters: s.characters,
                          campaign: s.campaign,
                          "is-dm": s.isDm,
                          "current-combat":
                            s.campaign.combats[s.campaign.currentCombat],
                          onHandleSelectSheet: u,
                          onHandleChangeInitiative:
                            c[2] ||
                            (c[2] = (m, y) =>
                              s.$emit("handleChangeInitiative", m, y)),
                          onHandleRemoveFromCombat:
                            c[3] ||
                            (c[3] = (m) =>
                              s.$emit("handleRemoveFromCombat", m)),
                          onHandleNextTurn:
                            c[4] ||
                            (c[4] = (m) => s.$emit("handleNextTurn", m)),
                          onHandleBackTurn:
                            c[5] ||
                            (c[5] = (m) => s.$emit("handleBackTurn", m)),
                        },
                        null,
                        8,
                        ["characters", "campaign", "is-dm", "current-combat"]
                      ),
                    ]),
                    e("div", Zr, [
                      h.value
                        ? (t(),
                          o("div", Yr, [
                            h.value.type === "creature"
                              ? (t(),
                                o("div", xr, [
                                  T(
                                    Rt,
                                    {
                                      creature:
                                        s.campaign.combats[
                                          s.campaign.currentCombat
                                        ].creatures[h.value.index],
                                      onHandleChangePvField:
                                        c[6] ||
                                        (c[6] = (m, y, k) =>
                                          s.$emit(
                                            "handleChangeCreaturePvField",
                                            m,
                                            y,
                                            k
                                          )),
                                      onHandleChangePv:
                                        c[7] ||
                                        (c[7] = (m, y) =>
                                          s.$emit(
                                            "handleChangeCreaturePv",
                                            m,
                                            y
                                          )),
                                      onHandleRollAttribute:
                                        c[8] ||
                                        (c[8] = (m, y, k) =>
                                          s.$emit(
                                            "handleRollAttr",
                                            m,
                                            0,
                                            y,
                                            k,
                                            !0
                                          )),
                                      onHandleAttack:
                                        c[9] ||
                                        (c[9] = (m, y) =>
                                          s.$emit(
                                            "handleRollCreatureAttack",
                                            m,
                                            y
                                          )),
                                      onHandleAdd:
                                        c[10] ||
                                        (c[10] = (m, y) =>
                                          s.$emit(
                                            "handleAddCreatureCard",
                                            m,
                                            y
                                          )),
                                      onHandleRemoveAction:
                                        c[11] ||
                                        (c[11] = (m, y, k) =>
                                          s.$emit(
                                            "handleRemoveAction",
                                            m,
                                            y,
                                            k
                                          )),
                                      onHandleEditCreature:
                                        c[12] ||
                                        (c[12] = (m) =>
                                          s.$emit("handleEditCreature", m)),
                                      onHandleEditCreatureAction:
                                        c[13] ||
                                        (c[13] = (m, y, k) =>
                                          s.$emit(
                                            "handleEditCreatureAction",
                                            m,
                                            y,
                                            k
                                          )),
                                      onHandleRollSkill:
                                        c[14] ||
                                        (c[14] = (m, y, k, N) =>
                                          s.$emit(
                                            "handleRollCreatureSkill",
                                            m,
                                            y,
                                            k,
                                            N
                                          )),
                                    },
                                    null,
                                    8,
                                    ["creature"]
                                  ),
                                ]))
                              : (t(),
                                o("div", el, [
                                  T(
                                    pr,
                                    {
                                      character: s.characters[h.value.index],
                                      onHandleRollAttribute:
                                        c[15] ||
                                        (c[15] = (m, y, k, N) =>
                                          s.$emit(
                                            "handleRollAttr",
                                            m,
                                            0,
                                            y,
                                            k,
                                            !1,
                                            N
                                          )),
                                      onHandleRollDices:
                                        c[16] ||
                                        (c[16] = (m, y, k, N) =>
                                          s.$emit(
                                            "handleRollDices",
                                            m,
                                            y,
                                            k,
                                            N
                                          )),
                                      onHandleRollAttack:
                                        c[17] ||
                                        (c[17] = (m, y) =>
                                          s.$emit(
                                            "handleRollCharacterAttack",
                                            m,
                                            y
                                          )),
                                    },
                                    null,
                                    8,
                                    ["character"]
                                  ),
                                ])),
                          ]))
                        : (t(),
                          o(
                            "div",
                            al,
                            " Select one of your sheets on the initiative tracker "
                          )),
                    ]),
                  ]),
                  f.value
                    ? (t(),
                      o("div", tl, [
                        T(
                          _,
                          {
                            modelValue: f.value,
                            "onUpdate:modelValue":
                              c[20] || (c[20] = (m) => (f.value = m)),
                            classes: "modal-container",
                          },
                          {
                            default: oe(() => [
                              T(Dr, {
                                onHandleAddToCombat:
                                  c[18] ||
                                  (c[18] = (m) =>
                                    s.$emit("handleAddToCombat", m)),
                                onHandleCloseModal:
                                  c[19] ||
                                  (c[19] = (m) => (f.value = !f.value)),
                              }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                      ]))
                    : C("", !0),
                  l.value
                    ? (t(),
                      o("div", nl, [
                        T(
                          _,
                          {
                            modelValue: l.value,
                            "onUpdate:modelValue":
                              c[22] || (c[22] = (m) => (l.value = m)),
                            classes: "modal-container",
                          },
                          {
                            default: oe(() => [
                              T(
                                qr,
                                {
                                  campaign: s.campaign,
                                  onHandleCloseModal:
                                    c[21] ||
                                    (c[21] = (m) => (l.value = !l.value)),
                                },
                                null,
                                8,
                                ["campaign"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                      ]))
                    : C("", !0),
                ]))
              : (t(),
                o("div", ol, [
                  s.isDm
                    ? (t(),
                      o("div", sl, [
                        s.campaign.combats && s.campaign.combats.length > 0
                          ? (t(),
                            o("div", rl, [
                              (t(!0),
                              o(
                                W,
                                null,
                                x(
                                  s.campaign.combats,
                                  (m, y) => (
                                    t(),
                                    o("div", { key: m.id }, [
                                      T(
                                        kt,
                                        {
                                          combat: m,
                                          "is-master-screen": "",
                                          onHandleStart: (k) =>
                                            s.$emit("handleStartCombat", y),
                                        },
                                        null,
                                        8,
                                        ["combat", "onHandleStart"]
                                      ),
                                    ])
                                  )
                                ),
                                128
                              )),
                            ]))
                          : (t(), o("div", ll, cl)),
                      ]))
                    : (t(), o("div", ul, vl)),
                ])),
          ])
        );
      };
    },
  }),
  Ba = U(ml, [["__scopeId", "data-v-3c94ce09"]]),
  hl = { class: "textarea-container" },
  pl = ["placeholder", "value", "onBlur"],
  bl = V({
    __name: "MasterAnotations",
    props: { campaign: {} },
    emits: ["handleChangeCampaignAnotations"],
    setup(v, { emit: R }) {
      const i = R,
        $ = [
          {
            title: "General",
            key: "geral",
            placeholder: "General information gathered throughout the game session...",
          },
          {
            title: "Future Sessions ",
            key: "previous",
            placeholder: "Notes for possible future events...",
          },
          {
            title: "Previous sessions ",
            key: "next",
            placeholder: "Important events that occurred...",
          },
        ],
        h = (f, l) => {
          const d = { value: f.target.value, key: l };
          i("handleChangeCampaignAnotations", d);
        };
      return (f, l) => (
        t(),
        o(
          W,
          null,
          x($, (d) =>
            e("div", { key: d.title }, [
              e("div", hl, [
                e("h3", null, A(d.title), 1),
                e(
                  "textarea",
                  {
                    class: "textarea description-tab-size",
                    rows: "5",
                    placeholder: d.placeholder,
                    value: f.campaign.anotations[d.key],
                    onBlur: (u) => h(u, d.key),
                  },
                  `\r
      `,
                  40,
                  pl
                ),
              ]),
            ])
          ),
          64
        )
      );
    },
  }),
  Va = U(bl, [["__scopeId", "data-v-a9aa04a0"]]),
  Xa = (v) => (K("data-v-a513e168"), (v = v()), j(), v),
  fl = { class: "modal-content modal-width" },
  _l = { class: "modal-header" },
  gl = Xa(() => e("h2", null, "Threat", -1)),
  Cl = Xa(() =>
    e("img", { class: "close-icon", src: Me, alt: "fechar" }, null, -1)
  ),
  $l = [Cl],
  kl = { class: "modal-body modal-height" },
  Sl = V({
    __name: "CreatureModal",
    props: { creature: {} },
    emits: ["handleEditCreature", "handleCloseModal"],
    setup(v) {
      return (R, i) => (
        t(),
        o("div", fl, [
          e("div", _l, [
            gl,
            e(
              "button",
              { onClick: i[0] || (i[0] = ($) => R.$emit("handleCloseModal")) },
              $l
            ),
          ]),
          e("div", kl, [
            T(
              qt,
              {
                creature: R.creature,
                "no-padding": "",
                onHandleEdit:
                  i[1] || (i[1] = ($) => R.$emit("handleEditCreature", $)),
                onHandleClose:
                  i[2] || (i[2] = ($) => R.$emit("handleCloseModal")),
              },
              null,
              8,
              ["creature"]
            ),
          ]),
        ])
      );
    },
  }),
  Rl = U(Sl, [["__scopeId", "data-v-a513e168"]]),
  ie = (v) => (K("data-v-72ffa426"), (v = v()), j(), v),
  yl = { class: "container" },
  Il = { key: 0 },
  Al = { class: "header" },
  Dl = ie(() => e("div", { class: "title" }, " Investigation Sheets ", -1)),
  Ml = { class: "sheets-container" },
  Hl = { class: "sheet-name" },
  Tl = { class: "sheet-buttons-container" },
  Pl = ["onClick"],
  wl = ["onClick"],
  Nl = { key: 1 },
  El = { class: "sheet-header" },
  Ol = { key: 0, class: "sheet-container" },
  Bl = { class: "input-container" },
  Vl = ie(() => e("div", { class: "label" }, " Case name ", -1)),
  Ul = ["value"],
  Ll = { class: "input-container" },
  Fl = ie(() => e("div", { class: "label" }, " Summary ", -1)),
  ql = ["value"],
  Gl = { class: "input-container" },
  Kl = ie(() => e("div", { class: "label" }, " Objetive ", -1)),
  jl = ["value"],
  Ql = { class: "input-container" },
  zl = ie(() => e("div", { class: "label" }, " Questions ", -1)),
  Wl = ["value"],
  Xl = { class: "input-container" },
  Jl = ie(() => e("div", { class: "label" }, " Clues ", -1)),
  Zl = ["value"],
  Yl = V({
    __name: "InvestigationSheets",
    props: {
      campaign: {},
      isDm: { type: Boolean },
      currentInvestigationSheetIndex: {},
    },
    emits: [
      "handleAddInvestigationSheet",
      "handleRemoveInvestigationSheet",
      "handleSelectInvestigationSheet",
      "handleUnselectInvestigationSheet",
      "handleUpdateInvestigationSheet",
    ],
    setup(v, { emit: R }) {
      const i = R,
        $ = (h, f) => {
          const l = h.target.value;
          i("handleUpdateInvestigationSheet", l, f);
        };
      return (h, f) => (
        t(),
        o("div", yl, [
          h.currentInvestigationSheetIndex === null
            ? (t(),
              o("div", Il, [
                e("div", Al, [
                  Dl,
                  h.isDm
                    ? (t(),
                      o(
                        "button",
                        {
                          key: 0,
                          class: "button-primary add-button",
                          onClick:
                            f[0] ||
                            (f[0] = (l) =>
                              h.$emit("handleAddInvestigationSheet")),
                        },
                        " Add New "
                      ))
                    : C("", !0),
                ]),
                e("div", Ml, [
                  (t(!0),
                  o(
                    W,
                    null,
                    x(
                      h.campaign.investigationSheets,
                      (l, d) => (
                        t(),
                        o("div", { key: d, class: "sheet-card" }, [
                          e("div", Hl, A(l.name), 1),
                          e("div", Tl, [
                            h.isDm
                              ? (t(),
                                o(
                                  "button",
                                  {
                                    key: 0,
                                    class: "button-secondary sheet-button",
                                    onClick: (u) =>
                                      h.$emit(
                                        "handleRemoveInvestigationSheet",
                                        d
                                      ),
                                  },
                                  " Delete ",
                                  8,
                                  Pl
                                ))
                              : C("", !0),
                            e(
                              "button",
                              {
                                class: "button-primary sheet-button",
                                onClick: (u) =>
                                  h.$emit("handleSelectInvestigationSheet", d),
                              },
                              " Open ",
                              8,
                              wl
                            ),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]))
            : (t(),
              o("div", Nl, [
                e("div", El, [
                  e(
                    "button",
                    {
                      class: "button-primary add-button",
                      onClick:
                        f[1] ||
                        (f[1] = (l) =>
                          h.$emit("handleUnselectInvestigationSheet")),
                    },
                    " Return "
                  ),
                ]),
                h.campaign.investigationSheets
                  ? (t(),
                    o("div", Ol, [
                      e("div", Bl, [
                        Vl,
                        e(
                          "input",
                          {
                            type: "text",
                            class: "input-primary sheet-input",
                            value:
                              h.campaign.investigationSheets[
                                h.currentInvestigationSheetIndex
                              ].name,
                            onBlur: f[2] || (f[2] = (l) => $(l, "name")),
                          },
                          null,
                          40,
                          Ul
                        ),
                      ]),
                      e("div", Ll, [
                        Fl,
                        e(
                          "textarea",
                          {
                            class: "textarea",
                            rows: "5",
                            value:
                              h.campaign.investigationSheets[
                                h.currentInvestigationSheetIndex
                              ].summary,
                            onBlur: f[3] || (f[3] = (l) => $(l, "summary")),
                          },
                          `\r
          `,
                          40,
                          ql
                        ),
                      ]),
                      e("div", Gl, [
                        Kl,
                        e(
                          "textarea",
                          {
                            class: "textarea",
                            rows: "5",
                            value:
                              h.campaign.investigationSheets[
                                h.currentInvestigationSheetIndex
                              ].goal,
                            onBlur: f[4] || (f[4] = (l) => $(l, "goal")),
                          },
                          `\r
          `,
                          40,
                          jl
                        ),
                      ]),
                      e("div", Ql, [
                        zl,
                        e(
                          "textarea",
                          {
                            class: "textarea",
                            rows: "5",
                            value:
                              h.campaign.investigationSheets[
                                h.currentInvestigationSheetIndex
                              ].questions,
                            onBlur: f[5] || (f[5] = (l) => $(l, "questions")),
                          },
                          `\r
          `,
                          40,
                          Wl
                        ),
                      ]),
                      e("div", Xl, [
                        Jl,
                        e(
                          "textarea",
                          {
                            class: "textarea",
                            rows: "10",
                            value:
                              h.campaign.investigationSheets[
                                h.currentInvestigationSheetIndex
                              ].clues,
                            onBlur: f[6] || (f[6] = (l) => $(l, "clues")),
                          },
                          `\r
          `,
                          40,
                          Zl
                        ),
                      ]),
                    ]))
                  : C("", !0),
              ])),
        ])
      );
    },
  }),
  Ua = U(Yl, [["__scopeId", "data-v-72ffa426"]]),
  ne = (v) => (K("data-v-f7399d3f"), (v = v()), j(), v),
  xl = { class: "container" },
  ei = { key: 0 },
  ai = { class: "header" },
  ti = ne(() => e("div", { class: "title" }, " Mission reports ", -1)),
  ni = { class: "sheets-container" },
  oi = { class: "sheet-name" },
  si = { class: "sheet-buttons-container" },
  ri = ["onClick"],
  li = ["onClick"],
  ii = { key: 1 },
  ci = { class: "sheet-header" },
  ui = { key: 0, class: "sheet-container" },
  di = { class: "input-container" },
  vi = ne(() => e("div", { class: "label" }, " Mission ", -1)),
  mi = ["value"],
  hi = { class: "input-container" },
  pi = ne(() => e("div", { class: "label" }, " Team ", -1)),
  bi = ["value"],
  fi = { class: "input-container" },
  _i = ne(() => e("div", { class: "label" }, " Involved agentes ", -1)),
  gi = ["value"],
  Ci = { class: "input-container" },
  $i = ne(() => e("div", { class: "label" }, " Clues found ", -1)),
  ki = ["value"],
  Si = { class: "input-container" },
  Ri = ne(() => e("div", { class: "label" }, " Casualidades ", -1)),
  yi = ["value"],
  Ii = { class: "input-container" },
  Ai = ne(() => e("div", { class: "label" }, " Mission summary ", -1)),
  Di = ["value"],
  Mi = { class: "result-row" },
  Hi = ne(() => e("div", { class: "label" }, " Mission result: ", -1)),
  Ti = { class: "buttons-container" },
  Pi = V({
    __name: "ReportSheets",
    props: {
      campaign: {},
      isDm: { type: Boolean },
      currentReportSheetIndex: {},
    },
    emits: [
      "handleAddReportSheet",
      "handleRemoveReportSheet",
      "handleSelectReportSheet",
      "handleUnselectReportSheet",
      "handleUpdateReportSheet",
    ],
    setup(v, { emit: R }) {
      const i = R,
        $ = (l, d) => {
          const u = l.target.value;
          i("handleUpdateReportSheet", u, d);
        },
        h = (l, d) => {
          i("handleUpdateReportSheet", l, d);
        },
        f = (l) => (l === "1" ? "#3d8b40" : l === "0" ? "#d9534f" : "#fff");
      return (l, d) => (
        t(),
        o("div", xl, [
          l.currentReportSheetIndex === null
            ? (t(),
              o("div", ei, [
                e("div", ai, [
                  ti,
                  l.isDm
                    ? (t(),
                      o(
                        "button",
                        {
                          key: 0,
                          class: "button-primary add-button",
                          onClick:
                            d[0] ||
                            (d[0] = (u) => l.$emit("handleAddReportSheet")),
                        },
                        " Add New "
                      ))
                    : C("", !0),
                ]),
                e("div", ni, [
                  (t(!0),
                  o(
                    W,
                    null,
                    x(
                      l.campaign.reportSheets,
                      (u, I) => (
                        t(),
                        o(
                          "div",
                          {
                            key: I,
                            class: "sheet-card",
                            style: st({
                              borderLeft: `5px solid ${f(u.missionStatus)}`,
                            }),
                          },
                          [
                            e("div", oi, A(u.missionName), 1),
                            e("div", si, [
                              l.isDm
                                ? (t(),
                                  o(
                                    "button",
                                    {
                                      key: 0,
                                      class: "button-secondary sheet-button",
                                      onClick: (s) =>
                                        l.$emit("handleRemoveReportSheet", I),
                                    },
                                    " Delete ",
                                    8,
                                    ri
                                  ))
                                : C("", !0),
                              e(
                                "button",
                                {
                                  class: "button-primary sheet-button",
                                  onClick: (s) =>
                                    l.$emit("handleSelectReportSheet", I),
                                },
                                " Open ",
                                8,
                                li
                              ),
                            ]),
                          ],
                          4
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]))
            : (t(),
              o("div", ii, [
                e("div", ci, [
                  e(
                    "button",
                    {
                      class: "button-primary add-button",
                      onClick:
                        d[1] ||
                        (d[1] = (u) => l.$emit("handleUnselectReportSheet")),
                    },
                    " Voltar "
                  ),
                ]),
                l.campaign.reportSheets
                  ? (t(),
                    o("div", ui, [
                      e("div", di, [
                        vi,
                        e(
                          "input",
                          {
                            type: "text",
                            class: "input-primary sheet-input",
                            placeholder: "Mission name",
                            value:
                              l.campaign.reportSheets[l.currentReportSheetIndex]
                                .missionName,
                            onBlur: d[2] || (d[2] = (u) => $(u, "missionName")),
                          },
                          null,
                          40,
                          mi
                        ),
                      ]),
                      e("div", hi, [
                        pi,
                        e(
                          "input",
                          {
                            type: "text",
                            class: "input-primary sheet-input",
                            placeholder: "Team name",
                            value:
                              l.campaign.reportSheets[l.currentReportSheetIndex]
                                .teamName,
                            onBlur: d[3] || (d[3] = (u) => $(u, "teamName")),
                          },
                          null,
                          40,
                          bi
                        ),
                      ]),
                      e("div", fi, [
                        _i,
                        e(
                          "input",
                          {
                            type: "text",
                            class: "input-primary sheet-input",
                            placeholder:
                              "All agents involved throughout the mission",
                            value:
                              l.campaign.reportSheets[l.currentReportSheetIndex]
                                .teamAgents,
                            onBlur: d[4] || (d[4] = (u) => $(u, "teamAgents")),
                          },
                          null,
                          40,
                          gi
                        ),
                      ]),
                      e("div", Ci, [
                        $i,
                        e(
                          "textarea",
                          {
                            class: "textarea",
                            rows: "5",
                            placeholder:
                              "All clues found throughout the mission",
                            value:
                              l.campaign.reportSheets[l.currentReportSheetIndex]
                                .cluesFounded,
                            onBlur:
                              d[5] || (d[5] = (u) => $(u, "cluesFounded")),
                          },
                          `\r
          `,
                          40,
                          ki
                        ),
                      ]),
                      e("div", Si, [
                        Ri,
                        e(
                          "textarea",
                          {
                            class: "textarea",
                            rows: "5",
                            placeholder:
                              "Deaths of innocent people, team members, material losses, among others",
                            value:
                              l.campaign.reportSheets[l.currentReportSheetIndex]
                                .causalities,
                            onBlur: d[6] || (d[6] = (u) => $(u, "causalities")),
                          },
                          `\r
          `,
                          40,
                          yi
                        ),
                      ]),
                      e("div", Ii, [
                        Ai,
                        e(
                          "textarea",
                          {
                            class: "textarea",
                            rows: "5",
                            placeholder: "Mission summary and conclusion",
                            value:
                              l.campaign.reportSheets[l.currentReportSheetIndex]
                                .briefing,
                            onBlur: d[7] || (d[7] = (u) => $(u, "briefing")),
                          },
                          `\r
          `,
                          40,
                          Di
                        ),
                      ]),
                      e("div", Mi, [
                        Hi,
                        e("div", Ti, [
                          e(
                            "button",
                            {
                              id: "hover-button",
                              class: le([
                                "button-naked mission-button",
                                {
                                  "active-neutro-button":
                                    l.campaign.reportSheets[
                                      l.currentReportSheetIndex
                                    ].missionStatus === "",
                                },
                              ]),
                              onClick:
                                d[8] || (d[8] = (u) => h("", "missionStatus")),
                            },
                            " UNFINISHED ",
                            2
                          ),
                          e(
                            "button",
                            {
                              id: "hover-button",
                              class: le([
                                "button-naked mission-button",
                                {
                                  "active-success-button":
                                    l.campaign.reportSheets[
                                      l.currentReportSheetIndex
                                    ].missionStatus === "1",
                                },
                              ]),
                              onClick:
                                d[9] || (d[9] = (u) => h("1", "missionStatus")),
                            },
                            " SUCCESS ",
                            2
                          ),
                          e(
                            "button",
                            {
                              id: "hover-button",
                              class: le([
                                "button-naked mission-button",
                                {
                                  "active-fail-button":
                                    l.campaign.reportSheets[
                                      l.currentReportSheetIndex
                                    ].missionStatus === "0",
                                },
                              ]),
                              onClick:
                                d[10] ||
                                (d[10] = (u) => h("0", "missionStatus")),
                            },
                            " FAILURE ",
                            2
                          ),
                        ]),
                      ]),
                    ]))
                  : C("", !0),
              ])),
        ])
      );
    },
  }),
  La = U(Pi, [["__scopeId", "data-v-f7399d3f"]]),
  wi = (v) => (K("data-v-f87af0af"), (v = v()), j(), v),
  Ni = { key: 0 },
  Ei = { key: 0, class: "private-master-screen" },
  Oi = wi(() => e("h1", null, "Private GM screen", -1)),
  Bi = { key: 1 },
  Vi = { key: 0, class: "screen-master-container" },
  Ui = { class: "screen-master-content" },
  Li = { class: "small-screen-log-container" },
  Fi = { class: "tab-content-container" },
  qi = { class: "tab-nav-container" },
  Gi = { key: 0 },
  Ki = { key: 0 },
  ji = { key: 0 },
  Qi = { key: 0 },
  zi = { key: 1, class: "screen-master-container" },
  Wi = { class: "tab-nav-container" },
  Xi = { key: 0 },
  Ji = { key: 0 },
  Zi = { key: 0 },
  Yi = { key: 0 },
  xi = { key: 0 },
  ec = { key: 1 },
  ac = { key: 2 },
  tc = { key: 2 },
  nc = { key: 3 },
  oc = { key: 1 },
  sc = V({
    __name: "MasterScreen",
    setup(v) {
      const { play: R } = ht(pt),
        i = [
          { label: "AGENTS", value: 0 },
          { label: "ENCOUNTERS", value: 1 },
          { label: "INVESTIGATION", value: 2 },
          { label: "REPORTS", value: 3 },
        ],
        $ = [
          { label: "AGENTS", value: 0 },
          { label: "ENCOUNTERS", value: 1 },
          { label: "INVESTIGATION", value: 2 },
          { label: "REPORTS", value: 3 },
          { label: "DICE", value: 4 },
          { label: "NOTES", value: 5 },
        ],
        h = [
          { label: "LOG", value: 0 },
          { label: "AGENTS", value: 1 },
          { label: "ENCOUNTERS", value: 2 },
          { label: "INVESTIGATION", value: 3 },
          { label: "REPORTS", value: 4 },
        ],
        f = [
          { label: "LOG", value: 0 },
          { label: "AGENTS", value: 1 },
          { label: "ENCOUNTERS", value: 2 },
          { label: "INVESTIGATION", value: 3 },
          { label: "REPORTS", value: 4 },
          { label: "DICE", value: 5 },
          { label: "NOTES", value: 6 },
        ],
        l = Ke(),
        d = be(),
        u = rt(),
        s = lt().params.id,
        c = H(0),
        _ = H(!0),
        m = H(window.innerWidth),
        y = H(i),
        k = H(!1),
        N = H(!1),
        b = H(0),
        a = H(),
        F = H([]),
        L = H(),
        ce = H(!1),
        _e = H(!1),
        ge = H(!1),
        Ce = H(),
        $e = H(),
        ke = H("Ação"),
        ue = H(),
        se = H(null),
        re = H(null),
        Pe = H(),
        we = H(),
        Ne = H(),
        O = H({ message: "", type: "info", alive: !1, timeout: 0 }),
        J = H({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        P = H({
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
        });
      Fa(async () => {
        var S;
        if (!l.currentUser) return;
        const n = await it(B(d, "campaigns", s));
        n.data() || u.push({ name: "not-found" });
        const r = (S = n.data()) == null ? void 0 : S.campaignLogId;
        (we.value = Ve(B(d, "campaigns", s), (D) => {
          var q, Q;
          D.data() || u.push({ name: "not-found" }),
            (a.value = D.data()),
            (a.value.id = D.id),
            a.value.privateMasterScreen ? (N.value = !0) : (N.value = !1),
            ((q = l.currentUser) == null ? void 0 : q.uid) === a.value.uid &&
              (k.value = !0),
            m.value >= 1023
              ? k.value
                ? (y.value = $)
                : (y.value = i)
              : k.value
              ? (y.value = f)
              : (y.value = h),
            a.value.combats &&
              a.value.currentCombat &&
              a.value.currentCombat >
                ((Q = a.value.combats) == null ? void 0 : Q.length) - 1 &&
              (a.value.currentCombat = -1),
            c.value < 3 && c.value++;
        })),
          (Ne.value = Ve(B(d, "campaignLogs", r), (D) => {
            D.data() &&
              ((L.value = D.data()),
              (L.value.id = D.id),
              c.value < 3 && c.value++);
          }));
        const p = qa(d, "characters"),
          g = Ga(p, Ka("campaignDocId", "==", n.id));
        (Pe.value = Ve(g, (D) => {
          const q = [];
          for (const Q of D.docs) {
            const X = Q.data();
            (X.id = Q.id), q.push(X);
          }
          (F.value = q), c.value < 3 && c.value++;
        })),
          window.addEventListener("resize", () => {
            m.value = window.innerWidth;
          });
      }),
        ct(() => {
          Pe.value && Pe.value(),
            we.value && we.value(),
            Ne.value && Ne.value();
        }),
        Ae(c, () => {
          _.value !== !1 && c.value >= 3 && (_.value = !1);
        });
      const Ze = (n) => (b.value = n),
        w = () => {
          a.value && G(B(d, "campaigns", a.value.id), a.value);
        },
        Ja = () => (J.value.alive = !1),
        Ye = () => (P.value.alive = !1),
        Ee = (n) => {
          a.value &&
            L.value &&
            (L.value.campaignLogMessages.push(n),
            L.value.campaignLogMessages.length > 200 &&
              L.value.campaignLogMessages.shift(),
            G(B(d, "campaignLogs", L.value.id), L.value));
        },
        de = (n, r, p, g = !1, S) => {
          try {
            const D = gt(n),
              q = D.total,
              Q = Ct(D.output),
              X = $t(D.output);
            (J.value.title = p),
              (J.value.total = q),
              (J.value.output = Q),
              (J.value.notation = X),
              (J.value.skinDice = S || Na[4]);
            const ye = {
              sender: r,
              timestamp: new Date().getTime(),
              content: J.value,
              contentType: "roll",
              isPrivate: g,
            };
            Ee(ye), Se(), Ye(), (J.value.alive = !0), R();
          } catch {
            (O.value.message = "Invalid dice"),
              (O.value.type = "error"),
              (O.value.alive = !0);
          }
        },
        xe = (n, r) => {
          try {
            const p = bt(n, r);
            (P.value.title = r.name),
              (P.value.totalAttack = p.attackTotal),
              (P.value.totalDamage = p.damageTotal),
              (P.value.critical = p.critical),
              (P.value.attackTooltip = p.attackInfo),
              (P.value.damageTooltip = p.damageInfo),
              (P.value.attackRollTooltip = p.attackRollInfo),
              (P.value.damageRollTooltip = p.damageRollInfo),
              (P.value.criticalTooltip = p.criticalInfo),
              (P.value.skinDice = n.skinDice);
            const g = {
              sender: n.name,
              timestamp: new Date().getTime(),
              content: P.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            Ee(g), Se(), (P.value.alive = !0), R();
          } catch {
            (O.value.message = "Invalid dice"),
              (O.value.type = "error"),
              (O.value.alive = !0);
          }
        },
        Za = (n) => {
          const r = [];
          if (n.damage)
            for (const g of n.damage) r.push(`(${g.value} - ${g.damageType})`);
          return r.join(" + ");
        },
        Ya = (n) => {
          const r =
              `${n.rollNumber}d20` +
              (n.rollBonus && !isNaN(n.rollBonus) ? ` +${n.rollBonus}` : ""),
            p = Za(n),
            g = `${n.criticalRange}/x${n.criticalMult}`;
          let S;
          n.rollNumber > 0
            ? (S =
                `${n.rollNumber}d20kh1` +
                (n.rollBonus && !isNaN(n.rollBonus) ? `+${n.rollBonus}` : ""))
            : (S =
                `${Math.abs(n.rollNumber) + 2}d20kl1` +
                (n.rollBonus && !isNaN(n.rollBonus) ? `+${n.rollBonus}` : ""));
          const D = new me(S.trim()),
            q = D.total,
            Q = D.output
              .substring(D.output.indexOf("[") + 1, D.output.indexOf("]"))
              .split(",");
          let X = 0;
          if (Q.length > 1)
            Q.map((E) => {
              E.includes("d") ||
                (parseInt(E) >= n.criticalRange && (X = 1),
                parseInt(E) === 1 && (X = -1),
                parseInt(E) === 1 && n.criticalRange === 1 && (X = 1));
            });
          else {
            const E = D.output.substring(
              D.output.indexOf("[") + 1,
              D.output.indexOf("]")
            );
            parseInt(E) >= n.criticalRange && (X = 1),
              parseInt(E) === 1 && (X = -1);
          }
          const ye = n.damage[0].value !== "" ? `${n.damage[0].value}` : "0";
          let Ie = 0,
            ae = "";
          if (X === 1)
            for (let E = 0; E < n.criticalMult; E++) {
              const Z = new me(ye.trim());
              (Ie += Z.total),
                (ae +=
                  Z.output.substring(
                    Z.output.indexOf(":") + 1,
                    Z.output.indexOf("=") - 1
                  ) + "+");
            }
          else {
            const E = new me(ye.trim());
            (Ie += E.total),
              (ae +=
                E.output.substring(
                  E.output.indexOf(":") + 1,
                  E.output.indexOf("=") - 1
                ) + "+");
          }
          if (n.damage.length > 1) {
            const E = [];
            for (const nt of n.damage) E.push(nt.value);
            E.splice(0, 1);
            const Z = new me(E.join("+"));
            (Ie += Z.total),
              Z.output.includes("[")
                ? (ae +=
                    Z.output.substring(
                      Z.output.indexOf(":") + 1,
                      Z.output.indexOf("=") - 1
                    ) + "+")
                : (ae += Z.total + "+");
          }
          return (
            ae.charAt(ae.length - 1) === "+" && (ae = ae.slice(0, -1)),
            {
              attackTotal: q,
              damageTotal: Ie,
              critical: X,
              attackInfo: r,
              damageInfo: p,
              criticalInfo: g,
              attackRollInfo:
                D.output.substring(
                  D.output.indexOf("["),
                  D.output.indexOf("]") + 1
                ) + (n.rollBonus !== 0 ? `+${n.rollBonus}` : ""),
              damageRollInfo: `${ae.trim().replace(/\s/g, "")}`,
            }
          );
        },
        ea = (n, r) => {
          var p;
          try {
            const g = Ya(r);
            (P.value.title = r.name || "Attack"),
              (P.value.totalAttack = g.attackTotal),
              (P.value.totalDamage = g.damageTotal),
              (P.value.critical = g.critical),
              (P.value.attackTooltip = g.attackInfo),
              (P.value.damageTooltip = g.damageInfo),
              (P.value.attackRollTooltip = g.attackRollInfo),
              (P.value.damageRollTooltip = g.damageRollInfo),
              (P.value.criticalTooltip = g.criticalInfo),
              (P.value.skinDice = Na[4]);
            const S = {
              sender: n.name,
              timestamp: new Date().getTime(),
              content: P.value,
              contentType: "attackRoll",
              isPrivate:
                ((p = a.value) == null
                  ? void 0
                  : p.combatPrivateCreatureDice) || !1,
            };
            Ee(S), Se(), (P.value.alive = !0), R();
          } catch {
            (O.value.message = "Invalid dice"),
              (O.value.type = "error"),
              (O.value.alive = !0);
          }
        },
        aa = (n, r) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0
          )
            return;
          const p = a.value.combats[a.value.currentCombat].creatures.findIndex(
              (S) => S.id === n.id
            ),
            g = a.value.combats[a.value.currentCombat].creatures[p];
          r === "actions"
            ? g[r].push({ id: Le(), name: "New Action" })
            : g[r].push({ id: Le(), name: "New Power" }),
            w();
        },
        Oe = (n, r = "Result") => {
          de(n, "GM", r, ce.value);
        };
      Ae(m, () => {
        m.value >= 1023
          ? k.value
            ? (y.value = $)
            : (y.value = i)
          : k.value
          ? (y.value = f)
          : (y.value = h);
      }),
        Ae(
          () => O.value.alive,
          () => {
            O.value.alive === !0 &&
              (O.value.timeout = window.setTimeout(
                () => (O.value.alive = !1),
                3e3
              ));
          }
        ),
        Ae(
          () => b.value,
          () => {
            b.value === 0 && (J.value.alive = !1);
          }
        );
      const Se = () => {
          (O.value.alive = !1), clearTimeout(O.value.timeout);
        },
        ta = (n) => {
          a.value && k.value && ((a.value.anotations[n.key] = n.value), w());
        },
        na = () => {
          var r, p;
          if (!a.value || !k.value) return;
          a.value.masterMacros || (a.value.masterMacros = []);
          const n = { title: "New Die", value: "3d20k1" };
          (p = (r = a.value) == null ? void 0 : r.masterMacros) == null ||
            p.unshift(n),
            w();
        },
        oa = (n) => {
          var r, p;
          (r = a.value) != null &&
            r.masterMacros &&
            ((p = a.value) == null || p.masterMacros.splice(n, 1), w());
        },
        sa = (n, r, p) => {
          var g;
          (g = a.value) != null &&
            g.masterMacros &&
            ((a.value.masterMacros[p][r] = n.target.value), w());
        },
        ra = (n) => {
          var g;
          if (!((g = a.value) != null && g.masterMacros)) return;
          const r = a.value.masterMacros[n].value,
            p = a.value.masterMacros[n].title;
          Oe(r, p);
        },
        Be = (n, r) => {
          let p;
          return (
            n > 0
              ? (p = `${n}d20kh1` + (r !== 0 ? `+${r}` : ""))
              : (p = `${Math.abs(n) + 2}d20kl1` + (r !== 0 ? `+${r}` : "")),
            new me(p.trim()).total
          );
        },
        la = (n) => {
          if (!a.value || !a.value.combats) return;
          const r = {
            STR: "str",
            AGI: "dex",
            INT: "int",
            PRE: "pre",
            VIG: "con",
          };
          if (
            ((a.value.currentCombat = n),
            !a.value.combats[a.value.currentCombat].combatStarted)
          ) {
            a.value.combats[a.value.currentCombat].currentRound === void 0 &&
              ((a.value.combats[a.value.currentCombat].currentRound = 0),
              (a.value.combats[a.value.currentCombat].currentTurn = 0));
            for (const p of F.value) {
              const g = p.attributes[r[p.skills[11].attribute]];
              (p.initiativeValue = Be(g, p.skills[11].bonus)),
                G(B(d, "characters", p.id), p);
            }
            for (const p of a.value.combats[a.value.currentCombat].creatures)
              p.initiativeValue = Be(
                p.skills.initiative.rollNumber,
                p.skills.initiative.rollBonus || 0
              );
            a.value.combats[a.value.currentCombat].combatStarted = !0;
          }
          w();
        },
        ia = () => {
          a.value && a.value.combats && ((a.value.currentCombat = -1), w());
        },
        ca = (n, r, p, g, S, D) => {
          var Q;
          let q;
          n > 0
            ? (q = `${n}d20kh1` + (r !== 0 ? `+${r}` : ""))
            : (q = `${Math.abs(n) + 2}d20kl1` + (r !== 0 ? `+${r}` : "")),
            S
              ? de(
                  q,
                  g,
                  p,
                  (Q = a.value) == null ? void 0 : Q.combatPrivateCreatureDice
                )
              : de(q, g, p, !1, D);
        },
        ua = (n, r, p, g) => {
          var D;
          let S;
          n > 0
            ? (S = `${n}d20kh1` + (r !== 0 ? `+${r}` : ""))
            : (S = `${Math.abs(n) + 2}d20kl1` + (r !== 0 ? `+${r}` : "")),
            de(
              S,
              g,
              p,
              (D = a.value) == null ? void 0 : D.combatPrivateCreatureDice
            );
        },
        da = (n, r, p, g) => {
          de(n, p, r, !1, g);
        },
        Re = (n, r, p) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0
          )
            return;
          const g = a.value.combats[a.value.currentCombat].creatures.findIndex(
              (D) => D.id === n.id
            ),
            S = a.value.combats[a.value.currentCombat].creatures[g];
          S &&
            (p || (S.pvCurrent = r),
            p === "current" && (S.pvCurrent = r),
            p === "max" && (S.pvMax = r),
            w());
        },
        va = (n, r, p) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0
          )
            return;
          const g = a.value.combats[a.value.currentCombat].creatures.find(
            (S) => S.id === n.id
          );
          if (g) {
            if (p === "actions") {
              const S = g.actions.findIndex((D) => D.id === r);
              S > -1 && g.actions.splice(S, 1);
            } else {
              const S = g.powers.findIndex((D) => D.id === r);
              S > -1 && g.powers.splice(S, 1);
            }
            w();
          }
        },
        ma = (n) => {
          ve(), (_e.value = !0), (Ce.value = n);
        },
        ha = (n, r, p) => {
          if (
            a.value &&
            a.value.combats &&
            !(a.value.currentCombat === void 0 || a.value.currentCombat < 0)
          )
            if (
              (ve(),
              (ge.value = !0),
              ($e.value = a.value.combats[
                a.value.currentCombat
              ].creatures.findIndex((g) => g.id === n.id)),
              p === "Action")
            ) {
              const g = n.actions.findIndex((S) => S.id === r);
              (ue.value = n.actions[g]), (ke.value = "Action");
            } else {
              const g = n.powers.findIndex((S) => S.id === r);
              (ue.value = n.powers[g]), (ke.value = "Power");
            }
        },
        xa = (n) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0 ||
            $e.value === void 0
          )
            return;
          const r = a.value.combats[a.value.currentCombat].creatures[$e.value];
          if (ke.value === "Action") {
            const p = r.actions.findIndex((g) => g.id === n.id);
            p > -1 && (r.actions[p] = n);
          } else {
            const p = r.powers.findIndex((g) => g.id === n.id);
            p > -1 && (r.powers[p] = n);
          }
          w(), ve();
        },
        pa = () => {
          (_e.value = !1), (Ce.value = void 0);
        },
        et = () => {
          (ge.value = !1), (ue.value = void 0), ($e.value = void 0);
        },
        ve = () => {
          pa(), et();
        },
        at = (n) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0
          )
            return;
          const r = a.value.combats[a.value.currentCombat].creatures.findIndex(
            (p) => p.id === n.id
          );
          r < 0 ||
            ((a.value.combats[a.value.currentCombat].creatures[r] = n),
            w(),
            pa());
        },
        ba = (n, r) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0
          )
            return;
          const p = F.value.findIndex((S) => S.id === r),
            g = a.value.combats[a.value.currentCombat].creatures.findIndex(
              (S) => S.id === r
            );
          p > -1 &&
            G(B(d, "characters", F.value[p].id), { initiativeValue: n }),
            g > -1 &&
              ((a.value.combats[a.value.currentCombat].creatures[
                g
              ].initiativeValue = n),
              w());
        },
        tt = () => {
          k.value &&
            L.value &&
            ((L.value.campaignLogMessages = []),
            G(B(d, "campaignLogs", L.value.id), L.value));
        },
        fa = () => {
          var r;
          if (!a.value || !k.value) return;
          const n = {
            name: "New Investigation Sheet",
            summary: "",
            goal: "",
            questions: "",
            clues: "",
          };
          ((r = a.value) != null && r.investigationSheets) ||
            (a.value.investigationSheets = []),
            a.value.investigationSheets.unshift(n),
            w();
        },
        _a = (n) => {
          var r;
          a.value &&
            k.value &&
            ((r = a.value.investigationSheets) == null || r.splice(n, 1), w());
        },
        ga = (n) => {
          a.value && a.value.investigationSheets && (se.value = n);
        },
        Ca = () => {
          a.value && a.value.investigationSheets && (se.value = null);
        },
        $a = (n, r) => {
          a.value &&
            a.value.investigationSheets &&
            se.value !== null &&
            ((a.value.investigationSheets[se.value][r] = n), w());
        },
        ka = (n) => {
          if (
            !a.value ||
            a.value.currentCombat === void 0 ||
            !a.value.combats ||
            !n
          )
            return;
          const r = a.value.combats[a.value.currentCombat].creatures.findIndex(
            (p) => p.id === n
          );
          a.value.combats[a.value.currentCombat].creatures[r].vd &&
            (a.value.combats[a.value.currentCombat].vdTotal -=
              a.value.combats[a.value.currentCombat].creatures[r].vd),
            a.value.combats[a.value.currentCombat].creatures.splice(r, 1),
            w();
        },
        Sa = (n) => {
          a.value &&
            a.value.currentCombat !== void 0 &&
            a.value.combats &&
            ((n.id = Le()),
            (n.initiativeValue = Be(
              n.skills.initiative.rollNumber,
              n.skills.initiative.rollBonus || 0
            )),
            a.value.combats[a.value.currentCombat].creatures.push(n),
            (a.value.combats[a.value.currentCombat].vdTotal += n.vd),
            w());
        },
        Ra = (n) => {
          a.value &&
            a.value.currentCombat !== void 0 &&
            a.value.combats &&
            (a.value.combats[a.value.currentCombat].currentTurn < n - 1
              ? a.value.combats[a.value.currentCombat].currentTurn++
              : ((a.value.combats[a.value.currentCombat].currentTurn = 0),
                a.value.combats[a.value.currentCombat].currentRound++),
            w());
        },
        ya = (n) => {
          a.value &&
            a.value.currentCombat !== void 0 &&
            a.value.combats &&
            (a.value.combats[a.value.currentCombat].currentTurn >= 1
              ? a.value.combats[a.value.currentCombat].currentTurn--
              : ((a.value.combats[a.value.currentCombat].currentTurn = n - 1),
                a.value.combats[a.value.currentCombat].currentRound > 0 &&
                  a.value.combats[a.value.currentCombat].currentRound--),
            w());
        },
        Ia = () => {
          var r;
          if (!a.value || !k.value) return;
          const n = {
            missionName: "New mission report",
            teamName: "",
            teamAgents: "",
            cluesFounded: "",
            causalities: "",
            briefing: "",
            missionStatus: "",
          };
          ((r = a.value) != null && r.reportSheets) ||
            (a.value.reportSheets = []),
            a.value.reportSheets.unshift(n),
            w();
        },
        Aa = (n) => {
          var r;
          a.value &&
            k.value &&
            ((r = a.value.reportSheets) == null || r.splice(n, 1), w());
        },
        Da = (n) => {
          a.value && a.value.reportSheets && (re.value = n);
        },
        Ma = () => {
          a.value && a.value.reportSheets && (re.value = null);
        },
        Ha = (n, r) => {
          a.value &&
            a.value.reportSheets &&
            re.value !== null &&
            ((a.value.reportSheets[re.value][r] = n), w());
        };
      return (n, r) => {
        var g;
        const p = ja("vue-final-modal");
        return _.value
          ? (t(), o("div", oc, [T(ut, { "page-loading": "" })]))
          : (t(),
            o("div", Ni, [
              N.value && !k.value
                ? (t(),
                  o("div", Ei, [
                    Oi,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick: r[0] || (r[0] = (S) => n.$router.push("/")),
                      },
                      " Return "
                    ),
                  ]))
                : (t(),
                  o("div", Bi, [
                    m.value >= 1023
                      ? (t(),
                        o("div", Vi, [
                          e(
                            "div",
                            {
                              class: "page-title",
                              onClick:
                                r[1] ||
                                (r[1] = (S) => {
                                  var D;
                                  return n.$router.push({
                                    name: "campaign-page",
                                    params: {
                                      id: (D = a.value) == null ? void 0 : D.id,
                                    },
                                  });
                                }),
                            },
                            A((g = a.value) == null ? void 0 : g.name),
                            1
                          ),
                          e("div", Ui, [
                            e("div", Li, [
                              L.value
                                ? (t(),
                                  M(
                                    wa,
                                    {
                                      key: 0,
                                      "master-screen": "",
                                      "is-dm": k.value,
                                      "campaign-log": L.value,
                                      onHandleCleanCampaignLog: tt,
                                    },
                                    null,
                                    8,
                                    ["is-dm", "campaign-log"]
                                  ))
                                : C("", !0),
                            ]),
                            e("div", Fi, [
                              e("div", qi, [
                                T(
                                  De,
                                  {
                                    "tab-options": y.value,
                                    "current-tab": b.value,
                                    onHandleNavigation: Ze,
                                  },
                                  null,
                                  8,
                                  ["tab-options", "current-tab"]
                                ),
                              ]),
                              (t(),
                              M(
                                z,
                                null,
                                [
                                  b.value === 0 && a.value
                                    ? (t(),
                                      M(
                                        Ea,
                                        {
                                          key: 0,
                                          characters: F.value,
                                          campaign: a.value,
                                          "is-dm": k.value,
                                        },
                                        null,
                                        8,
                                        ["characters", "campaign", "is-dm"]
                                      ))
                                    : C("", !0),
                                ],
                                1024
                              )),
                              (t(),
                              M(
                                z,
                                null,
                                [
                                  b.value === 1 && a.value
                                    ? (t(),
                                      M(
                                        Ba,
                                        {
                                          key: 0,
                                          campaign: a.value,
                                          characters: F.value,
                                          "is-dm": k.value,
                                          onHandleStartCombat: la,
                                          onHandleFinishCombat: ia,
                                          onHandleRollAttr: ca,
                                          onHandleRollCreatureSkill: ua,
                                          onHandleRollDices: da,
                                          onHandleRollCharacterAttack: xe,
                                          onHandleRollCreatureAttack: ea,
                                          onHandleAddCreatureCard: aa,
                                          onHandleChangeCreaturePv: Re,
                                          onHandleChangeCreaturePvField: Re,
                                          onHandleRemoveAction: va,
                                          onHandleEditCreature: ma,
                                          onHandleEditCreatureAction: ha,
                                          onHandleChangeInitiative: ba,
                                          onHandleRemoveFromCombat: ka,
                                          onHandleAddToCombat: Sa,
                                          onHandleNextTurn: Ra,
                                          onHandleBackTurn: ya,
                                        },
                                        null,
                                        8,
                                        ["campaign", "characters", "is-dm"]
                                      ))
                                    : C("", !0),
                                ],
                                1024
                              )),
                              (t(),
                              M(
                                z,
                                null,
                                [
                                  a.value
                                    ? (t(),
                                      o("div", Gi, [
                                        b.value === 2
                                          ? (t(),
                                            M(
                                              Ua,
                                              {
                                                key: 0,
                                                "is-dm": k.value,
                                                campaign: a.value,
                                                "current-investigation-sheet-index":
                                                  se.value,
                                                onHandleAddInvestigationSheet:
                                                  fa,
                                                onHandleRemoveInvestigationSheet:
                                                  _a,
                                                onHandleSelectInvestigationSheet:
                                                  ga,
                                                onHandleUnselectInvestigationSheet:
                                                  Ca,
                                                onHandleUpdateInvestigationSheet:
                                                  $a,
                                              },
                                              null,
                                              8,
                                              [
                                                "is-dm",
                                                "campaign",
                                                "current-investigation-sheet-index",
                                              ]
                                            ))
                                          : C("", !0),
                                      ]))
                                    : C("", !0),
                                ],
                                1024
                              )),
                              (t(),
                              M(
                                z,
                                null,
                                [
                                  a.value
                                    ? (t(),
                                      o("div", Ki, [
                                        b.value === 3
                                          ? (t(),
                                            M(
                                              La,
                                              {
                                                key: 0,
                                                campaign: a.value,
                                                "is-dm": k.value,
                                                "current-report-sheet-index":
                                                  re.value,
                                                onHandleAddReportSheet: Ia,
                                                onHandleRemoveReportSheet: Aa,
                                                onHandleSelectReportSheet: Da,
                                                onHandleUnselectReportSheet: Ma,
                                                onHandleUpdateReportSheet: Ha,
                                              },
                                              null,
                                              8,
                                              [
                                                "campaign",
                                                "is-dm",
                                                "current-report-sheet-index",
                                              ]
                                            ))
                                          : C("", !0),
                                      ]))
                                    : C("", !0),
                                ],
                                1024
                              )),
                              (t(),
                              M(
                                z,
                                null,
                                [
                                  a.value
                                    ? (t(),
                                      o("div", ji, [
                                        b.value === 4
                                          ? (t(),
                                            M(
                                              Oa,
                                              {
                                                key: 0,
                                                "dm-private-dice": ce.value,
                                                campaign: a.value,
                                                onHandleChangeDmPrivateDice:
                                                  r[2] ||
                                                  (r[2] = (S) =>
                                                    (ce.value = S)),
                                                onHandleRollMasterDices: Oe,
                                                onHandleAddDiceMacro: na,
                                                onHandleRemoveDiceMacro:
                                                  r[3] || (r[3] = (S) => oa(S)),
                                                onHandleChangeDiceMacro: sa,
                                                onHandleRollDiceMacro: ra,
                                              },
                                              null,
                                              8,
                                              ["dm-private-dice", "campaign"]
                                            ))
                                          : C("", !0),
                                      ]))
                                    : C("", !0),
                                ],
                                1024
                              )),
                              (t(),
                              M(
                                z,
                                null,
                                [
                                  a.value
                                    ? (t(),
                                      o("div", Qi, [
                                        b.value === 5
                                          ? (t(),
                                            M(
                                              Va,
                                              {
                                                key: 0,
                                                campaign: a.value,
                                                onHandleChangeCampaignAnotations:
                                                  r[4] || (r[4] = (S) => ta(S)),
                                              },
                                              null,
                                              8,
                                              ["campaign"]
                                            ))
                                          : C("", !0),
                                      ]))
                                    : C("", !0),
                                ],
                                1024
                              )),
                            ]),
                          ]),
                        ]))
                      : (t(),
                        o("div", zi, [
                          e("div", Wi, [
                            T(
                              De,
                              {
                                "tab-options": y.value,
                                "current-tab": b.value,
                                onHandleNavigation: Ze,
                              },
                              null,
                              8,
                              ["tab-options", "current-tab"]
                            ),
                          ]),
                          b.value === 0
                            ? (t(),
                              o("div", Xi, [
                                (t(),
                                M(
                                  z,
                                  null,
                                  [
                                    L.value
                                      ? (t(),
                                        M(
                                          wa,
                                          {
                                            key: 0,
                                            "master-screen": "",
                                            "is-dm": k.value,
                                            "campaign-log": L.value,
                                          },
                                          null,
                                          8,
                                          ["is-dm", "campaign-log"]
                                        ))
                                      : C("", !0),
                                  ],
                                  1024
                                )),
                              ]))
                            : C("", !0),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              b.value === 1 && a.value
                                ? (t(),
                                  M(
                                    Ea,
                                    {
                                      key: 0,
                                      characters: F.value,
                                      campaign: a.value,
                                      "is-dm": k.value,
                                    },
                                    null,
                                    8,
                                    ["characters", "campaign", "is-dm"]
                                  ))
                                : C("", !0),
                            ],
                            1024
                          )),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              b.value === 2 && a.value
                                ? (t(),
                                  M(
                                    Ba,
                                    {
                                      key: 0,
                                      campaign: a.value,
                                      characters: F.value,
                                      "is-dm": k.value,
                                      onHandleStartCombat: la,
                                      onHandleFinishCombat: ia,
                                      onHandleRollAttr: ca,
                                      onHandleRollCreatureSkill: ua,
                                      onHandleRollDices: da,
                                      onHandleRollCharacterAttack: xe,
                                      onHandleRollCreatureAttack: ea,
                                      onHandleAddCreatureCard: aa,
                                      onHandleChangeCreaturePv: Re,
                                      onHandleChangeCreaturePvField: Re,
                                      onHandleRemoveAction: va,
                                      onHandleEditCreature: ma,
                                      onHandleEditCreatureAction: ha,
                                      onHandleChangeInitiative: ba,
                                      onHandleRemoveFromCombat: ka,
                                      onHandleAddToCombat: Sa,
                                      onHandleNextTurn: Ra,
                                      onHandleBackTurn: ya,
                                    },
                                    null,
                                    8,
                                    ["campaign", "characters", "is-dm"]
                                  ))
                                : C("", !0),
                            ],
                            1024
                          )),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              a.value
                                ? (t(),
                                  o("div", Ji, [
                                    b.value === 3
                                      ? (t(),
                                        M(
                                          Ua,
                                          {
                                            key: 0,
                                            "is-dm": k.value,
                                            campaign: a.value,
                                            "current-investigation-sheet-index":
                                              se.value,
                                            onHandleAddInvestigationSheet: fa,
                                            onHandleRemoveInvestigationSheet:
                                              _a,
                                            onHandleSelectInvestigationSheet:
                                              ga,
                                            onHandleUnselectInvestigationSheet:
                                              Ca,
                                            onHandleUpdateInvestigationSheet:
                                              $a,
                                          },
                                          null,
                                          8,
                                          [
                                            "is-dm",
                                            "campaign",
                                            "current-investigation-sheet-index",
                                          ]
                                        ))
                                      : C("", !0),
                                  ]))
                                : C("", !0),
                            ],
                            1024
                          )),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              a.value
                                ? (t(),
                                  o("div", Zi, [
                                    b.value === 4
                                      ? (t(),
                                        M(
                                          La,
                                          {
                                            key: 0,
                                            campaign: a.value,
                                            "is-dm": k.value,
                                            "current-report-sheet-index":
                                              re.value,
                                            onHandleAddReportSheet: Ia,
                                            onHandleRemoveReportSheet: Aa,
                                            onHandleSelectReportSheet: Da,
                                            onHandleUnselectReportSheet: Ma,
                                            onHandleUpdateReportSheet: Ha,
                                          },
                                          null,
                                          8,
                                          [
                                            "campaign",
                                            "is-dm",
                                            "current-report-sheet-index",
                                          ]
                                        ))
                                      : C("", !0),
                                  ]))
                                : C("", !0),
                            ],
                            1024
                          )),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              a.value
                                ? (t(),
                                  o("div", Yi, [
                                    b.value === 5
                                      ? (t(),
                                        M(
                                          Oa,
                                          {
                                            key: 0,
                                            "dm-private-dice": ce.value,
                                            campaign: a.value,
                                            onHandleChangeDmPrivateDice:
                                              r[5] ||
                                              (r[5] = (S) => (ce.value = S)),
                                            onHandleRollMasterDices: Oe,
                                            onHandleAddDiceMacro: na,
                                            onHandleRemoveDiceMacro:
                                              r[6] || (r[6] = (S) => oa(S)),
                                            onHandleChangeDiceMacro: sa,
                                            onHandleRollDiceMacro: ra,
                                          },
                                          null,
                                          8,
                                          ["dm-private-dice", "campaign"]
                                        ))
                                      : C("", !0),
                                  ]))
                                : C("", !0),
                            ],
                            1024
                          )),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              a.value
                                ? (t(),
                                  o("div", xi, [
                                    b.value === 6
                                      ? (t(),
                                        M(
                                          Va,
                                          {
                                            key: 0,
                                            campaign: a.value,
                                            onHandleChangeCampaignAnotations:
                                              r[7] || (r[7] = (S) => ta(S)),
                                          },
                                          null,
                                          8,
                                          ["campaign"]
                                        ))
                                      : C("", !0),
                                  ]))
                                : C("", !0),
                            ],
                            1024
                          )),
                          b.value !== 0
                            ? (t(),
                              o("div", ec, [
                                T(
                                  Ue,
                                  { name: "toast" },
                                  {
                                    default: oe(() => [
                                      J.value.alive
                                        ? (t(),
                                          M(
                                            ft,
                                            {
                                              key: 0,
                                              toast: J.value,
                                              onDismiss: Ja,
                                            },
                                            null,
                                            8,
                                            ["toast"]
                                          ))
                                        : C("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : C("", !0),
                          b.value !== 0
                            ? (t(),
                              o("div", ac, [
                                T(
                                  Ue,
                                  { name: "toast" },
                                  {
                                    default: oe(() => [
                                      P.value.alive
                                        ? (t(),
                                          M(
                                            _t,
                                            {
                                              key: 0,
                                              toast: P.value,
                                              onDismiss: Ye,
                                            },
                                            null,
                                            8,
                                            ["toast"]
                                          ))
                                        : C("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : C("", !0),
                        ])),
                    T(
                      Ue,
                      { name: "toast" },
                      {
                        default: oe(() => [
                          O.value.alive
                            ? (t(),
                              M(
                                Ft,
                                {
                                  key: 0,
                                  toast: O.value,
                                  type: O.value.type,
                                  onDismiss: Se,
                                },
                                null,
                                8,
                                ["toast", "type"]
                              ))
                            : C("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    Ce.value
                      ? (t(),
                        o("div", tc, [
                          T(
                            p,
                            {
                              modelValue: _e.value,
                              "onUpdate:modelValue":
                                r[8] || (r[8] = (S) => (_e.value = S)),
                              classes: "modal-container",
                            },
                            {
                              default: oe(() => [
                                T(
                                  Rl,
                                  {
                                    creature: Ce.value,
                                    onHandleEditCreature: at,
                                    onHandleCloseModal: ve,
                                  },
                                  null,
                                  8,
                                  ["creature"]
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue"]
                          ),
                        ]))
                      : C("", !0),
                    ue.value
                      ? (t(),
                        o("div", nc, [
                          T(
                            p,
                            {
                              modelValue: ge.value,
                              "onUpdate:modelValue":
                                r[9] || (r[9] = (S) => (ge.value = S)),
                              classes: "modal-container",
                            },
                            {
                              default: oe(() => [
                                T(
                                  yt,
                                  {
                                    action: ue.value,
                                    title: ke.value,
                                    onHandleCloseModal: ve,
                                    onHandleEditAction: xa,
                                  },
                                  null,
                                  8,
                                  ["action", "title"]
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue"]
                          ),
                        ]))
                      : C("", !0),
                  ])),
            ]));
      };
    },
  }),
  Gc = U(sc, [["__scopeId", "data-v-f87af0af"]]);
export { Gc as default };

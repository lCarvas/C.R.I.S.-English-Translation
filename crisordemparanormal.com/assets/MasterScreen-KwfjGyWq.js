import {
  d as U,
  f as Y,
  o as t,
  c as o,
  a as e,
  m as $,
  t as A,
  H as Ta,
  L as he,
  k as T,
  v as M,
  p as K,
  b as j,
  _ as L,
  M as be,
  n as W,
  q as x,
  N as G,
  P as V,
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
} from "./index-4umHKyHu.js";
import { L as ut } from "./LoadingView-kkrh3aH3.js";
import {
  I as te,
  n as dt,
  A as vt,
  F as Qa,
  a as mt,
  c as Pa,
  C as wa,
  r as ht,
  T as pt,
  b as bt,
  d as ft,
  f as _t,
  e as gt,
} from "./ToastAttack-ZPb774VK.js";
import { T as De } from "./TabNav-j_803Ij7.js";
import { S as pe } from "./SwitchButtonBool-JBNeasf9.js";
import { _ as He } from "./d20-icon-vaz1En3o.js";
import { C as Ct } from "./CombatCard-Tbhwrew2.js";
import { _ as $t } from "./exit-icon-7lL51GVi.js";
import { C as kt, A as St } from "./ActionModal-1ft6vQ7S.js";
import { R as Rt } from "./RitualCard-dQStL6oM.js";
import {
  A as yt,
  K as It,
  E as At,
  D as Dt,
  B as Mt,
  F as Ht,
  R as Tt,
  T as Pt,
  c as wt,
} from "./creatures-D2g61G-L.js";
import { c as Nt } from "./cultoDaCriacaoContent-BJ8GSvob.js";
import { m as Et } from "./marcasFragmentadas-oZlJGZUl.js";
import { C as Ot } from "./CreatureCard-BE80EGup.js";
import { S as Bt } from "./SearchInput-5qWSH1_X.js";
import { S as Vt } from "./SourcesNavigation-hkMXy3yw.js";
import { u as Ut, d as Lt, D as me } from "./dice-roll-GeFqKSV5.js";
import { T as Ft } from "./ToastNotification-toS9TYTv.js";
import { C as qt } from "./CreatureForm-8t_dCoZG.js";
import { s as Na } from "./characterAutomations-VjVSWhq1.js";
import { v as Le } from "./v4-cyCr5FZV.js";
import "./edit-icon-3vZQUsyW.js";
import "./attributes-pd1IMHTT.js";
import "./show-more-icon-VvUXKiHG.js";
import "./creatureData-ozdxpDUT.js";
import "./CardSource-U0o9Yhdc.js";
import "./default-FmxCqAN8.js";
import "./forms-8DDAOOVU.js";
import "./lodash-gzw5KmHd.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./DropdownSimple-zdPsaNr0.js";
import "./add-icon-fJ4uQHUZ.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./blank-profile-picture-wMh28flS.js";
import "./PictureModal-CS6twcIk.js";
import "./index.esm2017-Gqqo4uuQ.js";
import "./browser-image-compression-9kymdGFS.js";
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
  Vn = U({
    __name: "CharStatusCard",
    props: { character: {} },
    setup(v) {
      const y = v,
        k = "https://crisordemparanormal.com/" + "agente/" + y.character.id,
        m = Y(() =>
          y.character.movement === 0 ? 0 : y.character.movement / 1.5
        ),
        b = Y(() => {
          const u =
            10 +
            y.character.attributes.dex +
            y.character.protectionDefense +
            y.character.bonusDefense;
          return u > 0 ? u : 0;
        }),
        l = Y(() => y.character.skills[9].bonus),
        d = Y(() => y.character.skills[22].bonus + b.value);
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
              : $("", !0),
            e("div", null, [
              u.character.name !== ""
                ? (t(), o("div", zt, A(u.character.name), 1))
                : (t(), o("div", Wt, " [Sem nome] ")),
              e("div", Xt, A(u.character.className), 1),
              e("div", Jt, A(u.character.backgroundName), 1),
              u.character.isNexLevelOn
                ? (t(),
                  o("div", en, [
                    Ta(" LEVEL: "),
                    u.character.statsClass !== "Mundane"
                      ? (t(), o("span", an, A(he(dt)[u.character.nex]), 1))
                      : (t(), o("span", tn, "0")),
                  ]))
                : (t(),
                  o("div", Zt, [
                    Ta(" PEX: "),
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
              ? $("", !0)
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
              ? $("", !0)
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
              : $("", !0),
          ]),
          e("div", $n, [
            e("div", kn, [Sn, e("span", Rn, A(u.character.peTurn), 1)]),
            e("div", yn, [
              In,
              e(
                "span",
                An,
                A(u.character.movement) + "m / " + A(m.value) + "sq ",
                1
              ),
            ]),
          ]),
          e("div", Dn, [
            e("div", Mn, [Hn, e("div", Tn, A(b.value), 1)]),
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
              { class: "sheet-link", href: k, target: "_blank" },
              " Sheet "
            ),
          ]),
        ])
      );
    },
  }),
  Un = L(Vn, [["__scopeId", "data-v-df2547a9"]]),
  Qe = (v) => (K("data-v-f22e148b"), (v = v()), j(), v),
  Ln = { key: 0, class: "master-screen-chars-button-container" },
  Fn = { class: "row" },
  qn = Qe(() => e("div", { class: "label" }, " Hide agents for players ", -1)),
  Gn = { key: 1 },
  Kn = { key: 0, class: "master-screen-chars-container" },
  jn = { key: 1, class: "no-chars-message" },
  Qn = Qe(() => e("h3", null, "There are no agents on this campaign", -1)),
  zn = [Qn],
  Wn = { key: 2, class: "no-chars-message" },
  Xn = Qe(() => e("h3", null, "Agents hidden by the GM", -1)),
  Jn = [Xn],
  Zn = U({
    __name: "MasterScreenChars",
    props: { characters: {}, campaign: {}, isDm: { type: Boolean } },
    setup(v) {
      const y = v,
        i = ["OFF", "ON"],
        k = be(),
        m = (b) => {
          G(V(k, "campaigns", y.campaign.id), { agentsPrivate: b });
        };
      return (b, l) => (
        t(),
        o(
          W,
          null,
          [
            b.isDm
              ? (t(),
                o("div", Ln, [
                  e("div", Fn, [
                    qn,
                    T(
                      pe,
                      {
                        value: b.campaign.agentsPrivate || !1,
                        options: i,
                        onHandleChange: m,
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]))
              : $("", !0),
            !b.campaign.agentsPrivate || b.isDm
              ? (t(),
                o("div", Gn, [
                  b.characters.length > 0
                    ? (t(),
                      o("div", Kn, [
                        (t(!0),
                        o(
                          W,
                          null,
                          x(
                            b.characters,
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
  Ea = L(Zn, [["__scopeId", "data-v-f22e148b"]]),
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
  fo = U({
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
    setup(v, { emit: y }) {
      const i = y,
        k = H(""),
        m = () => {
          i("handleRollMasterDices", k.value), (k.value = "");
        },
        b = ["PUBLIC", "PRIVATE"];
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
                        d[1] || (d[1] = (u) => (k.value = u)),
                      type: "text",
                      class: "roll-dice-input",
                      placeholder: "Roll dice",
                      onKeyup: Ge(m, ["enter"]),
                    },
                    null,
                    40,
                    ao
                  ),
                  [[qe, k.value]]
                ),
                e("button", { class: "dice-button", onClick: m }, no),
              ]),
              T(
                pe,
                {
                  value: l.dmPrivateDice,
                  options: b,
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
  Oa = L(fo, [["__scopeId", "data-v-91a251a9"]]),
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
    e("img", { class: "exit-icon", src: $t, alt: "sair" }, null, -1)
  ),
  Yo = [Zo],
  xo = { class: "initiative-container" },
  es = ["value", "disabled", "onBlur"],
  as = U({
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
    setup(v, { emit: y }) {
      const i = v,
        k = y,
        m = Ke(),
        b = Y(() => {
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
          k("handleChangeInitiative", _, c);
        },
        d = (s) => {
          if (i.isDm) {
            k("handleSelectSheet", s);
            return;
          }
          m.currentUser &&
            m.currentUser.uid ===
              i.characters[i.characters.findIndex((c) => c.id === s)].uid &&
            k("handleSelectSheet", s);
        },
        u = (s, c) => {
          s.vd &&
            i.currentCombat.currentTurn !== void 0 &&
            (c < i.currentCombat.currentTurn &&
              k("handleBackTurn", b.value.length),
            k("handleRemoveFromCombat", s.id));
        },
        I = (s) => {
          var c;
          return !(
            ((c = m.currentUser) == null ? void 0 : c.uid) === s.uid || i.isDm
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
                          s.$emit("handleBackTurn", b.value.length)),
                    },
                    " Previous Turn ",
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
                          s.$emit("handleNextTurn", b.value.length)),
                    },
                    " Next turn "
                  ),
                ]))
              : $("", !0),
          ]),
          e("div", yo, [
            (t(!0),
            o(
              W,
              null,
              x(b.value, (_, g) => {
                var f, S, P, p;
                return (
                  t(),
                  o("div", { key: _.id }, [
                    e(
                      "div",
                      {
                        class: le([
                          "order-card",
                          { "current-turn": s.currentCombat.currentTurn === g },
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
                              : $("", !0),
                            _.maxPv
                              ? (t(),
                                o("div", Oo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((f = he(m).currentUser) == null
                                      ? void 0
                                      : f.uid)
                                    ? (t(), o("div", Bo, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        Vo,
                                        A(_.currentPv) + " / " + A(_.maxPv),
                                        1
                                      )),
                                ]))
                              : $("", !0),
                            _.maxPd && _.isPdOn
                              ? (t(),
                                o("div", Uo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((S = he(m).currentUser) == null
                                      ? void 0
                                      : S.uid)
                                    ? (t(), o("div", Lo, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        Fo,
                                        A(_.currentPd) + " / " + A(_.maxPd),
                                        1
                                      )),
                                ]))
                              : $("", !0),
                            _.maxSan && !_.isPdOn
                              ? (t(),
                                o("div", qo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((P = he(m).currentUser) == null
                                      ? void 0
                                      : P.uid)
                                    ? (t(), o("div", Go, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        Ko,
                                        A(_.currentSan) + " / " + A(_.maxSan),
                                        1
                                      )),
                                ]))
                              : $("", !0),
                            _.maxPe && !_.isPdOn
                              ? (t(),
                                o("div", jo, [
                                  s.campaign.combatPrivateCharacterValues &&
                                  !s.isDm &&
                                  _.uid !==
                                    ((p = he(m).currentUser) == null
                                      ? void 0
                                      : p.uid)
                                    ? (t(), o("div", Qo, " ?? / ?? "))
                                    : (t(),
                                      o(
                                        "div",
                                        zo,
                                        A(_.currentPe) + " / " + A(_.maxPe),
                                        1
                                      )),
                                ]))
                              : $("", !0),
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
                                    onClick: (a) => u(_, g),
                                  },
                                  Yo,
                                  8,
                                  Jo
                                ))
                              : $("", !0),
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
  ts = L(as, [["__scopeId", "data-v-56becebc"]]),
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
  ms = U({
    __name: "CharacterCombatSheetHeader",
    props: { character: {} },
    setup(v) {
      return (y, i) => (
        t(),
        o("div", ns, [
          e("div", null, [
            y.character.sheetPictureURL
              ? (t(),
                o("div", os, [
                  e(
                    "img",
                    {
                      class: "character-picture",
                      src: y.character.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    ss
                  ),
                ]))
              : $("", !0),
          ]),
          e("div", rs, [
            e("div", ls, [
              e("div", is, [
                e("div", cs, [
                  e(
                    "div",
                    { class: "character-name", title: y.character.name },
                    A(y.character.name),
                    9,
                    us
                  ),
                  e("div", ds, [
                    e(
                      "div",
                      vs,
                      A(y.character.className) +
                        " - PEX: " +
                        A(y.character.nex),
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
  hs = L(ms, [["__scopeId", "data-v-56c4788c"]]),
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
  Ms = U({
    __name: "CharacterCombatSheetStats",
    props: { character: {} },
    emits: ["handleRollAttribute"],
    setup(v) {
      const y = v,
        i = Y(() => {
          const m =
            10 +
            y.character.attributes.dex +
            y.character.protectionDefense +
            y.character.bonusDefense;
          return m > 0 ? m : 0;
        }),
        k = Y(() =>
          y.character.movement === 0 ? 0 : y.character.movement / 1.5
        );
      return (m, b) => (
        t(),
        o(
          W,
          null,
          [
            T(
              vt,
              {
                character: m.character,
                "disabled-sheet": !1,
                "combat-sheet": "",
                onHandleRollAttribute:
                  b[0] || (b[0] = (l) => m.$emit("handleRollAttribute", l)),
              },
              null,
              8,
              ["character"]
            ),
            e("div", ps, [
              e("div", bs, [fs, e("div", _s, A(i.value), 1)]),
              e("div", gs, [Cs, e("div", $s, A(m.character.block), 1)]),
            ]),
            e("div", ks, [
              e("div", Ss, [Rs, e("div", ys, A(m.character.evade), 1)]),
              e("div", Is, [
                As,
                e(
                  "div",
                  Ds,
                  A(m.character.movement) + "m /" + A(k.value) + "sq ",
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
  Hs = L(Ms, [["__scopeId", "data-v-33fe2145"]]),
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
  js = U({
    __name: "CharacterCombatSheetCombat",
    props: { character: {} },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(v, { emit: y }) {
      const i = v,
        k = y,
        m = H(""),
        b = H(""),
        l = () => {
          k("handleRollDices", m.value, "Result", i.character.skinDice),
            (m.value = "");
        },
        d = (I) => {
          k("handleRollAttack", I);
        },
        u = Y(() =>
          [...i.character.attacks].filter((s) => je(s.name, b.value))
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
                    value: b.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: s[0] || (s[0] = (c) => (b.value = c)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : $("", !0),
          e("div", ws, [
            Fe(
              e(
                "input",
                {
                  "onUpdate:modelValue": s[1] || (s[1] = (c) => (m.value = c)),
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
              [[qe, m.value]]
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
  Qs = L(js, [["__scopeId", "data-v-2dfa24dc"]]),
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
  lr = U({
    __name: "CharacterCombatSheetRituals",
    props: { character: {} },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(v, { emit: y }) {
      const i = v,
        k = y,
        m = H(""),
        b = H(""),
        l = () => {
          k("handleRollDices", m.value, "Result", i.character.skinDice),
            (m.value = "");
        },
        d = (I, s) => {
          k("handleRollDices", s, I, i.character.skinDice), (m.value = "");
        },
        u = Y(() =>
          [...i.character.rituals].filter((s) => je(s.name, b.value))
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
                    value: b.value,
                    width: "100%",
                    placeholder: "Filter rituals",
                    onUpdate: s[0] || (s[0] = (c) => (b.value = c)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : $("", !0),
          e("div", Xs, [
            Fe(
              e(
                "input",
                {
                  "onUpdate:modelValue": s[1] || (s[1] = (c) => (m.value = c)),
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
              [[qe, m.value]]
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
                                Rt,
                                {
                                  id: c.id,
                                  ritual: c,
                                  "disabled-edit": "",
                                  "only-show": "",
                                  sheet: "",
                                  onHandleRollRitual:
                                    s[2] || (s[2] = (_, g) => d(_, g)),
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
  ir = L(lr, [["__scopeId", "data-v-163db047"]]),
  cr = { class: "character-sheet-container" },
  ur = { class: "character-sheet-padding" },
  dr = { class: "info-bar-wrapper" },
  vr = { class: "tab-nav-container" },
  mr = { class: "character-sheet-content-container" },
  hr = U({
    __name: "CharacterCombatSheet",
    props: { character: {} },
    emits: ["handleRollAttribute", "handleRollDices", "handleRollAttack"],
    setup(v, { emit: y }) {
      const i = v,
        k = y,
        m = [
          { label: "ATTRIBUTES", value: 0 },
          { label: "ENCOUNTER", value: 1 },
          { label: "RITUALS", value: 2 },
        ],
        b = {
          str: "Strength",
          dex: "Agility",
          int: "Intellect",
          pre: "Presence",
          con: "Vigor",
        },
        l = be(),
        d = H(1),
        u = (p) => (d.value = p),
        I = (p) => {
          k(
            "handleRollAttribute",
            i.character.attributes[p],
            b[p],
            i.character.name,
            i.character.skinDice
          );
        },
        s = (p, a, F) => {
          k("handleRollDices", p, a, i.character.name, F);
        },
        c = (p) => {
          k("handleRollAttack", i.character, p);
        },
        _ = (p, a) => {
          const F = p.target.valueAsNumber;
          Pa(i.character, F, a),
            G(V(l, "characters", i.character.id), i.character);
        },
        g = (p, a) => {
          Pa(i.character, p, a),
            G(V(l, "characters", i.character.id), i.character);
        },
        f = (p, a) => {
          p === "pv" &&
            (i.character.deathMarks[a] = !i.character.deathMarks[a]),
            p === "san" &&
              (i.character.madnessMarks[a] = !i.character.madnessMarks[a]),
            p === "pd" && (i.character.pdMarks[a] = !i.character.pdMarks[a]),
            G(V(l, "characters", i.character.id), i.character);
        },
        S = (p) => {
          p === "pv" && (i.character.deathMode = !0),
            p === "san" && (i.character.madnessMode = !0),
            p === "pd" && (i.character.pdMode = !0),
            G(V(l, "characters", i.character.id), i.character);
        },
        P = (p) => {
          p === "pv" &&
            ((i.character.deathMarks = [!1, !1, !1]),
            (i.character.deathMode = !1),
            i.character.currentPv === 0 && (i.character.currentPv = 1)),
            p === "san" &&
              ((i.character.madnessMarks = [!1, !1, !1]),
              (i.character.madnessMode = !1),
              i.character.currentSan === 0 && (i.character.currentSan = 1)),
            p === "pd" &&
              ((i.character.pdMarks = [!1, !1, !1]),
              (i.character.pdMode = !1),
              i.character.currentPd === 0 && (i.character.currentPd = 1)),
            G(V(l, "characters", i.character.id), i.character);
        };
      return (p, a) => (
        t(),
        o("div", cr, [
          T(hs, { character: p.character }, null, 8, ["character"]),
          e("div", ur, [
            e("div", dr, [
              T(
                te,
                {
                  type: "pv",
                  "max-value": p.character.maxPv,
                  "current-value": p.character.currentPv,
                  marks: p.character.deathMarks,
                  "mark-mode": p.character.deathMode,
                  "combat-sheet": "",
                  onHandleChangeCharNumber: _,
                  onHandleChangeCharNumberButton: g,
                  onHandleChangeCharMark: f,
                  onHandleChangeMarkModeToTrue: S,
                  onHandleMarkHeal: P,
                },
                null,
                8,
                ["max-value", "current-value", "marks", "mark-mode"]
              ),
              p.character.isPdOn
                ? $("", !0)
                : (t(),
                  M(
                    te,
                    {
                      key: 0,
                      type: "san",
                      character: p.character,
                      "max-value": p.character.maxSan,
                      "current-value": p.character.currentSan,
                      marks: p.character.madnessMarks,
                      "mark-mode": p.character.madnessMode,
                      "combat-sheet": "",
                      onHandleChangeCharNumber: _,
                      onHandleChangeCharNumberButton: g,
                      onHandleChangeCharMark: f,
                      onHandleChangeMarkModeToTrue: S,
                      onHandleMarkHeal: P,
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
              p.character.isPdOn
                ? $("", !0)
                : (t(),
                  M(
                    te,
                    {
                      key: 1,
                      type: "pe",
                      character: p.character,
                      "max-value": p.character.maxPe,
                      "current-value": p.character.currentPe,
                      "combat-sheet": "",
                      onHandleChangeCharNumber: _,
                      onHandleChangeCharNumberButton: g,
                      onHandleChangeCharMark: f,
                      onHandleChangeMarkModeToTrue: S,
                      onHandleMarkHeal: P,
                    },
                    null,
                    8,
                    ["character", "max-value", "current-value"]
                  )),
              p.character.isPdOn
                ? (t(),
                  M(
                    te,
                    {
                      key: 2,
                      type: "pd",
                      character: p.character,
                      "max-value": p.character.maxPe,
                      "current-value": p.character.currentPe,
                      "combat-sheet": "",
                      onHandleChangeCharNumber: _,
                      onHandleChangeCharNumberButton: g,
                      onHandleChangeCharMark: f,
                      onHandleChangeMarkModeToTrue: S,
                      onHandleMarkHeal: P,
                    },
                    null,
                    8,
                    ["character", "max-value", "current-value"]
                  ))
                : $("", !0),
            ]),
            e("div", vr, [
              T(
                De,
                {
                  "tab-options": m,
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
                      character: p.character,
                      onHandleRollAttribute: I,
                    },
                    null,
                    8,
                    ["character"]
                  ))
                : $("", !0),
              d.value === 1
                ? (t(),
                  M(
                    Qs,
                    {
                      key: 1,
                      character: p.character,
                      onHandleRollDices: s,
                      onHandleRollAttack: c,
                    },
                    null,
                    8,
                    ["character"]
                  ))
                : $("", !0),
              d.value === 2
                ? (t(),
                  M(
                    ir,
                    { key: 2, character: p.character, onHandleRollDices: s },
                    null,
                    8,
                    ["character"]
                  ))
                : $("", !0),
            ]),
          ]),
        ])
      );
    },
  }),
  pr = L(hr, [["__scopeId", "data-v-f74165c5"]]),
  Je = (v) => (K("data-v-c66c9914"), (v = v()), j(), v),
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
  Ar = U({
    __name: "AddCreatureModal",
    emits: ["handleAddToCombat", "handleCloseModal"],
    setup(v, { emit: y }) {
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
        k = y,
        m = Ke(),
        b = be(),
        l = H(0),
        d = H(""),
        u = H(),
        I = H("ordemParanormal"),
        s = H([]);
      Fa(async () => {
        var a;
        if (!m.currentUser) return;
        const f = qa(b, "homebrewCreatures"),
          S = Ga(
            f,
            Ka("uid", "==", (a = m.currentUser) == null ? void 0 : a.uid)
          ),
          P = await ot(S),
          p = [];
        for (const F of P.docs) {
          const E = F.data();
          (E.id = F.id), p.push(E);
        }
        (u.value = p), (s.value = await Et());
      });
      const c = Y(() => {
          let f = [];
          return (
            I.value === "ordemParanormal" && l.value === 0 && (f = yt),
            I.value === "ordemParanormal" && l.value === 1 && (f = It),
            I.value === "ordemParanormal" && l.value === 2 && (f = At),
            I.value === "ordemParanormal" && l.value === 3 && (f = Dt),
            I.value === "ordemParanormal" && l.value === 4 && (f = Mt),
            I.value === "ordemParanormal" && l.value === 5 && (f = Ht),
            I.value === "ordemParanormal" && l.value === 6 && (f = Tt),
            I.value === "ordemParanormal" &&
              l.value === 7 &&
              (f = u.value || []),
            I.value === "tocaDosMonstros" && (f = Pt),
            I.value === "cultoDaCriacao" && (f = Nt),
            I.value === "marcasFragmentadas" && (f = s.value),
            I.value === "comunidade" && (f = wt),
            f.filter((S) => je(S.name, d.value))
          );
        }),
        _ = (f) => {
          (l.value = f), (d.value = "");
        },
        g = (f) => {
          k("handleAddToCombat", f), k("handleCloseModal");
        };
      return (f, S) => (
        t(),
        o("div", br, [
          e("div", fr, [
            _r,
            e(
              "button",
              { onClick: S[0] || (S[0] = (P) => f.$emit("handleCloseModal")) },
              Cr
            ),
          ]),
          e("div", $r, [
            e("div", kr, [
              T(
                Vt,
                {
                  "current-source": I.value,
                  "show-toca-dos-monstros": "",
                  "show-culto-da-criacao": "",
                  "show-marcas-fragmentadas": "",
                  "show-comunidade": "",
                  onHandleChangeCurrentSource:
                    S[1] || (S[1] = (P) => (I.value = P)),
                },
                null,
                8,
                ["current-source"]
              ),
              e("div", Sr, [
                Rr,
                T(
                  Bt,
                  {
                    value: d.value,
                    small: "",
                    onUpdate: S[2] || (S[2] = (P) => (d.value = P)),
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
                          onHandleNavigation: _,
                        },
                        null,
                        8,
                        ["current-tab"]
                      ),
                    ]))
                  : $("", !0),
              ]),
              e("div", Ir, [
                (t(!0),
                o(
                  W,
                  null,
                  x(
                    c.value,
                    (P) => (
                      t(),
                      o("div", { key: P.id }, [
                        T(
                          Ot,
                          {
                            creature: P,
                            "is-default": "",
                            "can-add": "",
                            onHandleAdd: (p) => g(P),
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
  Dr = L(Ar, [["__scopeId", "data-v-c66c9914"]]),
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
  Fr = U({
    __name: "ConfigModal",
    props: { campaign: { type: Object, required: !0 } },
    emits: ["handleCloseModal"],
    setup(v) {
      const y = v,
        i = ["OFF", "ON"],
        k = be(),
        m = (d) => {
          G(V(k, "campaigns", y.campaign.id), {
            combatPrivateCreatureValues: d,
          });
        },
        b = (d) => {
          G(V(k, "campaigns", y.campaign.id), {
            combatPrivateCharacterValues: d,
          });
        },
        l = (d) => {
          G(V(k, "campaigns", y.campaign.id), { combatPrivateCreatureDice: d });
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
                  onHandleChange: m,
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
                  onHandleChange: b,
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
  qr = L(Fr, [["__scopeId", "data-v-c0f6d99e"]]),
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
  ml = U({
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
    setup(v, { emit: y }) {
      const i = v,
        k = y,
        m = H(),
        b = H(!1),
        l = H(!1),
        d = () => {
          (m.value = void 0), k("handleFinishCombat");
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
            ].creatures.findIndex((g) => g.id === s);
            _ > -1 && (m.value = { index: _, type: "creature" });
          }
          const c = i.characters.findIndex((_) => _.id === s);
          c > -1 && (m.value = { index: c, type: "character" });
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
                              onClick: c[0] || (c[0] = (g) => (l.value = !0)),
                            },
                            " Settings "
                          ))
                        : $("", !0),
                      s.isDm
                        ? (t(),
                          o(
                            "button",
                            { key: 1, class: "button-secondary", onClick: d },
                            " Finish "
                          ))
                        : $("", !0),
                      s.isDm
                        ? (t(),
                          o(
                            "button",
                            {
                              key: 2,
                              class: "button-primary",
                              onClick: c[1] || (c[1] = (g) => (b.value = !0)),
                            },
                            " Add New "
                          ))
                        : $("", !0),
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
                            (c[2] = (g, f) =>
                              s.$emit("handleChangeInitiative", g, f)),
                          onHandleRemoveFromCombat:
                            c[3] ||
                            (c[3] = (g) =>
                              s.$emit("handleRemoveFromCombat", g)),
                          onHandleNextTurn:
                            c[4] ||
                            (c[4] = (g) => s.$emit("handleNextTurn", g)),
                          onHandleBackTurn:
                            c[5] ||
                            (c[5] = (g) => s.$emit("handleBackTurn", g)),
                        },
                        null,
                        8,
                        ["characters", "campaign", "is-dm", "current-combat"]
                      ),
                    ]),
                    e("div", Zr, [
                      m.value
                        ? (t(),
                          o("div", Yr, [
                            m.value.type === "creature"
                              ? (t(),
                                o("div", xr, [
                                  T(
                                    kt,
                                    {
                                      creature:
                                        s.campaign.combats[
                                          s.campaign.currentCombat
                                        ].creatures[m.value.index],
                                      onHandleChangePvField:
                                        c[6] ||
                                        (c[6] = (g, f, S) =>
                                          s.$emit(
                                            "handleChangeCreaturePvField",
                                            g,
                                            f,
                                            S
                                          )),
                                      onHandleChangePv:
                                        c[7] ||
                                        (c[7] = (g, f) =>
                                          s.$emit(
                                            "handleChangeCreaturePv",
                                            g,
                                            f
                                          )),
                                      onHandleRollAttribute:
                                        c[8] ||
                                        (c[8] = (g, f, S) =>
                                          s.$emit(
                                            "handleRollAttr",
                                            g,
                                            0,
                                            f,
                                            S,
                                            !0
                                          )),
                                      onHandleAttack:
                                        c[9] ||
                                        (c[9] = (g, f) =>
                                          s.$emit(
                                            "handleRollCreatureAttack",
                                            g,
                                            f
                                          )),
                                      onHandleAdd:
                                        c[10] ||
                                        (c[10] = (g, f) =>
                                          s.$emit(
                                            "handleAddCreatureCard",
                                            g,
                                            f
                                          )),
                                      onHandleRemoveAction:
                                        c[11] ||
                                        (c[11] = (g, f, S) =>
                                          s.$emit(
                                            "handleRemoveAction",
                                            g,
                                            f,
                                            S
                                          )),
                                      onHandleEditCreature:
                                        c[12] ||
                                        (c[12] = (g) =>
                                          s.$emit("handleEditCreature", g)),
                                      onHandleEditCreatureAction:
                                        c[13] ||
                                        (c[13] = (g, f, S) =>
                                          s.$emit(
                                            "handleEditCreatureAction",
                                            g,
                                            f,
                                            S
                                          )),
                                      onHandleRollSkill:
                                        c[14] ||
                                        (c[14] = (g, f, S, P) =>
                                          s.$emit(
                                            "handleRollCreatureSkill",
                                            g,
                                            f,
                                            S,
                                            P
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
                                      character: s.characters[m.value.index],
                                      onHandleRollAttribute:
                                        c[15] ||
                                        (c[15] = (g, f, S, P) =>
                                          s.$emit(
                                            "handleRollAttr",
                                            g,
                                            0,
                                            f,
                                            S,
                                            !1,
                                            P
                                          )),
                                      onHandleRollDices:
                                        c[16] ||
                                        (c[16] = (g, f, S, P) =>
                                          s.$emit(
                                            "handleRollDices",
                                            g,
                                            f,
                                            S,
                                            P
                                          )),
                                      onHandleRollAttack:
                                        c[17] ||
                                        (c[17] = (g, f) =>
                                          s.$emit(
                                            "handleRollCharacterAttack",
                                            g,
                                            f
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
                  b.value
                    ? (t(),
                      o("div", tl, [
                        T(
                          _,
                          {
                            modelValue: b.value,
                            "onUpdate:modelValue":
                              c[20] || (c[20] = (g) => (b.value = g)),
                            classes: "modal-container",
                          },
                          {
                            default: oe(() => [
                              T(Dr, {
                                onHandleAddToCombat:
                                  c[18] ||
                                  (c[18] = (g) =>
                                    s.$emit("handleAddToCombat", g)),
                                onHandleCloseModal:
                                  c[19] ||
                                  (c[19] = (g) => (b.value = !b.value)),
                              }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ),
                      ]))
                    : $("", !0),
                  l.value
                    ? (t(),
                      o("div", nl, [
                        T(
                          _,
                          {
                            modelValue: l.value,
                            "onUpdate:modelValue":
                              c[22] || (c[22] = (g) => (l.value = g)),
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
                                    (c[21] = (g) => (l.value = !l.value)),
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
                    : $("", !0),
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
                                  (g, f) => (
                                    t(),
                                    o("div", { key: g.id }, [
                                      T(
                                        Ct,
                                        {
                                          combat: g,
                                          "is-master-screen": "",
                                          onHandleStart: (S) =>
                                            s.$emit("handleStartCombat", f),
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
  Ba = L(ml, [["__scopeId", "data-v-3c94ce09"]]),
  hl = { class: "textarea-container" },
  pl = ["placeholder", "value", "onBlur"],
  bl = U({
    __name: "MasterAnotations",
    props: { campaign: {} },
    emits: ["handleChangeCampaignAnotations"],
    setup(v, { emit: y }) {
      const i = y,
        k = [
          {
            title: "General",
            key: "geral",
            placeholder:
              "General information gathered throughout the game session...",
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
        m = (b, l) => {
          const d = { value: b.target.value, key: l };
          i("handleChangeCampaignAnotations", d);
        };
      return (b, l) => (
        t(),
        o(
          W,
          null,
          x(k, (d) =>
            e("div", { key: d.title }, [
              e("div", hl, [
                e("h3", null, A(d.title), 1),
                e(
                  "textarea",
                  {
                    class: "textarea description-tab-size",
                    rows: "5",
                    placeholder: d.placeholder,
                    value: b.campaign.anotations[d.key],
                    onBlur: (u) => m(u, d.key),
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
  Va = L(bl, [["__scopeId", "data-v-a9aa04a0"]]),
  Xa = (v) => (K("data-v-a513e168"), (v = v()), j(), v),
  fl = { class: "modal-content modal-width" },
  _l = { class: "modal-header" },
  gl = Xa(() => e("h2", null, "Threat", -1)),
  Cl = Xa(() =>
    e("img", { class: "close-icon", src: Me, alt: "fechar" }, null, -1)
  ),
  $l = [Cl],
  kl = { class: "modal-body modal-height" },
  Sl = U({
    __name: "CreatureModal",
    props: { creature: {} },
    emits: ["handleEditCreature", "handleCloseModal"],
    setup(v) {
      return (y, i) => (
        t(),
        o("div", fl, [
          e("div", _l, [
            gl,
            e(
              "button",
              { onClick: i[0] || (i[0] = (k) => y.$emit("handleCloseModal")) },
              $l
            ),
          ]),
          e("div", kl, [
            T(
              qt,
              {
                creature: y.creature,
                "no-padding": "",
                onHandleEdit:
                  i[1] || (i[1] = (k) => y.$emit("handleEditCreature", k)),
                onHandleClose:
                  i[2] || (i[2] = (k) => y.$emit("handleCloseModal")),
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
  Rl = L(Sl, [["__scopeId", "data-v-a513e168"]]),
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
  Yl = U({
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
    setup(v, { emit: y }) {
      const i = y,
        k = (m, b) => {
          const l = m.target.value;
          i("handleUpdateInvestigationSheet", l, b);
        };
      return (m, b) => (
        t(),
        o("div", yl, [
          m.currentInvestigationSheetIndex === null
            ? (t(),
              o("div", Il, [
                e("div", Al, [
                  Dl,
                  m.isDm
                    ? (t(),
                      o(
                        "button",
                        {
                          key: 0,
                          class: "button-primary add-button",
                          onClick:
                            b[0] ||
                            (b[0] = (l) =>
                              m.$emit("handleAddInvestigationSheet")),
                        },
                        " Add New "
                      ))
                    : $("", !0),
                ]),
                e("div", Ml, [
                  (t(!0),
                  o(
                    W,
                    null,
                    x(
                      m.campaign.investigationSheets,
                      (l, d) => (
                        t(),
                        o("div", { key: d, class: "sheet-card" }, [
                          e("div", Hl, A(l.name), 1),
                          e("div", Tl, [
                            m.isDm
                              ? (t(),
                                o(
                                  "button",
                                  {
                                    key: 0,
                                    class: "button-secondary sheet-button",
                                    onClick: (u) =>
                                      m.$emit(
                                        "handleRemoveInvestigationSheet",
                                        d
                                      ),
                                  },
                                  " Delete ",
                                  8,
                                  Pl
                                ))
                              : $("", !0),
                            e(
                              "button",
                              {
                                class: "button-primary sheet-button",
                                onClick: (u) =>
                                  m.$emit("handleSelectInvestigationSheet", d),
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
                        b[1] ||
                        (b[1] = (l) =>
                          m.$emit("handleUnselectInvestigationSheet")),
                    },
                    " Return "
                  ),
                ]),
                m.campaign.investigationSheets
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
                              m.campaign.investigationSheets[
                                m.currentInvestigationSheetIndex
                              ].name,
                            onBlur: b[2] || (b[2] = (l) => k(l, "name")),
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
                              m.campaign.investigationSheets[
                                m.currentInvestigationSheetIndex
                              ].summary,
                            onBlur: b[3] || (b[3] = (l) => k(l, "summary")),
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
                              m.campaign.investigationSheets[
                                m.currentInvestigationSheetIndex
                              ].goal,
                            onBlur: b[4] || (b[4] = (l) => k(l, "goal")),
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
                              m.campaign.investigationSheets[
                                m.currentInvestigationSheetIndex
                              ].questions,
                            onBlur: b[5] || (b[5] = (l) => k(l, "questions")),
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
                              m.campaign.investigationSheets[
                                m.currentInvestigationSheetIndex
                              ].clues,
                            onBlur: b[6] || (b[6] = (l) => k(l, "clues")),
                          },
                          `\r
          `,
                          40,
                          Zl
                        ),
                      ]),
                    ]))
                  : $("", !0),
              ])),
        ])
      );
    },
  }),
  Ua = L(Yl, [["__scopeId", "data-v-72ffa426"]]),
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
  Pi = U({
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
    setup(v, { emit: y }) {
      const i = y,
        k = (l, d) => {
          const u = l.target.value;
          i("handleUpdateReportSheet", u, d);
        },
        m = (l, d) => {
          i("handleUpdateReportSheet", l, d);
        },
        b = (l) => (l === "1" ? "#3d8b40" : l === "0" ? "#d9534f" : "#fff");
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
                    : $("", !0),
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
                              borderLeft: `5px solid ${b(u.missionStatus)}`,
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
                                : $("", !0),
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
                            onBlur: d[2] || (d[2] = (u) => k(u, "missionName")),
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
                            onBlur: d[3] || (d[3] = (u) => k(u, "teamName")),
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
                            onBlur: d[4] || (d[4] = (u) => k(u, "teamAgents")),
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
                              d[5] || (d[5] = (u) => k(u, "cluesFounded")),
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
                            onBlur: d[6] || (d[6] = (u) => k(u, "causalities")),
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
                            onBlur: d[7] || (d[7] = (u) => k(u, "briefing")),
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
                                d[8] || (d[8] = (u) => m("", "missionStatus")),
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
                                d[9] || (d[9] = (u) => m("1", "missionStatus")),
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
                                (d[10] = (u) => m("0", "missionStatus")),
                            },
                            " FAILURE ",
                            2
                          ),
                        ]),
                      ]),
                    ]))
                  : $("", !0),
              ])),
        ])
      );
    },
  }),
  La = L(Pi, [["__scopeId", "data-v-f7399d3f"]]),
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
  sc = U({
    __name: "MasterScreen",
    setup(v) {
      const { play: y } = Ut(Lt),
        i = [
          { label: "AGENTS", value: 0 },
          { label: "ENCOUNTERS", value: 1 },
          { label: "INVESTIGATION", value: 2 },
          { label: "REPORTS", value: 3 },
        ],
        k = [
          { label: "AGENTS", value: 0 },
          { label: "ENCOUNTERS", value: 1 },
          { label: "INVESTIGATION", value: 2 },
          { label: "REPORTS", value: 3 },
          { label: "DICE", value: 4 },
          { label: "NOTES", value: 5 },
        ],
        m = [
          { label: "LOG", value: 0 },
          { label: "AGENTS", value: 1 },
          { label: "ENCOUNTERS", value: 2 },
          { label: "INVESTIGATION", value: 3 },
          { label: "REPORTS", value: 4 },
        ],
        b = [
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
        g = H(window.innerWidth),
        f = H(i),
        S = H(!1),
        P = H(!1),
        p = H(0),
        a = H(),
        F = H([]),
        E = H(),
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
        B = H({ message: "", type: "info", alive: !1, timeout: 0 }),
        J = H({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        w = H({
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
        var R;
        if (!l.currentUser) return;
        const n = await it(V(d, "campaigns", s));
        n.data() || u.push({ name: "not-found" });
        const r = (R = n.data()) == null ? void 0 : R.campaignLogId;
        (we.value = Ve(V(d, "campaigns", s), (D) => {
          var q, Q;
          D.data() || u.push({ name: "not-found" }),
            (a.value = D.data()),
            (a.value.id = D.id),
            a.value.privateMasterScreen ? (P.value = !0) : (P.value = !1),
            ((q = l.currentUser) == null ? void 0 : q.uid) === a.value.uid &&
              (S.value = !0),
            g.value >= 1023
              ? S.value
                ? (f.value = k)
                : (f.value = i)
              : S.value
              ? (f.value = b)
              : (f.value = m),
            a.value.combats &&
              a.value.currentCombat &&
              a.value.currentCombat >
                ((Q = a.value.combats) == null ? void 0 : Q.length) - 1 &&
              (a.value.currentCombat = -1),
            c.value < 3 && c.value++;
        })),
          (Ne.value = Ve(V(d, "campaignLogs", r), (D) => {
            D.data() &&
              ((E.value = D.data()),
              (E.value.id = D.id),
              c.value < 3 && c.value++);
          }));
        const h = qa(d, "characters"),
          C = Ga(h, Ka("campaignDocId", "==", n.id));
        (Pe.value = Ve(C, (D) => {
          const q = [];
          for (const Q of D.docs) {
            const X = Q.data();
            (X.id = Q.id), q.push(X);
          }
          (F.value = q), c.value < 3 && c.value++;
        })),
          window.addEventListener("resize", () => {
            g.value = window.innerWidth;
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
      const Ze = (n) => (p.value = n),
        N = () => {
          a.value && G(V(d, "campaigns", a.value.id), a.value);
        },
        Ja = () => (J.value.alive = !1),
        Ye = () => (w.value.alive = !1),
        Ee = (n) => {
          a.value &&
            E.value &&
            (E.value.campaignLogMessages.push(n),
            E.value.campaignLogMessages.length > 200 &&
              E.value.campaignLogMessages.shift(),
            G(V(d, "campaignLogs", E.value.id), E.value));
        },
        de = (n, r, h, C = !1, R) => {
          try {
            const D = ft(n),
              q = D.total,
              Q = _t(D.output),
              X = gt(D.output);
            (J.value.title = h),
              (J.value.total = q),
              (J.value.output = Q),
              (J.value.notation = X),
              (J.value.skinDice = R || Na[4]);
            const ye = {
              sender: r,
              timestamp: new Date().getTime(),
              content: J.value,
              contentType: "roll",
              isPrivate: C,
            };
            Ee(ye), Se(), Ye(), (J.value.alive = !0), y();
          } catch {
            (B.value.message = "Invalid dice"),
              (B.value.type = "error"),
              (B.value.alive = !0);
          }
        },
        xe = (n, r) => {
          try {
            const h = ht(n, r);
            (w.value.title = r.name),
              (w.value.totalAttack = h.attackTotal),
              (w.value.totalDamage = h.damageTotal),
              (w.value.critical = h.critical),
              (w.value.attackTooltip = h.attackInfo),
              (w.value.damageTooltip = h.damageInfo),
              (w.value.attackRollTooltip = h.attackRollInfo),
              (w.value.damageRollTooltip = h.damageRollInfo),
              (w.value.criticalTooltip = h.criticalInfo),
              (w.value.skinDice = n.skinDice);
            const C = {
              sender: n.name,
              timestamp: new Date().getTime(),
              content: w.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            Ee(C), Se(), (w.value.alive = !0), y();
          } catch {
            (B.value.message = "Invalid dice"),
              (B.value.type = "error"),
              (B.value.alive = !0);
          }
        },
        Za = (n) => {
          const r = [];
          if (n.damage)
            for (const C of n.damage) r.push(`(${C.value} - ${C.damageType})`);
          return r.join(" + ");
        },
        Ya = (n) => {
          const r =
              `${n.rollNumber}d20` +
              (n.rollBonus && !isNaN(n.rollBonus) ? ` +${n.rollBonus}` : ""),
            h = Za(n),
            C = `${n.criticalRange}/x${n.criticalMult}`;
          let R;
          n.rollNumber > 0
            ? (R =
                `${n.rollNumber}d20kh1` +
                (n.rollBonus && !isNaN(n.rollBonus) ? `+${n.rollBonus}` : ""))
            : (R =
                `${Math.abs(n.rollNumber) + 2}d20kl1` +
                (n.rollBonus && !isNaN(n.rollBonus) ? `+${n.rollBonus}` : ""));
          const D = new me(R.trim()),
            q = D.total,
            Q = D.output
              .substring(D.output.indexOf("[") + 1, D.output.indexOf("]"))
              .split(",");
          let X = 0;
          if (Q.length > 1)
            Q.map((O) => {
              O.includes("d") ||
                (parseInt(O) >= n.criticalRange && (X = 1),
                parseInt(O) === 1 && (X = -1),
                parseInt(O) === 1 && n.criticalRange === 1 && (X = 1));
            });
          else {
            const O = D.output.substring(
              D.output.indexOf("[") + 1,
              D.output.indexOf("]")
            );
            parseInt(O) >= n.criticalRange && (X = 1),
              parseInt(O) === 1 && (X = -1);
          }
          const ye = n.damage[0].value !== "" ? `${n.damage[0].value}` : "0";
          let Ie = 0,
            ae = "";
          if (X === 1)
            for (let O = 0; O < n.criticalMult; O++) {
              const Z = new me(ye.trim());
              (Ie += Z.total),
                (ae +=
                  Z.output.substring(
                    Z.output.indexOf(":") + 1,
                    Z.output.indexOf("=") - 1
                  ) + "+");
            }
          else {
            const O = new me(ye.trim());
            (Ie += O.total),
              (ae +=
                O.output.substring(
                  O.output.indexOf(":") + 1,
                  O.output.indexOf("=") - 1
                ) + "+");
          }
          if (n.damage.length > 1) {
            const O = [];
            for (const nt of n.damage) O.push(nt.value);
            O.splice(0, 1);
            const Z = new me(O.join("+"));
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
              damageInfo: h,
              criticalInfo: C,
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
          var h;
          try {
            const C = Ya(r);
            (w.value.title = r.name || "Attack"),
              (w.value.totalAttack = C.attackTotal),
              (w.value.totalDamage = C.damageTotal),
              (w.value.critical = C.critical),
              (w.value.attackTooltip = C.attackInfo),
              (w.value.damageTooltip = C.damageInfo),
              (w.value.attackRollTooltip = C.attackRollInfo),
              (w.value.damageRollTooltip = C.damageRollInfo),
              (w.value.criticalTooltip = C.criticalInfo),
              (w.value.skinDice = Na[4]);
            const R = {
              sender: n.name,
              timestamp: new Date().getTime(),
              content: w.value,
              contentType: "attackRoll",
              isPrivate:
                ((h = a.value) == null
                  ? void 0
                  : h.combatPrivateCreatureDice) || !1,
            };
            Ee(R), Se(), (w.value.alive = !0), y();
          } catch {
            (B.value.message = "Invalid dice"),
              (B.value.type = "error"),
              (B.value.alive = !0);
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
          const h = a.value.combats[a.value.currentCombat].creatures.findIndex(
              (R) => R.id === n.id
            ),
            C = a.value.combats[a.value.currentCombat].creatures[h];
          r === "actions"
            ? C[r].push({ id: Le(), name: "New Action" })
            : C[r].push({ id: Le(), name: "New Power" }),
            N();
        },
        Oe = (n, r = "Result") => {
          de(n, "GM", r, ce.value);
        };
      Ae(g, () => {
        g.value >= 1023
          ? S.value
            ? (f.value = k)
            : (f.value = i)
          : S.value
          ? (f.value = b)
          : (f.value = m);
      }),
        Ae(
          () => B.value.alive,
          () => {
            B.value.alive === !0 &&
              (B.value.timeout = window.setTimeout(
                () => (B.value.alive = !1),
                3e3
              ));
          }
        ),
        Ae(
          () => p.value,
          () => {
            p.value === 0 && (J.value.alive = !1);
          }
        );
      const Se = () => {
          (B.value.alive = !1), clearTimeout(B.value.timeout);
        },
        ta = (n) => {
          a.value && S.value && ((a.value.anotations[n.key] = n.value), N());
        },
        na = () => {
          var r, h;
          if (!a.value || !S.value) return;
          a.value.masterMacros || (a.value.masterMacros = []);
          const n = { title: "New Die", value: "3d20k1" };
          (h = (r = a.value) == null ? void 0 : r.masterMacros) == null ||
            h.unshift(n),
            N();
        },
        oa = (n) => {
          var r, h;
          (r = a.value) != null &&
            r.masterMacros &&
            ((h = a.value) == null || h.masterMacros.splice(n, 1), N());
        },
        sa = (n, r, h) => {
          var C;
          (C = a.value) != null &&
            C.masterMacros &&
            ((a.value.masterMacros[h][r] = n.target.value), N());
        },
        ra = (n) => {
          var C;
          if (!((C = a.value) != null && C.masterMacros)) return;
          const r = a.value.masterMacros[n].value,
            h = a.value.masterMacros[n].title;
          Oe(r, h);
        },
        Be = (n, r) => {
          let h;
          return (
            n > 0
              ? (h = `${n}d20kh1` + (r !== 0 ? `+${r}` : ""))
              : (h = `${Math.abs(n) + 2}d20kl1` + (r !== 0 ? `+${r}` : "")),
            new me(h.trim()).total
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
            for (const h of F.value) {
              const C = h.attributes[r[h.skills[11].attribute]];
              (h.initiativeValue = Be(C, h.skills[11].bonus)),
                G(V(d, "characters", h.id), h);
            }
            for (const h of a.value.combats[a.value.currentCombat].creatures)
              h.initiativeValue = Be(
                h.skills.initiative.rollNumber,
                h.skills.initiative.rollBonus || 0
              );
            a.value.combats[a.value.currentCombat].combatStarted = !0;
          }
          N();
        },
        ia = () => {
          a.value && a.value.combats && ((a.value.currentCombat = -1), N());
        },
        ca = (n, r, h, C, R, D) => {
          var Q;
          let q;
          n > 0
            ? (q = `${n}d20kh1` + (r !== 0 ? `+${r}` : ""))
            : (q = `${Math.abs(n) + 2}d20kl1` + (r !== 0 ? `+${r}` : "")),
            R
              ? de(
                  q,
                  C,
                  h,
                  (Q = a.value) == null ? void 0 : Q.combatPrivateCreatureDice
                )
              : de(q, C, h, !1, D);
        },
        ua = (n, r, h, C) => {
          var D;
          let R;
          n > 0
            ? (R = `${n}d20kh1` + (r !== 0 ? `+${r}` : ""))
            : (R = `${Math.abs(n) + 2}d20kl1` + (r !== 0 ? `+${r}` : "")),
            de(
              R,
              C,
              h,
              (D = a.value) == null ? void 0 : D.combatPrivateCreatureDice
            );
        },
        da = (n, r, h, C) => {
          de(n, h, r, !1, C);
        },
        Re = (n, r, h) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0
          )
            return;
          const C = a.value.combats[a.value.currentCombat].creatures.findIndex(
              (D) => D.id === n.id
            ),
            R = a.value.combats[a.value.currentCombat].creatures[C];
          R &&
            (h || (R.pvCurrent = r),
            h === "current" && (R.pvCurrent = r),
            h === "max" && (R.pvMax = r),
            N());
        },
        va = (n, r, h) => {
          if (
            !a.value ||
            !a.value.combats ||
            a.value.currentCombat === void 0 ||
            a.value.currentCombat < 0
          )
            return;
          const C = a.value.combats[a.value.currentCombat].creatures.find(
            (R) => R.id === n.id
          );
          if (C) {
            if (h === "actions") {
              const R = C.actions.findIndex((D) => D.id === r);
              R > -1 && C.actions.splice(R, 1);
            } else {
              const R = C.powers.findIndex((D) => D.id === r);
              R > -1 && C.powers.splice(R, 1);
            }
            N();
          }
        },
        ma = (n) => {
          ve(), (_e.value = !0), (Ce.value = n);
        },
        ha = (n, r, h) => {
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
              ].creatures.findIndex((C) => C.id === n.id)),
              h === "Action")
            ) {
              const C = n.actions.findIndex((R) => R.id === r);
              (ue.value = n.actions[C]), (ke.value = "Action");
            } else {
              const C = n.powers.findIndex((R) => R.id === r);
              (ue.value = n.powers[C]), (ke.value = "Power");
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
            const h = r.actions.findIndex((C) => C.id === n.id);
            h > -1 && (r.actions[h] = n);
          } else {
            const h = r.powers.findIndex((C) => C.id === n.id);
            h > -1 && (r.powers[h] = n);
          }
          N(), ve();
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
            (h) => h.id === n.id
          );
          r < 0 ||
            ((a.value.combats[a.value.currentCombat].creatures[r] = n),
            N(),
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
          const h = F.value.findIndex((R) => R.id === r),
            C = a.value.combats[a.value.currentCombat].creatures.findIndex(
              (R) => R.id === r
            );
          h > -1 &&
            G(V(d, "characters", F.value[h].id), { initiativeValue: n }),
            C > -1 &&
              ((a.value.combats[a.value.currentCombat].creatures[
                C
              ].initiativeValue = n),
              N());
        },
        tt = () => {
          S.value &&
            E.value &&
            ((E.value.campaignLogMessages = []),
            G(V(d, "campaignLogs", E.value.id), E.value));
        },
        fa = () => {
          var r;
          if (!a.value || !S.value) return;
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
            N();
        },
        _a = (n) => {
          var r;
          a.value &&
            S.value &&
            ((r = a.value.investigationSheets) == null || r.splice(n, 1), N());
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
            ((a.value.investigationSheets[se.value][r] = n), N());
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
            (h) => h.id === n
          );
          a.value.combats[a.value.currentCombat].creatures[r].vd &&
            (a.value.combats[a.value.currentCombat].vdTotal -=
              a.value.combats[a.value.currentCombat].creatures[r].vd),
            a.value.combats[a.value.currentCombat].creatures.splice(r, 1),
            N();
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
            N());
        },
        Ra = (n) => {
          a.value &&
            a.value.currentCombat !== void 0 &&
            a.value.combats &&
            (a.value.combats[a.value.currentCombat].currentTurn < n - 1
              ? a.value.combats[a.value.currentCombat].currentTurn++
              : ((a.value.combats[a.value.currentCombat].currentTurn = 0),
                a.value.combats[a.value.currentCombat].currentRound++),
            N());
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
            N());
        },
        Ia = () => {
          var r;
          if (!a.value || !S.value) return;
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
            N();
        },
        Aa = (n) => {
          var r;
          a.value &&
            S.value &&
            ((r = a.value.reportSheets) == null || r.splice(n, 1), N());
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
            ((a.value.reportSheets[re.value][r] = n), N());
        };
      return (n, r) => {
        var C;
        const h = ja("vue-final-modal");
        return _.value
          ? (t(), o("div", oc, [T(ut, { "page-loading": "" })]))
          : (t(),
            o("div", Ni, [
              P.value && !S.value
                ? (t(),
                  o("div", Ei, [
                    Oi,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick: r[0] || (r[0] = (R) => n.$router.push("/")),
                      },
                      " Return "
                    ),
                  ]))
                : (t(),
                  o("div", Bi, [
                    g.value >= 1023
                      ? (t(),
                        o("div", Vi, [
                          e(
                            "div",
                            {
                              class: "page-title",
                              onClick:
                                r[1] ||
                                (r[1] = (R) => {
                                  var D;
                                  return n.$router.push({
                                    name: "campaign-page",
                                    params: {
                                      id: (D = a.value) == null ? void 0 : D.id,
                                    },
                                  });
                                }),
                            },
                            A((C = a.value) == null ? void 0 : C.name),
                            1
                          ),
                          e("div", Ui, [
                            e("div", Li, [
                              E.value
                                ? (t(),
                                  M(
                                    wa,
                                    {
                                      key: 0,
                                      "master-screen": "",
                                      "is-dm": S.value,
                                      "campaign-log": E.value,
                                      onHandleCleanCampaignLog: tt,
                                    },
                                    null,
                                    8,
                                    ["is-dm", "campaign-log"]
                                  ))
                                : $("", !0),
                            ]),
                            e("div", Fi, [
                              e("div", qi, [
                                T(
                                  De,
                                  {
                                    "tab-options": f.value,
                                    "current-tab": p.value,
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
                                  p.value === 0 && a.value
                                    ? (t(),
                                      M(
                                        Ea,
                                        {
                                          key: 0,
                                          characters: F.value,
                                          campaign: a.value,
                                          "is-dm": S.value,
                                        },
                                        null,
                                        8,
                                        ["characters", "campaign", "is-dm"]
                                      ))
                                    : $("", !0),
                                ],
                                1024
                              )),
                              (t(),
                              M(
                                z,
                                null,
                                [
                                  p.value === 1 && a.value
                                    ? (t(),
                                      M(
                                        Ba,
                                        {
                                          key: 0,
                                          campaign: a.value,
                                          characters: F.value,
                                          "is-dm": S.value,
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
                                    : $("", !0),
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
                                        p.value === 2
                                          ? (t(),
                                            M(
                                              Ua,
                                              {
                                                key: 0,
                                                "is-dm": S.value,
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
                                          : $("", !0),
                                      ]))
                                    : $("", !0),
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
                                        p.value === 3
                                          ? (t(),
                                            M(
                                              La,
                                              {
                                                key: 0,
                                                campaign: a.value,
                                                "is-dm": S.value,
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
                                          : $("", !0),
                                      ]))
                                    : $("", !0),
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
                                        p.value === 4
                                          ? (t(),
                                            M(
                                              Oa,
                                              {
                                                key: 0,
                                                "dm-private-dice": ce.value,
                                                campaign: a.value,
                                                onHandleChangeDmPrivateDice:
                                                  r[2] ||
                                                  (r[2] = (R) =>
                                                    (ce.value = R)),
                                                onHandleRollMasterDices: Oe,
                                                onHandleAddDiceMacro: na,
                                                onHandleRemoveDiceMacro:
                                                  r[3] || (r[3] = (R) => oa(R)),
                                                onHandleChangeDiceMacro: sa,
                                                onHandleRollDiceMacro: ra,
                                              },
                                              null,
                                              8,
                                              ["dm-private-dice", "campaign"]
                                            ))
                                          : $("", !0),
                                      ]))
                                    : $("", !0),
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
                                        p.value === 5
                                          ? (t(),
                                            M(
                                              Va,
                                              {
                                                key: 0,
                                                campaign: a.value,
                                                onHandleChangeCampaignAnotations:
                                                  r[4] || (r[4] = (R) => ta(R)),
                                              },
                                              null,
                                              8,
                                              ["campaign"]
                                            ))
                                          : $("", !0),
                                      ]))
                                    : $("", !0),
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
                                "tab-options": f.value,
                                "current-tab": p.value,
                                onHandleNavigation: Ze,
                              },
                              null,
                              8,
                              ["tab-options", "current-tab"]
                            ),
                          ]),
                          p.value === 0
                            ? (t(),
                              o("div", Xi, [
                                (t(),
                                M(
                                  z,
                                  null,
                                  [
                                    E.value
                                      ? (t(),
                                        M(
                                          wa,
                                          {
                                            key: 0,
                                            "master-screen": "",
                                            "is-dm": S.value,
                                            "campaign-log": E.value,
                                          },
                                          null,
                                          8,
                                          ["is-dm", "campaign-log"]
                                        ))
                                      : $("", !0),
                                  ],
                                  1024
                                )),
                              ]))
                            : $("", !0),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              p.value === 1 && a.value
                                ? (t(),
                                  M(
                                    Ea,
                                    {
                                      key: 0,
                                      characters: F.value,
                                      campaign: a.value,
                                      "is-dm": S.value,
                                    },
                                    null,
                                    8,
                                    ["characters", "campaign", "is-dm"]
                                  ))
                                : $("", !0),
                            ],
                            1024
                          )),
                          (t(),
                          M(
                            z,
                            null,
                            [
                              p.value === 2 && a.value
                                ? (t(),
                                  M(
                                    Ba,
                                    {
                                      key: 0,
                                      campaign: a.value,
                                      characters: F.value,
                                      "is-dm": S.value,
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
                                : $("", !0),
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
                                    p.value === 3
                                      ? (t(),
                                        M(
                                          Ua,
                                          {
                                            key: 0,
                                            "is-dm": S.value,
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
                                      : $("", !0),
                                  ]))
                                : $("", !0),
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
                                    p.value === 4
                                      ? (t(),
                                        M(
                                          La,
                                          {
                                            key: 0,
                                            campaign: a.value,
                                            "is-dm": S.value,
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
                                      : $("", !0),
                                  ]))
                                : $("", !0),
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
                                    p.value === 5
                                      ? (t(),
                                        M(
                                          Oa,
                                          {
                                            key: 0,
                                            "dm-private-dice": ce.value,
                                            campaign: a.value,
                                            onHandleChangeDmPrivateDice:
                                              r[5] ||
                                              (r[5] = (R) => (ce.value = R)),
                                            onHandleRollMasterDices: Oe,
                                            onHandleAddDiceMacro: na,
                                            onHandleRemoveDiceMacro:
                                              r[6] || (r[6] = (R) => oa(R)),
                                            onHandleChangeDiceMacro: sa,
                                            onHandleRollDiceMacro: ra,
                                          },
                                          null,
                                          8,
                                          ["dm-private-dice", "campaign"]
                                        ))
                                      : $("", !0),
                                  ]))
                                : $("", !0),
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
                                    p.value === 6
                                      ? (t(),
                                        M(
                                          Va,
                                          {
                                            key: 0,
                                            campaign: a.value,
                                            onHandleChangeCampaignAnotations:
                                              r[7] || (r[7] = (R) => ta(R)),
                                          },
                                          null,
                                          8,
                                          ["campaign"]
                                        ))
                                      : $("", !0),
                                  ]))
                                : $("", !0),
                            ],
                            1024
                          )),
                          p.value !== 0
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
                                            pt,
                                            {
                                              key: 0,
                                              toast: J.value,
                                              onDismiss: Ja,
                                            },
                                            null,
                                            8,
                                            ["toast"]
                                          ))
                                        : $("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : $("", !0),
                          p.value !== 0
                            ? (t(),
                              o("div", ac, [
                                T(
                                  Ue,
                                  { name: "toast" },
                                  {
                                    default: oe(() => [
                                      w.value.alive
                                        ? (t(),
                                          M(
                                            bt,
                                            {
                                              key: 0,
                                              toast: w.value,
                                              onDismiss: Ye,
                                            },
                                            null,
                                            8,
                                            ["toast"]
                                          ))
                                        : $("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : $("", !0),
                        ])),
                    T(
                      Ue,
                      { name: "toast" },
                      {
                        default: oe(() => [
                          B.value.alive
                            ? (t(),
                              M(
                                Ft,
                                {
                                  key: 0,
                                  toast: B.value,
                                  type: B.value.type,
                                  onDismiss: Se,
                                },
                                null,
                                8,
                                ["toast", "type"]
                              ))
                            : $("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    Ce.value
                      ? (t(),
                        o("div", tc, [
                          T(
                            h,
                            {
                              modelValue: _e.value,
                              "onUpdate:modelValue":
                                r[8] || (r[8] = (R) => (_e.value = R)),
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
                      : $("", !0),
                    ue.value
                      ? (t(),
                        o("div", nc, [
                          T(
                            h,
                            {
                              modelValue: ge.value,
                              "onUpdate:modelValue":
                                r[9] || (r[9] = (R) => (ge.value = R)),
                              classes: "modal-container",
                            },
                            {
                              default: oe(() => [
                                T(
                                  St,
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
                      : $("", !0),
                  ])),
            ]));
      };
    },
  }),
  jc = L(sc, [["__scopeId", "data-v-f87af0af"]]);
export { jc as default };

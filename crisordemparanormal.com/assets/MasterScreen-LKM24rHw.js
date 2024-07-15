import {
  d as V,
  f as z,
  o,
  c as i,
  a as e,
  m as $,
  t as I,
  H as xe,
  L as Ca,
  k as M,
  v as S,
  p as J,
  b as Z,
  _ as B,
  n as X,
  q as ee,
  r as y,
  C as la,
  D as ra,
  E as ia,
  J as ca,
  g as Ie,
  h as $a,
  a1 as ka,
  e as ua,
  M as Ra,
  u as ya,
  S as Da,
  A as Aa,
  P as j,
  Z as ye,
  R as Ia,
  F as Sa,
  B as Ma,
  $ as Ha,
  w as _e,
  i as Ta,
  a2 as Q,
  x as se,
  T as De,
  N as le,
} from "./index-G0kqgsTS.js";
import { L as Ea } from "./LoadingView-KgVPmtmJ.js";
import {
  I as x,
  n as wa,
  A as Pa,
  F as Oa,
  a as Na,
  u as La,
  C as ea,
  d as Va,
  r as Ba,
  T as Ua,
  b as Fa,
  c as qa,
  f as Ga,
  e as Ka,
  D as re,
} from "./ToastAttack-AWp9Nhhl.js";
import { T as Ae } from "./TabNav-BeBvdktQ.js";
import { _ as Se } from "./d20-icon-vaz1En3o.js";
import { S as Qa } from "./SwitchButtonBool-PtqQN5uL.js";
import { C as za } from "./CombatCard-pPoi0V9B.js";
import { C as Wa, A as ja } from "./ActionModal-IT_b3eD8.js";
import { g as Xa } from "./firebase-IQne05Px.js";
import { P as Ja } from "./PrivateFeat-mx45qQCY.js";
import { T as Za } from "./ToastNotification-ywErXxhn.js";
import { C as Ya } from "./CreatureForm-sl0nKuzZ.js";
import { s as xa } from "./skins-DFWuoMc3.js";
import { v as aa } from "./v4-cyCr5FZV.js";
import "./edit-icon-u1vf_q3w.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./attributes-pd1IMHTT.js";
import "./show-more-icon-VvUXKiHG.js";
import "./creatureData-ozdxpDUT.js";
import "./default-dSfWXGfL.js";
import "./forms-8DDAOOVU.js";
import "./lodash-gzw5KmHd.js";
import "./DropdownSimple-iHiW9O37.js";
import "./blank-profile-picture-wMh28flS.js";
import "./PictureModal-Dv2XHKLG.js";
import "./index.esm2017-FN2KD4VC.js";
const q = (v) => (J("data-v-df2547a9"), (v = v()), Z(), v),
  et = { class: "char-status-card-container" },
  at = { class: "header" },
  tt = { key: 0 },
  nt = ["src"],
  ot = { key: 0, class: "agent-name" },
  st = { key: 1, class: "agent-name" },
  lt = { class: "basic-info" },
  rt = { class: "basic-info" },
  it = { key: 2, class: "basic-combat-info" },
  ct = { key: 0 },
  ut = { key: 1 },
  dt = { key: 3, class: "basic-combat-info" },
  vt = { key: 0 },
  mt = { key: 1 },
  ht = { class: "attributes-container" },
  pt = { class: "combat-info" },
  ft = q(() => e("div", null, "AGI", -1)),
  _t = { class: "combat-info-value" },
  bt = { class: "combat-info" },
  gt = q(() => e("div", null, "STR", -1)),
  Ct = { class: "combat-info-value" },
  $t = { class: "combat-info" },
  kt = q(() => e("div", null, "INT", -1)),
  Rt = { class: "combat-info-value" },
  yt = { class: "combat-info" },
  Dt = q(() => e("div", null, "PRE", -1)),
  At = { class: "combat-info-value" },
  It = { class: "combat-info" },
  St = q(() => e("div", null, "VIG", -1)),
  Mt = { class: "combat-info-value" },
  Ht = { class: "bars-container" },
  Tt = { class: "combat-info-container-first" },
  Et = { class: "combat-info-row" },
  wt = q(() => e("div", null, "EP/TURN: ", -1)),
  Pt = { class: "combat-info-value" },
  Ot = { class: "combat-info-row" },
  Nt = q(() => e("div", null, "SPD: ", -1)),
  Lt = { class: "combat-info-value" },
  Vt = { class: "combat-info-container" },
  Bt = { class: "combat-info" },
  Ut = q(() => e("div", null, "DEFESE", -1)),
  Ft = { class: "combat-info-value" },
  qt = { class: "combat-info" },
  Gt = q(() => e("div", null, "BLOCK DR", -1)),
  Kt = { class: "combat-info-value" },
  Qt = { class: "combat-info" },
  zt = q(() => e("div", null, "DODGE", -1)),
  Wt = { class: "combat-info-value" },
  jt = V({
    __name: "CharStatusCard",
    props: { character: {} },
    setup(v) {
      const u = v,
        C = "https://crisordemparanormal.com/" + "agente/" + u.character.id,
        _ = z(() =>
          u.character.movement === 0 ? 0 : u.character.movement / 1.5
        ),
        T = z(() => {
          const l =
            10 +
            u.character.attributes.dex +
            u.character.protectionDefense +
            u.character.bonusDefense;
          return l > 0 ? l : 0;
        }),
        R = z(() => u.character.skills[9].bonus),
        b = z(() => u.character.skills[20].bonus + T.value);
      return (l, D) => (
        o(),
        i("div", et, [
          e("div", at, [
            l.character.sheetPictureURL
              ? (o(),
                i("div", tt, [
                  e(
                    "img",
                    {
                      class: "card-img",
                      src: l.character.sheetPictureURL,
                      alt: "foto agente",
                    },
                    null,
                    8,
                    nt
                  ),
                ]))
              : $("", !0),
            e("div", null, [
              l.character.name !== ""
                ? (o(), i("div", ot, I(l.character.name), 1))
                : (o(), i("div", st, " [Sem nome] ")),
              e("div", lt, I(l.character.className), 1),
              e("div", rt, I(l.character.backgroundName), 1),
              l.character.isNexLevelOn
                ? (o(),
                  i("div", dt, [
                    xe(" LEVEL: "),
                    l.character.statsClass !== "Mundane"
                      ? (o(), i("span", vt, I(Ca(wa)[l.character.nex]), 1))
                      : (o(), i("span", mt, "0")),
                  ]))
                : (o(),
                  i("div", it, [
                    xe(" NEX: "),
                    l.character.statsClass !== "Mundane"
                      ? (o(), i("span", ct, I(l.character.nex), 1))
                      : (o(), i("span", ut, "0%")),
                  ])),
            ]),
          ]),
          e("div", ht, [
            e("div", pt, [ft, e("div", _t, I(l.character.attributes.dex), 1)]),
            e("div", bt, [gt, e("div", Ct, I(l.character.attributes.str), 1)]),
            e("div", $t, [kt, e("div", Rt, I(l.character.attributes.int), 1)]),
            e("div", yt, [Dt, e("div", At, I(l.character.attributes.pre), 1)]),
            e("div", It, [St, e("div", Mt, I(l.character.attributes.con), 1)]),
          ]),
          e("div", Ht, [
            M(
              x,
              {
                type: "pv",
                "disabled-sheet": "",
                "master-screen": "",
                "max-value": l.character.maxPv,
                "current-value": l.character.currentPv,
                marks: l.character.deathMarks,
                "mark-mode": l.character.deathMode,
              },
              null,
              8,
              ["max-value", "current-value", "marks", "mark-mode"]
            ),
            l.character.isPdOn
              ? $("", !0)
              : (o(),
                S(
                  x,
                  {
                    key: 0,
                    type: "san",
                    "disabled-sheet": "",
                    "master-screen": "",
                    "max-value": l.character.maxSan,
                    "current-value": l.character.currentSan,
                    marks: l.character.madnessMarks,
                    "mark-mode": l.character.madnessMode,
                  },
                  null,
                  8,
                  ["max-value", "current-value", "marks", "mark-mode"]
                )),
            l.character.isPdOn
              ? $("", !0)
              : (o(),
                S(
                  x,
                  {
                    key: 1,
                    type: "pe",
                    "disabled-sheet": "",
                    "master-screen": "",
                    "max-value": l.character.maxPe,
                    "current-value": l.character.currentPe,
                  },
                  null,
                  8,
                  ["max-value", "current-value"]
                )),
            l.character.isPdOn
              ? (o(),
                S(
                  x,
                  {
                    key: 2,
                    type: "pd",
                    "disabled-sheet": "",
                    "master-screen": "",
                    "max-value": l.character.maxPd,
                    "current-value": l.character.currentPd,
                    marks: l.character.pdMarks,
                    "mark-mode": l.character.pdMode,
                  },
                  null,
                  8,
                  ["max-value", "current-value", "marks", "mark-mode"]
                ))
              : $("", !0),
          ]),
          e("div", Tt, [
            e("div", Et, [wt, e("span", Pt, I(l.character.peTurn), 1)]),
            e("div", Ot, [
              Nt,
              e(
                "span",
                Lt,
                I(l.character.movement) + "m / " + I(_.value) + "sq ",
                1
              ),
            ]),
          ]),
          e("div", Vt, [
            e("div", Bt, [Ut, e("div", Ft, I(T.value), 1)]),
            e("div", qt, [
              Gt,
              e("div", Kt, I(l.character.block || R.value), 1),
            ]),
            e("div", Qt, [
              zt,
              e("div", Wt, I(l.character.evade || b.value), 1),
            ]),
          ]),
          e("div", { class: "footer" }, [
            e(
              "a",
              { class: "sheet-link", href: C, target: "_blank" },
              " Sheet "
            ),
          ]),
        ])
      );
    },
  }),
  Xt = B(jt, [["__scopeId", "data-v-df2547a9"]]),
  Jt = (v) => (J("data-v-cd3d2f92"), (v = v()), Z(), v),
  Zt = { key: 0, class: "master-screen-chars-container" },
  Yt = { key: 1, class: "no-chars-message" },
  xt = Jt(() => e("h3", null, "There are no agents on this campaign", -1)),
  en = [xt],
  an = V({
    __name: "MasterScreenChars",
    props: { characters: {} },
    setup(v) {
      return (u, m) =>
        u.characters.length > 0
          ? (o(),
            i("div", Zt, [
              (o(!0),
              i(
                X,
                null,
                ee(
                  u.characters,
                  (C) => (
                    o(),
                    i("div", { key: C.id }, [
                      M(Xt, { character: C }, null, 8, ["character"]),
                    ])
                  )
                ),
                128
              )),
            ]))
          : (o(), i("div", Yt, en));
    },
  }),
  ta = B(an, [["__scopeId", "data-v-cd3d2f92"]]),
  Me = (v) => (J("data-v-91a251a9"), (v = v()), Z(), v),
  tn = { class: "add-dices-button-container" },
  nn = { class: "input-container" },
  on = { class: "roll-dices-container" },
  sn = ["onKeyup"],
  ln = Me(() =>
    e("img", { class: "dice-icon", src: Se, alt: "rolar" }, null, -1)
  ),
  rn = [ln],
  cn = { class: "master-macro-container" },
  un = { class: "master-macro" },
  dn = { class: "master-macro-inputs-container" },
  vn = ["value", "onBlur"],
  mn = ["value", "onBlur"],
  hn = { class: "master-macro-card-buttons-container" },
  pn = ["onClick"],
  fn = Me(() =>
    e("img", { class: "close-icon", src: ca, alt: "fechar" }, null, -1)
  ),
  _n = [fn],
  bn = ["onClick"],
  gn = Me(() =>
    e("img", { class: "dice-icon", src: Se, alt: "rolar" }, null, -1)
  ),
  Cn = [gn],
  $n = V({
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
    setup(v, { emit: u }) {
      const m = u,
        C = y(""),
        _ = () => {
          m("handleRollMasterDices", C.value), (C.value = "");
        },
        T = ["PUBLIC", "PRIVATE"];
      return (R, b) => (
        o(),
        i(
          X,
          null,
          [
            e("div", tn, [
              e(
                "button",
                {
                  class: "button-primary",
                  onClick:
                    b[0] || (b[0] = (l) => R.$emit("handleAddDiceMacro")),
                },
                " Add Dice "
              ),
            ]),
            e("div", nn, [
              e("div", on, [
                la(
                  e(
                    "input",
                    {
                      "onUpdate:modelValue":
                        b[1] || (b[1] = (l) => (C.value = l)),
                      type: "text",
                      class: "roll-dice-input",
                      placeholder: "Roll dice",
                      onKeyup: ia(_, ["enter"]),
                    },
                    null,
                    40,
                    sn
                  ),
                  [[ra, C.value]]
                ),
                e("button", { class: "dice-button", onClick: _ }, rn),
              ]),
              M(
                Qa,
                {
                  value: R.dmPrivateDice,
                  options: T,
                  onHandleChange:
                    b[2] ||
                    (b[2] = (l) => R.$emit("handleChangeDmPrivateDice", l)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", cn, [
              (o(!0),
              i(
                X,
                null,
                ee(
                  R.campaign.masterMacros,
                  (l, D) => (
                    o(),
                    i("div", { key: D, class: "master-macro-card" }, [
                      e("div", un, [
                        e("div", dn, [
                          e(
                            "input",
                            {
                              value: l.title,
                              type: "text",
                              class: "master-macro-input-title",
                              placeholder: "Nome",
                              onBlur: (g) =>
                                R.$emit("handleChangeDiceMacro", g, "title", D),
                            },
                            null,
                            40,
                            vn
                          ),
                          e(
                            "input",
                            {
                              value: l.value,
                              type: "text",
                              class: "master-macro-input",
                              placeholder: "Value",
                              onBlur: (g) =>
                                R.$emit("handleChangeDiceMacro", g, "value", D),
                            },
                            null,
                            40,
                            mn
                          ),
                        ]),
                        e("div", hn, [
                          e(
                            "button",
                            {
                              class: "close-button",
                              onClick: (g) =>
                                R.$emit("handleRemoveDiceMacro", D),
                            },
                            _n,
                            8,
                            pn
                          ),
                          e(
                            "button",
                            {
                              class: "dice-button",
                              onClick: (g) => R.$emit("handleRollDiceMacro", D),
                            },
                            Cn,
                            8,
                            bn
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
  na = B($n, [["__scopeId", "data-v-91a251a9"]]),
  kn = (v) => (J("data-v-ff197a3e"), (v = v()), Z(), v),
  Rn = { class: "initiative-order-container" },
  yn = ["onClick"],
  Dn = { class: "initiative-container" },
  An = kn(() => e("div", { class: "iniative-label" }, " INITIATIVE ", -1)),
  In = ["value", "onBlur"],
  Sn = { key: 0, class: "profile-picture-container" },
  Mn = ["src"],
  Hn = { key: 1, class: "profile-picture-placeholder" },
  Tn = { class: "card-name" },
  En = V({
    __name: "InitiativeOrder",
    props: { currentCombat: {}, characters: {}, isDm: { type: Boolean } },
    emits: ["handleSelectSheet", "handleChangeInitiative"],
    setup(v, { emit: u }) {
      const m = v,
        C = u,
        _ = Ie(),
        T = z(() => {
          const l = m.characters.concat(m.currentCombat.creatures);
          return (
            l.sort(
              (D, g) => (
                D.initiativeValue || (D.initiativeValue = 0),
                g.initiativeValue || (g.initiativeValue = 0),
                g.initiativeValue - D.initiativeValue
              )
            ),
            l
          );
        }),
        R = (l, D) => {
          const g = l.target.valueAsNumber;
          C("handleChangeInitiative", g, D);
        },
        b = (l) => {
          if (m.isDm) {
            C("handleSelectSheet", l);
            return;
          }
          _.currentUser &&
            _.currentUser.uid ===
              m.characters[m.characters.findIndex((D) => D.id === l)].uid &&
            C("handleSelectSheet", l);
        };
      return (l, D) => (
        o(),
        i("div", Rn, [
          (o(!0),
          i(
            X,
            null,
            ee(
              T.value,
              (g) => (
                o(),
                i("div", { key: g.id, class: "initiative-card-container" }, [
                  e(
                    "div",
                    { class: "order-card-row", onClick: (r) => b(g.id || "") },
                    [
                      e("div", Dn, [
                        An,
                        e(
                          "input",
                          {
                            value: g.initiativeValue,
                            type: "number",
                            class: "sheet-input initiative-input",
                            onBlur: (r) => R(r, g.id || ""),
                          },
                          null,
                          40,
                          In
                        ),
                      ]),
                      g.sheetPictureURL
                        ? (o(),
                          i("div", Sn, [
                            e(
                              "img",
                              {
                                class: "profile-picture",
                                src: g.sheetPictureURL,
                                alt: "foto agente",
                              },
                              null,
                              8,
                              Mn
                            ),
                          ]))
                        : (o(), i("div", Hn)),
                      e("div", Tn, I(g.name), 1),
                    ],
                    8,
                    yn
                  ),
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  wn = B(En, [["__scopeId", "data-v-ff197a3e"]]),
  Pn = { class: "character-header-container" },
  On = { key: 0 },
  Nn = ["src"],
  Ln = { class: "info-container" },
  Vn = { class: "info-row header-row" },
  Bn = { class: "data-container" },
  Un = { class: "info-column" },
  Fn = ["title"],
  qn = { class: "info-row" },
  Gn = { class: "info-text" },
  Kn = { class: "info-bar-wrapper" },
  Qn = V({
    __name: "CharacterCombatSheetHeader",
    props: { character: {} },
    setup(v) {
      return (u, m) => (
        o(),
        i("div", Pn, [
          e("div", null, [
            u.character.sheetPictureURL
              ? (o(),
                i("div", On, [
                  e(
                    "img",
                    {
                      class: "character-picture",
                      src: u.character.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    Nn
                  ),
                ]))
              : $("", !0),
          ]),
          e("div", Ln, [
            e("div", Vn, [
              e("div", Bn, [
                e("div", Un, [
                  e(
                    "div",
                    { class: "character-name", title: u.character.name },
                    I(u.character.name),
                    9,
                    Fn
                  ),
                  e("div", qn, [
                    e(
                      "div",
                      Gn,
                      I(u.character.className) +
                        " - PEX: " +
                        I(u.character.nex),
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", Kn, [
              M(
                x,
                {
                  type: "pv",
                  "max-value": u.character.maxPv,
                  "current-value": u.character.currentPv,
                  marks: u.character.deathMarks,
                  "mark-mode": u.character.deathMode,
                  "combat-sheet": "",
                  "master-screen": "",
                  "disabled-sheet": "",
                },
                null,
                8,
                ["max-value", "current-value", "marks", "mark-mode"]
              ),
              M(
                x,
                {
                  type: "san",
                  character: u.character,
                  "max-value": u.character.maxSan,
                  "current-value": u.character.currentSan,
                  marks: u.character.madnessMarks,
                  "mark-mode": u.character.madnessMode,
                  "combat-sheet": "",
                  "master-screen": "",
                  "disabled-sheet": "",
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
              ),
              M(
                x,
                {
                  type: "pe",
                  character: u.character,
                  "max-value": u.character.maxPe,
                  "current-value": u.character.currentPe,
                  "combat-sheet": "",
                  "master-screen": "",
                  "disabled-sheet": "",
                },
                null,
                8,
                ["character", "max-value", "current-value"]
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  zn = B(Qn, [["__scopeId", "data-v-d1624f56"]]),
  be = (v) => (J("data-v-6a4e9f30"), (v = v()), Z(), v),
  Wn = { class: "stats-row" },
  jn = { class: "stats-container" },
  Xn = be(() => e("div", { class: "stats-label" }, " DEFENSE ", -1)),
  Jn = { class: "stats-value" },
  Zn = { class: "stats-container" },
  Yn = be(() => e("div", { class: "stats-label" }, " BLOCK DR ", -1)),
  xn = { class: "stats-value" },
  eo = { class: "stats-container" },
  ao = be(() => e("div", { class: "stats-label" }, " DODGE ", -1)),
  to = { class: "stats-value" },
  no = { class: "stats-container" },
  oo = be(() => e("div", { class: "stats-label" }, " SPEED ", -1)),
  so = { class: "stats-value" },
  lo = V({
    __name: "CharacterCombatSheetStats",
    props: { character: {} },
    emits: ["handleRollAttribute"],
    setup(v) {
      const u = v,
        m = z(() => {
          const _ =
            10 +
            u.character.attributes.dex +
            u.character.protectionDefense +
            u.character.bonusDefense;
          return _ > 0 ? _ : 0;
        }),
        C = z(() =>
          u.character.movement === 0 ? 0 : u.character.movement / 1.5
        );
      return (_, T) => (
        o(),
        i(
          X,
          null,
          [
            M(
              Pa,
              {
                character: _.character,
                "disabled-sheet": !1,
                "combat-sheet": "",
                onHandleRollAttribute:
                  T[0] || (T[0] = (R) => _.$emit("handleRollAttribute", R)),
              },
              null,
              8,
              ["character"]
            ),
            e("div", Wn, [
              e("div", jn, [Xn, e("div", Jn, I(m.value), 1)]),
              e("div", Zn, [Yn, e("div", xn, I(_.character.block), 1)]),
              e("div", eo, [ao, e("div", to, I(_.character.evade), 1)]),
              e("div", no, [
                oo,
                e(
                  "div",
                  so,
                  I(_.character.movement) + "m /" + I(C.value) + "sq ",
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
  ro = B(lo, [["__scopeId", "data-v-6a4e9f30"]]),
  He = (v) => (J("data-v-c14dc827"), (v = v()), Z(), v),
  io = { class: "character-combat-container" },
  co = { key: 0 },
  uo = { class: "roll-dices-container" },
  vo = ["onKeyup"],
  mo = He(() =>
    e("img", { class: "dice-icon", src: Se, alt: "rolar" }, null, -1)
  ),
  ho = [mo],
  po = { key: 1 },
  fo = { key: 0 },
  _o = { key: 1, class: "no-content" },
  bo = He(() => e("h3", null, "No attack found", -1)),
  go = [bo],
  Co = { key: 2, class: "no-content" },
  $o = He(() => e("h3", null, "You have no attacks", -1)),
  ko = [$o],
  Ro = V({
    __name: "CharacterCombatSheetCombat",
    props: { character: {} },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(v, { emit: u }) {
      const m = v,
        C = u,
        _ = y(""),
        T = y(""),
        R = () => {
          C("handleRollDices", _.value), (_.value = "");
        },
        b = (D) => {
          C("handleRollAttack", D);
        },
        l = z(() =>
          [...m.character.attacks].filter((g) => $a(g.name, T.value))
        );
      return (D, g) => (
        o(),
        i("div", io, [
          D.character.attacks.length > 0
            ? (o(),
              i("div", co, [
                M(
                  Oa,
                  {
                    value: T.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: g[0] || (g[0] = (r) => (T.value = r)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : $("", !0),
          e("div", uo, [
            la(
              e(
                "input",
                {
                  "onUpdate:modelValue": g[1] || (g[1] = (r) => (_.value = r)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: !1,
                  onKeyup: ia(R, ["enter"]),
                },
                null,
                40,
                vo
              ),
              [[ra, _.value]]
            ),
            e(
              "button",
              {
                class: ka(["dice-button", { disabled: !1 }]),
                disabled: !1,
                onClick: R,
              },
              ho
            ),
          ]),
          D.character.attacks.length > 0
            ? (o(),
              i("div", po, [
                l.value.length > 0
                  ? (o(),
                    i("div", fo, [
                      (o(!0),
                      i(
                        X,
                        null,
                        ee(
                          l.value,
                          (r) => (
                            o(),
                            i("div", { key: r.id, class: "align-card" }, [
                              M(
                                Na,
                                {
                                  id: r.id,
                                  attack: r,
                                  "disabled-edit": "",
                                  onHandleRemoveAttack:
                                    g[2] ||
                                    (g[2] = (p) =>
                                      D.$emit("handleRemoveAttack", p)),
                                  onHandleEdit: (p) =>
                                    D.$emit("handleEditAttack", p),
                                  onHandleRollAttack: b,
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
                  : (o(), i("div", _o, go)),
              ]))
            : (o(), i("div", Co, ko)),
        ])
      );
    },
  }),
  yo = B(Ro, [["__scopeId", "data-v-c14dc827"]]),
  Do = { class: "character-sheet-container" },
  Ao = { class: "tab-nav-container" },
  Io = { class: "character-sheet-content-container" },
  So = V({
    __name: "CharacterCombatSheet",
    props: { character: {} },
    emits: ["handleRollAttribute", "handleRollDices", "handleRollAttack"],
    setup(v, { emit: u }) {
      const m = v,
        C = u,
        _ = [
          { label: "ATTRIBUTES", value: 0 },
          { label: "COMBAT", value: 1 },
        ],
        T = {
          str: "Strength",
          dex: "Agility",
          int: "Intellect",
          pre: "Presence",
          con: "Vigor",
        },
        R = y(1),
        b = (r) => (R.value = r),
        l = (r) => {
          C(
            "handleRollAttribute",
            m.character.attributes[r],
            T[r],
            m.character.name
          );
        },
        D = (r) => {
          C("handleRollDices", r, "Results", m.character.name);
        },
        g = (r) => {
          C("handleRollAttack", m.character, r);
        };
      return (r, p) => (
        o(),
        i("div", Do, [
          M(zn, { character: r.character }, null, 8, ["character"]),
          e("div", Ao, [
            M(
              Ae,
              {
                "tab-options": _,
                "current-tab": R.value,
                onHandleNavigation: b,
              },
              null,
              8,
              ["current-tab"]
            ),
          ]),
          e("div", Io, [
            R.value === 0
              ? (o(),
                S(
                  ro,
                  { key: 0, character: r.character, onHandleRollAttribute: l },
                  null,
                  8,
                  ["character"]
                ))
              : $("", !0),
            R.value === 1
              ? (o(),
                S(
                  yo,
                  {
                    key: 1,
                    character: r.character,
                    onHandleRollDices: D,
                    onHandleRollAttack: g,
                  },
                  null,
                  8,
                  ["character"]
                ))
              : $("", !0),
          ]),
        ])
      );
    },
  }),
  Mo = B(So, [["__scopeId", "data-v-f8950f4c"]]),
  Ho = { class: "master-combats-container" },
  To = { key: 0, class: "combat-container" },
  Eo = { class: "combat-header" },
  wo = { class: "combat-name" },
  Po = { class: "combat-content-container" },
  Oo = { class: "initiative-container" },
  No = { class: "combat-sheet-container" },
  Lo = { key: 0 },
  Vo = { key: 0 },
  Bo = { key: 1 },
  Uo = { key: 1, class: "no-sheet-text" },
  Fo = { key: 1 },
  qo = { key: 0 },
  Go = { key: 0, class: "cards-container" },
  Ko = { key: 1 },
  Qo = V({
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
    ],
    setup(v, { emit: u }) {
      const m = v,
        C = u,
        _ = y(),
        T = Ie(),
        R = y(!0),
        b = y(0);
      ua(async () => {
        T.currentUser &&
          ((b.value = await Xa(T.currentUser.uid)), (R.value = !1));
      });
      const l = () => {
          (_.value = void 0), C("handleFinishCombat");
        },
        D = (r) => {
          if (
            !m.campaign.combats ||
            m.campaign.currentCombat === void 0 ||
            m.campaign.currentCombat < 0
          )
            return;
          if (m.campaign.combats[m.campaign.currentCombat].creatures) {
            const h = m.campaign.combats[
              m.campaign.currentCombat
            ].creatures.findIndex((f) => f.id === r);
            h > -1 && (_.value = { index: h, type: "creature" });
          }
          const p = m.characters.findIndex((h) => h.id === r);
          p > -1 && (_.value = { index: p, type: "character" });
        },
        g = z(
          () =>
            !(
              !m.campaign.combats ||
              m.campaign.currentCombat === void 0 ||
              m.campaign.currentCombat < 0
            )
        );
      return (r, p) => (
        o(),
        i("div", Ho, [
          r.campaign.combats &&
          r.campaign.currentCombat !== void 0 &&
          r.campaign.currentCombat > -1 &&
          g.value
            ? (o(),
              i("div", To, [
                e("div", Eo, [
                  e(
                    "div",
                    wo,
                    I(r.campaign.combats[r.campaign.currentCombat].name),
                    1
                  ),
                  r.isDm
                    ? (o(),
                      i(
                        "button",
                        { key: 0, class: "button-secondary", onClick: l },
                        " Finish Encounter "
                      ))
                    : $("", !0),
                ]),
                e("div", Po, [
                  e("div", Oo, [
                    M(
                      wn,
                      {
                        characters: r.characters,
                        "is-dm": r.isDm,
                        "current-combat":
                          r.campaign.combats[r.campaign.currentCombat],
                        onHandleSelectSheet: D,
                        onHandleChangeInitiative:
                          p[0] ||
                          (p[0] = (h, f) =>
                            r.$emit("handleChangeInitiative", h, f)),
                      },
                      null,
                      8,
                      ["characters", "is-dm", "current-combat"]
                    ),
                  ]),
                  e("div", No, [
                    _.value
                      ? (o(),
                        i("div", Lo, [
                          _.value.type === "creature"
                            ? (o(),
                              i("div", Vo, [
                                M(
                                  Wa,
                                  {
                                    creature:
                                      r.campaign.combats[
                                        r.campaign.currentCombat
                                      ].creatures[_.value.index],
                                    onHandleChangePvField:
                                      p[1] ||
                                      (p[1] = (h, f, A) =>
                                        r.$emit(
                                          "handleChangeCreaturePvField",
                                          h,
                                          f,
                                          A
                                        )),
                                    onHandleChangePv:
                                      p[2] ||
                                      (p[2] = (h, f) =>
                                        r.$emit(
                                          "handleChangeCreaturePv",
                                          h,
                                          f
                                        )),
                                    onHandleRollAttribute:
                                      p[3] ||
                                      (p[3] = (h, f, A) =>
                                        r.$emit("handleRollAttr", h, 0, f, A)),
                                    onHandleAttack:
                                      p[4] ||
                                      (p[4] = (h, f) =>
                                        r.$emit(
                                          "handleRollCreatureAttack",
                                          h,
                                          f
                                        )),
                                    onHandleAdd:
                                      p[5] ||
                                      (p[5] = (h, f) =>
                                        r.$emit("handleAddCreatureCard", h, f)),
                                    onHandleRemoveAction:
                                      p[6] ||
                                      (p[6] = (h, f, A) =>
                                        r.$emit("handleRemoveAction", h, f, A)),
                                    onHandleEditCreature:
                                      p[7] ||
                                      (p[7] = (h) =>
                                        r.$emit("handleEditCreature", h)),
                                    onHandleEditCreatureAction:
                                      p[8] ||
                                      (p[8] = (h, f, A) =>
                                        r.$emit(
                                          "handleEditCreatureAction",
                                          h,
                                          f,
                                          A
                                        )),
                                    onHandleRollSkill:
                                      p[9] ||
                                      (p[9] = (h, f, A, ae) =>
                                        r.$emit(
                                          "handleRollCreatureSkill",
                                          h,
                                          f,
                                          A,
                                          ae
                                        )),
                                  },
                                  null,
                                  8,
                                  ["creature"]
                                ),
                              ]))
                            : (o(),
                              i("div", Bo, [
                                M(
                                  Mo,
                                  {
                                    character: r.characters[_.value.index],
                                    onHandleRollAttribute:
                                      p[10] ||
                                      (p[10] = (h, f, A) =>
                                        r.$emit("handleRollAttr", h, 0, f, A)),
                                    onHandleRollDices:
                                      p[11] ||
                                      (p[11] = (h, f, A) =>
                                        r.$emit("handleRollDices", h, f, A)),
                                    onHandleRollAttack:
                                      p[12] ||
                                      (p[12] = (h, f) =>
                                        r.$emit(
                                          "handleRollCharacterAttack",
                                          h,
                                          f
                                        )),
                                  },
                                  null,
                                  8,
                                  ["character"]
                                ),
                              ])),
                        ]))
                      : (o(),
                        i(
                          "div",
                          Uo,
                          " Select the sheet on the initiative tracker to add it here "
                        )),
                  ]),
                ]),
              ]))
            : (o(),
              i("div", Fo, [
                r.isDm
                  ? (o(),
                    i("div", qo, [
                      b.value >= 3
                        ? (o(),
                          i("div", Go, [
                            (o(!0),
                            i(
                              X,
                              null,
                              ee(
                                r.campaign.combats,
                                (h, f) => (
                                  o(),
                                  i("div", { key: h.id }, [
                                    M(
                                      za,
                                      {
                                        combat: h,
                                        "is-master-screen": "",
                                        onHandleStart: (A) =>
                                          r.$emit("handleStartCombat", f),
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
                        : (o(), i("div", Ko, [M(Ja)])),
                    ]))
                  : $("", !0),
              ])),
        ])
      );
    },
  }),
  oa = B(Qo, [["__scopeId", "data-v-27c49579"]]),
  zo = { class: "textarea-container" },
  Wo = ["placeholder", "value", "onBlur"],
  jo = V({
    __name: "MasterAnotations",
    props: { campaign: {} },
    emits: ["handleChangeCampaignAnotations"],
    setup(v, { emit: u }) {
      const m = u,
        C = [
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
        _ = (T, R) => {
          const b = { value: T.target.value, key: R };
          m("handleChangeCampaignAnotations", b);
        };
      return (T, R) => (
        o(),
        i(
          X,
          null,
          ee(C, (b) =>
            e("div", { key: b.title }, [
              e("div", zo, [
                e("h3", null, I(b.title), 1),
                e(
                  "textarea",
                  {
                    class: "textarea description-tab-size",
                    rows: "5",
                    placeholder: b.placeholder,
                    value: T.campaign.anotations[b.key],
                    onBlur: (l) => _(l, b.key),
                  },
                  `\r
      `,
                  40,
                  Wo
                ),
              ]),
            ])
          ),
          64
        )
      );
    },
  }),
  sa = B(jo, [["__scopeId", "data-v-a9aa04a0"]]),
  da = (v) => (J("data-v-a513e168"), (v = v()), Z(), v),
  Xo = { class: "modal-content modal-width" },
  Jo = { class: "modal-header" },
  Zo = da(() => e("h2", null, "Threat", -1)),
  Yo = da(() =>
    e("img", { class: "close-icon", src: ca, alt: "fechar" }, null, -1)
  ),
  xo = [Yo],
  es = { class: "modal-body modal-height" },
  as = V({
    __name: "CreatureModal",
    props: { creature: {} },
    emits: ["handleEditCreature", "handleCloseModal"],
    setup(v) {
      return (u, m) => (
        o(),
        i("div", Xo, [
          e("div", Jo, [
            Zo,
            e(
              "button",
              { onClick: m[0] || (m[0] = (C) => u.$emit("handleCloseModal")) },
              xo
            ),
          ]),
          e("div", es, [
            M(
              Ya,
              {
                creature: u.creature,
                "no-padding": "",
                onHandleEdit:
                  m[1] || (m[1] = (C) => u.$emit("handleEditCreature", C)),
                onHandleClose:
                  m[2] || (m[2] = (C) => u.$emit("handleCloseModal")),
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
  ts = B(as, [["__scopeId", "data-v-a513e168"]]),
  ns = (v) => (J("data-v-8ca3889b"), (v = v()), Z(), v),
  os = { key: 0 },
  ss = { key: 0, class: "private-master-screen" },
  ls = ns(() => e("h1", null, "Private DM Screen", -1)),
  rs = { key: 1 },
  is = { key: 0, class: "screen-master-container" },
  cs = { class: "screen-master-content" },
  us = { class: "small-screen-log-container" },
  ds = { class: "tab-content-container" },
  vs = { class: "tab-nav-container" },
  ms = { key: 0 },
  hs = { key: 0 },
  ps = { key: 1, class: "screen-master-container" },
  fs = { class: "tab-nav-container" },
  _s = { key: 0 },
  bs = { key: 0 },
  gs = { key: 0 },
  Cs = { key: 1 },
  $s = { key: 2 },
  ks = { key: 2 },
  Rs = { key: 3 },
  ys = { key: 1 },
  Ds = V({
    __name: "MasterScreen",
    setup(v) {
      const { play: u } = La(Va),
        m = [
          { label: "AGENTS", value: 0 },
          { label: "ENCOUNTERS", value: 1 },
        ],
        C = [
          { label: "AGENTS", value: 0 },
          { label: "ENCOUNTERS", value: 1 },
          { label: "DM'S DICE", value: 2 },
          { label: "DM'S NOTES", value: 3 },
        ],
        _ = [
          { label: "LOG", value: 0 },
          { label: "AGENTS", value: 1 },
          { label: "ENCOUNTERS", value: 2 },
        ],
        T = [
          { label: "LOG", value: 0 },
          { label: "AGENTS", value: 1 },
          { label: "ENCOUNTERS", value: 2 },
          { label: "DM'S DICE", value: 3 },
          { label: "DM'S NOTES", value: 4 },
        ],
        R = Ie(),
        b = Ra(),
        l = ya(),
        g = Da().params.id,
        r = y(0),
        p = y(!0),
        h = y(window.innerWidth),
        f = y(m),
        A = y(!1),
        ae = y(!1),
        P = y(0),
        t = y(),
        W = y([]),
        O = y(),
        te = y(!1),
        ie = y(!1),
        ce = y(!1),
        ue = y(),
        de = y(),
        ve = y("Ação"),
        ne = y(),
        ge = y(),
        Ce = y(),
        $e = y(),
        w = y({ message: "", type: "info", alive: !1, timeout: 0 }),
        U = y({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        H = y({
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
      ua(async () => {
        var c;
        if (!R.currentUser) return;
        const a = await Aa(j(b, "campaigns", g));
        a.data() || l.push({ name: "not-found" });
        const n = (c = a.data()) == null ? void 0 : c.campaignLogId;
        (Ce.value = ye(j(b, "campaigns", g), (k) => {
          var G;
          k.data() || l.push({ name: "not-found" }),
            (t.value = k.data()),
            (t.value.id = k.id),
            t.value.privateMasterScreen ? (ae.value = !0) : (ae.value = !1),
            ((G = R.currentUser) == null ? void 0 : G.uid) === t.value.uid &&
              (A.value = !0),
            h.value >= 1023
              ? A.value
                ? (f.value = C)
                : (f.value = m)
              : A.value
              ? (f.value = T)
              : (f.value = _),
            r.value < 3 && r.value++;
        })),
          ($e.value = ye(j(b, "campaignLogs", n), (k) => {
            k.data() &&
              ((O.value = k.data()),
              (O.value.id = k.id),
              r.value < 3 && r.value++);
          }));
        const s = Ia(b, "characters"),
          d = Sa(s, Ma("campaignDocId", "==", a.id));
        (ge.value = ye(d, (k) => {
          const G = [];
          for (const Y of k.docs) {
            const L = Y.data();
            (L.id = Y.id), G.push(L);
          }
          (W.value = G), r.value < 3 && r.value++;
        })),
          window.addEventListener("resize", () => {
            h.value = window.innerWidth;
          });
      }),
        Ha(() => {
          ge.value && ge.value(),
            Ce.value && Ce.value(),
            $e.value && $e.value();
        }),
        _e(r, () => {
          p.value !== !1 && r.value >= 3 && (p.value = !1);
        });
      const Te = (a) => (P.value = a),
        N = () => {
          t.value && le(j(b, "campaigns", t.value.id), t.value);
        },
        va = () => (U.value.alive = !1),
        Ee = () => (H.value.alive = !1),
        ke = (a) => {
          t.value &&
            O.value &&
            (O.value.campaignLogMessages.push(a),
            O.value.campaignLogMessages.length > 200 &&
              O.value.campaignLogMessages.shift(),
            le(j(b, "campaignLogs", O.value.id), O.value));
        },
        me = (a, n, s, d = !1) => {
          try {
            const c = qa(a),
              k = c.total,
              G = Ga(c.output),
              Y = Ka(c.output);
            (U.value.title = s),
              (U.value.total = k),
              (U.value.output = G),
              (U.value.notation = Y),
              (U.value.skinDice = xa[4]);
            const L = {
              sender: n,
              timestamp: new Date().getTime(),
              content: U.value,
              contentType: "roll",
              isPrivate: d,
            };
            ke(L), he(), Ee(), (U.value.alive = !0), u();
          } catch {
            (w.value.message = "Invalid dice"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        we = (a, n) => {
          try {
            const s = Ba(a, n);
            (H.value.title = n.name),
              (H.value.totalAttack = s.attackTotal),
              (H.value.totalDamage = s.damageTotal),
              (H.value.critical = s.critical),
              (H.value.attackTooltip = s.attackInfo),
              (H.value.damageTooltip = s.damageInfo),
              (H.value.attackRollTooltip = s.attackRollInfo),
              (H.value.damageRollTooltip = s.damageRollInfo),
              (H.value.criticalTooltip = s.criticalInfo),
              (H.value.skinDice = a.skinDice);
            const d = {
              sender: a.name,
              timestamp: new Date().getTime(),
              content: H.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            ke(d), he(), (H.value.alive = !0), u();
          } catch {
            (w.value.message = "Invalid dice"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        ma = (a) => {
          const n = [];
          if (a.damage)
            for (const d of a.damage) n.push(`(${d.value} - ${d.damageType})`);
          return n.join(" + ");
        },
        ha = (a) => {
          const n =
              `${a.rollNumber}d20` +
              (a.rollBonus && !isNaN(a.rollBonus) ? ` +${a.rollBonus}` : ""),
            s = ma(a),
            d = `${a.criticalRange}/x${a.criticalMult}`;
          let c;
          a.rollNumber > 0
            ? (c =
                `${a.rollNumber}d20kh1` +
                (a.rollBonus && !isNaN(a.rollBonus) ? `+${a.rollBonus}` : ""))
            : (c =
                `${Math.abs(a.rollNumber) + 2}d20kl1` +
                (a.rollBonus && !isNaN(a.rollBonus) ? `+${a.rollBonus}` : ""));
          const k = new re(c.trim()),
            G = k.total,
            Y = k.output
              .substring(k.output.indexOf("[") + 1, k.output.indexOf("]"))
              .split(",");
          let L = 0;
          if (Y.length > 1)
            Y.map((E) => {
              E.includes("d") ||
                (parseInt(E) >= a.criticalRange && (L = 1),
                parseInt(E) === 1 && (L = -1),
                parseInt(E) === 1 && a.criticalRange === 1 && (L = 1));
            });
          else {
            const E = k.output.substring(
              k.output.indexOf("[") + 1,
              k.output.indexOf("]")
            );
            parseInt(E) >= a.criticalRange && (L = 1),
              parseInt(E) === 1 && (L = -1);
          }
          const Ye = a.damage[0].value !== "" ? `${a.damage[0].value}` : "0";
          let fe = 0,
            K = "";
          if (L === 1)
            for (let E = 0; E < a.criticalMult; E++) {
              const F = new re(Ye.trim());
              (fe += F.total),
                (K +=
                  F.output.substring(
                    F.output.indexOf(":") + 1,
                    F.output.indexOf("=") - 1
                  ) + "+");
            }
          else {
            const E = new re(Ye.trim());
            (fe += E.total),
              (K +=
                E.output.substring(
                  E.output.indexOf(":") + 1,
                  E.output.indexOf("=") - 1
                ) + "+");
          }
          if (a.damage.length > 1) {
            const E = [];
            for (const ga of a.damage) E.push(ga.value);
            E.splice(0, 1);
            const F = new re(E.join("+"));
            (fe += F.total),
              F.output.includes("[")
                ? (K +=
                    F.output.substring(
                      F.output.indexOf(":") + 1,
                      F.output.indexOf("=") - 1
                    ) + "+")
                : (K += F.total + "+");
          }
          return (
            K.charAt(K.length - 1) === "+" && (K = K.slice(0, -1)),
            {
              attackTotal: G,
              damageTotal: fe,
              critical: L,
              attackInfo: n,
              damageInfo: s,
              criticalInfo: d,
              attackRollInfo:
                k.output.substring(
                  k.output.indexOf("["),
                  k.output.indexOf("]") + 1
                ) + (a.rollBonus !== 0 ? `+${a.rollBonus}` : ""),
              damageRollInfo: `${K.trim().replace(/\s/g, "")}`,
            }
          );
        },
        Pe = (a, n) => {
          try {
            const s = ha(n);
            (H.value.title = n.name || "Attack"),
              (H.value.totalAttack = s.attackTotal),
              (H.value.totalDamage = s.damageTotal),
              (H.value.critical = s.critical),
              (H.value.attackTooltip = s.attackInfo),
              (H.value.damageTooltip = s.damageInfo),
              (H.value.attackRollTooltip = s.attackRollInfo),
              (H.value.damageRollTooltip = s.damageRollInfo),
              (H.value.criticalTooltip = s.criticalInfo);
            const d = {
              sender: a.name,
              timestamp: new Date().getTime(),
              content: H.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            ke(d), he(), (H.value.alive = !0), u();
          } catch {
            (w.value.message = "Invalid dice"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        Oe = (a, n) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const s = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (c) => c.id === a.id
            ),
            d = t.value.combats[t.value.currentCombat].creatures[s];
          n === "actions"
            ? d[n].push({ id: aa(), name: "New Action" })
            : d[n].push({ id: aa(), name: "New Power" }),
            N();
        },
        Re = (a, n = "Result") => {
          me(a, "DM", n, te.value);
        };
      _e(h, () => {
        h.value >= 1023
          ? A.value
            ? (f.value = C)
            : (f.value = m)
          : A.value
          ? (f.value = T)
          : (f.value = _);
      }),
        _e(
          () => w.value.alive,
          () => {
            w.value.alive === !0 &&
              (w.value.timeout = window.setTimeout(
                () => (w.value.alive = !1),
                3e3
              ));
          }
        ),
        _e(
          () => P.value,
          () => {
            P.value === 0 && (U.value.alive = !1);
          }
        );
      const he = () => {
          (w.value.alive = !1), clearTimeout(w.value.timeout);
        },
        Ne = (a) => {
          t.value && A.value && ((t.value.anotations[a.key] = a.value), N());
        },
        Le = () => {
          var n, s;
          if (!t.value || !A.value) return;
          t.value.masterMacros || (t.value.masterMacros = []);
          const a = { title: "New Die", value: "3d20k1" };
          (s = (n = t.value) == null ? void 0 : n.masterMacros) == null ||
            s.unshift(a),
            N();
        },
        Ve = (a) => {
          var n, s;
          (n = t.value) != null &&
            n.masterMacros &&
            ((s = t.value) == null || s.masterMacros.splice(a, 1), N());
        },
        Be = (a, n, s) => {
          var d;
          (d = t.value) != null &&
            d.masterMacros &&
            ((t.value.masterMacros[s][n] = a.target.value), N());
        },
        Ue = (a) => {
          var d;
          if (!((d = t.value) != null && d.masterMacros)) return;
          const n = t.value.masterMacros[a].value,
            s = t.value.masterMacros[a].title;
          Re(n, s);
        },
        Fe = (a, n) => {
          let s;
          return (
            a > 0
              ? (s = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
              : (s = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            new re(s.trim()).total
          );
        },
        qe = (a) => {
          if (!t.value || !t.value.combats) return;
          const n = {
            STR: "str",
            AGI: "dex",
            INT: "int",
            PRE: "pre",
            VIG: "con",
          };
          t.value.currentCombat = a;
          for (const s of W.value) {
            const d = s.attributes[n[s.skills[10].attribute]];
            (s.initiativeValue = Fe(d, s.skills[10].bonus)),
              le(j(b, "characters", s.id), s);
          }
          for (const s of t.value.combats[t.value.currentCombat].creatures)
            s.initiativeValue = Fe(
              s.skills.initiative.rollNumber,
              s.skills.initiative.rollBonus || 0
            );
          N();
        },
        Ge = () => {
          t.value && t.value.combats && ((t.value.currentCombat = -1), N());
        },
        Ke = (a, n, s, d) => {
          let c;
          a > 0
            ? (c = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
            : (c = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            me(c, d, s);
        },
        Qe = (a, n, s, d) => {
          let c;
          a > 0
            ? (c = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
            : (c = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            me(c, d, s);
        },
        ze = (a, n, s) => {
          me(a, s, n);
        },
        pe = (a, n, s) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const d = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (k) => k.id === a.id
            ),
            c = t.value.combats[t.value.currentCombat].creatures[d];
          c &&
            (s || (c.pvCurrent = n),
            s === "current" && (c.pvCurrent = n),
            s === "max" && (c.pvMax = n),
            N());
        },
        We = (a, n, s) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const d = t.value.combats[t.value.currentCombat].creatures.find(
            (c) => c.id === a.id
          );
          if (d) {
            if (s === "actions") {
              const c = d.actions.findIndex((k) => k.id === n);
              c > -1 && d.actions.splice(c, 1);
            } else {
              const c = d.powers.findIndex((k) => k.id === n);
              c > -1 && d.powers.splice(c, 1);
            }
            N();
          }
        },
        je = (a) => {
          oe(), (ie.value = !0), (ue.value = a);
        },
        Xe = (a, n, s) => {
          if (
            t.value &&
            t.value.combats &&
            !(t.value.currentCombat === void 0 || t.value.currentCombat < 0)
          )
            if (
              (oe(),
              (ce.value = !0),
              (de.value = t.value.combats[
                t.value.currentCombat
              ].creatures.findIndex((d) => d.id === a.id)),
              s === "Action")
            ) {
              const d = a.actions.findIndex((c) => c.id === n);
              (ne.value = a.actions[d]), (ve.value = "Action");
            } else {
              const d = a.powers.findIndex((c) => c.id === n);
              (ne.value = a.powers[d]), (ve.value = "Power");
            }
        },
        pa = (a) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0 ||
            de.value === void 0
          )
            return;
          const n = t.value.combats[t.value.currentCombat].creatures[de.value];
          if (ve.value === "Action") {
            const s = n.actions.findIndex((d) => d.id === a.id);
            s > -1 && (n.actions[s] = a);
          } else {
            const s = n.powers.findIndex((d) => d.id === a.id);
            s > -1 && (n.powers[s] = a);
          }
          N(), oe();
        },
        Je = () => {
          (ie.value = !1), (ue.value = void 0);
        },
        fa = () => {
          (ce.value = !1), (ne.value = void 0), (de.value = void 0);
        },
        oe = () => {
          Je(), fa();
        },
        _a = (a) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const n = t.value.combats[t.value.currentCombat].creatures.findIndex(
            (s) => s.id === a.id
          );
          n < 0 ||
            ((t.value.combats[t.value.currentCombat].creatures[n] = a),
            N(),
            Je());
        },
        Ze = (a, n) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const s = W.value.findIndex((c) => c.id === n),
            d = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (c) => c.id === n
            );
          s > -1 &&
            le(j(b, "characters", W.value[s].id), { initiativeValue: a }),
            d > -1 &&
              ((t.value.combats[t.value.currentCombat].creatures[
                d
              ].initiativeValue = a),
              N());
        },
        ba = () => {
          A.value &&
            O.value &&
            ((O.value.campaignLogMessages = []),
            le(j(b, "campaignLogs", O.value.id), O.value));
        };
      return (a, n) => {
        var d;
        const s = Ta("vue-final-modal");
        return p.value
          ? (o(), i("div", ys, [M(Ea, { "page-loading": "" })]))
          : (o(),
            i("div", os, [
              ae.value && !A.value
                ? (o(),
                  i("div", ss, [
                    ls,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick: n[0] || (n[0] = (c) => a.$router.push("/")),
                      },
                      " Return "
                    ),
                  ]))
                : (o(),
                  i("div", rs, [
                    h.value >= 1023
                      ? (o(),
                        i("div", is, [
                          e(
                            "div",
                            {
                              class: "page-title",
                              onClick:
                                n[1] ||
                                (n[1] = (c) => {
                                  var k;
                                  return a.$router.push({
                                    name: "campaign-page",
                                    params: {
                                      id: (k = t.value) == null ? void 0 : k.id,
                                    },
                                  });
                                }),
                            },
                            I((d = t.value) == null ? void 0 : d.name),
                            1
                          ),
                          e("div", cs, [
                            e("div", us, [
                              O.value
                                ? (o(),
                                  S(
                                    ea,
                                    {
                                      key: 0,
                                      "master-screen": "",
                                      "is-dm": A.value,
                                      "campaign-log": O.value,
                                      onHandleCleanCampaignLog: ba,
                                    },
                                    null,
                                    8,
                                    ["is-dm", "campaign-log"]
                                  ))
                                : $("", !0),
                            ]),
                            e("div", ds, [
                              e("div", vs, [
                                M(
                                  Ae,
                                  {
                                    "tab-options": f.value,
                                    "current-tab": P.value,
                                    onHandleNavigation: Te,
                                  },
                                  null,
                                  8,
                                  ["tab-options", "current-tab"]
                                ),
                              ]),
                              (o(),
                              S(
                                Q,
                                null,
                                [
                                  P.value === 0
                                    ? (o(),
                                      S(
                                        ta,
                                        { key: 0, characters: W.value },
                                        null,
                                        8,
                                        ["characters"]
                                      ))
                                    : $("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              S(
                                Q,
                                null,
                                [
                                  P.value === 1 && t.value
                                    ? (o(),
                                      S(
                                        oa,
                                        {
                                          key: 0,
                                          campaign: t.value,
                                          characters: W.value,
                                          "is-dm": A.value,
                                          onHandleStartCombat: qe,
                                          onHandleFinishCombat: Ge,
                                          onHandleRollAttr: Ke,
                                          onHandleRollCreatureSkill: Qe,
                                          onHandleRollDices: ze,
                                          onHandleRollCharacterAttack: we,
                                          onHandleRollCreatureAttack: Pe,
                                          onHandleAddCreatureCard: Oe,
                                          onHandleChangeCreaturePv: pe,
                                          onHandleChangeCreaturePvField: pe,
                                          onHandleRemoveAction: We,
                                          onHandleEditCreature: je,
                                          onHandleEditCreatureAction: Xe,
                                          onHandleChangeInitiative: Ze,
                                        },
                                        null,
                                        8,
                                        ["campaign", "characters", "is-dm"]
                                      ))
                                    : $("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              S(
                                Q,
                                null,
                                [
                                  t.value
                                    ? (o(),
                                      i("div", ms, [
                                        P.value === 2
                                          ? (o(),
                                            S(
                                              na,
                                              {
                                                key: 0,
                                                "dm-private-dice": te.value,
                                                campaign: t.value,
                                                onHandleChangeDmPrivateDice:
                                                  n[2] ||
                                                  (n[2] = (c) =>
                                                    (te.value = c)),
                                                onHandleRollMasterDices: Re,
                                                onHandleAddDiceMacro: Le,
                                                onHandleRemoveDiceMacro:
                                                  n[3] || (n[3] = (c) => Ve(c)),
                                                onHandleChangeDiceMacro: Be,
                                                onHandleRollDiceMacro: Ue,
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
                              (o(),
                              S(
                                Q,
                                null,
                                [
                                  t.value
                                    ? (o(),
                                      i("div", hs, [
                                        P.value === 3
                                          ? (o(),
                                            S(
                                              sa,
                                              {
                                                key: 0,
                                                campaign: t.value,
                                                onHandleChangeCampaignAnotations:
                                                  n[4] || (n[4] = (c) => Ne(c)),
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
                      : (o(),
                        i("div", ps, [
                          e("div", fs, [
                            M(
                              Ae,
                              {
                                "tab-options": f.value,
                                "current-tab": P.value,
                                onHandleNavigation: Te,
                              },
                              null,
                              8,
                              ["tab-options", "current-tab"]
                            ),
                          ]),
                          P.value === 0
                            ? (o(),
                              i("div", _s, [
                                (o(),
                                S(
                                  Q,
                                  null,
                                  [
                                    O.value
                                      ? (o(),
                                        S(
                                          ea,
                                          {
                                            key: 0,
                                            "master-screen": "",
                                            "is-dm": A.value,
                                            "campaign-log": O.value,
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
                          (o(),
                          S(
                            Q,
                            null,
                            [
                              P.value === 1
                                ? (o(),
                                  S(
                                    ta,
                                    { key: 0, characters: W.value },
                                    null,
                                    8,
                                    ["characters"]
                                  ))
                                : $("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          S(
                            Q,
                            null,
                            [
                              P.value === 2 && t.value
                                ? (o(),
                                  S(
                                    oa,
                                    {
                                      key: 0,
                                      campaign: t.value,
                                      characters: W.value,
                                      "is-dm": A.value,
                                      onHandleStartCombat: qe,
                                      onHandleFinishCombat: Ge,
                                      onHandleRollAttr: Ke,
                                      onHandleRollCreatureSkill: Qe,
                                      onHandleRollDices: ze,
                                      onHandleRollCharacterAttack: we,
                                      onHandleRollCreatureAttack: Pe,
                                      onHandleAddCreatureCard: Oe,
                                      onHandleChangeCreaturePv: pe,
                                      onHandleChangeCreaturePvField: pe,
                                      onHandleRemoveAction: We,
                                      onHandleEditCreature: je,
                                      onHandleEditCreatureAction: Xe,
                                      onHandleChangeInitiative: Ze,
                                    },
                                    null,
                                    8,
                                    ["campaign", "characters", "is-dm"]
                                  ))
                                : $("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          S(
                            Q,
                            null,
                            [
                              t.value
                                ? (o(),
                                  i("div", bs, [
                                    P.value === 3
                                      ? (o(),
                                        S(
                                          na,
                                          {
                                            key: 0,
                                            "dm-private-dice": te.value,
                                            campaign: t.value,
                                            onHandleChangeDmPrivateDice:
                                              n[5] ||
                                              (n[5] = (c) => (te.value = c)),
                                            onHandleRollMasterDices: Re,
                                            onHandleAddDiceMacro: Le,
                                            onHandleRemoveDiceMacro:
                                              n[6] || (n[6] = (c) => Ve(c)),
                                            onHandleChangeDiceMacro: Be,
                                            onHandleRollDiceMacro: Ue,
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
                          (o(),
                          S(
                            Q,
                            null,
                            [
                              t.value
                                ? (o(),
                                  i("div", gs, [
                                    P.value === 4
                                      ? (o(),
                                        S(
                                          sa,
                                          {
                                            key: 0,
                                            campaign: t.value,
                                            onHandleChangeCampaignAnotations:
                                              n[7] || (n[7] = (c) => Ne(c)),
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
                          P.value !== 0
                            ? (o(),
                              i("div", Cs, [
                                M(
                                  De,
                                  { name: "toast" },
                                  {
                                    default: se(() => [
                                      U.value.alive
                                        ? (o(),
                                          S(
                                            Ua,
                                            {
                                              key: 0,
                                              toast: U.value,
                                              onDismiss: va,
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
                          P.value !== 0
                            ? (o(),
                              i("div", $s, [
                                M(
                                  De,
                                  { name: "toast" },
                                  {
                                    default: se(() => [
                                      H.value.alive
                                        ? (o(),
                                          S(
                                            Fa,
                                            {
                                              key: 0,
                                              toast: H.value,
                                              onDismiss: Ee,
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
                    M(
                      De,
                      { name: "toast" },
                      {
                        default: se(() => [
                          w.value.alive
                            ? (o(),
                              S(
                                Za,
                                {
                                  key: 0,
                                  toast: w.value,
                                  type: w.value.type,
                                  onDismiss: he,
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
                    ue.value
                      ? (o(),
                        i("div", ks, [
                          M(
                            s,
                            {
                              modelValue: ie.value,
                              "onUpdate:modelValue":
                                n[8] || (n[8] = (c) => (ie.value = c)),
                              classes: "modal-container",
                            },
                            {
                              default: se(() => [
                                M(
                                  ts,
                                  {
                                    creature: ue.value,
                                    onHandleEditCreature: _a,
                                    onHandleCloseModal: oe,
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
                    ne.value
                      ? (o(),
                        i("div", Rs, [
                          M(
                            s,
                            {
                              modelValue: ce.value,
                              "onUpdate:modelValue":
                                n[9] || (n[9] = (c) => (ce.value = c)),
                              classes: "modal-container",
                            },
                            {
                              default: se(() => [
                                M(
                                  ja,
                                  {
                                    action: ne.value,
                                    title: ve.value,
                                    onHandleCloseModal: oe,
                                    onHandleEditAction: pa,
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
  xs = B(Ds, [["__scopeId", "data-v-8ca3889b"]]);
export { xs as default };

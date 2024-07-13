import {
  d as L,
  f as z,
  o as n,
  c as i,
  a as e,
  m as $,
  t as S,
  H as xe,
  L as Ca,
  k as M,
  v as I,
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
  g as Se,
  h as $a,
  a1 as ka,
  e as ua,
  M as Ra,
  u as ya,
  S as Aa,
  A as Da,
  P as j,
  Z as ye,
  R as Sa,
  F as Ia,
  B as Ma,
  $ as Ha,
  w as _e,
  i as Ta,
  a2 as Q,
  x as se,
  T as Ae,
  N as le,
} from "./index-sgISCpYv.js";
import { L as Ea } from "./LoadingView-CeRplIIf.js";
import {
  I as x,
  n as wa,
  A as Pa,
  F as Oa,
  a as Na,
  u as Va,
  C as ea,
  d as La,
  r as Ba,
  T as Ua,
  b as Fa,
  c as qa,
  f as Ga,
  e as Ka,
  D as re,
} from "./ToastAttack-UfRjEh-0.js";
import { T as De } from "./TabNav-J-G_CLvo.js";
import { _ as Ie } from "./d20-icon-vaz1En3o.js";
import { S as Qa } from "./SwitchButtonBool-9_VU2YCl.js";
import { C as za } from "./CombatCard-zziDs-kI.js";
import { C as Wa, A as ja } from "./ActionModal-SMpeYd2V.js";
import { g as Xa } from "./firebase-y1XG5P2D.js";
import { P as Ja } from "./PrivateFeat-Lm2OVPRW.js";
import { T as Za } from "./ToastNotification-RIbSpF9b.js";
import { C as Ya } from "./CreatureForm-kv8UYjP1.js";
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
import "./DropdownSimple-nUwB4ryP.js";
import "./blank-profile-picture-wMh28flS.js";
import "./PictureModal-CldhdeXT.js";
import "./index.esm2017-x1dhUp5d.js";
const q = (v) => (J("data-v-fdd261f5"), (v = v()), Z(), v),
  et = { class: "char-status-card-container" },
  at = { class: "header" },
  tt = { key: 0 },
  ot = ["src"],
  nt = { key: 0, class: "agent-name" },
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
  At = q(() => e("div", null, "PRE", -1)),
  Dt = { class: "combat-info-value" },
  St = { class: "combat-info" },
  It = q(() => e("div", null, "VIG", -1)),
  Mt = { class: "combat-info-value" },
  Ht = { class: "bars-container" },
  Tt = { class: "combat-info-container-first" },
  Et = { class: "combat-info-row" },
  wt = q(() => e("div", null, "EP/TURN: ", -1)),
  Pt = { class: "combat-info-value" },
  Ot = { class: "combat-info-row" },
  Nt = q(() => e("div", null, "SPD: ", -1)),
  Vt = { class: "combat-info-value" },
  Lt = { class: "combat-info-container" },
  Bt = { class: "combat-info" },
  Ut = q(() => e("div", null, "DEFESE", -1)),
  Ft = { class: "combat-info-value" },
  qt = { class: "combat-info" },
  Gt = q(() => e("div", null, "BLOCK DR", -1)),
  Kt = { class: "combat-info-value" },
  Qt = { class: "combat-info" },
  zt = q(() => e("div", null, "DODGE", -1)),
  Wt = { class: "combat-info-value" },
  jt = L({
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
      return (l, A) => (
        n(),
        i("div", et, [
          e("div", at, [
            l.character.sheetPictureURL
              ? (n(),
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
                    ot
                  ),
                ]))
              : $("", !0),
            e("div", null, [
              l.character.name !== ""
                ? (n(), i("div", nt, S(l.character.name), 1))
                : (n(), i("div", st, " [Sem nome] ")),
              e("div", lt, S(l.character.className), 1),
              e("div", rt, S(l.character.backgroundName), 1),
              l.character.isSobrevivendoAoHorror
                ? (n(),
                  i("div", dt, [
                    xe(" NÍVEL: "),
                    l.character.statsClass !== "Mundane"
                      ? (n(), i("span", vt, S(Ca(wa)[l.character.nex]), 1))
                      : (n(), i("span", mt, "0")),
                  ]))
                : (n(),
                  i("div", it, [
                    xe(" NEX: "),
                    l.character.statsClass !== "Mundane"
                      ? (n(), i("span", ct, S(l.character.nex), 1))
                      : (n(), i("span", ut, "0%")),
                  ])),
            ]),
          ]),
          e("div", ht, [
            e("div", pt, [ft, e("div", _t, S(l.character.attributes.dex), 1)]),
            e("div", bt, [gt, e("div", Ct, S(l.character.attributes.str), 1)]),
            e("div", $t, [kt, e("div", Rt, S(l.character.attributes.int), 1)]),
            e("div", yt, [At, e("div", Dt, S(l.character.attributes.pre), 1)]),
            e("div", St, [It, e("div", Mt, S(l.character.attributes.con), 1)]),
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
            l.character.isSobrevivendoAoHorror
              ? $("", !0)
              : (n(),
                I(
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
            l.character.isSobrevivendoAoHorror
              ? $("", !0)
              : (n(),
                I(
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
            l.character.isSobrevivendoAoHorror
              ? (n(),
                I(
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
            e("div", Et, [wt, e("span", Pt, S(l.character.peTurn), 1)]),
            e("div", Ot, [
              Nt,
              e(
                "span",
                Vt,
                S(l.character.movement) + "m / " + S(_.value) + "sq ",
                1
              ),
            ]),
          ]),
          e("div", Lt, [
            e("div", Bt, [Ut, e("div", Ft, S(T.value), 1)]),
            e("div", qt, [
              Gt,
              e("div", Kt, S(l.character.block || R.value), 1),
            ]),
            e("div", Qt, [
              zt,
              e("div", Wt, S(l.character.evade || b.value), 1),
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
  Xt = B(jt, [["__scopeId", "data-v-fdd261f5"]]),
  Jt = (v) => (J("data-v-cd3d2f92"), (v = v()), Z(), v),
  Zt = { key: 0, class: "master-screen-chars-container" },
  Yt = { key: 1, class: "no-chars-message" },
  xt = Jt(() => e("h3", null, "There are no agents on this campaign", -1)),
  eo = [xt],
  ao = L({
    __name: "MasterScreenChars",
    props: { characters: {} },
    setup(v) {
      return (u, m) =>
        u.characters.length > 0
          ? (n(),
            i("div", Zt, [
              (n(!0),
              i(
                X,
                null,
                ee(
                  u.characters,
                  (C) => (
                    n(),
                    i("div", { key: C.id }, [
                      M(Xt, { character: C }, null, 8, ["character"]),
                    ])
                  )
                ),
                128
              )),
            ]))
          : (n(), i("div", Yt, eo));
    },
  }),
  ta = B(ao, [["__scopeId", "data-v-cd3d2f92"]]),
  Me = (v) => (J("data-v-91a251a9"), (v = v()), Z(), v),
  to = { class: "add-dices-button-container" },
  oo = { class: "input-container" },
  no = { class: "roll-dices-container" },
  so = ["onKeyup"],
  lo = Me(() =>
    e("img", { class: "dice-icon", src: Ie, alt: "rolar" }, null, -1)
  ),
  ro = [lo],
  io = { class: "master-macro-container" },
  co = { class: "master-macro" },
  uo = { class: "master-macro-inputs-container" },
  vo = ["value", "onBlur"],
  mo = ["value", "onBlur"],
  ho = { class: "master-macro-card-buttons-container" },
  po = ["onClick"],
  fo = Me(() =>
    e("img", { class: "close-icon", src: ca, alt: "fechar" }, null, -1)
  ),
  _o = [fo],
  bo = ["onClick"],
  go = Me(() =>
    e("img", { class: "dice-icon", src: Ie, alt: "rolar" }, null, -1)
  ),
  Co = [go],
  $o = L({
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
        n(),
        i(
          X,
          null,
          [
            e("div", to, [
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
            e("div", oo, [
              e("div", no, [
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
                    so
                  ),
                  [[ra, C.value]]
                ),
                e("button", { class: "dice-button", onClick: _ }, ro),
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
            e("div", io, [
              (n(!0),
              i(
                X,
                null,
                ee(
                  R.campaign.masterMacros,
                  (l, A) => (
                    n(),
                    i("div", { key: A, class: "master-macro-card" }, [
                      e("div", co, [
                        e("div", uo, [
                          e(
                            "input",
                            {
                              value: l.title,
                              type: "text",
                              class: "master-macro-input-title",
                              placeholder: "Nome",
                              onBlur: (g) =>
                                R.$emit("handleChangeDiceMacro", g, "title", A),
                            },
                            null,
                            40,
                            vo
                          ),
                          e(
                            "input",
                            {
                              value: l.value,
                              type: "text",
                              class: "master-macro-input",
                              placeholder: "Value",
                              onBlur: (g) =>
                                R.$emit("handleChangeDiceMacro", g, "value", A),
                            },
                            null,
                            40,
                            mo
                          ),
                        ]),
                        e("div", ho, [
                          e(
                            "button",
                            {
                              class: "close-button",
                              onClick: (g) =>
                                R.$emit("handleRemoveDiceMacro", A),
                            },
                            _o,
                            8,
                            po
                          ),
                          e(
                            "button",
                            {
                              class: "dice-button",
                              onClick: (g) => R.$emit("handleRollDiceMacro", A),
                            },
                            Co,
                            8,
                            bo
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
  oa = B($o, [["__scopeId", "data-v-91a251a9"]]),
  ko = (v) => (J("data-v-ff197a3e"), (v = v()), Z(), v),
  Ro = { class: "initiative-order-container" },
  yo = ["onClick"],
  Ao = { class: "initiative-container" },
  Do = ko(() => e("div", { class: "iniative-label" }, " INITIATIVE ", -1)),
  So = ["value", "onBlur"],
  Io = { key: 0, class: "profile-picture-container" },
  Mo = ["src"],
  Ho = { key: 1, class: "profile-picture-placeholder" },
  To = { class: "card-name" },
  Eo = L({
    __name: "InitiativeOrder",
    props: { currentCombat: {}, characters: {}, isDm: { type: Boolean } },
    emits: ["handleSelectSheet", "handleChangeInitiative"],
    setup(v, { emit: u }) {
      const m = v,
        C = u,
        _ = Se(),
        T = z(() => {
          const l = m.characters.concat(m.currentCombat.creatures);
          return (
            l.sort(
              (A, g) => (
                A.initiativeValue || (A.initiativeValue = 0),
                g.initiativeValue || (g.initiativeValue = 0),
                g.initiativeValue - A.initiativeValue
              )
            ),
            l
          );
        }),
        R = (l, A) => {
          const g = l.target.valueAsNumber;
          C("handleChangeInitiative", g, A);
        },
        b = (l) => {
          if (m.isDm) {
            C("handleSelectSheet", l);
            return;
          }
          _.currentUser &&
            _.currentUser.uid ===
              m.characters[m.characters.findIndex((A) => A.id === l)].uid &&
            C("handleSelectSheet", l);
        };
      return (l, A) => (
        n(),
        i("div", Ro, [
          (n(!0),
          i(
            X,
            null,
            ee(
              T.value,
              (g) => (
                n(),
                i("div", { key: g.id, class: "initiative-card-container" }, [
                  e(
                    "div",
                    { class: "order-card-row", onClick: (r) => b(g.id || "") },
                    [
                      e("div", Ao, [
                        Do,
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
                          So
                        ),
                      ]),
                      g.sheetPictureURL
                        ? (n(),
                          i("div", Io, [
                            e(
                              "img",
                              {
                                class: "profile-picture",
                                src: g.sheetPictureURL,
                                alt: "foto agente",
                              },
                              null,
                              8,
                              Mo
                            ),
                          ]))
                        : (n(), i("div", Ho)),
                      e("div", To, S(g.name), 1),
                    ],
                    8,
                    yo
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
  wo = B(Eo, [["__scopeId", "data-v-ff197a3e"]]),
  Po = { class: "character-header-container" },
  Oo = { key: 0 },
  No = ["src"],
  Vo = { class: "info-container" },
  Lo = { class: "info-row header-row" },
  Bo = { class: "data-container" },
  Uo = { class: "info-column" },
  Fo = ["title"],
  qo = { class: "info-row" },
  Go = { class: "info-text" },
  Ko = { class: "info-bar-wrapper" },
  Qo = L({
    __name: "CharacterCombatSheetHeader",
    props: { character: {} },
    setup(v) {
      return (u, m) => (
        n(),
        i("div", Po, [
          e("div", null, [
            u.character.sheetPictureURL
              ? (n(),
                i("div", Oo, [
                  e(
                    "img",
                    {
                      class: "character-picture",
                      src: u.character.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    No
                  ),
                ]))
              : $("", !0),
          ]),
          e("div", Vo, [
            e("div", Lo, [
              e("div", Bo, [
                e("div", Uo, [
                  e(
                    "div",
                    { class: "character-name", title: u.character.name },
                    S(u.character.name),
                    9,
                    Fo
                  ),
                  e("div", qo, [
                    e(
                      "div",
                      Go,
                      S(u.character.className) +
                        " - EXP: " +
                        S(u.character.nex),
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", Ko, [
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
  zo = B(Qo, [["__scopeId", "data-v-d1624f56"]]),
  be = (v) => (J("data-v-6a4e9f30"), (v = v()), Z(), v),
  Wo = { class: "stats-row" },
  jo = { class: "stats-container" },
  Xo = be(() => e("div", { class: "stats-label" }, " DEFENSE ", -1)),
  Jo = { class: "stats-value" },
  Zo = { class: "stats-container" },
  Yo = be(() => e("div", { class: "stats-label" }, " BLOCK DR ", -1)),
  xo = { class: "stats-value" },
  en = { class: "stats-container" },
  an = be(() => e("div", { class: "stats-label" }, " DODGE ", -1)),
  tn = { class: "stats-value" },
  on = { class: "stats-container" },
  nn = be(() => e("div", { class: "stats-label" }, " SPEED ", -1)),
  sn = { class: "stats-value" },
  ln = L({
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
        n(),
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
            e("div", Wo, [
              e("div", jo, [Xo, e("div", Jo, S(m.value), 1)]),
              e("div", Zo, [Yo, e("div", xo, S(_.character.block), 1)]),
              e("div", en, [an, e("div", tn, S(_.character.evade), 1)]),
              e("div", on, [
                nn,
                e(
                  "div",
                  sn,
                  S(_.character.movement) + "m /" + S(C.value) + "q ",
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
  rn = B(ln, [["__scopeId", "data-v-6a4e9f30"]]),
  He = (v) => (J("data-v-c14dc827"), (v = v()), Z(), v),
  cn = { class: "character-combat-container" },
  un = { key: 0 },
  dn = { class: "roll-dices-container" },
  vn = ["onKeyup"],
  mn = He(() =>
    e("img", { class: "dice-icon", src: Ie, alt: "rolar" }, null, -1)
  ),
  hn = [mn],
  pn = { key: 1 },
  fn = { key: 0 },
  _n = { key: 1, class: "no-content" },
  bn = He(() => e("h3", null, "No attack found", -1)),
  gn = [bn],
  Cn = { key: 2, class: "no-content" },
  $n = He(() => e("h3", null, "You have no attacks", -1)),
  kn = [$n],
  Rn = L({
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
        b = (A) => {
          C("handleRollAttack", A);
        },
        l = z(() =>
          [...m.character.attacks].filter((g) => $a(g.name, T.value))
        );
      return (A, g) => (
        n(),
        i("div", cn, [
          A.character.attacks.length > 0
            ? (n(),
              i("div", un, [
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
          e("div", dn, [
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
                vn
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
              hn
            ),
          ]),
          A.character.attacks.length > 0
            ? (n(),
              i("div", pn, [
                l.value.length > 0
                  ? (n(),
                    i("div", fn, [
                      (n(!0),
                      i(
                        X,
                        null,
                        ee(
                          l.value,
                          (r) => (
                            n(),
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
                                      A.$emit("handleRemoveAttack", p)),
                                  onHandleEdit: (p) =>
                                    A.$emit("handleEditAttack", p),
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
                  : (n(), i("div", _n, gn)),
              ]))
            : (n(), i("div", Cn, kn)),
        ])
      );
    },
  }),
  yn = B(Rn, [["__scopeId", "data-v-c14dc827"]]),
  An = { class: "character-sheet-container" },
  Dn = { class: "tab-nav-container" },
  Sn = { class: "character-sheet-content-container" },
  In = L({
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
        A = (r) => {
          C("handleRollDices", r, "Results", m.character.name);
        },
        g = (r) => {
          C("handleRollAttack", m.character, r);
        };
      return (r, p) => (
        n(),
        i("div", An, [
          M(zo, { character: r.character }, null, 8, ["character"]),
          e("div", Dn, [
            M(
              De,
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
          e("div", Sn, [
            R.value === 0
              ? (n(),
                I(
                  rn,
                  { key: 0, character: r.character, onHandleRollAttribute: l },
                  null,
                  8,
                  ["character"]
                ))
              : $("", !0),
            R.value === 1
              ? (n(),
                I(
                  yn,
                  {
                    key: 1,
                    character: r.character,
                    onHandleRollDices: A,
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
  Mn = B(In, [["__scopeId", "data-v-f8950f4c"]]),
  Hn = { class: "master-combats-container" },
  Tn = { key: 0, class: "combat-container" },
  En = { class: "combat-header" },
  wn = { class: "combat-name" },
  Pn = { class: "combat-content-container" },
  On = { class: "initiative-container" },
  Nn = { class: "combat-sheet-container" },
  Vn = { key: 0 },
  Ln = { key: 0 },
  Bn = { key: 1 },
  Un = { key: 1, class: "no-sheet-text" },
  Fn = { key: 1 },
  qn = { key: 0 },
  Gn = { key: 0, class: "cards-container" },
  Kn = { key: 1 },
  Qn = L({
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
        T = Se(),
        R = y(!0),
        b = y(0);
      ua(async () => {
        T.currentUser &&
          ((b.value = await Xa(T.currentUser.uid)), (R.value = !1));
      });
      const l = () => {
          (_.value = void 0), C("handleFinishCombat");
        },
        A = (r) => {
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
        n(),
        i("div", Hn, [
          r.campaign.combats &&
          r.campaign.currentCombat !== void 0 &&
          r.campaign.currentCombat > -1 &&
          g.value
            ? (n(),
              i("div", Tn, [
                e("div", En, [
                  e(
                    "div",
                    wn,
                    S(r.campaign.combats[r.campaign.currentCombat].name),
                    1
                  ),
                  r.isDm
                    ? (n(),
                      i(
                        "button",
                        { key: 0, class: "button-secondary", onClick: l },
                        " Finish Encounter "
                      ))
                    : $("", !0),
                ]),
                e("div", Pn, [
                  e("div", On, [
                    M(
                      wo,
                      {
                        characters: r.characters,
                        "is-dm": r.isDm,
                        "current-combat":
                          r.campaign.combats[r.campaign.currentCombat],
                        onHandleSelectSheet: A,
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
                  e("div", Nn, [
                    _.value
                      ? (n(),
                        i("div", Vn, [
                          _.value.type === "creature"
                            ? (n(),
                              i("div", Ln, [
                                M(
                                  Wa,
                                  {
                                    creature:
                                      r.campaign.combats[
                                        r.campaign.currentCombat
                                      ].creatures[_.value.index],
                                    onHandleChangePvField:
                                      p[1] ||
                                      (p[1] = (h, f, D) =>
                                        r.$emit(
                                          "handleChangeCreaturePvField",
                                          h,
                                          f,
                                          D
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
                                      (p[3] = (h, f, D) =>
                                        r.$emit("handleRollAttr", h, 0, f, D)),
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
                                      (p[6] = (h, f, D) =>
                                        r.$emit("handleRemoveAction", h, f, D)),
                                    onHandleEditCreature:
                                      p[7] ||
                                      (p[7] = (h) =>
                                        r.$emit("handleEditCreature", h)),
                                    onHandleEditCreatureAction:
                                      p[8] ||
                                      (p[8] = (h, f, D) =>
                                        r.$emit(
                                          "handleEditCreatureAction",
                                          h,
                                          f,
                                          D
                                        )),
                                    onHandleRollSkill:
                                      p[9] ||
                                      (p[9] = (h, f, D, ae) =>
                                        r.$emit(
                                          "handleRollCreatureSkill",
                                          h,
                                          f,
                                          D,
                                          ae
                                        )),
                                  },
                                  null,
                                  8,
                                  ["creature"]
                                ),
                              ]))
                            : (n(),
                              i("div", Bn, [
                                M(
                                  Mn,
                                  {
                                    character: r.characters[_.value.index],
                                    onHandleRollAttribute:
                                      p[10] ||
                                      (p[10] = (h, f, D) =>
                                        r.$emit("handleRollAttr", h, 0, f, D)),
                                    onHandleRollDices:
                                      p[11] ||
                                      (p[11] = (h, f, D) =>
                                        r.$emit("handleRollDices", h, f, D)),
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
                      : (n(),
                        i(
                          "div",
                          Un,
                          " Select the sheet on the initiative tracker to add it here "
                        )),
                  ]),
                ]),
              ]))
            : (n(),
              i("div", Fn, [
                r.isDm
                  ? (n(),
                    i("div", qn, [
                      b.value >= 3
                        ? (n(),
                          i("div", Gn, [
                            (n(!0),
                            i(
                              X,
                              null,
                              ee(
                                r.campaign.combats,
                                (h, f) => (
                                  n(),
                                  i("div", { key: h.id }, [
                                    M(
                                      za,
                                      {
                                        combat: h,
                                        "is-master-screen": "",
                                        onHandleStart: (D) =>
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
                        : (n(), i("div", Kn, [M(Ja)])),
                    ]))
                  : $("", !0),
              ])),
        ])
      );
    },
  }),
  na = B(Qn, [["__scopeId", "data-v-27c49579"]]),
  zn = { class: "textarea-container" },
  Wn = ["placeholder", "value", "onBlur"],
  jn = L({
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
        n(),
        i(
          X,
          null,
          ee(C, (b) =>
            e("div", { key: b.title }, [
              e("div", zn, [
                e("h3", null, S(b.title), 1),
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
                  Wn
                ),
              ]),
            ])
          ),
          64
        )
      );
    },
  }),
  sa = B(jn, [["__scopeId", "data-v-a9aa04a0"]]),
  da = (v) => (J("data-v-a513e168"), (v = v()), Z(), v),
  Xn = { class: "modal-content modal-width" },
  Jn = { class: "modal-header" },
  Zn = da(() => e("h2", null, "Threat", -1)),
  Yn = da(() =>
    e("img", { class: "close-icon", src: ca, alt: "fechar" }, null, -1)
  ),
  xn = [Yn],
  es = { class: "modal-body modal-height" },
  as = L({
    __name: "CreatureModal",
    props: { creature: {} },
    emits: ["handleEditCreature", "handleCloseModal"],
    setup(v) {
      return (u, m) => (
        n(),
        i("div", Xn, [
          e("div", Jn, [
            Zn,
            e(
              "button",
              { onClick: m[0] || (m[0] = (C) => u.$emit("handleCloseModal")) },
              xn
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
  os = (v) => (J("data-v-8ca3889b"), (v = v()), Z(), v),
  ns = { key: 0 },
  ss = { key: 0, class: "private-master-screen" },
  ls = os(() => e("h1", null, "Private DM Screen", -1)),
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
  As = L({
    __name: "MasterScreen",
    setup(v) {
      const { play: u } = Va(La),
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
        R = Se(),
        b = Ra(),
        l = ya(),
        g = Aa().params.id,
        r = y(0),
        p = y(!0),
        h = y(window.innerWidth),
        f = y(m),
        D = y(!1),
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
        oe = y(),
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
        const a = await Da(j(b, "campaigns", g));
        a.data() || l.push({ name: "not-found" });
        const o = (c = a.data()) == null ? void 0 : c.campaignLogId;
        (Ce.value = ye(j(b, "campaigns", g), (k) => {
          var G;
          k.data() || l.push({ name: "not-found" }),
            (t.value = k.data()),
            (t.value.id = k.id),
            t.value.privateMasterScreen ? (ae.value = !0) : (ae.value = !1),
            ((G = R.currentUser) == null ? void 0 : G.uid) === t.value.uid &&
              (D.value = !0),
            h.value >= 1023
              ? D.value
                ? (f.value = C)
                : (f.value = m)
              : D.value
              ? (f.value = T)
              : (f.value = _),
            r.value < 3 && r.value++;
        })),
          ($e.value = ye(j(b, "campaignLogs", o), (k) => {
            k.data() &&
              ((O.value = k.data()),
              (O.value.id = k.id),
              r.value < 3 && r.value++);
          }));
        const s = Sa(b, "characters"),
          d = Ia(s, Ma("campaignDocId", "==", a.id));
        (ge.value = ye(d, (k) => {
          const G = [];
          for (const Y of k.docs) {
            const V = Y.data();
            (V.id = Y.id), G.push(V);
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
        me = (a, o, s, d = !1) => {
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
            const V = {
              sender: o,
              timestamp: new Date().getTime(),
              content: U.value,
              contentType: "roll",
              isPrivate: d,
            };
            ke(V), he(), Ee(), (U.value.alive = !0), u();
          } catch {
            (w.value.message = "Incorrect dice value"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        we = (a, o) => {
          try {
            const s = Ba(a, o);
            (H.value.title = o.name),
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
            (w.value.message = "Incorrect dice value"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        ma = (a) => {
          const o = [];
          if (a.damage)
            for (const d of a.damage) o.push(`(${d.value} - ${d.damageType})`);
          return o.join(" + ");
        },
        ha = (a) => {
          const o =
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
          let V = 0;
          if (Y.length > 1)
            Y.map((E) => {
              E.includes("d") ||
                (parseInt(E) >= a.criticalRange && (V = 1),
                parseInt(E) === 1 && (V = -1),
                parseInt(E) === 1 && a.criticalRange === 1 && (V = 1));
            });
          else {
            const E = k.output.substring(
              k.output.indexOf("[") + 1,
              k.output.indexOf("]")
            );
            parseInt(E) >= a.criticalRange && (V = 1),
              parseInt(E) === 1 && (V = -1);
          }
          const Ye = a.damage[0].value !== "" ? `${a.damage[0].value}` : "0";
          let fe = 0,
            K = "";
          if (V === 1)
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
              critical: V,
              attackInfo: o,
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
        Pe = (a, o) => {
          try {
            const s = ha(o);
            (H.value.title = o.name || "Attack"),
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
            (w.value.message = "Incorrect dice value"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        Oe = (a, o) => {
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
          o === "actions"
            ? d[o].push({ id: aa(), name: "New Action" })
            : d[o].push({ id: aa(), name: "New Power" }),
            N();
        },
        Re = (a, o = "Result") => {
          me(a, "DM", o, te.value);
        };
      _e(h, () => {
        h.value >= 1023
          ? D.value
            ? (f.value = C)
            : (f.value = m)
          : D.value
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
          t.value && D.value && ((t.value.anotations[a.key] = a.value), N());
        },
        Ve = () => {
          var o, s;
          if (!t.value || !D.value) return;
          t.value.masterMacros || (t.value.masterMacros = []);
          const a = { title: "New Die", value: "3d20k1" };
          (s = (o = t.value) == null ? void 0 : o.masterMacros) == null ||
            s.unshift(a),
            N();
        },
        Le = (a) => {
          var o, s;
          (o = t.value) != null &&
            o.masterMacros &&
            ((s = t.value) == null || s.masterMacros.splice(a, 1), N());
        },
        Be = (a, o, s) => {
          var d;
          (d = t.value) != null &&
            d.masterMacros &&
            ((t.value.masterMacros[s][o] = a.target.value), N());
        },
        Ue = (a) => {
          var d;
          if (!((d = t.value) != null && d.masterMacros)) return;
          const o = t.value.masterMacros[a].value,
            s = t.value.masterMacros[a].title;
          Re(o, s);
        },
        Fe = (a, o) => {
          let s;
          return (
            a > 0
              ? (s = `${a}d20kh1` + (o !== 0 ? `+${o}` : ""))
              : (s = `${Math.abs(a) + 2}d20kl1` + (o !== 0 ? `+${o}` : "")),
            new re(s.trim()).total
          );
        },
        qe = (a) => {
          if (!t.value || !t.value.combats) return;
          const o = {
            STR: "str",
            AGI: "dex",
            INT: "int",
            PRE: "pre",
            VIG: "con",
          };
          t.value.currentCombat = a;
          for (const s of W.value) {
            const d = s.attributes[o[s.skills[10].attribute]];
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
        Ke = (a, o, s, d) => {
          let c;
          a > 0
            ? (c = `${a}d20kh1` + (o !== 0 ? `+${o}` : ""))
            : (c = `${Math.abs(a) + 2}d20kl1` + (o !== 0 ? `+${o}` : "")),
            me(c, d, s);
        },
        Qe = (a, o, s, d) => {
          let c;
          a > 0
            ? (c = `${a}d20kh1` + (o !== 0 ? `+${o}` : ""))
            : (c = `${Math.abs(a) + 2}d20kl1` + (o !== 0 ? `+${o}` : "")),
            me(c, d, s);
        },
        ze = (a, o, s) => {
          me(a, s, o);
        },
        pe = (a, o, s) => {
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
            (s || (c.pvCurrent = o),
            s === "current" && (c.pvCurrent = o),
            s === "max" && (c.pvMax = o),
            N());
        },
        We = (a, o, s) => {
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
              const c = d.actions.findIndex((k) => k.id === o);
              c > -1 && d.actions.splice(c, 1);
            } else {
              const c = d.powers.findIndex((k) => k.id === o);
              c > -1 && d.powers.splice(c, 1);
            }
            N();
          }
        },
        je = (a) => {
          ne(), (ie.value = !0), (ue.value = a);
        },
        Xe = (a, o, s) => {
          if (
            t.value &&
            t.value.combats &&
            !(t.value.currentCombat === void 0 || t.value.currentCombat < 0)
          )
            if (
              (ne(),
              (ce.value = !0),
              (de.value = t.value.combats[
                t.value.currentCombat
              ].creatures.findIndex((d) => d.id === a.id)),
              s === "Action")
            ) {
              const d = a.actions.findIndex((c) => c.id === o);
              (oe.value = a.actions[d]), (ve.value = "Action");
            } else {
              const d = a.powers.findIndex((c) => c.id === o);
              (oe.value = a.powers[d]), (ve.value = "Power");
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
          const o = t.value.combats[t.value.currentCombat].creatures[de.value];
          if (ve.value === "Action") {
            const s = o.actions.findIndex((d) => d.id === a.id);
            s > -1 && (o.actions[s] = a);
          } else {
            const s = o.powers.findIndex((d) => d.id === a.id);
            s > -1 && (o.powers[s] = a);
          }
          N(), ne();
        },
        Je = () => {
          (ie.value = !1), (ue.value = void 0);
        },
        fa = () => {
          (ce.value = !1), (oe.value = void 0), (de.value = void 0);
        },
        ne = () => {
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
          const o = t.value.combats[t.value.currentCombat].creatures.findIndex(
            (s) => s.id === a.id
          );
          o < 0 ||
            ((t.value.combats[t.value.currentCombat].creatures[o] = a),
            N(),
            Je());
        },
        Ze = (a, o) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const s = W.value.findIndex((c) => c.id === o),
            d = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (c) => c.id === o
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
          D.value &&
            O.value &&
            ((O.value.campaignLogMessages = []),
            le(j(b, "campaignLogs", O.value.id), O.value));
        };
      return (a, o) => {
        var d;
        const s = Ta("vue-final-modal");
        return p.value
          ? (n(), i("div", ys, [M(Ea, { "page-loading": "" })]))
          : (n(),
            i("div", ns, [
              ae.value && !D.value
                ? (n(),
                  i("div", ss, [
                    ls,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick: o[0] || (o[0] = (c) => a.$router.push("/")),
                      },
                      " Return "
                    ),
                  ]))
                : (n(),
                  i("div", rs, [
                    h.value >= 1023
                      ? (n(),
                        i("div", is, [
                          e(
                            "div",
                            {
                              class: "page-title",
                              onClick:
                                o[1] ||
                                (o[1] = (c) => {
                                  var k;
                                  return a.$router.push({
                                    name: "campaign-page",
                                    params: {
                                      id: (k = t.value) == null ? void 0 : k.id,
                                    },
                                  });
                                }),
                            },
                            S((d = t.value) == null ? void 0 : d.name),
                            1
                          ),
                          e("div", cs, [
                            e("div", us, [
                              O.value
                                ? (n(),
                                  I(
                                    ea,
                                    {
                                      key: 0,
                                      "master-screen": "",
                                      "is-dm": D.value,
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
                                  De,
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
                              (n(),
                              I(
                                Q,
                                null,
                                [
                                  P.value === 0
                                    ? (n(),
                                      I(
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
                              (n(),
                              I(
                                Q,
                                null,
                                [
                                  P.value === 1 && t.value
                                    ? (n(),
                                      I(
                                        na,
                                        {
                                          key: 0,
                                          campaign: t.value,
                                          characters: W.value,
                                          "is-dm": D.value,
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
                              (n(),
                              I(
                                Q,
                                null,
                                [
                                  t.value
                                    ? (n(),
                                      i("div", ms, [
                                        P.value === 2
                                          ? (n(),
                                            I(
                                              oa,
                                              {
                                                key: 0,
                                                "dm-private-dice": te.value,
                                                campaign: t.value,
                                                onHandleChangeDmPrivateDice:
                                                  o[2] ||
                                                  (o[2] = (c) =>
                                                    (te.value = c)),
                                                onHandleRollMasterDices: Re,
                                                onHandleAddDiceMacro: Ve,
                                                onHandleRemoveDiceMacro:
                                                  o[3] || (o[3] = (c) => Le(c)),
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
                              (n(),
                              I(
                                Q,
                                null,
                                [
                                  t.value
                                    ? (n(),
                                      i("div", hs, [
                                        P.value === 3
                                          ? (n(),
                                            I(
                                              sa,
                                              {
                                                key: 0,
                                                campaign: t.value,
                                                onHandleChangeCampaignAnotations:
                                                  o[4] || (o[4] = (c) => Ne(c)),
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
                      : (n(),
                        i("div", ps, [
                          e("div", fs, [
                            M(
                              De,
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
                            ? (n(),
                              i("div", _s, [
                                (n(),
                                I(
                                  Q,
                                  null,
                                  [
                                    O.value
                                      ? (n(),
                                        I(
                                          ea,
                                          {
                                            key: 0,
                                            "master-screen": "",
                                            "is-dm": D.value,
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
                          (n(),
                          I(
                            Q,
                            null,
                            [
                              P.value === 1
                                ? (n(),
                                  I(
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
                          (n(),
                          I(
                            Q,
                            null,
                            [
                              P.value === 2 && t.value
                                ? (n(),
                                  I(
                                    na,
                                    {
                                      key: 0,
                                      campaign: t.value,
                                      characters: W.value,
                                      "is-dm": D.value,
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
                          (n(),
                          I(
                            Q,
                            null,
                            [
                              t.value
                                ? (n(),
                                  i("div", bs, [
                                    P.value === 3
                                      ? (n(),
                                        I(
                                          oa,
                                          {
                                            key: 0,
                                            "dm-private-dice": te.value,
                                            campaign: t.value,
                                            onHandleChangeDmPrivateDice:
                                              o[5] ||
                                              (o[5] = (c) => (te.value = c)),
                                            onHandleRollMasterDices: Re,
                                            onHandleAddDiceMacro: Ve,
                                            onHandleRemoveDiceMacro:
                                              o[6] || (o[6] = (c) => Le(c)),
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
                          (n(),
                          I(
                            Q,
                            null,
                            [
                              t.value
                                ? (n(),
                                  i("div", gs, [
                                    P.value === 4
                                      ? (n(),
                                        I(
                                          sa,
                                          {
                                            key: 0,
                                            campaign: t.value,
                                            onHandleChangeCampaignAnotations:
                                              o[7] || (o[7] = (c) => Ne(c)),
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
                            ? (n(),
                              i("div", Cs, [
                                M(
                                  Ae,
                                  { name: "toast" },
                                  {
                                    default: se(() => [
                                      U.value.alive
                                        ? (n(),
                                          I(
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
                            ? (n(),
                              i("div", $s, [
                                M(
                                  Ae,
                                  { name: "toast" },
                                  {
                                    default: se(() => [
                                      H.value.alive
                                        ? (n(),
                                          I(
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
                      Ae,
                      { name: "toast" },
                      {
                        default: se(() => [
                          w.value.alive
                            ? (n(),
                              I(
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
                      ? (n(),
                        i("div", ks, [
                          M(
                            s,
                            {
                              modelValue: ie.value,
                              "onUpdate:modelValue":
                                o[8] || (o[8] = (c) => (ie.value = c)),
                              classes: "modal-container",
                            },
                            {
                              default: se(() => [
                                M(
                                  ts,
                                  {
                                    creature: ue.value,
                                    onHandleEditCreature: _a,
                                    onHandleCloseModal: ne,
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
                    oe.value
                      ? (n(),
                        i("div", Rs, [
                          M(
                            s,
                            {
                              modelValue: ce.value,
                              "onUpdate:modelValue":
                                o[9] || (o[9] = (c) => (ce.value = c)),
                              classes: "modal-container",
                            },
                            {
                              default: se(() => [
                                M(
                                  ja,
                                  {
                                    action: oe.value,
                                    title: ve.value,
                                    onHandleCloseModal: ne,
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
  xs = B(As, [["__scopeId", "data-v-8ca3889b"]]);
export { xs as default };

import {
  d as N,
  f as Q,
  o,
  c as i,
  a as e,
  m as S,
  t as M,
  C as _a,
  k as y,
  p as x,
  b as X,
  _ as B,
  n as j,
  q as ee,
  r as $,
  x as oa,
  y as sa,
  z as la,
  E as ra,
  g as De,
  h as ba,
  J as ga,
  A as H,
  e as ia,
  M as Ca,
  u as $a,
  S as ka,
  H as Ra,
  P as Z,
  Z as Re,
  R as Aa,
  F as ya,
  B as Da,
  $ as Ia,
  w as pe,
  i as Sa,
  a0 as z,
  v as fe,
  T as Je,
  L as Ae,
} from "./index-R0omtfCh.js";
import { L as Ma } from "./LoadingView-3PnmBxfB.js";
import {
  I as Y,
  A as Ha,
  F as Ea,
  a as Ta,
  u as wa,
  C as Ze,
  d as Pa,
  r as Oa,
  T as Va,
  b as Na,
  f as Ba,
  c as La,
  D as se,
} from "./characterSheetUtils-ny071EEm.js";
import { T as ye } from "./TabNav-i5pnIhG4.js";
import { _ as Ie } from "./d20-icon-vaz1En3o.js";
import { S as Ua } from "./SwitchButtonBool-RRYQtpJ1.js";
import { C as Fa } from "./CombatCard-rdfFWFrL.js";
import { l as qa } from "./lodash-gzw5KmHd.js";
import { C as Ga, A as Ka } from "./ActionModal-gCX_TxiG.js";
import { g as za } from "./firebase-M2_dwsIb.js";
import { P as Qa } from "./PrivateFeat-HoGmnEwF.js";
import { T as Wa } from "./ToastNotification-UC8TDHNU.js";
import { C as ja } from "./CreatureForm-fpIurk5m.js";
import { v as Ye } from "./v4-cyCr5FZV.js";
import "./edit-icon-u1vf_q3w.js";
import "./classes-j7W_HvC7.js";
import "./show-more-icon-VvUXKiHG.js";
import "./skills-siTAQjCS.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./creatureData-jLpja1fz.js";
import "./default-tJ6A0c0K.js";
import "./forms-8DDAOOVU.js";
import "./DropdownSimple-MAVPy8cy.js";
import "./blank-profile-picture-wMh28flS.js";
import "./PictureModal-ejmO73AK.js";
import "./index.esm2017-FewWT372.js";
const q = (v) => (x("data-v-25b5f433"), (v = v()), X(), v),
  xa = { class: "char-status-card-container" },
  Xa = { class: "header" },
  Ja = { key: 0 },
  Za = ["src"],
  Ya = { key: 0, class: "agent-name" },
  et = { key: 1, class: "agent-name" },
  at = { class: "basic-info" },
  tt = { class: "basic-info" },
  nt = { class: "basic-combat-info" },
  ot = { key: 0 },
  st = { key: 1 },
  lt = { class: "attributes-container" },
  rt = { class: "combat-info" },
  it = q(() => e("div", null, "AGI", -1)),
  ct = { class: "combat-info-value" },
  ut = { class: "combat-info" },
  dt = q(() => e("div", null, "STR", -1)),
  vt = { class: "combat-info-value" },
  mt = { class: "combat-info" },
  ht = q(() => e("div", null, "INT", -1)),
  pt = { class: "combat-info-value" },
  ft = { class: "combat-info" },
  _t = q(() => e("div", null, "PRE", -1)),
  bt = { class: "combat-info-value" },
  gt = { class: "combat-info" },
  Ct = q(() => e("div", null, "VIG", -1)),
  $t = { class: "combat-info-value" },
  kt = { class: "bars-container" },
  Rt = { class: "combat-info-container-first" },
  At = { class: "combat-info-row" },
  yt = q(() => e("div", null, "EP/TURN: ", -1)),
  Dt = { class: "combat-info-value" },
  It = { class: "combat-info-row" },
  St = q(() => e("div", null, "MOV: ", -1)),
  Mt = { class: "combat-info-value" },
  Ht = { class: "combat-info-container" },
  Et = { class: "combat-info" },
  Tt = q(() => e("div", null, "DEFENSE", -1)),
  wt = { class: "combat-info-value" },
  Pt = { class: "combat-info" },
  Ot = q(() => e("div", null, "BLOCK DR", -1)),
  Vt = { class: "combat-info-value" },
  Nt = { class: "combat-info" },
  Bt = q(() => e("div", null, "DODGE", -1)),
  Lt = { class: "combat-info-value" },
  Ut = N({
    __name: "CharStatusCard",
    props: { character: {} },
    setup(v) {
      const c = v,
        b = "https://crisordemparanormal.com/" + "agente/" + c.character.id,
        _ = Q(() =>
          c.character.movement === 0 ? 0 : c.character.movement / 1.5
        ),
        D = Q(() => {
          const u =
            10 +
            c.character.attributes.dex +
            c.character.protectionDefense +
            c.character.bonusDefense;
          return u > 0 ? u : 0;
        }),
        k = Q(() => c.character.skills[9].bonus),
        g = Q(() => c.character.skills[20].bonus + D.value); // Esquiva 
      return (u, A) => (
        o(),
        i("div", xa, [
          e("div", Xa, [
            u.character.sheetPictureURL
              ? (o(),
                i("div", Ja, [
                  e(
                    "img",
                    {
                      class: "card-img",
                      src: u.character.sheetPictureURL,
                      alt: "foto agente",
                    },
                    null,
                    8,
                    Za
                  ),
                ]))
              : S("", !0),
            e("div", null, [
              u.character.name !== ""
                ? (o(), i("div", Ya, M(u.character.name), 1))
                : (o(), i("div", et, " [Sem nome] ")),
              e("div", at, M(u.character.className), 1),
              e("div", tt, M(u.character.backgroundName), 1),
              e("div", nt, [
                _a(" NEX: "),
                u.character.statsClass !== "Mundane"
                  ? (o(), i("span", ot, M(u.character.nex), 1))
                  : (o(), i("span", st, "0%")),
              ]),
            ]),
          ]),
          e("div", lt, [
            e("div", rt, [it, e("div", ct, M(u.character.attributes.dex), 1)]),
            e("div", ut, [dt, e("div", vt, M(u.character.attributes.str), 1)]),
            e("div", mt, [ht, e("div", pt, M(u.character.attributes.int), 1)]),
            e("div", ft, [_t, e("div", bt, M(u.character.attributes.pre), 1)]),
            e("div", gt, [Ct, e("div", $t, M(u.character.attributes.con), 1)]),
          ]),
          e("div", kt, [
            y(
              Y,
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
            y(
              Y,
              {
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
            ),
            y(
              Y,
              {
                type: "pe",
                "disabled-sheet": "",
                "master-screen": "",
                "max-value": u.character.maxPe,
                "current-value": u.character.currentPe,
              },
              null,
              8,
              ["max-value", "current-value"]
            ),
          ]),
          e("div", Rt, [
            e("div", At, [yt, e("span", Dt, M(u.character.peTurn), 1)]),
            e("div", It, [
              St,
              e(
                "span",
                Mt,
                M(u.character.movement) + "m / " + M(_.value) + "sq ",
                1
              ),
            ]),
          ]),
          e("div", Ht, [
            e("div", Et, [Tt, e("div", wt, M(D.value), 1)]),
            e("div", Pt, [
              Ot,
              e("div", Vt, M(u.character.block || k.value), 1),
            ]),
            e("div", Nt, [
              Bt,
              e("div", Lt, M(u.character.evade || g.value), 1),
            ]),
          ]),
          e("div", { class: "footer" }, [
            e(
              "a",
              { class: "sheet-link", href: b, target: "_blank" },
              " Sheet "
            ),
          ]),
        ])
      );
    },
  }),
  Ft = B(Ut, [["__scopeId", "data-v-25b5f433"]]),
  qt = (v) => (x("data-v-cd3d2f92"), (v = v()), X(), v),
  Gt = { key: 0, class: "master-screen-chars-container" },
  Kt = { key: 1, class: "no-chars-message" },
  zt = qt(() => e("h3", null, "There are no agents on this campaign", -1)),
  Qt = [zt],
  Wt = N({
    __name: "MasterScreenChars",
    props: { characters: {} },
    setup(v) {
      return (c, m) =>
        c.characters.length > 0
          ? (o(),
            i("div", Gt, [
              (o(!0),
              i(
                j,
                null,
                ee(
                  c.characters,
                  (b) => (
                    o(),
                    i("div", { key: b.id }, [
                      y(Ft, { character: b }, null, 8, ["character"]),
                    ])
                  )
                ),
                128
              )),
            ]))
          : (o(), i("div", Kt, Qt));
    },
  }),
  ea = B(Wt, [["__scopeId", "data-v-cd3d2f92"]]),
  Se = (v) => (x("data-v-91a251a9"), (v = v()), X(), v),
  jt = { class: "add-dices-button-container" },
  xt = { class: "input-container" },
  Xt = { class: "roll-dices-container" },
  Jt = ["onKeyup"],
  Zt = Se(() =>
    e("img", { class: "dice-icon", src: Ie, alt: "rolar" }, null, -1)
  ),
  Yt = [Zt],
  en = { class: "master-macro-container" },
  an = { class: "master-macro" },
  tn = { class: "master-macro-inputs-container" },
  nn = ["value", "onBlur"],
  on = ["value", "onBlur"],
  sn = { class: "master-macro-card-buttons-container" },
  ln = ["onClick"],
  rn = Se(() =>
    e("img", { class: "close-icon", src: ra, alt: "fechar" }, null, -1)
  ),
  cn = [rn],
  un = ["onClick"],
  dn = Se(() =>
    e("img", { class: "dice-icon", src: Ie, alt: "rolar" }, null, -1)
  ),
  vn = [dn],
  mn = N({
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
    setup(v, { emit: c }) {
      const m = c,
        b = $(""),
        _ = () => {
          m("handleRollMasterDices", b.value), (b.value = "");
        },
        D = ["PUBLIC", "PRIVATE"];
      return (k, g) => (
        o(),
        i(
          j,
          null,
          [
            e("div", jt, [
              e(
                "button",
                {
                  class: "button-primary",
                  onClick:
                    g[0] || (g[0] = (u) => k.$emit("handleAddDiceMacro")),
                },
                " Add Dice "
              ),
            ]),
            e("div", xt, [
              e("div", Xt, [
                oa(
                  e(
                    "input",
                    {
                      "onUpdate:modelValue":
                        g[1] || (g[1] = (u) => (b.value = u)),
                      type: "text",
                      class: "roll-dice-input",
                      placeholder: "Roll dice",
                      onKeyup: la(_, ["enter"]),
                    },
                    null,
                    40,
                    Jt
                  ),
                  [[sa, b.value]]
                ),
                e("button", { class: "dice-button", onClick: _ }, Yt),
              ]),
              y(
                Ua,
                {
                  value: k.dmPrivateDice,
                  options: D,
                  onHandleChange:
                    g[2] ||
                    (g[2] = (u) => k.$emit("handleChangeDmPrivateDice", u)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", en, [
              (o(!0),
              i(
                j,
                null,
                ee(
                  k.campaign.masterMacros,
                  (u, A) => (
                    o(),
                    i("div", { key: A, class: "master-macro-card" }, [
                      e("div", an, [
                        e("div", tn, [
                          e(
                            "input",
                            {
                              value: u.title,
                              type: "text",
                              class: "master-macro-input-title",
                              placeholder: "Nome",
                              onBlur: (R) =>
                                k.$emit("handleChangeDiceMacro", R, "title", A),
                            },
                            null,
                            40,
                            nn
                          ),
                          e(
                            "input",
                            {
                              value: u.value,
                              type: "text",
                              class: "master-macro-input",
                              placeholder: "Value",
                              onBlur: (R) =>
                                k.$emit("handleChangeDiceMacro", R, "value", A),
                            },
                            null,
                            40,
                            on
                          ),
                        ]),
                        e("div", sn, [
                          e(
                            "button",
                            {
                              class: "close-button",
                              onClick: (R) =>
                                k.$emit("handleRemoveDiceMacro", A),
                            },
                            cn,
                            8,
                            ln
                          ),
                          e(
                            "button",
                            {
                              class: "dice-button",
                              onClick: (R) => k.$emit("handleRollDiceMacro", A),
                            },
                            vn,
                            8,
                            un
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
  aa = B(mn, [["__scopeId", "data-v-91a251a9"]]),
  hn = (v) => (x("data-v-55f9b842"), (v = v()), X(), v),
  pn = { class: "initiative-order-container" },
  fn = ["onClick"],
  _n = { class: "initiative-container" },
  bn = hn(() => e("div", { class: "iniative-label" }, " INITIATIVE ", -1)),
  gn = ["value", "onBlur"],
  Cn = { key: 0, class: "profile-picture-container" },
  $n = ["src"],
  kn = { key: 1, class: "profile-picture-placeholder" },
  Rn = { class: "card-name" },
  An = N({
    __name: "InitiativeOrder",
    props: { currentCombat: {}, characters: {}, isDm: { type: Boolean } },
    emits: ["handleSelectSheet", "handleChangeInitiative"],
    setup(v, { emit: c }) {
      const m = v,
        b = c,
        _ = De(),
        D = $([...m.currentCombat.creatures, ...m.characters]),
        k = Q(() => {
          const A = qa.cloneDeep(D.value);
          return (
            A.sort(
              (R, l) => (
                R.initiativeValue || (R.initiativeValue = 0),
                l.initiativeValue || (l.initiativeValue = 0),
                l.initiativeValue - R.initiativeValue
              )
            ),
            A
          );
        }),
        g = (A, R) => {
          const l = A.target.valueAsNumber;
          b("handleChangeInitiative", l, R);
        },
        u = (A) => {
          if (m.isDm) {
            b("handleSelectSheet", A);
            return;
          }
          _.currentUser &&
            _.currentUser.uid ===
              D.value[D.value.findIndex((R) => R.id === A)].uid &&
            b("handleSelectSheet", A);
        };
      return (A, R) => (
        o(),
        i("div", pn, [
          (o(!0),
          i(
            j,
            null,
            ee(
              k.value,
              (l) => (
                o(),
                i("div", { key: l.id, class: "initiative-card-container" }, [
                  e(
                    "div",
                    { class: "order-card-row", onClick: (h) => u(l.id || "") },
                    [
                      e("div", _n, [
                        bn,
                        e(
                          "input",
                          {
                            value: l.initiativeValue,
                            type: "number",
                            class: "sheet-input initiative-input",
                            onBlur: (h) => g(h, l.id || ""),
                          },
                          null,
                          40,
                          gn
                        ),
                      ]),
                      l.sheetPictureURL
                        ? (o(),
                          i("div", Cn, [
                            e(
                              "img",
                              {
                                class: "profile-picture",
                                src: l.sheetPictureURL,
                                alt: "foto agente",
                              },
                              null,
                              8,
                              $n
                            ),
                          ]))
                        : (o(), i("div", kn)),
                      e("div", Rn, M(l.name), 1),
                    ],
                    8,
                    fn
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
  yn = B(An, [["__scopeId", "data-v-55f9b842"]]),
  Dn = { class: "character-header-container" },
  In = { key: 0 },
  Sn = ["src"],
  Mn = { class: "info-container" },
  Hn = { class: "info-row header-row" },
  En = { class: "data-container" },
  Tn = { class: "info-column" },
  wn = ["title"],
  Pn = { class: "info-row" },
  On = { class: "info-text" },
  Vn = { class: "info-bar-wrapper" },
  Nn = N({
    __name: "CharacterCombatSheetHeader",
    props: { character: {} },
    setup(v) {
      return (c, m) => (
        o(),
        i("div", Dn, [
          e("div", null, [
            c.character.sheetPictureURL
              ? (o(),
                i("div", In, [
                  e(
                    "img",
                    {
                      class: "character-picture",
                      src: c.character.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    Sn
                  ),
                ]))
              : S("", !0),
          ]),
          e("div", Mn, [
            e("div", Hn, [
              e("div", En, [
                e("div", Tn, [
                  e(
                    "div",
                    { class: "character-name", title: c.character.name },
                    M(c.character.name),
                    9,
                    wn
                  ),
                  e("div", Pn, [
                    e(
                      "div",
                      On,
                      M(c.character.className) +
                        " - EXP: " +
                        M(c.character.nex),
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", Vn, [
              y(
                Y,
                {
                  type: "pv",
                  "max-value": c.character.maxPv,
                  "current-value": c.character.currentPv,
                  marks: c.character.deathMarks,
                  "mark-mode": c.character.deathMode,
                  "combat-sheet": "",
                  "master-screen": "",
                  "disabled-sheet": "",
                },
                null,
                8,
                ["max-value", "current-value", "marks", "mark-mode"]
              ),
              y(
                Y,
                {
                  type: "san",
                  character: c.character,
                  "max-value": c.character.maxSan,
                  "current-value": c.character.currentSan,
                  marks: c.character.madnessMarks,
                  "mark-mode": c.character.madnessMode,
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
              y(
                Y,
                {
                  type: "pe",
                  character: c.character,
                  "max-value": c.character.maxPe,
                  "current-value": c.character.currentPe,
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
  Bn = B(Nn, [["__scopeId", "data-v-d1624f56"]]),
  _e = (v) => (x("data-v-6a4e9f30"), (v = v()), X(), v),
  Ln = { class: "stats-row" },
  Un = { class: "stats-container" },
  Fn = _e(() => e("div", { class: "stats-label" }, " DEFENSE ", -1)),
  qn = { class: "stats-value" },
  Gn = { class: "stats-container" },
  Kn = _e(() => e("div", { class: "stats-label" }, " BLOCK DR ", -1)),
  zn = { class: "stats-value" },
  Qn = { class: "stats-container" },
  Wn = _e(() => e("div", { class: "stats-label" }, " DODGE ", -1)),
  jn = { class: "stats-value" },
  xn = { class: "stats-container" },
  Xn = _e(() => e("div", { class: "stats-label" }, " MOVEMENT ", -1)),
  Jn = { class: "stats-value" },
  Zn = N({
    __name: "CharacterCombatSheetStats",
    props: { character: {} },
    emits: ["handleRollAttribute"],
    setup(v) {
      const c = v,
        m = Q(() => {
          const _ =
            10 +
            c.character.attributes.dex +
            c.character.protectionDefense +
            c.character.bonusDefense;
          return _ > 0 ? _ : 0;
        }),
        b = Q(() =>
          c.character.movement === 0 ? 0 : c.character.movement / 1.5
        );
      return (_, D) => (
        o(),
        i(
          j,
          null,
          [
            y(
              Ha,
              {
                character: _.character,
                "disabled-sheet": !1,
                "combat-sheet": "",
                onHandleRollAttribute:
                  D[0] || (D[0] = (k) => _.$emit("handleRollAttribute", k)),
              },
              null,
              8,
              ["character"]
            ),
            e("div", Ln, [
              e("div", Un, [Fn, e("div", qn, M(m.value), 1)]),
              e("div", Gn, [Kn, e("div", zn, M(_.character.block), 1)]),
              e("div", Qn, [Wn, e("div", jn, M(_.character.evade), 1)]),
              e("div", xn, [
                Xn,
                e(
                  "div",
                  Jn,
                  M(_.character.movement) + "m /" + M(b.value) + "sq ",
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
  Yn = B(Zn, [["__scopeId", "data-v-6a4e9f30"]]),
  Me = (v) => (x("data-v-c14dc827"), (v = v()), X(), v),
  eo = { class: "character-combat-container" },
  ao = { key: 0 },
  to = { class: "roll-dices-container" },
  no = ["onKeyup"],
  oo = Me(() =>
    e("img", { class: "dice-icon", src: Ie, alt: "rolar" }, null, -1)
  ),
  so = [oo],
  lo = { key: 1 },
  ro = { key: 0 },
  io = { key: 1, class: "no-content" },
  co = Me(() => e("h3", null, "No attack found", -1)),
  uo = [co],
  vo = { key: 2, class: "no-content" },
  mo = Me(() => e("h3", null, "You have no attacks", -1)),
  ho = [mo],
  po = N({
    __name: "CharacterCombatSheetCombat",
    props: { character: {} },
    emits: [
      "handleOpenAddAttack",
      "handleRemoveAttack",
      "handleEditAttack",
      "handleRollDices",
      "handleRollAttack",
    ],
    setup(v, { emit: c }) {
      const m = v,
        b = c,
        _ = $(""),
        D = $(""),
        k = () => {
          b("handleRollDices", _.value), (_.value = "");
        },
        g = (A) => {
          b("handleRollAttack", A);
        },
        u = Q(() =>
          [...m.character.attacks].filter((R) => ba(R.name, D.value))
        );
      return (A, R) => (
        o(),
        i("div", eo, [
          A.character.attacks.length > 0
            ? (o(),
              i("div", ao, [
                y(
                  Ea,
                  {
                    value: D.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: R[0] || (R[0] = (l) => (D.value = l)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : S("", !0),
          e("div", to, [
            oa(
              e(
                "input",
                {
                  "onUpdate:modelValue": R[1] || (R[1] = (l) => (_.value = l)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: !1,
                  onKeyup: la(k, ["enter"]),
                },
                null,
                40,
                no
              ),
              [[sa, _.value]]
            ),
            e(
              "button",
              {
                class: ga(["dice-button", { disabled: !1 }]),
                disabled: !1,
                onClick: k,
              },
              so
            ),
          ]),
          A.character.attacks.length > 0
            ? (o(),
              i("div", lo, [
                u.value.length > 0
                  ? (o(),
                    i("div", ro, [
                      (o(!0),
                      i(
                        j,
                        null,
                        ee(
                          u.value,
                          (l) => (
                            o(),
                            i("div", { key: l.id, class: "align-card" }, [
                              y(
                                Ta,
                                {
                                  id: l.id,
                                  attack: l,
                                  "disabled-edit": "",
                                  onHandleRemoveAttack:
                                    R[2] ||
                                    (R[2] = (h) =>
                                      A.$emit("handleRemoveAttack", h)),
                                  onHandleEdit: (h) =>
                                    A.$emit("handleEditAttack", h),
                                  onHandleRollAttack: g,
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
                  : (o(), i("div", io, uo)),
              ]))
            : (o(), i("div", vo, ho)),
        ])
      );
    },
  }),
  fo = B(po, [["__scopeId", "data-v-c14dc827"]]),
  _o = { class: "character-sheet-container" },
  bo = { class: "tab-nav-container" },
  go = { class: "character-sheet-content-container" },
  Co = N({
    __name: "CharacterCombatSheet",
    props: { character: {} },
    emits: ["handleRollAttribute", "handleRollDices", "handleRollAttack"],
    setup(v, { emit: c }) {
      const m = v,
        b = c,
        _ = [
          { label: "ATTRIBUTES", value: 0 },
          { label: "COMBAT", value: 1 },
        ],
        D = {
          str: "Strength",
          dex: "Agility",
          int: "Intellect",
          pre: "Presence",
          con: "Vigor",
        },
        k = $(1),
        g = (l) => (k.value = l),
        u = (l) => {
          b(
            "handleRollAttribute",
            m.character.attributes[l],
            D[l],
            m.character.name
          );
        },
        A = (l) => {
          b("handleRollDices", l, "Results", m.character.name);
        },
        R = (l) => {
          b("handleRollAttack", m.character, l);
        };
      return (l, h) => (
        o(),
        i("div", _o, [
          y(Bn, { character: l.character }, null, 8, ["character"]),
          e("div", bo, [
            y(
              ye,
              {
                "tab-options": _,
                "current-tab": k.value,
                onHandleNavigation: g,
              },
              null,
              8,
              ["current-tab"]
            ),
          ]),
          e("div", go, [
            k.value === 0
              ? (o(),
                H(
                  Yn,
                  { key: 0, character: l.character, onHandleRollAttribute: u },
                  null,
                  8,
                  ["character"]
                ))
              : S("", !0),
            k.value === 1
              ? (o(),
                H(
                  fo,
                  {
                    key: 1,
                    character: l.character,
                    onHandleRollDices: A,
                    onHandleRollAttack: R,
                  },
                  null,
                  8,
                  ["character"]
                ))
              : S("", !0),
          ]),
        ])
      );
    },
  }),
  $o = B(Co, [["__scopeId", "data-v-f8950f4c"]]),
  ko = { class: "master-combats-container" },
  Ro = { key: 0, class: "combat-container" },
  Ao = { class: "combat-header" },
  yo = { class: "combat-name" },
  Do = { class: "combat-content-container" },
  Io = { class: "initiative-container" },
  So = { class: "combat-sheet-container" },
  Mo = { key: 0 },
  Ho = { key: 0 },
  Eo = { key: 1 },
  To = { key: 1, class: "no-sheet-text" },
  wo = { key: 1 },
  Po = { key: 0 },
  Oo = { key: 0, class: "cards-container" },
  Vo = { key: 1 },
  No = N({
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
    setup(v, { emit: c }) {
      const m = v,
        b = c,
        _ = $(),
        D = De(),
        k = $(!0),
        g = $(0);
      ia(async () => {
        D.currentUser &&
          ((g.value = await za(D.currentUser.uid)), (k.value = !1));
      });
      const u = () => {
          (_.value = void 0), b("handleFinishCombat");
        },
        A = (l) => {
          if (
            !m.campaign.combats ||
            m.campaign.currentCombat === void 0 ||
            m.campaign.currentCombat < 0
          )
            return;
          if (m.campaign.combats[m.campaign.currentCombat].creatures) {
            const p = m.campaign.combats[
              m.campaign.currentCombat
            ].creatures.findIndex((f) => f.id === l);
            p > -1 && (_.value = { index: p, type: "creature" });
          }
          const h = m.characters.findIndex((p) => p.id === l);
          h > -1 && (_.value = { index: h, type: "character" });
        },
        R = Q(
          () =>
            !(
              !m.campaign.combats ||
              m.campaign.currentCombat === void 0 ||
              m.campaign.currentCombat < 0
            )
        );
      return (l, h) => (
        o(),
        i("div", ko, [
          l.campaign.combats &&
          l.campaign.currentCombat !== void 0 &&
          l.campaign.currentCombat > -1 &&
          R.value
            ? (o(),
              i("div", Ro, [
                e("div", Ao, [
                  e(
                    "div",
                    yo,
                    M(l.campaign.combats[l.campaign.currentCombat].name),
                    1
                  ),
                  l.isDm
                    ? (o(),
                      i(
                        "button",
                        { key: 0, class: "button-secondary", onClick: u },
                        " Finish Encounter "
                      ))
                    : S("", !0),
                ]),
                e("div", Do, [
                  e("div", Io, [
                    y(
                      yn,
                      {
                        characters: l.characters,
                        "is-dm": l.isDm,
                        "current-combat":
                          l.campaign.combats[l.campaign.currentCombat],
                        onHandleSelectSheet: A,
                        onHandleChangeInitiative:
                          h[0] ||
                          (h[0] = (p, f) =>
                            l.$emit("handleChangeInitiative", p, f)),
                      },
                      null,
                      8,
                      ["characters", "is-dm", "current-combat"]
                    ),
                  ]),
                  e("div", So, [
                    _.value
                      ? (o(),
                        i("div", Mo, [
                          _.value.type === "creature"
                            ? (o(),
                              i("div", Ho, [
                                y(
                                  Ga,
                                  {
                                    creature:
                                      l.campaign.combats[
                                        l.campaign.currentCombat
                                      ].creatures[_.value.index],
                                    onHandleChangePvField:
                                      h[1] ||
                                      (h[1] = (p, f, I) =>
                                        l.$emit(
                                          "handleChangeCreaturePvField",
                                          p,
                                          f,
                                          I
                                        )),
                                    onHandleChangePv:
                                      h[2] ||
                                      (h[2] = (p, f) =>
                                        l.$emit(
                                          "handleChangeCreaturePv",
                                          p,
                                          f
                                        )),
                                    onHandleRollAttribute:
                                      h[3] ||
                                      (h[3] = (p, f, I) =>
                                        l.$emit("handleRollAttr", p, 0, f, I)),
                                    onHandleAttack:
                                      h[4] ||
                                      (h[4] = (p, f) =>
                                        l.$emit(
                                          "handleRollCreatureAttack",
                                          p,
                                          f
                                        )),
                                    onHandleAdd:
                                      h[5] ||
                                      (h[5] = (p, f) =>
                                        l.$emit("handleAddCreatureCard", p, f)),
                                    onHandleRemoveAction:
                                      h[6] ||
                                      (h[6] = (p, f, I) =>
                                        l.$emit("handleRemoveAction", p, f, I)),
                                    onHandleEditCreature:
                                      h[7] ||
                                      (h[7] = (p) =>
                                        l.$emit("handleEditCreature", p)),
                                    onHandleEditCreatureAction:
                                      h[8] ||
                                      (h[8] = (p, f, I) =>
                                        l.$emit(
                                          "handleEditCreatureAction",
                                          p,
                                          f,
                                          I
                                        )),
                                    onHandleRollSkill:
                                      h[9] ||
                                      (h[9] = (p, f, I, ae) =>
                                        l.$emit(
                                          "handleRollCreatureSkill",
                                          p,
                                          f,
                                          I,
                                          ae
                                        )),
                                  },
                                  null,
                                  8,
                                  ["creature"]
                                ),
                              ]))
                            : (o(),
                              i("div", Eo, [
                                y(
                                  $o,
                                  {
                                    character: l.characters[_.value.index],
                                    onHandleRollAttribute:
                                      h[10] ||
                                      (h[10] = (p, f, I) =>
                                        l.$emit("handleRollAttr", p, 0, f, I)),
                                    onHandleRollDices:
                                      h[11] ||
                                      (h[11] = (p, f, I) =>
                                        l.$emit("handleRollDices", p, f, I)),
                                    onHandleRollAttack:
                                      h[12] ||
                                      (h[12] = (p, f) =>
                                        l.$emit(
                                          "handleRollCharacterAttack",
                                          p,
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
                          To,
                          " Select the sheet on the initiative tracker to add it here "
                        )),
                  ]),
                ]),
              ]))
            : (o(),
              i("div", wo, [
                l.isDm
                  ? (o(),
                    i("div", Po, [
                      g.value >= 3
                        ? (o(),
                          i("div", Oo, [
                            (o(!0),
                            i(
                              j,
                              null,
                              ee(
                                l.campaign.combats,
                                (p, f) => (
                                  o(),
                                  i("div", { key: p.id }, [
                                    y(
                                      Fa,
                                      {
                                        combat: p,
                                        "is-master-screen": "",
                                        onHandleStart: (I) =>
                                          l.$emit("handleStartCombat", f),
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
                        : (o(), i("div", Vo, [y(Qa)])),
                    ]))
                  : S("", !0),
              ])),
        ])
      );
    },
  }),
  ta = B(No, [["__scopeId", "data-v-27c49579"]]),
  Bo = { class: "textarea-container" },
  Lo = ["placeholder", "value", "onBlur"],
  Uo = N({
    __name: "MasterAnotations",
    props: { campaign: {} },
    emits: ["handleChangeCampaignAnotations"],
    setup(v, { emit: c }) {
      const m = c,
        b = [
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
        _ = (D, k) => {
          const g = { value: D.target.value, key: k };
          m("handleChangeCampaignAnotations", g);
        };
      return (D, k) => (
        o(),
        i(
          j,
          null,
          ee(b, (g) =>
            e("div", { key: g.title }, [
              e("div", Bo, [
                e("h3", null, M(g.title), 1),
                e(
                  "textarea",
                  {
                    class: "textarea description-tab-size",
                    rows: "5",
                    placeholder: g.placeholder,
                    value: D.campaign.anotations[g.key],
                    onBlur: (u) => _(u, g.key),
                  },
                  `\r
      `,
                  40,
                  Lo
                ),
              ]),
            ])
          ),
          64
        )
      );
    },
  }),
  na = B(Uo, [["__scopeId", "data-v-a9aa04a0"]]),
  ca = (v) => (x("data-v-a513e168"), (v = v()), X(), v),
  Fo = { class: "modal-content modal-width" },
  qo = { class: "modal-header" },
  Go = ca(() => e("h2", null, "Threat", -1)),
  Ko = ca(() =>
    e("img", { class: "close-icon", src: ra, alt: "fechar" }, null, -1)
  ),
  zo = [Ko],
  Qo = { class: "modal-body modal-height" },
  Wo = N({
    __name: "CreatureModal",
    props: { creature: {} },
    emits: ["handleEditCreature", "handleCloseModal"],
    setup(v) {
      return (c, m) => (
        o(),
        i("div", Fo, [
          e("div", qo, [
            Go,
            e(
              "button",
              { onClick: m[0] || (m[0] = (b) => c.$emit("handleCloseModal")) },
              zo
            ),
          ]),
          e("div", Qo, [
            y(
              ja,
              {
                creature: c.creature,
                "no-padding": "",
                onHandleEdit:
                  m[1] || (m[1] = (b) => c.$emit("handleEditCreature", b)),
                onHandleClose:
                  m[2] || (m[2] = (b) => c.$emit("handleCloseModal")),
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
  jo = B(Wo, [["__scopeId", "data-v-a513e168"]]),
  xo = (v) => (x("data-v-1bea8a3d"), (v = v()), X(), v),
  Xo = { key: 0 },
  Jo = { key: 0, class: "private-master-screen" },
  Zo = xo(() => e("h1", null, "Private DM Screen", -1)),
  Yo = { key: 1 },
  es = { key: 0, class: "screen-master-container" },
  as = { class: "screen-master-content" },
  ts = { class: "small-screen-log-container" },
  ns = { class: "tab-content-container" },
  os = { class: "tab-nav-container" },
  ss = { key: 0 },
  ls = { key: 0 },
  rs = { key: 1, class: "screen-master-container" },
  is = { class: "tab-nav-container" },
  cs = { key: 0 },
  us = { key: 0 },
  ds = { key: 0 },
  vs = { key: 1 },
  ms = { key: 2 },
  hs = { key: 3 },
  ps = { key: 1 },
  fs = N({
    __name: "MasterScreen",
    setup(v) {
      const { play: c } = wa(Pa),
        m = [
          { label: "AGENTS", value: 0 },
          { label: "ENCOUNTERS", value: 1 },
        ],
        b = [
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
        D = [
          { label: "LOG", value: 0 },
          { label: "AGENTES", value: 1 },
          { label: "ENCOUNTERS", value: 2 },
          { label: "DM'S DICE", value: 3 },
          { label: "DM'S NOTES", value: 4 },
        ],
        k = De(),
        g = Ca(),
        u = $a(),
        R = ka().params.id,
        l = $(0),
        h = $(!0),
        p = $(window.innerWidth),
        f = $(m),
        I = $(!1),
        ae = $(!1),
        P = $(0),
        t = $(),
        W = $([]),
        O = $(),
        te = $(!1),
        le = $(!1),
        re = $(!1),
        ie = $(),
        ce = $(),
        ue = $("Ação"),
        ne = $(),
        be = $(),
        ge = $(),
        Ce = $(),
        w = $({ message: "", type: "info", alive: !1, timeout: 0 }),
        F = $({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        E = $({
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
      ia(async () => {
        var r;
        if (!k.currentUser) return;
        const a = await Ra(Z(g, "campaigns", R));
        a.data() || u.push({ name: "not-found" });
        const n = (r = a.data()) == null ? void 0 : r.campaignLogId;
        (ge.value = Re(Z(g, "campaigns", R), (C) => {
          var G;
          C.data() || u.push({ name: "not-found" }),
            (t.value = C.data()),
            (t.value.id = C.id),
            t.value.privateMasterScreen ? (ae.value = !0) : (ae.value = !1),
            ((G = k.currentUser) == null ? void 0 : G.uid) === t.value.uid &&
              (I.value = !0),
            p.value >= 1023
              ? I.value
                ? (f.value = b)
                : (f.value = m)
              : I.value
              ? (f.value = D)
              : (f.value = _),
            l.value < 3 && l.value++;
        })),
          (Ce.value = Re(Z(g, "campaignLogs", n), (C) => {
            C.data() &&
              ((O.value = C.data()),
              (O.value.id = C.id),
              l.value < 3 && l.value++);
          }));
        const s = Aa(g, "characters"),
          d = ya(s, Da("campaignDocId", "==", a.id));
        (be.value = Re(d, (C) => {
          const G = [];
          for (const J of C.docs) {
            const V = J.data();
            (V.id = J.id), G.push(V);
          }
          (W.value = G), l.value < 3 && l.value++;
        })),
          window.addEventListener("resize", () => {
            p.value = window.innerWidth;
          });
      }),
        Ia(() => {
          be.value && be.value(),
            ge.value && ge.value(),
            Ce.value && Ce.value();
        }),
        pe(l, () => {
          h.value !== !1 && l.value >= 3 && (h.value = !1);
        });
      const He = (a) => (P.value = a),
        L = () => {
          t.value && Ae(Z(g, "campaigns", t.value.id), t.value);
        },
        ua = () => (F.value.alive = !1),
        $e = (a) => {
          t.value &&
            O.value &&
            (O.value.campaignLogMessages.push(a),
            O.value.campaignLogMessages.length > 200 &&
              O.value.campaignLogMessages.shift(),
            Ae(Z(g, "campaignLogs", O.value.id), O.value));
        },
        de = (a, n, s, d = !1) => {
          try {
            const r = Na(a),
              C = r.total,
              G = Ba(r.output),
              J = La(r.output);
            (F.value.title = s),
              (F.value.total = C),
              (F.value.output = G),
              (F.value.notation = J);
            const V = {
              sender: n,
              timestamp: new Date().getTime(),
              content: F.value,
              contentType: "roll",
              isPrivate: d,
            };
            $e(V), ve(), (F.value.alive = !0), c();
          } catch {
            (w.value.message = "Incorrect dice value"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        Ee = (a, n) => {
          try {
            const s = Oa(a, n);
            (E.value.title = n.name),
              (E.value.totalAttack = s.attackTotal),
              (E.value.totalDamage = s.damageTotal),
              (E.value.critical = s.critical),
              (E.value.attackTooltip = s.attackInfo),
              (E.value.damageTooltip = s.damageInfo),
              (E.value.attackRollTooltip = s.attackRollInfo),
              (E.value.damageRollTooltip = s.damageRollInfo),
              (E.value.criticalTooltip = s.criticalInfo);
            const d = {
              sender: a.name,
              timestamp: new Date().getTime(),
              content: E.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            $e(d), ve(), (E.value.alive = !0), c();
          } catch {
            (w.value.message = "Incorrect dice value"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        da = (a) => {
          const n = [];
          if (a.damage)
            for (const d of a.damage) n.push(`(${d.value} - ${d.damageType})`);
          return n.join(" + ");
        },
        va = (a) => {
          const n =
              `${a.rollNumber}d20` +
              (a.rollBonus !== 0 ? ` + ${a.rollBonus}` : ""),
            s = da(a),
            d = `${a.criticalRange}/x${a.criticalMult}`;
          let r;
          a.rollNumber > 0
            ? (r =
                `${a.rollNumber}d20kh1` +
                (a.rollBonus !== 0 ? `+${a.rollBonus}` : ""))
            : (r =
                `${Math.abs(a.rollNumber) + 2}d20kl1` +
                (a.rollBonus !== 0 ? `+${a.rollBonus}` : ""));
          const C = new se(r.trim()),
            G = C.total,
            J = C.output
              .substring(C.output.indexOf("[") + 1, C.output.indexOf("]"))
              .split(",");
          let V = 0;
          if (J.length > 1)
            J.map((T) => {
              T.includes("d") ||
                (parseInt(T) >= a.criticalRange && (V = 1),
                parseInt(T) === 1 && (V = -1),
                parseInt(T) === 1 && a.criticalRange === 1 && (V = 1));
            });
          else {
            const T = C.output.substring(
              C.output.indexOf("[") + 1,
              C.output.indexOf("]")
            );
            parseInt(T) >= a.criticalRange && (V = 1),
              parseInt(T) === 1 && (V = -1);
          }
          const Xe = a.damage[0].value !== "" ? `${a.damage[0].value}` : "0";
          let he = 0,
            K = "";
          if (V === 1)
            for (let T = 0; T < a.criticalMult; T++) {
              const U = new se(Xe.trim());
              (he += U.total),
                (K +=
                  U.output.substring(
                    U.output.indexOf(":") + 1,
                    U.output.indexOf("=") - 1
                  ) + "+");
            }
          else {
            const T = new se(Xe.trim());
            (he += T.total),
              (K +=
                T.output.substring(
                  T.output.indexOf(":") + 1,
                  T.output.indexOf("=") - 1
                ) + "+");
          }
          if (a.damage.length > 1) {
            const T = [];
            for (const fa of a.damage) T.push(fa.value);
            T.splice(0, 1);
            const U = new se(T.join("+"));
            (he += U.total),
              U.output.includes("[")
                ? (K +=
                    U.output.substring(
                      U.output.indexOf(":") + 1,
                      U.output.indexOf("=") - 1
                    ) + "+")
                : (K += U.total + "+");
          }
          return (
            K.charAt(K.length - 1) === "+" && (K = K.slice(0, -1)),
            {
              attackTotal: G,
              damageTotal: he,
              critical: V,
              attackInfo: n,
              damageInfo: s,
              criticalInfo: d,
              attackRollInfo:
                C.output.substring(
                  C.output.indexOf("["),
                  C.output.indexOf("]") + 1
                ) + (a.rollBonus !== 0 ? `+${a.rollBonus}` : ""),
              damageRollInfo: `${K.trim().replace(/\s/g, "")}`,
            }
          );
        },
        Te = (a, n) => {
          try {
            const s = va(n);
            (E.value.title = n.name || "Attack"),
              (E.value.totalAttack = s.attackTotal),
              (E.value.totalDamage = s.damageTotal),
              (E.value.critical = s.critical),
              (E.value.attackTooltip = s.attackInfo),
              (E.value.damageTooltip = s.damageInfo),
              (E.value.attackRollTooltip = s.attackRollInfo),
              (E.value.damageRollTooltip = s.damageRollInfo),
              (E.value.criticalTooltip = s.criticalInfo);
            const d = {
              sender: a.name,
              timestamp: new Date().getTime(),
              content: E.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            $e(d), ve(), (E.value.alive = !0), c();
          } catch {
            (w.value.message = "Incorrect dice value"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        we = (a, n) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const s = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (r) => r.id === a.id
            ),
            d = t.value.combats[t.value.currentCombat].creatures[s];
          n === "actions"
            ? d[n].push({ id: Ye(), name: "New Action" })
            : d[n].push({ id: Ye(), name: "New Power" }),
            L();
        },
        ke = (a, n = "Result") => {
          de(a, "DM", n, te.value);
        };
      pe(p, () => {
        p.value >= 1023
          ? I.value
            ? (f.value = b)
            : (f.value = m)
          : I.value
          ? (f.value = D)
          : (f.value = _);
      }),
        pe(
          () => w.value.alive,
          () => {
            w.value.alive === !0 &&
              (w.value.timeout = window.setTimeout(
                () => (w.value.alive = !1),
                3e3
              ));
          }
        ),
        pe(
          () => P.value,
          () => {
            P.value === 0 && (F.value.alive = !1);
          }
        );
      const ve = () => {
          (w.value.alive = !1), clearTimeout(w.value.timeout);
        },
        Pe = (a) => {
          t.value && I.value && ((t.value.anotations[a.key] = a.value), L());
        },
        Oe = () => {
          var n, s;
          if (!t.value || !I.value) return;
          t.value.masterMacros || (t.value.masterMacros = []);
          const a = { title: "New Die", value: "3d20k1" };
          (s = (n = t.value) == null ? void 0 : n.masterMacros) == null ||
            s.unshift(a),
            L();
        },
        Ve = (a) => {
          var n, s;
          (n = t.value) != null &&
            n.masterMacros &&
            ((s = t.value) == null || s.masterMacros.splice(a, 1), L());
        },
        Ne = (a, n, s) => {
          var d;
          (d = t.value) != null &&
            d.masterMacros &&
            ((t.value.masterMacros[s][n] = a.target.value), L());
        },
        Be = (a) => {
          var d;
          if (!((d = t.value) != null && d.masterMacros)) return;
          const n = t.value.masterMacros[a].value,
            s = t.value.masterMacros[a].title;
          ke(n, s);
        },
        Le = (a, n) => {
          let s;
          return (
            a > 0
              ? (s = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
              : (s = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            new se(s.trim()).total
          );
        },
        Ue = (a) => {
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
            (s.initiativeValue = Le(d, s.skills[10].bonus)),
              Ae(Z(g, "characters", s.id), s);
          }
          for (const s of t.value.combats[t.value.currentCombat].creatures)
            s.initiativeValue = Le(
              s.skills.initiative.rollNumber,
              s.skills.initiative.rollBonus || 0
            );
          L();
        },
        Fe = () => {
          t.value && t.value.combats && ((t.value.currentCombat = -1), L());
        },
        qe = (a, n, s, d) => {
          let r;
          a > 0
            ? (r = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
            : (r = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            de(r, d, s);
        },
        Ge = (a, n, s, d) => {
          let r;
          a > 0
            ? (r = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
            : (r = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            de(r, d, s);
        },
        Ke = (a, n, s) => {
          de(a, s, n);
        },
        me = (a, n, s) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const d = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (C) => C.id === a.id
            ),
            r = t.value.combats[t.value.currentCombat].creatures[d];
          r &&
            (s || (r.pvCurrent = n),
            s === "current" && (r.pvCurrent = n),
            s === "max" && (r.pvMax = n),
            L());
        },
        ze = (a, n, s) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const d = t.value.combats[t.value.currentCombat].creatures.find(
            (r) => r.id === a.id
          );
          if (d) {
            if (s === "actions") {
              const r = d.actions.findIndex((C) => C.id === n);
              r > -1 && d.actions.splice(r, 1);
            } else {
              const r = d.powers.findIndex((C) => C.id === n);
              r > -1 && d.powers.splice(r, 1);
            }
            L();
          }
        },
        Qe = (a) => {
          oe(), (le.value = !0), (ie.value = a);
        },
        We = (a, n, s) => {
          if (
            t.value &&
            t.value.combats &&
            !(t.value.currentCombat === void 0 || t.value.currentCombat < 0)
          )
            if (
              (oe(),
              (re.value = !0),
              (ce.value = t.value.combats[
                t.value.currentCombat
              ].creatures.findIndex((d) => d.id === a.id)),
              s === "Action")
            ) {
              const d = a.actions.findIndex((r) => r.id === n);
              (ne.value = a.actions[d]), (ue.value = "Action");
            } else {
              const d = a.powers.findIndex((r) => r.id === n);
              (ne.value = a.powers[d]), (ue.value = "Power");
            }
        },
        ma = (a) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0 ||
            ce.value === void 0
          )
            return;
          const n = t.value.combats[t.value.currentCombat].creatures[ce.value];
          if (ue.value === "Action") {
            const s = n.actions.findIndex((d) => d.id === a.id);
            s > -1 && (n.actions[s] = a);
          } else {
            const s = n.powers.findIndex((d) => d.id === a.id);
            s > -1 && (n.powers[s] = a);
          }
          L(), oe();
        },
        je = () => {
          (le.value = !1), (ie.value = void 0);
        },
        ha = () => {
          (re.value = !1), (ne.value = void 0), (ce.value = void 0);
        },
        oe = () => {
          je(), ha();
        },
        pa = (a) => {
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
            L(),
            je());
        },
        xe = (a, n) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const s = W.value.findIndex((r) => r.id === n),
            d = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (r) => r.id === n
            );
          s > -1 && (W.value[s].initiativeValue = a),
            d > -1 &&
              (t.value.combats[t.value.currentCombat].creatures[
                d
              ].initiativeValue = a);
        };
      return (a, n) => {
        var d;
        const s = Sa("vue-final-modal");
        return h.value
          ? (o(), i("div", ps, [y(Ma, { "page-loading": "" })]))
          : (o(),
            i("div", Xo, [
              ae.value && !I.value
                ? (o(),
                  i("div", Jo, [
                    Zo,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick: n[0] || (n[0] = (r) => a.$router.push("/")),
                      },
                      " Return "
                    ),
                  ]))
                : (o(),
                  i("div", Yo, [
                    p.value >= 1023
                      ? (o(),
                        i("div", es, [
                          e(
                            "div",
                            {
                              class: "page-title",
                              onClick:
                                n[1] ||
                                (n[1] = (r) => {
                                  var C;
                                  return a.$router.push({
                                    name: "campaign-page",
                                    params: {
                                      id: (C = t.value) == null ? void 0 : C.id,
                                    },
                                  });
                                }),
                            },
                            M((d = t.value) == null ? void 0 : d.name),
                            1
                          ),
                          e("div", as, [
                            e("div", ts, [
                              O.value
                                ? (o(),
                                  H(
                                    Ze,
                                    {
                                      key: 0,
                                      "master-screen": "",
                                      "is-dm": I.value,
                                      "campaign-log": O.value,
                                    },
                                    null,
                                    8,
                                    ["is-dm", "campaign-log"]
                                  ))
                                : S("", !0),
                            ]),
                            e("div", ns, [
                              e("div", os, [
                                y(
                                  ye,
                                  {
                                    "tab-options": f.value,
                                    "current-tab": P.value,
                                    onHandleNavigation: He,
                                  },
                                  null,
                                  8,
                                  ["tab-options", "current-tab"]
                                ),
                              ]),
                              (o(),
                              H(
                                z,
                                null,
                                [
                                  P.value === 0
                                    ? (o(),
                                      H(
                                        ea,
                                        { key: 0, characters: W.value },
                                        null,
                                        8,
                                        ["characters"]
                                      ))
                                    : S("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              H(
                                z,
                                null,
                                [
                                  P.value === 1 && t.value
                                    ? (o(),
                                      H(
                                        ta,
                                        {
                                          key: 0,
                                          campaign: t.value,
                                          characters: W.value,
                                          "is-dm": I.value,
                                          onHandleStartCombat: Ue,
                                          onHandleFinishCombat: Fe,
                                          onHandleRollAttr: qe,
                                          onHandleRollCreatureSkill: Ge,
                                          onHandleRollDices: Ke,
                                          onHandleRollCharacterAttack: Ee,
                                          onHandleRollCreatureAttack: Te,
                                          onHandleAddCreatureCard: we,
                                          onHandleChangeCreaturePv: me,
                                          onHandleChangeCreaturePvField: me,
                                          onHandleRemoveAction: ze,
                                          onHandleEditCreature: Qe,
                                          onHandleEditCreatureAction: We,
                                          onHandleChangeInitiative: xe,
                                        },
                                        null,
                                        8,
                                        ["campaign", "characters", "is-dm"]
                                      ))
                                    : S("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              H(
                                z,
                                null,
                                [
                                  t.value
                                    ? (o(),
                                      i("div", ss, [
                                        P.value === 2
                                          ? (o(),
                                            H(
                                              aa,
                                              {
                                                key: 0,
                                                "dm-private-dice": te.value,
                                                campaign: t.value,
                                                onHandleChangeDmPrivateDice:
                                                  n[2] ||
                                                  (n[2] = (r) =>
                                                    (te.value = r)),
                                                onHandleRollMasterDices: ke,
                                                onHandleAddDiceMacro: Oe,
                                                onHandleRemoveDiceMacro:
                                                  n[3] || (n[3] = (r) => Ve(r)),
                                                onHandleChangeDiceMacro: Ne,
                                                onHandleRollDiceMacro: Be,
                                              },
                                              null,
                                              8,
                                              ["dm-private-dice", "campaign"]
                                            ))
                                          : S("", !0),
                                      ]))
                                    : S("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              H(
                                z,
                                null,
                                [
                                  t.value
                                    ? (o(),
                                      i("div", ls, [
                                        P.value === 3
                                          ? (o(),
                                            H(
                                              na,
                                              {
                                                key: 0,
                                                campaign: t.value,
                                                onHandleChangeCampaignAnotations:
                                                  n[4] || (n[4] = (r) => Pe(r)),
                                              },
                                              null,
                                              8,
                                              ["campaign"]
                                            ))
                                          : S("", !0),
                                      ]))
                                    : S("", !0),
                                ],
                                1024
                              )),
                            ]),
                          ]),
                        ]))
                      : (o(),
                        i("div", rs, [
                          e("div", is, [
                            y(
                              ye,
                              {
                                "tab-options": f.value,
                                "current-tab": P.value,
                                onHandleNavigation: He,
                              },
                              null,
                              8,
                              ["tab-options", "current-tab"]
                            ),
                          ]),
                          P.value === 0
                            ? (o(),
                              i("div", cs, [
                                (o(),
                                H(
                                  z,
                                  null,
                                  [
                                    O.value
                                      ? (o(),
                                        H(
                                          Ze,
                                          {
                                            key: 0,
                                            "master-screen": "",
                                            "is-dm": I.value,
                                            "campaign-log": O.value,
                                          },
                                          null,
                                          8,
                                          ["is-dm", "campaign-log"]
                                        ))
                                      : S("", !0),
                                  ],
                                  1024
                                )),
                              ]))
                            : S("", !0),
                          (o(),
                          H(
                            z,
                            null,
                            [
                              P.value === 1
                                ? (o(),
                                  H(
                                    ea,
                                    { key: 0, characters: W.value },
                                    null,
                                    8,
                                    ["characters"]
                                  ))
                                : S("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          H(
                            z,
                            null,
                            [
                              P.value === 2 && t.value
                                ? (o(),
                                  H(
                                    ta,
                                    {
                                      key: 0,
                                      campaign: t.value,
                                      characters: W.value,
                                      "is-dm": I.value,
                                      onHandleStartCombat: Ue,
                                      onHandleFinishCombat: Fe,
                                      onHandleRollAttr: qe,
                                      onHandleRollCreatureSkill: Ge,
                                      onHandleRollDices: Ke,
                                      onHandleRollCharacterAttack: Ee,
                                      onHandleRollCreatureAttack: Te,
                                      onHandleAddCreatureCard: we,
                                      onHandleChangeCreaturePv: me,
                                      onHandleChangeCreaturePvField: me,
                                      onHandleRemoveAction: ze,
                                      onHandleEditCreature: Qe,
                                      onHandleEditCreatureAction: We,
                                      onHandleChangeInitiative: xe,
                                    },
                                    null,
                                    8,
                                    ["campaign", "characters", "is-dm"]
                                  ))
                                : S("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          H(
                            z,
                            null,
                            [
                              t.value
                                ? (o(),
                                  i("div", us, [
                                    P.value === 3
                                      ? (o(),
                                        H(
                                          aa,
                                          {
                                            key: 0,
                                            "dm-private-dice": te.value,
                                            campaign: t.value,
                                            onHandleChangeDmPrivateDice:
                                              n[5] ||
                                              (n[5] = (r) => (te.value = r)),
                                            onHandleRollMasterDices: ke,
                                            onHandleAddDiceMacro: Oe,
                                            onHandleRemoveDiceMacro:
                                              n[6] || (n[6] = (r) => Ve(r)),
                                            onHandleChangeDiceMacro: Ne,
                                            onHandleRollDiceMacro: Be,
                                          },
                                          null,
                                          8,
                                          ["dm-private-dice", "campaign"]
                                        ))
                                      : S("", !0),
                                  ]))
                                : S("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          H(
                            z,
                            null,
                            [
                              t.value
                                ? (o(),
                                  i("div", ds, [
                                    P.value === 4
                                      ? (o(),
                                        H(
                                          na,
                                          {
                                            key: 0,
                                            campaign: t.value,
                                            onHandleChangeCampaignAnotations:
                                              n[7] || (n[7] = (r) => Pe(r)),
                                          },
                                          null,
                                          8,
                                          ["campaign"]
                                        ))
                                      : S("", !0),
                                  ]))
                                : S("", !0),
                            ],
                            1024
                          )),
                          P.value !== 0
                            ? (o(),
                              i("div", vs, [
                                y(
                                  Je,
                                  { name: "toast" },
                                  {
                                    default: fe(() => [
                                      F.value.alive
                                        ? (o(),
                                          H(
                                            Va,
                                            {
                                              key: 0,
                                              toast: F.value,
                                              onDismiss: ua,
                                            },
                                            null,
                                            8,
                                            ["toast"]
                                          ))
                                        : S("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : S("", !0),
                        ])),
                    y(
                      Je,
                      { name: "toast" },
                      {
                        default: fe(() => [
                          w.value.alive
                            ? (o(),
                              H(
                                Wa,
                                {
                                  key: 0,
                                  toast: w.value,
                                  type: w.value.type,
                                  onDismiss: ve,
                                },
                                null,
                                8,
                                ["toast", "type"]
                              ))
                            : S("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    ie.value
                      ? (o(),
                        i("div", ms, [
                          y(
                            s,
                            {
                              modelValue: le.value,
                              "onUpdate:modelValue":
                                n[8] || (n[8] = (r) => (le.value = r)),
                              classes: "modal-container",
                            },
                            {
                              default: fe(() => [
                                y(
                                  jo,
                                  {
                                    creature: ie.value,
                                    onHandleEditCreature: pa,
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
                      : S("", !0),
                    ne.value
                      ? (o(),
                        i("div", hs, [
                          y(
                            s,
                            {
                              modelValue: re.value,
                              "onUpdate:modelValue":
                                n[9] || (n[9] = (r) => (re.value = r)),
                              classes: "modal-container",
                            },
                            {
                              default: fe(() => [
                                y(
                                  Ka,
                                  {
                                    action: ne.value,
                                    title: ue.value,
                                    onHandleCloseModal: oe,
                                    onHandleEditAction: ma,
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
                      : S("", !0),
                  ])),
            ]));
      };
    },
  }),
  Ks = B(fs, [["__scopeId", "data-v-1bea8a3d"]]);
export { Ks as default };

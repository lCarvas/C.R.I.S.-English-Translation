import {
  d as B,
  f as z,
  o,
  c,
  a as e,
  m as D,
  t as S,
  H as ga,
  k as y,
  p as x,
  b as J,
  _ as L,
  n as X,
  q as ee,
  r as R,
  C as sa,
  D as la,
  E as ra,
  J as ia,
  g as Ie,
  h as Ca,
  a1 as $a,
  v as T,
  e as ca,
  M as ka,
  u as Ra,
  S as Da,
  A as ya,
  P as j,
  Z as De,
  R as Aa,
  F as Ia,
  B as Sa,
  $ as Ma,
  w as _e,
  i as Ha,
  a2 as Q,
  x as se,
  T as ye,
  N as le,
} from "./index-QwuuguuZ.js";
import { L as Ta } from "./LoadingView-BDyk9qee.js";
import {
  I as Y,
  A as Ea,
  F as wa,
  a as Pa,
  u as Oa,
  C as Ye,
  d as Na,
  r as Va,
  T as Ba,
  b as La,
  c as Ua,
  f as Fa,
  e as qa,
  D as re,
} from "./ToastAttack-0kHZxpNW.js";
import { T as Ae } from "./TabNav-0k8MUq4h.js";
import { _ as Se } from "./d20-icon-vaz1En3o.js";
import { S as Ga } from "./SwitchButtonBool-SDRvIcMo.js";
import { C as Ka } from "./CombatCard-Gc3bqO4T.js";
import { C as Qa, A as za } from "./ActionModal-mT8AY3X3.js";
import { g as Wa } from "./firebase-UUb4pQvs.js";
import { P as ja } from "./PrivateFeat-2NQL7iKE.js";
import { T as Xa } from "./ToastNotification-2J6AO8ev.js";
import { C as xa } from "./CreatureForm-WPZOCJnR.js";
import { s as Ja } from "./skins-kfsapBUO.js";
import { v as ea } from "./v4-cyCr5FZV.js";
import "./edit-icon-u1vf_q3w.js";
import "./classes-pvy_AWKl.js";
import "./show-more-icon-VvUXKiHG.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./creatureData-ozdxpDUT.js";
import "./default-tJ6A0c0K.js";
import "./forms-8DDAOOVU.js";
import "./lodash-gzw5KmHd.js";
import "./DropdownSimple-O-H8dkm7.js";
import "./blank-profile-picture-wMh28flS.js";
import "./PictureModal-TrL67c-c.js";
import "./index.esm2017-JfeAG2s4.js";
const q = (v) => (x("data-v-25b5f433"), (v = v()), J(), v),
  Za = { class: "char-status-card-container" },
  Ya = { class: "header" },
  et = { key: 0 },
  at = ["src"],
  tt = { key: 0, class: "agent-name" },
  nt = { key: 1, class: "agent-name" },
  ot = { class: "basic-info" },
  st = { class: "basic-info" },
  lt = { class: "basic-combat-info" },
  rt = { key: 0 },
  it = { key: 1 },
  ct = { class: "attributes-container" },
  ut = { class: "combat-info" },
  dt = q(() => e("div", null, "AGI", -1)),
  vt = { class: "combat-info-value" },
  mt = { class: "combat-info" },
  ht = q(() => e("div", null, "STR", -1)),
  pt = { class: "combat-info-value" },
  ft = { class: "combat-info" },
  _t = q(() => e("div", null, "INT", -1)),
  bt = { class: "combat-info-value" },
  gt = { class: "combat-info" },
  Ct = q(() => e("div", null, "PRE", -1)),
  $t = { class: "combat-info-value" },
  kt = { class: "combat-info" },
  Rt = q(() => e("div", null, "VIG", -1)),
  Dt = { class: "combat-info-value" },
  yt = { class: "bars-container" },
  At = { class: "combat-info-container-first" },
  It = { class: "combat-info-row" },
  St = q(() => e("div", null, "EP/TURN: ", -1)),
  Mt = { class: "combat-info-value" },
  Ht = { class: "combat-info-row" },
  Tt = q(() => e("div", null, "MOV: ", -1)),
  Et = { class: "combat-info-value" },
  wt = { class: "combat-info-container" },
  Pt = { class: "combat-info" },
  Ot = q(() => e("div", null, "DEFENSE", -1)),
  Nt = { class: "combat-info-value" },
  Vt = { class: "combat-info" },
  Bt = q(() => e("div", null, "BLOCK DR", -1)),
  Lt = { class: "combat-info-value" },
  Ut = { class: "combat-info" },
  Ft = q(() => e("div", null, "DODGE", -1)),
  qt = { class: "combat-info-value" },
  Gt = B({
    __name: "CharStatusCard",
    props: { character: {} },
    setup(v) {
      const u = v,
        C = "https://crisordemparanormal.com/" + "agente/" + u.character.id,
        _ = z(() =>
          u.character.movement === 0 ? 0 : u.character.movement / 1.5
        ),
        H = z(() => {
          const r =
            10 +
            u.character.attributes.dex +
            u.character.protectionDefense +
            u.character.bonusDefense;
          return r > 0 ? r : 0;
        }),
        k = z(() => u.character.skills[9].bonus),
        b = z(() => u.character.skills[22].bonus + H.value);
      return (r, A) => (
        o(),
        c("div", Za, [
          e("div", Ya, [
            r.character.sheetPictureURL
              ? (o(),
                c("div", et, [
                  e(
                    "img",
                    {
                      class: "card-img",
                      src: r.character.sheetPictureURL,
                      alt: "foto agente",
                    },
                    null,
                    8,
                    at
                  ),
                ]))
              : D("", !0),
            e("div", null, [
              r.character.name !== ""
                ? (o(), c("div", tt, S(r.character.name), 1))
                : (o(), c("div", nt, " [Sem nome] ")),
              e("div", ot, S(r.character.className), 1),
              e("div", st, S(r.character.backgroundName), 1),
              e("div", lt, [
                ga(" NEX: "),
                r.character.statsClass !== "Mundane"
                  ? (o(), c("span", rt, S(r.character.nex), 1))
                  : (o(), c("span", it, "0%")),
              ]),
            ]),
          ]),
          e("div", ct, [
            e("div", ut, [dt, e("div", vt, S(r.character.attributes.dex), 1)]),
            e("div", mt, [ht, e("div", pt, S(r.character.attributes.str), 1)]),
            e("div", ft, [_t, e("div", bt, S(r.character.attributes.int), 1)]),
            e("div", gt, [Ct, e("div", $t, S(r.character.attributes.pre), 1)]),
            e("div", kt, [Rt, e("div", Dt, S(r.character.attributes.con), 1)]),
          ]),
          e("div", yt, [
            y(
              Y,
              {
                type: "pv",
                "disabled-sheet": "",
                "master-screen": "",
                "max-value": r.character.maxPv,
                "current-value": r.character.currentPv,
                marks: r.character.deathMarks,
                "mark-mode": r.character.deathMode,
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
                "max-value": r.character.maxSan,
                "current-value": r.character.currentSan,
                marks: r.character.madnessMarks,
                "mark-mode": r.character.madnessMode,
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
                "max-value": r.character.maxPe,
                "current-value": r.character.currentPe,
              },
              null,
              8,
              ["max-value", "current-value"]
            ),
          ]),
          e("div", At, [
            e("div", It, [St, e("span", Mt, S(r.character.peTurn), 1)]),
            e("div", Ht, [
              Tt,
              e(
                "span",
                Et,
                S(r.character.movement) + "m / " + S(_.value) + "q ",
                1
              ),
            ]),
          ]),
          e("div", wt, [
            e("div", Pt, [Ot, e("div", Nt, S(H.value), 1)]),
            e("div", Vt, [
              Bt,
              e("div", Lt, S(r.character.block || k.value), 1),
            ]),
            e("div", Ut, [
              Ft,
              e("div", qt, S(r.character.evade || b.value), 1),
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
  Kt = L(Gt, [["__scopeId", "data-v-25b5f433"]]),
  Qt = (v) => (x("data-v-cd3d2f92"), (v = v()), J(), v),
  zt = { key: 0, class: "master-screen-chars-container" },
  Wt = { key: 1, class: "no-chars-message" },
  jt = Qt(() => e("h3", null, "There are no agents on this campaign", -1)),
  Xt = [jt],
  xt = B({
    __name: "MasterScreenChars",
    props: { characters: {} },
    setup(v) {
      return (u, m) =>
        u.characters.length > 0
          ? (o(),
            c("div", zt, [
              (o(!0),
              c(
                X,
                null,
                ee(
                  u.characters,
                  (C) => (
                    o(),
                    c("div", { key: C.id }, [
                      y(Kt, { character: C }, null, 8, ["character"]),
                    ])
                  )
                ),
                128
              )),
            ]))
          : (o(), c("div", Wt, Xt));
    },
  }),
  aa = L(xt, [["__scopeId", "data-v-cd3d2f92"]]),
  Me = (v) => (x("data-v-91a251a9"), (v = v()), J(), v),
  Jt = { class: "add-dices-button-container" },
  Zt = { class: "input-container" },
  Yt = { class: "roll-dices-container" },
  en = ["onKeyup"],
  an = Me(() =>
    e("img", { class: "dice-icon", src: Se, alt: "rolar" }, null, -1)
  ),
  tn = [an],
  nn = { class: "master-macro-container" },
  on = { class: "master-macro" },
  sn = { class: "master-macro-inputs-container" },
  ln = ["value", "onBlur"],
  rn = ["value", "onBlur"],
  cn = { class: "master-macro-card-buttons-container" },
  un = ["onClick"],
  dn = Me(() =>
    e("img", { class: "close-icon", src: ia, alt: "fechar" }, null, -1)
  ),
  vn = [dn],
  mn = ["onClick"],
  hn = Me(() =>
    e("img", { class: "dice-icon", src: Se, alt: "rolar" }, null, -1)
  ),
  pn = [hn],
  fn = B({
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
        C = R(""),
        _ = () => {
          m("handleRollMasterDices", C.value), (C.value = "");
        },
        H = ["PUBLICO", "PRIVADO"];
      return (k, b) => (
        o(),
        c(
          X,
          null,
          [
            e("div", Jt, [
              e(
                "button",
                {
                  class: "button-primary",
                  onClick:
                    b[0] || (b[0] = (r) => k.$emit("handleAddDiceMacro")),
                },
                " Add Dice "
              ),
            ]),
            e("div", Zt, [
              e("div", Yt, [
                sa(
                  e(
                    "input",
                    {
                      "onUpdate:modelValue":
                        b[1] || (b[1] = (r) => (C.value = r)),
                      type: "text",
                      class: "roll-dice-input",
                      placeholder: "Roll dice",
                      onKeyup: ra(_, ["enter"]),
                    },
                    null,
                    40,
                    en
                  ),
                  [[la, C.value]]
                ),
                e("button", { class: "dice-button", onClick: _ }, tn),
              ]),
              y(
                Ga,
                {
                  value: k.dmPrivateDice,
                  options: H,
                  onHandleChange:
                    b[2] ||
                    (b[2] = (r) => k.$emit("handleChangeDmPrivateDice", r)),
                },
                null,
                8,
                ["value"]
              ),
            ]),
            e("div", nn, [
              (o(!0),
              c(
                X,
                null,
                ee(
                  k.campaign.masterMacros,
                  (r, A) => (
                    o(),
                    c("div", { key: A, class: "master-macro-card" }, [
                      e("div", on, [
                        e("div", sn, [
                          e(
                            "input",
                            {
                              value: r.title,
                              type: "text",
                              class: "master-macro-input-title",
                              placeholder: "Nome",
                              onBlur: (g) =>
                                k.$emit("handleChangeDiceMacro", g, "title", A),
                            },
                            null,
                            40,
                            ln
                          ),
                          e(
                            "input",
                            {
                              value: r.value,
                              type: "text",
                              class: "master-macro-input",
                              placeholder: "Value",
                              onBlur: (g) =>
                                k.$emit("handleChangeDiceMacro", g, "value", A),
                            },
                            null,
                            40,
                            rn
                          ),
                        ]),
                        e("div", cn, [
                          e(
                            "button",
                            {
                              class: "close-button",
                              onClick: (g) =>
                                k.$emit("handleRemoveDiceMacro", A),
                            },
                            vn,
                            8,
                            un
                          ),
                          e(
                            "button",
                            {
                              class: "dice-button",
                              onClick: (g) => k.$emit("handleRollDiceMacro", A),
                            },
                            pn,
                            8,
                            mn
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
  ta = L(fn, [["__scopeId", "data-v-91a251a9"]]),
  _n = (v) => (x("data-v-ff197a3e"), (v = v()), J(), v),
  bn = { class: "initiative-order-container" },
  gn = ["onClick"],
  Cn = { class: "initiative-container" },
  $n = _n(() => e("div", { class: "iniative-label" }, " INITIATIVE ", -1)),
  kn = ["value", "onBlur"],
  Rn = { key: 0, class: "profile-picture-container" },
  Dn = ["src"],
  yn = { key: 1, class: "profile-picture-placeholder" },
  An = { class: "card-name" },
  In = B({
    __name: "InitiativeOrder",
    props: { currentCombat: {}, characters: {}, isDm: { type: Boolean } },
    emits: ["handleSelectSheet", "handleChangeInitiative"],
    setup(v, { emit: u }) {
      const m = v,
        C = u,
        _ = Ie(),
        H = z(() => {
          const r = m.characters.concat(m.currentCombat.creatures);
          return (
            r.sort(
              (A, g) => (
                A.initiativeValue || (A.initiativeValue = 0),
                g.initiativeValue || (g.initiativeValue = 0),
                g.initiativeValue - A.initiativeValue
              )
            ),
            r
          );
        }),
        k = (r, A) => {
          const g = r.target.valueAsNumber;
          C("handleChangeInitiative", g, A);
        },
        b = (r) => {
          if (m.isDm) {
            C("handleSelectSheet", r);
            return;
          }
          _.currentUser &&
            _.currentUser.uid ===
              m.characters[m.characters.findIndex((A) => A.id === r)].uid &&
            C("handleSelectSheet", r);
        };
      return (r, A) => (
        o(),
        c("div", bn, [
          (o(!0),
          c(
            X,
            null,
            ee(
              H.value,
              (g) => (
                o(),
                c("div", { key: g.id, class: "initiative-card-container" }, [
                  e(
                    "div",
                    { class: "order-card-row", onClick: (l) => b(g.id || "") },
                    [
                      e("div", Cn, [
                        $n,
                        e(
                          "input",
                          {
                            value: g.initiativeValue,
                            type: "number",
                            class: "sheet-input initiative-input",
                            onBlur: (l) => k(l, g.id || ""),
                          },
                          null,
                          40,
                          kn
                        ),
                      ]),
                      g.sheetPictureURL
                        ? (o(),
                          c("div", Rn, [
                            e(
                              "img",
                              {
                                class: "profile-picture",
                                src: g.sheetPictureURL,
                                alt: "foto agente",
                              },
                              null,
                              8,
                              Dn
                            ),
                          ]))
                        : (o(), c("div", yn)),
                      e("div", An, S(g.name), 1),
                    ],
                    8,
                    gn
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
  Sn = L(In, [["__scopeId", "data-v-ff197a3e"]]),
  Mn = { class: "character-header-container" },
  Hn = { key: 0 },
  Tn = ["src"],
  En = { class: "info-container" },
  wn = { class: "info-row header-row" },
  Pn = { class: "data-container" },
  On = { class: "info-column" },
  Nn = ["title"],
  Vn = { class: "info-row" },
  Bn = { class: "info-text" },
  Ln = { class: "info-bar-wrapper" },
  Un = B({
    __name: "CharacterCombatSheetHeader",
    props: { character: {} },
    setup(v) {
      return (u, m) => (
        o(),
        c("div", Mn, [
          e("div", null, [
            u.character.sheetPictureURL
              ? (o(),
                c("div", Hn, [
                  e(
                    "img",
                    {
                      class: "character-picture",
                      src: u.character.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    Tn
                  ),
                ]))
              : D("", !0),
          ]),
          e("div", En, [
            e("div", wn, [
              e("div", Pn, [
                e("div", On, [
                  e(
                    "div",
                    { class: "character-name", title: u.character.name },
                    S(u.character.name),
                    9,
                    Nn
                  ),
                  e("div", Vn, [
                    e(
                      "div",
                      Bn,
                      S(u.character.className) +
                        " - EXP: " +
                        S(u.character.nex),
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", Ln, [
              y(
                Y,
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
              y(
                Y,
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
              y(
                Y,
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
  Fn = L(Un, [["__scopeId", "data-v-d1624f56"]]),
  be = (v) => (x("data-v-6a4e9f30"), (v = v()), J(), v),
  qn = { class: "stats-row" },
  Gn = { class: "stats-container" },
  Kn = be(() => e("div", { class: "stats-label" }, " DEFENSE ", -1)),
  Qn = { class: "stats-value" },
  zn = { class: "stats-container" },
  Wn = be(() => e("div", { class: "stats-label" }, " BLOCK DR ", -1)),
  jn = { class: "stats-value" },
  Xn = { class: "stats-container" },
  xn = be(() => e("div", { class: "stats-label" }, " DODGE ", -1)),
  Jn = { class: "stats-value" },
  Zn = { class: "stats-container" },
  Yn = be(() => e("div", { class: "stats-label" }, " MOVEMENT ", -1)),
  eo = { class: "stats-value" },
  ao = B({
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
      return (_, H) => (
        o(),
        c(
          X,
          null,
          [
            y(
              Ea,
              {
                character: _.character,
                "disabled-sheet": !1,
                "combat-sheet": "",
                onHandleRollAttribute:
                  H[0] || (H[0] = (k) => _.$emit("handleRollAttribute", k)),
              },
              null,
              8,
              ["character"]
            ),
            e("div", qn, [
              e("div", Gn, [Kn, e("div", Qn, S(m.value), 1)]),
              e("div", zn, [Wn, e("div", jn, S(_.character.block), 1)]),
              e("div", Xn, [xn, e("div", Jn, S(_.character.evade), 1)]),
              e("div", Zn, [
                Yn,
                e(
                  "div",
                  eo,
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
  to = L(ao, [["__scopeId", "data-v-6a4e9f30"]]),
  He = (v) => (x("data-v-c14dc827"), (v = v()), J(), v),
  no = { class: "character-combat-container" },
  oo = { key: 0 },
  so = { class: "roll-dices-container" },
  lo = ["onKeyup"],
  ro = He(() =>
    e("img", { class: "dice-icon", src: Se, alt: "rolar" }, null, -1)
  ),
  io = [ro],
  co = { key: 1 },
  uo = { key: 0 },
  vo = { key: 1, class: "no-content" },
  mo = He(() => e("h3", null, "No attack found", -1)),
  ho = [mo],
  po = { key: 2, class: "no-content" },
  fo = He(() => e("h3", null, "You have no attacks", -1)),
  _o = [fo],
  bo = B({
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
        _ = R(""),
        H = R(""),
        k = () => {
          C("handleRollDices", _.value), (_.value = "");
        },
        b = (A) => {
          C("handleRollAttack", A);
        },
        r = z(() =>
          [...m.character.attacks].filter((g) => Ca(g.name, H.value))
        );
      return (A, g) => (
        o(),
        c("div", no, [
          A.character.attacks.length > 0
            ? (o(),
              c("div", oo, [
                y(
                  wa,
                  {
                    value: H.value,
                    width: "100%",
                    placeholder: "Filter attacks",
                    onUpdate: g[0] || (g[0] = (l) => (H.value = l)),
                  },
                  null,
                  8,
                  ["value"]
                ),
              ]))
            : D("", !0),
          e("div", so, [
            sa(
              e(
                "input",
                {
                  "onUpdate:modelValue": g[1] || (g[1] = (l) => (_.value = l)),
                  type: "text",
                  class: "roll-dice-input",
                  placeholder: "Roll dice",
                  disabled: !1,
                  onKeyup: ra(k, ["enter"]),
                },
                null,
                40,
                lo
              ),
              [[la, _.value]]
            ),
            e(
              "button",
              {
                class: $a(["dice-button", { disabled: !1 }]),
                disabled: !1,
                onClick: k,
              },
              io
            ),
          ]),
          A.character.attacks.length > 0
            ? (o(),
              c("div", co, [
                r.value.length > 0
                  ? (o(),
                    c("div", uo, [
                      (o(!0),
                      c(
                        X,
                        null,
                        ee(
                          r.value,
                          (l) => (
                            o(),
                            c("div", { key: l.id, class: "align-card" }, [
                              y(
                                Pa,
                                {
                                  id: l.id,
                                  attack: l,
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
                  : (o(), c("div", vo, ho)),
              ]))
            : (o(), c("div", po, _o)),
        ])
      );
    },
  }),
  go = L(bo, [["__scopeId", "data-v-c14dc827"]]),
  Co = { class: "character-sheet-container" },
  $o = { class: "tab-nav-container" },
  ko = { class: "character-sheet-content-container" },
  Ro = B({
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
        H = {
          str: "Strength",
          dex: "Agility",
          int: "Intellect",
          pre: "Presence",
          con: "Vigor",
        },
        k = R(1),
        b = (l) => (k.value = l),
        r = (l) => {
          C(
            "handleRollAttribute",
            m.character.attributes[l],
            H[l],
            m.character.name
          );
        },
        A = (l) => {
          C("handleRollDices", l, "Results", m.character.name);
        },
        g = (l) => {
          C("handleRollAttack", m.character, l);
        };
      return (l, p) => (
        o(),
        c("div", Co, [
          y(Fn, { character: l.character }, null, 8, ["character"]),
          e("div", $o, [
            y(
              Ae,
              {
                "tab-options": _,
                "current-tab": k.value,
                onHandleNavigation: b,
              },
              null,
              8,
              ["current-tab"]
            ),
          ]),
          e("div", ko, [
            k.value === 0
              ? (o(),
                T(
                  to,
                  { key: 0, character: l.character, onHandleRollAttribute: r },
                  null,
                  8,
                  ["character"]
                ))
              : D("", !0),
            k.value === 1
              ? (o(),
                T(
                  go,
                  {
                    key: 1,
                    character: l.character,
                    onHandleRollDices: A,
                    onHandleRollAttack: g,
                  },
                  null,
                  8,
                  ["character"]
                ))
              : D("", !0),
          ]),
        ])
      );
    },
  }),
  Do = L(Ro, [["__scopeId", "data-v-f8950f4c"]]),
  yo = { class: "master-combats-container" },
  Ao = { key: 0, class: "combat-container" },
  Io = { class: "combat-header" },
  So = { class: "combat-name" },
  Mo = { class: "combat-content-container" },
  Ho = { class: "initiative-container" },
  To = { class: "combat-sheet-container" },
  Eo = { key: 0 },
  wo = { key: 0 },
  Po = { key: 1 },
  Oo = { key: 1, class: "no-sheet-text" },
  No = { key: 1 },
  Vo = { key: 0 },
  Bo = { key: 0, class: "cards-container" },
  Lo = { key: 1 },
  Uo = B({
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
        _ = R(),
        H = Ie(),
        k = R(!0),
        b = R(0);
      ca(async () => {
        H.currentUser &&
          ((b.value = await Wa(H.currentUser.uid)), (k.value = !1));
      });
      const r = () => {
          (_.value = void 0), C("handleFinishCombat");
        },
        A = (l) => {
          if (
            !m.campaign.combats ||
            m.campaign.currentCombat === void 0 ||
            m.campaign.currentCombat < 0
          )
            return;
          if (m.campaign.combats[m.campaign.currentCombat].creatures) {
            const h = m.campaign.combats[
              m.campaign.currentCombat
            ].creatures.findIndex((f) => f.id === l);
            h > -1 && (_.value = { index: h, type: "creature" });
          }
          const p = m.characters.findIndex((h) => h.id === l);
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
      return (l, p) => (
        o(),
        c("div", yo, [
          l.campaign.combats &&
          l.campaign.currentCombat !== void 0 &&
          l.campaign.currentCombat > -1 &&
          g.value
            ? (o(),
              c("div", Ao, [
                e("div", Io, [
                  e(
                    "div",
                    So,
                    S(l.campaign.combats[l.campaign.currentCombat].name),
                    1
                  ),
                  l.isDm
                    ? (o(),
                      c(
                        "button",
                        { key: 0, class: "button-secondary", onClick: r },
                        " Finish Encounter "
                      ))
                    : D("", !0),
                ]),
                e("div", Mo, [
                  e("div", Ho, [
                    y(
                      Sn,
                      {
                        characters: l.characters,
                        "is-dm": l.isDm,
                        "current-combat":
                          l.campaign.combats[l.campaign.currentCombat],
                        onHandleSelectSheet: A,
                        onHandleChangeInitiative:
                          p[0] ||
                          (p[0] = (h, f) =>
                            l.$emit("handleChangeInitiative", h, f)),
                      },
                      null,
                      8,
                      ["characters", "is-dm", "current-combat"]
                    ),
                  ]),
                  e("div", To, [
                    _.value
                      ? (o(),
                        c("div", Eo, [
                          _.value.type === "creature"
                            ? (o(),
                              c("div", wo, [
                                y(
                                  Qa,
                                  {
                                    creature:
                                      l.campaign.combats[
                                        l.campaign.currentCombat
                                      ].creatures[_.value.index],
                                    onHandleChangePvField:
                                      p[1] ||
                                      (p[1] = (h, f, I) =>
                                        l.$emit(
                                          "handleChangeCreaturePvField",
                                          h,
                                          f,
                                          I
                                        )),
                                    onHandleChangePv:
                                      p[2] ||
                                      (p[2] = (h, f) =>
                                        l.$emit(
                                          "handleChangeCreaturePv",
                                          h,
                                          f
                                        )),
                                    onHandleRollAttribute:
                                      p[3] ||
                                      (p[3] = (h, f, I) =>
                                        l.$emit("handleRollAttr", h, 0, f, I)),
                                    onHandleAttack:
                                      p[4] ||
                                      (p[4] = (h, f) =>
                                        l.$emit(
                                          "handleRollCreatureAttack",
                                          h,
                                          f
                                        )),
                                    onHandleAdd:
                                      p[5] ||
                                      (p[5] = (h, f) =>
                                        l.$emit("handleAddCreatureCard", h, f)),
                                    onHandleRemoveAction:
                                      p[6] ||
                                      (p[6] = (h, f, I) =>
                                        l.$emit("handleRemoveAction", h, f, I)),
                                    onHandleEditCreature:
                                      p[7] ||
                                      (p[7] = (h) =>
                                        l.$emit("handleEditCreature", h)),
                                    onHandleEditCreatureAction:
                                      p[8] ||
                                      (p[8] = (h, f, I) =>
                                        l.$emit(
                                          "handleEditCreatureAction",
                                          h,
                                          f,
                                          I
                                        )),
                                    onHandleRollSkill:
                                      p[9] ||
                                      (p[9] = (h, f, I, ae) =>
                                        l.$emit(
                                          "handleRollCreatureSkill",
                                          h,
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
                              c("div", Po, [
                                y(
                                  Do,
                                  {
                                    character: l.characters[_.value.index],
                                    onHandleRollAttribute:
                                      p[10] ||
                                      (p[10] = (h, f, I) =>
                                        l.$emit("handleRollAttr", h, 0, f, I)),
                                    onHandleRollDices:
                                      p[11] ||
                                      (p[11] = (h, f, I) =>
                                        l.$emit("handleRollDices", h, f, I)),
                                    onHandleRollAttack:
                                      p[12] ||
                                      (p[12] = (h, f) =>
                                        l.$emit(
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
                        c(
                          "div",
                          Oo,
                          " Select the sheet on the initiative tracker to add it here "
                        )),
                  ]),
                ]),
              ]))
            : (o(),
              c("div", No, [
                l.isDm
                  ? (o(),
                    c("div", Vo, [
                      b.value >= 3
                        ? (o(),
                          c("div", Bo, [
                            (o(!0),
                            c(
                              X,
                              null,
                              ee(
                                l.campaign.combats,
                                (h, f) => (
                                  o(),
                                  c("div", { key: h.id }, [
                                    y(
                                      Ka,
                                      {
                                        combat: h,
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
                        : (o(), c("div", Lo, [y(ja)])),
                    ]))
                  : D("", !0),
              ])),
        ])
      );
    },
  }),
  na = L(Uo, [["__scopeId", "data-v-27c49579"]]),
  Fo = { class: "textarea-container" },
  qo = ["placeholder", "value", "onBlur"],
  Go = B({
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
        _ = (H, k) => {
          const b = { value: H.target.value, key: k };
          m("handleChangeCampaignAnotations", b);
        };
      return (H, k) => (
        o(),
        c(
          X,
          null,
          ee(C, (b) =>
            e("div", { key: b.title }, [
              e("div", Fo, [
                e("h3", null, S(b.title), 1),
                e(
                  "textarea",
                  {
                    class: "textarea description-tab-size",
                    rows: "5",
                    placeholder: b.placeholder,
                    value: H.campaign.anotations[b.key],
                    onBlur: (r) => _(r, b.key),
                  },
                  `\r
      `,
                  40,
                  qo
                ),
              ]),
            ])
          ),
          64
        )
      );
    },
  }),
  oa = L(Go, [["__scopeId", "data-v-a9aa04a0"]]),
  ua = (v) => (x("data-v-a513e168"), (v = v()), J(), v),
  Ko = { class: "modal-content modal-width" },
  Qo = { class: "modal-header" },
  zo = ua(() => e("h2", null, "Threat", -1)),
  Wo = ua(() =>
    e("img", { class: "close-icon", src: ia, alt: "fechar" }, null, -1)
  ),
  jo = [Wo],
  Xo = { class: "modal-body modal-height" },
  xo = B({
    __name: "CreatureModal",
    props: { creature: {} },
    emits: ["handleEditCreature", "handleCloseModal"],
    setup(v) {
      return (u, m) => (
        o(),
        c("div", Ko, [
          e("div", Qo, [
            zo,
            e(
              "button",
              { onClick: m[0] || (m[0] = (C) => u.$emit("handleCloseModal")) },
              jo
            ),
          ]),
          e("div", Xo, [
            y(
              xa,
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
  Jo = L(xo, [["__scopeId", "data-v-a513e168"]]),
  Zo = (v) => (x("data-v-8ca3889b"), (v = v()), J(), v),
  Yo = { key: 0 },
  es = { key: 0, class: "private-master-screen" },
  as = Zo(() => e("h1", null, "Private DM Screen", -1)),
  ts = { key: 1 },
  ns = { key: 0, class: "screen-master-container" },
  os = { class: "screen-master-content" },
  ss = { class: "small-screen-log-container" },
  ls = { class: "tab-content-container" },
  rs = { class: "tab-nav-container" },
  is = { key: 0 },
  cs = { key: 0 },
  us = { key: 1, class: "screen-master-container" },
  ds = { class: "tab-nav-container" },
  vs = { key: 0 },
  ms = { key: 0 },
  hs = { key: 0 },
  ps = { key: 1 },
  fs = { key: 2 },
  _s = { key: 2 },
  bs = { key: 3 },
  gs = { key: 1 },
  Cs = B({
    __name: "MasterScreen",
    setup(v) {
      const { play: u } = Oa(Na),
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
        H = [
          { label: "LOG", value: 0 },
          { label: "AGENTS", value: 1 },
          { label: "ENCOUNTERS", value: 2 },
          { label: "DM'S DICE", value: 3 },
          { label: "DM'S NOTES", value: 4 },
        ],
        k = Ie(),
        b = ka(),
        r = Ra(),
        g = Da().params.id,
        l = R(0),
        p = R(!0),
        h = R(window.innerWidth),
        f = R(m),
        I = R(!1),
        ae = R(!1),
        P = R(0),
        t = R(),
        W = R([]),
        O = R(),
        te = R(!1),
        ie = R(!1),
        ce = R(!1),
        ue = R(),
        de = R(),
        ve = R("Ação"),
        ne = R(),
        ge = R(),
        Ce = R(),
        $e = R(),
        w = R({ message: "", type: "info", alive: !1, timeout: 0 }),
        U = R({ title: "", total: 0, output: "", notation: "", alive: !1 }),
        M = R({
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
      ca(async () => {
        var i;
        if (!k.currentUser) return;
        const a = await ya(j(b, "campaigns", g));
        a.data() || r.push({ name: "not-found" });
        const n = (i = a.data()) == null ? void 0 : i.campaignLogId;
        (Ce.value = De(j(b, "campaigns", g), ($) => {
          var G;
          $.data() || r.push({ name: "not-found" }),
            (t.value = $.data()),
            (t.value.id = $.id),
            t.value.privateMasterScreen ? (ae.value = !0) : (ae.value = !1),
            ((G = k.currentUser) == null ? void 0 : G.uid) === t.value.uid &&
              (I.value = !0),
            h.value >= 1023
              ? I.value
                ? (f.value = C)
                : (f.value = m)
              : I.value
              ? (f.value = H)
              : (f.value = _),
            l.value < 3 && l.value++;
        })),
          ($e.value = De(j(b, "campaignLogs", n), ($) => {
            $.data() &&
              ((O.value = $.data()),
              (O.value.id = $.id),
              l.value < 3 && l.value++);
          }));
        const s = Aa(b, "characters"),
          d = Ia(s, Sa("campaignDocId", "==", a.id));
        (ge.value = De(d, ($) => {
          const G = [];
          for (const Z of $.docs) {
            const V = Z.data();
            (V.id = Z.id), G.push(V);
          }
          (W.value = G), l.value < 3 && l.value++;
        })),
          window.addEventListener("resize", () => {
            h.value = window.innerWidth;
          });
      }),
        Ma(() => {
          ge.value && ge.value(),
            Ce.value && Ce.value(),
            $e.value && $e.value();
        }),
        _e(l, () => {
          p.value !== !1 && l.value >= 3 && (p.value = !1);
        });
      const Te = (a) => (P.value = a),
        N = () => {
          t.value && le(j(b, "campaigns", t.value.id), t.value);
        },
        da = () => (U.value.alive = !1),
        Ee = () => (M.value.alive = !1),
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
            const i = Ua(a),
              $ = i.total,
              G = Fa(i.output),
              Z = qa(i.output);
            (U.value.title = s),
              (U.value.total = $),
              (U.value.output = G),
              (U.value.notation = Z),
              (U.value.skinDice = Ja[4]);
            const V = {
              sender: n,
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
        we = (a, n) => {
          try {
            const s = Va(a, n);
            (M.value.title = n.name),
              (M.value.totalAttack = s.attackTotal),
              (M.value.totalDamage = s.damageTotal),
              (M.value.critical = s.critical),
              (M.value.attackTooltip = s.attackInfo),
              (M.value.damageTooltip = s.damageInfo),
              (M.value.attackRollTooltip = s.attackRollInfo),
              (M.value.damageRollTooltip = s.damageRollInfo),
              (M.value.criticalTooltip = s.criticalInfo),
              (M.value.skinDice = a.skinDice);
            const d = {
              sender: a.name,
              timestamp: new Date().getTime(),
              content: M.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            ke(d), he(), (M.value.alive = !0), u();
          } catch {
            (w.value.message = "Incorrect dice value"),
              (w.value.type = "error"),
              (w.value.alive = !0);
          }
        },
        va = (a) => {
          const n = [];
          if (a.damage)
            for (const d of a.damage) n.push(`(${d.value} - ${d.damageType})`);
          return n.join(" + ");
        },
        ma = (a) => {
          const n =
              `${a.rollNumber}d20` +
              (a.rollBonus && !isNaN(a.rollBonus) ? ` +${a.rollBonus}` : ""),
            s = va(a),
            d = `${a.criticalRange}/x${a.criticalMult}`;
          let i;
          a.rollNumber > 0
            ? (i =
                `${a.rollNumber}d20kh1` +
                (a.rollBonus && !isNaN(a.rollBonus) ? `+${a.rollBonus}` : ""))
            : (i =
                `${Math.abs(a.rollNumber) + 2}d20kl1` +
                (a.rollBonus && !isNaN(a.rollBonus) ? `+${a.rollBonus}` : ""));
          const $ = new re(i.trim()),
            G = $.total,
            Z = $.output
              .substring($.output.indexOf("[") + 1, $.output.indexOf("]"))
              .split(",");
          let V = 0;
          if (Z.length > 1)
            Z.map((E) => {
              E.includes("d") ||
                (parseInt(E) >= a.criticalRange && (V = 1),
                parseInt(E) === 1 && (V = -1),
                parseInt(E) === 1 && a.criticalRange === 1 && (V = 1));
            });
          else {
            const E = $.output.substring(
              $.output.indexOf("[") + 1,
              $.output.indexOf("]")
            );
            parseInt(E) >= a.criticalRange && (V = 1),
              parseInt(E) === 1 && (V = -1);
          }
          const Ze = a.damage[0].value !== "" ? `${a.damage[0].value}` : "0";
          let fe = 0,
            K = "";
          if (V === 1)
            for (let E = 0; E < a.criticalMult; E++) {
              const F = new re(Ze.trim());
              (fe += F.total),
                (K +=
                  F.output.substring(
                    F.output.indexOf(":") + 1,
                    F.output.indexOf("=") - 1
                  ) + "+");
            }
          else {
            const E = new re(Ze.trim());
            (fe += E.total),
              (K +=
                E.output.substring(
                  E.output.indexOf(":") + 1,
                  E.output.indexOf("=") - 1
                ) + "+");
          }
          if (a.damage.length > 1) {
            const E = [];
            for (const ba of a.damage) E.push(ba.value);
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
              attackInfo: n,
              damageInfo: s,
              criticalInfo: d,
              attackRollInfo:
                $.output.substring(
                  $.output.indexOf("["),
                  $.output.indexOf("]") + 1
                ) + (a.rollBonus !== 0 ? `+${a.rollBonus}` : ""),
              damageRollInfo: `${K.trim().replace(/\s/g, "")}`,
            }
          );
        },
        Pe = (a, n) => {
          try {
            const s = ma(n);
            (M.value.title = n.name || "Attack"),
              (M.value.totalAttack = s.attackTotal),
              (M.value.totalDamage = s.damageTotal),
              (M.value.critical = s.critical),
              (M.value.attackTooltip = s.attackInfo),
              (M.value.damageTooltip = s.damageInfo),
              (M.value.attackRollTooltip = s.attackRollInfo),
              (M.value.damageRollTooltip = s.damageRollInfo),
              (M.value.criticalTooltip = s.criticalInfo);
            const d = {
              sender: a.name,
              timestamp: new Date().getTime(),
              content: M.value,
              contentType: "attackRoll",
              isPrivate: !1,
            };
            ke(d), he(), (M.value.alive = !0), u();
          } catch {
            (w.value.message = "Incorrect dice value"),
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
              (i) => i.id === a.id
            ),
            d = t.value.combats[t.value.currentCombat].creatures[s];
          n === "actions"
            ? d[n].push({ id: ea(), name: "New Action" })
            : d[n].push({ id: ea(), name: "New Power" }),
            N();
        },
        Re = (a, n = "Result") => {
          me(a, "DM", n, te.value);
        };
      _e(h, () => {
        h.value >= 1023
          ? I.value
            ? (f.value = C)
            : (f.value = m)
          : I.value
          ? (f.value = H)
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
          t.value && I.value && ((t.value.anotations[a.key] = a.value), N());
        },
        Ve = () => {
          var n, s;
          if (!t.value || !I.value) return;
          t.value.masterMacros || (t.value.masterMacros = []);
          const a = { title: "New Die", value: "3d20k1" };
          (s = (n = t.value) == null ? void 0 : n.masterMacros) == null ||
            s.unshift(a),
            N();
        },
        Be = (a) => {
          var n, s;
          (n = t.value) != null &&
            n.masterMacros &&
            ((s = t.value) == null || s.masterMacros.splice(a, 1), N());
        },
        Le = (a, n, s) => {
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
            const d = s.attributes[n[s.skills[11].attribute]];
            (s.initiativeValue = Fe(d, s.skills[11].bonus)),
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
          let i;
          a > 0
            ? (i = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
            : (i = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            me(i, d, s);
        },
        Qe = (a, n, s, d) => {
          let i;
          a > 0
            ? (i = `${a}d20kh1` + (n !== 0 ? `+${n}` : ""))
            : (i = `${Math.abs(a) + 2}d20kl1` + (n !== 0 ? `+${n}` : "")),
            me(i, d, s);
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
              ($) => $.id === a.id
            ),
            i = t.value.combats[t.value.currentCombat].creatures[d];
          i &&
            (s || (i.pvCurrent = n),
            s === "current" && (i.pvCurrent = n),
            s === "max" && (i.pvMax = n),
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
            (i) => i.id === a.id
          );
          if (d) {
            if (s === "actions") {
              const i = d.actions.findIndex(($) => $.id === n);
              i > -1 && d.actions.splice(i, 1);
            } else {
              const i = d.powers.findIndex(($) => $.id === n);
              i > -1 && d.powers.splice(i, 1);
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
              const d = a.actions.findIndex((i) => i.id === n);
              (ne.value = a.actions[d]), (ve.value = "Action");
            } else {
              const d = a.powers.findIndex((i) => i.id === n);
              (ne.value = a.powers[d]), (ve.value = "Power");
            }
        },
        ha = (a) => {
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
        xe = () => {
          (ie.value = !1), (ue.value = void 0);
        },
        pa = () => {
          (ce.value = !1), (ne.value = void 0), (de.value = void 0);
        },
        oe = () => {
          xe(), pa();
        },
        fa = (a) => {
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
            xe());
        },
        Je = (a, n) => {
          if (
            !t.value ||
            !t.value.combats ||
            t.value.currentCombat === void 0 ||
            t.value.currentCombat < 0
          )
            return;
          const s = W.value.findIndex((i) => i.id === n),
            d = t.value.combats[t.value.currentCombat].creatures.findIndex(
              (i) => i.id === n
            );
          s > -1 &&
            le(j(b, "characters", W.value[s].id), { initiativeValue: a }),
            d > -1 &&
              ((t.value.combats[t.value.currentCombat].creatures[
                d
              ].initiativeValue = a),
              N());
        },
        _a = () => {
          I.value &&
            O.value &&
            ((O.value.campaignLogMessages = []),
            le(j(b, "campaignLogs", O.value.id), O.value));
        };
      return (a, n) => {
        var d;
        const s = Ha("vue-final-modal");
        return p.value
          ? (o(), c("div", gs, [y(Ta, { "page-loading": "" })]))
          : (o(),
            c("div", Yo, [
              ae.value && !I.value
                ? (o(),
                  c("div", es, [
                    as,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick: n[0] || (n[0] = (i) => a.$router.push("/")),
                      },
                      " Return "
                    ),
                  ]))
                : (o(),
                  c("div", ts, [
                    h.value >= 1023
                      ? (o(),
                        c("div", ns, [
                          e(
                            "div",
                            {
                              class: "page-title",
                              onClick:
                                n[1] ||
                                (n[1] = (i) => {
                                  var $;
                                  return a.$router.push({
                                    name: "campaign-page",
                                    params: {
                                      id: ($ = t.value) == null ? void 0 : $.id,
                                    },
                                  });
                                }),
                            },
                            S((d = t.value) == null ? void 0 : d.name),
                            1
                          ),
                          e("div", os, [
                            e("div", ss, [
                              O.value
                                ? (o(),
                                  T(
                                    Ye,
                                    {
                                      key: 0,
                                      "master-screen": "",
                                      "is-dm": I.value,
                                      "campaign-log": O.value,
                                      onHandleCleanCampaignLog: _a,
                                    },
                                    null,
                                    8,
                                    ["is-dm", "campaign-log"]
                                  ))
                                : D("", !0),
                            ]),
                            e("div", ls, [
                              e("div", rs, [
                                y(
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
                              T(
                                Q,
                                null,
                                [
                                  P.value === 0
                                    ? (o(),
                                      T(
                                        aa,
                                        { key: 0, characters: W.value },
                                        null,
                                        8,
                                        ["characters"]
                                      ))
                                    : D("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              T(
                                Q,
                                null,
                                [
                                  P.value === 1 && t.value
                                    ? (o(),
                                      T(
                                        na,
                                        {
                                          key: 0,
                                          campaign: t.value,
                                          characters: W.value,
                                          "is-dm": I.value,
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
                                          onHandleChangeInitiative: Je,
                                        },
                                        null,
                                        8,
                                        ["campaign", "characters", "is-dm"]
                                      ))
                                    : D("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              T(
                                Q,
                                null,
                                [
                                  t.value
                                    ? (o(),
                                      c("div", is, [
                                        P.value === 2
                                          ? (o(),
                                            T(
                                              ta,
                                              {
                                                key: 0,
                                                "dm-private-dice": te.value,
                                                campaign: t.value,
                                                onHandleChangeDmPrivateDice:
                                                  n[2] ||
                                                  (n[2] = (i) =>
                                                    (te.value = i)),
                                                onHandleRollMasterDices: Re,
                                                onHandleAddDiceMacro: Ve,
                                                onHandleRemoveDiceMacro:
                                                  n[3] || (n[3] = (i) => Be(i)),
                                                onHandleChangeDiceMacro: Le,
                                                onHandleRollDiceMacro: Ue,
                                              },
                                              null,
                                              8,
                                              ["dm-private-dice", "campaign"]
                                            ))
                                          : D("", !0),
                                      ]))
                                    : D("", !0),
                                ],
                                1024
                              )),
                              (o(),
                              T(
                                Q,
                                null,
                                [
                                  t.value
                                    ? (o(),
                                      c("div", cs, [
                                        P.value === 3
                                          ? (o(),
                                            T(
                                              oa,
                                              {
                                                key: 0,
                                                campaign: t.value,
                                                onHandleChangeCampaignAnotations:
                                                  n[4] || (n[4] = (i) => Ne(i)),
                                              },
                                              null,
                                              8,
                                              ["campaign"]
                                            ))
                                          : D("", !0),
                                      ]))
                                    : D("", !0),
                                ],
                                1024
                              )),
                            ]),
                          ]),
                        ]))
                      : (o(),
                        c("div", us, [
                          e("div", ds, [
                            y(
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
                              c("div", vs, [
                                (o(),
                                T(
                                  Q,
                                  null,
                                  [
                                    O.value
                                      ? (o(),
                                        T(
                                          Ye,
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
                                      : D("", !0),
                                  ],
                                  1024
                                )),
                              ]))
                            : D("", !0),
                          (o(),
                          T(
                            Q,
                            null,
                            [
                              P.value === 1
                                ? (o(),
                                  T(
                                    aa,
                                    { key: 0, characters: W.value },
                                    null,
                                    8,
                                    ["characters"]
                                  ))
                                : D("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          T(
                            Q,
                            null,
                            [
                              P.value === 2 && t.value
                                ? (o(),
                                  T(
                                    na,
                                    {
                                      key: 0,
                                      campaign: t.value,
                                      characters: W.value,
                                      "is-dm": I.value,
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
                                      onHandleChangeInitiative: Je,
                                    },
                                    null,
                                    8,
                                    ["campaign", "characters", "is-dm"]
                                  ))
                                : D("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          T(
                            Q,
                            null,
                            [
                              t.value
                                ? (o(),
                                  c("div", ms, [
                                    P.value === 3
                                      ? (o(),
                                        T(
                                          ta,
                                          {
                                            key: 0,
                                            "dm-private-dice": te.value,
                                            campaign: t.value,
                                            onHandleChangeDmPrivateDice:
                                              n[5] ||
                                              (n[5] = (i) => (te.value = i)),
                                            onHandleRollMasterDices: Re,
                                            onHandleAddDiceMacro: Ve,
                                            onHandleRemoveDiceMacro:
                                              n[6] || (n[6] = (i) => Be(i)),
                                            onHandleChangeDiceMacro: Le,
                                            onHandleRollDiceMacro: Ue,
                                          },
                                          null,
                                          8,
                                          ["dm-private-dice", "campaign"]
                                        ))
                                      : D("", !0),
                                  ]))
                                : D("", !0),
                            ],
                            1024
                          )),
                          (o(),
                          T(
                            Q,
                            null,
                            [
                              t.value
                                ? (o(),
                                  c("div", hs, [
                                    P.value === 4
                                      ? (o(),
                                        T(
                                          oa,
                                          {
                                            key: 0,
                                            campaign: t.value,
                                            onHandleChangeCampaignAnotations:
                                              n[7] || (n[7] = (i) => Ne(i)),
                                          },
                                          null,
                                          8,
                                          ["campaign"]
                                        ))
                                      : D("", !0),
                                  ]))
                                : D("", !0),
                            ],
                            1024
                          )),
                          P.value !== 0
                            ? (o(),
                              c("div", ps, [
                                y(
                                  ye,
                                  { name: "toast" },
                                  {
                                    default: se(() => [
                                      U.value.alive
                                        ? (o(),
                                          T(
                                            Ba,
                                            {
                                              key: 0,
                                              toast: U.value,
                                              onDismiss: da,
                                            },
                                            null,
                                            8,
                                            ["toast"]
                                          ))
                                        : D("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : D("", !0),
                          P.value !== 0
                            ? (o(),
                              c("div", fs, [
                                y(
                                  ye,
                                  { name: "toast" },
                                  {
                                    default: se(() => [
                                      M.value.alive
                                        ? (o(),
                                          T(
                                            La,
                                            {
                                              key: 0,
                                              toast: M.value,
                                              onDismiss: Ee,
                                            },
                                            null,
                                            8,
                                            ["toast"]
                                          ))
                                        : D("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : D("", !0),
                        ])),
                    y(
                      ye,
                      { name: "toast" },
                      {
                        default: se(() => [
                          w.value.alive
                            ? (o(),
                              T(
                                Xa,
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
                            : D("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    ue.value
                      ? (o(),
                        c("div", _s, [
                          y(
                            s,
                            {
                              modelValue: ie.value,
                              "onUpdate:modelValue":
                                n[8] || (n[8] = (i) => (ie.value = i)),
                              classes: "modal-container",
                            },
                            {
                              default: se(() => [
                                y(
                                  Jo,
                                  {
                                    creature: ue.value,
                                    onHandleEditCreature: fa,
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
                      : D("", !0),
                    ne.value
                      ? (o(),
                        c("div", bs, [
                          y(
                            s,
                            {
                              modelValue: ce.value,
                              "onUpdate:modelValue":
                                n[9] || (n[9] = (i) => (ce.value = i)),
                              classes: "modal-container",
                            },
                            {
                              default: se(() => [
                                y(
                                  za,
                                  {
                                    action: ne.value,
                                    title: ve.value,
                                    onHandleCloseModal: oe,
                                    onHandleEditAction: ha,
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
                      : D("", !0),
                  ])),
            ]));
      };
    },
  }),
  js = L(Cs, [["__scopeId", "data-v-8ca3889b"]]);
export { js as default };

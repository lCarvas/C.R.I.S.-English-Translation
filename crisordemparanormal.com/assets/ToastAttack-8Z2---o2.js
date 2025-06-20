import {
  d as D,
  Q as M,
  f as I,
  al as H,
  o as d,
  c as u,
  a as i,
  t as g,
  C as R,
  H as k,
  m as h,
  a2 as v,
  p as A,
  b as w,
  _ as C,
  am as bt,
  r as V,
  e as it,
  w as at,
  n as F,
  q as j,
  v as K,
  J as W,
  an as lt,
  a3 as $t,
  k as N,
  i as kt,
  j as E,
  x as Y,
  T as ht,
  a4 as yt,
} from "./index-t0mq17pV.js";
import { _ as O } from "./d20-icon-vaz1En3o.js";
import { _ as rt, a as _t } from "./edit-icon-3vZQUsyW.js";
import { S as St, s as It, c as U } from "./characterAutomations-VjVSWhq1.js";
import { D as T } from "./dice-roll-pki3JKwp.js";
import { c as Dt, _ as dt } from "./attributes-I0efBVjK.js";
import { v as x } from "./v4-cyCr5FZV.js";
import { _ as Ct } from "./show-more-icon-VvUXKiHG.js";
const Pt = (t) => (A("data-v-36829786"), (t = t()), w(), t),
  At = { class: "toast-content" },
  wt = ["src"],
  Rt = { key: 1, class: "toast-icon", src: O, alt: "d20" },
  Lt = { class: "text" },
  Tt = { class: "title" },
  Mt = { class: "result" },
  Vt = { class: "result-container" },
  Bt = { key: 0 },
  Nt = Pt(() => i("span", null, "=", -1)),
  Ot = { class: "total-container" },
  X = "#5cb85c",
  Z = "#d9534f",
  xt = "#fff",
  Et = D({
    __name: "CampaignLogToastDice",
    props: { toast: {}, isPrivate: { type: Boolean } },
    setup(t) {
      M((s) => ({ d76afd42: o.value, "08a5de6e": n.value }));
      const e = t,
        n = I(() => {
          let s = xt;
          if (e.toast.defaultColor || e.toast.title === "Result") return s;
          const a = e.toast.output
            .substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            )
            .split(",");
          if (a.length > 1)
            a.map((r) => {
              r.includes("d") ||
                (parseInt(r) === 20 && (s = X), parseInt(r) === 1 && (s = Z));
            });
          else {
            const r = e.toast.output.substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            );
            parseInt(r) === 20 && (s = X), parseInt(r) === 1 && (s = Z);
          }
          return s;
        }),
        o = I(() =>
          e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
        );
      return (s, a) => {
        const r = H("tooltip");
        return (
          d(),
          u(
            "div",
            {
              class: v([
                "toast",
                {
                  "private-roll": s.isPrivate,
                  "toast-border": s.toast.skinDice && s.toast.skinDice.isSolid,
                  "toast-img-border":
                    s.toast.skinDice && !s.toast.skinDice.isSolid,
                },
              ]),
            },
            [
              i("div", At, [
                s.toast.skinDice
                  ? (d(),
                    u(
                      "img",
                      {
                        key: 0,
                        class: "toast-icon",
                        src: s.toast.skinDice.img,
                        alt: "d20",
                      },
                      null,
                      8,
                      wt
                    ))
                  : (d(), u("img", Rt)),
                i("div", Lt, [
                  i("h3", Tt, g(s.toast.title), 1),
                  i("div", Mt, [
                    i("div", Vt, [
                      R((d(), u("h4", null, [k(g(s.toast.output), 1)])), [
                        [
                          r,
                          {
                            content: s.toast.output,
                            triggers: ["hover", "click"],
                          },
                        ],
                      ]),
                      s.toast.title === "Result"
                        ? R((d(), u("h4", Bt, [k(g(s.toast.notation), 1)])), [
                            [
                              r,
                              {
                                content: s.toast.notation,
                                triggers: ["hover", "click"],
                              },
                            ],
                          ])
                        : h("", !0),
                    ]),
                    Nt,
                    i("div", Ot, [i("h3", null, g(s.toast.total), 1)]),
                  ]),
                ]),
              ]),
            ],
            2
          )
        );
      };
    },
  }),
  Ft = C(Et, [["__scopeId", "data-v-36829786"]]),
  G = (t) => (A("data-v-f7cce5dc"), (t = t()), w(), t),
  Ut = { class: "toast-content" },
  qt = ["src"],
  Ht = { key: 1, class: "toast-icon", src: O, alt: "d20" },
  Wt = { class: "text" },
  zt = { class: "title" },
  jt = { class: "result" },
  Gt = { class: "attack-container" },
  Jt = G(() => i("h4", null, "TO HIT", -1)),
  Qt = G(() => i("div", { class: "divider" }, null, -1)),
  Kt = { class: "damage-container" },
  Yt = G(() => i("h4", { class: "padding-left" }, " DAMAGE ", -1)),
  Xt = "#5cb85c",
  Zt = "#d9534f",
  te = "#fff",
  ee = D({
    __name: "CampaignLogToastAttack",
    props: { toast: {}, isPrivate: { type: Boolean } },
    setup(t) {
      M((s) => ({ "668da974": o.value, b0082db6: n.value }));
      const e = t,
        n = I(() =>
          e.toast.critical === 1 ? Xt : e.toast.critical === -1 ? Zt : te
        ),
        o = I(() =>
          e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
        );
      return (s, a) => {
        const r = H("tooltip");
        return (
          d(),
          u(
            "div",
            {
              class: v([
                "toast",
                {
                  "private-roll": s.isPrivate,
                  "toast-border": s.toast.skinDice && s.toast.skinDice.isSolid,
                  "toast-img-border":
                    s.toast.skinDice && !s.toast.skinDice.isSolid,
                },
              ]),
            },
            [
              i("div", Ut, [
                s.toast.skinDice
                  ? (d(),
                    u(
                      "img",
                      {
                        key: 0,
                        class: "toast-icon",
                        src: s.toast.skinDice.img,
                        alt: "d20",
                      },
                      null,
                      8,
                      qt
                    ))
                  : (d(), u("img", Ht)),
                i("div", Wt, [
                  i("h3", zt, g(s.toast.title), 1),
                  i("div", jt, [
                    i("div", Gt, [
                      R((d(), u("h3", null, [k(g(s.toast.totalAttack), 1)])), [
                        [
                          r,
                          {
                            content: `${s.toast.attackTooltip} = ${s.toast.attackRollTooltip}`,
                            triggers: ["hover", "click"],
                          },
                        ],
                      ]),
                      Jt,
                    ]),
                    Qt,
                    i("div", Kt, [
                      R((d(), u("h3", null, [k(g(s.toast.totalDamage), 1)])), [
                        [
                          r,
                          {
                            content: `${s.toast.damageTooltip} | ${s.toast.criticalTooltip} = ${s.toast.damageRollTooltip}`,
                            triggers: ["hover", "click"],
                          },
                        ],
                      ]),
                      Yt,
                    ]),
                  ]),
                ]),
              ]),
            ],
            2
          )
        );
      };
    },
  }),
  se = C(ee, [["__scopeId", "data-v-f7cce5dc"]]),
  J = (t) => (A("data-v-57a0af1e"), (t = t()), w(), t),
  ne = { class: "campaign-log-content" },
  oe = { class: "header" },
  ie = J(() => i("div", { class: "title" }, " Results ", -1)),
  ae = J(() =>
    i("img", { class: "close-icon", src: W, alt: "fechar" }, null, -1)
  ),
  le = [ae],
  re = J(() =>
    i("img", { class: "close-icon", src: W, alt: "fechar" }, null, -1)
  ),
  de = [re],
  ue = { class: "log-messages-container" },
  ce = { class: "log-sender" },
  me = { class: "date" },
  pe = D({
    __name: "CampaignLog",
    props: {
      campaignLog: {},
      masterScreen: { type: Boolean },
      isDm: { type: Boolean },
      vtt: { type: Boolean },
    },
    emits: ["handleCloseCampaignLog", "handleCleanCampaignLog"],
    setup(t) {
      M((f) => ({ "92aebcd8": a.value, "6f18b21f": r.value }));
      const { height: e } = bt(),
        n = t,
        o = V(null),
        s = (f) => {
          const l = new Date(f),
            m = l.getDate(),
            p = m < 10 ? `0${m}` : m.toString(),
            b = l.getMonth() + 1,
            y = b < 10 ? `0${b}` : b.toString(),
            L = l.getFullYear().toString().substring(2, 4),
            _ = l.getHours(),
            Q = _ < 10 ? `0${_}` : _.toString(),
            $ = l.getMinutes(),
            S = $ < 10 ? `0${$}` : $.toString();
          return `${p}/${y}/${L} ${Q}:${S}`;
        },
        a = I(() => (n.masterScreen ? "52rem" : "55rem")),
        r = I(() => (n.vtt ? "57vh" : `${e.value - 190}px`));
      it(() => {
        var f;
        (f = o.value) == null || f.scrollIntoView();
      }),
        at(
          () => n.campaignLog.campaignLogMessages,
          () => {
            var f;
            (f = o.value) == null || f.scrollIntoView({ behavior: "smooth" });
          }
        );
      const c = I(() => {
        const f = [];
        for (const l of n.campaignLog.campaignLogMessages)
          n.isDm ? f.push(l) : l.isPrivate || f.push(l);
        return f;
      });
      return (f, l) => (
        d(),
        u(
          "div",
          {
            class: v([
              f.masterScreen
                ? "campaign-log-container-master-screen"
                : "campaign-log-container-sheet",
            ]),
          },
          [
            i("div", ne, [
              i("div", oe, [
                ie,
                f.masterScreen
                  ? h("", !0)
                  : (d(),
                    u(
                      "button",
                      {
                        key: 0,
                        onClick:
                          l[0] ||
                          (l[0] = (m) => f.$emit("handleCloseCampaignLog")),
                      },
                      le
                    )),
                f.masterScreen && f.isDm
                  ? (d(),
                    u(
                      "button",
                      {
                        key: 1,
                        onClick:
                          l[1] ||
                          (l[1] = (m) => f.$emit("handleCleanCampaignLog")),
                      },
                      de
                    ))
                  : h("", !0),
              ]),
              i("div", ue, [
                (d(!0),
                u(
                  F,
                  null,
                  j(
                    c.value,
                    (m, p) => (
                      d(),
                      u("div", { key: p, class: "log-messages" }, [
                        i("div", ce, g(m.sender), 1),
                        m.contentType === "roll"
                          ? (d(),
                            K(
                              Ft,
                              {
                                key: 0,
                                toast: m.content,
                                "is-private": m.isPrivate,
                              },
                              null,
                              8,
                              ["toast", "is-private"]
                            ))
                          : h("", !0),
                        m.contentType === "attackRoll"
                          ? (d(),
                            K(
                              se,
                              {
                                key: 1,
                                toast: m.content,
                                "is-private": m.isPrivate,
                              },
                              null,
                              8,
                              ["toast", "is-private"]
                            ))
                          : h("", !0),
                        i("div", me, g(s(m.timestamp)), 1),
                      ])
                    )
                  ),
                  128
                )),
                i("div", { ref_key: "bottom", ref: o }, null, 512),
              ]),
            ]),
          ],
          2
        )
      );
    },
  }),
  qn = C(pe, [["__scopeId", "data-v-57a0af1e"]]),
  B = (t) => (A("data-v-05b4e714"), (t = t()), w(), t),
  fe = { key: 1 },
  ge = B(() => i("div", { class: "info-bar-fill" }, null, -1)),
  ve = { key: 0, class: "buttons-container" },
  be = ["disabled"],
  $e = B(() =>
    i("img", { class: "invert-icon", src: rt, alt: "diminuir" }, null, -1)
  ),
  ke = [$e],
  he = ["disabled"],
  ye = B(() =>
    i("img", { class: "invert-icon", src: lt, alt: "diminuir" }, null, -1)
  ),
  _e = [ye],
  Se = { class: "inputs-container" },
  Ie = ["disabled", "value"],
  De = ["disabled", "value"],
  Ce = { key: 1, class: "buttons-container" },
  Pe = ["disabled"],
  Ae = B(() => i("img", { src: lt, alt: "aumentar" }, null, -1)),
  we = [Ae],
  Re = ["disabled"],
  Le = B(() => i("img", { src: rt, alt: "aumentar" }, null, -1)),
  Te = [Le],
  Me = { key: 2 },
  Ve = B(() => i("div", { class: "info-bar-fill" }, null, -1)),
  Be = ["onClick"],
  Ne = { key: 0, class: "heal-button-wrapper" },
  Oe = { class: "inputs-container" },
  xe = ["disabled", "value"],
  Ee = ["disabled", "value"],
  Fe = D({
    __name: "InfoBar",
    props: {
      disabledSheet: { type: Boolean },
      type: {},
      maxValue: {},
      currentValue: {},
      marks: {},
      markMode: { type: Boolean },
      masterScreen: { type: Boolean },
      combatSheet: { type: Boolean },
    },
    emits: [
      "handleChangeCharNumber",
      "handleChangeCharNumberButton",
      "handleChangeCharMark",
      "handleChangeMarkModeToTrue",
      "handleMarkHeal",
    ],
    setup(t, { emit: e }) {
      M((l) => ({ "166941fd": r.value, 17804060: a.value }));
      const n = t,
        o = e,
        s = {
          pv: {
            labelBarMode: "HEALTH",
            labelMarkMode: "DYING",
            currentValue: "currentPv",
            maxValue: "maxPv",
            color: "#B22222",
            halfColor: "#621A1A",
          },
          san: {
            labelBarMode: "SANITY",
            labelMarkMode: "GOING CRAZY",
            currentValue: "currentSan",
            maxValue: "maxSan",
            color: "#8A2BE2",
            halfColor: "#46295A",
          },
          pe: {
            labelBarMode: "EFFORT",
            currentValue: "currentPe",
            maxValue: "maxPe",
            color: "#F81",
            halfColor: "#BD6508",
          },
          pd: {
            labelBarMode: "DETERMINATION",
            currentValue: "currentPd",
            maxValue: "maxPd",
            color: "#0089A8",
            halfColor: "#016B83",
          },
        },
        a = I(() => {
          const l = Math.floor((n.currentValue / n.maxValue) * 100);
          return l > 100 ? "100%" : l < 0 ? "0%" : `${l}%`;
        }),
        r = I(() => {
          const l = Math.floor((n.currentValue / n.maxValue) * 100);
          if (n.type === "pv") {
            if (l <= 50) return s[n.type].halfColor;
          } else if (l < 50) return s[n.type].halfColor;
          return s[n.type].color;
        }),
        c = (l, m) => {
          o("handleChangeCharNumber", l, m);
        },
        f = (l, m) => {
          o("handleChangeCharNumberButton", l, m);
        };
      return (
        at(
          () => n.currentValue,
          () => {
            n.type !== "pe" &&
              n.currentValue === 0 &&
              o("handleChangeMarkModeToTrue", n.type);
          }
        ),
        (l, m) => (
          d(),
          u(
            "div",
            {
              class: v([
                "info-bar-container",
                {
                  "master-info-bar-container": l.masterScreen || l.combatSheet,
                },
              ]),
            },
            [
              l.combatSheet
                ? h("", !0)
                : (d(),
                  u(
                    "div",
                    {
                      key: 0,
                      class: v([
                        "info-bar-label",
                        { "master-info-bar-label": l.masterScreen },
                      ]),
                    },
                    g(s[l.type].labelBarMode),
                    3
                  )),
              l.markMode
                ? (d(),
                  u("div", Me, [
                    i(
                      "div",
                      {
                        class: v([
                          "info-bar",
                          { "master-info-bar": l.masterScreen },
                        ]),
                      },
                      [
                        Ve,
                        i(
                          "div",
                          {
                            class: v([
                              "info-bar-components",
                              {
                                "master-info-bar-components-mark":
                                  l.masterScreen,
                              },
                            ]),
                          },
                          [
                            i(
                              "div",
                              {
                                class: v([
                                  "marks-container",
                                  { "master-marks-container": l.masterScreen },
                                ]),
                              },
                              [
                                (d(!0),
                                u(
                                  F,
                                  null,
                                  j(
                                    l.marks,
                                    (p, b) => (
                                      d(),
                                      u(
                                        "div",
                                        { key: b, class: "mark-container" },
                                        [
                                          i(
                                            "button",
                                            {
                                              class: v([
                                                "mark-button button-naked",
                                                {
                                                  "master-mark-button":
                                                    l.masterScreen,
                                                },
                                              ]),
                                              onClick: () =>
                                                l.$emit(
                                                  "handleChangeCharMark",
                                                  l.type,
                                                  b
                                                ),
                                            },
                                            [
                                              i(
                                                "div",
                                                {
                                                  class: v([
                                                    "mark-button-circle",
                                                    {
                                                      "master-mark-button-circle":
                                                        l.masterScreen,
                                                    },
                                                  ]),
                                                },
                                                [
                                                  i(
                                                    "div",
                                                    {
                                                      class: v({
                                                        "mark-button-fill": p,
                                                        "master-mark-button-fill":
                                                          l.masterScreen,
                                                      }),
                                                    },
                                                    null,
                                                    2
                                                  ),
                                                ],
                                                2
                                              ),
                                            ],
                                            10,
                                            Be
                                          ),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ],
                              2
                            ),
                            l.masterScreen
                              ? h("", !0)
                              : (d(),
                                u("div", Ne, [
                                  i(
                                    "button",
                                    {
                                      class: "heal-button button-naked",
                                      onClick:
                                        m[6] ||
                                        (m[6] = () =>
                                          l.$emit("handleMarkHeal", l.type)),
                                    },
                                    " HEAL "
                                  ),
                                ])),
                            i("div", Oe, [
                              i(
                                "input",
                                {
                                  type: "number",
                                  class: v([
                                    "info-bar-input-mark left-input",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.currentValue,
                                  onBlur:
                                    m[7] ||
                                    (m[7] = (p) =>
                                      c(p, s[l.type].currentValue)),
                                },
                                null,
                                42,
                                xe
                              ),
                              i(
                                "div",
                                {
                                  class: v([
                                    "input-divider",
                                    { "master-input-divider": l.masterScreen },
                                  ]),
                                },
                                " / ",
                                2
                              ),
                              i(
                                "input",
                                {
                                  type: "number",
                                  class: v([
                                    "info-bar-input-mark",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.maxValue,
                                  onBlur:
                                    m[8] ||
                                    (m[8] = (p) => c(p, s[l.type].maxValue)),
                                },
                                null,
                                42,
                                Ee
                              ),
                            ]),
                          ],
                          2
                        ),
                      ],
                      2
                    ),
                  ]))
                : (d(),
                  u("div", fe, [
                    i(
                      "div",
                      {
                        class: v([
                          "info-bar",
                          { "master-info-bar": l.masterScreen },
                        ]),
                      },
                      [
                        ge,
                        i(
                          "div",
                          {
                            class: v([
                              "info-bar-components",
                              { "master-info-bar-components": l.masterScreen },
                            ]),
                          },
                          [
                            l.masterScreen
                              ? h("", !0)
                              : (d(),
                                u("div", ve, [
                                  i(
                                    "button",
                                    {
                                      class: "info-bar-button button-naked",
                                      disabled: l.disabledSheet,
                                      onClick:
                                        m[0] ||
                                        (m[0] = (p) =>
                                          f(
                                            l.currentValue - 5,
                                            s[l.type].currentValue
                                          )),
                                    },
                                    ke,
                                    8,
                                    be
                                  ),
                                  i(
                                    "button",
                                    {
                                      class: "info-bar-button button-naked",
                                      disabled: l.disabledSheet,
                                      onClick:
                                        m[1] ||
                                        (m[1] = (p) =>
                                          f(
                                            l.currentValue - 1,
                                            s[l.type].currentValue
                                          )),
                                    },
                                    _e,
                                    8,
                                    he
                                  ),
                                ])),
                            i("div", Se, [
                              i(
                                "input",
                                {
                                  type: "number",
                                  class: v([
                                    "info-bar-input left-input",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.currentValue,
                                  onBlur:
                                    m[2] ||
                                    (m[2] = (p) =>
                                      c(p, s[l.type].currentValue)),
                                },
                                null,
                                42,
                                Ie
                              ),
                              i(
                                "div",
                                {
                                  class: v([
                                    "input-divider",
                                    { "master-input-divider": l.masterScreen },
                                  ]),
                                },
                                " / ",
                                2
                              ),
                              i(
                                "input",
                                {
                                  type: "number",
                                  class: v([
                                    "info-bar-input",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.maxValue,
                                  onBlur:
                                    m[3] ||
                                    (m[3] = (p) => c(p, s[l.type].maxValue)),
                                },
                                null,
                                42,
                                De
                              ),
                            ]),
                            l.masterScreen
                              ? h("", !0)
                              : (d(),
                                u("div", Ce, [
                                  i(
                                    "button",
                                    {
                                      class: "info-bar-button button-naked",
                                      disabled: l.disabledSheet,
                                      onClick:
                                        m[4] ||
                                        (m[4] = (p) =>
                                          f(
                                            l.currentValue + 1,
                                            s[l.type].currentValue
                                          )),
                                    },
                                    we,
                                    8,
                                    Pe
                                  ),
                                  i(
                                    "button",
                                    {
                                      class: "info-bar-button button-naked",
                                      disabled: l.disabledSheet,
                                      onClick:
                                        m[5] ||
                                        (m[5] = (p) =>
                                          f(
                                            l.currentValue + 5,
                                            s[l.type].currentValue
                                          )),
                                    },
                                    Te,
                                    8,
                                    Re
                                  ),
                                ])),
                          ],
                          2
                        ),
                      ],
                      2
                    ),
                  ])),
            ],
            2
          )
        )
      );
    },
  }),
  Hn = C(Fe, [["__scopeId", "data-v-05b4e714"]]),
  Wn = {
    name: "",
    player: "",
    attributes: { str: 0, dex: 0, int: 0, con: 0, pre: 0 },
    backgroundName: "",
    className: "",
    nex: "",
    movement: 9,
    maxPv: 0,
    currentPv: 0,
    maxPe: 0,
    currentPe: 0,
    maxSan: 0,
    currentSan: 0,
    maxPd: 0,
    currentPd: 0,
    nexString: "0%",
    isSobrevivendoAoHorror: !1,
    protectionDefense: 0,
    bonusDefense: 0,
    currentProtection: "",
    resistances: "",
    proficiencies: "",
    skills: St,
    attacks: [],
    powers: [],
    rituals: [],
    ritualsDc: 0,
    patent: "",
    prestigePoints: 0,
    inventory: [],
    itemsLimit: { I: 0, II: 0, III: 0, IV: 0 },
    currentItemsLimit: { I: 0, II: 0, III: 0, IV: 0 },
    creditsLimit: "",
    maxLoad: 0,
    currentLoad: 0,
    description: {
      anotation: "",
      physical: "",
      personal: "",
      history: "",
      goal: "",
    },
    deathMarks: [],
    madnessMarks: [],
    deathMode: !1,
    madnessMode: !1,
    sheetPictureURL: "",
    sheetPictureFullPath: "",
    statsClass: "Combatant",
    canDMEdit: !0,
    canAnyoneEdit: !1,
    block: null,
    evade: null,
    private: !1,
    campaignDocId: "",
    resistencias: {},
    imunidades: [],
    vulnerabilidades: [],
    skinDice: It[0],
    pdMarks: [],
    pdMode: !1,
    isNexLevelOn: !1,
    isPdOn: !1,
  },
  Ue = {
    name: "New Attack",
    attackBonus: 0,
    damage: "1d4",
    extraDamage: "0",
    criticalRange: 20,
    criticalMult: 2,
    damageType: "-",
    range: "-",
    skillUsed: "Fighting",
    damageAttribute: "Strength",
  },
  zn = {
    str: "Strength",
    dex: "Agility",
    int: "Intellect",
    con: "Vigor",
    pre: "Presence",
  },
  q = [
    "5%",
    "10%",
    "15%",
    "20%",
    "25%",
    "30%",
    "35%",
    "40%",
    "45%",
    "50%",
    "55%",
    "60%",
    "65%",
    "70%",
    "75%",
    "80%",
    "85%",
    "90%",
    "95%",
    "99%",
  ],
  tt = {
    "5%": "1",
    "10%": "2",
    "15%": "3",
    "20%": "4",
    "25%": "5",
    "30%": "6",
    "35%": "7",
    "40%": "8",
    "45%": "9",
    "50%": "10",
    "55%": "11",
    "60%": "12",
    "65%": "13",
    "70%": "14",
    "75%": "15",
    "80%": "16",
    "85%": "17",
    "90%": "18",
    "95%": "19",
    "99%": "20",
  },
  ut = { STR: "str", AGI: "dex", INT: "int", PRE: "pre", VIG: "con" },
  et = {
    Strength: "str",
    Agility: "dex",
    Intellect: "int",
    Vigor: "con",
    Presence: "pre",
  },
  qe = {
    Strength: "STR",
    Agility: "AGI",
    Intellect: "INT",
    Vigor: "VIG",
    Presence: "PRE",
  },
  st = {
    "5%": 1,
    "10%": 2,
    "15%": 3,
    "20%": 4,
    "25%": 5,
    "30%": 6,
    "35%": 7,
    "40%": 8,
    "45%": 9,
    "50%": 10,
    "55%": 11,
    "60%": 12,
    "65%": 13,
    "70%": 14,
    "75%": 15,
    "80%": 16,
    "85%": 17,
    "90%": 18,
    "95%": 19,
    "99%": 20,
  },
  P = (t, e, n = !0, o = !0) => {
    const s = { 1: 9, 2: 99, 3: 999, 4: 9999 },
      a = { 1: -9, 2: -99, 3: -999, 4: -9999 };
    return (
      isNaN(t) && (t = 0),
      t > s[e] && (t = s[e]),
      o ? t < 0 && (t = 0) : t < a[e] && (t = a[e]),
      n ? Math.floor(t) : t
    );
  },
  jn = (t, e, n) => {
    n === "maxPv" ||
    n === "maxPe" ||
    n === "maxSan" ||
    n === "currentPv" ||
    n === "currentPe" ||
    n === "currentSan"
      ? (t[n] = P(e, 4))
      : n === "bonusDefense"
      ? (t[n] = P(e, 3, !0, !1))
      : n === "movement"
      ? (t[n] = P(e, 3, !1, !0))
      : (t[n] = P(e, 3)),
      parseInt(t.peTurn) < 1 && (t.peTurn = "1");
  },
  He = (t, e) => {
    let n = t.attributes.pre;
    n < 0 && (n = 0), e < 0 && (e = 0);
    const o = Math.abs(n - e);
    let s = 1;
    q.indexOf(t.nex) >= 1 && (s = q.indexOf(t.nex) + 1),
      n > e
        ? ((t.ritualsDc += o),
          (t.maxPe += o * s),
          (t.currentPe += o * s),
          (t.maxPd += o * s),
          (t.currentPd += o * s))
        : ((t.ritualsDc -= o),
          (t.maxPe -= o * s),
          (t.currentPe -= o * s),
          (t.maxPd -= o * s),
          (t.currentPd -= o * s)),
      t.ritualsDc < 0 && (t.ritualsDc = 0),
      t.maxPe < 0 && (t.maxPe = 0);
  },
  We = (t, e) => {
    let n = t.attributes.str;
    if ((n < 0 && (n = 0), e < 0 && (e = 0), n !== e)) {
      if (n === 0) (t.maxLoad -= (e - 1) * 5), (t.maxLoad -= 3);
      else if (e === 0) {
        if (t.attributes.str < 0) return;
        (t.maxLoad += (n - 1) * 5), (t.maxLoad += 3);
      } else {
        const o = Math.abs(n - e);
        n > e ? (t.maxLoad += o * 5) : (t.maxLoad -= o * 5);
      }
      t.maxLoad < 0 && (t.maxLoad = 0);
    }
  },
  ze = (t, e) => {
    let n = t.attributes.con;
    n < 0 && (n = 0), e < 0 && (e = 0);
    const o = Math.abs(n - e);
    let s = 1;
    q.indexOf(t.nex) >= 1 && (s = q.indexOf(t.nex) + 1),
      n > e
        ? ((t.maxPv += o * s), (t.currentPv += o * s))
        : ((t.maxPv -= o * s), (t.currentPv -= o * s)),
      t.maxPv < 1 && (t.maxPv = 1);
  },
  Gn = (t, e, n) => {
    const o = { ...t.attributes };
    (t.attributes[n] = P(e, 2, !0, !1)),
      n === "str" && We(t, o.str),
      n === "con" && ze(t, o.con),
      n === "pre" && He(t, o.pre);
  },
  Jn = (t, e) => {
    isNaN(e) && (e = 0),
      e > 666 && (e = 666),
      e < 0 && (e = 0),
      e === 0 ? (t.movement = 0) : (t.movement = Math.floor(e) * 1.5);
  },
  Qn = (t) => t.split("=")[0].split(":")[1],
  Kn = (t) => t.split("=")[0].split(":")[0],
  Yn = (t, e) => {
    let n;
    const o = t.attributes[e];
    return (
      o > 0 ? (n = `${o}d20kh1`) : (n = `${Math.abs(o) + 2}d20kl1`), new T(n)
    );
  },
  Xn = (t) => new T(t.trim()),
  je = (t) => {
    const e = `(${t.damage} - ${t.damageType})`,
      n = t.damageAttribute !== "None" ? ` + ${qe[t.damageAttribute]}` : "",
      o = [];
    if (t.aditionalDamage)
      for (const a of t.aditionalDamage)
        o.push(`(${a.value} - ${a.damageType})`);
    const s = o.join(" + ");
    return e + (s ? ` + ${s}` : "") + n;
  },
  Ge = (t, e, n) =>
    `${t}d20kh1` + (e !== 0 ? `+${e}` : "") + (n !== 0 ? `+${n}` : ""),
  Je = (t, e, n) =>
    `${Math.abs(t) + 2}d20kl1` +
    (e !== 0 ? `+${e}` : "") +
    (n !== 0 ? `+${n}` : ""),
  Zn = (t, e) => {
    const n = t.skills.findIndex(($) => $.name === e.skillUsed),
      o = t.skills[n],
      s = t.attributes[ut[o.attribute]],
      a =
        `${o.name} (${o.attribute})` +
        (e.attackBonus !== 0 ? ` + ${e.attackBonus}` : ""),
      r = je(e),
      c = `${e.criticalRange}/x${e.criticalMult}`;
    let f;
    s > 0
      ? (f = Ge(s, o.bonus, e.attackBonus))
      : (f = Je(s, o.bonus, e.attackBonus));
    const l = new T(f.trim()),
      m = l.total,
      p = l.output
        .substring(l.output.indexOf("[") + 1, l.output.indexOf("]"))
        .split(",");
    let b = 0;
    if (p.length > 1)
      p.map(($) => {
        $.includes("d") ||
          (parseInt($) >= e.criticalRange && (b = 1),
          parseInt($) === 1 && (b = -1),
          parseInt($) === 1 && e.criticalRange === 1 && (b = 1));
      });
    else {
      const $ = l.output.substring(
        l.output.indexOf("[") + 1,
        l.output.indexOf("]")
      );
      parseInt($) >= e.criticalRange && (b = 1), parseInt($) === 1 && (b = -1);
    }
    const y = e.damage !== "" ? `${e.damage}` : "0";
    let L = 0,
      _ = "";
    if (b === 1)
      for (let $ = 0; $ < e.criticalMult; $++) {
        const S = new T(y.trim());
        (L += S.total),
          (_ +=
            S.output.substring(
              S.output.indexOf(":") + 1,
              S.output.indexOf("=") - 1
            ) + "+");
      }
    else {
      const $ = new T(y.trim());
      (L += $.total),
        (_ +=
          $.output.substring(
            $.output.indexOf(":") + 1,
            $.output.indexOf("=") - 1
          ) + "+");
    }
    if (e.aditionalDamage && e.aditionalDamage.length > 0) {
      const $ = [];
      for (const vt of e.aditionalDamage) $.push(vt.value);
      const S = new T($.join("+"));
      (L += S.total),
        S.output.includes("[")
          ? (_ +=
              S.output.substring(
                S.output.indexOf(":") + 1,
                S.output.indexOf("=") - 1
              ) + "+")
          : (_ += S.total + "+");
    }
    return (
      e.damageAttribute !== "None" &&
        ((L += t.attributes[et[e.damageAttribute]]),
        (_ += t.attributes[et[e.damageAttribute]])),
      _.charAt(_.length - 1) === "+" && (_ = _.slice(0, -1)),
      {
        attackTotal: m,
        damageTotal: L,
        critical: b,
        attackInfo: a,
        damageInfo: r,
        criticalInfo: c,
        attackRollInfo:
          l.output.substring(l.output.indexOf("["), l.output.indexOf("]") + 1) +
          (e.attackBonus !== 0 ? `+${e.attackBonus}` : ""),
        damageRollInfo: `${_.trim().replace(/\s/g, "")}`,
      }
    );
  },
  to = (t, e) => {
    let n;
    const o = t.attributes[ut[e.attribute]];
    return (
      o > 0
        ? (n = `${o}d20kh1` + (e.bonus !== 0 ? `+${e.bonus}` : ""))
        : (n =
            `${Math.abs(o) + 2}d20kl1` + (e.bonus !== 0 ? `+${e.bonus}` : "")),
      new T(n.trim())
    );
  },
  eo = (t, e) => {
    const n = t.skills.findIndex((s) => s.name === e),
      o = t.skills[n];
    o.bonus = parseInt(o.trainingDegree) + o.otherBonus;
  },
  so = (t, e, n) => {
    const o = t.skills.findIndex((s) => s.name === n);
    t.skills[o].otherBonus = P(e, 2, !0, !1);
  },
  no = (t, e) => {
    const n = t.attacks.findIndex((o) => o.id === e);
    if (t.attacks[n].itemId) {
      const o = t.inventory.findIndex((s) => s.id === t.attacks[n].itemId);
      t.inventory[o].equipped = !1;
    }
    t.attacks.splice(n, 1);
  },
  Qe = (t, e) => {
    if (t.inventory[e].itemType === "weapon") {
      const n = t.inventory[e],
        o = { ...Ue };
      (o.id = x()),
        (o.itemId = n.id),
        (o.name = n.name),
        (o.damage = n.damage),
        (o.criticalRange = n.criticalRange),
        (o.criticalMult = n.criticalMult),
        (o.damageType = n.damageType),
        (o.range = n.range),
        (o.pictureURL = n.pictureURL || ""),
        (o.pictureFullPath = n.pictureFullPath || ""),
        n.type !== "Melee" &&
          ((o.skillUsed = "Marksmanship"), (o.damageAttribute = "None")),
        t.attacks.push(o);
    }
    if (t.inventory[e].itemType === "protection") {
      const n = t.inventory[e];
      (t.protectionDefense += n.defense),
        t.currentProtection === ""
          ? (t.currentProtection += n.name)
          : (t.currentProtection += ` ${n.name}`);
    }
  },
  ct = (t, e) => {
    if (t.inventory[e].itemType === "weapon") {
      const n = t.inventory[e],
        o = t.attacks.findIndex((s) => s.itemId === n.id);
      t.attacks.splice(o, 1);
    }
    if (t.inventory[e].itemType === "protection") {
      const n = t.inventory[e];
      (t.protectionDefense -= n.defense),
        (t.currentProtection = t.currentProtection.replace(n.name, "")),
        (t.currentProtection = t.currentProtection.trim());
    }
  },
  oo = (t, e) => {
    const n = t.inventory.findIndex((o) => o.id === e);
    t.inventory[n].itemType === "misc" ||
      t.inventory[n].itemType === "cursedItem" ||
      ((t.inventory[n].equipped = !t.inventory[n].equipped),
      t.inventory[n].equipped ? Qe(t, n) : ct(t, n));
  },
  io = (t, e, n) => {
    t[n] = P(e, 3);
  },
  ao = (t, e, n) => {
    t.itemsLimit[n] = P(e, 2);
  },
  lo = (t, e) => {
    const n = { ...e };
    if (((n.id = x()), t.powers.push(n), e.hasAutomation)) {
      const o = U.find((s) => s.id === e.automationId);
      if (!(o != null && o.onAdd)) return;
      o.onAdd(t);
    }
  },
  ro = (t, e) => {
    const n = t.powers.findIndex((s) => s.id === e),
      o = t.powers.find((s) => s.id === e);
    if (
      n !== -1 &&
      (t.powers.splice(n, 1), o != null && o.hasAutomation && o.isAutomationOn)
    ) {
      const s = U.find((a) => a.id === o.automationId);
      if (!(s != null && s.onRemove)) return;
      s.onRemove(t);
    }
  },
  uo = (t, e) => {
    const n = { ...e };
    (n.id = x()), t.rituals.push(n);
  },
  co = (t, e) => {
    const n = { ...e };
    (n.id = x()), (n.equipped = !1);
    let o;
    if (
      (isNaN(n.slots) ? (o = 0) : (o = parseFloat(n.slots)),
      n.itemType === "weapon")
    ) {
      const s = n;
      s.ammunition &&
        ((o += parseFloat(s.ammunition.slots)),
        s.ammunition.category !== "-" &&
          s.ammunition.category !== "0" &&
          (t.currentItemsLimit[s.ammunition.category] += 1));
    }
    n.category !== "-" &&
      n.category !== "0" &&
      (t.currentItemsLimit[n.category] += 1),
      (t.currentLoad += o),
      t.inventory.push(n);
  },
  mo = (t, e) => {
    const n = t.inventory.findIndex((a) => a.id === e),
      o = t.inventory[n];
    let s;
    if ((isNaN(o.slots) ? (s = 0) : (s = o.slots), o.itemType === "weapon")) {
      const a = o;
      a.ammunition &&
        ((s += a.ammunition.slots),
        a.ammunition.category !== "-" &&
          a.ammunition.category !== "0" &&
          ((t.currentItemsLimit[a.ammunition.category] -= 1),
          t.currentItemsLimit[a.ammunition.category] < 0 &&
            (t.currentItemsLimit[a.ammunition.category] = 0)));
    }
    o.category !== "-" &&
      o.category !== "0" &&
      ((t.currentItemsLimit[o.category] -= 1),
      t.currentItemsLimit[o.category] < 0 &&
        (t.currentItemsLimit[o.category] = 0)),
      (t.currentLoad -= s),
      t.inventory[n].equipped && ct(t, n),
      t.inventory.splice(n, 1);
  },
  po = (t, e) => {
    t.ritualsDc = P(e, 3);
  },
  fo = (t, e) => {
    if (t.nex === e) return;
    const n = Dt.find((p) => p.name === t.statsClass);
    if (!n) return;
    const o = st[t.nex],
      s = st[e],
      a = Math.abs(o - s),
      r = (n.levelPv + t.attributes.con) * a,
      c = (n.levelPe + t.attributes.pre) * a,
      f = (n.levelPd + t.attributes.pre) * a,
      l = n.levelSan * a,
      m = Math.abs(parseInt(tt[t.nex]) - parseInt(tt[e]));
    if (o > s) {
      (t.maxPv += r),
        (t.currentPv += r),
        (t.maxPe += c),
        (t.currentPe += c),
        (t.maxPd += f),
        (t.currentPd += f),
        (t.maxSan += l),
        (t.currentSan += l),
        (t.ritualsDc += a),
        (t.peTurn = (parseInt(t.peTurn) + m).toString());
      for (const p of t.powers)
        if (p.hasAutomation && p.isAutomationOn) {
          const b = U.find((y) => y.id === p.automationId);
          if (!(b != null && b.onNexUp)) return;
          for (let y = 0; y < a; y++) b.onNexUp(t);
        }
    } else {
      (t.maxPv -= r),
        (t.currentPv -= r),
        (t.maxPe -= c),
        (t.currentPe -= c),
        (t.maxPd -= f),
        (t.currentPd -= f),
        (t.maxSan -= l),
        (t.currentSan -= l),
        (t.ritualsDc -= a),
        (t.peTurn = (parseInt(t.peTurn) - m).toString());
      for (const p of t.powers)
        if (p.hasAutomation && p.isAutomationOn) {
          const b = U.find((y) => y.id === p.automationId);
          if (!(b != null && b.onNexDown)) return;
          for (let y = 0; y < a; y++) b.onNexDown(t);
        }
    }
    t.currentPv < 0 && (t.currentPv = 0),
      t.currentPe < 0 && (t.currentPe = 0),
      t.currentSan < 0 && (t.currentSan = 0),
      t.maxPv < 1 && (t.maxPv = 1),
      t.maxPe < 1 && (t.maxPe = 1),
      t.maxSan < 1 && (t.maxSan = 1),
      t.ritualsDc < 0 && (t.ritualsDc = 0),
      parseInt(t.peTurn) < 1 && (t.peTurn = "1");
  },
  go = (t, e) => {
    const n = t.inventory.findIndex((s) => s.id === e.id),
      o = { ...t.inventory[n] };
    if (JSON.stringify(o) !== JSON.stringify(e)) {
      if (((t.inventory[n] = e), o.slots !== e.slots)) {
        if (isNaN(parseInt(e.slots))) t.currentLoad -= o.slots;
        else {
          const s = Math.abs(o.slots - e.slots);
          e.slots > o.slots ? (t.currentLoad += s) : (t.currentLoad -= s);
        }
        t.currentLoad < 0 && (t.currentLoad = 0);
      }
      if (
        (o.category !== e.category &&
          (o.category !== "-" &&
            o.category !== "0" &&
            (t.currentItemsLimit[o.category] -= 1),
          e.category !== "-" &&
            e.category !== "0" &&
            (t.currentItemsLimit[e.category] += 1)),
        e.itemType === "protection" && e.equipped)
      ) {
        const s = o,
          a = e;
        if (s.defense !== a.defense) {
          const r = Math.abs(s.defense - a.defense);
          a.defense > s.defense
            ? (t.protectionDefense += r)
            : (t.protectionDefense -= r);
        }
        s.name !== a.name &&
          t.currentProtection.includes(s.name) &&
          (t.currentProtection = t.currentProtection.replace(s.name, a.name));
      }
      if (e.itemType === "weapon" && e.equipped) {
        const s = o,
          a = e,
          r = t.attacks.findIndex((c) => c.itemId === e.id);
        s.name !== a.name && (t.attacks[r].name = a.name),
          s.damage !== a.damage && (t.attacks[r].damage = a.damage),
          s.criticalRange !== a.criticalRange &&
            (t.attacks[r].criticalRange = a.criticalRange),
          s.criticalMult !== a.criticalMult &&
            (t.attacks[r].criticalMult = a.criticalMult),
          s.damageType !== a.damageType &&
            (t.attacks[r].damageType = a.damageType),
          s.range !== a.range && (t.attacks[r].range = a.range);
      }
    }
  },
  vo = (t, e) => {
    (t.statsClass = e.name), (t.className = e.name);
    for (const n of e.abilities) (n.id = x()), t.powers.push(n);
    (t.maxPv = e.initialPv + t.attributes.con),
      (t.currentPv = t.maxPv),
      (t.maxPe = e.initialPe + t.attributes.pre),
      (t.currentPe = t.maxPe),
      (t.maxPd = e.initialPd + t.attributes.pre),
      (t.currentPd = t.maxPd),
      (t.maxSan = e.initialSan),
      (t.currentSan = t.maxSan),
      (t.proficiencies = e.proficiencies);
  },
  Ke =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M9%2016.2L4.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4L9%2016.2z'/%3e%3c/svg%3e",
  mt = (t) => (A("data-v-555f9c83"), (t = t()), w(), t),
  Ye = { class: "attr-container" },
  Xe = { class: "image-container" },
  Ze = mt(() =>
    i("img", { class: "attr-image", src: dt, alt: "atributos" }, null, -1)
  ),
  ts = ["value"],
  es = ["value"],
  ss = ["value"],
  ns = ["value"],
  os = ["value"],
  is = { class: "change-button-container" },
  as = mt(() => i("img", { src: Ke, alt: "concluir" }, null, -1)),
  ls = [as],
  rs = D({
    __name: "AttributesEdit",
    props: { character: {} },
    emits: ["handleChangeAttribute", "handleEdit"],
    setup(t, { emit: e }) {
      const n = e,
        o = $t(),
        s = (a, r) => {
          var c;
          n("handleChangeAttribute", { e: a, key: r }),
            (c = o == null ? void 0 : o.proxy) == null || c.$forceUpdate();
        };
      return (a, r) => (
        d(),
        u("div", Ye, [
          i("div", Xe, [
            Ze,
            i(
              "input",
              {
                type: "number",
                class: "input str",
                value: a.character.attributes.str,
                onBlur: r[0] || (r[0] = (c) => s(c, "str")),
              },
              null,
              40,
              ts
            ),
            i(
              "input",
              {
                type: "number",
                class: "input dex",
                value: a.character.attributes.dex,
                onBlur: r[1] || (r[1] = (c) => s(c, "dex")),
              },
              null,
              40,
              es
            ),
            i(
              "input",
              {
                type: "number",
                class: "input int",
                value: a.character.attributes.int,
                onBlur: r[2] || (r[2] = (c) => s(c, "int")),
              },
              null,
              40,
              ss
            ),
            i(
              "input",
              {
                type: "number",
                class: "input con",
                value: a.character.attributes.con,
                onBlur: r[3] || (r[3] = (c) => s(c, "con")),
              },
              null,
              40,
              ns
            ),
            i(
              "input",
              {
                type: "number",
                class: "input pre",
                value: a.character.attributes.pre,
                onBlur: r[4] || (r[4] = (c) => s(c, "pre")),
              },
              null,
              40,
              os
            ),
          ]),
          i("div", is, [
            i(
              "button",
              {
                class: "change-button",
                onClick: r[5] || (r[5] = (c) => a.$emit("handleEdit")),
              },
              ls
            ),
          ]),
        ])
      );
    },
  }),
  ds = C(rs, [["__scopeId", "data-v-555f9c83"]]),
  pt = (t) => (A("data-v-807e2a9b"), (t = t()), w(), t),
  us = { class: "attr-container" },
  cs = { class: "image-container" },
  ms = pt(() =>
    i("img", { class: "attr-image", src: dt, alt: "atributos" }, null, -1)
  ),
  ps = { key: 0, class: "change-button-container" },
  fs = pt(() => i("img", { src: _t, alt: "editar" }, null, -1)),
  gs = [fs],
  vs = D({
    __name: "AttributesRoll",
    props: {
      character: {},
      disabledSheet: { type: Boolean },
      combatSheet: { type: Boolean },
    },
    emits: ["handleRollAttribute", "handleEdit"],
    setup(t, { emit: e }) {
      const n = t,
        o = e,
        s = (a) => {
          n.disabledSheet || o("handleRollAttribute", a);
        };
      return (a, r) => (
        d(),
        u("div", us, [
          i("div", cs, [
            ms,
            i(
              "button",
              {
                class: v(["attr str", { disabled: a.disabledSheet }]),
                onClick: r[0] || (r[0] = (c) => s("str")),
              },
              g(a.character.attributes.str),
              3
            ),
            i(
              "button",
              {
                class: v(["attr dex", { disabled: a.disabledSheet }]),
                onClick: r[1] || (r[1] = (c) => s("dex")),
              },
              g(a.character.attributes.dex),
              3
            ),
            i(
              "button",
              {
                class: v(["attr int", { disabled: a.disabledSheet }]),
                onClick: r[2] || (r[2] = (c) => s("int")),
              },
              g(a.character.attributes.int),
              3
            ),
            i(
              "button",
              {
                class: v(["attr con", { disabled: a.disabledSheet }]),
                onClick: r[3] || (r[3] = (c) => s("con")),
              },
              g(a.character.attributes.con),
              3
            ),
            i(
              "button",
              {
                class: v(["attr pre", { disabled: a.disabledSheet }]),
                onClick: r[4] || (r[4] = (c) => s("pre")),
              },
              g(a.character.attributes.pre),
              3
            ),
          ]),
          !a.disabledSheet && !a.combatSheet
            ? (d(),
              u("div", ps, [
                i(
                  "button",
                  {
                    class: "change-button",
                    onClick: r[5] || (r[5] = (c) => a.$emit("handleEdit")),
                  },
                  gs
                ),
              ]))
            : h("", !0),
        ])
      );
    },
  }),
  bs = C(vs, [["__scopeId", "data-v-807e2a9b"]]),
  $s = { key: 0, class: "att-container" },
  ks = { key: 1, class: "att-container" },
  hs = D({
    __name: "AttributesView",
    props: {
      character: {},
      disabledSheet: { type: Boolean },
      combatSheet: { type: Boolean },
    },
    emits: ["handleChangeAttribute", "handleRollAttribute"],
    setup(t, { emit: e }) {
      const n = e,
        o = (a) => {
          n("handleRollAttribute", a);
        },
        s = V(!1);
      return (a, r) =>
        s.value
          ? (d(),
            u("div", $s, [
              N(
                ds,
                {
                  character: a.character,
                  onHandleEdit: r[0] || (r[0] = (c) => (s.value = !1)),
                  onHandleChangeAttribute:
                    r[1] || (r[1] = (c) => a.$emit("handleChangeAttribute", c)),
                },
                null,
                8,
                ["character"]
              ),
            ]))
          : (d(),
            u("div", ks, [
              N(
                bs,
                {
                  character: a.character,
                  "disabled-sheet": a.disabledSheet,
                  "combat-sheet": a.combatSheet,
                  onHandleEdit: r[2] || (r[2] = (c) => (s.value = !0)),
                  onHandleRollAttribute: o,
                },
                null,
                8,
                ["character", "disabled-sheet", "combat-sheet"]
              ),
            ]));
    },
  }),
  bo = C(hs, [["__scopeId", "data-v-e6595177"]]),
  ys = ["placeholder", "value"],
  _s = D({
    __name: "FilterInput",
    props: {
      value: { type: String, required: !0 },
      placeholder: { type: String, default: "" },
      width: { type: String, default: "23.5rem" },
    },
    emits: ["update"],
    setup(t, { emit: e }) {
      M((r) => ({ "3e2347da": s.value }));
      const n = t,
        o = e,
        s = V(n.width),
        a = (r) => {
          o("update", r.target.value);
        };
      return (r, c) => (
        d(),
        u(
          "input",
          {
            class: "sheet-input filter-input",
            type: "text",
            placeholder: t.placeholder,
            value: t.value,
            onInput: a,
          },
          null,
          40,
          ys
        )
      );
    },
  }),
  $o = C(_s, [["__scopeId", "data-v-a24ea236"]]),
  ft = (t) => (A("data-v-0f772e72"), (t = t()), w(), t),
  Ss = { class: "card" },
  Is = ft(() => i("img", { src: Ct, alt: "ver mais" }, null, -1)),
  Ds = [Is],
  Cs = { class: "first-row" },
  Ps = { class: "title" },
  As = { class: "item-info-container" },
  ws = { class: "item-info" },
  Rs = { class: "item-info" },
  Ls = { key: 0 },
  Ts = { key: 1 },
  Ms = { key: 2 },
  Vs = { class: "button-container" },
  Bs = ["disabled", "onClick"],
  Ns = ft(() => i("img", { src: O, alt: "rolar" }, null, -1)),
  Os = [Ns],
  xs = { key: 0 },
  Es = { class: "content" },
  Fs = { class: "only-sheet-content-container" },
  Us = { class: "card-info-image-container" },
  qs = { class: "item-info" },
  Hs = { class: "item-info" },
  Ws = { key: 0, class: "item-info" },
  zs = { key: 0 },
  js = { class: "item-info" },
  Gs = { class: "item-info" },
  Js = { class: "item-info" },
  Qs = ["src"],
  Ks = ["innerHTML"],
  Ys = { key: 0, class: "card-footer" },
  Xs = ["onClick"],
  Zs = { key: 0 },
  tn = ["src"],
  en = D({
    __name: "AttackCard",
    props: {
      attack: { type: Object, required: !0 },
      id: { type: String, default: "" },
      disabled: Boolean,
      disabledEdit: Boolean,
    },
    emits: ["handleRemoveAttack", "handleRollAttack", "handleEdit"],
    setup(t, { emit: e }) {
      const n = t,
        o = e,
        s = V(!1),
        a = V(!1),
        r = () => {
          n.disabled || o("handleRollAttack", n.attack);
        },
        c = () => {
          n.disabled || o("handleEdit", n.attack);
        };
      return (f, l) => {
        const m = kt("vue-final-modal");
        return (
          d(),
          u(
            F,
            null,
            [
              i("div", Ss, [
                i(
                  "div",
                  {
                    class: "header",
                    onClick: l[1] || (l[1] = (p) => (s.value = !s.value)),
                  },
                  [
                    i(
                      "button",
                      {
                        class: v(["show-more", { rotate: s.value }]),
                        onClick:
                          l[0] ||
                          (l[0] = E((p) => (s.value = !s.value), ["stop"])),
                      },
                      Ds,
                      2
                    ),
                    i("div", null, [
                      i("div", Cs, [i("h3", Ps, g(t.attack.name), 1)]),
                      i("div", As, [
                        i("div", ws, [
                          i("h3", null, [
                            k(" Damage: "),
                            i("span", null, g(t.attack.damage), 1),
                          ]),
                        ]),
                        i("div", Rs, [
                          i("h3", null, [
                            k(" Critical: "),
                            t.attack.criticalRange < 20 &&
                            t.attack.criticalMult > 2
                              ? (d(),
                                u(
                                  "span",
                                  Ls,
                                  g(t.attack.criticalRange) +
                                    "/x" +
                                    g(t.attack.criticalMult),
                                  1
                                ))
                              : t.attack.criticalRange < 20
                              ? (d(),
                                u("span", Ts, g(t.attack.criticalRange), 1))
                              : (d(),
                                u(
                                  "span",
                                  Ms,
                                  "x" + g(t.attack.criticalMult),
                                  1
                                )),
                          ]),
                        ]),
                      ]),
                    ]),
                    i("div", Vs, [
                      i(
                        "button",
                        {
                          class: v(["roll-button", { disabled: t.disabled }]),
                          disabled: t.disabled,
                          onClick: E(r, ["stop"]),
                        },
                        Os,
                        10,
                        Bs
                      ),
                    ]),
                  ]
                ),
                N(
                  ht,
                  { name: "card", mode: "out-in" },
                  {
                    default: Y(() => [
                      s.value
                        ? (d(),
                          u("div", xs, [
                            N(yt),
                            i("div", Es, [
                              i("div", Fs, [
                                i("div", Us, [
                                  i("div", null, [
                                    i("div", qs, [
                                      i("h3", null, [
                                        k("Attack Bonus: "),
                                        i(
                                          "span",
                                          null,
                                          g(t.attack.attackBonus),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    i("div", Hs, [
                                      i("h3", null, [
                                        k("Damage Type: "),
                                        i(
                                          "span",
                                          null,
                                          g(t.attack.damageType),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    t.attack.aditionalDamage
                                      ? (d(),
                                        u("div", Ws, [
                                          i("h3", null, [
                                            k(" Extra Damage: "),
                                            (d(!0),
                                            u(
                                              F,
                                              null,
                                              j(
                                                t.attack.aditionalDamage,
                                                (p, b) => (
                                                  d(),
                                                  u("span", { key: p.id }, [
                                                    k(
                                                      g(p.value) +
                                                        " " +
                                                        g(p.damageType),
                                                      1
                                                    ),
                                                    b !==
                                                    t.attack.aditionalDamage
                                                      .length -
                                                      1
                                                      ? (d(),
                                                        u("span", zs, ", "))
                                                      : h("", !0),
                                                  ])
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                        ]))
                                      : h("", !0),
                                    i("div", js, [
                                      i("h3", null, [
                                        k("Range: "),
                                        i("span", null, g(t.attack.range), 1),
                                      ]),
                                    ]),
                                    i("div", Gs, [
                                      i("h3", null, [
                                        k("Skill: "),
                                        i(
                                          "span",
                                          null,
                                          g(t.attack.skillUsed),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    i("div", Js, [
                                      i("h3", null, [
                                        k("Damage Attribute: "),
                                        i(
                                          "span",
                                          null,
                                          g(t.attack.damageAttribute),
                                          1
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  t.attack.pictureURL
                                    ? (d(),
                                      u(
                                        "div",
                                        {
                                          key: 0,
                                          onClick:
                                            l[2] ||
                                            (l[2] = (p) => (a.value = !0)),
                                        },
                                        [
                                          i(
                                            "img",
                                            {
                                              class: "card-image",
                                              src: t.attack.pictureURL,
                                            },
                                            null,
                                            8,
                                            Qs
                                          ),
                                        ]
                                      ))
                                    : h("", !0),
                                ]),
                              ]),
                              i(
                                "div",
                                {
                                  class: "sheet-content",
                                  innerHTML: t.attack.description,
                                },
                                null,
                                8,
                                Ks
                              ),
                              !t.disabled && !t.disabledEdit
                                ? (d(),
                                  u("div", Ys, [
                                    i(
                                      "button",
                                      {
                                        class: "button-remove",
                                        onClick:
                                          l[3] ||
                                          (l[3] = E(
                                            (p) =>
                                              f.$emit(
                                                "handleRemoveAttack",
                                                t.id
                                              ),
                                            ["stop"]
                                          )),
                                      },
                                      " Remove "
                                    ),
                                    i(
                                      "button",
                                      {
                                        class: "button-remove button-edit",
                                        onClick: E(c, ["stop"]),
                                      },
                                      " Edit ",
                                      8,
                                      Xs
                                    ),
                                  ]))
                                : h("", !0),
                            ]),
                          ]))
                        : h("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              a.value
                ? (d(),
                  u("div", Zs, [
                    N(
                      m,
                      {
                        modelValue: a.value,
                        "onUpdate:modelValue":
                          l[4] || (l[4] = (p) => (a.value = p)),
                        classes: "modal-container",
                      },
                      {
                        default: Y(() => [
                          i(
                            "img",
                            {
                              class: "card-image-full",
                              src: t.attack.pictureURL,
                            },
                            null,
                            8,
                            tn
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : h("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  ko = C(en, [["__scopeId", "data-v-0f772e72"]]),
  gt = (t) => (A("data-v-e2b14727"), (t = t()), w(), t),
  sn = { class: "toast-content" },
  nn = ["src"],
  on = { key: 1, class: "toast-icon", src: O, alt: "d20" },
  an = { class: "text" },
  ln = { class: "title" },
  rn = { class: "result" },
  dn = { class: "result-container" },
  un = { key: 0 },
  cn = gt(() => i("span", null, "=", -1)),
  mn = { class: "total-container" },
  pn = gt(() => i("img", { src: W, alt: "fechar" }, null, -1)),
  fn = [pn],
  nt = "#5cb85c",
  ot = "#d9534f",
  gn = "#fff",
  vn = D({
    __name: "ToastDice",
    props: { toast: {} },
    emits: ["dismiss"],
    setup(t) {
      M((s) => ({ "740de92c": o.value, "6015218e": n.value }));
      const e = t,
        n = I(() => {
          let s = gn;
          if (e.toast.defaultColor || e.toast.title === "Result") return s;
          const a = e.toast.output
            .substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            )
            .split(",");
          if (a.length > 1)
            a.map((r) => {
              r.includes("d") ||
                (parseInt(r) === 20 && (s = nt), parseInt(r) === 1 && (s = ot));
            });
          else {
            const r = e.toast.output.substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            );
            parseInt(r) === 20 && (s = nt), parseInt(r) === 1 && (s = ot);
          }
          return s;
        }),
        o = I(() =>
          e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
        );
      return (s, a) => {
        const r = H("tooltip");
        return (
          d(),
          u(
            "div",
            {
              class: "toast-wrapper",
              onClick: a[1] || (a[1] = (c) => s.$emit("dismiss")),
            },
            [
              i(
                "div",
                {
                  class: v([
                    "toast",
                    {
                      "toast-border":
                        s.toast.skinDice && s.toast.skinDice.isSolid,
                      "toast-img-border":
                        s.toast.skinDice && !s.toast.skinDice.isSolid,
                    },
                  ]),
                },
                [
                  i("div", sn, [
                    s.toast.skinDice
                      ? (d(),
                        u(
                          "img",
                          {
                            key: 0,
                            class: "toast-icon",
                            src: s.toast.skinDice.img,
                            alt: "d20",
                          },
                          null,
                          8,
                          nn
                        ))
                      : (d(), u("img", on)),
                    i("div", an, [
                      i("h3", ln, g(s.toast.title), 1),
                      i("div", rn, [
                        i("div", dn, [
                          R((d(), u("h4", null, [k(g(s.toast.output), 1)])), [
                            [
                              r,
                              {
                                content: s.toast.output,
                                triggers: ["hover", "click"],
                              },
                            ],
                          ]),
                          s.toast.title === "Result"
                            ? R(
                                (d(), u("h4", un, [k(g(s.toast.notation), 1)])),
                                [
                                  [
                                    r,
                                    {
                                      content: s.toast.notation,
                                      triggers: ["hover", "click"],
                                    },
                                  ],
                                ]
                              )
                            : h("", !0),
                        ]),
                        cn,
                        i("div", mn, [i("h3", null, g(s.toast.total), 1)]),
                      ]),
                    ]),
                    i(
                      "button",
                      {
                        class: "close-icon",
                        onClick: a[0] || (a[0] = (c) => s.$emit("dismiss")),
                      },
                      fn
                    ),
                  ]),
                ],
                2
              ),
            ]
          )
        );
      };
    },
  }),
  ho = C(vn, [["__scopeId", "data-v-e2b14727"]]),
  z = (t) => (A("data-v-c6906cd2"), (t = t()), w(), t),
  bn = { class: "toast-content" },
  $n = ["src"],
  kn = { key: 1, class: "toast-icon", src: O, alt: "d20" },
  hn = { class: "text" },
  yn = { class: "title" },
  _n = { class: "result" },
  Sn = { class: "attack-container" },
  In = z(() => i("h4", null, "TO HIT", -1)),
  Dn = z(() => i("div", { class: "divider" }, null, -1)),
  Cn = { class: "damage-container" },
  Pn = z(() => i("h4", { class: "padding-left" }, " DAMAGE ", -1)),
  An = z(() => i("img", { src: W, alt: "fechar" }, null, -1)),
  wn = [An],
  Rn = "#5cb85c",
  Ln = "#d9534f",
  Tn = "#fff",
  Mn = D({
    __name: "ToastAttack",
    props: { toast: {} },
    emits: ["dismiss"],
    setup(t) {
      M((a) => ({ "0af4102b": s.value, "27e358c0": o.value }));
      const e = t,
        n = V(window.innerWidth),
        o = I(() =>
          e.toast.critical === 1 ? Rn : e.toast.critical === -1 ? Ln : Tn
        );
      it(() => {
        window.addEventListener("resize", () => {
          n.value = window.innerWidth;
        });
      });
      const s = I(() =>
        e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
      );
      return (a, r) => {
        const c = H("tooltip");
        return (
          d(),
          u(
            "div",
            {
              class: "toast-wrapper",
              onClick:
                r[1] ||
                (r[1] = (f) => (n.value >= 1023 ? a.$emit("dismiss") : void 0)),
            },
            [
              i(
                "div",
                {
                  class: v([
                    "toast",
                    {
                      "toast-border":
                        a.toast.skinDice && a.toast.skinDice.isSolid,
                      "toast-img-border":
                        a.toast.skinDice && !a.toast.skinDice.isSolid,
                    },
                  ]),
                },
                [
                  i("div", bn, [
                    a.toast.skinDice
                      ? (d(),
                        u(
                          "img",
                          {
                            key: 0,
                            class: "toast-icon",
                            src: a.toast.skinDice.img,
                            alt: "d20",
                          },
                          null,
                          8,
                          $n
                        ))
                      : (d(), u("img", kn)),
                    i("div", hn, [
                      i("h3", yn, g(a.toast.title), 1),
                      i("div", _n, [
                        i("div", Sn, [
                          R(
                            (d(),
                            u("h3", null, [k(g(a.toast.totalAttack), 1)])),
                            [
                              [
                                c,
                                {
                                  content: `${a.toast.attackTooltip} = ${a.toast.attackRollTooltip}`,
                                  triggers: ["hover", "click"],
                                },
                              ],
                            ]
                          ),
                          In,
                        ]),
                        Dn,
                        i("div", Cn, [
                          R(
                            (d(),
                            u("h3", null, [k(g(a.toast.totalDamage), 1)])),
                            [
                              [
                                c,
                                {
                                  content: `${a.toast.damageTooltip} | ${a.toast.criticalTooltip} = ${a.toast.damageRollTooltip}`,
                                  triggers: ["hover", "click"],
                                },
                              ],
                            ]
                          ),
                          Pn,
                        ]),
                      ]),
                    ]),
                    i(
                      "button",
                      {
                        class: "close-icon",
                        onClick: r[0] || (r[0] = (f) => a.$emit("dismiss")),
                      },
                      wn
                    ),
                  ]),
                ],
                2
              ),
            ]
          )
        );
      };
    },
  }),
  yo = C(Mn, [["__scopeId", "data-v-c6906cd2"]]);
export {
  bo as A,
  lo as B,
  qn as C,
  uo as D,
  co as E,
  $o as F,
  go as G,
  vo as H,
  Hn as I,
  Ft as J,
  se as K,
  ho as T,
  ko as a,
  yo as b,
  jn as c,
  Xn as d,
  Kn as e,
  Qn as f,
  q as g,
  Wn as h,
  Gn as i,
  Jn as j,
  zn as k,
  Yn as l,
  eo as m,
  st as n,
  so as o,
  tt as p,
  to as q,
  Zn as r,
  no as s,
  ro as t,
  fo as u,
  mo as v,
  oo as w,
  io as x,
  ao as y,
  po as z,
};

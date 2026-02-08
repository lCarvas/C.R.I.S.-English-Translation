import {
  d as D,
  Q as M,
  f as y,
  al as H,
  o as u,
  c,
  a as i,
  t as g,
  C as R,
  H as $,
  m as h,
  a2 as b,
  p as A,
  b as w,
  _ as C,
  am as vt,
  r as V,
  e as it,
  w as at,
  n as F,
  q as j,
  v as K,
  J as W,
  an as lt,
  a3 as kt,
  k as N,
  i as $t,
  j as E,
  x as Y,
  T as ht,
  a4 as yt,
} from "./index-fqOV2Os2.js";
import { _ as O } from "./d20-icon-vaz1En3o.js";
import { _ as rt, a as _t } from "./edit-icon-3vZQUsyW.js";
import { S as St, s as It, c as U } from "./characterAutomations-3K9JWEvl.js";
import { D as T } from "./dice-roll--q1la88v.js";
import { c as Dt, _ as dt } from "./attributes-I0efBVjK.js";
import { v as x } from "./v4-cyCr5FZV.js";
import { _ as Ct } from "./show-more-icon-VvUXKiHG.js";
const Pt = (t) => (A("data-v-66edea84"), (t = t()), w(), t),
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
      M((s) => ({
        "248b1052": a.value,
        "400da41d": o.value,
        "53ae98ac": n.value,
      }));
      const e = t,
        n = y(() => {
          let s = xt;
          if (e.toast.defaultColor || e.toast.title === "Result") return s;
          const r = e.toast.output
            .substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            )
            .split(",");
          if (r.length > 1)
            r.map((d) => {
              d.includes("d") ||
                (parseInt(d) === 20 && (s = X), parseInt(d) === 1 && (s = Z));
            });
          else {
            const d = e.toast.output.substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            );
            (parseInt(d) === 20 && (s = X), parseInt(d) === 1 && (s = Z));
          }
          return s;
        }),
        o = y(() =>
          e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
        ),
        a = y(() => {
          var s;
          return (s = e.toast.skinDice) != null && s.background
            ? e.toast.skinDice.background
            : "#181818";
        });
      return (s, r) => {
        const d = H("tooltip");
        return (
          u(),
          c(
            "div",
            {
              class: b([
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
                  ? (u(),
                    c(
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
                  : (u(), c("img", Rt)),
                i("div", Lt, [
                  i("h3", Tt, g(s.toast.title), 1),
                  i("div", Mt, [
                    i("div", Vt, [
                      R((u(), c("h4", null, [$(g(s.toast.output), 1)])), [
                        [
                          d,
                          {
                            content: s.toast.output,
                            triggers: ["hover", "click"],
                          },
                        ],
                      ]),
                      s.toast.title === "Result"
                        ? R((u(), c("h4", Bt, [$(g(s.toast.notation), 1)])), [
                            [
                              d,
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
  Ft = C(Et, [["__scopeId", "data-v-66edea84"]]),
  G = (t) => (A("data-v-dc9c9a74"), (t = t()), w(), t),
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
  Yt = G(() => i("h4", { class: "padding-left" }, " DANO ", -1)),
  Xt = "#5cb85c",
  Zt = "#d9534f",
  te = "#fff",
  ee = D({
    __name: "CampaignLogToastAttack",
    props: { toast: {}, isPrivate: { type: Boolean } },
    setup(t) {
      M((s) => ({ d87dfc00: a.value, "4568b0d4": o.value, b8c30c52: n.value }));
      const e = t,
        n = y(() =>
          e.toast.critical === 1 ? Xt : e.toast.critical === -1 ? Zt : te
        ),
        o = y(() =>
          e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
        ),
        a = y(() => {
          var s;
          return (s = e.toast.skinDice) != null && s.background
            ? e.toast.skinDice.background
            : "#181818";
        });
      return (s, r) => {
        const d = H("tooltip");
        return (
          u(),
          c(
            "div",
            {
              class: b([
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
                  ? (u(),
                    c(
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
                  : (u(), c("img", Ht)),
                i("div", Wt, [
                  i("h3", zt, g(s.toast.title), 1),
                  i("div", jt, [
                    i("div", Gt, [
                      R((u(), c("h3", null, [$(g(s.toast.totalAttack), 1)])), [
                        [
                          d,
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
                      R((u(), c("h3", null, [$(g(s.toast.totalDamage), 1)])), [
                        [
                          d,
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
  ne = C(ee, [["__scopeId", "data-v-dc9c9a74"]]),
  J = (t) => (A("data-v-57a0af1e"), (t = t()), w(), t),
  se = { class: "campaign-log-content" },
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
      M((p) => ({ "92aebcd8": s.value, "6f18b21f": r.value }));
      const { height: e } = vt(),
        n = t,
        o = V(null),
        a = (p) => {
          const l = new Date(p),
            m = l.getDate(),
            f = m < 10 ? `0${m}` : m.toString(),
            v = l.getMonth() + 1,
            _ = v < 10 ? `0${v}` : v.toString(),
            L = l.getFullYear().toString().substring(2, 4),
            S = l.getHours(),
            Q = S < 10 ? `0${S}` : S.toString(),
            k = l.getMinutes(),
            I = k < 10 ? `0${k}` : k.toString();
          return `${f}/${_}/${L} ${Q}:${I}`;
        },
        s = y(() => (n.masterScreen ? "52rem" : "55rem")),
        r = y(() => (n.vtt ? "57vh" : `${e.value - 190}px`));
      (it(() => {
        var p;
        (p = o.value) == null || p.scrollIntoView();
      }),
        at(
          () => n.campaignLog.campaignLogMessages,
          () => {
            var p;
            (p = o.value) == null || p.scrollIntoView({ behavior: "smooth" });
          }
        ));
      const d = y(() => {
        const p = [];
        for (const l of n.campaignLog.campaignLogMessages)
          n.isDm ? p.push(l) : l.isPrivate || p.push(l);
        return p;
      });
      return (p, l) => (
        u(),
        c(
          "div",
          {
            class: b([
              p.masterScreen
                ? "campaign-log-container-master-screen"
                : "campaign-log-container-sheet",
            ]),
          },
          [
            i("div", se, [
              i("div", oe, [
                ie,
                p.masterScreen
                  ? h("", !0)
                  : (u(),
                    c(
                      "button",
                      {
                        key: 0,
                        onClick:
                          l[0] ||
                          (l[0] = (m) => p.$emit("handleCloseCampaignLog")),
                      },
                      le
                    )),
                p.masterScreen && p.isDm
                  ? (u(),
                    c(
                      "button",
                      {
                        key: 1,
                        onClick:
                          l[1] ||
                          (l[1] = (m) => p.$emit("handleCleanCampaignLog")),
                      },
                      de
                    ))
                  : h("", !0),
              ]),
              i("div", ue, [
                (u(!0),
                c(
                  F,
                  null,
                  j(
                    d.value,
                    (m, f) => (
                      u(),
                      c("div", { key: f, class: "log-messages" }, [
                        i("div", ce, g(m.sender), 1),
                        m.contentType === "roll"
                          ? (u(),
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
                          ? (u(),
                            K(
                              ne,
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
                        i("div", me, g(a(m.timestamp)), 1),
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
  qs = C(pe, [["__scopeId", "data-v-57a0af1e"]]),
  B = (t) => (A("data-v-05b4e714"), (t = t()), w(), t),
  fe = { key: 1 },
  ge = B(() => i("div", { class: "info-bar-fill" }, null, -1)),
  be = { key: 0, class: "buttons-container" },
  ve = ["disabled"],
  ke = B(() =>
    i("img", { class: "invert-icon", src: rt, alt: "diminuir" }, null, -1)
  ),
  $e = [ke],
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
      M((l) => ({ "166941fd": r.value, 17804060: s.value }));
      const n = t,
        o = e,
        a = {
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
        s = y(() => {
          const l = Math.floor((n.currentValue / n.maxValue) * 100);
          return l > 100 ? "100%" : l < 0 ? "0%" : `${l}%`;
        }),
        r = y(() => {
          const l = Math.floor((n.currentValue / n.maxValue) * 100);
          if (n.type === "pv") {
            if (l <= 50) return a[n.type].halfColor;
          } else if (l < 50) return a[n.type].halfColor;
          return a[n.type].color;
        }),
        d = (l, m) => {
          o("handleChangeCharNumber", l, m);
        },
        p = (l, m) => {
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
          u(),
          c(
            "div",
            {
              class: b([
                "info-bar-container",
                {
                  "master-info-bar-container": l.masterScreen || l.combatSheet,
                },
              ]),
            },
            [
              l.combatSheet
                ? h("", !0)
                : (u(),
                  c(
                    "div",
                    {
                      key: 0,
                      class: b([
                        "info-bar-label",
                        { "master-info-bar-label": l.masterScreen },
                      ]),
                    },
                    g(a[l.type].labelBarMode),
                    3
                  )),
              l.markMode
                ? (u(),
                  c("div", Me, [
                    i(
                      "div",
                      {
                        class: b([
                          "info-bar",
                          { "master-info-bar": l.masterScreen },
                        ]),
                      },
                      [
                        Ve,
                        i(
                          "div",
                          {
                            class: b([
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
                                class: b([
                                  "marks-container",
                                  { "master-marks-container": l.masterScreen },
                                ]),
                              },
                              [
                                (u(!0),
                                c(
                                  F,
                                  null,
                                  j(
                                    l.marks,
                                    (f, v) => (
                                      u(),
                                      c(
                                        "div",
                                        { key: v, class: "mark-container" },
                                        [
                                          i(
                                            "button",
                                            {
                                              class: b([
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
                                                  v
                                                ),
                                            },
                                            [
                                              i(
                                                "div",
                                                {
                                                  class: b([
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
                                                      class: b({
                                                        "mark-button-fill": f,
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
                              : (u(),
                                c("div", Ne, [
                                  i(
                                    "button",
                                    {
                                      class: "heal-button button-naked",
                                      onClick:
                                        m[6] ||
                                        (m[6] = () =>
                                          l.$emit("handleMarkHeal", l.type)),
                                    },
                                    " CURAR "
                                  ),
                                ])),
                            i("div", Oe, [
                              i(
                                "input",
                                {
                                  type: "number",
                                  class: b([
                                    "info-bar-input-mark left-input",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.currentValue,
                                  onBlur:
                                    m[7] ||
                                    (m[7] = (f) =>
                                      d(f, a[l.type].currentValue)),
                                },
                                null,
                                42,
                                xe
                              ),
                              i(
                                "div",
                                {
                                  class: b([
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
                                  class: b([
                                    "info-bar-input-mark",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.maxValue,
                                  onBlur:
                                    m[8] ||
                                    (m[8] = (f) => d(f, a[l.type].maxValue)),
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
                : (u(),
                  c("div", fe, [
                    i(
                      "div",
                      {
                        class: b([
                          "info-bar",
                          { "master-info-bar": l.masterScreen },
                        ]),
                      },
                      [
                        ge,
                        i(
                          "div",
                          {
                            class: b([
                              "info-bar-components",
                              { "master-info-bar-components": l.masterScreen },
                            ]),
                          },
                          [
                            l.masterScreen
                              ? h("", !0)
                              : (u(),
                                c("div", be, [
                                  i(
                                    "button",
                                    {
                                      class: "info-bar-button button-naked",
                                      disabled: l.disabledSheet,
                                      onClick:
                                        m[0] ||
                                        (m[0] = (f) =>
                                          p(
                                            l.currentValue - 5,
                                            a[l.type].currentValue
                                          )),
                                    },
                                    $e,
                                    8,
                                    ve
                                  ),
                                  i(
                                    "button",
                                    {
                                      class: "info-bar-button button-naked",
                                      disabled: l.disabledSheet,
                                      onClick:
                                        m[1] ||
                                        (m[1] = (f) =>
                                          p(
                                            l.currentValue - 1,
                                            a[l.type].currentValue
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
                                  class: b([
                                    "info-bar-input left-input",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.currentValue,
                                  onBlur:
                                    m[2] ||
                                    (m[2] = (f) =>
                                      d(f, a[l.type].currentValue)),
                                },
                                null,
                                42,
                                Ie
                              ),
                              i(
                                "div",
                                {
                                  class: b([
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
                                  class: b([
                                    "info-bar-input",
                                    { "master-info-bar-input": l.masterScreen },
                                  ]),
                                  disabled: l.disabledSheet,
                                  value: l.maxValue,
                                  onBlur:
                                    m[3] ||
                                    (m[3] = (f) => d(f, a[l.type].maxValue)),
                                },
                                null,
                                42,
                                De
                              ),
                            ]),
                            l.masterScreen
                              ? h("", !0)
                              : (u(),
                                c("div", Ce, [
                                  i(
                                    "button",
                                    {
                                      class: "info-bar-button button-naked",
                                      disabled: l.disabledSheet,
                                      onClick:
                                        m[4] ||
                                        (m[4] = (f) =>
                                          p(
                                            l.currentValue + 1,
                                            a[l.type].currentValue
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
                                        (m[5] = (f) =>
                                          p(
                                            l.currentValue + 5,
                                            a[l.type].currentValue
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
  Hs = C(Fe, [["__scopeId", "data-v-05b4e714"]]),
  Ws = {
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
  zs = {
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
  nt = {
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
    const a = { 1: 9, 2: 99, 3: 999, 4: 9999 },
      s = { 1: -9, 2: -99, 3: -999, 4: -9999 };
    return (
      isNaN(t) && (t = 0),
      t > a[e] && (t = a[e]),
      o ? t < 0 && (t = 0) : t < s[e] && (t = s[e]),
      n ? Math.floor(t) : t
    );
  },
  js = (t, e, n) => {
    (n === "maxPv" ||
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
      parseInt(t.peTurn) < 1 && (t.peTurn = "1"));
  },
  He = (t, e) => {
    let n = t.attributes.pre;
    (n < 0 && (n = 0), e < 0 && (e = 0));
    const o = Math.abs(n - e);
    let a = 1;
    (q.indexOf(t.nex) >= 1 && (a = q.indexOf(t.nex) + 1),
      n > e
        ? ((t.ritualsDc += o),
          (t.maxPe += o * a),
          (t.currentPe += o * a),
          (t.maxPd += o * a),
          (t.currentPd += o * a))
        : ((t.ritualsDc -= o),
          (t.maxPe -= o * a),
          (t.currentPe -= o * a),
          (t.maxPd -= o * a),
          (t.currentPd -= o * a)),
      t.ritualsDc < 0 && (t.ritualsDc = 0),
      t.maxPe < 0 && (t.maxPe = 0));
  },
  We = (t, e) => {
    let n = t.attributes.str;
    if ((n < 0 && (n = 0), e < 0 && (e = 0), n !== e)) {
      if (n === 0) ((t.maxLoad -= (e - 1) * 5), (t.maxLoad -= 3));
      else if (e === 0) {
        if (t.attributes.str < 0) return;
        ((t.maxLoad += (n - 1) * 5), (t.maxLoad += 3));
      } else {
        const o = Math.abs(n - e);
        n > e ? (t.maxLoad += o * 5) : (t.maxLoad -= o * 5);
      }
      t.maxLoad < 0 && (t.maxLoad = 0);
    }
  },
  ze = (t, e) => {
    let n = t.attributes.con;
    (n < 0 && (n = 0), e < 0 && (e = 0));
    const o = Math.abs(n - e);
    let a = 1;
    (q.indexOf(t.nex) >= 1 && (a = q.indexOf(t.nex) + 1),
      n > e
        ? ((t.maxPv += o * a), (t.currentPv += o * a))
        : ((t.maxPv -= o * a), (t.currentPv -= o * a)),
      t.maxPv < 1 && (t.maxPv = 1));
  },
  Gs = (t, e, n) => {
    const o = { ...t.attributes };
    ((t.attributes[n] = P(e, 2, !0, !1)),
      n === "str" && We(t, o.str),
      n === "con" && ze(t, o.con),
      n === "pre" && He(t, o.pre));
  },
  Js = (t, e) => {
    (isNaN(e) && (e = 0),
      e > 666 && (e = 666),
      e < 0 && (e = 0),
      e === 0 ? (t.movement = 0) : (t.movement = Math.floor(e) * 1.5));
  },
  Qs = (t) => t.split("=")[0].split(":")[1],
  Ks = (t) => t.split("=")[0].split(":")[0],
  Ys = (t, e) => {
    let n;
    const o = t.attributes[e];
    return (
      o > 0 ? (n = `${o}d20kh1`) : (n = `${Math.abs(o) + 2}d20kl1`),
      new T(n)
    );
  },
  Xs = (t) => new T(t.trim()),
  je = (t) => {
    const e = `(${t.damage} - ${t.damageType})`,
      n = t.damageAttribute !== "Nenhum" ? ` + ${qe[t.damageAttribute]}` : "",
      o = [];
    if (t.aditionalDamage)
      for (const s of t.aditionalDamage)
        o.push(`(${s.value} - ${s.damageType})`);
    const a = o.join(" + ");
    return e + (a ? ` + ${a}` : "") + n;
  },
  Ge = (t, e, n) =>
    `${t}d20kh1` + (e !== 0 ? `+${e}` : "") + (n !== 0 ? `+${n}` : ""),
  Je = (t, e, n) =>
    `${Math.abs(t) + 2}d20kl1` +
    (e !== 0 ? `+${e}` : "") +
    (n !== 0 ? `+${n}` : ""),
  Zs = (t, e) => {
    const n = t.skills.findIndex((k) => k.name === e.skillUsed),
      o = t.skills[n],
      a = t.attributes[ut[o.attribute]],
      s =
        `${o.name} (${o.attribute})` +
        (e.attackBonus !== 0 ? ` + ${e.attackBonus}` : ""),
      r = je(e),
      d = `${e.criticalRange}/x${e.criticalMult}`;
    let p;
    a > 0
      ? (p = Ge(a, o.bonus, e.attackBonus))
      : (p = Je(a, o.bonus, e.attackBonus));
    const l = new T(p.trim()),
      m = l.total,
      f = l.output
        .substring(l.output.indexOf("[") + 1, l.output.indexOf("]"))
        .split(",");
    let v = 0;
    if (f.length > 1)
      f.map((k) => {
        k.includes("d") ||
          (parseInt(k) >= e.criticalRange && (v = 1),
          parseInt(k) === 1 && (v = -1),
          parseInt(k) === 1 && e.criticalRange === 1 && (v = 1));
      });
    else {
      const k = l.output.substring(
        l.output.indexOf("[") + 1,
        l.output.indexOf("]")
      );
      (parseInt(k) >= e.criticalRange && (v = 1),
        parseInt(k) === 1 && (v = -1));
    }
    const _ = e.damage !== "" ? `${e.damage}` : "0";
    let L = 0,
      S = "";
    if (v === 1)
      for (let k = 0; k < e.criticalMult; k++) {
        const I = new T(_.trim());
        ((L += I.total),
          (S +=
            I.output.substring(
              I.output.indexOf(":") + 1,
              I.output.indexOf("=") - 1
            ) + "+"));
      }
    else {
      const k = new T(_.trim());
      ((L += k.total),
        (S +=
          k.output.substring(
            k.output.indexOf(":") + 1,
            k.output.indexOf("=") - 1
          ) + "+"));
    }
    if (e.aditionalDamage && e.aditionalDamage.length > 0) {
      const k = [];
      for (const bt of e.aditionalDamage) k.push(bt.value);
      const I = new T(k.join("+"));
      ((L += I.total),
        I.output.includes("[")
          ? (S +=
              I.output.substring(
                I.output.indexOf(":") + 1,
                I.output.indexOf("=") - 1
              ) + "+")
          : (S += I.total + "+"));
    }
    return (
      e.damageAttribute !== "Nenhum" &&
        ((L += t.attributes[et[e.damageAttribute]]),
        (S += t.attributes[et[e.damageAttribute]])),
      S.charAt(S.length - 1) === "+" && (S = S.slice(0, -1)),
      {
        attackTotal: m,
        damageTotal: L,
        critical: v,
        attackInfo: s,
        damageInfo: r,
        criticalInfo: d,
        attackRollInfo:
          l.output.substring(l.output.indexOf("["), l.output.indexOf("]") + 1) +
          (e.attackBonus !== 0 ? `+${e.attackBonus}` : ""),
        damageRollInfo: `${S.trim().replace(/\s/g, "")}`,
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
    const n = t.skills.findIndex((a) => a.name === e),
      o = t.skills[n];
    o.bonus = parseInt(o.trainingDegree) + o.otherBonus;
  },
  no = (t, e, n) => {
    const o = t.skills.findIndex((a) => a.name === n);
    t.skills[o].otherBonus = P(e, 2, !0, !1);
  },
  so = (t, e) => {
    const n = t.attacks.findIndex((o) => o.id === e);
    if (t.attacks[n].itemId) {
      const o = t.inventory.findIndex((a) => a.id === t.attacks[n].itemId);
      t.inventory[o].equipped = !1;
    }
    t.attacks.splice(n, 1);
  },
  Qe = (t, e) => {
    if (t.inventory[e].itemType === "weapon") {
      const n = t.inventory[e],
        o = { ...Ue };
      ((o.id = x()),
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
        t.attacks.push(o));
    }
    if (t.inventory[e].itemType === "protection") {
      const n = t.inventory[e];
      ((t.protectionDefense += n.defense),
        t.currentProtection === ""
          ? (t.currentProtection += n.name)
          : (t.currentProtection += ` ${n.name}`));
    }
  },
  ct = (t, e) => {
    if (t.inventory[e].itemType === "weapon") {
      const n = t.inventory[e],
        o = t.attacks.findIndex((a) => a.itemId === n.id);
      t.attacks.splice(o, 1);
    }
    if (t.inventory[e].itemType === "protection") {
      const n = t.inventory[e];
      ((t.protectionDefense -= n.defense),
        (t.currentProtection = t.currentProtection.replace(n.name, "")),
        (t.currentProtection = t.currentProtection.trim()));
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
      const o = U.find((a) => a.id === e.automationId);
      if (!(o != null && o.onAdd)) return;
      o.onAdd(t);
    }
  },
  ro = (t, e) => {
    const n = t.powers.findIndex((a) => a.id === e),
      o = t.powers.find((a) => a.id === e);
    if (
      n !== -1 &&
      (t.powers.splice(n, 1), o != null && o.hasAutomation && o.isAutomationOn)
    ) {
      const a = U.find((s) => s.id === o.automationId);
      if (!(a != null && a.onRemove)) return;
      a.onRemove(t);
    }
  },
  uo = (t, e) => {
    const n = { ...e };
    ((n.id = x()), t.rituals.push(n));
  },
  co = (t, e) => {
    const n = { ...e };
    ((n.id = x()), (n.equipped = !1));
    let o;
    if (
      (isNaN(n.slots) ? (o = 0) : (o = parseFloat(n.slots)),
      n.itemType === "weapon")
    ) {
      const a = n;
      a.ammunition &&
        ((o += parseFloat(a.ammunition.slots)),
        a.ammunition.category !== "-" &&
          a.ammunition.category !== "0" &&
          (t.currentItemsLimit[a.ammunition.category] += 1));
    }
    (n.category !== "-" &&
      n.category !== "0" &&
      (t.currentItemsLimit[n.category] += 1),
      (t.currentLoad += o),
      t.inventory.push(n));
  },
  mo = (t, e) => {
    const n = t.inventory.findIndex((s) => s.id === e),
      o = t.inventory[n];
    let a;
    if ((isNaN(o.slots) ? (a = 0) : (a = o.slots), o.itemType === "weapon")) {
      const s = o;
      s.ammunition &&
        ((a += s.ammunition.slots),
        s.ammunition.category !== "-" &&
          s.ammunition.category !== "0" &&
          ((t.currentItemsLimit[s.ammunition.category] -= 1),
          t.currentItemsLimit[s.ammunition.category] < 0 &&
            (t.currentItemsLimit[s.ammunition.category] = 0)));
    }
    (o.category !== "-" &&
      o.category !== "0" &&
      ((t.currentItemsLimit[o.category] -= 1),
      t.currentItemsLimit[o.category] < 0 &&
        (t.currentItemsLimit[o.category] = 0)),
      (t.currentLoad -= a),
      t.inventory[n].equipped && ct(t, n),
      t.inventory.splice(n, 1));
  },
  po = (t, e) => {
    t.ritualsDc = P(e, 3);
  },
  fo = (t, e) => {
    if (t.nex === e) return;
    const n = Dt.find((f) => f.name === t.statsClass);
    if (!n) return;
    const o = nt[t.nex],
      a = nt[e],
      s = Math.abs(o - a),
      r = (n.levelPv + t.attributes.con) * s,
      d = (n.levelPe + t.attributes.pre) * s,
      p = (n.levelPd + t.attributes.pre) * s,
      l = n.levelSan * s,
      m = Math.abs(parseInt(tt[t.nex]) - parseInt(tt[e]));
    if (o > a) {
      ((t.maxPv += r),
        (t.currentPv += r),
        (t.maxPe += d),
        (t.currentPe += d),
        (t.maxPd += p),
        (t.currentPd += p),
        (t.maxSan += l),
        (t.currentSan += l),
        (t.ritualsDc += s),
        (t.peTurn = (parseInt(t.peTurn) + m).toString()));
      for (const f of t.powers)
        if (f.hasAutomation && f.isAutomationOn) {
          const v = U.find((_) => _.id === f.automationId);
          if (!(v != null && v.onNexUp)) return;
          for (let _ = 0; _ < s; _++) v.onNexUp(t);
        }
    } else {
      ((t.maxPv -= r),
        (t.currentPv -= r),
        (t.maxPe -= d),
        (t.currentPe -= d),
        (t.maxPd -= p),
        (t.currentPd -= p),
        (t.maxSan -= l),
        (t.currentSan -= l),
        (t.ritualsDc -= s),
        (t.peTurn = (parseInt(t.peTurn) - m).toString()));
      for (const f of t.powers)
        if (f.hasAutomation && f.isAutomationOn) {
          const v = U.find((_) => _.id === f.automationId);
          if (!(v != null && v.onNexDown)) return;
          for (let _ = 0; _ < s; _++) v.onNexDown(t);
        }
    }
    (t.currentPv < 0 && (t.currentPv = 0),
      t.currentPe < 0 && (t.currentPe = 0),
      t.currentSan < 0 && (t.currentSan = 0),
      t.maxPv < 1 && (t.maxPv = 1),
      t.maxPe < 1 && (t.maxPe = 1),
      t.maxSan < 1 && (t.maxSan = 1),
      t.ritualsDc < 0 && (t.ritualsDc = 0),
      parseInt(t.peTurn) < 1 && (t.peTurn = "1"));
  },
  go = (t, e) => {
    const n = t.inventory.findIndex((a) => a.id === e.id),
      o = { ...t.inventory[n] };
    if (JSON.stringify(o) !== JSON.stringify(e)) {
      if (((t.inventory[n] = e), o.slots !== e.slots)) {
        if (isNaN(parseInt(e.slots))) t.currentLoad -= o.slots;
        else {
          const a = Math.abs(o.slots - e.slots);
          e.slots > o.slots ? (t.currentLoad += a) : (t.currentLoad -= a);
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
        const a = o,
          s = e;
        if (a.defense !== s.defense) {
          const r = Math.abs(a.defense - s.defense);
          s.defense > a.defense
            ? (t.protectionDefense += r)
            : (t.protectionDefense -= r);
        }
        a.name !== s.name &&
          t.currentProtection.includes(a.name) &&
          (t.currentProtection = t.currentProtection.replace(a.name, s.name));
      }
      if (e.itemType === "weapon" && e.equipped) {
        const a = o,
          s = e,
          r = t.attacks.findIndex((d) => d.itemId === e.id);
        (a.name !== s.name && (t.attacks[r].name = s.name),
          a.damage !== s.damage && (t.attacks[r].damage = s.damage),
          a.criticalRange !== s.criticalRange &&
            (t.attacks[r].criticalRange = s.criticalRange),
          a.criticalMult !== s.criticalMult &&
            (t.attacks[r].criticalMult = s.criticalMult),
          a.damageType !== s.damageType &&
            (t.attacks[r].damageType = s.damageType),
          a.range !== s.range && (t.attacks[r].range = s.range));
      }
    }
  },
  bo = (t, e) => {
    ((t.statsClass = e.name), (t.className = e.name));
    for (const n of e.abilities) ((n.id = x()), t.powers.push(n));
    ((t.maxPv = e.initialPv + t.attributes.con),
      (t.currentPv = t.maxPv),
      (t.maxPe = e.initialPe + t.attributes.pre),
      (t.currentPe = t.maxPe),
      (t.maxPd = e.initialPd + t.attributes.pre),
      (t.currentPd = t.maxPd),
      (t.maxSan = e.initialSan),
      (t.currentSan = t.maxSan),
      (t.proficiencies = e.proficiencies));
  },
  Ke =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M9%2016.2L4.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4L9%2016.2z'/%3e%3c/svg%3e",
  mt = (t) => (A("data-v-555f9c83"), (t = t()), w(), t),
  Ye = { class: "attr-container" },
  Xe = { class: "image-container" },
  Ze = mt(() =>
    i("img", { class: "attr-image", src: dt, alt: "atributos" }, null, -1)
  ),
  tn = ["value"],
  en = ["value"],
  nn = ["value"],
  sn = ["value"],
  on = ["value"],
  an = { class: "change-button-container" },
  ln = mt(() => i("img", { src: Ke, alt: "concluir" }, null, -1)),
  rn = [ln],
  dn = D({
    __name: "AttributesEdit",
    props: { character: {} },
    emits: ["handleChangeAttribute", "handleEdit"],
    setup(t, { emit: e }) {
      const n = e,
        o = kt(),
        a = (s, r) => {
          var d;
          (n("handleChangeAttribute", { e: s, key: r }),
            (d = o == null ? void 0 : o.proxy) == null || d.$forceUpdate());
        };
      return (s, r) => (
        u(),
        c("div", Ye, [
          i("div", Xe, [
            Ze,
            i(
              "input",
              {
                type: "number",
                class: "input str",
                value: s.character.attributes.str,
                onBlur: r[0] || (r[0] = (d) => a(d, "str")),
              },
              null,
              40,
              tn
            ),
            i(
              "input",
              {
                type: "number",
                class: "input dex",
                value: s.character.attributes.dex,
                onBlur: r[1] || (r[1] = (d) => a(d, "dex")),
              },
              null,
              40,
              en
            ),
            i(
              "input",
              {
                type: "number",
                class: "input int",
                value: s.character.attributes.int,
                onBlur: r[2] || (r[2] = (d) => a(d, "int")),
              },
              null,
              40,
              nn
            ),
            i(
              "input",
              {
                type: "number",
                class: "input con",
                value: s.character.attributes.con,
                onBlur: r[3] || (r[3] = (d) => a(d, "con")),
              },
              null,
              40,
              sn
            ),
            i(
              "input",
              {
                type: "number",
                class: "input pre",
                value: s.character.attributes.pre,
                onBlur: r[4] || (r[4] = (d) => a(d, "pre")),
              },
              null,
              40,
              on
            ),
          ]),
          i("div", an, [
            i(
              "button",
              {
                class: "change-button",
                onClick: r[5] || (r[5] = (d) => s.$emit("handleEdit")),
              },
              rn
            ),
          ]),
        ])
      );
    },
  }),
  un = C(dn, [["__scopeId", "data-v-555f9c83"]]),
  pt = (t) => (A("data-v-807e2a9b"), (t = t()), w(), t),
  cn = { class: "attr-container" },
  mn = { class: "image-container" },
  pn = pt(() =>
    i("img", { class: "attr-image", src: dt, alt: "atributos" }, null, -1)
  ),
  fn = { key: 0, class: "change-button-container" },
  gn = pt(() => i("img", { src: _t, alt: "editar" }, null, -1)),
  bn = [gn],
  vn = D({
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
        a = (s) => {
          n.disabledSheet || o("handleRollAttribute", s);
        };
      return (s, r) => (
        u(),
        c("div", cn, [
          i("div", mn, [
            pn,
            i(
              "button",
              {
                class: b(["attr str", { disabled: s.disabledSheet }]),
                onClick: r[0] || (r[0] = (d) => a("str")),
              },
              g(s.character.attributes.str),
              3
            ),
            i(
              "button",
              {
                class: b(["attr dex", { disabled: s.disabledSheet }]),
                onClick: r[1] || (r[1] = (d) => a("dex")),
              },
              g(s.character.attributes.dex),
              3
            ),
            i(
              "button",
              {
                class: b(["attr int", { disabled: s.disabledSheet }]),
                onClick: r[2] || (r[2] = (d) => a("int")),
              },
              g(s.character.attributes.int),
              3
            ),
            i(
              "button",
              {
                class: b(["attr con", { disabled: s.disabledSheet }]),
                onClick: r[3] || (r[3] = (d) => a("con")),
              },
              g(s.character.attributes.con),
              3
            ),
            i(
              "button",
              {
                class: b(["attr pre", { disabled: s.disabledSheet }]),
                onClick: r[4] || (r[4] = (d) => a("pre")),
              },
              g(s.character.attributes.pre),
              3
            ),
          ]),
          !s.disabledSheet && !s.combatSheet
            ? (u(),
              c("div", fn, [
                i(
                  "button",
                  {
                    class: "change-button",
                    onClick: r[5] || (r[5] = (d) => s.$emit("handleEdit")),
                  },
                  bn
                ),
              ]))
            : h("", !0),
        ])
      );
    },
  }),
  kn = C(vn, [["__scopeId", "data-v-807e2a9b"]]),
  $n = { key: 0, class: "att-container" },
  hn = { key: 1, class: "att-container" },
  yn = D({
    __name: "AttributesView",
    props: {
      character: {},
      disabledSheet: { type: Boolean },
      combatSheet: { type: Boolean },
    },
    emits: ["handleChangeAttribute", "handleRollAttribute"],
    setup(t, { emit: e }) {
      const n = e,
        o = (s) => {
          n("handleRollAttribute", s);
        },
        a = V(!1);
      return (s, r) =>
        a.value
          ? (u(),
            c("div", $n, [
              N(
                un,
                {
                  character: s.character,
                  onHandleEdit: r[0] || (r[0] = (d) => (a.value = !1)),
                  onHandleChangeAttribute:
                    r[1] || (r[1] = (d) => s.$emit("handleChangeAttribute", d)),
                },
                null,
                8,
                ["character"]
              ),
            ]))
          : (u(),
            c("div", hn, [
              N(
                kn,
                {
                  character: s.character,
                  "disabled-sheet": s.disabledSheet,
                  "combat-sheet": s.combatSheet,
                  onHandleEdit: r[2] || (r[2] = (d) => (a.value = !0)),
                  onHandleRollAttribute: o,
                },
                null,
                8,
                ["character", "disabled-sheet", "combat-sheet"]
              ),
            ]));
    },
  }),
  vo = C(yn, [["__scopeId", "data-v-e6595177"]]),
  _n = ["placeholder", "value"],
  Sn = D({
    __name: "FilterInput",
    props: {
      value: { type: String, required: !0 },
      placeholder: { type: String, default: "" },
      width: { type: String, default: "23.5rem" },
    },
    emits: ["update"],
    setup(t, { emit: e }) {
      M((r) => ({ "3e2347da": a.value }));
      const n = t,
        o = e,
        a = V(n.width),
        s = (r) => {
          o("update", r.target.value);
        };
      return (r, d) => (
        u(),
        c(
          "input",
          {
            class: "sheet-input filter-input",
            type: "text",
            placeholder: t.placeholder,
            value: t.value,
            onInput: s,
          },
          null,
          40,
          _n
        )
      );
    },
  }),
  ko = C(Sn, [["__scopeId", "data-v-a24ea236"]]),
  ft = (t) => (A("data-v-0f772e72"), (t = t()), w(), t),
  In = { class: "card" },
  Dn = ft(() => i("img", { src: Ct, alt: "ver mais" }, null, -1)),
  Cn = [Dn],
  Pn = { class: "first-row" },
  An = { class: "title" },
  wn = { class: "item-info-container" },
  Rn = { class: "item-info" },
  Ln = { class: "item-info" },
  Tn = { key: 0 },
  Mn = { key: 1 },
  Vn = { key: 2 },
  Bn = { class: "button-container" },
  Nn = ["disabled", "onClick"],
  On = ft(() => i("img", { src: O, alt: "rolar" }, null, -1)),
  xn = [On],
  En = { key: 0 },
  Fn = { class: "content" },
  Un = { class: "only-sheet-content-container" },
  qn = { class: "card-info-image-container" },
  Hn = { class: "item-info" },
  Wn = { class: "item-info" },
  zn = { key: 0, class: "item-info" },
  jn = { key: 0 },
  Gn = { class: "item-info" },
  Jn = { class: "item-info" },
  Qn = { class: "item-info" },
  Kn = ["src"],
  Yn = ["innerHTML"],
  Xn = { key: 0, class: "card-footer" },
  Zn = ["onClick"],
  ts = { key: 0 },
  es = ["src"],
  ns = D({
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
        a = V(!1),
        s = V(!1),
        r = () => {
          n.disabled || o("handleRollAttack", n.attack);
        },
        d = () => {
          n.disabled || o("handleEdit", n.attack);
        };
      return (p, l) => {
        const m = $t("vue-final-modal");
        return (
          u(),
          c(
            F,
            null,
            [
              i("div", In, [
                i(
                  "div",
                  {
                    class: "header",
                    onClick: l[1] || (l[1] = (f) => (a.value = !a.value)),
                  },
                  [
                    i(
                      "button",
                      {
                        class: b(["show-more", { rotate: a.value }]),
                        onClick:
                          l[0] ||
                          (l[0] = E((f) => (a.value = !a.value), ["stop"])),
                      },
                      Cn,
                      2
                    ),
                    i("div", null, [
                      i("div", Pn, [i("h3", An, g(t.attack.name), 1)]),
                      i("div", wn, [
                        i("div", Rn, [
                          i("h3", null, [
                            $(" Damage: "),
                            i("span", null, g(t.attack.damage), 1),
                          ]),
                        ]),
                        i("div", Ln, [
                          i("h3", null, [
                            $(" Critical: "),
                            t.attack.criticalRange < 20 &&
                            t.attack.criticalMult > 2
                              ? (u(),
                                c(
                                  "span",
                                  Tn,
                                  g(t.attack.criticalRange) +
                                    "/x" +
                                    g(t.attack.criticalMult),
                                  1
                                ))
                              : t.attack.criticalRange < 20
                                ? (u(),
                                  c("span", Mn, g(t.attack.criticalRange), 1))
                                : (u(),
                                  c(
                                    "span",
                                    Vn,
                                    "x" + g(t.attack.criticalMult),
                                    1
                                  )),
                          ]),
                        ]),
                      ]),
                    ]),
                    i("div", Bn, [
                      i(
                        "button",
                        {
                          class: b(["roll-button", { disabled: t.disabled }]),
                          disabled: t.disabled,
                          onClick: E(r, ["stop"]),
                        },
                        xn,
                        10,
                        Nn
                      ),
                    ]),
                  ]
                ),
                N(
                  ht,
                  { name: "card", mode: "out-in" },
                  {
                    default: Y(() => [
                      a.value
                        ? (u(),
                          c("div", En, [
                            N(yt),
                            i("div", Fn, [
                              i("div", Un, [
                                i("div", qn, [
                                  i("div", null, [
                                    i("div", Hn, [
                                      i("h3", null, [
                                        $("Attack Bonus: "),
                                        i(
                                          "span",
                                          null,
                                          g(t.attack.attackBonus),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    i("div", Wn, [
                                      i("h3", null, [
                                        $("Damage Type: "),
                                        i(
                                          "span",
                                          null,
                                          g(t.attack.damageType),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    t.attack.aditionalDamage
                                      ? (u(),
                                        c("div", zn, [
                                          i("h3", null, [
                                            $(" Extra Damage: "),
                                            (u(!0),
                                            c(
                                              F,
                                              null,
                                              j(
                                                t.attack.aditionalDamage,
                                                (f, v) => (
                                                  u(),
                                                  c("span", { key: f.id }, [
                                                    $(
                                                      g(f.value) +
                                                        " " +
                                                        g(f.damageType),
                                                      1
                                                    ),
                                                    v !==
                                                    t.attack.aditionalDamage
                                                      .length -
                                                      1
                                                      ? (u(),
                                                        c("span", jn, ", "))
                                                      : h("", !0),
                                                  ])
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                        ]))
                                      : h("", !0),
                                    i("div", Gn, [
                                      i("h3", null, [
                                        $("Range: "),
                                        i("span", null, g(t.attack.range), 1),
                                      ]),
                                    ]),
                                    i("div", Jn, [
                                      i("h3", null, [
                                        $("Skill: "),
                                        i(
                                          "span",
                                          null,
                                          g(t.attack.skillUsed),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    i("div", Qn, [
                                      i("h3", null, [
                                        $("Damage Attribute: "),
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
                                    ? (u(),
                                      c(
                                        "div",
                                        {
                                          key: 0,
                                          onClick:
                                            l[2] ||
                                            (l[2] = (f) => (s.value = !0)),
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
                                            Kn
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
                                Yn
                              ),
                              !t.disabled && !t.disabledEdit
                                ? (u(),
                                  c("div", Xn, [
                                    i(
                                      "button",
                                      {
                                        class: "button-remove",
                                        onClick:
                                          l[3] ||
                                          (l[3] = E(
                                            (f) =>
                                              p.$emit(
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
                                        onClick: E(d, ["stop"]),
                                      },
                                      " Edit ",
                                      8,
                                      Zn
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
              s.value
                ? (u(),
                  c("div", ts, [
                    N(
                      m,
                      {
                        modelValue: s.value,
                        "onUpdate:modelValue":
                          l[4] || (l[4] = (f) => (s.value = f)),
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
                            es
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
  $o = C(ns, [["__scopeId", "data-v-0f772e72"]]),
  gt = (t) => (A("data-v-b3488572"), (t = t()), w(), t),
  ss = { class: "toast-content" },
  os = ["src"],
  is = { key: 1, class: "toast-icon", src: O, alt: "d20" },
  as = { class: "text" },
  ls = { class: "title" },
  rs = { class: "result" },
  ds = { class: "result-container" },
  us = { key: 0 },
  cs = gt(() => i("span", null, "=", -1)),
  ms = { class: "total-container" },
  ps = gt(() => i("img", { src: W, alt: "fechar" }, null, -1)),
  fs = [ps],
  st = "#5cb85c",
  ot = "#d9534f",
  gs = "#fff",
  bs = D({
    __name: "ToastDice",
    props: { toast: {} },
    emits: ["dismiss"],
    setup(t) {
      M((s) => ({
        "29ea6da1": a.value,
        "5282cd13": o.value,
        afb4f1bc: n.value,
      }));
      const e = t,
        n = y(() => {
          let s = gs;
          if (e.toast.defaultColor || e.toast.title === "Resultado") return s;
          const r = e.toast.output
            .substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            )
            .split(",");
          if (r.length > 1)
            r.map((d) => {
              d.includes("d") ||
                (parseInt(d) === 20 && (s = st), parseInt(d) === 1 && (s = ot));
            });
          else {
            const d = e.toast.output.substring(
              e.toast.output.indexOf("[") + 1,
              e.toast.output.indexOf("]")
            );
            (parseInt(d) === 20 && (s = st), parseInt(d) === 1 && (s = ot));
          }
          return s;
        }),
        o = y(() =>
          e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
        ),
        a = y(() => {
          var s;
          return (s = e.toast.skinDice) != null && s.background
            ? e.toast.skinDice.background
            : "var(--color-light-black)";
        });
      return (s, r) => {
        const d = H("tooltip");
        return (
          u(),
          c(
            "div",
            {
              class: "toast-wrapper",
              onClick: r[1] || (r[1] = (p) => s.$emit("dismiss")),
            },
            [
              i(
                "div",
                {
                  class: b([
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
                  i("div", ss, [
                    s.toast.skinDice
                      ? (u(),
                        c(
                          "img",
                          {
                            key: 0,
                            class: "toast-icon",
                            src: s.toast.skinDice.img,
                            alt: "d20",
                          },
                          null,
                          8,
                          os
                        ))
                      : (u(), c("img", is)),
                    i("div", as, [
                      i("h3", ls, g(s.toast.title), 1),
                      i("div", rs, [
                        i("div", ds, [
                          R((u(), c("h4", null, [$(g(s.toast.output), 1)])), [
                            [
                              d,
                              {
                                content: s.toast.output,
                                triggers: ["hover", "click"],
                              },
                            ],
                          ]),
                          s.toast.title === "Result"
                            ? R(
                                (u(), c("h4", us, [$(g(s.toast.notation), 1)])),
                                [
                                  [
                                    d,
                                    {
                                      content: s.toast.notation,
                                      triggers: ["hover", "click"],
                                    },
                                  ],
                                ]
                              )
                            : h("", !0),
                        ]),
                        cs,
                        i("div", ms, [i("h3", null, g(s.toast.total), 1)]),
                      ]),
                    ]),
                    i(
                      "button",
                      {
                        class: "close-icon",
                        onClick: r[0] || (r[0] = (p) => s.$emit("dismiss")),
                      },
                      fs
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
  ho = C(bs, [["__scopeId", "data-v-b3488572"]]),
  z = (t) => (A("data-v-0c3a46bb"), (t = t()), w(), t),
  vs = { class: "toast-content" },
  ks = ["src"],
  $s = { key: 1, class: "toast-icon", src: O, alt: "d20" },
  hs = { class: "text" },
  ys = { class: "title" },
  _s = { class: "result" },
  Ss = { class: "attack-container" },
  Is = z(() => i("h4", null, "TO HIT", -1)),
  Ds = z(() => i("div", { class: "divider" }, null, -1)),
  Cs = { class: "damage-container" },
  Ps = z(() => i("h4", { class: "padding-left" }, " DAMAGE ", -1)),
  As = z(() => i("img", { src: W, alt: "fechar" }, null, -1)),
  ws = [As],
  Rs = "#5cb85c",
  Ls = "#d9534f",
  Ts = "#fff",
  Ms = D({
    __name: "ToastAttack",
    props: { toast: {} },
    emits: ["dismiss"],
    setup(t) {
      M((r) => ({
        "3f1ee3ea": s.value,
        "47e1f769": a.value,
        "1370e6bc": o.value,
      }));
      const e = t,
        n = V(window.innerWidth),
        o = y(() =>
          e.toast.critical === 1 ? Rs : e.toast.critical === -1 ? Ls : Ts
        );
      it(() => {
        window.addEventListener("resize", () => {
          n.value = window.innerWidth;
        });
      });
      const a = y(() =>
          e.toast.skinDice ? e.toast.skinDice.color : "var(--color-primary)"
        ),
        s = y(() => {
          var r;
          return (r = e.toast.skinDice) != null && r.background
            ? e.toast.skinDice.background
            : "var(--color-light-black)";
        });
      return (r, d) => {
        const p = H("tooltip");
        return (
          u(),
          c(
            "div",
            {
              class: "toast-wrapper",
              onClick:
                d[1] ||
                (d[1] = (l) => (n.value >= 1023 ? r.$emit("dismiss") : void 0)),
            },
            [
              i(
                "div",
                {
                  class: b([
                    "toast",
                    {
                      "toast-border":
                        r.toast.skinDice && r.toast.skinDice.isSolid,
                      "toast-img-border":
                        r.toast.skinDice && !r.toast.skinDice.isSolid,
                    },
                  ]),
                },
                [
                  i("div", vs, [
                    r.toast.skinDice
                      ? (u(),
                        c(
                          "img",
                          {
                            key: 0,
                            class: "toast-icon",
                            src: r.toast.skinDice.img,
                            alt: "d20",
                          },
                          null,
                          8,
                          ks
                        ))
                      : (u(), c("img", $s)),
                    i("div", hs, [
                      i("h3", ys, g(r.toast.title), 1),
                      i("div", _s, [
                        i("div", Ss, [
                          R(
                            (u(),
                            c("h3", null, [$(g(r.toast.totalAttack), 1)])),
                            [
                              [
                                p,
                                {
                                  content: `${r.toast.attackTooltip} = ${r.toast.attackRollTooltip}`,
                                  triggers: ["hover", "click"],
                                },
                              ],
                            ]
                          ),
                          Is,
                        ]),
                        Ds,
                        i("div", Cs, [
                          R(
                            (u(),
                            c("h3", null, [$(g(r.toast.totalDamage), 1)])),
                            [
                              [
                                p,
                                {
                                  content: `${r.toast.damageTooltip} | ${r.toast.criticalTooltip} = ${r.toast.damageRollTooltip}`,
                                  triggers: ["hover", "click"],
                                },
                              ],
                            ]
                          ),
                          Ps,
                        ]),
                      ]),
                    ]),
                    i(
                      "button",
                      {
                        class: "close-icon",
                        onClick: d[0] || (d[0] = (l) => r.$emit("dismiss")),
                      },
                      ws
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
  yo = C(Ms, [["__scopeId", "data-v-0c3a46bb"]]);
export {
  vo as A,
  lo as B,
  qs as C,
  uo as D,
  co as E,
  ko as F,
  go as G,
  bo as H,
  Hs as I,
  Ft as J,
  ne as K,
  ho as T,
  $o as a,
  yo as b,
  js as c,
  Xs as d,
  Ks as e,
  Qs as f,
  q as g,
  Ws as h,
  Gs as i,
  Js as j,
  zs as k,
  Ys as l,
  eo as m,
  nt as n,
  no as o,
  tt as p,
  to as q,
  Zs as r,
  so as s,
  ro as t,
  fo as u,
  mo as v,
  oo as w,
  io as x,
  ao as y,
  po as z,
};

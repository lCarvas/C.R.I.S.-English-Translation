import {
  d as V,
  r as p,
  a0 as $,
  f as M,
  o as n,
  c as s,
  a as e,
  m as r,
  t as h,
  j as v,
  k as R,
  x as B,
  T as D,
  p as F,
  b as H,
  _ as P,
} from "./index-y5xotY6D.js";
import { _ as x, a as O } from "./share-icon-J6b_MEIl.js";
import { _ as j } from "./trash-icon-Dl18GMfa.js";
import { _ as q } from "./exit-icon-7lL51GVi.js";
const L =
    "data:image/svg+xml,%3csvg%20width='11'%20height='12'%20viewBox='0%200%2011%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.10714%200H8.15424C8.46607%200%208.76562%200.119531%208.98661%200.330469L10.6538%201.92188C10.8748%202.13281%2011%202.41875%2011%202.71641V7.875C11%208.49609%2010.4721%209%209.82143%209H5.10714C4.45647%209%203.92857%208.49609%203.92857%207.875V1.125C3.92857%200.503906%204.45647%200%205.10714%200ZM1.17857%203H3.14286V4.5H1.57143V10.5H6.28571V9.75H7.85714V10.875C7.85714%2011.4961%207.32924%2012%206.67857%2012H1.17857C0.527902%2012%200%2011.4961%200%2010.875V4.125C0%203.50391%200.527902%203%201.17857%203Z'%20fill='white'/%3e%3c/svg%3e",
  N =
    "data:image/svg+xml,%3csvg%20width='12'%20height='8'%20viewBox='0%200%2012%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%201.33333C0%200.597917%200.597917%200%201.33333%200H6.66667C7.40208%200%208%200.597917%208%201.33333V6.66667C8%207.40208%207.40208%208%206.66667%208H1.33333C0.597917%208%200%207.40208%200%206.66667V1.33333ZM11.6479%200.745833C11.8646%200.8625%2012%201.0875%2012%201.33333V6.66667C12%206.9125%2011.8646%207.1375%2011.6479%207.25417C11.4312%207.37083%2011.1688%207.35833%2010.9625%207.22083L8.9625%205.8875L8.66667%205.68958V5.33333V2.66667V2.31042L8.9625%202.1125L10.9625%200.779167C11.1667%200.64375%2011.4292%200.629167%2011.6479%200.745833Z'%20fill='white'/%3e%3c/svg%3e",
  d = (t) => (F("data-v-3dff75ea"), (t = t()), H(), t),
  Z = { class: "card" },
  A = { key: 0 },
  T = ["src"],
  E = { class: "card-content" },
  Y = { class: "settings-button-container" },
  z = d(() =>
    e(
      "img",
      {
        id: "img.settings-button",
        src: x,
        alt: "configurações",
        class: "settings-button",
      },
      null,
      -1
    )
  ),
  G = [z],
  J = { class: "name" },
  K = { class: "class" },
  Q = { class: "register-date" },
  U = { key: 0, class: "sheet-button-container" },
  W = { key: 1 },
  X = { key: 0, class: "already-in-campaign" },
  tt = { key: 1, class: "sheet-button-container" },
  et = { class: "settings-buttons-container" },
  at = { key: 0, class: "button-container" },
  nt = d(() =>
    e("img", { class: "icon", src: O, alt: "compartilhar" }, null, -1)
  ),
  st = { key: 1, class: "button-container" },
  ot = d(() => e("img", { class: "icon", src: L, alt: "duplicar" }, null, -1)),
  it = d(() => e("img", { class: "icon", src: N, alt: "portrait" }, null, -1)),
  ct = { key: 2, class: "button-container" },
  rt = d(() => e("img", { class: "icon", src: j, alt: "deletar" }, null, -1)),
  dt = { key: 3, class: "button-container" },
  lt = d(() => e("img", { class: "icon", src: q, alt: "sair" }, null, -1)),
  mt = V({
    __name: "CharacterCard",
    props: {
      charId: { type: String, required: !0 },
      name: { type: String, required: !0 },
      charClass: { type: String, required: !0 },
      timestamp: { type: Number, required: !0 },
      sheetPicture: { type: String || void 0, required: !0 },
      campaignPage: { type: Boolean },
      canRemoveFromCampaign: { type: Boolean },
      joinCampaignMode: { type: Boolean },
      campaignId: { type: String, default: "" },
    },
    emits: [
      "handleRemove",
      "handleOpenSheet",
      "handleDuplicate",
      "handleShareCharacter",
      "handleChooseForCampaign",
      "handleRemoveFromCampaign",
      "handleOpenSheetMidClick",
    ],
    setup(t, { emit: C }) {
      const c = t,
        m = C,
        i = p(!1),
        g = p(null);
      $(g, (o) => {
        (o.target && o.target.id === "img.settings-button") || (i.value = !1);
      });
      const b = M(() => {
          const o = new Date(c.timestamp * 1e3),
            a = o.getDate(),
            l = a < 10 ? `0${a}` : a.toString(),
            u = o.getMonth() + 1,
            w = u < 10 ? `0${u}` : u.toString(),
            I = o.getFullYear().toString().substring(2, 4);
          return `${l}/${w}/${I}`;
        }),
        f = () => {
          window.open(
            "https://crisordemparanormal.com/agente/stream/" + c.charId
          ),
            (i.value = !1);
        },
        k = () => {
          m("handleShareCharacter", c.charId), (i.value = !1);
        },
        _ = () => {
          m("handleDuplicate", c.charId), (i.value = !1);
        },
        y = () => {
          m("handleRemove", c.charId), (i.value = !1);
        },
        S = () => {
          m("handleRemoveFromCampaign", c.charId), (i.value = !1);
        };
      return (o, a) => (
        n(),
        s("div", Z, [
          t.sheetPicture
            ? (n(),
              s("div", A, [
                e(
                  "img",
                  {
                    class: "card-img",
                    src: t.sheetPicture,
                    alt: "foto agente",
                  },
                  null,
                  8,
                  T
                ),
              ]))
            : r("", !0),
          e("div", E, [
            e("div", Y, [
              t.joinCampaignMode
                ? r("", !0)
                : (n(),
                  s(
                    "button",
                    {
                      key: 0,
                      class: "button-naked settings-button",
                      onClick: a[0] || (a[0] = (l) => (i.value = !i.value)),
                    },
                    G
                  )),
            ]),
            e("div", J, h(t.name ? t.name : "[Sem nome]"), 1),
            e("div", K, h(t.charClass), 1),
            e("div", Q, " Created on " + h(b.value), 1),
            t.joinCampaignMode
              ? (n(),
                s("div", W, [
                  t.campaignId !== "" && t.campaignId !== void 0
                    ? (n(), s("div", X, " Agent is already on a campaign! "))
                    : (n(),
                      s("div", tt, [
                        e(
                          "button",
                          {
                            class: "button-primary card-button",
                            onClick:
                              a[4] ||
                              (a[4] = (l) =>
                                o.$emit("handleChooseForCampaign", t.charId)),
                          },
                          " Add "
                        ),
                      ])),
                ]))
              : (n(),
                s("div", U, [
                  e(
                    "button",
                    {
                      class: "button-primary card-button",
                      onClick:
                        a[1] ||
                        (a[1] = (l) => o.$emit("handleOpenSheet", t.charId)),
                      onMouseup:
                        a[2] ||
                        (a[2] = v(
                          (l) => o.$emit("handleOpenSheetMidClick", t.charId),
                          ["middle"]
                        )),
                      onMousedown:
                        a[3] ||
                        (a[3] = v(() => {}, ["middle", "prevent", "stop"])),
                    },
                    " Access Sheet ",
                    32
                  ),
                ])),
          ]),
          R(
            D,
            { name: "settings" },
            {
              default: B(() => [
                i.value
                  ? (n(),
                    s(
                      "div",
                      {
                        key: 0,
                        ref_key: "dropdown",
                        ref: g,
                        class: "settings-container",
                      },
                      [
                        e("div", et, [
                          t.campaignPage
                            ? r("", !0)
                            : (n(),
                              s("div", at, [
                                nt,
                                e(
                                  "button",
                                  {
                                    class:
                                      "button-naked settings-action-button",
                                    onClick: k,
                                  },
                                  " Share "
                                ),
                              ])),
                          t.campaignPage
                            ? r("", !0)
                            : (n(),
                              s("div", st, [
                                ot,
                                e(
                                  "button",
                                  {
                                    class:
                                      "button-naked settings-action-button",
                                    onClick: _,
                                  },
                                  " Duplicate "
                                ),
                              ])),
                          e("div", { class: "button-container" }, [
                            it,
                            e(
                              "button",
                              {
                                class: "button-naked settings-action-button",
                                onClick: f,
                              },
                              " Portrait "
                            ),
                          ]),
                          t.campaignPage
                            ? t.canRemoveFromCampaign
                              ? (n(),
                                s("div", dt, [
                                  lt,
                                  e(
                                    "button",
                                    {
                                      class:
                                        "button-naked settings-action-button delete-button",
                                      onClick: S,
                                    },
                                    " Remove "
                                  ),
                                ]))
                              : r("", !0)
                            : (n(),
                              s("div", ct, [
                                rt,
                                e(
                                  "button",
                                  {
                                    class:
                                      "button-naked settings-action-button delete-button",
                                    onClick: y,
                                  },
                                  " Delete "
                                ),
                              ])),
                        ]),
                      ],
                      512
                    ))
                  : r("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  vt = P(mt, [["__scopeId", "data-v-3dff75ea"]]);
export { vt as C };

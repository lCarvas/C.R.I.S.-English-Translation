import {
  d as $,
  O as I,
  f as m,
  o,
  c as i,
  a,
  m as d,
  t as l,
  J as M,
  C as F,
  j as h,
  p as O,
  b as P,
  _ as R,
} from "./index-iZ-GAfoN.js";
import { _ as j, a as B } from "./open-in-new-icon-p91krxL-.js";
const g = (e) => (O("data-v-cb9cc38a"), (e = e()), P(), e),
  w = { class: "card" },
  q = { class: "header" },
  D = { key: 0, class: "card-img-container" },
  N = ["src"],
  V = { class: "content" },
  A = { key: 0 },
  E = { key: 1 },
  J = { key: 1 },
  z = g(() => a("img", { src: j, alt: "compartilhar" }, null, -1)),
  T = [z],
  Y = { key: 0 },
  G = ["onMouseup"],
  H = g(() => a("img", { src: B }, null, -1)),
  K = { key: 1 },
  L = { key: 0, class: "already-in-campaign-footer" },
  Q = { key: 1, class: "alternative-footer-join-campaign" },
  U = { key: 2, class: "footer" },
  W = $({
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
      "handleShareCharacter",
      "handleChooseForCampaign",
      "handleRemoveFromCampaign",
      "handleOpenSheetMidClick",
    ],
    setup(e, { emit: C }) {
      I((n) => ({ "15b03f24": S.value, b91d8c62: y.value }));
      const r = e,
        v = C,
        p = m(() => {
          const n = new Date(r.timestamp * 1e3),
            t = n.getDate(),
            s = t < 10 ? `0${t}` : t.toString(),
            c = n.getMonth() + 1,
            k = c < 10 ? `0${c}` : c.toString(),
            f = n.getFullYear().toString().substring(2, 4);
          return `${s}/${k}/${f}`;
        }),
        y = m(() => (r.sheetPicture ? "1rem" : "1.5rem")),
        S = m(() =>
          !r.campaignPage && !r.joinCampaignMode
            ? "space-between"
            : "flex-start"
        ),
        u = () => {
          window.open(
            "https://crisordemparanormal.com/agente/stream/" + r.charId
          );
        },
        b = () => {
          v("handleShareCharacter", r.charId);
        };
      return (n, t) => (
        o(),
        i("div", w, [
          a("div", q, [
            e.sheetPicture
              ? (o(),
                i("div", D, [
                  a(
                    "img",
                    {
                      class: "card-img",
                      src: e.sheetPicture,
                      alt: "foto agente",
                    },
                    null,
                    8,
                    N
                  ),
                ]))
              : d("", !0),
            a("div", V, [
              e.name !== ""
                ? (o(), i("h3", A, l(e.name), 1))
                : (o(), i("h3", E, " [Sem nome] ")),
              a("h4", null, l(e.charClass), 1),
              a("h5", null, "Registered on " + l(p.value), 1),
            ]),
            !e.campaignPage && !e.joinCampaignMode
              ? (o(),
                i("div", J, [
                  a(
                    "button",
                    { class: "button-naked share-button", onClick: b },
                    T
                  ),
                ]))
              : d("", !0),
          ]),
          e.campaignPage
            ? (o(),
              i(
                "div",
                {
                  key: 0,
                  class: M([
                    e.canRemoveFromCampaign ? "footer" : "alternative-footer",
                  ]),
                },
                [
                  e.canRemoveFromCampaign
                    ? (o(),
                      i("div", Y, [
                        a(
                          "button",
                          {
                            class: "button-remove",
                            onClick:
                              t[0] ||
                              (t[0] = (s) =>
                                n.$emit("handleRemoveFromCampaign", e.charId)),
                          },
                          " Remove "
                        ),
                      ]))
                    : d("", !0),
                  a(
                    "div",
                    {
                      class: "obs-link",
                      onClick: u,
                      onMouseup: h(u, ["middle"]),
                    },
                    [F(" Acessar portrait do OBS "), H],
                    40,
                    G
                  ),
                  a(
                    "button",
                    {
                      class: "sheet-button button-primary",
                      onClick:
                        t[1] ||
                        (t[1] = (s) => n.$emit("handleOpenSheet", e.charId)),
                      onMouseup:
                        t[2] ||
                        (t[2] = h(
                          (s) => n.$emit("handleOpenSheetMidClick", e.charId),
                          ["middle"]
                        )),
                    },
                    " Sheet ",
                    32
                  ),
                ],
                2
              ))
            : d("", !0),
          e.joinCampaignMode
            ? (o(),
              i("div", K, [
                e.campaignId !== "" && e.campaignId !== void 0
                  ? (o(), i("div", L, " Agent is already on a campaign! "))
                  : (o(),
                    i("div", Q, [
                      a(
                        "button",
                        {
                          class: "sheet-button button-primary",
                          onClick:
                            t[3] ||
                            (t[3] = (s) =>
                              n.$emit("handleChooseForCampaign", e.charId)),
                        },
                        " Choose "
                      ),
                    ])),
              ]))
            : d("", !0),
          !e.campaignPage && !e.joinCampaignMode
            ? (o(),
              i("div", U, [
                a(
                  "button",
                  {
                    class: "button-remove",
                    onClick:
                      t[4] || (t[4] = (s) => n.$emit("handleRemove", e.charId)),
                  },
                  " Remove "
                ),
                a(
                  "button",
                  {
                    class: "sheet-button button-primary",
                    onClick:
                      t[5] ||
                      (t[5] = (s) => n.$emit("handleOpenSheet", e.charId)),
                    onMouseup:
                      t[6] ||
                      (t[6] = h(
                        (s) => n.$emit("handleOpenSheetMidClick", e.charId),
                        ["middle"]
                      )),
                  },
                  " Sheet ",
                  32
                ),
              ]))
            : d("", !0),
        ])
      );
    },
  }),
  x = R(W, [["__scopeId", "data-v-cb9cc38a"]]);
export { x as C };

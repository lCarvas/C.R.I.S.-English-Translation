import {
  d as C,
  O as k,
  f as n,
  o,
  c as u,
  a as s,
  m,
  t as d,
  K as f,
  V as L,
  W as U,
  _ as B,
} from "./index-R0omtfCh.js";
import { t as c } from "./colors-NalZ6sWE.js";
const b = { class: "card" },
  P = { class: "content" },
  T = { key: 0, class: "card-img-container" },
  V = ["src"],
  D = { class: "player-info" },
  E = { key: 0, class: "player-patent" },
  W = { key: 0, class: "footer" },
  $ = { key: 1, class: "user-profile-tier-container" },
  F = ["src"],
  M = C({
    __name: "PlayerCard",
    props: { user: {}, canRemoveFromCampaign: { type: Boolean } },
    emits: ["handleRemove"],
    setup(v) {
      k((e) => ({
        "0834cefc": R.value,
        "183d9ce8": _.value,
        "27821a22": h.value,
        "4dff8aa8": g.value,
        "0f52d0c4": y.value,
      }));
      const r = v,
        _ = n(() => (r.user.pictureURL ? "1rem" : "1.5rem")),
        g = n(() => (r.user.pictureURL ? "1rem" : "3.5rem")),
        h = n(() => {
          var e, t;
          return r.user.pictureURL &&
            ((e = r.user) == null ? void 0 : e.tier) < -1
            ? "160px"
            : ((t = r.user) == null ? void 0 : t.tier) > -1
            ? "136px"
            : "300px";
        }),
        y = n(() => {
          var e, t;
          return r.user.pictureURL &&
            ((e = r.user) == null ? void 0 : e.tier) < -1
            ? "130px"
            : ((t = r.user) == null ? void 0 : t.tier) > -1
            ? "110px"
            : "208px";
        }),
        R = n(() => {
          var e, t, i, a, l, p;
          return ((e = r.user) == null ? void 0 : e.tier) === 0
            ? "var(--color-primary)"
            : ((t = r.user) == null ? void 0 : t.tier) === 1
            ? c.mundano
            : ((i = r.user) == null ? void 0 : i.tier) === 2
            ? c.recruta
            : ((a = r.user) == null ? void 0 : a.tier) === 3
            ? c.operador
            : ((l = r.user) == null ? void 0 : l.tier) === 4
            ? c.agenteEspecial
            : ((p = r.user) == null ? void 0 : p.tier) === 5
            ? c.agenteElite
            : "var(--color-primary)";
        });
      return (e, t) => {
        var i, a;
        return (
          o(),
          u("div", b, [
            s("div", P, [
              e.user.pictureURL
                ? (o(),
                  u("div", T, [
                    s(
                      "img",
                      {
                        class: "card-img",
                        src: e.user.pictureURL,
                        alt: "foto agente",
                      },
                      null,
                      8,
                      V
                    ),
                  ]))
                : m("", !0),
              s("div", D, [
                s("h3", null, d(e.user.name), 1),
                ((i = e.user) == null ? void 0 : i.tier) > 0
                  ? (o(), u("div", E, d(f(L)[e.user.tier]), 1))
                  : m("", !0),
              ]),
            ]),
            e.canRemoveFromCampaign
              ? (o(),
                u("div", W, [
                  s(
                    "button",
                    {
                      class: "button-remove",
                      onClick:
                        t[0] ||
                        (t[0] = (l) => e.$emit("handleRemove", e.user.uid)),
                    },
                    " Remover jogador da campanha "
                  ),
                ]))
              : m("", !0),
            ((a = e.user) == null ? void 0 : a.tier) > 0
              ? (o(),
                u("div", $, [
                  s(
                    "img",
                    {
                      class: "tier-picture",
                      src: `/img/${f(U)[e.user.tier]}`,
                      alt: "banner",
                    },
                    null,
                    8,
                    F
                  ),
                ]))
              : m("", !0),
          ])
        );
      };
    },
  }),
  I = B(M, [["__scopeId", "data-v-e884fc30"]]);
export { I as P };

import {
  d as h,
  Q as y,
  f as $,
  U as s,
  o as n,
  c as o,
  a as t,
  m as p,
  t as f,
  L as c,
  W as _,
  X as C,
  _ as k,
} from "./index-sgISCpYv.js";
const b = { class: "card" },
  R = { class: "profile-img-container" },
  B = ["src"],
  D = { class: "content" },
  E = { class: "name" },
  L = { key: 0, class: "rank" },
  N = { class: "button-container" },
  P = { key: 0, class: "user-profile-tier-container" },
  T = ["src"],
  U = h({
    __name: "PlayerCard",
    props: { user: {}, canRemoveFromCampaign: { type: Boolean } },
    emits: ["handleRemove"],
    setup(v) {
      y((e) => ({ "2f339216": g.value }));
      const r = v,
        g = $(() => {
          var e, i, a, u, l, m, d, x;
          return ((e = r.user) == null ? void 0 : e.tier) === 0
            ? "0px 0px 12px 0px rgba(0, 0, 0, 0.40)"
            : ((i = r.user) == null ? void 0 : i.tier) === 1
            ? `0px 0px 4px 0px ${s.mundano}`
            : ((a = r.user) == null ? void 0 : a.tier) === 2
            ? `0px 0px 4px 0px ${s.recruta}`
            : ((u = r.user) == null ? void 0 : u.tier) === 3
            ? `0px 0px 4px 0px ${s.operador}`
            : ((l = r.user) == null ? void 0 : l.tier) === 4
            ? `0px 0px 4px 0px ${s.agenteEspecial}`
            : ((m = r.user) == null ? void 0 : m.tier) === 5
            ? `0px 0px 4px 0px ${s.agenteElite}`
            : ((d = r.user) == null ? void 0 : d.tier) === 6
            ? `0px 0px 4px 0px ${s.parceiro}`
            : ((x = r.user) == null ? void 0 : x.tier) === 7
            ? `0px 0px 4px 0px ${s.equipe}`
            : "0px 0px 12px 0px rgba(0, 0, 0, 0.40)";
        });
      return (e, i) => {
        var a;
        return (
          n(),
          o("div", b, [
            t("div", R, [
              e.user.pictureURL
                ? (n(),
                  o(
                    "img",
                    {
                      key: 0,
                      class: "profile-img",
                      src: e.user.pictureURL,
                      alt: "imagem de perfil",
                    },
                    null,
                    8,
                    B
                  ))
                : p("", !0),
            ]),
            t("div", D, [
              t("div", null, [
                t("div", E, f(e.user.name), 1),
                c(_)[e.user.tier] !== "Nenhuma"
                  ? (n(), o("div", L, f(c(_)[e.user.tier]), 1))
                  : p("", !0),
              ]),
              t("div", N, [
                e.canRemoveFromCampaign
                  ? (n(),
                    o(
                      "button",
                      {
                        key: 0,
                        class: "remove-button",
                        onClick:
                          i[0] ||
                          (i[0] = (u) => e.$emit("handleRemove", e.user.uid)),
                      },
                      " Remove "
                    ))
                  : p("", !0),
              ]),
            ]),
            ((a = e.user) == null ? void 0 : a.tier) > 0
              ? (n(),
                o("div", P, [
                  t(
                    "img",
                    {
                      class: "tier-picture",
                      src: `/img/${c(C)[e.user.tier]}`,
                      alt: "banner",
                    },
                    null,
                    8,
                    T
                  ),
                ]))
              : p("", !0),
          ])
        );
      };
    },
  }),
  F = k(U, [["__scopeId", "data-v-9e8814a2"]]);
export { F as P };

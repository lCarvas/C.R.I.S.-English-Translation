import {
  d as K,
  g as q,
  M as z,
  r as h,
  e as J,
  R as O,
  F as V,
  B as H,
  l as N,
  f as U,
  o as l,
  c as d,
  a,
  t as b,
  m as j,
  j as S,
  K as na,
  p as G,
  b as Q,
  _ as Y,
  u as sa,
  A as P,
  P as $,
  i as ta,
  L as Z,
  n as oa,
  q as ia,
  k as A,
  x as ca,
  C as la,
  D as da,
  E as ra,
  H as T,
  N as E,
  O as ua,
  I as F,
  J as ma,
} from "./index-sgISCpYv.js";
import { L as pa } from "./LoadingView-CeRplIIf.js";
import { _ as va } from "./trash-icon-Dl18GMfa.js";
import { g as ga, a as ha } from "./firebase-y1XG5P2D.js";
const Ca =
    "data:image/svg+xml,%3csvg%20width='14'%20height='11'%20viewBox='0%200%2014%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.15%200C3.61413%200%204.05925%200.181082%204.38744%200.50341C4.71563%200.825738%204.9%201.26291%204.9%201.71875C4.9%202.17459%204.71563%202.61176%204.38744%202.93409C4.05925%203.25642%203.61413%203.4375%203.15%203.4375C2.68587%203.4375%202.24075%203.25642%201.91256%202.93409C1.58437%202.61176%201.4%202.17459%201.4%201.71875C1.4%201.26291%201.58437%200.825738%201.91256%200.50341C2.24075%200.181082%202.68587%200%203.15%200ZM11.2%200C11.6641%200%2012.1092%200.181082%2012.4374%200.50341C12.7656%200.825738%2012.95%201.26291%2012.95%201.71875C12.95%202.17459%2012.7656%202.61176%2012.4374%202.93409C12.1092%203.25642%2011.6641%203.4375%2011.2%203.4375C10.7359%203.4375%2010.2908%203.25642%209.96256%202.93409C9.63437%202.61176%209.45%202.17459%209.45%201.71875C9.45%201.26291%209.63437%200.825738%209.96256%200.50341C10.2908%200.181082%2010.7359%200%2011.2%200ZM0%206.41738C0%205.15195%201.04562%204.125%202.33406%204.125H3.26812C3.61594%204.125%203.94625%204.2002%204.24375%204.3334C4.21531%204.48809%204.20219%204.64922%204.20219%204.8125C4.20219%205.6332%204.56969%206.37012%205.14937%206.875C5.145%206.875%205.14062%206.875%205.13406%206.875H0.465937C0.21%206.875%200%206.66875%200%206.41738ZM8.86594%206.875C8.86156%206.875%208.85719%206.875%208.85063%206.875C9.4325%206.37012%209.79781%205.6332%209.79781%204.8125C9.79781%204.64922%209.7825%204.49023%209.75625%204.3334C10.0538%204.19805%2010.3841%204.125%2010.7319%204.125H11.6659C12.9544%204.125%2014%205.15195%2014%206.41738C14%206.6709%2013.79%206.875%2013.5341%206.875H8.86594ZM4.9%204.8125C4.9%204.26549%205.12125%203.74089%205.51508%203.35409C5.9089%202.9673%206.44305%202.75%207%202.75C7.55695%202.75%208.0911%202.9673%208.48492%203.35409C8.87875%203.74089%209.1%204.26549%209.1%204.8125C9.1%205.35951%208.87875%205.88411%208.48492%206.27091C8.0911%206.6577%207.55695%206.875%207%206.875C6.44305%206.875%205.9089%206.6577%205.51508%206.27091C5.12125%205.88411%204.9%205.35951%204.9%204.8125ZM2.8%2010.4264C2.8%208.84512%204.10594%207.5625%205.71594%207.5625H8.28406C9.89406%207.5625%2011.2%208.84512%2011.2%2010.4264C11.2%2010.7422%2010.9397%2011%2010.6159%2011H3.38406C3.0625%2011%202.8%2010.7443%202.8%2010.4264Z'%20fill='%23A1A3A4'/%3e%3c/svg%3e",
  W = (r) => (G("data-v-f224c3ba"), (r = r()), Q(), r),
  _a = { class: "icons-row" },
  fa = { class: "agents-container" },
  wa = W(() =>
    a("img", { class: "icon", src: Ca, alt: "ícone de grupo" }, null, -1)
  ),
  ba = { class: "agents-number" },
  Ma = { class: "delete-container" },
  ya = W(() => a("img", { class: "icon", src: va, alt: "deletar" }, null, -1)),
  $a = [ya],
  ka = { class: "content-row" },
  Ia = { class: "info" },
  Da = { class: "title" },
  Ra = { class: "info-text" },
  La = { class: "button-container" },
  Sa = K({
    __name: "CampaignCard",
    props: { campaign: {} },
    emits: ["handleRemove", "handleOpenCampaign", "handleOpenCampaignMidClick"],
    setup(r) {
      var C;
      const m = r,
        u = q(),
        M = z(),
        s = h(0),
        p = h(
          ((C = u.currentUser) == null ? void 0 : C.uid) === m.campaign.uid
        );
      J(async () => {
        const e = O(M, "characters"),
          n = V(e, H("campaignDocId", "==", m.campaign.id)),
          v = await N(n);
        s.value = v.size;
      });
      const y = U(() => {
          const e = new Date(m.campaign.timestamp.seconds * 1e3),
            n = e.getDate(),
            v = n < 10 ? `0${n}` : n.toString(),
            k = e.getMonth() + 1,
            L = k < 10 ? `0${k}` : k.toString(),
            x = e.getFullYear().toString().substring(2, 4);
          return `${v}/${L}/${x}`;
        }),
        i = U(() =>
          m.campaign.pictureURL
            ? m.campaign.pictureURL
            : "/img/cris-banner.webp"
        );
      return (e, n) => (
        l(),
        d(
          "div",
          {
            class: "card",
            style: na({
              backgroundImage: `linear-gradient(178deg, rgba(0, 0, 0, 0.00) 1.83%, #121212 89.84%), url(${i.value})`,
            }),
          },
          [
            a("div", _a, [
              a("div", fa, [wa, a("div", ba, b(s.value), 1)]),
              a("div", Ma, [
                p.value
                  ? (l(),
                    d(
                      "button",
                      {
                        key: 0,
                        class: "delete-button",
                        onClick:
                          n[0] ||
                          (n[0] = (v) =>
                            e.$emit("handleRemove", e.campaign.id)),
                      },
                      $a
                    ))
                  : j("", !0),
              ]),
            ]),
            a("div", ka, [
              a("div", Ia, [
                a("div", Da, b(e.campaign.name), 1),
                a(
                  "div",
                  Ra,
                  " Iniciada em: " +
                    b(y.value) +
                    " | " +
                    b(p.value ? "DM" : "Jogador"),
                  1
                ),
              ]),
              a("div", La, [
                a(
                  "button",
                  {
                    class: "campaign-button",
                    onClick:
                      n[1] ||
                      (n[1] = (v) =>
                        e.$emit("handleOpenCampaign", e.campaign.id)),
                    onMouseup:
                      n[2] ||
                      (n[2] = S(
                        (v) =>
                          e.$emit("handleOpenCampaignMidClick", e.campaign.id),
                        ["middle"]
                      )),
                    onMousedown:
                      n[3] ||
                      (n[3] = S(() => {}, ["middle", "prevent", "stop"])),
                  },
                    " View Campaign ",
                  32
                ),
              ]),
            ]),
          ],
          4
        )
      );
    },
  }),
  xa = Y(Sa, [["__scopeId", "data-v-f224c3ba"]]),
  R = (r) => (G("data-v-8c68e420"), (r = r()), Q(), r),
  Aa = { key: 0, class: "campaigns-container" },
  Oa = { key: 0 },
  Va = ["disabled", "onMouseup"],
  Ha = { key: 0 },
  Na = { key: 1 },
  Ua = { class: "cards-container" },
  Ba = { key: 1, class: "no-campaigns-container" },
  Pa = R(() => a("h3", null, "You have yet to create a campaign!", -1)),
  Za = { key: 2 },
  Ta = { class: "modal-content modal-width" },
  Ea = R(() => a("h2", null, "Delete campaign?", -1)),
  Fa = R(() =>
    a("img", { class: "close-icon", src: ma, alt: "fechar" }, null, -1)
  ),
  Ka = [Fa],
  qa = { class: "modal-body" },
  za = R(() =>
    a(
      "h3",
      null,
      [
        T("To confirm this action type "),
        a("b", null, "REMOVER"),
        T(" on the field below:"),
      ],
      -1
    )
  ),
  Ja = R(() =>
    a("h4", null, "Atention: this action is permanent and irreversible!", -1)
  ),
  ja = { class: "input-container" },
  Ga = ["onKeyup"],
  Qa = ["disabled"],
  Ya = { key: 1 },
  Wa = K({
    __name: "CampaignsList",
    setup(r) {
      const m = q(),
        u = z(),
        M = sa(),
        s = h([]),
        p = h(!0),
        y = h(!1),
        i = h(),
        C = h(""),
        e = h(0),
        n = ha;
      J(async () => {
        var c;
        if (!m.currentUser) return;
        const t = [],
          _ = (await P($(u, "users", m.currentUser.uid))).data();
        for (const I of _.campaignsId) {
          const f = await P($(u, "campaigns", I));
          if (f.data()) {
            const w = f.data();
            (w.id = f.id), t.push(w);
          }
        }
        t.sort((I, f) => {
          var w, g;
          return (
            ((w = f.timestamp) == null ? void 0 : w.seconds) * 1e3 -
            ((g = I.timestamp) == null ? void 0 : g.seconds) * 1e3
          );
        }),
          (s.value = t),
          (e.value = await ga((c = m.currentUser) == null ? void 0 : c.uid)),
          (p.value = !1);
      });
      const v = U(() => C.value.toLocaleLowerCase().trim() === "remover"),
        k = (t) => {
          y.value = !0;
          const o = s.value.findIndex((_) => _.id === t);
          i.value = s.value[o];
        },
        L = () => {
          (y.value = !1), (i.value = void 0), (C.value = "");
        },
        x = () => {
          (s.value.length > n && e.value < 4) ||
            ((p.value = !0), M.push({ name: "campaign-create" }));
        },
        X = () => {
          if (s.value.length > n && e.value < 4) return;
          const t = M.resolve({ name: "campaign-create" });
          window.open(t.href, "_blank");
        },
        aa = (t) => {
          (p.value = !0), M.push({ name: "campaign-page", params: { id: t } });
        },
        ea = (t) => {
          const o = M.resolve({ name: "campaign-page", params: { id: t } });
          window.open(o.href, "_blank");
        },
        B = async () => {
          if (!v.value || !i.value) return;
          p.value = !0;
          const t = O(u, "characters"),
            o = V(t, H("campaignDocId", "==", i.value.id)),
            _ = await N(o);
          for (const g of _.docs) {
            const D = g.data();
            (D.id = g.id),
              await E($(u, "characters", D.id), { campaignDocId: "" });
          }
          const c = O(u, "users"),
            I = V(c, H("campaignsId", "array-contains", i.value.id)),
            f = await N(I);
          for (const g of f.docs)
            await E($(u, "users", g.id), { campaignsId: ua(i.value.id) });
          await F($(u, "campaignLogs", i.value.campaignLogId)),
            await F($(u, "campaigns", i.value.id));
          const w = s.value.findIndex((g) => {
            var D;
            return (
              g.id ===
              ((D = i == null ? void 0 : i.value) == null ? void 0 : D.id)
            );
          });
          s.value.splice(w, 1), (p.value = !1), L();
        };
      return (t, o) => {
        const _ = ta("vue-final-modal");
        return p.value
          ? (l(), d("div", Ya, [A(pa, { "page-loading": "" })]))
          : (l(),
            d("div", Aa, [
              s.value.length > 0
                ? (l(),
                  d("div", Oa, [
                    a(
                      "button",
                      {
                        class: "button-primary new-button",
                        disabled: s.value.length >= Z(n) && e.value < 4,
                        onClick: x,
                        onMouseup: S(X, ["middle"]),
                        onMousedown:
                          o[0] ||
                          (o[0] = S(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " New Campaign ",
                      40,
                      Va
                    ),
                    a("div", null, [
                      e.value < 4
                        ? (l(),
                          d(
                            "h3",
                            Ha,
                            " Campaigns: " + b(s.value.length) + "/" + b(Z(n)),
                            1
                          ))
                        : (l(),
                          d("h3", Na, " Campaigns: " + b(s.value.length), 1)),
                      a("div", Ua, [
                        (l(!0),
                        d(
                          oa,
                          null,
                          ia(
                            s.value,
                            (c) => (
                              l(),
                              d("div", { key: c.id }, [
                                A(
                                  xa,
                                  {
                                    campaign: c,
                                    onHandleOpenCampaign: aa,
                                    onHandleOpenCampaignMidClick: ea,
                                    onHandleRemove: k,
                                  },
                                  null,
                                  8,
                                  ["campaign"]
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]))
                : (l(),
                  d("div", Ba, [
                    Pa,
                    a(
                      "button",
                      {
                        class: "button-primary",
                        onClick:
                          o[1] ||
                          (o[1] = (c) =>
                            t.$router.push({ name: "campaign-create" })),
                      },
                      " New Campaign "
                    ),
                  ])),
              i.value
                ? (l(),
                  d("div", Za, [
                    A(
                      _,
                      {
                        modelValue: y.value,
                        "onUpdate:modelValue":
                          o[3] || (o[3] = (c) => (y.value = c)),
                        classes: "modal-container",
                      },
                      {
                        default: ca(() => [
                          a("div", Ta, [
                            a("div", { class: "modal-header" }, [
                              Ea,
                              a("button", { onClick: L }, Ka),
                            ]),
                            a("div", qa, [
                              za,
                              Ja,
                              a("div", ja, [
                                la(
                                  a(
                                    "input",
                                    {
                                      "onUpdate:modelValue":
                                        o[2] || (o[2] = (c) => (C.value = c)),
                                      type: "text",
                                      class: "input-primary",
                                      onKeyup: ra(B, ["enter"]),
                                    },
                                    null,
                                    40,
                                    Ga
                                  ),
                                  [[da, C.value]]
                                ),
                                a(
                                  "button",
                                  {
                                    class: "button-remove",
                                    disabled: !v.value,
                                    onClick: B,
                                  },
                                  " Confirm ",
                                  8,
                                  Qa
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : j("", !0),
            ]));
      };
    },
  }),
  se = Y(Wa, [["__scopeId", "data-v-8c68e420"]]);
export { se as default };

import {
  d as B,
  g as M,
  M as x,
  u as E,
  S as j,
  r as c,
  e as G,
  H as I,
  P as l,
  R as H,
  F as $,
  B as q,
  l as K,
  f as Q,
  h as z,
  o as s,
  c as t,
  k as S,
  m as J,
  a as g,
  n as O,
  q as W,
  K as X,
  L as Y,
  p as Z,
  b as aa,
  _ as ea,
} from "./index-R0omtfCh.js";
import { C as sa } from "./CharacterCard-dR4RLit4.js";
import { L as ta } from "./LoadingView-3PnmBxfB.js";
import { S as na } from "./SearchInput-QmHiECy4.js";
import { g as L, h as oa, A as ia } from "./firebase-M2_dwsIb.js";
import "./open-in-new-icon-p91krxL-.js";
const P = (d) => (Z("data-v-7a3223f6"), (d = d()), aa(), d),
  ra = { key: 0, class: "campaign-join-container" },
  ca = { key: 0 },
  da = P(() =>
    g(
      "div",
      { class: "text" },
      " Choose an agent to add to the campaign! ",
      -1
    )
  ),
  ma = { key: 0 },
  ua = { class: "cards-container" },
  pa = { key: 1 },
  la = P(() =>
    g(
      "div",
      { class: "info-message" },
      " This campaign has reached the agent limit! ",
      -1
    )
  ),
  ga = { key: 1 },
  ha = B({
    __name: "CampaignAddAgent",
    setup(d) {
      const i = M(),
        r = x(),
        w = E(),
        n = j().params.id,
        h = c(!0),
        f = c(!1),
        v = c([]),
        _ = c(""),
        T = c(0),
        F = ia;
      G(async () => {
        var y, A;
        if (!i.currentUser) return;
        T.value = await L((y = i.currentUser) == null ? void 0 : y.uid);
        const e = (await I(l(r, "campaigns", n))).data(),
          m = (await I(l(r, "users", e.uid))).data();
        if (
          ((await L(m.uid)) < 4 &&
            (f.value = await oa("campaignDocId", n, "characters", F)),
          !f.value)
        ) {
          const C = [],
            R = H(r, "characters"),
            V = $(
              R,
              q("uid", "==", (A = i.currentUser) == null ? void 0 : A.uid)
            ),
            b = await K(V);
          for (const u of b.docs) {
            const p = u.data();
            (p.id = u.id), C.push(p);
          }
          C.sort((u, p) => {
            var U, k;
            return (
              ((U = p.timestamp) == null ? void 0 : U.seconds) * 1e3 -
              ((k = u.timestamp) == null ? void 0 : k.seconds) * 1e3
            );
          }),
            (v.value = C);
        }
        h.value = !1;
      });
      const N = Q(() => v.value.filter((o) => z(o.name, _.value))),
        D = async (o) => {
          var m;
          if (!((m = i.currentUser) != null && m.uid)) return;
          (h.value = !0),
            (await I(l(r, "users", i.currentUser.uid)))
              .data()
              .campaignsId.includes(n)
              ? (await Y(l(r, "characters", o), { campaignDocId: n }),
                w.push({ name: "campaign-page", params: { id: n } }))
              : w.push({ name: "campaign-page-denied" });
        };
      return (o, e) =>
        h.value
          ? (s(), t("div", ga, [S(ta, { "page-loading": "" })]))
          : (s(),
            t("div", ra, [
              f.value
                ? (s(),
                  t("div", pa, [
                    la,
                    g(
                      "button",
                      {
                        class: "button-primary info-message-button",
                        onClick:
                          e[1] ||
                          (e[1] = (a) =>
                            o.$router.push({
                              name: "campaign-page",
                              params: { id: X(n) },
                            })),
                      },
                      " Return "
                    ),
                  ]))
                : (s(),
                  t("div", ca, [
                    da,
                    v.value.length > 6
                      ? (s(),
                        t("div", ma, [
                          S(
                            na,
                            {
                              value: _.value,
                              onUpdate: e[0] || (e[0] = (a) => (_.value = a)),
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]))
                      : J("", !0),
                    g("div", ua, [
                      (s(!0),
                      t(
                        O,
                        null,
                        W(
                          N.value,
                          (a) => (
                            s(),
                            t("div", { key: a.id }, [
                              S(
                                sa,
                                {
                                  "join-campaign-mode": "",
                                  "char-id": a.id,
                                  name: a.name,
                                  "char-class": a.className,
                                  timestamp: a.timestamp.seconds,
                                  "sheet-picture": a.sheetPictureURL,
                                  "campaign-id": a.campaignDocId,
                                  onHandleChooseForCampaign: D,
                                },
                                null,
                                8,
                                [
                                  "char-id",
                                  "name",
                                  "char-class",
                                  "timestamp",
                                  "sheet-picture",
                                  "campaign-id",
                                ]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ])),
            ]));
    },
  }),
  Aa = ea(ha, [["__scopeId", "data-v-7a3223f6"]]);
export { Aa as default };

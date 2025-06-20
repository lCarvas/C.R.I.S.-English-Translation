import {
  d as B,
  g as M,
  M as x,
  u as E,
  S as j,
  r as c,
  e as G,
  A as I,
  P as l,
  R as $,
  F as q,
  B as H,
  l as Q,
  f as z,
  h as J,
  o as s,
  c as t,
  k as A,
  m as K,
  a as g,
  n as O,
  q as W,
  L as X,
  N as Y,
  p as Z,
  b as aa,
  _ as ea,
} from "./index-t0mq17pV.js";
import { C as sa } from "./CharacterCard-GD5PfX5I.js";
import { L as ta } from "./LoadingView-_iqLshHh.js";
import { S as na } from "./SearchInput-JwrnRX4j.js";
import { g as L, h as oa, A as ia } from "./firebase-7sah6mo2.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./exit-icon-7lL51GVi.js";
const N = (d) => (Z("data-v-7a3223f6"), (d = d()), aa(), d),
  ra = { key: 0, class: "campaign-join-container" },
  ca = { key: 0 },
  da = N(() =>
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
  la = N(() =>
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
        S = E(),
        n = j().params.id,
        h = c(!0),
        f = c(!1),
        v = c([]),
        _ = c(""),
        P = c(0),
        T = ia;
      G(async () => {
        var w, y;
        if (!i.currentUser) return;
        P.value = await L((w = i.currentUser) == null ? void 0 : w.uid);
        const e = (await I(l(r, "campaigns", n))).data(),
          m = (await I(l(r, "users", e.uid))).data();
        if (
          ((await L(m.uid)) < 4 &&
            (f.value = await oa("campaignDocId", n, "characters", T)),
          !f.value)
        ) {
          const C = [],
            R = $(r, "characters"),
            V = q(
              R,
              H("uid", "==", (y = i.currentUser) == null ? void 0 : y.uid)
            ),
            b = await Q(V);
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
      const F = z(() => v.value.filter((o) => J(o.name, _.value))),
        D = async (o) => {
          var m;
          if (!((m = i.currentUser) != null && m.uid)) return;
          (h.value = !0),
            (await I(l(r, "users", i.currentUser.uid)))
              .data()
              .campaignsId.includes(n)
              ? (await Y(l(r, "characters", o), { campaignDocId: n }),
                S.push({ name: "campaign-page", params: { id: n } }))
              : S.push({ name: "campaign-page-denied" });
        };
      return (o, e) =>
        h.value
          ? (s(), t("div", ga, [A(ta, { "page-loading": "" })]))
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
                      " Voltar "
                    ),
                  ]))
                : (s(),
                  t("div", ca, [
                    da,
                    v.value.length > 6
                      ? (s(),
                        t("div", ma, [
                          A(
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
                      : K("", !0),
                    g("div", ua, [
                      (s(!0),
                      t(
                        O,
                        null,
                        W(
                          F.value,
                          (a) => (
                            s(),
                            t("div", { key: a.id }, [
                              A(
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
  ka = ea(ha, [["__scopeId", "data-v-7a3223f6"]]);
export { ka as default };

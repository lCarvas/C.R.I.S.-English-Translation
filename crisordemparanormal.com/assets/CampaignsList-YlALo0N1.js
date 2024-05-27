import {
  d as F,
  g as H,
  M as K,
  r as h,
  e as z,
  H as L,
  P as b,
  R as S,
  F as O,
  B as A,
  l as E,
  f as G,
  o as c,
  c as l,
  a as e,
  t as w,
  k as R,
  I as Z,
  J as aa,
  K as N,
  m as q,
  j,
  _ as J,
  u as ea,
  i as sa,
  n as na,
  q as ta,
  v as oa,
  x as ia,
  y as ca,
  z as la,
  p as da,
  b as ra,
  C as P,
  L as x,
  N as ua,
  D as B,
  E as ma,
} from "./index-sE6ml22p.js";
import { L as pa } from "./LoadingView-ZyngFh7H.js";
import { g as va, a as ha } from "./firebase-lKn9MVSr.js";
const ga = { class: "card" },
  _a = { class: "content" },
  Ca = { class: "title" },
  fa = { class: "date" },
  ya = { class: "players-number-container" },
  ba = { class: "players-number" },
  wa = { key: 0, class: "players-number-label" },
  ka = { key: 1, class: "players-number-label" },
  $a = { class: "dm" },
  Da = { class: "footer" },
  Ia = { key: 0 },
  Ma = F({
    __name: "CampaignCard",
    props: { campaign: {} },
    emits: ["handleRemove", "handleOpenCampaign", "handleOpenCampaignMidClick"],
    setup(k) {
      const g = k,
        u = H(),
        _ = K(),
        n = h(),
        m = h();
      z(async () => {
        const s = (await L(b(_, "users", g.campaign.uid))).data();
        m.value = s.name;
        const d = S(_, "characters"),
          o = O(d, A("campaignDocId", "==", g.campaign.id)),
          p = await E(o);
        n.value = p.size;
      });
      const $ = G(() => {
        const a = new Date(g.campaign.timestamp.seconds * 1e3),
          s = a.getDate(),
          d = s < 10 ? `0${s}` : s.toString(),
          o = a.getMonth() + 1,
          p = o < 10 ? `0${o}` : o.toString(),
          V = a.getFullYear().toString().substring(2, 4);
        return `${d}/${p}/${V}`;
      });
      return (a, s) => {
        var d, o;
        return (
          c(),
          l("div", ga, [
            e("div", _a, [
              e("div", Ca, w(a.campaign.name), 1),
              e("div", fa, " Started on " + w($.value), 1),
              e("div", ya, [
                e("div", ba, w(n.value), 1),
                n.value !== 1
                  ? (c(), l("div", wa, " AGENTS "))
                  : (c(), l("div", ka, " AGENT ")),
              ]),
              e("div", $a, " DM: " + w(m.value), 1),
            ]),
            e("div", Da, [
              R(Z),
              e(
                "div",
                {
                  class: aa([
                    ((d = N(u).currentUser) == null ? void 0 : d.uid) ===
                    a.campaign.uid
                      ? "buttons-container"
                      : "button-container",
                  ]),
                },
                [
                  ((o = N(u).currentUser) == null ? void 0 : o.uid) ===
                  a.campaign.uid
                    ? (c(),
                      l("div", Ia, [
                        e(
                          "button",
                          {
                            class: "button-remove",
                            onClick:
                              s[0] ||
                              (s[0] = (p) =>
                                a.$emit("handleRemove", a.campaign.id)),
                          },
                          " Remove "
                        ),
                      ]))
                    : q("", !0),
                  e(
                    "button",
                    {
                      class: "sheet-button button-primary",
                      onClick:
                        s[1] ||
                        (s[1] = (p) =>
                          a.$emit("handleOpenCampaign", a.campaign.id)),
                      onMouseup:
                        s[2] ||
                        (s[2] = j(
                          (p) =>
                            a.$emit(
                              "handleOpenCampaignMidClick",
                              a.campaign.id
                            ),
                          ["middle"]
                        )),
                    },
                    " See Campaign ",
                    32
                  ),
                ],
                2
              ),
            ]),
          ])
        );
      };
    },
  }),
  Ra = J(Ma, [["__scopeId", "data-v-48305e77"]]),
  M = (k) => (da("data-v-9c8479dd"), (k = k()), ra(), k),
  Na = { key: 0, class: "campaigns-container" },
  Va = { key: 0 },
  La = ["disabled", "onMouseup"],
  Sa = { key: 0 },
  Oa = { key: 1 },
  Aa = { class: "cards-container" },
  Ea = { key: 1, class: "no-campaigns-container" },
  Ua = M(() => e("h3", null, "You have yet to create a campaign!", -1)),
  Ta = { key: 2 },
  Pa = { class: "modal-content modal-width" },
  xa = M(() => e("h2", null, "Delete campaign?", -1)),
  Ba = M(() =>
    e("img", { class: "close-icon", src: ma, alt: "fechar" }, null, -1)
  ),
  Fa = [Ba],
  Ha = { class: "modal-body" },
  Ka = M(() =>
    e(
      "h3",
      null,
      [
        P("To confirm this action type "),
        e("b", null, "REMOVER"),
        P(" on the field below:"),
      ],
      -1
    )
  ),
  za = M(() =>
    e("h4", null, "Atention: this action is permanent and irreversible!", -1)
  ),
  Ga = { class: "input-container" },
  qa = ["onKeyup"],
  ja = ["disabled"],
  Ja = { key: 1 },
  Qa = F({
    __name: "CampaignsList",
    setup(k) {
      const g = H(),
        u = K(),
        _ = ea(),
        n = h([]),
        m = h(!0),
        $ = h(!1),
        a = h(),
        s = h(""),
        d = h(0),
        o = ha;
      z(async () => {
        var r;
        if (!g.currentUser) return;
        const t = [],
          C = (await L(b(u, "users", g.currentUser.uid))).data();
        for (const D of C.campaignsId) {
          const f = await L(b(u, "campaigns", D));
          if (f.data()) {
            const y = f.data();
            (y.id = f.id), t.push(y);
          }
        }
        t.sort((D, f) => {
          var y, v;
          return (
            ((y = f.timestamp) == null ? void 0 : y.seconds) * 1e3 -
            ((v = D.timestamp) == null ? void 0 : v.seconds) * 1e3
          );
        }),
          (n.value = t),
          (d.value = await va((r = g.currentUser) == null ? void 0 : r.uid)),
          (m.value = !1);
      });
      const p = G(() => s.value.toLocaleLowerCase().trim() === "remover"),
        V = (t) => {
          $.value = !0;
          const i = n.value.findIndex((C) => C.id === t);
          a.value = n.value[i];
        },
        U = () => {
          ($.value = !1), (a.value = void 0), (s.value = "");
        },
        Q = () => {
          (n.value.length > o && d.value < 4) ||
            ((m.value = !0), _.push({ name: "campaign-create" }));
        },
        Y = () => {
          if (n.value.length > o && d.value < 4) return;
          const t = _.resolve({ name: "campaign-create" });
          window.open(t.href, "_blank");
        },
        W = (t) => {
          (m.value = !0), _.push({ name: "campaign-page", params: { id: t } });
        },
        X = (t) => {
          const i = _.resolve({ name: "campaign-page", params: { id: t } });
          window.open(i.href, "_blank");
        },
        T = async () => {
          if (!p.value || !a.value) return;
          m.value = !0;
          const t = S(u, "characters"),
            i = O(t, A("campaignDocId", "==", a.value.id)),
            C = await E(i);
          for (const v of C.docs) {
            const I = v.data();
            (I.id = v.id),
              await x(b(u, "characters", I.id), { campaignDocId: "" });
          }
          const r = S(u, "users"),
            D = O(r, A("campaignsId", "array-contains", a.value.id)),
            f = await E(D);
          for (const v of f.docs)
            await x(b(u, "users", v.id), { campaignsId: ua(a.value.id) });
          await B(b(u, "campaignLogs", a.value.campaignLogId)),
            await B(b(u, "campaigns", a.value.id));
          const y = n.value.findIndex((v) => {
            var I;
            return (
              v.id ===
              ((I = a == null ? void 0 : a.value) == null ? void 0 : I.id)
            );
          });
          n.value.splice(y, 1), (m.value = !1), U();
        };
      return (t, i) => {
        const C = sa("vue-final-modal");
        return m.value
          ? (c(), l("div", Ja, [R(pa, { "page-loading": "" })]))
          : (c(),
            l("div", Na, [
              n.value.length > 0
                ? (c(),
                  l("div", Va, [
                    e(
                      "button",
                      {
                        class: "button-primary new-button",
                        disabled: n.value.length >= N(o) && d.value < 4,
                        onClick: Q,
                        onMouseup: j(Y, ["middle"]),
                      },
                      " New Campaign ",
                      40,
                      La
                    ),
                    e("div", null, [
                      d.value < 4
                        ? (c(),
                          l(
                            "h3",
                            Sa,
                            " Campaigns: " + w(n.value.length) + "/" + w(N(o)),
                            1
                          ))
                        : (c(),
                          l("h3", Oa, " Campaigns: " + w(n.value.length), 1)),
                      e("div", Aa, [
                        (c(!0),
                        l(
                          na,
                          null,
                          ta(
                            n.value,
                            (r) => (
                              c(),
                              l("div", { key: r.id }, [
                                R(
                                  Ra,
                                  {
                                    campaign: r,
                                    onHandleOpenCampaign: W,
                                    onHandleOpenCampaignMidClick: X,
                                    onHandleRemove: V,
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
                : (c(),
                  l("div", Ea, [
                    Ua,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick:
                          i[0] ||
                          (i[0] = (r) =>
                            t.$router.push({ name: "campaign-create" })),
                      },
                      " New Campaign "
                    ),
                  ])),
              a.value
                ? (c(),
                  l("div", Ta, [
                    R(
                      C,
                      {
                        modelValue: $.value,
                        "onUpdate:modelValue":
                          i[2] || (i[2] = (r) => ($.value = r)),
                        classes: "modal-container",
                      },
                      {
                        default: oa(() => [
                          e("div", Pa, [
                            e("div", { class: "modal-header" }, [
                              xa,
                              e("button", { onClick: U }, Fa),
                            ]),
                            e("div", Ha, [
                              Ka,
                              za,
                              e("div", Ga, [
                                ia(
                                  e(
                                    "input",
                                    {
                                      "onUpdate:modelValue":
                                        i[1] || (i[1] = (r) => (s.value = r)),
                                      type: "text",
                                      class: "input-primary",
                                      onKeyup: la(T, ["enter"]),
                                    },
                                    null,
                                    40,
                                    qa
                                  ),
                                  [[ca, s.value]]
                                ),
                                e(
                                  "button",
                                  {
                                    class: "button-remove",
                                    disabled: !p.value,
                                    onClick: T,
                                  },
                                  " Confirm ",
                                  8,
                                  ja
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
                : q("", !0),
            ]));
      };
    },
  }),
  Za = J(Qa, [["__scopeId", "data-v-9c8479dd"]]);
export { Za as default };

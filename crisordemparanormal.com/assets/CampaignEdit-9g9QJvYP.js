import {
  d as H,
  g as $,
  M as J,
  u as Q,
  S as j,
  r as c,
  f as I,
  e as z,
  A as W,
  P as l,
  i as D,
  o as V,
  c as S,
  a,
  C as k,
  D as E,
  k as v,
  x as M,
  N as b,
  E as X,
  p as Y,
  b as Z,
  H as R,
  R as x,
  F as L,
  B as U,
  l as B,
  O as aa,
  I as q,
  J as ea,
  _ as sa,
} from "./index-QwuuguuZ.js";
import { c as ta } from "./default-tJ6A0c0K.js";
import { v as oa } from "./forms-8DDAOOVU.js";
import { L as na } from "./LoadingView-BDyk9qee.js";
import { S as ia } from "./SwitchButtonBool-SDRvIcMo.js";
import { g as la } from "./firebase-UUb4pQvs.js";
const o = (d) => (Y("data-v-bdeefb27"), (d = d()), Z(), d),
  ra = { key: 0, class: "page-container" },
  ca = o(() => a("div", { class: "page-title" }, " Edit Campaign ", -1)),
  da = { class: "form-container" },
  ua = { class: "input-container" },
  pa = o(() => a("div", { class: "label" }, " Name* ", -1)),
  ma = { class: "input-container" },
  va = o(() => a("div", { class: "label" }, " Private DM Screen ", -1)),
  _a = o(() => a("div", { class: "label" }, " Description ", -1)),
  ha = o(() =>
    a(
      "span",
      { class: "ql-formats" },
      [
        a("button", { class: "ql-bold" }),
        a("button", { class: "ql-italic" }),
        a("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  fa = { class: "buttons-container" },
  ga = { class: "second-buttons-container" },
  ba = ["disabled"],
  Ca = { class: "modal-content modal-width" },
  wa = o(() => a("h2", null, "Delete campaign?", -1)),
  ya = o(() =>
    a("img", { class: "close-icon", src: ea, alt: "fechar" }, null, -1)
  ),
  Ia = [ya],
  Da = { class: "modal-body" },
  Va = o(() =>
    a(
      "h3",
      null,
      [
        R("To confirm this action type "),
        a("b", null, "REMOVER"),
        R(" on the field below:"),
      ],
      -1
    )
  ),
  Sa = o(() =>
    a("h4", null, "Atention: this action is permanent and irreversible!", -1)
  ),
  ka = { class: "input-container-modal" },
  Ea = ["onKeyup"],
  Ma = ["disabled"],
  Ra = { key: 1 },
  xa = H({
    __name: "CampaignEdit",
    setup(d) {
      const _ = $(),
        n = J(),
        h = Q(),
        P = j().params.id,
        e = c(ta),
        r = c(!0),
        u = c(!1),
        p = c(""),
        A = c(0),
        N = ["OFF", "ON"],
        C = I(() => e.value.name === "");
      z(async () => {
        var s;
        if (!_.currentUser) return;
        A.value = await la((s = _.currentUser) == null ? void 0 : s.uid);
        const i = await W(l(n, "campaigns", P));
        i.data() || h.push({ name: "not-found" }),
          (e.value = i.data()),
          (e.value.id = i.id),
          (r.value = !1);
      });
      const O = async () => {
          _.currentUser &&
            (C.value ||
              ((r.value = !0),
              oa(e.value),
              await b(l(n, "campaigns", e.value.id), e.value),
              (r.value = !1),
              h.push({ name: "campaign-page", params: { id: e.value.id } })));
        },
        T = I(() => p.value.toLocaleLowerCase().trim() === "remover"),
        F = () => {
          u.value = !0;
        },
        K = () => {
          (u.value = !1), (p.value = "");
        },
        w = async () => {
          if (!e.value) return;
          r.value = !0;
          const i = x(n, "characters"),
            s = L(i, U("campaignDocId", "==", e.value.id)),
            f = await B(s);
          for (const m of f.docs) {
            const y = m.data();
            (y.id = m.id),
              await b(l(n, "characters", y.id), { campaignDocId: "" });
          }
          const g = x(n, "users"),
            t = L(g, U("campaignsId", "array-contains", e.value.id)),
            G = await B(t);
          for (const m of G.docs)
            await b(l(n, "users", m.id), { campaignsId: aa(e.value.id) });
          await q(l(n, "campaignLogs", e.value.campaignLogId)),
            await q(l(n, "campaigns", e.value.id)),
            h.push({ name: "campaigns-list" });
        };
      return (i, s) => {
        const f = D("p-editor"),
          g = D("vue-final-modal");
        return r.value
          ? (V(), S("div", Ra, [v(na, { "page-loading": "" })]))
          : (V(),
            S("div", ra, [
              ca,
              a("div", da, [
                a("div", ua, [
                  pa,
                  k(
                    a(
                      "input",
                      {
                        "onUpdate:modelValue":
                          s[0] || (s[0] = (t) => (e.value.name = t)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[E, e.value.name]]
                  ),
                ]),
                a("div", ma, [
                  va,
                  v(
                    ia,
                    {
                      value: e.value.privateMasterScreen,
                      options: N,
                      onHandleChange:
                        s[1] ||
                        (s[1] = (t) => (e.value.privateMasterScreen = t)),
                    },
                    null,
                    8,
                    ["value"]
                  ),
                ]),
                _a,
                v(
                  f,
                  {
                    modelValue: e.value.description,
                    "onUpdate:modelValue":
                      s[2] || (s[2] = (t) => (e.value.description = t)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: M(() => [ha]), _: 1 },
                  8,
                  ["modelValue"]
                ),
                a("div", fa, [
                  a(
                    "button",
                    { class: "button-remove", onClick: F },
                    " Delete "
                  ),
                  a("div", ga, [
                    a(
                      "button",
                      {
                        class: "button-cancel",
                        onClick:
                          s[3] ||
                          (s[3] = (t) =>
                            i.$router.push({
                              name: "campaign-page",
                              params: { id: e.value.id },
                            })),
                      },
                      " Cancel "
                    ),
                    a(
                      "button",
                      {
                        class: "button-primary big",
                        disabled: C.value,
                        onClick: O,
                      },
                      " Edit ",
                      8,
                      ba
                    ),
                  ]),
                ]),
              ]),
              a("div", null, [
                v(
                  g,
                  {
                    modelValue: u.value,
                    "onUpdate:modelValue":
                      s[5] || (s[5] = (t) => (u.value = t)),
                    classes: "modal-container",
                  },
                  {
                    default: M(() => [
                      a("div", Ca, [
                        a("div", { class: "modal-header" }, [
                          wa,
                          a("button", { onClick: K }, Ia),
                        ]),
                        a("div", Da, [
                          Va,
                          Sa,
                          a("div", ka, [
                            k(
                              a(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    s[4] || (s[4] = (t) => (p.value = t)),
                                  type: "text",
                                  class: "input-primary",
                                  onKeyup: X(w, ["enter"]),
                                },
                                null,
                                40,
                                Ea
                              ),
                              [[E, p.value]]
                            ),
                            a(
                              "button",
                              {
                                class: "button-remove",
                                disabled: !T.value,
                                onClick: w,
                              },
                              " Confirm ",
                              8,
                              Ma
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
              ]),
            ]));
      };
    },
  }),
  Oa = sa(xa, [["__scopeId", "data-v-bdeefb27"]]);
export { Oa as default };

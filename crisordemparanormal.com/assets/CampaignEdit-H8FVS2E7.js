import {
  d as H,
  g as $,
  M as J,
  u as Q,
  S as j,
  r as c,
  f as D,
  e as z,
  A as W,
  P as l,
  i as V,
  o as S,
  c as k,
  a,
  C as E,
  D as M,
  k as v,
  x as R,
  N as b,
  E as X,
  p as Y,
  b as Z,
  H as x,
  R as L,
  F as U,
  B,
  l as q,
  O as aa,
  I as C,
  J as ea,
  _ as ta,
} from "./index-t0mq17pV.js";
import { c as sa } from "./default-s9aktn1T.js";
import { v as oa } from "./forms-elmqtkmr.js";
import { L as na } from "./LoadingView-_iqLshHh.js";
import { S as ia } from "./SwitchButtonBool-R2SsgvuJ.js";
import { g as la } from "./firebase-7sah6mo2.js";
const n = (d) => (Y("data-v-641847a6"), (d = d()), Z(), d),
  ra = { key: 0, class: "page-container" },
  ca = n(() => a("div", { class: "page-title" }, " Edit Campaign ", -1)),
  da = { class: "form-container" },
  ua = { class: "input-container" },
  pa = n(() => a("div", { class: "label" }, " Name* ", -1)),
  ma = { class: "input-container" },
  va = n(() => a("div", { class: "label" }, " Private GM Screen ", -1)),
  _a = n(() => a("div", { class: "label" }, " Description ", -1)),
  ha = n(() =>
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
  wa = n(() => a("h2", null, "Delete campaign?", -1)),
  ya = n(() =>
    a("img", { class: "close-icon", src: ea, alt: "fechar" }, null, -1)
  ),
  Ia = [ya],
  Da = { class: "modal-body" },
  Va = n(() =>
    a(
      "h3",
      null,
      [
        x("To confirm this action type "),
        a("b", null, "REMOVER"),
        x(" on the field below:"),
      ],
      -1
    )
  ),
  Sa = n(() =>
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
        o = J(),
        h = Q(),
        P = j().params.id,
        e = c(sa),
        r = c(!0),
        u = c(!1),
        p = c(""),
        A = c(0),
        N = ["OFF", "ON"],
        w = D(() => e.value.name === "");
      z(async () => {
        var t;
        if (!_.currentUser) return;
        A.value = await la((t = _.currentUser) == null ? void 0 : t.uid);
        const i = await W(l(o, "campaigns", P));
        i.data() || h.push({ name: "not-found" }),
          (e.value = i.data()),
          (e.value.id = i.id),
          (r.value = !1);
      });
      const O = async () => {
          _.currentUser &&
            (w.value ||
              ((r.value = !0),
              oa(e.value),
              await b(l(o, "campaigns", e.value.id), e.value),
              (r.value = !1),
              h.push({ name: "campaign-page", params: { id: e.value.id } })));
        },
        T = D(() => p.value.toLocaleLowerCase().trim() === "remover"),
        F = () => {
          u.value = !0;
        },
        K = () => {
          (u.value = !1), (p.value = "");
        },
        y = async () => {
          if (!e.value) return;
          r.value = !0;
          const i = L(o, "characters"),
            t = U(i, B("campaignDocId", "==", e.value.id)),
            f = await q(t);
          for (const m of f.docs) {
            const I = m.data();
            (I.id = m.id),
              await b(l(o, "characters", I.id), { campaignDocId: "" });
          }
          const g = L(o, "users"),
            s = U(g, B("campaignsId", "array-contains", e.value.id)),
            G = await q(s);
          for (const m of G.docs)
            await b(l(o, "users", m.id), { campaignsId: aa(e.value.id) });
          await C(l(o, "campaignLogs", e.value.campaignLogId)),
            await C(l(o, "campaigns", e.value.id)),
            await C(l(o, "vtt", e.value.id)),
            h.push({ name: "campaigns-list" });
        };
      return (i, t) => {
        const f = V("p-editor"),
          g = V("vue-final-modal");
        return r.value
          ? (S(), k("div", Ra, [v(na, { "page-loading": "" })]))
          : (S(),
            k("div", ra, [
              ca,
              a("div", da, [
                a("div", ua, [
                  pa,
                  E(
                    a(
                      "input",
                      {
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (s) => (e.value.name = s)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[M, e.value.name]]
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
                        t[1] ||
                        (t[1] = (s) => (e.value.privateMasterScreen = s)),
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
                      t[2] || (t[2] = (s) => (e.value.description = s)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: R(() => [ha]), _: 1 },
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
                          t[3] ||
                          (t[3] = (s) =>
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
                        disabled: w.value,
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
                      t[5] || (t[5] = (s) => (u.value = s)),
                    classes: "modal-container",
                  },
                  {
                    default: R(() => [
                      a("div", Ca, [
                        a("div", { class: "modal-header" }, [
                          wa,
                          a("button", { onClick: K }, Ia),
                        ]),
                        a("div", Da, [
                          Va,
                          Sa,
                          a("div", ka, [
                            E(
                              a(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    t[4] || (t[4] = (s) => (p.value = s)),
                                  type: "text",
                                  class: "input-primary",
                                  onKeyup: X(y, ["enter"]),
                                },
                                null,
                                40,
                                Ea
                              ),
                              [[M, p.value]]
                            ),
                            a(
                              "button",
                              {
                                class: "button-remove",
                                disabled: !T.value,
                                onClick: y,
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
  Oa = ta(xa, [["__scopeId", "data-v-641847a6"]]);
export { Oa as default };

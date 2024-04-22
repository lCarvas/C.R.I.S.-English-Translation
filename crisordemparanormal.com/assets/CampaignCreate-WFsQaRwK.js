import {
  d as T,
  g as U,
  M as V,
  u as k,
  r as d,
  e as M,
  f as B,
  w as D,
  i as S,
  o as v,
  c as _,
  a,
  x,
  y as N,
  k as m,
  v as h,
  T as P,
  Q as b,
  R as C,
  X as A,
  L as R,
  Y as q,
  P as E,
  A as G,
  m as H,
  p as O,
  b as F,
  C as $,
  _ as j,
} from "./index-R0omtfCh.js";
import { c as Q } from "./default-tJ6A0c0K.js";
import { v as X } from "./forms-8DDAOOVU.js";
import { L as Y } from "./LoadingView-3PnmBxfB.js";
import { S as z } from "./SwitchButtonBool-RRYQtpJ1.js";
import { T as J } from "./ToastNotification-UC8TDHNU.js";
import { g as K, h as W, a as Z } from "./firebase-M2_dwsIb.js";
const r = (l) => (O("data-v-87088ff2"), (l = l()), F(), l),
  aa = { key: 0 },
  ea = { class: "page-container" },
  ta = r(() => a("div", { class: "page-title" }, " Criar Campanha ", -1)),
  sa = { class: "form-container" },
  oa = { class: "input-container" },
  ia = r(() => a("div", { class: "label" }, " Nome* ", -1)),
  na = { class: "input-container" },
  ra = r(() =>
    a(
      "div",
      { class: "label" },
      [
        $(" Escudo do Mestre Privado "),
        a(
          "span",
          { class: "label-obs" },
          " Obs: essa opção pode ser editada após a criação da campanha "
        ),
      ],
      -1
    )
  ),
  la = r(() => a("div", { class: "label" }, " Descrição ", -1)),
  ua = r(() =>
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
  ca = { class: "buttons-container" },
  da = ["disabled"],
  ma = { key: 1 },
  pa = T({
    __name: "CampaignCreate",
    setup(l) {
      const o = U(),
        p = V(),
        y = k(),
        e = d(Q),
        u = d(!0),
        g = d(0),
        w = ["DESLIGADO", "LIGADO"],
        t = d({ message: "", type: "error", alive: !1, timeout: 0 });
      M(async () => {
        var n;
        o.currentUser &&
          ((g.value = await K((n = o.currentUser) == null ? void 0 : n.uid)),
          (u.value = !1));
      });
      const f = B(() => e.value.name === ""),
        I = async () => {
          if (!o.currentUser || f.value) return;
          if (
            ((u.value = !0),
            g.value < 4 && (await W("uid", o.currentUser.uid, "campaigns", Z)))
          ) {
            (u.value = !1),
              (t.value.message = "Limite de campanhas atingido"),
              (t.value.alive = !0);
            return;
          }
          const n = { uid: o.currentUser.uid, campaignLogMessages: [] },
            s = await b(C(p, "campaignLogs"), n);
          X(e.value),
            (e.value.campaignLogId = s.id),
            (e.value.uid = o.currentUser.uid),
            (e.value.joinId = crypto.randomUUID().substring(0, 13)),
            (e.value.timestamp = A());
          const c = await b(C(p, "campaigns"), e.value);
          await R(E(p, "users", o.currentUser.uid), { campaignsId: q(c.id) }),
            (e.value.name = ""),
            (e.value.description = ""),
            y.push({ name: "campaign-page", params: { id: c.id } });
        };
      D(
        () => t.value.alive,
        () => {
          t.value.alive === !0 &&
            (t.value.timeout = window.setTimeout(
              () => (t.value.alive = !1),
              3e3
            ));
        }
      );
      const L = () => {
        (t.value.alive = !1), clearTimeout(t.value.timeout);
      };
      return (n, s) => {
        const c = S("p-editor");
        return u.value
          ? (v(), _("div", ma, [m(Y, { "page-loading": "" })]))
          : (v(),
            _("div", aa, [
              a("div", ea, [
                ta,
                a("div", sa, [
                  a("div", oa, [
                    ia,
                    x(
                      a(
                        "input",
                        {
                          "onUpdate:modelValue":
                            s[0] || (s[0] = (i) => (e.value.name = i)),
                          type: "text",
                          class: "input-primary dark big-input",
                        },
                        null,
                        512
                      ),
                      [[N, e.value.name]]
                    ),
                  ]),
                  a("div", na, [
                    ra,
                    m(
                      z,
                      {
                        value: e.value.privateMasterScreen,
                        options: w,
                        onHandleChange:
                          s[1] ||
                          (s[1] = (i) => (e.value.privateMasterScreen = i)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  la,
                  m(
                    c,
                    {
                      modelValue: e.value.description,
                      "onUpdate:modelValue":
                        s[2] || (s[2] = (i) => (e.value.description = i)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: h(() => [ua]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                  a("div", ca, [
                    a(
                      "button",
                      {
                        class: "button-cancel",
                        onClick:
                          s[3] ||
                          (s[3] = (i) =>
                            n.$router.push({ name: "campaigns-list" })),
                      },
                      " Cancelar "
                    ),
                    a("div", null, [
                      a(
                        "button",
                        {
                          class: "button-primary big",
                          disabled: f.value,
                          onClick: I,
                        },
                        " Criar ",
                        8,
                        da
                      ),
                    ]),
                  ]),
                ]),
                m(
                  P,
                  { name: "toast" },
                  {
                    default: h(() => [
                      t.value.alive
                        ? (v(),
                          G(
                            J,
                            {
                              key: 0,
                              toast: t.value,
                              type: t.value.type,
                              onDismiss: L,
                            },
                            null,
                            8,
                            ["toast", "type"]
                          ))
                        : H("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]));
      };
    },
  }),
  ya = j(pa, [["__scopeId", "data-v-87088ff2"]]);
export { ya as default };

import {
  d as T,
  g as U,
  M as V,
  u as k,
  r as d,
  e as M,
  f as D,
  w as B,
  i as N,
  o as v,
  c as _,
  a,
  C as S,
  D as x,
  k as m,
  x as h,
  T as P,
  z as b,
  R as C,
  y as A,
  N as R,
  Y as q,
  P as H,
  v as E,
  m as G,
  p as O,
  b as F,
  H as $,
  _ as j,
} from "./index-_IEBVZw3.js";
import { c as z } from "./default-FmxCqAN8.js";
import { v as Y } from "./forms-8DDAOOVU.js";
import { L as J } from "./LoadingView-P3Ten1Qu.js";
import { S as K } from "./SwitchButtonBool-RM1MKLBr.js";
import { T as Q } from "./ToastNotification-7RF8hdNk.js";
import { g as W, h as X, a as Z } from "./firebase-Kh98738y.js";
const r = (l) => (O("data-v-87088ff2"), (l = l()), F(), l),
  aa = { key: 0 },
  ea = { class: "page-container" },
  ta = r(() => a("div", { class: "page-title" }, " Create Campaign ", -1)),
  sa = { class: "form-container" },
  oa = { class: "input-container" },
  ia = r(() => a("div", { class: "label" }, " Name* ", -1)),
  na = { class: "input-container" },
  ra = r(() =>
    a(
      "div",
      { class: "label" },
      [
        $(" Private GM Screen "),
        a(
          "span",
          { class: "label-obs" },
          " PS: this option can be changed after the campaign has been created "
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
        e = d(z),
        u = d(!0),
        g = d(0),
        w = ["OFF", "ON"],
        t = d({ message: "", type: "error", alive: !1, timeout: 0 });
      M(async () => {
        var n;
        o.currentUser &&
          ((g.value = await W((n = o.currentUser) == null ? void 0 : n.uid)),
          (u.value = !1));
      });
      const f = D(() => e.value.name === ""),
        I = async () => {
          if (!o.currentUser || f.value) return;
          if (
            ((u.value = !0),
            g.value < 4 && (await X("uid", o.currentUser.uid, "campaigns", Z)))
          ) {
            (u.value = !1),
              (t.value.message = "Campaign limit reached"),
              (t.value.alive = !0);
            return;
          }
          const n = { uid: o.currentUser.uid, campaignLogMessages: [] },
            s = await b(C(p, "campaignLogs"), n);
          Y(e.value),
            (e.value.campaignLogId = s.id),
            (e.value.uid = o.currentUser.uid),
            (e.value.joinId = crypto.randomUUID().substring(0, 13)),
            (e.value.timestamp = A());
          const c = await b(C(p, "campaigns"), e.value);
          await R(H(p, "users", o.currentUser.uid), { campaignsId: q(c.id) }),
            (e.value.name = ""),
            (e.value.description = ""),
            y.push({ name: "campaign-page", params: { id: c.id } });
        };
      B(
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
        const c = N("p-editor");
        return u.value
          ? (v(), _("div", ma, [m(J, { "page-loading": "" })]))
          : (v(),
            _("div", aa, [
              a("div", ea, [
                ta,
                a("div", sa, [
                  a("div", oa, [
                    ia,
                    S(
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
                      [[x, e.value.name]]
                    ),
                  ]),
                  a("div", na, [
                    ra,
                    m(
                      K,
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
                      " Cancel "
                    ),
                    a("div", null, [
                      a(
                        "button",
                        {
                          class: "button-primary big",
                          disabled: f.value,
                          onClick: I,
                        },
                        " Create ",
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
                          E(
                            Q,
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
                        : G("", !0),
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

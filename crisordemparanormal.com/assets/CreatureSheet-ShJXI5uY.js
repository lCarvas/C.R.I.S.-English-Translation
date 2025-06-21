import {
  d as M,
  g as S,
  M as H,
  S as y,
  r,
  u as B,
  e as R,
  A as j,
  P as N,
  i as z,
  o as s,
  c as d,
  a as A,
  H as p,
  m as f,
  v as U,
  k as h,
  x as D,
  L as O,
  p as T,
  b as $,
  N as F,
  _ as G,
} from "./index-t0mq17pV.js";
import { a as J } from "./creatures-9x9A3kYE.js";
import { C as K, A as Q } from "./ActionModal-FRAMR0H0.js";
import { L as W } from "./LoadingView-_iqLshHh.js";
import { g as X } from "./default-s9aktn1T.js";
import { v as k } from "./v4-cyCr5FZV.js";
import "./cultoDaCriacaoContent-lXBbI8k2.js";
import "./marcasFragmentadas-_RuPgcFI.js";
import "./lodash-gzw5KmHd.js";
import "./_commonjsHelpers-4gQjN7DL.js";
import "./edit-icon-3vZQUsyW.js";
import "./creatureData-R8saWVyd.js";
import "./d20-icon-vaz1En3o.js";
import "./show-more-icon-VvUXKiHG.js";
import "./TabNav-bhLeyoEJ.js";
import "./CardSource-eJp3pM5O.js";
import "./forms-elmqtkmr.js";
import "./DropdownSimple-zxeRj9hV.js";
const V = (c) => (T("data-v-6a2d37a5"), (c = c()), $(), c),
  Y = { key: 0 },
  Z = { class: "creature-sheet-container" },
  q = { key: 0, class: "info-container" },
  ee = V(() => A("br", null, null, -1)),
  ae = { key: 1, class: "info-container" },
  oe = V(() => A("br", null, null, -1)),
  te = { key: 0 },
  ne = { key: 1 },
  ie = M({
    __name: "CreatureSheet",
    setup(c) {
      const w = S(),
        C = H(),
        x = y().params.id,
        a = r(),
        g = B(),
        b = r(!0),
        u = r(!1),
        i = r(!1),
        v = r(),
        m = r("Action");
      R(async () => {
        if (!w.currentUser) return;
        const o = await j(N(C, "homebrewCreatures", x));
        if (o.data())
          (a.value = o.data()),
            (a.value.id = o == null ? void 0 : o.id),
            w.currentUser.uid === a.value.uid && (u.value = !0);
        else {
          const e = x.toLocaleLowerCase().split("_").join(" "),
            t = J.find((n) => n.name.toLocaleLowerCase() === e);
          t === void 0 ? g.push({ name: "not-found" }) : (a.value = t);
        }
        b.value = !1;
      });
      const _ = () => {
          u.value &&
            a.value &&
            F(N(C, "homebrewCreatures", a.value.id), a.value);
        },
        I = (o, e) => {
          a.value &&
            (e === "actions"
              ? a.value[e].push({ id: k(), name: "New Action" })
              : a.value[e].push({ id: k(), name: "New Power" }),
            _());
        },
        P = (o, e, t) => {
          if (!a.value) return;
          const n = a.value[t].findIndex((l) => l.id === e);
          n > -1 && a.value[t].splice(n, 1), _();
        },
        E = (o, e, t) => {
          if (((i.value = !0), t === "Action")) {
            const n = o.actions.findIndex((l) => l.id === e);
            (v.value = o.actions[n]), (m.value = "Action");
          } else {
            const n = o.powers.findIndex((l) => l.id === e);
            (v.value = o.powers[n]), (m.value = "Power");
          }
        },
        L = (o) => {
          if (v.value && a.value) {
            if (m.value === "Action") {
              const e = a.value.actions.findIndex((t) => t.id === o.id);
              e > -1 && (a.value.actions[e] = o);
            } else {
              const e = a.value.powers.findIndex((t) => t.id === o.id);
              e > -1 && (a.value.powers[e] = o);
            }
            _(), (i.value = !i.value);
          }
        };
      return (o, e) => {
        const t = z("vue-final-modal");
        return b.value
          ? (s(), d("div", ne, [h(W)]))
          : (s(),
            d("div", Y, [
              A("div", Z, [
                u.value
                  ? f("", !0)
                  : (s(),
                    d("div", q, [
                      p(
                        " This sheet is in view mode for information consultation only. "
                      ),
                      ee,
                      p(
                        "To use the sheet in game, you need to go to the campaign page, create an encounter and add the sheet to the encounter. "
                      ),
                    ])),
                u.value
                  ? (s(),
                    d("div", ae, [
                      p(" In this sheet you can edit the Actions and Powers. "),
                      oe,
                      p(
                        "To use the sheet in game, you need to go to the campaign page, create an encounter and add the sheet to the encounter. "
                      ),
                    ]))
                  : f("", !0),
                a.value
                  ? (s(),
                    U(
                      K,
                      {
                        key: 2,
                        creature: a.value,
                        disabled: !u.value,
                        "no-edit-button": "",
                        onHandleEditCreatureAction: E,
                        onHandleAdd: I,
                        onHandleRemoveAction: P,
                      },
                      null,
                      8,
                      ["creature", "disabled"]
                    ))
                  : f("", !0),
              ]),
              i.value
                ? (s(),
                  d("div", te, [
                    h(
                      t,
                      {
                        modelValue: i.value,
                        "onUpdate:modelValue":
                          e[1] || (e[1] = (n) => (i.value = n)),
                        classes: "modal-container",
                      },
                      {
                        default: D(() => [
                          h(
                            Q,
                            {
                              action: v.value || O(X),
                              title: m.value,
                              onHandleCloseModal:
                                e[0] || (e[0] = (n) => (i.value = !i.value)),
                              onHandleEditAction: L,
                            },
                            null,
                            8,
                            ["action", "title"]
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : f("", !0),
            ]));
      };
    },
  }),
  Ve = G(ie, [["__scopeId", "data-v-6a2d37a5"]]);
export { Ve as default };

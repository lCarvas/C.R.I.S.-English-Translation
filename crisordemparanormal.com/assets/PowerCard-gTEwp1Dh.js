import {
  d as f,
  r as M,
  u as B,
  o as t,
  c as s,
  a as o,
  J as r,
  j as n,
  m as i,
  t as l,
  k as b,
  v as H,
  T as I,
  I as S,
  p as R,
  b as L,
  _ as E,
} from "./index-sE6ml22p.js";
import { _ as D } from "./show-more-icon-VvUXKiHG.js";
import { _ as N } from "./add-icon-fJ4uQHUZ.js";
const v = (e) => (R("data-v-5e90856c"), (e = e()), L(), e),
  O = { class: "card" },
  T = v(() => o("img", { src: D, alt: "ver mais" }, null, -1)),
  g = [T],
  x = { key: 1, class: "button-container" },
  P = ["onClick"],
  V = v(() => o("img", { src: N, alt: "adicionar" }, null, -1)),
  j = [V],
  q = { key: 2, class: "button-container" },
  z = ["onClick", "onMouseup"],
  J = { key: 0 },
  $ = { class: "content" },
  F = { key: 0 },
  G = { class: "sheet-content" },
  K = { key: 1 },
  Q = ["innerHTML"],
  U = { key: 2, class: "card-footer" },
  W = ["onClick"],
  X = ["onClick"],
  Y = { key: 3, class: "card-footer" },
  Z = { class: "button-container" },
  ee = ["onClick", "onMouseup"],
  oe = f({
    __name: "PowerCard",
    props: {
      power: { type: Object, required: !0 },
      id: { type: String, default: "" },
      onlyShow: Boolean,
      sheet: Boolean,
      homebrew: Boolean,
      disabled: Boolean,
      homebrewList: Boolean,
      homebrewAdd: Boolean,
      canHomebrewAdd: Boolean,
    },
    emits: ["handleAdd", "handleRemove", "handleEdit", "handleAddHomebrew"],
    setup(e, { emit: _ }) {
      const d = e,
        c = _,
        a = M(!!d.homebrewAdd),
        k = B(),
        C = () => {
          c("handleAdd", d.power);
        },
        p = () => {
          c("handleRemove", d.id);
        },
        A = () => {
          c("handleEdit", d.power);
        },
        h = () => {
          c("handleAddHomebrew", d.power);
        },
        m = () => {
          const u = k.resolve({
            name: "homebrews-power",
            params: { id: d.id },
          });
          window.open(u.href, "_blank");
        },
        y = () => {
          d.homebrewAdd || (a.value = !a.value);
        };
      return (u, w) => (
        t(),
        s("div", O, [
          o(
            "div",
            {
              class: r(["header", { "homebrew-add": e.homebrewAdd }]),
              onClick: y,
            },
            [
              e.homebrewAdd
                ? i("", !0)
                : (t(),
                  s(
                    "button",
                    {
                      key: 0,
                      class: r(["show-more", { rotate: a.value }]),
                      onClick:
                        w[0] ||
                        (w[0] = n((te) => (a.value = !a.value), ["stop"])),
                    },
                    g,
                    2
                  )),
              o(
                "h3",
                { class: r(["title", { "sheet-title": e.sheet }]) },
                l(e.power.name),
                3
              ),
              !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                ? (t(),
                  s("div", x, [
                    o(
                      "button",
                      { class: "button-primary", onClick: n(C, ["stop"]) },
                      j,
                      8,
                      P
                    ),
                  ]))
                : i("", !0),
              e.homebrewList
                ? (t(),
                  s("div", q, [
                    o(
                      "button",
                      {
                        class: "button-secondary",
                        onClick: n(m, ["stop"]),
                        onMouseup: n(m, ["middle"]),
                      },
                      " SHARE ",
                      40,
                      z
                    ),
                  ]))
                : i("", !0),
            ],
            2
          ),
          b(
            I,
            { name: "card", mode: "out-in" },
            {
              default: H(() => [
                a.value
                  ? (t(),
                    s("div", J, [
                      b(S),
                      o("div", $, [
                        e.power.description[0] !== "<"
                          ? (t(),
                            s("div", F, [o("p", G, l(e.power.description), 1)]))
                          : (t(),
                            s("div", K, [
                              o(
                                "div",
                                {
                                  class: r({ "sheet-content": e.sheet }),
                                  innerHTML: e.power.description,
                                },
                                null,
                                10,
                                Q
                              ),
                            ])),
                        e.sheet && !e.disabled
                          ? (t(),
                            s("div", U, [
                              o(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick: n(p, ["stop"]),
                                },
                                l(e.homebrew ? "Delete" : "Remove"),
                                9,
                                W
                              ),
                              o(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick: n(A, ["stop"]),
                                },
                                " Edit ",
                                8,
                                X
                              ),
                            ]))
                          : i("", !0),
                        e.canHomebrewAdd
                          ? (t(),
                            s("div", Y, [
                              o("div", Z, [
                                o(
                                  "button",
                                  {
                                    class: "button-secondary",
                                    onClick: n(h, ["stop"]),
                                    onMouseup: n(h, ["middle"]),
                                  },
                                  " ADD TO MY COLLECTION ",
                                  40,
                                  ee
                                ),
                              ]),
                            ]))
                          : i("", !0),
                      ]),
                    ]))
                  : i("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  ae = E(oe, [["__scopeId", "data-v-5e90856c"]]);
export { ae as P };

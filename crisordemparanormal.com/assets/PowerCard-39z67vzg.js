import {
  d as y,
  r as M,
  u as B,
  o as s,
  c as n,
  a as o,
  a1 as l,
  j as t,
  m as r,
  t as h,
  k as b,
  x as H,
  T as S,
  a4 as I,
  p as R,
  b as L,
  _ as E,
} from "./index-CCe7Lu-B.js";
import { _ as x } from "./show-more-icon-VvUXKiHG.js";
import { _ as D } from "./add-icon-fJ4uQHUZ.js";
const v = (e) => (R("data-v-5df45b4a"), (e = e()), L(), e),
  N = { class: "card" },
  O = v(() => o("img", { src: x, alt: "ver mais" }, null, -1)),
  T = [O],
  g = { key: 1, class: "button-container" },
  P = ["onClick"],
  V = v(() => o("img", { src: D, alt: "adicionar" }, null, -1)),
  j = [V],
  q = { key: 2, class: "button-container" },
  z = ["onClick", "onMouseup"],
  $ = { key: 0 },
  F = { class: "content" },
  G = { key: 0 },
  J = { class: "sheet-content" },
  K = { key: 1 },
  Q = ["innerHTML"],
  U = { key: 2, class: "card-footer" },
  W = ["onClick"],
  X = ["onClick"],
  Y = { key: 3, class: "card-footer" },
  Z = { class: "button-container" },
  ee = ["onClick", "onMouseup"],
  oe = y({
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
    setup(e, { emit: k }) {
      const d = e,
        c = k,
        a = M(!!d.homebrewAdd),
        p = B(),
        _ = () => {
          c("handleAdd", d.power);
        },
        C = () => {
          c("handleRemove", d.id);
        },
        A = () => {
          c("handleEdit", d.power);
        },
        m = () => {
          c("handleAddHomebrew", d.power);
        },
        u = () => {
          const w = p.resolve({
            name: "homebrews-power",
            params: { id: d.id },
          });
          window.open(w.href, "_blank");
        },
        f = () => {
          d.homebrewAdd || (a.value = !a.value);
        };
      return (w, i) => (
        s(),
        n("div", N, [
          o(
            "div",
            {
              class: l(["header", { "homebrew-add": e.homebrewAdd }]),
              onClick: f,
            },
            [
              e.homebrewAdd
                ? r("", !0)
                : (s(),
                  n(
                    "button",
                    {
                      key: 0,
                      class: l(["show-more", { rotate: a.value }]),
                      onClick:
                        i[0] ||
                        (i[0] = t((te) => (a.value = !a.value), ["stop"])),
                    },
                    T,
                    2
                  )),
              o(
                "h3",
                { class: l(["title", { "sheet-title": e.sheet }]) },
                h(e.power.name),
                3
              ),
              !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                ? (s(),
                  n("div", g, [
                    o(
                      "button",
                      { class: "button-primary", onClick: t(_, ["stop"]) },
                      j,
                      8,
                      P
                    ),
                  ]))
                : r("", !0),
              e.homebrewList
                ? (s(),
                  n("div", q, [
                    o(
                      "button",
                      {
                        class: "button-secondary",
                        onClick: t(u, ["stop"]),
                        onMouseup: t(u, ["middle"]),
                        onMousedown:
                          i[1] ||
                          (i[1] = t(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " SHARE ",
                      40,
                      z
                    ),
                  ]))
                : r("", !0),
            ],
            2
          ),
          b(
            S,
            { name: "card", mode: "out-in" },
            {
              default: H(() => [
                a.value
                  ? (s(),
                    n("div", $, [
                      b(I),
                      o("div", F, [
                        e.power.description[0] !== "<"
                          ? (s(),
                            n("div", G, [o("p", J, h(e.power.description), 1)]))
                          : (s(),
                            n("div", K, [
                              o(
                                "div",
                                {
                                  class: l([
                                    "description",
                                    { "sheet-content": e.sheet },
                                  ]),
                                  innerHTML: e.power.description,
                                },
                                null,
                                10,
                                Q
                              ),
                            ])),
                        e.sheet && !e.disabled
                          ? (s(),
                            n("div", U, [
                              o(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick: t(C, ["stop"]),
                                },
                                h(e.homebrew ? "Delete" : "Remove"),
                                9,
                                W
                              ),
                              o(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick: t(A, ["stop"]),
                                },
                                " Edit ",
                                8,
                                X
                              ),
                            ]))
                          : r("", !0),
                        e.canHomebrewAdd
                          ? (s(),
                            n("div", Y, [
                              o("div", Z, [
                                o(
                                  "button",
                                  {
                                    class: "button-secondary",
                                    onClick: t(m, ["stop"]),
                                    onMouseup: t(m, ["middle"]),
                                    onMousedown:
                                      i[2] ||
                                      (i[2] = t(() => {}, [
                                        "middle",
                                        "prevent",
                                        "stop",
                                      ])),
                                  },
                                  " ADD TO MY COLLECTION ",
                                  40,
                                  ee
                                ),
                              ]),
                            ]))
                          : r("", !0),
                      ]),
                    ]))
                  : r("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  ae = E(oe, [["__scopeId", "data-v-5df45b4a"]]);
export { ae as P };

import {
  d as I,
  Q as S,
  r as N,
  u as T,
  f as D,
  o as i,
  c as o,
  a as t,
  a1 as c,
  j as l,
  m as n,
  t as s,
  k as y,
  x as O,
  T as V,
  a4 as _,
  H as u,
  p as $,
  b as j,
  _ as q,
} from "./index-G0kqgsTS.js";
import { _ as z } from "./show-more-icon-VvUXKiHG.js";
import { _ as P } from "./add-icon-fJ4uQHUZ.js";
import { _ as w } from "./d20-icon-vaz1En3o.js";
const r = (e) => ($("data-v-31bd023d"), (e = e()), j(), e),
  Q = { class: "card" },
  U = r(() => t("img", { src: z, alt: "ver mais" }, null, -1)),
  F = [U],
  G = { key: 1, class: "button-container" },
  J = ["onClick"],
  K = r(() => t("img", { src: P, alt: "adicionar" }, null, -1)),
  W = [K],
  X = { key: 2, class: "button-container" },
  Y = ["onClick", "onMouseup"],
  Z = { key: 0, class: "dices-row" },
  p = { key: 0, class: "dice-container" },
  ee = r(() => t("div", { class: "dice-container-title" }, " NORMAL ", -1)),
  te = { class: "dice-container-row" },
  ie = ["title"],
  oe = { class: "dice-button-container" },
  ne = ["disabled"],
  ae = r(() => t("img", { src: w, alt: "rolar", class: "roll-img" }, null, -1)),
  se = [ae],
  le = { key: 1, class: "dice-container" },
  de = r(() => t("div", { class: "dice-container-title" }, " ADVANCED ", -1)),
  ce = { class: "dice-container-row" },
  re = ["title"],
  ue = { class: "dice-button-container" },
  he = ["disabled"],
  me = r(() => t("img", { src: w, alt: "rolar", class: "roll-img" }, null, -1)),
  ve = [me],
  be = { key: 2, class: "dice-container" },
  fe = r(() => t("div", { class: "dice-container-title" }, " TRUE ", -1)),
  we = { class: "dice-container-row" },
  ke = ["title"],
  Ce = { class: "dice-button-container" },
  Ae = ["disabled"],
  De = r(() => t("img", { src: w, alt: "rolar", class: "roll-img" }, null, -1)),
  ye = [De],
  Re = { key: 0 },
  ge = { class: "ritual-circle" },
  Ee = { class: "ritual-info" },
  Me = { class: "ritual-info" },
  Le = { key: 0, class: "ritual-info" },
  xe = { key: 1, class: "ritual-info" },
  Be = { key: 2, class: "ritual-info" },
  He = { key: 3, class: "ritual-info" },
  Ie = { key: 4, class: "ritual-info" },
  Se = { class: "content" },
  Ne = ["innerHTML"],
  Te = { key: 0, class: "card-footer" },
  Oe = ["onClick"],
  Ve = ["onClick"],
  _e = { key: 1, class: "card-footer" },
  $e = { class: "button-container" },
  je = ["onClick", "onMouseup"],
  qe = I({
    __name: "RitualCard",
    props: {
      ritual: { type: Object, required: !0 },
      id: { type: String, default: "" },
      onlyShow: Boolean,
      sheet: Boolean,
      homebrew: Boolean,
      disabled: Boolean,
      homebrewList: Boolean,
      homebrewAdd: Boolean,
      canHomebrewAdd: Boolean,
    },
    emits: [
      "handleAdd",
      "handleRemove",
      "handleEdit",
      "handleRollRitual",
      "handleAddHomebrew",
    ],
    setup(e, { emit: R }) {
      S((v) => ({ "4ae6ca17": k.value, "513b4038": M.value }));
      const d = e,
        m = R,
        g = {
          knowledge: "#ff8c00",
          energy: "#7000AC",
          death: "#121212",
          blood: "#d9534f",
          fear: "#dae4e6",
          varies: "#fff",
        },
        h = N(!!d.homebrewAdd),
        E = T(),
        k = D(() => g[d.ritual.element.toLowerCase()]),
        M = D(() => (k.value === "#fff" || k.value === "#dae4e6" ? "#121212" : "#fff")),
        L = () => {
          m("handleAdd", d.ritual);
        },
        x = () => {
          m("handleRemove", d.id);
        },
        B = () => {
          m("handleEdit", d.ritual);
        },
        b = (v, a) => {
          d.disabled || m("handleRollRitual", v, a);
        },
        C = () => {
          m("handleAddHomebrew", d.ritual);
        },
        A = () => {
          const v = E.resolve({
            name: "homebrews-ritual",
            params: { id: d.id },
          });
          window.open(v.href, "_blank");
        },
        H = () => {
          d.homebrewAdd || (h.value = !h.value);
        };
      return (v, a) => (
        i(),
        o("div", Q, [
          t(
            "div",
            {
              class: c(["header", { "homebrew-add": e.homebrewAdd }]),
              onClick: H,
            },
            [
              e.homebrewAdd
                ? n("", !0)
                : (i(),
                  o(
                    "button",
                    {
                      key: 0,
                      class: c(["show-more", { rotate: h.value }]),
                      onClick:
                        a[0] ||
                        (a[0] = l((f) => (h.value = !h.value), ["stop"])),
                    },
                    F,
                    2
                  )),
              t(
                "h3",
                { class: c(["title", { "sheet-title": e.sheet }]) },
                s(e.ritual.name),
                3
              ),
              !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                ? (i(),
                  o("div", G, [
                    t(
                      "button",
                      { class: "button-primary", onClick: l(L, ["stop"]) },
                      W,
                      8,
                      J
                    ),
                  ]))
                : n("", !0),
              e.homebrewList
                ? (i(),
                  o("div", X, [
                    t(
                      "button",
                      {
                        class: "button-secondary",
                        onClick: l(A, ["stop"]),
                        onMouseup: l(A, ["middle"]),
                        onMousedown:
                          a[1] ||
                          (a[1] = l(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " SHARE ",
                      40,
                      Y
                    ),
                  ]))
                : n("", !0),
            ],
            2
          ),
          e.sheet &&
          (e.ritual.normalDice ||
            e.ritual.discenteDice ||
            e.ritual.verdadeiroDice)
            ? (i(),
              o("div", Z, [
                e.ritual.normalDice
                  ? (i(),
                    o("div", p, [
                      ee,
                      t("div", te, [
                        t(
                          "div",
                          {
                            class: "dice-container-value",
                            title: e.ritual.normalDice,
                          },
                          s(e.ritual.normalDice),
                          9,
                          ie
                        ),
                        t("div", oe, [
                          t(
                            "button",
                            {
                              class: c([
                                "roll-button",
                                { disabled: e.disabled },
                              ]),
                              disabled: e.disabled,
                              onClick:
                                a[2] ||
                                (a[2] = (f) =>
                                  b(e.ritual.name, e.ritual.normalDice)),
                            },
                            se,
                            10,
                            ne
                          ),
                        ]),
                      ]),
                    ]))
                  : n("", !0),
                e.ritual.discenteDice
                  ? (i(),
                    o("div", le, [
                      de,
                      t("div", ce, [
                        t(
                          "div",
                          {
                            class: "dice-container-value",
                            title: e.ritual.discenteDice,
                          },
                          s(e.ritual.discenteDice),
                          9,
                          re
                        ),
                        t("div", ue, [
                          t(
                            "button",
                            {
                              class: c([
                                "roll-button",
                                { disabled: e.disabled },
                              ]),
                              disabled: e.disabled,
                              onClick:
                                a[3] ||
                                (a[3] = (f) =>
                                  b(e.ritual.name, e.ritual.discenteDice)),
                            },
                            ve,
                            10,
                            he
                          ),
                        ]),
                      ]),
                    ]))
                  : n("", !0),
                e.ritual.verdadeiroDice
                  ? (i(),
                    o("div", be, [
                      fe,
                      t("div", we, [
                        t(
                          "div",
                          {
                            class: "dice-container-value",
                            title: e.ritual.verdadeiroDice,
                          },
                          s(e.ritual.verdadeiroDice),
                          9,
                          ke
                        ),
                        t("div", Ce, [
                          t(
                            "button",
                            {
                              class: c([
                                "roll-button",
                                { disabled: e.disabled },
                              ]),
                              disabled: e.disabled,
                              onClick:
                                a[4] ||
                                (a[4] = (f) =>
                                  b(e.ritual.name, e.ritual.verdadeiroDice)),
                            },
                            ye,
                            10,
                            Ae
                          ),
                        ]),
                      ]),
                    ]))
                  : n("", !0),
              ]))
            : n("", !0),
          y(
            V,
            { name: "card", mode: "out-in" },
            {
              default: O(() => [
                h.value
                  ? (i(),
                    o("div", Re, [
                      y(_),
                      t(
                        "div",
                        {
                          class: c([
                            "ritual-info-container",
                            { "sheet-content": e.sheet },
                          ]),
                        },
                        [
                          t("div", ge, [
                            t(
                              "h3",
                              null,
                              s(e.ritual.element.toUpperCase()) +
                                " " +
                                s(e.ritual.circle),
                              1
                            ),
                          ]),
                          t("div", Ee, [
                            t("h3", null, [
                              u("Execution: "),
                              t(
                                "span",
                                null,
                                s(e.ritual.execution.toLocaleLowerCase()),
                                1
                              ),
                            ]),
                          ]),
                          t("div", Me, [
                            t("h3", null, [
                              u("Range: "),
                              t(
                                "span",
                                null,
                                s(e.ritual.range.toLocaleLowerCase()),
                                1
                              ),
                            ]),
                          ]),
                          e.ritual.area
                            ? (i(),
                              o("div", Le, [
                                t("h3", null, [
                                  u("Area: "),
                                  t("span", null, s(e.ritual.area), 1),
                                ]),
                              ]))
                            : n("", !0),
                          e.ritual.target
                            ? (i(),
                              o("div", xe, [
                                t("h3", null, [
                                  u("Target: "),
                                  t("span", null, s(e.ritual.target), 1),
                                ]),
                              ]))
                            : n("", !0),
                          e.ritual.effect
                            ? (i(),
                              o("div", Be, [
                                t("h3", null, [
                                  u("Effect: "),
                                  t("span", null, s(e.ritual.effect), 1),
                                ]),
                              ]))
                            : n("", !0),
                          e.ritual.duration
                            ? (i(),
                              o("div", He, [
                                t("h3", null, [
                                  u("Duration: "),
                                  t("span", null, s(e.ritual.duration), 1),
                                ]),
                              ]))
                            : n("", !0),
                          e.ritual.save
                            ? (i(),
                              o("div", Ie, [
                                t("h3", null, [
                                  u("Saving Throw: "),
                                  t("span", null, s(e.ritual.save), 1),
                                ]),
                              ]))
                            : n("", !0),
                        ],
                        2
                      ),
                      t("div", Se, [
                        t(
                          "div",
                          {
                            class: c([
                              "description",
                              { "sheet-content": e.sheet },
                            ]),
                            innerHTML: e.ritual.description,
                          },
                          null,
                          10,
                          Ne
                        ),
                        e.sheet && !e.disabled
                          ? (i(),
                            o("div", Te, [
                              t(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick: l(x, ["stop"]),
                                },
                                s(e.homebrew ? "Delete" : "Remove"),
                                9,
                                Oe
                              ),
                              t(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick: l(B, ["stop"]),
                                },
                                " Editar ",
                                8,
                                Ve
                              ),
                            ]))
                          : n("", !0),
                        e.canHomebrewAdd
                          ? (i(),
                            o("div", _e, [
                              t("div", $e, [
                                t(
                                  "button",
                                  {
                                    class: "button-secondary",
                                    onClick: l(C, ["stop"]),
                                    onMouseup: l(C, ["middle"]),
                                    onMousedown:
                                      a[5] ||
                                      (a[5] = l(() => {}, [
                                        "middle",
                                        "prevent",
                                        "stop",
                                      ])),
                                  },
                                  " SAVE TO MY COLLECTION ",
                                  40,
                                  je
                                ),
                              ]),
                            ]))
                          : n("", !0),
                      ]),
                    ]))
                  : n("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  Fe = q(qe, [["__scopeId", "data-v-31bd023d"]]);
export { Fe as R };

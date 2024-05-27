import {
  d as _,
  O as x,
  r as H,
  u as N,
  f as D,
  o as i,
  c as o,
  a as t,
  J as d,
  j as c,
  m as a,
  t as n,
  k as y,
  v as O,
  T,
  I as V,
  C as u,
  p as $,
  b as j,
  _ as q,
} from "./index-sE6ml22p.js";
import { _ as z } from "./show-more-icon-VvUXKiHG.js";
import { _ as J } from "./add-icon-fJ4uQHUZ.js";
import { _ as w } from "./d20-icon-vaz1En3o.js";
const r = (e) => ($("data-v-6f0e5c34"), (e = e()), j(), e),
  P = { class: "card" },
  U = r(() => t("img", { src: z, alt: "ver mais" }, null, -1)),
  F = [U],
  G = { key: 1, class: "button-container" },
  K = ["onClick"],
  Q = r(() => t("img", { src: J, alt: "adicionar" }, null, -1)),
  W = [Q],
  X = { key: 2, class: "button-container" },
  Y = ["onClick", "onMouseup"],
  Z = { key: 0, class: "dices-row" },
  p = { key: 0, class: "dice-container" },
  ee = r(() => t("div", { class: "dice-container-title" }, " NORMAL ", -1)),
  te = { class: "dice-container-row" },
  ie = ["title"],
  oe = { class: "dice-button-container" },
  ae = ["disabled"],
  ne = r(() => t("img", { src: w, alt: "rolar", class: "roll-img" }, null, -1)),
  se = [ne],
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
  Ce = ["title"],
  ke = { class: "dice-button-container" },
  Ae = ["disabled"],
  De = r(() => t("img", { src: w, alt: "rolar", class: "roll-img" }, null, -1)),
  ye = [De],
  Re = { key: 0 },
  ge = { class: "ritual-circle" },
  Ee = { class: "ritual-info" },
  Le = { class: "ritual-info" },
  Me = { key: 0, class: "ritual-info" },
  Ie = { key: 1, class: "ritual-info" },
  Be = { key: 2, class: "ritual-info" },
  Se = { key: 3, class: "ritual-info" },
  _e = { key: 4, class: "ritual-info" },
  xe = { class: "content" },
  He = ["innerHTML"],
  Ne = { key: 0, class: "card-footer" },
  Oe = ["onClick"],
  Te = ["onClick"],
  Ve = { key: 1, class: "card-footer" },
  $e = { class: "button-container" },
  je = ["onClick", "onMouseup"],
  qe = _({
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
      x((v) => ({ "47a33b56": C.value, "51f619a3": L.value }));
      const l = e,
        m = R,
        g = {
          knowledge: "#ff8c00",
          energy: "#7000AC",
          death: "#121212",
          blood: "#d9534f",
          fear: "#dae4e6",
          varies: "#fff",
        },
        h = H(!!l.homebrewAdd),
        E = N(),
        C = D(() => g[l.ritual.element.toLowerCase()]),
        L = D(() => (C.value === "#fff" || "#dae4e6" ? "#121212" : "#fff")),
        M = () => {
          m("handleAdd", l.ritual);
        },
        I = () => {
          m("handleRemove", l.id);
        },
        B = () => {
          m("handleEdit", l.ritual);
        },
        b = (v, s) => {
          l.disabled || m("handleRollRitual", v, s);
        },
        k = () => {
          m("handleAddHomebrew", l.ritual);
        },
        A = () => {
          const v = E.resolve({
            name: "homebrews-ritual",
            params: { id: l.id },
          });
          window.open(v.href, "_blank");
        },
        S = () => {
          l.homebrewAdd || (h.value = !h.value);
        };
      return (v, s) => (
        i(),
        o("div", P, [
          t(
            "div",
            {
              class: d(["header", { "homebrew-add": e.homebrewAdd }]),
              onClick: S,
            },
            [
              e.homebrewAdd
                ? a("", !0)
                : (i(),
                  o(
                    "button",
                    {
                      key: 0,
                      class: d(["show-more", { rotate: h.value }]),
                      onClick:
                        s[0] ||
                        (s[0] = c((f) => (h.value = !h.value), ["stop"])),
                    },
                    F,
                    2
                  )),
              t(
                "h3",
                { class: d(["title", { "sheet-title": e.sheet }]) },
                n(e.ritual.name),
                3
              ),
              !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                ? (i(),
                  o("div", G, [
                    t(
                      "button",
                      { class: "button-primary", onClick: c(M, ["stop"]) },
                      W,
                      8,
                      K
                    ),
                  ]))
                : a("", !0),
              e.homebrewList
                ? (i(),
                  o("div", X, [
                    t(
                      "button",
                      {
                        class: "button-secondary",
                        onClick: c(A, ["stop"]),
                        onMouseup: c(A, ["middle"]),
                      },
                      " SHARE ",
                      40,
                      Y
                    ),
                  ]))
                : a("", !0),
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
                          n(e.ritual.normalDice),
                          9,
                          ie
                        ),
                        t("div", oe, [
                          t(
                            "button",
                            {
                              class: d([
                                "roll-button",
                                { disabled: e.disabled },
                              ]),
                              disabled: e.disabled,
                              onClick:
                                s[1] ||
                                (s[1] = (f) =>
                                  b(e.ritual.name, e.ritual.normalDice)),
                            },
                            se,
                            10,
                            ae
                          ),
                        ]),
                      ]),
                    ]))
                  : a("", !0),
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
                          n(e.ritual.discenteDice),
                          9,
                          re
                        ),
                        t("div", ue, [
                          t(
                            "button",
                            {
                              class: d([
                                "roll-button",
                                { disabled: e.disabled },
                              ]),
                              disabled: e.disabled,
                              onClick:
                                s[2] ||
                                (s[2] = (f) =>
                                  b(e.ritual.name, e.ritual.discenteDice)),
                            },
                            ve,
                            10,
                            he
                          ),
                        ]),
                      ]),
                    ]))
                  : a("", !0),
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
                          n(e.ritual.verdadeiroDice),
                          9,
                          Ce
                        ),
                        t("div", ke, [
                          t(
                            "button",
                            {
                              class: d([
                                "roll-button",
                                { disabled: e.disabled },
                              ]),
                              disabled: e.disabled,
                              onClick:
                                s[3] ||
                                (s[3] = (f) =>
                                  b(e.ritual.name, e.ritual.verdadeiroDice)),
                            },
                            ye,
                            10,
                            Ae
                          ),
                        ]),
                      ]),
                    ]))
                  : a("", !0),
              ]))
            : a("", !0),
          y(
            T,
            { name: "card", mode: "out-in" },
            {
              default: O(() => [
                h.value
                  ? (i(),
                    o("div", Re, [
                      y(V),
                      t(
                        "div",
                        {
                          class: d([
                            "ritual-info-container",
                            { "sheet-content": e.sheet },
                          ]),
                        },
                        [
                          t("div", ge, [
                            t(
                              "h3",
                              null,
                              n(e.ritual.element.toUpperCase()) +
                                " " +
                                n(e.ritual.circle),
                              1
                            ),
                          ]),
                          t("div", Ee, [
                            t("h3", null, [
                              u("Cast Time: "),
                              t(
                                "span",
                                null,
                                n(e.ritual.execution.toLocaleLowerCase()),
                                1
                              ),
                            ]),
                          ]),
                          t("div", Le, [
                            t("h3", null, [
                              u("Range: "),
                              t(
                                "span",
                                null,
                                n(e.ritual.range.toLocaleLowerCase()),
                                1
                              ),
                            ]),
                          ]),
                          e.ritual.area
                            ? (i(),
                              o("div", Me, [
                                t("h3", null, [
                                  u("Area: "),
                                  t("span", null, n(e.ritual.area), 1),
                                ]),
                              ]))
                            : a("", !0),
                          e.ritual.target
                            ? (i(),
                              o("div", Ie, [
                                t("h3", null, [
                                  u("Target: "),
                                  t("span", null, n(e.ritual.target), 1),
                                ]),
                              ]))
                            : a("", !0),
                          e.ritual.effect
                            ? (i(),
                              o("div", Be, [
                                t("h3", null, [
                                  u("Effect: "),
                                  t("span", null, n(e.ritual.effect), 1),
                                ]),
                              ]))
                            : a("", !0),
                          e.ritual.duration
                            ? (i(),
                              o("div", Se, [
                                t("h3", null, [
                                  u("Duration: "),
                                  t("span", null, n(e.ritual.duration), 1),
                                ]),
                              ]))
                            : a("", !0),
                          e.ritual.save
                            ? (i(),
                              o("div", _e, [
                                t("h3", null, [
                                  u("Saving Throw: "),
                                  t("span", null, n(e.ritual.save), 1),
                                ]),
                              ]))
                            : a("", !0),
                        ],
                        2
                      ),
                      t("div", xe, [
                        t(
                          "div",
                          {
                            class: d({ "sheet-content": e.sheet }),
                            innerHTML: e.ritual.description,
                          },
                          null,
                          10,
                          He
                        ),
                        e.sheet && !e.disabled
                          ? (i(),
                            o("div", Ne, [
                              t(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick: c(I, ["stop"]),
                                },
                                n(e.homebrew ? "Delete" : "Remove"),
                                9,
                                Oe
                              ),
                              t(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick: c(B, ["stop"]),
                                },
                                " Edit ",
                                8,
                                Te
                              ),
                            ]))
                          : a("", !0),
                        e.canHomebrewAdd
                          ? (i(),
                            o("div", Ve, [
                              t("div", $e, [
                                t(
                                  "button",
                                  {
                                    class: "button-secondary",
                                    onClick: c(k, ["stop"]),
                                    onMouseup: c(k, ["middle"]),
                                  },
                                  " SAVE TO MY COLLECTION ",
                                  40,
                                  je
                                ),
                              ]),
                            ]))
                          : a("", !0),
                      ]),
                    ]))
                  : a("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  Fe = q(qe, [["__scopeId", "data-v-6f0e5c34"]]);
export { Fe as R };

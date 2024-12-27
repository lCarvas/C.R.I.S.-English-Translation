import {
  d as N,
  Q as T,
  r as R,
  u as O,
  f as g,
  i as $,
  o,
  c as a,
  a as t,
  a1 as c,
  j as s,
  m as l,
  t as n,
  k,
  x as L,
  T as U,
  n as j,
  a4 as P,
  H as u,
  p as q,
  b as z,
  _ as F,
} from "./index-y5xotY6D.js";
import { _ as Q } from "./show-more-icon-VvUXKiHG.js";
import { _ as G } from "./add-icon-fJ4uQHUZ.js";
import { _ as C } from "./d20-icon-vaz1En3o.js";
const r = (e) => (q("data-v-80c079ba"), (e = e()), z(), e),
  J = { class: "card" },
  K = r(() => t("img", { src: Q, alt: "ver mais" }, null, -1)),
  W = [K],
  X = { key: 1, class: "button-container" },
  Y = ["onClick"],
  Z = r(() => t("img", { src: G, alt: "adicionar" }, null, -1)),
  p = [Z],
  ee = { key: 2, class: "button-container" },
  te = ["onClick", "onMouseup"],
  ie = { key: 0, class: "dices-row" },
  oe = { key: 0, class: "dice-container" },
  ae = r(() => t("div", { class: "dice-container-title" }, " NORMAL ", -1)),
  le = { class: "dice-container-row" },
  ne = ["title"],
  se = { class: "dice-button-container" },
  de = ["disabled"],
  ce = r(() => t("img", { src: C, alt: "rolar", class: "roll-img" }, null, -1)),
  re = [ce],
  ue = { key: 1, class: "dice-container" },
  he = r(() => t("div", { class: "dice-container-title" }, " ADVANCED ", -1)),
  me = { class: "dice-container-row" },
  ve = ["title"],
  be = { class: "dice-button-container" },
  fe = ["disabled"],
  we = r(() => t("img", { src: C, alt: "rolar", class: "roll-img" }, null, -1)),
  ke = [we],
  Ce = { key: 2, class: "dice-container" },
  ye = r(() => t("div", { class: "dice-container-title" }, " TRUE ", -1)),
  Ae = { class: "dice-container-row" },
  De = ["title"],
  Re = { class: "dice-button-container" },
  ge = ["disabled"],
  Le = r(() => t("img", { src: C, alt: "rolar", class: "roll-img" }, null, -1)),
  Me = [Le],
  Ee = { key: 0 },
  xe = { class: "card-info-image-container" },
  Be = { class: "ritual-circle" },
  He = { class: "ritual-info" },
  Ie = { class: "ritual-info" },
  Se = { key: 0, class: "ritual-info" },
  Ve = { key: 1, class: "ritual-info" },
  _e = { key: 2, class: "ritual-info" },
  Ne = { key: 3, class: "ritual-info" },
  Te = { key: 4, class: "ritual-info" },
  Oe = ["src"],
  $e = { class: "content" },
  Ue = ["innerHTML"],
  je = { key: 0, class: "card-footer" },
  Pe = ["onClick"],
  qe = ["onClick"],
  ze = { key: 1, class: "card-footer" },
  Fe = { class: "button-container" },
  Qe = ["onClick", "onMouseup"],
  Ge = { key: 0 },
  Je = ["src"],
  Ke = N({
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
    setup(e, { emit: M }) {
      T((b) => ({ "09b4ed24": y.value, "6d1e3471": B.value }));
      const d = e,
        v = M,
        E = {
          knowledge: "#ff8c00",
          energy: "#7000AC",
          death: "#121212",
          blood: "#d9534f",
          fear: "#dae4e6",
          varies: "#fff",
        },
        h = R(!!d.homebrewAdd),
        x = O(),
        f = R(!1),
        y = g(() => E[d.ritual.element.toLowerCase()]),
        B = g(() => (y.value === "#fff" || y.value === "#dae4e6" ? "#121212" : "#fff")),
        H = () => {
          v("handleAdd", d.ritual);
        },
        I = () => {
          v("handleRemove", d.id);
        },
        S = () => {
          v("handleEdit", d.ritual);
        },
        w = (b, i) => {
          d.disabled || v("handleRollRitual", b, i);
        },
        A = () => {
          v("handleAddHomebrew", d.ritual);
        },
        D = () => {
          const b = x.resolve({
            name: "homebrews-ritual",
            params: { id: d.id },
          });
          window.open(b.href, "_blank");
        },
        V = () => {
          d.homebrewAdd || (h.value = !h.value);
        };
      return (b, i) => {
        const _ = $("vue-final-modal");
        return (
          o(),
          a(
            j,
            null,
            [
              t("div", J, [
                t(
                  "div",
                  {
                    class: c(["header", { "homebrew-add": e.homebrewAdd }]),
                    onClick: V,
                  },
                  [
                    e.homebrewAdd
                      ? l("", !0)
                      : (o(),
                        a(
                          "button",
                          {
                            key: 0,
                            class: c(["show-more", { rotate: h.value }]),
                            onClick:
                              i[0] ||
                              (i[0] = s((m) => (h.value = !h.value), ["stop"])),
                          },
                          W,
                          2
                        )),
                    t(
                      "h3",
                      { class: c(["title", { "sheet-title": e.sheet }]) },
                      n(e.ritual.name),
                      3
                    ),
                    !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                      ? (o(),
                        a("div", X, [
                          t(
                            "button",
                            {
                              class: "button-primary",
                              onClick: s(H, ["stop"]),
                            },
                            p,
                            8,
                            Y
                          ),
                        ]))
                      : l("", !0),
                    e.homebrewList
                      ? (o(),
                        a("div", ee, [
                          t(
                            "button",
                            {
                              class: "button-secondary",
                              onClick: s(D, ["stop"]),
                              onMouseup: s(D, ["middle"]),
                              onMousedown:
                                i[1] ||
                                (i[1] = s(() => {}, [
                                  "middle",
                                  "prevent",
                                  "stop",
                                ])),
                            },
                            " SHARE ",
                            40,
                            te
                          ),
                        ]))
                      : l("", !0),
                  ],
                  2
                ),
                e.sheet &&
                (e.ritual.normalDice ||
                  e.ritual.discenteDice ||
                  e.ritual.verdadeiroDice)
                  ? (o(),
                    a("div", ie, [
                      e.ritual.normalDice
                        ? (o(),
                          a("div", oe, [
                            ae,
                            t("div", le, [
                              t(
                                "div",
                                {
                                  class: "dice-container-value",
                                  title: e.ritual.normalDice,
                                },
                                n(e.ritual.normalDice),
                                9,
                                ne
                              ),
                              t("div", se, [
                                t(
                                  "button",
                                  {
                                    class: c([
                                      "roll-button",
                                      { disabled: e.disabled },
                                    ]),
                                    disabled: e.disabled,
                                    onClick:
                                      i[2] ||
                                      (i[2] = (m) =>
                                        w(e.ritual.name, e.ritual.normalDice)),
                                  },
                                  re,
                                  10,
                                  de
                                ),
                              ]),
                            ]),
                          ]))
                        : l("", !0),
                      e.ritual.discenteDice
                        ? (o(),
                          a("div", ue, [
                            he,
                            t("div", me, [
                              t(
                                "div",
                                {
                                  class: "dice-container-value",
                                  title: e.ritual.discenteDice,
                                },
                                n(e.ritual.discenteDice),
                                9,
                                ve
                              ),
                              t("div", be, [
                                t(
                                  "button",
                                  {
                                    class: c([
                                      "roll-button",
                                      { disabled: e.disabled },
                                    ]),
                                    disabled: e.disabled,
                                    onClick:
                                      i[3] ||
                                      (i[3] = (m) =>
                                        w(
                                          e.ritual.name,
                                          e.ritual.discenteDice
                                        )),
                                  },
                                  ke,
                                  10,
                                  fe
                                ),
                              ]),
                            ]),
                          ]))
                        : l("", !0),
                      e.ritual.verdadeiroDice
                        ? (o(),
                          a("div", Ce, [
                            ye,
                            t("div", Ae, [
                              t(
                                "div",
                                {
                                  class: "dice-container-value",
                                  title: e.ritual.verdadeiroDice,
                                },
                                n(e.ritual.verdadeiroDice),
                                9,
                                De
                              ),
                              t("div", Re, [
                                t(
                                  "button",
                                  {
                                    class: c([
                                      "roll-button",
                                      { disabled: e.disabled },
                                    ]),
                                    disabled: e.disabled,
                                    onClick:
                                      i[4] ||
                                      (i[4] = (m) =>
                                        w(
                                          e.ritual.name,
                                          e.ritual.verdadeiroDice
                                        )),
                                  },
                                  Me,
                                  10,
                                  ge
                                ),
                              ]),
                            ]),
                          ]))
                        : l("", !0),
                    ]))
                  : l("", !0),
                k(
                  U,
                  { name: "card", mode: "out-in" },
                  {
                    default: L(() => [
                      h.value
                        ? (o(),
                          a("div", Ee, [
                            k(P),
                            t(
                              "div",
                              {
                                class: c([
                                  "ritual-info-container",
                                  { "sheet-content": e.sheet },
                                ]),
                              },
                              [
                                t("div", xe, [
                                  t("div", null, [
                                    t("div", Be, [
                                      t(
                                        "h3",
                                        null,
                                        n(e.ritual.element.toUpperCase()) +
                                          " " +
                                          n(e.ritual.circle),
                                        1
                                      ),
                                    ]),
                                    t("div", He, [
                                      t("h3", null, [
                                        u("Casting Time: "),
                                        t(
                                          "span",
                                          null,
                                          n(
                                            e.ritual.execution.toLocaleLowerCase()
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    t("div", Ie, [
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
                                      ? (o(),
                                        a("div", Se, [
                                          t("h3", null, [
                                            u("Area: "),
                                            t(
                                              "span",
                                              null,
                                              n(e.ritual.area),
                                              1
                                            ),
                                          ]),
                                        ]))
                                      : l("", !0),
                                    e.ritual.target
                                      ? (o(),
                                        a("div", Ve, [
                                          t("h3", null, [
                                            u("Target: "),
                                            t(
                                              "span",
                                              null,
                                              n(e.ritual.target),
                                              1
                                            ),
                                          ]),
                                        ]))
                                      : l("", !0),
                                    e.ritual.effect
                                      ? (o(),
                                        a("div", _e, [
                                          t("h3", null, [
                                            u("Effect: "),
                                            t(
                                              "span",
                                              null,
                                              n(e.ritual.effect),
                                              1
                                            ),
                                          ]),
                                        ]))
                                      : l("", !0),
                                    e.ritual.duration
                                      ? (o(),
                                        a("div", Ne, [
                                          t("h3", null, [
                                            u("Duration: "),
                                            t(
                                              "span",
                                              null,
                                              n(e.ritual.duration),
                                              1
                                            ),
                                          ]),
                                        ]))
                                      : l("", !0),
                                    e.ritual.save
                                      ? (o(),
                                        a("div", Te, [
                                          t("h3", null, [
                                            u("Saving Throw: "),
                                            t(
                                              "span",
                                              null,
                                              n(e.ritual.save),
                                              1
                                            ),
                                          ]),
                                        ]))
                                      : l("", !0),
                                  ]),
                                  e.ritual.pictureURL
                                    ? (o(),
                                      a(
                                        "div",
                                        {
                                          key: 0,
                                          onClick:
                                            i[5] ||
                                            (i[5] = (m) => (f.value = !0)),
                                        },
                                        [
                                          t(
                                            "img",
                                            {
                                              class: "card-image",
                                              src: e.ritual.pictureURL,
                                            },
                                            null,
                                            8,
                                            Oe
                                          ),
                                        ]
                                      ))
                                    : l("", !0),
                                ]),
                              ],
                              2
                            ),
                            t("div", $e, [
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
                                Ue
                              ),
                              e.sheet && !e.disabled
                                ? (o(),
                                  a("div", je, [
                                    t(
                                      "button",
                                      {
                                        class: "button-remove",
                                        onClick: s(I, ["stop"]),
                                      },
                                      n(e.homebrew ? "Delete" : "Remove"),
                                      9,
                                      Pe
                                    ),
                                    t(
                                      "button",
                                      {
                                        class: "button-remove button-edit",
                                        onClick: s(S, ["stop"]),
                                      },
                                      " Edit ",
                                      8,
                                      qe
                                    ),
                                  ]))
                                : l("", !0),
                              e.canHomebrewAdd
                                ? (o(),
                                  a("div", ze, [
                                    t("div", Fe, [
                                      t(
                                        "button",
                                        {
                                          class: "button-secondary",
                                          onClick: s(A, ["stop"]),
                                          onMouseup: s(A, ["middle"]),
                                          onMousedown:
                                            i[6] ||
                                            (i[6] = s(() => {}, [
                                              "middle",
                                              "prevent",
                                              "stop",
                                            ])),
                                        },
                                        " SAVE TO MY COLLECTION ",
                                        40,
                                        Qe
                                      ),
                                    ]),
                                  ]))
                                : l("", !0),
                            ]),
                          ]))
                        : l("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              f.value
                ? (o(),
                  a("div", Ge, [
                    k(
                      _,
                      {
                        modelValue: f.value,
                        "onUpdate:modelValue":
                          i[7] || (i[7] = (m) => (f.value = m)),
                        classes: "modal-container",
                      },
                      {
                        default: L(() => [
                          t(
                            "img",
                            {
                              class: "card-image-full",
                              src: e.ritual.pictureURL,
                            },
                            null,
                            8,
                            Je
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : l("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  pe = F(Ke, [["__scopeId", "data-v-80c079ba"]]);
export { pe as R };

import {
  d as D,
  r as S,
  u as M,
  o as s,
  c as a,
  a as e,
  J as R,
  j as n,
  m as c,
  t as d,
  k,
  v as A,
  T as B,
  I as E,
  p as I,
  b as L,
  E as g,
  _ as x,
} from "./index-sE6ml22p.js";
import { _ as T } from "./show-more-icon-VvUXKiHG.js";
import { _ as V } from "./add-icon-fJ4uQHUZ.js";
const u = (t) => (I("data-v-ca8dfb13"), (t = t()), L(), t),
  j = { class: "card" },
  H = u(() => e("img", { src: T, alt: "ver mais" }, null, -1)),
  O = [H],
  U = { class: "header-row" },
  N = ["src"],
  P = { class: "flex-row" },
  z = { class: "title" },
  $ = { class: "vd-container" },
  q = u(() => e("div", { class: "vd-label" }, " DV ", -1)),
  F = { class: "vd-value" },
  J = { class: "elements-row" },
  G = { key: 0, class: "creature-element" },
  K = { key: 1, class: "creature-element-secondary" },
  Q = { class: "info-row" },
  W = { class: "info-text" },
  X = { class: "button-container" },
  Y = ["onClick", "onMouseup"],
  Z = ["onClick", "onMouseup"],
  ee = ["onClick"],
  te = u(() => e("img", { src: V, alt: "adicionar" }, null, -1)),
  oe = [te],
  se = ["onClick"],
  ae = u(() => e("img", { src: g, alt: "adicionar" }, null, -1)),
  ne = [ae],
  ce = { key: 0 },
  re = { class: "content" },
  ie = ["innerHTML"],
  de = { key: 0, class: "card-footer" },
  le = ["onClick"],
  ue = ["onClick"],
  he = D({
    __name: "CreatureCard",
    props: {
      creature: { type: Object, required: !0 },
      canAdd: Boolean,
      canRemove: Boolean,
      canShare: Boolean,
      canUse: Boolean,
      isDefault: Boolean,
    },
    emits: ["handleAdd", "handleRemove", "handleEdit", "handleDelete"],
    setup(t, { emit: C }) {
      const o = t,
        l = C,
        r = S(!1),
        h = M(),
        f = () => {
          l("handleAdd", o.creature);
        },
        b = () => {
          o.creature.id && l("handleRemove", o.creature.id);
        },
        p = () => {
          l("handleEdit", o.creature);
        },
        w = () => {
          o.creature.id && l("handleDelete", o.creature.id);
        },
        m = () => {
          if (o.isDefault) {
            const i = h.resolve({
              name: "creature-sheet",
              params: {
                id: o.creature.name.toLocaleLowerCase().split(" ").join("_"),
              },
            });
            window.open(i.href, "_blank");
          } else {
            const i = h.resolve({
              name: "creature-sheet",
              params: { id: o.creature.id },
            });
            window.open(i.href, "_blank");
          }
        },
        _ = () => {
          const i = h.resolve({
            name: "homebrews-creature",
            params: { id: o.creature.id },
          });
          window.open(i.href, "_blank");
        },
        y = () => {
          r.value = !r.value;
        };
      return (i, v) => (
        s(),
        a("div", j, [
          e("div", { class: "header", onClick: y }, [
            e(
              "button",
              {
                class: R(["show-more", { rotate: r.value }]),
                onClick:
                  v[0] || (v[0] = n((me) => (r.value = !r.value), ["stop"])),
              },
              O,
              2
            ),
            e("div", U, [
              t.creature.sheetPictureURL
                ? (s(),
                  a(
                    "img",
                    {
                      key: 0,
                      class: "creature-picture",
                      src: t.creature.sheetPictureURL,
                      alt: "foto ameaça",
                    },
                    null,
                    8,
                    N
                  ))
                : c("", !0),
              e("div", null, [
                e("div", P, [
                  e("div", z, d(t.creature.name), 1),
                  e("div", $, [q, e("div", F, d(t.creature.vd), 1)]),
                ]),
                e("div", J, [
                  t.creature.element !== "none"
                    ? (s(), a("div", G, d(t.creature.element), 1))
                    : c("", !0),
                  t.creature.secondaryElements
                    ? (s(),
                      a(
                        "div",
                        K,
                        d(
                          t.creature.secondaryElements
                            .toString()
                            .split(",")
                            .join(" - ")
                        ),
                        1
                      ))
                    : c("", !0),
                ]),
                e("div", Q, [
                  e(
                    "div",
                    W,
                    d(t.creature.creatureType) +
                      " - " +
                      d(t.creature.creatureSize),
                    1
                  ),
                ]),
              ]),
            ]),
            e("div", X, [
              e(
                "button",
                {
                  class: "button-secondary",
                  onClick: n(m, ["stop"]),
                  onMouseup: n(m, ["middle"]),
                },
                " SHEET ",
                40,
                Y
              ),
              t.canShare
                ? (s(),
                  a(
                    "button",
                    {
                      key: 0,
                      class: "button-secondary",
                      onClick: n(_, ["stop"]),
                      onMouseup: n(_, ["middle"]),
                    },
                    " SHARE ",
                    40,
                    Z
                  ))
                : c("", !0),
              t.canAdd
                ? (s(),
                  a(
                    "button",
                    {
                      key: 1,
                      class: "button-primary",
                      onClick: n(f, ["stop"]),
                    },
                    oe,
                    8,
                    ee
                  ))
                : c("", !0),
              t.canRemove
                ? (s(),
                  a(
                    "button",
                    {
                      key: 2,
                      class: "button-primary",
                      onClick: n(b, ["stop"]),
                    },
                    ne,
                    8,
                    se
                  ))
                : c("", !0),
            ]),
          ]),
          k(
            B,
            { name: "card", mode: "out-in" },
            {
              default: A(() => [
                r.value
                  ? (s(),
                    a("div", ce, [
                      k(E),
                      e("div", re, [
                        e(
                          "div",
                          { innerHTML: t.creature.description },
                          null,
                          8,
                          ie
                        ),
                        t.canUse
                          ? (s(),
                            a("div", de, [
                              e(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick: n(w, ["stop"]),
                                },
                                " Delete ",
                                8,
                                le
                              ),
                              e(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick: n(p, ["stop"]),
                                },
                                " Edit ",
                                8,
                                ue
                              ),
                            ]))
                          : c("", !0),
                      ]),
                    ]))
                  : c("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  }),
  Ce = x(he, [["__scopeId", "data-v-ca8dfb13"]]);
export { Ce as C };

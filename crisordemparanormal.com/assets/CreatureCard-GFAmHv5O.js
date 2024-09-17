import {
  d as x,
  Q as B,
  u as R,
  r as b,
  a0 as D,
  f as g,
  o as s,
  c,
  a as t,
  m as i,
  t as u,
  a1 as A,
  k as I,
  x as E,
  T as O,
  K as V,
  p as z,
  b as N,
  _ as T,
} from "./index-zHTPDNNN.js";
import { _ as U, a as j } from "./share-icon-J6b_MEIl.js";
import { _ as M } from "./trash-icon-Dl18GMfa.js";
import { b as a } from "./creatureData-ozdxpDUT.js";
const P =
    "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6688%201.2063L19.6438%204.2313L27.7688%2012.3563L30.7938%209.3313C32.3563%207.7688%2032.3563%205.23755%2030.7938%203.67505L28.3313%201.2063C26.7688%20-0.356201%2024.2376%20-0.356201%2022.6751%201.2063H22.6688ZM18.2313%205.6438L3.66255%2020.2188C3.01256%2020.8688%202.53756%2021.675%202.27506%2022.5563L0.0625551%2030.075C-0.0936949%2030.6063%200.0500551%2031.175%200.437555%2031.5625C0.825055%2031.95%201.39381%2032.0938%201.91881%2031.9438L9.43756%2029.7313C10.3188%2029.4688%2011.1251%2028.9938%2011.7751%2028.3438L26.3563%2013.7688L18.2313%205.6438Z'%20fill='%2351C055'/%3e%3c/svg%3e",
  d = (r) => (z("data-v-e7a423c3"), (r = r()), N(), r),
  Z = { class: "card-flex" },
  $ = { class: "img-container" },
  q = ["src"],
  F = { class: "content-container" },
  H = { class: "settings-row" },
  K = d(() =>
    t(
      "img",
      {
        id: "img.settings-button",
        class: "settings-img",
        src: U,
        alt: "configurações",
      },
      null,
      -1
    )
  ),
  Q = [K],
  G = { class: "info-row" },
  J = { class: "name" },
  W = { class: "vd" },
  X = { class: "info" },
  Y = { class: "buttons-row" },
  ee = d(() =>
    t("img", { class: "icon", src: j, alt: "compartilhar" }, null, -1)
  ),
  te = d(() => t("img", { class: "icon", src: P, alt: "deletar" }, null, -1)),
  ae = d(() => t("img", { class: "icon", src: M, alt: "deletar" }, null, -1)),
  re = x({
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
    setup(r, { emit: v }) {
      B((o) => ({ f87fdb76: y.value }));
      const e = r,
        l = v,
        m = R(),
        n = b(!1),
        h = b(null);
      D(h, (o) => {
        (o.target && o.target.id === "img.settings-button") || (n.value = !1);
      });
      const C = () => {
          l("handleAdd", e.creature);
        },
        _ = () => {
          e.creature.id && l("handleRemove", e.creature.id);
        },
        p = () => {
          (n.value = !1), l("handleEdit", e.creature);
        },
        L = () => {
          e.creature.id && ((n.value = !1), l("handleDelete", e.creature.id));
        },
        k = () => {
          e.isDefault
            ? m.push({
                name: "creature-sheet",
                params: {
                  id: e.creature.name.toLocaleLowerCase().split(" ").join("_"),
                },
              })
            : m.push({ name: "creature-sheet", params: { id: e.creature.id } });
        },
        w = () => {
          n.value = !1;
          const o = m.resolve({
            name: "homebrews-creature",
            params: { id: e.creature.id },
          });
          window.open(o.href, "_blank");
        },
        y = g(() =>
          e.creature.element === "conhecimento"
            ? a.conhecimento.color
            : e.creature.element === "energia"
            ? a.energia.color
            : e.creature.element === "medo"
            ? a.medo.color
            : e.creature.element === "morte"
            ? a.morte.color
            : e.creature.element === "sangue"
            ? a.sangue.color
            : e.creature.element === "nenhum"
            ? a.realidade.color
            : a.realidade.color
        ),
        S = g(() =>
          e.creature.name.toLocaleLowerCase() === "máscara do desespero"
            ? a.magistrada.banner
            : e.creature.name.toLocaleLowerCase() === "anfitrião"
            ? a.anfitriao.banner
            : e.creature.name.toLocaleLowerCase() === "o deus da morte"
            ? a.deus.banner
            : e.creature.name.toLocaleLowerCase() === "o diabo"
            ? a.diabo.banner
            : e.creature.name.toLocaleLowerCase() === "degolificada"
            ? a.degolificada.banner
            : e.creature.element === "conhecimento"
            ? a.conhecimento.banner
            : e.creature.element === "energia"
            ? a.energia.banner
            : e.creature.element === "medo"
            ? a.medo.banner
            : e.creature.element === "morte"
            ? a.morte.banner
            : e.creature.element === "sangue"
            ? a.sangue.banner
            : e.creature.element === "nenhum"
            ? a.realidade.banner
            : a.realidade.banner
        );
      return (o, f) => (
        s(),
        c(
          "div",
          { class: "card", style: V({ backgroundImage: `url(${S.value})` }) },
          [
            t("div", Z, [
              t("div", $, [
                r.creature.sheetPictureURL
                  ? (s(),
                    c(
                      "img",
                      {
                        key: 0,
                        class: "card-img",
                        src: r.creature.sheetPictureURL,
                        alt: "ameaça-imagem",
                      },
                      null,
                      8,
                      q
                    ))
                  : i("", !0),
              ]),
              t("div", F, [
                t("div", H, [
                  r.canShare
                    ? (s(),
                      c(
                        "button",
                        {
                          key: 0,
                          class: "settings-button",
                          onClick:
                            f[0] || (f[0] = (ne) => (n.value = !n.value)),
                        },
                        Q
                      ))
                    : i("", !0),
                ]),
                t("div", G, [
                  t("div", J, u(r.creature.name), 1),
                  t("div", W, " VD: " + u(r.creature.vd), 1),
                  t(
                    "div",
                    X,
                    u(r.creature.creatureType) +
                      " - " +
                      u(r.creature.creatureSize),
                    1
                  ),
                ]),
                t("div", Y, [
                  t(
                    "button",
                    {
                      class: A([
                        "primary-card-button",
                        { "secondary-card-button": r.canAdd || r.canRemove },
                      ]),
                      onClick: k,
                    },
                    " Sheet ",
                    2
                  ),
                  r.canAdd
                    ? (s(),
                      c(
                        "button",
                        { key: 0, class: "primary-card-button", onClick: _ },
                        " Add "
                      ))
                    : i("", !0),
                  r.canRemove
                    ? (s(),
                      c(
                        "button",
                        { key: 1, class: "primary-card-button", onClick: C },
                        " Remove "
                      ))
                    : i("", !0),
                ]),
              ]),
            ]),
            I(
              O,
              { name: "settings" },
              {
                default: E(() => [
                  n.value
                    ? (s(),
                      c(
                        "div",
                        {
                          key: 0,
                          ref_key: "dropdown",
                          ref: h,
                          class: "settings-container",
                        },
                        [
                          t("div", { class: "settings-buttons-container" }, [
                            t("div", { class: "button-container" }, [
                              ee,
                              t(
                                "button",
                                {
                                  class: "button-naked settings-action-button",
                                  onClick: w,
                                },
                                " Share "
                              ),
                            ]),
                            t("div", { class: "button-container" }, [
                              te,
                              t(
                                "button",
                                {
                                  class:
                                    "button-naked settings-action-button edit-button",
                                  onClick: p,
                                },
                                " Edit "
                              ),
                            ]),
                            t("div", { class: "button-container" }, [
                              ae,
                              t(
                                "button",
                                {
                                  class:
                                    "button-naked settings-action-button delete-button",
                                  onClick: L,
                                },
                                " Delete "
                              ),
                            ]),
                          ]),
                        ],
                        512
                      ))
                    : i("", !0),
                ]),
                _: 1,
              }
            ),
          ],
          4
        )
      );
    },
  }),
  le = T(re, [["__scopeId", "data-v-e7a423c3"]]);
export { le as C };

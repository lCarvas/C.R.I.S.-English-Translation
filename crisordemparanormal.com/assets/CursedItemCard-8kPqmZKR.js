import {
  d as B,
  o,
  c as n,
  a as t,
  t as i,
  H as c,
  _ as S,
  r as $,
  u as T,
  e as P,
  i as x,
  a1 as h,
  j as d,
  m as s,
  k,
  x as I,
  T as O,
  n as U,
  a4 as V,
  p as D,
  b as N,
  Q as J,
  f as j,
} from "./index-zHTPDNNN.js";
import { _ } from "./show-more-icon-VvUXKiHG.js";
import { _ as q } from "./add-icon-fJ4uQHUZ.js";
import { C as K } from "./CardSource-B8Pq3XUj.js";
const z =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23A347FF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M9%2016.2L4.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4L9%2016.2z'/%3e%3c/svg%3e",
  X = { class: "ammunition-card" },
  Y = { class: "header" },
  Z = { class: "title" },
  ee = { class: "item-info-container" },
  te = { class: "item-info" },
  oe = { class: "item-info" },
  ne = B({
    __name: "AmmunitionCard",
    props: { ammunition: { type: Object, required: !0 } },
    setup(e) {
      return (M, a) => (
        o(),
        n("div", X, [
          t("div", Y, [
            t("div", Z, [t("h3", null, i(e.ammunition.name), 1)]),
            t("div", ee, [
              t("div", te, [
                t("h3", null, [
                  c("Categoria: "),
                  t("span", null, i(e.ammunition.category), 1),
                ]),
              ]),
              t("div", oe, [
                t("h3", null, [
                  c("Espaços: "),
                  t("span", null, i(e.ammunition.slots), 1),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  se = S(ne, [["__scopeId", "data-v-0c4dbb3a"]]),
  F = (e) => (D("data-v-5ec84774"), (e = e()), N(), e),
  ie = { class: "card" },
  ae = F(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  de = [ae],
  le = { class: "first-row" },
  ce = { key: 0, class: "item-info-category" },
  ue = { class: "item-info-container" },
  re = { key: 0, class: "item-info" },
  me = { class: "item-info" },
  he = { key: 0 },
  ve = { class: "item-info" },
  we = { key: 0 },
  be = { key: 1 },
  ke = { key: 2 },
  fe = { key: 1, class: "flex-row" },
  ye = { key: 0, class: "item-info" },
  $e = { class: "item-info" },
  Ce = { class: "item-info" },
  ge = { key: 1, class: "item-info" },
  Ae = { key: 1, class: "button-container" },
  Me = ["onClick"],
  Le = F(() => t("img", { src: q, alt: "adicionar" }, null, -1)),
  Re = [Le],
  Ie = { key: 2, class: "button-container" },
  Ee = ["onClick", "onMouseup"],
  He = { key: 3, class: "button-container" },
  Be = ["disabled", "onClick"],
  Se = { key: 0 },
  Te = { class: "content" },
  xe = { key: 0 },
  Oe = { key: 1, class: "only-sheet-content-container" },
  Ue = { class: "card-info-image-container" },
  Ve = { key: 0, class: "item-info-category-sheet" },
  De = { class: "item-info" },
  Ne = { key: 1, class: "item-info" },
  _e = { class: "item-info" },
  qe = { class: "item-info" },
  We = { key: 2, class: "item-info" },
  Pe = ["src"],
  je = ["src"],
  ze = ["innerHTML"],
  Fe = { key: 3, class: "card-footer" },
  pe = ["onClick"],
  Qe = ["onClick"],
  Ge = { key: 4, class: "card-footer" },
  Je = { class: "button-container" },
  Ke = ["onClick", "onMouseup"],
  Xe = { key: 0 },
  Ye = ["src"],
  Ze = B({
    __name: "WeaponCard",
    props: {
      weapon: { type: Object, required: !0 },
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
      "handleEquip",
      "handleEdit",
      "handleAddHomebrew",
    ],
    setup(e, { emit: M }) {
      const a = e,
        m = M,
        u = $(!!a.homebrewAdd),
        f = T(),
        b = $(window.innerWidth),
        v = $(!1),
        L = () => {
          m("handleAdd", a.weapon);
        },
        E = () => {
          const r = { id: a.weapon.id || a.id, itemType: a.weapon.itemType };
          m("handleRemove", r);
        },
        H = () => {
          m("handleEquip", a.id);
        },
        R = () => {
          m("handleEdit", a.weapon);
        },
        C = () => {
          m("handleAddHomebrew", a.weapon);
        },
        g = () => {
          const r = f.resolve({ name: "homebrews-item", params: { id: a.id } });
          window.open(r.href, "_blank");
        },
        y = () => {
          a.homebrewAdd || (u.value = !u.value);
        };
      return (
        P(() => {
          window.addEventListener("resize", () => {
            b.value = window.innerWidth;
          });
        }),
        (r, l) => {
          const w = x("vue-final-modal");
          return (
            o(),
            n(
              U,
              null,
              [
                t("div", ie, [
                  t(
                    "div",
                    {
                      class: h(["header", { "homebrew-add": e.homebrewAdd }]),
                      onClick: y,
                    },
                    [
                      e.homebrewAdd
                        ? s("", !0)
                        : (o(),
                          n(
                            "button",
                            {
                              key: 0,
                              class: h(["show-more", { rotate: u.value }]),
                              onClick:
                                l[0] ||
                                (l[0] = d(
                                  (A) => (u.value = !u.value),
                                  ["stop"]
                                )),
                            },
                            de,
                            2
                          )),
                      t("div", null, [
                        t("div", le, [
                          t(
                            "h3",
                            {
                              class: h([
                                "title",
                                { "sheet-title": e.sheet && !e.homebrew },
                              ]),
                            },
                            i(e.weapon.name),
                            3
                          ),
                          (!e.sheet || e.homebrew) &&
                          b.value >= 1023 &&
                          e.weapon.source === void 0
                            ? (o(),
                              n("div", ce, [
                                t("h3", null, [
                                  t("b", null, i(e.weapon.proficiencie), 1),
                                  c(" - "),
                                  t(
                                    "i",
                                    null,
                                    i(e.weapon.type) +
                                      " - " +
                                      i(e.weapon.handling),
                                    1
                                  ),
                                ]),
                              ]))
                            : s("", !0),
                        ]),
                        t("div", ue, [
                          (!e.sheet || e.homebrew) && b.value >= 1023
                            ? (o(),
                              n("div", re, [
                                t("h3", null, [
                                  c("Categoria: "),
                                  t("span", null, i(e.weapon.category), 1),
                                ]),
                              ]))
                            : s("", !0),
                          t("div", me, [
                            t("h3", null, [
                              c(" Dano: "),
                              t("span", null, i(e.weapon.damage), 1),
                              e.weapon.secondaryDamage
                                ? (o(),
                                  n(
                                    "span",
                                    he,
                                    "/" + i(e.weapon.secondaryDamage),
                                    1
                                  ))
                                : s("", !0),
                            ]),
                          ]),
                          t("div", ve, [
                            t("h3", null, [
                              c(" Crítico: "),
                              e.weapon.criticalRange < 20 &&
                              e.weapon.criticalMult > 2
                                ? (o(),
                                  n(
                                    "span",
                                    we,
                                    i(e.weapon.criticalRange) +
                                      "/x" +
                                      i(e.weapon.criticalMult),
                                    1
                                  ))
                                : e.weapon.criticalRange < 20
                                ? (o(),
                                  n("span", be, i(e.weapon.criticalRange), 1))
                                : (o(),
                                  n(
                                    "span",
                                    ke,
                                    "x" + i(e.weapon.criticalMult),
                                    1
                                  )),
                            ]),
                          ]),
                          (!e.sheet || e.homebrew) && b.value >= 1023
                            ? (o(),
                              n("div", fe, [
                                e.weapon.range !== "-"
                                  ? (o(),
                                    n("div", ye, [
                                      t("h3", null, [
                                        c("Range: "),
                                        t("span", null, i(e.weapon.range), 1),
                                      ]),
                                    ]))
                                  : s("", !0),
                                t("div", $e, [
                                  t("h3", null, [
                                    c("Type: "),
                                    t("span", null, i(e.weapon.damageType), 1),
                                  ]),
                                ]),
                                t("div", Ce, [
                                  t("h3", null, [
                                    c("Space: "),
                                    t("span", null, i(e.weapon.slots), 1),
                                  ]),
                                ]),
                                e.weapon.ammunitionName
                                  ? (o(),
                                    n("div", ge, [
                                      t("h3", null, [
                                        c("Ammo: "),
                                        t(
                                          "span",
                                          null,
                                          i(e.weapon.ammunitionName),
                                          1
                                        ),
                                      ]),
                                    ]))
                                  : s("", !0),
                              ]))
                            : s("", !0),
                        ]),
                      ]),
                      !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                        ? (o(),
                          n("div", Ae, [
                            t(
                              "button",
                              {
                                class: "button-primary",
                                onClick: d(L, ["stop"]),
                              },
                              Re,
                              8,
                              Me
                            ),
                          ]))
                        : s("", !0),
                      e.homebrewList
                        ? (o(),
                          n("div", Ie, [
                            t(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: d(g, ["stop"]),
                                onMouseup: d(g, ["middle"]),
                                onMousedown:
                                  l[1] ||
                                  (l[1] = d(() => {}, [
                                    "middle",
                                    "prevent",
                                    "stop",
                                  ])),
                              },
                              " SHARE ",
                              40,
                              Ee
                            ),
                          ]))
                        : s("", !0),
                      e.sheet && !e.homebrew
                        ? (o(),
                          n("div", He, [
                            t(
                              "button",
                              {
                                class: h([
                                  "checkbox-button",
                                  { disabled: e.disabled },
                                ]),
                                disabled: e.disabled,
                                onClick: d(H, ["stop"]),
                              },
                              [
                                t(
                                  "img",
                                  {
                                    src: z,
                                    alt: "equipar",
                                    class: h([
                                      "checkbox-img",
                                      {
                                        "checkbox-img-fade": !e.weapon.equipped,
                                      },
                                    ]),
                                  },
                                  null,
                                  2
                                ),
                              ],
                              10,
                              Be
                            ),
                          ]))
                        : s("", !0),
                    ],
                    2
                  ),
                  k(
                    O,
                    { name: "card", mode: "out-in" },
                    {
                      default: I(() => [
                        u.value
                          ? (o(),
                            n("div", Se, [
                              k(V),
                              t("div", Te, [
                                e.weapon.source
                                  ? (o(),
                                    n("div", xe, [
                                      k(
                                        K,
                                        {
                                          label: e.weapon.source.label,
                                          "ad-label": e.weapon.source.adLabel,
                                          link: e.weapon.source.link,
                                        },
                                        null,
                                        8,
                                        ["label", "ad-label", "link"]
                                      ),
                                    ]))
                                  : s("", !0),
                                (e.sheet && !e.homebrew) || !(b.value >= 1023)
                                  ? (o(),
                                    n("div", Oe, [
                                      t("div", Ue, [
                                        t("div", null, [
                                          e.weapon.source === void 0
                                            ? (o(),
                                              n("div", Ve, [
                                                t("h3", null, [
                                                  t(
                                                    "b",
                                                    null,
                                                    i(e.weapon.proficiencie),
                                                    1
                                                  ),
                                                  c(" - "),
                                                  t(
                                                    "i",
                                                    null,
                                                    i(e.weapon.type) +
                                                      " - " +
                                                      i(e.weapon.handling),
                                                    1
                                                  ),
                                                ]),
                                              ]))
                                            : s("", !0),
                                          t("div", De, [
                                            t("h3", null, [
                                              c("Category: "),
                                              t(
                                                "span",
                                                null,
                                                i(e.weapon.category),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          e.weapon.range !== "-"
                                            ? (o(),
                                              n("div", Ne, [
                                                t("h3", null, [
                                                  c("Range: "),
                                                  t(
                                                    "span",
                                                    null,
                                                    i(e.weapon.range),
                                                    1
                                                  ),
                                                ]),
                                              ]))
                                            : s("", !0),
                                          t("div", _e, [
                                            t("h3", null, [
                                              c("Type: "),
                                              t(
                                                "span",
                                                null,
                                                i(e.weapon.damageType),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          t("div", qe, [
                                            t("h3", null, [
                                              c("Spaces: "),
                                              t(
                                                "span",
                                                null,
                                                i(e.weapon.slots),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          e.weapon.ammunitionName
                                            ? (o(),
                                              n("div", We, [
                                                t("h3", null, [
                                                  c("Ammo: "),
                                                  t(
                                                    "span",
                                                    null,
                                                    i(e.weapon.ammunitionName),
                                                    1
                                                  ),
                                                ]),
                                              ]))
                                            : s("", !0),
                                          e.weapon.ammunition
                                            ? (o(),
                                              n(
                                                "div",
                                                {
                                                  key: 3,
                                                  class: h({
                                                    "sheet-content":
                                                      e.sheet && !e.homebrew,
                                                  }),
                                                },
                                                [
                                                  k(
                                                    se,
                                                    {
                                                      ammunition:
                                                        e.weapon.ammunition,
                                                    },
                                                    null,
                                                    8,
                                                    ["ammunition"]
                                                  ),
                                                ],
                                                2
                                              ))
                                            : s("", !0),
                                        ]),
                                        e.weapon.pictureURL
                                          ? (o(),
                                            n(
                                              "div",
                                              {
                                                key: 0,
                                                onClick:
                                                  l[2] ||
                                                  (l[2] = (A) =>
                                                    (v.value = !0)),
                                              },
                                              [
                                                t(
                                                  "img",
                                                  {
                                                    class: "card-image",
                                                    src: e.weapon.pictureURL,
                                                  },
                                                  null,
                                                  8,
                                                  Pe
                                                ),
                                              ]
                                            ))
                                          : s("", !0),
                                      ]),
                                    ]))
                                  : s("", !0),
                                !e.sheet &&
                                b.value >= 1023 &&
                                e.weapon.pictureURL
                                  ? (o(),
                                    n(
                                      "div",
                                      {
                                        key: 2,
                                        class: "no-sheet-img-container",
                                        onClick:
                                          l[3] ||
                                          (l[3] = (A) => (v.value = !0)),
                                      },
                                      [
                                        t(
                                          "img",
                                          {
                                            class: "card-image",
                                            src: e.weapon.pictureURL,
                                          },
                                          null,
                                          8,
                                          je
                                        ),
                                      ]
                                    ))
                                  : s("", !0),
                                t(
                                  "div",
                                  {
                                    class: h([
                                      "description",
                                      {
                                        "sheet-content": e.sheet && !e.homebrew,
                                      },
                                    ]),
                                    innerHTML: e.weapon.description,
                                  },
                                  null,
                                  10,
                                  ze
                                ),
                                e.sheet && !e.disabled
                                  ? (o(),
                                    n("div", Fe, [
                                      t(
                                        "button",
                                        {
                                          class: "button-remove",
                                          onClick: d(E, ["stop"]),
                                        },
                                        i(e.homebrew ? "Delete" : "Remove"),
                                        9,
                                        pe
                                      ),
                                      t(
                                        "button",
                                        {
                                          class: "button-remove button-edit",
                                          onClick: d(R, ["stop"]),
                                        },
                                        " Edit ",
                                        8,
                                        Qe
                                      ),
                                    ]))
                                  : s("", !0),
                                e.canHomebrewAdd
                                  ? (o(),
                                    n("div", Ge, [
                                      t("div", Je, [
                                        t(
                                          "button",
                                          {
                                            class: "button-secondary",
                                            onClick: d(C, ["stop"]),
                                            onMouseup: d(C, ["middle"]),
                                            onMousedown:
                                              l[4] ||
                                              (l[4] = d(() => {}, [
                                                "middle",
                                                "prevent",
                                                "stop",
                                              ])),
                                          },
                                          " SAVE TO MY COLLECTION ",
                                          40,
                                          Ke
                                        ),
                                      ]),
                                    ]))
                                  : s("", !0),
                              ]),
                            ]))
                          : s("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                v.value
                  ? (o(),
                    n("div", Xe, [
                      k(
                        w,
                        {
                          modelValue: v.value,
                          "onUpdate:modelValue":
                            l[5] || (l[5] = (A) => (v.value = A)),
                          classes: "modal-container",
                        },
                        {
                          default: I(() => [
                            t(
                              "img",
                              {
                                class: "card-image-full",
                                src: e.weapon.pictureURL,
                              },
                              null,
                              8,
                              Ye
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]))
                  : s("", !0),
              ],
              64
            )
          );
        }
      );
    },
  }),
  Wo = S(Ze, [["__scopeId", "data-v-5ec84774"]]),
  p = (e) => (D("data-v-7a902c3f"), (e = e()), N(), e),
  et = { class: "card" },
  tt = p(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  ot = [tt],
  nt = { class: "first-row" },
  st = { class: "item-info-container" },
  it = { class: "item-info" },
  at = { key: 0, class: "flex-row" },
  dt = { class: "item-info" },
  lt = { class: "item-info" },
  ct = { key: 1, class: "button-container" },
  ut = ["onClick"],
  rt = p(() => t("img", { src: q, alt: "adicionar" }, null, -1)),
  mt = [rt],
  ht = { key: 2, class: "button-container" },
  vt = ["onClick", "onMouseup"],
  wt = { key: 3, class: "button-container" },
  bt = ["disabled", "onClick"],
  kt = { key: 0 },
  ft = { class: "content" },
  yt = { class: "card-info-image-container" },
  $t = { key: 0, class: "only-sheet-content-container" },
  Ct = { class: "item-info" },
  gt = { class: "item-info" },
  At = ["src"],
  Mt = ["innerHTML"],
  Lt = { key: 0, class: "card-footer" },
  Rt = ["onClick"],
  It = ["onClick"],
  Et = { key: 1, class: "card-footer" },
  Ht = { class: "button-container" },
  Bt = ["onClick", "onMouseup"],
  St = { key: 0 },
  Tt = ["src"],
  xt = B({
    __name: "ProtectionCard",
    props: {
      protection: { type: Object, required: !0 },
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
      "handleEquip",
      "handleEdit",
      "handleAddHomebrew",
    ],
    setup(e, { emit: M }) {
      const a = e,
        m = M,
        u = $(!!a.homebrewAdd),
        f = T(),
        b = $(window.innerWidth),
        v = $(!1),
        L = () => {
          m("handleAdd", a.protection);
        },
        E = () => {
          const r = {
            id: a.protection.id || a.id,
            itemType: a.protection.itemType,
          };
          m("handleRemove", r);
        },
        H = () => {
          m("handleEquip", a.id);
        },
        R = () => {
          m("handleEdit", a.protection);
        },
        C = () => {
          m("handleAddHomebrew", a.protection);
        },
        g = () => {
          const r = f.resolve({ name: "homebrews-item", params: { id: a.id } });
          window.open(r.href, "_blank");
        },
        y = () => {
          a.homebrewAdd || (u.value = !u.value);
        };
      return (
        P(() => {
          window.addEventListener("resize", () => {
            b.value = window.innerWidth;
          });
        }),
        (r, l) => {
          const w = x("vue-final-modal");
          return (
            o(),
            n(
              U,
              null,
              [
                t("div", et, [
                  t(
                    "div",
                    {
                      class: h(["header", { "homebrew-add": e.homebrewAdd }]),
                      onClick: y,
                    },
                    [
                      e.homebrewAdd
                        ? s("", !0)
                        : (o(),
                          n(
                            "button",
                            {
                              key: 0,
                              class: h(["show-more", { rotate: u.value }]),
                              onClick:
                                l[0] ||
                                (l[0] = d(
                                  (A) => (u.value = !u.value),
                                  ["stop"]
                                )),
                            },
                            ot,
                            2
                          )),
                      t("div", null, [
                        t("div", nt, [
                          t(
                            "h3",
                            {
                              class: h([
                                "title",
                                { "sheet-title": e.sheet && !e.homebrew },
                              ]),
                            },
                            i(e.protection.name),
                            3
                          ),
                        ]),
                        t("div", st, [
                          t("div", it, [
                            t("h3", null, [
                              c("Defense: "),
                              t("span", null, "+" + i(e.protection.defense), 1),
                            ]),
                          ]),
                          (!e.sheet || e.homebrew) && b.value >= 1023
                            ? (o(),
                              n("div", at, [
                                t("div", dt, [
                                  t("h3", null, [
                                    c("Category: "),
                                    t(
                                      "span",
                                      null,
                                      i(e.protection.category),
                                      1
                                    ),
                                  ]),
                                ]),
                                t("div", lt, [
                                  t("h3", null, [
                                    c("Space: "),
                                    t("span", null, i(e.protection.slots), 1),
                                  ]),
                                ]),
                              ]))
                            : s("", !0),
                        ]),
                      ]),
                      !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                        ? (o(),
                          n("div", ct, [
                            t(
                              "button",
                              {
                                class: "button-primary",
                                onClick: d(L, ["stop"]),
                              },
                              mt,
                              8,
                              ut
                            ),
                          ]))
                        : s("", !0),
                      e.homebrewList
                        ? (o(),
                          n("div", ht, [
                            t(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: d(g, ["stop"]),
                                onMouseup: d(g, ["middle"]),
                                onMousedown:
                                  l[1] ||
                                  (l[1] = d(() => {}, [
                                    "middle",
                                    "prevent",
                                    "stop",
                                  ])),
                              },
                              " SHARE ",
                              40,
                              vt
                            ),
                          ]))
                        : s("", !0),
                      e.sheet && !e.homebrew
                        ? (o(),
                          n("div", wt, [
                            t(
                              "button",
                              {
                                class: h([
                                  "checkbox-button",
                                  { disabled: e.disabled },
                                ]),
                                disabled: e.disabled,
                                onClick: d(H, ["stop"]),
                              },
                              [
                                t(
                                  "img",
                                  {
                                    src: z,
                                    alt: "equipar",
                                    class: h([
                                      "checkbox-img",
                                      {
                                        "checkbox-img-fade":
                                          !e.protection.equipped,
                                      },
                                    ]),
                                  },
                                  null,
                                  2
                                ),
                              ],
                              10,
                              bt
                            ),
                          ]))
                        : s("", !0),
                    ],
                    2
                  ),
                  k(
                    O,
                    { name: "card", mode: "out-in" },
                    {
                      default: I(() => [
                        u.value
                          ? (o(),
                            n("div", kt, [
                              k(V),
                              t("div", ft, [
                                t("div", yt, [
                                  t("div", null, [
                                    e.sheet || !(b.value >= 1023)
                                      ? (o(),
                                        n("div", $t, [
                                          t("div", Ct, [
                                            t("h3", null, [
                                              c("Categoria: "),
                                              t(
                                                "span",
                                                null,
                                                i(e.protection.category),
                                                1
                                              ),
                                            ]),
                                          ]),
                                          t("div", gt, [
                                            t("h3", null, [
                                              c("Space: "),
                                              t(
                                                "span",
                                                null,
                                                i(e.protection.slots),
                                                1
                                              ),
                                            ]),
                                          ]),
                                        ]))
                                      : s("", !0),
                                  ]),
                                  e.protection.pictureURL
                                    ? (o(),
                                      n(
                                        "div",
                                        {
                                          key: 0,
                                          onClick:
                                            l[2] ||
                                            (l[2] = (A) => (v.value = !0)),
                                        },
                                        [
                                          t(
                                            "img",
                                            {
                                              class: "card-image",
                                              src: e.protection.pictureURL,
                                            },
                                            null,
                                            8,
                                            At
                                          ),
                                        ]
                                      ))
                                    : s("", !0),
                                ]),
                                t(
                                  "div",
                                  {
                                    class: h([
                                      "description",
                                      { "sheet-content": e.sheet },
                                    ]),
                                    innerHTML: e.protection.description,
                                  },
                                  null,
                                  10,
                                  Mt
                                ),
                                e.sheet && !e.disabled
                                  ? (o(),
                                    n("div", Lt, [
                                      t(
                                        "button",
                                        {
                                          class: "button-remove",
                                          onClick: d(E, ["stop"]),
                                        },
                                        i(e.homebrew ? "Delete" : "Remove"),
                                        9,
                                        Rt
                                      ),
                                      t(
                                        "button",
                                        {
                                          class: "button-remove button-edit",
                                          onClick: d(R, ["stop"]),
                                        },
                                        " Editar ",
                                        8,
                                        It
                                      ),
                                    ]))
                                  : s("", !0),
                                e.canHomebrewAdd
                                  ? (o(),
                                    n("div", Et, [
                                      t("div", Ht, [
                                        t(
                                          "button",
                                          {
                                            class: "button-secondary",
                                            onClick: d(C, ["stop"]),
                                            onMouseup: d(C, ["middle"]),
                                            onMousedown:
                                              l[3] ||
                                              (l[3] = d(() => {}, [
                                                "middle",
                                                "prevent",
                                                "stop",
                                              ])),
                                          },
                                          " SAVE TO MY COLLECTION ",
                                          40,
                                          Bt
                                        ),
                                      ]),
                                    ]))
                                  : s("", !0),
                              ]),
                            ]))
                          : s("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                v.value
                  ? (o(),
                    n("div", St, [
                      k(
                        w,
                        {
                          modelValue: v.value,
                          "onUpdate:modelValue":
                            l[4] || (l[4] = (A) => (v.value = A)),
                          classes: "modal-container",
                        },
                        {
                          default: I(() => [
                            t(
                              "img",
                              {
                                class: "card-image-full",
                                src: e.protection.pictureURL,
                              },
                              null,
                              8,
                              Tt
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]))
                  : s("", !0),
              ],
              64
            )
          );
        }
      );
    },
  }),
  Po = S(xt, [["__scopeId", "data-v-7a902c3f"]]),
  Q = (e) => (D("data-v-3dda55c7"), (e = e()), N(), e),
  Ot = { class: "card" },
  Ut = Q(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  Vt = [Ut],
  Dt = { class: "first-row" },
  Nt = { key: 0, class: "item-info-category" },
  _t = { class: "item-info-container" },
  qt = { class: "item-info" },
  Wt = { class: "item-info" },
  Pt = { key: 1, class: "button-container" },
  jt = ["onClick"],
  zt = Q(() => t("img", { src: q, alt: "adicionar" }, null, -1)),
  Ft = [zt],
  pt = { key: 2, class: "button-container" },
  Qt = ["onClick", "onMouseup"],
  Gt = { key: 0 },
  Jt = { class: "content" },
  Kt = { class: "card-info-image-container" },
  Xt = { key: 0, class: "item-info-category-sheet" },
  Yt = ["src"],
  Zt = ["innerHTML"],
  eo = { key: 0, class: "card-footer" },
  to = ["onClick"],
  oo = ["onClick"],
  no = { key: 1, class: "card-footer" },
  so = { class: "button-container" },
  io = ["onClick", "onMouseup"],
  ao = { key: 0 },
  lo = ["src"],
  co = B({
    __name: "MiscCard",
    props: {
      misc: { type: Object, required: !0 },
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
    setup(e, { emit: M }) {
      const a = e,
        m = M,
        u = $(!!a.homebrewAdd),
        f = T(),
        b = $(window.innerWidth),
        v = $(!1),
        L = () => {
          m("handleAdd", a.misc);
        },
        E = () => {
          const y = { id: a.misc.id || a.id, itemType: a.misc.itemType };
          m("handleRemove", y);
        },
        H = () => {
          m("handleEdit", a.misc);
        },
        R = () => {
          m("handleAddHomebrew", a.misc);
        },
        C = () => {
          const y = f.resolve({ name: "homebrews-item", params: { id: a.id } });
          window.open(y.href, "_blank");
        },
        g = () => {
          a.homebrewAdd || (u.value = !u.value);
        };
      return (
        P(() => {
          window.addEventListener("resize", () => {
            b.value = window.innerWidth;
          });
        }),
        (y, r) => {
          const l = x("vue-final-modal");
          return (
            o(),
            n(
              U,
              null,
              [
                t("div", Ot, [
                  t(
                    "div",
                    {
                      class: h(["header", { "homebrew-add": e.homebrewAdd }]),
                      onClick: g,
                    },
                    [
                      e.homebrewAdd
                        ? s("", !0)
                        : (o(),
                          n(
                            "button",
                            {
                              key: 0,
                              class: h(["show-more", { rotate: u.value }]),
                              onClick:
                                r[0] ||
                                (r[0] = d(
                                  (w) => (u.value = !u.value),
                                  ["stop"]
                                )),
                            },
                            Vt,
                            2
                          )),
                      t("div", null, [
                        t("div", Dt, [
                          t(
                            "h3",
                            {
                              class: h([
                                "title",
                                { "sheet-title": e.sheet && !e.homebrew },
                              ]),
                            },
                            i(e.misc.name),
                            3
                          ),
                          (!e.sheet || e.homebrew) && b.value >= 1023
                            ? (o(),
                              n("div", Nt, [
                                t("h3", null, [t("i", null, i(e.misc.tag), 1)]),
                              ]))
                            : s("", !0),
                        ]),
                        t("div", _t, [
                          t("div", qt, [
                            t("h3", null, [
                              c("Category: "),
                              t("span", null, i(e.misc.category), 1),
                            ]),
                          ]),
                          t("div", Wt, [
                            t("h3", null, [
                              c("Space: "),
                              t("span", null, i(e.misc.slots), 1),
                            ]),
                          ]),
                        ]),
                      ]),
                      !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                        ? (o(),
                          n("div", Pt, [
                            t(
                              "button",
                              {
                                class: "button-primary",
                                onClick: d(L, ["stop"]),
                              },
                              Ft,
                              8,
                              jt
                            ),
                          ]))
                        : s("", !0),
                      e.homebrewList
                        ? (o(),
                          n("div", pt, [
                            t(
                              "button",
                              {
                                class: "button-secondary",
                                onClick: d(C, ["stop"]),
                                onMouseup: d(C, ["middle"]),
                                onMousedown:
                                  r[1] ||
                                  (r[1] = d(() => {}, [
                                    "middle",
                                    "prevent",
                                    "stop",
                                  ])),
                              },
                              " SHARE ",
                              40,
                              Qt
                            ),
                          ]))
                        : s("", !0),
                    ],
                    2
                  ),
                  k(
                    O,
                    { name: "card", mode: "out-in" },
                    {
                      default: I(() => [
                        u.value
                          ? (o(),
                            n("div", Gt, [
                              k(V),
                              t("div", Jt, [
                                t("div", Kt, [
                                  e.sheet || !(b.value >= 1023)
                                    ? (o(),
                                      n("div", Xt, [
                                        t("h3", null, [
                                          t("i", null, i(e.misc.tag), 1),
                                        ]),
                                      ]))
                                    : s("", !0),
                                  e.misc.pictureURL
                                    ? (o(),
                                      n(
                                        "div",
                                        {
                                          key: 1,
                                          onClick:
                                            r[2] ||
                                            (r[2] = (w) => (v.value = !0)),
                                        },
                                        [
                                          t(
                                            "img",
                                            {
                                              class: "card-image",
                                              src: e.misc.pictureURL,
                                            },
                                            null,
                                            8,
                                            Yt
                                          ),
                                        ]
                                      ))
                                    : s("", !0),
                                ]),
                                t(
                                  "div",
                                  {
                                    class: h([
                                      "description",
                                      { "sheet-content": e.sheet },
                                    ]),
                                    innerHTML: e.misc.description,
                                  },
                                  null,
                                  10,
                                  Zt
                                ),
                                e.sheet && !e.disabled
                                  ? (o(),
                                    n("div", eo, [
                                      t(
                                        "button",
                                        {
                                          class: "button-remove",
                                          onClick: d(E, ["stop"]),
                                        },
                                        i(e.homebrew ? "Delete" : "Remove"),
                                        9,
                                        to
                                      ),
                                      t(
                                        "button",
                                        {
                                          class: "button-remove button-edit",
                                          onClick: d(H, ["stop"]),
                                        },
                                        " Edit ",
                                        8,
                                        oo
                                      ),
                                    ]))
                                  : s("", !0),
                                e.canHomebrewAdd
                                  ? (o(),
                                    n("div", no, [
                                      t("div", so, [
                                        t(
                                          "button",
                                          {
                                            class: "button-secondary",
                                            onClick: d(R, ["stop"]),
                                            onMouseup: d(R, ["middle"]),
                                            onMousedown:
                                              r[3] ||
                                              (r[3] = d(() => {}, [
                                                "middle",
                                                "prevent",
                                                "stop",
                                              ])),
                                          },
                                          " SAVE TO MY COLLECTION ",
                                          40,
                                          io
                                        ),
                                      ]),
                                    ]))
                                  : s("", !0),
                              ]),
                            ]))
                          : s("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                v.value
                  ? (o(),
                    n("div", ao, [
                      k(
                        l,
                        {
                          modelValue: v.value,
                          "onUpdate:modelValue":
                            r[4] || (r[4] = (w) => (v.value = w)),
                          classes: "modal-container",
                        },
                        {
                          default: I(() => [
                            t(
                              "img",
                              {
                                class: "card-image-full",
                                src: e.misc.pictureURL,
                              },
                              null,
                              8,
                              lo
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]))
                  : s("", !0),
              ],
              64
            )
          );
        }
      );
    },
  }),
  jo = S(co, [["__scopeId", "data-v-3dda55c7"]]),
  G = (e) => (D("data-v-c1c41836"), (e = e()), N(), e),
  uo = { class: "card" },
  ro = G(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  mo = [ro],
  ho = { class: "item-info-container" },
  vo = { class: "item-info" },
  wo = { class: "item-info" },
  bo = { key: 1, class: "button-container" },
  ko = ["onClick"],
  fo = G(() => t("img", { src: q, alt: "adicionar" }, null, -1)),
  yo = [fo],
  $o = { key: 2, class: "button-container" },
  Co = ["onClick", "onMouseup"],
  go = { key: 0 },
  Ao = { class: "card-info-image-container" },
  Mo = { class: "item-element" },
  Lo = ["src"],
  Ro = { class: "content" },
  Io = ["innerHTML"],
  Eo = { key: 0, class: "card-footer" },
  Ho = ["onClick"],
  Bo = ["onClick"],
  So = { key: 1, class: "card-footer" },
  To = { class: "button-container" },
  xo = ["onClick", "onMouseup"],
  Oo = { key: 0 },
  Uo = ["src"],
  Vo = B({
    __name: "CursedItemCard",
    props: {
      cursedItem: { type: Object, required: !0 },
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
    setup(e, { emit: M }) {
      J((l) => ({ "203ee561": L.value, "7d7073a4": E.value }));
      const a = e,
        m = M,
        u = {
          conhecimento: "#ff8c00",
          energia: "#7000AC",
          morte: "#121212",
          sangue: "#d9534f",
          medo: "transparent",
          varia: "#fff",
        },
        f = $(!!a.homebrewAdd),
        b = T(),
        v = $(!1),
        L = j(() => u[a.cursedItem.element.toLowerCase()]),
        E = j(() => (L.value === "#fff" ? "#121212" : "#fff")),
        H = () => {
          m("handleAdd", a.cursedItem);
        },
        R = () => {
          const l = {
            id: a.cursedItem.id || a.id,
            itemType: a.cursedItem.itemType,
          };
          m("handleRemove", l);
        },
        C = () => {
          m("handleEdit", a.cursedItem);
        },
        g = () => {
          m("handleAddHomebrew", a.cursedItem);
        },
        y = () => {
          const l = b.resolve({ name: "homebrews-item", params: { id: a.id } });
          window.open(l.href, "_blank");
        },
        r = () => {
          a.homebrewAdd || (f.value = !f.value);
        };
      return (l, w) => {
        const A = x("vue-final-modal");
        return (
          o(),
          n(
            U,
            null,
            [
              t("div", uo, [
                t(
                  "div",
                  {
                    class: h(["header", { "homebrew-add": e.homebrewAdd }]),
                    onClick: r,
                  },
                  [
                    e.homebrewAdd
                      ? s("", !0)
                      : (o(),
                        n(
                          "button",
                          {
                            key: 0,
                            class: h(["show-more", { rotate: f.value }]),
                            onClick:
                              w[0] ||
                              (w[0] = d((W) => (f.value = !f.value), ["stop"])),
                          },
                          mo,
                          2
                        )),
                    t("div", null, [
                      t(
                        "h3",
                        {
                          class: h([
                            "title",
                            { "sheet-title": e.sheet && !e.homebrew },
                          ]),
                        },
                        i(e.cursedItem.name),
                        3
                      ),
                      t("div", ho, [
                        t("div", vo, [
                          t("h3", null, [
                            c("Category: "),
                            t("span", null, i(e.cursedItem.category), 1),
                          ]),
                        ]),
                        t("div", wo, [
                          t("h3", null, [
                            c("Space: "),
                            t("span", null, i(e.cursedItem.slots), 1),
                          ]),
                        ]),
                      ]),
                    ]),
                    !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                      ? (o(),
                        n("div", bo, [
                          t(
                            "button",
                            {
                              class: "button-primary",
                              onClick: d(H, ["stop"]),
                            },
                            yo,
                            8,
                            ko
                          ),
                        ]))
                      : s("", !0),
                    e.homebrewList
                      ? (o(),
                        n("div", $o, [
                          t(
                            "button",
                            {
                              class: "button-secondary",
                              onClick: d(y, ["stop"]),
                              onMouseup: d(y, ["middle"]),
                              onMousedown:
                                w[1] ||
                                (w[1] = d(() => {}, [
                                  "middle",
                                  "prevent",
                                  "stop",
                                ])),
                            },
                            " SHARE ",
                            40,
                            Co
                          ),
                        ]))
                      : s("", !0),
                  ],
                  2
                ),
                k(
                  O,
                  { name: "card", mode: "out-in" },
                  {
                    default: I(() => [
                      f.value
                        ? (o(),
                          n("div", go, [
                            k(V),
                            t("div", Ao, [
                              t("div", Mo, [
                                t(
                                  "h3",
                                  null,
                                  i(e.cursedItem.element.toUpperCase()),
                                  1
                                ),
                              ]),
                              e.cursedItem.pictureURL
                                ? (o(),
                                  n(
                                    "div",
                                    {
                                      key: 0,
                                      onClick:
                                        w[2] || (w[2] = (W) => (v.value = !0)),
                                    },
                                    [
                                      t(
                                        "img",
                                        {
                                          class: "card-image",
                                          src: e.cursedItem.pictureURL,
                                        },
                                        null,
                                        8,
                                        Lo
                                      ),
                                    ]
                                  ))
                                : s("", !0),
                            ]),
                            t("div", Ro, [
                              t(
                                "div",
                                {
                                  class: h([
                                    "description",
                                    { "sheet-content": e.sheet },
                                  ]),
                                  innerHTML: e.cursedItem.description,
                                },
                                null,
                                10,
                                Io
                              ),
                              e.sheet && !e.disabled
                                ? (o(),
                                  n("div", Eo, [
                                    t(
                                      "button",
                                      {
                                        class: "button-remove",
                                        onClick: d(R, ["stop"]),
                                      },
                                      i(e.homebrew ? "Delete" : "Remove"),
                                      9,
                                      Ho
                                    ),
                                    t(
                                      "button",
                                      {
                                        class: "button-remove button-edit",
                                        onClick: d(C, ["stop"]),
                                      },
                                      " Editar ",
                                      8,
                                      Bo
                                    ),
                                  ]))
                                : s("", !0),
                              e.canHomebrewAdd
                                ? (o(),
                                  n("div", So, [
                                    t("div", To, [
                                      t(
                                        "button",
                                        {
                                          class: "button-secondary",
                                          onClick: d(g, ["stop"]),
                                          onMouseup: d(g, ["middle"]),
                                          onMousedown:
                                            w[3] ||
                                            (w[3] = d(() => {}, [
                                              "middle",
                                              "prevent",
                                              "stop",
                                            ])),
                                        },
                                        " SAVE TO MY COLLECTION ",
                                        40,
                                        xo
                                      ),
                                    ]),
                                  ]))
                                : s("", !0),
                            ]),
                          ]))
                        : s("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              v.value
                ? (o(),
                  n("div", Oo, [
                    k(
                      A,
                      {
                        modelValue: v.value,
                        "onUpdate:modelValue":
                          w[4] || (w[4] = (W) => (v.value = W)),
                        classes: "modal-container",
                      },
                      {
                        default: I(() => [
                          t(
                            "img",
                            {
                              class: "card-image-full",
                              src: e.cursedItem.pictureURL,
                            },
                            null,
                            8,
                            Uo
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : s("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  zo = S(Vo, [["__scopeId", "data-v-c1c41836"]]);
export { zo as C, jo as M, Po as P, Wo as W };

import {
  d as E,
  o,
  c as n,
  a as t,
  t as s,
  C as c,
  _ as H,
  r as I,
  u as L,
  e as N,
  J as u,
  j as d,
  m as a,
  k as f,
  v as R,
  T as B,
  I as T,
  p as S,
  b as x,
  O as F,
  f as q,
} from "./index-vN3-fYvH.js";
import { _ as O } from "./show-more-icon-VvUXKiHG.js";
import { _ as D } from "./add-icon-fJ4uQHUZ.js";
const W =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23A347FF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M9%2016.2L4.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4L9%2016.2z'/%3e%3c/svg%3e",
  J = { class: "ammunition-card" },
  U = { class: "header" },
  G = { class: "title" },
  K = { class: "item-info-container" },
  Q = { class: "item-info" },
  X = { class: "item-info" },
  Y = E({
    __name: "AmmunitionCard",
    props: { ammunition: { type: Object, required: !0 } },
    setup(e) {
      return (C, i) => (
        o(),
        n("div", J, [
          t("div", U, [
            t("div", G, [t("h3", null, s(e.ammunition.name), 1)]),
            t("div", K, [
              t("div", Q, [
                t("h3", null, [
                  c("Category: "),
                  t("span", null, s(e.ammunition.category), 1),
                ]),
              ]),
              t("div", X, [
                t("h3", null, [
                  c("Space: "),
                  t("span", null, s(e.ammunition.slots), 1),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Z = H(Y, [["__scopeId", "data-v-0c4dbb3a"]]),
  P = (e) => (S("data-v-cbd16892"), (e = e()), x(), e),
  p = { class: "card" },
  ee = P(() => t("img", { src: O, alt: "ver mais" }, null, -1)),
  te = [ee],
  oe = { class: "first-row" },
  ne = { key: 0, class: "item-info-category" },
  se = { class: "item-info-container" },
  ie = { key: 0, class: "item-info" },
  ae = { class: "item-info" },
  de = { key: 0 },
  ce = { class: "item-info" },
  le = { key: 0 },
  he = { key: 1 },
  ue = { key: 2 },
  re = { key: 1, class: "flex-row" },
  me = { key: 0, class: "item-info" },
  we = { class: "item-info" },
  be = { class: "item-info" },
  ve = { key: 1, class: "item-info" },
  ke = { key: 1, class: "button-container" },
  ye = ["onClick"],
  fe = P(() => t("img", { src: D, alt: "adicionar" }, null, -1)),
  Ce = [fe],
  $e = { key: 2, class: "button-container" },
  Ae = ["onClick", "onMouseup"],
  ge = { key: 3, class: "button-container" },
  Me = ["disabled", "onClick"],
  Ie = { key: 0 },
  Ee = { class: "content" },
  He = { key: 0, class: "only-sheet-content-container" },
  _e = { class: "item-info-category-sheet" },
  Le = { class: "item-info" },
  Re = { key: 0, class: "item-info" },
  Be = { class: "item-info" },
  Te = { class: "item-info" },
  Se = { key: 1, class: "item-info" },
  xe = ["innerHTML"],
  Oe = { key: 2, class: "card-footer" },
  De = ["onClick"],
  Ne = ["onClick"],
  qe = { key: 3, class: "card-footer" },
  We = { class: "button-container" },
  Pe = ["onClick", "onMouseup"],
  Ve = E({
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
    setup(e, { emit: C }) {
      const i = e,
        h = C,
        l = I(!!i.homebrewAdd),
        w = L(),
        r = I(window.innerWidth),
        $ = () => {
          h("handleAdd", i.weapon);
        },
        g = () => {
          const m = { id: i.weapon.id || i.id, itemType: i.weapon.itemType };
          h("handleRemove", m);
        },
        M = () => {
          h("handleEquip", i.id);
        },
        A = () => {
          h("handleEdit", i.weapon);
        },
        k = () => {
          h("handleAddHomebrew", i.weapon);
        },
        y = () => {
          const m = w.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(m.href, "_blank");
        },
        v = () => {
          i.homebrewAdd || (l.value = !l.value);
        };
      return (
        N(() => {
          window.addEventListener("resize", () => {
            r.value = window.innerWidth;
          });
        }),
        (m, b) => (
          o(),
          n("div", p, [
            t(
              "div",
              {
                class: u(["header", { "homebrew-add": e.homebrewAdd }]),
                onClick: v,
              },
              [
                e.homebrewAdd
                  ? a("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 0,
                        class: u(["show-more", { rotate: l.value }]),
                        onClick:
                          b[0] ||
                          (b[0] = d((_) => (l.value = !l.value), ["stop"])),
                      },
                      te,
                      2
                    )),
                t("div", null, [
                  t("div", oe, [
                    t(
                      "h3",
                      {
                        class: u([
                          "title",
                          { "sheet-title": e.sheet && !e.homebrew },
                        ]),
                      },
                      s(e.weapon.name),
                      3
                    ),
                    (!e.sheet || e.homebrew) && r.value >= 1023
                      ? (o(),
                        n("div", ne, [
                          t("h3", null, [
                            t("b", null, s(e.weapon.proficiencie), 1),
                            c(" - "),
                            t(
                              "i",
                              null,
                              s(e.weapon.type) + " - " + s(e.weapon.handling),
                              1
                            ),
                          ]),
                        ]))
                      : a("", !0),
                  ]),
                  t("div", se, [
                    (!e.sheet || e.homebrew) && r.value >= 1023
                      ? (o(),
                        n("div", ie, [
                          t("h3", null, [
                            c("Category: "),
                            t("span", null, s(e.weapon.category), 1),
                          ]),
                        ]))
                      : a("", !0),
                    t("div", ae, [
                      t("h3", null, [
                        c(" Damage: "),
                        t("span", null, s(e.weapon.damage), 1),
                        e.weapon.secondaryDamage
                          ? (o(),
                            n("span", de, "/" + s(e.weapon.secondaryDamage), 1))
                          : a("", !0),
                      ]),
                    ]),
                    t("div", ce, [
                      t("h3", null, [
                        c(" Critical: "),
                        e.weapon.criticalRange < 20 && e.weapon.criticalMult > 2
                          ? (o(),
                            n(
                              "span",
                              le,
                              s(e.weapon.criticalRange) +
                                "/x" +
                                s(e.weapon.criticalMult),
                              1
                            ))
                          : e.weapon.criticalRange < 20
                          ? (o(), n("span", he, s(e.weapon.criticalRange), 1))
                          : (o(),
                            n("span", ue, "x" + s(e.weapon.criticalMult), 1)),
                      ]),
                    ]),
                    (!e.sheet || e.homebrew) && r.value >= 1023
                      ? (o(),
                        n("div", re, [
                          e.weapon.range !== "-"
                            ? (o(),
                              n("div", me, [
                                t("h3", null, [
                                  c("Range: "),
                                  t("span", null, s(e.weapon.range), 1),
                                ]),
                              ]))
                            : a("", !0),
                          t("div", we, [
                            t("h3", null, [
                              c("Type: "),
                              t("span", null, s(e.weapon.damageType), 1),
                            ]),
                          ]),
                          t("div", be, [
                            t("h3", null, [
                              c("Space: "),
                              t("span", null, s(e.weapon.slots), 1),
                            ]),
                          ]),
                          e.weapon.ammunitionName
                            ? (o(),
                              n("div", ve, [
                                t("h3", null, [
                                  c("Ammo: "),
                                  t(
                                    "span",
                                    null,
                                    s(e.weapon.ammunitionName),
                                    1
                                  ),
                                ]),
                              ]))
                            : a("", !0),
                        ]))
                      : a("", !0),
                  ]),
                ]),
                !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                  ? (o(),
                    n("div", ke, [
                      t(
                        "button",
                        { class: "button-primary", onClick: d($, ["stop"]) },
                        Ce,
                        8,
                        ye
                      ),
                    ]))
                  : a("", !0),
                e.homebrewList
                  ? (o(),
                    n("div", $e, [
                      t(
                        "button",
                        {
                          class: "button-secondary",
                          onClick: d(y, ["stop"]),
                          onMouseup: d(y, ["middle"]),
                        },
                        " SHARE ",
                        40,
                        Ae
                      ),
                    ]))
                  : a("", !0),
                e.sheet && !e.homebrew
                  ? (o(),
                    n("div", ge, [
                      t(
                        "button",
                        {
                          class: u([
                            "checkbox-button",
                            { disabled: e.disabled },
                          ]),
                          disabled: e.disabled,
                          onClick: d(M, ["stop"]),
                        },
                        [
                          t(
                            "img",
                            {
                              src: W,
                              alt: "equipar",
                              class: u([
                                "checkbox-img",
                                { "checkbox-img-fade": !e.weapon.equipped },
                              ]),
                            },
                            null,
                            2
                          ),
                        ],
                        10,
                        Me
                      ),
                    ]))
                  : a("", !0),
              ],
              2
            ),
            f(
              B,
              { name: "card", mode: "out-in" },
              {
                default: R(() => [
                  l.value
                    ? (o(),
                      n("div", Ie, [
                        f(T),
                        t("div", Ee, [
                          (e.sheet && !e.homebrew) || !(r.value >= 1023)
                            ? (o(),
                              n("div", He, [
                                t("div", _e, [
                                  t("h3", null, [
                                    t("b", null, s(e.weapon.proficiencie), 1),
                                    c(" - "),
                                    t(
                                      "i",
                                      null,
                                      s(e.weapon.type) +
                                        " - " +
                                        s(e.weapon.handling),
                                      1
                                    ),
                                  ]),
                                ]),
                                t("div", Le, [
                                  t("h3", null, [
                                    c("Category: "),
                                    t("span", null, s(e.weapon.category), 1),
                                  ]),
                                ]),
                                e.weapon.range !== "-"
                                  ? (o(),
                                    n("div", Re, [
                                      t("h3", null, [
                                        c("Range: "),
                                        t("span", null, s(e.weapon.range), 1),
                                      ]),
                                    ]))
                                  : a("", !0),
                                t("div", Be, [
                                  t("h3", null, [
                                    c("Type: "),
                                    t("span", null, s(e.weapon.damageType), 1),
                                  ]),
                                ]),
                                t("div", Te, [
                                  t("h3", null, [
                                    c("Space: "),
                                    t("span", null, s(e.weapon.slots), 1),
                                  ]),
                                ]),
                                e.weapon.ammunitionName
                                  ? (o(),
                                    n("div", Se, [
                                      t("h3", null, [
                                        c("Ammo: "),
                                        t(
                                          "span",
                                          null,
                                          s(e.weapon.ammunitionName),
                                          1
                                        ),
                                      ]),
                                    ]))
                                  : a("", !0),
                              ]))
                            : a("", !0),
                          e.weapon.ammunition
                            ? (o(),
                              n(
                                "div",
                                {
                                  key: 1,
                                  class: u({
                                    "sheet-content": e.sheet && !e.homebrew,
                                  }),
                                },
                                [
                                  f(
                                    Z,
                                    { ammunition: e.weapon.ammunition },
                                    null,
                                    8,
                                    ["ammunition"]
                                  ),
                                ],
                                2
                              ))
                            : a("", !0),
                          t(
                            "div",
                            {
                              class: u({
                                "sheet-content": e.sheet && !e.homebrew,
                              }),
                              innerHTML: e.weapon.description,
                            },
                            null,
                            10,
                            xe
                          ),
                          e.sheet && !e.disabled
                            ? (o(),
                              n("div", Oe, [
                                t(
                                  "button",
                                  {
                                    class: "button-remove",
                                    onClick: d(g, ["stop"]),
                                  },
                                  s(e.homebrew ? "Delete" : "Remove"),
                                  9,
                                  De
                                ),
                                t(
                                  "button",
                                  {
                                    class: "button-remove button-edit",
                                    onClick: d(A, ["stop"]),
                                  },
                                  " Edit ",
                                  8,
                                  Ne
                                ),
                              ]))
                            : a("", !0),
                          e.canHomebrewAdd
                            ? (o(),
                              n("div", qe, [
                                t("div", We, [
                                  t(
                                    "button",
                                    {
                                      class: "button-secondary",
                                      onClick: d(k, ["stop"]),
                                      onMouseup: d(k, ["middle"]),
                                    },
                                    " ADD TO MY COLLECTION ",
                                    40,
                                    Pe
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
        )
      );
    },
  }),
  ko = H(Ve, [["__scopeId", "data-v-cbd16892"]]),
  V = (e) => (S("data-v-35c065de"), (e = e()), x(), e),
  je = { class: "card" },
  ze = V(() => t("img", { src: O, alt: "ver mais" }, null, -1)),
  Fe = [ze],
  Je = { class: "first-row" },
  Ue = { class: "item-info-container" },
  Ge = { class: "item-info" },
  Ke = { key: 0, class: "flex-row" },
  Qe = { class: "item-info" },
  Xe = { class: "item-info" },
  Ye = { key: 1, class: "button-container" },
  Ze = ["onClick"],
  pe = V(() => t("img", { src: D, alt: "adicionar" }, null, -1)),
  et = [pe],
  tt = { key: 2, class: "button-container" },
  ot = ["onClick", "onMouseup"],
  nt = { key: 3, class: "button-container" },
  st = ["disabled", "onClick"],
  it = { key: 0 },
  at = { class: "content" },
  dt = { key: 0, class: "only-sheet-content-container" },
  ct = { class: "item-info" },
  lt = { class: "item-info" },
  ht = ["innerHTML"],
  ut = { key: 1, class: "card-footer" },
  rt = ["onClick"],
  mt = ["onClick"],
  wt = { key: 2, class: "card-footer" },
  bt = { class: "button-container" },
  vt = ["onClick", "onMouseup"],
  kt = E({
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
    setup(e, { emit: C }) {
      const i = e,
        h = C,
        l = I(!!i.homebrewAdd),
        w = L(),
        r = I(window.innerWidth),
        $ = () => {
          h("handleAdd", i.protection);
        },
        g = () => {
          const m = {
            id: i.protection.id || i.id,
            itemType: i.protection.itemType,
          };
          h("handleRemove", m);
        },
        M = () => {
          h("handleEquip", i.id);
        },
        A = () => {
          h("handleEdit", i.protection);
        },
        k = () => {
          h("handleAddHomebrew", i.protection);
        },
        y = () => {
          const m = w.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(m.href, "_blank");
        },
        v = () => {
          i.homebrewAdd || (l.value = !l.value);
        };
      return (
        N(() => {
          window.addEventListener("resize", () => {
            r.value = window.innerWidth;
          });
        }),
        (m, b) => (
          o(),
          n("div", je, [
            t(
              "div",
              {
                class: u(["header", { "homebrew-add": e.homebrewAdd }]),
                onClick: v,
              },
              [
                e.homebrewAdd
                  ? a("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 0,
                        class: u(["show-more", { rotate: l.value }]),
                        onClick:
                          b[0] ||
                          (b[0] = d((_) => (l.value = !l.value), ["stop"])),
                      },
                      Fe,
                      2
                    )),
                t("div", null, [
                  t("div", Je, [
                    t(
                      "h3",
                      {
                        class: u([
                          "title",
                          { "sheet-title": e.sheet && !e.homebrew },
                        ]),
                      },
                      s(e.protection.name),
                      3
                    ),
                  ]),
                  t("div", Ue, [
                    t("div", Ge, [
                      t("h3", null, [
                        c("Defense: "),
                        t("span", null, "+" + s(e.protection.defense), 1),
                      ]),
                    ]),
                    (!e.sheet || e.homebrew) && r.value >= 1023
                      ? (o(),
                        n("div", Ke, [
                          t("div", Qe, [
                            t("h3", null, [
                              c("Category: "),
                              t("span", null, s(e.protection.category), 1),
                            ]),
                          ]),
                          t("div", Xe, [
                            t("h3", null, [
                              c("Space: "),
                              t("span", null, s(e.protection.slots), 1),
                            ]),
                          ]),
                        ]))
                      : a("", !0),
                  ]),
                ]),
                !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                  ? (o(),
                    n("div", Ye, [
                      t(
                        "button",
                        { class: "button-primary", onClick: d($, ["stop"]) },
                        et,
                        8,
                        Ze
                      ),
                    ]))
                  : a("", !0),
                e.homebrewList
                  ? (o(),
                    n("div", tt, [
                      t(
                        "button",
                        {
                          class: "button-secondary",
                          onClick: d(y, ["stop"]),
                          onMouseup: d(y, ["middle"]),
                        },
                        " COMPARTILHAR ",
                        40,
                        ot
                      ),
                    ]))
                  : a("", !0),
                e.sheet && !e.homebrew
                  ? (o(),
                    n("div", nt, [
                      t(
                        "button",
                        {
                          class: u([
                            "checkbox-button",
                            { disabled: e.disabled },
                          ]),
                          disabled: e.disabled,
                          onClick: d(M, ["stop"]),
                        },
                        [
                          t(
                            "img",
                            {
                              src: W,
                              alt: "equipar",
                              class: u([
                                "checkbox-img",
                                { "checkbox-img-fade": !e.protection.equipped },
                              ]),
                            },
                            null,
                            2
                          ),
                        ],
                        10,
                        st
                      ),
                    ]))
                  : a("", !0),
              ],
              2
            ),
            f(
              B,
              { name: "card", mode: "out-in" },
              {
                default: R(() => [
                  l.value
                    ? (o(),
                      n("div", it, [
                        f(T),
                        t("div", at, [
                          e.sheet || !(r.value >= 1023)
                            ? (o(),
                              n("div", dt, [
                                t("div", ct, [
                                  t("h3", null, [
                                    c("Category: "),
                                    t(
                                      "span",
                                      null,
                                      s(e.protection.category),
                                      1
                                    ),
                                  ]),
                                ]),
                                t("div", lt, [
                                  t("h3", null, [
                                    c("Space: "),
                                    t("span", null, s(e.protection.slots), 1),
                                  ]),
                                ]),
                              ]))
                            : a("", !0),
                          t(
                            "div",
                            {
                              class: u({ "sheet-content": e.sheet }),
                              innerHTML: e.protection.description,
                            },
                            null,
                            10,
                            ht
                          ),
                          e.sheet && !e.disabled
                            ? (o(),
                              n("div", ut, [
                                t(
                                  "button",
                                  {
                                    class: "button-remove",
                                    onClick: d(g, ["stop"]),
                                  },
                                  s(e.homebrew ? "Delete" : "Remove"),
                                  9,
                                  rt
                                ),
                                t(
                                  "button",
                                  {
                                    class: "button-remove button-edit",
                                    onClick: d(A, ["stop"]),
                                  },
                                  " Edit ",
                                  8,
                                  mt
                                ),
                              ]))
                            : a("", !0),
                          e.canHomebrewAdd
                            ? (o(),
                              n("div", wt, [
                                t("div", bt, [
                                  t(
                                    "button",
                                    {
                                      class: "button-secondary",
                                      onClick: d(k, ["stop"]),
                                      onMouseup: d(k, ["middle"]),
                                    },
                                    " ADD TO MY COLLECTION ",
                                    40,
                                    vt
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
        )
      );
    },
  }),
  yo = H(kt, [["__scopeId", "data-v-35c065de"]]),
  j = (e) => (S("data-v-075898a5"), (e = e()), x(), e),
  yt = { class: "card" },
  ft = j(() => t("img", { src: O, alt: "ver mais" }, null, -1)),
  Ct = [ft],
  $t = { class: "first-row" },
  At = { key: 0, class: "item-info-category" },
  gt = { class: "item-info-container" },
  Mt = { class: "item-info" },
  It = { class: "item-info" },
  Et = { key: 1, class: "button-container" },
  Ht = ["onClick"],
  _t = j(() => t("img", { src: D, alt: "adicionar" }, null, -1)),
  Lt = [_t],
  Rt = { key: 2, class: "button-container" },
  Bt = ["onClick", "onMouseup"],
  Tt = { key: 0 },
  St = { class: "content" },
  xt = { key: 0, class: "item-info-category-sheet" },
  Ot = ["innerHTML"],
  Dt = { key: 1, class: "card-footer" },
  Nt = ["onClick"],
  qt = ["onClick"],
  Wt = { key: 2, class: "card-footer" },
  Pt = { class: "button-container" },
  Vt = ["onClick", "onMouseup"],
  jt = E({
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
    setup(e, { emit: C }) {
      const i = e,
        h = C,
        l = I(!!i.homebrewAdd),
        w = L(),
        r = I(window.innerWidth),
        $ = () => {
          h("handleAdd", i.misc);
        },
        g = () => {
          const v = { id: i.misc.id || i.id, itemType: i.misc.itemType };
          h("handleRemove", v);
        },
        M = () => {
          h("handleEdit", i.misc);
        },
        A = () => {
          h("handleAddHomebrew", i.misc);
        },
        k = () => {
          const v = w.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(v.href, "_blank");
        },
        y = () => {
          i.homebrewAdd || (l.value = !l.value);
        };
      return (
        N(() => {
          window.addEventListener("resize", () => {
            r.value = window.innerWidth;
          });
        }),
        (v, m) => (
          o(),
          n("div", yt, [
            t(
              "div",
              {
                class: u(["header", { "homebrew-add": e.homebrewAdd }]),
                onClick: y,
              },
              [
                e.homebrewAdd
                  ? a("", !0)
                  : (o(),
                    n(
                      "button",
                      {
                        key: 0,
                        class: u(["show-more", { rotate: l.value }]),
                        onClick:
                          m[0] ||
                          (m[0] = d((b) => (l.value = !l.value), ["stop"])),
                      },
                      Ct,
                      2
                    )),
                t("div", null, [
                  t("div", $t, [
                    t(
                      "h3",
                      {
                        class: u([
                          "title",
                          { "sheet-title": e.sheet && !e.homebrew },
                        ]),
                      },
                      s(e.misc.name),
                      3
                    ),
                    (!e.sheet || e.homebrew) && r.value >= 1023
                      ? (o(),
                        n("div", At, [
                          t("h3", null, [t("i", null, s(e.misc.tag), 1)]),
                        ]))
                      : a("", !0),
                  ]),
                  t("div", gt, [
                    t("div", Mt, [
                      t("h3", null, [
                        c("Category: "),
                        t("span", null, s(e.misc.category), 1),
                      ]),
                    ]),
                    t("div", It, [
                      t("h3", null, [
                        c("Space: "),
                        t("span", null, s(e.misc.slots), 1),
                      ]),
                    ]),
                  ]),
                ]),
                !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                  ? (o(),
                    n("div", Et, [
                      t(
                        "button",
                        { class: "button-primary", onClick: d($, ["stop"]) },
                        Lt,
                        8,
                        Ht
                      ),
                    ]))
                  : a("", !0),
                e.homebrewList
                  ? (o(),
                    n("div", Rt, [
                      t(
                        "button",
                        {
                          class: "button-secondary",
                          onClick: d(k, ["stop"]),
                          onMouseup: d(k, ["middle"]),
                        },
                        " SHARE ",
                        40,
                        Bt
                      ),
                    ]))
                  : a("", !0),
              ],
              2
            ),
            f(
              B,
              { name: "card", mode: "out-in" },
              {
                default: R(() => [
                  l.value
                    ? (o(),
                      n("div", Tt, [
                        f(T),
                        t("div", St, [
                          e.sheet || !(r.value >= 1023)
                            ? (o(),
                              n("div", xt, [
                                t("h3", null, [t("i", null, s(e.misc.tag), 1)]),
                              ]))
                            : a("", !0),
                          t(
                            "div",
                            {
                              class: u({ "sheet-content": e.sheet }),
                              innerHTML: e.misc.description,
                            },
                            null,
                            10,
                            Ot
                          ),
                          e.sheet && !e.disabled
                            ? (o(),
                              n("div", Dt, [
                                t(
                                  "button",
                                  {
                                    class: "button-remove",
                                    onClick: d(g, ["stop"]),
                                  },
                                  s(e.homebrew ? "Delete" : "Remove"),
                                  9,
                                  Nt
                                ),
                                t(
                                  "button",
                                  {
                                    class: "button-remove button-edit",
                                    onClick: d(M, ["stop"]),
                                  },
                                  " Edit ",
                                  8,
                                  qt
                                ),
                              ]))
                            : a("", !0),
                          e.canHomebrewAdd
                            ? (o(),
                              n("div", Wt, [
                                t("div", Pt, [
                                  t(
                                    "button",
                                    {
                                      class: "button-secondary",
                                      onClick: d(A, ["stop"]),
                                      onMouseup: d(A, ["middle"]),
                                    },
                                    " ADD TO MY COLLECTION ",
                                    40,
                                    Vt
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
        )
      );
    },
  }),
  fo = H(jt, [["__scopeId", "data-v-075898a5"]]),
  z = (e) => (S("data-v-9de3db32"), (e = e()), x(), e),
  zt = { class: "card" },
  Ft = z(() => t("img", { src: O, alt: "ver mais" }, null, -1)),
  Jt = [Ft],
  Ut = { class: "item-info-container" },
  Gt = { class: "item-info" },
  Kt = { class: "item-info" },
  Qt = { key: 1, class: "button-container" },
  Xt = ["onClick"],
  Yt = z(() => t("img", { src: D, alt: "adicionar" }, null, -1)),
  Zt = [Yt],
  pt = { key: 2, class: "button-container" },
  eo = ["onClick", "onMouseup"],
  to = { key: 0 },
  oo = { class: "item-element" },
  no = { class: "content" },
  so = ["innerHTML"],
  io = { key: 0, class: "card-footer" },
  ao = ["onClick"],
  co = ["onClick"],
  lo = { key: 1, class: "card-footer" },
  ho = { class: "button-container" },
  uo = ["onClick", "onMouseup"],
  ro = E({
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
    setup(e, { emit: C }) {
      F((b) => ({ "5ee78c94": $.value, bfd8c83e: g.value }));
      const i = e,
        h = C,
        l = {
          knowledge: "#ff8c00",
          energy: "#7000AC",
          death: "#121212",
          blood: "#d9534f",
          fear: "#dae4e6",
          varies: "#fff",
        },
        w = I(!!i.homebrewAdd),
        r = L(),
        $ = q(() => l[i.cursedItem.element.toLowerCase()]),
        g = q(() => ($.value === "#fff" || "#dae4e6" ? "#121212" : "#fff")),
        M = () => {
          h("handleAdd", i.cursedItem);
        },
        A = () => {
          const b = {
            id: i.cursedItem.id || i.id,
            itemType: i.cursedItem.itemType,
          };
          h("handleRemove", b);
        },
        k = () => {
          h("handleEdit", i.cursedItem);
        },
        y = () => {
          h("handleAddHomebrew", i.cursedItem);
        },
        v = () => {
          const b = r.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(b.href, "_blank");
        },
        m = () => {
          i.homebrewAdd || (w.value = !w.value);
        };
      return (b, _) => (
        o(),
        n("div", zt, [
          t(
            "div",
            {
              class: u(["header", { "homebrew-add": e.homebrewAdd }]),
              onClick: m,
            },
            [
              e.homebrewAdd
                ? a("", !0)
                : (o(),
                  n(
                    "button",
                    {
                      key: 0,
                      class: u(["show-more", { rotate: w.value }]),
                      onClick:
                        _[0] ||
                        (_[0] = d((mo) => (w.value = !w.value), ["stop"])),
                    },
                    Jt,
                    2
                  )),
              t("div", null, [
                t(
                  "h3",
                  {
                    class: u([
                      "title",
                      { "sheet-title": e.sheet && !e.homebrew },
                    ]),
                  },
                  s(e.cursedItem.name),
                  3
                ),
                t("div", Ut, [
                  t("div", Gt, [
                    t("h3", null, [
                      c("Category: "),
                      t("span", null, s(e.cursedItem.category), 1),
                    ]),
                  ]),
                  t("div", Kt, [
                    t("h3", null, [
                      c("Space: "),
                      t("span", null, s(e.cursedItem.slots), 1),
                    ]),
                  ]),
                ]),
              ]),
              !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                ? (o(),
                  n("div", Qt, [
                    t(
                      "button",
                      { class: "button-primary", onClick: d(M, ["stop"]) },
                      Zt,
                      8,
                      Xt
                    ),
                  ]))
                : a("", !0),
              e.homebrewList
                ? (o(),
                  n("div", pt, [
                    t(
                      "button",
                      {
                        class: "button-secondary",
                        onClick: d(v, ["stop"]),
                        onMouseup: d(v, ["middle"]),
                      },
                      " SHARE ",
                      40,
                      eo
                    ),
                  ]))
                : a("", !0),
            ],
            2
          ),
          f(
            B,
            { name: "card", mode: "out-in" },
            {
              default: R(() => [
                w.value
                  ? (o(),
                    n("div", to, [
                      f(T),
                      t("div", oo, [
                        t("h3", null, s(e.cursedItem.element.toUpperCase()), 1),
                      ]),
                      t("div", no, [
                        t(
                          "div",
                          {
                            class: u({ "sheet-content": e.sheet }),
                            innerHTML: e.cursedItem.description,
                          },
                          null,
                          10,
                          so
                        ),
                        e.sheet && !e.disabled
                          ? (o(),
                            n("div", io, [
                              t(
                                "button",
                                {
                                  class: "button-remove",
                                  onClick: d(A, ["stop"]),
                                },
                                s(e.homebrew ? "Delete" : "Remove"),
                                9,
                                ao
                              ),
                              t(
                                "button",
                                {
                                  class: "button-remove button-edit",
                                  onClick: d(k, ["stop"]),
                                },
                                " Edit ",
                                8,
                                co
                              ),
                            ]))
                          : a("", !0),
                        e.canHomebrewAdd
                          ? (o(),
                            n("div", lo, [
                              t("div", ho, [
                                t(
                                  "button",
                                  {
                                    class: "button-secondary",
                                    onClick: d(y, ["stop"]),
                                    onMouseup: d(y, ["middle"]),
                                  },
                                  " ADD TO MY COLLECTION ",
                                  40,
                                  uo
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
  Co = H(ro, [["__scopeId", "data-v-9de3db32"]]);
export { Co as C, fo as M, yo as P, ko as W };

import {
  d as H,
  o,
  c as n,
  a as t,
  t as s,
  H as l,
  _ as L,
  r as E,
  u as R,
  e as N,
  a1 as u,
  j as d,
  m as a,
  k as f,
  x as B,
  T,
  a4 as x,
  p as S,
  b as O,
  Q as F,
  f as q,
} from "./index-QwuuguuZ.js";
import { _ } from "./show-more-icon-VvUXKiHG.js";
import { _ as D } from "./add-icon-fJ4uQHUZ.js";
const W =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%200%2024%2024'%20width='24px'%20fill='%23A347FF'%3e%3cpath%20d='M0%200h24v24H0V0z'%20fill='none'/%3e%3cpath%20d='M9%2016.2L4.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4L9%2016.2z'/%3e%3c/svg%3e",
  p = { class: "ammunition-card" },
  Q = { class: "header" },
  U = { class: "title" },
  G = { class: "item-info-container" },
  J = { class: "item-info" },
  K = { class: "item-info" },
  X = H({
    __name: "AmmunitionCard",
    props: { ammunition: { type: Object, required: !0 } },
    setup(e) {
      return (C, i) => (
        o(),
        n("div", p, [
          t("div", Q, [
            t("div", U, [t("h3", null, s(e.ammunition.name), 1)]),
            t("div", G, [
              t("div", J, [
                t("h3", null, [
                  l("Category: "),
                  t("span", null, s(e.ammunition.category), 1),
                ]),
              ]),
              t("div", K, [
                t("h3", null, [
                  l("Space: "),
                  t("span", null, s(e.ammunition.slots), 1),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Y = L(X, [["__scopeId", "data-v-0c4dbb3a"]]),
  P = (e) => (S("data-v-cd556095"), (e = e()), O(), e),
  Z = { class: "card" },
  ee = P(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  te = [ee],
  oe = { class: "first-row" },
  ne = { key: 0, class: "item-info-category" },
  se = { class: "item-info-container" },
  ie = { key: 0, class: "item-info" },
  de = { class: "item-info" },
  ae = { key: 0 },
  le = { class: "item-info" },
  ce = { key: 0 },
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
  Le = { class: "item-info-category-sheet" },
  Re = { class: "item-info" },
  Be = { key: 0, class: "item-info" },
  Te = { class: "item-info" },
  xe = { class: "item-info" },
  Se = { key: 1, class: "item-info" },
  Oe = ["innerHTML"],
  _e = { key: 2, class: "card-footer" },
  De = ["onClick"],
  Ne = ["onClick"],
  qe = { key: 3, class: "card-footer" },
  We = { class: "button-container" },
  Pe = ["onClick", "onMouseup"],
  Ve = H({
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
        c = E(!!i.homebrewAdd),
        b = R(),
        w = E(window.innerWidth),
        $ = () => {
          h("handleAdd", i.weapon);
        },
        M = () => {
          const m = { id: i.weapon.id || i.id, itemType: i.weapon.itemType };
          h("handleRemove", m);
        },
        I = () => {
          h("handleEquip", i.id);
        },
        A = () => {
          h("handleEdit", i.weapon);
        },
        k = () => {
          h("handleAddHomebrew", i.weapon);
        },
        y = () => {
          const m = b.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(m.href, "_blank");
        },
        v = () => {
          i.homebrewAdd || (c.value = !c.value);
        };
      return (
        N(() => {
          window.addEventListener("resize", () => {
            w.value = window.innerWidth;
          });
        }),
        (m, r) => (
          o(),
          n("div", Z, [
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
                        class: u(["show-more", { rotate: c.value }]),
                        onClick:
                          r[0] ||
                          (r[0] = d((g) => (c.value = !c.value), ["stop"])),
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
                    (!e.sheet || e.homebrew) && w.value >= 1023
                      ? (o(),
                        n("div", ne, [
                          t("h3", null, [
                            t("b", null, s(e.weapon.proficiencie), 1),
                            l(" - "),
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
                    (!e.sheet || e.homebrew) && w.value >= 1023
                      ? (o(),
                        n("div", ie, [
                          t("h3", null, [
                            l("Category: "),
                            t("span", null, s(e.weapon.category), 1),
                          ]),
                        ]))
                      : a("", !0),
                    t("div", de, [
                      t("h3", null, [
                        l(" Damage: "),
                        t("span", null, s(e.weapon.damage), 1),
                        e.weapon.secondaryDamage
                          ? (o(),
                            n("span", ae, "/" + s(e.weapon.secondaryDamage), 1))
                          : a("", !0),
                      ]),
                    ]),
                    t("div", le, [
                      t("h3", null, [
                        l(" Critical: "),
                        e.weapon.criticalRange < 20 && e.weapon.criticalMult > 2
                          ? (o(),
                            n(
                              "span",
                              ce,
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
                    (!e.sheet || e.homebrew) && w.value >= 1023
                      ? (o(),
                        n("div", re, [
                          e.weapon.range !== "-"
                            ? (o(),
                              n("div", me, [
                                t("h3", null, [
                                  l("Range: "),
                                  t("span", null, s(e.weapon.range), 1),
                                ]),
                              ]))
                            : a("", !0),
                          t("div", we, [
                            t("h3", null, [
                              l("Type: "),
                              t("span", null, s(e.weapon.damageType), 1),
                            ]),
                          ]),
                          t("div", be, [
                            t("h3", null, [
                              l("Space: "),
                              t("span", null, s(e.weapon.slots), 1),
                            ]),
                          ]),
                          e.weapon.ammunitionName
                            ? (o(),
                              n("div", ve, [
                                t("h3", null, [
                                  l("Ammo: "),
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
                          onMousedown:
                            r[1] ||
                            (r[1] = d(() => {}, ["middle", "prevent", "stop"])),
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
                          onClick: d(I, ["stop"]),
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
              T,
              { name: "card", mode: "out-in" },
              {
                default: B(() => [
                  c.value
                    ? (o(),
                      n("div", Ie, [
                        f(x),
                        t("div", Ee, [
                          (e.sheet && !e.homebrew) || !(w.value >= 1023)
                            ? (o(),
                              n("div", He, [
                                t("div", Le, [
                                  t("h3", null, [
                                    t("b", null, s(e.weapon.proficiencie), 1),
                                    l(" - "),
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
                                t("div", Re, [
                                  t("h3", null, [
                                    l("Category: "),
                                    t("span", null, s(e.weapon.category), 1),
                                  ]),
                                ]),
                                e.weapon.range !== "-"
                                  ? (o(),
                                    n("div", Be, [
                                      t("h3", null, [
                                        l("Range: "),
                                        t("span", null, s(e.weapon.range), 1),
                                      ]),
                                    ]))
                                  : a("", !0),
                                t("div", Te, [
                                  t("h3", null, [
                                    l("Type: "),
                                    t("span", null, s(e.weapon.damageType), 1),
                                  ]),
                                ]),
                                t("div", xe, [
                                  t("h3", null, [
                                    l("Space: "),
                                    t("span", null, s(e.weapon.slots), 1),
                                  ]),
                                ]),
                                e.weapon.ammunitionName
                                  ? (o(),
                                    n("div", Se, [
                                      t("h3", null, [
                                        l("Ammo: "),
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
                                    Y,
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
                              class: u([
                                "description",
                                { "sheet-content": e.sheet && !e.homebrew },
                              ]),
                              innerHTML: e.weapon.description,
                            },
                            null,
                            10,
                            Oe
                          ),
                          e.sheet && !e.disabled
                            ? (o(),
                              n("div", _e, [
                                t(
                                  "button",
                                  {
                                    class: "button-remove",
                                    onClick: d(M, ["stop"]),
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
                                      onMousedown:
                                        r[2] ||
                                        (r[2] = d(() => {}, [
                                          "middle",
                                          "prevent",
                                          "stop",
                                        ])),
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
  ko = L(Ve, [["__scopeId", "data-v-cd556095"]]),
  V = (e) => (S("data-v-040f7620"), (e = e()), O(), e),
  je = { class: "card" },
  ze = V(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  Fe = [ze],
  pe = { class: "first-row" },
  Qe = { class: "item-info-container" },
  Ue = { class: "item-info" },
  Ge = { key: 0, class: "flex-row" },
  Je = { class: "item-info" },
  Ke = { class: "item-info" },
  Xe = { key: 1, class: "button-container" },
  Ye = ["onClick"],
  Ze = V(() => t("img", { src: D, alt: "adicionar" }, null, -1)),
  et = [Ze],
  tt = { key: 2, class: "button-container" },
  ot = ["onClick", "onMouseup"],
  nt = { key: 3, class: "button-container" },
  st = ["disabled", "onClick"],
  it = { key: 0 },
  dt = { class: "content" },
  at = { key: 0, class: "only-sheet-content-container" },
  lt = { class: "item-info" },
  ct = { class: "item-info" },
  ht = ["innerHTML"],
  ut = { key: 1, class: "card-footer" },
  rt = ["onClick"],
  mt = ["onClick"],
  wt = { key: 2, class: "card-footer" },
  bt = { class: "button-container" },
  vt = ["onClick", "onMouseup"],
  kt = H({
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
        c = E(!!i.homebrewAdd),
        b = R(),
        w = E(window.innerWidth),
        $ = () => {
          h("handleAdd", i.protection);
        },
        M = () => {
          const m = {
            id: i.protection.id || i.id,
            itemType: i.protection.itemType,
          };
          h("handleRemove", m);
        },
        I = () => {
          h("handleEquip", i.id);
        },
        A = () => {
          h("handleEdit", i.protection);
        },
        k = () => {
          h("handleAddHomebrew", i.protection);
        },
        y = () => {
          const m = b.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(m.href, "_blank");
        },
        v = () => {
          i.homebrewAdd || (c.value = !c.value);
        };
      return (
        N(() => {
          window.addEventListener("resize", () => {
            w.value = window.innerWidth;
          });
        }),
        (m, r) => (
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
                        class: u(["show-more", { rotate: c.value }]),
                        onClick:
                          r[0] ||
                          (r[0] = d((g) => (c.value = !c.value), ["stop"])),
                      },
                      Fe,
                      2
                    )),
                t("div", null, [
                  t("div", pe, [
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
                  t("div", Qe, [
                    t("div", Ue, [
                      t("h3", null, [
                        l("Defense: "),
                        t("span", null, "+" + s(e.protection.defense), 1),
                      ]),
                    ]),
                    (!e.sheet || e.homebrew) && w.value >= 1023
                      ? (o(),
                        n("div", Ge, [
                          t("div", Je, [
                            t("h3", null, [
                              l("Category: "),
                              t("span", null, s(e.protection.category), 1),
                            ]),
                          ]),
                          t("div", Ke, [
                            t("h3", null, [
                              l("Space: "),
                              t("span", null, s(e.protection.slots), 1),
                            ]),
                          ]),
                        ]))
                      : a("", !0),
                  ]),
                ]),
                !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                  ? (o(),
                    n("div", Xe, [
                      t(
                        "button",
                        { class: "button-primary", onClick: d($, ["stop"]) },
                        et,
                        8,
                        Ye
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
                          onMousedown:
                            r[1] ||
                            (r[1] = d(() => {}, ["middle", "prevent", "stop"])),
                        },
                        " SHARE ",
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
                          onClick: d(I, ["stop"]),
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
              T,
              { name: "card", mode: "out-in" },
              {
                default: B(() => [
                  c.value
                    ? (o(),
                      n("div", it, [
                        f(x),
                        t("div", dt, [
                          e.sheet || !(w.value >= 1023)
                            ? (o(),
                              n("div", at, [
                                t("div", lt, [
                                  t("h3", null, [
                                    l("Categoria: "),
                                    t(
                                      "span",
                                      null,
                                      s(e.protection.category),
                                      1
                                    ),
                                  ]),
                                ]),
                                t("div", ct, [
                                  t("h3", null, [
                                    l("Space: "),
                                    t("span", null, s(e.protection.slots), 1),
                                  ]),
                                ]),
                              ]))
                            : a("", !0),
                          t(
                            "div",
                            {
                              class: u([
                                "description",
                                { "sheet-content": e.sheet },
                              ]),
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
                                    onClick: d(M, ["stop"]),
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
                                      onMousedown:
                                        r[2] ||
                                        (r[2] = d(() => {}, [
                                          "middle",
                                          "prevent",
                                          "stop",
                                        ])),
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
  yo = L(kt, [["__scopeId", "data-v-040f7620"]]),
  j = (e) => (S("data-v-cdd4c86a"), (e = e()), O(), e),
  yt = { class: "card" },
  ft = j(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  Ct = [ft],
  $t = { class: "first-row" },
  At = { key: 0, class: "item-info-category" },
  gt = { class: "item-info-container" },
  Mt = { class: "item-info" },
  It = { class: "item-info" },
  Et = { key: 1, class: "button-container" },
  Ht = ["onClick"],
  Lt = j(() => t("img", { src: D, alt: "adicionar" }, null, -1)),
  Rt = [Lt],
  Bt = { key: 2, class: "button-container" },
  Tt = ["onClick", "onMouseup"],
  xt = { key: 0 },
  St = { class: "content" },
  Ot = { key: 0, class: "item-info-category-sheet" },
  _t = ["innerHTML"],
  Dt = { key: 1, class: "card-footer" },
  Nt = ["onClick"],
  qt = ["onClick"],
  Wt = { key: 2, class: "card-footer" },
  Pt = { class: "button-container" },
  Vt = ["onClick", "onMouseup"],
  jt = H({
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
        c = E(!!i.homebrewAdd),
        b = R(),
        w = E(window.innerWidth),
        $ = () => {
          h("handleAdd", i.misc);
        },
        M = () => {
          const v = { id: i.misc.id || i.id, itemType: i.misc.itemType };
          h("handleRemove", v);
        },
        I = () => {
          h("handleEdit", i.misc);
        },
        A = () => {
          h("handleAddHomebrew", i.misc);
        },
        k = () => {
          const v = b.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(v.href, "_blank");
        },
        y = () => {
          i.homebrewAdd || (c.value = !c.value);
        };
      return (
        N(() => {
          window.addEventListener("resize", () => {
            w.value = window.innerWidth;
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
                        class: u(["show-more", { rotate: c.value }]),
                        onClick:
                          m[0] ||
                          (m[0] = d((r) => (c.value = !c.value), ["stop"])),
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
                    (!e.sheet || e.homebrew) && w.value >= 1023
                      ? (o(),
                        n("div", At, [
                          t("h3", null, [t("i", null, s(e.misc.tag), 1)]),
                        ]))
                      : a("", !0),
                  ]),
                  t("div", gt, [
                    t("div", Mt, [
                      t("h3", null, [
                        l("Category: "),
                        t("span", null, s(e.misc.category), 1),
                      ]),
                    ]),
                    t("div", It, [
                      t("h3", null, [
                        l("Space: "),
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
                        Rt,
                        8,
                        Ht
                      ),
                    ]))
                  : a("", !0),
                e.homebrewList
                  ? (o(),
                    n("div", Bt, [
                      t(
                        "button",
                        {
                          class: "button-secondary",
                          onClick: d(k, ["stop"]),
                          onMouseup: d(k, ["middle"]),
                          onMousedown:
                            m[1] ||
                            (m[1] = d(() => {}, ["middle", "prevent", "stop"])),
                        },
                        " SHARE ",
                        40,
                        Tt
                      ),
                    ]))
                  : a("", !0),
              ],
              2
            ),
            f(
              T,
              { name: "card", mode: "out-in" },
              {
                default: B(() => [
                  c.value
                    ? (o(),
                      n("div", xt, [
                        f(x),
                        t("div", St, [
                          e.sheet || !(w.value >= 1023)
                            ? (o(),
                              n("div", Ot, [
                                t("h3", null, [t("i", null, s(e.misc.tag), 1)]),
                              ]))
                            : a("", !0),
                          t(
                            "div",
                            {
                              class: u([
                                "description",
                                { "sheet-content": e.sheet },
                              ]),
                              innerHTML: e.misc.description,
                            },
                            null,
                            10,
                            _t
                          ),
                          e.sheet && !e.disabled
                            ? (o(),
                              n("div", Dt, [
                                t(
                                  "button",
                                  {
                                    class: "button-remove",
                                    onClick: d(M, ["stop"]),
                                  },
                                  s(e.homebrew ? "Delete" : "Remove"),
                                  9,
                                  Nt
                                ),
                                t(
                                  "button",
                                  {
                                    class: "button-remove button-edit",
                                    onClick: d(I, ["stop"]),
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
                                      onMousedown:
                                        m[2] ||
                                        (m[2] = d(() => {}, [
                                          "middle",
                                          "prevent",
                                          "stop",
                                        ])),
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
  fo = L(jt, [["__scopeId", "data-v-cdd4c86a"]]),
  z = (e) => (S("data-v-bd08b91a"), (e = e()), O(), e),
  zt = { class: "card" },
  Ft = z(() => t("img", { src: _, alt: "ver mais" }, null, -1)),
  pt = [Ft],
  Qt = { class: "item-info-container" },
  Ut = { class: "item-info" },
  Gt = { class: "item-info" },
  Jt = { key: 1, class: "button-container" },
  Kt = ["onClick"],
  Xt = z(() => t("img", { src: D, alt: "adicionar" }, null, -1)),
  Yt = [Xt],
  Zt = { key: 2, class: "button-container" },
  eo = ["onClick", "onMouseup"],
  to = { key: 0 },
  oo = { class: "item-element" },
  no = { class: "content" },
  so = ["innerHTML"],
  io = { key: 0, class: "card-footer" },
  ao = ["onClick"],
  lo = ["onClick"],
  co = { key: 1, class: "card-footer" },
  ho = { class: "button-container" },
  uo = ["onClick", "onMouseup"],
  ro = H({
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
      F((r) => ({ "68a16f19": $.value, c5429834: M.value }));
      const i = e,
        h = C,
        c = {
            knowledge: "#ff8c00",
            energy: "#7000AC",
            death: "#121212",
            blood: "#d9534f",
            fear: "#dae4e6",
            varies: "#fff",
        },
        b = E(!!i.homebrewAdd),
        w = R(),
        $ = q(() => c[i.cursedItem.element.toLowerCase()]),
        M = q(() => ($.value === "#fff" || "#dae4e6" ? "#121212" : "#fff")),
        I = () => {
          h("handleAdd", i.cursedItem);
        },
        A = () => {
          const r = {
            id: i.cursedItem.id || i.id,
            itemType: i.cursedItem.itemType,
          };
          h("handleRemove", r);
        },
        k = () => {
          h("handleEdit", i.cursedItem);
        },
        y = () => {
          h("handleAddHomebrew", i.cursedItem);
        },
        v = () => {
          const r = w.resolve({ name: "homebrews-item", params: { id: i.id } });
          window.open(r.href, "_blank");
        },
        m = () => {
          i.homebrewAdd || (b.value = !b.value);
        };
      return (r, g) => (
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
                      class: u(["show-more", { rotate: b.value }]),
                      onClick:
                        g[0] ||
                        (g[0] = d((mo) => (b.value = !b.value), ["stop"])),
                    },
                    pt,
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
                t("div", Qt, [
                  t("div", Ut, [
                    t("h3", null, [
                      l("Category: "),
                      t("span", null, s(e.cursedItem.category), 1),
                    ]),
                  ]),
                  t("div", Gt, [
                    t("h3", null, [
                      l("Space: "),
                      t("span", null, s(e.cursedItem.slots), 1),
                    ]),
                  ]),
                ]),
              ]),
              !e.onlyShow && !e.homebrewList && !e.homebrewAdd
                ? (o(),
                  n("div", Jt, [
                    t(
                      "button",
                      { class: "button-primary", onClick: d(I, ["stop"]) },
                      Yt,
                      8,
                      Kt
                    ),
                  ]))
                : a("", !0),
              e.homebrewList
                ? (o(),
                  n("div", Zt, [
                    t(
                      "button",
                      {
                        class: "button-secondary",
                        onClick: d(v, ["stop"]),
                        onMouseup: d(v, ["middle"]),
                        onMousedown:
                          g[1] ||
                          (g[1] = d(() => {}, ["middle", "prevent", "stop"])),
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
            T,
            { name: "card", mode: "out-in" },
            {
              default: B(() => [
                b.value
                  ? (o(),
                    n("div", to, [
                      f(x),
                      t("div", oo, [
                        t("h3", null, s(e.cursedItem.element.toUpperCase()), 1),
                      ]),
                      t("div", no, [
                        t(
                          "div",
                          {
                            class: u([
                              "description",
                              { "sheet-content": e.sheet },
                            ]),
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
                                lo
                              ),
                            ]))
                          : a("", !0),
                        e.canHomebrewAdd
                          ? (o(),
                            n("div", co, [
                              t("div", ho, [
                                t(
                                  "button",
                                  {
                                    class: "button-secondary",
                                    onClick: d(y, ["stop"]),
                                    onMouseup: d(y, ["middle"]),
                                    onMousedown:
                                      g[2] ||
                                      (g[2] = d(() => {}, [
                                        "middle",
                                        "prevent",
                                        "stop",
                                      ])),
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
  Co = L(ro, [["__scopeId", "data-v-bd08b91a"]]);
export { Co as C, fo as M, yo as P, ko as W };

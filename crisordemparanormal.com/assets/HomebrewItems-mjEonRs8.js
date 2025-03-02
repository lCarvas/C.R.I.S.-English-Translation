import {
  d as F,
  o,
  c as n,
  a as e,
  H as fe,
  t as B,
  p as be,
  b as _e,
  _ as W,
  Q as ne,
  g as ce,
  M as me,
  r as y,
  e as Je,
  R as Y,
  F as J,
  B as Z,
  l as ee,
  f as U,
  h as K,
  L as Ye,
  k as c,
  m as _,
  n as G,
  q as ue,
  I as Ze,
  P as Pe,
  i as te,
  C as D,
  D as S,
  x as N,
  a1 as oe,
  w as et,
  v as tt,
  T as at,
  z as ot,
  N as nt,
  J as Ht,
  a6 as le,
  a7 as re,
} from "./index-_IEBVZw3.js";
import { P as Mt, _ as Ge } from "./PowerCard-lmfampVo.js";
import { S as ke } from "./SearchInput-8jvDJspv.js";
import { L as ve } from "./LoadingView-P3Ten1Qu.js";
import { H as de, g as Le, b as st } from "./firebase-Kh98738y.js";
import {
  p as Fe,
  r as Oe,
  w as ze,
  f as Ne,
  m as je,
  g as Qe,
  e as Vt,
} from "./default-FmxCqAN8.js";
import {
  c as ft,
  d as bt,
  e as _t,
  f as gt,
  g as yt,
  h as wt,
} from "./forms-8DDAOOVU.js";
import { S as Pt } from "./SwitchButtonBool-RM1MKLBr.js";
import { _ as x } from "./lodash-gzw5KmHd.js";
import { P as Ee } from "./PictureModal-kET9VHIy.js";
import { T as it } from "./ToastNotification-7RF8hdNk.js";
import { R as Lt } from "./RitualCard-A8rnnYXQ.js";
import { T as Ke } from "./TabNav-8NoDP55z.js";
import { D as X } from "./DropdownSimple-MgTgWHS_.js";
import {
  W as Et,
  P as qt,
  M as Ut,
  C as Rt,
} from "./CursedItemCard-PR55Azgh.js";
import { v as Be } from "./v4-cyCr5FZV.js";
const xt = (t) => (be("data-v-8b772633"), (t = t()), _e(), t),
  Dt = { class: "delete-container" },
  St = { class: "delete-wrapper" },
  Bt = { class: "delete-content" },
  Ft = xt(() =>
    e("h2", null, "Warning: this operation is permanent and irreversible!", -1)
  ),
  Ot = { class: "buttons-container" },
  zt = F({
    __name: "ConfirmDelete",
    props: { name: { type: String, required: !0 } },
    emits: ["handleCancel", "handleConfirm"],
    setup(t) {
      return (a, d) => (
        o(),
        n("div", Dt, [
          e("div", St, [
            e("div", Bt, [
              e("h1", null, [
                fe("Deletar "),
                e("b", null, B(t.name), 1),
                fe("?"),
              ]),
              Ft,
              e("div", Ot, [
                e(
                  "button",
                  {
                    class: "button-remove delete-confirm",
                    onClick: d[0] || (d[0] = (v) => a.$emit("handleConfirm")),
                  },
                  " Confirmar "
                ),
                e(
                  "button",
                  {
                    class: "button-primary delete-cancel",
                    onClick: d[1] || (d[1] = (v) => a.$emit("handleCancel")),
                  },
                  " Cancel "
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  Te = W(zt, [["__scopeId", "data-v-8b772633"]]),
  Nt = { key: 0 },
  jt = { key: 0 },
  Qt = { class: "header-container" },
  Wt = { key: 0 },
  Xt = { key: 1 },
  Yt = ["disabled"],
  Gt = { key: 0, class: "search-container" },
  Kt = { key: 1, class: "class-abilities-content" },
  Jt = { key: 2 },
  Zt = { key: 0, class: "no-content" },
  ea = { key: 1, class: "no-content" },
  ta = { key: 1 },
  aa = { key: 1 },
  oa = F({
    __name: "ListHomebrewAbilities",
    props: { homebrewList: Boolean },
    emits: ["handleAddPower", "handleEditPower", "handleCreatePower"],
    setup(t, { emit: a }) {
      ne((m) => ({ "5dd66370": g.value }));
      const d = t,
        v = a,
        h = ce(),
        l = me(),
        s = y(!0),
        u = y([]),
        r = y(""),
        p = y(!1),
        i = y(""),
        $ = y(),
        C = y(0),
        L = y(!0),
        H = y(0),
        k = (m) => v("handleAddPower", m),
        V = (m) => v("handleEditPower", m);
      Je(async () => {
        var He, Me, ye, we, $e;
        if (!h.currentUser) return;
        const m = Y(l, "homebrewRituals"),
          q = J(
            m,
            Z("uid", "==", (He = h.currentUser) == null ? void 0 : He.uid)
          ),
          O = await ee(q),
          I = Y(l, "homebrewItems"),
          P = J(
            I,
            Z("uid", "==", (Me = h.currentUser) == null ? void 0 : Me.uid)
          ),
          R = await ee(P),
          z = Y(l, "homebrewCreatures"),
          se = J(
            z,
            Z("uid", "==", (ye = h.currentUser) == null ? void 0 : ye.uid)
          ),
          ie = await ee(se),
          T = Y(l, "homebrewPowers"),
          M = J(
            T,
            Z("uid", "==", (we = h.currentUser) == null ? void 0 : we.uid)
          ),
          E = await ee(M);
        (C.value =
          R.docs.length + E.docs.length + O.docs.length + ie.docs.length),
          C.value >= de && (L.value = !1);
        const Ie = [];
        for (const Ce of E.docs) {
          const Ae = Ce.data();
          (Ae.id = Ce.id), Ie.push(Ae);
        }
        (u.value = Ie),
          (H.value = await Le(($e = h.currentUser) == null ? void 0 : $e.uid)),
          (s.value = !1);
      });
      const g = U(() => (d.homebrewList ? "0" : "0.5rem")),
        b = U(() =>
          u.value
            ? u.value
                .filter((m) => K(m.name, r.value))
                .sort((m, q) => m.name.localeCompare(q.name))
            : []
        ),
        f = (m) => {
          (i.value = m),
            (p.value = !0),
            ($.value = u.value.findIndex((q) => q.id === i.value));
        },
        w = () => {
          (i.value = ""), (p.value = !1), ($.value = void 0);
        },
        A = () => {
          Ze(Pe(l, "homebrewPowers", i.value)),
            u.value.splice($.value, 1),
            (i.value = ""),
            (p.value = !1),
            ($.value = void 0),
            C.value--,
            C.value < de ? (L.value = !0) : (L.value = !1);
        };
      return (m, q) =>
        s.value
          ? (o(), n("div", aa, [c(ve)]))
          : (o(),
            n("div", Nt, [
              p.value
                ? (o(),
                  n("div", ta, [
                    c(
                      Te,
                      {
                        name: u.value[$.value].name,
                        onHandleCancel: w,
                        onHandleConfirm: A,
                      },
                      null,
                      8,
                      ["name"]
                    ),
                  ]))
                : (o(),
                  n("div", jt, [
                    e("div", Qt, [
                      H.value < 4
                        ? (o(),
                          n(
                            "h3",
                            Wt,
                            " Homebrew " + B(C.value) + "/" + B(Ye(de)),
                            1
                          ))
                        : (o(), n("h3", Xt, " Homebrew " + B(C.value), 1)),
                      e(
                        "button",
                        {
                          class: "button-primary new-button",
                          disabled: !L.value && H.value < 4,
                          onClick:
                            q[0] ||
                            (q[0] = (O) => m.$emit("handleCreatePower")),
                        },
                        " Add New ",
                        8,
                        Yt
                      ),
                    ]),
                    u.value.length > 0
                      ? (o(),
                        n("div", Gt, [
                          c(
                            ke,
                            {
                              value: r.value,
                              dark: !t.homebrewList,
                              onUpdate: q[1] || (q[1] = (O) => (r.value = O)),
                            },
                            null,
                            8,
                            ["value", "dark"]
                          ),
                        ]))
                      : _("", !0),
                    b.value.length > 0
                      ? (o(),
                        n("div", Kt, [
                          (o(!0),
                          n(
                            G,
                            null,
                            ue(
                              b.value,
                              (O) => (
                                o(),
                                n(
                                  "div",
                                  { key: O.id, class: "class-abilitie-card" },
                                  [
                                    c(
                                      Mt,
                                      {
                                        id: O.id,
                                        power: O,
                                        sheet: "",
                                        homebrew: "",
                                        "homebrew-list": t.homebrewList,
                                        onHandleRemove: f,
                                        onHandleAdd: k,
                                        onHandleEdit: V,
                                      },
                                      null,
                                      8,
                                      ["id", "power", "homebrew-list"]
                                    ),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (o(),
                        n("div", Jt, [
                          u.value.length > 0
                            ? (o(),
                              n("div", Zt, " No ability found "))
                            : (o(),
                              n(
                                "div",
                                ea,
                                " You have yet to create an ability "
                              )),
                        ])),
                  ])),
            ]));
    },
  }),
  na = W(oa, [["__scopeId", "data-v-f8e94722"]]),
  qe =
    "data:image/webp;base64,UklGRgwGAABXRUJQVlA4IAAGAADQhACdASogA1gCPp1Oo02lpKMiIdMoCLATiWlu4XaxG/NL84vvdaM2Bcawkg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOkF+KrGg92YoC4Y6QX4qsaD3ZigLhjpBfiqxoPdmKAuGOcUme2uaJvBmqpHmwmibwZqqR5sIEgyRkrWt0gvxVY0HuzFAXDHSC+MiHMUBKyxRGw+q1Wq1WlNKIUBcMdIL8VWNB7sxQFwbks67cwCUxAtJEbxQLhjpAkhOOVY0HuzFAXDHSC/FVjJ/aYXu3rZhItjNdrGTcA1XkSvg/E6C8ge7MUBcMdIL8VWNB7suOyEwKUdX9NlX3H8JDU/HVS6Ai4eaAleIFDrxS3XDHSC/FVjQe7MUBcG6DB7mMGKVRZuLsagW60PmCzS00dwX4qsaD3ZigLhjpBfiplsvKucPIIsCBEOrhlOwAWQueyHe081iMoiM1GjuC/FVjQe7MUBcMdIL8VMtewAFkKI23ESFt1o1mClVOfqSUQ9Ajc4wNDubo7gvxVY0HuzFAXDHSC/FTLXhE9TOT0Djl7XDGkS6a/QVg1Xi3XDHSC/FVjQe7MUBcL+XIcxCocaJwX4qqsPQ6PJQNTaO4L8VWNB7sxQFwx0gvxUxazYv2OD7/sDdfIqpHmwmibwZqqRzA04KAaSapVOkA7l+KrGg92YoC4Y6QX4qqo69leh8hSkebCaJvBmqpHmwmibrrKJc5qC1IL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FVjQe7MUBcMdIL8VWNB7sxQFwx0gvxVY0HuzFAXDHSC/FViAAA/v+sMAAAAAAAAAAAAAAAAAAAAAAGMOXJ2zHHZVLl1yoxj4bAHcBNRrqaxiLDRENSZE2J6ezCVyh5i5EJfrJ0iYv1CDkhPDR2JqzzxCQOXzvp9W/IPHM+uijKA9Az7IARLuN5vsH2Rowip6qmVW4AwiADEsAlNlDA31HSUUTBlaxck29I8SLGMX6/DS35vuA3RbTJndkDQgaokx/l5mKNAO7bluEU6xm/m4o9e2Vl74HzwoW7QkGOknEnHOqSwKc1P5CqbNSvDB3PdI0IaNQ4/zH/rHsqGj5fGlptbYlgMOm/ivbQ1QONFJhwOfurzemllq+HtAotjirSOplYiKqlp5FyMv/7lYfWyv+qKibaWt5ImSX1BCKLQzfzq207hgFLsgRFMAp3EeUZxEJl43wHA5wu9Hjs025MpsSevrDfrE8etrHt01udjV6kvw0G4iQuWikeq1CaUFBlj4ZXdE24tVqFWYBjeVXSUEyTC7mpIxd6asdesEu88bvZn5lD344ABO6vrbo6W8cQTc3YnLqDMB/ccDJxgTQg1YAHW5xJ2NeoSsoS4MRikXdde7iQPYSmUgFHOG0Ea/tP7GqAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
  Ue = (t) => (be("data-v-11a25a8d"), (t = t()), _e(), t),
  sa = { class: "input-container" },
  ia = Ue(() => e("div", { class: "label" }, " Name* ", -1)),
  la = { key: 0, class: "input-container" },
  ra = Ue(() => e("div", { class: "label" }, " Automation ", -1)),
  da = { class: "row" },
  ua = Ue(() => e("div", { class: "label" }, " Image ", -1)),
  ca = { key: 0 },
  ma = ["src"],
  va = { key: 1 },
  pa = Ue(() =>
    e(
      "img",
      { class: "picture", src: qe, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  ha = [pa],
  fa = Ue(() =>
    e(
      "div",
      { class: "label" },
      [
        fe(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  ba = Ue(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  _a = { class: "buttons-container" },
  ga = { key: 0 },
  ya = ["disabled"],
  wa = { key: 1 },
  $a = ["disabled"],
  Ca = { key: 0 },
  Aa = F({
    __name: "AbilitiesForm",
    props: {
      power: { type: Object, default: Fe },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
      editHomebrewPage: Boolean,
    },
    emits: ["handleCreatePower", "handleClose", "handleEditPower"],
    setup(t, { emit: a }) {
      ne((H) => ({ "7b1f6eca": u.value, ee35da64: r.value }));
      const d = t,
        v = a,
        h = y(x.clone(d.power)),
        l = y(!1),
        s = U(() => !(h.value.name !== "" && h.value.description !== "")),
        u = U(() =>
          d.editHomebrewPage
            ? "34rem"
            : d.edit && d.sheet
            ? "31.5rem"
            : (d.edit, "28.5rem")
        ),
        r = U(() => (d.homebrewList ? "1rem" : "0")),
        p = () => {
          (h.value = x.clone(Fe)), v("handleClose");
        },
        i = () => {
          s.value ||
            (ft(h.value),
            v("handleCreatePower", h.value),
            (h.value = x.clone(Fe)));
        },
        $ = () => {
          if (s.value) return;
          ft(h.value);
          const H = { power: h.value, sheet: d.sheet };
          v("handleEditPower", H), (h.value = x.clone(Fe));
        },
        C = ["OFF", "ON"],
        L = (H, k) => {
          s.value ||
            ((h.value.pictureURL = H),
            (h.value.pictureFullPath = k),
            (l.value = !1));
        };
      return (H, k) => {
        const V = te("p-editor"),
          g = te("vue-final-modal");
        return (
          o(),
          n(
            G,
            null,
            [
              e(
                "div",
                {
                  class: oe([
                    "form-container",
                    { "homebrew-margin-bottom": t.homebrewList },
                  ]),
                },
                [
                  e("div", null, [
                    e("div", sa, [
                      ia,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              k[0] || (k[0] = (b) => (h.value.name = b)),
                            type: "text",
                            class: "input-primary dark big-input",
                          },
                          null,
                          512
                        ),
                        [[S, h.value.name]]
                      ),
                    ]),
                    h.value.hasAutomation
                      ? (o(),
                        n("div", la, [
                          ra,
                          c(
                            Pt,
                            {
                              value: h.value.isAutomationOn || !1,
                              options: C,
                              onHandleChange:
                                k[1] ||
                                (k[1] = (b) => (h.value.isAutomationOn = b)),
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]))
                      : _("", !0),
                    e("div", da, [
                      ua,
                      e(
                        "button",
                        {
                          class: "button-naked",
                          onClick: k[2] || (k[2] = (b) => (l.value = !0)),
                        },
                        [
                          h.value.pictureURL
                            ? (o(),
                              n("div", ca, [
                                e(
                                  "img",
                                  {
                                    class: "picture",
                                    src: h.value.pictureURL,
                                    alt: "foto agente",
                                  },
                                  null,
                                  8,
                                  ma
                                ),
                              ]))
                            : (o(), n("div", va, ha)),
                        ]
                      ),
                    ]),
                    fa,
                    c(
                      V,
                      {
                        modelValue: h.value.description,
                        "onUpdate:modelValue":
                          k[3] || (k[3] = (b) => (h.value.description = b)),
                        "editor-style": "height: 12rem",
                      },
                      { toolbar: N(() => [ba]), _: 1 },
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  e("div", _a, [
                    e(
                      "button",
                      { class: "button-cancel", onClick: p },
                      " Cancel "
                    ),
                    t.edit
                      ? (o(),
                        n("div", ga, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: s.value,
                              onClick: $,
                            },
                            B(d.addMode ? "Add" : "Edit"),
                            9,
                            ya
                          ),
                        ]))
                      : (o(),
                        n("div", wa, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: s.value,
                              onClick: i,
                            },
                            " Add New ",
                            8,
                            $a
                          ),
                        ])),
                  ]),
                ],
                2
              ),
              l.value
                ? (o(),
                  n("div", Ca, [
                    c(
                      g,
                      {
                        modelValue: l.value,
                        "onUpdate:modelValue":
                          k[5] || (k[5] = (b) => (l.value = b)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(Ee, {
                            "is-free-style": "",
                            onHandleCloseModal:
                              k[4] || (k[4] = (b) => (l.value = !l.value)),
                            onHandleUpdatePicture: L,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  $t = W(Aa, [["__scopeId", "data-v-11a25a8d"]]),
  ka = { key: 0 },
  Ta = { key: 1 },
  Ia = F({
    __name: "CreateHomebrewAbilities",
    props: { homebrewList: Boolean },
    emits: ["handleClose"],
    setup(t, { emit: a }) {
      const d = a,
        v = ce(),
        h = me(),
        l = y(!1),
        s = y({ message: "", type: "error", alive: !1, timeout: 0 }),
        u = async (p) => {
          var $;
          if (!v.currentUser) return;
          if (
            ((l.value = !0),
            (await Le(($ = v.currentUser) == null ? void 0 : $.uid)) < 4 &&
              !(await st(v.currentUser.uid)))
          ) {
            (l.value = !1),
              (s.value.message = "Homebrew limit reached"),
              (s.value.alive = !0);
            return;
          }
          (p.uid = v.currentUser.uid),
            await ot(Y(h, "homebrewPowers"), p),
            (l.value = !1),
            d("handleClose");
        };
      et(
        () => s.value.alive,
        () => {
          s.value.alive === !0 &&
            (s.value.timeout = window.setTimeout(
              () => (s.value.alive = !1),
              3e3
            ));
        }
      );
      const r = () => {
        (s.value.alive = !1), clearTimeout(s.value.timeout);
      };
      return (p, i) =>
        l.value
          ? (o(), n("div", Ta, [c(ve)]))
          : (o(),
            n("div", ka, [
              c(
                $t,
                {
                  "homebrew-list": t.homebrewList,
                  "edit-homebrew-page": "",
                  onHandleCreatePower: u,
                  onHandleClose: i[0] || (i[0] = ($) => p.$emit("handleClose")),
                },
                null,
                8,
                ["homebrew-list"]
              ),
              c(
                at,
                { name: "toast" },
                {
                  default: N(() => [
                    s.value.alive
                      ? (o(),
                        tt(
                          it,
                          {
                            key: 0,
                            toast: s.value,
                            type: s.value.type,
                            onDismiss: r,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : _("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  Ha = { key: 0 },
  Ma = { key: 1 },
  Va = F({
    __name: "EditHomebrewAbilities",
    props: { power: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditPowerSheet"],
    setup(t, { emit: a }) {
      const d = a,
        v = ce(),
        h = me(),
        l = y(!1),
        s = async (u) => {
          if (v.currentUser) {
            if (((l.value = !0), u.sheet)) {
              d("handleEditPowerSheet", u.power);
              return;
            }
            await nt(Pe(h, "homebrewPowers", u.power.id), u.power),
              (l.value = !1),
              d("handleClose");
          }
        };
      return (u, r) =>
        l.value
          ? (o(), n("div", Ma, [c(ve)]))
          : (o(),
            n("div", Ha, [
              c(
                $t,
                {
                  power: u.power,
                  edit: "",
                  "edit-homebrew-page": "",
                  "homebrew-list": u.homebrewList,
                  onHandleEditPower: s,
                  onHandleClose: r[0] || (r[0] = (p) => u.$emit("handleClose")),
                },
                null,
                8,
                ["power", "homebrew-list"]
              ),
            ]));
    },
  }),
  Pa = { class: "class-abilities-container" },
  La = { key: 0 },
  Ea = { key: 1 },
  qa = { key: 2 },
  Ua = { key: 0 },
  Ra = F({
    __name: "HomebrewAbilities",
    props: { homebrewList: Boolean },
    emits: ["handleAddPower"],
    setup(t, { emit: a }) {
      const d = a,
        v = y(),
        h = y("list"),
        l = { list: "list", create: "create", edit: "edit" },
        s = (r) => d("handleAddPower", r),
        u = (r) => {
          (v.value = r), (h.value = l.edit);
        };
      return (r, p) => (
        o(),
        n("div", Pa, [
          h.value === l.list
            ? (o(),
              n("div", La, [
                c(
                  na,
                  {
                    "homebrew-list": t.homebrewList,
                    onHandleAddPower: s,
                    onHandleEditPower: u,
                    onHandleCreatePower:
                      p[0] || (p[0] = (i) => (h.value = l.create)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : _("", !0),
          h.value === l.create
            ? (o(),
              n("div", Ea, [
                c(
                  Ia,
                  {
                    "homebrew-list": t.homebrewList,
                    onHandleClose: p[1] || (p[1] = (i) => (h.value = l.list)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : _("", !0),
          h.value === l.edit
            ? (o(),
              n("div", qa, [
                v.value
                  ? (o(),
                    n("div", Ua, [
                      c(
                        Va,
                        {
                          power: v.value,
                          "homebrew-list": t.homebrewList,
                          onHandleClose:
                            p[2] || (p[2] = (i) => (h.value = l.list)),
                        },
                        null,
                        8,
                        ["power", "homebrew-list"]
                      ),
                    ]))
                  : _("", !0),
              ]))
            : _("", !0),
        ])
      );
    },
  }),
  rd = W(Ra, [["__scopeId", "data-v-cc44a1c3"]]),
  xa = { key: 0 },
  Da = { key: 0 },
  Sa = { class: "list-ritual-header" },
  Ba = { class: "secondary-tab-container" },
  Fa = { class: "header-container" },
  Oa = { key: 0 },
  za = { key: 1 },
  Na = ["disabled"],
  ja = { key: 0, class: "search-container" },
  Qa = { key: 1, class: "class-ritual-content" },
  Wa = { key: 2 },
  Xa = { key: 0, class: "no-content" },
  Ya = { key: 1, class: "no-content" },
  Ga = { key: 1 },
  Ka = { key: 1 },
  Ja = F({
    __name: "ListHomebrewRituals",
    props: { homebrewList: Boolean },
    emits: ["handleAddRitual", "handleEditRitual", "handleCreateRitual"],
    setup(t, { emit: a }) {
      ne((P) => ({ dc6fc114: A.value }));
      const d = t,
        v = a,
        h = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Varies", value: 6 },
        ],
        l = [
          { label: "All", circle: "-", value: 0 },
          { label: "1º Circle", circle: "1", value: 1 },
          { label: "2º Circle", circle: "2", value: 2 },
          { label: "3º Circle", circle: "3", value: 3 },
          { label: "4º Circle", circle: "4", value: 4 },
        ],
        s = ce(),
        u = me(),
        r = y(!0),
        p = y([]),
        i = y(0),
        $ = y(0),
        C = y(""),
        L = y(!1),
        H = y(""),
        k = y(),
        V = y(0),
        g = y(!0),
        b = y(0),
        f = (P) => v("handleAddRitual", P),
        w = (P) => v("handleEditRitual", P);
      Je(async () => {
        var $e, Ce, Ae, Re, xe;
        if (!s.currentUser) return;
        const P = Y(u, "homebrewPowers"),
          R = J(
            P,
            Z("uid", "==", ($e = s.currentUser) == null ? void 0 : $e.uid)
          ),
          z = await ee(R),
          se = Y(u, "homebrewItems"),
          ie = J(
            se,
            Z("uid", "==", (Ce = s.currentUser) == null ? void 0 : Ce.uid)
          ),
          T = await ee(ie),
          M = Y(u, "homebrewCreatures"),
          E = J(
            M,
            Z("uid", "==", (Ae = s.currentUser) == null ? void 0 : Ae.uid)
          ),
          Ie = await ee(E),
          He = Y(u, "homebrewRituals"),
          Me = J(
            He,
            Z("uid", "==", (Re = s.currentUser) == null ? void 0 : Re.uid)
          ),
          ye = await ee(Me);
        (V.value =
          T.docs.length + z.docs.length + ye.docs.length + Ie.docs.length),
          V.value >= de && (g.value = !1);
        const we = [];
        for (const De of ye.docs) {
          const Se = De.data();
          (Se.id = De.id), we.push(Se);
        }
        (p.value = we),
          (b.value = await Le((xe = s.currentUser) == null ? void 0 : xe.uid)),
          (r.value = !1);
      });
      const A = U(() => (d.homebrewList ? "0" : "0.5rem")),
        m = U(() =>
          i.value === 0
            ? $.value === 0
              ? p.value
                  .filter((P) => K(P.name, C.value))
                  .sort((P, R) => P.name.localeCompare(R.name))
              : p.value
                  .filter((P) => P.circle === l[$.value].circle)
                  .filter((P) => K(P.name, C.value))
                  .sort((P, R) => P.name.localeCompare(R.name))
            : $.value === 0
            ? i.value === 0
              ? p.value
                  .filter((P) => K(P.name, C.value))
                  .sort((P, R) => P.name.localeCompare(R.name))
              : p.value
                  .filter((P) => P.element === h[i.value].label)
                  .filter((P) => K(P.name, C.value))
                  .sort((P, R) => P.name.localeCompare(R.name))
            : p.value
                .filter((P) => P.element === h[i.value].label)
                .filter((P) => K(P.name, C.value))
                .filter((P) => P.circle === l[$.value].circle)
                .filter((P) => K(P.name, C.value))
        ),
        q = (P) => {
          (H.value = P),
            (L.value = !0),
            (k.value = p.value.findIndex((R) => R.id === H.value));
        },
        O = () => {
          (H.value = ""), (L.value = !1), (k.value = void 0);
        },
        I = () => {
          Ze(Pe(u, "homebrewRituals", H.value)),
            p.value.splice(k.value, 1),
            (H.value = ""),
            (L.value = !1),
            (k.value = void 0),
            V.value--,
            V.value < de ? (g.value = !0) : (g.value = !1);
        };
      return (P, R) =>
        r.value
          ? (o(), n("div", Ka, [c(ve)]))
          : (o(),
            n("div", xa, [
              L.value
                ? (o(),
                  n("div", Ga, [
                    c(
                      Te,
                      {
                        name: p.value[k.value].name,
                        onHandleCancel: O,
                        onHandleConfirm: I,
                      },
                      null,
                      8,
                      ["name"]
                    ),
                  ]))
                : (o(),
                  n("div", Da, [
                    e("div", Sa, [
                      e("div", null, [
                        c(
                          Ke,
                          {
                            "current-tab": i.value,
                            "tab-options": h,
                            onHandleNavigation:
                              R[0] || (R[0] = (z) => (i.value = z)),
                          },
                          null,
                          8,
                          ["current-tab"]
                        ),
                        e("div", Ba, [
                          c(
                            Ke,
                            {
                              "current-tab": $.value,
                              "tab-options": l,
                              "invert-background-color": t.homebrewList,
                              secondary: "",
                              onHandleNavigation:
                                R[1] || (R[1] = (z) => ($.value = z)),
                            },
                            null,
                            8,
                            ["current-tab", "invert-background-color"]
                          ),
                        ]),
                      ]),
                    ]),
                    e("div", Fa, [
                      b.value < 4
                        ? (o(),
                          n(
                            "h3",
                            Oa,
                            " Homebrew " + B(V.value) + "/" + B(Ye(de)),
                            1
                          ))
                        : (o(), n("h3", za, " Homebrew " + B(V.value), 1)),
                      e(
                        "button",
                        {
                          class: "button-primary new-button",
                          disabled: !g.value && b.value < 4,
                          onClick:
                            R[2] ||
                            (R[2] = (z) => P.$emit("handleCreateRitual")),
                        },
                        " Add New ",
                        8,
                        Na
                      ),
                    ]),
                    p.value.length > 0
                      ? (o(),
                        n("div", ja, [
                          c(
                            ke,
                            {
                              value: C.value,
                              dark: !t.homebrewList,
                              onUpdate: R[3] || (R[3] = (z) => (C.value = z)),
                            },
                            null,
                            8,
                            ["value", "dark"]
                          ),
                        ]))
                      : _("", !0),
                    m.value.length > 0
                      ? (o(),
                        n("div", Qa, [
                          (o(!0),
                          n(
                            G,
                            null,
                            ue(
                              m.value,
                              (z) => (
                                o(),
                                n(
                                  "div",
                                  { key: z.id, class: "class-ritual-card" },
                                  [
                                    c(
                                      Lt,
                                      {
                                        id: z.id,
                                        ritual: z,
                                        sheet: "",
                                        homebrew: "",
                                        "homebrew-list": t.homebrewList,
                                        onHandleRemove: q,
                                        onHandleAdd: f,
                                        onHandleEdit: w,
                                      },
                                      null,
                                      8,
                                      ["id", "ritual", "homebrew-list"]
                                    ),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (o(),
                        n("div", Wa, [
                          p.value.length > 0
                            ? (o(), n("div", Xa, " No ritual found "))
                            : (o(),
                              n(
                                "div",
                                Ya,
                                " You have yet to create a ritual "
                              )),
                        ])),
                  ])),
            ]));
    },
  }),
  Za = W(Ja, [["__scopeId", "data-v-5e22dea3"]]),
  j = (t) => (be("data-v-c2d7518c"), (t = t()), _e(), t),
  eo = { class: "input-container" },
  to = j(() => e("div", { class: "label" }, " Name* ", -1)),
  ao = { class: "input-row" },
  oo = { class: "input-container" },
  no = j(() => e("div", { class: "label" }, " Element ", -1)),
  so = { class: "input-container" },
  io = j(() => e("div", { class: "label" }, " Circle ", -1)),
  lo = { class: "input-container" },
  ro = j(() => e("div", { class: "label" }, " Casting Time ", -1)),
  uo = { class: "input-container" },
  co = j(() => e("div", { class: "label" }, " Range ", -1)),
  mo = { class: "input-row" },
  vo = { class: "input-container" },
  po = j(() => e("div", { class: "label" }, " Area ", -1)),
  ho = { class: "input-container" },
  fo = j(() => e("div", { class: "label" }, " Target ", -1)),
  bo = { class: "input-container" },
  _o = j(() => e("div", { class: "label" }, " Duration ", -1)),
  go = { class: "input-row" },
  yo = { class: "input-container" },
  wo = j(() => e("div", { class: "label" }, " Effect ", -1)),
  $o = { class: "input-container" },
  Co = j(() => e("div", { class: "label" }, " Saving Throw ", -1)),
  Ao = { class: "input-row" },
  ko = { class: "input-container" },
  To = j(() => e("div", { class: "label" }, " Dice ", -1)),
  Io = { class: "input-container" },
  Ho = j(() => e("div", { class: "label" }, " Dice Advanced ", -1)),
  Mo = { class: "input-container" },
  Vo = j(() => e("div", { class: "label" }, " Dice True ", -1)),
  Po = { class: "row" },
  Lo = j(() => e("div", { class: "label" }, " Image ", -1)),
  Eo = { key: 0 },
  qo = ["src"],
  Uo = { key: 1 },
  Ro = j(() =>
    e(
      "img",
      { class: "picture", src: qe, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  xo = [Ro],
  Do = j(() =>
    e(
      "div",
      { class: "label" },
      [
        fe(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  So = j(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  Bo = { key: 0 },
  Fo = ["disabled"],
  Oo = { key: 1 },
  zo = ["disabled"],
  No = { key: 0 },
  jo = F({
    __name: "RitualsForm",
    props: {
      ritual: { type: Object, default: Oe },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreateRitual", "handleClose", "handleEditRitual"],
    setup(t, { emit: a }) {
      ne((V) => ({ "48d038ca": $.value }));
      const d = t,
        v = a,
        h = ["1", "2", "3", "4"],
        l = ["Knowledge", "Energy", "Fear", "Death", "Blood", "Varies"],
        s = ["Standard", "Movement", "Complete", "Reation", "Free"],
        u = [
          "Personal",
          "Touch",
          "Short",
          "Medium",
          "Long",
          "Extreme",
          "Unlimited",
        ],
        r = y(x.clone(d.ritual)),
        p = y(!1),
        i = U(() => !(r.value.name !== "" && r.value.description !== "")),
        $ = U(() =>
          d.edit && d.sheet
            ? "28.5rem"
            : d.homebrewList
            ? "39rem"
            : d.edit
            ? "28.75rem"
            : "25.75rem"
        ),
        C = () => {
          (r.value = x.clone(Oe)), v("handleClose");
        },
        L = () => {
          i.value ||
            (bt(r.value),
            v("handleCreateRitual", r.value),
            (r.value = x.clone(Oe)));
        },
        H = () => {
          if (i.value) return;
          bt(r.value);
          const V = { ritual: r.value, sheet: d.sheet };
          v("handleEditRitual", V), (r.value = x.clone(Oe));
        },
        k = (V, g) => {
          i.value ||
            ((r.value.pictureURL = V),
            (r.value.pictureFullPath = g),
            (p.value = !1));
        };
      return (V, g) => {
        const b = te("p-editor"),
          f = te("vue-final-modal");
        return (
          o(),
          n(
            G,
            null,
            [
              e(
                "div",
                {
                  class: oe([
                    "form-container",
                    { "form-homebrew-padding": t.homebrewList },
                  ]),
                },
                [
                  e("div", eo, [
                    to,
                    D(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            g[0] || (g[0] = (w) => (r.value.name = w)),
                          type: "text",
                          class: "input-primary dark big-input",
                        },
                        null,
                        512
                      ),
                      [[S, r.value.name]]
                    ),
                  ]),
                  e("div", ao, [
                    e("div", oo, [
                      no,
                      c(
                        X,
                        {
                          value: r.value.element,
                          options: l,
                          width: "7.75rem",
                          "content-width": "7.75rem",
                          "form-input": "",
                          onUpdateValue:
                            g[1] || (g[1] = (w) => (r.value.element = w)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", so, [
                      io,
                      c(
                        X,
                        {
                          value: r.value.circle,
                          options: h,
                          width: "2.75rem",
                          "content-width": "2.75rem",
                          "form-input": "",
                          "small-input": "",
                          onUpdateValue:
                            g[2] || (g[2] = (w) => (r.value.circle = w)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", lo, [
                      ro,
                      c(
                        X,
                        {
                          value: r.value.execution,
                          options: s,
                          width: "12rem",
                          "content-width": "12rem",
                          "form-input": "",
                          onUpdateValue:
                            g[3] || (g[3] = (w) => (r.value.execution = w)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", uo, [
                      co,
                      c(
                        X,
                        {
                          value: r.value.range,
                          options: u,
                          width: "12rem",
                          "content-width": "12rem",
                          "form-input": "",
                          onUpdateValue:
                            g[4] || (g[4] = (w) => (r.value.range = w)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                  ]),
                  e("div", mo, [
                    e("div", vo, [
                      po,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[5] || (g[5] = (w) => (r.value.area = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.area]]
                      ),
                    ]),
                    e("div", ho, [
                      fo,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[6] || (g[6] = (w) => (r.value.target = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.target]]
                      ),
                    ]),
                    e("div", bo, [
                      _o,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[7] || (g[7] = (w) => (r.value.duration = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.duration]]
                      ),
                    ]),
                  ]),
                  e("div", go, [
                    e("div", yo, [
                      wo,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[8] || (g[8] = (w) => (r.value.effect = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.effect]]
                      ),
                    ]),
                    e("div", $o, [
                      Co,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[9] || (g[9] = (w) => (r.value.save = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.save]]
                      ),
                    ]),
                  ]),
                  e("div", Ao, [
                    e("div", ko, [
                      To,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[10] ||
                              (g[10] = (w) => (r.value.normalDice = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.normalDice]]
                      ),
                    ]),
                    e("div", Io, [
                      Ho,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[11] ||
                              (g[11] = (w) => (r.value.discenteDice = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.discenteDice]]
                      ),
                    ]),
                    e("div", Mo, [
                      Vo,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              g[12] ||
                              (g[12] = (w) => (r.value.verdadeiroDice = w)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[S, r.value.verdadeiroDice]]
                      ),
                    ]),
                  ]),
                  e("div", Po, [
                    Lo,
                    e(
                      "button",
                      {
                        class: "button-naked",
                        onClick: g[13] || (g[13] = (w) => (p.value = !0)),
                      },
                      [
                        r.value.pictureURL
                          ? (o(),
                            n("div", Eo, [
                              e(
                                "img",
                                {
                                  class: "picture",
                                  src: r.value.pictureURL,
                                  alt: "foto agente",
                                },
                                null,
                                8,
                                qo
                              ),
                            ]))
                          : (o(), n("div", Uo, xo)),
                      ]
                    ),
                  ]),
                  Do,
                  c(
                    b,
                    {
                      modelValue: r.value.description,
                      "onUpdate:modelValue":
                        g[14] || (g[14] = (w) => (r.value.description = w)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: N(() => [So]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                ],
                2
              ),
              e(
                "div",
                {
                  class: oe([
                    "buttons-container",
                    { "homebrew-background": t.homebrewList },
                  ]),
                },
                [
                  e(
                    "button",
                    { class: "button-cancel", onClick: C },
                    " Cancel "
                  ),
                  t.edit
                    ? (o(),
                      n("div", Bo, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: i.value,
                            onClick: H,
                          },
                          B(d.addMode ? "Add" : "Edit"),
                          9,
                          Fo
                        ),
                      ]))
                    : (o(),
                      n("div", Oo, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: i.value,
                            onClick: L,
                          },
                          " Add New ",
                          8,
                          zo
                        ),
                      ])),
                ],
                2
              ),
              p.value
                ? (o(),
                  n("div", No, [
                    c(
                      f,
                      {
                        modelValue: p.value,
                        "onUpdate:modelValue":
                          g[16] || (g[16] = (w) => (p.value = w)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(Ee, {
                            "is-free-style": "",
                            onHandleCloseModal:
                              g[15] || (g[15] = (w) => (p.value = !p.value)),
                            onHandleUpdatePicture: k,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  Ct = W(jo, [["__scopeId", "data-v-c2d7518c"]]),
  Qo = { key: 0 },
  Wo = { key: 1 },
  Xo = F({
    __name: "CreateHomebrewRituals",
    props: { homebrewList: Boolean },
    emits: ["handleClose"],
    setup(t, { emit: a }) {
      const d = a,
        v = ce(),
        h = me(),
        l = y(!1),
        s = y({ message: "", type: "error", alive: !1, timeout: 0 }),
        u = async (p) => {
          var $;
          if (!v.currentUser) return;
          if (
            ((l.value = !0),
            (await Le(($ = v.currentUser) == null ? void 0 : $.uid)) < 4 &&
              !(await st(v.currentUser.uid)))
          ) {
            (l.value = !1),
              (s.value.message = "Homebrew limit reached"),
              (s.value.alive = !0);
            return;
          }
          (p.uid = v.currentUser.uid),
            await ot(Y(h, "homebrewRituals"), p),
            (l.value = !1),
            d("handleClose");
        };
      et(
        () => s.value.alive,
        () => {
          s.value.alive === !0 &&
            (s.value.timeout = window.setTimeout(
              () => (s.value.alive = !1),
              3e3
            ));
        }
      );
      const r = () => {
        (s.value.alive = !1), clearTimeout(s.value.timeout);
      };
      return (p, i) =>
        l.value
          ? (o(), n("div", Wo, [c(ve)]))
          : (o(),
            n("div", Qo, [
              c(
                Ct,
                {
                  "homebrew-list": t.homebrewList,
                  onHandleCreateRitual: u,
                  onHandleClose: i[0] || (i[0] = ($) => p.$emit("handleClose")),
                },
                null,
                8,
                ["homebrew-list"]
              ),
              c(
                at,
                { name: "toast" },
                {
                  default: N(() => [
                    s.value.alive
                      ? (o(),
                        tt(
                          it,
                          {
                            key: 0,
                            toast: s.value,
                            type: s.value.type,
                            onDismiss: r,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : _("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  Yo = { key: 0 },
  Go = { key: 1 },
  Ko = F({
    __name: "EditHomebrewRituals",
    props: { ritual: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditRitualSheet"],
    setup(t, { emit: a }) {
      const d = a,
        v = ce(),
        h = me(),
        l = y(!1),
        s = async (u) => {
          if (v.currentUser) {
            if (((l.value = !0), u.sheet)) {
              d("handleEditRitualSheet", u.ritual);
              return;
            }
            await nt(Pe(h, "homebrewRituals", u.ritual.id), u.ritual),
              (l.value = !1),
              d("handleClose");
          }
        };
      return (u, r) =>
        l.value
          ? (o(), n("div", Go, [c(ve)]))
          : (o(),
            n("div", Yo, [
              c(
                Ct,
                {
                  ritual: u.ritual,
                  edit: "",
                  "homebrew-list": u.homebrewList,
                  onHandleEditRitual: s,
                  onHandleClose: r[0] || (r[0] = (p) => u.$emit("handleClose")),
                },
                null,
                8,
                ["ritual", "homebrew-list"]
              ),
            ]));
    },
  }),
  Jo = { class: "class-abilities-container" },
  Zo = { key: 0 },
  en = { key: 1 },
  tn = { key: 2 },
  an = { key: 0 },
  on = F({
    __name: "HomebrewRituals",
    props: { homebrewList: Boolean },
    emits: ["handleAddRitual"],
    setup(t, { emit: a }) {
      const d = a,
        v = y(),
        h = y("list"),
        l = { list: "list", create: "create", edit: "edit" },
        s = (r) => d("handleAddRitual", r),
        u = (r) => {
          (v.value = r), (h.value = l.edit);
        };
      return (r, p) => (
        o(),
        n("div", Jo, [
          h.value === l.list
            ? (o(),
              n("div", Zo, [
                c(
                  Za,
                  {
                    "homebrew-list": t.homebrewList,
                    onHandleCreateRitual:
                      p[0] || (p[0] = (i) => (h.value = l.create)),
                    onHandleAddRitual: s,
                    onHandleEditRitual: u,
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : _("", !0),
          h.value === l.create
            ? (o(),
              n("div", en, [
                c(
                  Xo,
                  {
                    "homebrew-list": t.homebrewList,
                    onHandleClose: p[1] || (p[1] = (i) => (h.value = l.list)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : _("", !0),
          h.value === l.edit
            ? (o(),
              n("div", tn, [
                v.value
                  ? (o(),
                    n("div", an, [
                      c(
                        Ko,
                        {
                          ritual: v.value,
                          "homebrew-list": t.homebrewList,
                          onHandleClose:
                            p[2] || (p[2] = (i) => (h.value = l.list)),
                        },
                        null,
                        8,
                        ["ritual", "homebrew-list"]
                      ),
                    ]))
                  : _("", !0),
              ]))
            : _("", !0),
        ])
      );
    },
  }),
  dd = W(on, [["__scopeId", "data-v-f408fc45"]]),
  nn = { key: 0 },
  sn = { key: 0 },
  ln = { class: "header-container" },
  rn = { key: 0 },
  dn = { key: 1 },
  un = { key: 2 },
  cn = ["disabled"],
  mn = { key: 3 },
  vn = ["disabled"],
  pn = { key: 4 },
  hn = ["disabled"],
  fn = { key: 5 },
  bn = ["disabled"],
  _n = { key: 6 },
  gn = ["disabled"],
  yn = { key: 0 },
  wn = { key: 0, class: "search-container" },
  $n = { key: 1 },
  Cn = { key: 0, class: "search-container" },
  An = { key: 2 },
  kn = { key: 0, class: "search-container" },
  Tn = { key: 3 },
  In = { key: 0, class: "search-container" },
  Hn = { key: 4 },
  Mn = { key: 0, class: "search-container" },
  Vn = { key: 5, class: "class-abilities-content" },
  Pn = { key: 0 },
  Ln = { key: 1 },
  En = { key: 2 },
  qn = { key: 3 },
  Un = { key: 6 },
  Rn = { key: 0 },
  xn = { key: 0, class: "no-content" },
  Dn = { key: 1, class: "no-content" },
  Sn = { key: 1 },
  Bn = { key: 0, class: "no-content" },
  Fn = { key: 1, class: "no-content" },
  On = { key: 2 },
  zn = { key: 0, class: "no-content" },
  Nn = { key: 1, class: "no-content" },
  jn = { key: 3 },
  Qn = { key: 0, class: "no-content" },
  Wn = { key: 1, class: "no-content" },
  Xn = { key: 4 },
  Yn = { key: 0, class: "no-content" },
  Gn = { key: 1, class: "no-content" },
  Kn = { key: 1 },
  Jn = { key: 0 },
  Zn = { key: 1 },
  es = { key: 2 },
  ts = { key: 3 },
  as = { key: 4 },
  os = { key: 1 },
  ns = F({
    __name: "ListHomebrewItems",
    props: {
      currentTab: { type: Number, required: !0 },
      homebrewList: Boolean,
    },
    emits: [
      "handleAddItem",
      "handleCreateWeapon",
      "handleCreateAmmunition",
      "handleCreateProtection",
      "handleCreateMisc",
      "handleCreateCursedItem",
      "handleEditItem",
    ],
    setup(t, { emit: a }) {
      ne((T) => ({ "329b7646": P.value }));
      const d = t,
        v = a,
        h = ce(),
        l = me(),
        s = y(!0),
        u = y([]),
        r = y([]),
        p = y([]),
        i = y([]),
        $ = y([]),
        C = y(""),
        L = y(""),
        H = y(""),
        k = y(""),
        V = y(""),
        g = y(!1),
        b = y(""),
        f = y(),
        w = y(""),
        A = y(0),
        m = y(!0),
        q = y(0),
        O = (T) => v("handleAddItem", T),
        I = (T) => v("handleEditItem", T);
      Je(async () => {
        var ut, ct, mt, vt, pt;
        if (!h.currentUser) return;
        const T = Y(l, "homebrewPowers"),
          M = J(
            T,
            Z("uid", "==", (ut = h.currentUser) == null ? void 0 : ut.uid)
          ),
          E = await ee(M),
          Ie = Y(l, "homebrewRituals"),
          He = J(
            Ie,
            Z("uid", "==", (ct = h.currentUser) == null ? void 0 : ct.uid)
          ),
          Me = await ee(He),
          ye = Y(l, "homebrewCreatures"),
          we = J(
            ye,
            Z("uid", "==", (mt = h.currentUser) == null ? void 0 : mt.uid)
          ),
          $e = await ee(we),
          Ce = Y(l, "homebrewItems"),
          Ae = J(
            Ce,
            Z("uid", "==", (vt = h.currentUser) == null ? void 0 : vt.uid)
          ),
          Re = await ee(Ae);
        (A.value =
          Re.docs.length + E.docs.length + Me.docs.length + $e.docs.length),
          A.value >= de && (m.value = !1);
        const xe = [],
          De = [],
          Se = [],
          rt = [],
          dt = [];
        for (const ht of Re.docs) {
          const ae = ht.data();
          (ae.id = ht.id),
            ae.itemType === "weapon" && xe.push(ae),
            ae.itemType === "ammunition" && De.push(ae),
            ae.itemType === "protection" && Se.push(ae),
            ae.itemType === "misc" && rt.push(ae),
            ae.itemType === "cursedItem" && dt.push(ae);
        }
        (u.value = xe),
          (r.value = De),
          (p.value = Se),
          (i.value = rt),
          ($.value = dt),
          (q.value = await Le((pt = h.currentUser) == null ? void 0 : pt.uid)),
          (s.value = !1);
      });
      const P = U(() => (d.homebrewList ? "0" : "0.5rem")),
        R = U(() =>
          d.currentTab === 0
            ? u.value
                .filter((T) => K(T.name, C.value))
                .sort((T, M) => T.name.localeCompare(M.name))
            : d.currentTab === 1
            ? r.value
                .filter((T) => K(T.name, L.value))
                .sort((T, M) => T.name.localeCompare(M.name))
            : d.currentTab === 2
            ? p.value
                .filter((T) => K(T.name, H.value))
                .sort((T, M) => T.name.localeCompare(M.name))
            : d.currentTab === 3
            ? i.value
                .filter((T) => K(T.name, k.value))
                .sort((T, M) => T.name.localeCompare(M.name))
            : d.currentTab === 4
            ? $.value
                .filter((T) => K(T.name, V.value))
                .sort((T, M) => T.name.localeCompare(M.name))
            : []
        ),
        z = (T) => {
          (b.value = T.id),
            (g.value = !0),
            (w.value = T.itemType),
            T.itemType === "weapon" &&
              (f.value = u.value.findIndex((M) => M.id === T.id)),
            T.itemType === "ammunition" &&
              (f.value = r.value.findIndex((M) => M.id === T.id)),
            T.itemType === "protection" &&
              (f.value = p.value.findIndex((M) => M.id === T.id)),
            T.itemType === "misc" &&
              (f.value = i.value.findIndex((M) => M.id === T.id)),
            T.itemType === "cursedItem" &&
              (f.value = $.value.findIndex((M) => M.id === T.id));
        },
        se = () => {
          (b.value = ""), (g.value = !1), (f.value = void 0), (w.value = "");
        },
        ie = () => {
          Ze(Pe(l, "homebrewItems", b.value)),
            w.value === "weapon" && u.value.splice(f.value, 1),
            w.value === "ammunition" && r.value.splice(f.value, 1),
            w.value === "protection" && p.value.splice(f.value, 1),
            w.value === "misc" && i.value.splice(f.value, 1),
            w.value === "cursedItem" && $.value.splice(f.value, 1),
            (b.value = ""),
            (g.value = !1),
            (f.value = void 0),
            (w.value = ""),
            A.value--,
            A.value < de ? (m.value = !0) : (m.value = !1);
        };
      return (T, M) =>
        s.value
          ? (o(), n("div", os, [c(ve)]))
          : (o(),
            n("div", nn, [
              g.value
                ? (o(),
                  n("div", Kn, [
                    w.value === "weapon"
                      ? (o(),
                        n("div", Jn, [
                          c(
                            Te,
                            {
                              name: u.value[f.value].name,
                              onHandleCancel: se,
                              onHandleConfirm: ie,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : _("", !0),
                    w.value === "ammunition"
                      ? (o(),
                        n("div", Zn, [
                          c(
                            Te,
                            {
                              name: r.value[f.value].name,
                              onHandleCancel: se,
                              onHandleConfirm: ie,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : _("", !0),
                    w.value === "protection"
                      ? (o(),
                        n("div", es, [
                          c(
                            Te,
                            {
                              name: p.value[f.value].name,
                              onHandleCancel: se,
                              onHandleConfirm: ie,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : _("", !0),
                    w.value === "misc"
                      ? (o(),
                        n("div", ts, [
                          c(
                            Te,
                            {
                              name: i.value[f.value].name,
                              onHandleCancel: se,
                              onHandleConfirm: ie,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : _("", !0),
                    w.value === "cursedItem"
                      ? (o(),
                        n("div", as, [
                          c(
                            Te,
                            {
                              name: $.value[f.value].name,
                              onHandleCancel: se,
                              onHandleConfirm: ie,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : _("", !0),
                  ]))
                : (o(),
                  n("div", sn, [
                    e("div", ln, [
                      q.value < 4
                        ? (o(),
                          n(
                            "h3",
                            rn,
                            " Homebrew " + B(A.value) + "/" + B(Ye(de)),
                            1
                          ))
                        : (o(), n("h3", dn, " Homebrew " + B(A.value), 1)),
                      t.currentTab === 0
                        ? (o(),
                          n("div", un, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !m.value && q.value < 4,
                                onClick:
                                  M[0] ||
                                  (M[0] = (E) => T.$emit("handleCreateWeapon")),
                              },
                              " Add Weapon ",
                              8,
                              cn
                            ),
                          ]))
                        : _("", !0),
                      t.currentTab === 1
                        ? (o(),
                          n("div", mn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !m.value && q.value < 4,
                                onClick:
                                  M[1] ||
                                  (M[1] = (E) =>
                                    T.$emit("handleCreateAmmunition")),
                              },
                              " Add Ammo ",
                              8,
                              vn
                            ),
                          ]))
                        : _("", !0),
                      t.currentTab === 2
                        ? (o(),
                          n("div", pn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !m.value && q.value < 4,
                                onClick:
                                  M[2] ||
                                  (M[2] = (E) =>
                                    T.$emit("handleCreateProtection")),
                              },
                              " Add Armor ",
                              8,
                              hn
                            ),
                          ]))
                        : _("", !0),
                      t.currentTab === 3
                        ? (o(),
                          n("div", fn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !m.value && q.value < 4,
                                onClick:
                                  M[3] ||
                                  (M[3] = (E) => T.$emit("handleCreateMisc")),
                              },
                              " Add General Item ",
                              8,
                              bn
                            ),
                          ]))
                        : _("", !0),
                      t.currentTab === 4
                        ? (o(),
                          n("div", _n, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !m.value && q.value < 4,
                                onClick:
                                  M[4] ||
                                  (M[4] = (E) =>
                                    T.$emit("handleCreateCursedItem")),
                              },
                              " Add Cursed Item ",
                              8,
                              gn
                            ),
                          ]))
                        : _("", !0),
                    ]),
                    u.value.length > 0
                      ? (o(),
                        n("div", yn, [
                          t.currentTab === 0
                            ? (o(),
                              n("div", wn, [
                                c(
                                  ke,
                                  {
                                    value: C.value,
                                    dark: !t.homebrewList,
                                    onUpdate:
                                      M[5] || (M[5] = (E) => (C.value = E)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : _("", !0),
                        ]))
                      : _("", !0),
                    r.value.length > 0
                      ? (o(),
                        n("div", $n, [
                          t.currentTab === 1
                            ? (o(),
                              n("div", Cn, [
                                c(
                                  ke,
                                  {
                                    value: L.value,
                                    dark: !t.homebrewList,
                                    onUpdate:
                                      M[6] || (M[6] = (E) => (L.value = E)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : _("", !0),
                        ]))
                      : _("", !0),
                    p.value.length > 0
                      ? (o(),
                        n("div", An, [
                          t.currentTab === 2
                            ? (o(),
                              n("div", kn, [
                                c(
                                  ke,
                                  {
                                    value: H.value,
                                    dark: !t.homebrewList,
                                    onUpdate:
                                      M[7] || (M[7] = (E) => (H.value = E)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : _("", !0),
                        ]))
                      : _("", !0),
                    i.value.length > 0
                      ? (o(),
                        n("div", Tn, [
                          t.currentTab === 3
                            ? (o(),
                              n("div", In, [
                                c(
                                  ke,
                                  {
                                    value: k.value,
                                    dark: !t.homebrewList,
                                    onUpdate:
                                      M[8] || (M[8] = (E) => (k.value = E)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : _("", !0),
                        ]))
                      : _("", !0),
                    $.value.length > 0
                      ? (o(),
                        n("div", Hn, [
                          t.currentTab === 4
                            ? (o(),
                              n("div", Mn, [
                                c(
                                  ke,
                                  {
                                    value: V.value,
                                    dark: !t.homebrewList,
                                    onUpdate:
                                      M[9] || (M[9] = (E) => (V.value = E)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : _("", !0),
                        ]))
                      : _("", !0),
                    R.value.length > 0
                      ? (o(),
                        n("div", Vn, [
                          (o(!0),
                          n(
                            G,
                            null,
                            ue(
                              R.value,
                              (E) => (
                                o(),
                                n(
                                  "div",
                                  { key: E.id, class: "class-abilitie-card" },
                                  [
                                    E.itemType === "weapon"
                                      ? (o(),
                                        n("div", Pn, [
                                          c(
                                            Et,
                                            {
                                              id: E.id,
                                              weapon: E,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": t.homebrewList,
                                              onHandleRemove: z,
                                              onHandleEdit: I,
                                              onHandleAdd: O,
                                            },
                                            null,
                                            8,
                                            ["id", "weapon", "homebrew-list"]
                                          ),
                                        ]))
                                      : _("", !0),
                                    E.itemType === "protection"
                                      ? (o(),
                                        n("div", Ln, [
                                          c(
                                            qt,
                                            {
                                              id: E.id,
                                              protection: E,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": t.homebrewList,
                                              onHandleRemove: z,
                                              onHandleEdit: I,
                                              onHandleAdd: O,
                                            },
                                            null,
                                            8,
                                            [
                                              "id",
                                              "protection",
                                              "homebrew-list",
                                            ]
                                          ),
                                        ]))
                                      : _("", !0),
                                    E.itemType === "misc" ||
                                    E.itemType === "ammunition"
                                      ? (o(),
                                        n("div", En, [
                                          c(
                                            Ut,
                                            {
                                              id: E.id,
                                              misc: E,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": t.homebrewList,
                                              onHandleRemove: z,
                                              onHandleEdit: I,
                                              onHandleAdd: O,
                                            },
                                            null,
                                            8,
                                            ["id", "misc", "homebrew-list"]
                                          ),
                                        ]))
                                      : _("", !0),
                                    E.itemType === "cursedItem"
                                      ? (o(),
                                        n("div", qn, [
                                          c(
                                            Rt,
                                            {
                                              id: E.id,
                                              "cursed-item": E,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": t.homebrewList,
                                              onHandleRemove: z,
                                              onHandleEdit: I,
                                              onHandleAdd: O,
                                            },
                                            null,
                                            8,
                                            [
                                              "id",
                                              "cursed-item",
                                              "homebrew-list",
                                            ]
                                          ),
                                        ]))
                                      : _("", !0),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (o(),
                        n("div", Un, [
                          t.currentTab === 0
                            ? (o(),
                              n("div", Rn, [
                                u.value.length > 0
                                  ? (o(),
                                    n("div", xn, " No weapon found "))
                                  : (o(),
                                    n(
                                      "div",
                                      Dn,
                                      " You have yet to create a weapon "
                                    )),
                              ]))
                            : _("", !0),
                          t.currentTab === 1
                            ? (o(),
                              n("div", Sn, [
                                r.value.length > 0
                                  ? (o(),
                                    n(
                                      "div",
                                      Bn,
                                      " No ammo found "
                                    ))
                                  : (o(),
                                    n(
                                      "div",
                                      Fn,
                                      " You have yet to create new ammo "
                                    )),
                              ]))
                            : _("", !0),
                          t.currentTab === 2
                            ? (o(),
                              n("div", On, [
                                p.value.length > 0
                                  ? (o(),
                                    n(
                                      "div",
                                      zn,
                                      " No armor found "
                                    ))
                                  : (o(),
                                    n(
                                      "div",
                                      Nn,
                                      " You have yet to create a new armor "
                                    )),
                              ]))
                            : _("", !0),
                          t.currentTab === 3
                            ? (o(),
                              n("div", jn, [
                                i.value.length > 0
                                  ? (o(),
                                    n(
                                      "div",
                                      Qn,
                                      " No equipment found "
                                    ))
                                  : (o(),
                                    n(
                                      "div",
                                      Wn,
                                      " You have yet to create new equipments "
                                    )),
                              ]))
                            : _("", !0),
                          t.currentTab === 4
                            ? (o(),
                              n("div", Xn, [
                                $.value.length > 0
                                  ? (o(),
                                    n(
                                      "div",
                                      Yn,
                                      " No cursed item found "
                                    ))
                                  : (o(),
                                    n(
                                      "div",
                                      Gn,
                                      " You have yet to create new cursed items "
                                    )),
                              ]))
                            : _("", !0),
                        ])),
                  ])),
            ]));
    },
  }),
  ss = W(ns, [["__scopeId", "data-v-509094a0"]]),
  is = { class: "switch-container" },
  ls = ["onClick"],
  rs = F({
    __name: "SwitchButton",
    props: {
      value: { type: Number, required: !0 },
      options: { type: Array, required: !0 },
    },
    emits: ["handleNavigation"],
    setup(t) {
      return (a, d) => (
        o(),
        n("div", is, [
          (o(!0),
          n(
            G,
            null,
            ue(
              t.options,
              (v) => (
                o(),
                n(
                  "button",
                  {
                    key: v.value,
                    class: oe([
                      "switch-button",
                      { active: v.value === t.value },
                    ]),
                    onClick: (h) => a.$emit("handleNavigation", v.value),
                  },
                  B(v.label),
                  11,
                  ls
                )
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  ds = W(rs, [["__scopeId", "data-v-9be4a122"]]),
  us = [
    {
      name: "Alongada",
      description:
        "<p>Com um cano mais longo, que aumenta a precisão dos disparos, a arma fornece +2 nos testes de ataque.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Calibre Grosso",
      description:
        "<p>A arma é modificada para disparar munição de maior calibre, aumentando seu dano em mais um dado do mesmo tipo. Por exemplo, um revolver de calibre grosso causa 3d6 pontos de dano, enquanto um fuzil de precisão causa 3d10. Armas com esta modificação precisam usar munição específica de calibre grosso. Munição de calibre grosso possui o mesmo custo em categoria de munição normal, mas não pode ser usada em armas normais.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Certeira",
      description:
        "<p>Fabricada para ser mais precisa e balanceada, a arma fornece +2 nos testes de ataque.</p>",
      itemType: "weapon",
      modificationType: ["Corpo a Corpo", "Arma de Disparo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Compensador",
      description:
        "<p>Apenas para armas automáticas. Um sistema de amortecimento reduz o coice da arma, anulando a penalidade em testes de ataque por disparar rajadas.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Cruel",
      description:
        "<p>A arma possui lâmina especialmente afiada ou foi fabricada com materiais mais densos. Fornece um bônus de +2 nas rolagens de dano.</p>",
      itemType: "weapon",
      modificationType: ["Corpo a Corpo", "Arma de Disparo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Discreta",
      description:
        "<p>A arma possui modificações para ocupar menos espaço e chamar menos atenção. Se for uma arma de fogo, pode ser desmontável, se for um bastão pode ser retrátil, se for uma espada, pode ter a lâmina dobrável e assim por diante. Reduz o número de espaços ocupados em 1, fornece +5 em testes de Crime para ser ocultada e permite que você faça esse teste mesmo que não seja treinado na perícia.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "discreta",
      modType: "mod",
    },
    {
      name: "Dum Dum",
      description:
        "<p>Estas balas são feitas para se expandir durante o impacto, produzindo ferimentos terríveis. Esta modificação só pode ser aplicada em balas curtas e longas e aumenta o multiplicador de crítico em +1.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo", "Munições"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "dum-dum",
      modType: "mod",
    },
    {
      name: "Explosiva",
      description:
        "<p>Estas munições possuem uma gota de mercúrio ou glicerina, que fazem a bala explodir ao atingir o alvo. Esta modificação só pode ser aplicada em balas curtas e longas e aumenta o dano causado em +2d6.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo", "Munições"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Ferrolho Automático",
      description:
        "<p>O mecanismo de ação da arma é modificado para disparar várias vezes em sequência. A arma se torna automática.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Mira Laser",
      description:
        "<p>Um laser interno cria um reflexo vermelho num retículo luminoso, que é visto pelo atirador e ajuda-o a realizar disparos mais letais. Aumenta a margem de ameaça em +2.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "mira-laser",
      modType: "mod",
    },
    {
      name: "Mira Telescópica",
      description:
        "<p>A arma possui uma luneta com marcações de medidas, ideal para disparos precisos de longa distância. Aumenta o alcance da arma em uma categoria (de curto para médio, de médio para longo, de longo para extremo) e permite que a habilidade Ataque Furtivo seja usada em qualquer alcance.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "mira-telescopica",
      modType: "mod",
    },
    {
      name: "Perigosa",
      description:
        "<p>A arma possui lâmina afiada como uma navalha ou foi fabricada com materiais maciços. Seja como for, seus golpes possuem impacto terrível. Aumenta a margem de ameaça em +2.</p>",
      itemType: "weapon",
      modificationType: ["Corpo a Corpo", "Arma de Disparo"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "perigosa",
      modType: "mod",
    },
    {
      name: "Silenciador",
      description:
        "<p>Um silenciador reduz em -2d20 a penalidade em Furtividade para se esconder no mesmo turno em que atacou com a arma de fogo.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Tática",
      description:
        "<p>A arma possui cabo texturizado, bandoleira e outros acessórios que facilitam seu manuseio. Você pode sacar a arma como uma ação livre.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Visão de Calor",
      description:
        "<p>A mira tem um sistema eletrônico que sobrepõe imagens visíveis e imagens em infravermelho, criando um contraste entre zonas frias e quentes. Ao disparar com a arma, você ignora qualquer camuflagem do alvo.</p>",
      itemType: "weapon",
      modificationType: ["Arma de Fogo"],
      hasAutomation: !1,
      modType: "mod",
    },
  ],
  cs = [
    {
      name: "Antibombas",
      description:
        "<p>Quimicamente tratada para resistir ao calor e revestida de preenchimentos para amortecer estilhaços. Acompanha um capacete com viseira para proteger da luz e barulho de explosões. Fornece +5 em testes de resistência contra efeitos de área. Só pode ser aplicada em proteções pesadas.</p>",
      itemType: "protection",
      modificationType: ["Proteções"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Blindada",
      description:
        "<p>Reforçada com placas de aço e cerâmica costuradas dentro das camadas de kevlar. Aumenta a resistência a dano para 5 e o espaço ocupado em +1. Só pode ser aplicada em proteções pesadas.</p>",
      itemType: "protection",
      modificationType: ["Proteções"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "blindada",
      modType: "mod",
    },
    {
      name: "Discreta",
      description:
        "<p>Colete compacto feito com kevlar denso para reduzir o volume. Reduz o número de espaços ocupados em 1, fornece +5 em testes de Crime para ser ocultada e permite que você faça esse teste mesmo que não seja treinado na perícia. Só pode ser aplicada em proteções leves.</p>",
      itemType: "protection",
      modificationType: ["Proteções"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "discreta",
      modType: "mod",
    },
    {
      name: "Reforçada",
      description:
        "<p>Aumenta a Defesa fornecida em +2 e o espaço ocupado em +1. Uma proteção não pode ser reforçada e discreta ao mesmo tempo.</p>",
      itemType: "protection",
      modificationType: ["Proteções"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "reforçada",
      modType: "mod",
    },
  ],
  ms = [
    {
      name: "Aprimorado",
      description:
        "<p>O bônus em perícia concedido pelo acessório aumenta para +5. Se o item tiver função adicional, esta modificação poderá ser escolhida uma segunda vez para esta função.</p>",
      itemType: "misc",
      modificationType: ["Proteções"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Discreto",
      description:
        "<p>O item é miniaturizado ou disfarçado como outro item inócuo (como um relógio). Reduz o número de espaços ocupados em 1, fornece +5 em testes de Crime para ser ocultado e permite que você faça esse teste mesmo que não seja treinado na perícia.</p>",
      itemType: "misc",
      modificationType: ["Proteções"],
      hasAutomation: !0,
      isAutomationOn: !0,
      automationId: "discreto",
      modType: "mod",
    },
    {
      name: "Função Adicional",
      description:
        "<p>O acessório fornece +2 em uma perícia adicional à sua escolha, sujeita à aprovação do mestre.</p>",
      itemType: "misc",
      modificationType: ["Proteções"],
      hasAutomation: !1,
      modType: "mod",
    },
    {
      name: "Instrumental",
      description:
        "<p>O acessório pode ser usado como um kit de perícia específico (escolhido ao aplicar esta modificação).</p>",
      itemType: "misc",
      modificationType: ["Proteções"],
      hasAutomation: !1,
      modType: "mod",
    },
  ],
  vs = [
    {
      name: "Antielemento",
      description:
        "<p>A arma é letal contra criaturas de um elemento. Quando ataca uma criatura desse elemento, você pode gastar 2 PE. Se fizer isso e acertar o ataque, causa +4d8 pontos de dano. Para determinar o elemento aleatoriamente, role 1d4: 1) Conhecimento; 2) Energia; 3) Morte; 4) Sangue.</p>",
      element: "Conhecimento",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Ritualística",
      description:
        "<p>Você pode armazenar na arma um ritual que tenha como alvo um ser ou que afete uma área, gastando os PE como se tivesse conjurado o ritual normalmente. O ritual não gera efeito na hora; em vez disso, fica guardado no item. Quando acerta um ataque com a arma, você pode descarregar o ritual armazenado como uma ação livre. O alvo do ritual, ou o centro da área dele, é o ser atingido. Uma vez que o ritual seja descarregado, outro pode ser armazenado.</p>",
      element: "Conhecimento",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Senciente",
      description:
        "<p>Você pode gastar uma ação de movimento e 2 PE para imbuir a arma com uma fagulha de sua consciência. A arma flutua ao seu lado e, uma vez por rodada, ataca um ser em alcance curto (ou no alcance da arma, o que for maior) a sua escolha, com as mesmas estatísticas que teria se você a estivesse empunhando. Você pode gastar 1 PE no início de cada um de seus turnos para manter esse efeito. Se não o fizer, a arma cai no chão. Você pode usar uma ação de movimento para apanhar a arma no ar caso precise. Soltar a arma para que volte a flutuar para ativar a maldição é uma ação livre.</p>",
      element: "Conhecimento",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Empuxo",
      description:
        "<p>Com a capacidade de gerar uma descarga momentânea de Energia, a arma ganha a capacidade de ser arremessada em alcance curto (se já podia ser arremessada, seu alcance aumenta em uma categoria) e causa mais um dado de dano do mesmo tipo quando usada dessa forma. Após efetuar um ataque à distância com a arma, ela volta voando para você no mesmo turno. Pegar a arma é uma reação. Somente armas corpo a corpo podem receber essa maldição.</p>",
      element: "Energia",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Energética",
      description:
        "<p>Você pode gastar 2 PE para transformar a arma (exceto seu cabo ou empunhadura) ou a munição disparada pela arma em Energia pura. Até o final da cena, a arma fornece +5 em testes de ataque, ignora resistência a dano e converte todo o dano causado para Energia. Armas de corpo a corpo emanam luz como uma lâmpada; munição toma uma forma plasmática iluminada como feixes de luz.</p>",
      element: "Energia",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Vibrante",
      description:
        "<p>A arma vibra constantemente com um fluxo de Energia. Você recebe a habilidade Ataque Extra, da trilha operações especiais, do combatente. Se já a possui, em vez disso o custo para usá-la diminui em –1 PE.</p>",
      element: "Energia",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Consumidora",
      description:
        "<p>A arma drena a entropia de seres, deixando alvos atingidos lentos até o final da cena. Quando ataca, você pode gastar 2 PE. Se fizer isso e acertar o ataque, o alvo fica imóvel por uma rodada.</p>",
      element: "Morte",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Erosiva",
      description:
        "<p>A arma acelera o envelhecimento dos alvos, causando +1d8 pontos de dano de Morte. Quando ataca, você pode gastar 2 PE. Se fizer isso e acertar o ataque, a vítima sofre 2d4 pontos de dano de Morte no início de seus turnos pelas próximas duas rodadas.</p>",
      element: "Morte",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Repulsora",
      description:
        "<p>A arma gera uma aura similar a uma fumaça espiralada que desacelera ataques vindos em sua direção, fornecendo +2 de Defesa enquanto estiver empunhada. Quando você faz um bloqueio, pode gastar 2 PE. Se fizer isso, recebe um bônus adicional de +5 em Defesa.</p>",
      element: "Morte",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Lancinante",
      description:
        "<p>A arma inflige ferimentos terríveis, causando +1d8 de dano de Sangue. Este dado é multiplicado em acertos críticos. Por exemplo, se a arma possuir crítico x3, em um acerto crítico o dano adicional de lancinante vira +3d8.</p>",
      element: "Sangue",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Predadora",
      description:
        "<p>A arma tem sede de sangue e persegue seus alvos, anulando penalidades por camuflagem e cobertura (mas não cobertura total). Caso a arma seja de ataque à distância, seu alcance também aumenta em uma categoria. Além disso, a margem de ameaça da arma duplica. Por exemplo, um fuzil de caça predador tem margem de ameaça 17. Efeitos que duplicam a margem de ameaça são aplicados antes de quaisquer efeitos que a aumentem.</p>",
      element: "Sangue",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Sanguinária",
      description:
        "<p>Os ferimentos causados pela arma se rasgam além da área acertada. Um ser atingido fica sangrando. Sangramento causado pela arma é cumulativo — um ser atingido duas vezes sofre 2d6 pontos de dano de sangramento por rodada. Além disso, quando você faz um acerto crítico com a arma ela drena o sangue derramado, o que deixa o alvo fraco e concede a você 2d10 pontos de vida temporários.</p>",
      element: "Sangue",
      itemType: "weapon",
      hasAutomation: !1,
      modType: "curse",
    },
  ],
  ps = [
    {
      name: "Abascanta",
      description:
        "<p>Você recebe +5 em testes de resistência contra rituais. Uma vez por rodada, quando você é alvo de um ritual, pode gastar uma reação e PE igual ao custo dele para refleti-lo de volta ao conjurador. As características do ritual (efeitos, DT...) se mantêm, mas você toma qualquer decisão exigida por ele.</p>",
      element: "Conhecimento",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Profética",
      description:
        "<p>A proteção concede vislumbres de um possível futuro imediato. Você recebe resistência a Conhecimento 10 e pode gastar 2 PE para rolar novamente um teste de resistência uma vez.</p>",
      element: "Conhecimento",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Sombria",
      description:
        "<p>A proteção confunde os sentidos. Você recebe +5 em Furtividade e ignora a penalidade de carga em testes dessa perícia. Além disso, você pode gastar uma ação de movimento e 1 PE para fazer o item adquirir a aparência de uma roupa comum, mas mantendo suas propriedades (bônus na Defesa, penalidade de armadura...).</p>",
      element: "Conhecimento",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Cinética",
      description:
        "<p>A proteção produz uma barreira invisível que desvia ataques, concedendo +2 em Defesa e resistência a dano 2 (para proteção leve) ou 5 (para proteção pesada).</p>",
      element: "Energia",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Lépida",
      description:
        "<p>A proteção amplifica sua mobilidade, concedendo +10 em testes de Atletismo e +3m de deslocamento. Você pode gastar 2 PE para se mover de forma sobrenatural. Até o final do turno, você ignora terreno difícil, recebe deslocamento de escalada igual a seu deslocamento terrestre e fica imune a dano por queda de até 9m.</p>",
      element: "Energia",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Voltaica",
      description:
        "<p>Você recebe resistência a Energia 10 e pode gastar uma ação de movimento e 2 PE para fazer a proteção emitir arcos de Energia até o fim da cena. Se fizer isso, no fim de cada um de seus turnos você causa 1d6 pontos de dano de Energia em todas os seres adjacentes.</p>",
      element: "Energia",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Letárgica",
      description:
        "<p>A proteção desacelera ataques perigosos, concedendo +2 em Defesa. Além disso, você recebe 25% de chance (para proteção leve) e 50% de chance (para pesada) de ignorar o dano extra de acertos críticos e ataques furtivos.</p>",
      element: "Morte",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Repulsiva",
      description:
        "<p>Você recebe resistência a morte 10 e pode gastar uma ação de movimento e 2 PE para cobrir seu corpo com uma camada de lodo escuro até o final da cena. Se fizer isso, qualquer ser que o ataque em corpo a corpo sofre 2d8 pontos de dano de Morte.</p>",
      element: "Morte",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Regenerativa",
      description:
        "<p>A proteção melhora sua capacidade de resistência e regeneração. Você recebe resistência a Sangue 10 e pode gastar uma ação de movimento e 1 PE para recuperar 1d12 pontos de vida.</p>",
      element: "Sangue",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Sádica",
      description:
        "<p>No início de seu turno, você recebe +1 em testes de ataque e rolagens de dano para cada 10 pontos de dano que sofreu desde o fim de seu último turno. Por exemplo, se tiver sofrido 45 pontos de dano, recebe +4 em testes de ataque e rolagens de dano.</p>",
      element: "Sangue",
      itemType: "protection",
      hasAutomation: !1,
      modType: "curse",
    },
  ],
  hs = [
    {
      name: "Carisma",
      description:
        "<p>O acessório gera uma aura que torna você mais carismático e autoconfiante. Você recebe +1 em Presença (este aumento não fornece PE adicionais).</p>",
      element: "Conhecimento",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Conjuração",
      description:
        "<p>Esse acessório tem um ritual de 1º círculo vinculado. Se estiver empunhando o item, você pode conjurar o ritual como se o conhecesse. Caso conheça o ritual, seu custo diminui em –1 PE.</p>",
      element: "Conhecimento",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Escudo Mental",
      description:
        "<p>O acessório gera uma barreira psíquica. Você recebe resistência mental 10.</p>",
      element: "Conhecimento",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Reflexão",
      description:
        "<p>Quando você é alvo de um ritual, pode gastar PE igual ao custo dele para refleti-lo de volta ao seu conjurador. As características do ritual (efeitos, DT...) se mantêm, mas você toma qualquer decisão exigida por ele.</p>",
      element: "Conhecimento",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Sagacidade",
      description:
        "<p>Sua mente é acelerada pelas forças do Conhecimento, fornecendo a você +1 em Intelecto (este aumento não fornece perícias treinadas extras).</p>",
      element: "Conhecimento",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Defesa",
      description:
        "<p>Uma barreira de energia protetora invisível gerada por este acessório fornece +5 de Defesa.</p>",
      element: "Energia",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Destreza",
      description:
        "<p>Este acessório aprimora sua coordenação e velocidade, fornecendo +1 em Agilidade.</p>",
      element: "Energia",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Esforço Adicional",
      description:
        "<p>Este acessório concede +5 PE. Este efeito só se ativa após um dia de uso.</p>",
      element: "Morte",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Disposição",
      description:
        "<p>Valendo-se do poder do Sangue, você recebe +1 em Vigor.</p>",
      element: "Sangue",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Pujança",
      description:
        "<p>O acessório aumenta sua potência muscular, fornecendo +1 em Força.</p>",
      element: "Sangue",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Vitalidade",
      description:
        "<p>Você recebe +15 PV. Os efeitos do anel só se ativam após um dia de uso.</p>",
      element: "Sangue",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
    {
      name: "Proteção Elemental",
      description:
        "<p>Você recebe resistência 10 contra um elemento. Este acessório conta como um item do elemento contra o qual fornece resistência (por exemplo, um utensilio de proteção elemental contra Energia é um item de Energia).</p>",
      element: "Varia",
      itemType: "misc",
      hasAutomation: !1,
      modType: "curse",
    },
  ],
  fs = { class: "ritual-circle" },
  bs = F({
    __name: "ModElementView",
    props: { mod: { type: Object, required: !0 } },
    setup(t) {
      ne((l) => ({ "15a4c800": v.value, "7cac154d": h.value }));
      const a = t,
        d = {
          conhecimento: "#ff8c00",
          energia: "#7000AC",
          morte: "#121212",
          sangue: "#d9534f",
          medo: "transparent",
          varia: "#fff",
        },
        v = U(() => d[a.mod.element.toLowerCase()]),
        h = U(() => (v.value === "#fff" ? "#121212" : "#fff"));
      return (l, s) => (
        o(), n("div", fs, [e("h3", null, B(t.mod.element.toUpperCase()), 1)])
      );
    },
  }),
  _s = W(bs, [["__scopeId", "data-v-0f385c89"]]),
  At = (t) => (be("data-v-d026fa79"), (t = t()), _e(), t),
  gs = { class: "modal-content modal-width" },
  ys = { class: "modal-header" },
  ws = At(() => e("h2", null, "Item Upgrades", -1)),
  $s = At(() =>
    e("img", { class: "close-icon", src: Ht, alt: "fechar" }, null, -1)
  ),
  Cs = [$s],
  As = { class: "modal-body modal-height" },
  ks = { key: 0, class: "mod-container" },
  Ts = { class: "mod-list" },
  Is = { class: "row" },
  Hs = { class: "mod-title" },
  Ms = { key: 0, class: "automation-icon", src: Ge, alt: "automação" },
  Vs = ["innerHTML"],
  Ps = { class: "button-container" },
  Ls = ["onClick"],
  Es = { key: 1, class: "mod-container" },
  qs = { class: "mod-list" },
  Us = { class: "row" },
  Rs = { class: "mod-title" },
  xs = ["innerHTML"],
  Ds = { class: "button-container" },
  Ss = ["onClick"],
  Bs = F({
    __name: "ModificationsModal",
    props: { modType: {} },
    emits: ["handleAddMod", "handleCloseModal"],
    setup(t, { emit: a }) {
      const d = t,
        v = a,
        h = [
          { label: "Modifications", value: 0 },
          { label: "Curses", value: 1 },
        ],
        l = y(0),
        s = (i) => (l.value = i),
        u = U(() =>
          d.modType === "weapon" ? us : d.modType === "protection" ? cs : ms
        ),
        r = U(() =>
          d.modType === "weapon" ? vs : d.modType === "protection" ? ps : hs
        ),
        p = (i) => {
          v("handleAddMod", i), v("handleCloseModal");
        };
      return (i, $) => (
        o(),
        n("div", gs, [
          e("div", ys, [
            ws,
            e(
              "button",
              { onClick: $[0] || ($[0] = (C) => i.$emit("handleCloseModal")) },
              Cs
            ),
          ]),
          e("div", As, [
            c(
              ds,
              { value: l.value, options: h, onHandleNavigation: s },
              null,
              8,
              ["value"]
            ),
            l.value === 0
              ? (o(),
                n("div", ks, [
                  e("div", Ts, [
                    (o(!0),
                    n(
                      G,
                      null,
                      ue(
                        u.value,
                        (C) => (
                          o(),
                          n("div", { key: C.name, class: "mod-card" }, [
                            e("div", Is, [
                              e("div", Hs, B(C.name), 1),
                              C.hasAutomation ? (o(), n("img", Ms)) : _("", !0),
                            ]),
                            e(
                              "div",
                              { class: "mod-text", innerHTML: C.description },
                              null,
                              8,
                              Vs
                            ),
                            e("div", Ps, [
                              e(
                                "button",
                                {
                                  class: "button-primary",
                                  onClick: (L) => p(C),
                                },
                                " Add New ",
                                8,
                                Ls
                              ),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]))
              : (o(),
                n("div", Es, [
                  e("div", qs, [
                    (o(!0),
                    n(
                      G,
                      null,
                      ue(
                        r.value,
                        (C) => (
                          o(),
                          n("div", { key: C.name, class: "mod-card" }, [
                            e("div", Us, [e("div", Rs, B(C.name), 1)]),
                            c(_s, { mod: C }, null, 8, ["mod"]),
                            e(
                              "div",
                              { class: "mod-text", innerHTML: C.description },
                              null,
                              8,
                              xs
                            ),
                            e("div", Ds, [
                              e(
                                "button",
                                {
                                  class: "button-primary",
                                  onClick: (L) => p(C),
                                },
                                " Add New ",
                                8,
                                Ss
                              ),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ])),
          ]),
        ])
      );
    },
  }),
  lt = W(Bs, [["__scopeId", "data-v-d026fa79"]]),
  We = ["-", "Short", "Medium", "Long", "Extreme", "Unlimited"],
  Ve = [
    {
      id: "alongada",
      onAdd(t) {
        const a = t;
        a.attackBonus || (a.attackBonus = 0), (a.attackBonus += 2);
      },
      onRemove(t) {
        const a = t;
        a.attackBonus || (a.attackBonus = 0), (a.attackBonus -= 2);
      },
    },
    {
      id: "calibre-grosso",
      onAdd(t) {
        const a = t;
        let d = parseInt(a.damage.charAt(0));
        isNaN(d) || (d++, a.damage.replace(a.damage.charAt(0), d.toString()));
      },
      onRemove(t) {
        const a = t;
        let d = parseInt(a.damage.charAt(0));
        isNaN(d) || (d--, a.damage.replace(a.damage.charAt(0), d.toString()));
      },
    },
    {
      id: "certeira",
      onAdd(t) {
        const a = t;
        a.attackBonus || (a.attackBonus = 0), (a.attackBonus += 2);
      },
      onRemove(t) {
        const a = t;
        a.attackBonus || (a.attackBonus = 0), (a.attackBonus -= 2);
      },
    },
    {
      id: "cruel",
      onAdd(t) {
        const a = t;
        a.aditionalDamage || (a.aditionalDamage = []),
          a.aditionalDamage.unshift({
            id: Be(),
            value: "2",
            damageType: a.damageType,
          });
      },
      onRemove(t) {
        const a = t;
        if (!a.aditionalDamage) return;
        const d = a.aditionalDamage.findIndex((v) => v.value === "2");
        d !== -1 && a.aditionalDamage.splice(d, 1);
      },
    },
    {
      id: "discreta",
      onAdd(t) {
        const a = t;
        a.slots &&
          ((a.slots = parseInt(a.slots.toString()) - 1),
          a.slots <= 0 && (a.slots = 0));
      },
      onRemove(t) {
        const a = t;
        a.slots = parseInt(a.slots.toString()) + 1;
      },
    },
    {
      id: "dum-dum",
      onAdd(t) {
        const a = t;
        a.criticalMult || (a.criticalMult = 2), a.criticalMult++;
      },
      onRemove(t) {
        const a = t;
        a.criticalMult || (a.criticalMult = 2),
          a.criticalMult--,
          a.criticalMult <= 1 && (a.criticalMult = 1);
      },
    },
    {
      id: "explosiva",
      onAdd(t) {
        const a = t;
        a.aditionalDamage || (a.aditionalDamage = []),
          a.aditionalDamage.unshift({
            id: Be(),
            value: "2d6",
            damageType: a.damageType,
          });
      },
      onRemove(t) {
        const a = t;
        if (!a.aditionalDamage) return;
        const d = a.aditionalDamage.findIndex((v) => v.value === "2d6");
        d !== -1 && a.aditionalDamage.splice(d, 1);
      },
    },
    {
      id: "mira-laser",
      onAdd(t) {
        const a = t;
        a.criticalRange || (a.criticalRange = 20),
          (a.criticalRange -= 2),
          a.criticalRange <= 1 && (a.criticalRange = 1);
      },
      onRemove(t) {
        const a = t;
        a.criticalRange || (a.criticalRange = 20),
          (a.criticalRange += 2),
          a.criticalRange >= 20 && (a.criticalRange = 20);
      },
    },
    {
      id: "mira-telescopica",
      onAdd(t) {
        const a = t,
          d = We.findIndex((v) => v === a.range);
        d !== -1 && (d >= 5 || (a.range = We[d + 1]));
      },
      onRemove(t) {
        const a = t,
          d = We.findIndex((v) => v === a.range);
        d === -1 || d === 0 || (a.range = We[d - 1]);
      },
    },
    {
      id: "perigosa",
      onAdd(t) {
        const a = t;
        a.criticalRange || (a.criticalRange = 20),
          (a.criticalRange -= 2),
          a.criticalRange <= 1 && (a.criticalRange = 1);
      },
      onRemove(t) {
        const a = t;
        a.criticalRange || (a.criticalRange = 20),
          (a.criticalRange += 2),
          a.criticalRange >= 20 && (a.criticalRange = 20);
      },
    },
    {
      id: "blindada",
      onAdd(t) {
        const a = t;
        a.slots || (a.slots = 0), (a.slots = parseInt(a.slots.toString()) + 1);
      },
      onRemove(t) {
        const a = t;
        a.slots || (a.slots = 0),
          (a.slots = parseInt(a.slots.toString()) - 1),
          a.slots <= 0 && (a.slots = 0);
      },
    },
    {
      id: "discreta",
      onAdd(t) {
        const a = t;
        a.slots || (a.slots = 0),
          (a.slots = parseInt(a.slots.toString()) - 1),
          a.slots <= 0 && (a.slots = 0);
      },
      onRemove(t) {
        const a = t;
        a.slots || (a.slots = 0), (a.slots = parseInt(a.slots.toString()) + 1);
      },
    },
    {
      id: "reforçada",
      onAdd(t) {
        const a = t;
        a.slots || (a.slots = 0), (a.slots = parseInt(a.slots.toString()) + 1);
      },
      onRemove(t) {
        const a = t;
        a.slots || (a.slots = 0),
          (a.slots = parseInt(a.slots.toString()) - 1),
          a.slots <= 0 && (a.slots = 0);
      },
    },
    {
      id: "discreto",
      onAdd(t) {
        const a = t;
        a.slots || (a.slots = 0),
          (a.slots = parseInt(a.slots.toString()) - 1),
          a.slots <= 0 && (a.slots = 0);
      },
      onRemove(t) {
        const a = t;
        a.slots || (a.slots = 0), (a.slots = parseInt(a.slots.toString()) + 1);
      },
    },
  ],
  Q = (t) => (be("data-v-44e77c4c"), (t = t()), _e(), t),
  Fs = { class: "input-container" },
  Os = Q(() => e("div", { class: "label" }, " Name* ", -1)),
  zs = { class: "input-row" },
  Ns = { class: "input-container" },
  js = Q(() => e("div", { class: "label" }, " Proficiency ", -1)),
  Qs = { class: "input-container" },
  Ws = Q(() => e("div", { class: "label" }, " Type ", -1)),
  Xs = { class: "input-container" },
  Ys = Q(() => e("div", { class: "label" }, " Handling ", -1)),
  Gs = { class: "input-row" },
  Ks = { class: "input-container" },
  Js = Q(() => e("div", { class: "label" }, " Damage* ", -1)),
  Zs = { class: "input-container" },
  ei = Q(() => e("div", { class: "label" }, " Secondary Damage ", -1)),
  ti = { class: "input-container" },
  ai = Q(() => e("div", { class: "label" }, " Critical* ", -1)),
  oi = { class: "input-container" },
  ni = Q(() => e("div", { class: "label" }, " Multiplier* ", -1)),
  si = { class: "input-container" },
  ii = Q(() => e("div", { class: "label" }, " Damage Type ", -1)),
  li = { class: "input-row" },
  ri = { class: "input-container" },
  di = Q(() => e("div", { class: "label" }, " Range ", -1)),
  ui = { class: "input-container" },
  ci = Q(() => e("div", { class: "label" }, " Category ", -1)),
  mi = { class: "input-container" },
  vi = Q(() => e("div", { class: "label" }, " Space* ", -1)),
  pi = { class: "title-container" },
  hi = Q(() => e("div", { class: "title" }, " Upgrades ", -1)),
  fi = { class: "mods-container" },
  bi = { class: "row" },
  _i = { class: "mod-title" },
  gi = { key: 0, class: "automation-icon", src: Ge, alt: "automação" },
  yi = ["innerHTML"],
  wi = { class: "button-container" },
  $i = ["onClick"],
  Ci = Q(() => e("div", { class: "label" }, " Image ", -1)),
  Ai = { key: 0 },
  ki = ["src"],
  Ti = { key: 1 },
  Ii = Q(() =>
    e(
      "img",
      { class: "picture", src: qe, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Hi = [Ii],
  Mi = Q(() =>
    e(
      "div",
      { class: "label" },
      [
        fe(" Description"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Vi = Q(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  Pi = { key: 0 },
  Li = ["disabled"],
  Ei = { key: 1 },
  qi = ["disabled"],
  Ui = { key: 0 },
  Ri = { key: 1, class: "modal-wrapper" },
  xi = F({
    __name: "WeaponForm",
    props: {
      weapon: { type: Object, default: ze },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreateWeapon", "handleClose", "handleEditWeapon"],
    setup(t, { emit: a }) {
      ne((A) => ({ "210cdc24": H.value }));
      const d = t,
        v = a,
        h = ["Simple Weapons", "Tactical Weapons", "Heavy Weapons"],
        l = [
          "Melee",
          "Throwing Weapons",
          "Arrow Based",
          "Firearm",
        ],
        s = ["Light", "One Handed", "Two Handed"],
        u = [
          "Ballistic",
          "Blood",
          "Bludgeoning",
          "Chemical",
          "Cold",
          "Death",
          "Energy",
          "Electricity",
          "Fire",
          "Knowledge",
          "Mental",
          "Piercing",
          "Slashing",
        ],
        r = ["-", "Short", "Medium", "Long", "Extreme", "Unlimited"],
        p = ["0", "I", "II", "III", "IV"],
        i = y(x.clone(d.weapon)),
        $ = y(!1),
        C = y(!1),
        L = U(
          () =>
            i.value.name === "" ||
            i.value.category === "" ||
            i.value.slots === "" ||
            i.value.damage === "" ||
            i.value.criticalRange.toString() === "" ||
            i.value.criticalMult.toString() === ""
        ),
        H = U(() =>
          d.edit && d.sheet
            ? "28.5rem"
            : d.homebrewList
            ? "34.75rem"
            : d.edit
            ? "25.5rem"
            : "25.75rem"
        ),
        k = () => {
          (i.value = x.clone(ze)), v("handleClose");
        },
        V = () => {
          L.value ||
            (_t(i.value),
            v("handleCreateWeapon", i.value),
            (i.value = x.clone(ze)));
        },
        g = () => {
          if (L.value) return;
          _t(i.value);
          const A = { item: i.value, sheet: d.sheet };
          v("handleEditWeapon", A), (i.value = x.clone(ze));
        },
        b = (A, m) => {
          L.value ||
            ((i.value.pictureURL = A),
            (i.value.pictureFullPath = m),
            ($.value = !1));
        },
        f = (A) => {
          if (A.hasAutomation) {
            const m = Ve.find((q) => q.id === A.automationId);
            if (!(m != null && m.onAdd)) return;
            m.onAdd(i.value);
          }
          i.value.mods || (i.value.mods = []),
            (A.id = Be()),
            A.modType === "curse" && i.value.mods.length === 0
              ? ((i.value.category = le(i.value.category)),
                (i.value.category = le(i.value.category)))
              : (i.value.category = le(i.value.category)),
            i.value.mods.unshift(A);
        },
        w = (A) => {
          if (!i.value.mods) return;
          if (A.hasAutomation) {
            const q = Ve.find((O) => O.id === A.automationId);
            if (!(q != null && q.onRemove)) return;
            q.onRemove(i.value);
          }
          const m = i.value.mods.findIndex((q) => q.id === A.id);
          i.value.mods.splice(m, 1),
            A.modType === "curse" &&
            i.value.mods.some((q) => q.modType === "curse")
              ? (i.value.category = re(i.value.category))
              : ((i.value.category = re(i.value.category)),
                (i.value.category = re(i.value.category)));
        };
      return (A, m) => {
        const q = te("p-editor"),
          O = te("vue-final-modal");
        return (
          o(),
          n(
            G,
            null,
            [
              e(
                "div",
                {
                  class: oe([
                    "form-container",
                    { "form-homebrew-padding": t.homebrewList },
                  ]),
                },
                [
                  e("div", Fs, [
                    Os,
                    D(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            m[0] || (m[0] = (I) => (i.value.name = I)),
                          type: "text",
                          class: "input-primary dark big-input",
                        },
                        null,
                        512
                      ),
                      [[S, i.value.name]]
                    ),
                  ]),
                  e("div", zs, [
                    e("div", Ns, [
                      js,
                      c(
                        X,
                        {
                          value: i.value.proficiencie,
                          options: h,
                          width: "8.5rem",
                          "content-width": "8.5rem",
                          "form-input": "",
                          onUpdateValue:
                            m[1] || (m[1] = (I) => (i.value.proficiencie = I)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", Qs, [
                      Ws,
                      c(
                        X,
                        {
                          value: i.value.type,
                          options: l,
                          width: "10rem",
                          "content-width": "10rem",
                          "form-input": "",
                          onUpdateValue:
                            m[2] || (m[2] = (I) => (i.value.type = I)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", Xs, [
                      Ys,
                      c(
                        X,
                        {
                          value: i.value.handling,
                          options: s,
                          width: "6.5rem",
                          "content-width": "6.5rem",
                          "form-input": "",
                          onUpdateValue:
                            m[3] || (m[3] = (I) => (i.value.handling = I)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                  ]),
                  e("div", Gs, [
                    e("div", Ks, [
                      Js,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              m[4] || (m[4] = (I) => (i.value.damage = I)),
                            type: "text",
                            class: "input-primary dark medium",
                          },
                          null,
                          512
                        ),
                        [[S, i.value.damage]]
                      ),
                    ]),
                    e("div", Zs, [
                      ei,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              m[5] ||
                              (m[5] = (I) => (i.value.secondaryDamage = I)),
                            type: "text",
                            class: "input-primary dark medium",
                          },
                          null,
                          512
                        ),
                        [[S, i.value.secondaryDamage]]
                      ),
                    ]),
                    e("div", ti, [
                      ai,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              m[6] ||
                              (m[6] = (I) => (i.value.criticalRange = I)),
                            type: "number",
                            class:
                              "input-primary dark small input-align-center",
                          },
                          null,
                          512
                        ),
                        [[S, i.value.criticalRange]]
                      ),
                    ]),
                    e("div", oi, [
                      ni,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              m[7] ||
                              (m[7] = (I) => (i.value.criticalMult = I)),
                            type: "number",
                            class:
                              "input-primary dark small input-align-center",
                          },
                          null,
                          512
                        ),
                        [[S, i.value.criticalMult]]
                      ),
                    ]),
                    e("div", si, [
                      ii,
                      c(
                        X,
                        {
                          value: i.value.damageType,
                          options: u,
                          width: "6.5rem",
                          "content-width": "6.5rem",
                          "form-input": "",
                          onUpdateValue:
                            m[8] || (m[8] = (I) => (i.value.damageType = I)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                  ]),
                  e("div", li, [
                    e("div", ri, [
                      di,
                      c(
                        X,
                        {
                          value: i.value.range,
                          options: r,
                          width: "5rem",
                          "content-width": "5rem",
                          "form-input": "",
                          onUpdateValue:
                            m[9] || (m[9] = (I) => (i.value.range = I)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", ui, [
                      ci,
                      c(
                        X,
                        {
                          value: i.value.category,
                          options: p,
                          width: "2.75rem",
                          "content-width": "2.75rem",
                          "form-input": "",
                          "small-input": "",
                          onUpdateValue:
                            m[10] || (m[10] = (I) => (i.value.category = I)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", mi, [
                      vi,
                      D(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              m[11] || (m[11] = (I) => (i.value.slots = I)),
                            type: "text",
                            class:
                              "input-primary dark small input-align-center",
                          },
                          null,
                          512
                        ),
                        [[S, i.value.slots]]
                      ),
                    ]),
                  ]),
                  e("div", pi, [
                    hi,
                    e(
                      "button",
                      {
                        class: "button-primary",
                        onClick: m[12] || (m[12] = (I) => (C.value = !0)),
                      },
                      " Add New "
                    ),
                  ]),
                  e("div", fi, [
                    (o(!0),
                    n(
                      G,
                      null,
                      ue(
                        i.value.mods,
                        (I) => (
                          o(),
                          n("div", { key: I.name, class: "mod-card" }, [
                            e("div", bi, [
                              e("div", _i, B(I.name), 1),
                              I.hasAutomation ? (o(), n("img", gi)) : _("", !0),
                            ]),
                            e(
                              "div",
                              { class: "mod-text", innerHTML: I.description },
                              null,
                              8,
                              yi
                            ),
                            e("div", wi, [
                              e(
                                "button",
                                {
                                  class: "button-primary",
                                  onClick: (P) => w(I),
                                },
                                " Remove ",
                                8,
                                $i
                              ),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                  Ci,
                  e(
                    "button",
                    {
                      class: "button-naked",
                      onClick: m[13] || (m[13] = (I) => ($.value = !0)),
                    },
                    [
                      i.value.pictureURL
                        ? (o(),
                          n("div", Ai, [
                            e(
                              "img",
                              {
                                class: "picture",
                                src: i.value.pictureURL,
                                alt: "foto agente",
                              },
                              null,
                              8,
                              ki
                            ),
                          ]))
                        : (o(), n("div", Ti, Hi)),
                    ]
                  ),
                  Mi,
                  c(
                    q,
                    {
                      modelValue: i.value.description,
                      "onUpdate:modelValue":
                        m[14] || (m[14] = (I) => (i.value.description = I)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: N(() => [Vi]), _: 1 },
                    8,
                    ["modelValue"]
                  ),
                ],
                2
              ),
              e(
                "div",
                {
                  class: oe([
                    "buttons-container",
                    { "homebrew-background": t.homebrewList },
                  ]),
                },
                [
                  e(
                    "button",
                    { class: "button-cancel", onClick: k },
                    " Cancel "
                  ),
                  t.edit
                    ? (o(),
                      n("div", Pi, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: L.value,
                            onClick: g,
                          },
                          B(d.addMode ? "Add" : "Edit"),
                          9,
                          Li
                        ),
                      ]))
                    : (o(),
                      n("div", Ei, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: L.value,
                            onClick: V,
                          },
                          " Add New ",
                          8,
                          qi
                        ),
                      ])),
                ],
                2
              ),
              $.value
                ? (o(),
                  n("div", Ui, [
                    c(
                      O,
                      {
                        modelValue: $.value,
                        "onUpdate:modelValue":
                          m[16] || (m[16] = (I) => ($.value = I)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(Ee, {
                            "is-free-style": "",
                            onHandleCloseModal:
                              m[15] || (m[15] = (I) => ($.value = !$.value)),
                            onHandleUpdatePicture: b,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
              C.value
                ? (o(),
                  n("div", Ri, [
                    c(
                      O,
                      {
                        modelValue: C.value,
                        "onUpdate:modelValue":
                          m[18] || (m[18] = (I) => (C.value = I)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(lt, {
                            "mod-type": "weapon",
                            onHandleAddMod: f,
                            onHandleCloseModal:
                              m[17] || (m[17] = (I) => (C.value = !C.value)),
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  kt = W(xi, [["__scopeId", "data-v-44e77c4c"]]),
  pe = (t) => (be("data-v-e807ed7e"), (t = t()), _e(), t),
  Di = { class: "form-container" },
  Si = { class: "input-container" },
  Bi = pe(() => e("div", { class: "label" }, " Name* ", -1)),
  Fi = { class: "input-row" },
  Oi = { class: "input-container" },
  zi = pe(() => e("div", { class: "label" }, " Defense* ", -1)),
  Ni = { class: "input-container" },
  ji = pe(() => e("div", { class: "label" }, " Category* ", -1)),
  Qi = { class: "input-container" },
  Wi = pe(() => e("div", { class: "label" }, " Space* ", -1)),
  Xi = { class: "title-container" },
  Yi = pe(() => e("div", { class: "title" }, " Upgrades ", -1)),
  Gi = { class: "mods-container" },
  Ki = { class: "row" },
  Ji = { class: "mod-title" },
  Zi = { key: 0, class: "automation-icon", src: Ge, alt: "automação" },
  el = ["innerHTML"],
  tl = { class: "button-container" },
  al = ["onClick"],
  ol = pe(() => e("div", { class: "label" }, " Image ", -1)),
  nl = { key: 0 },
  sl = ["src"],
  il = { key: 1 },
  ll = pe(() =>
    e(
      "img",
      { class: "picture", src: qe, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  rl = [ll],
  dl = pe(() =>
    e(
      "div",
      { class: "label" },
      [
        fe(" Description"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  ul = pe(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  cl = { key: 0 },
  ml = ["disabled"],
  vl = { key: 1 },
  pl = ["disabled"],
  hl = { key: 0 },
  fl = { key: 1 },
  bl = F({
    __name: "ProtectionForm",
    props: {
      protection: { type: Object, default: Ne },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
      editHomebrewPage: Boolean,
    },
    emits: ["handleCreateProtection", "handleClose", "handleEditProtection"],
    setup(t, { emit: a }) {
      ne((g) => ({ "37d40d30": r.value, "3ebfdbf0": p.value }));
      const d = t,
        v = a,
        h = ["0", "I", "II", "III", "IV"],
        l = y(x.clone(d.protection)),
        s = y(!1),
        u = y(!1),
        r = U(() =>
          d.editHomebrewPage
            ? "45rem"
            : d.homebrewList || d.edit
            ? "28.5rem"
            : "25.5rem"
        ),
        p = U(() => (d.homebrewList ? "1rem" : "0")),
        i = U(
          () =>
            l.value.name === "" ||
            l.value.category === "" ||
            l.value.slots === "" ||
            l.value.defense.toString() === ""
        ),
        $ = () => {
          (l.value = x.clone(Ne)), v("handleClose");
        },
        C = () => {
          i.value ||
            (gt(l.value),
            v("handleCreateProtection", l.value),
            (l.value = x.clone(Ne)));
        },
        L = () => {
          if (i.value) return;
          gt(l.value);
          const g = { item: l.value, sheet: d.sheet };
          v("handleEditProtection", g), (l.value = x.clone(Ne));
        },
        H = (g, b) => {
          i.value ||
            ((l.value.pictureURL = g),
            (l.value.pictureFullPath = b),
            (s.value = !1));
        },
        k = (g) => {
          if (g.hasAutomation) {
            const b = Ve.find((f) => f.id === g.automationId);
            if (!(b != null && b.onAdd)) return;
            b.onAdd(l.value);
          }
          l.value.mods || (l.value.mods = []),
            (g.id = Be()),
            g.modType === "curse" && l.value.mods.length === 0
              ? ((l.value.category = le(l.value.category)),
                (l.value.category = le(l.value.category)))
              : (l.value.category = le(l.value.category)),
            l.value.mods.unshift(g);
        },
        V = (g) => {
          if (!l.value.mods) return;
          if (g.hasAutomation) {
            const f = Ve.find((w) => w.id === g.automationId);
            if (!(f != null && f.onRemove)) return;
            f.onRemove(l.value);
          }
          const b = l.value.mods.findIndex((f) => f.id === g.id);
          l.value.mods.splice(b, 1),
            g.modType === "curse" &&
            l.value.mods.some((f) => f.modType === "curse")
              ? (l.value.category = re(l.value.category))
              : ((l.value.category = re(l.value.category)),
                (l.value.category = re(l.value.category)));
        };
      return (g, b) => {
        const f = te("p-editor"),
          w = te("vue-final-modal");
        return (
          o(),
          n(
            G,
            null,
            [
              e("div", Di, [
                e("div", Si, [
                  Bi,
                  D(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          b[0] || (b[0] = (A) => (l.value.name = A)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[S, l.value.name]]
                  ),
                ]),
                e("div", Fi, [
                  e("div", Oi, [
                    zi,
                    D(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            b[1] || (b[1] = (A) => (l.value.defense = A)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[S, l.value.defense]]
                    ),
                  ]),
                  e("div", Ni, [
                    ji,
                    c(
                      X,
                      {
                        value: l.value.category,
                        options: h,
                        width: "2.75rem",
                        "content-width": "2.75rem",
                        "form-input": "",
                        "small-input": "",
                        onUpdateValue:
                          b[2] || (b[2] = (A) => (l.value.category = A)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Qi, [
                    Wi,
                    D(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            b[3] || (b[3] = (A) => (l.value.slots = A)),
                          type: "text",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[S, l.value.slots]]
                    ),
                  ]),
                ]),
                e("div", Xi, [
                  Yi,
                  e(
                    "button",
                    {
                      class: "button-primary",
                      onClick: b[4] || (b[4] = (A) => (u.value = !0)),
                    },
                    " Add New "
                  ),
                ]),
                e("div", Gi, [
                  (o(!0),
                  n(
                    G,
                    null,
                    ue(
                      l.value.mods,
                      (A) => (
                        o(),
                        n("div", { key: A.name, class: "mod-card" }, [
                          e("div", Ki, [
                            e("div", Ji, B(A.name), 1),
                            A.hasAutomation ? (o(), n("img", Zi)) : _("", !0),
                          ]),
                          e(
                            "div",
                            { class: "mod-text", innerHTML: A.description },
                            null,
                            8,
                            el
                          ),
                          e("div", tl, [
                            e(
                              "button",
                              { class: "button-primary", onClick: (m) => V(A) },
                              " Remove ",
                              8,
                              al
                            ),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
                ol,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: b[5] || (b[5] = (A) => (s.value = !0)),
                  },
                  [
                    l.value.pictureURL
                      ? (o(),
                        n("div", nl, [
                          e(
                            "img",
                            {
                              class: "picture",
                              src: l.value.pictureURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            sl
                          ),
                        ]))
                      : (o(), n("div", il, rl)),
                  ]
                ),
                dl,
                c(
                  f,
                  {
                    modelValue: l.value.description,
                    "onUpdate:modelValue":
                      b[6] || (b[6] = (A) => (l.value.description = A)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: N(() => [ul]), _: 1 },
                  8,
                  ["modelValue"]
                ),
                e(
                  "div",
                  {
                    class: oe([
                      "buttons-container",
                      { "homebrew-background": t.homebrewList },
                    ]),
                  },
                  [
                    e(
                      "button",
                      { class: "button-cancel", onClick: $ },
                      " Cancel "
                    ),
                    t.edit
                      ? (o(),
                        n("div", cl, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: i.value,
                              onClick: L,
                            },
                            B(d.addMode ? "Add" : "Edit"),
                            9,
                            ml
                          ),
                        ]))
                      : (o(),
                        n("div", vl, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: i.value,
                              onClick: C,
                            },
                            " Add New ",
                            8,
                            pl
                          ),
                        ])),
                  ],
                  2
                ),
              ]),
              s.value
                ? (o(),
                  n("div", hl, [
                    c(
                      w,
                      {
                        modelValue: s.value,
                        "onUpdate:modelValue":
                          b[8] || (b[8] = (A) => (s.value = A)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(Ee, {
                            "is-free-style": "",
                            onHandleCloseModal:
                              b[7] || (b[7] = (A) => (s.value = !s.value)),
                            onHandleUpdatePicture: H,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
              u.value
                ? (o(),
                  n("div", fl, [
                    c(
                      w,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          b[10] || (b[10] = (A) => (u.value = A)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(lt, {
                            "mod-type": "protection",
                            onHandleAddMod: k,
                            onHandleCloseModal:
                              b[9] || (b[9] = (A) => (u.value = !u.value)),
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  Tt = W(bl, [["__scopeId", "data-v-e807ed7e"]]),
  he = (t) => (be("data-v-883c585d"), (t = t()), _e(), t),
  _l = { class: "form-container" },
  gl = { class: "input-container" },
  yl = he(() => e("div", { class: "label" }, " Name* ", -1)),
  wl = { class: "input-row" },
  $l = { class: "input-container" },
  Cl = he(() => e("div", { class: "label" }, " Category* ", -1)),
  Al = { class: "input-container" },
  kl = he(() => e("div", { class: "label" }, " Spaces* ", -1)),
  Tl = { key: 0, class: "input-container" },
  Il = he(() => e("div", { class: "label" }, " Tag ", -1)),
  Hl = { key: 0, class: "title-container" },
  Ml = he(() => e("div", { class: "title" }, " Upgrades ", -1)),
  Vl = { key: 1, class: "mods-container" },
  Pl = { class: "row" },
  Ll = { class: "mod-title" },
  El = { key: 0, class: "automation-icon", src: Ge, alt: "automação" },
  ql = ["innerHTML"],
  Ul = { class: "button-container" },
  Rl = ["onClick"],
  xl = he(() => e("div", { class: "label" }, " Image ", -1)),
  Dl = { key: 0 },
  Sl = ["src"],
  Bl = { key: 1 },
  Fl = he(() =>
    e(
      "img",
      { class: "picture", src: qe, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  Ol = [Fl],
  zl = he(() =>
    e(
      "div",
      { class: "label" },
      [
        fe(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Nl = he(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  jl = { key: 0 },
  Ql = ["disabled"],
  Wl = { key: 1 },
  Xl = ["disabled"],
  Yl = { key: 0 },
  Gl = { key: 1 },
  Kl = F({
    __name: "MiscForm",
    props: {
      misc: { type: Object, default: je },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
      editHomebrewPage: Boolean,
    },
    emits: ["handleCreateMisc", "handleClose", "handleEditMisc"],
    setup(t, { emit: a }) {
      ne((b) => ({ "707a2d43": p.value, "3ee22375": i.value }));
      const d = t,
        v = a,
        h = ["0", "I", "II", "III", "IV"],
        l = [
          "Accessories",
          "Explosives",
          "Operacional Items",
          "Paranormal Items",
        ],
        s = y(x.clone(d.misc)),
        u = y(!1),
        r = y(!1),
        p = U(() =>
          d.editHomebrewPage
            ? "45rem"
            : (d.edit && d.sheet) || d.homebrewList
            ? "28.5rem"
            : (d.edit, "25.5rem")
        ),
        i = U(() => (d.homebrewList ? "1rem" : "0")),
        $ = U(
          () =>
            s.value.name === "" ||
            s.value.description === "" ||
            s.value.category === "" ||
            s.value.slots === ""
        ),
        C = () => {
          (s.value = x.clone(je)), v("handleClose");
        },
        L = () => {
          $.value ||
            (yt(s.value),
            v("handleCreateMisc", s.value),
            (s.value = x.clone(je)));
        },
        H = () => {
          if ($.value) return;
          yt(s.value);
          const b = { item: s.value, sheet: d.sheet };
          v("handleEditMisc", b), (s.value = x.clone(je));
        },
        k = (b, f) => {
          $.value ||
            ((s.value.pictureURL = b),
            (s.value.pictureFullPath = f),
            (u.value = !1));
        },
        V = (b) => {
          if (b.hasAutomation) {
            const f = Ve.find((w) => w.id === b.automationId);
            if (!(f != null && f.onAdd)) return;
            f.onAdd(s.value);
          }
          s.value.mods || (s.value.mods = []),
            (b.id = Be()),
            b.modType === "curse" && s.value.mods.length === 0
              ? ((s.value.category = le(s.value.category)),
                (s.value.category = le(s.value.category)))
              : (s.value.category = le(s.value.category)),
            s.value.mods.unshift(b);
        },
        g = (b) => {
          if (!s.value.mods) return;
          if (b.hasAutomation) {
            const w = Ve.find((A) => A.id === b.automationId);
            if (!(w != null && w.onRemove)) return;
            w.onRemove(s.value);
          }
          const f = s.value.mods.findIndex((w) => w.id === b.id);
          s.value.mods.splice(f, 1),
            b.modType === "curse" &&
            s.value.mods.some((w) => w.modType === "curse")
              ? (s.value.category = re(s.value.category))
              : ((s.value.category = re(s.value.category)),
                (s.value.category = re(s.value.category)));
        };
      return (b, f) => {
        const w = te("p-editor"),
          A = te("vue-final-modal");
        return (
          o(),
          n(
            G,
            null,
            [
              e("div", _l, [
                e("div", gl, [
                  yl,
                  D(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          f[0] || (f[0] = (m) => (s.value.name = m)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[S, s.value.name]]
                  ),
                ]),
                e("div", wl, [
                  e("div", $l, [
                    Cl,
                    c(
                      X,
                      {
                        value: s.value.category,
                        options: h,
                        width: "2.75rem",
                        "content-width": "2.75rem",
                        "form-input": "",
                        "small-input": "",
                        onUpdateValue:
                          f[1] || (f[1] = (m) => (s.value.category = m)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Al, [
                    kl,
                    D(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            f[2] || (f[2] = (m) => (s.value.slots = m)),
                          type: "number",
                          class: "input-primary dark small",
                        },
                        null,
                        512
                      ),
                      [[S, s.value.slots]]
                    ),
                  ]),
                  s.value.itemType !== "ammunition"
                    ? (o(),
                      n("div", Tl, [
                        Il,
                        c(
                          X,
                          {
                            value: s.value.tag,
                            options: l,
                            width: "10rem",
                            "content-width": "10rem",
                            "form-input": "",
                            onUpdateValue:
                              f[3] || (f[3] = (m) => (s.value.tag = m)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]))
                    : _("", !0),
                ]),
                s.value.itemType !== "ammunition"
                  ? (o(),
                    n("div", Hl, [
                      Ml,
                      e(
                        "button",
                        {
                          class: "button-primary",
                          onClick: f[4] || (f[4] = (m) => (r.value = !0)),
                        },
                        " Add New "
                      ),
                    ]))
                  : _("", !0),
                s.value.itemType !== "ammunition"
                  ? (o(),
                    n("div", Vl, [
                      (o(!0),
                      n(
                        G,
                        null,
                        ue(
                          s.value.mods,
                          (m) => (
                            o(),
                            n("div", { key: m.name, class: "mod-card" }, [
                              e("div", Pl, [
                                e("div", Ll, B(m.name), 1),
                                m.hasAutomation
                                  ? (o(), n("img", El))
                                  : _("", !0),
                              ]),
                              e(
                                "div",
                                { class: "mod-text", innerHTML: m.description },
                                null,
                                8,
                                ql
                              ),
                              e("div", Ul, [
                                e(
                                  "button",
                                  {
                                    class: "button-primary",
                                    onClick: (q) => g(m),
                                  },
                                  " Remove ",
                                  8,
                                  Rl
                                ),
                              ]),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : _("", !0),
                xl,
                e(
                  "button",
                  {
                    class: "button-naked",
                    onClick: f[5] || (f[5] = (m) => (u.value = !0)),
                  },
                  [
                    s.value.pictureURL
                      ? (o(),
                        n("div", Dl, [
                          e(
                            "img",
                            {
                              class: "picture",
                              src: s.value.pictureURL,
                              alt: "foto agente",
                            },
                            null,
                            8,
                            Sl
                          ),
                        ]))
                      : (o(), n("div", Bl, Ol)),
                  ]
                ),
                zl,
                c(
                  w,
                  {
                    modelValue: s.value.description,
                    "onUpdate:modelValue":
                      f[6] || (f[6] = (m) => (s.value.description = m)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: N(() => [Nl]), _: 1 },
                  8,
                  ["modelValue"]
                ),
                e(
                  "div",
                  {
                    class: oe([
                      "buttons-container",
                      { "homebrew-background": t.homebrewList },
                    ]),
                  },
                  [
                    e(
                      "button",
                      { class: "button-cancel", onClick: C },
                      " Cancel "
                    ),
                    t.edit
                      ? (o(),
                        n("div", jl, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: $.value,
                              onClick: H,
                            },
                            B(d.addMode ? "Add" : "Edit"),
                            9,
                            Ql
                          ),
                        ]))
                      : (o(),
                        n("div", Wl, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: $.value,
                              onClick: L,
                            },
                            " Add New ",
                            8,
                            Xl
                          ),
                        ])),
                  ],
                  2
                ),
              ]),
              u.value
                ? (o(),
                  n("div", Yl, [
                    c(
                      A,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          f[8] || (f[8] = (m) => (u.value = m)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(Ee, {
                            "is-free-style": "",
                            onHandleCloseModal:
                              f[7] || (f[7] = (m) => (u.value = !u.value)),
                            onHandleUpdatePicture: k,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
              r.value
                ? (o(),
                  n("div", Gl, [
                    c(
                      A,
                      {
                        modelValue: r.value,
                        "onUpdate:modelValue":
                          f[10] || (f[10] = (m) => (r.value = m)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(lt, {
                            "mod-type": "misc",
                            onHandleAddMod: V,
                            onHandleCloseModal:
                              f[9] || (f[9] = (m) => (r.value = !r.value)),
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  Xe = W(Kl, [["__scopeId", "data-v-883c585d"]]),
  ge = (t) => (be("data-v-2d90735f"), (t = t()), _e(), t),
  Jl = { class: "form-container" },
  Zl = { class: "input-row" },
  er = { class: "input-container" },
  tr = ge(() => e("div", { class: "label" }, " Name* ", -1)),
  ar = { class: "input-container" },
  or = ge(() => e("div", { class: "label" }, " Element ", -1)),
  nr = { class: "input-row" },
  sr = { class: "input-container" },
  ir = ge(() => e("div", { class: "label" }, " Category* ", -1)),
  lr = { class: "input-container" },
  rr = ge(() => e("div", { class: "label" }, " Space* ", -1)),
  dr = { class: "row" },
  ur = ge(() => e("div", { class: "label" }, " Image ", -1)),
  cr = { key: 0 },
  mr = ["src"],
  vr = { key: 1 },
  pr = ge(() =>
    e(
      "img",
      { class: "picture", src: qe, alt: "foto agente em branco" },
      null,
      -1
    )
  ),
  hr = [pr],
  fr = ge(() =>
    e(
      "div",
      { class: "label" },
      [
        fe(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  br = ge(() =>
    e(
      "span",
      { class: "ql-formats" },
      [
        e("button", { class: "ql-bold" }),
        e("button", { class: "ql-italic" }),
        e("button", { class: "ql-underline" }),
      ],
      -1
    )
  ),
  _r = { key: 0 },
  gr = ["disabled"],
  yr = { key: 1 },
  wr = ["disabled"],
  $r = { key: 0 },
  Cr = F({
    __name: "CursedItemForm",
    props: {
      cursedItem: { type: Object, default: Qe },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
      editHomebrewPage: Boolean,
    },
    emits: ["handleCreateCursedItem", "handleClose", "handleEditCursedItem"],
    setup(t, { emit: a }) {
      ne((k) => ({ "59ebe937": r.value, f8b033fe: p.value }));
      const d = t,
        v = a,
        h = ["0", "I", "II", "III", "IV"],
        l = ["Blood", "Death", "Energy", "Fear", "Knowledge", "Varies"],
        s = y(x.clone(d.cursedItem)),
        u = y(!1),
        r = U(() =>
          d.editHomebrewPage
            ? "38rem"
            : (d.edit && d.sheet) || d.homebrewList
            ? "28.5rem"
            : (d.edit, "25.5rem")
        ),
        p = U(() => (d.homebrewList ? "1rem" : "0")),
        i = U(() => s.value.name === "" || s.value.description === ""),
        $ = () => {
          (s.value = x.clone(Qe)), v("handleClose");
        },
        C = () => {
          i.value ||
            (wt(s.value),
            v("handleCreateCursedItem", s.value),
            (s.value = x.clone(Qe)));
        },
        L = () => {
          if (i.value) return;
          wt(s.value);
          const k = { item: s.value, sheet: d.sheet };
          v("handleEditCursedItem", k), (s.value = x.clone(Qe));
        },
        H = (k, V) => {
          i.value ||
            ((s.value.pictureURL = k),
            (s.value.pictureFullPath = V),
            (u.value = !1));
        };
      return (k, V) => {
        const g = te("p-editor"),
          b = te("vue-final-modal");
        return (
          o(),
          n(
            G,
            null,
            [
              e("div", Jl, [
                e("div", Zl, [
                  e("div", er, [
                    tr,
                    D(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            V[0] || (V[0] = (f) => (s.value.name = f)),
                          class: "input-primary dark big-input",
                        },
                        null,
                        512
                      ),
                      [[S, s.value.name]]
                    ),
                  ]),
                  e("div", ar, [
                    or,
                    c(
                      X,
                      {
                        value: s.value.element,
                        options: l,
                        width: "7.75rem",
                        "content-width": "7.75rem",
                        "form-input": "",
                        onUpdateValue:
                          V[1] || (V[1] = (f) => (s.value.element = f)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", nr, [
                  e("div", sr, [
                    ir,
                    c(
                      X,
                      {
                        value: s.value.category,
                        options: h,
                        width: "2.75rem",
                        "content-width": "2.75rem",
                        "form-input": "",
                        "small-input": "",
                        onUpdateValue:
                          V[2] || (V[2] = (f) => (s.value.category = f)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", lr, [
                    rr,
                    D(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            V[3] || (V[3] = (f) => (s.value.slots = f)),
                          type: "text",
                          class: "input-primary dark small",
                        },
                        null,
                        512
                      ),
                      [[S, s.value.slots]]
                    ),
                  ]),
                ]),
                e("div", dr, [
                  ur,
                  e(
                    "button",
                    {
                      class: "button-naked",
                      onClick: V[4] || (V[4] = (f) => (u.value = !0)),
                    },
                    [
                      s.value.pictureURL
                        ? (o(),
                          n("div", cr, [
                            e(
                              "img",
                              {
                                class: "picture",
                                src: s.value.pictureURL,
                                alt: "foto agente",
                              },
                              null,
                              8,
                              mr
                            ),
                          ]))
                        : (o(), n("div", vr, hr)),
                    ]
                  ),
                ]),
                fr,
                c(
                  g,
                  {
                    modelValue: s.value.description,
                    "onUpdate:modelValue":
                      V[5] || (V[5] = (f) => (s.value.description = f)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: N(() => [br]), _: 1 },
                  8,
                  ["modelValue"]
                ),
                e(
                  "div",
                  {
                    class: oe([
                      "buttons-container",
                      { "homebrew-background": t.homebrewList },
                    ]),
                  },
                  [
                    e(
                      "button",
                      { class: "button-cancel", onClick: $ },
                      " Cancel "
                    ),
                    t.edit
                      ? (o(),
                        n("div", _r, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: i.value,
                              onClick: L,
                            },
                            B(d.addMode ? "Add" : "Edit"),
                            9,
                            gr
                          ),
                        ]))
                      : (o(),
                        n("div", yr, [
                          e(
                            "button",
                            {
                              class: "button-primary big",
                              disabled: i.value,
                              onClick: C,
                            },
                            " Add New ",
                            8,
                            wr
                          ),
                        ])),
                  ],
                  2
                ),
              ]),
              u.value
                ? (o(),
                  n("div", $r, [
                    c(
                      b,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          V[7] || (V[7] = (f) => (u.value = f)),
                        classes: "modal-container",
                      },
                      {
                        default: N(() => [
                          c(Ee, {
                            "is-free-style": "",
                            onHandleCloseModal:
                              V[6] || (V[6] = (f) => (u.value = !u.value)),
                            onHandleUpdatePicture: H,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : _("", !0),
            ],
            64
          )
        );
      };
    },
  }),
  It = W(Cr, [["__scopeId", "data-v-2d90735f"]]),
  Ar = { key: 0 },
  kr = { key: 0 },
  Tr = { key: 1 },
  Ir = { key: 2 },
  Hr = { key: 3 },
  Mr = { key: 4 },
  Vr = { key: 1 },
  Pr = F({
    __name: "CreateHomebrewItems",
    props: {
      currentCreateOption: { type: String, required: !0 },
      homebrewList: Boolean,
    },
    emits: ["handleClose"],
    setup(t, { emit: a }) {
      const d = a,
        v = ce(),
        h = me(),
        l = y(!1),
        s = {
          weapon: "weapon",
          ammunition: "ammunition",
          protection: "protection",
          misc: "misc",
          cursedItem: "cursedItem",
        },
        u = y({ message: "", type: "error", alive: !1, timeout: 0 }),
        r = async (i) => {
          var C;
          if (!v.currentUser) return;
          if (
            ((l.value = !0),
            (await Le((C = v.currentUser) == null ? void 0 : C.uid)) < 4 &&
              !(await st(v.currentUser.uid)))
          ) {
            (l.value = !1),
              (u.value.message = "Homebrew limit reached"),
              (u.value.alive = !0);
            return;
          }
          (i.uid = v.currentUser.uid),
            await ot(Y(h, "homebrewItems"), i),
            (l.value = !1),
            d("handleClose");
        };
      et(
        () => u.value.alive,
        () => {
          u.value.alive === !0 &&
            (u.value.timeout = window.setTimeout(
              () => (u.value.alive = !1),
              3e3
            ));
        }
      );
      const p = () => {
        (u.value.alive = !1), clearTimeout(u.value.timeout);
      };
      return (i, $) =>
        l.value
          ? (o(), n("div", Vr, [c(ve)]))
          : (o(),
            n("div", Ar, [
              t.currentCreateOption === s.weapon
                ? (o(),
                  n("div", kr, [
                    c(
                      kt,
                      {
                        "homebrew-list": t.homebrewList,
                        "edit-homebrew-page": "",
                        onHandleCreateWeapon: r,
                        onHandleClose:
                          $[0] || ($[0] = (C) => i.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              t.currentCreateOption === s.ammunition
                ? (o(),
                  n("div", Tr, [
                    c(
                      Xe,
                      {
                        misc: Ye(Vt),
                        "homebrew-list": t.homebrewList,
                        "edit-homebrew-page": "",
                        onHandleCreateMisc: r,
                        onHandleClose:
                          $[1] || ($[1] = (C) => i.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["misc", "homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              t.currentCreateOption === s.protection
                ? (o(),
                  n("div", Ir, [
                    c(
                      Tt,
                      {
                        "homebrew-list": t.homebrewList,
                        "edit-homebrew-page": "",
                        onHandleCreateProtection: r,
                        onHandleClose:
                          $[2] || ($[2] = (C) => i.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              t.currentCreateOption === s.misc
                ? (o(),
                  n("div", Hr, [
                    c(
                      Xe,
                      {
                        "homebrew-list": t.homebrewList,
                        "edit-homebrew-page": "",
                        onHandleCreateMisc: r,
                        onHandleClose:
                          $[3] || ($[3] = (C) => i.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              t.currentCreateOption === s.cursedItem
                ? (o(),
                  n("div", Mr, [
                    c(
                      It,
                      {
                        "homebrew-list": t.homebrewList,
                        "edit-homebrew-page": "",
                        onHandleCreateCursedItem: r,
                        onHandleClose:
                          $[4] || ($[4] = (C) => i.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              c(
                at,
                { name: "toast" },
                {
                  default: N(() => [
                    u.value.alive
                      ? (o(),
                        tt(
                          it,
                          {
                            key: 0,
                            toast: u.value,
                            type: u.value.type,
                            onDismiss: p,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : _("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  Lr = { key: 0 },
  Er = { key: 0 },
  qr = { key: 1 },
  Ur = { key: 2 },
  Rr = { key: 3 },
  xr = { key: 4 },
  Dr = { key: 1 },
  Sr = F({
    __name: "EditHomebreItems",
    props: { item: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditItemSheet"],
    setup(t, { emit: a }) {
      const d = a,
        v = ce(),
        h = me(),
        l = y(!1),
        s = {
          weapon: "weapon",
          ammunition: "ammunition",
          protection: "protection",
          misc: "misc",
          cursedItem: "cursedItem",
        },
        u = async (r) => {
          if (v.currentUser) {
            if (((l.value = !0), r.sheet)) {
              d("handleEditItemSheet", r.item);
              return;
            }
            await nt(Pe(h, "homebrewItems", r.item.id), r.item),
              (l.value = !1),
              d("handleClose");
          }
        };
      return (r, p) =>
        l.value
          ? (o(), n("div", Dr, [c(ve)]))
          : (o(),
            n("div", Lr, [
              r.item.itemType === s.weapon
                ? (o(),
                  n("div", Er, [
                    c(
                      kt,
                      {
                        weapon: r.item,
                        "homebrew-list": r.homebrewList,
                        edit: "",
                        "edit-homebrew-page": "",
                        onHandleEditWeapon: u,
                        onHandleClose:
                          p[0] || (p[0] = (i) => r.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["weapon", "homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              r.item.itemType === s.ammunition
                ? (o(),
                  n("div", qr, [
                    c(
                      Xe,
                      {
                        misc: r.item,
                        "homebrew-list": r.homebrewList,
                        edit: "",
                        "edit-homebrew-page": "",
                        onHandleEditMisc: u,
                        onHandleClose:
                          p[1] || (p[1] = (i) => r.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["misc", "homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              r.item.itemType === s.protection
                ? (o(),
                  n("div", Ur, [
                    c(
                      Tt,
                      {
                        protection: r.item,
                        "homebrew-list": r.homebrewList,
                        edit: "",
                        "edit-homebrew-page": "",
                        onHandleEditProtection: u,
                        onHandleClose:
                          p[2] || (p[2] = (i) => r.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["protection", "homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              r.item.itemType === s.misc
                ? (o(),
                  n("div", Rr, [
                    c(
                      Xe,
                      {
                        misc: r.item,
                        "homebrew-list": r.homebrewList,
                        edit: "",
                        "edit-homebrew-page": "",
                        onHandleEditMisc: u,
                        onHandleClose:
                          p[3] || (p[3] = (i) => r.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["misc", "homebrew-list"]
                    ),
                  ]))
                : _("", !0),
              r.item.itemType === s.cursedItem
                ? (o(),
                  n("div", xr, [
                    c(
                      It,
                      {
                        "cursed-item": r.item,
                        "homebrew-list": r.homebrewList,
                        edit: "",
                        "edit-homebrew-page": "",
                        onHandleEditCursedItem: u,
                        onHandleClose:
                          p[4] || (p[4] = (i) => r.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["cursed-item", "homebrew-list"]
                    ),
                  ]))
                : _("", !0),
            ]));
    },
  }),
  Br = { class: "class-abilities-container" },
  Fr = { key: 1 },
  Or = { key: 2 },
  zr = { key: 3 },
  Nr = { key: 0 },
  jr = F({
    __name: "HomebrewItems",
    props: { homebrewList: Boolean },
    emits: ["handleAddItem"],
    setup(t, { emit: a }) {
      const d = a,
        v = y(0),
        h = y(),
        l = y("list"),
        s = { list: "list", create: "create", edit: "edit" },
        u = y("weapon"),
        r = {
          weapon: "weapon",
          ammunition: "ammunition",
          protection: "protection",
          misc: "misc",
          cursedItem: "cursedItem",
        },
        p = [
          { label: "Weapons", value: 0 },
          { label: "Ammo", value: 1 },
          { label: "Armor", value: 2 },
          { label: "General", value: 3 },
          { label: "Cursed Items", value: 4 },
        ],
        i = (L) => d("handleAddItem", L),
        $ = (L) => {
          (h.value = L), (l.value = s.edit);
        },
        C = (L) => {
          (u.value = L), (l.value = s.create);
        };
      return (L, H) => (
        o(),
        n("div", Br, [
          l.value === s.list
            ? (o(),
              n(
                "div",
                { key: 0, class: oe({ "tab-margin": l.value !== s.list }) },
                [
                  c(
                    Ke,
                    {
                      "current-tab": v.value,
                      "tab-options": p,
                      onHandleNavigation: H[0] || (H[0] = (k) => (v.value = k)),
                    },
                    null,
                    8,
                    ["current-tab"]
                  ),
                ],
                2
              ))
            : _("", !0),
          l.value === s.list
            ? (o(),
              n("div", Fr, [
                c(
                  ss,
                  {
                    "current-tab": v.value,
                    "homebrew-list": t.homebrewList,
                    onHandleAddItem: i,
                    onHandleEditItem: $,
                    onHandleCreateWeapon: H[1] || (H[1] = (k) => C(r.weapon)),
                    onHandleCreateAmmunition:
                      H[2] || (H[2] = (k) => C(r.ammunition)),
                    onHandleCreateProtection:
                      H[3] || (H[3] = (k) => C(r.protection)),
                    onHandleCreateMisc: H[4] || (H[4] = (k) => C(r.misc)),
                    onHandleCreateCursedItem:
                      H[5] || (H[5] = (k) => C(r.cursedItem)),
                  },
                  null,
                  8,
                  ["current-tab", "homebrew-list"]
                ),
              ]))
            : _("", !0),
          l.value === s.create
            ? (o(),
              n("div", Or, [
                c(
                  Pr,
                  {
                    "current-create-option": u.value,
                    "homebrew-list": t.homebrewList,
                    onHandleClose: H[6] || (H[6] = (k) => (l.value = s.list)),
                  },
                  null,
                  8,
                  ["current-create-option", "homebrew-list"]
                ),
              ]))
            : _("", !0),
          l.value === s.edit
            ? (o(),
              n("div", zr, [
                h.value
                  ? (o(),
                    n("div", Nr, [
                      c(
                        Sr,
                        {
                          item: h.value,
                          "homebrew-list": t.homebrewList,
                          onHandleClose:
                            H[7] || (H[7] = (k) => (l.value = s.list)),
                        },
                        null,
                        8,
                        ["item", "homebrew-list"]
                      ),
                    ]))
                  : _("", !0),
              ]))
            : _("", !0),
        ])
      );
    },
  }),
  ud = W(jr, [["__scopeId", "data-v-f97ab419"]]);
export {
  $t as A,
  Te as C,
  rd as H,
  Xe as M,
  Tt as P,
  Ct as R,
  ds as S,
  kt as W,
  qe as _,
  dd as a,
  ud as b,
  It as c,
};

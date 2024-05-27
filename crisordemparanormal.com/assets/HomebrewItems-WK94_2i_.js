import {
  d as x,
  o as t,
  c as o,
  a as e,
  C as de,
  t as q,
  p as _e,
  b as fe,
  _ as j,
  O as ne,
  g as ae,
  M as se,
  r as w,
  e as Ne,
  R as N,
  F as G,
  B as J,
  l as K,
  f as R,
  h as Q,
  K as Se,
  k as c,
  m as f,
  n as ue,
  q as Fe,
  D as We,
  P as ke,
  i as ge,
  x as P,
  y as V,
  v as ie,
  J as oe,
  w as ze,
  A as je,
  T as Qe,
  Q as Ge,
  L as Je,
} from "./index-sE6ml22p.js";
import { P as _t } from "./PowerCard-gTEwp1Dh.js";
import { S as pe } from "./SearchInput-_zErXjng.js";
import { L as le } from "./LoadingView-ZyngFh7H.js";
import { H as te, g as Ie, b as Ke } from "./firebase-lKn9MVSr.js";
import {
  p as Ve,
  r as Re,
  w as Me,
  f as De,
  m as xe,
  g as Be,
  e as ft,
} from "./default-tJ6A0c0K.js";
import {
  c as lt,
  d as rt,
  e as dt,
  f as ut,
  g as ct,
  h as mt,
} from "./forms-8DDAOOVU.js";
import { _ as E } from "./lodash-gzw5KmHd.js";
import { T as Xe } from "./ToastNotification-fRZSVqeg.js";
import { R as yt } from "./RitualCard-jh65SH0c.js";
import { T as Oe } from "./TabNav-cxdIuInn.js";
import { D as O } from "./DropdownSimple-sMKo2Ani.js";
import {
  W as $t,
  P as Ct,
  M as kt,
  C as gt,
} from "./CursedItemCard-kPjF_7dN.js";
const It = (a) => (_e("data-v-8b772633"), (a = a()), fe(), a),
  Ht = { class: "delete-container" },
  Lt = { class: "delete-wrapper" },
  Tt = { class: "delete-content" },
  At = It(() =>
    e("h2", null, "Atenção: essa operação é permanente e irreversível!", -1)
  ),
  Ut = { class: "buttons-container" },
  Et = x({
    __name: "ConfirmDelete",
    props: { name: { type: String, required: !0 } },
    emits: ["handleCancel", "handleConfirm"],
    setup(a) {
      return (H, d) => (
        t(),
        o("div", Ht, [
          e("div", Lt, [
            e("div", Tt, [
              e("h1", null, [
                de("Deletar "),
                e("b", null, q(a.name), 1),
                de("?"),
              ]),
              At,
              e("div", Ut, [
                e(
                  "button",
                  {
                    class: "button-remove delete-confirm",
                    onClick: d[0] || (d[0] = (v) => H.$emit("handleConfirm")),
                  },
                  " Confirm "
                ),
                e(
                  "button",
                  {
                    class: "button-primary delete-cancel",
                    onClick: d[1] || (d[1] = (v) => H.$emit("handleCancel")),
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
  we = j(Et, [["__scopeId", "data-v-8b772633"]]),
  Pt = { key: 0 },
  Vt = { key: 0 },
  Rt = { class: "header-container" },
  Mt = { key: 0 },
  Dt = { key: 1 },
  xt = ["disabled"],
  Bt = { key: 0, class: "search-container" },
  qt = { key: 1, class: "class-abilities-content" },
  St = { key: 2 },
  Ot = { key: 0, class: "no-content" },
  Nt = { key: 1, class: "no-content" },
  Ft = { key: 1 },
  Wt = { key: 1 },
  zt = x({
    __name: "ListHomebrewAbilities",
    props: { homebrewList: Boolean },
    emits: ["handleAddPower", "handleEditPower", "handleCreatePower"],
    setup(a, { emit: H }) {
      ne((A) => ({ "5dd66370": h.value }));
      const d = a,
        v = H,
        m = ae(),
        i = se(),
        s = w(!0),
        u = w([]),
        n = w(""),
        r = w(!1),
        l = w(""),
        _ = w(),
        y = w(0),
        k = w(!0),
        p = w(0),
        b = (A) => v("handleAddPower", A),
        L = (A) => v("handleEditPower", A);
      Ne(async () => {
        var $e, Ce, ce, me, ve;
        if (!m.currentUser) return;
        const A = N(i, "homebrewRituals"),
          M = G(
            A,
            J("uid", "==", ($e = m.currentUser) == null ? void 0 : $e.uid)
          ),
          S = await K(M),
          re = N(i, "homebrewItems"),
          I = G(
            re,
            J("uid", "==", (Ce = m.currentUser) == null ? void 0 : Ce.uid)
          ),
          U = await K(I),
          D = N(i, "homebrewCreatures"),
          Z = G(
            D,
            J("uid", "==", (ce = m.currentUser) == null ? void 0 : ce.uid)
          ),
          ee = await K(Z),
          $ = N(i, "homebrewPowers"),
          g = G(
            $,
            J("uid", "==", (me = m.currentUser) == null ? void 0 : me.uid)
          ),
          T = await K(g);
        (y.value =
          U.docs.length + T.docs.length + S.docs.length + ee.docs.length),
          y.value >= te && (k.value = !1);
        const ye = [];
        for (const he of T.docs) {
          const be = he.data();
          (be.id = he.id), ye.push(be);
        }
        (u.value = ye),
          (p.value = await Ie((ve = m.currentUser) == null ? void 0 : ve.uid)),
          (s.value = !1);
      });
      const h = R(() => (d.homebrewList ? "0" : "0.5rem")),
        z = R(() =>
          u.value
            ? u.value
                .filter((A) => Q(A.name, n.value))
                .sort((A, M) => A.name.localeCompare(M.name))
            : []
        ),
        C = (A) => {
          (l.value = A),
            (r.value = !0),
            (_.value = u.value.findIndex((M) => M.id === l.value));
        },
        B = () => {
          (l.value = ""), (r.value = !1), (_.value = void 0);
        },
        Y = () => {
          We(ke(i, "homebrewPowers", l.value)),
            u.value.splice(_.value, 1),
            (l.value = ""),
            (r.value = !1),
            (_.value = void 0),
            y.value--,
            y.value < te ? (k.value = !0) : (k.value = !1);
        };
      return (A, M) =>
        s.value
          ? (t(), o("div", Wt, [c(le)]))
          : (t(),
            o("div", Pt, [
              r.value
                ? (t(),
                  o("div", Ft, [
                    c(
                      we,
                      {
                        name: u.value[_.value].name,
                        onHandleCancel: B,
                        onHandleConfirm: Y,
                      },
                      null,
                      8,
                      ["name"]
                    ),
                  ]))
                : (t(),
                  o("div", Vt, [
                    e("div", Rt, [
                      p.value < 4
                        ? (t(),
                          o(
                            "h3",
                            Mt,
                            " Homebrew " + q(y.value) + "/" + q(Se(te)),
                            1
                          ))
                        : (t(), o("h3", Dt, " Homebrew " + q(y.value), 1)),
                      e(
                        "button",
                        {
                          class: "button-primary new-button",
                          disabled: !k.value && p.value < 4,
                          onClick:
                            M[0] ||
                            (M[0] = (S) => A.$emit("handleCreatePower")),
                        },
                        " Add New ",
                        8,
                        xt
                      ),
                    ]),
                    u.value.length > 0
                      ? (t(),
                        o("div", Bt, [
                          c(
                            pe,
                            {
                              value: n.value,
                              dark: !a.homebrewList,
                              onUpdate: M[1] || (M[1] = (S) => (n.value = S)),
                            },
                            null,
                            8,
                            ["value", "dark"]
                          ),
                        ]))
                      : f("", !0),
                    z.value.length > 0
                      ? (t(),
                        o("div", qt, [
                          (t(!0),
                          o(
                            ue,
                            null,
                            Fe(
                              z.value,
                              (S) => (
                                t(),
                                o(
                                  "div",
                                  { key: S.id, class: "class-abilitie-card" },
                                  [
                                    c(
                                      _t,
                                      {
                                        id: S.id,
                                        power: S,
                                        sheet: "",
                                        homebrew: "",
                                        "homebrew-list": a.homebrewList,
                                        onHandleRemove: C,
                                        onHandleAdd: b,
                                        onHandleEdit: L,
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
                      : (t(),
                        o("div", St, [
                          u.value.length > 0
                            ? (t(),
                              o("div", Ot, " No ability found "))
                            : (t(),
                              o(
                                "div",
                                Nt,
                                " You have yet to create an ability "
                              )),
                        ])),
                  ])),
            ]));
    },
  }),
  jt = j(zt, [["__scopeId", "data-v-f8e94722"]]),
  Ye = (a) => (_e("data-v-f66e4bac"), (a = a()), fe(), a),
  Qt = { class: "input-container" },
  Gt = Ye(() => e("div", { class: "label" }, " Nome* ", -1)),
  Jt = Ye(() =>
    e(
      "div",
      { class: "label" },
      [
        de(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Kt = Ye(() =>
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
  Xt = { class: "buttons-container" },
  Yt = { key: 0 },
  Zt = ["disabled"],
  eo = { key: 1 },
  to = ["disabled"],
  oo = x({
    __name: "AbilitiesForm",
    props: {
      power: { type: Object, default: Ve },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreatePower", "handleClose", "handleEditPower"],
    setup(a, { emit: H }) {
      ne((_) => ({ "770e8210": s.value, "0ad86848": u.value }));
      const d = a,
        v = H,
        m = w(E.clone(d.power)),
        i = R(() => !(m.value.name !== "" && m.value.description !== "")),
        s = R(() => (d.edit && d.sheet ? "31.5rem" : (d.edit, "28.5rem"))),
        u = R(() => (d.homebrewList ? "1rem" : "0")),
        n = () => {
          (m.value = E.clone(Ve)), v("handleClose");
        },
        r = () => {
          i.value ||
            (lt(m.value),
            v("handleCreatePower", m.value),
            (m.value = E.clone(Ve)));
        },
        l = () => {
          if (i.value) return;
          lt(m.value);
          const _ = { power: m.value, sheet: d.sheet };
          v("handleEditPower", _), (m.value = E.clone(Ve));
        };
      return (_, y) => {
        const k = ge("p-editor");
        return (
          t(),
          o(
            "div",
            {
              class: oe([
                "form-container",
                { "homebrew-margin-bottom": a.homebrewList },
              ]),
            },
            [
              e("div", null, [
                e("div", Qt, [
                  Gt,
                  P(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          y[0] || (y[0] = (p) => (m.value.name = p)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[V, m.value.name]]
                  ),
                ]),
                Jt,
                c(
                  k,
                  {
                    modelValue: m.value.description,
                    "onUpdate:modelValue":
                      y[1] || (y[1] = (p) => (m.value.description = p)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: ie(() => [Kt]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e("div", Xt, [
                e(
                  "button",
                  { class: "button-cancel", onClick: n },
                  " Cancel "
                ),
                a.edit
                  ? (t(),
                    o("div", Yt, [
                      e(
                        "button",
                        {
                          class: "button-primary big",
                          disabled: i.value,
                          onClick: l,
                        },
                        q(d.addMode ? "Add" : "Edit"),
                        9,
                        Zt
                      ),
                    ]))
                  : (t(),
                    o("div", eo, [
                      e(
                        "button",
                        {
                          class: "button-primary big",
                          disabled: i.value,
                          onClick: r,
                        },
                        " Add New ",
                        8,
                        to
                      ),
                    ])),
              ]),
            ],
            2
          )
        );
      };
    },
  }),
  vt = j(oo, [["__scopeId", "data-v-f66e4bac"]]),
  no = { key: 0 },
  ao = { key: 1 },
  so = x({
    __name: "CreateHomebrewAbilities",
    props: { homebrewList: Boolean },
    emits: ["handleClose"],
    setup(a, { emit: H }) {
      const d = H,
        v = ae(),
        m = se(),
        i = w(!1),
        s = w({ message: "", type: "error", alive: !1, timeout: 0 }),
        u = async (r) => {
          var _;
          if (!v.currentUser) return;
          if (
            ((i.value = !0),
            (await Ie((_ = v.currentUser) == null ? void 0 : _.uid)) < 4 &&
              !(await Ke(v.currentUser.uid)))
          ) {
            (i.value = !1),
              (s.value.message = "Homebrew limit reached"),
              (s.value.alive = !0);
            return;
          }
          (r.uid = v.currentUser.uid),
            await Ge(N(m, "homebrewPowers"), r),
            (i.value = !1),
            d("handleClose");
        };
      ze(
        () => s.value.alive,
        () => {
          s.value.alive === !0 &&
            (s.value.timeout = window.setTimeout(
              () => (s.value.alive = !1),
              3e3
            ));
        }
      );
      const n = () => {
        (s.value.alive = !1), clearTimeout(s.value.timeout);
      };
      return (r, l) =>
        i.value
          ? (t(), o("div", ao, [c(le)]))
          : (t(),
            o("div", no, [
              c(
                vt,
                {
                  "homebrew-list": a.homebrewList,
                  onHandleCreatePower: u,
                  onHandleClose: l[0] || (l[0] = (_) => r.$emit("handleClose")),
                },
                null,
                8,
                ["homebrew-list"]
              ),
              c(
                Qe,
                { name: "toast" },
                {
                  default: ie(() => [
                    s.value.alive
                      ? (t(),
                        je(
                          Xe,
                          {
                            key: 0,
                            toast: s.value,
                            type: s.value.type,
                            onDismiss: n,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : f("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  io = { key: 0 },
  lo = { key: 1 },
  ro = x({
    __name: "EditHomebrewAbilities",
    props: { power: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditPowerSheet"],
    setup(a, { emit: H }) {
      const d = H,
        v = ae(),
        m = se(),
        i = w(!1),
        s = async (u) => {
          if (v.currentUser) {
            if (((i.value = !0), u.sheet)) {
              d("handleEditPowerSheet", u.power);
              return;
            }
            await Je(ke(m, "homebrewPowers", u.power.id), u.power),
              (i.value = !1),
              d("handleClose");
          }
        };
      return (u, n) =>
        i.value
          ? (t(), o("div", lo, [c(le)]))
          : (t(),
            o("div", io, [
              c(
                vt,
                {
                  power: u.power,
                  edit: "",
                  "homebrew-list": u.homebrewList,
                  onHandleEditPower: s,
                  onHandleClose: n[0] || (n[0] = (r) => u.$emit("handleClose")),
                },
                null,
                8,
                ["power", "homebrew-list"]
              ),
            ]));
    },
  }),
  uo = { class: "class-abilities-container" },
  co = { key: 0 },
  mo = { key: 1 },
  vo = { key: 2 },
  ho = { key: 0 },
  bo = x({
    __name: "HomebrewAbilities",
    props: { homebrewList: Boolean },
    emits: ["handleAddPower"],
    setup(a, { emit: H }) {
      const d = H,
        v = w(),
        m = w("list"),
        i = { list: "list", create: "create", edit: "edit" },
        s = (n) => d("handleAddPower", n),
        u = (n) => {
          (v.value = n), (m.value = i.edit);
        };
      return (n, r) => (
        t(),
        o("div", uo, [
          m.value === i.list
            ? (t(),
              o("div", co, [
                c(
                  jt,
                  {
                    "homebrew-list": a.homebrewList,
                    onHandleAddPower: s,
                    onHandleEditPower: u,
                    onHandleCreatePower:
                      r[0] || (r[0] = (l) => (m.value = i.create)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : f("", !0),
          m.value === i.create
            ? (t(),
              o("div", mo, [
                c(
                  so,
                  {
                    "homebrew-list": a.homebrewList,
                    onHandleClose: r[1] || (r[1] = (l) => (m.value = i.list)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : f("", !0),
          m.value === i.edit
            ? (t(),
              o("div", vo, [
                v.value
                  ? (t(),
                    o("div", ho, [
                      c(
                        ro,
                        {
                          power: v.value,
                          "homebrew-list": a.homebrewList,
                          onHandleClose:
                            r[2] || (r[2] = (l) => (m.value = i.list)),
                        },
                        null,
                        8,
                        ["power", "homebrew-list"]
                      ),
                    ]))
                  : f("", !0),
              ]))
            : f("", !0),
        ])
      );
    },
  }),
  Fi = j(bo, [["__scopeId", "data-v-cc44a1c3"]]),
  po = { key: 0 },
  wo = { key: 0 },
  _o = { class: "list-ritual-header" },
  fo = { class: "secondary-tab-container" },
  yo = { class: "header-container" },
  $o = { key: 0 },
  Co = { key: 1 },
  ko = ["disabled"],
  go = { key: 0, class: "search-container" },
  Io = { key: 1, class: "class-ritual-content" },
  Ho = { key: 2 },
  Lo = { key: 0, class: "no-content" },
  To = { key: 1, class: "no-content" },
  Ao = { key: 1 },
  Uo = { key: 1 },
  Eo = x({
    __name: "ListHomebrewRituals",
    props: { homebrewList: Boolean },
    emits: ["handleAddRitual", "handleEditRitual", "handleCreateRitual"],
    setup(a, { emit: H }) {
      ne((I) => ({ dc6fc114: Y.value }));
      const d = a,
        v = H,
        m = [
          { label: "All", value: 0 },
          { label: "Knowledge", value: 1 },
          { label: "Energy", value: 2 },
          { label: "Death", value: 3 },
          { label: "Blood", value: 4 },
          { label: "Fear", value: 5 },
          { label: "Varies", value: 6 },
        ],
        i = [
          { label: "All", circle: "-", value: 0 },
          { label: "1º Circle", circle: "1", value: 1 },
          { label: "2º Circle", circle: "2", value: 2 },
          { label: "3º Circle", circle: "3", value: 3 },
          { label: "4º Circle", circle: "4", value: 4 },
        ],
        s = ae(),
        u = se(),
        n = w(!0),
        r = w([]),
        l = w(0),
        _ = w(0),
        y = w(""),
        k = w(!1),
        p = w(""),
        b = w(),
        L = w(0),
        h = w(!0),
        z = w(0),
        C = (I) => v("handleAddRitual", I),
        B = (I) => v("handleEditRitual", I);
      Ne(async () => {
        var ve, he, be, Ae, Ue;
        if (!s.currentUser) return;
        const I = N(u, "homebrewPowers"),
          U = G(
            I,
            J("uid", "==", (ve = s.currentUser) == null ? void 0 : ve.uid)
          ),
          D = await K(U),
          Z = N(u, "homebrewItems"),
          ee = G(
            Z,
            J("uid", "==", (he = s.currentUser) == null ? void 0 : he.uid)
          ),
          $ = await K(ee),
          g = N(u, "homebrewCreatures"),
          T = G(
            g,
            J("uid", "==", (be = s.currentUser) == null ? void 0 : be.uid)
          ),
          ye = await K(T),
          $e = N(u, "homebrewRituals"),
          Ce = G(
            $e,
            J("uid", "==", (Ae = s.currentUser) == null ? void 0 : Ae.uid)
          ),
          ce = await K(Ce);
        (L.value =
          $.docs.length + D.docs.length + ce.docs.length + ye.docs.length),
          L.value >= te && (h.value = !1);
        const me = [];
        for (const Ee of ce.docs) {
          const Pe = Ee.data();
          (Pe.id = Ee.id), me.push(Pe);
        }
        (r.value = me),
          (z.value = await Ie((Ue = s.currentUser) == null ? void 0 : Ue.uid)),
          (n.value = !1);
      });
      const Y = R(() => (d.homebrewList ? "0" : "0.5rem")),
        A = R(() =>
          l.value === 0
            ? _.value === 0
              ? r.value
                  .filter((I) => Q(I.name, y.value))
                  .sort((I, U) => I.name.localeCompare(U.name))
              : r.value
                  .filter((I) => I.circle === i[_.value].circle)
                  .filter((I) => Q(I.name, y.value))
                  .sort((I, U) => I.name.localeCompare(U.name))
            : _.value === 0
            ? l.value === 0
              ? r.value
                  .filter((I) => Q(I.name, y.value))
                  .sort((I, U) => I.name.localeCompare(U.name))
              : r.value
                  .filter((I) => I.element === m[l.value].label)
                  .filter((I) => Q(I.name, y.value))
                  .sort((I, U) => I.name.localeCompare(U.name))
            : r.value
                .filter((I) => I.element === m[l.value].label)
                .filter((I) => Q(I.name, y.value))
                .filter((I) => I.circle === i[_.value].circle)
                .filter((I) => Q(I.name, y.value))
        ),
        M = (I) => {
          (p.value = I),
            (k.value = !0),
            (b.value = r.value.findIndex((U) => U.id === p.value));
        },
        S = () => {
          (p.value = ""), (k.value = !1), (b.value = void 0);
        },
        re = () => {
          We(ke(u, "homebrewRituals", p.value)),
            r.value.splice(b.value, 1),
            (p.value = ""),
            (k.value = !1),
            (b.value = void 0),
            L.value--,
            L.value < te ? (h.value = !0) : (h.value = !1);
        };
      return (I, U) =>
        n.value
          ? (t(), o("div", Uo, [c(le)]))
          : (t(),
            o("div", po, [
              k.value
                ? (t(),
                  o("div", Ao, [
                    c(
                      we,
                      {
                        name: r.value[b.value].name,
                        onHandleCancel: S,
                        onHandleConfirm: re,
                      },
                      null,
                      8,
                      ["name"]
                    ),
                  ]))
                : (t(),
                  o("div", wo, [
                    e("div", _o, [
                      e("div", null, [
                        c(
                          Oe,
                          {
                            "current-tab": l.value,
                            "tab-options": m,
                            onHandleNavigation:
                              U[0] || (U[0] = (D) => (l.value = D)),
                          },
                          null,
                          8,
                          ["current-tab"]
                        ),
                        e("div", fo, [
                          c(
                            Oe,
                            {
                              "current-tab": _.value,
                              "tab-options": i,
                              "invert-background-color": a.homebrewList,
                              secondary: "",
                              onHandleNavigation:
                                U[1] || (U[1] = (D) => (_.value = D)),
                            },
                            null,
                            8,
                            ["current-tab", "invert-background-color"]
                          ),
                        ]),
                      ]),
                    ]),
                    e("div", yo, [
                      z.value < 4
                        ? (t(),
                          o(
                            "h3",
                            $o,
                            " Homebrew " + q(L.value) + "/" + q(Se(te)),
                            1
                          ))
                        : (t(), o("h3", Co, " Homebrew " + q(L.value), 1)),
                      e(
                        "button",
                        {
                          class: "button-primary new-button",
                          disabled: !h.value && z.value < 4,
                          onClick:
                            U[2] ||
                            (U[2] = (D) => I.$emit("handleCreateRitual")),
                        },
                        " Add New ",
                        8,
                        ko
                      ),
                    ]),
                    r.value.length > 0
                      ? (t(),
                        o("div", go, [
                          c(
                            pe,
                            {
                              value: y.value,
                              dark: !a.homebrewList,
                              onUpdate: U[3] || (U[3] = (D) => (y.value = D)),
                            },
                            null,
                            8,
                            ["value", "dark"]
                          ),
                        ]))
                      : f("", !0),
                    A.value.length > 0
                      ? (t(),
                        o("div", Io, [
                          (t(!0),
                          o(
                            ue,
                            null,
                            Fe(
                              A.value,
                              (D) => (
                                t(),
                                o(
                                  "div",
                                  { key: D.id, class: "class-ritual-card" },
                                  [
                                    c(
                                      yt,
                                      {
                                        id: D.id,
                                        ritual: D,
                                        sheet: "",
                                        homebrew: "",
                                        "homebrew-list": a.homebrewList,
                                        onHandleRemove: M,
                                        onHandleAdd: C,
                                        onHandleEdit: B,
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
                      : (t(),
                        o("div", Ho, [
                          r.value.length > 0
                            ? (t(), o("div", Lo, " No ritual found "))
                            : (t(),
                              o(
                                "div",
                                To,
                                " You have yet to create a ritual "
                              )),
                        ])),
                  ])),
            ]));
    },
  }),
  Po = j(Eo, [["__scopeId", "data-v-5e22dea3"]]),
  F = (a) => (_e("data-v-21a2e22d"), (a = a()), fe(), a),
  Vo = { class: "input-container" },
  Ro = F(() => e("div", { class: "label" }, " Name* ", -1)),
  Mo = { class: "input-row" },
  Do = { class: "input-container" },
  xo = F(() => e("div", { class: "label" }, " Element ", -1)),
  Bo = { class: "input-container" },
  qo = F(() => e("div", { class: "label" }, " Circle ", -1)),
  So = { class: "input-container" },
  Oo = F(() => e("div", { class: "label" }, " Cast Time ", -1)),
  No = { class: "input-container" },
  Fo = F(() => e("div", { class: "label" }, " Range ", -1)),
  Wo = { class: "input-row" },
  zo = { class: "input-container" },
  jo = F(() => e("div", { class: "label" }, " Area ", -1)),
  Qo = { class: "input-container" },
  Go = F(() => e("div", { class: "label" }, " Target ", -1)),
  Jo = { class: "input-container" },
  Ko = F(() => e("div", { class: "label" }, " Duration ", -1)),
  Xo = { class: "input-row" },
  Yo = { class: "input-container" },
  Zo = F(() => e("div", { class: "label" }, " Effect ", -1)),
  en = { class: "input-container" },
  tn = F(() => e("div", { class: "label" }, " Saving Throw ", -1)),
  on = { class: "input-row" },
  nn = { class: "input-container" },
  an = F(() => e("div", { class: "label" }, " Dice ", -1)),
  sn = { class: "input-container" },
  ln = F(() => e("div", { class: "label" }, " Dice Advanced ", -1)),
  rn = { class: "input-container" },
  dn = F(() => e("div", { class: "label" }, " Dice True ", -1)),
  un = F(() =>
    e(
      "div",
      { class: "label" },
      [
        de(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  cn = F(() =>
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
  mn = { key: 0 },
  vn = ["disabled"],
  hn = { key: 1 },
  bn = ["disabled"],
  pn = x({
    __name: "RitualsForm",
    props: {
      ritual: { type: Object, default: Re },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreateRitual", "handleClose", "handleEditRitual"],
    setup(a, { emit: H }) {
      ne((p) => ({ bde1e660: l.value }));
      const d = a,
        v = H,
        m = ["1", "2", "3", "4"],
        i = ["Knowledge", "Energy", "Fear", "Death", "Blood", "Varies"],
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
        n = w(E.clone(d.ritual)),
        r = R(() => !(n.value.name !== "" && n.value.description !== "")),
        l = R(() =>
          d.edit && d.sheet
            ? "28.5rem"
            : d.homebrewList
            ? "39rem"
            : d.edit
            ? "28.75rem"
            : "25.75rem"
        ),
        _ = () => {
          (n.value = E.clone(Re)), v("handleClose");
        },
        y = () => {
          r.value ||
            (rt(n.value),
            v("handleCreateRitual", n.value),
            (n.value = E.clone(Re)));
        },
        k = () => {
          if (r.value) return;
          rt(n.value);
          const p = { ritual: n.value, sheet: d.sheet };
          v("handleEditRitual", p), (n.value = E.clone(Re));
        };
      return (p, b) => {
        const L = ge("p-editor");
        return (
          t(),
          o(
            ue,
            null,
            [
              e(
                "div",
                {
                  class: oe([
                    "form-container",
                    { "form-homebrew-padding": a.homebrewList },
                  ]),
                },
                [
                  e("div", Vo, [
                    Ro,
                    P(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            b[0] || (b[0] = (h) => (n.value.name = h)),
                          type: "text",
                          class: "input-primary dark big-input",
                        },
                        null,
                        512
                      ),
                      [[V, n.value.name]]
                    ),
                  ]),
                  e("div", Mo, [
                  e("div", Do, [
                      xo,
                      c(
                        O,
                        {
                          value: n.value.element,
                          options: i,
                          width: "7.75rem",
                          "content-width": "7.75rem",
                          "form-input": "",
                          onUpdateValue:
                            b[1] || (b[1] = (h) => (n.value.element = h)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", Bo, [
                      qo,
                      c(
                        O,
                        {
                          value: n.value.circle,
                          options: m,
                          width: "2.75rem",
                          "content-width": "2.75rem",
                          "form-input": "",
                          "small-input": "",
                          onUpdateValue:
                            b[2] || (b[2] = (h) => (n.value.circle = h)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", So, [
                      Oo,
                      c(
                        O,
                        {
                          value: n.value.execution,
                          options: s,
                          width: "12rem",
                          "content-width": "12rem",
                          "form-input": "",
                          onUpdateValue:
                            b[3] || (b[3] = (h) => (n.value.execution = h)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", No, [
                      Fo,
                      c(
                        O,
                        {
                          value: n.value.range,
                          options: u,
                          width: "12rem",
                          "content-width": "12rem",
                          "form-input": "",
                          onUpdateValue:
                            b[4] || (b[4] = (h) => (n.value.range = h)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                  ]),
                  e("div", Wo, [
                    e("div", zo, [
                      jo,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[5] || (b[5] = (h) => (n.value.area = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.area]]
                      ),
                    ]),
                    e("div", Qo, [
                      Go,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[6] || (b[6] = (h) => (n.value.target = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.target]]
                      ),
                    ]),
                    e("div", Jo, [
                      Ko,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[7] || (b[7] = (h) => (n.value.duration = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.duration]]
                      ),
                    ]),
                  ]),
                  e("div", Xo, [
                    e("div", Yo, [
                      Zo,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[8] || (b[8] = (h) => (n.value.effect = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.effect]]
                      ),
                    ]),
                    e("div", en, [
                      tn,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[9] || (b[9] = (h) => (n.value.save = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.save]]
                      ),
                    ]),
                  ]),
                  e("div", on, [
                    e("div", nn, [
                      an,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[10] ||
                              (b[10] = (h) => (n.value.normalDice = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.normalDice]]
                      ),
                    ]),
                    e("div", sn, [
                      ln,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[11] ||
                              (b[11] = (h) => (n.value.discenteDice = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.discenteDice]]
                      ),
                    ]),
                    e("div", rn, [
                      dn,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              b[12] ||
                              (b[12] = (h) => (n.value.verdadeiroDice = h)),
                            type: "text",
                            class: "input-primary dark",
                          },
                          null,
                          512
                        ),
                        [[V, n.value.verdadeiroDice]]
                      ),
                    ]),
                  ]),
                  un,
                  c(
                    L,
                    {
                      modelValue: n.value.description,
                      "onUpdate:modelValue":
                        b[13] || (b[13] = (h) => (n.value.description = h)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: ie(() => [cn]), _: 1 },
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
                    { "homebrew-background": a.homebrewList },
                  ]),
                },
                [
                  e(
                    "button",
                    { class: "button-cancel", onClick: _ },
                    " Cancel "
                  ),
                  a.edit
                    ? (t(),
                      o("div", mn, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: r.value,
                            onClick: k,
                          },
                          q(d.addMode ? "Add" : "Edit"),
                          9,
                          vn
                        ),
                      ]))
                    : (t(),
                      o("div", hn, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: r.value,
                            onClick: y,
                          },
                          " Add New ",
                          8,
                          bn
                        ),
                      ])),
                ],
                2
              ),
            ],
            64
          )
        );
      };
    },
  }),
  ht = j(pn, [["__scopeId", "data-v-21a2e22d"]]),
  wn = { key: 0 },
  _n = { key: 1 },
  fn = x({
    __name: "CreateHomebrewRituals",
    props: { homebrewList: Boolean },
    emits: ["handleClose"],
    setup(a, { emit: H }) {
      const d = H,
        v = ae(),
        m = se(),
        i = w(!1),
        s = w({ message: "", type: "error", alive: !1, timeout: 0 }),
        u = async (r) => {
          var _;
          if (!v.currentUser) return;
          if (
            ((i.value = !0),
            (await Ie((_ = v.currentUser) == null ? void 0 : _.uid)) < 4 &&
              !(await Ke(v.currentUser.uid)))
          ) {
            (i.value = !1),
              (s.value.message = "Homebrew limit reached"),
              (s.value.alive = !0);
            return;
          }
          (r.uid = v.currentUser.uid),
            await Ge(N(m, "homebrewRituals"), r),
            (i.value = !1),
            d("handleClose");
        };
      ze(
        () => s.value.alive,
        () => {
          s.value.alive === !0 &&
            (s.value.timeout = window.setTimeout(
              () => (s.value.alive = !1),
              3e3
            ));
        }
      );
      const n = () => {
        (s.value.alive = !1), clearTimeout(s.value.timeout);
      };
      return (r, l) =>
        i.value
          ? (t(), o("div", _n, [c(le)]))
          : (t(),
            o("div", wn, [
              c(
                ht,
                {
                  "homebrew-list": a.homebrewList,
                  onHandleCreateRitual: u,
                  onHandleClose: l[0] || (l[0] = (_) => r.$emit("handleClose")),
                },
                null,
                8,
                ["homebrew-list"]
              ),
              c(
                Qe,
                { name: "toast" },
                {
                  default: ie(() => [
                    s.value.alive
                      ? (t(),
                        je(
                          Xe,
                          {
                            key: 0,
                            toast: s.value,
                            type: s.value.type,
                            onDismiss: n,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : f("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  yn = { key: 0 },
  $n = { key: 1 },
  Cn = x({
    __name: "EditHomebrewRituals",
    props: { ritual: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditRitualSheet"],
    setup(a, { emit: H }) {
      const d = H,
        v = ae(),
        m = se(),
        i = w(!1),
        s = async (u) => {
          if (v.currentUser) {
            if (((i.value = !0), u.sheet)) {
              d("handleEditRitualSheet", u.ritual);
              return;
            }
            await Je(ke(m, "homebrewRituals", u.ritual.id), u.ritual),
              (i.value = !1),
              d("handleClose");
          }
        };
      return (u, n) =>
        i.value
          ? (t(), o("div", $n, [c(le)]))
          : (t(),
            o("div", yn, [
              c(
                ht,
                {
                  ritual: u.ritual,
                  edit: "",
                  "homebrew-list": u.homebrewList,
                  onHandleEditRitual: s,
                  onHandleClose: n[0] || (n[0] = (r) => u.$emit("handleClose")),
                },
                null,
                8,
                ["ritual", "homebrew-list"]
              ),
            ]));
    },
  }),
  kn = { class: "class-abilities-container" },
  gn = { key: 0 },
  In = { key: 1 },
  Hn = { key: 2 },
  Ln = { key: 0 },
  Tn = x({
    __name: "HomebrewRituals",
    props: { homebrewList: Boolean },
    emits: ["handleAddRitual"],
    setup(a, { emit: H }) {
      const d = H,
        v = w(),
        m = w("list"),
        i = { list: "list", create: "create", edit: "edit" },
        s = (n) => d("handleAddRitual", n),
        u = (n) => {
          (v.value = n), (m.value = i.edit);
        };
      return (n, r) => (
        t(),
        o("div", kn, [
          m.value === i.list
            ? (t(),
              o("div", gn, [
                c(
                  Po,
                  {
                    "homebrew-list": a.homebrewList,
                    onHandleCreateRitual:
                      r[0] || (r[0] = (l) => (m.value = i.create)),
                    onHandleAddRitual: s,
                    onHandleEditRitual: u,
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : f("", !0),
          m.value === i.create
            ? (t(),
              o("div", In, [
                c(
                  fn,
                  {
                    "homebrew-list": a.homebrewList,
                    onHandleClose: r[1] || (r[1] = (l) => (m.value = i.list)),
                  },
                  null,
                  8,
                  ["homebrew-list"]
                ),
              ]))
            : f("", !0),
          m.value === i.edit
            ? (t(),
              o("div", Hn, [
                v.value
                  ? (t(),
                    o("div", Ln, [
                      c(
                        Cn,
                        {
                          ritual: v.value,
                          "homebrew-list": a.homebrewList,
                          onHandleClose:
                            r[2] || (r[2] = (l) => (m.value = i.list)),
                        },
                        null,
                        8,
                        ["ritual", "homebrew-list"]
                      ),
                    ]))
                  : f("", !0),
              ]))
            : f("", !0),
        ])
      );
    },
  }),
  Wi = j(Tn, [["__scopeId", "data-v-f408fc45"]]),
  An = { key: 0 },
  Un = { key: 0 },
  En = { class: "header-container" },
  Pn = { key: 0 },
  Vn = { key: 1 },
  Rn = { key: 2 },
  Mn = ["disabled"],
  Dn = { key: 3 },
  xn = ["disabled"],
  Bn = { key: 4 },
  qn = ["disabled"],
  Sn = { key: 5 },
  On = ["disabled"],
  Nn = { key: 6 },
  Fn = ["disabled"],
  Wn = { key: 0 },
  zn = { key: 0, class: "search-container" },
  jn = { key: 1 },
  Qn = { key: 0, class: "search-container" },
  Gn = { key: 2 },
  Jn = { key: 0, class: "search-container" },
  Kn = { key: 3 },
  Xn = { key: 0, class: "search-container" },
  Yn = { key: 4 },
  Zn = { key: 0, class: "search-container" },
  ea = { key: 5, class: "class-abilities-content" },
  ta = { key: 0 },
  oa = { key: 1 },
  na = { key: 2 },
  aa = { key: 3 },
  sa = { key: 6 },
  ia = { key: 0 },
  la = { key: 0, class: "no-content" },
  ra = { key: 1, class: "no-content" },
  da = { key: 1 },
  ua = { key: 0, class: "no-content" },
  ca = { key: 1, class: "no-content" },
  ma = { key: 2 },
  va = { key: 0, class: "no-content" },
  ha = { key: 1, class: "no-content" },
  ba = { key: 3 },
  pa = { key: 0, class: "no-content" },
  wa = { key: 1, class: "no-content" },
  _a = { key: 4 },
  fa = { key: 0, class: "no-content" },
  ya = { key: 1, class: "no-content" },
  $a = { key: 1 },
  Ca = { key: 0 },
  ka = { key: 1 },
  ga = { key: 2 },
  Ia = { key: 3 },
  Ha = { key: 4 },
  La = { key: 1 },
  Ta = x({
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
    setup(a, { emit: H }) {
      ne(($) => ({ "329b7646": I.value }));
      const d = a,
        v = H,
        m = ae(),
        i = se(),
        s = w(!0),
        u = w([]),
        n = w([]),
        r = w([]),
        l = w([]),
        _ = w([]),
        y = w(""),
        k = w(""),
        p = w(""),
        b = w(""),
        L = w(""),
        h = w(!1),
        z = w(""),
        C = w(),
        B = w(""),
        Y = w(0),
        A = w(!0),
        M = w(0),
        S = ($) => v("handleAddItem", $),
        re = ($) => v("handleEditItem", $);
      Ne(async () => {
        var tt, ot, nt, at, st;
        if (!m.currentUser) return;
        const $ = N(i, "homebrewPowers"),
          g = G(
            $,
            J("uid", "==", (tt = m.currentUser) == null ? void 0 : tt.uid)
          ),
          T = await K(g),
          ye = N(i, "homebrewRituals"),
          $e = G(
            ye,
            J("uid", "==", (ot = m.currentUser) == null ? void 0 : ot.uid)
          ),
          Ce = await K($e),
          ce = N(i, "homebrewCreatures"),
          me = G(
            ce,
            J("uid", "==", (nt = m.currentUser) == null ? void 0 : nt.uid)
          ),
          ve = await K(me),
          he = N(i, "homebrewItems"),
          be = G(
            he,
            J("uid", "==", (at = m.currentUser) == null ? void 0 : at.uid)
          ),
          Ae = await K(be);
        (Y.value =
          Ae.docs.length + T.docs.length + Ce.docs.length + ve.docs.length),
          Y.value >= te && (A.value = !1);
        const Ue = [],
          Ee = [],
          Pe = [],
          Ze = [],
          et = [];
        for (const it of Ae.docs) {
          const X = it.data();
          (X.id = it.id),
            X.itemType === "weapon" && Ue.push(X),
            X.itemType === "ammunition" && Ee.push(X),
            X.itemType === "protection" && Pe.push(X),
            X.itemType === "misc" && Ze.push(X),
            X.itemType === "cursedItem" && et.push(X);
        }
        (u.value = Ue),
          (n.value = Ee),
          (r.value = Pe),
          (l.value = Ze),
          (_.value = et),
          (M.value = await Ie((st = m.currentUser) == null ? void 0 : st.uid)),
          (s.value = !1);
      });
      const I = R(() => (d.homebrewList ? "0" : "0.5rem")),
        U = R(() =>
          d.currentTab === 0
            ? u.value
                .filter(($) => Q($.name, y.value))
                .sort(($, g) => $.name.localeCompare(g.name))
            : d.currentTab === 1
            ? n.value
                .filter(($) => Q($.name, k.value))
                .sort(($, g) => $.name.localeCompare(g.name))
            : d.currentTab === 2
            ? r.value
                .filter(($) => Q($.name, p.value))
                .sort(($, g) => $.name.localeCompare(g.name))
            : d.currentTab === 3
            ? l.value
                .filter(($) => Q($.name, b.value))
                .sort(($, g) => $.name.localeCompare(g.name))
            : d.currentTab === 4
            ? _.value
                .filter(($) => Q($.name, L.value))
                .sort(($, g) => $.name.localeCompare(g.name))
            : []
        ),
        D = ($) => {
          (z.value = $.id),
            (h.value = !0),
            (B.value = $.itemType),
            $.itemType === "weapon" &&
              (C.value = u.value.findIndex((g) => g.id === $.id)),
            $.itemType === "ammunition" &&
              (C.value = n.value.findIndex((g) => g.id === $.id)),
            $.itemType === "protection" &&
              (C.value = r.value.findIndex((g) => g.id === $.id)),
            $.itemType === "misc" &&
              (C.value = l.value.findIndex((g) => g.id === $.id)),
            $.itemType === "cursedItem" &&
              (C.value = _.value.findIndex((g) => g.id === $.id));
        },
        Z = () => {
          (z.value = ""), (h.value = !1), (C.value = void 0), (B.value = "");
        },
        ee = () => {
          We(ke(i, "homebrewItems", z.value)),
            B.value === "weapon" && u.value.splice(C.value, 1),
            B.value === "ammunition" && n.value.splice(C.value, 1),
            B.value === "protection" && r.value.splice(C.value, 1),
            B.value === "misc" && l.value.splice(C.value, 1),
            B.value === "cursedItem" && _.value.splice(C.value, 1),
            (z.value = ""),
            (h.value = !1),
            (C.value = void 0),
            (B.value = ""),
            Y.value--,
            Y.value < te ? (A.value = !0) : (A.value = !1);
        };
      return ($, g) =>
        s.value
          ? (t(), o("div", La, [c(le)]))
          : (t(),
            o("div", An, [
              h.value
                ? (t(),
                  o("div", $a, [
                    B.value === "weapon"
                      ? (t(),
                        o("div", Ca, [
                          c(
                            we,
                            {
                              name: u.value[C.value].name,
                              onHandleCancel: Z,
                              onHandleConfirm: ee,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : f("", !0),
                    B.value === "ammunition"
                      ? (t(),
                        o("div", ka, [
                          c(
                            we,
                            {
                              name: n.value[C.value].name,
                              onHandleCancel: Z,
                              onHandleConfirm: ee,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : f("", !0),
                    B.value === "protection"
                      ? (t(),
                        o("div", ga, [
                          c(
                            we,
                            {
                              name: r.value[C.value].name,
                              onHandleCancel: Z,
                              onHandleConfirm: ee,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : f("", !0),
                    B.value === "misc"
                      ? (t(),
                        o("div", Ia, [
                          c(
                            we,
                            {
                              name: l.value[C.value].name,
                              onHandleCancel: Z,
                              onHandleConfirm: ee,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : f("", !0),
                    B.value === "cursedItem"
                      ? (t(),
                        o("div", Ha, [
                          c(
                            we,
                            {
                              name: _.value[C.value].name,
                              onHandleCancel: Z,
                              onHandleConfirm: ee,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                        ]))
                      : f("", !0),
                  ]))
                : (t(),
                  o("div", Un, [
                    e("div", En, [
                      M.value < 4
                        ? (t(),
                          o(
                            "h3",
                            Pn,
                            " Homebrew " + q(Y.value) + "/" + q(Se(te)),
                            1
                          ))
                        : (t(), o("h3", Vn, " Homebrew " + q(Y.value), 1)),
                      a.currentTab === 0
                        ? (t(),
                          o("div", Rn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !A.value && M.value < 4,
                                onClick:
                                  g[0] ||
                                  (g[0] = (T) => $.$emit("handleCreateWeapon")),
                              },
                              " Add Weapon ",
                              8,
                              Mn
                            ),
                          ]))
                        : f("", !0),
                      a.currentTab === 1
                        ? (t(),
                          o("div", Dn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !A.value && M.value < 4,
                                onClick:
                                  g[1] ||
                                  (g[1] = (T) =>
                                    $.$emit("handleCreateAmmunition")),
                              },
                              " Add Ammo ",
                              8,
                              xn
                            ),
                          ]))
                        : f("", !0),
                      a.currentTab === 2
                        ? (t(),
                          o("div", Bn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !A.value && M.value < 4,
                                onClick:
                                  g[2] ||
                                  (g[2] = (T) =>
                                    $.$emit("handleCreateProtection")),
                              },
                              " Add Armor ",
                              8,
                              qn
                            ),
                          ]))
                        : f("", !0),
                      a.currentTab === 3
                        ? (t(),
                          o("div", Sn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !A.value && M.value < 4,
                                onClick:
                                  g[3] ||
                                  (g[3] = (T) => $.$emit("handleCreateMisc")),
                              },
                              " Add General Item ",
                              8,
                              On
                            ),
                          ]))
                        : f("", !0),
                      a.currentTab === 4
                        ? (t(),
                          o("div", Nn, [
                            e(
                              "button",
                              {
                                class: "button-primary new-button",
                                disabled: !A.value && M.value < 4,
                                onClick:
                                  g[4] ||
                                  (g[4] = (T) =>
                                    $.$emit("handleCreateCursedItem")),
                              },
                              " Add Cursed Item ",
                              8,
                              Fn
                            ),
                          ]))
                        : f("", !0),
                    ]),
                    u.value.length > 0
                      ? (t(),
                        o("div", Wn, [
                          a.currentTab === 0
                            ? (t(),
                              o("div", zn, [
                                c(
                                  pe,
                                  {
                                    value: y.value,
                                    dark: !a.homebrewList,
                                    onUpdate:
                                      g[5] || (g[5] = (T) => (y.value = T)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : f("", !0),
                        ]))
                      : f("", !0),
                    n.value.length > 0
                      ? (t(),
                        o("div", jn, [
                          a.currentTab === 1
                            ? (t(),
                              o("div", Qn, [
                                c(
                                  pe,
                                  {
                                    value: k.value,
                                    dark: !a.homebrewList,
                                    onUpdate:
                                      g[6] || (g[6] = (T) => (k.value = T)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : f("", !0),
                        ]))
                      : f("", !0),
                    r.value.length > 0
                      ? (t(),
                        o("div", Gn, [
                          a.currentTab === 2
                            ? (t(),
                              o("div", Jn, [
                                c(
                                  pe,
                                  {
                                    value: p.value,
                                    dark: !a.homebrewList,
                                    onUpdate:
                                      g[7] || (g[7] = (T) => (p.value = T)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : f("", !0),
                        ]))
                      : f("", !0),
                    l.value.length > 0
                      ? (t(),
                        o("div", Kn, [
                          a.currentTab === 3
                            ? (t(),
                              o("div", Xn, [
                                c(
                                  pe,
                                  {
                                    value: b.value,
                                    dark: !a.homebrewList,
                                    onUpdate:
                                      g[8] || (g[8] = (T) => (b.value = T)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : f("", !0),
                        ]))
                      : f("", !0),
                    _.value.length > 0
                      ? (t(),
                        o("div", Yn, [
                          a.currentTab === 4
                            ? (t(),
                              o("div", Zn, [
                                c(
                                  pe,
                                  {
                                    value: L.value,
                                    dark: !a.homebrewList,
                                    onUpdate:
                                      g[9] || (g[9] = (T) => (L.value = T)),
                                  },
                                  null,
                                  8,
                                  ["value", "dark"]
                                ),
                              ]))
                            : f("", !0),
                        ]))
                      : f("", !0),
                    U.value.length > 0
                      ? (t(),
                        o("div", ea, [
                          (t(!0),
                          o(
                            ue,
                            null,
                            Fe(
                              U.value,
                              (T) => (
                                t(),
                                o(
                                  "div",
                                  { key: T.id, class: "class-abilitie-card" },
                                  [
                                    T.itemType === "weapon"
                                      ? (t(),
                                        o("div", ta, [
                                          c(
                                            $t,
                                            {
                                              id: T.id,
                                              weapon: T,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": a.homebrewList,
                                              onHandleRemove: D,
                                              onHandleEdit: re,
                                              onHandleAdd: S,
                                            },
                                            null,
                                            8,
                                            ["id", "weapon", "homebrew-list"]
                                          ),
                                        ]))
                                      : f("", !0),
                                    T.itemType === "protection"
                                      ? (t(),
                                        o("div", oa, [
                                          c(
                                            Ct,
                                            {
                                              id: T.id,
                                              protection: T,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": a.homebrewList,
                                              onHandleRemove: D,
                                              onHandleEdit: re,
                                              onHandleAdd: S,
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
                                      : f("", !0),
                                    T.itemType === "misc" ||
                                    T.itemType === "ammunition"
                                      ? (t(),
                                        o("div", na, [
                                          c(
                                            kt,
                                            {
                                              id: T.id,
                                              misc: T,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": a.homebrewList,
                                              onHandleRemove: D,
                                              onHandleEdit: re,
                                              onHandleAdd: S,
                                            },
                                            null,
                                            8,
                                            ["id", "misc", "homebrew-list"]
                                          ),
                                        ]))
                                      : f("", !0),
                                    T.itemType === "cursedItem"
                                      ? (t(),
                                        o("div", aa, [
                                          c(
                                            gt,
                                            {
                                              id: T.id,
                                              "cursed-item": T,
                                              sheet: "",
                                              homebrew: "",
                                              "homebrew-list": a.homebrewList,
                                              onHandleRemove: D,
                                              onHandleEdit: re,
                                              onHandleAdd: S,
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
                                      : f("", !0),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (t(),
                        o("div", sa, [
                          a.currentTab === 0
                            ? (t(),
                              o("div", ia, [
                                u.value.length > 0
                                  ? (t(),
                                    o("div", la, " No weapon found "))
                                  : (t(),
                                    o(
                                      "div",
                                      ra,
                                      " You have yet to create a weapon "
                                    )),
                              ]))
                            : f("", !0),
                          a.currentTab === 1
                            ? (t(),
                              o("div", da, [
                                n.value.length > 0
                                  ? (t(),
                                    o(
                                      "div",
                                      ua,
                                      " No ammo found "
                                    ))
                                  : (t(),
                                    o(
                                      "div",
                                      ca,
                                      " You have yet to create new ammo "
                                    )),
                              ]))
                            : f("", !0),
                          a.currentTab === 2
                            ? (t(),
                              o("div", ma, [
                                r.value.length > 0
                                  ? (t(),
                                    o(
                                      "div",
                                      va,
                                      " No armor found "
                                    ))
                                  : (t(),
                                    o(
                                      "div",
                                      ha,
                                      " You have yet to create a new armor "
                                    )),
                              ]))
                            : f("", !0),
                          a.currentTab === 3
                            ? (t(),
                              o("div", ba, [
                                l.value.length > 0
                                  ? (t(),
                                    o(
                                      "div",
                                      pa,
                                      " No equipment found "
                                    ))
                                  : (t(),
                                    o(
                                      "div",
                                      wa,
                                      " You have yet to create new equipments "
                                    )),
                              ]))
                            : f("", !0),
                          a.currentTab === 4
                            ? (t(),
                              o("div", _a, [
                                _.value.length > 0
                                  ? (t(),
                                    o(
                                      "div",
                                      fa,
                                      " No cursed item found "
                                    ))
                                  : (t(),
                                    o(
                                      "div",
                                      ya,
                                      " You have yet to create new cursed items "
                                    )),
                              ]))
                            : f("", !0),
                        ])),
                  ])),
            ]));
    },
  }),
  Aa = j(Ta, [["__scopeId", "data-v-509094a0"]]),
  W = (a) => (_e("data-v-2227ae8c"), (a = a()), fe(), a),
  Ua = { class: "input-container" },
  Ea = W(() => e("div", { class: "label" }, " Name* ", -1)),
  Pa = { class: "input-row" },
  Va = { class: "input-container" },
  Ra = W(() => e("div", { class: "label" }, " Proficiency ", -1)),
  Ma = { class: "input-container" },
  Da = W(() => e("div", { class: "label" }, " Type ", -1)),
  xa = { class: "input-container" },
  Ba = W(() => e("div", { class: "label" }, " Handling ", -1)),
  qa = { class: "input-row" },
  Sa = { class: "input-container" },
  Oa = W(() => e("div", { class: "label" }, " Damage* ", -1)),
  Na = { class: "input-container" },
  Fa = W(() => e("div", { class: "label" }, " Secondary damage ", -1)),
  Wa = { class: "input-container" },
  za = W(() => e("div", { class: "label" }, " Critical* ", -1)),
  ja = { class: "input-container" },
  Qa = W(() => e("div", { class: "label" }, " Multiplier* ", -1)),
  Ga = { class: "input-container" },
  Ja = W(() => e("div", { class: "label" }, " Damage Type ", -1)),
  Ka = { class: "input-row" },
  Xa = { class: "input-container" },
  Ya = W(() => e("div", { class: "label" }, " Range ", -1)),
  Za = { class: "input-container" },
  es = W(() => e("div", { class: "label" }, " Category ", -1)),
  ts = { class: "input-container" },
  os = W(() => e("div", { class: "label" }, " Space* ", -1)),
  ns = W(() =>
    e(
      "div",
      { class: "label" },
      [
        de(" Description"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  as = W(() =>
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
  ss = { key: 0 },
  is = ["disabled"],
  ls = { key: 1 },
  rs = ["disabled"],
  ds = x({
    __name: "WeaponForm",
    props: {
      weapon: { type: Object, default: Me },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreateWeapon", "handleClose", "handleEditWeapon"],
    setup(a, { emit: H }) {
      ne((L) => ({ "41bad656": y.value }));
      const d = a,
        v = H,
        m = ["Simple Weapons", "Tactical Weapons", "Heavy Weapons"],
        i = [
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
        n = ["-", "Short", "Medium", "Long", "Extreme", "Unlimited"],
        r = ["0", "I", "II", "III", "IV"],
        l = w(E.clone(d.weapon)),
        _ = R(
          () =>
            l.value.name === "" ||
            l.value.category === "" ||
            l.value.slots === "" ||
            l.value.damage === "" ||
            l.value.criticalRange.toString() === "" ||
            l.value.criticalMult.toString() === ""
        ),
        y = R(() =>
          d.edit && d.sheet
            ? "28.5rem"
            : d.homebrewList
            ? "34.75rem"
            : d.edit
            ? "25.5rem"
            : "25.75rem"
        ),
        k = () => {
          (l.value = E.clone(Me)), v("handleClose");
        },
        p = () => {
          _.value ||
            (dt(l.value),
            v("handleCreateWeapon", l.value),
            (l.value = E.clone(Me)));
        },
        b = () => {
          if (_.value) return;
          dt(l.value);
          const L = { item: l.value, sheet: d.sheet };
          v("handleEditWeapon", L), (l.value = E.clone(Me));
        };
      return (L, h) => {
        const z = ge("p-editor");
        return (
          t(),
          o(
            ue,
            null,
            [
              e(
                "div",
                {
                  class: oe([
                    "form-container",
                    { "form-homebrew-padding": a.homebrewList },
                  ]),
                },
                [
                  e("div", Ua, [
                    Ea,
                    P(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            h[0] || (h[0] = (C) => (l.value.name = C)),
                          type: "text",
                          class: "input-primary dark big-input",
                        },
                        null,
                        512
                      ),
                      [[V, l.value.name]]
                    ),
                  ]),
                  e("div", Pa, [
                    e("div", Va, [
                      Ra,
                      c(
                        O,
                        {
                          value: l.value.proficiencie,
                          options: m,
                          width: "8.5rem",
                          "content-width": "8.5rem",
                          "form-input": "",
                          onUpdateValue:
                            h[1] || (h[1] = (C) => (l.value.proficiencie = C)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", Ma, [
                      Da,
                      c(
                        O,
                        {
                          value: l.value.type,
                          options: i,
                          width: "10rem",
                          "content-width": "10rem",
                          "form-input": "",
                          onUpdateValue:
                            h[2] || (h[2] = (C) => (l.value.type = C)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", xa, [
                      Ba,
                      c(
                        O,
                        {
                          value: l.value.handling,
                          options: s,
                          width: "6.5rem",
                          "content-width": "6.5rem",
                          "form-input": "",
                          onUpdateValue:
                            h[3] || (h[3] = (C) => (l.value.handling = C)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                  ]),
                  e("div", qa, [
                    e("div", Sa, [
                      Oa,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              h[4] || (h[4] = (C) => (l.value.damage = C)),
                            type: "text",
                            class: "input-primary dark medium",
                          },
                          null,
                          512
                        ),
                        [[V, l.value.damage]]
                      ),
                    ]),
                    e("div", Na, [
                      Fa,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              h[5] ||
                              (h[5] = (C) => (l.value.secondaryDamage = C)),
                            type: "text",
                            class: "input-primary dark medium",
                          },
                          null,
                          512
                        ),
                        [[V, l.value.secondaryDamage]]
                      ),
                    ]),
                    e("div", Wa, [
                      za,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              h[6] ||
                              (h[6] = (C) => (l.value.criticalRange = C)),
                            type: "number",
                            class:
                              "input-primary dark small input-align-center",
                          },
                          null,
                          512
                        ),
                        [[V, l.value.criticalRange]]
                      ),
                    ]),
                    e("div", ja, [
                      Qa,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              h[7] ||
                              (h[7] = (C) => (l.value.criticalMult = C)),
                            type: "number",
                            class:
                              "input-primary dark small input-align-center",
                          },
                          null,
                          512
                        ),
                        [[V, l.value.criticalMult]]
                      ),
                    ]),
                    e("div", Ga, [
                      Ja,
                      c(
                        O,
                        {
                          value: l.value.damageType,
                          options: u,
                          width: "6.5rem",
                          "content-width": "6.5rem",
                          "form-input": "",
                          onUpdateValue:
                            h[8] || (h[8] = (C) => (l.value.damageType = C)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                  ]),
                  e("div", Ka, [
                    e("div", Xa, [
                      Ya,
                      c(
                        O,
                        {
                          value: l.value.range,
                          options: n,
                          width: "5rem",
                          "content-width": "5rem",
                          "form-input": "",
                          onUpdateValue:
                            h[9] || (h[9] = (C) => (l.value.range = C)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", Za, [
                      es,
                      c(
                        O,
                        {
                          value: l.value.category,
                          options: r,
                          width: "2.75rem",
                          "content-width": "2.75rem",
                          "form-input": "",
                          "small-input": "",
                          onUpdateValue:
                            h[10] || (h[10] = (C) => (l.value.category = C)),
                        },
                        null,
                        8,
                        ["value"]
                      ),
                    ]),
                    e("div", ts, [
                      os,
                      P(
                        e(
                          "input",
                          {
                            "onUpdate:modelValue":
                              h[11] || (h[11] = (C) => (l.value.slots = C)),
                            type: "text",
                            class:
                              "input-primary dark small input-align-center",
                          },
                          null,
                          512
                        ),
                        [[V, l.value.slots]]
                      ),
                    ]),
                  ]),
                  ns,
                  c(
                    z,
                    {
                      modelValue: l.value.description,
                      "onUpdate:modelValue":
                        h[12] || (h[12] = (C) => (l.value.description = C)),
                      "editor-style": "height: 12rem",
                    },
                    { toolbar: ie(() => [as]), _: 1 },
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
                    { "homebrew-background": a.homebrewList },
                  ]),
                },
                [
                  e(
                    "button",
                    { class: "button-cancel", onClick: k },
                    " Cancel "
                  ),
                  a.edit
                    ? (t(),
                      o("div", ss, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: _.value,
                            onClick: b,
                          },
                          q(d.addMode ? "Add" : "Edit"),
                          9,
                          is
                        ),
                      ]))
                    : (t(),
                      o("div", ls, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: _.value,
                            onClick: p,
                          },
                          " Add New ",
                          8,
                          rs
                        ),
                      ])),
                ],
                2
              ),
            ],
            64
          )
        );
      };
    },
  }),
  bt = j(ds, [["__scopeId", "data-v-2227ae8c"]]),
  He = (a) => (_e("data-v-da7e753e"), (a = a()), fe(), a),
  us = { class: "form-container" },
  cs = { class: "input-container" },
  ms = He(() => e("div", { class: "label" }, " Name* ", -1)),
  vs = { class: "input-row" },
  hs = { class: "input-container" },
  bs = He(() => e("div", { class: "label" }, " Defense* ", -1)),
  ps = { class: "input-container" },
  ws = He(() => e("div", { class: "label" }, " Category* ", -1)),
  _s = { class: "input-container" },
  fs = He(() => e("div", { class: "label" }, " Space* ", -1)),
  ys = He(() =>
    e(
      "div",
      { class: "label" },
      [
        de(" Description"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  $s = He(() =>
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
  Cs = { key: 0 },
  ks = ["disabled"],
  gs = { key: 1 },
  Is = ["disabled"],
  Hs = x({
    __name: "ProtectionForm",
    props: {
      protection: { type: Object, default: De },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreateProtection", "handleClose", "handleEditProtection"],
    setup(a, { emit: H }) {
      ne((y) => ({ 47186708: s.value, "521c6b5c": u.value }));
      const d = a,
        v = H,
        m = ["0", "I", "II", "III", "IV"],
        i = w(E.clone(d.protection)),
        s = R(() => (d.homebrewList || d.edit ? "28.5rem" : "25.5rem")),
        u = R(() => (d.homebrewList ? "1rem" : "0")),
        n = R(
          () =>
            i.value.name === "" ||
            i.value.category === "" ||
            i.value.slots === "" ||
            i.value.defense.toString() === ""
        ),
        r = () => {
          (i.value = E.clone(De)), v("handleClose");
        },
        l = () => {
          n.value ||
            (ut(i.value),
            v("handleCreateProtection", i.value),
            (i.value = E.clone(De)));
        },
        _ = () => {
          if (n.value) return;
          ut(i.value);
          const y = { item: i.value, sheet: d.sheet };
          v("handleEditProtection", y), (i.value = E.clone(De));
        };
      return (y, k) => {
        const p = ge("p-editor");
        return (
          t(),
          o(
            ue,
            null,
            [
              e("div", us, [
                e("div", cs, [
                  ms,
                  P(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          k[0] || (k[0] = (b) => (i.value.name = b)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[V, i.value.name]]
                  ),
                ]),
                e("div", vs, [
                  e("div", hs, [
                    bs,
                    P(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            k[1] || (k[1] = (b) => (i.value.defense = b)),
                          type: "number",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[V, i.value.defense]]
                    ),
                  ]),
                  e("div", ps, [
                    ws,
                    c(
                      O,
                      {
                        value: i.value.category,
                        options: m,
                        width: "2.75rem",
                        "content-width": "2.75rem",
                        "form-input": "",
                        "small-input": "",
                        onUpdateValue:
                          k[2] || (k[2] = (b) => (i.value.category = b)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", _s, [
                    fs,
                    P(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            k[3] || (k[3] = (b) => (i.value.slots = b)),
                          type: "text",
                          class: "input-primary dark small input-align-center",
                        },
                        null,
                        512
                      ),
                      [[V, i.value.slots]]
                    ),
                  ]),
                ]),
                ys,
                c(
                  p,
                  {
                    modelValue: i.value.description,
                    "onUpdate:modelValue":
                      k[4] || (k[4] = (b) => (i.value.description = b)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: ie(() => [$s]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e(
                "div",
                {
                  class: oe([
                    "buttons-container",
                    { "homebrew-background": a.homebrewList },
                  ]),
                },
                [
                  e(
                    "button",
                    { class: "button-cancel", onClick: r },
                    " Cancel "
                  ),
                  a.edit
                    ? (t(),
                      o("div", Cs, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: n.value,
                            onClick: _,
                          },
                          q(d.addMode ? "Add" : "Edit"),
                          9,
                          ks
                        ),
                      ]))
                    : (t(),
                      o("div", gs, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: n.value,
                            onClick: l,
                          },
                          " Add New ",
                          8,
                          Is
                        ),
                      ])),
                ],
                2
              ),
            ],
            64
          )
        );
      };
    },
  }),
  pt = j(Hs, [["__scopeId", "data-v-da7e753e"]]),
  Le = (a) => (_e("data-v-c4096e24"), (a = a()), fe(), a),
  Ls = { class: "form-container" },
  Ts = { class: "input-container" },
  As = Le(() => e("div", { class: "label" }, " Name* ", -1)),
  Us = { class: "input-row" },
  Es = { class: "input-container" },
  Ps = Le(() => e("div", { class: "label" }, " Category* ", -1)),
  Vs = { class: "input-container" },
  Rs = Le(() => e("div", { class: "label" }, " Space* ", -1)),
  Ms = { key: 0, class: "input-container" },
  Ds = Le(() => e("div", { class: "label" }, " Tag ", -1)),
  xs = Le(() =>
    e(
      "div",
      { class: "label" },
      [
        de(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  Bs = Le(() =>
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
  qs = { key: 0 },
  Ss = ["disabled"],
  Os = { key: 1 },
  Ns = ["disabled"],
  Fs = x({
    __name: "MiscForm",
    props: {
      misc: { type: Object, default: xe },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreateMisc", "handleClose", "handleEditMisc"],
    setup(a, { emit: H }) {
      ne((k) => ({ c6e3bba8: u.value, d56668a8: n.value }));
      const d = a,
        v = H,
        m = ["0", "I", "II", "III", "IV"],
        i = [
          "Accessories",
          "Explosives",
          "Operacional Items",
          "Paranormal Items",
        ],
        s = w(E.clone(d.misc)),
        u = R(() =>
          (d.edit && d.sheet) || d.homebrewList
            ? "28.5rem"
            : (d.edit, "25.5rem")
        ),
        n = R(() => (d.homebrewList ? "1rem" : "0")),
        r = R(
          () =>
            s.value.name === "" ||
            s.value.description === "" ||
            s.value.category === "" ||
            s.value.slots === ""
        ),
        l = () => {
          (s.value = E.clone(xe)), v("handleClose");
        },
        _ = () => {
          r.value ||
            (ct(s.value),
            v("handleCreateMisc", s.value),
            (s.value = E.clone(xe)));
        },
        y = () => {
          if (r.value) return;
          ct(s.value);
          const k = { item: s.value, sheet: d.sheet };
          v("handleEditMisc", k), (s.value = E.clone(xe));
        };
      return (k, p) => {
        const b = ge("p-editor");
        return (
          t(),
          o(
            ue,
            null,
            [
              e("div", Ls, [
                e("div", Ts, [
                  As,
                  P(
                    e(
                      "input",
                      {
                        "onUpdate:modelValue":
                          p[0] || (p[0] = (L) => (s.value.name = L)),
                        type: "text",
                        class: "input-primary dark big-input",
                      },
                      null,
                      512
                    ),
                    [[V, s.value.name]]
                  ),
                ]),
                e("div", Us, [
                  e("div", Es, [
                    Ps,
                    c(
                      O,
                      {
                        value: s.value.category,
                        options: m,
                        width: "2.75rem",
                        "content-width": "2.75rem",
                        "form-input": "",
                        "small-input": "",
                        onUpdateValue:
                          p[1] || (p[1] = (L) => (s.value.category = L)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Vs, [
                    Rs,
                    P(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            p[2] || (p[2] = (L) => (s.value.slots = L)),
                          type: "number",
                          class: "input-primary dark small",
                        },
                        null,
                        512
                      ),
                      [[V, s.value.slots]]
                    ),
                  ]),
                  s.value.itemType !== "ammunition"
                    ? (t(),
                      o("div", Ms, [
                        Ds,
                        c(
                          O,
                          {
                            value: s.value.tag,
                            options: i,
                            width: "10rem",
                            "content-width": "10rem",
                            "form-input": "",
                            onUpdateValue:
                              p[3] || (p[3] = (L) => (s.value.tag = L)),
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]))
                    : f("", !0),
                ]),
                xs,
                c(
                  b,
                  {
                    modelValue: s.value.description,
                    "onUpdate:modelValue":
                      p[4] || (p[4] = (L) => (s.value.description = L)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: ie(() => [Bs]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e(
                "div",
                {
                  class: oe([
                    "buttons-container",
                    { "homebrew-background": a.homebrewList },
                  ]),
                },
                [
                  e(
                    "button",
                    { class: "button-cancel", onClick: l },
                    " Cancelar "
                  ),
                  a.edit
                    ? (t(),
                      o("div", qs, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: r.value,
                            onClick: y,
                          },
                          q(d.addMode ? "Add" : "Edit"),
                          9,
                          Ss
                        ),
                      ]))
                    : (t(),
                      o("div", Os, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: r.value,
                            onClick: _,
                          },
                          " Add New ",
                          8,
                          Ns
                        ),
                      ])),
                ],
                2
              ),
            ],
            64
          )
        );
      };
    },
  }),
  qe = j(Fs, [["__scopeId", "data-v-c4096e24"]]),
  Te = (a) => (_e("data-v-c619b4ab"), (a = a()), fe(), a),
  Ws = { class: "form-container" },
  zs = { class: "input-row" },
  js = { class: "input-container" },
  Qs = Te(() => e("div", { class: "label" }, " Name* ", -1)),
  Gs = { class: "input-container" },
  Js = Te(() => e("div", { class: "label" }, " Element ", -1)),
  Ks = { class: "input-row" },
  Xs = { class: "input-container" },
  Ys = Te(() => e("div", { class: "label" }, " Category* ", -1)),
  Zs = { class: "input-container" },
  ei = Te(() => e("div", { class: "label" }, " Space* ", -1)),
  ti = Te(() =>
    e(
      "div",
      { class: "label" },
      [
        de(" Description*"),
        e("span", null, " (use bold to color the text purple)"),
      ],
      -1
    )
  ),
  oi = Te(() =>
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
  ni = { key: 0 },
  ai = ["disabled"],
  si = { key: 1 },
  ii = ["disabled"],
  li = x({
    __name: "CursedItemForm",
    props: {
      cursedItem: { type: Object, default: Be },
      edit: Boolean,
      sheet: Boolean,
      addMode: Boolean,
      homebrewList: Boolean,
    },
    emits: ["handleCreateCursedItem", "handleClose", "handleEditCursedItem"],
    setup(a, { emit: H }) {
      ne((k) => ({ "75339fcf": u.value, "5d51fb2e": n.value }));
      const d = a,
        v = H,
        m = ["0", "I", "II", "III", "IV"],
        i = ["Blood", "Death", "Energy", "Fear", "Knowledge", "Varies"],
        s = w(E.clone(d.cursedItem)),
        u = R(() =>
          (d.edit && d.sheet) || d.homebrewList
            ? "28.5rem"
            : (d.edit, "25.5rem")
        ),
        n = R(() => (d.homebrewList ? "1rem" : "0")),
        r = R(() => s.value.name === "" || s.value.description === ""),
        l = () => {
          (s.value = E.clone(Be)), v("handleClose");
        },
        _ = () => {
          r.value ||
            (mt(s.value),
            v("handleCreateCursedItem", s.value),
            (s.value = E.clone(Be)));
        },
        y = () => {
          if (r.value) return;
          mt(s.value);
          const k = { item: s.value, sheet: d.sheet };
          v("handleEditCursedItem", k), (s.value = E.clone(Be));
        };
      return (k, p) => {
        const b = ge("p-editor");
        return (
          t(),
          o(
            ue,
            null,
            [
              e("div", Ws, [
                e("div", zs, [
                  e("div", js, [
                    Qs,
                    P(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            p[0] || (p[0] = (L) => (s.value.name = L)),
                          class: "input-primary dark big-input",
                        },
                        null,
                        512
                      ),
                      [[V, s.value.name]]
                    ),
                  ]),
                  e("div", Gs, [
                    Js,
                    c(
                      O,
                      {
                        value: s.value.element,
                        options: i,
                        width: "7.75rem",
                        "content-width": "7.75rem",
                        "form-input": "",
                        onUpdateValue:
                          p[1] || (p[1] = (L) => (s.value.element = L)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                ]),
                e("div", Ks, [
                  e("div", Xs, [
                    Ys,
                    c(
                      O,
                      {
                        value: s.value.category,
                        options: m,
                        width: "2.75rem",
                        "content-width": "2.75rem",
                        "form-input": "",
                        "small-input": "",
                        onUpdateValue:
                          p[2] || (p[2] = (L) => (s.value.category = L)),
                      },
                      null,
                      8,
                      ["value"]
                    ),
                  ]),
                  e("div", Zs, [
                    ei,
                    P(
                      e(
                        "input",
                        {
                          "onUpdate:modelValue":
                            p[3] || (p[3] = (L) => (s.value.slots = L)),
                          type: "text",
                          class: "input-primary dark small",
                        },
                        null,
                        512
                      ),
                      [[V, s.value.slots]]
                    ),
                  ]),
                ]),
                ti,
                c(
                  b,
                  {
                    modelValue: s.value.description,
                    "onUpdate:modelValue":
                      p[4] || (p[4] = (L) => (s.value.description = L)),
                    "editor-style": "height: 12rem",
                  },
                  { toolbar: ie(() => [oi]), _: 1 },
                  8,
                  ["modelValue"]
                ),
              ]),
              e(
                "div",
                {
                  class: oe([
                    "buttons-container",
                    { "homebrew-background": a.homebrewList },
                  ]),
                },
                [
                  e(
                    "button",
                    { class: "button-cancel", onClick: l },
                    " Cancelar "
                  ),
                  a.edit
                    ? (t(),
                      o("div", ni, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: r.value,
                            onClick: y,
                          },
                          q(d.addMode ? "Add" : "Edit"),
                          9,
                          ai
                        ),
                      ]))
                    : (t(),
                      o("div", si, [
                        e(
                          "button",
                          {
                            class: "button-primary big",
                            disabled: r.value,
                            onClick: _,
                          },
                          " Add New ",
                          8,
                          ii
                        ),
                      ])),
                ],
                2
              ),
            ],
            64
          )
        );
      };
    },
  }),
  wt = j(li, [["__scopeId", "data-v-c619b4ab"]]),
  ri = { key: 0 },
  di = { key: 0 },
  ui = { key: 1 },
  ci = { key: 2 },
  mi = { key: 3 },
  vi = { key: 4 },
  hi = { key: 1 },
  bi = x({
    __name: "CreateHomebrewItems",
    props: {
      currentCreateOption: { type: String, required: !0 },
      homebrewList: Boolean,
    },
    emits: ["handleClose"],
    setup(a, { emit: H }) {
      const d = H,
        v = ae(),
        m = se(),
        i = w(!1),
        s = {
          weapon: "weapon",
          ammunition: "ammunition",
          protection: "protection",
          misc: "misc",
          cursedItem: "cursedItem",
        },
        u = w({ message: "", type: "error", alive: !1, timeout: 0 }),
        n = async (l) => {
          var y;
          if (!v.currentUser) return;
          if (
            ((i.value = !0),
            (await Ie((y = v.currentUser) == null ? void 0 : y.uid)) < 4 &&
              !(await Ke(v.currentUser.uid)))
          ) {
            (i.value = !1),
              (u.value.message = "Homebrew limit reached"),
              (u.value.alive = !0);
            return;
          }
          (l.uid = v.currentUser.uid),
            await Ge(N(m, "homebrewItems"), l),
            (i.value = !1),
            d("handleClose");
        };
      ze(
        () => u.value.alive,
        () => {
          u.value.alive === !0 &&
            (u.value.timeout = window.setTimeout(
              () => (u.value.alive = !1),
              3e3
            ));
        }
      );
      const r = () => {
        (u.value.alive = !1), clearTimeout(u.value.timeout);
      };
      return (l, _) =>
        i.value
          ? (t(), o("div", hi, [c(le)]))
          : (t(),
            o("div", ri, [
              a.currentCreateOption === s.weapon
                ? (t(),
                  o("div", di, [
                    c(
                      bt,
                      {
                        "homebrew-list": a.homebrewList,
                        onHandleCreateWeapon: n,
                        onHandleClose:
                          _[0] || (_[0] = (y) => l.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              a.currentCreateOption === s.ammunition
                ? (t(),
                  o("div", ui, [
                    c(
                      qe,
                      {
                        misc: Se(ft),
                        "homebrew-list": a.homebrewList,
                        onHandleCreateMisc: n,
                        onHandleClose:
                          _[1] || (_[1] = (y) => l.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["misc", "homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              a.currentCreateOption === s.protection
                ? (t(),
                  o("div", ci, [
                    c(
                      pt,
                      {
                        "homebrew-list": a.homebrewList,
                        onHandleCreateProtection: n,
                        onHandleClose:
                          _[2] || (_[2] = (y) => l.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              a.currentCreateOption === s.misc
                ? (t(),
                  o("div", mi, [
                    c(
                      qe,
                      {
                        "homebrew-list": a.homebrewList,
                        onHandleCreateMisc: n,
                        onHandleClose:
                          _[3] || (_[3] = (y) => l.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              a.currentCreateOption === s.cursedItem
                ? (t(),
                  o("div", vi, [
                    c(
                      wt,
                      {
                        "homebrew-list": a.homebrewList,
                        onHandleCreateCursedItem: n,
                        onHandleClose:
                          _[4] || (_[4] = (y) => l.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              c(
                Qe,
                { name: "toast" },
                {
                  default: ie(() => [
                    u.value.alive
                      ? (t(),
                        je(
                          Xe,
                          {
                            key: 0,
                            toast: u.value,
                            type: u.value.type,
                            onDismiss: r,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : f("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
    },
  }),
  pi = { key: 0 },
  wi = { key: 0 },
  _i = { key: 1 },
  fi = { key: 2 },
  yi = { key: 3 },
  $i = { key: 4 },
  Ci = { key: 1 },
  ki = x({
    __name: "EditHomebreItems",
    props: { item: {}, homebrewList: { type: Boolean } },
    emits: ["handleClose", "handleEditItemSheet"],
    setup(a, { emit: H }) {
      const d = H,
        v = ae(),
        m = se(),
        i = w(!1),
        s = {
          weapon: "weapon",
          ammunition: "ammunition",
          protection: "protection",
          misc: "misc",
          cursedItem: "cursedItem",
        },
        u = async (n) => {
          if (v.currentUser) {
            if (((i.value = !0), n.sheet)) {
              d("handleEditItemSheet", n.item);
              return;
            }
            await Je(ke(m, "homebrewItems", n.item.id), n.item),
              (i.value = !1),
              d("handleClose");
          }
        };
      return (n, r) =>
        i.value
          ? (t(), o("div", Ci, [c(le)]))
          : (t(),
            o("div", pi, [
              n.item.itemType === s.weapon
                ? (t(),
                  o("div", wi, [
                    c(
                      bt,
                      {
                        weapon: n.item,
                        "homebrew-list": n.homebrewList,
                        edit: "",
                        onHandleEditWeapon: u,
                        onHandleClose:
                          r[0] || (r[0] = (l) => n.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["weapon", "homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              n.item.itemType === s.ammunition
                ? (t(),
                  o("div", _i, [
                    c(
                      qe,
                      {
                        misc: n.item,
                        "homebrew-list": n.homebrewList,
                        edit: "",
                        onHandleEditMisc: u,
                        onHandleClose:
                          r[1] || (r[1] = (l) => n.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["misc", "homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              n.item.itemType === s.protection
                ? (t(),
                  o("div", fi, [
                    c(
                      pt,
                      {
                        protection: n.item,
                        "homebrew-list": n.homebrewList,
                        edit: "",
                        onHandleEditProtection: u,
                        onHandleClose:
                          r[2] || (r[2] = (l) => n.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["protection", "homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              n.item.itemType === s.misc
                ? (t(),
                  o("div", yi, [
                    c(
                      qe,
                      {
                        misc: n.item,
                        "homebrew-list": n.homebrewList,
                        edit: "",
                        onHandleEditMisc: u,
                        onHandleClose:
                          r[3] || (r[3] = (l) => n.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["misc", "homebrew-list"]
                    ),
                  ]))
                : f("", !0),
              n.item.itemType === s.cursedItem
                ? (t(),
                  o("div", $i, [
                    c(
                      wt,
                      {
                        "cursed-item": n.item,
                        "homebrew-list": n.homebrewList,
                        edit: "",
                        onHandleEditCursedItem: u,
                        onHandleClose:
                          r[4] || (r[4] = (l) => n.$emit("handleClose")),
                      },
                      null,
                      8,
                      ["cursed-item", "homebrew-list"]
                    ),
                  ]))
                : f("", !0),
            ]));
    },
  }),
  gi = { class: "class-abilities-container" },
  Ii = { key: 1 },
  Hi = { key: 2 },
  Li = { key: 3 },
  Ti = { key: 0 },
  Ai = x({
    __name: "HomebrewItems",
    props: { homebrewList: Boolean },
    emits: ["handleAddItem"],
    setup(a, { emit: H }) {
      const d = H,
        v = w(0),
        m = w(),
        i = w("list"),
        s = { list: "list", create: "create", edit: "edit" },
        u = w("weapon"),
        n = {
          weapon: "weapon",
          ammunition: "ammunition",
          protection: "protection",
          misc: "misc",
          cursedItem: "cursedItem",
        },
        r = [
          { label: "Weapons", value: 0 },
          { label: "Ammo", value: 1 },
          { label: "Armor", value: 2 },
          { label: "General", value: 3 },
          { label: "Cursed Items", value: 4 },
        ],
        l = (k) => d("handleAddItem", k),
        _ = (k) => {
          (m.value = k), (i.value = s.edit);
        },
        y = (k) => {
          (u.value = k), (i.value = s.create);
        };
      return (k, p) => (
        t(),
        o("div", gi, [
          i.value === s.list
            ? (t(),
              o(
                "div",
                { key: 0, class: oe({ "tab-margin": i.value !== s.list }) },
                [
                  c(
                    Oe,
                    {
                      "current-tab": v.value,
                      "tab-options": r,
                      onHandleNavigation: p[0] || (p[0] = (b) => (v.value = b)),
                    },
                    null,
                    8,
                    ["current-tab"]
                  ),
                ],
                2
              ))
            : f("", !0),
          i.value === s.list
            ? (t(),
              o("div", Ii, [
                c(
                  Aa,
                  {
                    "current-tab": v.value,
                    "homebrew-list": a.homebrewList,
                    onHandleAddItem: l,
                    onHandleEditItem: _,
                    onHandleCreateWeapon: p[1] || (p[1] = (b) => y(n.weapon)),
                    onHandleCreateAmmunition:
                      p[2] || (p[2] = (b) => y(n.ammunition)),
                    onHandleCreateProtection:
                      p[3] || (p[3] = (b) => y(n.protection)),
                    onHandleCreateMisc: p[4] || (p[4] = (b) => y(n.misc)),
                    onHandleCreateCursedItem:
                      p[5] || (p[5] = (b) => y(n.cursedItem)),
                  },
                  null,
                  8,
                  ["current-tab", "homebrew-list"]
                ),
              ]))
            : f("", !0),
          i.value === s.create
            ? (t(),
              o("div", Hi, [
                c(
                  bi,
                  {
                    "current-create-option": u.value,
                    "homebrew-list": a.homebrewList,
                    onHandleClose: p[6] || (p[6] = (b) => (i.value = s.list)),
                  },
                  null,
                  8,
                  ["current-create-option", "homebrew-list"]
                ),
              ]))
            : f("", !0),
          i.value === s.edit
            ? (t(),
              o("div", Li, [
                m.value
                  ? (t(),
                    o("div", Ti, [
                      c(
                        ki,
                        {
                          item: m.value,
                          "homebrew-list": a.homebrewList,
                          onHandleClose:
                            p[7] || (p[7] = (b) => (i.value = s.list)),
                        },
                        null,
                        8,
                        ["item", "homebrew-list"]
                      ),
                    ]))
                  : f("", !0),
              ]))
            : f("", !0),
        ])
      );
    },
  }),
  zi = j(Ai, [["__scopeId", "data-v-f97ab419"]]);
export {
  vt as A,
  we as C,
  Fi as H,
  qe as M,
  pt as P,
  ht as R,
  bt as W,
  Wi as a,
  zi as b,
  wt as c,
};

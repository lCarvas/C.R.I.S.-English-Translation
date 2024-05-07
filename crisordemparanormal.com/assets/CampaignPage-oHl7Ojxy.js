import {
  d as Ta,
  g as La,
  M as Na,
  u as Ha,
  S as xa,
  r,
  e as Ea,
  H as ua,
  P as C,
  R as J,
  F as z,
  B as S,
  Z as ca,
  $ as Fa,
  w as da,
  i as ja,
  o as s,
  c as i,
  a as e,
  m as h,
  K as aa,
  j as K,
  t as ma,
  k as d,
  n as ea,
  q as ta,
  v as V,
  T as Aa,
  L as w,
  A as Oa,
  p as $a,
  b as Ba,
  l as va,
  N as pa,
  E as Z,
  _ as qa,
} from "./index-vN3-fYvH.js";
import { L as ha } from "./LoadingView-k_Tp0sm7.js";
import { C as Ja } from "./CharacterCard-DyYettMc.js";
import { T as za } from "./ToastNotification-qKJt4qAM.js";
import { P as Ka } from "./PictureModal-gf9J8dUZ.js";
import { T as Za } from "./TabNav-p4cAvo-x.js";
import { P as Ga } from "./PlayerCard-6Pq9W0xF.js";
import { C as Qa } from "./CombatCard-lAnt3YWC.js";
import { g as Wa } from "./firebase-0yyb2Old.js";
import { P as Xa } from "./PrivateFeat-yFE7JtwT.js";
import "./open-in-new-icon-p91krxL-.js";
import "./index.esm2017-Gxd8XF9H.js";
import "./v4-cyCr5FZV.js";
import "./colors-NalZ6sWE.js";
const m = (A) => ($a("data-v-d80a2cc7"), (A = A()), Ba(), A),
  Ya = { key: 0, class: "container" },
  ae = { class: "header-buttons" },
  ee = ["onMouseup"],
  te = ["onMouseup"],
  oe = ["onMouseup"],
  ne = { class: "campaign-name" },
  se = { class: "campaign-content" },
  ie = { key: 0, class: "campaign-img-container" },
  le = ["src"],
  re = { class: "campaign-description" },
  ue = ["innerHTML"],
  ce = { key: 0, class: "campaign-list-container" },
  de = { key: 0 },
  me = { key: 0 },
  ve = { class: "cards-container" },
  pe = { key: 1 },
  he = m(() =>
    e(
      "div",
      { class: "no-agents-container" },
      [e("h3", null, "There are no agents on this campaign!")],
      -1
    )
  ),
  _e = [he],
  fe = { key: 1 },
  ge = { key: 0 },
  be = { class: "cards-container" },
  Ce = { key: 1 },
  ke = m(() =>
    e(
      "div",
      { class: "no-agents-container" },
      [e("h3", null, "There are no players on this campaign!")],
      -1
    )
  ),
  ye = [ke],
  we = { key: 2 },
  Me = { key: 0 },
  Ie = { key: 1 },
  Re = { key: 0 },
  Ue = { class: "cards-container" },
  Pe = { key: 1 },
  Se = { class: "no-agents-container" },
  Ve = m(() => e("h3", null, "There are no encounters on this compaign!", -1)),
  De = ["onMouseup"],
  Te = { key: 1 },
  Le = { key: 2 },
  Ne = m(() => e("h2", null, "Remove agent from campaign?", -1)),
  He = m(() =>
    e("img", { class: "close-icon", src: Z, alt: "fechar" }, null, -1)
  ),
  xe = [He],
  Ee = m(() =>
    e(
      "h4",
      null,
      "The agent can be re-added to the campaign",
      -1
    )
  ),
  Fe = { key: 3 },
  je = m(() => e("h2", null, "Remove player from campaign?", -1)),
  Ae = m(() =>
    e("img", { class: "close-icon", src: Z, alt: "fechar" }, null, -1)
  ),
  Oe = [Ae],
  $e = m(() =>
    e(
      "h4",
      null,
      "All agents of this player will be removed. The player can re-join the campaign if they have access to the invite link",
      -1
    )
  ),
  Be = { class: "modal-content modal-width" },
  qe = m(() =>
    e("h2", { class: "modal-title" }, " Link to join the Campaign ", -1)
  ),
  Je = m(() =>
    e("img", { class: "close-icon", src: Z, alt: "fechar" }, null, -1)
  ),
  ze = [Je],
  Ke = { class: "modal-body" },
  Ze = { class: "campaign-link-container" },
  Ge = ["href"],
  Qe = { key: 0, class: "campaign-link-buttons" },
  We = { key: 1, class: "campaign-link-buttons-no-dm" },
  Xe = m(() => e("h2", null, "Leave campaign?", -1)),
  Ye = m(() =>
    e("img", { class: "close-icon", src: Z, alt: "fechar" }, null, -1)
  ),
  at = [Ye],
  et = m(() =>
    e(
      "h4",
      null,
      "All your agents will be removed from this campaign. You can re-join the campaign if you have access to the invite link",
      -1
    )
  ),
  tt = { key: 1 },
  ot = Ta({
    __name: "CampaignPage",
    setup(A) {
      const f = La(),
        c = Na(),
        v = Ha(),
        oa = xa().params.id,
        G = "https://crisordemparanormal.com/",
        M = r(!0),
        O = r(!1),
        D = r(!1),
        I = r(!1),
        $ = r(!1),
        T = r(!1),
        L = r(),
        R = r(),
        U = r(!1),
        t = r(),
        N = r([]),
        H = r([]),
        P = r(0),
        Q = r(),
        W = r(),
        _ = r(!1),
        X = r(0),
        na = r([
          { label: "Agents", value: 0 },
          { label: "Players", value: 1 },
        ]),
        x = r(0),
        u = r({ message: "", type: "info", alive: !1, timeout: 0 });
      Ea(async () => {
        var E, n, y;
        if (!f.currentUser) return;
        X.value = await Wa((E = f.currentUser) == null ? void 0 : E.uid);
        const o = await ua(C(c, "campaigns", oa));
        o.data() || v.push({ name: "not-found" }),
          (t.value = o.data()),
          (t.value.id = o.id),
          (await ua(C(c, "users", f.currentUser.uid)))
            .data()
            .campaignsId.includes(oa) ||
            v.push({ name: "campaign-page-denied" }),
          ((n = f.currentUser) == null ? void 0 : n.uid) ===
            ((y = t.value) == null ? void 0 : y.uid) &&
            ((_.value = !0), na.value.push({ label: "Encounters", value: 2 }));
        const p = J(c, "characters"),
          g = z(p, S("campaignDocId", "==", t.value.id));
        Q.value = ca(g, (Y) => {
          const F = [];
          for (const j of Y.docs) {
            const q = j.data();
            (q.id = j.id), F.push(q);
          }
          (N.value = F), P.value < 2 && P.value++;
        });
        const b = J(c, "users"),
          B = z(b, S("campaignsId", "array-contains", t.value.id));
        W.value = ca(B, (Y) => {
          var j;
          const F = [];
          for (const q of Y.docs) {
            const ra = q.data();
            ra.uid !== ((j = t.value) == null ? void 0 : j.uid) && F.push(ra);
          }
          (H.value = F), P.value < 2 && P.value++;
        });
      }),
        Fa(() => {
          Q.value && Q.value(), W.value && W.value();
        }),
        da(P, () => {
          M.value !== !1 && P.value >= 2 && (M.value = !1);
        });
      const _a = () => {
          t.value &&
            _.value &&
            ((t.value.joinId = crypto.randomUUID().substring(0, 13)),
            w(C(c, "campaigns", t.value.id), t.value));
        },
        sa = async () => {
          t.value &&
            (await navigator.clipboard.writeText(
              G + "campanha/entrar/" + t.value.joinId
            ),
            (u.value.message = "Link copied"),
            (u.value.alive = !0),
            k());
        };
      da(
        () => u.value.alive,
        () => {
          u.value.alive === !0 &&
            (u.value.timeout = window.setTimeout(
              () => (u.value.alive = !1),
              3e3
            ));
        }
      );
      const fa = () => {
          (u.value.alive = !1), clearTimeout(u.value.timeout);
        },
        ga = (o) => {
          var a;
          if (f.currentUser && o)
            return (
              f.currentUser.uid === o ||
              f.currentUser.uid === ((a = t.value) == null ? void 0 : a.uid)
            );
        },
        ba = async () => {
          var a, l;
          if (!((a = L.value) != null && a.id)) return;
          U.value = !0;
          const o = (l = L.value) == null ? void 0 : l.id;
          await w(C(c, "characters", o), { campaignDocId: "" }),
            k(),
            (U.value = !1),
            (u.value.message = "Agent removed from the campaign!"),
            (u.value.alive = !0);
        },
        Ca = async () => {
          var p;
          if (!t.value || !R.value) return;
          U.value = !0;
          const o = J(c, "characters"),
            a = z(
              o,
              S("campaignDocId", "==", t.value.id),
              S("uid", "==", (p = R.value) == null ? void 0 : p.uid)
            ),
            l = await va(a);
          for (const g of l.docs) {
            const b = g.data();
            (b.id = g.id),
              await w(C(c, "characters", b.id), { campaignDocId: "" });
          }
          await w(C(c, "users", R.value.uid), { campaignsId: pa(t.value.id) }),
            k(),
            (U.value = !1),
            (u.value.message = "Player removed from the campaign!"),
            (u.value.alive = !0);
        },
        ka = async () => {
          var p;
          if (_.value || !t.value || !f.currentUser) return;
          k(), (U.value = !0);
          const o = J(c, "characters"),
            a = z(
              o,
              S("campaignDocId", "==", t.value.id),
              S("uid", "==", (p = f.currentUser) == null ? void 0 : p.uid)
            ),
            l = await va(a);
          for (const g of l.docs) {
            const b = g.data();
            (b.id = g.id),
              await w(C(c, "characters", b.id), { campaignDocId: "" });
          }
          await w(C(c, "users", f.currentUser.uid), {
            campaignsId: pa(t.value.id),
          }),
            v.push({ name: "campaigns-list" });
        },
        ya = () => {
          var o;
          (M.value = !0),
            v.push({
              name: "campaign-edit",
              params: { id: (o = t.value) == null ? void 0 : o.id },
            });
        },
        wa = () => {
          var a;
          const o = v.resolve({
            name: "campaign-edit",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          window.open(o.href, "_blank");
        },
        ia = () => {
          var o;
          (M.value = !0),
            v.push({
              name: "campaign-create-combat",
              params: { id: (o = t.value) == null ? void 0 : o.id },
            });
        },
        la = () => {
          var a;
          const o = v.resolve({
            name: "campaign-create-combat",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          window.open(o.href, "_blank");
        },
        Ma = () => {
          var o;
          (M.value = !0),
            v.push({
              name: "master-screen",
              params: { id: (o = t.value) == null ? void 0 : o.id },
            });
        },
        Ia = () => {
          var a;
          const o = v.resolve({
            name: "master-screen",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          window.open(o.href, "_blank");
        },
        Ra = (o) => {
          const a = v.resolve({ name: "character-sheet", params: { id: o } });
          window.open(a.href, "_blank");
        },
        Ua = (o) => {
          const a = N.value.findIndex((l) => l.id === o);
          (L.value = N.value[a]), (O.value = !0);
        },
        Pa = (o) => {
          const a = H.value.findIndex((l) => (l.uid = o));
          (R.value = H.value[a]), ($.value = !0);
        },
        k = () => {
          ($.value = !1),
            (D.value = !1),
            (I.value = !1),
            (O.value = !1),
            (T.value = !1),
            (L.value = void 0),
            (R.value = void 0);
        },
        Sa = (o, a) => {
          t.value &&
            _.value &&
            ((t.value.pictureURL = o),
            (t.value.pictureFullPath = a),
            w(C(c, "campaigns", t.value.id), t.value),
            k());
        },
        Va = async (o) => {
          var l;
          if (!t.value || !((l = t.value) != null && l.id) || !t.value.combats)
            return;
          const a = t.value.combats.findIndex((p) => p.id === o);
          t.value.currentCombat === a && (t.value.currentCombat = -1),
            t.value.combats.splice(a, 1),
            await w(C(c, "campaigns", t.value.id), t.value);
        },
        Da = (o) => {
          var a;
          (M.value = !0),
            v.push({
              name: "campaign-edit-combat",
              params: {
                campaignId: (a = t.value) == null ? void 0 : a.id,
                combatId: o,
              },
            });
        };
      return (o, a) => {
        var p, g, b, B, E;
        const l = ja("vue-final-modal");
        return M.value
          ? (s(), i("div", tt, [d(ha, { "page-loading": "" })]))
          : (s(),
            i("div", Ya, [
              e("div", ae, [
                _.value
                  ? h("", !0)
                  : (s(),
                    i(
                      "button",
                      {
                        key: 0,
                        class: "button-primary campaign-buttons",
                        onClick: a[0] || (a[0] = (n) => (T.value = !T.value)),
                      },
                      " Leave Campaign "
                    )),
                _.value
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 1,
                        class: "button-primary campaign-buttons",
                        onClick: a[1] || (a[1] = (n) => (I.value = !I.value)),
                      },
                      " Cover Photo "
                    ))
                  : h("", !0),
                e(
                  "button",
                  {
                    class: "button-primary campaign-buttons",
                    onClick:
                      a[2] ||
                      (a[2] = (n) => {
                        var y;
                        return aa(v).push({
                          name: "campaign-add-agent",
                          params: { id: (y = t.value) == null ? void 0 : y.id },
                        });
                      }),
                  },
                  " Add Agents "
                ),
                e(
                  "button",
                  {
                    class: "button-primary campaign-buttons",
                    onClick: a[3] || (a[3] = (n) => (D.value = !D.value)),
                  },
                  " Invite Players "
                ),
                _.value
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 2,
                        class: "button-primary campaign-buttons",
                        onClick: ya,
                        onMouseup: K(wa, ["middle"]),
                      },
                      " Edit Campaign ",
                      40,
                      ee
                    ))
                  : h("", !0),
                _.value && X.value >= 3
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 3,
                        class: "button-primary campaign-buttons",
                        onClick: ia,
                        onMouseup: K(la, ["middle"]),
                      },
                      " Create Encounter ",
                      40,
                      te
                    ))
                  : h("", !0),
                !((p = t.value) != null && p.privateMasterScreen) || _.value
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 4,
                        class: "button-primary campaign-buttons",
                        onClick: Ma,
                        onMouseup: K(Ia, ["middle"]),
                      },
                      " DM Screen ",
                      40,
                      oe
                    ))
                  : h("", !0),
              ]),
              e("div", ne, ma((g = t.value) == null ? void 0 : g.name), 1),
              e("div", se, [
                (b = t.value) != null && b.pictureURL
                  ? (s(),
                    i("div", ie, [
                      e(
                        "img",
                        {
                          class: "campaign-img",
                          src: t.value.pictureURL,
                          alt: "foto de capa",
                        },
                        null,
                        8,
                        le
                      ),
                    ]))
                  : h("", !0),
                e("div", re, [
                  e(
                    "div",
                    {
                      innerHTML: (B = t.value) == null ? void 0 : B.description,
                    },
                    null,
                    8,
                    ue
                  ),
                ]),
              ]),
              U.value
                ? (s(), i("div", Te, [d(ha, { "page-loading": "" })]))
                : (s(),
                  i("div", ce, [
                    d(
                      Za,
                      {
                        "font-size-big": "",
                        "current-tab": x.value,
                        "tab-options": na.value,
                        onHandleNavigation:
                          a[4] || (a[4] = (n) => (x.value = n)),
                      },
                      null,
                      8,
                      ["current-tab", "tab-options"]
                    ),
                    x.value === 0
                      ? (s(),
                        i("div", de, [
                          N.value.length > 0
                            ? (s(),
                              i("div", me, [
                                e("div", ve, [
                                  (s(!0),
                                  i(
                                    ea,
                                    null,
                                    ta(
                                      N.value,
                                      (n) => (
                                        s(),
                                        i("div", { key: n.id }, [
                                          d(
                                            Ja,
                                            {
                                              "campaign-page": "",
                                              "char-id": n.id,
                                              name: n.name,
                                              "char-class": n.className,
                                              timestamp: n.timestamp.seconds,
                                              "sheet-picture":
                                                n.sheetPictureURL,
                                              "can-remove-from-campaign": ga(
                                                n.uid
                                              ),
                                              onHandleOpenSheetMidClick: Ra,
                                              onHandleOpenSheet: (y) =>
                                                o.$router.push({
                                                  name: "character-sheet",
                                                  params: { id: n.id },
                                                }),
                                              onHandleRemoveFromCampaign: Ua,
                                            },
                                            null,
                                            8,
                                            [
                                              "char-id",
                                              "name",
                                              "char-class",
                                              "timestamp",
                                              "sheet-picture",
                                              "can-remove-from-campaign",
                                              "onHandleOpenSheet",
                                            ]
                                          ),
                                        ])
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ]))
                            : (s(), i("div", pe, _e)),
                        ]))
                      : h("", !0),
                    x.value === 1
                      ? (s(),
                        i("div", fe, [
                          H.value.length > 0
                            ? (s(),
                              i("div", ge, [
                                e("div", be, [
                                  (s(!0),
                                  i(
                                    ea,
                                    null,
                                    ta(
                                      H.value,
                                      (n) => (
                                        s(),
                                        i("div", { key: n.uid }, [
                                          d(
                                            Ga,
                                            {
                                              user: n,
                                              "can-remove-from-campaign":
                                                _.value,
                                              onHandleRemove: Pa,
                                            },
                                            null,
                                            8,
                                            ["user", "can-remove-from-campaign"]
                                          ),
                                        ])
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ]))
                            : (s(), i("div", Ce, ye)),
                        ]))
                      : h("", !0),
                    x.value === 2
                      ? (s(),
                        i("div", we, [
                          X.value >= 3
                            ? (s(),
                              i("div", Ie, [
                                (E = t.value) != null &&
                                E.combats &&
                                t.value.combats.length > 0
                                  ? (s(),
                                    i("div", Re, [
                                      e("div", Ue, [
                                        (s(!0),
                                        i(
                                          ea,
                                          null,
                                          ta(
                                            t.value.combats,
                                            (n) => (
                                              s(),
                                              i("div", { key: n.id }, [
                                                d(
                                                  Qa,
                                                  {
                                                    combat: n,
                                                    onHandleRemove: Va,
                                                    onHandleEdit: Da,
                                                  },
                                                  null,
                                                  8,
                                                  ["combat"]
                                                ),
                                              ])
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ]))
                                  : (s(),
                                    i("div", Pe, [
                                      e("div", Se, [
                                        Ve,
                                        e(
                                          "button",
                                          {
                                            class: "button-primary",
                                            onClick: ia,
                                            onMouseup: K(la, ["middle"]),
                                          },
                                          " Create Encounter ",
                                          40,
                                          De
                                        ),
                                      ]),
                                    ])),
                              ]))
                            : (s(), i("div", Me, [d(Xa)])),
                        ]))
                      : h("", !0),
                  ])),
              L.value
                ? (s(),
                  i("div", Le, [
                    d(
                      l,
                      {
                        modelValue: O.value,
                        "onUpdate:modelValue":
                          a[5] || (a[5] = (n) => (O.value = n)),
                        classes: "modal-container",
                      },
                      {
                        default: V(() => [
                          e("div", { class: "modal-content modal-width" }, [
                            e("div", { class: "modal-header" }, [
                              Ne,
                              e("button", { onClick: k }, xe),
                            ]),
                            e("div", { class: "modal-body" }, [
                              Ee,
                              e("div", { class: "button-container" }, [
                                e(
                                  "button",
                                  { class: "button-primary", onClick: ba },
                                  " Confirm "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : h("", !0),
              R.value
                ? (s(),
                  i("div", Fe, [
                    d(
                      l,
                      {
                        modelValue: $.value,
                        "onUpdate:modelValue":
                          a[6] || (a[6] = (n) => ($.value = n)),
                        classes: "modal-container",
                      },
                      {
                        default: V(() => [
                          e("div", { class: "modal-content modal-width" }, [
                            e("div", { class: "modal-header" }, [
                              je,
                              e("button", { onClick: k }, Oe),
                            ]),
                            e("div", { class: "modal-body" }, [
                              $e,
                              e("div", { class: "button-container" }, [
                                e(
                                  "button",
                                  { class: "button-primary", onClick: Ca },
                                  " Confirm "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]))
                : h("", !0),
              d(
                l,
                {
                  modelValue: D.value,
                  "onUpdate:modelValue": a[7] || (a[7] = (n) => (D.value = n)),
                  classes: "modal-container",
                },
                {
                  default: V(() => {
                    var n, y;
                    return [
                      e("div", Be, [
                        e("div", { class: "modal-header" }, [
                          qe,
                          e("button", { onClick: k }, ze),
                        ]),
                        e("div", Ke, [
                          e("div", Ze, [
                            e(
                              "a",
                              {
                                class: "campaign-link",
                                href:
                                  aa(G) +
                                  "campanha/entrar/" +
                                  ((n = t.value) == null ? void 0 : n.joinId),
                              },
                              ma(
                                aa(G) +
                                  "campanha/entrar/" +
                                  ((y = t.value) == null ? void 0 : y.joinId)
                              ),
                              9,
                              Ge
                            ),
                          ]),
                          _.value
                            ? (s(),
                              i("div", Qe, [
                                e(
                                  "button",
                                  {
                                    class: "button-naked reset-button",
                                    onClick: _a,
                                  },
                                  " Reset "
                                ),
                                e(
                                  "button",
                                  {
                                    class: "button-primary share-button",
                                    onClick: sa,
                                  },
                                  " Copy "
                                ),
                              ]))
                            : (s(),
                              i("div", We, [
                                e(
                                  "button",
                                  {
                                    class: "button-primary share-button",
                                    onClick: sa,
                                  },
                                  " Copy "
                                ),
                              ])),
                        ]),
                      ]),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
              d(
                l,
                {
                  modelValue: I.value,
                  "onUpdate:modelValue": a[9] || (a[9] = (n) => (I.value = n)),
                  classes: "modal-container",
                },
                {
                  default: V(() => [
                    d(
                      Ka,
                      {
                        campaign: t.value,
                        "is-campaign": "",
                        onHandleCloseModal:
                          a[8] || (a[8] = (n) => (I.value = !I.value)),
                        onHandleUpdatePicture: Sa,
                      },
                      null,
                      8,
                      ["campaign"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
              d(
                l,
                {
                  modelValue: T.value,
                  "onUpdate:modelValue":
                    a[10] || (a[10] = (n) => (T.value = n)),
                  classes: "modal-container",
                },
                {
                  default: V(() => [
                    e("div", { class: "modal-content modal-width" }, [
                      e("div", { class: "modal-header" }, [
                        Xe,
                        e("button", { onClick: k }, at),
                      ]),
                      e("div", { class: "modal-body" }, [
                        et,
                        e("div", { class: "button-container" }, [
                          e(
                            "button",
                            { class: "button-primary", onClick: ka },
                            " Confirm "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
              d(
                Aa,
                { name: "toast" },
                {
                  default: V(() => [
                    u.value.alive
                      ? (s(),
                        Oa(
                          za,
                          {
                            key: 0,
                            toast: u.value,
                            type: u.value.type,
                            onDismiss: fa,
                          },
                          null,
                          8,
                          ["toast", "type"]
                        ))
                      : h("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]));
      };
    },
  }),
  bt = qa(ot, [["__scopeId", "data-v-d80a2cc7"]]);
export { bt as default };

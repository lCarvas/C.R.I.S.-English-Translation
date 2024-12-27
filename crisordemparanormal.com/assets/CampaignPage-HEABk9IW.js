import {
  d as Ta,
  g as La,
  M as Na,
  u as xa,
  S as Ha,
  r,
  e as Oa,
  A as ra,
  P as C,
  R as z,
  F as Z,
  B as V,
  Z as ua,
  $ as ja,
  w as da,
  i as Aa,
  o as s,
  c as i,
  a as e,
  m as h,
  L as Y,
  j as w,
  t as ca,
  k as m,
  n as aa,
  q as ea,
  x as D,
  T as Ea,
  N as M,
  v as Fa,
  p as $a,
  b as Ba,
  l as ma,
  O as va,
  J as G,
  _ as qa,
} from "./index-y5xotY6D.js";
import { L as pa } from "./LoadingView-ZLD11fC3.js";
import { C as Ja } from "./CharacterCard-wuDUTu-m.js";
import { T as za } from "./ToastNotification-xk7gRJX_.js";
import { P as Za } from "./PictureModal-k5rUGgsn.js";
import { T as Ga } from "./TabNav-hmTs2qVs.js";
import { P as Ka } from "./PlayerCard-XfqlLPrX.js";
import { C as Qa } from "./CombatCard-Znnl2Glt.js";
import { g as Wa } from "./firebase-EbSNH8SK.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./exit-icon-7lL51GVi.js";
import "./index.esm2017-19TQrQvn.js";
import "./v4-cyCr5FZV.js";
const c = (F) => ($a("data-v-acc12a5a"), (F = F()), Ba(), F),
  Xa = { key: 0, class: "container" },
  Ya = { class: "header-buttons" },
  ae = ["onMouseup"],
  ee = ["onMouseup"],
  te = ["onMouseup"],
  oe = { class: "campaign-name" },
  ne = { class: "campaign-content" },
  se = { key: 0, class: "campaign-img-container" },
  ie = ["src"],
  le = { class: "campaign-description" },
  re = ["innerHTML"],
  ue = { key: 0, class: "campaign-list-container" },
  de = { key: 0 },
  ce = { key: 0 },
  me = { class: "cards-container" },
  ve = { key: 1 },
  pe = c(() =>
    e(
      "div",
      { class: "no-agents-container" },
      [e("h3", null, "There are no agents on this campaign!")],
      -1
    )
  ),
  he = [pe],
  ge = { key: 1 },
  fe = { key: 0 },
  _e = { class: "cards-container" },
  be = { key: 1 },
  Ce = c(() =>
    e(
      "div",
      { class: "no-agents-container" },
      [e("h3", null, "There are no players on this campaign!")],
      -1
    )
  ),
  ke = [Ce],
  ye = { key: 2 },
  we = { key: 0 },
  Me = { class: "cards-container" },
  Ie = { key: 1 },
  Re = { class: "no-agents-container" },
  Ue = c(() => e("h3", null, "There are no encounters on this compaign!", -1)),
  Pe = ["onMouseup"],
  Se = { key: 1 },
  Ve = { key: 2 },
  De = c(() => e("h2", null, "Remove agent from campaign?", -1)),
  Te = c(() =>
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
  ),
  Le = [Te],
  Ne = c(() =>
    e(
      "h4",
      null,
      "The agent can be re-added to the campaign",
      -1
    )
  ),
  xe = { key: 3 },
  He = c(() => e("h2", null, "Remove player from campaign?", -1)),
  Oe = c(() =>
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
  ),
  je = [Oe],
  Ae = c(() =>
    e(
      "h4",
      null,
      "All agents of this player will be removed. The player can re-join the campaign if they have access to the invite link",
      -1
    )
  ),
  Ee = { class: "modal-content modal-width" },
  Fe = c(() =>
    e("h2", { class: "modal-title" }, " Link to join the Campaign ", -1)
  ),
  $e = c(() =>
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
  ),
  Be = [$e],
  qe = { class: "modal-body" },
  Je = { class: "campaign-link-container" },
  ze = ["href"],
  Ze = { key: 0, class: "campaign-link-buttons" },
  Ge = { key: 1, class: "campaign-link-buttons-no-dm" },
  Ke = c(() => e("h2", null, "Leave campaign?", -1)),
  Qe = c(() =>
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
  ),
  We = [Qe],
  Xe = c(() =>
    e(
      "h4",
      null,
      "All your agents will be removed from this campaign. You can re-join the campaign if you have access to the invite link",
      -1
    )
  ),
  Ye = { key: 1 },
  at = Ta({
    __name: "CampaignPage",
    setup(F) {
      const f = La(),
        d = Na(),
        v = xa(),
        ta = Ha().params.id,
        K = "https://crisordemparanormal.com/",
        I = r(!0),
        $ = r(!1),
        T = r(!1),
        R = r(!1),
        B = r(!1),
        L = r(!1),
        N = r(),
        U = r(),
        P = r(!1),
        t = r(),
        x = r([]),
        H = r([]),
        S = r(0),
        Q = r(),
        W = r(),
        g = r(!1),
        ha = r(0),
        oa = r([
          { label: "Agents", value: 0 },
          { label: "Players", value: 1 },
        ]),
        O = r(0),
        u = r({ message: "", type: "info", alive: !1, timeout: 0 });
      Oa(async () => {
        var j, n, y;
        if (!f.currentUser) return;
        ha.value = await Wa((j = f.currentUser) == null ? void 0 : j.uid);
        const o = await ra(C(d, "campaigns", ta));
        o.data() || v.push({ name: "not-found" }),
          (t.value = o.data()),
          (t.value.id = o.id),
          (await ra(C(d, "users", f.currentUser.uid)))
            .data()
            .campaignsId.includes(ta) ||
            v.push({ name: "campaign-page-denied" }),
          ((n = f.currentUser) == null ? void 0 : n.uid) ===
            ((y = t.value) == null ? void 0 : y.uid) &&
            ((g.value = !0), oa.value.push({ label: "Encounters", value: 2 }));
        const p = z(d, "characters"),
          _ = Z(p, V("campaignDocId", "==", t.value.id));
        Q.value = ua(_, (X) => {
          const A = [];
          for (const E of X.docs) {
            const J = E.data();
            (J.id = E.id), A.push(J);
          }
          (x.value = A), S.value < 2 && S.value++;
        });
        const b = z(d, "users"),
          q = Z(b, V("campaignsId", "array-contains", t.value.id));
        W.value = ua(q, (X) => {
          var E;
          const A = [];
          for (const J of X.docs) {
            const la = J.data();
            la.uid !== ((E = t.value) == null ? void 0 : E.uid) && A.push(la);
          }
          (H.value = A), S.value < 2 && S.value++;
        });
      }),
        ja(() => {
          Q.value && Q.value(), W.value && W.value();
        }),
        da(S, () => {
          I.value !== !1 && S.value >= 2 && (I.value = !1);
        });
      const ga = () => {
          t.value &&
            g.value &&
            ((t.value.joinId = crypto.randomUUID().substring(0, 13)),
            M(C(d, "campaigns", t.value.id), t.value));
        },
        na = async () => {
          t.value &&
            (await navigator.clipboard.writeText(
              K + "campanha/entrar/" + t.value.joinId
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
        _a = (o) => {
          var a;
          if (f.currentUser && o)
            return (
              f.currentUser.uid === o ||
              f.currentUser.uid === ((a = t.value) == null ? void 0 : a.uid)
            );
        },
        ba = async () => {
          var a, l;
          if (!((a = N.value) != null && a.id)) return;
          P.value = !0;
          const o = (l = N.value) == null ? void 0 : l.id;
          await M(C(d, "characters", o), { campaignDocId: "" }),
            k(),
            (P.value = !1),
            (u.value.message = "Agent removed from the campaign!"),
            (u.value.alive = !0);
        },
        Ca = async () => {
          var p;
          if (!t.value || !U.value) return;
          P.value = !0;
          const o = z(d, "characters"),
            a = Z(
              o,
              V("campaignDocId", "==", t.value.id),
              V("uid", "==", (p = U.value) == null ? void 0 : p.uid)
            ),
            l = await ma(a);
          for (const _ of l.docs) {
            const b = _.data();
            (b.id = _.id),
              await M(C(d, "characters", b.id), { campaignDocId: "" });
          }
          await M(C(d, "users", U.value.uid), { campaignsId: va(t.value.id) }),
            k(),
            (P.value = !1),
            (u.value.message = "Player removed from the campaign!"),
            (u.value.alive = !0);
        },
        ka = async () => {
          var p;
          if (g.value || !t.value || !f.currentUser) return;
          k(), (P.value = !0);
          const o = z(d, "characters"),
            a = Z(
              o,
              V("campaignDocId", "==", t.value.id),
              V("uid", "==", (p = f.currentUser) == null ? void 0 : p.uid)
            ),
            l = await ma(a);
          for (const _ of l.docs) {
            const b = _.data();
            (b.id = _.id),
              await M(C(d, "characters", b.id), { campaignDocId: "" });
          }
          await M(C(d, "users", f.currentUser.uid), {
            campaignsId: va(t.value.id),
          }),
            v.push({ name: "campaigns-list" });
        },
        ya = () => {
          var o;
          (I.value = !0),
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
        sa = () => {
          var o;
          (I.value = !0),
            v.push({
              name: "campaign-create-combat",
              params: { id: (o = t.value) == null ? void 0 : o.id },
            });
        },
        ia = () => {
          var a;
          const o = v.resolve({
            name: "campaign-create-combat",
            params: { id: (a = t.value) == null ? void 0 : a.id },
          });
          window.open(o.href, "_blank");
        },
        Ma = () => {
          var o;
          (I.value = !0),
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
          const a = x.value.findIndex((l) => l.id === o);
          (N.value = x.value[a]), ($.value = !0);
        },
        Pa = (o) => {
          const a = H.value.findIndex((l) => (l.uid = o));
          (U.value = H.value[a]), (B.value = !0);
        },
        k = () => {
          (B.value = !1),
            (T.value = !1),
            (R.value = !1),
            ($.value = !1),
            (L.value = !1),
            (N.value = void 0),
            (U.value = void 0);
        },
        Sa = (o, a) => {
          t.value &&
            g.value &&
            ((t.value.pictureURL = o),
            (t.value.pictureFullPath = a),
            M(C(d, "campaigns", t.value.id), t.value),
            k());
        },
        Va = async (o) => {
          var l;
          if (!t.value || !((l = t.value) != null && l.id) || !t.value.combats)
            return;
          const a = t.value.combats.findIndex((p) => p.id === o);
          t.value.currentCombat === a && (t.value.currentCombat = -1),
            t.value.combats.splice(a, 1),
            await M(C(d, "campaigns", t.value.id), t.value);
        },
        Da = (o) => {
          var a;
          (I.value = !0),
            v.push({
              name: "campaign-edit-combat",
              params: {
                campaignId: (a = t.value) == null ? void 0 : a.id,
                combatId: o,
              },
            });
        };
      return (o, a) => {
        var p, _, b, q, j;
        const l = Aa("vue-final-modal");
        return I.value
          ? (s(), i("div", Ye, [m(pa, { "page-loading": "" })]))
          : (s(),
            i("div", Xa, [
              e("div", Ya, [
                g.value
                  ? h("", !0)
                  : (s(),
                    i(
                      "button",
                      {
                        key: 0,
                        class: "button-primary campaign-buttons",
                        onClick: a[0] || (a[0] = (n) => (L.value = !L.value)),
                      },
                      " Leave Campaign "
                    )),
                g.value
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 1,
                        class: "button-primary campaign-buttons",
                        onClick: a[1] || (a[1] = (n) => (R.value = !R.value)),
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
                        return Y(v).push({
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
                    onClick: a[3] || (a[3] = (n) => (T.value = !T.value)),
                  },
                  " Invite Players "
                ),
                g.value
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 2,
                        class: "button-primary campaign-buttons",
                        onClick: ya,
                        onMouseup: w(wa, ["middle"]),
                        onMousedown:
                          a[4] ||
                          (a[4] = w(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " Edit Campaign ",
                      40,
                      ae
                    ))
                  : h("", !0),
                g.value
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 3,
                        class: "button-primary campaign-buttons",
                        onClick: sa,
                        onMouseup: w(ia, ["middle"]),
                        onMousedown:
                          a[5] ||
                          (a[5] = w(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " Create Encounter ",
                      40,
                      ee
                    ))
                  : h("", !0),
                !((p = t.value) != null && p.privateMasterScreen) || g.value
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 4,
                        class: "button-primary campaign-buttons",
                        onClick: Ma,
                        onMouseup: w(Ia, ["middle"]),
                        onMousedown:
                          a[6] ||
                          (a[6] = w(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " GM Screen ",
                      40,
                      te
                    ))
                  : h("", !0),
              ]),
              e("div", oe, ca((_ = t.value) == null ? void 0 : _.name), 1),
              e("div", ne, [
                (b = t.value) != null && b.pictureURL
                  ? (s(),
                    i("div", se, [
                      e(
                        "img",
                        {
                          class: "campaign-img",
                          src: t.value.pictureURL,
                          alt: "foto de capa",
                        },
                        null,
                        8,
                        ie
                      ),
                    ]))
                  : h("", !0),
                e("div", le, [
                  e(
                    "div",
                    {
                      class: "description",
                      innerHTML: (q = t.value) == null ? void 0 : q.description,
                    },
                    null,
                    8,
                    re
                  ),
                ]),
              ]),
              P.value
                ? (s(), i("div", Se, [m(pa, { "page-loading": "" })]))
                : (s(),
                  i("div", ue, [
                    m(
                      Ga,
                      {
                        "font-size-big": "",
                        "current-tab": O.value,
                        "tab-options": oa.value,
                        onHandleNavigation:
                          a[7] || (a[7] = (n) => (O.value = n)),
                      },
                      null,
                      8,
                      ["current-tab", "tab-options"]
                    ),
                    O.value === 0
                      ? (s(),
                        i("div", de, [
                          x.value.length > 0
                            ? (s(),
                              i("div", ce, [
                                e("div", me, [
                                  (s(!0),
                                  i(
                                    aa,
                                    null,
                                    ea(
                                      x.value,
                                      (n) => (
                                        s(),
                                        i("div", { key: n.id }, [
                                          m(
                                            Ja,
                                            {
                                              "campaign-page": "",
                                              "char-id": n.id,
                                              name: n.name,
                                              "char-class": n.className,
                                              timestamp: n.timestamp.seconds,
                                              "sheet-picture":
                                                n.sheetPictureURL,
                                              "can-remove-from-campaign": _a(
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
                            : (s(), i("div", ve, he)),
                        ]))
                      : h("", !0),
                    O.value === 1
                      ? (s(),
                        i("div", ge, [
                          H.value.length > 0
                            ? (s(),
                              i("div", fe, [
                                e("div", _e, [
                                  (s(!0),
                                  i(
                                    aa,
                                    null,
                                    ea(
                                      H.value,
                                      (n) => (
                                        s(),
                                        i("div", { key: n.uid }, [
                                          m(
                                            Ka,
                                            {
                                              user: n,
                                              "can-remove-from-campaign":
                                                g.value,
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
                            : (s(), i("div", be, ke)),
                        ]))
                      : h("", !0),
                    O.value === 2
                      ? (s(),
                        i("div", ye, [
                          (j = t.value) != null &&
                          j.combats &&
                          t.value.combats.length > 0
                            ? (s(),
                              i("div", we, [
                                e("div", Me, [
                                  (s(!0),
                                  i(
                                    aa,
                                    null,
                                    ea(
                                      t.value.combats,
                                      (n) => (
                                        s(),
                                        i("div", { key: n.id }, [
                                          m(
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
                              i("div", Ie, [
                                e("div", Re, [
                                  Ue,
                                  e(
                                    "button",
                                    {
                                      class: "button-primary",
                                      onClick: sa,
                                      onMouseup: w(ia, ["middle"]),
                                      onMousedown:
                                        a[8] ||
                                        (a[8] = w(() => {}, [
                                          "middle",
                                          "prevent",
                                          "stop",
                                        ])),
                                    },
                                    " Create Encounter ",
                                    40,
                                    Pe
                                  ),
                                ]),
                              ])),
                        ]))
                      : h("", !0),
                  ])),
              N.value
                ? (s(),
                  i("div", Ve, [
                    m(
                      l,
                      {
                        modelValue: $.value,
                        "onUpdate:modelValue":
                          a[9] || (a[9] = (n) => ($.value = n)),
                        classes: "modal-container",
                      },
                      {
                        default: D(() => [
                          e("div", { class: "modal-content modal-width" }, [
                            e("div", { class: "modal-header" }, [
                              De,
                              e("button", { onClick: k }, Le),
                            ]),
                            e("div", { class: "modal-body" }, [
                              Ne,
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
              U.value
                ? (s(),
                  i("div", xe, [
                    m(
                      l,
                      {
                        modelValue: B.value,
                        "onUpdate:modelValue":
                          a[10] || (a[10] = (n) => (B.value = n)),
                        classes: "modal-container",
                      },
                      {
                        default: D(() => [
                          e("div", { class: "modal-content modal-width" }, [
                            e("div", { class: "modal-header" }, [
                              He,
                              e("button", { onClick: k }, je),
                            ]),
                            e("div", { class: "modal-body" }, [
                              Ae,
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
              m(
                l,
                {
                  modelValue: T.value,
                  "onUpdate:modelValue":
                    a[11] || (a[11] = (n) => (T.value = n)),
                  classes: "modal-container",
                },
                {
                  default: D(() => {
                    var n, y;
                    return [
                      e("div", Ee, [
                        e("div", { class: "modal-header" }, [
                          Fe,
                          e("button", { onClick: k }, Be),
                        ]),
                        e("div", qe, [
                          e("div", Je, [
                            e(
                              "a",
                              {
                                class: "campaign-link",
                                href:
                                  Y(K) +
                                  "campanha/entrar/" +
                                  ((n = t.value) == null ? void 0 : n.joinId),
                              },
                              ca(
                                Y(K) +
                                  "campanha/entrar/" +
                                  ((y = t.value) == null ? void 0 : y.joinId)
                              ),
                              9,
                              ze
                            ),
                          ]),
                          g.value
                            ? (s(),
                              i("div", Ze, [
                                e(
                                  "button",
                                  {
                                    class: "button-naked reset-button",
                                    onClick: ga,
                                  },
                                  " Resetar "
                                ),
                                e(
                                  "button",
                                  {
                                    class: "button-primary share-button",
                                    onClick: na,
                                  },
                                  " Copy "
                                ),
                              ]))
                            : (s(),
                              i("div", Ge, [
                                e(
                                  "button",
                                  {
                                    class: "button-primary share-button",
                                    onClick: na,
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
              m(
                l,
                {
                  modelValue: R.value,
                  "onUpdate:modelValue":
                    a[13] || (a[13] = (n) => (R.value = n)),
                  classes: "modal-container",
                },
                {
                  default: D(() => [
                    m(
                      Za,
                      {
                        campaign: t.value,
                        "is-campaign": "",
                        onHandleCloseModal:
                          a[12] || (a[12] = (n) => (R.value = !R.value)),
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
              m(
                l,
                {
                  modelValue: L.value,
                  "onUpdate:modelValue":
                    a[14] || (a[14] = (n) => (L.value = n)),
                  classes: "modal-container",
                },
                {
                  default: D(() => [
                    e("div", { class: "modal-content modal-width" }, [
                      e("div", { class: "modal-header" }, [
                        Ke,
                        e("button", { onClick: k }, We),
                      ]),
                      e("div", { class: "modal-body" }, [
                        Xe,
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
              m(
                Ea,
                { name: "toast" },
                {
                  default: D(() => [
                    u.value.alive
                      ? (s(),
                        Fa(
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
  gt = qa(at, [["__scopeId", "data-v-acc12a5a"]]);
export { gt as default };

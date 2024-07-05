import {
  d as Ta,
  g as La,
  M as Na,
  u as xa,
  S as Ha,
  r as d,
  e as Fa,
  A as ra,
  P as C,
  R as z,
  F as Z,
  B as V,
  Z as ua,
  $ as Oa,
  w as ca,
  i as ja,
  o as s,
  c as i,
  a as e,
  m as h,
  L as aa,
  j as w,
  t as ma,
  k as c,
  n as ea,
  q as ta,
  x as D,
  T as Aa,
  N as M,
  v as Ea,
  p as $a,
  b as Ba,
  l as va,
  O as pa,
  J as G,
  _ as qa,
} from "./index-QwuuguuZ.js";
import { L as ha } from "./LoadingView-BDyk9qee.js";
import { C as Ja } from "./CharacterCard-15p3vqPf.js";
import { T as za } from "./ToastNotification-2J6AO8ev.js";
import { P as Za } from "./PictureModal-TrL67c-c.js";
import { T as Ga } from "./TabNav-0k8MUq4h.js";
import { P as Ka } from "./PlayerCard-u6avled0.js";
import { C as Qa } from "./CombatCard-Gc3bqO4T.js";
import { g as Wa } from "./firebase-UUb4pQvs.js";
import { P as Xa } from "./PrivateFeat-2NQL7iKE.js";
import "./share-icon-J6b_MEIl.js";
import "./trash-icon-Dl18GMfa.js";
import "./index.esm2017-JfeAG2s4.js";
import "./v4-cyCr5FZV.js";
const m = (E) => ($a("data-v-7f75eedc"), (E = E()), Ba(), E),
  Ya = { key: 0, class: "container" },
  ae = { class: "header-buttons" },
  ee = ["onMouseup"],
  te = ["onMouseup"],
  oe = ["onMouseup"],
  ne = { class: "campaign-name" },
  se = { class: "campaign-content" },
  ie = { key: 0, class: "campaign-img-container" },
  le = ["src"],
  de = { class: "campaign-description" },
  re = ["innerHTML"],
  ue = { key: 0, class: "campaign-list-container" },
  ce = { key: 0 },
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
  fe = [he],
  ge = { key: 1 },
  _e = { key: 0 },
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
  xe = m(() =>
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
  ),
  He = [xe],
  Fe = m(() =>
    e(
      "h4",
      null,
      "The agent can be re-added to the campaign",
      -1
    )
  ),
  Oe = { key: 3 },
  je = m(() => e("h2", null, "Remove player from campaign?", -1)),
  Ae = m(() =>
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
  ),
  Ee = [Ae],
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
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
  ),
  ze = [Je],
  Ze = { class: "modal-body" },
  Ge = { class: "campaign-link-container" },
  Ke = ["href"],
  Qe = { key: 0, class: "campaign-link-buttons" },
  We = { key: 1, class: "campaign-link-buttons-no-dm" },
  Xe = m(() => e("h2", null, "Leave campaign?", -1)),
  Ye = m(() =>
    e("img", { class: "close-icon", src: G, alt: "fechar" }, null, -1)
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
    setup(E) {
      const g = La(),
        u = Na(),
        v = xa(),
        oa = Ha().params.id,
        K = "https://crisordemparanormal.com/",
        I = d(!0),
        $ = d(!1),
        T = d(!1),
        R = d(!1),
        B = d(!1),
        L = d(!1),
        N = d(),
        U = d(),
        P = d(!1),
        t = d(),
        x = d([]),
        H = d([]),
        S = d(0),
        Q = d(),
        W = d(),
        f = d(!1),
        X = d(0),
        na = d([
          { label: "Agents", value: 0 },
          { label: "Players", value: 1 },
        ]),
        F = d(0),
        r = d({ message: "", type: "info", alive: !1, timeout: 0 });
      Fa(async () => {
        var O, n, y;
        if (!g.currentUser) return;
        X.value = await Wa((O = g.currentUser) == null ? void 0 : O.uid);
        const o = await ra(C(u, "campaigns", oa));
        o.data() || v.push({ name: "not-found" }),
          (t.value = o.data()),
          (t.value.id = o.id),
          (await ra(C(u, "users", g.currentUser.uid)))
            .data()
            .campaignsId.includes(oa) ||
            v.push({ name: "campaign-page-denied" }),
          ((n = g.currentUser) == null ? void 0 : n.uid) ===
            ((y = t.value) == null ? void 0 : y.uid) &&
            ((f.value = !0), na.value.push({ label: "Encounters", value: 2 }));
        const p = z(u, "characters"),
          _ = Z(p, V("campaignDocId", "==", t.value.id));
        Q.value = ua(_, (Y) => {
          const j = [];
          for (const A of Y.docs) {
            const J = A.data();
            (J.id = A.id), j.push(J);
          }
          (x.value = j), S.value < 2 && S.value++;
        });
        const b = z(u, "users"),
          q = Z(b, V("campaignsId", "array-contains", t.value.id));
        W.value = ua(q, (Y) => {
          var A;
          const j = [];
          for (const J of Y.docs) {
            const da = J.data();
            da.uid !== ((A = t.value) == null ? void 0 : A.uid) && j.push(da);
          }
          (H.value = j), S.value < 2 && S.value++;
        });
      }),
        Oa(() => {
          Q.value && Q.value(), W.value && W.value();
        }),
        ca(S, () => {
          I.value !== !1 && S.value >= 2 && (I.value = !1);
        });
      const fa = () => {
          t.value &&
            f.value &&
            ((t.value.joinId = crypto.randomUUID().substring(0, 13)),
            M(C(u, "campaigns", t.value.id), t.value));
        },
        sa = async () => {
          t.value &&
            (await navigator.clipboard.writeText(
              K + "campanha/entrar/" + t.value.joinId
            ),
            (r.value.message = "Link copied"),
            (r.value.alive = !0),
            k());
        };
      ca(
        () => r.value.alive,
        () => {
          r.value.alive === !0 &&
            (r.value.timeout = window.setTimeout(
              () => (r.value.alive = !1),
              3e3
            ));
        }
      );
      const ga = () => {
          (r.value.alive = !1), clearTimeout(r.value.timeout);
        },
        _a = (o) => {
          var a;
          if (g.currentUser && o)
            return (
              g.currentUser.uid === o ||
              g.currentUser.uid === ((a = t.value) == null ? void 0 : a.uid)
            );
        },
        ba = async () => {
          var a, l;
          if (!((a = N.value) != null && a.id)) return;
          P.value = !0;
          const o = (l = N.value) == null ? void 0 : l.id;
          await M(C(u, "characters", o), { campaignDocId: "" }),
            k(),
            (P.value = !1),
            (r.value.message = "Agent removed from the campaign!"),
            (r.value.alive = !0);
        },
        Ca = async () => {
          var p;
          if (!t.value || !U.value) return;
          P.value = !0;
          const o = z(u, "characters"),
            a = Z(
              o,
              V("campaignDocId", "==", t.value.id),
              V("uid", "==", (p = U.value) == null ? void 0 : p.uid)
            ),
            l = await va(a);
          for (const _ of l.docs) {
            const b = _.data();
            (b.id = _.id),
              await M(C(u, "characters", b.id), { campaignDocId: "" });
          }
          await M(C(u, "users", U.value.uid), { campaignsId: pa(t.value.id) }),
            k(),
            (P.value = !1),
            (r.value.message = "Player removed from the campaign!"),
            (r.value.alive = !0);
        },
        ka = async () => {
          var p;
          if (f.value || !t.value || !g.currentUser) return;
          k(), (P.value = !0);
          const o = z(u, "characters"),
            a = Z(
              o,
              V("campaignDocId", "==", t.value.id),
              V("uid", "==", (p = g.currentUser) == null ? void 0 : p.uid)
            ),
            l = await va(a);
          for (const _ of l.docs) {
            const b = _.data();
            (b.id = _.id),
              await M(C(u, "characters", b.id), { campaignDocId: "" });
          }
          await M(C(u, "users", g.currentUser.uid), {
            campaignsId: pa(t.value.id),
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
        ia = () => {
          var o;
          (I.value = !0),
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
            f.value &&
            ((t.value.pictureURL = o),
            (t.value.pictureFullPath = a),
            M(C(u, "campaigns", t.value.id), t.value),
            k());
        },
        Va = async (o) => {
          var l;
          if (!t.value || !((l = t.value) != null && l.id) || !t.value.combats)
            return;
          const a = t.value.combats.findIndex((p) => p.id === o);
          t.value.currentCombat === a && (t.value.currentCombat = -1),
            t.value.combats.splice(a, 1),
            await M(C(u, "campaigns", t.value.id), t.value);
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
        var p, _, b, q, O;
        const l = ja("vue-final-modal");
        return I.value
          ? (s(), i("div", tt, [c(ha, { "page-loading": "" })]))
          : (s(),
            i("div", Ya, [
              e("div", ae, [
                f.value
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
                f.value
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
                    onClick: a[3] || (a[3] = (n) => (T.value = !T.value)),
                  },
                  " Invite Players "
                ),
                f.value
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
                      ee
                    ))
                  : h("", !0),
                f.value && X.value >= 3
                  ? (s(),
                    i(
                      "button",
                      {
                        key: 3,
                        class: "button-primary campaign-buttons",
                        onClick: ia,
                        onMouseup: w(la, ["middle"]),
                        onMousedown:
                          a[5] ||
                          (a[5] = w(() => {}, ["middle", "prevent", "stop"])),
                      },
                      " Create Encounter ",
                      40,
                      te
                    ))
                  : h("", !0),
                !((p = t.value) != null && p.privateMasterScreen) || f.value
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
                      " DM Screen ",
                      40,
                      oe
                    ))
                  : h("", !0),
              ]),
              e("div", ne, ma((_ = t.value) == null ? void 0 : _.name), 1),
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
                e("div", de, [
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
                ? (s(), i("div", Te, [c(ha, { "page-loading": "" })]))
                : (s(),
                  i("div", ue, [
                    c(
                      Ga,
                      {
                        "font-size-big": "",
                        "current-tab": F.value,
                        "tab-options": na.value,
                        onHandleNavigation:
                          a[7] || (a[7] = (n) => (F.value = n)),
                      },
                      null,
                      8,
                      ["current-tab", "tab-options"]
                    ),
                    F.value === 0
                      ? (s(),
                        i("div", ce, [
                          x.value.length > 0
                            ? (s(),
                              i("div", me, [
                                e("div", ve, [
                                  (s(!0),
                                  i(
                                    ea,
                                    null,
                                    ta(
                                      x.value,
                                      (n) => (
                                        s(),
                                        i("div", { key: n.id }, [
                                          c(
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
                            : (s(), i("div", pe, fe)),
                        ]))
                      : h("", !0),
                    F.value === 1
                      ? (s(),
                        i("div", ge, [
                          H.value.length > 0
                            ? (s(),
                              i("div", _e, [
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
                                          c(
                                            Ka,
                                            {
                                              user: n,
                                              "can-remove-from-campaign":
                                                f.value,
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
                    F.value === 2
                      ? (s(),
                        i("div", we, [
                          X.value >= 3
                            ? (s(),
                              i("div", Ie, [
                                (O = t.value) != null &&
                                O.combats &&
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
                                                c(
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
                                            onMouseup: w(la, ["middle"]),
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
                                          De
                                        ),
                                      ]),
                                    ])),
                              ]))
                            : (s(), i("div", Me, [c(Xa)])),
                        ]))
                      : h("", !0),
                  ])),
              N.value
                ? (s(),
                  i("div", Le, [
                    c(
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
                              Ne,
                              e("button", { onClick: k }, He),
                            ]),
                            e("div", { class: "modal-body" }, [
                              Fe,
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
                  i("div", Oe, [
                    c(
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
                              je,
                              e("button", { onClick: k }, Ee),
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
              c(
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
                      e("div", Be, [
                        e("div", { class: "modal-header" }, [
                          qe,
                          e("button", { onClick: k }, ze),
                        ]),
                        e("div", Ze, [
                          e("div", Ge, [
                            e(
                              "a",
                              {
                                class: "campaign-link",
                                href:
                                  aa(K) +
                                  "campanha/entrar/" +
                                  ((n = t.value) == null ? void 0 : n.joinId),
                              },
                              ma(
                                aa(K) +
                                  "campanha/entrar/" +
                                  ((y = t.value) == null ? void 0 : y.joinId)
                              ),
                              9,
                              Ke
                            ),
                          ]),
                          f.value
                            ? (s(),
                              i("div", Qe, [
                                e(
                                  "button",
                                  {
                                    class: "button-naked reset-button",
                                    onClick: fa,
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
              c(
                l,
                {
                  modelValue: R.value,
                  "onUpdate:modelValue":
                    a[13] || (a[13] = (n) => (R.value = n)),
                  classes: "modal-container",
                },
                {
                  default: D(() => [
                    c(
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
              c(
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
              c(
                Aa,
                { name: "toast" },
                {
                  default: D(() => [
                    r.value.alive
                      ? (s(),
                        Ea(
                          za,
                          {
                            key: 0,
                            toast: r.value,
                            type: r.value.type,
                            onDismiss: ga,
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
  bt = qa(ot, [["__scopeId", "data-v-7f75eedc"]]);
export { bt as default };
